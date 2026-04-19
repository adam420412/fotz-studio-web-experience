import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są Micro Frontends i kiedy ich używać?",
    answer: "Micro Frontends to architektura frontend która rozkłada monolityczny frontend na mniejsze, niezależne aplikacje (micro frontends) które mogą być budowane, deployowane i utrzymywane przez różne zespoły niezależnie. Analogia do mikrousług: tak jak mikrousługi rozkładają monolity backendowe, micro frontends robią to samo dla frontendu. Główne zalety: Niezależne deploymenty — team A deployuje swoją część bez czekania na team B. Technologiczna niezależność — jeden MF może używać React, inny Vue. Skalowanie organizacyjne — każdy team posiada swój obszar UI end-to-end. Kiedy warto: duże zespoły (15+ frontend developers). Wiele niezależnych domen biznesowych w jednym produkcie (ecommerce: catalog + checkout + account). Legacy migration — stopniowo zastępuj stary monolityczny frontend nowymi MF. Kiedy NIE warto: mały zespół (1-5 osób). Prosta aplikacja. Overhead zarządzania MF nie jest wart przy małej skali. Problemy do rozwiązania: shared state (jak team A wie o loginie z team B?). Shared UI (design system). Performance (bundle size — każdy MF może duplikować React). Security (cross-origin, iframes). Routing (jak nawigacja między MF). Pionierzy: Spotify (backend for frontend), IKEA, Zalando, ThoughtWorks Tech Radar: Micro Frontends jako 'Adopt' od 2019.",
  },
  {
    question: "Jak implementować Micro Frontends — techniki i podejścia?",
    answer: "Implementacje Micro Frontends: 1. iFrame-based: najprostszy — każdy MF jest osobnym iframe. Izolacja CSS i JS — zero konfliktów. Wady: słabe UX (scrolling, routing), security restrictions, SEO problemy. Dziś rzadko używany. 2. Web Components: każdy MF eksportuje Web Component (Custom Elements). Framework-agnostic — działa z React, Vue, Angular, Vanilla. Narzędzia: Lit (Google), Stencil. Problem: performance, server-side rendering. 3. Module Federation (Webpack 5): dynamiczne ładowanie komponentów z innego deploy-owanego bundla. 'Remote' MF eksportuje komponenty, 'Host' importuje w runtime. Jedna z najpopularniejszych technik. Szczegóły poniżej. 4. Import Maps: natywna przeglądarkowa specyfikacja dla mapowania nazw modułów na URL-e. Pozwala na lazy loading MF z różnych URL-ów. Narzędzia: systemjs, importmap-manager. 5. Server-Side Composition: serwer (np. Nginx, CDN Edge, Tailor.js) kompiluje HTML z różnych MF przed wysłaniem do przeglądarki. Najlepsza wydajność i SEO. Złożona implementacja. 6. Single-SPA: framework do orchestracji wielu SPA na jednej stronie. Router który aktywuje/deaktywuje micro apps. Bardzo popularne, dużo toolingu.",
  },
  {
    question: "Module Federation — jak działa w praktyce?",
    answer: "Module Federation (Webpack 5): Module Federation pozwala jednemu build-owi ('Remote') eksportować moduły które inny build ('Host') może dynamicznie importować w runtime. Oba buildy są deployowane niezależnie. Jak działa: Remote application konfiguruje exposes w webpack config: exposes: { './Button': './src/components/Button', './Header': './src/components/Header' }. Host application konfiguruje remotes: remotes: { mfApp1: 'mfApp1@https://app1.example.com/remoteEntry.js' }. Host importuje dynamicznie: import('mfApp1/Button') → przeglądarka lazy-load'uje remoteEntry.js z app1.example.com. Shared dependencies: oba buildy mogą dzielić React (zamiast duplikować). shared: { react: { singleton: true, requiredVersion: '^18.0.0' } }. Narzędzia: Native Federation (Angular), Vite Module Federation plugin (vite-plugin-federation), rspack (szybszy Webpack compatible bundler). Wyzwania: version mismatch shared deps. Runtime errors gdy remote jest down. TypeScript types — potrzebujesz Federation Plugin dla types. Nowa generacja: Vite + vite-plugin-federation to coraz popularniejsza alternatywa dla Webpack Module Federation (szybszy DX). Module Federation Manifest — runtime discovery bez hardcoded URL-i.",
  },
  {
    question: "Shared State i Design System w Micro Frontends?",
    answer: "Shared State w Micro Frontends: Największe wyzwanie — jak MF A wie o stanie (np. koszyk, logowanie) z MF B? Podejścia: Custom Events: MF emituje CustomEvent na window. Inne MF nasłuchują. Prosta implementacja, słaba type safety. Web Storage (localStorage/sessionStorage): prosty shared state przez storage. Risk: MF mogą sobie nadpisywać dane. Shared State Library przez Module Federation: jeden 'shared' bundle eksportuje Redux store lub Zustand store. Wszystkie MF importują shared. Problem: tight coupling. URL jako source of truth: URL parametry jako primary state. Dobry dla routing state. Backend for Frontend (BFF): dedykowany backend agreguje stan z różnych serwisów. MF pobierają stan przez API. Design System w Micro Frontends: Kluczowe: wszystkie MF muszą wyglądać spójnie. Podejścia: Shared Design System as npm package: design system publikowany jako pakiet npm. Każdy MF instaluje daną wersję. Risk: różne wersje = różne wyglądy. Design Tokens: CSS custom properties (variables) jako source of truth dla kolorów, typografii, spacingu. Każdy MF stosuje te same tokeny. Design System via Module Federation: design system eksportuje przez MF / Module Federation. Wszystkie MF ładują zawsze aktualną wersję z jednego URL. Storybook: dokumentacja i testowanie komponentów design system. Chromatic: visual testing dla design system.",
  },
  {
    question: "Micro Frontends — performance i SEO wyzwania?",
    answer: "Performance w Micro Frontends: Główne ryzyka performance: Bundle size — jeśli każdy MF bundluje React osobno → przeglądarka ładuje React wiele razy. Rozwiązanie: Module Federation shared: { react: { singleton: true } }. Network waterfalls — jeśli MF-y ładują się sekwencyjnie. Rozwiązanie: preload hints, parallel loading. Hydration complexity — jeśli SSR + client-side MF. SEO w Micro Frontends: Problem: client-side MF są niewidoczne dla crawlerów bez JavaScript. Rozwiązania: Server-Side Composition (najlepsza SEO). SSR per MF (Next.js, Nuxt per team). Pre-rendering / Snapshots. Micro Frontends Performance Checklist: Shared dependencies (Module Federation shared). Lazy loading (ładuj MF gdy potrzebne, nie wszystkie na starcie). Pre-fetching critical MF. CDN per MF dla fast asset delivery. HTTP/2 push lub Early Hints. Measuring: Real User Monitoring (RUM) per MF — który MF spowalnia stronę? Web Vitals per MF (LCP, FID/INP, CLS). Lighthouse per route. Narzędzia: Webpack Bundle Analyzer, Statoscope. Lekcje z produkcji: Zalando migrował do micro frontends i raportuje 40% redukcję time-to-market. Ale piszą też o overhead koordynacji — nie jest bezkosztowe.",
  },
];

const mfApproaches = [
  { podejście: "Module Federation", technika: "Webpack 5 / Vite", izolacja: "JS (shared if configured)", ssr: "Partial", popularność: "Bardzo wysoka" },
  { podejście: "Single-SPA", technika: "Framework orchestrator", izolacja: "JS (soft)", ssr: "Partial", popularność: "Wysoka" },
  { podejście: "Web Components", technika: "Custom Elements API", izolacja: "Shadow DOM (CSS)", ssr: "Trudny", popularność: "Średnia" },
  { podejście: "Server-Side Composition", technika: "Nginx / Edge / Tailor", izolacja: "Pełna (oddzielne serwery)", ssr: "Natywny", popularność: "Niszowa (ale rośnie)" },
  { podejście: "iFrame", technika: "Native browser iframe", izolacja: "Pełna", ssr: "Nie", popularność: "Niska (legacy)" },
];

const sharedChallenges = [
  { wyzwanie: "Shared State", problem: "Jak MF-y współdzielą dane (koszyk, auth)?", rozwiązanie: "Custom Events, Shared Store przez MF, URL state, BFF" },
  { wyzwanie: "Design System", problem: "Spójny wygląd między MF różnych teamów", rozwiązanie: "Design Tokens (CSS vars), Shared DS przez npm lub MF" },
  { wyzwanie: "Routing", problem: "Nawigacja między micro frontends", rozwiązanie: "Single-SPA router, Module Federation + React Router" },
  { wyzwanie: "Bundle Size", problem: "Każdy MF duplikuje React/Vue", rozwiązanie: "Module Federation shared: { react: { singleton: true } }" },
  { wyzwanie: "TypeScript", problem: "Types dla remote MF", rozwiązanie: "Federation Plugin typings, @module-federation/typescript" },
  { wyzwanie: "Testing", problem: "E2E testing przez granice MF", rozwiązanie: "Playwright + contract testing, Storybook integration tests" },
];

export default function BlogMicroFrontendsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Micro Frontends | Fotz Studio"
        description="Micro Frontends: definicja, 5 technik (Module Federation, Single-SPA, Web Components), shared state, design system, performance i wyzwania SEO."
        canonicalUrl="https://fotz.pl/blog/micro-frontends-co-to-jest-jak-wdrozyz-module-federation"

        keywords="Micro Frontends co to jest, Micro Frontends definicja, czym jest Micro Frontends, Micro Frontends przykłady, jak działa Micro Frontends, Micro Frontends znaczenie, Micro Frontends przewodnik"

        canonical="https://fotz.pl/blog/micro-frontends-co-to-jest-jak-wdrozyz-module-federation"
      />
      <ArticleSchema
        title="Micro Frontends — co to jest i jak wdrożyć Module Federation?"
        description="Micro Frontends: 5 technik implementacji, Module Federation w praktyce, shared state/design system, performance i 6 wspólnych wyzwań."
        url="https://fotz.pl/blog/micro-frontends-co-to-jest-jak-wdrozyz-module-federation"
        datePublished="2024-04-06"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Micro Frontends", url: "https://fotz.pl/blog/micro-frontends-co-to-jest-jak-wdrozyz-module-federation" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Micro Frontends", href: "/blog/micro-frontends-co-to-jest-jak-wdrozyz-module-federation" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Frontend Architecture
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Micro Frontends
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Mikrousługi rewolucjonizowały backendy. Micro Frontends przynoszą
              to samo do frontendu — niezależne deploymenty, autonomia teamów
              i technologiczna wolność per domenę biznesową.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Technika #1", value: "Module Federation" },
                { label: "Lider rynku", value: "Webpack 5 / Vite" },
                { label: "Zalety", value: "Niezależny deploy" },
                { label: "Adopt od", value: "ThoughtWorks 2019" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-pink-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Techniki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 technik implementacji Micro Frontends</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie ma jednego sposobu na Micro Frontends — wybór zależy od
              wymagań izolacji, SSR i wielkości ekosystemu.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Podejście</th>
                  <th className="text-left p-3 font-bold text-gray-900">Technika</th>
                  <th className="text-left p-3 font-bold text-gray-900">Izolacja</th>
                  <th className="text-left p-3 font-bold text-gray-900">SSR</th>
                  <th className="text-left p-3 font-bold text-gray-900">Popularność</th>
                </tr>
              </thead>
              <tbody>
                {mfApproaches.map((a, i) => (
                  <tr key={a.podejście} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{a.podejście}</td>
                    <td className="p-3 text-gray-700 text-xs">{a.technika}</td>
                    <td className="p-3 text-gray-700 text-xs">{a.izolacja}</td>
                    <td className="p-3 text-gray-700">{a.ssr}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        a.popularność === "Bardzo wysoka" ? "bg-green-100 text-green-700" :
                        a.popularność === "Wysoka" ? "bg-blue-100 text-blue-700" :
                        a.popularność === "Średnia" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>{a.popularność}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wyzwania */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wyzwań Micro Frontends i rozwiązania</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Micro Frontends przynoszą overhead organizacyjny i techniczny —
              każde wyzwanie ma jednak sprawdzone rozwiązanie.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {sharedChallenges.map((c) => (
              <FadeInView key={c.wyzwanie}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{c.wyzwanie}</h3>
                  <p className="text-gray-600 text-sm mb-2">{c.problem}</p>
                  <p className="text-xs text-pink-700 font-medium">{c.rozwiązanie}</p>
                </div>
              </FadeInView>
            ))}
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

      <RelatedArticles currentArticleId="micro-frontends-co-to-jest-jak-wdrozyz-module-federation" />
      <ContactSection />
    </Layout>
  );
}
