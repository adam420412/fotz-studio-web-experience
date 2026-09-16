import { createClient } from "npm:@supabase/supabase-js@2";

export type CRMJson = Record<string, unknown>;

export type CRMDeliveryResult = {
  accepted: boolean;
  delivered: boolean;
  queued: boolean;
  submissionId: string;
  eventId?: string;
  leadId?: string;
  error?: string;
};

type OutboxRow = {
  id: string;
  submission_id: string;
  payload: CRMJson;
  status: "pending" | "delivered" | "failed";
  attempt_count: number;
  connect_hub_event_id: string | null;
  connect_hub_lead_id: string | null;
};

type ForwardResult = {
  delivered: boolean;
  eventId?: string;
  leadId?: string;
  error?: string;
};

const asString = (value: unknown, maxLength = 500): string | null => {
  if (typeof value !== "string" && typeof value !== "number") return null;
  const clean = String(value).trim();
  return clean ? clean.slice(0, maxLength) : null;
};

const eventTypeFor = (payload: CRMJson): string => {
  const type = asString(payload.event_type ?? payload.type, 120);
  return type === "booking" ? "booking.created" : (type || "lead.captured");
};

const submissionIdFor = (payload: CRMJson): string =>
  asString(payload.submission_id ?? payload.idempotency_key ?? payload.external_event_id, 300)
  || crypto.randomUUID();

const getOutboxClient = () => {
  const url = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceRoleKey) return null;
  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
};

const getHubConfig = () => {
  const url = (Deno.env.get("FOTZ_CONNECT_HUB_WEBHOOK_URL") || "").trim();
  const secret = Deno.env.get("FOTZ_CONNECT_HUB_WEBHOOK_SECRET") || "";
  if (!url || !secret) return null;
  if (!url.startsWith("https://") && !url.startsWith("http://localhost")) return null;
  return { url, secret };
};

const nextAttempt = (attemptCount: number): string => {
  const minutes = Math.min(360, Math.max(2, 2 ** Math.min(attemptCount, 8)));
  return new Date(Date.now() + minutes * 60_000).toISOString();
};

const forwardToHub = async (payload: CRMJson, submissionId: string): Promise<ForwardResult> => {
  const config = getHubConfig();
  if (!config) return { delivered: false as const, error: "CONNECT_HUB_NOT_CONFIGURED" };

  try {
    const response = await fetch(config.url, {
      method: "POST",
      signal: AbortSignal.timeout(8000),
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": submissionId,
        "x-webhook-secret": config.secret,
      },
      body: JSON.stringify({ ...payload, submission_id: submissionId }),
    });
    const responseText = await response.text();
    let body: CRMJson = {};
    try { body = JSON.parse(responseText) as CRMJson; } catch { /* response may be empty */ }
    if (!response.ok || !body || typeof body !== "object" || body.success !== true || !asString(body.event_id) || !asString(body.lead_id)) {
      const code = asString(body.error, 200) || `CONNECT_HUB_HTTP_${response.status}`;
      return { delivered: false as const, error: code };
    }
    return {
      delivered: true as const,
      eventId: asString(body.event_id, 200) || undefined,
      leadId: asString(body.lead_id, 200) || undefined,
    };
  } catch (error) {
    return {
      delivered: false as const,
      error: error instanceof Error ? error.message.slice(0, 500) : "CONNECT_HUB_NETWORK_ERROR",
    };
  }
};

const deliverOutboxRow = async (row: OutboxRow): Promise<CRMDeliveryResult> => {
  const outbox = getOutboxClient();
  const delivery = await forwardToHub(row.payload, row.submission_id);
  const attempts = row.attempt_count + 1;

  if (delivery.delivered) {
    if (outbox) {
      await outbox.from("crm_delivery_outbox").update({
        status: "delivered",
        attempt_count: attempts,
        last_attempt_at: new Date().toISOString(),
        delivered_at: new Date().toISOString(),
        connect_hub_event_id: delivery.eventId ?? null,
        connect_hub_lead_id: delivery.leadId ?? null,
        last_error: null,
      }).eq("id", row.id);
    }
    return {
      accepted: true,
      delivered: true,
      queued: true,
      submissionId: row.submission_id,
      eventId: delivery.eventId,
      leadId: delivery.leadId,
    };
  }

  if (outbox) {
    await outbox.from("crm_delivery_outbox").update({
      status: delivery.error === "CONNECT_HUB_NOT_CONFIGURED" ? "pending" : "failed",
      attempt_count: attempts,
      last_attempt_at: new Date().toISOString(),
      next_attempt_at: nextAttempt(attempts),
      last_error: delivery.error?.slice(0, 1000) ?? "DELIVERY_FAILED",
    }).eq("id", row.id);
  }

  return {
    accepted: Boolean(outbox),
    delivered: false,
    queued: Boolean(outbox),
    submissionId: row.submission_id,
    error: delivery.error,
  };
};

export const queueCRMDelivery = async (rawPayload: CRMJson): Promise<CRMDeliveryResult> => {
  const submissionId = submissionIdFor(rawPayload);
  const payload: CRMJson = { ...rawPayload, submission_id: submissionId };
  const outbox = getOutboxClient();

  if (!outbox) {
    const delivery = await forwardToHub(payload, submissionId);
    return {
      accepted: delivery.delivered,
      delivered: delivery.delivered,
      queued: false,
      submissionId,
      eventId: delivery.eventId,
      leadId: delivery.leadId,
      error: delivery.error,
    };
  }

  const { data: existing, error: existingError } = await outbox
    .from("crm_delivery_outbox")
    .select("id, submission_id, payload, status, attempt_count, connect_hub_event_id, connect_hub_lead_id")
    .eq("submission_id", submissionId)
    .maybeSingle();

  if (existingError) {
    const delivery = await forwardToHub(payload, submissionId);
    return {
      accepted: delivery.delivered,
      delivered: delivery.delivered,
      queued: false,
      submissionId,
      eventId: delivery.eventId,
      leadId: delivery.leadId,
      error: delivery.error || existingError.message,
    };
  }

  if (existing?.status === "delivered") {
    return {
      accepted: true,
      delivered: true,
      queued: true,
      submissionId,
      eventId: existing.connect_hub_event_id || undefined,
      leadId: existing.connect_hub_lead_id || undefined,
    };
  }

  let row = existing as OutboxRow | null;
  if (!row) {
    const { data: inserted, error } = await outbox
      .from("crm_delivery_outbox")
      .insert({
        submission_id: submissionId,
        event_type: eventTypeFor(payload),
        payload,
        status: "pending",
        notification_status: payload._notification_requested === true ? "pending" : "not_required",
      })
      .select("id, submission_id, payload, status, attempt_count, connect_hub_event_id, connect_hub_lead_id")
      .single();
    if (error || !inserted) {
      const delivery = await forwardToHub(payload, submissionId);
      return {
        accepted: delivery.delivered,
        delivered: delivery.delivered,
        queued: false,
        submissionId,
        eventId: delivery.eventId,
        leadId: delivery.leadId,
        error: delivery.error || error?.message || "OUTBOX_INSERT_FAILED",
      };
    }
    row = inserted as OutboxRow;
  }

  return deliverOutboxRow(row);
};

export const retryDueCRMDeliveries = async (limit = 20) => {
  const outbox = getOutboxClient();
  if (!outbox) return { processed: 0, delivered: 0, failed: 0, error: "OUTBOX_NOT_CONFIGURED" };

  const retentionCutoff = new Date(Date.now() - 30 * 24 * 60 * 60_000).toISOString();
  const rateLimitCutoff = new Date(Date.now() - 7 * 24 * 60 * 60_000).toISOString();
  const [{ error: purgeOutboxError }, { error: purgeLimitsError }] = await Promise.all([
    outbox.from("crm_delivery_outbox").delete().eq("status", "delivered").in("notification_status", ["not_required", "sent"]).lt("delivered_at", retentionCutoff),
    outbox.from("public_intake_rate_limits").delete().lt("updated_at", rateLimitCutoff),
  ]);
  if (purgeOutboxError || purgeLimitsError) {
    console.error("[crm-retry] retention cleanup failed", {
      outbox: purgeOutboxError?.message,
      limits: purgeLimitsError?.message,
    });
  }

  const { data, error } = await outbox
    .from("crm_delivery_outbox")
    .select("id, submission_id, payload, status, attempt_count, connect_hub_event_id, connect_hub_lead_id")
    .in("status", ["pending", "failed"])
    .lte("next_attempt_at", new Date().toISOString())
    .order("next_attempt_at", { ascending: true })
    .limit(Math.min(Math.max(limit, 1), 100));
  if (error) return { processed: 0, delivered: 0, failed: 0, error: error.message };

  let delivered = 0;
  let failed = 0;
  for (const item of data ?? []) {
    const result = await deliverOutboxRow(item as OutboxRow);
    if (result.delivered) delivered += 1;
    else failed += 1;
  }
  return { processed: data?.length ?? 0, delivered, failed };
};
