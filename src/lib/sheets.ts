import { createSign } from "crypto";

// Minimal Google Sheets append. Deliberately dependency-free — the googleapis
// package is enormous and this needs exactly one endpoint.
//
// Auth is a service-account JWT exchanged for an access token. The key lives
// in GOOGLE_SA_KEY_B64 as base64-encoded service-account JSON, because the
// PEM's newlines do not survive a plain env var cleanly.

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

interface ServiceAccount {
  client_email: string;
  private_key: string;
}

function b64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function loadServiceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SA_KEY_B64;
  if (!raw) return null;
  try {
    const json = JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
    if (!json.client_email || !json.private_key) return null;
    return json as ServiceAccount;
  } catch {
    return null;
  }
}

let cached: { token: string; expires: number } | null = null;

async function getAccessToken(sa: ServiceAccount): Promise<string | null> {
  // Reuse across warm invocations; refresh a minute early.
  if (cached && cached.expires > Date.now() + 60_000) return cached.token;

  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      exp: now + 3600,
      iat: now,
    }),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const signature = b64url(signer.sign(sa.private_key));
  const assertion = `${header}.${claim}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  if (!res.ok) {
    console.error("[sheets] token exchange failed:", res.status, await res.text());
    return null;
  }
  const body = await res.json();
  if (!body.access_token) return null;
  cached = {
    token: body.access_token,
    expires: Date.now() + (body.expires_in ?? 3600) * 1000,
  };
  return cached.token;
}

/**
 * Append one row. Never throws — a Sheets outage must not cost us a lead, so
 * every failure path returns a reason for the log and lets the caller carry on.
 */
export async function appendRow(
  spreadsheetId: string,
  range: string,
  row: (string | number)[],
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const sa = loadServiceAccount();
  if (!sa) {
    console.log("[sheets] GOOGLE_SA_KEY_B64 not configured — would have appended:", row[1]);
    return { ok: false, reason: "service account not configured" };
  }
  try {
    const token = await getAccessToken(sa);
    if (!token) return { ok: false, reason: "could not mint access token" };

    const url =
      `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}` +
      `/values/${encodeURIComponent(range)}:append` +
      `?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });
    if (!res.ok) {
      return { ok: false, reason: `sheets append ${res.status}: ${await res.text()}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.message : "unknown error" };
  }
}
