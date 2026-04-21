import { Hero } from "@/components/sections/Hero";
import { GrowthSystem } from "@/components/sections/GrowthSystem";
import { Industries } from "@/components/sections/Industries";
import { ResultsBanner } from "@/components/sections/ResultsBanner";
import { HCPPartnership } from "@/components/sections/HCPPartnership";
import { PricingCards } from "@/components/sections/PricingCards";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Newsletter } from "@/components/sections/Newsletter";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

export default function HomePage() {
  return (
    <main id="primary" className="site-main">
      {/* 1. Hero */}
      <Hero
        eyebrow="AI integrators for home service businesses"
        heading='Assess. Strategize.<br><span class="hero-text-gradient">PERFORM.</span>'
        subheading="We integrate AI, marketing, and operations into the growth systems modern home service businesses run on every day. More leads. More closed jobs. More margin — without trading away your data or your brand."
        ctaText="Book a growth audit"
        ctaUrl="/contact"
        cta2Text="See the Growth System"
        cta2Url="#pricing"
        bgType="dark"
        showTrustLogos
      />

      {/* 2. The ASP Growth System — product band */}
      <GrowthSystem />

      {/* 3. Industries — broad trades grid (dark navy gradient bg) */}
      <div className="bg-gradient-to-b from-[#001233] via-[#001a4d] to-[#000000]">
        <Industries />
      </div>

      {/* 4. Results banner — client-focused stats, light bg */}
      <ResultsBanner />

      {/* 5. HCP Partnership */}
      <HCPPartnership />

      {/* 6. Pricing — Growth System tiers + Fractional sidecar + entry products */}
      <div className="bg-gradient-to-b from-[#000000] via-[#001233] to-[#001a4d]">
        <PricingCards />
      </div>

      {/* 7. Why ASP — 4 proof points on navy */}
      <WhyChoose />

      {/* 8. Newsletter — Beehiiv opt-in */}
      <Newsletter />

      {/* 9. FAQ — home-specific */}
      <FAQSection />

      {/* 10. Final CTA — reuses ConsultationCTA */}
      <ConsultationCTA />
    </main>
  );
}
