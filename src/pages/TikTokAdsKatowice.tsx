import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsKatowice() {
  const title = "Reklamy TikTok Ads Katowice — agencja kampanii TikTok | Fotz.pl";
  const description =
    "TikTok Ads Katowice — agencja Fotz.pl. Kampanie TikTok Ads dla firm ze Śląska i Katowic. Kreacje wideo, targetowanie, reklamy wideo. Bezpłatna konsultacja!";
  const canonical = "https://fotz.pl/performance-marketing/tiktok-ads/katowice";

  const faqItems = [
    {
      question: "Ile kosztują reklamy TikTok Ads w Katowicach?",
      answer:
        "Kampanie TikTok Ads w Katowicach startują od 100 PLN dziennie. Budżet dostosowujemy do celów biznesowych i grupy docelowej. Skontaktuj sie z nami na bezpłatną konsultację.",
    },
    {
      question: "Jakie branże działają dobrze na TikTok w Śląsku?",
      answer:
        "Na TikTok sprawdzają sie: e-commerce, fitness, kosmetyki, fashion, gastronomia, edukacja i usługi biznesowe. Gen Z to główna grupa docelowa.",
    },
    {
      question: "Jaki jest efekt kampanii TikTok Ads?",
      answer:
        "Średni CTR na TikToku wynosi 3-5%. ROAS zależy od branży i ceny produktu. Dla e-commerce obserwujemy zwrot 3-5x przy optymalnym targetowaniu.",
    },
    {
      question: "Czy mozna sprzedawać bezpośrednio przez TikTok Ads?",
      answer:
        "Tak, poprzez TikTok Shop. Mozemy też kierować traffic na Twój sklep, strone lub formularz. Wszystko integrujemy z pixel trackingiem.",
    },
    {
      question: "Ile czasu trwa przygotowanie kampanii?",
      answer:
        "Kampania uruchamiana jest w ciągu 5-7 dni od zatwierdzenia briefu. Przygotowujemy scenariusz, produkcję wideo, pixel i konfigurację.",
    },
    {
      question: "Jakie metryki monitorujecie w kampaniach?",
      answer:
        "Monitorujemy: zasięg, engagement, konwersje, ROAS, CAC, CTR i koszt per lead. Raportujemy wyniki co tydzień dla wszystkich klientów.",
    },
    {
      question: "Czy mozna testować TikTok Ads bez dużego budżetu?",
      answer:
        "Tak, polecamy testowe kampanie z budżetem 100-200 PLN dziennie. Po analizie danych skalujemy kampanie, które przynoszą najlepsze wyniki.",
    },
    {
      question: "Czy TikTok Ads wymaga wsparcia influencerów?",
      answer:
        "Nie, kampanie działają samodzielnie. Mozemy jednak wspołpracować z popularnymi TikTokerami z Katowic dla dodatko reach i wiarygodności.",
    },
  ];

  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Performance Marketing", href: "/performance-marketing" },
    { label: "TikTok Ads", href: "/performance-marketing/tiktok-ads" },
    { label: "Katowice", href: "/performance-marketing/tiktok-ads/katowice" },
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
        name="TikTok Ads Katowice"
        description={description}
        areaServed="Katowice"
        provider="Fotz.pl"
      />
      <FAQSchema faqItems={faqItems} />

      <div className="min-h-screen">
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              TikTok Ads Katowice - Agencja Kampanii TikTok
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Agencja Fotz.pl specjalizuje sie w kampaniach TikTok Ads dla firm z Katowic i całego
              Śląska. Tworzymy treści wideo, targetujemy Gen Z, budujemy strategię i skalujemy
              sprzedaż.
            </p>
          </div>
        </FadeInView>

        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Uslugi TikTok Ads na Śląsku
            </h2>
            <ul className="space-y-4">
              <li className="text-lg text-gray-700">
                Opracowanie strategii kampanii TikTok Ads
              </li>
              <li className="text-lg text-gray-700">Tworzenie kreatywnych materiałów wideo</li>
              <li className="text-lg text-gray-700">Targetowanie odbiorców w Katowicach</li>
              <li className="text-lg text-gray-700">Optymalizacja wydatków na reklamy</li>
              <li className="text-lg text-gray-700">Maksymalizacja ROAS i konwersji</li>
              <li className="text-lg text-gray-700">Konfiguracja pixel i tracking</li>
              <li className="text-lg text-gray-700">Testowanie kreatywności i segmentów</li>
              <li className="text-lg text-gray-700">Ciągłe wsparcie i optymalizacja</li>
            </ul>
          </div>
        </FadeInView>

        <FadeInView className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Czemu TikTok Ads dla biznesów na Śląsku?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              TikTok to najszybciej rosnąca platforma spolecznych mediów. W Katowicach i na Śląsku
              Gen Z stanowi dynamiczną grupe odbiorców. Kampanie TikTok Ads pozwalają na:
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700">
                Dotarcie do mlodych potencjalnych klientów w Katowicach
              </li>
              <li className="text-gray-700">Zwiększenie swiadomości marki wśród Gen Z</li>
              <li className="text-gray-700">Skalowanie sprzedaży w e-commerce</li>
              <li className="text-gray-700">Niskie koszty zaangażowania</li>
              <li className="text-gray-700">Kreatywne formaty i autentyczne treści</li>
              <li className="text-gray-700">Szybkie adaptowanie sie do trendów</li>
              <li className="text-gray-700">Integracja z systemami sprzedaży online</li>
              <li className="text-gray-700">ROI czesto wyższy niż Google Ads</li>
            </ul>
          </div>
        </FadeInView>

        <FadeInView className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Czesto zadawane pytania</h2>
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
                to="/performance-marketing/tiktok-ads/lodz"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                TikTok Ads Lodz
              </Link>
            </div>
          </div>
        </FadeInView>

        <ContactSection
          title="Bezpłatna konsultacja TikTok Ads dla Katowic"
          description="Zapraszamy przedsiebiorcy z Katowic i całego Śląska na rozmowę o kampaniach TikTok Ads. Pokażemy strategie, mozliwosci i jak mozemy wspomóc wzrost Twojego biznesu."
        />
      </div>
    </Layout>
  );
}
