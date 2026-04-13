import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest model przychodów (revenue model)?",
    answer:
      "Model przychodów (revenue model) to mechanizm, w jaki firma zarabia pieniądze — opisuje skąd pochodzi każda złotówka przychodu, od kogo, za co i jak często. Różni się od modelu biznesowego, który jest szerszy (wartość dla klienta, koszty, partnerzy). Revenue model to konkretnie część finansowa: jak monetyzujesz wartość którą tworzysz. Firmy mogą łączyć kilka modeli jednocześnie.",
  },
  {
    question: "Jaki jest najlepszy model przychodów dla SaaS?",
    answer:
      "Dla SaaS dominuje model subskrypcyjny (MRR/ARR) ze względu na przewidywalność przychodów, niski churn i możliwość ekspansji przez upsell. Najlepsze SaaS używają hybrydowego podejścia: freemium (bezpłatny tier do akwizycji) + subskrypcja (monetyzacja) + usage-based add-ons (ekspansja revenue). Przykład: Slack — darmowe konto, płatne plany per user, dodatkowe funkcje enterprise.",
  },
  {
    question: "Czym różni się model subskrypcyjny od freemium?",
    answer:
      "Model subskrypcyjny — użytkownik płaci od początku, by uzyskać dostęp do produktu (brak darmowej opcji lub bardzo ograniczona). Freemium — bazowy produkt jest darmowy bezterminowo, premium funkcje są płatne. Freemium to strategia akwizycji i konwersji, nie sam model monetyzacji. Konwersja freemium-to-paid wynosi zwykle 2-5% dla konsumenckich i 10-25% dla B2B.",
  },
  {
    question: "Co to jest model marketplace i jak zarabia?",
    answer:
      "Marketplace (platforma pośrednictwa) łączy kupujących i sprzedających, zarabiając prowizję (take rate) od każdej transakcji. Modele zarobku marketplace: take rate (% od wartości transakcji — Airbnb ~13%, Uber ~25%), listing fee (opłata za wystawienie), premium placement (featured listing), subscription (abonament dla sprzedawców), value-added services (ubezpieczenia, promocja). Kluczowa metryka to GMV (Gross Merchandise Volume).",
  },
  {
    question: "Jak wybrać odpowiedni model przychodów dla startupu?",
    answer:
      "Wybór zależy od: gotowości klienta do płacenia (B2B vs. B2C), cyklu sprzedaży (krótki vs. długi), LTV klienta i kosztu akwizycji (CAC), skalowalności (jednostkowy vs. automatyczny), oraz fazy startupu (wczesna walidacja = prostszy model). Zasada: waliduj WTP (willingness to pay) jak najwcześniej. Zbyt wiele startupów zwleka z monetyzacją i odkrywa, że nikt nie chce płacić.",
  },
];

const revenueModels = [
  {
    model: "Subskrypcja (SaaS)",
    mechanizm: "Powtarzalne opłaty (miesięczne/roczne) za dostęp do produktu lub usługi",
    przykłady: "Netflix, Spotify, HubSpot, Slack",
    zalety: "Przewidywalne MRR, wysoka LTV, compound growth",
    wyzwania: "Wysoki churn = runaway koszty, konieczność ciągłej wartości",
    branże: "SaaS, media, software",
  },
  {
    model: "Transakcyjny (e-commerce)",
    mechanizm: "Jednorazowa płatność za produkt lub usługę przy każdej transakcji",
    przykłady: "Amazon, sklepy online, Allegro",
    zalety: "Prosty model, niskie bariery wejścia klienta",
    wyzwania: "Zależność od powtórnych zakupów, brak przewidywalności",
    branże: "Retail, e-commerce, B2C",
  },
  {
    model: "Marketplace / Prowizja",
    mechanizm: "% prowizja od każdej transakcji między kupującymi i sprzedającymi",
    przykłady: "Airbnb (~13%), Uber (~25%), Etsy (6.5%), App Store (15-30%)",
    zalety: "Skalowalność bez inwentarza, network effects",
    wyzwania: "Chicken-and-egg problem, presja na obniżanie take rate",
    branże: "Marketplace, platformy, gig economy",
  },
  {
    model: "Freemium",
    mechanizm: "Darmowy podstawowy produkt + płatne premium funkcje/limity",
    przykłady: "Dropbox, Canva, LinkedIn, Zoom",
    zalety: "Wirusowa dystrybucja, niski CAC, duża baza do konwersji",
    wyzwania: "Niska konwersja (2-5%), kosztowna obsługa darmowych userów",
    branże: "Consumer SaaS, narzędzia B2B, gry",
  },
  {
    model: "Usage-based / Pay-as-you-go",
    mechanizm: "Płatność proporcjonalna do zużycia (API calls, GB, transakcje, użytkownicy)",
    przykłady: "AWS, Twilio, Stripe (2.9%+0.30 per transaction), Snowflake",
    zalety: "Niski próg wejścia, automatyczna ekspansja revenue wraz z wzrostem klienta",
    wyzwania: "Nieprzewidywalne przychody, trudne planowanie",
    branże: "Cloud infrastructure, fintech, API-first SaaS",
  },
  {
    model: "Licencja / Perpetual",
    mechanizm: "Jednorazowa opłata za stałą licencję na użytkowanie produktu",
    przykłady: "Microsoft Office (historycznie), Adobe CS (historycznie), AutoCAD",
    zalety: "Wysoka jednorazowa wartość, brak presji churn",
    wyzwania: "Negatywny cashflow na początku, trudne inwestycje w R&D",
    branże: "Enterprise software (coraz rzadszy — przechodzi na SaaS)",
  },
  {
    model: "Reklamowy (Advertising)",
    mechanizm: "Monetyzacja uwagi użytkowników przez wyświetlanie reklam reklamodawcom",
    przykłady: "Google, Meta, YouTube, TikTok",
    zalety: "Darmowy dostęp = masowa skala, CPM/CPC jako elastyczne modele",
    wyzwania: "Privacy regulations (GDPR), AdBlock, zależność od ilości danych",
    branże: "Media, social, search, content",
  },
  {
    model: "Data / Insights",
    mechanizm: "Sprzedaż zagregowanych danych lub insights z platformy klientom",
    przykłady: "Bloomberg Terminal, Nielsen, Dun & Bradstreet, Twitter Firehose",
    zalety: "Wysoka wartość bez dodatkowych kosztów produkcji",
    wyzwania: "GDPR/privacy, etyczne pytania o własność danych",
    branże: "Fintech, healthcare, research, B2B analytics",
  },
];

const revenueMetrics = [
  { metryka: "MRR (Monthly Recurring Revenue)", definicja: "Suma powtarzalnych przychodów w danym miesiącu", zastosowanie: "SaaS, subskrypcje" },
  { metryka: "ARR (Annual Recurring Revenue)", definicja: "MRR × 12 — roczna skala przychodów", zastosowanie: "Benchmark dla inwestorów i valuations" },
  { metryka: "GMV (Gross Merchandise Volume)", definicja: "Łączna wartość transakcji przez platformę", zastosowanie: "Marketplace, e-commerce" },
  { metryka: "Take Rate / Revenue Rate", definicja: "% GMV który pozostaje jako przychód platformy", zastosowanie: "Marketplace efficiency" },
  { metryka: "ARPU (Avg. Revenue Per User)", definicja: "Średni przychód na użytkownika", zastosowanie: "Wszystkie modele — tracking monetyzacji" },
  { metryka: "NRR (Net Revenue Retention)", definicja: "% przychodów zatrzymanych plus ekspansja po roku", zastosowanie: "SaaS growth health (powyżej 110% = excellent)" },
];

export default function BlogRevenueModelCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Model Przychodów — co to jest? Revenue Model rodzaje i przykłady"
        description="Model przychodów (revenue model) — definicja, 8 typów (subskrypcja, freemium, marketplace, usage-based, reklamowy i inne), kluczowe metryki i jak wybrać odpowiedni model. Przewodnik."
        canonicalUrl="https://fotz.pl/blog/revenue-model-co-to"

        keywords="Model Przychodów co to jest, Model Przychodów definicja, czym jest Model Przychodów, Model Przychodów przykłady, jak działa Model Przychodów, Model Przychodów znaczenie, Model Przychodów przewodnik"
      />
      <ArticleSchema
        title="Model Przychodów — co to jest i jakie są rodzaje revenue model?"
        description="Kompletny przewodnik po modelach przychodów: 8 typów z przykładami, kluczowe metryki i jak wybrać model dla startupu lub biznesu."
        url="https://fotz.pl/blog/revenue-model-co-to"
        datePublished="2024-01-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Model Przychodów", url: "https://fotz.pl/blog/revenue-model-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Model Przychodów" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Model Przychodów — co to jest i jakie są rodzaje?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Revenue model to mechanizm zarabiania firmy. Poznaj 8 głównych modeli przychodów —
            od subskrypcji i freemium po marketplace i usage-based — z przykładami i metrykami.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest model przychodów?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Model przychodów</strong> definiuje jak firma zamienia wartość dostarczaną klientom
              na pieniądze. Odpowiada na pytanie: kto płaci, za co, ile i jak często?
              To strategiczna decyzja, która determinuje growth trajectory, unit economics i atrakcyjność
              dla inwestorów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Wybór modelu przychodów to jeden z najważniejszych decyzji produktowych i biznesowych.
              Wiele startupów upada nie dlatego, że produkt jest zły — ale dlatego, że model
              monetyzacji nie pasuje do segmentu klientów, WTP (willingness to pay)
              lub kosztów obsługi.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "8 modeli", opis: "głównych typów modeli przychodów — większość firm łączy 2-3 z nich" },
                { stat: "110%+", opis: "NRR to benchmark excellent health dla SaaS — więcej niż 100% oznacza ekspansję revenue" },
                { stat: "2-5%", opis: "typowa konwersja freemium-to-paid w modelu konsumenckim (B2B osiąga 10-25%)" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 8 modeli */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">8 głównych modeli przychodów</h2>
            <div className="space-y-4">
              {revenueModels.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{m.model}</h3>
                      <p className="text-slate-600 mb-3">{m.mechanizm}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm mb-3">
                        <div className="bg-green-50 rounded p-3">
                          <p className="text-xs font-semibold text-green-600 mb-1">Zalety:</p>
                          <p className="text-green-800">{m.zalety}</p>
                        </div>
                        <div className="bg-orange-50 rounded p-3">
                          <p className="text-xs font-semibold text-orange-600 mb-1">Wyzwania:</p>
                          <p className="text-orange-800">{m.wyzwania}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-xs text-slate-500">
                        <span><strong>Przykłady:</strong> {m.przykłady}</span>
                        <span><strong>Branże:</strong> {m.branże}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe metryki modeli przychodów</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {revenueMetrics.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-1">{m.metryka}</h3>
                  <p className="text-slate-600 text-sm mb-2">{m.definicja}</p>
                  <p className="text-xs text-slate-400">Zastosowanie: {m.zastosowanie}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — model przychodów</h2>
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

      <ContactSection />
    </Layout>
  );
}
