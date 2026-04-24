import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics, AnalyticsNoScript } from "@/components/analytics/Analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "ASP — Assess. Strategize. Perform.",
    template: "%s | ASP",
  },
  description:
    "AI integrators for home service businesses. Marketing, operations, and follow-up integrated into one growth system.",
  metadataBase: new URL("https://aspbranding.com"),
  keywords: [
    "home service marketing agency",
    "HVAC marketing",
    "plumbing marketing",
    "roofing marketing",
    "home inspection marketing",
    "Housecall Pro affiliate partner",
    "local SEO for home services",
    "answer engine optimization",
    "AEO for home services",
    "CSR AI home service",
    "marketing attribution HVAC",
    "fractional CMO home service",
  ],
  authors: [{ name: "ASP", url: "https://aspbranding.com" }],
  creator: "ASP",
  publisher: "ASP",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ASP",
    url: "https://aspbranding.com",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aspbranding",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans text-black bg-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
                  "@id": "https://aspbranding.com/#organization",
                  name: "ASP",
                  alternateName: "ASP - Assess. Strategize. Perform.",
                  description:
                    "AI integrators for home service businesses. Marketing, operations, and follow-up integrated into one growth system.",
                  url: "https://aspbranding.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://aspbranding.com/images/asp-logo.png",
                  },
                  image: "https://aspbranding.com/images/asp-logo.png",
                  email: "info@aspbranding.com",
                  telephone: "+1-512-200-3190",
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Austin",
                    addressRegion: "TX",
                    addressCountry: "US",
                  },
                  areaServed: { "@type": "Country", name: "United States" },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "ASP Growth System",
                    itemListElement: [
                      { "@type": "Offer", name: "Foundation", priceCurrency: "USD", price: "2500" },
                      { "@type": "Offer", name: "Growth", priceCurrency: "USD", price: "3850" },
                      { "@type": "Offer", name: "Local SEO Pro", priceCurrency: "USD", price: "1200" },
                      { "@type": "Offer", name: "StormFront", priceCurrency: "USD", price: "549" },
                      { "@type": "Offer", name: "Content Creation Package", priceCurrency: "USD", price: "499" },
                    ],
                  },
                  sameAs: [
                    "https://www.facebook.com/aspbranding",
                    "https://www.instagram.com/aspbranding",
                    "https://www.linkedin.com/company/asp-branding",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://aspbranding.com/#website",
                  url: "https://aspbranding.com",
                  name: "ASP",
                  description:
                    "AI integrators for home service businesses. Marketing, operations, and follow-up integrated into one growth system.",
                  publisher: { "@id": "https://aspbranding.com/#organization" },
                  inLanguage: "en-US",
                  speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: ["h1", "h2", "[data-speakable]"],
                  },
                },
              ],
            }),
          }}
        />
        <Analytics />
        <AnalyticsNoScript />
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-asp-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-asp-md"
          href="#primary"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <Script
          id="crazyegg"
          src="//script.crazyegg.com/pages/scripts/0114/6671.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
