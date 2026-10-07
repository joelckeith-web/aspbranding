import { createHash } from "crypto";

// Meta Conversions API (server side). Every server event carries the same
// event_id as its browser fbq() twin so Meta deduplicates the pair; the
// browser half supplies _fbp/_fbc cookies, the server half the IP, user
// agent and hashed contact details the browser never sends.
//
// Env: NEXT_PUBLIC_META_PIXEL_ID (shared with the browser pixel),
// META_CAPI_ACCESS_TOKEN (secret), optional META_CAPI_TEST_CODE (routes
// events to Events Manager > Test events while set), optional
// META_GRAPH_VERSION.

const GRAPH_VERSION = (process.env.META_GRAPH_VERSION || "v24.0").trim();

export type MetaUserInput = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export type MetaServerEvent = {
  eventName: "Lead" | "SubmitApplication" | "Contact";
  eventId: string;
  eventSourceUrl?: string;
  ip?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  user?: MetaUserInput;
  customData?: Record<string, string | number>;
  /** Test-lane submission: send only as a Test Events event, never as a real conversion. */
  test?: boolean;
};

const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

function hashed(value: string | undefined, normalize: (v: string) => string) {
  if (!value) return undefined;
  const clean = normalize(value);
  return clean ? [sha256(clean)] : undefined;
}

const lower = (v: string) => v.trim().toLowerCase();
const lettersOnly = (v: string) => v.toLowerCase().replace(/[^a-z]/g, "");
// US numbers: digits only, country code 1 prepended to a 10-digit number.
const usPhone = (v: string) => {
  const digits = v.replace(/\D/g, "");
  return digits.length === 10 ? `1${digits}` : digits;
};
const usState = (v: string) => {
  const s = lettersOnly(v);
  return s.length === 2 ? s : "";
};
const zip5 = (v: string) => v.replace(/\D/g, "").slice(0, 5);

/** The _fbc cookie, or one built from an fbclid the attribution hook kept. */
export function resolveFbc(cookieFbc?: string, fbclid?: string, clickTime?: string) {
  if (cookieFbc) return cookieFbc;
  if (!fbclid) return undefined;
  const ms = clickTime ? Date.parse(clickTime) : NaN;
  return `fb.1.${Number.isFinite(ms) ? ms : Date.now()}.${fbclid}`;
}

export function clientIp(headers: Headers) {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    undefined
  );
}

/**
 * Sends one event. Never throws: tracking must not cost a lead. Returns a
 * short status for the logs.
 */
export async function sendMetaEvent(event: MetaServerEvent): Promise<string> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
  const token = process.env.META_CAPI_ACCESS_TOKEN?.trim();
  if (!pixelId || !token) return "skipped: pixel id or access token not set";
  const testCode = process.env.META_CAPI_TEST_CODE?.trim();
  if (event.test && !testCode) return "skipped: test lead and META_CAPI_TEST_CODE not set";

  const u = event.user ?? {};
  const userData: Record<string, unknown> = {
    em: hashed(u.email, lower),
    ph: hashed(u.phone, usPhone),
    fn: hashed(u.firstName, lettersOnly),
    ln: hashed(u.lastName, lettersOnly),
    ct: hashed(u.city, lettersOnly),
    st: hashed(u.state, usState),
    zp: hashed(u.zip, zip5),
    country: [sha256("us")],
    client_ip_address: event.ip,
    client_user_agent: event.userAgent,
    fbp: event.fbp,
    fbc: event.fbc,
  };
  for (const key of Object.keys(userData)) if (userData[key] === undefined) delete userData[key];

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: "website",
        event_source_url: event.eventSourceUrl,
        user_data: userData,
        custom_data: event.customData,
      },
    ],
  };
  if (testCode) payload.test_event_code = testCode;

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(4000),
      }
    );
    const text = await res.text();
    if (!res.ok) {
      console.error("Meta CAPI rejected event", event.eventName, res.status, text.slice(0, 400));
      return `error ${res.status}`;
    }
    console.log("Meta CAPI event sent", event.eventName, event.eventId, text.slice(0, 200));
    return "sent";
  } catch (err) {
    console.error("Meta CAPI request failed", event.eventName, (err as Error)?.message);
    return "error: request failed";
  }
}
