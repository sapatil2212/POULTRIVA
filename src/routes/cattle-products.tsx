import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { CATTLE_PRODUCTS, Product } from "@/data/products";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";
import { waLink, productWaMessage } from "@/data/site";

export const Route = createFileRoute("/cattle-products")({
  head: () =>
    seo(
      "Cattle Healthcare & Dairy Nutrition Portfolio | POULTRIVA",
      "Explore POULTRIVA's specialized cattle healthcare and livestock feed supplements: oral calcium therapy, udder health enzymes, uterine tonics, energy boost, and bypass protein.",
    ),
  component: CattleProductsPage,
});

function CattleProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dairy & Livestock Healthcare"
        title="Cattle Product"
        accent="Portfolio."
        intro="An advanced portfolio of specialized cattle and livestock feed formulations engineered for milk yield optimization, milk fever prevention, udder tissue recovery, post-partum calving management, and metabolic vitality."
        crumbs={[{ label: "Cattle Products" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-x">
          {/* Division switcher banner */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-forest/30 bg-forest/5 p-4 text-xs sm:text-sm text-navy">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-forest shrink-0" />
              <span>
                You are viewing the dedicated <strong>Cattle Products Portfolio</strong> ({CATTLE_PRODUCTS.length} formulations).
              </span>
            </div>
            <Link
              to="/poultry-products"
              className="inline-flex items-center gap-1.5 font-bold text-navy hover:text-gold-cta transition-colors"
            >
              <span>Switch to Poultry Products</span>
              <ArrowRight className="h-3.5 w-3.5 text-gold-cta" />
            </Link>
          </div>

          {/* Cattle Products Horizontal List */}
          <div className="flex flex-col gap-4">
            {CATTLE_PRODUCTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
              >
                <CattleHorizontalCard product={p} />
              </motion.div>
            ))}
          </div>

          {/* Dairy Veterinary Consultation Callout */}
          <div className="mt-10 rounded-2xl border border-forest/30 bg-forest/5 p-6 sm:p-8 text-navy flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/15 px-3 py-1 text-xs font-bold text-forest">
                Technical Support
              </span>
              <h3 className="text-lg font-bold text-navy mt-2">
                Dairy Veterinary Consultation & Herd Nutrition
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Need specialized dosing guidance for transition cows, milk fever emergency protocols, or dairy herd mineral programs? Our veterinary specialists are available to assist.
              </p>
            </div>
            <Link
              to="/business-enquiries"
              className="btn-primary shrink-0 !bg-forest hover:!bg-forest/90 text-primary-foreground inline-flex items-center gap-2"
            >
              Contact Veterinary Experts <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function CattleHorizontalCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/60 hover:shadow-md">
      <div className="relative sm:w-56 md:w-64 shrink-0 bg-surface/50 p-4 sm:p-5 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-border overflow-hidden">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="relative h-44 sm:h-full w-full flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="max-h-40 sm:max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.68rem] font-bold shadow-sm bg-forest text-primary-foreground border border-emerald-400/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Cattle Product
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="inline-block rounded-md bg-surface px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-forest border border-border">
              {product.category}
            </span>
            <span className="text-xs font-semibold text-muted-foreground/60">
              #{product.index}
            </span>
          </div>

          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="block mt-2"
          >
            <h3 className="text-lg sm:text-xl font-bold text-navy transition-colors group-hover:text-forest leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="mt-1 text-xs font-semibold text-forest tracking-wide">
            {product.form}
          </p>

          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>

          {product.applications && product.applications.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-surface/80 px-2.5 py-0.5 text-[0.68rem] text-navy/80 border border-border/60"
                >
                  • {app}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[0.72rem] text-muted-foreground">
            {product.packSizes ? (
              <span>Pack: <strong className="text-navy">{product.packSizes}</strong></span>
            ) : (
              <span className="text-muted-foreground/75">Cattle Feed Supplement</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={waLink(productWaMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-forest hover:text-forest"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span>Enquire</span>
            </a>
            <Link
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="inline-flex items-center gap-1 text-xs font-bold text-navy transition-colors group-hover:text-forest"
            >
              <span>View Product</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
