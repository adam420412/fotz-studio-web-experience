// BabyLoveGrowth REST API sync.
// Pulls articles from https://api.babylovegrowth.ai/api/integrations/v1/articles
// and upserts them into public.blog_articles.
//
// Usage:
//   - Manual backfill / re-sync: POST (no body required, accepts JSON options).
//   - Scheduled cron (pg_cron + pg_net) hits this with the same payload shape.
//
// Required secrets (set via `supabase secrets set ...`):
//   - BABYLOVE_API_KEY            BabyLoveGrowth API key
//   - SUPABASE_URL                (auto-injected in Supabase Edge Functions)
//   - SUPABASE_SERVICE_ROLE_KEY   (auto-injected)
// Optional:
//   - BABYLOVE_SYNC_TOKEN         If set, the function additionally requires
//                                 `Authorization: Bearer <token>` — useful for
//                                 protecting the endpoint from random callers.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BABYLOVE_BASE_URL = "https://api.babylovegrowth.ai/api/integrations";
const DEFAULT_PAGE_SIZE = 100; // BabyLove allows up to 500
const MAX_PAGES = 200;          // Safety stop (≈ 20 000 articles at 100/req)
const FETCH_RETRIES = 4;
const FETCH_BASE_DELAY_MS = 500;

interface SyncOptions {
  /** How many articles per List page (1-500). Default 100. */
  limit?: number;
  /** Skip N articles before starting (for resuming). Default 0. */
  offset?: number;
  /** Stop after at most N upserts (for testing). Default: no limit. */
  maxArticles?: number;
  /** If true, refetch and overwrite even unchanged articles. Default false. */
  force?: boolean;
}

interface BabyLoveListItem {
  id: number;
  title: string;
  slug: string;
  hero_image_url?: string | null;
  heroImageUrl?: string | null;
  languageCode?: string | null;
  meta_description?: string | null;
  metaDescription?: string | null;
  excerpt?: string | null;
  created_at?: string | null;
  createdAt?: string | null;
  seedKeyword?: string | null;
  keywords?: unknown;
  publicUrl?: string | null;
  public_url?: string | null;
}

interface BabyLoveArticle extends BabyLoveListItem {
  content_html?: string | null;
  content_markdown?: string | null;
  jsonLd?: unknown;
  faqJsonLd?: unknown;
}

function pickFirst<T>(...values: Array<T | null | undefined>): T | null {
  for (const v of values) {
    if (v !== undefined && v !== null && v !== "") return v as T;
  }
  return null;
}

async function fetchWithRetry(
  url: string,
  init: RequestInit,
  attempts = FETCH_RETRIES,
): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      const res = await fetch(url, init);
      if (res.status === 429 || res.status >= 500) {
        // Rate-limited or upstream error — retry with backoff.
        const wait = FETCH_BASE_DELAY_MS * Math.pow(2, attempt);
        console.warn(
          `BabyLove ${url} -> ${res.status}, retrying in ${wait}ms (attempt ${attempt + 1}/${attempts})`,
        );
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      return res;
    } catch (err) {
      lastError = err;
      const wait = FETCH_BASE_DELAY_MS * Math.pow(2, attempt);
      console.warn(
        `BabyLove ${url} threw ${String(err)}, retrying in ${wait}ms (attempt ${attempt + 1}/${attempts})`,
      );
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error(`BabyLove fetch failed after ${attempts} attempts: ${String(lastError)}`);
}

async function listArticles(
  apiKey: string,
  limit: number,
  offset: number,
): Promise<BabyLoveListItem[]> {
  const url = `${BABYLOVE_BASE_URL}/v1/articles?limit=${limit}&offset=${offset}`;
  const res = await fetchWithRetry(url, {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`List articles failed (${res.status}): ${body}`);
  }
  const data = await res.json();
  // BabyLove returns either { articles: [...] } or just an array — normalise.
  if (Array.isArray(data)) return data as BabyLoveListItem[];
  if (Array.isArray(data?.articles)) return data.articles as BabyLoveListItem[];
  if (Array.isArray(data?.data)) return data.data as BabyLoveListItem[];
  console.warn("Unexpected list shape from BabyLove API:", JSON.stringify(data).slice(0, 300));
  return [];
}

async function fetchArticle(
  apiKey: string,
  id: number,
): Promise<BabyLoveArticle> {
  const url = `${BABYLOVE_BASE_URL}/v1/articles/${id}`;
  const res = await fetchWithRetry(url, {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Fetch article ${id} failed (${res.status}): ${body}`);
  }
  const data = await res.json();
  // Some APIs wrap the payload in `{ article: {...} }`.
  if (data?.article) return data.article as BabyLoveArticle;
  return data as BabyLoveArticle;
}

function toRow(article: BabyLoveArticle, source: string) {
  const heroImage = pickFirst(article.hero_image_url, article.heroImageUrl);
  const metaDesc = pickFirst(article.meta_description, article.metaDescription);
  const publicUrl = pickFirst(article.public_url, article.publicUrl);
  const externalCreatedAt = pickFirst(article.created_at, article.createdAt);

  return {
    external_id: article.id,
    title: article.title,
    slug: article.slug,
    meta_description: metaDesc,
    excerpt: article.excerpt ?? null,
    content_html: article.content_html ?? null,
    content_markdown: article.content_markdown ?? null,
    hero_image_url: heroImage,
    language_code: article.languageCode ?? "pl",
    public_url: publicUrl,
    external_created_at: externalCreatedAt,
    seed_keyword: article.seedKeyword ?? null,
    keywords: article.keywords ?? null,
    json_ld: article.jsonLd ?? null,
    faq_json_ld: article.faqJsonLd ?? null,
    is_published: true,
    published_at: new Date().toISOString(),
    last_synced_at: new Date().toISOString(),
    sync_source: source,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Optional shared-secret guard. Cron jobs / admin UI must send the matching token.
  const expectedToken = Deno.env.get("BABYLOVE_SYNC_TOKEN");
  if (expectedToken) {
    const authHeader = req.headers.get("Authorization") ?? "";
    const provided = authHeader.replace(/^Bearer\s+/i, "");
    if (provided !== expectedToken) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }

  const apiKey = Deno.env.get("BABYLOVE_API_KEY");
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: "BABYLOVE_API_KEY is not configured. Run `supabase secrets set BABYLOVE_API_KEY=...`.",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  let opts: SyncOptions = {};
  try {
    if (req.headers.get("content-length") && req.headers.get("content-length") !== "0") {
      opts = (await req.json()) as SyncOptions;
    }
  } catch (_err) {
    // ignore — empty/invalid body just means defaults
  }

  const limit = Math.min(Math.max(opts.limit ?? DEFAULT_PAGE_SIZE, 1), 500);
  const startOffset = Math.max(opts.offset ?? 0, 0);
  const hardCap = opts.maxArticles && opts.maxArticles > 0 ? opts.maxArticles : Infinity;
  const force = Boolean(opts.force);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const startedAt = Date.now();
  const summary = {
    pages: 0,
    listed: 0,
    upserted: 0,
    skipped: 0,
    failed: [] as Array<{ id: number; reason: string }>,
  };

  let offset = startOffset;
  for (let page = 0; page < MAX_PAGES; page++) {
    const items = await listArticles(apiKey, limit, offset);
    summary.pages += 1;
    summary.listed += items.length;

    if (items.length === 0) break;

    for (const item of items) {
      if (summary.upserted >= hardCap) break;

      // Skip already-fresh rows when not forcing.
      if (!force) {
        const { data: existing } = await supabase
          .from("blog_articles")
          .select("external_id, last_synced_at")
          .eq("external_id", item.id)
          .maybeSingle();
        if (existing?.last_synced_at) {
          summary.skipped += 1;
          continue;
        }
      }

      try {
        const full = await fetchArticle(apiKey, item.id);
        const row = toRow(full, "api-sync");
        const { error } = await supabase
          .from("blog_articles")
          .upsert(row, { onConflict: "external_id" });
        if (error) throw new Error(error.message);
        summary.upserted += 1;
      } catch (err) {
        console.error(`Failed to sync article ${item.id}:`, err);
        summary.failed.push({ id: item.id, reason: String(err) });
      }
    }

    if (summary.upserted >= hardCap) break;
    if (items.length < limit) break; // last page
    offset += limit;
  }

  const durationMs = Date.now() - startedAt;
  console.log("babylove-sync done:", summary, `${durationMs}ms`);

  return new Response(
    JSON.stringify({
      success: true,
      durationMs,
      ...summary,
    }),
    {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});
