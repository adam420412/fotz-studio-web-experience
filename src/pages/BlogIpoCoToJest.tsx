import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest IPO?",
    answer: "IPO (Initial Public Offering, pierwsza oferta publiczna) to proces wprowadzenia spółki prywatnej na giełdę papierów wartościowych poprzez emisję akcji i ich sprzedaż publicznym inwestorom po raz pierwszy. Po IPO akcje spółki są notowane na giełdzie i mogą być kupowane i sprzedawane przez inwestorów detalicznych i instytucjonalnych. IPO umożliwia spółce pozyskanie znacznego kapitału, daje płynność wyjścia dotychczasowym inwestorom (VC, PE, founderom) i zwiększa wiarygodność oraz rozpoznawalność marki.",
  },
  {
    question: "Kiedy firma decyduje się na IPO?",
    answer: "Typowe kryteria gotowości do IPO: Przychody — zazwyczaj 100M+ USD (SaaS) lub 200M+ USD (inne branże) ARR/revenue. Wzrost — 30%+ YoY wzrost przy widocznej ścieżce do rentowności. Dojrzałość operacyjna — procesy, systemy raportowania i zarządzanie spełniające wymogi spółki publicznej. Rentowność lub jasna ścieżka — inwestorzy publiczni coraz częściej oczekują profitability lub Rule of 40 powyżej 40. Governance — niezależna rada, audyt komitet, CFO z doświadczeniem w spółkach publicznych. Rynek — dobre okno rynkowe (bull market, sector sentiment). Finalne dane: mediana US IPO tech 2020-2022 to 500M+ USD valuation przy 100-300M USD revenue.",
  },
  {
    question: "Jak wygląda proces IPO?",
    answer: "Fazy procesu IPO: Przygotowanie (6-18 miesięcy) — audyt, wybór banków (underwriterów), due diligence, przygotowanie F-1/S-1 prospectus. Confidential Filing — złożenie S-1 do SEC (lub prospektu do KNF) w sposób poufny do review. Public Filing — publiczne opublikowanie prospektu, uruchomienie analyst research. Roadshow (2 tygodnie) — management prezentuje dla inwestorów instytucjonalnych w wielu miastach. Book Building — banki zbierają zapisy, ustalają finalną cenę (final pricing). Trading Day — debiut na giełdzie, pierwsze notowania. Lock-up (6 miesięcy) — insiderzy nie mogą sprzedawać akcji przez 180 dni post-IPO.",
  },
  {
    question: "Jakie są alternatywy dla IPO?",
    answer: "Alternatywy dla tradycyjnego IPO: SPAC (Special Purpose Acquisition Company) — shell company zbiera kapitał na giełdzie i łączy się z prywatną firmą. Szybsze i tańsze niż tradycyjne IPO, ale gorszy signal dla rynku. Direct Listing — firma bezpośrednio notuje istniejące akcje bez emisji nowych. Nie pozyskuje nowego kapitału, ale omija underwriterów (mniejsze koszty). Spotify, Slack użyły tej metody. Private Equity Buyout — sprzedaż do PE zamiast giełdy. Strategic M&A — sprzedaż firmie strategicznej (acquisition exit). Secondary market — sprzedaż akcji prywatnie przez secondary platforms (Forge, Nasdaq Private Market).",
  },
  {
    question: "Jakie są wady i ryzyka IPO?",
    answer: "Wady i ryzyka IPO: Koszty — IPO kosztuje 5-7% wartości oferty plus 3-5M USD kosztów prawnych, audytu i banków. Czas i zasoby management — IPO process angażuje CEO i CFO na 12-18 miesięcy w poważny stopniu. Wymogi disclosure i transparentności — kwartalne wyniki publiczne, raporty SEC, press releases dla każdej materialnej informacji. Short-termism pressure — rynki publiczne karzą za miss earnings w jednym kwartale. Lockup expiry — po 180 dniach insiderzy i VC sprzedają, często powodując spadek ceny. Loss of control — hostile takeover risk, proxy fights, aktywistyczni akcjonariusze. IPO powinno być środkiem, nie celem — firma musi być gotowa na życie jako spółka publiczna.",
  },
];

const ipoPhases = [
  { faza: "Przygotowanie", czas: "6–18 miesięcy", działania: ["Wybór banków inwestycyjnych (lead underwriters)", "Audyt finansowy (Big 4 wymagany)", "Selekcja prawników i doradców", "Board restructuring — niezależni dyrektorzy", "Systemy raportowania i compliance", "Przygotowanie S-1/F-1 prospectus"], kolor: "blue" },
  { faza: "Filing i Roadshow", czas: "2–4 miesiące", działania: ["Confidential filing do SEC/KNF", "SEC review i odpowiedzi na komentarze", "Publiczne opublikowanie prospectus", "Analyst presentations (IPO kickoff)", "Roadshow — 2 tygodnie, kilkadziesiąt miast", "Book building — zbieranie zamówień od inwestorów instytucjonalnych"], kolor: "green" },
  { faza: "Pricing i Debiut", czas: "1 tydzień", działania: ["Final pricing na podstawie book building", "Allocation — przydzielenie akcji inwestorom instytucjonalnym", "Trading day — debiut na giełdzie", "Post-IPO stabilization przez underwriterów (greenshoe)", "Lock-up agreement — insiderzy nie sprzedają przez 180 dni"], kolor: "purple" },
];

const ipoMetrics = [
  { metryka: "IPO Pop", definicja: "Wzrost ceny akcji w pierwszym dniu handlu vs cena IPO", benchmark: "10-30% (typowy dla hot IPOs)", uwaga: "Bardzo duży pop (50%+) oznacza underpricing — firma zostawiła pieniądze na stole" },
  { metryka: "Revenue Multiple", definicja: "Wycena IPO / roczny przychód", benchmark: "5-20x revenue dla SaaS (zależy od wzrostu)", uwaga: "W 2020-2021 multi-razy wyższe przez ZIRP środowisko" },
  { metryka: "Lock-up Expiry", definicja: "Data po której insiderzy mogą sprzedawać akcje", benchmark: "Zazwyczaj 180 dni po IPO", uwaga: "Często powoduje sprzedaż i tymczasowy spadek ceny" },
  { metryka: "Free Float", definicja: "% akcji dostępnych publicznie (nie held by insiders)", benchmark: "15-25% po IPO, rośnie przez kolejne oferty", uwaga: "Niski free float = wyższa volatilność ceny" },
];

export default function BlogIpoCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="IPO — co to jest i jak wygląda debiut giełdowy? | Fotz.pl"
        description="IPO (Initial Public Offering) — proces debiutu giełdowego, fazy IPO, alternatywy (SPAC, direct listing) i ryzyka. Kompletny przewodnik dla founderów i inwestorów."
        canonicalUrl="https://fotz.pl/blog/ipo-co-to-jest-debiut-gieldowy"

        keywords="IPO co to jest, IPO definicja, czym jest IPO, IPO przykłady, jak działa IPO, IPO znaczenie, IPO przewodnik"
      />
      <ArticleSchema
        title="IPO — co to jest i jak wygląda debiut giełdowy?"
        description="Kompletny przewodnik po IPO: fazy procesu, alternatywy (SPAC, direct listing), metryki i ryzyka."
        url="https://fotz.pl/blog/ipo-co-to-jest-debiut-gieldowy"
        datePublished="2024-02-27"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "IPO", url: "https://fotz.pl/blog/ipo-co-to-jest-debiut-gieldowy" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-yellow-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "IPO", href: "/blog/ipo-co-to-jest-debiut-gieldowy" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-yellow-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Finanse i Inwestycje
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IPO — debiut giełdowy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              IPO to jeden z największych kamieni milowych w historii firmy — ale też
              jeden z najbardziej złożonych procesów. Zrozumienie jak działa IPO jest kluczowe
              dla founderów, inwestorów i managerów spółek w fazie wzrostu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Czas do IPO", value: "6–18 mies." },
                { label: "Koszt IPO", value: "5–7% oferty" },
                { label: "Minimum revenue (US)", value: "100M+ USD" },
                { label: "Lock-up period", value: "180 dni" },
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

      {/* Fazy IPO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3 fazy procesu IPO</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              IPO to wielomiesięczny, precyzyjnie choreografowany proces angażujący banki,
              prawników, audytorów i zarząd spółki równocześnie.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {ipoPhases.map((p, i) => (
              <FadeInView key={p.faza}>
                <div className={`rounded-xl border-2 p-6 ${
                  p.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  p.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      p.kolor === "blue" ? "bg-blue-600" :
                      p.kolor === "green" ? "bg-green-600" :
                      "bg-purple-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className={`font-bold text-xl ${
                          p.kolor === "blue" ? "text-blue-800" :
                          p.kolor === "green" ? "text-green-800" :
                          "text-purple-800"
                        }`}>{p.faza}</h3>
                        <span className="text-sm bg-white/70 px-3 py-1 rounded text-gray-600">{p.czas}</span>
                      </div>
                      <ul className="space-y-1">
                        {p.działania.map((d) => (
                          <li key={d} className="flex gap-2 text-sm text-gray-700">
                            <span className={`flex-shrink-0 ${
                              p.kolor === "blue" ? "text-blue-500" :
                              p.kolor === "green" ? "text-green-500" :
                              "text-purple-500"
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

      {/* Metryki IPO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe metryki IPO</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Te metryki pomagają ocenić sukces IPO i są śledzone przez inwestorów
              i media finansowe w trakcie i po debiucie.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {ipoMetrics.map((m, i) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-yellow-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{m.metryka}</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Definicja</div>
                          <p className="text-sm text-gray-700">{m.definicja}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Benchmark</div>
                          <p className="text-sm font-medium text-gray-800">{m.benchmark}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-yellow-700 uppercase mb-1">Uwaga</div>
                          <p className="text-sm text-gray-700">{m.uwaga}</p>
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
