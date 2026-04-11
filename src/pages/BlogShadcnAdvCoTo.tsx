import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "shadcn/ui v2 — co nowego: Charts, Sidebar i Blocks?",
    answer: "shadcn/ui: shadcn. Nie biblioteka — komponenty do kopiowania. Radix UI + Tailwind. Instalacja: npx shadcn@latest init. Co nowego (2024): Chart components — wrappery Recharts. Sidebar component — pełny sidebar z nawigacją. Blocks — gotowe sekcje UI (login, dashboard). Registry — własne komponenty. Nowe style: New York (domyślny) i Default. Charts: npx shadcn@latest add chart. import {ChartContainer, ChartTooltip, ChartTooltipContent} from '@/components/ui/chart'. const chartConfig = {desktop: {label: 'Desktop', color: 'hsl(var(--chart-1))'}}. ChartContainer config={chartConfig} className='h-[300px]'. BarChart data={data}. Bar dataKey='desktop' fill='var(--color-desktop)'. /BarChart. /ChartContainer. Sidebar: npx shadcn@latest add sidebar. import {SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton} from '@/components/ui/sidebar'. Pełny sidebar z NavLink. Collapsible. Icon + label. Breadcrumb integracja. Blocks: npx shadcn@latest add block dashboard-01. Gotowy dashboard layout. Login form. Settings page. Calendar. Blocks to startery — kopiuj i modyfikuj. New York theme: sharper. Less rounded. Compact. Versus Default: rounded, spaced. components.json: style, rsc, tsx, tailwind, aliases. Skonfiguruj raz.",
  },
  {
    question: "shadcn/ui — Registry i własne komponenty w rejestrze?",
    answer: "shadcn Registry: opublikuj własne komponenty. Jak shadcn ale twoje. registry.json: {name: 'my-components', homepage: 'https://ui.myapp.com', items: [{name: 'my-button', type: 'registry:ui', files: [{path: 'registry/my-button.tsx', type: 'registry:ui'}], dependencies: ['clsx', 'tailwind-merge']}]}. Dodaj z rejestru: npx shadcn@latest add https://ui.myapp.com/r/my-button.json. Lub z pliku lokalnego: npx shadcn@latest add ./registry/my-button.json. Shadcn Registry schema: name, type, description. files: tablice plików. dependencies: npm packages. devDependencies. registryDependencies: inne shadcn komponenty. cssVars: zmienne CSS. tailwind: plugins, config. Typy: registry:ui — standardowy. registry:hook — hook. registry:lib — utility. registry:block — blok. registry:page — strona. registry:theme — motyw. Wewnętrzny rejestr: monorepo. Udostępnij między projektami. Automatyczny import. CLI registry: shadcn build — generuj JSON. shadcn publish — publikuj. Open Registry: otwarte. Społeczność może dodawać. shadcn themes: polecone motywy. Własne CSS variables. Zmień w components.json. CSS Variables: --background, --foreground, --primary, --secondary, --muted, --accent. Dark mode: .dark class. Tailwind dark:. CSS variable swap. next-themes integracja. ThemeProvider. useTheme().",
  },
  {
    question: "shadcn/ui — zaawansowane komponenty: DataTable, Form i Combobox?",
    answer: "DataTable z TanStack Table: npx shadcn@latest add table. import {useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender} from '@tanstack/react-table'. const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(), state: {sorting, columnFilters, columnVisibility}, onSortingChange: setSorting}). Render: table.getHeaderGroups(), table.getRowModel().rows. Paginacja: table.previousPage(), table.nextPage(). ColumnDef: accessorKey, header, cell. Sortowanie kliknięcie nagłówka. Form z react-hook-form + Zod: npx shadcn@latest add form. import {useForm} from 'react-hook-form'. import {zodResolver} from '@hookform/resolvers/zod'. const form = useForm({resolver: zodResolver(schema)}). Form. FormField control={form.control} name='email'. FormItem. FormLabel Email /FormLabel. FormControl. Input placeholder='Email'. /Input. /FormControl. FormDescription. FormMessage. /FormItem. /FormField. /Form. Combobox (Command): npx shadcn@latest add command popover. Popover + Command. CommandInput search. CommandList + CommandItem. Wyszukiwanie z filtrowaniem. Multi-select: checkbox per item. Badge per selected. Virtualized Combobox: dla dużych list. TanStack Virtual + Combobox. Calendar + DatePicker: npx shadcn@latest add calendar date-picker. react-day-picker wbudowane. DateRange. Locale polska. Sheets i Dialogs: controlled mode. useImperativeHandle dla zewnętrznego sterowania.",
  },
  {
    question: "better-auth — nowoczesna biblioteka autentykacji dla TypeScript?",
    answer: "better-auth: Bekacru. TypeScript-first. Pluginy. Własny email. Social providers. Instalacja: npm install better-auth. Setup: import {betterAuth} from 'better-auth'. export const auth = betterAuth({database: drizzleAdapter(db, {provider: 'pg'}), emailAndPassword: {enabled: true}, socialProviders: {github: {clientId: GITHUB_ID, clientSecret: GITHUB_SECRET}, google: {clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET}}}). API Routes (Next.js): app/api/auth/[...all]/route.ts. import {auth} from '@/lib/auth'. export {auth.handler as GET, auth.handler as POST}. Client: import {createAuthClient} from 'better-auth/react'. export const {useSession, signIn, signOut, signUp} = createAuthClient(). const {data: session} = useSession(). signIn.email({email, password}). signIn.social({provider: 'github'}). signOut(). Pluginy: twoFactor(). organization(). passkey(). magicLink(). admin(). Każdy rozszerza funkcjonalność. Session: session.user.id, email, name, image. session.session.token. Server-side: import {auth} from '@/lib/auth'. const session = await auth.api.getSession({headers: request.headers}). Middleware: import {betterFetch} from '@better-fetch/fetch'. Porównanie: vs NextAuth/Auth.js: better-auth — nowe, TypeScript-first, pluginy. Auth.js — ogromna społeczność, wiele providerów. vs Clerk: better-auth — self-host, tanio. Clerk — managed, UI gotowe. vs Lucia: better-auth — więcej funkcji, pluginy.",
  },
  {
    question: "next-safe-action — type-safe Server Actions z walidacją?",
    answer: "next-safe-action: Lukasz Blaciak. Type-safe Server Actions. Zod walidacja. Middleware. useAction hook. Instalacja: npm install next-safe-action zod. Setup: import {createSafeActionClient} from 'next-safe-action'. export const actionClient = createSafeActionClient(). Z middleware: export const authActionClient = actionClient.use(async ({next, ctx}) => { const session = await getSession(). if (!session) throw new Error('Unauthorized'). return next({ctx: {session}}) }). Definiowanie akcji: import {z} from 'zod'. export const createPost = authActionClient.schema(z.object({title: z.string().min(1), content: z.string()})).action(async ({parsedInput, ctx}) => { const post = await db.posts.create({data: {...parsedInput, userId: ctx.session.user.id}}). revalidatePath('/posts'). return post }). Client: import {useAction} from 'next-safe-action/hooks'. const {execute, result, status} = useAction(createPost). const handleSubmit = (data) => execute(data). status: 'idle' | 'executing' | 'hasSucceeded' | 'hasErrored'. result.data: dane zwrócone. result.validationErrors: Zod errors. result.serverError: server throw. useOptimisticAction: optimistic updates. useStateAction: useFormState compatible. Middleware chain: actionClient.use(logging).use(auth). Każdy middleware ma dostęp do ctx poprzedniego. Flat errors: flattenValidationErrors(). Per-field errors. Return value: {data, validationErrors, serverError, bindArgsValidationErrors}.",
  },
];

const shadcnFeatures = [
  { funkcja: "Chart component", wersja: "shadcn 2024", opis: "Recharts wrapper — BarChart, LineChart, PieChart z config" },
  { funkcja: "Sidebar component", wersja: "shadcn 2024", opis: "Pełny sidebar z SidebarProvider, NavLink, Collapsible" },
  { funkcja: "Blocks", wersja: "shadcn 2024", opis: "Gotowe sekcje — dashboard, login, settings startery" },
  { funkcja: "Registry", wersja: "shadcn 2024", opis: "Własne komponenty — registry.json, npx shadcn@latest add URL" },
  { funkcja: "better-auth", wersja: "0.x", opis: "TypeScript-first auth — drizzle, pluginy, social, email" },
  { funkcja: "next-safe-action", wersja: "7.x", opis: "Type-safe Server Actions — Zod, middleware, useAction" },
];

export default function BlogShadcnAdvCoTo() {
  return (
    <Layout>
      <SEOHead
        title="shadcn/ui Charts, Sidebar, Registry, better-auth i next-safe-action 2024 | Fotz.pl"
        description="shadcn/ui advanced 2024: Chart (Recharts wrapper), Sidebar, Blocks, Registry własne komponenty, DataTable TanStack, better-auth TypeScript i next-safe-action Server Actions."
        canonicalUrl="https://fotz.pl/blog/shadcn-ui-charts-sidebar-blocks-registry-better-auth-next-safe-action-2024"
      />
      <ArticleSchema
        title="shadcn/ui Charts, Sidebar, Registry, better-auth i next-safe-action 2024?"
        description="shadcn/ui v2: Chart, Sidebar, Blocks, Registry własne komponenty, DataTable. better-auth: pluginy, drizzle. next-safe-action: useAction, middleware, Zod validation."
        url="https://fotz.pl/blog/shadcn-ui-charts-sidebar-blocks-registry-better-auth-next-safe-action-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "shadcn/ui Advanced 2024", url: "https://fotz.pl/blog/shadcn-ui-charts-sidebar-blocks-registry-better-auth-next-safe-action-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-zinc-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "shadcn/ui Advanced 2024", href: "/blog/shadcn-ui-charts-sidebar-blocks-registry-better-auth-next-safe-action-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-zinc-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              shadcn/ui / better-auth / Server Actions / React
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              shadcn/ui Advanced 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Charts, Sidebar, Blocks, Registry, better-auth
              i next-safe-action type-safe.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Wykresy", value: "Charts" },
                { label: "Nawigacja", value: "Sidebar" },
                { label: "Auth", value: "better-auth" },
                { label: "Actions", value: "safe-action" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-300">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">shadcn/ui i ekosystem — kluczowe funkcje 2024</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Chart, Sidebar, Blocks, Registry, better-auth i next-safe-action —
              wersja i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wersja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {shadcnFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.wersja}</td>
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
