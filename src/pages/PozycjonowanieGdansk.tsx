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
    question: "Ile kosztuje pozycjonowanie w Gdańsku i Trójmieście?",
    answer:
      "Pozycjonowanie lokalne w Gdańsku zaczyna się od 1 500 zł netto miesięcznie. Trójmiasto (Gdańsk + Gdynia + Sopot) to znaczący rynek turystyczny i logistyczny, dlatego ceny są wyższe niż w mniejszych miastach. Dla konkurencyjnych branż (logistyka, nieruchomości, turystyka) koszt wynosi 3 500–9 000 zł/mies.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Gdańsku?",
    answer:
      "Ze względu na konkurencję rynku gdańskiego, pierwsze rezultaty pojawiają się po 3–4 miesiącach. Stabilne pozycje w TOP 10 dla konkurencyjnych fraz uzyskujemy po 6–12 miesiącach. Dla fraz lokalnych z dzielnicą (np. 'hotel Oliwa Gdańsk') efekty przychodzą szybciej, zwłaszcza podczas sezonu turystycznego.",
  },
  {
    question: "Jaka jest różnica między pozycjonowaniem Gdańska a całego Trójmiasta?",
    answer:
      "Pozycjonowanie dla 'Gdańsk' skupia się na mieście (800k ludzi), ale wiele firm obsługuje całe Trójmiasto (750k+ razem). Rekomendujemy frazy: 'Gdańsk', 'Gdynia', 'Sopot' oraz ogólnie 'Trójmiasto'. Konkurencja w Gdańsku jest wyższa, ale zasięg jest bardziej wartościowy dla firm usługowych.",
  },
  {
    question: "Które branże są najtrudniejsze do pozycjonowania w Gdańsku?",
    answer:
      "Najtrudniejsze: agencje nieruchomości (OFF Piotrkowska w Łodzi, ale podobnie rozkład w Gdańsku), hotele i turysta, firmy logistyczne i shipping, gabinety medyczne i stomatologiczne oraz agencje IT. Te branże wymagają większego budżetu i dłuższego czasu.",
  },
  {
    question: "Czy SEO sezonu turystycznego w Gdańsku się różni od reszty roku?",
    answer:
      "Tak — Gdańsk ma silny sezon letni (maj–wrzesień). Dla hoteli, restauracji i atrakcji turystycznych ruch organiczny rośnie o 150–300% letnim. Rekomendujemy przyspieszenie pozycjonowania na wiosnę oraz intensywne link building w branżach turystycznych przed sezonem.",
  },
];

const PozycjonowanieGdansk = () => {
  const results = [
    {
      metric: "+320%",
      label: "Wzrost ruchu organicznego",
      context: "hotel Gdańsk",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy usługowe Trójmiasto" },
    { metric: "4 mies.", label: "Czas do pierwszej strony", context: "e-commerce logistyka" },
    { metric: "4,9/5", label: "Ocena klientów", context: "18 opinii" },
  ];

  const districts = [
    "Śródmieście (Stare Miasto)",
    "Wrzeszcz",
    "Oliwa",
    "Przymorze",
    "Zaspa",
    "Brzeźno",
    "Chełm",
    "Ujeścisko",
  ];

  const industries = [
    { name: "Turystyka i hotele", icon: Star },
    { name: "Logistyka i shipping", icon: Building2 },
    { name: "Nieruchomości", icon: Building2 },
    { name: "E-commerce", icon: Globe },
    { name: "IT i technologie", icon: Target },
    { name: "Gastronomia", icon: BarChart2 },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Gdańsk — Agencja SEO Trójmiasto | Fotz Studio"
        description="Pozycjonowanie stron Gdańsk i Trójmiasto. Agencja SEO Fotz Studio — audyt, optymalizacja, link building dla firm z Gdańska. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/gdansk"
        ogTitle="Pozycjonowanie Gdańsk — Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Gdańsku i Trójmieście. Audyt SEO, optymalizacja i link building dla firm z Gdańska i okolic."
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Gdańsk"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Gdańska i Trójmiasta. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne."
        url="https://fotz.pl/uslugi/pozycjonowanie/gdansk"
        provider="Fotz Studio"
        areaServed="Gdańsk, Trójmiasto"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Gdańsk", url: "https://fotz.pl/uslugi/pozycjonowanie/gdansk" },
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
              Pozycjonowanie · Gdańsk i Trójmiasto
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Gdańsk</span> —
              agencja SEO dla firm z Trójmiasta
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Gdańska, Gdyni i Sopotu zdobyć pierwszą stronę
              Google. Audyt SEO, optymalizacja techniczna, content SEO i link building
              dostosowane do rynku Trójmiasta i branży turystycznej.
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

      {/* Gdańsk SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Gdańsku — port, turystyka i sezon
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Gdańsk to <strong className="text-foreground">800 tys. ludzi</strong>,
                  ale Trójmiasto razem liczy <strong className="text-foreground">750k+</strong>.
                  To główny port w Polsce, turystyczne serce Północy i szybko rosnący hub IT
                  (Intel Technology Poland, Asseco i setki startupów technicznych).
                </p>
                <p>
                  Konkurencja SEO w Gdańsku jest niższa niż w Warszawie, ale wystarczająco
                  wysoka dla dużych branż. Specyfika rynku to{" "}
                  <strong className="text-foreground">sezonowość turystyczna</strong>
                  (maj–wrzesień +150–300% ruchu) oraz{" "}
                  <strong className="text-foreground">branża B2B logistyczna</strong> (shipping,
                  import-export, spedycja).
                </p>
                <p>
                  Pozycjonowanie w Gdańsku wymaga strategii dual-city — zarówno dla Gdańska
                  głównie jak i całego Trójmiasta. Frazy łączące 'Gdańsk', 'Gdynia' i 'Sopot'
                  przynoszą najwyżej wartościowy ruch dla firm usługowych.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Gdańska
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
                  + Gdynia, Sopot i całe Trójmiasto
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
              Branże, które pozycjonujemy w Gdańsku i Trójmieście
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od turystyki i logistyki po IT — mamy doświadczenie w różnych sektorach
              rynku gdańskiego.
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

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Jak działamy — pozycjonowanie firm z Gdańska
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i frazy z Gdańska, Gdynią i Sopotu. Sprawdzamy potencjał w turystyce, logistyce lub Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia Trójmiasta i sezonowości",
                desc: "Dobieramy słowa kluczowe z Gdańskiem, Gdynią, Trójmiastem. Planujemy SEO i content rozkład uwzględniający sezon turystyczny.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści na lokalne frazy i budujemy linki z branżowych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i dostosowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia dostosowywana do zmian sezonu i konkurencji w Gdańsku.",
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
              Gotowy na pierwszą stronę Google w Gdańsku?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla rynku Gdańska, Gdyni i Sopotu.
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
              FAQ — pozycjonowanie stron Gdańsk
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
              { label: "Pozycjonowanie Kraków", url: "/uslugi/pozycjonowanie/krakow" },
              { label: "Pozycjonowanie Wrocław", url: "/uslugi/pozycjonowanie/wroclaw" },
              { label: "Pozycjonowanie Łódź", url: "/uslugi/pozycjonowanie/lodz" },
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

export default PozycjonowanieGdansk;
