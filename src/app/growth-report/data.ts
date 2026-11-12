// The Atomic Growth Report: show data.
// PREVIEW: every episode below is SAMPLE placeholder content (made-up guests and
// companies) so the layout can be reviewed. Replace with real episodes before launch.

export const SHOW = {
  name: "The Atomic Growth Report",
  path: "/growth-report",
  applyPath: "/growth-report/apply",
  host: "Joel Keith",
  hostTitle: "CEO of ASP",
};

export const TRADES = ["HVAC", "Remodeling", "General contracting", "Other home service"] as const;
export const TEAM_SIZES = ["Just me", "2 to 5", "6 to 15", "16 or more"] as const;
// Placeholder ranges from the mockup; Joel to confirm.
export const REVENUE_RANGES = ["Under $1M", "$1M to $3M", "$3M to $5M", "$5M and up"] as const;

export type Episode = {
  no: number;
  guest: string;
  company: string;
  color: string;
  title: string;
  dek: string;
  trade: string;
  city: string;
  minutes: number;
};

export const SAMPLE_EPISODES: Episode[] = [
  { no: 1, guest: "Sam Ortega", company: "Northgate Heating & Air", color: "#0F766E", title: "How Sam Ortega stopped being the bottleneck at Northgate Heating & Air", dek: "Why an HVAC company with full phones and loyal customers still could not add a second crew.", trade: "HVAC", city: "Dayton, OH", minutes: 58 },
  { no: 2, guest: "Priya Nair", company: "Kestrel Remodeling", color: "#C41E3A", title: "How Priya Nair fixed the phones at Kestrel Remodeling with one hire", dek: "A remodeler on the office hire that changed how every new call gets handled.", trade: "Remodeling", city: "Raleigh, NC", minutes: 51 },
  { no: 3, guest: "Dale Whitcomb", company: "Whitcomb Builders", color: "#1D4ED8", title: "Why Dale Whitcomb stopped quoting every job himself", dek: "A general contractor on handing estimates to his team without losing the close.", trade: "General contracting", city: "Boise, ID", minutes: 47 },
  { no: 4, guest: "Lena Brooks", company: "Summit Comfort Co.", color: "#7C3AED", title: "How Lena Brooks moved Summit Comfort beyond referrals", dek: "An HVAC owner on what she changed when word of mouth stopped being enough.", trade: "HVAC", city: "Tulsa, OK", minutes: 54 },
  { no: 5, guest: "Marcus Hale", company: "Hale & Sons Renovation", color: "#E8590C", title: "Why Marcus Hale started saying no to the wrong jobs", dek: "A renovation owner on the jobs he turns down and what that did to his calendar.", trade: "Remodeling", city: "Grand Rapids, MI", minutes: 49 },
  { no: 6, guest: "Tessa Monroe", company: "Ironwood Construction", color: "#0E2341", title: "How Tessa Monroe handed off the field at Ironwood Construction", dek: "A contractor on stepping out of daily site visits without quality slipping.", trade: "General contracting", city: "Spokane, WA", minutes: 52 },
];

// Locked episode format (Joel, 2026-11-11). Ad read is not listed publicly.
export const SEGMENTS = [
  { name: "The Business", text: "How the company runs today: trade, team, market and how work comes in." },
  { name: "From the Field", text: "The crazy jobs and customer stories every owner has." },
  { name: "What's Working", text: "The moves that are actually paying off right now." },
  { name: "The Next Level", text: "What the next stage of growth looks like." },
  { name: "The Stuck Point", text: "Where things are stuck, and two or three moves Joel would make." },
  { name: "One Thing", text: "The one piece of advice the guest would give another owner." },
  { name: "Joel's Take", text: "Joel's own read on the episode, solo." },
];
