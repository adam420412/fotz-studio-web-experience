import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

function GoogleAdsBialystok() {
  const canonicalUrl = "https://www.fotz-studio.pl/performance-marketing/google-ads/bialystok";

  const faqs = [
    {
      question: "Ile kosztują kampanie Google Ads w Białymstoku?",
      answer: "Na koszt składają się dwie osobne pozycje: budżet reklamowy płacony bezpośrednio Google (koszt kliknięć ustalany w aukcji, zależny od branży i konkurencji) oraz wynagrodzenie za obsługę kampanii. Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie kampanii, typach reklam i sposobie raportowania.",
    },
    {
      question: "Jak szybko dobrze pozycjonuje się kampania Google Ads?",
      answer: "Reklamy mogą zacząć się wyświetlać krótko po zatwierdzeniu przez Google, ale optymalizacja wymaga zebrania danych i testowania słów kluczowych. Jak długo to trwa, zależy od budżetu, branży i liczby konwersji — nie obiecujemy sztywnych terminów efektów.",
    },
    {
      question: "Jaka jest różnica między Google Ads a Display Network?",
      answer: "Google Ads Search to reklamy w wynikach wyszukiwania. Display Network to reklamy banerowe na milionach stron internetowych. Obie można łączyć w jedną zintegrowaną kampanię.",
    },
    {
      question: "Czy mogę zwiększyć budżet kampanii w środku miesiąca?",
      answer: "Oczywiście. Budżet można zmienić w każdej chwili w Google Ads. Doradzimy, jak zwiększać budżet stopniowo, żeby nie tracić kontroli nad kosztem konwersji.",
    },
    {
      question: "Jakie słowa kluczowe wybrać dla firmy w Białymstoku?",
      answer: "Przeprowadzamy dogłębną analizę słów kluczowych dla Białegostoku. Szukamy wyrazów, które mają wysoki potencjał konwersji i są opłacalne. Testujemy różne warianty.",
    },
    {
      question: "Czy Quality Score wpływa na koszt kampanii Google Ads?",
      answer: "Tak, Quality Score znacznie wpływa na CPC. Wyższy Quality Score = niższy koszt kliknięcia. Optymalizujemy Landing Page, Ad Copy i słowa kluczowe, aby poprawić Quality Score.",
    },
    {
      question: "Ile reklam powinno być w jednej kampanii Google Ads?",
      answer: "Rekomendujemy co najmniej 3-4 reklamy per grupa słów kluczowych. To pozwala na testowanie różnych wariantów i znalezienie najlepszych.",
    },
    {
      question: "Jak mierzyć sukces kampanii Google Ads?",
      answer: "Mierzymy: ROAS (zwrot z inwestycji), CPA (koszt pozyskania klienta), konwersje, koszty kliknięcia. Raportujemy wyniki w ustalonym z Tobą rytmie.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.fotz-studio.pl" },
      { "@type": "ListItem", position: 2, name: "Kampanie reklamowe", item: "https://www.fotz-studio.pl/performance-marketing" },
      { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://www.fotz-studio.pl/performance-marketing/google-ads" },
      { "@type": "ListItem", position: 4, name: "Google Ads Białystok", item: canonicalUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kampanie Google Ads Białystok",
    areaServed: "Bialystok",
    url: canonicalUrl,
    telephone: "+48 790 814 814",
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
        title="Google Ads Białystok — agencja kampanii reklamowych | Fotz.pl"
        description="Google Ads Białystok — agencja Fotz.pl. Kampanie Google Ads dla firm z Białegostoku. Reklamy w wyszukiwarce i Display Network. Bezpłatna konsultacja!"
        canonical={canonicalUrl}
        keywords="google ads białystok, agencja google ads białystok, kampanie google ads białystok, reklamy google białystok, google ads dla firm białystok, sem białystok, adwords białystok"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <FadeInView>
        <PageBreadcrumbs path="/performance-marketing/google-ads/bialystok" />
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Google Ads Białystok</h1>
            <p className="text-lg text-gray-600 mb-8">
              Profesjonalne kampanie Google Ads dla firm z Białegostoku. Dochodzimy do klientów, którzy aktywnie szukają Twoich produktów lub usług. Reklamy w wyszukiwarce Google i Display Network z targetowaniem lokalnym dla Białegostoku. Pracujemy z Poznania, a firmy z Białegostoku obsługujemy zdalnie.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-900">
                <strong>Bezpłatna konsultacja:</strong> Sprawdź, czy i jak Google Ads może pomóc Twojej firmie w Białymstoku pozyskiwać klientów.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Nasze usługi Google Ads w Białymstoku</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-4">✓</span>
                <span>Google Ads Search: Reklamy w wynikach wyszukiwania Google dla firm z Białegostoku</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-4">✓</span>
                <span>Display Network: Reklamy banerowe na milionach stron internetowych</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-4">✓</span>
                <span>Kampanie Shopping: Promowanie produktów z cennikiem w Google</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-4">✓</span>
                <span>Remarketing: Dotarcie do osób, które widziały Twoją stronę</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-4">✓</span>
                <span>YouTube Ads: Reklamy wideo na kanale YouTube</span>
              </li>
            </ul>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Możliwości targetowania w Białymstoku</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Lokalizacja</h3>
                <p className="text-gray-700">Precyzyjne targetowanie na Białystok, konkretne dzielnice, a nawet promień kilometrowy od Twojego biura.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Słowa kluczowe</h3>
                <p className="text-gray-700">Wybieramy słowa, które szukają Twoi potencjalni klienci w Białymstoku. Optymalizujemy każdy kampanię.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Demografika</h3>
                <p className="text-gray-700">Wiek, płeć, status zawodowy. Dotieramy do właściwej grupy docelowej dla Twojego produktu.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Zainteresowania</h3>
                <p className="text-gray-700">Wybieramy ludzi zainteresowanych Twoją branżą w Białymstoku i okolicach.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Pytania i odpowiedzi</h2>
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
        <ContactSection title="Chcesz kampanię Google Ads w Białymstoku?" />
      </FadeInView>
    </Layout>
  );
}

export default GoogleAdsBialystok;
