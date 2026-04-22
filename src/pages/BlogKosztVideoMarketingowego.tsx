import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Ile kosztuje produkcja wideo do marketingu?",
    answer:
      "Koszt produkcji wideo zależy od typu i zakresu prac. Prosty film produktowy to 1500–5000 zł, spot reklamowy 2000–8000 zł, film korporacyjny 5000–20000 zł. Głównie decyduje długość, liczba aktorów, lokalizacje i skomplikowanie montażu.",
  },
  {
    question: "Co wchodzi w skład ceny produkcji wideo marketingowego?",
    answer:
      "W cenę wchodzą: scenariusz, preprodukcja, wynajem sprzętu profesjonalnego, honoraria operatora i montażysty, obsada aktorów lub lektorów, montaż i koloryzacja, efekty graficzne, muzyka z licencją, napisy i minutę bezpłatnych poprawek.",
  },
  {
    question: "Czy wideo marketingowe się opłaca?",
    answer:
      "Tak, zdecydowanie. Statystyki pokazują, że wideo zwiększa konwersje nawet o 80 procent. Użytkownicy spędzają więcej czasu na stronach z wideo, a kampanie z filmami mają wyższe ROI niż zwykłe grafiki czy teksty.",
  },
  {
    question: "Jak długo trwa produkcja wideo do kampanii?",
    answer:
      "Czas zależy od typu. Reelsy na TikTok lub Instagram to 1–3 dni, spot reklamowy 5–10 dni, film korporacyjny 10–21 dni. Do tego dodaj 3–7 dni na konsultacje i zatwierdzanie scenariusza na początkowym etapie.",
  },
  {
    question: "Czy mogę zamówić film bez profesjonalnej ekipy?",
    answer:
      "Oczywiście, ale efekt będzie inny. Profesjonalna ekipa gwarantuje: prawidłową ekspozycję, ostry obraz, dobry dźwięk, dynamiczny montaż i efekty. To elementy, które podnoszą wiarygodność i zaangażowanie widza.",
  },
  {
    question: "Jaka jest minimalna cena za produkcję wideo?",
    answer:
      "Minimalna cena to około 800–1000 zł za bardzo prosty film produktowy czy unboxing. Jednak za poniżej 1500 zł trudno liczyć na pełną profesjonalną produkcję. Dla kampanii efektywnej lepiej zaplanować budżet 2000–5000 zł.",
  },
  {
    question: "Czy cena obejmuje prawa do użytku wideo?",
    answer:
      "W standardowym pakiecie przysługują Ci nieograniczone prawa do użytku wideo na wszystkich kanałach. Zawsze szczegółowo omów z agencją zakres praw i możliwości edycji na przyszłość.",
  },
  {
    question: "Ile razy mogę używać jedno wideo w marketingu?",
    answer:
      "Jeśli kupiłeś prawa do wideo bez ograniczeń, możesz je używać neograniczoną ilość razy na wszystkich platformach: Instagram, TikTok, Facebook, stronie, e-mailach itp. Wideo to jeden z najtańszych aktywów per wyświetlenie.",
  },
];

const videoFormats = [
  {
    format: "Spot reklamowy (15 sek.)",
    roi: "15–25%",
    cost: "2000–6000 zł",
    time: "7–10 dni",
  },
  {
    format: "Film korporacyjny (2–3 min)",
    roi: "20–30%",
    cost: "5000–20000 zł",
    time: "14–21 dni",
  },
  {
    format: "Video produktowe",
    roi: "18–28%",
    cost: "1500–5000 zł",
    time: "5–7 dni",
  },
  {
    format: "Reel/TikTok (15–60 sek)",
    roi: "25–35%",
    cost: "500–2000 zł",
    time: "1–3 dni",
  },
  {
    format: "Webinar (30–60 min)",
    roi: "30–40%",
    cost: "3000–10000 zł",
    time: "10–15 dni",
  },
  {
    format: "Szkolenie video (e-learning)",
    roi: "25–35%",
    cost: "3000–15000 zł",
    time: "14–30 dni",
  },
];

export default function BlogKosztVideoMarketingowego() {
  return (
    <>
      <SEOHead
        title="Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025"
        description="Ile kosztuje produkcja wideo do marketingu? Kompletny cennik: spot reklamowy, film produktowy, animacja. Dowiedz się kiedy wideo się opłaca i jak…"
        canonical="https://fotz.pl/blog/koszt-produkcji-wideo"

        keywords="Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025, Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025 co to jest, Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025 jak działa, Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025 definicja, Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025 przykłady, Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025 poradnik, Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025 przewodnik"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          {
            name: "Ile kosztuje produkcja wideo",
            url: "https://fotz.pl/blog/koszt-produkcji-wideo",
          },
        ]}/>
      <ArticleSchema
        headline="Ile kosztuje produkcja wideo - cennik, poradnik, ROI 2025"
        description="Kompleksny poradnik kosztów produkcji wideo w Polsce. Ceny spotów reklamowych, filmów produktowych, animacji, webinarów i szkoleń video."
        image="https://fotz.pl/img/blog-koszt-produkcji-wideo.jpg"
        datePublished="2025-04-12"
        author="Fotz Studio"
      />

      <Layout>
        <main className="w-full">
          {/* Hero Section */}
          <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 overflow-hidden py-12 md:py-20">
            <div className="absolute inset-0 opacity-25">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
              <div className="flex flex-col items-center justify-center text-center gap-6">
                <span className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-400/30 rounded-full text-sm font-medium text-yellow-200">
                  Produkcja Wideo
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Ile kosztuje produkcja wideo?
                </h1>

                <p className="text-lg md:text-xl text-yellow-100 max-w-2xl">
                  Kompletny cennik i poradnik produkcji wideo do marketingu. Dowiedz się, jakie koszty czekają Cię na różnych etapach produkcji i jak zmaksymalizować budżet.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-yellow-300 text-sm font-medium">Spot od</p>
                    <p className="text-white text-xl font-bold mt-1">2000 zł</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-yellow-300 text-sm font-medium">ROI średni</p>
                    <p className="text-white text-xl font-bold mt-1">20–35%</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-yellow-300 text-sm font-medium">Czas produkcji</p>
                    <p className="text-white text-xl font-bold mt-1">3–21 dni</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-yellow-300 text-sm font-medium">Jakość</p>
                    <p className="text-white text-xl font-bold mt-1">Full HD / 4K</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Breadcrumbs */}
          <PageBreadcrumbs />

          {/* Main Content */}
          <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
            {/* Section 1 */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ile kosztuje produkcja wideo - szybka odpowiedź
                </h2>

                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Produkcja wideo to inwestycja, której koszt waha się od 800 złotych za prosty film produktowy do 20 tysięcy złotych za pełny film korporacyjny. Ale liczby to nie wszystko.
                  </p>

                  <p>
                    Główne czynniki decydujące o cenie:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Długość wideo (15 sekund czy 3 minuty?)</li>
                    <li>Typ produkcji (spot, film produktowy, animacja, szkolenie)</li>
                    <li>Liczba dní realizacji (ekspres czy standardowo?)</li>
                    <li>Obsada (profesjonalni aktorzy czy pracownicy firmy?)</li>
                    <li>Lokalizacje (studio czy wyprawy na zewnątrz?)</li>
                    <li>Efekty i animacje (koloryzacja, motion graphics)</li>
                    <li>Ilość poprawek i iteracji</li>
                  </ul>

                  <p>
                    Każdy projekt jest inny. Wideo dla lokalnego sklepu wyglądać będzie inaczej niż reklama dla sieci krajowej. Dlatego przygotowaliśmy kompletny cennik i poradnik, żebyś wiedział dokładnie, co Cię czeka.
                  </p>
                </div>
              </section>
            </FadeInView>

            {/* Section 2 - ROI Table */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  ROI produkcji wideo wg formatu
                </h2>

                <p className="text-gray-700 mb-6">
                  Poniżej widać średnie zwroty z inwestycji (ROI) dla różnych typów wideo marketingowych w Polsce. Dane oparte na raportach z 2024–2025 roku.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-yellow-100 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Format wideo
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Średni ROI
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Koszt produkcji
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Czas realizacji
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {videoFormats.map((item, idx) => (
                        <tr
                          key={idx}
                          className={`border-b border-gray-200 ${
                            idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } hover:bg-yellow-50 transition-colors`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {item.format}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {item.roi}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {item.cost}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {item.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-600 mt-4">
                  *ROI to stosunek zwrotu do inwestycji. Średni ROI 20% oznacza, że każde 100 zł wydane na produkcję przyniosło 20 zł przychodu (lub ekwiwalentu wartości prowadzenia).
                </p>
              </section>
            </FadeInView>

            {/* Section 3 - How to Measure ROI */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Jak mierzyć ROI z produkcji wideo?
                </h2>

                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Zmierzenie zwrotu z inwestycji w wideo wymaga ustalenia jasnych metryk od samego początku. Oto jak to robić:
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                    <h3 className="font-bold text-gray-900 mb-4">Kluczowe metryki do śledzenia:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Wyświetlenia:</strong> Ile osób obejrzało Twoje wideo na każdej platformie?</li>
                      <li><strong>Czas oglądania:</strong> Średnia długość czasu spędzanego na wideo (najlepiej &gt;50% długości)</li>
                      <li><strong>Kliknięcia:</strong> Ile osób kliknęło link, CTA lub przeszło do następnego kroku?</li>
                      <li><strong>Konwersje:</strong> Ile osób zamieniło się w leada lub klienta?</li>
                      <li><strong>Koszt na konwersję:</strong> Koszt produkcji podzielony przez liczbę konwersji</li>
                    </ul>
                  </div>

                  <p>
                    <strong>Prosty wzór na ROI:</strong>
                  </p>

                  <div className="bg-gray-800 text-yellow-300 p-6 rounded font-mono text-center">
                    <p>ROI = (Przychód ze sprzedaży - Koszt produkcji) / Koszt produkcji × 100%</p>
                  </div>

                  <p>
                    Jeśli wydałeś 3000 zł na film produktowy, a sprzedaż z tego wideo wyniosła 6000 zł przychodu, to ROI = (6000 - 3000) / 3000 × 100% = 100% (zwrócenie się inwestycji dwukrotnie).
                  </p>

                  <p>
                    Istotne: Nie liczysz wprost sprzedaży, ale przychodu lub wartości prowadzenia. Jeśli wideo wygeneruje 10 leadów o wartości 500 zł każdy, to przychód = 5000 zł.
                  </p>
                </div>
              </section>
            </FadeInView>

            {/* Section 4 - Budget Tips */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Produkcja wideo bez dużego budżetu - praktyczne porady
                </h2>

                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Nie musisz wydawać 20 tysięcy złotych, żeby mieć efektywne wideo. Oto sprawdzone sposoby na obniżenie kosztów bez utraty jakości:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">1. Zaplanuj wszystko z góry</h3>
                      <p className="text-gray-700">
                        Każdy dzień zmian scenariusza na planie to dodatkowe koszty. Zatwierdź scenariusz, storyboard i plan zdjęciowy zanim zaczną się zdjęcia. To zaoszczędzi 20–30% czasu produkcji.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">2. Używaj pracowników zamiast aktorów zawodowych</h3>
                      <p className="text-gray-700">
                        Pracownik firmy lub właściciel jako twarz marki to oszczędzenie 2000–5000 zł na honorarach. Ludzie ufają autentyczności bardziej niż wyreżyserowanym spotom.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">3. Filmuj w swoim biurze lub sklepie</h3>
                      <p className="text-gray-700">
                        Brak potrzeby wynajmu studia lub wyjazdów na location. Znane, realne miejsce często wygląda bardziej wiarygodnie niż studyjne zdjęcia.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">4. Szybka post-produkcja</h3>
                      <p className="text-gray-700">
                        Proste wideo bez zaawansowanych efektów to mniej czasu montażysty. Rezygnacja z pełnej koloryzacji lub zaawansowanych animacji to oszczędzenie 1000–3000 zł.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">5. Zamów pakiet wiele filmów</h3>
                      <p className="text-gray-700">
                        Zamiast jednego długiego filmu, najwynajem ekipę na dzień i nakręć 3–5 krótszych wideów. Koszt na film spada drastycznie.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">6. Muzyka i prawa autorskie</h3>
                      <p className="text-gray-700">
                        Zamiast drogiej licencji do znanego utworu, używaj bezpłatnej muzyki z serwisów jak Pixabay, Pexels Music czy Epidemic Sound. To może zaoszczędzić 500–2000 zł.
                      </p>
                    </div>
                  </div>

                  <p className="mt-8 font-semibold text-gray-900">
                    Rezultat: Profesjonalne wideo o dobrej jakości da się zrobić za 2000–3000 złotych, jeśli dobrze zaplanujemy projekt.
                  </p>
                </div>
              </section>
            </FadeInView>

            {/* FAQ Section */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Często zadawane pytania
                </h2>

                <div className="space-y-6">
                  {faqItems.map((item, idx) => (
                    <details key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <summary className="font-bold text-gray-900 flex justify-between items-center">
                        {item.question}
                        <span className="text-yellow-500 ml-4">+</span>
                      </summary>
                      <p className="text-gray-700 mt-4">{item.answer}</p>
                    </details>
                  ))}
                </div>

                <FAQSchema items={faqItems} />
              </section>
            </FadeInView>

            {/* CTA Section */}
            <FadeInView>
              <section className="mb-16 md:mb-24 bg-gradient-to-r from-gray-900 to-yellow-900 rounded-2xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Gotowy na produkcję wideo?
                </h2>

                <p className="text-lg text-gray-200 mb-8 max-w-2xl">
                  Fotz to specjaliści od video marketingu w Polsce. Pomożemy Ci wybrać najlepszy format wideo dla Twojego budżetu i celów biznesowych.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/kontakt"
                    className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                  >
                    Zamów konsultację
                  </Link>
                  <Link
                    to="/agencja-marketingowa/poznan"
                    className="inline-block bg-white/20 text-white px-8 py-3 rounded-lg font-bold border border-white/50 hover:bg-white/30 transition-colors"
                  >
                    Zobacz portfolio
                  </Link>
                </div>
              </section>
            </FadeInView>
          </article>

          <ContactSection />
        </main>
      </Layout>
    </>
  );
}
