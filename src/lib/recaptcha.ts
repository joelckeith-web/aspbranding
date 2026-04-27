// Shared reCAPTCHA Enterprise verification used by /api/contact and
// /api/newsletter. Returns ok:true and silently passes when env vars
// aren't configured (dev / preview without keys), so local development
// keeps working — production has all three vars set.

const MIN_SCORE = 0.5;

type EnterpriseAssessment = {
  tokenProperties?: {
    valid?: boolean;
    action?: string;
    invalidReason?: string;
  };
  riskAnalysis?: {
    score?: number;
    reasons?: string[];
  };
};

export async function verifyRecaptcha(
  token: string | undefined,
  expectedAction: string,
): Promise<{ ok: boolean; reason?: string }> {
  const projectId = process.env.RECAPTCHA_PROJECT_ID;
  const apiKey = process.env.RECAPTCHA_API_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Not fully configured — pass silently (lets local dev work without keys).
  if (!projectId || !apiKey || !siteKey) {
    return { ok: true };
  }
  if (!token) {
    return { ok: false, reason: "Missing reCAPTCHA token." };
  }

  try {
    const res = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: { token, expectedAction, siteKey },
        }),
      },
    );

    if (!res.ok) {
      return { ok: false, reason: "reCAPTCHA verification error." };
    }

    const data = (await res.json()) as EnterpriseAssessment;

    if (!data.tokenProperties?.valid) {
      return {
        ok: false,
        reason: `reCAPTCHA token invalid: ${
          data.tokenProperties?.invalidReason ?? "unknown"
        }.`,
      };
    }

    if (
      data.tokenProperties.action &&
      data.tokenProperties.action !== expectedAction
    ) {
      return { ok: false, reason: "reCAPTCHA action mismatch." };
    }

    if (
      typeof data.riskAnalysis?.score === "number" &&
      data.riskAnalysis.score < MIN_SCORE
    ) {
      return { ok: false, reason: "reCAPTCHA score too low." };
    }

    return { ok: true };
  } catch {
    return { ok: false, reason: "reCAPTCHA verification error." };
  }
}
