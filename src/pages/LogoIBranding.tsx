import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  Layers,
  CheckCircle2,
  ArrowRight,
  Star,
  Award,
  Clock,
  Shield,
  Sparkles,
  Eye,
  Zap,
  FileText,
  Monitor,
  Printer,
  Target,
  Users,
  MessageSquare,
  TrendingUp,
  BookOpen,
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

import viz17 from "@/assets/wizualizacje/viz-17.png";
import viz18 from "@/assets/wizualizacje/viz-18.png";
import viz19 from "@/assets/wizualizacje/viz-19.png";
import viz20 from "@/assets/wizualizacje/viz-20.png";

const faqItems = [
  {
    question: "Ile kosztuje zaprojektowanie logo dla firmy?",
    answer:
      "Koszt projektu logo w Fotz Studio zaczyna się od 900 zł za pakiet podstawowy (sam logotyp + 3 warianty kolorystyczne). Pełna identyfikacja wizualna (logo + księga znaku + szablony materiałów) to koszt od 2500 zł. Cena zależy od złożoności projektu i zakresu prac.",
  },
  {
    question: "Jak długo trwa projektowanie logo?",
    answer:
      "Podstawowy projekt logo realizujemy w 5–7 dni roboczych. Pełna identyfikacja wizualna zajmuje 2–4 tygodnie. Na czas realizacji wpływa liczba rund poprawek i szybkość feedbacku ze strony klienta.",
  },
  {
    question: "Co to jest identyfikacja wizualna firmy?",
    answer:
      "Identyfikacja wizualna (corporate identity) to kompletny system graficzny marki: logo, kolorystyka, typografia, szablony dokumentów, grafiki social media, opakowania i inne materiały. Spójna identyfikacja buduje profesjonalny wizerunek i wyróżnia firmę na tle konkurencji.",
  },
  {
    question: "Jakie pliki otrzymuję po zaprojektowaniu logo?",
    answer:
      "Dostarczamy wszystkie potrzebne formaty: wektorowe (AI, EPS, SVG) do dowolnego skalowania bez utraty jakości, rastrowe (PNG z przezroczystością, JPG) do zastosowań cyfrowych, PDF do druku. Otrzymujesz pełne prawa autorskie.",
  },
  {
    question: "Czy mogę wprowadzać poprawki do projektu logo?",
    answer:
      "Tak, każdy pakiet zawiera rundy poprawek. Pakiet Basic – 3 rundy, pakiet Standard – 5 rund, pakiet Premium – nielimitowane poprawki. Zaczynamy od briefu, który pomaga nam dobrze zrozumieć Twoje potrzeby, dzięki czemu liczba poprawek jest zazwyczaj minimalna.",
  },
  {
    question: "Czy Fotz Studio projektuje logo dla nowych firm?",
    answer:
      "Tak, specjalizujemy się zarówno w projektowaniu logo dla nowych firm (startup branding), jak i w rebrandingu istniejących marek. Współpracowaliśmy z firmami z Poznania, Warszawy, Wrocławia i całej Polski. Każdy projekt traktujemy indywidualnie.",
  },
  {
    question: "Jak wygląda proces projektowania logo?",
    answer:
      "Proces składa się z 5 etapów: (1) Brief i analiza rynku – poznajemy Twoją branżę, konkurencję i grupę docelową. (2) Koncepcje – przygotowujemy 2–3 różne kierunki projektowe. (3) Wybór i dopracowanie – rozwijamy wybrany kierunek. (4) Finalizacja – przygotowujemy pliki w wszystkich formatach. (5) Wdrożenie – opcjonalnie pomagamy wdrożyć identyfikację.",
  },
  {
    question: "Czy Fotz Studio projektuje logo tylko dla firm z Poznania?",
    answer:
      "Nie, pracujemy z klientami z całej Polski — Warszawa, Wrocław, Kraków, Gdańsk, Katowice i inne miasta. Cały proces projektowania odbywa się zdalnie poprzez briefy online, prezentacje i komunikację mailową lub na Zoom.",
  },
];

const LogoIBranding = () => {
  const problems = [
    {
      icon: Eye,
      title: "Logo nie oddaje charakteru marki",
      desc: "Twoje logo wygląda generycznie lub jest przestarzałe. Potencjalni klienci nie zapamiętują Twojej firmy.",
    },
    {
      icon: Layers,
      title: "Brak spójności wizualnej",
      desc: "Strona, social media, wizytówki — każdy element wygląda inaczej. To sygnał braku profesjonalizmu.",
    },
    {
      icon: TrendingUp,
      title: "Konkurencja wygląda lepiej",
      desc: "Firmy z branży mają silniejszy wizerunek i przyciągają klientów, których Ty powinieneś zdobyć.",
    },
    {
      icon: Target,
      title: "Logo nie skaluje się dobrze",
      desc: "Logo rozmywa się na drukach, nie wygląda dobrze na białym i ciemnym tle, jest za małe lub za duże.",
    },
  ];

  const services = [
    {
      icon: PenTool,
      title: "Projektowanie logo",
      description:
        "Unikalny logotyp stworzony od podstaw. Sygnety, logotypy, combinacje znaku i nazwy — dobieramy formę odpowiednią dla Twojej branży.",
    },
    {
      icon: Layers,
      title: "Identyfikacja wizualna",
      description:
        "Kompletny system wizualny: logo, kolorystyka, typografia, siatka projektowa, zasady użycia znaku.",
    },
    {
      icon: FileText,
      title: "Księga znaku",
      description:
        "Profesjonalna dokumentacja identyfikacji: zasady użycia logo, paleta kolorów (CMYK, RGB, HEX, Pantone), typografia.",
    },
    {
      icon: Monitor,
      title: "Grafiki cyfrowe",
      description:
        "Szablony social media (Instagram, Facebook, LinkedIn), stopka e-mail, favicon, grafiki na stronę www.",
    },
    {
      icon: Printer,
      title: "Materiały firmowe",
      description:
        "Wizytówki, papier firmowy, koperty, pieczątki, teczki firmowe — kompletne materiały do druku.",
    },
    {
      icon: BookOpen,
      title: "Rebranding",
      description:
        "Odświeżenie lub kompletna zmiana wizerunku istniejącej marki z zachowaniem jej historii i wartości.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Brief i research",
      description:
        "Wypełniasz brief, my analizujemy Twoją branżę, grupę docelową i konkurencję. Poznajemy wartości marki.",
    },
    {
      step: "02",
      title: "Koncepcje kreatywne",
      description:
        "Przygotowujemy 2–3 różne kierunki projektowe z uzasadnieniem. Widzisz, skąd biorą się nasze decyzje.",
    },
    {
      step: "03",
      title: "Wybór i dopracowanie",
      description:
        "Wybierasz najlepszy kierunek i razem go dopracowujemy. Tyle rund poprawek, ile potrzebujesz (zależnie od pakietu).",
    },
    {
      step: "04",
      title: "Finalizacja plików",
      description:
        "Dostarczamy wszystkie pliki w formatach web i print (AI, EPS, SVG, PDF, PNG, JPG) z pełnymi prawami autorskimi.",
    },
    {
      step: "05",
      title: "Wdrożenie",
      description:
        "Opcjonalnie pomagamy wdrożyć identyfikację na stronie, social mediach i materiałach drukowanych.",
    },
  ];

  const packages = [
    {
      name: "Logo Basic",
      price: "900",
      period: "jednorazowo",
      description: "Dla firm potrzebujących samego logo",
      features: [
        "Projekt logotypu od podstaw",
        "2 koncepcje do wyboru",
        "3 rundy poprawek",
        "Wariant poziomy i pionowy",
        "Wersja kolorowa i monochromatyczna",
        "Pliki wektorowe (AI, EPS, SVG)",
        "Pliki rastrowe (PNG, JPG, PDF)",
        "Pełne prawa autorskie",
        "Realizacja 5–7 dni",
      ],
      popular: false,
    },
    {
      name: "Identyfikacja Standard",
      price: "2 500",
      period: "jednorazowo",
      description: "Logo + system identyfikacji wizualnej",
      features: [
        "Wszystko z pakietu Basic",
        "Paleta kolorów (CMYK, RGB, HEX)",
        "Typografia firmowa",
        "Szablony social media (5 szt.)",
        "Projekt wizytówki",
        "Papier firmowy A4",
        "Podstawowa księga znaku (PDF)",
        "5 rund poprawek",
        "Realizacja 2–3 tygodnie",
      ],
      popular: true,
    },
    {
      name: "Branding Premium",
      price: "5 500",
      period: "jednorazowo",
      description: "Kompleksowy branding dla rosnących firm",
      features: [
        "Wszystko z pakietu Standard",
        "Pełna księga znaku (30+ stron)",
        "Szablony social media (15 szt.)",
        "Projekt opakowań lub ulotek",
        "Stopka e-mail i favicon",
        "Teczka firmowa i koperta",
        "Mockupy prezentacyjne",
        "Nielimitowane poprawki",
        "Realizacja 3–4 tygodnie",
        "3 miesiące wsparcia po wdrożeniu",
      ],
      popular: false,
    },
  ];

  const stats = [
    { value: "200+", label: "projektów logo" },
    { value: "8 lat", label: "doświadczenia w brandingu" },
    { value: "97%", label: "klientów poleca nas dalej" },
    { value: "48h", label: "pierwsza koncepcja" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Projektowanie Logo i Identyfikacja Wizualna — Fotz Studio Poznań"
        description="Projektujemy profesjonalne logo i identyfikację wizualną dla firm z całej Polski. Tworzenie logo od 900 zł — pełne prawa autorskie, formaty web i print. Sprawdź pakiety!"
        canonical="https://fotz.pl/uslugi/logo-i-branding"
        ogTitle="Projektowanie Logo i Identyfikacja Wizualna — Fotz Studio"
        ogDescription="Unikalne logo i spójna identyfikacja wizualna dla Twojej firmy. Poznań i cała Polska. Od 900 zł, realizacja 5–7 dni."
        keywords="projektowanie logo, logo i branding, projekt logo, identyfikacja wizualna, brand identity, tworzenie logo dla firmy"
      />
      <ServiceSchema
        name="Projektowanie logo i identyfikacja wizualna"
        description="Profesjonalne projektowanie logo oraz tworzenie identyfikacji wizualnej dla firm. Fotz Studio oferuje unikalne projekty logo z pełnymi prawami autorskimi, w formatach web i print."
        url="https://fotz.pl/uslugi/logo-i-branding"
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Logo i branding", url: "https://fotz.pl/uslugi/logo-i-branding" },
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
              <Palette className="w-4 h-4" />
              Agencja brandingowa · Poznań i cała Polska
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Projektowanie logo{" "}
              <span className="text-primary">i identyfikacja wizualna</span>{" "}
              dla firm
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Tworzymy unikalne logo i spójną identyfikację wizualną, które budują
              zaufanie i wyróżniają Twoją firmę na rynku. Pełne prawa autorskie,
              wszystkie formaty, realizacja od 5 dni.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów wycenę logo <ArrowRight className="ml-2 h-4 w-4" />
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
                "Pełne prawa autorskie",
                "Formaty web i print",
                "Realizacja od 5 dni",
                "Wycena bezpłatna",
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
              Czy Twoje logo pracuje na sukces firmy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Słabe logo to stracone szanse. Sprawdź, czy dotyczą Cię te problemy.
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
              Fotz Studio rozwiązuje te problemy. Projektujemy logo, które działa.
            </p>
            <Button asChild>
              <Link to="/kontakt">
                Porozmawiajmy o Twoim logo <ArrowRight className="ml-2 h-4 w-4" />
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
              Kompleksowe tworzenie logo i identyfikacji wizualnej
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Od prostego logotypu po pełny system identyfikacji — dobieramy zakres
              prac do Twoich potrzeb i budżetu.
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
              Jak wygląda proces projektowania logo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Przejrzysty, 5-etapowy proces — wiesz, co dzieje się na każdym kroku.
            </p>
          </FadeInView>

          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nasze realizacje brandingowe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wybrane projekty logo i identyfikacji wizualnej z naszego portfolio.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[viz17, viz18, viz19, viz20].map((img, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden border border-border/60 bg-card aspect-video">
                  <img
                    src={img}
                    alt={`Projekt brandingowy Fotz Studio ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/agencja-marketingowa/poznan">
                Zobacz całe portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Packages */}
      <section id="pakiety" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pakiety i ceny — projekt logo dla firmy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparentne ceny bez ukrytych kosztów. Wybierz pakiet dopasowany do
              potrzeb Twojej firmy.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div
                  className={`rounded-2xl border p-6 flex flex-col h-full relative ${
                    pkg.popular
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border/60 bg-card"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Najpopularniejszy
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-foreground">{pkg.price} zł</span>
                      <span className="text-muted-foreground text-sm">{pkg.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={pkg.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    <Link to="/kontakt">
                      Zamów pakiet {pkg.name.split(" ")[1]}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Potrzebujesz indywidualnej wyceny?{" "}
              <Link to="/kontakt" className="text-primary hover:underline font-medium">
                Napisz do nas
              </Link>{" "}
              — przygotujemy ofertę szytą na miarę.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dlaczego Fotz Studio do projektowania logo?
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "8 lat doświadczenia",
                desc: "Setki projektów logo dla firm z różnych branż — od startupów po korporacje.",
              },
              {
                icon: Shield,
                title: "Pełne prawa autorskie",
                desc: "Wszystkie prawa do projektu przechodzą na Ciebie. Możesz go używać bez ograniczeń.",
              },
              {
                icon: Zap,
                title: "Szybka realizacja",
                desc: "Pierwsza koncepcja w 48h. Gotowe logo nawet w 5 dni roboczych.",
              },
              {
                icon: MessageSquare,
                title: "Wsparcie po wdrożeniu",
                desc: "Pomagamy zastosować nowe logo na stronie, social mediach i materiałach drukowanych.",
              },
            ].map((item, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Tworzenie logo dla firmy — co warto wiedzieć?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Projekt logo dla firmy</strong> to
                jedna z najważniejszych inwestycji w wizerunek marki. Dobre logo jest
                proste, zapamiętywalne i skalowalne — wygląda dobrze zarówno na
                wizytówce, jak i na wielkim bilboardzie. Złe logo zniechęca klientów,
                zanim jeszcze przeczytają, czym zajmuje się firma.
              </p>
              <p>
                W Fotz Studio{" "}
                <strong className="text-foreground">projektujemy logo</strong> z
                myślą o konkretnych celach biznesowych. Każdy projekt zaczynamy od
                analizy branży, grupy docelowej i konkurencji. Dopiero na tej
                podstawie tworzymy koncepcje, które nie tylko wyglądają dobrze, ale
                też komunikują właściwe wartości.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Identyfikacja wizualna — dlaczego sama jest niewystarczająca?
              </h3>
              <p>
                Logo to tylko jeden element{" "}
                <strong className="text-foreground">identyfikacji wizualnej firmy</strong>
                . Prawdziwy branding to kompletny system: spójna kolorystyka,
                typografia, styl fotografii, szablony dokumentów i grafik social media.
                Tylko wtedy klienci zaczynają rozpoznawać Twoją markę na każdym punkcie
                styku — niezależnie, czy widzą Twoją stronę, post na Instagramie czy
                ulotkę w skrzynce pocztowej.
              </p>
              <p>
                Dlatego w Fotz Studio oferujemy zarówno sam{" "}
                <strong className="text-foreground">projekt logo</strong>, jak i
                kompleksowe pakiety identyfikacji wizualnej z księgą znaku. Księga znaku
                to dokument definiujący zasady użycia logo i identyfikacji —
                niezbędny, gdy firma rośnie i angażuje do pracy zewnętrznych
                dostawców, agencje czy projektantów.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Ile kosztuje projekt logo? Porównanie opcji
              </h3>
              <p>
                Na rynku możesz znaleźć logo za 50 zł (serwisy z gotowymi szablonami)
                lub za 50 000 zł (duże agencje brandingowe dla korporacji). Fotz Studio
                celuje w środek rynku — oferujemy jakość agencji przy cenach dostępnych
                dla małych i średnich firm.
              </p>
              <p>
                Nasze pakiety zaczynają się od 900 zł za podstawowy{" "}
                <strong className="text-foreground">projekt logo dla firmy</strong> i
                sięgają 5 500 zł za kompleksowy branding z pełną dokumentacją. Każdy
                pakiet zawiera pełne prawa autorskie i wszystkie potrzebne formaty
                plików.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Logo firmowe a logo marki — jaka różnica?
              </h3>
              <p>
                <strong className="text-foreground">Logo firmowe</strong> identyfikuje
                samą firmę jako organizację — widnieje na dokumentach, pieczęciach,
                papierze firmowym. Logo marki (brandowe) może być bardziej kreatywne i
                służy budowaniu emocjonalnego związku z konsumentami.
              </p>
              <p>
                Dla wielu małych i średnich firm te dwie role spełnia to samo logo.
                Ważne jest jednak, żeby było ono przygotowane technicznie poprawnie:
                w formacie wektorowym (SVG, AI, EPS), który można dowolnie skalować
                bez utraty jakości. To podstawa, którą zapewniamy w każdym pakiecie.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Projektowanie logo online — czy to dobry pomysł?
              </h3>
              <p>
                Narzędzia jak Canva, Looka czy Wix Logo Maker pozwalają stworzyć logo
                w kilka minut. Problem? Identyczne lub bardzo podobne logo może mieć
                setki innych firm. Takie logo nie buduje unikalności marki i często
                nie jest objęte prawami autorskimi (licencja tylko na użytkowanie).
              </p>
              <p>
                Profesjonalne{" "}
                <strong className="text-foreground">tworzenie logo</strong> w agencji
                gwarantuje unikalność, pełne prawa oraz przemyślaną strategię wizualną.
                Inwestycja, która zwraca się przez lata.
              </p>
            </div>
          </FadeInView>

          {/* Internal links */}
          <div className="mt-10 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/agencja-graficzna"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Agencja graficzna — oferta
            </Link>
            <Link
              to="/uslugi/strony-internetowe"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Strony internetowe
            </Link>
            <Link
              to="/performance-marketing"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Kampanie reklamowe
            </Link>
            <Link
              to="/social-media/obsluga"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Social media marketing
            </Link>
            <Link
              to="/blog/co-to-jest-identyfikacja-wizualna"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Co to jest identyfikacja wizualna?
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Często zadawane pytania — logo i branding
            </h2>
          </FadeInView>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-card border border-border/60 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </FadeInView>
            ))}
          </Accordion>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default LogoIBranding;
