import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { PricingCards } from "@/components/sections/PricingCards";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CountUp } from "@/components/ui/CountUp";
import { BreadcrumbSchema, FaqPageSchema, ServiceSchema } from "@/components/schema/StructuredData";
import caseStudies from "@/data/case-studies.json";
import { type TradePage, tradePageUrl } from "@/lib/trade-pages";
import "./trade-motion.css";

const SITE = "https://www.aspbranding.com";

// Literal class names so Tailwind generates them.
const STAT_COLS: Record<number, string> = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2 max-w-3xl", 3: "sm:grid-cols-3" };
const STEP_COLS: Record<number, string> = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" };

const SERVICE_TYPE: Record<TradePage["kind"], string> = {
  industry: "Marketing",
  seo: "Search Engine Optimization",
  ppc: "Pay-per-click advertising",
  partner: "Marketing",
};

/** Renders [text](/internal-path) inside copy as a Link; everything else stays plain text. */
function InlineLinks({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
        return m ? (
          <Link key={i} href={m[2]} className="text-asp-blue underline underline-offset-4">
            {m[1]}
          </Link>
        ) : (
          part
        );
      })}
    </>
  );
}

const stripLinks = (text: string) => text.replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, "$1");

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

function SectionHeading({
  eyebrow,
  heading,
  intro,
  dark,
  motion,
  className = "max-w-3xl mb-10",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  dark?: boolean;
  motion?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className={`font-black uppercase tracking-wide text-sm ${dark ? "text-asp-blue-light" : "text-asp-blue"} ${motion ? "bk-eyebrow" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 font-black text-3xl md:text-4xl leading-tight ${dark ? "text-white" : "text-asp-black"}`}>{heading}</h2>
      {motion && <span className="bk-rule mt-5" aria-hidden />}
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-black/70"}`}>
          <InlineLinks text={intro} />
        </p>
      )}
    </div>
  );
}

/** Element Bank focus brackets: four corners close in on a photo. */
function Brackets() {
  return (
    <div className="bk-brackets absolute inset-0" aria-hidden>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export function TradePageView({ page }: { page: TradePage }) {
  const url = `${SITE}${tradePageUrl(page)}`;
  const crumbs = [{ name: "Home", url: `${SITE}/` }];
  if (page.kind === "industry") crumbs.push({ name: "Industries", url: `${SITE}/industries` });
  if (page.kind === "seo") crumbs.push({ name: "SEO", url: `${SITE}/seo` });
  if (page.kind === "ppc") crumbs.push({ name: "PPC", url: `${SITE}/ppc` });
  crumbs.push({ name: page.hero.h1, url });

  const proof = page.caseStudySlug
    ? (caseStudies as { slug: string; industry: string; headline: string; timeframe?: string; results: { label: string; value: string }[] }[]).find(
        (c) => c.slug === page.caseStudySlug,
      )
    : undefined;
  const faqs = page.faqs.map((f) => ({ ...f, answer: stripLinks(f.answer) }));
  // Pages with a `media` block get photos plus the Element Bank motion; the rest keep the plain layout.
  const media = page.media;
  const motion = Boolean(media);

  return (
    <div className={motion ? "bk" : undefined}>
      <BreadcrumbSchema items={crumbs} />
      <ServiceSchema
        name={page.hero.h1}
        description={page.metaDescription}
        url={url}
        serviceType={SERVICE_TYPE[page.kind]}
        audienceType={`${page.trade} businesses`}
      />
      <FaqPageSchema items={faqs} />

      <Hero
        eyebrow={page.hero.eyebrow}
        heading={page.hero.h1}
        subheading={stripLinks(page.hero.subhead)}
        ctaText="Book a call"
        ctaUrl="/contact"
        cta2Text="See pricing"
        cta2Url="#pricing"
        bgType="image"
        imageUrl={media?.hero?.src ?? "/images/backgrounds/growth-system-bg.png"}
        imagePosition={media?.hero?.position ?? "72% 62%"}
        size="compact"
      />

      {/* Proof points strip: three equal columns, each centred */}
      {page.hero.points.length > 0 && (
        <section className="bg-asp-black text-white">
          <ul className="mx-auto max-w-7xl px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
            {page.hero.points.map((pt) => (
              <li key={pt} className="flex items-center justify-center gap-3 px-4 py-3 text-center">
                <svg className="h-5 w-5 flex-none text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-bold leading-snug text-[15px] lg:whitespace-nowrap">{pt}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Why this trade is different */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {media?.why ? (
            <ScrollReveal>
              <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
                <SectionHeading eyebrow={page.trade} heading={page.why.heading} intro={page.why.intro} motion className="max-w-xl" />
                <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-asp-xl)] shadow-asp-sm">
                  <Image src={media.why.src} alt={media.why.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
                  <Brackets />
                  {media.why.chips && (
                    <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                      {media.why.chips.map((c) => (
                        <span key={c} className="bk-chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <SectionHeading eyebrow={page.trade} heading={page.why.heading} intro={page.why.intro} />
            </ScrollReveal>
          )}
          <ScrollReveal animation="stagger">
            <div className="grid gap-6 md:grid-cols-3">
              {page.why.cards.map((c) => (
                <div key={c.title} className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-7 shadow-asp-sm">
                  <h3 className="font-black text-xl text-asp-black">{c.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-black/70">
                    <InlineLinks text={c.body} />
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {media?.services ? (
            <ScrollReveal>
              <div className="mb-12 grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
                <div>
                  <SectionHeading eyebrow="What we run" heading={page.services.heading} intro={page.services.intro} motion className="max-w-xl" />
                  {media.services.chips && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {media.services.chips.map((c) => (
                        <span key={c} className="bk-chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="bk-browser">
                  <div className="bk-browser-bar" aria-hidden>
                    <i />
                    <i />
                    <i />
                    <b />
                  </div>
                  <Image
                    src={media.services.src}
                    alt={media.services.alt}
                    width={1170}
                    height={872}
                    sizes="(min-width: 1024px) 620px, 100vw"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <SectionHeading eyebrow="What we run" heading={page.services.heading} intro={page.services.intro} />
            </ScrollReveal>
          )}
          <ScrollReveal animation="stagger">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.services.cards.map((c) => {
                const body = (
                  <>
                    <h3 className="font-black text-xl text-asp-black">{c.title}</h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-black/70">
                      <InlineLinks text={c.body} />
                    </p>
                    {c.href && <span className="mt-5 font-bold text-asp-blue">Learn more →</span>}
                  </>
                );
                const cls = "flex flex-col rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 transition";
                return c.href ? (
                  <Link key={c.title} href={c.href} className={`${cls} hover:border-asp-blue hover:shadow-asp-sm`}>
                    {body}
                  </Link>
                ) : (
                  <div key={c.title} className={cls}>
                    {body}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stat strip */}
      {page.stats && page.stats.length > 0 && (
        <section className={`relative overflow-hidden bg-asp-surface-navy text-white ${motion ? "py-20" : "py-14"}`}>
          {motion && (
            <div className="bk-ground" aria-hidden>
              <div className="bk-grid" />
              <div className="bk-glow bk-spot" />
              <div className="bk-vignette" />
            </div>
          )}
          <div className={`relative mx-auto max-w-6xl px-6 lg:px-8 grid gap-8 text-center ${STAT_COLS[page.stats.length] ?? "sm:grid-cols-3"}`}>
            {page.stats.map((s) => (
              <div key={s.label}>
                <p className="font-black text-4xl md:text-5xl text-asp-blue-light">{motion ? <CountUp value={s.value} /> : s.value}</p>
                <p className="mt-2 font-bold">{s.label}</p>
                <p className="mt-1 text-xs text-white/50">Source: {s.source}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="How it works" heading={page.process.heading} motion={motion} />
          </ScrollReveal>
          <ScrollReveal animation="stagger" className="relative">
            <div className={`relative grid gap-6 ${STEP_COLS[Math.min(page.process.steps.length, 4)] ?? "md:grid-cols-3"}`}>
              {page.process.steps.map((s, i) => (
                <div key={s.title} className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm">
                  {motion ? (
                    <span className="bk-step">{String(i + 1).padStart(2, "0")}</span>
                  ) : (
                    <span className="font-black text-3xl text-asp-blue-light">{String(i + 1).padStart(2, "0")}</span>
                  )}
                  <h3 className="mt-3 font-black text-lg text-asp-black">{s.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-black/70">
                    <InlineLinks text={s.body} />
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {proof && (
        <section className="py-14 md:py-16 bg-asp-black text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <ScrollReveal className={media?.caseStudy ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]" : ""}>
              <div>
                <p className={`font-black uppercase tracking-wide text-sm text-asp-blue-light ${motion ? "bk-eyebrow" : ""}`}>
                  Case study · {proof.industry}
                  {proof.timeframe ? ` · ${proof.timeframe}` : ""}
                </p>
                <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight">{proof.headline}</h2>
                <div className={`mt-8 grid gap-6 sm:grid-cols-2 ${media?.caseStudy ? "" : "lg:grid-cols-3"}`}>
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
              </div>
              {media?.caseStudy && (
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-asp-xl)]">
                  <Image src={media.caseStudy.src} alt={media.caseStudy.alt} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
                  <Brackets />
                </div>
              )}
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Package rate card (whole packages only) */}
      <div className="bg-asp-black">
        <PricingCards packagesOnly eyebrow="Pricing" heading={page.pricing.heading} subheading={stripLinks(page.pricing.subhead)} />
      </div>

      <FAQAccordion faqs={faqs} heading="Frequently Asked Questions" columns={2} widthClassName="max-w-6xl" />

      {page.related && page.related.length > 0 && (
        <RelatedPages items={page.related} heading={`More for ${page.trade} Businesses`} />
      )}

      <section className={`relative overflow-hidden ${motion ? "py-16 md:py-24 bg-asp-surface-navy" : "py-14 md:py-16 bg-white"}`}>
        {motion && (
          <div className="bk-ground" aria-hidden>
            <div className="bk-glow bk-drift1" />
            <div className="bk-glow bk-drift2" />
          </div>
        )}
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className={`font-black text-3xl md:text-4xl leading-tight ${motion ? "text-white" : "text-asp-black"}`}>{page.cta.heading}</h2>
            {motion && <span className="bk-rule mx-auto mt-5" style={{ transformOrigin: "center" }} aria-hidden />}
            <p className={`mt-5 text-lg leading-relaxed ${motion ? "text-white/75" : "text-black/70"}`}>
              <InlineLinks text={page.cta.body} />
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-full px-8 py-4 font-bold transition ${
                  motion ? "bk-sweep bg-asp-blue-light text-asp-black hover:bg-white" : "bg-asp-blue text-white hover:bg-asp-blue/90"
                }`}
              >
                Book a call
              </Link>
              <Link
                href="/diagnostic"
                className={`inline-flex items-center justify-center rounded-full border-2 px-8 py-4 font-bold transition ${
                  motion ? "border-white text-white hover:bg-white hover:text-asp-black" : "border-asp-black text-asp-black hover:bg-asp-black hover:text-white"
                }`}
              >
                Run the Growth Diagnostic
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
