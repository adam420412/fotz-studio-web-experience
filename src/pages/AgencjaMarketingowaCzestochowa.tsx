import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Palette,
  Globe,
  Share2,
  Target,
  Search,
  FileText,
  Rocket,
  BarChart3,
  Users,
  Award,
  Video,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";

const services = [
  {
    icon: Globe,
    title: "Strony i sklepy internetowe",
    description: "Projektujemy i wdrażamy strony www oraz sklepy e-commerce. Responsywne, szybkie, z content zoptymalizowanym pod SEO i konwersję. Shopify, WooCommerce, Next.js — kompleksowe rozwiązania dla firm z Częstochowy.",
    link: "/uslugi/strony-internetowe/czestochowa"
  },
  {
    icon: Search,
    title: "Pozycjonowanie SEO",
    description: "Fotz Studio jako agencja SEO Częstochowa zwiększa widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. SEO lokalne dla firm z Częstochowy i działania na rynku ogólnopolskim.",
    link: "/seo/pozycjonowanie"
  },
  {
    icon: Target,
    title: "Kampanie Google Ads i Facebook Ads",
    description: "Zaawansowane kampanie marketingowe w Google Ads i Meta Ads. Konfiguracja, optymalizacja i skalowanie. Raportowanie ROAS i CPL. Budżet reklamowy płacony platformom ustalamy osobno, zależnie od celu kampanii. Wyniki mierzymy w leadach i konwersjach.",
    link: "/performance-marketing/google-ads"
  },
  {
    icon: Share2,
    title: "Social media i marketing w mediach społecznościowych",
    description: "Fotz Studio to agencja social media dla firm z Częstochowy i całej Polski. Prowadzenie profili na Instagramie, Facebooku, LinkedIn i TikToku. Kreacje treści, harmonogram, kampanie zasięgowe i leadowe.",
    link: "/social-media"
  },
  {
    icon: Video,
    title: "Produkcja wideo i foto",
    description: "Profesjonalne sesje fotograficzne, filmy produktowe i kreacje wideo na social media. Realizacje w Częstochowie i całej Polsce. Materiały graficzne i wideo gotowe do kampanii reklamowych dla hoteli, handlu i usług.",
    link: "/uslugi/produkcja-filmow"
  },
  {
    icon: Palette,
    title: "Branding i identyfikacja wizualna",
    description: "Budujemy i rozwijamy Twój brand. Logo, brandbook, system identyfikacji wizualnej, materiały graficzne. Spójna identyfikacja wizualna pomaga budować rozpoznawalność marki firm handlu i usług.",
    link: "/uslugi/identyfikacja-wizualna"
  }
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Bezpłatna konsultacja i analiza",
    description: "Rozmawiamy o Twoim biznesie, celach i budżecie. Analizujemy aktualną sytuację marketingową, konkurencję i potencjał na częstochowskim rynku. Na tej podstawie eksperci rekomendują zakres usług dopasowany do Twoich potrzeb."
  },
  {
    number: "02",
    icon: FileText,
    title: "Strategia i indywidualne podejście",
    description: "Tworzymy strategię z wyborem kanałów, harmonogramem kampanii, budżetem i mierzalnymi KPI. Żadnych standardowych pakietów — indywidualne podejście i plan szyty pod Twój biznes i specyfikę rynku Częstochowy."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Wdrożenie i realizacja kampanii",
    description: "Działamy. Tworzymy kreacje, konfigurujemy kampanie reklamowe, optymalizujemy strony, budujemy linki. Masz stały dostęp do raportów i dedykowanego opiekuna z twojej marki po stronie agencji."
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optymalizacja i raportowanie",
    description: "Co miesiąc omawiamy wyniki kampanii i planujemy kolejne kroki. Dane z GA4, Google Ads, Meta i SEO w jednym raporcie. Stale optymalizujemy efektywne kanały — budujemy trwałą przewagę nad konkurencją."
  }
];

const chooseCriteria = [
  {
    icon: Award,
    title: "Kreatywny zespół z doświadczeniem branżowym",
    desc: "Kreatywna agencja to nie tylko ładne projekty — to wyniki. Kreatywny pomysł bez strategii biznesowej nie sprzeda. Sprawdź, czy agencja realizowała kampanie dla firm podobnych do Twojej. Case studies z mierzalnymi wynikami to lepszy dowód niż kolorowe portfolio."
  },
  {
    icon: BarChart3,
    title: "Transparentne raportowanie kampanii",
    desc: "Dobra agencja reklamowa regularnie raportuje wyniki — ruch, leady, ROAS, koszt konwersji. Unikaj firm mierzących efekty wyłącznie zasięgiem. Efektywny marketing to mierzalne wyniki biznesowe, nie słupki polubień."
  },
  {
    icon: Users,
    title: "Dedykowany ekspert, nie call-center",
    desc: "Kluczowe jest, czy masz stały kontakt z ekspertem znającym Twój biznes. Rotacja juniorów to jeden z najczęstszych powodów niezadowolenia klientów z agencji marketingowych w Polsce."
  },
  {
    icon: TrendingUp,
    title: "Cyfrowy marketing pełnego zakresu",
    desc: "Agencja oferująca usługi z zakresu działań online i offline ma pełny obraz kampanii. Kompleksowe rozwiązania marketingowe w wielu kanałach pozwalają lepiej optymalizować budżet i dobierać strategie dopasowane do Twojego rynku."
  }
];

const faqItems = [
  {
    question: "Jak wybrać właściwą agencję marketingową w Częstochowie?",
    answer: "Kluczowe kryteria przy wyborze spośród agencji marketingowych w Częstochowie: udokumentowane wyniki (case studies z ROAS, wzrostem widoczności, liczbą leadów), transparentne raportowanie, dedykowany ekspert projektu (nie infolinia), oraz kompleksowa obsługa pod jednym dachem. Umów bezpłatną konsultację z 2–3 agencjami i porównaj ich indywidualne podejście do rynku Częstochowy."
  },
  {
    question: "Czy agencja z Poznania obsługuje klientów z Częstochowy?",
    answer: "Tak — pracujemy z Poznania, a firmy z Częstochowy i okolic obsługujemy zdalnie. Współpraca przebiega online (Google Meet, Teams), a materiały i raporty udostępniamy w jednym miejscu. Jeśli projekt wymaga zdjęć lub filmu na miejscu, ustalamy termin realizacji w Częstochowie."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Częstochowie?",
    answer: "Wycenę przygotowujemy po rozmowie o zakresie. Zależy ona od liczby kanałów (np. tylko SEO albo tylko kampanie Meta vs. kompleksowa obsługa SEO, Google Ads i social media), ilości treści i kreacji, częstotliwości raportowania oraz konkurencji w branży. Budżet reklamowy płacony platformom (Google, Meta) jest zawsze osobną pozycją. Każdą wycenę poprzedzamy bezpłatną konsultacją. Uważaj na oferty „kompleksowego marketingu” za symboliczną kwotę — zwykle oznaczają brak strategii biznesowej."
  },
  {
    question: "Marketing dla firm w Częstochowie — jak agencja powinna być zbudowana?",
    answer: "Częstochowa to miasto o bogatej historii i turystyce pielgrzymkowej — Jasna Góra przyciąga turystów. Sektor usług i handlu stanowią istotną część gospodarki. Marketing dla firm handlu, hoteli i usług wymaga innego podejścia niż dla startupów tech — focus na local SEO, Google Moja Firma, kampanie dla turystów i mieszkańców. Agencja powinna rozumieć specyfikę pielgrzymkowej turystyki i sezońności biznesu. Pracujemy z Poznania, a firmy z Częstochowy obsługujemy zdalnie — specyfikę Twojego rynku poznajemy na starcie współpracy."
  },
  {
    question: "Jakie kampanie reklamowe warto prowadzić dla firmy z Częstochowy?",
    answer: "Częstochowa to ważny ośrodek pielgrzymkowy, handlu i usług — z Jasną Górą jako atrakcją turystyczną i wieloma lokalnymi przedsiębiorstwami. Dla firm handlowych i usługowych skuteczne są: kampanie Google My Business i local SEO (dla turystów i lokalnych klientów), Google Ads na local search, Facebook i Instagram dla promocji sezonu turystycznego, kampanie remarketing dla wracających gości. Dla e-commerce — Google Shopping i kampanie Meta. Dobieramy strategie do celu i budżetu każdego klienta."
  },
  {
    question: "Czym różni się agencja marketingowa od agencji reklamowej?",
    answer: "Agencja reklamowa tradycyjnie skupia się na kreacji reklamy — visual, copy, spot. Agencja marketingowa ma szerszy zakres usług: strategia, SEO, kampanie, social media, email, analityka, branding, content. Agencja digital lub agencja interaktywna to kolejne określenia firm łączących technologię z kreatywnością. Fotz Studio to profesjonalna agencja full-service — projektujemy, wdrażamy i promujemy marki online."
  }
];

const pricingPackages = [
  {
    name: "START",
    description: "Dla firm zaczynających przygodę z marketingiem cyfrowym",
    features: [
      "Google My Business optymalizacja",
      "Local SEO dla Częstochowy",
      "1 kanał mediów społecznościowych",
      "Bazowy raport miesięczny",
      "Email support",
      "1 konsultacja /miesiąc"
    ]
  },
  {
    name: "ROZWÓJ",
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

export default function AgencjaMarketingowaCzestochowa() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Agencja marketingowa Częstochowa - fotz studio | Fotz Studio"
        description="Agencja marketingowa Częstochowa. Fotz Studio — strony internetowe, SEO, Google Ads dla firm z Częstochowy. Bezpłatna wycena!"
        canonical="https://www.fotz-studio.pl/agencja-marketingowa/czestochowa"
        keywords="agencja marketingowa Częstochowa, marketing internetowy Częstochowa, agencja reklamowa Częstochowa, kampanie reklamowe Częstochowa, agencja SEO Częstochowa, Google Ads Częstochowa, digital marketing Częstochowa, marketing dla firm Częstochowa"
      />

      <ServiceSchema
        name="Agencja Marketingowa Częstochowa"
        description="Kompleksowe usługi marketingu internetowego dla firm z Częstochowy — SEO, Google Ads, kampanie Meta, social media, strony internetowe i produkcja wideo."
        provider="Fotz Studio"
        areaServed="Czestochowa"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Agencja Marketingowa Częstochowa", url: "https://www.fotz-studio.pl/agencja-marketingowa/czestochowa" }
        ]}/>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-primary" /> Częstochowa i cała Polska — współpraca online
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Agencja Marketingowa{" "}
              <span className="text-gradient">Częstochowa</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kompleksowy marketing internetowy dla firm z Częstochowy. SEO, Google Ads,
              social media, strony internetowe i wideo — wszystko w jednej agencji. Fotz Studio to agencja z Poznania, która obsługuje firmy z Częstochowy
              zdalnie, łącząc kreatywność z analityką danych.
            </p>

            <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Częstochowa to ważny ośrodek pielgrzymkowy (Jasna Góra) z rozwiniętym sektorem handlu i usług.
              Działania marketingowe planujemy pod lokalnych klientów, turystów i odbiorców z całej Polski.
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
              { value: "Poznań", label: "stąd pracujemy" },
              { value: "Zdalnie", label: "obsługa firm z Częstochowy" },
              { value: "Full-service", label: "strony, SEO, Ads, social, wideo" },
              { value: "Raporty", label: "regularne omówienie wyników" }
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
                Dlaczego warto{" "}
                <span className="text-gradient">współpracować z Fotz Studio?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nie jesteśmy najtańszą agencją — stawiamy na strategię i mierzalne działania.
                Łączymy profesjonalizm i kreatywność, by budować trwałą widoczność Twojej marki i wyniki sprzedażowe,
                które realnie przekładają się na biznes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Wyniki, nie aktywności",
                  desc: "Raportujemy to, co ważne biznesowo: leady, ROAS, wzrost widoczności organicznej, koszt konwersji. Nie zasięgi na Facebooku czy Instagram czy TikTok. Efektywny marketing = mierzalne przychody."
                },
                {
                  icon: Users,
                  title: "Ekspert, nie rotujący junior",
                  desc: "Masz stały kontakt z osobą, która prowadzi Twoje działania i poznaje specyfikę Twojego rynku. Budujesz relację i wiedzę — nie zaczynasz od nowa po każdej rotacji. Twój opiekun zna Twoje kampanie od wewnątrz."
                },
                {
                  icon: Award,
                  title: "Kompleksowy marketing w jednym miejscu",
                  desc: "SEO, Google Ads, social media, strony i wideo koordynujemy po naszej stronie. Jeden punkt kontaktu, spójna strategia we wszystkich kanałach, jedna faktura."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border/40 bg-card/20">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                <span className="text-gradient">dla firm z Częstochowy</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompleksowa reklama i marketing — od strategii, przez kreacje wizualne, po kampanie reklamowe,
                pozycjonowania i obsługę mediach społecznościowych.
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
                Marketing dla branż w Częstochowie
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Częstochowa to miasto o unikatowych możliwościach — turystyka pielgrzymkowa, handel, usługi. Poznaj specyfikę każdego sektora.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Turystyka pielgrzymkowa i hospitality",
                  desc: "Jasna Góra przyciąga turystów z całej Polski i Europy. Hotele, pensjonaty, restauracje i usługi dla turystów potrzebują vidoczności w Google. Kampanie seasonal, Google My Business optymalizacja, local SEO."
                },
                {
                  title: "Handel i e-commerce",
                  desc: "Dynamiczny sektor handlu w Częstochowie wymaga widoczności zarówno lokalnej jak i online. SEO, Google Shopping, kampanie dla e-commerce, remarketing dla powracających klientów."
                },
                {
                  title: "Usługi i B2B",
                  desc: "Firmy usługowe (fryzjerstwo, kosmetyka, naprawa, edukacja) budują reputację przez Google, opinie i social media. Local SEO, Google Moja Firma, kampanie Facebook dla lokalnych klientów."
                },
                {
                  title: "Produkcja i przemysł",
                  desc: "Małe i średnie fabryki w Częstochowie szukają partnerów B2B. LinkedIn, Google Ads dla B2B, content marketing, presence na targach branżowych w sieci."
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
                Przykładowe zakresy współpracy dla firm z Częstochowy
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trzy przykładowe zakresy dla różnych etapów rozwoju biznesu. Wycenę przygotowujemy po rozmowie o zakresie, liczbie kanałów i ilości treści.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingPackages.map((pkg, i) => (
                <div key={i} className="rounded-2xl border border-border/40 bg-card/20 overflow-hidden flex flex-col">
                  <div className="p-6 pb-4">
                    <h3 className="font-heading font-bold text-xl mb-2">{pkg.name}</h3>
                    <div className="mb-2">
                      <span className="text-lg font-heading font-semibold text-primary">Wycena po rozmowie o zakresie</span>
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
                  <strong className="text-foreground">Każdy zakres obejmuje:</strong> bezpłatną wstępną konsultację, strategię indywidualną, raportowanie miesięczne i dostęp do raportów online. Zakres można rozszerzyć o dodatkowe usługi. Budżet reklamowy płacony platformom (Google, Meta) jest zawsze rozliczany osobno.
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
                Najczęstsze pytania — agencja marketingowa Częstochowa
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
              Zacznijmy wspólnie budować marketing Twojej firmy w Częstochowie
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
              Bez sprzedaży pod presją · Indywidualne podejście do każdego klienta
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
              { label: "Agencja marketingowa Wrocław", to: "/agencja-marketingowa/wroclaw" },
              { label: "Agencja marketingowa Poznań", to: "/agencja-marketingowa/poznan" },
              { label: "Strony internetowe", to: "/uslugi/strony-internetowe" },
              { label: "Pozycjonowanie SEO", to: "/seo/pozycjonowanie" },
              { label: "Google Ads", to: "/performance-marketing/google-ads" },
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

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Agencja marketingowa Częstochowa — marketing internetowy dla firm</h2>
            <p className="text-muted-foreground mb-4">Fotz Studio to agencja marketingowa z Poznania, która zdalnie obsługuje firmy z Częstochowy i regionu w zakresie marketingu cyfrowego. Strategie marketingu cyfrowego, które tworzymy, łączą SEO, kampanie PPC, social media marketing i content marketing w spójny ekosystem, generujący leady i sprzedaż.</p>
            <p className="text-muted-foreground mb-6">Częstochowa to ważny ośrodek pielgrzymkowy (Jasna Góra przyciąga turystów z całej Polski i Europy) z rozwiniętym sektorem handlu i usług. Agencja marketingowa w Częstochowie musi znać specyfikę rynku turystycznego i lokalnego biznesu, dysponować narzędziami, które pozwolą Twojej firmie wyróżnić się na tle konkurencji.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Marketing cyfrowy dla firm z Częstochowy — SEO, Google Ads i social media</h2>
            <p className="text-muted-foreground mb-4">Oferujemy: pozycjonowanie stron internetowych w Częstochowie, kampanie Google Ads (search, shopping, display), obsługę Social Media (Facebook, Instagram, LinkedIn dla B2B, TikTok), tworzenie stron internetowych Częstochowa i sklepów e-commerce, email marketing i marketing automation.</p>
            <p className="text-muted-foreground">Agencja marketingowa Częstochowa z podejściem data-driven — analizujemy dane, by optymalizować każdy aspekt Twojej obecności online. Raporty efektywności kampanii, monitorowanie ruchu na stronie i analiza konwersji to elementy naszej standardowej usługi. Strategie przygotowujemy m.in. dla hoteli, restauracji, handlu, e-commerce i firm usługowych. Skontaktuj się — bezpłatna konsultacja dla firm z Częstochowy.</p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">Social media</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">Strony internetowe</Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
    </>
  );
}
