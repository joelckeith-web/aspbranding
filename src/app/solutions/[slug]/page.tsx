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
  const svc = service as typeof service & {
    longDescription?: string;
    benefits?: string[];
    process?: { title: string; description: string }[];
    stats?: { value: string; label: string }[];
  };

  return (
    <main id="primary" className="site-main">
      {/* Hero with form */}
      <Hero
        eyebrow="Solutions"
        heading={service.name}
        subheading={service.description}
        bgType="image"
        imageUrl="/images/backgrounds/hero-solutions.avif"
        imagePosition="center center"
        showTrustLogos
        showForm
      />

      {/* Service Overview — full description */}
      <section className="py-12 md:py-16 lg:py-18 2xl:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-center">
            <ScrollReveal>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                {service.tagline}
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-6">
                What is {service.name}?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {svc.longDescription || service.description}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-asp-blue text-white font-bold py-3 px-6 rounded-[var(--radius-asp-md)] hover:bg-asp-blue-dark transition-all no-underline text-sm"
              >
                Get Started Today
              </Link>
            </ScrollReveal>

            {/* Stats */}
            {svc.stats && (
              <ScrollReveal animation="slide-left">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {svc.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-asp-gradient-hero rounded-[var(--radius-asp-xl)] p-6 text-center"
                    >
                      <p className="font-black text-3xl text-asp-blue-light mb-2">{stat.value}</p>
                      <p className="text-white/70 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      {svc.benefits && (
        <section className="py-12 md:py-16 lg:py-18 2xl:py-24 bg-gray-50">
          <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10 2xl:mb-14">
                <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                  What You Get
                </span>
                <h2 className="font-black text-3xl md:text-4xl text-asp-blue">
                  {service.name} Benefits
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="stagger">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {svc.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-sm p-6 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-asp-gradient-accent flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed pt-2">{benefit}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Process */}
      {svc.process && (
        <section className="py-12 md:py-16 lg:py-18 2xl:py-24 bg-asp-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(76,201,240,0.08)_0%,transparent_60%)] pointer-events-none" />
          <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-10 2xl:mb-14">
                <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                  How It Works
                </span>
                <h2 className="font-black text-3xl md:text-4xl text-white">
                  Our {service.name} Process
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="stagger">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {svc.process.map((step, i) => (
                  <div
                    key={step.title}
                    className="bg-white/[0.07] border border-white/10 rounded-[var(--radius-asp-xl)] p-8 relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-asp-gradient-accent flex items-center justify-center mb-5 shadow-asp-md">
                      <span className="font-black text-lg text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-black text-lg text-white mb-3">{step.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-18 2xl:py-24 bg-asp-blue text-white">
        <div className="max-w-[var(--spacing-content)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-white mb-6">
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-white/80 text-lg mb-6 lg:mb-8 2xl:mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our {service.name.toLowerCase()} services can help your business break through to the next revenue level.
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

      {/* Testimonials */}
      <Testimonials />

      {/* Related Services */}
      <section className="py-12 md:py-16 lg:py-18 2xl:py-24 bg-white">
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
