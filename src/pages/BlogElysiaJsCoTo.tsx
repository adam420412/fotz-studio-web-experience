import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Elysia.js — ultra-szybki framework TypeScript dla Bun?",
    answer: "Elysia: saltyaom. Framework TypeScript dla Bun. End-to-end type safety. Fastest JS framework (benchmarki 2024). Instalacja: bun create elysia my-app. Podstawy: import {Elysia} from 'elysia'. const app = new Elysia().get('/', () => 'Hello').post('/user', ({body}) => body).listen(3000). Porównanie wydajności: Elysia: 370k req/s. Fastify: 180k req/s. Express: 60k req/s. Hono (Bun): 250k req/s. Powód: Bun runtime + Elysia optymalizacje. Type inference end-to-end: Route params, body, query — wszystko typed. VS Code autocomplete. Walidacja wbudowana w typy. Request Context: ({body, query, params, headers, cookie, set, request}). set.status — ustaw status code. set.headers — ustaw nagłówki. Route Params: .get('/user/:id', ({params: {id}}) => getUserById(id)). id: string automatycznie. Query: .get('/search', ({query: {q}}) => search(q)). q: string automatycznie. Post z body: .post('/user', ({body}) => createUser(body), {body: t.Object({name: t.String(), email: t.String()})}). Walidacja + typy. Eden Treaty (klient): import {treaty} from '@elysiajs/eden'. const client = treaty(app). const {data, error} = await client.user.get(). Fully typed client. Jak tRPC bez schema definicji.",
  },
  {
    question: "Elysia plugins i ekosystem — JWT, CORS, Swagger?",
    answer: "Elysia plugin system: .use(plugin). Chain-able. Type-safe plugins. Oficjalne pluginy: @elysiajs/bearer — Bearer token. @elysiajs/cors — CORS middleware. @elysiajs/cron — CRON jobs. @elysiajs/html — JSX/HTML responses. @elysiajs/jwt — JWT auth. @elysiajs/static — static files. @elysiajs/swagger — OpenAPI docs. @elysiajs/trpc — tRPC adapter. JWT: import {jwt} from '@elysiajs/jwt'. const app = new Elysia().use(jwt({name: 'jwt', secret: 'secret'})).post('/sign', async ({jwt, body}) => await jwt.sign(body)).get('/profile', async ({jwt, headers: {Authorization}}) => { const profile = await jwt.verify(Authorization.split(' ')[1]). return profile }). CORS: .use(cors({origin: 'https://myapp.com', credentials: true})). Swagger: .use(swagger()). Automatyczny OpenAPI z typów! /swagger UI dostępne. Elysia.macro: custom macro dla reuse logiki. const app = new Elysia().macro(({onBeforeHandle}) => ({isAuth(value: boolean) { if (!value) return. onBeforeHandle(async ({jwt, headers, error}) => { if (!headers.authorization) return error(401) }) }})).get('/secret', () => 'secret', {isAuth: true}). Scope: plugins mają własny zakres. Nie przeciekają do rodzica. import {Elysia} from 'elysia'. export const userPlugin = new Elysia({prefix: '/user'}).get('/', () => 'all users').get('/:id', ({params}) => params.id). const app = new Elysia().use(userPlugin). Prefix automatyczny.",
  },
  {
    question: "Hono vs Elysia vs Fastify — który framework backend TypeScript 2024?",
    answer: "Hono: Yusuke Wada. Multi-runtime: Bun, Deno, Cloudflare Workers, Node.js. Web Standards API. Instalacja: bun add hono. Lub npm install hono (Node). Hono middleware: import {Hono, Context} from 'hono'. const app = new Hono(). app.get('/hello', (c: Context) => c.text('Hello')). Hono adapters: app.fire() — Cloudflare Workers. serve(app) — Bun/Node. Hono z Cloudflare: plik index.ts. export default app. wrangler deploy. Idealny dla edge. Hono RPC: hono/client — typed client jak Eden. Walidacja: zod-validator, valibot-validator dla Hono. Fastify: Matteo Collina. JSON Schema validation. Fast serialization. TypeScript-first od v4. Plugins ecosystem: fastify-cors, @fastify/jwt, fastify-swagger. Produkcja-ready. Express 5: finally async/await native. Brak callback hell. Ale nadal wolny. Kiedy co: Elysia — Bun full-stack, end-to-end types, max speed. Hono — edge computing, multi-runtime, Cloudflare Workers. Fastify — Node.js produkcja, ekosystem, monitorowanie. NestJS — enterprise, Angular-like DI, duże zespoły. Express 5 — legacy projekty, powoli migruj. Serwer vs edge: Fastify/NestJS — serwer, pełna Node.js. Hono — edge + serwer. Elysia — tylko Bun (na razie).",
  },
  {
    question: "Bun 1.x — runtime, APIs i co różni od Node.js?",
    answer: "Bun 1.0 stable (2023-09). Bun: Jarred Sumner. JS runtime + bundler + test runner + package manager. Cel: najszybszy JS toolkit. Bun APIs: Bun.serve() — HTTP server: const server = Bun.serve({port: 3000, fetch(req) { return new Response('Hello') }}). Bun.file() — file reading: const file = Bun.file('data.txt'). const text = await file.text(). Bun.write() — file writing: await Bun.write('out.txt', 'content'). Bun.password: const hash = await Bun.password.hash('password'). const ok = await Bun.password.verify('password', hash). SQLite wbudowane: import {Database} from 'bun:sqlite'. const db = new Database('mydb.sqlite'). db.run('CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)'). const users = db.query('SELECT * FROM users').all(). WebSockets: server.upgrade(req). const server = Bun.serve({websocket: {message(ws, msg) { ws.send(msg) }, open(ws) { ws.send('Hello') }}}). Test runner: import {test, expect} from 'bun:test'. test('adds', () => { expect(1 + 1).toBe(2) }). bun test — szybszy niż jest/vitest. Node.js kompatybilność: Bun implementuje Node APIs. require(), process, Buffer, __dirname. Większość Node.js libs działa. Nie 100% — sprawdź. Bun vs Node.js prędkość: Bun install: 4x szybszy niż npm. Bun run: 2-4x szybszy startup. HTTP: 2x szybszy throughput. Sqlite: 3x szybszy. Kiedy Bun: nowy projekt. Serverless functions. CLI tools. Elysia + Bun stack.",
  },
  {
    question: "Elysia i Bun w produkcji — deployment, monitoring i best practices?",
    answer: "Deployment Elysia + Bun: Docker: FROM oven/bun:1. WORKDIR /app. COPY package.json bun.lockb ./. RUN bun install --frozen-lockfile. COPY . .. CMD ['bun', 'run', 'src/index.ts']. Multi-stage build: FROM oven/bun AS builder. RUN bun build src/index.ts --outfile=app.js --target=bun. FROM oven/bun AS runner. COPY --from=builder /app/app.js .. CMD ['bun', 'app.js']. Fly.io: fly launch — automatycznie wykrywa Bun. Railway: Bun support wbudowany. Render: Bun support. Coolify (self-host): Bun support. Monitoring: Bun nie ma Express middleware ecosystem. Pino logger: bun add pino. Logger middleware: app.use(({request, set}) => { logger.info({method: request.method, url: request.url}) }). OpenTelemetry z Elysia: @elysiajs/opentelemetry plugin. Traces + metrics. Health check: .get('/health', () => ({status: 'ok', uptime: process.uptime()})). Graceful shutdown: process.on('SIGTERM', () => { server.stop(). process.exit(0) }). Rate limiting: @elysiajs/rate-limit plugin. Lub własna logika. Error handling: .onError(({code, error, set}) => { if (code === 'VALIDATION') { set.status = 400. return {message: error.message} }. return error }). Onion model: Elysia lifecycle: request, parse, transform, beforeHandle, handler, afterHandle, mapResponse, afterResponse, error. Middleware jako plugin best practice. Test: bun test. Elysia eden jest też typowany w testach.",
  },
];

const frameworkComparison = [
  { framework: "Elysia.js", runtime: "Bun only", speed: "~370k req/s", kiedy: "Bun + max speed + end-to-end types" },
  { framework: "Hono", runtime: "Bun, Deno, Cloudflare, Node", speed: "~250k req/s (Bun)", kiedy: "Edge computing, multi-runtime, Cloudflare Workers" },
  { framework: "Fastify", runtime: "Node.js", speed: "~180k req/s", kiedy: "Node.js produkcja, duży ekosystem" },
  { framework: "NestJS", runtime: "Node.js", speed: "~60k req/s", kiedy: "Enterprise, DI, Angular-like, duże zespoły" },
  { framework: "Express 5", runtime: "Node.js", speed: "~60k req/s", kiedy: "Legacy, migracja, prostota" },
  { framework: "H3 + Nitro", runtime: "Node, Edge, Workers", speed: "~200k req/s", kiedy: "Nuxt 3 backend, universal runtime" },
];

export default function BlogElysiaJsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Elysia.js, Hono i Bun 1.x | Fotz Studio"
        description="Elysia.js (Bun, 370k req/s, end-to-end types, Eden Treaty), Hono (multi-runtime, edge), Bun 1.x (runtime + bundler + SQLite) i porównanie z Fastify…"
        canonicalUrl="https://fotz.pl/blog/elysia-js-hono-bun-backend-typescript-frameworki-2024"

        keywords="Elysia.js, Hono i Bun 1.x co to jest, Elysia.js, Hono i Bun 1.x jak działa, Elysia.js, Hono i Bun 1.x tutorial, Elysia.js, Hono i Bun 1.x przykład, czym jest Elysia.js, Hono i Bun 1.x, Elysia.js, Hono i Bun 1.x dokumentacja, Elysia.js, Hono i Bun 1.x przewodnik"

        canonical="https://fotz.pl/blog/elysia-js-hono-bun-backend-typescript-frameworki-2024"
      />
      <ArticleSchema
        title="Elysia.js, Hono i Bun 1.x — ultra-szybkie frameworki backend TypeScript 2024?"
        description="6 frameworków backend TypeScript (Elysia/Hono/Fastify/NestJS/Express/H3) — wydajność, runtime, end-to-end types i kiedy wybrać w 2024."
        url="https://fotz.pl/blog/elysia-js-hono-bun-backend-typescript-frameworki-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Elysia.js i Bun 2024", url: "https://fotz.pl/blog/elysia-js-hono-bun-backend-typescript-frameworki-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-fuchsia-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Elysia.js i Bun 2024", href: "/blog/elysia-js-hono-bun-backend-typescript-frameworki-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-fuchsia-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Backend / Bun / TypeScript
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Elysia.js i Bun 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Elysia (370k req/s, end-to-end types), Hono (multi-runtime),
              Bun 1.x (runtime + bundler) i vs Fastify/NestJS.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Elysia speed", value: "370k req/s" },
                { label: "Multi-runtime", value: "Hono" },
                { label: "All-in-one", value: "Bun 1.x" },
                { label: "Enterprise", value: "Fastify" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-fuchsia-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 frameworków backend TypeScript — speed i kiedy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Elysia, Hono, Fastify, NestJS, Express i H3 —
              runtime, prędkość i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Runtime</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Speed</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {frameworkComparison.map((f, i) => (
                  <tr key={f.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.runtime}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.speed}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.kiedy}</td>
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
