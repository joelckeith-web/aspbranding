import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { PricingCards } from "@/components/sections/PricingCards";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQSection } from "@/components/sections/FAQSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
  title: "Pricing — Growth System Tiers for Home Service",
  description:
    "Transparent pricing for the ASP Growth System. Three tiers — Foundation, Growth, Premier — plus three productized entry points. Built for home service operators.",
};

export default function PricingPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.aspbranding.com/" }, { name: "Pricing", url: "https://www.aspbranding.com/pricing" }]} />
      <Hero
        eyebrow="Pricing"
        heading="Built for serious operators.<br><span class='hero-text-gradient'>Priced like one.</span>"
        subheading="Three tiers run the full Growth System. Three productized entry points start with one lever. Every engagement ties to revenue, not retainers."
        ctaText="Run the Growth Diagnostic"
        ctaUrl="/diagnostic"
        cta2Text="Book a growth audit"
        cta2Url="/contact"
        bgType="image"
        imageUrl="/images/backgrounds/hero-trades-1.jpg"
        imagePosition="center center"
      />

      {/* Diagnostic CTA — leading section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(76, 201, 240, 0.16), transparent 70%), radial-gradient(ellipse 50% 40% at 85% 50%, rgba(159, 76, 255, 0.12), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Before you scroll the tiers
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5">
              Take the Growth Diagnostic.
            </h2>
            <p className="text-white/75 text-lg mb-8">
              90 seconds. Seven questions about your current revenue, marketing spend, CRM, and biggest bottleneck. You&apos;ll get the recommended tier and a calendar link to talk it through &mdash; so the pricing below actually maps to your business.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-8 py-4 rounded-[var(--radius-asp-lg)] hover:bg-white transition-colors text-base"
            >
              Start the Growth Diagnostic
              <span aria-hidden>&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-gradient-to-b from-asp-black via-[#001233] to-asp-black">
        <PricingCards />
      </div>

      <RelatedPages
        items={[
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "What the tiers actually deliver. Marketing, operations, and follow-up integrated into a single system.",
          },
          {
            label: "Pillar",
            href: "/ai-integration",
            title: "AI Integration",
            body: "The Housecall Pro AI stack we configure inside Growth and Premier. CSR AI, attribution, follow-up automation.",
          },
          {
            label: "Decision tool",
            href: "/diagnostic",
            title: "Growth Diagnostic",
            body: "90 seconds, 7 questions. Find out which tier fits your business today — and get a calendar link to talk it through.",
          },
        ]}
      />

      <TestimonialAnchor quote="Willing to go the extra mile." />

      <FAQSection />
    </main>
  );
}
