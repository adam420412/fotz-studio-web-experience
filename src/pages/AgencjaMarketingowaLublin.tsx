import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TrendingUp, MapPin, CheckCircle2, ArrowRight, Phone, Target, Smartphone, BarChart3, Lightbulb, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import LocalSEOBoost from "@/components/seo/LocalSEOBoost";

export default function AgencjaMarketingowaLublin() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Pozycjonowanie SEO",
      description: "Zwiększymy widoczność Twojej firmy w wyszukiwarce Google. Optymalizujemy strony firm z Lublina, Śródmieścia, LSM i okolic pod frazy lokalne i ogólnopolskie.",
      benefits: ["Lepsza widoczność w Google", "Treści pod frazy lokalne", "Ruch lokalny i ogólnopolski"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Google Ads i PPC",
      description: "Kampanie reklamowe nastawione na sprzedaż i zapytania. Budżetem zarządzamy tak, by każdy wydatek był mierzalny. Budżet reklamowy płacony Google rozliczany jest osobno.",
      benefits: ["Szybki start kampanii", "Kontrola budżetu", "Mierzalne wyniki"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Budujemy markę na Facebooku, Instagramie i LinkedIn. Strategie dostosowane do branży i odbiorcy z terenu Lubelszczyzny.",
      benefits: ["Wzrost zasięgu", "Zaangażowanie odbiorców", "Budowanie społeczności"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Strony WWW i UX",
      description: "Nowoczesne, responsywne strony internetowe. Projektujemy rozwiązania, które zamieniają odwiedzających w klientów.",
      benefits: ["Design responsywny", "Szybkie ładowanie", "Konwersje i sprzedaż"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategie Marketingowe",
      description: "Opracowujemy indywidualne plany wzrostu dla Twojego biznesu. Audyt, benchmark, optymalizacja procesów.",
      benefits: ["Analiza konkurencji", "Plan działań", "Wdrażanie i monitoring"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Email Marketing",
      description: "Automatyzacja i kampanie mailowe, które zwiększają zaangażowanie. Zarządzanie bazą kontaktów i segmentacja odbiorców.",
      benefits: ["Segmentacja bazy", "Automatyzacja", "Personalizacja komunikacji"]
    }
  ];

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "Wycena indywidualna",
      currency: "",
      period: "",
      description: "Dla małych firm i startupów z Lublina",
      features: [
        "Pełna audyt SEO i analiza konkurencji",
        "Do 10 słów kluczowych",
        "Miesięczny raport",
        "Konsultacje co 2 tygodnie",
        "Wsparcie mailowe"
      ],
      cta: "Zacznij teraz"
    },
    {
      id: "professional",
      name: "Professional",
      price: "Wycena indywidualna",
      currency: "",
      period: "",
      description: "Dla firm chcących dynamicznego wzrostu",
      featured: true,
      features: [
        "Kompleksowe zarządzanie SEO",
        "Do 30 słów kluczowych",
        "Kampania Google Ads",
        "Zarządzanie social media",
        "Cotygodniowe konsultacje",
        "Raport szczegółowy co tydzień",
        "Wsparcie telefoniczne"
      ],
      cta: "Wybierz plan"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Wycena indywidualna",
      currency: "",
      period: "",
      description: "Zaawansowana obsługa dla dużych organizacji",
      features: [
        "Dedykowany menedżer konta",
        "Nieograniczone słowa kluczowe",
        "SEO + SEM + Social Media",
        "Produkcja contentu",
        "Projektowanie stron WWW",
        "Konsultacje na bieżąco",
        "Strategia e-commerce",
        "Priorytetowy kontakt w ustalonych godzinach"
      ],
      cta: "Zapytaj o cenę"
    }
  ];

  const faqs = [
    {
      question: "Jak szybko zobaczę wyniki z SEO w Lublinie?",
      answer: "SEO to proces rozłożony na miesiące — tempo zależy od konkurencji, stanu strony i zakresu optymalizacji. Nie gwarantujemy konkretnej pozycji ani terminu, a postępy pokazujemy w raportach. Reklamy Google Ads mogą zacząć się wyświetlać krótko po akceptacji, ale tempo pozyskiwania zapytań zależy od oferty, budżetu i strony docelowej."
    },
    {
      question: "Obsługujecie firmy spoza Lublina?",
      answer: "Tak, pracujemy z firmami z całej Polski. Działamy z Poznania, a firmy z Lublina i Lubelszczyzny (Śródmieście, LSM, Wieniawa, Tatary, Bronowice, Czechów) obsługujemy zdalnie."
    },
    {
      question: "Ile kosztuje pozycjonowanie SEO w Lublinie?",
      answer: "Wycenę przygotowujemy po rozmowie o zakresie. Zależy ona od branży, konkurencji, liczby fraz i podstron oraz stanu technicznego strony. Wycena jest bezpłatna."
    },
    {
      question: "Czy mogę odwołać umowę w dowolnym momencie?",
      answer: "Warunki i okres wypowiedzenia ustalamy w umowie przed startem współpracy, tak aby były jasne dla obu stron."
    },
    {
      question: "Jakie wyniki osiągają Wasze kampanie Google Ads?",
      answer: "Wynik kampanii zależy od branży, oferty, budżetu i strony docelowej, dlatego nie obiecujemy konkretnego zwrotu z inwestycji. Każdą kampanię optymalizujemy pod kątem konwersji, a wyniki pokazujemy w regularnych raportach."
    }
  ];

  const areas = [
    "Śródmieście",
    "LSM",
    "Wieniawa",
    "Tatary",
    "Bronowice",
    "Czechów"
  ];

  const stats = [
    { label: "Stąd pracujemy", value: "Poznań" },
    { label: "Obsługa firm z Lublina", value: "Zdalnie" },
    { label: "SEO, Ads, social, WWW", value: "Full-service" },
    { label: "Regularne omówienie wyników", value: "Raporty" }
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Lublin | Fotz Studio"
        description="Agencja marketingowa Lublin ✓ SEO, Google Ads, Social Media, strony WWW dla firm z Lublina i Lubelszczyzny — zdalnie z Poznania. Bezpłatna wycena!"
        canonical="https://www.fotz-studio.pl/agencja-marketingowa/lublin"
        keywords="agencja marketingowa lublin, marketing internetowy lublin, agencja reklamowa lublin, kampanie reklamowe lublin, seo lublin, google ads lublin"
      />

      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Agencja marketingowa", url: "https://www.fotz-studio.pl/agencja-marketingowa" },
          { name: "Lublin", url: "https://www.fotz-studio.pl/agencja-marketingowa/lublin" }
        ]}/>

      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Marketing dla firm z Lublina — zdalnie z Poznania
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Agencja Marketingowa Lublin
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Kompleksowe usługi marketingu cyfrowego dla firm z Lublina, Lubelszczyzny i całej Polski. SEO, Google Ads, Social Media, strony WWW i strategie wzrostu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/kontakt">
                  <Phone className="mr-2 w-5 h-5" />
                  Bezpłatna konsultacja
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/kontakt">
                  Pobierz wycenę
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Obsługujemy firmy z całego Lublina
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pracujemy z Poznania, a firmy z każdej dzielnicy Lublina i z Lubelszczyzny obsługujemy zdalnie. Lokalny rynek i konkurencję analizujemy na starcie współpracy.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {areas.map((area, idx) => (
              <Card key={idx} className="border-blue-100 hover:border-blue-300 transition">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{area}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Dlaczego wybrać nas?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Analiza lokalnego rynku</div>
                  <p className="text-sm text-gray-700 mt-1">Na starcie sprawdzamy konkurencję w Lublinie i frazy, którymi szukają Twoi klienci — w handlu, usługach, IT czy edukacji.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Rezultaty, nie obietnice</div>
                  <p className="text-sm text-gray-700 mt-1">Nie obiecujemy wyników z góry — ustalamy mierzalne cele i w raportach pokazujemy, jak zmieniają się ruch i zapytania.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Zespół specjalistów</div>
                  <p className="text-sm text-gray-700 mt-1">SEO, development, projektowanie i copywriting koordynujemy po naszej stronie — masz jeden punkt kontaktu.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Wsparcie na każdym kroku</div>
                  <p className="text-sm text-gray-700 mt-1">Dedykowany menedżer, raport co tydzień, konsultacje i wsparcie. Jesteśmy partnerem, nie dostawcą.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kompleksowe rozwiązania marketingowe dostosowane do potrzeb Twojej firmy. Od SEO po e-commerce, od małych startupów po duże korporacje.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition h-full">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pakiety i ceny
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Przykładowe zakresy współpracy. Wycenę przygotowujemy po rozmowie o zakresie, a budżet reklamowy płacony platformom (Google, Meta) rozliczany jest zawsze osobno.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`border-2 transition ${
                  pkg.featured
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200 hover:border-blue-300"
                } h-full flex flex-col`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {pkg.featured && (
                    <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700 self-start">
                      Kompleksowy zakres
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      {pkg.currency && <span className="text-gray-600">{pkg.currency}</span>}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{pkg.period}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      pkg.featured
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Wszystkie pakiety zawierają
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <div className="font-semibold text-gray-900">Raport analityczny</div>
                <p className="text-sm text-gray-600 mt-1">Szczegółowe dane o wynikach</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Optymalizacja ciągła</div>
                <p className="text-sm text-gray-600 mt-1">Testy A/B i ulepszenia</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Konsultacje</div>
                <p className="text-sm text-gray-600 mt-1">Rozmowy ze specjalistą</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Wsparcie techniczne</div>
                <p className="text-sm text-gray-600 mt-1">Rozwiązywanie problemów</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pytania i odpowiedzi
            </h2>
            <p className="text-lg text-gray-600">
              Odpowiadamy na najczęstsze pytania dotyczące naszych usług, cen i procesu pracy.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <FAQSchema
            items={faqs.map((faq) => ({
              question: faq.question,
              answer: faq.answer
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Gotów na wzrost?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Porozmawiajmy o celach Twojej firmy i zakresie działań w Lublinie i regionie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link to="/kontakt">
                <Phone className="mr-2 w-5 h-5" />
                Umów bezpłatną konsultację
              </Link>
            </Button>
            <Button asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-800"
            ><a href="/kontakt">
              Zapytaj o szczegóły
            </a></Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Brak zobowiązań. Porozmawiamy o Twoich celach i pokażemy możliwości.
          </p>
        </div>
      </section>

      <LocalSEOBoost
        city="Lublin"
        cityLocative="Lublinie"
        voivodeshipLocative="lubelskim"
        variant="agency"
      />

      <ServiceSchema
        name="Agencja Marketingowa Lublin"
        description="Kompleksowe usługi marketingu cyfrowego: SEO, Google Ads, Social Media, strony WWW i strategie wzrostu dla firm z Lublina i Lubelszczyzny."
        areaServed="Lublin"
      />
    </Layout>
  );
}
