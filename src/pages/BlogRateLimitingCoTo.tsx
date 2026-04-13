import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest rate limiting i throttling — czym się różnią?",
    answer: "Rate Limiting: ograniczenie liczby żądań w określonym czasie. 100 req/min per user. Throttling: spowolnienie requestów gdy przekroczą limit (zamiast odrzucania). Zwolnij do 10 req/min zamiast odrzucić. Cele rate limiting: ochrona przed DDoS i brute force. Sprawiedliwy podział zasobów między użytkowników. Ograniczenie kosztów API (billing per request). Compliance (GDPR, PCI DSS — limity prób logowania). Typy rate limiting: By IP Address — prosta ochrona, łatwa do obejścia przez proxy. By User ID — bardziej precyzyjne, wymaga autentykacji. By API Key — idealne dla B2B API. By Endpoint — różne limity per endpoint (/login ściślejszy niż /search). By Client (Mobile/Web) — różne limity per typ klienta. Compound (kombinacje): 100 req/min per user per IP. Odpowiedzi HTTP: 429 Too Many Requests. Retry-After header (kiedy można spróbować). X-RateLimit-Limit — maksymalny limit. X-RateLimit-Remaining — pozostałe żądania. X-RateLimit-Reset — timestamp resetu. RateLimit-Policy (RFC 9110) — standardowy header. Graceful degradation: zamiast 429 — zwróć cached response lub uproszczone dane.",
  },
  {
    question: "Token Bucket vs Leaky Bucket vs Sliding Window — algorytmy rate limiting?",
    answer: "Fixed Window Counter: zlicz requesty w oknie czasowym (np. 1 minuta). Reset licznika co minutę. Problem: burst na granicy okna (99 req o 00:59, 100 req o 01:01 = 199 req w 2 sekundy). Token Bucket: wiadro ma N tokenów. Każdy request zużywa 1 token. Tokeny uzupełniane w stałym tempie (rate). Jeśli brak tokenu -> 429. Zalety: burst jest dozwolony (jeśli tokeny dostępne), smoothing. Stripe, AWS API Gateway. Leaky Bucket: requesty wlewają się do wiadra. Wiadro 'przecieka' w stałym tempie (rate). Przepełnione wiadro -> 429. Zalety: absolutnie stały output rate. Wada: nie pozwala na burst. Sliding Window Log: zapisuj timestamp każdego requestu. Dla nowego requestu: policz ile requestów w ostatnim oknie (teraz - 1 min). Jeśli > limit -> 429. Precyzyjny, ale duże zużycie pamięci (per user log). Sliding Window Counter: hybryda Fixed Window i Sliding Window Log. Interpolacja między poprzednim i bieżącym oknem. Mniej pamięci niż pełny log. Rekomendacja: Token Bucket — ogólny cel, burst allowance. Fixed Window — proste implementacje, tolerancja boundary burst. Sliding Window — precyzyjne limity bez boundary burst. Leaky Bucket — gdy konieczny absolutnie stały output.",
  },
  {
    question: "Jak zaimplementować rate limiting z Redis?",
    answer: "Redis Fixed Window (INCR + EXPIRE): INCR ratelimit:user:123:2024041315. EXPIRE ratelimit:user:123:2024041315 60. Sprawdź czy wartość > limit. Problem: race condition między INCR a EXPIRE (użyj Lua script). Redis Lua Script (atomowy Fixed Window): local current = redis.call('incr', key). if current == 1 then redis.call('expire', key, window). end. return current. Porównaj z limitem. Redis Sliding Window Log: ZADD ratelimit:user:123 timestamp timestamp. ZREMRANGEBYSCORE ratelimit:user:123 0 (now-window). count = ZCARD ratelimit:user:123. Jeśli count >= limit -> 429. EXPIRE dla cleanup. Redis Token Bucket (Lua script): atomic get-and-set tokenów i timestamp. Redis sorted sets dla Sliding Window Log. Redis Cell (moduł): gotowy algorytm rate limiting (GCRA — Generic Cell Rate Algorithm). CL.THROTTLE user:123 100 1 60 1 -> [allowed, limit, remaining, retry-after, reset]. Redis Rate Limiting z Nginx: nginx-limit-req-module. limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s. limit_req zone=api burst=20 nodelay. Envoy Rate Limiting: lyft/ratelimit service. Envoy wysyła request do ratelimit service (gRPC). ratelimit odpowiada allowed/over_limit. Redis backend. Distributed Rate Limiting: każda instancja aplikacji korzysta z centralnego Redis. Zapewnia spójność limitów w całym klastrze.",
  },
  {
    question: "Rate limiting w API Gateway — Kong, AWS API Gateway, Nginx?",
    answer: "Kong Rate Limiting Plugin: config.minute — limit per minutę. config.hour — limit per godzinę. config.policy — local (per-node), redis (distributed), cluster. Credentials — per consumer lub per service. Consumer Groups — różne limity dla różnych klientów. Priority — Consumer > Route > Service hierarchy. AWS API Gateway: Usage Plans — przypisz API Key do Usage Plan. Throttle rate (requests per second). Burst limit (krótkoterminowy spike). Stage-level default limits. Odpowiedź 429 ThrottlingException. Nginx rate limiting: limit_req_zone — definiuje zone w shared memory. limit_req — stosuj rate limit do lokacji. burst — bufor dla krótkich spike'ów. nodelay — nie kolejkuj, odrzuć od razu. Traefik Rate Limiting Middleware: middlares.api-rate.ratelimit.average = 100. middlares.api-rate.ratelimit.period = 1m. Cloudflare Rate Limiting: Rules -> Rate Limiting. Per IP/ASN/Country. Custom response. DDoS L7 protection. Fastly Rate Limiting: VCL custom logic. Edge rate limiting (przed trafieniem do origin). Prezentacja rate limitów: Tier-based limits — Free: 100/h, Pro: 1000/h, Enterprise: unlimited. Per-endpoint limits — /auth: 5/min, /api: 1000/min. Dokumentacja limitsów w OpenAPI/Swagger spec.",
  },
  {
    question: "Jak unikać problemów z rate limiting w klientach API?",
    answer: "Exponential Backoff: przy 429 -> czekaj 2^attempt * base_delay + jitter. Jitter (losowość): bez jitter wszystkie klienty czekają tyle samo -> synchronized retry storm. Full Jitter: sleep = random(0, 2^attempt * base). Decorrelated Jitter (AWS recommendation): sleep = random(base, prev_sleep * 3). Circuit Breaker dla rate limits: po N kolejnych 429 -> otwórz circuit breaker. Nie wysyłaj requestów przez X sekund. Proactive Rate Limiting (Client-side): klient sam limituje swoje requesty. Token Bucket na kliencie. Nie czekaj na 429 od serwera. Retry-After header: serwer mówi kiedy można spróbować. Klient czeka dokładnie tyle. Batching: zamiast N requestów per item -> jeden request z N items. /batch endpoint lub GraphQL. Caching po stronie klienta: nie odpytuj API gdy dane są w lokalnym cache. Webhooks zamiast polling: serwer popycha dane przy zmianach. Zero polling = zero rate limit issues. SDK z wbudowanym rate limiting: oficjalne SDK (Stripe, Twilio, AWS) mają wbudowane retry i rate limiting. Używaj oficjalnych SDK. Monitoring po stronie klienta: śledzenie X-RateLimit-Remaining. Alert gdy < 20% pozostałego limitu. Automatyczna redukcja requestów. Load testing: zidentyfikuj rate limits przed produkcją. Twoje limity != limitów API gateway.",
  },
];

const algorithms = [
  { algorytm: "Fixed Window Counter", złożoność: "O(1)", pamięć: "O(1) per user", burst: "Boundary burst problem", implementacja: "INCR + EXPIRE w Redis", kto: "Proste systemy" },
  { algorytm: "Token Bucket", złożoność: "O(1)", pamięć: "O(1) per user", burst: "Dozwolony (tokeny)", implementacja: "Redis Lua script", kto: "Stripe, AWS, ogólne" },
  { algorytm: "Leaky Bucket", złożoność: "O(1)", pamięć: "O(1) per user", burst: "Niedozwolony (stały output)", implementacja: "Queue + timer", kto: "Traffic shaping, QoS" },
  { algorytm: "Sliding Window Log", złożoność: "O(N)", pamięć: "O(N requests)", burst: "Precyzyjny brak burst", implementacja: "Redis ZADD + ZCARD", kto: "Precyzyjne API, fintech" },
  { algorytm: "Sliding Window Counter", złożoność: "O(1)", pamięć: "O(1) per user", burst: "Aproksymacja sliding", implementacja: "Hybrid INCR", kto: "Balance precision/cost" },
  { algorytm: "GCRA (Generic Cell Rate)", złożoność: "O(1)", pamięć: "O(1) per user", burst: "Konfigurowalny burst", implementacja: "Redis Cell moduł", kto: "Telecom, cloud providers" },
];

export default function BlogRateLimitingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Rate Limiting — co to jest, Token Bucket, Redis, Nginx, Kong, AWS API Gateway | Fotz.pl"
        description="Rate Limiting: Token Bucket vs Leaky Bucket vs Sliding Window, implementacja z Redis, Kong, AWS API Gateway, Cloudflare i Exponential Backoff dla klientów API."
        canonicalUrl="https://fotz.pl/blog/rate-limiting-co-to-jest-token-bucket-redis-nginx-kong-aws-api-gateway"

        keywords="Rate Limiting co to jest, Rate Limiting jak działa, Rate Limiting tutorial, Rate Limiting przykład, czym jest Rate Limiting, Rate Limiting dokumentacja, Rate Limiting przewodnik"
      />
      <ArticleSchema
        title="Rate Limiting — co to jest, Token Bucket, Redis, Nginx, Kong, AWS API Gateway?"
        description="Rate Limiting: 6 algorytmów (Fixed Window/Token Bucket/Leaky Bucket/Sliding Window/GCRA), Redis implementacja, Kong/AWS Gateway, Exponential Backoff."
        url="https://fotz.pl/blog/rate-limiting-co-to-jest-token-bucket-redis-nginx-kong-aws-api-gateway"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Rate Limiting", url: "https://fotz.pl/blog/rate-limiting-co-to-jest-token-bucket-redis-nginx-kong-aws-api-gateway" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Rate Limiting", href: "/blog/rate-limiting-co-to-jest-token-bucket-redis-nginx-kong-aws-api-gateway" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              API Security / Performance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rate Limiting
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Token Bucket, Sliding Window, Redis Lua scripts, Kong/Nginx/AWS Gateway
              — ochrona API przed przeciążeniem i DDoS.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Burst-friendly", value: "Token Bucket" },
                { label: "Stały output", value: "Leaky Bucket" },
                { label: "Distributed cache", value: "Redis" },
                { label: "Edge protection", value: "Cloudflare" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-rose-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Algorytmy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 algorytmów rate limiting</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy algorytm oferuje inny trade-off między precyzją, zużyciem pamięci
              i obsługą burst ruchu.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Algorytm</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Złożoność</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Pamięć</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Burst</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Implementacja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kto używa</th>
                </tr>
              </thead>
              <tbody>
                {algorithms.map((a, i) => (
                  <tr key={a.algorytm} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{a.algorytm}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.złożoność}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.pamięć}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.burst}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.implementacja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{a.kto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
