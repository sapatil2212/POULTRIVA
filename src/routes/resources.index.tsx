import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources/")({
  head: () =>
    seo(
      "Resources & Insights — Poultry Nutrition Knowledge | POULTRIVA",
      "Educational articles on calcium nutrition, drinking-water quality and digestive management in poultry.",
    ),
  component: Resources,
});

function Resources() {
  const lead = ARTICLES[0]!;
  const rest = ARTICLES.slice(1);
  return (
    <>
      <PageHero
        eyebrow="Resources & insights"
        title="Insights for Informed"
        accent="Poultry Nutrition."
        crumbs={[{ label: "Resources" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Link to="/resources/$slug" params={{ slug: lead.slug }} className="group grid gap-10 md:grid-cols-12 md:items-center">
              <div className="aspect-[16/10] overflow-hidden rounded-[var(--radius-photo)] md:col-span-7">
                <img src={lead.image} alt={lead.imageAlt} width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="md:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-cta">{lead.category}</p>
                <h2 className="display-lg mt-4">{lead.title}</h2>
                <p className="mt-5 text-muted-foreground">{lead.excerpt}</p>
                <span className="link-underline mt-6 inline-flex items-center gap-2 pb-0.5 font-medium text-navy">Read article <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          </Reveal>
          <div className="mt-20 grid gap-12 border-t border-border pt-16 md:grid-cols-2">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.1}>
                <Link to="/resources/$slug" params={{ slug: a.slug }} className="group grid grid-cols-5 gap-6">
                  <div className="col-span-2 aspect-square overflow-hidden rounded-[var(--radius-photo)]">
                    <img src={a.image} alt={a.imageAlt} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="col-span-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-cta">{a.category}</p>
                    <h2 className="mt-3 text-2xl font-semibold leading-snug">{a.title}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
