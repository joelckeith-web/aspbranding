import type { Metadata } from "next";
import Link from "next/link";
import { EpisodeThumb, ShowLockup } from "./components";
import { HeroApply } from "./HeroApply";
import { SAMPLE_EPISODES, SEGMENTS, SHOW } from "./data";

// PREVIEW BUILD (feat/growth-report). Not in the sitemap or nav yet.
// Episodes are sample placeholders; [bracketed] items are open decisions.

export const metadata: Metadata = {
  title: "The Atomic Growth Report: Interviews With Home Service Owners",
  description:
    "A video interview show for HVAC, remodeling and contracting owners, hosted by Joel Keith, CEO of ASP. How the business runs, what is working, where it is stuck and what comes next.",
  alternates: { canonical: SHOW.path },
};

const FAQ = [
  {
    q: "What is The Atomic Growth Report?",
    a: <>The Atomic Growth Report is a video interview show for home service business owners, hosted by Joel Keith, CEO of ASP. Each episode is a growth report on one owner&apos;s business.</>,
  },
  {
    q: "How often are new episodes published?",
    a: <>New episodes are published <span className="gr-ph">[cadence]</span>. Each one gets its own page on this site with chapters, show notes and a full transcript.</>,
  },
  {
    q: "How do I apply to be a guest?",
    a: <>Use the guest application on this page. It asks for your trade, city, team size, a revenue range, your proudest win, where you are stuck and your craziest story from the field.</>,
  },
  {
    q: "Does it cost anything to be a guest?",
    a: <><span className="gr-ph">[Confirm: no cost to be a guest]</span></>,
  },
  {
    q: "Where can I watch the show?",
    a: <>Full episodes are on the ASP YouTube channel, and every episode has its own page here. <span className="gr-ph">[Apple Podcasts and Spotify if there is an audio feed]</span></>,
  },
  {
    q: "Who produces the show?",
    a: <>The show is produced by ASP, a growth-systems marketing agency for home service operators.</>,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  "@id": "https://www.aspbranding.com/growth-report#series",
  name: SHOW.name,
  url: "https://www.aspbranding.com/growth-report",
  description:
    "A video interview show for home service business owners, hosted by Joel Keith, CEO of ASP.",
  author: { "@type": "Person", name: "Joel Keith", jobTitle: "CEO" },
  publisher: { "@id": "https://www.aspbranding.com/#organization" },
  inLanguage: "en-US",
};

export default function GrowthReportHub() {
  const latest = SAMPLE_EPISODES[0];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero: lockup + step 1 of the guest application */}
      <section className="gr-sec gr-dark" style={{ paddingTop: "clamp(112px, 10vw, 144px)" }}>
        <div className="gr-tex" aria-hidden="true" />
        <div className="gr-wrap">
          <div className="gr-split">
            <div style={{ minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 16px", borderRadius: 999, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.2)", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.14em" }}>
                <div className="gr-dot" aria-hidden="true" />
                <div>NOW BOOKING GUESTS · HOME SERVICE OWNERS</div>
              </div>
              <ShowLockup />
              <p className="gr-lead" style={{ color: "rgba(255,255,255,0.86)" }}>
                The Atomic Growth Report is a video interview show for home service business owners, hosted by Joel
                Keith, CEO of ASP. In each episode, one HVAC, remodeling or contracting owner walks through how the
                business runs, what is working, where it is stuck and what comes next. New episodes are published{" "}
                <span className="gr-ph">[cadence]</span>.
              </p>
              <a href="#latest" style={{ display: "inline-flex", alignItems: "center", minHeight: 44, fontWeight: 700 }}>
                Watch the latest episode
              </a>
            </div>
            <HeroApply />
          </div>
        </div>
      </section>

      {/* Latest episode */}
      <section id="latest" className="gr-sec gr-light" style={{ padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div className="gr-wrap">
          <div className="gr-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "clamp(20px, 3vw, 36px)", alignItems: "center", padding: "clamp(14px, 2vw, 22px)", borderRadius: 16, border: "1px solid #E5E7EB", boxShadow: "0 8px 32px rgba(0,35,102,0.12)" }}>
            <EpisodeThumb ep={latest} large />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, minWidth: 0 }}>
              <div className="gr-tag">Sample episode · placeholder content</div>
              <h2 className="gr-h2" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>
                Latest episode: {latest.guest} of {latest.company}
              </h2>
              <p className="gr-p">{latest.dek}</p>
              <div className="gr-meta">
                <div>{latest.trade} · {latest.city}</div>
                <div>Published <span className="gr-ph">[date]</span></div>
                <div>{latest.minutes} min</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All episodes */}
      <section id="episodes" className="gr-sec gr-soft" style={{ paddingTop: "clamp(40px, 5vw, 64px)" }}>
        <div className="gr-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 24 }}>
            <h2 className="gr-h2">All episodes</h2>
            <div className="gr-tag">Sample episodes · placeholder content</div>
          </div>
          <div className="gr-grid">
            {SAMPLE_EPISODES.map((ep) => (
              <article key={ep.no} className="gr-card gr-reveal">
                <EpisodeThumb ep={ep} />
                <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 6 }}>
                  <h3 style={{ margin: 0, fontWeight: 800, fontSize: "1.02rem", lineHeight: 1.3, color: "#002366" }}>{ep.title}</h3>
                  <p className="gr-p" style={{ fontSize: "0.9rem" }}>{ep.dek}</p>
                  <div style={{ fontWeight: 600, fontSize: "0.8rem", color: "#4B5563" }}>{ep.trade} · {ep.city}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="gr-sec gr-dark" style={{ padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div className="gr-tex" aria-hidden="true" />
        <div className="gr-wrap gr-reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div style={{ maxWidth: "36rem", display: "flex", flexDirection: "column", gap: 10 }}>
            <h2 className="gr-h2" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}>Want an outside read on where your leads are slipping away?</h2>
            <p className="gr-p" style={{ color: "rgba(255,255,255,0.8)" }}>ASP will look at how your company gets found, gets called and gets booked, and show you what it finds.</p>
          </div>
          <Link className="gr-btn gr-btn-w" href="/strategy-call">Request an audit</Link>
        </div>
      </section>

      {/* Who it's for + format + host */}
      <section className="gr-sec gr-light">
        <div className="gr-wrap">
          <div className="gr-split">
            <div className="gr-reveal" style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="gr-h2">Who is The Atomic Growth Report for?</h2>
              <p className="gr-lead">It is for home service owners who want to hear how other owners actually run and grow their companies.</p>
              <ul style={{ margin: 0, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 10, fontSize: "1.02rem", lineHeight: 1.6 }}>
                <li>Owner-operators of HVAC, remodeling and contracting companies.</li>
                <li>Owners who have hit a ceiling and want to hear how someone else got through it.</li>
                <li>Leaders working on hiring, pricing, marketing and handing off the field.</li>
                <li>Anyone who would rather hear real numbers and stories than theory.</li>
              </ul>
              <div style={{ marginTop: 12, padding: 22, borderRadius: 16, background: "#F3F6FD", border: "1px solid #D6E0F5" }}>
                <h3 style={{ margin: "0 0 8px", fontWeight: 800, fontSize: "1.2rem", color: "#002366" }}>About the host: Joel Keith</h3>
                <p className="gr-p">
                  Joel Keith is the CEO of ASP, a growth-systems marketing agency for home service operators. He has
                  spent years inside home service companies, building and refining the systems ASP now runs for clients.
                </p>
                <Link href="/about" style={{ display: "inline-flex", alignItems: "center", minHeight: 44, fontWeight: 700, color: "#0B6FA4" }}>
                  More about Joel Keith
                </Link>
              </div>
            </div>
            <div className="gr-reveal" style={{ minWidth: 0 }}>
              <h2 className="gr-h2" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", marginBottom: 12 }}>How every episode runs</h2>
              <div>
                {SEGMENTS.map((s, i) => (
                  <div key={s.name} className="gr-seg">
                    <b>{String(i + 1).padStart(2, "0")}</b>
                    <div><strong>{s.name}.</strong> {s.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="listen" className="gr-sec gr-soft" style={{ padding: "clamp(40px, 5vw, 64px) 0" }}>
        <div className="gr-wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <h2 className="gr-h2" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>Watch and subscribe</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["YouTube", "Apple Podcasts", "Spotify"].map((p) => (
              <span key={p} className="gr-btn gr-btn-n" aria-disabled="true" style={{ cursor: "default" }}>
                {p} <span style={{ marginLeft: 6, opacity: 0.7 }}>[link]</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ: visible only, no FAQPage markup (Google retired FAQ rich results May 2026) */}
      <section id="faq" className="gr-sec gr-light">
        <div className="gr-wrap" style={{ maxWidth: "56rem" }}>
          <h2 className="gr-h2" style={{ marginBottom: 24 }}>Questions about the show</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQ.map((f) => (
              <details key={f.q} className="gr-faq">
                <summary>{f.q}</summary>
                <div style={{ padding: "0 20px 20px", fontSize: "0.95rem", lineHeight: 1.7, color: "#4B5563" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky convert bar */}
      <div className="gr-bar">
        <div className="gr-bar-label" style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>Run a home service business?</div>
        <Link className="gr-btn gr-btn-b" href={SHOW.applyPath}>Apply to be a guest</Link>
        <Link className="gr-btn gr-btn-w" href="/strategy-call">Request an audit</Link>
      </div>
    </>
  );
}
