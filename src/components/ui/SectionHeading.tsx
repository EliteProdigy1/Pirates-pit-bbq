import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Small label above the title, e.g. "Built by Smoke". */
  eyebrow?: string;
  title: ReactNode;
  /** h2 by default; hero uses h1 elsewhere. */
  as?: "h1" | "h2";
  align?: "left" | "center";
  id?: string;
  className?: string;
}

/** Thin antique-gold divider with a small diamond — subtle, not skull-heavy. */
function GoldDivider({ align }: { align: "left" | "center" }) {
  return (
    <div
      aria-hidden
      className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  as = "h2",
  align = "left",
  id,
  className = "",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"} ${className}`}
    >
      {eyebrow && (
        <p className="font-accent text-sm uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className="font-display text-3xl font-bold uppercase leading-tight text-bone sm:text-4xl lg:text-5xl"
      >
        {title}
      </Tag>
      <GoldDivider align={align} />
    </div>
  );
}

export default SectionHeading;
