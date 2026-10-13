import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/data/site";

export function ContactPanel() {
  const rows = [
    { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: waLink() },
    { icon: MapPin, label: "Office", value: SITE.address },
  ];
  return (
    <aside className="grain-navy rounded-md p-8 text-primary-foreground md:p-10 lg:col-span-4 lg:col-start-9">
      <p className="eyebrow !text-gold-soft">Reach us directly</p>
      <ul className="mt-8 space-y-6">
        {rows.map((r) => (
          <li key={r.label} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/10">
              <r.icon className="h-[18px] w-[18px] text-gold-soft" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">{r.label}</p>
              {r.href ? (
                <a
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-1 block break-all text-sm leading-relaxed hover:text-gold-soft"
                >
                  {r.value}
                </a>
              ) : (
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">{r.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
