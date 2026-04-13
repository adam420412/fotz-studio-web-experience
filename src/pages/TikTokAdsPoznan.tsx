import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export const TikTokAdsPoznan = () => {
  const faqItems = [
    {
      question: "Ile kosztuje TikTok Ads w Poznaniu?",
      answer: "Koszt kampanii TikTok Ads w Poznaniu zależy od budżetu, celów i grupy docelowej. Agencja Fotz oferuje elastyczne pakiety dostosowane do potrzeb firm. Minimum kampanii to zwykle 500 PLN dziennie. Skontaktuj się z nami na bezpłatną konsultację, aby uzyskać wycenę dostosowaną do Twojej marki.",
    },
    {
      question: "Ile TikTok płaci za 1000 wyświetleń?",
      answer: "Stawka CPM (koszt za tysiąc wyświetleń) na TikTok waha się od 2 do 10 PLN w zależności od regionu, branży i sezonu. Polska znajduje się w średnim przedziale. Rzeczywisty koszt kampanii zależy od optymalizacji i jakości materiałów wideo oraz targetowania grupy docelowej.",
    },
    {
      question: "Jaka jest najlepsza agencja TikTok Ads w Poznaniu?",
      answer: "Fotz.pl to wiodąca agencja reklamowa na TikToku w Poznaniu z doświadczeniem w prowadzeniu kampanii dla firm z różnych branż. Nasze zespoły tworzą kreatywne materiały wideo, optymalizują konwersje i zapewniają najlepsze wyniki. Sprawdziliśmy już formaty reklamowe In-Feed Ads, Spark Ads i TopView Ads dla wielu biznesów.",
    },
    {
      question: "Dla jakiej branży sprawdza się reklama na TikToku w Poznaniu?",
      answer: "Reklama TikTok Ads działa doskonale dla e-commerce, fashion, beauty, food, fitness i usług. Platforma TikTok przyciąga głównie młodzież i młodych dorosłych, co czyni ją idealną dla marek angażujących tę grupę docelową. Każda branża może znaleźć swoją niszę dzięki zaawansowanemu targetowaniu.",
    },
    {
      question: "Jakie formaty reklamowe oferuje TikTok Ads?",
      answer: "TikTok Ads oferuje różne formaty reklamowe: In-Feed Ads (reklamy w kanale), Spark Ads (promowanie istniejących treści), TopView Ads (formaty premium), Hashtag Challenges (wyzwania brandowe) i Branded Effects. Każdy format ma inne zalety do osiągnięcia świadomości marki lub konwersji.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii TikTok Ads?",
      answer: "Uruchomienie kampanii TikTok Ads zajmuje zwykle 1-2 dni robocze od momentu zatwierdzenia kreatywności. W TikTok Ads Manager nasi specjaliści konfigurują wszystkie parametry, ustawiają budżet i cel kampanii. Po zatwierdzeniu przez platformę reklama zaczyna się wyświetlać użytkownikom TikToka.",
    },
    {
      question: "Czy TikTok Ads działa dla firm B2B?",
      answer: "Tak, TikTok Ads może działać dla firm B2B, ale wymaga dostosowania strategii. Zamiast bezpośredniej sprzedaży, kampanie fokusują się na budowaniu świadomości marki i generowaniu leadów. Format materiałów wideo powinien być edukacyjny i praktyczny, aby angażować profesjonalistów na platformie.",
    },
    {
      question: "Dlaczego kampania TikTok Ads nie przynosi wyników?",
      answer: "Niskie wyniki kampanii TikTok Ads wynikają z: słabej optymalizacji, nieodpowiedniej grupy docelowej, kiepskich materiałów wideo lub złego ustawienia celu kampanii. Agencja Fotz diagnozuje każdy problem i przeprowadza optymalizację konwersji. Wiele kampanii potrzebuje kilku testów, aby znaleźć właściwą strategię reklamową.",
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", path: "/" },
    { label: "Performance Marketing", path: "/performance-marketing" },
    { label: "TikTok Ads", path: "/performance-marketing/tiktok-ads" },
    { label: "Poznań", path: "/performance-marketing/tiktok-ads/poznan" },
  ];

  return (
    <Layout>
      <SEOHead
        title="TikTok Ads Poznań — agencja kampanii reklamowych TikTok | Fotz.pl"
        description="Reklamy TikTok Ads Poznań — agencja Fotz.pl. Kampanie TikTok dla firm z Poznania: In-Feed Ads, Spark Ads, kreacje wideo, optymalizacja konwersji…"
        canonical="https://fotz.pl/performance-marketing/tiktok-ads/poznan"
        keywords="tiktok ads poznan, reklamy tiktok poznan, agencja tiktok ads poznan, kampanie tiktok poznan, tiktok advertising poznan, tiktok ads dla firm poznan, tiktok ads cennik poznan"
      />

      <ServiceSchema
        name="TikTok Ads w Poznaniu"
        areaServed="Poznan"
        description="Agencja Fotz prowadzi kampanie TikTok Ads dla firm w Poznaniu. Specjalizujemy się w kreacjach wideo, In-Feed Ads, Spark Ads i optymalizacji konwersji na platformie TikTok."
      />

      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <PageBreadcrumbs breadcrumbs={breadcrumbs} />

      <FadeInView>
        <section className="hero-section py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TikTok Ads Poznań — Kampanie Reklamowe na TikToku dla Firm
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              TikTok Ads Poznan — profesjonalne kampanie reklamowe TikTok dla firm z Poznana i Wielkopolski. Dotrzemy do młodych odbiorców i zwiększamy sprzedaż. Bezpłatna konsultacja.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Bezpłatna konsultacja
            </button>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="stats-section py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">150+</p>
              <p className="text-gray-700">Kampanii TikTok Ads</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">2.5M+</p>
              <p className="text-gray-700">Zasięgi kampanii</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">45%</p>
              <p className="text-gray-700">Średnia konwersja</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-gray-700">Zadowolenie klientów</p>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="formats-section py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Jakie są formaty reklam na TikToku?</h2>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Platforma TikTok oferuje różnorodne formaty reklamowe dostosowane do celów kampanii. Każdy format ma swoje
              unikalne możliwości angażowania użytkowników i budowania świadomości marki.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3">In-Feed Ads</h3>
                <p className="text-gray-700 text-sm">
                  Reklamy pojawiające się w kanale użytkowników. Format In-Feed Ads to idealna reklama na TikToku do
                  osiągnięcia dużych zasięgów i angażowania publiczności na platformie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3">Spark Ads</h3>
                <p className="text-gray-700 text-sm">
                  Promowanie istniejących treści organicznych. Spark Ads to format reklamowy, który zwiększa zasięgi
                  już opublikowanych materiałów wideo tworząc naturalną reklama na TikToku.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3">TopView Ads</h3>
                <p className="text-gray-700 text-sm">
                  Premium formaty na górze kanału. TopView Ads to kampania TikTok Ads o wysokiej widoczności,
                  gwarantująca pierwsze wrażenie na użytkowników platformy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3">Hashtag Challenge</h3>
                <p className="text-gray-700 text-sm">
                  Kampanie oparte na wyzwaniach użytkowników. Hashtag Challenge to format reklamowy na TikToku, który
                  generuje organiczny marketing i angażuje całą społeczność.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3">Branded Effects</h3>
                <p className="text-gray-700 text-sm">
                  Filtry i efekty marki. Ten format reklamowy na TikToku pozwala użytkownikom tworzyć treści z efektami
                  Twojej marki, budując świadomość i angażowanie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3">Collection Ads</h3>
                <p className="text-gray-700 text-sm">
                  Kampania e-commerce na TikToku. Collection Ads to format reklamowy umożliwiający bezpośrednią
                  sprzedaż, idealny dla sklepów online i optymalizacji konwersji.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="goals-section py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Jakie cele zrealizujesz z kampaniami TikTok Ads w Poznaniu?
            </h2>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Każda kampania tiktok ads ma konkretny cel. Agencja Fotz pomaga ustalić kierunek reklamy na tiktoku,
              niezależnie czy chodzi o e-commerce, social media czy budowanie marki.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Świadomość marki</h3>
                <p className="text-gray-700 text-sm">
                  Osiągnij miliony użytkowników TikToka. Kampania TikTok Ads skoncentrowana na zasięgach buduje
                  rozpoznawalność i ugruntowuje markę wśród grupy docelowej.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Generowanie leadów</h3>
                <p className="text-gray-700 text-sm">
                  Zbieraj dane potencjalnych klientów. Reklama TikTok Ads z formularzami i call-to-action prowadzi
                  użytkowników platformy do zainteresowania Twoją ofertą.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Sprzedaż e-commerce</h3>
                <p className="text-gray-700 text-sm">
                  Zwiększ obroty online. TikTok Ads dla e-commerce to optymalizacja konwersji przez materiały wideo,
                  targetowanie grupy docelowej i konwersję użytkowników w nabywców.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Ruch na stronę</h3>
                <p className="text-gray-700 text-sm">
                  Kieruj użytkowników TikToka na Twoją witrynę. Kampania TikTok Ads z linkami zwiększa traffic i
                  angażuje potencjalnych klientów poza platformą social media.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Współpraca z influencerami</h3>
                <p className="text-gray-700 text-sm">
                  Nawiąż partnerstwa z content creatorami. Reklama TikTok Ads wspólnie z influencerami amplifikuje
                  zasięgi i buduje wiarygodność marki.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Konkurencja na rynku</h3>
                <p className="text-gray-700 text-sm">
                  Wyprzedź konkurencję. Agencja Fotz monitoruje kampanie reklamowe na TikToku i optymalizuje taktykę
                  aby dominować na platformie w Twojej branży.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="process-section py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Jak wygląda proces realizacji kampanii TikTok Ads w Poznaniu?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Analiza i strategia</h3>
                  <p className="text-gray-700">
                    Zaczynamy od analizy Twojej branży, konkurencji i grupy docelowej. Definiujemy cel kampanii,
                    budżet i strategie reklamowe na TikToku właściwe dla Poznania i Twojego biznesu.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Tworzenie kreatywności</h3>
                  <p className="text-gray-700">
                    Nasz kreatywny zespół tworzy materiały wideo na TikTok. Format reklamy na TikToku musi być
                    angażujący i dopasowany do platformy. Pracujemy nad wideami w TikTok Ads Manager.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Konfiguracja kampanii</h3>
                  <p className="text-gray-700">
                    Ustawiamy wszystkie parametry w TikTok Ads Manager: budżet, grupy docelowe, format reklamowy,
                    cel kampanii i optymalizacja. Zapewniamy właściwe targetowanie na platformie TikTok.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Launch i monitoring</h3>
                  <p className="text-gray-700">
                    Uruchamiamy kampanię TikTok Ads i na bieżąco monitorujemy wydajność. Obserwujemy zasięgi,
                    konwersje i ROI. Reklama na tiktoku wymaga ciągłej optymalizacji.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Optymalizacja i raportowanie</h3>
                  <p className="text-gray-700">
                    Przeprowadzamy testy A/B, optymalizujemy konwersje i ulepszamy performance kampanii. Dostarczamy
                    szczegółowe raporty z wynikami akcji reklamowych na TikToku.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="why-fotz-section py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Dlaczego wybrać agencję Fotz do prowadzenia TikTok Ads w Poznaniu?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Doświadczenie</h3>
                <p className="text-gray-700 text-sm">
                  Od lat prowadzimy kampanie TikTok Ads dla firm w Poznaniu i całej Polsce. Znamy platformę TikTok,
                  wszystkie formaty reklam i sposoby optymalizacji konwersji.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Specjaliści</h3>
                <p className="text-gray-700 text-sm">
                  Nasz zespół to eksperci w zakresie reklamy na TikToku, kreacji wideo i targetowania. Każdy członek
                  ma praktyczne doświadczenie w tworzeniu kampanii reklamowych na platformie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Wyniki</h3>
                <p className="text-gray-700 text-sm">
                  Kampanie TikTok Ads prowadzone przez Fotz osiągają średnio 45% konwersji i generują miliony
                  zasięgów. Nasze reklamy na tiktoku przynoszą konkretne rezultaty.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Kreatywność</h3>
                <p className="text-gray-700 text-sm">
                  Materiały wideo tworzone przez naszych specjalistów są angażujące i dostosowane do platformy TikTok.
                  Każda reklama na tiktoku ma szansę na sukces i viral reach.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Wsparcie</h3>
                <p className="text-gray-700 text-sm">
                  Podczas trwania kampanii TikTok Ads jesteśmy dostępni 24/7. Optymalizujemy akcje reklamowe na
                  bieżąco i reagujemy na wszelkie zmiany na platformie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-3">Przejrzystość</h3>
                <p className="text-gray-700 text-sm">
                  Dostarczamy szczegółowe raporty i raportowanie z kampanii TikTok Ads. Wiesz dokładnie na co
                  przeznaczony jest budżet i jakie działania prowadzi agencja.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="faq-section py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Najczęstsze pytania o TikTok Ads Poznań</h2>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <details
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer"
                >
                  <summary className="font-bold text-lg flex justify-between items-center">
                    {item.question}
                    <span className="text-gray-500">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <FAQSchema items={faqItems} />
        </section>
      </FadeInView>

      <FadeInView>
        <section className="internal-links-section py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">TikTok Ads w innych miastach</h2>
            <p className="text-gray-700 text-center mb-8">
              Agencja Fotz prowadzi kampanie TikTok Ads w wielu miastach Polski. Kampanie reklamowe na TikToku są
              dostosowane do specyfiki lokalnej każdego regionu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                to="/performance-marketing/tiktok-ads/warszawa"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                TikTok Ads Warszawa
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/krakow"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                TikTok Ads Kraków
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/wroclaw"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                TikTok Ads Wrocław
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/gdansk"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                TikTok Ads Gdańsk
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/lodz"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                TikTok Ads Łódź
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/katowice"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                TikTok Ads Katowice
              </Link>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="related-section py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Powiązane usługi marketingowe</h2>
            <p className="text-gray-700 text-center mb-8">
              Reklama na TikToku to część strategii marketing na social media. Agencja Fotz oferuje również kampanie
              na Facebook Ads, Google Ads i innych platformach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/performance-marketing/facebook-ads"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold text-lg"
              >
                Facebook Ads — Kampanie na Facebooku
              </Link>
              <Link
                to="/performance-marketing/google-ads"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold text-lg"
              >
                Google Ads — Reklamy Google
              </Link>
              <Link
                to="/performance-marketing/instagram-ads"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold text-lg"
              >
                Instagram Ads — Kampanie na Instagramie
              </Link>
              <Link
                to="/social-media/obsluga"
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold text-lg"
              >
                Social Media Marketing — Strategie na social media
              </Link>
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection
        title="Gotów na kampanię TikTok Ads w Poznaniu?"
        description="Skontaktuj się z naszą agencją i bezpłatnie omów możliwości reklamy na TikToku dla Twojej firmy."
      />
    </Layout>
  );
};
