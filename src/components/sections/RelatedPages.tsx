import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export type RelatedItem = {
  label: string;
  href: string;
  title: string;
  body: string;
};

interface RelatedPagesProps {
  eyebrow?: string;
  heading?: string;
  items: RelatedItem[];
  variant?: "dark" | "light";
}

export function RelatedPages({
  eyebrow = "Keep exploring",
  heading = "Related across the Growth System.",
  items,
  variant = "light",
}: RelatedPagesProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-16 md:py-20 overflow-hidden ${
        isDark ? "bg-asp-black text-white" : "bg-white"
      }`}
    >
      {isDark && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(76, 201, 240, 0.12), transparent 70%)",
          }}
        />
      )}

      <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span
              className={`inline-block font-bold text-xs uppercase tracking-widest mb-3 ${
                isDark ? "text-asp-blue-light" : "text-asp-purple"
              }`}
            >
              {eyebrow}
            </span>
            <h2
              className={`font-black text-2xl md:text-3xl 2xl:text-4xl ${
                isDark ? "text-white" : "text-asp-blue"
              }`}
            >
              {heading}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group rounded-[var(--radius-asp-xl)] p-6 lg:p-7 no-underline transition-all duration-200 flex flex-col ${
                  isDark
                    ? "bg-white/[0.04] border border-asp-blue-light/25 hover:border-asp-blue-light/60 hover:bg-white/[0.06]"
                    : "bg-white border border-gray-200 shadow-asp-sm hover:shadow-asp-md hover:-translate-y-0.5"
                }`}
              >
                <div
                  className={`font-bold text-[11px] uppercase tracking-widest mb-3 ${
                    isDark ? "text-asp-blue-light" : "text-asp-purple"
                  }`}
                >
                  {item.label}
                </div>
                <h3
                  className={`font-black text-lg lg:text-xl mb-2 ${
                    isDark ? "text-white" : "text-asp-blue"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    isDark ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {item.body}
                </p>
                <span
                  className={`mt-4 inline-flex items-center gap-2 font-bold text-sm transition-colors ${
                    isDark
                      ? "text-asp-blue-light group-hover:text-white"
                      : "text-asp-blue-light group-hover:text-asp-blue"
                  }`}
                >
                  Learn more
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
