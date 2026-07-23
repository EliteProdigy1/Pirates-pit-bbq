import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CateringForm } from "@/components/forms/CateringForm";
import { siteConfig } from "@/data/site.config";
import { assets } from "@/data/assets";
import { SECTION_IDS } from "@/data/nav";

/**
 * Section 6 — Bring the Pit.
 * Catering pitch + inquiry form. Form must be immediately usable, so no
 * animation gates it (reduced-motion safe by construction).
 */
export function Catering() {
  return (
    <section id={SECTION_IDS.catering} className="bg-smoked py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Catering" title="Bring the Pit" />
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-bone/75">
              Let us cater your next event and bring the smoke, the flavor, and
              the experience. Tell us about your event and we&rsquo;ll build a
              plate worth remembering.
            </p>

            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/5">
              <PlaceholderImage
                src={assets.cateringSpread.src}
                alt={assets.cateringSpread.alt}
                label={assets.cateringSpread.file}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <p className="mt-6 font-sans text-sm text-bone/70">
              Prefer to email?{" "}
              <a
                href={`mailto:${siteConfig.contact.cateringEmail}`}
                className="text-gold underline underline-offset-4 hover:text-[#c99a45]"
              >
                {siteConfig.contact.cateringEmail}
              </a>
            </p>
          </div>

          <div className="rounded-sm border border-white/5 bg-charcoal/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold uppercase text-bone">
              Catering Inquiry
            </h3>
            <p className="mt-2 font-sans text-sm text-smoke">
              Fields marked <span className="text-ember">*</span> are required.
            </p>
            <div className="mt-6">
              <CateringForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catering;
