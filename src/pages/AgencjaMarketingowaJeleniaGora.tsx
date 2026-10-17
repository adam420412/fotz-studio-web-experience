import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";

export default function AgencjaMarketingowaJeleniaGora() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fotz Studio - Agencja Marketingowa Jelenia Góra",
    description:
      "Agencja marketingowa z Poznania, która zdalnie obsługuje firmy z Jeleniej Góry. Oferujemy SEO, SEM, social media, tworzenie stron internetowych i kampanie Google Ads.",
    url: "https://www.fotz-studio.pl/agencja-marketingowa/jelenia-gora",
    telephone: "+48 790 814 814",
    areaServed: "Jelenia Góra",
    priceRange: "PLN",
    image: "https://www.fotz-studio.pl/og-image.jpg",
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
        item: "https://www.fotz-studio.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Agencja marketingowa",
        item: "https://www.fotz-studio.pl/agencja-marketingowa",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Jelenia Gora",
        item: "https://www.fotz-studio.pl/agencja-marketingowa/jelenia-gora",
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
          text: "Firmom z Jeleniej Góry, które obsługujemy zdalnie z Poznania, oferujemy kompleksowe usługi marketingowe: optymalizacje SEO, kampanie Google Ads, zarzadzanie social media, tworzenie stron internetowych, strategie content marketingowe oraz analize konkurencji. Dostosowujemy kazda strategie do specyficznych potrzeb lokalnych przedsiebiorstw.",
        },
      },
      {
        "@type": "Question",
        name: "Ile kosztuje kampania marketingowa od agencji w Jeleniej Gorze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wycenę przygotowujemy po rozmowie o zakresie: liczbie kanałów, stanie strony i kont reklamowych oraz ilości treści do przygotowania. Budżet reklamowy płacony Google lub Meta jest zawsze osobno od naszego wynagrodzenia.",
        },
      },
      {
        "@type": "Question",
        name: "Dlaczego warto wybrac Fotz Studio jako agencje marketingowa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fotz Studio pracuje z Poznania, a firmy z Jeleniej Góry obsługuje zdalnie. Łączymy kampanie i SEO z własną produkcją foto i wideo. Realizowaliśmy projekty m.in. dla Enea Stadionu, FPS Cegielski i WSB Merito. Stawiamy na indywidualne podejście i przejrzyste raporty z wykonanych działań.",
        },
      },
      {
        "@type": "Question",
        name: "Jak dlugo trwa optymalizacja SEO w Jeleniej Gorze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO to działanie długoterminowe i nie da się podać sztywnego terminu efektów. Czas zależy od konkurencyjności fraz, stanu strony internetowej i zakresu prac — zwykle na wyraźne zmiany trzeba poczekać kilka miesięcy. Nie gwarantujemy konkretnej pozycji w Google, ale regularnie raportujemy wykonane prace i zmiany widoczności.",
        },
      },
      {
        "@type": "Question",
        name: "Czy agencja oferuje doradztwo SEO dla lokalnych firm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, zajmujemy się lokalnym SEO, także dla firm z Jeleniej Góry, które obsługujemy zdalnie. Działania lokalne obejmują optymalizację profilu Google Business, lokalne linki, zbieranie opinii klientów i dopasowanie fraz do lokalizacji. Celem jest lepsza widoczność firmy w jej okolicy.",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Jelenia Gora | Fotz Studio"
        description="Agencja marketingowa dla firm z Jeleniej Góry: SEO, SEM, social media, strony internetowe i kampanie Google Ads. Pracujemy z Poznania, obsługujemy zdalnie."
        canonical="https://www.fotz-studio.pl/agencja-marketingowa/jelenia-gora"
        ogImage="https://www.fotz-studio.pl/og-image.jpg"
        keywords="agencja marketingowa jelenia góra, marketing internetowy jelenia góra, agencja reklamowa jelenia góra, seo jelenia góra"
      />
      
      
      

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agencja Marketingowa Jelenia Góra
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Usługi marketingowe dla firm z Jeleniej Góry. Pracujemy z
              Poznania, a współpracę prowadzimy zdalnie — od strategii po
              kampanie i treści.
            </p>
            <div className="flex gap-4">
              <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                Bezplatna konsultacja
              </a>
              <a href="/uslugi" className="inline-flex min-h-11 items-center justify-center text-center border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Nasze uslugi
              </a>
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
              Fotz Studio to agencja kreatywna z Poznania: video, foto, strony
              WWW, social media, Meta Ads, Google Ads i SEO. Firmy z Jeleniej
              Góry i województwa dolnośląskiego obsługujemy zdalnie.
              Realizowaliśmy projekty m.in. dla Enea Stadionu, FPS Cegielski,
              WSB Merito i Dawid EDU.
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
                  Google. Zajmujemy się lokalnym SEO, także dla firm z
                  Jeleniej Góry, optymalizacją pod wybrane frazy oraz
                  budowaniem autorytetu domeny. Nie gwarantujemy konkretnej
                  pozycji — raportujemy wykonane prace i zmiany widoczności.
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
                  optymalizacji konwersji. Budżet reklamowy płacony Google jest
                  zawsze osobno od naszego wynagrodzenia.
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
              Prowadzimy lokalne SEO dla firm, także z Jeleniej Góry, które
              obsługujemy zdalnie z Poznania. Działania lokalne obejmują optymalizację
              Google My Business, zbudowanie lokalnych backlinkowz, zbieranie
              recenzji od klientow oraz geograficzne dostrojenie slow kluczowych.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Celem tych działań jest lepsza widoczność Twojej firmy dla
              potencjalnych klientów szukających usług w Jeleniej Górze. Nie
              gwarantujemy konkretnej pozycji w wynikach — efekty zależą od
              branży, konkurencji i stanu strony.
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
              Od czego zależy wycena
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nie mamy sztywnego cennika ani pakietów z kwotami. Wycenę
              przygotowujemy po rozmowie o zakresie i celach Twojej firmy.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-2">Zakres działań</h3>
                <p className="text-gray-700">
                  Jeden kanał (np. SEO albo Google Ads) czy kilka naraz:
                  kampanie, social media, treści i strona WWW.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-2">Punkt wyjścia</h3>
                <p className="text-gray-700">
                  Stan strony, kont reklamowych i profili — start od zera
                  wycenia się inaczej niż rozwój trwających działań.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-2">Produkcja treści</h3>
                <p className="text-gray-700">
                  Liczba i rodzaj materiałów: teksty, grafiki, zdjęcia i wideo.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-2">Budżet reklamowy</h3>
                <p className="text-gray-700">
                  Budżet płacony Google lub Meta jest zawsze osobno od naszego
                  wynagrodzenia — o jego wysokości decydujesz Ty.
                </p>
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
                  <h3 className="text-xl font-bold mb-2">Doświadczenie</h3>
                  <p className="text-gray-700">
                    Realizowaliśmy projekty m.in. dla Enea Stadionu, FPS
                    Cegielski i WSB Merito. Pracujemy z Poznania, a firmy z
                    Jeleniej Góry obsługujemy zdalnie.
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
            <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
              Zaczynamy dzisiaj
            </a>
          </div>
        </section>

        {/* Footer Contact */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Skontaktuj sie z nami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Lokalizacja</h3>
                <p className="text-gray-300">
                  Pracujemy z Poznania — firmy z Jeleniej Góry obsługujemy
                  zdalnie.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Telefon</h3>
                <p className="text-gray-300">
                  <a href="tel:+48790814814" className="hover:underline">
                    +48 790 814 814
                  </a>
                </p>
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
