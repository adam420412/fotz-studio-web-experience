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

export default function AgencjaMarketingowaGdansk() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      icon: TrendingUp,
      title: "SEO i Pozycjonowanie",
      description: "Narzuć swoją pozycję w Google. Zwiększamy widoczność Twojej firmy w wyszukiwarce dla kluczowych słów kluczowych.",
      details: "Analiza konkurencji, optymalizacja on-page, budowanie backlinków, monitoring rankingów"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Precyzyjne kampanie reklamowe w Google. Dostarczamy klientów, którzy szukają Twoich usług.",
      details: "Zarządzanie budżetem, optymalizacja konwersji, raporty wydajności, A/B testy"
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Buduj społeczność na Facebooku, Instagramie i LinkedIn. Nawiąż dialog z Twoimi klientami.",
      details: "Strategie contentu, zarządzanie kampaniami, community management, analityka"
    },
    {
      icon: BarChart3,
      title: "Strony WWW i Landing Pages",
      description: "Nowoczesne witryny internetowe zoptymalizowane do konwersji. Każda strona to narzędzie sprzedaży.",
      details: "Responsive design, SEO-friendly, szybkie ładowanie, integracje CRM"
    },
    {
      icon: Lightbulb,
      title: "Strategie Marketingowe",
      description: "Kompleksowe plany działań marketingowych dostosowane do Twojej branży i konkurencji w Gdańsku.",
      details: "Audyt konkurencji, analiza rynku, plan działań, KPI i metryki"
    },
    {
      icon: Zap,
      title: "Email Marketing i Automatyzacja",
      description: "Automatyczne nurturing leadsów. Buduj relacje z klientami poprzez e-mail.",
      details: "Kampanie e-mail, segmentacja odbiorców, integracje, tracking konwersji"
    }
  ];

  const packages = [
    {
      name: "START",
      price: "od 1500",
      description: "Dla małych firm dopiero startujących",
      features: [
        "Audyt SEO strony",
        "1-2 kampanie Google Ads/miesiąc",
        "Post na social media (2x tygodniowo)",
        "Raport wydajności (co miesiąc)",
        "Konsultacja strategiczna"
      ]
    },
    {
      name: "BIZNES",
      price: "od 4500",
      description: "Dla rozwijających się firm",
      features: [
        "Pełne zarządzanie SEO",
        "Kampanie Google Ads (optimizacja codziennie)",
        "Strateg contenu na social media",
        "Zarządzanie 2-3 kanałami",
        "Raporty szczegółowe + call co 2 tygodnie",
        "Landing page w ramach pakietu"
      ],
      popular: true
    },
    {
      name: "PREMIUM",
      price: "od 9000",
      description: "Kompleksowy zakres usług",
      features: [
        "Dedykowany account manager",
        "Pełne zarządzanie all-in (SEO, Google Ads, Social)",
        "Tworzenie nowej strony WWW",
        "Email marketing automatyzacja",
        "Testy A/B i optimizacja konwersji",
        "Cotygodniowe spotkania strategiczne",
        "Dostęp do narzędzi analitycznych premium"
      ]
    }
  ];

  const faqs = [
    {
      question: "Ile czasu zajmuje pojawienie się efektów SEO w Gdańsku?",
      answer: "Efekty SEO są widoczne zazwyczaj po 2-3 miesiącach intensywnej pracy. Jednak będziemy raportować progres od miesiąca pierwszego. Pozycjonowanie to maraton, a nie sprint - myślimy długoterminowo o sukcesie Twojej firmy."
    },
    {
      question: "Jakie branże obsługujecie w Gdańsku?",
      answer: "Pracujemy z firmami handlowymi, usługowymi, produkcyjnymi, gastronomią, nieruchomościami i turystyką. Specjalizujemy się w branżach typowych dla Trójmiasta i Gdańska. Każda strategia dostosowujemy do specyfiki Twojej branży."
    },
    {
      question: "Czy mogę zdecydować, w jakie kanały marketingowe chcę inwestować?",
      answer: "Oczywiście! Każdy pakiet można dostosować do Twoich potrzeb. Możesz wybrać tylko SEO, tylko social media, lub kombinację. Zaczynamy zawsze od audytu i rekomendacji, ale ostateczna decyzja należy do Ciebie."
    },
    {
      question: "Jak wygląda proces współpracy z FOTZ?",
      answer: "Zaczyna się od bezpłatnej konsultacji i audytu Twojej obecności online. Następnie tworzymy strategię, wdrażamy ją i raportujemy postępy. Pracujemy w oparciu o dane i wyniki, a nie intuicję. Transparentność i komunikacja to nasze wartości."
    },
    {
      question: "Jakie są Wasze ceny w Gdańsku?",
      answer: "Oferujemy elastyczne pakiety od 1500 zł do ponad 10 000 zł miesięcznie. Wszystko zależy od zakresu usług, branży i celów. Zapraszamy na bezpłatną wycenę - bez zobowiązań!"
    }
  ];

  const areas = [
    "Śródmieście",
    "Wrzeszcz",
    "Oliwa",
    "Zaspa",
    "Przymorze",
    "Nowy Port",
    "Letnica",
    "Schoodnica"
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Gdańsk | FOTZ – Marketing Dla Firm w Gdańsku"
        description="Agencja marketingowa Gdańsk ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Gdańska i Trójmiasta. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/gdansk"
        keywords="agencja marketingowa gdańsk, marketing internetowy gdańsk, agencja reklamowa gdańsk, kampanie reklamowe gdańsk, seo gdańsk, google ads gdańsk, agencja marketingowa trójmiasto"
      />

      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Agencje marketingowe", url: "https://fotz.pl/agencje-marketingowe" },
        { name: "Gdańsk", url: "https://fotz.pl/agencja-marketingowa/gdansk" }
      ]}/>

      <ServiceSchema
        name="Usługi marketingowe Gdańsk"
        description="Kompleksowe usługi marketingowe: SEO, Google Ads, Social Media, strony WWW"
        areaServed="Gdansk"
      />

      <FAQSchema items={faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Agencja Marketingowa Gdańsk</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing Dla Firm w Gdańsku i Trójmieście
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Ponad 200 projektów realizowanych dla firm z Gdańska. SEO, Google Ads, Social Media i strony WWW – 
              kompleksowe rozwiązania marketingowe, które przynoszą wymierne wyniki.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Bezpłatna Wycena
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Zadzwoń: +48 123 456 789
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-gray-300">Zadowolonych Klientów</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">8 lat</div>
              <p className="text-gray-300">Doświadczenia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">97%</div>
              <p className="text-gray-300">Zadowolenia Klientów</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">TOP3</div>
              <p className="text-gray-300">Wyniki Gwarancji</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nasze Usługi Marketingowe w Gdańsku
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">{service.details}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Pakiety Cenowe
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative ${pkg.popular ? 'ring-2 ring-blue-600 md:scale-105' : 'border-gray-200'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">NAJPOPULARNIEJSZY</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">PLN/m-c</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
                    Więcej Informacji
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas in Gdańsk */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Obszary Obsługi w Gdańsku
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800">{area}</span>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pracujemy w Całym Trójmieście</h3>
                <p className="text-gray-700 mb-4">
                  Nasze doświadczenie obejmuje obsługę firm z całej Metropolii Gdańskiej – od tradycyjnych dzielnic 
                  Śródmieścia po nowoczesne Przymorze. Znamy specyfikę każdej części miasta i dostosowujemy strategie 
                  marketingowe do lokalnego rynku.
                </p>
                <p className="text-gray-700">
                  Niezależnie czy Twoja firma znajduje się w centrum Gdańska czy na jego obrzeżach, jesteśmy gotowi 
                  wspomóc Twój rozwój z wykorzystaniem najnowszych narzędzi marketingowych.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Pytania i Odpowiedzi
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-300 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Dlaczego FOTZ?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Star className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Doświadczenie i Wiedza</h3>
                  <p className="text-gray-700">
                    8 lat pracy na rynku marketingu. Znamy trendy, algorytmy Google i to, co naprawdę działa dla firm.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wymierne Wyniki</h3>
                  <p className="text-gray-700">
                    Obserwujemy KPI i raporty. Każda kampania to seria testów i optimizacji na drodze do sukcesu.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dedykowany Team</h3>
                  <p className="text-gray-700">
                    Twoja firma to nie numer w systemie. Masz dostęp do specjalistów, którzy zajmują się Twoją strategią.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wielobranżowe Doświadczenie</h3>
                  <p className="text-gray-700">
                    Pracowaliśmy z e-commerce, SaaS, usługami, handlem i produkcją. Wiemy, jak pozycjonować różne typy biznesu.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kreatywne Rozwiązania</h3>
                  <p className="text-gray-700">
                    Nie chodziliśmy utartymi szlakami. Innowujemy, testujemy i szukamy nowych sposobów na wzrost.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pełna Transparentność</h3>
                  <p className="text-gray-700">
                    Dostęp do wszystkich danych, raporty cotygodniowe, regularne spotkania. Żadnych ukrytych kosztów.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na Wzrost Twojej Firmy w Gdańsku?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Zapraszamy na bezpłatną konsultację. Analizujemy Twoją obecność online i sugerujemy konkretne działania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Rezerwuj Konsultację
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-blue-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              +48 123 456 789
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Brak zobowiązań. Zaczynamy tylko gdy będziesz pewny, że mamy coś wartościowego do zaproponowania.
          </p>
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-700">+48 123 456 789</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Siedziba</h3>
                  <p className="text-gray-700">Gdańsk, Pomorskie</p>
                </div>
                <div className="text-center">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">kontakt@fotz.pl</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
