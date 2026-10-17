import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  BarChart2,
  Target,
  CheckCircle2,
  ArrowRight,
  Globe,
  FileText,
  Link2,
  Settings,
  MapPin,
  Eye,
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
    question: "Ile kosztuje pozycjonowanie stron internetowych?",
    answer:
      "Wycenę przygotowujemy po rozmowie o zakresie. Koszt zależy od tego, czy chodzi o SEO lokalne czy ogólnopolskie, od liczby i konkurencyjności fraz, stanu technicznego strony, ilości treści do przygotowania oraz zakresu link buildingu.",
  },
  {
    question: "Po jakim czasie widać efekty pozycjonowania?",
    answer:
      "Nie podajemy sztywnych terminów — tempo zależy od konkurencji w branży, stanu strony i zakresu prac. Pozycjonowanie to praca długoterminowa: pierwsze zmiany zwykle pojawiają się po kilku miesiącach systematycznych działań, a efekty najlepiej oceniać w dłuższym okresie.",
  },
  {
    question: "Na czym polega pozycjonowanie stron?",
    answer:
      "Pozycjonowanie (SEO) to proces optymalizacji strony internetowej, który sprawia, że Google wyświetla ją wyżej w wynikach wyszukiwania. Składa się z trzech filarów: SEO techniczne (szybkość, struktura, indeksowanie), SEO on-page (treści, słowa kluczowe, meta tagi) oraz link building (pozyskiwanie linków z zewnętrznych stron).",
  },
  {
    question: "Czy pozycjonowanie działa dla każdej branży?",
    answer:
      "Pozycjonowanie działa dla praktycznie każdej branży — od usług lokalnych (restauracje, gabinety medyczne, warsztaty) po e-commerce i firmy B2B. Różni się tylko strategia: inne podejście dla lokalnego SEO (Google Moja Firma, frazy z miastem), inne dla ogólnopolskich kampanii.",
  },
  {
    question: "Co to jest pozycjonowanie lokalne?",
    answer:
      "Pozycjonowanie lokalne to SEO skierowane na frazy zawierające nazwę miasta lub regionu (np. 'hydraulik Poznań', 'restauracja Warszawa'). Obejmuje optymalizację wizytówki Google Moja Firma, budowanie lokalnych cytowań i pozyskiwanie recenzji. Idealne dla firm obsługujących klientów w konkretnym mieście.",
  },
  {
    question: "Czy mogę pozycjonować się samodzielnie?",
    answer:
      "Podstawy SEO można opanować samodzielnie, ale skuteczna kampania SEO wymaga zaawansowanej wiedzy technicznej, dostępu do profesjonalnych narzędzi (Ahrefs, SEMrush, Screaming Frog) i czasu na regularną pracę. Błędy w SEO mogą zaszkodzić widoczności strony — warto powierzyć to specjalistom.",
  },
  {
    question: "Jak Fotz Studio mierzy efekty pozycjonowania?",
    answer:
      "Raportujemy miesięcznie: pozycje na kluczowe słowa kluczowe (Google Search Console), ruch organiczny (Google Analytics 4), liczba zindeksowanych stron, profil linków zewnętrznych. Możesz też mieć bezpośredni dostęp do danych w Google Search Console i Google Analytics 4.",
  },
  {
    question: "Czy Fotz Studio gwarantuje pozycje w Google?",
    answer:
      "Nie — nie gwarantujemy konkretnej pozycji w Google. Algorytm się zmienia, a wyniki zależą od wielu czynników, na które żadna agencja nie ma pełnego wpływu. Zapewniamy natomiast transparentne działania zgodne z wytycznymi Google (White-hat SEO), systematyczną pracę i regularne raportowanie postępów.",
  },
];

const UslugiPozycjonowanie = () => {
  const problems = [
    {
      icon: Eye,
      title: "Nie jesteś widoczny w Google",
      desc: "Twoja strona jest na 5. lub dalszej stronie wyników. Klienci, którzy szukają Twoich usług, trafiają do konkurencji.",
    },
    {
      icon: TrendingUp,
      title: "Ruch organiczny nie rośnie",
      desc: "Płacisz za reklamę, bo SEO nie działa. Każdy miesiąc bez pozycjonowania to przegapione darmowe kliknięcia.",
    },
    {
      icon: Target,
      title: "Błędna strategia słów kluczowych",
      desc: "Celujesz w zbyt ogólne frazy z dużą konkurencją lub frazy, których klienci nie szukają.",
    },
    {
      icon: Settings,
      title: "Problemy techniczne SEO",
      desc: "Wolne ładowanie, błędy crawlowania, zduplikowane treści — techniczne problemy hamują pozycje w Google.",
    },
  ];

  const services = [
    {
      icon: Settings,
      title: "SEO techniczne",
      description:
        "Audyt i optymalizacja techniczna: Core Web Vitals, indeksowanie, struktury URL, sitemapy, schematy Schema.org.",
    },
    {
      icon: FileText,
      title: "Content SEO",
      description:
        "Tworzenie treści zoptymalizowanych pod słowa kluczowe: artykuły blogowe, opisy usług, opisy kategorii e-commerce.",
    },
    {
      icon: Link2,
      title: "Link building",
      description:
        "Pozyskiwanie wartościowych linków zewnętrznych: wpisy gościnne, katalogi branżowe, PR cyfrowy.",
    },
    {
      icon: MapPin,
      title: "Pozycjonowanie lokalne",
      description:
        "Optymalizacja pod frazy z miastem, Google Moja Firma, lokalne cytowania NAP, pozyskiwanie recenzji.",
    },
    {
      icon: Globe,
      title: "SEO ogólnopolskie",
      description:
        "Kampanie SEO na skalę ogólnopolską dla firm chcących zdobyć widoczność w całej Polsce.",
    },
    {
      icon: BarChart2,
      title: "Audyt SEO",
      description:
        "Kompleksowy audyt strony: analiza techniczna, treści, linków zewnętrznych i pozycji słów kluczowych.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audyt i analiza",
      description:
        "Analizujemy aktualną sytuację strony: pozycje, ruch, błędy techniczne, profil linków i treści.",
    },
    {
      step: "02",
      title: "Strategia SEO",
      description:
        "Dobieramy słowa kluczowe z potencjałem, planujemy treści i działania link buildingowe na kolejne miesiące.",
    },
    {
      step: "03",
      title: "Optymalizacja on-page",
      description:
        "Wdrażamy zmiany techniczne, optymalizujemy meta tagi, treści i strukturę wewnętrznych linków.",
    },
    {
      step: "04",
      title: "Content i link building",
      description:
        "Tworzymy treści zoptymalizowane pod SEO i pozyskujemy wartościowe linki zewnętrzne.",
    },
    {
      step: "05",
      title: "Monitoring i raportowanie",
      description:
        "Co miesiąc raportujemy pozycje, ruch i konwersje. Strategia jest na bieżąco dostosowywana.",
    },
  ];

  const cityPages = [
    { city: "Warszawa", url: "/seo/pozycjonowanie-warszawa" },
    { city: "Kraków", url: "/seo/pozycjonowanie-krakow" },
    { city: "Wrocław", url: "/seo/pozycjonowanie-wroclaw" },
    { city: "Poznań", url: "/seo/pozycjonowanie-poznan" },
    { city: "Gdańsk", url: "/seo/pozycjonowanie-gdansk" },
    { city: "Łódź", url: "/seo/pozycjonowanie-lodz" },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Stron Internetowych — Agencja SEO | Fotz Studio"
        description="Profesjonalne pozycjonowanie stron internetowych w Google. Agencja SEO Fotz Studio — audyt, optymalizacja, link building. Wycena po bezpłatnej konsultacji."
        canonical="https://www.fotz-studio.pl/uslugi/pozycjonowanie"
        keywords="pozycjonowanie stron internetowych, usługi seo, agencja seo, seo dla firm, pozycjonowanie google, seo pozycjonowanie cennik, kampanie seo, pozycjonowanie stron cennik, seo audyt, pozycjonowanie organiczne"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych"
        description="Profesjonalne usługi SEO i pozycjonowania stron w Google. Fotz Studio oferuje audyt SEO, optymalizację techniczną, content SEO i link building dla firm z całej Polski."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://www.fotz-studio.pl/uslugi/pozycjonowanie" },
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
              <Search className="w-4 h-4" />
              Agencja SEO · Poznań i cała Polska
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie stron{" "}
              <span className="text-primary">w Google</span>, które przynosi klientów
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Agencja SEO Fotz Studio — audyt techniczny, optymalizacja treści,
              link building. Pozycjonujemy strony małych firm, e-commerce i dużych
              serwisów.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
                  Zapytaj o audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
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
                "White-hat SEO",
                "Raportowanie miesięczne",
                "Bezpłatna konsultacja na start",
                "Bez długoterminowych pułapek",
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
              Dlaczego Twoja strona nie pojawia się w Google?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zła widoczność w Google to nie przypadek — to efekt konkretnych
              problemów, które rozwiązujemy.
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
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Zakres usług SEO w Fotz Studio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kompleksowe pozycjonowanie stron internetowych — od audytu przez
              optymalizację po link building i raportowanie.
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
              Jak wygląda współpraca przy pozycjonowaniu?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Przejrzysty proces bez tajemnic — wiesz, za co płacisz.
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

      {/* Pricing factors */}
      <section id="pakiety" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Od czego zależy wycena pozycjonowania?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wycenę przygotowujemy po rozmowie o zakresie i wstępnym przeglądzie
              strony. Na koszt wpływają przede wszystkim:
            </p>
          </FadeInView>

          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "Zasięg działań — SEO lokalne (frazy z miastem) czy ogólnopolskie",
              "Liczba i konkurencyjność fraz, na które chcesz być widoczny",
              "Stan techniczny strony i zakres poprawek do wdrożenia",
              "Ilość treści do przygotowania lub przebudowy",
              "Zakres link buildingu i działań poza stroną",
              "Częstotliwość raportowania i konsultacji",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-card border border-border/60 rounded-xl p-4 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/kontakt">
                Zapytaj o wycenę <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* City pages hub */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pozycjonowanie lokalne — wybierz swoje miasto
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pracujemy z Poznania, a firmy z innych miast obsługujemy zdalnie.
              Sprawdź informacje o SEO dla Twojego regionu.
            </p>
          </FadeInView>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {cityPages.map((cp) => (
              <FadeInView key={cp.city}>
                <Link
                  to={cp.url}
                  className="inline-flex items-center gap-2 bg-card border border-border/60 hover:border-primary/50 hover:bg-primary/5 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  Pozycjonowanie {cp.city}
                </Link>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Pozycjonowanie stron — kompletny przewodnik
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Pozycjonowanie stron internetowych</strong>{" "}
                (SEO, Search Engine Optimization) to zestaw działań mających na celu
                poprawę widoczności strony w organicznych (bezpłatnych) wynikach
                wyszukiwania Google. W odróżnieniu od płatnych reklam Google Ads,
                efekty SEO nie znikają w chwili wyłączenia budżetu i mogą kumulować się z czasem.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Trzy filary skutecznego pozycjonowania
              </h3>
              <p>
                Nowoczesne SEO opiera się na trzech równie ważnych filarach. Pierwszy
                to <strong className="text-foreground">SEO techniczne</strong> —
                optymalizacja kodu strony, szybkość ładowania (Core Web Vitals),
                poprawna struktura URL, mapy witryn (sitemap XML) i schematy danych
                strukturalnych (Schema.org). Algorytm Google nie wypozycjonuje strony,
                której nie może poprawnie zindeksować.
              </p>
              <p>
                Drugi filar to{" "}
                <strong className="text-foreground">SEO on-page</strong>, czyli
                optymalizacja treści: dobór słów kluczowych, pisanie tekstów w
                formacie E-E-A-T (Expertise, Experience, Authoritativeness,
                Trustworthiness), optymalizacja nagłówków H1–H3, meta tytułów i
                opisów. Treści muszą faktycznie odpowiadać na pytania użytkowników.
              </p>
              <p>
                Trzeci filar to{" "}
                <strong className="text-foreground">link building</strong> — budowanie
                profilu linków zewnętrznych. Google traktuje linki z wartościowych stron
                jak „głosy" na Twoją witrynę. Im więcej wartościowych linków, tym
                wyższy autorytet domeny i lepsze pozycje.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Pozycjonowanie lokalne vs. ogólnopolskie — kiedy wybrać które?
              </h3>
              <p>
                <strong className="text-foreground">Pozycjonowanie lokalne</strong>{" "}
                jest idealne dla firm obsługujących klientów w konkretnym mieście lub
                regionie: restauracje, gabinety medyczne, warsztaty samochodowe, salony
                fryzjerskie, agencje nieruchomości. Kluczowe elementy lokalnego SEO to
                optymalizacja wizytówki Google Moja Firma, frazy z nazwą miasta i
                budowanie lokalnych cytowań NAP (Name, Address, Phone).
              </p>
              <p>
                SEO ogólnopolskie wybierają firmy sprzedające usługi lub produkty w
                całym kraju — sklepy internetowe, platformy SaaS, firmy B2B.
                Wymaga szerszej strategii słów kluczowych i większego budżetu na
                link building.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8">
                Ile czasu zajmuje pozycjonowanie?
              </h3>
              <p>
                SEO to maraton, nie sprint. Nie da się podać sztywnego terminu —
                tempo zależy od konkurencji, stanu strony i zakresu prac. Pierwsze
                zmiany pojawiają się zwykle po kilku miesiącach, a efekty najlepiej
                oceniać w dłuższym okresie. Dlatego{" "}
                <strong className="text-foreground">
                  pozycjonowanie wymaga systematycznej, długoterminowej pracy
                </strong>
                .
              </p>
              <p>
                Uważaj na oferty obiecujące szybkie i pewne efekty w Google. Często
                stoją za nimi techniki Black-hat SEO, które krótkoterminowo mogą
                poprawić widoczność, ale długoterminowo grożą karą od Google
                (Google Penalty) i utratą widoczności.
              </p>
            </div>
          </FadeInView>

          {/* Internal links */}
          <div className="mt-10 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/seo/audyt"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Audyt SEO — szczegóły
            </Link>
            <Link
              to="/performance-marketing"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Kampanie Google Ads
            </Link>
            <Link
              to="/uslugi/strony-internetowe"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Strony internetowe
            </Link>
            <Link
              to="/uslugi/logo-i-branding"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Logo i branding
            </Link>
            <Link
              to="/blog/google-ads-cennik"
              className="text-primary hover:underline font-medium text-sm"
            >
              → Google Ads — cennik 2025
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Często zadawane pytania — pozycjonowanie stron
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

export default UslugiPozycjonowanie;
