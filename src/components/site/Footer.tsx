import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { PRODUCTS } from "@/data/products";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="grain-navy text-primary-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            A poultry nutrition and feed supplement brand associated with {SITE.company}, Nashik.
          </p>
        </div>
        <FooterCol title="Products">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="hover:text-gold-soft">
              {p.name}
            </Link>
          ))}
        </FooterCol>
        <FooterCol title="Company">
          <Link to="/about-us" className="hover:text-gold-soft">About Us</Link>
          <Link to="/solutions" className="hover:text-gold-soft">Solutions</Link>
          <Link to="/quality" className="hover:text-gold-soft">Quality & Commitment</Link>
          <Link to="/resources" className="hover:text-gold-soft">Resources</Link>
          <Link to="/faqs" className="hover:text-gold-soft">FAQs</Link>
        </FooterCol>
        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Get in touch</h2>
          <ul className="mt-5 flex flex-col gap-4 text-sm text-primary-foreground/80">
            <FooterContact icon={Phone} href={SITE.phoneHref} label="Phone">{SITE.phone}</FooterContact>
            <FooterContact icon={Mail} href={`mailto:${SITE.email}`} label="Email">{SITE.email}</FooterContact>
            <FooterContact icon={MapPin} label="Office">{SITE.address}</FooterContact>
          </ul>
        </div>
      </div>
      <div className="container-x pb-6">
        <p className="select-none text-[clamp(3.5rem,15vw,13rem)] font-bold leading-none tracking-tighter text-primary-foreground/5" aria-hidden>
          POULTRIVA
        </p>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-primary-foreground/75 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} POULTRIVA · {SITE.company}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gold-soft">Privacy</Link>
            <Link to="/terms-of-use" className="hover:text-gold-soft">Terms</Link>
            <Link to="/disclaimer" className="hover:text-gold-soft">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">{title}</h2>
      <div className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/80">{children}</div>
    </div>
  );
}

function FooterContact({
  icon: Icon,
  href,
  label,
  children,
}: {
  icon: typeof Phone;
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  const body = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10">
        <Icon className="h-4 w-4 text-gold-soft" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="min-w-0 break-words leading-relaxed">{children}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} aria-label={label} className="flex items-start gap-3 hover:text-gold-soft">
          {body}
        </a>
      ) : (
        <div className="flex items-start gap-3 text-primary-foreground/60">{body}</div>
      )}
    </li>
  );
}
