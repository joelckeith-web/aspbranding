import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FrameworksForm } from "@/components/sections/FrameworksForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

// Gated lead-magnet page. NOT in the sitemap or nav; noindex. Traffic arrives
// from paid campaigns, the newsletter sequence and the /strategy-call fallback.
//
// One job: get the email. Single-offer structure (Joel 2026-11-05, after Josh
// Nelson's free roadmap page): no site nav, promise and form first, the guide
// itself front and center, the same one call to action repeated down the page.
// It does not sell the install and does not carry client revenue figures.
//
// Hero and closing bands stay plain WHITE: the print mockup is a dark navy book
// with a baked-in shadow, so it disappears on dark sections and shows a clipped
// shadow edge on tinted ones.
//
// Copy rules from docs/joel-voice-profile.md:
//   - One statement per section header. Never two sentences stacked.
//   - No "not X — Y" antithesis as a tic. No riddle sentences.
//   - Describe the reader's category, never diagnose the reader.
//
// COMPLIANCE: framework 4 uses budgeting / margin / breakeven / pricing
// vocabulary only. ASP is not licensed for financial planning or advice.

export const metadata: Metadata = {
  title: "The 5 Marketing Frameworks for Trades Businesses — Free Guide",
  description:
    "The five marketing frameworks ASP installs for trades businesses: the lead source map, speed to lead, the Google Business Profile, the money math, and the site that books work. Free, sent straight to your inbox.",
  robots: { index: false, follow: false },
};

const FRAMEWORKS: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "The Lead Source Map",
    body:
      "How to label every lead with the channel that produced it — Google Search, Google Business Profile, paid ads, social, referral, repeat customer — and why a Business Profile click arrives looking like someone who typed your name from memory.",
  },
  {
    n: "02",
    title: "The Speed-to-Lead System",
    body:
      "The response-time rules for getting to the lead first, because whoever calls back first probably books the job. What to measure, what to automate, and what has to stay human.",
  },
  {
    n: "03",
    title: "The Profile as a Channel",
    body:
      "Reviews and posts that keep a Profile active, and the UTM tagging that turns a listing into a channel you can measure.",
  },
  {
    n: "04",
    title: "The Money Math",
    body: "Margin by job type, breakeven, and what you can afford to spend to win a job.",
  },
  {
    n: "05",
    title: "The Site That Books Work",
    body:
      "The page structure that turns a visitor into a booked job, and why most trades sites lose the customer in ten seconds.",
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
  "How many minutes pass between a new lead arriving and a person on your team trying to reach them.",
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
      "No. You can act on all five frameworks without hiring us. A section near the end covers setting up lead-source tracking in the CRM you already have.",
  },
  {
    question: "Which CRMs does the setup section cover?",
    answer:
      "Housecall Pro, Jobber, ServiceTitan, HubSpot and GoHighLevel, plus what to do if you use something else or nothing at all.",
  },
  {
    question: "What will you do with my email?",
    answer:
      "We send you the guide. If you tick the box, we also send occasional marketing updates by email, and you can unsubscribe any time.",
  },
];

const FACTS = ["21 pages", "5 frameworks", "CRM setup section included"];

const CTA_CLASS =
  "inline-block bg-asp-gradient-cta text-white font-semibold px-8 py-4 rounded-[10px] shadow-asp-md hover:shadow-asp-lg hover:-translate-y-0.5 transition-all no-underline";

function GuideImage({ eager = false }: { eager?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/guide/frameworks-print-mockup.webp"
      alt="Printed copies of The 5 Marketing Frameworks for Trades Businesses: one standing with the cover showing, one open to The Lead Source Map"
      width={1200}
      height={701}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      className="w-full h-auto"
    />
  );
}

export default function FrameworksPage() {
  return (
    <main className="bg-white">
      {/* HERO — no ScrollReveal: it hides content until JavaScript runs, which
          delayed the headline by 4+ seconds on mobile. */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10 md:pt-7 md:pb-16 lg:pb-20">
          {/* Logo only. A link here would be an exit. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/asp-black.png"
            alt="ASP"
            className="h-6 md:h-8 w-auto mb-4 md:mb-10"
          />

          <div className="grid lg:grid-cols-12 gap-4 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-3">
                Free guide
              </span>
              <h1 className="font-black text-3xl md:text-5xl leading-[1.08] text-asp-blue mb-3 md:mb-4">
                The 5 marketing frameworks we install for trades businesses.
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                The five systems that decide whether marketing money turns into booked work. Free,
                and we email it straight to you.
              </p>
              <div className="w-[82%] mx-auto lg:w-full">
                <GuideImage eager />
              </div>
            </div>

            <div id="get" className="lg:col-span-5 scroll-mt-6">
              <FrameworksForm />
              <ul className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-gray-600 list-none p-0">
                {FACTS.map((t) => (
                  <li key={t} className="rounded-full border border-gray-200 bg-white px-3 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ONCE IT IS IN PLACE */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Once it is in place
            </span>
            <h2 className="font-black text-3xl md:text-4xl leading-tight">
              You will be able to answer these six questions.
            </h2>
          </ScrollReveal>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5 list-none p-0 m-0">
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
          <div className="text-center mt-10">
            <a href="#get" className={CTA_CLASS}>
              Send me the 5 frameworks
            </a>
          </div>
        </div>
      </section>

      {/* LOOK INSIDE — real pages, so the visitor can judge the depth. */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Look inside
            </span>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-4">
              21 pages you can start on this week.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Diagrams, numbered requirements and the trap in each framework. These are real pages
              from the guide.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {PAGES.map((p, i) => (
              <ScrollReveal
                key={p.src}
                delay={i * 60}
                className={i === 0 ? "col-span-2 md:col-span-1" : ""}
              >
                <figure className="m-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              What is inside
            </span>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-4">
              Five frameworks, in the order they should be built.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Each one feeds the next. Start with the tagging in the first and the ownership rule in the second.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {FRAMEWORKS.map((f, i) => (
              <ScrollReveal key={f.n} delay={i * 60}>
                <div className="flex gap-5 rounded-2xl border border-gray-200 bg-white shadow-asp-md p-6 lg:p-7">
                  <span className="font-black text-2xl text-asp-blue/30 shrink-0 leading-none pt-1">
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-black text-lg text-asp-blue mb-2 leading-snug">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={FRAMEWORKS.length * 60}>
              <div className="flex gap-5 rounded-2xl border-2 border-asp-blue/20 bg-asp-blue/[0.03] shadow-asp-md p-6 lg:p-7">
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

      {/* WHO WROTE IT — approved bio with Joel's current public title (CEO). */}
      <section className="relative py-14 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Who wrote it
            </span>
            <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-4">
              Joel Keith, CEO, ASP
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Joel Keith is the CEO of ASP, a growth-systems marketing agency for home service
              operators. He is a marketing operator who has spent years inside home service
              companies, building and refining the systems ASP now runs for clients. ASP is an
              Official Housecall Pro Affiliate Partner.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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

      {/* CLOSE — who it is for (filter, never diagnose), the guide, the ask. */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <ScrollReveal className="lg:col-span-7">
            <GuideImage />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-5">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Who this is for
            </span>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5 leading-tight">
              Home service businesses with customers, revenue and a crew.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              The guide assumes you already have work coming in and want to know where it comes from.
            </p>
            <a href="#get" className={CTA_CLASS}>
              Send me the 5 frameworks
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Site footer is hidden on standalone pages. */}
      <footer className="bg-white border-t border-gray-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ASP ·{" "}
        <a href="/privacy-policy" className="underline hover:text-asp-blue">
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}
