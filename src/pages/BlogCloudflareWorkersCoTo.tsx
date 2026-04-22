import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są Cloudflare Workers i jak działają na edge?",
    answer: "Cloudflare Workers: serverless JavaScript na edge. V8 isolates (nie Node.js). 300+ lokalizacji globalnie. Sub-millisecond cold start. Brak cold start problemu Lambda. Instalacja: npm install wrangler@latest. npx wrangler init my-worker. Podstawowy Worker: export default {async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise(Response) { const url = new URL(request.url). if (url.pathname === '/api/hello') { return Response.json({message: 'Hello from edge!'}) } return new Response('Not found', {status: 404}) }}. wrangler dev — lokalne testowanie. wrangler deploy — deploy na edge. wrangler.toml: name = 'my-worker'. main = 'src/index.ts'. compatibility_date = '2024-01-01'. Hono z Workers: npm install hono. import {Hono} from 'hono'. const app = new Hono(). app.get('/api/users', async (c) => { return c.json({users: [...]}) }). export default app. Ograniczenia: Brak Node.js APIs (fs, crypto — użyj Web Crypto). 128MB memory per request. 30s CPU time (Paid: 30s default, Workers Unbound: bez limitu). 10ms CPU Paid plan. 100,000 req/dzień free tier. Request/Response — Web APIs. Edge Runtime — kompatybilny ze standardami.",
  },
  {
    question: "KV, D1 i R2 — storage w Cloudflare Workers?",
    answer: "KV (Workers KV): key-value store. Eventually consistent (eventual consistency). Globalna replikacja. 25MB value limit. Świetny dla: session data, config, rate limits. wrangler.toml: [[kv_namespaces]]. name = 'MY_KV'. id = 'abc123'. Binding w Worker: env.MY_KV.get('key'). env.MY_KV.put('key', 'value', {expirationTtl: 3600}). env.MY_KV.delete('key'). env.MY_KV.list({prefix: 'user:'}). D1 (SQLite na edge): Cloudflare managed SQLite. Writable replicas w wielu regionach (beta). SQL queries. Prisma kompatybilny (driver adapter). wrangler.toml: [[d1_databases]]. binding = 'DB'. database_name = 'my-db'. Worker: const result = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(userId).first(). await env.DB.prepare('INSERT INTO users (name) VALUES (?)').bind(name).run(). Migracje: wrangler d1 migrations create init. wrangler d1 migrations apply. R2 (Object Storage): S3-compatible. Brak egress fee! Wrangler binding. env.MY_BUCKET.put(key, body). env.MY_BUCKET.get(key). env.MY_BUCKET.delete(key). S3 SDK kompatybilny: @aws-sdk/client-s3 z R2 endpoint. Presigned URLs przez Workers. Porównanie KV vs D1 vs R2: KV — config, cache, sessions. D1 — relacyjne dane, SQL. R2 — pliki, obrazy, assets.",
  },
  {
    question: "Durable Objects — stateful edge computing?",
    answer: "Durable Objects: stateful server na edge. Jedyna instancja per ID. Globalnie dostępna. WebSocket hibernation. Jak działają: DO ma ID (np. chat-room-123). Wszystkie requesty do tego ID -> ta sama instancja. Stan w pamięci lub DO Storage. Definicja DO: export class ChatRoom { storage: DurableObjectStorage. sessions: Map(WebSocket, any). constructor(state: DurableObjectState, env: Env) { this.storage = state.storage } async fetch(request: Request) { if (request.headers.get('Upgrade') === 'websocket') { const {0: client, 1: server} = new WebSocketPair(). server.accept(). this.handleSession(server) return new Response(null, {status: 101, webSocket: client}) } } async handleSession(ws: WebSocket) { ws.addEventListener('message', ({data}) => { this.broadcast(data) }) } broadcast(message: string) { this.sessions.forEach((_, ws) => ws.send(message)) } }. Binding w wrangler.toml: [[durable_objects.bindings]]. name = 'CHAT_ROOM'. class_name = 'ChatRoom'. DO Storage: await this.storage.put('count', count + 1). const count = await this.storage.get('count'). Transakcyjne (per DO). WebSocket Hibernation: state.acceptWebSocket(server). Nie trzyma procesu aktywnego. Millions of DO możliwych — jedno per room. Rate limiting z DO: Globalny rate limiter per IP. CRDT state. Distributed locking.",
  },
  {
    question: "Workers AI i AI Gateway — AI na edge?",
    answer: "Workers AI: AI inference na Cloudflare GPU. Modele: Llama 3, Mistral, SDXL, Whisper. Bez własnej infrastruktury GPU. env.AI binding. import {Ai} from '@cloudflare/ai'. const ai = new Ai(env.AI). Text generation: const response = await ai.run('@cf/meta/llama-3-8b-instruct', {prompt: 'Hello, how are you?', max_tokens: 500}). response.response — odpowiedź. Streaming: const stream = await ai.run('@cf/meta/llama-3-8b-instruct', {prompt, stream: true}). return new Response(stream, {headers: {'Content-Type': 'text/event-stream'}}). Embeddings: const {data} = await ai.run('@cf/baai/bge-base-en-v1.5', {text: ['Hello world']}). data[0] — embedding array. Image classification: ai.run('@cf/microsoft/resnet-50', {image: imageArray}). Stable Diffusion: ai.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {prompt: 'A cat'}). Whisper (STT): ai.run('@cf/openai/whisper', {audio: audioBuffer}). AI Gateway: proxy dla zewnętrznych AI API. OpenAI, Anthropic, Hugging Face. Caching requestów. Rate limiting. Logging i analytics. Fallback między providerami. Workers AI pricing: $0.011 per 1000 neurons (tokens). Free tier: 10,000 neurons/dzień. Vectorize (vector DB): Cloudflare managed pgvector-like. insert, query. Kombinuj z Workers AI dla RAG. KV dla caching embedding.",
  },
  {
    question: "Pages Functions i zaawansowane wzorce Workers?",
    answer: "Cloudflare Pages: hosting statycznych stron + Functions. Git-based deployment. Functions jako Workers przy Pages. functions/_middleware.ts — middleware. functions/api/hello.ts — /api/hello. Automatyczne deployment PR previews. Wrangler dev — lokalne Pages Functions. Middleware w Workers: chain funkcji. export const onRequest = [auth, handler]. Context propagation. Caching: Cache API: const cache = caches.default. const cached = await cache.match(request). if (!cached) { const response = await fetch(origin). await cache.put(request, response.clone()) return response }. Cache-Control headers. cf.cacheTtl — Cloudflare cache. waitUntil: ctx.waitUntil(analytics.record(request)). Nie blokuj response. Background tasks. Scheduled Workers (Cron): wrangler.toml: [triggers]. crons = ['0 * * * *']. export default {async scheduled(event, env, ctx) { await cleanupExpiredData(env.DB) }}. Wrangler deploy z cron. Email routing: Workers z Email routing. Email jako event. Parse email headers. Forward lub respond. Logpush: stream logs do R2, Datadog, Splunk. Workers analytics. Architektura: Pages + Workers + D1 + R2 + KV to kompletny stack bez serwera. Prawie zero cold start. Globalna dystrybucja. Limity: 1MB Worker size (compressed). 10MB Unbound. 128MB memory. Subdomeny: worker.username.workers.dev lub własna domena. SSL automatyczny.",
  },
];

const cloudflareProducts = [
  { produkt: "Workers", typ: "Serverless functions", storage: "V8 isolates (nie Node.js)", kiedy: "API, middleware, edge logic" },
  { produkt: "Workers KV", typ: "Key-value store", storage: "Eventually consistent, global", kiedy: "Sessions, config, rate limits, cache" },
  { produkt: "D1", typ: "SQLite database", storage: "Replicated SQLite", kiedy: "Relacyjne dane, SQL queries" },
  { produkt: "R2", typ: "Object storage", storage: "S3-compatible, zero egress", kiedy: "Pliki, obrazy, statyczne assets" },
  { produkt: "Durable Objects", typ: "Stateful edge", storage: "Per-instance persistent storage", kiedy: "WebSocket rooms, rate limiting, CRDT" },
  { produkt: "Workers AI", typ: "AI inference", storage: "GPU na edge", kiedy: "Llama, SDXL, Whisper bez własnych GPU" },
];

export default function BlogCloudflareWorkersCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Cloudflare Workers | Fotz Studio"
        description="Cloudflare Workers: KV (key-value), D1 (SQLite na edge), R2 (S3 bez egress fee), Durable Objects (stateful WebSockets), Workers AI (Llama, SDXL, Whisper)…"
        canonical="https://fotz.pl/blog/cloudflare-workers-kv-d1-r2-durable-objects-workers-ai-edge-2024"

        keywords="Cloudflare Workers co to jest, Cloudflare Workers definicja, czym jest Cloudflare Workers, Cloudflare Workers przykłady, jak działa Cloudflare Workers, Cloudflare Workers znaczenie, Cloudflare Workers przewodnik"

        canonical="https://fotz.pl/blog/cloudflare-workers-kv-d1-r2-durable-objects-workers-ai-edge-2024"
      />
      <ArticleSchema
        title="Cloudflare Workers — KV, D1, R2, Durable Objects i Workers AI na edge 2024?"
        description="6 produktów Cloudflare (Workers/KV/D1/R2/Durable Objects/Workers AI) — V8 isolates, SQLite na edge, S3 bez egress, stateful WebSockets i AI inference na GPU."
        url="https://fotz.pl/blog/cloudflare-workers-kv-d1-r2-durable-objects-workers-ai-edge-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Cloudflare Workers", url: "https://fotz.pl/blog/cloudflare-workers-kv-d1-r2-durable-objects-workers-ai-edge-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Cloudflare Workers", url: "/blog/cloudflare-workers-kv-d1-r2-durable-objects-workers-ai-edge-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Cloudflare / Edge / Workers
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cloudflare Workers
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              KV, D1 (SQLite), R2 (S3 bez egress), Durable Objects (stateful WebSockets),
              Workers AI (Llama, SDXL, Whisper) i Pages Functions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Edge runtime", value: "Workers" },
                { label: "SQLite", value: "D1" },
                { label: "Bez egress", value: "R2" },
                { label: "AI na edge", value: "Workers AI" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 produktów Cloudflare — edge computing stack</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Workers, KV, D1, R2, Durable Objects i Workers AI —
              typ, storage i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Produkt</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Storage</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {cloudflareProducts.map((p, i) => (
                  <tr key={p.produkt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.produkt}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.storage}</td>
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

      <RelatedArticles currentArticleId="cloudflare-workers-kv-d1-r2-durable-objects-workers-ai-edge-2024" />
      <ContactSection />
    </Layout>
  );
}
