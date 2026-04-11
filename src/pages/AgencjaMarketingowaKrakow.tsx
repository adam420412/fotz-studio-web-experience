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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Krakowa. Szybkie, zoptymalizowane pod SEO i konwersję. Shopify, WooCommerce, Next.js — kompleksowe rozwiązania dla największych firm Krakowa."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Kraków — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO dla e-commerce i firm średnich i dużych. Kraków to konkurencyjny rynek — wymagane profesjonalne podejście."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies. Kraków to drogi rynek — efektywne zarządzanie budżetem jest kluczowe."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Efektywne dla e-commerce, turystyki (12M turystów rocznie), usług dla studentów. Kampanie dla młodszego i akademickiego audytorium Krakowa."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Kraków — obsługa Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie, community management. Obsługa dla startupów, e-commerce i firm B2B w dynamicznym rynku Krakowa."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Kraków to ville créative — marki z mocną identyfikacją mają lepsze pozycjonowanie na konkurencyjnym rynku."
  }
];

const faqItems = [
  {
    question: "Jakie wyzwania marketingowe stoi przed firmami z Krakowa?",
    answer: "Kraków to drugi rynek pod względem liczby firm w Polsce — ogromna konkurencja. CPL w Google Ads i Facebook Ads jest wyższy niż w mniejszych miastach. Firmy tutaj szukają profesjonalnych agencji, którzy rozumieją konkurencyjny rynek i mogą zapewnić mierzalne wyniki, nie tylko ładne projekty. Agencja marketingowa Kraków musi dysponować zarówno kreatywnością jak i analityką danych."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Krakowa?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Krakowa. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Kraków jest rynkiem zaawansowanym cyfrowo — format online nie jest problemem. Ważne jest zrozumienie konkurencyjnego rynku Krakowa i umiejętność budowania efektywnych kampanii mimo wysokiego CPL."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Krakowie?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Kraków to drogi rynek — kampanie kosztują więcej niż w mniejszych miastach. Zwróć uwagę na agencje obiecujące rezultaty za 'zaledwie 299 PLN' — zwykle brakuje im strategii i doświadczenia na konkurencyjnym rynku."
  },
  {
    question: "Jakie kampanie reklamowe są najskuteczniejsze dla firm z Krakowa?",
    answer: "W Krakowie skuteczne są: SEO dla e-commerce (duża konkurencja, ale wierni klienci), Google Ads dla firm usługowych i B2B (duża liczba decydentów), kampanie Meta Ads dla młodszych grup i turystyki. Dla akademickiego audytorium (70k+ studentów) — Instagram i TikTok. Dla firm międzynarodowych (Google, IBM, Motorola biura) — LinkedIn. Kraków wymaga strategii zróżnicowanej."
  },
  {
    question: "Czym wyróżnia się Kraków na rynku marketingowym Polski?",
    answer: "Kraków to drugie miasto pod względem liczby firm — ogromna konkurencja. UNESCO heritage + turystyka (12M turystów rocznie) + akademicki rynek (Jagiellonian, AGH, 70k+ studentów) + międzynarodowe biura (Google, IBM) = złożony, konkurencyjny rynek. Marki muszą wyróżniać się kreatywnością i strategią. Kraków to miasto, które inwestuje w marketing — najlepsze agencje pracują tutaj."
  },
  {
    question: "Czy oferujecie kompleksową obsługę marketingową dla Krakowa?",
    answer: "Tak — pełny zakres usług. Projektujemy strony, prowadzime SEO, konfigurujemy Google Ads i Meta, obsługujemy social media. Jeden partner, pełna odpowiedzialność. Spójność strategii daje lepsze wyniki w konkurencyjnym rynku Krakowa niż współpraca z kilkoma firmami niezkoordynowanymi."
  }
];

export default function AgencjaMarketingowaKrakow() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Kraków — Marketing dla Firm | Fotz Studio"
          description="Agencja marketingowa Kraków. Fotz Studio — strony WWW, SEO, kampanie Google/Meta, social media dla firm z Krakowa. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/agencja-marketingowa-krakow"
          keywords="agencja marketingowa Kraków, marketing Kraków, agencja SEO Kraków, Google Ads Kraków, social media, digital marketing, kampanie reklamowe"
        />

        <ServiceSchema
          name="Agencja Marketingowa Kraków"
          description="Kompleksowe usługi marketingu internetowego dla firm z Krakowa — SEO, Google Ads, Meta Ads, social media, strony internetowe dla konkurencyjnego rynku."
          provider="Fotz Studio"
          areaServed="Kraków"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Kraków", url: "https://fotz.pl/agencja-marketingowa-krakow" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Kraków i cała Polska — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Kraków</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Krakowa. SEO, Google Ads, Meta Ads, social media, strony internetowe — wszystko w jednej agencji. Specjaliści w marketingu dla konkurencyjnego rynku Krakowa.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Kraków to drugie miasto pod względem liczby firm w Polsce — ogromna konkurencja. 12M turystów rocznie, 70k+ studentów, biura międzynarodowe (Google, IBM, Motorola). Rynek wymaga profesjonalnego podejścia do marketingu, mierzalnych wyników i ciągłej optymalizacji.
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
                { value: "+280%", label: "wzrost ruchu (5 miesięcy)" },
                { value: "TOP 5", label: "pozycje w Google" },
                { value: "4.8/5", label: "ocena (22 opinie)" },
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
                  Usługi marketingowe dla firm z{" "}
                  <span className="text-gradient">Krakowa</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do konkurencyjnego rynku Krakowa — od startupów po międzynarodowe korporacje.
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
                  Dlaczego Fotz Studio dla firm z{" "}
                  <span className="text-gradient">Krakowa?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu na konkurencyjnym rynku.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie na konkurencyjnym rynku",
                    desc: "Kraków to drugie miasto pod względem liczby firm — konkurencja gigantów i startupów. Znamy specyfikę tego rynku i wiemy, jak wyróżnić Twoją markę."
                  },
                  {
                    icon: TrendingUp,
                    title: "Data-driven marketing",
                    desc: "Każda decyzja oparta na danych z GA4, Google Ads, Meta. Raportujemy ROAS, CPL, konwersje. W drogi rynku — każde złoto musi być optymalizowane."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Masz stały kontakt z ekspertem znającym konkurencję Krakowa, trendy rynku, psychologię konsumenta krakowskiego. Nie rotujemy juniorów."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla miasta międzynarodowego",
                    desc: "Kraków przyciąga międzynarodowe firmy (Google, IBM, Motorola). Znamy zarówno polski rynek jak i kampanie dla audytorium anglojęzycznego."
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
                Wyróżnij się na konkurencyjnym rynku Krakowa
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy konkurencję, Twoją sytuację i zaproponujemy efektywne działania marketingowe dla Twojego biznesu.
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
                  Najczęstsze pytania — agencja marketingowa Kraków
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
                { label: "Agencja marketingowa Gdańsk", to: "/agencja-marketingowa-gdansk" },
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
