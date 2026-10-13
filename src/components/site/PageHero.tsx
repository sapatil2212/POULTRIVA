import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  accent,
  inlineAccent = false,
  intro,
  crumbs = [],
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  inlineAccent?: boolean;
  intro?: ReactNode;
  crumbs?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-24 pb-9 md:pt-28 md:pb-11">
      <svg
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] opacity-60"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="var(--gold-soft)" strokeWidth="0.4" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="var(--gold-soft)" strokeWidth="0.4" />
      </svg>
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-navy">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="mx-2 text-gold">/</span>
              {c.to ? (
                <Link to={c.to} className="hover:text-navy">{c.label}</Link>
              ) : (
                <span className="text-foreground">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-xl mt-3 max-w-4xl">
            {title}
            {accent &&
              (inlineAccent ? (
                <>
                  {" "}
                  <span className="serif-accent text-gold-cta">{accent}</span>
                </>
              ) : (
                <>
                  <br />
                  <span className="serif-accent text-gold-cta">{accent}</span>
                </>
              ))}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
