import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "TypeScript 5.5 — Inferred Type Predicates i co nowego?",
    answer: "TypeScript 5.5 (2024-06): kluczowe features. Inferred Type Predicates: TypeScript automatycznie inferuje type predicate z filtrowania. Wcześniej: function isString(x: any): x is string { return typeof x === 'string' }. TS 5.5: const strings = ['a', 1, 'b', 2].filter(x => typeof x === 'string'). Typ: string[] automatycznie! Bez type assertion. const strOrNum: (string | number)[] = [1, 'a', 2]. const strOnly = strOrNum.filter(x => typeof x === 'string'). strOnly: string[]. Control flow improvements: dokładniejsza analiza. const narrowed: string = condition ? maybeString : ''. TypeScript rozumie narrowing w closure. Isolated Declarations: --isolatedDeclarations. Każdy plik musi mieć explicit types. Nie inferuj z innego pliku. Szybsze parallel type checking. Monorepo benefit: każdy pakiet niezależnie type-check. tsconfig.json: {compilerOptions: {isolatedDeclarations: true}}. Requires explicit: function add(a: number, b: number): number — return type required. export const x: string = 'hello' — type annotation required. JSDoc: explicit dla monorepo. Nowe regex: TypeScript sprawdza regex syntax. Błędy w nieprawidłowych regex. /[a-z]+/ — ok. /[z-a]+/ — błąd kompilacji (invalid range). Config performance: tsconfig references szybsze. Composite projects. Build mode: tsc --build.",
  },
  {
    question: "TypeScript 5.6 i using declarations (Explicit Resource Management)?",
    answer: "TypeScript 5.6 (2024-09): using declarations. Explicit Resource Management (TC39 Stage 4). using i await using. using: automatyczny cleanup synchroniczny. const file = using openFile('data.txt'). // file.close() wywołane automatycznie po bloku. Musi implementować Symbol.dispose. Implementacja: const disposable = { [Symbol.dispose]() { cleanup() } }. using resource = disposable. await using: asynchroniczny cleanup. await using db = await connectToDb(). // db.close() wywołane po await. Symbol.asyncDispose. DisposableStack: grupuj disposable. const stack = new DisposableStack(). stack.use(resource1). stack.use(resource2). stack.dispose() — dispose all. AsyncDisposableStack: async version. Praktyczne: file handles. database connections. AbortController. Web sockets. React nie używa (useEffect nadal). Node.js 20+: Symbol.dispose wbudowane. fs.FileHandle[Symbol.asyncDispose]. using fh = await fs.promises.open('file.txt', 'r'). Nieoczekiwane użycia: cancelable fetch: const ctl = using new AbortController(). fetch(url, {signal: ctl.signal}). // ctl.abort() po bloku. TS 5.6 inne: `--noUncheckedSideEffectImports`. import 'styles.css' — sprawdza że plik istnieje. Iterator helper methods: .map(), .filter(), .take() dla iteratorów. Lazy evaluation. Szybszy od Array.",
  },
  {
    question: "TypeScript — verbatimModuleSyntax i Isolated Modules?",
    answer: "verbatimModuleSyntax (TS 5.0+): rekomendowane dla nowoczesnych projektów. Zamienia isolatedModules + importsNotUsedAsValues + preserveValueImports. Reguła: import type MUSI być type-only. import {type User, getUser} — ok. import {User} gdy User to typ — błąd! Dlaczego ważne: bundlery (esbuild, swc) nie sprawdzają typów. Usuwają import {User} gdy User to typ. Ale niektóre importy mają side effects. verbatimModuleSyntax zapobiega dwuznacznościom. tsconfig: {compilerOptions: {verbatimModuleSyntax: true}}. Efekt: import type {User} from './types' — usuwa. import {User} from './types' — zostawia (runtime). Type assertions: as const satisfies. const config = {port: 3000, host: 'localhost'} as const satisfies {port: number, host: string}. Exact type + satisfies. const enum: verbatimModuleSyntax zabrania const enum (nie pure type). Użyj zwykłego enum. Lub as const object. Module detection: {moduleDetection: 'force'} — traktuj jako moduł. Bez export {} na końcu pliku. Strict mode: strictest tsconfig 2024: strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes, noImplicitReturns, noFallthroughCasesInSwitch, forceConsistentCasingInFileNames, verbatimModuleSyntax, isolatedDeclarations (monorepo).",
  },
  {
    question: "TypeScript 5.x — satisfies, const type parameters i noisy errors?",
    answer: "satisfies (TS 4.9, używaj!): sprawdź typ bez tracenia literalności. const palette = {red: [255, 0, 0], green: '#00ff00'} satisfies Record string, string | number[]. palette.red — [255, 0, 0] (nie string | number[]). palette.green — string (nie string | number[]). Typ preserved. const type parameters (TS 5.0): function makeArray(a: T): T[] { return [a] }. makeArray('hello') — string[] (nie ('hello')[]). Lepsze z const: function makeArray(a: T): T[] z const T. makeArray('hello') — ['hello'] (literal!). Override (TS 4.3): class Base { greet(): string { return 'Hello' } }. class Derived extends Base { override greet() { return 'Hi' } }. Błąd gdy nie istnieje w Base. NoPropertyAccessFromIndexSignature: ts error gdy index signature. Explicit bracket notation. Sprawdzenie. Template literal types (TS 4.1+): type Route = `/${string}`. type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'. type Endpoint = `${HttpMethod} ${Route}`. const endpoint: Endpoint = 'GET /users'. Declare: declare module '*.svg' { const content: string. export default content }. Ambient declarations. Import.meta: type: {importMeta: 'bundler'} w tsconfig. import.meta.env — Vite. import.meta.url — Node. Satisfies + as const: kombinacja: const config = {theme: 'dark', lang: 'pl'} as const satisfies Config. Najsilniejsza typizacja.",
  },
  {
    question: "Narzędzia TypeScript 2024 — ts-reset, type-fest, ts-toolbelt?",
    answer: "ts-reset: Matt Pocock. Poprawia standardowe typy TS. npm install @total-typescript/ts-reset. import '@total-typescript/ts-reset'. Co poprawia: Array.isArray(x) — unknown[] zamiast any[]. JSON.parse() — unknown zamiast any. fetch().json() — unknown. Array.filter(Boolean) — usuwa undefined. Element.querySelector — zwraca Element (nie null zawsze). Set.has(value) — type-safe (TS blokowało non-set-type). .includes() — type-safe. type-fest: Sindre Sorhus. Użyteczne utility types. Konditional, Mapping, Template. Async, ReadonlyDeep, Get, ValueOf. npm install type-fest. import type {ReadonlyDeep, Except, Promisable} from 'type-fest'. ReadonlyDeep: rekurencyjnie readonly. Except: jak Omit ale z autocompletion. Promisable: T | Promise T. ts-toolbelt: bardzo zaawansowane. Functional types. Recursion. Union manipulation. zod-to-ts: generuj TypeScript z Zod schema. Dla dokumentacji. json-schema-to-ts: JSON Schema -> TS types. Szybko z API. TypeScript ESLint (typescript-eslint v7): parser + rules. Typed lint rules. await using w lint. performancowe rules. tRPC type inference: end-to-end types bez schema. Automatyczne z server -> client. Matt Pocock Total TypeScript: kurs i narzędzia. Najlepsze źródło TS wiedzy. Twitch livestreams. ts-reset darmowe.",
  },
];

const tsFeatures = [
  { wersja: "TS 5.0", funkcja: "const type parameters, satisfies (4.9)", opis: "Literal type preservation, type checking bez narrowing" },
  { wersja: "TS 5.4", funkcja: "NoPropertyAccessFromIndexSignature", opis: "Safer index signatures, preserved narrowing in closures" },
  { wersja: "TS 5.5", funkcja: "Inferred Type Predicates, Isolated Declarations", opis: "Auto type guards z filter(), parallel type checking" },
  { wersja: "TS 5.6", funkcja: "using / await using (Symbol.dispose)", opis: "Explicit Resource Management — auto cleanup" },
  { wersja: "TS 5.x", funkcja: "verbatimModuleSyntax", opis: "Klarowne import type — bundler safe" },
  { wersja: "Narzędzia", funkcja: "ts-reset, type-fest, ts-toolbelt", opis: "Utility types, poprawki standardowych typów" },
];

export default function BlogTs55CoTo() {
  return (
    <Layout>
      <SEOHead
        title="TypeScript 5.5, 5.6 | Fotz Studio"
        description="TypeScript 5.5 i 5.6: Inferred Type Predicates (auto type guards z filter), using declarations (Explicit Resource Management), Isolated Declarations…"
        canonical="https://fotz.pl/blog/typescript-5-5-5-6-inferred-predicates-using-isolated-declarations-2024"

        keywords="TypeScript 5.5, 5.6 co to jest, TypeScript 5.5, 5.6 jak działa, TypeScript 5.5, 5.6 tutorial, TypeScript 5.5, 5.6 przykład, czym jest TypeScript 5.5, 5.6, TypeScript 5.5, 5.6 dokumentacja, TypeScript 5.5, 5.6 przewodnik"

        canonical="https://fotz.pl/blog/typescript-5-5-5-6-inferred-predicates-using-isolated-declarations-2024"
      />
      <ArticleSchema
        title="TypeScript 5.5, 5.6 — Inferred Predicates, using, Isolated Declarations 2024?"
        description="TypeScript 5.5/5.6 nowości: Inferred Type Predicates, using/await using (Symbol.dispose), Isolated Declarations, verbatimModuleSyntax, const type params i narzędzia ts-reset/type-fest."
        url="https://fotz.pl/blog/typescript-5-5-5-6-inferred-predicates-using-isolated-declarations-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TypeScript 5.5 / 5.6", url: "https://fotz.pl/blog/typescript-5-5-5-6-inferred-predicates-using-isolated-declarations-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "TypeScript 5.5 / 5.6", url: "/blog/typescript-5-5-5-6-inferred-predicates-using-isolated-declarations-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / 5.5 / 5.6 / 2024
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TypeScript 5.5 / 5.6
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Inferred Type Predicates, using / await using (Symbol.dispose),
              Isolated Declarations i verbatimModuleSyntax.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "TS 5.5", value: "Type Predicates" },
                { label: "TS 5.6", value: "using keyword" },
                { label: "Monorepo", value: "Isolated Decl." },
                { label: "Bundler", value: "verbatimModule" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TypeScript 5.x — kluczowe funkcje według wersji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              TS 5.0 do 5.6 — const params, satisfies, predicates, using, verbatimModuleSyntax i narzędzia.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wersja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {tsFeatures.map((t, i) => (
                  <tr key={t.wersja + t.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.wersja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.opis}</td>
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

      <RelatedArticles currentArticleId="typescript-5-5-5-6-inferred-predicates-using-isolated-declarations-2024" />
      <ContactSection />
    </Layout>
  );
}
