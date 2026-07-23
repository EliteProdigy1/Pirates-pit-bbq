"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { EmberParticles } from "@/components/ui/EmberParticles";
import { assets } from "@/data/assets";
import { SECTION_IDS } from "@/data/nav";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * "The Fire Never Goes Out" — a full-bleed night section built on the venue
 * establishing shot. Subtle Ken Burns + smoke drift + gentle embers, minimal
 * copy, and a single gold CTA to the location section.
 *
 * Performance / accessibility:
 * - The Ken Burns tween only runs while the section is in view (paused
 *   offscreen via ScrollTrigger), per the scroll-skill's offscreen-pause rule.
 * - All motion is gated behind prefers-reduced-motion: no-preference; when
 *   reduced motion is requested nothing is set to opacity:0, so the full
 *   section (background, copy, CTA) is visible immediately.
 * - The background is lazy-loaded (below the fold) and a base overscale keeps
 *   the composition covered while the image drifts.
 */
export function FireNeverGoesOut() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Ken Burns: slow scale + a whisper of drift, only while in view.
        gsap.set(".fire-bg", { scale: 1.06 });
        const kenBurns = gsap.to(".fire-bg", {
          scale: 1.12,
          xPercent: -1.5,
          yPercent: -1.5,
          duration: 24,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          paused: true,
        });
        ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => (self.isActive ? kenBurns.play() : kenBurns.pause()),
        });

        // Copy reveal on enter.
        gsap.set(".fire-reveal", { opacity: 0, y: 20 });
        gsap.to(".fire-reveal", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 72%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id={SECTION_IDS.fire}
      aria-labelledby="fire-heading"
      className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Full-bleed night background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="fire-bg absolute inset-0 scale-105 will-change-transform">
          <Image
            src={assets.venueNight.src as string}
            alt={assets.venueNight.alt}
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover object-center"
          />
        </div>
        {/* Readability + atmosphere — a soft centered scrim keeps the text
            legible while leaving the venue (string lights, lantern, mural,
            smoker) visible; edge fades blend into the neighboring sections. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 50% 46%, rgba(11,11,12,0.62), rgba(11,11,12,0.15) 62%, transparent 78%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/35"
        />
        <div aria-hidden className="hero-smoke absolute inset-0 opacity-70" />
        <EmberParticles />
      </div>

      {/* Copy */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2
          id="fire-heading"
          className="fire-reveal font-display text-3xl font-bold uppercase leading-tight text-bone sm:text-5xl"
        >
          The Fire Never Goes Out
        </h2>
        <p className="fire-reveal mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-bone/85 sm:text-lg">
          As the sun sets, the smoke keeps rolling. Pull up a chair. Stay awhile.
        </p>
        <div className="fire-reveal mt-8">
          <ButtonLink href={`#${SECTION_IDS.find}`} variant="gold">
            Plan Your Visit
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default FireNeverGoesOut;
