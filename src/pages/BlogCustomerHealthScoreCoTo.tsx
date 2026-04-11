import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Customer Health Score?",
    answer: "Customer Health Score (CHS) to złożona metryka mierząca prawdopodobieństwo, że klient odnowi subskrypcję, poszerzy kontrakt lub zrezygnuje z usługi. Agreguje sygnały z różnych źródeł — dane o użytkowaniu produktu, wyniki NPS, aktywność supportu, zaangażowanie w relację — w jedną liczbę (0–100), która pozwala CS teamowi priorytetyzować działania.",
  },
  {
    question: "Jakie dane są potrzebne do zbudowania Health Score?",
    answer: "Podstawowe dane to: logi użytkowania produktu (API events, session tracking), wyniki ankiet (NPS, CSAT, CES), dane z CRM (stage umowy, MRR, daty renewalu), historię ticketów supportu oraz aktywność komunikacyjną (email opens, meeting attendance). Im więcej danych, tym dokładniejszy model — jednak nawet 3–4 sygnały mogą dać wartościowy wynik.",
  },
  {
    question: "Jak często należy aktualizować Health Score?",
    answer: "Najlepsze praktyki zakładają codzienną aktualizację automatyczną dla danych operacyjnych (logowania, użycie funkcji), tygodniową dla danych komercyjnych (MRR zmiany, umowy) i miesięczną dla danych relacyjnych (NPS, QBR notes). Manualny override przez CSM powinien być zawsze możliwy, aby uwzględnić kontekst, którego system nie widzi.",
  },
  {
    question: "Czym różni się Health Score od churn prediction?",
    answer: "Health Score to metryka opisowa (jak zdrowy jest klient teraz), podczas gdy churn prediction to model probabilistyczny (jakie jest ryzyko churnu w ciągu 90 dni). Health Score jest bardziej interpretowalny i akcjonalny dla CSM. Modele ML churn prediction są dokładniejsze predykcyjnie, ale trudniejsze w codziennym zarządzaniu. Najlepsze systemy łączą oba podejścia.",
  },
  {
    question: "Jak unikać False Positive w Health Score?",
    answer: "False positives (klient zielony, ale churns) to częsty problem. Zapobiega mu: uwzględnienie sygnałów ekonomicznych (branża klienta, kondycja finansowa firmy), monitorowanie trendów zamiast wartości bezwzględnych (klient spada z 80 do 60 to alarm, choć ciągle zielony), regularna kalibracja modelu na danych o churnie oraz qualitative input od CSM-ów, którzy znają kontekst.",
  },
];

const healthSignals = [
  {
    kategoria: "Użytkowanie produktu",
    kolor: "blue",
    sygnały: [
      { nazwa: "Login frequency", opis: "Jak często użytkownik loguje się do systemu", waga: "Bardzo wysoka", typ: "pozytywny" },
      { nazwa: "Feature adoption", opis: "Procent kluczowych funkcji aktywnie używanych", waga: "Bardzo wysoka", typ: "pozytywny" },
      { nazwa: "DAU/MAU ratio", opis: "Stosunek aktywnych dziennie do miesięcznie", waga: "Wysoka", typ: "pozytywny" },
      { nazwa: "Time-to-value", opis: "Czas od zakupu do pierwszej wartości biznesowej", waga: "Wysoka", typ: "negatywny" },
    ],
  },
  {
    kategoria: "Relacja z firmą",
    kolor: "green",
    sygnały: [
      { nazwa: "NPS score", opis: "Net Promoter Score z ostatniego badania", waga: "Wysoka", typ: "pozytywny" },
      { nazwa: "Support tickets", opis: "Liczba i ciężar zgłoszeń do supportu", waga: "Średnia", typ: "negatywny" },
      { nazwa: "QBR attendance", opis: "Uczestnictwo w kwartalnych przeglądach biznesowych", waga: "Wysoka", typ: "pozytywny" },
      { nazwa: "Executive engagement", opis: "Kontakt z C-level po stronie klienta", waga: "Wysoka", typ: "pozytywny" },
    ],
  },
  {
    kategoria: "Komercja",
    kolor: "purple",
    sygnały: [
      { nazwa: "Contract renewal", opis: "Prawdopodobieństwo odnowienia umowy", waga: "Bardzo wysoka", typ: "pozytywny" },
      { nazwa: "Expansion revenue", opis: "Wzrost MRR/ARR od momentu zakupu", waga: "Wysoka", typ: "pozytywny" },
      { nazwa: "Payment history", opis: "Terminowość płatności i brak zaległości", waga: "Średnia", typ: "pozytywny" },
      { nazwa: "Contract length", opis: "Długość zobowiązania umownego", waga: "Średnia", typ: "pozytywny" },
    ],
  },
];

const healthSegments = [
  {
    segment: "Zielony — Thriving",
    zakres: "80–100",
    kolor: "green",
    charakterystyka: "Aktywny użytkownik, wysoki NPS, rozszerza kontrakt",
    działanie: "Programy advocacy, case studies, upsell/cross-sell",
    ryzykoChurn: "Bardzo niskie (poniżej 5%)",
  },
  {
    segment: "Żółty — Neutral",
    zakres: "60–79",
    kolor: "yellow",
    charakterystyka: "Umiarkowane użycie, brak silnych sygnałów pozytywnych",
    działanie: "Proaktywny outreach, health check call, feature training",
    ryzykoChurn: "Niskie–Średnie (5–20%)",
  },
  {
    segment: "Pomarańczowy — At Risk",
    zakres: "40–59",
    kolor: "orange",
    charakterystyka: "Spadek aktywności, otwarte tickets, pominięte QBR",
    działanie: "Executive escalation, save plan, intensywny onboarding",
    ryzykoChurn: "Wysokie (20–50%)",
  },
  {
    segment: "Czerwony — Critical",
    zakres: "0–39",
    kolor: "red",
    charakterystyka: "Brak logowań, negative NPS, niezapłacone faktury",
    działanie: "Emergency call, executive sponsor, win-back offer",
    ryzykoChurn: "Bardzo wysokie (powyżej 50%)",
  },
];

const healthScoreModels = [
  {
    model: "Weighted Average",
    opis: "Każdy sygnał ma przypisaną wagę procentową (suma = 100%)",
    zalety: "Prosta interpretacja, łatwa konfiguracja",
    wady: "Wagi subiektywne, nie adaptuje się automatycznie",
    przykład: "Użycie (40%) + NPS (25%) + Support (20%) + Komercja (15%)",
  },
  {
    model: "Machine Learning",
    opis: "Model predykcyjny trenowany na historycznych danych churnu",
    zalety: "Obiektywne wagi, wysoka dokładność, adaptuje się do danych",
    wady: "Wymaga dużo danych, czarna skrzynka, trudna interpretacja",
    przykład: "Gradient Boosting na 50+ cechach behawioralnych",
  },
  {
    model: "Rules-based",
    opis: "Zestaw warunków if-then określających stan zdrowia klienta",
    zalety: "Transparentność, łatwy audyt, brak wymagań danych",
    wady: "Ograniczona precyzja, trudne w utrzymaniu przy skalowaniu",
    przykład: "Jeśli brak logowania 14+ dni i NPS poniżej 6 to Czerwony",
  },
];

export default function BlogCustomerHealthScoreCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Customer Health Score — co to jest i jak go zbudować? | Fotz.pl"
        description="Customer Health Score (CHS) — kompletny przewodnik: sygnały zdrowia klienta, segmentacja, modele obliczeniowe i jak wykorzystać CHS do redukcji churnu."
        canonicalUrl="https://fotz.pl/blog/customer-health-score-co-to"
      />
      <ArticleSchema
        title="Customer Health Score — co to jest i jak go zbudować?"
        description="Kompletny przewodnik po Customer Health Score: sygnały, segmentacja i modele obliczeniowe."
        url="https://fotz.pl/blog/customer-health-score-co-to"
        datePublished="2024-01-24"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Customer Health Score", url: "https://fotz.pl/blog/customer-health-score-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Customer Health Score", href: "/blog/customer-health-score-co-to" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Customer Success
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer Health Score
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Metryka, która mówi CSM-owi kto jest zagrożony churnem, zanim ten sam to sobie uświadomi.
              Dowiedz się, jak budować i wykorzystywać Customer Health Score w praktyce.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Sygnałów zdrowia", value: "12+" },
                { label: "Segmenty klientów", value: "4" },
                { label: "Modele CHS", value: "3" },
                { label: "Redukcja churnu", value: "do 30%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sygnały zdrowia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sygnały zdrowia klienta</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Health Score agreguje sygnały z trzech głównych obszarów. Każdy sygnał powinien mieć przypisaną
              wagę i kierunek (pozytywny — im więcej tym lepiej, negatywny — im więcej tym gorzej).
            </p>
          </FadeInView>
          <div className="space-y-10">
            {healthSignals.map((group) => (
              <FadeInView key={group.kategoria}>
                <div className={`border-l-4 ${
                  group.kolor === "blue" ? "border-blue-500" :
                  group.kolor === "green" ? "border-green-500" : "border-purple-500"
                } pl-6`}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    group.kolor === "blue" ? "text-blue-700" :
                    group.kolor === "green" ? "text-green-700" : "text-purple-700"
                  }`}>
                    {group.kategoria}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {group.sygnały.map((s) => (
                      <div key={s.nazwa} className="bg-gray-50 rounded-lg p-4 flex gap-3">
                        <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                          s.typ === "pozytywny" ? "bg-green-500" : "bg-red-500"
                        }`} style={{ marginTop: "6px" }} />
                        <div>
                          <div className="font-semibold text-gray-900">{s.nazwa}</div>
                          <div className="text-sm text-gray-600">{s.opis}</div>
                          <div className="text-xs mt-1 font-medium text-gray-500">Waga: {s.waga}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Segmenty */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Segmentacja klientów wg Health Score</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Cztery segmenty (kolory) pozwalają CSM teamowi natychmiast widzieć, którzy klienci wymagają
              pilnej uwagi, a którzy są kandydatami do ekspansji.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {healthSegments.map((seg) => (
              <FadeInView key={seg.segment}>
                <div className={`rounded-xl p-6 border-2 ${
                  seg.kolor === "green" ? "border-green-300 bg-green-50" :
                  seg.kolor === "yellow" ? "border-yellow-300 bg-yellow-50" :
                  seg.kolor === "orange" ? "border-orange-300 bg-orange-50" :
                  "border-red-300 bg-red-50"
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-bold text-lg ${
                      seg.kolor === "green" ? "text-green-800" :
                      seg.kolor === "yellow" ? "text-yellow-800" :
                      seg.kolor === "orange" ? "text-orange-800" :
                      "text-red-800"
                    }`}>
                      {seg.segment}
                    </h3>
                    <span className={`text-2xl font-bold ${
                      seg.kolor === "green" ? "text-green-600" :
                      seg.kolor === "yellow" ? "text-yellow-600" :
                      seg.kolor === "orange" ? "text-orange-600" :
                      "text-red-600"
                    }`}>
                      {seg.zakres}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{seg.charakterystyka}</p>
                  <div className="bg-white/70 rounded-lg p-3 mb-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Zalecane działanie</div>
                    <div className="text-sm text-gray-800">{seg.działanie}</div>
                  </div>
                  <div className="text-xs text-gray-600">
                    <strong>Ryzyko churnu:</strong> {seg.ryzykoChurn}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Modele */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modele obliczania Health Score</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Istnieją trzy główne podejścia do budowania Health Score. Wybór zależy od dojrzałości
              organizacji, dostępności danych i zasobów technicznych.
            </p>
          </FadeInView>
          <div className="space-y-6">
            {healthScoreModels.map((model, i) => (
              <FadeInView key={model.model}>
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 text-teal-700 font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{model.model}</h3>
                      <p className="text-gray-600 mb-4">{model.opis}</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-green-700 uppercase mb-1">Zalety</div>
                          <p className="text-sm text-gray-700">{model.zalety}</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-red-700 uppercase mb-1">Wady</div>
                          <p className="text-sm text-gray-700">{model.wady}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-blue-700 uppercase mb-1">Przykład</div>
                          <p className="text-sm text-gray-700">{model.przykład}</p>
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
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
