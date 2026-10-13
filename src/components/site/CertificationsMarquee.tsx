import { useMotionPreference } from "@/hooks/use-motion-preference";

interface CertificationItem {
  id: string;
  name: string;
  subtitle: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    subtitle: "Quality Management System",
    icon: ({ className = "h-5 w-5" }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
        <circle cx="12" cy="9" r="6" />
        <path d="M12 3a6 6 0 0 0-6 6c0 2.5 1.5 4.6 3.6 5.5L8 21l4-2 4 2-1.6-6.5C16.5 13.6 18 11.5 18 9a6 6 0 0 0-6-6z" />
        <path d="m9.5 9 1.7 1.7 3.3-3.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "gmp-plus",
    name: "GMP+ FSA",
    subtitle: "Feed Safety Assurance",
    icon: ({ className = "h-5 w-5" }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "iso-22000",
    name: "ISO 22000:2018",
    subtitle: "Feed & Food Safety System",
    icon: ({ className = "h-5 w-5" }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "haccp",
    name: "HACCP Certified",
    subtitle: "Hazard Analysis Critical Control",
    icon: ({ className = "h-5 w-5" }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
        <path d="M12 2l7 4v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-4z" />
        <path d="m8.5 12 2.5 2.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "who-gmp",
    name: "WHO-GMP Standards",
    subtitle: "Good Manufacturing Practice",
    icon: ({ className = "h-5 w-5" }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" strokeLinecap="round" />
        <path d="M3.6 9h16.8M3.6 15h16.8" strokeLinecap="round" strokeDasharray="1 3" />
      </svg>
    ),
  },
  {
    id: "fami-qs",
    name: "FAMI-QS System",
    subtitle: "Specialty Feed Ingredients Safety",
    icon: ({ className = "h-5 w-5" }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "glp-tested",
    name: "GLP Laboratory Tested",
    subtitle: "100% Quality & Batch Assured",
    icon: ({ className = "h-5 w-5" }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
        <path d="M10 2v5.5a4 4 0 0 1-.8 2.4L5.3 15.8A4 4 0 0 0 5 18a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4 4 4 0 0 0-.3-2.2l-3.9-5.9a4 4 0 0 1-.8-2.4V2" strokeLinecap="round" />
        <line x1="8.5" y1="2" x2="15.5" y2="2" strokeLinecap="round" />
        <line x1="7" y1="17" x2="17" y2="17" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function CertificationsMarquee() {
  const reduce = useMotionPreference();

  // Quadruplicate items to guarantee a rich continuous ribbon across all monitor widths
  const marqueeItems = [
    ...CERTIFICATIONS,
    ...CERTIFICATIONS,
    ...CERTIFICATIONS,
    ...CERTIFICATIONS,
  ];

  return (
    <section
      className="relative overflow-hidden border-b border-border/50 bg-surface py-7 md:py-9"
      aria-label="Accredited Quality & Manufacturing Certifications"
    >
      <div className="container-x mb-5 flex items-center justify-center gap-3 text-center">
        <span className="hidden h-px w-8 bg-gold/50 sm:block" aria-hidden />
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Accredited Quality &amp; Manufacturing Standards
        </p>
        <span className="hidden h-px w-8 bg-gold/50 sm:block" aria-hidden />
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left Progressive Blur Overlays — Appearing from Atmospheric Blur */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-28 md:w-48"
          style={{
            background: "linear-gradient(to right, var(--surface) 25%, transparent 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            maskImage: "linear-gradient(to right, black 35%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 35%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-44 md:w-72"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            maskImage: "linear-gradient(to right, black 15%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 15%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Right Progressive Blur Overlays — Disappearing into Atmospheric Blur */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-28 md:w-48"
          style={{
            background: "linear-gradient(to left, var(--surface) 25%, transparent 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            maskImage: "linear-gradient(to left, black 35%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 35%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-44 md:w-72"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            maskImage: "linear-gradient(to left, black 15%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 15%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Scrolling track with feathered alpha mask */}
        <div className="relative w-full overflow-hidden marquee-mask">
          <div
            className={`flex w-max items-center gap-10 md:gap-14 py-2 ${
              reduce ? "overflow-x-auto px-8" : "animate-marquee"
            }`}
          >
            {marqueeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="group flex shrink-0 items-center gap-3.5 px-2 py-1.5 transition-all duration-300 hover:-translate-y-0.5 select-none"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center text-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-navy transition-colors duration-300 group-hover:text-gold-cta">
                      {item.name}
                    </span>
                    <span className="text-[0.65rem] font-medium tracking-wide text-muted-foreground">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
