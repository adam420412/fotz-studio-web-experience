import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Generics w TypeScript — co to jest i jak używać?",
    answer: "Generics: parametryzowane typy — jak szablony (templates) w C++ lub Java. Pozwalają pisać kod wielokrotnego użytku z zachowaniem type safety. Podstawowy generic: function identity(arg: T): T {return arg}. identity('hello') — TypeScript infers T = string. identity(42) — T = number. Generic z constraints: function getLength(arg: T): number. T extends {length: number} — T musi mieć property length. String, Array, itd. spełniają. Generic interface: interface Repository {findById(id: string): Promise. findAll(): Promise. create(entity: T): Promise}. Generic class: class Stack {private items: T[] = []. push(item: T): void. pop(): T | undefined}. Multiple generics: function merge(a: T, b: U): T & U. Conditional types z generics: type NonNullable = T extends null | undefined ? never : T. Mapped types: type Partial = {[P in keyof T]?: T[P]}. Required, Readonly, Pick, Omit. Utility types wbudowane: Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, ReturnType, Parameters, InstanceType, Awaited. infer keyword: type ReturnType = T extends (...args: any) => infer R ? R : never. Variadic tuple types: type Concat = [...A, ...B]. Template literal types: type EventName = 'on${Capitalize}'. Distributive conditional types: T extends U — działa per union member.",
  },
  {
    question: "Conditional types, mapped types i advanced utility types?",
    answer: "Conditional types: T extends U ? X : Y. Podstawowe: type IsString = T extends string ? true : false. Nested: type DeepReadonly = T extends object ? {readonly [K in keyof T]: DeepReadonly} : T. Distributive: type ToArray = T extends any ? T[] : never. ToArray = string[] | number[] (nie (string|number)[]). infer w conditional types: type UnwrapPromise = T extends Promise ? U : T. type FirstParam = T extends (first: infer F, ...rest: any[]) => any ? F : never. Mapped types: {[K in keyof T]: ...} — iteruj po kluczach. Optional: {[K in keyof T]?: T[K]}. Readonly: {readonly [K in keyof T]: T[K]}. Remapping z as: {[K in keyof T as K extends string ? Capitalize : K]: T[K]}. Filtered mapped: {[K in keyof T as T[K] extends string ? K : never]: T[K]}. Template literal types: type EventName = 'on${Capitalize}'. type CSSProperty = 'padding-${string}'. type i18nKeys = 'en' | 'pl'. type Translation = {[K in i18nKeys]: string}. Discriminated unions: type Shape = {kind: 'circle', radius: number} | {kind: 'rect', w: number, h: number}. Exhaustive check: default: const _: never = shape. TypeScript strict mode opcje: strictNullChecks (najważniejszy). noImplicitAny. strictFunctionTypes. strictPropertyInitialization. noImplicitReturns. exactOptionalPropertyTypes (v4.4). useUnknownInCatchVariables.",
  },
  {
    question: "Decorators w TypeScript — co to jest i kiedy używać?",
    answer: "Decorators: metadata annotations dla klas, metod, właściwości i parametrów. Stage 3 TC39 (native JS decorators — TypeScript 5.0+). Legacy decorators: experimentalDecorators: true (Reflect.metadata). Używane przez: NestJS (wszystkie dekoratory). TypeORM / MikroORM (@Entity, @Column). class-transformer (@Type, @Expose). class-validator (@IsEmail, @MinLength). Angular (cały framework). Class decorator: @sealed function sealed(constructor: Function) {Object.seal(constructor). Object.seal(constructor.prototype)}. Method decorator: @deprecated (loguje deprecation warning). Property decorator: @observable — integrates z MobX. Parameter decorator: @Inject(TOKEN) — dependency injection. NestJS przykład: @Controller('users') — route prefix. @Get(':id') — HTTP method + path. @Injectable() — DI provider. @Module({imports, providers, controllers}) — module definition. class-validator + class-transformer: @IsEmail() email: string. @MinLength(8) password: string. validate(dto) — walidacja. plainToClass(CreateUserDto, body) — transform + validate. TypeScript 5.x nowe dekoratory (TC39 Stage 3): bez Reflect.metadata. context zamiast descriptor. Kompatybilne ze standardem JS. NestJS 10+ wspiera nowe dekoratory. Kiedy unikaj dekoratorów: prostsze projekty (overhead konfiguracji). Bun + Elysia (własny system). Bez NestJS/Angular — useReducer może być prostszy.",
  },
  {
    question: "Type guards, assertion functions i narrowing?",
    answer: "Type narrowing: TypeScript zawęża typ na podstawie kontroli. typeof: if (typeof value === 'string') — TypeScript wie że value: string w bloku. instanceof: if (error instanceof CustomError) — value: CustomError. in operator: if ('email' in user) — user ma property email. Type guards (user-defined): function isString(value: unknown): value is string {return typeof value === 'string'}. isString(x) — po true, x jest typed jako string. Discriminated union narrowing: switch (shape.kind) {case 'circle': ...} — TypeScript wie jaki typ. Assertion functions: function assertIsString(value: unknown): asserts value is string {if (typeof value !== 'string') throw new Error(...)}. assertIsString(x) — po wywołaniu x jest string. never type: wyczerpujące sprawdzenie. default: const _: never = value — błąd jeśli nie wszystkie przypadki obsłużone. unknown vs any: unknown — bezpieczniejszy any. Musisz sprawdzić typ przed użyciem. any — wyłącza type checking. Unikaj any, używaj unknown. Satisfies operator (TS 4.9): const config = {...} satisfies Config. Walidacja bez zmiany inferowanego typu. as const: const colors = ['red', 'blue'] as const. Typ: readonly ['red', 'blue']. Literalne typy zamiast string[]. Template literal zamiast string enum. noUncheckedIndexedAccess: array[index] jest T | undefined (nie T). Bezpieczniejsze array access.",
  },
  {
    question: "TypeScript 5.x — co nowego i jak migrować z starszych wersji?",
    answer: "TypeScript 5.0 (2023): Decorators Stage 3 (TC39). const type parameters. All enums jako union enums. --moduleResolution bundler. speedup (15-20%). TypeScript 5.1: Unrelated types for getters/setters. Undefined-returning functions. JSX transform. TypeScript 5.2: using declarations (Stage 3 Explicit Resource Management). Symbol.dispose, Symbol.asyncDispose. Automatyczne cleanup zasobów (connection, file, etc). TypeScript 5.3: Import attributes (JSON modules). Resolution customization flags. TypeScript 5.4: NoInfer utility type. Preserved narrowing in closures. TypeScript 5.5: Inferred type predicates (automatyczne type guards!). Regular Expression type checking. TypeScript 5.6: Iterator methods (filter, map, take na lazy sequences). Disallowed nullish and truthy checks. TypeScript 5.7: Path rewriting (node16 moduleResolution). Checks for never-initialized variables. Migracja: strict mode włącz stopniowo. tsconfig.json: 'strict': true. Napraw błędy jeden po drugim. ts-migrate — automatyczna migracja. allowJs: true + checkJs: false dla mixed projektu. skipLibCheck: true — pomiń sprawdzanie d.ts. Narzędzia TypeScript: ts-morph (TypeScript Compiler API). tsc --noEmit (tylko type check). ts-prune (nieużywane exports). knip (dead code). type-coverage (procent pokrycia typami).",
  },
];

const typescriptFeatures = [
  { funkcja: "Generics", kategoria: "Parametryzacja typów", przyklad: "function identity(arg: T): T", zastosowanie: "Reusable, type-safe collections i utilities" },
  { funkcja: "Conditional Types", kategoria: "Logika typów", przyklad: "T extends U ? X : Y", zastosowanie: "Utility types, type transformations" },
  { funkcja: "Mapped Types", kategoria: "Transformacja typów", przyklad: "{[K in keyof T]: T[K]}", zastosowanie: "Partial, Required, Readonly, custom transforms" },
  { funkcja: "Template Literal Types", kategoria: "String types", przyklad: "type EventName = 'on${Capitalize}'", zastosowanie: "API routes, event names, CSS properties" },
  { funkcja: "Decorators (Stage 3)", kategoria: "Metadata / AOP", przyklad: "@Controller('users')", zastosowanie: "NestJS, Angular, TypeORM, class-validator" },
  { funkcja: "Type Guards + infer", kategoria: "Narrowing / Inference", przyklad: "value is string, infer R", zastosowanie: "Runtime safety, conditional type inference" },
];

export default function BlogTypescriptAdvancedCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TypeScript zaawansowany | Fotz Studio"
        description="TypeScript advanced: generics z constraints, conditional types, mapped types, template literal types, decorators Stage 3, type guards i TypeScript 5.x nowości."
        canonicalUrl="https://fotz.pl/blog/typescript-zaawansowany-generics-conditional-types-decorators-typescript-5"

        keywords="TypeScript zaawansowany co to jest, TypeScript zaawansowany jak działa, TypeScript zaawansowany tutorial, TypeScript zaawansowany przykład, czym jest TypeScript zaawansowany, TypeScript zaawansowany dokumentacja, TypeScript zaawansowany przewodnik"

        canonical="https://fotz.pl/blog/typescript-zaawansowany-generics-conditional-types-decorators-typescript-5"
      />
      <ArticleSchema
        title="TypeScript zaawansowany — generics, conditional types, decorators, TypeScript 5.x?"
        description="6 zaawansowanych funkcji TypeScript (generics/conditional/mapped/template/decorators/guards) — infer, satisfies, using, NoInfer, TypeScript 5.5 inferred predicates."
        url="https://fotz.pl/blog/typescript-zaawansowany-generics-conditional-types-decorators-typescript-5"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TypeScript zaawansowany", url: "https://fotz.pl/blog/typescript-zaawansowany-generics-conditional-types-decorators-typescript-5" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "TypeScript zaawansowany", href: "/blog/typescript-zaawansowany-generics-conditional-types-decorators-typescript-5" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / Advanced
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TypeScript zaawansowany
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Generics, conditional types, mapped types, template literal types,
              Stage 3 decorators i nowości TypeScript 5.x.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Reusable types", value: "Generics" },
                { label: "Logika typów", value: "Conditional" },
                { label: "Metadane klas", value: "Decorators" },
                { label: "Zawężanie typów", value: "Type Guards" },
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

      {/* Funkcje */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 zaawansowanych funkcji TypeScript</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Generics, conditional types, mapped types, template literals, decorators
              i type guards — każda funkcja otwiera nowe możliwości type-safe kodu.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {typescriptFeatures.map((f) => (
              <FadeInView key={f.funkcja}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{f.funkcja}</h3>
                  <p className="text-xs text-blue-700 font-medium mb-2">{f.kategoria}</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-2 text-gray-800">{f.przyklad}</code>
                  <p className="text-gray-600 text-sm">{f.zastosowanie}</p>
                </div>
              </FadeInView>
            ))}
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

      <RelatedArticles currentArticleId="typescript-zaawansowany-generics-conditional-types-decorators-typescript-5" />
      <ContactSection />
    </Layout>
  );
}
