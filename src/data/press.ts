// ASP's Oct 22, 2026 release ("ASP Announces 2026 Growth Initiatives Following
// Industry Recognition"), distributed by ACCESS Newswire. These are paid wire
// placements, so the site says "in the news", never "featured in". Links come
// from the distribution report (1,135 pickups); only recognizable outlets are shown.

export const PRESS_RELEASE = {
  title: "ASP Announces 2026 Growth Initiatives Following Industry Recognition",
  date: "2026-10-22",
  dateLabel: "October 22, 2026",
  dateline: "Austin, TX",
  wire: "ACCESS Newswire",
  url: "https://apnews.com/press-release/access-newswire/press-release-f91e2bf3151663467eec7e31c8c5dcfa",
};

// TopMarketingAgencies.com lists ASP on its 2026 home services page under
// "Also worth considering across home services". That list is not numbered.
export const RANKING = {
  title: "Top Home Services Marketing Agencies 2026",
  source: "TopMarketingAgencies.com",
  url: "https://topmarketingagencies.com/top-home-services-marketing-agencies/",
};

export type PressOutlet = { name: string; href: string; logo?: string; logoClass?: string };

const RELEASE_SLUG = "asp-announces-2026-growth-initiatives-following-industry-recognition";
const NEXSTAR = (host: string) => `https://${host}/business/press-releases/accesswire/1239937/${RELEASE_SLUG}/`;
const LOCAL_PAPER = (host: string) =>
  `https://${host}/article/ASP-Announces-2026-Growth-Initiatives-Following-Industry-Recognition/6ada1477030e750002f937dd`;

// Logo heights are tuned so the six marks read at a similar visual weight.
export const NATIONAL_OUTLETS: PressOutlet[] = [
  { name: "AP News", href: PRESS_RELEASE.url, logo: "ap-white.png", logoClass: "h-8 md:h-9" },
  {
    name: "USA Today",
    href: `https://www.usatoday.com/press-release/story/52066/${RELEASE_SLUG}/`,
    logo: "usatoday-white.png",
    logoClass: "h-5 md:h-6",
  },
  {
    name: "Yahoo Finance",
    href: "https://finance.yahoo.com/news/asp-announces-2026-growth-initiatives-164500943.html",
    logo: "yahoofinance-white.png",
    logoClass: "h-5 md:h-6",
  },
  {
    name: "Morningstar",
    href: `https://www.morningstar.com/news/accesswire/1239937msn/${RELEASE_SLUG}`,
    logo: "morningstar-white.png",
    logoClass: "h-5 md:h-6",
  },
  {
    name: "Business Insider",
    href: `https://markets.businessinsider.com/news/stocks/${RELEASE_SLUG}-1036655809`,
    logo: "businessinsider-white.png",
    logoClass: "h-4 md:h-[18px]",
  },
  {
    name: "The Globe and Mail",
    href: `https://www.theglobeandmail.com/investing/markets/markets-news/ACCESS%20Newswire/8328875/${RELEASE_SLUG}/`,
    logo: "globeandmail-white.png",
    logoClass: "h-4 md:h-[18px]",
  },
  {
    name: "StreetInsider",
    href: "https://www.streetinsider.com/ACCESS+Newswire/ASP+Announces+2026+Growth+Initiatives+Following+Industry+Recognition/27221636.html",
  },
  {
    name: "Digital Journal",
    href: "https://www.digitaljournal.com/pr/news/access-newswire/asp-announces-2026-growth-initiatives-1438774633.html",
  },
];

export const LOCAL_TV_OUTLETS: PressOutlet[] = [
  { name: "FOX 2 St. Louis", href: NEXSTAR("fox2now.com") },
  { name: "FOX 4 Kansas City", href: NEXSTAR("fox4kc.com") },
  { name: "KFOR Oklahoma City", href: NEXSTAR("kfor.com") },
  { name: "WFLA Tampa", href: NEXSTAR("www.wfla.com") },
  { name: "KRQE Albuquerque", href: NEXSTAR("www.krqe.com") },
  { name: "WLNS Lansing", href: NEXSTAR("www.wlns.com") },
];
export const LOCAL_TV_TOTAL = 64;

export const LOCAL_PAPER_OUTLETS: PressOutlet[] = [
  { name: "The Bend Bulletin", href: LOCAL_PAPER("pr.bendbulletin.com") },
  { name: "Portland Tribune", href: LOCAL_PAPER("pr.portlandtribune.com") },
  { name: "Times of San Diego", href: LOCAL_PAPER("pr.timesofsandiego.com") },
  { name: "Washington City Paper", href: LOCAL_PAPER("pr.washingtoncitypaper.com") },
  { name: "Salisbury Post", href: LOCAL_PAPER("smb.salisburypost.com") },
  { name: "Oxford Eagle", href: LOCAL_PAPER("smb.oxfordeagle.com") },
];
