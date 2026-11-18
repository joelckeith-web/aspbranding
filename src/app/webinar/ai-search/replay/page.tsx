import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { REPLAY, REPLAY_COPY, auditBookingUrl } from "@/lib/webinar-replay";

// Ungated workshop replay. NOT in the sitemap or nav; noindex. Traffic comes
// from the follow-up emails ({{REPLAY_LINK}}) and the newsletter.
const copy = REPLAY_COPY;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  robots: { index: false, follow: false },
};

const HERO_BG = "/images/backgrounds/hero-chatgpt-laptop.jpg";
const PARTNER_LOGO = "/images/webinar/ai-for-founders.png";
const KIT_URL = "/audit-kit";

function Video() {
  if (!REPLAY.youtubeId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-asp-xl)] bg-[#0a0a0a] ring-1 ring-white/10 flex items-center justify-center">
        <div className="text-center px-6">
          <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20" aria-hidden="true">
            <svg className="h-7 w-7 translate-x-0.5 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <p className="text-white/70 text-base md:text-lg">{copy.hero.comingSoon}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-asp-xl)] bg-black ring-1 ring-white/10">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${REPLAY.youtubeId}?rel=0`}
        title="Workshop replay"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function BookButton({ content, className = "" }: { content: string; className?: string }) {
  return (
    <a
      href={auditBookingUrl(content)}
      target="_blank"
      rel="noopener"
      className={`inline-block bg-asp-gradient-cta text-white font-semibold px-8 py-4 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all text-center ${className}`}
    >
      {copy.offer.button}
    </a>
  );
}

export default function WebinarReplay() {
  return (
    <main className="bg-asp-black">
      {/* HERO + VIDEO. The booking ask sits directly under the player. */}
      <section className="relative isolate overflow-hidden bg-asp-black text-white">
        <Image src={HERO_BG} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-asp-black/70 via-asp-black/90 to-asp-black" />
        <div className="container mx-auto px-4 pt-12 pb-14 md:pt-16 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={PARTNER_LOGO}
                alt="AI for Founders"
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-[var(--radius-asp-md)] ring-1 ring-white/15"
              />
              <span className="font-bold text-xs uppercase tracking-widest text-asp-blue-light">{copy.hero.eyebrow}</span>
            </div>
            <h1 className="font-black text-3xl md:text-5xl 2xl:text-6xl leading-[1.05] mb-4 max-w-4xl">{copy.hero.h1}</h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-3xl">{copy.hero.subhead}</p>

            <Video />

            {/* OFFER — right under the video. */}
            <div className="mt-6 grid gap-6 rounded-[var(--radius-asp-xl)] bg-asp-blue p-6 md:p-8 ring-1 ring-white/10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <p className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-2">{copy.offer.eyebrow}</p>
                <h2 className="font-black text-2xl md:text-3xl leading-tight mb-2">{copy.offer.header}</h2>
                <p className="text-white/80 leading-relaxed max-w-2xl">{copy.offer.body}</p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <BookButton content="under-video" className="w-full md:w-auto" />
                <a href={KIT_URL} className="text-sm text-white/70 underline underline-offset-4 hover:text-white text-center md:text-right">
                  {copy.offer.kitLead} {copy.offer.kitButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTERS — hidden until timestamps are filled in. */}
      {REPLAY.chapters.length > 0 && REPLAY.youtubeId && (
        <section className="relative py-14 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-6">{copy.chapters.header}</h2>
              <ol className="divide-y divide-gray-200 border-y border-gray-200">
                {REPLAY.chapters.map((c) => (
                  <li key={c.seconds} className="grid grid-cols-[5rem_1fr] gap-4 py-4">
                    <a
                      href={`https://www.youtube.com/watch?v=${REPLAY.youtubeId}&t=${c.seconds}s`}
                      target="_blank"
                      rel="noopener"
                      className="font-bold text-asp-blue-light tabular-nums"
                    >
                      {c.time}
                    </a>
                    <span className="text-gray-700">{c.label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* HOSTS — compact. */}
      <section className="relative py-14 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto">
            <h2 className="font-black text-2xl md:text-3xl text-asp-blue mb-8 text-center">{copy.hosts.header}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { name: "Ryan Estes", role: "Host · AI for Founders", photo: "/images/webinar/ryan-estes.webp" },
                { name: "Joel Keith", role: "Guest · CEO, ASP", photo: "/images/webinar/joel-keith.webp" },
              ].map((h) => (
                <div key={h.name} className="flex items-center gap-5 rounded-[var(--radius-asp-xl)] bg-white p-5 border border-gray-200 shadow-asp-sm">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gray-200">
                    <Image src={h.photo} alt={h.name} fill sizes="80px" className="object-cover object-top" />
                  </div>
                  <div>
                    <p className="font-black text-xl text-asp-blue leading-tight">{h.name}</p>
                    <p className="text-gray-600 text-sm">{h.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative py-16 md:py-20 bg-asp-black text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <h2 className="font-black text-3xl md:text-4xl mb-4 leading-tight">{copy.finalCta.header}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{copy.finalCta.body}</p>
            <BookButton content="footer" />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
