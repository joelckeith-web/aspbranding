import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "AI Integration | ASP",
  description:
    "Official Housecall Pro Affiliate Partner. We integrate the HCP AI stack — CSR AI, dispatch, attribution, reporting — into your home service business, from day one.",
};

const CAPABILITIES = [
  {
    title: "CSR AI",
    tagline: "Every call answered. 24/7.",
    body: "HCP's customer service AI picks up missed calls, answers FAQs, books appointments, and routes the rest to your team. We configure the voice, the script, the escalation rules, and the booking calendar so it sounds like your business — not a bot.",
  },
  {
    title: "Job Attribution",
    tagline: "Know which marketing dollar earned which job.",
    body: "Every lead tagged with its source channel, tracked from first touch to booked revenue inside HCP. Google Ads, LSA, Meta, GBP, organic, direct — all reported against cost-per-booked-job, not cost-per-click.",
  },
  {
    title: "Follow-Up Automation",
    tagline: "Quote sent → job booked. Without manual chase.",
    body: "Quote-to-close sequences, maintenance reminders, win-back, review requests. Built on the HCP event model so every trigger fires from real business activity, not a spreadsheet.",
  },
  {
    title: "Attribution into Ad Platforms",
    tagline: "Feed closed revenue back to Google and Meta.",
    body: "Offline conversion import. The ad platforms learn which clicks turned into booked jobs, which turned into real revenue — and start bidding against revenue, not leads.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Growth Audit",
    body: "We map your current stack — CRM, ad accounts, attribution, follow-up, reporting — and find where revenue is leaking. Usually it&apos;s in three specific places.",
  },
  {
    step: "02",
    title: "HCP Configuration",
    body: "If you&apos;re new to HCP, we set you up under the Affiliate Partner program (where new-account discounts apply). If you&apos;re already on HCP, we audit the config and fix what&apos;s misaligned.",
  },
  {
    step: "03",
    title: "AI Deployment",
    body: "CSR AI voice trained, attribution stack wired into your ad platforms, follow-up sequences mapped to your sales motion. One at a time — proven, then next.",
  },
  {
    step: "04",
    title: "Reporting & Iteration",
    body: "Monthly review against booked revenue. What the system delivered, what it missed, what changes next. Marketing and operations on the same dashboard.",
  },
];

const AI_VS_SLOP = [
  {
    title: "Real AI",
    bullets: [
      "Integrated with a real production CRM (HCP) used by thousands of home service operators daily.",
      "A proven, tested model — deployed and refined across active client books of business.",
      "Every automation is tied to a measurable outcome (booked job, attributed revenue, reduced response time).",
      "Configured by people who understand home service operations, not just tech demos.",
    ],
    positive: true,
  },
  {
    title: "AI Slop",
    bullets: [
      "ChatGPT writing generic blog posts at 1,500 words that never rank and never convert.",
      "Standalone AI tools that don\u2019t integrate with your CRM, leaving data in silos.",
      "Chatbots that frustrate buyers, miss context, and lose the lead.",
      "Agencies selling \u201cAI strategy\u201d without shipping a single working integration.",
    ],
    positive: false,
  },
];

export default function AIIntegrationPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="AI + Housecall Pro"
        heading="AI that works the job.<br><span class='hero-text-gradient'>Not the dashboard.</span>"
        subheading="We're an Official Housecall Pro Affiliate Partner. We onboard, configure, and integrate the HCP AI stack — CSR AI, attribution, dispatch, reporting — so it runs in your business from day one."
        ctaText="Book a growth audit"
        ctaUrl="/contact?topic=hcp"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/backgrounds/hero-trades-2.jpg"
        imagePosition="center center"
      />

      {/* HCP Affiliate badge strip */}
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
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3">
                  Official Affiliate Partner
                </span>
                <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                  Your bridge between the trades and the AI that runs them.
                </h2>
                <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-4">
                  Housecall Pro is the CRM of record for a huge share of the home service industry — and it&apos;s the platform where the AI features home service operators actually need are shipping fastest. Our partnership means we get early access, direct support, and the ability to configure it the way it was designed to work. This pillar is one of four inside <Link href="/growth-system" className="text-asp-blue-light hover:text-white font-semibold underline">the Growth System</Link>.
                </p>
                <p className="text-asp-blue-light text-base lg:text-lg font-semibold leading-relaxed">
                  Switching to HCP or setting up for the first time? Partner discounts available — on new HCP accounts only.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative flex items-center justify-center lg:justify-end">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30 blur-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(76, 201, 240, 0.35), transparent 70%)",
                  }}
                />
                <Image
                  src="/partners/hcp-logo-white.png"
                  alt="Housecall Pro"
                  width={600}
                  height={128}
                  className="relative w-full h-auto max-w-[420px] lg:max-w-[500px]"
                />
              </div>
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
                What we configure
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Four AI integrations. One operating system for your marketing.
              </h2>
              <p className="text-white/70 text-lg">
                Focused on what moves the revenue number for home service operators today &mdash; lead capture, attribution, and follow-up. Every capability runs inside Housecall Pro and plugs into the same reporting.
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
                Four steps. Proven, then next.
              </h2>
              <p className="text-gray-600 text-lg">
                We don&apos;t drop all six AI features on you on day one. Each one gets configured, validated, and tied to a revenue outcome before we move to the next.
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

      {/* Real AI vs AI Slop */}
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
                The distinction
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Real AI, not AI slop.
              </h2>
              <p className="text-white/70 text-lg">
                The AI wave brought out a lot of noise. Here&apos;s how we draw the line.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {AI_VS_SLOP.map((col) => (
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
                      col.positive ? "text-asp-blue-light" : "text-white/50 line-through"
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
                          {col.positive ? "✓" : "✗"}
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

      <RelatedPages
        items={[
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "AI Integration is one pillar inside the Growth System. See how marketing, operations, and follow-up integrate into a single stack.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            title: "Pricing & tiers",
            body: "HCP onboarding starts in Growth. Premier adds custom AI integrations beyond Housecall Pro. See what's included at each level.",
          },
          {
            label: "Proof",
            href: "/case-studies",
            title: "Case Studies",
            body: "Industry-anonymized results from operators running the full Growth System with HCP AI configured from day one.",
          },
        ]}
      />

      <TestimonialAnchor
        quote="I can't imagine using anyone else for marketing."
        eyebrow="What HCP operators say"
      />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5">
              Ready to talk Housecall Pro?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you&apos;re already on HCP and want the AI stack configured right, or you&apos;re considering switching — a growth audit is the fastest way to find the gap and size the upside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?topic=hcp"
                className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
              >
                Book a growth audit
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
              Official Housecall Pro Affiliate Partner · Partner discounts available on new HCP accounts only · Full terms shared during your growth audit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ConsultationCTA />
    </main>
  );
}
