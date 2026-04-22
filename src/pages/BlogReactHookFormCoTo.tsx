import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest React Hook Form i dlaczego jest lepszy od Formik?",
    answer: "React Hook Form (RHF): biblioteka formularzy dla React (Bluebill1049, 2019). Filozofia: uncontrolled inputs z register(). Minimalny re-render. Bez Provider. Podstawowe użycie: const {register, handleSubmit, formState: {errors}} = useForm(). input {...register('email', {required: true, pattern: EMAIL_REGEX})}. handleSubmit(data => console.log(data)). Dlaczego lepszy od Formik: Formik: controlled inputs -> re-render przy każdym keystroke. RHF: ref-based -> re-render tylko przy submit/błędzie. Bundle size: RHF 9KB vs Formik 15KB. Performance: RHF zdecydowanie szybszy dla dużych formularzy. API: RHF prostszy (register pattern). Formik: values, touched, handleChange — verbose. TypeScript: RHF natywny TS support. Formik: mniej friendly. RHF zaawansowane: useController — controlled component API. Controller component — dla UI library (shadcn/ui, MUI). useFieldArray — dynamiczne listy. watch() — obserwuj pola. setValue / getValues / reset. trigger() — manualna walidacja. useFormContext — dostęp przez Context w zagnieżdżonych komponentach. FormProvider — provider dla useFormContext. Mode: onChange/onBlur/onSubmit/all — kiedy walidować. shouldFocusError — focus na pierwszym błędzie. Resolver — zewnętrzna walidacja (Zod, Yup, Joi). RHF + shadcn/ui: Form, FormField, FormItem, FormLabel, FormControl, FormMessage — wbudowana integracja.",
  },
  {
    question: "Zod — runtime schema validation i TypeScript type inference?",
    answer: "Zod: schema-first TypeScript validation library (Colin McDonnell, 2020). Type-safe: schema generuje TypeScript typy. Runtime validation: walidacja danych wejściowych w runtime. Zero dependencies. 8KB gzipped. Podstawy: z.string(), z.number(), z.boolean(), z.date(). z.string().min(3).max(50).email(). z.number().int().positive().min(0).max(100). z.object({name: z.string(), age: z.number()}). Type inference: const UserSchema = z.object({...}). type User = z.infer typeof UserSchema. Zaawansowane typy: z.union([z.string(), z.number()]). z.discriminatedUnion('type', [...]). z.array(z.string()).min(1). z.tuple([z.string(), z.number()]). z.record(z.string(), z.number()). z.enum(['a', 'b', 'c']). z.literal('admin'). z.optional(z.string()) = z.string().optional(). z.nullable(z.string()). z.default('default value'). Transformacje: z.string().transform(val => parseInt(val)). z.preprocess(val => String(val), z.string()). Custom validation: z.string().refine(val => val.includes('@'), 'Must contain @'). z.object({...}).superRefine((data, ctx) => {if (data.password !== data.confirm) ctx.addIssue(...)})). Error handling: schema.safeParse(data) — nie rzuca. result.success, result.data, result.error. schema.parse(data) — rzuca ZodError. z.ZodError.flatten() — flat error map. Zod vs Yup: Zod — TypeScript native, tree-shakeable, szybszy. Yup — starszy, async-first, addMethod dla extensji. Joi — server-side, Node.js, brak TS inference.",
  },
  {
    question: "React Hook Form + Zod resolver — kompletna integracja?",
    answer: "@hookform/resolvers: bridge między RHF a bibliotekami walidacji. zodResolver, yupResolver, joiResolver. import {zodResolver} from '@hookform/resolvers/zod'. const schema = z.object({email: z.string().email('Invalid email'), password: z.string().min(8, 'Min 8 chars'), age: z.number().min(18, 'Must be 18+')}). type FormData = z.infer typeof schema. const {register, handleSubmit, formState: {errors}} = useForm FormData ({resolver: zodResolver(schema), defaultValues: {email: '', age: 18}}). errors.email?.message — z Zod error messages. Złożone formularze: useFieldArray — dynamiczne pola. const {fields, append, remove, move} = useFieldArray({control, name: 'items'}). fields.map((field, i) => input {...register('items.${i}.name')}). MultiStep forms: FormProvider + useFormContext. Każdy step = osobny komponent. Shared form state przez Context. trigger(['field1', 'field2']) — waliduj tylko dany step. Conditional fields: watch('type') — obserwuj pole. Warunkowa rejestracja innych pól. useWatch — zoptymalizowany, bez re-render parenta. Async walidacja: z.string().refine(async email => checkEmailExists(email), 'Email taken'). mode: 'onBlur' dla async. Server errors: setError('email', {message: 'Already taken'}). clearErrors() po poprawce. Performance tips: defaultValues — zawsze podawaj. useFormContext zamiast prop drilling. formState.isSubmitting — loading state. reset() po sukcesie. resetField() dla konkretnego pola.",
  },
  {
    question: "Walidacja po stronie serwera — Zod w Next.js Server Actions i API routes?",
    answer: "Zod na serwerze: walidacja danych wejściowych przed przetwarzaniem. Server Actions (Next.js): 'use server'. const schema = z.object({name: z.string().min(1), email: z.string().email()}). async function createUser(formData: FormData) {'use server'. const raw = {name: formData.get('name'), email: formData.get('email')}. const parsed = schema.safeParse(raw). if (!parsed.success) return {errors: parsed.error.flatten().fieldErrors}. prisma.user.create({data: parsed.data})}. API Routes (Next.js): const body = await req.json(). const result = schema.safeParse(body). if (!result.success) return Response.json({errors: result.error.flatten()}, {status: 422}). Middleware validation: Zod w middleware.ts dla route-level. Shared schemas: schemas/ katalog. Importowane przez client i server. Unikaj duplikacji. Toto ze środowiskiem: env schema. z.object({DATABASE_URL: z.string().url(), NODE_ENV: z.enum(['development', 'production', 'test'])}). createEnv (@t3-oss/env-nextjs): bezpieczne zmienne środowiskowe. Zod z tRPC: input: z.object({...}) jako procedura input. Automatyczna walidacja. Type-safe client i server. Zod z Prisma: zod-prisma-types — generuj Zod schemas z Prisma schema. prisma-zod-generator. Eliminuje ręczne pisanie schemas.",
  },
  {
    question: "Alternatywne biblioteki — Valibot, Effect Schema, TypeBox i arktype?",
    answer: "Landscape bibliotek walidacji 2024: Zod: standard, ogromna adopcja, 8KB. Valibot: modular (tylko to co używasz), tree-shakeable, 1KB+. Prawie identyczne API co Zod. Szybszy. Effect Schema: część Effect ekosystemu (functional TypeScript). Bardzo potężny, ale złożony. TypeBox: JSON Schema + TypeScript. Generuje JSON Schema i typy jednocześnie. Używany w Fastify (TypeBox + Fastify = zero overhead). Arktype: holistyczny, runtime types, operator syntax. const User = type({name: 'string', age: 'number>0'}). Najbardziej ekspresywny syntax. Runtypes: functional style. Jak wybrać: Zod — standard, next-intl, tRPC, RHF. Valibot — bundle size krytyczny. TypeBox — Fastify API. Arktype — nowoczesny syntax. t3-oss/env: typesafe env vars. z.object({}) dla server + client envs. Valibot przykład: import {email, minLength, object, string, parse} from 'valibot'. const Schema = object({email: string([email()]), password: string([minLength(8)])}). Identyczne jak Zod ale tree-shakeable. SuperJSON: serialization (Date, Map, Set, undefined). Używany przez tRPC. Zod + SuperJSON = kompletne rozwiązanie. Konkluzja: Zod to de facto standard 2024. Valibot rosnąca popularność. TypeBox dla performance-critical API.",
  },
];

const formLibraries = [
  { biblioteka: "React Hook Form", rozmiar: "9KB", rerenders: "Minimalne (uncontrolled)", walidacja: "Resolver pattern", kiedy: "Standard — używaj domyślnie" },
  { biblioteka: "Formik", rozmiar: "15KB", rerenders: "Każdy keystroke (controlled)", walidacja: "validate / Yup schema", kiedy: "Legacy projekty, Yup preference" },
  { biblioteka: "TanStack Form", rozmiar: "7KB", rerenders: "Fine-grained reactive", walidacja: "Adapter pattern", kiedy: "Framework-agnostic, eksperymentalny" },
  { biblioteka: "Final Form", rozmiar: "5KB", rerenders: "Subscription-based", walidacja: "Ręczna / adapter", kiedy: "Complex dependencies, pub-sub" },
  { biblioteka: "Zod (schema)", rozmiar: "8KB", rerenders: "N/A (walidacja)", walidacja: "Runtime + TypeScript types", kiedy: "Standard do walidacji w RHF" },
  { biblioteka: "Valibot (schema)", rozmiar: "1KB+", rerenders: "N/A (walidacja)", walidacja: "Modular, tree-shakeable", kiedy: "Bundle-size critical apps" },
];

export default function BlogReactHookFormCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Hook Form + Zod | Fotz Studio"
        description="React Hook Form (RHF), Zod schema validation, zodResolver, useFieldArray, Server Actions, Valibot, TypeBox — kompletny przewodnik walidacji formularzy w…"
        canonicalUrl="https://fotz.pl/blog/react-hook-form-zod-walidacja-formularzy-typescript-nextjs-2024"

        keywords="React Hook Form + Zod co to jest, React Hook Form + Zod jak działa, React Hook Form + Zod tutorial, React Hook Form + Zod przykład, czym jest React Hook Form + Zod, React Hook Form + Zod dokumentacja, React Hook Form + Zod przewodnik"

        canonical="https://fotz.pl/blog/react-hook-form-zod-walidacja-formularzy-typescript-nextjs-2024"
      />
      <ArticleSchema
        title="React Hook Form + Zod — walidacja formularzy TypeScript 2024?"
        description="6 bibliotek formularzy (RHF/Formik/TanStack Form/Zod/Valibot/TypeBox) — zodResolver, useFieldArray, Server Actions validation, type inference i performance."
        url="https://fotz.pl/blog/react-hook-form-zod-walidacja-formularzy-typescript-nextjs-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Hook Form + Zod", url: "https://fotz.pl/blog/react-hook-form-zod-walidacja-formularzy-typescript-nextjs-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React Hook Form + Zod", url: "/blog/react-hook-form-zod-walidacja-formularzy-typescript-nextjs-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Forms
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Hook Form i Zod
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Walidacja formularzy z React Hook Form, Zod schema validation,
              zodResolver i integracja z Next.js Server Actions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Minimum re-renders", value: "RHF" },
                { label: "Schema + TypeScript", value: "Zod" },
                { label: "Bridge RHF+Zod", value: "zodResolver" },
                { label: "Dynamiczne pola", value: "useFieldArray" },
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

      {/* Biblioteki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek formularzy i walidacji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              React Hook Form, Formik, TanStack Form, Zod, Valibot i TypeBox —
              porównanie re-renderów, rozmiaru i podejścia do walidacji.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozmiar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Re-rendery</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Walidacja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {formLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{l.rozmiar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.rerenders}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.walidacja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{l.kiedy}</td>
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

      <RelatedArticles currentArticleId="react-hook-form-zod-walidacja-formularzy-typescript-nextjs-2024" />
      <ContactSection />
    </Layout>
  );
}
