import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Magic Number w SaaS?",
    answer: "Magic Number (znany też jako Sales Efficiency Ratio) to metryka mierząca efektywność wydatków na sprzedaż i marketing w SaaS. Formuła: Magic Number = (Revenue Quarter N - Revenue Quarter N-1) x 4 / Sales & Marketing Spend Quarter N-1. Interpretacja: jeśli Magic Number = 1.0, to każdy dolar wydany na S&M w poprzednim kwartale generuje 1 dolar nowego ARR rocznie. Metryka spopularyzowana przez Joshe Kopelmana (First Round Capital) jako szybki test czy firma powinna 'pedałować mocniej' czy zwolnić ze wzrostem.",
  },
  {
    question: "Jaki Magic Number jest dobry?",
    answer: "Benchmarki Magic Number: Poniżej 0.5 — firma spala gotówkę nieefektywnie. S&M spend nie zwraca się w akceptowalnym czasie. Sygnał do rewizji GTM i cost structure. 0.5-0.75 — marginalny. Można rosnąć ale z ostrożnością. Szukaj ulepszeń w efektywności sprzedaży. 0.75-1.0 — dobry. Firma działa efektywnie. Można bezpiecznie skalować S&M spend. Powyżej 1.0 — doskonały. Firma powinna agresywnie zwiększać S&M wydatki bo każdy dolar inwestycji zwraca się powyżej 1:1 w ciągu roku. Powyżej 1.5 — wyjątkowy. Rzadki i wskazuje na silny PMF i efektywny GTM. Burn capital as fast as possible to grow.",
  },
  {
    question: "Jak obliczyć Magic Number?",
    answer: "Krok po kroku: 1. Pobierz Revenue (MRR lub ARR) za bieżący kwartał (Q) i poprzedni kwartał (Q-1). 2. Oblicz przyrost: Revenue_Q - Revenue_Q-1. 3. Annualizuj: pomnóż przez 4 (bo kwartał to 1/4 roku). 4. Podziel przez S&M spend z poprzedniego kwartału (Q-1). Przykład: Q1 Revenue: 2.5M PLN. Q0 Revenue: 2.0M PLN. Q0 S&M: 1.2M PLN. Magic Number = (2.5M - 2.0M) x 4 / 1.2M = 0.5M x 4 / 1.2M = 2M / 1.2M = 1.67. Interpretacja: za każdy 1 PLN S&M w Q0, firma wygenerowała 1.67 PLN nowego annualized revenue w Q1 — doskonały wynik.",
  },
  {
    question: "Jakie są ograniczenia Magic Number?",
    answer: "Ograniczenia Magic Number: Opóźnienie (lag) — wydatki S&M generują revenue z opóźnieniem, często większym niż jeden kwartał. Magic Number może zaniżać efektywność przy szybkim skalowaniu S&M. Churn ignorowany — Magic Number patrzy tylko na nowy revenue, nie uwzględnia churnu. Firma z 50% churnem może mieć świetny Magic Number ale topiony biznes. Sezonowość — Q4 jest często najlepszym kwartałem (enterprise budgets). Nie porównuj Q4 z Q1. Mix produktowy — nie rozróżnia nowego ARR od expansion ARR. Różne modele GTM — Magic Number ma sens dla direct sales; mniej dla PLG. Uzupełniaj Magic Number innymi metrykami: CAC Payback Period, LTV:CAC, NRR.",
  },
  {
    question: "Czym Magic Number różni się od CAC Payback Period?",
    answer: "Magic Number vs. CAC Payback Period: Magic Number mierzy 'za każdy dolar S&M ile nowego revenue rocznego generujesz?' — patrzy na efektywność na poziomie kohortowym. CAC Payback Period mierzy 'ile miesięcy trwa zanim jeden klient zwróci koszty jego pozyskania?' — patrzy na poziomie pojedynczego klienta. Magic Number jest szybszy do obliczenia (potrzebujesz tylko agregowanych danych P&L). CAC Payback Period wymaga danych per klient lub segment. Oba są potrzebne: Magic Number do szybkiego oceny ogólnej efektywności S&M, CAC Payback do rozumienia ekonomiki per klient i segment.",
  },
];

const magicNumberBenchmarks = [
  { poziom: "Poniżej 0.5", ocena: "Czerwona flaga", kolor: "red", opis: "S&M nie zwraca się. Rewizja GTM strategy, pricing lub ICP jest konieczna.", akcja: "Zwolnij S&M spend, skup się na retention i organicznym wzroście" },
  { poziom: "0.5 – 0.75", ocena: "Marginalny", kolor: "orange", opis: "Można rosnąć ale z ostrożnością. Szukaj ulepszeń w sales efficiency.", akcja: "Optymalizuj: lepszy ICP, wyższy ACV, skróć sales cycle" },
  { poziom: "0.75 – 1.0", ocena: "Dobry", kolor: "blue", opis: "Firma działa efektywnie. Bezpiecznie skalować S&M przy dostępnym kapitale.", akcja: "Utrzymaj tempo, szukaj nowych channels do skalowania" },
  { poziom: "1.0 – 1.5", ocena: "Świetny", kolor: "green", opis: "Wyjątkowa efektywność S&M. Agresywnie zwiększaj wydatki — każdy dolar zwraca powyżej 1:1.", akcja: "Pedałuj mocno — to moment do agresywnego wzrostu" },
  { poziom: "Powyżej 1.5", ocena: "Doskonały", kolor: "purple", opis: "Rzadki. Silny PMF i efektywny GTM. Burn capital as fast as possible to capture market.", akcja: "Raise more, spend more — to rzadki moment który nie trwa wiecznie" },
];

const magicNumberDrivers = [
  { driver: "Wyższy ACV", wpływ: "Pozytywny", opis: "Przy tym samym koszcie sprzedaży, wyższy kontrakt = lepsza efektywność S&M" },
  { driver: "Krótszy sales cycle", wpływ: "Pozytywny", opis: "Szybsze zamykanie deali = niższy koszt na deal, więcej deali w kwartale" },
  { driver: "Niższy CAC", wpływ: "Pozytywny", opis: "Tańsze pozyskanie klientów przez inbound, PLG lub channel partnerships" },
  { driver: "Wyższy win rate", wpływ: "Pozytywny", opis: "Mniej straconego wysiłku sprzedażowego na przegranych szansach" },
  { driver: "Wysoki churn", wpływ: "Negatywny", opis: "Magic Number nie uwzględnia churnu — wysoka MN z wysokim churnem = złudzenie" },
  { driver: "Długi ramp nowych AE", wpływ: "Negatywny", opis: "Nowi AE kosztują zanim generują revenue — przejściowo obniża Magic Number" },
];

export default function BlogMagicNumberCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Magic Number — efektywność sprzedaży w SaaS | Fotz.pl"
        description="Magic Number (Sales Efficiency Ratio) w SaaS — formuła, benchmarki, jak obliczać i co wpływa na efektywność S&M. Kompletny przewodnik dla founders i CFO."
        canonicalUrl="https://fotz.pl/blog/magic-number-efektywnosc-sprzedazy-saas"

        keywords="Magic Number co to jest, Magic Number definicja, czym jest Magic Number, Magic Number startup, Magic Number jak liczyć, Magic Number wzór, Magic Number przykłady"

        canonical="https://fotz.pl/blog/magic-number-efektywnosc-sprzedazy-saas"
      />
      <ArticleSchema
        title="Magic Number — efektywność sprzedaży w SaaS"
        description="Kompletny przewodnik po Magic Number: formuła, benchmarki, drivery i różnica vs CAC Payback Period."
        url="https://fotz.pl/blog/magic-number-efektywnosc-sprzedazy-saas"
        datePublished="2024-02-08"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Magic Number", url: "https://fotz.pl/blog/magic-number-efektywnosc-sprzedazy-saas" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-yellow-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Magic Number", url: "/blog/magic-number-efektywnosc-sprzedazy-saas" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-yellow-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SaaS Metryki
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Magic Number
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Magic Number to prosta odpowiedź na kluczowe pytanie: za każdy dolar
              wydany na sprzedaż i marketing — ile nowego przychodu rocznego generujesz?
              Powyżej 1.0: pedałuj mocno. Poniżej 0.5: zatrzymaj się i napraw GTM.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Formuła", value: "New ARR x4 / S&M" },
                { label: "Dobry wynik", value: "Powyżej 0.75" },
                { label: "Doskonały wynik", value: "Powyżej 1.0" },
                { label: "Driverów", value: "6" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki Magic Number i co robić</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Magic Number to szybki test zdrowia Twojego GTM. Zależy od etapu firmy,
              segmentu i modelu sprzedaży — ale trend jest jasny: wyżej = lepiej.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {magicNumberBenchmarks.map((b) => (
              <FadeInView key={b.poziom}>
                <div className={`rounded-xl border p-5 ${
                  b.kolor === "red" ? "border-red-200 bg-red-50" :
                  b.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  b.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  b.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-36">
                      <div className={`font-bold text-lg ${
                        b.kolor === "red" ? "text-red-700" :
                        b.kolor === "orange" ? "text-orange-700" :
                        b.kolor === "blue" ? "text-blue-700" :
                        b.kolor === "green" ? "text-green-700" :
                        "text-purple-700"
                      }`}>{b.poziom}</div>
                      <div className={`text-sm font-medium ${
                        b.kolor === "red" ? "text-red-600" :
                        b.kolor === "orange" ? "text-orange-600" :
                        b.kolor === "blue" ? "text-blue-600" :
                        b.kolor === "green" ? "text-green-600" :
                        "text-purple-600"
                      }`}>{b.ocena}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 mb-2">{b.opis}</p>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Rekomendowana akcja</div>
                      <p className="text-sm font-medium text-gray-800">{b.akcja}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Drivery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Co wpływa na Magic Number?</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Magic Number jest wypadkową wielu decyzji operacyjnych. Rozumienie driverów
              pozwala celowo poprawiać efektywność S&M bez cięcia growth.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {magicNumberDrivers.map((d, i) => (
              <FadeInView key={d.driver}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4 items-center">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold flex-shrink-0 ${
                      d.wpływ === "Pozytywny" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {d.wpływ}
                    </span>
                    <div>
                      <span className="font-bold text-gray-900 mr-2">{d.driver}:</span>
                      <span className="text-sm text-gray-700">{d.opis}</span>
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

      <RelatedArticles currentArticleId="magic-number-efektywnosc-sprzedazy-saas" />
      <ContactSection />
    </Layout>
  );
}
