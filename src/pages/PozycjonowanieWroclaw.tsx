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
    question: "Ile kosztuje pozycjonowanie w Wrocławiu?",
    answer:
      "Pozycjonowanie lokalne w Wrocławiu zaczyna się od 1 000 zł netto miesięcznie. Wynagrodzenie zależy od konkurencyjności branży i liczby docelowych fraz. Dla firm z sektora IT, nieruchomości czy finansów (sektor BPO) koszt to zwykle 2 500–6 500 zł/mies.",
  },
  {
    question: "Czy pozycjonowanie w Wrocławiu jest trudniejsze niż w Poznaniu?",
    answer:
      "Wrocław to czwarte co do wielkości miasto w Polsce (670k mieszkańców), a jego rynek SEO jest konkurencyjny. Porównując z Poznaniem, konkurencja jest zbliżona, ale Wrocław ma specyficzne branże (IT, finanse, startup ecosystem), które wymagają bardziej zaawansowanej strategii. Jednak ze względu na mniejszą populację niż Warszawa, efekty są szybsze.",
  },
  {
    question: "Jak długo trwa SEO dla firmy z Wrocławia?",
    answer:
      "Pierwsze efekty pozycjonowania lokalnego w Wrocławiu widać po 2–3 miesiącach. Stabilne pozycje TOP 10 w Google dla konkurencyjnych fraz osiągamy po 5–8 miesiącach. Frazy long-tail z 'Wrocław' (np. 'studio projektowania stron Wrocław') zwykle trafiają szybciej — 3–4 miesiące.",
  },
  {
    question: "Czy Fotz Studio obsługuje firmy z całego Dolnego Śląska?",
    answer:
      "Tak — pracujemy z firmami z całej Wrocławia i Dolnego Śląska. Pozycjonujemy zarówno frazy 'Wrocław' jak i dobrze sprzedające się lokalne frazy z mniejszych miast (Wałbrzych, Legnica, Jawor, Świdnica). Wszystkie prace odbywają się zdalnie, bez potrzeby fizycznej obecności w mieście.",
  },
  {
    question: "Co wyróżnia pozycjonowanie lokalne Wrocław?",
    answer:
      "Pozycjonowanie lokalne Wrocław to SEO ukierunkowane na frazy zawierające słowo 'Wrocław' lub dzielnicę (Stare Miasto, Krzyki, Fabryczna, Psie Pole, Śródmieście itp.). Obejmuje optymalizację Google Moja Firma, tworzenie treści dla lokalnych słów kluczowych, a także budowanie linków z wrocławskich źródeł. Wrocław będąc gatem do rynków DACH wymagaomnienia perspektywy międzynarodowej w content SEO.",
  },
];

const PozycjonowanieWroclaw = () => {
  const results = [
    {
      metric: "+315%",
      label: "Wzrost ruchu organicznego",
      context: "startup tech Wrocław",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy usługowe Wrocław" },
    { metric: "5 mies.", label: "Czas do pierwszej strony", context: "branża BPO/SSC" },
    { metric: "4,9/5", label: "Ocena klientów", context: "18 opinii" },
  ];

  const districts = [
    "Stare Miasto",
    "Krzyki",
    "Fabryczna",
    "Psie Pole",
    "Śródmieście",
    "Biskupin",
    "Grabiszyn",
    "Jagodno",
  ];

  const industries = [
    { name: "IT i outsourcing", icon: Target },
    { name: "BPO/SSC", icon: Globe },
    { name: "Nieruchomości", icon: Building2 },
    { name: "Turystyka", icon: Star },
    { name: "Gastronomia", icon: BarChart2 },
    { name: "E-commerce", icon: Shield },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Wrocław — Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron internetowych Wrocław. Agencja SEO Fotz Studio — audyt SEO, optymalizacja, link building dla firm z Wrocławia. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/wroclaw"
        ogTitle="Pozycjonowanie Wrocław — Fotz Studio Agencja SEO"
        ogDescription="Skuteczne pozycjonowanie stron w Wrocławiu. Audyt SEO, optymalizacja i link building dla firm z Wrocławia."
        keywords="pozycjonowanie wrocław, seo wrocław, agencja seo wrocław, pozycjonowanie lokalne wrocław, pozycjonowanie stron wrocław, seo dla firm wrocław, audyt seo wrocław, pozycjonowanie dolny śląsk"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Wrocław"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Wrocławia. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne."
        url="https://fotz.pl/uslugi/pozycjonowanie/wroclaw"
        provider="Fotz Studio"
        areaServed="Wrocław"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Wrocław", url: "https://fotz.pl/uslugi/pozycjonowanie/wroclaw" },
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
              Pozycjonowanie · Wrocław i Dolny Śląsk
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Wrocław</span> —
              agencja SEO dla firm z Wrocławia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy wrocławskim firmom zdobyć pierwszą stronę Google.
              Audyt SEO, optymalizacja techniczna, content SEO i link building
              dostosowane do rosnącego rynku IT, technologii i startupów Wrocławia.
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

      {/* Wrocław SEO specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Wrocławiu — miasto innowacji i szans biznesowych
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Wrocław to <strong className="text-foreground">czwarte co do wielkości miasto w Polsce</strong> z
                  populacją <strong className="text-foreground">670 tysięcy mieszkańców</strong>. To czwarta столica
                  przedsiębiorczości, innowacji i wzrostu — szczególnie w sektorach IT, technologii i
                  startupów.
                </p>
                <p>
                  Jako <strong className="text-foreground">Europejska Stolica Kultury 2016</strong> i hub
                  naukowy (Politechnika Wrocławska, Uniwersytet Wrocławski — 60k+ studentów), Wrocław
                  przyciąga firmy z całej Polski i zagranicy. Tutaj swoją siedzibę mają: Nokia, Samsung R&D,
                  Google, Credit Suisse.
                </p>
                <p>
                  Pozycjonowanie w Wrocławiu to konkurencja, ale nie tak brutalna jak w Warszawie. Rynek
                  SEO Wrocławia charakteryzuje się <strong className="text-foreground">szybkim wzrostem, młodą
                  publicznością tech-savvy i rosnącymi budżetami marketingowymi</strong> ze strony startupów
                  i firm IT.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Wrocławia
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
                  + całe Dolny Śląsk: Wałbrzych, Legnica, Jawor, Świdnica, Bolesławiec i inne miasta regionu
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
              Branże i sektory, które pozycjonujemy w Wrocławiu
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Wrocław to hub IT, startupów, finansów i turystyki. Znamy specyfikę każdej branży
              na wrocławskim rynku i wiemy, jakie frazy przynoszą klientów.
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

          <FadeInView delay={0.5} className="mt-10 p-6 bg-card border border-border/60 rounded-xl">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Specjalizacja: Gateway do rynków DACH</h4>
            <p className="text-muted-foreground text-sm">
              Wrocław leży blisko granicy z Niemcami — to naturalna brama do rynków DACH (Deutschland, Österreich, Schweiz).
              Wiele firm wrocławskich sprzedaje usługi dla klientów z Niemiec. W naszych strategiach SEO uwzględniamy
              tę perspektywę — optymalizujemy treści pod zarówno rynek polski jak i międzynarodowy.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Jak działamy — pozycjonowanie firm z Wrocławia
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę, konkurencję i sprawdzamy, jakie frazy wrocławskie mają potencjał. Raport zawiera konkretne wskazówki dla Twojej branży.",
              },
              {
                step: "02",
                title: "Strategia SEO dla Wrocławia",
                desc: "Dobieramy słowa kluczowe z 'Wrocław' i dzielnicami, planujemy content SEO i budujemy plan linków dostosowany do wrocławskiego rynku.",
              },
              {
                step: "03",
                title: "Optymalizacja i wdrożenie",
                desc: "Optymalizujemy technical SEO, tworzymy treści zoptymalizowane pod wrocławskie frazy, budujemy linki z wartościowych polskich i międzynarodowych źródeł.",
              },
              {
                step: "04",
                title: "Monitoring, raportowanie i analiza",
                desc: "Co 2 tygodnie raportujemy pozycje, ruch i konwersje. Strategia jest dynamicznie dostosowywana do zmian w Google i konkurencji na wrocławskim rynku.",
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
              Gotowy na pierwszą stronę Google w Wrocławiu?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO swojej strony. Otrzymasz raport z
              konkretnymi rekomendacjami dla rynku wrocławskiego i Dolnego Śląska.
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
              FAQ — pozycjonowanie stron Wrocław
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
              { label: "Pozycjonowanie Poznań", url: "/uslugi/pozycjonowanie/poznan" },
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

export default PozycjonowanieWroclaw;
