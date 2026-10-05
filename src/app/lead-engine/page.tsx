import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LeadEngineForm } from "@/components/sections/LeadEngineForm";
import testimonials from "@/data/testimonials.json";
import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcon";

// Ad landing page for ASP's core offer. NOT in the sitemap or nav; noindex —
// traffic arrives from paid campaigns only.
//
// v7 (2026-10-05, Joel's revision):
//   - Positioned as an agency whose results the owner can check: we run the
//     marketing AND build the dashboard that traces every digital lead. The
//     "we build it, then you run it yourself" hand-off framing is GONE — the
//     goal is a client who signs and stays.
//   - No price on the page. Qualification happens in the form; price is
//     justified on the discovery call against what it should return.
//   - Reviews sit directly under the hero as a left-to-right marquee of every
//     home service review; it pauses on hover so a visitor can read.
//   - Hero carries a real Viking crew photo (trades in action, not stock).
//   - Shorter page overall.
//   - Ad angles carried in the hero: "Tired of agencies…" (C1), lead-source
//     guarantee (S3). The 30-day guarantee terms are unchanged (see /terms).
//
// Copy rules: one statement per section header; no trade names; no turnaround
// claims; no riddle sentences; "actually" only inside verbatim client quotes.

export const metadata: Metadata = {
  title: "See Exactly What Your Marketing Brings In",
  description:
    "ASP runs your website, SEO, local search and CRM connection, and builds you a dashboard that traces every digital lead to its source. See it for yourself inside 30 days, or your first month is refunded.",
  robots: { index: false, follow: false },
};

// Every home service review, quotes verbatim, first names only. Tray G. is a
// law firm, so he stays off a page sold to home service owners.
const REVIEWS = testimonials.filter((t) => t.firstName !== "Tray G.");

// Proof, labeled by what the number measures — never by trade or client name.
const PROOF = [
  {
    label: "Three-year growth",
    stat: "$3M → $5.3M",
    detail:
      "$3M in year one. $4.2M in year two. Tracking near $5.3M this year — three straight years of growth.",
  },
  {
    label: "Pipeline",
    stat: "$1M+",
    detail:
      "in pipeline inside the first 90 days. Today that same business closes $400K weeks and is pacing $2.5M+ this year.",
  },
  {
    label: "Revenue ceiling",
    stat: "$3M → $5M",
    detail:
      "broke through the $3M ceiling it had been stuck at, and set out to do $5M this year.",
  },
  {
    label: "Search rankings",
    stat: "+$1M",
    detail:
      "on pace to add nearly $1M in new revenue this year off the back of search rankings.",
  },
  {
    label: "First 90 days",
    stat: "$81,000",
    detail:
      "closed sales in the first 90 days on this exact system. Not pipeline — closed, invoiced work.",
  },
];

const SERVICES: { icon: BrandIconName; title: string; body: string }[] = [
  {
    icon: "website",
    title: "A website built to book jobs",
    body: "Built on the same structure our highest-performing client sites run on. Fast, made to convert, and in your name.",
  },
  {
    icon: "search",
    title: "SEO and AI search",
    body: "Show up when homeowners search Google, and get recommended when they ask an AI tool who to call.",
  },
  {
    icon: "gbp",
    title: "Local SEO and reviews",
    body: "Your Google Business Profile tuned for urgent searches, plus a steady flow of new reviews from happy customers.",
  },
  {
    icon: "content",
    title: "Content and social, handled",
    body: "Your social channels planned, written and designed to your brand, every month.",
  },
  {
    icon: "data",
    title: "Connected to your CRM",
    body: "Jobber, Housecall Pro, Service Fusion — we connect it and set up the follow-up so no lead sits waiting.",
  },
  {
    icon: "results",
    title: "Your marketing dashboard",
    body: "Every digital lead traced to its source — paid search, paid social, organic, your Business Profile and direct — in one dashboard you can check any time.",
  },
];

const VS_AGENCY = [
  { them: "You get a monthly report.", us: "You get a live dashboard and a monthly sit-down." },
  { them: "Lead sources you take on faith.", us: "Every digital lead traced to its source." },
  { them: "The website lives on their platform.", us: "The website is yours. Code, domain, hosting." },
  { them: "Ad accounts sit in their name.", us: "Every account in your name from day one." },
  { them: "Nobody looks at your margins.", us: "We go through your numbers every month." },
];

const STEPS = [
  {
    step: "1",
    title: "Apply",
    body: "A short application, about two minutes. It's how we know if we can win for you before anyone gets on a call.",
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
    body: "Site, SEO, content, CRM and your dashboard, live and running inside your first 90 days.",
  },
];

const FAQS = [
  {
    q: "What does the guarantee cover, exactly?",
    a: "Connect your CRM, give us access, answer the setup questions, and show up to the kickoff call. That's your part. Inside your first 30 days you get the marketing system built and every digital lead traced to its source — paid search, paid social, organic, your Google Business Profile, and direct traffic. If you've done your part and you still can't see it, we refund your first month, release you from the rest of the 90 days, and you keep everything we built. Two limits worth stating plainly: word-of-mouth referrals can't be traced by any system, and the guarantee covers leads generated after your system goes live, not contacts already sitting in your CRM.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what your market needs and whether you want paid ads managed. We walk through it on the discovery call, along with what it should return for your business, so you can judge it against real numbers.",
  },
  {
    q: "Is ad spend included?",
    a: "No, and we never touch it. If you run ads, that money goes directly from your card to Google or Meta inside your own accounts. We never collect, hold, or mark up ad spend, so there is nothing hidden inside what we charge you. What makes sense to budget for your market is part of the discovery call.",
  },
  {
    q: "Do I have to run ads?",
    a: "No. The core service is built on what you own — your website, search rankings, AI visibility, content, reviews, and the tracking underneath all of it. If you want paid ads managed on top, we cover Google Local Services Ads, Google Ads, and Meta. Ads speed things up. They are not required.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. The code, the domain, and the hosting account are in your name from day one, along with every ad and analytics account. Nothing is held back.",
  },
  {
    q: "Why do I need a CRM?",
    a: "Because the guarantee runs on proof. Your CRM is where we trace digital leads back to their source, so when we show you where your work came from, the data is standing behind it. A CRM is required for this program — if you don't have one, we'll get you set up on Housecall Pro at our partner discount before we start.",
  },
  {
    q: "What if I already have a website?",
    a: "We'll rebuild it on a structure that converts better, and you keep full ownership of the new one. If your current site is performing, we'll tell you that too. The point is booked jobs, not busywork.",
  },
  {
    q: "What do you need from me?",
    a: "Access to your accounts, honest answers to the setup questions, and one hour a month for the review call. That's the whole ask.",
  },
];

// Faded approved photography behind dark sections, for depth. The image sits
// low-opacity under a vertical black wash so section edges blend and body copy
// keeps its contrast.
function ImageWash({
  src,
  position = "center center",
}: {
  src: string;
  position?: string;
}) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 bg-cover opacity-[0.22]"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-asp-black via-asp-black/75 to-asp-black" />
    </div>
  );
}

// ASP-blue sections read flat beside the black ones: a single cyan glow over
// #002366 has almost nothing to fall off against, so the gradient disappears.
// Same composition as the hero — offset cyan and purple ellipses — carried at
// the higher opacity the lighter base needs, over a corner wash that gives the
// glows an edge to resolve into. Grain is the shared texture utility.
function BlueWash() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none bg-asp-grain">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 18% 12%, rgba(76, 201, 240, 0.30), transparent 62%), radial-gradient(ellipse 60% 55% at 84% 88%, rgba(159, 76, 255, 0.28), transparent 62%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.38) 100%)",
        }}
      />
    </div>
  );
}

// Shared CTA — solid, bold, drop-shadowed text. One statement per button.
function ApplyCTA({ label = "See what's in it for me" }: { label?: string }) {
  return (
    <div className="text-center mt-10">
      <a
        href="#apply"
        className="inline-block bg-asp-purple text-white font-black tracking-tight py-4 px-12 rounded-[var(--radius-asp-lg)] no-underline text-lg [text-shadow:0_2px_4px_rgba(0,0,0,0.45)] shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] hover:bg-[#8A34F0] transition-colors"
      >
        {label}
      </a>
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

function MarkX() {
  return (
    <svg
      className="w-4 h-4 text-white/25 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function MarkCheck() {
  return (
    <svg
      className="w-4 h-4 text-asp-blue-light shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// Dark comparison card. The ASP column is lifted with an accent tint, a left
// rule, and check marks; the other column is muted and marked with an x.
function CompareTable({
  rows,
  themLabel,
}: {
  rows: { them: string; us: string }[];
  themLabel: string;
}) {
  return (
    <div className="rounded-[var(--radius-asp-xl)] border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
      <div className="grid grid-cols-2">
        <div className="px-5 py-4 border-b border-white/10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">
            {themLabel}
          </span>
        </div>
        <div className="px-5 py-4 border-b border-white/10 border-l-2 border-l-asp-blue-light bg-asp-blue-light/[0.07]">
          <span className="text-[11px] font-bold uppercase tracking-widest text-asp-blue-light">
            ASP
          </span>
        </div>
      </div>
      {rows.map((r) => (
        <div key={r.us} className="grid grid-cols-2">
          <div className="px-5 py-4 border-t border-white/[0.06] flex gap-2.5">
            <MarkX />
            <span className="text-white/45 text-sm leading-relaxed">{r.them}</span>
          </div>
          <div className="px-5 py-4 border-t border-white/[0.06] border-l-2 border-l-asp-blue-light bg-asp-blue-light/[0.07] flex gap-2.5">
            <MarkCheck />
            <span className="text-white text-sm leading-relaxed font-medium">{r.us}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LeadEnginePage() {
  return (
    <main id="primary" className="site-main">
      {/* Hero — promise left / application right */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        {/* Real Viking crew on a rooftop install. Dark wash keeps the copy and
            form readable; the crew stays visible on the right on desktop and
            through the top of the hero on mobile. */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-[position:70%_center] lg:bg-center opacity-60"
            style={{ backgroundImage: "url(/images/backgrounds/viking-rooftop-crew.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-asp-black/25 via-asp-black/80 to-asp-black lg:bg-gradient-to-r lg:from-asp-black lg:via-asp-black/80 lg:to-asp-black/30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 25% 20%, rgba(76, 201, 240, 0.14), transparent 65%), radial-gradient(ellipse 55% 50% at 80% 80%, rgba(159, 76, 255, 0.12), transparent 65%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Tired of agencies that can&apos;t show you results?
              </span>
              <h1 className="font-black text-4xl md:text-5xl 2xl:text-6xl leading-[1.08] mb-5">
                See exactly what your{" "}
                <span className="hero-text-gradient">marketing brings in.</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                We run your marketing and build you a dashboard that shows where every digital lead
                came from. See it for yourself inside 30 days, or we refund your first month.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Website, SEO and local search, run for you",
                  "Every digital lead traced to its source",
                  "Every account in your name",
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
            </div>
            <div id="apply-hero">
              <LeadEngineForm />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews — directly under the hero */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                In their words
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
                What owners say about working with ASP.
              </h2>
            </div>
          </ScrollReveal>
        </div>
        {/* Left-to-right marquee. The list renders twice so the loop is
            seamless; spacing lives inside each item (pr-5), not a flex gap. */}
        <div className="review-marquee-wrap overflow-hidden">
          <div className="review-marquee flex w-max items-start">
            {[...REVIEWS, ...REVIEWS].map((t, i) => (
              <div key={i} className="pr-5" aria-hidden={i >= REVIEWS.length ? true : undefined}>
                <blockquote className="w-[300px] md:w-[360px] rounded-[var(--radius-asp-xl)] bg-white border border-gray-200 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.15)] p-6">
                  <div className="flex gap-0.5 mb-3" aria-label="5 star rating">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{t.quote}</p>
                  <footer className="text-asp-blue font-bold text-sm">— {t.firstName}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ApplyCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* Proof */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-surface-navy text-white overflow-hidden">
        <ImageWash src="/images/backgrounds/hero-trades-1.jpg" position="center 30%" />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Real results
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl">
                What this system did for five home service businesses.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROOF.slice(0, 3).map((p) => (
                <div
                  key={p.stat}
                  className="rounded-[var(--radius-asp-xl)] border border-white/10 bg-asp-surface-navy/80 p-8 text-center shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]"
                >
                  <p className="text-asp-blue-light text-xs font-bold uppercase tracking-widest mb-4">
                    {p.label}
                  </p>
                  <p className="font-black text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-4">
                    {p.stat}
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:max-w-[calc(66.666%+0.75rem)] lg:mx-auto">
              {PROOF.slice(3).map((p) => (
                <div
                  key={p.stat}
                  className="rounded-[var(--radius-asp-xl)] border border-white/10 bg-asp-surface-navy/80 p-8 text-center shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]"
                >
                  <p className="text-asp-blue-light text-xs font-bold uppercase tracking-widest mb-4">
                    {p.label}
                  </p>
                  <p className="font-black text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-4">
                    {p.stat}
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-white/45 text-sm mt-8 max-w-4xl mx-auto">
              Results from businesses running this system. Our guarantee covers the 30 days of
              clarity below. What comes after depends on your market.
            </p>
            <ApplyCTA label="See what we could do for you" />
          </ScrollReveal>
        </div>
      </section>

      {/* What we run */}
      <section className="py-14 md:py-16 lg:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What we run for you
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Everything that brings in work, in one place.
              </h2>
              <p className="text-gray-600 text-lg">
                Each piece feeds the next, and every account is in your name.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-7 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.18)]"
                >
                  <BrandIcon name={c.icon} size="md" className="mb-4" />
                  <h3 className="font-black text-lg text-asp-blue mb-2 leading-snug">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
            <ApplyCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* The dashboard + monthly review */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <ImageWash src="/images/backgrounds/team-at-work.jpg" position="center 40%" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              See it for yourself
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              Every month we sit down and go through your numbers.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Which channels brought in leads, what those leads turned into, and where your next
              dollar should go. Your dashboard shows it any time. The monthly review is where we
              decide what to do next.
            </p>
            <p className="text-white/60 leading-relaxed">
              We also look at your margin by job type and your breakeven, so your marketing budget
              is set by your own numbers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The guarantee */}
      <section
        id="guarantee"
        className="relative py-14 md:py-16 lg:py-20 bg-asp-blue text-white overflow-hidden scroll-mt-24"
      >
        <BlueWash />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              The 30-Day Clarity Guarantee
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              Inside 30 days you&apos;ll see where every digital lead came from.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Paid search, paid social, organic, your Google Business Profile and direct. Each lead
              traced to the channel, campaign and page it came from, and what it turned into.
              Word-of-mouth referrals are the one thing no system can trace.
            </p>
            <p className="text-white/75 text-lg leading-relaxed mb-5">
              Connect your CRM, give us access, answer the setup questions and show up to the
              kickoff call. That&apos;s your part.
            </p>
            <p className="font-bold text-white text-lg">
              Do your part and still can&apos;t see it? We refund your first month.
            </p>
            <ApplyCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* Why owners switch */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Why owners switch to ASP
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl">
                You should be able to see what you&apos;re paying for.
              </h2>
            </div>
            <CompareTable rows={VS_AGENCY} themLabel="A typical agency" />
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-surface-navy text-white overflow-hidden">
        <ImageWash src="/images/backgrounds/hero-trades-2.jpg" position="center 35%" />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                How it works
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl">
                From application to launch in four steps.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
              {STEPS.map((s, i) => (
                <div key={s.step} className="contents">
                  {i > 0 && <StepArrow />}
                  <div className="flex-1 rounded-[var(--radius-asp-xl)] border border-white/10 bg-asp-surface-navy/80 p-7 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
                    <div className="font-black text-3xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-3">
                      {s.step}
                    </div>
                    <h3 className="font-black text-lg text-white mb-2">{s.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection
        items={FAQS}
        eyebrow="Before you apply"
        heading="Straight answers to fair questions."
        compact
      />

      {/* Application */}
      <section
        id="apply"
        className="relative py-14 md:py-16 lg:py-20 bg-asp-surface-navy text-white overflow-hidden scroll-mt-24"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Get started
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                A short application, two minutes, no obligation.
              </h2>
              <p className="text-white/65 text-lg">
                We review every application by hand and only move forward where we see a real fit.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <LeadEngineForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Secondary path — the free Systems Audit. Deliberately not a co-equal CTA. */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-3">
              Not ready to apply? Start with a free Systems Audit.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We&apos;ll audit your systems and walk you through it on a 45-minute call. You get a
              competitor teardown, a check on whether AI tools recommend you, a technical read on
              your website, and a straight answer on where your lead tracking is broken.
            </p>
            <a
              href="/contact?ref=systems-audit"
              className="inline-block border-2 border-asp-blue text-asp-blue font-bold py-3 px-8 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors no-underline"
            >
              Book your free Systems Audit
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Terms live on /terms. The signed service agreement governs. */}
      <section className="py-8 bg-asp-surface-navy border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-xs leading-relaxed">
            Pricing, the initial term, the 30-Day Clarity Guarantee, and what you own are set out
            in full in our{" "}
            <a
              href="/terms#install"
              className="text-asp-blue-light font-semibold underline underline-offset-2 hover:text-white transition-colors"
            >
              terms and conditions
            </a>
            . This page is a summary; the service agreement you sign governs.
          </p>
        </div>
      </section>
    </main>
  );
}
