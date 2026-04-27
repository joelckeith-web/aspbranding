import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { GrowthSystem } from "@/components/sections/GrowthSystem";
import { Industries } from "@/components/sections/Industries";
import { ResultsBanner } from "@/components/sections/ResultsBanner";
import { HCPPartnership } from "@/components/sections/HCPPartnership";
import { PricingCards } from "@/components/sections/PricingCards";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { Newsletter } from "@/components/sections/Newsletter";
import { FAQSection } from "@/components/sections/FAQSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";

export default function HomePage() {
  return (
    <main id="primary" className="site-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.aspbranding.com/#webpage",
            url: "https://www.aspbranding.com/",
            name: "ASP — Assess. Strategize. Perform.",
            isPartOf: { "@id": "https://www.aspbranding.com/#website" },
            about: { "@id": "https://www.aspbranding.com/#organization" },
            inLanguage: "en-US",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", "[data-speakable]"],
            },
          }),
        }}
      />
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

      {/* 2. Client logos — WHITE strip */}
      <ClientLogos />

      {/* 3. Growth System — DARK navy + image */}
      <GrowthSystem />

      {/* 4. Testimonials — WHITE (break between Growth System and Industries) */}
      <Testimonials />

      {/* 5-6. Industries + Results — shared gradient backdrop (black → purple mid → black) */}
      <div className="relative bg-asp-black overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(159, 76, 255, 0.22), transparent 70%), radial-gradient(ellipse 60% 30% at 20% 45%, rgba(76, 201, 240, 0.12), transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <Industries />
          <ResultsBanner />
        </div>
      </div>

      {/* 7. Portfolio showcase — WHITE (break) */}
      <PortfolioShowcase />

      {/* 8. Pricing — BLACK gradient (moved up from HCP slot) */}
      <div className="bg-gradient-to-b from-asp-black via-[#001233] to-asp-black">
        <PricingCards />
      </div>

      {/* 9. Why ASP — BLACK with team image */}
      <WhyChoose />

      {/* 10. Newsletter — WHITE section with dark card */}
      <Newsletter />

      {/* 11. HCP Partnership — DARK angular split (moved from top) */}
      <HCPPartnership />

      {/* 12. FAQ — LIGHT */}
      <FAQSection />

      {/* 13. Anchor testimonial — dark, near-bottom prominence */}
      <TestimonialAnchor quote="A game-changer for my business." />

      {/* 14. Final CTA */}
      <ConsultationCTA />
    </main>
  );
}
