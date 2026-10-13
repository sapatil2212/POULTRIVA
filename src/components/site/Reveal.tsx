import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useMotionPreference } from "@/hooks/use-motion-preference";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useMotionPreference();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      animate={reduce ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MaskImage({
  src,
  alt,
  className,
  width,
  height,
  eager,
}: {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  eager?: boolean;
}) {
  const reduce = useMotionPreference();
  return (
    <motion.div
      className={`photo-frame overflow-hidden ${className ?? ""}`}
      initial={reduce ? false : { clipPath: "inset(12% 12% 12% 12%)", filter: "blur(6px)" }}
      animate={reduce ? { clipPath: "inset(0% 0% 0% 0%)", filter: "blur(0px)" } : {}}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduce ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover"
        initial={reduce ? false : { scale: 1.15 }}
        animate={reduce ? { scale: 1 } : {}}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: reduce ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
