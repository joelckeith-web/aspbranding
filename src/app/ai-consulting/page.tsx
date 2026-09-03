import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, ServiceSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
  title: "AI Consulting for Home Service Businesses",
  description:
    "AI consulting for home service businesses: automations for data entry, follow-up, and operations, SOP search, and custom AI builds — measured against booked jobs.",
  alternates: { canonical: "/ai-consulting" },
};

// Where the hours go. The CRM is one surface here, not the axis — Joel's direction 2026-09-03.
const AREAS = [
  {
    label: "Office & data entry",
    headline: "If someone retypes it, we automate it.",
    body: "Pulling job info from the CRM into a spreadsheet. Updating records after a job closes. Copying invoice details into accounting. The office work that eats hours and adds typos — moved between systems without anyone touching it.",
  },
  {
    label: "Follow-up that runs itself",
    headline: "Tag a client. The rest happens.",
    body: "Review requests after the job. Follow-ups on estimates and quotes. Reminders on unpaid invoices. Maintenance reminders. One tag in your CRM starts the sequence, and it stops the moment the customer replies.",
  },
  {
    label: "Operations & logistics",
    headline: "The handoffs that get dropped when it's busy.",
    body: "Scheduling confirmations, dispatch updates, job-status texts to the customer, parts and material tracking. The office-to-field handoffs that fall through on a busy Tuesday — running on a trigger instead of a memory.",
  },
  {
    label: "SOP search & custom tools",
    headline: "Your procedures, answered.",
    body: "An AI search over your own SOPs, so a new hire or a tech in the field asks a question and gets your answer. Plus the builds that don't exist off the shelf: intake agents, reporting built for how you run, two systems that finally talk to each other.",
  },
];

const METHOD = [
  {
    stage: "Crawl",
    title: "Map the manual work.",
    body: "Find where the hours go: data entry, missed follow-ups, hunting for information. Clean up the data first. Then automate the one thing costing the most.",
  },
  {
    stage: "Walk",
    title: "Automate the follow-up and the office.",
    body: "Tag-triggered sequences for reviews, quotes, and invoices. Data flowing between systems without anyone retyping it. Each one measured before the next one starts.",
  },
  {
    stage: "Run",
    title: "Build what's missing.",
    body: "Custom AI tools: an SOP search, an intake agent, reporting built for how you run. Only after crawl and walk have proven out.",
  },
];

// Keep this list to what exists today. Add a card when an engagement ships — never ahead of it.
const PROOF = [
  {
    title: "Data that moves itself between systems",
    body: "Lead source to booked job, wired across four platforms — Housecall Pro, Jobber, HubSpot, GoHighLevel — so nobody retypes a record. The same pattern behind every automation we build: a trigger, a handoff, a number to check.",
  },
  {
    title: "A monthly numbers letter, built by AI, read by an owner",
    body: "Five AI agents check the books, benchmark margins, forecast cash flow, and test pricing. The output is one short letter a trades owner can act on. A human reviews every line before it goes out.",
  },
  {
    title: "Our own agency runs on it",
    body: "Research, content drafts, QC checks, monthly reports, and finding the right SOP at ASP run on an AI system we built ourselves. Every piece still gets a human approval before it ships.",
  },
];

const VS_OFF_THE_SHELF = [
  {
    them: "A chatbot on the website, and nothing behind it.",
    us: "Automations wired into the office, the follow-up, and the field — where the hours go.",
  },
  {
    them: "Another login your team has to remember to use.",
    us: "Runs from a tag, a form, or a job status. Nobody has to remember.",
  },
  {
    them: "A strategy deck and a list of tools to buy.",
    us: "A working automation, measured against booked jobs, before the next one starts.",
  },
  {
    them: "Automation that breaks when a vendor changes a menu.",
    us: "Documented workflows you own, in your accounts, with no exit fee.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "AI Readiness Check",
    body: "Two minutes online. Seven questions about your CRM, phones, follow-up, and data. You get a crawl, walk, or run result and the first move to make.",
    href: "/ai-readiness",
    linkText: "Take the check",
  },
  {
    step: "02",
    title: "Systems audit",
    body: "A 30-minute call, then we map where the manual work lives: office, field, follow-up, paperwork, reporting. We find the hours and what an automation would give back.",
  },
  {
    step: "03",
    title: "First automation",
    body: "One automation, in your tools, in your accounts. It goes live and gets measured — hours back, jobs booked — before we start the next.",
  },
  {
    step: "04",
    title: "Walk, then run",
    body: "Follow-up and office automation next. Custom builds after that, scoped from what the first two proved. Monthly review against the same revenue number.",
  },
];

const FAQS = [
  {
    question: "What's the difference between AI Integration and AI Consulting at ASP?",
    answer:
      "AI Integration is one platform: the Housecall Pro AI stack, configured by an Official Affiliate Partner. AI Consulting covers the whole business — automations for data entry, follow-up, scheduling, and paperwork, custom AI tools like an SOP search, and builds that don't exist off the shelf. If you're on Housecall Pro and want its built-in AI running right, start with AI Integration. For everything else, start here.",
  },
  {
    question: "What kinds of work can you automate?",
    answer:
      "Anything that runs on copy-and-paste or memory. Pulling job info from the CRM into a spreadsheet. Updating records after a job closes. Sending review requests, quote follow-ups, and invoice reminders when a client gets tagged. Scheduling confirmations and job-status texts. Reports that build themselves. If a person moves data from one screen to another by hand, that's a candidate.",
  },
  {
    question: "What is an AI search for SOPs?",
    answer:
      "A search over your own procedures, training docs, and process notes. A new hire or a tech in the field asks a question — how do we handle a callback, what's the checklist for this job — and gets your answer, from your documents, not a guess. It only knows what you give it, so it also shows you which SOPs are missing.",
  },
  {
    question: "Do I have to be on Housecall Pro?",
    answer:
      "No. Housecall Pro is where we go deepest, and partner discounts apply on new accounts if you switch. Automations run on whatever you use for scheduling, invoicing, and customer records — we build to the tools you have.",
  },
  {
    question: "Do you build custom AI, or set up tools we already have?",
    answer:
      "Both, in that order. Most businesses get the biggest return from switching on what their current tools already do — tagged follow-up sequences, reminders, missed-call text back. Custom builds come after that, for the gaps: an SOP search, an intake agent, data moving between two systems that don't talk, reporting built for how you run.",
  },
  {
    question: "What does AI consulting cost?",
    answer:
      "It depends on where the work lives. Housecall Pro's built-in AI is configured inside the Growth tier. Custom AI and automation builds are part of Premier. A standalone build is scoped after the readiness check and systems audit, and you get the price in writing before work starts. The AI tools themselves are a separate line, paid to the vendor.",
  },
  {
    question: "How is this different from hiring a developer?",
    answer:
      "A developer builds what you spec. We start earlier: where the hours go, whether the tools you have can already do it, and what to measure. Then we build only the piece that's missing, inside your accounts, and tie it to hours saved and jobs booked. You own the result either way — we make sure it's the right thing to build.",
  },
  {
    question: "What does the AI readiness check look at?",
    answer:
      "Seven questions: your CRM, what happens to missed calls, how quotes get followed up, whether you can see which marketing booked which job, how reviews get requested, who would own AI inside the business, and what you want it to do first. It takes about two minutes and gives you a crawl, walk, or run result with a first move.",
  },
  {
    question: "Who owns the automations when the engagement ends?",
    answer:
      "You do. Every workflow, agent, account, and report is built in your name from day one. There's no exit fee and nothing to migrate. If you take it in-house or move it to another agency, it goes with you, documented.",
  },
  {
    question: "Is AI consulting a fit for a business under $1M?",
    answer:
      "Usually the first move is smaller than consulting. Under $1M, the highest-return step is one automation — missed-call text back, or review requests that send themselves — plus clean lead tracking. The readiness check will tell you that honestly. The Growth System is built for operators already running $1M+.",
  },
];

export default function AIConsultingPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "AI Consulting", url: "https://www.aspbranding.com/ai-consulting" },
        ]}
      />
      <ServiceSchema
        name="AI Consulting for Home Service Businesses"
        description="AI consulting for home service businesses: automations for office data entry, customer follow-up, and operations, AI search over internal SOPs, and custom AI builds. Measured against booked jobs."
        url="https://www.aspbranding.com/ai-consulting"
        serviceType="AI Consulting Services"
      />
      <Hero
        eyebrow="AI Consulting"
        heading="AI Consulting for<br><span class='hero-text-gradient'>Home Service Businesses</span>"
        subheading="Anywhere your business runs on manual work — data entry, follow-ups, scheduling, paperwork, finding the right procedure — AI and automation can do the work. We find those spots, build it, and measure it against booked jobs."
        ctaText="Book a call"
        ctaUrl="/contact?topic=ai-consulting"
        cta2Text="Check your AI readiness"
        cta2Url="/ai-readiness"
        bgType="image"
        imageUrl="/images/backgrounds/hero-trades-1.jpg"
        imagePosition="center center"
      />

      {/* Where the hours go */}
      <section className="relative py-16 md:py-20 lg:py-24 2xl:py-32 text-white overflow-hidden bg-asp-black">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76, 201, 240, 0.14), transparent 70%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(159, 76, 255, 0.12), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Where the hours go
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5">
                Where AI and automation fit in a home service business
              </h2>
              <p className="text-white/70 text-lg">
                Start with where the hours go. Most of them aren&apos;t in the field. They&apos;re in the office, in the follow-up, and in the handoffs between the two.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {AREAS.map((a) => (
                <div
                  key={a.label}
                  className="relative rounded-[var(--radius-asp-2xl)] p-[1.5px] bg-gradient-to-br from-asp-blue-light/40 via-asp-purple/30 to-asp-blue-light/40"
                >
                  <div className="relative h-full rounded-[calc(var(--radius-asp-2xl)-1px)] bg-asp-black p-8 2xl:p-10 flex flex-col">
                    <div className="inline-block self-start font-bold text-[11px] uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-gradient-to-r from-asp-blue-light to-asp-purple text-white">
                      {a.label}
                    </div>
                    <h3 className="font-black text-2xl 2xl:text-3xl mb-4 leading-tight">
                      {a.headline}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-white/60 text-sm mt-10">
              Not sure where your hours go?{" "}
              <Link href="/ai-readiness" className="text-asp-blue-light hover:text-white font-semibold">
                Take the two-minute readiness check
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Method: crawl, walk, run */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                The method
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                How we roll out AI: crawl, walk, run
              </h2>
              <p className="text-gray-600 text-lg">
                The operators who get a return from AI don&apos;t buy six tools in a month. They add one layer, prove it, then add the next. We run every engagement the same way.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {METHOD.map((m) => (
                <div
                  key={m.stage}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 lg:p-8 bg-white shadow-asp-sm"
                >
                  <div className="font-black text-3xl text-asp-purple mb-3 leading-none">{m.stage}</div>
                  <h3 className="font-black text-xl text-asp-blue mb-2">{m.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-gray-500 text-sm mt-10">
              The long version is in our guide to{" "}
              <Link href="/blog/ai-for-home-service-businesses" className="text-asp-blue-light hover:text-asp-blue font-semibold">
                adopting AI in a home service business
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Proof — only what exists today */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
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
                Proof
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                AI systems ASP builds and runs today
              </h2>
              <p className="text-white/70 text-lg">
                We keep this section to what exists. It grows as engagements ship.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {PROOF.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 hover:border-asp-blue-light/60 transition-colors p-7 lg:p-8"
                >
                  <h3 className="font-black text-xl 2xl:text-2xl text-white mb-3">{p.title}</h3>
                  <p className="text-white/70 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Image
                src="/partners/hcp-logo-white.png"
                alt="Housecall Pro"
                width={600}
                height={128}
                className="w-auto h-8 md:h-10"
              />
              <span className="font-bold text-xs uppercase tracking-widest text-asp-blue-light">
                Official Housecall Pro Affiliate Partner
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison — product-you-buy vs built-into-how-you-run (the "real AI vs slop" axis lives on /ai-integration) */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                The difference
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                AI you buy off the shelf vs. AI built into how you run
              </h2>
              <p className="text-gray-600 text-lg">
                Most AI offers for the trades are a product with a login. Ours starts with the work your team already does by hand.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="space-y-4">
              {VS_OFF_THE_SHELF.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 rounded-[var(--radius-asp-xl)] overflow-hidden"
                >
                  <div className="p-6 lg:p-7 bg-white text-asp-blue text-sm lg:text-base border border-gray-200 rounded-[var(--radius-asp-xl)] md:rounded-r-none md:border-r-0">
                    <div className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">
                      Off-the-shelf AI
                    </div>
                    {row.them}
                  </div>
                  <div className="p-6 lg:p-7 bg-asp-blue text-white text-sm lg:text-base rounded-[var(--radius-asp-xl)] md:rounded-l-none">
                    <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-2">
                      ASP AI Consulting
                    </div>
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process — step one is the readiness check */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                How it starts
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                How an AI consulting engagement starts
              </h2>
              <p className="text-white/70 text-lg">
                Four steps. The first one is free and takes two minutes. Nothing gets built before it&apos;s measured.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PROCESS.map((p) => (
                <div
                  key={p.step}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.04] border border-asp-purple/25 p-7 lg:p-8 flex flex-col"
                >
                  <div className="font-black text-4xl text-asp-purple mb-3 leading-none">{p.step}</div>
                  <h3 className="font-black text-xl mb-2">{p.title}</h3>
                  <p className="text-white/70 leading-relaxed flex-1">{p.body}</p>
                  {p.href && p.linkText && (
                    <Link
                      href={p.href}
                      className="mt-5 inline-flex items-center gap-2 font-bold text-sm text-asp-blue-light hover:text-white transition-colors"
                    >
                      {p.linkText}
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing reference — no new table; routes into existing tiers */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Pricing
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5">
              What does AI consulting cost?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              AI consulting isn&apos;t a separate retainer. Housecall Pro&apos;s built-in AI is configured inside the Growth tier. Custom AI and automation builds are part of Premier. A standalone build gets scoped after the readiness check and the systems audit, with the price in writing before work starts.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-asp-blue-light text-asp-black font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
            >
              See pricing &amp; tiers
              <span aria-hidden>&rarr;</span>
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Not sure which tier?{" "}
              <Link href="/diagnostic" className="text-asp-blue-light hover:text-asp-blue">
                Run the Growth Diagnostic
              </Link>{" "}
              &mdash; 90 seconds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <RelatedPages
        eyebrow="Keep exploring"
        heading="Where AI consulting fits at ASP."
        variant="dark"
        items={[
          {
            label: "Guide",
            href: "/blog/ai-for-home-service-businesses",
            title: "AI for Home Service Businesses",
            body: "The adoption guide: what AI can do for a trades business, where it fails, and the crawl-walk-run path most operators should follow.",
          },
          {
            label: "Platform",
            href: "/ai-integration",
            title: "AI Integration",
            body: "Already on Housecall Pro? Its built-in AI stack — CSR AI, attribution, follow-up — configured by an Official Affiliate Partner.",
          },
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "Marketing, operations, and follow-up in one stack. AI consulting runs inside it, against the same booked-revenue number.",
          },
        ]}
      />

      <TestimonialAnchor
        quote="Not only do we rank better than ever before, our efficiency in budget, ad spend, and processes has been dramatically changed."
        size="sm"
      />

      <FAQAccordion faqs={FAQS} heading="AI consulting questions, answered" />

      {/* Final CTA — same dual pattern as the hero */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5">
              Ready to see where AI fits in your business?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Start with the two-minute readiness check, or book a call and we&apos;ll map where the hours go. Either way you leave with the first move, not a pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?topic=ai-consulting"
                className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
              >
                Book a call
                <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href="/ai-readiness"
                className="inline-flex items-center justify-center gap-2 border-2 border-asp-blue text-asp-blue font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-asp-blue hover:text-white transition-colors"
              >
                Check your AI readiness
              </Link>
            </div>
            <p className="text-gray-400 text-xs mt-6">
              Official Housecall Pro Affiliate Partner · Every workflow, account, and report built in your name · No exit fees.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
