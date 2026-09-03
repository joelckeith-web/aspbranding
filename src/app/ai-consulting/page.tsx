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
    "AI consulting for home service businesses. Configured on the CRM you already run, built when the tool doesn't exist, measured against booked jobs.",
};

// Three entry points. Platform integration hands off to /ai-integration (the HCP deep-dive)
// so that page stays the authority on the Housecall Pro stack.
const ENTRY_POINTS = [
  {
    label: "Platform integration",
    headline: "Already on Housecall Pro? Start there.",
    body: "We're an Official Housecall Pro Affiliate Partner. We configure the HCP AI stack — CSR AI, dispatch, attribution, follow-up — so it runs in your business from day one.",
    linkText: "See AI Integration",
    href: "/ai-integration",
  },
  {
    label: "Multi-CRM configuration",
    headline: "AI on the CRM you already run.",
    body: "Lead-source attribution, follow-up sequences, and review requests — set up on Jobber, HubSpot, or GoHighLevel, not on a tool you'd have to switch to. On ServiceTitan, we scope the work first.",
    linkText: "Check your AI readiness",
    href: "/ai-readiness",
  },
  {
    label: "Custom AI builds",
    headline: "When the tool you need doesn't exist.",
    body: "Intake agents, quote follow-up that reads your CRM, review drafting, reporting that lands in your inbox. Scoped after the readiness check, built in your accounts, measured against a booked job.",
    linkText: "Book a call",
    href: "/contact?topic=ai-consulting",
  },
];

const METHOD = [
  {
    stage: "Crawl",
    title: "Fix the data. Answer the phone.",
    body: "CRM hygiene, call tracking, lead-source attribution. Then one AI layer on the biggest leak — usually after-hours calls or slow follow-up.",
  },
  {
    stage: "Walk",
    title: "Automate the follow-up.",
    body: "Quote-to-close sequences, review requests, maintenance reminders, dispatch AI. Each one tied to a number in your CRM before the next one starts.",
  },
  {
    stage: "Run",
    title: "Build what's missing.",
    body: "Custom agents, workflows across tools, reporting built for how you run the business. Only after crawl and walk have proven out.",
  },
];

// Keep this list to what exists today. Add a card when an engagement ships — never ahead of it.
const PROOF = [
  {
    title: "Four CRMs, one attribution playbook",
    body: "Lead source to booked job, wired and documented on Housecall Pro, Jobber, HubSpot, and GoHighLevel. The same install, adapted to each platform.",
  },
  {
    title: "A monthly numbers letter, built by AI, read by an owner",
    body: "Five AI agents check the books, benchmark margins, forecast cash flow, and test pricing. The output is one short letter a trades owner can act on. A human reviews every line before it goes out.",
  },
  {
    title: "Our own agency runs on it",
    body: "Research, content drafts, QC checks, and monthly reports at ASP come off an AI system we built and run ourselves. Every piece still gets a human approval before it ships.",
  },
];

const VS_VENDOR_LOCKED = [
  {
    them: "The AI lives in a tool you'd have to switch to.",
    us: "The AI is configured on the CRM you already run.",
  },
  {
    them: "A phone bot with no idea what happened after the call.",
    us: "Every call, text, and quote lands in the CRM with its source attached.",
  },
  {
    them: "A strategy deck and a list of tools to buy.",
    us: "A working install, measured against booked jobs, before the next one starts.",
  },
  {
    them: "Automation that breaks when the vendor changes a menu.",
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
    body: "A 30-minute call, then we map the stack: CRM, call tracking, ad accounts, follow-up, reporting. We find where leads leak and what an install would move.",
  },
  {
    step: "03",
    title: "First install",
    body: "One AI layer, on your CRM, in your accounts. It goes live and gets measured against booked jobs before we start the next.",
  },
  {
    step: "04",
    title: "Walk, then run",
    body: "Follow-up automation next. Custom builds after that, scoped from what the first two proved. Monthly review against the same revenue number.",
  },
];

const FAQS = [
  {
    question: "What's the difference between AI Integration and AI Consulting at ASP?",
    answer:
      "AI Integration is the Housecall Pro AI stack — CSR AI, dispatch, attribution, follow-up — configured by an Official Affiliate Partner. AI Consulting is broader: the same work on other CRMs, plus custom builds when the tool you need doesn't exist. If you're on Housecall Pro and want the built-in AI running right, start with AI Integration. If you're on another platform, or you need something built, start here.",
  },
  {
    question: "Do I have to be on Housecall Pro?",
    answer:
      "No. Housecall Pro is where we go deepest, and partner discounts apply on new accounts if you switch. But we also work inside Jobber, HubSpot, and GoHighLevel. If you're on ServiceTitan, we scope the work first so you know what's possible before anything is billed.",
  },
  {
    question: "Do you build custom AI, or set up tools we already have?",
    answer:
      "Both, in that order. Most businesses get the biggest return from configuring what their CRM already offers — missed-call text back, follow-up sequences, attribution. Custom builds come after that, when there's a gap the off-the-shelf tools can't fill: an intake agent, a quote follow-up that reads your CRM, reporting built for how you run the business.",
  },
  {
    question: "What does AI consulting cost?",
    answer:
      "It depends on where the work lives. Housecall Pro AI configuration is inside the Growth tier. Custom AI integrations beyond Housecall Pro are inside Premier. A standalone build is scoped after the readiness check and systems audit, and you get the price in writing before work starts. The AI tools themselves are a separate line, paid to the vendor.",
  },
  {
    question: "How is this different from hiring a developer?",
    answer:
      "A developer builds what you spec. We start earlier: which problem is costing you jobs, whether your CRM can already solve it, and what to measure. Then we build only the piece that's missing, inside your accounts, and tie it to booked jobs. You own the result either way — we make sure it's the right thing to build.",
  },
  {
    question: "What does the AI readiness check look at?",
    answer:
      "Seven questions: your CRM, what happens to missed calls, how quotes get followed up, whether you can see which marketing booked which job, how reviews get requested, who would own AI inside the business, and what you want it to do first. It takes about two minutes and gives you a crawl, walk, or run result with a first move.",
  },
  {
    question: "Which CRMs and platforms do you work with?",
    answer:
      "Housecall Pro (Official Affiliate Partner), Jobber, HubSpot, and GoHighLevel today. ServiceTitan is scoped case by case. On the marketing side, the same attribution feeds Google Ads, Local Services Ads, and Meta so those platforms optimize toward booked jobs.",
  },
  {
    question: "Who owns the automations when the engagement ends?",
    answer:
      "You do. Every workflow, agent, account, and report is built in your name from day one. There's no exit fee and nothing to migrate. If you take it in-house or move it to another agency, it goes with you, documented.",
  },
  {
    question: "Is AI consulting a fit for a business under $1M?",
    answer:
      "Usually the first move is smaller than consulting. Under $1M, the highest-return step is one configured tool — missed-call text back or after-hours answering — plus clean lead tracking. The readiness check will tell you that honestly. The Growth System is built for operators already running $1M+.",
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
        description="AI consulting for home service businesses. AI configured on the CRM the business already runs — Housecall Pro, Jobber, HubSpot, GoHighLevel — plus custom AI builds when the tool doesn't exist. Measured against booked jobs."
        url="https://www.aspbranding.com/ai-consulting"
        serviceType="AI Consulting Services"
      />
      <Hero
        eyebrow="AI Consulting"
        heading="AI Consulting for<br><span class='hero-text-gradient'>Home Service Businesses</span>"
        subheading="Housecall Pro is where we go deepest. We also work inside Jobber, HubSpot, and GoHighLevel, and we build what's missing. Every install is measured against booked jobs, not a demo."
        ctaText="Book a call"
        ctaUrl="/contact?topic=ai-consulting"
        cta2Text="Check your AI readiness"
        cta2Url="/ai-readiness"
        bgType="image"
        imageUrl="/images/backgrounds/hero-trades-1.jpg"
        imagePosition="center center"
      />

      {/* Three entry points */}
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
                Three ways in
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5">
                How ASP brings AI into a home service business
              </h2>
              <p className="text-white/70 text-lg">
                Which door you use depends on the CRM you run and what needs to be built. All three end at the same place: a booked job you can trace.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {ENTRY_POINTS.map((e) => (
                <div
                  key={e.label}
                  className="relative rounded-[var(--radius-asp-2xl)] p-[1.5px] bg-gradient-to-br from-asp-blue-light/40 via-asp-purple/30 to-asp-blue-light/40"
                >
                  <div className="relative h-full rounded-[calc(var(--radius-asp-2xl)-1px)] bg-asp-black p-8 2xl:p-10 flex flex-col">
                    <div className="inline-block self-start font-bold text-[11px] uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-gradient-to-r from-asp-blue-light to-asp-purple text-white">
                      {e.label}
                    </div>
                    <h3 className="font-black text-2xl 2xl:text-3xl mb-4 leading-tight">
                      {e.headline}
                    </h3>
                    <p className="text-white/70 leading-relaxed flex-1">{e.body}</p>
                    <Link
                      href={e.href}
                      className="mt-6 inline-flex items-center gap-2 font-bold text-sm text-asp-blue-light hover:text-white transition-colors"
                    >
                      {e.linkText}
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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

      {/* Comparison — platform breadth, not "real AI vs slop" (that axis lives on /ai-integration) */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                The difference
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                AI locked to one vendor vs. AI configured on your CRM
              </h2>
              <p className="text-gray-600 text-lg">
                Most AI offers for the trades come with a platform to switch to. Ours starts with the one you already pay for.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="space-y-4">
              {VS_VENDOR_LOCKED.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 rounded-[var(--radius-asp-xl)] overflow-hidden"
                >
                  <div className="p-6 lg:p-7 bg-white text-asp-blue text-sm lg:text-base border border-gray-200 rounded-[var(--radius-asp-xl)] md:rounded-r-none md:border-r-0">
                    <div className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">
                      Vendor-locked AI
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
              AI consulting isn&apos;t a separate retainer. Housecall Pro AI configuration is part of the Growth tier. Custom AI integrations beyond Housecall Pro are part of Premier. A standalone build gets scoped after the readiness check and the systems audit, with the price in writing before work starts.
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
            body: "The Housecall Pro AI stack — CSR AI, attribution, follow-up — configured by an Official Affiliate Partner. The deep-dive for HCP operators.",
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
              Start with the two-minute readiness check, or book a call and we&apos;ll map it together. Either way you leave with the first move, not a pitch.
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
