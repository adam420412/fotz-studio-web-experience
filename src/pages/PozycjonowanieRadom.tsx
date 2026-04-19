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
    question: "Ile kosztuje pozycjonowanie w Radomiu?",
    answer:
      "Pozycjonowanie SEO w Radomiu zaczyna się od 1 000 zł netto miesięcznie — to jedna z najtańszych lokalizacji w Polsce. Dla firm branży lotniczej czy produkcji koszt wynosi 1 800–4 500 zł/mies. Niska konkurencja SEO w Radomiu oznacza szybsze efekty i niższe budżety.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Radomiu?",
    answer:
      "Radom ma niską konkurencję SEO — to jest wielka zaleta. Pierwsze efekty widoczne są po 2–3 miesiącach. Stabilne pozycje TOP 5 dla większości fraz lokalnych osiągamy w 2–4 miesięcy. To najszybciej rosnące rynki SEO w Polsce.",
  },
  {
    question: "Czy pozycjonujecie firmy z branży lotniczej w Radomiu?",
    answer:
      "Tak — WSK Radom to legendarna fabrika komponentów lotniczych. Obsługujemy dostawców, producenci podzespołów, i firmy serwisowe z branży lotniczej. Znamy specyfikę fraz B2B (machining services, aerospace parts) i wiemy, jak docierać do decydentów branży.",
  },
  {
    question: "Jakie branże pozycjonujemy w Radomiu?",
    answer:
      "Doświadczenie mamy w: lotnictwie (WSK Radom), produkcji (skóry, buty), handlu, nieruchomościach, edukacji (UTH), gastronomii, usługach dla firm i e-commerce. Radom to silny ośrodek produkcji i usług.",
  },
  {
    question: "Jak wykorzystać potencjał Radomskiego Portu Lotniczego?",
    answer:
      "Radomski Port Lotniczy rośnie — to szansa dla firm obsługujących turystykę lotniczą, logistykę cargo, charter flights i szkolenia pilotów. Frazy takie jak \"charter Radom\" czy \"szkolenie pilotów\" mają rosnące wyszukiwania. SEO dla branży lotniczej to nasz standard.",
  },
  {
    question: "Czy niska konkurencja SEO w Radomiu to na pewno dobrze?",
    answer:
      "Tak! Niska konkurencja oznacza: 1) szybsze pozycje (2–3 mies.), 2) niższe budżety (od 1 000 zł/mies.), 3) mniejsza liczba zmian algorytmicznych. Niski SEO competition to idealnie dla startupów i małych firm chcących zdominować lokalny rynek.",
  },
  {
    question: "Jakie są trendy w handlu i e-commerce w Radomiu?",
    answer:
      "Radom ma silny sektor handlu lokalnego i rosnący e-commerce. Frazy takie jak \"sklep online Radom\", \"dostawa szybka Radom\" i \"hurtownia Radom\" mają duży potencjał. Dla sklepów multiprzedmiotowych rekomendujemy SEO local + Google Business Profile.",
  },
  {
    question: "Czy Radom to dobry rynek dla firm B2B?",
    answer:
      "Bardzo dobry — WSK, produkcja, hurtownie i firmy logistyczne szukają partnerów online. B2B w Radomiu ma niższą konkurencję niż B2C. Dla firm B2B rekomendujemy content marketing i SEO long-tail.",
  },
];

const PozycjonowanieRadom = () => {
  const results = [
    {
      metric: "+200%",
      label: "Wzrost ruchu organicznego",
      context: "producent podzespołów Radom",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy lokalne Radom" },
    { metric: "2 mies.", label: "Czas do pierwszej strony", context: "niska konkurencja" },
    { metric: "4,7/5", label: "Ocena klientów", context: "7 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Ustronie",
    "Gołębiów",
    "Halinów",
    "Borki",
    "Południe",
    "Józefów",
    "Czarna Wieś",
  ];

  const industries = [
    { name: "Lotnictwo", icon: Globe },
    { name: "Produkcja (skóry, buty)", icon: Building2 },
    { name: "E-commerce", icon: BarChart2 },
    { name: "Nieruchomości", icon: Target },
    { name: "Edukacja (UTH)", icon: Star },
    { name: "Handel lokalny", icon: TrendingUp },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Radom — Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron Radom. Agencja SEO Fotz Studio — audyt SEO, optymalizacja, link building. Niska konkurencja = szybkie rezultaty. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/radom"
        ogTitle="Pozycjonowanie Radom — Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Radomiu. Niska konkurencja SEO = szybkie pozycje. SEO dla lotnictwa, produkcji i e-commerce."
        keywords="pozycjonowanie radom, agencja seo radom, seo radom, pozycjonowanie stron radom, seo dla firm radom, seo mazowsze, pozycjonowanie lokalne radom"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Radom"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Radomia. Audyt SEO, optymalizacja on-page, link building dla lotnictwa, produkcji i e-commerce."
        url="https://fotz.pl/uslugi/pozycjonowanie/radom"
        provider="Fotz Studio"
        areaServed="Radom, Mazovia"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Radom", url: "https://fotz.pl/uslugi/pozycjonowanie/radom" },
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
              Pozycjonowanie · Radom i Mazovia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Radom</span> —
              Niska konkurencja, szybkie wyniki
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Radomia zdobyć pierwszą stronę Google. Radom ma niską konkurencję SEO — to oznacza szybsze pozycje i niższe budżety. Od lotnictwa po e-commerce, znamy Radom.
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
              {["White-hat SEO", "Niska konkurencja", "Google Analytics 4", "Raport co 2 tygodnie"].map(
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

      {/* Radom specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Radomiu — lotnisko, lotnictwo i duża szansa dla biznesu
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Radom to <strong className="text-foreground">ok. 200 tys. mieszkańców</strong> i miasto
                  z bogatą historią lotniczą. WSK Radom to <strong className="text-foreground">legendarna fabrika</strong> —
                  nadal produkuje komponenty dla lotnictwa. Radomski Port Lotniczy rośnie i przyciąga charter, szkolenia pilotów i logistykę.
                </p>
                <p>
                  Niski SEO competition w Radomiu to <strong className="text-foreground">duża szansa dla biznesu</strong>.
                  Firm, które wdrażają SEO wcześnie, zdominują rynek lokalny zanim konkurencja się obudzi.
                  Średni koszt wynajęcia eksperta SEO w Radomiu wynosi tylko 1 200–2 000 zł/mies.
                </p>
                <p>
                  Branża produkcji skóry i butów to kolejny silny punkt — Radom ma tradycję. Handel lokalny i e-commerce
                  rosną szybko. Dla firm B2B szukających dostawców online — <strong className="text-foreground">Radom
                  ma ogromny potencjał</strong>.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Radomia
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
                  + Cała Mazovia
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
              Branże, które pozycjonujemy w Radomiu
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od lotnictwa po e-commerce — mamy doświadczenie
              w sektorach typowych dla Radomia.
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
              Jak działamy — pozycjonowanie firm z Radomia
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz lokalnych (Radom, Mazovia). Patrzysz na konkurencję — w Radomiu jest niowa.",
              },
              {
                step: "02",
                title: "Strategia dla Radomia",
                desc: "Dobieramy słowa kluczowe lokalne i branżowe. Planujemy content uwzględniający specyfikę Radomia (lotnictwo, produkcja, handel).",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO na frazy radomskie i budujemy linki z lokalnych zasobów.",
              },
              {
                step: "04",
                title: "Raportowanie i skalowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Dzięki niskiej konkurencji, wzrost jest szybki — możesz skalować na kolejne frazy.",
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
              Gotowy na pierwszą stronę Google w Radomiu?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Niska konkurencja w Radomiu = szybkie wyniki.
              Przeanalizujemy Twoje frazy i pokażemy, jak zdominować lokalny rynek.
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
              FAQ — pozycjonowanie stron Radom
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
              { city: "Szczecin", href: "/uslugi/pozycjonowanie/szczecin" },
              { city: "Toruń", href: "/uslugi/pozycjonowanie/torun" },
              { city: "Bydgoszcz", href: "/uslugi/pozycjonowanie/bydgoszcz" },
              { city: "Kielce", href: "/uslugi/pozycjonowanie/kielce" },
              { city: "Warszawa", href: "/uslugi/pozycjonowanie/warszawa" },
              { city: "Kraków", href: "/uslugi/pozycjonowanie/krakow" },
              { city: "Wrocław", href: "/uslugi/pozycjonowanie/wroclaw" },
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

export default PozycjonowanieRadom;
