import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WebinarForm } from "@/components/sections/WebinarForm";
import { fillDate } from "@/lib/webinar";
import type { WebinarCopy } from "@/app/webinar/copy";

// Live audit workshop page. The ask sits beside the promise above the fold, on
// a full-bleed photo. No headshots: on ASP's site those stay on the team page.

const withDate = (s: string) => fillDate(s);

const PARTNER_LOGO = "/images/webinar/ai-for-founders.png";
const ASP_LOGO = "/images/logos/asp-logo.png";

export type WebinarHero = { src: string; alt: string; position?: string };

function HostsBadge() {
  return (
    <p className="text-sm text-white/70 leading-snug">
      Hosted by <span className="font-bold text-white">Ryan Estes</span>
      <br className="sm:hidden" /> with guest <span className="font-bold text-white">Joel Keith</span>
    </p>
  );
}

function HostCard({
  name,
  title,
  role,
  bio,
  logo,
  logoAlt,
}: {
  name: string;
  title: string;
  role: string;
  bio: string;
  logo: string;
  logoAlt: string;
}) {
  return (
    <ScrollReveal className="h-full">
      <div className="h-full rounded-[var(--radius-asp-xl)] bg-white/5 ring-1 ring-white/10 p-7 lg:p-9">
        <div className="flex items-center justify-between gap-4 mb-6">
          <Image src={logo} alt={logoAlt} width={64} height={64} className="h-16 w-16 rounded-[var(--radius-asp-md)] object-contain" />
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
            {role}
          </span>
        </div>
        <h3 className="font-black text-3xl md:text-4xl text-white mb-2 leading-none">{name}</h3>
        <p className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-5">{title}</p>
        <p className="text-white/70 leading-relaxed">{bio}</p>
      </div>
    </ScrollReveal>
  );
}

export function WebinarPage({
  copy,
  hero,
}: {
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
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={PARTNER_LOGO}
                  alt="AI for Founders"
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-[var(--radius-asp-md)] ring-1 ring-white/15"
                />
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 font-bold text-xs uppercase tracking-widest text-asp-blue-light">
                  <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-asp-blue-light opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-asp-blue-light" />
                  </span>
                  {copy.hero.eyebrow}
                </span>
              </div>
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
                heading={copy.form.heading}
                subtext={copy.form.subtext}
                submitLabel={copy.form.submitLabel}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue">
              {copy.learn.header}
            </h2>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto grid gap-5 md:grid-cols-2">
            {copy.learn.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="h-full rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-7 lg:p-8 shadow-asp-sm">
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

      {/* RUN OF SHOW */}
      <section className="relative py-16 md:py-20 bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl">{copy.show.header}</h2>
          </ScrollReveal>
          <ol className="max-w-3xl mx-auto divide-y divide-white/10 border-y border-white/10">
            {copy.show.rows.map((row) => (
              <li key={row.time} className="grid gap-1 py-5 md:grid-cols-[10rem_1fr] md:gap-6">
                <span className="font-bold text-sm text-asp-blue-light">{row.time}</span>
                <span className="text-white/80 leading-relaxed">{row.body}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHO IT IS FOR — filter, never diagnose. */}
      <section className="relative py-14 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-3 leading-tight">
              {copy.who.header}
            </h2>
            <p className="text-gray-600 leading-relaxed">{copy.who.body}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* HOSTS — one full section each. */}
      <section className="relative py-16 md:py-24 bg-asp-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl">{copy.hosts.header}</h2>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
            <HostCard
              name="Ryan Estes"
              title="AI for Founders"
              role="Host"
              bio={copy.hosts.ryan}
              logo={PARTNER_LOGO}
              logoAlt="AI for Founders"
            />
            <HostCard
              name="Joel Keith"
              title="CEO, ASP"
              role="Guest"
              bio={copy.hosts.joel}
              logo={ASP_LOGO}
              logoAlt="ASP"
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
