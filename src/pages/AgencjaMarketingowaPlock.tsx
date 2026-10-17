import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Building2, MapPin, TrendingUp, Star, Globe, CheckCircle2, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function AgencjaMarketingowaPlock() {
  const breadcrumbs = [
    { name: "Strona glowna", url: "/" },
    { name: "Agencja marketingowa", url: "/agencja-marketingowa" },
    { name: "Płock", url: "/agencja-marketingowa/plock" }
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
      answer: "Absolutnie! Lokalne SEO dla malych firm w Plocku jest bardzo efektywne kosztowo. Pozwala dotrzec do klientow szukajacych Twoich uslug w Plocku i okolicznych gminach. Oplacalnosc zalezy od branzy i konkurencji — ocenimy ja po analizie Twojej strony i rynku."
    },
    {
      question: "Jak dlugo trwa widocznosc w Google dla agencji z Plocka?",
      answer: "SEO to proces dlugofalowy — zwykle trwa miesiacami, a tempo zalezy od konkurencji, trudnosci slow kluczowych i aktualnego stanu strony. Nie gwarantujemy konkretnej pozycji ani terminu jej osiagniecia. Na biezaco raportujemy wykonane prace i zmiany widocznosci."
    },
    {
      question: "Czy agencja z Plocka moze pomoc w reklamie na Facebooku i Instagramie?",
      answer: "Tak, oferujemy pelnoprawne uslogi reklamy na mediach spolecznych, w tym Facebook i Instagram. Tworzymy kampanie kierowane do odbiorcow z Plocka i regionu, optymalizujemy budzety reklamowe i mierzymy ROI."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Plock | SEO, Google Ads, Social Media"
        description="Agencja marketingowa dla firm z Płocka — pracujemy z Poznania, obsługa zdalna. Usługi SEO, Google Ads, social media marketing i tworzenie stron internetowych dla firm z Płocka i Mazowsza. Darmowa konsultacja na start."
        canonical="https://www.fotz-studio.pl/agencja-marketingowa/plock"
        keywords="agencja marketingowa płock, marketing internetowy płock, agencja reklamowa płock, seo płock"
      />

      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name="Agencja Marketingowa Plock"
        description="Kompleksowe uslugi marketingowe dla firm z Plocka (obsluga zdalna z Poznania)"
        areaServed="Plock"
      />
      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agencja Marketingowa dla Firm z Płocka
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Profesjonalne uslugami marketingowe dla firm z Plocka. SEO, Google Ads, social media i tworzenie stron internetowych.
            </p>
            <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Darmowa Konsultacja
            </a>
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
                Konkurencja miedzy firmami w Plocku systematycznie rosnaca. Aby Twoj biznes wyróznial sie na tle konkurencji, musisz byc widoczny tam, gdzie szukaja Cie klienci - online. Coraz wiecej klientow szuka lokalnych firm w Google, na Facebooku i Instagramie.
              </p>
              <p className="text-gray-700">
                Pracujemy z Poznania, a firmy z Plocka i okolic obslugujemy zdalnie — spotkania online, wspolne dokumenty i regularne raporty.
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
                Reklama Google Ads pozwala dotrzec do osob, ktore wlasnie szukaja Twoich uslug. Tworzymy kampanie kierowane na potencjalnych klientow w Plocku i optymalizujemy je pod konwersje.
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
            Od czego zależy wycena?
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p>
              Wycenę przygotowujemy po rozmowie o zakresie. Zależy ona m.in. od tego, które kanały prowadzimy (SEO, Google Ads, social media, strona WWW), ile treści i kampanii potrzebujesz, jak duża jest konkurencja w Twojej branży oraz jaki jest obecny stan strony i profili.
            </p>
            <p>
              Budżet reklamowy płacony Google lub Meta jest zawsze osobną pozycją, niezależną od wynagrodzenia za obsługę — ustalamy go wspólnie do Twoich celów.
            </p>
            <div className="text-center pt-4">
              <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition">
                Poproś o wycenę
              </a>
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
            <a href="tel:+48790814814" className="inline-flex min-h-11 items-center justify-center text-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Phone size={20} />
              Zadzwon Teraz
            </a>
            <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <Mail size={20} />
              Wyslij Wiadomosc
            </a>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            FOTZ Studio — pracujemy z Poznania, firmy z Płocka obsługujemy zdalnie
          </p>
          <p className="text-sm">
            Tel: +48 790 814 814 | Email: hello@fotz.pl
          </p>
        </div>
      </section>

      {/* Link nawigacyjny */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/agencja-marketingowa" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Wszystkie lokalizacje agencji
          </Link>
        </div>
      </section>
    </Layout>
  );
}
