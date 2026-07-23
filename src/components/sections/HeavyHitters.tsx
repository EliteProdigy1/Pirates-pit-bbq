import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featured } from "@/data/featured";
import { SECTION_IDS } from "@/data/nav";

/**
 * Section 3 — The Heavy Hitters.
 * Featured meats, sandwiches, and platters. Static responsive grid in Phase 2;
 * Phase 5 adds the slow reveal / light parallax per card.
 */
export function HeavyHitters() {
  return (
    <section
      id={SECTION_IDS.featured}
      className="bg-charcoal py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Straight from the Pit"
          title="The Heavy Hitters"
          align="center"
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {featured.map((item) => (
            <li key={item.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/5 bg-smoked">
                <div className="relative aspect-square w-full overflow-hidden">
                  <PlaceholderImage
                    src={item.image}
                    alt={item.alt}
                    label={`${item.id}.webp`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-lg font-bold uppercase text-bone">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-snug text-smoke">
                    {item.blurb}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HeavyHitters;
