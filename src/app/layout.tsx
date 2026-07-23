import type { Metadata } from "next";
import { Cinzel, Oswald, Inter } from "next/font/google";
import { siteConfig } from "@/data/site.config";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// Engraved antique-gold display serif — headlines & wordmark
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

// Condensed industrial — eyebrow labels & accents
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Readable body
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.domain),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline} | ${siteConfig.address.city}, ${siteConfig.address.regionName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Pirates Pit Barbeque",
    "barbecue Fairhope",
    "BBQ Fairhope Alabama",
    "smoked brisket",
    "Gulf Coast barbecue",
    "catering Fairhope",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "en_US",
    images: [
      { url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal text-bone">
        <SmoothScroll />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
