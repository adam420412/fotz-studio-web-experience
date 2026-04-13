import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Building2, MapPin, TrendingUp, Star, Globe, CheckCircle2, Phone, Mail } from "lucide-react";

export default function AgencjaMarketingowaPlock() {
  const breadcrumbs = [
    { name: "Strona glowna", url: "/" },
    { name: "Agencja marketingowa", url: "/agencja-marketingowa" },
    { name: "Plock", url: "/agencja-marketingowa/plock" }
  ];

  const faqItems = [
    {
      question: "Jakie uslugi oferuje agencja marketingowa w Plocku?",
      answer: "Nasza agencja oferuje kompleksowe uslagi marketingowe dla firm z Plocka i regionu Mazowsza, w tym SEO, reklame Google Ads, zarzadzanie mediami spolecznosciowymi, tworzenie stron internetowych i strategie marketingowe dostosowane do specyfiki lokalnego rynku."
    },
    {
      question: "Ile kosztuje SEO dla firmy w Plocku?",
      answer: "Cena SEO dla firm w Plocku zalezy od zakresu prac, konkurencji na rynku i obecnego stanu strony internetowej. Oferujemy pakiety od podstawowych (optymalizacja lokalnego biznesu) po zaawansowane (kampanie regionalne i krajowe). Zapraszamy do kontaktu w celu otrzymania indywidualnej wyceny."
    },
    {
      question: "Czy SEO dla malych firm w Plocku ma sens ekonomiczny?",
      answer: "Absolutnie! Lokalne SEO dla malych firm w Plocku jest bardzo efektywne kosztowo. Pozwala dotrzec do klientow szukajacych Twoich uslug w Plocku i okolicznych gminach. Inwestycja w SEO zwraca sie szybciej niz w reklame tradycyjne, a rezultaty sa trwale."
    },
    {
      question: "Jak dlugo trwa widocznosc w Google dla agencji z Plocka?",
      answer: "Pierwsze wyniki SEO mozna zaobserwowac juz po 4-6 tygodniach, jednak pena widocznosc w wyszukiwarce zwykle wymaga 3-6 miesiecy pracy. Czas zalezy od konkurencji, poziomu trudnosci slowan kluczowych i aktualnego stanu strony. Gwarantujemy przejrzystosc w procesie optymalizacji."
    },
    {
      question: "Czy agencja z Plocka moze pomoc w reklamie na Facebooku i Instagramie?",
      answer: "Tak, oferujemy pelnoprawne uslogi reklamy na mediach spolecznych, w tym Facebook i Instagram. Tworzymy kampanie kierowane do odbiorcow z Plocka i regionu, optymalizujemy budzety reklamowe i mierzymy ROI. Nasze kampanie social media maja ponad 50% lepsze wyniki niz srednia branzowa."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Plock | SEO, Google Ads, Social Media"
        description="Profesjonalna agencja marketingowa w Plocku. Uslugami SEO, Google Ads, social media marketing i tworzenie stron internetowych dla firm z Mazowsza. Darmowa…"
        canonical="https://fotz.pl/agencja-marketingowa/plock"
        ogImage="https://fotz.pl/og-plock.png"
        keywords="agencja marketingowa płock, marketing internetowy płock, agencja reklamowa płock, seo płock"
      />

      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <ServiceSchema
        name="Agencja Marketingowa Plock"
        description="Kompleksowe uslugami marketingowe dla firm w Plocku"
        areaServed="Plock"
      />
      <FAQSchema faqItems={faqItems} />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agencja Marketingowa w Plocku
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Profesjonalne uslugami marketingowe dla firm z Plocka. SEO, Google Ads, social media i tworzenie stron internetowych.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Darmowa Konsultacja
            </button>
          </div>
        </div>
      </section>

      {/* About Plock Market */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Dlaczego firma z Plocka potrzebuje marketingu cyfrowego?
              </h2>
              <p className="text-gray-700 mb-4">
                Plock to dynamicznie rozwijajace sie miasto nad Wislą na Mazowszu, stanowiace ważny center gospodarczy i logistyczny regionu. Lokalny rynek charakteryzuje sie silna obecnoscia przemyslu petrochemicznego (PKN Orlen), a takze rosnacej liczbie firm z sektora handlu, uslug i turystyki.
              </p>
              <p className="text-gray-700 mb-4">
                Konkurencja miedzy firmami w Plocku systematycznie rosnaca. Aby Twoj biznes wyróznial sie na tle konkurencji, musisz byc widoczny tam, gdzie szukaja Cie klienci - online. Wiecej niz 75% konsumentów szuka firm lokalnych w Internecie przez Google, Facebook i Instagram.
              </p>
              <p className="text-gray-700">
                Specjalizujemy sie w marketing dla firm z Plocka i okolic, rozumiemy specyfike lokalnego rynku i potrzeby przedsiębiorców z naszego regionu.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Lokalizacja Plocka</h3>
                    <p className="text-gray-600 text-sm">95 km od Warszawy, nad Wislą, centrum regionu Mazowsza</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Biznes</h3>
                    <p className="text-gray-600 text-sm">Przemysl petrochemiczny (PKN Orlen), handel, uslugami, turystyka</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Potencjal Rynku</h3>
                    <p className="text-gray-600 text-sm">Dynamiczny rozwój, rosnaca liczba firm, konkurencja w Internecie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nasze Uslugami Marketingowe dla Firm z Plocka
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Globe className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO dla Firm w Plocku</h3>
              <p className="text-gray-700 mb-4">
                Optymalizujemy Twoja strone pod kątem wyszukiwarek, aby byla widoczna dla klientow szukajacych Twoich uslug w Plocku. Specjalizujemy sie w lokalnym SEO i SEO dla biznesów z Mazowsza.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Analiza konkurencji
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Badanie slow kluczowych
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Optymalizacja on-page
                </li>
              </ul>
            </div>

            {/* Google Ads */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <TrendingUp className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ads i SEM</h3>
              <p className="text-gray-700 mb-4">
                Reklama Google Ads to najszybszy sposób na zdobycie klientow. Tworzymy kampanie kierowane bezposrednio na potencjalnych klientow w Plocku z wysokim wspolczynnikiem konwersji.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Google Search Ads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Display Ads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Retargeting
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Star className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
              <p className="text-gray-700 mb-4">
                Zarzadzamy Twoimi profilami na Facebooku i Instagramie, tworzymy kampanie reklamowe i budujemy Community wokol Twojej marki.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Zarzadzanie zawartoscia
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Reklama na Facebook/Instagram
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Community management
                </li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Building2 className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tworzenie Stron Internetowych</h3>
              <p className="text-gray-700 mb-4">
                Nowoczesne, responsywne strony internetowe dla firm z Plocka. Każda strona jest optymalizowana pod SEO i szybkosc ladowania.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Responsywny design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Szybka zaladowaniem
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  SEO-friendly
                </li>
              </ul>
            </div>

            {/* Brand Strategy */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Star className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategia Marketingowa</h3>
              <p className="text-gray-700 mb-4">
                Opracowujemy kompleksowe strategie marketingowe dostosowane do branzy i potrzeb Twojej firmy z Plocka.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Analiza konkurencji
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Plan zawartosci
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Budżet reklamowy
                </li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <TrendingUp className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analityka i Raporty</h3>
              <p className="text-gray-700 mb-4">
                Dostarczamy szczegółowe raporty o wynikach kampanii, pozycjach w Google i zwrocie z inwestycji (ROI).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Google Analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Tracking konwersji
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  Raporty miesieczne
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pakiety Cenowe dla Firm z Plocka
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pakiet Starter</h3>
              <p className="text-gray-600 mb-6">Dla malych firm i start-upow</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">1 499 zl/mc</p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Strona internetowa
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Podstawowe SEO
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Google My Business
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  1 profil social media
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Wybierz
              </button>
            </div>

            {/* Professional */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600">
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded text-sm font-semibold mb-4">
                Najpopularniejszy
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pakiet Profesjonalny</h3>
              <p className="text-gray-600 mb-6">Dla rozwijajacych sie firm</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">3 499 zl/mc</p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Strona + e-commerce
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  SEO zaawansowane
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Google Ads (1000 zl/mc)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Facebook + Instagram
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Raporty miesieczne
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Wybierz
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pakiet Enterprise</h3>
              <p className="text-gray-600 mb-6">Dla dużych firm i korporacji</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">Wycena</p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Wszystkie uslugami
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Dedykowany team
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Kampanie premium
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Strateg dedykowany
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Wsparcie 24/7
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Konsultacja
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Najczestsze Pytania
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Chcesz Rozwinac Swoj Biznes w Plocku?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Zarezerwuj bezplatta konsultacje z naszym specjalistą. Omowimy Twoje cele biznesowe i opracujemy plan marketingowy dla Twojej firmy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Phone size={20} />
              Zadzwon Teraz
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <Mail size={20} />
              Wyslij Wiadomosc
            </button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            Agencja Marketingowa Plock - Specjalista w Marketingu dla Firm z Mazowsza
          </p>
          <p className="text-sm">
            ul. Grodzka 10, 09-400 Plock | Tel: +48 24 262 0000 | Email: hello@fotz.pl
          </p>
        </div>
      </section>
    </Layout>
  );
}
