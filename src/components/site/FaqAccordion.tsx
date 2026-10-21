import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useMotionPreference } from "@/hooks/use-motion-preference";

const ease = [0.22, 1, 0.36, 1] as const;

export type Faq = { question: string; answer: string };

export function FaqAccordion({ items }: { items: Faq[] }) {
  const reduce = useMotionPreference();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <dl className="border-t border-border">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={f.question} className="border-b border-border">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-5 py-6 text-left transition-colors hover:text-gold-cta"
              >
                <span className="flex min-w-0 items-baseline gap-5">
                  <span className="text-xs font-semibold text-gold-cta">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-semibold text-navy transition-colors group-hover:text-gold-cta">
                    {f.question}
                  </span>
                </span>
                <motion.span
                  aria-hidden
                  animate={reduce ? undefined : { rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.3, ease }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-navy transition-colors group-hover:border-gold group-hover:text-gold-cta"
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.dd
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="content"
                  initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.35, ease }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-10 pr-12 text-base leading-relaxed text-muted-foreground">{f.answer}</p>
                </motion.dd>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </dl>
  );
}
