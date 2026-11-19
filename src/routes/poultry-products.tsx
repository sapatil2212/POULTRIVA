import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Search,
  X,
  SlidersHorizontal,
  Rows3,
  LayoutGrid,
  RotateCcw,
  MessageCircle,
  Tag,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo } from "react";
import { POULTRY_PRODUCTS, Product } from "@/data/products";
import { PageHero } from "@/components/site/PageHero";
import { FinalCTA } from "@/components/site/FinalCTA";
import { seo } from "@/lib/seo";
import { waLink, productWaMessage } from "@/data/site";

export const Route = createFileRoute("/poultry-products")({
  head: () =>
    seo(
      "Poultry Feed Supplements & Nutrition Portfolio | POULTRIVA",
      "Browse POULTRIVA's specialized poultry nutrition formulations: amino acids, calcium supplements, water acidifiers, vitamins, and digestive health solutions.",
    ),
  component: PoultryProductsPage,
});

type SortOption = "category" | "name-asc" | "name-desc";

function PoultryProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("category");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Extract unique poultry categories
  const availableCategories = useMemo(() => {
    const set = new Set(POULTRY_PRODUCTS.map((p) => p.category));
    return Array.from(set).sort();
  }, []);

  // Filter and sort poultry products
  const filteredProducts = useMemo(() => {
    let list = [...POULTRY_PRODUCTS];

    // Filter by category
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.focusArea.toLowerCase().includes(q) ||
          p.form.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.applications.some((a) => a.toLowerCase().includes(q)) ||
          (p.keywords && p.keywords.some((k) => k.toLowerCase().includes(q)))
        );
      });
    }

    // Sorting
    list.sort((a, b) => {
      if (sortBy === "category") {
        const catCompare = a.category.localeCompare(b.category);
        return catCompare !== 0 ? catCompare : a.name.localeCompare(b.name);
      }
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    return list;
  }, [search, selectedCategory, sortBy]);

  const hasActiveFilters = search.trim() !== "" || selectedCategory !== "all";

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSortBy("category");
  };

  return (
    <>
      <PageHero
        eyebrow="Poultry Nutrition & Health"
        title="Poultry Product"
        accent="Portfolio."
        intro="A focused portfolio of specialized poultry feed supplements across amino acid nutrition, mineral balance, water acidification, vitamins, and gut health — formulated for modern commercial flock performance."
        crumbs={[{ label: "Poultry Products" }]}
      />

      <section className="py-12 md:py-16">
        <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Division switcher banner */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gold/30 bg-gold/5 p-4 text-xs sm:text-sm text-navy">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-gold shrink-0" />
              <span>You are viewing the dedicated <strong>Poultry Products Portfolio</strong> ({POULTRY_PRODUCTS.length} formulations).</span>
            </div>
            <Link
              to="/cattle-products"
              className="inline-flex items-center gap-1.5 font-bold text-navy hover:text-forest transition-colors"
            >
              <span>Switch to Cattle Products</span>
              <ArrowRight className="h-3.5 w-3.5 text-forest" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* LEFT / MAIN COLUMN: Products list & toolbar (lg:col-span-8 xl:col-span-9) */}
            <div className="lg:col-span-8 xl:col-span-9">
              {/* Top summary & view controls bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-navy">
                    Showing <span className="text-gold-cta font-bold">{filteredProducts.length}</span> of {POULTRY_PRODUCTS.length} poultry products
                  </span>
                  {selectedCategory !== "all" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-navy border border-border">
                      {selectedCategory}
                      <button
                        type="button"
                        onClick={() => setSelectedCategory("all")}
                        className="hover:text-gold-cta"
                        aria-label="Remove category filter"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  {search.trim() !== "" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-navy border border-border">
                      "{search}"
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="hover:text-gold-cta"
                        aria-label="Remove search filter"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 ml-auto">
                  {/* View layout toggle: Horizontal (List) vs Compact Grid */}
                  <div className="flex items-center rounded-lg border border-border bg-surface p-1">
                    <button
                      type="button"
                      onClick={() => setViewMode("list")}
                      className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                        viewMode === "list"
                          ? "bg-navy text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-navy"
                      }`}
                      title="Horizontal Professional Layout"
                    >
                      <Rows3 className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Horizontal</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("grid")}
                      className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                        viewMode === "grid"
                          ? "bg-navy text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-navy"
                      }`}
                      title="Grid Layout"
                    >
                      <LayoutGrid className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Grid</span>
                    </button>
                  </div>

                  {/* Mobile filter button */}
                  <button
                    type="button"
                    onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                    className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-navy lg:hidden hover:border-gold"
                  >
                    <SlidersHorizontal className="h-3.5 w-3.5 text-gold-cta" />
                    <span>Filter & Sort</span>
                    {hasActiveFilters && <span className="h-2 w-2 rounded-full bg-gold-cta" />}
                  </button>
                </div>
              </div>

              {/* Mobile Drawer Filter View */}
              <AnimatePresence>
                {mobileFilterOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 overflow-hidden rounded-xl border border-border bg-card p-5 lg:hidden"
                  >
                    <PoultryFilterPanel
                      search={search}
                      setSearch={setSearch}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                      availableCategories={availableCategories}
                      sortBy={sortBy}
                      setSortBy={setSortBy}
                      hasActiveFilters={hasActiveFilters}
                      resetFilters={resetFilters}
                      totalCount={POULTRY_PRODUCTS.length}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Products Presentation */}
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-muted-foreground">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">No poultry products found</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">
                    We couldn't find any poultry products matching your search or category filter. Try clearing your filters.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="btn-primary mt-6 !py-2 !px-4 text-xs inline-flex items-center gap-2"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Reset all filters
                  </button>
                </div>
              ) : viewMode === "list" ? (
                /* Horizontal format */
                <div className="flex flex-col gap-4">
                  {filteredProducts.map((p, i) => (
                    <motion.div
                      key={p.slug}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
                    >
                      <PoultryHorizontalCard product={p} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Compact Grid view */
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((p, i) => (
                    <motion.div
                      key={p.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
                    >
                      <PoultryCompactCard product={p} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Search, sort, filter options (lg:col-span-4 xl:col-span-3) */}
            <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <PoultryFilterPanel
                    search={search}
                    setSearch={setSearch}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    availableCategories={availableCategories}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    hasActiveFilters={hasActiveFilters}
                    resetFilters={resetFilters}
                    totalCount={POULTRY_PRODUCTS.length}
                  />
                </div>

                {/* Consultation Card */}
                <div className="rounded-xl border border-gold/30 bg-gold/5 p-5 text-navy">
                  <h4 className="text-sm font-bold text-navy">Poultry Nutrition Guidance</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Looking for customized feed inclusion rates, water sanitation programs, or flock health schedules?
                  </p>
                  <Link
                    to="/business-enquiries"
                    className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-gold-cta hover:underline"
                  >
                    Contact Poultry Nutritionists <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function PoultryFilterPanel({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  availableCategories,
  sortBy,
  setSortBy,
  hasActiveFilters,
  resetFilters,
  totalCount,
}: {
  search: string;
  setSearch: (v: string) => void;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  availableCategories: string[];
  sortBy: SortOption;
  setSortBy: (v: SortOption) => void;
  hasActiveFilters: boolean;
  resetFilters: () => void;
  totalCount: number;
}) {
  return (
    <div className="space-y-6">
      {/* Header with Reset */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-navy flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-gold-cta" /> Filter Poultry
        </h3>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs font-semibold text-gold-cta hover:text-navy transition-colors"
          >
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        )}
      </div>

      {/* 1. Search */}
      <div>
        <label htmlFor="poultry-search" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
          Search Products
        </label>
        <div className="relative">
          <input
            id="poultry-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search amino acids, vitamins..."
            className="w-full rounded-lg border border-border bg-surface px-3 py-2 pl-9 text-xs text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
          <Search className="pointer-events-none absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Sort By */}
      <div>
        <label htmlFor="poultry-sort" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
          Sort Options
        </label>
        <select
          id="poultry-sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="category">Category-wise (Default)</option>
          <option value="name-asc">Product Name (A - Z)</option>
          <option value="name-desc">Product Name (Z - A)</option>
        </select>
      </div>

      {/* 3. Category Filter */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Tag className="h-3 w-3" /> Categories
          </span>
          {selectedCategory !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="text-[0.68rem] text-gold-cta hover:underline font-semibold"
            >
              Clear
            </button>
          )}
        </div>
        <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`w-full flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs transition-colors text-left ${
              selectedCategory === "all"
                ? "bg-gold/15 font-bold text-navy"
                : "text-muted-foreground hover:bg-surface hover:text-navy"
            }`}
          >
            <span>All Poultry Products</span>
            <span className="shrink-0 text-[0.65rem] text-muted-foreground">({totalCount})</span>
          </button>
          {availableCategories.map((cat) => {
            const count = POULTRY_PRODUCTS.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`w-full flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs transition-colors text-left ${
                  selectedCategory === cat
                    ? "bg-gold/15 font-bold text-navy"
                    : "text-muted-foreground hover:bg-surface hover:text-navy"
                }`}
              >
                <span className="truncate pr-2">{cat}</span>
                <span className="shrink-0 text-[0.65rem] text-muted-foreground">({count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PoultryHorizontalCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md">
      <div className="relative sm:w-52 md:w-60 shrink-0 bg-surface/50 p-4 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-border overflow-hidden">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="relative h-44 sm:h-full w-full flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="max-h-40 sm:max-h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.68rem] font-bold shadow-sm bg-gold text-navy border border-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-navy" />
            Poultry
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="inline-block rounded-md bg-surface px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-gold-cta border border-border">
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
            <h3 className="text-lg sm:text-xl font-bold text-navy transition-colors group-hover:text-gold-cta leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="mt-1 text-xs font-semibold text-gold-cta tracking-wide">
            {product.form}
          </p>

          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>

          {product.applications && product.applications.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.applications.slice(0, 2).map((app, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-surface/80 px-2 py-0.5 text-[0.68rem] text-navy/80 border border-border/60"
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
              <span className="text-muted-foreground/75">Poultry Feed Supplement</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={waLink(productWaMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-gold hover:text-gold-cta"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span>Enquire</span>
            </a>
            <Link
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="inline-flex items-center gap-1 text-xs font-bold text-navy transition-colors group-hover:text-gold-cta"
            >
              <span>View Product</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-gold-cta transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PoultryCompactCard({ product }: { product: Product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
      <div className="relative aspect-[16/10] bg-surface/50 p-4 flex items-center justify-center border-b border-border overflow-hidden">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="relative h-full w-full flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] font-bold bg-gold text-navy">
            Poultry
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="rounded bg-surface px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-cta border border-border">
            {product.category}
          </span>
          <span className="text-[0.65rem] text-muted-foreground/60 font-medium">#{product.index}</span>
        </div>

        <Link to="/products/$slug" params={{ slug: product.slug }} className="mt-2.5 block">
          <h3 className="text-base font-bold text-navy transition-colors group-hover:text-gold-cta">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-[0.68rem] font-semibold text-gold-cta">
          {product.form}
        </p>

        <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/80">
          <a
            href={waLink(productWaMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] font-medium text-navy hover:text-gold-cta inline-flex items-center gap-1"
          >
            <MessageCircle className="h-3 w-3 text-emerald-600" /> Enquire
          </a>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-navy group-hover:text-gold-cta"
          >
            Details <ArrowUpRight className="h-3.5 w-3.5 text-gold-cta" />
          </Link>
        </div>
      </div>
    </div>
  );
}
