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
    question: "Ile kosztuje pozycjonowanie w Łodzi?",
    answer:
      "Pozycjonowanie lokalne w Łodzi zaczyna się od 1 200 zł netto miesięcznie. Konkurencja rynku łódzkiego jest umiarkowana (niższa niż Warszawa, wyższa niż małe miasta). Dla e-commerce, fashion i logistyki koszt wynosi 2 500–7 000 zł/mies. Firmy e-commerce (Zalando, answear) sprawi że branża fashion jest bardziej konkurencyjna.",
  },
  {
    question: "SEO dla e-commerce w Łodzi — jakie są wyzwania?",
    answer:
      "Łódź to hub e-commerce — Zalando, answear.com i setki mniejszych shopów tu działają. Konkurencja produktów (ubrania, akcesoria) jest ogromna. Rekomendujemy fokus na frazy long-tail z Łodzią ('sukienka Łódź', 'hurt tekstylny Łódź') oraz local link building z galeriami handlowymi (Manufaktura, FABRYKA) i branżowymi serwisami.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie stron w Łodzi?",
    answer:
      "Pierwsze efekty to 3–4 miesiące. Dla branż e-commerce stabile pozycje w TOP 10 osiągamy po 6–10 miesiącach. Dla branż mniej konkurencyjnych (turystyka industrialna, film) czas to 4–6 miesięcy. Łódź ma niższe bariery wejścia niż Warszawa, więc zwroty są szybsze.",
  },
  {
    question: "Pozycjonowanie Łódź vs. Warszawa — jaka jest konkurencja?",
    answer:
      "Warszawa to ~10x większy rynek, więc konkurencja w Warszawie jest dużo wyższa. Łódź jest idealnym rynkiem testowym — możesz się nauczyć SEO na Łodzi z niższym budżetem, potem skalować na Warszawę. Rynek łódzki to też centralny hub dla ekspansu na zachód (Wrocław, Poznań są bliżej).",
  },
  {
    question: "Jak SEO w branży film/media w Łodzi różni się od innych?",
    answer:
      "Łódź ma unikalną branżę filmową — PWSFTviT, Netflix Poland, produkcje. Ale to wąska niszy SEO. Rekomendujemy mieszankę: frazy branżowe ('produkcja filmowa Łódź'), local content marketing (artykuły o historii kina w Łodzi) i partnerships z uniwersytetami. Link building z mediami branżowymi to najwyższe ROI.",
  },
];

const PozycjonowanieLodz = () => {
  const results = [
    {
      metric: "+290%",
      label: "Wzrost ruchu organicznego",
      context: "e-commerce fashion",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy usługowe Łódź" },
    { metric: "5 mies.", label: "Czas do pierwszej strony", context: "branża e-comm" },
    { metric: "4,8/5", label: "Ocena klientów", context: "21 opinii" },
  ];

  const districts = [
    "Śródmieście (Piotrkowska)",
    "Bałuty",
    "Widzew",
    "Górna",
    "Polesie",
    "Retkinia",
    "Zarzew",
  ];

  const industries = [
    { name: "E-commerce i fashion", icon: Globe },
    { name: "Film i media", icon: Star },
    { name: "Nieruchomości", icon: Building2 },
    { name: "Logistyka", icon: BarChart2 },
    { name: "IT i technologie", icon: Target },
    { name: "Turystyka industrialna", icon: Award },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Łódź — Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron Łódź. Agencja SEO Fotz Studio — audyt SEO, optymalizacja i link building dla firm z Łodzi. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/lodz"
        keywords="pozycjonowanie łódź, agencja seo łódź, seo łódź, pozycjonowanie stron łódź, seo dla firm łódź, seo łódzkie, pozycjonowanie lokalne łódź"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Łódź"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Łodzi. Audyt SEO, optymalizacja on-page, link building, pozycjonowanie lokalne dla e-commerce i branż kreatywnych."
        provider="Fotz Studio"
        areaServed="Łódź"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Łódź", url: "https://fotz.pl/uslugi/pozycjonowanie/lodz" },
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
              Pozycjonowanie · Łódź
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Łódź</span> —
              agencja SEO dla firm z Łodzi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy łódzkim firmom zdobyć pierwszą stronę Google. Audyt SEO,
              optymalizacja techniczna, content SEO i link building dla e-commerce,
              branży kreatywnej i logistyki w Łodzi.
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

      {/* Łódź SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Łodzi — e-commerce, fashion i renesans post-przemysłowy
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Łódź to <strong className="text-foreground">700 tys. mieszkańców</strong>
                  i trzecie co do wielkości miasto w Polsce. Kiedyś przemysłowe (tekstylia),
                  dziś to <strong className="text-foreground">centrum e-commerce</strong> (Zalando,
                  answear.com, siedziba), hub filmowy (Netflix Poland, PWSFTviT) i hub logistyczny
                  (OFF Piotrkowska, Manufaktura, lokalizacja centralna).
                </p>
                <p>
                  Konkurencja SEO w Łodzi jest umiarkowana — niższa niż Warszawa, ale wystarczająco
                  wysoka w branżach e-commerce i fashion. Pozycjonowanie w Łodzi
                  to <strong className="text-foreground">idealna baza testowa</strong> — możesz
                  zdobyć zaměty przy niższym budżecie, potem skalować.
                </p>
                <p>
                  Specyfika rynku: duża gęstość firm e-commerce, siła branży kreatywnej i film,
                  centralny hub logistyczny dla ekspansu na Niemcy i Czechy. Frazy lokalne
                  z 'Łódź' + branża (np. 'odzież hurtownia Łódź', 'produkcja filmowa Łódź')
                  przynoszą wartościowy, skonkretyzowany ruch.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Łodzi
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
                  + aglomeracja łódzka i region Łódzki
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
              Branże, które pozycjonujemy w Łodzi
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od e-commerce po film — specjalizujemy się w branżach kluczowych dla
              gospodarcze Łodzi.
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
              Jak działamy — pozycjonowanie firm z Łodzi
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę, pozycje w Google dla fraz Łódź, konkurencję w Twojej branży (e-commerce, film, logistyka czy inne).",
              },
              {
                step: "02",
                title: "Strategia rynku łódzkiego",
                desc: "Dobieramy frazy z Łodzią i branżą. Planujemy SEO z uwzględnieniem specyfiki rynku łódzkiego — e-commerce, kreatywości, logistyki.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści lokalne i budujemy linki z mediów branżowych i lokalnych źródeł.",
              },
              {
                step: "04",
                title: "Monitoring i raportowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategi dostosowywana do zmian konkurencji w Łodzi i Twojej branży.",
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
              Gotowy na pierwszą stronę Google w Łodzi?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla rynku łódzkiego i Twojej branży.
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
              FAQ — pozycjonowanie stron Łódź
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
              { label: "Pozycjonowanie Gdańsk", url: "/uslugi/pozycjonowanie/gdansk" },
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

export default PozycjonowanieLodz;
