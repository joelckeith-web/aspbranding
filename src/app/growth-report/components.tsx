import type { Episode } from "./data";

export function EpisodeThumb({ ep, large = false }: { ep: Episode; large?: boolean }) {
  return (
    <div className="gr-thumb" style={{ borderRadius: large ? 14 : 0 }}>
      <div className="gr-thumb-no">GROWTH REPORT NO. {String(ep.no).padStart(2, "0")}</div>
      <div className="gr-thumb-rep gr-anton" aria-hidden="true">REPORT</div>
      <svg className="gr-thumb-fig" aria-hidden="true" viewBox="0 0 320 180" preserveAspectRatio="xMidYMax meet">
        <g fill="rgba(201,218,255,0.28)">
          <circle cx="200" cy="72" r="36" />
          <path d="M120 180 C120 130 156 110 200 110 C244 110 280 130 280 180 Z" />
        </g>
      </svg>
      <div className="gr-thumb-banner" style={{ background: ep.color }}>
        <div className="gr-thumb-logo">[LOGO]</div>
        <div className="gr-thumb-name" style={large ? { fontSize: "1rem" } : undefined}>
          {ep.guest} · {ep.company}
        </div>
      </div>
    </div>
  );
}

export function ShowLockup() {
  return (
    <h1 className="gr-lock" aria-label="The Atomic Growth Report">
      <span className="gr-lock-l1">
        <span>THE ATOMIC GROWTH</span>
        <i className="gr-lock-rule" aria-hidden="true" />
      </span>
      <span className="gr-lock-rep">
        <span className="gr-lock-ext">REPORT</span>
        <span className="gr-lock-sweep" aria-hidden="true">REPORT</span>
      </span>
    </h1>
  );
}
