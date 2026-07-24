import Image from "next/image";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site.config";
import { assets } from "@/data/assets";
import { SECTION_IDS } from "@/data/nav";

/**
 * Section 8 — Final conversion.
 * Full-bleed feast background + the three primary actions. Ember glow kept
 * sparingly. The logo tile only renders once a real logo asset is supplied,
 * so no placeholder box sits over the photo in the meantime.
 */
export function FinalCta() {
  return (
    <section
      id={SECTION_IDS.visit}
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      {/* Full-bleed feast background */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={assets.finalFeast.src as string}
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-center"
        />
        {/* Scrim — soft center darkening for text contrast, letting the
            feast show through; edge fades blend into the black neighbors. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0,0,0,0.7), rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* sparing ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(185,74,34,0.22), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        {assets.heroLogo.src && (
          <div className="relative mb-8 h-28 w-28 sm:h-32 sm:w-32">
            <PlaceholderImage
              src={assets.heroLogo.src}
              alt={assets.heroLogo.alt}
              label={assets.heroLogo.file}
              fill
              sizes="128px"
              className="object-contain"
            />
          </div>
        )}

        <h2 className="font-display text-3xl font-bold uppercase leading-tight text-bone sm:text-5xl">
          Come Hungry.
          <span className="block text-gold">Leave Marked by the Pit.</span>
        </h2>
        <p className="mt-5 font-accent text-sm uppercase tracking-[0.3em] text-smoke">
          Real Wood · Real Smoke · Real BBQ
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#menu" variant="gold">
            View Menu
          </ButtonLink>
          <ButtonLink href="#catering" variant="outline">
            Catering
          </ButtonLink>
          <ButtonLink
            href={siteConfig.address.mapLink}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
