import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WebinarForm } from "@/components/sections/WebinarForm";
import { fillDate, type WebinarTopic } from "@/lib/webinar";
import type { WebinarCopy } from "@/app/webinar/copy";

// Shared layout for both webinar topic variants. The ask sits beside the
// promise above the fold, on a full-bleed photo; each host then gets a full
// section with a large portrait, so the page sells the people as much as the
// topic.

const withDate = (s: string) => fillDate(s);

const JOEL_PHOTO = "/images/webinar/joel-keith.webp";
// Placeholder from Ryan's public media kit (media.kitcaster.com/ryan-estes)
// until he sends an approved photo. Swap the file, nothing else.
const RYAN_PHOTO = "/images/webinar/ryan-estes-placeholder.webp";

export type WebinarHero = { src: string; alt: string; position?: string };

function HostsBadge() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {[JOEL_PHOTO, RYAN_PHOTO].map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={48}
            height={48}
            className={`h-12 w-12 rounded-full object-cover ring-2 ring-asp-black ${
              i === 1 ? "object-[50%_45%] scale-110" : "object-top"
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-white/70 leading-snug">
        Hosted by <span className="font-bold text-white">Joel Keith</span>
        <br className="sm:hidden" /> and <span className="font-bold text-white">Ryan Estes</span>
      </p>
    </div>
  );
}

function HostSection({
  name,
  title,
  role,
  bio,
  photo,
  photoAlt,
  flip,
}: {
  name: string;
  title: string;
  role: string;
  bio: string;
  photo: string;
  photoAlt: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-8 md:gap-14 ${
        flip ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
      }`}
    >
      <ScrollReveal className={flip ? "md:order-2" : ""}>
        <div className="relative mx-auto w-full max-w-sm md:max-w-none overflow-hidden rounded-[var(--radius-asp-xl)] bg-[#0a0a0a] ring-1 ring-white/10 aspect-[4/5]">
          <Image
            src={photo}
            alt={photoAlt}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute left-5 bottom-5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
            {role}
          </span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={80} className={flip ? "md:order-1" : ""}>
        <p className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-3">{title}</p>
        <h3 className="font-black text-4xl md:text-5xl text-white mb-6 leading-none">{name}</h3>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">{bio}</p>
      </ScrollReveal>
    </div>
  );
}

export function WebinarPage({
  topic,
  copy,
  hero,
}: {
  topic: WebinarTopic;
  copy: WebinarCopy;
  hero: WebinarHero;
}) {
  return (
    <main className="bg-asp-black">
      {/* HERO — full-bleed photo under a dark gradient. No ScrollReveal above
          the fold (it delays the headline on mobile). */}
      <section className="relative isolate overflow-hidden bg-asp-black text-white">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
          style={{ objectPosition: hero.position ?? "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-asp-black/95 via-asp-black/70 to-asp-black/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-asp-black to-transparent" />

        <div className="container mx-auto px-4 py-14 md:py-20 lg:py-28">
          <div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-6">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-asp-blue-light opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-asp-blue-light" />
                </span>
                {copy.hero.eyebrow}
              </span>
              <h1 className="font-black text-4xl md:text-6xl 2xl:text-7xl leading-[1.02] mb-6 max-w-3xl">
                {copy.hero.h1}
              </h1>
              <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl">
                {copy.hero.subhead}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                <HostsBadge />
                <p className="inline-flex w-fit items-center gap-2 rounded-[var(--radius-asp-md)] border border-white/15 bg-black/40 px-4 py-2.5 text-sm font-semibold text-white">
                  <svg className="h-4 w-4 text-asp-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {withDate(copy.hero.dateLine)}
                </p>
              </div>
            </div>
            <div id="register" className="scroll-mt-6">
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

      {/* AGENDA */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              The agenda
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
              {copy.learn.header}
            </h2>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto grid gap-5 md:grid-cols-2">
            {copy.learn.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="group h-full rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-7 lg:p-8 shadow-asp-sm transition-all hover:-translate-y-0.5 hover:shadow-asp-md">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-asp-gradient-cta font-black text-white text-sm mb-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-black text-xl text-asp-blue mb-2 leading-snug">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR — filter, never diagnose. */}
      <section className="relative py-14 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <span className="font-bold text-xs uppercase tracking-widest text-asp-purple md:[writing-mode:vertical-rl] md:rotate-180">
              Who this is for
            </span>
            <div>
              <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-3 leading-tight">
                {copy.who.header}
              </h2>
              <p className="text-gray-600 leading-relaxed">{copy.who.body}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOSTS — one full section each. */}
      <section className="relative py-16 md:py-24 bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              Your hosts
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl">{copy.hosts.header}</h2>
          </ScrollReveal>
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
            <HostSection
              name="Joel Keith"
              title="CEO and Managing Partner, ASP"
              role="Presenting"
              bio={copy.hosts.joel}
              photo={JOEL_PHOTO}
              photoAlt="Joel Keith, CEO and Managing Partner at ASP"
            />
            <HostSection
              name="Ryan Estes"
              title="Inbox Alchemy"
              role="Speaking and running the Q&A"
              bio={copy.hosts.ryan}
              photo={RYAN_PHOTO}
              photoAlt="Ryan Estes of Inbox Alchemy"
              flip
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-8 text-center">
              Questions
            </h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {copy.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none font-bold text-lg text-asp-blue flex justify-between items-center gap-4">
                    {f.q}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-asp-blue transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed pr-12">{withDate(f.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA — reuses the hero photo, heavily darkened. */}
      <section className="relative isolate py-16 md:py-24 bg-asp-black text-white overflow-hidden">
        <Image
          src={hero.src}
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-30"
          style={{ objectPosition: hero.position ?? "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-asp-black/60 to-asp-black" />
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-black text-3xl md:text-5xl mb-5 leading-tight">{copy.finalCta.header}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{withDate(copy.finalCta.body)}</p>
            <a
              href="#register"
              className="inline-block bg-asp-gradient-cta text-white font-semibold px-10 py-4 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all"
            >
              {copy.finalCta.button}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
