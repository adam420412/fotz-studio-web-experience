
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '@/components/seo/StructuredData';
import { FadeInView } from '@/components/FadeInView';
import { ContactSection } from '@/components/sections/ContactSection';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Target,
  Smartphone,
  Play,
  ShoppingCart,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Award,
  Clock,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FacebookAdsGdansk() {
  const services = [
    {
      icon: Target,
      title: "Feed Ads – Reklamy w Galerii",
      description: "Precyzyjne reklamy w feedzie użytkowników Facebook i Instagram. Trafiają do osób zainteresowanych Twoją ofertą.",
      details: "Kampanie image ads, carousel ads, optimizacja celowania, tracking konwersji"
    },
    {
      icon: Smartphone,
      title: "Stories Ads – Reklamy w Opowieściach",
      description: "Szybkie, wciągające reklamy w Stories. Idealne do awartu i zaangażowania młodszej publiczności.",
      details: "Stories video ads, full-screen format, swipe-up links, analityka zaangażowania"
    },
    {
      icon: Play,
      title: "Video Ads – Reklamy Wideo",
      description: "Dynamiczne kampanie video na Facebook i Instagram. Opowiadają historię Twojej marki i zwiększają zapamiętanie.",
      details: "In-stream video ads, video view campaigns, lead generation, storytelling"
    },
    {
      icon: ShoppingCart,
      title: "Catalog Ads – Reklamy Katalogów",
      description: "Pokażą katalog produktów bezpośrednio w reklamach. Idealne dla e-commerce, hoteli, nieruchomości.",
      details: "Dynamic product ads, retargeting, inventory sync, ROI tracking"
    },
    {
      icon: Users,
      title: "Community Ads – Reklamy Społeczności",
      description: "Buduj społeczność wokół marki. Reklamy w grupach, fanpages, messenger – wszędzie tam, gdzie są Twoi klienci.",
      details: "Group ads, community building, engagement campaigns, brand loyalty"
    },
    {
      icon: TrendingUp,
      title: "Conversion & Retargeting – Kampanie Konwersji",
      description: "Sklonuj najlepsze kampanie i kieruj je do osób, które już znają Twoją markę. Wynik: więcej sprzedaży, lepszy ROI.",
      details: "Pixel tracking, custom audiences, lookalike audiences, conversion optimization"
    }
  ];

  const process = [
    {
      number: "1",
      title: "Audyt i Analiza",
      description: "Sprawdzamy Twoje obecne kampanie Meta, konkurencję i potencjał rynku Gdańska. Identyfikujemy oportunności wzrostu."
    },
    {
      number: "2",
      title: "Strategia i Planning",
      description: "Budujemy niestandardową strategię Meta Ads z targetowaniem, budżetem i harmonogramem kampanii dla Gdańska."
    },
    {
      number: "3",
      title: "Setup i Launch",
      description: "Konfigurujemy kampanie w Business Manager. Pixel tracking, audiences, creative assets – wszystko gotowe do startu."
    },
    {
      number: "4",
      title: "Optymalizacja",
      description: "Codziennie monitorujemy wyniki. A/B testy, aukcje, targeting – dostosowujemy wszystko do lepszego ROI."
    },
    {
      number: "5",
      title: "Raportowanie i Skalowanie",
      description: "Miesięczne raporty z KPI. Gdzie jest potencjał – tam skalujemy budżet. Gdzie słabo – optymalizujemy lub wstrzymujemy."
    }
  ];

  const pricing = [
    {
      name: "START",
      price: "400",
      description: "Idealne na początek",
      features: [
        "1 kampania (Feed lub Stories)",
        "Do 3 000 zł budżetu/mies",
        "Tygodniowe optymalizacje",
        "Podstawowy reporting"
      ]
    },
    {
      name: "GROWTH",
      price: "1 200",
      description: "Najczęściej wybierane",
      features: [
        "Do 5 kampanii",
        "Do 10 000 zł budżetu/mies",
        "Codzienne optymalizacje",
        "Szczegółowy raport",
        "Strategia targetowania",
        "A/B testowanie"
      ],
      popular: true
    },
    {
      name: "PRO",
      price: "2 500",
      description: "Dla skalowania biznesu",
      features: [
        "Do 15 kampanii",
        "Do 30 000 zł budżetu/mies",
        "24/7 monitoring i optymalizacje",
        "Zaawansowana analityka",
        "Retargeting + lookalike audiences",
        "Video asset creation",
        "Call/Wiadomość 2x tygodniowo"
      ]
    },
    {
      name: "ENTERPRISE",
      price: "5 000+",
      description: "Dedykowany team",
      features: [
        "Unlimited kampanie",
        "Unlimited budżet",
        "24/7 dedicated account manager",
        "Custom strategy & optimization",
        "Full creative studio",
        "Integracje CRM/Automatyzacja",
        "Tygodniowe meetings z team"
      ]
    }
  ];

  const industries = [
    { emoji: '🛍️', name: 'E-commerce', description: 'Sprzedaż produktów online' },
    { emoji: '🏨', name: 'Turystyka', description: 'Hotele, apartamenty, wycieczki' },
    { emoji: '🏥', name: 'Medycyna', description: 'Kliniki, zabiegi, zdrowie' },
    { emoji: '🍽️', name: 'Gastronomia', description: 'Restauracje, kawiarnie, catering' },
    { emoji: '🏠', name: 'Nieruchomości', description: 'Mieszkania, lokale, inwestycje' },
    { emoji: '📚', name: 'Edukacja', description: 'Kursy, szkoły, szkolenia' },
    { emoji: '💇', name: 'Beauty & Wellness', description: 'Salony, SPA, fitness' },
    { emoji: '🚗', name: 'Automotive', description: 'Serwis, sprzedaż, akcesoria' }
  ];

  const areas = [
    'Śródmieście', 'Oliwa', 'Wrzeszcz', 'Suchanino', 'Zaspę', 'Siedlce', 'Przymorze', 'Brzeźno'
  ];

  const faqs = [
    {
      question: "Jaki budżet na Facebook Ads dla firm z Gdańska?",
      answer: "Minimum 400 PLN/mies dla małych firm (patrz plan START). Średnie firmy inwestują 1200-2500 PLN, duże 5000+ PLN. W Gdańsku biznesu portowego czy turystyki rekomendujemy min. 1200 PLN dla efektów."
    },
    {
      question: "Ile czasu na pierwsze wyniki z Facebook Ads?",
      answer: "Pierwsze konwersje widać po 2-3 tygodniach. Optymalne wyniki to 6-8 tygodni. W tym czasie zbieramy dane, testujemy audiences i creative assets."
    },
    {
      question: "Czy Facebook Ads działa dla B2B?",
      answer: "Tak, ale inaczej niż dla e-commerce. Musimy budować brand awareness i leadów, nie sprzedaż bezpośrednią. W Gdańsku firmy portowe czy konsultingowe mają świetne wyniki z retargetingiem."
    },
    {
      question: "Ile kampanii powinno być na raz?",
      answer: "To zależy od budżetu i celów. Zaczynamy 1-3 kampanii. Jak działa (ROAS &gt;2) – skalujemy do 5-10 kampanii. Plan GROWTH pozwala do 5 kampanii, PRO do 15."
    },
    {
      question: "Co to jest pixel tracking i dlaczego jest ważny?",
      answer: "Pixel Facebook to kod na Twojej stronie, który śledzi konwersje (zakupy, zapisy, telefony). Bez pixela nie wiemy, czy reklama działa. To fundament optymalizacji kampanii."
    },
    {
      question: "Czy mogę skalować budżet nawet w trakcie kampanii?",
      answer: "Oczywiście. Jeśli kampania ma ROAS &gt;2,5 – skalujemy budżet. Jeśli ROAS &lt;1,5 – albo optymalizujemy, albo zatrzymujemy. To będzie część Twojej strategii od dnia 1."
    },
    {
      question: "Ile osób z Gdańska możemy osiągnąć reklamami?",
      answer: "W Gdańsku jest ~500k aktywnych użytkowników Facebook/Instagram. W zależności od targeting (wiek, zainteresowania, behawior) możemy dotrzeć do 5k-100k osób/dzień. Bardziej sprecyzowany targeting = wyższy ROI."
    },
    {
      question: "Czy obsługujecie retargeting i lookalike audiences?",
      answer: "Tak, od planu PRO włącznie. Retargeting kieruje się do osób które już odwiedzały stronę. Lookalike audiences znajduje nowych ludzi podobnych do tych, którzy kupili. To skuteczne dla wzrostu."
    }
  ];

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Performance Marketing', path: '/performance-marketing' },
    { label: 'Facebook Ads', path: '/performance-marketing/facebook-ads' },
    { label: 'Gdańsk' }
  ];

  return (
    <>
      <SEOHead
        title="Agencja Facebook Ads Gdańsk — reklamy Meta dla firm | Fotz.pl"
        description="Facebook Ads Gdańsk ✓ Kampanie Meta Ads (Facebook, Instagram) dla firm z Gdańska i Trójmiasta. Od 400 zł/mies. Bezpłatna konsultacja!"
        canonical="https://fotz.pl/performance-marketing/facebook-ads/gdansk"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <ServiceSchema
        name="Facebook Ads Gdańsk"
        description="Profesjonalne kampanie Meta Ads (Facebook, Instagram) dla firm z Gdańska"
        areaServed="Gdansk"
        priceRange="400-5000 PLN/miesiąc"
      />
      
      <FAQSchema questions={faqs} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
            <PageBreadcrumbs items={breadcrumbItems} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInView>
                <div>
                  <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                    Facebook Ads dla Gdańska
                  </h1>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Reklamy na Facebook i Instagram, które zamieniają przewijających w klientów. Od firm turystycznych, przez e-commerce, po agencje – dla wszystkich marki z Gdańska i Trójmiasta.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <Badge className="bg-white text-blue-600 px-4 py-2 text-base">
                      150+ kampanii
                    </Badge>
                    <Badge className="bg-white/20 text-white px-4 py-2 text-base">
                      3.2x średni ROI
                    </Badge>
                    <Badge className="bg-white/20 text-white px-4 py-2 text-base">
                      95% retencja klientów
                    </Badge>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
                  >
                    Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </FadeInView>

              <FadeInView delay={200}>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-green-300 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Kampanie od 400 zł/mies</h3>
                          <p className="text-blue-100 text-sm">Bez ukrytych opłat. Transparentne ceny dla firm z Gdańska.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-green-300 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Dedykowany menedżer</h3>
                          <p className="text-blue-100 text-sm">Jedna osoba, znająca Twój biznes. Będzie z Tobą od startu do skalowania.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-green-300 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Analityka co dzień</h3>
                          <p className="text-blue-100 text-sm">Cotygodniowe wyniki, raport co miesiąc. Widzisz dokładnie, co działa.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Why Gdańsk */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Dlaczego Facebook Ads w Gdańsku?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Gdańsk to nie tylko turystyka. To port, IT, edukacja – branże, które prosperują dzięki dobrym reklamom.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Turystyka i Trójmiasto",
                  description: "Hotele, restauracje, atrakcje turystyczne. Facebook i Instagram to kanały, gdzie turyści planują wyjazdy. Doskonałe wyniki dla branży turystycznej."
                },
                {
                  icon: Zap,
                  title: "Dynamiczny IT Hub",
                  description: "Gdańsk ma rosnący sektor technologi. Firmy IT, SaaS, agencje – wszystkie korzystają z Meta Ads do lead generation i brand awareness."
                },
                {
                  icon: TrendingUp,
                  title: "E-commerce na Fali",
                  description: "Sklepy online w Gdańsku i regionie. Facebook Ads to sposób, aby dotrzeć do ludzi szukających produktów. Catalog Ads, retargeting – to działa tutaj."
                }
              ].map((item, i) => (
                <FadeInView key={i} delay={i * 100}>
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-8">
                      <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Typy kampanii Facebook Ads, które obsługujemy
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Od Feed Ads po Retargeting – każdy typ kampanii, każdy cel biznesowy
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <FadeInView key={index} delay={index * 50}>
                  <Card className="border-0 shadow-sm hover:shadow-lg transition-all h-full hover:border-blue-200">
                    <CardHeader>
                      <service.icon className="w-10 h-10 text-blue-600 mb-3" />
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">{service.details}</p>
                    </CardContent>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Jak działamy – 5 kroków
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Od audytu do skalowania. Proces, który sprawdzył się dla 150+ kampanii w Gdańsku.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {process.map((step, index) => (
                <FadeInView key={index} delay={index * 100}>
                  <div className="relative">
                    <Card className="border-0 shadow-sm text-center h-full bg-white hover:shadow-md transition-shadow">
                      <CardContent className="p-8">
                        <div className="text-5xl font-bold text-blue-600 mb-3">{step.number}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                    {index < process.length - 1 && (
                      <div className="hidden md:flex absolute -right-2 top-1/2 text-blue-400 text-2xl">
                        &rarr;
                      </div>
                    )}
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Ceny kampanii Meta Ads
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Od małych firm na start, do enterprise – mamy pakiet dla każdego
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.map((tier, index) => (
                <FadeInView key={index} delay={index * 100}>
                  <Card className={`border-0 shadow-sm transition-all h-full ${tier.popular ? 'ring-2 ring-blue-600 shadow-lg relative' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-blue-600">Najpopularniejszy</Badge>
                      </div>
                    )}
                    <CardHeader className={tier.popular ? 'pt-8' : ''}>
                      <CardTitle className="text-2xl text-gray-900">{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                        <span className="text-gray-500 ml-2">/mies</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full mt-8 ${tier.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                      >
                        Wybierz plan
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Branże, dla których robimy Facebook Ads
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Każda branża ma inne cele. My rozumiemy specyfikę Twojego biznesu.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <FadeInView key={index} delay={index * 50}>
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-5xl mb-3">{industry.emoji}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{industry.name}</h3>
                      <p className="text-sm text-gray-600">{industry.description}</p>
                    </CardContent>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Obszary Gdańska, które obsługujemy
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Facebook Ads dla firm z całego Gdańska i Trójmiasta
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <FadeInView key={index} delay={index * 50}>
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-900">{area}</p>
                    </CardContent>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Dlaczego firmy z Gdańska wybierają FOTZ?
                </h2>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "6 lat doświadczenia",
                  description: "Od 2019 roku robimy kampanie Facebook Ads, które się zwracają. Znamy algorytmy Mety na pamięć."
                },
                {
                  icon: Users,
                  title: "Menedżerowie z branży",
                  description: "Nasi account managers pracowali w e-commerce, turystyce, IT. Znają Twoje wyzwania."
                },
                {
                  icon: Zap,
                  title: "Szybka optymalizacja",
                  description: "Nie czekamy tygodniami. Jeśli coś nie działa – optymalizujemy w ciągu dni."
                },
                {
                  icon: TrendingUp,
                  title: "Przejrzyste wyniki",
                  description: "Raporty co tydzień, spotkania co miesiąc. Widzisz dokładnie, gdzie idą pieniądze."
                },
                {
                  icon: Clock,
                  title: "Wsparcie 24/7",
                  description: "Masz pytanie o kampanię? Odpowiadamy szybko. Problemy? Rozwiązujemy natychmiast."
                },
                {
                  icon: CheckCircle2,
                  title: "Gwarantowany ROI",
                  description: "Jeśli w 3 miesiące kampania nie zwroci się (ROAS &lt;1.5) – refundujemy część opłat."
                }
              ].map((item, i) => (
                <FadeInView key={i} delay={i * 100}>
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-8">
                      <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Najczęstsze pytania
                </h2>
                <p className="text-xl text-gray-600">
                  Odpowiadamy na pytania, które usłyszeliśmy 100 razy
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-0 bg-gray-50 px-6 rounded-lg data-[state=open]:bg-blue-50 transition-colors">
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base leading-relaxed pb-4 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInView>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-400 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInView>
              <h2 className="text-5xl font-bold mb-6">Gotowy na wzrost?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Facebook Ads to nie magia – to nauka. Wiemy, jak ją robić. Zaczynamy od audytu, kończymy na skalowaniu.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              >
                Zarezerwuj bezpłatną konsultację <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </FadeInView>
          </div>
        </section>

        <ContactSection />

        {/* Back Link */}
        <section className="py-12 bg-white border-t">
          <div className="max-w-7xl mx-auto px-6">
            <Link to="/performance-marketing/facebook-ads" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 text-lg font-semibold">
              &larr; Wróć do Facebook Ads
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
