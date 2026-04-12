import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Building2, TrendingUp, Star, Users, MapPin, CheckCircle2, ArrowRight, Phone, Target, Smartphone, BarChart3, Lightbulb, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export default function AgencjaMarketingowaBydgoszcz() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Agencja marketingowa", url: "/agencja-marketingowa" },
    { name: "Bydgoszcz", url: "/agencja-marketingowa/bydgoszcz" },
  ];

  const services = [
    {
      id: 1,
      title: "Pozycjonowanie SEO",
      description: "Umieszczenie Twojej firmy na pierwszej stronie wyszukiwarek dla kluczowych słów kluczowych w Bydgoszczy i regionie Kujaw. Garantujemy vidoczność organiczną i zwiększenie ruchu na stronie.",
      icon: TrendingUp,
      features: ["Audyt SEO", "Linkowanie", "Optymalizacja on-page"],
    },
    {
      id: 2,
      title: "Google Ads i kampanie PPC",
      description: "Bezpośrednie dotarcie do potencjalnych klientów szukających usług w Bydgoszczy. Profesjonalne zarządzanie budżetem i maksymalizacja zwrotu z inwestycji (ROI).",
      icon: Target,
      features: ["Google Search", "Display & Video", "Remarketing"],
    },
    {
      id: 3,
      title: "Media społecznościowe",
      description: "Budowanie marki na Facebooku, Instagramie, TikToku i LinkedIn. Zaangażowanie publiczności, tworzenie treści i zarządzanie mediami społecznościowymi dla firm z Bydgoszczy.",
      icon: Users,
      features: ["Strategie SM", "Content creation", "Community management"],
    },
    {
      id: 4,
      title: "Strony WWW i e-commerce",
      description: "Nowoczesne, responsywne strony internetowe zaprojektowane z myślą o konwersji. Szybkie ładowanie, bezpieczeństwo SSL i pełna optymalizacja dla mobilnych urządzeń.",
      icon: Smartphone,
      features: ["Responsive design", "Szybkość ładowania", "Integracje"],
    },
    {
      id: 5,
      title: "Marketing content",
      description: "Tworzenie wartościowych treści, które przyciągają i konwertują klientów. Blog, artykuły, infografiki i wideo dla zwiększenia autorytetu Twojej marki w Bydgoszczy.",
      icon: Lightbulb,
      features: ["Blog optymalizowany", "Copywriting SEO", "Infografiki"],
    },
    {
      id: 6,
      title: "Analityka i raportowanie",
      description: "Pełne śledzenie wyników kampanii z raportami miesięczne. Analiza danych, optymalizacja strategii i ciągła poprawa skuteczności działań marketingowych.",
      icon: BarChart3,
      features: ["GA4 setup", "Raporty niestandardowe", "Optymalizacja"],
    },
  ];

  const packages = [
    {
      id: "starter",
      name: "Pakiet Starter",
      price: "1 500 zł",
      period: "/miesiąc",
      description: "Idealne dla małych firm i startupów",
      features: [
        "Pozycjonowanie SEO",
        "5 wpisów na blogu",
        "Monitoring rankingów",
        "Raport miesięczny",
      ],
      popular: false,
    },
    {
      id: "professional",
      name: "Pakiet Professional",
      price: "3 500 zł",
      period: "/miesiąc",
      description: "Najpopularniejszy - kompleksowy marketing",
      features: [
        "Wszystko z Starter",
        "Zarządzanie Google Ads",
        "Media społecznościowe",
        "10 wpisów na blogu",
        "Konsultacje SEO",
        "Raport szczegółowy",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Pakiet Enterprise",
      price: "Od 7 000 zł",
      period: "/miesiąc",
      description: "Całkowita transformacja cyfrowa",
      features: [
        "Wszystko z Professional",
        "Dedykowany account manager",
        "Kampanie e-commerce",
        "Strategie niestandardowe",
        "Konsultacje wideo co tydzień",
        "Raport strategiczny",
        "Optymalizacja konwersji",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Ile czasu trwa pojawienie się rezultatów z SEO?",
      answer: "SEO to inwestycja długoterminowa. Zazwyczaj pierwsze rezultaty są widoczne po 3-6 miesiącach, a maksymalne rezultaty uzyskuje się po 12-18 miesiącach. Google Ads działają szybciej - możliwe pierwsze konwersje w ciągu kilku dni.",
    },
    {
      question: "Dlaczego wybierać FOTZ zamiast innych agencji w Bydgoszczy?",
      answer: "Mamy ponad 8 lat doświadczenia i pracowaliśmy z 500 plus klientami. Nasz zespół zna specyfkę rynku Bydgoszczy i regionu Kujaw. Gwarantujemy przejrzystość, regularne raporty i dedykowanego specjalistę dla każdego projektu.",
    },
    {
      question: "Czy mogę anulować umowę w każdym momencie?",
      answer: "Tak. Nasze umowy są elastyczne i można je anulować ze stosownym wypowiedzeniem. Nie ma ukrytych opłat ani kontraktów na sztywne warunki. Chcemy pracować dla Ciebie z powodu rezultatów, które dostarczamy.",
    },
    {
      question: "Czy FOTZ pracuje z firmami spoza Bydgoszczy?",
      answer: "Tak, pracujemy z firmami z całej Polski i poza granicami. Jednak specjalizujemy się w marketingu lokalnym dla Bydgoszczy. Jeśli Twoja firma ma zasięg krajowy, możemy również dostosować strategię do Twoich potrzeb.",
    },
    {
      question: "Jaka jest najniższa cena za usługi?",
      answer: "Nasz pakiet Starter zaczyna się od 1500 zł miesięcznie. Dodatkowo oferujemy bezpłatną wycenę i konsultację dla nowych klientów. Skontaktuj się z nami, aby ustalić budżet dostosowany do Twoich możliwości.",
    },
  ];

  const stats = [
    { value: "500+", label: "klientów" },
    { value: "8", label: "lat doświadczenia" },
    { value: "97%", label: "zadowolonych" },
    { value: "TOP3", label: "wyniki" },
  ];

  const areas = [
    "Śródmieście",
    "Fordon",
    "Kapuściska",
    "Wyżyny",
    "Błonie",
    "Bartodzieje",
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Bydgoszcz | FOTZ – Marketing Dla Firm w Bydgoszczy"
        description="Agencja marketingowa Bydgoszcz ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Bydgoszczy i Kujaw. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/bydgoszcz"
        keywords={[
          "agencja marketingowa Bydgoszcz",
          "SEO Bydgoszcz",
          "Google Ads Bydgoszcz",
          "media społecznościowe",
          "strony WWW",
          "marketing Kujaw",
        ]}
      />

      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700">
              <MapPin className="w-4 h-4 mr-2" />
              Serwisujemy cały region Bydgoszczy i Kujaw
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Agencja Marketingowa Bydgoszcz
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Specjaliści z SEO, Google Ads, social media i tworzenia stron WWW dla firm w Bydgoszczy. Ponad 8 lat doświadczenia, 500 plus zadowolonych klientów, 97% wskaźnik satysfakcji.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Bezpłatna wycena
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Dowiedz się więcej
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Usługi marketingowe dla Bydgoszczy
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Kompleksowe rozwiązania marketingowe dostosowane do potrzeb Twojej firmy w Bydgoszczy i regionie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="hover:shadow-lg transition-shadow border-slate-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pakiety i cennik
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Wybierz pakiet dopasowany do wielkości Twojej firmy i budżetu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative transition-all ${
                    pkg.popular
                      ? "border-2 border-blue-600 shadow-xl scale-105"
                      : "border-slate-200"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4 py-1">
                        Najpopularniejszy
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 pt-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6">
                      {pkg.description}
                    </p>

                    <div className="mb-8">
                      <span className="text-4xl font-bold text-slate-900">
                        {pkg.price}
                      </span>
                      <span className="text-slate-600">{pkg.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full ${
                        pkg.popular
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-slate-200 hover:bg-slate-300 text-slate-900"
                      }`}
                    >
                      Wybrać pakiet
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Obsługujemy wszystkie dzielnice Bydgoszczy
              </h2>
              <p className="text-lg text-slate-600">
                Nasz zespół obsługuje firmy z całego miasta i powiatu bydgoskiego.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, idx) => (
                <Card key={idx} className="border-blue-100 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-900">{area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                O Bydgoszczy
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Bydgoszcz to największe miasto w województwie kujawsko-pomorskim, znane z pięknego Kanału Bydgoskiego, nowoczesnej Opery Nova i dynamicznie rozwijającego się sektora IT. Jako agencja marketingowa z siedzibą w Bydgoszczy, doskonale rozumiemy specyfikę lokalnego rynku, potrzeby przedsiębiorców i trendami w cyfrowym marketingu.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Nasza wiedza o Bydgoszczy i całego regionu Kujaw pozwala nam tworzyć strategie marketingowe, które rzeczywiście działają dla firm w tym obszarze.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Najczęstsze pytania
              </h2>
              <p className="text-lg text-slate-600">
                Odpowiadamy na najczęściej zadawane pytania przez naszych klientów z Bydgoszczy.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gotów do transformacji cyfrowej Twojej firmy?
            </h2>
            <p className="text-lg text-blue-50 mb-8">
              Skontaktuj się z nami dzisiaj i otrzymaj bezpłatną wycenę oraz konsultację strategiczną.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                +48 123 456 789
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-blue-600"
              >
                <Zap className="w-5 h-5 mr-2" />
                Wysłij formularz
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ServiceSchema
        name="FOTZ - Agencja Marketingowa Bydgoszcz"
        description="Profesjonalna agencja marketingowa w Bydgoszczy specjalizująca się w SEO, Google Ads, social media i tworzeniu stron internetowych."
        areaServed="Bydgoszcz"
        services={[
          "Pozycjonowanie SEO",
          "Google Ads",
          "Media społecznościowe",
          "Tworzenie stron WWW",
          "Marketing content",
          "Analityka",
        ]}
      />

      <FAQSchema faqs={faqs} />
    </Layout>
  );
}
