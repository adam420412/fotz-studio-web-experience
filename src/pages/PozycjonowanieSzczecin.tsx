import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Building2,
  Globe,
  Target,
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
    question: "Ile kosztuje pozycjonowanie w Szczecinie?",
    answer:
      "Wycenę przygotowujemy po rozmowie o zakresie i audycie strony. Zależy ona od liczby fraz i podstron, stanu technicznego serwisu, konkurencji w branży oraz tego, czy działasz tylko na rynku polskim, czy także niemieckim — strategia dwujęzyczna (PL i DE) wymaga więcej pracy nad treściami i linkami.",
  },
  {
    question: "Ile czasu trwa pozycjonowanie w Szczecinie?",
    answer:
      "SEO to proces rozłożony na miesiące, a tempo zależy od konkurencji w branży, stanu strony i historii domeny. Nie gwarantujemy konkretnej pozycji ani terminu — w raportach pokazujemy, jak zmienia się widoczność i ruch. Dla firm działających także na rynku niemieckim proces zwykle trwa dłużej, bo widoczność trzeba budować w dwóch językach.",
  },
  {
    question: "Czy pozycjonujecie firmy w regionie zachodniopomorskim poza Szczecinem?",
    answer:
      "Tak — pracujemy z Poznania, a firmy ze Szczecina i całego województwa zachodniopomorskiego (Koszalin, Kołobrzeg, Stargard, Świnoujście, Police) obsługujemy zdalnie. Dla firm z branży turystycznej (Kołobrzeg, Świnoujście) wdrażamy pozycjonowanie sezonowe pod ruch letni oraz całoroczne dla wczasowiczów niskobudżetowych.",
  },
  {
    question: "Jak wygląda pozycjonowanie dla firm eksportujących do Niemiec ze Szczecina?",
    answer:
      "Przygotowujemy strategię dla dwóch rynków — strona PL dla rynku polskiego oraz osobna wersja językowa lub podstrona DE z treściami i SEO pod niemieckie frazy. Linki budujemy ze źródeł branżowych w obu krajach. Bliskość Berlina sprawia, że dla wielu szczecińskich firm rynek niemiecki jest naturalnym kierunkiem.",
  },
  {
    question: "Które branże są najtrudniejsze do pozycjonowania w Szczecinie?",
    answer:
      "Najtrudniejsze branże: logistyka i transport morski (wysoka konkurencja między firmami portowymi), nieruchomości deweloperskie (duże agencje z budżetami), prawnicy i doradcy podatkowi (skomplikowane frazy long-tail), gabinety medyczne i stomatologiczne. W tych branżach zakres prac jest zwykle szerszy, co uwzględniamy w wycenie.",
  },
  {
    question: "Czy macie doświadczenie w SEO dla firm z branży morskiej i portowej?",
    answer:
      "Port Szczecin-Świnoujście to specyficzny rynek B2B — klienci agentów morskich, spedytorów czy operatorów terminali szukają partnerów po precyzyjnych frazach branżowych. Strategię dla takiej firmy zaczynamy od audytu i analizy fraz, którymi szukają decydenci, a podejście dopasowujemy do Twojej oferty.",
  },
];

const PozycjonowanieSzczecin = () => {
  const results = [
    { metric: "Audyt", label: "Na start współpracy", context: "technika, treści, linki" },
    { metric: "PL / DE", label: "Strategia lokalna lub cross-border", context: "frazy polskie i niemieckie" },
    { metric: "Raporty", label: "Widoczność i ruch", context: "regularnie, w ustalonym rytmie" },
    { metric: "Zdalnie", label: "Pracujemy z Poznania", context: "firmy ze Szczecina obsługujemy online" },
  ];

  const districts = [
    "Śródmieście",
    "Niebuszewo",
    "Pomorzany",
    "Grabowo",
    "Skolwin",
    "Dąbie",
    "Gumieńce",
    "Bukowo",
  ];

  const industries = [
    { name: "Logistyka i port", icon: Building2 },
    { name: "Nieruchomości", icon: Building2 },
    { name: "Budownictwo", icon: Target },
    { name: "Turystyka nadbałtycka", icon: Star },
    { name: "Handel cross-border DE", icon: Globe },
    { name: "Usługi medyczne", icon: Shield },
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Szczecin — Agencja SEO Zachodniopomorskie"
        description="Pozycjonowanie stron Szczecin i Zachodniopomorskie. Agencja SEO Fotz Studio — audyt SEO, optymalizacja, link building. SEO dla rynku PL i DE. Bezpłatna konsultacja SEO!"
        canonical="https://www.fotz-studio.pl/uslugi/pozycjonowanie/szczecin"
        keywords="pozycjonowanie szczecin, agencja seo szczecin, seo szczecin, pozycjonowanie stron szczecin, seo dla firm szczecin, seo zachodniopomorskie, pozycjonowanie lokalne szczecin"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Szczecin"
        description="Agencja SEO Fotz Studio oferuje profesjonalne pozycjonowanie stron dla firm ze Szczecina i Zachodniopomorskiego. Audyt SEO, optymalizacja on-page, link building i SEO cross-border PL/DE."
        provider="Fotz Studio"
        areaServed="Szczecin, Zachodniopomorskie"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://www.fotz-studio.pl/uslugi/pozycjonowanie" },
          { name: "Szczecin", url: "https://www.fotz-studio.pl/uslugi/pozycjonowanie/szczecin" },
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
              Pozycjonowanie · Szczecin i Zachodniopomorskie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Pozycjonowanie{" "}
              <span className="text-primary">Szczecin</span> —
              agencja SEO przy granicy z Niemcami
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Pomagamy firmom ze Szczecina i całego Zachodniopomorskiego budować widoczność w
              Google — zarówno na rynku polskim, jak i niemieckim. Audyt SEO,
              optymalizacja techniczna i link building dla branż portowych, logistycznych i usługowych.
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
              {["White-hat SEO", "SEO cross-border PL/DE", "Google Analytics 4", "Raport co 2 tygodnie"].map(
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

      {/* Szczecin specifics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SEO w Szczecinie — port, Odra i brama do Niemiec
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Szczecin to jedno z największych miast zachodniej Polski i ważny port nad Odrą.
                  Bliskość{" "}
                  <strong className="text-foreground">granicy i Berlina</strong> sprawia, że dla
                  wielu firm naturalnym kierunkiem jest rynek DACH, a w regionie działają również
                  zakłady produkcyjne i firmy logistyczne.
                </p>
                <p>
                  Zachodniopomorski rynek SEO ma niższą konkurencję niż Warszawa, ale firmy
                  działające cross-border muszą budować widoczność w{" "}
                  <strong className="text-foreground">dwóch językach i dwóch domenach</strong>.
                  Skuteczne SEO w Szczecinie to nie tylko optymalizacja frazy „Szczecin" —
                  to strategia łącząca rynek polski z rynkiem niemieckim.
                </p>
                <p>
                  Dodatkowo region ma silną <strong className="text-foreground">sezonowość turystyczną</strong>{" "}
                  — Kołobrzeg, Świnoujście i Niechorze generują duży ruch w sezonie letnim. SEO dla firm
                  wypoczynkowych wymaga planowania z wyprzedzeniem i content calendar na sezon.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-card border border-border/60 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Obsługujemy zdalnie firmy z całego Szczecina
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
                  + Police, Stargard, Koszalin, Kołobrzeg i całe Zachodniopomorskie
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
              Branże, dla których przygotowujemy strategie SEO w Szczecinie
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Od logistyki portowej po turystykę nadbałtycką — strategię dopasowujemy
              do specyfiki sektorów typowych dla Zachodniopomorskiego.
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
              Jak działamy — pozycjonowanie firm ze Szczecina
            </h2>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Konsultacja i zakres audytu SEO",
                desc: "Analizujemy Twoją stronę pod kątem fraz lokalnych (Szczecin, Zachodniopomorskie) oraz potencjału cross-border PL/DE. Sprawdzamy techniczne podstawy i profil linków.",
              },
              {
                step: "02",
                title: "Strategia lokalna lub cross-border",
                desc: "Dobieramy słowa kluczowe dla rynku polskiego i/lub niemieckiego. Planujemy content uwzględniający sezonowość turystyczną i branżę portową.",
              },
              {
                step: "03",
                title: "Wdrożenie i optymalizacja",
                desc: "Optymalizujemy stronę technicznie, tworzymy treści SEO na frazy zachodniopomorskie i budujemy linki z branżowych źródeł PL/DE.",
              },
              {
                step: "04",
                title: "Raportowanie i skalowanie",
                desc: "Co 2 tygodnie raportujemy pozycje i ruch. Gdy strona nabiera autorytetu, rozszerzamy na kolejne frazy i rynki docelowe.",
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
              Chcesz poprawić widoczność w Google w Szczecinie?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Zapytaj o audyt SEO. Zakres i wycenę ustalimy na bezpłatnej konsultacji, a w audycie przeanalizujemy Twoje frazy dla Szczecina
              i Zachodniopomorskiego — i pokażemy, co dziś ogranicza widoczność Twojej strony.
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
              FAQ — pozycjonowanie stron Szczecin
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
              { city: "Wrocław", href: "/seo/pozycjonowanie-wroclaw" },
              { city: "Poznań", href: "/seo/pozycjonowanie-poznan" },
              { city: "Gdańsk", href: "/seo/pozycjonowanie-gdansk" },
              { city: "Łódź", href: "/seo/pozycjonowanie-lodz" },
              { city: "Białystok", href: "/uslugi/pozycjonowanie/bialystok" },
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

export default PozycjonowanieSzczecin;
