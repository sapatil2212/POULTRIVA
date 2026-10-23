import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const phone = z
  .string()
  .trim()
  .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid phone number");

export const enquirySchema = z
  .object({
    kind: z.enum(["product-lead", "contact", "business"]),
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(255),
    phone,
    product: z.string().trim().max(150).optional(),
    city: z.string().trim().max(80).optional(),
    state: z.string().trim().max(80).optional(),
    subject: z.string().trim().max(150).optional(),
    message: z.string().trim().max(1500).optional(),
    business: z.string().trim().max(150).optional(),
    businessType: z.string().trim().max(100).optional(),
    category: z.string().trim().max(100).optional(),
    quantity: z.string().trim().max(100).optional(),
    page: z.string().trim().max(1000).optional(),
    website: z.string().max(0).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.kind === "product-lead") {
      for (const key of ["product", "city", "state"] as const) {
        if (!data[key] || data[key].length < 2) {
          ctx.addIssue({ code: "custom", path: [key], message: `${key} is required` });
        }
      }
    }
    if (data.kind === "contact") {
      if (!data.product || data.product.length < 1) {
        ctx.addIssue({ code: "custom", path: ["product"], message: "Select at least one product" });
      }
      if (!data.message || data.message.length < 10) {
        ctx.addIssue({ code: "custom", path: ["message"], message: "Message is required" });
      }
    }
    if (data.kind === "business") {
      for (const key of [
        "business",
        "city",
        "state",
        "businessType",
        "product",
        "category",
      ] as const) {
        if (!data[key] || data[key].length < 1) {
          ctx.addIssue({ code: "custom", path: [key], message: `${key} is required` });
        }
      }
      if (!data.message || data.message.length < 10) {
        ctx.addIssue({ code: "custom", path: ["message"], message: "Message is required" });
      }
    }
  });

export type EnquiryInput = z.infer<typeof enquirySchema>;

function escapeHtml(value: string | undefined) {
  return (value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function line(label: string, value: string | undefined) {
  return value ? `${label}: ${value}` : "";
}

function htmlRow(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td align="center" style="padding:8px 12px;color:#66746c;border-bottom:1px solid #e8ece9;vertical-align:top;text-align:center">${escapeHtml(label)}</td><td align="center" style="padding:8px 12px;color:#102f26;border-bottom:1px solid #e8ece9;font-weight:600;text-align:center">${escapeHtml(value)}</td></tr>`;
}

function titles(data: EnquiryInput) {
  if (data.kind === "product-lead") {
    return {
      admin: `New product information lead — ${data.product}`,
      user: `Your ${data.product} information request — POULTRIVA`,
      heading: "Product information request received",
    };
  }
  if (data.kind === "business") {
    return {
      admin: `New business enquiry — ${data.category}`,
      user: "Your business enquiry — POULTRIVA",
      heading: "Business enquiry received",
    };
  }
  return {
    admin: `New poultry product enquiry — ${data.product}`,
    user: "We received your poultry product enquiry — POULTRIVA",
    heading: "Thank you for your interest in POULTRIVA",
  };
}

function adminText(data: EnquiryInput) {
  return [
    "A new enquiry was submitted on the POULTRIVA website.",
    "",
    line("Type", data.kind),
    line("Product", data.product),
    line("Name", data.name),
    line("Email", data.email),
    line("Phone / WhatsApp", data.phone),
    line("Business", data.business),
    line("Business type", data.businessType),
    line("Category", data.category),
    line("Quantity", data.quantity),
    line("City", data.city),
    line("State", data.state),
    line("Subject", data.subject),
    line("Message", data.message),
    line("Page", data.page),
  ]
    .filter(Boolean)
    .join("\n");
}

function emailShell(title: string, intro: string, body: string, hasLogo: boolean) {
  const brand = hasLogo
    ? '<img src="cid:poultriva-logo" width="180" height="43" alt="POULTRIVA" style="display:block;width:180px;height:auto;border:0;margin:0 auto" />'
    : '<div style="font-size:14px;letter-spacing:2px;font-weight:700;color:#102f26">POULTRIVA</div>';
  return `<!doctype html><html><body style="margin:0;background:#f7f7f3;font-family:Arial,sans-serif;color:#102f26"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f7f7f3;padding:28px 14px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e2e7e4;text-align:center"><tr><td align="center" style="padding:24px 28px;border-bottom:1px solid #edf0ee;text-align:center">${brand}</td></tr><tr><td align="center" style="padding:30px 28px;text-align:center"><table role="presentation" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto"><tr><td align="center" style="width:56px;height:56px;border-radius:28px;background:#f3ead0;text-align:center;vertical-align:middle;color:#9a761d;font-size:30px;line-height:56px;font-weight:700">✓</td></tr></table><div style="margin-top:20px;font-size:23px;line-height:1.3;font-weight:700;color:#102f26;text-align:center">${escapeHtml(title)}</div><p style="margin:12px auto 22px;max-width:500px;line-height:1.7;color:#53645d;text-align:center">${escapeHtml(intro)}</p><div style="text-align:center">${body}</div><p style="margin:26px 0 0;padding-top:18px;border-top:1px solid #edf0ee;font-size:12px;line-height:1.6;color:#7a8882;text-align:center">Science in Nutrition. Excellence in Performance.</p></td></tr></table></td></tr></table></body></html>`;
}

async function loadLogoAttachment() {
  try {
    const [{ readFile }, { join }] = await Promise.all([
      import("node:fs/promises"),
      import("node:path"),
    ]);
    const content = await readFile(
      join(process.cwd(), "public", "images", "brand", "Poultriva-dark.png"),
    );
    return { filename: "poultriva-logo.png", content, cid: "poultriva-logo" };
  } catch {
    return null;
  }
}

async function appendLead(data: EnquiryInput) {
  const endpoint = process.env["LEAD_ENDPOINT"];
  if (!endpoint) throw new Error("Google Sheets endpoint is not configured.");

  const response = await fetch(endpoint, {
    method: "POST",
    redirect: "follow",
    headers: { "content-type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      kind: data.kind,
      product: data.product,
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      business: data.business,
      businessType: data.businessType,
      category: data.category,
      quantity: data.quantity,
      message: data.message,
      page: data.page,
      submittedAt: new Date().toISOString(),
      skipEmail: true,
    }),
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) throw new Error(`Google Sheets request failed (${response.status}).`);
  const raw = await response.text();
  try {
    const result = JSON.parse(raw) as { ok?: boolean; error?: string };
    if (!result.ok) throw new Error(result.error || "Google Sheets rejected the lead.");
  } catch (error) {
    if (error instanceof SyntaxError)
      throw new Error("Google Sheets returned an invalid response.");
    throw error;
  }
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator(enquirySchema)
  .handler(async ({ data }) => {
    // Honeypot: report success without sending mail.
    if (data.website) return { ok: true };

    const smtpUser = process.env["SMTP_USER"];
    const smtpPass = process.env["SMTP_PASS"];
    const adminEmail = process.env["SMTP_ADMIN_EMAIL"] || smtpUser;
    if (!smtpUser || !smtpPass || !adminEmail) {
      throw new Error("Email service is not configured.");
    }

    await appendLead(data);

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env["SMTP_HOST"] || "smtp.gmail.com",
      port: Number(process.env["SMTP_PORT"] || 465),
      secure: (process.env["SMTP_SECURE"] || "true") === "true",
      auth: { user: smtpUser, pass: smtpPass.replaceAll(" ", "") },
    });

    const copy = titles(data);
    const detailRows = [
      htmlRow("Type", data.kind),
      htmlRow("Product", data.product),
      htmlRow("Name", data.name),
      htmlRow("Email", data.email),
      htmlRow("Phone / WhatsApp", data.phone),
      htmlRow("Business", data.business),
      htmlRow("Business type", data.businessType),
      htmlRow("Category", data.category),
      htmlRow("Quantity", data.quantity),
      htmlRow("City", data.city),
      htmlRow("State", data.state),
      htmlRow("Subject", data.subject),
      htmlRow("Message", data.message),
      htmlRow("Page", data.page),
    ].join("");

    const logoAttachment = await loadLogoAttachment();
    const mailAttachments = logoAttachment ? { attachments: [logoAttachment] } : {};
    const userSummary =
      data.kind === "product-lead"
        ? `Thank you for your interest in ${data.product}. Your access request has been received, and the detailed product information is now available on the website.`
        : data.product
          ? `Thank you for your interest in ${data.product}. We received your enquiry and our team will contact you shortly.`
          : "We received your enquiry. Our team will review it and contact you shortly.";

    await Promise.all([
      transporter.sendMail({
        ...mailAttachments,
        disableFileAccess: true,
        disableUrlAccess: true,
        from: `"${process.env["SMTP_FROM_NAME"] || "POULTRIVA"}" <${smtpUser}>`,
        to: adminEmail,
        replyTo: data.email,
        subject: copy.admin,
        text: adminText(data),
        html: emailShell(
          copy.heading,
          "A new enquiry was submitted on the POULTRIVA website.",
          `<table role="presentation" width="100%" cellspacing="0" cellpadding="0">${detailRows}</table>`,
          Boolean(logoAttachment),
        ),
      }),
      transporter.sendMail({
        ...mailAttachments,
        disableFileAccess: true,
        disableUrlAccess: true,
        from: `"${process.env["SMTP_FROM_NAME"] || "POULTRIVA"}" <${smtpUser}>`,
        to: data.email,
        replyTo: adminEmail,
        subject: copy.user,
        text: `${copy.heading}\n\n${userSummary}\n\nPOULTRIVA\nScience in Nutrition. Excellence in Performance.`,
        html: emailShell(
          copy.heading,
          userSummary,
          `<p style="margin:0 auto;max-width:500px;line-height:1.7;color:#53645d;text-align:center">A member of our team will respond using the contact details you provided.</p>`,
          Boolean(logoAttachment),
        ),
      }),
    ]);

    return { ok: true };
  });
