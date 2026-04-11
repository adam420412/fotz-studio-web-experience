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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Bydgoszczy. Szybkie, zoptymalizowane pod SEO i konwersję. Dedykowana obsługa dla firm logistyki i produkcji."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Bydgoszcz — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla firm logistyczno-produkcyjnych."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie dla firm z Bydgoszczy i regionu. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Efektywne dla handlu, logistyki i usług. Dual targeting — lokalni klienci + rynek B2B."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Bydgoszcz — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie zasięgowe dla firm logistycznych i produkcyjnych. LinkedIn strategy dla B2B."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla firm produkcji i logistyki. Spójna wizualna tożsamość przekłada się na wyższe ceny i konwersje."
  }
];

const faqItems = [
  {
    question: "Jak prowadzić marketing dla firm logistyki w Bydgoszczy?",
    answer: "Logistyka w Bydgoszczy to 360k+ mieszkańców, 6. największe miasto w Polsce, Bydgoszcz Industrial Park (Alcatel-Lucent, Boryszew). Marketing wymaga B2B targetingu: LinkedIn campaigns, Google Ads dla branżowych fraz, content marketing dla decydentów. SEO na долгиterminową widoczność."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Bydgoszczy?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Bydgoszczy i regionu kujawsko-pomorskiego. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Format online nie wpływa na jakość kampanii — szczególnie dla sektora logistyki, gdzie specjalizacja liczy się bardziej niż lokalizacja."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Bydgoszczy?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Dla firm logistyki dodatkowy koszt to B2B targeting i LinkedIn campaigns. Każdą wycenę poprzedzamy bezpłatną konsultacją znającą specyfikę bydgoskiego rynku."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Bydgoszczy?",
    answer: "Główne wyzwania: tradycyjnie mniej firm inwestuje w digital marketing, konkurencja przychodzi z warszawskich agencji, sektor produkcji/logistyki wymaga specjalistycznego podejścia. Ale — Bydgoszcz to rosnący hub, a konkurencja jest niższa niż w warszawie/krakowie. Marketing musi być precyzyjny, B2B i skoncentrowany na high-intent prospects."
  },
  {
    question: "Czy oferujecie marketing dla produkcji i firm technicznych w Bydgoszczy?",
    answer: "Tak — obsługujemy firmy z sektora produkcji (Alcatel-Lucent, Boryszew, Bydgoszcz Industrial Park). Marketing dla produkcji: Google Ads dla zakupów B2B, LinkedIn campaigns dla menedżerów, content marketing (case studies, white papers), SEO dla fraz technicznych. Łączymy B2B expertise z wiedzą o bydgoskim rynku przemysłowym."
  },
  {
    question: "Ile czasu potrzeba, aby zobaczyć wyniki SEO w Bydgoszczy?",
    answer: "SEO to długoterminowa inwestycja. Pierwsze rezultaty w 2–3 miesiące (traffic, pozycje na stronach 2–3 Google). Pozycje TOP 3 zazwyczaj w 3–6 miesięcy, zależy od konkurencji. W Bydgoszczy konkurencja jest niższa niż w dużych miastach — wzrost rankingu może być szybszy. Całoroczna kampania SEO to standard dla solidnych wyników."
  },
  {
    question: "Jakie są możliwości growth marketing dla firm logistycznych w Bydgoszczy?",
    answer: "Growth marketing dla logistyki: Google Ads dla leads/zapytań (szybki ROI), SEO dla long-tail keywords (stały ruch), LinkedIn campaigns dla decision makers (targeting C-level), content marketing (artykuły branżowe, webinary), email nurturing. Bydgoszcz to emerging market dla digital — early mover może mieć przewagę nad konkurencją."
  }
];

export default function AgencjaMarketingowaBydgoszcz() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Bydgoszcz | fotz.pl – Marketing dla firm"
          description="Agencja marketingowa w Bydgoszczy. Skuteczny marketing internetowy dla firm z Bydgoszczy i regionu kujawsko-pomorskiego. Sprawdź!"
          canonical="https://fotz.pl/agencja-marketingowa-bydgoszcz"
          keywords="agencja marketingowa Bydgoszcz, marketing kujawsko-pomorskie, agencja SEO Bydgoszcz, logistyka, produkcja, Google Ads, social media"
        />

        <ServiceSchema
          name="Agencja Marketingowa Bydgoszcz"
          description="Kompleksowe usługi marketingu internetowego dla firm z Bydgoszczy — SEO, Google Ads, Meta Ads, social media, specjalizacja w logistyce i produkcji."
          provider="Fotz Studio"
          areaServed="Bydgoszcz"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Bydgoszcz", url: "https://fotz.pl/agencja-marketingowa-bydgoszcz" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Bydgoszcz, Kujawsko-Pomorskie — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Bydgoszcz</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Bydgoszczy i regionu kujawsko-pomorskiego. SEO, Google Ads, Meta Ads, social media, strony internetowe — specjalizacja w logistyce i produkcji.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Bydgoszcz to 360k+ mieszkańców, 6. największe miasto w Polsce. Rosnący IT/logistics hub: Bydgoszcz Industrial Park (Alcatel-Lucent, Boryszew), strong manufacturing sector, Bydgoszcz Airport. Niższa konkurencja digital niż Warszawa/Kraków — idealnie dla growth marketing.
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
                { value: "+270%", label: "wzrost ruchu (3 miesiące)" },
                { value: "TOP 3", label: "pozycje w Google" },
                { value: "4.8/5", label: "ocena (11 opinii)" },
                { value: "160+", label: "zrealizowanych kampanii" }
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
                  Usługi marketingowe dla Bydgoszczy i{" "}
                  <span className="text-gradient">regionu</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do specyfiki rynku bydgoskiego — logistyka, produkcja i B2B.
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
                  <span className="text-gradient">Bydgoszczy?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu logistyki i produkcji.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie w B2B marketing",
                    desc: "Rozumiemy logistykę, produkcję, B2B procurement. Wiemy, jak targetować menedżerów, decision makers, procurement specialists."
                  },
                  {
                    icon: TrendingUp,
                    title: "Specjalizacja branżowa",
                    desc: "Logistyka i produkcja mają inne metrics niż retail. Znamy procurement cycles, lead times, B2B buyer journeys. Expert approach to complex B2B sales."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Znający specyfikę Bydgoszczy, dynamikę rynku logistyki, Industrial Park, konkurencję lokalną. Stały kontakt, nie rotacja juniorów."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla hub'a logistyki",
                    desc: "Bydgoszcz to growing logistics hub — znamy international campaigns, LinkedIn targeting, B2B nurturing, kompleksowe procurement strategies."
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
                Skaluj marketing dla logistyki i produkcji w Bydgoszczy
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut. Omówimy Twoją sytuację, sektor i zaproponujemy strategię dostosowaną do rynku Bydgoszczy i kujawsko-pomorskiego.
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
                  Najczęstsze pytania — agencja marketingowa Bydgoszcz
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
                { label: "Agencja marketingowa Rzeszów", to: "/agencja-marketingowa-rzeszow" },
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
