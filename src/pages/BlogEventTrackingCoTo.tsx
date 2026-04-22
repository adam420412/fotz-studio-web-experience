import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest event tracking?",
    answer:
      "Event tracking (śledzenie zdarzeń) to technika analityki produktu polegająca na rejestracji konkretnych działań użytkownika w aplikacji lub na stronie — kliknięcie przycisku, wypełnienie formularza, odtworzenie wideo, przejście do kolejnego kroku. W odróżnieniu od pageview trackingu (który rejestruje tylko wyświetlenie strony), event tracking mierzy co użytkownik zrobił — dając głębszy wgląd w zachowania i konwersje.",
  },
  {
    question: "Jak działa event tracking?",
    answer:
      "Event tracking działa przez wysyłanie wywołań SDK lub API do narzędzia analitycznego gdy użytkownik wykona określoną akcję. Technicznie: developer dodaje do kodu wywołanie track('event_name', {properties}) — np. analytics.track('Button Clicked', {button: 'Sign Up', page: 'Homepage'}). Narzędzie analityczne (Mixpanel, Amplitude, GA4, Segment) rejestruje zdarzenie z właściwościami i timestampem. Dane te są potem dostępne do analizy funnel, retencji i segmentacji.",
  },
  {
    question: "Jakie zdarzenia warto śledzić?",
    answer:
      "Strategia event trackingu: Signed Up, Logged In, Onboarding Completed (aha moment), Core Action (kluczowa akcja produktu — Create Project, Send Message, Add to Cart), Feature Used (z nazwą feature), Upgrade Clicked, Subscription Started, Payment Completed, Error Occurred, Churned/Cancelled. Zasada: śledź zdarzenia wokół kluczowych momentów w user lifecycle — nie wszystkiego. 20-30 dobrze zaprojektowanych eventów >> 200 przypadkowych.",
  },
  {
    question: "Czym różni się event tracking od pageview tracking?",
    answer:
      "Pageview tracking rejestruje wyświetlenie URL strony — działało świetnie dla tradycyjnych stron, ale w SPA (single-page applications) lub aplikacjach mobilnych strony często się nie przeładowują. Event tracking działa niezależnie od nawigacji — rejestruje konkretne akcje użytkownika. Google Analytics 4 unifikuje oba modele — pageview to też event. Dla produktów cyfrowych event tracking jest cenniejszy: pokazuje co użytkownicy robią, nie tylko gdzie są.",
  },
  {
    question: "Co to jest event schema i data dictionary?",
    answer:
      "Event schema (plan eventów) to dokumentacja określająca: które zdarzenia śledzić, jak je nazywać (konwencja nazewnictwa), jakie właściwości dołączyć (properties) i kto jest odpowiedzialny. Data dictionary to żywy dokument opisujący każde zdarzenie i każdą właściwość w systemie analitycznym. Brak event schema = chaos: każdy developer nazywa eventy inaczej, duplikaty, niespójna analiza. Event schema jest fundamentem dobrego trackingu produktowego.",
  },
];

const eventTypes = [
  { typ: "Page View", opis: "Wyświetlenie strony lub ekranu", przykład: "Page Viewed: /pricing, /dashboard, /blog/seo", kiedy: "Nawigacja między sekcjami" },
  { typ: "Click / Tap", opis: "Kliknięcie elementu UI — przycisk, link, karta", przykład: "Button Clicked: 'Sign Up', 'Upgrade', 'Learn More'", kiedy: "CTA, nawigacja, interakcje z UI" },
  { typ: "Form Event", opis: "Interakcja z formularzem — started, completed, abandoned", przykład: "Form Submitted: registration, contact, checkout", kiedy: "Rejestracja, lead generation, zakup" },
  { typ: "Feature Used", opis: "Użycie kluczowej funkcji produktu", przykład: "Report Created, File Uploaded, Integration Connected", kiedy: "Core actions w produkcie" },
  { typ: "Lifecycle Event", opis: "Zdarzenie w cyklu życia użytkownika", przykład: "Signed Up, Onboarding Completed, Trial Started, Churned", kiedy: "Kluczowe momenty user lifecycle" },
  { typ: "Error Event", opis: "Wystąpienie błędu lub niepowodzenia", przykład: "Payment Failed, API Error, Upload Failed", kiedy: "Monitoring jakości i friction points" },
];

const eventNamingConventions = [
  { konwencja: "Object Action (rekomendowana)", przykład: "Project Created, File Downloaded, Plan Upgraded, Button Clicked", dlaczego: "Jasna, spójna, alfabetycznie grupuje te same obiekty" },
  { konwencja: "Verb Object", przykład: "Created Project, Downloaded File, Upgraded Plan", dlaczego: "Naturalna, ale trudniejsza do sortowania — 'Created' i 'Created Report' blisko siebie" },
  { konwencja: "snake_case", przykład: "project_created, file_downloaded, plan_upgraded", dlaczego: "Dobra dla developerów, mniej czytelna w UI analityki" },
];

const trackingTools = [
  { narzędzie: "Mixpanel", typ: "Product Analytics", mocne: "Funnel, retention, flows, segmentation", słabe: "Koszty przy dużym wolumenie", dla: "SaaS, mobile apps" },
  { narzędzie: "Amplitude", typ: "Product Analytics", mocne: "Behavioral cohorting, predictive analytics, charts", słabe: "Krzywa uczenia się", dla: "Mid-market i enterprise products" },
  { narzędzie: "Google Analytics 4", typ: "Web/App Analytics", mocne: "Darmowy, integracja z Google Ads, BigQuery export", słabe: "Sampling, mniej product-focused", dla: "Marketing analytics, e-commerce" },
  { narzędzie: "Segment", typ: "Customer Data Platform", mocne: "Jeden tracking → wiele narzędzi, data routing", słabe: "Agregator, nie analityka bezpośrednia", dla: "Firmy używające wielu narzędzi" },
  { narzędzie: "PostHog", typ: "Product Analytics (Open Source)", mocne: "Self-hosted, session replay, feature flags, open source", słabe: "Wymaga DevOps do utrzymania", dla: "Startupy dbające o prywatność danych" },
];

export default function BlogEventTrackingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Event Tracking | Fotz Studio"
        description="Event tracking — definicja, 6 typów eventów, konwencje nazewnictwa, narzędzia (Mixpanel, Amplitude, GA4, Segment) i jak projektować event schema…"
        canonical="https://fotz.pl/blog/event-tracking-co-to"

        keywords="Event Tracking co to jest, Event Tracking definicja, czym jest Event Tracking, Event Tracking przykłady, jak działa Event Tracking, Event Tracking znaczenie, Event Tracking przewodnik"

        canonical="https://fotz.pl/blog/event-tracking-co-to"
      />
      <ArticleSchema
        title="Event Tracking — co to jest i jak śledzić zdarzenia użytkownika?"
        description="Kompletny przewodnik po event tracking: 6 typów eventów, konwencje nazewnictwa, 5 narzędzi analitycznych i jak projektować event schema."
        url="https://fotz.pl/blog/event-tracking-co-to"
        datePublished="2024-01-30"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Event Tracking", url: "https://fotz.pl/blog/event-tracking-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Event Tracking", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Event Tracking — co to jest i jak śledzić zdarzenia użytkownika?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Event tracking mierzy co użytkownicy robią w produkcie — nie tylko gdzie są.
            Poznaj 6 typów eventów, narzędzia (Mixpanel, Amplitude, GA4) i jak projektować event schema.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest event tracking?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Event tracking</strong> to rejestracja konkretnych działań użytkownika w aplikacji —
              kliknięcie przycisku, wypełnienie formularza, odtworzenie wideo, ukończenie onboardingu.
              W przeciwieństwie do pageview trackingu, event tracking mierzy <em>co</em> użytkownik robi,
              a nie tylko <em>gdzie</em> jest.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Event tracking jest fundamentem product analytics — bez niego nie możesz analizować
              funneli konwersji, retencji na podstawie zachowań ani mierzyć adopcji funkcji produktu.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "analytics.track()", opis: "podstawowe wywołanie SDK do rejestracji eventu z nazwą i właściwościami" },
                { stat: "20-30 eventów", opis: "optymalny zestaw — dobrze zaprojektowany jest cenniejszy niż setki przypadkowych" },
                { stat: "Object Action", opis: "rekomendowana konwencja nazewnictwa — 'Project Created', 'Plan Upgraded'" },
              ].map((s, i) => (
                <div key={i} className="bg-indigo-50 rounded-xl p-5 text-center">
                  <p className="text-lg font-bold text-indigo-600 mb-2 font-mono">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 typów eventów w product analytics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {eventTypes.map((e, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-indigo-700 mb-1">{e.typ}</h3>
                  <p className="text-slate-600 text-sm mb-2">{e.opis}</p>
                  <div className="bg-indigo-50 rounded p-2 mb-2">
                    <p className="text-xs font-semibold text-indigo-600 mb-1">Przykłady:</p>
                    <p className="text-indigo-800 text-xs font-mono">{e.przykład}</p>
                  </div>
                  <p className="text-xs text-slate-400">Kiedy: {e.kiedy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Konwencje nazewnictwa eventów</h2>
            <div className="space-y-4">
              {eventNamingConventions.map((c, i) => (
                <div key={i} className={`rounded-xl p-5 border-2 ${i === 0 ? "border-green-300 bg-green-50" : "border-slate-200 bg-slate-50"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {i === 0 && <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Rekomendowana</span>}
                    <h3 className="font-bold text-slate-900">{c.konwencja}</h3>
                  </div>
                  <p className="font-mono text-sm text-slate-700 mb-2 bg-white rounded p-2">{c.przykład}</p>
                  <p className="text-slate-600 text-sm">{c.dlaczego}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 narzędzi event tracking</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Narzędzie</th>
                    <th className="p-3 text-left">Typ</th>
                    <th className="p-3 text-left">Mocne strony</th>
                    <th className="p-3 text-left">Dla kogo</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingTools.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-indigo-700">{t.narzędzie}</td>
                      <td className="p-3 text-slate-500 text-xs">{t.typ}</td>
                      <td className="p-3 text-slate-600 text-sm">{t.mocne}</td>
                      <td className="p-3 text-slate-600 text-sm">{t.dla}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — event tracking</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="event-tracking-co-to" />
      <ContactSection />
    </Layout>
  );
}
