import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ExpandableDetails } from "@/components/sections/ExpandableDetails";
import { SectionBreak } from "@/components/sections/SectionBreak";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, ServiceSchema } from "@/components/schema/StructuredData";

const PAGE_TITLE = "Custom AI Solutions for Home Service Businesses";
const PAGE_DESCRIPTION =
  "Custom AI applications and internal systems built around your own SOPs and data — intake agents, SOP search, reporting, integrations. You own the build.";
const PAGE_URL = "https://www.aspbranding.com/custom-ai-solutions";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ASP",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ASP — Assess. Strategize. Perform." }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aspbranding",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const TRADES = [
  { name: "HVAC", slug: "hvac", icon: "thermometer" },
  { name: "Plumbing", slug: "plumbing", icon: "wrench" },
  { name: "Roofing", slug: "roofing", icon: "home" },
  { name: "Electrical", slug: "electrical", icon: "zap" },
  { name: "Restoration", slug: "restoration", icon: "shield" },
  { name: "Home Inspection", slug: "home-inspection", icon: "search" },
  { name: "Flooring", slug: "flooring", icon: "grid" },
  { name: "Remodeling", slug: "remodeling", icon: "hammer" },
  { name: "Landscaping", slug: "landscaping", icon: "leaf" },
  { name: "Pressure Washing", slug: "pressure-washing", icon: "droplet" },
  { name: "Pest Control", slug: "pest-control", icon: "bug" },
  { name: "Appliance Repair", slug: "appliance-repair", icon: "plug" },
];

const ICONS: Record<string, string> = {
  thermometer: "M12 3a2 2 0 00-2 2v9.1a4 4 0 104 0V5a2 2 0 00-2-2z",
  wrench: "M14.7 6.3a4 4 0 01-5 5L4 17v3h3l5.7-5.7a4 4 0 015-5l2-2-3-3-2 2z",
  home: "M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10z",
  zap: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  shield: "M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6l8-3z",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4",
  grid: "M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z",
  hammer: "M14 4l6 6-3 3-6-6 3-3zM10 8l-7 7v5h5l7-7",
  leaf: "M4 20c0-8 5-13 16-13 0 9-5 14-13 14H4v-1zM7 17c3-4 6-6 9-7",
  droplet: "M12 3s6 6.4 6 10.5A6 6 0 016 13.5C6 9.4 12 3 12 3z",
  bug: "M9 8a3 3 0 016 0v5a3 3 0 11-6 0V8zM5 10h4m6 0h4M5 15h4m6 0h4M9 5L7 3m8 2l2-2",
  plug: "M9 3v5m6-5v5M6 8h12v3a6 6 0 01-12 0V8zM12 17v4",
};

const PILLARS = [
  {
    label: "Internal tools",
    body: "The application your business needs that nobody sells, built to the steps your team already follows.",
  },
  {
    label: "Intake and dispatch agents",
    body: "Your qualifying questions and your dispatch logic, running on a trigger instead of from memory.",
  },
  {
    label: "SOP search",
    body: "A tech in the field asks a question and gets your answer, out of your own documents.",
  },
  {
    label: "Integrations and reporting",
    body: "Two systems that finally share a record, and a report built for how you run.",
  },
];

const WHEN = [
  {
    label: "It has to be genuinely missing",
    body: "Before anything gets built, we check what your current CRM, scheduling and accounting tools already do. If a setting or an existing integration covers it, you get told that — and the build goes away. A build is what happens after that check comes back empty.",
  },
  {
    label: "It runs on your SOPs and your data",
    body: "The value is not the model. It is that the intake script, the dispatch rules, the escalation path and the pricing logic are yours, written down, and built in. A tool that ignores how you run gets abandoned in a month.",
  },
  {
    label: "A person stays in the loop where it matters",
    body: "Anything that touches a customer, a price or a commitment gets a human approval step. We build the draft, the routing and the record. Your team still makes the call.",
  },
  {
    label: "It runs where the work already runs",
    body: "A trigger from a job status, a form, a tag or an inbound call — not another login your team has to remember. If somebody has to decide to use it, it will not get used on a busy Tuesday.",
  },
  {
    label: "You own it",
    body: "The accounts, the workflows, the documentation and the build itself are in your name from day one. There is no exit fee and nothing to migrate. If you take it in-house, it goes with you, documented.",
  },
];

const BUILDS = [
  {
    label: "Internal tools",
    body: "A job costing view your bookkeeper can read, a warranty tracker, a subcontractor scorecard, a permit checklist tied to the job. Built to your steps.",
  },
  {
    label: "Intake agents",
    body: "A first response to a form or an inbound message that asks your qualifying questions, in your order, and hands a complete record to the office instead of a name and a phone number.",
  },
  {
    label: "Dispatch and scheduling agents",
    body: "The routing decisions your dispatcher makes from memory — drive time, skill match, priority, the customer who needs a callback first — written into rules that hold when the board gets busy.",
  },
  {
    label: "SOP search",
    body: "A search over your own procedures, training material and process notes. A new hire or a tech in the field asks a question and gets your answer. It also shows you which SOPs do not exist yet.",
  },
  {
    label: "Reporting built for how you run",
    body: "The numbers you rebuild by hand each month, assembled from the systems that hold them, in the shape you already think in. Not another dashboard nobody opens.",
  },
  {
    label: "Integrations between systems that do not talk",
    body: "Records moving between the CRM, the accounting package, the field app and the marketing stack without anyone retyping them. Most of the hours a build gives back come from here.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Take the AI Readiness Check",
    body: "About two minutes online. Seven questions about your CRM, your phones, your follow-up and your data. You get a read on where you stand before anyone scopes a build.",
  },
  {
    n: "02",
    title: "Systems and SOP review",
    body: "A 30-minute call, then we go through how the work runs: what is written down, what lives in somebody's head, and which of your current tools already covers part of it. You get that assessment whether or not you hire us.",
  },
  {
    n: "03",
    title: "The first build",
    body: "One piece, scoped narrow, in your accounts and in your name. It goes live and gets measured against hours back and jobs booked before anything else gets built on top of it.",
  },
];

const PROOF = [
  {
    industry: "Data moving between four platforms",
    body: "Lead source carried through to booked job across Housecall Pro, Jobber, HubSpot and GoHighLevel, so nobody retypes a record. It is the same pattern under every integration we build: a trigger, a handoff, and a number you can check afterwards.",
  },
  {
    industry: "A monthly numbers letter, assembled by AI and read by an owner",
    body: "A system of AI agents that checks the books, benchmarks margins, forecasts cash flow and tests pricing, then turns the result into one short letter a trades owner can act on. A person reviews every line before it goes anywhere.",
  },
];

const FAQS = [
  {
    question: "What is a custom AI solution?",
    answer:
      "It is software built for your business specifically, because nothing off the shelf does that job the way you run. That can be an internal tool, an intake or dispatch agent, a search over your own procedures, a report assembled from systems that do not talk, or an integration between two of them. It runs on your data, in your accounts.",
  },
  {
    question: "How is this different from AI Consulting?",
    answer:
      "AI Consulting works out what to automate and in what order, mostly using tools you already own. This page is what happens when the answer is that nothing you can buy does it. Most operators should start with consulting, because the cheapest build is the one you did not need. If you already know what is missing, start here.",
  },
  {
    question: "When is a custom build the wrong answer?",
    answer:
      "When your current tools already do it and nobody switched it on. That is the most common finding, and we would rather tell you on the scoping call than bill for a build. Custom work is also a poor fit where the process is not written down anywhere yet — we would be guessing at your rules instead of building them.",
  },
  {
    question: "What is an AI search over our SOPs?",
    answer:
      "A search across your own procedures, training material and process notes. A new hire or a tech in the field asks how something is handled and gets your answer, from your documents, rather than a general answer from the internet. It only knows what you give it, which means it also shows you exactly which procedures do not exist yet.",
  },
  {
    question: "Do you build on our data, and where does it live?",
    answer:
      "Yes, and it stays in your accounts. Builds sit on the systems you already use for scheduling, invoicing and customer records, and any storage or model service is set up under your own account. We work inside it. When an engagement ends, nothing has to be extracted from a platform we control.",
  },
  {
    question: "Who owns what you build?",
    answer:
      "You do, from day one. The accounts, the workflows, the documentation and the build itself are in your name. There is no exit fee and nothing to migrate. If you take it in-house or move to another firm, it goes with you, documented well enough for somebody else to maintain it.",
  },
  {
    question: "Do we have to be on Housecall Pro?",
    answer:
      "No. Housecall Pro is where we go deepest, and if you are on it, our AI Integration page covers its built-in AI stack. Custom builds are separate from that and run on whatever you use for scheduling, invoicing and customer records. We build to the tools you have rather than asking you to change them first.",
  },
  {
    question: "How is this different from hiring a developer?",
    answer:
      "A developer builds what you specify. We start a step earlier: where the hours go, whether the tools you already own cover it, and what the result gets measured against. Then only the missing piece gets built, inside your accounts, tied to hours saved and jobs booked. You own the result either way.",
  },
  {
    question: "How long does a custom build take?",
    answer:
      "There is no honest fixed answer, and a firm quoting you one before seeing your systems is quoting a sales number. It depends on how much of your process is written down, how clean the data is, and how many systems have to be involved. Scope comes out of the systems review, and you see it before anything starts.",
  },
  {
    question: "What happens when it breaks, or when our SOPs change?",
    answer:
      "Builds are documented and handed over so your team can maintain them, and we stay on for changes if you want us to. Procedures change constantly in this industry, which is why nothing is built as a black box. When a rule changes, the place to change it is visible, named, and written down.",
  },
];

const RELATED = [
  {
    label: "Advisory",
    href: "/ai-consulting",
    title: "AI Consulting",
    body: "Where the hours go, what to automate first, and whether the tools you already own can do it.",
  },
  {
    label: "Platform",
    href: "/ai-integration",
    title: "AI Integration",
    body: "On Housecall Pro? Its built-in AI stack, configured by an Official Affiliate Partner.",
  },
  {
    label: "Pillar",
    href: "/growth-system",
    title: "The Growth System",
    body: "Marketing, operations, and follow-up on one stack, against one revenue number.",
  },
];

export default function CustomAiSolutionsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Custom AI Solutions", url: PAGE_URL },
        ]}
      />
      {/* No price field — method page. */}
      <ServiceSchema
        name="Custom AI Solutions"
        description="Custom AI applications and internal systems for home service businesses: intake and dispatch agents, SOP search, reporting, and integrations built around the client's own procedures and data."
        url={PAGE_URL}
        serviceType="Custom AI Software Development"
        audienceType="Home service businesses"
      />

      <Hero
        eyebrow="Services"
        heading="Custom AI Solutions"
        subheading="Applications and internal systems built around your own SOPs and your own data — the work no off-the-shelf tool does the way you run it. You own everything we build."
        ctaText="Book a call"
        ctaUrl="/contact"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/backgrounds/growth-system-bg.png"
        imagePosition="72% 62%"
        size="compact"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal animation="stagger">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm"
                >
                  <h2 className="font-black text-lg text-asp-black">{p.label}</h2>
                  <p className="mt-2 text-base leading-relaxed text-black/70">{p.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Value prop */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue">
                Custom AI development
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight text-asp-black">
                What a custom AI build covers
              </h2>
              <p className="mt-5 text-lg text-black/70 leading-relaxed">
                A custom build starts with something your business does a specific way that no
                software sells: the intake questions your office asks, the dispatch rules only your
                dispatcher carries, the report somebody rebuilds by hand every month. We turn that
                into an application running on your data, inside your accounts. You own it the day it
                ships.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
                >
                  Book a call
                </Link>
                <Link
                  href="/ai-consulting"
                  className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
                >
                  See AI Consulting
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[var(--radius-asp-2xl)] shadow-asp-lg">
                <Image
                  src="/images/portfolio/portfolio-mockup.avif"
                  alt="An internal tool built by ASP, shown on desktop and mobile"
                  width={880}
                  height={660}
                  className="h-auto w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trade grid */}
      <section className="py-14 md:py-16 bg-asp-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue-light">
                Every trade, every home service
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight">
                Custom AI builds for roofing, HVAC, plumbing, electrical and every other home service
                trade
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70 leading-relaxed">
                What gets built changes by trade, because the procedures do. Roofing runs on storm
                intake and adjuster paperwork; HVAC and electrical on maintenance agreements and
                seasonal dispatch; restoration on documentation timelines. The method is the same
                every time: read how you run, then build the missing piece.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {TRADES.map((t) => (
                <div
                  key={t.slug}
                  className="flex flex-col items-center gap-3 rounded-[var(--radius-asp-xl)] border border-asp-blue-light/25 bg-white/[0.03] px-4 py-6 text-center transition-colors hover:border-asp-blue-light/60"
                >
                  <svg
                    className="h-8 w-8 text-asp-blue-light"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[t.icon]} />
                  </svg>
                  <span className="font-bold text-base">{t.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mx-auto mt-8 max-w-3xl text-center text-base text-white/60 leading-relaxed">
              If your trade is not on this list, the method still applies — the scoping conversation
              is what tells us where your hours go.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ExpandableDetails heading="More details about our custom AI builds">
        <h3 className="font-black text-2xl text-asp-black">When a custom build is the right answer</h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          Most businesses asking for custom AI need less of it than they think. The tools you already
          pay for usually do more than anyone switched on, and a build you did not need is the most
          expensive thing on this page. So the first question is always whether something off the
          shelf already covers it.
        </p>

        <ul className="mt-7 space-y-5">
          {WHEN.map((l) => (
            <li key={l.label} className="flex gap-4">
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-asp-blue"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-black text-asp-black">{l.label}</p>
                <p className="mt-1 text-base leading-relaxed text-black/70">{l.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <hr className="my-10 border-black/10" />

        <h3 className="font-black text-2xl text-asp-black">What we build</h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          There is no single shape to this work. Some builds are one integration that ends a
          spreadsheet; others are an application a whole department uses daily. These are the shapes
          the work usually takes.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {BUILDS.map((w) => (
            <div
              key={w.label}
              className="rounded-[var(--radius-asp-lg)] border border-gray-200 bg-white p-5 shadow-asp-sm"
            >
              <p className="font-black text-asp-black">{w.label}</p>
              <p className="mt-1 text-base leading-relaxed text-black/70">{w.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-7 text-base leading-relaxed text-black/70">
          What we need from you is access to your own accounts, time from whoever knows the process
          best, and an honest answer about what breaks most often. Custom builds are not run as an
          isolated service here — they sit inside{" "}
          <Link href="/growth-system" className="text-asp-blue underline underline-offset-4">
            the Growth System
          </Link>{" "}
          alongside the marketing and reporting work, against one revenue number. If you are not yet
          sure a build is the right first step, start with{" "}
          <Link href="/ai-consulting" className="text-asp-blue underline underline-offset-4">
            AI Consulting
          </Link>{" "}
          instead. Current options are on the{" "}
          <Link href="/pricing" className="text-asp-blue underline underline-offset-4">
            pricing page
          </Link>
          .
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
          >
            Book a call
          </Link>
        </div>
      </ExpandableDetails>

      {/* Proof — systems ASP has actually built and runs */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Systems we have built and run
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {PROOF.map((p) => (
                <div
                  key={p.industry}
                  className="rounded-[var(--radius-asp-2xl)] border border-gray-200 bg-white p-7 shadow-asp-md"
                >
                  <h3 className="font-black text-xl text-asp-black">{p.industry}</h3>
                  <p className="mt-3 text-base leading-relaxed text-black/70">{p.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-8 max-w-6xl text-base text-black/55 leading-relaxed">
              The results published on our{" "}
              <Link href="/case-studies" className="text-asp-blue underline underline-offset-4">
                case studies page
              </Link>{" "}
              are marketing and paid media outcomes — we do not present them as custom-build results,
              because they are not. What a build gets measured against is narrower and more useful:
              hours back, records that stop being retyped, and jobs that stop falling through a gap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialAnchor
        quote="The team at ASP knows the business very well and continues to come up with ideas that have my small business thriving."
        attribution="Mike"
        variant="dark"
        size="sm"
        widthClassName="max-w-6xl"
      />

      {/* How to start */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black text-center">
              How to start with ASP
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm"
                >
                  <span className="font-black text-3xl text-asp-blue-light">{s.n}</span>
                  <h3 className="mt-3 font-black text-lg text-asp-black">{s.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-black/70">
                    {s.n === "01" ? (
                      <>
                        About two minutes online. Seven questions about your CRM, your phones, your
                        follow-up and your data.{" "}
                        <Link
                          href="/ai-readiness"
                          className="text-asp-blue underline underline-offset-4"
                        >
                          Take the check
                        </Link>
                        .
                      </>
                    ) : (
                      s.body
                    )}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Run the Growth Diagnostic
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                Book a call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionBreak />

      <FAQAccordion
        faqs={FAQS}
        heading="Frequently Asked Questions"
        columns={2}
        widthClassName="max-w-6xl"
      />

      <RelatedPages items={RELATED} heading="Related across the Growth System" />

      {/* Closing CTA */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Have something in mind that nothing off the shelf does?
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Book a call and walk us through how the work runs today. We will tell you whether a
              tool you already pay for covers it, and if it does not, what building it would involve.
              Either way you leave with an answer, not a pitch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Book a call
              </Link>
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                Run the Growth Diagnostic
              </Link>
            </div>
            <p className="mt-8 text-sm text-black/50">
              Every account, workflow, and build in your name · No exit fees · A person approves
              anything that reaches a customer.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
