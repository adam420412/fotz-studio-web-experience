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

export default function AgencjaMarketingowaLublin() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Pozycjonowanie SEO",
      description: "Zwiększymy widoczność Twojej firmy w wyszukiwarce Google. Specjalizujemy się w optymalizacji stron dla firm z Lublina, Śródmieścia, LSM i okolic.",
      benefits: ["Więcej organicznych klientów", "Stabilne pozycje w Google", "Ruch lokalny i ogólnopolski"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Google Ads i PPC",
      description: "Kampanie reklamowe, które generują sprzedaż. Zarządzamy budżetem precyzyjnie, aby każdy złoty wydany przyniosła zwrot.",
      benefits: ["Natychmiastowe efekty", "Kontrola budżetu", "Mierzalne ROI"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Budujemy marę na Facebooku, Instagramie i LinkedIn. Strategie dostosowane do branży i odbiorcy z terenu Lubelszczyzny.",
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
      benefits: ["Wysoki ROI", "Automatyzacja", "Personalizacja komunikacji"]
    }
  ];

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "od 2 999",
      currency: "PLN",
      period: "/miesiąc",
      description: "Idealne dla małych firm i startupów z Lublina",
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
      price: "od 7 999",
      currency: "PLN",
      period: "/miesiąc",
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
        "Premium support 24/7"
      ],
      cta: "Zapytaj o cenę"
    }
  ];

  const faqs = [
    {
      question: "Jak szybko zobaczę wyniki z SEO w Lublinie?",
      answer: "Pierwsze efekty SEO widać zwykle po 4-6 tygodniach. Pozycje stabilizują się po 3-6 miesiącach. Wszystko zależy od konkurencji i zakresu optymalizacji. Google Ads natomiast generuje wyniki od razu, w ciągu kilku godzin."
    },
    {
      question: "Obsługujecie firmy spoza Lublina?",
      answer: "Tak, pracujemy z firmami z całej Polski i zagranicą. Specjalizujemy się w firmach z Lublin i Lubelszczyzny (Śródmieście, LSM, Wieniawa, Tatary, Bronowice, Czechów), ale strategie SEO i digital marketing działają wszędzie."
    },
    {
      question: "Ile kosztuje pozycjonowanie SEO w Lublinie?",
      answer: "Cena zależy od branży, konkurencji i zakresu pracy. Nasze pakiety startują od 2 999 PLN miesięcznie. Oferujemy bezpłatną wycenę po rozmowie o Twoim biznesie i celach."
    },
    {
      question: "Czy mogę odwołać umowę w dowolnym momencie?",
      answer: "Tak, umowy bez kar za przedterminowe rozwiązanie. Chcemy, aby współpraca była satysfakcjonująca dla obu stron. Jeśli nie będziesz zadowolony, możesz zrezygnować."
    },
    {
      question: "Jakie wyniki osiągają Wasze kampanie Google Ads?",
      answer: "Średni ROI naszych kampanii to 300-500%. Wszystko zależy od branży i budżetu. Każdą kampanię optymalizujemy pod kątem konwersji i maksymalnego zwrotu z inwestycji. Dostarczamy raport ze statystykami co tydzień."
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
    { label: "Zadowolonych klientów", value: "500+" },
    { label: "Lat doświadczenia", value: "8" },
    { label: "Wskaźnik zadowolenia", value: "97%" },
    { label: "Projektów z TOP3", value: "95%" }
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Lublin | Fotz Studio"
        description="Agencja marketingowa Lublin ✓ SEO, Google Ads, Social Media, strony WWW. Ponad 200 projektów dla firm z Lublina i Lubelszczyzny. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/lublin"
        keywords="agencja marketingowa lublin, marketing internetowy lublin, agencja reklamowa lublin, kampanie reklamowe lublin, seo lublin, google ads lublin"
      />

      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
          { name: "Lublin", url: "https://fotz.pl/agencja-marketingowa/lublin" }
        ]}/>

      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Agencja Marketingowa w Lublinie
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Agencja Marketingowa Lublin
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Kompleksowe usługi marketingu cyfrowego dla firm z Lublina, Lubelszczyzny i całej Polski. SEO, Google Ads, Social Media, strony WWW i strategie wzrostu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 w-5 h-5" />
                Bezpłatna konsultacja
              </Button>
              <Button size="lg" variant="outline">
                Pobierz wycenę
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
              Nasi specjaliści znają lokalne rynki, konkurencję i potrzeby firm z Lublina. Pracujemy z firmami z każdej dzielnicy miasta i Lubelszczyzny.
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
                  <div className="font-semibold text-gray-900">Doświadczenie na lokalnym rynku</div>
                  <p className="text-sm text-gray-700 mt-1">Znamy Lublin, konkurencję i potrzeby lokalnych firm. Pracujemy z biznesami z uniwersytetów, IT-u i handlu.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Rezultaty, nie obietnice</div>
                  <p className="text-sm text-gray-700 mt-1">97% naszych klientów widzi wzrost ruchu i sprzedaży w ciągu 6 miesięcy. Pokazujemy konkretne liczby.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Zespół specjalistów</div>
                  <p className="text-sm text-gray-700 mt-1">SEO specialiści, developerzy, projektanci i copywriterzy. Każdy ma min. 5 lat doświadczenia.</p>
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
              Elastyczne pakiety, które pasują do każdego budżetu. Brak ukrytych kosztów, pełna transparentność.
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
                      Najpopularniejszy
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
            Ponad 500 firm z Lublina i całej Polski zaufało nam swoją transformację cyfrową. Dołącz do nich dzisiaj.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              <Phone className="mr-2 w-5 h-5" />
              Umów bezpłatną konsultację
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-800"
            >
              Dowiedz się więcej
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Brak zobowiązań. Poromawiamy o Twoich celach i pokażemy możliwości.
          </p>
        </div>
      </section>

      <ServiceSchema
        name="Agencja Marketingowa Lublin"
        description="Kompleksowe usługi marketingu cyfrowego: SEO, Google Ads, Social Media, strony WWW i strategie wzrostu dla firm z Lublina i Lubelszczyzny."
        areaServed="Lublin"
      />
    </Layout>
  );
}
