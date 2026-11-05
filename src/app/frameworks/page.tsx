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
// Layout (Joel 2026-11-05): less white, the guide doing the selling. Two book
// renders he picked: standing + open in the hero (needs the glow behind it, the
// book is dark navy), open flat + standing at the close (its soft shadow only
// reads on a light section). Generated from the real PDF pages, so re-render
// if the guide is revised. Do not swap them for each other.
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

const FRAMEWORKS: { n: string; title: string; body: string; page: number }[] = [
  {
    n: "01",
    title: "The Lead Source Map",
    body:
      "How to label every lead with the channel that produced it — Google Search, Google Business Profile, paid ads, social, referral, repeat customer — and why a Business Profile click arrives looking like someone who typed your name from memory.",
    page: 4,
  },
  {
    n: "02",
    title: "The Speed-to-Lead System",
    body:
      "The response-time rules for getting to the lead first, because whoever calls back first probably books the job. What to measure, what to automate, and what has to stay human.",
    page: 7,
  },
  {
    n: "03",
    title: "The Profile as a Channel",
    body:
      "Reviews and posts that keep a Profile active, and the UTM tagging that turns a listing into a channel you can measure.",
    page: 10,
  },
  {
    n: "04",
    title: "The Money Math",
    body: "Margin by job type, breakeven, and what you can afford to spend to win a job.",
    page: 12,
  },
  {
    n: "05",
    title: "The Site That Books Work",
    body:
      "The page structure that turns a visitor into a booked job, and why most trades sites lose the customer in ten seconds.",
    page: 15,
  },
];

// Real PDF pages (public/downloads/asp-5-marketing-frameworks.pdf). If the guide
// is revised, re-render these so the preview matches what arrives.
const pageSrc = (n: number) => `/images/proof/frameworks-page-${String(n).padStart(2, "0")}.jpg`;

// The fan in "Look inside", front page first.
const FAN: { page: number; caption: string }[] = [
  { page: 5, caption: "Where every lead is born" },
  { page: 12, caption: "The money math" },
  { page: 18, caption: "Set it up in your CRM" },
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

const EYEBROW = "inline-block font-bold text-xs uppercase tracking-widest";

function PageImage({ page, alt }: { page: number; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={pageSrc(page)}
      alt={alt}
      width={935}
      height={1210}
      loading="lazy"
      className="block w-full h-auto"
    />
  );
}

export default function FrameworksPage() {
  return (
    <main className="bg-asp-surface-navy">
      {/* HERO — no ScrollReveal: it hides content until JavaScript runs, which
          delayed the headline by 4+ seconds on mobile. */}
      <section className="relative overflow-hidden bg-asp-surface-navy text-white">
        {/* The glow sits behind the book: its navy cover needs it to separate. */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(46%_50%_at_22%_72%,rgba(76,201,240,0.34),transparent_72%),radial-gradient(42%_48%_at_50%_62%,rgba(159,76,255,0.32),transparent_72%)]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10 md:pt-7 md:pb-16 lg:pb-20">
          {/* Logo only. A link here would be an exit. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/asp-white.png"
            alt="ASP"
            className="h-6 md:h-8 w-auto mb-4 md:mb-10"
          />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className={`${EYEBROW} text-asp-blue-light mb-3`}>Free guide</span>
              <h1 className="font-black text-3xl md:text-5xl leading-[1.08] text-white mb-3 md:mb-4">
                The 5 marketing frameworks we install for trades businesses.
              </h1>
              <p className="text-base md:text-lg text-white/75 leading-relaxed mb-5 md:mb-6">
                The five systems that decide whether marketing money turns into booked work. Free,
                and we email it straight to you.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/guide/frameworks-book-standing-open.webp"
                alt="Printed copies of The 5 Marketing Frameworks for Trades Businesses: one standing with the cover showing, one open behind it to The Lead Source Map"
                width={1873}
                height={951}
                fetchPriority="high"
                className="w-full h-auto"
              />
            </div>

            <div id="get" className="lg:col-span-5 scroll-mt-6">
              <FrameworksForm />
              <ul className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-white/80 list-none p-0">
                {FACTS.map((t) => (
                  <li key={t} className="rounded-full border border-white/20 bg-white/5 px-3 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ONCE IT IS IN PLACE */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-[#eef2fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <span className={`${EYEBROW} text-asp-purple mb-4`}>Once it is in place</span>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-blue">
              You will be able to answer these six questions.
            </h2>
          </ScrollReveal>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
            {ANSWERS.map((a, i) => (
              <li key={a} className="rounded-2xl bg-white shadow-asp-md p-6">
                <ScrollReveal delay={i * 50}>
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-asp-gradient-accent mb-4"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-asp-blue font-semibold leading-snug m-0">{a}</p>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LOOK INSIDE — text left, real pages large and fanned off to the right
          (same idea as the Good Faith report section). One page square, the
          others tilting further as they step right. The pages are dark, so a
          glow travels with them to show their edges. It lives on the fan, not
          the section, or on a phone it bands straight through the text. */}
      <section className="relative overflow-hidden bg-asp-black text-white py-14 md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <ScrollReveal className="lg:col-span-5">
            <span className={`${EYEBROW} text-asp-blue-light mb-4`}>Look inside</span>
            <h2 className="font-black text-3xl md:text-5xl leading-[1.08] mb-5">
              21 pages you can start on this week.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Diagrams, numbered requirements and the trap in each framework. These are real pages
              from the guide.
            </p>
            <ul className="list-none p-0 m-0 mb-9 border-t border-white/15">
              {FAN.map((f) => (
                <li key={f.page} className="flex items-baseline justify-between gap-4 border-b border-white/15 py-3.5">
                  <span className="font-semibold">{f.caption}</span>
                  <span className="text-sm text-white/60 shrink-0">Page {f.page}</span>
                </li>
              ))}
            </ul>
            <a href="#get" className={CTA_CLASS}>
              Send me the 5 frameworks
            </a>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <div className="relative w-[62%] ml-[4%] sm:w-[56%] sm:ml-[10%] lg:w-[62%] lg:ml-[7%] my-6 lg:my-4">
              <div
                className="pointer-events-none absolute -inset-y-[20%] -left-[10%] -right-[70%] bg-[radial-gradient(40%_50%_at_42%_50%,rgba(76,201,240,0.5),transparent_100%),radial-gradient(30%_50%_at_68%_50%,rgba(159,76,255,0.6),transparent_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 rotate-[10deg] translate-x-[40%] -translate-y-[1%] rounded-md overflow-hidden shadow-2xl ring-1 ring-white/30">
                <PageImage page={FAN[2].page} alt={`Page from the guide: ${FAN[2].caption}`} />
              </div>
              <div className="absolute inset-0 rotate-[5deg] translate-x-[21%] -translate-y-[2%] rounded-md overflow-hidden shadow-2xl ring-1 ring-white/30">
                <PageImage page={FAN[1].page} alt={`Page from the guide: ${FAN[1].caption}`} />
              </div>
              <div className="relative rounded-md overflow-hidden shadow-2xl ring-1 ring-white/30">
                <PageImage page={FAN[0].page} alt={`Page from the guide: ${FAN[0].caption}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE — a sequence, because the guide says each one feeds the
          next: numbered tiles on one connecting line, each beside its real
          opening page. */}
      <section className="relative py-14 md:py-20 lg:py-24 bg-[#eef2fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <ScrollReveal className="lg:sticky lg:top-10">
              <span className={`${EYEBROW} text-asp-purple mb-4`}>What is inside</span>
              <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-blue mb-4">
                Five frameworks, in the order they should be built.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Each one feeds the next. Start with the tagging in the first and the ownership rule in the second.
              </p>
              <a href="#get" className={`${CTA_CLASS} hidden lg:inline-block`}>
                Send me the 5 frameworks
              </a>
            </ScrollReveal>
          </div>

          <ol className="lg:col-span-8 list-none p-0 m-0">
            {FRAMEWORKS.map((f, i) => (
              <li key={f.n} className="relative pb-5">
                {/* One segment per row, running from this tile to the next. */}
                <span
                  className="absolute left-[23px] md:left-[27px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-asp-blue-light to-asp-purple"
                  aria-hidden="true"
                />
                <ScrollReveal delay={i * 50} className="flex gap-4 md:gap-6">
                  <span className="relative shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-[14px] bg-asp-gradient-accent text-white font-black text-lg md:text-xl shadow-asp-md">
                    {f.n}
                  </span>
                  <div className="flex-1 min-w-0 flex gap-5 items-center rounded-2xl bg-white shadow-asp-md p-5 md:p-6">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-lg md:text-xl text-asp-blue mb-2 leading-snug">{f.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed m-0">{f.body}</p>
                    </div>
                    <div className="hidden sm:block shrink-0 w-24 md:w-28 rotate-[3deg] rounded overflow-hidden shadow-asp-lg ring-1 ring-black/10">
                      <PageImage page={f.page} alt={`Opening page of ${f.title}`} />
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
            <li className="relative">
              <ScrollReveal delay={FRAMEWORKS.length * 50} className="flex gap-4 md:gap-6">
                <span className="relative shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-[14px] bg-asp-surface-navy text-white font-black text-[11px] md:text-xs uppercase tracking-widest">
                  Plus
                </span>
                <div className="flex-1 min-w-0 flex gap-5 items-center rounded-2xl bg-asp-surface-navy text-white shadow-asp-lg p-5 md:p-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-lg md:text-xl mb-2 leading-snug">Source tracking in your CRM</h3>
                    <p className="text-white/75 text-sm md:text-base leading-relaxed m-0">
                      The practical part: what to set up in Housecall Pro, Jobber, ServiceTitan,
                      HubSpot or GoHighLevel so every job carries the channel that produced it.
                    </p>
                  </div>
                  <div className="hidden sm:block shrink-0 w-24 md:w-28 rotate-[3deg] rounded overflow-hidden shadow-asp-lg ring-1 ring-white/15">
                    <PageImage page={18} alt="Opening page of the CRM source tracking section" />
                  </div>
                </div>
              </ScrollReveal>
            </li>
          </ol>
        </div>
      </section>

      {/* AUTHOR — approved bio with Joel's current public title (CEO).
          The headshot is Joel's explicit call for this page (2026-11-05). */}
      <section className="relative overflow-hidden py-14 md:py-16 bg-gradient-to-b md:bg-gradient-to-r from-asp-surface-navy via-asp-blue to-asp-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 items-center">
          <ScrollReveal className="md:col-span-7 lg:col-span-8">
            <span className={`${EYEBROW} text-asp-blue-light mb-4`}>Author:</span>
            <h2 className="font-black text-3xl md:text-4xl mb-4">Joel Keith, CEO, ASP</h2>
            <p className="text-white/85 text-lg leading-relaxed m-0">
              Joel Keith is the CEO of ASP, a growth-systems marketing agency for home service
              operators. He is a marketing operator who has spent years inside home service
              companies, building and refining the systems ASP now runs for clients. ASP is an
              Official Housecall Pro Affiliate Partner.
            </p>
          </ScrollReveal>
          <div className="md:col-span-5 lg:col-span-4">
            {/* Framed like the strategy call page: the shoulders run to the image
                edge, so the frame has to be what cuts them off. Unframed, the
                shirt ends in a hard vertical line on both sides. */}
            <div className="mx-auto w-[80%] md:w-full max-w-[340px] pt-5 rounded-[var(--radius-asp-2xl)] overflow-hidden bg-gradient-to-br from-asp-blue-light via-asp-blue to-asp-surface-navy ring-1 ring-white/20 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/team/joel-cutout.webp"
                alt="Joel Keith, CEO of ASP"
                width={900}
                height={1100}
                loading="lazy"
                className="block w-full h-auto aspect-[900/1100] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} heading="Questions about the guide" />

      {/* CLOSE — who it is for (filter, never diagnose), the guide, the ask. */}
      <section className="relative overflow-hidden py-14 md:py-16 lg:py-20 bg-[#eef2fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <ScrollReveal className="lg:col-span-5">
            <span className={`${EYEBROW} text-asp-purple mb-4`}>Who this is for</span>
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
          <ScrollReveal className="lg:col-span-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/guide/frameworks-book-open-flat.webp"
              alt="The 5 Marketing Frameworks for Trades Businesses: one copy lying open to The Lead Source Map with a second standing behind it"
              width={1430}
              height={1204}
              loading="lazy"
              className="w-full h-auto"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Site footer is hidden on standalone pages. */}
      <footer className="bg-asp-surface-navy py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} ASP ·{" "}
        <a href="/privacy-policy" className="underline hover:text-white">
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}
