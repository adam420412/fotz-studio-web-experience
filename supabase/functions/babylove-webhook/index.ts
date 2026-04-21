import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BabyLovePayload {
  id: number;
  title: string;
  slug: string;
  metaDescription?: string;
  excerpt?: string;
  content_html?: string;
  heroImageUrl?: string;
  content_markdown?: string;
  languageCode?: string;
  publicUrl?: string;
  createdAt?: string;
  seedKeyword?: string;
  keywords?: unknown;
  jsonLd?: unknown;
  faqJsonLd?: unknown;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Only allow POST
    if (req.method !== "POST") {
      console.log(`Method not allowed: ${req.method}`);
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Verify Bearer token
    const authHeader = req.headers.get("Authorization");
    const expectedSecret = Deno.env.get("BABYLOVE_WEBHOOK_SECRET");

    if (!authHeader) {
      console.log("Missing Authorization header");
      return new Response(JSON.stringify({ error: "Missing Authorization header" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const token = authHeader.replace("Bearer ", "");
    if (token !== expectedSecret) {
      console.log("Invalid token provided");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Parse payload
    const payload: BabyLovePayload = await req.json();
    console.log("Received payload:", JSON.stringify(payload, null, 2));

    // Validate required fields
    if (!payload.id || !payload.title || !payload.slug) {
      console.log("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields: id, title, slug" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Create Supabase admin client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Upsert article (update if external_id exists, insert otherwise)
    const { data, error } = await supabase
      .from("blog_articles")
      .upsert(
        {
          external_id: payload.id,
          title: payload.title,
          slug: payload.slug,
          meta_description: payload.metaDescription || null,
          excerpt: payload.excerpt || null,
          content_html: payload.content_html || null,
          content_markdown: payload.content_markdown || null,
          hero_image_url: payload.heroImageUrl || null,
          language_code: payload.languageCode || "pl",
          public_url: payload.publicUrl || null,
          external_created_at: payload.createdAt || null,
          seed_keyword: payload.seedKeyword || null,
          keywords: payload.keywords ?? null,
          json_ld: payload.jsonLd ?? null,
          faq_json_ld: payload.faqJsonLd ?? null,
          published_at: new Date().toISOString(),
          last_synced_at: new Date().toISOString(),
          sync_source: "webhook",
          is_published: true,
        },
        {
          onConflict: "external_id",
        }
      )
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save article", details: error.message }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Article saved successfully:", data.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Article received and saved",
        articleId: data.id,
        slug: data.slug,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
