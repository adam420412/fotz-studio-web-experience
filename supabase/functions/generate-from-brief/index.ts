// Generates a blog article from a Topical Map AI brief using Lovable AI Gateway.
// Auth: requires admin JWT (verify_jwt = true).
// Flow: pick next pending job from topical_brief_jobs -> prompt LLM -> insert
// draft into blog_articles (is_published=false) -> mark job done.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;

const SYSTEM_PROMPT = `Jesteś senior content writerem agencji Fotz Studio (Poznań) — premium creative studio specjalizujące się w marketingu, social media, video, web i SEO.

TON: ekspercki, konkretny, premium, z polotem; bez waty marketingowej; bez emoji; bez sztampy AI ("warto pamiętać", "w dzisiejszych czasach").
JĘZYK: polski, prosty ale profesjonalny; krótkie zdania; aktywne czasowniki.
FORMAT: czysty HTML (BEZ <html>, <head>, <body>); używaj <h2>, <h3>, <p>, <ul><li>, <strong>, <a href>; każdy tekst opakowany w odpowiedni tag.
SEO: target keyword w pierwszym <p> i jednym <h2>; gęstość 1-1.5%; pisz pod intent użytkownika, nie pod robota.
LINKI WEWNĘTRZNE: wpleć 2-4 linki do innych stron Fotz (np. /agencja-social-media, /social-media/obsluga, /performance-marketing/facebook-ads, /uslugi/produkcja-video, /seo/pozycjonowanie, /kontakt) — pasujące tematycznie.
CTA: zakończ akapitem zachęcającym do bezpłatnej konsultacji z linkiem do /kontakt.
DATY: jeśli używasz, format "1 cze 2026" (polskie skróty miesięcy lowercase).
ZAKAZ: nie zaczynaj od "W dzisiejszych", "Wraz z rozwojem", "Coraz więcej firm".`;

function buildUserPrompt(job: {
  target_keyword: string;
  cluster_slug: string;
  brief_markdown: string;
  word_count_target: number;
  search_intent: string | null;
}) {
  return `Napisz artykuł blogowy zoptymalizowany pod frazę "${job.target_keyword}".

Klaster tematyczny: ${job.cluster_slug}
Intencja wyszukiwania: ${job.search_intent ?? "Informational"}
Długość docelowa: ${job.word_count_target} słów.

Skorzystaj z poniższego briefu jako szkieletu, ale napisz oryginalny, ekspercki tekst — NIE kopiuj briefu:

---BRIEF---
${job.brief_markdown.slice(0, 6000)}
---KONIEC BRIEFU---

Zwróć WYŁĄCZNIE poprawny JSON (bez markdown fences) o strukturze:
{
  "title": "tytuł max 60 znaków, z frazą kluczową",
  "meta_description": "max 155 znaków, z frazą kluczową i CTA",
  "excerpt": "1-2 zdania lead",
  "content_html": "pełny artykuł w HTML, używaj <h2>/<h3>/<p>/<ul>/<a>",
  "faq": [{"q":"...", "a":"..."}, ...] (3-5 pytań FAQ pod artykuł)
}`;
}

async function callLLM(prompt: string): Promise<string> {
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`AI gateway ${res.status}: ${txt.slice(0, 500)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}

function extractJson(raw: string): Record<string, unknown> {
  const cleaned = raw
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("No JSON in LLM output");
  return JSON.parse(cleaned.slice(start, end + 1));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
    const body = await req.json().catch(() => ({}));
    const jobId: string | undefined = body.job_id;

    // Pick job: explicit id or oldest pending
    let query = supabase.from("topical_brief_jobs").select("*").limit(1);
    query = jobId
      ? query.eq("id", jobId)
      : query.eq("status", "pending").order("created_at", { ascending: true });
    const { data: jobs, error: jobErr } = await query;
    if (jobErr) throw jobErr;
    const job = jobs?.[0];
    if (!job) {
      return new Response(
        JSON.stringify({ ok: true, message: "no pending jobs" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    await supabase
      .from("topical_brief_jobs")
      .update({ status: "running", attempts: job.attempts + 1 })
      .eq("id", job.id);

    const prompt = buildUserPrompt(job);
    const raw = await callLLM(prompt);
    const parsed = extractJson(raw) as {
      title: string;
      meta_description: string;
      excerpt: string;
      content_html: string;
      faq?: Array<{ q: string; a: string }>;
    };

    const faqJsonLd = parsed.faq?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: parsed.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

    const { data: inserted, error: insErr } = await supabase
      .from("blog_articles")
      .insert({
        title: parsed.title.slice(0, 200),
        slug: job.target_slug,
        meta_description: parsed.meta_description?.slice(0, 200) ?? null,
        excerpt: parsed.excerpt ?? null,
        content_html: parsed.content_html,
        target_keyword: job.target_keyword,
        cluster_slug: job.cluster_slug,
        parent_pillar_slug: job.pillar_slug,
        sync_source: "topical-map",
        is_published: false,
        faq_json_ld: faqJsonLd,
        keywords: [job.target_keyword],
      })
      .select("id")
      .single();
    if (insErr) throw insErr;

    await supabase
      .from("topical_brief_jobs")
      .update({
        status: "done",
        generated_article_id: inserted.id,
        last_error: null,
      })
      .eq("id", job.id);

    return new Response(
      JSON.stringify({ ok: true, article_id: inserted.id, slug: job.target_slug }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("generate-from-brief failed:", message);
    // Best effort: mark job failed
    try {
      const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);
      const body = await req.clone().json().catch(() => ({}));
      if (body.job_id) {
        await supabase
          .from("topical_brief_jobs")
          .update({ status: "failed", last_error: message.slice(0, 1000) })
          .eq("id", body.job_id);
      }
    } catch (_) {
      // ignore
    }
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});