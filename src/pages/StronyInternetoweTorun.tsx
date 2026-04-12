import React from 'react';
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Monitor, Globe, Code, Smartphone, Zap, CheckCircle, Users, TrendingUp } from 'lucide-react';

const breadcrumbs = [
  { name: "Strona główna", url: "/" },
  { name: "Strony internetowe", url: "/strony-internetowe" },
  { name: "Toruń", url: "/strony-internetowe/torun" }
];

const faqItems = [
  {
    question: "Ile czasu trwa stworzenie strony internetowej w Toruniu?",
    answer: "Czas realizacji strony internetowej zależy od jej złożoności. Typowa strona wizytówka zajmuje 2-4 tygodnie, sklep e-commerce 6-12 tygodni, a zaawansowane portale biznesowe do 16 tygodni. Oferujemy elastyczne terminy dostosowane do potrzeb Twojej firmy z Torunia."
  },
  {
    question: "Czy strona internetowa będzie zoptymalizowana pod SEO?",
    answer: "Tak, wszystkie nasze strony internetowe dla firm z Torunia są tworzane z uwzględnieniem najlepszych praktyk SEO. Implementujemy popularne słowa kluczowe, strukturę odpowiednią dla wyszukiwarek, meta tagi i schemat JSON, co wpływa pozytywnie na vidoczność w wynikach wyszukiwania."
  },
  {
    question: "Czy moja strona internetowa będzie responsywna?",
    answer: "Oczywiście. Wszystkie projekty stron internetowych w Toruniu, które tworzymy, są w pełni responsywne i dostosowują się do urządzeń mobilnych, tabletów i desktopów. Zapewniamy najlepsze doświadczenie użytkownika na każdym urządzeniu."
  },
  {
    question: "Jakie typy stron internetowych oferujecie dla torunian firm?",
    answer: "Tworzymy wszystkie typy stron: strony wizytówki dla małych firm, sklepy e-commerce, landing pages do kampanii marketingowych, portale biznesowe i serwisy informacyjne. Każdy projekt dostosowujemy do specyficznych potrzeb i branży Twojej firmy w Toruniu."
  },
  {
    question: "Jak wygląda proces tworzenia strony internetowej?",
    answer: "Nasz proces obejmuje fazy: analiza wymagań i konkurencji, wireframing, projektowanie, implementacja, testy i optymalizacja. Pracujemy blisko z naszymi klientami z Torunia, zapewniając regularne aktualizacje i feedback na każdym etapie projektu."
  }
];

export default function StronyInternetoweTorun() {
  return (
    <Layout>
      <SEOHead
        title="Strony internetowe Toruń | Projektowanie stron internetowych"
        description="Profesjonalne projektowanie stron internetowych w Toruniu. Nowoczesne strony wizytówki, sklepy e-commerce i landing pages dla firm. SEO-friendly, responsywne, szybkie."
        canonical="https://fotz.pl/strony-internetowe/torun"
        ogImage="https://fotz.pl/og-torun.jpg"
        keywords="strony internetowe toruń, tworzenie stron toruń, projektowanie stron toruń, agencja webdesign toruń"
      />
      
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name="Projektowanie stron internetowych w Toruniu"
        description="Nowoczesne projektowanie stron internetowych dla firm z Torunia. Tworzenie stron wizytówek, sklepów e-commerce i landing pages."
        areaServed="Toruń"
        priceRange="1500-15000"
      />
      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Strony internetowe Toruń
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Profesjonalne projektowanie i tworzenie nowoczesnych stron internetowych dla firm z Torunia. Zwiększymy widoczność Twojej firmy w internecie.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                  Umów konsultację
                </button>
                <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">
                  Przejrzyj portfolio
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur">
                <Monitor className="w-32 h-32 mx-auto text-blue-200 mb-6" />
                <p className="text-center text-blue-100">
                  Nowoczesne strony internetowe dla Twojej firmy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Projektów w Toruniu</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-700">Lat doświadczenia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-700">Zadowolonych klientów</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-700">Wsparcie techniczne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Typy stron internetowych dla firm z Torunia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Strony wizytówki */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Strony Wizytówki</h3>
              <p className="text-gray-700 mb-6">
                Profesjonalna strona internetowa dla Twojej firmy z Torunia. Prezentacja usług, team, kontakt i portfolio. Idealne dla każdego biznesu, który chce być widoczny online.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Responsywny design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>SEO optimized</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Szybkie ładowanie</span>
                </li>
              </ul>
            </div>

            {/* Sklepy e-commerce */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Sklepy E-commerce</h3>
              <p className="text-gray-700 mb-6">
                Zaawansowany sklep internetowy dla firm z Torunia. Systemy płatności, zarządzanie magazynem, integracja z logistyką i analityka sprzedaży dla Twojego biznesu.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Integracja płatności</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Zarządzanie produktami</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Analityka e-commerce</span>
                </li>
              </ul>
            </div>

            {/* Landing Pages */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Landing Pages</h3>
              <p className="text-gray-700 mb-6">
                Strony docelowe dla kampanii marketingowych. Wysokie konwersje, CTA dostosowany do celów, testy A/B i optymalizacja dla firm z Torunia prowadzących kampanie online.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Wysokie konwersje</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Testy A/B</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Integracja z CRM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Czym się wyróżniamy w Toruniu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <Smartphone className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Responsive Design</h3>
                <p className="text-gray-700">
                  Wszystkie nasze strony internetowe dla firm z Torunia są w pełni responsywne i działają idealnie na telefonach, tabletach i komputerach. Zapewniamy najlepsze doświadczenie użytkownika na każdym urządzeniu.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <TrendingUp className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
                <p className="text-gray-700">
                  Strony tworzymy z myślą o wyszukiwarkach. Optymalizacja dla frazy "strony internetowe Toruń" i innych kluczowych słów zapewnia widoczność Twojej firmy w Google i innych wyszukiwarkach.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Zap className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Szybkie ładowanie</h3>
                <p className="text-gray-700">
                  Optymalizujemy każdą stronę internetową dla maksymalnej szybkości. Szybkie ładowanie to klucz do lepszego rankingu w Google i wyższej konwersji dla firm z Torunia.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Users className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Dedykowany support</h3>
                <p className="text-gray-700">
                  Po uruchomieniu strony internetowej dla Twojej firmy z Torunia oferujemy pełny support techniczny. Jesteśmy dostępni 24/7, aby rozwiązać wszelkie problemy i dokonywać aktualizacji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Jak pracujemy przy projektowaniu stron w Toruniu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Analiza</h3>
              <p className="text-gray-700 text-sm">
                Poznajemy Twoją firmę, branżę i konkurencję w Toruniu
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Projektowanie</h3>
              <p className="text-gray-700 text-sm">
                Tworzymy design strony z uwzględnieniem potrzeb użytkowników
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Implementacja</h3>
              <p className="text-gray-700 text-sm">
                Kodujemy stronę internetową dla Torunia z najnowszymi technologiami
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Testowanie</h3>
              <p className="text-gray-700 text-sm">
                Gruntownie testujemy stronę na wszystkich urządzeniach i przeglądarkach
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5
              </div>
              <h3 className="font-bold mb-2">Wdrażanie</h3>
              <p className="text-gray-700 text-sm">
                Uruchamiamy stronę i zapewniamy ciągły support dla Twojej firmy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cennik stron internetowych w Toruniu
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-4">Strona Wizytówka</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">
                od 1500 zł
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Do 5 podstron</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Responsywny design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>SEO optimized</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Forma kontaktowa</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Wybierz
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl p-8 transform md:scale-105">
              <div className="text-center mb-4">
                <span className="bg-yellow-400 text-blue-600 px-4 py-1 rounded-full font-bold text-sm">
                  Najpopularniejsza
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sklep E-commerce</h3>
              <p className="text-4xl font-bold mb-6">
                od 5000 zł
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Unlimited produktów</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Integracja płatności</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Panel administracyjny</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Analityka sprzedaży</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Wybierz
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-indigo-600">
              <h3 className="text-2xl font-bold mb-4">Portal Biznesowy</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">
                od 10000 zł
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Zaawansowana funkcjonalność</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>API integracje</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Zarządzanie użytkownikami</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Zaawansowana analityka</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Wybierz
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Najczęstsze pytania o tworzeniu stron w Toruniu
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <details key={index} className="bg-white rounded-lg shadow-lg p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-bold text-lg hover:text-blue-600 transition">
                  <span>{item.question}</span>
                  <span className="ml-4 text-2xl group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gotowy do stworzenia nowoczesnej strony internetowej?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z nami dzisiaj i otrzymaj bezpłatną konsultację na temat Twojego projektu. Jesteśmy specjalistami w tworzeniu stron internetowych dla firm z Torunia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Umów darmową konsultację
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition">
              Zapoznaj się z naszym portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Telefon</h3>
              <p className="text-gray-700">+48 56 XXX XXXX</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-700">hello@fotz.pl</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Biuro w Toruniu</h3>
              <p className="text-gray-700">ul. Jakieś 123, Toruń</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
