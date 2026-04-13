import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Churn Prevention?",
    answer: "Churn Prevention (zapobieganie odejściom) to zestaw strategii i działań mających na celu zatrzymanie klientów przed rezygnacją z produktu lub usługi. W SaaS Churn Prevention jest priorytetem bo: utrzymanie klienta kosztuje 5-7x mniej niż pozyskanie nowego, NRR (Net Revenue Retention) powyżej 100% jest silniejszym sygnałem jakości biznesu niż wzrost nowych klientów, SaaS z wysokim churnem jest jak dziurawe wiadro — możesz lać ile chcesz nowych klientów, ale biznes nie rośnie. Churn Prevention to przede wszystkim Customer Success, onboarding i proaktywne zarządzanie ryzykiem klientów.",
  },
  {
    question: "Jakie są główne przyczyny churnu w SaaS?",
    answer: "Najczęstsze przyczyny churnu: Słaby onboarding — klient nigdy nie osiągnął 'aha moment' i nie zintegrował produktu w workflow. Brak wartości / ROI — klient nie widzi konkretnych wyników. Zmiany po stronie klienta — cięcia budżetu, zmiana sponsora, restrukturyzacja. Konkurencja — lepszy lub tańszy produkt od konkurenta. Niski engagement — mało aktywnych userów, niska adopcja kluczowych features. Słaba obsługa — nierozwiązane problemy techniczne, brak supportu. Brak fit produktowego — sprzedaż sprzedała do złego ICP. Analiza przyczyn churnu (exit interviews + churn data) jest fundamentem skutecznego Churn Prevention.",
  },
  {
    question: "Jak budować Early Warning System dla churnu?",
    answer: "Early Warning System (system wczesnego ostrzegania) monitoruje sygnały ryzyka churnu zanim klient zdecyduje się odejść. Kluczowe sygnały: Engagement — spadek liczby aktywnych userów, rzadsze logowania, spadek kluczowych akcji. Adoption — niskie użycie kluczowych features (szczególnie 'sticky features'). Support — wzrost liczby ticketów, negatywne CSAT, nierozwiązane problemy. Business signals — zmiana sponsora, M&A, cięcia kosztów, negatywne wyniki finansowe. Relationship — brak odpowiedzi na emaile, odmowa QBR, brak nowych userów. Narzędzia: Customer Success Platform (Gainsight, ChurnZero, Totango) agregują te sygnały w Health Score.",
  },
  {
    question: "Jak przeprowadzić skuteczną rozmowę retention?",
    answer: "Rozmowa retention (save call): Timing — zadzwoń 60-90 dni przed odnowieniem przy czerwonym Health Score. Nie czekaj na notice. Przygotowanie — przejrzyj usage data, support history, notes z QBR. Otwórz rozmowę bezpośrednio: 'Widzę że ostatnio mieliście mniej aktywności w platformie — chciałem się upewnić że wszystko ok i że dostajecie wartość z naszego produktu.' Słuchaj — zapytaj 'Jakie są Wasze główne wyzwania teraz?' Nie sprzedawaj od razu. Zidentyfikuj prawdziwy powód — często pierwsza odpowiedź to nie prawdziwy powód. Zaproponuj concrete next step — nie 'zobaczymy' ale 'Następny tydzień robimy sesję z Waszym teamem żeby X'.",
  },
  {
    question: "Jak zmierzyć skuteczność Churn Prevention?",
    answer: "Kluczowe metryki Churn Prevention: Logo Churn Rate — % klientów którzy odeszli (ideał: poniżej 5% rocznie dla enterprise). Revenue Churn Rate — % ARR utracone przez churn (ideał: poniżej 3% rocznie). NRR (Net Revenue Retention) — expansion minus churn (ideał: powyżej 110%, best in class: 130%+). GRR (Gross Revenue Retention) — tylko retention bez expansion (ideał: powyżej 90%). Saves Rate — % klientów w ryzyku odejścia których udało się zatrzymać. Early Warning Accuracy — jak skutecznie Health Score przewiduje churn. Czas od Early Warning do Churn — im dłuższy, tym więcej czasu na interwencję.",
  },
];

const churnReasons = [
  { powód: "Słaby onboarding", udział: "25%", symptomy: "Niskie usage w pierwszych 90 dniach, brak kluczowych integracji", fix: "Ustrukturyzowany onboarding checklist, dedicated CSM dla pierwszych 90 dni", kolor: "red" },
  { powód: "Brak widocznego ROI", udział: "22%", symptomy: "Klient nie może zmierzyć wartości produktu", fix: "Regularne business reviews z ROI dashboard, zdefiniuj success metrics przy onboardingu", kolor: "orange" },
  { powód: "Zmiany w firmie klienta", udział: "18%", symptomy: "Zmiana sponsora, M&A, cięcia budżetu", fix: "Multithreading — relacje z wieloma osobami, nie tylko z jednym sponsorem", kolor: "yellow" },
  { powód: "Słaby product fit", udział: "15%", symptomy: "Klient używa małego % features, częste feature requests poza roadmapą", fix: "Lepsza kwalifikacja sprzedażowa, jasny ICP, honest expectations setting", kolor: "purple" },
  { powód: "Konkurencja", udział: "12%", symptomy: "Klient mówi wprost lub pytania o competitor features", fix: "Competitive battlecards dla CSM, roadmapa feature parity, win-back program", kolor: "blue" },
  { powód: "Słaby support / Customer Success", udział: "8%", symptomy: "Nierozwiązane tickety, brak QBR, niska CSAT", fix: "SLA dla support, proaktywne QBR, dedykowany CSM dla kont powyżej X ARR", kolor: "gray" },
];

const churnPreventionPlaybook = [
  { etap: "30 dni po podpisaniu", działania: ["Kickoff call z całym teamem klienta", "Zdefiniuj success criteria i metryki", "Setup techniczny i pierwsze integracje", "Pierwsze 'aha moment' — klient widzi wartość produktu"], kolor: "green" },
  { etap: "60-90 dni", działania: ["Sprawdź adoption kluczowych features", "Pierwsze business review — czy realizujemy success criteria?", "Zidentyfikuj power users i executive sponsor", "Rozwiąż pierwsze friction points zanim staną się problemami"], kolor: "blue" },
  { etap: "Ciągłe monitorowanie", działania: ["Weekly Health Score review dla całego portfela", "Flaguj klientów poniżej Health Score X", "Proaktywny outreach do klientów z ryzykiem", "Kwartalne QBR dla klientów powyżej Y ARR"], kolor: "purple" },
  { etap: "Pre-renewal (90-60 dni przed)", działania: ["Renewal conversation — nie czekaj na ostatnią chwilę", "Podsumowanie ROI i value delivered", "Upsell/expansion opportunities", "Early bird discount dla szybkiego odnawiania"], kolor: "orange" },
];

export default function BlogChurnPreventionCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Churn Prevention — jak zapobiegać odejściom klientów? | Fotz.pl"
        description="Churn Prevention w SaaS — przyczyny churnu, Early Warning System, retention playbook i kluczowe metryki (NRR, GRR). Kompletny przewodnik dla Customer Success."
        canonicalUrl="https://fotz.pl/blog/churn-prevention-zapobieganie-odejsciom-klientow"

        keywords="Churn Prevention co to jest, Churn Prevention definicja, czym jest Churn Prevention, Churn Prevention startup, Churn Prevention jak liczyć, Churn Prevention wzór, Churn Prevention przykłady"

        canonical="https://fotz.pl/blog/churn-prevention-zapobieganie-odejsciom-klientow"
      />
      <ArticleSchema
        title="Churn Prevention — jak zapobiegać odejściom klientów?"
        description="Kompletny przewodnik po Churn Prevention: przyczyny churnu, Early Warning System, retention playbook i metryki."
        url="https://fotz.pl/blog/churn-prevention-zapobieganie-odejsciom-klientow"
        datePublished="2024-02-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Churn Prevention", url: "https://fotz.pl/blog/churn-prevention-zapobieganie-odejsciom-klientow" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Churn Prevention", href: "/blog/churn-prevention-zapobieganie-odejsciom-klientow" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Customer Success
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Churn Prevention
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Utrzymanie klienta kosztuje 5-7x mniej niż pozyskanie nowego.
              A NRR powyżej 110% to silniejszy sygnał jakości biznesu SaaS niż tempo pozyskiwania
              nowych klientów. Churn Prevention to strategia, nie reaktywna walka.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Koszt retention vs. akwizycja", value: "5-7x taniej" },
                { label: "NRR ideał", value: "110%+" },
                { label: "Logo Churn ideał (enterprise)", value: "poniżej 5%/rok" },
                { label: "Głównych przyczyn churnu", value: "6" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Przyczyny churnu */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Główne przyczyny churnu i jak im zapobiegać</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dane z exit interviews i analizy churnu pokazują konsekwentnie te same przyczyny.
              Znajomość przyczyn to punkt wyjścia do budowania skutecznego programu Churn Prevention.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {churnReasons.map((r) => (
              <FadeInView key={r.powód}>
                <div className={`rounded-xl border p-5 ${
                  r.kolor === "red" ? "border-red-200 bg-red-50" :
                  r.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  r.kolor === "yellow" ? "border-yellow-200 bg-yellow-50" :
                  r.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  r.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  "border-gray-200 bg-gray-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <div className={`text-sm font-bold px-3 py-1 rounded-full flex-shrink-0 ${
                      r.kolor === "red" ? "bg-red-200 text-red-800" :
                      r.kolor === "orange" ? "bg-orange-200 text-orange-800" :
                      r.kolor === "yellow" ? "bg-yellow-200 text-yellow-800" :
                      r.kolor === "purple" ? "bg-purple-200 text-purple-800" :
                      r.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                      "bg-gray-200 text-gray-800"
                    }`}>{r.udział}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{r.powód}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Symptomy</div>
                          <p className="text-sm text-gray-700">{r.symptomy}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-green-600 uppercase mb-1">Fix</div>
                          <p className="text-sm text-gray-700">{r.fix}</p>
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

      {/* Retention Playbook */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Retention Playbook — od onboardingu do odnowienia</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Churn Prevention zaczyna się w dniu podpisania kontraktu, nie 30 dni przed odnowieniem.
              Proaktywny playbook CSM zmniejsza churn o 30-50% vs. reaktywne podejście.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {churnPreventionPlaybook.map((e, i) => (
              <FadeInView key={e.etap}>
                <div className={`rounded-xl border-2 p-6 ${
                  e.kolor === "green" ? "border-green-200 bg-green-50" :
                  e.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  e.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      e.kolor === "green" ? "bg-green-600" :
                      e.kolor === "blue" ? "bg-blue-600" :
                      e.kolor === "purple" ? "bg-purple-600" :
                      "bg-orange-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-xl mb-3 ${
                        e.kolor === "green" ? "text-green-800" :
                        e.kolor === "blue" ? "text-blue-800" :
                        e.kolor === "purple" ? "text-purple-800" :
                        "text-orange-800"
                      }`}>{e.etap}</h3>
                      <ul className="space-y-1">
                        {e.działania.map((d) => (
                          <li key={d} className="flex gap-2 text-sm text-gray-700">
                            <span className={`flex-shrink-0 ${
                              e.kolor === "green" ? "text-green-500" :
                              e.kolor === "blue" ? "text-blue-500" :
                              e.kolor === "purple" ? "text-purple-500" :
                              "text-orange-500"
                            }`}>→</span>
                            {d}
                          </li>
                        ))}
                      </ul>
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
