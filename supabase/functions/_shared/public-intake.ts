import { createClient } from "npm:@supabase/supabase-js@2";

const DEFAULT_ORIGINS = new Set([
  "https://fotz-studio-web-experience.lovable.app",
  "https://fotz.pl",
  "https://fotz-studio.pl",
  "https://www.fotz-studio.pl",
  "https://oferta.fotz.pl",
  "https://www.fotz.pl",
  "http://localhost:8080",
  "http://localhost:5173",
]);

export const allowedOrigins = () => {
  const configured = (Deno.env.get("FOTZ_ALLOWED_ORIGINS") || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  return configured.length ? new Set(configured) : DEFAULT_ORIGINS;
};

export const isAllowedOrigin = (req: Request) => {
  const origin = req.headers.get("origin");
  return !origin || allowedOrigins().has(origin);
};

export const publicCorsHeaders = (req: Request): Record<string, string> => {
  const origin = req.headers.get("origin");
  return {
    "Access-Control-Allow-Origin": origin && allowedOrigins().has(origin)
      ? origin
      : "https://fotz-studio-web-experience.lovable.app",
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
};

const sha256 = async (value: string) => {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

export type RateLimitResult = {
  allowed: boolean;
  configured: boolean;
};

export const checkPublicRateLimit = async (
  req: Request,
  scope: string,
  limit: number,
  windowSeconds: number,
): Promise<RateLimitResult> => {
  const url = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const salt = Deno.env.get("FOTZ_RATE_LIMIT_SALT");
  if (!url || !serviceRoleKey || !salt) {
    console.error("[public-intake] rate limiting is not configured", { scope });
    return { allowed: false, configured: false };
  }

  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const networkId = req.headers.get("cf-connecting-ip")
    || forwarded
    || req.headers.get("x-real-ip")
    || "unknown";
  const userAgent = (req.headers.get("user-agent") || "unknown").slice(0, 300);
  const keyHash = await sha256(`${salt}|${scope}|${networkId}|${userAgent}`);

  const supabase = createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data, error } = await supabase.rpc("consume_public_intake_limit", {
    p_key_hash: keyHash,
    p_scope: scope,
    p_limit: limit,
    p_window_seconds: windowSeconds,
  });
  if (error) {
    console.error("[public-intake] rate limit check failed", { scope, error: error.message });
    return { allowed: false, configured: false };
  }
  return { allowed: data === true, configured: true };
};
