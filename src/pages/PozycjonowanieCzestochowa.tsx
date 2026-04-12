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
    question: "Ile kosztuje pozycjonowanie w Częstochowie?",
    answer:
      "Pozycjonowanie lokalne w Częstochowie zaczyna się od 899 zł netto miesięcznie. To jedno z najtańszych miast SEO w Polsce! Konkurencja jest bardzo niska, co oznacza szybkie efekty. Dla branż turystyki religijnej czy usług dla pielgrzymów, koszt wynosi 1 200–2 500 zł/mies., ale z dużo wyższą ROI niż w większych miastach.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Częstochowie?",
    answer:
      "Dzięki bardzo niskiej konkurencji SEO w Częstochowie, pierwsze rezultaty pojawiają się po 3–4 tygodniach. Stabilne pozycje TOP 10 uzyskujemy po 6–8 tygodni. To najszybsze tempo spośród wszystkich polskich miast dzięki low-competition nicy turystyki religijnej i lokalnych usług. Dla fraz pielgrzymkowych — nawet szybciej.",
  },
  {
    question: "Jaki jest potencjał SEO dla turystyki religijnej i Jasnej Góry?",
    answer:
      "Jasna Góra to 4–5M pielgrzymów rocznie. To ogromny niszowy rynek. Hotele, restauracje, przewodnie turystyczne, sklepy pamiątek, usługi dla pielgrzymów — wszystko ma mały search volume ale wysoką intent i wartość. Frazy takie jak 'hotel blisko Jasnej Góry', 'restauracja dla pielgrzymów', 'przewodnik turystyczny' mają bardzo niską konkurencję SEO.",
  },
  {
    question: "Czy konkurencja SEO w Częstochowie jest naprawdę tak niska?",
    answer:
      "Tak. Częstochowa ma ~220k ludzi, ale konkurencja SEO jest 70–80% niższa niż nawet w Lublinie czy Rzeszowie. Prawie żaden biznes w mieście nie inwestuje w SEO — to złota okazja dla proaktywnych przedsiębiorców. Rynek jest praktycznie nietkniętym terytorium dla lokalnego biznesu online.",
  },
  {
    question: "Czy turystyka religijna to stabilny rynek SEO?",
    answer:
      "Bardzo stabilny. Pielgrzymi przyjeżdżają cały rok, szczególnie w sezonie (maj–październik). To predictable traffic — ludzie szukają 'hotel Częstochowa', 'gdzie zjeść Jasna Góra', 'atrakcje turystyczne'. Wartość transakcji (noclegi, jedzenie, usługi) jest wysoka. SEO dla Częstochowy = inwestycja w stabilny, długoterminowy biznes.",
  },
  {
    question: "Jakie branże poza turystyką mają potencjał w Częstochowie?",
    answer:
      "Przemysł metalurgiczny (ISD Huta Częstochowa, Brembo) — usługi B2B. Edukacja (Politechnika Częstochowska). Nieruchomości — dla lokalnego rynku. Usługi medyczne i wellness. Handel detaliczny. Wszystkie branże mają niski SEO KD. Potencjał = duży, konkurencja = minimalna.",
  },
];

const PozycjonowanieCzestochowa = () => {
  const results = [
    {
      metric: "+220%",
      label: "Wzrost ruchu organicznego",
      context: "turystyka religijna",
    },
    { metric: "TOP 5", label: "Pozycja w Google", context: "frazy Częstochowa" },
    { metric: "2 mies.", label: "Czas do pierwszej strony", context: "branżowe frazy" },
    { metric: "4,7/5", label: "Ocena klientów", context: "8 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Raków",
    "Błeszno",
    "Tysiąclecie",
    "Wrzosowiak",
    "Ostatni Grosz",
    "Stradom",
  ];

  const industries = [
    { name: "Turystyka religijna", icon: Star },
    { name: "Przemysł metalurgiczny", icon: Building2 },
    { name: "Usługi dla pielgrzymów", icon: Globe },
    { name: "Nieruchomości", icon: Award },
    { name: "Edukacja i szkolenia", icon: Target },
    { name: "Handel detaliczny", icon: BarChart2 },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Częstochowa — Agencja SEO Śląsk | Fotz Studio"
        description="Pozycjonowanie stron Częstochowa. Agencja SEO Fotz Studio — lokalne SEO dla firm z Częstochowy. Bezpłatny audyt SEO!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/czestochowa"
        ogTitle="Pozycjonowanie Częstochowa — Fotz Studio Agencja SEO"
        ogDescription="Pozycjonowanie dla Częstochowy — turystyka religijna, Jasna Góra, 4-5M pielgrzymów. Niska konkurencja SEO, szybkie efekty. Audyt, optymalizacja, link building."
        keywords="pozycjonowanie częstochowa, agencja seo częstochowa, seo częstochowa, pozycjonowanie stron częstochowa, seo dla firm częstochowa, pozycjonowanie lokalne częstochowa"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Częstochowa"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Częstochowy. Specjalizacja w turystyce religijnej, usługach dla pielgrzymów i przemyśle. Niska konkurencja SEO, szybkie rezultaty. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne."
        url="https://fotz.pl/uslugi/pozycjonowanie/czestochowa"
        provider="Fotz Studio"
        areaServed="Częstochowa"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Częstochowa", url: "https://fotz.pl/uslugi/pozycjonowanie/czestochowa" },
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
              Pozycjonowanie · Częstochowa
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Częstochowa</span> — Jasna Góra,
              turystyka i niska konkurencja SEO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Częstochowy zdobyć pierwszą stronę Google. Jasna Góra
              to 4–5M pielgrzymów rocznie — ogromny rynek turystyki religijnej z bardzo
              niską konkurencją SEO. Audyt SEO, optymalizacja techniczna, content
              i link building dostosowane do niszy pielgrzymkowej i branży turystycznej.
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
              {["White-hat SEO", "Raport co 2 tygodnie", "Niska konkurencja", "Gwarancja transparentności"].map(
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

      {/* Częstochowa SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Częstochowa — Jasna Góra, 4–5M pielgrzymów, niska konkurencja
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Częstochowa to <strong className="text-foreground">~220 tys. ludzi</strong> z
                  <strong className="text-foreground"> Jasną Górą jako głównym magnesem turystycznym</strong>.
                  To 4–5 milionów pielgrzymów rocznie — jeden z największych miejsc pielgrzymkowych
                  w Europie. To ogromny, niszowy rynek z minimalną konkurencją SEO.
                </p>
                <p>
                  <strong className="text-foreground">Turystyka religijna</strong> — hotele,
                  restauracje, przewodnie, sklepy, usługi dla pielgrzymów. Frazy takie jak
                  'hotel blisko Jasnej Góry', 'gdzie zjeść Częstochowa' mają mały search volume
                  ale wysoką intent i wartość transakcji. Konkurencja SEO jest 70–80% niższa
                  niż w jakimkolwiek innym mieście.
                </p>
                <p>
                  <strong className="text-foreground">Przemysł metalurgiczny</strong> — ISD Huta
                  Częstochowa, Brembo i firmy B2B. <strong className="text-foreground">Edukacja</strong> — Politechnika
                  Częstochowska. Wszystkie sektory mają bardzo niski SEO KD i szybki potencjał wzrostu.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Częstochowy
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
                  + okolice Jasnej Góry
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
              Branże, które pozycjonujemy w Częstochowie
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od turystyki religijnej po przemysł — specjalizujemy się
              w niszach rynku z dużym potencjałem wzrostu.
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
              Jak działamy — pozycjonowanie firm z Częstochowy
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę i frazy z Częstochowy. Sprawdzamy potencjał w turystyce religijnej, usługach dla pielgrzymów czy Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia dla niszy pielgrzymkowej",
                desc: "Dobieramy słowa kluczowe dla 'hotel Częstochowa', 'usługi dla pielgrzymów', 'Jasna Góra'. Planujemy SEO dla turystyki religijnej i lokalnych branż.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści na frazy pielgrzymkowe i turystyczne, budujemy linki z turystycznych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i dostosowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Strategia dostosowywana do sezonowości pielgrzymkowej i zmian konkurencji.",
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
              Gotowy na pierwszą stronę Google w Częstochowie?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Otrzymasz raport z konkretnymi
              rekomendacjami dla niszy turystyki religijnej Częstochowy.
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
              FAQ — pozycjonowanie stron Częstochowa
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

export default PozycjonowanieCzestochowa;
