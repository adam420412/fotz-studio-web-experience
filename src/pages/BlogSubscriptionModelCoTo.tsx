import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest model subskrypcyjny?",
    answer:
      "Model subskrypcyjny (subscription model) to model biznesowy, w którym klienci płacą powtarzalną opłatę (miesięczną, roczną, tygodniową) za ciągły dostęp do produktu lub usługi, zamiast jednorazowego zakupu. Kluczowa przewaga: przewidywalne, powtarzalne przychody (MRR/ARR) które są wyżej wyceniane przez rynki niż transakcyjne. Model subskrypcyjny dominuje dziś w SaaS, mediach, fitness, jedzeniu i e-commerce.",
  },
  {
    question: "Czym jest MRR i jak go liczyć?",
    answer:
      "MRR (Monthly Recurring Revenue) to suma wszystkich powtarzalnych przychodów z aktywnych subskrypcji w danym miesiącu. Formuła: MRR = (liczba aktywnych subskrybentów) × (średnia miesięczna opłata). Jeśli klient płaci rocznie, dziel przez 12 by uzyskać MRR. MRR breakdown: New MRR (nowi klienci), Expansion MRR (upgrade), Churned MRR (odchodzący), Contraction MRR (downgrade). Net New MRR = New + Expansion - Churned - Contraction.",
  },
  {
    question: "Jaki jest optymalny churn rate w modelu subskrypcyjnym?",
    answer:
      "Benchmark monthly churn rate: Consumer SaaS — poniżej 5% jest dobre, poniżej 2% excellent. B2B SaaS SMB — poniżej 3% jest dobre. B2B SaaS Enterprise — poniżej 1% jest dobre. Annual churn: poniżej 10% dla większości SaaS, poniżej 5% dla enterprise. Net Revenue Retention (NRR) jest ważniejsze niż churn — jeśli NRR jest powyżej 100%, expansion revenue kompensuje churned customers.",
  },
  {
    question: "Jak ustalić cenę subskrypcji?",
    answer:
      "Metody wyceny subskrypcji: Value-based pricing (bazuj na wartości którą tworzysz dla klienta — ile oszczędzają lub zarabiają), Competitor benchmarking (gdzie jesteś vs. rynek), Willingness-to-pay research (van Westendorp Price Sensitivity Meter, conjoint analysis). Unikaj cost-plus pricing. Reguła: cena subskrypcji powinna być maksymalnie 10% wartości którą klient z niej uzyskuje.",
  },
  {
    question: "Kiedy stosować rozliczenie miesięczne a kiedy roczne?",
    answer:
      "Roczna subskrypcja z dyskontem (15-20%) jest lepsza dla obu stron: firma dostaje cashflow z góry i niższy churn (roczny churn to zwykle 1/12 miesięcznego), klient płaci mniej. Rekomendacja: oferuj oba, promuj roczną (ustaw ją jako default z miesięczną jako alternatywą). Hubspot, Salesforce i większość B2B SaaS generują 60-80% przychodów z subskrypcji rocznych.",
  },
];

const subscriptionTypes = [
  {
    typ: "SaaS / Software",
    opis: "Dostęp do oprogramowania online per user lub per seat",
    przykłady: "Slack ($7.25/user/mies.), HubSpot, Salesforce, Adobe CC",
    metrics: "MRR, ARR, NRR, Seat expansion",
    pricing: "Per seat, flat rate, usage-based",
  },
  {
    typ: "Content / Media",
    opis: "Dostęp do treści — wideo, muzyki, artykułów, kursów",
    przykłady: "Netflix ($15.49/mies.), Spotify, NYT, Masterclass",
    metrics: "CAC, Churn, LTV, DAU/MAU",
    pricing: "Flat monthly/annual, tier-based",
  },
  {
    typ: "Physical Product Box",
    opis: "Cykliczna dostawa fizycznych produktów (beauty, jedzenie, ubrania)",
    przykłady: "HelloFresh, Dollar Shave Club, Birchbox, ipsy",
    metrics: "AOV, Refund rate, Skip rate, LTV",
    pricing: "Per box, frequency options",
  },
  {
    typ: "Service Subscription",
    opis: "Dostęp do usług na żądanie — fitness, doradztwo, serwis",
    przykłady: "Peloton, ClassPass, Amazon Prime, maintenance contracts",
    metrics: "Utilization rate, NPS, Renewal rate",
    pricing: "Monthly fee, usage credits",
  },
  {
    typ: "Marketplace Membership",
    opis: "Subskrypcja dająca korzyści na platformie (darmowa wysyłka, rabaty)",
    przykłady: "Amazon Prime, Costco, Allegro Smart",
    metrics: "Member spend vs. non-member, GMV lift",
    pricing: "Annual flat fee",
  },
];

const mrrComponents = [
  { składnik: "New MRR", definicja: "Przychód od zupełnie nowych klientów którzy dołączyli w danym miesiącu", znak: "+" },
  { składnik: "Expansion MRR", definicja: "Wzrost przychodu od istniejących klientów (upgrade, add-ons, więcej seatów)", znak: "+" },
  { składnik: "Reactivation MRR", definicja: "Przychód od klientów którzy wrócili po wcześniejszym churnie", znak: "+" },
  { składnik: "Contraction MRR", definicja: "Spadek przychodu od istniejących klientów (downgrade, redukcja seatów)", znak: "−" },
  { składnik: "Churned MRR", definicja: "Utracony przychód od klientów którzy całkowicie odeszli", znak: "−" },
];

const retentionStrategies = [
  { faza: "Onboarding (0-30 dni)", cel: "Szybka aktywacja — klient musi zobaczyć wartość zanim oceni czy warto płacić", taktyki: "Guided setup, Checklists, Success milestones, Personal onboarding call" },
  { faza: "Adoption (30-90 dni)", cel: "Budowanie nawyku i integracja z workflow klienta", taktyki: "Feature discovery emails, In-app tooltips, Power user programs, Integrations" },
  { faza: "Renewal Risk (-60 dni)", cel: "Identyfikacja i interwencja przed decyzją o nieprzedłużeniu", taktyki: "Health score alerts, QBR calls, Success reviews, ROI reports" },
  { faza: "Expansion", cel: "Wzrost wartości klienta przez upgrades i cross-sell", taktyki: "Usage-based upgrade prompts, Executive sponsors, Case studies, Add-ons" },
];

export default function BlogSubscriptionModelCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Model Subskrypcyjny — co to jest? Subscription model MRR i churn"
        description="Model subskrypcyjny — definicja, 5 typów (SaaS, content, product box), składniki MRR, churn benchmarks i strategie retencji. Kompletny przewodnik po subscription business."
        canonicalUrl="https://fotz.pl/blog/subscription-model-co-to"
      />
      <ArticleSchema
        title="Model Subskrypcyjny — co to jest i jak go zbudować?"
        description="Kompletny przewodnik po modelu subskrypcyjnym: 5 typów, składniki MRR (New, Expansion, Churned), benchmarki churn i strategie retencji."
        url="https://fotz.pl/blog/subscription-model-co-to"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Model Subskrypcyjny", url: "https://fotz.pl/blog/subscription-model-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Model Subskrypcyjny" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Model Subskrypcyjny — co to jest i jak go zbudować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Subscription business generuje przewidywalne MRR i jest wyżej wyceniany przez rynki.
            Poznaj 5 typów, składniki MRR, benchmarki churn i strategie retencji.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest model subskrypcyjny?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Model subskrypcyjny</strong> zastępuje jednorazową transakcję powtarzalną relacją:
              klient płaci regularnie w zamian za ciągły dostęp do wartości. To fundamentalna zmiana
              w myśleniu o biznesie — zamiast pytać "jak sprzedać produkt?" pytasz
              "jak utrzymać klienta na kolejny miesiąc?"
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Rynek subscription commerce rośnie 5 razy szybciej niż tradycyjny retail.
              Firmy subskrypcyjne są wyceniane na 6-12× ARR, podczas gdy firmy transakcyjne
              na 1-3× przychodów rocznych.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "5×", opis: "szybciej rośnie rynek subscription commerce vs. tradycyjny retail (McKinsey, 2023)" },
                { stat: "6-12×", opis: "ARR — typowa wycena firmy SaaS vs. 1-3× przychodów dla biznesów transakcyjnych" },
                { stat: "110%+", opis: "Net Revenue Retention — benchmark 'world class' SaaS (ekspansja kompensuje churn)" },
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

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 typów modeli subskrypcyjnych</h2>
            <div className="space-y-4">
              {subscriptionTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{t.typ}</h3>
                  <p className="text-slate-600 mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Przykłady:</p>
                      <p className="text-blue-800">{t.przykłady}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Kluczowe metryki:</p>
                      <p className="text-slate-700">{t.metrics}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Modele cenowe:</p>
                      <p className="text-orange-800">{t.pricing}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Składniki MRR</h2>
            <div className="space-y-3">
              {mrrComponents.map((m, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${m.znak === "+" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {m.znak}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{m.składnik}</h3>
                    <p className="text-slate-600 text-sm">{m.definicja}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="font-semibold text-blue-900">Formuła Net New MRR:</p>
              <p className="text-blue-800 font-mono text-sm mt-1">Net New MRR = New MRR + Expansion MRR + Reactivation MRR − Contraction MRR − Churned MRR</p>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Strategie retencji subskrybentów</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {retentionStrategies.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-1">{s.faza}</h3>
                  <p className="text-slate-600 text-sm mb-2">{s.cel}</p>
                  <p className="text-xs text-slate-500">{s.taktyki}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — model subskrypcyjny</h2>
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

      <ContactSection />
    </Layout>
  );
}
