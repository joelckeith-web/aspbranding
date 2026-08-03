import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LeadEngineForm } from "@/components/sections/LeadEngineForm";
import testimonials from "@/data/testimonials.json";

// Ad landing page for the 90-Day Install offer. NOT in the sitemap or nav;
// noindex until launch — traffic arrives from paid campaigns only.
//
// v5 rewrite (2026-08-03). The $997 sprint and the $10K pipeline guarantee are
// GONE. The offer is now $2,997/mo (or $3,850 with paid ads managed), a 90-day
// initial term, and a 30-Day Clarity Guarantee measured on attribution being
// live — the one promise entirely inside ASP's control. Pipeline numbers are
// proof, never promise.
//
// Layout still follows the verified application-funnel patterns (Hormozi
// acquisition.com + Brunson/ClickFunnels research): promise-left/form-right
// hero, results-first page order, problem-named pillar cards, arrows between
// process steps, qualification-framed CTAs with risk-reversal microlines.

export const metadata: Metadata = {
  title: "The 90-Day Install — Your Marketing System, Built and Handed To You",
  description:
    "We build your trades business a complete marketing system — website, SEO, CRM integration, lead tracking — then teach you to run it. $2,997/month. See where every new lead came from in 30 days or your first month is refunded.",
  robots: { index: false, follow: false },
};

// Proof first, labeled by trade — every visitor finds "someone like me."
// Industry only, never client names. Standing rule, applies to ads too.
const PROOF = [
  {
    label: "HVAC",
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
    label: "HVAC · Residential",
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
    body: "Rank when they search Google. Get recommended when they ask an AI tool who to call. Both matter now, and we build for both.",
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
    body: "Jobber, Housecall Pro, Service Fusion — whatever you use, we connect it, then build the speed-to-lead workflow so no call sits waiting.",
  },
  {
    problem: "No idea what's working",
    title: "Tracking that proves where every new lead came from",
    body: "Custom form fields and source tracking on every new lead, feeding one dashboard. This is the piece the guarantee runs on.",
  },
];

// Comparisons stay factual and name no competitor. The category is the
// argument; heat toward other agencies is off-voice.
const VS_AGENCY = [
  { them: "You get leads and a monthly report.", us: "You get leads and the system making them." },
  { them: "The website lives on their platform.", us: "The website is yours. Code, domain, hosting." },
  { them: "Ad accounts sit in their name.", us: "Every account in your name from day one." },
  { them: "Lead sources you have to take on faith.", us: "Every new lead traced to its source." },
  { them: "Leaving means starting over.", us: "Leaving means taking a running system with you." },
  { them: "Training isn't part of the service.", us: "A monthly review and a training library." },
  { them: "Six to twelve month term.", us: "Ninety days, then cancel any time." },
];

const VS_COACHING = [
  { them: "$1,000–$3,000 a month, plus travel.", us: "$2,997 a month. No travel." },
  { them: "You get a playbook and a dashboard.", us: "You get a website, SEO, CRM, and tracking." },
  { them: "The building happens after hours.", us: "We do the building. You run it after." },
  { them: "Marketing execution is on you.", us: "Marketing execution is the service." },
  { them: "Results ride on your implementation.", us: "A 30-day guarantee in writing." },
  { them: "You implement the playbook yourself.", us: "The system runs before we teach it." },
];

const STEPS = [
  {
    step: "1",
    title: "Apply",
    body: "Seven questions, two minutes. It's how we know if we can win for you before anyone gets on a call.",
  },
  {
    step: "2",
    title: "Discovery call",
    body: "Your market, your competition, your current lead flow — and a straight answer on whether this works for your business.",
  },
  {
    step: "3",
    title: "Qualify",
    body: "We only take businesses we're confident we can deliver for. If it's not a fit, we say so plainly.",
  },
  {
    step: "4",
    title: "Build + launch",
    body: "Site, SEO, content, CRM, tracking — installed and running inside your first 90 days.",
  },
];

const FAQS = [
  {
    q: "What does the guarantee cover, exactly?",
    a: "Connect your CRM, give us access, answer the setup questions, and show up to the kickoff call. That's your part. Within 30 days, every new lead that comes in gets traced back to its source — which channel, which campaign, which page, and what it turned into. If you've done your part and you still can't see it, we refund your first month, release you from the rest of the 90 days, and you keep everything we built up to that point. The guarantee covers new leads generated after your system goes live, not contacts already sitting in your CRM.",
  },
  {
    q: "Why do you ask for 90 days?",
    a: "Because you cannot build a website, rank it, connect a CRM, and prove where new leads come from in three weeks. Ninety days is the honest minimum to install a system and have it produce something worth reading. After that you can cancel any time. If we miss the 30-day guarantee, you're out of the term early and you still keep everything.",
  },
  {
    q: "What happens after the 90 days?",
    a: "Your call, entirely. Cancel and you keep every asset — the website and its code, your accounts, your content, your data, transferred at no charge. Or stay, and we lock your rate for the next 12 months with no increases. Nothing renews by surprise; we walk through it together at your day-90 review.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. The code, the domain, and the hosting account are in your name from day one. If you leave, it comes with you and it keeps working. There are no exit fees and nothing is held back. None of it was ever ours.",
  },
  {
    q: "Is ad spend included?",
    a: "No, and we never touch it. If you run ads, that money goes directly from your card to Google or Meta inside your own accounts. We never collect, hold, or mark up ad spend, so there is nothing hidden inside what we charge you. What makes sense to budget for your market is part of the discovery call.",
  },
  {
    q: "Do I have to run ads?",
    a: "No. The $2,997 install is built on what you own — your website, search rankings, AI visibility, content, reviews, and the tracking underneath all of it. If you want paid ads managed on top, that tier is $3,850 a month and covers Google Local Services Ads, Google Ads, and Meta. Ads speed things up. They are not required.",
  },
  {
    q: "Why do I need a CRM?",
    a: "Because the guarantee runs on proof. Your CRM is where we trace every new lead back to its source, so when we show you where your work came from, the data is standing behind it. If you don't have one, apply anyway — we'll get you set up on Housecall Pro at our partner discount as part of the install.",
  },
  {
    q: "What if I already have a website?",
    a: "We'll rebuild it on a structure that converts better, and you keep full ownership of the new one. If your current site is performing, we'll tell you that too. The point is booked jobs, not busywork.",
  },
  {
    q: "How is this different from a coaching program?",
    a: "Coaching hands you a playbook and wishes you luck. The work still lands on you, after hours, on top of running your business. We build the system first — the site, the tracking, the CRM connection, all of it — and then teach you how it runs. You get the same understanding a coaching program promises, except the thing already exists when the teaching starts.",
  },
  {
    q: "What do you actually need from me?",
    a: "Access to your accounts, honest answers to the setup questions, and one hour a month for the review call. That's the whole ask. The install is our job.",
  },
];

// Shared CTA block — same action everywhere, risk-reversal line under it.
function ApplyCTA({ dark = false, label = "Apply now" }: { dark?: boolean; label?: string }) {
  return (
    <div className="text-center mt-10">
      <a
        href="#apply"
        className="inline-block bg-asp-purple text-white font-black tracking-tight py-4 px-12 rounded-[var(--radius-asp-lg)] no-underline text-lg [text-shadow:0_2px_4px_rgba(0,0,0,0.45)] shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] hover:bg-[#8A34F0] transition-colors"
      >
        {label} &rarr;
      </a>
      <p className={`text-sm mt-3 ${dark ? "text-white/50" : "text-gray-500"}`}>
        Free to apply. Discovery call before any contract.
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

// Two-column "them vs us" table. Deliberately names no competitor — the
// category is the comparison, not any individual company.
function CompareTable({
  rows,
  themLabel,
}: {
  rows: { them: string; us: string }[];
  themLabel: string;
}) {
  return (
    <div className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white overflow-hidden shadow-[0_12px_32px_-8px_rgba(15,23,42,0.18)]">
      <div className="grid grid-cols-2 bg-asp-black text-white">
        <div className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-white/60">
          {themLabel}
        </div>
        <div className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-asp-blue-light border-l border-white/10">
          ASP
        </div>
      </div>
      {rows.map((r) => (
        <div key={r.us} className="grid grid-cols-2 border-t border-gray-200">
          <div className="px-5 py-4 text-gray-500 text-sm leading-relaxed">{r.them}</div>
          <div className="px-5 py-4 text-asp-blue text-sm leading-relaxed font-semibold border-l border-gray-200 bg-asp-surface-light/40">
            {r.us}
          </div>
        </div>
      ))}
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
                For trades businesses
              </span>
              <h1 className="font-black text-4xl md:text-5xl 2xl:text-6xl leading-[1.08] mb-5">
                We build your marketing system.{" "}
                <span className="hero-text-gradient">Then we teach you to run it.</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Website, SEO, CRM, and lead tracking — installed for your business and put in your
                name. The same system closed{" "}
                <strong className="text-white">$81,000 in 90 days</strong> for an HVAC company.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Every new lead traced to its source in 30 days, or month one is refunded",
                  "Website, SEO, content, reviews, CRM, tracking — built and run for you",
                  "You own the site, the accounts, and the data",
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
                Ten businesses at a time. Setup normally runs $7,500, waived for all ten.
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
            <div className="text-center mb-12 max-w-4xl mx-auto">
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
                  <p className="text-asp-blue text-xs font-bold uppercase tracking-widest mb-4">
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
                  <p className="text-asp-blue text-xs font-bold uppercase tracking-widest mb-4">
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
            <p className="text-center text-gray-500 text-sm mt-8 max-w-4xl mx-auto">
              These are results from businesses running this system. Our guarantee covers the 30
              days of clarity below. What comes after depends on your market and how you work it.
            </p>
            <ApplyCTA label="See if you qualify" />
          </ScrollReveal>
        </div>
      </section>

      {/* The comparison — the category is the argument */}
      <section className="py-14 md:py-16 lg:py-20 bg-asp-surface-light">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                You&apos;ve probably tried both
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Two ways to buy help. Both leave a gap.
              </h2>
              <p className="text-gray-600 text-lg">
                Hire an agency and you never learn how it works. Join a coaching program and the
                building still lands on you. We do the building and the teaching.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CompareTable rows={VS_AGENCY} themLabel="A typical agency" />
              <CompareTable rows={VS_COACHING} themLabel="A coaching program" />
            </div>
            <ApplyCTA label="Apply now" />
          </ScrollReveal>
        </div>
      </section>

      {/* What gets installed — problem-named pillars */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What gets installed
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
            <div className="mt-10 max-w-4xl mx-auto rounded-[var(--radius-asp-xl)] border-2 border-asp-purple/50 bg-asp-purple/[0.04] p-6 lg:p-8 text-center shadow-[0_12px_32px_-8px_rgba(159,76,255,0.25)]">
              <p className="font-black text-lg text-asp-blue mb-2">
                Included for all 10 founding businesses
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Setup and system installation — normally $7,500 — waived. A full brand kit built
                for you: logo system, colors, type, and guidelines, yours to keep whatever you do
                next. Plus early access to our internal procedures system, currently in
                development.
              </p>
            </div>
            <ApplyCTA label="Claim one of the ten" />
          </ScrollReveal>
        </div>
      </section>

      {/* The part nobody else does — the differentiator gets its own stage */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              The part most marketing companies skip
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              Every month we sit down and go through your numbers.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Your margin by job type. Your breakeven. A look at your pricing. And a straight
              answer on what your business can afford to spend on marketing, based on your own
              numbers.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              One hour a month in your own dashboard, covering what&apos;s working, what
              isn&apos;t, and what to do next. The training library covers the rest, so you learn
              the system instead of depending on us to explain it.
            </p>
            <p className="text-white/60 leading-relaxed">
              Most agencies won&apos;t look at your numbers. Most coaching programs won&apos;t
              build your website. We do both, because you can&apos;t set a marketing budget
              without knowing your margins.
            </p>
            <ApplyCTA dark label="Start your application" />
          </ScrollReveal>
        </div>
      </section>

      {/* The guarantee */}
      <section
        id="guarantee"
        className="py-14 md:py-16 lg:py-20 bg-white scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              The 30-Day Clarity Guarantee
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-6 leading-tight">
              In 30 days you&apos;ll know where every new lead came from. Or your first month is
              refunded.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Connect your CRM. Give us access. Answer the setup questions. Show up to the kickoff
              call. That&apos;s your part.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Within 30 days, every new lead that comes in gets traced back to its source — which
              channel, which campaign, which page, and what it turned into. Do your part and still
              can&apos;t see it? We refund your first month, release you from the rest of the 90
              days, and you keep everything we built.
            </p>
            <p className="font-bold text-asp-blue text-lg">
              We guarantee what we control. The revenue numbers above are proof from other
              businesses, not a forecast for yours.
            </p>
            <ApplyCTA label="Apply now" />
          </ScrollReveal>
        </div>
      </section>

      {/* Why 90 days — answers the lock-in objection before pricing */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(159, 76, 255, 0.2), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              The term
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              We ask for 90 days. Here&apos;s why.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              You can&apos;t build a website, rank it, connect a CRM, and prove where your leads
              come from in three weeks. Ninety days is the honest minimum.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              After that, cancel any time. You keep the site, the accounts, the data, and the
              tracking. We don&apos;t hold anything back, because none of it was ever ours.
            </p>
            <p className="font-bold text-white text-lg">
              And if we miss the 30-day guarantee, you can walk right then and still keep
              everything we built.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works — arrows between steps */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
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
            <ApplyCTA label="Start step one" />
          </ScrollReveal>
        </div>
      </section>

      {/* Review wall (trades-relevant only) */}
      <section className="py-14 md:py-16 lg:py-20 bg-asp-surface-light">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
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

      {/* What it costs */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              What it costs
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              $2,997 a month. That&apos;s the whole install.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Website, SEO and AEO, content and social, local SEO and reviews, CRM integration,
              lead tracking, your numbers, and the monthly sit-down. Setup and installation
              normally runs <strong className="text-white">$7,500</strong> — waived for the 10
              founding businesses.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Want paid ads managed on top?{" "}
              <strong className="text-white">$3,850/month</strong> covers Google Local Services
              Ads, Google Ads, and Meta. Ad spend is separate in both cases — you pay it directly
              to the platforms from your own accounts, and ASP never collects a dollar of it.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-2">
              Stay past 90 days and we lock your rate for 12 months. No increases.
            </p>
            <ApplyCTA dark label="See if you qualify" />
          </ScrollReveal>
        </div>
      </section>

      {/* Why only 10 — capacity-real scarcity */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Why only 10
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-6 leading-tight">
              We take ten businesses at a time.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We build every website ourselves. Ten is what we can install properly at once
              without cutting corners on any of them.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              When those ten are filled, the next group starts once we have room.
            </p>
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
                Two minutes. Seven questions. Zero obligation.
              </h2>
              <p className="text-gray-600 text-lg">
                We review every application by hand and only move forward where we see a real fit.
                We take 10 businesses at a time.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <LeadEngineForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Secondary path — the $99 audit. Deliberately not a co-equal CTA. */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-3">
              Not sure it&apos;s a fit? Find out for $99.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We&apos;ll audit your systems and walk you through it on a 45-minute call. You get a
              competitor teardown, a check on whether AI tools recommend you, a technical read on
              your website, and a straight answer on where your lead tracking is broken.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you decide to move forward, the $99 comes off your first month.
            </p>
            <a
              href="/contact?ref=systems-audit"
              className="inline-block border-2 border-asp-blue text-asp-blue font-bold py-3 px-8 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors no-underline"
            >
              Book the $99 Systems Audit
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Plain-English terms summary. The signed service agreement governs. */}
      <section className="py-10 bg-asp-surface-light border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong className="text-gray-600">The fine print:</strong> The 90-Day
            Install is billed monthly — $2,997/month, or $3,850/month with Google Local Services
            Ads, Google Ads, and Meta ads management included. The first 90 days are the initial
            term; after day 90 you may cancel at any time. Fees already paid are non-refundable
            except under the 30-Day Clarity Guarantee below. Ad spend is not included in any ASP
            fee: you pay it directly to the advertising platform from your own account, and ASP
            never collects, holds, or marks it up. Ad-spend recommendations for your market are
            covered on the discovery call. The 30-Day Clarity Guarantee applies where you have
            completed your onboarding obligations — onboarding checklist within 14 days, access
            granted to your CRM, Google Business Profile, domain and analytics, kickoff call
            attended, and setup questionnaire returned. It is measured on source attribution being
            live and populated in your dashboard for every new lead generated after your system
            goes live. It does not apply to contacts already in your CRM, and it is not measured on
            lead volume or revenue. If it is not live by day 30, your first month is refunded and
            you are released from the remainder of the initial 90-day term. In every case, every asset built for you is yours to keep and
            is transferred at no charge: the website and its code, your business accounts, your
            content, and your data. Continuing past day 90 locks your monthly rate for 12 months
            with no increase, on a 12-month term. Setup and installation is normally $7,500 and is
            waived for founding businesses. All terms are defined in the service agreement signed
            before work begins. This page is a summary; the service agreement governs.
          </p>
        </div>
      </section>
    </main>
  );
}
