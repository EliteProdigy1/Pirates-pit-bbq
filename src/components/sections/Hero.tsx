"use client";

import { useEffect, useRef } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { EmberParticles } from "@/components/ui/EmberParticles";
import { siteConfig } from "@/data/site.config";
import { assets } from "@/data/assets";
import { SECTION_IDS } from "@/data/nav";
import { gsap } from "@/lib/gsap";

/**
 * Section 1 — Enter the Pit.
 *
 * Full-bleed cinematic hero built on the real Pirates Pit building. Premium,
 * restrained motion: a slow background settle, a staggered copy reveal, gentle
 * smoke drift, light embers, and a subtle scroll parallax.
 *
 * Motion is gated behind `prefers-reduced-motion: no-preference`. When reduced
 * motion is requested, the no-preference branch never runs, so nothing is set
 * to opacity:0 and the full hero is visible immediately (also true with JS off).
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".hero-reveal", { opacity: 0, y: 24 });
        gsap.set(".hero-bg", { scale: 1.08 });

        gsap
          .timeline({ defaults: { ease: "power2.out" } })
          .to(".hero-bg", { scale: 1, duration: 1.8, ease: "power1.out" }, 0)
          .to(
            ".hero-reveal",
            { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
            0.35
          );

        // Very subtle parallax as the hero scrolls away.
        gsap.to(".hero-bg", {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const orderHref = siteConfig.links.ordering ?? "#menu";

  return (
    <section
      ref={root}
      id={SECTION_IDS.top}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal sm:items-center"
    >
      {/* Background — art-directed real building photo (desktop + mobile crop) */}
      <div className="absolute inset-0 overflow-hidden">
        <picture className="hero-bg block h-full w-full will-change-transform">
          <source
            media="(max-width: 640px)"
            srcSet={assets.heroBuildingMobile.src ?? undefined}
          />
          <img
            src={assets.heroBuilding.src ?? undefined}
            alt={assets.heroBuilding.alt}
            className="h-full w-full scale-105 object-cover object-center max-sm:object-[38%_50%]"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* Readability overlays — bottom-up on mobile (text sits low), left-in
            on desktop (text sits to the side). Mural stays visible either way. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent sm:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-gradient-to-r from-charcoal via-charcoal/75 to-transparent sm:block"
        />
        <div aria-hidden className="absolute inset-0 bg-charcoal/20" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent"
        />
        <div aria-hidden className="hero-smoke absolute inset-0" />
        <EmberParticles />
      </div>

      {/* Copy */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:py-24">
        <div className="max-w-xl">
          <p className="hero-reveal font-accent text-sm uppercase tracking-[0.35em] text-gold">
            Slow-Smoked · Hand-Crafted · Always Real
          </p>
          <h1 className="hero-reveal mt-5 font-display text-5xl font-black uppercase leading-[0.95] text-bone sm:text-6xl lg:text-7xl">
            Smoke Rules
            <span className="block text-smoke">the Pit</span>
          </h1>
          <p className="hero-reveal mt-6 font-sans text-lg leading-snug text-bone/85">
            Real wood.
            <br />
            Real smoke.
            <br />
            Real barbecue.
            <br />
            <span className="text-bone/70">
              Slow-smoked in {siteConfig.address.city},{" "}
              {siteConfig.address.regionName}.
            </span>
          </p>
          <div className="hero-reveal mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#menu" variant="gold">
              View Menu
            </ButtonLink>
            {/* Order Now — placeholder until the online ordering link is provided */}
            <ButtonLink href={orderHref} variant="outline">
              Order Now
            </ButtonLink>
          </div>
          <p className="hero-reveal mt-8 flex items-center gap-2 font-accent text-xs uppercase tracking-[0.3em] text-smoke">
            <span aria-hidden className="text-gold">
              ◆
            </span>
            {siteConfig.address.city}, {siteConfig.address.regionName}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
