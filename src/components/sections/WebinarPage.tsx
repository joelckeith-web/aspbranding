import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WebinarForm } from "@/components/sections/WebinarForm";
import { fillDate, type WebinarTopic } from "@/lib/webinar";
import type { WebinarCopy } from "@/app/webinar/copy";

// Shared layout for both webinar topic variants. Structure mirrors
// /frameworks: the ask sits beside the promise above the fold, then what you
// learn, who it is for, the hosts, FAQ and a closing CTA.

const withDate = (s: string) => fillDate(s);

export function WebinarPage({ topic, copy }: { topic: WebinarTopic; copy: WebinarCopy }) {
  return (
    <main className="bg-asp-black">
      {/* HERO — no ScrollReveal above the fold (it delays the headline on mobile). */}
      <section className="relative bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
            <div>
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                {copy.hero.eyebrow}
              </span>
              <h1 className="font-black text-4xl md:text-5xl 2xl:text-6xl leading-[1.05] mb-6">
                {copy.hero.h1}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-6">{copy.hero.subhead}</p>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
                <span className="h-2 w-2 rounded-full bg-asp-blue-light" aria-hidden="true" />
                {withDate(copy.hero.dateLine)}
              </p>
            </div>
            <div id="register">
              <WebinarForm
                topic={topic}
                heading={copy.form.heading}
                subtext={copy.form.subtext}
                submitLabel={copy.form.submitLabel}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              The agenda
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
              {copy.learn.header}
            </h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
            {copy.learn.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="h-full flex gap-5 rounded-[var(--radius-asp-xl)] border border-gray-200 bg-gray-50/60 p-6 lg:p-7">
                  <span className="font-black text-2xl text-asp-blue/30 shrink-0 leading-none pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-black text-lg text-asp-blue mb-2 leading-snug">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR — filter, never diagnose. */}
      <section className="relative py-14 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Who this is for
            </span>
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5 leading-tight">
              {copy.who.header}
            </h2>
            <p className="text-gray-600 leading-relaxed">{copy.who.body}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* HOSTS */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Your hosts
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
              {copy.hosts.header}
            </h2>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-[var(--radius-asp-xl)] border border-gray-200 p-7">
                <div className="flex items-center gap-4 mb-5">
                  <Image
                    src="/images/team/joel-keith.avif"
                    alt="Joel Keith"
                    width={72}
                    height={72}
                    className="rounded-full object-cover w-[72px] h-[72px]"
                  />
                  <div>
                    <p className="font-black text-lg text-asp-blue">Joel Keith</p>
                    <p className="text-sm text-gray-500">CEO and Managing Partner, ASP</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{copy.hosts.joel}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <div className="h-full rounded-[var(--radius-asp-xl)] border border-gray-200 p-7">
                <div className="flex items-center gap-4 mb-5">
                  {/* No approved photo of Ryan yet — initials until he sends one. */}
                  <div
                    className="w-[72px] h-[72px] rounded-full bg-asp-blue text-white font-black text-xl flex items-center justify-center"
                    aria-hidden="true"
                  >
                    RE
                  </div>
                  <div>
                    <p className="font-black text-lg text-asp-blue">Ryan Estes</p>
                    <p className="text-sm text-gray-500">Inbox Alchemy</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{copy.hosts.ryan}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-14 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-8 text-center">
              Questions
            </h2>
            <div className="space-y-3">
              {copy.faq.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[var(--radius-asp-lg)] border border-gray-200 bg-white p-5"
                >
                  <summary className="cursor-pointer list-none font-bold text-asp-blue flex justify-between gap-4">
                    {f.q}
                    <span className="text-asp-blue/40 group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{withDate(f.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative py-14 md:py-16 lg:py-20 bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
              {copy.finalCta.header}
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">{withDate(copy.finalCta.body)}</p>
            <a
              href="#register"
              className="inline-block bg-asp-gradient-cta text-white font-semibold px-8 py-4 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all"
            >
              {copy.finalCta.button}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
