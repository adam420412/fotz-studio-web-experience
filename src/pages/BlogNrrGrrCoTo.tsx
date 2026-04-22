import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest NRR (Net Revenue Retention)?",
    answer: "NRR (Net Revenue Retention, zwane też Net Dollar Retention — NDR) to metryka SaaS mierząca jak bardzo przychód z istniejącej bazy klientów rośnie lub maleje w czasie — uwzględniając churny, downgrades, upsell i cross-sell. Formuła: NRR = (MRR na początku okresu + Expansion MRR - Churned MRR - Contraction MRR) / MRR na początku okresu × 100%. Interpretacja: NRR 100% = przychód z istniejących klientów jest stabilny (churny równoważone przez ekspansję). NRR powyżej 100% = produkt rośnie nawet bez nowych klientów (marzenie!). NRR poniżej 100% = firma traci przychód na istniejącej bazie — nowi klienci muszą wypełniać dziurę. Benchmarki: NRR poniżej 90% = alarm. NRR 90-100% = ok. NRR 100-110% = dobry. NRR 110-120% = bardzo dobry (Snowflake, Datadog). NRR powyżej 130% = wyjątkowy (rare). NRR jest główną metryką dla inwestorów oceniających wartość SaaS business. Produkt z NRR 120%+ jest fundamentalnie różny od produktu z NRR 80%.",
  },
  {
    question: "Co to jest GRR (Gross Revenue Retention)?",
    answer: "GRR (Gross Revenue Retention) mierzy retencję przychodu bez uwzględnienia ekspansji — tylko straty (churn i contraction). Formuła: GRR = (MRR na początku - Churned MRR - Contraction MRR) / MRR na początku × 100%. GRR jest zawsze mniejszy lub równy 100% (nie może być powyżej — nie uwzględnia upsell). Interpretacja: GRR 95% = tracisz 5% przychodu z istniejących klientów bez ekspansji. GRR 85% = tracisz 15% — poważny problem. Benchmarki GRR: poniżej 80% = kryzys. 80-90% = problem. 90-95% = ok. Powyżej 95% = bardzo dobry. GRR vs. NRR: GRR = 'ile tracisz'. NRR = 'ile tracisz MINUS ile odrabiasz przez ekspansję'. Możliwy scenariusz: GRR 80% + Expansion 40% = NRR 120%. Firma traci dużo ale odrabia ekspansją — nie jest to idealny model (leaky bucket). Lepszy scenariusz: GRR 95% + Expansion 20% = NRR 115%. Niski churn + solidna ekspansja. Inwestorzy patrzą na oba — GRR ujawnia podstawowe problemy z retencją które expansion może maskować.",
  },
  {
    question: "Jak obliczać i segmentować NRR?",
    answer: "Obliczanie NRR: Przykład liczbowy: Kohorta styczeń 2024: $1M MRR. Luty 2024: 50 klientów odeszło (churn $80K), 20 downgrade'owało ($30K), 30 upgrade'owało ($150K). NRR = ($1M - $80K - $30K + $150K) / $1M = $1.04M / $1M = 104%. Segmentacja NRR: Per cohort — NRR dla klientów pozyskanych w danym miesiącu/kwartale. Pokazuje czy nowe kohorty są lepsze/gorsze od starszych. Per segment — Enterprise vs. SMB. Często Enterprise ma wyższy NRR (mniejszy churn, wyższy upsell). Per use case lub industry — identyfikuje segmenty z najlepszą retencją dla focus go-to-market. Per ACV bracket — klienci $50K+ ACV mają zazwyczaj wyższy NRR niż $5K ACV. Timeframe: NRR zazwyczaj mierzone na bazie rocznej (annual NRR) lub kwartalnie. Pułapki: Net vs. Gross — upewnij się że wiesz co liczysz. Cohort size — małe kohorty mają volatile NRR. Timing — kiedy liczysz churn (end of period vs. occurrence).",
  },
  {
    question: "Jak poprawić NRR — strategie ekspansji i retencji?",
    answer: "Strategie poprawy NRR: Redukcja churnu (poprawa GRR): Onboarding — szybki time-to-value. Im szybciej klient zobaczy wartość, tym mniejszy early churn. Customer Health Score — proaktywna interwencja zanim klient zdecyduje się odejść. QBR (Quarterly Business Review) — regularne executive check-ins dla dużych klientów. Product improvement — churn często sygnalizuje gap między obietnicą a dostarczeniem. Zwiększenie ekspansji: Seat expansion — zachęcaj do dodawania userów (PLG-driven, success-driven). Usage expansion — Produkty usage-based naturalnie rosną z biznesem klienta. Cross-sell — sprzedaż nowych produktów lub modułów do istniejących klientów. Upsell — wyższy plan/tier. Najlepszy trigger: osiągnięcie limitu planu. Account management — dedykowany AE dla kont powyżej $50K ARR odpowiedzialny za expansion. Renewal process — QBR 90 dni przed renewalem identyfikuje ryzyka i okazje ekspansji. CSM incentives — powiąż KPI i bonusy CSM z NRR i expansion, nie tylko z churn.",
  },
  {
    question: "Jak NRR wpływa na wycenę i wzrost firmy SaaS?",
    answer: "NRR a wycena SaaS: Revenue Compounding — firmy z NRR 120%+ rosną bez pozyskiwania nowych klientów. Po 5 latach: $10M ARR z NRR 120% = $24.9M ARR bez single nowego klienta. Efekt compound jest dramatyczny. Wielokrotności wyceny: NRR poniżej 100% — niższy revenue multiple (5-8x ARR). NRR 100-110% — standardowe multiple (8-12x ARR). NRR 110-120% — premium multiple (12-20x ARR). NRR powyżej 120% — exceptional (20x+ ARR). Wpływ na CAC payback: Firma z NRR 120% szybciej odrabia CAC — każdy klient jest wart więcej w czasie. Benchmark publicznych firm SaaS: Snowflake NRR ~135%, Datadog ~130%, Cloudflare ~125%. Stripe, Twilio, Shopify — NRR powyżej 110%. Inwestorzy (VC, PE) patrzą na NRR jako jeden z pierwszych wskaźników 'product-market fit' i 'customer success quality'. Due diligence zawsze analizuje NRR per cohort i segmenty.",
  },
];

const nrrComponents = [
  { składowa: "Starting MRR", opis: "MRR z istniejącej bazy klientów na początku okresu pomiaru", wpływ: "Bazowa wartość (mianownik)", znak: "neutral" },
  { składowa: "Expansion MRR", opis: "Dodatkowy przychód od istniejących klientów: upsell, seat growth, usage overage", wpływ: "Zwiększa NRR powyżej 100%", znak: "pozytywny" },
  { składowa: "Churned MRR", opis: "Przychód utracony przez klientów którzy zrezygnowali z subskrypcji", wpływ: "Zmniejsza NRR", znak: "negatywny" },
  { składowa: "Contraction MRR", opis: "Przychód utracony przez downgrade: mniejszy plan, mniej seatów", wpływ: "Zmniejsza NRR", znak: "negatywny" },
];

const nrrBenchmarks = [
  { zakres: "Poniżej 80%", ocena: "Kryzys", opis: "Tracisz 20%+ bazy bez ekspansji. Leaky bucket — nowi klienci nie wypełnią dziury.", kolor: "red" },
  { zakres: "80-90%", ocena: "Problem", opis: "Znaczne straty. Wymaga natychmiastowej pracy nad retencją i ekspansją.", kolor: "orange" },
  { zakres: "90-100%", ocena: "Ok", opis: "Stabilizacja. Churny częściowo kompensowane ekspansją. Pole do poprawy.", kolor: "yellow" },
  { zakres: "100-110%", ocena: "Dobry", opis: "Istniejący klienci rosną. Solidna podstawa dla sustainable growth.", kolor: "blue" },
  { zakres: "110-120%", ocena: "Bardzo dobry", opis: "Compound growth w istniejącej bazie. Premium wycena od inwestorów.", kolor: "green" },
  { zakres: "Powyżej 120%", ocena: "Wyjątkowy", opis: "Snowflake, Datadog tier. Firma rośnie nawet zatrzymując pozyskiwanie nowych klientów.", kolor: "purple" },
];

export default function BlogNrrGrrCoTo() {
  return (
    <Layout>
      <SEOHead
        title="NRR i GRR | Fotz Studio"
        description="NRR (Net Revenue Retention) i GRR (Gross Revenue Retention): formuły, benchmarki, segmentacja, strategie poprawy i wpływ na wycenę firmy SaaS."
        canonical="https://fotz.pl/blog/nrr-grr-net-revenue-retention-co-to-jest"

        keywords="NRR i GRR co to jest, NRR i GRR definicja, czym jest NRR i GRR, NRR i GRR przykłady, jak działa NRR i GRR, NRR i GRR znaczenie, NRR i GRR przewodnik"

        canonical="https://fotz.pl/blog/nrr-grr-net-revenue-retention-co-to-jest"
      />
      <ArticleSchema
        title="NRR i GRR — co to jest Net Revenue Retention i jak poprawić?"
        description="NRR i GRR: formuły, obliczenia, benchmarki (Snowflake 135%, Datadog 130%), segmentacja per cohort, strategie poprawy retencji i ekspansji w SaaS."
        url="https://fotz.pl/blog/nrr-grr-net-revenue-retention-co-to-jest"
        datePublished="2024-03-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "NRR i GRR", url: "https://fotz.pl/blog/nrr-grr-net-revenue-retention-co-to-jest" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "NRR i GRR", url: "/blog/nrr-grr-net-revenue-retention-co-to-jest" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SaaS Metrics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NRR i GRR
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Firma z NRR 120%+ rośnie nawet bez jednego nowego klienta.
              Net Revenue Retention to najważniejsza metryka dla long-term
              sustainability biznesu SaaS.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Best-in-class NRR", value: "130%+" },
                { label: "Median SaaS NRR", value: "~106%" },
                { label: "GRR max", value: "100%" },
                { label: "Alarm NRR", value: "Poniżej 90%" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Składowe */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Składowe NRR</h2>
            <p className="text-gray-600 mb-4 max-w-3xl">
              NRR = (Starting MRR + Expansion MRR - Churned MRR - Contraction MRR) / Starting MRR × 100%
            </p>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda składowa ma inny kierunek wpływu na wynik.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {nrrComponents.map((c) => (
              <FadeInView key={c.składowa}>
                <div className={`rounded-xl border-2 p-5 ${
                  c.znak === "pozytywny" ? "border-green-200 bg-green-50" :
                  c.znak === "negatywny" ? "border-red-200 bg-red-50" :
                  "border-gray-200 bg-gray-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    c.znak === "pozytywny" ? "text-green-800" :
                    c.znak === "negatywny" ? "text-red-800" :
                    "text-gray-800"
                  }`}>{c.składowa}</h3>
                  <p className="text-gray-700 text-sm mb-2">{c.opis}</p>
                  <div className="text-sm font-semibold">
                    <span className={
                      c.znak === "pozytywny" ? "text-green-600" :
                      c.znak === "negatywny" ? "text-red-600" :
                      "text-gray-600"
                    }>{c.wpływ}</span>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki NRR</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Gdzie Twój NRR stawia Cię względem rynku?
            </p>
          </FadeInView>
          <div className="space-y-3">
            {nrrBenchmarks.map((b) => (
              <FadeInView key={b.zakres}>
                <div className={`rounded-xl border-2 p-4 ${
                  b.kolor === "red" ? "border-red-200 bg-red-50" :
                  b.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  b.kolor === "yellow" ? "border-yellow-200 bg-yellow-50" :
                  b.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  b.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <div className="w-32 flex-shrink-0">
                      <span className="font-bold text-gray-800 text-sm">{b.zakres}</span>
                    </div>
                    <div className={`w-24 flex-shrink-0 font-bold text-sm ${
                      b.kolor === "red" ? "text-red-700" :
                      b.kolor === "orange" ? "text-orange-700" :
                      b.kolor === "yellow" ? "text-yellow-700" :
                      b.kolor === "blue" ? "text-blue-700" :
                      b.kolor === "green" ? "text-green-700" :
                      "text-purple-700"
                    }`}>{b.ocena}</div>
                    <p className="text-gray-600 text-sm">{b.opis}</p>
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

      <RelatedArticles currentArticleId="nrr-grr-net-revenue-retention-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
