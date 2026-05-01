// Cold-pitch / cold-email spam filter for the contact form.
//
// reCAPTCHA + honeypot + the time-gate stop bots, but they don't stop the
// humans (and human-assisted scrapers from Apollo / Instantly / SEO sweatshops)
// who fill the form to pitch SEO, link building, lead gen, web design, etc.
//
// Strategy: case-insensitive substring match against a curated list of
// phrases that almost exclusively appear in pitches AIMED AT the recipient,
// not in inbound prospect inquiries. When a match hits, the route returns
// a silent 200 (same as honeypot) so the sender can't iterate against the
// filter. Matches are logged for review so Joel can tune the list.
//
// Bias: conservative on phrases that prospects might also use ("SEO", "PPC",
// "marketing", "white label" alone, "qualified leads"). If false positives
// show up, narrow the phrase rather than removing the filter.

const PHRASES: readonly string[] = [
  // Cold-open openers — vendor reaching out, never a prospect inquiring
  "i came across your website",
  "i came across your site",
  "i stumbled upon your",
  "i was browsing your",
  "i hope this email finds you well",
  "hope this email finds you well",
  "hope this message finds you well",
  "we are reaching out",
  "we're reaching out",
  "i'm reaching out from",
  "reaching out to offer",

  // Pitch-direction phrases — said BY a vendor about YOUR site
  "rank your website",
  "rank your site",
  "rank you on google",
  "we can rank your",
  "i can rank your",
  "boost your ranking",
  "boost your rankings",
  "boost your seo",
  "improve your ranking",
  "improve your rankings",
  "improve your search ranking",
  "drive more traffic to your",
  "first page of google",

  // Service-pitch identity
  "we provide seo",
  "we offer seo",
  "we are an seo",
  "we are a digital marketing",
  "we are a seo",
  "we specialize in seo",
  "we specialize in link",
  "lead generation services",
  "appointment setting services",
  "white-label seo",
  "white label seo",

  // Link-building / backlink pitches
  "guest post",
  "guest posting",
  "high da backlinks",
  "high-quality backlinks",
  "do-follow backlinks",
  "do follow backlinks",
  "link building services",
  "link insertion",

  // Booking / handoff hooks common in pitches
  "5-10 minutes of your time",
  "few minutes of your time",
  "would you be open to a quick call",
  "are you open to outsourcing",
  "schedule a quick call",
  "calendly.com",
  "skype:",
  "whatsapp:",

  // Geographic giveaways for offshore SEO mills
  "based in india",
  "based in pakistan",
  "based in philippines",
];

export type SpamCheckResult = {
  isSpam: boolean;
  matched?: string;
};

/**
 * Returns isSpam:true on the first phrase match. Checks the message body,
 * name, and company (some pitchers put "SEO Expert" in the name field).
 * Case-insensitive substring match.
 */
export function checkSpam(input: {
  name?: string;
  company?: string;
  message?: string;
}): SpamCheckResult {
  const haystack = [input.name, input.company, input.message]
    .filter((v): v is string => typeof v === "string" && v.length > 0)
    .join("\n")
    .toLowerCase();

  if (!haystack) return { isSpam: false };

  for (const phrase of PHRASES) {
    if (haystack.includes(phrase)) {
      return { isSpam: true, matched: phrase };
    }
  }
  return { isSpam: false };
}
