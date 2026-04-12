import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Video,
  Play,
  Film,
  Monitor,
  Camera,
  CheckCircle2,
  ArrowRight,
  Star,
  Award,
  Clock,
  Shield,
  Zap,
  Eye,
  Target,
  Layers,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const faqItems = [
  {
    question: "Ile kosztuje produkcja filmu reklamowego?",
    answer:
      "Koszt produkcji wideo w Fotz Studio zaczyna się od 2000 zł za pakiet Video Start (1 film do 60 sekund). Pakiet Video Business to 5000 zł za 3 filmy różnych formatów, a pełna produkcja Premium to 12000 zł obejmująca scenariusz, aktorów i kilka lokalizacji. Ostateczna cena zależy od zakresu prac, liczby lokalizacji i złożoności postprodukcji.",
  },
  {
    question: "Jak długo trwa produkcja video?",
    answer:
      "Typowa produkcja wideo trwa 2–4 tygodnie od briefu do dostarczenia plików. Pakiet Video Start realizujemy w 1–2 tygodnie. Czas zależy od zakresu prac, dostępności aktorów i liczby rund poprawek. Dla projektów pilnych możemy przyspieszyć realizację.",
  },
  {
    question: "Na jakich platformach możecie optymalizować video?",
    answer:
      "Optymalizujemy video dla wszystkich głównych platform: Instagram Reels, TikTok, YouTube, Facebook, LinkedIn. Dostarczamy wideo w formatach 9:16 (pionowe na Reels/TikTok), 16:9 (YouTube, widescreen) i 1:1 (Instagram Feed, LinkedIn). Każdy format przygotowujemy z odpowiednimi napisami i grafika na potrzeby danej platformy.",
  },
  {
    question: "Czy tworzycie też animacje i motion graphics?",
    answer:
      "Tak, animacje i motion graphics to część naszej oferty video marketingu. Tworzymy animacje produktów, infografiki wideo, animowane napisy, loga i przejścia. Animacje można łączyć z nagraniami live-action lub tworzyć całkowicie animowane filmy.",
  },
  {
    question: "Czy muszę mieć scenariusz przed kontaktem?",
    answer:
      "Nie musisz mieć gotowego scenariusza. Pracujemy z Tobą od etapu briefu — poznajemy Twoją markę, grupę docelową i cele kampanii. Nasz team kreatywny przygotuje scenariusz i koncepcję filmową. Oczywiście, jeśli masz pomysł, czekamy na niego!",
  },
  {
    question: "Jakie formaty pliku video otrzymam?",
    answer:
      "Dostarczamy wideo w formatach MP4 (najczęściej używany), MOV, WebM oraz w optymalnych rozdzielczościach: Full HD (1080p), 4K (2160p) i pliki przygotowane pod każdą platformę (Reels, YouTube, TikTok). Wszystkie pliki wraz z napisami i wariantami kolorystycznymi.",
  },
];

const VideoMarketing = () => {
  const problems = [
    {
      icon: Eye,
      title: "Brak video contentu — tracisz klientów",
      desc: "81% firm z video na stronie i social mediach ma lepsze wyniki konwersji. Bez wideo jesteś niewidoczny.",
    },
    {
      icon: Zap,
      title: "Konkurencja wygrywa dzięki reelsom",
      desc: "Firmy z branży publikują reels, shorts i video. Twój statyczny content nie konkuruje. Tracisz zasięgi i kliki.",
    },
    {
      icon: TrendingUp,
      title: "Niskie zasięgi bez video na social media",
      desc: "Algorytmy Instagrama, TikToka i YouTube priorytetyzują video. Bez video Twój post zasięga 10x mniej osób.",
    },
    {
      icon: Target,
      title: "Drogie produkcje bez efektów",
      desc: "Widziałeś filmowe produkcje za 50k zł? My robimy video profesjonalne za ułamek tej ceny, z gwarancją efektów.",
    },
  ];

  const services = [
    {
      icon: Film,
      title: "Filmy reklamowe i brandingowe",
      description:
        "Produkcja filmów promujących Twoją markę, produkty lub usługi. Od koncepcji, scenariusza, nagrań aż do finalizacji.",
    },
    {
      icon: Play,
      title: "Reels i Shorts (social media)",
      description:
        "Krótkie, dynamiczne video optymalizowane dla Instagrama, TikToka i YouTube Shorts. Wciągające, z muzyką i efektami.",
    },
    {
      icon: Monitor,
      title: "Video dla e-commerce (product videos)",
      description:
        "Profesjonalne prezentacje produktów, unboxing, lifestyle filmiki. Video, które sprzedają.",
    },
    {
      icon: Layers,
      title: "Animacje motion graphics",
      description:
        "Animowane logo, infografiki, wyjaśniające animacje produktów, napisy i efekty. Całkowicie custom.",
    },
    {
      icon: Camera,
      title: "Filmy korporacyjne",
      description:
        "Filmy o firmie, powitanie CEO, training video, filmy onboarding dla pracowników. Wewnętrzne i zewnętrzne.",
    },
    {
      icon: Star,
      title: "Video testimoniale",
      description:
        "Autentyczne opinie klientów nagrane, zmontowane i przygotowane do publikacji. Zwiększają zaufanie.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Brief i scenariusz",
      description:
        "Poznajemy Twoją markę, grupę docelową i cele kampanii. Przygotowujemy koncepcję i scenariusz (lub dopracowujemy Twój pomysł).",
    },
    {
      step: "02",
      title: "Pre-produkcja",
      description:
        "Rezerwacja lokalizacji, casting aktorów (jeśli potrzeba), przygotowanie kostiumów, oświetlenia. Wszystko zaplanowane.",
    },
    {
      step: "03",
      title: "Nagrania",
      description:
        "Nagrywamy film w studiu lub na lokalizacji z profesjonalnym sprzętem i doświadczonym zespołem operatorskim.",
    },
    {
      step: "04",
      title: "Montaż i postprodukcja",
      description:
        "Montaż, color grading, dodanie muzyki, napisów, efektów, animacji. Film robi się gotowy i profesjonalny.",
    },
    {
      step: "05",
      title: "Dostarczenie plików",
      description:
        "Wszystkie wersje wideo, wszystkie formaty (Instagram, YouTube, web), wszystkie języki (jeśli potrzeba). Gotowe do publikacji.",
    },
  ];

  const packages = [
    {
      name: "Video Start",
      price: "2 000",
      period: "jednorazowo",
      description: "Dla małych firm i startupów",
      features: [
        "1 film do 60 sekund",
        "Montaż i dodanie muzyki",
        "2 wersje (z muzyką i bez)",
        "Napisy (opcjonalnie)",
        "Pliki MP4 i MOV",
        "1 lokalizacja lub studio",
        "Scenariusz na bazie Twojej idei",
        "Dwie rundy poprawek",
        "Realizacja 1–2 tygodnie",
      ],
      popular: false,
    },
    {
      name: "Video Business",
      price: "5 000",
      period: "jednorazowo",
      description: "Dla firm rozwijających content marketing",
      features: [
        "3 filmy różnych formatów",
        "Motion graphics i animacje",
        "Napisy i polskie voice-over (opcjonalnie)",
        "Wszystkie formaty: 9:16, 16:9, 1:1",
        "Optymalizacja pod platformy (Reels, Shorts, YouTube)",
        "Scenariusz przygotowany przez studio",
        "Do 2 lokalizacje",
        "Wynagrodzenie cast-u w cenie",
        "Cztery rundy poprawek",
        "Realizacja 2–3 tygodnie",
      ],
      popular: true,
    },
    {
      name: "Video Premium",
      price: "12 000",
      period: "jednorazowo",
      description: "Pełna produkcja filmowa",
      features: [
        "Pełna produkcja: scenariusz, pre-produkcja, nagrania",
        "Zawodowi aktorzy lub modelki",
        "Kilka lokalizacji",
        "Postprodukcja premium (color grading, efekty specjalne)",
        "10+ filmów różnych długości i formatów",
        "Animacje i motion graphics (jeśli potrzeba)",
        "Napisy, voice-over, tłumaczenia",
        "Wszystkie warianty kolorystyczne",
        "Nielimitowane poprawki",
        "Realizacja 3–4 tygodnie",
        "3 miesiące wsparcia (dodatkowe cięcia, warianty)",
      ],
      popular: false,
    },
  ];

  const stats = [
    { value: "150+", label: "filmów wyprodukowanych" },
    { value: "5 lat", label: "doświadczenia w video" },
    { value: "2M+", label: "views na publikowanych filmach" },
    { value: "48h", label: "czas do pierwszego roughcutu" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Video Marketing — Produkcja Filmów Reklamowych | Fotz Studio"
        description="Video marketing dla firm — produkcja filmów reklamowych, animacje, reels, video e-commerce. Fotz Studio Poznań i cała Polska. Zamów wycenę!"
        canonical="https://fotz.pl/uslugi/video-marketing"
        ogTitle="Video Marketing — Produkcja Filmów Reklamowych | Fotz Studio"
        ogDescription="Profesjonalna produkcja video marketing — filmy reklamowe, reels, animacje. Optymalizacja pod Instagram, TikTok, YouTube. Od 2000 zł."
        keywords="video marketing, marketing wideo, produkcja video, reklama video, animacje marketingowe, film promocyjny"
      />
      <ServiceSchema
        name="Video marketing — produkcja filmów reklamowych"
        description="Profesjonalna produkcja video marketingu dla firm. Filmy reklamowe, reels, animacje, video e-commerce. Optymalizacja pod wszystkie platformy."
        url="https://fotz.pl/uslugi/video-marketing"
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Video marketing", url: "https://fotz.pl/uslugi/video-marketing" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <Video className="w-4 h-4" />
              Video marketing · Produkcja filmowa · Poznań
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Video marketing{" "}
              <span className="text-primary">— produkcja filmów reklamowych</span>{" "}
              dla firm
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Profesjonalne filmy reklamowe, reels, animacje i video produktowe.
              Tworzymy zawartość wideo, która przyciąga klientów i zwiększa
              sprzedaż. Optymalizacja pod Instagram, TikTok, YouTube i Twojej
              stronie www.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów produkcję video <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="#pakiety">Zobacz pakiety i ceny</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
            >
              {[
                "Wszystkie platformy",
                "Animacje i motion graphics",
                "Scenariusz w cenie",
                "Wycena 24h",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Video marketing — dlaczego firmy go potrzebują?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Statystyki są jasne. Firmy bez video tracą klientów. Sprawdź, czy
              któryś z tych problemów Cię dotyczy.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="bg-card border border-border/60 rounded-xl p-6 flex gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Fotz Studio tworzy video, które pracuje na sukces Twojej firmy.
            </p>
            <Button asChild>
              <Link to="/kontakt">
                Porozmawiajmy o Twoim video <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wszystkie rodzaje video marketingu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Od filmów reklamowych i reels po animacje motion graphics.
              Przygotowujemy video pod każdą platformę i każdy cel.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeInView key={i} delay={i * 0.08}>
                <div className="bg-card border border-border/60 rounded-xl p-6 h-full hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proces produkcji video krok po kroku
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Od pomysłu do gotowego video — przejrzysty, 5-etapowy proces.
              Wiesz, co dzieje się na każdym etapie.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {processSteps.map((process, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-2 w-4 h-0.5 bg-primary/20" />
                  )}
                  <div className="bg-card border border-border/60 rounded-xl p-6 text-center h-full flex flex-col">
                    <div className="text-3xl font-bold text-primary mb-3">{process.step}</div>
                    <h3 className="font-semibold text-foreground mb-3">{process.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">
                      {process.description}
                    </p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted/20" id="pakiety">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pakiety i ceny produkcji video
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nie ma jedynego pakietu — każdy projekt to inna skala. Wybierz
              pakiet wyjściowy, dopasujemy do Twoich potrzeb.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div
                  className={`rounded-xl border transition-all ${
                    pkg.popular
                      ? "border-primary bg-primary/5 md:scale-105 shadow-lg"
                      : "border-border/60 bg-card hover:border-primary/40"
                  } p-8 relative h-full flex flex-col`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Najpopularniejszy
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">zł</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{pkg.period}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    <Link to="/kontakt">Zamów pakiet</Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Szukasz czegoś innego? Każdy pakiet można dostosować do Twoich potrzeb.
            </p>
            <Button variant="outline" asChild>
              <Link to="/kontakt">
                Poproś o custom offer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dlaczego Fotz Studio do video marketingu?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 powody, dla których warto nam zaufać.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInView delay={0}>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Doświadczone studio
                  </h3>
                  <p className="text-muted-foreground">
                    150+ wyprodukowanych filmów, 5 lat doświadczenia w video
                    marketingu. Wiemy, co działa.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Optymalizacja pod platformy
                  </h3>
                  <p className="text-muted-foreground">
                    Tworzymy video optymalne dla Instagram, TikTok, YouTube,
                    LinkedIn i strony www.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Szybki czas realizacji
                  </h3>
                  <p className="text-muted-foreground">
                    Pierwszy rough cut w 48 godzin. Realizujemy projekty w 1–4
                    tygodnie.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    Wsparcie SEO video
                  </h3>
                  <p className="text-muted-foreground">
                    Optymalizujemy nagrania pod YouTube SEO — meta, napisy,
                    thumbnails.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Video marketing — czym jest i dlaczego jest ważne dla Twojej firmy
            </h2>

            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                Video marketing to strategia marketingowa oparta na filmach i zawartości
                wideo. Obejmuje produkcję filmów reklamowych, reels, materiałów edukacyjnych,
                testimoniali i animacji. Video jest jednym z najpotężniejszych narzędzi
                marketingu cyfrowego — widać to w statystykach i wynikach konwersji.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Dlaczego video jest ważne dla firm?
              </h3>

              <p>
                Statystyki mówią same za siebie: 81% firm publikujących video na stronie
                i social mediach notuje wyższą konwersję niż konkurencja bez video. Video
                ma 1200% wyższą współczesną wskaźnika click-through niż tekst i obrazy razem
                wzięte. Widz spędza średnio 88% więcej czasu na stronie, na której jest
                video.
              </p>

              <p>
                YouTube jest drugim co do wielkości wyszukiwarką na świecie (tuż za
                Googlem). TikTok i Instagram Reels priorytetyzują video w algorytmach.
                LinkedIn także promuje treści wideo. Tym samym — film, który upload osiąga
                zasięg 10x większy niż statyk.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Rodzaje video marketingu
              </h3>

              <p>
                Video marketing obejmuje wiele formatów:
                <br />
                <strong>Filmy reklamowe i brandingowe</strong> — krótkie, dynamiczne
                introdukcje do marki, produktów, usług.
                <br />
                <strong>Reels i Shorts</strong> — krótkie, zwięzłe video dla social media,
                optymalne dla TikToka i Instagrama.
                <br />
                <strong>Video produktowe</strong> — prezentacje produktów, unboxingi,
                lifestyle video dla e-commerce.
                <br />
                <strong>Animacje motion graphics</strong> — infografiki wideo,
                wyjaśniające animacje, opowiadające historię marki.
                <br />
                <strong>Filmy korporacyjne</strong> — materiały dla pracowników, filmy
                szkoleniowe, o firmie.
                <br />
                <strong>Testimoniale</strong> — opinie klientów, budujące zaufanie i
                wiarygodność marki.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Video marketing a SEO
              </h3>

              <p>
                Video ma ogromny wpływ na SEO. Google preferuje strony z video —
                sesja trwa dłużej, bounce rate spada. YouTube (właściwa Googla) promuje
                kanały i filmy o wysokiej jakości i zaangażowaniu. Filmy optymalizowane
                pod YouTube SEO (tytuł, opis, napisy, tags) uzyskują wyższe pozycje w
                wynikach wyszukiwania YouTube i Google.
              </p>

              <p>
                Video osadzone na stronie (embed YouTube) również poprawia SEO — Google
                widzi interakcję użytkownika, dłuższą sesję, zmniejszony bounce rate. To
                sygnał dla algorytmu, że strona ma wysoką jakość.
              </p>

              <p>
                Podsumowując: video marketing to nie moda, to standard. Firmy bez video
                tracą klientów. Fotz Studio specjalizuje się w produkcji video, które
                pracuje na sukces Twojej marki — od nagrania do publikacji i optymalizacji.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Często zadawane pytania — video marketing
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Masz pytania? Tutaj znajdziesz odpowiedzi na najczęstsze wątpliwości.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInView>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Inne usługi marketingowe
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Video marketing to część kompleksowej strategii. Oferta Fotz Studio obejmuje
              również:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/uslugi/fotografia-produktowa"
                className="group p-6 rounded-lg border border-border/60 hover:border-primary/40 transition-colors bg-card"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Fotografia produktowa
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Profesjonalne zdjęcia produktów do e-commerce i katalogów
                </p>
              </Link>

              <Link
                to="/social-media/obsluga"
                className="group p-6 rounded-lg border border-border/60 hover:border-primary/40 transition-colors bg-card"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Social media marketing
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Zarządzanie profilami, content planning, kampanie na Instagram i Facebook
                </p>
              </Link>

              <Link
                to="/performance-marketing"
                className="group p-6 rounded-lg border border-border/60 hover:border-primary/40 transition-colors bg-card"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Kampanie reklamowe
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Kampanie Google Ads, Facebook Ads, optymalizacja konwersji
                </p>
              </Link>

              <Link
                to="/social-media/influencer"
                className="group p-6 rounded-lg border border-border/60 hover:border-primary/40 transition-colors bg-card"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Marketing influencerski
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Współpraca z influencerami, authentyczne rekomendacje produktów
                </p>
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection
        title="Gotów na video marketing?"
        description="Skontaktuj się z Fotz Studio i omów swój projekt. Wycenę przygotujemy w 24 godziny."
        buttonText="Zamów konsultację"
      />
    </Layout>
  );
};

export default VideoMarketing;
