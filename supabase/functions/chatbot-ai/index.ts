import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Jesteś pomocnym asystentem agencji marketingowej FOTZ Studio z Poznania. Odpowiadasz krótko, konkretnie i profesjonalnie po polsku.

O firmie FOTZ Studio:
- Agencja marketingowa i reklamowa z Poznania
- Specjalizacja: strony internetowe, identyfikacja wizualna, social media, kampanie reklamowe, SEO, produkcja wideo
- Kontakt: kontakt@fotz.pl, +48 123 456 789
- Adres: Poznań, ul. Przykładowa 10
- Godziny pracy: pon-pt 9:00-17:00

Usługi i ceny orientacyjne:
- Strony internetowe: od 3000 zł (2-6 tygodni)
- Logo i identyfikacja wizualna: od 1500 zł (2-4 tygodnie)
- Social media: od 2000 zł/msc
- Kampanie reklamowe: od 2000 zł/msc + budżet reklamowy min. 1500 zł
- SEO: od 1500 zł/msc (efekty po 3-6 miesiącach)
- Produkcja wideo: od 3000 zł

Branże obsługiwane:
- E-commerce i retail
- Gastronomia i HoReCa
- Nieruchomości i deweloperzy
- Medycyna i zdrowie
- Beauty i wellness
- IT i technologie
- Automotive
- Turystyka
- Edukacja
- NGO i instytucje
- Prawo i finanse
- Produkcja przemysłowa

Proces współpracy:
1. Bezpłatna konsultacja (30 min)
2. Brief i wycena
3. Umowa i zaliczka 50%
4. Realizacja z feedbackiem klienta
5. Akceptacja i rozliczenie

Zasady odpowiedzi:
- Odpowiadaj krótko (max 2-3 zdania)
- Bądź pomocny i profesjonalny
- Zachęcaj do kontaktu lub konsultacji
- Podawaj konkretne informacje
- Nie wymyślaj faktów, których nie znasz`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ 
          error: "rate_limit",
          answer: "Przepraszam, mam chwilowo dużo pytań. Spróbuj ponownie za chwilę lub skontaktuj się bezpośrednio: kontakt@fotz.pl" 
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ 
          error: "payment_required",
          answer: "Przepraszam, wystąpił problem techniczny. Skontaktuj się z nami bezpośrednio: kontakt@fotz.pl lub +48 123 456 789." 
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || "Przepraszam, nie mogę teraz odpowiedzieć. Skontaktuj się z nami: kontakt@fotz.pl";

    return new Response(JSON.stringify({ answer }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error",
      answer: "Przepraszam, wystąpił błąd. Skontaktuj się z nami bezpośrednio: kontakt@fotz.pl lub +48 123 456 789."
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
