import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "ESLint 9 Flat Config — co to jest i jak migrować z .eslintrc?",
    answer: "ESLint 9: Nicholas C. Zakas. Flat Config domyślny. eslint.config.js lub eslint.config.mjs. .eslintrc.* deprecated. Instalacja: npm install eslint@9. Flat Config format: export default [{languageOptions: {globals: globals.browser}, rules: {'no-unused-vars': 'error', 'no-console': 'warn'}}]. Array konfiguracji — zamiast extends. Każdy element: files, ignores, rules, plugins, languageOptions. files: glob pattern — kiedy stosować. ignores: wykluczenia. Migracja z .eslintrc: npx @eslint/migrate-config .eslintrc.json. Automatyczna konwersja. Ręczne poprawki. .eslintignore -> ignores w konfiguracji. extends zamienione na importy. Kluczowe zmiany v9: brak plugins jako stringi. Importuj plugin wprost: import react from 'eslint-plugin-react'. {plugins: {react}}. brak extends stringów. Importuj presets: import js from '@eslint/js'. js.configs.recommended. Lintowanie TypeScript: import tseslint from 'typescript-eslint'. tseslint.config(). tseslint.configs.recommended. Lintowanie React: import reactPlugin from 'eslint-plugin-react'. reactPlugin.configs.flat.recommended. Globale: import globals from 'globals'. globals.browser, globals.node, globals.es2022. FlatCompat: kompatybilność z extends pluginami. import {FlatCompat} from '@eslint/eslintrc'. const compat = new FlatCompat(). compat.extends('plugin:react/recommended').",
  },
  {
    question: "typescript-eslint v8 — lintowanie TypeScript z flat config?",
    answer: "typescript-eslint v8: James Henry, Josh Goldberg. Nowe API. Flat Config support. Instalacja: npm install --save-dev typescript-eslint @eslint/js. Podstawowa konfiguracja: import tseslint from 'typescript-eslint'. export default tseslint.config(tseslint.configs.recommended). Strict mode: tseslint.configs.strict. recommendedTypeChecked: z type-checking. Potrzebuje parserOptions.project. Pełna konfiguracja: import tseslint from 'typescript-eslint'. import js from '@eslint/js'. export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, {languageOptions: {parserOptions: {project: true, tsconfigRootDir: import.meta.dirname}}, rules: {'@typescript-eslint/no-explicit-any': 'error', '@typescript-eslint/no-unused-vars': 'error', '@typescript-eslint/prefer-const': 'error', '@typescript-eslint/no-floating-promises': 'error'}}). TypeChecked rules: @typescript-eslint/await-thenable. @typescript-eslint/no-misused-promises. @typescript-eslint/no-floating-promises. @typescript-eslint/restrict-template-expressions. Wymagają type information. Wolniejsze ale dokładniejsze. Szybszy lint: tylko pliki .ts/.tsx dla type-aware rules. Wyłącz dla .js. {files: ['**/*.ts', '**/*.tsx'], extends: [tseslint.configs.recommendedTypeChecked]}. Presets: tseslint.configs.base — minimalne. recommended — polecane. strict — surowe. all — wszystkie reguły. Migracja z v7: nowszy API. Mniej konfiguracji.",
  },
  {
    question: "ESLint — @stylistic/eslint-plugin i formatowanie kodu?",
    answer: "@stylistic/eslint-plugin: ESLint Stylistic. Reguły formatowania wyodrębnione z ESLint core. Anthony Fu (antfu). Instalacja: npm install --save-dev @eslint/js @stylistic/eslint-plugin. Konfiguracja: import stylistic from '@stylistic/eslint-plugin'. export default [{plugins: {'@stylistic': stylistic}, rules: {'@stylistic/indent': ['error', 2], '@stylistic/quotes': ['error', 'single'], '@stylistic/semi': ['error', 'never'], '@stylistic/comma-dangle': ['error', 'always-multiline'], '@stylistic/arrow-parens': ['error', 'always'], '@stylistic/max-len': ['error', {code: 100}]}}]. Preset: stylistic.configs['recommended-flat']. Stylistic.configs.customize({indent: 2, quotes: 'single', semi: false}). Stylistic vs Prettier: Stylistic — ESLint rules (lintuje i fixuje). Prettier — osobny formatter. eslint-config-prettier — wyłącza konflikty. Rekomendacja: Stylistic + ESLint lub Prettier (nie oba). Anthony Fu's setup: brak Prettier w antfu/eslint-config. Tylko Stylistic. @antfu/eslint-config: opinionated flat config. TypeScript, Vue, React, JSON. import antfu from '@antfu/eslint-config'. export default antfu(). Customizacja: antfu({typescript: true, react: true, rules: {...}}). eslint-plugin-unicorn: dodatkowe reguły. Dobre praktyki. unicorn/prevent-abbreviations. unicorn/no-array-for-each. Fix mode: eslint --fix. Napraw automatycznie. npx eslint . --fix.",
  },
  {
    question: "ESLint — pluginy dla React, imports i accessibility?",
    answer: "eslint-plugin-react: facebook. Reguły React. import react from 'eslint-plugin-react'. {plugins: {react}, rules: react.configs.flat.recommended.rules, settings: {react: {version: 'detect'}}}. React Hooks: import reactHooks from 'eslint-plugin-react-hooks'. reactHooks.configs['recommended-latest'] (ESLint 9). rules-of-hooks. exhaustive-deps. eslint-plugin-jsx-a11y: dostępność JSX. import jsxA11y from 'eslint-plugin-jsx-a11y'. jsxA11y.flatConfigs.recommended. alt-text, anchor-has-content, interactive-supports-focus. eslint-plugin-import: zarządzanie importami. import/order. import/no-duplicates. eslint-plugin-simple-import-sort: prostsze sortowanie. perfectionist.configs['recommended-natural']. eslint-plugin-unused-imports: find unused imports. no-unused-imports rule. eslint-plugin-perfectionist: sortowanie importów, props, destrukturyzacji. Comprehensive. eslint-plugin-sonarjs: reguły jakości kodu. Cognitive complexity. Code smells. Duplikaty. eslint-plugin-n: Node.js reguły. n/no-missing-require. n/no-unsupported-features. eslint-plugin-security: bezpieczeństwo. detect-eval-with-expression. detect-non-literal-regexp. VS Code integracja: eslint extension. Format on save. Editor settings: editor.codeActionsOnSave: {source.fixAll.eslint: true}. Lint staged: lint-staged: {'*.{ts,tsx}': ['eslint --fix']}. Husky + lint-staged: pre-commit hook.",
  },
  {
    question: "ESLint Flat Config — przykładowa kompletna konfiguracja 2024?",
    answer: "Pełna konfiguracja Next.js + TypeScript + React: import js from '@eslint/js'. import tseslint from 'typescript-eslint'. import reactPlugin from 'eslint-plugin-react'. import reactHooksPlugin from 'eslint-plugin-react-hooks'. import jsxA11y from 'eslint-plugin-jsx-a11y'. import importPlugin from 'eslint-plugin-import'. import globals from 'globals'. export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, {files: ['**/*.{ts,tsx}'], languageOptions: {parserOptions: {project: true}, globals: {...globals.browser, ...globals.node}}, plugins: {react: reactPlugin, 'react-hooks': reactHooksPlugin, 'jsx-a11y': jsxA11y, import: importPlugin}, rules: {...reactPlugin.configs.recommended.rules, ...reactHooksPlugin.configs.recommended.rules, ...jsxA11y.configs.recommended.rules, 'react/react-in-jsx-scope': 'off', '@typescript-eslint/no-explicit-any': 'error', 'import/order': ['error', {groups: ['builtin', 'external', 'internal']}]}}, {ignores: ['dist/', '.next/', 'node_modules/']}). package.json scripts: lint: 'eslint .'. lint:fix: 'eslint . --fix'. Lint w CI: npx eslint . --max-warnings 0. Fail na warnings. Cache: eslint --cache. .eslintcache. Szybsze powtórne uruchomienie. ESLint inspect: npx eslint --inspect-config. Otwiera przeglądarkę. Debuguj konfigurację. Reguły per plik: {files: ['**/*.spec.ts'], rules: {'@typescript-eslint/no-explicit-any': 'off'}}. Disable inline: eslint-disable-next-line. eslint-disable komentarze.",
  },
];

const eslintFeatures = [
  { funkcja: "Flat Config (eslint.config.js)", wersja: "ESLint 9", opis: "Nowy format konfiguracji — array zamiast extends" },
  { funkcja: "typescript-eslint v8", wersja: "ESLint 9 compat", opis: "TypeChecked rules, strict mode, nowe API" },
  { funkcja: "@stylistic/eslint-plugin", wersja: "1.x+", opis: "Formatowanie przez ESLint — zamiennik Prettier" },
  { funkcja: "eslint-plugin-react (flat)", wersja: "7.37+", opis: "React rules flat config — react.configs.flat" },
  { funkcja: "eslint-plugin-react-hooks", wersja: "5.x+", opis: "rules-of-hooks, exhaustive-deps — flat config" },
  { funkcja: "@antfu/eslint-config", wersja: "Opinionated", opis: "Gotowa konfiguracja — TS, React, Vue, Stylistic" },
];

export default function BlogEslint9FlatConfigCoTo() {
  return (
    <Layout>
      <SEOHead
        title="ESLint 9 Flat Config — typescript-eslint v8, @stylistic, migracja z .eslintrc 2024 | Fotz.pl"
        description="ESLint 9 Flat Config: eslint.config.js, typescript-eslint v8 (TypeChecked rules), @stylistic/eslint-plugin, pluginy React/a11y/import i migracja z .eslintrc.json."
        canonicalUrl="https://fotz.pl/blog/eslint-9-flat-config-typescript-eslint-v8-stylistic-migracja-2024"
      />
      <ArticleSchema
        title="ESLint 9 Flat Config — typescript-eslint v8, @stylistic, migracja z .eslintrc 2024?"
        description="ESLint 9: Flat Config format, typescript-eslint v8 TypeChecked, @stylistic/eslint-plugin, pluginy React/hooks/a11y i kompletna konfiguracja Next.js TypeScript."
        url="https://fotz.pl/blog/eslint-9-flat-config-typescript-eslint-v8-stylistic-migracja-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ESLint 9 Flat Config 2024", url: "https://fotz.pl/blog/eslint-9-flat-config-typescript-eslint-v8-stylistic-migracja-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "ESLint 9 Flat Config 2024", href: "/blog/eslint-9-flat-config-typescript-eslint-v8-stylistic-migracja-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              ESLint / TypeScript / Flat Config / Linting
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ESLint 9 Flat Config
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              eslint.config.js, typescript-eslint v8, @stylistic
              i migracja z .eslintrc.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Nowy format", value: "Flat Config" },
                { label: "TypeScript", value: "ts-eslint v8" },
                { label: "Formatowanie", value: "@stylistic" },
                { label: "Gotowe", value: "antfu/eslint" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ESLint 9 — kluczowe funkcje i pluginy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Flat Config, typescript-eslint, @stylistic, pluginy React i antfu/eslint-config —
              wersja i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wersja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {eslintFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.wersja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.opis}</td>
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
