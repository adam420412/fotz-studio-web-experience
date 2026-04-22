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
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const services = [
  {
    icon: TrendingUp,
    title: "SEO Lokalne",
    description: "Pozycjonowanie w Kaliszu i okolicach. Dominacja w lokalnych wynikach Google i Google Maps.",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Zarządzanie profilami na Facebooku, Instagramie i TikToku. Kampanie skierowane do klientów z Kalisza.",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Facebook Ads",
    description: "Skuteczne kampanie reklamowe na Google i Meta. Targeting lokalny - dochodzimy do klientów w Kaliszu.",
  },
  {
    icon: Building2,
    title: "Tworzenie Stron Internetowych",
    description: "Nowoczesne strony internetowe zoptymalizowane pod SEO i konwersje. Responsywne, szybkie, skuteczne.",
  },
  {
    icon: Target,
    title: "Content Marketing",
    description: "Tworzenie treści, które przyciągają i konwertują. Blogi, artykuły i materiały dla Twojej branży.",
  },
  {
    icon: Lightbulb,
    title: "Branding & Logo",
    description: "Budowanie tożsamości wizualnej Twojej marki. Logotypy, kolorystyka i wytyczne brandingowe.",
  },
];

const packages = [
  {
    name: "Start",
    price: "od 1 499",
    description: "Pakiet dla małych firm i startupów",
    features: [
      "Audyt SEO lokalne",
      "Optymalizacja Google My Business",
      "10 postów na social media",
      "Raport miesięczny",
      "Konsultacja co 2 tygodnie",
    ],
    popular: false,
  },
  {
    name: "Biznes",
    price: "od 3 999",
    description: "Kompleksowa obsługa marketingowa",
    features: [
      "Pełne SEO lokalne Kalisz",
      "Kampanie Google Ads & Facebook",
      "30 postów na social media",
      "Raport tygodniowy",
      "Konsultacje co tydzień",
      "Optymalizacja strony internetowej",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "od 7 999",
    description: "Strategia marketingowa na miarę",
    features: [
      "Zaawansowane SEO lokalne",
      "Dedykowany account manager",
      "Kampanie multi-channel",
      "Tworzenie treści (blogi, case studies)",
      "Raport bi-tygodniowy z analizą",
      "Nieograniczone konsultacje",
      "Strategia marketingowa na 12 miesięcy",
    ],
    popular: false,
  },
];

const faqItems = [
  {
    question: "Dlaczego warto wybrac agencje marketingowa w Kaliszu?",
    answer: "Agencja marketingowa z Kalisza zna lokalny rynek, rozumie konkurencję i specyfike biznesu w regionie. Fotz Studio połączy profesjonalne usługi z wiedzą na temat preferencji klientów w Kaliszu i okolicach Wielkopolski. Dla małych firm i średnich przedsiębiorstw to idealne rozwiązanie - nie płacisz za obcy zespół z dużego miasta, a dostajesz ekspertyzę i zaangażowanie.",
  },
  {
    question: "Jakie usługi oferuje agencja marketingowa Fotz Studio?",
    answer: "Oferujemy kompleksowe usługi marketingowe: pozycjonowanie SEO w Kaliszu i okolicach, kampanie Google Ads i Facebook Ads, zarządzanie social media (Facebook, Instagram, TikTok), tworzenie stron internetowych, content marketing, branding i design. Każdą usługę dostosowujemy do potrzeb i budżetu Twojej firmy.",
  },
  {
    question: "Ile kosztuje kampania marketingowa dla firmy z Kalisza?",
    answer: "Ceny zaczynają się od 1 499 zł za pakiet Start. Oferujemy trzy główne pakiety: Start dla startupów i małych firm, Biznes dla średnich przedsiębiorstw (od 3 999 zł) i Premium dla dużych kampanii (od 7 999 zł). Przygotowujemy także wyceny indywidualne dostosowane do Twoich potrzeb i budżetu.",
  },
  {
    question: "Jak działa SEO lokalne dla firm z Kalisza?",
    answer: "SEO lokalne to optymalizacja strony internetowej i profilu Google My Business pod względem searchwołów zawierających Kalisz. Pomagamy firmom pojawiać się wyżej w wynikach wyszukiwania dla zapytań takich jak 'fryzjer Kalisz', 'pizzeria Kalisz' czy 'specjalista SEO Kalisz'. To kieruje do Ciebie rzeczywistych klientów z okolic Kalisza.",
  },
  {
    question: "Jak długo trwa pozycjonowanie strony w Kaliszu?",
    answer: "Pierwsze efekty SEO lokalne widać zwykle po 4-6 tygodniach. Pełne rezultaty zajmują 3-6 miesięcy, w zależności od konkurencji i stanu startu Twojej strony. Naszym celem jest długotrwały wzrost ruchu organicznego, a nie szybkie ale tymczasowe efekty.",
  },
  {
    question: "Czy mogę anulowac wspolprace z agencja marketingowa?",
    answer: "Tak, umowy można anulować. Zwykle wymagamy 30-dniowego okresu wypowiedzenia. Najbardziej efektywne kampanie to jednak te długoterminowe - rekomendujemy minimum 3-6 miesięcy współpracy, aby zaobserwować solidne rezultaty.",
  },
];

const stats = [
  { value: 200, suffix: "+", label: "Zadowolonych klientów" },
  { value: 15, suffix: "+", label: "Lat doświadczenia" },
  { value: 500, suffix: "%", label: "Średni ROI" },
  { value: 98, suffix: "%", label: "Retencja klientów" },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary">
        {value}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

export default function AgencjaMarketingowaKalisz() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Kalisz — SEO, Google Ads, Social Media"
          description="Agencja marketingowa w Kaliszu. Profesjonalne usługi SEO lokalne, Google Ads, Facebook Ads, zarządzanie social media i tworzenie stron dla firm z Kalisza."
          canonical="https://fotz.pl/agencja-marketingowa/kalisz"
        keywords="agencja marketingowa kalisz, marketing internetowy kalisz, agencja reklamowa kalisz, seo kalisz, google ads kalisz"
        />

        <ServiceSchema
          name="Agencja Marketingowa Kalisz"
          description="Profesjonalne usługi marketingowe dla firm w Kaliszu: SEO lokalne, kampanie reklamowe, social media marketing, tworzenie stron internetowych."
          areaServed="Kalisz"
        />
        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
            { name: "Kalisz", url: "https://fotz.pl/agencja-marketingowa/kalisz" },
          ]}/>
        <FAQSchema items={faqItems} />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.15),transparent_50%)]" />

          <div className="container-wide relative z-10 py-20 md:py-32">
            <div
             
             
             
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="outline" className="mb-6 text-primary border-primary/30">
                <MapPin className="w-4 h-4 mr-2" />
                Agencja marketingowa w Kaliszu
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Agencja Marketingowa <br className="hidden md:block" />
                <span className="text-primary">Kalisz</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Fotz Studio to profesjonalna agencja marketingowa w Kaliszu. Pomagamy firmom z Kalisza i okolic
                wzrostu online poprzez SEO lokalne, kampanie Google Ads, social media marketing i tworzenie stron internetowych.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/kontakt">
                    Zamów darmową konsultację
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

        {/* Stats Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                 
                 
                >
                  <StatCounter {...stat} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div
             
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Usługi agencji marketingowej w Kaliszu
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompleksowe rozwiązania marketingowe dla firm z Kalisza i Wielkopolski
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                 
                 
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group">
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

        {/* Why Choose Us Section */}
        <section className="section-padding bg-secondary/20">
          <div className="container-wide">
            <div
             
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Dlaczego Fotz Studio?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Poznajcie przyczyny, dla których firmy z Kalisza wybierają nas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Doświadczony Zespół",
                  description: "Nasz zespół ma 15+ lat doświadczenia w marketingu. Pracowaliśmy z setkami firm, w tym z Kalisza.",
                },
                {
                  icon: TrendingUp,
                  title: "Gwarantowane Wyniki",
                  description: "Średni wzrost ruchu organicznego: 300-500%. Poprze metryki widać efekty już po kilku miesiącach.",
                },
                {
                  icon: Star,
                  title: "Niskie Koszty Startu",
                  description: "Pakiety od 1 499 zł/miesiąc. Dla każdego budżetu. Bez ukrytych opłat.",
                },
                {
                  icon: Zap,
                  title: "Szybka Implementacja",
                  description: "Zaczynamy w ciągu 48 godzin. Kampanie na żywo w ciągu tygodnia.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                 
                 
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <item.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div
             
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Pakiety i cennik
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wybierz pakiet dostosowany do rozmiaru Twojej firmy. Wszystkie ceny netto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                 
                 
                >
                  <Card className={`h-full relative ${pkg.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">Najpopularniejszy</Badge>
                      </div>
                    )}
                    <CardContent className="p-6 pt-8">
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {pkg.description}
                      </p>
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-primary">
                          {pkg.price}
                        </span>
                        <span className="text-muted-foreground ml-1">PLN/msc</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="w-full"
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        <Link to="/kontakt">
                          Pokaż mi opcje
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div
             
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Najczęściej zadawane pytania
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Odpowiedzi na pytania o agencję marketingową w Kaliszu
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                   
                   
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div
             
              className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
            >
              <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Gotowy na wzrost biznesu w Kaliszu?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Skontaktuj się z nami na darmową konsultację. Przeprowadzimy audyt Twojej obecności online
                i zaproponujemy strategie dopasowaną do Twojej branży i budżetu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/kontakt">
                    Zarezerwuj konsultację
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+48790814814">
                    <Phone className="w-4 h-4 mr-2" />
                    Zadzwoń teraz
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div
             
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Agencja Marketingowa Kalisz - SEO Lokalne, Google Ads i Social Media
              </h2>
              <p className="text-muted-foreground mb-4">
                Fotz Studio to profesjonalna agencja marketingowa z siedzibą w Poznaniu, obsługująca firmy
                z Kalisza, Ostrowa Wielkopolskiego, Konina i całej Wielkopolski. Specjalizujemy się w SEO
                lokalnym, kampaniach Google Ads, Facebook Ads i zarządzaniu social media dla biznesu lokalnego.
              </p>
              <p className="text-muted-foreground mb-6">
                Dla firm z Kalisza SEO lokalne to najskuteczniejszy sposób na znalezienie nowych klientów.
                Gdy ktoś w Kaliszu szuka Twojej usługi (fryzjer, dentystka, hydraulik, restauracja), chce
                znaleźć kogoś z bliskiego sąsiedztwa. My pomagamy firmom pojawiać się wyżej w wynikach
                wyszukiwania dla zapytań zawierających Kalisz.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                SEO Lokalne dla Firm w Kaliszu
              </h2>
              <p className="text-muted-foreground mb-4">
                SEO lokalne to optymalizacja strony internetowej, profilu Google My Business i zawartości
                pod kątem wyszukiwań lokalnych. Dla firmy z Kalisza znaczy to pojawienie się w wynikach dla
                takich zapytań jak "fryzjer Kalisz", "reklama Kalisz" czy "agencja marketingowa Kalisz".
              </p>
              <p className="text-muted-foreground mb-6">
                Naszym zadaniem jest upewnić się, że Twoja strona jest zoptymalizowana dla mobilnego,
                że ma szybki czas ładowania, że zawiera słowa kluczowe związane z Kalizem i okolicami,
                oraz że Twój profil na Google Maps jest w pełni uzupełniony z opiniami i zdjęciami.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Social Media Marketing dla Firm z Kalisza
              </h2>
              <p className="text-muted-foreground mb-4">
                Zarządzanie social media to zdecydowanie najskuteczniejszy sposób na budowanie relacji
                z klientami. Facebook i Instagram pozwalają Ci na bezpośrednie dotarcie do osób z Kalisza
                i okolic, pokazanie Twojej osobowości biznesu i zbudowanie lojalności.
              </p>
              <p className="text-muted-foreground mb-6">
                Zajmujemy się tworzeniem postów, zarządzaniem komentarzami, respondowaniem na wiadomości
                i tworzeniem kampanii promocyjnych na Facebooku i Instagramie. Wszystko dostosowane do
                specyfiki Twojej branży i celu biznesowego.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Kampanie Google Ads i Facebook Ads dla Kalisza
              </h2>
              <p className="text-muted-foreground mb-4">
                Google Ads i Facebook Ads to płatne kampanie reklamowe, które pozwalają szybko dotrzeć
                do nowych klientów. W Google Ads pojawiasz się na szczycie wyników wyszukiwania dla
                wybranych słów kluczowych. Na Facebooku i Instagramie możesz pokazywać reklamy do
                użytkowników spełniających konkretne kryteria (wiek, płeć, zainteresowania, lokalizacja).
              </p>
              <p className="text-muted-foreground mb-6">
                Dla firm z Kalisza kampanie lokalnie ukierunkowane (na mieszkańców Kalisza i okolic)
                dają świetne rezultaty. Możemy optymalizować kampanie pod względem geografii, aby
                osiągać tylko osoby z Twojej docelowej lokalizacji.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Tworzenie Stron Internetowych dla Firm z Kalisza
              </h2>
              <p className="text-muted-foreground mb-4">
                Nowoczesna strona internetowa to kluczowy element sukcesu online. Tworzymy strony
                responsywne (działające dobrze na mobilach), szybkie, bezpieczne i zoptymalizowane
                pod SEO. Każda strona jest dostosowana do specyfiki branży i celów biznesowych.
              </p>
              <p className="text-muted-foreground mb-6">
                Strona internetowa to Twoja wizytówka online. Klient z Kalisza, zanim zadzwoni do
                Ciebie czy przyjdzie do Twojego lokalu, pewnie sprawdza najpierw stronę internetową.
                Dlatego ważne jest, aby wyglądała profesjonalnie i zawierała wszystkie istotne informacje.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Obsługa Klientów z Kalisza i Okolic
              </h2>
              <p className="text-muted-foreground mb-4">
                Fotz Studio pracuje z firmami z Kalisza, ale także z Ostrowa Wielkopolskiego, Konina,
                Sieradza i całej Wielkopolski. Dobrze znamy lokalny rynek, konkurencję i potrzeby biznesu
                w każdej z tych miast. To pozwala nam na tworzenie strategii dedykowanych i skutecznych.
              </p>
              <p className="text-muted-foreground mb-6">
                Jeżeli Twoja firma szuka profesjonalnej agencji marketingowej w Kaliszu, zapraszamy do
                kontaktu. Chętnie przeprowadzimy bezpłatną konsultację i opowiemy o tym, jak możemy
                pomóc Twojemu biznesowi.
              </p>

              <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/agencja-marketingowa/poznan" className="text-primary hover:underline font-medium text-sm">
                  Powrót do agencji marketingowej
                </Link>
                <Link to="/kontakt" className="text-primary hover:underline font-medium text-sm">
                  Kontakt z agencją
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
