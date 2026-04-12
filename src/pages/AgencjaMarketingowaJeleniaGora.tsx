import { SEOHead } from "@/components/seo/SEOHead";
import {
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";

export default function AgencjaMarketingowaJeleniaGora() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fotz Studio - Agencja Marketingowa Jelenia Góra",
    description:
      "Profesjonalna agencja marketingowa w Jeleniej Górze. Oferujemy SEO, SEM, social media, tworzenie stron internetowych i kampanie Google Ads.",
    url: "https://fotz.pl/agencja-marketingowa/jelenia-gora",
    telephone: "+48",
    areaServed: "Jelenia Góra",
    priceRange: "PLN",
    image: "https://fotz.pl/og-image.jpg",
    sameAs: [
      "https://www.facebook.com/fotzstudio",
      "https://www.linkedin.com/company/fotz-studio",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona glowna",
        item: "https://fotz.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Agencja marketingowa",
        item: "https://fotz.pl/agencja-marketingowa",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Jelenia Gora",
        item: "https://fotz.pl/agencja-marketingowa/jelenia-gora",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Jakie uslugi oferuje agencja marketingowa w Jeleniej Gorze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nasza agencja w Jeleniej Gorze oferuje kompleksowe uslugi marketingowe: optymalizacje SEO, kampanie Google Ads, zarzadzanie social media, tworzenie stron internetowych, strategie content marketingowe oraz analize konkurencji. Dostosowujemy kazda strategie do specyficznych potrzeb lokalnych przedsiebiorstw.",
        },
      },
      {
        "@type": "Question",
        name: "Ile kosztuje kampania marketingowa od agencji w Jeleniej Gorze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ceny naszych uslug poczytaja sie od zakresu projektu. Oferujemy pakiety od kilkuset zlotych mesiecznie dla malych firm az do rozbudowanych strategii dla duzych korporacji. Kazda cennik jest indywidualnie dopasowany do budzetu i celow Twojej firmy.",
        },
      },
      {
        "@type": "Question",
        name: "Dlaczego warto wybrac Fotz Studio jako agencje marketingowa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fotz Studio to zaufana agencja z doswiadczeniem w obsludze firm z Jeleniej Gory i calego wojewodztwa dolnoslaskiego. Oferujemy spersonalizowany dostep, nowoczesne narzedzia, transparentne raporty i gwarancje rezultatow. Naszym celem jest maksymalizacja zwrotu z inwestycji w marketing.",
        },
      },
      {
        "@type": "Question",
        name: "Jak dlugo trwa optymalizacja SEO w Jeleniej Gorze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typowa kampania SEO przynosi pierwsze rezultaty w ciagu 2-3 miesiecy. Pelne efekty optymalizacji sa widoczne po 6-12 miesiacach. Czas zalezy od konkurencyjnosci hasel, stanu strony internetowej i zakresu prac. Zapewniamy ciagly monitoring i optymalizacje rezultatow.",
        },
      },
      {
        "@type": "Question",
        name: "Czy agencja oferuje doradztwo SEO dla lokalnych firm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, specjalizujemy sie w lokalnym SEO dla firm z Jeleniej Gory. Nasza strategia lokalna obejmuje optymalizacje Google My Business, lokalne backlinki, recenzje klientow i geograficzne oznaczenie slow kluczowych. Pomagamy firmom zdominowac wyniki wyszukiwania w swojej okolicy.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Jelenia Gora | Fotz Studio"
        description="Profesjonalna agencja marketingowa w Jeleniej Gorze. SEO, SEM, social media, strony internetowe i kampanie Google Ads dla firm lokalnych."
        canonical="https://fotz.pl/agencja-marketingowa/jelenia-gora"
        ogTitle="Agencja Marketingowa Jelenia Gora | Fotz Studio"
        ogDescription="Kompleksowe uslugi marketingowe dla firm w Jeleniej Gorze. Zwieksz widocznosc online dzis."
        ogImage="https://fotz.pl/og-image.jpg"
        ogUrl="https://fotz.pl/agencja-marketingowa/jelenia-gora"
      />
      <ServiceSchema schema={serviceSchema} />
      <BreadcrumbSchema schema={breadcrumbSchema} />
      <FAQSchema schema={faqSchema} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agencja Marketingowa w Jeleniej Gorze
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Profesjonalne uslugi marketingowe dla firm lokalnych. Zwieksz
              sprzedaz dzeki efektywnym strategiom cyfrowym.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                Bezplatna konsultacja
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Nasze uslugi
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Kim jestesmy?
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Fotz Studio to zaufana agencja marketingowa obslugujacej firmy z
              Jeleniej Gory i wojewodztwa dolnoslaskiego. Przez lata
              wspieralismy dziesiatki przedsiebiorstw w osiaganiu ich celow
              biznesowych poprzez nowoczesne strategie marketingowe i cyfrowe
              transformacje.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Naszym glownym celem jest dostarczenie wynikow, ktore generuja
              rzeczywisty zwrot z inwestycji. Nie zajmujemy sie pustymi
              obietnicami - pokazujemy konkretne wyniki poprzez raporty,
              analize i transparentna komunikacje.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              Nasza oferta uslug
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Optymalizacja SEO
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Zwieksz widocznosc Twojej strony w wynikach wyszukiwania
                  Google. Specjalizujemy sie w lokalnym SEO dla Jeleniej Gory,
                  optymalizacji slow kluczowych oraz budowaniu autorytetu
                  domeny. Nasza strategia SEO opiera sie na najnowszych
                  algorytmach Google i best practices branzy.
                </p>
              </div>

              {/* SEM / Google Ads */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Kampanie Google Ads
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dotieraj do potencjalnych klientow w Jeleniej Gorze poprzez
                  dobrze zaplanowane kampanie Google Ads. Zaradzamy od
                  planowania budzytu, poprzez tworzenie ogloszen az do
                  optymalizacji konwersji. Kazda zlota w sieciach reklamy jest
                  wydatkowana efektywnie.
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Zarzadzanie Social Media
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Buduj komunite na Facebooku, Instagramie i LinkedInie. Tworzymy
                  zakadle i strategie content marketingowe, ktorych celem jest
                  zaangazowanie audytorium i wzrost sprzedazy. Regularna
                  publikacja, interakcja z klientami i monitoring markowych
                  komentarzy - wszystko w jednym pakiecie.
                </p>
              </div>

              {/* Web Development */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Tworzenie Stron Internetowych
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Profesjonalna strona internetowa to fundament Twojej
                  obecnosci online. Projektujemy responsywne witryny optymalizowane
                  pod katem SEO i konwersji. Kazda strona jest dostosowana do
                  specyficznych potrzeb biznesu i branzy w ktorej dzialasz.
                </p>
              </div>

              {/* Content Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Content Marketing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Zawartosci sa krolami w swiecie marketingu cyfrowego. Tworzymy
                  artykuly, blogi, infografiki i materialy video, ktorych celem
                  jest edukacja i zaangazowanie Twojego docelowego rynku. Kazda
                  zawartosc wspiera Twoje cele SEO i biznesowe.
                </p>
              </div>

              {/* Analytics */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Analize i Raporty
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nie mozesz ulepszyc tego czego nie mierzysz. Przeprowadzamy
                  szczegolowe analize calengo Twojego marketingu cyfrowego,
                  raportujemy wyniki i rekomendujemy optymalizacje. Regule
                  dostarczamy przejrzysty raport pokazujacy ROI Twojej inwestycji.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Lokalne SEO dla Jeleniej Gory
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jestesmy specjalistami w lokalnym SEO dla firm znajdujacych sie w
              Jeleniej Gorze. Nasza strategia lokalna zawiera optymalizacje
              Google My Business, zbudowanie lokalnych backlinkowz, zbieranie
              recenzji od klientow oraz geograficzne dostrojenie slow kluczowych.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dzieki naszym dzialaniom, Twoja firma bedzie widoczna dla
              potencjalnych klientow szukajacych uslug w Jeleniej Gorze. Lokalne
              SEO to jeden z najtanszych sposobów na generowanie nowych
              klientow, szczegolnie dla malych i srednich przedsiebiorstw.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Optymalizacja Google My Business i lokalnych lokal</li>
              <li>Zbudowanie lokalnego autorytetu domeny</li>
              <li>Upolnienie recenzji i opinii klientow</li>
              <li>
                Geograficzne dostrojenie slow kluczowych dla Jeleniej Gory
              </li>
              <li>Promotowanie lokalnych dzialań w social media</li>
            </ul>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Nasze ceny i pakiety
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Oferujemy elastyczne pakiety dostosowane do budzytu i potrzeb
              Twojej firmy. Ceny zaczytaja sie od kilkuset zlotych mesiecznie
              dla malych firm az do rozbudowanych strategii dla duzych
              korporacji. Kazda wycena jest indywidualna i przygotowana na
              podstawie analizy Twoich potrzeb.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold mb-4">Pakiet Starter</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  od 999 PLN
                </p>
                <p className="text-gray-600 mb-6">mesiecznie</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Audyt SEO</li>
                  <li>✓ Optymalizacja 10 slow kluczowych</li>
                  <li>✓ 4 artykuly na miesiac</li>
                  <li>✓ Raport mesiecny</li>
                </ul>
              </div>

              {/* Professional */}
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-700 transform scale-105">
                <h3 className="text-2xl font-bold mb-4">Pakiet Professional</h3>
                <p className="text-3xl font-bold text-blue-700 mb-4">
                  od 2,499 PLN
                </p>
                <p className="text-gray-600 mb-6">mesiecznie</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Pelen audyt SEO</li>
                  <li>✓ Kampania Google Ads</li>
                  <li>✓ Zarzadzanie social media</li>
                  <li>✓ 8 artykułow na miesiac</li>
                  <li>✓ Analize konkurencji</li>
                  <li>✓ Raport dwutygodniowy</li>
                </ul>
              </div>

              {/* Enterprise */}
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold mb-4">Pakiet Enterprise</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  Od 5,999 PLN
                </p>
                <p className="text-gray-600 mb-6">mesiecznie</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Dedykowany zespol</li>
                  <li>✓ Wszystkie kanaly marketingowe</li>
                  <li>✓ Tworzenie stron internetowych</li>
                  <li>✓ Strategie business growth</li>
                  <li>✓ Codzienne monitoring</li>
                  <li>✓ Raport tygodniowy</li>
                </ul>
              </div>
            </div>

            <p className="text-center mt-12 text-gray-700">
              Zainteresowany naszymi uslugami? Skontaktuj sie z nami, aby
              otrzymac spersonalizowana wycene dla Twojego projektu.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Dlaczego warto wybrac Fotz Studio?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Doswiadczenie</h3>
                  <p className="text-gray-700">
                    Lata doswiadczenia w obsludze firm z Jeleniej Gory i
                    wojewodztwa dolnoslaskiego. Znamy lokalne rynki i specyfike
                    biznesu w regionie.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparentnosc</h3>
                  <p className="text-gray-700">
                    Regularne raporty, analizę i komunikacje na kazdym etapie
                    projektu. Widzisz dokladnie, na co sa wydawane pieniadze i
                    jakie sa rezultaty.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Spersonalizowany dostep</h3>
                  <p className="text-gray-700">
                    Kazda strategia jest dostosowana do unikalnych potrzeb
                    Twojej firmy. Nie stosujemy szablonowych rozwiazań - kazdy
                    projekt jest indywidualnie planowany.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nowoczesne narzedzia</h3>
                  <p className="text-gray-700">
                    Uzywamy najnowszych narzedzi i technologii do optymalizacji
                    marketingu cyfrowego. Od SEO tools, przez analytics az do
                    automation platform.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Fokus na ROI
                  </h3>
                  <p className="text-gray-700">
                    Naszym celem jest maksymalizacja zwrotu z inwestycji w
                    marketing. Pracujemy nad kampaniami, ktore generuja rzeczywisty
                    biznes, nie tylko metryki.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Gotowy do transformacji Twojego marketingu?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Skontaktuj sie z nami dzisiaj na bezplatna konsultacje. Pokazymy
              Ci, jak mozemy wzrost Twojej sprzedazy w Jeleniej Gorze.
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
              Zaczynamy dzisiaj
            </button>
          </div>
        </section>

        {/* Footer Contact */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Skontaktuj sie z nami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Adres</h3>
                <p className="text-gray-300">
                  Jelenia Gora
                  <br />
                  Wojewodztwo Dolnoslaskie
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Telefon</h3>
                <p className="text-gray-300">+48 XXX XXX XXX</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">kontakt@fotz.pl</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
