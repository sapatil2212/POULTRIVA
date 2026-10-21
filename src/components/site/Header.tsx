import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowUpRight, Phone, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/data/site";
import { PRODUCTS } from "@/data/products";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [mobileProd, setMobileProd] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const { pathname } = useLocation();
  const light = pathname === "/" && !scrolled && !open;
  const navColor = light ? "text-primary-foreground" : "text-foreground";
  const iconColor = light ? "text-primary-foreground" : "text-navy";
  const navLinkBase = `relative py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-gold after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 ${navColor}`;
  const navLinkActive = light
    ? "text-gold-soft font-semibold after:!scale-x-100"
    : "text-navy font-semibold after:!scale-x-100";

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
    setMobileProd(false);
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
            {NAV.map((n) =>
              n.to === "/products" ? (
                <div
                  key={n.to}
                  className="relative"
                  onMouseEnter={() => setProdOpen(true)}
                  onMouseLeave={() => setProdOpen(false)}
                  onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setProdOpen(false); }}
                  onKeyDown={(event) => { if (event.key === "Escape") { setProdOpen(false); event.currentTarget.querySelector<HTMLAnchorElement>("a")?.focus(); setProdOpen(false); } }}
                >
                  <Link
                    to="/products"
                    className={navLinkBase}
                    activeProps={{ className: navLinkActive }}
                    onFocus={() => setProdOpen(true)}
                  >
                    Products
                  </Link>
                  <AnimatePresence>
                    {prodOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full z-50 w-[62rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-4"
                      >
                        <div className="grid grid-cols-12 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                          {/* Featured intro panel */}
                          <div className="relative col-span-3 flex flex-col justify-between overflow-hidden bg-navy p-6 text-primary-foreground">
                            <div
                              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-gold-soft/20"
                              aria-hidden
                            />
                            <div>
                              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
                                Our Portfolio
                              </p>
                              <p className="serif-accent mt-3 text-2xl leading-tight text-primary-foreground">
                                Purpose-driven poultry nutrition.
                              </p>
                              <p className="mt-3 text-xs leading-relaxed text-primary-foreground/70">
                                {PRODUCTS.length} specialized supplements across nutrition, minerals, water and digestive care.
                              </p>
                            </div>
                            <Link
                              to="/products"
                              onClick={() => setProdOpen(false)}
                              className="group/all mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft"
                            >
                              View all products
                              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
                            </Link>
                          </div>
                          {/* Product list */}
                          <div className="col-span-9 grid grid-cols-3 gap-1 p-2">
                            {PRODUCTS.map((p, i) => (
                              <motion.div
                                key={p.slug}
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
                              >
                                <Link
                                  to="/products/$slug"
                                  params={{ slug: p.slug }}
                                  onClick={() => setProdOpen(false)}
                                  className="group/item flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-surface"
                                >
                                  <span className="h-11 w-11 shrink-0 overflow-hidden rounded-md border border-border bg-surface">
                                    <img
                                      src={p.image}
                                      alt=""
                                      loading="lazy"
                                      className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                    />
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="block truncate text-sm font-semibold text-navy transition-colors group-hover/item:text-gold-cta">
                                      {p.name}
                                    </span>
                                    <span className="block truncate text-[0.7rem] text-muted-foreground">{p.category}</span>
                                  </span>
                                  <ArrowUpRight className="h-4 w-4 shrink-0 text-gold-cta opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className={navLinkBase}
                  activeProps={{ className: navLinkActive }}
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/business-enquiries" className="btn-primary hidden !py-2.5 sm:inline-flex">
              Business Enquiry
            </Link>
            <Button variant="ghost"
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
              {[...NAV, { to: "/faqs", label: "FAQs" }].map((n, i) =>
                n.to === "/products" ? (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-border"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        to="/products"
                        onClick={() => setOpen(false)}
                        className="flex flex-1 items-center gap-3 py-3.5 text-base font-semibold text-navy transition-colors active:text-gold-cta"
                      >
                        <span className="w-6 text-xs font-semibold text-gold-cta">0{i + 1}</span>
                        {n.label}
                      </Link>
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
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-0.5 pb-4 pl-9 sm:grid-cols-2">
                            {PRODUCTS.map((p) => (
                              <Link
                                key={p.slug}
                                to="/products/$slug"
                                params={{ slug: p.slug }}
                                onClick={() => setOpen(false)}
                                className="group flex items-center gap-2.5 rounded-lg p-1.5 transition-colors active:bg-surface"
                              >
                                <span className="h-8 w-8 shrink-0 overflow-hidden rounded-md border border-border bg-surface">
                                  <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block truncate text-[0.8rem] font-medium text-navy">{p.name}</span>
                                  <span className="block truncate text-[0.65rem] text-muted-foreground">{p.category}</span>
                                </span>
                                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-gold-cta/70" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
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
                ),
              )}
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
