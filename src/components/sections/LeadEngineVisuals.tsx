// Visuals for /lead-engine. These are REAL screenshots of a current client's
// ASP reporting dashboard (September 2026), with the client's name, logo and
// login email removed before capture. Joel's rule (2026-10-05): show what a
// client actually gets, never invented figures they might expect to see.
import Image from "next/image";

function BrowserFrame({
  src,
  width,
  height,
  alt,
  caption,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="m-0">
      <div className="rounded-[var(--radius-asp-xl)] bg-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes="(min-width: 1024px) 600px, 100vw"
          className="block w-full h-auto"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-white/50">{caption}</figcaption>
    </figure>
  );
}

export function DashboardMock() {
  return (
    <BrowserFrame
      src="/images/proof/dashboard-overview.jpg"
      width={1170}
      height={872}
      alt="A current client's ASP marketing dashboard: ad spend, clicks, conversions, cost per conversion, website sessions, phone calls, quote forms and Google rankings for September 2026."
      caption="A current client's dashboard, September 2026. Client name removed."
    />
  );
}

export function TracedLeadsMock() {
  return (
    <BrowserFrame
      src="/images/proof/dashboard-results.jpg"
      width={970}
      height={406}
      alt="Results from a current client's ASP dashboard: 373 conversions at $78.60 each, 309 phone calls and 64 quote form submissions in September 2026."
      caption="Results from the same client's dashboard, September 2026."
    />
  );
}
