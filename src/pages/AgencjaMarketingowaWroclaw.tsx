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
    description: "Projektujemy i wdrażamy strony www oraz sklepy e-commerce. Responsywne, szybkie, z content zoptymalizowanym pod SEO i konwersję. Shopify, WooCommerce, Next.js — kompleksowe rozwiązania dla firm z Wrocławia.",
    link: "/uslugi/strony-internetowe/wroclaw"
  },
  {
    icon: Search,
    title: "Pozycjonowanie SEO",
    description: "Fotz Studio jako agencja SEO Wrocław zwiększa widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla Wrocławia i rynku DACH.",
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
    description: "Fotz Studio to agencja social media dla firm z Wrocławia i całej Polski. Prowadzenie profili na Instagramie, Facebooku, LinkedIn i TikToku. Kreacje treści, harmonogram, kampanie zasięgowe i leadowe.",
    link: "/social-media/wroclaw"
  },
  {
    icon: Video,
    title: "Produkcja wideo i foto",
    description: "Profesjonalne sesje fotograficzne, filmy produktowe i kreacje wideo na social media. Realizacje w Wrocławiu i całej Polsce. Materiały graficzne i wideo gotowe do kampanii reklamowych dla startupów, tech i e-commerce.",
    link: "/uslugi/produkcja-filmow"
  },
  {
    icon: Palette,
    title: "Branding i identyfikacja wizualna",
    description: "Budujemy i rozwijamy Twój brand. Logo, brandbook, system identyfikacji wizualnej, materiały graficzne. Spójna identyfikacja wizualna Twojej marki przekłada się na wyższe ceny i lepsze konwersje dla firm tech i startupów.",
    link: "/uslugi/identyfikacja-wizualna"
  }
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Bezpłatna konsultacja i analiza",
    description: "Rozmawiamy o Twoim biznesie, celach i budżecie. Analizujemy aktualną sytuację marketingową, konkurencję i potencjał na wrocławskim rynku. Na tej podstawie eksperci rekomendują zakres usług dopasowany do Twoich potrzeb."
  },
  {
    number: "02",
    icon: FileText,
    title: "Strategia i indywidualne podejście",
    description: "Tworzymy strategię z wyborem kanałów, harmonogramem kampanii, budżetem i mierzalnymi KPI. Żadnych standardowych pakietów — indywidualne podejście i plan szyty pod Twój biznes i specyfikę rynku Wrocławia."
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
    question: "Jak wybrać właściwą agencję marketingową we Wrocławiu?",
    answer: "Kluczowe kryteria przy wyborze spośród najlepszych agencji marketingowych we Wrocławiu: udokumentowane wyniki (case studies z ROAS, wzrostem widoczności, liczbą leadów), transparentne raportowanie, dedykowany ekspert projektu (nie infolinia), oraz kompleksowa obsługa pod jednym dachem. Umów bezpłatną konsultację z 2–3 agencjami i porównaj ich indywidualne podejście do rynku IT i startupów we Wrocławiu."
  },
  {
    question: "Czy agencja z Poznania obsługuje klientów z Wrocławia?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Wrocławia i okolic. Współpraca z klientem przebiega online (Google Meet, Teams). Przy większych kampaniach przyjeżdżamy do Wrocławia. Ponad 40% naszych klientów pochodzi spoza Poznania — format online nie wpływa na jakość i wyniki kampanii reklamowych, szczególnie dla firm tech i startupów."
  },
  {
    question: "Ile kosztuje agencja marketingowa we Wrocławiu?",
    answer: "Ceny zależą od zakresu usług. Pojedynczy kanał (np. pozycjonowania SEO lub kampanie Meta) to od 1 500–3 000 PLN/mies. Kompleksowa obsługa marketingowa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Każdą wycenę poprzedzamy bezpłatną konsultacją. Uważaj na reklama agencji w stylu 'kompleksowy marketing od 299 PLN' — zwykle oznacza brak strategii biznesowej."
  },
  {
    question: "Marketing dla startupów i firm tech we Wrocławiu — jak agencja powinna być zbudowana?",
    answer: "Wrocław to hub IT z największymi graczami jak Nokia, Samsung R&D, Google czy Credit Suisse. Marketing dla tech firm wymaga innego podejścia niż dla tradycyjnych branż — focus na thought leadership, content marketing, LinkedIn, webinary i komunity. Agencja powinna rozumieć cykl sprzedaży B2B/SaaS, obsługę lead generation przez osób decyzyjnych oraz scaling kampanii. Specjalizujemy się w marketingu dla startupów i firm tech we Wrocławiu."
  },
  {
    question: "Jakie kampanie reklamowe warto prowadzić dla firmy z Wrocławia?",
    answer: "Wrocław to rynek dynamiczny — 670k mieszkańców, największy IT hub w Polsce, silna scena startup'owa, bliskość rynku DACH (granica z Niemcami). Dla firm tech skuteczne są kampanie LinkedIn, thought leadership content, SEO dla long-tail keywords, kampanie Google Ads na high-intent queries. Dla e-commerce — Google Shopping i kampanie Meta. Dla B2B — content marketing i lead generation. Dobieramy strategie do celu i budżetu każdego klienta."
  },
  {
    question: "Czym różni się agencja marketingowa od agencji reklamowej?",
    answer: "Agencja reklamowa tradycyjnie skupia się na kreacji reklamy — visual, copy, spot. Agencja marketingowa ma szerszy zakres usług: strategia, SEO, kampanie, social media, email, analityka, branding, content. Agencja digital lub agencja interaktywna to kolejne określenia firm łączących technologię z kreatywnością. Fotz Studio to profesjonalna agencja full-service — projektujemy, wdrażamy i promujemy marki online."
  },
  {
    question: "Jak budować widoczność firmy tech lub startupem we Wrocławiu?",
    answer: "Widoczność online dla firm tech buduje się przez: pozycjonowania organiczne (SEO) — długoterminowe, efektywne dla long-tail keywords i Educational content; kampanie Google Ads — szybkie efekty dla high-intent klientów; obecność w mediach społecznościowych (LinkedIn dla B2B, Twitter/X dla tech, TikTok dla young audience); thought leadership i content marketing; kampanie remarketing. Kompleksowe podejście — łączenie SEO z płatnymi kampaniami i content marketing — daje najlepsze wyniki dla tech ecosystem Wrocławia."
  },
  {
    question: "Czy oferujecie kompleksową obsługę marketingową dla startupów?",
    answer: "Tak, jesteśmy agencją full-service. Możemy zaprojektować stronę lub aplikację web, a następnie prowadzić jej kompleksowy marketing — SEO, Google Ads, kampanie Meta, social media (Instagram, Facebook, LinkedIn, TikTok), wideo, email. Jeden partner, pełna odpowiedzialność. Spójność strategii i kreacje dają lepsze efekty niż współpracować z kilkoma firmami naraz. Specjalizujemy się w marketingu dla startupów, firm SaaS i tech we Wrocławiu."
  },
  {
    question: "Marketing na rynku DACH (Niemcy, Austria, Szwajcaria) — czy możecie wspomóc ekspansję?",
    answer: "Wrocław ma unikalną pozycję — bliskość rynku DACH, dostęp do talentów znających niemiecki, potencjał do ekspansji na Niemcy i Austrię. Możemy wspomóc kampanie Google Ads, LinkedIn, content marketing i SEO dla rynków niemieckojęzycznych. Współpracujemy z partnerami lokalnymi do targetowania rynków DACH. Jeśli planujesz ekspansję, zaproponujemy multikanałową strategię dla ekspansji zagranicznej."
  }
];

export default function AgencjaMarketingowaWroclaw() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Agencja Marketingowa Wrocław — Marketing Internetowy | Fotz Studio"
        description="Agencja marketingowa Wrocław. Fotz Studio — strony internetowe, SEO, Google Ads dla firm z Wrocławia. Bezpłatna wycena!"
        canonical="https://fotz.pl/agencja-marketingowa-wroclaw"
        keywords="agencja marketingowa Wrocław, marketing internetowy Wrocław, agencja reklamowa Wrocław, kampanie reklamowe Wrocław, agencja SEO Wrocław, Google Ads Wrocław, digital marketing Wrocław, marketing dla firm Wrocław, marketing startup Wrocław, marketing tech Wrocław"
      />

      <ServiceSchema
        name="Agencja Marketingowa Wrocław"
        description="Kompleksowe usługi marketingu internetowego dla firm z Wrocławia — SEO, Google Ads, kampanie Meta, social media, strony internetowe i produkcja wideo."
        provider="Fotz Studio"
        areaServed="Wrocław"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa Wrocław", url: "https://fotz.pl/agencja-marketingowa-wroclaw" }
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
                <MapPin className="w-4 h-4 text-primary" /> Wrocław i cała Polska — współpraca online
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Agencja Marketingowa{" "}
              <span className="text-gradient">Wrocław</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kompleksowy marketing internetowy dla firm z Wrocławia. SEO, Google Ads,
              social media, strony internetowe i wideo — wszystko w jednej agencji. Fotz Studio to profesjonalna agencja reklamowa Wrocław
              i agencja digital łącząca kreatywność z analityką danych.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              Wrocław to 670 tysięcy mieszkańców, największy IT hub w Polsce (Nokia, Samsung R&D, Google, Credit Suisse),
              europejska stolica kultury. Zagraniczna bliskość (DACH), silny startup ecosystem, Politechnika Wrocławska.
              Firmy, które inwestują w profesjonalne kampanie marketingowe, systematycznie zyskują nowych klientów.
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
              { value: "5+ lat", label: "doświadczenia we Wrocławiu" },
              { value: "120+", label: "klientów z Wrocławia i regionu" },
              { value: "+320%", label: "średni wzrost ruchu w kampaniach" },
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
                Agencja marketingowa Wrocław —{" "}
                <span className="text-gradient">zgłoś się, jeśli Twoja firma…</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Współpracujemy z klientami, którzy traktują marketing jako inwestycję biznesową, nie koszt.
                Oferujemy indywidualne podejście i efektywne strategie dopasowane do Twojego rynku.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Chcesz zwiększyć sprzedaż i pozyskiwać nowych klientów przez internet",
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
                Dlaczego klienci z Wrocławia{" "}
                <span className="text-gradient">wybierają Fotz Studio?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nie jesteśmy najtańszą agencją — jesteśmy jedną z najlepszych agencji marketingowych we Wrocławiu pod względem wyników.
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
                  desc: "Masz stały kontakt z ekspertem znającym Twój biznes i rynkową specyfikę Wrocławia. Budujesz relację i wiedzę — nie zaczynasz od nowa po każdej rotacji. Twój opiekun zna Twoje kampanie od wewnątrz."
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
                <span className="text-gradient">dla firm z Wrocławia</span>
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
                <span className="text-gradient">we Wrocławiu?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We Wrocławiu działa wiele agencji reklamowych i marketingowych. Oto kryteria,
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
                  <strong className="text-foreground">Uwaga na najtańszą ofertę z Wrocławia:</strong> Agencje marketingowe oferujące bardzo niskie stawki często pracują na szablonach bez strategii biznesowej, nie mierzą konwersji, albo współpracować wolą z tanimi podwykonawcami. Najtańsza reklama we Wrocławiu rzadko oznacza najlepszy zwrot z inwestycji w kampanie reklamowe. Zamiast ceny — pytaj o wyniki.
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
                Każda współpraca z klientem z Wrocławia zaczyna się od rozmowy, nie cennika.
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
                Najczęstsze pytania — agencja marketingowa Wrocław
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
              Zacznijmy wspólnie budować marketing Twojej firmy we Wrocławiu
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
              { label: "Agencja marketingowa Katowice", to: "/agencja-marketingowa-katowice" },
              { label: "Strony internetowe Wrocław", to: "/uslugi/strony-internetowe/wroclaw" },
              { label: "Pozycjonowanie SEO", to: "/seo/pozycjonowanie" },
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

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Agencja marketingowa Wrocław — marketing internetowy dla firm z Dolnego Śląska</h2>
            <p className="text-muted-foreground mb-4">Fotz Studio to agencja marketingowa Wrocław oferująca kompleksowe usługi marketingu cyfrowego dla firm z Wrocławia i Dolnego Śląska. Strategie marketingu cyfrowego, które tworzymy, łączą SEO, kampanie PPC, social media marketing i content marketing w spójny ekosystem, generujący leady i sprzedaż.</p>
            <p className="text-muted-foreground mb-6">Wrocław to dynamiczne miasto — 670 tysięcy mieszkańców, największy IT hub w Polsce (Nokia, Samsung R&D, Google, Credit Suisse), europejska stolica kultury 2016, bliskość rynku DACH, booming real estate i silny startup ecosystem. Agencja marketingowa we Wrocławiu musi znać specyfikę rynku i dysponować narzędziami, które pozwolą Twojej firmie wyróżnić się na tle konkurencji.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Marketing cyfrowy dla firm z Wrocławia — SEO, Google Ads i social media</h2>
            <p className="text-muted-foreground mb-4">Oferujemy: pozycjonowanie stron internetowych we Wrocławiu, kampanie Google Ads (search, shopping, display), obsługę Social Media (Facebook, Instagram, LinkedIn dla B2B, TikTok), tworzenie stron internetowych Wrocław i sklepów e-commerce, email marketing i marketing automation.</p>
            <p className="text-muted-foreground">Agencja marketingowa Wrocław z podejściem data-driven — analizujemy dane, by optymalizować każdy aspekt Twojej obecności online. Raporty efektywności kampanii, monitorowanie ruchu na stronie i analiza konwersji to elementy naszej standardowej usługi. Specjalizujemy się w marketingu dla startupów, firm tech, e-commerce i B2B. Skontaktuj się — bezpłatna konsultacja dla firm z Wrocławia.</p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
}
