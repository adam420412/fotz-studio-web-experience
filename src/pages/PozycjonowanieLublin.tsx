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
    question: "Ile kosztuje pozycjonowanie w Lublinie?",
    answer:
      "Pozycjonowanie lokalne w Lublinie zaczyna się od 999 zł netto miesięcznie. Lublin to młode miasto akademickie z niższą konkurencją SEO niż Warszawa czy Kraków. Dla branż e-commerce czy IT konkurencja jest wyższa (2 500–5 000 zł/mies.), ale dla lokalnych usług (gastronomia, fryzjern, fitness) efekty przychodzą szybciej.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Lublinie?",
    answer:
      "Dzięki niskiej konkurencji SEO w Lublinie, pierwsze rezultaty widać po 6–8 tygodniach. Stabilne pozycje w TOP 10 uzyskujemy po 2–3 miesiącach dla lokalnych fraz. To znacznie szybciej niż w większych miastach. Dla fraz konkurencyjnych (IT, nieruchomości) proces trwa 4–6 miesięcy.",
  },
  {
    question: "Jaka jest przewaga pozycjonowania studenckich branż w Lublinie?",
    answer:
      "Lublin to akademickie miasto 100k+ studentów (UMCS, KUL, UM). Pozycjonowanie dla edukacji, e-learningu, korepetycji online i kampusowych usług ma znaczny potencjał. Niska konkurencja SEO dla tych fraz = szybkie rezultaty. Studencka populacja to duża, skupiona demograficznie grupa szukająca usług online.",
  },
  {
    question: "Czy konkurencja SEO w Lublinie jest naprawdę tak niska?",
    answer:
      "Tak. Lublin ma ~340k mieszkańców, ale SEO konkurencja jest 50–70% niższa niż w Warszawie. Wiele firm z Lublina nie inwestuje w SEO — to szansa dla zdecydowanych biznesów. Rynek jest niedooceniony i otwarty dla szybkich zwycięstw w lokalnych frazach.",
  },
  {
    question: "Powinniśmy pozycjonować się na 'Lublin' czy na całe 'Lubelskie'?",
    answer:
      "Rekomendujemy obie strategie. Pozycjonowanie na 'Lublin' to dostęp do 340k ludzi w mieście. Frazy z 'Lubelskie' otwierają dodatkowy rynek powiatów wokół (Świdnik, Radzyń Podlaski, Biała Podlaska). Dla firm usługowych (hydraulik, elektryk) pozycjonowanie na siedziby miast powiatowych ma sens.",
  },
  {
    question: "Jakie branże SEO mają największy potencjał w Lublinie?",
    answer:
      "IT i software (200+ firm, Software Mind, Sii Lublin) — niiska konkurencja dla 'IT Lublin', 'developer Lublin'. E-learning dla studentów — duży rynek. Nieruchomości — rosnący segment. Turystyka — brama wschodniej Polski. Usługi medyczne — gabinety online. W każdej branży konkurencja SEO jest niższa niż w stolicach.",
  },
];

const PozycjonowanieLublin = () => {
  const results = [
    {
      metric: "+260%",
      label: "Wzrost ruchu organicznego",
      context: "IT/edu firmy",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy lokalne Lublin" },
    { metric: "3 mies.", label: "Czas do pierwszej strony", context: "konkurencyjne frazy" },
    { metric: "4,8/5", label: "Ocena klientów", context: "12 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Czuby",
    "Sławin",
    "Felin",
    "Bronowice",
    "Konstantynów",
    "Rury",
    "Wieniawa",
  ];

  const industries = [
    { name: "IT i software", icon: Target },
    { name: "Edukacja i e-learning", icon: Star },
    { name: "Nieruchomości", icon: Building2 },
    { name: "Medycyna i wellness", icon: Clock },
    { name: "Turystyka historyczna", icon: Globe },
    { name: "E-commerce", icon: BarChart2 },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Lublin — Agencja SEO Lubelskie | Fotz Studio"
        description="Pozycjonowanie stron Lublin i Lubelskie. Agencja SEO Fotz Studio — audyt, optymalizacja, link building. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/lublin"
        keywords="pozycjonowanie lublin, agencja seo lublin, seo lublin, pozycjonowanie stron lublin, seo dla firm lublin, seo lubelskie, pozycjonowanie lokalne lublin"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Lublin"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Lublina i Lubelskiego. Niska konkurencja SEO = szybkie efekty. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne."
        provider="Fotz Studio"
        areaServed="Lublin, Lubelskie"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Lublin", url: "https://fotz.pl/uslugi/pozycjonowanie/lublin" },
        ]}/>
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
              Pozycjonowanie · Lublin i Lubelskie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Lublin</span> — akademickie
              miasto, niska konkurencja SEO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Lublina i Lubelskiego zdobyć pierwszą stronę Google.
              Dzięki niskiej konkurencji SEO, efekty przychodzą szybko. Audyt SEO,
              optymalizacja techniczna, content i link building dostosowane do rynku
              akademickiego i branży IT.
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
              {["White-hat SEO", "Raport co 2 tygodnie", "Niża konkurencja", "Gwarancja transparentności"].map(
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

      {/* Lublin SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lublin — miasteczko akademickie, brama do Ukrainy
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Lublin to <strong className="text-foreground">~340 tys. ludzi</strong> z ogromnym potencjałem akademickim.
                  <strong className="text-foreground"> 100k+ studentów</strong> na trzech uniwersytetach (UMCS, KUL, UM)
                  tworzą młodą, aktywną demografię. To szybko rosnący hub IT
                  (Software Mind, Sii Lublin, 200+ firm technicznych).
                </p>
                <p>
                  Konkurencja SEO w Lublinie jest <strong className="text-foreground">50–70% niższa niż w Warszawie</strong>.
                  Wiele firm z miasta nie inwestuje w SEO — to szansa dla proaktywnych biznesów.
                  Rynek jest niedooceniony i otwarty dla szybkich pozycji w lokalnych frazach.
                </p>
                <p>
                  Lublin to także <strong className="text-foreground">brama wschodniej ściany UE</strong> — bliskość
                  Ukrainy otwiera rynki logistyczne, turystyczne i handlowe. Dla firm B2B
                  zajmujących się eksportem czy cross-border e-commerce to ważna lokacja.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Lublina
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
                  + całe Lubelskie
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
              Branże, które pozycjonujemy w Lublinie
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od IT i edukacji po turystykę — mamy doświadczenie w sektorach
              rynku lubelskiego z potencjałem wzrostu.
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
              Jak działamy — pozycjonowanie firm z Lublina
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i frazy z Lublina oraz całego Lubelskiego. Sprawdzamy potencjał w IT, edukacji, nieruchomościach czy Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla akademickiego miasta",
                desc: "Dobieramy słowa kluczowe z 'Lublin', 'Lubelskie' i dystrykty. Planujemy SEO dla studentów, branż IT, nieruchomości i usług akademickich.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści na lokalne frazy i budujemy linki z branżowych źródeł Lubelskiego.",
              },
              {
                step: "04",
                title: "Raportowanie i dostosowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia dostosowywana do sezonowości akademickiej i zmian konkurencji w Lublinie.",
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
              Gotowy na pierwszą stronę Google w Lublinie?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla akademickiego rynku Lublina.
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
              FAQ — pozycjonowanie stron Lublin
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
              { label: "Pozycjonowanie Poznań", url: "/uslugi/pozycjonowanie/poznan" },
              { label: "Pozycjonowanie Gdańsk", url: "/uslugi/pozycjonowanie/gdansk" },
              { label: "Pozycjonowanie Łódź", url: "/uslugi/pozycjonowanie/lodz" },
              { label: "Pozycjonowanie Szczecin", url: "/uslugi/pozycjonowanie/szczecin" },
              { label: "Pozycjonowanie Białystok", url: "/uslugi/pozycjonowanie/bialystok" },
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

export default PozycjonowanieLublin;
