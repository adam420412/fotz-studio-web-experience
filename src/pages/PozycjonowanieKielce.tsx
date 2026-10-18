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
      "Wycenę przygotowujemy po rozmowie o zakresie i audycie strony. Koszt zależy od liczby fraz, konkurencyjności branży, stanu technicznego strony oraz ilości treści i linków do przygotowania. Nie podajemy stałej ceny przed poznaniem projektu.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Kielcach?",
    answer:
      "SEO to proces rozłożony na miesiące, a tempo zależy od konkurencji w danej branży, historii domeny i zakresu prac. Nie gwarantujemy konkretnej pozycji ani terminu jej osiągnięcia — po audycie pokazujemy realny plan działań i raportujemy postępy.",
  },
  {
    question: "Czy pozycjonujecie firmy targów Kielce?",
    answer:
      "Tak — możemy prowadzić SEO dla wystawców, organizatorów wydarzeń, agencji eventowych i firm logistycznych związanych z Targami Kielce. Pracujemy z Poznania, a firmy z Kielc obsługujemy zdalnie.",
  },
  {
    question: "Jakie branże pozycjonujemy w Kielcach?",
    answer:
      "Pracujemy z firmami usługowymi, handlowymi, produkcyjnymi i e-commerce. W Kielcach mogą to być m.in. firmy związane z targami, budownictwem i kamieniarstwem, nieruchomościami, edukacją czy gastronomią — strategię dopasowujemy do branży po audycie.",
  },
  {
    question: "Jaki jest potencjał Kieleckiego Parku Technologicznego?",
    answer:
      "Kielecki Park Technologiczny skupia startupy i firmy technologiczne. Dla takich firm sprawdzamy w narzędziach realny wolumen fraz typu \"biuro coworking Kielce\", \"IT support Kielce\" czy \"web developer Kielce\" i na tej podstawie planujemy treści.",
  },
  {
    question: "Czy Kielce to dobry rynek dla firm B2B?",
    answer:
      "Targi Kielce przyciągają kupców z całej Polski i zagranicy, więc firmy B2B mają tu naturalny punkt odniesienia. Poziom konkurencji sprawdzamy dla konkretnych fraz w audycie. Dla firm B2B zwykle rekomendujemy SEO long-tail i content marketing.",
  },
  {
    question: "Jakie są trendy w handlu i nieruchomościach w Kielcach?",
    answer:
      "Dla agencji nieruchomości i deweloperów sprawdzamy frazy takie jak \"mieszkanie Kielce\", \"biuro wynajem Kielce\" i \"lokal usługowy Kielce\" — ich potencjał oceniamy na podstawie danych z narzędzi SEO, a nie założeń.",
  },
  {
    question: "Jakie są czynniki różniące Kielce od większych miast?",
    answer:
      "W mniejszym mieście część fraz lokalnych bywa mniej konkurencyjna niż w Warszawie czy Krakowie, ale zależy to od branży — dlatego poziom konkurencji, zakres prac i budżet ustalamy po audycie. Kielce mają też silne zaplecze B2B (targi, budownictwo, technologie).",
  },
];

const PozycjonowanieKielce = () => {
  const results = [
    { metric: "Audyt", label: "Punkt wyjścia", context: "technika, treści, konkurencja" },
    { metric: "Frazy", label: "Lokalne i branżowe", context: "Kielce i Świętokrzyskie" },
    { metric: "Raporty", label: "Pozycje i ruch", context: "regularnie, w ustalonym rytmie" },
    { metric: "Zdalnie", label: "Pracujemy z Poznania", context: "obsługa firm z Kielc" },
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
        description="Pozycjonowanie stron Kielce. Agencja SEO Fotz Studio — audyt SEO, optymalizacja, link building. Pracujemy z Poznania, firmy z Kielc obsługujemy zdalnie. Bezpłatna konsultacja SEO!"
        canonical="https://www.fotz-studio.pl/uslugi/pozycjonowanie/kielce"
        keywords="pozycjonowanie kielce, agencja seo kielce, seo kielce, pozycjonowanie stron kielce, seo dla firm kielce, seo świętokrzyskie, pozycjonowanie lokalne kielce"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Kielce"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Kielc. Audyt SEO, optymalizacja on-page, link building dla targów, budownictwa i e-commerce."
        provider="Fotz Studio"
        areaServed="Kielce, Świętokrzyskie"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://www.fotz-studio.pl/uslugi/pozycjonowanie" },
          { name: "Kielce", url: "https://www.fotz-studio.pl/uslugi/pozycjonowanie/kielce" },
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
              Pomagamy firmom z Kielc zwiększać widoczność w Google. Kielce to Targi Kielce, budownictwo i rozwijający się sektor technologiczny. Pracujemy z Poznania, firmy z Kielc obsługujemy zdalnie. Audyt SEO, optymalizacja i link building.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
                  Zapytaj o audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
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
              {["White-hat SEO", "B2B focus", "Google Analytics 4", "Regularne raporty"].map(
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
                  jeden z ważnych ośrodków targowych w Polsce, który przyciąga wystawców i kupców
                  z całego kraju.
                </p>
                <p>
                  Branża <strong className="text-foreground">budownictwa i kamienia</strong> ma głębokie korzenie
                  w Kielcach — marmury, wapień i granit. Dodatkowo Kielecki Park Technologiczny przyciąga
                  startup'y. W mieście działa też <strong className="text-foreground">Uniwersytet Jana Kochanowskiego (UJK)</strong>.
                </p>
                <p>
                  <strong className="text-foreground">Konkurencja SEO w Kielcach</strong> zależy od branży —
                  w części fraz lokalnych bywa mniejsza niż w największych miastach. Sprawdzamy to w audycie,
                  zanim zaproponujemy zakres prac. Pracujemy z Poznania, firmy z Kielc obsługujemy zdalnie.
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
              Od targów po tech — strategię dopasowujemy
              do sektorów typowych dla Kielc.
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
                title: "Konsultacja i zakres audytu SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz lokalnych (Kielce, Świętokrzyskie). Sprawdzamy, jak silna jest konkurencja w Twojej branży.",
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
                desc: "Regularnie raportujemy pozycje i ruch. Gdy wybrane frazy przynoszą efekty, możesz rozszerzyć działania na kolejne.",
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
              Chcesz zwiększyć widoczność w Google w Kielcach?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zapytaj o audyt SEO — zakres i wycenę ustalimy na bezpłatnej konsultacji.
              Przeanalizujemy Twoje frazy i konkurencję i zaproponujemy realny plan działań.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base px-8">
                <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
                  Zapytaj o audyt SEO <ArrowRight className="ml-2 h-4 w-4" />
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
              { city: "Warszawa", href: "/seo/pozycjonowanie-warszawa" },
              { city: "Kraków", href: "/seo/pozycjonowanie-krakow" },
              { city: "Wrocław", href: "/seo/pozycjonowanie-wroclaw" },
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
