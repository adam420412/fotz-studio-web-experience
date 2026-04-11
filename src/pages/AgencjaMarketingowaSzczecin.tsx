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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Szczecina. Szybkie, zoptymalizowane pod SEO i konwersję. Dedykowana obsługa dla firm portowych i cross-border e-commerce."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Szczecin — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym i cross-border (niemiecki, angielski rynek)."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie dla firm z Szczecina. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Efektywne dla handlu, e-commerce, usług portowych. Dual targeting — lokalni klienci + niemiecki/międzynarodowy rynek (DACH)."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Szczecin — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie zasięgowe dla firm portowych i e-commerce. LinkedIn dla B2B maritime."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla firm portowych, e-commerce, tech startupów. Spójna wizualna tożsamość przekłada się na wyższe ceny i konwersje."
  }
];

const faqItems = [
  {
    question: "Jak prowadzić marketing dla firm portowych w Szczecinie?",
    answer: "Szczecin to 400k+ mieszkańców, major seaport (Baltic trade hub), US Army garrison/NATO. Marketing dla portowych firm: B2B targeting (LinkedIn campaigns dla shipping, logistics), Google Ads dla procurement, content marketing (white papers, case studies), SEO dla branżowych fraz. Międzynarodowe targeting — polski + niemiecki + angielski rynek."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Szczecina?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Szczecina i zachodniopomorskiego. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Format online nie wpływa na jakość kampanii — szczególnie dla sektora portowego/maritime, gdzie specjalizacja branżowa liczy się bardziej niż lokalizacja."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Szczecinie?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Dla firm portowych dodatkowy koszt to międzynarodowe kampanie (niemiecki, angielski, B2B targeting). Każdą wycenę poprzedzamy bezpłatną konsultacją znającą specyfikę szczecińskiego rynku portowo-handlowego."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Szczecina?",
    answer: "Główne wyzwania: sektor portowy wymaga specjalistycznej wiedzy (maritime terminology, international B2B), niemiecki border proximity wymaga multilingual campaigns, konkurencja przychodzi z warszawskich/gdańskich agencji. Ale — Szczecin to emerging market dla digital, DACH market access to unikalna szansa. Marketing musi być precyzyjny, branżowo-specjalistyczny, międzynarodowy."
  },
  {
    question: "Czy oferujecie marketing dla cross-border e-commerce (Niemcy, DACH) z Szczecina?",
    answer: "Tak — to nasz core market dla Szczecina. Cross-border e-commerce: Google Ads (niemiecki, angielski keywords), Meta Ads (targeting niemiecki rynek + lokalni klienci), SEO dla wielojęzycznych kampanii, content marketing (produkty dla DACH rynku), Shopify/WooCommerce optimization dla międzynarodowych konwersji. Znamy specyfikę DACH market (Germany, Austria, Switzerland)."
  },
  {
    question: "Jak budować widoczność firmy portowej/maritime w Szczecinie przez cały rok?",
    answer: "Marketing całoroczny dla sektora portowego: LinkedIn campaigns (thought leadership dla decision makers), Google Ads (procurement keywords), content marketing (artykuły branżowe, white papers), SEO (branżowe frazy, lokalne pozycjonowanie), industry events presence (targach, konferencjach). Dual strategy — polski + niemiecki/międzynarodowy rynek."
  },
  {
    question: "Jakie są możliwości growth marketing dla startup'ów e-commerce w Szczecinie?",
    answer: "Growth marketing dla e-commerce startupów: Google Ads (szybki traffic dla sprzedaży), SEO (long-tail keywords dla niszy), Meta Ads (low-cost traffic via Instagram), content marketing (product reviews, blogs), email marketing dla repeat customers, partnerships z innymi e-commerce biznesami. Budżety zazwyczaj mniejsze (1 000–3 000 PLN/mies), więc skupiamy się na high-ROI kanałach."
  }
];

export default function AgencjaMarketingowaSzczecin() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Szczecin | fotz.pl – Marketing dla firm"
          description="Agencja marketingowa w Szczecinie. Marketing online dla firm z zachodniopomorskiego. SEO, reklamy, social media. Bezpłatna wycena!"
          canonical="https://fotz.pl/agencja-marketingowa-szczecin"
          keywords="agencja marketingowa Szczecin, marketing zachodniopomorskie, agencja SEO Szczecin, port, e-commerce, DACH, Google Ads, social media"
        />

        <ServiceSchema
          name="Agencja Marketingowa Szczecin"
          description="Kompleksowe usługi marketingu internetowego dla firm z Szczecina — SEO, Google Ads, Meta Ads, social media, specjalizacja w sektorze portowym i cross-border e-commerce."
          provider="Fotz Studio"
          areaServed="Szczecin"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Szczecin", url: "https://fotz.pl/agencja-marketingowa-szczecin" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Szczecin, Zachodniopomorskie — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Szczecin</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Szczecina i zachodniopomorskiego. SEO, Google Ads, Meta Ads, social media, strony internetowe — specjalizacja w sektorze portowym i cross-border e-commerce.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Szczecin to 400k+ mieszkańców, major seaport (Baltic trade hub), German border proximity (DACH market access), US Army garrison/NATO presence. Cross-border e-commerce, maritime, shipbuilding transition to tech. Marketing wymaga specjalizacji międzynarodowej — my ją mamy.
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
                { value: "+260%", label: "wzrost ruchu (3 miesiące)" },
                { value: "TOP 5", label: "pozycje w Google" },
                { value: "4.8/5", label: "ocena (12 opinii)" },
                { value: "170+", label: "zrealizowanych kampanii" }
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
                  Usługi marketingowe dla Szczecina i{" "}
                  <span className="text-gradient">DACH market</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do specyfiki rynku szczecińskiego — port, e-commerce, maritime i cross-border.
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
                  <span className="text-gradient">Szczecina?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu portowym, maritime i cross-border.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie w B2B maritime",
                    desc: "Rozumiemy sektor portowy, maritime, logistics B2B. Wiemy, jak targetować decydentów, procurement specialists, shipping companies. Specjalistyczna wiedza branżowa."
                  },
                  {
                    icon: TrendingUp,
                    title: "Specjalizacja cross-border",
                    desc: "Szczecin to German border proximity — znamy DACH marketing (niemiecki, austriacki, szwajcarski rynek). Multilingual campaigns, international SEO, DACH-focused ad strategies."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Znający specyfikę Szczecina, sektor portowy, międzynarodowy handlowy, DACH market. Stały kontakt, nie rotacja juniorów."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla międzynarodowego hub'a",
                    desc: "Szczecin to Baltic trade hub z US Army/NATO — znamy international B2B targeting, multilingual content, cross-border e-commerce strategies, DACH market dynamics."
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
                Skaluj sprzedaż — port, maritime, cross-border e-commerce
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut. Omówimy Twoją sytuację, sektor i zaproponujemy strategię dostosowaną do rynku Szczecina i DACH market.
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
                  Najczęstsze pytania — agencja marketingowa Szczecin
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
                { label: "Agencja marketingowa Bydgoszcz", to: "/agencja-marketingowa-bydgoszcz" },
                { label: "Agencja marketingowa Toruń", to: "/agencja-marketingowa-torun" },
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
