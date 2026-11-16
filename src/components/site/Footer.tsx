import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ChevronRight, Heart } from "lucide-react";
import { SITE } from "@/data/site";
import { POULTRY_PRODUCTS, CATTLE_PRODUCTS } from "@/data/products";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="grain-navy text-primary-foreground">
      {/* Reduced horizontal left and right side distance with wide container */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 grid gap-10 py-16 lg:py-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
        {/* Brand & Overview */}
        <div className="sm:col-span-2 lg:col-span-3">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            POULTRIVA is a premier animal health and feed supplement brand associated with {SITE.company}, Nashik. We deliver
            science-driven nutritional solutions supporting poultry and dairy livestock performance.
          </p>
          <p className="serif-accent mt-4 max-w-sm text-sm text-gold-soft">
            Science in Nutrition. Excellence in Performance.
          </p>
        </div>

        {/* Poultry Products */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Poultry Products</h2>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-primary-foreground/80">
            {POULTRY_PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center gap-1.5 hover:text-gold-soft transition-colors"
              >
                <ChevronRight className="h-3 w-3 shrink-0 text-gold-soft/60 transition-transform group-hover:translate-x-0.5 group-hover:text-gold-soft" aria-hidden />
                <span className="truncate">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Cattle Products */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-forest" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Cattle Products</h2>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-xs sm:text-sm text-primary-foreground/80">
            {CATTLE_PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex items-center gap-1.5 hover:text-gold-soft transition-colors"
              >
                <ChevronRight className="h-3 w-3 shrink-0 text-gold-soft/60 transition-transform group-hover:translate-x-0.5 group-hover:text-gold-soft" aria-hidden />
                <span className="truncate">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Company & Solutions */}
        <div className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Company</h2>
          <div className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm text-primary-foreground/80">
            <Link to="/about-us" className="hover:text-gold-soft transition-colors">About Us</Link>
            <Link to="/solutions" className="hover:text-gold-soft transition-colors">Solutions</Link>
            <Link to="/products" className="hover:text-gold-soft transition-colors">Product Portfolio</Link>
            <Link to="/quality" className="hover:text-gold-soft transition-colors">Quality & Commitment</Link>
            <Link to="/faqs" className="hover:text-gold-soft transition-colors">FAQs</Link>
            <Link to="/business-enquiries" className="hover:text-gold-soft transition-colors">Business Enquiries</Link>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Get in Touch</h2>
          <ul className="mt-4 flex flex-col gap-3.5 text-xs sm:text-sm text-primary-foreground/80">
            <FooterContact icon={Phone} href={SITE.phoneHref} label="Phone">{SITE.phone}</FooterContact>
            <FooterContact icon={Mail} href={`mailto:${SITE.email}`} label="Email">{SITE.email}</FooterContact>
            <FooterContact icon={MapPin} label="Office">{SITE.address}</FooterContact>
          </ul>
        </div>
      </div>

      {/* Large watermark text with wide container */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 pb-4">
        <p className="select-none text-[clamp(3.5rem,15vw,13rem)] font-bold leading-none tracking-tighter text-primary-foreground/5" aria-hidden>
          POULTRIVA
        </p>
      </div>

      {/* Copyright row */}
      <div className="border-t border-primary-foreground/10">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-4 py-5 text-xs text-primary-foreground/75 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} POULTRIVA · {SITE.company}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-gold-soft transition-colors">Privacy</Link>
            <Link to="/terms-of-use" className="hover:text-gold-soft transition-colors">Terms</Link>
            <Link to="/disclaimer" className="hover:text-gold-soft transition-colors">Disclaimer</Link>
            <a
              href="https://sapdigitechsolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-gold-soft transition-colors"
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
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10">
        <Icon className="h-3.5 w-3.5 text-gold-soft" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="min-w-0 break-words leading-relaxed">{children}</span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} aria-label={label} className="flex items-start gap-2.5 hover:text-gold-soft transition-colors">
          {body}
        </a>
      ) : (
        <div className="flex items-start gap-2.5 text-primary-foreground/60">{body}</div>
      )}
    </li>
  );
}
