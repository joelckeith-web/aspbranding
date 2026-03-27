import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FEATURES = [
  {
    title: "Optimized for Search",
    description: "Built-in SEO foundations so customers find you on Google.",
    icon: (
      <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Beautiful, Custom Designs",
    description: "Unique designs that reflect your brand — not cookie-cutter templates.",
    icon: (
      <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "ADA-Compliant & Accessible",
    description: "WCAG-compliant so every visitor can use your site with ease.",
    icon: (
      <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Conversion-Focused",
    description: "Every page designed to turn visitors into leads and customers.",
    icon: (
      <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Secure Hosting & SSL",
    description: "Fast, secure hosting with SSL certificates and daily backups.",
    icon: (
      <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export function PortfolioShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-18 2xl:py-20 bg-gray-50">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 2xl:mb-14">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Our Work
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
              Websites Built to Perform
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 2xl:gap-16 items-center">
          <ScrollReveal animation="slide-right">
            <img
              src="/images/portfolio/viking-hvac-1.jpg"
              alt="Viking HVAC website design by ASP"
              className="w-full h-auto rounded-[var(--radius-asp-xl)] shadow-asp-lg"
              loading="lazy"
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-asp-md)] bg-asp-blue/10 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-asp-blue mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
