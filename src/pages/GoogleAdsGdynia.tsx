import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  Users,
  ShoppingCart,
  Search,
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  DollarSign,
  Clock,
  Shield,
  Smartphone,
  Globe,
} from "lucide-react";

const faqItems = [
  {
    question: "Ile kosztuje kampania Google Ads w Gdyni?",
    answer: "Kampanie Google Ads w Gdyni zaczynają się od 400 zł miesięcznie za zarządzanie. Budżet na reklamy jest oddzielny i dostosowany do Twoich potrzeb. Oferujemy pakiety od minimum 400 zł/mies. aż do kampanii premium z dedykowanym kierownikiem konta.",
  },
  {
    question: "Jak Google Ads pomaga firmom z Gdyni i Trójmiasta?",
    answer: "Google Ads to system reklamy internetowej, który wyświetla Twoje ogłoszenia osobom aktywnie szukającym Twoich produktów lub usług. W Gdyni, mieście portowym z silnym sektorem startup'ów, Google Ads pomaga firmom z branży logistyki, turystyki, handlu i usług dotrzeć do lokalnych klientów i biznesu z całej Polski.",
  },
  {
    question: "Czy mogę zarządzać Google Ads sam bez agencji?",
    answer: "Technicznie tak, ale wymaga to wiedzy i stałego monitorowania. Nasze agencja oferuje profesjonalne zarządzanie: analizę konkurencji, optymalizację słów kluczowych, testowanie ogłoszeń i ciągłe ulepszanie ROI. Pozwala to zaoszczędzić czas i zwrócić większy zwrot z inwestycji.",
  },
  {
    question: "Jakie są najpopularniejsze formaty reklam Google Ads?",
    answer: "Popularne formaty to: Search Ads (tekst w wynikach wyszukiwania), Display (obrazkowe na stronach), Shopping (produkty ze zdjęciami i cenami), Video (na YouTube), App Campaigns (promowanie aplikacji). Dla firm z Gdyni najczęściej stosujemy Search i Display, czasem Shopping dla sklepów.",
  },
  {
    question: "Jak długo trwa zanim zobaczę wyniki z Google Ads?",
    answer: "Pierwszych wyników zwykle widać w ciągu tygodnia. Jednak optymalizacja kampanii to proces ciągły. Typowo 2-3 miesiące to czas potrzebny na zebranie danych i dokonanie znaczących ulepszeń. Nasze kampanie pokazują stale rosnący ROI w okresie 3-6 miesięcy.",
  },
  {
    question: "Czy mogę reklamy dostosować do mojego miasta (Gdynia)?",
    answer: "Oczywiście! Google Ads pozwala na targetowanie geograficzne. Możemy ukierunkować kampanię na Gdynię, Trójmiasto lub cały kraj w zależności od Twoich celów biznesowych. To idealne dla firm usługowych działających lokalnie i chcących przyciągnąć klientów z okolicy.",
  },
  {
    question: "Co to jest SEA i jak się ma do Google Ads?",
    answer: "SEA (Search Engine Advertising) to reklama w wynikach wyszukiwania. Google Ads jest największą platformą SEA. Za każde kliknięcie na Twoją reklamę płacisz opłatę (model CPC). To szybszy sposób na pojawienie się w wynikach niż optymalizacja SEO.",
  },
  {
    question: "Jakie wskaźniki powinno się monitorować w kampaniach?",
    answer: "Kluczowe metryki to: CTR (procent kliknięć), CPC (koszt za klik), CPA (koszt za konwersję), ROAS (zwrot z wydanych pieniędzy), konwersje i wartość całkowita przychodu. Raportujemy te metryki co miesiąc i omawiamy strategię optymalizacji.",
  },
];

const services = [
  {
    icon: Search,
    title: "Search Ads",
    description: "Tekstowe reklamy w wynikach Google - najwyższy intent klientów szukających rozwiązań",
  },
  {
    icon: Globe,
    title: "Display Ads",
    description: "Reklamy obrazkowe na sieci witryn - budowanie świadomości marki",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Ads",
    description: "Reklamy produktów - idealne dla e-commerce z zdjęciami i cenami",
  },
  {
    icon: Smartphone,
    title: "Mobile & App",
    description: "Kampanie na urządzenia mobilne i promowanie aplikacji",
  },
  {
    icon: BarChart3,
    title: "Analityka & Raportowanie",
    description: "Szczegółowe raporty, analizę konkurencji i optymalizację kampanii",
  },
  {
    icon: Target,
    title: "Targeting & Segmentacja",
    description: "Zaawansowane targetowanie geograficzne, demograficzne i behawioralne",
  },
];

const packages = [
  {
    name: "Start",
    price: "400",
    period: "zł/mies.",
    description: "Dla małych biznesów i startupów",
    features: [
      "Zarządzanie 1 kampanią",
      "Do 5 grup ogłoszeniowych",
      "Raport co miesiąc",
      "Podstawowa optymalizacja",
      "Email support",
    ],
    cta: "Wybierz pakiet",
  },
  {
    name: "Business",
    price: "800",
    period: "zł/mies.",
    description: "Dla firm średnich i rozwijających się",
    features: [
      "Zarządzanie 3-5 kampaniami",
      "Czasowe konsultacje",
      "A/B testing ogłoszeń",
      "Tygodniowe raportowanie",
      "Priorytetowy support",
    ],
    cta: "Wybierz pakiet",
    popular: true,
  },
  {
    name: "Premium",
    price: "1500+",
    period: "zł/mies.",
    description: "Dla dużych firm i e-commerce",
    features: [
      "Zarządzanie 5+ kampaniami",
      "Dedykowany kierownik konta",
      "Zaawansowana optymalizacja",
      "Raport co tydzień",
      "Konsultacje co 2 tygodnie",
      "24h support",
    ],
    cta: "Zapytaj o szczegóły",
  },
];

const industries = [
  { title: "E-commerce", description: "Sprzedaż produktów online z maksymalnym ROI" },
  { title: "Usługi", description: "Pozyskiwanie klientów dla firm usługowych" },
  { title: "Nieruchomości", description: "Promowanie inwestycji i mieszkań" },
  { title: "Turystyka", description: "Rezerwacje hoteli i pakietów wakacyjnych" },
  { title: "Edukacja", description: "Rekrutacja studentów na studia i kursy" },
  { title: "Medycyna", description: "Pozyskiwanie pacjentów dla gabinetów" },
];

export default function GoogleAdsGdynia() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Google Ads Gdynia — kampanie reklamowe dla firm | Fotz.pl"
          description="Google Ads Gdynia ✓ Kampanie dla firm z Gdyni i Trójmiasta. Od 400 zł/mies. Certyfikowani specjaliści. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/google-ads/gdynia"
        keywords="google ads gdynia, kampanie google ads gdynia, agencja google ads gdynia, reklamy google gdynia, google adwords gdynia, sem gdynia, google ads dla firm gdynia, prowadzenie google ads gdynia, google ads cennik gdynia, reklama w google gdynia"
        />

        <ServiceSchema
          name="Google Ads Gdynia"
          description="Profesjonalne zarządzanie kampaniami Google Ads dla firm z Gdyni i Trójmiasta. Search, Display, Shopping i Video Ads. Od 400 zł/mies."
          areaServed="Gdynia"
        />

        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Performance Marketing", url: "https://fotz.pl/performance-marketing" },
            { name: "Google Ads", url: "https://fotz.pl/performance-marketing/google-ads" },
            { name: "Gdynia", url: "https://fotz.pl/performance-marketing/google-ads/gdynia" },
          ]}
        />

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs
          items={[
            { label: "Strona główna", href: "/" },
            { label: "Performance Marketing", href: "/performance-marketing" },
            { label: "Google Ads", href: "/performance-marketing/google-ads" },
            { label: "Gdynia" },
          ]}
        />

        {/* Hero Section */}
        <FadeInView>
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.15),transparent_50%)]" />

            <div className="container-wide relative z-10 py-20 md:py-32">
              <div className="text-center max-w-4xl mx-auto">
                <Badge variant="outline" className="mb-6 text-primary border-primary/30 inline-flex gap-2">
                  <MapPin className="w-4 h-4" />
                  Google Ads Gdynia
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  Kampanie Google Ads <br className="hidden md:block" />
                  <span className="text-primary">dla firm z Gdyni i Trójmiasta</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Google Ads Gdynia — profesjonalne kampanie Google Ads i reklamy w Google dla firm z Gdyniaa i Trójmiasta. Zwiększamy ruch, konwersje i ROI dzięki skutecznym kampaniom SEM. Bezpłatna konsultacja.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/kontakt">
                      Bezpłatna konsultacja
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <a href="tel:+48790814814">
                      <Phone className="w-4 h-4" />
                      +48 790 814 814
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why Gdynia Section */}
        <FadeInView>
          <section className="section-padding bg-secondary/30">
            <div className="container-wide">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Dlaczego Google Ads w Gdyni?
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Gdynia to dinamicznie rozwijające się miasto portowe na Pobrzeżu Południowobałtyjskim.
                    Port Gdynia, jedno z największych miast tego regionu, przyciąga inwestorów z branży logistyki,
                    handlu, turystyki i nowoczesnych technologii.
                  </p>
                  <p>
                    Silny ekosystem startup'ów i rosnący sektor e-commerce sprawiają, że Gdynia to idealne miejsce
                    dla kampanii Google Ads. Firmy z Trójmiasta szybko rosną i potrzebują skutecznych narzędzi do
                    pozyskiwania klientów.
                  </p>
                  <p>
                    Google Ads to najszybszy sposób na pojawienie się przed potencjalnymi klientami szukającymi
                    Twoich produktów lub usług. Bez czekania na SEO, od razu masz widoczność i możliwość konwersji.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services Section */}
        <FadeInView>
          <section className="section-padding">
            <div className="container-wide">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Rodzaje kampanii Google Ads
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Od Search Ads po Video Campaigns - oferujemy pełen zakres narzędzi reklamowych
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process Section */}
        <FadeInView>
          <section className="section-padding bg-secondary/30">
            <div className="container-wide">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
                Jak wygląda nasz proces
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Analiza",
                    description: "Analizujemy Twoją branżę, konkurencję i potencjalne słowa kluczowe dla Gdyni",
                  },
                  {
                    step: "02",
                    title: "Strategia",
                    description: "Opracowujemy strategię kampanii dostosowaną do Twoich celów i budżetu",
                  },
                  {
                    step: "03",
                    title: "Uruchomienie",
                    description: "Tworzymy i uruchamiamy kampanię z maksymalną precyzją targetowania",
                  },
                  {
                    step: "04",
                    title: "Optymalizacja",
                    description: "Monitorujemy wyniki i stale ulepszamy kampanię dla lepszego ROI",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card rounded-xl p-6 border border-border/50">
                      <div className="text-3xl font-bold text-primary/30 mb-2">{item.step}</div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Pricing Section */}
        <FadeInView>
          <section className="section-padding">
            <div className="container-wide">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Cennik kampanii Google Ads
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Pakiety dla firm każdej wielkości. Budżet na reklamy to osobna opłata.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative rounded-xl border transition-all ${
                      pkg.popular
                        ? "border-primary/50 bg-card shadow-lg scale-105"
                        : "border-border/50 bg-card/50"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Badge className="bg-primary text-primary-foreground">
                          Popularne
                        </Badge>
                      </div>
                    )}

                    <div className="p-8">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-sm">
                        {pkg.description}
                      </p>

                      <div className="mb-6">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-foreground">
                            {pkg.price}
                          </span>
                          <span className="text-muted-foreground">
                            {pkg.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        variant={pkg.popular ? "default" : "outline"}
                        className="w-full"
                      >
                        <Link to="/kontakt">
                          {pkg.cta}
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries Section */}
        <FadeInView>
          <section className="section-padding bg-secondary/30">
            <div className="container-wide">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
                Dla jakich branż pracujemy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <h3 className="font-heading font-semibold text-foreground mb-2 flex gap-2 items-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ Section */}
        <FadeInView>
          <section className="section-padding">
            <div className="container-wide">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
                  Najczęściej zadawane pytania
                </h2>

                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-secondary/30"
                    >
                      <AccordionTrigger className="py-4 hover:text-primary transition-colors">
                        <span className="text-left font-heading font-semibold text-foreground">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Contact Section */}
        <ContactSection
          title="Gotów na zwiększenie sprzedaży?"
          description="Skontaktuj się z nami na bezpłatną konsultację. Omówimy Twoją branżę, cele i potencjał kampanii."
        />
      </Layout>
    </>
  );
}
