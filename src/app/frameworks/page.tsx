import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FrameworksForm } from "@/components/sections/FrameworksForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

// Gated lead-magnet page. NOT in the sitemap or nav; noindex — traffic
// arrives from paid campaigns only.
//
// This is the top of the paid funnel. The ads (C1–C4) point HERE, not at the
// application on /lead-engine. The job of this page is one thing: get the
// email. It does not sell the $2,997 install, and it does not carry revenue
// figures — a cold visitor who has never heard of ASP reads a big number as
// a pitch, and Meta reads it as an outcome claim.
//
// Copy rules from docs/joel-voice-profile.md:
//   - One statement per section header. Never two sentences stacked.
//   - No "not X — Y" antithesis as a tic. No riddle sentences.
//   - Describe the reader's category, never diagnose the reader.
//
// COMPLIANCE: framework 4 uses budgeting / margin / breakeven / pricing
// vocabulary only. ASP is not licensed for financial planning or advice.

export const metadata: Metadata = {
  title: "The 5 Marketing Frameworks for Home Service Businesses — Free Guide",
  description:
    "The five marketing frameworks ASP installs for home service businesses: the lead source map, speed to lead, the Google Business Profile engine, the money math, and the site that books work. Free, sent straight to your inbox.",
  robots: { index: false, follow: false },
};

const FRAMEWORKS: { n: string; title: string; body: string; note?: string }[] = [
  {
    n: "01",
    title: "The Lead Source Map",
    body:
      "How to trace every digital lead back to the channel that produced it — paid search, paid social, organic, Business Profile, referral, direct — and why the Business Profile is the one most businesses get wrong.",
  },
  {
    n: "02",
    title: "The Speed-to-Lead System",
    body:
      "The response-time rules that decide who books the job. What to measure, what to automate, and what has to stay human.",
    // Google's own LSA policy change, effective 2026-10-01. Dated and
    // verifiable, and it makes the case better than any statistic we could
    // quote: the platform is now charging for calls you do not answer.
    note:
      "From October 1, 2026, Google Local Services Ads charges you for missed calls during business hours once the caller holds for 20 seconds — and for the follow-up call if the first one didn't qualify. Not answering the phone stops being free.",
  },
  {
    n: "03",
    title: "The Google Business Profile Engine",
    body:
      "Reviews, posts and UTM tagging that turn a Profile from a listing into a channel you can measure.",
  },
  {
    n: "04",
    title: "The Money Math",
    body:
      "Margin by job type, breakeven, and what you can afford to spend to win a job.",
  },
  {
    n: "05",
    title: "The Site That Books Work",
    body:
      "The page structure that turns a visitor into a booked job, and the four things that cost most home service sites their conversions.",
  },
];

// Real pages from the PDF (rendered from public/downloads/asp-5-marketing-frameworks.pdf).
// If the guide is revised, re-render these so the preview matches what arrives.
const PAGES: { src: string; caption: string }[] = [
  { src: "/images/proof/frameworks-page-02.jpg", caption: "Five systems, in order" },
  { src: "/images/proof/frameworks-page-05.jpg", caption: "Where every lead is born" },
  { src: "/images/proof/frameworks-page-07.jpg", caption: "Speed to lead" },
  { src: "/images/proof/frameworks-page-12.jpg", caption: "The money math" },
  { src: "/images/proof/frameworks-page-18.jpg", caption: "Set it up in your CRM" },
];

// Questions the guide answers. Each one maps to a section of the PDF.
const ANSWERS = [
  "Which channel produced last month's booked jobs, and which ones only produced clicks.",
  "How many minutes pass between a new lead arriving and a person on your team reaching them.",
  "Whether your Google Business Profile is bringing in work you can actually trace.",
  "What you can afford to spend to win one job, by job type.",
  "Why visitors leave your site without calling, and the page structure that fixes it.",
  "How to set up lead-source tracking in the CRM you already use.",
];

const FAQS = [
  {
    question: "Is it really free?",
    answer:
      "Yes. Put in your name and email and we send the PDF straight to your inbox. There is nothing to buy and no card to enter.",
  },
  {
    question: "How long is it?",
    answer:
      "21 pages, about a 25-minute read. Each framework is a few pages: what breaks, why it breaks, what has to be true, and how you know it is working.",
  },
  {
    question: "Do I need to hire ASP to use it?",
    answer:
      "No. You can act on all five frameworks yourself. The last section covers setting up lead-source tracking in the CRM you already have.",
  },
  {
    question: "Which CRMs does the setup section cover?",
    answer:
      "Housecall Pro, Jobber, ServiceTitan, HubSpot and GoHighLevel, plus what to do if you use something else or nothing at all.",
  },
  {
    question: "Will you call me?",
    answer:
      "Phone is optional and the guide comes by email. If you tick the box, we also send occasional marketing updates by email, and you can unsubscribe any time.",
  },
];

// The cover with two real pages fanned behind it, so the guide reads as a
// thing worth having, not a thumbnail.
function GuideMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto aspect-[935/1210] ${className}`}>
      <img
        src="/images/proof/frameworks-page-12.jpg"
        alt=""
        aria-hidden="true"
        width={935}
        height={1210}
        className="absolute inset-0 w-full h-auto rounded-lg shadow-asp-xl ring-1 ring-white/10 rotate-[9deg] translate-x-[14%] translate-y-[3%] opacity-70"
      />
      <img
        src="/images/proof/frameworks-page-05.jpg"
        alt=""
        aria-hidden="true"
        width={935}
        height={1210}
        className="absolute inset-0 w-full h-auto rounded-lg shadow-asp-xl ring-1 ring-white/10 rotate-[4deg] translate-x-[7%] translate-y-[1%] opacity-90"
      />
      <img
        src="/images/proof/frameworks-guide-cover.png"
        alt="Cover of The 5 Marketing Frameworks guide"
        width={935}
        height={1210}
        className="relative w-full h-auto rounded-lg shadow-[0_30px_60px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/15 -rotate-2"
      />
    </div>
  );
}

export default function FrameworksPage() {
  return (
    <main className="bg-asp-black">
      {/* HERO — the ask sits beside the promise, above the fold. No ScrollReveal
          here: it hides content until JavaScript runs, which delayed the
          headline by 4+ seconds on mobile. */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
          {/* Desktop: promise + form on the left, the large guide on the right.
              Phones: promise, form, then the large guide. */}
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-16 items-center max-w-7xl mx-auto">
            <div>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Free guide for home service businesses
              </span>
              <h1 className="font-black text-3xl md:text-5xl leading-[1.05] mb-4 md:mb-5">
                The 5 marketing frameworks we install for home service businesses.
              </h1>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Same frameworks we build for our clients. Free, and we email it straight to you.
              </p>
              <ul className="hidden md:flex flex-wrap gap-2 mt-5 text-sm text-white/80">
                {["21 pages", "5 frameworks", "CRM setup guide included"].map((t) => (
                  <li key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                    {t}
                  </li>
                ))}
              </ul>
              <div id="get" className="mt-6 md:mt-8 max-w-xl">
                <FrameworksForm />
              </div>
            </div>

            <GuideMockup className="w-[68%] max-w-xs lg:max-w-md lg:w-[82%] mt-10 mb-4 lg:my-0" />
          </div>
        </div>
      </section>

      {/* LOOK INSIDE — real pages, so the visitor can judge the depth. */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Look inside
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
              21 pages you can put to work this week.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Diagrams, checklists and the traps that catch most owners. These are real pages from
              the guide.
            </p>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {PAGES.map((p, i) => (
              <ScrollReveal
                key={p.src}
                delay={i * 60}
                className={i === 0 ? "col-span-2 md:col-span-1" : ""}
              >
                <figure>
                  <img
                    src={p.src}
                    alt={`Page from the guide: ${p.caption}`}
                    width={935}
                    height={1210}
                    loading="lazy"
                    className={`w-full h-auto rounded-lg shadow-asp-lg ring-1 ring-black/10 ${
                      i === 0 ? "max-w-[60%] md:max-w-none mx-auto" : ""
                    }`}
                  />
                  <figcaption className="mt-3 text-center text-sm font-semibold text-asp-blue">
                    {p.caption}
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              What is inside
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
              Five frameworks, in the order they should be built.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The first one makes the other four measurable. Start there.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {FRAMEWORKS.map((f, i) => (
              <ScrollReveal key={f.n} delay={i * 60}>
                <div className="flex gap-5 rounded-[var(--radius-asp-xl)] border border-gray-200 bg-gray-50/60 p-6 lg:p-7">
                  <span className="font-black text-2xl text-asp-blue/30 shrink-0 leading-none pt-1">
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-black text-lg text-asp-blue mb-2 leading-snug">
                      {f.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                    {f.note && (
                      <p className="mt-3 border-l-2 border-asp-blue/40 bg-white pl-4 py-2 text-gray-500 text-[13px] leading-relaxed">
                        <span className="font-bold text-asp-blue">What changed: </span>
                        {f.note}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={FRAMEWORKS.length * 60}>
              <div className="flex gap-5 rounded-[var(--radius-asp-xl)] border-2 border-asp-blue/20 bg-asp-blue/[0.03] p-6 lg:p-7">
                <span className="font-black text-xs uppercase tracking-widest text-asp-purple shrink-0 pt-1.5">
                  Plus
                </span>
                <div>
                  <h3 className="font-black text-lg text-asp-blue mb-2 leading-snug">
                    Source tracking in your CRM
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The practical part: what to set up in Housecall Pro, Jobber, ServiceTitan,
                    HubSpot or GoHighLevel so every job carries the channel that produced it.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AFTER YOU READ IT */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <GuideMockup className="w-[62%] max-w-xs lg:max-w-sm lg:w-[75%]" />
            </ScrollReveal>
            <ScrollReveal>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                After you read it
              </span>
              <h2 className="font-black text-3xl md:text-4xl leading-tight mb-8">
                You will be able to answer six questions most owners can&apos;t.
              </h2>
              <ul className="space-y-4">
                {ANSWERS.map((a) => (
                  <li key={a} className="flex gap-3 text-white/80 leading-relaxed">
                    <svg
                      className="w-5 h-5 mt-0.5 shrink-0 text-asp-blue-light"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get"
                className="inline-block mt-10 bg-asp-gradient-cta text-white font-semibold px-8 py-4 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all"
              >
                Send me the 5 frameworks
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHO WROTE IT — Joel's approved author bio (2026-09-30), verbatim. */}
      <section className="relative py-14 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Who wrote it
            </span>
            <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-4">
              Joel Keith, Founder &amp; CEO, ASP
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Joel Keith is the founder and CEO of ASP, a growth-systems marketing agency for home
              service operators. He is a marketing operator who has spent years inside home service
              companies, building and refining the systems ASP now runs for clients. ASP is an
              Official Housecall Pro Affiliate Partner.
            </p>
            <img
              src="/images/badges/hcp-affiliate.png"
              alt="Housecall Pro Affiliate"
              className="h-12 w-auto mx-auto"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-gray-100">
        <FAQAccordion faqs={FAQS} heading="Questions about the guide" />
      </div>

      {/* WHO IT IS FOR — filter, never diagnose. */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Who this is for
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              Home service businesses with customers, revenue and a crew.
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              Any home service business with customers, revenue and a crew. The guide assumes you
              already have work coming in and want to know where it comes from.
            </p>
            <a
              href="#get"
              className="inline-block bg-asp-gradient-cta text-white font-semibold px-8 py-4 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all"
            >
              Send me the 5 frameworks
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
