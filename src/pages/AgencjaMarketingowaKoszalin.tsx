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
  Award,
  Star,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Target,
  Smartphone,
  BarChart3,
  Globe,
  Lightbulb,
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
    description: "Pozycjonowanie w Koszalinie i okolicach Pomorza Srodkowego. Praca nad widocznością w lokalnych wynikach Google i Google Maps dla firm turystycznych i handlowych. Nie gwarantujemy konkretnej pozycji.",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Zarzadzanie profilami na Facebooku, Instagramie i TikToku. Kampanie skierowane do turystow i lokalnych klientow z Koszalina.",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Facebook Ads",
    description: "Kampanie reklamowe na Google i Meta. Targetowanie lokalne dla turystyki nadmorskiej - docieramy do turystów szukających ofert w Koszalinie. Budżet reklamowy płacisz platformie osobno.",
  },
  {
    icon: Building2,
    title: "Tworzenie Stron Internetowych",
    description: "Nowoczesne strony internetowe zoptymalizowane pod SEO i konwersje. Responsywne i szybkie, dla hoteli, restauracji i usług turystycznych.",
  },
  {
    icon: Target,
    title: "Content Marketing",
    description: "Tworzenie tresci, które przyciagaja turystow i mieszkancow. Blogi, artykuly o Koszalinie, materialy dla branzy turystycznej i handlu.",
  },
  {
    icon: Lightbulb,
    title: "Branding & Logo",
    description: "Budowanie tozsamosci wizualnej Twojej marki. Logotypy, kolorystyka i wytyczne brandingowe dla firm z Koszalina i regionu.",
  },
];

const packages = [
  {
    name: "Start",
    description: "Pakiet dla malych firm i startupow",
    features: [
      "Audyt SEO lokalne Koszalin",
      "Optymalizacja Google My Business",
      "10 postow na social media",
      "Raport miesieczny",
      "Konsultacja co 2 tygodnie",
    ],
    popular: false,
  },
  {
    name: "Biznes",
    description: "Kompleksowa obsluga marketingowa dla firm turystycznych",
    features: [
      "Pelne SEO lokalne Koszalin",
      "Kampanie Google Ads & Facebook",
      "30 postow na social media",
      "Raport tygodniowy",
      "Konsultacje co tydzien",
      "Optymalizacja strony internetowej",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Strategia marketingowa na miare",
    features: [
      "Zaawansowane SEO lokalne",
      "Dedykowany account manager",
      "Kampanie multi-channel",
      "Tworzenie tresci (blogi, case studies)",
      "Raport bi-tygodniowy z analizą",
      "Nieograniczone konsultacje",
      "Strategia marketingowa na 12 miesiacy",
    ],
    popular: false,
  },
];

const faqItems = [
  {
    question: "Czy agencja spoza Koszalina może prowadzić marketing mojej firmy?",
    answer: "Tak. Fotz Studio pracuje z Poznania, a firmy z Koszalina obsługujemy zdalnie — spotkania prowadzimy online, materiały i raporty wymieniamy elektronicznie. Na starcie poznajemy Twoją branżę, konkurencję i sezonowość regionu, a strategię dopasowujemy do Twoich klientów: turystów i mieszkańców.",
  },
  {
    question: "Jakie usługi oferuje agencja marketingowa dla Koszalina?",
    answer: "Oferujemy kompleksowe uslugi marketingowe: pozycjonowanie SEO w Koszalinie i okolicach, kampanie Google Ads i Facebook Ads, zarzadzanie social media (Facebook, Instagram, TikTok), tworzenie stron internetowych, content marketing, branding i design. Kazda usluge dostosowujemy do potrzeb firm turystycznych, handlu i uslug w regionie.",
  },
  {
    question: "Ile kosztuje kampania marketingowa dla firm z Koszalina?",
    answer: "Wycenę przygotowujemy po rozmowie o zakresie. Koszt zależy od liczby kanałów (SEO, Google Ads, Meta Ads, social media), ilości treści do przygotowania i częstotliwości raportowania. Budżet reklamowy płacony platformom (Google, Meta) jest zawsze osobno.",
  },
  {
    question: "Jak działa SEO lokalne dla firm z Koszalina?",
    answer: "SEO lokalne to optymalizacja strony internetowej i profilu Google My Business pod wzgledem searchwołów zawierajacych Koszalin i Pomorze Srodkowe. Pomagamy firmom turyastycznym, hotelow i restauracji pojawiac sie wyzej w wynikach wyszukiwania dla zapa tan takich jak 'hotel Koszalin nad morza', 'restauracja Koszalin' czy 'imprezy nad morzem Koszalin'. To kieruje do Ciebie rzeczywistych turystow i klientow z okolic Koszalina.",
  },
  {
    question: "Jakie są wyzwania marketingowe dla Koszalina i turystyki nad morzem?",
    answer: "Glowne wyzwania to sezonowość turystyki (szczyt w lipocu-sierpniu), wysoki CPL w sezonie letnim, konkurencja z duzych portali turystycznych, konieczneość budowania wizerunku poza sezonem. Marketing musi byc dual - dla turystow latem i dla mieszkancow przez caly rok.",
  },
  {
    question: "Czy mogę anulowac wspolprace z agencja marketingowa?",
    answer: "Tak, umowę można wypowiedzieć — okres wypowiedzenia ustalamy w umowie. Marketing, zwłaszcza SEO, wymaga jednak czasu, a firmy sezonowe potrzebują danych z więcej niż jednego okresu, dlatego rekomendujemy dłuższą współpracę. Nie obiecujemy efektów w sztywnym terminie.",
  },
];

export default function AgencjaMarketingowaKoszalin() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Koszalin - SEO, Google Ads, Social Media"
          description="Agencja marketingowa z Poznania dla firm z Koszalina — obsługa zdalna. Usługi SEO lokalne, Google Ads, Facebook Ads, zarządzanie social media i tworzenie stron dla firm turystycznych, handlowych i usługowych z Pomorza Środkowego."
          canonical="https://www.fotz-studio.pl/agencja-marketingowa/koszalin"
        keywords="agencja marketingowa koszalin, marketing internetowy koszalin, agencja reklamowa koszalin, seo koszalin"
        />

        <ServiceSchema
          name="Agencja Marketingowa Koszalin"
          description="Profesjonalne uslugi marketingowe dla firm w Koszalinie: SEO lokalne, kampanie reklamowe, social media marketing, tworzenie stron internetowych. Obsługa zdalna z Poznania."
          areaServed="Koszalin"
        />
        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Agencja marketingowa", url: "https://www.fotz-studio.pl/agencja-marketingowa" },
            { name: "Koszalin", url: "https://www.fotz-studio.pl/agencja-marketingowa/koszalin" },
          ]}/>
        <FAQSchema items={faqItems} />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.15),transparent_50%)]" />

          <div className="container-wide relative z-10 py-20 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 text-primary border-primary/30">
                <MapPin className="w-4 h-4 mr-2" />
                Marketing dla firm z Koszalina
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Agencja Marketingowa <br className="hidden md:block" />
                <span className="text-primary">Koszalin</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Fotz Studio to agencja marketingowa z Poznania — firmy z Koszalina obsługujemy zdalnie. Pomagamy firmom turystycznym, handlowym i usługowym rozwijać się online poprzez SEO lokalne, kampanie Google Ads, social media marketing i tworzenie stron internetowych.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/kontakt">
                    Zamow darmowa konsultację
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

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Uslugi agencji marketingowej w Koszalinie
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompleksowe rozwiazania marketingowe dla firm turystycznych i handlowych z Koszalina i Pomorza Srodkowego
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={service.title}>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Dlaczego Fotz Studio?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jak pracujemy z firmami z Koszalina i Pomorza Środkowego
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Planowanie pod sezonowość",
                  desc: "Uwzględniamy sezonowość turystyki nadmorskiej: kampanie planowane pod szczyty sezonu, treści dla turystów oraz mieszkańców Koszalina.",
                },
                {
                  icon: Award,
                  title: "Obsługa zdalna z Poznania",
                  desc: "Pracujemy z Poznania, a z firmami z Koszalina współpracujemy zdalnie. Na starcie analizujemy branżę i lokalną konkurencję, a strategię dostosowujemy do rynku.",
                },
                {
                  icon: Star,
                  title: "Dedykowany ekspert projektu",
                  desc: "Jedna osoba prowadząca Twój projekt i stały kontakt przez cały czas współpracy.",
                },
                {
                  icon: Globe,
                  title: "Strategia turystyki nad morzem",
                  desc: "Okolice Koszalina przyciągają turystów - plaże, morze, atrakcje przyrodnicze. Możemy przygotować kampanie i treści skierowane do turystów, także zagranicznych.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-background"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding bg-card/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Przykładowe zakresy współpracy
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wycenę przygotowujemy po rozmowie o zakresie — zależy od liczby kanałów, ilości treści i częstotliwości raportowania. Budżet reklamowy płacony Google i Meta jest zawsze osobno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border transition-all ${
                    pkg.popular
                      ? "border-primary/50 bg-primary/5 md:scale-105 md:shadow-xl"
                      : "border-border/40 bg-card/50"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Popularne
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pkg.description}
                    </p>

                    <Button asChild className="w-full mb-8">
                      <Link to="/kontakt">Zapytaj o wycenę</Link>
                    </Button>

                    <div className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Gotowy na wzrost biznesu w Koszalinie?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Skontaktuj sie z nami na darmową konsultacje. Przeprowadzimy audyt Twojej obecnosci online
                i zaproponujemy strategie dostosowana do Twojej branzy i budżetu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/kontakt">
                    Zarezerwuj konsultacje
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+48790814814">
                    <Phone className="w-4 h-4 mr-2" />
                    Zadzwon teraz
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Najczesciej zadawane pytania
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Odpowiedzi na pytania o agencje marketingowa w Koszalinie
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index}>
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

        {/* Content Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Agencja Marketingowa Koszalin - SEO Lokalne, Google Ads i Social Media
              </h2>
              <p className="text-muted-foreground mb-4">
                Fotz Studio to agencja marketingowa z Poznania. Firmy z Koszalina i Pomorza Środkowego obsługujemy zdalnie. Zajmujemy się SEO lokalnym, kampaniach Google Ads, Facebook Ads i zarzadzaniu social media dla biznesu turystycznego, handlowego i uslugowego.
              </p>
              <p className="text-muted-foreground mb-6">
                Koszalin to centrum turystyki nadmorskiej Pomorza Srodkowego - wielu turystów szuka noclegów, restauracji i atrakcji turystycznych w regionie. Dla firm turystycznych, hotelow i restauracji SEO lokalne to jeden ze sposobów na dotarcie do nowych klientów. Gdy ktos w Koszalinie lub z zewnatrz szuka Twojej uslugi, chce znalezc cos blisko plaży i w dobrym miejscu. Pracujemy nad widocznością firm w wynikach wyszukiwania dla zapytań zawierających Koszalin — bez gwarancji konkretnej pozycji.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                SEO Lokalne dla Firm w Koszalinie
              </h2>
              <p className="text-muted-foreground mb-4">
                SEO lokalne to optymalizacja strony internetowej, profilu Google My Business i zawartosci pod katem wyszukiwan lokalnych. Dla firmy turystycznej z Koszalina znaczy to pojawienie sie w wynikach dla takich zapa tan jak "hotel nad morzem Koszalin", "restauracja nadmorska Koszalin" czy "atrakcje turystyczne Koszalin".
              </p>
              <p className="text-muted-foreground mb-6">
                Naszym zadaniem jest upewnic sie, ze Twoja strona jest zoptymalizowana dla mobilnego, ze ma szybki czas ladowania, ze zawiera slowa kluczowe zwiazane z Koszalinem i turystyka nadmorska, oraz ze Twoj profil na Google Maps jest w pelni uzupelniony z opiniami, zdjeciami i informacjami o godzinach otwarcia.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Social Media Marketing dla Firm z Koszalina
              </h2>
              <p className="text-muted-foreground mb-4">
                Zarządzanie social media to dobry sposób na budowanie relacji z klientami i turystami. Facebook i Instagram pozwalaja Ci na bezposrednie dotarcie do osób z Koszalina i turystow, pokazanie Twojej osobowosci biznesu i zbudowanie lojalnosci.
              </p>
              <p className="text-muted-foreground mb-6">
                Zajmujemy sie tworzeniem postow, zarzadzaniem komentarzami, respondowaniem na wiadomosci i tworzeniem kampanii promocyjnych na Facebooku i Instagramie. Wszystko dostosowane do specyfiki Twojej branzy turystycznej i celu biznesowego.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Kampanie Google Ads i Facebook Ads dla Koszalina
              </h2>
              <p className="text-muted-foreground mb-4">
                Google Ads i Facebook Ads to platne kampanie reklamowe, które pozwalaja szybko dotrzec do nowych klientow i turystow. W Google Ads reklama może wyświetlać się nad wynikami wyszukiwania dla wybranych słów kluczowych. Na Facebooku i Instagramie mozesz pokazywac reklamy do uzytkownikow spelniajacych konkretne kryteria (wiek, płec, zainteresowania, lokalizacja).
              </p>
              <p className="text-muted-foreground mb-6">
                Dla firm turystycznych z Koszalina kampanie lokalnie ukierunkowane na mieszkancow Koszalina oraz turystów z Polski i zagranicy pozwalają dopasować przekaz do odbiorców. Budżet reklamowy płacisz platformom osobno. Mozemy optymalizowac kampanie pod wzgledem geografii i sezonowosci - wiekszy budzet w sezonie (lipiec-sierpien) i mniejszy w off-sezonie.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Tworzenie Stron Internetowych dla Firm z Koszalina
              </h2>
              <p className="text-muted-foreground mb-4">
                Nowoczesna strona internetowa to kluczowy element sukcesu online dla firm turystycznych. Tworzymy strony responsywne (dzialajace dobrze na mobilach), szybkie, bezpieczne i zoptymalizowane pod SEO. Kazda strona jest dostosowana do specyfiki branzy turystycznej i celow biznesowych.
              </p>
              <p className="text-muted-foreground mb-6">
                Strona internetowa to Twoja wizytowka online. Turysta szukajacy noclegu w Koszalinie, zanim zadzwoni do Ciebie czy przyjdzie do Twojego hotelu, pewnie sprawdza najpierw strone internetowa. Dlatego wazne jest, aby wyglądala profesjonalnie, zawierala wszelkie istotne informacje, ladowala sie szybko i byla dostepna na kazdym urzadzeniu.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Obsluga Klientow z Koszalina i Pomorza Srodkowego
              </h2>
              <p className="text-muted-foreground mb-4">
                Fotz Studio pracuje z Poznania. Zdalnie możemy obsłużyć firmy z Koszalina, Słupska, Bytowa i całego Pomorza Środkowego. Przed startem analizujemy lokalny rynek, konkurencję i sezonowość, aby dopasować strategię do branży turystycznej i handlu.
              </p>
              <p className="text-muted-foreground mb-6">
                Jeżeli Twoja firma z Koszalina szuka agencji marketingowej, zapraszamy do kontaktu. Chętnie przeprowadzimy bezpłatną konsultacje i opowiemy o tym, jak mozemy pomoc Twojemu biznesowi wzrosnąć w sezonie i poza nim.
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
