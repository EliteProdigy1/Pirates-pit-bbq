import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { assets } from "@/data/assets";
import { SECTION_IDS } from "@/data/nav";

/**
 * Section 5 — You Can't Fake the Smoke.
 * Short cinematic media beat. Phase 2 shows a poster image with a static
 * play affordance; Phase 6 wires an offscreen-paused, poster-backed clip.
 */
export function FakeTheSmoke() {
  return (
    <section
      id={SECTION_IDS.smokeFilm}
      className="relative overflow-hidden bg-charcoal py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-white/5">
          <PlaceholderImage
            src={assets.smokeFilmPoster.src}
            alt={assets.smokeFilmPoster.alt}
            label={assets.smokeFilmPoster.file}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Static play affordance (non-functional in Phase 2) */}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-charcoal/50 backdrop-blur-sm"
          >
            <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden>
              <path d="M2 2l16 9-16 9V2z" fill="#B58A3B" />
            </svg>
          </span>
        </div>

        <div className="max-w-md">
          <p className="font-accent text-sm uppercase tracking-[0.3em] text-gold">
            The Real Thing
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-bone sm:text-4xl">
            You Can&rsquo;t Fake the Smoke
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-bone/75">
            It&rsquo;s in the bark. It&rsquo;s in the bite. It&rsquo;s in
            everything we do. No liquid smoke, no shortcuts — just wood, fire,
            and hours of patience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FakeTheSmoke;
