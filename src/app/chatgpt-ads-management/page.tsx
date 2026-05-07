import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// NOTE: SCAFFOLD ONLY — copy is placeholder. Swap once ChatGPT Ads Manager
// research dump lands. Structure mirrors /ai-integration so it slots into
// the existing design system without component work.

export const metadata: Metadata = {
  title: "ChatGPT Ads Management | ASP",
  description:
    "Early-mover ChatGPT Ads Manager partner for home service operators. Campaign setup, audience structure, creative, and attribution — built into the same growth system that runs your Google and Meta spend.",
  alternates: {
    canonical: "https://www.aspbranding.com/chatgpt-ads-management",
  },
  openGraph: {
    title: "ChatGPT Ads Management | ASP",
    description:
      "Early-mover ChatGPT Ads Manager partner. Campaign setup, audience structure, creative, attribution.",
    url: "https://www.aspbranding.com/chatgpt-ads-management",
    type: "website",
  },
};

const CAPABILITIES = [
  {
    title: "Campaign Architecture",
    tagline: "Built for the ChatGPT surface, not retrofitted from Google.",
    body: "[PLACEHOLDER] Campaign structure, ad group logic, and bidding aligned to how prompts and conversational responses actually convert. Pending OpenAI's published spec.",
  },
  {
    title: "Audience & Targeting",
    tagline: "First-party audience strategy from day one.",
    body: "[PLACEHOLDER] Targeting setup, exclusion lists, and audience layering on the new ChatGPT Ads platform. Will be filled in once OpenAI publishes the targeting taxonomy.",
  },
  {
    title: "Creative & Prompt-Native Copy",
    tagline: "Copy that fits an answer, not an ad slot.",
    body: "[PLACEHOLDER] Ad creative written for AI-conversation context — a different muscle than search or social. Built in voice, tested against real prompts.",
  },
  {
    title: "Attribution & Reporting",
    tagline: "Booked-revenue reporting, not just clicks.",
    body: "[PLACEHOLDER] ChatGPT ad spend wired into the same attribution model that already runs your Google and Meta — reported against cost-per-booked-job inside Housecall Pro.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Account Setup & Verification",
    body: "[PLACEHOLDER] We get your business verified inside ChatGPT Ads Manager and configure the account against your existing brand and conversion infrastructure.",
  },
  {
    step: "02",
    title: "Strategy & Creative",
    body: "[PLACEHOLDER] Audience strategy, prompt-native creative, and offer architecture. Mapped to the same booked-revenue targets as the rest of the growth system.",
  },
  {
    step: "03",
    title: "Launch & Learn",
    body: "[PLACEHOLDER] Initial campaign launch with tight spend controls. Daily monitoring during the early-platform phase — this is brand-new ground and we treat it that way.",
  },
  {
    step: "04",
    title: "Scale & Integrate",
    body: "[PLACEHOLDER] Once unit economics prove out, we scale spend and feed conversion data back into the broader paid stack. ChatGPT becomes a reportable channel alongside Google and Meta — not a side experiment.",
  },
];

const EARLY_MOVER = [
  {
    title: "Why ASP, why now",
    bullets: [
      "[PLACEHOLDER] We signed up for ChatGPT Ads Manager on launch day. Tip-of-the-spear access matters most while inventory is cheap and competition is thin.",
      "[PLACEHOLDER] Same agency that runs your Google, Meta, and HCP integration — one team, one attribution model, one revenue number.",
      "[PLACEHOLDER] Conservative spend strategy in Phase 1: we treat new ad platforms like science experiments, not blank checks.",
      "[PLACEHOLDER] You own the ad account, the creative, and the data. No exit fees, no hostage situations.",
    ],
    positive: true,
  },
  {
    title: "Why not just wait",
    bullets: [
      "[PLACEHOLDER] CPCs are lowest before a platform is saturated. Late movers pay the premium that early movers established.",
      "[PLACEHOLDER] Algorithmic learning periods compound. Accounts that start now will out-perform identical accounts started a year later.",
      "[PLACEHOLDER] The brands that show up in ChatGPT answers next year are the ones training the system this year.",
      "[PLACEHOLDER] Sitting it out is a decision — and not a free one.",
    ],
    positive: false,
  },
];

const FAQ = [
  {
    q: "Is ChatGPT Ads Manager actually live?",
    a: "[PLACEHOLDER] Yes. OpenAI launched the self-service platform in [DATE]. Any business can sign up, pending verification. ASP is verified and onboarding the first cohort of clients now.",
  },
  {
    q: "What does this cost?",
    a: "[PLACEHOLDER] Management is priced inside Growth Accelerator and Premier Partnership tiers. Ad spend is separate and is paid directly to OpenAI on your own card — you own the account.",
  },
  {
    q: "Will this work for my industry?",
    a: "[PLACEHOLDER] We're prioritizing home service operators (HVAC, plumbing, electrical, roofing, restoration, home inspection) who already have a working Google or Meta program. ChatGPT ads layer onto that — they don't replace it.",
  },
  {
    q: "How does attribution work?",
    a: "[PLACEHOLDER] Same model we run for every other paid channel: every lead tagged with source, tracked from first touch to booked revenue inside Housecall Pro. No separate dashboard.",
  },
];

export default function ChatGPTAdsManagementPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="Early-Mover Paid Media"
        heading="ChatGPT Ads Management.<br><span class='hero-text-gradient'>From day one.</span>"
        subheading="ASP is verified inside ChatGPT Ads Manager. We're standing up the first cohort of home service operators on the platform while inventory is cheap and competition is thin. [PLACEHOLDER COPY — finalize after OpenAI spec lands.]"
        ctaText="Book a strategy call"
        ctaUrl="/contact?topic=chatgpt-ads"
        cta2Text="See pricing"
        cta2Url="/pricing"
        bgType="image"
        imageUrl="/images/backgrounds/hero-trades-2.jpg"
        imagePosition="center center"
      />

      {/* Why early-mover matters */}
      <section className="relative py-12 md:py-14 bg-asp-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-1/2 -bottom-1/2 left-[35%] w-[18vw] max-w-[260px] bg-white/[0.05]"
            style={{ transform: "rotate(12deg)" }}
          />
          <div
            className="absolute -top-1/2 -bottom-1/2 left-[58%] w-[12vw] max-w-[180px] bg-white/[0.03]"
            style={{ transform: "rotate(12deg)" }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 15% 50%, rgba(76, 201, 240, 0.2), transparent 70%), radial-gradient(ellipse 50% 60% at 90% 50%, rgba(76, 201, 240, 0.12), transparent 70%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3">
                Tip of the spear
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                A new ad platform opens once a decade. We&apos;re already in.
              </h2>
              <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-4">
                [PLACEHOLDER] Google AdWords launched in 2000. Meta Ads in 2007. TikTok Ads in 2019. ChatGPT Ads Manager launched [DATE 2026]. Every one of those platforms made its early advertisers disproportionately wealthy — and made everyone who waited pay the saturation tax. We&apos;re not waiting.
              </p>
              <p className="text-asp-blue-light text-base lg:text-lg font-semibold leading-relaxed">
                ASP signed up on launch day. Verification is in progress. The first client cohort is being scoped now.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-16 md:py-20 lg:py-24 2xl:py-32 bg-asp-black text-white overflow-hidden">
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
                What we manage
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Four pieces. One reportable channel.
              </h2>
              <p className="text-white/70 text-lg">
                [PLACEHOLDER] Campaign architecture, audience strategy, creative, and attribution — wired into the same growth system that already runs your Google, Meta, and HCP stack.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {CAPABILITIES.map((c) => (
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

      {/* Process */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                How we deploy
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Four steps. Conservative spend, real attribution.
              </h2>
              <p className="text-gray-600 text-lg">
                [PLACEHOLDER] We treat new ad platforms like science experiments — start small, validate, then scale. No blank checks against an unknown platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PROCESS.map((p) => (
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

      {/* Why ASP / Why not wait */}
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
                The decision
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Move now, or pay the saturation tax.
              </h2>
              <p className="text-white/70 text-lg">
                [PLACEHOLDER] Every major ad platform rewards the operators who showed up first. ChatGPT Ads Manager will be no different.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {EARLY_MOVER.map((col) => (
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
                          {col.positive ? "✓" : "—"}
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

      {/* FAQ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
                Common questions
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-3">
                FAQ
              </h2>
              <p className="text-gray-600 text-lg">
                [PLACEHOLDER] Replace with finalized FAQ once OpenAI spec is published.
              </p>
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
            body: "ChatGPT ads are a layer inside the broader Growth System — paid media wired to operations and follow-up.",
          },
          {
            label: "Adjacent",
            href: "/ai-integration",
            title: "AI Integration",
            body: "Housecall Pro AI configuration: CSR AI, attribution, dispatch, follow-up. ChatGPT ads feed booked revenue back into this stack.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            title: "Pricing & tiers",
            body: "ChatGPT Ads Management is included in Growth Accelerator and Premier. See the full breakdown.",
          },
        ]}
      />

      <TestimonialAnchor
        quote="I can't imagine using anyone else for marketing."
        eyebrow="What our clients say"
      />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5">
              Get on the platform before your competitors do.
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              [PLACEHOLDER] First-cohort spots are limited while we calibrate the playbook. Book a strategy call to see if ChatGPT Ads is the right fit for your business right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?topic=chatgpt-ads"
                className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
              >
                Book a strategy call
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
