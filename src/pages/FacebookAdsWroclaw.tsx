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
  Image,
  Users2,
  Video,
  Megaphone,
  Filter,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";

const adTypes = [
  {
    icon: Image,
    title: "Image Ads",
    description: "Kampanie na pojedynczych obrazach. Idealne do budowania świadomości marki i reach."
  },
  {
    icon: Video,
    title: "Video Ads",
    description: "Filmy w Feed oraz Stories. Największy zaangażowanie użytkowników — do 70% większa konwersja."
  },
  {
    icon: Megaphone,
    title: "Collection Ads",
    description: "Katalogi produktów bezpośrednio w Facebooku. Perfect dla e-commerce i sklepów online."
  },
  {
    icon: Users2,
    title: "Lead Ads",
    description: "Zbieranie leadów bez opuszczania Facebooka. Niższy CPC, szybsza konwersja dla usług B2B."
  },
  {
    icon: Filter,
    title: "Dynamic Ads",
    description: "Automatyczna optymalizacja kreatyw na podstawie zdanych danych produktowych. Retargeting na steroidy."
  },
  {
    icon: Smartphone,
    title: "Messenger Ads",
    description: "Kampanie w Messengerze — najwyższy engagement rate. Dla chatbotów i sprzedaży konwersacyjnej."
  }
];

const procesSteps = [
  {
    number: 1,
    title: "Audyt i strategia",
    description: "Analizujemy Twoją markę, konkurentów i rynek wrocławski. Definiujemy cele kampanii — budowanie lead, sprzedaż, czy retargeting."
  },
  {
    number: 2,
    title: "Segmentacja odbiorców",
    description: "Identyfikujemy docelową audience — wiek, zainteresowania, zachowania online. Budujemy lookalike audience bazując na Twoich najlepszych klientach."
  },
  {
    number: 3,
    title: "Tworzenie kreatyw",
    description: "Projektujemy obrazy i filmy otoczenia. A/B testing kilku wariantów — copy, kolorystyka, call-to-action. Szybka identyfikacja zwycięzców."
  },
  {
    number: 4,
    title: "Wdrożenie kampanii",
    description: "Konfigurujemy kampanię w Ads Manager. Ustawiamy pixel retargeting, conversion tracking i daily budget. Live monitoring pierwszych 48 godzin."
  },
  {
    number: 5,
    title: "Optymalizacja i skalowanie",
    description: "Codzienne monitorowanie ROAS, CPL, CTR. Wyłączamy słabe grupy, skalujemy budżet na zwycięzców. Raport co tydzień."
  }
];

const pricingPlans = [
  {
    name: "START",
    price: "400",
    description: "Dla firm zaczynających kampanie na Meta",
    features: [
      "1 kampania testowa",
      "Segmentacja podstawowa",
      "Conversion tracking",
      "Raport miesięczny (ROAS, CPL)",
      "Email support"
    ]
  },
  {
    name: "GROWTH",
    price: "1 200",
    description: "Dla firm skalujących sprzedaż",
    features: [
      "3-5 kampanii jednocześnie",
      "Segmentacja zaawansowana",
      "A/B testing kreatyw",
      "Pixel i conversion API",
      "Raport tygodniowy",
      "2 konsultacje/miesiąc",
      "Optymalizacja codziennie"
    ]
  },
  {
    name: "PREMIUM",
    price: "2 500",
    description: "Kampanie o budżecie 10k+ PLN/mies",
    features: [
      "Nieograniczone kampanie",
      "Strategia custom na rynku wrocławskim",
      "Professional copywriting i design",
      "Conversion API + dynamic products",
      "Raport zaawansowany + video call",
      "Dedykowany account manager",
      "Priority optimization",
      "Event-based retargeting"
    ]
  }
];

const industries = [
  {
    name: "E-commerce",
    desc: "Sprzedaż produktów online na Amazon, Allegro, własny sklep. Dynamic Ads pokazują dokładnie to co oglądał użytkownik — 3-5x wyższy ROAS niż klasyczne kampanie."
  },
  {
    name: "Usługi (B2B)",
    desc: "Lead Ads do zbierania kontaktów. Firmy zarządzające projektami, agencje, doradztwo biznesowe. Targeting na decydentów biznesu w Wrocławiu."
  },
  {
    name: "Medycyna i zdrowie",
    desc: "Kliniki, gabinety, siłownie, salony. Targeting lokalny + retargeting odwiedzających stronę. Lead Ads do umówienia wizyt i konsultacji."
  },
  {
    name: "Nieruchomości",
    desc: "Agencje i deweloperzy Wrocławia. Collection Ads pokazują katalog ofert. Video Ads wirtualne spacery i obejrzenia. Budowanie zainteresowania przed odwiedzeniem biura."
  },
  {
    name: "Edukacja",
    desc: "Kursy online, szkoły językowe, platformy e-learningowe. Retargeting na kurs, targetowanie po interesach edukacyjnych. Conversion Ads do zapisów na darmowe webinary."
  },
  {
    name: "Restauracje i gastronomia",
    desc: "Kampanie sezonowe. Video menu i promocje. Geo-targeting do granic Wrocławia. Collection Ads z dostępnymi daniami. Lead Ads do rezerwacji stolika."
  }
];

const faqItems = [
  {
    question: "Ile kosztuje kampania Facebook Ads w Wrocławiu?",
    answer: "Od 400 PLN/mies dla testowych kampanii, przez 1200 PLN dla mid-market, do 2500+ PLN dla premium obsługi. To koszt obsługi agencji. Osobno dodajesz budżet na same reklamy — od 500 PLN/dzień dla lokalnych firm, do 10 000+ PLN dla e-commerce. Łącznie: 1500-15 000 PLN/mies w zależności od celów."
  },
  {
    question: "Jak szybko widzę rezultaty Facebook Ads?",
    answer: "Pierwsze dane o zaangażowaniu (impressions, clicks) w ciągu 1-2 godzin. Pierwsze konwersje (sprzedaż, leady) zwykle w ciągu 24-48 godzin. Pełne dane do optymalizacji uzyskujemy po 7 dni. Dlatego doporučamy testowanie na 2 tygodnie przed decyzją o skalowaniu budżetu."
  },
  {
    question: "Dlaczego Facebook Ads w Wrocławiu są lepsze niż Google Ads?",
    answer: "Inne cele. Google Ads targeting na intent (ktoś szuka rozwiązania). Facebook Ads targeting na audience (budujemy świadomość, budujemy retargeting). Dla e-commerce — Dynamic Ads na Facebooku dają 2-3x wyższy ROAS. Dla B2B i usług — Lead Ads zbierają leady taniej niż Google Ads (CPL 20-50 PLN vs 50-100 PLN). Dla branding — wideo na Facebook osiąga 10x większy reach za tę samą cenę."
  },
  {
    question: "Czy mogę uruchomić kampanię bez piksela?",
    answer: "Technicznie tak, ale to strata pieniędzy. Pixel Facebook (konwersja tracking) pokazuje co się konwertuje. Bez niego reklamujemy na ślepo. Pixel instaluje się w ciągu 5 minut — JavaScript kod w <head> strony lub przez Metę Tag Manager. Conversion API (lepszy niż pixel) łączy dane offline (z CRM, sklepu) z Facebookiem — to najlepsze rozwiązanie dla B2B i SaaS."
  },
  {
    question: "Czy lokalizacja Wrocławia wpływa na ceny kampanii?",
    answer: "Tak, ale pozytywnie. Wrocław ma mniejszą konkurencję w CPM (koszt tysiąca impressions) niż Warszawa czy Kraków — średnio 30-50% taniej. To oznacza że Twój budżet rozpracuje się dalej. Równocześnie Wrocław to duży rynek (770 tys. mieszkańców), więc jest wystarczająco użytkowników do targetowania. Ideał dla firm szukających szybkiego ROI na mniejszym budżecie."
  },
  {
    question: "Jakie metryki śledząc podczas kampanii?",
    answer: "ROAS (Return on Ad Spend) — klucz. Na każde 1 PLN wydanego w reklamy, ile przychodu? Docelowo ROAS 3-5x dla e-commerce, 1.5-3x dla usług. CPL (Cost Per Lead) — ile kosztuje jeden lead. CPC (Click Per Cost) — ile kosztuje jedno kliknięcie. CTR (Click Through Rate) — procent ludzi, którzy zobaczyli i kliknęli. Conversion Rate — jaki procent kliknięć zamienił się na konwersję. Frequency — ile razy średnio widział reklamy jeden użytkownik (powyżej 5 = ad fatigue, trzeba zmienić kreatyw)."
  },
  {
    question: "Czy kampania Facebook Ads do sprzedaży czy brandingu?",
    answer: "Obie rzeczy naraz, ale w różnych fazach. Awareness (kampanie discovery) — budujemy świadomość Twojej marki poprzez video i reach targeting. Consideration (retargeting) — pokazujemy konwersjom ludzi którzy odwiedzili stronę ale nie kupili. Conversion (dynamic ads) — zbieramy sprzedaż. Idealny funnel to: (1) 70% budżetu na awareness + consideration, (2) 30% budżetu na conversion i retargeting. Ta proporcja zmienia się w zależności od Twojego celu — dla sprzedaży może być 50/50."
  },
  {
    question: "Czy mogę sam uruchomić kampanię bez agencji?",
    answer: "Tak, ale: (1) Musisz nauczyć się segmentacji audience, (2) eksperymentować z kreatywami (A/B testing wymaga 2-3 tygodni), (3) codziennie optymalizować kampanie. Większość firm wydaje zbyt dużo na złe audience i słabe kreatywki. Agencja przyspiesza to 5-10x — nasi klienci widzą rezultaty w 48 godzin zamiast czekać tydzień. Koszt agencji (400-2500 PLN/mies) zwraca się przez lepszy ROAS w ciągu pierwszych 2-3 kampanii."
  }
];

export default function FacebookAdsWroclaw() {
  return (
    <Layout>
      <SEOHead
        title="Agencja Facebook Ads Wrocław — reklamy Meta dla firm | Fotz.pl"
        description="Facebook Ads Wrocław ✓ Kampanie Meta Ads (Facebook, Instagram) od 400 zł/mies. Certyfikowani specjaliści. Bezpłatna konsultacja!"
        canonicalUrl="https://fotz.pl/performance-marketing/facebook-ads/wroclaw"
        keywords="facebook ads wrocław, agencja facebook ads wrocław, kampanie facebook wrocław, reklamy facebook wrocław, meta ads wrocław, instagram ads wrocław"

        canonical="https://fotz.pl/performance-marketing/facebook-ads/wroclaw"
      />
      <ServiceSchema
        name="Kampanie Facebook Ads Wrocław"
        description="Agencja Meta Ads (Facebook, Instagram) w Wrocławiu. Kampanie reklamowe do sprzedaży, leadów i brandingu. Tracking pixel, conversion API, optymalizacja codziennie. Od 400 PLN/mies."
        provider="Fotz Studio"
        areaServed="Wroclaw"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Performance Marketing", url: "https://fotz.pl/performance-marketing" },
          { name: "Facebook Ads Wrocław", url: "https://fotz.pl/performance-marketing/facebook-ads/wroclaw" }
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
                  { label: "Facebook Ads Wrocław", href: "/performance-marketing/facebook-ads/wroclaw" }
                ]}
              />
            </div>

            <div className="mt-8 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-primary" /> Wrocław, Dolnośląskie
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Facebook Ads Wrocław — Reklamy Meta dla{" "}
              <span className="text-gradient">Twojej Firmy</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kampanie Meta Ads (Facebook, Instagram, Messenger) do sprzedaży, leadów i brandingu. Segmentacja precyzyjna, pixel tracking, optymalizacja codziennie. ROAS 3-5x dla e-commerce.
            </p>

            <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Od 400 PLN/mies obsługi agencji. Certyfikowani specjaliści. Pierwsze rezultaty w 24-48h.
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
              { value: "3.5x", label: "średni ROAS dla klientów e-commerce" },
              { value: "48h", label: "czas do pierwszych konwersji" },
              { value: "50+", label: "kampanii uruchomionych dla Wrocławia" },
              { value: "4.8/5", label: "średnia ocen klientów" }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Facebook Ads */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dlaczego Facebook Ads w{" "}
                <span className="text-gradient">Wrocławiu?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Facebook i Instagram to najefektywniejsze kanały do targetowania audience w Polsce. W Wrocławiu mamy 770 tys. użytkowników — baza do kampanii sprzedażowych i brandingowych.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Precyzyjna segmentacja audience",
                  desc: "Targeting po zainteresowaniach, demografii, zachowaniach online. Lookalike audience — reklama do ludzi podobnych do Twoich najlepszych klientów."
                },
                {
                  icon: TrendingUp,
                  title: "Szybkie skalowanie",
                  desc: "Kampanie testowe na 500 PLN, skalowanie do 5000-50 000 PLN/dzień. Algorytm Facebooka szybko uczy się co konwertuje."
                },
                {
                  icon: BarChart3,
                  title: "Pełny tracking i ROAS",
                  desc: "Pixel conversion tracking pokazuje dokładnie ile zarabiamy z każdej reklamy. Raportowanie codzienne + weekly optymalizacja."
                },
                {
                  icon: Users,
                  title: "Retargeting zaawansowany",
                  desc: "Dynamic Ads — pokazujemy dokładnie produkty które użytkownik oglądał. 5-10x wyższe ROAS niż awareness campaigns."
                },
                {
                  icon: Award,
                  title: "Competitive CPM w Wrocławiu",
                  desc: "Koszt tysiąca impressions 30-50% niższy niż w Warszawie czy Krakowie. Twój budżet rozpracuje się dalej."
                },
                {
                  icon: Zap,
                  title: "Agencja certyfikowana",
                  desc: "Facebook Partner. Dostęp do beta features, support bezpośredni od Facebooka. Account manager dedykowany dla Ciebie."
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Rodzaje kampanii Meta Ads{" "}
                <span className="text-gradient">w naszej ofercie</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Od prostych image ads, przez dynamiczne katalogi, do zaawansowanych Lead Ads do zbierania kontaktów.
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                5-krokowy proces kampanii{" "}
                <span className="text-gradient">Facebook Ads</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Od diagnozy do optymalizacji — jak prowadzimy Twoją kampanię.
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Pakiety Facebook Ads{" "}
                <span className="text-gradient">dla Wrocławia</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trzy pakiety obsługi agencji. Osobnie dodajesz budżet na same reklamy. Wszystkie pakiety z bezpłatną wstępną konsultacją.
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
                  <strong className="text-foreground">Koszt kampanii osobno:</strong> Budżet na same reklamy ustawiasz sam. Minimum 500 PLN/dzień dla testów, 2000-10 000 PLN/dzień dla skalowania. Nasza agencja optymalizuje każde złoto, żeby uzyskać najwyższy ROAS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Branże które obsługujemy w{" "}
                <span className="text-gradient">Wrocławiu</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Doświadczenie z każdą branżą — od e-commerce, przez usługi B2B, po edukację i gastronomię.
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Najczęstsze pytania o Facebook Ads Wrocław
              </h2>
              <p className="text-muted-foreground">
                Odpowiadamy na pytania o kampanie, tracking i optymalizacji.
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
              Gotów uruchomić kampanię Meta Ads?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Bezpłatna konsultacja — omówisz cele, budżet i strategię z ekspertem. Pierwsza kampania testowa w ciągu 48 godzin.
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
