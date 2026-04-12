import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Search, TrendingUp, MapPin, Users, Clock, Award } from "lucide-react";

export default function PozycjonowanieLegnica() {
  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Pozycjonowanie", url: "/pozycjonowanie" },
    { name: "Legnica", url: "/pozycjonowanie/legnica" },
  ];

  const faqItems = [
    {
      question: "Jak długo trwa pozycjonowanie strony internetowej w Legnicy?",
      answer:
        "Typowo pierwsze rezultaty są widoczne po 3-6 miesiącach systematycznej pracy. Pozycjonowanie to proces długoterminowy, ale już po kilku miesiącach możesz obserwować poprawę widoczności w wynikach wyszukiwania. Niektóre słowa kluczowe mogą zaklasyfikować się szybciej, szczególnie te z mniejszą konkurencją.",
    },
    {
      question: "Ile kosztuje pozycjonowanie strony dla firm z Legnicy?",
      answer:
        "Ceny pozycjonowania zaczynają się od 1500 zł miesięcznie dla pakietu startupowego. Oferujemy różne pakiety dostosowane do potrzeb i budżetu Twojej firmy. Każdy pakiet jest spersonalizowany w zależności od branży, konkurencji i celów biznesowych.",
    },
    {
      question: "Jakie branże mogą skorzystać z pozycjonowania lokalnego w Legnicy?",
      answer:
        "Pozycjonowanie lokalne jest korzystne dla wszystkich firm okazjonalnie odwiedzających Legnicę. Szczególnie polecamy dla: sklepów internetowych i stacjonarnych, restauracji i kawiarni, salonów fryzjerskich i kosmetycznych, gabinetów lekarskich i stomatologicznych, firm budowlanych, agencji nieruchomości, szkół i kursów, usług transportu i logistyki.",
    },
    {
      question: "Czy pozycjonowanie będzie skuteczne dla mojej konkurencji w Legnicy?",
      answer:
        "Tak, pozycjonowanie działa niezależnie od wielkości konkurencji. Naszą specjalność jest analiza rynku lokalnego i identyfikacja niszy, w której Twoja firma będzie mogła dominować. Nawet jeśli konkurenci są zalegalizowani, mamy sprawdzone strategie, aby wyprzedzić ich w wynikach wyszukiwania.",
    },
    {
      question: "Jaki jest proces współpracy z Fotz Studio?",
      answer:
        "Rozpoczynamy od bezpłatnej konsultacji i audytu SEO Twojej strony. Następnie opracowujemy strategię pozycjonowania dostosowaną do Twoich celów. W trakcie współpracy otrzymujesz regularnie raporty z postępami i możliwością dostosowania strategii. Nasz zespół utrzymuje stały kontakt i wspiera Cię na każdym etapie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Pozycjonowanie Legnica | Fotz Studio"
        description="Profesjonalne usługi pozycjonowania stron internetowych w Legnicy. Zwiększ widoczność Twojej firmy w Google. Pakiety SEO dostosowane do Twoich potrzeb. Konsultacja gratis!"
        canonical="https://fotz.pl/pozycjonowanie/legnica"
        keywords="pozycjonowanie Legnica, SEO Legnica, pozycjonowanie stron Legnica, agencja SEO Legnica, pozycjonowanie lokalne Legnica, seo dla firm Legnica, audyt seo Legnica, optymalizacja seo Legnica"
      />

      <ServiceSchema
        name="Usługi Pozycjonowania Legnica"
        description="Profesjonalne usługi pozycjonowania stron internetowych (SEO) dla firm z Legnicy. Zwiększ widoczność w Google i przyciągnij więcej klientów."
        provider="Fotz Studio"
        areaServed="Legnica"
      />

      <BreadcrumbSchema items={breadcrumbs} />

      <FAQSchema items={faqItems} />

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
          {/* Hero Section */}
          <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Pozycjonowanie <span className="text-blue-600">Legnica</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Profesjonalne usługi SEO dla firm z Legnicy. Zwiększ widoczność w Google, przyciągnij więcej
                  klientów i rozwijaj swoją biznes na lokalnym rynku.
                </p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Bezpłatna Konsultacja
                </button>
              </div>
            </div>
          </section>

          {/* Why Choose Legnica */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Dlaczego Pozycjonowanie w Legnicy?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-8 w-8 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lokalna Widoczność</h3>
                    <p className="text-gray-700">
                      Legnica to dynamicznie rozwijające się miasto z dużą konkurencją na rynku cyfrowym. Pozycjonowanie
                      lokalne zapewni Ci lepszą widoczność wśród potencjalnych klientów wyszukujących usługi w Twojej okolicy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Search className="h-8 w-8 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Zwiększenie Ruchu</h3>
                    <p className="text-gray-700">
                      Pozycjonowanie SEO w Legnicy to inwestycja w długoterminowy wzrost ruchu organicznego na Twojej
                      stronie. Znacznie więcej osób znajdzie Cię w wynikach wyszukiwania Google.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Konkretne Rezultaty</h3>
                    <p className="text-gray-700">
                      Nasze strategie pozycjonowania przynoszą konkretne wyniki. Śledzisz postęp poprzez regularne
                      raporty i widzisz bezpośrednie przychody z SEO w Legnicy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="h-8 w-8 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Profesjonal Expertise</h3>
                    <p className="text-gray-700">
                      Fotz Studio ma doświadczenie w pozycjonowaniu firm z różnych branż w Legnicy. Znamy lokalny rynek
                      i wiemy, co działa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services for Different Industries */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Pozycjonowanie dla Różnych Branż</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sklepy Internetowe</h3>
                  <p className="text-gray-700">
                    Zwiększ sprzedaż poprzez pozycjonowanie produktów w wyszukiwarkach. Przyciągnij klientów z Legnicy
                    i okolic, szukających produktów, które oferujesz.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Restauracje i Kawiarnie</h3>
                  <p className="text-gray-700">
                    Pozycjonowanie lokalne dla gastronomii w Legnicy to привлечение głodnych klientów. Pojawiaj się na
                    mapach Google i w wynikach lokalnych wyszukiwań.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Usługi Biznesowe</h3>
                  <p className="text-gray-700">
                    Niezależnie od tego, czy prowadzisz biuro rachunkowe, agencję marketingową czy firmę doradczą, SEO
                    w Legnicy przyciąga klientów B2B.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Salony Piękności</h3>
                  <p className="text-gray-700">
                    Klienci szukają fryzjerów, kosmetyczek i salonów spa w Legnicy. Pozycjonowanie lokalne to klucz do
                    pełnego harmonogramu rezerwacji.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Opiekę Zdrowotną</h3>
                  <p className="text-gray-700">
                    Gabinety lekarskie, dentystyczne i specjalistyczne w Legnicy mogą przyciągać pacjentów poprzez SEO
                    i widoczność w lokalnych wyszukiwaniach.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Nieruchomości</h3>
                  <p className="text-gray-700">
                    Agencje nieruchomości w Legnicy mogą wykazać swoje oferty lepiej poprzez pozycjonowanie dla słów
                    kluczowych związanych z lokalnym rynkiem.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Jak Współpracujemy</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Audyt SEO</h3>
                  <p className="text-gray-700 text-sm">
                    Przeprowadzamy szczegółową analizę Twojej strony i konkurencji w Legnicy
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strategia</h3>
                  <p className="text-gray-700 text-sm">
                    Opracowujemy spersonalizowaną strategię pozycjonowania dla Twojego biznesu
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Implementacja</h3>
                  <p className="text-gray-700 text-sm">
                    Realizujemy optymalizacje i pracujemy nad widocznością Twojej strony
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Monitorowanie</h3>
                  <p className="text-gray-700 text-sm">
                    Śledzisz postępy poprzez raporty i stale optymalizujemy wyniki
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Pakiety Pozycjonowania</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Startup</h3>
                  <p className="text-gray-600 mb-6">Dla nowych firm i startupów</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">1500 zł</span>
                    <span className="text-gray-600 ml-2">/miesiąc</span>
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> Optymalizacja on-page
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> Badanie słów kluczowych
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> 4 artykuły mesięcznie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> Raport miesięczny
                    </li>
                  </ul>
                  <button className="w-full bg-blue-100 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
                    Wybierz Plan
                  </button>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-blue-600 relative">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Popularne
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Professional</h3>
                  <p className="text-gray-600 mb-6">Dla rozwijających się biznesów</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">3500 zł</span>
                    <span className="text-gray-600 ml-2">/miesiąc</span>
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> Wszystko ze Startup
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> Link building
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> 8 artykułów miesięcznie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> Konsultacje 2x miesięcznie
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Wybierz Plan
                  </button>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-6">Dla dużych organizacji</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">7500 zł</span>
                    <span className="text-gray-600 ml-2">/miesiąc</span>
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> Wszystko z Professional
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> PPC kampanie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> 16 artykułów miesięcznie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span> Dedykowany account manager
                    </li>
                  </ul>
                  <button className="w-full bg-blue-100 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
                    Wybierz Plan
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Fotz Studio */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Dlaczego Fotz Studio?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex gap-4">
                  <Users className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Doświadczony Zespół</h3>
                    <p className="text-gray-700">
                      Nasi specjaliści SEO mają lata doświadczenia w pozycjonowaniu firm lokalnych w całej Polsce,
                      w tym w Legnicy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Szybkie Rezultaty</h3>
                    <p className="text-gray-700">
                      Stosujemy sprawdzone strategie SEO, które przynoszą widoczne rezultaty w ciągu kilku miesięcy
                      pracy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Certyfikacje</h3>
                    <p className="text-gray-700">
                      Jesteśmy certyfikowani Google Partners i posiadamy wiedzę na temat najnowszych algorytmów
                      wyszukiwarek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Często Zadawane Pytania</h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <details key={index} className="bg-white p-6 rounded-lg shadow-lg cursor-pointer group">
                    <summary className="font-semibold text-gray-900 text-lg flex items-center gap-3">
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                      {item.question}
                    </summary>
                    <p className="text-gray-700 mt-4 ml-8">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Gotów na Wzrost Twojego Biznesu?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Skontaktuj się z nami dzisiaj, aby uzyskać bezpłatną konsultację SEO dla Twojej firmy w Legnicy.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                Zapytaj o Bezpłatną Konsultację
              </button>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
