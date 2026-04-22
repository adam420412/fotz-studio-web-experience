import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest social listening?",
    answer:
      "Social listening (nasłuchiwanie mediów społecznościowych) to monitorowanie i analiza wzmianek o marce, produktach, konkurencji lub określonych tematach w mediach społecznościowych, forach, blogach i innych źródłach online. W odróżnieniu od social monitoring (śledzenie wzmianek), social listening idzie krok dalej — analizuje kontekst, sentyment i trendy, żeby wyciągać actionable insights dla strategii marketingowej i produktowej.",
  },
  {
    question: "Czym social listening różni się od social monitoring?",
    answer:
      "Social monitoring to śledzenie i odpowiadanie na bezpośrednie wzmianki i komentarze — reaktywne, operacyjne, skupione na obsłudze klienta w czasie rzeczywistym. Social listening to analiza zebranych danych żeby zrozumieć trendy, sentyment i insight o rynku — proaktywne, strategiczne, skupione na wiedzy. Analogia: monitoring = słyszysz co ktoś mówi o Tobie, listening = rozumiesz co to znaczy i co z tym zrobić.",
  },
  {
    question: "Co można monitorować dzięki social listening?",
    answer:
      "Typowe obszary: 1) Wzmianki o marce (branded keywords, nazwy produktów, hashtagi), 2) Wzmianki o konkurencji (co mówią o nich vs. o Tobie?), 3) Branżowe trendy i tematy konwersacji, 4) Sentyment (pozytywny/negatywny/neutralny) wobec marki, 5) Kryzysy i zagrożenia reputacyjne (wczesne ostrzeżenie), 6) Opinie o produktach i feedbcak funkcji, 7) Influencerzy i ambasadorzy branżowi, 8) Potencjalni leady — pytania i problemy które Twój produkt rozwiązuje.",
  },
  {
    question: "Jakie narzędzia do social listening?",
    answer:
      "Popularne narzędzia: Brand24 (polskie, przystępne cenowo, świetne dla SMB), Brandwatch (enterprise, zaawansowane AI i analytics), Sprout Social (zarządzanie + listening), Hootsuite Insights, Mention, Talkwalker (enterprise, 187 języków), Semrush Social (integracja z SEO). Darmowe: Google Alerts (podstawowe monitorowanie słów kluczowych), natywne search w social media platformach. Wybór zależy od: budżetu, skali wzmianek, potrzebnych integracji.",
  },
  {
    question: "Jak mierzyć skuteczność social listening?",
    answer:
      "Kluczowe metryki: Share of Voice (% wzmianek Twojej marki vs. konkurencji w branży), Sentiment Score (proporcja pozytywnych vs negatywnych wzmianek), Mention Volume Trend (trend liczby wzmianek w czasie), Reach (zasięg wzmianek — ile osób potencjalnie zobaczyło), Response Rate i Response Time (dla customer care). Bardziej zaawansowane: Brand Health Score (kombinacja metryk), Earned Media Value (wartość mediów zarobionych przez wzmianki).",
  },
];

const listeningUseCases = [
  {
    przypadek: "Zarządzanie reputacją",
    opis: "Wczesne wykrywanie kryzysów i negatywnych trendów zanim eskalują",
    przykład: "Marka zauważa gwałtowny wzrost negatywnych wzmianek po aktualizacji produktu — reaguje zanim problem stanie się viralem",
    impact: "Wysoki — reputacja bezpośrednio wpływa na sprzedaż i recruitment",
  },
  {
    przypadek: "Competitive Intelligence",
    opis: "Analiza sentymentu wobec konkurencji, ich mocnych i słabych stron wg użytkowników",
    przykład: "Monitoring wzmianek o konkurencie ujawnia że użytkownicy narzekają na brak X — okazja do pozycjonowania",
    impact: "Średni-wysoki — informuje decyzje produktowe i marketingowe",
  },
  {
    przypadek: "Product Feedback",
    opis: "Zbieranie niefiltrowanego feedbacku o produktach z social media i forów",
    przykład: "Twitter, Reddit i G2 pełne opinii o UX — source of truth dla product backlog",
    impact: "Wysoki — bezpośredni input do roadmapy produktu",
  },
  {
    przypadek: "Identyfikacja influencerów",
    opis: "Znajdowanie organicznych ambasadorów marki i kluczowych głosów w branży",
    przykład: "Mikro-influencer z 15k followersów regularnie chwali produkt — zaproś do programu partnerskiego",
    impact: "Średni — wpływa na strategie influencer i community marketing",
  },
  {
    przypadek: "Lead Generation",
    opis: "Monitoring pytań i problemów które rozwiązuje Twój produkt",
    przykład: "'Ktoś wie jakie narzędzie do zarządzania projektami dla agencji?' → Twój sales team odpowiada",
    impact: "Średni — zamiana social signals w realne leady",
  },
  {
    przypadek: "Trend Spotting",
    opis: "Identyfikacja rosnących trendów branżowych zanim staną się mainstreamem",
    przykład: "Wzrost konwersacji o AI w dokumentach — sygnał do wdrożenia funkcji AI w produkcie SaaS",
    impact: "Wysoki długoterminowy — informuje strategię produktu i treści",
  },
];

const listeningTools = [
  { narzędzie: "Brand24", rynek: "PL", cennik: "Od 99 PLN/mies.", mocne: "Polskie media, prosty UI, alerty w czasie rzeczywistym", dla: "SMB, agencje" },
  { narzędzie: "Brandwatch", rynek: "Global", cennik: "Enterprise", mocne: "AI insights, 100M+ źródeł, zaawansowane analytics", dla: "Enterprise" },
  { narzędzie: "Mention", rynek: "Global", cennik: "Od ~350 PLN/mies.", mocne: "Prosty w użyciu, dobra integracja z social", dla: "SMB, startupy" },
  { narzędzie: "Sprout Social", rynek: "Global", cennik: "Od ~1200 PLN/mies.", mocne: "Listening + publishing + analytics w jednym", dla: "Mid-market" },
  { narzędzie: "Google Alerts", rynek: "Global", cennik: "Darmowy", mocne: "Prosty monitoring słów kluczowych przez email", dla: "Podstawowe potrzeby" },
];

export default function BlogSocialListeningCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Social Listening | Fotz Studio"
        description="Social listening — definicja, różnica vs social monitoring, 6 przypadków użycia, narzędzia (Brand24, Brandwatch) i kluczowe metryki. Kompletny przewodnik…"
        canonical="https://fotz.pl/blog/social-listening-co-to"

        keywords="Social Listening co to jest, Social Listening definicja, czym jest Social Listening, Social Listening w marketingu, Social Listening przykłady, jak działa Social Listening, Social Listening strategia"
      />
      <ArticleSchema
        title="Social Listening — co to jest i jak nasłuchiwać mediów społecznościowych?"
        description="Kompletny przewodnik po social listening: 6 use cases, 5 narzędzi, kluczowe metryki i różnica vs social monitoring."
        url="https://fotz.pl/blog/social-listening-co-to"
        datePublished="2024-02-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Social Listening", url: "https://fotz.pl/blog/social-listening-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Social Listening", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Social Listening — co to jest i jak nasłuchiwać internetu?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Social listening to analiza tego co mówi internet o Twojej marce, konkurencji i branży.
            Poznaj 6 zastosowań, narzędzia (Brand24, Brandwatch) i jak wyciągać actionable insights.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest social listening?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Social listening</strong> to monitorowanie i analiza wzmianek o marce, produktach
              i tematach w mediach społecznościowych, forach i mediach online — w celu wyciągania
              strategicznych wniosków. Nie chodzi tylko o słyszenie co się mówi, ale o rozumienie
              kontekstu, sentymentu i trendów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firmy które praktykują social listening mają przewagę — słyszą feedback zanim trafi
              do formularzy supportu, identyfikują kryzysy zanim eskalują i odkrywają niezaspokojone
              potrzeby rynku których konkurencja jeszcze nie widzi.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "Share of Voice", opis: "kluczowa metryka — % wzmianek Twojej marki w branżowej konwersacji" },
                { stat: "Sentyment", opis: "pozytywny / negatywny / neutralny — barometr zdrowia marki" },
                { stat: "Real-time", opis: "monitoring w czasie rzeczywistym — wczesne ostrzeżenie dla kryzysów" },
              ].map((s, i) => (
                <div key={i} className="bg-pink-50 rounded-xl p-5 text-center">
                  <p className="text-xl font-bold text-pink-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 zastosowań social listening</h2>
            <div className="space-y-4">
              {listeningUseCases.map((uc, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{uc.przypadek}</h3>
                      <p className="text-slate-600 text-sm mb-2">{uc.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-pink-50 rounded p-2">
                          <p className="text-xs font-semibold text-pink-600 mb-1">Przykład:</p>
                          <p className="text-pink-800 italic">{uc.przykład}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Impact:</p>
                          <p className="text-slate-700">{uc.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 narzędzi social listening</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Narzędzie</th>
                    <th className="p-3 text-left">Rynek</th>
                    <th className="p-3 text-left">Cennik</th>
                    <th className="p-3 text-left">Mocne strony</th>
                    <th className="p-3 text-left">Dla kogo</th>
                  </tr>
                </thead>
                <tbody>
                  {listeningTools.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-pink-700">{t.narzędzie}</td>
                      <td className="p-3 text-slate-600 text-sm">{t.rynek}</td>
                      <td className="p-3 text-slate-600 text-sm">{t.cennik}</td>
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
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — social listening</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="social-listening-co-to" />
      <ContactSection />
    </Layout>
  );
}
