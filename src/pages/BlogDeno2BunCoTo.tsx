import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Deno 2.0 — co nowego: Node.js kompatybilność i JSR?",
    answer: "Deno 2.0: Ryan Dahl, Bartek Iwanczuk. Październik 2024. Przełomowa kompatybilność Node.js. Kluczowe zmiany: Node.js compatibility — require() dla npm packages. npm: prefix — bezpośrednio z npm. node_modules — opcjonalne, Deno może je używać. deno add — menedżer pakietów. deno.json — konfiguracja projektu. Deno 2.0 instalacja: curl -fsSL https://deno.land/install.sh | sh. deno upgrade. npm kompatybilność: deno add npm:hono. deno run --allow-net server.ts. Działa z Express, Next.js (deno task start). deno.json: {imports: {'hono': 'npm:hono@4', 'std/': 'jsr:@std/'}, tasks: {start: 'deno run -A server.ts', test: 'deno test'}, lint: {rules: {tags: ['recommended']}}, fmt: {lineWidth: 100}}. deno add: deno add npm:drizzle-orm. deno add jsr:@hono/hono. Automatycznie aktualizuje deno.json. JSR (JavaScript Registry): jsr.io. TypeScript-first. ESM-only. Bezpieczeństwo (scores). @std/ — Deno standard library. Np. import {join} from 'jsr:@std/path'. Subcommands: deno fmt — formatowanie (jak Prettier). deno lint — ESLint alternative. deno doc — dokumentacja. deno bench — benchmarki. deno compile — single executable. deno jupyter — Jupyter kernel. Permission model: --allow-net, --allow-read, --allow-write, --allow-env. Bardziej granularne. Deno KV: wbudowana baza danych. Durable. Deno Deploy: serverless hosting. Edge-native.",
  },
  {
    question: "Bun 1.x — runtime, bundler i package manager w Zig?",
    answer: "Bun: Jarred Sumner. Napisany w Zig. JavaScriptCore (Apple). Trzy-w-jednym: runtime + bundler + package manager. Bun 1.0 stable: wrzesień 2023. Bun 1.1: Windows support (kwiecień 2024). Bun shell (cross-platform shell scripting). Instalacja: curl -fsSL https://bun.sh/install | bash. npm install -g bun (polecany). bun --version. Runtime: bun run server.ts. Natywny TypeScript bez transpilacji. Node.js API compatibility: 97%+ coverage. Process, Buffer, EventEmitter. Bundler: bun build ./src/index.ts --outdir ./dist. Szybszy niż esbuild. Import maps. Treeshaking. Minification. Package manager: bun install — drop-in npm replacement. bun add hono. bun remove lodash. Szybszy install: 10-100x szybszy niż npm. Lockfile: bun.lockb (binarny). Bun shell: Bun.$'echo hello'. Bun.$'ls -la | grep .ts'. Cross-platform. Bez zależności shell OS. bun:sqlite: import {Database} from 'bun:sqlite'. const db = new Database('mydb.db'). db.run('CREATE TABLE IF NOT EXISTS user (id INT, name TEXT)'). db.prepare('INSERT INTO user VALUES (?, ?)').run(1, 'Adam'). const users = db.query('SELECT * FROM user').all(). bun:test: import {test, expect, describe, mock, beforeEach} from 'bun:test'. Kompatybilny z Jest API. Szybszy od Vitest w prostych scenariuszach. Bun.serve: const server = Bun.serve({port: 3000, fetch(req) { return new Response('Hello Bun!') }}). Bun.file: const file = Bun.file('data.json'). const data = await file.json(). Bun.write: await Bun.write('out.txt', 'content').",
  },
  {
    question: "Deno 2.0 vs Bun 1.x — porównanie runtime JavaScript 2024?",
    answer: "Deno 2.0: bezpieczeństwo first. Permission model. TypeScript native. Deno Deploy edge. JSR registry. Node kompatybilność 95%+. Zalety: security by default. Deno Deploy (serverless edge). JSR ecosystem. Deno KV. Standard library dojrzała. Wady: wolniejszy package install niż Bun. Mniejszy ekosystem. Node compat nie 100%. Bun 1.x: szybkość first. All-in-one tool. Node compat 97%+. Windows support. Zalety: najszybszy runtime (2-3x szybszy niż Node na benchmarkach). Najszybszy package manager. bun:sqlite, bun:test wbudowane. Bundler wbudowany. Wady: mniejszy ekosystem od Node. Niektóre Node.js APi brakuje. JavaScriptCore (nie V8) — różnice edge case. Node.js 22: baseline. Ogromny ekosystem. V8. Stabilny. Wady: wolniejszy niż Bun. Brak wbudowanych narzędzi. Benchmarki startup time: Bun 1.x: ~7ms. Deno 2.0: ~30ms. Node.js 22: ~50ms. HTTP requests/sec: Bun: najwyższy. Deno: drugi. Node: trzeci. Package install time (100 deps): Bun: 0.5s. pnpm: 5s. npm: 20s. Yarn: 15s. Kiedy Deno: bezpieczeństwo ważne (microservices). Deno Deploy. Piszesz moduły na JSR. Kiedy Bun: szybkość ważna. Drop-in Node.js replacement. Bundler + test + runtime w jednym. Kiedy Node.js: maksymalna kompatybilność. Enterprise. Największy ekosystem. Własny runtime: Deno — TypeScript runtime 2025. Bun — Zig+JavaScriptCore 2025.",
  },
  {
    question: "Bun — HTTP server, Bun.serve, hot reload i WebSocket?",
    answer: "Bun.serve HTTP: const server = Bun.serve({port: 3000, hostname: '0.0.0.0', fetch(req, server) { const url = new URL(req.url). if (url.pathname === '/') return new Response('Home'). if (url.pathname === '/health') return Response.json({ok: true}). return new Response('Not Found', {status: 404}) }, error(err) { return new Response(err.message, {status: 500}) }}). console.log('Listening on port', server.port). TLS: Bun.serve({tls: {cert: Bun.file('cert.pem'), key: Bun.file('key.pem')}}). WebSocket: Bun.serve({fetch(req, server) { if (server.upgrade(req)) return. return new Response('Upgrade failed', {status: 500}) }, websocket: {message(ws, msg) { ws.send('Echo: ' + msg) }, open(ws) { ws.subscribe('room') }, close(ws) { ws.unsubscribe('room') }}}). server.publish('room', 'Hello room!'). Hot reload: bun --hot run server.ts. Automatyczny restart na zmiany. Zachowuje stan (moduły nie są przeładowywane, tylko zmienione). vs nodemon: Bun hot — szybszy. Zachowuje state. Bez zewnętrznej zależności. bun --watch run server.ts — pełny restart. Hono na Bun: bun add hono. import {Hono} from 'hono'. const app = new Hono(). app.get('/', (c) => c.text('Hello from Hono on Bun!')). app.get('/json', (c) => c.json({hello: 'world'})). export default {port: 3000, fetch: app.fetch}. bun run index.ts. Benchmarks Hono+Bun: najszybsza kombincja w ekosystemie JS. Elysia+Bun: alternatywa — TypeScript-first, jeszcze szybsza.",
  },
  {
    question: "Deno Deploy, Fresh i Deno KV — edge i full-stack Deno?",
    answer: "Deno Deploy: serverless edge hosting. V8 isolates. Globalnie 35+ regionów. Deploy: deployctl deploy --project=my-app main.ts. GitHub Actions integration. Zero-config. Automatyczny HTTPS. Custom domains. Env vars. Pricing: darmowy plan (1M req/mies). Deno KV: wbudowana baza klucz-wartość. Deno Deploy native. const kv = await Deno.openKv(). await kv.set(['user', 'adam'], {name: 'Adam', email: 'a@example.com'}). const entry = await kv.get(['user', 'adam']). console.log(entry.value). Listy: for await (const entry of kv.list({prefix: ['user']})) { console.log(entry.value) }. Atomics: await kv.atomic().check({key: ['count'], versionstamp: null}).set(['count'], 0).commit(). Queue: kv.enqueue({type: 'email', to: 'user@example.com'}). kv.listenQueue(async (msg) => { await sendEmail(msg.to) }). Fresh framework: full-stack Deno framework. Island architecture. Zero client JS default. import {define} from '$fresh/server.ts'. export const handler = define.handlers({async GET(ctx) { return ctx.render({greeting: 'Hello!'}) }}). Islands: islands/Counter.tsx — interactive. Preact-based. No SSR dla islands. Deno formaty: deno fmt — wbudowane. deno lint — wbudowane. deno check — typecheck. Brak node_modules w deploymencie: jsDelivr + import maps. Subhosting: Deno Deploy for multi-tenant apps. User code sandboxing.",
  },
];

const runtimeFeatures = [
  { feature: "Deno 2.0 Node compat", runtime: "Deno 2.0", opis: "npm: prefix, node_modules support, deno add — 95%+ Node compat" },
  { feature: "JSR Registry", runtime: "Deno 2.0", opis: "TypeScript-first registry, @std/ library, jsr: import specifier" },
  { feature: "Bun Shell", runtime: "Bun 1.1+", opis: "Cross-platform shell scripting — Bun.$`ls -la`" },
  { feature: "bun:sqlite", runtime: "Bun 1.x", opis: "Wbudowany SQLite — Database, prepare, query, all()" },
  { feature: "Deno KV", runtime: "Deno 2.0", opis: "Edge key-value store — Deno Deploy native, atomics, queues" },
  { feature: "Bun.serve WebSocket", runtime: "Bun 1.x", opis: "WebSocket server wbudowany — upgrade, message, publish/subscribe" },
];

export default function BlogDeno2BunCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Deno 2.0 i Bun 1.x — nowe JavaScript runtimes, JSR, KV i Bun Shell 2024 | Fotz.pl"
        description="Deno 2.0: Node.js kompatybilność, JSR registry, deno add, Deno KV, Deno Deploy. Bun 1.1: Windows support, Bun Shell, bun:sqlite, bun:test, Hono+Bun benchmarks."
        canonicalUrl="https://fotz.pl/blog/deno-2-bun-1-runtime-jsr-kv-shell-node-kompatybilnosc-2024"
      />
      <ArticleSchema
        title="Deno 2.0 i Bun 1.x — nowe JavaScript runtimes, JSR, KV i Bun Shell 2024?"
        description="Deno 2.0: Node compat, JSR, deno add, Deno KV, Fresh, Deno Deploy. Bun 1.1: Bun Shell, bun:sqlite, Bun.serve, WebSocket, hot reload, Hono+Bun. Porównanie runtime."
        url="https://fotz.pl/blog/deno-2-bun-1-runtime-jsr-kv-shell-node-kompatybilnosc-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Deno 2.0 i Bun 1.x 2024", url: "https://fotz.pl/blog/deno-2-bun-1-runtime-jsr-kv-shell-node-kompatybilnosc-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-lime-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Deno 2.0 i Bun 1.x 2024", href: "/blog/deno-2-bun-1-runtime-jsr-kv-shell-node-kompatybilnosc-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Deno 2.0 / Bun 1.x / JSR / Edge Runtime
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Deno 2.0 i Bun 1.x Runtime
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Deno 2.0 (Node compat, JSR, KV), Bun 1.1 (Shell, SQLite,
              WebSocket) i Hono+Bun benchmarks.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Node compat", value: "Deno 2.0" },
                { label: "TypeScript-first", value: "JSR" },
                { label: "Cross-platform", value: "Bun Shell" },
                { label: "Edge KV", value: "Deno KV" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-green-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Deno 2.0 i Bun 1.x — kluczowe funkcje</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Node compat, JSR, Bun Shell, bun:sqlite, Deno KV i WebSocket —
              runtime i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Runtime</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {runtimeFeatures.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.feature}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.runtime}</td>
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
