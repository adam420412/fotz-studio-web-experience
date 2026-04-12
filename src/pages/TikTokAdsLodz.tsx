import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsLodz() {
  const title = "Reklamy TikTok Ads Łódź — agencja kampanii TikTok | Fotz.pl";
  const description =
    "TikTok Ads Łódź — agencja Fotz.pl. Kampanie TikTok Ads dla firm z Łodzi. Kreacje wideo, targetowanie grupy docelowej. Bezpłatna konsultacja!";
  const canonical = "https://fotz.pl/performance-marketing/tiktok-ads/lodz";

  const faqItems = [
    {
      question: "Ile kosztują reklamy TikTok Ads w Łodzi?",
      answer:
        "Koszty kampanii TikTok Ads w Łodzi zaczynają sie od 100 PLN dziennie. Budżet dostosowujemy do celów biznesowych i grupy docelowej. Zapraszamy na bezpłatną konsultację z naszymi specjalistami.",
    },
    {
      question: "Jakie branże działają na TikTok w Łodzi?",
      answer:
        "Na TikToku w Łodzi dobrze sprawdzają sie: e-commerce, moda, beauty, gastronomia, usługi edukacyjne i tech. Gen Z i milenialowie to główna grupa uzytkowników.",
    },
    {
      question: "Ile czasu trwa uruchomienie kampanii?",
      answer:
        "Kampania TikTok Ads uruchamiana jest zwykle w ciągu 5-7 dni od zatwierdzenia briefu. Przygotowujemy scenariusze, produkcję wideo i pixel tracking.",
    },
    {
      question: "Czy mozemy testować TikTok Ads z małym budżetem?",
      answer:
        "Tak, polecamy testowe kampanie z budżetem 100-300 PLN dziennie. Po analizie wyników skalujemy kampanie, które działają najlepiej.",
    },
    {
      question: "Jak mierzycie efektywność TikTok Ads?",
      answer:
        "Monitorujemy: zasięg, konwersje, ROAS, koszt akwizycji (CAC) i engagement. Raporty przygotowujemy co tydzień dla firm z Łodzi.",
    },
    {
      question: "Czy TikTok Ads wymagają wsparcia influencerów?",
      answer:
        "Nie, kampanie działają samodzielnie. Mozemy jednak wspołpracować z popularnym TikTokerami z Łodzi dla dodatkowego zasięgu i wiarygodności.",
    },
    {
      question: "Jakie formaty reklam oferujecie na TikTok?",
      answer:
        "Oferujemy: In-Feed Ads, Branded Hashtag Challenges, TopView i Spark Ads. Dobieramy format do celu kampanii i grupy docelowej.",
    },
    {
      question: "Czy mozna integrować TikTok Ads z e-commerce?",
      answer:
        "Tak, integrujemy TikTok Shop, pixel tracking i CRM. Mozna sprzedawać bezpośrednio przez TikTok lub kierować na Twój sklep online.",
    },
  ];

  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Performance Marketing", href: "/performance-marketing" },
    { label: "TikTok Ads", href: "/performance-marketing/tiktok-ads" },
    { label: "Lodz", href: "/performance-marketing/tiktok-ads/lodz" },
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
        name="TikTok Ads Lodz"
        description={description}
        areaServed="Lodz"
        provider="Fotz.pl"
      />
      <FAQSchema faqItems={faqItems} />

      <div className="min-h-screen">
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              TikTok Ads Lódz - Agencja Kampanii TikTok
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Agencja Fotz.pl to specjaliści od kampanii TikTok Ads dla firm z Łodzi. Tworzymy
              kreatywne treści wideo, targetujemy grupe docelową i skalujemy sprzedaż dla biznesów
              na terenie Łódzkiego.
            </p>
          </div>
        </FadeInView>

        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Uslugi TikTok Ads w Łodzi
            </h2>
            <ul className="space-y-4">
              <li className="text-lg text-gray-700">
                Strategia i uruchomienie kampanii TikTok Ads
              </li>
              <li className="text-lg text-gray-700">Tworzenie i produkcja treści wideo</li>
              <li className="text-lg text-gray-700">Targetowanie demograficzne i behawioralne</li>
              <li className="text-lg text-gray-700">Optymalizacja budżetu kampanii</li>
              <li className="text-lg text-gray-700">Zarządzanie ROAS i kosztem konwersji</li>
              <li className="text-lg text-gray-700">Integracja z systemami sprzedaży</li>
              <li className="text-lg text-gray-700">A/B testing i analiza wydajności</li>
              <li className="text-lg text-gray-700">Wsparcie dla wszystkich branż</li>
            </ul>
          </div>
        </FadeInView>

        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Dlaczego TikTok Ads dla firm z Łodzi?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              TikTok to najszybciej rosnąca platforma mediów społecznych w Polsce. W Łodzi, podobnie
              jak w całym kraju, Gen Z stanowi 35% uzytkowników. TikTok Ads oferuje:
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700">Bezpośredni dostęp do Gen Z i millenialsów</li>
              <li className="text-gray-700">Niskie koszty zaangażowania w stosunku do Google Ads</li>
              <li className="text-gray-700">Kreatywne formaty reklam (TikTok Trends)</li>
              <li className="text-gray-700">Szybkie testowanie hipotez biznesowych</li>
              <li className="text-gray-700">Wysoki engagement i organic reach</li>
              <li className="text-gray-700">Integracja z TikTok Shop dla e-commerce</li>
              <li className="text-gray-700">Skalowanie sprzedaży i powiększanie bazy klientów</li>
              <li className="text-gray-700">Budowanie świadomości marki wśród młodych odbiorców</li>
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
                to="/performance-marketing/tiktok-ads/gdansk"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                TikTok Ads Gdansk
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
          title="Bezpłatna konsultacja TikTok Ads dla Łodzi"
          description="Zapraszamy przedstawicieli firm z Łodzi na konsultację bez zobowiązań. Opowiemy o naszych usługach TikTok Ads, strategii kampanii i tym, jak mozemy pomóc w rozwoju Twojej firmy."
        />
      </div>
    </Layout>
  );
}
