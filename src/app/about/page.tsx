import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { BUSINESS } from "@/lib/constants";
import teamData from "@/data/team.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ASP — Who We Are & How We Work",
  description:
    "Learn about ASP — a full-service digital marketing agency helping home service professionals and law firms break through revenue barriers with proven growth systems.",
};

const CORE_VALUES = [
  {
    title: "Integrity & Full Ownership",
    description:
      "You own everything — every ad account, every campaign, every piece of data. Period. We don't hold your digital assets hostage like other agencies. When you work with ASP, what we build is 100% yours. That's what makes us fundamentally different.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Systematic Growth",
    description:
      "We don't just run ads — we install complete marketing systems designed to take your business to the next level. Our proven approach creates predictable, scalable growth foundations that continue working for you long-term, not one-off campaigns that vanish.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Real Results, Real Partnership",
    description:
      "We're not a fly-by-night agency that does one thing and disappears. We build long-term partnerships with our clients and deliver measurable outcomes you can see. Complete transparency, no hidden fees, and your success is the only metric that matters to us.",
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
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.aspbranding.com/" }, { name: "About", url: "https://www.aspbranding.com/about" }]} />
      {/* Hero */}
      <Hero
        eyebrow="About Us"
        heading="About ASP"
        subheading="We help local service businesses and professional firms break through revenue barriers with strategic digital marketing systems that deliver measurable growth."
        ctaText="Get Your Free Strategy Session"
        ctaUrl="/contact"
        bgType="image"
        imageUrl="/images/backgrounds/team-hero.jpg"
        imagePosition="center center"
        showTrustLogos
      />

      {/* Mission & Vision */}
      <section className="py-10 md:py-12 lg:py-14 2xl:py-24">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-center">
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
      <section className="py-10 md:py-12 lg:py-14 2xl:py-24 bg-asp-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(76,201,240,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(159,76,255,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10 2xl:mb-14">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What We Stand For
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-white">
                Our Core Values
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {CORE_VALUES.map((v) => (
                <div key={v.title} className="bg-white/[0.07] border border-white/10 rounded-[var(--radius-asp-xl)] p-6 lg:p-8 2xl:p-10 hover:bg-white/[0.1] transition-all duration-250">
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
      <section className="py-10 md:py-12 lg:py-14 2xl:py-24 bg-gray-50">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 2xl:mb-16">
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
              {/* Full-Service Agency */}
              <div className="bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-md p-8 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250">
                <div className="w-12 h-12 rounded-[var(--radius-asp-lg)] bg-asp-blue/5 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <h3 className="font-black text-lg text-asp-blue mb-2">Full-Service Agency</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We handle everything from digital marketing to branding, design, and business coaching — all under one roof.</p>
              </div>

              {/* Data-Driven Strategies */}
              <div className="bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-md p-8 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250">
                <div className="w-12 h-12 rounded-[var(--radius-asp-lg)] bg-asp-blue/5 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="font-black text-lg text-asp-blue mb-2">Data-Driven Strategies</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Every decision is backed by real-time data and analytics, ensuring maximum performance from every campaign.</p>
              </div>

              {/* National Reach */}
              <div className="bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-md p-8 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250">
                <div className="w-12 h-12 rounded-[var(--radius-asp-lg)] bg-asp-blue/5 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="font-black text-lg text-asp-blue mb-2">National Reach, Personal Touch</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We serve clients nationwide while delivering the personalized attention of a boutique agency that knows your business.</p>
              </div>

              {/* Experienced Team */}
              <div className="bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-md p-8 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250">
                <div className="w-12 h-12 rounded-[var(--radius-asp-lg)] bg-asp-blue/5 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="font-black text-lg text-asp-blue mb-2">Experienced Team</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Senior strategists with extensive experience growing businesses across home services, legal, and professional industries.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 md:py-12 lg:py-14 2xl:py-24">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-center">
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
      <section className="py-10 md:py-12 lg:py-14 2xl:py-24 bg-gray-50">
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
      <section className="py-10 md:py-12 lg:py-14 2xl:py-24 bg-asp-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url(/images/backgrounds/growth-system-bg.png)" }} />
        <div className="absolute inset-0 bg-asp-blue/80" />
        <div className="max-w-[var(--spacing-content)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Ready to Grow?
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-white mb-6">
              Let&apos;s Build Your Success Together
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 lg:mb-8 2xl:mb-10 max-w-2xl mx-auto">
              Interested in working with a team that&apos;s dedicated to your growth? Whether you need a complete digital marketing overhaul, business coaching, or design solutions, ASP is here to help. Reach out today to see how we can drive success for your business.
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
