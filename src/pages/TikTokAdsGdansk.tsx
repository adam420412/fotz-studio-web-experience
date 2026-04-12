import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsGdansk() {
  const title = "Reklamy TikTok Ads Gdańsk — agencja kampanii TikTok | Fotz.pl";
  const description =
    "TikTok Ads Gdańsk — agencja Fotz.pl. Kampanie TikTok Ads dla firm z Gdańska i Trójmiasta. Kreacje wideo, targetowanie Gen Z. Bezpłatna konsultacja!";
  const canonical = "https://fotz.pl/performance-marketing/tiktok-ads/gdansk";

  const faqItems = [
    {
      question: "Ile kosztują reklamy TikTok Ads w Gdańsku?",
      answer:
        "Koszty kampanii TikTok Ads zależą od budżetu, celu kampanii i grupy docelowej. Oferujemy elastyczne pakiety dopasowane do firm z Gdańska i Trójmiasta. Zapraszamy na bezpłatną konsultację.",
    },
    {
      question: "Ile czasu trwa uruchomienie kampanii TikTok Ads?",
      answer:
        "Standardowa kampania TikTok Ads uruchamiana jest w ciągu 5-7 dni roboczych od zatwierdzenia briefu. Przygotowujemy kreatywne treści wideo dostosowane do grupy docelowej.",
    },
    {
      question: "Jakie branże działają na TikTok w Gdańsku?",
      answer:
        "TikTok sprawdza się dla e-commerce, kosmetyki, fashion, food delivery, usług oraz technologii. Gen Z i millenialsowie stanowią główną grupę docelową na TikToku.",
    },
    {
      question: "Czy mogę testować TikTok Ads z małym budżetem?",
      answer:
        "Tak, minimum budżetu to zwykle 100-200 PLN dziennie. Polecamy testowe kampanie przed skalowaniem. Analiza wyników pomaga optymalizować wydatki na reklamy.",
    },
    {
      question: "Jakie są konwersje z TikTok Ads w Trójmieście?",
      answer:
        "Konwersje zależą od branży i grupy docelowej. Średnia CTR na TikToku wynosi 3-5%. W Gdańsku i Trójmieście obserwujemy wysoki engagement wśród Gen Z.",
    },
    {
      question: "Czy oferujecie tworzenie kreatywnych treści wideo?",
      answer:
        "Tak, zespół Fotz.pl przygotowuje scenariusze, produkcję wideo i montaż dla kampanii TikTok Ads. Wszystko dostosowujemy do grupy docelowej w Gdańsku.",
    },
    {
      question: "Jak mierzycie efektywność kampanii TikTok Ads?",
      answer:
        "Monitorujemy metryki: zasięg, engagement, konwersje, ROAS i koszt akwizycji (CAC). Raportujemy wyniki co tydzień dla firm z Gdańska.",
    },
    {
      question: "Czy TikTok Ads wymagają influencerów?",
      answer:
        "Nie, kampanie TikTok Ads działają bez influencerów. Możemy również współpracować z TikTokerami z Trójmiasta dla dodatkowego zasięgu.",
    },
  ];

  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Performance Marketing", href: "/performance-marketing" },
    { label: "TikTok Ads", href: "/performance-marketing/tiktok-ads" },
    { label: "Gdansk", href: "/performance-marketing/tiktok-ads/gdansk" },
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
      />

      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <ServiceSchema
        name="TikTok Ads Gdansk"
        description={description}
        areaServed="Gdansk"
        provider="Fotz.pl"
      />
      <FAQSchema faqItems={faqItems} />

      <div className="min-h-screen">
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              TikTok Ads Gdansk - Agencja Kampanii TikTok
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Agencja Fotz.pl specjalizuje sie w uruchamianiu kampanii TikTok Ads dla firm z
              Gdańska, Gdyni i Sopotu. Kreujemy wideo, targetujemy Gen Z i skalujemy sprzedaz w
              Trójmieście.
            </p>
          </div>
        </FadeInView>

        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Uslugi TikTok Ads dla Gdańska
            </h2>
            <ul className="space-y-4">
              <li className="text-lg text-gray-700">
                Uruchomienie i optymalizacja kampanii TikTok Ads
              </li>
              <li className="text-lg text-gray-700">Tworzenie kreatywnych treści wideo</li>
              <li className="text-lg text-gray-700">Targetowanie grupy docelowej Gen Z</li>
              <li className="text-lg text-gray-700">Zarządzanie budżetem i maksymalizacja ROAS</li>
              <li className="text-lg text-gray-700">Analiza danych i raporty kampanii</li>
              <li className="text-lg text-gray-700">Integracja z CRM i pixel trackingiem</li>
              <li className="text-lg text-gray-700">A/B testing kreacji wideo</li>
              <li className="text-lg text-gray-700">Wsparcie dla e-commerce i usług</li>
            </ul>
          </div>
        </FadeInView>

        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Czemu TikTok Ads dla firm z Trójmiasta?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              TikTok to najszybciej rozwijająca sie platforma spolecznych mediów. Gen Z stanowi
              główną grupe uzytkowników w Polsce, w tym w Gdańsku i na Pomorzu. Reklamy TikTok Ads
              pozwalają na:
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700">Zdobycie nowych klientow w Gdańsku</li>
              <li className="text-gray-700">Zwiększenie swiadomości marki wśród Gen Z</li>
              <li className="text-gray-700">Skalowanie sprzedazy e-commerce</li>
              <li className="text-gray-700">Budowanie zaangażowania i lojalności</li>
              <li className="text-gray-700">
                Niskie koszty akwizycji w porównaniu z Google Ads
              </li>
              <li className="text-gray-700">Kreatywne formaty reklam wideo</li>
              <li className="text-gray-700">Szybkie testy hipotez biznesowych</li>
              <li className="text-gray-700">Integracja z TikTok Shop dla sprzedazy</li>
            </ul>
          </div>
        </FadeInView>

        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Najczestsze pytania</h2>
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Inne miasta</h2>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/performance-marketing/tiktok-ads/lodz"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                TikTok Ads Lodz
              </Link>
              <Link
                to="/performance-marketing/tiktok-ads/katowice"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                TikTok Ads Katowice
              </Link>
            </div>
          </div>
        </FadeInView>

        <ContactSection
          title="Bezpłatna konsultacja TikTok Ads dla Gdańska"
          description="Zapraszamy reprezentantow firm z Gdańska i Trójmiasta na rozmowe o kampanii TikTok Ads. Opowiemy o naszych usługach i jak mozemy wesprzec wzrost Twojej firmy."
        />
      </div>
    </Layout>
  );
}
