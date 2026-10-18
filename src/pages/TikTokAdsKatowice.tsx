import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function TikTokAdsKatowice() {
  const title = "TikTok Ads Katowice — agencja kampanii reklamowych TikTok | Fotz.pl";
  const description =
    "Reklamy TikTok Ads Katowice — agencja Fotz.pl. Kampanie TikTok dla firm ze Śląska i Katowic: In-Feed Ads, Spark Ads, kreacje wideo. Targetowanie grupy docelowej. Bezpłatna konsultacja!";
  const canonical = "https://www.fotz-studio.pl/performance-marketing/tiktok-ads/katowice";

  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Ile kosztują reklamy TikTok Ads w Katowicach?",
      answer:
        "Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie kampanii, liczbie i rodzaju kreacji wideo oraz częstotliwości raportów. Budżet reklamowy płacisz bezpośrednio TikTokowi, zawsze osobno od opłaty za obsługę — jego wysokość dobieramy do celów biznesowych i grupy docelowej. Skontaktuj się z agencją Fotz na bezpłatną konsultację dotyczącą TikTok Ads Katowice.",
    },
    {
      question: "Jakie branże działają dobrze na TikTok w Katowicach i na Śląsku?",
      answer:
        "Na TikTok Ads sprawdzają się: e-commerce, fitness, kosmetyki, fashion, gastronomia, edukacja i usługi biznesowe. Gen Z to główna grupa docelowa na TikToku. W Katowicach i na Śląsku kampanie TikTok Ads mogą wspierać także branżę technologiczną, handel, turystykę i usługi profesjonalne kierowane do młodych potencjalnych klientów — dopasowanie sprawdzamy w testach.",
    },
    {
      question: "Jaki jest efekt kampanii TikTok Ads w Katowicach?",
      answer:
        "Efekt zależy od branży, ceny produktu, jakości kreacji i budżetu. Nie gwarantujemy konkretnego CTR ani zwrotu z inwestycji — zaczynamy od testów kreacji i grup odbiorców, a potem rozwijamy to, co daje najlepsze wyniki w danych.",
    },
    {
      question: "Czy można sprzedawać bezpośrednio przez TikTok Ads?",
      answer:
        "Tak, można sprzedawać poprzez TikTok Shop. Możemy także kierować traffic na Twój sklep, stronę lub formularz. Wszystko integrujemy z pixel trackingiem i analitycznymi narzędziami. Agencja Fotz specjalizuje się w konfigurowaniu kampanii TikTok Ads w Katowicach z pełnym śledzeniem konwersji i sprzedaży.",
    },
    {
      question: "Ile czasu trwa przygotowanie kampanii TikTok Ads?",
      answer:
        "Termin startu ustalamy po zatwierdzeniu briefu — zależy głównie od zakresu produkcji wideo. Przygotowujemy scenariusz, produkcję wideo, pixel trackingowy i konfigurację. Każda kampania TikTok Ads jest testowana przed pełnym uruchomieniem.",
    },
    {
      question: "Jakie metryki monitorujecie w kampaniach TikTok Ads?",
      answer:
        "Monitorujemy: zasięg, engagement, konwersje, ROAS, CAC, CTR i koszt per lead. Raportujemy wyniki co tydzień dla wszystkich klientów. W Katowicach dostarczamy szczegółową analizę wydajności kampanii TikTok Ads z rekomendacjami optymalizacji dedykowanymi dla rynku Śląska.",
    },
    {
      question: "Czy można testować TikTok Ads bez dużego budżetu?",
      answer:
        "Tak, polecamy zacząć od testowych kampanii z mniejszym budżetem, którego wysokość ustalamy wspólnie. Po analizie danych skalujemy kampanie TikTok Ads, które przynoszą najlepsze wyniki. W Katowicach startujemy z małych budżetów, aby znaleźć idealne parametry przed pełnym skalowaniem.",
    },
    {
      question: "Czy TikTok Ads wymaga wsparcia influencerów?",
      answer:
        "Nie, kampanie TikTok Ads można prowadzić bez influencerów. Jeśli ma to sens dla marki, możemy zaproponować współpracę z twórcami, także z regionu, dla dodatkowego zasięgu i wiarygodności. Agencja Fotz łączy organic reach z płatnymi kampaniami TikTok Ads na Śląsku.",
    },
  ];

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Performance Marketing", href: "/performance-marketing" },
    { label: "TikTok Ads", href: "/performance-marketing/tiktok-ads" },
    { label: "Katowice", href: "/performance-marketing/tiktok-ads/katowice" },
  ];

  const formats = [
    {
      title: "In-Feed Ads",
      description:
        "Reklamy pojawiające się w głównym feed użytkownika, seamlessly integrujące się z organiczną zawartością TikTok",
    },
    {
      title: "Spark Ads",
      description:
        "Promowanie istniejących TikTok videów dla większego reach i engagement przy niższym koszcie na kampanie",
    },
    {
      title: "Brand Takeover",
      description:
        "Dominujące reklamy full-screen przy starcie aplikacji — idealne dla kampanii brand awareness na Śląsku",
    },
    {
      title: "Branded Hashtag Challenges",
      description:
        "Interaktywne wyzwania zachęcające użytkowników do tworzenia treści i angażowania się w kampanie TikTok",
    },
    {
      title: "Branded Effects",
      description:
        "Autorskie filtry i efekty video zachęcające użytkowników TikTok do tworzenia treści z logiem marki",
    },
    {
      title: "TopView",
      description:
        "Premium reklama wyświetlająca się jako pierwsze wideo w feed — duży zasięg dla kampanii TikTok Ads",
    },
  ];

  const goals = [
    {
      title: "Zwiększenie Reach",
      description:
        "Dotrzeć do potencjalnych klientów w Katowicach i na całym Śląsku za pośrednictwem kampanii TikTok Ads",
    },
    {
      title: "Budowanie Świadomości Marki",
      description:
        "Zwiększyć rozpoznawalność marki wśród Gen Z w Katowicach poprzez autentyczne i kreatywne treści video",
    },
    {
      title: "Generowanie Lead",
      description:
        "Zbierać kontakty potencjalnych klientów bezpośrednio z kampanii TikTok Ads z targetowaniem na Śląsku",
    },
    {
      title: "Wzrost Sprzedaży",
      description:
        "Skalować przychody e-commerce i usług poprzez optymalizowane kampanie TikTok Ads w Katowicach",
    },
    {
      title: "Zwiększenie Engagement",
      description:
        "Pobudzić interakcje z marką — polubienia, komentarze, udziały i Follow na kanałach TikTok",
    },
    {
      title: "Promowanie Aplikacji",
      description:
        "Zwiększyć instalacje aplikacji mobilnej wśród użytkowników TikTok w Katowicach i na Śląsku",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Analiza i Strategia",
      description:
        "Analizujemy Twoją branżę, konkurentów i celów biznesowych w Katowicach. Budujemy strategię TikTok Ads dedykowaną dla rynku Śląskiego.",
    },
    {
      number: "2",
      title: "Tworzenie Kreatywów",
      description:
        "Tworzymy kreatywne materiały video, które rezonują z Gen Z w Katowicach. Testujemy różne warianty, storytelling i messaging.",
    },
    {
      number: "3",
      title: "Konfiguracja Kampanii",
      description:
        "Ustawiamy pixel tracking, audiencje docelowe i kampanie TikTok Ads w Katowicach z maksymalną precyzją targetowania.",
    },
    {
      number: "4",
      title: "Optymalizacja",
      description:
        "Monitorujemy kampanie, A/B testujemy kreatywność i optymalizujemy ROAS. Skalujemy działające kampanie TikTok Ads na Śląsku.",
    },
    {
      number: "5",
      title: "Raportowanie",
      description:
        "Dostarczamy cotygodniowe raporty z metrykami kampanii TikTok Ads w Katowicach i rekomendacjami ulepszeń.",
    },
  ];

  const whyFotz = [
    {
      title: "Kampanie i wideo w jednym miejscu",
      description:
        "Sami nagrywamy i montujemy materiały wideo, a potem prowadzimy na nich kampanie TikTok Ads — bez przekazywania pracy między kilkoma firmami.",
    },
    {
      title: "Zespół Kreatywów",
      description:
        "Producenci wideo, copywriterzy i designerzy tworzący treści na TikTok dla kampanii TikTok Ads w Katowicach.",
    },
    {
      title: "Data-Driven Approach",
      description:
        "Wszystkie decyzje opieramy na danych i testowaniu. Ciągle optymalizujemy kampanie TikTok Ads na Śląsku.",
    },
    {
      title: "Współpraca zdalna",
      description:
        "Pracujemy z Poznania, a firmy z Katowic obsługujemy zdalnie — rozmowy online, wspólne materiały i stały kontakt z opiekunem kampanii.",
    },
    {
      title: "Transparentna Wycena",
      description:
        "Brak ukrytych kosztów. Znasz dokładnie za co płacisz w kampaniach TikTok Ads w Katowicach.",
    },
    {
      title: "Budżet reklamowy osobno",
      description:
        "Budżet reklamowy płacisz bezpośrednio TikTokowi, osobno od opłaty za obsługę — widzisz, ile wydajesz na same reklamy.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title={title}
        description={description}
        canonical={canonical}
        og={{
          title,
          description,
          type: "website",
          url: canonical,
        }}
        keywords="tiktok ads katowice, agencja tiktok ads katowice, kampanie tiktok katowice, reklamy tiktok katowice, tiktok ads dla firm katowice, tiktok marketing śląsk"
      />

      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name="TikTok Ads Katowice"
        description={description}
        areaServed="Katowice"
        provider="Fotz.pl"
      />
      <FAQSchema items={faqItems} />

      <div className="min-h-screen">
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <FadeInView className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6">
              TikTok Ads Katowice — Agencja Kampanii Reklamowych
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-2xl">
              Agencja Fotz prowadzi kampanie TikTok Ads dla firm z Katowic i całego
              Śląska. Tworzymy treści wideo, targetujemy Gen Z i budujemy strategie kampanii.
              Pracujemy z Poznania, a firmy ze Śląska obsługujemy zdalnie.
            </p>
            <Link
              to="#kontakt"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Bezpłatna Konsultacja TikTok Ads
            </Link>
          </div>
        </FadeInView>

        {/* Why TikTok Ads Stats Section */}
        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Dlaczego Kampanie TikTok Ads w Katowicach?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">Zasięg</div>
                <p className="text-gray-700">
                  TikTok to jedna z najpopularniejszych platform wideo — także wśród odbiorców ze Śląska
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">Gen Z</div>
                <p className="text-gray-700">
                  Platforma, na której łatwo dotrzeć do młodych odbiorców w Katowicach
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">Testy</div>
                <p className="text-gray-700">
                  Zaczynamy od testów kreacji i grup odbiorców, a budżet zwiększamy na to, co działa
                </p>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Formats Section */}
        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Jakie Są Formaty Reklam na TikTok Ads?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              TikTok oferuje różne formaty kampanii TikTok Ads, pozwalające na osiągnięcie
              różnych celów biznesowych dla firm w Katowicach i na Śląsku. Wybieramy format
              optymalny dla Twojej branży i budżetu.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formats.map((format, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{format.title}</h3>
                  <p className="text-gray-700">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Goals Section */}
        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Jakie Cele Zrealizujesz z Kampaniami TikTok Ads w Katowicach?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Kampanie TikTok Ads w Katowicach mogą wspierać wiele celów biznesowych. Agencja
              Fotz dopasowuje strategie do Twoich potrzeb i budżetu dla rynku Śląska.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{goal.title}</h3>
                  <p className="text-gray-700">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Process Section */}
        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Jak Wygląda Proces Realizacji Kampanii TikTok Ads w Katowicach?
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Proces tworzenia kampanii TikTok Ads w Katowicach jest zaplanowany i przejrzysty.
              Przeprowadzamy go równolegle dla szybkiego wdrożenia i testowania na rynku Śląska.
            </p>
            <div className="space-y-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Why Fotz Section */}
        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Dlaczego Wybrać Agencję Fotz do Prowadzenia TikTok Ads w Katowicach?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Agencja Fotz łączy produkcję wideo z prowadzeniem kampanii TikTok Ads. Firmy ze
              Śląska obsługujemy zdalnie z Poznania i jasno mówimy, czego nie możemy obiecać.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyFotz.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                  <div className="h-3 w-12 bg-blue-600 rounded mb-4"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* FAQ Section */}
        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Najczęstsze Pytania o TikTok Ads Katowice
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Poniżej odpowiadamy na najczęściej zadawane pytania o kampaniach TikTok Ads dla
              firm w Katowicach i na Śląsku. Jeśli masz inne pytania, zapraszamy na bezpłatną
              konsultację.
            </p>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <details
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm"
                  open={expandedFaqIndex === idx}
                  onToggle={() =>
                    setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx)
                  }
                >
                  <summary className="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 font-semibold text-gray-900">
                    {item.question}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${expandedFaqIndex === idx ? "rotate-180" : ""}`}
                    />
                  </summary>
                  <div className="px-6 py-4 border-t border-gray-200 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Other Cities Section */}
        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              TikTok Ads Kampanie w Innych Miastach
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Agencja Fotz obsługuje kampanie TikTok Ads w wielu miastach Polsce. Zajrzyj na
              nasze strony dla poszczególnych regionów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                to="/performance-marketing/tiktok-ads/warszawa"
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition text-center"
              >
                TikTok Ads Warszawa
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/krakow"
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition text-center"
              >
                TikTok Ads Kraków
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/wroclaw"
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition text-center"
              >
                TikTok Ads Wrocław
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/poznan"
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition text-center"
              >
                TikTok Ads Poznań
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/gdansk"
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition text-center"
              >
                TikTok Ads Gdańsk
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/lodz"
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition text-center"
              >
                TikTok Ads Łódź
              </Link>
            </div>
          </div>
        </FadeInView>

        <ContactSection
          title="Bezpłatna Konsultacja TikTok Ads dla Katowic"
          description="Zapraszamy przedsiębiorcy z Katowic i całego Śląska na rozmowę o kampaniach TikTok Ads. Pokażemy strategie, możliwości i jak możemy wspomóc wzrost Twojego…"
        />
      </div>
    </Layout>
  );
}
