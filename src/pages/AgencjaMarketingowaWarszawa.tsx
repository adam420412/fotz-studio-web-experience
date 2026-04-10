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
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

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
    description: "Projektujemy i wdrażamy strony www oraz sklepy e-commerce. Responsywne, szybkie, z content zoptymalizowanym pod SEO i konwersję. Shopify, WooCommerce, Next.js — kompleksowe rozwiązania dla firm z Warszawy.",
    link: "/uslugi/strony-internetowe/warszawa"
  },
  {
    icon: Search,
    title: "Pozycjonowanie SEO",
    description: "Fotz Studio jako agencja SEO Warszawa zwiększa widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla Warszawy i Mazowsza oraz e-commerce.",
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
    description: "Fotz Studio to agencja social media dla firm z Warszawy i całej Polski. Prowadzenie profili na Instagramie, Facebooku, LinkedIn i TikToku. Kreacje treści, harmonogram, kampanie zasięgowe i leadowe.",
    link: "/social-media/poznan"
  },
  {
    icon: Video,
    title: "Produkcja wideo i foto",
    description: "Profesjonalne sesje fotograficzne, filmy produktowe i kreacje wideo na social media. Własne studio — realizacje w Warszawie i całej Polsce. Materiały graficzne i wideo gotowe do kampanii reklamowych.",
    link: "/uslugi/produkcja-filmow"
  },
  {
    icon: Palette,
    title: "Branding i identyfikacja wizualna",
    description: "Budujemy i rozwijamy Twój brand. Logo, brandbook, system identyfikacji wizualnej, materiały graficzne. Spójna identyfikacja wizualna Twojej marki przekłada się na wyższe ceny i lepsze konwersje.",
    link: "/uslugi/identyfikacja-wizualna"
  }
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Bezpłatna konsultacja i analiza",
    description: "Rozmawiamy o Twoim biznesie, celach i budżecie. Analizujemy aktualną sytuację marketingową, konkurencję i potencjał na warszawskim rynku. Na tej podstawie eksperci rekomendują zakres usług dopasowany do Twoich potrzeb."
  },
  {
    number: "02",
    icon: FileText,
    title: "Strategia i indywidualne podejście",
    description: "Tworzymy strategię z wyborem kanałów, harmonogramem kampanii, budżetem i mierzalnymi KPI. Żadnych standardowych pakietów — indywidualne podejście i plan szyty pod Twój biznes i specyfikę rynku Warszawy."
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
    question: "Jak wybrać właściwą agencję marketingową w Warszawie?",
    answer: "Kluczowe kryteria przy wyborze spośród najlepszych agencji marketingowych w Warszawie: udokumentowane wyniki (case studies z ROAS, wzrostem widoczności, liczbą leadów), transparentne raportowanie, dedykowany ekspert projektu (nie infolinia), oraz kompleksowa obsługa pod jednym dachem. Umów bezpłatną konsultację z 2–3 agencjami i porównaj ich indywidualne podejście."
  },
  {
    question: "Czy agencja z Poznania obsługuje klientów z Warszawy?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Warszawy i Mazowsza. Współpraca z klientem przebiega online (Google Meet, Teams). Przy większych kampaniach przyjeżdżamy do Warszawy. Ponad 40% naszych klientów pochodzi spoza Poznania — format online nie wpływa na jakość i wyniki kampanii reklamowych."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Warszawie?",
    answer: "Ceny zależą od zakresu usług. Pojedynczy kanał (np. pozycjonowania SEO lub kampanie Meta) to od 1 500–3 000 PLN/mies. Kompleksowa obsługa marketingowa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Każdą wycenę poprzedzamy bezpłatną konsultacją. Uważaj na reklama agencji w stylu 'kompleksowy marketing od 299 PLN' — zwykle oznacza brak strategii biznesowej."
  },
  {
    question: "Jakie kampanie reklamowe warto prowadzić dla firmy z Warszawy?",
    answer: "Warszawa to jeden z najbardziej konkurencyjnych rynków reklamowych w Polsce — wyższy CPL w Google Ads i Facebook Ads niż w mniejszych miastach. Dla firm lokalnych skuteczne są kampanie Google Ads (mapy, lokalne frazy) i pozycjonowania. Dla e-commerce — Google Shopping i kampanie Meta z precyzyjnym targetowaniem. Dobieramy efektywne strategie do celu i budżetu każdego klienta."
  },
  {
    question: "Czym różni się agencja marketingowa od agencji reklamowej?",
    answer: "Agencja reklamowa tradycyjnie skupia się na kreacji reklamy — visual, copy, spot. Agencja marketingowa ma szerszy zakres usług: strategia, SEO, kampanie, social media, email, analityka, branding, content. Agencja digital lub agencja interaktywna to kolejne określenia firm łączących technologię z kreatywnością. Fotz Studio to profesjonalna agencja full-service — projektujemy, wdrażamy i promujemy marki online."
  },
  {
    question: "Jak budować widoczność firmy w internecie w Warszawie?",
    answer: "Widoczność online buduje się przez: pozycjonowania organiczne (SEO) — długoterminowe, efektywne i trwałe; kampanie Google Ads — szybkie efekty, dobry zwrot przy dobrym zarządzaniu; obecność w mediach społecznościowych (Facebook, Instagram, LinkedIn, TikTok); kampanie reklamowe display i remarketing. Kompleksowe podejście — łączenie SEO z płatnymi kampaniami — daje najlepsze wyniki widoczności na rynku Warszawy."
  },
  {
    question: "Czy oferujecie kompleksową obsługę marketingową?",
    answer: "Tak, jesteśmy agencją full-service. Możemy zaprojektować stronę lub sklep, a następnie prowadzić jej kompleksowy marketing — SEO, Google Ads, kampanie Meta, social media (Instagram, Facebook, LinkedIn, TikTok), wideo, email. Jeden partner, pełna odpowiedzialność. Spójność strategii i kreacje dają lepsze efekty niż współpracować z kilkoma firmami naraz."
  },
  {
    question: "Czego szukać w agencji reklamowej Warszawa — kompletna lista?",
    answer: "Dobra agencja reklamowa Warszawa to pełne wsparcie marketingowe: kompleksowe usługi od SEO i Google Ads, przez agencja social media obsługę profili, po produkcję wideo i branding. Szukając jednej z 10 najlepszych agencji w Warszawie, sprawdź udokumentowane rozwiązania marketingowe dla swojej branży, dedykowany zespół i przejrzyste raportowanie wyników sprzedażowych."
  }
];

export default function AgencjaMarketingowaWarszawa() {
  return (
    <Layout>
      <SEOHead
        title="Agencja Marketingowa Warszawa | Marketing Internetowy | Fotz Studio"
        description="Agencja marketingowa obsługująca firmy z Warszawy. SEO, Google Ads, kampanie Meta, social media, strony internetowe i produkcja wideo. Bezpłatna konsultacja."
        canonical="https://fotz.pl/agencja-marketingowa-warszawa"
        keywords="agencja marketingowa Warszawa, marketing internetowy Warszawa, agencja reklamowa Warszawa, kampanie reklamowe Warszawa, agencja SEO Warszawa, Google Ads Warszawa, digital marketing Warszawa, marketing dla firm Warszawa"
      />

      <ServiceSchema
        name="Agencja Marketingowa Warszawa"
        description="Kompleksowe usługi marketingu internetowego dla firm z Warszawy — SEO, Google Ads, kampanie Meta, social media, strony internetowe i produkcja wideo."
        provider="Fotz Studio"
        areaServed="Warszawa"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa Warszawa", url: "https://fotz.pl/agencja-marketingowa-warszawa" }
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-primary" /> Warszawa i cała Polska — współpraca online
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Agencja Marketingowa{" "}
              <span className="text-gradient">Warszawa</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kompleksowy marketing internetowy dla firm z Warszawy i Mazowsza. SEO, Google Ads,
              social media, strony internetowe i wideo — wszystko w jednej agencji. Fotz Studio to profesjonalna agencja reklamowa Warszawa
              i agencja digital łącząca kreatywność z analityką danych.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Warszawski rynek biznesowy jest jednym z najbardziej konkurencyjnych w Polsce. Firmy, które inwestują
              w profesjonalne kampanie marketingowe i strategię, systematycznie zyskują nowych klientów
              i budują widoczność w internecie.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
              { value: "200+", label: "zrealizowanych kampanii i projektów" },
              { value: "8+ lat", label: "na rynku digital marketingu" },
              { value: "15 branż", label: "obsługiwanych sektorów biznesowych" },
              { value: "4.9/5", label: "średnia ocen klientów" }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{s.value}</div>
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
                Agencja marketingowa Warszawa —{" "}
                <span className="text-gradient">zgłoś się, jeśli Twoja firma…</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Współpracujemy z klientami, którzy traktują marketing jako inwestycję biznesową, nie koszt.
                Oferujemy indywidualne podejście i efektywne strategie dopasowane do Twojego rynku.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Chcesz zwiększyć sprzedaż i pozyskiwać nowych klientów przez internet online",
                "Prowadzisz kampanie reklamowe, ale nie widzisz zwrotu z inwestycji",
                "Konkurencja wyprzedza Cię w Google i chcesz budować widoczność organiczną",
                "Potrzebujesz nowej strony lub sklepu z kompleksowym marketingiem",
                "Masz budżet reklamowy, ale brak czasu, by efektywny marketing prowadzić samodzielnie",
                "Zależy Ci na spójnej strategii — od kreacje graficznego po kampanie cyfrowy marketing"
              ].map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border/30 bg-card/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why us */}
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
                Dlaczego klienci z Warszawy{" "}
                <span className="text-gradient">wybierają Fotz Studio?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nie jesteśmy najtańszą agencją — jesteśmy jedną z najlepszych agencji marketingowych w Warszawie pod względem wyników.
                Łączymy profesjonalizm i kreatywność, by budować trwałą widoczność Twojej marki i wyniki sprzedażowe,
                które realnie przekładają się na biznes.
              </p>
            </motion.div>

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
                  desc: "Masz stały kontakt z ekspertem znającym Twój biznes i rynkową specyfikę Warszawy. Budujesz relację i wiedzę — nie zaczynasz od nowa po każdej rotacji. Twój opiekun zna Twoje kampanie od wewnątrz."
                },
                {
                  icon: Award,
                  title: "Kompleksowy marketing bez podwykonawców",
                  desc: "Pełne wsparcie i kompleksowe usługi z zakresu SEO, Google Ads, social media, stron i wideo — wszystko wewnętrznie. Kompleksowe rozwiązania marketingowe pod jednym dachem. Dedykowany zespół specjalistów, jedna faktura."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-card/20">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                <span className="text-gradient">dla firm z Warszawy</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompleksowa reklama i marketing — od strategii, przez kreacje wizualne, po kampanie reklamowe,
                pozycjonowania i obsługę mediach społecznościowych.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
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
                <span className="text-gradient">w Warszawie?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Na warszawskim rynku działa kilkaset agencji reklamowych i marketingowych. Oto kryteria,
                które pomogą wybrać partnera, a nie dostawcę faktur.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {chooseCriteria.map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-background">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Uwaga na najtańszą ofertę z Warszawy:</strong> Agencje marketingowe oferujące bardzo niskie stawki często pracują na szablonach bez strategii biznesowej, nie mierzą konwersji, albo współpracować wolą z tanimi podwykonawcami. Najtańsza reklama Warszawy rzadko oznacza najlepszy zwrot z inwestycji w kampanie reklamowe. Zamiast ceny — pytaj o wyniki.
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
                <span className="text-gradient">współpraca z klientem?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Każda współpraca z klientem z Warszawy zaczyna się od rozmowy, nie cennika.
                Poznajemy Twój biznes, zanim zaproponujemy strategię marketingową i zakres usług.
              </p>
            </motion.div>

            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-6 p-6 rounded-2xl border border-border/40 bg-card/20"
                >
                  <div className="text-4xl font-heading font-bold text-primary/20 shrink-0 leading-none">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
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
                Najczęstsze pytania — agencja marketingowa Warszawa
              </h2>
              <p className="text-muted-foreground">
                Odpowiadamy na pytania klientów o marketing, kampanie reklamowe i współpracę z agencją.
              </p>
            </motion.div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl border border-border/40 bg-background"
                >
                  <h3 className="font-heading font-semibold mb-3 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground pl-7">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/90 to-[#0F3053]/90">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Zacznijmy wspólnie budować marketing Twojej firmy w Warszawie
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy Twoją sytuację, kampanie reklamowe
              i zaproponujemy efektywne działania marketingowe dla Twojego biznesu.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/kontakt">
                  Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/realizacje">Zobacz case studies</Link>
              </Button>
            </motion.div>
            <motion.p variants={fadeIn} className="text-white/50 text-xs mt-6">
              Odpowiadamy w ciągu 24 godzin · Bez sprzedaży pod presją · Indywidualne podejście do każdego klienta
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Agencja marketingowa Poznań", to: "/agencja-marketingowa-poznan" },
              { label: "Strony internetowe Warszawa", to: "/uslugi/strony-internetowe/warszawa" },
              { label: "Sklepy internetowe Warszawa", to: "/uslugi/sklepy-internetowe/warszawa" },
              { label: "Agencja SEO Poznań", to: "/agencja-seo-poznan" },
              { label: "Pozycjonowanie stron", to: "/seo/pozycjonowanie" },
              { label: "Google Ads", to: "/uslugi/google-ads" },
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
    </Layout>
  );
}
