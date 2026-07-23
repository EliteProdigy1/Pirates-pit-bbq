import { siteConfig } from "@/data/site.config";

/**
 * Phase 1 holding page.
 *
 * Confirms the foundation is wired: brand tokens, the three brand fonts,
 * dark smokehouse palette, semantic landmarks, and accessible focus.
 * The full 8-section cinematic build lands in Phase 2 onward.
 */
export default function Home() {
  return (
    <main
      id="main"
      className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center"
    >
      <p className="font-accent uppercase tracking-[0.35em] text-gold text-sm">
        Slow-Smoked · Hand-Crafted · Always Real
      </p>

      <h1 className="font-display font-black uppercase leading-none text-bone text-5xl sm:text-7xl">
        Smoke Rules
        <span className="block text-smoke">the Pit</span>
      </h1>

      <p className="max-w-xl font-sans text-smoke text-base sm:text-lg">
        {siteConfig.description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <span className="rounded-sm border border-gold px-6 py-3 font-accent uppercase tracking-widest text-gold text-sm">
          View the Menu
        </span>
        <span className="rounded-sm border border-smoke px-6 py-3 font-accent uppercase tracking-widest text-bone text-sm">
          Catering
        </span>
      </div>

      <p className="font-accent uppercase tracking-[0.3em] text-smoke text-xs">
        {siteConfig.address.city}, {siteConfig.address.regionName}
      </p>

      <p className="mt-8 max-w-md font-sans text-xs leading-relaxed text-smoke/70">
        Foundation online — Next.js · TypeScript · Tailwind · GSAP · ScrollTrigger
        · Lenis. Cinematic build in progress.
      </p>
    </main>
  );
}
