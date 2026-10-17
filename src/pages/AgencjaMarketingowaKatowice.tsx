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

const services = [
  {
    icon: TrendingUp,
    title: "Pozycjonowanie SEO",
    description: "Kompleksowe pozycjonowanie stron www w wyszukiwarce Google. Doradzamy, optymalizujemy i monitorujemy pozycje dla kluczowych słów branży.",
  },
  {
    icon: Target,
    title: "Google Ads & SEM",
    description: "Kampanie reklamowe w Google Ads nastawione na mierzalne konwersje. Tworzymy strategie bazujące na danych i ciągle optymalizujemy wyniki.",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Zarządzanie profilami na Facebook, Instagram, LinkedIn. Treści, kampanie, społeczność i analizy dostosowane do profilu branżowego.",
  },
  {
    icon: BarChart3,
    title: "Strony Internetowe",
    description: "Projektowanie i wdrażanie responsywnych stron www. Nowoczesne, szybkie strony zoptymalizowane pod kątem konwersji i SEO.",
  },
  {
    icon: Lightbulb,
    title: "Strategie Marketingowe",
    description: "Opracowujemy indywidualne strategie marketingowe dla firm Katowic. Analiza konkurencji, target audytorium i plan działań.",
  },
  {
    icon: Zap,
    title: "Wsparcie & Zarządzanie",
    description: "Ciągłe wsparcie i zarządzanie kampaniami. Monthly reporty, konsultacje i optymalizacja na podstawie danych.",
  },
];

const packages = [
  {
    name: "Pakiet Starter",
    description: "Idealne dla początkujących firm",
    features: [
      "Optymalizacja SEO 2-3 słów kluczowych",
      "Zarządzanie jednym profilem social media",
      "1 post na tydzień",
      "Podstawowe analizy",
      "Email support",
    ],
    popular: false,
    cta: "Zaproś do rozmowy",
  },
  {
    name: "Pakiet Business",
    description: "Dla firm chcących wzrostu",
    features: [
      "Pozycjonowanie 5-8 słów kluczowych",
      "2 kanały social media",
      "3 posty tygodniowo + kampanie",
      "Kampania Google Ads (budżet reklamowy osobno)",
      "Raport miesięczny",
      "Wsparcie priorytetowe",
    ],
    popular: true,
    cta: "Zaproś do rozmowy",
  },
  {
    name: "Pakiet Premium",
    description: "Kompleksowe rozwiązanie marketingowe",
    features: [
      "Pełne pozycjonowanie SEO",
      "3-4 kanały social media",
      "Codzienne publikacje i kampanie",
      "Kampania Google Ads + YouTube",
      "Projektowanie strony www",
      "Strategia content marketingu",
      "Tygodniowe raporty i konsultacje",
      "Telefon + wideo call support",
    ],
    popular: false,
    cta: "Zaproś do rozmowy",
  },
];

const locations = [
  { name: "Śródmieście Katowice", description: "Centrum miasta, nowoczesne biurowce" },
  { name: "Ligota", description: "Dzielnica mieszkaniowa z potencjałem" },
  { name: "Ochojec", description: "Tereny przemysłowe i logistyczne" },
  { name: "Zawodzie", description: "Kluczowa dzielnica transportowa" },
  { name: "Bogucice", description: "Dzielnica o bogatej historii biznesu" },
  { name: "Brynów", description: "Obszary handlowo-usługowe" },
];

const faqItems = [
  {
    question: "Dlaczego marketing online jest ważny dla firm z Katowic?",
    answer: "Katowice to stolica województwa śląskiego i centrum Górnego Śląska. Jako główne miasto Górnośląskiego Związku Metropolitalnego (GZM), Katowice przyciąga firmy z całego regionu. Marketing online pozwala na szybkie dotarcie do potencjalnych klientów, zwiększenie widoczności w wyszukiwarce Google i budowanie marki. W dobie transformacji z gospodarki przemysłowej na usługową, marketing cyfrowy jest kluczem do sukcesu.",
  },
  {
    question: "Jak pozycjonowanie SEO może pomóc mojej firmie z Katowic?",
    answer: "Pozycjonowanie SEO to długoterminowa inwestycja w widoczność. Im wyżej Twoja strona pojawia się w Google dla fraz takich jak 'agencja marketingowa Katowice' czy 'usługi B2B Katowice', tym więcej organicznych kliknięć możesz zdobyć. Pracujemy nad techniczną stroną SEO, treściami oraz autorytetem domeny. Nie gwarantujemy konkretnej pozycji ani terminu — tempo efektów zależy od konkurencji i stanu strony.",
  },
  {
    question: "Jakie wyniki mogę się spodziewać z kampanii Google Ads?",
    answer: "Kampanie Google Ads mogą zacząć wyświetlać reklamy krótko po uruchomieniu i akceptacji przez Google, ale pozycja reklamy zależy od aukcji, stawek i jakości reklam. Wyniki zależą od branży, konkurencji i budżetu — nie obiecujemy konkretnego kosztu pozyskania klienta. Budżet reklamowy płacony Google jest zawsze osobno od naszego wynagrodzenia i ustalamy go wspólnie po rozmowie o celach.",
  },
  {
    question: "Czy wasze usługi obejmują projektowanie strony www?",
    answer: "Tak, projektujemy i wdrażamy nowoczesne strony www dla firm z Katowic. Nasze strony są responsywne (działają na wszystkich urządzeniach), szybkie, zoptymalizowane pod SEO i konwersję. Tworzymy porady, landing page'e, sklepy online i portale dla firm b2b. Każda strona integruje się z systemami analitycznym i CRM.",
  },
  {
    question: "Ile czasu zajmuje widoczność w Google?",
    answer: "Pozycjonowanie to proces rozłożony na miesiące, a jego tempo zależy od konkurencji i stanu strony — nie podajemy sztywnych terminów. Google Ads może działać od uruchomienia kampanii. Social media budują markę systematycznie. Rekomendujemy połączenie wszystkich kanałów: SEO (długoterminowy), Google Ads (szybkie wyniki), social media (budowanie społeczności) i email marketing (retencja klientów). Kanały najlepiej działają, gdy się wzajemnie uzupełniają.",
  },
];

export default function AgencjaMarketingowaKatowice() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Katowice | Fotz Studio"
          description="Agencja marketingowa Katowice ✓ SEO, Google Ads, Social Media, strony WWW. Pracujemy z Poznania, firmy z Katowic i Śląska obsługujemy zdalnie. Bezpłatna wycena!"
          canonical="https://www.fotz-studio.pl/agencja-marketingowa/katowice"
        keywords="agencja marketingowa katowice, marketing internetowy katowice, agencja reklamowa katowice, kampanie reklamowe katowice, seo katowice, google ads katowice, agencja marketingowa śląsk"
        />

        <ServiceSchema
          name="Agencja Marketingowa Katowice"
          description="Kompleksowe usługi marketingowe dla firm z Katowic. SEO, Google Ads, Social Media, projektowanie stron www."
          areaServed="Katowice"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Agencje Marketingowe", url: "https://www.fotz-studio.pl/agencja-marketingowa" },
            { name: "Katowice", url: "https://www.fotz-studio.pl/agencja-marketingowa/katowice" }
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.15),transparent_50%)]" />

          <div className="container-wide relative z-10 py-20 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 text-primary border-primary/30 inline-block">
                <MapPin className="w-4 h-4 mr-2" />
                Marketing dla firm z Katowic
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Agencja Marketingowa Katowice
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                SEO, Google Ads, social media i strony www dla firm z Katowic i całego Śląska. Pracujemy z Poznania, a klientów z Katowic obsługujemy zdalnie — realizowaliśmy projekty m.in. dla Enea Stadion, H. Cegielski – FPS i WSB Merito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link to="/kontakt">
                    <Phone className="w-5 h-5 mr-2" />
                    Bezpłatna Konsultacja
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base"><a href="/kontakt">
                  Zapytaj o szczegóły <ArrowRight className="w-5 h-5 ml-2" />
                </a></Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nasze Usługi Marketingowe</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kompleksowe rozwiązania marketingowe dostosowane do potrzeb firm z Katowic i regionu Górnego Śląska
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-primary/5">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Przykładowe Zakresy Współpracy</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nie mamy sztywnego cennika. Wycenę przygotowujemy po rozmowie o zakresie, liczbie kanałów i celach. Budżet reklamowy płacony platformom (Google, Meta) jest zawsze osobno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {packages.map((pkg, i) => (
                <Card
                  key={i}
                  className={`flex flex-col ${
                    pkg.popular ? "ring-2 ring-primary relative md:scale-105" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary">Rekomendowany</Badge>
                    </div>
                  )}
                  <CardContent className="pt-6 pb-4 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-xl mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <p className="text-sm text-muted-foreground mb-6">Wycena indywidualna po rozmowie o zakresie</p>
                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={pkg.popular ? "default" : "outline"} className="w-full mt-auto"><a href="/kontakt">
                      {pkg.cta}
                    </a></Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-20">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Obsługujemy Zdalnie Wszystkie Dzielnice Katowic</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Katowice to główne miasto Górnośląsko-Zagłębiowskiej Metropolii (GZM) i ważny ośrodek biznesowy regionu. Pracujemy z Poznania, a firmy ze wszystkich dzielnic Katowic obsługujemy zdalnie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((loc, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">{loc.name}</h4>
                        <p className="text-sm text-muted-foreground">{loc.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Katowice Section */}
        <section className="py-20 bg-primary/5">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Dlaczego Katowice?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Centrum Biznesu Górnego Śląska</h3>
                    <p className="text-muted-foreground">
                      Katowice jest stolicą województwa śląskiego i głównym miastem Górnośląskiego Związku Metropolitalnego. To kluczowe centrum gospodarcze i transportowe regionu.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transformacja Gospodarcza</h3>
                    <p className="text-muted-foreground">
                      Od przemysłu do nowoczesnych usług. Katowice transformują się z miasta przemysłowego w nowoczesne miasto usług, handlu i turystyki biznesowej. To otwiera nowe możliwości dla firm.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Star className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Miasto Eventów i MICE</h3>
                    <p className="text-muted-foreground">
                      Katowice przyciąga międzynarodowe konferencje, targi i eventy (MICE). To przyczynia się do wzrostu liczby firm usługowych, doradczych i nowoczesnych przedsiębiorstw.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Potencjał Rynkowy</h3>
                    <p className="text-muted-foreground">
                      Katowice wraz z całą metropolią GZM to jeden z największych obszarów miejskich w Polsce — duży rynek dla firm szukających nowych klientów.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nasz Proces Pracy</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Systematyczne podejście do marketingu oparte na danych
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  num: "1",
                  title: "Diagnoza",
                  description: "Analizujemy Twoją firmę, konkurencję i rynek. Przeprowadzamy audit SEO i media społeczne.",
                },
                {
                  num: "2",
                  title: "Strategia",
                  description: "Opracowujemy indywidualną strategię marketingową dostosowaną do Twoich celów i budżetu.",
                },
                {
                  num: "3",
                  title: "Wdrażanie",
                  description: "Implementujemy kampanie SEO, Google Ads, social media i tworzymy lub optymalizujemy stronę www.",
                },
                {
                  num: "4",
                  title: "Monitorowanie",
                  description: "Monitorujemy wyniki, testujemy i ciągle optymalizujemy kampanie na podstawie danych.",
                },
              ].map((step, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-4">{step.num}</div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-primary/5">
          <div className="container-wide max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Pytania i Odpowiedzi</h2>
              <p className="text-lg text-muted-foreground">
                Najczęstsze pytania dotyczące marketingu dla firm z Katowic
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Gotowy do Transformacji Cyfrowej?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Skontaktuj się z nami na bezpłatną konsultację. Omówimy Twoją branżę, cele i opracujemy plan działania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base"><a href="tel:+48790814814">
                <Phone className="w-5 h-5 mr-2" />
                +48 790 814 814
              </a></Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/kontakt">
                  Napisz Wiadomość <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
