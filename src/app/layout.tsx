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
    "We help home service professionals and law firms break through the $1M–$5M revenue ceiling with proven systematic digital marketing.",
  metadataBase: new URL("https://aspbranding.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ASP",
  },
  twitter: {
    card: "summary_large_image",
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
