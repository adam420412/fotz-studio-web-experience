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

export default function GoogleAdsSzczecin() {
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

  const pricingFactors = [
    "Liczba i rodzaj kampanii (Search, Display, Shopping, YouTube, remarketing)",
    "Liczba produktów lub usług oraz grup reklam do przygotowania",
    "Zasięg geograficzny: Szczecin, region, cała Polska lub rynek niemiecki",
    "Konfiguracja analityki i śledzenia konwersji",
    "Częstotliwość optymalizacji, raportów i spotkań",
    "Potrzeba przygotowania kreacji graficznych lub wideo",
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
      description: "Regularnie monitorujemy performance, optymalizujemy stawki, testujemy nowe kreacje.",
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
    { name: "Usługi i Konsultacje", icon: "💼" },
    { name: "Turysta i Rekreacja", icon: "✈️" },
    { name: "Nieruchomości", icon: "🏠" },
    { name: "Edukacja", icon: "📚" },
    { name: "Zdrowie i Medycyna", icon: "⚕️" },
    { name: "Produkcja i Przemysł", icon: "🏭" },
    { name: "Transport i Logistyka", icon: "🚚" }
  ];

  const faqs = [
    {
      question: "Ile czasu potrzeba, aby zobaczyć wyniki z Google Ads?",
      answer: "Pierwsze wyniki (kliknięcia, wrażenia) widać natychmiast po uruchomieniu kampanii. Jednak optymalizacja konwersji zajmuje zazwyczaj 2-4 tygodnie. Dlatego pracujemy ostrożnie w pierwszym miesiącu, testując różne podejścia, aby znaleźć to, co działa dla Twojej branży i rynku Szczecina."
    },
    {
      question: "Czy mogę zarządzać budżetem w Google Ads sam?",
      answer: "Oczywiście! Google Ads to platforma samoobsługowa. Bez doświadczenia łatwo jednak wydać budżet na nietrafione frazy lub źle ustawione kampanie. Pomagamy poukładać strukturę kampanii, śledzenie konwersji i regularną optymalizację — nie obiecujemy konkretnego zwrotu, bo zależy on od oferty, rynku i strony docelowej."
    },
    {
      question: "Jakie są średnie koszty dla firm w Szczecinie?",
      answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie kampanii, produktów, zasięgu i częstotliwości raportowania. Budżet reklamowy płacony Google jest osobny i zależy od branży, konkurencji w Szczecinie i Zachodniopomorskiem oraz Twoich celów sprzedażowych. Na konsultacji określimy realny budżet dla Twojego biznesu."
    },
    {
      question: "Czy mogę zacząć z małym budżetem?",
      answer: "Tak. Google Ads nie wymaga minimalnego budżetu — można zacząć od mniejszej kwoty, sprawdzić, które kampanie przynoszą zapytania, i stopniowo zwiększać budżet tam, gdzie to ma sens. Przy małym budżecie szczególnie ważna jest dobra konfiguracja kampanii i śledzenia konwersji."
    },
    {
      question: "Czy Google Ads działa dla B2B firmy?",
      answer: "Absolutnie! Google Ads świetnie działa dla B2B. Szukający długo opracowują decyzje o zakupach – trafiamy do nich w kluczowych momentach. Dla B2B ważne jest proper lead tracking, long sales cycle, i optymalizacja na \"wartość leadów\", a nie tylko konwersje. Pracujemy z Poznania, a firmy ze Szczecina obsługujemy zdalnie."
    },
    {
      question: "Co się stanie, jeśli przestanę płacić za Google Ads?",
      answer: "Reklamy natychmiast znikną. To nie jest SEO – tam ruch jest \"stały\" po optymalizacji. Google Ads to ruch \"on demand\". Jednak to pozwala nam testować szybko i skalować. Wiele firm używa kombinacji SEO + Google Ads – SEO dla długoterminowego ruchu, Google Ads dla natychmiastowego przyrostu."
    },
    {
      question: "Jak mierzycie sukces kampanii?",
      answer: "Śledzim KPI takie jak: CPL (koszt leadów), CPA (koszt akwizycji), ROAS (zwrot z inwestycji), conversion rate, quality score, CTR. Ustawiamy tracking dla każdej kampanii i raportujemy na bieżąco. Na spotkaniach omawiamy, co działa, co nie – i jak poprawić wyniki w następnym miesiącu."
    },
    {
      question: "Czy pracujecie z firmami poza Szczecinem?",
      answer: "Tak! Pracujemy z Poznania i zdalnie obsługujemy firmy z całego Zachodniopomorskiego i Polski. Lokalność jest ważna dla SEO (Google preferuje lokalne rezultaty), ale dla Google Ads geograficzny target można ustawić dowolnie. Jeśli Twoja firma obsługuje cały kraj – możemy to ustawić. Jeśli skupiasz się na Szczecinie – optymalizujemy dla lokalnego rynku."
    }
  ];

  const areas = [
    "Śródmieście",
    "Dąbie",
    "Pogodno",
    "Gumieńce",
    "Pomorzany",
    "Niebuszewo",
    "Warszewo",
    "Zdroje"
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Google Ads Szczecin | Fotz Studio"
        description="Google Ads Szczecin ✓ Kampanie dla firm ze Szczecina i Zachodniopomorskiego, prowadzone zdalnie z Poznania. Wycena po rozmowie o zakresie. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/google-ads/szczecin"
        keywords="google ads szczecin, kampanie google ads szczecin, agencja google ads szczecin, reklamy google szczecin, google adwords szczecin, sem szczecin, google ads dla firm szczecin, prowadzenie google ads szczecin, google ads cennik szczecin, reklama w google szczecin"
      />

      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
        { name: "Google Ads", url: "https://www.fotz-studio.pl/performance-marketing/google-ads" },
        { name: "Szczecin", url: "https://www.fotz-studio.pl/performance-marketing/google-ads/szczecin" }
      ]}/>

      <ServiceSchema
        name="Google Ads Szczecin"
        description="Profesjonalne zarządzanie kampaniami Google Ads dla firm ze Szczecina i Zachodniopomorskiego"
        areaServed="Szczecin"
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
        { name: "Szczecin", url: "/performance-marketing/google-ads/szczecin" }
      ]}/>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Google Ads Szczecin</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Google Ads dla Firm w Szczecinie
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Google Ads Szczecin — profesjonalne kampanie Google Ads i reklamy w Google dla firm ze Szczecina i Zachodniopomorskiego. Planujemy, konfigurujemy i optymalizujemy kampanie SEM pod Twoje cele. Pracujemy z Poznania, firmy ze Szczecina obsługujemy zdalnie. Bezpłatna konsultacja.
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

      {/* Why Szczecin Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Dlaczego Google Ads dla Szczecina?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeInView>
              <Card className="border-blue-200 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Szczecin – Brama do Niemiec</h3>
                  <p className="text-gray-700 mb-4">
                    Szczecin to ważny ośrodek portowy i naturalna brama do rynku niemieckiego.
                    Firmy z Szczecina i Zachodniopomorskiego mają unikalną pozycję – mogą skalować
                    biznes zarówno na polskim rynku, jak i na niemieckim.
                  </p>
                  <p className="text-gray-700">
                    Google Ads pozwala na precyzyjne targeting geograficzne – możemy trafiać do klientów
                    w Szczecinie, Zachodniopomorskiem, Polsce, lub nawet za granicą.
                  </p>
                </CardContent>
              </Card>
            </FadeInView>

            <FadeInView>
              <Card className="border-blue-200 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Konkurencja i Rynek</h3>
                  <p className="text-gray-700 mb-4">
                    Poziom konkurencji i koszt kliknięcia zależą od branży i konkretnych fraz.
                    Przed startem sprawdzamy w planerze słów kluczowych, jak wygląda rynek dla Twojej oferty.
                  </p>
                  <p className="text-gray-700">
                    Na tej podstawie proponujemy budżet i strukturę kampanii dopasowaną
                    do lokalnego rynku w Szczecinie i regionie.
                  </p>
                </CardContent>
              </Card>
            </FadeInView>
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
                Czas przygotowania zależy od zakresu kampanii i ustalamy go na starcie. Po uruchomieniu regularnie
                monitorujemy kampanię i optymalizujemy ją na podstawie wyników. Transparentne raportowanie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            Od czego zależy wycena
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Wycenę obsługi przygotowujemy po rozmowie o zakresie i celach kampanii — nie stosujemy stałego cennika.
            Budżet reklamowy płacony Google jest zawsze osobny od wynagrodzenia za prowadzenie kampanii.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {pricingFactors.map((factor, index) => (
              <FadeInView key={index}>
                <div className="flex items-start gap-3 p-5 rounded-lg border border-gray-200 bg-gray-50">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{factor}</span>
                </div>
              </FadeInView>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/kontakt">Zapytaj o wycenę</Link>
            </Button>
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
            Obszary Obsługi w Szczecinie
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Obsługujemy Całe Zachodniopomorskie</h3>
                <p className="text-gray-700 mb-4">
                  Pracujemy z Poznania, a firmy ze Szczecina i całego Zachodniopomorskiego –
                  od Stargardu po Kołobrzeg – obsługujemy zdalnie.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pełny Zakres Google Ads</h3>
                    <p className="text-gray-700">
                      Prowadzimy kampanie Search, Display, Shopping i YouTube — w połączeniu z produkcją video i stronami WWW.
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
                      KPI-driven. Obserwujemy conversion rate, CPA, ROAS – i regularnie optymalizujemy kampanie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stały Kontakt</h3>
                    <p className="text-gray-700">
                      Twoja kampania to nie numer w systemie. Masz stałą osobę kontaktową po naszej stronie.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Praca Zdalna z Poznania</h3>
                    <p className="text-gray-700">
                      Firmy ze Szczecina i Zachodniopomorskiego obsługujemy zdalnie — kampanie targetujemy na lokalny rynek.
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
                      Dostęp do wszystkich danych, regularne raporty i spotkania. Bez ukrytych kosztów.
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
