import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "TypeScript Utility Types — Partial, Required, Readonly, Pick, Omit?",
    answer: "Wbudowane utility types TypeScript. Partial T: wszystkie pola opcjonalne. Partial User — id?: string, name?: string. Update pattern: function updateUser(id: string, updates: Partial User). Required T: wszystkie pola wymagane. Odwraca Partial. Readonly T: wszystkie pola readonly. Readonly Array — brak push/pop. DeepReadonly — własna implementacja. Record K, V: obiekt z kluczami K i wartościami V. Record string, number — mapa. Record 'error' | 'success', string — status messages. Pick T, K: wybierz pola z T. Pick User, 'id' | 'name' — tylko id i name. DTO pattern. Omit T, K: wyklucz pola z T. Omit User, 'password' — bez hasła. API response. Kombinacje: Omit z Partial: Partial Omit User, 'id'. Edycja bez id. Required z Pick: Required Pick Config, 'apiKey'. Tylko apiKey wymagane. Extract T, U: wyodrębnij typy. Extract 'a' | 'b' | 'c', 'a' | 'b' = 'a' | 'b'. Exclude T, U: wyklucz typy. Exclude 'a' | 'b' | 'c', 'a' = 'b' | 'c'. NonNullable T: usuń null i undefined. NonNullable string | null | undefined = string. Readonly arrays: const arr: ReadonlyArray number = [1, 2, 3]. Lub: const arr = [1, 2, 3] as const. arr[0] = 5 — błąd. Tuple readonly: readonly [string, number].",
  },
  {
    question: "ReturnType, Parameters, InstanceType — function utility types?",
    answer: "ReturnType T: typ zwracany przez funkcję. function createUser() { return {id: '1', name: 'Jan'} }. type User = ReturnType typeof createUser. User = {id: string, name: string}. Async: ReturnType — Promise User. Awaited dla async: Awaited ReturnType typeof asyncFn. Parameters T: tuple typów parametrów. function greet(name: string, age: number) {...}. type GreetParams = Parameters typeof greet. GreetParams = [name: string, age: number]. GreetParams[0] = string. Przydatne dla wrapperów. ConstructorParameters T: parametry konstruktora. type DateParams = ConstructorParameters typeof Date. InstanceType T: typ instancji klasy. class MyClass { value = 42 }. type MyInstance = InstanceType typeof MyClass. MyInstance = MyClass. Praktyczne: const factory = (Cls: new (...args: any) => T) => new Cls(). Awaited T: odwija Promise. Awaited Promise string = string. Awaited Promise Promise number = number. Rekurencyjny. Infer w conditional: type UnwrapPromise T = T extends Promise infer U ? U : T. type UnwrapArray T = T extends Array infer U ? U : T. UnwrapArray string[] = string. Template literal types: type EventName T extends string = 'on' + Capitalize T. EventName 'click' = 'onClick'. EventName 'change' = 'onChange'. Mapped types z infer: type Resolved T = { [K in keyof T]: T[K] extends (...args: any) => infer R ? R : T[K] }. Wywołaj wszystkie funkcje w typie.",
  },
  {
    question: "Conditional Types i Mapped Types — zaawansowane wzorce?",
    answer: "Conditional Types: T extends U ? X : Y. Ternary dla typów. type IsString T = T extends string ? true : false. IsString string = true. IsString number = false. Distributive: type DistString T = T extends string ? 'is-string' : 'not-string'. DistString string | number = 'is-string' | 'not-string'. Wyłącz: [T] extends [string]. Non-distributive. Infer: type FlattenArray T = T extends Array infer U ? U : T. type FirstArg T = T extends (first: infer F, ...rest: any) => any ? F : never. Mapped Types: { [K in keyof T]: ... }. Readonly: { readonly [K in keyof T]: T[K] }. Optional: { [K in keyof T]?: T[K] }. Mutable: { -readonly [K in keyof T]: T[K] }. Required: { [K in keyof T]-?: T[K] }. Remapping z as: { [K in keyof T as 'get' + Capitalize string & K]: () => T[K] }. Getters pattern. Filter fields: { [K in keyof T as T[K] extends string ? K : never]: T[K] }. Tylko string pola. Deep variants: type DeepPartial T = { [K in keyof T]?: T[K] extends object ? DeepPartial T[K] : T[K] }. type DeepReadonly T = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly T[K] : T[K] }. Recursive mapping. Intersections: type Merge A, B = Omit A, keyof B & B. Merge dwóch typów. B nadpisuje A. Tuples: type Length T extends any[] = T['length']. Length [1, 2, 3] = 3. Head T extends any[] = T extends [infer F, ...any] ? F : never. Tail T extends any[] = T extends [any, ...infer R] ? R : never.",
  },
  {
    question: "Template Literal Types i String manipulation types?",
    answer: "Template Literal Types: podobne do template literals ale dla typów. type Greeting = 'Hello ${string}'. 'Hello World' extends Greeting = true. Kombinacje: type Direction = 'top' | 'right' | 'bottom' | 'left'. type Margin = 'margin-${Direction}'. 'margin-top', 'margin-right', etc. Events pattern: type EventHandler T extends string = 'on' + Capitalize T. EventHandler 'click' = 'onClick'. EventHandler 'mouseenter' = 'onMouseenter'. CSS properties: type CSSProperty = 'background-color' | 'font-size' | etc. type CSSPropertyCamel = CSSProperty extends '${infer A}-${infer B}' ? '${A}${Capitalize B}' : CSSProperty. String manipulation: Uppercase T. Lowercase T. Capitalize T. Uncapitalize T. Uppercase 'hello' = 'HELLO'. Capitalize 'hello' = 'Hello'. Practical: type SortOrder = 'asc' | 'desc'. type SortBy T extends string = '${T}:${SortOrder}'. SortBy 'name' = 'name:asc' | 'name:desc'. API keys: type Env = { 'NEXT_PUBLIC_${string}': string }. Type-safe env. Route params: type RouteParams Route extends string = Route extends '${string}:${infer Param}/${infer Rest}' ? Param | RouteParams Rest : Route extends '${string}:${infer Param}' ? Param : never. Wyodrębnij parametry z URL. Object path: type Path T, Prefix = = Prefix extends '' ? { [K in keyof T]: T[K] extends object ? Path T[K], '${'${Prefix}'}${string & K}.' | '${string & K}' : '${Prefix}${string & K}' }[keyof T] : { [K in keyof T]: T[K] extends object ? Path T[K], '${Prefix}${string & K}.' | '${Prefix}${string & K}' : '${Prefix}${string & K}' }[keyof T]. Nested object paths.",
  },
  {
    question: "Branded Types i Opaque Types — type safety bez overhead?",
    answer: "Branded Types (Nominal typing): TypeScript structural. Brak nominal. String to string. Branded types = fake nominal. type UserId = string & {__brand: 'UserId'}. type ProductId = string & {__brand: 'ProductId'}. Brak zamieszania UserId i ProductId. function createUserId(id: string): UserId { return id as UserId }. function getUser(id: UserId): User. getUser('123' as UserId) — ok. getUser('123') — błąd! getUser(productId) — błąd! Zod branded: import {z} from 'zod'. const UserIdSchema = z.string().uuid().brand 'UserId'. type UserId = z.infer typeof UserIdSchema. Walidacja + brand. Opaque via symbol: declare const _brand: unique symbol. type Brand T, B = T & {[_brand]: B}. type Email = Brand string, 'Email'. Bardziej bezpieczny. Units: type Meters = number & {__unit: 'meters'}. type Seconds = number & {__unit: 'seconds'}. Brak dodawania metrów do sekund. Refinement types: type PositiveNumber = number & {__positive: true}. function isPositive(n: number): n is PositiveNumber { return n > 0 }. Type guard + brand. Practical: User ID, Order ID. Różne ID nie pomylą się. Validated email string. Safe URL string. Currency amount. Zod + branded: schema.brand('').parse() — validated + branded. Parse don't validate pattern. Total functional: type NonEmptyArray T = [T, ...T[]]. Gwarancja niepustej tablicy. head(arr: NonEmptyArray T): T — zawsze istnieje. Builder pattern: type Builder T, Required extends keyof T = never. Tracked zbudowane pola.",
  },
];

const utilityTypes = [
  { typ: "Partial T / Required T", uzycie: "Opcjonalne / wymagane pola", przyklad: "Partial User — update bez wszystkich pól" },
  { typ: "Pick T,K / Omit T,K", uzycie: "Wybierz / wyklucz pola", przyklad: "Omit User,'password' — bezpieczne API response" },
  { typ: "ReturnType / Parameters", uzycie: "Typy z funkcji", przyklad: "ReturnType typeof createUser — inferred type" },
  { typ: "Conditional types", uzycie: "T extends U ? X : Y", przyklad: "IsArray T = T extends any[] ? true : false" },
  { typ: "Mapped types", uzycie: "{ [K in keyof T]: ... }", przyklad: "DeepReadonly T — rekurencyjne readonly" },
  { typ: "Branded types", uzycie: "Nominal typing w TypeScript", przyklad: "UserId vs ProductId — brak zamieszania" },
];

export default function BlogTsUtilityTypesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TypeScript Utility Types | Fotz Studio"
        description="TypeScript Utility Types: Partial/Required/Pick/Omit, ReturnType/Parameters, Conditional Types (infer), Mapped Types (remapping), Template Literal Types i…"
        canonicalUrl="https://fotz.pl/blog/typescript-utility-types-partial-returntype-conditional-mapped-branded-2024"

        keywords="TypeScript Utility Types co to jest, TypeScript Utility Types definicja, czym jest TypeScript Utility Types, TypeScript Utility Types w marketingu, TypeScript Utility Types przykłady, jak działa TypeScript Utility Types, TypeScript Utility Types strategia"

        canonical="https://fotz.pl/blog/typescript-utility-types-partial-returntype-conditional-mapped-branded-2024"
      />
      <ArticleSchema
        title="TypeScript Utility Types — Partial, ReturnType, Conditional, Mapped i Branded 2024?"
        description="6 kategorii TypeScript Utility Types (Partial/Pick/ReturnType/Conditional/Mapped/Branded) — infer, template literal types, deep variants i branded types dla bezpiecznych ID."
        url="https://fotz.pl/blog/typescript-utility-types-partial-returntype-conditional-mapped-branded-2024"
        datePublished="2024-11-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TypeScript Utility Types", url: "https://fotz.pl/blog/typescript-utility-types-partial-returntype-conditional-mapped-branded-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "TypeScript Utility Types", href: "/blog/typescript-utility-types-partial-returntype-conditional-mapped-branded-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / Advanced Types / Patterns
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TypeScript Utility Types
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Partial/Pick/Omit, ReturnType/Parameters, Conditional Types (infer),
              Mapped Types, Template Literal i Branded Types.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Modyfikatory", value: "Partial/Pick" },
                { label: "Funkcje", value: "ReturnType" },
                { label: "Warunkowe", value: "Conditional" },
                { label: "Nominalne", value: "Branded" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kategorii TypeScript Utility Types</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Partial/Pick, ReturnType, Conditional, Mapped, Template Literal i Branded —
              użycie i praktyczny przykład.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Użycie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Przykład</th>
                </tr>
              </thead>
              <tbody>
                {utilityTypes.map((t, i) => (
                  <tr key={t.typ} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.uzycie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.przyklad}</td>
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
