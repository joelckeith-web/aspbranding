import { ScrollReveal } from "@/components/ui/ScrollReveal";
import testimonialData from "@/data/testimonials.json";

interface TestimonialAnchorProps {
  quote?: string;
  eyebrow?: string;
  variant?: "dark" | "light";
}

export function TestimonialAnchor({
  quote,
  eyebrow = "What operators say",
  variant = "dark",
}: TestimonialAnchorProps) {
  const resolved =
    quote ??
    testimonialData.find((t) => t.verified)?.quote ??
    "";
  if (!resolved) return null;

  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-16 md:py-20 lg:py-24 overflow-hidden ${
        isDark ? "bg-asp-black text-white" : "bg-white text-asp-blue"
      }`}
    >
      {isDark && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(76, 201, 240, 0.18), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(159, 76, 255, 0.14), transparent 70%)",
          }}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span
            className={`inline-block font-bold text-xs uppercase tracking-widest mb-6 ${
              isDark ? "text-asp-blue-light" : "text-asp-purple"
            }`}
          >
            {eyebrow}
          </span>
          <div
            aria-hidden
            className={`text-6xl md:text-7xl leading-none font-black mb-4 ${
              isDark ? "text-asp-blue-light/30" : "text-asp-purple/30"
            }`}
          >
            &ldquo;
          </div>
          <blockquote
            className={`font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 ${
              isDark ? "text-white" : "text-asp-blue"
            }`}
          >
            {resolved}
          </blockquote>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, j) => (
              <svg
                key={j}
                className="w-6 h-6 text-warning"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
