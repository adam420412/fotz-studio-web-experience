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

export default function AgencjaMarketingowaGdynia() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Agencje Marketingowe", url: "/agencje-marketingowe" },
    { name: "Gdynia", url: "/agencja-marketingowa/gdynia" },
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "SEO dla Gdyni",
      description:
        "Pozycjonowanie w Google dla firm z Gdyni. Optimization stron, strategia słów kluczowych, lokalne wyniki wyszukiwania.",
      features: [
        "Analiza konkurencji w Gdyni",
        "Budowanie autorytetu domeny",
        "SEO lokalne Gdynia",
        "Raporty miesięczne",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Google Ads & SEM",
      description:
        "Reklamy Google Ads dla firm w Gdyni. Kampanie wyszukiwarki, skuteczne konwersje, optymalizacja budżetu reklamowego.",
      features: [
        "Kampanie Search Ads",
        "Reklamy Display Network",
        "Retargeting do klientów",
        "Maksymalna ROI",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Social Media Marketing",
      description:
        "Marketing w mediach społecznych dla marca Gdynia. Instagram, Facebook, LinkedIn strategie wzrostu i engagement.",
      features: [
        "Zarządzanie profilami",
        "Treści na miarę",
        "Reklamy społeczne",
        "Analityka i reporting",
      ],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strony WWW",
      description:
        "Nowoczesne strony internetowe dla firm z Gdyni. Responsywne projekty, szybkie ładowanie, konwersje.",
      features: [
        "Projekt responsywny",
        "Szybkość ładowania",
        "SEO-friendly struktura",
        "Integracja CRM",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Email Marketing",
      description:
        "Kampanie email marketingowe dla firm w Gdyni. Automatyzacja, segmentacja, wysokie wskaźniki otwierania.",
      features: [
        "Automaty mailowe",
        "Segmentacja listy",
        "A/B testy",
        "Newsletter profesjonalny",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Konsultacje Marketingowe",
      description:
        "Doradztwo strategiczne dla firm. Strategie wzrostu, analiza konkurencji, plany marketingowe na miarę.",
      features: [
        "Audit marketingowy",
        "Strategie wzrostu",
        "Analiza SWOT",
        "Plan wdrażania",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "2 999 zł",
      period: "/miesiąc",
      description: "Idealna dla małych firm i startupów",
      features: [
        "SEO podstawowe",
        "Zarządzanie Google Ads",
        "2 godziny konsultacji",
        "Raport miesięczny",
        "Wsparcie mailowe",
      ],
      cta: "Zacznij teraz",
      popular: false,
    },
    {
      name: "Professional",
      price: "5 999 zł",
      period: "/miesiąc",
      description: "Najlepszy stosunek ceny do jakości",
      features: [
        "SEO zaawansowane",
        "Google Ads + Social Media",
        "4 godziny konsultacji",
        "Raport tygodniowy",
        "Wsparcie telefoniczne",
        "Optimizacja strony",
      ],
      cta: "Wybierz Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Indywidualnie",
      period: "/miesiąc",
      description: "Pełna obsługa marketingowa",
      features: [
        "Wszystkie strategie",
        "Dedykowany team",
        "Nieograniczone konsultacje",
        "Raport codziennie",
        "Wsparcie VIP",
        "Rozwój custom",
      ],
      cta: "Zaplanuj rozmowę",
      popular: false,
    },
  ];

  const faqs = [
    {
      id: "1",
      question: "Ile kosztuje agencja marketingowa w Gdyni?",
      answer:
        "Cena zależy od zakresu usług i Twoich celów. Nasza agencja oferuje pakiety od 2999 zł do 15000+ zł miesięcznie. Każdy pakiet jest dostosowany do potrzeb Twojej firmy. Oferujemy także wycenę na projekt dla stron WWW i kampanii jednorazowych.",
    },
    {
      id: "2",
      question:
        "Jakie obszary Gdyni obsługujemy? Czy pracujecie w Śródmieściu?",
      answer:
        "Pracujemy z firmami z całej Gdyni, w tym z obszarów: Śródmieście, Redłowo, Karwiny, Orłowo, Witomino i Grabówek. Prowadzimy też projekty dla firm w całym Trójmieście (Gdańsk, Sopot). Lokalizacja geograficzna nie stanowi dla nas bariery - współpracujemy online.",
    },
    {
      id: "3",
      question: "Jak szybko zobaczę rezultaty SEO w Gdyni?",
      answer:
        "SEO to długoterminowa inwestycja. Pierwsze efekty widać po 3-4 miesiącach, ale znaczące wyniki osiągamy w 6-12 miesięcy. Kampanie Google Ads działają od razu - już w pierwszym tygodniu możesz mieć klientów. Wszystko zależy od konkurencji w Twojej branży.",
    },
    {
      id: "4",
      question: "Czy mogę zmienić agencję marketingową?",
      answer:
        "Oczywiście! Przy przejściu z innej agencji przeprowadzimy pełny audit Twoich kampanii i wyjaśnimy, jak były zarządzane. Bez karnych opłat - jeśli nasze wyniki się nie spodoba, zawsze możesz odejść. Pracujemy na zasadzie wzajemnego zaufania i zadowolenia.",
    },
    {
      id: "5",
      question: "Jakie są wasze gwarancje i zobowiązania?",
      answer:
        "Gwarantujemy transparentne raporty, wyznaczone KPI i cotygodniowe sprawdzanie postępów. W ciągu 30 dni dostarczamy wstępny plan działań. Jeśli po 90 dniach nie zobaczysz poprawy, możesz skontaktować się z nami - wtedy zmieniamy strategię bezpłatnie.",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "klientów obsłużonych",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "8",
      label: "lat doświadczenia",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      number: "97%",
      label: "zadowolonych klientów",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "TOP3",
      label: "wyniki w SERP",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const areas = [
    "Śródmieście Gdynia",
    "Redłowo",
    "Karwiny",
    "Orłowo",
    "Witomino",
    "Grabówek",
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Gdynia | FOTZ – Marketing Dla Firm w Gdyni"
        description="Agencja marketingowa Gdynia ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Gdyni i Trójmiasta. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/gdynia"
        keywords="agencja marketingowa gdynia, marketing internetowy gdynia, agencja reklamowa gdynia, kampanie reklamowe gdynia, seo gdynia, agencja marketingowa trójmiasto"
      />

      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="pt-20 pb-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>Gdynia, Trójmiasto</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Agencja Marketingowa Gdynia
            </h1>

            <p className="text-xl text-slate-700 mb-8 max-w-3xl">
              Profesjonalna agencja marketingowa w Gdyni. Obsługujemy firmy z
              całego Trójmiasta - Gdańska, Sopotu i Gdyni. Specjalizujemy się w
              SEO, Google Ads, social media i tworzeniu nowoczesnych stron
              internetowych. Ponad 500 zadowolonych klientów i 8 lat
              doświadczenia na rynku.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-5 h-5 mr-2" />
                Bezpłatna konsultacja
              </Button>
              <Button size="lg" variant="outline">
                Pobierz ofertę
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-white shadow-sm">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="flex justify-center mb-2 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Usługi Marketingowe Dla Firm w Gdyni
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-8">
                    <div className="text-blue-600 mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <li
                          key={fidx}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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

        <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Pakiety Cenowe Dla Gdyni
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`border-2 ${
                    pkg.popular
                      ? "border-blue-600 shadow-lg scale-105"
                      : "border-slate-200"
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-blue-600 text-white py-2 text-center text-sm font-semibold">
                      Najpopularniejszy
                    </div>
                  )}
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6">
                      {pkg.description}
                    </p>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-slate-900">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-slate-600">{pkg.period}</div>
                    </div>
                    <Button
                      className={`w-full mb-6 ${
                        pkg.popular
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-slate-200 text-slate-900 hover:bg-slate-300"
                      }`}
                    >
                      {pkg.cta}
                    </Button>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fidx) => (
                        <li
                          key={fidx}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Nie wiesz, które rozwiązanie wybrać?
              </h3>
              <p className="text-slate-700 mb-6">
                Umówimy się na bezpłatną konsultację, gdzie omówimy Twoje
                potrzeby i zaproponujemy najlepszy pakiet.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Zaplanuj rozmowę
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
              Obszary Obsługi w Gdyni
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Pracujemy z firmami z każdego warsztatu Gdyni i całego Trójmiasta
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {areas.map((area, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-900 font-medium">
                        {area}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Czemu Gdynia?
              </h3>
              <p className="text-slate-700 mb-4">
                Gdynia to dynamicznie rozwijające się miasto portowe
                z bogatą historią i bogatą sceną biznesową. Nasza agencja
                zna specyfiquę lokalnego rynku:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Port i logistyka - branże o dużym potencjale SEO
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Startup ecosystem - młode firmy potrzebują strategii wzrostu
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Turystyka i morze - marketing nautyczny to nasza specjalność
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Lokalni przedsiębiorcy - zrozumiemy Twoje wyzwania
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Najczęstsze Pytania - Agencja Marketingowa Gdynia
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b border-slate-200"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline">
                    <span className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-slate-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Gotowy na transformację Twojego Biznesu?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Zacznij z bezpłatną konsultacją i analizą konkurencji. Brak
              zobowiązań, brak kosztów!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100"
              >
                Bezpłatna Konsultacja
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń do nas
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-8">
              Odpowiadamy w ciągu 2 godzin, 7 dni w tygodniu
            </p>
          </div>
        </section>

        <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">
              Dlaczego nas wybierają?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <Star className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">
                  Doświadczeni Eksperci
                </h4>
                <p className="text-sm text-slate-600">
                  Team z ponad 8 latami doświadczenia w branży
                </p>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">
                  Mierzalne Wyniki
                </h4>
                <p className="text-sm text-slate-600">
                  Raporty i KPI dostosowane do Twoich celów
                </p>
              </div>
              <div>
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">
                  Indywidualny Podход
                </h4>
                <p className="text-sm text-slate-600">
                  Każda strategia dopasowana do Twojej branży
                </p>
              </div>
              <div>
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">
                  Szybka Implementacja
                </h4>
                <p className="text-sm text-slate-600">
                  Plan działania w ciągu 48 godzin po umowie
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ServiceSchema
        name="Agencja Marketingowa Gdynia"
        description="Profesjonalna agencja marketingowa oferująca SEO, Google Ads, Social Media i tworzenie stron internetowych dla firm w Gdyni."
        areaServed="Gdynia"
      />

      <FAQSchema items={faqs} />
    </Layout>
  );
}
