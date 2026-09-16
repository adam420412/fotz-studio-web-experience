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

  const result = await retryDueCRMDeliveries(25);
  const success = !("error" in result);
  return new Response(JSON.stringify({ success, ...result }), {
    status: success ? 200 : 500,
    headers: { "Content-Type": "application/json" },
  });
});
