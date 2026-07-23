import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "gold" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-sm px-6 py-3 font-accent text-sm uppercase tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-charcoal hover:bg-[#c99a45] font-semibold",
  outline: "border border-gold text-gold hover:bg-gold/10",
  ghost: "border border-smoke text-bone hover:border-bone",
};

type AnchorProps = ComponentProps<typeof Link> & {
  variant?: Variant;
};

/** Link-styled call-to-action button. Internal or hash links use next/link. */
export function ButtonLink({
  variant = "gold",
  className = "",
  children,
  ...props
}: AnchorProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export default ButtonLink;
