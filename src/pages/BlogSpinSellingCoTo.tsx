import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest SPIN Selling?",
    answer: "SPIN Selling to metodologia sprzedaży opracowana przez Neila Rackhama w 1988 roku na podstawie analizy 35 000 rozmów sprzedażowych. Nazwa pochodzi od czterech typów pytań: Situation (sytuacyjne), Problem (problemowe), Implication (implikacyjne), Need-payoff (pytania o wartość). Badania Rackhama wykazały, że najlepsi handlowcy zadają inny typ pytań niż przeciętni — skupiają się na pytaniach Implication i Need-payoff, które budują wartość w oczach klienta.",
  },
  {
    question: "Jak działają cztery typy pytań SPIN?",
    answer: "Situation Questions (S): zbierają fakty o obecnej sytuacji klienta (ile osób, jakie narzędzia, jak przebiega proces). Używaj oszczędnie — klient często je odbiera jako przesłuchanie. Problem Questions (P): identyfikują problemy, trudności, niezadowolenie klienta (gdzie masz największe trudności?). Implication Questions (I): rozwijają konsekwencje problemu, budują pilność (jak ten problem wpływa na wyniki, koszty, morale?). Need-Payoff Questions (N): skłaniają klienta do samodzielnego wyrażenia wartości rozwiązania (jak ważne byłoby rozwiązanie tego problemu? Co by to zmieniło?)",
  },
  {
    question: "Dlaczego pytania Implication są kluczowe w SPIN?",
    answer: "Pytania Implication są serce metodologii SPIN. Sprawdzone na tysiącach rozmów sprzedażowych, rozwijają ból — zamieniają małe problemy w duże wyzwania. Przykład: klient mówi 'raportowanie zajmuje nam 3 godziny tygodniowo'. Pytanie Implication: 'Jak to wpływa na czas, który Wasi menedżerowie mogą poświęcić na coaching teamów?' lub 'Czy przez to zdarza się, że decyzje biznesowe są podejmowane w oparciu o przestarzałe dane?'. Te pytania pomagają klientowi samemu odkryć, że problem jest poważniejszy niż myślał.",
  },
  {
    question: "Czym SPIN Selling różni się od innych metodologii?",
    answer: "SPIN skupia się na PYTANIACH, podczas gdy większość metodologii skupia się na PREZENTACJI. SPIN jest empirycznie udowodniony — bazuje na badaniach rzeczywistych rozmów sprzedażowych. SPIN jest przeznaczony dla złożonej sprzedaży B2B z długim cyklem, gdzie klient musi sam dojść do potrzeby (inaczej niż w transakcyjnej sprzedaży). Różnica z Sandler Selling: SPIN jest bardziej strukturowany wokół pytań, Sandler kładzie większy nacisk na kwalifikację i pain. Różnica z Challenger: SPIN jest reaktywny (odkrywa potrzeby), Challenger jest proaktywny (prowokuje myślenie).",
  },
  {
    question: "Jak wdrożyć SPIN Selling w zespole?",
    answer: "Wdrożenie SPIN Selling: Krok 1 — Stwórz bank pytań SPIN dla Twojego produktu i ICP (lista 5–10 pytań per typ). Krok 2 — Trenuj pytania Implication — to najtrudniejszy typ, wymaga znajomości branży klienta. Krok 3 — Nagrywaj i analizuj rozmowy (Gong, Chorus) — sprawdź ratio pytań S/P/I/N. Krok 4 — W call reviews oceniaj jakość pytań, nie tylko ogólny wynik rozmowy. Krok 5 — Waliduj przez A/B — porównaj win rate rozmów z wysokim I/N ratio vs S/P ratio.",
  },
];

const spinQuestions = [
  {
    litera: "S",
    typ: "Situation",
    cel: "Zbierz fakty o obecnej sytuacji",
    kiedy: "Początek rozmowy — maksimum 2–3 pytania",
    przykłady: [
      "Jak obecnie zarządzacie procesem X w Waszej firmie?",
      "Ile osób w zespole korzysta z tego rozwiązania?",
      "Jak długo używacie obecnego systemu?",
      "Jaki jest Wasz obecny tech stack w tym obszarze?",
    ],
    pułapka: "Za dużo pytań S = klient czuje się przesłuchiwany. Zbieraj dane przed rozmową z LinkedIn/CRM.",
    kolor: "blue",
  },
  {
    litera: "P",
    typ: "Problem",
    cel: "Odkryj problemy i niezadowolenie",
    kiedy: "Po ustaleniu kontekstu — kluczowe pytania identyfikujące ból",
    przykłady: [
      "Gdzie macie największe trudności z tym procesem?",
      "Co sprawia Wam najwięcej problemów w obecnym rozwiązaniu?",
      "Jakie zadania związane z X zajmują Wam nieproporcjonalnie dużo czasu?",
      "Z czego jesteście najmniej zadowoleni w obecnym sposobie pracy?",
    ],
    pułapka: "Zatrzymanie się tylko na problemach — nie budujesz jeszcze wartości. Muszą iść za nimi Implication Questions.",
    kolor: "orange",
  },
  {
    litera: "I",
    typ: "Implication",
    cel: "Rozwiń konsekwencje problemu, buduj pilność",
    kiedy: "Po odkryciu problemu — najważniejszy etap SPIN",
    przykłady: [
      "Jak ten problem wpływa na wyniki Waszego działu?",
      "Co się dzieje, gdy decyzje są podejmowane bez aktualnych danych?",
      "Jak to opóźnienie wpływa na Waszą relację z klientami?",
      "Ile razy w miesiącu zdarza się, że X powoduje Y problem?",
    ],
    pułapka: "Pytania Implication muszą być związane z Twoim rozwiązaniem — nie pytaj o konsekwencje, których nie możesz rozwiązać.",
    kolor: "red",
  },
  {
    litera: "N",
    typ: "Need-Payoff",
    cel: "Skłoń klienta do wyrażenia wartości rozwiązania własnymi słowami",
    kiedy: "Gdy ból jest wystarczająco rozwinięty — tuż przed prezentacją",
    przykłady: [
      "Jak ważne byłoby dla Was automatyczne rozwiązanie tego problemu?",
      "Co by zmieniło, gdyby Wasz team mógł zaoszczędzić te 3 godziny tygodniowo?",
      "Gdybyście mogli wyeliminować ten problem, jak wpłynęłoby to na Wasze wyniki?",
      "Jak cenne byłoby dla Was rozwiązanie, które robi X bez Y?",
    ],
    pułapka: "Nie używaj Need-Payoff pytań zbyt wcześnie — muszą następować po dobrze zbudowanym Implication, inaczej brzmią sztucznie.",
    kolor: "green",
  },
];

const spinVsOther = [
  { aspekt: "Skupienie", spin: "Pytania — zwł. Implication i Need-Payoff", challenger: "Insight i provokacja myślenia", sandler: "Kwalifikacja i ból klienta", solution: "Dopasowanie cech produktu do potrzeb" },
  { aspekt: "Podstawa", spin: "35 000 przebadanych rozmów sprzedażowych", challenger: "Badanie 6 000 handlowców (CEB)", sandler: "Teoria Transakcyjna Berne'a", solution: "Sprzedaż przez dopasowanie funkcji" },
  { aspekt: "Najlepiej dla", spin: "Złożona B2B, długi cykl, discovery", challenger: "Enterprise, duże organizacje", sandler: "Kwalifikacja i zarządzanie bólem", solution: "Technologia, gdzie cechy mają znaczenie" },
  { aspekt: "Słabość", spin: "Wymaga głębokiej znajomości branży klienta", challenger: "Ryzyko alienacji ostrożnych kupców", sandler: "Mniej systematyczny framework pytań", solution: "Nie działa gdy klient nie zna swoich problemów" },
];

export default function BlogSpinSellingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SPIN Selling — co to jest i jak stosować? | Fotz.pl"
        description="SPIN Selling — metodologia sprzedaży Neila Rackhama: cztery typy pytań (Situation, Problem, Implication, Need-Payoff), przykłady i jak wdrożyć w zespole B2B."
        canonical="https://fotz.pl/blog/spin-selling-metodologia-sprzedazy"

        keywords="SPIN Selling co to jest, SPIN Selling definicja, czym jest SPIN Selling, SPIN Selling przykłady, jak działa SPIN Selling, SPIN Selling znaczenie, SPIN Selling przewodnik"

        canonical="https://fotz.pl/blog/spin-selling-metodologia-sprzedazy"
      />
      <ArticleSchema
        title="SPIN Selling — co to jest i jak stosować?"
        description="Kompletny przewodnik po SPIN Selling: cztery typy pytań, przykłady i porównanie z innymi metodologiami."
        url="https://fotz.pl/blog/spin-selling-metodologia-sprzedazy"
        datePublished="2024-02-05"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SPIN Selling", url: "https://fotz.pl/blog/spin-selling-metodologia-sprzedazy" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-lime-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "SPIN Selling", url: "/blog/spin-selling-metodologia-sprzedazy" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-lime-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Metodologie Sprzedaży
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SPIN Selling
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Metodologia oparta na badaniu 35 000 rozmów sprzedażowych. Najlepsi handlowcy nie przekonują —
              zadają pytania, które pomagają klientowi samemu odkryć potrzebę zakupu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { litera: "S", pełna: "Situation", kolor: "bg-blue-600" },
                { litera: "P", pełna: "Problem", kolor: "bg-orange-600" },
                { litera: "I", pełna: "Implication", kolor: "bg-red-600" },
                { litera: "N", pełna: "Need-Payoff", kolor: "bg-green-600" },
              ].map((item) => (
                <div key={item.litera} className={`${item.kolor} rounded-xl p-4 text-center`}>
                  <div className="text-3xl font-bold">{item.litera}</div>
                  <div className="text-sm opacity-90">{item.pełna}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cztery typy pytań */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 typy pytań SPIN</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy typ pytań ma inne zastosowanie i różny wpływ na wynik rozmowy sprzedażowej.
              Pytania Implication i Need-Payoff są kluczowe dla dużych transakcji.
            </p>
          </FadeInView>
          <div className="space-y-8">
            {spinQuestions.map((q) => (
              <FadeInView key={q.litera}>
                <div className={`rounded-xl border-2 p-6 ${
                  q.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  q.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  q.kolor === "red" ? "border-red-200 bg-red-50" :
                  "border-green-200 bg-green-50"
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`font-bold text-2xl rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0 ${
                      q.kolor === "blue" ? "bg-blue-600 text-white" :
                      q.kolor === "orange" ? "bg-orange-600 text-white" :
                      q.kolor === "red" ? "bg-red-600 text-white" :
                      "bg-green-600 text-white"
                    }`}>
                      {q.litera}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-1 ${
                        q.kolor === "blue" ? "text-blue-800" :
                        q.kolor === "orange" ? "text-orange-800" :
                        q.kolor === "red" ? "text-red-800" :
                        "text-green-800"
                      }`}>
                        {q.typ}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1"><strong>Cel:</strong> {q.cel}</p>
                      <p className="text-gray-500 text-xs mb-4 italic"><strong>Kiedy:</strong> {q.kiedy}</p>
                      <div className="mb-4">
                        <div className="text-xs font-bold text-gray-500 uppercase mb-2">Przykłady pytań</div>
                        <ul className="space-y-1">
                          {q.przykłady.map((p, i) => (
                            <li key={i} className="text-sm text-gray-700 flex gap-2">
                              <span className="text-gray-400 flex-shrink-0">—</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                        <div className="text-xs font-bold text-yellow-700 uppercase mb-1">Pułapka</div>
                        <p className="text-sm text-gray-700">{q.pułapka}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Porównanie metodologii */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SPIN vs inne metodologie sprzedaży</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              SPIN nie jest jedyną metodologią — każda ma swoje mocne strony i konteksty zastosowania.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-lime-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Aspekt</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">SPIN Selling</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Challenger Sale</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Sandler Selling</th>
                </tr>
              </thead>
              <tbody>
                {spinVsOther.map((row, i) => (
                  <tr key={row.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{row.aspekt}</td>
                    <td className="px-4 py-3 text-gray-700 text-sm">{row.spin}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.challenger}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.sandler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <RelatedArticles currentArticleId="spin-selling-metodologia-sprzedazy" />
      <ContactSection />
    </Layout>
  );
}
