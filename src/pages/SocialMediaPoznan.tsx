import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, TrendingUp, Camera, MessageSquare, BarChart3, Zap, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";

const services = [
  {
    icon: Users,
    title: "Prowadzenie Facebooka",
    description: "Profesjonalne zarządzanie fanpage, tworzenie angażujących postów i budowanie społeczności."
  },
  {
    icon: Camera,
    title: "Instagram & Stories",
    description: "Tworzenie atrakcyjnych treści wizualnych, reels i stories dla Twojej marki."
  },
  {
    icon: Target,
    title: "Kampanie Meta Ads",
    description: "Precyzyjnie targetowane kampanie reklamowe generujące leady i sprzedaż."
  },
  {
    icon: MessageSquare,
    title: "LinkedIn B2B",
    description: "Budowanie profesjonalnego wizerunku i pozyskiwanie klientów biznesowych."
  },
  {
    icon: BarChart3,
    title: "Analityka i Raportowanie",
    description: "Monitoring wyników, analiza KPI i optymalizacja działań w czasie rzeczywistym."
  },
  {
    icon: Zap,
    title: "Content Marketing",
    description: "Strategiczne tworzenie treści, które angażują i konwertują odbiorców."
  }
];

const caseStudies = [
  {
    title: "Kampania na Facebooku",
    description: "Lokalna firma z Poznania odnotowała znaczący wzrost leadów dzięki precyzyjnie targetowanej kampanii. Wykorzystaliśmy Meta Ads, aby dotrzeć do konkretnych segmentów rynku.",
    icon: Target
  },
  {
    title: "Wzrost zaangażowania na Instagramie",
    description: "Dla marki odzieżowej zbudowaliśmy lojalną społeczność dzięki strategicznemu wykorzystaniu reels i stories oraz profesjonalnym sesjom zdjęciowym.",
    icon: Heart
  },
  {
    title: "Sesje zdjęciowe dla restauracji",
    description: "Profesjonalne zdjęcia potraw i wnętrz restauracji znacząco podniosły atrakcyjność profilu, przekładając się na wzrost rezerwacji.",
    icon: Camera
  }
];

const faqItems = [
  {
    question: "Czym zajmuje się agencja social media Poznań i jak może pomóc mojemu biznesowi?",
    answer: "Agencja social media Poznań specjalizuje się w prowadzeniu social mediów, tworzeniu strategii contentowej, kampanii reklamowych i optymalizacji performance. Dzięki współpracy z nami poprawisz swój wizerunek, zwiększysz zasięgi i zdobędziesz nowych klientów zarówno dla lokalu, jak i e-commerce."
  },
  {
    question: "Jak wygląda realne case study prowadzenia Facebooka?",
    answer: "Typowe case study pokazuje cele, zastosowane działania (treści, reklama, testy A/B), metryki performance (CTR, CPC, konwersje) i wyniki — np. wzrost zaangażowania, ruchu na stronie i sprzedaży. Case study ilustruje też, jak poprawiliśmy wizerunek marki i jak zdobędziesz nowych klientów dzięki kampanii."
  },
  {
    question: "Jakie usługi związane z social media oferujecie w ramach performance marketingu?",
    answer: "W zakresie performance oferujemy kampanie reklamowe na Facebooku, optymalizację konwersji, analitykę, remarketing oraz testy kreatywne. Wszystko po to, aby reklama była efektywna i przynosiła mierzalne rezultaty dla e-commerce oraz tradycyjnych biznesów."
  },
  {
    question: "Czy możecie pomóc w budowaniu pozytywnego wizerunku marki?",
    answer: "Tak — opracujemy strategię komunikacji, content plan, zarządzanie kryzysowe i działania reklamowe, które wspólnie zbudują spójny i pozytywny wizerunek. Dzięki monitorowaniu reakcji użytkowników oraz optymalizacji performance szybko zobaczysz efekty."
  },
  {
    question: "Jakie korzyści przynosi współpraca z lokalną agencją z Poznania?",
    answer: "Lokalna agencja lepiej rozumie rynek i kontekst Poznania, szybciej reaguje na potrzeby klienta i może zaoferować spersonalizowane strategie. Bliższa współpraca często przekłada się na lepsze wyniki performance i szybsze wdrożenia kampanii reklamowych."
  },
  {
    question: "Jak wygląda proces tworzenia kampanii reklamowej na Facebooku?",
    answer: "Proces obejmuje audyt profilu i konkurencji, ustalenie celów (np. sprzedaż, pozyskanie leadów), tworzenie kreacji i copy, ustawienie targetowania, uruchomienie reklam oraz ciągłą optymalizację. Na końcu przedstawiamy raport z wynikami i rekomendacje."
  },
  {
    question: "Czy możecie pomóc małemu sklepowi e-commerce?",
    answer: "Oczywiście — przygotujemy kampanie reklamowe dostosowane do budżetu, zoptymalizujemy sklep pod kątem konwersji, poprowadzimy działania w social mediach i remarketing, co zwiększy ruch i sprzedaż."
  },
  {
    question: "Jak mierzyć sukces działań w social media?",
    answer: "Sukces mierzy się za pomocą KPI takich jak zasięg, zaangażowanie, CTR, koszt na konwersję, ROAS oraz wzrost sprzedaży. Regularne raporty pokazują postępy i pozwalają optymalizować reklamę dla lepszych wyników."
  },
  {
    question: "Jak wybrać najlepszą agencję social media dla mojej firmy?",
    answer: "Sprawdź portfolio i case study agencji, poproś o referencje, zwróć uwagę na doświadczenie w Twojej branży, oceniaj podejście do performance i komunikacji oraz upewnij się, że agencja pomoże Ci z reklamą i budową spójnego wizerunku."
  }
];

export default function SocialMediaPoznan() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Social Media Poznań — Obsługa i Prowadzenie Social Media | Fotz Studio"
        description="Obsługa social media Poznań — prowadzenie Facebooka, Instagrama, LinkedIn dla firm z Poznania. Content, kampanie reklamowe, analityka. Fotz Studio."
        canonical="https://fotz.pl/social-media/poznan"
        keywords="agencja social media poznań, obsługa social media poznań, prowadzenie fanpage poznań, social media marketing poznań, facebook ads poznań"
      />
      <ServiceSchema
        name="Agencja Social Media Poznań"
        description="Profesjonalne prowadzenie Facebooka, Instagrama i LinkedIn. Kampanie Meta Ads, content marketing i budowanie wizerunku marki."
        provider="Fotz Studio"
        areaServed="Poznań"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Social Media", url: "https://fotz.pl/social-media/obsluga" },
          { name: "Social Media Poznań", url: "https://fotz.pl/social-media/poznan" }
        ]}
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
              Agencja Social Media Poznań:{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Marketing i Prowadzenie Facebooka
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl">
              W Fotz rozumiemy, jak istotny jest profesjonalny wizerunek w sieci. Specjalizujemy się w kompleksowej obsłudze firm w zakresie marketingu w social mediach, oferując usługi od tworzenia strategii po realizację kampanii reklamowych. Działamy w Poznaniu, wspierając lokalne firmy w budowaniu silnej obecności online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 w-full sm:w-auto text-sm sm:text-base">
                <Link to="/kontakt">
                  Bezpłatna konsultacja <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                <Link to="/realizacje">Zobacz realizacje</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Agency Section */}
      <section className="py-20 section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Nasza Agencja Social Media w Poznaniu
            </h2>
            <p className="text-lg text-muted-foreground">
              Fotz to <strong>agencja social media w Poznaniu, która łączy kreatywne pomysły z realnymi celami biznesowymi</strong>. 
              Prowadzimy social media, koncentrując się na budowaniu zaangażowania i generowaniu leadów. 
              Rozumiemy specyfikę różnych platform, od Facebooka po LinkedIn, i dostosowujemy strategie do potrzeb każdej branży.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Dlaczego warto wybrać naszą agencję</h3>
              <p className="text-muted-foreground">
                Wybierając naszą agencję, zyskujesz partnera, który rozumie Twój biznes. Nie oferujemy szablonowych rozwiązań. 
                <strong> Nasze kampanie reklamowe są zawsze oparte na danych i analizach, co zapewnia maksymalną efektywność.</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Nasza misja i wizja</h3>
              <p className="text-muted-foreground">
                <strong>Naszą misją jest wspieranie firm w budowaniu silnego i autentycznego wizerunku marki w social mediach.</strong> 
                Wierzymy, że skuteczne prowadzenie profili to klucz do sukcesu w dzisiejszym świecie cyfrowym.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Zakres usług marketingowych</h3>
              <p className="text-muted-foreground">
                Oferujemy kompleksowy zakres usług w obszarze obsługi social media. 
                <strong> Tworzymy content, który angażuje grupy odbiorców i generuje leady.</strong> 
                Korzystamy z narzędzi Meta Ads i Google Ads.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Usługi Social Media
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kompleksowa obsługa social media dla firm z Poznania i okolic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasze Realizacje Video
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zobacz przykłady naszych produkcji video dla klientów
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: "/videos/autospa.mp4", title: "AutoSpa", description: "Reklama video dla myjni samochodowej" },
              { src: "/videos/sequence-01.mp4", title: "Produkcja video", description: "Profesjonalna produkcja reklamowa" },
              { src: "/videos/skaland-osiedle.mp4", title: "Skaland Osiedle", description: "Prezentacja inwestycji deweloperskiej" },
              { src: "/videos/eko-kamionki.mp4", title: "Eko Kamionki", description: "Relacja z eventu" },
              { src: "/videos/fun-sport-stylish.mp4", title: "Biuro Nieruchomości", description: "Produkcja video dla biura nieruchomości" },
              { src: "/videos/fotz-reel.mp4", title: "Enea Stadion", description: "Realizacja z meczu dla Enea Stadion Poznań" },
            ].map((video, index) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
              >
                <div className="relative aspect-video">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    controls
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90">
              <Link to="/realizacje">
                Zobacz wszystkie realizacje <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Case Studies i Sukcesy Klientów
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Przykłady naszych realizacji dla firm z Poznania
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
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-6">
                  <study.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{study.title}</h3>
                <p className="text-muted-foreground">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Strategie Marketingowe dla Twojego Biznesu
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <Eye className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-heading font-semibold mb-4">Analiza rynku i konkurencji</h3>
              <p className="text-muted-foreground">
                <strong>Kompleksowa strategia marketingowa zaczyna się od dogłębnej analizy rynku i konkurencji.</strong> 
                Nasz zespół analizuje trendy, identyfikuje nisze i bada działania konkurentów, aby opracować unikalną strategię.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <Target className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-heading font-semibold mb-4">Spersonalizowane kampanie</h3>
              <p className="text-muted-foreground">
                <strong>Skupiamy się na tworzeniu contentu, który angażuje grupy odbiorców i generuje leady.</strong> 
                Wykorzystujemy narzędzia Meta Ads i Google Ads, aby dotrzeć do odpowiednich grup docelowych.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <TrendingUp className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-heading font-semibold mb-4">Optymalizacja konwersji</h3>
              <p className="text-muted-foreground">
                <strong>Nie tylko generujemy leady, ale również dbamy o ich optymalizację i konwersję.</strong> 
                Analizujemy ścieżki konwersji i wdrażamy rozwiązania zwiększające efektywność sprzedaży.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasze Podejście do Social Media w Poznaniu
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Budowanie marki w sieci</h3>
              <p className="text-muted-foreground">
                <strong>Nasze działania koncentrują się na tworzeniu wartościowego contentu, który angażuje grupy odbiorców i buduje trwałe relacje z klientami.</strong> 
                Dbamy o to, by każdy element komunikacji wspierał wizerunek marki.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Monitoring i analiza wyników</h3>
              <p className="text-muted-foreground">
                <strong>Kluczowym elementem skutecznego prowadzenia kampanii jest ciągły monitoring i analiza wyników.</strong> 
                Korzystamy z zaawansowanych narzędzi analitycznych Meta i Google Ads.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Przyszłość marketingu</h3>
              <p className="text-muted-foreground">
                <strong>Przyszłość marketingu w social media to personalizacja, automatyzacja i wykorzystanie sztucznej inteligencji.</strong> 
                Stale śledzimy najnowsze trendy i innowacje.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Często Zadawane Pytania
            </h2>
            <p className="text-lg text-muted-foreground">
              Odpowiedzi na najczęstsze pytania o social media marketing
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-medium py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 section-padding bg-gradient-to-br from-[#75143F] to-[#0F3053]">
        <div className="container-wide px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6 text-white">
              Skontaktuj się z Nami
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              <strong>Oferujemy bezpłatną konsultację</strong>, podczas której przeanalizujemy Państwa obecną sytuację w social mediach 
              i zaproponujemy spersonalizowaną strategię marketingową.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90 w-full sm:w-auto text-sm sm:text-base">
                <Link to="/kontakt">
                  Umów darmową konsultację <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-sm sm:text-base">
                <a href="tel:+48790814814">
                  Zadzwoń: +48 790 814 814
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Agencja social media Poznań — obsługa social mediów dla firm z Poznania</h2>
            <p className="text-muted-foreground mb-4">Agencja social media Poznań — Fotz Studio prowadzi profile społecznościowe dla firm z Poznania i Wielkopolski. Obsługa social media obejmuje: tworzenie strategii, produkcję contentu (grafiki, wideo, teksty), zarządzanie profilami (Facebook, Instagram, LinkedIn, TikTok), prowadzenie kampanii reklamowych i analizę wyników.</p>
            <p className="text-muted-foreground mb-6">Prowadzenie social media dla firm z Poznania to nasza codzienność od kilku lat. Znamy lokalny rynek, wiemy jakie treści angażują poznańskich odbiorców i jak docierać do potencjalnych klientów w Wielkopolsce. Agencja social media Poznań z portfolio dziesiątek lokalnych firm.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Social media marketing Poznań — kampanie reklamowe i organiczny growth</h2>
            <p className="text-muted-foreground">Social media marketing Poznań łączy organiczny content z płatnymi kampaniami Facebook Ads i Instagram Ads. Targetowanie reklam na Poznań i okolice, kreacje dopasowane do lokalnej specyfiki i systematyczne raportowanie efektów — to nasza agencja social media w Poznaniu. Skontaktuj się i sprawdź ofertę obsługi social media dla Twojej firmy.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/agencja-marketingowa-poznan" className="text-primary hover:underline font-medium text-sm">→ Agencja marketingowa Poznań</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
}
