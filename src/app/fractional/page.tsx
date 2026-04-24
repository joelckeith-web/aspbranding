import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, ServiceSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
  title: "Fractional C-Suite — CFO, CMO, COO Leadership",
  description:
    "Fractional CFO, CMO, and COO leadership for $5M–$20M owner-operated service businesses. One integrated team. Leadership, not more vendors.",
};

const SYMPTOMS = [
  "You're still the one making every major decision.",
  "Financial planning happens in spreadsheets you don't fully trust.",
  "Marketing is whatever worked last quarter.",
  "Operations only run smoothly when you're in the building.",
  "You have a team — but you're still the bottleneck.",
];

const PILLARS = [
  {
    title: "Finance (CFO)",
    tagline: "Numbers you can trust. Decisions you can defend.",
    points: [
      "Monthly financials you can actually read.",
      "Cash flow you can forecast, not guess.",
      "Tax strategy that saves real money.",
      "Financial decisions based on data, not gut.",
    ],
  },
  {
    title: "Marketing (CMO)",
    tagline: "Spend tied to revenue. Growth that scales.",
    points: [
      "Marketing spend tied directly to revenue.",
      "Lead generation systems engineered to scale.",
      "Brand strategy that compounds growth.",
      "Content and campaigns that convert.",
    ],
  },
  {
    title: "Operations (COO)",
    tagline: "Processes that work without you in the room.",
    points: [
      "Processes built to run without micromanagement.",
      "Team structure designed for the next stage.",
      "Systems that scale without breaking.",
      "You stop being the single point of failure.",
    ],
  },
  {
    title: "Integrated Team",
    tagline: "One leadership group. One direction.",
    points: [
      "CFO, CMO, and COO working from the same plan.",
      "No disconnected vendors pulling in different directions.",
      "Finance, marketing, and operations aligned on the same goals.",
      "Decisions made together, executed coherently.",
    ],
  },
];

const OUTCOMES = [
  {
    stat: "Clarity",
    label: "You stop guessing what the numbers mean or what the next move should be.",
  },
  {
    stat: "Capacity",
    label: "You get your time back. Strategic decisions live with the leadership team.",
  },
  {
    stat: "Coherence",
    label: "Finance, marketing, and operations stop contradicting each other.",
  },
  {
    stat: "Leverage",
    label: "Every dollar of marketing and every ops hire is planned against a forecast, not a hunch.",
  },
];

const SERVICES = [
  {
    title: "CFO — Financial Clarity & Control",
    body: "Bookkeeping, reporting, forecasting, and tax strategy. The financial clarity you need to make confident decisions and the strategic partnership that makes the numbers actually shape the business.",
    tiers: [
      { label: "Foundation", price: "from $600/mo", body: "Clean books and monthly reporting." },
      {
        label: "C-Suite",
        price: "from $2,200/mo",
        body: "Strategic partnership with tax prep, forecasting, and ongoing advisory.",
      },
    ],
  },
  {
    title: "CMO — Marketing Leadership",
    body: "Brand strategy, lead generation, content systems, and growth planning. Marketing that actually drives revenue — managed by an operator who has scaled marketing organizations before.",
    tiers: [{ label: "Custom Quote", price: "based on stage", body: "Scoped to your growth stage, channel mix, and marketing needs." }],
  },
  {
    title: "COO — Operational Excellence",
    body: "Process builds, team structure, systems design, and execution discipline. Operations that scale without you in the center of every decision.",
    tiers: [
      {
        label: "Custom Quote",
        price: "based on complexity",
        body: "Scoped to your operational complexity and team size.",
      },
    ],
  },
];

const FIT_CRITERIA = {
  fit: [
    "$5M–$20M in annual revenue.",
    "You have a team, but you're still making every strategic decision.",
    "Financial planning is reactive, not proactive.",
    "Marketing works but you can't explain why or scale it consistently.",
    "Operations depend on you being in the building.",
    "You're ready to lead like a CEO, not just work like an operator.",
  ],
  notFit: [
    "Under $5M — you need execution more than leadership right now.",
    "Over $20M — you likely need full-time C-suite with equity.",
    "Not willing to look at your numbers honestly.",
    "Looking for task execution, not strategic direction.",
  ],
};

const VS_VENDORS = [
  {
    them: "Vendors execute assignments.",
    us: "Leaders strategize, make decisions, and connect the dots across finance, marketing, and operations.",
  },
  {
    them: "Each vendor is accountable to their line item.",
    us: "The leadership team is accountable to the business's P&L.",
  },
  {
    them: "Coordination between vendors becomes your job.",
    us: "Coordination between finance, marketing, and operations is built into the engagement.",
  },
  {
    them: "You hire to fill gaps and hope they line up.",
    us: "You hire for leadership capacity and let the strategy drive the filling.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    body: "30 minutes. No pitch. We get the shape of the business, where you feel stuck, and what good would look like a year from now.",
  },
  {
    step: "02",
    title: "Financial Review",
    body: "We look under the hood. Bookkeeping, cash flow, margin structure, marketing ROI, operational bottlenecks — whatever's most load-bearing.",
  },
  {
    step: "03",
    title: "Custom Plan",
    body: "We recommend the right engagement — CFO Foundation, CFO C-Suite, CMO, COO, or the integrated team. No pressure. No sales games. Just clarity.",
  },
];

const FAQS = [
  {
    question: "Do I need all three — CFO, CMO, and COO?",
    answer:
      "No. Most clients start with the CFO engagement — financial clarity has to come first — and layer in CMO or COO as the business is ready. Or bring in the full integrated team from day one if that's what the business needs. It's scoped to you.",
  },
  {
    question: "How is this different from hiring vendors?",
    answer:
      "Vendors execute assignments. A fractional leadership team strategizes, makes decisions, and connects the dots across every function. You don't need more people doing tasks — you need C-level thinking guiding the business.",
  },
  {
    question: "I already have a team. Why do I need this?",
    answer:
      "Most $5M–$20M operators already have a team. The gap isn't doers — it's senior leadership translating strategy into execution. Fractional C-suite fills that gap without the cost or commitment of a full-time hire.",
  },
  {
    question: "What if I'm not ready to commit to everything?",
    answer:
      "Start with one function. CFO Foundation at $600/mo is a low-friction entry point. Add CMO and COO leadership as the business grows into it.",
  },
  {
    question: "Who is this NOT for?",
    answer:
      "Under $5M — you need execution, not leadership. Over $20M — you likely need full-time C-suite with equity. Not willing to look honestly at the numbers — this engagement won't work. Looking for task execution — hire a vendor instead.",
  },
];

export default function FractionalPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema items={[{ name: "Home", url: "https://aspbranding.com/" }, { name: "Fractional C-Suite", url: "https://aspbranding.com/fractional" }]} />
      <ServiceSchema
        name="Fractional C-Suite"
        description="Fractional CFO, CMO, and COO leadership for $5M–$20M owner-operated service businesses. One integrated team delivering strategic direction, not just vendor output."
        url="https://aspbranding.com/fractional"
        serviceType="Fractional Executive Leadership"
      />
      <Hero
        eyebrow="Fractional C-Suite"
        heading="You built a great business.<br>Now you need a <span class='hero-text-gradient'>leadership team.</span>"
        subheading="Fractional CFO, CMO, and COO leadership for $5M–$20M owner-operated service businesses. C-level direction — not more vendors."
        ctaText="Book a discovery call"
        ctaUrl="/contact?topic=fractional"
        cta2Text="See what you get"
        cta2Url="#pillars"
        bgType="image"
        imageUrl="/images/backgrounds/team-at-work.jpg"
        imagePosition="center center"
      />

      {/* Symptoms */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(159, 76, 255, 0.18), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Why you&apos;re here
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
                You&apos;ve got something real. But you&apos;re still the one holding it together.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Revenue is strong. The team is in place. And yet every meaningful decision still runs through you.
              </p>
            </div>

            <ul className="space-y-3">
              {SYMPTOMS.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-4 rounded-[var(--radius-asp-lg)] bg-white/[0.04] border border-white/10 p-5 lg:p-6"
                >
                  <span
                    aria-hidden
                    className="mt-1 w-2 h-2 rounded-full bg-asp-purple flex-shrink-0"
                  />
                  <span className="text-white/85 text-base lg:text-lg">{s}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* What Real Leadership Looks Like */}
      <section id="pillars" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What real leadership looks like
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                CFO, CMO, and COO expertise working together on your business.
              </h2>
              <p className="text-gray-600 text-lg">
                Three disciplines. One integrated leadership team. Every engagement is scoped to what your business actually needs today.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 lg:p-8 bg-white shadow-asp-sm"
                >
                  <h3 className="font-black text-xl lg:text-2xl text-asp-blue mb-1">
                    {p.title}
                  </h3>
                  <p className="text-asp-purple font-semibold text-sm mb-5">{p.tagline}</p>
                  <ul className="space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-gray-700 text-sm lg:text-base">
                        <svg
                          className="w-5 h-5 mt-0.5 flex-shrink-0 text-asp-purple"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What you gain */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(159, 76, 255, 0.2), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What you gain
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Stop juggling vendors. Start leading.
              </h2>
              <p className="text-white/70 text-lg">
                Fractional leadership is measured in what the business feels like after it&apos;s in place. Four specific shifts.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {OUTCOMES.map((o) => (
                <div
                  key={o.stat}
                  className="rounded-[var(--radius-asp-2xl)] bg-asp-black border-2 border-asp-purple/40 hover:border-asp-purple transition-colors p-6 lg:p-8 flex flex-col items-center text-center"
                >
                  <div className="font-black text-3xl lg:text-4xl 2xl:text-5xl text-asp-purple leading-none mb-4">
                    {o.stat}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{o.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services + pricing */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Fractional leadership services
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Start with what you need most. Add the rest as you scale.
              </h2>
              <p className="text-gray-600 text-lg">
                Most clients begin with the CFO engagement — financial clarity is the foundation everything else is built on. Then layer in marketing or operations leadership when the business is ready. Or bring in the full integrated team from day one.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="space-y-6 lg:space-y-8">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 lg:p-9 bg-white shadow-asp-sm"
                >
                  <h3 className="font-black text-xl lg:text-2xl text-asp-blue mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{s.body}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {s.tiers.map((t) => (
                      <div
                        key={t.label}
                        className="rounded-[var(--radius-asp-lg)] border border-asp-purple/20 bg-asp-purple/[0.03] p-5"
                      >
                        <div className="font-bold text-xs uppercase tracking-widest text-asp-purple mb-1">
                          {t.label}
                        </div>
                        <div className="font-black text-xl text-asp-blue mb-2">{t.price}</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{t.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fit */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Is this you?
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                We&apos;re direct about fit.
              </h2>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                Fractional C-suite is a premium engagement. Two quick lists — who it works for, and who it doesn&apos;t. If either list surprises you, we can discuss it on the discovery call.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-[var(--radius-asp-2xl)] p-7 lg:p-9 border-2 border-asp-purple/50 bg-white/[0.04]">
                <h3 className="font-black text-2xl text-asp-purple mb-5">You&apos;re a fit if</h3>
                <ul className="space-y-3">
                  {FIT_CRITERIA.fit.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/85 text-sm lg:text-base">
                      <span aria-hidden className="mt-1 text-asp-purple flex-shrink-0">
                        ✓
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[var(--radius-asp-2xl)] p-7 lg:p-9 border-2 border-white/10 bg-white/[0.02]">
                <h3 className="font-black text-2xl text-white/50 line-through mb-5">Not a fit if</h3>
                <ul className="space-y-3">
                  {FIT_CRITERIA.notFit.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/50 text-sm lg:text-base">
                      <span aria-hidden className="mt-1 text-white/30 flex-shrink-0">
                        ✗
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership vs Execution */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Leadership vs. execution
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                The difference between hiring vendors and bringing in leadership.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="space-y-4">
              {VS_VENDORS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 rounded-[var(--radius-asp-xl)] border border-gray-200 overflow-hidden"
                >
                  <div className="p-6 lg:p-7 bg-gray-50 text-gray-600 text-sm lg:text-base border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">
                      Vendor model
                    </div>
                    {row.them}
                  </div>
                  <div className="p-6 lg:p-7 bg-white text-asp-blue text-sm lg:text-base">
                    <div className="font-bold text-xs uppercase tracking-widest text-asp-purple mb-2">
                      Fractional leadership
                    </div>
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-asp-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                How it starts
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Three steps. No pressure. No sales games.
              </h2>
              <p className="text-white/70 text-lg">
                Just clarity on where you are, where you want to go, and whether we&apos;re the right team to get you there.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {PROCESS.map((p) => (
                <div
                  key={p.step}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.04] border border-asp-purple/25 p-7"
                >
                  <div className="font-black text-4xl text-asp-purple mb-3 leading-none">
                    {p.step}
                  </div>
                  <h3 className="font-black text-xl mb-2">{p.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{p.body}</p>
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
            body: "The execution layer that runs underneath a Fractional engagement. Marketing, operations, and follow-up integrated into one stack.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            title: "Pricing & tiers",
            body: "Foundation, Growth, and Premier Partnership — the retainer tiers that Fractional leadership typically runs alongside.",
          },
          {
            label: "Proof",
            href: "/case-studies",
            title: "Case Studies",
            body: "Industry-anonymized results from operators running the Growth System. The track record behind the leadership engagement.",
          },
        ]}
        variant="dark"
      />

      <TestimonialAnchor quote="More than 10X ROI." />

      <FAQAccordion faqs={FAQS} />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5">
              Ready to stop guessing?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Book a 30-minute discovery call. We&apos;ll dig into where you are, where you want to go, and whether we&apos;re the right team to get you there. No pressure. No sales games. Just clarity.
            </p>
            <Link
              href="/contact?topic=fractional"
              className="inline-flex items-center justify-center gap-2 bg-asp-purple text-white font-bold px-8 py-4 rounded-[var(--radius-asp-lg)] hover:bg-white hover:text-asp-purple border-2 border-asp-purple transition-colors"
            >
              Book a discovery call
              <span aria-hidden>&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
