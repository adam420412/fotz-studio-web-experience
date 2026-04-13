import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest React Scan i jak diagnozować zbędne re-rendery?",
    answer: "React Scan (Aiden Bai, 2024): automatyczne wykrywanie powolnych komponentów. Wizualizacja re-renderów. Koloruje komponenty które rerenderują. Instalacja: npm install react-scan. import {scan} from 'react-scan'. scan({enabled: true}). Alternatywnie: CDN script tag w HTML. React DevTools Profiler: wbudowany w React DevTools. Record -> naciśnij przycisk -> Stop. Flame graph komponentów. Render czas w ms. Sprawdź które komponenty renderują długo. Why Did You Render (@welldone-software/why-did-you-render): monkey-patches React. Wypisuje do konsoli dlaczego komponent re-renderował. Jakie props/state zmieniły się. Instalacja: npm install @welldone-software/why-did-you-render --save-dev. wdyr.js: import React from 'react'. import whyDidYouRender from '@welldone-software/why-did-you-render'. whyDidYouRender(React, {trackAllPureComponents: true}). Komponent.whyDidYouRender = true. React.memo: React.memo(Component) — memoizuje komponent. Shallow prop comparison. Nie memoizuj wszystkiego — overhead. Memoizuj: drogie obliczenia. Stabilne callbacks. Krok po kroku: 1. Zidentyfikuj problem (React Scan / Profiler). 2. Sprawdź WDYR. 3. Zdecyduj memo/callback/useMemo. 4. React Compiler — automatyczne memoizowanie. useCallback: stabilna referencja funkcji. dla event handlers przekazywanych do dzieci. Ważne: memo + useCallback razem. useMemo: dla expensive calculations. Sprawdź faktyczną korzyść. Nie optymalizuj przedwcześnie.",
  },
  {
    question: "Bundle Analysis — Rollup Visualizer, Bundle Phobia i webpack-bundle-analyzer?",
    answer: "Rollup Visualizer (Vite plugin): npm install rollup-plugin-visualizer --save-dev. vite.config.ts: import {visualizer} from 'rollup-plugin-visualizer'. plugins: [visualizer({open: true, gzipSize: true, brotliSize: true})]. npm run build -> otwiera stats.html. Treemap bundle visualizacja. @next/bundle-analyzer (Next.js): npm install @next/bundle-analyzer. const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true'}). ANALYZE=true npm run build -> otwiera analyzer. webpack-bundle-analyzer: npm install webpack-bundle-analyzer. Webpack config plugin. Interaktywny treemap. Source maps required. Importmap.io: online analyzer. Wgraj bundle JS. Analiza dependencies. bundlephobia.com: sprawdź rozmiar dowolnego pakietu npm. Gzip, brotli. Peer dependencies. Alternatives (mniejsze). packagephobia.com: install size vs bundle size. Node modules size. Strategie redukcji bundle: Tree shaking: ESM modules tylko. Brak side effects. sideEffects: false w package.json. Dynamic imports: const module = await import('./heavy-module'). Lazy loading routes (React.lazy). Code splitting vendor: manual chunks w vite.config: rollupOptions: {output: {manualChunks: {vendor: ['react', 'react-dom'], ui: ['@radix-ui/react-dialog']}}}. External dependencies: externals (dla libraries). UMD build vs ESM build. Polyfill audit: core-js wymogi. @babel/preset-env browserslist. Nadmierne polyfills = bundle bloat. dead-css: PurgeCSS dla Tailwind. Automatyczne w produkcji.",
  },
  {
    question: "Million.js i Virtual DOM optimization — jak działa block Virtual DOM?",
    answer: "Wirtualny DOM problem: React diff algorithm = O(n). Każdy render = nowe drzewo. Porównanie całego drzewa. Przy wielu komponentach: bottleneck. Million.js (Aiden Bai, 2022): block Virtual DOM. Kompilacja do wydajnych operacji. Omija React VDOM dla statycznych komponentów. Tylko dynamiczne parts są śledzone. Instalacja: npm install million. Vite plugin: import million from 'million/compiler'. plugins: [million.vite()]. Next.js: million.next(). Automatyczna optymalizacja. React API kompatybilny: nie trzeba zmieniać kodu. block() function: import {block} from 'million/react'. const MyComponent = block(function MyComponent({count}) {return div{count}/div}). Kiedy Million.js pomaga: wiele list items. Tabele. Dashboards z dużą ilością danych. Komponenty które często re-renderują. Kiedy nie pomaga: małe komponenty. Rzadkie re-rendery. Komponenty z dużo JSX branching. Million Lint: reguły ESLint dla performance. Sugeruje optymalizacje. React Forget (Compiler) vs Million: React Compiler — automatyczne memoizowanie. Million.js — inny algorytm diff. Komplementarne. Preact vs React (dla performance): Preact (~3KB) vs React (~40KB). Compat layer dla libraries. Doskonały dla performance-critical. Brak niektórych React features. Solid.js: fine-grained reactivity. Zero Virtual DOM. Najbardziej wydajny framework. Nie React — inne API. Svelte: compilation approach. Nie VDOM. Bardzo szybki. Ale nie React.",
  },
  {
    question: "useMemo i useCallback — kiedy naprawdę pomagają?",
    answer: "Kiedy useMemo: Expensive computation: const sorted = useMemo(() => items.sort(compare), [items]). Sortowanie 10 000 elementów co render. Memoizowanie objects dla referential equality: const options = useMemo(() => ({color: 'blue', size: 'large'}), []). Bez memo: nowy obiekt = nowa referencja = child re-render. Kiedy useCallback: Callback przekazywany do memoizowanego dziecka: const handleClick = useCallback(() => setCount(c => c + 1), []). Child: React.memo(ChildComponent). Bez useCallback: nowa funkcja = nowa referencja. Kiedy NIE memo/useCallback: Prosta obliczenia (szybsze od cache overhead). Nie przekazywane do memoizowanych dzieci. Zbyt często zmieniające się dependencies. Reguła: measure first, optimize second. React Compiler eliminuje potrzebę: experimental: {reactCompiler: true} w Next.js 15. Automatyczne useMemo i useCallback. Nie musisz pisać ręcznie. Ale: React Compiler beta — sprawdź kompatybilność. Referential stability patterns: Context value memoization. const contextValue = useMemo(() => ({user, logout}), [user]). Bez memo: każdy consumer re-renderuje. State management memoization: Zustand selectors: const count = useStore(state => state.count). Stabilna referencja jeśli count nie zmienia się. Jotai: atomowe updates = minimalne re-rendery. Valtio: proxy-based = tylko subskrybenty. React Query: automatycznie memoizuje responses. Stable queryKey. Normalizacja danych: flatten nested objects. Denormalized state = więcej re-renderów. Normalizacja (jak Redux Toolkit) = precyzyjne updates.",
  },
  {
    question: "Code Splitting i Lazy Loading — zaawansowane strategie?",
    answer: "React.lazy + Suspense: const Chart = lazy(() => import('./Chart')). Ładuj tylko gdy potrzebny. Code splitting po routach: React Router z lazy(). Next.js App Router automatyczny. Granular splitting: nie tylko routes. Komponenty heavy (Chart, Editor, Map). Lazy modals: nie renderuj Monaco Editor jeśli nie otwarty. Prefetching: link rel='prefetch' — przeglądarka ładuje gdy idle. import('/heavy').then(...) — explicit prefetch. React Router prefetch: loader w beforeLoad. Route.prefetch() — prefetch na hover. Webpack magic comments: import(/* webpackPrefetch: true */ './Chart'). import(/* webpackPreload: true */ './critical'). preload — krytyczny, ładuj równolegle. prefetch — niekoniecznie potrzebny, ładuj gdy idle. Vite rollupOptions: manualChunks. Kontrola które moduły do jakiego chunk. Vendor chunk: React, React DOM razem. UI chunk: shadcn/radix razem. Feature chunki: per feature area. Dynamic import z warunkiem: if (feature.isEnabled) {const {FeatureModule} = await import('./feature')}. Brak ładowania jeśli feature wyłączony. Streaming SSR (Next.js): Suspense boundary = streaming point. Serwer streamuje HTML gdy Suspense resolves. użytkownik widzi partial content szybciej. Partial Prerendering (PPR): statyczna powłoka + dynamic holes. Instant TTFB (statyczna część). Dynamic content ładuje się asynchronicznie. Import maps: mapuj moduły do URLi. Brak node_modules lookup. Importmap.json. useId hook: stable IDs między SSR i CSR. Brak hydration mismatch.",
  },
];

const perfTools = [
  { narzedzie: "React Scan", typ: "Re-render visualizer", uzycie: "Development", kiedy: "Identyfikuj powolne komponenty wizualnie" },
  { narzedzie: "React DevTools Profiler", typ: "Performance profiler", uzycie: "Development", kiedy: "Dokładna analiza render time, flame graph" },
  { narzedzie: "Why Did You Render", typ: "Re-render debugger", uzycie: "Development", kiedy: "Zrozum DLACZEGO komponent re-renderuje" },
  { narzedzie: "Million.js", typ: "Block Virtual DOM", uzycie: "Produkcja", kiedy: "Listy, tabele, heavy data-driven UI" },
  { narzedzie: "Rollup Visualizer", typ: "Bundle analyzer", uzycie: "Build", kiedy: "Znajdź duże zależności w bundle" },
  { narzedzie: "React Compiler (beta)", typ: "Auto-memoization", uzycie: "Build + Runtime", kiedy: "Automatyczne memo/useCallback, Next.js 15" },
];

export default function BlogReactPerfCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Performance — React Scan, Million.js, Bundle Analyzer i Code Splitting 2024 | Fotz.pl"
        description="React Scan (re-render viz), React DevTools Profiler, Why Did You Render, Million.js (block VDOM), Rollup Visualizer, useMemo/useCallback best practices i Code Splitting."
        canonicalUrl="https://fotz.pl/blog/react-performance-scan-million-bundle-analyzer-code-splitting-2024"

        keywords="React Performance co to jest, React Performance jak działa, React Performance tutorial, React Performance przykład, czym jest React Performance, React Performance dokumentacja, React Performance przewodnik"
      />
      <ArticleSchema
        title="React Performance — React Scan, Million.js, Bundle Analyzer i Code Splitting 2024?"
        description="6 narzędzi performance (React Scan/DevTools Profiler/WDYR/Million.js/Rollup Visualizer/React Compiler) — re-render debugging, bundle analysis i code splitting."
        url="https://fotz.pl/blog/react-performance-scan-million-bundle-analyzer-code-splitting-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Performance Optimization", url: "https://fotz.pl/blog/react-performance-scan-million-bundle-analyzer-code-splitting-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "React Performance Optimization", href: "/blog/react-performance-scan-million-bundle-analyzer-code-splitting-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Performance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Performance Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              React Scan, DevTools Profiler, Million.js (block VDOM), Rollup Visualizer,
              useMemo/useCallback best practices i Code Splitting.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Re-render viz", value: "React Scan" },
                { label: "Block VDOM", value: "Million.js" },
                { label: "Bundle audit", value: "Rollup Viz" },
                { label: "Auto-memo", value: "RC Compiler" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi React Performance — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              React Scan, DevTools Profiler, Why Did You Render, Million.js, Rollup Visualizer i React Compiler —
              typ, użycie i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Użycie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {perfTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.uzycie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.kiedy}</td>
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
