import { ScrollReveal } from "@/components/ui/ScrollReveal";
import testimonialData from "@/data/testimonials.json";

interface TestimonialProps {
  testimonials?: typeof testimonialData;
}

export function Testimonials({ testimonials = testimonialData }: TestimonialProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Client Results
            </span>
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-asp-blue">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-[var(--radius-asp-2xl)] border border-gray-100 shadow-asp-sm p-8 lg:p-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-warning"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-asp-blue text-sm">{t.author}</p>
                  {(t.title || t.company) && (
                    <p className="text-gray-400 text-xs mt-1">
                      {[t.title, t.company].filter(Boolean).join(" — ")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
