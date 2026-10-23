# POULTRIVA email delivery

Contact, business-enquiry, and gated product-information forms send mail through the server-side SMTP integration in `src/lib/submit-enquiry.ts`.

## Local development

Create `.env.local` from `.env.example` and set:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-sender@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM_NAME=POULTRIVA
SMTP_ADMIN_EMAIL=admin@example.com
```

`.env.local` is ignored by Git. Never put the app password in a source file or a `VITE_` environment variable; `VITE_` values are shipped to browsers.

## Production (Vercel / Node runtime)

Add the same variables in the deployment project's Environment Variables settings, then redeploy. SMTP requires a Node-compatible server runtime with outbound TCP access; this Nodemailer transport is not suitable for a standard Cloudflare Workers runtime.

## Delivery behavior

- Admin notification: sent to `SMTP_ADMIN_EMAIL`, with Reply-To set to the visitor.
- Visitor confirmation: sent to the form's email address, with Reply-To set to the admin.
- Product-information leads: appended to the `Product Leads` Google Sheet tab, then both emails are sent. If the Sheet write fails, the product details remain locked and the visitor sees an error.
- Contact and business forms: appended to the `Contact Leads` tab, then both parties are emailed through SMTP.

## Google Apps Script

The website posts `skipEmail: true` to the Apps Script because SMTP handles both messages. Deploy the current `docs/product-info-lead.gs` version so the Apps Script only uses its MailApp fallback for manual or legacy submissions. After editing Apps Script, deploy a **new version** under Manage deployments.
