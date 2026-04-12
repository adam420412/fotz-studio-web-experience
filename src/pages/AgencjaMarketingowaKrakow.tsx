import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Building2,
  TrendingUp,
  Star,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Target,
  Smartphone,
  BarChart3,
  Lightbulb,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";

export default function AgencjaMarketingowaKrakow() {
  const [activeTab, setActiveTab] = useState("seo");

  const services = [
    {
      id: "seo",
      title: "SEO Lokalne Kraków",
      description:
        "Pozycjonowanie stron WWW dla firm z Krakowa i Małopolski. Gwarantujemy wyniki w top 3 wyników wyszukiwania dla kluczowych fraz branży.",
      icon: TrendingUp,
      benefits: [
        "Wzrost organicznego ruchu z Google",
        "Dominacja w lokalnych wynikach",
        "Zwiększenie konwersji i sprzedaży",
        "Długoterminowe rezultaty",
      ],
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description:
        "Kompleksowe zarządzanie mediami społecznościowymi. Facebook, Instagram, TikTok, LinkedIn - budujemy community i zwiększamy zasięg.",
      icon: Users,
      benefits: [
        "Budowanie zaangażowanej społeczności",
        "Wzrost zasięgu i vidoczności",
        "Zwiększenie sprzedaży przez social media",
        "Zarządzanie reputacją online",
      ],
    },
    {
      id: "ads",
      title: "Google Ads &amp; PPC",
      description:
        "Kampanie reklamowe w Google Ads i sieciach partnerskich. Skuteczne dotarcie do klientów szukających Twoich usług w Krakowie.",
      icon: Target,
      benefits: [
        "Szybkie rezultaty i ruchu na stronę",
        "Niskie koszty pozyskania klienta",
        "Precyzyjne targetowanie w Krakowie",
        "Ciągła optymalizacja kampanii",
      ],
    },
    {
      id: "strony",
      title: "Strony WWW",
      description:
        "Nowoczesne, responsywne strony internetowe zoptymalizowane pod SEO i konwersję. Technologia najwyższej klasy dla firm z Krakowa.",
      icon: Smartphone,
      benefits: [
        "Responsywny design na wszystkie urządzenia",
        "Szybkie ładowanie i wydajność",
        "Integracja z systemami CRM",
        "Optymalizacja dla konwersji",
      ],
    },
    {
      id: "content",
      title: "Content Marketing",
      description:
        "Tworzenie wartościowych treści dla Twojej grupy docelowej. Artykuły, blogi, wideo i infografiki, które przyciągają i konwertują.",
      icon: Lightbulb,
      benefits: [
        "Budowanie autorytetu w branży",
        "Poprawa SEO poprzez treści",
        "Zwiększenie zaangażowania klientów",
        "Długoterminowa dostępność treści",
      ],
    },
    {
      id: "branding",
      title: "Branding &amp; Logo",
      description:
        "Kompleksowe usługi brandingu dla firm z Krakowa. Tożsamość wizualna, strategie brand positioning i development marki.",
      icon: Zap,
      benefits: [
        "Unikalna tożsamość wizualna",
        "Spójność na wszystkich kanałach",
        "Wyróżnienie się od konkurencji",
        "Profesjonalny wizerunek firmy",
      ],
    },
  ];

  const packages = [
    {
      name: "Pakiet START",
      price: "od 2 999 PLN",
      duration: "/ miesiąc",
      description: "Dla małych firm i startupów",
      features: [
        "Audit SEO strony",
        "Zarządzanie mediami społecznościowymi (2 kanały)",
        "5 postów na social media",
        "Raport miesięczny",
      ],
      highlight: false,
    },
    {
      name: "Pakiet BIZNES",
      price: "od 7 999 PLN",
      duration: "/ miesiąc",
      description: "Dla rozwijających się firm",
      features: [
        "Pełne SEO (on-page &amp; off-page)",
        "Zarządzanie mediami społecznościowymi (4 kanały)",
        "12 postów na social media",
        "Kampania Google Ads",
        "Raport miesięczny ze statystykami",
      ],
      highlight: true,
    },
    {
      name: "Pakiet PREMIUM",
      price: "od 15 999 PLN",
      duration: "/ miesiąc",
      description: "Dla dużych firm i e-commerce",
      features: [
        "Pełna strategia marketingowa",
        "Zaawansowane SEO &amp; technical SEO",
        "Zarządzanie wszystkimi kanałami social media",
        "Content marketing (artykuły, wideo)",
        "Kampanie Google Ads &amp; Facebook Ads",
        "Dedykowany project manager",
        "Raport szczegółowy z analytics",
      ],
      highlight: false,
    },
  ];

  const stats = [
    { value: "500+", label: "Zadowolonych klientów" },
    { value: "8 lat", label: "Doświadczenia na rynku" },
    { value: "97%", label: "Zadowolenia klientów" },
    { value: "TOP 3", label: "Wyniki dla klientów" },
  ];

  const faqs = [
    {
      question: "Jak długo trwa uzyskanie wyników z SEO w Krakowie?",
      answer:
        "SEO to inwestycja długoterminowa. Pierwsze rezultaty widoczne są zwykle po 3-6 miesiącach, podczas gdy maksymalne wyniki uzyskujemy po 12-18 miesiącach. Czas zależy od konkurencji w Twojej branży, edad domeny i stanu strony. Nasze kampanie SEO dla firm z Krakowa osiągają pozycje TOP 3 średnio po 6-8 miesiącach.",
    },
    {
      question: "Czy mogę pozycjonować moją firmę na wszystkie dzielnice Krakowa?",
      answer:
        "Oczywiście! Specjalizujemy się w SEO lokalnym dla Krakowa. Możemy pozycjonować Twoją firmę na frazach takie jak: SEO Kraków, SEO Stare Miasto, SEO Kazimierz, SEO Podgórze, SEO Nowa Huta, SEO Krowodrza, SEO Grzegórzki i innych dzielnic. Każda strategia SEO dostosowujemy do Twoich klientów i területium obsługi.",
    },
    {
      question: "Ile kosztuje strona WWW dla firmy z Krakowa?",
      answer:
        "Cena strony WWW zależy od zakresu projektu. Strona wizytówka startuje od 3 000 PLN, natomiast zaawansowany portal e-commerce czy serwis dla firm kosztuje od 10 000 PLN. Zawsze proponujemy wycenę indywidualną po rozmowie o Twoich potrzebach i budżecie.",
    },
    {
      question: "Jak mierzycie wyniki kampanii marketingowych?",
      answer:
        "Każda nasza kampania jest zmierzona i analizowana. Dostarczamy comiesięczne raporty z danymi: ranking słów kluczowych, ruch organiczny, konwersje, ROI, wydatki, CPL i wiele innych metryk. Wszystkie dane dostępne są w panelu online dostępnym 24/7.",
    },
    {
      question: "Czy pracujecie tylko z firmami z Krakowa?",
      answer:
        "Pracujemy z firmami z całej Małopolski i Polski, ale specjalizujemy się w lokalnym SEO dla Krakowa i regionu. Nasi klienci to firmy z Krakowa, Wieliczki, Tarnowa, Nowego Sącza i okolic. Możemy także obsługiwać firmy obsługujące Kraków z innych miast.",
    },
  ];

  const areas = [
    "Stare Miasto",
    "Kazimierz",
    "Podgórze",
    "Nowa Huta",
    "Krowodrza",
    "Grzegórzki",
    "Łobzów",
    "Dębniki",
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Kraków | FOTZ – Marketing Dla Firm w Krakowie"
        description="Agencja marketingowa Kraków ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Krakowa i Małopolski. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/krakow"
        ogImage="https://fotz.pl/og-krakow.jpg"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
          { name: "Kraków", url: "https://fotz.pl/agencja-marketingowa/krakow" },
        ]}
      />

      <ServiceSchema
        name="Agencja Marketingowa Kraków"
        description="Kompleksowe usługi marketingowe dla firm z Krakowa: SEO, Google Ads, Social Media, strony WWW, content marketing i branding"
        areaServed="Krakow"
      />

      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600 rounded-full opacity-20"></div>
          <div className="absolute -left-10 bottom-0 w-80 h-80 bg-blue-500 rounded-full opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-blue-100 font-medium">Obsługujemy Kraków i Małopolskę</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Agencja Marketingowa Kraków
            </h1>

            <p className="text-xl text-blue-100 mb-4">
              Wzrost sprzedaży i widoczności Twojej firmy w Krakowie. SEO, Google Ads,
              Social Media i strony WWW dla firm z Krakowa i okolic.
            </p>

            <p className="text-lg text-blue-100 mb-8">
              Ponad 200 projektów zrealizowanych | 8 lat doświadczenia | 97% zadowolenia
              klientów
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold"
              >
                Bezpłatna Wycena
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-800"
              >
                <Phone className="mr-2 w-5 h-5" />
                Zadzwoń: +48 12 XXX XX XX
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">NASZE USŁUGI</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Kompletne Rozwiązania Marketingowe dla Firm z Krakowa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferujemy kompleksowe usługi marketingowe dostosowane do potrzeb firm
              działających w Krakowie i Małopolsce. Od SEO po branding - wszystko co
              potrzebne do wzrostu Twojej firmy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setActiveTab(service.id)}
                >
                  <CardContent className="p-8">
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(3, 6).map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setActiveTab(service.id)}
                >
                  <CardContent className="p-8">
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
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

      {/* Areas Served Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Obsługiwane Dzielnice Krakowa</h2>
            <p className="text-gray-600 mb-8">
              Specjalizujemy się w SEO lokalnym dla wszystkich dzielnic Krakowa. Niezależnie
              od tego, gdzie znajduje się Twoja firma, możemy pomóc w jej rozwoju.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <Badge key={index} variant="secondary" className="py-2 px-4 text-sm">
                  {area}
                </Badge>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-8">
              + wiele innych dzielnic i okolic Krakowa
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">CENNIK</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Transparentne Pakiety Dla Każdej Firmy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wybierz pakiet dostosowany do Twoich potrzeb i budżetu. Wszystkie ceny
              są orientacyjne i mogą się różnić w zależności od zakresu pracy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.highlight ? "ring-2 ring-blue-500 transform md:scale-105" : ""}`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-blue-600">NAJPOPULARNIEJSZY</Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <div className="mb-8">
                    <div className="text-4xl font-bold text-blue-600">
                      {pkg.price}
                    </div>
                    <p className="text-gray-600 text-sm">{pkg.duration}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${pkg.highlight ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    variant={pkg.highlight ? "default" : "outline"}
                  >
                    Wybierz Pakiet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Nie znalazłeś odpowiedniego pakietu? Oferujemy także usługi na miarę!
            </p>
            <Button variant="outline">Zapytaj o Wycenę Custom</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">DLACZEGO MY</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Dlaczego Firmy z Krakowa Wybierają FOTZ?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Doświadczenie",
                    desc: "8 lat na rynku marketingu i ponad 200 zrealizowanych projektów",
                  },
                  {
                    title: "Rezultaty",
                    desc: "97% naszych klientów jest zadowolonych i odnowić umowę z nami",
                  },
                  {
                    title: "Specjalizacja",
                    desc: "Znamy lokalny rynek Krakowa i potrzeby firm z tego regionu",
                  },
                  {
                    title: "Przejrzystość",
                    desc: "Regularne raporty i dostęp do wszystkich danych Twoich kampanii",
                  },
                  {
                    title: "Wsparcie",
                    desc: "Dedykowany specjalista marketingu dostępny dla Twojej firmy",
                  },
                  {
                    title: "Innowacyjność",
                    desc: "Korzystamy z najnowszych narzędzi i trendów w marketingu cyfrowym",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold">Certyfikacje i Nagrody</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Google Premier Partner - certyfikat dla agencji Google",
                  "Facebook Marketing Partner - zatwierdzony partner Meta",
                  "Najlepsza Agencja SEO Kraków 2023 - nagroda użytkowników",
                  "ISO 27001 - certifikat bezpieczeństwa danych",
                  "Ranked #1 w Krakowie - portal FindBestSEO.com",
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Najczęściej Zadawane Pytania</h2>
            <p className="text-gray-600">
              Odpowiadamy na najczęściej zadawane pytania dotyczące marketingu dla firm
              z Krakowa
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Gotowy na Wzrost Twojej Firmy?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami dzisiaj i otrzymaj bezpłatną wycenę dostosowaną do
            potrzeb Twojej firmy w Krakowie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold">
              Bezpłatna Konsultacja
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-blue-700"
            >
              <Phone className="mr-2 w-5 h-5" />
              +48 12 XXX XX XX
            </Button>
          </div>

          <p className="text-blue-100 text-sm mt-8">
            Odpowiadamy w ciągu 24 godzin. Brak zobowiązań.
          </p>
        </div>
      </section>
    </Layout>
  );
}
