import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Plus, Search } from "lucide-react";

export function SearchSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select…",
  searchPlaceholder = "Search…",
  emptyText = "No matches found.",
  disabled = false,
  allowCustom = false,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  disabled?: boolean;
  allowCustom?: boolean;
  error?: string | undefined;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const normalized = query.trim().toLowerCase();
  const filtered = options.filter((option) => option.toLowerCase().includes(normalized));

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <div ref={rootRef} className="relative flex flex-col gap-1.5">
      <label
        id={labelId}
        className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-navy"
      >
        {label}
      </label>
      <button
        suppressHydrationWarning
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        aria-invalid={Boolean(error)}
        onClick={() => !disabled && setOpen((current) => !current)}
        className={`contact-field flex w-full items-center justify-between gap-3 text-left ${
          error ? "border-destructive" : ""
        } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
      >
        <span className={`truncate ${value ? "text-foreground" : "text-muted-foreground"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && !disabled && (
        <div className="absolute left-0 right-0 top-full z-30 mt-1.5 overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          <div className="border-b border-border p-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                suppressHydrationWarning
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                autoFocus
                className="contact-field w-full pl-8"
              />
            </div>
          </div>
          <div className="max-h-56 overflow-y-auto p-1.5" role="listbox" aria-label={label}>
            {filtered.map((option) => {
              const selected = option === value;
              return (
                <button
                  suppressHydrationWarning
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-surface ${
                    selected ? "font-semibold text-navy" : "text-foreground"
                  }`}
                >
                  <span className="truncate">{option}</span>
                  {selected && <Check className="h-3.5 w-3.5 shrink-0 text-gold-cta" />}
                </button>
              );
            })}
            {allowCustom &&
              query.trim() &&
              !options.some((o) => o.toLowerCase() === normalized) && (
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => {
                    onChange(query.trim());
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-navy hover:bg-surface"
                >
                  <Plus className="h-3.5 w-3.5 shrink-0 text-gold-cta" />
                  Use &ldquo;{query.trim()}&rdquo;
                </button>
              )}
            {filtered.length === 0 && !allowCustom && (
              <p className="px-3 py-6 text-center text-xs text-muted-foreground">{emptyText}</p>
            )}
            {filtered.length === 0 && allowCustom && !query.trim() && (
              <p className="px-3 py-6 text-center text-xs text-muted-foreground">{emptyText}</p>
            )}
          </div>
        </div>
      )}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
