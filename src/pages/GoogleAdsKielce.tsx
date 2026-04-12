import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

function GoogleAdsKielce() {
  const canonicalUrl = "https://fotz.pl/performance-marketing/google-ads/kielce";

  const faqs = [
    {
      question: "Ile kosztują reklamy Google Ads w Kielcach?",
      answer: "Koszt zależy od branży i konkurencji. W Kielcach średnia cena za klik (CPC) wynosi 1-4 PLN. Minimalna inwestycja to zazwyczaj 500 PLN miesięcznie. Oferujemy elastyczne pakiety do każdego budżetu.",
    },
    {
      question: "Jak długo trwa wdrożenie kampanii Google Ads?",
      answer: "Wdrożenie zajmuje 3-5 dni roboczych. W tym czasie konfigurujemy kampanię, tworzymy reklamy, ustawiamy targetowanie na Kielce i przeprowadzamy testowanie.",
    },
    {
      question: "Jakie wskaźniki mierzycie w kampaniach Google Ads?",
      answer: "Monitorujemy: konwersje, CPA (koszt pozyskania klienta), CTR (współczynnik kliknięć), Quality Score, ROAS (zwrot z inwestycji), średni CPC. Raporty wysyłamy co tydzień.",
    },
    {
      question: "Czy mogę kontrolować budżet kampanii w Kielcach?",
      answer: "Oczywiście. Możesz ustalić dzienny budżet, roczny budżet, a my optymalizujemy wydatki, aby maksymalizować konwersje w ramach Twojego budżetu.",
    },
    {
      question: "Jakie branże najlepiej się konwertują na Google Ads?",
      answer: "Najlepsze wyniki osiągamy w: e-commerce, usługach (fryzjerskie, medyczne, nauka języka), branży finansowej, nieruchomościach. Każda branża ma inną strategię.",
    },
    {
      question: "Czy Quality Score wpływa na koszt moich reklam?",
      answer: "Znacznie wpływa. Wyższy Quality Score oznacza niższy CPC. Ulepszamy Landing Page, Ad Copy i dopasowanie słów kluczowych, aby zwiększyć Quality Score.",
    },
    {
      question: "Co to jest Remarketing w Google Ads?",
      answer: "Remarketing to wyświetlanie reklam osobom, które już odwiedziły Twoją stronę. Bardzo efektywne do zwiększenia konwersji wśród zainteresowanego audience.",
    },
    {
      question: "Ile czasu zajmuje zbieranie danych dla optymalizacji?",
      answer: "Algorytm Google potrzebuje co najmniej 50 konwersji do nauki. To zajmuje zazwyczaj 2-4 tygodnie, w zależności od budżetu i konkurencji w Kielcach.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://fotz.pl" },
      { "@type": "ListItem", position: 2, name: "Kampanie reklamowe", item: "https://fotz.pl/performance-marketing" },
      { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://fotz.pl/performance-marketing/google-ads" },
      { "@type": "ListItem", position: 4, name: "Google Ads Kielce", item: canonicalUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kampanie Google Ads Kielce",
    areaServed: "Kielce",
    url: canonicalUrl,
    telephone: "+48 123 456 789",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title="Google Ads Kielce — agencja kampanii reklamowych | Fotz.pl"
        description="Google Ads Kielce — agencja Fotz.pl. Kampanie Google Ads dla firm z Kielc. Reklamy w Google, targetowanie lokalne, optymalizacja CPC. Bezpłatna konsultacja!"
        canonical={canonicalUrl}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <FadeInView>
        <PageBreadcrumbs path="/performance-marketing/google-ads/kielce" />
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Google Ads Kielce</h1>
            <p className="text-lg text-gray-600 mb-8">
              Kampanie Google Ads dla firm z Kielc. Agencja Fotz.pl specjalizuje się w reklamach w Google z targetowaniem lokalnym. Zwiększ widoczność w wyszukiwarce, popraw sprzedaż i przychody dzięki profesjonalnym kampaniom.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-900">
                <strong>Bezpłatna konsultacja:</strong> Dowiedz się, jak mogą Ci pomóc kampanie Google Ads dostosowane do Twoich potrzeb w Kielcach.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Dlaczego Google Ads dla Kielc?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Google Ads to najefektywniejszy sposób na dotarcie do potencjalnych klientów, którzy aktywnie szukają Twoich produktów lub usług w Kielcach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">1.</span>
                  Szybkie rezultaty
                </h3>
                <p className="text-gray-700">Reklama jest widoczna w Google już w ciągu godzin. Bezpośredni dostęp do klientów szukających w Kielcach.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">2.</span>
                  Pełna kontrola budżetu
                </h3>
                <p className="text-gray-700">Płacisz tylko za kliknięcia. Możesz ustalić maksymalny dzienny budżet i zmienić go w dowolnym momencie.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">3.</span>
                  Precyzyjne targetowanie
                </h3>
                <p className="text-gray-700">Dochodzimy do ludzi z Kielc, którzy szukają dokładnie tego, co oferujesz. Brak marnowania budżetu.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">4.</span>
                  Mierzalne rezultaty
                </h3>
                <p className="text-gray-700">Każda konwersja, klik, wyświetlenie jest śledzone. Wiesz dokładnie, ile zarabiasz na kampanii.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Nasz proces pracy w Kielcach</h2>
            <ol className="space-y-6">
              <li className="flex">
                <span className="text-blue-600 font-bold mr-4 text-xl">1.</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analiza i strategia</h3>
                  <p className="text-gray-700">Poznajemy Twoją branżę, konkurencję w Kielcach, cele biznesowe. Opracowujemy strategię kampanii.</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-blue-600 font-bold mr-4 text-xl">2.</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Konfiguracja i testowanie</h3>
                  <p className="text-gray-700">Ustawiamy kampanię w Google Ads, tworzymy reklamy, konfiguruemy targetowanie na Kielce.</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-blue-600 font-bold mr-4 text-xl">3.</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Monitoring i optymalizacja</h3>
                  <p className="text-gray-700">Codziennie monitorujemy wyniki. Optymalizujemy słowa kluczowe, reklamy, budżety dla lepszych rezultatów.</p>
                </div>
              </li>
              <li className="flex">
                <span className="text-blue-600 font-bold mr-4 text-xl">4.</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Raportowanie</h3>
                  <p className="text-gray-700">Cotygodniowe raporty ze wszystkimi metrykami. Pełna transparentność wyników kampanii.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Najczęściej zadawane pytania</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <ContactSection title="Gotów na kampanię Google Ads w Kielcach?" />
      </FadeInView>
    </Layout>
  );
}

export default GoogleAdsKielce;
