import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Palette, 
  Globe, 
  Share2, 
  Target,
  Search,
  FileText,
  Rocket,
  BarChart3,
  ChevronDown,
  Building2,
  Users,
  Award,
  Video,
  Camera,
  TrendingUp
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

export default function AgencjaMarketingowaPoznan() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic would go here
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", company: "", email: "", phone: "", message: "", consent: false });
    }, 1000);
  };

  const services = [
    {
      icon: Palette,
      title: "Branding – budowanie silnej marki",
      description: "Zapewniamy kompleksowe usługi brandingowe, które pomogą Twojej firmie w budowaniu silnej i rozpoznawalnej marki. Agencja marketingowa w Poznaniu oferuje stworzenie unikalnej identyfikacji wizualnej, która dotrze do grupy docelowej i przekona nowych klientów do skorzystania z oferty Twojej firmy.",
      link: "/identyfikacja-wizualna"
    },
    {
      icon: Globe,
      title: "Tworzenie stron internetowych – profesjonalne rozwiązania",
      description: "Specjalizujemy się w projektowaniu responsywnych stron www, dostosowanych do potrzeb wymagających klientów. Wykorzystujemy różne systemy zarządzania treścią (CMS), takie jak WordPress, Joomla, Drupal, Webflow i Shopify, aby umożliwić klientom samodzielną edycję witryny. Nasze strony www są estetyczne, funkcjonalne i zoptymalizowane pod kątem SEO.",
      link: "/strony-internetowe-poznan"
    },
    {
      icon: Share2,
      title: "Social media – skuteczna obecność w sieci",
      description: "Agencja social media w Poznaniu specjalizuje się w prowadzeniu profili w mediach społecznościowych. Tworzymy angażujące treści, prowadzimy kampanie reklamowe na Facebooku, Instagramie i LinkedInie, a także analizujemy wyniki, aby stale optymalizować działania i zwiększać zasięgi. Z nami dotrzesz do nowych klientów i rozwiniesz swój wizerunek.",
      link: "/social-media-poznan"
    },
    {
      icon: Target,
      title: "Reklama – kampanie przynoszące rezultaty",
      description: "Nasza agencja marketingowa z Poznania specjalizuje się w kampaniach reklamowych SEM, w tym Google Ads i Meta Ads. Dbamy o to, aby Twoje reklamy były efektywne i przynosiły realne rezultaty w postaci zwiększonej sprzedaży i rozpoznawalności Twojej marki. Analizujemy dane, optymalizujemy budżet i działamy tak, aby pozyskiwać maksymalny ROAS.",
      link: "/google-ads"
    },
    {
      icon: Video,
      title: "Produkcja wideo – spoty i filmy promocyjne",
      description: "Tworzymy profesjonalne materiały wideo, od spotów reklamowych po filmy korporacyjne. Nasza agencja marketingowa w Poznaniu posiada studio podcastowe i zespół do produkcji filmowej, który pomoże Ci wyróżnić się na tle konkurencji.",
      link: "/produkcja-filmow-poznan"
    },
    {
      icon: TrendingUp,
      title: "Pozycjonowanie SEO – widoczność w Google",
      description: "Zwiększamy widoczność Twojej strony w wynikach wyszukiwania Google. Kompleksowe działania SEO obejmują audyt, optymalizację i link building, aby Twoja firma była łatwo znajdowana przez potencjalnych klientów.",
      link: "/pozycjonowanie-stron-poznan"
    }
  ];

  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: "Analiza potrzeb klienta",
      description: "Nasz proces współpracy rozpoczyna się od dogłębnej analizy potrzeb klienta. Podczas rozmów i badań dokładnie poznajemy specyfikę Twojej firmy, jej cele biznesowe oraz grupę docelową. Na tej podstawie przygotowujemy indywidualną wycenę projektu i przechodzimy do kolejnych etapów działania."
    },
    {
      number: "02",
      icon: FileText,
      title: "Opracowanie strategicznego planu",
      description: "Na podstawie przeprowadzonej analizy tworzymy kompleksową strategię marketingową dopasowaną do Twoich potrzeb, budżetu i celów biznesowych. Plan obejmuje wybór kanałów komunikacji, harmonogram działań i mierzalne wskaźniki sukcesu."
    },
    {
      number: "03",
      icon: Rocket,
      title: "Wdrażanie działań marketingowych",
      description: "Realizujemy zaplanowane działania zgodnie z harmonogramem. Od brandingu przez social media po kampanie reklamowe – każdy element jest starannie wdrażany przez nasz zespół doświadczonych specjalistów."
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Optymalizacja i raportowanie",
      description: "Monitorujemy wyniki za pomocą narzędzi analitycznych i regularnie raportujemy postępy. Na podstawie danych optymalizujemy działania, aby maksymalizować efektywność i ROI Twoich inwestycji marketingowych."
    }
  ];

  const whyUsPoints = [
    {
      icon: MapPin,
      title: "Przewaga lokalnego partnerstwa",
      description: "Współpraca z agencją marketingową z Poznania i okolic to gwarancja lepszego zrozumienia lokalnego rynku. Agencja z Poznania rozumie specyfikę działania firm w regionie i potrafi skuteczniej dopasować strategię marketingową do potrzeb i oczekiwań Twojej firmy. Zamiast uniwersalnych rozwiązań, otrzymasz działania skrojone na miarę."
    },
    {
      icon: Users,
      title: "Strategia marketingowa dostosowana do potrzeb",
      description: "Skuteczna agencja social media to taka, która tworzy strategie marketingowe dopasowane do Twoich celów biznesowych. Przed rozpoczęciem działań reklamowych, agencja analizuje Twoją markę, konkurencję i grupę docelową, aby stworzyć plan działania, który przyniesie realne rezultaty w postaci zwiększonej sprzedaży i rozpoznawalności."
    },
    {
      icon: Award,
      title: "Doświadczenie w branży marketingu internetowego",
      description: "Wybierając agencję marketingową w Poznaniu, warto sprawdzić jej doświadczenie w branży marketingu internetowego. Agencja powinna mieć na swoim koncie sukcesy w prowadzeniu kampanii reklamowych w Google Ads, na Facebooku, Instagramie, LinkedInie i TikToku, a także w pozycjonowaniu stron www i sklepów internetowych."
    }
  ];

  const faqItems = [
    {
      question: "Czym wyróżnia się marketing internetowy z Poznania i jak agencja pomoże mojemu e-commerce?",
      answer: "Nasza agencja specjalizuje się w marketingu internetowym z Poznania, łącząc znajomość lokalnego rynku z kompleksowymi działaniami dla e-commerce — od pozycjonowania stron i sklepów internetowych, przez PPC, po content marketing. Dzięki temu szybciej zwiększamy widoczność w wyszukiwarce i konwersje Twojej strony."
    },
    {
      question: "Czy agencja może prowadzić kampanie na LinkedIn dla klientów B2B i jak analizować efekty?",
      answer: "Tak — prowadzimy kampanie na LinkedIn dedykowane B2B. Nasi doświadczeni specjaliści przygotowują treści i targetowanie, a następnie monitorują i analizują wyniki (leadów, zaangażowania, kosztu pozyskania), by optymalizować kampanie i poprawiać ROI."
    },
    {
      question: "Jakie są korzyści z pozycjonowania stron i sklepów internetowych przez lokalną agencję?",
      answer: "Pozycjonowanie stron i sklepów internetowych przez lokalną agencję przynosi lepsze dopasowanie do zapytań użytkowników z Poznania — znamy lokalny rynek, słowa kluczowe i oczekiwania odbiorców, budując silniejszą widoczność w wyszukiwarce, co przekłada się na większy ruch i sprzedaż."
    },
    {
      question: "Jak agencja podejmuje decyzje o strategii content marketing i kto prowadzi tworzenie treści?",
      answer: "Strategię content marketing opracowujemy na podstawie analizy odbiorców i budowy lejków sprzedażowych — nasi doświadczeni specjaliści prowadzą tworzenie treści, uwzględniając SEO, potrzeby B2B lub e-commerce oraz cele kampanii, aby content wspierał konwersje i pozycjonowanie."
    },
    {
      question: "Czy agencja oferuje kompleksowe działania łączące PPC, SEO i social media?",
      answer: "Tak, oferujemy kompleksowe działania — łączymy PPC, SEO, social media i content marketing w spójną strategię. Monitorowanie odbywa się za pomocą narzędzi analitycznych, raportów i regularnych spotkań, dzięki czemu możemy szybko optymalizować kampanie i poprawiać wydajność Twojej strony."
    },
    {
      question: "Jak agencja pomaga w optymalizacji strony dla wyszukiwarek i jakie efekty można oczekiwać?",
      answer: "Pomagamy w technicznym SEO, optymalizacji treści i budowaniu linków, aby Twoja strona lepiej wypadała w wyszukiwarce. Efekty to wyższe pozycje słów kluczowych, większy ruch organiczny i długoterminowy wzrost konwersji, zwłaszcza dla stron i sklepów internetowych."
    },
    {
      question: "Jakie wsparcie daje agencja dla firm B2B i jak mierzy się sukces kampanii LinkedIn oraz content marketing?",
      answer: "Dla B2B oferujemy dedykowane strategie generowania leadów, profile LinkedIn i treści eksperckie. Sukces mierzymy liczbą kwalifikowanych leadów, zaangażowaniem odbiorców i wskaźnikami konwersji — regularnie analizujemy dane, by optymalizować działania i zwiększać wartość marketingową."
    },
    {
      question: "Czy w agencji pracują doświadczeni specjaliści i jak wygląda współpraca przy długoterminowych kampaniach?",
      answer: "Tak, w naszej agencji pracują doświadczeni specjaliści z obszarów SEO, PPC, social media i content marketing. Współpraca przy długoterminowych kampaniach opiera się na planowaniu celów, regularnych raportach, monitorowaniu efektów i stałej komunikacji — zapewniamy transparentność i elastyczność działań."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Agencja Marketingowa Poznań – Social Media i Marketing | Fotz Studio</title>
        <meta 
          name="description" 
          content="Agencja marketingowa w Poznaniu. Kompleksowe usługi: social media, kampanie Google Ads i Meta Ads, strony internetowe, SEO i branding. Umów bezpłatną konsultację!" 
        />
        <meta name="keywords" content="agencja marketingowa Poznań, marketing Poznań, social media Poznań, kampanie reklamowe Poznań, marketing internetowy Poznań, Google Ads Poznań, reklama internetowa Poznań, agencja social media, SEO Poznań" />
        <link rel="canonical" href="https://fotz.pl/agencja-marketingowa-poznan" />
        <meta property="og:title" content="Agencja Marketingowa Poznań – Social Media i Marketing | Fotz Studio" />
        <meta property="og:description" content="Agencja marketingowa w Poznaniu. Kompleksowe usługi: social media, kampanie Google Ads i Meta Ads, strony internetowe, SEO i branding." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fotz.pl/agencja-marketingowa-poznan" />
        <meta property="og:locale" content="pl_PL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agencja Marketingowa Poznań – Social Media i Marketing | Fotz Studio" />
        <meta name="twitter:description" content="Agencja marketingowa w Poznaniu. Kompleksowe usługi: social media, kampanie Google Ads i Meta Ads, strony internetowe, SEO i branding." />
      </Helmet>

      {/* Structured Data */}
      <OrganizationSchema />
      <ServiceSchema 
        name="Agencja Marketingowa Poznań"
        description="Kompleksowe usługi marketingowe: social media, kampanie reklamowe Google Ads i Meta Ads, strony internetowe, SEO i branding dla firm z Poznania."
        areaServed="Poznań"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja Marketingowa Poznań", url: "https://fotz.pl/agencja-marketingowa-poznan" }
        ]}
      />
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Video Background Placeholder */}
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
                <MapPin className="w-4 h-4" />
                Plac Wolności 16, Poznań
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight"
            >
              Agencja Marketingowa Poznań:{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Marketing i Social Media
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
            >
              Szukasz agencji marketingowej w Poznaniu, która naprawdę rozumie Twoje potrzeby? 
              Potrzebujesz partnera, który pomoże Ci dotrzeć do nowych klientów i zbudować silną markę w mediach społecznościowych? 
              Dobrze trafiłeś. Oferujemy kompleksowe usługi marketingowe, od strategii po realizację kampanii reklamowych.
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

      {/* Why Us Section */}
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
                Dlaczego warto wybrać{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  agencję marketingową w Poznaniu?
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Wybór odpowiedniej agencji marketingowej to kluczowy element sukcesu Twojej firmy. 
                Agencja marketingowa w Poznaniu powinna rozumieć specyfikę lokalnego rynku i być w stanie efektywnie dotrzeć do Twojej grupy docelowej. 
                Zamiast wybierać przypadkowych wykonawców, postaw na agencję, która analizuje potrzeby i buduje długofalowe strategie.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-6">
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-foreground/70">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="mt-12 text-center space-y-2">
              <p className="text-foreground/60">
                Sprawdź, jak pomogliśmy <Link to="/realizacje/enea-stadion" className="text-[#75143F] hover:underline font-medium">Enea Stadion</Link> w budowaniu obecności online.
              </p>
              <p className="text-foreground/60 text-sm">
                Zobacz także realizacje dla <Link to="/realizacje/klagem" className="text-[#75143F] hover:underline">Klagem</Link>, <Link to="/realizacje/friendly-gas" className="text-[#75143F] hover:underline">Friendly Gas</Link> i <Link to="/realizacje/rppg" className="text-[#75143F] hover:underline">RPPG</Link>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
                Nasze <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">usługi marketingowe</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Kompleksowa obsługa marketingowa dla firm z Poznania i całej Polski. Od strategii po realizację. 
                Sprawdź naszą <Link to="/kompleksowa-obsluga-marketingowa" className="text-[#75143F] hover:underline">kompleksową obsługę marketingową</Link>.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="group p-8 rounded-2xl bg-background border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center flex-shrink-0 group-hover:from-[#75143F] group-hover:to-[#0F3053] transition-all duration-300">
                      <service.icon className="w-7 h-7 text-[#75143F] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 mb-4">
                        {service.description}
                      </p>
                      <Link 
                        to={service.link}
                        className="inline-flex items-center text-[#75143F] hover:text-[#0F3053] transition-colors text-sm font-medium"
                      >
                        Dowiedz się więcej
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                <Link to="/uslugi">
                  Zobacz wszystkie usługi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
                Jak działa nasza{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  agencja marketingowa?
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Przejrzysty proces współpracy, który gwarantuje efekty. Od pierwszego spotkania do realizacji celów.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10"
                >
                  <span className="absolute -top-4 left-6 text-5xl font-heading font-bold text-[#75143F]/20">
                    {step.number}
                  </span>
                  <div className="pt-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof Section */}
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
                Przykłady sukcesów i{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  opinie klientów
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Zaufali nam lokalni przedsiębiorcy i duże marki. Zobacz, co mówią o współpracy z nami.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Case Study Card */}
              <motion.div variants={fadeIn}>
                <Link 
                  to="/realizacje/enea-stadion"
                  className="block p-8 rounded-2xl bg-gradient-to-br from-[#75143F]/10 to-[#0F3053]/10 border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-[#75143F]" />
                    <span className="text-sm text-foreground/60">Case Study</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    Enea Stadion Poznań
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Prezentujemy konkretne studium przypadku, demonstrujące jak nasze działania w marketingu internetowym przełożyły się na wzrost sprzedaży i rozpoznawalność marki jednego z naszych kluczowych klientów z Poznania. 
                    Szczegółowo opisujemy strategię, wykorzystane narzędzia, takie jak Google Ads i Facebook, oraz uzyskane ROAS.
                  </p>
                  <span className="inline-flex items-center text-[#75143F] font-medium">
                    Zobacz case study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Testimonial Card */}
              <motion.div 
                variants={fadeIn}
                className="p-8 rounded-2xl bg-background border border-foreground/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#75143F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-foreground/80 italic mb-6">
                  "Posłuchaj, co mówią nasi klienci z Poznania i okolic. Ich opinie potwierdzają, że nasza agencja marketingowa to nie tylko wykonawca, 
                  ale przede wszystkim partner, który rozumie potrzeby biznesu i potrafi stworzyć skuteczne strategie marketingowe. 
                  Dzięki nam dotarli do nowych klientów, rozwinęli swój wizerunek w mediach społecznościowych i zwiększyli sprzedaż."
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">Zadowolony Klient</p>
                  <p className="text-sm text-foreground/60">Właściciel firmy z Poznania</p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeIn} className="text-center">
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground/5">
                <Link to="/realizacje">
                  Zobacz wszystkie realizacje
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 md:py-32 bg-background">
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
                Skontaktuj się{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  z nami
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej firmie w rozwoju.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={fadeIn}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Umów się na konsultację
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6">
                    Zastanawiasz się, jak nasza agencja marketingowa z Poznania może pomóc Twojej firmie? 
                    Skontaktuj się z nami, aby umówić się na bezpłatną konsultację. Podczas spotkania przeanalizujemy Twoje potrzeby, 
                    cele biznesowe i grupę docelową, a następnie stworzymy plan działania dopasowany do Twojego budżetu i oczekiwań.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm text-foreground/70 mb-2">
                          Imię i nazwisko *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground focus:border-[#75143F] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm text-foreground/70 mb-2">
                          Firma
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground focus:border-[#75143F] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm text-foreground/70 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground focus:border-[#75143F] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm text-foreground/70 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground focus:border-[#75143F] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm text-foreground/70 mb-2">
                        Wiadomość *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/10 text-foreground focus:border-[#75143F] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-foreground/20 text-[#75143F] focus:ring-[#75143F]"
                      />
                      <label htmlFor="consent" className="text-sm text-foreground/60">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
                        <Link to="/polityka-prywatnosci" className="text-[#75143F] hover:underline">
                          polityką prywatności
                        </Link>{" "}
                        (RODO). *
                      </label>
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 text-white"
                      size="lg"
                    >
                      {isSubmitting ? "Wysyłanie..." : "Umów bezpłatną konsultację"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={fadeIn} className="space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Nasze biuro w Poznaniu
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6">
                    Zapraszamy do naszego biura w Poznaniu, gdzie możemy omówić Twoje potrzeby i cele biznesowe osobiście. 
                    Nasza agencja marketingowa działa lokalnie, ale obsługuje klientów z całej Polski i Europy. 
                    Specjalizujemy się w marketingu internetowym z Poznania, social media, SEO i kampaniach reklamowych w Google Ads i mediach społecznościowych.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#75143F]" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Adres</p>
                        <p className="text-foreground/70">Plac Wolności 16<br />61-739 Poznań</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#75143F]" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Telefon</p>
                        <a href="tel:+48790814814" className="text-foreground/70 hover:text-[#75143F] transition-colors">
                          +48 790 814 814
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#75143F]" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a href="mailto:adam@fotz.pl" className="text-foreground/70 hover:text-[#75143F] transition-colors">
                          adam@fotz.pl
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden border border-foreground/10 h-64 bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-foreground/20 mx-auto mb-2" />
                    <p className="text-foreground/40 text-sm">Mapa Google Maps</p>
                  </div>
                </div>
              </motion.div>
            </div>
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
                Odpowiedzi na najczęstsze pytania o współpracę z naszą agencją marketingową.
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
                Powiązane usługi
              </h2>
              <p className="text-foreground/60">
                Sprawdź inne usługi marketingowe dostępne w Poznaniu
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Social Media Poznań", href: "/social-media-poznan", icon: Share2 },
                { title: "Strony Internetowe Poznań", href: "/strony-internetowe-poznan", icon: Globe },
                { title: "Pozycjonowanie SEO", href: "/pozycjonowanie-stron-poznan", icon: TrendingUp },
                { title: "Produkcja Filmów", href: "/produkcja-filmow-poznan", icon: Video },
                { title: "Fotografia", href: "/fotograf-poznan", icon: Camera },
                { title: "Google Ads", href: "/google-ads", icon: Target },
                { title: "Facebook Ads", href: "/facebook-ads", icon: Share2 },
                { title: "Identyfikacja Wizualna", href: "/identyfikacja-wizualna", icon: Palette },
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
                skuteczny marketing?
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
                  +48 790 814 814
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
