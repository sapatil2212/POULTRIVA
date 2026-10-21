import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, MaskImage } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () =>
    seo(
      "Poultry Nutrition Solutions | POULTRIVA",
      "Nutritional support, calcium nutrition, drinking-water pH and digestive environment management for poultry.",
    ),
  component: Solutions,
});

const COPY: Record<string, { title: string; text: string }> = {
  "aminova-gold": {
    title: "Nutritional Support",
    text: "Balanced nutrition is the foundation of poultry performance. Suitable supplementation can complement a well-formulated ration, particularly when planned with a nutritionist for the bird type and production stage.",
  },
  calconova: {
    title: "Calcium & Mineral Nutrition",
    text: "Calcium is an essential nutritional mineral for skeletal structure and, in layers, eggshell formation. It should be managed together with phosphorus and vitamin D as part of the overall mineral balance.",
  },
  aquacyd: {
    title: "Drinking-Water pH Management",
    text: "Water is consumed in larger quantities than feed. Clean supply, regular testing and appropriate pH management are everyday parts of responsible flock management.",
  },
  gutmax: {
    title: "Digestive Environment Management",
    text: "Feed quality, digestive function and hygiene work together. Acidifiers are one tool within this broader approach and should be used responsibly according to the label.",
  },
};

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Nutrition solutions"
        title="Focused Solutions for"
        accent="Poultry Nutrition."
        intro="Four clearly defined focus areas, each supported by a dedicated POULTRIVA product."
        crumbs={[{ label: "Solutions" }]}
      />
      {PRODUCTS.map((p, i) => {
        const c = COPY[p.slug] ?? { title: p.focusArea, text: p.shortDescription };
        const dark = i % 4 === 2;
        return (
          <section key={p.slug} className={dark ? "grain-navy text-primary-foreground" : i % 2 ? "bg-surface" : ""}>
            <div className="container-x grid items-center gap-14 py-24 md:grid-cols-12 md:py-32">
              <div className={`md:col-span-6 ${i % 2 ? "md:order-2 md:col-start-7" : ""}`}>
                <MaskImage src={p.image} alt={p.imageAlt} width={1280} height={960} className={`aspect-[4/3] ${i % 2 ? "rounded-tl-[6rem]" : "rounded-br-[6rem]"}`} />
              </div>
              <Reveal className={`md:col-span-5 ${i % 2 ? "md:order-1" : "md:col-start-8"}`}>
                <span className={`serif-accent text-6xl ${dark ? "text-gold-soft" : "text-gold-cta"}`}>{p.index}</span>
                <h2 className={`display-lg mt-4 ${dark ? "!text-primary-foreground" : ""}`}>{c.title}</h2>
                <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{c.text}</p>
                <Link to="/products/$slug" params={{ slug: p.slug }} className={`mt-10 ${dark ? "btn-gold" : "btn-primary"}`}>
                  Related: {p.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </section>
        );
      })}
      <FinalCTA />
    </>
  );
}
