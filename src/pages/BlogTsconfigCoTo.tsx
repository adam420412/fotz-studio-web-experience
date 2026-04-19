import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest tsconfig.json i jakie opcje są najważniejsze?",
    answer: "tsconfig.json: konfiguracja TypeScript compiler (tsc). Określa: jakie pliki kompilować. Jak kompilować. Target JavaScript. Sprawdzanie typów. Podstawowe opcje compilerOptions: target: 'ES2022' — docelowa wersja JS. module: 'ESNext' lub 'CommonJS'. moduleResolution: 'bundler' (TS 5+) lub 'node16'. lib: ['ES2022', 'DOM', 'DOM.Iterable'] — dostępne typy. outDir: './dist' — katalog wyjściowy. rootDir: './src' — katalog źródłowy. strict: true — ZAWSZE włącz (włącza 8 opcji). declaration: true — generuj .d.ts. declarationMap: true — source maps dla declaration. sourceMap: true — source maps dla JS. esModuleInterop: true — import defaultowy z CommonJS. allowSyntheticDefaultImports: true. forceConsistentCasingInFileNames: true. Strict mode włącza: strictNullChecks. strictFunctionTypes. strictBindCallApply. strictPropertyInitialization. noImplicitAny. noImplicitThis. alwaysStrict. useUnknownInCatchVariables (TS 4.4+). Dodatkowe strict opcje (extra): noUncheckedIndexedAccess — tablice mogą być undefined. noImplicitReturns — wszystkie ścieżki muszą returnować. noFallthroughCasesInSwitch. exactOptionalPropertyTypes — {} nie spełnia {a?: string}. Pliki: include: ['src/**/*']. exclude: ['node_modules', 'dist']. files: ['src/index.ts'] — explicit file list.",
  },
  {
    question: "TypeScript path aliases — jak konfigurować @/components i @/utils?",
    answer: "Problem: import '../../../components/Button' — brzydkie. Rozwiązanie: paths aliasy. paths in tsconfig.json: 'paths': {'@/*': ['./src/*'], '@components/*': ['./src/components/*'], '@utils/*': ['./src/utils/*']}. baseUrl: '.' — wymagane dla paths. Teraz: import {Button} from '@/components/Button'. Import {formatDate} from '@/utils/date'. Aliasy: @ — popularny prefix. ~ — alternatywny. Waga: tsconfig paths to tylko dla type checking! Bundler musi być skonfigurowany osobno. Vite aliasy: import path from 'path'. resolve: {alias: {'@': path.resolve(__dirname, './src')}}. Lub: import {fileURLToPath} from 'url'. const __dirname = fileURLToPath(new URL('.', import.meta.url)). '@': path.resolve(__dirname, 'src'). Next.js: automatycznie z tsconfig.json paths. Brak dodatkowej konfiguracji. Jest: moduleNameMapper: {'^@/(.*)$': '/src/$1'}. Webpack: alias: {'@': path.resolve(__dirname, 'src')}. tsconfig-paths: dla ts-node. require('tsconfig-paths/register'). tsx: tsconfig-paths wbudowane. Validacja: tsc --noEmit sprawdź tylko typy. Pomocnicze package: @types/node dla Node.js types. Absolute vs relative: preferuj aliasy dla cross-module imports. Relative dla blisko powiązanych plików (ten sam feature/moduł). Barrel exports: index.ts w każdym katalogu. export {Button} from './Button'. Wygodne ale może powodować circular deps.",
  },
  {
    question: "TypeScript Project References — podział na subprojekty?",
    answer: "Project References (TS 3.0+): podział TypeScript projektu na podprojekty. Każdy ma własne tsconfig.json. composite: true — enable project references. declaration: true — wymagane. Incremental builds — tylko zmienione subprojekty. Monorepo zastosowanie: packages/ui/tsconfig.json: composite: true. packages/api/tsconfig.json: references: [{path: '../ui'}]. root tsconfig.json: references: [{path: './packages/ui'}, {path: './packages/api'}]. tsc --build lub tsc -b — buduje w kolejności. Caching: tsbuildinfo — TypeScript cache. Buduje tylko gdy zmiany. Znacznie szybszy dla dużych projektów. Nx i Turborepo: konfigurują project references automatycznie. tsconfig.base.json pattern: root tsconfig z wspólnymi ustawieniami. Każdy package extends: {extends: '../../tsconfig.base.json', compilerOptions: {...}}. Typowe problemy: circular dependencies między packages. Rozwiązanie: interface-first (osobny package). Strict project boundaries. @typescript-eslint/no-restricted-imports. Verbatim Module Syntax (TS 5.0): 'verbatimModuleSyntax': true. Wymuszaj import type dla type-only imports. Eliminuje emisję pustych import statements. Erasable Syntax (TS 5.4): --erasableSyntaxOnly. Usuwaj tylko type annotations. Kompatybilny z Node.js strip-types. TypeScript isolatedModules: każdy plik niezależny. Wymagane dla Babel/esbuild transpilation. Zapobiega const enum i namespace merging.",
  },
  {
    question: "TypeScript strict mode — noImplicitAny, strictNullChecks i inne?",
    answer: "strictNullChecks: null i undefined nie są typem wszystkiego. Bez strict: function greet(name: string) {return name.toUpperCase()} // greet(null) = crash. Ze strict: TypeScript error przy greet(null). string | null | undefined — explicit. Optional chaining: user?.address?.city. Nullish coalescing: value ?? 'default'. noImplicitAny: brak niejawnego any. Musisz jawnie deklarować typy. Parametry funkcji muszą mieć typy. Wyjątek: kontekstowe typy (callback). strictFunctionTypes: function types są contra-variant. Ogranicza niekompatybilne funkcje w assignmentach. strictPropertyInitialization: wszystkie class properties muszą być zainicjowane w konstruktorze. Or: definite assignment: name!: string. Or: declare: memoizedValue?: string. noUncheckedIndexedAccess: array[0] zwraca T | undefined. Wymusza sprawdzenie przed użyciem. const first = arr[0]. if (first !== undefined) console.log(first). useUnknownInCatchVariables: error w catch jest unknown nie any. Wymusza type narrowing. try {} catch (err) {if (err instanceof Error) console.log(err.message)}. noImplicitReturns: wszystkie ścieżki muszą returnować wartość. Unika undefined z powodu missing return. exactOptionalPropertyTypes: {name?: string} !== {name: string | undefined}. Ścisłe rozróżnienie między brak klucza a undefined. Dla nowych projektów: włącz wszystkie strict opcje. Dla migracji: stopniowo. strict: true jako start. Potem dodawaj noUncheckedIndexedAccess, noImplicitReturns. TypeScript error ignore: @ts-ignore (unikaj). @ts-expect-error (preferred — błąd gdy brak error). @ts-nocheck — wyłącz dla całego pliku.",
  },
  {
    question: "tsconfig dla Next.js, Vite i Node.js — różne konfiguracje?",
    answer: "Next.js tsconfig: automatycznie generowany przez create-next-app. target: 'ES2017'. lib: ['dom', 'dom.iterable', 'esnext']. allowJs: true. skipLibCheck: true. strict: true. noEmit: true (Next.js kompiluje inaczej). incremental: true. module: 'esnext'. moduleResolution: 'bundler'. jsx: 'preserve'. plugins: [{name: 'next'}]. paths: {'@/*': ['./src/*']}. Vite + React tsconfig: dwa pliki: tsconfig.json (aplikacja) + tsconfig.node.json (vite.config.ts). tsconfig.json: target ES2020, lib ES2020+DOM, module: ESNext, moduleResolution: bundler, jsx: react-jsx, strict: true. tsconfig.node.json: composite: true, target: ES2022, module: ESNext, moduleResolution: bundler, allowSyntheticDefaultImports: true. Node.js (backend) tsconfig: target: 'ES2022' lub 'ES2023'. module: 'NodeNext'. moduleResolution: 'NodeNext'. lib: ['ES2022']. types: ['node']. outDir: './dist'. rootDir: './src'. strict: true. sourceMap: true. Declaration files: declaration: true dla publishowanych packages. declarationMap: true dla debugging. Wspólny tsconfig.base.json: compilerOptions ogólne. Packages extends i override. esm vs cjs: module: 'ESNext' + moduleResolution: 'bundler' dla bundled. module: 'NodeNext' + type: 'module' dla native ESM Node.js. ts-node config: ts-node: {esm: true, experimentalSpecifierResolution: 'node'} w tsconfig. tsx: brak konfiguracji. Szybszy niż ts-node (esbuild-based). Bun: TypeScript native bez config.",
  },
];

const tsconfigSettings = [
  { opcja: "strict: true", opis: "Włącza 8 strict opcji", zalecane: "Zawsze (all projects)", efekt: "Bezpieczne typy, mniej błędów runtime" },
  { opcja: "noUncheckedIndexedAccess", opis: "array[i] może być undefined", zalecane: "Tak (new projects)", efekt: "Wymusza sprawdzanie tablic" },
  { opcja: "moduleResolution: bundler", opis: "Dla Vite/webpack (TS 5+)", zalecane: "Tak (dla bundled apps)", efekt: "Poprawne resolving z bundlerami" },
  { opcja: "verbatimModuleSyntax", opis: "Wymusza import type", zalecane: "Tak (TS 5+)", efekt: "Czyste type-only imports" },
  { opcja: "paths: {'@/*': [...]}", opis: "Path aliases dla importów", zalecane: "Tak (dla wygody)", efekt: "Czystsze importy, brak ../../../" },
  { opcja: "exactOptionalPropertyTypes", opis: "Ścisłe optional properties", zalecane: "Dla strict projects", efekt: "Rozróżnienie undefined vs brak klucza" },
];

export default function BlogTsconfigCoTo() {
  return (
    <Layout>
      <SEOHead
        title="tsconfig.json | Fotz Studio"
        description="tsconfig.json: strict mode, noUncheckedIndexedAccess, path aliases (@/*), project references, verbatimModuleSyntax — konfiguracja TypeScript dla Next.js…"
        canonicalUrl="https://fotz.pl/blog/tsconfig-json-konfiguracja-typescript-strict-paths-project-references"

        keywords="tsconfig.json co to jest, tsconfig.json jak działa, tsconfig.json tutorial, tsconfig.json przykład, czym jest tsconfig.json, tsconfig.json dokumentacja, tsconfig.json przewodnik"

        canonical="https://fotz.pl/blog/tsconfig-json-konfiguracja-typescript-strict-paths-project-references"
      />
      <ArticleSchema
        title="tsconfig.json — konfiguracja TypeScript, strict mode, paths i project references?"
        description="6 kluczowych opcji tsconfig (strict/noUncheckedIndexedAccess/moduleResolution/verbatimModuleSyntax/paths/exactOptionalPropertyTypes) — Next.js, Vite i Node.js."
        url="https://fotz.pl/blog/tsconfig-json-konfiguracja-typescript-strict-paths-project-references"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "tsconfig TypeScript", url: "https://fotz.pl/blog/tsconfig-json-konfiguracja-typescript-strict-paths-project-references" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "tsconfig TypeScript", href: "/blog/tsconfig-json-konfiguracja-typescript-strict-paths-project-references" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / Config
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              tsconfig.json — Konfiguracja TypeScript
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Strict mode, path aliases, project references, verbatimModuleSyntax
              i gotowe konfiguracje dla Next.js, Vite i Node.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Bezpieczne typy", value: "strict: true" },
                { label: "Czyste importy", value: "@/ aliasy" },
                { label: "Subprojekty", value: "references" },
                { label: "TS 5+ bundler", value: "moduleResolution" },
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

      {/* Ustawienia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych opcji tsconfig</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              strict, noUncheckedIndexedAccess, moduleResolution, verbatimModuleSyntax,
              paths i exactOptionalPropertyTypes — zalecenia i efekty.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zalecane</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Efekt</th>
                </tr>
              </thead>
              <tbody>
                {tsconfigSettings.map((s, i) => (
                  <tr key={s.opcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 font-mono text-xs">{s.opcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.zalecane}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.efekt}</td>
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

      <RelatedArticles currentArticleId="tsconfig-json-konfiguracja-typescript-strict-paths-project-references" />
      <ContactSection />
    </Layout>
  );
}
