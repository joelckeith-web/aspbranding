import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, ServiceSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
  title: "Marketing System Audit — 60 Minutes Inside Your Real Numbers | $199",
  description:
    "A 60-minute working session through your ads, attribution, and ROAS with a senior strategist. Know what's working, what's wasted, and what to fix first. $199.",
};

const CALENDLY_AUDIT = "https://calendly.com/joel-keith-asp/marketing-system-audit";

const LOOK_AT = [
  {
    title: "Ad account performance",
    body: "We open your Google and Meta accounts together and look at what your spend is doing. Search terms, match types, wasted budget, campaign structure — the things that quietly drain money when nobody checks.",
  },
  {
    title: "Attribution check",
    body: "When a job books, do you know which channel sent it? We trace how a lead moves from click to call to booked job, and show you exactly where your tracking breaks.",
  },
  {
    title: "ROAS reality check",
    body: "What are you getting back for what you spend right now? We put a real number on it — not platform-reported conversions, but what the data says about booked revenue.",
  },
  {
    title: "CRM checkup",
    body: "Whatever CRM you run, we check the layer that matters for marketing: lead sources captured, job values recorded, and whether that data feeds back into Google so your ads get smarter.",
  },
  {
    title: "Lead flow and follow-up",
    body: "Leads that never get called back cost more than bad ads. We walk through what happens after the phone rings — speed to lead, missed-call handling, and follow-up on unbooked estimates.",
  },
  {
    title: "Validation of what's working",
    body: "Not everything needs fixing. Part of the value is hearing a straight answer on what you're doing right — so you stop second-guessing it and stop paying vendors to redo it.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Book and pay",
    body: "Pick a time that works. Payment runs through Stripe when you book — $199, no invoice chasing, no sales call first.",
  },
  {
    step: "2",
    title: "Answer the intake questions",
    body: "A short set of questions about your business, your spend, and your stack. This is how we show up already knowing your situation instead of burning your hour on background.",
  },
  {
    step: "3",
    title: "60 minutes on Google Meet",
    body: "A screen-share working session through your real accounts with a senior strategist. Bring your questions — this is your hour.",
  },
  {
    step: "4",
    title: "Get the breakdown in writing",
    body: "After the call, you get a written summary of what we found and your next moves, in priority order. Yours to keep, yours to act on — with us or without us.",
  },
];

const AUDIT_FAQS = [
  {
    q: "Is this a sales call?",
    a: "No. You're paying for a working session, and that's what you get. If we see a fit for one of our services, we'll say so plainly at the end — and if you don't need us, we'll say that too. The audit stands on its own either way.",
  },
  {
    q: "How is this different from the free Growth Diagnostic?",
    a: "The free diagnostic is a 90-second quiz that tells you what you should be spending based on your revenue. The audit is a 60-minute session inside your real accounts — your ads, your attribution, your ROAS. One tells you the target. The other tells you whether what you're doing today is hitting it.",
  },
  {
    q: "What do I need to have ready?",
    a: "Access to whatever you run: Google Ads, Meta Ads, Google Analytics, your Google Business Profile, and your CRM. You'll share your screen — we never need your passwords. If you can't pull something up, we work with what you have.",
  },
  {
    q: "What if I'm not running ads yet?",
    a: "The audit still works. We spend the hour on your attribution setup, your local presence, your lead handling, and a spend plan for when you do turn ads on — so your first dollar is measured from day one.",
  },
  {
    q: "Who runs the audit?",
    a: "A senior strategist — not a junior rep reading from a script. The person on the call is the person who reviews your accounts.",
  },
  {
    q: "What happens after the audit?",
    a: "You get the written breakdown and you decide. Some operators take the list and run it themselves. Some hand it to their current agency. Some ask us to fix what we found. All three are fine outcomes.",
  },
];

export default function AuditPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.aspbranding.com/" }, { name: "Marketing System Audit", url: "https://www.aspbranding.com/audit" }]} />
      <ServiceSchema
        name="Marketing System Audit"
        description="A 60-minute working session through your ad performance, attribution, and ROAS with a senior strategist. Includes a written action plan."
        url="https://www.aspbranding.com/audit"
        serviceType="Marketing Audit"
        price="199"
      />
      <Hero
        eyebrow="Marketing System Audit · $199"
        heading="60 minutes inside your real numbers.<br><span class='hero-text-gradient'>Know what's working. Fix what isn't.</span>"
        subheading="A one-on-one working session through your ads, your attribution, and your return on spend — with a senior strategist, not a sales rep. You leave with answers in writing."
        ctaText="Book your audit — $199"
        ctaUrl={CALENDLY_AUDIT}
        cta2Text="Not sure yet? Try the free diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/industries/remodel-outdoor.jpg"
        imagePosition="center center"
      />

      {/* What it is */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What it is
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
                Sit down with someone who reads marketing numbers for a living.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Most home service operators are spending real money on marketing without a straight answer to three questions: Are my ads performing? Is my tracking telling me the truth? What am I getting back for what I spend? The audit answers all three — live, on a screen-share, in your own accounts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It&apos;s not a report generated by a tool. It&apos;s not a pitch dressed up as a consultation. It&apos;s a working session, and the $199 is the whole price.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we look at */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What we look at
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Six checks. One clear picture.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {LOOK_AT.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 hover:border-asp-blue-light/60 transition-colors p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg 2xl:text-xl text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                How it works
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Book it. Do it. Keep the answers.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {STEPS.map((s) => (
                <div
                  key={s.step}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 bg-white shadow-asp-sm"
                >
                  <div className="font-black text-3xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-black text-lg text-asp-blue mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quiz vs audit */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
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
              Where it fits
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
              The free diagnostic sets the target. The audit checks your aim.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              The <Link href="/diagnostic" className="text-asp-blue-light hover:text-white font-semibold">Growth Diagnostic</Link> takes 90 seconds and tells you what a business your size should be spending, and why. The audit goes where a quiz can&apos;t: inside your ad accounts, your tracking, and your CRM, with a strategist reading your specific situation.
            </p>
            <p className="text-white/60 leading-relaxed">
              Plenty of operators do both. Start free if you want the lay of the land. Book the audit when you want answers about your own numbers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Book your session
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
              $199. Sixty minutes. Answers in writing.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Slots are capped each week so every audit gets full prep. Payment runs through Stripe when you book, and the calendar invite comes with a Google Meet link attached.
            </p>
            <a
              href={CALENDLY_AUDIT}
              className="inline-block bg-gradient-to-r from-asp-blue-light to-asp-purple text-white font-bold py-4 px-10 rounded-[var(--radius-asp-lg)] hover:opacity-90 transition-opacity no-underline text-lg"
            >
              Book your audit &rarr;
            </a>
            <p className="text-gray-500 text-sm mt-6">
              Need to move it? Reschedule any time through your Calendly confirmation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection
        items={AUDIT_FAQS}
        eyebrow="Before you book"
        heading="Common questions about the audit."
      />

      <RelatedPages
        items={[
          {
            label: "Free tool",
            href: "/diagnostic",
            title: "Growth Diagnostic",
            body: "Seven questions, 90 seconds. Find out which tier of the Growth System fits your business today.",
          },
          {
            label: "Free tool",
            href: "/marketing-budget-calculator",
            title: "Marketing Budget Calculator",
            body: "What should a business your size spend on marketing? Get a revenue-based answer in under a minute.",
          },
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "If the audit finds gaps, this is the system that closes them — every channel feeding one revenue number.",
          },
        ]}
      />

      <TestimonialAnchor quote="It's a night-and-day difference from our last company." />
    </main>
  );
}
