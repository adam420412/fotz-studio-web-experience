import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są Core Web Vitals i dlaczego wpływają na SEO?",
    answer: "Core Web Vitals: metryki wydajności web zdefiniowane przez Google (2020). Od 2021 — czynnik rankingowy Google (Page Experience signal). Trzy metryki: LCP (Largest Contentful Paint): szybkość ładowania głównej treści. Dobry: poniżej 2.5s. Wymaga poprawy: 2.5-4s. Zły: powyżej 4s. INP (Interaction to Next Paint): responsywność na interakcje użytkownika (zastąpił FID w 2024). Dobry: poniżej 200ms. Wymaga poprawy: 200-500ms. Zły: powyżej 500ms. CLS (Cumulative Layout Shift): wizualna stabilność (elementy nie przeskakują). Dobry: poniżej 0.1. Wymaga poprawy: 0.1-0.25. Zły: powyżej 0.25. Dodatkowe metryki: FCP (First Contentful Paint) — pierwszy render. TTFB (Time to First Byte) — czas do pierwszego bajtu od serwera. TBT (Total Blocking Time) — czas blokowania main thread. Narzędzia pomiarowe: PageSpeed Insights (Google). Lighthouse (Chrome DevTools). Chrome User Experience Report (CrUX — rzeczywiste dane). Search Console (Core Web Vitals report). WebPageTest. DebugBear. Dane field vs lab: Field data (CrUX) — rzeczywiste dane użytkowników (warunki różne). Lab data (Lighthouse) — kontrolowane środowisko (laptop, cable). Google ranking używa Field data.",
  },
  {
    question: "LCP — jak optymalizować Largest Contentful Paint?",
    answer: "LCP element: największy widoczny element (obraz, video poster, tekst, background-image). Najczęstsze LCP elementy: hero image, H1, logo. Przyczyny złego LCP: wolny serwer (TTFB). Render-blocking resources (CSS, JS). Wolne ładowanie LCP zasobu. Slow resource load (obrazy bez optymalizacji). Optymalizacja LCP: 1. Priorytet LCP zasobu: fetchpriority='high' na LCP image. Preload: link rel='preload' as='image'. Eliminuje waterfall. 2. Optymalizacja obrazów: format WebP/AVIF (40-60% mniejszy od JPEG). next/image — automatyczna optymalizacja. Responsive images (srcset, sizes). Lazy loading tylko non-LCP (loading='lazy' NIE na LCP). 3. CDN i caching: statyczne zasoby przez CDN (CloudFront, Cloudflare). cache-control: max-age=31536000 (immutable). 4. TTFB: server-side caching (Redis, Varnish). Database query optimization. Edge functions (Vercel, Cloudflare). 5. CSS optimization: krytyczny CSS inline (Critical CSS). defer non-critical CSS. Usunięcie unused CSS (Tailwind PurgeCSS robi to automatycznie). Font optimization: font-display: swap. Preload Google Fonts lub self-host. Subset fonts (tylko potrzebne znaki). 6. Eliminacja render-blocking JS: defer, async scripts. Module scripts domyślnie defer.",
  },
  {
    question: "INP — jak optymalizować Interaction to Next Paint (zastępca FID)?",
    answer: "INP (Interaction to Next Paint): mierzy czas od interakcji użytkownika do następnego wyrenderowania. Zastąpił FID (First Input Delay) w marcu 2024. Typy interakcji: click, keydown, keypress. INP = najgorszy percentyl (98th) interakcji na stronie. Przyczyny złego INP: długie JavaScript tasks (Long Tasks). Main thread blocking. Nadmierne re-rendery React. Zbyt dużo danych w render. Sync API calls blokujące. Optymalizacja INP: 1. Long Tasks: podziel na mniejsze chunki (scheduler.yield()). Time slicing — yield co N ms. setTimeout(fn, 0) — oddaj kontrolę na chwilę. requestIdleCallback — nieistotne zadania w idle. 2. React optymalizacje: useDeferredValue — odrocz render niestotnych części. startTransition — nie pilne aktualizacje. useTransition — pending state. React.memo, useMemo, useCallback — unikaj zbędnych re-renderów. Virtualizacja długich list (react-window, react-virtual, TanStack Virtual). 3. Web Workers: przenieś intensywne obliczenia poza main thread. Comlink — prosty API dla Web Workers. 4. Profiling: Chrome DevTools Performance tab. React DevTools Profiler. 'Interactions' timeline. Long tasks (>50ms) oznaczone czerwono. INP attribution: LoAF (Long Animation Frames) API. element-timing. 5. Lighthouse: TBT (Total Blocking Time) jako proxy dla INP w lab.",
  },
  {
    question: "CLS — jak eliminować layout shift i zapewnić wizualną stabilność?",
    answer: "CLS (Cumulative Layout Shift): suma nieoczekiwanych przesunięć layoutu podczas ładowania strony. Jak obliczany: impact fraction (% ekranu przesunięty) * distance fraction (% ekranu, o który przesunięty). Przyczyny CLS: obrazy bez wymiarów (width, height lub aspect-ratio). Reklamy, embeds, iframes bez zarezerwowanego miejsca. Dynamicznie wstrzykiwane treści (bannery, cookies). Fonty powodujące FOUT/FOIT. Animacje wyzwalające layout. Optymalizacja CLS: 1. Zawsze określaj width i height obrazów: img width='800' height='600'. CSS: aspect-ratio: 800/600. Zapobiega layout shift przy ładowaniu. 2. Fonty: font-display: optional (najlepszy CLS, ryzyko niewidoczności). font-display: swap (dobry UX, gorszy CLS). Preload fonts. size-adjust, ascent-override, descent-override. f-mods (Font Metric Overrides) — dopasowanie fallback do custom font. 3. Reklamy i dynamic content: min-height dla placeholdera. Ładuj na dole strony lub poza viewport. 4. Animacje bez layout trigger: używaj transform i opacity (nie zmień margin, padding, top, left). will-change: transform (GPU acceleration). 5. Skeleton loading: placeholder o tych samych wymiarach co content. Zapobiega CLS gdy content się ładuje. 6. Scroll anchoring: overflow-anchor (domyślnie włączone). content-visibility: auto — wirtualizacja off-screen content (uwaga: może powodować CLS). 7. Chrome DevTools Layout Shift Regions (fioletowe).",
  },
  {
    question: "Performance budgeting i monitoring Core Web Vitals w CI/CD?",
    answer: "Performance Budget: zdefiniowane limity metryk. Lighthouse CI: sprawdza metryki w CI. Blokuje PR jeśli przekroczone. GitHub Action: Lighthouse CI GitHub Action. lhci autorun — pełne portfolio stron. assertions w lighthouserc.json. Bundlephobia: rozmiar dependencji przed instalacją. Bundlemon: monitoring rozmiaru bundle w CI. size-limit: limit rozmiaru bundle (JS). Webpack Bundle Analyzer: wizualizacja bundles. @next/bundle-analyzer — Next.js. Vite Visualizer: rollup-plugin-visualizer. import cost (VSCode extension) — inline rozmiar importu. Real User Monitoring (RUM): Google Analytics 4 (Core Web Vitals w GA4 Events). Vercel Analytics — wbudowane RUM. Sentry Performance — transaction monitoring. Datadog RUM. web-vitals library: onLCP, onINP, onCLS, onFCP, onTTFB. Wysyłanie do Google Analytics: sendBeacon API. Ciągłe monitorowanie: CrUX API (Chrome User Experience Report). DebugBear — automated monitoring. SpeedCurve — advanced performance monitoring. Ahrefs / Semrush — CWV per strona. Search Console — Core Web Vitals report (field data). Recomendacje Next.js: next/image (LCP optimization). next/font (font optimization). Turbopack (szybszy dev build). Optimistic UI (INP). PPR (LCP via streaming).",
  },
];

const webVitalsMetrics = [
  { metryka: "LCP (Largest CP)", cel: "poniżej 2.5s", mierzy: "Szybkość ładowania widocznej treści", optymalizacja: "Obrazy WebP/AVIF, preload, CDN, TTFB", narzedzia: "Lighthouse, PageSpeed, CrUX" },
  { metryka: "INP (Interaction NP)", cel: "poniżej 200ms", mierzy: "Responsywność na interakcje", optymalizacja: "Long Tasks, React memo, Web Workers", narzedzia: "Chrome DevTools, LoAF API" },
  { metryka: "CLS (Cumulative LS)", cel: "poniżej 0.1", mierzy: "Wizualna stabilność layoutu", optymalizacja: "width/height obrazów, font-display, skeleton", narzedzia: "Lighthouse, Layout Shift Regions" },
  { metryka: "FCP (First CP)", cel: "poniżej 1.8s", mierzy: "Pierwszy render treści", optymalizacja: "Krytyczny CSS inline, brak render-blocking", narzedzia: "Lighthouse, WebPageTest" },
  { metryka: "TTFB (Time to FB)", cel: "poniżej 800ms", mierzy: "Czas odpowiedzi serwera", optymalizacja: "Edge functions, CDN, server cache", narzedzia: "WebPageTest, Network tab" },
  { metryka: "TBT (Total BT)", cel: "poniżej 200ms", mierzy: "Main thread blocking (proxy INP)", optymalizacja: "Code splitting, defer JS, lazy load", narzedzia: "Lighthouse (lab data)" },
];

export default function BlogCoreWebVitalsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Core Web Vitals | Fotz Studio"
        description="Core Web Vitals: LCP, INP (następca FID), CLS — jak optymalizować, narzędzia pomiaru, Lighthouse CI, performance budgeting i wpływ na SEO Google."
        canonicalUrl="https://fotz.pl/blog/core-web-vitals-lcp-inp-cls-optymalizacja-wydajnosci-web-2024"

        keywords="Core Web Vitals co to jest, Core Web Vitals definicja, czym jest Core Web Vitals, Core Web Vitals przykłady, jak działa Core Web Vitals, Core Web Vitals znaczenie, Core Web Vitals przewodnik"

        canonical="https://fotz.pl/blog/core-web-vitals-lcp-inp-cls-optymalizacja-wydajnosci-web-2024"
      />
      <ArticleSchema
        title="Core Web Vitals — LCP, INP, CLS, optymalizacja wydajności web 2024?"
        description="6 metryk wydajności (LCP/INP/CLS/FCP/TTFB/TBT) — optymalizacja obrazów, Long Tasks, layout shift, Lighthouse CI, monitoring RUM i wpływ na SEO."
        url="https://fotz.pl/blog/core-web-vitals-lcp-inp-cls-optymalizacja-wydajnosci-web-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Core Web Vitals", url: "https://fotz.pl/blog/core-web-vitals-lcp-inp-cls-optymalizacja-wydajnosci-web-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Core Web Vitals", url: "/blog/core-web-vitals-lcp-inp-cls-optymalizacja-wydajnosci-web-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Performance / SEO
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Core Web Vitals 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              LCP, INP i CLS — metryki wydajności Google, optymalizacja obrazów,
              Long Tasks, layout shift i monitoring w CI/CD.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Ładowanie treści", value: "LCP" },
                { label: "Responsywność", value: "INP" },
                { label: "Stabilność", value: "CLS" },
                { label: "Lab testing", value: "Lighthouse" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metryki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 metryk wydajności web</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              LCP, INP, CLS (Core Web Vitals) i FCP, TTFB, TBT (dodatkowe) — cele,
              co mierzą, jak optymalizować i jakich narzędzi używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Metryka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cel (dobry)</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Co mierzy</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Optymalizacja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzia</th>
                </tr>
              </thead>
              <tbody>
                {webVitalsMetrics.map((m, i) => (
                  <tr key={m.metryka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{m.metryka}</td>
                    <td className="p-3 border border-gray-200 text-green-700 font-semibold">{m.cel}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{m.mierzy}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.optymalizacja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{m.narzedzia}</td>
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

      <RelatedArticles currentArticleId="core-web-vitals-lcp-inp-cls-optymalizacja-wydajnosci-web-2024" />
      <ContactSection />
    </Layout>
  );
}
