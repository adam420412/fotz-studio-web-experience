import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest lead scoring?",
    answer:
      "Lead scoring to metoda oceniania i rankowania potencjalnych klientów (leadów) na podstawie ich dopasowania do Idealnego Profilu Klienta (ICP) oraz poziomu zaangażowania z firmą. Każdemu leadowi przypisuje się punkty za demografię i zachowania — im wyższy score, tym bardziej kwalifikowany lead gotowy do kontaktu sprzedażowego. Lead scoring eliminuje marnowanie czasu sprzedaży na niekwalifikowane leady.",
  },
  {
    question: "Jakie są typy lead scoringu?",
    answer:
      "Dwa główne wymiary: Fit Score (dopasowanie) — czy lead pasuje do ICP? Firmografia: branża, wielkość firmy, przychody, lokalizacja. Demografie: stanowisko, seniority, dział. Technografia: stack technologiczny. Engagement Score (zaangażowanie) — czy lead interesuje się produktem? Wizyty na stronie, pobrania, webinary, emaile, prośby o demo. Najlepszy podejście: kombinacja obu (MQL = wysoki fit + wysoki engagement).",
  },
  {
    question: "Czym różni się MQL od SQL?",
    answer:
      "MQL (Marketing Qualified Lead) to lead zakwalifikowany przez marketing jako gotowy do kontaktu — osiągnął określony lead score. SQL (Sales Qualified Lead) to lead zakwalifikowany przez sprzedaż po rozmowie — spełnia kryteria BANT (Budget, Authority, Need, Timeline) lub MEDDIC. Lead scoring automatyzuje przekazywanie MQL do sprzedaży. Kluczowe: marketing i sprzedaż muszą razem zdefiniować co oznacza MQL i SQL.",
  },
  {
    question: "Jak ustalić punktację w lead scoringu?",
    answer:
      "Metoda: przeanalizuj historyczne closed-won deals — jakie atrybuty miały leady które zostały klientami? Przypisz wyższe punkty cechom które korelują z zamknięciem. Przykład: Stanowisko CEO/CFO = +20 pkt, firmy 50–200 prac. = +15 pkt, wizyta na pricing page = +10 pkt, pobranie case study = +8 pkt, webinar attendance = +5 pkt. Próg MQL: np. 50 punktów. Regularnie waliduj i aktualizuj model (co kwartał).",
  },
  {
    question: "Co to jest predictive lead scoring?",
    answer:
      "Predictive lead scoring (predyktywny scoring) to model uczenia maszynowego który automatycznie identyfikuje które cechy leadów korelują z konwersją — bez ręcznego definiowania reguł. Analizuje tysiące zmiennych i historycznych danych aby przewidzieć prawdopodobieństwo zamknięcia. Narzędzia: MadKudu, 6sense, Salesforce Einstein, HubSpot AI. Wymaga wystarczającej ilości danych historycznych (min. 200–500 closed deals).",
  },
];

const scoringDimensions = [
  {
    wymiar: "Dopasowanie Demograficzne",
    opis: "Jak dobrze lead pasuje do Idealnego Profilu Klienta wg cech osobowych",
    przykłady: [
      { cecha: "Stanowisko: CEO, CFO, CTO", punkty: "+20" },
      { cecha: "Stanowisko: Manager, Director", punkty: "+10" },
      { cecha: "Stanowisko: Junior, Intern", punkty: "-10" },
      { cecha: "Dział: IT, Finance, Operations", punkty: "+8" },
    ],
    kolor: "bg-blue-50",
    kolor_header: "text-blue-600",
  },
  {
    wymiar: "Dopasowanie Firmograficzne",
    opis: "Jak dobrze firma leadów pasuje do targetu — branża, wielkość, przychody",
    przykłady: [
      { cecha: "Branża: SaaS, Tech, Finance", punkty: "+15" },
      { cecha: "Wielkość: 50–500 pracowników", punkty: "+15" },
      { cecha: "Przychody: 5–50M PLN", punkty: "+12" },
      { cecha: "Lokalizacja: Polska", punkty: "+5" },
    ],
    kolor: "bg-green-50",
    kolor_header: "text-green-600",
  },
  {
    wymiar: "Zaangażowanie — Strona www",
    opis: "Aktywność leadów na Twojej stronie — mierzona przez tracking cookies/JS",
    przykłady: [
      { cecha: "Wizyta na /pricing", punkty: "+10" },
      { cecha: "Wizyta na /case-studies", punkty: "+7" },
      { cecha: "Czas na stronie powyżej 5 min", punkty: "+5" },
      { cecha: "Powrót na stronę 3+ razy", punkty: "+8" },
    ],
    kolor: "bg-orange-50",
    kolor_header: "text-orange-600",
  },
  {
    wymiar: "Zaangażowanie — Content i Email",
    opis: "Interakcje z treściami marketingowymi — pobrania, webinary, emaile",
    przykłady: [
      { cecha: "Prośba o demo / kontakt", punkty: "+40" },
      { cecha: "Pobranie case study lub raportu", punkty: "+8" },
      { cecha: "Uczestnictwo w webinarze", punkty: "+6" },
      { cecha: "Otwarcie emaila", punkty: "+2" },
    ],
    kolor: "bg-purple-50",
    kolor_header: "text-purple-600",
  },
];

const scoringProcess = [
  { krok: "Zdefiniuj ICP", opis: "Stwórz Ideal Customer Profile bazując na closed-won deals. Jakie firmy i osoby zostają klientami? Jakie cechy mają najwyższą korelację z zamknięciem?" },
  { krok: "Mapuj dane w CRM", opis: "Zbierz dostępne dane o leadach w CRM: stanowisko, firma, branża, wielkość. Zintegruj dane behawioralne z marketing automation (HubSpot, Marketo)." },
  { krok: "Przypisz wartości punktowe", opis: "Dla każdej cechy przypisz punkty proporcjonalne do jej korelacji z konwersją. Zacznij od hipotez, waliduj danymi historycznymi." },
  { krok: "Zdefiniuj progi MQL/SQL", opis: "Ustal próg punktowy dla MQL (np. 50 pkt) i SQL. Przetestuj na historycznych leadach — ile closed-deals przekroczyłoby próg? Ile false positives?" },
  { krok: "Automatyzuj i testuj", opis: "Skonfiguruj automatyczne powiadomienia do sprzedaży gdy lead osiąga MQL. Śledź conversion rate MQL-to-SQL i SQL-to-Won. Iteruj." },
  { krok: "Waliduj regularnie", opis: "Co kwartał sprawdzaj czy model działa. Czy MQLe zostają klientami? Czy progi są dobrze skalibrowane? Aktualizuj punktację na podstawie nowych danych." },
];

const scoringTools = [
  { narzędzie: "HubSpot", typ: "Marketing Automation + CRM", lead_scoring: "Wbudowany scoring w HubSpot Marketing Hub (contact + company properties)", cena: "Od $45/mies. (Starter)" },
  { narzędzie: "Marketo Engage", typ: "Enterprise Marketing Automation", lead_scoring: "Zaawansowany scoring z behavioral + demographic + predictive", cena: "Enterprise (wysoki)" },
  { narzędzie: "Salesforce Einstein", typ: "AI Lead Scoring w Salesforce CRM", lead_scoring: "Predictive AI scoring bazujące na historii CRM", cena: "Dodatkowy moduł Einstein ($50+/user/mies.)" },
  { narzędzie: "MadKudu", typ: "Predictive Lead Scoring", lead_scoring: "AI model trenowany na Twoich danych, integracja z Salesforce/HubSpot", cena: "Od $999/mies." },
  { narzędzie: "ActiveCampaign", typ: "SMB Marketing Automation", lead_scoring: "Prosty scoring oparty na tagach i eventach", cena: "Od $29/mies." },
];

export default function BlogLeadScoringCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Lead Scoring — co to jest? Ocena i kwalifikacja leadów w marketingu B2B"
        description="Lead scoring — definicja, 4 wymiary scoringu (demograficzne, firmograficzne, behawioralne), MQL vs SQL, 6-krokowy proces i narzędzia. Kompletny przewodnik B2B."
        canonicalUrl="https://fotz.pl/blog/lead-scoring-co-to"
      />
      <ArticleSchema
        title="Lead Scoring — co to jest i jak oceniać leady?"
        description="Kompletny przewodnik po lead scoringu: 4 wymiary, MQL vs SQL, predictive scoring i narzędzia: HubSpot, Marketo, Salesforce Einstein."
        url="https://fotz.pl/blog/lead-scoring-co-to"
        datePublished="2024-01-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Lead Scoring", url: "https://fotz.pl/blog/lead-scoring-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Lead Scoring" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Lead Scoring — co to jest i jak oceniać leady?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Lead scoring pozwala sprzedaży skupić się na właściwych leadach we właściwym czasie.
            Poznaj 4 wymiary scoringu, różnicę MQL vs SQL i jak budować model oceny leadów.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest lead scoring?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Lead scoring</strong> to system oceny i rankowania potencjalnych klientów
              na podstawie ich dopasowania do idealnego profilu klienta i poziomu zaangażowania.
              Zamiast przekazywać wszystkie leady do sprzedaży — przekazujesz tylko tych,
              którzy prawdopodobnie kupią i są gotowi na rozmowę.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania Forrester: firmy z lead scoringiem mają 77% wyższy wskaźnik ROI
              z generowania leadów. A sprzedaż skontaktowana z zakwalifikowanymi leadami
              zamyka 3× więcej dealów niż przy pracy na wszystkich leadach.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "77%", opis: "wyższy ROI z lead generation przy wdrożeniu lead scoringu (Forrester)" },
                { stat: "3×", opis: "wyższy wskaźnik zamykania dealów gdy sprzedaż pracuje na zakwalifikowanych leadach" },
                { stat: "50%", opis: "redukcja czasu sprzedaży na niekwalifikowane leady po wdrożeniu scoringu" },
              ].map((s, i) => (
                <div key={i} className="bg-indigo-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-indigo-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 wymiary lead scoringu</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {scoringDimensions.map((dim, i) => (
                <div key={i} className={`rounded-xl p-6 ${dim.kolor}`}>
                  <h3 className={`font-bold text-lg mb-1 ${dim.kolor_header}`}>{dim.wymiar}</h3>
                  <p className="text-slate-600 text-sm mb-4">{dim.opis}</p>
                  <div className="space-y-2">
                    {dim.przykłady.map((ex, j) => (
                      <div key={j} className="bg-white rounded p-2 flex justify-between items-center text-sm">
                        <span className="text-slate-700">{ex.cecha}</span>
                        <span className={`font-bold ${ex.punkty.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>{ex.punkty} pkt</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6-krokowy proces wdrożenia lead scoringu</h2>
            <div className="space-y-4">
              {scoringProcess.map((krok, i) => (
                <div key={i} className="flex gap-4 bg-indigo-50 rounded-xl p-5">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{krok.krok}</h3>
                    <p className="text-slate-600 text-sm">{krok.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Narzędzia do lead scoringu</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Narzędzie</th>
                    <th className="p-3 text-left">Typ</th>
                    <th className="p-3 text-left">Lead Scoring</th>
                    <th className="p-3 text-left">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  {scoringTools.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-indigo-700">{row.narzędzie}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.typ}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.lead_scoring}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cena}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — lead scoring</h2>
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
