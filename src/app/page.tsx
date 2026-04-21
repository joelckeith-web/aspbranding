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

      {/* 2. Client logos marquee — social proof strip */}
      <ClientLogos />

      {/* 3. The ASP Growth System — image backdrop + dark navy */}
      <GrowthSystem />

      {/* 4. Industries — dark navy band with pattern */}
      <div className="bg-gradient-to-b from-[#001233] via-[#001a4d] to-[#000000]">
        <Industries />
      </div>

      {/* 5. Results banner — white bg, gradient borders */}
      <ResultsBanner />

      {/* 6. HCP Partnership — black section with logo card */}
      <HCPPartnership />

      {/* 7. Pricing — dark navy, brand-kit featured card */}
      <div className="bg-gradient-to-b from-[#000000] via-[#001233] to-[#001a4d]">
        <PricingCards />
      </div>

      {/* 8. Why ASP — navy with team image backdrop */}
      <WhyChoose />

      {/* 9. Portfolio showcase — work images */}
      <PortfolioShowcase />

      {/* 10. Testimonials — light bg */}
      <Testimonials />

      {/* 11. Newsletter — dark card with gradient */}
      <Newsletter />

      {/* 12. FAQ — light bg */}
      <FAQSection />

      {/* 13. Final CTA */}
      <ConsultationCTA />
    </main>
  );
}
