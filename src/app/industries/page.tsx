import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";
import industriesData from "@/data/industries.json";
import { getPublishedTradePages } from "@/lib/trade-pages";

const PAGE_URL = "https://www.aspbranding.com/industries";
const PAGE_TITLE = "Marketing for Home Service Industries";
const PAGE_DESCRIPTION =
  "Marketing built for the trades: HVAC, plumbing, roofing, electrical, pest control, landscaping and more. See how ASP runs marketing for your industry.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  // Indexable only once at least one industry hub is published.
  ...(getPublishedTradePages("industry").length === 0 && { robots: { index: false, follow: false } }),
};

export default function IndustriesPage() {
  const hubs = new Map(getPublishedTradePages("industry").map((p) => [p.trade, `/industries/${p.slug}`]));
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Industries", url: PAGE_URL },
        ]}
      />
      <Hero
        eyebrow="Industries"
        heading="Marketing for the trades"
        subheading="Each trade books work differently. Storm surges, emergency calls, seasonal swings and recurring service routes all need a different plan. Pick your industry."
        ctaText="Book a call"
        ctaUrl="/contact"
        bgType="image"
        imageUrl="/images/backgrounds/growth-system-bg.png"
        imagePosition="72% 62%"
        size="compact"
      />
      <section className="py-14 md:py-16 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal animation="stagger">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industriesData.map((ind) => {
                const href = hubs.get(ind.name);
                const body = (
                  <>
                    <h2 className="font-black text-xl text-asp-black">{ind.name}</h2>
                    <p className="mt-2 text-base leading-relaxed text-black/70">{ind.description}</p>
                    {href && <span className="mt-4 inline-block font-bold text-asp-blue">See {ind.name.toLowerCase()} marketing</span>}
                  </>
                );
                const cls = "block rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm";
                return href ? (
                  <Link key={ind.name} href={href} className={`${cls} transition hover:border-asp-blue`}>
                    {body}
                  </Link>
                ) : (
                  <div key={ind.name} className={cls}>
                    {body}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
