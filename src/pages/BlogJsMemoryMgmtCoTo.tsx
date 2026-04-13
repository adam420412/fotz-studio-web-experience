import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "JavaScript Garbage Collection — jak działa Mark and Sweep?",
    answer: "Garbage Collection: automatyczne zarządzanie pamięcią w JS. Deweloper nie zwalnia ręcznie. GC engine: V8 (Chrome/Node.js), SpiderMonkey (Firefox), JavaScriptCore (Safari). Mark and Sweep: 1. Zacznij od roots (globalny obiekt, stack). 2. Odwiedź wszystkie osiągalne obiekty. 3. Oznacz jako 'żywe'. 4. Zmieć nieoznaczone (garbage). Generational GC: Young generation (Scavenger/Minor GC): małe, szybkie kolekcje. Obiekty które przeżyły kilka GC -> Old generation. Old generation (Major GC): rzadsze, droższe. Mark-Sweep-Compact. Incremental: podział na małe kroki. Brak pauz > 5ms. Concurrent: GC w osobnym wątku. Równolegle z JS. V8 Orinoco. Write barriers: śledzenie zmian wskaźników. Ważne dla concurrent GC. Hidden classes: V8 optymalizuje obiekty. Stwórz raz shape. Nie dodawaj pól po init. Szybszy dostęp do properties. Inline caches: zapamiętaj typ obiektu. Szybsze wywołania. Polymorphic — wolniejsze. GC triggery: alokacja przekroczyła próg. Czasowo (minor GC). Explicit: nie ma w JavaScript! global.gc() w Node.js z --expose-gc. Monitoring: Node.js --inspect. process.memoryUsage() — heapUsed, heapTotal, rss. V8 heap profiler w Chrome DevTools. console.memory (Chrome). GC events: PerformanceObserver. entryTypes: ['measure'].",
  },
  {
    question: "WeakMap i WeakSet — słabe referencje bez memory leaks?",
    answer: "WeakMap: Map ale słabe klucze. Klucz musi być obiektem. GC może zebrać klucz jeśli brak innych referencji. WeakMap jest zbierany razem z kluczem. Brak iteracji — nie można listować. const wm = new WeakMap(). wm.set(domNode, {clicks: 0}). wm.get(domNode) — pobierz. wm.has(domNode) — sprawdź. Gdy domNode usunięty z DOM i brak referencji -> GC zbiera domNode -> wm entry znika automatycznie. Zastosowania WeakMap: Cache per obiekt: const cache = new WeakMap(). function getExpensiveResult(obj) { if (cache.has(obj)) return cache.get(obj). const result = expensive(obj). cache.set(obj, result). return result }. Private fields (pre-#): const privateData = new WeakMap(). class MyClass { constructor() { privateData.set(this, {secret: 42}) } getSecret() { return privateData.get(this).secret } }. Event listener tracking: bez wycieku gdy element usunięty. WeakSet: zbiór słabych referencji. Brak iteracji. const ws = new WeakSet(). ws.add(object). ws.has(object). Zastosowania WeakSet: Śledzenie przetworzonych obiektów: const processed = new WeakSet(). function process(item) { if (processed.has(item)) return. processed.add(item). doWork(item) }. Circular reference detection. Brak wyczerpania pamięci. vs Map/Set: Map/Set — silne referencje, enumerable. WeakMap/Set — słabe, brak enumeracji. Używaj WeakMap gdy chcesz powiązać dane z obiektem bez wycieków.",
  },
  {
    question: "WeakRef i FinalizationRegistry — zaawansowane zarządzanie pamięcią?",
    answer: "WeakRef: słaba referencja do obiektu. GC może zebrać obiekt. deref() zwraca obiekt lub undefined. const wr = new WeakRef(heavyObject). const obj = wr.deref(). if (obj) { useObj(obj) } else { // GC collected }. Nie gwarantuje żywości. Sprawdzaj zawsze. Zastosowania WeakRef: Cache z możliwością GC: class Cache { cache = new Map(). get(key) { const ref = this.cache.get(key). if (ref) { const val = ref.deref(). if (val !== undefined) return val } }. set(key, value) { this.cache.set(key, new WeakRef(value)) } }. Obserwator bez wycieków: const weakCallback = new WeakRef(callback). emitter.on('event', () => { const cb = weakCallback.deref(). if (cb) cb() }). Nie trzyma callback przy życiu. FinalizationRegistry: callback gdy obiekt zbierany. Nie gwarantuje wywołania. Nie natychmiastowy. const registry = new FinalizationRegistry((heldValue) => { console.log('Cleaned up', heldValue). cleanupResource(heldValue) }). const obj = createExpensiveObject(). registry.register(obj, 'cleanup-key', obj). Trzeci argument (unregisterToken): registry.unregister(obj) — anuluj rejestrację. Zastosowania: cleanup native resources. Close file handles. Cancel subscriptions. Kiedy NIE używać: normalne cleanup — useEffect return. Deterministyczny cleanup — finally. WeakRef + FinalizationRegistry razem: const cache = new Map(). const cleanup = new FinalizationRegistry(key => cache.delete(key)). function addToCache(key, value) { cache.set(key, new WeakRef(value)). cleanup.register(value, key) }. Auto-evicting cache.",
  },
  {
    question: "Memory leaks w JavaScript i React — jak znajdować i naprawiać?",
    answer: "Common memory leaks: 1. Event listeners bez cleanup: element.addEventListener('click', handler). Brak removeEventListener. Handler trzyma closure z dużym obiektem. Napraw: useEffect return () => element.removeEventListener. 2. Timers: setInterval bez clearInterval. Callback trzyma referencję. Napraw: clearInterval w cleanup. 3. Closures: function outer() { const bigArray = [1, 2, ...]. return function inner() { return bigArray.length } }. bigArray trzymana przez inner. Napraw: nie trzymaj niepotrzebnych referencji. 4. DOM references: const el = document.querySelector('#app'). el.remove(). Ale referencja el nadal istnieje. Napraw: el = null po usunięciu. 5. React: nieoczyszczone subscriptions. setState po unmount (przestarzałe ostrzeżenie). Zamknięty component trzymany przez timer. 6. Global variables: window.myData = hugeObject. Nigdy nie zerowane. Napraw: null gdy skończone. Lub WeakRef. React useEffect cleanup: useEffect(() => { const subscription = api.subscribe(handler). return () => subscription.unsubscribe(). }, []). Zawsze zwróć cleanup! Zewnętrzne biblioteki: chart = new Chart(canvas, options). return () => chart.destroy(). AbortController: const controller = new AbortController(). fetch(url, {signal: controller.signal}). return () => controller.abort(). Narzędzia do wykrywania: Chrome DevTools Memory tab. Heap snapshot. Allocation timeline. Profiler. node --inspect. clinic.js (Node.js). memwatch-next. process.memoryUsage() monitoring. Wzrost heapUsed = potential leak.",
  },
  {
    question: "JavaScript performance — V8 optymalizacje i jak pisać szybki kod?",
    answer: "V8 optymalizacje: JIT compilation — hot functions kompilowane do native code. Turbofan — optymalizujący kompilator. Maglev — nowy kompilator (2023). Sparkplug — szybki baseline. Hidden classes (shapes): obiekty z tym samym kształtem dzielą shapes. Szybki dostęp do pól. Nie dodawaj pól po konstruktorze. Inicjalizuj wszystkie pola w constructor. Monomorphic functions: jedna shape = szybko. Dwa shapes = polimorficzny (wolniejszy). Trzy+ shapes = megamorphic (najwolniejszy). Inline caching: zapamiętaj wynik type check. Szybsze kolejne wywołania. Array performance: typowany array = najszybszy. Array z jednym typem (SMI = small integer). Nie mieszaj typów w jednej tablicy. Int32Array, Float64Array dla numeryki. Object pool: reużywaj obiekty. Mniej GC pressure. Gry, animacje. const pool = []. function getObject() { return pool.pop() || {} }. function release(obj) { pool.push(obj) }. String interning: niezmienne strings. Silnik cache'uje. Template literals: wolniejsze od concatenation w hot path. Immutability: Object.freeze — kopiowanie zamiast mutacji. Spread operator tworzy nowy obiekt. GC pressure. Moduły: import * as ns — tree-shaking trudne. Named imports. Side effects w modules. JSON.stringify/parse: wolne dla dużych obiektów. msgpack lub protobuf dla performance. Profiling: Chrome Performance tab. Node.js --cpu-prof. clinic.js flame. 0x (flamegraph).",
  },
];

const memoryConceptsTable = [
  { koncept: "Mark and Sweep GC", opis: "Oznacz żywe obiekty od roots, zbierz resztę", zastosowanie: "Automatyczne — V8, SpiderMonkey, JSCore" },
  { koncept: "WeakMap", opis: "Map z słabymi kluczami — GC może zebrać", zastosowanie: "Cache bez wycieków, private fields, DOM data" },
  { koncept: "WeakSet", opis: "Set z słabymi referencjami — brak iteracji", zastosowanie: "Tracking przetworzonych obiektów, circular refs" },
  { koncept: "WeakRef", opis: "Słaba referencja — deref() lub undefined", zastosowanie: "Cache który może być GC, obserwatory" },
  { koncept: "FinalizationRegistry", opis: "Callback gdy obiekt zbierany przez GC", zastosowanie: "Cleanup native resources, auto-evicting cache" },
  { koncept: "Hidden Classes (V8)", opis: "Obiekty z tym samym shape = szybkie", zastosowanie: "Inicjalizuj wszystkie pola w constructor" },
];

export default function BlogJsMemoryMgmtCoTo() {
  return (
    <Layout>
      <SEOHead
        title="JavaScript Memory Management | Fotz Studio"
        description="JavaScript Memory Management: Garbage Collection (Mark and Sweep), WeakMap/WeakSet (słabe referencje), WeakRef, FinalizationRegistry, memory leaks w React…"
        canonicalUrl="https://fotz.pl/blog/javascript-memory-management-weakmap-weakref-gc-memory-leaks-react-2024"

        keywords="JavaScript Memory Management co to jest, JavaScript Memory Management jak działa, JavaScript Memory Management tutorial, JavaScript Memory Management przykład, czym jest JavaScript Memory Management, JavaScript Memory Management dokumentacja, JavaScript Memory Management przewodnik"

        canonical="https://fotz.pl/blog/javascript-memory-management-weakmap-weakref-gc-memory-leaks-react-2024"
      />
      <ArticleSchema
        title="JavaScript Memory Management — WeakMap, WeakRef, GC i memory leaks w React 2024?"
        description="6 konceptów JavaScript memory (Mark-Sweep GC/WeakMap/WeakSet/WeakRef/FinalizationRegistry/Hidden Classes) — memory leaks w React, V8 optymalizacje i narzędzia."
        url="https://fotz.pl/blog/javascript-memory-management-weakmap-weakref-gc-memory-leaks-react-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "JS Memory Management", url: "https://fotz.pl/blog/javascript-memory-management-weakmap-weakref-gc-memory-leaks-react-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "JS Memory Management", href: "/blog/javascript-memory-management-weakmap-weakref-gc-memory-leaks-react-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              JavaScript / Memory / Performance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              JS Memory Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Garbage Collection, WeakMap/WeakSet (słabe referencje),
              WeakRef, FinalizationRegistry, memory leaks w React i V8 optymalizacje.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "GC", value: "Mark+Sweep" },
                { label: "Słabe ref", value: "WeakMap" },
                { label: "Nullable", value: "WeakRef" },
                { label: "Cleanup", value: "FinalizReg." },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 konceptów JS Memory Management</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              GC, WeakMap, WeakSet, WeakRef, FinalizationRegistry i Hidden Classes —
              opis i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Koncept</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                </tr>
              </thead>
              <tbody>
                {memoryConceptsTable.map((c, i) => (
                  <tr key={c.koncept} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{c.koncept}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{c.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{c.zastosowanie}</td>
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

      <RelatedArticles currentArticleId="javascript-memory-management-weakmap-weakref-gc-memory-leaks-react-2024" />
      <ContactSection />
    </Layout>
  );
}
