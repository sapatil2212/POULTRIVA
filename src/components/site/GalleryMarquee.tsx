import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useMotionPreference } from "@/hooks/use-motion-preference";
import heroFarm from "@/assets/hero-farm.jpg";
import layers from "@/assets/layers.jpg";
import water from "@/assets/water.jpg";
import feed from "@/assets/feed.jpg";
import nutritionLab from "@/assets/nutrition-lab.jpg";
import biotechLab from "@/assets/biotech-lab.jpg";
import homeAbout from "@/assets/home/home-about.png";

const ease = [0.22, 1, 0.36, 1] as const;

type GalleryImage = { src: string; alt: string };

const IMAGES: GalleryImage[] = [
  { src: heroFarm, alt: "Healthy broiler flock in a clean, well-ventilated poultry house" },
  { src: layers, alt: "Brown laying hens in a modern layer facility" },
  { src: nutritionLab, alt: "Nutrition laboratory developing poultry feed formulations" },
  { src: water, alt: "Clean poultry drinking-water line management" },
  { src: biotechLab, alt: "Biotechnology researcher formulating poultry supplements" },
  { src: feed, alt: "Quality poultry feed and nutrition" },
  { src: homeAbout, alt: "POULTRIVA focus on poultry nutrition and care" },
];

export function GalleryMarquee() {
  const reduce = useMotionPreference();
  const [active, setActive] = useState<number | null>(null);
  // Duplicate once for a seamless -50% loop.
  const track = [...IMAGES, ...IMAGES];

  const close = () => setActive(null);
  const show = (i: number) => setActive(((i % IMAGES.length) + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % IMAGES.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + IMAGES.length) % IMAGES.length));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section className="overflow-hidden py-24 md:py-36" aria-label="POULTRIVA image gallery">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">In the field</p>
            <h2 className="display-lg mt-6 max-w-2xl">
              Poultry Nutrition <span className="serif-accent text-gold-cta">in Focus.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A look across our work — formulation, flocks and farm management. Hover to pause, click any image to view larger.
          </p>
        </div>
      </div>

      <div className="group relative mt-14 w-full overflow-hidden marquee-mask">
        <div className={reduce ? "flex gap-5 overflow-x-auto px-6" : "animate-gallery gap-5"}>
          {(reduce ? IMAGES : track).map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              onClick={() => show(i)}
              aria-label={`View larger: ${img.alt}`}
              className="group/item relative aspect-[4/5] w-[18rem] shrink-0 overflow-hidden rounded-[var(--radius-photo)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover/item:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/90 p-4 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-forest-deep/70 text-gold-soft transition-colors hover:border-gold hover:bg-gold hover:text-forest-deep md:right-8 md:top-8"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive((a) => (a === null ? a : (a - 1 + IMAGES.length) % IMAGES.length));
              }}
              aria-label="Previous image"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-forest-deep/70 text-gold-soft transition-colors hover:border-gold hover:bg-gold hover:text-forest-deep md:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.figure
              key={active}
              className="max-h-[85vh] max-w-5xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: reduce ? 0 : 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={IMAGES[active]!.src}
                alt={IMAGES[active]!.alt}
                className="max-h-[78vh] w-auto rounded-[var(--radius-photo)] object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center text-sm text-primary-foreground/80">
                {IMAGES[active]!.alt}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive((a) => (a === null ? a : (a + 1) % IMAGES.length));
              }}
              aria-label="Next image"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-forest-deep/70 text-gold-soft transition-colors hover:border-gold hover:bg-gold hover:text-forest-deep md:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
