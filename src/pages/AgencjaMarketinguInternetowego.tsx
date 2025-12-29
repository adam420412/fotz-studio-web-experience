import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Search,
  Target,
  TrendingUp,
  BarChart3,
  ChevronDown,
  Share2,
  Globe,
  FileText,
  Zap,
  LineChart,
  Users,
  Instagram,
  Linkedin,
  Facebook,
  Video,
  Palette
} from "lucide-react";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function AgencjaMarketinguInternetowego() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const howItWorks = [
    {
      icon: Globe,
      title: "Co to jest agencja marketingowa i jakie usługi oferuje?",
      description: "Agencja marketingowa to firma specjalizująca się w dostarczaniu różnorodnych usług związanych z marketingiem, w tym marketingiem internetowym. Agencje te oferują usługi takie jak SEO, SEM, kampanie Google Ads, content marketing, oraz rozwijanie strategii dla social media. Dzięki tym usługom, agencja może pomóc firmom poprawić ich widoczność w wyszukiwarkach, zwiększyć ruchu na stronie oraz poprawić konwersję."
    },
    {
      icon: Search,
      title: "Jak wybrać odpowiednią agencję marketingu internetowego?",
      description: "Wybór odpowiedniej agencji marketingu internetowego to kluczowy krok w strategii marketingowej każdej firmy. Przede wszystkim warto zwrócić uwagę na doświadczenie i specjalizację agencji. Sprawdź, jakie kampanie realizowali wcześniej i jakie wyniki osiągnęli dla swoich klientów. Ważne jest także, aby agencja oferowała usługi dostosowane do specyficznych potrzeb twojej firmy."
    },
    {
      icon: TrendingUp,
      title: "Dlaczego warto współpracować z profesjonalną agencją?",
      description: "Współpraca z profesjonalną agencją marketingu internetowego przynosi wiele korzyści. Dzięki specjalistycznej wiedzy i doświadczeniu, agencja może skutecznie zwiększyć widoczność twojej strony internetowej, co przekłada się na wzrost ruchu na stronie oraz potencjalnych klientów. Profesjonalna agencja potrafi także skutecznie przeprowadzać audyty SEO i SEM."
    }
  ];

  const keyElements = [
    {
      icon: Share2,
      title: "Rola social media w kampaniach reklamowych",
      description: "Social media odgrywają kluczową rolę w dzisiejszym marketingu internetowym. Platformy takie jak Facebook, Instagram i LinkedIn umożliwiają firmom dotarcie do szerokiej grupy docelowej w efektywny sposób. Kampanie reklamowe realizowane na tych platformach mogą zwiększyć zasięg marki, angażować użytkowników i budować lojalność klientów."
    },
    {
      icon: Search,
      title: "Znaczenie SEO i SEM w pozycjonowaniu stron",
      description: "SEO i SEM to dwa kluczowe elementy pozycjonowania stron internetowych. SEO, czyli optymalizacja dla wyszukiwarek, polega na poprawie widoczności strony w wynikach organicznych. Z kolei SEM, czyli marketing w wyszukiwarkach, obejmuje płatne kampanie reklamowe, takie jak Google Ads. Oba elementy są niezbędne dla sukcesu online."
    },
    {
      icon: FileText,
      title: "Jak efektywnie wykorzystać content marketing?",
      description: "Content marketing to strategia polegająca na tworzeniu wartościowych, angażujących treści, które przyciągają i zatrzymują uwagę potencjalnych klientów. Dobre treści mogą przyciągnąć ruch na stronie, zwiększyć zaufanie do marki i poprawić jej wizerunek. Ważne jest, aby treści były zoptymalizowane pod kątem SEO."
    }
  ];

  const googleAdsInfo = [
    {
      icon: Target,
      title: "Co to są Google Ads i jak działają?",
      description: "Google Ads to platforma reklamowa oferowana przez Google, która umożliwia firmom tworzenie płatnych kampanii reklamowych wyświetlanych w wynikach wyszukiwania oraz na stronach partnerskich. Działanie Google Ads opiera się na modelu PPC (pay-per-click), gdzie reklamodawcy płacą za każde kliknięcie w ich reklamę."
    },
    {
      icon: Zap,
      title: "Jak optymalizować kampanie Google Ads?",
      description: "Optymalizacja kampanii Google Ads jest kluczowa dla osiągnięcia wysokiej efektywności i maksymalizacji zwrotu z inwestycji. Proces ten obejmuje analizę wyników kampanii, testowanie różnych wariantów reklam, słów kluczowych oraz stron docelowych. Dzięki ciągłemu monitorowaniu można zwiększać skuteczność działań reklamowych."
    },
    {
      icon: LineChart,
      title: "Jak mierzyć sukces kampanii za pomocą Google Analytics?",
      description: "Google Analytics to narzędzie, które umożliwia szczegółowe monitorowanie i analizowanie ruchu na stronie internetowej. Dzięki niemu firmy mogą mierzyć sukces swoich kampanii reklamowych, analizując dane takie jak liczba odwiedzin, źródła ruchu, współczynnik konwersji oraz zachowanie użytkowników na stronie."
    }
  ];

  const auditInfo = [
    {
      icon: Search,
      title: "Dlaczego audyt SEO jest ważny dla pozycjonowania stron?",
      description: "Audyt SEO to proces oceny strony internetowej pod kątem jej zgodności z najlepszymi praktykami optymalizacji dla wyszukiwarek. Przeprowadzenie audytu SEO jest kluczowe dla identyfikacji problemów, które mogą wpływać na widoczność strony w wynikach wyszukiwania. Dzięki audytowi można zidentyfikować obszary wymagające poprawy."
    },
    {
      icon: BarChart3,
      title: "Jakie elementy powinien obejmować audyt SEM?",
      description: "Audyt SEM to analiza kampanii marketingowych prowadzonych w wyszukiwarkach internetowych, takich jak Google Ads. Audyt SEM powinien obejmować ocenę skuteczności słów kluczowych, analizę konkurencji, ocenę jakości stron docelowych oraz efektywności reklam. Pozwala na identyfikację obszarów wymagających optymalizacji."
    },
    {
      icon: TrendingUp,
      title: "Jak wykorzystać wyniki audytu do poprawy kampanii?",
      description: "Wyniki audytu SEO i SEM dostarczają cennych informacji, które mogą być wykorzystane do poprawy kampanii marketingowych. Na podstawie wyników audytu można wprowadzać zmiany w strategii marketingowej, takie jak optymalizacja treści na stronie, poprawa jakości reklam, czy zmiana słów kluczowych."
    }
  ];

  const socialMediaTrends = [
    {
      icon: Facebook,
      title: "Jak kampanie na Facebooku mogą zwiększyć zasięg marki?",
      description: "Kampanie na Facebooku są niezwykle skutecznym sposobem na zwiększenie zasięgu marki i dotarcie do szerokiej grupy docelowej. Dzięki zaawansowanym narzędziom targetowania, firmy mogą precyzyjnie określać, do kogo chcą kierować swoje reklamy, co zwiększa efektywność kampanii."
    },
    {
      icon: Instagram,
      title: "Rola Instagrama w budowaniu wizerunku marki",
      description: "Instagram to platforma, która odgrywa kluczową rolę w budowaniu wizerunku marki, zwłaszcza w branżach związanych z modą, urodą czy lifestylem. Dzięki wizualnemu charakterowi, Instagram pozwala firmom na przedstawienie swojej oferty w atrakcyjny sposób."
    },
    {
      icon: Linkedin,
      title: "Jak LinkedIn może wspierać działania B2B?",
      description: "LinkedIn to platforma społecznościowa, która jest szczególnie cenna dla firm działających w sektorze B2B. LinkedIn umożliwia firmom nawiązywanie kontaktów biznesowych, budowanie relacji z potencjalnymi klientami oraz promowanie swojej oferty wśród profesjonalistów."
    }
  ];

  const faqItems = [
    {
      question: "Co to jest agencja marketingu internetowego?",
      answer: "Agencja marketingu internetowego to firma specjalizująca się w świadczeniu usług z zakresu marketingu online, takich jak digital marketing, kampanie reklamowe w mediach społecznościowych, optymalizacja stron www oraz zarządzanie danymi osobowymi w celu zwiększenia widoczności produktów i usług w sieci."
    },
    {
      question: "Jakie korzyści niesie współpraca z agencją marketingu internetowego?",
      answer: "Współpraca z agencją marketingu internetowego pozwala na skuteczne wykorzystanie narzędzi digital marketingu do zwiększenia widoczności marki, pozyskania nowych klientów oraz optymalizacji działań marketingowych w celu maksymalizacji zwrotu z inwestycji."
    },
    {
      question: "Czym różni się performance marketing od tradycyjnych form marketingu?",
      answer: "Performance marketing skupia się na mierzalnych efektach działań marketingowych, takich jak liczba kliknięć, konwersji czy sprzedaży w sklepie internetowym, co pozwala na precyzyjne dostosowanie strategii do potrzeb klienta i optymalizację budżetu reklamowego."
    },
    {
      question: "Co to znaczy, że agencja jest Google Partnerem?",
      answer: "Agencja będąca Google Partnerem posiada certyfikaty potwierdzające jej kompetencje w zakresie zarządzania kampaniami reklamowymi Google Ads, co gwarantuje profesjonalne podejście i skuteczność działań marketingowych."
    },
    {
      question: "Jakie usługi oferują agencje marketingu internetowego?",
      answer: "Agencje marketingu internetowego oferują m.in. kampanie Facebook Ads, optymalizację stron www, zarządzanie mediami społecznościowymi, analitykę danych oraz strategie z zakresu performance marketingu."
    },
    {
      question: "Czy muszę wyrazić zgodę na przetwarzanie moich danych osobowych podczas współpracy z agencją?",
      answer: "Tak, w celu udzielenia dodatkowych informacji handlowych oraz dopasowania oferty do potrzeb klienta, konieczne jest wyrażenie zgody na przetwarzanie danych osobowych zgodnie z RODO."
    },
    {
      question: "Jakie znaczenie ma digital marketing w promocji sklepu internetowego?",
      answer: "Digital marketing odgrywa kluczową rolę w promocji sklepu internetowego poprzez zwiększenie jego widoczności w wynikach wyszukiwania, angażowanie klientów w mediach społecznościowych oraz skuteczne zarządzanie kampaniami reklamowymi."
    },
    {
      question: "Jakie są najnowsze trendy w digital marketingu?",
      answer: "Najnowsze trendy w digital marketingu obejmują personalizację doświadczeń użytkowników, wykorzystanie sztucznej inteligencji w analizie danych oraz rozwój marketingu wideo i interaktywnych treści."
    },
    {
      question: "Jak agencje marketingu internetowego mogą pomóc w rozwijaniu marki?",
      answer: "Agencje marketingu internetowego pomagają w rozwijaniu marki poprzez tworzenie spójnych strategii marketingowych, zarządzanie kampaniami reklamowymi oraz analizę danych w celu optymalizacji działań i osiągnięcia celów biznesowych."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Agencja Marketingu Internetowego – Kampanie i Pozycjonowanie | Fotz Studio</title>
        <meta 
          name="description" 
          content="Agencja marketingu internetowego oferuje skuteczne kampanie Google Ads, pozycjonowanie stron SEO/SEM i social media marketing. Zwiększ widoczność online swojej firmy." 
        />
        <meta name="keywords" content="agencja marketingu internetowego, marketing internetowy, pozycjonowanie stron, SEO, SEM, Google Ads, kampanie reklamowe, digital marketing, performance marketing" />
        <link rel="canonical" href="https://fotz.pl/agencja-marketingu-internetowego" />
        <meta property="og:title" content="Agencja Marketingu Internetowego – Kampanie i Pozycjonowanie | Fotz Studio" />
        <meta property="og:description" content="Agencja marketingu internetowego. Skuteczne kampanie Google Ads, pozycjonowanie stron SEO/SEM, social media marketing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fotz.pl/agencja-marketingu-internetowego" />
        <meta property="og:locale" content="pl_PL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agencja Marketingu Internetowego – Kampanie i Pozycjonowanie | Fotz Studio" />
        <meta name="twitter:description" content="Agencja marketingu internetowego. Skuteczne kampanie Google Ads, pozycjonowanie stron SEO/SEM, social media marketing." />
      </Helmet>

      {/* Structured Data */}
      <OrganizationSchema />
      <ServiceSchema 
        name="Agencja Marketingu Internetowego"
        description="Kompleksowe usługi marketingu internetowego: SEO, SEM, Google Ads, social media marketing i kampanie reklamowe dla firm."
        areaServed="Polska"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Agencja Marketingu Internetowego", url: "https://fotz.pl/agencja-marketingu-internetowego" }
        ]}
      />
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
          <div className="w-full h-full bg-gradient-to-br from-[#75143F]/20 via-[#422249]/20 to-[#0F3053]/20" />
        </div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#75143F]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#0F3053]/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-20 px-4 pt-32 pb-20 md:pt-40 md:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#75143F]/20 border border-[#75143F]/30 text-sm text-foreground/80">
                <TrendingUp className="w-4 h-4" />
                Digital Marketing & Performance
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight"
            >
              Agencja Marketingu Internetowego:{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Skuteczne Kampanie i Pozycjonowanie Stron
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto"
            >
              W dzisiejszym cyfrowym świecie, skuteczny marketing internetowy jest kluczowym elementem sukcesu każdej firmy. 
              Oferujemy kompleksowe usługi, które pomagają firmom zwiększyć ich widoczność online, poprawić pozycjonowanie stron internetowych 
              i skutecznie docierać do potencjalnych klientów. Dzięki zaawansowanym narzędziom i strategiom, umożliwiamy firmom realizować cele marketingowe 
              poprzez precyzyjnie zaplanowane kampanie reklamowe.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 text-white">
                <Link to="/kontakt">
                  Umów bezpłatną konsultację
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                <a href="tel:+48790814814">
                  <Phone className="mr-2 w-5 h-5" />
                  Skontaktuj się
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-foreground/40" />
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Jak działa{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  agencja marketingu internetowego?
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Współpraca z agencją marketingową pozwala firmom skupić się na ich podstawowej działalności, 
                podczas gdy eksperci zajmują się kompleksowym zarządzaniem strategią marketingową.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Elements Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[#0F3053]/10">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Kluczowe elementy{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  marketingu internetowego
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Poznaj najważniejsze składniki skutecznej strategii digital marketingu.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {keyElements.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-8 rounded-2xl bg-background border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[#75143F]" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Ads Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Jak Google Ads wpływa na{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  efektywność kampanii reklamowych?
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Dzięki Google Ads firmy mogą docierać do użytkowników, którzy aktywnie wyszukują produkty lub usługi, 
                co zwiększa szanse na konwersję.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {googleAdsInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                <Link to="/kampanie-reklamowe-poznan/">
                  Dowiedz się więcej o kampaniach
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Audit Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0F3053]/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Jak przeprowadzić{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  audyt SEO i SEM?
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Regularne wykonywanie audytów pozwala na bieżąco monitorować i poprawiać pozycjonowanie stron internetowych.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {auditInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-8 rounded-2xl bg-background border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[#75143F]" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Trends Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Najnowsze trendy w marketingu na{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  platformach social media
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Wykorzystaj potencjał platform społecznościowych do budowania marki i pozyskiwania klientów.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {socialMediaTrends.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                <Link to="/agencja-social-media-poznan/">
                  Poznaj nasze usługi social media
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[#0F3053]/10">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Często zadawane{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  pytania
                </span>
              </h2>
              <p className="text-foreground/70">
                Odpowiedzi na najczęstsze pytania o marketing internetowy i współpracę z agencją.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-foreground/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-background hover:bg-foreground/5 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">{item.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-foreground/60 flex-shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-foreground/5 border-t border-foreground/10">
                      <p className="text-foreground/70">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gradient-to-b from-[#0F3053]/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                Powiązane usługi marketingowe
              </h2>
              <p className="text-foreground/60">
                Sprawdź inne usługi, które pomogą rozwinąć Twój biznes online
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Google Ads", href: "/google-ads", icon: Target },
                { title: "Facebook Ads", href: "/facebook-ads", icon: Facebook },
                { title: "Social Media", href: "/social-media", icon: Share2 },
                { title: "Pozycjonowanie SEO", href: "/pozycjonowanie", icon: TrendingUp },
                { title: "Strony Internetowe", href: "/strony-internetowe", icon: Globe },
                { title: "Produkcja Wideo", href: "/produkcja-filmow-poznan", icon: Video },
                { title: "Identyfikacja Wizualna", href: "/identyfikacja-wizualna", icon: Palette },
                { title: "Kompleksowa Obsługa", href: "/kompleksowa-obsluga-marketingowa", icon: Users },
              ].map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-background border border-foreground/10 hover:border-[#75143F]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center group-hover:from-[#75143F]/30 group-hover:to-[#0F3053]/30 transition-all">
                    <service.icon className="w-5 h-5 text-[#75143F]" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-[#75143F] transition-colors">
                    {service.title}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-auto text-foreground/40 group-hover:text-[#75143F] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="mt-8 text-center">
              <Link 
                to="/uslugi" 
                className="inline-flex items-center gap-2 text-[#75143F] font-medium hover:underline"
              >
                Zobacz wszystkie usługi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Glow Effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#75143F]/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6"
            >
              Gotowy na{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                skuteczny marketing internetowy?
              </span>
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto"
            >
              Porozmawiajmy o Twoim biznesie. Pierwsza konsultacja jest bezpłatna i niezobowiązująca.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 text-white">
                <Link to="/kontakt">
                  Umów bezpłatną konsultację
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                <a href="tel:+48790814814">
                  <Phone className="mr-2 w-5 h-5" />
                  Zadzwoń teraz
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}