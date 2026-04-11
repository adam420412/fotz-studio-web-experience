import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function BlogStronaInternetowaDlaRestauracji() {
  const breadcrumbItems = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Strona internetowa dla restauracji" }
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa dla restauracji?",
      answer: "Koszt strony dla restauracji zalezy od jej zakresu i funkcjonalnosci. Prosta wizytowka kosztuje od 800 do 1500 zl, strona z menu online to 1500-3000 zl, a pelna strona z systemem zamowen online to 3000-7000 zl. Cena zalety od liczby stron, integracji z systemami rezerwacji, i dodatkowych funkcjonalnosci."
    },
    {
      question: "Co powinna zawierac strona restauracji?",
      answer: "Efektywna strona restauracji powinna zawierac: menu z cenami, galerie zdiec dan i wnetrza restauracji, mape z lokalizacja i godzinami otwarcia, system rezerwacji stolika, mozliwosc zamowen na wynos, sekcje opini i recenzji, oraz formularz kontaktowy. Te elementy zwiększają konwersje i budują zaufanie u klientow."
    },
    {
      question: "Jak dodac menu online na strone restauracji?",
      answer: "Menu online mozna dodac na kilka sposobow: jako plik PDF do pobrania, jako interaktywne menu HTML z kategorami i filtrami, lub jako integracja z systemem zamowien online. Najlepszym rozwiazaniem jest interaktywne menu z mozliwoscia sortowania, bo poprawia SEO i ulatwia klientom przeglądanie oferty."
    },
    {
      question: "Czy strona restauracji musi miec rezerwacje online?",
      answer: "Rezerwacja online nie jest obowiązkowa, ale stanowi znaczacy plus. Statystyki pokazują, że restauracje z rezerwacja online doswiadczają wzrostu zamowen do 35%. System rezerwacji online zmniejsza liczbę omylek, pozwala na lepsza organizacje stolikow, i daje klientom wygode rezerwacji o kazdej porze."
    },
    {
      question: "Jak pozycjonowac strone restauracji w Google Maps?",
      answer: "Aby poprawic widocznosc w Google Maps, musisz: utworzyc lub zaaktualnic wpis Google My Business z poprawna nazwa, adresem i godzinami otwarcia, dodac zdarmowe zdjecia i film, zachecic klientow do zostawiania recenzji, uzupelnic kategorie biznesu, i regularnie publikowac posty. Pozytywne recenzje i spójne dane kontaktowe sa kluczowe dla rankingu."
    },
    {
      question: "Ile trwa stworzenie strony dla restauracji?",
      answer: "Czas realizacji zalezy od zlozonosci projektu. Prosta wizytowka zajmuje 3-5 dni, strona z menu online 5-10 dni, a pelna strona z systemem zamowen i platnosci 10-21 dni. Zwykle procese obejmuja konsultacje, projektowanie, rozwoj, integracje systemow, i testowanie."
    },
    {
      question: "Jakie zdjecia sa potrzebne do strony restauracji?",
      answer: "Do profesjonalnej strony restauracji powinienes miec: zdjecia dan z menu (co najmniej 10-15), zdarmowe wnetrza restauracji, zdjecia zespolu, oraz zdjecia z wydarzen i promocji. Zalecamy zatrudnic fotografa specjalizujacego sie w fotografii kulinarnej, aby zapewnic wysokosc jakosci. Zdarmowe zdjecia powinny byc w rozdzielczosci co najmniej 1200x800px."
    },
    {
      question: "Czy warto miec strone czy tylko profil na Facebook?",
      answer: "Posiadanie wlasnej strony internetowej jest zdecydowanie warte inwestycji. Podczas gdy Facebook jest wazny do marketingu, wlasna strona daje Ci penska kontrole, javi sie w wynikach wyszukiwarki Google, buduje wiarygodnosc, i nie jest zalezna od zmian algorytmu Facebooka. Idealne jest posiadanie zarówno strony jak i profilu na social media dla maksymalnego zasiegu."
    }
  ];

  const articleSchema = {
    headline: "Strona internetowa dla restauracji — co powinna zawierac i ile kosztuje?",
    description: "Kompletny przewodnik po stronach internetowych dla restauracji. Dowiedz sie, co powinna zawierac strona restauracji, ile kosztuje, i jak pozycjonowac sie w Google.",
    author: "Fotz.pl",
    datePublished: "2026-04-12",
    dateModified: "2026-04-12"
  };

  return (
    <>
      <SEOHead
        title="Strona internetowa dla restauracji — co powinna zawierac i ile kosztuje? | Fotz.pl"
        description="Kompletny przewodnik po stronach internetowych dla restauracji. Dowiedz sie, co powinna zawierac strona restauracji, ile kosztuje, i jak pozycjonowac sie w Google."
        canonical="https://fotz.pl/blog/strona-internetowa-dla-restauracji"
        ogImage="https://fotz.pl/og-restaurant.jpg"
      />

      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema {...articleSchema} />
      <FAQSchema items={faqItems} />

      <Layout>
        {/* Breadcrumbs */}
        <PageBreadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-950 via-red-950 to-orange-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strona internetowa dla restauracji
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-12">
              Kompletny przewodnik — co powinna zawierac, ile kosztuje, i jak pozycjonowac sie w Google
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl md:text-3xl font-bold">Od 1500 zl</div>
                <div className="text-sm text-orange-100 mt-2">Strona od</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl md:text-3xl font-bold">Obowiązkowe</div>
                <div className="text-sm text-orange-100 mt-2">Menu online</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl md:text-3xl font-bold">+35%</div>
                <div className="text-sm text-orange-100 mt-2">Rezerwacje online</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl md:text-3xl font-bold">5-14 dni</div>
                <div className="text-sm text-orange-100 mt-2">Realizacja</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          {/* Section 1: Why Restaurant Needs Website */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Dlaczego restauracja potrzebuje strony internetowej?</h2>

              <p className="text-gray-700 mb-4">
                W dzisiejszych czasach strona internetowa dla restauracji nie jest luksusem, ale koniecznoscia. Statystyki jasno pokazują, że 89% ludzi szuka restauracji online przed pierwszą wizytą. Google zaś coraz bardziej preferyje restauracje z profesjonalnym stronami internetowymi, zwłaszcza w lokalnych wynikach wyszukiwania.
              </p>

              <p className="text-gray-700 mb-4">
                Najwazniejszy powod? Twoi potencjalni klienci szukaja nas na urządzeniach mobilnych. W 2024 roku ponad 75% wyszukiwan restauracji to sroki z telefonu. Bez strony internetowej lub z źle zaprojektowana strona responsywna, tracimy konkurencyjna zaletę wobec restauracji, które zainwestowały w profesjonalna obecnosc online.
              </p>

              <p className="text-gray-700 mb-4">
                Druga kwestia to zaufanie. Potencjalni klienci chcą zobaczyc rzeczywiste zdjecia dan, przeczytac opinie, poznać godziny otwarcia, i zobaczyc lokalizacje restauracji. Strona internetowa jest najlepszym miejscem do budowania tego zaufania. Profile na Facebooku sa uzupelnieniem, ale nie zamienią wlasnej, profesjonalnej strony internetowej.
              </p>

              <p className="text-gray-700 mb-6">
                Dlatego inwestycja w strone internetowa dla restauracji to zwraca sie szybko poprzez zwiększona liczbe zamowen, rezerwacji, i budowanie stalych klientow.
              </p>
            </section>
          </FadeInView>

          {/* Section 2: What Should Restaurant Website Contain */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Co powinna zawierac strona restauracji?</h2>

              <p className="text-gray-700 mb-6">
                Efektywna strona internetowa dla restauracji powinna zawierac konkretne elementy, które przekonują klientów do wizyta i zamawiania:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                <h3 className="font-bold text-lg mb-4">Niezbędne elementy strony restauracji:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span><strong>Menu z cenami</strong> — interaktywne lub jako PDF, podzielone na kategorie podan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span><strong>Galeria zdjec</strong> — profesjonalne zdarmowe dan i wnetrza restauracji</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span><strong>Mapa i godziny otwarcia</strong> — integracja z Google Maps i wskazanie dni wolnych</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span><strong>System rezerwacji stolika</strong> — mozliwosc rezerwacji online 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span><strong>System zamowen online</strong> — mozliwosc zamawiania na wynos i dostawę</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span><strong>Opinie i recenzje Google</strong> — widget z opiniami klientow ze spozna dzis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">✓</span>
                    <span><strong>Dane kontaktowe</strong> — numer telefonu, email, formularz kontaktowy</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-4">
                Dodatkowo warty dodac sekcje o promocjach i specjalnych ofertach, informacje o allergii, i opcje dla dietetów. Jesli restauracja oferuje catering lub imprezy prywatne, powinna to byc wyraźnie zaznaczone na stronie.
              </p>
            </section>
          </FadeInView>

          {/* Section 3: Online Menu - Key to Google Success */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Menu online — klucz do sukcesu w Google</h2>

              <p className="text-gray-700 mb-4">
                Menu online to najwazniejszy element strony restauracji z punktu widzenia SEO i konwersji. Dlaczego? Ponad 40% osob szukajacych restauracji wpisuja w Google frazy takie jak "pizza brzesk", "sushi warszawa", lub "menu restauracji X". Jesli Twoje menu jest dostepne online i dobrze zoptymalizowane, pojawisz sie w tych wynikach.
              </p>

              <p className="text-gray-700 mb-4">
                Menu online powinno byc:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Interaktywne z wysukiwarka i filtrami (weganski, bez glutenu itp.)</li>
                <li>Podzielone na jasne kategorie (przystawki, glówne, desery, napoje)</li>
                <li>Zoptymalizowane dla urzadzen mobilnych (szybkie zaladowanie)</li>
                <li>Ze zdarmowymi produktow i cenami (kluczowe dla SEO)</li>
                <li>Ze schematem markup dla Google (Recipe or Menu schema)</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Schema markup to specjalny kod HTML, ktory mówi wyszukiwarkom Google, ze to jest menu restauracji. Umozliwia to Google pokazanie Twoich dan i cen bezposrednio w wynikach wyszukiwania, co zwiekszea CTR (click-through rate) i liczbe zamowen.
              </p>

              <p className="text-gray-700">
                Dodatkowo, regularne aktualizacje menu (nowe dania, sezonowe specjalnosci) wyslatuja do Google sygnal, ze strona jest aktywna i aktualna, co pozytywnie wplywa na ranking.
              </p>
            </section>
          </FadeInView>

          {/* Section 4: Online Reservation Systems */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Rezerwacja stolika przez strone — systemy i koszty</h2>

              <p className="text-gray-700 mb-6">
                System rezerwacji online to kluczowy element, ktory pomaga organizować rezerwacje, zmniejsza nieporozumienia, i pozwala klientom rezerwować o kazdej porze. Dostepne sa kilka opcji:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-gray-300 p-4 text-left font-bold">Typ rezerwacji</th>
                      <th className="border border-gray-300 p-4 text-left font-bold">Koszt</th>
                      <th className="border border-gray-300 p-4 text-left font-bold">Zalety</th>
                      <th className="border border-gray-300 p-4 text-left font-bold">Wady</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Prosta forma HTML</td>
                      <td className="border border-gray-300 p-4">Darmowa</td>
                      <td className="border border-gray-300 p-4">Najtansze, integracja ze stona</td>
                      <td className="border border-gray-300 p-4">Wymaga recnego zarządzania, brak automatyzacji</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">OpenTable</td>
                      <td className="border border-gray-300 p-4">0-100 zl/mies</td>
                      <td className="border border-gray-300 p-4">Popularna, integracja CRM, male opłaty za rezerwacje</td>
                      <td className="border border-gray-300 p-4">Prowizje za rezerwacje, zmniejszony kontrola</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Restaumatic</td>
                      <td className="border border-gray-300 p-4">50-300 zl/mies</td>
                      <td className="border border-gray-300 p-4">Polska firma, dobra obsługa, integracja SMS</td>
                      <td className="border border-gray-300 p-4">Dodatkowe koszty za SMS, integracje</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Niestandardowe rozwiazanie</td>
                      <td className="border border-gray-300 p-4">500-2000 zl</td>
                      <td className="border border-gray-300 p-4">W pełni dostosowane, własna kontrola, niskie opłaty stale</td>
                      <td className="border border-gray-300 p-4">Wyższa cena wstepna, wymaga obsługi technicznej</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700">
                Dla malych restauracji najlepszym wyborem jest zwykle forma HTML (darmowa) lub Restaumatic. Dla wiekszych sieci, OpenTable lub niestandardowe rozwiazanie.
              </p>
            </section>
          </FadeInView>

          {/* Section 5: Pricing */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Ile kosztuje strona dla restauracji?</h2>

              <p className="text-gray-700 mb-6">
                Koszt strony dla restauracji zalety od zakresu i funkcjonalnosci. Oto ogolny przydział kosztow:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border border-gray-300 p-4 text-left font-bold">Typ strony</th>
                      <th className="border border-gray-300 p-4 text-left font-bold">Cena</th>
                      <th className="border border-gray-300 p-4 text-left font-bold">Czas realizacji</th>
                      <th className="border border-gray-300 p-4 text-left font-bold">Co zawiera</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Prosta wizytowka</td>
                      <td className="border border-gray-300 p-4">800-1500 zl</td>
                      <td className="border border-gray-300 p-4">3-5 dni</td>
                      <td className="border border-gray-300 p-4">Kontakt, menu PDF, mapa, basic info</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Strona z menu online</td>
                      <td className="border border-gray-300 p-4">1500-3000 zl</td>
                      <td className="border border-gray-300 p-4">5-10 dni</td>
                      <td className="border border-gray-300 p-4">Menu online, galeria, rezerwacja, opinie</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Pelna strona z zamawianiami</td>
                      <td className="border border-gray-300 p-4">3000-7000 zl</td>
                      <td className="border border-gray-300 p-4">10-21 dni</td>
                      <td className="border border-gray-300 p-4">Zamowienia online, platnosci, CMS, integracje</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-bold">Zaawansowana platforma</td>
                      <td className="border border-gray-300 p-4">7000+ zl</td>
                      <td className="border border-gray-300 p-4">21-45 dni</td>
                      <td className="border border-gray-300 p-4">Wszystko + system lojalnosciowy, API, app mobilna</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                Dodatkowo, mowa byc dodatkowych kosztow: domena (ok. 50-200 zl/rok), hosting (100-500 zl/rok), certyfikat SSL (gratis u wiekszosci dostawcow), i opcjonalne pluginy do systemow zamowen (50-500 zl/mies).
              </p>

              <p className="text-gray-700">
                Zwrot z inwestycji nastepuje zwykle w ciagu 3-6 miesiecy, kiedy zwieksza sie liczba zamowen i rezerwacji online.
              </p>
            </section>
          </FadeInView>

          {/* Section 6: SEO for Restaurants */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">SEO dla restauracji — jak pojawic sie w Google?</h2>

              <p className="text-gray-700 mb-4">
                Posiadanie strony internetowej to tylko pierwsza czesc. Wazniejsze jest, aby Twoja strona pojawila sie w wynikach wyszukiwania Google, zwłaszcza w lokalnych wynikach i na Google Maps.
              </p>

              <p className="text-gray-700 mb-6">
                Kluczowe elementy SEO dla restauracji to:
              </p>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h4 className="font-bold text-lg mb-2">Google My Business</h4>
                  <p className="text-gray-700">Musisz zaalozyc lub zaaktualizowac wpis Google My Business z prawidlową nazwa, adresem, numerem telefonu, godzinami otwarcia, i zdarmowymi zdjec i wideo. To najwazniejsza rzecz dla lokalnego SEO.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h4 className="font-bold text-lg mb-2">Recenzje i oceny</h4>
                  <p className="text-gray-700">Pozytywne recenzje na Google sa kluczowe dla rankingu. Zachecaj klientow do zostawiania recenzji, reaguj na opinie, i zarządzaj swoją reputacja online. Restauracje z wiecej zdarmowymi i wyższymi ocenami pojawią sie wyżej w wynikach.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h4 className="font-bold text-lg mb-2">Slowa kluczowe</h4>
                  <p className="text-gray-700">Zoptymalizuj swoją strone dla slow kluczowych takich jak "pizza warszawa", "restauracja polska bialystok", "menu sushi gdańsk". Slow te powinny byc w tytule, metatagu description, naglowkach, i treści.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h4 className="font-bold text-lg mb-2">Schema Markup</h4>
                  <p className="text-gray-700">Dodaj schema markup (Restaurant, Menu, Recipe) do swojej strony. Pomaga to Google zrozumiec zawartość i poprawia widocznosc w wynikach.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h4 className="font-bold text-lg mb-2">Mobile Responsiveness</h4>
                  <p className="text-gray-700">Twoja strona musi byc w pełni responsywna i szybka na urządzeniach mobilnych. Google priorytetyzuje strony mobilne, a 75% wyszukiwan to sroki z telefonu.</p>
                </div>
              </div>

              <p className="text-gray-700">
                Wdrażanie tych strategii SEO zwiekszea widocznosc Twojej restauracji w Google i przyciąga wiecej klientow organicznych.
              </p>
            </section>
          </FadeInView>

          {/* Section 7: Fotz.pl Services */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Fotz.pl — strony dla restauracji i gastronomii</h2>

              <p className="text-gray-700 mb-4">
                W Fotz.pl specjalizujemy sie w tworzeniu stron internetowych dla restauracji, kawiarni, pizzerii, i innych biznesow z branży gastronomii. Nasze doświadczenie obejmuje setki zrealizowanych projektow dla restauracji w Polsce.
              </p>

              <p className="text-gray-700 mb-4">
                Nasza typowa strona dla restauracji zawiera:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Responsywny design, optymalizowany dla mobilnych i desktopowych</li>
                <li>Menu online z interaktywnym wyszukiwaniem i filtrami</li>
                <li>System rezerwacji online 24/7</li>
                <li>Integracja z Google Maps i Google My Business</li>
                <li>Schema markup dla lepszego SEO</li>
                <li>Widget opini i recenzji ze spozna dzis</li>
                <li>Panel administracyjny do zarządzania menu, rezerwacjami, i promocjami</li>
                <li>Optymalizacja szybkosci strony i Core Web Vitals</li>
              </ul>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 rounded-lg p-6 mb-6">
                <p className="text-gray-800">
                  Chcesz dowiedziec sie wiecej o naszych usługach dla restauracji? Odwiedz nasz <Link to="/uslugi/strony-internetowe" className="font-bold text-orange-700 hover:text-red-700 underline">strony internetowe dla biznesu</Link> lub <Link to="/kontakt" className="font-bold text-orange-700 hover:text-red-700 underline">skontaktuj sie z nami</Link> aby omówic Twoje potrzeby.
                </p>
              </div>

              <p className="text-gray-700">
                Nasza dedykowana druzyna projektantow, programistow i SEO specjalistow pracuje nad tym, aby Twoja restauracja byla widoczna w Google i przyciągała wiecej klientow.
              </p>
            </section>
          </FadeInView>

          {/* FAQ Section */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Czesto zadawane pytania (FAQ)</h2>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <details key={index} className="border border-gray-300 rounded-lg p-6 cursor-pointer hover:border-orange-500 transition-colors">
                    <summary className="font-bold text-lg text-gray-900 flex items-center justify-between">
                      <span>{item.question}</span>
                      <span className="ml-4">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* CTA Section */}
          <FadeInView>
            <section className="bg-slate-900 text-white py-12 px-8 rounded-lg my-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Gotowy do wdrożenia strony dla Twojej restauracji?</h2>
                <p className="text-xl text-gray-200 mb-8">
                  Umożliwimy Ci powiększyć liczbe zamowen i rezerwacji dzięki profesjonalnej stronie internetowej.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/uslugi/strony-internetowe"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    Sprawdz nasze uslugi
                  </Link>
                  <Link
                    to="/kontakt"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    Skontaktuj sie z nami
                  </Link>
                </div>
              </div>
            </section>
          </FadeInView>
        </article>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
}
