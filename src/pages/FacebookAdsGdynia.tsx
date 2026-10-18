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
  Heart,
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  DollarSign,
  Clock,
  Shield,
  Smartphone,
  Share2,
} from "lucide-react";

const faqItems = [
  {
    question: "Ile kosztuje kampania Facebook Ads w Gdyni?",
    answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie kampanii, przygotowaniu kreacji, konfiguracji śledzenia i częstotliwości raportów. Budżet reklamowy płacisz bezpośrednio platformie Meta, zawsze osobno od naszego wynagrodzenia.",
  },
  {
    question: "Jaka jest różnica między Facebook Ads a Google Ads?",
    answer: "Google Ads to reklamy na bazie searchu - osób aktywnie szukających. Facebook Ads to reklamy na bazie zainteresowań - ukierunkowane na konkretne grupy docelowe. Facebook jest lepszy do budowania świadomości marki i angażowania odbiorców, Google do sprzedaży bezpośredniej.",
  },
  {
    question: "Czy Facebook Ads sprawdzą się dla mojego biznesu?",
    answer: "Facebook Ads sprawdzają się dla większości branż: e-commerce, usług, nieruchomości, turystyki, edukacji, beauty i fitness. Szczególnie efektywne są dla biznesów działających B2C, gdzie targeting na zainteresowania jest kluczowy. Radzimy się bezpłatnie dla Twojej branży.",
  },
  {
    question: "Jakie typy reklam dostępne są na Facebooku?",
    answer: "Dostępne są: reklamy obrazkowe, karuzelowe, Video Ads, Instant Experiences, Collection Ads, Catalog Ads (dla e-commerce), Dynamic Ads (na bazie behawioralnej). Dla firm z Gdyni najczęściej rekomendujemy reklamy Video i Carousel ze względu na wysoką skuteczność.",
  },
  {
    question: "Jak szybko mogę spodziewać się wyników?",
    answer: "Pierwsze dane pojawiają się krótko po starcie, ale tempo efektów zależy od budżetu, branży i oferty, dlatego nie podajemy sztywnych terminów. Na początku testujemy różne grupy docelowe, kreacje i komunikaty, a potem rozwijamy to, co działa.",
  },
  {
    question: "Czy mogę targetować mieszkańców Gdyni i Trójmiasta?",
    answer: "Tak! Meta pozwala na dokładne targetowanie geograficzne. Możemy wybrać Gdynię, Sopot, Gdańsk, całe Trójmiasto, lub powiększyć na województwo pomorskie. Możemy również targetować ludzi zainteresowanych Gdynią, nawet jeśli mieszkają gdzie indziej.",
  },
  {
    question: "Jaki jest najlepszy budżet na start kampanii?",
    answer: "Budżet ustalamy indywidualnie, zależnie od celu, branży i zasięgu geograficznego. Przy bardzo małych budżetach algorytm Meta ma mało danych do optymalizacji, a większy budżet pozwala testować więcej wariantów. Budżet reklamowy płacisz bezpośrednio platformie, osobno od naszego wynagrodzenia.",
  },
  {
    question: "Czy mogę łączyć Facebook Ads z innymi kanałami?",
    answer: "Absolutnie! Łączymy Facebook Ads z Google Ads, email marketingiem, SEO i content marketingiem. Kanały wzajemnie się uzupełniają, dlatego często planujemy je razem.",
  },
];

const services = [
  {
    icon: Heart,
    title: "Brand Awareness",
    description: "Budowanie świadomości marki wśród docelowych odbiorców w Gdyni i Trójmieście",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Pozyskiwanie kontaktów i potencjalnych klientów dla Twojego biznesu",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Ads",
    description: "Kampanie sprzedażowe dla sklepów online z Catalog Ads i Dynamic Ads",
  },
  {
    icon: Zap,
    title: "Retargeting",
    description: "Ponowne dotarcie do osób, które odwiedziły Twoją stronę lub aplikację",
  },
  {
    icon: BarChart3,
    title: "Conversion Optimization",
    description: "Optymalizacja dla największej liczby konwersji i najlepszego ROI",
  },
  {
    icon: Target,
    title: "Advanced Targeting",
    description: "Zaawansowane segmentowanie i tracking konwersji dla precyzyjnych rezultatów",
  },
];

const pricingFactors = [
  "Liczba kampanii i grup odbiorców, które prowadzimy",
  "Przygotowanie kreacji: grafiki, wideo, copy",
  "Konfiguracja Pixela, zdarzeń i analityki",
  "Częstotliwość optymalizacji, raportów i konsultacji",
  "Cele kampanii: zasięg, leady czy sprzedaż online",
];

const industries = [
  { title: "E-commerce", description: "Sprzedaż produktów online z Catalog Ads" },
  { title: "Restorany & Kawiarnie", description: "Promocja menu i zarezerwowania stolika" },
  { title: "Nieruchomości", description: "Promocja mieszkań i nieruchomości" },
  { title: "Fitness & Beauty", description: "Pozyskiwanie klientów na zabiegi i treningi" },
  { title: "Usługi profesjonalne", description: "Advokatura, consulting, doradztwo" },
  { title: "Turystyka", description: "Rezerwacje hoteli i pakiety wakacyjne" },
];

export default function FacebookAdsGdynia() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Facebook Ads Gdynia — reklamy Meta dla firm | Fotz.pl"
          description="Facebook Ads Gdynia ✓ Kampanie Meta Ads dla firm z Gdyni i Trójmiasta. Wycena po rozmowie o zakresie. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/performance-marketing/facebook-ads/gdynia"
        keywords="facebook ads gdynia, meta ads gdynia, reklamy facebook gdynia, agencja facebook ads gdynia, kampanie facebook gdynia, instagram ads gdynia, facebook ads dla firm gdynia, reklama na facebooku gdynia, meta ads agencja gdynia, facebook ads cennik gdynia"
        />

        <ServiceSchema
          name="Facebook Ads Gdynia"
          description="Profesjonalne zarządzanie kampaniami Facebook Ads (Meta Ads) dla firm z Gdyni i Trójmiasta. Brand Awareness, Lead Generation, E-commerce."
          areaServed="Gdynia"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
            { name: "Facebook Ads", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads" },
            { name: "Gdynia", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads/gdynia" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", url: "/" },
            { name: "Performance Marketing", url: "/performance-marketing" },
            { name: "Facebook Ads", url: "/uslugi/reklama-facebook" },
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
                  <Share2 className="w-4 h-4" />
                  Facebook & Instagram Ads
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                  Reklamy Meta Ads <br className="hidden md:block" />
                  <span className="text-primary">dla firm z Gdyni i Trójmiasta</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Facebook Ads Gdynia — profesjonalne kampanie Meta Ads i reklamy Facebook dla firm z Gdynia i Trójmiasta. Pomagamy zwiększać zasięg i sprzedaż dzięki precyzyjnemu targetowaniu. Bezpłatna konsultacja.</p>
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

        {/* Why Facebook Ads Section */}
        <FadeInView>
          <section className="section-padding bg-secondary/30">
            <div className="container-wide">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Dlaczego Facebook Ads dla Gdyni?
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Facebook i Instagram to kanały, z których na co dzień korzysta duża część Twoich
                    potencjalnych klientów. Pracujemy z Poznania, firmy z Gdyni i Trójmiasta obsługujemy zdalnie.
                  </p>
                  <p>
                    Reklamy Meta Ads pozwalają na precyzyjne targetowanie: po zainteresowaniach, Demographics,
                    zachowaniach online, lokalizacji. W Gdyni, mieście portowym z bogatym ekosystemem biznesu,
                    Facebook Ads to idealny kanał do pozyskiwania klientów dla restauracji, sklepów, usług i e-commerce.
                  </p>
                  <p>
                    Kampanie Meta Ads są mierzalne — widać, ile kosztuje kontakt czy sprzedaż. Wyniki zależą od
                    oferty, budżetu i strony docelowej, dlatego nie obiecujemy konkretnego zwrotu z inwestycji,
                    tylko regularnie optymalizujemy kampanie na podstawie danych.
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
                  Typy kampanii Facebook & Instagram
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Od Brand Awareness po E-commerce - pełny zakres rozwiązań marketingowych
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
                Proces kampanii Meta Ads
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Strategia",
                    description: "Analizujemy konkurencję, segmentujemy publiczność i definiujemy cele",
                  },
                  {
                    step: "02",
                    title: "Kreatywność",
                    description: "Tworzymy atrakcyjne obrazki, wideo i copy zgodne z marką",
                  },
                  {
                    step: "03",
                    title: "Setup",
                    description: "Konfigurujemy kampanię, targeting i pixel tracking dla konwersji",
                  },
                  {
                    step: "04",
                    title: "Optymalizacja",
                    description: "Monitorujemy wyniki, testujemy i skalujemy skuteczne kampanie",
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
                  Od czego zależy wycena
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nie mamy sztywnych pakietów. Budżet reklamowy płacisz platformie Meta osobno.
                </p>
              </div>

              <div className="max-w-2xl mx-auto rounded-xl border border-border/50 bg-card/50 p-8">
                <p className="text-muted-foreground mb-6">
                  Wycenę przygotowujemy po rozmowie o zakresie. Najczęściej zależy ona od:
                </p>
                <ul className="space-y-3 mb-8">
                  {pricingFactors.map((factor, fIdx) => (
                    <li key={fIdx} className="flex gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{factor}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/kontakt">Poproś o wycenę</Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries Section */}
        <FadeInView>
          <section className="section-padding bg-secondary/30">
            <div className="container-wide">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
                Branże, którymi się zajmujemy
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
          description="Skontaktuj się z nami na bezpłatną konsultację. Przeanalizujemy potencjał kampanii Meta Ads dla Twojego biznesu."
        />
      </Layout>
    </>
  );
}
