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
    question: "Ile kosztuje pozycjonowanie w Poznaniu?",
    answer:
      "Pozycjonowanie lokalne w Poznaniu w Fotz Studio zaczyna się od 900 zł netto miesięcznie. Poznań jest mniej konkurencyjny niż Warszawa, ale dynamicznie rosnący rynek. Dla branż bardziej konkurencyjnych (usługi medyczne, nieruchomości, targo-MICE) to koszt 1 500–3 500 zł/mies. Konsultacja jest zawsze bezpłatna.",
  },
  {
    question: "Dlaczego warto wybrać lokalną agencję SEO z Poznania?",
    answer:
      "Fotz Studio to poznańska agencja SEO z głębokim zrozumieniem rynku poznańskiego. Znamy branże, dzielnicy, lokalne trendy — od MTP i targów, przez logistykę, aż po gastronomię na Starym Browarze. Pracujemy w tym ekosystemie na co dzień, co daje nam praktyczną wiedzę niedostępną dla agencji z Warszawy czy Krakowa. Szukasz partnerstwa, a nie tylko SEO?",
  },
  {
    question: "Jakie frazy lokalne są najbardziej wartościowe dla firm z Poznania?",
    answer:
      "Najwartościowsze frazy to kombinacje branży + dzielnica lub 'Poznań' (np. 'adwokat Grunwald', 'dentysta Stare Miasto', 'logistyka Poznań'). Dla e-commerce frazy zawierające 'paczka Poznań' czy 'wysyłka z Poznania' generują dużo ruchu. Frazy z 'Wielkopolska' to też potencjał — wielu klientów szuka usług w całym regionie. W audycie analizujemy dokładnie, które frazy mają szansę topować w Twoim segmencie.",
  },
  {
    question: "Czy Fotz Studio obsługuje Wielkopolskę i okoliczne powiaty?",
    answer:
      "Tak. Poza Poznaniem pozycjonujemy firmy z całej Wielkopolski — Swarzędzem, Lubonem, Mośliną, Murowaną Goślina, Koninem, Lechem, Koniną i dalej. Dla firm, które obsługują cały region, tworzymy strategie SEO z frazami 'Wielkopolska' i nazwami powiatów. Jeśli firma ma kilka lokalizacji, pozycjonujemy dla każdej osobno — to podwyższa szansę na ruch.",
  },
  {
    question: "Jak pozycjonowanie Poznań różni się od SEO w Warszawie?",
    answer:
      "W Warszawie konkurencja jest 3–5 razy wyższa niż w Poznaniu — frazy dobrze topują dłużej. W Warszawie pracujemy z większymi budżetami i długszymi projektami. W Poznaniu konkurencja jest mniejsza, efekty przychodzą szybciej (3–6 mies.), ale budżety mogą być niższe. W Poznaniu duża wartość jest w pozycjonowaniu dla MTP (targi), logistyki i branż technicznych. Znając osoby decyzji w poznańskich firmach, tworzymy treści, które rzeczywiście rezonują z Waszym rynkiem.",
  },
];

const PozycjonowaniePoznan = () => {
  const results = [
    {
      metric: "+310%",
      label: "Wzrost ruchu organicznego",
      context: "e-commerce Poznań",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy lokalne Poznań" },
    { metric: "4 mies.", label: "Czas do pierwszej strony", context: "branża B2B" },
    { metric: "4.9/5", label: "Ocena klientów", context: "15+ opinii" },
  ];

  const districts = [
    "Stare Miasto",
    "Grunwald",
    "Jeżyce",
    "Wilda",
    "Nowe Miasto",
    "Piątkowo",
    "Rataje",
    "Winogrady",
    "Poznań aglomeracja",
  ];

  const industries = [
    { name: "Targi i MICE (MTP)", icon: Building2 },
    { name: "Logistyka i e-commerce", icon: Globe },
    { name: "Motoryzacja (VW Financial)", icon: BarChart2 },
    { name: "IT i startupy", icon: Target },
    { name: "Nieruchomości", icon: Award },
    { name: "Gastronomia", icon: Star },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Poznań — Lokalna Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron internetowych Poznań. Fotz Studio — lokalna agencja SEO z Poznania. Audyt, optymalizacja i link building. Znamy rynek poznański od podszewki!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/poznan"
        ogTitle="Pozycjonowanie Poznań — Fotz Studio Agencja SEO z Poznania"
        ogDescription="Skuteczne pozycjonowanie stron w Poznaniu. Audyt SEO, optymalizacja i link building dla firm z Poznania od lokalnej agencji."
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Poznań"
        description="Lokalna agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Poznania. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne."
        url="https://fotz.pl/uslugi/pozycjonowanie/poznan"
        provider="Fotz Studio"
        areaServed="Poznań"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Poznań", url: "https://fotz.pl/uslugi/pozycjonowanie/poznan" },
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
              Pozycjonowanie · Poznań i Wielkopolska
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Poznań</span> — agencja SEO z
              Poznania
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Fotz Studio to poznańska agencja SEO, która zna rynek poznański od
              podszewki. Pomagamy firmom z Poznania zdobyć pierwszą stronę Google
              — od MTP i logistyki, przez IT, aż po gastronomię. Audyt SEO,
              optymalizacja techniczna i link building dostosowane do realnych
              potrzeb poznańskich firm.
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
              {["White-hat SEO", "Raport co 2 tygodnie", "Znamy poznański rynek", "Gwarancja transparentności"].map(
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

      {/* Poznań SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Poznaniu — dynamiczny rynek z ogromnymi szansami
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Poznań to nie tylko stolica Wielkopolski — to centrum biznesu,
                  innowacji i handlu w Polsce. <strong className="text-foreground">600 tys. mieszkańców</strong> miasta + ogromny hinterland to
                  potencjał, który wciąż rośnie szybciej niż konkurencja SEO.
                </p>
                <p>
                  MTP Poznań to <strong className="text-foreground">największe centrum targów w Polsce</strong> —
                  firmy z całego świata szukają poznańskich partnerów i usług.
                  Logistyka z Amazon, Allegro, VW Financial Services — to wszystko
                  tworzy specjalny ekosystem zapytań w lokalnym Google.
                </p>
                <p>
                  Poznań ma też <strong className="text-foreground">60+ tys. studentów</strong> (PWr, UP, UAM),
                  dynamiczną scenę IT i startupy. To młody, rosnący rynek, gdzie
                  pozycjonowanie stron jest nadal bardziej opłacalne niż w
                  Warszawie czy Krakowie — efekty przychodzą szybciej.
                </p>
                <p>
                  Fotz Studio pracuje w Poznaniu od początku. Znamy branże,
                  osoby decyzji, na czym polega sukces lokalnie. To nas
                  wyróżnia od agencji z innych miast.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Poznania
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
                  + Wielkopolska i powiaty: Poznań, Szamotuły, Wrzesnia, Leszno, Koniń,
                  Luboń, Swarzędz, Mosina
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
              Branże, które pozycjonujemy w Poznaniu
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specjalizujemy się w branżach kluczowych dla poznańskiego rynku.
              Od MTP i logistyki, do IT i gastronomii.
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
              Jak działamy — pozycjonowanie firm z Poznania
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i rynek poznański. Sprawdzamy, jakie frazy z 'Poznań', 'Wielkopolska' lub dzielnicą mają potencjał w Twoim segmencie.",
              },
              {
                step: "02",
                title: "Strategia dla poznańskiego rynku",
                desc: "Dobieramy słowa kluczowe, planujemy treści i link building. Znając poznańskie branże i osoby decyzji, tworzymy strategię, która rzeczywiście działa.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści zoptymalizowane dla fraz lokalnych i budujemy linki z wartościowych poznańskich źródeł.",
              },
              {
                step: "04",
                title: "Monitoring i raportowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. W Poznaniu efekty widać szybciej — strategia jest dostosowywana na bieżąco do zmian.",
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

      {/* Why Poznań advantage */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dlaczego Fotz Studio — agencja SEO z Poznania
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInView>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Lokalny ekspert
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Pracujemy w poznańskim ekosystemie. Znamy MTP, logistykę,
                      IT, osoby decyzji w poznańskich firmach.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Szybsze efekty
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Poznań jest mniej konkurencyjny niż Warszawa. Efekty
                      przychodzą szybciej, budżety są niższe.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      White-hat SEO
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Beżetne pozycjonowanie. Bez czarnych kapeli i nadużyć.
                      Trwałe pozycje w Google.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Raportowanie co 2 tygodnie
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Wiesz, co się dzieje. Pozycje, ruch, keyword rankingi —
                      wszystko w przejrzystych raportach.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Wsparcie dla całej Wielkopolski
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Obsługujemy firmy z Poznania, Swarzędza, Luboniu,
                      całej Wielkopolski i powiaty.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Bez umowy na czas nieokreślony
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Elastyczna współpraca. Możesz przerwać w każdej chwili.
                      Ufamy, że będziesz z nami.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy na pierwszą stronę Google w Poznaniu?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO swojej strony. Otrzymasz raport z
              konkretnymi rekomendacjami dla poznańskiego rynku — bez żadnych
              zobowiązań.
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
              FAQ — pozycjonowanie stron Poznań
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

export default PozycjonowaniePoznan;
