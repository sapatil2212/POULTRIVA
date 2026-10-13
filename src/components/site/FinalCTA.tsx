import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { Reveal } from "./Reveal";

export function FinalCTA({
  title = "Let's Talk",
  accent = "Poultry Nutrition.",
  copy = "Looking for product information, commercial supply details or business collaboration opportunities? Connect with POULTRIVA.",
}: {
  title?: string;
  accent?: string;
  copy?: string;
}) {
  return (
    <section className="grain-navy relative overflow-hidden text-primary-foreground">
      <svg className="pointer-events-none absolute -left-32 top-1/2 h-[46rem] w-[46rem] -translate-y-1/2" viewBox="0 0 200 200" aria-hidden>
        {[96, 78, 60].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="var(--gold)" strokeOpacity="0.25" strokeWidth="0.3" />
        ))}
      </svg>
      <div className="container-x relative grid items-center gap-8 py-20 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-8">
          <h2 className="display-xl !text-primary-foreground">
            {title}
            <br />
            <span className="serif-accent text-gold-soft">{accent}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col justify-end md:col-span-4">
          <p className="text-base leading-relaxed text-primary-foreground/75">{copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/business-enquiries" className="btn-gold">
              Send an Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={SITE.phoneHref} className="btn-ghost-light">
              <Phone className="h-4 w-4" /> Call Our Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
