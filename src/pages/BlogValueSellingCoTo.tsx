import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Value Selling?",
    answer: "Value Selling (sprzedaż wartości) to metodologia sprzedaży, w której handlowiec skupia się na demonstrowaniu wartości biznesowej i ROI rozwiązania dla konkretnego klienta, zamiast prezentować cechy i funkcje produktu. Zamiast mówić 'nasz produkt ma 500 integracji', Value Selling mówi: 'na podstawie Waszych danych, nasza integracja z Salesforce zaoszczędzi Waszemu teamowi 4 godziny tygodniowo na ręcznym data entry — to 8000 PLN rocznie per osoba przy 5 AE-ach'. Wartość > Cechy.",
  },
  {
    question: "Jakie są kluczowe elementy Value Selling?",
    answer: "Fundamenty Value Selling: Discovery — głębokie zrozumienie bólu klienta, KPI, celów biznesowych i konsekwencji niedziałania. Value Hypothesis — hipoteza wartości, którą produkt dostarczy temu konkretnemu klientowi. Business Case — policzalny ROI: oszczędności, wzrost przychodów, redukcja ryzyka. Proof — case studies, referencje, POC z mierzalnymi wynikami. Quantified Value Proposition — konkretne liczby, nie ogólniki. Economic Buyer Engagement — dotarcie do osoby, która akceptuje ROI argument.",
  },
  {
    question: "Czym Value Selling różni się od tradycyjnej sprzedaży?",
    answer: "Tradycyjna sprzedaż: skupia się na cechach produktu, handlowiec mówi 80% czasu, demonstracja działa jak prezentacja, cena pojawia się na końcu, odpowiada na pytanie 'co produkt robi?'. Value Selling: skupia się na bólu i wartości, handlowiec słucha 70% czasu, demonstracja skupia się na przypadkach użycia klienta, ROI justifikuje cenę już na początku rozmowy, odpowiada na pytanie 'co produkt da temu konkretnemu klientowi?' Badania Gartner wskazują, że klienci, którym pomaga się zbudować business case, kupują 3x częściej.",
  },
  {
    question: "Jak zbudować ROI Calculator dla Value Selling?",
    answer: "Skuteczny ROI Calculator w Value Selling: zbierz dane od klienta (liczba pracowników, obecny koszt procesu, czas tracony, % konwersji), przelicz obecny koszt problemu (ile kosztuje status quo?), oblicz wartość rozwiązania (oszczędności + wzrost + redukcja ryzyka), pokaż czas zwrotu inwestycji (Payback Period od zakupu produktu), dodaj soft benefits (morale, employer branding, redukcja ryzyka). Kluczowe: klient musi sam wpisać swoje liczby — własnoręcznie zbudowany business case jest bardziej przekonujący niż Twoje szacunki.",
  },
  {
    question: "Dla jakiego rodzaju sprzedaży sprawdza się Value Selling?",
    answer: "Value Selling sprawdza się najlepiej przy: wysokim ACV (powyżej 20 000 PLN rocznie) — uzasadnia czas inwestycji w budowanie business case; długim cyklu sprzedaży (powyżej 30 dni) — jest czas na discovery i ROI analysis; złożonych decyzjach zakupowych (wiele stakeholderów) — business case pomaga championowi przekonać Economic Buyer; enterprise sprzedaży — CFO i CEO oczekują uzasadnienia finansowego. Value Selling jest mniej efektywny dla transakcyjnego, szybkiego SMB gdzie liczy się czas i prostota.",
  },
];

const valueSellingFramework = [
  {
    etap: "Diagnoza",
    pytania: ["Jakie są Wasze główne cele biznesowe na ten rok?", "Jakie przeszkody blokują osiągnięcie tych celów?", "Ile kosztuje Was obecne rozwiązanie (lub brak rozwiązania)?", "Co się stanie jeśli nie rozwiążecie tego problemu w ciągu 6 miesięcy?"],
    cel: "Zrozumieć ból biznesowy i jego koszt finansowy",
    kolor: "blue",
  },
  {
    etap: "Kwantyfikacja",
    pytania: ["Ile osób dotknięty przez ten problem?", "Ile czasu tygodniowo każda z nich traci?", "Jaki jest koszt godziny pracy (wynagrodzenie + overhead)?", "Ile transakcji/konwersji tracicie przez ten problem?"],
    cel: "Przeliczenie bólu na konkretne PLN/rok",
    kolor: "green",
  },
  {
    etap: "Hipoteza wartości",
    pytania: ["Na podstawie Waszych danych, nasze rozwiązanie powinno..."],
    cel: "Połączenie danych klienta z konkretnymi wynikami, które osiągnął podobny klient",
    kolor: "orange",
  },
  {
    etap: "Business Case",
    pytania: ["Oszczędności roczne: X PLN", "Wzrost przychodów: Y PLN", "Redukcja ryzyka: Z PLN", "Łączna wartość: X+Y+Z PLN vs cena: P PLN", "Payback Period: P / (X+Y+Z/12) miesięcy"],
    cel: "Dokument finansowy, który champion niesie do Economic Buyera",
    kolor: "purple",
  },
];

const valueMetrics = [
  { kategoria: "Efektywność operacyjna", przykłady: ["Czas zaoszczędzony (godziny/mies.)", "Liczba procesów zautomatyzowanych", "Redukcja błędów ludzkich (%)", "Skrócenie cyklu procesu (dni)"] },
  { kategoria: "Wzrost przychodów", przykłady: ["Wzrost konwersji sprzedaży (%)", "Skrócenie Sales Cycle (dni)", "Wzrost Average Deal Size (PLN)", "Więcej pipeline z tych samych zasobów"] },
  { kategoria: "Redukcja kosztów", przykłady: ["Niższy CAC (PLN per klient)", "Niższy churn (% retention wzrost)", "Redukcja kosztów infrastruktury (%)", "Mniej FTE potrzebnych do procesu"] },
  { kategoria: "Redukcja ryzyka", przykłady: ["Zgodność regulacyjna (GDPR, SOX)", "Redukcja ryzyka reputacyjnego", "Business continuity improvement", "Audit trail i compliance reporting"] },
];

export default function BlogValueSellingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Value Selling | Fotz Studio"
        description="Value Selling — metodologia sprzedaży przez wartość i ROI: co to jest, jak zbudować business case, framework discovery i dla kogo sprawdza się najlepiej."
        canonical="https://fotz.pl/blog/value-selling-sprzedaz-przez-wartosc"

        keywords="Value Selling co to jest, Value Selling definicja, czym jest Value Selling, Value Selling przykłady, jak działa Value Selling, Value Selling znaczenie, Value Selling przewodnik"

        canonical="https://fotz.pl/blog/value-selling-sprzedaz-przez-wartosc"
      />
      <ArticleSchema
        title="Value Selling — co to jest i jak sprzedawać przez wartość?"
        description="Kompletny przewodnik po Value Selling: framework, business case, ROI calculation i praktyczne zastosowania."
        url="https://fotz.pl/blog/value-selling-sprzedaz-przez-wartosc"
        datePublished="2024-02-04"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Value Selling", url: "https://fotz.pl/blog/value-selling-sprzedaz-przez-wartosc" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Value Selling", url: "/blog/value-selling-sprzedaz-przez-wartosc" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Metodologie Sprzedaży
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Value Selling
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Klienci nie kupują produktów — kupują wyniki biznesowe. Value Selling to metodologia,
              która tłumaczy cechy produktu na konkretny ROI i business case dla każdego klienta.
            </p>
            <div className="bg-amber-900/50 rounded-xl p-6 border border-amber-700">
              <div className="text-sm text-amber-300 font-semibold mb-3">Kluczowa zasada Value Selling</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-900/50 rounded-lg p-4">
                  <div className="text-xs font-bold text-red-300 uppercase mb-2">Tradycyjna sprzedaż</div>
                  <div className="text-sm">"Nasz produkt ma 500 integracji i AI-powered analytics"</div>
                </div>
                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="text-xs font-bold text-green-300 uppercase mb-2">Value Selling</div>
                  <div className="text-sm">"Dzięki integracji z Salesforce Wasi AE zaoszczędzą 4h/tyg. — to 96 000 PLN rocznie"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Framework Value Selling — 4 etapy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Skuteczny Value Selling przebiega przez 4 sekwencyjne etapy — od diagnozy bólu
              po gotowy business case, który champion może zanieść do Economic Buyera.
            </p>
          </FadeInView>
          <div className="space-y-6">
            {valueSellingFramework.map((etap, i) => (
              <FadeInView key={etap.etap}>
                <div className={`rounded-xl p-6 border-2 ${
                  etap.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  etap.kolor === "green" ? "border-green-200 bg-green-50" :
                  etap.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      etap.kolor === "blue" ? "bg-blue-600 text-white" :
                      etap.kolor === "green" ? "bg-green-600 text-white" :
                      etap.kolor === "orange" ? "bg-orange-600 text-white" :
                      "bg-purple-600 text-white"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-xl mb-2 ${
                        etap.kolor === "blue" ? "text-blue-800" :
                        etap.kolor === "green" ? "text-green-800" :
                        etap.kolor === "orange" ? "text-orange-800" :
                        "text-purple-800"
                      }`}>
                        {etap.etap}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 italic">{etap.cel}</p>
                      <ul className="space-y-1">
                        {etap.pytania.map((p, j) => (
                          <li key={j} className="text-sm text-gray-700 flex gap-2">
                            <span className="text-gray-400 flex-shrink-0">{etap.etap === "Hipoteza wartości" || etap.etap === "Business Case" ? "→" : "?"}</span>
                            {p}
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

      {/* Value Metrics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Metryki wartości — co mierzyć</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Value Selling wymaga konkretnych metryk — ogólniki jak "poprawa efektywności" nie przekonują
              Economic Buyera. Oto kategorie mierzalnej wartości.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {valueMetrics.map((cat) => (
              <FadeInView key={cat.kategoria}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">{cat.kategoria}</h3>
                  <ul className="space-y-2">
                    {cat.przykłady.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-amber-500 flex-shrink-0">→</span>
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

      <RelatedArticles currentArticleId="value-selling-sprzedaz-przez-wartosc" />
      <ContactSection />
    </Layout>
  );
}
