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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Gdańska i Trójmiasta. Szybkie, zoptymalizowane pod SEO i konwersję. Dedykowana obsługa dla biznesów turystycznych i logistyki B2B."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Gdańsk — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla Gdańska, Gdyni i Sopotu (Trójmiasto)."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie dla firm gdańskich. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Efektywne dla turystyki sezonowej (maj-wrzesień +150-300%), e-commerce i usług B2B. Dual targeting — turystyka + lokalni klienci."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Gdańsk — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie zasięgowe dla turystyki i logistyki. Dual strategy: sezonowe spiky oraz trwały brand building."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla firm turystycznych i logistycznych. Spójna wizualna tożsamość marki przekłada się na wyższe ceny i lepsze konwersje."
  }
];

const faqItems = [
  {
    question: "Jak prowadzić marketing dla firm turystycznych w Gdańsku?",
    answer: "Turystyka w Gdańsku to sezonowy business — maj-wrzesień to +150-300% wzrostu ruchu. Marketing musi być dual: kampanie Google Ads i Meta Ads dostrojone pod wysokie CPL w sezonie letnim, jednocześnie budując trwały brand awareness. Weekendy wymagają kreatywności i precyzyjnego targetowania. Pozycjonowanie organiczne (SEO) działa całorocznie — to fundament widoczności."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Gdańska?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Gdańska, Gdyni i Sopotu (Trójmiasto). Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Format online nie wpływa na jakość kampanii — szczególnie dla firm turystycznych, gdzie kampanie są sezonowo zmieniające się i wymagają elastyczności."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Gdańsku?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Dla firm turystycznych dodatkowy koszt to sezonowe skalowanie kampanii (wiosna/lato). Każdą wycenę poprzedzamy bezpłatną konsultacją znającą specyfikę Trójmiasta."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Gdańska i Trójmiasta?",
    answer: "Główne wyzwania: sezonowość turystyki (80% sprzedaży maj-wrzesień), wysoki CPL w sezonie, konkurencja z dużych portali turystycznych, B2B logistyka wymagająca innego podejścia. Marketing musi być dual — dla turystów + dla biznesów (Intel, Asseco, operatorzy portowe). Efektywne kampanie to te, które rozumieją tę dualność Gdańska."
  },
  {
    question: "Czy oferujecie marketing dla logistyki i portów w Gdańsku?",
    answer: "Tak — obsługujemy firmy B2B z sektora logistyki i portów. Gdańsk to europejski hub logistyki — Asseco, Intel, operatorzy portowi. Marketing dla tego sektora to inny approach: LinkedIn campaigns, content marketing dla decydentów, SEO dla branżowych fraz. Łączymy doświadczenie B2B z wiedzą o gdańskim rynku portowym."
  },
  {
    question: "Jak budować widoczność firmy turystycznej w Gdańsku przez cały rok?",
    answer: "Marketing całoroczny dla turystyki: SEO (organiczny, trwały ruch), Google Ads (sezonowo skalowane), content marketing (artykuły, blogi o Gdańsku), social media (Instagram, TikTok dla młodszych turystów). W sezonie (maj-wrzesień) intensywne kampanie Meta Ads i Google Ads, w off-sezonie — content, remarketing, email marketing do wcześniejszych gości."
  }
];

export default function AgencjaMarketingowaGdansk() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Gdańsk — Marketing Trójmiasto | Fotz Studio"
          description="Agencja marketingowa Gdańsk i Trójmiasto. Fotz Studio — strony WWW, SEO, Google Ads, social media. Sezonowy marketing turystyczny. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/agencja-marketingowa-gdansk"
          keywords="agencja marketingowa Gdańsk, marketing Trójmiasto, agencja SEO Gdańsk, kampanie turystyczne, logistyka B2B, Google Ads, social media"
        />

        <ServiceSchema
          name="Agencja Marketingowa Gdańsk"
          description="Kompleksowe usługi marketingu internetowego dla firm z Gdańska i Trójmiasta — SEO, Google Ads, Meta Ads, social media, turystyka i logistyka B2B."
          provider="Fotz Studio"
          areaServed="Gdańsk"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Gdańsk", url: "https://fotz.pl/agencja-marketingowa-gdansk" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Gdańsk, Gdynia, Sopot — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Gdańsk</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Gdańska i Trójmiasta. SEO, Google Ads, Meta Ads, social media, strony internetowe — specjalizacja w turystyce sezonowej i logistyce B2B.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Gdańsk to 750k+ mieszkańców, europejski hub logistyki, Intel Technology Poland, Asseco — i magnes turystyki (12M+ turystów rocznie). Sezonowe kampanie (maj-wrzesień +150-300% ruchu) wymagają specjalistycznego podejścia. Fotz Studio zna specyfikę gdańskiego rynku.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/realizacje">Zobacz nasze realizacje</Link>
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
                { value: "+340%", label: "wzrost ruchu (3 miesiące)" },
                { value: "TOP 3", label: "pozycje w Google" },
                { value: "4.9/5", label: "ocena (19 opinii)" },
                { value: "200+", label: "zrealizowanych kampanii" }
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
                  Usługi marketingowe dla Gdańska i{" "}
                  <span className="text-gradient">Trójmiasta</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do specyfiki rynku gdańskiego — turystyka sezonowa i logistyka B2B.
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
                  Dlaczego Fotz Studio dla biznesu z{" "}
                  <span className="text-gradient">Gdańska?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu sezonowym i turystycznym.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie w marketingu turystycznym",
                    desc: "Rozumiemy wyzwania sezonowe — maj-wrzesień to 150-300% wzrost. Kampanie skalowane sezonowo, content dostrojony pod turystów."
                  },
                  {
                    icon: TrendingUp,
                    title: "Dual market expertise",
                    desc: "Obsługujemy zarówno turystykę jak i B2B logistykę. Jedno podejście nie wystarczy — dostosowujemy strategie do sektora."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Znający specyfikę Trójmiasta, sezonowość turystyki, konkurencję lokalną. Stały kontakt, nie rotacja juniorów."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla europejskiego hub'a",
                    desc: "Gdańsk to hub logistyki UE — znamy anglojęzyczne kampanie, B2B targeting, konwersje dla firm międzynarodowych."
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
                Maksymalizuj przychody sezonowe — zaplanuj marketing dla turystyki i B2B
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut. Omówimy Twoją sytuację, sezonowość i zaproponujemy strategię dostosowaną do rynku Gdańska.
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
                  Najczęstsze pytania — agencja marketingowa Gdańsk
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
                { label: "Agencja marketingowa Warszawa", to: "/agencja-marketingowa-warszawa" },
                { label: "Agencja marketingowa Łódź", to: "/agencja-marketingowa-lodz" },
                { label: "Agencja marketingowa Kraków", to: "/agencja-marketingowa-krakow" },
                { label: "Agencja marketingowa Lublin", to: "/agencja-marketingowa-lublin" },
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
