import { SectionHeading } from "@/components/ui/SectionHeading";
import { menu, MENU_VERIFIED } from "@/data/menu";
import { SECTION_IDS } from "@/data/nav";

/**
 * Section 4 — Full Menu.
 * Accessible, text-based menu rendered from the central data file. Text-first
 * so it stays fast and fully usable with no animation.
 */
export function FullMenu() {
  return (
    <section id={SECTION_IDS.menu} className="bg-smoked py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="From Plates to Sammiches"
          title="Full Menu"
          align="center"
        />

        {!MENU_VERIFIED && (
          <p
            role="note"
            className="mx-auto mt-6 max-w-2xl rounded-sm border border-gold/30 bg-gold/5 px-4 py-3 text-center font-sans text-xs leading-relaxed text-bone/70"
          >
            Menu items and prices are being confirmed with the restaurant and are
            subject to change. Please call to verify current offerings.
          </p>
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {menu.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`menu-${category.id}`}
              className="rounded-sm border border-white/5 bg-charcoal/60 p-6"
            >
              <h3
                id={`menu-${category.id}`}
                className="font-display text-xl font-bold uppercase tracking-wide text-gold"
              >
                {category.title}
              </h3>
              {category.subtitle && (
                <p className="mt-1 font-accent text-xs uppercase tracking-widest text-smoke">
                  {category.subtitle}
                </p>
              )}
              <ul className="mt-5 space-y-3">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-sans text-sm font-medium text-bone">
                        {item.name}
                      </span>
                      {item.price && (
                        <span
                          aria-hidden
                          className="min-w-0 flex-1 self-center border-b border-dotted border-white/10"
                        />
                      )}
                      {item.price && (
                        <span className="whitespace-nowrap font-accent text-sm tracking-wide text-gold">
                          {item.price}
                        </span>
                      )}
                    </div>
                    {item.note && (
                      <p className="mt-1 font-sans text-xs leading-snug text-smoke">
                        {item.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FullMenu;
