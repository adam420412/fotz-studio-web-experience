import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "TypeScript 5.7 — --rewriteRelativeImportExtensions i Node ESM?",
    answer: "TypeScript 5.7: Listopad 2024. Kluczowe: --rewriteRelativeImportExtensions. require(ESM). Error message improvements. --rewriteRelativeImportExtensions: problem z ESM — importy .ts plików muszą mieć .js extension. import {foo} from './foo.js'. TS 5.7 rozwiązuje: tsconfig: compilerOptions.rewriteRelativeImportExtensions: true. Automatycznie przepisuje rozszerzenia. import {foo} from './foo.ts' staje się './foo.js' w output. Node.js --require(ESM): Node 22+ z --experimental-require-module. TS 5.7 to obsługuje. --module node22 i --moduleResolution node22. Nowe flagi: --target es2025. Support BigInt literals. Support for Array grouping. Validation of tsconfig paths: błąd jeśli ścieżka nie istnieje. --declaration emit improvements: szybsze generowanie d.ts. Isolated declarations: declare keyword na exported items. preserveValueImports false po 5.7. Better error messages: context-aware. Link do dokumentacji. Więcej informacji o błędzie. Granular --libcheck: sprawdza tylko użyte pliki lib.d.ts. Szybszy typecheck. Improved JSX inference: lepsze wnioskowanie dla React 19 JSX. Deklaracja inline JSX namespace. TypeScript 5.7 instalacja: npm install -D typescript@5.7. npx tsc --version. Breaking changes: minimum Node.js 14.17.",
  },
  {
    question: "TypeScript 5.8 — granular branch checking i --erasableSyntaxOnly?",
    answer: "TypeScript 5.8: Luty 2025. Granular checks for conditional branches. --erasableSyntaxOnly. Node.js type stripping. Granular branch checks: function foo(x: string | number): number { if (typeof x === 'string') { return x.length } else { return x } }. Osobne sprawdzanie każdego brancha. Lepsza wnioskowanie typów per branch. Conditional expressions: const result = condition ? stringValue : numberValue. Każda gałąź sprawdzana niezależnie. --erasableSyntaxOnly: flaga dla Node.js --strip-types. Blokuje syntaktykę TypeScript która wymaga kompilacji. Np. enums (nie const enums). Namespaces. Decorators (nie stage 3). Paramter properties. import {type X} — OK. type aliases — OK. interfaces — OK. const enums — OK. Docelowo: kod który może być strip-typed przez Node.js/Deno/Bun. Nie wymaga pełnej kompilacji tsc. Node.js type stripping support: require('ts') w Node 22.6+. --input-type=module-typescript. TS 5.8 + Node.js 22 = TypeScript bez buildu. tsconfig changes: strictPropertyInitialization refinements. Broader useUnknownInCatchVariables. Checks for nullish coalescing in assignments. Import assertions deprecated: use type: 'json' instead. import.meta.dirname available. Strict mode improvements: better inference for strictFunctionTypes.",
  },
  {
    question: "TypeScript — satisfies operator, NoInfer i const type params?",
    answer: "satisfies operator (TS 4.9+): walidacja bez zmiany typu. const config = {port: 3000, host: 'localhost', debug: false} satisfies Config. Typ pozostaje literalny (3000, nie number). Błąd jeśli nie spełnia Config. Use case: palette: const colors = {red: [255,0,0], blue: '#0000FF'} satisfies Record. colors.red — jest tuple, nie string[]. NoInfer (TS 5.4+): blokuje inferowanie parametru. function createItem(value: T, default: NoInfer): T. default musi być typem z value, nie może inferować nowego T. Use case: signal defaults. Zapobiega niechcianemu inferowaniu. const type parameters (TS 5.0+): function identity(value: T): T — inferuje string literal. const name = identity('Adam'). // type: 'Adam' nie string. Zamiast as const w callsite. Przydatne dla path-based routing, config objects. Variadic tuple types (TS 4.0+): type Concat = [...T, ...U]. type Tail = T extends [any, ...infer Rest] ? Rest : never. Template literal types: type EventName = On${Capitalize}. type GetterName = Get${Capitalize}. Mapped types conditional: type DeepReadonly = {readonly [K in keyof T]: T[K] extends object ? DeepReadonly : T[K]}. Infer in template literals: type ExtractRoute = Route extends /${string}/${infer ID} ? ID : never. Using declarations (TS 5.2+): using resource = getResource(). Symbol.dispose wywoływane automatycznie. await using dla async dispose.",
  },
  {
    question: "TypeScript — dekoratory Stage 3 i declaration emit?",
    answer: "Dekoratory Stage 3 (TS 5.0+): standard TC39. experimentalDecorators: false (domyślnie używa Stage 3). Dekoratory klasy: function logged(target: Function, ctx: ClassDecoratorContext) { return class extends target { constructor(...args: any[]) { super(...args). console.log('Instance created') } } }. @logged class MyClass {}. Accessor dekoratory: function memoize(target: any, ctx: ClassAccessorDecoratorContext) { ... }. Dekorator metody: function trace(fn: Function, ctx: ClassMethodDecoratorContext) { return function(...args: any[]) { console.log('Calling', ctx.name). return fn.apply(this, args) } }. @trace greet() { return 'Hello' }. Field decorators: function readonly(target: undefined, ctx: ClassFieldDecoratorContext) { ctx.addInitializer(function() { Object.defineProperty(this, ctx.name, {writable: false}) }) }. Metadata: import 'reflect-metadata'. ctx.metadata[Symbol.for('key')] = value. Isolated Declarations (TS 5.5+): compilerOptions.isolatedDeclarations: true. Wymusza explicit typowanie exports. Szybsze parallel d.ts generation. Każdy plik może emitować niezależnie. Używane przez Nx, rspack, Rolldown. declaration emit: tsc --declaration. .d.ts generowanie. emitDeclarationOnly — tylko typy. stripInternal — wyklucz @internal. typesVersions: package.json różne d.ts per TypeScript version. Conditional types + infer + extends.",
  },
  {
    question: "TypeScript — konfiguracja 2025: tsconfig, paths i module resolution?",
    answer: "Nowoczesny tsconfig.json (2025): {compilerOptions: {target: 'ES2024', module: 'Preserve', moduleResolution: 'Bundler', lib: ['ES2024', 'DOM', 'DOM.Iterable'], strict: true, noUncheckedIndexedAccess: true, exactOptionalPropertyTypes: true, noImplicitOverride: true, verbatimModuleSyntax: true, isolatedDeclarations: false, declaration: true, declarationMap: true, sourceMap: true, outDir: 'dist', rootDir: 'src', paths: {'@/*': ['./src/*']}, types: ['node'], skipLibCheck: true}}. module Preserve: zachowuje oryginalny import format. Dla bundlerów (Vite, esbuild, Rolldown). moduleResolution Bundler: node_modules. No .js extension requirement. exports field w package.json. verbatimModuleSyntax: wymusza import type. Eliminuje type-only imports w output. Eliminuje problemy z tree-shaking. noUncheckedIndexedAccess: arr[0] = string | undefined. Bezpieczniejsze tablice. exactOptionalPropertyTypes: {a?: string} — string, nie string | undefined. Lepiej niż undefined w wartości. paths: aliasy importów. @/ prefix. Skonfiguruj też w bundlerze (Vite alias). Project references: tsconfig.references. Monorepo. Incremental builds. tsbuildinfo. typescript-eslint 8: typed linting. parserOptions.projectService. noFloatingPromises. no-misused-promises. TypeScript performance: skipLibCheck: true. incremental: true. tsbuildinfo caching. Exclude node_modules. Include tylko src.",
  },
];

const tsFeatures = [
  { funkcja: "--rewriteRelativeImportExtensions", wersja: "TS 5.7", opis: "Automatyczne przepisywanie .ts na .js w ESM output" },
  { funkcja: "--erasableSyntaxOnly", wersja: "TS 5.8", opis: "Blokuje składnię wymagającą kompilacji — dla Node.js type stripping" },
  { funkcja: "satisfies operator", wersja: "TS 4.9+", opis: "Walidacja bez utraty literalnych typów — config objects" },
  { funkcja: "NoInfer utility", wersja: "TS 5.4+", opis: "Blokuje inferowanie parametru type — bezpieczne defaults" },
  { funkcja: "const type parameters", wersja: "TS 5.0+", opis: "function identity(v: T) — inferuje literal type bez as const" },
  { funkcja: "Dekoratory Stage 3", wersja: "TS 5.0+", opis: "TC39 standard — ClassDecoratorContext, method, field, accessor" },
];

export default function BlogTs578CoTo() {
  return (
    <Layout>
      <SEOHead
        title="TypeScript 5.7, 5.8 — rewriteRelativeImportExtensions, satisfies, NoInfer 2024 | Fotz.pl"
        description="TypeScript 5.7: --rewriteRelativeImportExtensions, Node ESM. TS 5.8: granular branch checks, --erasableSyntaxOnly. satisfies, NoInfer, const type params, Stage 3 decorators."
        canonicalUrl="https://fotz.pl/blog/typescript-5-7-5-8-satisfies-noinfer-const-type-params-dekoratory-2024"
      />
      <ArticleSchema
        title="TypeScript 5.7, 5.8 — rewriteRelativeImportExtensions, satisfies, NoInfer 2024?"
        description="TS 5.7: rewriteRelativeImportExtensions, node22 module. TS 5.8: erasableSyntaxOnly, branch checks. satisfies operator, NoInfer, const type params, Stage 3 decorators, tsconfig 2025."
        url="https://fotz.pl/blog/typescript-5-7-5-8-satisfies-noinfer-const-type-params-dekoratory-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TypeScript 5.7/5.8 2024", url: "https://fotz.pl/blog/typescript-5-7-5-8-satisfies-noinfer-const-type-params-dekoratory-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "TypeScript 5.7/5.8 2024", href: "/blog/typescript-5-7-5-8-satisfies-noinfer-const-type-params-dekoratory-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript 5.7 / 5.8 / satisfies / NoInfer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TypeScript 5.7 i 5.8
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              rewriteRelativeImportExtensions, erasableSyntaxOnly, satisfies,
              NoInfer i Stage 3 decorators.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "ESM import fix", value: "TS 5.7" },
                { label: "Node stripping", value: "erasableOnly" },
                { label: "Literal types", value: "satisfies" },
                { label: "Inference block", value: "NoInfer" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TypeScript 5.7/5.8 — kluczowe funkcje</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              rewriteRelativeImportExtensions, erasableSyntaxOnly, satisfies, NoInfer i Stage 3 dekoratory —
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
                {tsFeatures.map((f, i) => (
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
