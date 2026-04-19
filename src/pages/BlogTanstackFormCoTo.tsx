import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "TanStack Form — co to jest i jak różni się od React Hook Form?",
    answer: "TanStack Form: framework-agnostic form management. TypeScript-first. Zero dependencies. Headless (brak UI). Wersja: v0 (eksperymentalna), stabilizująca się. Instalacja: npm install @tanstack/react-form. Podstawy: import {useForm} from '@tanstack/react-form'. const form = useForm({defaultValues: {name: '', email: '', age: 0}, onSubmit: async ({value}) => { console.log(value) }}). Pola: form.Field — komponent dla pola. api.field.handleChange, api.field.state.value, api.field.state.meta. Składnia: form.Field({name: 'name', children: (field) => input({value: field.state.value, onChange: (e) => field.handleChange(e.target.value)})}). TypeScript: pełna inferencja typów. value typowany z defaultValues. errors typowane. Validatory. Porównanie z React Hook Form: RHF — register/Controller/useFormContext. TanStack Form — Field component. RHF — uncontrolled domyślnie. TanStack Form — controlled. RHF — dojrzalszy (v7, duża społeczność). TanStack Form — nowoczesny DX, type-safe. RHF — Zod integration @hookform/resolvers. TanStack Form — wbudowane validators. Framework: RHF — React only. TanStack Form — React, Vue, Angular, Solid, Lit. Formik: stary, wolniejszy, mniejszy DX. Kiedy TanStack Form: nowe projekty chcące type-safe. Nie-React framework (Vue, Solid). Multi-framework (design system).",
  },
  {
    question: "TanStack Form — walidacja pól i integracja z Zod?",
    answer: "Wbudowana walidacja: validators prop na Field. validators: {onChange: ({value}) => !value ? 'Required' : undefined}. Zwróć string = błąd. undefined = ok. Kiedy walidować: onChange — przy zmianie. onBlur — po opuszczeniu. onSubmit — przy submitcie. onChangeAsyncDebounceMs — async z debounce. Async walidacja: validators: {onChangeAsync: async ({value}) => { const taken = await checkEmail(value). return taken ? 'Email zajęty' : undefined }, onChangeAsyncDebounceMs: 500}. Zod integration: npm install @tanstack/zod-form-adapter. import {zodValidator} from '@tanstack/zod-form-adapter'. const form = useForm({validatorAdapter: zodValidator(), defaultValues: {name: ''}. validators: {onSubmit: z.object({name: z.string().min(2)})}}). Field-level Zod: form.Field({name: 'email', validatorAdapter: zodValidator(), validators: {onChange: z.string().email()}}). Błędy: field.state.meta.errors — tablica stringów. field.state.meta.isValidating — async w toku. field.state.meta.isTouched — było dotykane. form.state.isValid — cały formularz. form.state.errors — wszystkie błędy. Formularz walidacja: form level validators. validators: {onSubmit: ({value}) => { if (!value.name || !value.email) return {fields: {name: 'Required'}} }}. Linki między polami: confirm password. field zmienia inny field. form.setFieldValue('confirmPassword', ''). Cross-field walidacja.",
  },
  {
    question: "TanStack Form — zaawansowane wzorce: array fields i sub-forms?",
    answer: "Array Fields: dla dynamicznych list. form.Field({name: 'friends', mode: 'array', children: (field) => { field.state.value.map((_, i) => form.Field({name: 'friends[i].name', children: (subField) => input({...}) })) } }). Push: field.pushValue({name: '', age: 0}). Remove: field.removeValue(i). Swap: field.swapValues(i, j). Insert: field.insertValue(i, value). Nested Objects: name: 'address.street'. Automatyczna praca zagnieżdżeń. type-safe dzięki TypeScript. Conditional fields: watch: field.state.value — nie ma reaktywnego watcha. useStore(form.store, (s) => s.values.type) — subskrybuj. Renderuj warunkowo. Sub-forms: compose form z sub-komponenty. Przekaż form.Field jako props. Reużywalne sekcje formularza. useField hook: const field = useField({name: 'email', form}). Imperativo dostęp do pola. Poza Field komponentem. Reset: form.reset() — resetuj do defaultValues. form.setFieldValue('name', newValue). form.setValues({...}). Dirty state: form.state.isDirty — czy zmieniono. field.state.meta.isDirty — per field. Prevent navigate when dirty. Optimistic updates: submit -> update UI od razu. Rollback przy błędzie. Server-side validation errors: form.setFieldMeta('email', (prev) => ({...prev, errors: ['Email zajęty']})). Lub setErrors. Obsługa server błędów. Accessibility: label htmlFor powiązany z input. aria-describedby dla błędów. aria-invalid na błędnych polach. role='alert' dla błędów.",
  },
  {
    question: "React Hook Form v7 — najlepsze praktyki i zaawansowane wzorce?",
    answer: "React Hook Form: najdojrzalszy form library. register() — uncontrolled. Controller — dla kontrolowanych komponentów. useFormContext — formularz w drzewie. useWatch — reaktywne watch. useFieldArray — array fields. Optymalizacja: register() nie powoduje re-renderu. watch() powoduje — używaj ostrożnie. useWatch() dla lokalnego watcha. shouldUnregister: false — zachowaj wartości po odmontowaniu. Schema validation: yupResolver, zodResolver, joiResolver. @hookform/resolvers. const schema = z.object({...}). resolver: zodResolver(schema). Formstate: isDirty, isSubmitting, isValid, errors, dirtyFields, touchedFields, isValidating. useFormState — lokalny dostęp. FormProvider: context dla zagnieżdżeń. useFormContext — dostęp w potomkach. Bez prop drilling. DevTools: @hookform/devtools. Podgląd state. Błędy. Re-renders count. Array Fields: useFieldArray({control, name: 'items'}). append, prepend, remove, update, swap, insert. key z id (nie index). Trigger validation: trigger('email') — waliduj konkretne pole. trigger() — wszystkie. Conditional: watch('type') === 'business' ? showCompanyField. setError: setError('server', {type: 'manual', message: 'Server error'}). clearErrors: clearErrors('field'). Controlled z shadcn/ui: Controller - render - FormField. Standardowy pattern.",
  },
  {
    question: "Formularze w Next.js — Server Actions, useActionState i progressive enhancement?",
    answer: "Server Actions + formularz: form action={serverAction}. Bez JavaScript! Progressive enhancement. Działa bez JS (basic form). Z JS: szybki submit bez przeładowania. Server Action: 'use server'. export async function createUser(formData: FormData) { const name = formData.get('name') as string. const email = formData.get('email') as string. await db.user.create({data: {name, email}}) }. useActionState (React 19): const [state, action, isPending] = useActionState(serverAction, null). form action={action}. state — wynik poprzedniego wywołania. isPending — czy w trakcie. Walidacja serwer-side: Zod w Server Action. schema.safeParse(Object.fromEntries(formData)). Zwróć błędy w state. return {errors: {email: 'Invalid email'}}. Wyświetl w kliencie: state.errors.email. useOptimistic: optymistyczne update UI. Przed odpowiedzią serwera. Rollback przy błędzie. TanStack Form + Server Actions: action prop na form. handleSubmit -> Server Action. React Hook Form + Server Actions: handleSubmit(async (data) => { await serverAction(data) }). Albo: startTransition(() => { form.action(new FormData(...)) }). useFormStatus: const {pending} = useFormStatus(). W submit button. Spinners podczas submit. Działa z form action. File uploads: FormData + Server Action. multipart/form-data. Walidacja pliku. Streaming feedback: readableStream z Server Action. useFormState + streaming. Pasek postępu upload. Bezpieczeństwo: CSRF automatyczny (Next.js). Waliduj serwer-side zawsze. Rate limiting na Server Actions.",
  },
];

const formLibraries = [
  { biblioteka: "TanStack Form", typ: "Headless, framework-agnostic", kiedy: "Nowe projekty, multi-framework, type-safe-first" },
  { biblioteka: "React Hook Form v7", typ: "React, uncontrolled DOM", kiedy: "Produkcja, dojrzały, shadcn/ui integration" },
  { biblioteka: "Server Actions + useActionState", typ: "Next.js 15, RSC", kiedy: "Progressive enhancement, brak JS fallback" },
  { biblioteka: "Zod validation", typ: "Schema validation", kiedy: "Walidacja klient i serwer — jeden schemat" },
  { biblioteka: "Formik", typ: "React (stary standard)", kiedy: "Legacy kod — consider migracja do RHF" },
  { biblioteka: "useOptimistic", typ: "React 19, optimistic UI", kiedy: "Natychmiastowy feedback, rollback przy błędzie" },
];

export default function BlogTanstackFormCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TanStack Form vs React Hook Form | Fotz Studio"
        description="TanStack Form (type-safe, framework-agnostic), React Hook Form v7 (useFieldArray, zodResolver), Server Actions + useActionState, progressive enhancement i…"
        canonicalUrl="https://fotz.pl/blog/tanstack-form-react-hook-form-server-actions-formularze-nextjs-2024"

        keywords="TanStack Form vs React Hook Form co to jest, TanStack Form vs React Hook Form jak działa, TanStack Form vs React Hook Form tutorial, TanStack Form vs React Hook Form przykład, czym jest TanStack Form vs React Hook Form, TanStack Form vs React Hook Form dokumentacja, TanStack Form vs React Hook Form przewodnik"

        canonical="https://fotz.pl/blog/tanstack-form-react-hook-form-server-actions-formularze-nextjs-2024"
      />
      <ArticleSchema
        title="TanStack Form vs React Hook Form — walidacja, Server Actions i Next.js 2024?"
        description="6 bibliotek formularzy (TanStack Form/RHF/Server Actions/Zod/Formik/useOptimistic) — type-safe walidacja, array fields, Next.js Server Actions i progressive enhancement."
        url="https://fotz.pl/blog/tanstack-form-react-hook-form-server-actions-formularze-nextjs-2024"
        datePublished="2024-06-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TanStack Form", url: "https://fotz.pl/blog/tanstack-form-react-hook-form-server-actions-formularze-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "TanStack Form", href: "/blog/tanstack-form-react-hook-form-server-actions-formularze-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Forms / Next.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formularze w React 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              TanStack Form (type-safe), React Hook Form v7, Server Actions + useActionState,
              Zod walidacja i Next.js 15 formularze.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Type-safe", value: "TanStack Form" },
                { label: "Dojrzały", value: "React HF" },
                { label: "No-JS", value: "Server Actions" },
                { label: "Walidacja", value: "Zod" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek formularzy React — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              TanStack Form, React Hook Form, Server Actions, Zod, Formik i useOptimistic —
              typ i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {formLibraries.map((f, i) => (
                  <tr key={f.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.typ}</td>
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

      <RelatedArticles currentArticleId="tanstack-form-react-hook-form-server-actions-formularze-nextjs-2024" />
      <ContactSection />
    </Layout>
  );
}
