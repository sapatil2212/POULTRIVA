import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Children, cloneElement, isValidElement, useEffect, useId, useRef, useState, type ReactElement } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { SITE, waLink } from "@/data/site";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

/** Set to a real endpoint later (e.g. form service URL) to enable direct submission. */
export const FORM_ENDPOINT: string | null = null;

const phone = z
  .string()
  .trim()
  .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid phone number");
const consent = z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) });

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone,
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1500),
  consent,
});

const BUSINESS_TYPES = ["Poultry Farmer", "Feed Manufacturer", "Distributor", "Dealer", "Veterinary Professional", "Other"];
const CATEGORIES = ["Product Information", "Bulk Enquiry", "Dealership", "Distribution Partnership", "Technical Information", "General Business Enquiry"];

const businessSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  business: z.string().trim().min(2, "Please enter your business name").max(150),
  phone,
  email: z.string().trim().email("Enter a valid email").max(255),
  city: z.string().trim().min(2, "Required").max(80),
  state: z.string().trim().min(2, "Required").max(80),
  businessType: z.string().min(1, "Select a business type"),
  product: z.string().min(1, "Select a product"),
  category: z.string().min(1, "Select a category"),
  quantity: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1500),
  consent,
});

function Field({ label, error, children, id }: { label: string; error?: string | undefined; children: React.ReactNode; id: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
        {label}
      </label>
      {Children.map(children, (child) => isValidElement(child) ? cloneElement(child as ReactElement<{ "aria-invalid"?: boolean; "aria-describedby"?: string | undefined }>, { "aria-invalid": Boolean(error), "aria-describedby": error ? `${id}-error` : undefined }) : child)}
      {error && <p id={`${id}-error`} className="text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}

function SendPanel({ text, subject, onReset }: { text: string; subject: string; onReset: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => { panelRef.current?.focus(); }, []);
  return (
    <div ref={panelRef} tabIndex={-1} aria-label="Prepared enquiry" className="rounded-md border border-gold-soft bg-accent p-5 sm:p-8">
      <p className="eyebrow">Ready to send</p>
      <h3 className="mt-4 text-2xl font-semibold">Your enquiry is prepared.</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Nothing has been sent yet. Choose how you'd like to send it — WhatsApp or your email app will open with your details filled in.
      </p>
      <pre className="mt-6 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded bg-card p-4 font-sans text-xs text-foreground">{text}</pre>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={waLink(text)} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <MessageCircle className="h-4 w-4" /> Open WhatsApp to send
        </a>
        <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`} className="btn-ghost">
          <Mail className="h-4 w-4" /> Send by email instead
        </a>
        <Button variant="link" type="button" onClick={onReset} className="text-sm text-muted-foreground underline">
          Edit details
        </Button>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [prepared, setPrepared] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });
  if (prepared) return <SendPanel text={prepared} subject={subject} onReset={() => setPrepared(null)} />;
  return (
    <form
      noValidate
      onSubmit={handleSubmit((d) => {
        setSubject(`POULTRIVA enquiry: ${d.subject}`);
        setPrepared(
          `Hello POULTRIVA,\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nSubject: ${d.subject}\n\n${d.message}`,
        );
      })}
      className="grid gap-6 sm:grid-cols-2"
    >
      <Field id="c-name" label="Full name" error={errors.name?.message}>
        <input id="c-name" className="field" autoComplete="name" {...register("name")} />
      </Field>
      <Field id="c-phone" label="Phone number" error={errors.phone?.message}>
        <input id="c-phone" className="field" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>
      <Field id="c-email" label="Email address" error={errors.email?.message}>
        <input id="c-email" className="field" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field id="c-subject" label="Subject" error={errors.subject?.message}>
        <input id="c-subject" className="field" {...register("subject")} />
      </Field>
      <div className="sm:col-span-2">
        <Field id="c-message" label="Message" error={errors.message?.message}>
          <textarea id="c-message" rows={5} className="field" {...register("message")} />
        </Field>
      </div>
      <Consent register={register("consent")} error={errors.consent?.message} />
      <div className="sm:col-span-2">
        <Button type="submit" className="btn-primary !rounded-full h-auto">Prepare my enquiry</Button>
      </div>
    </form>
  );
}

function Consent({ register, error }: { register: UseFormRegisterReturn; error?: string | undefined }) {
  const id = useId();
  return (
    <div className="sm:col-span-2">
      <label htmlFor={id} className="flex items-start gap-3 text-sm text-muted-foreground">
        <input id={id} type="checkbox" aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className="mt-1 h-4 w-4 shrink-0 accent-[var(--navy)]" {...register} />
        <span>I agree that POULTRIVA may use these details to respond to my enquiry, as described in the <Link to="/privacy-policy" className="text-navy underline">privacy policy</Link>.</span>
      </label>
      {error && <p id={`${id}-error`} className="mt-2 text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}

export function BusinessForm({ defaultProduct }: { defaultProduct?: string | undefined }) {
  const [prepared, setPrepared] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof businessSchema>>({
    resolver: zodResolver(businessSchema),
    defaultValues: { product: defaultProduct ?? "" },
  });
  if (prepared) return <SendPanel text={prepared} subject={subject} onReset={() => setPrepared(null)} />;
  return (
    <form
      noValidate
      onSubmit={handleSubmit((d) => {
        setSubject(`POULTRIVA business enquiry: ${d.category}`);
        setPrepared(
          `Hello POULTRIVA, business enquiry:\n\nName: ${d.name}\nBusiness: ${d.business}\nMobile: ${d.phone}\nEmail: ${d.email}\nLocation: ${d.city}, ${d.state}\nBusiness type: ${d.businessType}\nInterested product: ${d.product}\nEnquiry: ${d.category}\nExpected quantity: ${d.quantity || "—"}\n\n${d.message}`,
        );
      })}
      className="grid gap-6 sm:grid-cols-2"
    >
      <Field id="b-name" label="Full name" error={errors.name?.message}>
        <input id="b-name" className="field" autoComplete="name" {...register("name")} />
      </Field>
      <Field id="b-business" label="Business name" error={errors.business?.message}>
        <input id="b-business" className="field" autoComplete="organization" {...register("business")} />
      </Field>
      <Field id="b-phone" label="Mobile number" error={errors.phone?.message}>
        <input id="b-phone" className="field" type="tel" {...register("phone")} />
      </Field>
      <Field id="b-email" label="Email" error={errors.email?.message}>
        <input id="b-email" className="field" type="email" {...register("email")} />
      </Field>
      <Field id="b-city" label="City" error={errors.city?.message}>
        <input id="b-city" className="field" {...register("city")} />
      </Field>
      <Field id="b-state" label="State" error={errors.state?.message}>
        <input id="b-state" className="field" {...register("state")} />
      </Field>
      <Field id="b-type" label="Business type" error={errors.businessType?.message}>
        <select id="b-type" className="field" {...register("businessType")}>
          <option value="">Select…</option>
          {BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <Field id="b-product" label="Interested product" error={errors.product?.message}>
        <select id="b-product" className="field" {...register("product")}>
          <option value="">Select…</option>
          {PRODUCTS.map((p) => <option key={p.slug}>{p.name}</option>)}
          <option>Multiple products</option>
        </select>
      </Field>
      <Field id="b-cat" label="Enquiry category" error={errors.category?.message}>
        <select id="b-cat" className="field" {...register("category")}>
          <option value="">Select…</option>
          {CATEGORIES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <Field id="b-qty" label="Expected quantity (optional)" error={errors.quantity?.message}>
        <input id="b-qty" className="field" {...register("quantity")} />
      </Field>
      <div className="sm:col-span-2">
        <Field id="b-msg" label="Message" error={errors.message?.message}>
          <textarea id="b-msg" rows={5} className="field" {...register("message")} />
        </Field>
      </div>
      <Consent register={register("consent")} error={errors.consent?.message} />
      <div className="sm:col-span-2">
        <Button type="submit" className="btn-primary !rounded-full h-auto">Prepare my enquiry</Button>
      </div>
    </form>
  );
}
