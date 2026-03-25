import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import servicesData from "@/data/services.json";

export function ServicesGrid() {
  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-asp-blue mb-4">
              Explore More Solutions
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                href={`/solutions/${service.slug}`}
                className="group bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-sm p-8 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250 no-underline"
              >
                <h3 className="font-bold text-xl text-asp-blue mb-2 group-hover:text-asp-blue-light transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.tagline}
                </p>
                <span className="inline-flex items-center text-asp-blue font-bold text-sm">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-150"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center mt-12">
          <Link
            href="/solutions"
            className="inline-block bg-asp-blue text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-asp-blue-dark transition-all duration-150 no-underline"
          >
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
