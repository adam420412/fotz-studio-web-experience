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

export default function AgencjaMarketingowaRzeszow() {
  const [selectedPackage, setSelectedPackage] = useState("standard");

  const services = [
    {
      id: "seo",
      icon: TrendingUp,
      title: "Pozycjonowanie SEO",
      description: "Zwiększymy widoczność Twojej strony w wyszukiwarce Google. Specjalizujemy się w SEO dla firm lokalnych w Rzeszowie.",
      features: ["Badanie słów kluczowych", "Optymalizacja on-page", "Budowanie backlinków", "Raporty miesięczne"]
    },
    {
      id: "ads",
      icon: Target,
      title: "Google Ads & Social Media",
      description: "Kampanie reklamowe na Google i mediach społecznościowych przynoszące konkretne rezultaty.",
      features: ["Konfiguracja kampanii", "Targeting precyzyjny", "Optymalizacja budżetu", "ROI tracking"]
    },
    {
      id: "www",
      icon: Smartphone,
      title: "Strony Internetowe",
      description: "Nowoczesne, responsywne strony www, które konwertują odwiedzających w klientów.",
      features: ["Responsywny design", "Szybkie ładowanie", "CMS Headless", "SEO-friendly"]
    },
    {
      id: "social",
      icon: Users,
      title: "Social Media Management",
      description: "Zarządzanie Twoimi profilami na Facebook, Instagram i LinkedIn. Budowanie społeczności.",
      features: ["Tworzenie contentu", "Harmonogram postów", "Interakcja z obserwatorami", "Analytics"]
    },
    {
      id: "content",
      icon: Lightbulb,
      title: "Content Marketing",
      description: "Artykuły, blogi i materiały edukacyjne, które przyciągają i utrzymują klientów.",
      features: ["Blog posts", "EBook creation", "Infografiki", "Video scripts"]
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Pełna analiza wyników Twoich działań marketingowych z rekomendacjami optymalizacji.",
      features: ["GA4 setup", "Dashboards", "Analiza konkurencji", "Strategie wzrostu"]
    }
  ];

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "2499",
      description: "Dla małych firm zaczynających swoją obecność online",
      features: [
        "Strona internetowa (5-10 stron)",
        "Konfiguracja Google Business",
        "Setup Google Ads (1000 PLN budżetu)",
        "30 dni wsparcia",
        "Monthly report"
      ],
      highlight: false
    },
    {
      id: "standard",
      name: "Standard",
      price: "5999",
      description: "Najpopularniejszy pakiet dla firm średnich",
      features: [
        "Wszystko z Starter",
        "SEO optimization (90 dni)",
        "Google Ads & Social Media Ads",
        "10 artykułów na blog",
        "Social media setup",
        "Wsparcie 24/5",
        "3 miesiące konsultacji"
      ],
      highlight: true
    },
    {
      id: "premium",
      name: "Premium",
      price: "14999",
      description: "Pełny pakiet dla ambitnych firm",
      features: [
        "Wszystko ze Standard",
        "SEO acceleration (6 miesięcy)",
        "Social media full management",
        "Content marketing plan",
        "Video production (2-3 filmy)",
        "Brand identity (logo, guidelines)",
        "Dedykowany manager",
        "Wsparcie 24/7"
      ],
      highlight: false
    }
  ];

  const faqs = [
    {
      question: "Jak szybko będę mieć pierwsze wyniki z SEO?",
      answer: "Pierwsze rezultaty pozycjonowania obserwujemy zwykle po 4-6 tygodniach. Jednak pełne efekty, czyli Top 3 pozycje w Google, wymogą 3-6 miesięcy intensywnej pracy. Wszystko zależy od konkurencji i zakresu słów kluczowych. Będziesz otrzymywać raporty co miesiąc."
    },
    {
      question: "Czy mogę skorzystać z waszych usług, jeśli już mam stronę internetową?",
      answer: "Oczywiście! Jeśli masz już stronę, możemy ją zoptymalizować pod kątem SEO, poprawić szybkość ładowania, modernizować wygląd i dodać nowe funkcjonalności. Przeprowadzimy audit i zaproponujemy konkretne ulepszenia."
    },
    {
      question: "Jakie są gwarancje dotyczące wyników?",
      answer: "Nie gwarantujemy konkretnych pozycji w Google, ponieważ zmienia on algorytm. Jednak gwarantujemy rzetelną pracę, transparentność i raporty. Naszych klientów wyróżnia 97% wskaźnik zadowolenia. Pracujemy na podstawie umowy ze ścisłym harmonogramem."
    },
    {
      question: "Czy pracujecie z firmami z Podkarpacia?",
      answer: "Tak! Specjalizujemy się w marketingu dla firm z Rzeszowa i całego regionu Podkarpacia. Mamy doświadczenie z branżą lotniczą, IT, handlem, usługami i produkcją. Znamy lokalne uwarunkowania i możemy dostosować strategię do Twojego rynku."
    },
    {
      question: "Ile kosztuje bezpłatna konsultacja?",
      answer: "Konsultacja jest całkowicie bezpłatna! Poznacie nasz zespół, omówicie Wasze cele biznesowe, analiżemy obecną sytuację i zaproponujemy konkretne działania. Bez zobowiązań, bez presji sprzedażowej."
    }
  ];

  const areas = [
    "Śródmieście",
    "Słocina",
    "Przybyszówka",
    "Biała",
    "Drabinianka",
    "Zwięczyca",
    "Nowy Świat",
    "Krakowska"
  ];

  const stats = [
    { label: "Obsłużonych Klientów", value: "500+" },
    { label: "Lat Doświadczenia", value: "8" },
    { label: "Zadowolonych Klientów", value: "97%" },
    { label: "Średnia Pozycja", value: "TOP 3" }
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Rzeszów | FOTZ – Marketing Dla Firm w Rzeszowie"
        description="Agencja marketingowa Rzeszów ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Rzeszowa i Podkarpacia. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/rzeszow"
        keywords="agencja marketingowa rzeszów, marketing internetowy rzeszów, usługi marketingowe rzeszów, agencja reklamowa rzeszów, marketing podkarpacie"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://fotz.pl" },
          { name: "Agencje Marketingowe", url: "https://fotz.pl/agencja-marketingowa" },
          { name: "Rzeszów", url: "https://fotz.pl/agencja-marketingowa/rzeszow" }
        ]}
      />

      <ServiceSchema
        name="Agencja Marketingowa Rzeszów"
        description="Profesjonalne usługi marketingowe dla firm z Rzeszowa i Podkarpacia"
        areaServed="Rzeszow"
        telephone="+48721234567"
        address="Rzeszów, Polska"
      />

      <FAQSchema items={faqs} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="mb-4">Agencja Marketingowa w Rzeszowie</Badge>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Agencja Marketingowa Rzeszów
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Ponad 500 klientów zaufało nam w Rzeszowie i całym Podkarpaciu. Tworzymy strategie marketingowe, które rzeczywiście przynoszą wyniki. SEO, Google Ads, strony WWW i zarządzanie mediami społecznościowymi - wszystko w jednym miejscu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Bezpłatna Konsultacja
                </Button>
                <Button size="lg" variant="outline">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Sprawdź NaszeCase Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Nasze Usługi Marketingowe</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Oferujemy kompleksowy zakres usług marketingowych dostosowany do potrzeb firm z Rzeszowa. Niezależnie od branży, mamy sprawdzone rozwiązania.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
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

        {/* Packages */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Pakiety Cenowe</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Zaplanowaliśmy pakiety dla każdego budżetu. Możemy również stworzyć dedykowaną ofertę dla Twoich konkretnych potrzeb.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`border-0 transition-all ${
                    pkg.highlight
                      ? "shadow-2xl ring-2 ring-blue-500 scale-105"
                      : "shadow-md hover:shadow-lg"
                  }`}
                >
                  <CardContent className="p-8">
                    {pkg.highlight && (
                      <Badge className="mb-4 bg-blue-600">Najpopularniejszy</Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-600 ml-2">PLN</span>
                    </div>
                    <Button
                      className={`w-full mb-6 ${
                        pkg.highlight
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                      }`}
                    >
                      Wybierz Plan
                    </Button>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Obsługiwane Dzielnice Rzeszowa</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Bez względu na to, w której części Rzeszowa znajduje się Twoja firma, możemy Ci pomóc rozwinąć biznes w sieci.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {areas.map((area, idx) => (
                  <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 text-center">
                      <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <p className="font-medium text-gray-900">{area}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
              + całe Podkarpacie i województwo podkarpackie
            </p>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Dlaczego My?</h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Star className="w-6 h-6 text-yellow-400 mr-3" />
                  Doświadczenie
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  8 lat pracy na rynku marketingu cyfrowego. Obsłużyliśmy firmy z Rzeszowa, Warszawy, Krakowa i innych miast. Znamy specyficzne wyzwania biznesu lokalnego.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Zap className="w-6 h-6 text-blue-600 mr-3" />
                  Szybkie Rezultaty
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nasze strategie są testowane i sprawdzone. W ciągu 30-90 dni obserwujesz wzrost ruchu, leadów lub sprzedaży. Wszystko mierzone i raportowane.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Building2 className="w-6 h-6 text-green-600 mr-3" />
                  Transparentność
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Każdy klient dostaje dostęp do dashboardów, raportów miesięcznych i regularnych konsultacji. Widzisz dokładnie, na co tracimy Twoje pieniądze.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-3" />
                  Wsparcie
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dedykowany menedżer ds. klienta odpowiada na wszystkie Twoje pytania. Pracujemy jako rozszerzenie Twojego zespołu, a nie jako zewnętrzny dostawca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Najczęstsze Pytania</h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Gotowy na Zmianę?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Zaproś nas na bezpłatną konsultację. Poznamy Twój biznes, analizujemy konkurencję i zaproponujemy konkretne działania marketingowe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Zabook Bezpłatną Konsultację
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Zadzwoń: +48 721 234 567
              </Button>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-16 bg-gray-50 border-t">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Rzeszów</h3>
                <p className="text-gray-600 text-sm">Stolicą Podkarpacia i szybko rosnącym miastem tech.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Dolina Lotnicza</h3>
                <p className="text-gray-600 text-sm">Specjalizujemy się w branży lotniczej i IT.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Wsparcie EU</h3>
                <p className="text-gray-600 text-sm">Znamy programy dofinansowania dla firm.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
