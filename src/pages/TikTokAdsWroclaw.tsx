import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsWroclaw() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Kampanie reklamowe", path: "/performance-marketing" },
    { label: "TikTok Ads", path: "/performance-marketing/tiktok-ads" },
    { label: "TikTok Ads Wrocław", path: "/performance-marketing/tiktok-ads/wroclaw" },
  ];

  const faqItems = [
    {
      question: "Ile kosztują reklamy TikTok Ads we Wrocławiu?",
      answer:
        "Na koszt składają się dwie części. Budżet reklamowy płacisz bezpośrednio TikTokowi, zawsze osobno — jego wysokość ustalamy razem z Tobą, a koszt wyświetleń zależy od formatu, targetowania i konkurencji w aukcji. Wynagrodzenie za prowadzenie kampanii i produkcję wideo wyceniamy po rozmowie o zakresie: liczbie kampanii, liczbie kreacji i częstotliwości raportowania.",
    },
    {
      question: "Jaki format reklamy wybrać na TikToku?",
      answer:
        "Wybór formatu zależy od celu kampanii. Dla awareness wybieramy In-Feed Ads lub TopView. Dla konwersji sprzedażowych rekomendujemy Spark Ads lub Collection Ads. Do budowania zaangażowania społeczności idealne są Hashtag Challenges. Nasz zespół pomoże wybrać optymalny format dla Wrocławia.",
    },
    {
      question: "Czy mogę sprzedawać przez TikTok Ads w Wrocławiu?",
      answer:
        "Tak. TikTok Ads może być kanałem sprzedaży dla firm z Wrocławia. Można kierować reklamy bezpośrednio do sklepu internetowego, zbierać zapytania przez Lead Form lub integrować kampanie z systemami CRM. Zwrot z reklam zależy od produktu, oferty, strony i budżetu — nie gwarantujemy konkretnego ROAS.",
    },
    {
      question: "Ile czasu trwa optymalizacja kampanii TikTok Ads?",
      answer:
        "Pierwsze dane o wyświetleniach i kliknięciach pojawiają się zwykle krótko po starcie. Optymalizacja i skalowanie wymagają czasu na testy kreacji i grup odbiorców — tempo zależy od budżetu i branży, dlatego nie obiecujemy efektów w sztywnym terminie. Regularnie monitorujemy metryki (CTR, CPC, ROAS) i wprowadzamy zmiany.",
    },
    {
      question: "Czy kreujecie materiały wideo do kampanii TikTok?",
      answer:
        "Tak, nasz zespół specjalistów zajmuje się produkcją kreatywnego contentu. Tworzymy scenariusze, filmy, edytujemy materiały i optymalizujemy je pod algorytm TikToka. Każde wideo dopasowujemy do grupy docelowej, a warianty kreacji testujemy w kampanii.",
    },
    {
      question: "Jak mierzycie sukces kampanii TikTok Ads?",
      answer:
        "Mierzymy kampanię za pomocą KPI: liczba wyświetleń (impressions), współczynnik kliknięć (CTR), koszt konwersji (CPC), wartość leadów (lead value), zwrot z inwestycji (ROI) i średni czas oglądania (watch time). Dostarczamy regularne raporty w uzgodnionym rytmie.",
    },
    {
      question: "Czy mogę kierować reklamy tylko do Wrocławia?",
      answer:
        "Tak, TikTok oferuje precyzyjne targetowanie geograficzne. Możemy ograniczyć reklamy do miasta Wrocław, całego województwa dolnośląskiego lub rozszerzyć na sąsiednie regiony. Dodatkowe kryteria to wiek, płeć, zainteresowania i zachowania użytkowników.",
    },
    {
      question: "Jaka jest strategia budowania marki na TikToku?",
      answer:
        "Budujemy markę poprzez konsekwentne, angażujące treści dostosowane do algorytmu TikToka. Łączymy kampanie płatne (TikTok Ads) z organicznym contentem, współpracą z influencerami i community managementem. Celem jest zwiększenie rozpoznawalności marki i lojalności klientów we Wrocławiu.",
    },
  ];

  const stats = [
    { value: "Wideo", label: "Format natywny dla platformy — pionowe, krótkie filmy" },
    { value: "Lokalnie", label: "Targetowanie na Wrocław, okolice lub cały Dolny Śląsk" },
    { value: "Testy", label: "Kreacje i grupy odbiorców sprawdzane w kampanii" },
    { value: "Budżet", label: "Budżet reklamowy płacony TikTokowi zawsze osobno" },
  ];

  const formats = [
    {
      title: "In-Feed Ads",
      description:
        "Reklamy pojawiające się naturalnie w głównym feedzie użytkownika. Sprawdzają się zarówno przy budowaniu zasięgu, jak i w kampaniach sprzedażowych.",
    },
    {
      title: "Spark Ads",
      description:
        "Promowanie istniejących wideo z konta. Format ten zwiększa organiczny zasięg i engagement poprzez amplifikację najlepszych kreatywów.",
    },
    {
      title: "TopView Ads",
      description:
        "Format premium wyświetlany jako pierwsza reklama po otwarciu aplikacji. Zapewnia mocną ekspozycję marki, ale wymaga większego budżetu.",
    },
    {
      title: "Hashtag Challenge",
      description:
        "Kampanie interaktywne zachęcające użytkowników do tworzenia contentu. Idealne do budowania zaangażowania społeczności i viral marketingu.",
    },
    {
      title: "Brand Takeover",
      description:
        "Pełnoekranowa reklama wyświetlana przy otwarciu aplikacji. Format nastawiony na szeroki zasięg, dostępny przy dużych budżetach.",
    },
    {
      title: "Collection Ads",
      description:
        "Reklamy z katalogiem produktów. Użytkownicy mogą przeglądać i kupować bezpośrednio z aplikacji TikToka bez opuszczania platformy.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Audyt i konsultacja",
      description:
        "Poznajemy Twoją markę, cele biznesowe, grupę docelową i budżet. Analizujemy konkurencję i trendy na TikToku w Wrocławiu. Definiujemy KPI do pomiaru sukcesu.",
    },
    {
      number: 2,
      title: "Strategia i targeting",
      description:
        "Opracowujemy szczegółową strategię kampanii uwzględniającą format reklam, demografię, zainteresowania i zachowania grupy docelowej. Ustanawiamy harmonogram i budżet.",
    },
    {
      number: 3,
      title: "Produkcja kreatywu",
      description:
        "Tworzymy serial materiałów wideo zoptymalizowanych dla TikToka. Każde wideo zawiera hook w pierwszych 3 sekundach, dynamiczny dźwięk i call-to-action. Testujemy różne warianty kreatywu.",
    },
    {
      number: 4,
      title: "Wdrożenie i testowanie",
      description:
        "Uruchamiamy kampanię i testujemy różne kreatywne podejścia, targeting i budżety. Monitorujemy metryki w czasie rzeczywistym i szybko optymalizujemy najgorsze performing ads.",
    },
    {
      number: 5,
      title: "Skalowanie i raportowanie",
      description:
        "Skalujemy najskuteczniejsze kampanie, zwiększając budżet dla dobrze performing ads. Dostarczamy szczegółowe raporty z analizą wyniku i rekomendacjami na kolejny etap.",
    },
  ];

  const whyUsPoints = [
    {
      title: "Wideo i kampanie w jednym miejscu",
      description:
        "Produkujemy wideo i prowadzimy kampanie płatne — realizowaliśmy m.in. spot dla WSB Merito i kampanię Meta Ads dla Dawid EDU. Pracujemy z Poznania, a firmy z Wrocławia obsługujemy zdalnie.",
    },
    {
      title: "Kreatywna produkcja wideo",
      description:
        "Produkcję wideo realizujemy w FOTZ Studio — materiały dopasowujemy do formatu i algorytmu TikToka. Każde wideo jest optymalizowane pod względem dźwięku, tempa i wizualnych haków.",
    },
    {
      title: "Targetowanie precyzyjne",
      description:
        "Kierujemy reklamy do dokładnie definiowanej grupy docelowej we Wrocławiu, uwzględniając wiek, płeć, zainteresowania, zachowania i lokalizację dla maksymalnej trafności.",
    },
    {
      title: "Stały kontakt",
      description:
        "Regularnie monitorujemy kampanie i odpowiadamy na pytania w uzgodnionych godzinach pracy. Zmiany w kampaniach wprowadzamy na bieżąco na podstawie danych.",
    },
    {
      title: "Przejrzyste raporty",
      description:
        "Dostarczamy regularne raporty, które zawierają wszystkie ważne metryki (impressions, CTR, CPC, ROAS, lead value) i rekomendacje na przyszłość.",
    },
    {
      title: "Jasne zasady",
      description:
        "Nie gwarantujemy konkretnych wyników. Zakres, raportowanie i zasady współpracy ustalamy w umowie, a po każdym etapie omawiamy wyniki i kolejne kroki.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="TikTok Ads Wrocław | Fotz Studio"
        description="Reklamy TikTok Ads Wrocław — agencja Fotz.pl. Kampanie TikTok dla firm z Wrocławia: In-Feed Ads, Spark Ads, kreacje wideo, optymalizacja. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/tiktok-ads/wroclaw"
        keywords="tiktok ads wroclaw, reklamy tiktok wroclaw, agencja tiktok ads wroclaw, kampanie tiktok wroclaw, tiktok advertising wroclaw, tiktok ads dla firm wroclaw, tiktok ads cennik wroclaw"
      />

      <ServiceSchema
        name="Kampanie TikTok Ads Wrocław"
        description="Profesjonalne kampanie TikTok Ads dla firm z Wrocławia. Kreacje wideo, targetowanie grupy docelowej, In-Feed Ads, Spark Ads, TopView i Brand Takeover. Wsparcie od konsultacji do optymalizacji."
        areaServed="Wroclaw"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <FAQSchema items={faqItems} />

      <div className="min-h-screen bg-white">
        <PageBreadcrumbs items={breadcrumbItems} />

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kampanie TikTok Ads Wrocław
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl">
              TikTok Ads Wrocław — kampanie reklamowe TikTok dla firm z Wrocławia i Dolnego Śląska. Pracujemy z Poznania, a firmy z Wrocławia obsługujemy zdalnie. Pomagamy dotrzeć do młodszych odbiorców z kampanią i wideo dopasowanymi do platformy. Bezpłatna konsultacja.
            </p>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dlaczego TikTok Ads dla biznesu we Wrocławiu?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                  <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-700 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Korzyści TikTok Ads dla firm we Wrocławiu</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Duża, aktywna publiczność</h3>
                  <p className="text-gray-700">
                    TikTok to jedna z najpopularniejszych platform wideo, szczególnie wśród młodszych
                    odbiorców. Dla wielu branż to sposób na dotarcie do klientów, których trudno złapać gdzie indziej.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Elastyczny budżet</h3>
                  <p className="text-gray-700">
                    Budżet reklamowy ustalasz sam i płacisz go bezpośrednio TikTokowi. Kampanię można zacząć
                    od testów na mniejszej skali i zwiększać budżet tam, gdzie dane pokazują sens.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Algorytm sprzyjający wzrostowi</h3>
                  <p className="text-gray-700">
                    Algorytm TikToka promuje treści na podstawie zaangażowania, co oznacza, że dobrze wykonane
                    kampanie mogą rozwijać się organicznie i osiągać dużo szerszy zasięg.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Odkrywanie produktów</h3>
                  <p className="text-gray-700">
                    Użytkownicy TikToka chętnie odkrywają nowe produkty i usługi.
                    Dobrze przygotowane wideo może skutecznie prowadzić ich do sklepu lub formularza.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Formaty reklam TikTok Ads</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {formats.map((format, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{format.title}</h3>
                  <p className="text-gray-700">{format.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nasze usługi TikTok Ads w Wrocławiu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Zarządzanie kampaniami</h3>
                <p className="text-gray-700 mb-4">
                  Prowadzimy kampanie TikTok Ads od planowania, poprzez uruchomienie, aż do optymalizacji i skalowania.
                  Regularnie monitorujemy metryki i wprowadzamy zmiany, by poprawiać wyniki.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Produkcja kreatywu</h3>
                <p className="text-gray-700 mb-4">
                  Tworzymy angażujące materiały wideo dostosowane do algorytmu TikToka. Każde wideo zawiera
                  hook, dynamiczny dźwięk i call-to-action, który skłania do kliknięcia.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Targetowanie precyzyjne</h3>
                <p className="text-gray-700 mb-4">
                  Kierujemy reklamy do dokładnie definiowanej grupy docelowej we Wrocławiu, uwzględniając
                  wiek, płeć, zainteresowania, zachowania i lokalizację dla maksymalnej trafności.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">A/B testing i optymalizacja</h3>
                <p className="text-gray-700 mb-4">
                  Testujemy różne kreatywne podejścia, copy, obrazy i audience segments. Automatycznie wyłączamy
                  słabe performing ads i skalujemy te, które generują najlepsze wyniki.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Proces wdrożenia kampanii TikTok Ads</h2>
            <ol className="space-y-6">
              {processSteps.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="font-bold text-pink-600 text-xl flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-8">Dlaczego wybrać agencję Fotz.pl?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyUsPoints.map((point, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-blue-100">{point.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęstsze pytania o TikTok Ads w Wrocławiu</h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-6 last:border-b-0">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Kampanie TikTok Ads w innych miastach</h2>
            <p className="text-lg text-gray-700 mb-8">
              Obsługujemy kampanie TikTok Ads w całej Polsce. Wybierz swoje miasto aby zobaczyć szczegółowe
              informacje o rynku lokalnym i dostępnych usługach.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/performance-marketing/tiktok-ads/warszawa"
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                TikTok Ads Warszawa
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/krakow"
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                TikTok Ads Kraków
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/poznan"
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                TikTok Ads Poznań
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/gdansk"
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                TikTok Ads Gdańsk
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/lodz"
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                TikTok Ads Łódź
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/katowice"
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                TikTok Ads Katowice
              </Link>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gotów na kampanię TikTok Ads w Wrocławiu?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Skontaktuj się z naszą agencją, aby omówić Twoją kampanię. Zapewnimy bezpłatną konsultację,
              podczas której analizujemy Twoje potrzeby, konkurencję i możliwości na platformie TikTok.
            </p>
            <Link
              to="/performance-marketing/tiktok-ads"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Powrót do TikTok Ads
            </Link>
          </section>
        </FadeInView>

        <ContactSection />
      </div>
    </Layout>
  );
}
