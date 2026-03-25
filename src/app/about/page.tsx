import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { BUSINESS } from "@/lib/constants";
import teamData from "@/data/team.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ASP — a full-service digital marketing agency helping home service professionals and law firms break through revenue barriers with proven growth systems.",
};

const CORE_VALUES = [
  {
    title: "Integrity & Full Ownership",
    description:
      "You own everything — every ad account, every campaign, every piece of data. Period. We don't hold your digital assets hostage like other agencies. When you work with ASP, what we build is 100% yours.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Systematic Growth",
    description:
      "We don't just run ads — we install complete marketing systems designed to take your business to the next level. Our proven approach creates predictable, scalable growth foundations.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Real Results, Real Partnership",
    description:
      "We're not a fly-by-night agency that does one thing and disappears. We build long-term partnerships with our clients and deliver measurable outcomes you can see.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const WHY_CHOOSE = [
  { title: "Full-Service Agency", description: "We handle everything from digital marketing to branding, design, and business coaching — all under one roof.", icon: "building" },
  { title: "Data-Driven Strategies", description: "Every decision is backed by real-time data and analytics, ensuring maximum performance from every campaign.", icon: "chart" },
  { title: "National Reach, Personal Touch", description: "We serve clients nationwide while delivering the personalized attention of a boutique agency.", icon: "globe" },
  { title: "Experienced Team", description: "Senior strategists with extensive experience growing businesses across home services, legal, and professional industries.", icon: "users" },
];

export default function AboutPage() {
  return (
    <main id="primary" className="site-main">
      {/* Hero */}
      <Hero
        eyebrow="About Us"
        heading="About ASP"
        subheading="We help local service businesses and professional firms break through revenue barriers with strategic digital marketing systems that deliver measurable growth."
        ctaText="Get Your Free Strategy Session"
        ctaUrl="/contact"
        bgType="image"
        imageUrl="/images/backgrounds/team-hero.jpg"
        imagePosition="center 35%"
        showTrustLogos
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Who We Are
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-6">
                Our Mission &amp; Vision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At ASP, we believe in providing solutions, not just services. Our mission is to help businesses across the country reach their full potential through data-driven digital marketing strategies, impactful business coaching, and exceptional design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re a small startup or a growing enterprise, we tailor our approach to meet your unique needs and drive measurable results. We don&apos;t believe in one-size-fits-all — every strategy we build is custom-designed for your revenue stage, industry, and growth goals.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="slide-right">
              <img
                src="/images/backgrounds/team-at-work.jpg"
                alt="Behind the scenes at ASP — our team at work"
                className="w-full h-auto rounded-[var(--radius-asp-xl)] shadow-asp-lg object-cover"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-asp-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(76,201,240,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(159,76,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What We Stand For
              </span>
              <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-white">
                Our Core Values
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {CORE_VALUES.map((v) => (
                <div key={v.title} className="bg-white/[0.07] border border-white/10 rounded-[var(--radius-asp-xl)] p-8 lg:p-10 hover:bg-white/[0.1] transition-all duration-250">
                  <div className="w-14 h-14 rounded-full bg-asp-gradient-accent flex items-center justify-center mb-6 shadow-asp-md">
                    {v.icon}
                  </div>
                  <h3 className="font-black text-xl text-white mb-3">{v.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose ASP — 4-card */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What Makes Us Different
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue">
                Why Choose ASP
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {WHY_CHOOSE.map((item) => (
                <div key={item.title} className="bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-md p-8 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250">
                  <div className="w-12 h-12 rounded-[var(--radius-asp-lg)] bg-asp-blue/5 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-black text-lg text-asp-blue mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal animation="slide-left">
              <img
                src="/images/backgrounds/team-behind-scenes.jpg"
                alt="Behind the scenes at ASP"
                className="w-full h-auto rounded-[var(--radius-asp-xl)] shadow-asp-lg object-cover"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Our Story
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-6">
                How We Got Started
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded on the belief that every business deserves a clear path to growth, ASP began with a small team of marketing experts and has grown into a full-service agency serving clients nationwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we&apos;ve helped countless businesses increase their online visibility, optimize conversions, and scale sustainably. Our focus is always on building long-term partnerships and delivering results that matter.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3">
                Our Team
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue">
                Meet the People Behind the Strategy
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamData
                .sort((a, b) => a.order - b.order)
                .map((member) => (
                  <TeamMemberCard key={member.name} {...member} />
                ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Success CTA */}
      <section className="py-16 md:py-24 bg-asp-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url(/images/backgrounds/growth-system-bg.png)" }} />
        <div className="absolute inset-0 bg-asp-blue/80" />
        <div className="max-w-[var(--spacing-content)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Ready to Grow?
            </span>
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Let&apos;s Build Your Success Together
            </h2>
            <p className="text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Interested in working with a team that&apos;s dedicated to your growth? Whether you need a complete digital marketing overhaul, business coaching, or design solutions, ASP is here to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-block bg-white text-asp-blue font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all duration-150 no-underline text-base">
                Get Your Free Strategy Session
              </Link>
              <a href={`tel:${BUSINESS.phoneLink}`} className="inline-block border border-white/30 text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/5 hover:border-white/50 transition-all duration-150 no-underline text-base">
                {BUSINESS.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Band */}
      <CTABand
        heading="Ready to Work With Us?"
        subheading="Let's discuss how we can help your business break through its next revenue barrier."
        buttonText="Get Your Free Strategy Session"
      />
    </main>
  );
}
