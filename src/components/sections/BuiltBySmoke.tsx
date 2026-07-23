import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { assets } from "@/data/assets";
import { SECTION_IDS } from "@/data/nav";

/**
 * Section 2 — Built by Smoke.
 * Short brand story. Phase 2 renders the three copy beats as static, stacked
 * content; Phase 5 turns them into a short pinned, staged reveal.
 */
export function BuiltBySmoke() {
  return (
    <section
      id={SECTION_IDS.story}
      className="relative overflow-hidden bg-smoked py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Built by Smoke" title="No Shortcuts." />
          <div className="mt-6 space-y-1">
            <p className="font-display text-2xl font-bold uppercase text-bone sm:text-3xl">
              No Rushed Meat.
            </p>
            <p className="font-display text-2xl font-bold uppercase text-gold sm:text-3xl">
              Just Heat, Smoke, and Time.
            </p>
          </div>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-bone/75">
            We fire up the pit early and let the smoke do the work. Real wood,
            real flavor, real barbecue — the kind that only comes from patience.
          </p>
          <div className="mt-8">
            <ButtonLink href="#featured" variant="ghost">
              See the Heavy Hitters
            </ButtonLink>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/5">
          <PlaceholderImage
            src={assets.storyBrisket.src}
            alt={assets.storyBrisket.alt}
            label={assets.storyBrisket.file}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default BuiltBySmoke;
