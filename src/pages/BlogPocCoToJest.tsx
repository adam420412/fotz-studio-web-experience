import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest POC w sprzedaży B2B?",
    answer: "POC (Proof of Concept, dowód koncepcji) to ograniczony, czasowy test produktu lub rozwiązania w środowisku klienta, mający na celu weryfikację, czy rozwiązanie spełnia jego wymagania techniczne i biznesowe. W sprzedaży B2B POC jest etapem między demo a podpisaniem kontraktu — klient testuje produkt na realnych danych i procesach. POC jest szczególnie częsty w sprzedaży enterprise software, cybersecurity, data/AI i infrastruktury. POC dobrze przeprowadzony dramatycznie zwiększa win rate — źle zarządzany może być stratą czasu dla obu stron.",
  },
  {
    question: "Jaka jest różnica między POC, pilotem a triałem?",
    answer: "POC (Proof of Concept) — test techniczny, czy rozwiązanie w ogóle działa w środowisku klienta. Focusuje na weryfikacji technicznej. Trwa 2-4 tygodnie. Pilot — szerszy test z realną grupą użytkowników, testuje wartość biznesową i adoption w praktyce. Trwa 4-12 tygodni. Trial (darmowy okres) — self-serve, klient testuje samodzielnie bez wsparcia. Typowo 14-30 dni. POC wymaga aktywnego zaangażowania obu stron i zasobów. Pilot to często odpłatna faza przed pełnym wdrożeniem. Trial to model akwizycji (PLG), nie etap sprzedaży enterprise.",
  },
  {
    question: "Jak zaproponować i sprzedać POC klientowi?",
    answer: "Sprzedaż POC: Najpierw potwierdź, że POC jest konieczny — nie każdy deal wymaga POC (mniejsze ACV, prosta integracja, silne referencje mogą wystarczyć). Zdefiniuj success criteria przed POC, nie po — klient musi zgodzić się z kryteriami sukcesu z góry. Sprzedaj POC jako inwestycję obu stron — klient angażuje czas, Ty angażujesz zasoby. Ustaw executive sponsora po stronie klienta. Ogranicz zakres — POC powinien być minimalny do potwierdzenia kluczowej wartości. Postaw timeline — POC bez daty końcowej trwa wiecznie.",
  },
  {
    question: "Jak zarządzać POC, żeby wygrać deal?",
    answer: "Zarządzanie POC dla sukcesu: Kickoff POC ze wszystkimi stakeholderami — ustal role, kamienie milowe i success criteria. Regular check-ins (minimum co tydzień) — bądź proaktywny, nie czekaj na problemy. Dokumentuj postępy i wyniki — buduj narrative sukcesu w trakcie. Zaangażuj decision makera w midpoint review — pokaż postęp. Identyfikuj i usuwaj blokery szybko — POC musi mieć momentum. Na koniec POC przygotuj summary report z wynikami vs. success criteria. Przesuń rozmowę od 'czy to działa' do 'kiedy i jak wdrażamy'.",
  },
  {
    question: "Co zrobić gdy POC idzie źle?",
    answer: "Kiedy POC napotyka problemy: Reaguj natychmiast — zaniedbany problem w POC to sygnał jak wdrożenie będzie wyglądać. Zidentyfikuj czy problem to techniczny bug, błąd konfiguracji czy zmiana wymagań klienta. Eskaluj wewnętrznie — zaangażuj inżynierów/PS jeśli potrzeba. Komunikuj transparentnie z klientem — ukrywanie problemów pogarsza sytuację. Przedłuż POC tylko jeśli masz plan i konkretny termin rozwiązania. Jeśli POC pokazuje fundamentalny mismatch — lepiej to powiedzieć wprost niż przeciągać. Każdy POC, zakończony sukcesem lub nie, dostarcza informacji o fit produktu.",
  },
];

const pocVsPilotVsTrial = [
  {
    typ: "POC",
    cel: "Weryfikacja techniczna",
    czas: "2–4 tygodnie",
    zasoby: "Wysoki (obie strony)",
    klient: "IT + Champion",
    sukces: "Działa technicznie w środowisku klienta",
    kolor: "blue",
  },
  {
    typ: "Pilot",
    cel: "Weryfikacja wartości biznesowej",
    czas: "4–12 tygodni",
    zasoby: "Bardzo wysoki",
    klient: "Szeroka grupa użytkowników",
    sukces: "ROI potwierdzony przez real users",
    kolor: "green",
  },
  {
    typ: "Trial",
    cel: "Akwizycja / self-serve evaluation",
    czas: "14–30 dni",
    zasoby: "Niski (self-serve)",
    klient: "Individual / Team",
    sukces: "Konwersja do płatnego planu",
    kolor: "purple",
  },
];

const pocSuccessCriteria = [
  {
    kategoria: "Techniczne",
    przykłady: ["Integracja z systemem X działa", "Czas odpowiedzi API poniżej 200ms", "Import 1M rekordów bez błędów", "Spełnienie wymogów bezpieczeństwa SOC2"],
    kolor: "blue",
  },
  {
    kategoria: "Biznesowe",
    przykłady: ["Automatyzacja procesu Y redukuje czas o 50%", "Accuracy modelu powyżej 90%", "User adoption powyżej 80% w testowej grupie", "ROI positive w ciągu 6 miesięcy"],
    kolor: "green",
  },
  {
    kategoria: "Organizacyjne",
    przykłady: ["Onboarding 10 użytkowników w ciągu 2 tygodni", "Team może samodzielnie konfigurować reguły", "Raport działa bez wsparcia technicznego", "Zgodność z wewnętrznymi procesami"],
    kolor: "purple",
  },
];

const pocTimeline = [
  { tydzien: "Tydzień 0", etap: "Kickoff i setup", działania: "Podpisanie NDA/LOI, dostęp do środowiska, kickoff ze wszystkimi stakeholderami, finalizacja success criteria" },
  { tydzien: "Tydzień 1–2", etap: "Implementacja i integracje", działania: "Konfiguracja, integracja z systemami klienta, import testowych danych, pierwsze testy" },
  { tydzien: "Tydzień 2–3", etap: "Testowanie i walidacja", działania: "Testowanie kluczowych use case'ów, zbieranie feedbacku od użytkowników, dokumentowanie wyników" },
  { tydzien: "Tydzień 4", etap: "Midpoint review i korekty", działania: "Spotkanie z executive sponsorem, przegląd postępów vs. success criteria, korekty jeśli potrzeba" },
  { tydzien: "Tydzień 5–6", etap: "Finalizacja i POC Report", działania: "Finalne testy, przygotowanie POC Summary Report, Executive Readout, rekomendacja next step" },
];

export default function BlogPocCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="POC (Proof of Concept) — co to jest w sprzedaży B2B? | Fotz.pl"
        description="POC w sprzedaży B2B — czym różni się od pilota i triala, jak zarządzać POC, success criteria i timeline. Kompletny przewodnik dla handlowców enterprise."
        canonical="https://fotz.pl/blog/poc-proof-of-concept-sprzedaz-b2b"

        keywords="POC (Proof of Concept) co to jest, POC (Proof of Concept) definicja, czym jest POC (Proof of Concept), POC (Proof of Concept) w sprzedaży, POC (Proof of Concept) strategia, POC (Proof of Concept) przykłady, jak używać POC (Proof of Concept)"

        canonical="https://fotz.pl/blog/poc-proof-of-concept-sprzedaz-b2b"
      />
      <ArticleSchema
        title="POC (Proof of Concept) — co to jest w sprzedaży B2B?"
        description="Kompletny przewodnik po POC w sprzedaży B2B: typy, success criteria, timeline i zarządzanie."
        url="https://fotz.pl/blog/poc-proof-of-concept-sprzedaz-b2b"
        datePublished="2024-02-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "POC — Proof of Concept", url: "https://fotz.pl/blog/poc-proof-of-concept-sprzedaz-b2b" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "POC", url: "/blog/poc-proof-of-concept-sprzedaz-b2b" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sprzedaż Enterprise
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              POC — Proof of Concept
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              W enterprise sprzedaży POC to moment, który decyduje o kontrakcie lub jego braku.
              Dobrze zarządzany POC buduje pewność kupującego. Źle przeprowadzony — zabija deal.
              Poznaj jak strukturyzować, prowadzić i wygrywać POC.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typy ewaluacji", value: "3" },
                { label: "Tygodni POC", value: "4–6" },
                { label: "Kluczowy element", value: "Success Criteria" },
                { label: "Etapów timeline", value: "5" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POC vs Pilot vs Trial */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">POC vs Pilot vs Trial — kluczowe różnice</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Trzy różne modele ewaluacji służą różnym celom i wymagają różnego poziomu zaangażowania.
              Wybór właściwego formatu to decyzja strategiczna.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {pocVsPilotVsTrial.map((p) => (
              <FadeInView key={p.typ}>
                <div className={`rounded-xl p-6 border-2 ${
                  p.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  p.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <h3 className={`font-bold text-2xl mb-4 ${
                    p.kolor === "blue" ? "text-blue-800" :
                    p.kolor === "green" ? "text-green-800" :
                    "text-purple-800"
                  }`}>
                    {p.typ}
                  </h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { l: "Cel", v: p.cel },
                      { l: "Czas", v: p.czas },
                      { l: "Zasoby", v: p.zasoby },
                      { l: "Klient", v: p.klient },
                      { l: "Sukces gdy", v: p.sukces },
                    ].map((item) => (
                      <div key={item.l} className="flex gap-2">
                        <span className="text-gray-500 font-semibold w-20 flex-shrink-0">{item.l}:</span>
                        <span className="text-gray-700">{item.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Success Criteria */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Criteria — klucz do wygrania POC</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Najważniejszy element POC to zdefiniowanie success criteria PRZED jego rozpoczęciem.
              Bez jasnych kryteriów nie ma obiektywnej oceny — klient może zawsze przesuwać słupki.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {pocSuccessCriteria.map((cat) => (
              <FadeInView key={cat.kategoria}>
                <div className={`rounded-xl p-6 border-2 ${
                  cat.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  cat.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-4 ${
                    cat.kolor === "blue" ? "text-blue-800" :
                    cat.kolor === "green" ? "text-green-800" :
                    "text-purple-800"
                  }`}>
                    Kryteria {cat.kategoria}
                  </h3>
                  <ul className="space-y-2">
                    {cat.przykłady.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-gray-700">
                        <span className={`flex-shrink-0 ${
                          cat.kolor === "blue" ? "text-blue-500" :
                          cat.kolor === "green" ? "text-green-500" :
                          "text-purple-500"
                        }`}>✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline POC — 5-6 tygodni</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ustrukturyzowany timeline z konkretnymi kamieniami milowymi zapobiega rozciąganiu POC
              i utrzymuje momentum decyzji zakupowej.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {pocTimeline.map((t, i) => (
              <FadeInView key={t.tydzien}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 flex gap-4">
                  <div className="flex-shrink-0 w-28">
                    <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold text-center">{t.tydzien}</div>
                    <div className="mt-1 text-center text-xs text-gray-500 font-medium">{t.etap}</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">{t.działania}</p>
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

      <RelatedArticles currentArticleId="poc-proof-of-concept-sprzedaz-b2b" />
      <ContactSection />
    </Layout>
  );
}
