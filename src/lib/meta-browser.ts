// Browser half of the Meta pixel/CAPI pair. The event id generated here rides
// with the form payload so the server event and the fbq() event dedupe in Meta.

export function newEventId(prefix: string): string {
  const rand =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `${prefix}-${rand}`;
}

function cookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const hit = document.cookie.split("; ").find((c) => c.startsWith(`${name}=`));
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : undefined;
}

/** _fbp / _fbc cookies set by the pixel (absent when the pixel is blocked). */
export function metaCookies(): { fbp?: string; fbc?: string } {
  return { fbp: cookie("_fbp"), fbc: cookie("_fbc") };
}
