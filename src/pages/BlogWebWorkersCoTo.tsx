import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to są Web Workers i kiedy używać?",
    answer: "Web Workers: JavaScript w osobnym wątku. Nie blokuje UI thread (main thread). Komunikacja przez messages (postMessage). Brak dostępu do DOM. Własny globalny scope (DedicatedWorkerGlobalScope). Kiedy używać: ciężkie obliczenia (sort 1M elementów). Image processing. Audio/video processing. Kryptografia. Parsing dużych JSON. Obliczenia matematyczne (AI, physics). Tworzenie workera: const worker = new Worker(new URL('./worker.ts', import.meta.url)). Vite: worker.ts automatycznie bundlowany. worker.postMessage({type: 'COMPUTE', data: largeArray}). worker.onmessage = (event) => { setResult(event.data.result) }. Worker kod: self.onmessage = (event) => { const {type, data} = event.data. if (type === 'COMPUTE') { const result = heavyComputation(data). self.postMessage({result}) } }. Typy workerów: Dedicated Worker — jeden dokument. Shared Worker — wiele dokumentów/tabs. Service Worker — intercept requests, offline, push. Module Worker: type: 'module'. import statements w worker. Vite: ?worker w imporcie. Transferable Objects: ArrayBuffer, ImageBitmap, MessagePort, OffscreenCanvas. Brak kopiowania — przesyłanie ownership. worker.postMessage({buffer}, [buffer]). SharedArrayBuffer: pamięć dzielona między threads. Atomics — synchronizacja. Wymaga COOP/COEP headers. Błędy: worker.onerror handler. ErrorEvent.message, filename, lineno. terminate(): zabij worker. Cleanup w useEffect return.",
  },
  {
    question: "Comlink — prosty RPC dla Web Workers?",
    answer: "Comlink (Google Chrome Labs): abstrakcja nad Web Workers. RPC-like API. Async/await zamiast postMessage. Instalacja: npm install comlink. Worker strona: import {expose} from 'comlink'. const api = { async computeHeavy(data) { return doHeavyWork(data) }, async sortLarge(arr) { return arr.sort() } }. expose(api). Main strona: import {wrap} from 'comlink'. const worker = new Worker(new URL('./worker.ts', import.meta.url)). const api = wrap(worker). const result = await api.computeHeavy(bigData). Proxy: Comlink tworzy Proxy. Wywołania są async (nawet sync metody). Return values automatycznie transferowane. Klasy przez Comlink: expose(MyClass). const instance = await new RemoteClass(). await instance.method(). Proxy of proxy. Transfer helpers: transfer(data, [data.buffer]) — Transferable. proxy(callback) — callback z main do worker. Cancelable: releaseProxy() — cleanup. Typescript: typy automatycznie. Remote = Comlink.Remote. Ograniczenia: brak support dla DOM. Brak EventEmitter (callbacki przez proxy). Funkcje nie są serializable — użyj proxy(). React + Comlink hook: const workerRef = useRef(null). useEffect(() => { const worker = new Worker(...). workerRef.current = wrap(worker). return () => { worker.terminate() } }, []). useMemo hook dla heavy computations: const result = useMemo(() => api.compute(input), [input]). Ale uwaga: useMemo nie czeka na Promise. Potrzeba useState + useEffect. useWorker hook pattern: loading, error, result states.",
  },
  {
    question: "OffscreenCanvas — rendering w Web Workerze?",
    answer: "OffscreenCanvas: Canvas rendering w Web Worker. Nie blokuje main thread podczas renderingu. Przekazywanie canvas do workera: const canvas = document.getElementById('myCanvas'). const offscreen = canvas.transferControlToOffscreen(). worker.postMessage({canvas: offscreen}, [offscreen]). W workerze: const canvas = event.data.canvas. const ctx = canvas.getContext('2d'). ctx.fillRect(...) — normalny Canvas API. Kiedy przydatne: gry (60fps rendering). Video processing. Complex charts. Image editing. Three.js w workerze: WebGL Context przez OffscreenCanvas. renderer = new THREE.WebGLRenderer({canvas: offscreenCanvas}). Pełny Three.js render loop w worker. requestAnimationFrame: w workerze nie ma requestAnimationFrame. Użyj setTimeout lub postMessage loop. Lub MessageChannel — high-frequency. Synchronizacja z main thread: worker wysyła rendered frame. Main wyświetla. Lub: ResizeObserver dla resize events. Fallback: nie wszystkie przeglądarki wspierają OffscreenCanvas. Sprawdź typeof OffscreenCanvas !== 'undefined'. Fallback do main thread. WebCodecs API: kodowanie/dekodowanie video w worker. VideoDecoder, VideoEncoder. EncodedVideoChunk. Bez FFmpeg.wasm overhead. Web Audio WorkletNode: AudioWorkletNode — audio processing w worker. addModule(url) — załaduj processor. createProcessor() — AudioWorkletProcessor. Niski latency, real-time audio. OPFS w workerze: Origin Private File System szybszy w worker. Synchroniczne API w dedykowanym worker. createSyncAccessHandle() — blokujący odczyt/zapis.",
  },
  {
    question: "SharedArrayBuffer i Atomics — współdzielona pamięć między wątkami?",
    answer: "SharedArrayBuffer: bufor pamięci dzielony między wątkami. Brak kopiowania — zero-copy sharing. Wymaga COOP/COEP security headers: Cross-Origin-Opener-Policy: same-origin. Cross-Origin-Embedder-Policy: require-corp. Tworzenie: const sharedBuffer = new SharedArrayBuffer(1024). main: worker.postMessage({buffer: sharedBuffer}). worker: const view = new Int32Array(event.data.buffer). Oba mają referencję do tych samych bajtów. Atomics — synchronizacja: Atomics.add(typedArray, index, value) — atomowe dodawanie. Atomics.store, Atomics.load, Atomics.compareExchange. Atomics.wait(arr, 0, expectedValue) — blokujące czekanie (tylko w worker). Atomics.notify(arr, 0) — obudź oczekujące. Mutex pattern: Atomics.compareExchange(lockArray, 0, 0, 1) — lock. Atomics.store(lockArray, 0, 0) — unlock. Producer-Consumer: SharedArrayBuffer jako ring buffer. Atomics.wait + Atomics.notify. Lock-free algorithms. Bezpieczeństwo: Spectre mitigation — wyłączone domyślnie. COOP/COEP headers ponownie włączają. Jest JS: fake SharedArrayBuffer. Nie prawdziwe threads. Workerize: automatyczna konwersja funkcji do worker. import workerize from 'workerize'. const worker = workerize(() => { export function factorial(n) {return n <= 1 ? 1 : n * factorial(n-1)} }). await worker.factorial(10). Comlink vs workerize: Comlink — bardziej feature-rich. workerize — prostszy setup. Greenlet: pojedyncza funkcja jako worker. import greenlet from 'greenlet'. const asyncFn = greenlet(async (num) => { return expensiveCalc(num) }). await asyncFn(100).",
  },
  {
    question: "Praktyczne zastosowania Web Workers w React i Next.js?",
    answer: "React + Web Workers patterns: useWorker hook: niestandardowy hook. State dla result, loading, error. worker.postMessage na wejście. onmessage aktualizuje state. Cleanup: worker.terminate() w useEffect. react-worker biblioteka: upraszcza. Vite Web Workers: import MyWorker from './worker?worker'. const worker = new MyWorker(). import.meta.url nie potrzebne. TypeScript: /// reference lib='webworker'. tsconfig: include worker files. lib: ['webworker']. Lub: declare var self: DedicatedWorkerGlobalScope. Next.js + Web Workers: Pages Router: new Worker(new URL('./worker', import.meta.url)). Sprawdź typeof window !== 'undefined'. App Router: 'use client' komponent. Worker działa tylko po stronie klienta. Practical examples: Wyszukiwarka offline: index dokumentów w worker. Fuse.js lub FlexSearch w worker. Main thread wysyła query. Worker zwraca wyniki. Image processing: Canvas -> ImageData -> worker. Grayscale, blur, filters. Worker -> ImageData -> Canvas. Data transformation: sortowanie 100k rekordów. Aggregacje. Statistyki. Bez blokowania UI. Compression: fflate.js (zlib) w worker. Kompresja pliku przed upload. Chunk processing. AI inference: ONNX Runtime Web w worker. TensorFlow.js w worker. Nie blokuj UI podczas inference. SQLite w OPFS w worker: sql.js lub sqlite-wasm. Pełne zapytania SQL w worker. Brak lag w UI. Pooling: wielokrotne workery. Przydział zadań. Nie za wiele — overhead. Zazwyczaj navigator.hardwareConcurrency / 2.",
  },
];

const workerTypes = [
  { typ: "Dedicated Worker", api: "new Worker()", dostep: "Jeden dokument", kiedy: "Heavy computation, image processing" },
  { typ: "Shared Worker", api: "new SharedWorker()", dostep: "Wiele tabs/windows", kiedy: "Shared state, WebSocket connection" },
  { typ: "Service Worker", api: "navigator.serviceWorker.register()", dostep: "Intercept requests", kiedy: "Offline, caching, push notifications" },
  { typ: "Audio Worklet", api: "AudioWorkletNode", dostep: "Web Audio API", kiedy: "Real-time audio processing, effects" },
  { typ: "Comlink RPC", api: "wrap(worker)", dostep: "Proxy abstraction", kiedy: "Prostszy API nad Worker, async/await" },
  { typ: "OffscreenCanvas", api: "transferControlToOffscreen()", dostep: "Canvas w workerze", kiedy: "Gry, 3D rendering, video bez blokowania" },
];

export default function BlogWebWorkersCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer"
        description="Web Workers (Dedicated, Shared, Service), Comlink (RPC API), OffscreenCanvas (3D w workerze), SharedArrayBuffer + Atomics (synchronizacja) i Vite/Next.js…"
        canonicalUrl="https://fotz.pl/blog/web-workers-comlink-offscreencanvas-shared-array-buffer-javascript-2024"

        keywords="Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer co to jest, Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer definicja, czym jest Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer, Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer startup, Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer jak liczyć, Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer wzór, Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer przykłady"

        canonical="https://fotz.pl/blog/web-workers-comlink-offscreencanvas-shared-array-buffer-javascript-2024"
      />
      <ArticleSchema
        title="Web Workers, Comlink, OffscreenCanvas i SharedArrayBuffer — wielowątkowość JavaScript 2024?"
        description="6 technologii wielowątkowych (Dedicated Worker/Shared Worker/Service Worker/Audio Worklet/Comlink/OffscreenCanvas) — przenoszenie ciężkich obliczeń poza main thread."
        url="https://fotz.pl/blog/web-workers-comlink-offscreencanvas-shared-array-buffer-javascript-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Web Workers i wielowątkowość", url: "https://fotz.pl/blog/web-workers-comlink-offscreencanvas-shared-array-buffer-javascript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Web Workers i wielowątkowość", href: "/blog/web-workers-comlink-offscreencanvas-shared-array-buffer-javascript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              JavaScript / Performance / Threads
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Workers i wielowątkowość JS
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Dedicated Worker, Comlink (RPC), OffscreenCanvas (3D w workerze),
              SharedArrayBuffer + Atomics i Service Worker — ciężkie obliczenia poza main thread.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Off main thread", value: "Workers" },
                { label: "RPC wrapper", value: "Comlink" },
                { label: "Canvas + worker", value: "Offscreen" },
                { label: "Shared memory", value: "SAB+Atomics" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-amber-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 typów Web Workerów — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dedicated, Shared, Service Worker, Audio Worklet, Comlink i OffscreenCanvas —
              API, dostęp i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">API</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Dostęp</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {workerTypes.map((w, i) => (
                  <tr key={w.typ} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{w.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs font-mono">{w.api}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{w.dostep}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{w.kiedy}</td>
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
