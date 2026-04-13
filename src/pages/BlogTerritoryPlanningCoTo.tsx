import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest territory planning w sprzedaży?",
    answer: "Territory planning (planowanie terytoriów sprzedażowych) to proces podziału rynku na segmenty przypisane do poszczególnych AE (Account Executives) lub zespołów sprzedażowych. Terytorium może być zdefiniowane przez: geografię (region, kraj, miasto), segment klienta (SMB, Mid-Market, Enterprise), branżę (fintech, healthcare, retail), rozmiar firmy (ARR, headcount, revenue), lub kombinację powyższych. Celem territory planowania jest zapewnienie że każdy AE ma podobną szansę na osiągnięcie quoty, firma pokrywa cały adresowalny rynek (TAM) i nie ma nakładania się (overlap) między AE co powoduje konflikty i podwójne kontaktowanie tych samych klientów.",
  },
  {
    question: "Jakie są metody podziału terytoriów?",
    answer: "Metody podziału terytoriów: Geograficzna — AE odpowiada za klientów w określonym regionie. Prosta, intuicyjna. Problem: gęstość potencjalnych klientów jest nierówna (Warszawa vs. małe miasto). Branżowa/Vertykalna — AE specjalizuje się w konkretnej branży (fintech, manufacturing, healthcare). Głębsza wiedza domenowa, lepsze discovery conversations. Named Accounts — lista konkretnych firm przypisanych do AE. Stosowana w enterprise sprzedaży. AE może mieć 20-50 named accounts i pracuje je intensywnie. Segmentacyjna (Firmographic) — podział według rozmiaru firmy (revenue, headcount). AE SMB może obsługiwać setki mniejszych klientów, AE Enterprise kilkadziesiąt dużych. Hybrydowa — kombinacja geography + segment + vertical. Najbardziej precyzyjna ale też najkompleksowsza w zarządzaniu.",
  },
  {
    question: "Jak zapewnić równość terytoriów?",
    answer: "Równość terytoriów (territory fairness): Oblicz potencjał każdego terytorium — ile TAM (Total Addressable Market) jest w każdym terytorium? Narzędzia: ZoomInfo, Bombora, 6sense do szacowania TAM per segment. Normalizuj historię — jeśli terytorium ma dużo istniejących klientów do retention/expansion, quota powinna uwzględniać że czas AE jest częściowo zajęty. Uwzględnij dojrzałość rynku — nowe terytorium (np. nowy region geograficzny) wymaga czasu na budowanie relacji i pipeline. Ramp-up quota. Rebalansuj co rok — rynki się zmieniają. Nowi inwestorzy w startupach, M&A, wzrost branży IT mogą dramatycznie zmienić potencjał terytorium. Annual territory review jest kluczowy. Unikaj overlap — double coverage (dwóch AE kontaktuje tego samego prospekta) niszczy relacje z klientami i powoduje wewnętrzne konflikty.",
  },
  {
    question: "Jak zarządzać named accounts?",
    answer: "Named accounts to lista konkretnych firm przypisanych do enterprise AE. Best practices: Rozmiar listy — enterprise AE powinien mieć 20-75 named accounts. Mniej = niewystarczający pipeline. Więcej = niewystarczające pokrycie każdego konta. Scoring i priorytetyzacja — nie wszystkie named accounts są równe. Segmentuj na Tier 1 (top 20%, core focus), Tier 2 (30%, secondary focus), Tier 3 (50%, background coverage). Account coverage — ile kontaktów ma AE w każdym koncie? Zdrowe enterprise coverage: 5-10 kontaktów per account na różnych levelach. ICP scoring — regularne sprawdzanie czy named accounts wciąż pasują do ICP. Churn accounts które nie są fit, dodaj nowe które spełniają kryteria. Quarterly Business Review (QBR) na named accounts — regularne podsumowanie postępów z managerem.",
  },
  {
    question: "Jak territory planning wpływa na wyniki sprzedaży?",
    answer: "Wpływ territory planowania: Dobre planowanie może poprawić wyniki całego działu o 10-20% bez zmiany liczby AE czy procesu sprzedaży — tylko przez optymalny podział pracy. AE z równymi terytoriami mają wyższe morale i niższą attrition — bo widzą że system jest fair. Pipeline coverage jest bardziej równomierny — brak 'dziur' w rynku (segmenty bez coverage) i 'przepełnionych' terytoriów gdzie AE nie może obsłużyć wszystkich leadów. Conflikty internalne są minimalizowane — jasny podział wyeliminuje spory 'to mój klient'. Badania Bain pokazują że firmy z data-driven territory planningiem osiągają o 15-30% wyższy win rate niż te z arbitralnym podziałem.",
  },
];

const territoryModels = [
  {
    model: "Geograficzny",
    opis: "AE odpowiada za klientów w określonym regionie lub kraju",
    najlepszy: "Produkty B2B wymagające present presence, manufacturing, lokalne usługi",
    wady: "Nierówna gęstość potencjalnych klientów, trudny scaling do nowych regionów",
    kolor: "blue",
  },
  {
    model: "Branżowy (Vertical)",
    opis: "AE specjalizuje się w konkretnej branży niezależnie od lokalizacji",
    najlepszy: "Produkty z silną specjalizacją domenową (fintech, healthcare, legal tech)",
    wady: "AE muszą być industry experts — trudniejszy onboarding, drożsi",
    kolor: "green",
  },
  {
    model: "Named Accounts",
    opis: "Konkretna lista firm przypisana do AE — pracuje intensywnie te konta",
    najlepszy: "Enterprise sprzedaż z długimi cyklami i dużymi dealami (100K+ USD ACV)",
    wady: "Wymaga dobrego account scoringu. Złe konto = stracony czas AE.",
    kolor: "purple",
  },
  {
    model: "Segmentacyjny",
    opis: "Podział według rozmiaru firmy (SMB, MM, Enterprise) bez względu na geografię",
    najlepszy: "SaaS produkty sprzedawane do firm różnych rozmiarów z różnym procesem",
    wady: "AE SMB obsługuje setki małych firm — niższe wynagrodzenie, wysoki churn",
    kolor: "orange",
  },
];

const territoryPlanSteps = [
  { krok: "Zdefiniuj ICP", opis: "Jasno określ profil idealnego klienta — branża, rozmiar, tech stack, sygnały zakupowe. To podstawa dla każdego podziału." },
  { krok: "Oblicz TAM per segment", opis: "Ile potencjalnych klientów spełniających ICP jest w każdym proponowanym terytorium? Użyj ZoomInfo, Crunchbase, LinkedIn Sales Nav." },
  { krok: "Podziel na równe terytorium", opis: "Każde terytorium powinno mieć podobny potencjał (TAM). Uwzględnij sezonowość i dojrzałość rynku." },
  { krok: "Przypisz AE", opis: "Dopasuj AE do terytoriów biorąc pod uwagę ich doświadczenie (branżowe, regionalne) i aktualny pipeline." },
  { krok: "Ustal quoty per terytorium", opis: "Quota per terytorium powinna odzwierciedlać jego potencjał — nie jednolita dla wszystkich." },
  { krok: "Rewizja kwartalna", opis: "Monitoruj pipeline per terytorium. Rebalansuj jeśli jedno terytorium jest systematycznie przepełnione lub zbyt puste." },
];

export default function BlogTerritoryPlanningCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Territory Planning | Fotz Studio"
        description="Territory planning: modele podziału (geograficzny, vertical, named accounts), równość terytoriów, named accounts management i wpływ na wyniki sprzedaży."
        canonicalUrl="https://fotz.pl/blog/territory-planning-planowanie-terytoriow-sprzedazowych"

        keywords="Territory Planning co to jest, Territory Planning definicja, czym jest Territory Planning, Territory Planning w sprzedaży, Territory Planning strategia, Territory Planning przykłady, jak używać Territory Planning"

        canonical="https://fotz.pl/blog/territory-planning-planowanie-terytoriow-sprzedazowych"
      />
      <ArticleSchema
        title="Territory Planning — jak planować terytoria sprzedażowe?"
        description="Territory planning: modele podziału terytoriów, jak zapewnić równość, named accounts management i jak territory planning wpływa na wyniki działu sprzedaży."
        url="https://fotz.pl/blog/territory-planning-planowanie-terytoriow-sprzedazowych"
        datePublished="2024-02-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Territory Planning", url: "https://fotz.pl/blog/territory-planning-planowanie-terytoriow-sprzedazowych" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Territory Planning", href: "/blog/territory-planning-planowanie-terytoriow-sprzedazowych" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Territory Planning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Kto odpowiada za jakich klientów? Territory planning decyduje
              czy AE mają równe szanse na sukces i czy firma pokrywa cały
              dostępny rynek bez konfliktów i luk.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Named accounts per AE", value: "20-75" },
                { label: "Wpływ na win rate", value: "+15-30%" },
                { label: "Rewizja", value: "Kwartalna" },
                { label: "Modele", value: "4 główne" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-red-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modele */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 modele territory</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie ma jednego właściwego modelu — wybór zależy od Twojego produktu,
              rynku i procesu sprzedażowego.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-5">
            {territoryModels.map((m) => (
              <FadeInView key={m.model}>
                <div className={`rounded-xl border-2 p-5 h-full ${
                  m.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  m.kolor === "green" ? "border-green-200 bg-green-50" :
                  m.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    m.kolor === "blue" ? "text-blue-800" :
                    m.kolor === "green" ? "text-green-800" :
                    m.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>{m.model}</h3>
                  <p className="text-gray-700 text-sm mb-3">{m.opis}</p>
                  <div className="text-sm space-y-2">
                    <div><span className="font-semibold text-green-700">Najlepszy dla: </span><span className="text-gray-600">{m.najlepszy}</span></div>
                    <div><span className="font-semibold text-red-600">Wady: </span><span className="text-gray-600">{m.wady}</span></div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Kroki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak przeprowadzić territory planning</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Roczny territory planning to 6-krokowy proces wymagający danych
              o rynku, historii sprzedaży i współpracy między RevOps a Sales Leadership.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {territoryPlanSteps.map((s, i) => (
              <FadeInView key={s.krok}>
                <div className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
                  <div className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{s.krok}</h3>
                    <p className="text-sm text-gray-700">{s.opis}</p>
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
