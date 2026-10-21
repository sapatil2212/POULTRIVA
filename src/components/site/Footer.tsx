import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ChevronRight, Heart } from "lucide-react";
import { SITE } from "@/data/site";
import { PRODUCTS } from "@/data/products";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="grain-navy text-primary-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            POULTRIVA is a poultry nutrition and feed supplement brand associated with {SITE.company}, Nashik. We focus on
            science-driven nutritional solutions that support poultry health, growth, and performance.
          </p>
          <p className="serif-accent mt-4 max-w-sm text-sm text-gold-soft">
            Science in Nutrition. Excellence in Performance.
          </p>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Products</h2>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-primary-foreground/80">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center gap-2 hover:text-gold-soft"
              >
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gold-soft/60 transition-transform group-hover:translate-x-0.5 group-hover:text-gold-soft" aria-hidden />
                <span>{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <FooterCol title="Company">
          <Link to="/about-us" className="hover:text-gold-soft">About Us</Link>
          <Link to="/solutions" className="hover:text-gold-soft">Solutions</Link>
          <Link to="/quality" className="hover:text-gold-soft">Quality & Commitment</Link>
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
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link to="/privacy-policy" className="hover:text-gold-soft">Privacy</Link>
            <Link to="/terms-of-use" className="hover:text-gold-soft">Terms</Link>
            <Link to="/disclaimer" className="hover:text-gold-soft">Disclaimer</Link>
            <a
              href="https://sapdigitechsolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-gold-soft"
            >
              Made with
              <Heart className="h-3.5 w-3.5 fill-gold-soft text-gold-soft" aria-label="love" />
              by SAP DigiTech Solutions
            </a>
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
