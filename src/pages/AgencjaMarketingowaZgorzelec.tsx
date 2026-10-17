import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Building2, MapPin, Globe, TrendingUp, Star, CheckCircle, Award, Users } from "lucide-react";

export default function AgencjaMarketingowaZgorzelec() {
  const breadcrumbs = [
    { name: "Strona glowna", url: "/" },
    { name: "Agencja marketingowa", url: "/agencja-marketingowa" },
    { name: "Zgorzelec", url: "/agencja-marketingowa/zgorzelec" }
  ];

  const faqData = [
    {
      question: "Jakie uslugi SEO oferuje agencja marketingowa w Zgorzelcu?",
      answer: "Pracujemy z Poznania, a firmy ze Zgorzelca obsługujemy zdalnie. Zajmujemy się lokalnym SEO, optymalizacją stron internetowych, budowaniu linkow zwrotnych i wdrazaniu strategii SEO dostosowanej do rynku przygranicznych. Oferujemy audyty stron, optymalizacje slow kluczowych oraz raportowanie wynikow. Nie gwarantujemy konkretnej pozycji w Google."
    },
    {
      question: "Czy agencja oferuje usluge twomu stron internetowych dla firm z Zgorzelca?",
      answer: "Tak, tworzymy nowoczesne, responsywne strony internetowe dla firm lokalnych w Zgorzelcu. Kazda strona jest zoptymalizowana SEO, szybka, bezpieczna i przystosowana do urządzen mobilnych. Projektujemy z mysla o konwersji i zarobkach Twojej firmy."
    },
    {
      question: "Czy agencja oferuje marketing dwujezyczny PL/DE?",
      answer: "Tak. Ze wzgledu na polozenie Zgorzelca przy granicy z Niemcami, oferujemy kampanie Google Ads, artykuly bloga oraz social media w jezykach polskim i niemieckim, aby dosiegnal zarówno odbiorcy lokalne jak i niemieckie."
    },
    {
      question: "Ile kosztuja usluge agencji marketingowej w Zgorzelcu?",
      answer: "Wycenę przygotowujemy po rozmowie o zakresie: jakie kanały prowadzimy, ile treści i kampanii, w ilu językach. Budżet reklamowy płacony platformom (Google, Meta) jest zawsze osobno. Zapraszamy do kontaktu w celu otrzymania indywidualnej wyceny."
    },
    {
      question: "Czy agencja obsługuje kampanie na Facebook i Instagram?",
      answer: "Tak, nasza agencja obsługuje pełne kampanie social media na Facebook, Instagram i LinkedIn. Projektujemy zaangazujace posty, zarzadzamy interakcjami z odbiorczymi i tworzymy kampanie promocyjne, które generuja lead i sprzedaz dla biznesu w Zgorzelcu."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Agencja Marketingowa Zgorzelec - FOTZ",
    description: "FOTZ Studio z Poznania zdalnie obsługuje firmy ze Zgorzelca: SEO, strony internetowe i marketing cyfrowy",
    areaServed: "Zgorzelec",
    image: "https://www.fotz-studio.pl/og-image.jpg",
    url: "https://www.fotz-studio.pl/agencja-marketingowa/zgorzelec",
    telephone: "+48 790 814 814",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Poznań",
      addressCountry: "PL"
    },
    priceRange: "PLN",
    serviceType: "Marketing Cyfrowy"
  };

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Zgorzelec - SEO, Strony WWW | FOTZ"
        description="FOTZ Studio pracuje z Poznania i zdalnie obsługuje firmy ze Zgorzelca: SEO, tworzenie stron internetowych, Google Ads i marketing cyfrowy dla firm z regionu przygranicznego."
        canonical="https://www.fotz-studio.pl/agencja-marketingowa/zgorzelec"
        keywords="agencja marketingowa zgorzelec, marketing internetowy zgorzelec, agencja reklamowa zgorzelec, seo zgorzelec"
      />
      
      
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqData} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Building2 size={32} />
              <span className="text-blue-200 font-semibold">Zgorzelec</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Agencja Marketingowa Zgorzelec
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Kompleksowe usługi marketingu cyfrowego dla firm ze Zgorzelca i regionu przygranicznego. Pracujemy z Poznania, firmy ze Zgorzelca obsługujemy zdalnie.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Umawiaj Konsultacje
              </a>
              <a href="/uslugi" className="inline-flex min-h-11 items-center justify-center text-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Poznaj ofertę
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Dlaczego Zgorzelec Potrzebuje Specjalnej Agencji Marketingowej?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Rynek Przygraniczny</h3>
                <p className="text-gray-700 mb-4">
                  Zgorzelec to unikalne miasto polozne przy granicy z Niemcami. Rynek tutejszych firm ma specyficzne cechy i mozliwosci. Pracujemy z Poznania i zdalnie pomagamy firmom ze Zgorzelca docierać do klientów zarówno po polskiej, jak i po niemieckiej stronie granicy.
                </p>
                <p className="text-gray-700">
                  Firmy w Zgorzelcu maja dostep do niemieckich klientow bez koniecznosci ponoszenia dodatkowych kosztow internacjonalizacji. To szansa dla biznesu, którą uwzględniamy w strategii marketingowej.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Marketing Dwujezyczny</h3>
                <p className="text-gray-700 mb-4">
                  Przygotowujemy marketing w wersji PL/DE. Tworzymy kampanie Google Ads, opracowuje artykuly bloga, zarzadza social media na Facebook i Instagram w obu jezykach. To pozwala Twojej firmie na skuteczne dotarcie do szerszej grupy odbiorców.
                </p>
                <p className="text-gray-700">
                  Jezyk niemiecki to kluczowy element sukcesu firm przygranicznych. Dbamy o tłumaczenia marketingowe i dostosowanie sloganów oraz komunikacji do niemieckiej publiczności.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">Nasze Usluge dla Firm w Zgorzelcu</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* SEO Service */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-blue-600" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">SEO Lokalne</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Optymalizujemy Twoja strone pod kątem slow kluczowych lokalne zwiazane z Zgorzelcem. Google My Business, local pack, opracowanie strategii slów kluczowych - wszystko, co potrzebne, aby pojawic sie w wyszukiwarce gdy potencjalni klienci szukaja uslug w Zgorzelcu.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Audyt SEO
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Optymalizacja on-page
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Budowanie linkow zwrotnych
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Raportowanie i monitoring
                  </li>
                </ul>
              </div>

              {/* Web Development Service */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-blue-600" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Strony Internetowe</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Tworzymy nowoczesne, responsywne strony internetowe dla firm z Zgorzelca. Kazda strona jest zoptymalizowana pod katem SEO, szybka, bezpieczna i dostosowana do urządzen mobilnych. Projektujem z mysla o konwersji i zarobkach Twojej firmy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Design responsywny
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Integracja e-commerce
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Optymalizacja SEO
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Wsparcie techniczne
                  </li>
                </ul>
              </div>

              {/* Google Ads Service */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-blue-600" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Google Ads i PPC</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Prowadzimy skuteczne kampanie Google Ads dla firm z Zgorzelca. Obsługujemy zarówno kampanie Search Ads jak i Display Ads. Nasz zespół optymalizuje budżety, aby uzyskac maksymalne zwroty z inwestycji w reklame cyfrowa.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Kampanie Search
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Display Ads
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Retargeting
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Optymalizacja CPA
                  </li>
                </ul>
              </div>

              {/* Social Media Service */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 transition">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-blue-600" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Social Media Marketing</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Obsługujemy pełne kampanie na Facebook, Instagram i LinkedIn dla firm w Zgorzelcu. Projektujemy zaangazujace posty, zarzadzamy interakcjami z odbiorcami i tworzymy kampanie promocyjne, które generuja lead i sprzedaz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Strategie contentu
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Community management
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Kampanie promocyjne
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    Analiza i raportowanie
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Od czego zależy wycena?</h2>
            <p className="text-gray-700 mb-8">
              Nie mamy sztywnych pakietów. Wycenę przygotowujemy po rozmowie o zakresie i celach Twojej firmy. Budżet reklamowy płacony platformom (Google, Meta) jest zawsze osobną pozycją, rozliczaną bezpośrednio z platformą.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Zakres usług: SEO, strona WWW, Google Ads, social media lub ich połączenie",
                "Liczba kampanii, kanałów i wersji językowych (PL/DE)",
                "Ilość treści do przygotowania co miesiąc",
                "Stan obecnej strony i kont reklamowych na starcie",
                "Zakres raportowania i częstotliwość spotkań",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Poproś o wycenę
            </a>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">Dlaczego Warto Wybrac Nasza Agencje?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Award className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Współpraca zdalna</h3>
                  <p className="text-gray-700">
                    Pracujemy z Poznania, a firmy ze Zgorzelca obsługujemy zdalnie: spotkania online, wspólne dokumenty i regularne raporty. Na starcie poznajemy specyfikę Twojego rynku przy granicy z Niemcami.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Dwujęzyczny</h3>
                  <p className="text-gray-700">
                    Oferujemy kampanie i content marketing w jezykach polskim i niemieckim, co daje Twojej firmie dostep do szerszej grupy odbiorców na obu stronach granicy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Skoncentrowanie na Wynikach</h3>
                  <p className="text-gray-700">
                    Każda nasza kampania jest zorientowana na konkretne KPI i metryki. Dostarczamy szczegółowe raporty i analizy, aby pokazac wartosć naszych uslug.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Lokalne</h3>
                  <p className="text-gray-700">
                    Zajmujemy się lokalnym SEO dla firm ze Zgorzelca. Optymalizujemy Google My Business, budujemy lokalne cytowania i pomagamy Twojej firmie pojawić się w wyszukiwarce — bez obietnic konkretnej pozycji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">Czesto Zadawane Pytania</h2>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg border-2 border-gray-200 p-6 cursor-pointer hover:border-blue-500 transition">
                  <summary className="font-semibold text-gray-900 text-lg flex justify-between items-center">
                    {faq.question}
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Gotów na Wzrost Twojego Biznesu?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Skontaktuj się z nami — pracujemy z Poznania, firmy ze Zgorzelca obsługujemy zdalnie. Oferujemy bezpłatną konsultacje i diagnose Twojej obecnej strategii marketingowej.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Bezplatna Konsultacja
              </a>
              <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Skontaktuj Sie
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
