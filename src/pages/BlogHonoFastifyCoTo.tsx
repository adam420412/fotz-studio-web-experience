import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Hono i dlaczego jest idealny do edge computing?",
    answer: "Hono: ultra-lightweight web framework (Yusuke Wada, 2022). Nazwa: 'ogień' po japońsku. 14KB (minified+gzipped). Zero dependencies. Web Standards: Request/Response API (nie Express req/res). Działa na: Cloudflare Workers, Deno Deploy, Bun, Node.js, Vercel Edge, AWS Lambda@Edge, Fastly Compute. Hono routing: const app = new Hono(). app.get('/users', c => c.json({users})). app.post('/users', async c => {const body = await c.req.json(). return c.json(body, 201)}). app.get('/users/:id', c => c.json({id: c.req.param('id')})). Context (c): c.req — request (Request API). c.env — environment variables. c.json(data, status) — JSON response. c.text(text) — text response. c.html(html) — HTML response. c.redirect(url) — redirect. Middleware: app.use('*', middleware). Wbudowane: cors(), logger(), compress(), secureHeaders(), csrf(). hono/validator: zValidator(json, schema) — Zod validation. TypeScript: pełen type safety. Typing per route. Hono RPC: client() z typami. Type-safe client generowany z routes. jak tRPC ale REST-based. Zod OpenAPI: @hono/zod-openapi. OpenAPI schema generowany automatycznie. Hono JSX: jsx('element', ...) — server-side HTML rendering. Kiedy Hono: edge deployment. Ultra-performance. Lightweight API. Bun/Deno runtime. tRPC alternative.",
  },
  {
    question: "Fastify — co to jest i dlaczego jest szybszy od Express?",
    answer: "Fastify: szybki i niskopoziomowy web framework (Matteo Collina, Tomas Della Vecchia, 2016). Nadal Node.js. Benchmark: 30,000+ req/s (Express: 14,000 req/s). Dlaczego szybszy: JSON serialization (fast-json-stringify). Schema-based validation (ajv — JSON Schema). Route management (find-my-way — radix tree router). Pino logger (szybszy od Winston). Schema validation: fastify.route({method: 'POST', url: '/users', schema: {body: {type: 'object', properties: {name: {type: 'string'}, email: {type: 'string', format: 'email'}}, required: ['name', 'email']}, response: {201: {type: 'object', properties: {id: {type: 'number'}}}}}, handler: async (request, reply) => {...}}). TypeBox dla TypeScript: Type.Object({name: Type.String(), email: Type.String()}) zamiast JSON Schema. Plugin system: fastify.register(plugin, options). Każdy plugin ma własny scope (DI-like). fastify-plugin: wyłącz scope isolation. Lifecycle hooks: onRequest, preHandler, preSerialization, onSend, onResponse, onError. Dekoratory: fastify.decorate('db', prisma). fastify.decorateRequest('user', null). Fastify Swagger: @fastify/swagger. OpenAPI doc automatyczny. Fastify Auth: @fastify/jwt, @fastify/auth. Bearer token, cookie. Fastify vs Express: Fastify — schema validation, szybszy, TypeScript-friendly. Express — minimalistyczny, największy ekosystem, simple. Fastify dla: performance-critical. Schema-driven API. Fastify + TypeBox = świetna DX.",
  },
  {
    question: "Express.js w 2024 — czy jest jeszcze relevantny?",
    answer: "Express.js (2010): najstarzszy i nadal najpopularniejszy Node.js framework. 21+ milionów pobrań tygodniowo. 'Standard' przez lata. Express 5 (beta, 2024): async/await error handling. Brak require('./route')(app) — ESM. Routing.Route ulepszony. Lepsze TypeScript. Dlaczego nadal popularny: największy ekosystem middleware. Ogromna dokumentacja i zasoby. Większość tutoriali. Legacy projekty. Minimalistyczny — sam decydujesz o strukturze. Wady Express: brak schema validation (manualnie). Wolniejszy od Fastify. Brak TypeScript first. Express vs Fastify vs Hono: Express — legacy, max ekosystem. Fastify — szybki, schema, TypeScript. Hono — edge, ultra-light, Web standards. Middleware Express (popularne): body-parser (wbudowany w Express 4.16+). cors. helmet (security headers). morgan (logging). multer (file uploads). express-rate-limit. express-validator. Compression. Cookie-parser. Struktura Express projektu: routers/ (route files). controllers/ (request handlers). services/ (business logic). middleware/ (custom middleware). Express Generator: express --view=pug myapp (generator). Ale dziś lepiej ręcznie lub Template. Express i TypeScript: @types/express. ts-node lub tsx dla dev. Bun + Express: działa, ale Hono lepszy wybór dla Bun. Kiedy Express 2024: istniejące projekty. Nauka podstaw. Maximum flexibility. Brak potrzeby edge.",
  },
  {
    question: "REST API design best practices — wersjonowanie, błędy i dokumentacja?",
    answer: "REST API design principles: REST (Roy Fielding): stateless, cacheable, uniform interface. HTTP methods: GET (odczyt), POST (tworzenie), PUT (pełna aktualizacja), PATCH (częściowa), DELETE (usuwanie). Resource naming: /users (kolekcja), /users/:id (zasób). Liczba mnoga. lowercase. Hyphens. Kod statusu HTTP: 200 OK, 201 Created, 204 No Content. 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity. 500 Internal Server Error, 503 Service Unavailable. Odpowiedź błędów: RFC 7807 Problem Details. Content-Type: application/problem+json. {type, title, status, detail, instance}. Paginacja: Cursor-based (lepszy dla dużych danych): ?cursor=abc&limit=20. Offset-based: ?page=1&limit=20. Response: {data, meta: {total, page, limit, nextCursor}}. Filtrowanie i sortowanie: ?status=active&sort=createdAt:desc&fields=id,name. HATEOAS (optional): linki do powiązanych zasobów. {id: 1, _links: {self: '/users/1', posts: '/users/1/posts'}}. Rate limiting headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset. Retry-After. API versioning: URL: /api/v1/users (widoczna). Header: Api-Version: 1. Accept header: application/vnd.api.v1+json. Dokumentacja: OpenAPI (Swagger). AsyncAPI dla event-driven. Postman Collections. Redoc / Swagger UI.",
  },
  {
    question: "tRPC vs REST vs GraphQL — praktyczne porównanie dla full-stack TS?",
    answer: "Podsumowanie po omówieniu poszczególnych podejść w osobnych artykułach: REST API: dobrze znany. Tooling wszędzie. Works with any client. Wady: over/under-fetching. Ręczna synchronizacja typów (jeśli nie OpenAPI). GraphQL: elastyczne queries. Schema jako kontrakt. Wady: learning curve, N+1 problem (DataLoader), złożona konfiguracja. tRPC: type-safe bez codegen. Tylko TypeScript. Wady: tylko TS klienci. Brak REST protocol. Praktyczny wybór 2024 (full-stack TypeScript): Next.js + tRPC: T3 Stack. Prostsze mutations/queries. Type-safe end-to-end. Bez REST overhead. Next.js + REST (Route Handlers): gdy potrzebujesz zewnętrznych klientów. OpenAPI spec. Hono jako osobne API: lightweight. Cloudflare Workers. Hono RPC jako tRPC alternative. NestJS + REST: enterprise. Swagger automatyczny. Zewnętrzni klienci. NestJS + GraphQL: złożone relacje danych. Multiple teams. Subscriptions. Fastify + REST: performance. Simple API. schema validation. Mikroserwisy: każdy serwis = własne API. REST między serwisami. Message queue dla async. gRPC dla performance-critical. Decision checklist: Zewnętrzni klienci? REST lub GraphQL. Tylko TS? tRPC. Złożone relacje? GraphQL. Simple CRUD? REST + OpenAPI. Performance critical? Hono/Fastify. Enterprise structure? NestJS.",
  },
];

const backendFrameworks = [
  { framework: "Hono", rozmiar: "14KB", runtime: "Edge + Node + Bun + Deno", szybkosc: "Bardzo szybki", typescript: "Natywny", kiedy: "Edge computing, Cloudflare Workers, Bun API" },
  { framework: "Fastify", rozmiar: "~100KB", runtime: "Node.js", szybkosc: "2x szybszy od Express", typescript: "Dobry (TypeBox)", kiedy: "Performance, schema validation, REST API" },
  { framework: "Express 5", rozmiar: "~200KB", runtime: "Node.js", szybkosc: "Referencyjny", typescript: "Zewnętrzny (@types)", kiedy: "Legacy, nauka, max ekosystem, flexibility" },
  { framework: "NestJS", rozmiar: "Duży (DI overhead)", runtime: "Node.js (Express/Fastify)", szybkosc: "Wolniejszy startup", typescript: "Mandatory", kiedy: "Enterprise, mikrousługi, DI, strukturyzacja" },
  { framework: "Elysia (Bun)", rozmiar: "Mały", runtime: "Bun native", szybkosc: "Najszybszy (Bun)", typescript: "Natywny", kiedy: "Bun projekty, Eden type-safe client" },
  { framework: "Nitro (H3)", rozmiar: "Mały", runtime: "Node + Edge + Bun", szybkosc: "Szybki", typescript: "Dobry", kiedy: "Nuxt backend, universal deployment" },
];

export default function BlogHonoFastifyCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Hono, Fastify, Express | Fotz Studio"
        description="Hono (edge), Fastify (schema), Express 5, NestJS, Elysia (Bun) — porównanie Node.js frameworks, REST API best practices, kiedy co wybrać w 2024."
        canonicalUrl="https://fotz.pl/blog/hono-fastify-express-nodejs-backend-frameworks-co-wybrac-2024"

        keywords="Hono, Fastify, Express co to jest, Hono, Fastify, Express jak działa, Hono, Fastify, Express tutorial, Hono, Fastify, Express przykład, czym jest Hono, Fastify, Express, Hono, Fastify, Express dokumentacja, Hono, Fastify, Express przewodnik"

        canonical="https://fotz.pl/blog/hono-fastify-express-nodejs-backend-frameworks-co-wybrac-2024"
      />
      <ArticleSchema
        title="Hono, Fastify, Express — Node.js backend frameworks 2024, co wybrać?"
        description="6 Node.js backend frameworks (Hono/Fastify/Express/NestJS/Elysia/Nitro) — edge computing, schema validation, TypeScript, REST API best practices i kiedy co wybrać."
        url="https://fotz.pl/blog/hono-fastify-express-nodejs-backend-frameworks-co-wybrac-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Hono, Fastify, Express", url: "https://fotz.pl/blog/hono-fastify-express-nodejs-backend-frameworks-co-wybrac-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Hono, Fastify, Express", url: "/blog/hono-fastify-express-nodejs-backend-frameworks-co-wybrac-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Node.js / Backend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Node.js Backend Frameworks 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Hono dla edge, Fastify dla performance, Express dla ekosystemu
              i Elysia dla Bun — jak wybrać backend framework w 2024.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Edge (14KB)", value: "Hono" },
                { label: "Schema + speed", value: "Fastify" },
                { label: "Max ekosystem", value: "Express 5" },
                { label: "Bun native", value: "Elysia" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 Node.js backend frameworks</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Hono, Fastify, Express, NestJS, Elysia i Nitro — każdy framework
              optymalizuje inny aspekt: rozmiar, szybkość, TypeScript i ekosystem.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozmiar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Runtime</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Szybkość</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">TypeScript</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {backendFrameworks.map((f, i) => (
                  <tr key={f.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.rozmiar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.runtime}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.szybkosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.typescript}</td>
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

      <RelatedArticles currentArticleId="hono-fastify-express-nodejs-backend-frameworks-co-wybrac-2024" />
      <ContactSection />
    </Layout>
  );
}
