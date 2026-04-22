import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są Web Components i jakie standardy je tworzą?",
    answer: "Web Components: standard W3C. Natywne komponenty przeglądarki. Bez żadnego frameworka. Zestaw 3 standardów: Custom Elements: definiuj własne HTML tagi. class MyButton extends HTMLElement {connectedCallback() {this.innerHTML = 'button'}}. customElements.define('my-button', MyButton). Używaj: my-button w HTML. Shadow DOM: enkapsulacja DOM i CSS. const shadow = this.attachShadow({mode: 'open'}). CSS wewnątrz Shadow DOM nie wycieka na zewnątrz. Zewnętrzny CSS nie przenika do środka. HTML Templates: template id='my-template'. Zawartość nie renderowana do czasu klonowania. const template = document.querySelector('#my-template'). const clone = template.content.cloneNode(true). Lifecycle callbacks: connectedCallback() — element dodany do DOM. disconnectedCallback() — element usunięty. attributeChangedCallback(name, old, new) — atrybut zmieniony. observedAttributes — które atrybuty obserwować. adoptedCallback() — przeniesiony do innego dokumentu. Slots: slot name='header' — nazwane sloty. slot — domyślny slot. Kompozycja zawartości z zewnątrz. CSS Custom Properties (CSS Variables): :host — styl elementu. :host(:hover). ::slotted(span) — style slottowanej zawartości. CSS parts: part='button' -> ::part(button) do stylowania z zewnątrz. Interoperability: React 18 + Web Components — ograniczone. React 19 — pełne wsparcie dla Custom Events. Preact + Web Components — doskonałe.",
  },
  {
    question: "Lit — biblioteka do Web Components od Google?",
    answer: "Lit (Google, 2021, poprzednik: LitElement/lit-html): lekka biblioteka do Web Components. Reactive properties. Templating z lit-html (tagged templates). ~5KB gzipped. TypeScript-first. Instalacja: npm install lit. Podstawowy komponent: import {LitElement, html, css} from 'lit'. import {customElement, property} from 'lit/decorators.js'. @customElement('my-card'). class MyCard extends LitElement {static styles = css .card {border: 1px solid #ccc; padding: 16px} (backtick). @property({type: String}) title = ''. @property({type: Number}) count = 0. render() {return html div class='card' h2 ${this.title} /h2 button @click=${this.increment} Count: ${this.count} /button /div (template literal notation)}}. Reactive updates: @property() -> automatyczny re-render. @state() — wewnętrzny stan (nie atrybut). Tasks: @lit/task — async data fetching. Lit Context: @lit/context — jak React Context dla Web Components. Lit Labs: lit/labs — eksperymentalne features. Shoelace (teraz Web Awesome): dojrzała biblioteka Web Components oparta na Lit. UI komponenty: sl-button, sl-input, sl-select, sl-dialog. Framework-agnostic. Używany z React, Vue, Angular, Vanilla. Open UI: inicjatywa standaryzacji UI. Stylable Select, Popover API, Anchor Positioning. Popover API: popover atrybut na elementach. button popovertarget='my-popover'. Natywne popovery bez JavaScript. Dostępne w wszystkich major browsers 2024.",
  },
  {
    question: "Web Components vs React/Vue — kiedy wybrać Web Components?",
    answer: "Kiedy Web Components: design system dla wielu frameworków. Organizacja z wieloma tech stacks (React + Vue + Angular). Long-term stability (standard, nie biblioteka). Mikrofrontendy z różnymi frameworkami. Browser native — zero dependencies. Widget embeddowany na zewnętrznych stronach. Kiedy React/Vue zamiast: complex state management. Ecosystem i biblioteki. Team doświadczenie. SEO (Web Components i SSR — trudniejsze). Szybki development. React + Web Components: React 18 — słabe event handling dla custom events. React 19 — naprawione: pełne wsparcie custom events i props. @lit-labs/react: ReactWebComponent(). Wrap Web Component jako React komponent. Preact + Web Components: Preact — doskonała kompatybilność z Web Components. Mały bundle (~3KB). Używany zamiast React w środowiskach z WC. Stencil.js: kompilator do Web Components. Pisze się jak React (JSX, props, state). Kompiluje do natywnych Custom Elements. Ionic Framework oparty na Stencil. Angular Elements: Angular komponenty -> Web Components. @angular/elements. Dobra integracja z Angular ekosystemem. Custom Event pattern (zamiast callback props): this.dispatchEvent(new CustomEvent('my-event', {detail: {value: this.value}, bubbles: true, composed: true})). composed: true — przechodzi przez Shadow DOM boundary. Web Components w React (workaround): useRef + addEventListener zamiast onMyEvent prop. React 19 eliminuje ten problem.",
  },
  {
    question: "Micro-frontends z Web Components i Module Federation?",
    answer: "Micro-frontends: podział dużego frontend na niezależne aplikacje. Każdy team ma własny tech stack. Niezależne deploymenty. Integracja w runtime. Podejścia: iframe — najprostsze ale ograniczone. Web Components — standard, framework-agnostic. Module Federation (Webpack 5) — JavaScript modules sharing. Single SPA — orchestration framework. Web Components jako micro-frontends: każdy micro-frontend eksponuje Web Component. Host page ładuje zdalny bundle. Rejestruje custom element. Używa w HTML. Module Federation (Webpack 5): exposes — eksponuj moduły. remotes — ładuj z innych app. Shared — dziel React, lodash bez duplikacji. Dynamic import: const RemoteApp = React.lazy(() => import('remote/App')). @module-federation/enhanced: ulepszone MF. Runtime plugins. Vite: vite-plugin-federation. Single SPA: registerApplication(). mountRootParcel(). Routing między micro-frontends. Framework-agnostic loader. Native Federation: ES Modules bez Webpack. @angular-architects/native-federation. Oparty na importmaps. Problem współdzielenia stanu: Custom Events między WC. BroadcastChannel API. Shared store (Zustand singleton). URL jako shared state. Wyzwania: CSS isolation — Shadow DOM lub CSS Modules. Auth — shared token, single SSO. Performance — wiele bundle requests. Versioning — shared libraries. Design System — Web Components jako standard. Kiedy micro-frontends: duże organizacje, wiele teams. Kiedy NIE: małe projekty, jeden team.",
  },
  {
    question: "Declarative Shadow DOM i SSR dla Web Components?",
    answer: "Problem SSR z Web Components: Shadow DOM tworzony przez JavaScript. Server nie może renderować Shadow DOM. Brak hydration mechanism. Declarative Shadow DOM (DSD): shadowrootmode='open' atrybut na template. template shadowrootmode='open' — Shadow DOM bez JS. Obsługiwany natywnie: Chrome, Edge, Safari (od 2023). Firefox: planowany. Polyfill: @webcomponents/template-shadowroot. Lit SSR (@lit-labs/ssr): renderowanie Lit Web Components na serwerze. render(html my-element, createEmptyDomImplementation()). Generuje Declarative Shadow DOM. Hydration po stronie klienta: LitElement.enableUpdatingWithoutShadow(). Albo standard LitElement hydration. Gatsby + Web Components: gatsby-plugin-lit. Prerender z Lit SSR. Astro + Web Components: Astro doskonały dla Web Components. server:true — Server Components. client:load — hydrate po stronie klienta. client:idle, client:visible — lazy hydration. Web Components w Astro: import 'my-component/define'. Używaj normalnie. Astro automatycznie bundluje. Framework-agnostic: Web Components działają w Astro z React, Vue, Svelte, Solid, Angular. Interoperability test: custom-elements-everywhere.com. Score dla każdego frameworka. React 18: 70%. React 19: 100%. Preact: 100%. Vue: 100%. Angular: 99%. Svelte: 100%. Solid: 100%. Custom Elements Manifest: schema dla dokumentacji i tooling. @custom-elements-manifest/analyzer. IDE support (VSCode extension). Storybook 8 + Web Components: Storybook wspiera natywnie WC. argTypes, args dla @property. Controls panel.",
  },
];

const webComponentTools = [
  { narzedzie: "Lit", typ: "WC Library", rozmiar: "~5KB", ssr: "Lit SSR (labs)", kiedy: "Google ecosystem, produkcyjne WC" },
  { narzedzie: "Stencil.js", typ: "WC Compiler (JSX)", rozmiar: "~5KB output", ssr: "Tak (experimental)", kiedy: "Ionic, design system z JSX DX" },
  { narzedzie: "Shoelace / Web Awesome", typ: "WC UI Kit (Lit)", rozmiar: "Tree-shakeable", ssr: "Ograniczone", kiedy: "Framework-agnostic UI komponenty" },
  { narzedzie: "Astro + WC", typ: "SSG/SSR + WC", rozmiar: "Zero JS default", ssr: "Tak (natywny)", kiedy: "Content sites, WC z SSR" },
  { narzedzie: "Module Federation", typ: "Micro-frontend", rozmiar: "Runtime loading", ssr: "Webpack 5 / Vite", kiedy: "Enterprise micro-frontends" },
  { narzedzie: "Single SPA", typ: "Micro-frontend loader", rozmiar: "~25KB", ssr: "Ograniczone", kiedy: "Multi-framework org, orchestration" },
];

export default function BlogWebComponentsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Web Components, Lit, Stencil i Micro-frontends | Fotz Studio"
        description="Web Components (Custom Elements, Shadow DOM, Templates), Lit od Google, Stencil.js, Shoelace UI Kit, Declarative Shadow DOM SSR i micro-frontends z Module…"
        canonicalUrl="https://fotz.pl/blog/web-components-lit-stencil-shadow-dom-micro-frontends-2024"

        keywords="Web Components, Lit, Stencil i Micro-frontends co to jest, Web Components, Lit, Stencil i Micro-frontends definicja, czym jest Web Components, Lit, Stencil i Micro-frontends, Web Components, Lit, Stencil i Micro-frontends przykłady, jak działa Web Components, Lit, Stencil i Micro-frontends, Web Components, Lit, Stencil i Micro-frontends znaczenie, Web Components, Lit, Stencil i Micro-frontends przewodnik"

        canonical="https://fotz.pl/blog/web-components-lit-stencil-shadow-dom-micro-frontends-2024"
      />
      <ArticleSchema
        title="Web Components, Lit, Stencil i Micro-frontends — natywne komponenty przeglądarki 2024?"
        description="6 narzędzi Web Components (Lit/Stencil/Shoelace/Astro+WC/Module Federation/Single SPA) — Custom Elements, Shadow DOM, SSR, micro-frontends i framework interop."
        url="https://fotz.pl/blog/web-components-lit-stencil-shadow-dom-micro-frontends-2024"
        datePublished="2024-04-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Web Components i Lit", url: "https://fotz.pl/blog/web-components-lit-stencil-shadow-dom-micro-frontends-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Web Components i Lit", url: "/blog/web-components-lit-stencil-shadow-dom-micro-frontends-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Web Standards / Components
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Components i Lit
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Custom Elements, Shadow DOM, Lit od Google, Stencil.js, Declarative Shadow DOM SSR
              i micro-frontends z Module Federation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Google library", value: "Lit ~5KB" },
                { label: "CSS isolation", value: "Shadow DOM" },
                { label: "SSR support", value: "Declarative SD" },
                { label: "Multi-framework", value: "Micro-frontends" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-rose-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi Web Components — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Lit, Stencil, Shoelace, Astro, Module Federation i Single SPA —
              typ, rozmiar, SSR i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozmiar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">SSR</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {webComponentTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.rozmiar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.ssr}</td>
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

      <RelatedArticles currentArticleId="web-components-lit-stencil-shadow-dom-micro-frontends-2024" />
      <ContactSection />
    </Layout>
  );
}
