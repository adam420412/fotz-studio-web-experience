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
    description: "Reklamy w wynikach Google. Targeting na intent — osoba szuka Twojego produktu / usługi. Sprawdza się w e-commerce i usługach."
  },
  {
    icon: ShoppingCart,
    title: "Shopping Ads",
    description: "Katalog produktów z ceną i zdjęciem. Dla e-commerce i Allegro. Feed z produktami bezpośrednio w wynikach Google."
  },
  {
    icon: Globe,
    title: "Display Ads",
    description: "Retargeting i branding w sieci reklamowej Google. Polecam dla budowania świadomości marki i retargeting w Low Funnel."
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
    title: "Kampanie lokalne",
    description: "Kampanie dla usług lokalnych (instalatorzy, fachowcy). Widoczność w Google Maps i wyszukiwarce dla osób z Łodzi i okolic."
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
    description: "Piszemy ad copy który konwertuje. Testy headlines, description, CTA. Landing page optymalizujemy pod konwersję, a cele ustalamy po analizie danych z Twojej strony."
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

const industries = [
  {
    name: "E-commerce",
    desc: "Sprzedaż online produktów. Shopping Ads pokazują ceny i zdjęcia — highest intent. Google Merchant Center integracja, feed produktów."
  },
  {
    name: "Usługi lokalne",
    desc: "Instalatorzy, elektrycy, hydraulicy w Łodzi. Kampanie lokalne w wyszukiwarce i Mapach Google. Geo-targeting Łódź."
  },
  {
    name: "Medycyna i zdrowie",
    desc: "Kliniki, gabinety, lekarze w Łodzi. Search Ads do umówienia wizyt. Kampanie lokalne dla stomatologów, psychologów. Landing page z formularzem umówienia wizyty."
  },
  {
    name: "Nieruchomości",
    desc: "Agencje nieruchomości, deweloperzy w Łodzi. Search Ads na brand + properties (Manufaktura, Widzewska, Śródmieście). Display retargeting ofert na życzenie klientów."
  },
  {
    name: "SaaS i B2B",
    desc: "Oprogramowanie, rozwiązania dla biznesu. Search Ads na intent (jak wybrać software, porównianie). Lead Ads do trials. YouTube for explainers. Koszt leada zależy od niszy i oferty."
  },
  {
    name: "Edukacja",
    desc: "Szkoły, kursy online, platformy e-learning w Łodzi. Search Ads na program + promocje. Display retargeting dla warm leads. YouTube — wirtualne spacery, nagrania egzaminów."
  }
];

const faqItems = [
  {
    question: "Ile kosztuje Google Ads w Łodzi?",
    answer: "Nie podajemy stałych cen ani pakietów. Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie i rodzajach kampanii, konkurencji w branży, raportowaniu i potrzebie przygotowania kreacji lub landing page. Budżet na same reklamy płacisz bezpośrednio Google, zawsze osobno od naszego wynagrodzenia, i to Ty decydujesz o jego wysokości."
  },
  {
    question: "Jak szybko widzę rezultaty Google Ads?",
    answer: "Reklamy pojawiają się w Google po weryfikacji przez system, zwykle krótko po uruchomieniu. Kiedy przyjdą pierwsze konwersje i wiarygodne dane do optymalizacji, zależy od budżetu, branży i strony docelowej, dlatego nie obiecujemy sztywnych terminów. Kampanię testujemy, zanim zwiększymy budżet."
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
    answer: "Łódź to jedno z największych miast w Polsce, z dużą liczbą lokalnych zapytań w Google. Czy kampania się opłaci i jak duża jest konkurencja w Twojej branży, sprawdzamy w analizie słów kluczowych przed startem. Nie obiecujemy konkretnej pozycji reklamy."
  },
  {
    question: "Co to jest Quality Score i jak wpływa na koszty?",
    answer: "Quality Score — ocena Google dla Twojej reklamy (1-10). Zależy od: CTR (procent kliknięć), relevance (czy ad copy match keyword), landing page experience (szybkość, UX, mobile). Wyższy Quality Score zwykle obniża CPC, niższy go podnosi. Nasz job to optymalizować Quality Score — testowanie ad copy, landing page design, keyword selection."
  },
  {
    question: "Czy mogę sam zarządzać Google Ads bez agencji?",
    answer: "Możesz, ale: (1) musisz nauczyć się jak wybierać słowa kluczowe, (2) pisać ad copy (wymaga testów), (3) optymalizować bid strategy. Częsty problem to słabo dobrane słowa kluczowe i brak poprawnego mierzenia konwersji. Agencja oszczędza Ci czas na naukę i testy, a o tym, czy obsługa się opłaca, decydują dane z Twojego konta."
  },
  {
    question: "Czy Conversion API jest konieczna?",
    answer: "Dla e-commerce — zdecydowanie tak. Tag + import konwersji offline daje algorytmowi więcej danych do optymalizacji. Dane offline do Google (z CRM, sklepu) — Google szybciej uczy się które leady konwertują. Bez Conversion API — tracimy dane o offline konwersjach (telefon, wizyta). Dla B2B i usług — bardzo polecam. Czas wdrożenia zależy od Twojego CRM i sklepu."
  }
];

const localContext = [
  {
    title: "Łódź — duży rynek lokalny",
    desc: "Jedno z największych miast w Polsce. Dużo lokalnych zapytań w Google, co daje pole do kampanii Search, Shopping i Display."
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
    desc: "Łódź to rosnący ośrodek e-commerce. Magazyny, logistyka, fulfillment. Sklepy online potrzebują traffic — Shopping Ads + Search Ads do sklepów internetowych."
  }
];

export default function GoogleAdsLodz() {
  return (
    <Layout>
      <SEOHead
        title="Agencja Google Ads Łódź — kampanie reklamowe dla firm | Fotz.pl"
        description="Google Ads Łódź — kampanie Fotz.pl dla firm z Łodzi, prowadzone zdalnie z Poznania. Wycena po rozmowie o zakresie. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/google-ads/lodz"
        keywords="google ads łódź, agencja google ads łódź, kampanie google ads łódź, reklamy google łódź, google ads dla firm łódź, sem łódź"
      />
      <ServiceSchema
        name="Kampanie Google Ads Łódź"
        description="Agencja Google Ads (Search, Shopping, Display, YouTube, Performance Max) w Łodzi. Kampanie do sprzedaży, leadów i branding. Conversion tracking, optimization codziennie. Wycena po rozmowie o zakresie."
        provider="Fotz Studio"
        areaServed="Lodz"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
          { name: "Google Ads Łódź", url: "https://www.fotz-studio.pl/performance-marketing/google-ads/lodz" }
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
                  { name: "Google Ads Łódź", url: "/performance-marketing/google-ads/lodz" }
                ]}/>
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
              Kampanie Google Ads (Search, Shopping, Display, YouTube, Performance Max) do sprzedaży, leadów i brandingu. Konwersje tracking, optymalizacja codziennie.
            </p>

            <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Pracujemy z Poznania, firmy z Łodzi obsługujemy zdalnie. Wycenę przygotowujemy po rozmowie o zakresie.
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
                Łódź to duże miasto, były hub tekstylny, dziś z rozwijającym się sektorem e-commerce i tech.
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
                  desc: "Google Search — osoba szuka TERAZ. Docierasz do osób, które aktywnie szukają Twojej oferty."
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
                  title: "Targetowanie na Łódź",
                  desc: "Kampanie kierujemy na Łódź i okolice. Koszt konwersji zależy od konkurencji w Twojej branży, dlatego sprawdzamy go przed startem."
                },
                {
                  icon: Award,
                  title: "Dla wszystkich branż",
                  desc: "Search Ads dla usług (lekarze, instalatorzy). Shopping dla e-commerce. Local Services dla fachowców. YouTube dla branding."
                },
                {
                  icon: Zap,
                  title: "Współpraca zdalna",
                  desc: "Pracujemy z Poznania, firmy z Łodzi obsługujemy zdalnie. Masz stały kontakt z osobą prowadzącą kampanię."
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
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Od czego zależy{" "}
                <span className="text-gradient">wycena</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nie mamy sztywnych pakietów. Wycenę obsługi przygotowujemy po rozmowie o zakresie i celach.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Liczba i rodzaje kampanii (Search, Shopping, Display, YouTube, Performance Max)",
                "Konkurencja na słowa kluczowe w Twojej branży",
                "Konfiguracja mierzenia konwersji i integracje (GA4, CRM, sklep)",
                "Częstotliwość raportów i konsultacji",
                "Potrzeba przygotowania tekstów, kreacji lub landing page",
              ].map((item, j) => (
                <div key={j} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/kontakt">Zapytaj o wycenę</Link>
              </Button>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Budżet reklamowy osobno:</strong> Budżet na same reklamy płacisz bezpośrednio Google i ustalasz jego wysokość sam. Jest zawsze oddzielny od wynagrodzenia agencji. Pomagamy dobrać go do celów i konkurencji w branży.
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
              Bezpłatna konsultacja — omówisz słowa kluczowe, budżet i strategię z osobą, która poprowadzi Twoją kampanię.
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
