import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "motion/react";
import { Lock, X, Loader2, ShieldCheck } from "lucide-react";
import { submitEnquiry } from "@/lib/submit-enquiry";
import { useInfoUnlock } from "@/hooks/use-info-unlock";
import { useMotionPreference } from "@/hooks/use-motion-preference";

const ease = [0.22, 1, 0.36, 1] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid phone / WhatsApp number"),
  city: z.string().trim().min(2, "Required").max(80),
  state: z.string().trim().min(2, "Required").max(80),
});

type FormValues = z.infer<typeof schema>;

/**
 * Wraps gated product information. While locked, the content is blurred and
 * non-interactive; scrolling it into view opens a modal that collects visitor
 * details. On submit the lead is posted to the Apps Script endpoint, the admin
 * is emailed + a Google Sheet row added (server-side), and the content unlocks
 * for the rest of the visit.
 */
export function ProductInfoGate({
  productName,
  children,
}: {
  productName: string;
  children: ReactNode;
}) {
  const [unlocked, unlock] = useInfoUnlock();
  const reduce = useMotionPreference();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const promptedRef = useRef(false);

  // Auto-open the modal when the locked content scrolls into view.
  useEffect(() => {
    if (unlocked) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !promptedRef.current) {
            promptedRef.current = true;
            setOpen(true);
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [unlocked]);

  if (unlocked) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.5, ease }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div ref={wrapRef} className="relative min-h-[28rem] overflow-hidden bg-surface py-16 md:py-20">
      <div className="container-x" aria-hidden>
        <div className="grid gap-6 lg:grid-cols-2">
          {[0, 1].map((column) => (
            <div
              key={column}
              className="rounded-[var(--radius-card)] border border-border bg-card p-7"
            >
              <div className="h-3 w-36 rounded-full bg-border" />
              <div className="mt-7 space-y-4">
                {[0, 1, 2, 3, 4].map((row) => (
                  <div key={row} className="grid grid-cols-2 gap-5 border-b border-border pb-4">
                    <div className="h-2.5 rounded-full bg-border/80" />
                    <div className="h-2.5 rounded-full bg-border/60" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-background/55 backdrop-blur-[3px]">
        <div className="mx-4 max-w-md rounded-[var(--radius-card)] border border-border bg-card/95 p-8 text-center shadow-xl backdrop-blur-md">
          <motion.span
            initial={reduce ? false : { scale: 0.85, rotate: -8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: reduce ? 0 : 0.45, ease }}
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-cta"
          >
            <Lock className="h-5 w-5" />
          </motion.span>
          <h3 className="mt-5 text-lg font-semibold text-navy">Detailed information available</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Share your contact details to view the technical specifications, composition, and
            complete product information for {productName}.
          </p>
          <button
            suppressHydrationWarning
            type="button"
            onClick={() => setOpen(true)}
            className="btn-primary mt-6 w-full justify-center"
          >
            View full product details
          </button>
        </div>
      </div>

      <ProductInfoModal
        open={open}
        reduce={reduce}
        productName={productName}
        onClose={() => setOpen(false)}
        onSuccess={() => {
          unlock();
          setOpen(false);
        }}
      />
    </div>
  );
}

function ProductInfoModal({
  open,
  reduce,
  productName,
  onClose,
  onSuccess,
}: {
  open: boolean;
  reduce: boolean;
  productName: string;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      await submitEnquiry({
        data: {
          kind: "product-lead",
          ...values,
          product: productName,
          page: typeof window !== "undefined" ? window.location.href : "",
        },
      });
      reset();
      onSuccess();
    } catch {
      setServerError(
        "We couldn't submit your details. Please check your connection and try again.",
      );
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-forest-deep/80 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.3, ease }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="info-gate-title"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: reduce ? 0 : 0.4, ease }}
            className="relative my-auto w-full max-w-lg rounded-[var(--radius-card)] bg-card p-6 shadow-2xl sm:p-8"
          >
            <button
              suppressHydrationWarning
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-navy hover:text-navy"
            >
              <X className="h-4 w-4" />
            </button>

            <img
              src="/images/brand/Poultriva-dark.png"
              alt="POULTRIVA"
              width={180}
              height={43}
              className="h-9 w-auto object-contain"
            />
            <motion.span
              initial={reduce ? false : { scale: 0.7, rotate: -12 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.08, ease }}
              className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-cta"
            >
              <ShieldCheck className="h-5 w-5" />
            </motion.span>
            <h2 id="info-gate-title" className="mt-4 text-xl font-semibold text-navy">
              View full product details
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Enter your details to unlock the technical specifications and composition for{" "}
              <span className="font-medium text-navy">{productName}</span>. Your information helps
              our team follow up with accurate product support.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4" noValidate>
              <GateField id="gate-name" label="Full name" error={errors.name?.message}>
                <input
                  id="gate-name"
                  type="text"
                  suppressHydrationWarning
                  autoComplete="name"
                  className="gate-input"
                  {...register("name")}
                />
              </GateField>
              <div className="grid gap-4 sm:grid-cols-2">
                <GateField id="gate-email" label="Email" error={errors.email?.message}>
                  <input
                    id="gate-email"
                    type="email"
                    suppressHydrationWarning
                    autoComplete="email"
                    className="gate-input"
                    {...register("email")}
                  />
                </GateField>
                <GateField id="gate-phone" label="Phone / WhatsApp" error={errors.phone?.message}>
                  <input
                    id="gate-phone"
                    type="tel"
                    suppressHydrationWarning
                    autoComplete="tel"
                    className="gate-input"
                    {...register("phone")}
                  />
                </GateField>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <GateField id="gate-city" label="City" error={errors.city?.message}>
                  <input
                    id="gate-city"
                    type="text"
                    autoComplete="address-level2"
                    className="gate-input"
                    {...register("city")}
                  />
                </GateField>
                <GateField id="gate-state" label="State" error={errors.state?.message}>
                  <input
                    id="gate-state"
                    type="text"
                    autoComplete="address-level1"
                    className="gate-input"
                    {...register("state")}
                  />
                </GateField>
              </div>

              {serverError && (
                <p className="text-sm text-destructive" role="alert">
                  {serverError}
                </p>
              )}

              <button
                suppressHydrationWarning
                type="submit"
                disabled={isSubmitting}
                className="btn-primary mt-2 w-full justify-center disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  "View Product Details"
                )}
              </button>
              <p className="text-center text-[0.7rem] leading-relaxed text-muted-foreground">
                By continuing you agree to be contacted about POULTRIVA products. We respect your
                privacy.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function GateField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
