// Test lane for the lead forms. An internal address with a "+test" tag
// (e.g. name+test@aspbranding.com) runs the whole path for real, guide email,
// notification and call-queue row, but skips the AI screen (which would
// otherwise drop it as internal), marks the row TEST, and keeps the
// conversion out of Meta: no browser pixel event, and the server event goes
// to Events Manager > Test events only when META_CAPI_TEST_CODE is set.
export function isTestLead(email: unknown): boolean {
  return typeof email === "string" && /^[^@\s]+\+test[^@\s]*@aspbranding\.com$/i.test(email.trim());
}
