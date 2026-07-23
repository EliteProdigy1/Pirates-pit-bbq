import { siteConfig } from "@/data/site.config";

/**
 * Restaurant structured data (schema.org).
 *
 * IMPORTANT: only VERIFIED fields are emitted. Unverified data (postal code,
 * geo coordinates, domain URL) is intentionally omitted until confirmed — we
 * never publish unverified contact details in structured data.
 */
export function JsonLd() {
  const { name, description, address, contact, hours, seo } = siteConfig;

  const openingHours = hours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));

  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name,
    description,
    servesCuisine: seo.servesCuisine,
    priceRange: seo.priceRange,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    openingHoursSpecification: openingHours,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default JsonLd;
