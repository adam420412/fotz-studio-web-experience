import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star, Target, MapPin, TrendingUp, Users, Award, Zap, Globe, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const services = [
  {
    icon: Target,
    title: "Audyt techniczny SEO",
    description: "Pełna analiza infrastruktury Twojej strony — szybkość, crawlability, strukturę. Identyfikujemy błędy blokujące pozycjonowanie. Raport z konkretnymi rekomendacjami."
  },
  {
    icon: Globe,
    title: "Optymalizacja treści",
    description: "Tworzenie i optymalizacja treści pod słowa kluczowe. H1, meta opisy, internal linking dostrojone pod algorytm Google. Content dostosowany do wyszukiwań lokalnych Olsztyna."
  },
  {
    icon: Zap,
    title: "Link building i backlinki",
    description: "Budowanie profilu backlinków z polskich stron branżowych. Gościnne artykuły, wymiana linków B2B. Naturalna, bezpieczna strategia link buildingu."
  },
  {
    icon: BarChart3,
    title: "SEO lokalne + turystyka",
    description: "Optymalizacja Google My Business, mapy, cytacje lokalne dla Olsztyna. Specjalizacja w turystyce — dominant w wynikach dla 'noclegi Mazury', 'atrakcje Olsztyn'."
  }
];

const faqItems = [
  {
    question: "Ile czasu zajmuje TOP 5 w Google dla słów z Olsztyna?",
    answer: "2-3 miesiące dla średnio zaawansowanych słów kluczowych. Olsztyn to 175k mieszkańców — niska konkurencja SEO, ogromna turystyka (2000+ jezior Mazur). Dla słów turystycznych 'noclegi Olsztyn', 'atrakcje Warmii' — nawet 4-6 tygodni. Wzrost ruchu widać w pierwszym miesiącu (30-50% +)."
  },
  {
    question: "Dlaczego SEO turystyczne dla Mazur to game changer?",
    answer: "Mazury to 'polska Hawaje' — 2000+ jezior, miliony turystów rocznie, ale mało firm optymalizuje SEO turystyczne. Większość bierze kampanie Google Ads (drogo). SEO dla 'gdzie się nocować nad Mazury', 'best lakes Poland' — to long-tail traffic z wysoką konwersją. Niska konkurencja + wysoka intencja = idealne."
  },
  {
    question: "Jak SEO rośnie sprzedaż dla hoteli i pensjonatów w Olsztynie?",
    answer: "Hotel w Olsztynie, który pojawia się w TOP 5 dla 'hotel Olsztyn', 'noclegi nad jeziorem Warmii' — to 50-100+ rezerwacji miesięcznie dodatkowych (zależy od sezonu). Sezon turystyczny (maj-wrzesień) to +300% traffic. SEO pracuje całorocznie — nie tracimy budżetu na AdWords w off-sezonie."
  },
  {
    question: "Czy warto optymalizować SEO dla branży produkcji (Michelin, Bridgestone)?",
    answer: "Zdecydowanie. Michelin i Bridgestone w Olsztynie — to B2B, dostawcy, logistyka. SEO dla 'producent opon Warmia', 'opony przemysłowe Olsztyn' — niska konkurencja, wysocy CLV. Backlinki z branżowych serwisów, content dla decydentów. Long-term investment w widoczność B2B."
  },
  {
    question: "Czy turystyka sezonowa zmienia strategię SEO?",
    answer: "Tak — ale nie tak drastycznie jak AdWords. SEO działa całorocznie. Sezon (maj-wrzesień) = większy traffic, konwersje wyższe. Off-season (październik-kwiecień) = mniej organicznego traffic, ale zawsze są lokalni i repeat guests. Strategia: long-tail content dla off-season, intensywna optimizacja przed sezonem, remarketing całorocznie."
  },
  {
    question: "Jakie słowa kluczowe turystyczne dla Olsztyna się najlepiej rankują?",
    answer: "Long-tail phrases: 'gdzie nocować nad Mazury', 'best lakes near Olsztyn', 'atrakcje Warmii i Mazur', 'wypoczynek Olsztyn rodzinnie', 'kajaki Mazury'. Unikamy 'travel Poland' (15k konkurencji) — gramy w niszach: 'eco-tourism Warmia', 'camping jeziora Olsztyn'. Niższa konkurencja + wyższa konwersja."
  },
  {
    question: "Czy uniwersytet (UWM) zmienia dynamikę SEO w Olsztynie?",
    answer: "Tak — UWM to 30k+ studentów, szkoły letnie, konferencje. SEO dla 'akademik Olsztyn', '住accommodation students Warmia' (mix języków), 'noclegi dla pracowników konferencji' — to segmenty poza turystami. B2B dla uczelni: content marketing, webinary. Poszerzamy grę poza typowe turystyczne keywordy."
  }
];

export default function PozycjonowanieOlsztyn() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Pozycjonowanie stron Olsztyn | Agencja SEO fotz.pl"
          description="Pozycjonowanie stron internetowych w Olsztynie. SEO dla firm z Warmii i Mazur. Wyższe pozycje w Google. Bezpłatna wycena!"
          canonical="https://fotz.pl/uslugi/pozycjonowanie/olsztyn"
          keywords="pozycjonowanie olsztyn, agencja seo olsztyn, seo olsztyn, pozycjonowanie stron olsztyn, seo dla firm olsztyn, seo warmia mazury, pozycjonowanie lokalne olsztyn"
        />

        <ServiceSchema
          name="Pozycjonowanie SEO Olsztyn"
          description="Pozycjonowanie stron internetowych w Olsztynie — zwiększamy widoczność firm w Google. Specjalizacja w turystyce Mazur, e-commerce hoteli, SEO dla produkcji (Michelin, Bridgestone)."
          provider="fotz.pl"
          areaServed="Olsztyn"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Usługi", url: "https://fotz.pl/uslugi" },
            { name: "Pozycjonowanie", url: "https://fotz.pl/uslugi/pozycjonowanie" },
            { name: "Pozycjonowanie Olsztyn", url: "https://fotz.pl/uslugi/pozycjonowanie/olsztyn" }
          ]}
        />
        <FAQSchema items={faqItems} />

        {/* Hero */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeIn} className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary" /> Olsztyn — turystyka Mazur
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Pozycjonowanie{" "}
                <span className="text-gradient">Olsztyn</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                SEO dla firm z Warmii i Mazur. Dominuj w Google dla turystyki Mazur, hoteli, produkcji. Wyższe pozycje, organiczny ruch, specjalizacja w sezonowości.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Olsztyn to 175k mieszkańców, capital of Warmia-Mazury. Otoczenie 2000+ jezior (polska Hawaje) przyciąga miliony turystów rocznie. Niska konkurencja SEO + ogromny potencjał turystyczny = szybkie efekty dla hoteli, pensjonatów, agencji turystycznych.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/kontakt">
                    Bezpłatna wycena <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/uslugi/pozycjonowanie">Poznaj SEO</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card/30 border-y border-border/30">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
            >
              {[
                { value: "+200%", label: "wzrost ruchu (2 mies.)" },
                { value: "TOP 5", label: "pozycje w Google" },
                { value: "4.7/5", label: "ocena (7 opinii)" },
                { value: "2 mies.", label: "czas do TOP 5" }
              ].map((s, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Olsztyn */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Olsztyn: Turystyka + Przemysł = SEO Superpower
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Turystyka Mazur",
                    desc: "2000+ jezior, miliony turystów rocznie (głównie maj-wrzesień). Miliony nieopracowanych turystycznych keywordów — to nasza arena."
                  },
                  {
                    icon: TrendingUp,
                    title: "Niska konkurencja SEO",
                    desc: "Mniej agencji niż w Warszawie — więcej szans na dominację. Firmy turystyczne raczej biorą Google Ads (drogo). SEO to przewaga."
                  },
                  {
                    icon: Zap,
                    title: "Produkcja: Michelin, Bridgestone",
                    desc: "Sektor B2B, wysokie CLV, małe budżety na marketing. SEO to idealne narzędzie dla firm produkcyjnych w Olsztynie."
                  },
                  {
                    icon: Globe,
                    title: "Uniwersytet (UWM) + turystyka naukowa",
                    desc: "30k+ studentów, konferencje, szkoły letnie. Nowy segment: akademiki, noclegi dla badaczy, konferencyjny turyzm."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-background"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Usługi SEO dla <span className="text-gradient">Olsztyna</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe podejście — audyt, optimizacja, link building, SEO turystyczne.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-primary/30 transition-colors"
                  >
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Proces pozycjonowania dla Olsztyna
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Analiza rynku turystyki Mazur",
                    desc: "Badamy branżę turystyczną, sezonowość (maj-wrzesień), konkurencję. Słowa kluczowe turystyczne, intencje gości."
                  },
                  {
                    step: "02",
                    title: "Audyt SEO + content mapping",
                    desc: "Diagnoza Twojej strony, backlinków, rankingów. Plan treści dostosowany do turystyki + B2B (jeśli applies)."
                  },
                  {
                    step: "03",
                    title: "Wdrożenie SEO turystyczne",
                    desc: "Optymalizacja dla 'noclegi Olsztyn', 'atrakcje Mazur', Google My Business, reviews. Sezonowe skalowanie kampanii."
                  },
                  {
                    step: "04",
                    title: "Monitoring + optimizacja sezonowa",
                    desc: "Tracking rankingów, ruchu, konwersji. Pre-season boost (marzec-kwiecień), max intensity (maj-wrzesień), off-season remarketing."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex gap-6 p-6 rounded-2xl border border-border/40 bg-background"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-primary text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2 text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Rezultaty SEO turystyki Warmii i Mazur
                </h2>
              </motion.div>

              <div className="space-y-4">
                {[
                  { metric: "Wzrost rezerwacji", result: "+50-100+ noclegi/miesiąc (sezon)", icon: TrendingUp },
                  { metric: "Organiczny ruch turystów", result: "+200-300% w sezonie (maj-wrzesień)", icon: Star },
                  { metric: "Pozycje TOP 5", result: "Dla 'noclegi Olsztyn', 'atrakcje Mazury'", icon: Award },
                  { metric: "Roczna widoczność", result: "SEO działa 12 miesięcy — nie tracisz w off-sezonie", icon: Target }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex items-center gap-4 p-6 rounded-2xl border border-border/40 bg-card/20"
                  >
                    <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-heading font-semibold">{item.metric}</p>
                      <p className="text-sm text-muted-foreground">{item.result}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary/90 to-[#0F3053]/90">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Sezon turystyczny zbliża się — przygotuj SEO
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna wycena SEO turystyki — analiza Twojej branży, konkurencji, szans w Olsztynie. Konkretne liczby, realistyczne osie czasu.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Link to="/kontakt">
                    Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  FAQ — SEO turystyka Olsztyn i Warmia-Mazury
                </h2>
              </motion.div>

              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border/40 rounded-xl px-6 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="py-4 hover:no-underline text-left font-heading font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="py-12 border-t border-border/30 bg-card/20">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">
              Inne miasta
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Agencja marketingowa Olsztyn", to: "/agencja-marketingowa-olsztyn" },
                { label: "Pozycjonowanie Opole", to: "/uslugi/pozycjonowanie/opole" },
                { label: "Agencja marketingowa Opole", to: "/agencja-marketingowa-opole" },
                { label: "Wszystkie usługi SEO", to: "/uslugi/pozycjonowanie" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
}
