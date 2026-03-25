import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BUSINESS } from "@/lib/constants";
import servicesData from "@/data/services.json";

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="Solutions"
        heading={service.name}
        subheading={service.description}
        ctaText="Get Your Free Strategy Session"
        ctaUrl="/contact"
        bgType="dark"
        showTrustLogos
      />

      {/* Trust bar */}
      <section className="bg-asp-surface-light border-y border-gray-200 py-6">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8">
          {["google-partner-light.png", "meta-business-partner.webp", "nahb-light.png"].map((badge) => (
            <img key={badge} src={`/images/badges/${badge}`} alt="" className="h-12 w-auto object-contain opacity-60" loading="lazy" />
          ))}
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[var(--spacing-content)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                {service.tagline}
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-6">
                What is {service.name}?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-asp-blue text-white">
        <div className="max-w-[var(--spacing-content)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-white mb-6">
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our {service.name.toLowerCase()} services can help your business grow.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-block bg-white text-asp-blue font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all no-underline">
                Get Your Free Strategy Session
              </Link>
              <a href={`tel:${BUSINESS.phoneLink}`} className="inline-block border border-white/30 text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/5 transition-all no-underline">
                {BUSINESS.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Testimonials />

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue">
                Explore More Solutions
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="group bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-sm p-8 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250 no-underline"
                >
                  <h3 className="font-bold text-xl text-asp-blue mb-2 group-hover:text-asp-blue-light transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.tagline}</p>
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
