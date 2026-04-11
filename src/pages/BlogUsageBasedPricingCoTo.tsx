import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Usage-Based Pricing (UBP)?",
    answer: "Usage-Based Pricing (UBP), znany też jako Pay-as-you-go lub consumption-based pricing, to model cenowy w którym klient płaci proporcjonalnie do rzeczywistego użycia produktu — nie za licencję czy seat. Przykłady: Stripe pobiera 1.4% + 25gr za każdą transakcję. AWS pobiera za GB transferu danych, godziny compute, liczbę requestów. Twilio pobiera za każdy wysłany SMS i minutę rozmowy. Snowflake pobiera za credits skonsumowane przez queries. UBP eliminuje barierę wejścia (brak wysokiego ARPU od dnia 1) i naturalnie skaluje z wartością — klient płaci więcej gdy więcej korzysta, co jest fair. Kluczowe wyzwanie: revenue staje się zmienne i trudniejsze do prognozowania.",
  },
  {
    question: "Jakie są modele Usage-Based Pricing?",
    answer: "Modele UBP: Pure Usage-Based — całość kosztu zależy od użycia. Niski próg wejścia, ale nieprzewidywalny revenue dla firmy (Stripe, Twilio, AWS). Hybrid (Commit + Overage) — klient płaci stałą opłatę za minimum (committed use) i stawkę za przekroczenie. Przewidywalny baseline + upside. Popularne w enterprise (Snowflake, Datadog). Tiered Usage — różne stawki dla różnych wolumenów (1-10K unitów: 0.10, 10K-100K: 0.08, 100K+: 0.05). Zachęca do skalowania. Volume Pricing — jedna stawka na cały wolumen zależy od całkowitej wielkości zamówienia. Seat + Usage — stała opłata per user + opłata za zużycie (hybrid popularny w SaaS developer tools).",
  },
  {
    question: "Jak UBP wpływa na metryki SaaS?",
    answer: "Wpływ UBP na metryki SaaS: ARR vs. ARR'ish — przy UBP mówi się o 'annualized run rate' opartym na ostatnich 30 dniach, nie o contracted ARR. Revenue jest volatile. NRR (Net Revenue Retention) — UBP naturalnie drive'uje wysokie NRR bo expansion jest automatyczna gdy klient rośnie. Snowflake reportuje 130%+ NRR. CAC Payback — jest dłuższy bo initial commit jest niski. Klient 'ramping up' generuje revenue z opóźnieniem. Forecasting — wymaga modeli prediktywnych opartych na usage patterns, nie tylko churn i expansion rate. Churn signal — drop w usage jest wczesnym sygnałem churnu, zanim klient formalnie odejdzie. Usage data = customer health signal.",
  },
  {
    question: "Kiedy stosować Usage-Based Pricing?",
    answer: "Kiedy UBP jest właściwy: Wartość produktu jest łatwo mierzalna i bezpośrednio powiązana z użyciem (liczba transakcji, API calls, GB danych). Klienci mają bardzo różne skale użycia — od małego startupu do enterprise — i pricing musi działać dla obu. Produkt ma naturalne 'units' które klient rozumie (wiadomości, minuty, rekordy). Bariera wejścia musi być niska — klient chce zacząć małym i skalować. Kiedy UBP nie działa: produkt jest używany stale bez jasnych 'units' (np. projekt management tool). Klienci enterprise wymagają przewidywalnych kosztów budżetowych. Usage jest trudna do zmierzenia lub klientowi trudno przewidzieć. W takim przypadku seat-based lub flat-rate jest lepszym wyborem.",
  },
  {
    question: "Jak budować pricing page dla Usage-Based produktu?",
    answer: "Pricing page dla UBP: Pokaż kalkulator — klient wpisuje swoje oczekiwane użycie i widzi szacowany koszt. Stripe i Twilio mają świetne przykłady. Pokaż przykłady typowych klientów — 'startup wysyłający 10K SMS/miesiąc płaci 50 USD'. Transparentność stawek — pokaż pełną tabelę cenową bez ukrytych opłat. Pokaż jak skaluje — wizualizuj koszt przy 10x wzroście (klient chce wiedzieć na co się naraża). Darmowy tier lub trial z kredytem startowym — obniż barierę wejścia. Committed use discounts — enterprise chce pewności kosztów, oferuj rabat za roczny commit (Snowflake Virtual Private Cloud). Jasne free limits — co jest zawsze darmowe, co zaczyna kosztować.",
  },
];

const ubpModels = [
  {
    model: "Pure Usage-Based",
    opis: "Płatność wyłącznie za faktyczne użycie — zero stałych opłat",
    przykłady: "Stripe, Twilio, SendGrid, Mailgun",
    zalety: "Najniższa bariera wejścia, skaluje z wartością, fair dla małych",
    wady: "Nieprzewidywalny revenue, ryzyko bill shock u klienta",
    kolor: "blue",
  },
  {
    model: "Commit + Overage",
    opis: "Stała opłata za minimalne użycie + stawka za przekroczenie",
    przykłady: "Snowflake, Datadog, MongoDB Atlas, Google Cloud Committed Use",
    zalety: "Przewidywalny baseline ARR, rabat za commit, enterprise-friendly",
    wady: "Wyższy próg wejścia, klient może być locked-in powyżej potrzeb",
    kolor: "green",
  },
  {
    model: "Tiered Usage",
    opis: "Różne stawki per unit dla różnych przedziałów wolumenu",
    przykłady: "Mailchimp (kontakty), HubSpot (kontakty), Zapier (zaps)",
    zalety: "Zachęca do wzrostu, prostsze dla klientów, przewidywalne dla SMB",
    wady: "Cliff effects na progach, kompleksowe do komunikacji",
    kolor: "purple",
  },
  {
    model: "Seat + Usage Hybrid",
    opis: "Stała opłata per user + dodatkowa opłata za zużycie zasobów",
    przykłady: "Intercom, Zendesk (per agent + conversations), Gong",
    zalety: "Stable baseline + natural expansion, łatwiejszy forecasting",
    wady: "Dwa wymiary kosztów — trudniejsza komunikacja",
    kolor: "orange",
  },
];

const ubpMetrics = [
  { metryka: "Usage-based ARR", opis: "Annualizowany revenue oparty na ostatnich 30 dniach użycia (nie contracted)", benchmark: "Volatile — śledzić trend, nie absolutną wartość" },
  { metryka: "Net Revenue Retention (NRR)", opis: "Kluczowa metryka — UBP naturalnie generuje expansion bez sprzedaży", benchmark: "Najlepsze UBP firmy: 120-150%+ NRR" },
  { metryka: "Usage Growth Rate", opis: "Wzrost użycia per kohorta — predyktor przyszłego revenue", benchmark: "Zdrowy: 15-25% MoM wzrost użycia w nowych kohortach" },
  { metryka: "Revenue per Unit", opis: "Ile zarabiasz per unit użycia — śledź czy marża się trzyma przy skalowaniu", benchmark: "Musi być wyższy niż koszt dostarczenia jednego unita" },
  { metryka: "Usage Predictability", opis: "Jak bardzo przewidywalne jest użycie klientów — base vs. spiky", benchmark: "Wyższy: lepsza dla FP&A i inventory planning" },
  { metryka: "Committed vs. Actual Ratio", opis: "Stosunek committed use do rzeczywistego użycia — indikator satysfakcji z kontraktu", benchmark: "Powyżej 100% = klient rośnie ponad commit = expansion opportunity" },
];

export default function BlogUsageBasedPricingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Usage-Based Pricing — co to jest i jak wdrożyć? | Fotz.pl"
        description="Usage-Based Pricing (UBP) — modele cenowe pay-as-you-go, wpływ na metryki SaaS, kiedy stosować i jak budować pricing page. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/usage-based-pricing-co-to-jest-jak-wdrozyz"
      />
      <ArticleSchema
        title="Usage-Based Pricing — co to jest i jak wdrożyć?"
        description="Kompletny przewodnik po Usage-Based Pricing: modele UBP, metryki, kiedy stosować i jak budować pricing page dla produktu SaaS."
        url="https://fotz.pl/blog/usage-based-pricing-co-to-jest-jak-wdrozyz"
        datePublished="2024-02-10"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Usage-Based Pricing", url: "https://fotz.pl/blog/usage-based-pricing-co-to-jest-jak-wdrozyz" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Usage-Based Pricing", href: "/blog/usage-based-pricing-co-to-jest-jak-wdrozyz" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SaaS Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Usage-Based Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Płacisz tyle ile używasz. Usage-Based Pricing eliminuje barierę wejścia
              i naturalnie skaluje revenue z wartością dostarczaną klientowi.
              Stripe, Snowflake, Twilio — to przyszłość monetyzacji SaaS.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Modeli UBP", value: "4" },
                { label: "NRR liderów UBP", value: "130%+" },
                { label: "Bariera wejścia", value: "Minimalna" },
                { label: "Kluczowa metryka", value: "NRR" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modele UBP */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 modele Usage-Based Pricing</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie ma jednego słusznego modelu UBP. Wybór zależy od Twojego produktu,
              klientów i tego czy zależy Ci bardziej na niskiej barierze wejścia
              czy przewidywalnym revenue.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {ubpModels.map((m) => (
              <FadeInView key={m.model}>
                <div className={`rounded-xl border-2 p-6 ${
                  m.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  m.kolor === "green" ? "border-green-200 bg-green-50" :
                  m.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-2 ${
                    m.kolor === "blue" ? "text-blue-800" :
                    m.kolor === "green" ? "text-green-800" :
                    m.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>{m.model}</h3>
                  <p className="text-gray-700 text-sm mb-3">{m.opis}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Przykłady</div>
                      <p className="text-gray-700">{m.przykłady}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-green-600 uppercase mb-1">Zalety</div>
                      <p className="text-gray-700">{m.zalety}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-red-600 uppercase mb-1">Wady</div>
                      <p className="text-gray-700">{m.wady}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Metryki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe metryki dla UBP</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Usage-Based Pricing wymaga innych metryk niż klasyczny seat-based SaaS.
              Contracted ARR jest tu mniej relevantny — liczy się usage trend i NRR.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {ubpMetrics.map((m, i) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-cyan-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{m.metryka}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <p className="text-sm text-gray-700">{m.opis}</p>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Benchmark</div>
                          <p className="text-sm font-medium text-gray-800">{m.benchmark}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
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
