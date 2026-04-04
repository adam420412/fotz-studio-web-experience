import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FileText, ArrowRight, CheckCircle, Target, TrendingUp, 
  Users, BarChart3, Plus, Minus, Phone, Search, Share2, 
  MessageSquare, Mail, PenTool, Video, Image, BookOpen
} from "lucide-react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/seo/StructuredData";
import { RelatedServices } from "@/components/sections/RelatedServices";

// Case studies for content marketing
import klageImage from "@/assets/portfolio/klagem.png";
import eneaImage from "@/assets/portfolio/enea-stadion.png";
import rppgImage from "@/assets/portfolio/rppg.png";

const caseStudies = [
  {
    title: "Klagem",
    description: "Strategia content marketingowa dla marki kosmetyków premium z blogiem branżowym.",
    image: klageImage,
    results: ["+180% ruchu organicznego", "Top 3 w Google", "40 artykułów SEO"],
    href: "/realizacje/klagem",
  },
  {
    title: "Enea Stadion",
    description: "Dystrybucja treści eventowych i budowanie zaangażowania w social media.",
    image: eneaImage,
    results: ["+250% engagement", "Viral content", "Newsletter 15k subskrybentów"],
    href: "/realizacje/enea-stadion",
  },
  {
    title: "RPPG",
    description: "Content marketing B2B dla firmy technologicznej - whitepapers i case studies.",
    image: rppgImage,
    results: ["+320% leadów", "Thought leadership", "Publikacje branżowe"],
    href: "/realizacje/rppg",
  },
];

const contentTypes = [
  {
    icon: FileText,
    title: "Artykuły i blogi",
    description: "Wartościowe treści SEO budujące autorytet marki i przyciągające ruch organiczny.",
  },
  {
    icon: Video,
    title: "Video content",
    description: "Filmy, reelsy i materiały wideo angażujące odbiorców w social media.",
  },
  {
    icon: Image,
    title: "Infografiki",
    description: "Wizualne przedstawienie danych i informacji - idealne do udostępniania.",
  },
  {
    icon: BookOpen,
    title: "E-booki i poradniki",
    description: "Rozbudowane materiały edukacyjne generujące leady i budujące ekspertyzę.",
  },
];

const distributionChannels = [
  { name: "Blog firmowy", desc: "Centrum treści marki" },
  { name: "Social media", desc: "Facebook, Instagram, LinkedIn" },
  { name: "Newsletter", desc: "Bezpośrednia komunikacja" },
  { name: "YouTube", desc: "Video marketing" },
  { name: "Portale branżowe", desc: "Publikacje zewnętrzne" },
  { name: "Podcast", desc: "Audio content" },
];

const processSteps = [
  {
    step: "01",
    title: "Analiza i strategia",
    desc: "Definiujemy cele content marketingu i poznajemy Twoją grupę docelową.",
  },
  {
    step: "02",
    title: "Planowanie treści",
    desc: "Tworzymy kalendarz publikacji z tematami dopasowanymi do odbiorców.",
  },
  {
    step: "03",
    title: "Tworzenie contentu",
    desc: "Profesjonalne teksty, grafiki i materiały video wysokiej jakości.",
  },
  {
    step: "04",
    title: "Dystrybucja treści",
    desc: "Publikujemy i promujemy content w odpowiednich kanałach.",
  },
  {
    step: "05",
    title: "Analiza i optymalizacja",
    desc: "Mierzymy efekty i optymalizujemy strategię content marketingową.",
  },
];

const benefits = [
  "Budowanie świadomości marki",
  "Zwiększenie ruchu organicznego na stronie",
  "Generowanie wartościowych leadów",
  "Pozycjonowanie jako ekspert w branży",
  "Długotrwałe efekty SEO",
  "Budowanie lojalnej społeczności",
];

const faqItems = [
  {
    question: "Co to jest definicja content marketingu?",
    answer: "Definicja content marketingu to strategia marketingowa polegająca na tworzeniu i dystrybucji wartościowych, relevantnych i spójnych treści, aby przyciągnąć i zbudować relację z określoną grupą odbiorców - z ostatecznym celem skłonienia ich do podjęcia korzystnej akcji.",
  },
  {
    question: "Jakie są główne zalety treści w content marketingu?",
    answer: "Główne zalety to budowanie zaufania i pozytywnych relacji z odbiorcami, poprawa widoczności marki oraz pozycjonowanie stron w wynikach wyszukiwania, co z kolei przyciąga większy ruch na stronę internetową i generuje lejek sprzedażowy.",
  },
  {
    question: "Jak mierzyć skuteczność content marketingu?",
    answer: "Skuteczność content marketingu można mierzyć poprzez analizę zaangażowania odbiorców, ruchu na stronie internetowej, konwersji, pozycji w wynikach wyszukiwania oraz ROI (return on investment) działań marketingowych.",
  },
  {
    question: "Co obejmuje optymalizacja w ramach strategii content marketingu?",
    answer: "Optymalizacja w ramach strategii content marketingu obejmuje SEO (Search Engine Optimization) czyli pozycjonowanie treści pod kluczowe słowa, poprawę jakości treści, formatowania dla lepszego UX (User Experience) oraz dostosowanie do różnych kanałów dystrybucji.",
  },
  {
    question: "Jakie wartościowe treści należy tworzyć w ramach content marketingu?",
    answer: "Wartościowe treści powinny być edukacyjne, informacyjne lub rozrywkowe, a jednocześnie relevantne dla grupy docelowej. Mogą to być artykuły, blogi, video content, infografiki, case studies i więcej, w zależności od preferencji odbiorców.",
  },
  {
    question: "Dlaczego content marketing jest ważny dla firmy?",
    answer: "Content marketing jest ważny, ponieważ pomaga budować długoterminowe relacje z klientami, poprawia rozpoznawalność marki, zwiększa widoczność w Internecie oraz przyciąga wysokiej jakości leady, co w efekcie prowadzi do wzrostu sprzedaży.",
  },
  {
    question: "Jakie narzędzia content marketingu mogą wspomóc kampanie SEO?",
    answer: "Do narzędzi wspomagających kampanie SEO należą platformy do analizy słów kluczowych, narzędzia do audytu SEO, platformy do zarządzania treścią i mediów społecznościowych, jak również oprogramowanie do automatyzacji marketingu i narzędzia analityczne, które pozwalają mierzyć efekty działań.",
  },
  {
    question: "Jak tworzenie wartościowych treści wpływa na pozycjonowanie stron?",
    answer: "Tworzenie wartościowych treści wpływa na pozycjonowanie stron poprzez zwiększanie ilości treści wysokiej jakości, co jest jednym z kluczowych czynników rankingowych w SEO. Regularne publikowanie wartościowych treści zwiększa też szanse na zdobycie backlinków i dłuższy czas spędzany przez użytkowników na stronie.",
  },
];

export default function ContentMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Content Marketing | Strategia Treści | Fotz"
        description="Content marketing dla firm - artykuły SEO, blogi, case studies. Buduj autorytet i pozyskuj klientów treścią. Fotz Studio."
        canonical="https://fotz.pl/content-marketing/strategia"
        keywords="content marketing, marketing treści, strategia content marketing, seo content, blog firmowy"
      />

      <OrganizationSchema />
      <WebPageSchema
        title="Content Marketing - Definicja, Zalety i Strategia SEO"
        description="Co to jest content marketing? Poznaj definicję, zalety marketingu treści i dowiedz się jak mierzyć efekty kampanii SEO."
        url="https://fotz.pl/content-marketing"
      />
      <ServiceSchema
        name="Content Marketing - Marketing Treści"
        description="Kompleksowe usługi content marketingu - strategia, tworzenie wartościowych treści, dystrybucja i analiza efektów kampanii SEO."
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Content Marketing", url: "https://fotz.pl/content-marketing" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Content Marketing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Co to jest content marketing?{" "}
              <span className="text-gradient">Definicja, zalety i kampania SEO</span> - jak mierzyć efekty?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Content marketing staje się coraz bardziej kluczowy w strategiach marketingowych firm z różnych branż. 
              Jego skuteczność, połączona z możliwościami, jakie oferuje SEO, sprawia, że stał się jednym z głównych 
              narzędzi pozyskiwania nowych klientów oraz budowania długotrwałych relacji z odbiorcami.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+48790814814" className="group">
                  <Phone className="w-5 h-5" />
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podstawy content marketingu */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Jakie są podstawy <span className="text-gradient">content marketingu?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Czym jest content marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Czym jest content marketing i jakie ma cele?</h3>
              <p className="text-muted-foreground">
                Content marketing, znany również jako marketing treści, polega na tworzeniu i dystrybuowaniu 
                wartościowych treści, które mają za zadanie przyciągnąć i zaangażować określoną grupę docelową, 
                a w efekcie - spowodować akcję korzystną dla marki. Cele content marketingu są różnorodne - 
                mogą się one koncentrować na budowaniu świadomości marki, pozyskiwaniu leadów, wsparciu sprzedaży, 
                ale przede wszystkim na budowaniu długotrwałych relacji z użytkownikami.
              </p>
            </motion.div>

            {/* Zalety content marketingu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Jakie są główne zalety stosowania content marketingu?</h3>
              <p className="text-muted-foreground">
                Zalety content marketingu są liczne. Dzięki publikowaniu wartościowych treści marki mogą lepiej 
                pozycjonować się w wynikach wyszukiwania, co z kolei przekłada się na większy ruch na stronie. 
                Co więcej, content marketing pozwala na budowanie pozytywnego wizerunku marki oraz zaangażowania 
                wśród odbiorców, co jest kluczem do kształtowania lojalnej bazy klientów.
              </p>
            </motion.div>

            {/* Różnice od reklamy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Czym różni się content marketing od tradycyjnych form reklamy?</h3>
              <p className="text-muted-foreground">
                W przeciwieństwie do tradycyjnych form reklamy, content marketing skupia się na dostarczaniu 
                wartości dla odbiorcy, zamiast jedynie promować produkty czy usługi. Strategia ta opiera się 
                na przekonaniu, że dostarczenie użytkownikowi wartościowego contentu może skuteczniej 
                przyciągnąć jego uwagę i wywołać pożądane działania, takie jak zakup produktu czy zapis na newsletter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategia content marketingowa */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Jak opracować skuteczną <span className="text-gradient">strategię content marketingową?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-heading font-bold mb-4">Jak zdefiniować cele marketingu treści dla Twojej marki?</h3>
                <p className="text-muted-foreground">
                  Definiowanie celów jest kluczowym elementem każdej strategii marketingowej. W content marketingu 
                  powinny one być ściśle związane z ogólnymi celami biznesowymi firmy oraz potrzebami i oczekiwaniami 
                  grupy docelowej. Cele te mogą obejmować zwiększenie ruchu na stronie, poprawę pozycji w wyszukiwarkach 
                  internetowych, wzrost sprzedaży, a także budowanie zaangażowania i lojalności wśród odbiorców.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-heading font-bold mb-4">W jaki sposób dobrać odpowiednie kanały dystrybucji treści?</h3>
                <p className="text-muted-foreground">
                  Wybór odpowiednich kanałów dystrybucji treści jest równie ważny co sama jakość publikowanego contentu. 
                  Kanały te powinny być dopasowane do preferencji i zachowań grupy docelowej oraz rodzaju treści. 
                  Social media, blog firmowy, newsletter, a nawet kanały zewnętrzne takie jak portale branżowe, 
                  mogą skutecznie promować content i przyciągać ruch na stronę marki.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-heading font-bold mb-4">Jakie rodzaje treści są najskuteczniejsze w strategii content marketingowej?</h3>
                <p className="text-muted-foreground">
                  Rodzaje treści, które można wykorzystać w content marketingu, są bardzo różnorodne i mogą obejmować 
                  artykuły, blogi, infografiki, filmy, poradniki, czy studia przypadków. Wybór formatu powinien bazować 
                  na preferencjach grupy docelowej oraz celach, jakie firma chce osiągnąć. Ważne, aby treści były 
                  wartościowe, interesujące i odpowiednio dopasowane do etapu ścieżki zakupowej potencjalnych klientów.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Kluczowe korzyści strategii content marketingu:</h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Marketing i SEO */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Content marketing i SEO:{" "}
              <span className="text-gradient">Jak je połączyć, by zwiększyć widoczność w sieci?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Jak optymalizować content pod kątem wyszukiwarek internetowych?</h3>
              <p className="text-muted-foreground">
                Optymalizacja contentu pod kątem SEO jest kluczowa dla poprawy widoczności strony w wynikach wyszukiwania. 
                Obejmuje to zarówno optymalizację tekstu za pomocą odpowiednich słów kluczowych, jak i aspekty techniczne 
                takie jak szybkość ładowania strony, responsywność, czy poprawne oznaczanie tytułów i opisów meta. 
                Wszystkie te działania mają na celu nie tylko przyciągnąć większą liczbę użytkowników, ale i poprawić 
                ich doświadczenie na stronie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <PenTool className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Znaczenie słów kluczowych i algorytmów wyszukiwarek</h3>
              <p className="text-muted-foreground">
                Słowa kluczowe i algorytmy wyszukiwarek są fundamentem skutecznej strategii SEO. Słowa kluczowe 
                pomagają określić, jakie treści są najbardziej istotne dla naszej grupy docelowej, natomiast 
                zrozumienie algorytmów wyszukiwarek pozwala na dostosowanie treści tak, by były one jak najbardziej 
                przyjazne dla użytkownika i wyszukiwarki, co z kolei przekłada się na lepsze pozycjonowanie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Share2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Jakie znaczenie mają linki zwrotne dla SEO i content marketingu?</h3>
              <p className="text-muted-foreground">
                Linki zwrotne, czyli tzw. backlinks, stanowią jeden z ważniejszych czynników rankingowych w SEO. 
                Jakość i ilość linków prowadzących do naszej strony może znacząco wpłynąć na jej pozycję w wyszukiwarkach. 
                Dobrej jakości content marketing przyciąga linki zwrotne z innych, renomowanych stron, co jest pozytywnie 
                oceniane przez algorytmy wyszukiwarek i przekłada się na lepsze pozycjonowanie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Rodzaje treści w <span className="text-gradient">content marketingu</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tworzymy różnorodne formaty contentu dopasowane do preferencji Twojej grupy docelowej.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mierzenie efektów */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Jak mierzyć skuteczność <span className="text-gradient">działań content marketingowych?</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3">Jakie narzędzia wykorzystać do mierzenia efektów kampanii?</h3>
                  <p className="text-muted-foreground">
                    Do mierzenia efektów działań content marketingowych można wykorzystać różne narzędzia analityczne 
                    dostępne online. Google Analytics jest jednym z najpopularniejszych, pozwalającym na szczegółową 
                    analizę ruchu na stronie, ścieżek użytkowników, a także konwersji. Korzystanie z narzędzi do 
                    analizy słów kluczowych również może dostarczyć cennych wskazówek dotyczących skuteczności contentu.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3">Wskaźniki KPI w content marketingu – jak je wybrać i interpretować?</h3>
                  <p className="text-muted-foreground">
                    Wskaźniki KPI (Key Performance Indicators) to niezbędne narzędzie do mierzenia skuteczności strategii 
                    content marketingu. Wybierając KPI, należy skupić się na tych, które najlepiej odzwierciedlają cele 
                    biznesowe i marketingowe naszej firmy, takich jak liczba odwiedzin, współczynnik odrzuceń, 
                    czas spędzony na stronie, czy liczba konwersji.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-3">Rola analityki internetowej w ocenie działalności</h3>
                  <p className="text-muted-foreground">
                    Analiza danych zbieranych przez narzędzia analityczne to podstawa oceny skuteczności działań 
                    content marketingowych. Pozwala ona nie tylko na zrozumienie zachowań i preferencji użytkowników, 
                    ale także na identyfikację najbardziej skutecznych rodzajów treści czy kanałów dystrybucji.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Users, value: "+180%", label: "Wzrost ruchu organicznego" },
                { icon: TrendingUp, value: "3x", label: "Więcej leadów" },
                { icon: BarChart3, value: "65%", label: "Wyższy engagement" },
                { icon: Target, value: "Top 3", label: "Pozycje w Google" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 text-center border border-border"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dystrybucja treści */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Dystrybucja treści w strategii <span className="text-gradient">content marketingowej</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Wybór odpowiednich kanałów dystrybucji jest kluczowy dla sukcesu Twojej strategii content marketingowej.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">Jak wykorzystać social media w dystrybucji treści marketingowych?</h3>
              <p className="text-muted-foreground mb-6">
                Social media są jednym z najpotężniejszych narzędzi w dystrybucji treści marketingowych. 
                Pozwalają na dotarcie do szerokiego grona odbiorców, a także na budowanie bezpośrednich relacji 
                z użytkownikami. Pamiętając o zasadach odpowiedniego targetowania i personalizacji treści, 
                media społecznościowe mogą skutecznie zwiększać zasięg publikowanego contentu oraz angażować grupę docelową.
              </p>
              
              <h3 className="text-2xl font-heading font-bold mb-4">Rola bloga firmowego i newslettera w budowaniu zaangażowania</h3>
              <p className="text-muted-foreground">
                Blog firmowy oraz regularnie wysyłany newsletter to doskonałe narzędzia do budowania zaangażowania 
                odbiorców oraz pozycjonowania się jako eksperta w swojej branży. Dostarczanie wartościowych 
                i atrakcyjnych treści poprzez te kanały może przyczynić się do budowania lojalnej społeczności 
                wokół marki oraz zwiększać konwersje.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Kanały dystrybucji treści:</h3>
              <div className="grid grid-cols-2 gap-4">
                {distributionChannels.map((channel, index) => (
                  <motion.div
                    key={channel.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-all"
                  >
                    <h4 className="font-heading font-bold mb-1">{channel.name}</h4>
                    <p className="text-sm text-muted-foreground">{channel.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">Jakie formaty contentu przyciągają uwagę odbiorców i potencjalnych klientów?</h3>
            <p className="text-muted-foreground">
              W zależności od celów strategii content marketingowej i charakterystyki grupy docelowej, różne formaty 
              treści mogą być bardziej skuteczne. Infografiki i krótkie filmy często okazują się być atrakcyjne dla 
              użytkowników ceniących szybkie i przystępne źródło informacji. Z kolei artykuły branżowe i studia przypadków 
              są w stanie przyciągnąć uwagę bardziej wymagających odbiorców poszukujących dogłębnych analiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Nasz proces <span className="text-gradient">content marketingowy</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Przeprowadzamy przez cały proces - od strategii po mierzenie efektów kampanii.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-background rounded-2xl p-6 border border-border h-full">
                  <span className="text-4xl font-heading font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-lg font-heading font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Nasze realizacje <span className="text-gradient">content marketingowe</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zobacz, jak skuteczna strategia content marketingu przynosi realne efekty naszym klientom.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={study.href}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.results.map((result) => (
                        <span
                          key={result}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Najczęściej zadawane <span className="text-gradient">pytania</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
                >
                  <span className="font-heading font-bold pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Powiązane <span className="text-gradient">usługi</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "SEO / Pozycjonowanie", href: "/pozycjonowanie", desc: "Zwiększ widoczność w Google" },
              { title: "Social Media", href: "/social-media", desc: "Dystrybucja treści w mediach społecznościowych" },
              { title: "Strony internetowe", href: "/strony-internetowe", desc: "Blog firmowy i platforma contentowa" },
              { title: "Produkcja video", href: "/produkcja-filmow-poznan", desc: "Video content marketing" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all group"
                >
                  <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Related Services */}
      <RelatedServices 
        currentService="content-marketing"
        subtitle="Usługi wspierające Twoją strategię content marketingową"
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Gotowy na skuteczną <span className="text-gradient">strategię content marketingową?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Skontaktuj się z nami i dowiedz się, jak marketing treści może zwiększyć widoczność 
              Twojej marki i przyciągnąć nowych klientów.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+48790814814">
                  <Phone className="w-5 h-5" />
                  +48 790 814 814
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}