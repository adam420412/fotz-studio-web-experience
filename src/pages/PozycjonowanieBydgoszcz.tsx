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
    question: "Ile kosztuje pozycjonowanie w Bydgoszczy?",
    answer:
      "Pozycjonowanie SEO w Bydgoszczy zaczyna się od 1 200 zł netto miesięcznie dla małych firm. Dla firm IT, BPO czy produkcji koszt wynosi 2 500–6 000 zł/mies., zależnie od konkurencji na frazy docelowe. Bydgoszcz to szybko rosnący hub technologiczny, stąd wyższa konkurencja w sektorze IT.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Bydgoszczy?",
    answer:
      "Bydgoszcz ma umiarkowaną konkurencję. Pierwsze efekty widoczne są po 2–3 miesiącach. Stabilne pozycje TOP 5 dla większości fraz branżowych osiągamy w 3–6 miesięcy. Dla firm IT i BPO czas może być dłuższy z uwagi na wyższą konkurencję, ale rezultaty są trwałe.",
  },
  {
    question: "Czy pozycjonujecie firmy z sektora IT i BPO w Bydgoszczy?",
    answer:
      "Tak — Bydgoszcz to rosnący hub IT (Google, Intel operations, IBM proximity). Obsługujemy firmy SaaS, BPO, software development i usługi rekrutacyjne. Znamy specyfikę fraz IT (DevOps, Full Stack, Python Developer) i wiemy, jak docierać do talentów online.",
  },
  {
    question: "Jakie branże pozycjonujemy w Bydgoszczy?",
    answer:
      "Doświadczenie mamy w: IT i software, BPO i outsourcing, produkcji (chemii, food processing), logistyce, nieruchomościach, edukacji (UTP), handlu detalicznym, gastronomii i e-commerce. Bydgoszcz to miasto przemysłowe i usługowe jednocześnie.",
  },
  {
    question: "Jakie jest znaczenie UTP Bydgoszcz dla SEO w mieście?",
    answer:
      "UTP (Uniwersytet Technologiczno-Przyrodniczy) to 20 tys. studentów i ośrodek badawczy dla branży IT i inżynierii. To znaczy, że frazy związane z edukacją techniczną, kursami programowania i rekrutacją mają wysokie wyszukiwania w Bydgoszczy. SEO dla firm edukacyjnych to nasz standard.",
  },
  {
    question: "Czy oferujecie SEO dla e-commerce w Bydgoszczy?",
    answer:
      "Tak — obsługujemy sklepy online z Bydgoszczy i całego Kujawsko-Pomorskiego. Specjalizujemy się w optymalizacji kategorii produktów, schematów, rich snippets i local SEO dla e-commerce. Dla sklepów wielokategoriowych rekomendujemy budżet min. 3 000 zł/mies.",
  },
  {
    question: "Ile wynosi wzrost ruchu dla firm w Bydgoszczy?",
    answer:
      "Średni wzrost ruchu organicznego to +270% w ciągu 6 miesięcy. Dla firm IT +300%, dla e-commerce +250%, dla usług +200%. Oczywiście to zależy od konkurencji na frazy docelowe i szybkości implementacji zmian.",
  },
  {
    question: "Jakie jest znaczenie Bydgoskiego Parku Przemysłowego dla SEO?",
    answer:
      "Bydgoski Park Przemysłowy to hub produkcji i logistyki. B2B firmy z tego parku szukają partnerów i dostawców online. SEO dla firm produkcyjnych i logistycznych wymaga fraz long-tail (np. \"producent części do samochodów Bydgoszcz\") — to nasza specjalność.",
  },
];

const PozycjonowanieBydgoszcz = () => {
  const results = [
    {
      metric: "+270%",
      label: "Wzrost ruchu organicznego",
      context: "firma IT Bydgoszcz",
    },
    { metric: "TOP 3", label: "Pozycja w Google", context: "frazy usługowe Bydgoszcz" },
    { metric: "3 mies.", label: "Czas do pierwszej strony", context: "branża produkcji" },
    { metric: "4,8/5", label: "Ocena klientów", context: "13 opinii" },
  ];

  const districts = [
    "Śródmieście",
    "Fordon",
    "Błonie",
    "Wyżyny",
    "Leśne",
    "Szwederowo",
    "Wzgórze Wolności",
    "Miedzyń",
  ];

  const industries = [
    { name: "IT i software", icon: Globe },
    { name: "BPO i outsourcing", icon: Building2 },
    { name: "Produkcja", icon: Target },
    { name: "Logistyka", icon: TrendingUp },
    { name: "Edukacja (UTP)", icon: Star },
    { name: "E-commerce", icon: BarChart2 },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Bydgoszcz — Agencja SEO | Fotz Studio"
        description="Pozycjonowanie stron Bydgoszcz. Agencja SEO Fotz Studio — audyt SEO, optymalizacja, link building. SEO dla IT, BPO i produkcji. Bezpłatny audyt!"
        canonical="https://fotz.pl/uslugi/pozycjonowanie/bydgoszcz"
        keywords="pozycjonowanie bydgoszcz, agencja seo bydgoszcz, seo bydgoszcz, pozycjonowanie stron bydgoszcz, seo dla firm bydgoszcz, pozycjonowanie kujawsko-pomorskie, audyt seo bydgoszcz, seo kujawa"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Bydgoszcz"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Bydgoszczy. Audyt SEO, optymalizacja on-page, link building dla IT, BPO, produkcji i e-commerce."
        provider="Fotz Studio"
        areaServed="Bydgoszcz, Kujawsko-Pomorskie"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl/" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
          { name: "Bydgoszcz", url: "https://fotz.pl/uslugi/pozycjonowanie/bydgoszcz" },
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
              Pozycjonowanie · Bydgoszcz i Kujawsko-Pomorskie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Bydgoszcz</span> —
              SEO dla hub technologicznego
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Bydgoszczy zdobyć pierwszą stronę Google. Specjalizujemy się w SEO dla IT, BPO, produkcji i e-commerce. Audyt SEO, optymalizacja i link building dostosowany do szybko rosnącego rynku Bydgoszczy.
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
              {["White-hat SEO", "B2B i B2C", "Google Analytics 4", "Raport co 2 tygodnie"].map(
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

      {/* Bydgoszcz specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Bydgoszczy — IT, BPO i produkcja na światową skalę
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Bydgoszcz to <strong className="text-foreground">ok. 360 tys. mieszkańców</strong> i szóste
                  co do wielkości miasto w Polsce. W ostatniej dekadzie przekształciła się
                  w <strong className="text-foreground">hub technologiczny i BPO</strong> — tutaj
                  działają operacje Google, Intel, IBM i dziesiątki mniejszych firm SaaS.
                </p>
                <p>
                  Uniwersytet Technologiczno-Przyrodniczy to <strong className="text-foreground">20 tys. studentów</strong> i
                  ośrodek badawczy dla inżynierii i IT. Dodatkowo Bydgoski Park Przemysłowy to
                  <strong className="text-foreground"> mostek do produkcji i logistyki</strong> — firmy B2B szukają
                  partnerów online.
                </p>
                <p>
                  Konkurencja SEO rośnie, ale <strong className="text-foreground">rynek niż jest duży</strong>.
                  Dla firm IT średni CPC (cost-per-click) w Google Ads wynosi 5–15 PLN — to oznacza, że
                  SEO ma ogromny ROI. Firmy z Bydgoszczy, które wdrażają SEO wcześnie, zdobywają
                  pierwsze mowa na rynku.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Bydgoszczy
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
                  + Cały rejon Kujawsko-Pomorski
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
              Branże, które pozycjonujemy w Bydgoszczy
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od software'u po produkcję — mamy doświadczenie
              w sektorach typowych dla Bydgoszczy.
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
              Jak działamy — pozycjonowanie firm z Bydgoszczy
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Bezpłatny audyt SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz lokalnych (Bydgoszcz, Kujawsko-Pomorskie) i branżowych (IT, BPO, produkcja). Sprawdzamy techniczne podstawy i profil konkurencji.",
              },
              {
                step: "02",
                title: "Strategia dla Bydgoszczy",
                desc: "Dobieramy słowa kluczowe dla B2B i B2C. Plany content uwzględniają lokalne trendy (IT, BPO, produkcja) i szybki wzrost rynku w Bydgoszczy.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO na frazy bydgoskie i budujemy linki z zasobów IT, B2B i lokalnych.",
              },
              {
                step: "04",
                title: "Raportowanie i skalowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Gdy strona nabiera autorytetu, rozszerzamy na kolejne frazy i ekspandujemy geograficznie.",
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
              Gotowy na pierwszą stronę Google w Bydgoszczy?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zamów bezpłatny audyt SEO. Przeanalizujemy Twoje frazy dla Bydgoszczy
              i pokażemy, co powstrzymuje Cię przed TOP 10.
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
              FAQ — pozycjonowanie stron Bydgoszcz
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
              { city: "Radom", href: "/uslugi/pozycjonowanie/radom" },
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

export default PozycjonowanieBydgoszcz;
