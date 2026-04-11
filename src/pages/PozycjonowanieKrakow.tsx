import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  BarChart2,
  Star,
  Building2,
  Globe,
  Target,
  Clock,
  Award,
  Shield,
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
    question: "Ile kosztuje pozycjonowanie w Krakowie?",
    answer:
      "Pozycjonowanie lokalne w Krakowie w Fotz Studio zaczyna się od 1 000 zł netto miesięcznie. Kraków ma duży rynek usług, ale konkurencja jest niższa niż w Warszawie. Projekt dla branż wysokokonkurencyjnych (turystyka, nieruchomości, gastronomia premium) to koszt 2 500–6 500 zł/mies. Branże akademickie i IT mają zazwyczaj niższe ceny.",
  },
  {
    question: "Jakie branże są najtrudniejsze do pozycjonowania w Krakowie?",
    answer:
      "Najtrudniejsze branże to: hotele i turystyka (duże międzynarodowe sieci), nieruchomości (dynamiczny rynek krakowski), gastronomia premium i restauracje (tysiące konkurentów), branża akademicka z dużymi budżetami, oraz IT/technologie. W tych segmentach SEO wymaga długoterminowego podejścia i zaawansowanych strategii content marketingu.",
  },
  {
    question: "Czy pozycjonowanie lokalne Kraków obejmuje turystykę?",
    answer:
      "Tak, specjalizujemy się w pozycjonowaniu dla branży turystycznej Krakowa. Pozycjonujemy hotele, pensjonaty, galerie, muzea, restauracje i atrakcje turystyczne. Frazy takie jak 'hotel Kraków', 'domowy obiad Kraków' czy 'przewodnik turystyczny Kraków' to ważny segment naszych projektów, szczególnie ze względu na 12 mln turystów rocznie.",
  },
  {
    question: "Jak długo trwa pozycjonowanie w Krakowie?",
    answer:
      "Pierwsze efekty widać po 2–3 miesiącach dla fraz long-tail z mniejszą konkurencją. Stabilne pozycje w TOP 10 dla konkurencyjnych fraz osiągamy po 4–8 miesiącach systematycznych działań SEO. Dla fraz lokalnych (np. 'ginekolog Podgórze', 'fryzjer Kazimierz') efekty przychodzą szybciej — czasem w 6–8 tygodni.",
  },
  {
    question: "Które dzielnice Krakowa obsługujecie?",
    answer:
      "Obsługujemy wszystkie dzielnice Krakowa: Stare Miasto, Kazimierz, Podgórze, Krowodrza, Nowa Huta, Bronowice, Mistrzejowice, Bieżanów-Prokocim i pozostałe. Każda dzielnica ma specyficzne potrzeby SEO — Stare Miasto to turystyka i premium, Kazimierz to kultura i gastronomia, Nowa Huta to usługi lokalne i handlowe.",
  },
];

const PozycjonowanieKrakow = () => {
  const results = [
    {
      metric: "+310%",
      label: "Wzrost ruchu organicznego",
      context: "hotel Kraków",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy usługowe Kraków" },
    { metric: "4 mies.", label: "Czas do pierwszej strony", context: "branża turystyczna" },
    { metric: "4,9/5", label: "Ocena klientów", context: "28 opinii" },
  ];

  const districts = [
    "Stare Miasto",
    "Kazimierz",
    "Podgórze",
    "Krowodrza",
    "Nowa Huta",
    "Bronowice",
    "Mistrzejowice",
    "Bieżanów-Prokocim",
  ];

  const industries = [
    { name: "Turystyka i hotele", icon: Star },
    { name: "Gastronomia", icon: Globe },
    { name: "Nieruchomości", icon: Building2 },
    { name: "IT i technologie", icon: Target },
    { name: "Edukacja", icon: Award },
    { name: "Kultura i sztuka", icon: Shield },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Kraków — Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron internetowych Kraków. Agencja SEO Fotz Studio — audyt, optymalizacja, link building. Zwiększamy ruch firm krakowskich. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/krakow"
        ogTitle="Pozycjonowanie Kraków — Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Krakowie. Audyt SEO, optymalizacja i link building dla firm z Krakowa — turystyka, hotele, gastronomia, IT."
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Kraków"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Krakowa. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne dla turystyki, hoteli, gastronomii i IT."
        url="https://fotz.pl/uslugi/pozycjonowanie/krakow"
        provider="Fotz Studio"
        areaServed="Kraków"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Kraków", url: "https://fotz.pl/uslugi/pozycjonowanie/krakow" },
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
              <MapPin className="w-4 h-4" />
              Pozycjonowanie · Kraków i okolice
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Kraków</span> —
              agencja SEO dla firm z Krakowa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy krakowskim firmom zdobyć pierwszą stronę Google.
              Audyt SEO, optymalizacja techniczna, content SEO i link building
              dostosowane do rynku Krakowa — turystyki, hoteli, IT i gastronomii.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="/uslugi/pozycjonowanie">
                  Pakiety i ceny SEO
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
            >
              {["White-hat SEO", "Raport co 2 tygodnie", "Google Analytics 4", "Gwarancja transparentności"].map(
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

      {/* Results */}
      <section className="py-16 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <FadeInView key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {r.metric}
                </div>
                <div className="text-sm font-medium text-foreground">{r.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.context}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Kraków SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Krakowie — druga metropolia Polski z ogromnym potencjałem
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Kraków to <strong className="text-foreground">800 tys. mieszkańców</strong>,
                  {" "}<strong className="text-foreground">12 mln turystów rocznie</strong> i dynamicznie
                  rozwijająca się gospodarka. Jako druga metropolia Polski, Kraków przyciąga
                  zarówno biznes, jak i turystów z całego świata. W Krakowie splotły się
                  tradycja, kultura, akademia, turystyka i nowoczesne technologie.
                </p>
                <p>
                  Kraków to także dom dla ponad{" "}
                  <strong className="text-foreground">
                    70 tys. studentów (Uniwersytet Jagielloński, AGH i inne uczelnie)
                  </strong>
                  , siedziby dużych firm IT (Google, IBM, Motorola mają tu biura), oraz
                  coraz więcej startup-ów i agencji kreatywnych. To znaczy — konkurencja
                  SEO jest niezwykle różnorodna.
                </p>
                <p>
                  Pozycjonowanie w Krakowie wymaga <strong className="text-foreground">
                    głębokiego zrozumienia każdej dzielnicy i branży
                  </strong>.
                  Frazy dla turystów, hoteli i restauracji to zupełnie inna strategia niż SEO dla
                  firm IT czy edukacyjnych. Fotz Studio zna specyfikę krakowskiego rynku i wie,
                  jak pozycjonować dla każdego segmentu.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Krakowa
                </h3>
                <div className="flex flex-wrap gap-2">
                  {districts.map((district) => (
                    <span
                      key={district}
                      className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {district}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Każda dzielnica Krakowa ma swoje potrzeby SEO — od turystyki w Starym Mieście po usługi lokalne w Nowej Hucie
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Branże, które pozycjonujemy w Krakowie
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od turystyki i hoteli po IT i edukację — mamy doświadczenie w pozycjonowaniu
              firm z każdej branży na dynamicznym rynku krakowskim.
            </p>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((ind, i) => (
              <FadeInView key={i} delay={i * 0.08}>
                <div className="bg-card border border-border/60 rounded-xl p-5 flex items-center gap-3 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{ind.name}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Kraków tourism angle */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Kraków — hub turystyczny z międzynarodową konkurencją
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                icon: Star,
                title: "Pozycjonowanie dla turystów",
                desc: "Polskich i międzynarodowych. Frazy takie jak 'hotel Kraków', 'noclegi Kraków', 'restauracja Kazimierz' to konkurencyjne słowa kluczowe z wysokim zamiarem komercyjnym.",
              },
              {
                icon: Building2,
                title: "Dynamiczny rynek nieruchomości",
                desc: "Kraków ma jeden z najszybciej rosnących rynków nieruchomości w Polsce. Pozycjonowanie dla agencji i deweloperów wymaga zaawansowanej strategii content marketingu.",
              },
              {
                icon: Target,
                title: "Rosnące ekosystem IT i start-upów",
                desc: "Google, IBM, Motorola, a także setki start-upów szukają talentów i klientów. B2B SEO dla branży tech w Krakowie to nowy potencjał.",
              },
              {
                icon: Globe,
                title: "Gastronomia premium i kultura",
                desc: "Tysiące restauracji, galerii i miejsc kulturalnych. Pozycjonowanie dla premium casual dining i instytucji kultury to specjalizacja Fotz Studio.",
              },
            ].map((item, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Jak działamy — pozycjonowanie firm z Krakowa
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę, konkursów i potencjał dla słów kluczowych z Krakowem. Sprawdzamy, jakie frazy mają największy potencjał w Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla rynku krakowskiego",
                desc: "Dobieramy słowa kluczowe z nazwą dzielnicy lub 'Kraków', planujemy content SEO i link building dostosowany do Twojej branży i konkurencji.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści zoptymalizowane dla SEO i budujemy linki z wartościowych, tematycznych źródeł.",
              },
              {
                step: "04",
                title: "Monitoring i raportowanie",
                desc: "Co 2 tygodnie raportujemy pozycje w Google i ruch organiczny. Strategia jest stale dostosowywana do zmian w rynku krakowskim.",
              },
            ].map((step, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.desc}</p>
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
              Gotowy na pierwszą stronę Google w Krakowie?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO swojej strony. Otrzymasz raport z
              konkretnymi rekomendacjami dla rynku krakowskiego i Twojej branży.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base px-8">
                <Link to="/kontakt">
                  Zamów bezpłatny audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/uslugi/pozycjonowanie">Wszystkie pakiety SEO</Link>
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
              FAQ — pozycjonowanie stron Kraków
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

      {/* Internal nav */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
            Pozycjonowanie w innych miastach:
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Pozycjonowanie Warszawa", url: "/uslugi/pozycjonowanie/warszawa" },
              { label: "Pozycjonowanie Wrocław", url: "/uslugi/pozycjonowanie/wroclaw" },
              { label: "Pozycjonowanie Poznań", url: "/uslugi/pozycjonowanie/poznan" },
              { label: "Wszystkie usługi SEO", url: "/uslugi/pozycjonowanie" },
            ].map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className="text-primary hover:underline font-medium text-sm"
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default PozycjonowanieKrakow;
