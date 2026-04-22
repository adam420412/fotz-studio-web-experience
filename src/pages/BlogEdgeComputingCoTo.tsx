import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Edge Computing i czym różni się od Cloud Computing?",
    answer: "Edge Computing to paradygmat obliczeniowy gdzie przetwarzanie danych odbywa się bliżej źródła danych lub użytkownika — na 'krawędzi' sieci — zamiast w centralnym data center (cloud). Przykłady: Cloudflare Workers — kod JavaScript uruchamiany w 300+ lokalizacjach na świecie. AWS Lambda@Edge — Lambda na węzłach CloudFront CDN. Fastly Compute — edge computing Fastly. Vercel Edge Functions, Netlify Edge Functions. Cloud vs. Edge: Cloud: dane i obliczenia w centralnych data centers (us-east-1, eu-west-1). Latency: 50-200ms do większości użytkowników. Edge: obliczenia 10-50ms od każdego użytkownika (Cloudflare 95% użytkowników internetu w 50ms). Latency: 1-50ms. Zalety Edge: niższe latency (geograficznie bliżej). Wyższy throughput (brak bottleneck w jednym regionie). Odporność (jedna lokalizacja nie wyłącza wszystkiego). Kosztowe: często płacisz za faktyczne execution. Ograniczenia Edge: mniejsza pamięć i CPU vs. full Lambda/EC2. Krótki czas wykonania (Cloudflare Workers: 10ms CPU time per request). Brak stanowości (stateless — każde żądanie od zera). Brak długich połączeń (TCP, persistent connections). Idealny dla: personalizacja treści, A/B testing, request routing, authentication tokens, static response cache, geolocation-based content.",
  },
  {
    question: "Cloudflare Workers — jak działają i jak zacząć?",
    answer: "Cloudflare Workers: Architektura: Workers działają na V8 isolates — ultralekim sandboxie opartym na V8 JavaScript engine (Chrome). Nie Docker, nie VMs — isolates startują w mikrosekundy vs. sekundy dla kontenerów. Cold start: praktycznie zero (w odróżnieniu od AWS Lambda cold start który może trwać setki ms). Runtime: Workers Service Worker API (fetch event handling) + Web Standard APIs (Fetch API, Streams, WebCrypto, URL). Wasm support — możesz uruchamiać skompilowane C/C++/Rust. Wbudowane storage: KV (Key-Value store) — globalnie replikowany, eventual consistency. Eventually consistent. Durable Objects — strongly consistent storage, stateful workers. R2 — S3-compatible object storage bez egress fees. D1 — distributed SQLite database (SQL na edge!). Queues — message queuing. Prosty Worker (JavaScript): addEventListener('fetch', event => { event.respondWith(new Response('Hello World!')); }). Wdrożenie: Wrangler CLI (npm install -g wrangler). wrangler init → wrangler dev (lokalnie) → wrangler deploy. Pricing: 100,000 requestów/dzień za darmo. Paid: $5/miesiąc za 10 milionów requestów + CPU time. Use cases: Authentication/JWT validation na edge. A/B testing routing. Personalizacja HTML (np. podmień elementy na podstawie geolocation). Bot protection. Image optimization (resizing, format conversion).",
  },
  {
    question: "Edge Functions vs. SSR vs. SSG — kiedy używać czego?",
    answer: "Edge Functions vs. SSR vs. SSG w kontekście nowoczesnego web: SSG (Static Site Generation): build-time generowanie HTML. Najszybsze dla użytkownika (pliki statyczne z CDN). Zero server cost per request. Nie można personalizować per user. Use case: marketing sites, dokumentacja, blog. SSR (Server-Side Rendering): każde żądanie generuje HTML na serwerze. Aktualne dane, personalizacja. Latency zależy od lokalizacji serwera. Use case: dashboardy, e-commerce (inventory-aware pages). Edge SSR: SSR uruchamiany na edge, nie w centralnym data center. HTML generowany 10-50ms od użytkownika. Next.js Edge Runtime, Nuxt Edge, SvelteKit na Cloudflare. ISR (Incremental Static Regeneration): cache HTML na CDN, ale odśwież w tle. Next.js On-Demand ISR + Edge. Edge Middleware: kod uruchamiany na edge dla każdego requesta PRZED trafieniem do origin. Użycia: authentication (verify JWT bez round-trip do origin), geolocation redirect, feature flags (route do różnych backends), bot detection. Rewriting/redirecting: edge idealny do A/B testing — 50% requestów → /variant-a, 50% → /variant-b — bez round-trip do origin serwera. Vercel Edge Config — globalna konfiguracja feature flags na edge.",
  },
  {
    question: "Edge Computing dla IoT i przemysłu — zastosowania?",
    answer: "Edge Computing w IoT i przemyśle: Dlaczego Edge dla IoT: setki tysięcy urządzeń IoT nie mogą wszystkiego wysyłać do chmury — bandwidth, latency, connectivity issues. Edge gateways procesują dane lokalnie. Industrial IoT (IIoT): manufacturing — real-time analiza danych z linii produkcyjnej (anomaly detection, predictive maintenance). Dane z czujników muszą być przetworzone w ms, nie sekundy. Cloud latency jest nie do przyjęcia dla real-time control systems. Autonomous Vehicles: self-driving car nie może czekać na round-trip do chmury przy decyzji hamowania. Edge Processing (onboard computer) + selective sync do chmury. Smart Cities: traffic lights z edge computing — adaptive timing na podstawie real-time ruchu. Monitoring infrastruktury (mosty, drogi) z local edge analysis. Healthcare: medical devices z edge AI — analiza EKG w urządzeniu, alert lokalnie. Dane HIPAA-regulated mogą nie opuszczać urządzenia/szpitala. Architektura Edge-Cloud Continuum: urządzenie (microcontroller, latency: 0ms) → Edge Gateway (local processing, latency: 1-10ms) → Regional Edge (Cloudflare/CDN, latency: 10-50ms) → Cloud (centralne analytics, ML training, latency: 50-200ms). Nie wszystkie dane idą do chmury — tylko aggregated insights. Narzędzia: Azure IoT Edge, AWS Greengrass, Eclipse Edge Native.",
  },
  {
    question: "Jak mierzyć i optymalizować wydajność Edge?",
    answer: "Wydajność Edge Computing: Kluczowe metryki: P95/P99 latency per region (sprawdź outliers). Cold start rate i duration (dla Workers: prawie zero, dla Lambda@Edge: może być znaczący). CPU time per request (Cloudflare limit: 10ms CPU per request). Memory usage. Error rate per edge location. Narzędzia do monitoringu: Cloudflare Analytics — built-in, per request analytics. Workers Trace Events — debugging per-request context. OpenTelemetry exporters z Workers (custom). Sentry Edge — error tracking. Geograficzne testowanie: testuj z różnych regionów (Pingdom, Catchpoint). Sprawdź time-to-first-byte (TTFB) per kraj. Użyj Cloudflare's own Radar dla global performance insights. Optymalizacje: Minimize round-trips do origin — każdy round-trip z edge do origin = +latency. Cache agresywnie na edge (Cache API w Workers). Use Durable Objects dla stanowych operacji — unikaj round-trip do bazy. Stream responses — nie czekaj na pełny response przed wysłaniem. WebAssembly — krytyczne obliczenia w Wasm zamiast JS (szybsze). Database na edge: D1 (Cloudflare SQLite), PlanetScale Edge, Neon Edge — query DB bezpośrednio z edge bez round-trip do centralnej bazy. Turfing: match-head requestów do najbliższego origin per region dla globalnych aplikacji.",
  },
];

const edgePlatforms = [
  { platforma: "Cloudflare Workers", runtime: "V8 Isolates (JS/Wasm)", lokalizacje: "300+", storage: "KV, Durable Objects, R2, D1", limit: "10ms CPU/req, 128MB RAM" },
  { platforma: "AWS Lambda@Edge", runtime: "Node.js, Python", lokalizacje: "CloudFront PoP", storage: "DynamoDB Global", limit: "5s execution, 128MB RAM" },
  { platforma: "Fastly Compute", runtime: "Wasm (Rust, C, Go, JS)", lokalizacje: "90+", storage: "Config Store, KV", limit: "50ms wall time" },
  { platforma: "Vercel Edge Functions", runtime: "V8 Isolates (JS/TS)", lokalizacje: "Globalnie", storage: "Edge Config, KV (beta)", limit: "25MB code, 1MB response" },
  { platforma: "Deno Deploy", runtime: "Deno (JS/TS)", lokalizacje: "35+", storage: "KV (built-in)", limit: "50ms CPU/req" },
];

const edgeUseCases = [
  { useCase: "Authentication / JWT Validation", benefit: "Weryfikacja tokenu na edge — zero round-trip do auth serwera", platform: "Cloudflare Workers / Next.js Middleware" },
  { useCase: "Geolocation-Based Routing", benefit: "Redirect do regionalnego serwisu na podstawie IP country", platform: "Wszystkie platformy edge" },
  { useCase: "A/B Testing", benefit: "Split traffic na edge — brak flicker, zero origin round-trip", platform: "Vercel Edge Config, Cloudflare Workers" },
  { useCase: "Bot Protection", benefit: "Blokuj boty zanim dotrą do origin (fingerprinting, rate limit)", platform: "Cloudflare WAF, Workers" },
  { useCase: "Image Optimization", benefit: "Resize, convert format (WebP/AVIF) na edge per-request", platform: "Cloudflare Images, Vercel Image Optimization" },
  { useCase: "Personalization", benefit: "Podmień HTML elementy na podstawie user segment — bez full SSR", platform: "Cloudflare Workers, Edge SSR" },
];

export default function BlogEdgeComputingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Edge Computing | Fotz Studio"
        description="Edge Computing: definicja, Cloudflare Workers, Edge Functions vs SSR vs SSG, IoT edge, platformy (Fastly, Vercel, Deno Deploy) i use cases."
        canonicalUrl="https://fotz.pl/blog/edge-computing-co-to-jest-cloudflare-workers-edge-functions"

        keywords="Edge Computing co to jest, Edge Computing definicja, czym jest Edge Computing, Edge Computing przykłady, jak działa Edge Computing, Edge Computing znaczenie, Edge Computing przewodnik"

        canonical="https://fotz.pl/blog/edge-computing-co-to-jest-cloudflare-workers-edge-functions"
      />
      <ArticleSchema
        title="Edge Computing — co to jest, Cloudflare Workers i Edge Functions?"
        description="Edge Computing: architektura, 5 platform (Cloudflare/AWS/Fastly/Vercel/Deno), 6 use cases, Edge SSR, IoT edge i optymalizacja wydajności."
        url="https://fotz.pl/blog/edge-computing-co-to-jest-cloudflare-workers-edge-functions"
        datePublished="2024-04-05"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Edge Computing", url: "https://fotz.pl/blog/edge-computing-co-to-jest-cloudflare-workers-edge-functions" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Edge Computing", url: "/blog/edge-computing-co-to-jest-cloudflare-workers-edge-functions" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Cloud / Web Performance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Edge Computing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zamiast round-trip do serwera w Virginii — kod uruchamia się
              50ms od każdego użytkownika na świecie. Edge Computing to
              przyszłość web performance, personalizacji i real-time aplikacji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Lider rynku", value: "Cloudflare Workers" },
                { label: "Lokalizacje CF", value: "300+ PoP" },
                { label: "Latency Edge", value: "1-50ms" },
                { label: "Cold start Workers", value: "~0ms" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych use cases Edge Computing</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Edge Computing sprawdza się najlepiej tam gdzie liczy się latency,
              personalizacja bez round-trip i globalne dostępność.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {edgeUseCases.map((u) => (
              <FadeInView key={u.useCase}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{u.useCase}</h3>
                  <p className="text-gray-700 text-sm mb-2">{u.benefit}</p>
                  <p className="text-xs text-orange-700 font-medium">{u.platform}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Platformy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platformy Edge Computing — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Pięć głównych platform edge różni się runtime, liczbą lokalizacji
              i dostępnym storage.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Platforma</th>
                  <th className="text-left p-3 font-bold text-gray-900">Runtime</th>
                  <th className="text-left p-3 font-bold text-gray-900">Lokalizacje</th>
                  <th className="text-left p-3 font-bold text-gray-900">Limit</th>
                </tr>
              </thead>
              <tbody>
                {edgePlatforms.map((p, i) => (
                  <tr key={p.platforma} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{p.platforma}</td>
                    <td className="p-3 text-gray-700 text-xs">{p.runtime}</td>
                    <td className="p-3 text-gray-700">{p.lokalizacje}</td>
                    <td className="p-3 text-gray-600 text-xs">{p.limit}</td>
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

      <RelatedArticles currentArticleId="edge-computing-co-to-jest-cloudflare-workers-edge-functions" />
      <ContactSection />
    </Layout>
  );
}
