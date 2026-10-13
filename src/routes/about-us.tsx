import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-farm.jpg";
import feedImg from "@/assets/feed.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, MaskImage } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about-us")({
  head: () =>
    seo(
      "About POULTRIVA — Poultry Nutrition by SAGL Life Sciences",
      "POULTRIVA is a poultry nutrition and feed supplement brand associated with SAGL Life Sciences Pvt. Ltd., Nashik.",
    ),
  component: About,
});

const VALUES = [
  ["Product Relevance", "A portfolio built around clearly defined poultry nutrition needs."],
  ["Transparency", "Honest product descriptions and clearly stated intended uses."],
  ["Responsibility", "Use aligned with approved labels and professional guidance."],
  ["Professional Communication", "Prompt, clear and respectful responses to every enquiry."],
];
const SERVE = ["Poultry Farmers", "Poultry Feed Manufacturers", "Distributors & Dealers", "Veterinarians", "Animal Nutrition Professionals"];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About POULTRIVA"
        title="Dedicated to Poultry Nutrition"
        accent="& Responsible Supplementation."
        intro="POULTRIVA brings together a focused portfolio of poultry feed supplements designed around nutritional and management requirements."
        crumbs={[{ label: "About Us" }]}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <MaskImage src={heroImg} alt="Broiler chickens in a clean poultry house" width={1280} height={1600} className="aspect-[16/11] rounded-[var(--radius-photo)]" />
          </div>
          <Reveal className="md:col-span-4 md:col-start-9">
            <p className="eyebrow">Our story</p>
            <p className="mt-6 text-lg leading-relaxed">
              POULTRIVA is associated with SAGL Life Sciences Pvt. Ltd., based in Nashik, Maharashtra. The brand is
              focused on poultry nutritional support and practical feed supplementation.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our range covers digestive management, mineral supplementation and drinking-water acidification —
              presented with clear product communication so professionals can make informed choices.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <blockquote className="mx-auto max-w-4xl text-center">
              <span className="serif-accent block text-7xl leading-none text-gold" aria-hidden>“</span>
              <p className="serif-accent text-2xl leading-relaxed text-navy md:text-3xl">
                Good poultry nutrition starts with clear information and responsible choices.
              </p>
            </blockquote>
          </Reveal>
          <div className="mt-20 grid gap-px overflow-hidden rounded-md bg-border md:grid-cols-2">
            <Reveal className="bg-card p-10 md:p-14">
              <p className="eyebrow">Mission</p>
              <p className="mt-6 text-xl leading-relaxed text-foreground">
                To support poultry nutrition through focused supplementation products, responsible communication and customer-oriented service.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="bg-navy-deep p-10 md:p-14">
              <p className="eyebrow !text-gold-soft">Vision</p>
              <p className="mt-6 text-xl leading-relaxed text-primary-foreground">
                To build POULTRIVA into a recognized poultry nutrition brand associated with professional service, product relevance and responsible supplementation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Brand values</p>
            <h2 className="display-lg mt-6">What we <span className="serif-accent text-gold-cta">stand for.</span></h2>
          </Reveal>
          <div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {VALUES.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05} className="border-t border-border py-8">
                <span className="text-xs font-semibold tracking-[0.2em] text-gold-cta">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-semibold">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x grid items-center gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow">Who we serve</p>
            <ul className="mt-8">
              {SERVE.map((s) => (
                <li key={s} className="group flex items-center justify-between border-b border-border py-5 text-2xl font-semibold text-navy md:text-3xl">
                  {s}
                  <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="md:col-span-5 md:col-start-8">
            <MaskImage src={feedImg} alt="Poultry feed grains" width={1280} height={960} className="aspect-[4/5] rounded-t-[999px]" />
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
