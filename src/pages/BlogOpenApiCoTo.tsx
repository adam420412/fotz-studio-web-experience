import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest OpenAPI i jak generować spec z kodu TypeScript?",
    answer: "OpenAPI (dawniej Swagger): standard opisu API REST. YAML lub JSON. Wersja 3.0 i 3.1 (JSON Schema kompatybilna). Opis: endpoints, parametry, request body, responses, auth, examples. Tooling: swagger-ui — interaktywna dokumentacja. Scalar — nowoczesna alternatywa dla Swagger UI. Redoc — czytelna dokumentacja. openapi-typescript — generuj TypeScript types z OpenAPI spec. Orval — generuj React Query / Axios hooks z OpenAPI. Dwa podejścia: Code-first (generate spec z kodu): Express + TSDoc -> OpenAPI. Hono Zod OpenAPI. FastAPI (Python) pattern dla TS. tsoa — TypeScript -> OpenAPI. NestJS @nestjs/swagger. Contract-first (spec najpierw, potem kod): piszesz YAML/JSON. Generujesz server stub + client. Lepsza kontrola nad API. Zod + OpenAPI: @asteasolutions/zod-to-openapi. Definiuj schema w Zod. Rejestruj jako OpenAPI components. Generuj spec automatycznie. z.object({name: z.string()}).openapi({example: {name: 'Adam'}}). Hono Zod OpenAPI: @hono/zod-openapi. app.openapi(route, handler). Automatyczna walidacja + generowanie spec. /doc endpoint z Scalar UI. Korzyści code-first: jeden source of truth. Zawsze aktualny spec. TypeScript + runtime walidacja.",
  },
  {
    question: "tRPC vs OpenAPI — kiedy wybrać co?",
    answer: "tRPC: end-to-end type safety bez schematu. TypeScript inference. Tylko TypeScript clients. Doskonały dla monorepo (Next.js full-stack). Brak interoperability z non-TS clients. Brak REST semantyki. Trudny do testowania z Postman. OpenAPI (z Zod): language-agnostic. REST standard. Swagger/Scalar UI. Generuj clients w dowolnym języku. Lepsza dla public API. Lepsza dla microservices (różne języki). tRPC-OpenAPI: @trpc/openapi package. Eksponuj tRPC jako REST + OpenAPI. Najlepsze z obu światów. Ale dodatkowa kompleksowość. GraphQL vs REST vs tRPC: GraphQL — elastyczne queries, N+1 problem, overkill dla prostego API. REST + OpenAPI — standard, language-agnostic, caching. tRPC — max DX dla TS monorepo, brak overhead. Kiedy OpenAPI: zewnętrzni konsumenci API. Mobile apps (iOS/Kotlin). Microservices różne języki. Public API z dokumentacją. Kiedy tRPC: wewnętrzny API w TS monorepo. Next.js full-stack. Szybki development bez schematu. Kiedy GraphQL: skomplikowane relacje danych. Mobile + web z różnymi potrzebami. Fragmenty danych. API Gateway pattern: OpenAPI spec jako kontrakt. API Gateway (Kong, AWS) waliduje request. Backend nie musi walidować. Zodios: klient HTTP z Zod schema. import {Zodios} from '@zodios/core'. Fully typed z OpenAPI spec. Alternatywa dla Axios + ręcznych types.",
  },
  {
    question: "Orval i openapi-typescript — generowanie klientów z OpenAPI?",
    answer: "openapi-typescript: generuj TypeScript types z OpenAPI spec. npx openapi-typescript openapi.yaml -o schema.ts. Generuje: paths interface. components.schemas. Czyste types (nie klasy). openapi-fetch: type-safe fetch z wygenerowanych types. import createClient from 'openapi-fetch'. const client = createClient({baseUrl: 'https://api.example.com'}). const {data, error} = await client.GET('/users/{id}', {params: {path: {id: 1}}}). Pełna type inference z OpenAPI spec. Orval: generuj React Query hooks, Axios, SWR. orval.config.ts: export default {api: {output: {mode: 'tags-split', target: 'src/api', schemas: 'src/api/model', client: 'react-query', httpClient: 'axios'}, input: {target: 'openapi.yaml'}}}. npx orval. Generuje: useGetUsers, useCreateUser hooks. Axios instance. TypeScript types. Auto-update przy zmianie spec. Swagger Codegen / OpenAPI Generator: generuj klientów w 30+ językach. Java, Python, Go, Ruby, PHP. Dla non-JS teams. msw-auto-mock: generuj MSW handlers z OpenAPI spec. Automatyczne mocki do testowania. Scalar: nowoczesna doc UI. @scalar/nextjs-api-reference. Beautiful API explorer. Dark mode, search, try-it-out. Lepszy od Swagger UI. Zastępuje Swagger UI w większości projektów. NestJS Swagger: @ApiProperty() decoratory. SwaggerModule.setup('/api', app, document). Automatyczne generowanie z decoratorów. Hono + Zod OpenAPI: najprostsze code-first setup dla TS backend.",
  },
  {
    question: "API versioning i backward compatibility — best practices?",
    answer: "Versioning strategie: URL versioning: /v1/users, /v2/users. Najprostsze. Najbardziej widoczne. Header versioning: Accept: application/vnd.api+json;version=2. Czystsze URL. Trudniejsze w testowaniu. Query param: /users?version=2. Prosta implementacja. Semantic Versioning dla API: MAJOR — breaking changes. MINOR — backward compatible. PATCH — bug fixes. Breaking changes: usunięcie pola. Zmiana typu pola (string -> int). Zmiana wymagalności (optional -> required). Zmiana semantyki endpoint. Non-breaking changes: dodanie opcjonalnego pola. Dodanie nowego endpoint. Dodanie nowej wartości enum (ostrożnie). Deprecation strategy: deprecation header. Sunset: data usunięcia. Changelog. Migracja guides. Zod i optional fields: z.object({name: z.string(), newField: z.optional(z.string())}). Additive changes są safe. Backward compatibility testing: consumer-driven contract testing. Pact — contract testing library. Consumer definiuje contract. Provider weryfikuje. Versionless API (alternatywa): GraphQL — klient pyta tylko o potrzebne pola. tRPC — versioning przez procedure names. Avoid global versioning. OpenAPI Diff: oasdiff narzędzie. Automatyczne wykrycie breaking changes. W CI/CD pipeline. Versioning w Next.js: route groups: (v1), (v2). Middleware: rewrite do odpowiedniej wersji. API evolution tips: expand, then contract. Dodaj nowe pola, potem deprecate stare. Grace period minimum 6 miesięcy.",
  },
  {
    question: "API dokumentacja — Scalar, Swagger UI, Redoc i Storybook?",
    answer: "Scalar: nowoczesna, piękna API dokumentacja. Open source. Built-in try-it-out. Dark mode. Code examples (curl, JS, Python, Go). Search. CDN: cdn.jsdelivr.net/npm/@scalar/api-reference. @scalar/nextjs-api-reference — Next.js integracja. @scalar/fastify-api-reference, @scalar/hono-api-reference. Swagger UI: klasyczny. Funkcjonalny ale przestarzały wygląd. Darmowy, open source. Trudna customizacja. Redoc: czytelna, trzykolumnowa. Read-only (brak try-it-out). Dobre dla dokumentacji public. Szybki rendering dużych spec. StopLight Elements: zaawansowane, enterprise. Try-it-out. Wbudowany. Postman: kolekcje requests. Collaboration. Monitoring. Mock servers. Newman — CLI dla CI. Insomnia: lekki Postman alternative. Open source core. GraphQL + REST. Hoppscotch: open source, web-based. Dokumentacja jako kod (Docs-as-Code): OpenAPI spec w repozytorium. CI generuje dokumentację. GitHub Pages lub własny hosting. Versioning dokumentacji z kodem. Best practices: przykłady dla każdego endpoint. Error response schemas. Authentication dokumentacja. Rate limiting info. Changelog. Storybook + API mocking: Storybook + MSW handlers. Mockuj API w komponentach. Argstypes dla API responses. Visual testing z różnymi stanami API. Readme-driven development: najpierw README. Opisz API przed implementacją. API contract jako spec.",
  },
];

const apiTools = [
  { narzedzie: "Hono Zod OpenAPI", typ: "Code-first (backend)", jezyk: "TypeScript", output: "OpenAPI spec + walidacja", kiedy: "Hono backend, auto-spec" },
  { narzedzie: "openapi-typescript", typ: "Spec-first (client)", jezyk: "TypeScript", output: "TypeScript types z spec", kiedy: "Generuj types z istniejącego OpenAPI" },
  { narzedzie: "Orval", typ: "Spec-first (client)", jezyk: "TypeScript", output: "React Query hooks + Axios", kiedy: "Generuj klienta React z OpenAPI" },
  { narzedzie: "tRPC-OpenAPI", typ: "Code-first (hybrid)", jezyk: "TypeScript", output: "REST + OpenAPI z tRPC", kiedy: "tRPC z external API compat" },
  { narzedzie: "Scalar", typ: "Dokumentacja UI", jezyk: "Agnostic", output: "Interaktywna doc UI", kiedy: "Nowoczesna alternatywa dla Swagger UI" },
  { narzedzie: "@asteasolutions/zod-to-openapi", typ: "Code-first (helper)", jezyk: "TypeScript", output: "OpenAPI spec z Zod schemas", kiedy: "Zod schema -> OpenAPI components" },
];

export default function BlogOpenApiCoTo() {
  return (
    <Layout>
      <SEOHead
        title="OpenAPI, Zod, tRPC vs REST, Orval i Scalar | Fotz Studio"
        description="OpenAPI spec generation z Zod i Hono, tRPC vs OpenAPI, orval + openapi-typescript (generuj React Query hooks), Scalar UI i API versioning — TypeScript 2024."
        canonicalUrl="https://fotz.pl/blog/openapi-zod-trpc-orval-scalar-dokumentacja-api-typescript-2024"

        keywords="OpenAPI, Zod, tRPC vs REST, Orval i Scalar co to jest, OpenAPI, Zod, tRPC vs REST, Orval i Scalar jak działa, OpenAPI, Zod, tRPC vs REST, Orval i Scalar tutorial, OpenAPI, Zod, tRPC vs REST, Orval i Scalar przykład, czym jest OpenAPI, Zod, tRPC vs REST, Orval i Scalar, OpenAPI, Zod, tRPC vs REST, Orval i Scalar dokumentacja, OpenAPI, Zod, tRPC vs REST, Orval i Scalar przewodnik"

        canonical="https://fotz.pl/blog/openapi-zod-trpc-orval-scalar-dokumentacja-api-typescript-2024"
      />
      <ArticleSchema
        title="OpenAPI, Zod, tRPC vs REST, Orval i Scalar — dokumentacja API TypeScript 2024?"
        description="6 narzędzi API (Hono Zod OpenAPI/openapi-typescript/Orval/tRPC-OpenAPI/Scalar/zod-to-openapi) — code-first, spec-first, generowanie klientów i dokumentacja."
        url="https://fotz.pl/blog/openapi-zod-trpc-orval-scalar-dokumentacja-api-typescript-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "OpenAPI TypeScript", url: "https://fotz.pl/blog/openapi-zod-trpc-orval-scalar-dokumentacja-api-typescript-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "OpenAPI TypeScript", url: "/blog/openapi-zod-trpc-orval-scalar-dokumentacja-api-typescript-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              API / Backend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OpenAPI, Zod i Dokumentacja API
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              OpenAPI spec z Zod, tRPC vs REST, Orval (generuj React Query hooks),
              Scalar UI i API versioning — TypeScript API design 2024.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Code-first spec", value: "Zod OpenAPI" },
                { label: "Generate hooks", value: "Orval" },
                { label: "Modern docs", value: "Scalar" },
                { label: "Type-safe client", value: "openapi-ts" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi OpenAPI dla TypeScript</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Hono Zod OpenAPI, openapi-typescript, Orval, tRPC-OpenAPI, Scalar i zod-to-openapi —
              typ, output i kiedy użyć.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Język</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Output</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {apiTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.jezyk}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.output}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.kiedy}</td>
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

      <RelatedArticles currentArticleId="openapi-zod-trpc-orval-scalar-dokumentacja-api-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
