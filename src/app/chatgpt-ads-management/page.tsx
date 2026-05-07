import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "ChatGPT Ads Management | ASP",
  description:
    "Your customers stopped Googling. They started asking. ASP manages ChatGPT Ads end-to-end — account setup, creative, context targeting, conversion tracking, and reporting. First-mover pricing while CPCs are still cheap.",
  alternates: {
    canonical: "https://www.aspbranding.com/chatgpt-ads-management",
  },
  openGraph: {
    title: "ChatGPT Ads Management | ASP",
    description:
      "ChatGPT now serves ads inside conversations. We run them. End-to-end management — setup, creative, targeting, tracking, reporting.",
    url: "https://www.aspbranding.com/chatgpt-ads-management",
    type: "website",
  },
};

const WHAT_WE_DO = [
  {
    title: "Account Setup & Verification",
    tagline: "You own the account. We join as a team member.",
    body: "Every advertiser needs their own ChatGPT Ads account. We walk you through onboarding and verification, then join as a team member so ownership stays with you — not the agency.",
  },
  {
    title: "Creative Development",
    tagline: "16-character titles. 32-character descriptions.",
    body: "ChatGPT's ad format is tight: 16-character titles, 32-character descriptions, no logos as the primary image. Performance lives or dies in those characters. We write for the constraint.",
  },
  {
    title: "Context & Targeting Strategy",
    tagline: "Match campaigns to actual conversations.",
    body: "We identify the conversation topics your buyers are having — the questions, the comparisons, the late-stage research moments — and build campaigns that surface inside those exact prompts.",
  },
  {
    title: "Conversion Tracking",
    tagline: "Pixel + server-side Conversions API.",
    body: "Pixel and server-side Conversions API installation so you can see what's converting and what isn't. Events fire to your domain and live in your account, not ours.",
  },
  {
    title: "Bid & Pacing Management",
    tagline: "Keep budget aligned to goal.",
    body: "CPC bids run between $2.50 and $8 in early auctions. We keep pacing aligned to your goal — daily monitoring during the early-platform phase, weekly tuning once accounts stabilize.",
  },
  {
    title: "Monthly Performance Reporting",
    tagline: "What spent. What converted. What changes.",
    body: "Plain-language reporting tied to revenue, not vanity metrics. Every month: what was spent, what converted, what we're changing — and why.",
  },
];

const ELIGIBILITY = [
  {
    title: "Eligible",
    bullets: [
      "Local services (home services, professional services, trades)",
      "Education and training",
      "Lifestyle and household products",
      "Travel and experiences",
      "Software and digital products",
    ],
    positive: true,
  },
  {
    title: "Not eligible during beta",
    bullets: [
      "Healthcare and pharmaceutical",
      "Mental health services",
      "Legal services (heavily restricted)",
      "Financial services (approved advertisers only)",
      "Gambling, alcohol, tobacco, adult",
    ],
    positive: false,
  },
];

const WHY_MOVE_NOW = [
  {
    step: "01",
    title: "First-mover pricing",
    body: "CPCs run $2.50 to $8 today. That's higher than Google search, but it's also the cheapest these placements will ever be. Pricing climbs as more advertisers enter the auction.",
  },
  {
    step: "02",
    title: "Less competition for placements",
    body: "Ads serve to hundreds of millions of free-tier and Go-tier users in the US, Canada, Australia, and New Zealand. The category is wide open in most verticals.",
  },
  {
    step: "03",
    title: "Compounding learning",
    body: "Conversion patterns, creative formats, and context-hint strategies are still being mapped. The advertisers running campaigns now have the data the latecomers will be paying to figure out.",
  },
];

const WHAT_YOU_KEEP = [
  {
    title: "The ad account",
    body: "ASP joins as a team member. You keep the account if our engagement ever ends.",
  },
  {
    title: "The conversion data",
    body: "Pixel events fire to your domain and live in your account.",
  },
  {
    title: "The creative",
    body: "Everything we write and design transfers with you.",
  },
];

const FAQ = [
  {
    q: "How is this different from Google Ads?",
    a: "Different intent. Google catches buyers who already know what they're searching for. ChatGPT catches them earlier — mid-conversation, before they've narrowed to a brand or product.",
  },
  {
    q: "Will it cannibalize my Google or Meta budget?",
    a: "Generally no. Different audience moment, different decision stage. Most accounts run ChatGPT alongside existing channels rather than reallocating away from them.",
  },
  {
    q: "How fast do we see results?",
    a: "Click and CTR data inside the first week. Conversion data inside 30 days, assuming the pixel and server-side tracking are installed correctly and budget is steady.",
  },
  {
    q: "Can my team run this in-house?",
    a: "The platform is self-serve, so yes. The work is in writing creative that performs at 16 characters, choosing context hints that actually deliver impressions, and managing bids when auctions tighten. That's what you're paying us for.",
  },
  {
    q: "Is the data shared with OpenAI's training?",
    a: "No. Conversion events flow to your account. Conversation content is never shared with advertisers.",
  },
];

export default function ChatGPTAdsManagementPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="ChatGPT Ads Management"
        heading="Your customers stopped Googling.<br><span class='hero-text-gradient'>They started asking.</span>"
        headingClassName="font-black text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-[1.1] mb-6"
        subheading="ChatGPT now serves ads inside conversations. We run them."
        ctaText="Get a quote"
        ctaUrl="/contact?topic=chatgpt-ads"
        cta2Text="See pricing"
        cta2Url="/pricing"
        bgType="dark"
      />

      {/* Section 1 — The shift */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
              The shift
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
              One answer instead of ten blue links.
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
              Every week, more of your customers replace a Google search with a question to ChatGPT. They stop scrolling through ten blue links. They get one answer.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
              In May 2026, OpenAI opened that surface to advertisers. Sponsored placements now appear inside conversations &mdash; clearly labeled, separated from organic answers, and matched to the topic of the question being asked. It&apos;s the most direct line to a high-intent buyer we&apos;ve seen since the early days of paid search.
            </p>
            <p className="text-asp-purple text-base lg:text-lg font-semibold leading-relaxed">
              Most of your competitors aren&apos;t running ads on it yet. The ones who move first will compound that advantage every month they hold the placement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2 — What we do */}
      <section className="relative py-16 md:py-20 lg:py-24 2xl:py-32 bg-asp-black text-white overflow-hidden border-t border-white/5">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What we do
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                ChatGPT Ads, end-to-end.
              </h2>
              <p className="text-white/70 text-lg">
                You don&apos;t need a new internal hire or a new login. We handle every piece of the platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {WHAT_WE_DO.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 hover:border-asp-blue-light/60 transition-colors p-7 lg:p-8"
                >
                  <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-2">
                    {c.tagline}
                  </div>
                  <h3 className="font-black text-xl 2xl:text-2xl text-white mb-3">
                    {c.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3 — Investment */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
                Investment
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Pricing scales with media spend.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-[var(--radius-asp-2xl)] border-2 border-asp-blue-light/40 bg-asp-blue/[0.02] p-8 lg:p-10 mb-8 text-center">
              <div className="font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
                Recommended starting media spend
              </div>
              <div className="font-black text-4xl md:text-5xl 2xl:text-6xl text-asp-blue mb-3">
                $1,000 &ndash; $2,000<span className="text-2xl md:text-3xl font-bold text-gray-500"> /mo</span>
              </div>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
                Enough to gather meaningful data, run two to three creative variations, and avoid the under-funded campaigns that distort early performance reads.
              </p>
            </div>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center mb-2">
              Larger budgets unlock more aggressive testing and broader topic coverage.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center">
              Management fees are quoted based on spend level, scope, and reporting cadence. We&apos;ll work that out on the intro call.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4 — Who this works for right now */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(159, 76, 255, 0.15), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Who this works for right now
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                ChatGPT Ads is in beta.
              </h2>
              <p className="text-white/70 text-lg">
                OpenAI restricts certain categories during this phase. If your business sits in a restricted category, we&apos;ll tell you up front rather than take a contract that won&apos;t clear policy review.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {ELIGIBILITY.map((col) => (
                <div
                  key={col.title}
                  className={`rounded-[var(--radius-asp-2xl)] p-7 lg:p-9 border-2 ${
                    col.positive
                      ? "bg-white/[0.04] border-asp-blue-light/50"
                      : "bg-white/[0.02] border-white/10"
                  }`}
                >
                  <h3
                    className={`font-black text-2xl mb-5 ${
                      col.positive ? "text-asp-blue-light" : "text-white/50"
                    }`}
                  >
                    {col.title}
                  </h3>
                  <ul className="space-y-3">
                    {col.bullets.map((b, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 text-sm lg:text-base ${
                          col.positive ? "text-white/85" : "text-white/50"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`mt-1 flex-shrink-0 w-4 h-4 ${
                            col.positive ? "text-asp-blue-light" : "text-white/30"
                          }`}
                        >
                          {col.positive ? "✓" : "✕"}
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5 — Why move now */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Why move now
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Three reasons.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {WHY_MOVE_NOW.map((p) => (
                <div
                  key={p.step}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 lg:p-8 bg-white shadow-asp-sm"
                >
                  <div className="font-black text-4xl text-asp-purple mb-3 leading-none">
                    {p.step}
                  </div>
                  <h3 className="font-black text-xl text-asp-blue mb-2">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6 — What you keep */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(76, 201, 240, 0.15), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What you keep
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                You own every asset we build.
              </h2>
              <p className="text-white/70 text-lg">
                Same promise as everything else we do. No exit fees. No hostage situations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {WHAT_YOU_KEEP.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 p-7 lg:p-8"
                >
                  <h3 className="font-black text-xl 2xl:text-2xl text-asp-blue-light mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/75 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
                FAQ
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-3">
                Common questions.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="space-y-5">
              {FAQ.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[var(--radius-asp-lg)] border border-gray-200 p-6 bg-white shadow-asp-sm"
                >
                  <h3 className="font-black text-lg text-asp-blue mb-2">
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedPages
        items={[
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "ChatGPT ads layer onto the broader growth system — paid media wired to operations, follow-up, and attribution.",
          },
          {
            label: "Adjacent",
            href: "/ai-integration",
            title: "AI Integration",
            body: "Housecall Pro AI configuration: CSR AI, attribution, dispatch, follow-up. ChatGPT ad spend feeds booked-revenue data back into this stack.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            title: "Pricing & tiers",
            body: "ChatGPT Ads management is quoted based on spend, scope, and reporting cadence. Tier breakdown here.",
          },
        ]}
      />

      <TestimonialAnchor
        quote="I can't imagine using anyone else for marketing."
        eyebrow="What our clients say"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5">
              Ready to run ChatGPT Ads?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Tell us what you sell and where you sell it. We&apos;ll send back a campaign plan within two business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?topic=chatgpt-ads"
                className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
              >
                Get a quote
                <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center gap-2 border-2 border-asp-blue text-asp-blue font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
              >
                Run the Growth Diagnostic
              </Link>
            </div>
            <p className="text-gray-400 text-xs mt-6">
              ChatGPT Ads Manager is an OpenAI product. ASP is a verified advertiser. Spend is paid directly to OpenAI; client owns the account.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ConsultationCTA />
    </main>
  );
}
