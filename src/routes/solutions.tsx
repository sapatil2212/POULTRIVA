import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, Filter } from "lucide-react";
import { useState } from "react";
import { PRODUCTS, POULTRY_PRODUCTS, CATTLE_PRODUCTS, Product } from "@/data/products";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, MaskImage } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () =>
    seo(
      "Poultry & Cattle Nutrition Solutions | POULTRIVA",
      "Science-driven nutrition and health solutions for poultry production and dairy cattle performance: calcium management, gut health, udder recovery, and metabolic defense.",
    ),
  component: Solutions,
});

const SOLUTIONS_DATA: Record<
  string,
  {
    title: string;
    focus: string;
    challenge: string;
    strategy: string;
    benefits: string[];
  }
> = {
  // Poultry Solutions
  "aminova-gold": {
    title: "Essential Amino Acid Nutrition",
    focus: "Broiler Growth, Feathering & Feed Conversion",
    challenge: "Sub-optimal protein utilization and uneven flock growth during critical brooding and starter phases.",
    strategy: "Deliver highly bioavailable liquid methionine hydroxy analogue, lysine, choline, and essential minerals directly through drinking water.",
    benefits: ["Optimizes Feed Conversion Ratio (FCR)", "Supports uniform muscle mass accretion", "Minimizes metabolic stress during ration transitions"],
  },
  calconova: {
    title: "Calcium & Mineral Skeletal Nutrition",
    focus: "Eggshell Strength, Layer Longevity & Bone Density",
    challenge: "Shell defects, soft-shelled eggs in high-producing layers, and skeletal weakness in fast-growing broilers.",
    strategy: "Balanced calcium, phosphorus, magnesium, and vitamin D3 matrix formulated for superior gastrointestinal absorption.",
    benefits: ["Improves eggshell thickness & marketable egg yield", "Prevents cage layer fatigue and skeletal deformities", "Maintains optimal ionic calcium blood levels"],
  },
  aquacyd: {
    title: "Drinking-Water pH & Acidification",
    focus: "Biosecurity, Water Sanitation & Pathogen Suppression",
    challenge: "Alkaline drinking water harboring microbial biofilm, E. coli, and Salmonella that compromises gut health.",
    strategy: "Synergistic blend of free and buffered organic acids designed to lower and stabilize drinking-water pH at 3.8-4.2.",
    benefits: ["Rapidly inhibits acid-intolerant waterborne bacteria", "Prevents mineral scale and biofilm buildup in nipple lines", "Stimulates pepsin activation in young chicks"],
  },
  gutmax: {
    title: "Digestive Environment & Gut Barrier Health",
    focus: "Feed Quality, Microbial Balance & Moisture Control",
    challenge: "Feed-borne pathogen pressure, dysbacteriosis, wet litter, and reduced nutrient absorption.",
    strategy: "Multi-organic acid dry formulation with calcium propionate designed for thorough inclusion in complete feed rations.",
    benefits: ["Inhibits mold, fungi, and bacterial proliferation in feed", "Stabilizes beneficial lactic acid microflora in the gut", "Reduces digestive disorders and wet droppings"],
  },
  biolyte: {
    title: "Hydration & Heat Stress Defense",
    focus: "Electrolyte Restoration, Osmotic Balance & Livability",
    challenge: "Severe thermal stress causing hyperventilation, respiratory alkalosis, dehydration, and spiking summer mortality.",
    strategy: "Precision electrolyte and osmolyte hydration therapy restoring physiological acid-base balance and cellular volume.",
    benefits: ["Mitigates heat-induced panting and shock", "Maintains vital fluid retention and flock water consumption", "Speeds up recovery after transport, vaccination, or debeaking"],
  },
  uricova: {
    title: "Renal Function & Gout Management",
    focus: "Uric Acid Excretion & Kidney Tubule Flushing",
    challenge: "Visceral and articular gout, nephrosis from high mineral loads, dehydration, or viral insults.",
    strategy: "Buffered citrate and electrolyte therapy designed to alkalize urinary pH and promote soluble uric acid excretion.",
    benefits: ["Facilitates renal uric acid clearance without tubular clogging", "Protects kidney architecture from toxic damage", "Restores normal water balance and bird activity"],
  },
  "gas-nil": {
    title: "Litter Management & Ammonia Control",
    focus: "Poultry House Air Quality, Footpad Health & Moisture Binding",
    challenge: "Toxic atmospheric ammonia (>25 ppm) damaging bird respiratory cilia and wet litter causing footpad dermatitis.",
    strategy: "Multi-action natural litter amendment binding volatile ammonia gas while actively absorbing moisture.",
    benefits: ["Dramatically reduces noxious ammonia odor within sheds", "Maintains dry, friable litter and prevents breast blisters", "Protects respiratory tract integrity against secondary infections"],
  },

  // Cattle Solutions
  "lactocal-gel": {
    title: "Oral Calcium Therapy & Milk Fever Prevention",
    focus: "Hypocalcemia Prevention, Calving Recovery & Smooth Muscle Tone",
    challenge: "Sudden onset hypocalcemia (milk fever) and uterine inertia in high-yielding cows at the onset of lactation.",
    strategy: "Fast-acting ionic calcium gel fortified with phosphorus, Vitamin D3, and B12 for rapid bloodstream absorption.",
    benefits: ["Rapidly elevates serum calcium levels post-calving", "Prevents clinical and subclinical milk fever", "Promotes energetic calving recovery and early appetite return"],
  },
  "teet-grow": {
    title: "Udder Health, Tissue Regeneration & Mastitis Care",
    focus: "Somatic Cell Count (SCC) Reduction & Glandular Recovery",
    challenge: "Subclinical and clinical mastitis causing chronic udder inflammation, tissue scarring, and reduced milk quality.",
    strategy: "Proteolytic enzyme formulation (Serratiopeptidase) coupled with live yeast and trace minerals to resolve inflammation.",
    benefits: ["Facilitates breakdown of inflammatory exudate and cellular debris", "Maintains teat canal sphincter tone and natural barrier defenses", "Reduces somatic cell count to restore grade-A milk yields"],
  },
  "utri-cure": {
    title: "Uterine Cleansing & Post-Partum Calving Care",
    focus: "Lochia Discharge, Uterine Involution & Timely Insemination",
    challenge: "Retained placenta (ROP), delayed uterine involution, metritis, and prolonged calving intervals.",
    strategy: "Herbal-mineral uterine tonic that stimulates natural uterine myometrial contractions and expelled uterine fluid.",
    benefits: ["Accelerates complete lochial discharge and uterine cleansing", "Prevents foul-smelling post-partum infections and endometritis", "Ensures early return to fertile estrus cyclicity"],
  },
  "spark-up": {
    title: "Metabolic Energy & Ketosis Defense",
    focus: "Glucogenic Precursors, Negative Energy Balance & Peak Lactation",
    challenge: "Negative Energy Balance (NEB) in fresh cows leading to body condition loss, ketosis, and fatty liver syndrome.",
    strategy: "Concentrated glucogenic precursors (Propylene Glycol, Nicotinamide, Cyanocobalamin) stimulating hepatic glucose synthesis.",
    benefits: ["Rapidly supplies bypass energy without stressing the rumen", "Lowers elevated blood ketone bodies (BHBA)", "Restores dry matter intake and sustains peak milk production"],
  },
  "dara-gold": {
    title: "Lactation Mineral Nutrition & Milk Volume",
    focus: "Daily Calcium, Phosphorus & Vitamin Supplementation",
    challenge: "Drop in daily milk yield, poor butterfat percentage, and trace mineral deficiencies during mid-lactation.",
    strategy: "Highly palatable liquid mineral supplement enriched with calcium, phosphorus, Vitamin D3, and bioavailable minerals.",
    benefits: ["Sustains steady milk output throughout the lactation curve", "Strengthens bones, hooves, and maternal mineral reserves", "Enhances feed conversion and overall herd vitality"],
  },
  "gut-shield": {
    title: "Broad-Spectrum Toxin Binding & Feed Safety",
    focus: "Mycotoxin Neutralization, Liver Protection & Immunity",
    challenge: "Aflatoxin, Ochratoxin, and fungal contamination in concentrates suppressing immunity and causing liver toxicity.",
    strategy: "Dual-action modified aluminosilicate and organic binder complex adsorbing mycotoxins while sparing essential nutrients.",
    benefits: ["Irreversibly binds polar and non-polar mycotoxins in the gastrointestinal tract", "Protects liver parenchyma from oxidative and toxic damage", "Prevents aflatoxin M1 transmission into milk"],
  },
  "nutri-pro-elite": {
    title: "Rumen-Protected Protein & Amino Acid Nutrition",
    focus: "High-Yielding Dairy Cows & Bypass Protein Utilization",
    challenge: "Excessive microbial breakdown of dietary protein in the rumen, starving high-producing dairy cows of metabolizable protein.",
    strategy: "Unique formulation containing rumen-protected protein, bypass nutrients, biotin, and micro-minerals.",
    benefits: ["Increases milk protein synthesis and milk solids (SNF)", "Sustains high milk yields during peak lactation", "Improves nitrogen efficiency and reduces reproductive wastage"],
  },
};

function Solutions() {
  const [filter, setFilter] = useState<"all" | "poultry" | "cattle">("all");

  const displayedProducts = PRODUCTS.filter((p) => {
    if (filter === "poultry") return p.division === "poultry";
    if (filter === "cattle") return p.division === "cattle";
    return true;
  });

  return (
    <>
      <PageHero
        eyebrow="Targeted Interventions"
        title="Comprehensive Solutions for"
        accent="Poultry & Cattle Health."
        intro="Evidence-backed nutritional and herd-health management programs addressing vital production milestones across poultry flocks and dairy cattle."
        crumbs={[{ label: "Solutions" }]}
      />

      {/* Solutions Provisions Filter Bar */}
      <section className="border-b border-border bg-card/60 py-6 backdrop-blur-sm sticky top-20 z-20">
        <div className="container-x flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gold-cta" />
            <span className="text-sm font-semibold text-navy">Filter Solution Programs:</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-border bg-surface p-1">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                filter === "all" ? "bg-navy text-primary-foreground shadow-sm" : "text-navy hover:text-gold-cta"
              }`}
            >
              All Solutions ({PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("poultry")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                filter === "poultry" ? "bg-gold text-navy font-bold shadow-sm" : "text-navy hover:text-gold-cta"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-gold" />
              Poultry Solutions ({POULTRY_PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("cattle")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                filter === "cattle" ? "bg-forest text-primary-foreground font-bold shadow-sm" : "text-navy hover:text-gold-cta"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Cattle & Dairy Solutions ({CATTLE_PRODUCTS.length})
            </button>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <div>
        {displayedProducts.map((p, i) => {
          const detail = SOLUTIONS_DATA[p.slug];
          const title = detail?.title ?? p.focusArea;
          const focus = detail?.focus ?? p.category;
          const strategy = detail?.strategy ?? p.shortDescription;
          const dark = i % 4 === 2;

          return (
            <section
              key={p.slug}
              className={`transition-colors ${
                dark ? "grain-navy text-primary-foreground" : i % 2 ? "bg-surface" : "bg-background"
              }`}
            >
              <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 grid items-center gap-12 py-20 lg:grid-cols-12 md:py-24">
                <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                  <div className="relative">
                    <MaskImage
                      src={p.image}
                      alt={p.imageAlt}
                      width={1280}
                      height={960}
                      className={`aspect-[4/3] shadow-xl ${i % 2 ? "rounded-tl-[4rem] rounded-br-2xl" : "rounded-br-[4rem] rounded-tl-2xl"}`}
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-md ${
                          p.division === "cattle"
                            ? "bg-forest text-primary-foreground border border-emerald-400/40"
                            : "bg-gold text-navy font-bold border border-gold-soft"
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${p.division === "cattle" ? "bg-emerald-300" : "bg-navy"}`} />
                        {p.division === "cattle" ? "Cattle & Livestock Care" : "Poultry Nutrition"}
                      </span>
                    </div>
                  </div>
                </div>

                <Reveal className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : "lg:col-start-6"}`}>
                  <div className="flex items-center gap-3">
                    <span className={`serif-accent text-5xl font-bold ${dark ? "text-gold-soft" : "text-gold-cta"}`}>
                      {p.index}
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-widest ${dark ? "text-gold-soft" : "text-gold-cta"}`}>
                      {focus}
                    </span>
                  </div>

                  <h2 className={`display-lg mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold ${dark ? "!text-primary-foreground" : "text-navy"}`}>
                    {title}
                  </h2>

                  {detail?.challenge && (
                    <div className={`mt-4 rounded-xl p-4 text-sm ${dark ? "bg-primary-foreground/10 text-primary-foreground/90" : "bg-card border border-border text-foreground"}`}>
                      <strong className={dark ? "text-gold-soft" : "text-gold-cta"}>Operational Challenge: </strong>
                      {detail.challenge}
                    </div>
                  )}

                  <p className={`mt-4 text-base leading-relaxed ${dark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {strategy}
                  </p>

                  {detail?.benefits && detail.benefits.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {detail.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${dark ? "text-gold-soft" : "text-gold-cta"}`} />
                          <span className={dark ? "text-primary-foreground/85" : "text-foreground"}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className={dark ? "btn-gold" : "btn-primary"}
                    >
                      Explore Solution Product: {p.name} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/business-enquiries"
                      className={`text-xs font-semibold uppercase tracking-wider underline transition-colors ${
                        dark ? "text-gold-soft hover:text-white" : "text-navy hover:text-gold-cta"
                      }`}
                    >
                      Enquire for Feed Formulations →
                    </Link>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <FinalCTA />
    </>
  );
}
