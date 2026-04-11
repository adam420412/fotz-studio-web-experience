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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Rzeszowa. Szybkie, zoptymalizowane pod SEO i konwersję. Dedykowana obsługa dla firm Aviation Valley i BPO/SSC."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Rzeszów — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla firm technologicznych i outsourcingu."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie dla firm z Podkarpacia. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Efektywne dla firm technologicznych, BPO i handlu. Dual targeting — lokalni klienci + rynek międzynarodowy."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Rzeszów — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie zasięgowe dla firm tech i usług. LinkedIn campaigns dla sektora B2B."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla firm technologicznych i startupów. Spójna wizualna tożsamość przekłada się na wyższe ceny i konwersje."
  }
];

const faqItems = [
  {
    question: "Jak prowadzić marketing dla firm Aviation Valley w Rzeszowie?",
    answer: "Aviation Valley to 25k+ pracowników (MTU, Pratt & Whitney, Safran). Marketing wymaga specjalistycznego podejścia: B2B targeting, LinkedIn campaigns, content marketing dla inżynierów i menedżerów. SEO dla branżowych fraz technicznych. Konkurencja jest, ale mniej firmy specjalizują się w tech marketing niż na zachodzie kraju."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Rzeszowa?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Rzeszowa i Podkarpacia. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Format online nie wpływa na jakość kampanii — szczególnie dla sektora tech, gdzie specjalizacja liczy się bardziej niż lokalizacja."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Rzeszowie?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Dla firm Aviation Valley dodatkowy koszt to strategiczne content marketing (artykuły techniczne, case studies). Każdą wycenę poprzedzamy bezpłatną konsultacją znającą specyfikę rzeszowskiego rynku tech."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Rzeszowa i Podkarpacia?",
    answer: "Główne wyzwania: mniej firm specjalizuje się w tech marketing, konkurencja przychodzi z warszawskich i krakowskich agencji, sektor Aviation Valley wymaga specjalistycznej wiedzy branżowej, BPO/SSC szuka taniej, ale wymaga solidności. Marketing musi być dual — dla firm tech/Aviation Valley + dla lokalnych usług. Rzeszów to hub wzrostu, ale wymaga dobrze skomponowanej strategii."
  },
  {
    question: "Czy oferujecie marketing dla BPO i SSC w Rzeszowie?",
    answer: "Tak — obsługujemy firmy z sektora BPO/SSC (Asseco Poland HQ, major IT investments). Marketing dla tego sektora: Google Ads dla rekrutacji, LinkedIn campaigns dla kandydatów, content marketing (employer branding), SEO dla fraz rekrutacyjnych. Połączenie B2B + HR targeting."
  },
  {
    question: "Jakie są możliwości growth marketing dla startupów w Rzeszowie?",
    answer: "Rzeszów ma rosnący ekosystem startupowy. Growth marketing dla startupów: SEO organiczny (długoterminowy), Google Ads (szybki lead gen), social media (brand building), content marketing (thought leadership). Budżety zazwyczaj mniejsze (1 000–3 000 PLN/mies), więc skupiamy się na high-ROI kanałach. MVP kampanii, następnie skalowanie."
  },
  {
    question: "Ile czasu potrzeba, aby zobaczyć wyniki SEO w Rzeszowie?",
    answer: "SEO to długoterminowa inwestycja. Pierwsze rezultaty w 2–3 miesiące (traffic, pozycje na stronach 2–3 Google). Pozycje TOP 3 zazwyczaj w 3–6 miesięcy, zależy od konkurencji. W Rzeszowie konkurencja jest niższa niż w dużych miastach — wzrost rankingu może być szybszy. Całoroczna kampania SEO to standard dla solidnych wyników."
  }
];

export default function AgencjaMarketingowaRzeszow() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Rzeszów | fotz.pl – Marketing dla firm"
          description="Agencja marketingowa w Rzeszowie. Profesjonalne usługi marketingowe dla firm z Podkarpacia. SEO, reklamy Google, social media. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/agencja-marketingowa-rzeszow"
          keywords="agencja marketingowa Rzeszów, marketing Podkarpacie, agencja SEO Rzeszów, Aviation Valley, BPO, Google Ads, social media"
        />

        <ServiceSchema
          name="Agencja Marketingowa Rzeszów"
          description="Kompleksowe usługi marketingu internetowego dla firm z Rzeszowa i Podkarpacia — SEO, Google Ads, Meta Ads, social media, specjalizacja w Aviation Valley i BPO."
          provider="Fotz Studio"
          areaServed="Rzeszów"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Rzeszów", url: "https://fotz.pl/agencja-marketingowa-rzeszow" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Rzeszów, Podkarpacie — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Rzeszów</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Rzeszowa i Podkarpacia. SEO, Google Ads, Meta Ads, social media, strony internetowe — specjalizacja w Aviation Valley, BPO i startupach technologicznych.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Rzeszów to 230k+ mieszkańców, fastest-growing city w Polsce (+30% za 20 lat). Aviation Valley: MTU, Pratt & Whitney, Safran (25k+ pracowników). Asseco Poland HQ. Rosnący ekosystem startupów. Marketing wymaga wiedzy branżowej — my ją mamy.
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
                { value: "+300%", label: "wzrost ruchu (3 miesiące)" },
                { value: "TOP 5", label: "pozycje w Google" },
                { value: "4.9/5", label: "ocena (9 opinii)" },
                { value: "150+", label: "zrealizowanych kampanii" }
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
                  Usługi marketingowe dla Rzeszowa i{" "}
                  <span className="text-gradient">Podkarpacia</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do specyfiki rynku rzeszowskiego — tech, Aviation Valley, BPO i startup'y.
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
                  <span className="text-gradient">Rzeszowa?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu tech, Aviation Valley i startupów.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie w marketingu tech",
                    desc: "Rozumiemy Aviation Valley, BPO, startup'y. Wiemy, jak targetować inżynierów, menedżerów, kandydatów. B2B marketing to nasz fundament."
                  },
                  {
                    icon: TrendingUp,
                    title: "Specjalizacja branżowa",
                    desc: "Aviation Valley wymaga wiedzy technologicznej. BPO — employer branding. Startup'y — growth hacking. Każdy sektor inny — my to rozumiemy."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Znający specyfikę Rzeszowa, dynamikę rynku tech, konkurencję lokalną. Stały kontakt, nie rotacja juniorów."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla hub'a technologicznego",
                    desc: "Rzeszów to fastest-growing hub tech w Polsce — znamy anglojęzyczne kampanie, B2B targeting, recruitment marketing, scaling dla startupów."
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
                Skaluj marketing dla Aviation Valley i BPO
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut. Omówimy Twoją sytuację, branżę i zaproponujemy strategię dostosowaną do rynku Rzeszowa i Podkarpacia.
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
                  Najczęstsze pytania — agencja marketingowa Rzeszów
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
                { label: "Agencja marketingowa Gdańsk", to: "/agencja-marketingowa-gdansk" },
                { label: "Agencja marketingowa Bydgoszcz", to: "/agencja-marketingowa-bydgoszcz" },
                { label: "Agencja marketingowa Toruń", to: "/agencja-marketingowa-torun" },
                { label: "Agencja marketingowa Szczecin", to: "/agencja-marketingowa-szczecin" },
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
