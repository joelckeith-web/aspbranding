// Illustrations for /lead-engine. Both are built in markup (no images) so they
// stay crisp, light and on-brand. Every figure is SAMPLE data and each panel
// says so — they show what the client sees, never a real client's numbers.

const SOURCES = [
  { name: "Google Business Profile", leads: 34, pct: 100 },
  { name: "Organic search", leads: 27, pct: 79 },
  { name: "Paid search", leads: 19, pct: 56 },
  { name: "Paid social", leads: 12, pct: 35 },
  { name: "Direct", leads: 8, pct: 24 },
];

const OUTCOMES = [
  { label: "Leads", value: "100" },
  { label: "Booked jobs", value: "41" },
  { label: "Revenue", value: "$212K" },
];

export function DashboardMock() {
  return (
    <figure className="m-0">
      <div className="rounded-[var(--radius-asp-xl)] bg-white text-gray-900 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10 overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-asp-blue/60">
            Your marketing dashboard
          </span>
        </div>

        <div className="p-5 md:p-6">
          <div className="grid grid-cols-3 gap-3 mb-6">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="rounded-[var(--radius-asp-md)] bg-asp-blue/[0.04] border border-asp-blue/10 px-3 py-3 text-center">
                <p className="font-black text-xl md:text-2xl text-asp-blue leading-none mb-1">{o.value}</p>
                <p className="text-[11px] text-gray-500">{o.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xs font-bold text-asp-blue mb-3">Leads by source, last 30 days</p>
          <ul className="space-y-3 list-none p-0 m-0">
            {SOURCES.map((s) => (
              <li key={s.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">{s.name}</span>
                  <span className="font-bold text-asp-blue">{s.leads}</span>
                </div>
                <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-asp-blue-light to-asp-purple"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-white/40">
        Example dashboard with sample figures.
      </figcaption>
    </figure>
  );
}

const TRACED = [
  { source: "Paid search", detail: "Campaign: Emergency service · Page: /emergency", status: "Booked", amount: "$8,400" },
  { source: "Google Business Profile", detail: "Call from the Profile · 4:12 min", status: "Booked", amount: "$1,250" },
  { source: "Organic search", detail: "Page: /services/replacement", status: "Estimate sent", amount: "$3,900" },
  { source: "Paid social", detail: "Ad: Seasonal offer · Form fill", status: "Booked", amount: "$189" },
];

export function TracedLeadsMock() {
  return (
    <figure className="m-0">
      <div className="relative rounded-[var(--radius-asp-xl)] bg-white text-gray-900 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-gray-100">
          <span className="text-xs font-bold text-asp-blue">New leads, traced to the source</span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-success">
            <span className="w-2 h-2 rounded-full bg-success" aria-hidden />
            Tracking live
          </span>
        </div>
        <ul className="divide-y divide-gray-100 list-none p-0 m-0">
          {TRACED.map((l) => (
            <li key={l.detail} className="flex items-center justify-between gap-4 px-5 py-3.5">
              <div className="min-w-0">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-asp-blue-light to-asp-purple rounded-full px-2.5 py-0.5 mb-1.5">
                  {l.source}
                </span>
                <p className="text-xs text-gray-500 truncate">{l.detail}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-black text-asp-blue">{l.amount}</p>
                <p className={`text-[11px] ${l.status === "Booked" ? "text-success" : "text-gray-500"}`}>{l.status}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-xs text-white/50">
        Example lead log with sample entries.
      </figcaption>
    </figure>
  );
}
