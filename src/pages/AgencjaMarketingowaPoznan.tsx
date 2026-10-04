import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
import LocalSEOBoost from "@/components/seo/LocalSEOBoost";

export default function AgencjaMarketingowaPoznan() {
  const services = [
    {
      icon: TrendingUp,
      title: "SEO i Pozycjonowanie",
      href: "/seo/pozycjonowanie-poznan",
      description:
        "Rozwijamy widoczność strony dzięki analizie zapytań, treści i optymalizacji technicznej.",
      features: ["Analiza konkurencji", "Optymalizacja on-page", "Link building"],
    },
    {
      icon: Target,
      title: "Google Ads i PPC",
      href: "/performance-marketing/google-ads",
      description:
        "Kampanie Google Ads z planem budżetu, testów i pomiaru konwersji.",
      features: ["Zarządzanie budżetem", "Optymalizacja konwersji", "A/B testing"],
    },
    {
      icon: Smartphone,
      title: "Media Społecznościowe",
      href: "/social-media/poznan",
      description:
        "Strategia i zarządzanie kampaniami na Facebook, Instagram i LinkedIn.",
      features: ["Tworzenie contentu", "Community management", "Analityka"],
    },
    {
      icon: BarChart3,
      title: "Strony Internetowe",
      href: "/uslugi/strony-internetowe/poznan",
      description:
        "Nowoczesne, responsywne strony WWW zaprojektowane do konwersji.",
      features: ["RWD design", "Szybkie ładowanie", "SEO-friendly"],
    },
    {
      icon: Lightbulb,
      title: "Strategie Marketingowe",
      href: "/content-marketing/strategia",
      description:
        "Kompleksowe audyty i strategie oparte na danych dla Twojego biznesu.",
      features: ["Audyt konkurencji", "Plan działań", "Raportowanie"],
    },
    {
      icon: Zap,
      title: "Email Marketing",
      href: "/uslugi/email-marketing",
      description:
        "Automatyczne kampanie e-mailowe generujące sprzedaż i zaangażowanie.",
      features: ["Segmentacja", "Automation", "Personalizacja"],
    },
  ];

  const packages = [
    {
      name: "START",
      price: "Wycena indywidualna",
      period: "",
      description: "Dla startupów i małych firm",
      features: [
        "1 kampania Google Ads",
        "Zarządzanie sieciami społecznościowymi",
        "Raport miesięczny",
        "Wsparcie email",
      ],
      cta: "Zacznij",
      highlighted: false,
    },
    {
      name: "BIZNES",
      price: "Wycena indywidualna",
      period: "",
      description: "Dla rozwijających się firm",
      features: [
        "2 kampanie Google Ads",
        "SEO i media społecznościowe",
        "Optymalizacja strony",
        "Wsparcie telefoniczne i e-mail",
        "Szczegółowy raport",
      ],
      cta: "Wybierz pakiet",
      highlighted: true,
    },
    {
      name: "PREMIUM",
      price: "Wycena indywidualna",
      period: "",
      description: "Dla ambitnych przedsiębiorstw",
      features: [
        "Wszystkie kampanie Google Ads",
        "Pełna strategia marketingowa",
        "Strona internetowa",
        "Dedykowany account manager",
        "Cotygodniowe spotkania",
      ],
      cta: "Zaplanuj Konsultację",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Ile czasu zajmuje pozycjonowanie strony w Poznaniu?",
      answer:
        "Termin zależy od stanu strony, konkurencji i zakresu zmian. Zaczynamy od analizy Search Console i ustalenia priorytetów. W kolejnych raportach oddzielamy wykonane działania od zmian widoczności i zapytań.",
    },
    {
      question: "Czy muszę mieć stronę internetową, aby zacząć kampanię Google Ads?",
      answer:
        "Tak, strona WWW jest niezbędna. Jeśli jej nie posiadasz, możemy ją dla Ciebie stworzyć. Oferujemy nowoczesne, responsywne strony zaprojektowane do konwersji.",
    },
    {
      question: "Jakie są koszty kampanii Google Ads dla firm z Poznania?",
      answer:
        "Koszt obsługi wyceniamy po ustaleniu zakresu. Budżet reklamowy to osobna pozycja; dobieramy go do rynku, celu i planu testów, bez obietnicy wyniku za z góry ustaloną kwotę.",
    },
    {
      question: "Czy współpracujecie z małymi firmami?",
      answer:
        "Tak! Pracujemy z firmami wszystkich rozmiarów, od startupów po duże korporacje. Mamy dedykowany pakiet START dla małych przedsiębiorstw.",
    },
    {
      question: "Gdzie działacie? Czy obejmujecie cały Poznań?",
      answer:
        "Obejmujemy cały Poznań i Wielkopolskę. Pracujemy zarówno online jak i offline. Mamy biuro w Poznaniu i możemy spotkać się osobiście dla skomplikowanych projektów.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Poznań | Fotz Studio"
        description="Agencja marketingowa Poznań ✓ SEO, Google Ads, Social Media, strony WWW. Marketing internetowy i reklama internetowa dla firm z Poznania i Wielkopolski. Kompleksowa oferta Fotz Studio w jednym miejscu."
        canonical="https://www.fotz-studio.pl/agencja-marketingowa/poznan"
        keywords="agencja marketingowa poznań, marketing internetowy poznań, agencja reklamowa poznań, seo poznań, google ads poznań, firma marketingowa poznań, reklama internetowa poznań, marketing dla firm poznań"
      />

      <BreadcrumbSchema items={[
          { name: "FOTZ", url: "https://www.fotz-studio.pl" },
          { name: "Agencje Marketingowe", url: "https://www.fotz-studio.pl/agencja-marketingowa" },
          { name: "Poznań", url: "https://www.fotz-studio.pl/agencja-marketingowa/poznan" },
        ]}/>

      <ServiceSchema
        name="Usługi Marketingowe Poznań"
        description="Pełna gama usług marketingowych dla firm z Poznania"
        areaServed="Poznań"
      />

      <FAQSchema items={faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Agencja Marketingowa Poznań — marketing internetowy dla firm
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Łączymy SEO, Google Ads, social media i strony internetowe. Dobieramy zakres działań do celu Twojej firmy: widoczności, zapytań lub sprzedaży. Poznaj usługi i porozmawiajmy o planie dla Twojego biznesu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                    Bezpłatna Wycena
                  </Button>
                </Link>
                <Button asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 w-full sm:w-auto">
                  <a href="tel:+48790814814">
                    <Phone className="w-5 h-5 mr-2" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur">
              <h2 className="text-2xl font-semibold mb-6">Od czego zaczynamy?</h2>
              <ol className="space-y-5 text-blue-50 list-decimal pl-5">
                <li>Ustalamy cel i sprawdzamy obecne działania.</li>
                <li>Dobieramy kanały, materiały i sposób pomiaru.</li>
                <li>Przygotowujemy zakres prac oraz wycenę.</li>
              </ol>
              <Link to="/realizacje" className="inline-flex items-center gap-2 underline underline-offset-4 mt-6">Zobacz nasze realizacje <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Poznań Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Agencja Marketingowa dla Firm z Całego Poznania i Wielkopolski
              </h2>
              <p className="text-gray-700 mb-4">
                Poznań to jedno z największych i najbogatszych miast w Polsce. Siedziba Międzynarodowych Targów Poznańskich (MTP) przyciąga przedsiębiorców z całego świata. Firma marketingowa Fotz to Twój lokalny partner w marketingu internetowym Poznań.
              </p>
              <p className="text-gray-700 mb-6">
                Nasza agencja reklamowa Poznań zna specyficzne wyzwania rynku poznańskiego i potrafi skutecznie pozycjonować firmy w konkurencyjnym środowisku. Oferujemy pełne strategie marketingowe, kampanie reklamowe online oraz pozycjonowanie SEO Poznań.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Doświadczenie z branżą handlu i logistyki</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Wsparcie dla firm sektora IT i tech</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Specjalista od usług dla biznesu B2B</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Kampanie dla branży produkcji i przemysłu</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Obszary Obsługiwane</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Stare Miasto", "Jeżyce", "Grunwald", "Nowe Miasto", "Wilda", "Rataje"].map(
                  (area) => (
                    <div key={area} className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze Usługi Marketingowe w Poznaniu</h2>
            <p className="text-xl text-gray-600">
              Kompleksowe rozwiązania marketingowe i reklama internetowa dla firm z Poznania i Wielkopolski
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.href} className="inline-flex items-center gap-2 mt-5 underline underline-offset-4" aria-label={`Sprawdź usługę: ${service.title}`}>Sprawdź usługę <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pakiety Cenowe</h2>
            <p className="text-xl text-gray-600">
              Wybierz pakiet dostosowany do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.highlighted ? "border-2 border-blue-600 shadow-xl" : ""
                }`}
              >
                {pkg.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                    Najbardziej Popularny
                  </Badge>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <div className="mb-8">
                    <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild
                    className={`w-full ${
                      pkg.highlighted
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  ><a href="/kontakt">
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Dlaczego Fotz — Twoja Agencja Reklamowa w Poznaniu?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Doświadczony zespół",
                description:
                  "Specjaliści z wieloletnim doświadczeniem w marketingu digital dla firm z Poznania.",
              },
              {
                icon: TrendingUp,
                title: "Pomiar i analiza",
                description:
                  "Ustalamy wskaźniki i źródła danych, aby oceniać postępy oraz podejmować kolejne decyzje.",
              },
              {
                icon: Star,
                title: "Realizacje do sprawdzenia",
                description:
                  "Portfolio pozwala poznać nasze projekty i porozmawiać o zakresie potrzebnym Twojej firmie.",
              },
              {
                icon: Building2,
                title: "Dedykowany support",
                description:
                  "Masz dostęp do swojego account managera który zna Twoją branżę i cele.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  <Icon className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Często Zadawane Pytania
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Zacznij marketing internetowy Poznań — bezpłatna wycena!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z naszą agencją marketingową w Poznaniu już dzisiaj i otrzymaj bezpłatną konsultację oraz wycenę dla Twojej firmy. Reklama internetowa, SEO Poznań i Google Ads — wszystko w jednym miejscu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                Zaplanuj Konsultację
              </Button>
            </Link>
            <Button asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700 w-full sm:w-auto">
              <a href="tel:+48790814814">
                <Phone className="w-5 h-5 mr-2" />
                +48 790 814 814
              </a>
            </Button>
          </div>
        </div>
      </section>

      <LocalSEOBoost
        city="Poznań"
        cityLocative="Poznaniu"
        voivodeshipLocative="wielkopolskim"
        variant="agency"
      />
    </Layout>
  );
}
