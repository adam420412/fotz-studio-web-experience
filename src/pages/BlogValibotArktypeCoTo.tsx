import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Valibot — mała alternatywa dla Zod w TypeScript?",
    answer: "Valibot: modular schema validation. Fabian Hiller. Bundle-size first. Tree-shakeable. Instalacja: npm install valibot. Modularne importy: import {object, string, number, email, minLength, parse, safeParse} from 'valibot'. Schemat: const UserSchema = object({name: string([minLength(2)]), email: string([email()]), age: number()}). Parsowanie: const user = parse(UserSchema, input). Rzuca ValiError. safeParse: const result = safeParse(UserSchema, input). result.success ? result.output : result.issues. Bundle size: Zod v3: ~14KB (treeshake: ~8KB). Valibot: ~1KB treeshaken! Każdy validator osobno importowany. Tylko to co używasz. TypeScript: type User = InferOutput typeof UserSchema. InferInput — przed transformacją. InferOutput — po. Transformacje: transform(string(), (val) => val.trim()). coerce(number(), Number) — konwertuj typy. optional(string()) — undefined ok. nullable(string()) — null ok. Nested: object z nested object. array(string()). tuple([string(), number()]). union([literal('a'), literal('b')]). Async: parseAsync, safeParseAsync. Asynchroniczne validatory. Baza danych sprawdzenie. Errors: ValiError. issues tablica. path dla nested. message — human readable. i18n messages: setGlobalConfig({lang: 'pl'}). Własne wiadomości błędów. Pipy: pipe(string(), email(), maxLength(255)). Kompozycja walidatorów. Custom: custom((val) => val > 0, 'Must be positive'). Elastyczne. Kiedy Valibot: bundle size critical. Edge functions. Wiele schema parsowania. Zod kompatybilność: nie 100% (inne API).",
  },
  {
    question: "ArkType — runtime type inference i fastest validator?",
    answer: "ArkType: TypeScript-syntax schema validation. Matt Portner. Składnia jak TypeScript. Najszybszy validator (benchmarki 2024). Instalacja: npm install arktype. Podstawy: import {type} from 'arktype'. const User = type({name: 'string', age: 'number', email: 'string.email', role: '\"admin\" | \"user\"'}). Syntax: string, number, boolean — proste typy. 'string > 0' — walidacja. '\"literal\"' — literal type. 'string | number' — union. 'string[]' — tablica. 'string | null' — nullable. Parsowanie: const result = User(input). result instanceof type.errors ? handleErrors() : useData(result). TypeScript: type UserType = typeof User.infer. Identyczne z definicją. Wydajność: ArkType 10-100x szybszy niż Zod dla prostych typów. JIT compilation schematu. Zod w porównaniu wolniejszy dla hot path. Zaawansowane: Morph (transform): type('string').pipe(s => s.trim()). Optional: 'string?'. Default: type({x: 'number = 0'}). Generics: type T extends type.Any. Parametryzowane schematy. narrow (refinement): .narrow((val, ctx) => { if (val < 0) return ctx.error('Must be positive') }). Date: 'Date'. instanceof: type('instanceof', MyClass). Intersection: type('string & /^[a-z]+$/') — regex. Errors: type.errors — ArkTypeError[]. message concatenated. ArkErrors.summary — czytelne. Kiedy ArkType: performance-critical parsowanie. TypeScript-like syntax preferowany. Nowe projekty. vs Zod: Zod — większy ekosystem. ArkType — szybszy, TypeScript syntax.",
  },
  {
    question: "TypeBox — JSON Schema compatible validator?",
    answer: "TypeBox: Sincerity.io. JSON Schema + TypeScript types. Generuje JSON Schema. Runtime validation. Fast. Instalacja: npm install @sinclair/typebox. import {Type, Static} from '@sinclair/typebox'. Schematy: const User = Type.Object({name: Type.String({minLength: 2}), age: Type.Integer({minimum: 0}), email: Type.String({format: 'email'}), tags: Type.Array(Type.String())}). TypeScript: type User = Static typeof User. Kompiluje do JSON Schema. Walidacja: import {TypeCompiler} from '@sinclair/typebox/compiler'. const C = TypeCompiler.Compile(User). C.Check(value) — boolean. C.Errors(value) — iterator błędów. Lub Value.Check(User, input) — wolniejszy ale bez compile. JSON Schema output: Type.Object(schema) generuje { type: 'object', properties: {...}, required: [...] }. Użyj z Ajv, Fastify, etc. Fastify integracja: Fastify używa JSON Schema natively. TypeBox + Fastify = type-safe routes. schema: {body: User} — automatyczna walidacja. Swagger/OpenAPI: typebox-json-schema. Generuj dokumentację z schematu. Type.Intersect: intersection typów. Type.Union: union. Type.Literal('admin'). Type.Enum(RoleEnum). Transformer: Value.Transform(schema). from/to transformacje. Optional i Default: Type.Optional(Type.String()). Type.Default('value'). Ajv + TypeBox: ajv.validate(User, input). JSON Schema ekosystem. ajv-formats dla email, uri, etc. Gdy TypeBox: Fastify backend. JSON Schema potrzebny. OpenAPI generowanie. Nie-React środowisko. vs Zod: TypeBox — JSON Schema, Fastify. Zod — React/Next.js ekosystem.",
  },
  {
    question: "Zod v4 — co nowego i jak migrować?",
    answer: "Zod v4 (2025): przepisany core. Szybszy. Mniejszy. Nowe API. Instalacja: npm install zod@4. Breaking changes: ZodError.issues (nie errors). ZodError.format() — zmieniony output. z.string().min() — wiadomości zmienione. z.object().extend() — nowy syntax. z.discriminatedUnion — ulepszone. Co nowego: zod/mini — mały bundle (jak Valibot). z.meta() — custom metadata. z.registry() — globalne rejestrowanie. z.file() — File type. z.promise() — ulepszone. z.transform() ulepszone. Superfast parsing: benchmark 5-20x szybszy niż v3. JIT compilation. Memoizacja schematu. z.infer wyniki lepsze. Zod Mini: import {z} from 'zod/mini'. Analogiczny do Valibot (tree-shakeable). z.parse vs. parse(schema, value). Małe bundle dla edge. Migracja z v3: npm install zod@4. npx zod-codemod — automatyczna migracja. Sprawdź: .errors -> .issues. Strict mode: z.strictObject() — zamiast .strict(). Superstructure: z.interface() — openapi friendly. Interoperability: Zod + Valibot: @valibot/to-json-schema. Różne narzędzia łącz. Zod -> OpenAPI: zod-to-json-schema. Zod -> GraphQL: potterlogic/nexus-zod. Zod vs Valibot vs ArkType 2024: Zod — ekosystem, familiar API. Valibot — mały bundle. ArkType — szybki, TypeScript syntax. TypeBox — JSON Schema compat. Wybierz: Zod dla większości. Valibot/ArkType dla edge/performance.",
  },
  {
    question: "Superstruct i Yup — starsze biblioteki i kiedy nadal używać?",
    answer: "Superstruct: Ianstormtaylor. Małe (~3KB). Customizable. Instalacja: npm install superstruct. import {object, string, number, validate, is, assert} from 'superstruct'. const User = object({name: string(), age: number()}). validate(User, input) — [error, data]. is(input, User) — boolean. assert(input, User) — rzuć. Customization: define('email', (val) => typeof val === 'string' && val.includes('@')). Coercion: coerce(Date, string(), val => new Date(val)). Kiedy Superstruct: starsze projekty. Minimalistyczny. Brak overhead. Nie rośnie jak Zod. Yup: Jquense. API jak Joi. React/Formik ecosystem. Instalacja: npm install yup. const schema = yup.object({name: yup.string().required().min(2), age: yup.number().min(0), email: yup.string().email().required()}). schema.validate(input) — Promise. schema.validateSync(input). schema.isValid(input) — boolean. Yup + Formik: validationSchema={schema}. Starszy pattern. React Hook Form też obsługuje. Async: yup.string().test('unique', 'Email taken', async val => {return await checkEmail(val)}). Joi: Hapi ecosystem. Node.js server validation. Kompletny. Ale duży bundle (25KB). Nie TypeScript-first. Kiedy Yup: legacy Formik code. Migruj do RHF + Zod. Zod + React Hook Form = 2024 standard. Formik nadal używany ale nie polecany. Migracja Yup -> Zod: @hookform/resolvers obsługuje oba. Stopniowa migracja. Schemat per schemat. Przyszłość: Zod dominuje 2024. Valibot rośnie szybko. ArkType niszowy ale rośnie. Yup/Superstruct: maintenance mode.",
  },
];

const validationLibraries = [
  { biblioteka: "Zod v4", bundle: "~8KB (treeshaken)", kiedy: "Standard — ekosystem, React, Next.js, tRPC" },
  { biblioteka: "Valibot", bundle: "~1KB (per validator)", kiedy: "Edge functions, bundle size critical, tree-shake" },
  { biblioteka: "ArkType", bundle: "~11KB", kiedy: "Performance-critical, TypeScript-like syntax" },
  { biblioteka: "TypeBox", bundle: "~15KB", kiedy: "Fastify backend, JSON Schema potrzebny, OpenAPI" },
  { biblioteka: "Yup", bundle: "~12KB", kiedy: "Legacy Formik — migruj do Zod+RHF" },
  { biblioteka: "Superstruct", bundle: "~3KB", kiedy: "Minimalistyczny, customizable, starsze projekty" },
];

export default function BlogValibotArktypeCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Valibot, ArkType, TypeBox i Zod v4 | Fotz Studio"
        description="Schema validation TypeScript 2024: Valibot (1KB tree-shakeable), ArkType (najszybszy), TypeBox (JSON Schema + Fastify), Zod v4 (nowy core), Yup i…"
        canonicalUrl="https://fotz.pl/blog/valibot-arktype-typebox-zod-v4-schema-validation-typescript-2024"

        keywords="Valibot, ArkType, TypeBox i Zod v4 co to jest, Valibot, ArkType, TypeBox i Zod v4 jak działa, Valibot, ArkType, TypeBox i Zod v4 tutorial, Valibot, ArkType, TypeBox i Zod v4 przykład, czym jest Valibot, ArkType, TypeBox i Zod v4, Valibot, ArkType, TypeBox i Zod v4 dokumentacja, Valibot, ArkType, TypeBox i Zod v4 przewodnik"

        canonical="https://fotz.pl/blog/valibot-arktype-typebox-zod-v4-schema-validation-typescript-2024"
      />
      <ArticleSchema
        title="Valibot, ArkType, TypeBox i Zod v4 — schema validation TypeScript 2024?"
        description="6 bibliotek schema validation (Zod v4/Valibot/ArkType/TypeBox/Yup/Superstruct) — bundle size, TypeScript, JSON Schema, performance i kiedy wybrać w 2024."
        url="https://fotz.pl/blog/valibot-arktype-typebox-zod-v4-schema-validation-typescript-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Schema Validation TypeScript", url: "https://fotz.pl/blog/valibot-arktype-typebox-zod-v4-schema-validation-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-lime-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Schema Validation 2024", href: "/blog/valibot-arktype-typebox-zod-v4-schema-validation-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-lime-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / Validation / Schema
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schema Validation 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Valibot (1KB tree-shakeable), ArkType (najszybszy),
              TypeBox (JSON Schema), Zod v4 (nowy core) i porównanie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "1KB", value: "Valibot" },
                { label: "Najszybszy", value: "ArkType" },
                { label: "JSON Schema", value: "TypeBox" },
                { label: "Ekosystem", value: "Zod v4" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek schema validation — bundle i kiedy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zod v4, Valibot, ArkType, TypeBox, Yup i Superstruct —
              bundle size i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {validationLibraries.map((v, i) => (
                  <tr key={v.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{v.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{v.bundle}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{v.kiedy}</td>
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
