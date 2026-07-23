import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site.config";
import { SECTION_IDS } from "@/data/nav";

/** 24h "HH:MM" → "11:00 AM". */
function to12h(t: string) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${period}`;
}

/**
 * Section 7 — Find the Pit.
 * Address, hours, phone, directions, and a static map placeholder. A static
 * map image (not an embedded iframe) keeps this light; the button deep-links
 * to maps for real directions.
 */
export function FindThePit() {
  const { address, contact, hours } = siteConfig;

  return (
    <section id={SECTION_IDS.find} className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Come Hungry"
          title="Find the Pit"
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="font-accent text-xs uppercase tracking-[0.3em] text-gold">
                Location
              </h3>
              <address className="mt-3 font-sans text-lg not-italic text-bone">
                {address.street}
                <br />
                {address.city}, {address.region} {address.postalCode}
              </address>
            </div>

            <div>
              <h3 className="font-accent text-xs uppercase tracking-[0.3em] text-gold">
                Hours
              </h3>
              <ul className="mt-3 space-y-1 font-sans text-bone/85">
                {hours.map((row) => (
                  <li key={row.label} className="flex justify-between gap-6">
                    <span>{row.label}</span>
                    <span className="text-bone/70">
                      {row.opens && row.closes
                        ? `${to12h(row.opens)} – ${to12h(row.closes)}`
                        : "Closed"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-6">
              <div>
                <h3 className="font-accent text-xs uppercase tracking-[0.3em] text-gold">
                  Phone
                </h3>
                <Link
                  href={contact.phoneHref}
                  className="mt-2 block font-sans text-lg text-bone hover:text-gold"
                >
                  {contact.phone}
                </Link>
              </div>
            </div>

            <Link
              href={address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-gold px-6 py-3 font-accent text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold/10"
            >
              Get Directions
            </Link>
          </div>

          {/* Static map placeholder */}
          <div
            role="img"
            aria-label={`Map showing ${siteConfig.name} at ${address.street}, ${address.city}, ${address.region}`}
            className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-sm border border-white/5 bg-gradient-to-br from-smoked to-black"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(86,90,97,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(86,90,97,0.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center">
              <span aria-hidden className="text-3xl text-ember">
                ◉
              </span>
              <p className="mt-2 font-accent text-xs uppercase tracking-widest text-smoke">
                map-static.webp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindThePit;
