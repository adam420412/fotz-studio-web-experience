import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star, Building2, Globe, Target, MapPin, TrendingUp, Users, Award, Zap, Shield } from "lucide-react";
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
    icon: Globe,
    title: "Strony i sklepy internetowe",
    description: "Responsywne strony www i e-commerce dla firm z Opola. Zoptymalizowane pod SEO i konwersję. Dedykowana obsługa dla branży chemicznej i KFPP."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Opole — zwiększamy widoczność w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w cross-border B2B z Niemcami."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Google Ads dla firm z Opola — search, shopping, display. Optymalizacja dla branży chemicznej, turystyki KFPP, e-commerce. Budżety 1 500–10 000+ PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Facebook i Instagram ads — precyzyjne targetowanie. Efektywne dla KFPP (sezonowe), firm produkcyjnych, e-commerce. Kampanie w PL i DE dla cross-border B2B."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Prowadzenie profili Instagram, Facebook, LinkedIn dla firm z Opola. Treści dla produkcji, turystyki, KFPP. Sezonowe strategie dla eventów."
  },
  {
    icon: Building2,
    title: "Branding i identyfikacja wizualna",
    description: "Logo, brandbook, identyfikacja wizualna dla firm opolskich. Spójna wizualna tożsamość marki — ważna dla cross-border B2B i prestiżu w branży chemii."
  }
];

const faqItems = [
  {
    question: "Jaka jest specyfika marketingu dla firm z Opola?",
    answer: "Opole to unikalny rynek: 130k mieszkańców, małe voivodztwo, ale SILNE połączenia z Niemcami (mniejszość niemiecka, biznes transgraniczny). Główne sektory: Zakłady Chemiczne, produkcja, kolej, turystyka KFPP. Marketing musi być bilingual — polski + niemiecki. Mniejsza konkurencja = większe efekty z SEO i kampanii cyfrowych."
  },
  {
    question: "Czy warto inwestować w marketing dla branży chemicznej w Opolu?",
    answer: "Zdecydowanie. Zakłady Chemiczne Opole to sektor B2B, dostawcy, logistyka — wysoki CLV. Firma szukająca dostawcy chemikaliów wpisze 'Opole producent' — to wysokie szanse na transakcję. Marketing B2B (SEO, content, LinkedIn) działa długoterminowo — buduje widoczność, autorytет i zaufanie dostawcy."
  },
  {
    question: "Jak marketować KFPP (Krajowy Festiwal Piosenki Polskiej)?",
    answer: "KFPP to 60+ lat historii, największy polski festival piosenki. Marketing wymaga: content (artykuły o historii, artystach), kampanie Meta Ads w sezonie, SEO dla 'Opole KFPP 2024', sponsoring, influencer marketing. Turystyka eventowa — szansa na sezonowe sprzedaży hoteli, restauracji, biletów. Dual marketing: dla turystów + dla mediów/sponsorów."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Opola?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym Opole. Współpraca online (Teams, Meet). Ponad 40% klientów z różnych miast. Format online nie wpływa na jakość — szczególnie dla firm wymagających specjalistycznego podejścia (cross-border, branża chemii, turystyka eventowa). Znamy specyfikę Opola."
  },
  {
    question: "Ile kosztuje agencja marketingowa dla firmy z Opola?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa (SEO, Google Ads, social, content) od 5 000–15 000 PLN/mies. Dla branży chemicznej dodatkowy koszt: content B2B, backlinki branżowe, LinkedIn campaigns. Każdą wycenę poprzedzamy bezpłatną konsultacją znającą rynek Opola."
  },
  {
    question: "Czy marketing w 2 językach (PL+DE) kosztuje więcej?",
    answer: "Tak — marketing cross-border wymaga dodatkowej pracy (tłumaczenia, backlinki DE, LinkedIn DE, kampanie dwujęzyczne). Koszt +20-30% vs monojęzyczny. Ale ROI jest wyższy — otwierasz niemiecki rynek B2B, co dla Opola to strategiczna przewaga. Polecamy dla firm o ambicjach transgranicznych."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Opola?",
    answer: "Główne wyzwania: mała populacja (130k) = mniejszy rynek lokalny, KFPP to sezon (marzec-maj, turystyka) vs off-season, konkurencja z większych miast o talent i zasoby, cross-border wymaga specjalizacji (PL+DE). Ale to też SZANSE — niska konkurencja SEO, high CLV B2B, turystyka eventowa, mniejsza agencja nie pyta o Opole. My specjalizujemy się w niszy."
  }
];

export default function AgencjaMarketingowaOpole() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Opole | fotz.pl – Marketing dla firm"
          description="Agencja marketingowa w Opolu. Marketing internetowy dla firm z Opolszczyzny. SEO, Google Ads, social media. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/agencja-marketingowa-opole"
          keywords="agencja marketingowa Opole, marketing Opole, agencja SEO Opole, kampanie Google Ads Opole, social media Opole"
        />

        <ServiceSchema
          name="Agencja Marketingowa Opole"
          description="Kompleksowe usługi marketingu internetowego dla firm z Opola — SEO, Google Ads, Meta Ads, social media, branding. Specjalizacja w branży chemii, turystyce KFPP, cross-border B2B z Niemcami."
          provider="fotz.pl"
          areaServed="Opole"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Opole", url: "https://fotz.pl/agencja-marketingowa-opole" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Opole — transgraniczny B2B
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Opole</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Opola. SEO, Google Ads, Meta Ads, social media, strony internetowe — specjalizacja w branży chemii, turystyce KFPP, cross-border B2B z Niemcami.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Opole to 130k mieszkańców, małe voivodztwo z bogatą historią biznesową — Zakłady Chemiczne, kolej, KFPP (największy polski festival piosenki). Silne połączenia z Niemcami (mniejszość niemiecka) = transgraniczna szansa B2B. Niska konkurencja marketingowa = duże efekty.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/realizacje">Zobacz realizacje</Link>
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
                { value: "+200%", label: "wzrost ruchu (3 mies.)" },
                { value: "TOP 5", label: "pozycje w Google" },
                { value: "4.7/5", label: "ocena (8 opinii)" },
                { value: "150+", label: "kampanii wdrożonych" }
              ].map((s, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
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
                  Usługi marketingowe dla <span className="text-gradient">Opola</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do specyfiki rynku opolskiego — branża chemii, KFPP, cross-border B2B.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Why Choose Us */}
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
                  Dlaczego fotz.pl dla biznesu z{" "}
                  <span className="text-gradient">Opola?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w niszy B2B, turystyce eventowej i marketingu transgranicznych.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Specjalizacja w branży chemii",
                    desc: "Rozumiemy B2B, długie cykle sprzedaży, wysokie CLV. Kampanie SEO, content, LinkedIn dostrojone dla branży produkcji chemicznej."
                  },
                  {
                    icon: TrendingUp,
                    title: "Marketing KFPP i turystyki eventowej",
                    desc: "Doświadczenie w sezonowych kampaniach — festival wymaga innego podejścia niż hotele. Znamy piki sezonowe, media, sponsoring."
                  },
                  {
                    icon: Users,
                    title: "Cross-border B2B (Polska + Niemcy)",
                    desc: "Mniejszość niemiecka w Opolu + silne połączenia biznesowe z DE. Kampanie bilingual, backlinki z DE, LinkedIn DE campaigns — nasza specjalność."
                  },
                  {
                    icon: Globe,
                    title: "Dedykowany ekspert Opola",
                    desc: "Znający Zakłady Chemiczne, KFPP, sektor logistyki, konkurencję lokalną. Stały kontakt, nie rotacja juniorów. Strategia dostosowana do Opola."
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
                Przygotuj strategię marketingową dla Opola
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut. Omówimy Twoją sytuację, branżę, szanse cross-border i zaproponujemy strategię dla rynku opolskiego.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Link to="/kontakt">
                    Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.p variants={fadeIn} className="text-white/50 text-xs mt-6">
                Odpowiadamy w ciągu 24 godzin · Bez sprzedaży pod presją
              </motion.p>
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
                  FAQ — agencja marketingowa Opole
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
              Pozostałe miasta
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Pozycjonowanie Opole", to: "/uslugi/pozycjonowanie/opole" },
                { label: "Agencja marketingowa Olsztyn", to: "/agencja-marketingowa-olsztyn" },
                { label: "Pozycjonowanie Olsztyn", to: "/uslugi/pozycjonowanie/olsztyn" },
                { label: "Agencja marketingowa Warszawa", to: "/agencja-marketingowa-warszawa" },
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
