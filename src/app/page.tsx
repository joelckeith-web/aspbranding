import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { GrowthSystem } from "@/components/sections/GrowthSystem";
import { Industries } from "@/components/sections/Industries";
import { ResultsBanner } from "@/components/sections/ResultsBanner";
import { HCPPartnership } from "@/components/sections/HCPPartnership";
import { PricingCards } from "@/components/sections/PricingCards";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { Newsletter } from "@/components/sections/Newsletter";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

export default function HomePage() {
  return (
    <main id="primary" className="site-main">
      {/* 1. Hero — video bg restored */}
      <Hero
        eyebrow="AI integrators for home service businesses"
        heading='Assess. Strategize.<br><span class="hero-text-gradient">PERFORM.</span>'
        subheading="We integrate AI, marketing, and operations into the growth systems modern home service businesses run on every day. More leads. More closed jobs. More margin — without trading away your data or your brand."
        ctaText="Book a growth audit"
        ctaUrl="/contact"
        cta2Text="See the Growth System"
        cta2Url="#pricing"
        bgType="video"
        youtubeId="qpT2xpI5Lu4"
        showTrustLogos
      />

      {/* 2. Client logos — WHITE strip (break) */}
      <ClientLogos />

      {/* 3. The ASP Growth System — navy + image backdrop */}
      <GrowthSystem />

      {/* 4. Industries — BLACK carousel (layout break) */}
      <Industries />

      {/* 5. Results banner — BLACK + blue-outlined stat tiles */}
      <ResultsBanner />

      {/* 6. HCP Partnership — NAVY angular split, shorter */}
      <HCPPartnership />

      {/* 7. Testimonials — WHITE (break) */}
      <Testimonials />

      {/* 8. Pricing — BLACK gradient + brand-kit cards */}
      <div className="bg-gradient-to-b from-asp-black via-[#001233] to-asp-black">
        <PricingCards />
      </div>

      {/* 9. Portfolio showcase — light (break) */}
      <PortfolioShowcase />

      {/* 10. Why ASP — BLACK with team image */}
      <WhyChoose />

      {/* 11. Newsletter — white section with dark card (break) */}
      <Newsletter />

      {/* 12. FAQ — light (continues break) */}
      <FAQSection />

      {/* 13. Final CTA */}
      <ConsultationCTA />
    </main>
  );
}
