import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Effect.ts i dlaczego warto go znać?",
    answer: "Effect.ts (Giulio Canti + Tim Smart, 2024): biblioteka do budowania efektów ubocznych w TypeScript. Typ Effect reprezentuje: sukces (A), błąd (E), wymagania (R). Effect(R, E, A) — jak ZIO w Scala. Nie Promise — Effect jest lazy (nie wykonuje się natychmiast). Dlaczego Effect: type-safe błędy (nie any). Dependency injection wbudowany. Retry, timeout, circuit breaker. Concurrency utilities. Tracing i observability. Streaming. Instalacja: npm install effect. Podstawy: import {Effect, pipe} from 'effect'. const greet = (name: string): Effect.Effect(string, never, never) => Effect.succeed('Hello, ' + name). Failure: Effect.fail(new Error('not found')). Wykonanie: Effect.runPromise(greet('Adam')).then(console.log). Effect.runSync(syncEffect). Transformacja: Effect.map(effect, fn). Effect.flatMap(effect, fn). pipe(Effect.succeed(42), Effect.map(n => n * 2), Effect.flatMap(n => ...))). Error handling: Effect.catchAll(effect, (error) => Effect.succeed(defaultValue)). Effect.retry(effect, Schedule.recurs(3)). Effect.timeout(effect, '5 seconds'). Typed błędy: type NotFound = {_tag: 'NotFound', id: string}. Effect.fail({_tag: 'NotFound', id: '1'} as NotFound). catchTag: Effect.catchTag('NotFound', err => ...). Match: Effect.match(effect, {onFailure: err => ..., onSuccess: val => ...}).",
  },
  {
    question: "Effect.ts — dependency injection i Services?",
    answer: "Context i Services: wbudowany DI system. Services jako Context. Nie globalne singletons — przekazywane przez R (Requirements). Service definition: import {Context, Layer} from 'effect'. class UserService extends Context.Tag('UserService'){ static readonly _tag = 'UserService'. declare get: {findById: (id: string) => Effect.Effect(User, NotFound)}. }. Layer (implementacja): const UserServiceLive = Layer.effect(UserService, Effect.gen(function*() { const db = yield* DatabaseService. return {findById: (id) => db.query('SELECT...', id)} })). Kompozycja layers: const AppLayer = Layer.provide(UserServiceLive, DatabaseServiceLive). Użycie w Effect: const program = Effect.gen(function*() { const users = yield* UserService. const user = yield* users.findById('1'). return user }). Effect.provide(program, AppLayer). Testowanie: const TestUserService = Layer.succeed(UserService, {findById: (id) => Effect.succeed(mockUser)}). Effect.provide(program, TestUserService). Brak mock frameworks — wystarczy Layer swap. Generator syntax: Effect.gen(function*() { const a = yield* effectA. const b = yield* effectB. return a + b }). Jak async/await ale dla Effect. Bardziej czytelne niż pipe chains. Schema (type-safe parsing): import {Schema} from 'effect'. const User = Schema.Struct({id: Schema.String, name: Schema.String}). Schema.decodeUnknown(User)(rawData) — type-safe parse. Zod-like ale Effect-native. Lepsza integracja z Error channel.",
  },
  {
    question: "fp-ts — functional programming dla TypeScript?",
    answer: "fp-ts (Giulio Canti): functional programming types i utilities. Poprzednik Effect.ts (był autorem obu). Option, Either, Task, TaskEither. Option(A): Some(A) | None. Brak wartości bez null/undefined. import {Option, some, none, isSome} from 'fp-ts/Option'. const result: Option(string) = some('hello'). pipe(result, Option.map(s => s.length)). fold(result, () => 0, len => len). Either(E, A): Left(E) | Right(A). Sukces lub błąd. Right = success (mnemonic: right = correct). import {Either, left, right} from 'fp-ts/Either'. const divide = (a: number, b: number): Either(string, number) => b === 0 ? left('division by zero') : right(a / b). pipe(divide(10, 2), Either.map(n => n * 2)). Task(A): lazy async computation. () => Promise(A). Brak błędów (Promise nie rzuca). TaskEither(E, A): asynchroniczne Either. Najczęściej używane. import {TaskEither, tryCatchK} from 'fp-ts/TaskEither'. const fetchUser = tryCatchK(fetchFromAPI, toError). pipe: import {pipe} from 'fp-ts/function'. pipe(value, fn1, fn2, fn3) — od lewej do prawej. Alternatywa: flow — zwraca funkcję. Reader: dependency injection. State: stateful computations. Functor, Monad, Applicative: abstrakcje. map, chain, ap. Kiedy fp-ts: istniejące projekty. Mniejsza biblioteka. Kiedy Effect: nowe projekty. Więcej utilities. Ecosystem (Effect Platform, Effect CLI). fp-ts v3: w toku — może być Effect.ts."
  },
  {
    question: "neverthrow i ts-results — Result types bez ciężkiej biblioteki?",
    answer: "neverthrow: lekka alternatywa do bezpiecznego error handling. Ok(T) i Err(E) — jak Rust Result. Instalacja: npm install neverthrow. import {ok, err, Result} from 'neverthrow'. function divide(a: number, b: number): Result(number, string) { if (b === 0) return err('division by zero'). return ok(a / b) }. const result = divide(10, 0). result.match({ok: val => console.log(val), err: e => console.error(e)}). Chainowanie: result.map(n => n * 2). result.andThen(n => divide(n, 3)). result.mapErr(e => new Error(e)). Async: ResultAsync. const asyncResult = ResultAsync.fromPromise(fetchUser(id), e => new FetchError(e)). await asyncResult. Combine: Result.combine([result1, result2]) — wszystkie muszą być Ok. Result.combineWithAllErrors([...]) — zbierz wszystkie błędy. ts-results: podobna biblioteka. import {Ok, Err, Result} from 'ts-results'. Option(T): Some(T) | None. Bardziej Rust-like API. Porównanie do throws: Bez Result: funkcja throws — niewidoczne w typach. Caller musi pamiętać o try/catch. Z Result: caller musi obsłużyć błąd. Type system wymaga. Porównanie neverthrow vs Effect: neverthrow — lekka (5KB). Effect — kompletna platforma. neverthrow — dla error handling. Effect — dla całego app. Kiedy nie używać Result: prostych scripts. handlery gdzie throw OK. Trzecia biblioteka (nie zawsze warto). Konsekwencja: cały team musi używać. Return type pollution. Lepiej w nowych projektach.",
  },
  {
    question: "Praktyczne functional programming wzorce w TypeScript bez bibliotek?",
    answer: "Pure functions: brak side effects. Sama wartość decyduje o wyniku. Łatwe testowanie. Memoizable. Immutability: Object.freeze() dla readonly. Spread: {...obj, key: newVal}. Array: [...arr, newItem]. as const dla stałych. ReadonlyArray, Readonly utility types. TypeScript: Readonly(T), ReadonlyArray(T). Composition: const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x). const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x). Currying: const add = (a: number) => (b: number) => a + b. add(5)(3) === 8. Partial application. Point-free style. Discriminated Unions zamiast null: type Result = {success: true, data: User} | {success: false, error: string}. Wyczerpujące switch — TypeScript sprawdza. Brak undefined. Pattern matching (switch + satisfies): switch (result._tag) { case 'Ok': ...; case 'Err': ...; default: result satisfies never }. TypeScript check exhaustiveness. Option pattern bez biblioteki: type Option(T) = {_tag: 'Some', value: T} | {_tag: 'None'}. const some = (value) => ({_tag: 'Some', value}). const none = {_tag: 'None'}. Either bez biblioteki: type Either(E, A) = {_tag: 'Left', left: E} | {_tag: 'Right', right: A}. Monadic bind: flatMap zamiast map. Brak nested ifs. Railway oriented programming: chain operacji. Każda może zakonczyć się błędem. Happy path lub error path. Kiedy używać FP w TS: business logic. Transformation pipelines. Data processing. Nie dla: simple CRUD. Framework code. UI event handlers (side effects konieczne).",
  },
];

const fpLibraries = [
  { biblioteka: "Effect.ts", podejscie: "Pełna platforma (Effect Monad)", dojrzalosc: "1.0 (2024)", kiedy: "Nowe projekty, full-stack TypeScript, DI" },
  { biblioteka: "fp-ts", podejscie: "Haskell-inspired (Option, Either, Task)", dojrzalosc: "Stabilna (2.x)", kiedy: "Istniejące projekty, algebraic types" },
  { biblioteka: "neverthrow", podejscie: "Result Type (Ok/Err)", dojrzalosc: "Stabilna", kiedy: "Error handling, lekka alternatywa" },
  { biblioteka: "ts-results", podejscie: "Rust-like Result/Option", dojrzalosc: "Stabilna", kiedy: "Rust programiści, prostszy API" },
  { biblioteka: "remeda", podejscie: "Functional utilities (lodash-like)", dojrzalosc: "Stabilna (1.x)", kiedy: "Data transformation, type-safe lodash" },
  { biblioteka: "Vanilla TS patterns", podejscie: "Discriminated Unions, pipe", dojrzalosc: "Zawsze aktualne", kiedy: "Brak zewnętrznych zależności, edukacja" },
];

export default function BlogEffectTsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Effect.ts, fp-ts i neverthrow — functional programming w TypeScript 2024 | Fotz.pl"
        description="Effect.ts (Effect Monad, Services, Layers, DI), fp-ts (Option, Either, TaskEither), neverthrow (Result type), ts-results i functional programming wzorce TypeScript."
        canonicalUrl="https://fotz.pl/blog/effect-ts-fp-ts-neverthrow-functional-programming-typescript-2024"
      />
      <ArticleSchema
        title="Effect.ts, fp-ts i neverthrow — functional programming w TypeScript 2024?"
        description="6 bibliotek FP (Effect.ts/fp-ts/neverthrow/ts-results/remeda/vanilla patterns) — type-safe error handling, monads, dependency injection i functional TypeScript."
        url="https://fotz.pl/blog/effect-ts-fp-ts-neverthrow-functional-programming-typescript-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Functional Programming TypeScript", url: "https://fotz.pl/blog/effect-ts-fp-ts-neverthrow-functional-programming-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Functional Programming TypeScript", href: "/blog/effect-ts-fp-ts-neverthrow-functional-programming-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / Functional Programming
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Functional Programming w TypeScript
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Effect.ts (Effect Monad, DI, Services), fp-ts (Option, Either),
              neverthrow (Result type) i FP wzorce TypeScript.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Effect platform", value: "Effect.ts" },
                { label: "FP types", value: "fp-ts" },
                { label: "Result type", value: "neverthrow" },
                { label: "Pure TS FP", value: "Patterns" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek FP dla TypeScript — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Effect.ts, fp-ts, neverthrow, ts-results, remeda i vanilla patterns —
              podejście, dojrzałość i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Dojrzałość</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {fpLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.dojrzalosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{l.kiedy}</td>
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
