# POULTRIVA — Engineering Guidelines

- Product and article content lives in typed data files under `src/data`; pages read from there so new products need only a data entry.
- Keep photo and hero corner treatments in global semantic radius tokens so all page imagery stays consistent.
- Define heading and large-text scales centrally in `src/styles.css` with fixed breakpoint sizes so page typography stays consistent without viewport-driven scaling.
- Respect reduced-motion preferences globally, and provide pause controls for auto-advancing imagery to keep content accessible.
- Read motion preferences through the shared hydration-safe external-store hook so server markup matches the first browser render.
- Keep scroll blur entrances in the shared `Reveal` and `MaskImage` wrappers, clearing transforms and blur immediately for reduced motion so content stays readable.
- Centralize brand palette aliases and golden action styles in global semantic tokens; share pointer-transparent shimmer overlays across button variants and disable them for reduced motion.
- Pre-optimize React, its browser renderer, JSX runtimes, and motion together to avoid mixed dependency generations in the live preview.
