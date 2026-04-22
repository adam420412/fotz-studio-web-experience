import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TestResponse {
  scenario: string;
  status: number;
  ok: boolean;
  body: unknown;
  durationMs: number;
  error?: string;
}

function buildSamplePayload() {
  const ts = Date.now();
  return {
    id: 999000000 + Math.floor(Math.random() * 1000),
    title: `[TEST] Webhook BabyLove – ${new Date().toISOString()}`,
    slug: `test-webhook-${ts}`,
    metaDescription: "Testowy artykuł wygenerowany z panelu admina, by zweryfikować integrację webhooka.",
    excerpt: "To jest testowy lead artykułu wysłany z dashboardu, służy wyłącznie do testów.",
    content_html: "<h2>Test webhooka</h2><p>Treść testowa.</p>",
    content_markdown: "## Test webhooka\n\nTreść testowa.",
    heroImageUrl: null,
    languageCode: "pl",
    publicUrl: null,
    createdAt: new Date().toISOString(),
    seedKeyword: "test",
    keywords: ["test", "webhook"],
    jsonLd: null,
    faqJsonLd: null,
  };
}

async function callWebhook(url: string, token: string, payload: unknown): Promise<TestResponse> {
  const start = Date.now();
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    let body: unknown = text;
    try {
      body = JSON.parse(text);
    } catch {
      // leave body as text
    }
    return {
      scenario: "",
      status: res.status,
      ok: res.ok,
      body,
      durationMs: Date.now() - start,
    };
  } catch (error) {
    return {
      scenario: "",
      status: 0,
      ok: false,
      body: null,
      durationMs: Date.now() - start,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Authenticate caller as admin
    const authHeader = req.headers.get("Authorization") ?? "";
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const adminClient = createClient(supabaseUrl, serviceKey);
    const { data: roleRow } = await adminClient
      .from("user_roles")
      .select("role")
      .eq("user_id", userData.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleRow) {
      return new Response(JSON.stringify({ error: "Forbidden – admin role required" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const secret = Deno.env.get("BABYLOVE_WEBHOOK_SECRET");
    if (!secret) {
      return new Response(
        JSON.stringify({
          error:
            "BABYLOVE_WEBHOOK_SECRET nie jest ustawiony – ustaw sekret w Lovable Cloud.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const webhookUrl = `${supabaseUrl}/functions/v1/babylove-webhook`;
    const payload = buildSamplePayload();

    // Run two scenarios in parallel: bad token (expect 401) and valid token (expect 200)
    const [badRes, goodRes] = await Promise.all([
      callWebhook(webhookUrl, "obviously-wrong-token-for-test", payload),
      callWebhook(webhookUrl, secret, payload),
    ]);

    badRes.scenario = "invalid_token";
    goodRes.scenario = "valid_token";

    // Best-effort cleanup of the inserted test article
    let cleanup: { deleted: boolean; error?: string } = { deleted: false };
    if (goodRes.ok) {
      const { error: delErr } = await adminClient
        .from("blog_articles")
        .delete()
        .eq("external_id", payload.id);
      cleanup = { deleted: !delErr, error: delErr?.message };
    }

    return new Response(
      JSON.stringify({
        webhookUrl,
        payloadPreview: {
          id: payload.id,
          slug: payload.slug,
          title: payload.title,
        },
        results: [badRes, goodRes],
        cleanup,
        summary: {
          invalidTokenBlocked: badRes.status === 401,
          validTokenAccepted: goodRes.status === 200,
        },
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("babylove-webhook-test error:", error);
    return new Response(
      JSON.stringify({ error: "Internal error", details: String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});