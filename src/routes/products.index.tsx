import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS } from "@/data/products";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/products/")({
  head: () =>
    seo(
      "Poultry Feed Supplements — Product Portfolio | POULTRIVA",
      "Browse POULTRIVA's poultry nutrition portfolio: amino acid, calcium, vitamin, electrolyte, antioxidant and acidifier supplements for every production stage.",
    ),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Our Product"
        accent="Portfolio."
        intro="A focused range of poultry feed supplements across nutrition, minerals, vitamins, hydration, antioxidant and acidification — each designed for professionally managed flocks."
        crumbs={[{ label: "Products" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-semibold leading-snug transition-colors group-hover:text-gold-cta">
                      {p.name}
                    </h2>
                    <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-cta">
                      {p.form}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {p.shortDescription}
                    </p>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-navy">
                      View Product
                      <ArrowUpRight className="h-4 w-4 text-gold-cta transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
