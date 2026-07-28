import { holdConfig, depositConfig, SHOW_DEPOSIT_BUTTON } from "@/data/review.config";

/**
 * Full-screen "site on hold" lock. Rendered in place of the entire site when
 * SITE_ON_HOLD is true, so none of the restaurant markup is served. On-brand
 * (charcoal / bone / antique gold) with a single contact CTA.
 */
export function HoldScreen() {
  const isExternal = /^https?:\/\//.test(depositConfig.contactUrl);

  return (
    <main
      id="main"
      className="relative flex min-h-[100svh] flex-1 flex-col items-center justify-center overflow-hidden bg-charcoal px-6 text-center"
    >
      {/* sparing ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(185,74,34,0.16), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex max-w-lg flex-col items-center">
        <p className="font-accent text-sm uppercase tracking-[0.35em] text-gold">
          {holdConfig.eyebrow}
        </p>
        <h1 className="mt-5 font-display text-3xl font-bold uppercase leading-tight text-bone sm:text-4xl">
          {holdConfig.headline}
        </h1>
        <div aria-hidden className="mt-6 flex items-center gap-2">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70" />
        </div>
        <p className="mt-6 font-sans text-base leading-relaxed text-bone/75">
          {holdConfig.message}
        </p>

        {SHOW_DEPOSIT_BUTTON && (
          <a
            href={depositConfig.contactUrl}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="mt-9 inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-[#c99a45]"
          >
            {holdConfig.ctaLabel}
          </a>
        )}

        <p className="mt-10 font-accent text-xs uppercase tracking-[0.3em] text-smoke">
          EP Media
        </p>
      </div>
    </main>
  );
}

export default HoldScreen;
