import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-farm.jpg";
import layersImg from "@/assets/layers.jpg";
import waterImg from "@/assets/water.jpg";
import feedImg from "@/assets/feed.jpg";
import { PRODUCTS } from "@/data/products";
import { waLink, productWaMessage } from "@/data/site";
import { ARTICLES } from "@/data/articles";
import { Reveal, MaskImage } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { CertificationsMarquee } from "@/components/site/CertificationsMarquee";
import { seo } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { useMotionPreference } from "@/hooks/use-motion-preference";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "POULTRIVA — Premium Poultry Nutrition & Feed Supplements",
      "POULTRIVA offers focused poultry feed supplements for nutritional support, calcium, drinking-water pH and digestive management. Nashik, India.",
    ),
  component: Home,
});

const ease = [0.22, 1, 0.36, 1] as const;

function Home() {
  return (
    <>
      <Hero />
      <CertificationsMarquee />
      <Showcase />
      <Intro />
      <Portfolio />
      <Ecosystem />
      <Approach />
      <Spotlight />
      <Insights />
      <FinalCTA />
    </>
  );
}

const HERO_SLIDES = [
  {
    src: heroImg,
    alt: "Healthy broiler chickens in a clean, well-ventilated poultry house",
    titleLines: ["Advancing", "Poultry Nutrition."],
    accent: "Supporting better performance.",
    description:
      "Explore POULTRIVA's focused portfolio of poultry feed supplements, designed for nutritional support, mineral supplementation, drinking-water management and digestive care.",
    primaryCta: { label: "Explore Our Products", to: "/products" },
    secondaryCta: { label: "Discover POULTRIVA", to: "/about-us" },
  },
  {
    src: layersImg,
    alt: "Layer hens in a modern poultry facility",
    titleLines: ["Optimized", "Mineral Balance."],
    accent: "Superior eggshell strength & bone density.",
    description:
      "Targeted calcium, phosphorus and bio-available micro-mineral formulations designed to sustain peak lay persistence and structural flock integrity.",
    primaryCta: { label: "View Calconova", to: "/products/calconova" },
    secondaryCta: { label: "Our Solutions", to: "/solutions" },
  },
  {
    src: waterImg,
    alt: "Clean drinking water management for poultry",
    titleLines: ["Pure Water,", "Healthy Flocks."],
    accent: "Effective water acidification & line hygiene.",
    description:
      "Specialized water acidifiers and sanitation solutions engineered to suppress harmful pathogen load and improve gut absorption from day one.",
    primaryCta: { label: "View Aquacyd", to: "/products/aquacyd" },
    secondaryCta: { label: "Quality Commitment", to: "/quality" },
  },
  {
    src: feedImg,
    alt: "Quality poultry feed and nutrition",
    titleLines: ["Vital Amino Acids", "& Micronutrients."],
    accent: "Maximizing feed conversion & vitality.",
    description:
      "High-potency amino acid complexes and digestive fortifiers that optimize daily weight gain, immunity and flock resilience under stress.",
    primaryCta: { label: "View Aminova Gold", to: "/products/aminova-gold" },
    secondaryCta: { label: "View Gutmax", to: "/products/gutmax" },
  },
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useMotionPreference();
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const currentSlide = HERO_SLIDES[slide] ?? HERO_SLIDES[0];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-14%"]);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 7000);
    return () => clearInterval(id);
  }, [reduce, paused]);

  return (
    <section
      ref={ref}
      className="hero-frame group relative overflow-hidden"
      aria-label="POULTRIVA poultry nutrition"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Auto-changing background slideshow positioned to the right */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence>
          <motion.img
            key={slide}
            src={currentSlide?.src}
            fetchPriority="high"
            decoding="async"
            alt=""
            initial={{ opacity: 0, scale: reduce ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 1.4, ease }}
            className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-[85%_center]"
          />
        </AnimatePresence>
        <div className="hero-scrim absolute inset-0" />
      </div>

      {/* Hero content with increased height and smooth blur entrance on slide change */}
      <div className="container-x relative z-10 flex min-h-[84vh] md:min-h-[88vh] lg:min-h-[92vh] flex-col justify-center pt-32 pb-24 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
        <motion.div style={{ y: textY }} className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{
                opacity: 0,
                filter: reduce ? "none" : "blur(14px)",
                y: reduce ? 0 : 16,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                  duration: reduce ? 0 : 0.9,
                  ease,
                },
              }}
              exit={{
                opacity: 0,
                filter: reduce ? "none" : "blur(12px)",
                y: reduce ? 0 : -10,
                transition: {
                  duration: reduce ? 0 : 0.5,
                  ease,
                },
              }}
            >
              <h1 className="display-xl text-primary-foreground">
                {currentSlide.titleLines.map((l) => (
                  <span key={l} className="block pb-1">
                    {l}
                  </span>
                ))}
                <span className="serif-accent block text-gold-soft font-normal text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2rem] leading-snug pt-1 pb-2">
                  {currentSlide.accent}
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                {currentSlide.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to={currentSlide.primaryCta.to} className="btn-gold">
                  {currentSlide.primaryCta.label} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to={currentSlide.secondaryCta.to} className="btn-ghost-light">
                  {currentSlide.secondaryCta.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Animated Left/Right Navigation in Bottom Right Corner (reveals on hero hover) */}
      <div
        className="absolute bottom-8 right-20 z-30 flex items-center gap-2.5 opacity-0 pointer-events-none transition-all duration-300 ease-out translate-y-3 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 focus-within:opacity-100 focus-within:pointer-events-auto md:bottom-10 md:right-24 lg:right-28"
        aria-label="Slideshow controls"
      >
        <button
          type="button"
          onClick={() => {
            setSlide((s) => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
            setPaused(true);
          }}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-forest-deep/75 text-gold-soft backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest-deep hover:scale-105 active:scale-95 shadow-lg"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => {
            setSlide((s) => (s + 1) % HERO_SLIDES.length);
            setPaused(true);
          }}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-forest-deep/75 text-gold-soft backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest-deep hover:scale-105 active:scale-95 shadow-lg"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function Showcase() {
  const reduce = useMotionPreference();
  const tiltL = reduce ? {} : { initial: { opacity: 0, rotate: -10, y: 30 }, whileInView: { opacity: 1, rotate: -6, y: 0 } };
  const tiltR = reduce ? {} : { initial: { opacity: 0, rotate: 10, y: 30 }, whileInView: { opacity: 1, rotate: 6, y: 0 } };
  return (
    <section className="relative overflow-hidden bg-surface py-24 md:py-32">
      <div className="container-x relative">
        {/* Tilted side images */}
        <motion.div
          {...tiltL}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="pointer-events-none absolute -left-10 top-1/2 hidden w-64 -translate-y-1/2 lg:block xl:w-72"
        >
          <div className="overflow-hidden rounded-[var(--radius-photo)] shadow-2xl">
            <img src={layersImg} alt="Brown laying hens in a modern layer house" loading="lazy" width={1280} height={960} className="aspect-[3/4] w-full object-cover" />
          </div>
        </motion.div>
        <motion.div
          {...tiltR}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="pointer-events-none absolute -right-10 top-1/2 hidden w-64 -translate-y-1/2 lg:block xl:w-72"
        >
          <div className="overflow-hidden rounded-[var(--radius-photo)] shadow-2xl">
            <img src={waterImg} alt="Clean poultry drinking-water line" loading="lazy" width={1280} height={960} className="aspect-[3/4] w-full object-cover" />
          </div>
        </motion.div>

        {/* Centered editorial content */}
        <div className="mx-auto max-w-3xl text-center lg:max-w-xl xl:max-w-2xl">
          <Reveal>
            <p className="eyebrow justify-center before:block before:h-px before:w-8 before:bg-gold before:content-[''] after:block after:h-px after:w-8 after:bg-gold after:content-['']">
              Focused Poultry Nutrition
            </p>
            <h2 className="serif-accent !font-semibold mt-6 text-navy text-[length:var(--type-display-lg)] leading-[1.18]">
              Thoughtfully formulated supplements for healthier flocks and better performance
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-xl leading-relaxed text-muted-foreground">
              Every POULTRIVA product is positioned around a clearly defined purpose — from nutritional and calcium
              support to drinking-water and digestive management — so you can choose with confidence.
            </p>
            <div className="mt-9">
              <Link to="/products" className="btn-primary">
                Explore the Range <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-surface py-24 md:py-36">
      <div className="container-x grid gap-14 md:grid-cols-12 md:items-stretch">
        <div className="relative md:col-span-5 min-h-[280px] md:min-h-0">
          <div className="relative aspect-[4/3] w-full md:aspect-auto md:absolute md:inset-0">
            <MaskImage
              src={layersImg}
              alt="Brown laying hens in a modern layer house"
              width={1280}
              height={960}
              className="h-full w-full rounded-[var(--radius-photo)]"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="display-lg mt-6">
              Focused on Nutrition. <span className="serif-accent text-gold-cta">Committed to Poultry Care.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-foreground">
              POULTRIVA is a poultry feed supplement brand associated with SAGL Life Sciences Pvt. Ltd., Nashik. Our
              product portfolio addresses key areas of poultry nutritional supplementation, calcium support, digestive
              management and drinking-water acidification.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Through clear product information and a focused range of supplementation options, we aim to help poultry
              industry professionals make informed product decisions.
            </p>
            <Link to="/about-us" className="link-underline mt-10 inline-flex items-center gap-2 pb-1 font-medium text-navy">
              More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Our Products</p>
            <h2 className="display-lg mt-6">
              Purpose-Driven <span className="serif-accent text-gold-cta">Poultry Nutrition.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="text-muted-foreground">
              Discover specialized feed supplements addressing nutritional, mineral and digestive management requirements.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1 text-[0.7rem] font-semibold text-navy">
                    {p.category}
                  </span>
                  <span className="serif-accent absolute right-4 top-4 text-3xl leading-none text-gold-cta">
                    {p.index}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-cta">{p.form}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.shortDescription}</p>
                  <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className="btn-primary !gap-1.5 !px-2 !py-2.5 !text-[0.8rem]"
                    >
                      View Product
                    </Link>
                    <a
                      href={waLink(productWaMessage(p.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost !gap-1.5 !px-2 !py-2.5 !text-[0.8rem]"
                      aria-label={`Enquire about ${p.name} on WhatsApp`}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-14 text-center">
            <Link to="/products" className="btn-gold">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const AREAS = [
  { n: "01", title: "Nutritional Support", text: "Products positioned to complement poultry feeding and metabolic nutrition programs.", slug: "aminova-gold" },
  { n: "02", title: "Calcium & Mineral Nutrition", text: "Supplementation options addressing calcium-related nutritional requirements.", slug: "calconova" },
  { n: "03", title: "Drinking-Water Management", text: "Liquid acidification products intended for appropriate water pH management.", slug: "aquacyd" },
  { n: "04", title: "Digestive Environment Support", text: "Powder acidifier solutions positioned for digestive-environment management.", slug: "gutmax" },
] as const;

function Ecosystem() {
  const [active, setActive] = useState(0);
  const area = AREAS[active] ?? AREAS[0];
  const product = PRODUCTS.find((p) => p.slug === area?.slug);
  if (!product || !area) return null;
  return (
    <section className="bg-surface py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Our solutions</p>
          <h2 className="display-lg mt-6 max-w-3xl">
            Supporting the Essentials of <span className="serif-accent text-gold-cta">Poultry Nutrition.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:items-stretch">
          {/* Left Side: Solution Image Preview (matches exact height of right side) */}
          <div
            id="focus-panel"
            role="tabpanel"
            aria-labelledby={`focus-tab-${active}`}
            className="relative lg:col-span-5 min-h-[320px] lg:min-h-0"
          >
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden rounded-[var(--radius-photo)] shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={product.slug}
                  src={product.image}
                  alt={product.imageAlt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                />
              </AnimatePresence>

              {/* Integrated Bottom Product Info docked inside the Image container */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 md:p-6 text-primary-foreground">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Related Product
                </p>
                <div className="mt-1 flex items-center justify-between gap-4">
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    {product.name}
                  </p>
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="btn-gold !px-4 !py-2 !text-xs !min-h-[38px] shrink-0"
                  >
                    View Product <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Focus Area Tabs */}
          <div
            role="tablist"
            aria-label="Focus areas"
            aria-orientation="vertical"
            className="flex flex-col justify-between lg:col-span-6 lg:col-start-7"
          >
            {AREAS.map((a, i) => (
              <Button
                variant="ghost"
                key={a.n}
                role="tab"
                id={`focus-tab-${i}`}
                aria-controls="focus-panel"
                tabIndex={active === i ? 0 : -1}
                aria-selected={active === i}
                onClick={() => setActive(i)}
                onKeyDown={(event) => {
                  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                      ? AREAS.length - 1
                      : (active + (event.key === "ArrowDown" ? 1 : -1) + AREAS.length) % AREAS.length;
                  setActive(next);
                  document.getElementById(`focus-tab-${next}`)?.focus();
                }}
                className={`relative h-auto flex-col items-stretch whitespace-normal rounded-none border-t border-border px-0 py-5 md:py-6 text-left hover:bg-transparent ${
                  active === i ? "text-navy" : "text-muted-foreground hover:text-navy"
                }`}
              >
                {active === i && (
                  <motion.span layoutId="eco-bar" className="absolute left-0 top-0 h-0.5 w-full bg-gold" />
                )}
                <span className="flex items-baseline gap-5">
                  <span className="text-xs font-semibold tracking-[0.2em] text-gold-cta">{a.n}</span>
                  <span className="text-xl font-semibold md:text-2xl">{a.title}</span>
                </span>
                <span
                  className={`mt-2 block pl-9 text-sm leading-relaxed ${
                    active === i ? "text-muted-foreground" : "text-muted-foreground/80"
                  }`}
                >
                  {a.text}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const APPROACH = [
  ["Focused Portfolio", "Our range is organized around clearly defined poultry nutrition and management applications."],
  ["Clear Information", "We emphasize accurate product descriptions, intended uses and clear communication."],
  ["Responsible Use", "Product selection and use should align with approved labels and appropriate professional guidance."],
  ["Business Support", "We welcome product information requests and business enquiries from poultry industry professionals."],
];

function Approach() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">The POULTRIVA approach</p>
            <h2 className="display-lg mt-6">
              Thoughtful Products. <span className="serif-accent text-gold-cta">Responsible Nutrition.</span>
            </h2>
          </div>
        </Reveal>
        <ol className="lg:col-span-7 lg:col-start-6">
          {APPROACH.map(([t, d], i) => (
            <Reveal key={t}>
              <li className="group relative grid gap-4 py-10 md:grid-cols-12">
                <motion.span
                  className="absolute left-0 top-0 h-px w-full origin-left bg-border"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease }}
                />
                <span className="serif-accent text-5xl text-gold transition-colors group-hover:text-gold-cta md:col-span-2">0{i + 1}</span>
                <div className="md:col-span-10">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">{t}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-foreground md:text-xl">{d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Spotlight() {
  return (
    <section className="grain-navy relative overflow-hidden text-primary-foreground">
      <div className="container-x grid gap-12 py-24 md:py-36 lg:grid-cols-12 lg:items-center">
        <div className="relative lg:col-span-6">
          <MaskImage src={waterImg} alt="Poultry drinking-water line with clear water droplets" width={1280} height={960} className="aspect-[4/3] rounded-[var(--radius-photo)]" />
          <p className="pointer-events-none absolute -bottom-10 right-0 select-none text-[clamp(4rem,10vw,9rem)] font-bold leading-none tracking-tighter text-primary-foreground/10" aria-hidden>
            pH
          </p>
        </div>
        <Reveal className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow !text-gold-soft">Featured · 03 · Liquid Acidifier</p>
          <h2 className="display-lg mt-6 !text-primary-foreground">
            Precision in <span className="serif-accent text-gold-soft">Water Management.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-primary-foreground/75">
            Aquacyd is a water-miscible liquid acidifier positioned for drinking-water pH management in poultry production.
          </p>
          <Link to="/products/$slug" params={{ slug: "aquacyd" }} className="btn-gold mt-10">
            Discover Aquacyd <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Resources & insights</p>
            <h2 className="display-lg mt-6 max-w-2xl">
              Knowledge for Better <span className="serif-accent text-gold-cta">Poultry Management.</span>
            </h2>
          </Reveal>
          <Link to="/resources" className="btn-ghost">All resources</Link>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.1} className="h-full">
              <Link to="/resources/$slug" params={{ slug: a.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-photo)]">
                  <img src={a.image} alt={a.imageAlt} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-cta">{a.category}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <span className="link-underline mt-5 inline-flex items-center gap-2 pb-0.5 text-sm font-medium text-navy">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
