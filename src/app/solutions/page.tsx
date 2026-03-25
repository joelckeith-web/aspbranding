import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore ASP's digital marketing solutions — Local SEO, PPC Management, Social Media Marketing, Web Design, Branding, and Consulting for home service professionals and law firms.",
};

export default function SolutionsPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="Our Solutions"
        heading="Digital Marketing<br>Solutions That Deliver"
        subheading="Proven strategies designed for home service professionals and law firms. Every solution is built on our ASP Growth System™."
        ctaText="Get Your Free Strategy Session"
        ctaUrl="/contact"
        bgType="dark"
        showTrustLogos
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/solutions/${service.slug}`}
                  className="group bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-md p-8 lg:p-10 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250 no-underline"
                >
                  <h3 className="font-black text-xl text-asp-blue mb-2 group-hover:text-asp-blue-light transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-asp-blue-light text-sm font-bold mb-3">{service.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-asp-blue font-bold text-sm">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
