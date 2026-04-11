import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Biome — linter i formatter w Rust jako zamiennik ESLint i Prettier?",
    answer: "Biome: Emanuele Stoppa, Rome Tools fork. Linter + Formatter w Rust. Szybki. Instalacja: npm install --save-dev @biomejs/biome. npx biome init. biome.json konfiguracja. Format: npx biome format --write src/. Lint: npx biome lint src/. Check: npx biome check --write src/ (format + lint + fix). biome.json config: {schema: 'https://biomejs.dev/schemas/1.x.x/schema.json', organizeImports: {enabled: true}, linter: {enabled: true, rules: {recommended: true, correctness: {useHookAtTopLevel: 'error'}, suspicious: {noExplicitAny: 'error'}}}, formatter: {enabled: true, indentStyle: 'space', indentWidth: 2, lineWidth: 100}, javascript: {formatter: {quoteStyle: 'single', trailingCommas: 'es5'}}}. Prędkość: 25x szybszy niż Prettier. 15x szybszy niż ESLint. Rust native. Parallel processing. Reguły: 300+ lint rules. React hooks rules. JSX. TypeScript. Accessibility. Security. Import organization: wbudowane. Automatyczne sortowanie. Nie wymaga osobnego pluginu. VS Code extension: @biomejs.biome. Format on save. Inline diagnostics. Monorepo: biome.json per pakiet. extends: ['../../biome.json']. Shared config. CI: npx biome ci src/. Fail na errors i warnings. Brak --write w CI. Pre-commit: lint-staged z biome check. Suppression: biome-ignore lint/noExplicitAny: <reason>. Inline disable.",
  },
  {
    question: "Biome v2 — nowe funkcje i zmiany w 2024?",
    answer: "Biome 1.x stable: pełna produkcja. Biome 2.0 (planowany): nowe funkcje. Co jest stabilne v1.x: formatter JavaScript. TypeScript. JSX. CSS formatter (stable 1.6+). GraphQL formatter (1.7+). JSON formatter. CSS lint rules. Plugin API (roadmap). Biome CSS: npx biome format --write style.css. CSS jako pierwszoklasowy. Podstawowe reguły CSS. Trwa rozwój. Ignorowanie plików: .biome.ignore lub biome.json files. files.ignore: ['dist', 'node_modules', '.next']. files.include: ['src']. Integracja z Vite: vite-plugin-biome. Format + Lint w trakcie dev. Integracja z Next.js: next.config.js eslint: {ignoreDuringBuilds: true}. Biome w CI zamiast Next.js ESLint. Rozszerzenia: VS Code, IntelliJ, Neovim, Vim, Helix. LSP server wbudowany. Real-time errors. Biome vs Prettier: Biome: szybszy, jedno narzędzie, mniej konfiguracji. Prettier: dojrzalszy, więcej formatów (.vue, .html, .twig). Biome + Prettier combo: Biome dla JS/TS/CSS. Prettier dla .vue, .html. Biome formatter nie jest 100% Prettier compatible. Małe różnice w edge cases. Deno: używa Deno fmt (Biome based). Node.js: Biome lub ESLint+Prettier. Bun: własny fmt w planach.",
  },
  {
    question: "OXC — Rust-based JavaScript toolchain: linter, parser i transformer?",
    answer: "OXC: Boshen Chen. VoidZero toolchain. Ecosystem narzędzi w Rust. oxc-parser: najszybszy JS/TS parser. Używany przez Rolldown, Vite 6. oxlint: linter (nie Biome). oxc-transform: transformer (nie Babel). oxc-minifier: minifier. oxc-resolver: module resolver. Oxlint: npm install -D oxlint. npx oxlint . Szybszy niż ESLint: 50-100x. Focused: podstawowe reguły. Komplementarny z ESLint nie zamiennik. eslint-plugin-oxlint: wyłącz reguły w ESLint które Oxlint pokrywa. Brak duplikacji. Reguły Oxlint: poprawność JS. Najważniejsze reguły. Bez stylistic. Oxlint + ESLint kombo: oxlint szybki check po każdym save. eslint wolniejszy pełny check przed commitem. Szybszy feedback loop. CI pipeline: najpierw oxlint (szybko). Potem eslint (dokładnie). oxc-transform: zamiennik dla Babel/SWC. TypeScript type stripping. JSX transform. Import transforms. Wewnętrznie w Rolldown. oxc-minifier: alternatywa dla terser. Szybszy. Mniejszy output. VoidZero Inc: Evan You CEO. Finansowanie: $4.6M seed round. Cel: zunifikowany JavaScript toolchain w Rust. Rolldown + OXC + Vite = jeden ekosystem. Porównanie z Biome: Biome: all-in-one (lint + format). Oxlint: tylko linter. Oxlint szybszy niż Biome linter. Biome więcej reguł. Timeline: Oxlint stabilny 2024. oxc-transform: 2025 stable.",
  },
  {
    question: "Oxlint — konfiguracja i integracja z ESLint?",
    answer: "Oxlint konfiguracja: .oxlintrc.json lub oxlint.json. {plugins: ['react', 'unicorn', 'typescript'], rules: {eqeqeq: 'error', 'no-unused-vars': 'error', 'react/react-in-jsx-scope': 'off'}, ignorePatterns: ['dist/', 'node_modules/']}. CLI opcje: npx oxlint --fix. npx oxlint --format json. npx oxlint --config .oxlintrc.json. npx oxlint src/ tests/. Plugins Oxlint: jest. react. import. typescript. unicorn. Subset reguł per plugin. Wciąż rosnące. eslint-plugin-oxlint: package który wyłącza ESLint reguły pokryte przez Oxlint. import {rules} from 'eslint-plugin-oxlint'. eslint.config.js: import oxlint from 'eslint-plugin-oxlint'. oxlint.buildFromOxlintConfigFile('.oxlintrc.json'). Automatyczny mapping reguł. Workflow: package.json scripts: lint: 'oxlint . && eslint .'. oxlint szybki. eslint uzupełniający. Pre-commit: lint-staged: '*.{ts,tsx}': ['oxlint', 'eslint --fix']. VS Code: nie ma dedykowanego extension (2024). ESLint extension wystarczy. GitHub Actions: npx oxlint --format github. GitHub annotations. Reporting. Timing: oxlint kompiluje 100x szybciej. Wielkie repo: sekundy zamiast minut. oxlint watch: npx oxlint --watch. Re-run przy zmianach. Fast feedback.",
  },
  {
    question: "Porównanie narzędzi linting i formatowania — ESLint vs Biome vs Oxlint?",
    answer: "ESLint: standard. Ogromny ekosystem pluginów. Wolny. JavaScript/TypeScript. Kiedy: złożone reguły, specjalne pluginy, duże projekty wymagające zaawansowanych reguł. Prettier: de facto formatter. Wiele formatów. Słaby linter. Kiedy: formatowanie CSS, HTML, Vue, Markdown, Prettier-only projekty. Biome: all-in-one Rust. Format + Lint. Szybki. Rosnący ekosystem. Kiedy: nowe projekty, JS/TS/CSS/JSON, chcesz jedno narzędzie. Oxlint: ultra-fast linter. Komplementarny z ESLint. Kiedy: chcesz szybszy feedback w ESLint projekcie. Kombinacje 2024: Starter project: Biome (jedno narzędzie). Istniejący ESLint: dodaj Oxlint dla szybkości + zachowaj ESLint. Potrzebujesz .vue/.html format: Biome + Prettier dla tych formatów. Enterprise: ESLint z custom rules + typescript-eslint. Oxlint dla szybkości. Porównanie prędkości: Prettier: baseline formatter. Biome: 25x szybszy. ESLint: baseline linter. Oxlint: 50-100x szybszy. Biome linter: 15x szybszy. Typowe czasy (duże projekty): ESLint: 30-60s. Oxlint: 0.5-2s. Biome check: 2-5s. Bundle size narzędzi: ESLint: 100+ packages. Biome: jedno binary. Oxlint: jedno binary. Przyszłość: Rust toolchain dominuje. Ekosystem JS tools migruje. Biome i OXC będą standardem. ESLint LTS długo.",
  },
];

const lintTools = [
  { narzedzie: "Biome (lint+format)", prędkość: "15-25x szybszy", kiedy: "Nowe projekty, JS/TS/CSS, jedno narzędzie" },
  { narzedzie: "Biome CSS formatter", prędkość: "v1.6+ stable", kiedy: "CSS formatting bez Prettier" },
  { narzedzie: "Oxlint", prędkość: "50-100x szybszy niż ESLint", kiedy: "Komplementarny ESLint, szybki feedback" },
  { narzedzie: "eslint-plugin-oxlint", prędkość: "ESLint integration", kiedy: "Wyłącz duplikaty reguł ESLint vs Oxlint" },
  { narzedzie: "oxc-parser", prędkość: "Najszybszy JS parser", kiedy: "Wewnętrznie Rolldown, Vite 6 — developer tools" },
  { narzedzie: "oxc-transform", prędkość: "Szybszy niż SWC", kiedy: "Zamiennik Babel — TS strip, JSX, ESM transforms" },
];

export default function BlogBiomeOxcCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Biome i OXC — Rust linting i formatting zamiast ESLint i Prettier 2024 | Fotz.pl"
        description="Biome 1.x: linter+formatter Rust (25x szybszy niż Prettier, 15x szybszy niż ESLint). OXC: oxlint (50-100x szybszy), oxc-parser, oxc-transform. Integracja z ESLint."
        canonicalUrl="https://fotz.pl/blog/biome-oxlint-oxc-rust-linting-formatowanie-zamiast-eslint-prettier-2024"
      />
      <ArticleSchema
        title="Biome i OXC — Rust linting i formatting zamiast ESLint i Prettier 2024?"
        description="Biome: linter+formatter Rust CSS/JS/TS. Oxlint: 50-100x szybszy linter. eslint-plugin-oxlint. oxc-parser, oxc-transform. Porównanie ESLint vs Biome vs Oxlint 2024."
        url="https://fotz.pl/blog/biome-oxlint-oxc-rust-linting-formatowanie-zamiast-eslint-prettier-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Biome i OXC 2024", url: "https://fotz.pl/blog/biome-oxlint-oxc-rust-linting-formatowanie-zamiast-eslint-prettier-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Biome i OXC 2024", href: "/blog/biome-oxlint-oxc-rust-linting-formatowanie-zamiast-eslint-prettier-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Biome / OXC / Oxlint / Rust Tools
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Biome i OXC Toolchain
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Biome (25x szybszy), Oxlint (50-100x szybszy),
              oxc-parser i oxc-transform w Rust.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "All-in-one Rust", value: "Biome" },
                { label: "Fast linter", value: "Oxlint" },
                { label: "JS parser", value: "oxc-parser" },
                { label: "Babel repl.", value: "oxc-transform" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Biome i OXC — narzędzia i prędkość</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Biome, Oxlint, eslint-plugin-oxlint, oxc-parser i oxc-transform —
              prędkość i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Prędkość</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {lintTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.prędkość}</td>
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
