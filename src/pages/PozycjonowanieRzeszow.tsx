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
    question: "Ile kosztuje pozycjonowanie w Rzeszowie?",
    answer:
      "Pozycjonowanie lokalne w Rzeszowie zaczyna się od 1 199 zł netto miesięcznie. Rzeszów to szybko rosnące miasto, ale konkurencja SEO jest wciąż poniżej poziomu Warszawy czy Krakowa. Dla branż lotniczych (Aviation Valley) czy BPO/SSC, konkurencja rośnie (2 500–6 000 zł/mies.), ale dla lokalnych usług przychodzi szybko.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Rzeszowie?",
    answer:
      "Rzeszów ma niższą konkurencję SEO niż duże metropolie. Pierwsze rezultaty widać po 4–6 tygodniach. Stabilne pozycje TOP 10 uzyskujemy po 2–3 miesiącach. Dla branż lotniczych i B2B, gdzie konkurencja nieco wyższa, to zajmuje 3–5 miesięcy. Szybkie tempo wzrostu miasta = szybkie pozycje online.",
  },
  {
    question: "Jaki jest potencjał SEO dla Doliny Lotniczej (Aviation Valley)?",
    answer:
      "Aviation Valley (MTU Aero Engines, Pratt & Whitney, Goodrich) to specjalistyczne B2B. Frazy takie jak 'usługi dla lotnictwa Rzeszów', 'dostawcy dla Aviation Valley' mają mały search volume, ale wysoką wartość. Pozycjonowanie dla B2B lotniczego jest znacznie tańsze niż dla e-commerce — KD jest niskie, efekty szybkie.",
  },
  {
    question: "Czy SEO dla BPO/SSC w Rzeszowie ma sens?",
    answer:
      "Tak. Rzeszów to boom BPO/SSC (liczne centra obsługi klienta). Pozycjonowanie dla 'outsourcing Rzeszów', 'call center', 'customer service' ma rosnący potencjał. Pracownicy szukają pracy online, firmy szukają partnera. Niska konkurencja SEO = szybkie efekty dla tych branż.",
  },
  {
    question: "Czy bliskość Ukrainy wpływa na SEO w Rzeszowie?",
    answer:
      "Zdecydowanie. Rzeszów jest bramą do wschodu — cross-border logistics, import/export, turystyka ukraińska. Frazy takie jak 'logistyka Ukraina Rzeszów', 'transport międzynarodowy', 'turystyka zagraniczna' mają niski search volume ale rosnący potencjał. To niszy rynek z niską konkurencją SEO.",
  },
  {
    question: "Czy Rzeszów to rzeczywiście szybko rosnące miasto?",
    answer:
      "Tak. Rzeszów jest najszybciej rosnącym miastem w Polsce — wzrost populacji o 35% w ciągu 15 lat. To oznacza boom budowlany, nowe biznesy, młodą populację, wzrost konsumpcji. Dla firm SEO to szansa — rynek się dynamicznie rozszerza, konkurencja wciąż zaś trzyma się z tyłu.",
  },
];

const PozycjonowanieRzeszow = () => {
  const results = [
    {
      metric: "+300%",
      label: "Wzrost ruchu organicznego",
      context: "usługi B2B lotnicze",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy Rzeszów" },
    { metric: "2 mies.", label: "Czas do pierwszej strony", context: "branżowe frazy" },
    { metric: "4,9/5", label: "Ocena klientów", context: "9 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Biała",
    "Pobitno",
    "Budziwój",
    "Przybyszówka",
    "Staroniwa",
    "Zalesie",
    "Zwięczyca",
  ];

  const industries = [
    { name: "Lotnictwo i przemysł", icon: Target },
    { name: "BPO / SSC", icon: BarChart2 },
    { name: "Budownictwo", icon: Building2 },
    { name: "E-commerce", icon: Globe },
    { name: "Medycyna", icon: Star },
    { name: "IT startupy", icon: Award },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Rzeszów — Agencja SEO Podkarpacie | Fotz Studio"
        description="Pozycjonowanie stron Rzeszów i Podkarpacie. Agencja SEO Fotz Studio — szybkie efekty, niskie KD. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/rzeszow"
        keywords="pozycjonowanie rzeszów, agencja seo rzeszów, seo rzeszów, pozycjonowanie stron rzeszów, seo dla firm rzeszów, seo podkarpacie, pozycjonowanie lokalne rzeszów"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Rzeszów"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Rzeszowa i Podkarpacia. Szybko rosnące miasto, niska konkurencja SEO, duży potencjał dla Aviation Valley, BPO i logistyki."
        provider="Fotz Studio"
        areaServed="Rzeszów, Podkarpacie"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Rzeszów", url: "https://fotz.pl/uslugi/pozycjonowanie/rzeszow" },
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
              Pozycjonowanie · Rzeszów i Podkarpacie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Rzeszów</span> — szybko rosnące
              miasto, Aviation Valley i BPO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Rzeszowa i Podkarpacia zdobyć pierwszą stronę Google.
              Rzeszów to najszybciej rosnące miasto w Polsce z potencjałem Aviation Valley,
              BPO i cross-border logistyki. Niska konkurencja SEO = szybkie efekty.
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
              {["Aviation Valley", "Raport co 2 tygodnie", "White-hat SEO", "Gwarancja transparentności"].map(
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

      {/* Rzeszów SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rzeszów — Dolina Lotnicza, BPO boom i szybko rosnący rynek
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Rzeszów to <strong className="text-foreground">~200 tys. ludzi</strong> z
                  <strong className="text-foreground"> najszybszym wzrostem w Polsce</strong> (35% wzrost populacji
                  w 15 latach). To szybko rosnący hub dla lotnictwa, usług BPO/SSC
                  i logistyki międzynarodowej.
                </p>
                <p>
                  <strong className="text-foreground">Dolina Lotnicza (Aviation Valley)</strong> — MTU Aero
                  Engines, Pratt & Whitney, Goodrich, Rzeszów-Jasionka airport. To specjalistyczne B2B
                  z niskim search volume ale wysoką wartością. Konkurencja SEO jest bardzo niska
                  dla branżowych fraz.
                </p>
                <p>
                  Sektor <strong className="text-foreground">BPO/SSC rozkwita</strong> — liczne centra obsługi
                  klienta, outsourcing, customer service. Pracownicy szukają pracy, firmy szukają partnera.
                  <strong className="text-foreground"> Bliskość Ukrainy</strong> otwiera rynki cross-border logistyki
                  i handlu zagranicznego.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Rzeszowa
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
                  + całe Podkarpacie
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
              Branże, które pozycjonujemy w Rzeszowie
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od Aviation Valley po BPO — specjalizujemy się w niszy B2B
              i sektorach z dużym potencjałem wzrostu.
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
              Jak działamy — pozycjonowanie firm z Rzeszowa
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i frazy z Rzeszowa i Podkarpacia. Sprawdzamy potencjał w Aviation Valley, BPO, logistyce czy Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla szybko rosnącego miasta",
                desc: "Dobieramy słowa kluczowe dla 'Rzeszów', 'Podkarpacie'. Planujemy SEO dla sektora B2B, lotniczego, BPO i logistycznego.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści na lokalne i branżowe frazy, budujemy linki z branżowych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i dostosowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia dostosowywana do zmian konkurencji i sezonowości rynku Rzeszowa.",
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
              Gotowy na pierwszą stronę Google w Rzeszowie?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla Rzeszowa i sektora Twojej firmy.
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
              FAQ — pozycjonowanie stron Rzeszów
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

export default PozycjonowanieRzeszow;
