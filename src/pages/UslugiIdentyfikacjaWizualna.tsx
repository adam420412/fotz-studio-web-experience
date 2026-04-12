import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Palette,
  CheckCircle2,
  ArrowRight,
  Star,
  Layers,
  Eye,
  FileText,
  Globe,
  Pen,
  Target,
  Shield,
  Award,
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
    question: "Czym jest identyfikacja wizualna firmy?",
    answer:
      "Identyfikacja wizualna (corporate identity) to spójny system wizualny, który tworzy rozpoznawalny obraz marki. Obejmuje logo, paletę barw, typografię, szablony dokumentów, materiały marketingowe i zasady ich stosowania zebrane w księdze znaku. Dobra identyfikacja wizualna sprawia, że klient rozpoznaje Twoją firmę na każdym nośniku — od wizytówki po stronę internetową.",
  },
  {
    question: "Ile kosztuje identyfikacja wizualna firmy?",
    answer:
      "Koszt zależy od zakresu projektu. Podstawowa identyfikacja (logo + kolory + czcionki + karta wzorcowa) to 1 500–3 000 zł. Pełna identyfikacja z księgą znaku, szablonami dokumentów i materiałami marketingowymi kosztuje 3 500–8 000 zł. Dla korporacji z rozbudowanymi wytycznymi brand book może kosztować 10 000–30 000 zł.",
  },
  {
    question: "Co zawiera kompleksowa identyfikacja wizualna?",
    answer:
      "Kompleksowy projekt obejmuje: logo (wersja pozioma, pionowa, monochromatyczna, negatyw), paletę barw z kodami RAL/Pantone/CMYK/RGB/HEX, dobraną typografię, wizytówki, papier firmowy, koperty, szablon prezentacji, sygnaturę e-mail, grafikę na social media oraz księgę znaku z zasadami stosowania wszystkich elementów.",
  },
  {
    question: "Ile trwa stworzenie identyfikacji wizualnej?",
    answer:
      "Czas realizacji zależy od zakresu: samo logo to 7–14 dni roboczych, pełna identyfikacja 3–6 tygodni, a rozbudowana księga znaku 6–10 tygodni. Na czas realizacji wpływa też tempo decyzji po stronie klienta — etapy zatwierdzania koncepcji i poprawki są wliczone w harmonogram.",
  },
  {
    question: "Czy będę właścicielem praw autorskich do identyfikacji?",
    answer:
      "Tak — po opłaceniu faktury końcowej przenosimy na Ciebie pełnię praw majątkowych do projektu na wszystkich polach eksploatacji. Otrzymujesz pliki źródłowe w formatach AI, EPS, PDF oraz PNG/SVG do użytku cyfrowego. Możesz swobodnie drukować, modyfikować i komercyjnie korzystać z projektu.",
  },
  {
    question: "Jaki jest proces tworzenia identyfikacji wizualnej w Fotz Studio?",
    answer:
      "Pracujemy w 5 etapach: (1) Brief i research — poznajemy Twoją firmę, branżę i konkurencję; (2) Koncepcja — prezentujemy 2–3 kierunki kreatywne; (3) Wybór i rozwinięcie — rozwijamy wybraną koncepcję; (4) Finalizacja — przygotowujemy wszystkie pliki i wersje; (5) Przekazanie — dostarczamy pełną dokumentację wraz z plikami.",
  },
  {
    question: "Czy pomagacie też firmom, które chcą odświeżyć starą identyfikację?",
    answer:
      "Tak — rebrand lub refresh to nasza specjalność. Analizujemy istniejącą tożsamość wizualną, zachowujemy elementy rozpoznawalne dla klientów i modernizujemy to, co przestało działać. Rebrand może być radykalny (zupełnie nowe logo) lub ewolucyjny (aktualizacja kolorów, typografii, proporcji).",
  },
  {
    question: "Czy identyfikacja wizualna obejmuje stronę internetową?",
    answer:
      "Identyfikacja wizualna to fundament, na którym buduje się stronę internetową — nie jest tą samą usługą. Jednak w Fotz Studio świadczymy obie usługi, więc po zatwierdzeniu identyfikacji możemy od razu przejść do projektu i realizacji strony WWW z zachowaniem pełnej spójności marki.",
  },
];

const packages = [
  {
    name: "Identity Start",
    price: "1 500 zł",
    desc: "Dla nowych firm i startupów",
    features: [
      "Logo (3 wersje kolorystyczne)",
      "Paleta barw (5 kolorów)",
      "Typografia (2 kroje pisma)",
      "Karta wzorcowa A4",
      "Pliki AI, EPS, PNG, SVG",
      "Prawa autorskie w cenie",
    ],
    popular: false,
  },
  {
    name: "Identity Business",
    price: "3 500 zł",
    desc: "Dla rozwijających się firm",
    features: [
      "Wszystko z pakietu Start",
      "Wizytówka (projekt + gotowy do druku)",
      "Papier firmowy i koperta",
      "Szablon prezentacji (10 slajdów)",
      "Sygnatura e-mail",
      "Grafiki social media (FB, IG, LI)",
      "Podstawowa księga znaku (20 stron)",
    ],
    popular: true,
  },
  {
    name: "Identity Premium",
    price: "7 500 zł",
    desc: "Dla firm z wysokimi wymaganiami",
    features: [
      "Wszystko z pakietu Business",
      "Brand book / pełna księga znaku (40+ stron)",
      "System ikon marki (10 ikon)",
      "Ilustracje i elementy graficzne",
      "Materiały marketingowe (ulotka, roll-up)",
      "Wytyczne dla dostawców i drukarni",
      "Pełne wsparcie po wdrożeniu (3 mies.)",
    ],
    popular: false,
  },
];

const services = [
  {
    icon: Pen,
    title: "Projektowanie logo",
    desc: "Unikalne logo dopasowane do Twojej branży, wartości i grupy docelowej. 3 koncepcje, nielimitowane poprawki.",
  },
  {
    icon: Palette,
    title: "Paleta barw i typografia",
    desc: "Spójny system kolorów z kodami dla druku (CMYK/Pantone) i digital (RGB/HEX) oraz dobrane kroje pisma.",
  },
  {
    icon: FileText,
    title: "Księga znaku i brand book",
    desc: "Kompletny dokument z zasadami stosowania wszystkich elementów wizualnych — dla Twojego zespołu i podwykonawców.",
  },
  {
    icon: Layers,
    title: "Materiały firmowe",
    desc: "Wizytówki, papier firmowy, koperty, teczki — spójne i gotowe do druku w każdej drukarni.",
  },
  {
    icon: Globe,
    title: "Digital i social media",
    desc: "Grafiki profilowe, banery, szablony stories i postów oraz sygnatura e-mail zgodne z identyfikacją.",
  },
  {
    icon: Eye,
    title: "Rebrand i odświeżenie",
    desc: "Modernizacja istniejącej tożsamości wizualnej z zachowaniem rozpoznawalności u dotychczasowych klientów.",
  },
];

const UslugiIdentyfikacjaWizualna = () => {
  return (
    <Layout>
      <SEOHead
        title="Identyfikacja Wizualna Firmy — Projekt, Logo, Brand Book | Fotz Studio"
        description="Profesjonalna identyfikacja wizualna dla firm. Logo, paleta barw, księga znaku, materiały firmowe i digital. Ceny od 1 500 zł. Pełne prawa autorskie. Bezpłatna wycena!"
        canonical="https://fotz.pl/uslugi/identyfikacja-wizualna"
        ogTitle="Identyfikacja Wizualna Firmy — Fotz Studio Agencja Brandingowa"
        ogDescription="Spójna identyfikacja wizualna buduje rozpoznawalność marki. Logo, brand book, materiały firmowe i digital. Fotz Studio — Poznań i cała Polska."
        keywords="identyfikacja wizualna, usługi identyfikacja wizualna, projekt logo, brand identity, identyfikacja firmy, branding"
      />
      <ServiceSchema
        name="Identyfikacja wizualna firmy"
        description="Fotz Studio projektuje kompleksową identyfikację wizualną dla firm. Logo, paleta barw, typografia, księga znaku, materiały firmowe i digital. Działamy dla firm z całej Polski."
        url="https://fotz.pl/uslugi/identyfikacja-wizualna"
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Identyfikacja wizualna", url: "https://fotz.pl/uslugi/identyfikacja-wizualna" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-background overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <Palette className="w-4 h-4" />
              Projektowanie · Identyfikacja wizualna
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Identyfikacja wizualna{" "}
              <span className="text-primary">dla Twojej firmy</span> —
              logo, brand book i więcej
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Tworzymy spójną tożsamość wizualną, która buduje zaufanie, wyróżnia markę
              i sprawia, że klienci Cię zapamiętują. Od logo i palety barw po pełną
              księgę znaku i materiały firmowe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Bezpłatna wycena identyfikacji <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="/uslugi/logo-i-branding">
                  Zobacz portfolio logo
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
            >
              {["Pełne prawa autorskie", "Pliki AI, EPS, SVG, PNG", "Cała Polska", "Brand book w cenie"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "150+", label: "Projektów identyfikacji", context: "od 2018 roku" },
              { metric: "4,9/5", label: "Ocena klientów", context: "Google i Clutch" },
              { metric: "3 tygodnie", label: "Średni czas realizacji", context: "pakiet Business" },
              { metric: "100%", label: "Praw autorskich", context: "przeniesienie w cenie" },
            ].map((r, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{r.metric}</div>
                <div className="text-sm font-medium text-foreground">{r.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.context}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Co obejmuje identyfikacja wizualna firmy?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Identyfikacja wizualna to nie tylko logo — to kompletny system wizualny
              budujący spójny wizerunek na każdym nośniku.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="bg-card border border-border/60 rounded-xl p-6 hover:border-primary/40 transition-colors h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* SEO article */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Czym jest identyfikacja wizualna i dlaczego jest ważna dla firmy?
            </h2>
            <div className="space-y-5 text-muted-foreground">
              <p>
                <strong className="text-foreground">Identyfikacja wizualna firmy</strong> (ang.{" "}
                <em>corporate identity</em> lub <em>visual identity</em>) to kompleksowy system
                wszystkich elementów wizualnych, które razem tworzą rozpoznawalny wizerunek marki.
                To fundament komunikacji marketingowej — bez spójnej identyfikacji nawet dobry produkt
                jest trudniejszy do zapamiętania.
              </p>
              <p>
                Badania pokazują, że{" "}
                <strong className="text-foreground">spójna prezentacja wizualna marki</strong> zwiększa
                jej rozpoznawalność o 80%, a firmy z profesjonalną identyfikacją wzbudzają o 33% więcej
                zaufania wśród nowych klientów. Klient, który widzi Twoją wizytówkę, stronę internetową
                i post na Instagramie, powinien natychmiast wiedzieć, że to ta sama firma.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
                Z czego składa się identyfikacja wizualna?
              </h3>
              <p>
                Pełna identyfikacja wizualna składa się z kilku wzajemnie powiązanych elementów:
                <strong className="text-foreground"> logo</strong> (znak graficzny lub logotyp
                w kilku wersjach: kolorowe, monochromatyczne, negatyw, sygnet),{" "}
                <strong className="text-foreground">paleta kolorów</strong> z kodami dla druku
                (CMYK, Pantone) i digital (RGB, HEX),{" "}
                <strong className="text-foreground">typografia</strong> (dobrane kroje pisma dla
                tytułów, treści i komunikatów marketingowych),{" "}
                <strong className="text-foreground">materiały firmowe</strong> (wizytówki, papier
                firmowy, koperty, teczki),{" "}
                <strong className="text-foreground">digital assets</strong> (grafiki social media,
                sygnatura e-mail, banery reklamowe) oraz{" "}
                <strong className="text-foreground">księga znaku</strong> — dokument z zasadami
                stosowania wszystkich elementów.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
                Kiedy warto zainwestować w identyfikację wizualną?
              </h3>
              <p>
                Inwestycja w identyfikację wizualną jest szczególnie wartościowa przy: zakładaniu
                nowej firmy lub startupu, wchodzeniu na nowy rynek lub segment klientów, rebrandingu
                po zmianie nazwy lub profilu działalności, fuzji z inną firmą oraz gdy dotychczasowy
                wizerunek sprawia wrażenie przestarzałego lub amatorskiego.
              </p>
              <p>
                Profesjonalna identyfikacja wizualna to inwestycja, która zwraca się przez lata —
                w odróżnieniu od kampanii reklamowych, które działają tylko podczas emisji. To aktyw
                marki, który buduje wartość firmy i może być decydującym czynnikiem przy wyborze
                między Twoją ofertą a konkurencją.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pakiety identyfikacji wizualnej — cennik
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ceny dopasowane do etapu rozwoju Twojej firmy. Każdy pakiet obejmuje
              prawa autorskie i pliki w wymaganych formatach.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div
                  className={`relative bg-card rounded-2xl border p-8 flex flex-col h-full transition-shadow hover:shadow-lg ${
                    pkg.popular
                      ? "border-primary shadow-md shadow-primary/10"
                      : "border-border/60"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                        Najpopularniejszy
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-xs text-muted-foreground mt-1">netto + VAT</div>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-8 w-full"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link to="/kontakt">
                      Zamów wycenę <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Potrzebujesz czegoś spoza pakietów?{" "}
              <Link to="/kontakt" className="text-primary hover:underline font-medium">
                Zapytaj o wycenę indywidualną →
              </Link>
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Jak tworzymy identyfikację wizualną — proces krok po kroku
            </h2>
          </FadeInView>
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Brief i research",
                desc: "Wypełniasz brief — poznajemy Twoją firmę, branżę, konkurencję i grupę docelową. Analizujemy rynek i trendy wizualne w Twojej branży.",
              },
              {
                step: "02",
                title: "Koncepcja i kierunek",
                desc: "Prezentujemy 2–3 różne kierunki kreatywne. Na tym etapie wybierasz ogólny styl i nastrój przyszłej identyfikacji.",
              },
              {
                step: "03",
                title: "Projektowanie i refinement",
                desc: "Rozwijamy wybrany kierunek — dopracowujemy logo, kolory i typografię. Możesz zgłaszać poprawki na każdym etapie.",
              },
              {
                step: "04",
                title: "Przygotowanie plików",
                desc: "Finalny projekt pakujemy w komplet plików: AI, EPS, PDF (wektory) + PNG, SVG (do digital). Przygotowujemy wszystkie elementy z wybranego pakietu.",
              },
              {
                step: "05",
                title: "Przekazanie i dokumentacja",
                desc: "Przekazujemy pliki, umowę przeniesienia praw autorskich i księgę znaku z instrukcjami stosowania identyfikacji dla Twojego zespołu.",
              },
            ].map((step, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dlaczego Fotz Studio — agencja brandingowa z Poznania?
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: "Doświadczenie w 20+ branżach",
                desc: "Od gastronomii i medycyny po IT i fintech — rozumiemy specyfikę różnych sektorów i tworzymy identyfikacje, które trafiają do właściwej grupy docelowej.",
              },
              {
                icon: Shield,
                title: "Pełne prawa autorskie w cenie",
                desc: "Po opłaceniu projektu jesteś jego jedynym właścicielem. Żadnych opłat licencyjnych, żadnych ograniczeń w użyciu — komercyjne i niekomercyjne użycie bez limitów.",
              },
              {
                icon: Star,
                title: "Kompleksowość i spójność",
                desc: "Projektujemy identyfikację, a potem możemy zrealizować stronę internetową, kampanie reklamowe i social media — w jednym miejscu, zachowując 100% spójności.",
              },
              {
                icon: Target,
                title: "Orientacja na cel biznesowy",
                desc: "Identyfikacja wizualna ma nie tylko ładnie wyglądać — ma pomagać sprzedawać. Projektujemy z myślą o tym, jak klienci postrzegają Twoją markę.",
              },
            ].map((item, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zbuduj rozpoznawalną markę z Fotz Studio
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Bezpłatna wycena identyfikacji wizualnej — wyślij brief lub zadzwoń.
              Odpowiemy w ciągu 24 godzin z propozycją zakresu i kosztów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów bezpłatną wycenę <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/uslugi/logo-i-branding">Zobacz portfolio logo</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              FAQ — identyfikacja wizualna firmy
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

      {/* Internal links */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
            Powiązane usługi brandingowe
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Projektowanie logo", href: "/uslugi/logo-i-branding" },
              { label: "Agencja graficzna", href: "/agencja-graficzna" },
              { label: "Strony internetowe", href: "/uslugi/strony-internetowe" },
              { label: "Social media", href: "/uslugi/social-media" },
              { label: "Kampanie reklamowe", href: "/uslugi/kampanie-reklamowe" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors text-sm px-4 py-2 rounded-full font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/blog/co-to-jest-identyfikacja-wizualna"
              className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              <ArrowRight className="w-3 h-3" /> Co to jest identyfikacja wizualna? (blog)
            </Link>
            <Link
              to="/blog/jak-zaprojektowac-logo-dla-firmy"
              className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              <ArrowRight className="w-3 h-3" /> Jak zaprojektować logo? (blog)
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default UslugiIdentyfikacjaWizualna;
