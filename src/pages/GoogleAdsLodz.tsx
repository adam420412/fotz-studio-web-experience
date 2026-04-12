import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Target,
  BarChart3,
  Users,
  Award,
  TrendingUp,
  AlertCircle,
  Zap,
  Zap as Search,
  ShoppingCart,
  Globe,
  MessageSquare,
  Video,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

const adTypes = [
  {
    icon: Search,
    title: "Search Ads",
    description: "Reklamy w wynikach Google. Targeting na intent — osoba szuka Twojego produktu / usługi. Najwyższy ROAS dla e-commerce i usług."
  },
  {
    icon: ShoppingCart,
    title: "Shopping Ads",
    description: "Katalog produktów z ceną i zdjęciem. Dla e-commerce i Allegro. Feed z produktami bezpośrednio w wynikach Google."
  },
  {
    icon: Globe,
    title: "Display Ads",
    description: "Retargeting i branding na 2 mln witryn. Polecam dla budowania świadomości marki i retargeting w Low Funnel."
  },
  {
    icon: Video,
    title: "YouTube Ads",
    description: "Pre-roll i mid-roll reklamy na YouTube. Najlepsze dla branding, awareness, wideo produktowe."
  },
  {
    icon: MessageSquare,
    title: "Performance Max",
    description: "Kampania AI, automatycznie testująca Search, Display, YouTube, Shopping jednocześnie. Dla Tych co chcą zautomatyzować kampanię."
  },
  {
    icon: FileText,
    title: "Pmax + Local Services",
    description: "Local Services Ads dla usług (instalatorzy, fachowcy). Widoczność w Google Maps + wyszukiwarce. CPL zwykle 20-50 zł."
  }
];

const procesSteps = [
  {
    number: 1,
    title: "Audyt słów kluczowych",
    description: "Analizujemy które słowa kluczowe wyszukują mieszkańcy Łodzi — intent, kompetycja, CPL. Budujemy słownik dla Twojej branży."
  },
  {
    number: 2,
    title: "Strategia kampanii",
    description: "Segmentacja po słowach kluczowych — High Intent (gotowy kupić) vs Low Intent (badamy rynek). Priorytety budżetu."
  },
  {
    number: 3,
    title: "Copywriting i landing page",
    description: "Piszemy ad copy który konwertuje. Testy headlines, description, CTA. Landing page optymalizujemy pod conversion rate (minimalne 5% to cel)."
  },
  {
    number: 4,
    title: "Wdrożenie i bid management",
    description: "Konfiguracja kampanii w Google Ads. Smart Bidding (maksymalizacja konwersji) vs Manual CPC. Tracking konwersji — pixel, GTag, API."
  },
  {
    number: 5,
    title: "Optymalizacja i scaling",
    description: "Wylączamy słowa kluczowe które nie konwertują. Zwiększamy bid na High Intent keywords. Raport co tydzień — KPL, ROAS, impression share."
  }
];

const pricingPlans = [
  {
    name: "START",
    price: "400",
    description: "Dla firm testujących Google Ads",
    features: [
      "1-2 kampanie Search",
      "Audit słów kluczowych",
      "Smart Bidding",
      "Conversion tracking",
      "Raport miesięczny",
      "Email support"
    ]
  },
  {
    name: "GROWTH",
    price: "1 200",
    description: "Dla firm skalujących sprzedaż",
    features: [
      "3-5 kampanii Search",
      "Shopping Ads (e-commerce)",
      "Retargeting Display",
      "Bid management codziennie",
      "A/B testing ad copy",
      "Raport tygodniowy",
      "2 konsultacje/miesiąc"
    ]
  },
  {
    name: "PREMIUM",
    price: "2 500",
    description: "Kampanie 10k+ PLN/mies budżetu",
    features: [
      "Pełny zakres kampanii (Search, Shopping, Display, YouTube, Pmax)",
      "Strategia multi-channel",
      "Keyword research niszy",
      "Professional copywriting",
      "Landing page optimization",
      "Conversion API + pixel",
      "Raport zaawansowany + video call",
      "Dedykowany account manager",
      "Monthly strategy review"
    ]
  }
];

const industries = [
  {
    name: "E-commerce",
    desc: "Sprzedaż online produktów. Shopping Ads pokazują ceny i zdjęcia — highest intent. Google Merchant Center integracja, feed produktów. ROAS 4-6x dla sklepów internetowych."
  },
  {
    name: "Usługi lokalne",
    desc: "Instalatorzy, elektrycy, hydraulicy w Łodzi. Local Services Ads — bezpośrednio w Google. Geo-targeting Łódź. CPL 20-50 zł. Trusted badge od Google."
  },
  {
    name: "Medycyna i zdrowie",
    desc: "Kliniki, gabinety, lekarze w Łodzi. Search Ads do umówienia wizyt. Local Services dla stomatologów, psychologów. Landing page umów wizytę (HIPAA compliant)."
  },
  {
    name: "Nieruchomości",
    desc: "Agencje nieruchomości, deweloperzy w Łodzi. Search Ads na brand + properties (Manufaktura, Widzewska, Śródmieście). Display retargeting ofert na życzenie klientów."
  },
  {
    name: "SaaS i B2B",
    desc: "Oprogramowanie, rozwiązania dla biznesu. Search Ads na intent (jak wybrać software, porównianie). Lead Ads do trials. YouTube for explainers. CPL 50-200 zł / lead."
  },
  {
    name: "Edukacja",
    desc: "Szkoły, kursy online, platformy e-learning w Łodzi. Search Ads na program + promocje. Display retargeting dla warm leads. YouTube — wirtualne spacery, nagrania egzaminów."
  }
];

const faqItems = [
  {
    question: "Ile kosztuje Google Ads w Łodzi?",
    answer: "Obsługa agencji od 400 PLN/mies dla kampanii testowych, do 2500 PLN dla premium. Osobnie — budżet na same reklamy od 500 PLN/dzień dla lokalnych usług, do 10 000+ PLN/dzień dla e-commerce. Łącznie: 1500-15 000 PLN/mies w zależności od branży i celów."
  },
  {
    question: "Jak szybko widzę rezultaty Google Ads?",
    answer: "Reklamy live w Google w ciągu 1-2 godzin (google Review przed puszczeniem). Pierwsze kliknięcia i impresje w ciągu 3-4 godzin. Pierwsze konwersje zwykle 24-48 godzin (zależy od conversion rate strony). Wiarygodne dane do optymalizacji po 7-14 dni. Dlatego testujemy minimum 2 tygodnie przed skalowaniem budżetu."
  },
  {
    question: "Czym Search Ads różni się od Facebook Ads?",
    answer: "Google Ads = intent (osoba aktywnie szuka). Facebook Ads = audience (budujemy świadomość). Dla sprzedaży szybkiej — Google Ads (wysokie intent). Dla branding — Facebook (reach + retargeting). Ideał to kombinacja: Google Ads (conversion), Facebook (awareness + retargeting). CPL na Google zwykle wyższy ale conversion rate lepszy."
  },
  {
    question: "Czy powinienem zacząć od Search czy Shopping?",
    answer: "Jeśli jesteś e-commerce — Shopping Ads. Pokazują zdjęcie + cena + review, najwyższy CTR. Search Ads potem do retargeting (osoba zobaczyła Twój produkt ale nie kupiła). Jeśli jesteś usługa/B2B — Search Ads. Targetuj intent — keywords które ludzie wpisują szukając rozwiązania. Shopping Ads tylko dla e-commerce z feed produktów."
  },
  {
    question: "Czy Łódź to dobry rynek na Google Ads?",
    answer: "Tak. Łódź ma 770 tys. mieszkańców, trzecie miasto Polska. Rosnący sektor e-commerce (Manufaktura, nowe brownfieldy). CPL zwykle taniej niż Warszawa. Mniejsza konkurencja — łatwiej osiągnąć TOP 3 reklam. Równocześnie jest wystarczająco dużo zapytań Google do uzasadnienia inwestycji w kampanie."
  },
  {
    question: "Co to jest Quality Score i jak wpływa na koszty?",
    answer: "Quality Score — ocena Google dla Twojej reklamy (1-10). Zależy od: CTR (procent kliknięć), relevance (czy ad copy match keyword), landing page experience (szybkość, UX, mobile). Quality Score 8-10: CPC niższy o 30-50%. Quality Score 3-5: CPC wyższy o 50-100%. Nasz job to optymalizować Quality Score — testowanie ad copy, landing page design, keyword selection."
  },
  {
    question: "Czy mogę sam zarządzać Google Ads bez agencji?",
    answer: "Możesz, ale: (1) musisz nauczyć się jak wybierać słowa kluczowe, (2) pisać ad copy (wymaga testów), (3) optymalizować bid strategy. Większość firm tracą pieniądze bo wybierają słabe keywords lub nieoptymalne CPA. Agencja przyspiesza procent 5-10x — nasi klienci widzą resultaty w 48h zamiast czekać miesiąc. Koszt agencji (400-2500 PLN/mies) zwraca się przez lepszy ROAS w ciągu pierwszych 2-3 tygodni."
  },
  {
    question: "Czy Conversion API jest konieczna?",
    answer: "Dla e-commerce — zdecydowanie tak. Pixel + Conversion API razem to 50% szybsza optymalizacja. API wysyła dane offline do Google (z CRM, sklepu) — Google szybciej uczy się które leady konwertują. Bez Conversion API — tracimy dane o offline konwersjach (telefon, wizyta). Dla B2B i usług — bardzo polecam. Setup zajmuje 2-3 dni ale zwraca się szybko."
  }
];

const localContext = [
  {
    title: "Łódź — trzecie miasto Polski",
    desc: "770 tys. mieszkańców. Trzecie pod względem liczby ludności, drugie pod względem powierzchni. To oznacza wystarczająco dużo potencjalnych klientów do kampanii Search, Shopping i Display."
  },
  {
    title: "Manufaktura — heart of commerce",
    desc: "Manufaktura — arty-shopping center. Nowe brownifieldy. Rozwój e-commerce i retail. Firmy tutaj szukają ruchu na stronie, leadów, sprzedaży online. Google Ads idealny dla Manufaktury-based biznesu."
  },
  {
    title: "Była stolica tekstyliów",
    desc: "Łódź ma bogatą historię przemysłu tekstylnego. Dziś fabryki stały się lofty, biura, galerie. Sektor kreatywny i tech rosnący. Tych firm potrzebują Search Ads i LinkedIn (B2B)."
  },
  {
    title: "E-commerce hub",
    desc: "Łódź to rosnący ośrodek e-commerce. Magazyny, logistyka, fulfillment. Sklepy online potrzebują traffic — Shopping Ads + Search Ads do sklepów internetowych — roi 4-6x."
  }
];

export default function GoogleAdsLodz() {
  return (
    <Layout>
      <SEOHead
        title="Agencja Google Ads Łódź — kampanie reklamowe dla firm | Fotz.pl"
        description="Google Ads Łódź — agencja certyfikowana Fotz.pl. Kampanie od 400 zł/mies., wyniki od 24-48h. Bezpłatna konsultacja!"
        canonicalUrl="https://fotz.pl/performance-marketing/google-ads/lodz"
      />
      <ServiceSchema
        name="Kampanie Google Ads Łódź"
        description="Agencja Google Ads (Search, Shopping, Display, YouTube, Performance Max) w Łodzi. Kampanie do sprzedaży, leadów i branding. Conversion tracking, optimization codziennie. Od 400 PLN/mies."
        provider="Fotz Studio"
        areaServed="Lodz"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Performance Marketing", url: "https://fotz.pl/performance-marketing" },
          { name: "Google Ads Łódź", url: "https://fotz.pl/performance-marketing/google-ads/lodz" }
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <PageBreadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Performance Marketing", href: "/performance-marketing" },
                  { label: "Google Ads Łódź", href: "/performance-marketing/google-ads/lodz" }
                ]}
              />
            </div>

            <div className="mt-8 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-primary" /> Łódź, Łódzkie
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Google Ads Łódź
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kampanie Google Ads (Search, Shopping, Display, YouTube, Performance Max) do sprzedaży, leadów i brandingu. Konwersje tracking, optymalizacja codziennie. ROAS 3-6x dla e-commerce.
            </p>

            <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Od 400 PLN/mies obsługi agencji. Certyfikowani specjaliści. Wyniki od 24-48 godzin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/kontakt">
                  Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz nasze kampanie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/30 border-y border-border/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "4.2x", label: "średni ROAS dla e-commerce" },
              { value: "24-48h", label: "czas do pierwszych konwersji" },
              { value: "80+", label: "kampanii dla Łodzi i okolic" },
              { value: "4.9/5", label: "średnia ocen klientów" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Łódź Context */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Łódź — rynek i specyfika{" "}
                <span className="text-gradient">dla kampanii Google</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Łódź to trzecie miasto Polski, były hub tekstylny, dziś rosnący sektor e-commerce i tech. Idealny rynek dla kampanii performance marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {localContext.map((item, i) => (
                <FadeInView key={i}>
                  <div className="p-6 rounded-2xl border border-border/40 bg-background">
                    <h3 className="font-heading font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Google Ads */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dlaczego Google Ads w{" "}
                <span className="text-gradient">Łodzi?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Google Search — najwyższa intent. Osoba wpisuje w Google szukając dokładnie tego co sprzedajesz. Dla e-commerce — Shopping Ads bezpośrednio w wynikach wyszukiwania.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Najwyższy intent",
                  desc: "Google Search — osoba szuka TERAZ. Wysokość zaangażenia, szybka konwersja. Najwyższy ROAS spośród wszystkich kanałów."
                },
                {
                  icon: TrendingUp,
                  title: "Skalowanie na życzenie",
                  desc: "Zwiększasz budżet — więcej impressions, więcej kliknięć. Algorytm Google przystosowuje się automatycznie (Smart Bidding)."
                },
                {
                  icon: BarChart3,
                  title: "Pełny conversion tracking",
                  desc: "Google Analytics 4 + Conversion API pokazuje dokładnie co się konwertuje. Codzienne optymalizacje na bazie danych."
                },
                {
                  icon: Users,
                  title: "Łódź — dobry CPL",
                  desc: "Koszt konwersji zwykle taniej niż Warszawa czy Kraków. Mniejsza konkurencja = lepszy ROI dla kampanii."
                },
                {
                  icon: Award,
                  title: "Dla wszystkich branż",
                  desc: "Search Ads dla usług (lekarze, instalatorzy). Shopping dla e-commerce. Local Services dla fachowców. YouTube dla branding."
                },
                {
                  icon: Zap,
                  title: "Agencja certyfikowana",
                  desc: "Google Partner. Dostęp do beta features, support techniczny od Google. Account manager dedykowany dla Ciebie."
                }
              ].map((item, i) => (
                <FadeInView key={i}>
                  <div className="p-6 rounded-2xl border border-border/40 bg-background flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ad Types */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Rodzaje kampanii Google Ads{" "}
                <span className="text-gradient">w naszej ofercie</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Od Search Ads na intent, przez Shopping dla e-commerce, do retargeting Display i Video YouTube.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adTypes.map((s, i) => (
                <FadeInView key={i}>
                  <div className="p-6 rounded-2xl bg-background border border-border/40 hover:border-primary/30 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                5-krokowy proces kampanii{" "}
                <span className="text-gradient">Google Ads</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Od research słów kluczowych do skalowania — jak pracujemy nad Twoją kampanią.
              </p>
            </div>

            <div className="space-y-6">
              {procesSteps.map((step, i) => (
                <FadeInView key={i}>
                  <div className="p-8 rounded-2xl border border-border/40 bg-background">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-heading font-bold text-primary">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold mb-2 text-lg">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Pakiety Google Ads{" "}
                <span className="text-gradient">dla Łodzi</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trzy pakiety obsługi agencji. Budżet na reklamy ustawiasz osobno. Wszystkie zawierają wstępną konsultację i tracking conversion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((pkg, i) => (
                <FadeInView key={i}>
                  <div className="rounded-2xl border border-border/40 bg-card/20 overflow-hidden flex flex-col">
                    <div className="p-6 pb-4">
                      <h3 className="font-heading font-bold text-xl mb-2">{pkg.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-heading font-bold text-primary">{pkg.price}</span>
                        <span className="text-muted-foreground"> zł/mies</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </div>
                    <div className="flex-1 px-6 py-4 space-y-3">
                      {pkg.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 pt-4">
                      <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90">
                        <Link to="/kontakt">
                          Zapytaj o cenę
                        </Link>
                      </Button>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Koszt kampanii osobno:</strong> Budżet na same reklamy ustawiasz sam. Minimum 500 PLN/dzień dla testów, 2000-10 000 PLN/dzień dla skalowania. Nasza agencja optymalizuje każde złoto, żeby uzyskać najwyższy ROAS i CPL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Branże które obsługujemy w{" "}
                <span className="text-gradient">Łodzi</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Od e-commerce i B2B, przez usługi lokalne, do edukacji i nieruchomości — każda branża inny rodzaj kampanii.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((item, i) => (
                <FadeInView key={i}>
                  <div className="p-6 rounded-2xl border border-border/40 bg-background">
                    <h3 className="font-heading font-semibold mb-3">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Najczęstsze pytania o Google Ads Łódź
              </h2>
              <p className="text-muted-foreground">
                Odpowiadamy na pytania o kampanie, targeting i optymalizacji.
              </p>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <FadeInView key={i}>
                  <div className="p-6 rounded-2xl border border-border/40 bg-background">
                    <h3 className="font-heading font-semibold mb-3 flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item.question}
                    </h3>
                    <p className="text-sm text-muted-foreground pl-7">{item.answer}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/90 to-[#0F3053]/90">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              Gotów zacząć kampanię Google Ads?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Bezpłatna konsultacja — omówisz słowa kluczowe, budżet i strategię z ekspertem Google Partner. Pierwsza kampania testowa w ciągu 48 godzin.
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary">
              <Link to="/kontakt">
                Zaplanuj konsultację <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
