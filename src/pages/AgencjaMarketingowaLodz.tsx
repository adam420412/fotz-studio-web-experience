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

export default function AgencjaMarketingowaLodz() {
  const [selectedPackage, setSelectedPackage] = useState("biznes");

  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Agencja marketingowa", url: "/agencja-marketingowa" },
    { name: "Łódź" }
  ];

  const faqItems = [
    {
      question: "Ile kosztuje obsługa marketingowa firmy w Łodzi?",
      answer: "Koszt obsługi marketingowej zależy od zakresu usług i wielkości firmy. Nasze pakiety Start zaczynają się od 2000 PLN/miesiąc, a rozwiązania kompleksowe dochodzą do 10000+ PLN. Oferujemy bezpłatną wycenę dostosowaną do Twoich potrzeb."
    },
    {
      question: "Czy agencja FOTZ pracuje z firmami z całej Łodzi?",
      answer: "Tak, obsługujemy firmy z Śródmieścia, Bałut, Widzewa, Górnej, Polesie i wszystkich innych dzielnic Łodzi. Niezależnie od lokalizacji, zapewniamy profesjonalne usługi marketingowe online i offline."
    },
    {
      question: "Ile czasu potrzeba na uzyskanie wyników w SEO?",
      answer: "Pierwsze rezultaty w SEO widać zwykle po 6-8 tygodniach, a znaczące poprawy rankingów po 3-4 miesiącach. Czas zależy od konkurencyjności słów kluczowych i aktualnego stanu strony. Gwarantujemy transparentne raporty co miesiąc."
    },
    {
      question: "Jakie branże obsługujecie w Łodzi?",
      answer: "Pracujemy z e-commerce, handlem detalicznym, salonami, restauracjami, klinika medycznymi, biurami nieruchomości, franczyzobiorcami i firmami B2B. Nasze doświadczenie obejmuje ponad 200 projektów dla łódzkich firm."
    },
    {
      question: "Czy mogę zmienić agencję w trakcie trwającego kampanii?",
      answer: "Oczywiście. Oferujemy elastyczne umowy bez kar za wcześniejsze rozwiązanie. Jeśli chcesz zmienić agencję, pomożemy w transporcie danych i knowledge transfer z poprzedniej agencji."
    }
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Pozycjonowanie SEO",
      description: "Organiczny ruch z Google. Ulepszamy rankingu Twojej strony dla lokalnych słów kluczowych Łodzi.",
      features: ["Audyt SEO", "Optymalizacja on-page", "Link building", "Raporty miesięczne"]
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Bezpośredni ruch płatny. Trafiamy do klientów szukających Twoich usług w Łodzi i regionie.",
      features: ["Kampanie Search", "Display Ads", "Shopping", "Analiza konkurencji"]
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Budujemy obecność na Facebooku, Instagramie i TikToku. Konten, reklamy i zaangażowanie.",
      features: ["Zarządzanie profilami", "Produkcja treści", "Reklamy społeczne", "Community management"]
    },
    {
      icon: Lightbulb,
      title: "Projektowanie Stron WWW",
      description: "Nowoczesne, responsywne strony z konwersją. Builds designed to sell dla firm łódzkich.",
      features: ["UX/UI design", "Mobile-first", "CMS WordPress", "Szybkość strony"]
    },
    {
      icon: BarChart3,
      title: "Content Marketing",
      description: "Artykuły, blogi i materiały edukacyjne. Pozycjonowanie przez wartościową treść.",
      features: ["Tworzenie artykułów", "Email marketing", "Webinary", "Infografiki"]
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Zautomatyzowane kampanie emailowe i workflow. Efektywność na wyższym poziomie.",
      features: ["Email nurturing", "Segmentacja", "Workflow automation", "CRM integration"]
    }
  ];

  const packages = [
    {
      id: "start",
      name: "Pakiet Start",
      price: "2000",
      description: "Idealna dla małych firm startujących z marketingiem",
      features: [
        "Audyt SEO strony",
        "Optymalizacja 5 słów kluczowych",
        "Kampania Google Ads (150 PLN budżetu)",
        "Zarządzanie 1 profilem social media",
        "3 posty miesięcznie",
        "Raport miesięczny",
        "Wsparcie email"
      ],
      highlight: false
    },
    {
      id: "biznes",
      name: "Pakiet Biznes",
      price: "5000",
      description: "Kompleksowe działania marketingowe dla rozwijających się firm",
      features: [
        "Audyt SEO i strategia",
        "Optymalizacja 15 słów kluczowych",
        "Kampanie Google Ads (500 PLN budżetu)",
        "Zarządzanie 2 profilami social media",
        "8 postów miesięcznie",
        "Reklamy na Facebooku",
        "Email marketing (100 subskrybenów)",
        "Raport tygodniowy",
        "Konsultacje telefoniczne 2x/miesiąc"
      ],
      highlight: true
    },
    {
      id: "premium",
      name: "Pakiet Premium",
      price: "10000",
      description: "Pełna obsługa marketingowa. Wszystko czego potrzebujesz",
      features: [
        "Pełna strategia marketingowa",
        "Optimyzacja 40+ słów kluczowych",
        "Kampanie Google Ads (2000 PLN budżetu)",
        "Link building i PR online",
        "Zarządzanie 4+ profilami social media",
        "20+ postów miesięcznie",
        "Produkcja video i grafiki",
        "Email marketing (nieograniczony)",
        "Webinary i content marketing",
        "Raport tygodniowy (meetingi)",
        "Dedykowany account manager",
        "Doradztwo strategiczne"
      ],
      highlight: false
    }
  ];

  const stats = [
    { label: "Zadowolonych klientów", value: "500+" },
    { label: "Lat doświadczenia", value: "8" },
    { label: "Realizowanych projektów", value: "200+" },
    { label: "Średni wzrost reach", value: "97%" }
  ];

  const areas = [
    { name: "Śródmieście", icon: Building2 },
    { name: "Bałuty", icon: Building2 },
    { name: "Widzew", icon: Building2 },
    { name: "Górna", icon: Building2 },
    { name: "Polesie", icon: Building2 }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Agencja Marketingowa Łódź | FOTZ – Marketing Dla Firm w Łodzi"
        description="Agencja marketingowa Łódź ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Łodzi i Mazowsza centralnego. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/lodz"
        ogImage="https://fotz.pl/og-lodz.jpg"
      />
      
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema areaServed="Lodz" />
      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600 text-white px-4 py-1">
              Agencja Marketingowa w Łodzi
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Agencja Marketingowa Łódź
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Zwiększamy sprzedaż firm łódzkich poprzez profesjonalny marketing online. SEO, Google Ads, social media i strony WWW na najwyższym poziomie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Bezpłatna Konsultacja
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 w-4 h-4" />
                +48 42 *** ****
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Łódź Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Marketing dla firm z Łodzi
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Łódź to trzecie co do wielkości miasto Polski i jedno z najważniejszych ośrodków biznesowych w Mazowszu centralnym. Niegdyś centrum przemysłu tekstylnego, dziś jest dynamicznym hubem dla e-commerce, startupów technologicznych i firm kreatywnych. Manufaktura, rewitalizacja Piotrkowskiej i rozwijające się dzielnice przyciągają nowych biznesmenów.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Niezależnie czy prowadzisz salon, restaurację, e-commerce, czy biuro obsługi klienta w Śródmieściu, Bałutach, Widzewa, Górnej czy Polesiu, marketing online jest kluczem do rozwoju. FOTZ wspiera firmy łódzkie w budowaniu silnej pozycji w Internecie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {areas.map((area) => (
                <div key={area.name} className="flex items-center gap-2 bg-white p-4 rounded-lg border">
                  <area.icon className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-800">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Usługi Marketingowe
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Kompleksowe rozwiązania marketingowe dla firm z Łodzi. Od pozycjonowania SEO po kampanie Google Ads i social media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Pakiety Cenowe
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Elastyczne pakiety dostosowane do wielkości i potrzeb Twojej firmy. Każdy pakiet można dostosować indywidualnie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`relative overflow-hidden ${pkg.highlight ? "border-2 border-blue-600 shadow-xl" : ""}`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold">
                    POPULARNE
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {pkg.description}
                  </p>
                  <div className="mb-6 pb-6 border-b">
                    <span className="text-4xl font-bold text-blue-600">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">PLN/miesiąc</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.highlight ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"}`}
                  >
                    Wybierz Pakiet
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
              Dlaczego FOTZ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Doświadczenie</h3>
                  <p className="text-gray-700">8 lat na rynku, ponad 200 realizowanych projektów dla firm łódzkich.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Wyniki</h3>
                  <p className="text-gray-700">Średni wzrost reach 97%, notowane wzrosty sprzedaży 150-300%.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Zespół</h3>
                  <p className="text-gray-700">Specjaliści SEO, copywriterzy, graficy i videomakery.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Personalizacja</h3>
                  <p className="text-gray-700">Każdy pakiet dopasowujemy do Twoich celów i branży.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              Najczęstsze pytania
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Odpowiadamy na pytania dotyczące marketingu dla firm w Łodzi
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gotowy na wzrost sprzedaży?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Zarezerwuj bezpłatną konsultację z naszymi ekspertami. Omówimy Twoje cele i pokażemy jak możemy pomóc Twojej firmie z Łodzi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Bezpłatna Konsultacja
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Skontaktuj się teraz
                <Phone className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900">
            Zaufanie firm z całej Łodzi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Salon Urody Łódź",
                comment: "FOTZ podniósł naszą widoczność w Google o 350%. Polecamy wszystkim salonom!"
              },
              {
                name: "E-commerce Manufaktura",
                comment: "Kampanie Google Ads zwracają 400% ROI. Najbardziej rentowny kanał sprzedaży."
              },
              {
                name: "Restauracja Piotrkowska",
                comment: "Social media zaprowadziło nam 100+ nowych klientów każdego miesiąca. Świetna robota!"
              }
            ].map((testimonial) => (
              <Card key={testimonial.name} className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    {testimonial.comment}
                  </p>
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Przygotowani by pomóc Twojej firmie rosnąć
            </h3>
            <p className="mb-6 opacity-90">
              Skontaktuj się z nami dzisiaj, aby dowiedzieć się więcej o naszych usługach marketingowych dla firm z Łodzi.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Zarabiaj więcej z FOTZ
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
