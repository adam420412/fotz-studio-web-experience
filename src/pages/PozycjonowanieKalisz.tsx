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
    question: "Ile kosztuje pozycjonowanie w Kaliszu?",
    answer:
      "Wycenę przygotowujemy po rozmowie o zakresie i audycie strony. Koszt zależy od liczby i konkurencyjności fraz, stanu technicznego strony, ilości treści do przygotowania oraz działań link buildingowych. W branżach takich jak medycyna, nieruchomości czy turystyka zakres prac jest zwykle większy.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Kaliszu?",
    answer:
      "SEO to proces rozłożony na miesiące. Tempo zależy od konkurencji w branży, historii domeny i zakresu prac. Nie gwarantujemy konkretnej pozycji ani terminu jej osiągnięcia - po audycie przedstawiamy plan działań i regularnie raportujemy postępy.",
  },
  {
    question: "Jakie branże dominują w Kaliszu i czy warto pozycjonować strony w mieście?",
    answer:
      "Kalisz ma bogate dziedzictwo historyczne (zabytkowe kościoły i kamienice), turystykę kulturalną, tradycję rzemiosła i przemysłu włókienniczego, handel oraz usługi medyczne i turystyczne. To, ile firm z danej branży inwestuje w SEO, sprawdzamy w audycie konkurencji.",
  },
  {
    question: "Czy pozycjonowanie w Kaliszu jest trudne ze względu na wielkość miasta?",
    answer:
      "Niekoniecznie. Kalisz ma własne frazy lokalne i kulturalne, a w części branż konkurencja bywa mniejsza niż w Poznaniu czy Warszawie. Zależy to jednak od konkretnych fraz, dlatego poziom trudności oceniamy w audycie, zanim zaproponujemy zakres prac.",
  },
  {
    question: "Czy pozycjonujecie firmy z Kalisza poza miastem?",
    answer:
      "Tak - pracujemy z Poznania i zdalnie obsługujemy firmy z Kalisza oraz całej Wielkopolski: Ostrowa Wielkopolskiego, Konina, Jarocina, Pleszewa czy Goliny. Dla firm z branży turystycznej i rzemiosła możemy planować pozycjonowanie pod ruch turystów krajowych i zagranicznych.",
  },
  {
    question: "Jak SEO może pomóc firmom z Kalisza w sprzedaży produktów tradycyjnych?",
    answer:
      "Firmy handlujące produktami tradycyjnymi, rękodziełem i pamiątkami mogą wykorzystać SEO do dotarcia do osób szukających autentycznych wyrobów z Kalisza. Sprawdzamy w narzędziach frazy typu 'pamiątki z Kalisza' czy 'tradycyjne wyroby Kalisz' i planujemy treści pod te, które mają realny ruch.",
  },
];

const PozycjonowanieKalisz = () => {
  const results = [
    { metric: "Audyt", label: "Punkt wyjścia", context: "technika, treści, konkurencja" },
    { metric: "Frazy", label: "Lokalne i regionalne", context: "Kalisz i Wielkopolska" },
    { metric: "Raporty", label: "Pozycje i ruch", context: "regularnie, w ustalonym rytmie" },
    { metric: "Zdalnie", label: "Pracujemy z Poznania", context: "obsługa firm z Kalisza" },
  ];

  const districts = [
    "Centrum",
    "Pomorskie",
    "Osiedle Lechickie",
    "Osiedle Okulickiego",
    "Piaski",
    "Osiedle Robotnicze",
    "Teodora",
    "Bogucin",
  ];

  const industries = [
    { name: "Turystyka i kultura", icon: Star },
    { name: "Handel i pamiątki", icon: Target },
    { name: "Medycyna i kliniki", icon: Shield },
    { name: "Gastronomia", icon: Building2 },
    { name: "Rzemiosło tradycyjne", icon: Award },
    { name: "Nieruchomości", icon: Globe },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Kalisz - Agencja SEO Wielkopolska | Fotz Studio"
        description="Pozycjonowanie stron Kalisz i Wielkopolska. Agencja SEO Fotz Studio - audyt, optymalizacja i white-hat SEO dla firm z Kalisza, obsługiwanych zdalnie z Poznania. Bezpłatna konsultacja SEO!"
        canonical="https://www.fotz-studio.pl/pozycjonowanie/kalisz"
        keywords="pozycjonowanie kalisz, agencja seo kalisz, seo kalisz, pozycjonowanie stron kalisz, seo dla firm kalisz, pozycjonowanie lokalne kalisz, seo wielkopolska"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Kalisz"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm z Kalisza i Wielkopolski. Audyt SEO, optymalizacja on-page, link building i pozycjonowanie lokalne dla biznesu w Kaliszu."
        provider="Fotz Studio"
        areaServed="Kalisz"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "/" },
          { name: "Pozycjonowanie", url: "/uslugi/pozycjonowanie" },
          { name: "Kalisz", url: "/pozycjonowanie/kalisz" },
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
              Pozycjonowanie - Kalisz i Wielkopolska
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie <span className="text-primary">Kalisz</span> - agencja SEO dla firm z Wielkopolski
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom z Kalisza i Wielkopolski zwiększać widoczność w Google. Pracujemy z Poznania, firmy z Kalisza obsługujemy zdalnie. Audyt SEO, optymalizacja techniczna i strategia linkowania dla lokalnego biznesu.
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
                <Link to="/seo/pozycjonowanie">
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
              {["White-hat SEO", "Strategia po audycie", "Google Analytics 4", "Regularne raporty"].map(
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

      {/* Kalisz specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pozycjonowanie lokalne w Kaliszu - jak podchodzimy do rynku
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Kalisz to jedno z najstarszych miast w Polsce, z bogatą historią i tradycją rzemiosła. Przyciąga turystów krajowych i zagranicznych, a lokalny biznes obejmuje handel, usługi, gastronomię i turystykę kulturalną.
                </p>
                <p>
                  Z perspektywy SEO w części branż <strong className="text-foreground">konkurencja bywa mniejsza</strong> niż w Poznaniu czy Warszawie, ale zależy to od konkretnych fraz. Nie gwarantujemy pozycji ani terminów - poziom trudności sprawdzamy w audycie. Pracujemy z Poznania, firmy z Kalisza obsługujemy zdalnie.
                </p>
                <p>
                  Kalisz ma własne nisze biznesowe: turystyka kulturalna (zabytkowe kościoły, kamienice, muzea), tradycyjne wyroby i rzemiosło, gastronomia regionalna i handel pamiątkami. Dla takich nisz <strong className="text-foreground">sprawdzamy wolumen i konkurencję fraz</strong> w narzędziach SEO, zanim zaplanujemy treści.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Pozycjonujemy firmy we wszystkich dzielnicach Kalisza
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
                  + Ostrów Wielkopolski, Konin, Jarocin, Pleszew i cała Wielkopolska
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
              Branże, które pozycjonujemy w Kaliszu
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od turystyki kulturalnej i rzemiosła po medycynę i gastronomię - strategię dopasowujemy do branży.
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
              Jak działamy - pozycjonowanie firm z Kalisza
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Konsultacja i zakres audytu SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz dla Kalisza i Wielkopolski. Oceniamy konkurencję i realny zakres prac potrzebny do poprawy widoczności.",
              },
              {
                step: "02",
                title: "Strategia lokalna i regionalna",
                desc: "Dobieramy słowa kluczowe uwzględniające Kalisz, turystykę kulturalną, tradycyjne wyroby i branżę. Planujemy content calendar pod sezonowość turystyczną i ruchy poszukiwań.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO pod frazy z Kalisza i Wielkopolski oraz budujemy profil linków z branżowych i lokalnych źródeł.",
              },
              {
                step: "04",
                title: "Raportowanie i skalowanie",
                desc: "Regularnie raportujemy pozycje, ruch organiczny i konwersje. Gdy strona nabiera autorytetu, rozszerzamy zakres fraz i kampanii.",
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

      {/* Pricing factors */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Od czego zależy wycena SEO dla firmy z Kalisza
            </h2>
            <p className="text-muted-foreground">
              Wycenę przygotowujemy po rozmowie o zakresie i audycie strony — nie stosujemy stałego cennika.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Liczba i konkurencyjność fraz, na które chcesz być widoczny",
              "Stan techniczny strony i zakres potrzebnych poprawek",
              "Ilość treści do przygotowania lub przebudowy",
              "Potrzeba działań link buildingowych i lokalnych (np. profil firmy w Google)",
              "Zasięg działań: sam Kalisz, region czy cała Polska",
              "Zakres raportowania i częstotliwość spotkań",
            ].map((item, i) => (
              <FadeInView key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-card border border-border/60 rounded-xl p-5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              </FadeInView>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/kontakt?usluga=seo#formularz">Bezpłatna konsultacja SEO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chcesz zwiększyć widoczność w Google w Kaliszu?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zapytaj o audyt SEO. Zakres i wycenę ustalimy na bezpłatnej konsultacji, a potem pokażemy, jak wypadasz na tle lokalnej konkurencji w Kaliszu i co konkretnie trzeba zrobić, aby uzyskać organiczny ruch.
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
                <Link to="/seo/pozycjonowanie">Wszystkie pakiety SEO</Link>
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
              FAQ - pozycjonowanie stron Kalisz
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
              { city: "Warszawa", href: "/seo/pozycjonowanie-warszawa" },
              { city: "Kraków", href: "/seo/pozycjonowanie-krakow" },
              { city: "Poznań", href: "/seo/pozycjonowanie-poznan" },
              { city: "Wrocław", href: "/seo/pozycjonowanie-wroclaw" },
              { city: "Gdańsk", href: "/seo/pozycjonowanie-gdansk" },
              { city: "Łódź", href: "/seo/pozycjonowanie-lodz" },
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
              to="/seo/pozycjonowanie"
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

export default PozycjonowanieKalisz;
