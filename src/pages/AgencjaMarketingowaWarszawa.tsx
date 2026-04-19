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
  Globe,
  PenTool,
  Megaphone,
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

const AgencjaMarketingowaWarszawa = () => {
  const [activePackage, setActivePackage] = useState<string>("biznes");

  const services = [
    {
      id: "seo-lokalne",
      icon: MapPin,
      title: "SEO Lokalne Warszawa",
      description:
        "Pozycjonowanie dla firm z Warszawy w wyszukiwarce Google. Dominacja w wynikach lokalnych dla Twojej branży.",
      features: [
        "Optymalizacja profilu Google Business Profile",
        "Budowanie cytacji lokalnych",
        "Lokalne linki zwrotne",
        "Mapy Google - TOP10 pozycje",
      ],
    },
    {
      id: "social-media",
      icon: Megaphone,
      title: "Social Media Marketing",
      description:
        "Zarządzanie mediami społecznościowymi. Zwiększanie zaangażowania i konwersji na Facebook, Instagram i LinkedIn.",
      features: [
        "Zarządzanie kontami społecznościowymi",
        "Strategie content marketingu",
        "Kampanie reklamowe na socjalach",
        "Community management i obsługa klientów",
      ],
    },
    {
      id: "google-ads",
      icon: Zap,
      title: "Google Ads - PPC",
      description:
        "Kampanie Google Ads dla maksymalnego ROI. Szybkie wyniki dla firm z Warszawy szukające nowych klientów.",
      features: [
        "Kampanie Search Ads",
        "Display Ads na całym internecie",
        "Shopping kampanie dla e-commerce",
        "Remarketing i conversion tracking",
      ],
    },
    {
      id: "strony-www",
      icon: Globe,
      title: "Strony WWW &amp; Web Design",
      description:
        "Tworzenie nowoczesnych stron internetowych responsywnych i zoptymalizowanych dla SEO. Strony które sprzedają.",
      features: [
        "Responsive web design",
        "CMS i e-commerce platformy",
        "Szybkie ładowanie stron",
        "Optymalizacja konwersji (CRO)",
      ],
    },
    {
      id: "content-marketing",
      icon: PenTool,
      title: "Content Marketing",
      description:
        "Tworzenie wartościowych treści. Blogi, artykuły, case studies, które przyciągają i konwertują klientów.",
      features: [
        "Strategie content marketingu",
        "Pisanie artykułów SEO",
        "Tworzenie infografik",
        "Video content i animacje",
      ],
    },
    {
      id: "branding",
      icon: Lightbulb,
      title: "Branding &amp; Strategia",
      description:
        "Budowanie silnej tożsamości marki. Logo, identyfikacja wizualna i strategia pozycjonowania dla Twojej firmy.",
      features: [
        "Strategia pozycjonowania marki",
        "Logo i identyfikacja wizualna",
        "Branding guidelines",
        "Brand voice i messaging",
      ],
    },
  ];

  const packages = [
    {
      id: "start",
      name: "Start",
      price: "2 990",
      period: "/miesiąc",
      description: "Dla małych firm i startupów",
      features: [
        "1 strategia SEO",
        "Do 5 postów miesięcznie",
        "Raport co 2 tygodnie",
        "Wsparcie email",
        "Dostęp do panelu analityki",
      ],
      highlighted: false,
    },
    {
      id: "biznes",
      name: "Biznes",
      price: "5 990",
      period: "/miesiąc",
      description: "Dla firm średnich i rozwijających się",
      features: [
        "Pełna strategia digital",
        "Zarządzanie 2-3 kanałami",
        "Do 15 postów miesięcznie",
        "Kampania Google Ads",
        "Raport tygodniowy",
        "Wsparcie phone + email",
        "Optymalizacja konwersji",
      ],
      highlighted: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: "11 990",
      period: "/miesiąc",
      description: "Dla dużych firm i e-commerce",
      features: [
        "Kompleksowa strategia digital",
        "Zarządzanie wszystkimi kanałami",
        "Nieograniczone posty na socjalach",
        "Kampanie Multi-channel",
        "Raport co tydzień + spotkania",
        "Account manager dedicated",
        "24/7 support",
        "Konwersja i growth hacking",
        "A/B testowanie",
      ],
      highlighted: false,
    },
  ];

  const stats = [
    { label: "Zadowolonych klientów", value: "97%", icon: Star },
    { label: "Projektów zrealizowanych", value: "500+", icon: TrendingUp },
    { label: "Lat doświadczenia", value: "8+", icon: Building2 },
    { label: "Średni wzrost przychodów", value: "Top 3", icon: BarChart3 },
  ];

  const faqs = [
    {
      question: "Ile czasu zajmuje SEO w Warszawie?",
      answer:
        "SEO to proces długoterminowy. Pierwsze efekty widać po 2-3 miesiącach, ale maksymalne rezultaty osiągamy w ciągu 6-12 miesięcy. Warszawa jest konkurencyjnym rynkiem, ale nasze doświadczenie pozwala na szybsze uzyskanie pozycji w TOP10 Google.",
    },
    {
      question: "Dlaczego moja firma potrzebuje agencji marketingowej?",
      answer:
        "Marketing cyfrowy wymaga specjalistycznej wiedzy i doświadczenia. Agencja marketingowa pozwala Ci skupić się na biznesie, a nam na generowaniu rezultatów. Firmy które pracują z agencją zwiększają przychody średnio o 250% w ciągu roku.",
    },
    {
      question: "Jakie są najlepsze kanały marketingu dla firm z Warszawy?",
      answer:
        "Dla większości firm z Warszawy sprawdzają się: Google Ads (szybkie wyniki), SEO (długoterminowe), Facebook/Instagram (targetowanie), LinkedIn (B2B). Wybór zależy od branży, budżetu i celów. Robimy audit konkurencji by znaleźć najlepszy mix dla Twojej firmy.",
    },
    {
      question: "Czy gwarantujecie pozycje w Google?",
      answer:
        "Nikt nie może gwarantować pozycji - zmienia się algorytm i konkurencja. My gwarantujemy: transparentne wyniki, pełne raporty, kompleksową strategię i dedykowany support. Nasze klientów w 97% spodziewa się efektów, bo pracujemy z przewidywalnymi procesami sprawdzonymi na setki projektach.",
    },
    {
      question: "Ile kosztuje strona WWW dla firmy z Warszawy?",
      answer:
        "Cena strony zależy od zakresu: prosta strona wizytówka to 3-5k PLN, portal z funkcjonalnościami to 8-20k PLN, a e-commerce 20-50k+ PLN. Oferujemy wycenę indywidualną po analizie Twoich potrzeb. Strona to inwestycja - dobra strona generuje klientów przez lata.",
    },
  ];

  const districts = [
    "Śródmieście",
    "Mokotów",
    "Wola",
    "Praga",
    "Ursynów",
    "Wilanów",
    "Żoliborz",
    "Włochy",
    "Ochota",
    "Piaseczno",
    "Milanówek",
    "Konstancin-Jeziorna",
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Warszawa | Fotz Studio"
        description="Agencja marketingowa Warszawa ✓ SEO, Google Ads, Social Media, strony internetowe. Marketing internetowy Warszawa — 200+ projektów dla firm. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/warszawa"
        keywords="agencja marketingowa warszawa, marketing internetowy warszawa, agencja reklamowa warszawa, seo warszawa, google ads warszawa, firma marketingowa warszawa, reklama internetowa warszawa"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
          {
            name: "Warszawa",
            url: "https://fotz.pl/agencja-marketingowa/warszawa",
          },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-12 md:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600 opacity-20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-600 opacity-20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-center gap-2">
            <Badge variant="secondary" className="bg-cyan-400 text-blue-900">
              <MapPin className="mr-1 h-3 w-3" />
              Warszawa
            </Badge>
            <Badge variant="secondary" className="bg-cyan-400 text-blue-900">
              #1 Agencja Marketingowa
            </Badge>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Agencja Marketingowa Warszawa
          </h1>

          <p className="mb-6 max-w-2xl text-lg text-blue-100 sm:text-xl">
            Agencja reklamowa Warszawa — specjaliści SEO, Google Ads, Social Media i stron internetowych.
            Kompleksowy marketing internetowy dla firm z Warszawy i Mazowsza. Ponad 200 projektów. Bezpłatna wycena!
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-cyan-400 text-blue-900 hover:bg-cyan-300"
              asChild
            >
              <Link to="/kontakt">
                Bezpłatna wycena <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-white hover:bg-blue-700"
            >
              <Phone className="mr-2 h-4 w-4" />
              +48 (22) 123 45 67
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <Icon className="mb-2 h-6 w-6 text-cyan-400" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Dlaczego firmy wybierają FOTZ?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Sprawdzeni specjaliści, gwarantowane rezultaty, wsparcie 24/7
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="pt-6">
                <Target className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 font-bold text-gray-900">
                  Rezultaty Oparte O Dane
                </h3>
                <p className="text-gray-600">
                  Każda decyzja oparta na analizie danych i raportach. Przejrzyste
                  KPI i ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-600">
              <CardContent className="pt-6">
                <Users className="mb-4 h-8 w-8 text-cyan-600" />
                <h3 className="mb-2 font-bold text-gray-900">
                  Dedykowany Account Manager
                </h3>
                <p className="text-gray-600">
                  Jeden punkt kontaktu. Osoba która zna Twoją firmę i cele
                  biznesowe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="pt-6">
                <TrendingUp className="mb-4 h-8 w-8 text-green-600" />
                <h3 className="mb-2 font-bold text-gray-900">
                  Wzrost Biznesu
                </h3>
                <p className="text-gray-600">
                  97% naszych klientów widzi wzrost przychodów w ciągu 3-6 miesięcy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="pt-6">
                <Smartphone className="mb-4 h-8 w-8 text-purple-600" />
                <h3 className="mb-2 font-bold text-gray-900">
                  Strategie Multi-Channel
                </h3>
                <p className="text-gray-600">
                  SEO, Social Media, Google Ads, Email Marketing - wszystko
                  zintegrowane.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardContent className="pt-6">
                <Zap className="mb-4 h-8 w-8 text-orange-600" />
                <h3 className="mb-2 font-bold text-gray-900">
                  Szybkie Wdrożenie
                </h3>
                <p className="text-gray-600">
                  Zaczynamy kampanie w ciągu 1-2 tygodni. Szybko, sprawnie,
                  profesjonalnie.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardContent className="pt-6">
                <Star className="mb-4 h-8 w-8 text-red-600" />
                <h3 className="mb-2 font-bold text-gray-900">
                  Doświadczenie
                </h3>
                <p className="text-gray-600">
                  8+ lat na rynku, 500+ zadowolonych klientów, nagrody branżowe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Nasze Usługi Marketingowe w Warszawie
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Kompleksowe usługi marketingu internetowego dla firm w Warszawie — od strategii i reklamy internetowej po SEO, strony internetowe i obsługę social media.
            </p>
          </div>

          <ServiceSchema
            name="Agencja Marketingowa Warszawa"
            description="Kompleksowe usługi marketingu cyfrowego dla firm z Warszawy"
            provider="FOTZ Studio"
            areaServed="Warszawa"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
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

      {/* Packages Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Pakiety Cenowe
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Elastyczne pakiety dostosowane do budżetu i potrzeb Twojej firmy
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative transition-all ${
                  pkg.highlighted
                    ? "lg:scale-105 border-2 border-blue-600 shadow-xl"
                    : "border border-gray-200"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600">Najpopularniejszy</Badge>
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {pkg.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">{pkg.description}</p>

                  <div className="mb-6 flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="ml-2 text-gray-600">{pkg.period}</span>
                  </div>

                  <Button
                    className={`w-full mb-6 ${
                      pkg.highlighted
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                    onClick={() => setActivePackage(pkg.id)}
                  >
                    Dowiedz się więcej
                  </Button>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Nie znalazłeś odpowiedniego pakietu? Stworzymy dla Ciebie
              indywidualną ofertę!
            </p>
            <Button size="lg" asChild>
              <Link to="/kontakt">Zapytaj o wycenę</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Agencja Marketingowa dla Firm z Całej Warszawy i Mazowsza
            </h2>
            <p className="text-lg text-gray-600">
              Firma marketingowa Fotz obsługuje klientów ze wszystkich dzielnic Warszawy i okolicznych miast.
              Realizujemy strategie marketingowe, kampanie reklamowe w Google Ads i Meta Ads, pozycjonowanie SEO Warszawa
              i tworzenie stron internetowych — dla małych i dużych firm z Warszawy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {districts.map((district) => (
              <div
                key={district}
                className="rounded-lg bg-white p-4 text-center border border-blue-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold text-gray-900">{district}</span>
                </div>
                <p className="text-xs text-gray-600">
                  SEO i marketing dla firm
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Pytania Najczęściej Zadawane
            </h2>
            <p className="text-lg text-gray-600">
              Odpowiedzi na najczęstsze pytania o marketing cyfrowy i nasze usługi
            </p>
          </div>

          <FAQSchema
            items={faqs.map((faq) => ({
              question: faq.question,
              answer: faq.answer,
            }))}
          />

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 rounded-lg bg-blue-50 p-6 text-center">
            <p className="mb-4 text-lg font-semibold text-gray-900">
              Nie znaleźliśmy odpowiedzi na Twoje pytanie?
            </p>
            <Button asChild>
              <Link to="/kontakt">Skontaktuj się z nami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-900 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Jak Pracujemy
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Nasz sprawdzony proces gwarantuje rezultaty
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Audit i Strategia",
                description:
                  "Analizujemy Twoją firmę, konkurencję i rynek. Tworzymy spersonalizowaną strategię.",
              },
              {
                step: "2",
                title: "Wdrożenie",
                description:
                  "Szybkie i sprawne wdrożenie kampanii. Mamy doświadczenie, nie gubimy się w szczegółach.",
              },
              {
                step: "3",
                title: "Optymalizacja",
                description:
                  "Ciągle monitorujemy i optymalizujemy wyniki. A/B testy, poprawianie KPI.",
              },
              {
                step: "4",
                title: "Raportowanie",
                description:
                  "Przejrzyste raporty co tydzień. Widzisz dokładnie co robiliśmy i jakie były rezultaty.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Gotów na Wzrost Twojego Biznesu?
          </h2>
          <p className="mb-8 text-lg text-blue-50">
            Dołącz do ponad 500 zadowolonych klientów. Bezpłatna wycena i konsultacja.
            Bez zobowiązań.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              asChild
            >
              <Link to="/kontakt">
                Zamów Bezpłatną Konsultację
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700"
            >
              <Phone className="mr-2 h-4 w-4" />
              +48 (22) 123 45 67
            </Button>
          </div>

          <p className="mt-6 text-sm text-blue-100">
            Odpowiadamy do 24 godzin. Dzwoń również poza godzinami pracy.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-50 py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <Phone className="mx-auto mb-3 h-8 w-8 text-blue-600" />
              <h3 className="mb-2 font-bold text-gray-900">Zadzwoń do nas</h3>
              <p className="text-gray-600 mb-2">+48 (22) 123 45 67</p>
              <p className="text-xs text-gray-500">Pon-Pt 8:00-20:00, Sob 9:00-17:00</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <MapPin className="mx-auto mb-3 h-8 w-8 text-blue-600" />
              <h3 className="mb-2 font-bold text-gray-900">Biuro Warszawa</h3>
              <p className="text-gray-600 mb-1">ul. Marszałkowska 142</p>
              <p className="text-xs text-gray-500">Śródmieście, 00-025 Warszawa</p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <Building2 className="mx-auto mb-3 h-8 w-8 text-blue-600" />
              <h3 className="mb-2 font-bold text-gray-900">Online</h3>
              <p className="text-gray-600 mb-2">kontakt@fotz.pl</p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link to="/kontakt">Formularz kontaktowy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AgencjaMarketingowaWarszawa;
