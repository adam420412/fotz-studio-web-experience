import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Search, TrendingUp, MapPin, Globe, Star, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function PozycjonowanieZgorzelec() {
  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Pozycjonowanie", url: "/pozycjonowanie" },
    { name: "Zgorzelec", url: "/pozycjonowanie/zgorzelec" }
  ];

  const faqs = [
    {
      question: "Ile czasu trwa pozycjonowanie strony w Zgorzelcu?",
      answer: "Typowo pierwsze efekty są widoczne po 4-6 tygodniach, jednak pełne rezultaty osiągamy w 3-6 miesięcy. Czas realizacji zależy od konkurencji w branży, stanu startowego strony i zakresu pracy SEO. W Zgorzelcu, gdzie konkurencja lokalna jest umiarkowana, procesy działają szybciej niż w dużych miastach."
    },
    {
      question: "Dlaczego pozycjonowanie lokalne jest ważne dla firm w Zgorzelcu?",
      answer: "Zgorzelec jest miastem portowym przy granicy z Niemcami, co stwarza unikalne możliwości biznesowe. Pozycjonowanie lokalne pozwala firmom docierać do potencjalnych klientów zarówno z okolicy, jak i z niemieckiego Görlitz. Prawie 70 procent wyszukiwań zawiera element lokalizacji, dlatego SEO lokalne jest kluczowe dla wzrostu sprzedaży."
    },
    {
      question: "Jakie są średnie ceny pozycjonowania w Zgorzelcu?",
      answer: "Nasze pakiety startują od 1500 zł miesięcznie dla małych firm. Pakiet Standard to 3000 zł, a Premium z pełnym wsparciem SEO to 5000 zł. Ceny są konkurencyjne w stosunku do Wrocławia czy Warszawy, a efekty są szybsze ze względu na mniejszą konkurencję lokalną na słowach kluczowych Zgorzelec."
    },
    {
      question: "Czy pozycjonowanie pomoże mojemu sklepowi turystyczno-handlowemu w Zgorzelcu?",
      answer: "Absolutnie. Turystyka i handel transgraniczny to dwa główne sektory w Zgorzelcu. Pozycjonowanie pozwala wyświetlać się w wynikach wyszukiwania turystów i kupców z Niemiec szukających produktów, usług czy atrakcji. Specjalizujemy się w optymalizacji dla słów kluczowych kierowanych do turystów oraz klientów z niemieckiej strony granicy."
    },
    {
      question: "Jakie metody SEO używacie dla lokalnego pozycjonowania?",
      answer: "Nasza strategia obejmuje: optymalizację on-page z słowami kluczowymi Zgorzelec, budowanie profilu Google My Business, zdobywanie lokalnych backlinków, review management, optymalizację techniczną strony i content marketing. Wszystkie metody są white-hat i zgodne z najnowszymi wytycznymi Google dla SEO lokalnego."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Zgorzelec | SEO dla firm | Fotz Studio"
        description="Profesjonalne pozycjonowanie stron w Zgorzelcu. Specjalizujemy się w SEO dla turystyki, handlu i usług lokalnych. Pakiety od 1500 zł. Rezultaty w 3-6 miesięcy."
        canonical="https://fotz.pl/pozycjonowanie/zgorzelec"
        keywords="pozycjonowanie zgorzelec, agencja seo zgorzelec, seo zgorzelec, pozycjonowanie stron zgorzelec, seo dla firm zgorzelec, seo dolny śląsk, pozycjonowanie lokalne zgorzelec"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <ServiceSchema
        serviceName="Pozycjonowanie Zgorzelec"
        description="Profesjonalne SEO i pozycjonowanie stron internetowych dla firm w Zgorzelcu"
        areaServed="Zgorzelec"
        priceRange="1500-5000"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Search className="w-16 h-16 text-blue-200" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Pozycjonowanie Zgorzelec
              </h1>
              <p className="text-xl text-blue-100 mb-2">
                Lokalne SEO dla firm przy granicy z Niemcami
              </p>
              <p className="text-blue-200 text-lg">
                Wyświetlaj się na pierwszej stronie Google dla Zgorzelca
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Dlaczego SEO dla Zgorzelca?
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Zgorzelec to dynamiczne miasto portowe położone bezpośrednio przy granicy z Niemcami. Jego położenie geograficzne stwarza wyjątkowe możliwości biznesowe dla firm, które chcą docierać zarówno do lokalnych klientów, jak i do potencjalnych kupców z Niemiec oraz turystów odwiedzających region.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Pozycjonowanie lokalne w Zgorzelcu to nie tylko zwiększenie widoczności w Google Search – to dostęp do rynku transgranicznego, do turystów i inwestorów zainteresowanych handlem i usługami. Nasze strategie SEO są dostosowane do specyfiki Zgorzelca i jego unikalnego położenia na mapie Polski.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Specyfika Rynku
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Miasto przy granicy z Niemcami i Görlitz</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sektor turystyki i handlu transgranicznego</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lokalne firmy szukające wzrostu w sieci</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mniejsza konkurencja niż w dużych miastach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Szybsze rezultaty SEO</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO for Zgorzelec Content */}
        <section className="bg-slate-100 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Pozycjonowanie Lokalne w Zgorzelcu
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Handel Transgraniczny
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Firmy w Zgorzelcu, które sprzedają towary lub usługi, mogą docierać do klientów z Niemiec poprzez właściwie zoptymalizowane słowa kluczowe. Pozycjonowanie dla zapytań takich jak "pozycjonowanie Zgorzelec" czy "usługi Zgorzelec" gwarantuje, że Twoja firma będzie widoczna dla niemieckich kupców szukających partnerów biznesowych.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Turystyka i Usługi
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Turyści szukają hoteli, restauracji, atrakcji i usług w Zgorzelcu. SEO lokalne pozwala wyświetlić się w wyszukiwaniach takich jak "noclegi Zgorzelec" czy "atrakcje turystyczne Zgorzelec". Dzięki naszej strategii turystyka lokalnego biznesu znacznie się zwiększa.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Usługi Lokalne
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Hydraulicy, elektrycy, fryzjerzy, lekarze i inne usługi lokalne mogą znaleźć nowych klientów poprzez pozycjonowanie. Zainteresowani są wyszukiwaniem "fryzjer Zgorzelec" czy "hydraulik Zgorzelec". Nasze SEO postawia Twoją firmę na pierwszym miejscu.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-purple-600" />
                  Google My Business
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Optymalizacja profilu Google My Business to kluczowy element lokalnego SEO. Zapewniamy, że Twoja firma pojawi się w Google Maps, w wyszukiwaniach lokalnych i będzie mieć wiarygodne opinie od klientów. To bezpośredni droga do nowych kupców.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Pakiety SEO dla Zgorzelca
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-600 mb-6">Dla małych firm</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">1500 zł<span className="text-lg text-slate-600">/msc</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Optymalizacja on-page</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">5 artykułów SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Profil Google My Business</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Raport co miesiąc</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Zamów
              </button>
            </div>

            {/* Standard */}
            <div className="rounded-lg border-2 border-blue-600 p-8 shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">NAJPOPULARNIEJSZY</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-4">Standard</h3>
              <p className="text-slate-600 mb-6">Dla rozwijających się firm</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">3000 zł<span className="text-lg text-slate-600">/msc</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Wszystko z pakietu Starter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">12 artykułów SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Budowanie backlinków lokalnych</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Zarządzanie recenzjami</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Wsparcie 1x na tydzień</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Zamów
              </button>
            </div>

            {/* Premium */}
            <div className="rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium</h3>
              <p className="text-slate-600 mb-6">Dla ambitnych firm</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">5000 zł<span className="text-lg text-slate-600">/msc</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Wszystko z pakietu Standard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">25+ artykułów SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Dedykowany account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Analiza konkurencji</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Wsparcie bieżące</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Zamów
              </button>
            </div>
          </div>
        </section>

        {/* Why Fotz Studio */}
        <section className="bg-slate-100 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Dlaczego Fotz Studio?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Doświadczenie w SEO Lokalnym
                  </h3>
                  <p className="text-slate-700">
                    Od ponad 8 lat pracujemy z lokalnymi firmami w Polsce. Znamy specyfikę każdego rynku, w tym unikalne wyzwania związane z pozycjonowaniem w Zgorzelcu.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Strategie White-hat
                  </h3>
                  <p className="text-slate-700">
                    Używamy wyłącznie etycznych metod SEO zgodnych z wytycznymi Google. Nie ryzzykujemy karom ani penalizacjom algorytmicznych.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Rezultaty Mierzalne
                  </h3>
                  <p className="text-slate-700">
                    Raportujemy efekty co miesiąc. Widzisz dokładnie, jak rośnie Twoja pozycja w Google i ile ruchu organicznego przynosi SEO.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Wsparcie i Konsultacje
                  </h3>
                  <p className="text-slate-700">
                    Zawsze dostępni do konsultacji. Jeśli masz pytania dotyczące SEO albo chcesz zmienić strategię, możemy to zrobić.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Szybkie Rezultaty
                  </h3>
                  <p className="text-slate-700">
                    Ze względu na mniejszą konkurencję lokalną w Zgorzelcu, pierwsze efekty osiągamy szybciej niż w dużych miastach.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Ceny Konkurencyjne
                  </h3>
                  <p className="text-slate-700">
                    Nasze pakiety SEO są bardziej przystępne niż u dużych agencji z Wrocławia czy Warszawy, bez utraty jakości.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Jak Przebiega Pozycjonowanie?
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Audyt i Analiza (Tydzień 1)
                </h3>
                <p className="text-slate-700">
                  Analizujemy Twoją stronę, konkurencję w Zgorzelcu i potencjalne słowa kluczowe. Przygotowujemy raport z rekomendacjami.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Optymalizacja On-page (Tygodnie 2-3)
                </h3>
                <p className="text-slate-700">
                  Optymalizujemy strony, metaopisy, nagłówki i zawartość pod kątem słów kluczowych takich jak "pozycjonowanie Zgorzelec".
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Budowanie Backlinków i Content (Tygodnie 4+)
                </h3>
                <p className="text-slate-700">
                  Piszemy artykuły SEO, zdobywamy lokalne backlinki i budujemy autorytet Twojej strony w oczach Google.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold rounded-full">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Monitorowanie i Optymalizacja (Ciągłe)
                </h3>
                <p className="text-slate-700">
                  Monitorujemy pozycje, śledzimy ruch organiczny i na bieżąco optymalizujemy strategię dla lepszych wyników.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-100 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Najczęściej Zadawane Pytania
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-700">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Gotowy na Wzrost Biznesu?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Skontaktuj się z nami i dowiedz się, jak SEO może zmienić Twoją firmę w Zgorzelcu.
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-lg">
              Zarezerwuj Konsultację
            </button>
          </div>
        </section>
      </div>

      {/* Link nawigacyjny */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/seo/pozycjonowanie" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Pozycjonowanie — wszystkie miasta
          </Link>
        </div>
      </section>
    </Layout>
  );
}
