import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog — The Sauce",
  description: "Learn the secret sauce of marketing. Tips, strategies, and insights from the ASP team.",
};

export default function BlogPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="The Sauce"
        heading="Learn the Secret Sauce<br>of Marketing"
        subheading="Tips, strategies, and insights from the ASP team to help you grow your business."
        bgType="dark"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-asp-blue/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="font-black text-2xl text-asp-blue mb-4">
                Blog Coming Soon
              </h2>
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                We&apos;re cooking up some great content. Check back soon for marketing tips, case studies, and growth strategies.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
