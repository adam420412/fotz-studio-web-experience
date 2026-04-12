import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

function FacebookAdsTorun() {
  const canonicalUrl = "https://fotz.pl/performance-marketing/facebook-ads/torun";

  const faqs = [
    {
      question: "Ile kosztują reklamy Facebook Ads w Toruniu?",
      answer: "Koszt kampanii Facebook Ads zależy od budżetu, branży i konkurencji. Minimalna inwestycja to zazwyczaj 500 PLN miesięcznie. Oferujemy indywidualne pakiety dostosowane do potrzeb każdej firmy z Torunia.",
    },
    {
      question: "Jak długo trwa optymalizacja kampanii Meta Ads?",
      answer: "Optymalizacja trwa co najmniej 2-3 tygodnie. W tym czasie testujemy różne grupy docelowe, kreatywności i budżety, aby znaleźć najlepszą konfigurację dla Twojego biznesu.",
    },
    {
      question: "Jakie wyniki można osiągnąć z Facebook Ads Toruń?",
      answer: "Średnio nasze kampanie osiągają ROAS (zwrot z inwestycji) na poziomie 3-5x. Dokładne wyniki zależą od branży, produktu i targetowania. Gwarantujemy przezroczystość w raportowaniu.",
    },
    {
      question: "Czy mogę zmienić budżet kampanii w dowolnym momencie?",
      answer: "Tak, możesz zmienić budżet, docelową grupę wiekową, zainteresowania i inne parametry kampanii w każdej chwili. Doradczę Ci optymalny timing zmian.",
    },
    {
      question: "Jakie branże najlepiej się konwertują na Meta Ads?",
      answer: "E-commerce, usługi finansowe, edukacja i B2C osiągają najlepsze wyniki. Jednak każda branża ma potencjał przy odpowiedniej strategii i doborze audience.",
    },
    {
      question: "Czy potrzebuję Pixela Facebooka na mojej stronie?",
      answer: "Tak, Pixel Facebook jest niezbędny do śledzenia konwersji i retargetowania. Zainstalujemy go na Twojej stronie i skonfigurujemy wszystkie ważne zdarzenia.",
    },
    {
      question: "Jak wygląda proces współpracy z agencją Fotz.pl?",
      answer: "Proces: 1) Konsultacja strategiczna, 2) Wdrożenie i testowanie, 3) Optymalizacja, 4) Cotygodniowe raporty. Jesteśmy zawsze dostępni dla Torunia i okolic.",
    },
    {
      question: "Ile czasu zajmuje zwiększenie sprzedaży po starcie kampanii?",
      answer: "Pierwsze rezultaty widać zazwyczaj w ciągu 1-2 tygodni. Pełne potencjał kampania osiąga po 4-8 tygodniach optymalizacji i zbierania danych.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://fotz.pl" },
      { "@type": "ListItem", position: 2, name: "Kampanie reklamowe", item: "https://fotz.pl/performance-marketing" },
      { "@type": "ListItem", position: 3, name: "Facebook Ads", item: "https://fotz.pl/performance-marketing/facebook-ads" },
      { "@type": "ListItem", position: 4, name: "Facebook Ads Toruń", item: canonicalUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kampanie Facebook Ads Toruń",
    areaServed: "Torun",
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
        title="Reklamy Facebook Ads Toruń — agencja Meta Ads | Fotz.pl"
        description="Facebook Ads Toruń — agencja Fotz.pl. Kampanie Meta Ads dla firm z Torunia. Reklamy na Facebooku i Instagramie, targetowanie lokalne. Bezpłatna konsultacja!"
        canonical={canonicalUrl}
        keywords="facebook ads toruń, agencja facebook ads toruń, kampanie facebook toruń, reklamy facebook toruń, meta ads toruń"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <FadeInView>
        <PageBreadcrumbs path="/performance-marketing/facebook-ads/torun" />
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Facebook Ads Toruń</h1>
            <p className="text-lg text-gray-600 mb-8">
              Kampanie Facebook Ads i Meta Ads dla firm z Torunia. Nasze agencja specjalizuje się w reklamach na Facebooku i Instagramie z targetowaniem lokalnym. Zwiększ zasięg i sprzedaż Twojej firmy dzięki profesjonalnym kampaniom Meta Ads.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-900">
                <strong>Bezpłatna konsultacja:</strong> Poznaj naszą strategię kampanii Facebook Ads specjalnie dla Twojej branży w Toruniu.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Dlaczego warto wybrać nasze kampanie Facebook Ads?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span>Doświadczenie: 10+ lat na rynku kampanii reklamowych dla firm z Torunia</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span>Targetowanie precyzyjne: Docieramy do właściwych klientów w Toruniu i okolicach</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span>ROI: Średnio 3-5x zwrotu z inwestycji w kampaniach Meta Ads</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span>Raporty cotygodniowe: Pełna transparentność wyników kampanii</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span>Wsparcie: Dedykowany specjalista do opieki nad Twoją kampanią</span>
              </li>
            </ul>
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
        <ContactSection title="Gotów na kampanię Facebook Ads w Toruniu?" />
      </FadeInView>
    </Layout>
  );
}

export default FacebookAdsTorun;
