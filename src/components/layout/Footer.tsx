import Link from "next/link";
import { siteConfig } from "@/data/site.config";
import { navLinks } from "@/data/nav";

/** Site footer — brand line, quick links, and honest contact info. */
export function Footer() {
  const { social } = siteConfig.links;
  const socials = [
    { label: "Facebook", href: social.facebook },
    { label: "Instagram", href: social.instagram },
    { label: "TikTok", href: social.tiktok },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-wide text-bone">
            Pirates Pit Barbeque
          </p>
          <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-smoke">
            Real wood. Real smoke. Real barbecue. Served from the heart of{" "}
            {siteConfig.address.city}, {siteConfig.address.regionName}.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-accent text-xs uppercase tracking-[0.3em] text-gold">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-bone/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-accent text-xs uppercase tracking-[0.3em] text-gold">
            Visit &amp; Contact
          </p>
          <address className="mt-4 space-y-2 font-sans text-sm not-italic text-bone/80">
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.region}{" "}
              {siteConfig.address.postalCode}
            </p>
            <p>
              <Link
                href={siteConfig.contact.phoneHref}
                className="hover:text-gold"
              >
                {siteConfig.contact.phone}
              </Link>
            </p>
            <p>
              <Link
                href={`mailto:${siteConfig.contact.cateringEmail}`}
                className="hover:text-gold"
              >
                {siteConfig.contact.cateringEmail}
              </Link>
            </p>
          </address>
          {socials.length > 0 && (
            <ul className="mt-4 flex gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href as string}
                    className="font-accent text-xs uppercase tracking-widest text-smoke hover:text-gold"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-6 sm:px-6">
        <p className="mx-auto max-w-7xl text-center font-sans text-xs text-smoke/70">
          © {new Date().getFullYear()} Pirates Pit Barbeque. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
