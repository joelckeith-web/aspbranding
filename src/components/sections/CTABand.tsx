import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CTABandProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonUrl?: string;
  variant?: "dark" | "primary" | "accent";
}

export function CTABand({
  heading = "Ready to Grow Your Business?",
  subheading = "Let's build a strategy that delivers measurable results.",
  buttonText = "Schedule a Consultation",
  buttonUrl = "/contact",
  variant = "dark",
}: CTABandProps) {
  const bgClass =
    variant === "primary"
      ? "bg-asp-gradient-primary"
      : variant === "accent"
      ? "bg-asp-gradient-accent"
      : "bg-asp-black";

  return (
    <section className={`py-10 md:py-14 lg:py-16 2xl:py-28 text-white ${bgClass}`}>
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-black text-3xl md:text-4xl text-white mb-4">
            {heading}
          </h2>
          <p className="text-white/70 text-lg mb-6 lg:mb-8 2xl:mb-10 max-w-2xl mx-auto">
            {subheading}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={buttonUrl}
              className="inline-block bg-white text-asp-blue font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all duration-150 no-underline text-base"
            >
              {buttonText}
            </Link>
            <a
              href={`tel:${BUSINESS.phoneLink}`}
              className="inline-block border border-white/25 text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/5 hover:border-white/40 transition-all duration-150 no-underline text-base"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
