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
    question: "Ile kosztuje pozycjonowanie w Katowicach?",
    answer:
      "Pozycjonowanie lokalne w Katowicach zaczyna się od 1 500 zł netto miesięcznie. Katowice to hub finansowy i technologiczny (ING BSK, Asseco, KGHM), więc konkurencja SEO jest wyższa niż w mniejszych miastach. Dla branż finansowych, IT i nieruchomości koszt wynosi 3 500–8 000 zł/mies. Dla lokalnych usług — szybciej.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Katowicach i GOM?",
    answer:
      "Katowice to konkurencyjny rynek, ale mniejszy niż Warszawa. Pierwsze rezultaty przychodzą po 3–4 miesiącach. Stabilne pozycje TOP 10 uzyskujemy po 5–7 miesięcy. Dla lokalnych fraz i niszy (np. 'fizjoterapeuta Nikiszowiec') — szybciej (2–3 mies.). GOM konurbacja (2.2M ludzi) = większa skala, dłuższe timeline.",
  },
  {
    question: "Jaki jest potencjał SEO dla całej konurbacji GOM (2.2M)?",
    answer:
      "GOM to trzecie co do wielkości skupisko w Polsce — Katowice, Gliwice, Zabrze, Bytom, Tychy, Chorzów i 10+ miast. Razem 2.2M ludzi. Pozycjonowanie na 'Katowice' skupia się na mieście (300k), ale wiele firm obsługuje całą konurbację. Rekomendujemy frazy GOM-wide ('usługi Górny Śląsk', 'nieruchomości GOM') + miasta lokalne.",
  },
  {
    question: "Czy transformacja post-górnicza wpływa na SEO Katowic?",
    answer:
      "Zdecydowanie. Katowice przeszło transformację od górnictwa/hutnictwa do usług, IT i finansów. To tworzy nowy rynek — startups, fintech, digital transformation. Frazy takie jak 'agencja cyfrowa Katowice', 'IT consulting GOM' mają rosnący potencjał. Konkurencja SEO jest niższa niż byłaby dla starego rynku górniczego.",
  },
  {
    question: "Jakie branże SEO mają największy potencjał w Katowicach?",
    answer:
      "IT i FinTech (Asseco Poland, Sii, Codewise) — duży rynek. BPO/SSC — liczne centra obsługi. Nieruchomości (Silesia City Center, biurowce) — boom inwestycji. Logistyka (A4/A1 crossroads) — transport, magazyning. HoReCa dla 2.2M populacji GOM. Edukacja i szkolenia (12 uczelni w GOM).",
  },
  {
    question: "Czy konkurencja SEO w Katowicach jest wyższa niż w mniejszych miastach?",
    answer:
      "Tak, konkurencja w Katowicach jest wyższa niż w Lublinie czy Rzeszowie, ale znacznie niższa niż w Warszawie lub Krakowie. Dla branż IT i finansowych (gdzie agencje już inwestują w SEO), KD jest umiarkowanie wysoki. Dla lokalnych usług (np. 'stomatolog Sławin') konkurencja jest niska. GOM jako całość = średnia konkurencja — idealna równowaga.",
  },
];

const PozycjonowanieKatowice = () => {
  const results = [
    {
      metric: "+310%",
      label: "Wzrost ruchu organicznego",
      context: "IT & FinTech firmy",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy Katowice" },
    { metric: "4 mies.", label: "Czas do pierwszej strony", context: "konkurencyjne frazy" },
    { metric: "4,9/5", label: "Ocena klientów", context: "16 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Ligota",
    "Brynów",
    "Bogucice",
    "Dąb",
    "Zawodzie",
    "Nikiszowiec",
    "Giszowiec",
  ];

  const industries = [
    { name: "IT i FinTech", icon: Target },
    { name: "BPO / SSC", icon: BarChart2 },
    { name: "Nieruchomości", icon: Building2 },
    { name: "Budownictwo", icon: Award },
    { name: "HoReCa", icon: Star },
    { name: "Logistyka", icon: Globe },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Katowice — Agencja SEO Śląsk GOM | Fotz Studio"
        description="Pozycjonowanie stron Katowice i aglomeracja GOM 2.2 mln. Agencja SEO Fotz Studio — audyt SEO, link building. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/katowice"
        ogTitle="Pozycjonowanie Katowice — Fotz Studio Agencja SEO"
        ogDescription="Pozycjonowanie dla Katowic i GOM — trzecie co do wielkości skupisko w Polsce. IT, FinTech, BPO. Audyt SEO, optymalizacja, link building."
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Katowice"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Katowic i aglomeracji GOM (2.2M ludzi). IT, FinTech, nieruchomości, logistyka. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne."
        url="https://fotz.pl/uslugi/pozycjonowanie/katowice"
        provider="Fotz Studio"
        areaServed="Katowice, Śląsk, GOM"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Katowice", url: "https://fotz.pl/uslugi/pozycjonowanie/katowice" },
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
              Pozycjonowanie · Katowice i GOM (2.2M)
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Katowice</span> — hub IT, FinTech
              i transformacji Górnego Śląska
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Katowic i całej aglomeracji GOM (2.2M ludzi) zdobyć
              pierwszą stronę Google. Katowice to hub IT, FinTech, nieruchomości i logistyki.
              Audyt SEO, optymalizacja techniczna, content i link building dostosowane
              do rynku Śląska.
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
              {["White-hat SEO", "Raport co 2 tygodnie", "Doświadczenie GOM", "Gwarancja transparentności"].map(
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

      {/* Katowice SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Katowice — post-górnicza transformacja, IT boom i 2.2M GOM
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Katowice to <strong className="text-foreground">300 tys. ludzi</strong> ale
                  <strong className="text-foreground"> konurbacja GOM liczy 2.2M</strong> — trzecie co do wielkości
                  skupisko ludności w Polsce (po Warszawie i Krakowie). To transformacja
                  od górnictwa/hutnictwa do IT, FinTech, usług i logistyki.
                </p>
                <p>
                  <strong className="text-foreground">IT i FinTech boom</strong> — Asseco Poland,
                  Sii, Codewise, ING BSK digital, KGHM transformacja. Silesia City Center,
                  biurowce premium, startup ekosystem. To young, dynamic market z dużym
                  potencjałem SEO dla tech i finansów.
                </p>
                <p>
                  <strong className="text-foreground">Logistyka A4/A1</strong> — crossroads autostrad.
                  <strong className="text-foreground"> Kultura (Spodek, NOSPR, Muzeum Śląskie)</strong>.
                  12 uczelni w GOM. Nieruchomości — boom inwestycji. Konkurencja SEO jest wyższa
                  niż w małych miastach, ale niższa niż w Warszawie.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Katowic
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
                  + całe GOM (Gliwice, Zabrze, Bytom, Tychy, Chorzów, Mysłowice...)
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
              Branże, które pozycjonujemy w Katowicach i GOM
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od IT i FinTech po logistykę — mamy doświadczenie w sektorach
              transformującego się Górnego Śląska.
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
              Jak działamy — pozycjonowanie firm z Katowic
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i frazy z Katowic, całej GOM i Górnego Śląska. Sprawdzamy potencjał w IT, FinTech, nieruchomościach czy Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla GOM i Śląska",
                desc: "Dobieramy słowa kluczowe dla 'Katowice', miast GOM i całego regionu. Planujemy SEO dla sektorów transformującego się Śląska.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści na lokalne i branżowe frazy, budujemy linki z branżowych źródeł Śląska.",
              },
              {
                step: "04",
                title: "Raportowanie i dostosowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia dostosowywana do zmian konkurencji i wzrostu rynku Katowic.",
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
              Gotowy na pierwszą stronę Google w Katowicach?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla rynku Katowic i konurbacji GOM.
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
              FAQ — pozycjonowanie stron Katowice
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

export default PozycjonowanieKatowice;
