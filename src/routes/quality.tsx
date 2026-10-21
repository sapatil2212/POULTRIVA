import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/quality")({
  head: () =>
    seo(
      "Quality & Commitment | POULTRIVA",
      "POULTRIVA's responsible approach to poultry nutrition: clear product identification, honest communication and professional guidance.",
    ),
  component: Quality,
});

const ITEMS = [
  ["Clear Product Identification", "Each product is presented with its name, category and intended application so it can be identified easily."],
  ["Responsible Product Communication", "We describe products by their positioning and intended use, without overstated outcomes."],
  ["Storage & Handling Awareness", "Products should be stored and handled as described on the approved label."],
  ["Appropriate Supplementation", "Supplements complement — not replace — a balanced, professionally formulated ration."],
  ["Customer Communication", "Questions about any product are welcome; our team responds with clear information."],
  ["Professional Guidance", "We encourage consultation with veterinarians and poultry nutrition professionals before use."],
];

function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality & commitment"
        title="A Responsible Approach"
        accent="to Poultry Nutrition."
        intro="Our commitment is expressed through how we present, communicate and support our products."
        crumbs={[{ label: "Quality" }]}
      />
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.08} className="group">
              <span className="serif-accent text-5xl text-gold">0{i + 1}</span>
              <h2 className="mt-8 text-2xl font-semibold">{t}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{d}</p>
              <span className="mt-8 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
