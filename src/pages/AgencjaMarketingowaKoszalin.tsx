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
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Target,
  Smartphone,
  BarChart3,
  Globe,
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
    description: "Pozycjonowanie w Koszalinie i okolicach Pomorza Srodkowego. Dominacja w lokalnych wynikach Google i Google Maps dla firm turystycznych i handlowych.",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Zarzadzanie profilami na Facebooku, Instagramie i TikToku. Kampanie skierowane do turystow i lokalnych klientow z Koszalina.",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Facebook Ads",
    description: "Skuteczne kampanie reklamowe na Google i Meta. Targeting lokalny dla turystyki nadmorskiej - dochodzimy do turystow szukajacych ofert w Koszalinie.",
  },
  {
    icon: Building2,
    title: "Tworzenie Stron Internetowych",
    description: "Nowoczesne strony internetowe zoptymalizowane pod SEO i konwersje. Responsywne, szybkie, skuteczne dla hotelow, restauracji i usług turystycznych.",
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
    price: "od 1 499",
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
    price: "od 3 999",
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
    price: "od 7 999",
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
    question: "Dlaczego warto wybrac agencje marketingowa w Koszalinie?",
    answer: "Agencja marketingowa z Koszalina zna lokalny rynek Pomorza Srodkowego, rozumie konkurencje i specyfike biznesu turystycznego w regionie. Fotz Studio polacz profesjonalne uslugi z wiedza na temat preferencji turystow i mieszkancow Koszalina. Dla firm turystycznych, handlowych i uslugowych to idealne rozwiazanie - nie placisz za obcy zespol z duzego miasta, a dostajesz ekspertyz i zaangazowanie specjalisty znajacego rynek Koszalina.",
  },
  {
    question: "Jakie usługi oferuje agencja marketingowa dla Koszalina?",
    answer: "Oferujemy kompleksowe uslugi marketingowe: pozycjonowanie SEO w Koszalinie i okolicach, kampanie Google Ads i Facebook Ads, zarzadzanie social media (Facebook, Instagram, TikTok), tworzenie stron internetowych, content marketing, branding i design. Kazda usluge dostosowujemy do potrzeb firm turystycznych, handlu i uslug w regionie.",
  },
  {
    question: "Ile kosztuje kampania marketingowa dla firm z Koszalina?",
    answer: "Ceny zaczynaja sie od 1 499 zl za pakiet Start. Oferujemy trzy glowne pakiety: Start dla startupow i malych firm, Biznes dla sredních przedsiebiorstw (od 3 999 zl) i Premium dla duzych kampanii (od 7 999 zl). Przygotowujemy takze wyceny indywidualne dostosowane do Twoich potrzeb i budżetu.",
  },
  {
    question: "Jak działa SEO lokalne dla firm z Koszalina?",
    answer: "SEO lokalne to optymalizacja strony internetowej i profilu Google My Business pod wzgledem searchwołów zawierajacych Koszalin i Pomorze Srodkowe. Pomagamy firmom turyastycznym, hotelow i restauracji pojawiac sie wyzej w wynikach wyszukiwania dla zapa tan takich jak 'hotel Koszalin nad morza', 'restauracja Koszalin' czy 'imprezy nad morzem Koszalin'. To kieruje do Ciebie rzeczywistych turystow i klientow z okolic Koszalina.",
  },
  {
    question: "Jakie są wyzwania marketingowe dla Koszalina i turystyki nad morzem?",
    answer: "Glowne wyzwania to sezonowość turystyki (szczyt w lipocu-sierpniu), wysoki CPL w sezonie letnim, konkurencja z duzych portali turystycznych, konieczneość budowania wizerunku poza sezonem. Marketing musi byc dual - dla turystow latem i dla mieszkancow przez caly rok. Fotz Studio zna specyfike Koszalina i Pomorza Srodkowego - rynek uslug nadmorskich, handel i turystyka to nasze specjalnosci.",
  },
  {
    question: "Czy mogę anulowac wspolprace z agencja marketingowa?",
    answer: "Tak, umowy mozna anulowac. Zwykle wymagamy 30-dniowego okresu wypowiedzenia. Najbardziej efektywne kampanie to jednak te dlugoteminowe - rekomendujemy minimum 3-6 miesiacy wspolpracy, aby zaobserwowac solidne rezultaty, szczegolnie dla firm turystycznych sezonowych.",
  },
];

const stats = [
  { value: 200, suffix: "+", label: "Zadowolonych klientow" },
  { value: 15, suffix: "+", label: "Lat doswiadczenia" },
  { value: 500, suffix: "%", label: "Sredni ROI" },
  { value: 98, suffix: "%", label: "Retencja klientow" },
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

export default function AgencjaMarketingowaKoszalin() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Koszalin - SEO, Google Ads, Social Media"
          description="Agencja marketingowa w Koszalinie. Profesjonalne uslugi SEO lokalne, Google Ads, Facebook Ads, zarzadzanie social media i tworzenie stron dla firm…"
          canonical="https://fotz.pl/agencja-marketingowa/koszalin"
        keywords="agencja marketingowa koszalin, marketing internetowy koszalin, agencja reklamowa koszalin, seo koszalin"
        />

        <ServiceSchema
          name="Agencja Marketingowa Koszalin"
          description="Profesjonalne uslugi marketingowe dla firm w Koszalinie: SEO lokalne, kampanie reklamowe, social media marketing, tworzenie stron internetowych. Specjalizacja w turystyce nadmorskiej."
          areaServed="Koszalin"
        />
        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
            { name: "Koszalin", url: "https://fotz.pl/agencja-marketingowa/koszalin" },
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
                Agencja marketingowa w Koszalinie
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Agencja Marketingowa <br className="hidden md:block" />
                <span className="text-primary">Koszalin</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Fotz Studio to profesjonalna agencja marketingowa w Koszalinie. Pomagamy firmom turystycznym, handlowym i uslugom wzrostu online poprzez SEO lokalne, kampanie Google Ads, social media marketing i tworzenie stron internetowych.
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

        {/* Stats Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <StatCounter {...stat} />
                </div>
              ))}
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
                Poznajcie przyczyny, dla ktorych firmy z Koszalina wybieraja nas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Doswiadczenie w marketingu turystycznym",
                  desc: "Rozumiemy sezonowość turystyki nadmorskiej. Kampanie skalowane pod szczyty sezonu, content dostrojony pod turystow oraz mieszkancow Koszalina.",
                },
                {
                  icon: Award,
                  title: "Specjalisci Pomorza Srodkowego",
                  desc: "Znamy specyfike regionu - turystyka nadmorska, handel, uslugi gastronomiczne. Dostosowujemy strategie do branzy i rynku lokalnego.",
                },
                {
                  icon: Star,
                  title: "Dedykowany ekspert projektu",
                  desc: "Znajacy specyfike Koszalina, sezonowość turystyki nadmorskiej, konkurencje lokalna. Stały kontakt, nie rotacja juniorow.",
                },
                {
                  icon: Globe,
                  title: "Strategia turystyki nad morzem",
                  desc: "Koszalin to magnes turystyki - plaże, morze, przyrodnicze atrakcje. Znamy anglojęzyczne kampanie dla turystow zagranicznych i SEO dla turystyki.",
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
                Pakiety i cenniki
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wybierz pakiet dostosowany do potrzeb Twojej firmy
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

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary">
                        {pkg.price}
                        <span className="text-base text-muted-foreground ml-1">
                          PLN/mies.
                        </span>
                      </div>
                    </div>

                    <Button asChild className="w-full mb-8">
                      <Link to="/kontakt">Wybieram ten pakiet</Link>
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
                Fotz Studio to profesjonalna agencja marketingowa obsługujaca firmy z Koszalina i Pomorza Srodkowego. Specjalizujemy sie w SEO lokalnym, kampaniach Google Ads, Facebook Ads i zarzadzaniu social media dla biznesu turystycznego, handlowego i uslugowego.
              </p>
              <p className="text-muted-foreground mb-6">
                Koszalin to centrum turystyki nadmorskiej Pomorza Srodkowego - co roku miliony turystow szuka noclegów, restauracji i atrakcji turystycznych w regionie. Dla firm turystycznych, hotelow i restauracji SEO lokalne to najskuteczniejszy sposób na znalezienie nowych klientow. Gdy ktos w Koszalinie lub z zewnatrz szuka Twojej uslugi, chce znalezc cos blisko plaży i w dobrym miejscu. My pomagamy firmom pojawiac sie wyzej w wynikach wyszukiwania dla zapa tan zawierajacych Koszalin.
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
                Zarzadzanie social media to zdecydowanie najskuteczniejszy sposob na budowanie relacji z klientami i turystami. Facebook i Instagram pozwalaja Ci na bezposrednie dotarcie do osób z Koszalina i turystow, pokazanie Twojej osobowosci biznesu i zbudowanie lojalnosci.
              </p>
              <p className="text-muted-foreground mb-6">
                Zajmujemy sie tworzeniem postow, zarzadzaniem komentarzami, respondowaniem na wiadomosci i tworzeniem kampanii promocyjnych na Facebooku i Instagramie. Wszystko dostosowane do specyfiki Twojej branzy turystycznej i celu biznesowego.
              </p>

              <h2 className="text-2xl font-heading font-bold mb-6">
                Kampanie Google Ads i Facebook Ads dla Koszalina
              </h2>
              <p className="text-muted-foreground mb-4">
                Google Ads i Facebook Ads to platne kampanie reklamowe, które pozwalaja szybko dotrzec do nowych klientow i turystow. W Google Ads pojawaiasz sie na szczycie wynikow wyszukiwania dla wybranych slow kluczowych. Na Facebooku i Instagramie mozesz pokazywac reklamy do uzytkownikow spelniajacych konkretne kryteria (wiek, płec, zainteresowania, lokalizacja).
              </p>
              <p className="text-muted-foreground mb-6">
                Dla firm turystycznych z Koszalina kampanie lokalnie ukierunkowane na mieszkancow Koszalina oraz turystow z Polski i zagranicy daja swietne rezultaty. Mozemy optymalizowac kampanie pod wzgledem geografii i sezonowosci - wiekszy budzet w sezonie (lipiec-sierpien) i mniejszy w off-sezonie.
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
                Fotz Studio pracuje z firmami z Koszalina, ale takze z Slupska, Bytowa, Mysliborza i całego Pomorza Srodkowego. Dobrze znamy lokalny rynek turystyki nadmorskiej, konkurencje i potrzeby biznesu w kazdym z tych miast. To pozwala nam na tworzenie strategii dedykowanych i skutecznych dla branzy turystycznej i handlu.
              </p>
              <p className="text-muted-foreground mb-6">
                Jezeli Twoja firma szuka profesjonalnej agencji marketingowej w Koszalinie, zapraszamy do kontaktu. Chętnie przeprowadzimy bezpłatną konsultacje i opowiemy o tym, jak mozemy pomoc Twojemu biznesowi wzrosnąć w sezonie i poza nim.
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
