import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co nowego w Tailwind CSS v4 — CSS-first configuration?",
    answer: "Tailwind CSS v4 (2025): fundamentalna zmiana. CSS-first configuration zamiast tailwind.config.js. Nowy silnik CSS (Oxide). Szybszy build (5-10x). Mniejszy output. CSS import: @import 'tailwindcss'. Koniec tailwind.config.js (opcjonalny). Konfiguracja w CSS: @theme { --color-primary: oklch(0.5 0.2 250). --spacing-4: 1rem. --font-sans: 'Inter', sans-serif }. CSS custom properties jako konfiguracja. @import 'tailwindcss/preflight' — reset. @import 'tailwindcss/utilities' — utilities. Nowe klasy: text-balance — text-wrap: balance. text-pretty — text-wrap: pretty. Starting style — @starting-style. Interpolate size — interpolate-size. border-image utilities. Masking utilities. @layer base, components, utilities — teraz CSS @layer. Nie Tailwind @layer. Czystsza integracja z CSS. Vite plugin: @tailwindcss/vite — najszybszy. npm install tailwindcss @tailwindcss/vite. vite.config.ts: plugins: [tailwindcss()]. Brak PostCSS konfiguracji. PostCSS plugin: @tailwindcss/postcss. Dla nieVite projektów. Next.js, Create React App. Upgrading z v3: npx @tailwindcss/upgrade. Automatyczna migracja. Sprawdź breaking changes. dark: modifier — tak samo. group, peer — tak samo.",
  },
  {
    question: "Nowy system kolorów i @theme w Tailwind v4?",
    answer: "@theme: nowe miejsce konfiguracji. Bezpośrednio w CSS. Custom properties pod --color-*, --spacing-*, etc. @theme { --color-brand: oklch(0.6 0.24 255). --color-brand-50: oklch(0.97 0.02 255). --color-brand-500: oklch(0.6 0.24 255). --color-brand-900: oklch(0.25 0.15 255) }. Użycie: bg-brand-500, text-brand. Automatyczne generowanie utilities. OKLCH kolory: nowoczesna przestrzeń kolorów. Lepsza perceptual uniformity. HDR support (Display P3). oklch(lightness chroma hue). oklch(0.7 0.15 180) — teal. Konwersja z HEX: oklch.com. color.js dla programmatic konwersji. Nowe opacity modifiers: bg-blue-500/75 — 75% opacity. Działa z CSS custom properties. --opacity-* nie potrzebne. Container queries wbudowane: @container + Tailwind. @container query w CSS. @tw:md:text-lg — media query przez Tailwind. Variant stacking: hover:focus:bg-blue-500. Dowolna kombinacja. Nowe modifiers: starting — @starting-style. open — dialog[open] selector. Arbitrary variants: [.active&]:bg-blue-500. CSS nesting support. @layer w v4: CSS @layer standardowe. layer(base), layer(components), layer(utilities). Dopasowane do CSS Cascade Layers. Automatic content detection: Brak content: [] w konfiguracji. Analizuje import graph. Wszystkie pliki importowane. Brak false positives.",
  },
  {
    question: "Migracja z Tailwind v3 do v4 — breaking changes?",
    answer: "Automated migration: npx @tailwindcss/upgrade. Konwertuje tailwind.config.js na @theme. Aktualizuje breakpoints. Zmienia deprecated classes. Breaking changes v3 -> v4: Usunięte: opacity-{value} (było osobne, teraz w /{opacity}). Zmienione: shadow-sm teraz shadow-xs. shadow — teraz shadow-sm. Nowe breakpoints: xs: 20rem (320px) dodany. 3xl: 112rem (1792px) dodany. sm/md/lg/xl/2xl — bez zmian. Usunięte config properties: theme.extend.colors — teraz @theme. content array — automatyczne wykrywanie. purge — nieaktualne. plugins — API zmienione. @apply z v3: Działa dalej. Niezmieniony. Ale avoid w komponentach. JIT mode: Zawsze włączony (od v2). Nie ma 'jit: true'. Arbitrary values: [margin-top:1rem] — zmieniona składnia. Nowy prefix: Nie tw- prefix (był opcjonalny). Namespace: @tw:hover:bg-blue — jeśli conflicty. CSS Variables nomenklatura: --tw-* prefix dla internal vars. --color-* dla kolorów. --spacing-* dla spacing. Dokument zmiany: tailwindcss.com/docs/upgrade-guide. Lista wszystkich deprecated. Migration tool output. Dark mode: class, media, selector — bez zmian. Nowy: variant:'dark'. Bardziej elastyczny. Playwright visual tests: Uruchom po migracji. Sprawdź vizualnie. Snapshot tests. Checklista migracji: npx upgrade. Sprawdź build. Fix manual issues. Update IDE extensions.",
  },
  {
    question: "Tailwind v4 z Next.js, shadcn/ui i ekosystem?",
    answer: "Next.js + Tailwind v4: @tailwindcss/postcss plugin. postcss.config.mjs: export default {plugins: {'@tailwindcss/postcss': {}}}. global.css: @import 'tailwindcss'. Bez tailwind directives (deprecated). npx create-next-app — poczekaj na v4 template lub manual setup. shadcn/ui + v4: shadcn/ui w trakcie migracji. Nowe component registry. CSS variables schemat. oklch kolory. components.json zmienia się. Sprawdź shadcn.com/docs dla aktualności. Radix UI — działa bez zmian (headless). Nowe preset themes w shadcn. Tailwind Merge (tw-merge): twMerge nadal działa. Rozumie v4 klasy. Update do v3.x dla pełnego wsparcia. clsx + twMerge — nadal standard. Headless UI (Tailwind Labs): @headlessui/react — bez zmian. Kompatybilny z v4. Heroicons — bez zmian. Tailwind v4 Typography: @tailwindcss/typography plugin. prose klasy — mniej zmienionych. v4 kompatybilny. Forms plugin: @tailwindcss/forms. Reset form styles. Compatibel. Container plugin: Wbudowany! Nie potrzeba pluginu. container klasą — max-w + centering. Tailwind v4 IDE support: Tailwind CSS IntelliSense extension v4. Autocomplete dla @theme vars. v4 klasy. Tailwind Play (online): play.tailwindcss.com — v4. Szybki prototyping. Dzielenie kodu. Wydajność v4: Oxide engine (Rust). 10x szybszy od v3 benchmark. Inkrementalne rebuildy. HMR natychmiastowy.",
  },
  {
    question: "Nowe utility classes i zaawansowane wzorce Tailwind v4?",
    answer: "Nowe utilities v4: text-balance — widows/orphans w tekście. h1 className='text-balance' — responsywny tekst. text-pretty — smart line breaking. Idealne dla paragrafów. field-sizing-content — input auto-resize. Bez JavaScript! size-* — width i height razem. size-10 = w-10 h-10. inset-* — top, right, bottom, left jednocześnie. ms-*, me-* — margin-inline-start/end (RTL aware). PS-*, pe-* — padding-inline. Logical properties. Nowe variants: starting-* — @starting-style (enter animations). open-* — [open] attribute. inert-* — [inert] attribute. not-* — :not() selector. Nesting w Tailwind v4: Nie konieczne — Tailwind to utility-first. Ale CSS nesting teraz native wsparcie. group i peer z nesting. @apply nadal działa. Custom utilities: @utility card { background: white. border-radius: 0.5rem. padding: 1rem }. Tworzenie reużywalnych utilities. Nie nadużywaj — utility-first approach. CSS Grid utilities: grid-cols-subgrid — subgrid! col-span-full, row-span-full. grid-rows-subgrid nowe. Aspect ratio: aspect-video, aspect-square — od v3. Nowe: aspect-auto, arbitrary. Backdrop filter: backdrop-blur, backdrop-brightness — v3. Nowe w v4: backdrop-grayscale, saturate. Scroll snap: scroll-snap-type, scroll-snap-align — od v3. Nowe: snap-proximity, snap-mandatory. Force color: forced-color-adjust-auto, -none. Accessibility dla high-contrast mode.",
  },
];

const v3vsV4 = [
  { aspekt: "Konfiguracja", v3: "tailwind.config.js (JavaScript)", v4: "@theme {} w CSS — CSS-first" },
  { aspekt: "Build engine", v3: "JavaScript (PostCSS)", v4: "Oxide (Rust) — 5-10x szybszy" },
  { aspekt: "Import", v3: "@tailwind base/components/utilities", v4: "@import 'tailwindcss'" },
  { aspekt: "Kolory", v3: "HEX, RGB, HSL", v4: "OKLCH (perceptual, HDR)" },
  { aspekt: "Content detection", v3: "content: [] w konfiguracji", v4: "Automatyczne z import graph" },
  { aspekt: "Container queries", v3: "Plugin @tailwindcss/container-queries", v4: "Wbudowane natywnie" },
];

export default function BlogTailwindV4CoTo() {
  return (
    <Layout>
      <SEOHead
        title="Tailwind CSS v4 | Fotz Studio"
        description="Tailwind CSS v4: CSS-first config (@theme), Oxide engine (Rust, 5-10x szybszy), OKLCH kolory, automatyczne content detection, nowe utilities i migracja z v3."
        canonicalUrl="https://fotz.pl/blog/tailwind-css-v4-theme-oxide-engine-oklch-migracja-v3-2025"

        keywords="Tailwind CSS v4 co to jest, Tailwind CSS v4 definicja, czym jest Tailwind CSS v4, Tailwind CSS v4 przykłady, jak działa Tailwind CSS v4, Tailwind CSS v4 znaczenie, Tailwind CSS v4 przewodnik"

        canonical="https://fotz.pl/blog/tailwind-css-v4-theme-oxide-engine-oklch-migracja-v3-2025"
      />
      <ArticleSchema
        title="Tailwind CSS v4 — @theme, Oxide engine, OKLCH kolory i migracja z v3 2025?"
        description="6 zmian Tailwind v4 vs v3 (konfiguracja/@theme/Oxide/OKLCH/auto-detection/container queries) — CSS-first config, migracja, Next.js setup, shadcn/ui i nowe utility classes."
        url="https://fotz.pl/blog/tailwind-css-v4-theme-oxide-engine-oklch-migracja-v3-2025"
        datePublished="2025-01-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Tailwind CSS v4", url: "https://fotz.pl/blog/tailwind-css-v4-theme-oxide-engine-oklch-migracja-v3-2025" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Tailwind CSS v4", href: "/blog/tailwind-css-v4-theme-oxide-engine-oklch-migracja-v3-2025" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Tailwind CSS / CSS / v4
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tailwind CSS v4
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              CSS-first config (@theme), Oxide engine (Rust — 5-10x szybszy), OKLCH kolory,
              automatyczne content detection i migracja z v3.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Config", value: "@theme CSS" },
                { label: "Engine", value: "Oxide (Rust)" },
                { label: "Kolory", value: "OKLCH" },
                { label: "Speed", value: "10x szybszy" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-cyan-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tailwind v3 vs v4 — kluczowe zmiany</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Konfiguracja, build engine, import, kolory, content detection i container queries —
              co zmieniło się w v4.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Aspekt</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">v3</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">v4</th>
                </tr>
              </thead>
              <tbody>
                {v3vsV4.map((r, i) => (
                  <tr key={r.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{r.aspekt}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{r.v3}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{r.v4}</td>
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
