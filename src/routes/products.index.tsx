import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS } from "@/data/products";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/products/")({
  head: () =>
    seo(
      "Poultry Feed Supplements — Product Portfolio | POULTRIVA",
      "Browse POULTRIVA's poultry supplements: Aminova Gold, Calconova, Aquacyd and Gutmax.",
    ),
  component: Products,
});

const FILTERS = ["All", ...PRODUCTS.map((p) => p.category)];

function Products() {
  const [filter, setFilter] = useState("All");
  const list = PRODUCTS.filter((p) => filter === "All" || p.category === filter);
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Our Product"
        accent="Portfolio."
        intro="Specialized poultry feed supplements for nutritional support, calcium, drinking-water pH management and digestive care."
        crumbs={[{ label: "Products" }]}
      >
        <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${filter === f ? "border-navy bg-navy text-primary-foreground" : "border-border text-foreground hover:border-navy"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </PageHero>
      <section className="py-16 md:py-20">
        <div className="container-x grid items-start gap-x-8 gap-y-12 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-photo)]">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-5 top-5 rounded-full bg-card px-3 py-1 text-xs font-semibold text-navy">{p.category}</span>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <span className="serif-accent text-2xl text-gold-cta">{p.index}</span>
                      <h2 className="mt-1 text-2xl font-semibold">{p.name}</h2>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{p.shortDescription}</p>
                    </div>
                    <span className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border transition-all group-hover:bg-navy">
                      <ArrowUpRight className="h-5 w-5 text-navy group-hover:text-primary-foreground" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
