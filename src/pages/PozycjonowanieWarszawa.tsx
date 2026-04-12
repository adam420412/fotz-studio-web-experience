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
    question: "Ile kosztuje pozycjonowanie w Warszawie?",
    answer:
      "Pozycjonowanie lokalne w Warszawie w Fotz Studio zaczyna się od 1 200 zł netto miesięcznie. Wyższe ceny niż w innych miastach wynikają z bardzo dużej konkurencji w warszawskich wynikach Google. Projekt dla konkurencyjnych branż (prawo, finanse, nieruchomości) to koszt 3 000–8 000 zł/mies.",
  },
  {
    question: "Jak długo trwa pozycjonowanie w Warszawie?",
    answer:
      "Ze względu na ogromną konkurencję rynku warszawskiego, pierwsze efekty widać po 3–4 miesiącach. Stabilne pozycje w TOP 10 dla konkurencyjnych fraz osiągamy po 6–12 miesiącach systematycznych działań SEO. Dla fraz lokalnych z długim ogonem (np. 'dentyta ursynów') efekty przychodzą szybciej.",
  },
  {
    question: "Czy mogę pozycjonować firmę warszawską bez biura w Warszawie?",
    answer:
      "Tak — pracujemy zdalnie z klientami z całej Polski. Do pozycjonowania lokalnego w Warszawie nie potrzebujemy fizycznej obecności w mieście. Cały audyt, optymalizacja i raportowanie odbywają się online.",
  },
  {
    question: "Które branże są najtrudniejsze do pozycjonowania w Warszawie?",
    answer:
      "Najtrudniejsze branże to: prawnicy i kancelarie adwokackie, firmy finansowe i ubezpieczeniowe, agencje nieruchomości, gabinety stomatologiczne i medyczne oraz hotele. W tych segmentach SEO wymaga dużego budżetu i długoterminowego podejścia.",
  },
  {
    question: "Co to jest pozycjonowanie lokalne Warszawa?",
    answer:
      "Pozycjonowanie lokalne Warszawa to SEO ukierunkowane na frazy zawierające słowo 'Warszawa' lub dzielnicę (Mokotów, Ursynów, Wola, Śródmieście itp.). Obejmuje optymalizację wizytówki Google Moja Firma, tworzenie treści dla lokalnych słów kluczowych i budowanie lokalnych linków.",
  },
];

const PozycjonowanieWarszawa = () => {
  const results = [
    {
      metric: "+280%",
      label: "Wzrost ruchu organicznego",
      context: "e-commerce Warszawa",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy usługowe Warszawa" },
    { metric: "6 mies.", label: "Czas do pierwszej strony", context: "branża B2B" },
    { metric: "4,8/5", label: "Ocena klientów", context: "24 opinie" },
  ];

  const districts = [
    "Śródmieście",
    "Mokotów",
    "Ursynów",
    "Wola",
    "Praga Południe",
    "Ochota",
    "Żoliborz",
    "Wilanów",
    "Bielany",
    "Targówek",
  ];

  const industries = [
    { name: "Prawo i kancelarie", icon: Shield },
    { name: "Nieruchomości", icon: Building2 },
    { name: "Usługi medyczne", icon: Star },
    { name: "E-commerce", icon: Globe },
    { name: "Finanse", icon: BarChart2 },
    { name: "IT i SaaS", icon: Target },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Warszawa — Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron internetowych Warszawa. Agencja SEO Fotz Studio — audyt, optymalizacja, link building. Zwiększamy ruch organiczny firm warszawskich. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/warszawa"
        ogTitle="Pozycjonowanie Warszawa — Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Warszawie. Audyt SEO, optymalizacja i link building dla firm z Warszawy."
        keywords="pozycjonowanie warszawa, seo warszawa, agencja seo warszawa, pozycjonowanie lokalne warszawa, pozycjonowanie stron warszawa, seo dla firm warszawa, audyt seo warszawa, pozycjonowanie mazowsze, usługi seo warszawa"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Warszawa"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Warszawy. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne."
        url="https://fotz.pl/uslugi/pozycjonowanie/warszawa"
        provider="Fotz Studio"
        areaServed="Warszawa"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Warszawa", url: "https://fotz.pl/uslugi/pozycjonowanie/warszawa" },
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
              Pozycjonowanie · Warszawa i aglomeracja
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Warszawa</span> —
              agencja SEO dla firm z Warszawy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy warszawskim firmom zdobyć pierwszą stronę Google.
              Audyt SEO, optymalizacja techniczna, content SEO i link building
              dostosowane do najbardziej konkurencyjnego rynku w Polsce.
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

      {/* Warsaw SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Warszawie — co sprawia, że to najtrudniejszy rynek w Polsce?
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Warszawa to największy rynek konsumencki w Polsce —{" "}
                  <strong className="text-foreground">1,8 mln mieszkańców</strong> i
                  setki tysięcy firm walczących o widoczność w tym samym Google.
                  Pozycjonowanie w Warszawie jest kilkukrotnie trudniejsze niż w
                  innych polskich miastach.
                </p>
                <p>
                  W warszawskim Google konkurujesz nie tylko z lokalnymi firmami, ale
                  też z oddziałami dużych sieci ogólnopolskich i korporacyjnymi
                  budżetami SEO. Dlatego pozycjonowanie stron w Warszawie wymaga
                  precyzyjnej strategii słów kluczowych i{" "}
                  <strong className="text-foreground">
                    skupienia na frazach long-tail z dzielnicą
                  </strong>{" "}
                  (np. &quot;dentysta Ursynów&quot;, &quot;adwokat Wola Warszawa&quot;).
                </p>
                <p>
                  Fotz Studio pracuje z firmami warszawskimi od lat. Znamy
                  specyfikę różnych dzielnic i branż — wiemy, gdzie jest największa
                  konkurencja i jakie frazy przynoszą realne zapytania od klientów.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Warszawy
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
                  + wszystkie pozostałe dzielnice i miejscowości aglomeracji warszawskiej
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
              Branże, które pozycjonujemy w Warszawie
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Mamy doświadczenie w pozycjonowaniu firm z różnych sektorów na
              konkurencyjnym rynku warszawskim.
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
              Jak działamy — pozycjonowanie firm z Warszawy
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i sprawdzamy, jakie frazy z Warszawą mają największy potencjał przy obecnym poziomie konkurencji.",
              },
              {
                step: "02",
                title: "Strategia dla rynku warszawskiego",
                desc: "Dobieramy słowa kluczowe z dzielnicą lub frazami 'Warszawa', planujemy treści i link building dopasowany do warszawskiego rynku.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy zoptymalizowane treści i budujemy linki z wartościowych źródeł.",
              },
              {
                step: "04",
                title: "Monitoring i raportowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia jest na bieżąco dostosowywana do zmian w warszawskim Google.",
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
              Gotowy na pierwszą stronę Google w Warszawie?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO swojej strony. Otrzymasz raport z
              konkretnymi rekomendacjami dla rynku warszawskiego.
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
              FAQ — pozycjonowanie stron Warszawa
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
              { label: "Pozycjonowanie Kraków", url: "/uslugi/pozycjonowanie/krakow" },
              { label: "Pozycjonowanie Wrocław", url: "/uslugi/pozycjonowanie/wroclaw" },
              { label: "Pozycjonowanie Poznań", url: "/uslugi/pozycjonowanie/poznan" },
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

export default PozycjonowanieWarszawa;
