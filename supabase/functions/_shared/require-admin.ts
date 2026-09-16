import { createClient } from "npm:@supabase/supabase-js@2";

export async function isAdminRequest(req: Request): Promise<boolean> {
  const authorization = req.headers.get("authorization") || "";
  const token = authorization.toLowerCase().startsWith("bearer ")
    ? authorization.slice(7).trim()
    : "";
  const url = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!token || !url || !serviceRoleKey) return false;

  const supabase = createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data: userResult, error: userError } = await supabase.auth.getUser(token);
  if (userError || !userResult.user) return false;

  const { data: hasRole, error: roleError } = await supabase.rpc("has_role", {
    _user_id: userResult.user.id,
    _role: "admin",
  });
  if (roleError) {
    console.error("[admin-auth] role lookup failed", { error: roleError.message });
    return false;
  }
  return hasRole === true;
}
