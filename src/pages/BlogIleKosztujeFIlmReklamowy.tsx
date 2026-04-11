import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Ile kosztuje prosty spot reklamowy dla malej firmy?",
    answer:
      "Prosty spot reklamowy dla mniejszej firmy to koszt od 2000 do 5000 zlotych. W tej cenie mieszczą się produkcje z minimalna ekipa, w prostych lokalizacjach, bez skomplikowanego montażu. Jeśli chcesz dołączyć animacje lub zwiększyć jakość, cena wzrasta.",
  },
  {
    question: "Jak dlugo trwa produkcja filmu reklamowego?",
    answer:
      "Czas produkcji zależy od typu i złożoności. Proste reelsy na TikToka to 1-3 dni, spoty reklamowe 5-10 dni, a filmy korporacyjne mogą trwać nawet 3 tygodnie. Liczę w tym preprodukcję, zdjęcia i postprodukcję.",
  },
  {
    question: "Co wchodzi w sklad ceny produkcji wideo?",
    answer:
      "Cena obejmuje: scenariusz, plan zdjęciowy, wynajem sprzętu, honoraria aktorów/lektorów, montaż, koloryzację, efekty graficzne i minutę bezpłatnych poprawek. W некоторых pakietach dochodzi muzyka i prawa do użytku.",
  },
  {
    question: "Czy mozna zamowic film reklamowy bez scenariusza?",
    answer:
      "Tak, można. My stworzymy scenariusz na bazie Twojego briefu. To dodatkowy czas, ale gwarantuje, że film będzie celowy i sprzedażowy. Polecam zawsze uzgodnić scenariusz przed zdjęciami.",
  },
  {
    question: "Jaka rozdzielczosc jest potrzebna do reklamy na Facebooku?",
    answer:
      "Na Facebooku najlepiej wygląda Full HD (1920x1080). Dla Stories i Reelsów warto przygotować wersję 9:16. My dostarczamy wszystkie formaty do każdej platformy bez dodatkowych kosztów.",
  },
  {
    question: "Czym rozni sie film korporacyjny od reklamowego?",
    answer:
      "Film reklamowy skupia się na sprzedaży i konwersji. Film korporacyjny to raczej wizerunek i wartości firmy. Korporacyjny jest zwykle dłuższy, bardziej formalny i czasem mniej dynamiczny.",
  },
  {
    question: "Czy agencja dostarcza prawa do muzyki w filmie?",
    answer:
      "W standardowych pakietach dostarczamy muzykę z licencją do użytku komercyjnego w Polsce. Jeśli chcesz konkretny utwór artysty, to może być dodatkowy koszt licencji.",
  },
  {
    question: "Kiedy wybrac animacje zamiast filmowania?",
    answer:
      "Animacje są idealne dla skomplikowanych procesów, które trudno pokazać na filmie. Też są tańsze niż filmowanie z aktorami i ekipa. Dobra animacja to 1500-10000 zlotych w zależności od długości i detali.",
  },
];

const filmTypes = [
  {
    typ: "Spot reklamowy 30 sek.",
    cena: "2 000 – 8 000 zl",
    czas: "5-10 dni",
    dla: "Facebook Ads, TV regionalna",
  },
  {
    typ: "Film korporacyjny 2-3 min.",
    cena: "5 000 – 20 000 zl",
    czas: "7-21 dni",
    dla: "Strona www, prezentacje",
  },
  {
    typ: "Film produktowy / unboxing",
    cena: "1 500 – 5 000 zl",
    czas: "3-7 dni",
    dla: "E-commerce, social media",
  },
  {
    typ: "Reels / TikTok 15-60 sek.",
    cena: "500 – 2 000 zl",
    czas: "1-3 dni",
    dla: "Instagram, TikTok",
  },
  {
    typ: "Animacja 2D / motion graphics",
    cena: "1 500 – 10 000 zl",
    czas: "7-14 dni",
    dla: "Explainer video, ads",
  },
  {
    typ: "Film z drona",
    cena: "800 – 3 000 zl",
    czas: "1-3 dni",
    dla: "Nieruchomosci, events, krajobraz",
  },
  {
    typ: "Film szkoleniowy / e-learning",
    cena: "3 000 – 15 000 zl",
    czas: "10-30 dni",
    dla: "HR, onboarding, akademie",
  },
];

export default function BlogIleKosztujeFIlmReklamowy() {
  return (
    <>
      <SEOHead
        title="Ile kosztuje film reklamowy w 2025? Cennik i rodzaje produkcji | Fotz.pl"
        description="Kompletny cennik filmów reklamowych w Polsce. Dowiedz się ile kosztuje spot reklamowy, film korporacyjny i animacja. Poradnik dla firm szukających agencji produkcji wideo."
        canonical="https://fotz.pl/blog/ile-kosztuje-film-reklamowy"
      />
      <BreadcrumbSchema
        items={[
          { label: "Strona glowna", url: "https://fotz.pl" },
          { label: "Blog", url: "https://fotz.pl/blog" },
          {
            label: "Ile kosztuje film reklamowy",
            url: "https://fotz.pl/blog/ile-kosztuje-film-reklamowy",
          },
        ]}
      />
      <ArticleSchema
        headline="Ile kosztuje film reklamowy w 2025? Cennik i rodzaje produkcji"
        description="Kompletny poradnik i cennik filmów reklamowych w Polsce. Spotami reklamowe, filmy korporacyjne, animacje i wiele więcej."
        image="https://fotz.pl/img/blog-ile-kosztuje-film-reklamowy.jpg"
        datePublished="2025-04-12"
        author="Fotz Studio"
      />

      <Layout>
        <main className="w-full">
          {/* Hero Section */}
          <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-violet-950 to-purple-900 overflow-hidden py-12 md:py-20">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
              <div className="flex flex-col items-center justify-center text-center gap-6">
                <span className="inline-block px-3 py-1 bg-violet-500/20 border border-violet-400/30 rounded-full text-sm font-medium text-violet-200">
                  Video Marketing
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Ile kosztuje film reklamowy?
                </h1>

                <p className="text-lg md:text-xl text-violet-100 max-w-2xl">
                  Kompletny cennik i poradnik produkcji filmów reklamowych w Polsce. Od spotów na Facebooka po filmy korporacyjne. Sprawdz ile rzeczywiście kosztuje profesjonalny film.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-violet-300 text-sm font-medium">Spot od</p>
                    <p className="text-white text-xl font-bold mt-1">2000 zl</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-violet-300 text-sm font-medium">Czas produkcji</p>
                    <p className="text-white text-xl font-bold mt-1">3-14 dni</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-violet-300 text-sm font-medium">Jakosc</p>
                    <p className="text-white text-xl font-bold mt-1">Full HD / 4K</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-violet-300 text-sm font-medium">Animacja od</p>
                    <p className="text-white text-xl font-bold mt-1">1500 zl</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Breadcrumbs */}
          <PageBreadcrumbs />

          {/* Main Content */}
          <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
            {/* Section 1 */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ile kosztuje film reklamowy — szybka odpowiedz
                </h2>

                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Cena filmu reklamowego to nie jedna liczba, ale przedział. Spot reklamowy liczy sie od 2000 do 8000 zlotych, film korporacyjny od 5000 do 20000 zlotych. Dlaczego tak duza roznica?
                  </p>

                  <p>
                    Wszystko zalezy od tego, co chcesz osiagnac. Mały spot na Facebooka dla lokalnego sklepu to inna kwota niz profesjonalny film dla sieci handlowej.
                  </p>

                  <p>
                    Glowne czynniki, ktorych warto wiedziec: dlugosc filmu, liczba aktorow, lokalizacja zdjec, ilosc dni na produkcje, zaawansowanie montazu i efektow, czy potrzebujesz animacji, i ile poprawek planujesz.
                  </p>

                  <p>
                    W tym artykule rozwalismy cene każdego typu produkcji wideo, pokazalismy przykłady i udzielismy porad, na co uważac przed zamowieniem. Zaczynamy.
                  </p>
                </div>
              </section>
            </FadeInView>

            {/* Section 2 - Pricing Table */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Cennik filmow reklamowych 2025
                </h2>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-100 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Typ produkcji
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Cena
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Czas produkcji
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Dla czego
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filmTypes.map((film, idx) => (
                        <tr
                          key={idx}
                          className={`border-b border-gray-200 ${
                            idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                          } hover:bg-violet-50 transition-colors`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {film.typ}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {film.cena}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {film.czas}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {film.dla}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 text-gray-600 text-sm">
                  Ceny sa orientacyjne i zależa od szczegółów projektu. Skontaktuj sie z nami, aby otrzymac dokładna wycenę dla Twojej produkcji.
                </p>
              </section>
            </FadeInView>

            {/* Section 3 - Factors */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Co wplywa na cene produkcji wideo?
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "Dlugosc filmu",
                      desc: "Film 15-sekundowy to inna produkcja niz 3-minutowy. Dłuższe materiały wymagaja więcej czasu montażu i efektów.",
                    },
                    {
                      title: "Rozwiazania ekipy",
                      desc: "Kamerzysta, aktor, stylista, oświetlenie. Im wicej osób, tym wyższy koszt wynajmu i honorariów.",
                    },
                    {
                      title: "Lokalizacja zdjec",
                      desc: "Zdjecia w domowym studiu sa tańsze niz na planie w nieruchomosci. Dalekie lokalizacje wymagaja transportu.",
                    },
                    {
                      title: "Postprodukcja i efekty",
                      desc: "Prosty montaz to inne koszty niz zaawansowana koloryzacja, Color Grading czy efekty specjalne.",
                    },
                    {
                      title: "Lektor i aktorstwo",
                      desc: "Znane twarze lub profesjonalni aktorzy podnosza budget. Proste nagranie lektora to koszt poniżej 500 zlotych.",
                    },
                    {
                      title: "Animacje i grafika",
                      desc: "Dodanie animacji 2D lub motion graphics to zazwyczaj 1500-5000 zlotych dodatkowo, w zależnosci od złożynosci.",
                    },
                    {
                      title: "Ilosc poprawek",
                      desc: "Każda runda poprawek (reshoot, re-edit) to dodatkowy koszt. Szacuj je od razu w budżecie.",
                    },
                  ].map((factor, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-violet-50 to-transparent rounded-lg p-6 border-l-4 border-violet-500"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {factor.title}
                      </h3>
                      <p className="text-gray-700">{factor.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeInView>

            {/* Section 4 - Types */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Rodzaje filmow reklamowych — ktory wybrac?
                </h2>

                <div className="space-y-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Spot reklamowy 30 sekund
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Idealny dla Facebooka, Instagrama i TV. Krótka forma, dynamiczna, skupiająca sie na jednej wiadomosci. Idealny dla firm, ktorych celem jest szybka konwersja.
                    </p>
                    <p className="text-sm text-gray-600">
                      Cena: 2000-8000 zl | Czas: 5-10 dni
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Film korporacyjny 2-3 minuty
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Dla firm chcących pokazac swoją kulture, wartosci i produkty. Dłuższy format, wiecej opowiadania, budowanie wizerunki. Idealny do strony www i prezentacji.
                    </p>
                    <p className="text-sm text-gray-600">
                      Cena: 5000-20000 zl | Czas: 7-21 dni
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Film produktowy / unboxing
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Pokazanie produktu w akcji. Popularne na e-commerce, Allegro i społecznosci. Buduje zaufanie i zachecaja do kupna. Szybka produkcja, duzy efekt.
                    </p>
                    <p className="text-sm text-gray-600">
                      Cena: 1500-5000 zl | Czas: 3-7 dni
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Reels / TikTok
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Krótkie, energetyczne, trendy. 15-60 sekund. Zwykle bez scenariusza, czesto z muzyką popularną. Producent w ponad tydzień. Najrozsadniejszy koszt.
                    </p>
                    <p className="text-sm text-gray-600">
                      Cena: 500-2000 zl | Czas: 1-3 dni
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Animacja 2D / motion graphics
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Idealnie dla wyjasnien skomplikowanych procesow. Explainer video przyciąga uwage. Mozna pokazac to, co trudne do sfilmowania. Tańsze niz zdjęcia z aktorami.
                    </p>
                    <p className="text-sm text-gray-600">
                      Cena: 1500-10000 zl | Czas: 7-14 dni
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Film z drona
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Spektakularne ujecia nieruchomosci, eventow, krajobrazow. Dron dodaje prestiżu i profesjonalizmu. Szybkie do produkcji, duży wow effect. Idealny dla turystyki i nieruchomosci.
                    </p>
                    <p className="text-sm text-gray-600">
                      Cena: 800-3000 zl | Czas: 1-3 dni
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Film szkoleniowy / e-learning
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Dla firm szkolacych pracownikow lub klientow. Dluze, dokladne, wiele animacji. E-learning wymaga profesjonalnego podejscia i dużo czasu na produkcje. Inwestycja, ktorá sie opłaca.
                    </p>
                    <p className="text-sm text-gray-600">
                      Cena: 3000-15000 zl | Czas: 10-30 dni
                    </p>
                  </div>
                </div>
              </section>
            </FadeInView>

            {/* Section 5 - ROI */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Film reklamowy a ROI — czy sie oplaca?
                </h2>

                <div className="bg-violet-50 rounded-lg p-8 mb-8 border border-violet-200">
                  <p className="text-gray-700 mb-6">
                    Producent wideo nie jest wydatkiem, to inwestycja. Dane pokazują, że filmy reklamowe przynoszą wymierne wyniki:
                  </p>

                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-violet-500 font-bold">•</span>
                      <span>
                        <strong>84% konsumentow</strong> powiedziało, że film skłonił ich do kupna produktu lub
                        usługi
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-violet-500 font-bold">•</span>
                      <span>
                        <strong>Film zwiększa konwersje o 80%</strong> w porównaniu do stron bez wideo
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-violet-500 font-bold">•</span>
                      <span>
                        <strong>YouTube jest drugą największa wyszukiwarką</strong> na świecie — filmami mozna dotrzeć do miliardow uzytkownikow
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-violet-500 font-bold">•</span>
                      <span>
                        <strong>Filmy na social media</strong> sa polubiane i udostepniane 10x czesciej niz zdjecia
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-violet-500 font-bold">•</span>
                      <span>
                        <strong>Email ze słowem "video" w temacie</strong> ma 19% wyższy odsetek otwarcia
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 mb-4">
                  Koszt 5000 zlotych na film, ktory przynosi 50 zamowien po 200 zlotych każdy to 10 razy zwrot inwestycji. A efekty trwaja długo — film mozna uzywac przez lata na roznych platformach.
                </p>

                <p className="text-gray-700">
                  Dlatego video marketing nie jest luksusem, to koniecznosc. Firmy bez wideo traciają konkurencje.
                </p>
              </section>
            </FadeInView>

            {/* Section 6 - Process */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Jak zamowic film reklamowy w Fotz Studio?
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white font-semibold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Brief
                      </h3>
                      <p className="text-gray-700">
                        Opowiadasz nam o Twoim produkcie, celach i budżecie. Pytamy, na jakiej platformie będzie film, kto to Twoim docelowym klientem, co chcesz osiągnąć.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white font-semibold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Wycena
                      </h3>
                      <p className="text-gray-700">
                        Na bazie briefu szacujemy koszt i czas. Wysyłamy Ci propozycje cenową ze szczegółami, co się w cenę wchodzi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white font-semibold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Preprodukcja
                      </h3>
                      <p className="text-gray-700">
                        Piszemy scenariusz, tworzymy storyboard, szukamy aktorow i lokalizacji. W tej fazie wszystko jest zaplanowane.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white font-semibold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Plan zdjęciowy
                      </h3>
                      <p className="text-gray-700">
                        Wchodzimy na plan. Kamerzysta, oświetlenie, aktor (jeśli potrzebny), wyreżyserowanie każdej sceny. Zazwyczaj to 1-3 dni.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white font-semibold">
                        5
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Postprodukcja
                      </h3>
                      <p className="text-gray-700">
                        Montaż, color grading, efekty, muzyka, lektor. Tu film zaczyna wyglądać jak profesjonalny. Zazwyczaj 3-7 dni.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white font-semibold">
                        6
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Odbiory i poprawki
                      </h3>
                      <p className="text-gray-700">
                        Przesyłamy Ci draft do przejrzenia. Sugerujesz zmiany, my je robimy. Zwykle jedna runda poprawek jest w cenie.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg text-white">
                  <p className="mb-4">
                    Chcesz wiedzieć więcej o naszych usługach produkcji filmów?
                  </p>
                  <Link
                    to="/uslugi/produkcja-filmow"
                    className="inline-block px-6 py-2 bg-white text-violet-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Sprawdź nasze usługi
                  </Link>
                </div>
              </section>
            </FadeInView>

            {/* Section 7 - Common Mistakes */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Czego unikac zamawiajac film reklamowy?
                </h2>

                <div className="bg-red-50 rounded-lg p-8 border border-red-200 mb-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">
                    5 najczęstszych błędów:
                  </h3>

                  <ol className="space-y-4 text-gray-700">
                    <li className="flex gap-4">
                      <span className="text-red-500 font-bold flex-shrink-0">1.</span>
                      <div>
                        <strong>Brak briefu lub niejasne cele</strong> — zamówić film bez znania, co się chce osiągnąć, to zmarnować pieniądze. Zawsze pisz brief.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-red-500 font-bold flex-shrink-0">2.</span>
                      <div>
                        <strong>Zbyt niski budżet</strong> — jeśli dajesz 1000 zlotych na profesjonalny film, może być rozczarowanie. Oczekuj więcej za 5000 zlotych.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-red-500 font-bold flex-shrink-0">3.</span>
                      <div>
                        <strong>Brak praw do muzyki</strong> — YouTube i Facebook usuwają filmy bez licencji muzycznej. Zawsze upewniaj się, że agencja dostarczy prawa.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-red-500 font-bold flex-shrink-0">4.</span>
                      <div>
                        <strong>Za dużo informacji w 30 sekund</strong> — jedno główne przesłanie. Zbyt wiele tekstu czytaj się szybko. Skupić się na jednym celu sprzedaży.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-red-500 font-bold flex-shrink-0">5.</span>
                      <div>
                        <strong>Brak call-to-action</strong> — film bez "Zadzwoń teraz", "Kup teraz" lub "Odwiedź stronę" nie sprzedaje. Zawsze dodaj CTA.
                      </div>
                    </li>
                  </ol>
                </div>

                <p className="text-gray-700">
                  Pamiętaj: film jest narzędziem marketingowym. Powinien sprzedawać, nie tylko wyglądać ładnie. Dlatego ważna jest dobra agencja, która słucha Twoich celów.
                </p>
              </section>
            </FadeInView>

            {/* FAQ Section */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                  Najczęstsze pytania
                </h2>

                <FAQSchema items={faqItems} />

                <div className="space-y-4">
                  {faqItems.map((item, idx) => (
                    <details
                      key={idx}
                      className="group border border-gray-200 rounded-lg overflow-hidden hover:border-violet-300 transition-colors"
                    >
                      <summary className="flex items-center justify-between w-full p-6 cursor-pointer bg-white group-open:bg-violet-50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.question}
                        </h3>
                        <span className="text-2xl text-gray-400 group-open:text-violet-500 transition-colors">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-700 bg-white">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </FadeInView>

            {/* CTA Section */}
            <FadeInView>
              <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 md:p-12 text-white mb-16 md:mb-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Gotowy na profesjonalny film reklamowy?
                </h2>
                <p className="text-slate-200 mb-8 max-w-2xl">
                  Umów konsultację z naszym zespołem. Dowiemy się o Twoich celach i przygotujemy dokładną wycenę bez żadnych zobowiązań.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/uslugi/produkcja-filmow"
                    className="inline-block px-6 py-3 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-600 transition-colors"
                  >
                    Nasze usługi
                  </Link>
                  <Link
                    to="/kontakt"
                    className="inline-block px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Umów konsultację
                  </Link>
                </div>
              </section>
            </FadeInView>

            {/* Related Links */}
            <FadeInView>
              <section className="border-t border-gray-200 pt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Przydatne artykuły i usługi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    to="/uslugi/produkcja-filmow"
                    className="p-6 border border-gray-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all group"
                  >
                    <h4 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors mb-2">
                      Produkcja filmów
                    </h4>
                    <p className="text-sm text-gray-600">
                      Dowiedz się wszystkiego o naszych usługach produkcji wideo, od spotów do filmów korporacyjnych.
                    </p>
                  </Link>

                  <Link
                    to="/blog/fotografia-produktowa-poradnik"
                    className="p-6 border border-gray-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all group"
                  >
                    <h4 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors mb-2">
                      Fotografia produktowa — poradnik
                    </h4>
                    <p className="text-sm text-gray-600">
                      Jak robić profesjonalne zdjęcia produktów do e-commerce. Praktyczne porady dla każdego.
                    </p>
                  </Link>

                  <Link
                    to="/uslugi/video-marketing"
                    className="p-6 border border-gray-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all group"
                  >
                    <h4 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors mb-2">
                      Video marketing
                    </h4>
                    <p className="text-sm text-gray-600">
                      Strategie i narzędzia do promocji filmów na TikToku, YouTubie i mediach społecznych.
                    </p>
                  </Link>
                </div>
              </section>
            </FadeInView>
          </article>
        </main>
      </Layout>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
