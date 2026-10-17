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
    description: "Filmy w Feed, Stories i Reels. Dobrze sprawdzają się tam, gdzie produkt lub usługę trzeba pokazać w ruchu."
  },
  {
    icon: Megaphone,
    title: "Collection Ads",
    description: "Katalogi produktów bezpośrednio w Facebooku. Perfect dla e-commerce i sklepów online."
  },
  {
    icon: Users2,
    title: "Lead Ads",
    description: "Zbieranie leadów bez opuszczania Facebooka. Krótsza ścieżka kontaktu, przydatna m.in. dla usług B2B."
  },
  {
    icon: Filter,
    title: "Dynamic Ads",
    description: "Automatyczna optymalizacja kreatyw na podstawie zdanych danych produktowych. Retargeting na steroidy."
  },
  {
    icon: Smartphone,
    title: "Messenger Ads",
    description: "Kampanie kierujące do rozmowy w Messengerze. Dla chatbotów i sprzedaży konwersacyjnej."
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
    description: "Konfigurujemy kampanię w Ads Manager. Ustawiamy pixel, conversion tracking i budżet dzienny. Szczególnie uważnie monitorujemy pierwsze dni kampanii."
  },
  {
    number: 5,
    title: "Optymalizacja i skalowanie",
    description: "Codzienne monitorowanie ROAS, CPL, CTR. Wyłączamy słabe grupy, skalujemy budżet na zwycięzców. Raport co tydzień."
  }
];

const pricingFactors = [
  "Liczba kampanii i platform (Facebook, Instagram, Messenger)",
  "Cel: sprzedaż w sklepie, leady, ruch czy budowanie rozpoznawalności",
  "Liczba i rodzaj kreacji — grafiki, wideo, warianty do testów A/B",
  "Stan konfiguracji: pixel, Conversion API, katalog produktów",
  "Częstotliwość raportowania i konsultacji",
];

const industries = [
  {
    name: "E-commerce",
    desc: "Sprzedaż produktów online na Amazon, Allegro, własny sklep. Dynamic Ads pokazują produkty, które użytkownik wcześniej oglądał."
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
    answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie kampanii, celach, kreacjach i stanie konfiguracji konta. Budżet reklamowy płacisz Mecie osobno i to Ty decydujesz o jego wysokości — pomagamy go dobrać do celu i skali działań."
  },
  {
    question: "Jak szybko widzę rezultaty Facebook Ads?",
    answer: "Pierwsze dane o wyświetleniach i kliknięciach pojawiają się zwykle krótko po starcie, ale tempo pojawiania się konwersji zależy od branży, oferty, budżetu i jakości strony. Nie obiecujemy konkretnego terminu efektów — zanim zdecydujemy o skalowaniu budżetu, dajemy kampanii czas na zebranie danych i fazę uczenia algorytmu."
  },
  {
    question: "Dlaczego Facebook Ads w Wrocławiu są lepsze niż Google Ads?",
    answer: "Nie są lepsze — służą innym celom. Google Ads odpowiada na intencję (ktoś szuka rozwiązania). Facebook Ads docierają do odbiorców po zainteresowaniach i zachowaniach, budują świadomość i retargeting. Dla e-commerce przydatne są Dynamic Ads, dla usług Lead Ads, dla budowania marki wideo. Który kanał wypadnie korzystniej kosztowo, zależy od branży i oferty — często najlepiej działają razem."
  },
  {
    question: "Czy mogę uruchomić kampanię bez piksela?",
    answer: "Technicznie tak, ale to strata pieniędzy. Pixel Facebook (konwersja tracking) pokazuje co się konwertuje. Bez niego reklamujemy na ślepo. Pixel instaluje się kodem JavaScript w <head> strony lub przez Google Tag Manager. Conversion API (lepszy niż pixel) łączy dane offline (z CRM, sklepu) z Facebookiem — to najlepsze rozwiązanie dla B2B i SaaS."
  },
  {
    question: "Czy lokalizacja Wrocławia wpływa na ceny kampanii?",
    answer: "Koszt wyświetleń (CPM) zależy od konkurencji o tę samą grupę odbiorców, sezonu, branży i jakości kreacji, a nie tylko od miasta. Wrocław to duży rynek, więc zwykle jest wystarczająco wielu użytkowników do precyzyjnego targetowania. Realne stawki sprawdzamy w kampanii testowej."
  },
  {
    question: "Jakie metryki śledząc podczas kampanii?",
    answer: "ROAS (Return on Ad Spend) — klucz. Na każde 1 PLN wydanego w reklamy, ile przychodu? Docelowy ROAS ustalamy indywidualnie na podstawie marży i modelu biznesowego. CPL (Cost Per Lead) — ile kosztuje jeden lead. CPC (Click Per Cost) — ile kosztuje jedno kliknięcie. CTR (Click Through Rate) — procent ludzi, którzy zobaczyli i kliknęli. Conversion Rate — jaki procent kliknięć zamienił się na konwersję. Frequency — ile razy średnio widział reklamy jeden użytkownik (powyżej 5 = ad fatigue, trzeba zmienić kreatyw)."
  },
  {
    question: "Czy kampania Facebook Ads do sprzedaży czy brandingu?",
    answer: "Obie rzeczy naraz, ale w różnych fazach. Awareness (kampanie discovery) — budujemy świadomość Twojej marki poprzez video i reach targeting. Consideration (retargeting) — pokazujemy konwersjom ludzi którzy odwiedzili stronę ale nie kupili. Conversion (dynamic ads) — zbieramy sprzedaż. Podział budżetu między etapy lejka ustalamy indywidualnie — zależy od celu, rozpoznawalności marki i wielkości grup do retargetingu."
  },
  {
    question: "Czy mogę sam uruchomić kampanię bez agencji?",
    answer: "Tak, ale: (1) Musisz nauczyć się segmentacji audience, (2) eksperymentować z kreatywami (A/B testing wymaga 2-3 tygodni), (3) codziennie optymalizować kampanie. Częsty problem to budżet wydawany na źle dobrane grupy odbiorców i słabe kreacje. Agencja wnosi gotowy proces testowania i optymalizacji, ale nie gwarantujemy konkretnego zwrotu — o opłacalności decydują oferta, strona i rynek."
  }
];

export default function FacebookAdsWroclaw() {
  return (
    <Layout>
      <SEOHead
        title="Agencja Facebook Ads Wrocław — reklamy Meta dla firm | Fotz.pl"
        description="Facebook Ads Wrocław ✓ Kampanie Meta Ads (Facebook, Instagram) dla firm z Wrocławia, prowadzone zdalnie z Poznania. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/facebook-ads/wroclaw"
        keywords="facebook ads wrocław, agencja facebook ads wrocław, kampanie facebook wrocław, reklamy facebook wrocław, meta ads wrocław, instagram ads wrocław"
      />
      <ServiceSchema
        name="Kampanie Facebook Ads Wrocław"
        description="Kampanie Meta Ads (Facebook, Instagram) dla firm z Wrocławia, prowadzone zdalnie z Poznania. Kampanie reklamowe do sprzedaży, leadów i brandingu. Tracking pixel, conversion API, bieżąca optymalizacja."
        provider="Fotz Studio"
        areaServed="Wroclaw"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
          { name: "Facebook Ads Wrocław", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads/wroclaw" }
        ]}/>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <PageBreadcrumbs items={[
                  { name: "Home", url: "/" },
                  { name: "Performance Marketing", url: "/performance-marketing" },
                  { name: "Facebook Ads Wrocław", url: "/performance-marketing/facebook-ads/wroclaw" }
                ]}/>
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
              Kampanie Meta Ads (Facebook, Instagram, Messenger) do sprzedaży, leadów i brandingu. Segmentacja precyzyjna, pixel tracking, bieżąca optymalizacja.
            </p>

            <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Pracujemy z Poznania, firmy z Wrocławia obsługujemy zdalnie. Wycenę przygotowujemy po rozmowie o zakresie.
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
                Facebook i Instagram pozwalają precyzyjnie dotrzeć do mieszkańców Wrocławia i okolic — zarówno w kampaniach sprzedażowych, jak i wizerunkowych.
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
                  desc: "Zaczynamy od kampanii testowej, a budżet zwiększamy dopiero tam, gdzie dane pokazują sens skalowania."
                },
                {
                  icon: BarChart3,
                  title: "Pełny tracking i ROAS",
                  desc: "Pixel i Conversion API pokazują, które reklamy prowadzą do konwersji. Regularne raporty i optymalizacja."
                },
                {
                  icon: Users,
                  title: "Retargeting zaawansowany",
                  desc: "Dynamic Ads — pokazujemy produkty, które użytkownik oglądał, oraz przypominamy o ofercie osobom, które odwiedziły stronę."
                },
                {
                  icon: Award,
                  title: "Targetowanie lokalne",
                  desc: "Kampanie zawężone do Wrocławia i okolic albo do wybranych dzielnic — budżet trafia do osób, które realnie mogą skorzystać z oferty."
                },
                {
                  icon: Zap,
                  title: "Kreacje z własnej produkcji",
                  desc: "Zdjęcia i wideo do reklam realizujemy we własnym zakresie — jako studio produkcyjne z Poznania. Samą kampanię prowadzimy zdalnie."
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
                Od czego zależy{" "}
                <span className="text-gradient">wycena?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wycenę obsługi przygotowujemy po rozmowie o zakresie. Bierzemy pod uwagę przede wszystkim:
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              {pricingFactors.map((factor, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{factor}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                <Link to="/kontakt">
                  Zapytaj o wycenę
                </Link>
              </Button>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Budżet reklamowy osobno:</strong> Budżet na same reklamy płacisz bezpośrednio Mecie i ustalasz go sam. Pomagamy dobrać go do celu i rozsądnie rozdzielić między testy a skalowanie.
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
                Kampanie planujemy pod specyfikę branży — od e-commerce, przez usługi B2B, po edukację i gastronomię.
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
              Bezpłatna konsultacja — omówisz cele, budżet i strategię. Termin startu kampanii ustalamy wspólnie po konsultacji.
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
