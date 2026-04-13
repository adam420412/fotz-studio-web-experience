import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest ESLint i jak skonfigurować go w projekcie TypeScript?",
    answer: "ESLint: najstarszy i najpopularniejszy linter JavaScript/TypeScript (Nicholas C. Zakas, 2013). Statyczna analiza kodu — wykrywa błędy i problemy zanim uruchomisz. Reguły: możesz włączyć/wyłączyć/konfigurować każdą regułę. ESLint Flat Config (v9+, 2024): nowy format konfiguracji. eslint.config.js (lub .mjs, .cjs) zamiast .eslintrc.*. Tablicowy format zamiast hierarchicznego. TypeScript ESLint: typescript-eslint (oficjalny). Reguły type-aware (potrzebują TypeScript compiler). @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-return-type. tsconfig.json wymagany dla type-aware rules. Popularne konfiguracje: eslint:recommended, typescript-eslint/recommended, typescript-eslint/strict. Pluginy React: eslint-plugin-react, eslint-plugin-react-hooks (najważniejszy). eslint-plugin-jsx-a11y — dostępność w JSX. eslint-plugin-import — porządek importów. eslint-plugin-unicorn — opinionated rules (dobre praktyki). Inne popularne: eslint-plugin-sonarjs (code smells). eslint-plugin-security (bezpieczeństwo). eslint-plugin-n (Node.js). Performance: ESLint może być wolny na dużych projektach. --cache flag — cache wyników. lint-staged — lintuj tylko staged files. Prettier integracja: eslint-config-prettier — wyłącz reguły formatowania z ESLint. Niech Prettier formatuje, ESLint sprawdza logikę.",
  },
  {
    question: "Biome — co to jest i czy zastępuje ESLint i Prettier?",
    answer: "Biome (dawniej Rome, 2023): linter + formatter napisany w Rust. Bardzo szybki (25x szybszy niż ESLint+Prettier). Jeden tool zamiast kilku. Zero konfiguracji dla podstawowego użycia. Biome linter: 200+ reguł (ESLint + typescript-eslint subset). Kategorie: correctness, suspicious, style, complexity, performance, security, a11y. Biome formatter: opinionated (jak Prettier). Identyczne wyniki niezależnie od konfiguracji. Obsługuje: JS, TS, JSX, TSX, JSON, JSONC. Konfiguracja (biome.json): minimalna config. overrides per plik. rules włącz/wyłącz. Biome vs ESLint+Prettier: Biome — jeden tool, Rust speed, zero-config start, mniej reguł. ESLint — dojrzały, ogromny ekosystem pluginów, type-aware rules. Prettier — de facto standard formatowania, szerszy support (CSS, Markdown, PHP). 2024 status: Biome nie zastępuje ESLint (brak pełnego type-aware). Dobre do projektu z minimalnymi wymaganiami linting. Ale rośnie szybko. Oxlint (oxc-project): linter w Rust (Boshen). 50-100x szybszy od ESLint. Kompatybilność z ESLint (reguły). Nie formatter. Używaj jako szybki pre-pass obok ESLint. lint-staged: npm install --save-dev lint-staged. .lintstagedrc: {'*.{ts,tsx}': ['eslint --fix', 'prettier --write']}. Działa z Husky pre-commit hook.",
  },
  {
    question: "Prettier vs Biome formatter — formatowanie kodu w 2024?",
    answer: "Prettier: opinionated formatter (2017, Christopher Chedeau). Nie dyskutuj o stylu — Prettier decyduje. Obsługuje: JS, TS, JSX, CSS, SCSS, HTML, JSON, YAML, Markdown, GraphQL, MDX. Popularne opcje: printWidth: 80/100/120. tabWidth: 2. singleQuote: true. trailingComma: 'all'. semi: true/false. arrowParens: 'always'/'avoid'. Integracja: VSCode: Prettier - Code Formatter. Format on Save. eslint-config-prettier — eliminuje konflikty. .prettierrc lub prettier.config.js. .prettierignore — pliki wykluczone. Biome formatter: szybszy (Rust). Coraz lepsza kompatybilność z Prettier. Różnice: niektóre edge cases różne. Sprawdź compatibility na biome.sh. dprint: plugin-based formatter (Rust). Konfigurowalny (w przeciwieństwie do Prettier). Plugins: TypeScript, JSON, TOML, Markdown. Szybki (Rust). Standardowe podejście 2024: mały projekt -> Biome (formatter + linter). Duży projekt z TypeScript -> ESLint (type-aware) + Prettier + eslint-config-prettier. Monorepo -> tRPC project -> ESLint z shared config. Husky + lint-staged: Husky: Git hooks manager. npx husky init -> .husky/ directory. .husky/pre-commit: npx lint-staged. lint-staged: uruchamia tylko na staged files (szybko). Szybki feedback loop.",
  },
  {
    question: "Git hooks, Husky i conventional commits — workflow quality?",
    answer: "Git hooks: skrypty uruchamiane przez Git przy określonych zdarzeniach. pre-commit — przed commitem (lint, format, test). commit-msg — walidacja wiadomości commita. pre-push — przed push (testy, build). post-merge — po merge (npm install). Husky: menedżer Git hooks dla Node.js. npx husky init. .husky/pre-commit: npm run lint. .husky/pre-push: npm test. Husky v9: modern, esm-ready. Commitlint: walidacja wiadomości commita. @commitlint/cli + @commitlint/config-conventional. .commitlintrc.js: module.exports = {extends: ['@commitlint/config-conventional']}. Conventional Commits: standard wiadomości commitów. format: type(scope): description. Typy: feat, fix, docs, style, refactor, perf, test, build, ci, chore. Breaking change: feat!: lub BREAKING CHANGE w footerze. Przykłady: feat(auth): add Google OAuth login. fix(api): handle null user in getProfile. docs(readme): update installation instructions. Semantic Release: automatyczne wersjonowanie i changelog. Analizuje conventional commits. Generuje CHANGELOG.md. Bumps wersję (semver). Publikuje do npm. GitHub Release. Changesets (Pnpm/Turborepo ecosystem): ręczne changelogi per PR. changeset add -> wersjonowanie. changeset version -> bump. changeset publish -> npm. Release Please (Google): GitHub Action. Conventional commits -> Release PR -> version bump.",
  },
  {
    question: "EditorConfig, .nvmrc i standardowe narzędzia projektowe?",
    answer: "EditorConfig: standaryzacja ustawień edytora. .editorconfig w root projektu. Niezależne od IDE (VSCode, IntelliJ, Vim). root = true. [*]: indent_style = space. indent_size = 2. end_of_line = lf. charset = utf-8. trim_trailing_whitespace = true. insert_final_newline = true. .nvmrc: wersja Node.js dla projektu. echo '20.11.0' > .nvmrc. nvm use — automatyczne przełączenie. .nvmrc + Volta: Volta.sh pinuje Node.js per projekt. volta pin node@20. package.json -> volta field. engines field: package.json engines: {node: '>=20.0.0', npm: '>=10.0.0'}. VSCode workspace settings (.vscode/settings.json): editor.formatOnSave. editor.defaultFormatter. files.eol. typescript.preferences. extensions.json (recommended extensions). tsconfig.json organizacja: tsconfig.base.json — wspólne. tsconfig.json — project override. include, exclude, extends. strict mode: zawsze włączone w nowych projektach. strictNullChecks, noImplicitAny, strictFunctionTypes. paths aliasy: '@/*': ['./src/*']. Musi być skonfigurowane też w Vite (resolve.alias). Narzędzia CI code quality: SonarCloud — analiza statyczna, code coverage. CodeClimate — maintainability score. Codecov — coverage reports. GitHub Actions — linting check. Bundle size monitoring — bundlemon, size-limit.",
  },
];

const codeQualityTools = [
  { narzedzie: "ESLint", typ: "Linter", jezyk: "JavaScript", szybkosc: "Normalny", ekosystem: "Ogromny (pluginy)", kiedy: "Standard dla JS/TS, type-aware rules" },
  { narzedzie: "Biome", typ: "Linter + Formatter", jezyk: "Rust", szybkosc: "Bardzo szybki (25x)", ekosystem: "Rosnący", kiedy: "Zero-config start, małe projekty" },
  { narzedzie: "Oxlint", typ: "Linter", jezyk: "Rust", szybkosc: "50-100x szybszy", ekosystem: "ESLint subset", kiedy: "Pre-pass obok ESLint, duże projekty" },
  { narzedzie: "Prettier", typ: "Formatter", jezyk: "JavaScript", szybkosc: "Normalny", ekosystem: "De facto standard", kiedy: "Formatowanie (CSS, YAML, MDX, HTML)" },
  { narzedzie: "TypeScript (tsc)", typ: "Type checker", jezyk: "TypeScript", szybkosc: "Normalny (incremental)", ekosystem: "Natywny", kiedy: "Walidacja typów (nie linting)" },
  { narzedzie: "Husky + lint-staged", typ: "Git hooks", jezyk: "JavaScript", szybkosc: "Szybki (staged only)", ekosystem: "npm standard", kiedy: "Pre-commit quality gate" },
];

export default function BlogEslintBiomeCoTo() {
  return (
    <Layout>
      <SEOHead
        title="ESLint, Biome, Prettier, Husky | Fotz Studio"
        description="ESLint Flat Config, Biome (Rust linter+formatter), Prettier, Oxlint, Husky, Commitlint, Conventional Commits — code quality workflow TypeScript 2024."
        canonicalUrl="https://fotz.pl/blog/eslint-biome-prettier-husky-linting-code-quality-typescript-2024"

        keywords="ESLint, Biome, Prettier, Husky co to jest, ESLint, Biome, Prettier, Husky jak działa, ESLint, Biome, Prettier, Husky tutorial, ESLint, Biome, Prettier, Husky przykład, czym jest ESLint, Biome, Prettier, Husky, ESLint, Biome, Prettier, Husky dokumentacja, ESLint, Biome, Prettier, Husky przewodnik"

        canonical="https://fotz.pl/blog/eslint-biome-prettier-husky-linting-code-quality-typescript-2024"
      />
      <ArticleSchema
        title="ESLint, Biome, Prettier, Husky — linting i code quality w TypeScript 2024?"
        description="6 narzędzi code quality (ESLint/Biome/Oxlint/Prettier/TypeScript/Husky) — Flat Config, Rust linters, conventional commits, lint-staged i CI workflow."
        url="https://fotz.pl/blog/eslint-biome-prettier-husky-linting-code-quality-typescript-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ESLint i Biome", url: "https://fotz.pl/blog/eslint-biome-prettier-husky-linting-code-quality-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-violet-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "ESLint i Biome", href: "/blog/eslint-biome-prettier-husky-linting-code-quality-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / DevTools
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Linting i code quality 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              ESLint Flat Config, Biome w Rust, Prettier, Husky i Conventional Commits
              — kompletny workflow jakości kodu dla TypeScript projektów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Linter standard", value: "ESLint v9" },
                { label: "Rust all-in-one", value: "Biome" },
                { label: "Formatter", value: "Prettier" },
                { label: "Git hooks", value: "Husky" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi code quality dla TypeScript</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              ESLint, Biome, Oxlint, Prettier, TypeScript i Husky — od statycznej
              analizy po Git hooks i automatyczne formatowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Język</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Szybkość</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Ekosystem</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {codeQualityTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.jezyk}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.szybkosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.ekosystem}</td>
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

      <RelatedArticles currentArticleId="eslint-biome-prettier-husky-linting-code-quality-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
