import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest next/font i jak eliminuje layout shift przy fontach?",
    answer: "next/font (Next.js 13+): automatyczne self-hosting fontów. Zero layout shift (CLS = 0). Privacy-first — brak zapytań do Google. Automatyczny font-display: optional. Podejścia: next/font/google — Google Fonts. next/font/local — własne fonty. next/font/google użycie: import {Inter} from 'next/font/google'. const inter = Inter({subsets: ['latin'], display: 'swap', variable: '--font-inter'}). html className={inter.variable}. body className={inter.className}. Jak działa: Next.js pobiera font w build time. Hostuje na własnym serwerze. Brak external request do Google Fonts. CSS variable lub className. Eliminacja FOUT/FOIT: font-display: swap — FOUT (Flash of Unstyled Text). font-display: optional — brak FOUT (preferowane). Przy optional: fallback font używany jeśli główny nie załadował w 100ms. Nie podmienia fallback jeśli załadowany po renderze. Preconnect nie jest potrzebny (self-hosted). Size adjustment: adjustFontFallback: true — automatyczne dostosowanie fallback. fallback: ['Arial', 'sans-serif']. Reduce CLS przy ładowaniu fonta. Subset: subsets: ['latin', 'latin-ext'] — tylko potrzebne znaki. Mniejszy rozmiar fonta. weight: ['400', '700'] — tylko potrzebne grubości. axes dla variable fonts. Wiele fontów: const inter = Inter({variable: '--font-inter'}). const roboto = Roboto({variable: '--font-roboto', weight: ['400', '700']}). html className={inter.variable + ' ' + roboto.variable}. Tailwind: fontFamily: {sans: ['var(--font-inter)'], mono: ['var(--font-roboto-mono)']}.",
  },
  {
    question: "Variable Fonts — jeden plik dla wszystkich wag?",
    answer: "Variable Fonts (CSS Fonts Level 4): jeden plik obsługuje wiele wag i stylów. Osie wariacji: wght (weight) — 100 do 900 ciągłe. wdth (width) — condensed do expanded. ital (italic). slnt (slant). opsz (optical size). GRAD (grade). Custom axes (font-specific). font-variation-settings: font-variation-settings: 'wght' 650. Nie musisz używać font-weight: 650. Lub: font-weight: 650 (jeśli font obsługuje). CSS animation: @keyframes {from {font-variation-settings: 'wght' 100} to {font-variation-settings: 'wght' 900}}. Interaktywne: hover -> zmień wght. Scrollowanie -> animuj wght. Popularne variable fonts: Inter — wght 100-900. Roboto Flex — wght + wdth. Geist (Vercel) — wght 100-900. Fira Code — wght dla kodu. next/font z variable: import {Inter} from 'next/font/google'. Inter({weight: 'variable', subsets: ['latin']}). Lub: Inter — automatycznie variable jeśli dostępny. CSS Variable fonts w Tailwind: font-[wght,400..700,900] nie istnieje. Użyj arbitrary: font-variation-settings. @layer base {html {font-variation-settings: 'wght' var(--font-weight, 400)}}. Rozmiar pliku: Inter Regular woff2: ~45KB. Inter Variable woff2: ~95KB. Ale jeden plik zamiast 9 plików (100-900): 9 * 45KB = 405KB vs 95KB. Oszczędność: 310KB. WOFF2 vs WOFF: WOFF2 — Brotli kompresja. Mniejszy 20-30% niż WOFF. Wsparcie: 97% przeglądarek. Używaj WOFF2 jako primary. WOFF jako fallback tylko dla IE11.",
  },
  {
    question: "Google Fonts — dlaczego self-hosting jest lepszy?",
    answer: "Google Fonts problemy: zewnętrzny HTTP request do Google. Blokowanie renderowania przy złej konfiguracji. Privacy (GDPR) — przekazuje IP usera do Google. Niemcy: Google Fonts bez self-hostingu = RODO naruszenie (wyrok sądu 2022). Czas ładowania: DNS lookup + TCP + TLS + HTTP request. Zwykle 100-300ms dodatkowe opóźnienie. Google Fonts optymalizacja (jeśśli musisz): link rel='preconnect' href='https://fonts.googleapis.com'. link rel='preconnect' href='https://fonts.gstatic.com' crossorigin. display=swap parametr w URL. Ale: brak prywatności, zewnętrzny request. Self-hosting z next/font: zero zewnętrznych requestów. GDPR-compliant. Szybszy (własny CDN/server). Automatyczny w Next.js. Self-hosting bez Next.js: Google Fonts Helper (gwfh.mranftl.com). Wybierz font, pobierz pliki. Lub: fontsource package. npm install @fontsource/inter. import '@fontsource/inter/400.css'. Fontsource: wiele fontów. Tree-shakeable. Każda waga oddzielnie. Variable font support. fonttools: Python library. subset fontów. Usuń niepotrzebne glyphs. pyftsubset. Analiza fontów: wakamaifondue.com — variable font explorer. font-face observer: JS library. FontFaceObserver — sprawdź czy font załadowany. Polyfill dla font events. Kritical CSS inline + font swap: inline critical CSS z @font-face. font-display: swap. Pozostałe CSS async. Eliminuje FOUC (Flash of Unstyled Content).",
  },
  {
    question: "FOUT, FOIT i font-display — jak eliminować layout shift?",
    answer: "FOUT (Flash of Unstyled Text): przeglądarka pokazuje tekst fallback fontem. Po załadowaniu: podmienia na docelowy font. Zmiana rozmiarów tekstu -> CLS (layout shift). FOIT (Flash of Invisible Text): przeglądarka nie pokazuje tekstu do załadowania. Białe tekst (invisible). Potem pojawia się. Złe UX — user nie widzi contentu. font-display wartości: auto — zależy od przeglądarki (zwykle block). block — FOIT (3s niewidoczny, potem swap). swap — FOUT (natychmiast fallback, potem swap). fallback — hybrid (100ms block, 3s swap, potem brak swap). optional — 100ms block, jeśli nie załadowany: nie swap. Rekomendacja 2024: font-display: optional — brak FOUT/FOIT. Jeśli 100ms timeout: fallback font pozostaje. Brak layout shift po renderze. Trade-off: font może nie pojawić się przy bardzo wolnym połączeniu. Ale: szybkie połączenia zawsze dostaną font. size-adjust właściwość (CSS): @font-face {font-family: 'Inter Fallback'; src: local('Arial'); size-adjust: 107%; ascent-override: 90%}. Dopasuj metryki fallback do docelowego fonta. next/font oblicza automatycznie (adjustFontFallback). Eliminuje wizualną zmianę przy swap. Preload: link rel='preload' as='font' href='/fonts/inter.woff2' crossorigin. Załaduj font przed parse HTML. Kombinacja: preload + optional = najlepsza wydajność. CLS monitoring: Web Vitals library. window.addEventListener('CLS', log). Chrome DevTools: Performance -> Layout Shifts. Lighthouse CLS score.",
  },
  {
    question: "Systemowe fonty, emoji i icon fonts — co zamiast icon fonts?",
    answer: "System Font Stack: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif. Różne na różnych OS: macOS — San Francisco. Windows — Segoe UI. Android — Roboto. Linux — Ubuntu/Cantarell. Zero ładowania. Idealny dla utility/admin UI. Tailwind font-sans: już zawiera system stack. ui-sans-serif — nowoczesny system font bez specyfikowania nazwy. Emoji fonts: Twemoji (Twitter): SVG emoji. Każdy system inaczej renderuje. Jednolite emoji przez Twemoji. twemoji library. Noto Emoji (Google): kompletny zestaw. Noto family — wsparcie dla wszystkich języków. Icon Fonts (złe): Font Awesome, Material Icons jako font. Problemy: font requests. Niewidoczne ikoniki przy font blokadzie. Accessibility issues. Brak tree-shaking. Preferable: SVG icons (Lucide, Heroicons, Phosphor). SVG sprite. React icon components. Lucide React: tree-shakeable SVG icons. TypeScript. 1000+ ikon. Heroicons: Tailwind Labs, 288 ikon. @primer/octicons-react: GitHub. react-icons: zbiorcza biblioteka. fa, md, ai, bi, etc. Duży bundle bez tree-shaking. Używaj z caution. SVG icon system: jeden sprite SVG. use href='#icon-name'. HTTP/2 — mniejszy benefit. Inline icons — tree-shakeable. CSS Blend Modes z fontem: mix-blend-mode. Overlay text na obrazie. clip-path dla text. Variable font + CSS animacja: hover {font-weight: 800} -> CSS transition na variable font. Smooth transition między wagami bez FOUT. Tylko jeśli variable font loaded.",
  },
];

const fontTools = [
  { narzedzie: "next/font/google", typ: "Next.js built-in", self_host: "Tak (auto)", cls: "0 (size-adjust)", kiedy: "Next.js projekty — domyślny wybór" },
  { narzedzie: "next/font/local", typ: "Next.js built-in", self_host: "Tak (manual)", cls: "0 (adjustFontFallback)", kiedy: "Custom fonty, licencjonowane" },
  { narzedzie: "Fontsource", typ: "npm packages", self_host: "Tak (npm)", cls: "Manualne (size-adjust)", kiedy: "Non-Next.js, Vite, CRA, Remix" },
  { narzedzie: "Google Fonts CDN", typ: "External CDN", self_host: "Nie", cls: "Może (bez size-adjust)", kiedy: "Prototypy — NIE produkcja (GDPR)" },
  { narzedzie: "Variable Fonts", typ: "Format pliku", self_host: "Tak", cls: "0 (jeden plik)", kiedy: "Multi-weight — jeden plik zamiast wielu" },
  { narzedzie: "System Font Stack", typ: "CSS", self_host: "Brak (OS)", cls: "0 (brak ładowania)", kiedy: "Admin UI, utility apps, zero latency" },
];

export default function BlogNextFontCoTo() {
  return (
    <Layout>
      <SEOHead
        title="next/font, Variable Fonts, FOUT/FOIT i Font Optimization"
        description="next/font (Google Fonts self-hosting, CLS=0, size-adjust), variable fonts (wght oś), font-display: optional, FOUT/FOIT eliminacja i Fontsource …"
        canonicalUrl="https://fotz.pl/blog/nextjs-font-optimization-variable-fonts-fout-foit-google-fonts-2024"

        keywords="next/font, Variable Fonts, FOUT/FOIT i Font Optimization co to jest, next/font, Variable Fonts, FOUT/FOIT i Font Optimization jak działa, next/font, Variable Fonts, FOUT/FOIT i Font Optimization tutorial, next/font, Variable Fonts, FOUT/FOIT i Font Optimization przykład, czym jest next/font, Variable Fonts, FOUT/FOIT i Font Optimization, next/font, Variable Fonts, FOUT/FOIT i Font Optimization dokumentacja, next/font, Variable Fonts, FOUT/FOIT i Font Optimization przewodnik"

        canonical="https://fotz.pl/blog/nextjs-font-optimization-variable-fonts-fout-foit-google-fonts-2024"
      />
      <ArticleSchema
        title="next/font, Variable Fonts, FOUT/FOIT i Font Optimization — Next.js 2024?"
        description="6 opcji fontów (next/font Google/Local/Fontsource/Google CDN/Variable/System Stack) — self-hosting, CLS eliminacja, font-display: optional i GDPR compliance."
        url="https://fotz.pl/blog/nextjs-font-optimization-variable-fonts-fout-foit-google-fonts-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Font Optimization Next.js", url: "https://fotz.pl/blog/nextjs-font-optimization-variable-fonts-fout-foit-google-fonts-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-violet-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Font Optimization Next.js", url: "/blog/nextjs-font-optimization-variable-fonts-fout-foit-google-fonts-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Performance / Typography
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Font Optimization w Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              next/font (self-hosting, CLS=0), variable fonts (jeden plik dla wszystkich wag),
              font-display: optional, FOUT/FOIT i GDPR compliance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "CLS = 0", value: "next/font" },
                { label: "Jeden plik", value: "Variable fonts" },
                { label: "No FOUT", value: "font-display: opt" },
                { label: "GDPR safe", value: "Self-hosted" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-purple-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 strategii ładowania fontów — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              next/font, Fontsource, Google CDN, Variable Fonts i System Stack —
              self-hosting, CLS i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Self-host</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">CLS</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {fontTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.self_host}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.cls}</td>
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

      <RelatedArticles currentArticleId="nextjs-font-optimization-variable-fonts-fout-foit-google-fonts-2024" />
      <ContactSection />
    </Layout>
  );
}
