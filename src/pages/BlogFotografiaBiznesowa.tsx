import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Czym rozni sie fotografia biznesowa od zwyklych zdjec?",
    answer:
      "Fotografia biznesowa to profesjonalnie wykonane zdjecia, ktorych celem jest promocja marki, pracownikow czy wartosci firmy. W przeciwienstwie do zwyklych zdjec domowych, sesja biznesowa obejmuje profesjonalne oswietlenie, retusz, odpowiedni outfit oraz kierowanie pozami. Zdjecia sa wykonane w studiu lub na wybranej lokacji, z wykorzystaniem specjalistycznego sprzetu fotograficznego.",
  },
  {
    question: "Ile kosztuje sesja biznesowa z fotografem?",
    answer:
      "Koszt sesji biznesowej zalezy od jej rodzaju. Headshot (jedno zdjecie portretowe) kosztuje od 300 do 600 zlotych. Sesja mini team do 5 osob to 800-1500 zlotych. Pelnoprawna sesja teamowa dla 5-20 osob to 1500-3500 zlotych. Sesja brandingowa na caly dzien kosztuje 2500-6000 zlotych. Event firmowy to 800-2500 zlotych w zaleznosci od czasu.",
  },
  {
    question: "Jak dlugo trwa sesja fotografii biznesowej?",
    answer:
      "Czas sesji zalezy od jej zakresu. Headshot trwa 30-60 minut. Sesja mini team trwa 1-2 godziny. Pelnoprawna sesja teamowa trwa 3-4 godziny. Sesja brandingowa to caly dzien (6-8 godzin). Event firmowy to czas rzeczywisty trwania wydarzenia. Przed sesja ustalamy harmonogram i plan zdjec z Toba.",
  },
  {
    question: "Ile zdjec otrzymam po sesji biznesowej?",
    answer:
      "Liczba zdjec zalezy od rodzaju sesji. Headshot to 5-10 zdjec po retuszu. Sesja mini team to 20-30 zdjec. Pelnoprawna sesja teamowa to 50-80 zdjec. Sesja brandingowa full day to 100+ zdjec z kilku lokalizacji. Wszystkie zdjecia sa przygotowywane do wykorzystania w mediach spolecznych, stronie WWW i materiałach promocyjnych.",
  },
  {
    question: "Czy musze przyjsc do studio, czy fotograf moze przyjsc do mnie?",
    answer:
      "Sesje biznesowe mozemy przeprowadzic zar6wno w naszym studiu fotograficznym w Poznaniu, jak i u Ciebie w biurze lub na innej wybranej lokacji. Jezeli chcesz pokazac branding swojej firmy, lokacja u Ciebie jest idealnym rozwiazaniem. Jeśli wolisz neutralne tlo i profesjonalne oswietlenie, zapraszamy do naszego studia.",
  },
  {
    question: "Jak przygotowac strojenie na sesje biznesowa?",
    answer:
      "Na sesje biznesowa radzamy ubrania, ktore nosisz na co dzien do pracy. Unikaj duzych printow, zby nie odwracaly uwagi od Twojej twarzy. Zdecyduj sie na kolory, ktore Ci schlebiaja - zmrocze lub pastelie. Koszule bez krawatak lub z krawatem wyglądaja profesjonalnie. Zadbaj o makijaz, bo przy profesjonalnym oswietleniu kazdry szczegol jest widoczny. Przygotuj 2-3 outfity, abyś mogl zmieniac sie podczas sesji.",
  },
  {
    question: "Czy retusz zdjec jest wliczony w cene?",
    answer:
      "Tak, wszystkie nasze oferty obejmuja profesjonalny retusz zdjec. Obejmuje to usuwanie niedoskonalosci skory, wyrownywanie koloru, korekcje jasnosci i kontrastu oraz retusz postury. Retusz jest kluczowa czescia procesu fotografii biznesowej - zdjecia powinny pokazywac Ciebie w najlepszym swietle.",
  },
  {
    question: "Jakie zdjecia sa potrzebne na profil LinkedIn?",
    answer:
      "Na LinkedIn potrzebujesz profesjonalnego headshotu z czystym, neutralnym tlem. Zdjecie powinno byc portretowe, gdzie twoja twarz zajmuje okolo 50-60% ramki. Usmiechnij sie naturalnie, spoglądaj w kamerę. Ponadto mozesz dodac 2-3 dodatkowe zdjecia z sesji, ktore pokazuja Cie w kontekscie pracy. Profesjonalne zdjecie na LinkedIn zwiekszy liczbe profile views i wiadomosci biznesowych nawet o 36 razy.",
  },
];

export default function BlogFotografiaBiznesowa() {
  const breadcrumbItems = [
    { label: "Strona glowna", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "Fotografia biznesowa", path: "/blog/fotografia-biznesowa" },
  ];

  const pricingData = [
    {
      type: "Headshot (1 osoba)",
      price: "300-600 zl",
      duration: "30-60 min",
      includes: "5-10 zdjec po retuszu",
    },
    {
      type: "Sesja mini team (do 5 osob)",
      price: "800-1500 zl",
      duration: "1-2h",
      includes: "20-30 zdjec",
    },
    {
      type: "Sesja teamowa (5-20 osob)",
      price: "1500-3500 zl",
      duration: "3-4h",
      includes: "50-80 zdjec",
    },
    {
      type: "Sesja brandingowa full day",
      price: "2500-6000 zl",
      duration: "caly dzien",
      includes: "100+ zdjec, kilka lokalizacji",
    },
    {
      type: "Event firmowy",
      price: "800-2500 zl",
      duration: "wg czasu",
      includes: "pelna dokumentacja",
    },
  ];

  const businessPhotoTypes = [
    {
      title: "Fotografia korporacyjna",
      description:
        "Zdjecia dyrekcji, zespolow i pracownikow w kontekscie korporacyjnym. Profesjonalne portrety, ktore pokazuja sile i zespolowość firmy.",
    },
    {
      title: "Headshoty",
      description:
        "Profesjonalne portrety dla LinkedIn, stron internetowych i materiałów promocyjnych. Jedno zdjecie, ktore mowi wszystko o Tobie.",
    },
    {
      title: "Sesja brandingowa",
      description:
        "Zdjecia lifestylowe, ktore opowiadaja storie Twojej marki. Pokazuja pracę, passion i kultur firmy. Idealne do bloga i mediów spolecznych.",
    },
    {
      title: "Eventy firmowe",
      description:
        "Dokumentacja konferencji, szkolenia, imprezy integracyjne czy otwarcia. Professionalne zdjecia, ktore uchwycaja energie i atmosfere Twojego eventu.",
    },
    {
      title: "Behind the scenes",
      description:
        "Zdjecia kulisów pracy, dni codziennej w biurze czy podczas producji. Pokazuja autentycznosc firmy i buduja wiez z publicznoscia.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Fotografia biznesowa i firmowa — co to jest, ile kosztuje, jak przygotowac sesje? | Fotz.pl"
        description="Przewodnik po fotografii biznesowej. Dowiedz sie, co to jest fotografia korporacyjna, ile kosztuje sesja biznesowa i jak sie do niej przygotowac. Ceny, poradniki i praktyczne porady."
        canonical="https://fotz.pl/blog/fotografia-biznesowa"
        keywords="fotografia biznesowa, fotografia firmowa, fotografia korporacyjna, headshoty, sesja biznesowa"
      />

      <ArticleSchema
        title="Fotografia biznesowa i firmowa — co to jest, ile kosztuje, jak przygotowac sesje?"
        description="Kompletny przewodnik po fotografii biznesowej. Dowiedz sie wszystkiego o fotografii korporacyjnej, cenach, rodzajach sesji i przygotowaniu."
        author="Fotz.pl"
        datePublished="2025-04-12"
        image="https://fotz.pl/images/fotografia-biznesowa-hero.jpg"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <FAQSchema faqItems={faqItems} />

      <PageBreadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-900">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
            Fotografia / Branding
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fotografia biznesowa i firmowa
          </h1>
          <p className="text-lg text-amber-100 mb-8">
            Profesjonalne zdjecia, ktore zwiększa widocznosc Twojej marki, pokazuje wartosc zespolu i buduje zaufanie klientow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-amber-300 font-bold">Sesja biznesowa</div>
              <div className="text-white text-2xl font-bold mt-2">od 600 zl</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-amber-300 font-bold">Czas sesji</div>
              <div className="text-white text-2xl font-bold mt-2">2-4h</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-amber-300 font-bold">Zdjecia gotowe</div>
              <div className="text-white text-2xl font-bold mt-2">w 48h</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-amber-300 font-bold">Retusz</div>
              <div className="text-white text-2xl font-bold mt-2">w cenie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Section 1: What is Business Photography */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Co to jest fotografia biznesowa?
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Fotografia biznesowa, zwana takze fotografia korporacyjna czy firmowa, to profesjonalne zdjecia wykonane w celu promocji marki, produktow, usług i zespolu. W przeciwienstwie do fotografi zwyczajnych czy hobbystycznych, sesja biznesowa wymaga specjalistycznego podejscia, profesjonalnego sprzetu, oswietlenia i retuszu.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Fotografia biznesowa obejmuje porterty pracownikow (headshoty), zdjecia zespolow, fotografie w biurze lub na lokacji, dokumentacje eventow firmowych, a takze sesje brandingowe, ktorych celem jest opowiedzenie historii Twojej firmy. Zdjecia te wykorzystywane sa na stronach WWW, w mediach spolecznych, w katalogach produktow, prezentacjach i materialach promocyjnych.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Glowna roznica miedzy fotografia biznesowa a fotografia produktowa jest fokus na ludzi i atmosfere marki. Podczas gdy fotografia produktowa pokazuje szczegoly i cechy produktu, fotografia biznesowa pokazuje wartosc, kultur i energie firmy. Obie są istotne dla pelnego wizerunku biznesu.
            </p>
            <p className="text-lg text-slate-700">
              Profesjonalna fotografia biznesowa to inwestycja w wizerunek firmy, która zwraca sie wielokrotnie poprzez wiekszy zainteresowanie klientow, lepsza pozycje w wyszukiwarkach i budowanie zaufania na rynku.
            </p>
          </section>
        </FadeInView>

        {/* Section 2: Types of Business Photography */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Rodzaje fotografii biznesowej
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Istnieje wiele rodzajow fotografii biznesowej, kazdy z innymi celami i zastosowaniami. Poniżej opisujemy 5 glownych kategorii:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessPhotoTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-slate-700">{type.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* Section 3: Pricing */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Fotografia biznesowa cennik 2025
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Ponizej znajduje sie cennik naszych uslug fotografii biznesowej. Ceny zalezy od zakresu sesji, liczby osob i czasu realizacji. Wszystkie pakiety zawieraja profesjonalny retusz i przygotowanie zdjec do druku lub publikacji online.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="border border-slate-700 px-4 py-3 text-left">
                      Typ sesji
                    </th>
                    <th className="border border-slate-700 px-4 py-3 text-left">
                      Cena
                    </th>
                    <th className="border border-slate-700 px-4 py-3 text-left">
                      Czas
                    </th>
                    <th className="border border-slate-700 px-4 py-3 text-left">
                      Co zawiera
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border border-slate-200 px-4 py-3 font-medium text-slate-900">
                        {row.type}
                      </td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-700">
                        {row.price}
                      </td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-700">
                        {row.duration}
                      </td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-700">
                        {row.includes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-600 mt-6">
              Ceny sa orientacyjne i moga sie roznic w zaleznosci od konkretnych wymagan sesji. Zapraszamy do kontaktu aby omowic szczegoly i otrzymac personalizowana oferte.
            </p>
          </section>
        </FadeInView>

        {/* Section 4: How to Prepare */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Jak przygotowac sie do sesji biznesowej?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Aby sesja fotograficzna byla udana i zdjecia wyglądały najlepiej, warto sie do niej przygotowac. Poniżej znajduje sie 7 praktycznych wskazowek:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  1. Wybierz odpowiedni stoj
                </h4>
                <p className="text-slate-700">
                  Ubierz sie w stroje, ktore nosisz normalnie do pracy. Unikaj zbyt kolorowych printow lub wzorów, ktore odwracaja uwage od Twojej twarzy. Kolory neutralne i pastelie to bezpieczny wybor. Powinienes czuc sie komfortowo i naturalnie.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  2. Zadbaj o makijaz
                </h4>
                <p className="text-slate-700">
                  Makijaz powinien byc naturalny, ale wyrazisty, bo przy profesjonalnym oswietleniu kazdy szczegol jest widoczny. Zalecamy wizyté u makijazystki lub przygotowanie sie kilka dni przed sesja. Mezczyzni powinni sie ogolic lub przygorowac brode.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  3. Ustal lokalizacje
                </h4>
                <p className="text-slate-700">
                  Zdecyduj, czy chcesz sesje w naszym studiu fotograficznym w Poznaniu czy u siebie w biurze. Studio oferuje kontrolowane oswietlenie i neutralne tlo, a lokacja u ciebie pokazuje autentycze biuro i branding firmy.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  4. Przygotuj rekwizyty i elementy
                </h4>
                <p className="text-slate-700">
                  Jezeli chcesz, aby zdjecia pokazywaly Twoje biuro czy produkty, przygotuj odpowiednie rekwizyty. Czyste biurko, zadbane otoczenie i elementy, ktorych chcesz pokazac, to klucz do udanych zdjec.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  5. Omow briefing z fotografem
                </h4>
                <p className="text-slate-700">
                  Przed sesja spotkaj sie z fotografem lub porozmawiaj o wizji zdjec. Jakie sa Twoje cele? Jaki styl preferujesz? Jakie zdjecia sa najwazniejsze? Czym szybciej omowisz szczegoly, tym lepsze rezultaty.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  6. Przygotuj 2-3 outfity
                </h4>
                <p className="text-slate-700">
                  Staraj sie przygotowac kilka roznych strojow, aby miec roznorodnosc zdjec. Jedna sesja z kilkoma outfitami pozwala na wiekszy wybor zdjec. Pamietaj, zeby stroje sie nie przecinaly kolorystycznie.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  7. Wyspij sie i nawodnij
                </h4>
                <p className="text-slate-700">
                  Dzien przed sesja wyspij sie dobrze. Dzien sesji pij duzo wody, aby twoja skora wyglądała zdrow i swieza. Unikaj alkoholu i zbyt wczesnych pobudek, ktore moga wpłynac na zmeczenie na twarzy.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Section 5: Studio vs Location */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Gdzie robic sesje biznesowa — studio vs lokacja?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Jedna z najwazniejszych decyzji przed sesja jest wybor miejsca. Poniżej porównujemy studio fotograficzne z sesja na lokacji u klienta:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Studio */}
              <div className="border border-slate-300 rounded-lg overflow-hidden">
                <div className="bg-slate-900 text-white p-4">
                  <h3 className="text-2xl font-bold">Studio fotograficzne</h3>
                </div>
                <div className="p-6">
                  <p className="font-bold text-slate-900 mb-4">Zalety:</p>
                  <ul className="space-y-2 mb-6 text-slate-700">
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Kontrolowane oswietlenie profesjonalne</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Neutralne tlo, bez rozpraszaczy</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Sprzet zawsze gotowy i sprawdzony</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Powtarzalne rezultaty</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Szybsza sesja, mniej czasu potrzebne</span>
                    </li>
                  </ul>

                  <p className="font-bold text-slate-900 mb-4">Wady:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Mniej autentycznosci i kontekstu marki</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Jezdz do studia wymaga czasu</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Podobne tla dla roznych klientow</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Location */}
              <div className="border border-slate-300 rounded-lg overflow-hidden">
                <div className="bg-amber-700 text-white p-4">
                  <h3 className="text-2xl font-bold">Sesja na lokacji</h3>
                </div>
                <div className="p-6">
                  <p className="font-bold text-slate-900 mb-4">Zalety:</p>
                  <ul className="space-y-2 mb-6 text-slate-700">
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Autentyczne otoczenie i branding marki</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Pokazuje rzeczywistej biuro i atmosfere</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Wieksze mozliwosci i roznorodnosc zdjec</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Pracownicy sa w naturalnym srodowisku</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">+</span>
                      <span>Latwiej dla zespolu bez transportu</span>
                    </li>
                  </ul>

                  <p className="font-bold text-slate-900 mb-4">Wady:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Mniej kontroli nad oswietleniem</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Moze byc rozpraszajace otoczenie</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">-</span>
                      <span>Dłuzsza sesja ze wzgledu na warunki</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-slate-700 mt-8">
              W Fotz Studio oferujemy obie opcje. Jezeli chcesz sesje z autentycznym kontekstem Twojej marki, zapraszamy do Twojego biura w Poznaniu lub bez problemu dojedziemy do Ciebie na lokacje. Jesli preferujesz profesjonalne oswietlenie i neutralne tlo, nasze studio jest idealnym rozwiazaniem.
            </p>
          </section>
        </FadeInView>

        {/* Section 6: LinkedIn */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Fotografia biznesowa a LinkedIn — dlaczego profesjonalne zdjecia maja znaczenie
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              LinkedIn to platforma, gdzie wizualna prezentacja ma ogromne znaczenie. Statystyki pokazuja, że:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                <div className="text-4xl font-bold text-amber-700 mb-2">14x</div>
                <p className="text-slate-700">
                  Wiecej profile views dla osob z profesjonalnym zdjeciem profilowym
                </p>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                <div className="text-4xl font-bold text-amber-700 mb-2">36x</div>
                <p className="text-slate-700">
                  Wiecej wiadomosci biznesowych dla osob z profesjonalnym headshelem
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 mb-6">
              Profesjonalne zdjecie profilowe na LinkedIn to pierwsza rzecz, jaka widzą potencjalni klienci, partnerzy czy recluiterzy. Zdjecie z telefonu lub ze starego archiwum nie robi dostatecznie dorego wrazenia. Profesjonalny headshot wykonany przez fotografa:
            </p>

            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex">
                <span className="mr-3 text-amber-700 font-bold">→</span>
                <span>Wyglada profesjonalnie i godnie zaufania</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-amber-700 font-bold">→</span>
                <span>Jest wyraziste i dobrze oswietlone</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-amber-700 font-bold">→</span>
                <span>Pokazuje Cie w najlepszym swieczle</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-amber-700 font-bold">→</span>
                <span>Zwiekszaj zainteresowanie i zaangazowanie</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-amber-700 font-bold">→</span>
                <span>Pomaga wyrosnac sie z tłumu</span>
              </li>
            </ul>

            <p className="text-lg text-slate-700">
              Algorytm LinkedIn preferuje posty i profile z wysokojakosciowymi zdjeciam. Jezeli chcesz rozwijac swoja marke personalną i zwiekszyc widzialnosc na LinkedIn, profesjonalne zdjecie to najlepsze miejsce do rozpoczecia.
            </p>
          </section>
        </FadeInView>

        {/* Section 7: About Us */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Fotografia firmowa w Fotz Studio
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              W Fotz Studio specjalizujemy sie w profesjonalnej fotografii biznesowej. Nasz zespol fotografow ma wieloletnie doswiadczenie w obsludze sesji dla firm z roznych branż — od startupow po duze korporacje.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Co oferujemy:
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex">
                  <span className="mr-3 text-amber-700 font-bold">✓</span>
                  <span>Profesjonalne studio fotograficzne w Poznaniu z nowoczesnym oświetleniem</span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-amber-700 font-bold">✓</span>
                  <span>Sesje na lokacji u Ciebie — biuro, fabryka, atelier czy inne miejsce</span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-amber-700 font-bold">✓</span>
                  <span>Profesjonalny retusz i obróbka wszystkich zdjec</span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-amber-700 font-bold">✓</span>
                  <span>Szybka realizacja — zdjecia w 48 godzin</span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-amber-700 font-bold">✓</span>
                  <span>Doradztwo stylistyczne i kierowanie pozami</span>
                </li>
                <li className="flex">
                  <span className="mr-3 text-amber-700 font-bold">✓</span>
                  <span>Zdjecia przygotowane do druku i publikacji online</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-slate-700 mb-6">
              Nasi fotografowie pracuja z wszelkimi typami sesji biznesowych — od indywidualnych headshot po sesje team, eventy firmowe i sesje brandingowe. Zapraszamy do{" "}
              <Link
                to="/uslugi/fotografia"
                className="text-amber-700 font-bold hover:underline"
              >
                naszej strony usług fotograficznych
              </Link>{" "}
              aby zobaczyc portfolio i wiecej szczegołow.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-slate-700">
                Czy jestes gotów na profesjonalna fotografie biznesowa dla Twojej firmy? Skontaktuj sie z nami aby omowic szczegoly Twojej sesji i otrzymac personalizowana oferte.
              </p>
            </div>
          </section>
        </FadeInView>

        {/* FAQ Section */}
        <FadeInView>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Najczestsze pytania o fotografie biznesowa
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="border border-slate-300 rounded-lg overflow-hidden"
                >
                  <summary className="bg-slate-100 px-6 py-4 cursor-pointer font-bold text-slate-900 hover:bg-slate-200">
                    {item.question}
                  </summary>
                  <div className="px-6 py-4 bg-white text-slate-700 border-t border-slate-300">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </FadeInView>

        {/* CTA Section */}
        <FadeInView>
          <section className="bg-slate-900 text-white rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Rozpocznij swoja sesje biznesowa juz dzisiaj
            </h2>
            <p className="text-lg text-slate-200 mb-8">
              Profesjonalne zdjecia czekaja na Ciebie. Skontaktuj sie z nami aby omowic szczegoly i zarezerwowac sesje fotograficzna.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/uslugi/fotografia"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Dowiedz sie wiecej o usługach
              </Link>
              <Link
                to="/kontakt"
                className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 px-6 rounded-lg transition"
              >
                Skontaktuj sie z nami
              </Link>
            </div>
          </section>
        </FadeInView>

        {/* Related Links */}
        <FadeInView>
          <section className="border-t border-slate-300 pt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Powiazane artykuly i uslugi
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/uslugi/fotografia"
                className="border border-slate-300 rounded-lg p-6 hover:border-amber-500 hover:shadow-lg transition"
              >
                <div className="text-amber-700 font-bold text-sm mb-2">
                  USŁUGA
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Fotografia biznesowa
                </h4>
                <p className="text-slate-600 mt-2">
                  Profesjonalne sesje fotograficzne dla firm i biznesu.
                </p>
              </Link>

              <Link
                to="/blog/fotografia-produktowa-poradnik"
                className="border border-slate-300 rounded-lg p-6 hover:border-amber-500 hover:shadow-lg transition"
              >
                <div className="text-amber-700 font-bold text-sm mb-2">
                  ARTYKUŁ
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Fotografia produktowa — poradnik
                </h4>
                <p className="text-slate-600 mt-2">
                  Wszystko co musisz wiedziec o fotografii produktowej.
                </p>
              </Link>

              <Link
                to="/uslugi/fotografia"
                className="border border-slate-300 rounded-lg p-6 hover:border-amber-500 hover:shadow-lg transition"
              >
                <div className="text-amber-700 font-bold text-sm mb-2">
                  USŁUGA
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Sesje fotograficzne
                </h4>
                <p className="text-slate-600 mt-2">
                  Profesjonalne sesje dla roznych okazji i potrzeb.
                </p>
              </Link>
            </div>
          </section>
        </FadeInView>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
}
