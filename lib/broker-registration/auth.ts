export const SESSION_COOKIE_NAME = "broker_reg_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const secret = process.env.BROKER_REGISTRATION_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "BROKER_REGISTRATION_SESSION_SECRET is not set — required to sign the broker registration login session.",
    );
  }
  return secret;
}

function toBase64Url(bytes: ArrayBuffer): string {
  const binary = String.fromCharCode(...new Uint8Array(bytes));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message),
  );
  return toBase64Url(signature);
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function createSessionToken(): Promise<string> {
  const secret = getSecret();
  const expires = Date.now() + SESSION_DURATION_MS;
  const signature = await hmac(String(expires), secret);
  return `${expires}.${signature}`;
}

export async function verifySessionToken(
  token: string | undefined | null,
): Promise<boolean> {
  if (!token) return false;
  const [expiresStr, signature] = token.split(".");
  if (!expiresStr || !signature) return false;
  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;
  try {
    const secret = getSecret();
    const expected = await hmac(expiresStr, secret);
    return timingSafeEqual(expected, signature);
  } catch {
    return false;
  }
}

export function verifyPassword(candidate: string): boolean {
  const expected = process.env.BROKER_REGISTRATION_PASSWORD;
  if (!expected) return false;
  return timingSafeEqual(candidate, expected);
}

export const SESSION_MAX_AGE_SECONDS = SESSION_DURATION_MS / 1000;
