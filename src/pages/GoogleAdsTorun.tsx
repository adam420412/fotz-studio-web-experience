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
    question: "Ile kosztuje kampania Google Ads w Toruniu?",
    answer: "Kampanie Google Ads w Toruniu zaczynają się od 400 zł miesięcznie za zarządzanie. Budżet na reklamy jest oddzielny i dostosowany do Twoich potrzeb. Oferujemy pakiety od minimum 400 zł/mies. aż do kampanii premium z dedykowanym kierownikiem konta.",
  },
  {
    question: "Dlaczego Google Ads dla firm z Torunia i Kujaw?",
    answer: "Toruń to historyczne miasto z bogatym dziedzictwem średniowiecznym i siedziba Uniwersytetu Mikołaja Kopernika. Region Kujawsko-Pomorski przyciąga studentów, turystów i inwestorów. Google Ads pomaga lokalnym firmom, restauracjom, hotelom i biurom usługowym dotrzeć do tych grup docelowych.",
  },
  {
    question: "Czy mogę skupić się na klientach z Torunia czy Kujaw?",
    answer: "Tak! Google Ads pozwala na dokładne targetowanie geograficzne. Możemy ukierunkować Twoją kampanię wyłącznie na Toruń, Kujawsko-Pomorskie, lub powiększyć zasięg na całą Polskę. Jest to szczególnie przydatne dla firm lokalnych takich jak kawiarnie, salony fryzjerskie czy kancelarie.",
  },
  {
    question: "Jakie są formaty reklam dostępne w Google Ads?",
    answer: "Główne formaty to: Search Ads (tekst w Google), Display (grafiki na stronach), Shopping (produkty z cenami), Video (YouTube), App Campaigns (aplikacje). Dla firm z Torunia najczęściej stosujemy Search Ads i Display Ads ze względu na wysoką skuteczność i ROI.",
  },
  {
    question: "Jak szybko zobaczę wyniki z Google Ads?",
    answer: "Pierwsze wyniki pojawiają się w ciągu 1-2 tygodni. Jednak rzeczywista optymalizacja trwa 2-3 miesiące. W tym okresie zbieramy dane, testujemy różne warianty ogłoszeń i targety, aby znaleźć najlepszą kombinację generującą zwrot z inwestycji.",
  },
  {
    question: "Czy Google Ads będzie efektywne dla mojej branży?",
    answer: "Google Ads sprawdza się dla większości branż: e-commerce, usług, nieruchomości, turystyki, edukacji, medycyny, handlu. Jedyne wyjątki to branże z zakazami (hazard, narkotyki) lub o bardzo niskim popycie. Radzimy się bezpłatnie, czy dla Twojej branży Google Ads będzie opłacalne.",
  },
  {
    question: "Ile czasu zajmuje uruchomienie kampanii?",
    answer: "Uruchomienie kampanii zajmuje 3-7 dni od zatwierdzenia strategii. Najpierw robimy audyt konkurencji, wybieramy słowa kluczowe, piszemy ogłoszenia, ustawiamy landing page i konfigurujemy tracking. Wszystko to robimy szybko, ale starannie dla maksymalnej skuteczności.",
  },
  {
    question: "Jakie są najczęstsze błędy w Google Ads?",
    answer: "Najczęstsze błędy to: złe słowa kluczowe, słabe ogłoszenia, brak tracking'u konwersji, zbyt szeroki targeting, niedostateczna optymalizacja. Nasza agencja unika tych błędów dzięki doświadczeniu i certyfikatom Google. Oszczędzamy Ci czasu i pieniędzy na naiwnych próbach.",
  },
];

const services = [
  {
    icon: Search,
    title: "Search Ads",
    description: "Tekstowe reklamy w wynikach wyszukiwania Google z najwyższym intentem",
  },
  {
    icon: Globe,
    title: "Display Ads",
    description: "Reklamy obrazkowe na sieć ponad 2 mln stron - budowanie marki",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Ads",
    description: "Kampanie e-commerce z produktami, zdjęciami i cenami",
  },
  {
    icon: Smartphone,
    title: "Mobile Campaigns",
    description: "Specjalizowane kampanie dla urządzeń mobilnych",
  },
  {
    icon: BarChart3,
    title: "Optymalizacja & Raportowanie",
    description: "Ciągła analiza, testy A/B i miesięczne raporty",
  },
  {
    icon: Target,
    title: "Zaawansowany Targeting",
    description: "Geograficzny, demograficzny, behawioralny i custom targeting",
  },
];

const packages = [
  {
    name: "Starter",
    price: "400",
    period: "zł/mies.",
    description: "Dla małych firm i lokalnych biznesów",
    features: [
      "Zarządzanie 1-2 kampaniami",
      "Do 5 grup ogłoszeniowych",
      "Raport miesięczny",
      "Podstawowa optymalizacja",
      "Email support",
    ],
    cta: "Wybierz pakiet",
  },
  {
    name: "Professional",
    price: "850",
    period: "zł/mies.",
    description: "Dla firm chcących rosnąć",
    features: [
      "Zarządzanie 3-5 kampaniami",
      "Tygodniowe konsultacje",
      "A/B testing ogłoszeń",
      "Tygodniowy raport",
      "Priorytetowy support",
      "Analiza konkurencji",
    ],
    cta: "Wybierz pakiet",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "1500+",
    period: "zł/mies.",
    description: "Dla dużych firm i e-commerce",
    features: [
      "Zarządzanie nieograniczoną liczbą kampanii",
      "Dedykowany kierownik konta",
      "Zaawansowana optymalizacja AI",
      "Raport co tydzień",
      "Konsultacje co tygodzień",
      "24/7 support",
      "Custom integracje",
    ],
    cta: "Zapytaj o szczegóły",
  },
];

const industries = [
  { title: "Edukacja", description: "Rekrutacja studentów na studia i kursy na UMK" },
  { title: "Turystyka", description: "Rezerwacje hoteli, przewodniki i atrakcje" },
  { title: "E-commerce", description: "Sprzedaż produktów online z wysokim ROI" },
  { title: "Restauracje & Kawiarnie", description: "Promocja pierników i lokalnej gastronomii" },
  { title: "Usługi", description: "Kancelarie, fryzjernie, gabinety lekarskie" },
  { title: "Nieruchomości", description: "Promocja mieszkań, domów i działek" },
];

export default function GoogleAdsTorun() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Google Ads Toruń — kampanie reklamowe dla firm | Fotz.pl"
          description="Google Ads Toruń ✓ Kampanie dla firm z Torunia i Kujaw. Od 400 zł/mies. Certyfikowani specjaliści. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/google-ads/torun"
        keywords="google ads torun, kampanie google ads torun, agencja google ads torun, reklamy google torun, google adwords torun, sem torun, google ads dla firm torun, prowadzenie google ads torun, google ads cennik torun, reklama w google torun"
        />

        <ServiceSchema
          name="Google Ads Toruń"
          description="Profesjonalne zarządzanie kampaniami Google Ads dla firm z Torunia i Kujaw. Search, Display, Shopping Ads. Od 400 zł/mies."
          areaServed="Torun"
        />

        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Performance Marketing", url: "https://fotz.pl/performance-marketing" },
            { name: "Google Ads", url: "https://fotz.pl/performance-marketing/google-ads" },
            { name: "Toruń", url: "https://fotz.pl/performance-marketing/google-ads/torun" },
          ]}
        />

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs
          items={[
            { label: "Strona główna", href: "/" },
            { label: "Performance Marketing", href: "/performance-marketing" },
            { label: "Google Ads", href: "/performance-marketing/google-ads" },
            { label: "Toruń" },
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
                  Google Ads Toruń
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  Kampanie Google Ads <br className="hidden md:block" />
                  <span className="text-primary">dla firm z Torunia i Kujaw</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Google Ads Torun — profesjonalne kampanie Google Ads i reklamy w Google dla firm z Toruna i Kujaw. Zwiększamy ruch, konwersje i ROI dzięki skutecznym kampaniom SEM. Bezpłatna konsultacja.</p>
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

        {/* Why Torun Section */}
        <FadeInView>
          <section className="section-padding bg-secondary/30">
            <div className="container-wide">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Dlaczego Google Ads w Toruniu?
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Toruń to historyczne miasto z bogatym dziedzictwem średniowiecznym i siedziba jednego z najstarszych
                    uniwersytetów w Polsce - Uniwersytetu Mikołaja Kopernika (UMK).
                    Region Kujawsko-Pomorski jest dynamicznie rozwijającym się centrum edukacji, turystyki i technologii.
                  </p>
                  <p>
                    Miasto słynne z pierników toruńskich przyciąga turystów z całej Polski i zagranicy.
                    Jednocześnie UMK przyciąga tysiące studentów co roku, a rosnący sektor startup'ów tworzą
                    pełną skalę możliwości biznesowych dla firm z Torunia i całego regionu Kujaw.
                  </p>
                  <p>
                    Google Ads to najefektywniejszy sposób na dotarcie do potencjalnych klientów w Toruniu.
                    Bez względu czy prowadzisz kawiarnię, hotel, sklepów online czy usługi profesjonalne,
                    Google Ads genruje natychmiast widoczność i konkretne wyniki sprzedaży.
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
                  Typy kampanii Google Ads
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompletny zakres narzędzi reklamowych - od Search po Video na YouTube
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
                Jak pracujemy z klientami
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Audyt",
                    description: "Analizujemy Twoją branżę, konkurentów i potencjał dla Google Ads",
                  },
                  {
                    step: "02",
                    title: "Strategia",
                    description: "Opracowujemy plan kampanii dostosowany do celów i budżetu",
                  },
                  {
                    step: "03",
                    title: "Implementacja",
                    description: "Budujemy i uruchamiamy kampanię z maksymalną precyzją",
                  },
                  {
                    step: "04",
                    title: "Optymalizacja",
                    description: "Monitorujemy wyniki i ciągle ulepszamy performance kampanii",
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
                  Pakiety Google Ads
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Elastyczne pakiety dla firm każdej wielkości. Budżet na reklamy to oddzielna opłata.
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
                          Rekomendowany
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
                Branże w Toruniu
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
                  Pytania i odpowiedzi
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
          title="Chcesz zwiększyć sprzedaż w Toruniu?"
          description="Skontaktuj się z nami na bezpłatną konsultację. Analizujemy Twoją branżę i potencjał kampanii Google Ads bez zobowiązań."
        />
      </Layout>
    </>
  );
}
