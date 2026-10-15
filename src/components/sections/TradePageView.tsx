import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { SectionBreak } from "@/components/sections/SectionBreak";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, FaqPageSchema, ServiceSchema } from "@/components/schema/StructuredData";
import caseStudies from "@/data/case-studies.json";
import { type TradePage, tradePageUrl } from "@/lib/trade-pages";

const SITE = "https://www.aspbranding.com";

const KIND_LABEL: Record<TradePage["kind"], string> = {
  industry: "Industries",
  seo: "SEO",
  ppc: "PPC",
  partner: "Housecall Pro",
};

const SERVICE_TYPE: Record<TradePage["kind"], string> = {
  industry: "Marketing",
  seo: "Search Engine Optimization",
  ppc: "Pay-per-click advertising",
  partner: "Marketing",
};

export function tradePageMetadata(page: TradePage): Metadata {
  const url = `${SITE}${tradePageUrl(page)}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    // Review drafts stay reachable for Joel's review but out of the index.
    ...(page.status !== "published" && { robots: { index: false, follow: false } }),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "ASP",
      url,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ASP — Assess. Strategize. Perform." }],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@aspbranding",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export function TradePageView({ page }: { page: TradePage }) {
  const url = `${SITE}${tradePageUrl(page)}`;
  const crumbs = [{ name: "Home", url: `${SITE}/` }];
  if (page.kind === "industry") crumbs.push({ name: "Industries", url: `${SITE}/industries` });
  if (page.kind === "seo") crumbs.push({ name: "SEO", url: `${SITE}/seo` });
  if (page.kind === "ppc") crumbs.push({ name: "PPC", url: `${SITE}/ppc` });
  crumbs.push({ name: page.h1, url });

  const proof = page.caseStudySlug
    ? (caseStudies as { slug: string; industry: string; headline: string; timeframe?: string; results: { label: string; value: string }[] }[]).find(
        (c) => c.slug === page.caseStudySlug,
      )
    : undefined;

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={page.h1}
        description={page.metaDescription}
        url={url}
        serviceType={SERVICE_TYPE[page.kind]}
        audienceType={`${page.trade} businesses`}
      />
      <FaqPageSchema items={page.faqs} />

      <Hero
        eyebrow={KIND_LABEL[page.kind]}
        heading={page.h1}
        subheading={page.intro}
        ctaText="Book a call"
        ctaUrl="/contact"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/backgrounds/growth-system-bg.png"
        imagePosition="72% 62%"
        size="compact"
      />

      {page.sections.map((s, i) => (
        <section key={s.heading} className={`py-14 md:py-16 ${i % 2 === 0 ? "bg-asp-surface-light" : "bg-white"}`}>
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-5 text-lg text-black/70 leading-relaxed">
                  {p}
                </p>
              ))}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b.slice(0, 40)} className="flex gap-3 text-lg text-black/70 leading-relaxed">
                      <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-asp-blue" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </ScrollReveal>
          </div>
        </section>
      ))}

      {proof && (
        <section className="py-14 md:py-16 bg-asp-black text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <ScrollReveal>
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue-light">
                {proof.industry}
                {proof.timeframe ? ` · ${proof.timeframe}` : ""}
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight">{proof.headline}</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {proof.results.map((r) => (
                  <div key={r.label} className="rounded-[var(--radius-asp-xl)] bg-white/5 p-6">
                    <p className="font-black text-3xl text-asp-blue-light">{r.value}</p>
                    <p className="mt-2 text-white/70">{r.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/case-studies" className="mt-8 inline-block font-bold underline underline-offset-4">
                Read the full case study
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      <SectionBreak />

      <FAQAccordion faqs={page.faqs} heading="Frequently Asked Questions" columns={2} widthClassName="max-w-6xl" />

      {page.related && page.related.length > 0 && (
        <RelatedPages items={page.related} heading={`More for ${page.trade.toLowerCase()} businesses`} />
      )}

      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              See where your marketing stands
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Start with the 90-second Growth Diagnostic, or book a call and we&rsquo;ll walk through what
              your leads, rankings and booked jobs are telling you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Book a call
              </Link>
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                Run the Growth Diagnostic
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
