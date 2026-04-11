import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function BlogLandingPageVsStrona() {
  const breadcrumbItems = [
    { label: "Strona główna", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "Landing page vs strona internetowa", path: "/blog/landing-page-vs-strona-internetowa" },
  ];

  const faqItems = [
    {
      question: "Co to jest landing page i czym się różni od strony?",
      answer:
        "Landing page to jednostronicowa strona internetowa dedykowana do osiągania konkretnego celu konwersji. Zawiera jeden wyraźny call-to-action i minimalne nawigacje. Strona internetowa natomiast to wielostronicowa struktura z menu nawigacyjnym, podstronami i całościowym przedstawieniem firmy. Landing page skupia się na konwersji, strona na prezentacji.",
    },
    {
      question: "Kiedy landing page jest lepszy niż strona internetowa?",
      answer:
        "Landing page jest lepszy gdy chcesz: uruchomić kampanię reklamową z konkretnym ofertą, promować jeden produkt lub usługę premium, zbierać kontakty do bazy, przeprowadzić test oferty, albo zorganizować webinar lub event. W tych przypadkach skupienie na jednym celu daje wyższą konwersję niż strona główna.",
    },
    {
      question: "Ile kosztuje landing page w 2025?",
      answer:
        "Prosty landing page kosztuje od 800 do 2000 zł. Landing page zaawansowany z integracjami, animacjami i formularzami to koszt 2000-5000 zł. Cena zależy od złożoności, liczby sekcji, integracji z narzędziami i czasu realizacji. W Fotz.pl oferujemy landing page od 800 zł z realnym wsparciem.",
    },
    {
      question: "Jak długo trwa stworzenie landing page?",
      answer:
        "Prosty landing page można zrealizować w 3-7 dni. Landing page zaawansowany z customizacją zajmuje 7-14 dni. Szybkość realizacji zależy od złożoności designu, liczby integracji i dostępności materiałów od klienta. W Fotz.pl gwarantujemy szybką realizację bez kompromisów na jakości.",
    },
    {
      question: "Czy landing page pozycjonuje się w Google?",
      answer:
        "Landing page może się pozycjonować w Google, ale nie jest to jego głównym celem. Landing page nie ma rozbudowanej struktury nawigacyjnej, co utrudnia crawlowanie. Lepiej pozycjonują się pełne strony internetowe z wewnętrznym linkingiem. Jednak landing page ze świetnym contentem i backlinkami może się pozycjonować dla konkurencyjnych słów kluczowych.",
    },
    {
      question: "Jaka jest konwersja landing page vs strona główna?",
      answer:
        "Landing page osiąga konwersję 5-15% w zależności od branży i oferty. Strona główna zazwyczaj ma konwersję 1-3%. Dlaczego? Landing page ma jeden wyraźny cel, brak rozpraszających linków i dedykowany copy. Strona główna rozprasza wizytora na wiele możliwości. Dlatego kampanie reklamowe prowadzą na landing page, a nie na home page.",
    },
    {
      question: "Co to jest A/B testing landing page?",
      answer:
        "A/B testing to eksperyment, gdzie testujesz dwie wersje landing page (A i B) z jedną zmianą, np. innym nagłówkiem, koorem CTA, albo obrazem. Dzielisz ruch 50/50 i mierzysz która wersja konwertuje więcej. A/B testing pozwala zoptymalizować konwersję i ROI kampanii reklamowej.",
    },
    {
      question: "Czy potrzebuję oddzielnej domeny dla landing page?",
      answer:
        "Nie musisz. Landing page może być na Twojej głównej domenie, np. tudomenswitdomenstwem.pl/nowa-oferta. Możesz również użyć oddzielnej domeny, jeśli chcesz. Obydwie opcje działają. Domeną główną jest łatwiej, bo masz już autorytet domenowy. Osobną domenę używasz gdy chcesz całkowicie inną markę lub testować nową ofertę.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Landing page vs strona internetowa — co wybrać dla swojej firmy?",
    description:
      "Kompleksowy przewodnik: landing page vs strona internetowa. Dowiedz się jaką wybrać dla kampanii reklamowej, e-commerce, portfolia. Porownianie cen, czasów realizacji i konwersji.",
    image: "https://fotz.pl/og-landing-vs-strona.jpg",
    author: {
      "@type": "Organization",
      name: "Fotz.pl",
    },
    publisher: {
      "@type": "Organization",
      name: "Fotz.pl",
      logo: {
        "@type": "ImageObject",
        url: "https://fotz.pl/logo.png",
      },
    },
    datePublished: "2026-04-12",
    dateModified: "2026-04-12",
  };

  return (
    <Layout>
      <SEOHead
        title="Landing page vs strona internetowa — co wybrać dla swojej firmy? | Fotz.pl"
        description="Kompleksowy przewodnik: landing page vs strona internetowa. Dowiedz się jaką wybrać dla kampanii reklamowej, e-commerce, portfolia. Porownianie cen, czasów realizacji i konwersji."
        canonical="https://fotz.pl/blog/landing-page-vs-strona-internetowa"
        ogType="article"
        ogImage="https://fotz.pl/og-landing-vs-strona.jpg"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <PageBreadcrumbs items={breadcrumbItems} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <FadeInView>
          <div className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900 py-16 md:py-24 text-white">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Landing page vs strona internetowa — co wybrać dla swojej firmy?
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Kompleksowy przewodnik pomagający wybrać idealne rozwiązanie dla Twoich celów biznesowych. Porównanie landing page i strony internetowej: funkcjonalność, koszt, czas realizacji i potencjał konwersji.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-teal-300 font-bold text-lg md:text-2xl">+40%</div>
                  <div className="text-sm text-gray-200">Landing page konwersja</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-teal-300 font-bold text-lg md:text-2xl">Od 800 zł</div>
                  <div className="text-sm text-gray-200">Koszt landing page</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-teal-300 font-bold text-lg md:text-2xl">Od 2000 zł</div>
                  <div className="text-sm text-gray-200">Strona internetowa</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-teal-300 font-bold text-lg md:text-2xl">3-14 dni</div>
                  <div className="text-sm text-gray-200">Czas realizacji</div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Main Content */}
        <FadeInView>
          <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
            {/* Section 1: Co to jest landing page? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Co to jest landing page?</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Landing page to jednostronicowa strona internetowa zaprojektowana do osiągnięcia konkretnego celu konwersji. Osoba wchodzi na landing page za pośrednictwem reklamy, emaila czy linku bezpośredniego i podejmuje akcję: wypełnia formularz, dokonuje zakupu, lub pobiera zasoby.
                </p>
                <p>
                  Kluczowe cechy landing page to: jednostronnicowa struktura, jeden dominujący call-to-action (CTA), minimalna nawigacja, brak linków do innych stron, i wzystko jest skoncentrowane na konwersji. Brak menu, brak linków do social media w nagłówku, brak wszystkiego co mogłoby rozproszyć wizytora.
                </p>
                <p>
                  Landing page jest narzędziem kampanii reklamowej Google Ads, Facebook Ads, czy LinkedIn Ads. Gdy ktoś kliknie Twoją reklamę, trafia na landing page dedykowany do tej konkretnej oferty. Dlatego konwersja landing page jest tak wysoka — wszystko skupia się na jednym celu.
                </p>
              </div>
            </section>

            {/* Section 2: Co to jest strona internetowa? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Co to jest strona internetowa?</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Strona internetowa to wielostronicowa struktura online reprezentująca Twoją firmę. Zawiera home page, podstrony o produktach/usługach, blog, kontakt, politykę prywatności. Każda podstrona ma inny content, inny cel, i wszystko jest połączone nawigacją.
                </p>
                <p>
                  Strona internetowa buduje autorytet firmy, pozycjonuje się w Google dla wielu słów kluczowych, i pozwala potencjalnym klientom poznać całą Twoją ofertę. To permanentna prezencja online, czyli inwestycja long-term w widoczność Twojej marki.
                </p>
                <p>
                  Typowa strona internetowa ma 5-15 podstron: home, o nas, usługi/produkty, blog, FAQ, kontakt. Niektóre firmy mają nawet 50+ podstron z kompleksowym systemem nawigacji. Strona pozycjonuje się w Google, i gdy potencjalny klient szuka "usługi w mojej branży", może trafić na jedną z Twoich podstron.
                </p>
              </div>
            </section>

            {/* Section 3: Porównanie */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Porównanie: Landing page vs strona internetowa</h2>
              <p className="text-gray-700 mb-8">
                Zanim podejmiesz decyzję, zobacz jak landing page i strona internetowa porównują się w 8 kluczowych kryteriach.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Kryterium</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Landing page</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Strona internetowa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Cel</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Jeden konkretny cel konwersji</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Wielozadaniowa: informacja, sprzedaż, budowanie marki</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Nawigacja</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Minimalna lub żadna</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Pełne menu i struktura</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Czas realizacji</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">3-14 dni</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">2-8 tygodni</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Koszt</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">800-5000 zł</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">2000-20000+ zł</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Konwersja</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">5-15%</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">1-3%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">SEO i pozycjonowanie</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Słabe (brak nawigacji)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Bardzo dobre (interlinking)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Aktualizacja contentu</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Rzadko (zmienia się z kampanią)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Regularnie (blog, aktualności)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Dla kogo?</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Kampanie, produkty, webinary</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Nowe firmy, portfolio, e-commerce</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Kiedy wybrać landing page? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kiedy wybrać landing page?</h2>
              <p className="text-gray-700 mb-8">
                Landing page to idealne rozwiązanie gdy chcesz szybko i taniej osiągnąć konkretny cel konwersji. Oto 5 scenariuszy gdzie landing page sprawdzi się idealnie:
              </p>
              <div className="space-y-6">
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Kampania reklamowa PPC</h3>
                  <p className="text-gray-700">
                    Uruchamiasz kampanię Google Ads, Facebook Ads, czy LinkedIn Ads. Landing page dedykowana do tej kampanii osiągnie wyższą konwersję niż strona główna, bo nie rozprasza wizytora.
                  </p>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Event, webinar lub promocja</h3>
                  <p className="text-gray-700">
                    Organizujesz event, webinar, czy czasową promocję. Landing page skupi się na zbieraniu rejestracji. Dzięki temu wiesz że każdy kto kliknie reklamę będzie orientował się o co chodzi.
                  </p>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Nowy produkt lub usługa premium</h3>
                  <p className="text-gray-700">
                    Chcesz testować nową ofertę premium bez inwestowania w pełną stronę. Landing page pozwoli Ci na szybki test czy rynek jest zainteresowany, zanim zaangażujesz większe budżety.
                  </p>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Test oferty przed pełną stronią</h3>
                  <p className="text-gray-700">
                    Niespewny czy Twoja oferta się sprzeda? Zrób landing page za 800 zł, testuj przez miesiąc, i jeśli będzie sukces, inwestuj w pełną stronę.
                  </p>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. Szybka sprzedaż z ograniczoną audience</h3>
                  <p className="text-gray-700">
                    Chcesz sprzedawać szybko do ograniczonej grupy (np. alumni, newsletter subscribers). Landing page będzie idealna bo zawiera wszystko co potrzebne do podjęcia decyzji.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Kiedy wybrać pełną stronę? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kiedy wybrać pełną stronę internetową?</h2>
              <p className="text-gray-700 mb-8">
                Pełna strona internetowa to lepszy wybór gdy planujesz long-term. Oto 5 scenariuszy gdzie strona będzie bardziej opłacalna:
              </p>
              <div className="space-y-6">
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Nowa firma czy rebranding</h3>
                  <p className="text-gray-700">
                    Zakładasz firmę albo zmieniasz markę. Potrzebujesz kompletnej wizytówki online. Strona internetowa pozwoli klientom poznać Twoją ofertę, historię firmy, zespół, i jak Cię kontaktować.
                  </p>
                </div>
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Portfolio pracy czy galeria</h3>
                  <p className="text-gray-700">
                    Jesteś freelancer, agencja, czy studio. Potrzebujesz pokazać portfolio. Strona z galeriami, case studies, i testimonialami zbuduje zaufanie potencjalnych klientów.
                  </p>
                </div>
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. E-commerce i sprzedaż online</h3>
                  <p className="text-gray-700">
                    Sprzedajesz wiele produktów. Pełna strona e-commerce z kategoriami, filtrami, i historią zamówień jest niezbędna. Landing page nie wystarczy dla e-commerce.
                  </p>
                </div>
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Lokalna firma czy sieć</h3>
                  <p className="text-gray-700">
                    Prowadzisz pizzerię, gabinet, czy sklep. Pełna strona z Google Maps, godzinami otwarcia, i informacjami lokalnymi będzie kluczowa dla SEO lokalnego.
                  </p>
                </div>
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. Long-term SEO i widoczność</h3>
                  <p className="text-gray-700">
                    Chcesz pojawiać się w Google za 50, 100, czy 200 słów kluczowych. Pełna strona z blogiem i wewnętrznym linkingiem pozycjonuje się dużo lepiej niż landing page.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Ile kosztuje? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ile kosztuje landing page vs strona internetowa?</h2>
              <p className="text-gray-700 mb-8">
                Koszt to jeden z kluczowych czynników w decyzji. Oto dokładne porównanie cen:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Typ rozwiązania</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Cena</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Cechy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Landing page prosty</td>
                      <td className="border border-gray-300 px-4 py-3 text-teal-600 font-bold">800-1500 zł</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">5-7 sekcji, formularz, brak integracji</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Landing page zaawansowany</td>
                      <td className="border border-gray-300 px-4 py-3 text-teal-600 font-bold">2000-5000 zł</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">10+ sekcji, animacje, integracje, slider</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Strona podstawowa (5-10 stron)</td>
                      <td className="border border-gray-300 px-4 py-3 text-cyan-600 font-bold">2000-4000 zł</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Responsive design, SEO basics, formularz kontaktu</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Strona średnia (15-25 stron)</td>
                      <td className="border border-gray-300 px-4 py-3 text-cyan-600 font-bold">5000-12000 zł</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Blog, zaawansowany SEO, integracje CRM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">E-commerce (sklep online)</td>
                      <td className="border border-gray-300 px-4 py-3 text-cyan-600 font-bold">8000-20000+ zł</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Koszyk, płatności, zarządzanie zapasami</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm mt-6 italic">
                Ceny są orientacyjne i mogą się różnić w zależności od zakresu, złożoności, i czasu realizacji. W Fotz.pl oferujemy elastyczne pakiety dopasowane do Twojego budżetu.
              </p>
            </section>

            {/* Section 7: Landing i strona jednocześnie */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Czy można mieć landing page i stronę jednocześnie?</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Tak, absolutnie. Wiele firm korzysta z obydwu rozwiązań jednocześnie, i to jest idealny scenariusz.
                </p>
                <p>
                  Strona internetowa to Twoja permanentna wizytówka online. Home page, o nas, usługi, blog, kontakt. To fundament Twojej online presence. Strona pozycjonuje się w Google i przyciąga organiczny ruch.
                </p>
                <p>
                  Landing page natomiast to narzędzie do kampanii reklamowej. Uruchamiasz reklamę za 5000 zł, kierujesz ludzi na landing page dedykowaną do tej kampanii. Konwersja jest wyższa niż gdybyś kierował na home page.
                </p>
                <p>
                  Przykład: Agencja marketingowa ma stronę www.agencja.pl pokazującą ich usługi. Ale gdy uruchamiają kampanię na "pozycjonowanie stron w Google", tworzą landing page www.agencja.pl/pozycjonowanie-stron z ofertą dedykowaną do tej usługi.
                </p>
                <p>
                  W Fotz.pl oferujemy pakiet "Strona + Landing page" gdzie budujemy Ci pełną stronę internetową plus 2-3 landing page do kampanii reklamowych. To idealne rozwiązanie dla firm które chcą jednocześnie widoczności SEO i wyższej konwersji z reklam.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Odpowiadamy na Twoje pytania</h2>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <details key={index} className="border border-gray-300 rounded-lg p-6 cursor-pointer">
                    <summary className="font-bold text-lg text-gray-900 flex justify-between items-center">
                      <span>{item.question}</span>
                      <span className="text-teal-600 ml-4">+</span>
                    </summary>
                    <p className="text-gray-700 mt-4">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA Box */}
            <section className="mb-16 bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Gotowy do wyboru? Skontaktuj się z nami
              </h2>
              <p className="text-gray-700 mb-8">
                Pomagamy firmom wybierać między landing page a pełną stroną internetową. Oferujemy obydwa rozwiązania w konkurencyjnych cenach.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/uslugi/landing-page"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
                >
                  Dowiedz się o landing page
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
                >
                  Skontaktuj się z nami
                </Link>
              </div>
            </section>
          </article>
        </FadeInView>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </Layout>
  );
}
