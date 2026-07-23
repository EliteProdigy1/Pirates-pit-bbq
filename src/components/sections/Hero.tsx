import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site.config";
import { assets } from "@/data/assets";
import { SECTION_IDS } from "@/data/nav";

/**
 * Section 1 — Enter the Pit.
 * Full-screen cinematic hero. Static in Phase 2; the smoke/logo/ember
 * scroll sequence is layered on in Phase 4 without changing this markup.
 */
export function Hero() {
  return (
    <section
      id={SECTION_IDS.top}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal"
    >
      {/* Smoke backdrop (placeholder) */}
      <div aria-hidden className="absolute inset-0">
        <PlaceholderImage
          src={assets.heroSmoke.src}
          alt=""
          label={assets.heroSmoke.file}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        {/* darken for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="font-accent text-sm uppercase tracking-[0.35em] text-gold">
            Slow-Smoked · Hand-Crafted · Always Real
          </p>
          <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.95] text-bone sm:text-6xl lg:text-7xl">
            Smoke Rules
            <span className="block text-smoke">the Pit</span>
          </h1>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-bone/80 sm:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#menu" variant="gold">
              View the Menu
            </ButtonLink>
            <ButtonLink href="#catering" variant="outline">
              Catering
            </ButtonLink>
          </div>
          <p className="mt-8 flex items-center gap-2 font-accent text-xs uppercase tracking-[0.3em] text-smoke">
            <span aria-hidden className="text-gold">
              ◆
            </span>
            {siteConfig.address.city}, {siteConfig.address.regionName}
          </p>
        </div>

        {/* Logo */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <PlaceholderImage
            src={assets.heroLogo.src}
            alt={assets.heroLogo.alt}
            label={assets.heroLogo.file}
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 40vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
