import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest BullMQ i dlaczego job queues są ważne?",
    answer: "BullMQ: zaawansowana biblioteka job queue dla Node.js. Oparta na Redis. Następca Bull.js. Dlaczego job queues: operacje asynchroniczne poza request-response. Email sending, image processing, PDF generation. Nie blokuj HTTP response. Retry logic — automatyczne ponowienia. Scheduled jobs — crony w kodzie. Rate limiting — nie przeciąż zewnętrznych API. Instalacja: npm install bullmq ioredis. Tworzenie kolejki: import {Queue, Worker} from 'bullmq'. const connection = {host: 'localhost', port: 6379}. const emailQueue = new Queue('email', {connection}). Dodawanie zadań: await emailQueue.add('send-welcome', {userId: '123', email: 'user@example.com'}). Options: delay: 5000 (ms). priority: 1 (wyższy = wcześniej). attempts: 3 (retry). backoff: {type: 'exponential', delay: 1000}. removeOnComplete: 100 (zachowaj 100 ukończonych). removeOnFail: false. Worker: const worker = new Worker('email', async (job) => { await sendEmail(job.data.email, 'Welcome!'). return {sent: true} }, {connection, concurrency: 5}). worker.on('completed', (job, result) => console.log(job.id, result)). worker.on('failed', (job, err) => console.error(job.id, err)). Bull Dashboard (BullBoard): @bull-board/api + @bull-board/express. Wizualizacja kolejek. Retry zadań z UI. Monitorowanie. Innymi słowy — kolejki to jak asynchroniczne mikroserwisy wewnątrz monolitu.",
  },
  {
    question: "BullMQ — zaawansowane funkcje: priorytety, flows i rate limiting?",
    answer: "Priority queues: każde zadanie ma priority. Wyższy numer = niższy priorytet (jak Linux niceness). addBulk z różnymi priorytetami. const urgentQueue = new Queue('tickets', {defaultJobOptions: {priority: 1}}). await urgentQueue.add('ticket', data, {priority: 1}). Flows (Job graphs): zależności między zadaniami. import {FlowProducer} from 'bullmq'. const flow = new FlowProducer({connection}). await flow.add({name: 'send-email', queueName: 'email', data: {to: user.email}, children: [{name: 'generate-pdf', queueName: 'pdf', data: {invoiceId: '123'}}]}). Parent czeka na dzieci. Rate Limiter: worker z ratelimiter. limiter: {max: 100, duration: 60000} — 100 req/min. Throttling zewnętrznych API. Prevent 429 errors. Repeatable Jobs (Cron): await queue.add('daily-report', {}, {repeat: {cron: '0 8 * * *'}}). await queue.add('every-5min', {}, {repeat: {every: 5 * 60 * 1000}}). Zarządzanie repeatables. Sandboxed processors: osobny process per worker. Izolacja błędów. Lepsza dla CPU-intensive. processor: './worker-process.js'. Job Data size: nie przechowuj dużych danych w job. Referencja (ID do DB) zamiast danych. Redis nie jest bazą danych. Events: queue.on('waiting'), queue.on('active'). worker.on('progress') — job.updateProgress(50). QueueEvents.on('completed'). Testowanie BullMQ: jest + testcontainers Redis. Lub mockowanie Queue i Worker. Integration tests z prawdziwym Redis (docker).",
  },
  {
    question: "Redis jako backend dla BullMQ — konfiguracja i monitoring?",
    answer: "Redis dla BullMQ: ioredis pod spodem. Sentinel support dla HA. Cluster mode. TLS. Konfiguracja Redis: const connection = new IORedis({host: process.env.REDIS_HOST, port: 6379, password: process.env.REDIS_PASSWORD, maxRetriesPerRequest: null, enableReadyCheck: false}). maxRetriesPerRequest: null — wymagane przez BullMQ. Redis Cloud: Upstash Redis — serverless, per-request billing. Redis Enterprise. AWS ElastiCache (Redis). Dobry dla: serverless functions z BullMQ. Upstash + Vercel. BullMQ w Next.js: Route Handler do tworzenia zadań. Worker jako osobny proces (server.ts). Nie w Next.js serverless functions (long-running). Lub: Trigger.dev zamiast. Trigger.dev: managed job queue. Bez własnego Redis. Background jobs w Next.js bez infrastruktury. TypeScript natywny. Qstash (Upstash): serverless message queue. HTTP-based. Schedules. Delay. Bez Redis klienta. Inngest: background jobs + workflows. Event-driven. Zero infrastructure. TypeScript. Monitoring: BullBoard: @bull-board/express. /admin/queues. Metryki: zaległe, aktywne, ukończone, nieudane. Retry z UI. Prometheus exporter: bullmq-prometheus. Grafana dashboard. Alerty przy stuck jobs. Redis monitoring: Redis Commander, RedisInsight. Memori i eviction policy. allkeys-lru dla cache. noeviction dla queues.",
  },
  {
    question: "Inngest i Trigger.dev — managed background jobs bez Redis?",
    answer: "Inngest: event-driven background jobs. Bez własnego Redis/infrastruktury. TypeScript-first. Serverless compatible. Instalacja: npm install inngest. SDK: import {Inngest} from 'inngest'. const inngest = new Inngest({id: 'my-app'}). Function: const sendWelcomeEmail = inngest.createFunction({id: 'send-welcome-email'}, {event: 'user/signed.up'}, async ({event, step}) => { await step.run('send-email', async () => { await sendEmail(event.data.email) }). await step.sleep('wait-3-days', '3 days'). await step.run('send-followup', async () => { await sendFollowup(event.data.email) }) }). Steps: automatyczny retry per step. Durability — nie od początku. Widoczność stanu w dashboard. Trigger event: await inngest.send({name: 'user/signed.up', data: {email: user.email}}). Next.js integration: serve({client: inngest, functions: [sendWelcomeEmail]}) w /api/inngest. Inngest dev server: npx inngest-cli@latest dev. Dashboard lokalny. Trigger.dev: podobny do Inngest. Zadania jak długorunning funktory. await wait(). await io.runTask(). PostgreSQL jako backend. Self-hosted opcja. Temporal.io: bardziej zaawansowany. Workflow orchestration. Durable execution. Go/Java/Python/TS SDK. Dla złożonych, długorunning workflows. Cadence (Uber): poprzednik Temporal. Workflow patterns: Fire and forget. Request-response z polling. Saga compensation. Parallel fan-out. State machine workflow. Kiedy BullMQ vs Inngest: BullMQ — pełna kontrola, Redis available. Inngest — serverless, nie chcesz Redis.",
  },
  {
    question: "Praktyczne zastosowania job queues — email, image processing i raporty?",
    answer: "Email sending: transactional emails (welcome, invoice). Nie blokuj HTTP response. addJob('send-email', {to, subject, template, data}). Worker wysyła przez Resend/Nodemailer. Retry przy błędzie SMTP. Image processing: upload -> S3 -> queue job. Worker: pobranie z S3. sharp: resize, webp, optimize. Upload back to S3. Powiadom frontend (WebSocket/polling). PDF generation: invoice -> queue. Puppeteer server-side. @react-pdf/renderer. Zapisz do S3. Email z linkiem. Background sync: sync z zewnętrznym API. Schedule co 15 min. Rate limit: nie przeciążaj external. Store results w bazie. Powiadomienia push: WebPush API. Scheduled notifications. Batch sends. Delayed: send after 1h idle. Web scraping: kolejka URL do scrape. Rate limit na domain. Retry 429. Store results. Data processing: ETL jobs. Import CSV. Transformacja. Validation. Save do DB. Report generation: complex aggregations. Scheduled (cron midnight). Cache results. Notify user gdy gotowe. Webhooks reliability: retry przy błędzie. Exponential backoff. Exactly-once semantics: idempotency key. Redis SETNX. Job data zawiera idempotencyKey. Worker sprawdza przed wykonaniem. Monitoring SLAs: queue depth alert. Job age alert. Failed rate alert. Grafana + Prometheus + BullMQ stats. Dead Letter Queue: po max retries. Manual review. Re-queue lub discard. Alerting przy DLQ.",
  },
];

const queueSolutions = [
  { rozwiazanie: "BullMQ", backend: "Redis", hosting: "Self-hosted", kiedy: "Pełna kontrola, Redis available, complex workflows" },
  { rozwiazanie: "Inngest", backend: "Managed (Inngest)", hosting: "SaaS + self-hosted", kiedy: "Serverless, Next.js, zero Redis infra" },
  { rozwiazanie: "Trigger.dev", backend: "PostgreSQL", hosting: "SaaS + self-hosted", kiedy: "Event-driven, self-hosted opcja" },
  { rozwiazanie: "Qstash (Upstash)", backend: "Redis + HTTP", hosting: "SaaS (Upstash)", kiedy: "Serverless, Vercel, HTTP-based queue" },
  { rozwiazanie: "Temporal.io", backend: "Temporal server", hosting: "Self-hosted/Cloud", kiedy: "Long-running workflows, saga patterns" },
  { rozwiazanie: "pg-boss", backend: "PostgreSQL", hosting: "Self-hosted (Postgres)", kiedy: "Postgres-only, prostsze niż BullMQ" },
];

export default function BlogBullmqCoTo() {
  return (
    <Layout>
      <SEOHead
        title="BullMQ, Inngest i job queues | Fotz Studio"
        description="BullMQ (Redis queue, priority, flows, rate limiter), Inngest (serverless background jobs), Trigger.dev, Qstash i Temporal — asynchroniczne zadania w…"
        canonical="https://fotz.pl/blog/bullmq-inngest-job-queues-background-jobs-nodejs-nextjs-2024"

        keywords="BullMQ, Inngest i job queues co to jest, BullMQ, Inngest i job queues jak działa, BullMQ, Inngest i job queues tutorial, BullMQ, Inngest i job queues przykład, czym jest BullMQ, Inngest i job queues, BullMQ, Inngest i job queues dokumentacja, BullMQ, Inngest i job queues przewodnik"

        canonical="https://fotz.pl/blog/bullmq-inngest-job-queues-background-jobs-nodejs-nextjs-2024"
      />
      <ArticleSchema
        title="BullMQ, Inngest i job queues — background jobs w Node.js Next.js 2024?"
        description="6 rozwiązań job queue (BullMQ/Inngest/Trigger.dev/Qstash/Temporal/pg-boss) — Redis, managed queues, priority, flows, rate limiting i praktyczne zastosowania."
        url="https://fotz.pl/blog/bullmq-inngest-job-queues-background-jobs-nodejs-nextjs-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "BullMQ i Job Queues", url: "https://fotz.pl/blog/bullmq-inngest-job-queues-background-jobs-nodejs-nextjs-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "BullMQ i Job Queues", url: "/blog/bullmq-inngest-job-queues-background-jobs-nodejs-nextjs-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Node.js / Queues / Background Jobs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              BullMQ i Job Queues w Node.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              BullMQ (Redis, priority, flows, rate limiter), Inngest (serverless),
              Trigger.dev i Temporal — background jobs poza request-response.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Redis queue", value: "BullMQ" },
                { label: "Serverless", value: "Inngest" },
                { label: "HTTP queue", value: "Qstash" },
                { label: "Workflows", value: "Temporal" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 rozwiązań job queue — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              BullMQ, Inngest, Trigger.dev, Qstash, Temporal i pg-boss —
              backend, hosting i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozwiązanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Backend</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Hosting</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {queueSolutions.map((q, i) => (
                  <tr key={q.rozwiazanie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{q.rozwiazanie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{q.backend}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{q.hosting}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{q.kiedy}</td>
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

      <RelatedArticles currentArticleId="bullmq-inngest-job-queues-background-jobs-nodejs-nextjs-2024" />
      <ContactSection />
    </Layout>
  );
}
