import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Svelte 5 Runes — nowy model reaktywności?",
    answer: "Svelte 5 (2024-10): przepisane wnętrze. Runes = nowe prymitywy reaktywności. Zastępują reaktywność Svelte 4. Bardziej explicite. Rune $state: let count = $state(0). Zamiast: let count = 0. Reaktywne śledzenie. Działa w .svelte i .svelte.ts. Rune $derived: const doubled = $derived(count * 2). Zamiast: $: doubled = count * 2. Memoizowany. Odświeżany gdy zależności się zmieniają. $derived.by: const complex = $derived.by(() => { return items.filter(i => i.active).length }). Dla złożonych obliczeń. Rune $effect: $effect(() => { console.log('count changed:', count) }). Zamiast: $: { ... }. Cleanup: $effect(() => { const sub = subscribe(). return () => sub.unsubscribe() }). $effect.pre: przed DOM update. Rune $props: let {name, age = 18}: {name: string, age?: number} = $props(). Zamiast: export let name. TypeScript-friendly. Rest props: let {class: className, ...rest} = $props(). Rune $bindable: let {value = $bindable()}: {value: number} = $props(). Dwukierunkowe z rodzicem. Rune $inspect: $inspect(count) — log zmian w dev. Kiedy reactivity: Svelte 5 track per-field. Nie cały obiekt. let user = $state({name: '', email: ''}). user.name = 'Jan' — reaktywne.",
  },
  {
    question: "Svelte 5 — Snippets, Events i migracja ze Svelte 4?",
    answer: "Snippets (Svelte 5): jak slots ale potężniejsze. Reużywalne fragmenty HTML. {#snippet item(data)} li {data.name} /li {/snippet}. Wywołanie: {@render item(myData)}. Props snippet: let {item}: {item: Snippet string} = $props(). {@render item('Hello')}. Zastępuje sloty: slot name='header' -> Snippet. Events (Svelte 5): brak createEventDispatcher. HTML event attributes: button onclick={handleClick}. Niższy poziom niż on:click. Spread events: div {...rest}. Event delegation zmienione. Migracja Svelte 4 -> 5: export let prop -> let {prop} = $props(). let count = 0 + reactywność -> let count = $state(0). $: derived -> const derived = $derived(). $: effect -> $effect(() => {}). on:click -> onclick. createEventDispatcher -> callback props. Narzędzie migracji: npx sv migrate svelte-5-runes. Automatyczna migracja. Nie 100% — sprawdź ręcznie. Svelte 5 mode: Svelte 4 i 5 syntax razem (na razie). Stopniowa migracja. Legacy mode: opcjonalnie włącz. SvelteKit 2 + Svelte 5: kompatybilne. Bez zmian konfiguracji. Vite 6 wbudowany. TypeScript: Svelte 5 ma lepszy TS support. Runes auto-typed. Props z generics. Snippets typed. Wydajność: Svelte 5 szybszy od 4. Mniej kodu generowanego. Fine-grained updates.",
  },
  {
    question: "Angular 18/19 — Signals stable, deferrable views i nowy control flow?",
    answer: "Angular 18 (2024-05): Signals API stabilne. Zoneless (experimental). Angular 19 (2024-11): further improvements. Signals (stable od Angular 17): import {signal, computed, effect} from '@angular/core'. counter = signal(0). doubled = computed(() => this.counter() * 2). increment() { this.counter.update(c => c + 1) }. effect(() => { console.log('counter:', this.counter()) }). Signal Inputs (Angular 17.1): @Input() jest zastąpiony. name = input('default'). name = input.required(). id = input(0, {transform: numberAttribute}). Signal Outputs (Angular 17.3): clicked = output(). clicked = output EventEmitter-free. Model inputs: model = model('value'). Two-way binding. Nowy Control Flow (stable Angular 17): @if (isLoggedIn) { UserProfile / } @else { Login / }. @for (item of items; track item.id) { ItemComponent [item]='item' / } @empty { div Brak danych /div }. @switch (status) { @case ('active') { ... } @default { ... } }. Deferrable Views: @defer (on viewport) { HeavyComponent / } @placeholder { div Ładowanie... /div } @loading (minimum 500ms) { Spinner / } @error { ErrorComp / }. Triggers: on idle, on timer(2s), on interaction, on hover. Zoneless (Angular 18+): bez Zone.js. Lepsza wydajność. Manual change detection. provideExperimentalZonelessChangeDetection().",
  },
  {
    question: "Angular 19 — Resource API, linkedSignal i standalone domyślnie?",
    answer: "Angular 19 (2024-11): standalone domyślnie. Nie NgModule. Resource API (experimental): import {resource} from '@angular/core'. userResource = resource({request: () => this.userId(), loader: async ({request: id}) => { return await fetch('/api/user/' + id).then(r => r.json()) }}). userResource.value() — Signal z danymi. userResource.status() — 'idle'|'loading'|'resolved'|'error'. userResource.reload() — refetch. Jak TanStack Query ale wbudowane. httpResource (experimental): import {httpResource} from '@angular/common/http'. users = httpResource('/api/users'). Automatyczny fetch + Signal. linkedSignal (Angular 19): const source = signal(0). const linked = linkedSignal(() => source() * 2). Podobny do computed ale mutowalny. Można ustawić. Różni się od computed. Lazy routing signals: Angular 19 router signals. toSignal(router.events). Signal-based forms (planowane): FormField z signal. Nie reaktywne forms NG. Hydration improvements: deferred hydration. Incremental. Lepsze niż Angular 17. Standalone: od Angular 19 scaffold generuje standalone. NgModule nadal działa. Nie jest usunięty. ng generate component: --standalone domyślnie. Angular 18 SSR: Angular Universal wbudowany. Hydration stable. @angular/ssr zamiast separate package. angular.json: prerender: true. provideClientHydration().",
  },
  {
    question: "SvelteKit 2 — routing, load functions i adaptery 2024?",
    answer: "SvelteKit 2 (2024-01): stabilny. Vite 5 wbudowany. Svelte 5 kompatybilny. Routing: src/routes/ struktura. +page.svelte — strona. +layout.svelte — layout. +page.server.ts — server-only load. +page.ts — universal load. +error.svelte — error boundary. Load functions: export async function load({params, fetch, cookies, locals, setHeaders}): Promise PageData { const data = await fetch('/api/data').then(r => r.json()). return {data} }. Server load: cookies, locals (auth). Nie wysyłany do klienta (secret). Universal load: client + server. Bez cookies. Actions: export const actions: Actions = {default: async ({request, cookies}) => { const data = await request.formData(). return {success: true} }}. Form: form method='POST' use:enhance. Progressive enhancement. Adapter pattern: @sveltejs/adapter-vercel. @sveltejs/adapter-cloudflare. @sveltejs/adapter-node. @sveltejs/adapter-static. adapter-auto — wykrywa automatycznie. Hooks: src/hooks.server.ts. handle({event, resolve}). handleFetch. handleError. Auth: Lucia Auth + SvelteKit. Better Auth. Auth.js (authjs). Preloading: data-sveltekit-preload-data='hover'. Prefetch na hover. Szybsza nawigacja. deploy: npm run build. Output: .svelte-kit/output. Adapter zmienia format. Vitest wbudowany: vitest.config.ts.",
  },
];

const frameworkUpdate = [
  { framework: "Svelte 5", nowosci: "Runes ($state/$derived/$effect), Snippets", status: "Stable (2024-10)" },
  { framework: "SvelteKit 2", nowosci: "Vite 5, snapshots, shallow routing", status: "Stable (2024-01)" },
  { framework: "Angular 18", nowosci: "Signals stable, deferrable views, zoneless exp.", status: "Stable (2024-05)" },
  { framework: "Angular 19", nowosci: "Resource API, linkedSignal, standalone domyślnie", status: "Stable (2024-11)" },
  { framework: "Vue 3.5", nowosci: "useTemplateRef, Reactive Props Destructure", status: "Stable (2024-09)" },
  { framework: "Nuxt 4 (beta)", nowosci: "Nowa struktura katalogów, Vite 6, Nitro 2.10", status: "Beta (2024)" },
];

export default function BlogSvelte5RunesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2 | Fotz Studio"
        description="Svelte 5 Runes ($state, $derived, $effect, $props, Snippets), Angular 18/19 (Signals stable, deferrable views, Resource API, control flow), SvelteKit 2 i…"
        canonical="https://fotz.pl/blog/svelte-5-runes-angular-18-19-signals-sveltekit-2-frameworki-2024"

        keywords="Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2 co to jest, Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2 jak działa, Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2 tutorial, Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2 przykład, czym jest Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2, Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2 dokumentacja, Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2 przewodnik"
      />
      <ArticleSchema
        title="Svelte 5 Runes, Angular 18/19 Signals i SvelteKit 2 — frameworki 2024?"
        description="Svelte 5 Runes, Angular 18/19 (Signals/deferrable/Resource API), SvelteKit 2 (load functions/adapters), Vue 3.5 i Nuxt 4 — nowości frameworków frontend 2024."
        url="https://fotz.pl/blog/svelte-5-runes-angular-18-19-signals-sveltekit-2-frameworki-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Svelte 5 i Angular 2024", url: "https://fotz.pl/blog/svelte-5-runes-angular-18-19-signals-sveltekit-2-frameworki-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Svelte 5 i Angular 2024", url: "/blog/svelte-5-runes-angular-18-19-signals-sveltekit-2-frameworki-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Svelte / Angular / SvelteKit / 2024
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Svelte 5 i Angular 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Svelte 5 Runes ($state, $derived, $effect), Angular 18/19
              Signals, deferrable views i SvelteKit 2.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Svelte 5", value: "$state Runes" },
                { label: "Angular 18", value: "Signals stable" },
                { label: "Angular 19", value: "Resource API" },
                { label: "SvelteKit 2", value: "Vite 5" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frameworki frontend — nowości 2024</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Svelte 5, SvelteKit 2, Angular 18/19, Vue 3.5 i Nuxt 4 —
              kluczowe zmiany i status.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Nowości</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {frameworkUpdate.map((f, i) => (
                  <tr key={f.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.nowosci}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.status}</td>
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

      <RelatedArticles currentArticleId="svelte-5-runes-angular-18-19-signals-sveltekit-2-frameworki-2024" />
      <ContactSection />
    </Layout>
  );
}
