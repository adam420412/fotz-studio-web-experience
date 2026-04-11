import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Node.js 22 i 23 — co nowego w 2024 roku?",
    answer: "Node.js 22 (LTS od 2024-10): aktywne LTS. Node.js 23 (Current): eksperymentalne features. Kluczowe zmiany Node.js 22: require(ESM) stable — require() dla ESM. Bez --experimental-require-module. node:sqlite wbudowane. WebSocket client natywny. Watch mode stable (--watch). Corepack stabilny. Performance improvements V8 12.4. Node.js 23: require(ESM) domyślnie włączone. --experimental-strip-types — TypeScript bez kompilacji. npm run scripts bez 'npm run'. Ulepszona diagnostyka. Node.js 22 LTS dates: aktywne LTS: 2024-10 - 2025-10. Maintenance: 2025-10 - 2027-04. Node.js 21 End-of-Life: 2024-06. Upgrade: n lub fnm lub volta. fnm install 22. fnm use 22. engines w package.json: node: >=22.0.0. nvm: nvm install 22. nvm use 22. .nvmrc plik: echo '22' > .nvmrc. V8 engine 12.x: WebAssembly GC. Maglev JIT compiler. Temporal API (eksperymentalne). Array.fromAsync. Object.groupBy (stable). Performance: startup time. Memory footprint. Benchmark improvements.",
  },
  {
    question: "Node.js — natywny TypeScript strip-types i ESM require?",
    answer: "TypeScript native support (Node.js 22.6+, 23+): --experimental-strip-types. Uruchamiaj .ts pliki bez kompilacji. node --experimental-strip-types index.ts. Usuwa typy. Nie transformuje (brak transpilacji specyficznej dla TS). Bez dekorators experi. Bez emitDeclarationOnly. Bez namespace. Ograniqczenia: tylko stripping — dekoratory eksperymentalne nie działają. import type musi być `import type`. Alts: ts-node. tsx (ts-execute). bun run file.ts. deno. --experimental-transform-types (Node.js 23.3+): pełna transformacja. Dekoratory. Enum -> JavaScript. ESM require (Node.js 22+): require() może ładować ES Modules. Kompatybilność. package.json type: 'module'. Lub .mjs. --experimental-require-module (Node.js 22 early). Stable w 22.x. Interop: CJS require ESM. ESM import CJS. Conditional exports w package.json: exports: {'.': {import: './dist/index.mjs', require: './dist/index.cjs'}}. Dual packages. ESM benefits: treeshaking. Static analysis. Top-level await. __dirname vs import.meta.dirname: __dirname w CJS. import.meta.dirname w ESM (Node.js 21.2+). import.meta.url + fileURLToPath (starszy). Module resolution: .js extension wymagane w ESM. imports field w package.json: wewnętrzne aliasy. #utils -> ./src/utils.js.",
  },
  {
    question: "Node.js — wbudowany node:sqlite i WebSocket client?",
    answer: "node:sqlite (Node.js 22.5+): SQLite wbudowane w Node.js! Bez zewnętrznych pakietów. import {DatabaseSync} from 'node:sqlite'. const db = new DatabaseSync(':memory:'). db.exec('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)'). const insert = db.prepare('INSERT INTO users (name) VALUES (?)') . insert.run('Jan'). const select = db.prepare('SELECT * FROM users'). const users = select.all(). Synchroniczne API (Sync). Asynchorniczne planowane. Persystencja: new DatabaseSync('./mydb.sqlite'). Backup: db.exec('VACUUM INTO backup.sqlite'). Transakcje: db.exec('BEGIN'). db.exec('COMMIT'). Alternatywy: better-sqlite3 (synchronous). Bun.sqlite (Bun). sql.js (WASM). drizzle-orm z libsql. WebSocket native client (Node.js 22+): globalny WebSocket. Jak w przeglądarce. const ws = new WebSocket('wss://example.com/ws'). ws.onopen = () => ws.send('hello'). ws.onmessage = (event) => console.log(event.data). ws.onclose = () => {}. Bez ws/socket.io na kliencie. Ale: ws biblioteka nadal lepsza dla serwerów. WebSocketServer z ws. Kompatybilność z przeglądarką. Fetch API: globalny (od Node.js 18). AbortController. AbortSignal. ReadableStream. File. FormData. Performance: native fetch vs axios vs undici. undici: najszybsze. Bazowy dla Node.js fetch.",
  },
  {
    question: "Node.js — natywny test runner node:test i --watch?",
    answer: "node:test (Node.js 18+, stabilny 20+): wbudowany test runner. Bez Jest/Vitest. import {test, describe, it, mock, beforeEach, afterEach} from 'node:test'. import assert from 'node:assert'. test('should add numbers', () => { assert.equal(1 + 1, 2) }). describe('math', () => { it('adds', () => { assert.equal(add(1, 2), 3) }). it('subtracts', async () => { const result = await subtract(5, 3). assert.equal(result, 2) }) }). Reporters: spec (domyślny). tap. dot. junit. node --test --test-reporter=spec. Mock: mock.fn(). mock.method(object, 'method'). mock.module('./module'). mock.timers. Snapshot testing: assert.snapshot(value). node --test-update-snapshots. Coverage: node --test --experimental-test-coverage. lcov, cobertura. Watch mode: node --test --watch. Re-run przy zmianach. Uruchamianie: node --test lub node --test 'tests/**/*.test.js'. npx tsx --test (TypeScript). --test-only: it.only(). describe.only(). test.only(). Skip: test.skip(). describe.skip(). Diagnostics: node --test --test-diagnostic-dir=./coverage. diagnostics channel. Porównanie: node:test vs Vitest: node:test — wbudowane, zero config. Vitest — szybsze, lepszy DX, snapshot, TypeScript natywny. Jest — legacy, wolny. Rekomendacja: Vitest dla React. node:test dla bibliotek Node.",
  },
  {
    question: "Node.js — SEA Single Executable Apps i Permission Model?",
    answer: "Single Executable Applications (SEA): Node.js 20+. Wbuduj Node.js + aplikację w jeden plik. sea-config.json: {main: 'index.js', output: 'sea-prep.blob'}. Kroki: node --experimental-sea-config sea-config.json. cp $(node -e \"require('process').execPath\") myapp. npx postject myapp NODE_SEA_BLOB sea-prep.blob. Działa: Windows (.exe). macOS. Linux. Ograniczenia: Duży plik (>80MB). Nie dla małych skryptów. Dobre dla CLI tools. Dostarczanie binaries. Alternatywy: pkg (oficjalnie deprecated). nexe. Bun compile (bun build --compile). Deno compile. Permission Model (Node.js 22 stable): granularne uprawnienia. --allow-fs-read. --allow-fs-write. --allow-net. --allow-child-process. --allow-worker. --allow-env. --allow-ffi. --no-addons. node --allow-fs-read='/tmp' --allow-net='example.com' app.js. Odrzuca dostęp poza granicami. Bezpieczeństwo supply chain. Diagnostics i debugowanie: --inspect, --inspect-brk. Chrome DevTools: about://inspect. node --prof. node --prof-process. AsyncLocalStorage: context propagation. OpenTelemetry integracja. AsyncResource. Deprecations w v22/23: url.parse -> new URL. domain module. Buffer() bez new. process.binding() nieoficjalne. Cluster upgrade: wciąż działa. Worker Threads lepsza alternatywa.",
  },
];

const nodeFeatures = [
  { funkcja: "require(ESM)", wersja: "Node.js 22 (stable)", opis: "CJS może require() ES Modules bez flag" },
  { funkcja: "--experimental-strip-types", wersja: "Node.js 22.6+", opis: "TypeScript natywnie bez kompilacji — type stripping" },
  { funkcja: "node:sqlite", wersja: "Node.js 22.5+", opis: "SQLite wbudowane — bez zewnętrznych pakietów" },
  { funkcja: "WebSocket client", wersja: "Node.js 22+", opis: "Globalny WebSocket jak w przeglądarce" },
  { funkcja: "node:test stable", wersja: "Node.js 20+", opis: "Wbudowany test runner — mock, coverage, watch" },
  { funkcja: "SEA Executables", wersja: "Node.js 20+", opis: "Single Executable App — Node.js + app w jednym binarnym" },
];

export default function BlogNode22FeaturesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Node.js 22 i 23 — TypeScript native, node:sqlite, WebSocket, SEA i Permission Model 2024 | Fotz.pl"
        description="Node.js 22/23: require(ESM), --experimental-strip-types (TypeScript bez kompilacji), node:sqlite wbudowane, WebSocket client natywny, node:test runner i SEA executables."
        canonicalUrl="https://fotz.pl/blog/nodejs-22-23-typescript-strip-types-sqlite-websocket-sea-2024"
      />
      <ArticleSchema
        title="Node.js 22 i 23 — TypeScript native, node:sqlite, WebSocket, SEA i Permission Model 2024?"
        description="Node.js 22 LTS i 23: require(ESM), TypeScript strip-types, node:sqlite, WebSocket client, node:test stable, Single Executable Apps i Permission Model."
        url="https://fotz.pl/blog/nodejs-22-23-typescript-strip-types-sqlite-websocket-sea-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Node.js 22/23 2024", url: "https://fotz.pl/blog/nodejs-22-23-typescript-strip-types-sqlite-websocket-sea-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-lime-950 to-green-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Node.js 22/23 2024", href: "/blog/nodejs-22-23-typescript-strip-types-sqlite-websocket-sea-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-lime-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Node.js / Runtime / TypeScript / SQLite
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Node.js 22 i 23 Nowości
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              TypeScript native, node:sqlite, WebSocket client,
              node:test runner i Single Executable Apps.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "TS native", value: "strip-types" },
                { label: "Wbudowane", value: "node:sqlite" },
                { label: "Browser API", value: "WebSocket" },
                { label: "Dystrybucja", value: "SEA Apps" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-lime-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Node.js 22/23 — kluczowe nowe funkcje</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              require(ESM), strip-types, node:sqlite, WebSocket, node:test i SEA —
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
                {nodeFeatures.map((f, i) => (
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
