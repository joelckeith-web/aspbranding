import { ScrollReveal } from "@/components/ui/ScrollReveal";

const VALUE_PROPS = [
  {
    title: "The ASP Growth System™",
    subtitle: "Proven System",
    description:
      "200+ successful client transformations using our proprietary growth methodology. No guesswork — just systematic strategies proven to break revenue barriers.",
    icon: (
      <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: "/solutions",
    linkText: "Explore Our System",
  },
  {
    title: "Complete Client Ownership",
    subtitle: "You Own Everything",
    description:
      "Every ad account, every campaign, every piece of data — it's all yours. No vendor lock-in, no hidden fees, full transparency into everything we do.",
    icon: (
      <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    link: "/about",
    linkText: "Our Promise",
  },
  {
    title: "Revenue Barrier Specialists",
    subtitle: "Revenue-Stage Experts",
    description:
      "Whether you're at $1M, $3M, or $5M — we've helped businesses at every stage break through to the next level with tailored strategies for your exact situation.",
    icon: (
      <svg className="w-6 h-6 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    link: "/solutions",
    linkText: "See Our Packages",
  },
];

export function ValueProps() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url(/images/backgrounds/value-props-bg.png)", backgroundSize: "cover" }}
      />
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {VALUE_PROPS.map((prop) => (
              <div
                key={prop.title}
                className="bg-white rounded-[var(--radius-asp-2xl)] border border-gray-100 shadow-asp-md p-8 lg:p-10 hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250"
              >
                <div className="w-12 h-12 rounded-[var(--radius-asp-lg)] bg-asp-blue/5 flex items-center justify-center mb-5">
                  {prop.icon}
                </div>
                <p className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-2">
                  {prop.subtitle}
                </p>
                <h3 className="font-black text-xl text-asp-blue mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {prop.description}
                </p>
                <a
                  href={prop.link}
                  className="inline-flex items-center text-asp-blue font-bold text-sm no-underline group"
                >
                  {prop.linkText}
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-150"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
