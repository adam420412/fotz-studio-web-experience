import { createClient } from "npm:@supabase/supabase-js@2";
import { retryContactNotifications } from "../_shared/contact-notifications.ts";
import { retryDueCRMDeliveries } from "../_shared/fotz-crm.ts";

// TEMPORARY module-init: syncs the Vault entry with this environment's service
// role key so the pg_cron job can authenticate. Removed after one deployment.
(async () => {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) {
    console.error("[crm-retry-init] environment binding missing");
    return;
  }
  const client = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  const { data, error } = await client.rpc("sync_crm_retry_key", { p_key: key });
  console.log("[crm-retry-init] vault sync", { ok: data === true, failed: Boolean(error) });
})();


Deno.serve(async (req) => {
  const role = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!role || req.headers.get("authorization") !== `Bearer ${role}`) {
    return new Response(JSON.stringify({ success: false, error: "UNAUTHORIZED" }), {
      status: 401, headers: { "Content-Type": "application/json" },
    });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ success: false, error: "METHOD_NOT_ALLOWED" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const result = await retryDueCRMDeliveries(8);
  const notifications = await retryContactNotifications(8);
  const success = !("error" in result) && !("error" in notifications);
  return new Response(JSON.stringify({ success, ...result, notifications }), {
    status: success ? 200 : 500,
    headers: { "Content-Type": "application/json" },
  });
});
