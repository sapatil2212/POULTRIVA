import { Link } from "@tanstack/react-router";

export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  const logoSrc = light
    ? "/images/brand/Poultriva-light.png"
    : "/images/brand/Poultriva-dark.png";

  return (
    <Link
      to="/"
      aria-label="POULTRIVA home"
      className={`group inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
    >
      <img
        src={logoSrc}
        alt="POULTRIVA — Nutrition • Health • Performance"
        width={220}
        height={52}
        className="h-9 md:h-10 w-auto object-contain transition-all duration-300"
      />
    </Link>
  );
}
