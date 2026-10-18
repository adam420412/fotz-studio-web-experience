import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Building2, TrendingUp, Star, Users, MapPin, CheckCircle2, ArrowRight, Phone, Target, Smartphone, BarChart3, Lightbulb, Zap, Globe, Megaphone, PieChart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function GoogleAdsBydgoszcz() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      icon: Target,
      title: "Search Ads – Google Wyszukiwanie",
      description: "Precyzyjne reklamy w wynikach wyszukiwania. Zainteresowani klienci trafiają prosto na Twoją stronę.",
      details: "Kampanie text ads, słowa kluczowe, bid management, optymalizacja jakości reklam"
    },
    {
      icon: Smartphone,
      title: "Display Ads – Sieci Wyświetlania",
      description: "Reklamy graficzne na stronach partnerskich. Buduj świadomość marki w sieci Google Display Network.",
      details: "Reklamy responsywne, remarketing, targeting audiencji, creative design"
    },
    {
      icon: BarChart3,
      title: "Shopping Ads – Reklamy Produktów",
      description: "Pokaż swoje produkty bezpośrednio w wynikach Google. Idealne dla e-commerce.",
      details: "Feed produktów, kampanie sezonowe, tracking konwersji, ROI optimization"
    },
    {
      icon: PieChart,
      title: "Video Ads – Reklamy YouTube",
      description: "Trafiaj do widogu poprzez profesjonalne reklamy video na YouTube.",
      details: "In-stream ads, discovery ads, targeting demograficzne, conversion tracking"
    },
    {
      icon: Globe,
      title: "App Campaigns – Promocja Aplikacji",
      description: "Promuj swoją aplikację mobilną poprzez Google App Campaigns.",
      details: "User acquisition, retention campaigns, budget optimization, creative testing"
    },
    {
      icon: Megaphone,
      title: "Strategie Kampanii i Optymalizacja",
      description: "Kompleksowe podejście – od planowania do optymalizacji codziennej.",
      details: "Audyt konkurencji, A/B testy, analytics setup, raportowanie KPI"
    }
  ];

  const packages = [
    {
      name: "START",
      price: "Wycena indywidualna",
      description: "Dla firm zaczynających z Google Ads",
      features: [
        "Setup kampanii Search Ads",
        "Maksymalnie 2 kampanie",
        "Optymalizacja co 2 tygodnie",
        "Raport miesięczny",
        "Konsultacja strategiczna"
      ]
    },
    {
      name: "GROWTH",
      price: "Wycena indywidualna",
      description: "Dla firm rozwijających się",
      features: [
        "Zarządzanie 3-5 kampaniami Search",
        "Kampanie Display Network",
        "Budżet reklamowy ustalany osobno",
        "Optymalizacja tygodniowa",
        "A/B testy reklam",
        "Raporty szczegółowe + call co 2 tygodnie",
        "Remarketing setup"
      ],
      popular: true
    },
    {
      name: "PRO",
      price: "Wycena indywidualna",
      description: "Kompleksowe zarządzanie kampaniami",
      features: [
        "Zarządzanie 5+ kampaniami",
        "Search Ads + Display + Remarketing",
        "Shopping Ads (dla e-commerce)",
        "Video Ads (YouTube) planning",
        "Budżet reklamowy ustalany osobno",
        "Optymalizacja codziennie",
        "Dedykowany account manager",
        "Cotygodniowe spotkania strategiczne",
        "Premium reporting i analytics setup"
      ]
    },
    {
      name: "ENTERPRISE",
      price: "Wycena indywidualna",
      description: "Pełny zakres dla dużych kampanii",
      features: [
        "Wszystko z PRO",
        "Video Ads + App Campaigns management",
        "Advanced automation i scripts",
        "Budżet reklamowy ustalany osobno",
        "Stały monitoring kampanii",
        "Spersonalizowane strategie",
        "Quarterly business reviews",
                "Eksperymentalne kampanie i testy"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Audyt i Analiza",
      description: "Analizujemy Twoją branżę, konkurencję i obecne wyniki. Definiujemy cele kampanii.",
      icon: BarChart3
    },
    {
      number: "2",
      title: "Strategia i Planning",
      description: "Tworzymy strategię: słowa kluczowe, budget allocation, targeting, creative direction.",
      icon: Target
    },
    {
      number: "3",
      title: "Setup i Launch",
      description: "Konfigurujemy kampanie w Google Ads, tworzymy reklamy, ustawiamy tracking.",
      icon: Zap
    },
    {
      number: "4",
      title: "Optymalizacja",
      description: "Co dzień monitorujemy performance, optymalizujemy bids, testujemy nowe creative.",
      icon: TrendingUp
    },
    {
      number: "5",
      title: "Raportowanie i Skalowanie",
      description: "Raportujemy wyniki, skalujemy kampanie ze zmieniającym się biznesem.",
      icon: PieChart
    }
  ];

  const industries = [
    { name: "E-commerce i Handel", icon: "🛍️" },
    { name: "IT i Technologia", icon: "💻" },
    { name: "Edukacja", icon: "📚" },
    { name: "Usługi i Konsultacje", icon: "💼" },
    { name: "Medycyna i Zdrowie", icon: "⚕️" },
    { name: "Nieruchomości", icon: "🏠" },
    { name: "Produkcja", icon: "🏭" },
    { name: "Motoryzacja", icon: "🚗" }
  ];

  const faqs = [
    {
      question: "Ile czasu potrzeba, aby zobaczyć wyniki z Google Ads?",
      answer: "Pierwsze dane (wyświetlenia, kliknięcia) pojawiają się po uruchomieniu kampanii. Czas potrzebny na optymalizację konwersji zależy od branży, budżetu i liczby zbieranych konwersji, dlatego nie obiecujemy sztywnych terminów. Na początku współpracy pracujemy ostrożnie, testując różne podejścia, aby znaleźć to, co działa dla Twojej branży i rynku Kujaw."
    },
    {
      question: "Czy mogę zarządzać budżetem w Google Ads sam?",
      answer: "Oczywiście! Google Ads to platforma samoobsługowa. Jednak bez doświadczenia łatwo zmarnować budżet na nietrafione słowa kluczowe i źle ustawione konwersje. Pomagamy uporządkować strukturę kampanii, pomiar i testy, ale nie obiecujemy konkretnego zwrotu z inwestycji."
    },
    {
      question: "Jakie są średnie koszty dla firm w Bydgoszczy?",
      answer: "Wynagrodzenie za prowadzenie kampanii wyceniamy po rozmowie o zakresie: liczbie i typach kampanii, liczbie produktów lub usług, potrzebnych reklamach graficznych i wideo oraz częstotliwości raportów. Budżet reklamowy płacony Google jest zawsze osobno, a koszt kliknięcia zależy od konkurencji w danej branży."
    },
    {
      question: "Czy mogę zacząć z małym budżetem?",
      answer: "Tak! Google Ads skaluje się wraz z Twoim biznesem. Możesz zacząć od mniejszego budżetu reklamowego i stopniowo zwiększać go na kampanie, które przynoszą wyniki. Nie ma minimalnego budżetu – tylko maksymalne ryzyko, jeśli kampanię źle skonfigurujemy."
    },
    {
      question: "Czy Google Ads działa dla branż technicznych?",
      answer: "Tak, Google Ads może sprawdzić się także w B2B i branżach technicznych. Ważne jest poprawne śledzenie leadów, uwzględnienie długiego cyklu sprzedaży i optymalizacja na \"wartość leadów\"."
    },
    {
      question: "Jak mierzycie sukces kampanii?",
      answer: "Śledzim KPI takie jak: CPL (koszt leadów), CPA (koszt akwizycji), ROAS (zwrot z inwestycji), conversion rate, quality score, CTR. Ustawiamy tracking dla każdej kampanii i raportujemy na bieżąco. Na spotkaniach omawiamy, co działa, co nie – i jak poprawić wyniki w następnym miesiącu."
    },
    {
      question: "Czy Google Ads działa dla usług lokalnych?",
      answer: "Tak! Jeśli obsługujesz Bydgoszcz i Kujawsko-Pomorskie, Google Ads jest doskonały. Możemy targetować geograficznie – tylko osoby szukające Twoich usług w Bydgoszczy. Warto połączyć kampanie z profilem firmy w Google (Mapy), który pomaga docierać do klientów lokalnych."
    },
    {
      question: "Czy mogę zaufać Waszemu zespołowi?",
      answer: "Pracujemy z transparentnym raportowaniem – masz dostęp do wszystkich danych, accountu Google Ads i wskaźników wydajności. Dla nas to długoterminowe partnerstwo, a nie jednorazowy projekt."
    }
  ];

  const areas = [
    "Śródmieście",
    "Stare Miasto",
    "Leśna",
    "Górzyskowo",
    "Bocianowo",
    "Fordoński",
    "Myślęcinek",
    "Tłoki"
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Google Ads Bydgoszcz | Fotz Studio"
        description="Google Ads Bydgoszcz ✓ Kampanie dla firm z Bydgoszczy i Kujaw, prowadzone zdalnie z Poznania. Wycena po rozmowie o zakresie. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/google-ads/bydgoszcz"
        keywords="google ads bydgoszcz, kampanie google ads bydgoszcz, agencja google ads bydgoszcz, reklamy google bydgoszcz, google adwords bydgoszcz, sem bydgoszcz, google ads dla firm bydgoszcz, prowadzenie google ads bydgoszcz, google ads cennik bydgoszcz, reklama w google bydgoszcz"
      />

      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
        { name: "Google Ads", url: "https://www.fotz-studio.pl/performance-marketing/google-ads" },
        { name: "Bydgoszcz", url: "https://www.fotz-studio.pl/performance-marketing/google-ads/bydgoszcz" }
      ]}/>

      <ServiceSchema
        name="Google Ads Bydgoszcz"
        description="Profesjonalne zarządzanie kampaniami Google Ads dla firm z Bydgoszczy i Kujaw"
        areaServed="Bydgoszcz"
      />

      <FAQSchema items={faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))} />

      {/* Breadcrumbs */}
      <PageBreadcrumbs items={[
        { name: "Strona główna", url: "/" },
        { name: "Performance Marketing", url: "/performance-marketing" },
        { name: "Google Ads", url: "/performance-marketing/google-ads" },
        { name: "Bydgoszcz", url: "/performance-marketing/google-ads/bydgoszcz" }
      ]}/>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Google Ads Bydgoszcz</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Google Ads dla Firm w Bydgoszczy
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Google Ads Bydgoszcz — profesjonalne kampanie Google Ads i reklamy w Google dla firm z Bydgoszczy i Kujaw. Prowadzimy kampanie SEM nastawione na ruch, konwersje i zwrot z inwestycji. Pracujemy z Poznania, firmy z Bydgoszczy obsługujemy zdalnie. Bezpłatna konsultacja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/kontakt">
                  Bezpłatna Konsultacja
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <a href="tel:+48790814814">
                  Zadzwoń: +48 790 814 814
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bydgoszcz Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Dlaczego Google Ads dla Bydgoszczy?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeInView>
              <Card className="border-blue-200 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Bydgoszcz – Miasto Rosnące IT</h3>
                  <p className="text-gray-700 mb-4">
                    Bydgoszcz to największe miasto w Kujawsko-Pomorskim, z rozwijającym się
                    sektorem IT, edukacyjnym i usługowym. Firmy z Bydgoszczy mają różne
                    potrzeby – od e-commerce, przez SaaS, po usługi lokalne.
                  </p>
                  <p className="text-gray-700">
                    Google Ads pozwala na precyzyjne targeting – możemy trafiać do klientów
                    w Bydgoszczy, Kujawach, czy nawet całej Polsce.
                  </p>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView>
              <Card className="border-blue-200 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Konkurencja i Okazja</h3>
                  <p className="text-gray-700 mb-4">
                    Poziom konkurencji i koszt kliknięcia zależą od branży i wybranych słów kluczowych.
                    Przed startem sprawdzamy, ile firm z Twojej branży reklamuje się w Bydgoszczy.
                  </p>
                  <p className="text-gray-700">
                    Na tej podstawie planujemy budżet reklamowy i dobieramy frazy lokalne,
                    które mają sens dla Twojej firmy.
                  </p>
                </CardContent>
              </Card>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">Zdalnie</div>
              <p className="text-gray-300">Obsługa firm z Bydgoszczy</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">Poznań</div>
              <p className="text-gray-300">Stąd pracujemy</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">Wycena</div>
              <p className="text-gray-300">Po rozmowie o zakresie</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">Budżet</div>
              <p className="text-gray-300">Płacony Google osobno</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Typy Kampanii Google Ads
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <FadeInView key={index}>
                  <Card className="hover:shadow-lg transition-shadow border-gray-200 h-full">
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
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Proces Pracy z Google Ads
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <FadeInView key={index}>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                        {step.number}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-700">{step.description}</p>
                    </div>
                  </FadeInView>
                );
              })}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-center text-gray-700">
                Cały proces trwa średnio 1-2 tygodnie. Po launch monitorujemy kampanię codziennie i optymalizujemy
                na podstawie wyników. Transparentne raportowanie co miesiąc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Pakiety Współpracy
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 -mt-6">
            Wycenę przygotowujemy po rozmowie o zakresie: liczbie i typach kampanii, wielkości oferty,
            potrzebnych kreacjach oraz częstotliwości raportów i spotkań. Budżet reklamowy płacony Google
            jest zawsze osobno i nie wchodzi w wynagrodzenie za prowadzenie kampanii.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <FadeInView key={index}>
                <Card
                  className={`relative ${pkg.popular ? 'ring-2 ring-blue-600' : 'border-gray-200'}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">DLA ROZWIJAJĄCYCH SIĘ</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full text-sm ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}><a href="/kontakt">
                      Zapytaj o szczegóły
                    </a></Button>
                  </CardContent>
                </Card>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Branże, Które Obsługujemy
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <FadeInView key={index}>
                <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">{industry.icon}</div>
                    <h3 className="font-bold text-gray-900 text-sm">{industry.name}</h3>
                  </CardContent>
                </Card>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Obszary Obsługi w Bydgoszczy
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {areas.map((area, index) => (
                <FadeInView key={index}>
                  <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{area}</span>
                  </div>
                </FadeInView>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Obsługujemy Całe Kujawsko-Pomorskie</h3>
                <p className="text-gray-700 mb-4">
                  Bydgoszcz jest sercem regionu Kujaw. Pracujemy z firmami z całego Kujawsko-Pomorskiego –
                  od Tucholi po Włocławek. Pracujemy z Poznania, a firmy z regionu obsługujemy zdalnie.
                </p>
                <p className="text-gray-700">
                  Niezależnie gdzie Twoja firma się znajduje, jesteśmy gotowi wspomóc Twój
                  wzrost poprzez profesjonalne zarządzanie Google Ads.
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

      {/* Why Choose FOTZ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Dlaczego FOTZ?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeInView>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Star className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Specjalizacja w Google Ads</h3>
                    <p className="text-gray-700">
                      Kampanie Google Ads prowadzimy jako jedną z kluczowych usług, w połączeniu ze stronami WWW i produkcją wideo.
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
                      KPI-driven. Obserwujemy conversion rate, CPA, ROAS – i optymalizujemy codziennie.
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
                      Twoja kampania to nie numer w systemie. Account manager poświęcony Twojemu projektowi.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strategie Oparte na Danych</h3>
                    <p className="text-gray-700">
                      A/B testy, conversion tracking, analytics setup. Decyzje oparte na wynikach, nie intuicji.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kampanie Lokalne</h3>
                    <p className="text-gray-700">
                      Ustawiamy kierowanie na Bydgoszcz i Kujawsko-Pomorskie. Pracujemy z Poznania, firmy z regionu obsługujemy zdalnie.
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
                      Dostęp do wszystkich danych, raporty cotygodniowe, regularne spotkania. Bez ukrytych kosztów.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na Więcej Klientów z Google Ads?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Zapraszamy na bezpłatną konsultację. Analizujemy Twoją branżę, konkurencję i potencjał dla Google Ads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/kontakt">
                Rezerwuj Konsultację
              </Link>
            </Button>
            <Button asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700">
              <a href="tel:+48790814814">
                <Phone className="w-5 h-5 mr-2" />
                +48 790 814 814
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Brak zobowiązań. Zaczynamy tylko gdy będziesz pewny, że mamy coś wartościowego do zaproponowania.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Back to main page */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-gray-700">Powrót do głównych usług marketingowych:</p>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-bold">
            &larr; Strona Główna FOTZ.pl
          </Link>
        </div>
      </section>
    </Layout>
  );
}
