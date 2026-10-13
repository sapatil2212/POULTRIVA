import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/data/site";
import { PRODUCTS } from "@/data/products";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
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
          scrolled ? "border-b border-border bg-background/90 py-3 backdrop-blur-md" : light ? "py-6" : "bg-background py-6"
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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-4"
                      >
                        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border shadow-xl">
                          {PRODUCTS.map((p) => (
                            <Link
                              key={p.slug}
                              to="/products/$slug"
                              params={{ slug: p.slug }}
                              onClick={() => setProdOpen(false)}
                              className="group bg-card p-5 transition-colors hover:bg-surface"
                            >
                              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-cta">
                                {p.index} · {p.category}
                              </span>
                              <span className="mt-1.5 flex items-center justify-between text-base font-semibold text-navy">
                                {p.name}
                                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                              </span>
                            </Link>
                          ))}
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
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-gold"
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
            className="fixed inset-0 z-40 overflow-y-auto bg-background pt-28 lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col">
              {[...NAV, { to: "/faqs", label: "FAQs" }].map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-border py-4 text-3xl font-semibold text-navy transition-colors"
                    activeProps={{ className: "border-b-2 !border-gold !text-gold-cta" }}
                  >
                    {n.label}
                    <span className="text-xs text-gold-cta">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-3 pb-12">
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
