import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest WebAssembly (Wasm) i jak działa w przeglądarce?",
    answer: "WebAssembly (Wasm) to binarny format instrukcji uruchamiany w przeglądarce jako cel kompilacji dla języków takich jak C, C++, Rust, Go. Jest to niski poziom wirtualnej maszyny — szybszy niż JavaScript dla obliczeń intensywnych. Jak działa: kod w C++/Rust jest kompilowany do .wasm (binarny). Przeglądarka ładuje .wasm i uruchamia go w sandboxie (izolowanym środowisku). JavaScript i Wasm mogą wywoływać się wzajemnie przez interfejs JS API. Wasm vs. JavaScript: JavaScript — dynamicznie typowany, interpretowany/JIT-compiled. Dobry dla logiki UI, DOM manipulacji. Wasm — statycznie typowany, kompilowany ahead-of-time. Nawet 10-100x szybszy dla obliczeń numerycznych, siłowe operacje na danych. Przykłady zastosowań: Figma — rendering w Wasm. Google Earth — mapy 3D. Autodesk — CAD w przeglądarce. Zoom — video processing. FFmpeg.wasm — konwersja video w przeglądarce. SQLite.wasm — baza danych po stronie klienta. Obsługa przeglądarek: wszystkie nowoczesne przeglądarki. Chrome, Firefox, Safari, Edge — pełne wsparcie. Ekosystem: Emscripten — toolchain C/C++ do Wasm. wasm-pack — Rust do Wasm. TinyGo — Go do Wasm.",
  },
  {
    question: "Rust i Wasm — jak kompilować Rust do WebAssembly?",
    answer: "Rust jest uważany za najlepszy język do WebAssembly — memory safety bez garbage collectora (brak GC pauses), świetna wydajność i doskonałe tooling. Setup: install wasm-pack (narzędzie budowania Rust+Wasm). Rust target: wasm32-unknown-unknown. wasm-pack build — kompiluje Rust do .wasm + generuje JS bindings. wasm-bindgen: biblioteka do generowania automatycznych JS bindings. Definiujesz które funkcje Rust są eksportowane do JavaScript. Typy automatycznie konwertowane (String, Vec, structs). Przykład: #[wasm_bindgen] pub fn add(a: i32, b: i32) -> i32 { a + b }. Po kompilacji wywołujesz z JS: import { add } from './pkg/mylib'; console.log(add(2, 3));. web-sys i js-sys: bindingi do Web APIs (DOM, fetch, canvas) z Rust. Możesz manipulować DOM bezpośrednio z Rust. Performance tips: minimize JS-Wasm boundary crossings (każde wywołanie między JS i Wasm ma overhead). Bulk data transfer przez SharedArrayBuffer lub wasm-bindgen's memory. WASI (WebAssembly System Interface): standard do uruchamiania Wasm poza przeglądarką (server-side). Runtime: Wasmtime, Wasmer, WasmEdge. Use case: portable plugins, edge computing, sandboxed execution.",
  },
  {
    question: "WebAssembly poza przeglądarką — WASI, edge computing i runtime?",
    answer: "WASI (WebAssembly System Interface): standardowy interface dla Wasm poza przeglądarką — dostęp do systemu plików, sieci, zmiennych środowiskowych. Cel: Wasm jako portable, sandboxed runtime wszędzie. Runtimes WASI: Wasmtime (Bytecode Alliance) — produkcyjny runtime, używany w Fastly. Wasmer — runtime z package manager (wapm). WasmEdge — zoptymalizowany dla edge i cloud. Edge Computing z Wasm: Fastly Compute — Wasm runtime na ich edge (nie V8 Isolates jak Cloudflare). Cloudflare Workers również mają Wasm support. Ultra-fast cold starts (Wasm startuje w mikrosekudnach). Sandboxing natywny — każdy request w izolowanym Wasm sandbox. Plugin systems: Extism — framework dla plugin systems opartych na Wasm. Wasm plugins w aplikacjach Go, Rust, Python, JS. Envoy Proxy — Wasm jako filter plugins (bez kompilacji proxy). Open Policy Agent (OPA) — polityki jako Wasm. Kubernetes: kruntimes kontenerów wspierają Wasm workloads (runwasi). Containerd + Wasm = lżejsza alternatywa dla Docker w niektórych scenariuszach. Component Model (Wasm Components): nowy standard (2024) — komponenty z silnie typowanymi interfejsami. wit-bindgen — generowanie bindings ze specyfikacji WIT (Wasm Interface Types). Interoperabilność między językami przez komponenty.",
  },
  {
    question: "C++ i Emscripten — portowanie istniejącego kodu do przeglądarki?",
    answer: "Emscripten to toolchain do kompilowania kodu C/C++ do WebAssembly (lub legacy asm.js). Instalacja: emsdk (Emscripten SDK). Kompilacja: emcc mycode.cpp -o output.html (lub .js, .wasm). Automatycznie generuje HTML/JS wrapper lub samodzielny .wasm. Obsługiwane biblioteki: SDL2 — grafika 2D. OpenGL ES — grafika 3D (przez WebGL). POSIX API — sys/file, sockets (przez emulated). zlib, libpng, libjpeg, freetype — standardowe lib. Porty: Emscripten Ports — pre-compiled wersje popularnych bibliotek. Portowanie gier: gry C++ (silniki: Godot eksportuje do Wasm, Unity WebGL to Wasm). Doom, Quake — portowane do przeglądarki przez Emscripten. Unreal Engine — Wasm export. Memory model: Emscripten emuluje stos i heap C w Wasm Linear Memory. Malloc/free działa jak w natywnym C++. Wyzwania portowania: blocking API (pthreads emulowane przez SharedArrayBuffer + Atomics). File I/O emulowane (VFS). C++ exceptions obsługiwane ale z overhead. Performance: skompilowany C++ do Wasm jest zwykle 70-90% szybkości natywnego kodu. Debugowanie: source maps + DWARF info = debugowanie oryginalnego C++ kodu przez DevTools. Alternatywy dla Emscripten: wasi-sdk (minimalistyczny, brak emulacji POSIX), tinycc+wasm.",
  },
  {
    question: "Jak wdrożyć WebAssembly w projekcie webowym — praktyczny przewodnik?",
    answer: "Kiedy używać Wasm: obliczenia intensywne (image processing, video, audio, kryptografia, AI inference). Portowanie istniejących bibliotek C/C++ do przeglądarki. Gry i wizualizacje wymagające wysokiej wydajności. Kod który musi być szybszy niż JavaScript może osiągnąć. Kiedy NIE używać Wasm: prostą logikę UI i DOM — JavaScript jest wystarczający. Overhead komunikacji JS-Wasm może niwelować zyski wydajności przy małych operacjach. Przeglądarki muszą pobierać i kompilować .wasm (choć streaming compilation pomaga). Integracja z bundlerami: Vite — natywne wsparcie .wasm imports (import wasmUrl from './module.wasm?url'). Webpack — wasm-loader lub native asset modules. Rollup — @rollup/plugin-wasm. Next.js — eksperymentalne wsparcie w next.config.js. Wasm+JS wzorce: Compute-heavy logic w Wasm, UI w JS. Wasm jako WebWorker (nie blokuje main thread). SharedArrayBuffer dla zero-copy data transfer między JS i Wasm. Narzędzia i ekosystem: wasm-opt — optymalizuje .wasm pliki (Binaryen). twiggy — profiler rozmiaru .wasm. wasm-snip — usuwa nieużywane funkcje. Metryki: rozmiar .wasm, czas inicjalizacji (streaming compilation vs. synchronous), memory footprint.",
  },
];

const wasmUseCases = [
  { przypadek: "Image/Video Processing", jezyk: "C++ / Rust", przyklad: "FFmpeg.wasm, OpenCV.js, Squoosh (Google)", benefit: "10-50x szybciej vs. pure JS" },
  { przypadek: "Gry i Silniki 3D", jezyk: "C++ / C#", przyklad: "Unity WebGL, Godot, Unreal Engine", benefit: "Natywna wydajność grafiki w przeglądarce" },
  { przypadek: "Kryptografia", jezyk: "Rust / C", przyklad: "libsodium.js, WebCrypto supplementary", benefit: "Constant-time operations, side-channel safety" },
  { przypadek: "CAD i Design Tools", jezyk: "C++ / Rust", przyklad: "Figma, Autodesk, Shapr3D", benefit: "Ciężkie obliczenia geometryczne" },
  { przypadek: "AI / ML Inference", jezyk: "C++ / Rust", przyklad: "ONNX Runtime Wasm, TensorFlow.js Wasm backend", benefit: "Szybszy inference vs. pure JS" },
  { przypadek: "SQLite w przeglądarce", jezyk: "C", przyklad: "sql.js, wa-sqlite, PGlite", benefit: "Pełna baza danych offline po stronie klienta" },
];

const wasmToolchain = [
  { jezyk: "Rust", narzedzie: "wasm-pack + wasm-bindgen", dojrzalosc: "Produkcyjna", uwagi: "Najlepszy DX, memory safety, aktywny ekosystem" },
  { jezyk: "C / C++", narzedzie: "Emscripten", dojrzalosc: "Produkcyjna", uwagi: "Najdłuższa historia, portowanie legacy kodu" },
  { jezyk: "Go", narzedzie: "TinyGo / GOOS=wasip1", dojrzalosc: "Stabilna", uwagi: "Mniejszy rozmiar binarny niż standardowy Go" },
  { jezyk: "AssemblyScript", narzedzie: "asc compiler", dojrzalosc: "Stabilna", uwagi: "TypeScript-like syntax, dobry punkt startowy" },
  { jezyk: "Python", narzedzie: "Pyodide / MicroPython", dojrzalosc: "Beta", uwagi: "Python w przeglądarce, duży rozmiar binarki" },
];

export default function BlogWasmCoTo() {
  return (
    <Layout>
      <SEOHead
        title="WebAssembly (Wasm) | Fotz Studio"
        description="WebAssembly: jak działa, Rust+wasm-pack, C++/Emscripten, WASI poza przeglądarką, edge computing i praktyczne use cases (FFmpeg, Figma, gry)."
        canonical="https://fotz.pl/blog/webassembly-wasm-co-to-jest-rust-cpp-emscripten"

        keywords="WebAssembly (Wasm) co to jest, WebAssembly (Wasm) definicja, czym jest WebAssembly (Wasm), WebAssembly (Wasm) przykłady, jak działa WebAssembly (Wasm), WebAssembly (Wasm) znaczenie, WebAssembly (Wasm) przewodnik"
      />
      <ArticleSchema
        title="WebAssembly (Wasm) — co to jest, Rust, C++ i Emscripten w przeglądarce?"
        description="WebAssembly: 6 use cases, 5 języków/toolchainów, WASI edge computing, Rust wasm-pack, C++ Emscripten — kiedy i jak używać Wasm w projektach webowych."
        url="https://fotz.pl/blog/webassembly-wasm-co-to-jest-rust-cpp-emscripten"
        datePublished="2024-04-09"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "WebAssembly", url: "https://fotz.pl/blog/webassembly-wasm-co-to-jest-rust-cpp-emscripten" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "WebAssembly", url: "/blog/webassembly-wasm-co-to-jest-rust-cpp-emscripten" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-zinc-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Performance / Web
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              WebAssembly (Wasm)
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Figma, Google Earth, Unity gry — wszystko w przeglądarce bez pluginów.
              WebAssembly to niska warstwa wirtualnej maszyny umożliwiająca
              natywną wydajność w webie — dla C++, Rust, Go i innych.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Najlepszy język", value: "Rust + wasm-pack" },
                { label: "Legacy portowanie", value: "C++ + Emscripten" },
                { label: "Szybkość vs JS", value: "10-100x (obliczenia)" },
                { label: "Poza przeglądarką", value: "WASI runtime" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-zinc-300">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych zastosowań WebAssembly</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wasm nie zastępuje JavaScript — uzupełnia go tam gdzie
              wydajność obliczeń jest krytyczna.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {wasmUseCases.map((u) => (
              <FadeInView key={u.przypadek}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{u.przypadek}</h3>
                  <p className="text-gray-700 text-sm mb-2">{u.przyklad}</p>
                  <p className="text-xs text-zinc-700 font-medium mb-1">Języki: {u.jezyk}</p>
                  <p className="text-xs text-gray-500">{u.benefit}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Toolchains */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Języki i toolchainy WebAssembly</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy język ma własny toolchain do kompilacji do Wasm — wybór
              zależy od istniejącego kodu i wymagań projektu.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Język</th>
                  <th className="text-left p-3 font-bold text-gray-900">Toolchain</th>
                  <th className="text-left p-3 font-bold text-gray-900">Dojrzałość</th>
                  <th className="text-left p-3 font-bold text-gray-900">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                {wasmToolchain.map((t, i) => (
                  <tr key={t.jezyk} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{t.jezyk}</td>
                    <td className="p-3 text-gray-700 font-mono text-xs">{t.narzedzie}</td>
                    <td className="p-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${t.dojrzalosc === "Produkcyjna" ? "bg-green-100 text-green-800" : t.dojrzalosc === "Stabilna" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {t.dojrzalosc}
                      </span>
                    </td>
                    <td className="p-3 text-gray-600 text-xs">{t.uwagi}</td>
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

      <RelatedArticles currentArticleId="webassembly-wasm-co-to-jest-rust-cpp-emscripten" />
      <ContactSection />
    </Layout>
  );
}
