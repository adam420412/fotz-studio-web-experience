import { queueCRMDelivery, type CRMJson } from "../_shared/fotz-crm.ts";
import { checkPublicRateLimit, isAllowedOrigin, publicCorsHeaders } from "../_shared/public-intake.ts";

const respond = (req: Request, body: CRMJson, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { ...publicCorsHeaders(req), "Content-Type": "application/json" },
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    if (!isAllowedOrigin(req)) return new Response(null, { status: 403 });
    return new Response(null, { headers: publicCorsHeaders(req) });
  }
  if (req.method !== "POST") return respond(req, { success: false, error: "METHOD_NOT_ALLOWED" }, 405);
  if (!isAllowedOrigin(req)) return respond(req, { success: false, error: "ORIGIN_NOT_ALLOWED" }, 403);

  const rateLimit = await checkPublicRateLimit(req, "crm-sync", 20, 600);
  if (!rateLimit.configured) return respond(req, { success: false, error: "RATE_LIMIT_NOT_CONFIGURED" }, 503);
  if (!rateLimit.allowed) return respond(req, { success: false, error: "RATE_LIMITED" }, 429);

  const rawBody = await req.text();
  if (rawBody.length > 64_000) return respond(req, { success: false, error: "PAYLOAD_TOO_LARGE" }, 413);

  let payload: CRMJson;
  try {
    const parsed = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid");
    payload = parsed as CRMJson;
  } catch {
    return respond(req, { success: false, error: "INVALID_JSON" }, 400);
  }

  const result = await queueCRMDelivery(payload);
  if (!result.accepted) {
    console.error("[crm-sync] event could not be persisted", { submission_id: result.submissionId, error: result.error });
    return respond(req, { success: false, error: "CRM_EVENT_NOT_PERSISTED" }, 503);
  }

  return respond(req, {
    success: true,
    queued: result.queued,
    delivered: result.delivered,
    submission_id: result.submissionId,
    event_id: result.eventId,
    lead_id: result.leadId,
  }, result.delivered ? 200 : 202);
});
