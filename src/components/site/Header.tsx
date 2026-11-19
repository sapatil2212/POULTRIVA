import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowUpRight, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/data/site";
import { PRODUCTS, POULTRY_PRODUCTS, CATTLE_PRODUCTS } from "@/data/products";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const POULTRY_SOLUTIONS = [
  { title: "Nutritional Support & Amino Acids", slug: "aminova-gold", desc: "Growth, FCR & balanced essential proteins" },
  { title: "Calcium & Skeletal Nutrition", slug: "calconova", desc: "Bone strength & layer eggshell quality" },
  { title: "Drinking-Water pH & Acidification", slug: "aquacyd", desc: "Water sanitation & pathogen suppression" },
  { title: "Digestive Health & Acidifiers", slug: "gutmax", desc: "Gut barrier integrity & feed efficiency" },
  { title: "Litter Management & Ammonia Control", slug: "gas-nil", desc: "Moisture binding & farm air quality" },
];

const CATTLE_SOLUTIONS = [
  { title: "Dairy Yield & Milk Fever Prevention", slug: "lactocal-gel", desc: "High-absorption oral calcium & phosphorus" },
  { title: "Udder Health & Tissue Recovery", slug: "teet-grow", desc: "Proteolytic enzymes & somatic cell control" },
  { title: "Uterine Cleansing & Calving Care", slug: "utri-cure", desc: "Post-partum cleansing & reproductive support" },
  { title: "Energy Boost & Ketosis Defense", slug: "spark-up", desc: "Glucogenic precursors for transition cows" },
  { title: "Toxin Binding & Liver Tonic", slug: "gut-shield", desc: "Mycotoxin neutralization & liver vitality" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [activeSub, setActiveSub] = useState<"poultry" | "cattle" | null>(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileProd, setMobileProd] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [mobilePoultryOpen, setMobilePoultryOpen] = useState(false);
  const [mobileCattleOpen, setMobileCattleOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const { pathname } = useLocation();
  const light = pathname === "/" && !scrolled && !open;
  const isProductsActive =
    pathname === "/poultry-products" ||
    pathname === "/cattle-products" ||
    pathname.startsWith("/products");
  const navColor = light ? "text-primary-foreground" : "text-foreground";
  const iconColor = light ? "text-primary-foreground" : "text-navy";
  const navLinkBase = `relative py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-gold after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 ${navColor}`;
  const navLinkActive = light
    ? "text-gold-soft font-semibold after:!scale-x-100"
    : "text-navy font-semibold after:!scale-x-100";

  // Category-wise sorted lists
  const sortedPoultry = [...POULTRY_PRODUCTS].sort((a, b) => a.category.localeCompare(b.category));
  const sortedCattle = [...CATTLE_PRODUCTS].sort((a, b) => a.category.localeCompare(b.category));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : "";
    if (open) menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setProdOpen(false);
    setSolutionsOpen(false);
    setMobileProd(false);
    setMobileSolutions(false);
    setActiveSub(null);
    setMobilePoultryOpen(false);
    setMobileCattleOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeOnResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-card focus:p-3">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 py-3 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-md" : light ? "py-6" : "bg-background py-6"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo light={light} />
          <nav aria-label="Primary" className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {NAV.map((n) => {
              if (n.to === "/products") {
                return (
                  <div
                    key={n.to}
                    className="relative"
                    onMouseEnter={() => {
                      setProdOpen(true);
                      setActiveSub(null);
                    }}
                    onMouseLeave={() => {
                      setProdOpen(false);
                      setActiveSub(null);
                    }}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setProdOpen(false);
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setProdOpen(false);
                        triggerRef.current?.focus();
                      }
                    }}
                  >
                    {/* Non-clickable trigger button: opens dropdown on hover/focus */}
                    <button
                      type="button"
                      className={`${navLinkBase} ${isProductsActive ? navLinkActive : ""} inline-flex items-center gap-1.5 cursor-pointer select-none`}
                      onClick={(e) => {
                        e.preventDefault();
                        setProdOpen((v) => !v);
                      }}
                      onFocus={() => setProdOpen(true)}
                      aria-expanded={prodOpen}
                      aria-haspopup="true"
                    >
                      <span>Products</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${prodOpen ? "rotate-180 text-gold-cta" : "opacity-70"}`}
                      />
                    </button>

                    <AnimatePresence>
                      {prodOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-0 top-full z-50 pt-2"
                        >
                          <div className="flex items-start">
                            {/* Normal Dropdown with 2 categories: Poultry and Cattle */}
                            <div className="w-64 shrink-0 rounded-xl border border-border bg-card p-2 shadow-xl">
                              <div onMouseEnter={() => setActiveSub(null)} className="px-3 py-1.5 border-b border-border/80 mb-1">
                                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
                                  Product Categories
                                </p>
                              </div>

                              {/* 1. Poultry Products: Hover shows sub-dropdown; Click opens poultry page */}
                              <div
                                onMouseEnter={() => setActiveSub("poultry")}
                                className="relative"
                              >
                                <Link
                                  to="/poultry-products"
                                  onClick={() => setProdOpen(false)}
                                  className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${
                                    activeSub === "poultry"
                                      ? "bg-gold/15 text-gold-cta font-bold"
                                      : "text-navy hover:bg-surface hover:text-gold-cta"
                                  }`}
                                >
                                  <span className="flex items-center gap-2.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-gold shrink-0" />
                                    <span>Poultry Products</span>
                                  </span>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[0.68rem] px-1.5 py-0.5 rounded-full bg-surface border border-border font-medium text-muted-foreground">
                                      {sortedPoultry.length}
                                    </span>
                                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                                  </div>
                                </Link>
                              </div>

                              {/* 2. Cattle Products: Hover shows sub-dropdown; Click opens cattle page */}
                              <div
                                onMouseEnter={() => setActiveSub("cattle")}
                                className="relative"
                              >
                                <Link
                                  to="/cattle-products"
                                  onClick={() => setProdOpen(false)}
                                  className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold transition-all ${
                                    activeSub === "cattle"
                                      ? "bg-forest/15 text-forest font-bold"
                                      : "text-navy hover:bg-surface hover:text-forest"
                                  }`}
                                >
                                  <span className="flex items-center gap-2.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-forest shrink-0" />
                                    <span>Cattle Products</span>
                                  </span>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[0.68rem] px-1.5 py-0.5 rounded-full bg-surface border border-border font-medium text-muted-foreground">
                                      {sortedCattle.length}
                                    </span>
                                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                                  </div>
                                </Link>
                              </div>
                            </div>

                            {/* Sub-dropdown flyout that appears on hover with respective product list */}
                            <AnimatePresence>
                              {activeSub && (
                                <motion.div
                                  key={activeSub}
                                  initial={{ opacity: 0, x: -6 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -6 }}
                                  transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                                  className="pl-1.5"
                                  onMouseEnter={() => {
                                    if (activeSub) setActiveSub(activeSub);
                                  }}
                                >
                                  {activeSub === "poultry" && (
                                    <div className="w-[440px] rounded-xl border border-border bg-card p-4 shadow-2xl">
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border/80">
                                        <div className="flex items-center gap-2">
                                          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                                          <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                                            Poultry Products
                                          </h4>
                                          <span className="text-[0.68rem] text-muted-foreground">({sortedPoultry.length})</span>
                                        </div>
                                        <Link
                                          to="/poultry-products"
                                          onClick={() => {
                                            setProdOpen(false);
                                            setActiveSub(null);
                                          }}
                                          className="text-[0.7rem] font-semibold text-gold-cta hover:underline inline-flex items-center gap-1"
                                        >
                                          Open Poultry Page <ArrowUpRight className="h-3 w-3" />
                                        </Link>
                                      </div>
                                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 max-h-[340px] overflow-y-auto pr-1">
                                        {sortedPoultry.map((p) => (
                                          <Link
                                            key={p.slug}
                                            to="/products/$slug"
                                            params={{ slug: p.slug }}
                                            onClick={() => {
                                              setProdOpen(false);
                                              setActiveSub(null);
                                            }}
                                            className="group/p flex flex-col rounded-md px-2.5 py-1.5 transition-colors hover:bg-surface"
                                          >
                                            <span className="truncate text-xs font-semibold text-navy transition-colors group-hover/p:text-gold-cta">
                                              {p.name}
                                            </span>
                                            <span className="truncate text-[0.66rem] text-muted-foreground">
                                              {p.category}
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {activeSub === "cattle" && (
                                    <div className="w-[440px] rounded-xl border border-border bg-card p-4 shadow-2xl">
                                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border/80">
                                        <div className="flex items-center gap-2">
                                          <span className="h-2.5 w-2.5 rounded-full bg-forest" />
                                          <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                                            Cattle Products
                                          </h4>
                                          <span className="text-[0.68rem] text-muted-foreground">({sortedCattle.length})</span>
                                        </div>
                                        <Link
                                          to="/cattle-products"
                                          onClick={() => {
                                            setProdOpen(false);
                                            setActiveSub(null);
                                          }}
                                          className="text-[0.7rem] font-semibold text-forest hover:underline inline-flex items-center gap-1"
                                        >
                                          Open Cattle Page <ArrowUpRight className="h-3 w-3" />
                                        </Link>
                                      </div>
                                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 max-h-[340px] overflow-y-auto pr-1">
                                        {sortedCattle.map((p) => (
                                          <Link
                                            key={p.slug}
                                            to="/products/$slug"
                                            params={{ slug: p.slug }}
                                            onClick={() => {
                                              setProdOpen(false);
                                              setActiveSub(null);
                                            }}
                                            className="group/c flex flex-col rounded-md px-2.5 py-1.5 transition-colors hover:bg-surface"
                                          >
                                            <span className="truncate text-xs font-semibold text-navy transition-colors group-hover/c:text-gold-cta">
                                              {p.name}
                                            </span>
                                            <span className="truncate text-[0.66rem] text-muted-foreground">
                                              {p.category}
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (n.to === "/solutions") {
                return (
                  <div
                    key={n.to}
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setSolutionsOpen(false); }}
                    onKeyDown={(event) => { if (event.key === "Escape") { setSolutionsOpen(false); event.currentTarget.querySelector<HTMLAnchorElement>("a")?.focus(); } }}
                  >
                    <Link
                      to="/solutions"
                      className={navLinkBase}
                      activeProps={{ className: navLinkActive }}
                      onFocus={() => setSolutionsOpen(true)}
                    >
                      Solutions
                    </Link>
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full z-50 w-[54rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-4"
                        >
                          <div className="grid grid-cols-12 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                            {/* Featured intro panel */}
                            <div className="relative col-span-4 flex flex-col justify-between overflow-hidden bg-navy p-6 text-primary-foreground">
                              <div>
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
                                  Targeted Programs
                                </p>
                                <p className="serif-accent mt-3 text-2xl leading-tight text-primary-foreground">
                                  Solutions for Herd & Flock Health.
                                </p>
                                <p className="mt-3 text-xs leading-relaxed text-primary-foreground/70">
                                  Explore targeted nutritional programs addressing specific poultry management and dairy cattle productivity challenges.
                                </p>
                              </div>
                              <Link
                                to="/solutions"
                                onClick={() => setSolutionsOpen(false)}
                                className="group/all mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft"
                              >
                                View all solutions
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
                              </Link>
                            </div>

                            {/* 2 Partitions for Solutions */}
                            <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border bg-card p-5">
                              {/* Poultry Solutions */}
                              <div className="flex flex-col pr-0 md:pr-4">
                                <div className="mb-3 flex items-center gap-2 border-b border-border/80 pb-2.5">
                                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy">
                                    Poultry Solutions
                                  </h3>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                  {POULTRY_SOLUTIONS.map((s) => (
                                    <Link
                                      key={s.slug}
                                      to="/products/$slug"
                                      params={{ slug: s.slug }}
                                      onClick={() => setSolutionsOpen(false)}
                                      className="group/item flex flex-col rounded-md p-2 transition-colors hover:bg-surface"
                                    >
                                      <span className="text-xs font-semibold text-navy transition-colors group-hover/item:text-gold-cta">
                                        {s.title}
                                      </span>
                                      <span className="text-[0.68rem] text-muted-foreground line-clamp-1">
                                        {s.desc}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Cattle Solutions */}
                              <div className="flex flex-col pt-4 md:pt-0 pl-0 md:pl-4">
                                <div className="mb-3 flex items-center gap-2 border-b border-border/80 pb-2.5">
                                  <span className="h-2.5 w-2.5 rounded-full bg-forest" />
                                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy">
                                    Cattle Solutions
                                  </h3>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                  {CATTLE_SOLUTIONS.map((s) => (
                                    <Link
                                      key={s.slug}
                                      to="/products/$slug"
                                      params={{ slug: s.slug }}
                                      onClick={() => setSolutionsOpen(false)}
                                      className="group/item flex flex-col rounded-md p-2 transition-colors hover:bg-surface"
                                    >
                                      <span className="text-xs font-semibold text-navy transition-colors group-hover/item:text-gold-cta">
                                        {s.title}
                                      </span>
                                      <span className="text-[0.68rem] text-muted-foreground line-clamp-1">
                                        {s.desc}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className={navLinkBase}
                  activeProps={{ className: navLinkActive }}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/business-enquiries" className="btn-primary hidden !py-2.5 sm:inline-flex">
              Business Enquiry
            </Link>
            <Button
              variant="ghost"
              ref={triggerRef}
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${light ? "border-primary-foreground/40" : "border-border"}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className={`h-5 w-5 ${iconColor}`} /> : <Menu className={`h-5 w-5 ${iconColor}`} />}
            </Button>
          </div>
        </div>
        <motion.div
          style={{ scaleX: progress }}
          className="absolute bottom-0 left-0 z-0 h-px w-full origin-left bg-gold"
          aria-hidden
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onKeyDown={(event) => {
              if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
              if (event.key !== "Tab") return;
              const links = event.currentTarget.querySelectorAll<HTMLAnchorElement>("a[href]");
              const first = links[0];
              const last = links[links.length - 1];
              if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
              else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background pt-24 lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-1 flex-col">
              {[...NAV, { to: "/faqs", label: "FAQs" }].map((n, i) => {
                if (n.to === "/products") {
                  return (
                    <motion.div
                      key={n.to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                      className="border-b border-border"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setMobileProd((v) => !v)}
                          className="flex flex-1 items-center gap-3 py-3.5 text-base font-semibold text-navy transition-colors active:text-gold-cta text-left"
                        >
                          <span className="w-6 text-xs font-semibold text-gold-cta">0{i + 1}</span>
                          <span>{n.label}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setMobileProd((v) => !v)}
                          aria-expanded={mobileProd}
                          aria-controls="mobile-products"
                          aria-label={mobileProd ? "Collapse products" : "Expand products"}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-navy transition-colors active:border-gold active:text-gold-cta"
                        >
                          <motion.span animate={{ rotate: mobileProd ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {mobileProd && (
                          <motion.div
                            id="mobile-products"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden pb-4 pl-4 space-y-3"
                          >
                            {/* Partition 1: Poultry Products */}
                            <div className="rounded-lg border border-border bg-card p-3">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/poultry-products"
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-cta hover:underline"
                                >
                                  <span className="h-2 w-2 rounded-full bg-gold" />
                                  <span>Poultry Products</span>
                                  <ArrowUpRight className="h-3 w-3" />
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => setMobilePoultryOpen((v) => !v)}
                                  className="p-1 text-muted-foreground hover:text-navy"
                                  aria-label="Toggle poultry product list"
                                >
                                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobilePoultryOpen ? "rotate-180" : ""}`} />
                                </button>
                              </div>
                              {mobilePoultryOpen && (
                                <div className="mt-2.5 grid grid-cols-1 gap-1 border-t border-border/60 pt-2 sm:grid-cols-2">
                                  {sortedPoultry.map((p) => (
                                    <Link
                                      key={p.slug}
                                      to="/products/$slug"
                                      params={{ slug: p.slug }}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center justify-between rounded-md p-1.5 transition-colors active:bg-surface"
                                    >
                                      <span className="truncate text-xs font-medium text-navy">{p.name}</span>
                                      <span className="text-[0.65rem] text-muted-foreground">{p.category}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Partition 2: Cattle Products */}
                            <div className="rounded-lg border border-border bg-card p-3">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/cattle-products"
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest hover:underline"
                                >
                                  <span className="h-2 w-2 rounded-full bg-forest" />
                                  <span>Cattle Products</span>
                                  <ArrowUpRight className="h-3 w-3" />
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => setMobileCattleOpen((v) => !v)}
                                  className="p-1 text-muted-foreground hover:text-navy"
                                  aria-label="Toggle cattle product list"
                                >
                                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileCattleOpen ? "rotate-180" : ""}`} />
                                </button>
                              </div>
                              {mobileCattleOpen && (
                                <div className="mt-2.5 grid grid-cols-1 gap-1 border-t border-border/60 pt-2 sm:grid-cols-2">
                                  {sortedCattle.map((p) => (
                                    <Link
                                      key={p.slug}
                                      to="/products/$slug"
                                      params={{ slug: p.slug }}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center justify-between rounded-md p-1.5 transition-colors active:bg-surface"
                                    >
                                      <span className="truncate text-xs font-medium text-navy">{p.name}</span>
                                      <span className="text-[0.65rem] text-muted-foreground">{p.category}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                if (n.to === "/solutions") {
                  return (
                    <motion.div
                      key={n.to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                      className="border-b border-border"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Link
                          to="/solutions"
                          onClick={() => setOpen(false)}
                          className="flex flex-1 items-center gap-3 py-3.5 text-base font-semibold text-navy transition-colors active:text-gold-cta"
                        >
                          <span className="w-6 text-xs font-semibold text-gold-cta">0{i + 1}</span>
                          {n.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileSolutions((v) => !v)}
                          aria-expanded={mobileSolutions}
                          aria-controls="mobile-solutions"
                          aria-label={mobileSolutions ? "Collapse solutions" : "Expand solutions"}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-navy transition-colors active:border-gold active:text-gold-cta"
                        >
                          <motion.span animate={{ rotate: mobileSolutions ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {mobileSolutions && (
                          <motion.div
                            id="mobile-solutions"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden pb-4 pl-4"
                          >
                            <div className="mb-3">
                              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-cta">
                                <span className="h-2 w-2 rounded-full bg-gold" /> Poultry Solutions
                              </p>
                              <div className="mt-2 space-y-1">
                                {POULTRY_SOLUTIONS.map((s) => (
                                  <Link
                                    key={s.slug}
                                    to="/products/$slug"
                                    params={{ slug: s.slug }}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-md p-1.5 transition-colors active:bg-surface"
                                  >
                                    <span className="block text-xs font-medium text-navy">{s.title}</span>
                                    <span className="block text-[0.65rem] text-muted-foreground">{s.desc}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest">
                                <span className="h-2 w-2 rounded-full bg-forest" /> Cattle Solutions
                              </p>
                              <div className="mt-2 space-y-1">
                                {CATTLE_SOLUTIONS.map((s) => (
                                  <Link
                                    key={s.slug}
                                    to="/products/$slug"
                                    params={{ slug: s.slug }}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-md p-1.5 transition-colors active:bg-surface"
                                  >
                                    <span className="block text-xs font-medium text-navy">{s.title}</span>
                                    <span className="block text-[0.65rem] text-muted-foreground">{s.desc}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={n.to}
                      activeOptions={{ exact: n.to === "/" }}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 border-b border-border py-3.5 text-base font-semibold text-navy transition-colors"
                      activeProps={{ className: "!text-gold-cta" }}
                    >
                      <span className="w-6 text-xs font-semibold text-gold-cta">0{i + 1}</span>
                      {n.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-auto flex flex-col gap-3 py-8">
                <Link to="/business-enquiries" onClick={() => setOpen(false)} className="btn-primary justify-center">
                  Business Enquiry
                </Link>
                <a href={SITE.phoneHref} className="btn-ghost justify-center">
                  <Phone className="h-4 w-4" aria-hidden /> Call {SITE.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
