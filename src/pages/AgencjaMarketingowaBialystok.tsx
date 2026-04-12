import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Globe,
  Target,
  Search,
  Rocket,
  BarChart3,
  Users,
  Award,
  Share2,
  Video,
  Palette,
  TrendingUp,
  AlertCircle,
  Star,
  Zap
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema } from "@/components/seo/StructuredData";

const services = [
  {
    icon: Globe,
    title: "Strony i sklepy internetowe",
    description: "Projektujemy i wdrażamy strony www oraz sklepy e-commerce dla firm z Białegostoku. Responsywne, szybkie, zoptymalizowane pod SEO i konwersję. Shopify, WooCommerce, Next.js — kompleksowe rozwiązania dla firm i e-commerce.",
    link: "/uslugi/strony-internetowe"
  },
  {
    icon: Search,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Białystok zwiększa widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla Białegostoku i rynku polskiego — niższa konkurencja niż w dużych miastach.",
    link: "/seo/pozycjonowanie"
  },
  {
    icon: Target,
    title: "Kampanie Google Ads i Meta Ads",
    description: "Zaawansowane kampanie marketingowe w Google Ads i Meta Ads. Konfiguracja, optymalizacja i skalowanie. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies. Wyniki sprzedażowe mierzone w leadach i konwersjach.",
    link: "/uslugi/google-ads"
  },
  {
    icon: Share2,
    title: "Social media marketing",
    description: "Agencja social media Białystok — obsługa Instagram, Facebook, LinkedIn i TikTok. Kreacje treści, harmonogram, kampanie zasięgowe i leadowe dla firm z Białegostoku i całej Polski.",
    link: "/social-media"
  },
  {
    icon: Video,
    title: "Produkcja wideo i foto",
    description: "Profesjonalne sesje fotograficzne, filmy produktowe i kreacje wideo na social media. Realizacje w Białymstoku i całej Polsce. Materiały graficzne i wideo gotowe do kampanii reklamowych.",
    link: "/uslugi/produkcja-filmow"
  },
  {
    icon: Palette,
    title: "Branding i identyfikacja wizualna",
    description: "Budujemy i rozwijamy Twój brand. Logo, brandbook, system identyfikacji wizualnej, materiały graficzne. Spójna identyfikacja wizualna Twojej marki przekłada się na wyższe ceny i lepsze konwersje.",
    link: "/uslugi/identyfikacja-wizualna"
  }
];

const chooseCriteria = [
  {
    icon: Award,
    title: "Doświadczenie na rynku białostockim",
    desc: "Znamy specyfikę rynku Białegostoku — tekstyliści, IT, akademia. Rozumiemy dynamikę lokalnego biznesu i potrzeby firm z województwa podlaskiego."
  },
  {
    icon: BarChart3,
    title: "Data-driven marketing",
    desc: "Każda decyzja oparta na danych z GA4, Google Ads, Meta. Raportujemy ROAS, CPL, konwersje. Każde złoto musi być optymalizowane."
  },
  {
    icon: Users,
    title: "Dedykowany ekspert projektu",
    desc: "Masz stały kontakt z ekspertem znającym konkurencję Białegostoku i trendy rynku. Nie rotujemy juniorów — masz jedną osobę zaangażowaną w Twój projekt."
  },
  {
    icon: Zap,
    title: "Szybkie efekty w mniejszym rynku",
    desc: "Białystok to niższa konkurencja SEO niż duże miasta. To oznacza szybsze pozycjonowanie, lepszy ROI i szybszy powrót z inwestycji w marketing."
  }
];

const pricingPackages = [
  {
    name: "START",
    price: "1 500",
    description: "Dla firm zaczynających przygodę z marketingiem cyfrowym",
    features: [
      "Google My Business optymalizacja",
      "Local SEO dla Białegostoku",
      "1 kanał mediów społecznościowych",
      "Bazowy raport miesięczny",
      "Email support",
      "1 konsultacja /miesiąc"
    ]
  },
  {
    name: "ROZWÓJ",
    price: "3 500",
    description: "Dla firm chcących skalować kampanie i budować widoczność",
    features: [
      "SEO + Local SEO",
      "Google Ads (Search) kampania",
      "2 kanały mediów społecznościowych",
      "Dedykowany ekspert",
      "Raport zaawansowany (GA4, Google Ads)",
      "2 konsultacje /miesiąc",
      "Optymalizacja stron"
    ]
  },
  {
    name: "PREMIUM",
    price: "7 000",
    description: "Kompleksowy marketing cyfrowy pełnego zakresu",
    features: [
      "SEO + Local SEO + Link building",
      "Google Ads (Search, Shopping, Display)",
      "Meta Ads kampanie",
      "3+ kanały mediów społecznościowych",
      "Dedykowany ekspert + senior review",
      "Raporty zaawansowane + video call",
      "Content marketing i email",
      "Strategia quarterly review"
    ]
  }
];

const faqItems = [
  {
    question: "Jakie wyzwania marketingowe stoi przed firmami z Białegostoku?",
    answer: "Białystok to dynamiczne miasto, ale niż warszawskie tempo. Główne wyzwania: mniejsza świadomość o SEO i digital marketingu wśród firm, konkurencja jednak rosnąca, CPL niższy niż w dużych miastach. Firmy tutaj, które inwestują w marketing cyfrowy, zyskują szybką przewagę nad konkurencją, która jeszcze nie zaczęła. Specjalizujemy się w budowaniu widoczności dla białostockich firm w niszach lokalnych — medycyna, IT, handel, tekstylia."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Białegostoku?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Białegostoku. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Białystok jest rynkiem zaawansowanym cyfrowo — format online nie jest problemem. Ważne jest zrozumienie konkurencyjnego rynku Białegostoku i umiejętność budowania efektywnych kampanii dla lokalnych branż."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Białymstoku?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Białystok to tańszy rynek niż Warszawa czy Kraków — kampanie kosztują mniej, ale wymagają profesjonalnego podejścia. Zwróć uwagę na agencje obiecujące rezultaty za zaledwie 299 PLN — zwykle brakuje im strategii."
  },
  {
    question: "Jakie branże dominują w Białymstoku i czy mają SEO?",
    answer: "Białystok ma silny sektor medyczny (Uniwersytecki Szpital Kliniczny, kliniki i gabinety), przemysł tekstylny (historia miasta), rosnący sektor IT i tech startupów, handel hurtowy i detaliczny, turystyka (Puszcza Białowieska). Wiele z tych firm jeszcze nie inwestuje w SEO — to ogromny potencjał do wyróżnienia się. Uniwersytet Medyczny i Politechnika przyciągają dynamiczny akademicki rynek."
  },
  {
    question: "Czy SEO w Białymstoku jest trudne ze względu na lokalizację geograficzną?",
    answer: "Nie — wręcz przeciwnie. Białystok jako stolica województwa podlaskiego skupia znaczną część zapytań lokalnych dla całego regionu. Mniejsza konkurencja oznacza, że łatwiej i taniej osiągnąć TOP 10 niż w zachodniej Polsce. Jednocześnie miasto jest wystarczająco duże (ok. 300 tys. mieszkańców), żeby uzasadniać inwestycję w pozycjonowanie. To idealny rynek dla firm szukających szybkich efektów."
  },
  {
    question: "Czy oferujecie kompleksową obsługę marketingową dla Białegostoku?",
    answer: "Tak — pełny zakres usług. Projektujemy strony, prowadzimy SEO, konfigurujemy Google Ads i Meta, obsługujemy social media. Jeden partner, pełna odpowiedzialność. Spójność strategii daje lepsze wyniki w konkurencyjnym rynku Białegostoku niż współpraca z kilkoma firmami niezkoordynowanymi."
  }
];

export default function AgencjaMarketingowaBialystok() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
        <SEOHead
          title="Agencja marketingowa Białystok - fotz studio | Marketing internetowy"
          description="Agencja marketingowa Białystok. Fotz Studio — strony internetowe, SEO, Google Ads dla firm z Białegostoku. Bezpłatna wycena!"
          canonical="https://fotz.pl/agencja-marketingowa/bialystok"
          keywords="agencja marketingowa Białystok, marketing internetowy Białystok, agencja reklamowa Białystok, kampanie reklamowe Białystok, agencja SEO Białystok, Google Ads Białystok, digital marketing Białystok, marketing dla firm Białystok"
        />

        <ServiceSchema
          name="Agencja Marketingowa Białystok"
          description="Kompleksowe usługi marketingu internetowego dla firm z Białegostoku — SEO, Google Ads, kampanie Meta, social media, strony internetowe i produkcja wideo."
          provider="Fotz Studio"
          areaServed="Bialystok"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Białystok", url: "https://fotz.pl/agencja-marketingowa/bialystok" }
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
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary" /> Białystok i cała Polska — współpraca online
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Białystok</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Białegostoku. SEO, Google Ads,
                social media, strony internetowe i wideo — wszystko w jednej agencji. Fotz Studio to profesjonalna agencja reklamowa Białystok
                łącząca kreatywność z analityką danych.
              </p>

              <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Białystok to 300 tysięcy mieszkańców, stolica województwa podlaskiego,
                ośrodek akademicki, dynamiczny sektor IT i tekstylny. Firmy, które inwestują w profesjonalne kampanie marketingowe, systematycznie zyskują nowych klientów.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/realizacje">Zobacz nasze realizacje</Link>
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
                { value: "5+ lat", label: "doświadczenia na rynku polskim" },
                { value: "120+", label: "klientów z całej Polski" },
                { value: "+320%", label: "średni wzrost ruchu w kampaniach" },
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

        {/* Why choose fotz */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego klienci z Białegostoku{" "}
                  <span className="text-gradient">wybierają Fotz Studio?</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nie jesteśmy najtańszą agencją — jesteśmy jedną z najlepszych agencji marketingowych w Białymstoku pod względem wyników.
                  Łączymy profesjonalizm i kreatywność, by budować trwałą widoczność Twojej marki i wyniki sprzedażowe,
                  które realnie przekładają się na biznes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {chooseCriteria.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-border/40 bg-background flex gap-4"
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
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Zakres usług agencji marketingowej{" "}
                  <span className="text-gradient">dla firm z Białegostoku</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowa reklama i marketing — od strategii, przez kreacje wizualne, po kampanie reklamowe,
                  pozycjonowanie i obsługę mediach społecznościowych.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-background border border-border/40 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                    <Link to={s.link} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                      Dowiedz się więcej <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local context */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Białystok — specyfika rynku i branże
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Białystok to miasto o bogatej historii tekstylnej i rosnącym sektorze IT. Poznaj specyfikę każdego sektora gospodarki.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Medycyna i akademia",
                    desc: "Uniwersytecki Szpital Kliniczny, Uniwersytet Medyczny, Politechnika — to centra edukacji i opieki zdrowotnej. Kliniki, gabinety i usługi medyczne potrzebują widoczności. Local SEO, Google My Business, kampanie dla pacjentów."
                  },
                  {
                    title: "Tekstylia i przemysł",
                    desc: "Białystok ma bogatą historię przemysłu tekstylnego. Fabryki i przedsiębiorstwa szukają partnerów B2B i widoczności online. LinkedIn, Google Ads dla B2B, content marketing dla branży."
                  },
                  {
                    title: "IT i tech startups",
                    desc: "Rosnący sektor technologiczny w Białymstoku przyciąga młodych talentów i przedsiębiorców. Startups i firmy IT potrzebują kampanii skierowanych na developerów, inwestorów i klientów B2B."
                  },
                  {
                    title: "Handel, usługi i turystyka",
                    desc: "Bliskość Puszczy Białowieskiej i Narwiańskiego Parku Narodowego — turystyka przyrodnicza. Hotele, restauracje i usługi dla turystów potrzebują vidoczności w Google i seasonal kampanii."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-border/40 bg-background">
                    <h3 className="font-heading font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
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
                  Pakiety usług dla firm z Białegostoku
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Trzy pakiety zaplanowane dla różnych etapów rozwoju Twojego biznesu. Każdy pakiet zawiera konsultacje i dedykowane wsparcie.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPackages.map((pkg, i) => (
                  <div key={i} className="rounded-2xl border border-border/40 bg-card/20 overflow-hidden flex flex-col">
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
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Każdy pakiet zawiera:</strong> bezpłatną wstępną konsultację, strategię indywidualną, raportowanie miesięczne, dostęp do raportów online i dedykowany email ekspertów. Wszystkie pakiety mogą być rozszerzone o dodatkowe usługi.
                  </p>
                </div>
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
                  Najczęstsze pytania — agencja marketingowa Białystok
                </h2>
                <p className="text-muted-foreground">
                  Odpowiadamy na pytania klientów o marketing, kampanie reklamowe i współpracę z agencją.
                </p>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-border/40 bg-background"
                  >
                    <h3 className="font-heading font-semibold mb-3 flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item.question}
                    </h3>
                    <p className="text-sm text-muted-foreground pl-7">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary/90 to-[#0F3053]/90">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Zacznijmy wspólnie budować marketing Twojej firmy w Białymstoku
              </h2>
              <p className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy Twoją sytuację, kampanie reklamowe
                i zaproponujemy efektywne działania marketingowe dla Twojego biznesu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Link to="/kontakt">
                    Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/realizacje">Zobacz case studies</Link>
                </Button>
              </div>
              <p className="text-white/50 text-xs mt-6">
                Odpowiadamy w ciągu 24 godzin · Bez sprzedaży pod presją · Indywidualne podejście do każdego klienta
              </p>
            </div>
          </div>
        </section>

        {/* Internal linking */}
        <section className="py-12 border-t border-border/30 bg-card/20">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Agencja marketingowa Warszawa", to: "/agencja-marketingowa-warszawa" },
                { label: "Agencja marketingowa Kraków", to: "/agencja-marketingowa-krakow" },
                { label: "Pozycjonowanie Białystok", to: "/uslugi/pozycjonowanie/bialystok" },
                { label: "Strony internetowe", to: "/uslugi/strony-internetowe" },
                { label: "Google Ads", to: "/uslugi/google-ads" },
                { label: "Social media marketing", to: "/social-media" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Agencja marketingowa Białystok — marketing internetowy dla firm</h2>
              <p className="text-muted-foreground mb-4">
                Fotz Studio to agencja marketingowa Białystok oferująca kompleksowe usługi marketingu cyfrowego dla firm z Białegostoku i regionu podlaskiego. Strategie marketingu cyfrowego, które tworzymy, łączą SEO, kampanie PPC, social media marketing i content marketing w spójny ekosystem, generujący leady i sprzedaż.
              </p>
              <p className="text-muted-foreground mb-6">
                Białystok to dynamiczne miasto — 300 tysięcy mieszkańców, stolica województwa podlaskiego, ośrodek akademicki, silny sektor medyczny i rosnący hub IT. Bliskość Puszczy Białowieskiej i parków narodowych przyciąga turystów. Agencja marketingowa w Białymstoku musi znać specyfikę rynku lokalnego i turystyki, dysponować narzędziami, które pozwolą Twojej firmie wyróżnić się na tle konkurencji.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
