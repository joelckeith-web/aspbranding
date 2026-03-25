import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Industries } from "@/components/sections/Industries";
import { PricingCards } from "@/components/sections/PricingCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function HomePage() {
  return (
    <main id="primary" className="site-main">
      {/* 1. Hero */}
      <Hero
        heading='Assess. Strategize.<br><span class="hero-text-gradient">PERFORM.</span>'
        pillars="No Guesswork. No Experiments. Just Results."
        subheading="We help home service professionals and law firms break through the $1M–$5M revenue ceiling with our proven systematic approach."
        bgType="video"
        youtubeId="qpT2xpI5Lu4"
        showTrustLogos
        showForm
      />

      {/* 2. Value Propositions */}
      <ValueProps />

      {/* 3. Client Logos */}
      <ClientLogos />

      {/* 4. Process — ASP Growth System */}
      <ProcessSteps />

      {/* 5–6. Industries + Pricing (unified gradient) */}
      <div style={{ background: "linear-gradient(to bottom, #000000 0%, #001233 40%, #0a2450 100%)" }}>
        <Industries />
        <PricingCards />
      </div>

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Portfolio Showcase */}
      <PortfolioShowcase />

      {/* 9. Why Choose ASP */}
      <WhyChoose />

      {/* 10. Consultation CTA */}
      <ConsultationCTA />

      {/* 11. Services Grid */}
      <ServicesGrid />
    </main>
  );
}
