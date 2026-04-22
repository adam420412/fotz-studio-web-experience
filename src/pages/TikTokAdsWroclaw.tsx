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
        "Koszt reklam TikTok we Wrocławiu zależy od formatu i targetowania. CPM (koszt za tysiąc wyświetleń) wahает się od 8-22 PLN, w zależności od zainteresowań grupy docelowej i konkurencji na rynku. Minimalny budżet to 50 PLN dziennie, ale rekomendujemy 500-1000 PLN dziennie dla optymalnych rezultatów.",
    },
    {
      question: "Jaki format reklamy wybrać na TikToku?",
      answer:
        "Wybór formatu zależy od celu kampanii. Dla awareness wybieramy In-Feed Ads lub TopView. Dla konwersji sprzedażowych rekomendujemy Spark Ads lub Collection Ads. Do budowania zaangażowania społeczności idealne są Hashtag Challenges. Nasz zespół pomoże wybrać optymalny format dla Wrocławia.",
    },
    {
      question: "Czy mogę sprzedawać przez TikTok Ads w Wrocławiu?",
      answer:
        "Absolutnie! TikTok Ads to doskonały kanał sprzedaży dla firm z Wrocławia. Można kierować reklamy bezpośrednio do sklepu internetowego, wysyłać zapytania Lead Form lub integrować z systemami CRM. Średni ROAS dla dobrze zoptymalizowanych kampanii to 2-4x zwrot z inwestycji.",
    },
    {
      question: "Ile czasu trwa optymalizacja kampanii TikTok Ads?",
      answer:
        "Pierwszych wyników można spodziewać się już po 3-7 dniach. Pełna optymalizacja i skalowanie kampanii wymaga 2-3 tygodni testowania i doskonalenia. Stale monitorujemy metryki (CTR, CPC, ROAS) i wprowadzamy zmiany w czasie rzeczywistym.",
    },
    {
      question: "Czy kreujecie materiały wideo do kampanii TikTok?",
      answer:
        "Tak, nasz zespół specjalistów zajmuje się produkcją kreatywnego contentu. Tworzymy scenariusze, filmy, edytujemy materiały i optymalizujemy je pod algorytm TikToka. Każde wideo jest dostosowane do preferncji użytkowników we Wrocławiu i testowane zanim zostanie uruchomione.",
    },
    {
      question: "Jak mierzycie sukces kampanii TikTok Ads?",
      answer:
        "Mierzymy kampanię za pomocą KPI: liczba wyświetleń (impressions), współczynnik kliknięć (CTR), koszt konwersji (CPC), wartość leadów (lead value), zwrot z inwestycji (ROI) i średni czas oglądania (watch time). Dostarczamy szczegółowe raporty co tydzień.",
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
    { value: "1B+", label: "Aktywnych użytkowników na świecie" },
    { value: "1M+", label: "Potencjalnych klientów we Wrocławiu" },
    { value: "78%", label: "Gen Z i Millenialsów na platformie" },
    { value: "3x-5x", label: "Średni ROAS w branży e-commerce" },
  ];

  const formats = [
    {
      title: "In-Feed Ads",
      description:
        "Reklamy pojawiające się naturalnie w głównym feed użytkownika. Osiągają wysokie współczynniki zaangażowania i są idealne do sprzedaży produktów.",
    },
    {
      title: "Spark Ads",
      description:
        "Promowanie istniejących wideo z konta. Format ten zwiększa organiczny zasięg i engagement poprzez amplifikację najlepszych kreatywów.",
    },
    {
      title: "TopView Ads",
      description:
        "Premium format wyświetlający się na górze feed użytkownika przez 3-5 sekund. Gwarantuje wysoką widoczność i najwyższy ROAS.",
    },
    {
      title: "Hashtag Challenge",
      description:
        "Kampanie interaktywne zachęcające użytkowników do tworzenia contentu. Idealne do budowania zaangażowania społeczności i viral marketingu.",
    },
    {
      title: "Brand Takeover",
      description:
        "Przejęcie strony startowej TikToka przez Twoją markę. Najpotężniejszy format, gwarantujący miliony wyświetleń w ciągu kilku sekund.",
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
      title: "Doświadczenie w TikTok Ads",
      description:
        "Nasz zespół ma ponad 5 lat doświadczenia z kampaniami TikTok Ads. Pracowaliśmy z setkami firm z Wrocławia i wiemy, co działa na tym rynku.",
    },
    {
      title: "Kreatywna produkcja wideo",
      description:
        "Posiadamy własny zespół producencki, którzy tworzą angażujące materiały wideo dostosowane do algorytmu TikToka. Każde wideo jest optymalizowane pod względem dźwięku, tempa i wizualnych haków.",
    },
    {
      title: "Targetowanie precyzyjne",
      description:
        "Kierujemy reklamy do dokładnie definiowanej grupy docelowej we Wrocławiu, uwzględniając wiek, płeć, zainteresowania, zachowania i lokalizację dla maksymalnej trafności.",
    },
    {
      title: "Wsparcie 24/7",
      description:
        "Stale monitorujemy kampanie i jesteśmy dostępni do odpowiadania na pytania. Optymalizujemy kampanie w czasie rzeczywistym aby zapewnić najlepsze wyniki.",
    },
    {
      title: "Przejrzyste raporty",
      description:
        "Dostarczamy szczegółowe raporty co tydzień, które zawierają wszystkie ważne metryki (impressions, CTR, CPC, ROAS, lead value) i rekomendacje na przyszłość.",
    },
    {
      title: "Gwarancja zadowolenia",
      description:
        "Jeśli nie jesteś zadowolony z wyników po pierwszym miesiącu, pracujemy bezpłatnie nad zmianami w strategii. Twój sukces to nasz sukces.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="TikTok Ads Wrocław | Fotz Studio"
        description="Reklamy TikTok Ads Wrocław — agencja Fotz.pl. Kampanie TikTok dla firm z Wrocławia: In-Feed Ads, Spark Ads, kreacje wideo, optymalizacja. Bezpłatna konsultacja!"
        canonical="https://fotz.pl/performance-marketing/tiktok-ads/wroclaw"
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
              TikTok Ads Wroclaw — profesjonalne kampanie reklamowe TikTok dla firm z Wroclawa i Dolnego Śląska. Dotrzemy do młodych odbiorców i zwiększamy sprzedaż. Bezpłatna konsultacja.
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
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Miliony aktywnych użytkowników</h3>
                  <p className="text-gray-700">
                    TikTok ma ponad miliard aktywnych użytkowników na całym świecie. We Wrocławiu platforma
                    jest szczególnie popularna wśród osób w wieku 13-35 lat, co stanowi idealny rynek dla wielu branż.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Niższe koszty reklam</h3>
                  <p className="text-gray-700">
                    CPM na TikToku (8-22 PLN) jest znacznie niższy niż na Facebooku czy Instagramie.
                    To oznacza większy zasięg za mniejszy budżet i lepszy ROI dla firm z Wrocławia.
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
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Szybka konwersja sprzedażowa</h3>
                  <p className="text-gray-700">
                    Użytkownicy TikToka są aktywnie zainteresowani odkrywaniem nowych produktów i usług.
                    To sprawia, że kampanie sprzedażowe osiągają wysoki ROAS i szybko generują przychód.
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
                  Prowadzą kampanie TikTok Ads od planowania, poprzez uruchomienie, aż do optymalizacji i skalowania.
                  Nasz zespół monitoruje metryki w czasie rzeczywistym i wprowadza zmiany dla maksymalnego ROI.
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
