import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
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
  AlertCircle,
  Eye,
  Zap,
  Star
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const services = [
  {
    icon: Globe,
    title: "Strony i sklepy internetowe",
    description: "Projektujemy i wdrażamy strony www oraz sklepy e-commerce. Responsywne, szybkie, z content zoptymalizowanym pod SEO i konwersję. Shopify, WooCommerce, Next.js — kompleksowe rozwiązania dla firm z Legnicy.",
    link: "/uslugi/strony-internetowe/legnica"
  },
  {
    icon: Search,
    title: "Pozycjonowanie SEO",
    description: "Fotz Studio jako agencja SEO Legnica zwiększa widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla Legnicy i woj. dolnośląskiego.",
    link: "/seo/pozycjonowanie"
  },
  {
    icon: Target,
    title: "Kampanie Google Ads i Facebook Ads",
    description: "Zaawansowane kampanie marketingowe w Google Ads i Meta Ads. Konfiguracja, optymalizacja i skalowanie. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies. Wyniki sprzedażowe mierzone w leadach i konwersjach.",
    link: "/performance-marketing/google-ads"
  },
  {
    icon: Share2,
    title: "Social media i mediach społecznościowych",
    description: "Fotz Studio to agencja social media dla firm z Legnicy i całej Polski. Prowadzenie profili na Instagramie, Facebooku, LinkedIn i TikToku. Kreacje treści, harmonogram, kampanie zasięgowe i leadowe.",
    link: "/social-media/legnica"
  },
  {
    icon: Video,
    title: "Produkcja wideo i foto",
    description: "Profesjonalne sesje fotograficzne, filmy produktowe i kreacje wideo na social media. Realizacje w Legnicy i całej Polsce. Materiały graficzne i wideo gotowe do kampanii reklamowych dla handlu, produkcji i usług.",
    link: "/uslugi/produkcja-filmow"
  },
  {
    icon: Palette,
    title: "Branding i identyfikacja wizualna",
    description: "Budujemy i rozwijamy Twój brand. Logo, brandbook, system identyfikacji wizualnej, materiały graficzne. Spójna identyfikacja wizualna Twojej marki przekłada się na wyższe ceny i lepsze konwersje dla firm produkcyjnych i handlowych.",
    link: "/uslugi/identyfikacja-wizualna"
  }
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Bezpłatna konsultacja i analiza",
    description: "Rozmawiamy o Twoim biznesie, celach i budżecie. Analizujemy aktualną sytuację marketingową, konkurencję i potencjał na rynku Legnicy. Na tej podstawie eksperci rekomendują zakres usług dopasowany do Twoich potrzeb."
  },
  {
    number: "02",
    icon: FileText,
    title: "Strategia i indywidualne podejście",
    description: "Tworzymy strategię z wyborem kanałów, harmonogramem kampanii, budżetem i mierzalnymi KPI. Żadnych standardowych pakietów — indywidualne podejście i plan szyty pod Twój biznes i specyfikę rynku Legnicy."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Wdrażać i realizacja kampanii",
    description: "Działamy. Tworzymy kreacje, konfigurujemy kampanie reklamowe, optymalizujemy strony, budujemy linki. Masz stały dostęp do raportów i dedykowanego opiekuna z twojej marki po stronie agencji."
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optymalizacja i raportowanie",
    description: "Mierzymy i analizujemy wyniki kampanii — ruch, leady, ROAS. Co miesiąc raport i rozmowa o optymalizacji. Marketing nie kończy się na uruchomieniu kampanii — efekt to ciągła praca i dopasowanie strategii do wyników."
  }
];

const pricingTiers = [
  {
    name: "START",
    price: "1 500",
    description: "Idealne do wprowadzenia firmy na rynek online",
    includes: [
      "Audyt obecności online",
      "Optymalizacja profilu lokalnego",
      "1 kanał marketingowy (Google Ads lub Social Media)",
      "Raportowanie miesięczne",
      "Konsultacje co 2 tygodnie"
    ]
  },
  {
    name: "ROZWÓJ",
    price: "3 500",
    description: "Kompleksowy marketing z wymiernymi wynikami",
    includes: [
      "Strategia marketingowa",
      "2-3 kanały (SEO, Google Ads, Social Media)",
      "Tworzenie treści",
      "Kampanie remarketing",
      "Raportowanie tygodniowe",
      "Dedykowany ekspert",
      "Optymalizacja budżetu"
    ],
    highlighted: true
  },
  {
    name: "PREMIUM",
    price: "7 000+",
    description: "Full-service marketing z pełnym wsparciem strategicznym",
    includes: [
      "Kompleksowa strategia biznesowa",
      "Wszystkie kanały marketingowe",
      "Projektowanie i optymalizacja strony",
      "Kampanie video i produkcja treści",
      "Pełna obsługa mediów społecznościowych",
      "Raportowanie real-time",
      "Dedykowany kierownik konta",
      "Scaling budżetu i optymalizacja zaawansowana"
    ]
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
    question: "Jak wybrać właściwą agencję marketingową w Legnicy?",
    answer: "Kluczowe kryteria przy wyborze spośród agencji marketingowych w Legnicy: udokumentowane wyniki (case studies z ROAS, wzrostem widoczności, liczbą leadów), transparentne raportowanie, dedykowany ekspert projektu (nie infolinia), oraz kompleksowa obsługa pod jednym dachem. Umów bezpłatną konsultację z 2–3 agencjami i porównaj ich indywidualne podejście do Twojego biznesu."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Legnicy?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Legnicy i okolic. Współpraca z klientem przebiega online (Google Meet, Teams). Przy większych kampaniach przyjeżdżamy do Legnicy. Format online nie wpływa na jakość i wyniki kampanii reklamowych — obsługujemy firmy produkcyjne, handlowe i usługowe z takim samym zaangażowaniem."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Legnicy?",
    answer: "Ceny zależą od zakresu usług. Pojedynczy kanał (np. pozycjonowania SEO lub kampanie Meta) to od 1 500 PLN/mies. Kompleksowa obsługa marketingowa — SEO, Google Ads, social media — od 3 500 PLN/mies. PREMIUM pakiet z pełnym wsparciem od 7 000+ PLN/mies. Każdą wycenę poprzedzamy bezpłatną konsultacją. Uważaj na reklama agencji w stylu 'kompleksowy marketing od 299 PLN' — zwykle oznacza brak strategii biznesowej."
  },
  {
    question: "Marketing dla firm produkcyjnych i handlowych w Legnicy — jak powinna być zbudowana agencja?",
    answer: "Legnica to ośrodek przemysłowy — górnictwo miedzi (KGHM), produkcja, handel. Marketing dla firm produkcyjnych wymaga innego podejścia niż dla startupów tech — focus na local SEO, kampanie dla High-intent klientów B2B, katalogi produktów, content marketing edukacyjny. Agencja powinna rozumieć cykl sprzedaży w branży, targetowanie właściwych osób decyzyjnych oraz efektywne wykorzystanie budżetu reklamowego dla firm lokalnych. Specjalizujemy się w marketingu dla produkcji i handlu w Legnicy."
  },
  {
    question: "Jakie kampanie reklamowe warto prowadzić dla firmy z Legnicy?",
    answer: "Legnica to miasto dynamiczne — 160 tysięcy mieszkańców, znaczący ośrodek gospodarczy, bliskość Dolnego Śląska i rynku DACH. Dla firm produkcyjnych skuteczne są kampanie B2B na Google Ads, LinkedIn, katalogi produktów, SEO dla long-tail keywords. Dla handlu — Google Shopping, kampanie Meta, remarketing. Dla usług — local SEO, Google Business, kampanie na terenie Legnicy. Dobieramy strategie do celu i budżetu każdego klienta — bez szablonów."
  },
  {
    question: "Czym różni się agencja marketingowa od agencji reklamowej?",
    answer: "Agencja reklamowa tradycyjnie skupia się na kreacji reklamy — visual, copy, spot. Agencja marketingowa ma szerszy zakres usług: strategia, SEO, kampanie, social media, email, analityka, branding, content. Agencja digital to kolejne określenie firm łączących technologię z kreatywnością. Fotz Studio to profesjonalna agencja full-service — projektujemy, wdrażamy i promujemy marki online dla firm z Legnicy i całej Polski."
  },
  {
    question: "Jak budować widoczność firmy produkcyjnej lub handlowej w Legnicy?",
    answer: "Widoczność online dla firm produkcyjnych i handlowych buduje się przez: pozycjonowania organiczne (SEO) — długoterminowe, efektywne dla keywords związanych z Legnicą; kampanie Google Ads — szybkie efekty dla high-intent klientów; obecność w mediach społecznościowych (Facebook dla lokalnej społeczności, LinkedIn dla B2B); katalogi i listy produktów; content marketing edukacyjny. Kompleksowe podejście — łączenie SEO z płatnymi kampaniami — daje najlepsze wyniki dla firm w Legnicy."
  },
  {
    question: "Czy oferujecie kompleksową obsługę marketingową dla firm z Legnicy?",
    answer: "Tak, jesteśmy agencją full-service. Możemy zaprojektować stronę lub katalog produktów, a następnie prowadzić jej kompleksowy marketing — SEO, Google Ads, kampanie Meta, social media (Instagram, Facebook, LinkedIn), email marketing. Jeden partner, pełna odpowiedzialność. Spójność strategii i kreacje dają lepsze efekty niż współpracować z kilkoma firmami naraz. Specjalizujemy się w marketingu dla firm produkcyjnych, handlowych i usługowych z Legnicy i regionu."
  },
  {
    question: "Marketing dla firm z obszaru górnictwa i produkcji — jakie mamy doświadczenie?",
    answer: "Legnica to tradycyjne centrum górnictwa miedzi (KGHM) i produkcji. Marketing dla firm z tej branży wymaga zrozumienia specyfiki — long sales cycle, wielu decydentów, B2B oriented. Prowadzimy kampanie dla firm produkcyjnych, dostawców usług dla KGHM i firm handlowych. Znamy branżę, znamy naszych klientów, wiemy jak efektywnie promować produkty i usługi dla sektora produkcyjnego w Legnicy i regionie dolnośląskim."
  }
];

export default function AgencjaMarketingowaLegnica() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Agencja marketingowa Legnica — fotz studio | Marketing dla firm"
        description="Agencja marketingowa Legnica. Fotz Studio — strony internetowe, SEO, Google Ads dla firm z Legnicy. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa/legnica"
        keywords="agencja marketingowa Legnica, marketing internetowy Legnica, agencja reklamowa Legnica, kampanie reklamowe Legnica, agencja SEO Legnica, Google Ads Legnica, digital marketing Legnica, marketing dla firm Legnica, marketing produkcja Legnica"
      />

      <ServiceSchema
        name="Agencja Marketingowa Legnica"
        description="Kompleksowe usługi marketingu internetowego dla firm z Legnicy — SEO, Google Ads, kampanie Meta, social media, strony internetowe i produkcja wideo."
        provider="Fotz Studio"
        areaServed="Legnica"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa Legnica", url: "https://fotz.pl/agencja-marketingowa/legnica" }
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-yellow-400/8 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-yellow-400" /> Legnica i cała Polska — współpraca online
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Agencja marketingowa{" "}
              <span className="text-yellow-400">Legnica</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kompleksowy marketing internetowy dla firm z Legnicy. SEO, Google Ads, social media, strony internetowe i wideo — wszystko w jednej agencji. Fotz Studio to profesjonalna agencja reklamowa Legnica i agencja digital łącząca kreatywność z analityką danych.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Legnica to 160 tysięcy mieszkańców, ośrodek przemysłowy znany jako historyczna Stolica Miedzi, sede KGHM Polska Miedź. Silna baza produkcyjna, handel, usługi — firmy, które inwestują w profesjonalne kampanie marketingowe, systematycznie zyskują nowych klientów i polepszają sprzedaż.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-400/90 text-gray-900 font-semibold">
                <Link to="/kontakt">
                  Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz nasze realizacje</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/30 border-y border-border/30">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
          >
            {[
              { value: "5+ lat", label: "doświadczenia w Legnicy i regionie" },
              { value: "85+", label: "klientów z Legnicy i okolic" },
              { value: "+320%", label: "średni wzrost ruchu w kampaniach" },
              { value: "4.9/5", label: "średnia ocen klientów" }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-yellow-400 mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Zgłoś się do nas jeśli */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Agencja marketingowa Legnica —{" "}
                <span className="text-yellow-400">zgłoś się, jeśli Twoja firma…</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Współpracujemy z klientami, którzy traktują marketing jako inwestycję biznesową, nie koszt. Oferujemy indywidualne podejście i efektywne strategie dopasowane do Twojego biznesu.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Chcesz zwiększyć sprzedaż i pozyskiwać nowych klientów przez internet",
                "Prowadzisz kampanie reklamowe, ale nie widzisz zwrotu z inwestycji",
                "Konkurencja wyprzedza Cię w Google i chcesz budować widoczność organiczną",
                "Potrzebujesz nowej strony lub katalogu produktów z kompleksowym marketingiem",
                "Masz budżet reklamowy, ale brak czasu, by efektywny marketing prowadzić samodzielnie",
                "Zależy Ci na spójnej strategii — od kreacje graficznego po kampanie cyfrowy marketing"
              ].map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-4 rounded-xl border border-border/40 bg-card/20 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Zakres usług agencji marketingowej{" "}
                <span className="text-yellow-400">dla firm z Legnicy</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompleksowa reklama i marketing — od strategii, przez kreacje wizualne, po kampanie reklamowe, pozycjonowania i obsługę mediach społecznościowych.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-background border border-border/40 hover:border-yellow-400/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 flex items-center justify-center mb-4 transition-colors">
                    <s.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                  <Link to={s.link} className="inline-flex items-center gap-1 text-sm text-yellow-400 hover:underline">
                    Dowiedz się więcej <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to choose */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Jak wybrać właściwą agencję marketingową{" "}
                <span className="text-yellow-400">w Legnicy?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                W Legnicy działa wiele agencji reklamowych i marketingowych. Oto kryteria, które pomogą wybrać partnera, a nie dostawcę faktur.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {chooseCriteria.map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-background">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="mt-8 p-6 rounded-2xl bg-yellow-400/5 border border-yellow-400/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Uwaga na najtańszą ofertę z Legnicy:</strong> Agencje marketingowe oferujące bardzo niskie stawki często pracują na szablonach bez strategii biznesowej, nie mierzą konwersji, albo współpracować wolą z tanimi podwykonawcami. Najtańsza reklama w Legnicy rzadko oznacza najlepszy zwrot z inwestycji w kampanie reklamowe. Zamiast ceny — pytaj o wyniki.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Jak wygląda nasza{" "}
                <span className="text-yellow-400">współpraca z klientem?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Każda współpraca z klientem z Legnicy zaczyna się od rozmowy, nie cennika. Poznajemy Twój biznes, zanim zaproponujemy strategię marketingową i zakres usług.
              </p>
            </motion.div>

            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-6 p-6 rounded-2xl border border-border/40 bg-card/20"
                >
                  <div className="text-4xl font-heading font-bold text-yellow-400/20 shrink-0 leading-none">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-yellow-400" />
                      <h3 className="font-heading font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Pakiety marketingowe dla Twojej firmy
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Elastyczne pakiety dopasowane do budżetu i potrzeb Twojej firmy z Legnicy. Od wprowadzenia na rynek do kompleksowej obsługi marketingowej.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className={`p-8 rounded-2xl border transition-all ${
                    tier.highlighted
                      ? "border-yellow-400/40 bg-yellow-400/5 ring-1 ring-yellow-400/10"
                      : "border-border/40 bg-card/20"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-semibold mb-4">
                      Najpopularniejszy
                    </div>
                  )}
                  <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-heading font-bold text-yellow-400">{tier.price}</span>
                    <span className="text-muted-foreground"> PLN/mies</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={tier.highlighted ? "bg-yellow-400 text-gray-900 hover:bg-yellow-400/90 w-full font-semibold" : "border-border w-full"}>
                    <Link to="/kontakt">
                      {tier.highlighted ? "Umów konsultację" : "Zapytaj o szczegóły"}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Najczęstsze pytania — agencja marketingowa Legnica
              </h2>
              <p className="text-muted-foreground">
                Odpowiadamy na pytania klientów o marketing, kampanie reklamowe i współpracę z agencją.
              </p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border/40">
                    <AccordionTrigger className="hover:text-yellow-400 transition-colors">
                      <span className="text-left">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-yellow-400/90 to-yellow-500/90">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Zacznijmy wspólnie budować marketing Twojej firmy w Legnicy
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-900/80 mb-8">
              Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy Twoją sytuację, kampanie reklamowe i zaproponujemy efektywne działania marketingowe dla Twojego biznesu.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gray-900 text-yellow-400 hover:bg-gray-900/90 font-semibold">
                <Link to="/kontakt">
                  Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900/10">
                <Link to="/realizacje">Zobacz case studies</Link>
              </Button>
            </motion.div>
            <motion.p variants={fadeIn} className="text-gray-900/50 text-xs mt-6">
              Odpowiadamy w ciągu 24 godzin · Bez sprzedaży pod presją · Indywidualne podejście do każdego klienta
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi i miasta</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Agencja marketingowa Wrocław", to: "/agencja-marketingowa/wroclaw" },
              { label: "Agencja marketingowa Poznań", to: "/agencja-marketingowa/poznan" },
              { label: "Strony internetowe Legnica", to: "/uslugi/strony-internetowe/legnica" },
              { label: "Pozycjonowanie SEO", to: "/seo/pozycjonowanie" },
              { label: "Google Ads", to: "/uslugi/google-ads" },
              { label: "Social media marketing", to: "/social-media" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-yellow-400/40 hover:text-yellow-400 transition-colors"
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Agencja marketingowa Legnica — marketing internetowy dla firm z miasta Miedzianego</h2>
            <p className="mb-4">Fotz Studio to agencja marketingowa Legnica oferująca kompleksowe usługi marketingu cyfrowego dla firm z Legnicy i okolic. Strategie marketingu cyfrowego, które tworzymy, łączą SEO, kampanie PPC, social media marketing i content marketing w spójny ekosystem, generujący leady i sprzedaż.</p>
            <p className="mb-6">Legnica to dynamiczne miasto — 160 tysięcy mieszkańców, historyczna Stolica Miedzi, sede KGHM Polska Miedź, ośrodek produkcyjny i handlowy. Agencja marketingowa w Legnicy musi znać specyfikę rynku i dysponować narzędziami, które pozwolą Twojej firmie wyróżnić się na tle konkurencji.</p>

            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Marketing cyfrowy dla firm z Legnicy — SEO, Google Ads i social media</h2>
            <p className="mb-4">Oferujemy: pozycjonowanie stron internetowych w Legnicy, kampanie Google Ads (search, shopping, display), obsługę Social Media (Facebook, Instagram, LinkedIn dla B2B, TikTok), tworzenie stron internetowych Legnica i sklepów e-commerce, email marketing i marketing automation.</p>
            <p className="mb-6">Agencja marketingowa Legnica z podejściem data-driven — analizujemy dane, by optymalizować każdy aspekt Twojej obecności online. Raporty efektywności kampanii, monitorowanie ruchu na stronie i analiza konwersji to elementy naszej standardowej usługi. Specjalizujemy się w marketingu dla firm produkcyjnych, handlowych, usług i branży miedziowej. Skontaktuj się — bezpłatna konsultacja dla firm z Legnicy.</p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-yellow-400 hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-yellow-400 hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-yellow-400 hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/uslugi/strony-internetowe" className="text-yellow-400 hover:underline font-medium text-sm">→ Strony internetowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
}
