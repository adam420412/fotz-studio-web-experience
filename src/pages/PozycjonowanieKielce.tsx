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
    question: "Ile kosztuje pozycjonowanie w Kielcach?",
    answer:
      "Pozycjonowanie SEO w Kielcach zaczyna się od 1 000 zł netto miesięcznie — to jedna z najtańszych lokalizacji w Polsce. Dla firm targów, budownictwa czy e-commerce koszt wynosi 1 800–4 000 zł/mies. Bardzo niska konkurencja SEO oznacza szybkie efekty i niskie koszty.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Kielcach?",
    answer:
      "Kielce ma jedną z najniższych konkurencji SEO w Polsce. Pierwsze efekty widoczne są po 2–3 miesiącach. Stabilne pozycje TOP 5 dla większości fraz lokalnych osiągamy w 2–4 miesięcy. To jeden z najszybciej rosnących rynków SEO.",
  },
  {
    question: "Czy pozycjonujecie firmy targów Kielce?",
    answer:
      "Tak — Targi Kielce to drugi co do wielkości ośrodek targowy w Polsce. Obsługujemy wystawców, organizatorów targów, agencje eventowe i firmy logistyczne. Znamy specyfikę B2B SEO dla branży targowej i eventowej.",
  },
  {
    question: "Jakie branże pozycjonujemy w Kielcach?",
    answer:
      "Doświadczenie mamy w: targach (Targi Kielce), budownictwie (marmury, wapień), handlu, nieruchomościach, edukacji (UJK), gastronomii, produkcji i e-commerce. Kielce to silny ośrodek SME i usług.",
  },
  {
    question: "Jaki jest potencjał Kieleckiego Parku Technologicznego?",
    answer:
      "Kielecki Park Technologiczny przyciąga startup'y i firmy tech. Frazy takie jak \"biuro coworking Kielce\", \"IT support Kielce\" czy \"web developer Kielce\" mają rosnące wyszukiwania. SEO dla tech startup'ów to naszych specjalność.",
  },
  {
    question: "Czy Kielce to dobry rynek dla firm B2B?",
    answer:
      "Bardzo dobry — Targi Kielce przyciągają kupców z całej Polski i zagranicy. B2B w Kielcach ma niższą konkurencję niż B2C. Dla firm B2B rekomendujemy SEO long-tail i content marketing.",
  },
  {
    question: "Jakie są trendy w handlu i nieruchomościach w Kielcach?",
    answer:
      "Nieruchomości w Kielcach rosną — mieszkańcy przyjeżdzają z Warszawy. Frazy takie jak \"mieszkanie Kielce\", \"biuro wynajęcie Kielce\" i \"lokal usługowy Kielce\" mają duży potencjał. Dla agencji nieruchomości SEO to musi.",
  },
  {
    question: "Jakie są czynniki różniące Kielce od większych miast?",
    answer:
      "Kielce ma: 1) bardzo niską konkurencję SEO (3–5x niższą niż Warszawa), 2) niższe budżety startowe (od 1 000 zł/mies.), 3) szybkie pozycje (2–3 mies.), 4) silne B2B (Targi, budownictwo, tech), 5) rosnący handel online. To idealne dla startupów i małych firm.",
  },
];

const PozycjonowanieKielce = () => {
  const results = [
    {
      metric: "+190%",
      label: "Wzrost ruchu organicznego",
      context: "producent wyrobów kamieniowych Kielce",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy lokalne Kielce" },
    { metric: "2 mies.", label: "Czas do pierwszej strony", context: "niska konkurencja" },
    { metric: "4,7/5", label: "Ocena klientów", context: "6 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Herby",
    "Czarnów",
    "KSM",
    "Szydłówek",
    "Barwinek",
    "Białogon",
    "Dąbrowa",
  ];

  const industries = [
    { name: "Targi Kielce", icon: Building2 },
    { name: "Budownictwo (marmury)", icon: Target },
    { name: "E-commerce", icon: BarChart2 },
    { name: "Nieruchomości", icon: Globe },
    { name: "Edukacja (UJK)", icon: Star },
    { name: "Tech startups", icon: TrendingUp },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Kielce — Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron Kielce. Agencja SEO Fotz Studio — audyt SEO, optymalizacja, link building. Niski SEO competition = szybkie wyniki. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/kielce"
        ogTitle="Pozycjonowanie Kielce — Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Kielcach. Targi Kielce, budownictwo, tech. Niższa konkurencja = szybkie pozycje w Google."
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Kielce"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Kielc. Audyt SEO, optymalizacja on-page, link building dla targów, budownictwa i e-commerce."
        url="https://fotz.pl/uslugi/pozycjonowanie/kielce"
        provider="Fotz Studio"
        areaServed="Kielce, Świętokrzyskie"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Kielce", url: "https://fotz.pl/uslugi/pozycjonowanie/kielce" },
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
              Pozycjonowanie · Kielce i Świętokrzyskie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Kielce</span> —
              Targi i szybki wzrost rynku
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Kielc zdobyć pierwszą stronę Google. Kielce to Targi (drugi co do wielkości w Polsce), budownictwo i rosnący rynek tech. Niiska konkurencja SEO = szybkie wyniki. Audyt SEO, optymalizacja i link building.
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
              {["White-hat SEO", "B2B focus", "Google Analytics 4", "Raport co 2 tygodnie"].map(
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

      {/* Kielce specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Kielcach — Targi, marmury i rosnący rynek tech
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Kielce to <strong className="text-foreground">ok. 190 tys. mieszkańców</strong> i miasto
                  z unikalnym profitem biznesowym. <strong className="text-foreground">Targi Kielce</strong> to
                  drugi co do wielkości ośrodek targowy w Polsce (po MTP w Warszawie) — przyciąga tysiące
                  wystawców i kupców rocznie.
                </p>
                <p>
                  Branża <strong className="text-foreground">budownictwa i kamienia</strong> ma głębokie korzenie
                  w Kielcach — marmury, wapień i granit. Dodatkowo Kielecki Park Technologiczny przyciąga
                  startup'y. Uniwersytet Jana Kochanowskiego (UJK) to <strong className="text-foreground">15 tys. studentów</strong>.
                </p>
                <p>
                  <strong className="text-foreground">Niisa konkurencja SEO w Kielcach</strong> to ogromna szansa.
                  Firmy, które wdrażają SEO wcześnie, zdominują lokalny rynek zanim konkurencja się obudzi.
                  Dla startupów i małych firm to idealne miejsce do rozpoczęcia SEO.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Kielc
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
                  + Cała Świętokrzyskie
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
              Branże, które pozycjonujemy w Kielcach
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od targów po tech — mamy doświadczenie
              w sektorach typowych dla Kielc.
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
              Jak działamy — pozycjonowanie firm z Kielc
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz lokalnych (Kielce, Świętokrzyskie). Patrzysz na konkurencję — w Kielcach jest niska.",
              },
              {
                step: "02",
                title: "Strategia dla Kielc",
                desc: "Dobieramy słowa kluczowe lokalne i branżowe. Planujemy content uwzględniający specyfikę Kielc (targi, budownictwo, tech).",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO na frazy kieleckie i budujemy linki z lokalnych zasobów.",
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
              Gotowy na pierwszą stronę Google w Kielcach?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Bardzo niska konkurencja w Kielcach = szybkie wyniki.
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
              FAQ — pozycjonowanie stron Kielce
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
              { city: "Radom", href: "/uslugi/pozycjonowanie/radom" },
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

export default PozycjonowanieKielce;
