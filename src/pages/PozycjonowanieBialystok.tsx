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
    question: "Ile kosztuje pozycjonowanie w Białymstoku?",
    answer:
      "Pozycjonowanie lokalne w Białymstoku zaczyna się od 1 000–1 400 zł netto miesięcznie dla małych firm i lokalnych usługodawców. Białystok ma niższą konkurencję SEO niż Warszawa czy Kraków, co sprawia, że efekty są widoczne szybciej i przy mniejszych nakładach. Dla branż konkurencyjnych (nieruchomości, medycyna, prawo) budżet wynosi 2 000–5 000 zł/mies.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Białymstoku?",
    answer:
      "Białystok to jeden z rynków o niskiej konkurencji SEO w Polsce — pierwsze efekty można obserwować już po 1,5–2 miesiącach. Stabilne pozycje TOP 10 dla większości fraz branżowych osiągamy w 3–6 miesięcy. To znacznie szybciej niż w dużych miastach, co przekłada się na szybszy zwrot z inwestycji.",
  },
  {
    question: "Czy pozycjonujecie firmy w regionie podlaskim poza Białymstokiem?",
    answer:
      "Tak — obsługujemy firmy z całego województwa podlaskiego: Łomża, Suwałki, Augustów, Hajnówka, Bielsk Podlaski. Dla firm z branży turystycznej (Puszcza Białowieska, Augustów, jeziora Suwalszczyzny) wdrażamy pozycjonowanie sezonowe pod ruch letni i zimowy.",
  },
  {
    question: "Jakie branże dominują w Białymstoku i czy mają SEO?",
    answer:
      "Białystok ma silny sektor medyczny (Uniwersytecki Szpital Kliniczny, liczne kliniki i gabinety), przemysł drzewny (Biaform, Prochnik, produkcja mebli), handel hurtowy i detaliczny, agencje ubezpieczeniowe oraz rosnący sektor usług IT i e-commerce. Wiele z tych firm jeszcze nie inwestuje w SEO — to ogromy potencjał do wyróżnienia się.",
  },
  {
    question: "Czy SEO w Białymstoku jest trudne ze względu na lokalizację geograficzną?",
    answer:
      "Nie — wręcz przeciwnie. Białystok jako stolica województwa podlaskiego skupia znaczną część zapytań lokalnych dla całego regionu. Mniejsza konkurencja oznacza, że łatwiej i taniej osiągnąć TOP 10 niż w zachodniej Polsce. Jednocześnie miasto jest wystarczająco duże (ok. 300 tys. mieszkańców), żeby uzasadniać inwestycję w pozycjonowanie.",
  },
  {
    question: "Jak SEO może pomóc firmom z Białegostoku w eksporcie do krajów bałtyckich?",
    answer:
      "Białystok leży przy granicy z Litwą i Białorusią — firmy handlowe i produkcyjne często szukają klientów w krajach bałtyckich. Możemy wdrożyć wielojęzyczne SEO (PL + LT/LV/EE) lub kampanie PPC skierowane na rynki bałtyckie. To niszowa usługa, która może dać przewagę firmom chcącym rozszerzać działalność na wschód UE.",
  },
];

const PozycjonowanieBialystok = () => {
  const results = [
    {
      metric: "+240%",
      label: "Wzrost ruchu organicznego",
      context: "klinika medyczna Białystok",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy usługowe Podlaskie" },
    { metric: "2 mies.", label: "Czas do pierwszej strony", context: "branża handlowa" },
    { metric: "4,9/5", label: "Ocena klientów", context: "11 opinii" },
  ];

  const districts = [
    "Centrum",
    "Białostoczek",
    "Mickiewicza",
    "Piasta",
    "Słoneczny Stok",
    "Wygoda",
    "Dziesięciny",
    "Bagnówka",
  ];

  const industries = [
    { name: "Medycyna i kliniki", icon: Shield },
    { name: "Przemysł drzewny", icon: Building2 },
    { name: "Handel hurtowy", icon: BarChart2 },
    { name: "Turystyka Podlasia", icon: Star },
    { name: "Usługi IT", icon: Globe },
    { name: "Nieruchomości", icon: Target },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Białystok — Agencja SEO Podlaskie | Fotz Studio"
        description="Pozycjonowanie stron Białystok i Podlaskie. Agencja SEO Fotz Studio — szybkie efekty, niższa konkurencja, białohat SEO. Bezpłatny audyt SEO dla firm z…"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/bialystok"
        ogTitle="Pozycjonowanie Białystok — Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Białymstoku i na Podlasiu. Szybkie efekty, niższa konkurencja SEO niż w dużych miastach. Zamów audyt!"
        keywords="pozycjonowanie białystok, agencja seo białystok, seo białystok, pozycjonowanie stron białystok, seo dla firm białystok, pozycjonowanie lokalne białystok, audyt seo białystok, seo podlaskie, agencja marketingowa białystok"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Białystok"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Białegostoku i województwa podlaskiego. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne."
        url="https://fotz.pl/uslugi/pozycjonowanie/bialystok"
        provider="Fotz Studio"
        areaServed="Białystok, Podlaskie"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Białystok", url: "https://fotz.pl/uslugi/pozycjonowanie/bialystok" },
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
              Pozycjonowanie · Białystok i Podlaskie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Białystok</span> —
              agencja SEO dla firm z Podlasia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Białegostoku i całego Podlasia zdobyć pierwszą stronę Google.
              Niższa konkurencja SEO = szybsze efekty i lepszy ROI. Audyt SEO,
              optymalizacja techniczna i link building dla firm z regionu.
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
              {["White-hat SEO", "Szybsze efekty niż w dużych miastach", "Google Analytics 4", "Raport co 2 tygodnie"].map(
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

      {/* Białystok specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Białymstoku — niższa konkurencja, szybszy ROI
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Białystok to <strong className="text-foreground">ok. 300 tys. mieszkańców</strong>{" "}
                  i stolica województwa podlaskiego. Miasto skupia usługi dla całego regionu —
                  medycynę, handel, edukację (Uniwersytet Medyczny w Białymstoku, Politechnika
                  Białostocka) i rosnący sektor IT.
                </p>
                <p>
                  Kluczowa przewaga Białegostoku z perspektywy SEO:{" "}
                  <strong className="text-foreground">niższa konkurencja</strong> niż w największych
                  miastach Polski oznacza, że możliwe jest osiągnięcie TOP 10 w Google w ciągu
                  2–4 miesięcy. Dla firm, które jeszcze nie pozycjonują się online, to ogromna
                  przewaga nad konkurencją.
                </p>
                <p>
                  Region ma też unikalne nisze: turystyka Puszczy Białowieskiej, Narwiański
                  Park Narodowy, produkty regionalne i kuchnia podlaska — to{" "}
                  <strong className="text-foreground">frazy z zerową lub niską konkurencją</strong>{" "}
                  i realnym ruchem wśród turystów krajowych i zagranicznych.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Białegostoku
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
                  + Łomża, Suwałki, Augustów i całe Podlaskie
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
              Branże, które pozycjonujemy w Białymstoku i na Podlasiu
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od medycyny i przemysłu drzewnego po turystykę Podlasia — znamy specyfikę
              rynku białostockiego.
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
              Jak działamy — pozycjonowanie firm z Białegostoku
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz dla Białegostoku i Podlasia. Oceniamy realne szanse na TOP 10 i czas potrzebny do wyników — zwykle krótszy niż w dużych miastach.",
              },
              {
                step: "02",
                title: "Strategia lokalna i regionalna",
                desc: "Dobieramy słowa kluczowe uwzględniające Białystok, region podlaski i frazy sezonowe (turystyka, produkty regionalne). Planujemy content calendar.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO pod frazy z Białymstokiem i Podlasiem oraz budujemy profil linków z branżowych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i skalowanie",
                desc: "Co 2 tygodnie raportujemy pozycje, ruch i konwersje. Gdy strona nabiera autorytetu, rozszerzamy zakres fraz i rynków.",
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
              Gotowy na pierwszą stronę Google w Białymstoku?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Pokażemy Ci, jak szybko możesz wygrać z
              lokalną konkurencją w Białymstoku — i co konkretnie trzeba zrobić.
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
              FAQ — pozycjonowanie stron Białystok
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
            Pozycjonowanie w innych miastach
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { city: "Warszawa", href: "/uslugi/pozycjonowanie/warszawa" },
              { city: "Kraków", href: "/uslugi/pozycjonowanie/krakow" },
              { city: "Wrocław", href: "/uslugi/pozycjonowanie/wroclaw" },
              { city: "Poznań", href: "/uslugi/pozycjonowanie/poznan" },
              { city: "Gdańsk", href: "/uslugi/pozycjonowanie/gdansk" },
              { city: "Łódź", href: "/uslugi/pozycjonowanie/lodz" },
              { city: "Szczecin", href: "/uslugi/pozycjonowanie/szczecin" },
            ].map((item) => (
              <Link
                key={item.city}
                to={item.href}
                className="bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors text-sm px-4 py-2 rounded-full font-medium"
              >
                {item.city}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/uslugi/pozycjonowanie"
              className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              <ArrowRight className="w-3 h-3" /> Wszystkie pakiety pozycjonowania
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default PozycjonowanieBialystok;
