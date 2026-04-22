import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Nowe funkcje JavaScript ES2024 — co wchodzi do standardu?",
    answer: "ES2024 (ECMAScript 2024) finalized: Object.groupBy() i Map.groupBy() — grupowanie. Array.prototype.toSorted(), toReversed(), toSpliced(), with() — immutable metody tablicy. Promise.withResolvers() — expose resolve/reject. ArrayBuffer.prototype.resize() i .transfer(). String.prototype.isWellFormed() i toWellFormed() — emoji poprawność. RegExp v flag — set operations. Object.groupBy: const grouped = Object.groupBy(users, user => user.department). Zamiast reduce. Nie mutuje. Czysty kod. Array immutable metody: const sorted = arr.toSorted() — brak mutacji (w odróżnieniu od sort()). const reversed = arr.toReversed(). arr.with(2, 'newValue') — zmień indeks niemutacyjnie. Stary sposób: [...arr].sort(). Nowy: arr.toSorted(). Promise.withResolvers: const {promise, resolve, reject} = Promise.withResolvers(). Zamiast new Promise((res, rej) => ...). Dobry dla manual control. Temporal API (Stage 3 TC39): nowe date/time API. Zastępuje Date. Temporal.PlainDate, PlainTime, ZonedDateTime. Bez problemów ze strefami czasowymi. Immutable. Parsowanie ISO 8601. Temporal.Now.zonedDateTimeISO(). Nie w ES2024 — nadal Stage 3. Polyfill: @js-temporal/polyfill. Używaj date-fns/luxon do produkcji.",
  },
  {
    question: "TC39 Stage 3 proposals — Pattern Matching, Decorators i Record/Tuple?",
    answer: "TC39 Stages: 0-4. Stage 4 = w standardzie. Stage 3 = implementacja (kandydat). Stage 2 = szkic. Stage 1 = propozycja. Decorators (Stage 3): standaryzowane dekoratory. @sealed @enumerable class MyClass { @readonly name = 'test' }. Nie TypeScript decorators (legacy). Nowe: function sealed(cls, ctx) { Object.seal(cls.prototype) }. ctx.metadata, ctx.name, ctx.kind. class-methods: @logged method. @memoize method. TypeScript 5.0+: --experimentalDecorators lub nowe. Babel plugin: @babel/plugin-proposal-decorators (nowe). Pattern Matching (Stage 2): match expression. Jak switch ale potężniejszy. match (action) { when ({type: 'increment'}) => ({...state, count: state.count + 1}). when ({type: 'decrement'}) => ({...state, count: state.count - 1}). else => state }. Destructuring w warunkach. Guards: when (x) if (x > 0). Exhaustive matching. Records i Tuples (Stage 2): immutable value types. const record = #{name: 'Adam', age: 30}. const tuple = #[1, 2, 3]. Structural equality: #{a: 1} === #{a: 1} — true! Normalny object: {a: 1} === {a: 1} — false. Idealne dla CRDT, React state. Brak mutacji. Cloneable. Pipeline operator (Stage 2): x |> f |> g — jak pipe(). value |> double |> addOne |> console.log. Cleaner than f(g(h(x))). Dostępny przez Babel plugin. Import Attributes (Stage 3): import data from './data.json' with {type: 'json'}. import sheet from './style.css' with {type: 'css'}. Bezpieczeństwo importów.",
  },
  {
    question: "Array.groupBy, structuredClone i inne nowoczesne JS metody?",
    answer: "Metody dostępne już w modernych przeglądarkach: structuredClone(obj): głęboka kopia. Nie JSON.parse(JSON.stringify()) — obsługuje Date, Map, Set, ArrayBuffer. structuredClone({date: new Date(), map: new Map()}). Nie kopiuje: functions, DOM nodes, WeakMap. Object.hasOwn(obj, 'key'): bezpieczne hasOwnProperty. Zastępuje obj.hasOwnProperty('key') lub Object.prototype.hasOwnProperty.call(obj, key). at() method: arr.at(-1) — ostatni element. str.at(-1) — ostatni znak. Zastępuje arr[arr.length - 1]. Array.from({length: n}, (_, i) => i): generuj tablice. findLast() i findLastIndex(): od końca. arr.findLast(x => x > 5). Bez arr.slice().reverse().find(). Error.cause: new Error('outer', {cause: err}). err.cause — oryginalny błąd. Stacktrace chain. String trimStart/trimEnd: str.trimStart(), str.trimEnd(). Szybsze niż regex. replaceAll: 'a.b.c'.replaceAll('.', '/'). Nie /\./g. Object.entries/fromEntries: round-trip. Object.fromEntries(Object.entries(obj).filter(...)). Transformacja obiektów. queueMicrotask: queueMicrotask(() => {...}). Microtask queue. Przed macrotask (setTimeout). Lepsze niż Promise.resolve().then(). AbortController i AbortSignal: cancel fetch i async. const controller = new AbortController(). fetch(url, {signal: controller.signal}). controller.abort(). Używany przez React useEffect cleanup. WeakRef i FinalizationRegistry: słabe referencje. Cache bez wycieków. Registry callback przy GC. Zaawansowane — używaj rzadko.",
  },
  {
    question: "Nullish coalescing, optional chaining i inne ES2020-2022 features?",
    answer: "ES2020 features: Nullish Coalescing (??): a ?? b — b tylko gdy a jest null/undefined. Nie false, 0, '' — to inaczej niż ||. const val = user.name ?? 'Anonymous'. Optional Chaining (?.): user?.address?.city — nie throw. arr?.[0] — bezpieczny index. fn?.() — call jeśli funkcja. Promise.allSettled([p1, p2]): nie rzuca gdy jedna odrzucona. [{status: 'fulfilled', value: ...}, {status: 'rejected', reason: ...}]. BigInt: 9007199254700000n. Wielkie liczby. Kryptografia. Blockchain. String.matchAll(): zwraca iterator. Wszystkie matchowania z grupami. ES2021 features: String.replaceAll(). Logical assignment: a ||= b (jeśli a falsy). a &&= b (jeśli a truthy). a ??= b (jeśli a null/undefined). WeakRef i FinalizationRegistry. Promise.any([p1, p2]): pierwszy sukces. Odwrotność Promise.all. Numeric separators: 1_000_000 = 1000000. Czytelność. ES2022 features: Top-level await: await fetch() w module bez async function. Object.hasOwn(). Error.cause. at() method. Array/String/TypedArray. class fields (private #name). Static class blocks: static { this.init() }. Class static fields. private methods. ES2023: Array.toSorted/toReversed/with/toSpliced. findLast/findLastIndex. Hashbang (#!). Change Array by copy.",
  },
  {
    question: "JavaScript Iterator Helpers i nowe propozycje — co nas czeka?",
    answer: "Iterator Helpers (Stage 3): nowe metody na iteratorach. iter.map(fn), iter.filter(fn), iter.take(n), iter.drop(n). iter.flatMap(fn), iter.reduce(fn, init). iter.forEach(fn), iter.find(fn). Lazy evaluation — nie tworzy array pośrednich. [1,2,3,4,5].values().filter(x => x > 2).map(x => x * 2).take(2) — lazy. Brak Array.from w środku. Explicit Resource Management (Stage 3): using keyword. using resource = new Resource(). Automatyczne dispose() na końcu bloku. Jak C# using lub Python with. Symbol.dispose, Symbol.asyncDispose. TypeScript 5.2+: using keyword support. await using dla async. Set Methods (Stage 3): Set.prototype.union, intersection, difference, symmetricDifference, isSubsetOf, isSupersetOf, isDisjointFrom. Brak mapowania dwóch setów ręcznie. Temporal (Stage 3 — wkrótce): PlainDate, PlainTime, PlainDateTime. ZonedDateTime — strefa czasowa. Duration, Instant. Immutable. Globby — do produkcji gdy Stage 4. Float16Array (Stage 3): połowa precyzji float. AI/ML — mniejsze modele. WebGPU bufory. ArrayBuffer Float16. JSON.parse reviver (Stage 3): context param w reviver. Typ JSON. Ścieżka do klucza. Deferred Re-exports (Stage 2): export {default} from './heavy' deferred. Lazy export — nie wykonaj importu. Treeshaking hint. Import Assertions -> Import Attributes (Stage 3): with {type: 'json'}. Bezpieczeństwo typów importów. V8 i SpiderMonkey implementują.",
  },
];

const jsProposals = [
  { propozycja: "Object.groupBy()", stage: "Stage 4 (ES2024)", dostepne: "Chrome 117+, FF 119+, Safari 17.4+", kiedy: "Grupowanie danych bez reduce" },
  { propozycja: "Array.toSorted/toReversed", stage: "Stage 4 (ES2024)", dostepne: "Chrome 110+, FF 115+, Safari 16+", kiedy: "Immutable array transforms" },
  { propozycja: "Decorators", stage: "Stage 3", dostepne: "Babel + TypeScript 5.0+", kiedy: "Class annotations, metadata" },
  { propozycja: "Pattern Matching", stage: "Stage 2", dostepne: "Babel plugin", kiedy: "Strukturalne matchowanie wartosci" },
  { propozycja: "Iterator Helpers", stage: "Stage 3", dostepne: "Chrome 122+, Firefox 131+", kiedy: "Lazy iteration, brak array pośrednich" },
  { propozycja: "Temporal API", stage: "Stage 3", dostepne: "Polyfill (@js-temporal/polyfill)", kiedy: "Bezpieczne daty, strefy czasowe" },
];

export default function BlogJsProposalsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Nowe funkcje JavaScript | Fotz Studio"
        description="ES2024 (Object.groupBy, Array.toSorted), TC39 Stage 3 (Decorators, Iterator Helpers, Temporal API), Pattern Matching, Records/Tuples i nowoczesne JS metody."
        canonicalUrl="https://fotz.pl/blog/nowe-funkcje-javascript-es2024-tc39-proposals-temporal-iterator-helpers"

        keywords="Nowe funkcje JavaScript co to jest, Nowe funkcje JavaScript jak działa, Nowe funkcje JavaScript tutorial, Nowe funkcje JavaScript przykład, czym jest Nowe funkcje JavaScript, Nowe funkcje JavaScript dokumentacja, Nowe funkcje JavaScript przewodnik"

        canonical="https://fotz.pl/blog/nowe-funkcje-javascript-es2024-tc39-proposals-temporal-iterator-helpers"
      />
      <ArticleSchema
        title="Nowe funkcje JavaScript — ES2024, TC39 proposals, Temporal API i Iterator Helpers 2024?"
        description="6 propozycji JS (Object.groupBy/Array.toSorted/Decorators/Pattern Matching/Iterator Helpers/Temporal) — ES2024, Stage 3 proposals i przyszłość JavaScript."
        url="https://fotz.pl/blog/nowe-funkcje-javascript-es2024-tc39-proposals-temporal-iterator-helpers"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Nowe funkcje JavaScript ES2024", url: "https://fotz.pl/blog/nowe-funkcje-javascript-es2024-tc39-proposals-temporal-iterator-helpers" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-yellow-950 to-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Nowe funkcje JavaScript ES2024", url: "/blog/nowe-funkcje-javascript-es2024-tc39-proposals-temporal-iterator-helpers" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-yellow-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              JavaScript / ES2024 / TC39
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nowe funkcje JavaScript i TC39 Proposals
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              ES2024 (Object.groupBy, Array.toSorted), Stage 3 (Decorators, Iterator Helpers),
              Temporal API i Pattern Matching — przyszłość JavaScript.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Grupowanie", value: "groupBy" },
                { label: "Immutable arr", value: "toSorted()" },
                { label: "Lazy iter", value: "Iterators" },
                { label: "Date API", value: "Temporal" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-yellow-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 propozycji JS — Stage i dostępność</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Object.groupBy, Array.toSorted, Decorators, Pattern Matching, Iterator Helpers i Temporal —
              Stage TC39, dostępność przeglądarek i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Propozycja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Stage</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Dostępne</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {jsProposals.map((p, i) => (
                  <tr key={p.propozycja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{p.propozycja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.stage}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.dostepne}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
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

      <RelatedArticles currentArticleId="nowe-funkcje-javascript-es2024-tc39-proposals-temporal-iterator-helpers" />
      <ContactSection />
    </Layout>
  );
}
