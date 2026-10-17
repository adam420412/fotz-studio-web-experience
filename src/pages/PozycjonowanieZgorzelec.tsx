import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Search, TrendingUp, MapPin, Globe, Star, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function PozycjonowanieZgorzelec() {
  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Pozycjonowanie", url: "/uslugi/pozycjonowanie" },
    { name: "Zgorzelec", url: "/pozycjonowanie/zgorzelec" }
  ];

  const faqs = [
    {
      question: "Ile czasu trwa pozycjonowanie strony w Zgorzelcu?",
      answer: "SEO to proces rozłożony na miesiące, a nie jednorazowa usługa. Tempo zmian zależy od konkurencji w branży, stanu startowego strony i zakresu prac, dlatego nie podajemy sztywnych terminów efektów. Po audycie opisujemy, czego można realnie oczekiwać i jak będziemy mierzyć postępy."
    },
    {
      question: "Dlaczego pozycjonowanie lokalne jest ważne dla firm w Zgorzelcu?",
      answer: "Zgorzelec leży przy granicy z Niemcami, naprzeciw Görlitz, co stwarza dodatkowe możliwości biznesowe. Pozycjonowanie lokalne pomaga docierać do klientów zarówno z okolicy, jak i z niemieckiej strony granicy. Wielu klientów szuka usług z nazwą miasta w zapytaniu, dlatego dla lokalnych firm SEO lokalne bywa jednym z ważniejszych kanałów pozyskiwania klientów."
    },
    {
      question: "Ile kosztuje pozycjonowanie w Zgorzelcu?",
      answer: "Wycenę przygotowujemy po rozmowie o zakresie i krótkim audycie strony. Koszt zależy od stanu technicznego strony, liczby fraz i podstron, konkurencji w branży, ilości treści do przygotowania oraz tego, czy pozycjonujemy stronę także na rynek niemiecki."
    },
    {
      question: "Czy pozycjonowanie pomoże mojemu sklepowi turystyczno-handlowemu w Zgorzelcu?",
      answer: "Może pomóc. Turystyka i handel transgraniczny są ważne dla wielu firm w Zgorzelcu. Pozycjonowanie pozwala budować widoczność w wynikach wyszukiwania turystów i kupców z Niemiec szukających produktów, usług czy atrakcji. Dobieramy słowa kluczowe kierowane do turystów oraz klientów z niemieckiej strony granicy."
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
        description="Pozycjonowanie stron dla firm ze Zgorzelca — SEO lokalne dla turystyki, handlu i usług. Pracujemy z Poznania, Zgorzelec obsługujemy zdalnie. Wycena po rozmowie o zakresie."
        canonical="https://www.fotz-studio.pl/pozycjonowanie/zgorzelec"
        keywords="pozycjonowanie zgorzelec, agencja seo zgorzelec, seo zgorzelec, pozycjonowanie stron zgorzelec, seo dla firm zgorzelec, seo dolny śląsk, pozycjonowanie lokalne zgorzelec"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName="Pozycjonowanie Zgorzelec"
        description="Profesjonalne SEO i pozycjonowanie stron internetowych dla firm w Zgorzelcu"
        areaServed="Zgorzelec"
      />
      <FAQSchema items={faqs} />

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
                Buduj widoczność w lokalnych wynikach Google dla Zgorzelca
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
                Zgorzelec to miasto położone bezpośrednio przy granicy z Niemcami. Jego położenie geograficzne stwarza wyjątkowe możliwości biznesowe dla firm, które chcą docierać zarówno do lokalnych klientów, jak i do potencjalnych kupców z Niemiec oraz turystów odwiedzających region.
              </p>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Pozycjonowanie lokalne w Zgorzelcu to nie tylko zwiększenie widoczności w Google Search – to dostęp do rynku transgranicznego, do turystów i inwestorów zainteresowanych handlem i usługami. Strategię SEO dopasowujemy do specyfiki Zgorzelca i jego położenia. Pracujemy z Poznania, a firmy ze Zgorzelca obsługujemy zdalnie.
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
                  <span>Klienci szukający usług po polsku i po niemiecku</span>
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
                  Firmy w Zgorzelcu, które sprzedają towary lub usługi, mogą docierać do klientów z Niemiec poprzez właściwie zoptymalizowane słowa kluczowe. Pozycjonowanie na zapytania związane ze Zgorzelcem — także po niemiecku — pomaga budować widoczność wśród kupców z Niemiec szukających partnerów biznesowych. Nie gwarantujemy konkretnej pozycji w Google.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Turystyka i Usługi
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Turyści szukają hoteli, restauracji, atrakcji i usług w Zgorzelcu. SEO lokalne pozwala wyświetlić się w wyszukiwaniach takich jak "noclegi Zgorzelec" czy "atrakcje turystyczne Zgorzelec". Dobrze przygotowana strona i profil firmy ułatwiają turystom znalezienie Twojej oferty.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Usługi Lokalne
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Hydraulicy, elektrycy, fryzjerzy, lekarze i inne usługi lokalne mogą znaleźć nowych klientów poprzez pozycjonowanie. Zainteresowani są wyszukiwaniem "fryzjer Zgorzelec" czy "hydraulik Zgorzelec". SEO lokalne pomaga budować widoczność firmy w takich wynikach — bez obietnic konkretnej pozycji.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-purple-600" />
                  Google My Business
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Optymalizacja profilu Google My Business to kluczowy element lokalnego SEO. Uzupełniamy i porządkujemy profil, aby firma była dobrze przygotowana do wyświetlania w Google Maps i wyszukiwaniach lokalnych, oraz podpowiadamy, jak zbierać opinie od klientów.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing factors */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Od czego zależy wycena SEO?
          </h2>
          <p className="text-slate-700 mb-8 text-center max-w-3xl mx-auto">
            Wycenę przygotowujemy po rozmowie o zakresie i krótkim audycie strony. Na koszt wpływają m.in.:
          </p>
          <ul className="space-y-3 mb-8 max-w-2xl mx-auto">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Stan techniczny i treści obecnej strony</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Liczba fraz, podstron i wersji językowych (PL/DE)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Konkurencja w Twojej branży</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Ilość treści do przygotowania i działania link building</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Zakres raportowania i konsultacji</span>
            </li>
          </ul>
          <div className="text-center">
            <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Zapytaj o wycenę
            </a>
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
                    Praca z Poznania, obsługa zdalna
                  </h3>
                  <p className="text-slate-700">
                    Pracujemy z Poznania, a firmy ze Zgorzelca obsługujemy zdalnie. Przed startem analizujemy lokalną konkurencję i frazy związane z Twoją branżą.
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
                    Używamy wyłącznie etycznych metod SEO zgodnych z wytycznymi Google. Nie stosujemy technik, które narażają stronę na kary od Google.
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
                    Raportujemy efekty co miesiąc. Widzisz, jak zmieniają się pozycje w Google i ile ruchu organicznego przynosi SEO.
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
                    Jesteśmy dostępni do konsultacji. Jeśli masz pytania dotyczące SEO albo chcesz zmienić strategię, możemy to zrobić.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Uczciwe Oczekiwania
                  </h3>
                  <p className="text-slate-700">
                    Nie gwarantujemy konkretnej pozycji ani terminu efektów — mówimy wprost, od czego zależą wyniki i jak będziemy je mierzyć.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Wycena Dopasowana do Zakresu
                  </h3>
                  <p className="text-slate-700">
                    Zakres prac i budżet ustalamy indywidualnie — po rozmowie o celach firmy i audycie strony.
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
            <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-lg">
              Zarezerwuj Konsultację
            </a>
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
