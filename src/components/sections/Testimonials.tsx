import { ScrollReveal } from "@/components/ui/ScrollReveal";
import testimonialData from "@/data/testimonials.json";

type Testimonial = { quote: string; verified: boolean };

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export function Testimonials({ testimonials = testimonialData }: TestimonialsProps) {
  const verified = testimonials.filter((t) => t.verified);
  if (verified.length === 0) return null;

  const gridCols =
    verified.length === 1
      ? "grid-cols-1 max-w-2xl mx-auto"
      : verified.length === 2
      ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
      : "grid-cols-1 md:grid-cols-3";

  return (
    <section className="py-12 md:py-14 lg:py-16 2xl:py-20 bg-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 lg:mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
              From the operators we work with
            </span>
            <h2 className="font-black text-2xl md:text-3xl 2xl:text-4xl text-asp-blue">
              Real operators. Real results.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className={`grid gap-6 lg:gap-8 ${gridCols}`}>
            {verified.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-[var(--radius-asp-2xl)] border border-gray-100 shadow-asp-sm p-6 lg:p-8 2xl:p-10 flex flex-col"
              >
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

                <blockquote className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
