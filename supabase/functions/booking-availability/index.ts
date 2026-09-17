import { createClient } from "npm:@supabase/supabase-js@2";
import { checkPublicRateLimit, isAllowedOrigin, publicCorsHeaders } from "../_shared/public-intake.ts";

const responseHeaders = (req: Request) => ({
  ...publicCorsHeaders(req),
  "Content-Type": "application/json",
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    if (!isAllowedOrigin(req)) return new Response(null, { status: 403 });
    return new Response(null, { headers: responseHeaders(req) });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ success: false, error: "METHOD_NOT_ALLOWED" }), { status: 405, headers: responseHeaders(req) });
  }
  if (!isAllowedOrigin(req)) {
    return new Response(JSON.stringify({ success: false, error: "ORIGIN_NOT_ALLOWED" }), { status: 403, headers: responseHeaders(req) });
  }

  const rateLimit = await checkPublicRateLimit(req, "booking-availability", 60, 60);
  if (!rateLimit.configured) return new Response(JSON.stringify({ success: false, error: "RATE_LIMIT_NOT_CONFIGURED" }), { status: 503, headers: responseHeaders(req) });
  if (!rateLimit.allowed) return new Response(JSON.stringify({ success: false, error: "RATE_LIMITED" }), { status: 429, headers: responseHeaders(req) });

  let body: { start_date?: string; end_date?: string };
  try { body = await req.json(); } catch { body = {}; }
  const start = body.start_date || "";
  const end = body.end_date || "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start) || !/^\d{4}-\d{2}-\d{2}$/.test(end)) {
    return new Response(JSON.stringify({ success: false, error: "INVALID_RANGE" }), { status: 400, headers: responseHeaders(req) });
  }
  const from = new Date(`${start}T00:00:00Z`);
  const to = new Date(`${end}T00:00:00Z`);
  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime()) || to < from || to.getTime() - from.getTime() > 31 * 86_400_000) {
    return new Response(JSON.stringify({ success: false, error: "INVALID_RANGE" }), { status: 400, headers: responseHeaders(req) });
  }

  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return new Response(JSON.stringify({ success: false, error: "SERVER_NOT_CONFIGURED" }), { status: 500, headers: responseHeaders(req) });
  const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  const { data, error } = await supabase.from("bookings")
    .select("booking_date, booking_time")
    .gte("booking_date", start)
    .lte("booking_date", end)
    .in("status", ["pending", "confirmed"]);
  if (error) return new Response(JSON.stringify({ success: false, error: "QUERY_FAILED" }), { status: 500, headers: responseHeaders(req) });

  const slots = (data || []).map((item) => ({
    date: item.booking_date,
    time: String(item.booking_time).slice(0, 5),
  }));
  return new Response(JSON.stringify({ success: true, slots }), { status: 200, headers: responseHeaders(req) });
});
