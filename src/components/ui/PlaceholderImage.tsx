"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Drop-in image with a branded placeholder fallback.
 *
 * REPLACING A PLACEHOLDER WITH A REAL ASSET
 * -----------------------------------------
 * 1. Drop the file into /public (e.g. /public/images/food/brisket.webp).
 * 2. Set its `src` in the data layer (src/data/assets.ts or featured.ts)
 *    from `null` to the path — that's the whole swap.
 *
 * While `src` is null we render a lightweight, on-brand box (no network
 * request, clean console). If a real `src` 404s, onError falls back to the
 * same box so a wrong path never shows a broken image.
 */
export interface PlaceholderImageProps {
  /** Real asset path, or null to show the placeholder. */
  src?: string | null;
  /** Descriptive alt text (also announced for the placeholder). */
  alt: string;
  /** Temp filename shown on the placeholder, e.g. "brisket.webp". */
  label?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  /** Classes for the <img>/placeholder box. */
  className?: string;
}

function PlaceholderBox({
  alt,
  label,
  className,
  style,
}: {
  alt: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      style={style}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-smoked via-charcoal to-black ${className ?? ""}`}
    >
      {/* soft smoke wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 20%, rgba(86,90,97,0.25), transparent 70%), radial-gradient(50% 50% at 80% 90%, rgba(181,138,59,0.12), transparent 70%)",
        }}
      />
      <div className="relative z-10 px-4 text-center">
        <span className="block font-accent text-[10px] uppercase tracking-[0.4em] text-gold/70">
          EP Media
        </span>
        <span className="mt-1 block font-accent text-xs uppercase tracking-widest text-smoke">
          {label ?? "image"}
        </span>
      </div>
    </div>
  );
}

export function PlaceholderImage({
  src,
  alt,
  label,
  fill,
  width,
  height,
  priority,
  sizes,
  className,
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    // Give the box concrete dimensions when not using fill.
    const sizeStyle =
      !fill && width && height ? { width, height } : undefined;
    return (
      <PlaceholderBox
        alt={alt}
        label={label}
        className={`${fill ? "absolute inset-0 h-full w-full" : ""} ${className ?? ""}`}
        {...(sizeStyle ? { style: sizeStyle } : {})}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export default PlaceholderImage;
