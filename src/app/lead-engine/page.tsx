import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LeadEngineForm } from "@/components/sections/LeadEngineForm";
import testimonials from "@/data/testimonials.json";

// Ad landing page for the 90-Day Lead Engine offer. NOT in the sitemap or
// nav; noindex until launch — traffic arrives from paid campaigns only.
//
// Layout follows verified application-funnel patterns (Hormozi acquisition.com
// + Brunson/ClickFunnels research, 2026-07-21): promise-left/form-right hero,
// results-first page order, problem-named pillar cards, price-of-THIS-offer
// disclosed in a "what does it cost" frame with the ascension ladder held for
// the day-90 call, qualification-framed CTAs repeated with risk-reversal
// microlines, arrows between process steps.

export const metadata: Metadata = {
  title: "The 90-Day Lead Engine — $10,000 in Pipeline, Guaranteed | ASP",
  description:
    "A complete lead engine for your trades business — new website, SEO, content, and tracking — for $997/month for 90 days. $10,000 in qualified pipeline or every ASP fee drops to $0.",
  robots: { index: false, follow: false },
};

// Proof first, labeled by trade — every visitor finds "someone like me."
const PROOF = [
  {
    label: "Mechanical / HVAC",
    stat: "$81,000",
    detail:
      "closed sales in the first 90 days on this exact system. Not pipeline — closed, invoiced work.",
  },
  {
    label: "Outdoor Living",
    stat: "$1M+",
    detail:
      "in pipeline inside the first 90 days. Today that same business closes $400K weeks and is pacing $2.5M+ this year.",
  },
  {
    label: "HVAC",
    stat: "$3M → $5M",
    detail:
      "broke through the $3M ceiling it had been stuck at, and set out to do $5M this year.",
  },
  {
    label: "Home Inspection",
    stat: "$3M → $5.3M",
    detail:
      "$3M in year one. $4.2M in year two. Tracking near $5.3M this year — three straight years of growth.",
  },
  {
    label: "Flooring",
    stat: "+$1M",
    detail:
      "on pace to add nearly $1M in new revenue this year off the back of search rankings.",
  },
];

// Pillar cards named for the problem each build kills — not deliverable types.
const STACK = [
  {
    problem: "Nobody finds you",
    title: "A website built to book jobs, not win design awards",
    body: "Built on the same structure our highest-performing client sites run on. Fast, conversion-first, and yours — you own the site and the code from day one.",
  },
  {
    problem: "Invisible on Google and AI",
    title: "SEO + AEO that puts you where homeowners look",
    body: "Rank when they search Google. Get recommended when they ask AI who to call. Both matter now, and we build for both.",
  },
  {
    problem: "Ghost-town social pages",
    title: "A content system that runs without you",
    body: "A month-by-month engine for your social channels — planned, written, and designed to your brand. You never think about it.",
  },
  {
    problem: "Competitors own the map pack",
    title: "Local SEO + a review engine that compounds",
    body: "Your Google Business Profile tuned to show up when the job is urgent, plus a system that turns happy customers into reviews on repeat.",
  },
  {
    problem: "Leads fall through the cracks",
    title: "Wired into the CRM you already run",
    body: "Jobber, Housecall Pro, Service Fusion — whatever you use, we connect it. Need one? We set you up on Housecall Pro at our partner discount.",
  },
  {
    problem: "No idea what's working",
    title: "Tracking that proves where every lead came from",
    body: "Custom form fields and source tracking on every lead. You'll know which channel sent every job — because our guarantee runs on proof.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Apply",
    body: "Six questions, two minutes. It's how we know if we can win for you before anyone gets on a call.",
  },
  {
    step: "2",
    title: "Discovery call",
    body: "Your market, your competition, your current lead flow — and a straight answer on whether this works for your business.",
  },
  {
    step: "3",
    title: "Qualify",
    body: "We only take businesses we're confident we can deliver the guarantee for. If it's not a fit, we say so plainly.",
  },
  {
    step: "4",
    title: "Build + launch",
    body: "Site, SEO, content, tracking — live and generating inside your first 90 days.",
  },
];

const FAQS = [
  {
    q: "What does the guarantee cover, exactly?",
    a: "If our system hasn't put $10,000 of qualified work into your pipeline by day 90, every ASP fee drops to $0 until it has. A qualified lead is a tracked, source-verified inquiry where the prospect stated a budget or asked about a service with pricing listed on your site. It's measured on pipeline generated — the leads and the dollar value behind them — not on which jobs you close. Your sales process stays yours.",
  },
  {
    q: "What does 'we work for free' mean? What's the catch?",
    a: "It means our fees go to $0 — all of them — until the $10,000 mark is hit. There's no catch hiding in ad spend, because we never collect ad spend. If you choose to run Google Ads, that money goes straight from your card to Google in your own account. We never touch it.",
  },
  {
    q: "Why do I need a CRM to qualify?",
    a: "Because the guarantee runs on proof. Your CRM is where we track every lead back to its source, so when we say the pipeline is there, the data shows it. If you don't have one, apply anyway — we'll get you set up on Housecall Pro at our partner discount as part of the build.",
  },
  {
    q: "Do I have to run ads?",
    a: "No. The $997 sprint is built on organic — your website, search rankings, AI visibility, content, and reviews. If you want Google Ads managed on top, the sprint is $1,497/month, and your ad budget stays in your own account. Ads speed things up; they aren't required.",
  },
  {
    q: "What happens after the 90 days?",
    a: "By day 90 you'll have three months of your own pipeline data — every lead, every source, every dollar. At your day-90 review we walk through what the system produced and what continuing looks like. Nothing renews without that conversation, and whatever you decide, the website, accounts, and data stay yours.",
  },
  {
    q: "What if I already have a website?",
    a: "We'll rebuild it on a structure that converts better — and you keep full ownership of the new one. If your current site performs, we'll tell you that too. The point is booked jobs, not busywork.",
  },
  {
    q: "Why is it only $997 a month?",
    a: "Because it's an introductory sprint, capped at a handful of businesses at a time. We're betting that after 90 days of watching your pipeline fill, you'll want to keep going. Most do. We win when you win — and we're willing to prove it first.",
  },
];

// Shared CTA block — same action everywhere, risk-reversal line under it.
function ApplyCTA({ dark = false }: { dark?: boolean }) {
  return (
    <div className="text-center mt-10">
      <a
        href="#apply"
        className="inline-block bg-gradient-to-r from-asp-blue-light to-asp-purple text-white font-bold py-4 px-10 rounded-[var(--radius-asp-lg)] hover:opacity-90 transition-opacity no-underline text-lg"
      >
        Apply now — see if you qualify &rarr;
      </a>
      <p className={`text-sm mt-3 ${dark ? "text-white/50" : "text-gray-500"}`}>
        Applying is free and commits you to nothing. Discovery call first — contract only if we
        both see the fit.
      </p>
    </div>
  );
}

function StepArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 rotate-90 lg:rotate-0" aria-hidden>
      <svg
        className="w-8 h-8 text-asp-purple"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
      </svg>
    </div>
  );
}

export default function LeadEnginePage() {
  const reviews = testimonials.filter((t) => t.firstName !== "Tray G.");

  return (
    <main id="primary" className="site-main">
      {/* Hero — compact, dark gradient, promise left / application right */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 25% 20%, rgba(76, 201, 240, 0.18), transparent 65%), radial-gradient(ellipse 55% 50% at 80% 80%, rgba(159, 76, 255, 0.16), transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                The 90-Day Lead Engine · For trades businesses
              </span>
              <h1 className="font-black text-4xl md:text-5xl 2xl:text-6xl leading-[1.08] mb-5">
                $10,000 of work in your pipeline in 90 days —{" "}
                <span className="hero-text-gradient">or every ASP fee drops to $0.</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                The same system that closed <strong className="text-white">$81,000 in 90 days</strong>{" "}
                for a mechanical contractor — a complete lead engine for $997/month. We&apos;re
                selecting a limited group of trades businesses to run it for. Apply to see if you
                qualify.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "New website, SEO/AEO, content, reviews — built and run for you",
                  "Every lead tracked to its source. The guarantee runs on proof.",
                  "You own the website, the accounts, and the data. Always.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/80 text-sm">
                    <svg
                      className="w-5 h-5 text-asp-blue-light shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-xs">
                First 5 businesses accepted get a full brand kit — free, theirs to keep.
              </p>
            </div>
            <div id="apply-hero">
              <LeadEngineForm />
            </div>
          </div>
        </div>
      </section>

      {/* Proof — first and biggest. Labeled by trade. */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Real operators. Real results.
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                The system already works. Here&apos;s what it did.
              </h2>
              <p className="text-gray-600 text-lg">
                Five trades businesses. Five different markets. One system — find the one that
                looks like yours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROOF.slice(0, 3).map((p) => (
                <div
                  key={p.label}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-8 text-center shadow-[0_12px_32px_-8px_rgba(15,23,42,0.18)]"
                >
                  <p className="text-asp-purple text-xs font-bold uppercase tracking-widest mb-4">
                    {p.label}
                  </p>
                  <p className="font-black text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-4">
                    {p.stat}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:max-w-[calc(66.666%+0.75rem)] lg:mx-auto">
              {PROOF.slice(3).map((p) => (
                <div
                  key={p.label}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-8 text-center shadow-[0_12px_32px_-8px_rgba(15,23,42,0.18)]"
                >
                  <p className="text-asp-purple text-xs font-bold uppercase tracking-widest mb-4">
                    {p.label}
                  </p>
                  <p className="font-black text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-4">
                    {p.stat}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ApplyCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* The math */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Do the math
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              $2,991 in. $10,000 guaranteed in your pipeline.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Three months at $997 is $2,991. We guarantee $10,000 of qualified work lands in your
              pipeline in that window — a 3.3x return on the fee before you close a single job. At a
              typical 30% margin, closing just a third of that pipeline covers your entire cost.
            </p>
            <p className="text-white/60 leading-relaxed">
              Most agencies sell you ads and report impressions. We build the growth system around
              your business and put a number on it. If it doesn&apos;t move a number, we don&apos;t
              ship it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What the sprint builds — problem-named pillars */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What the sprint builds
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Six problems that cost you jobs. We kill all six.
              </h2>
              <p className="text-gray-600 text-lg">
                One system where every piece feeds the next — and every piece belongs to you from
                day one.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STACK.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-7 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.18)]"
                >
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-asp-blue-light to-asp-purple rounded-full px-3 py-1 mb-4">
                    {c.problem}
                  </span>
                  <h3 className="font-black text-lg text-asp-blue mb-2 leading-snug">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 max-w-3xl mx-auto rounded-[var(--radius-asp-xl)] border-2 border-asp-purple/50 bg-asp-purple/[0.04] p-6 lg:p-8 text-center shadow-[0_12px_32px_-8px_rgba(159,76,255,0.25)]">
              <p className="font-black text-lg text-asp-blue mb-2">
                Founding bonus — first 5 businesses only
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The first 5 businesses accepted get a full brand kit built for them — logo system,
                colors, type, and brand guidelines. Yours to keep, whatever you do next.
              </p>
            </div>
            <ApplyCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* The guarantee */}
      <section id="guarantee" className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden scroll-mt-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(159, 76, 255, 0.2), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              The $10K Pipeline Guarantee
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              Hit $10,000 in qualified pipeline by day 90 — or every ASP fee drops to $0.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Not store credit. Not a discount on more services. Our fees go to zero and we keep
              working until your pipeline gets there. Your only remaining cost is any ad spend you
              choose to run — and that goes straight to Google from your own account. We never
              collect it, so there&apos;s nothing hidden in &quot;free.&quot;
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              Every lead is tracked to its source with the attribution system we build into your
              site. When we say the pipeline is there, you&apos;ll see the receipts — lead by lead,
              dollar by dollar.
            </p>
            <p className="font-bold text-white text-lg mb-2">
              And either way: you own the website. You own the accounts. You own the data.
            </p>
            <p className="text-white/60">Walk away any time with all of it.</p>
            <ApplyCTA dark />
          </ScrollReveal>
        </div>
      </section>

      {/* How it works — arrows between steps */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                How it works
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                From application to launch in four steps.
              </h2>
              <p className="text-gray-600 text-lg">
                We don&apos;t sell this to everyone. We take businesses we know we can win for —
                that&apos;s what makes the guarantee possible.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
              {STEPS.map((s, i) => (
                <div key={s.step} className="contents">
                  {i > 0 && <StepArrow />}
                  <div className="flex-1 rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 bg-white shadow-[0_16px_40px_-10px_rgba(15,23,42,0.25)]">
                    <div className="font-black text-3xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-3">
                      {s.step}
                    </div>
                    <h3 className="font-black text-lg text-asp-blue mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <ApplyCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* Review wall (trades-relevant only) */}
      <section className="py-14 md:py-16 lg:py-20 bg-asp-surface-light">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                In their words
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                What operators say about working with ASP.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
              {reviews.map((t) => (
                <blockquote
                  key={t.firstName}
                  className="break-inside-avoid rounded-[var(--radius-asp-xl)] bg-white border border-gray-200 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.15)] p-6"
                >
                  <div className="flex gap-0.5 mb-3" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{t.quote}</p>
                  <footer className="text-asp-blue font-bold text-sm">— {t.firstName}</footer>
                </blockquote>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What it costs — price of THIS offer, straight answer */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              What it costs
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              $997 a month for 90 days. That&apos;s the whole sprint.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Want Google Ads managed on top? <strong className="text-white">$1,497/month</strong> —
              and your ad budget stays in your own account, paid directly to Google. We never touch
              it.
            </p>
            <p className="text-white/60 leading-relaxed mb-2">
              Why so low? Because it&apos;s an introductory sprint, capped at a handful of
              businesses. After 90 days you&apos;ll have three months of your own pipeline data —
              and we&apos;ll walk through what continuing looks like at your day-90 review. Nothing
              renews without that conversation.
            </p>
            <ApplyCTA dark />
          </ScrollReveal>
        </div>
      </section>

      <FAQSection
        items={FAQS}
        eyebrow="Before you apply"
        heading="Straight answers to fair questions."
      />

      {/* Application — tight gap after FAQ */}
      <section id="apply" className="pt-4 pb-14 md:pb-16 lg:pb-20 bg-asp-surface-light scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Apply now
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4 leading-tight">
                Two minutes. Six questions. Zero obligation.
              </h2>
              <p className="text-gray-600 text-lg">
                We review every application by hand and only move forward where we see a real fit.
                Spots are limited — the first 5 accepted get the founding brand-kit bonus.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <LeadEngineForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
