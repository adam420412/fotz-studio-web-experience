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
  Target,
  BarChart3,
  ShoppingCart,
  Search,
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Smartphone,
  Globe,
} from "lucide-react";

const faqItems = [
  {
    question: "Ile kosztuje kampania Google Ads w Gdyni?",
    answer: "Nie podajemy stałych cen ani pakietów. Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie kampanii, rodzajach reklam, częstotliwości raportów i potrzebie przygotowania kreacji lub landing page. Budżet reklamowy płacisz bezpośrednio Google, zawsze osobno od naszego wynagrodzenia.",
  },
  {
    question: "Jak Google Ads pomaga firmom z Gdyni i Trójmiasta?",
    answer: "Google Ads to system reklamy internetowej, który wyświetla Twoje ogłoszenia osobom aktywnie szukającym Twoich produktów lub usług. W Gdyni, mieście portowym z silnym sektorem startup'ów, Google Ads pomaga firmom z branży logistyki, turystyki, handlu i usług dotrzeć do lokalnych klientów i biznesu z całej Polski.",
  },
  {
    question: "Czy mogę zarządzać Google Ads sam bez agencji?",
    answer: "Technicznie tak, ale wymaga to wiedzy i stałego monitorowania. Nasza agencja zajmuje się analizą konkurencji, optymalizacją słów kluczowych, testowaniem ogłoszeń i bieżącym ulepszaniem kampanii. Ty oszczędzasz czas, a decyzje opieramy na danych z Twojego konta.",
  },
  {
    question: "Jakie są najpopularniejsze formaty reklam Google Ads?",
    answer: "Popularne formaty to: Search Ads (tekst w wynikach wyszukiwania), Display (obrazkowe na stronach), Shopping (produkty ze zdjęciami i cenami), Video (na YouTube), App Campaigns (promowanie aplikacji). Dla firm z Gdyni najczęściej stosujemy Search i Display, czasem Shopping dla sklepów.",
  },
  {
    question: "Jak długo trwa zanim zobaczę wyniki z Google Ads?",
    answer: "Pierwsze kliknięcia i dane pojawiają się zwykle krótko po uruchomieniu kampanii. Optymalizacja to jednak proces ciągły, a czas potrzebny na zebranie danych i znaczące ulepszenia zależy od budżetu, branży i konkurencji. Nie obiecujemy sztywnych terminów efektów.",
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

const industries = [
  { title: "E-commerce", description: "Sprzedaż produktów online i kampanie produktowe" },
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
          description="Google Ads Gdynia ✓ Kampanie dla firm z Gdyni i Trójmiasta prowadzone zdalnie z Poznania. Wycena po rozmowie o zakresie. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/performance-marketing/google-ads/gdynia"
        keywords="google ads gdynia, kampanie google ads gdynia, agencja google ads gdynia, reklamy google gdynia, google adwords gdynia, sem gdynia, google ads dla firm gdynia, prowadzenie google ads gdynia, google ads cennik gdynia, reklama w google gdynia"
        />

        <ServiceSchema
          name="Google Ads Gdynia"
          description="Profesjonalne zarządzanie kampaniami Google Ads dla firm z Gdyni i Trójmiasta. Search, Display, Shopping i Video Ads. Wycena po rozmowie o zakresie."
          areaServed="Gdynia"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
            { name: "Google Ads", url: "https://www.fotz-studio.pl/performance-marketing/google-ads" },
            { name: "Gdynia", url: "https://www.fotz-studio.pl/performance-marketing/google-ads/gdynia" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", url: "/" },
            { name: "Performance Marketing", url: "/performance-marketing" },
            { name: "Google Ads", url: "/performance-marketing/google-ads" },
            { name: "Gdynia", url: "https://www.fotz-studio.pl" },
          ]}/>

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
                  Google Ads Gdynia — kampanie Google Ads i reklamy w Google dla firm z Gdyni i Trójmiasta. Pracujemy z Poznania, firmy z Gdyni obsługujemy zdalnie. Bezpłatna konsultacja.</p>
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
                    Google Ads pozwala szybko pojawić się przed potencjalnymi klientami szukającymi
                    Twoich produktów lub usług, bez czekania na efekty SEO.
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
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
                  Od czego zależy wycena
                </h2>
                <p className="text-muted-foreground mb-8 text-center">
                  Wycenę przygotowujemy po rozmowie o zakresie. Budżet reklamowy płacisz Google, zawsze osobno od naszego wynagrodzenia.
                </p>
                <ul className="space-y-3">
                  {[
                    "Liczba i rodzaje kampanii (Search, Display, Shopping, Video)",
                    "Zasięg geograficzny: Gdynia, Trójmiasto lub cała Polska",
                    "Konkurencja na frazy w Twojej branży",
                    "Częstotliwość raportów i konsultacji",
                    "Potrzeba przygotowania kreacji, landing page lub konfiguracji analityki",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <Button asChild>
                    <Link to="/kontakt">Zapytaj o wycenę</Link>
                  </Button>
                </div>
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
