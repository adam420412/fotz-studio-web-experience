import { checkPublicRateLimit, isAllowedOrigin, publicCorsHeaders } from "../_shared/public-intake.ts";

const respond = (req: Request, body: Record<string, unknown>, status = 200) => new Response(
  JSON.stringify(body),
  { status, headers: { ...publicCorsHeaders(req), "Content-Type": "application/json" } },
);

const fallback = "Napisz na adam@fotz.pl lub zadzwoń pod +48 790 814 814.";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    if (!isAllowedOrigin(req)) return new Response(null, { status: 403 });
    return new Response(null, { headers: publicCorsHeaders(req) });
  }
  if (req.method !== "POST") return respond(req, { error: "METHOD_NOT_ALLOWED" }, 405);
  if (!isAllowedOrigin(req)) return respond(req, { error: "ORIGIN_NOT_ALLOWED" }, 403);

  const rateLimit = await checkPublicRateLimit(req, "chatbot-ai", 12, 600);
  if (!rateLimit.configured) return respond(req, { error: "RATE_LIMIT_NOT_CONFIGURED", answer: fallback }, 503);
  if (!rateLimit.allowed) {
    return respond(req, {
      error: "rate_limit",
      answer: `Mam teraz dużo pytań. Spróbuj ponownie za kilka minut albo ${fallback}`,
    }, 429);
  }

  let message = "";
  try {
    const rawBody = await req.text();
    if (rawBody.length > 8_000) return respond(req, { error: "PAYLOAD_TOO_LARGE", answer: fallback }, 413);
    const body = JSON.parse(rawBody) as { message?: unknown };
    message = typeof body.message === "string" ? body.message.trim().slice(0, 1_000) : "";
  } catch {
    return respond(req, { error: "INVALID_JSON", answer: fallback }, 400);
  }
  if (!message) return respond(req, { error: "MESSAGE_REQUIRED", answer: fallback }, 400);

  const lovableApiKey = Deno.env.get("LOVABLE_API_KEY")?.trim();
  if (!lovableApiKey) {
    console.error("[chatbot-ai] LOVABLE_API_KEY is not configured");
    return respond(req, { error: "AI_NOT_CONFIGURED", answer: fallback }, 503);
  }

  const systemPrompt = `Jesteś asystentem FOTZ Studio z Poznania. Odpowiadasz po polsku, krótko i konkretnie, maksymalnie w trzech zdaniach.

FOTZ Studio pomaga firmom w produkcji wideo i zdjęć, stałym contencie, social media, stronach internetowych, SEO, kampaniach oraz kreacji. Główny rozwijany zakres stałej współpracy to pakiety około 3–5 tys. zł netto, ale dokładna wycena zależy od celu, liczby materiałów i produkcji.

Kontakt: adam@fotz.pl, +48 790 814 814, Plac Wolności 16, 61-739 Poznań. Bezpłatna konsultacja trwa 30 minut i można ją umówić na /konsultacja.

Nie wymyślaj realizacji, terminów, rabatów, gwarantowanych wyników ani cen, których tu nie podano. Gdy brakuje danych, poproś o kontakt lub rezerwację konsultacji.`;

  try {
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${lovableApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      console.error("[chatbot-ai] gateway request failed", { status: response.status });
      const error = response.status === 429 ? "rate_limit" : response.status === 402 ? "payment_required" : "AI_GATEWAY_ERROR";
      return respond(req, { error, answer: fallback }, response.status === 429 ? 429 : 502);
    }

    const data = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
    const answer = data.choices?.[0]?.message?.content?.trim() || fallback;
    return respond(req, { answer: answer.slice(0, 2_000) });
  } catch (error) {
    console.error("[chatbot-ai] network request failed", error instanceof Error ? error.message : "unknown");
    return respond(req, { error: "AI_NETWORK_ERROR", answer: fallback }, 502);
  }
});
