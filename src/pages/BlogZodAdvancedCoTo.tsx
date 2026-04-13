import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Zod i dlaczego jest standardem walidacji w TypeScript?",
    answer: "Zod: TypeScript-first schema validation. Runtime walidacja z pełnym type inference. Brak powtórzenia typów — jeden schema = typy + walidacja. Instalacja: npm install zod. Podstawy: import {z} from 'zod'. const UserSchema = z.object({name: z.string(), age: z.number().min(0).max(150), email: z.string().email(), role: z.enum(['admin', 'user', 'guest'])}). type User = z.infer(UserSchema). const result = UserSchema.safeParse(data). result.success: result.data lub result.error. Zalety nad ręcznymi typami: Walidacja runtime (np. dane z API, formularze). Type inference — nie piszesz typów ręcznie. Kompozycyjność schematów. Czytelne komunikaty błędów. Integracje: react-hook-form + zodResolver. Vercel AI SDK (generateObject). tRPC (input validation). Prisma (query params). Drizzle (insert schema). Zod vs Yup: Zod — TypeScript-first, lepszy type inference. Yup — starsza, mniej TypeScript-friendly. Zod vs io-ts: Zod — prostszy API. io-ts — czysto funkcyjny (fp-ts). Zod vs Valibot: Valibot — mniejszy bundle (3KB vs 13KB). Zod — bardziej popularny, więcej integracji. Parse nie validate: Zod.parse() rzuca przy błędzie. safeParse() bezpieczna wersja. parseAsync() dla async refine.",
  },
  {
    question: "Zaawansowane typy Zod — discriminated unions, branded types i transforms?",
    answer: "Discriminated Union: const ShapeSchema = z.discriminatedUnion('type', [z.object({type: z.literal('circle'), radius: z.number()}), z.object({type: z.literal('rect'), width: z.number(), height: z.number()})]). Lepsza wydajność niż z.union() — sprawdza discriminant key. Branded Types (Nominal typing): const UserId = z.string().uuid().brand('UserId'). type UserId = z.infer(typeof UserId). function getUser(id: UserId) {...}. getUser('not-branded-string') — TypeScript błąd! Różne ID types nie są wymienne. Brand nie wpływa na runtime — tylko TypeScript. Transforms: z.string().transform(s => s.trim().toLowerCase()). z.string().transform(s => parseInt(s, 10)). z.preprocess(val => String(val), z.string()). TransformSchema.._input vs ._output — różne typy wejścia i wyjścia. Coerce: z.coerce.number() — konwertuje string do number. z.coerce.date() — konwertuje string do Date. Przydatne dla form data (wszystko string). Intersection: const A = z.object({a: z.string()}). const B = z.object({b: z.number()}). const AB = z.intersection(A, B). lub A.merge(B) — łącz obiekty. Partial i Required: UserSchema.partial() — wszystkie pola opcjonalne. UserSchema.required() — wszystkie wymagane. UserSchema.partial({name: true}) — tylko name opcjonalne. Pick i Omit: UserSchema.pick({name: true, email: true}). UserSchema.omit({password: true}).",
  },
  {
    question: "Refinements i custom validation w Zod?",
    answer: "Refine — custom walidacja: z.string().refine(s => s.startsWith('https'), {message: 'Must start with https'}). z.number().refine(n => n % 2 === 0, 'Must be even'). Async refine: z.string().refine(async email => await checkEmailExists(email), 'Email already taken'). parseAsync() dla async refine. superRefine — wielokrotne błędy: z.object({password: z.string(), confirm: z.string()}).superRefine(({password, confirm}, ctx) => { if (password !== confirm) { ctx.addIssue({code: z.ZodIssueCode.custom, message: 'Passwords must match', path: ['confirm']}) } }). Walidacja warunkowa: z.discriminatedUnion lub z.union dla różnych kształtów danych. businessHours.superRefine oparty na dayOfWeek. Wzorzec: schema z refine per field. Custom error messages: z.string().min(8, {message: 'Hasło musi mieć min. 8 znaków'}). z.string().email('Nieprawidłowy email'). ZodError format: error.errors — tablica ZodIssue. issue.path — ścieżka do pola. issue.message — komunikat. issue.code — typ błędu. flatten(): const flat = error.flatten(). flat.fieldErrors — per field. flat.formErrors — globalne błędy. format(): const formatted = error.format(). nested errors. Custom ZodErrorMap: z.setErrorMap(customErrorMap). Globalne custom messages. Internacjonalizacja (i18n) błędów. Pipe: z.string().pipe(z.coerce.number()) — transform z walidacją.",
  },
  {
    question: "Zod z React Hook Form, tRPC i API validation?",
    answer: "React Hook Form + Zod: npm install react-hook-form @hookform/resolvers. const schema = z.object({email: z.string().email(), password: z.string().min(8)}). const {register, handleSubmit, formState} = useForm({resolver: zodResolver(schema)}). formState.errors.email.message. Automatyczne type safety w form submit. TypeScript: SubmitHandler(z.infer(typeof schema)). tRPC + Zod input: publicProcedure.input(z.object({userId: z.string().uuid()})).query(async ({input}) => { return db.user.findUnique({where: {id: input.userId}}) }). Walidacja na poziomie procedury. Błędy walidacji jako TRPCError. API Route validation (Next.js): export async function POST(req: Request) { const body = await req.json(). const parsed = CreateUserSchema.safeParse(body). if (!parsed.success) { return Response.json({errors: parsed.error.flatten()}, {status: 400}) } const user = await createUser(parsed.data) }. Prisma + Zod: import {createInsertSchema, createSelectSchema} from 'drizzle-zod'. lub prisma-zod-generator. Automatyczne schema z modelu DB. Environment variables: import {createEnv} from '@t3-oss/env-nextjs'. env({server: {DATABASE_URL: z.string().url()}, client: {NEXT_PUBLIC_API_URL: z.string().url()}}). Walidacja env przy starcie. Nie zapomnisz o zmiennej env. URL search params: const paramsSchema = z.object({page: z.coerce.number().default(1), q: z.string().optional()}). paramsSchema.parse(Object.fromEntries(searchParams)).",
  },
  {
    question: "Zaawansowane wzorce Zod — lazy, recursive i schema composition?",
    answer: "Recursive schemas (JSON): type Json = string | number | boolean | null | Json[] | {[key: string]: Json}. const JsonSchema: z.ZodType(Json) = z.lazy(() => z.union([z.string(), z.number(), z.boolean(), z.null(), z.array(JsonSchema), z.record(JsonSchema)])). lazy() dla cyklicznych referencji. Tree/nested struktura: const CategorySchema = z.object({id: z.number(), name: z.string(), children: z.array(z.lazy(() => CategorySchema)).optional()}). Record schema: z.record(z.string(), z.number()) — {[key: string]: number}. z.record(z.enum(['a', 'b']), z.string()) — tylko konkretne klucze. Map i Set: z.map(z.string(), z.number()). z.set(z.string()). Tuple: z.tuple([z.string(), z.number(), z.boolean()]) — fixed-length array. rest() dla dodatkowych elementów. Schema extension: const BaseSchema = z.object({id: z.string(), createdAt: z.date()}). const UserSchema = BaseSchema.extend({name: z.string(), email: z.string().email()}). extend() — nie mutuje oryginalnego. Schema registry pattern: Map(schemaKey => ZodSchema). Dynamiczna walidacja per type. Serializable schemas. ZodType utility: z.ZodType(T) — dla generic schemas. Infer nested: type UserWithPosts = z.infer(typeof UserWithPostsSchema). Default values: z.string().default('anonymous'). z.number().default(0). z.object().default({}) — parse pusty object. Catch: z.number().catch(0) — default przy błędzie zamiast throw. Optional vs Nullable vs default: optional() — undefined ok. nullable() — null ok. default() — zastąp undefined. nullish() — null i undefined ok.",
  },
];

const zodFeatures = [
  { feature: "z.discriminatedUnion()", kategoria: "Typy", zastosowanie: "Union z discriminant key — lepsza wydajność niż z.union()" },
  { feature: ".brand('UserId')", kategoria: "Branded types", zastosowanie: "Nominal typing — UserId nie jest string (TypeScript-only)" },
  { feature: ".transform(fn)", kategoria: "Transformacja", zastosowanie: "Konwersja wartości — string to Date, trim, lowercase" },
  { feature: ".refine(fn, msg)", kategoria: "Custom validation", zastosowanie: "Własna walidacja — async, cross-field (superRefine)" },
  { feature: "z.lazy(() => schema)", kategoria: "Recursive", zastosowanie: "Cykliczne struktury — JSON, drzewo kategorii" },
  { feature: ".pipe(schema)", kategoria: "Kompozycja", zastosowanie: "Chain schematów — coerce + validate w jednym" },
];

export default function BlogZodAdvancedCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Zod zaawansowany | Fotz Studio"
        description="Zod zaawansowany: discriminated unions, branded types (nominal typing), transforms, refine, superRefine, z.lazy (recursive), React Hook Form, tRPC i env…"
        canonicalUrl="https://fotz.pl/blog/zod-zaawansowany-discriminated-unions-branded-types-transforms-typescript-2024"

        keywords="Zod zaawansowany co to jest, Zod zaawansowany definicja, czym jest Zod zaawansowany, Zod zaawansowany w marketingu, Zod zaawansowany przykłady, jak działa Zod zaawansowany, Zod zaawansowany strategia"

        canonical="https://fotz.pl/blog/zod-zaawansowany-discriminated-unions-branded-types-transforms-typescript-2024"
      />
      <ArticleSchema
        title="Zod zaawansowany — discriminated unions, branded types, transforms i recursive schemas TypeScript 2024?"
        description="6 zaawansowanych wzorców Zod (discriminatedUnion/brand/transform/refine/lazy/pipe) — React Hook Form, tRPC, env validation, Prisma/Drizzle i schema composition."
        url="https://fotz.pl/blog/zod-zaawansowany-discriminated-unions-branded-types-transforms-typescript-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Zod zaawansowany", url: "https://fotz.pl/blog/zod-zaawansowany-discriminated-unions-branded-types-transforms-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-fuchsia-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Zod zaawansowany", href: "/blog/zod-zaawansowany-discriminated-unions-branded-types-transforms-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-fuchsia-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / Zod / Walidacja
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zod — zaawansowane wzorce
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Discriminated unions, branded types (nominal typing), transforms, refine,
              recursive schemas (z.lazy), React Hook Form, tRPC i env validation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Nominal typing", value: ".brand()" },
                { label: "Custom validation", value: ".refine()" },
                { label: "Recursive", value: "z.lazy()" },
                { label: "Transforms", value: ".transform()" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 zaawansowanych wzorców Zod</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              discriminatedUnion, brand, transform, refine, lazy i pipe —
              kategoria i zastosowanie w produkcyjnych aplikacjach TypeScript.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Feature</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kategoria</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                </tr>
              </thead>
              <tbody>
                {zodFeatures.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 font-mono text-xs">{f.feature}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.kategoria}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.zastosowanie}</td>
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

      <RelatedArticles currentArticleId="zod-zaawansowany-discriminated-unions-branded-types-transforms-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
