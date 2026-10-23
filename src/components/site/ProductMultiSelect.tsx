import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export function ProductMultiSelect({
  value,
  onChange,
  error,
  fullWidth = true,
}: {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string | undefined;
  fullWidth?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const normalized = query.trim().toLowerCase();
  const filtered = PRODUCTS.filter((product) =>
    [product.name, product.category, product.focusArea]
      .join(" ")
      .toLowerCase()
      .includes(normalized),
  );
  const allSelected = value.length === PRODUCTS.length;

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  const toggle = (name: string) => {
    onChange(value.includes(name) ? value.filter((item) => item !== name) : [...value, name]);
  };

  return (
    <div ref={rootRef} className={`relative ${fullWidth ? "sm:col-span-2" : ""}`}>
      <label
        id="contact-products-label"
        className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-navy"
      >
        Products of interest
      </label>
      <button
        suppressHydrationWarning
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="contact-products-label"
        aria-invalid={Boolean(error)}
        onClick={() => setOpen((current) => !current)}
        className={`contact-field mt-1.5 flex w-full items-center justify-between gap-3 text-left ${error ? "border-destructive" : ""}`}
      >
        <span className={value.length ? "text-foreground" : "text-muted-foreground"}>
          {value.length === 0
            ? "Select one or more products"
            : allSelected
              ? `All ${PRODUCTS.length} products selected`
              : `${value.length} product${value.length === 1 ? "" : "s"} selected`}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {value.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {value.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-medium text-navy"
            >
              {name}
              <button
                suppressHydrationWarning
                type="button"
                onClick={() => toggle(name)}
                aria-label={`Remove ${name}`}
                className="text-muted-foreground hover:text-navy"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {open && (
        <div className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="border-b border-border p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                suppressHydrationWarning
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by product name or category"
                autoFocus
                className="contact-field w-full pl-9"
              />
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-border bg-surface/70 px-4 py-2.5">
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => onChange(allSelected ? [] : PRODUCTS.map((product) => product.name))}
              className="text-xs font-semibold text-navy hover:text-gold-cta"
            >
              {allSelected ? "Clear all" : "Select all products"}
            </button>
            <span className="text-[0.7rem] text-muted-foreground">{value.length} selected</span>
          </div>
          <div className="max-h-72 overflow-y-auto p-2" role="listbox" aria-multiselectable="true">
            {filtered.map((product) => {
              const selected = value.includes(product.name);
              return (
                <button
                  suppressHydrationWarning
                  key={product.slug}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => toggle(product.name)}
                  className="group flex w-full items-center gap-3 rounded-lg p-2.5 text-left hover:bg-surface"
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${selected ? "border-navy bg-navy text-white" : "border-border"}`}
                  >
                    {selected && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className="h-9 w-9 shrink-0 overflow-hidden rounded-md border border-border">
                    <img src={product.image} alt="" className="h-full w-full object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-navy">
                      {product.name}
                    </span>
                    <span className="block truncate text-[0.7rem] text-muted-foreground">
                      {product.category}
                    </span>
                  </span>
                </button>
              );
            })}
            {filtered.length === 0 && (
              <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                No products match your search.
              </p>
            )}
          </div>
        </div>
      )}
      {error && (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
