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
  Shield,
  Eye,
  Zap,
  FileText,
  Monitor,
  Printer,
  Target,
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

import viz17 from "@/assets/wizualizacje/viz-17.webp";
import viz18 from "@/assets/wizualizacje/viz-18.webp";
import viz19 from "@/assets/wizualizacje/viz-19.webp";
import viz20 from "@/assets/wizualizacje/viz-20.webp";

const faqItems = [
  {
    question: "Ile kosztuje zaprojektowanie logo dla firmy?",
    answer:
      "Wycenę przygotowujemy po rozmowie o zakresie: czy potrzebujesz samego logotypu, czy pełnej identyfikacji wizualnej z księgą znaku i szablonami materiałów. Na cenę wpływa liczba koncepcji, rund poprawek, nośników i materiałów do zaprojektowania.",
  },
  {
    question: "Jak długo trwa projektowanie logo?",
    answer:
      "Termin ustalamy w harmonogramie po briefie — sam logotyp powstaje szybciej niż pełna identyfikacja wizualna. Na czas realizacji wpływa zakres prac, liczba rund poprawek i szybkość feedbacku ze strony klienta.",
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
      "Tak, każdy projekt zawiera rundy poprawek — ich liczbę ustalamy w ofercie, razem z zakresem prac. Zaczynamy od briefu, który pomaga nam dobrze zrozumieć Twoje potrzeby, dzięki czemu liczba poprawek jest zazwyczaj minimalna.",
  },
  {
    question: "Czy Fotz Studio projektuje logo dla nowych firm?",
    answer:
      "Tak, specjalizujemy się zarówno w projektowaniu logo dla nowych firm (startup branding), jak i w rebrandingu istniejących marek. Każdy projekt traktujemy indywidualnie.",
  },
  {
    question: "Jak wygląda proces projektowania logo?",
    answer:
      "Proces składa się z 5 etapów: (1) Brief i analiza rynku – poznajemy Twoją branżę, konkurencję i grupę docelową. (2) Koncepcje – przygotowujemy 2–3 różne kierunki projektowe. (3) Wybór i dopracowanie – rozwijamy wybrany kierunek. (4) Finalizacja – przygotowujemy pliki w wszystkich formatach. (5) Wdrożenie – opcjonalnie pomagamy wdrożyć identyfikację.",
  },
  {
    question: "Czy Fotz Studio projektuje logo tylko dla firm z Poznania?",
    answer:
      "Nie. Pracujemy z Poznania, a firmy z innych miast obsługujemy zdalnie. Cały proces projektowania odbywa się zdalnie poprzez briefy online, prezentacje i komunikację mailową lub na Zoom.",
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
        "Wybierasz najlepszy kierunek i razem go dopracowujemy. Liczbę rund poprawek ustalamy w ofercie.",
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

  const pricingFactors = [
    "Zakres: sam logotyp czy pełna identyfikacja wizualna z księgą znaku",
    "Liczba koncepcji i rund poprawek",
    "Liczba i rodzaj materiałów: social media, druki firmowe, opakowania, ulotki",
    "Potrzeba researchu rynku i konkurencji przed projektem",
    "Wsparcie przy wdrożeniu identyfikacji na stronie i w materiałach",
    "Termin realizacji ustalany w harmonogramie",
  ];

  return (
    <Layout>
      <SEOHead
        title="Projektowanie Logo i Identyfikacja Wizualna — Fotz Studio Poznań"
        description="Projektujemy profesjonalne logo i identyfikację wizualną dla firm z całej Polski. Wycena po rozmowie o zakresie — pełne prawa autorskie, formaty web i print, księga znaku i szablony materiałów."
        canonical="https://www.fotz-studio.pl/uslugi/logo-i-branding"
        keywords="logo i branding, projekt logo, tworzenie logo, logo dla firmy, branding firmy, identyfikacja wizualna, logo cena"
      />
      <ServiceSchema
        name="Projektowanie logo i identyfikacja wizualna"
        description="Profesjonalne projektowanie logo oraz tworzenie identyfikacji wizualnej dla firm. Fotz Studio oferuje unikalne projekty logo z pełnymi prawami autorskimi, w formatach web i print."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Logo i branding", url: "https://www.fotz-studio.pl/uslugi/logo-i-branding" },
        ]}/>
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
              wszystkie formaty, termin ustalony w harmonogramie.
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
                <Link to="#pakiety">Od czego zależy wycena</Link>
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
                "Jasny harmonogram",
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
              Od czego zależy wycena projektu logo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wycenę przygotowujemy po rozmowie o zakresie. Każdą ofertę opisujemy
              konkretnie: co dostajesz, ile rund poprawek i w jakim terminie.
            </p>
          </FadeInView>

          <FadeInView>
            <ul className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
              {pricingFactors.map((factor, i) => (
                <li
                  key={i}
                  className="bg-card border border-border/60 rounded-xl p-5 flex items-start gap-3 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{factor}</span>
                </li>
              ))}
            </ul>
          </FadeInView>

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
                icon: Target,
                title: "Projekt oparty na briefie",
                desc: "Zaczynamy od analizy branży, grupy docelowej i konkurencji — dopiero potem projektujemy.",
              },
              {
                icon: Shield,
                title: "Pełne prawa autorskie",
                desc: "Wszystkie prawa do projektu przechodzą na Ciebie. Możesz go używać bez ograniczeń.",
              },
              {
                icon: Zap,
                title: "Jasny harmonogram",
                desc: "Terminy kolejnych etapów ustalamy w ofercie, zależnie od zakresu prac.",
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
                Rozpiętość cen na rynku jest ogromna — od gotowych szablonów w
                serwisach online po rozbudowane projekty dużych agencji brandingowych
                dla korporacji. Fotz Studio pracuje głównie z małymi i średnimi
                firmami i dopasowuje zakres prac do ich potrzeb i budżetu.
              </p>
              <p>
                Cena{" "}
                <strong className="text-foreground">projektu logo dla firmy</strong>{" "}
                zależy od zakresu: inaczej wyceniamy sam logotyp, a inaczej
                kompleksowy branding z księgą znaku i szablonami materiałów. Wycenę
                przygotowujemy po rozmowie o zakresie. Każdy projekt obejmuje pełne
                prawa autorskie i wszystkie potrzebne formaty plików.
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
                to projekt tworzony od podstaw dla Twojej marki, przeniesienie pełnych
                praw autorskich i przemyślana strategia wizualna.
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
