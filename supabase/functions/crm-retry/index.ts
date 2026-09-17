import { retryContactNotifications } from "../_shared/contact-notifications.ts";
import { retryDueCRMDeliveries } from "../_shared/fotz-crm.ts";


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
