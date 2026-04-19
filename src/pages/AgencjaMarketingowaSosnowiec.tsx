import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Zap,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Rocket,
  CheckCircle2,
  Globe,
  Megaphone,
  PenTool,
  Video,
  MessageSquare,
  Star,
  Award,
  Clock,
  ArrowRight,
  Building2,
  MapPin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";
import { CityServicesGrid } from "@/components/sections/CityServicesGrid";
import { CityPricingCards } from "@/components/sections/CityPricingCards";

const AgencjaMarketingowaSosnowiec = () => {
  const services = [
    { icon: Megaphone, title: "Strategie marketingowe", desc: "Kompleksowe plany marketingowe dostosowane do Twojej branży i celów." },
    { icon: TrendingUp, title: "Marketing cyfrowy", desc: "Kampanie Google Ads, Facebook, Instagram i LinkedIn dla firm z Sosnowca." },
    { icon: Globe, title: "Social media management", desc: "Zarządzanie mediami społecznościowymi i budowanie społeczności online." },
    { icon: PenTool, title: "Content marketing", desc: "Tworzenie wartościowych treści, blogi i materiały marketingowe." },
    { icon: Video, title: "Produkcja filmowa", desc: "Filmy reklamowe, vlogi i materiały video do kampanii marketingowych." },
    { icon: BarChart3, title: "Analityka i raportowanie", desc: "Śledzenie wyników, raporty i optymalizacja kampanii marketingowych." },
  ];

  const whyFotz = [
    {
      icon: Target,
      title: "Strategie na miarę Sosnowca",
      desc: "Znamy lokalne rynki, konkurencję i potrzeby klientów z rejonu Górnośląskiego Obszaru Metropolitalnego.",
    },
    {
      icon: TrendingUp,
      title: "Sprawdzone wyniki",
      desc: "Nasze kampanie marketingowe przynoszą średnio 300% zwrot z inwestycji dla naszych klientów.",
    },
    {
      icon: Users,
      title: "Dedykowany zespół",
      desc: "Specjalistów z zakresu digital marketingu, copy writingu i projektowania graficznego pracujących dla Ciebie.",
    },
    {
      icon: Zap,
      title: "Szybkie wdrożenie",
      desc: "Rzeczywiste wyniki w ciągu 2-4 tygodni. Kampanie startują szybko i przynoszą widoczne efekty.",
    },
  ];

  const pricing = [
    {
      title: "START",
      desc: "Dla małych firm i startupów",
      price: "1 500 zł",
      period: "/miesiąc",
      features: [
        "Strategia marketingowa",
        "Kampania Google Ads",
        "Zarządzanie 1 kanałem social media",
        "Raport miesięczny",
      ],
    },
    {
      title: "ROZWÓJ",
      desc: "Dla firm chcących skalować",
      price: "3 500 zł",
      period: "/miesiąc",
      popular: true,
      features: [
        "Pełna strategia marketingowa",
        "Google Ads + Facebook/Instagram",
        "Zarządzanie 2-3 kanałami social media",
        "Content marketing - 4 artykuły/miesiąc",
        "Raporty bi-tygodniowe",
        "Konsultacje strategiczne",
      ],
    },
    {
      title: "PREMIUM",
      desc: "Dla ambitnych firm",
      price: "7 000+",
      period: "/miesiąc",
      features: [
        "Kompleksowa obsługa marketingowa",
        "Wszystkie kanały cyfrowe",
        "Produkcja filmowa - 2 filmy/miesiąc",
        "Content marketing unlimited",
        "Zarządzanie reputacją online",
        "Wsparcie strategiczne ciągłe",
        "Dedykowany account manager",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje agencja marketingowa w Sosnowcu?",
      answer:
        "Koszty obsługi marketingowej w Sosnowcu zaczynają się od 1500 zł/miesiąc. Pakiet START obejmuje strategię i campaine Google Ads. Pakiet ROZWÓJ 3500 zł to pełna obsługa digital marketingu. PREMIUM 7000+ zł to kompleksowa obsługa wraz z produkcją filmową. Oferujemy bezpłatną konsultację i wycenę dostosowaną do Twoich potrzeb.",
    },
    {
      question: "Jak szybko zobaczę wyniki kampanii marketingowej?",
      answer:
        "Pierwsze wyniki marketingowe pojawiają się zwykle w ciągu 2-4 tygodni. W kampaniach Google Ads i social media widzimy kliknięcia już w pierwszym tygodniu. Konwersje i rzeczywiste sprzedaże rosną stopniowo w kolejnych miesiącach. Wyniki zależą od branży, budżetu i konkurencji w Twojej niszy.",
    },
    {
      question: "Czy agencja marketingowa pomoże mi w social media?",
      answer:
        "Tak, zarządzanie mediami społecznościowymi to jeden z naszych głównych serwisów. Zajmujemy się tworzeniem kontentu, publikowaniem postów, moderacją, odpowiadaniem na komentarze i budowaniem społeczności. Pracujemy z Facebook, Instagram, LinkedIn, TikTok i YouTube.",
    },
    {
      question: "Czy mogę zatrudnić agencję na krótki czas?",
      answer:
        "Tak, oferujemy zarówno umowy długoterminowe jak i projektowe. Możemy obsługiwać Twoją markę na 3-6 miesięcy lub realizować konkretne kampanie. Minimalna umowa to zwykle 1 miesiąc. Skontaktuj się z nami, aby omówić opcje dostosowane do Twoich potrzeb.",
    },
    {
      question: "Jakie branże obsługujecie w Sosnowcu?",
      answer:
        "Doświadczenie mamy w obsłudze handlu, e-commerce, gastronomii, usług, produkcji, nieruchomości i transportu. Znamy specyfikę sosnowieckiego rynku i górniczej historii miasta. Pracujemy z firmami o każdej wielkości - od mikroprzedsiębiorstw po dużych graczy.",
    },
    {
      question: "Czy muszę mieć już budżet na reklamy?",
      answer:
        "Nasze usługi marketingowe to opłata za obsługę agencji - niezależnie od budżetu reklamowego. Jednak rekomendujemy budżet na reklamy cyfrowe od 1000-2000 zł/miesiąc, aby kampanie były efektywne. Agencja zarządza tym budżetem i optymalizuje wydatki dla maksymalnego zwrotu.",
    },
  ];

  const localContext = [
    "Sosnowiec to miasto 170 tys. mieszkańców na Górnym Śląsku z bogatą historią górniczą",
    "Revitalizacja miasta przyniósł nowe przestrzenie handlowe i inwestycje biznesowe",
    "E-commerce i usługi cyfrowe szybko rosną w Górnośląskim Obszarze Metropolitalnym",
    "Konkurencja lokalnych firm zwiększa się - online marketing jest niezbędny",
  ];

  const benefits = [
    "Strategia dostosowana do rynku sosnowieckiego",
    "Kampanie Google Ads i social media zarządzane przez specjalistów",
    "Wymierne wyniki i raporty wydajności",
    "Wsparcie polskojęzyczne - rozumiemy lokalny kontekst",
    "Prosta komunikacja i stały dostęp do zespołu",
    "Ceny konkurencyjne bez ukrytych kosztów",
  ];

  const stats = [
    { value: "500+", label: "Zrealizowanych kampanii", icon: Rocket },
    { value: "95%", label: "Zadowolonych klientów", icon: Star },
    { value: "8 lat", label: "Doświadczenia", icon: Award },
    { value: "24/7", label: "Wsparcie klientów", icon: Clock },
  ];

  return (
    <>
      <SEOHead
        title="Agencja marketingowa Sosnowiec - fotz studio | Marketing dla firm"
        description="Agencja marketingowa Sosnowiec - kompleksowe usługi digital marketingu, kampanie Google Ads, social media, content marketing. Pomagamy firmom z Sosnowca…"
        canonical="https://fotz.pl/agencja-marketingowa/sosnowiec"
        keywords="agencja marketingowa sosnowiec, marketing internetowy sosnowiec, agencja reklamowa sosnowiec, seo sosnowiec"
      />

      <ServiceSchema
        name="Agencja Marketingowa Sosnowiec"
        description="Kompleksowe usługi marketingowe i digital marketingu dla firm z Sosnowca i Górnego Śląska."
        provider="FOTZ Studio"
        areaServed="Sosnowiec"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
          { name: "Sosnowiec", url: "https://fotz.pl/agencja-marketingowa/sosnowiec" },
        ]}
      />
      <FAQSchema items={faqItems.map((item) => ({ question: item.question, answer: item.answer }))} />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gray-900 pt-20 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-yellow-400">Agencja marketingowa w Sosnowcu</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Agencja marketingowa <span className="text-yellow-400">Sosnowiec</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Pomagamy firmom z Sosnowca i Górnośląskiego Obszaru Metropolitalnego zdobywać klientów poprzez digital marketing. Kampanie Google Ads, social media, content marketing i produkcja filmowa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold text-lg h-12"
                  asChild
                >
                  <Link to="#contact">Rozpocznij konsultację</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-400/30 text-white hover:bg-yellow-400/10 font-bold text-lg h-12"
                  asChild
                >
                  <Link to="#pricing">Cennik usług</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 border-t border-gray-700">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why fotz Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Dlaczego <span className="text-yellow-400">fotz</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cztery główne powody, dla których firmy z Sosnowca i okolic wybierają naszą agencję
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyFotz.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400/10 border border-yellow-400/30">
                        <item.icon className="h-6 w-6 text-yellow-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Usługi <span className="text-yellow-400">marketingowe</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Pełny zakres usług digital marketingu dostosowanych do potrzeb Twojej firmy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-400/10 border border-yellow-400/30">
                      <service.icon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Context Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Marketing dla <span className="text-yellow-400">Sosnowca</span>
                </h2>

                <div className="space-y-4 mb-8">
                  {localContext.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-lg">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 mb-8">
                  Sosnowiec to miasto z bogatą historią górniczą, które przechodzi dynamiczną transformację. Rozwój e-commerce, usług cyfrowych i tradycyjnych biznesów tworzy ogromne szanse dla firm, które potrafią skutecznie promować się w internecie.
                </p>

                <p className="text-gray-400">
                  Górny Śląsk to region z ponad 2 milionami mieszkańców. Zainwestowanie w marketing online pozwoli Ci dotrzeć do klientów z całego regionu i poza nim, niezależnie od lokalizacji Twojej firmy.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                      <h3 className="font-bold text-white">Lokalizacja</h3>
                    </div>
                    <p className="text-gray-400">Sosnowiec, Górny Śląsk, Polska</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-yellow-400" />
                      <h3 className="font-bold text-white">Populacja</h3>
                    </div>
                    <p className="text-gray-400">Ponad 170 tys. mieszkańców</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-yellow-400" />
                      <h3 className="font-bold text-white">Dynamika rynku</h3>
                    </div>
                    <p className="text-gray-400">Szybko rosnący sektor usług cyfrowych i e-commerce</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-yellow-400" />
                      <h3 className="font-bold text-white">Biznes</h3>
                    </div>
                    <p className="text-gray-400">Handel, gastronomia, produkcja, usługi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Cennik <span className="text-yellow-400">usług</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Przejrzyste ceny, bez ukrytych kosztów. Wybierz pakiet dostosowany do Twoich potrzeb
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-8 border transition-all duration-300 ${
                    plan.popular
                      ? "bg-yellow-400/5 border-yellow-400 shadow-lg shadow-yellow-400/20 scale-105"
                      : "bg-gray-800 border-gray-700"
                  }`}
                >
                  {plan.popular && (
                    <div className="mb-4 inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      Najpopularniejszy
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 mb-6">{plan.desc}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>

                  <Button
                    className={`w-full mb-8 font-bold text-lg h-12 ${
                      plan.popular
                        ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                        : "border border-yellow-400/30 text-white hover:bg-yellow-400/10"
                    }`}
                    asChild
                  >
                    <Link to="#contact">Zacznij teraz</Link>
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 mt-12">
              Szukasz pakietu customowego? Skontaktuj się z nami. Oferujemy również projekty czasowe i konsultacje strategiczne.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Często <span className="text-yellow-400">zadawane pytania</span>
              </h2>
              <p className="text-xl text-gray-300">
                Odpowiadamy na pytania firm z Sosnowca o usługach marketingowych
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-900 border border-gray-700 rounded-lg px-6 data-[state=open]:border-yellow-400/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-white hover:text-yellow-400 transition-colors py-4">
                    <span className="text-left font-bold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-4 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Gotowy na zmianę?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Daj nam szansę aby pokazać jak digital marketing może transformować Twój biznes w Sosnowcu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-bold text-lg h-12"
                asChild
              >
                <Link to="#contact">Zarezerwuj konsultację</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400/30 text-white hover:bg-yellow-400/10 font-bold text-lg h-12"
                asChild
              >
                <Link to="/">Wróć do strony głównej</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
};

export default AgencjaMarketingowaSosnowiec;
