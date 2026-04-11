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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Łodzi. Szybkie, zoptymalizowane pod SEO i konwersję. Shopify, WooCommerce, Next.js — kompleksowe rozwiązania dla łódzkich biznesów."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Fotz Studio to agencja SEO Łódź, która zwiększa widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla Łodzi i regionu."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Kreacje wideo, carousel ads, lead forms. Efektywne dla e-commerce, usług i B2B dla firm łódzkich."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Łódź — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, harmonogram, kampanie zasięgowe i leadowe dla Twojej marki."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Spójna wizualna tożsamość marki przekłada się na wyższe ceny i lepsze konwersje."
  }
];

const faqItems = [
  {
    question: "Jak wybrać agencję marketingową w Łodzi?",
    answer: "Kluczowe kryteria: udokumentowane wyniki (case studies z ROAS i liczbą leadów), transparentne raportowanie, dedykowany ekspert projektu, oraz kompleksowa obsługa. Łódź to dinamicznie rosnący rynek — wybierz agencję znającą specyfikę łódzkich firm, szczególnie startup'ów i firm creative economy. Umów bezpłatną konsultację z 2–3 agencjami i porównaj podejście."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Łodzi?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Łodzi i Łódzkiego. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast Polski. Format online nie wpływa negatywnie na jakość kampanii i wyniki marketingowe dla firm łódzkich."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Łodzi?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) to od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Każdą wycenę poprzedzamy bezpłatną konsultacją. Uważaj na oferty 'od 299 PLN' — zwykle oznaczają brak strategii biznesowej."
  },
  {
    question: "Jakie kampanie reklamowe dla firm z Łodzi są najskuteczniejsze?",
    answer: "Dla firm lokalnych Łodzi — Google Ads (mapy, frazy lokalne) i pozycjonowanie (SEO). Dla e-commerce — Google Shopping i kampanie Meta z precyzyjnym targetowaniem. Łódź to miasto startupów i creative economy — dla takich firm skuteczne są kampanie na LinkedIn i budowanie community w social media. Dobieramy strategie do celu i budżetu."
  },
  {
    question: "Czym wyróżnia się Łódź na rynku marketingowym Polski?",
    answer: "Łódź to miasto renesansu — OFF Piotrkowska, EC1, Zalando HQ, answear.com — dynamiczny rynek e-commerce i startup'ów. Niższa konkurencja w kampaniach reklamowych niż w Warszawie, to oznacza szybsze efekty i tańszy CPL. Jednocześnie rynek jest zaawansowany cyfrowo — potrzeba profesjonalnego podejścia do marketingu."
  },
  {
    question: "Czy oferujecie kompleksową obsługę marketingową dla firm z Łodzi?",
    answer: "Tak — agencja full-service. Projektujemy strony, prowadzime SEO, konfigurujemy kampanie Google Ads i Meta, obsługujemy social media (Instagram, Facebook, LinkedIn, TikTok). Jeden partner, pełna odpowiedzialność. Spójność strategii daje lepsze wyniki niż współpraca z kilkoma firmami."
  }
];

export default function AgencjaMarketingowaLodz() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Łódź — Kompleksowy Marketing | Fotz Studio"
          description="Agencja marketingowa Łódź. Fotz Studio — strony WWW, SEO, kampanie Google/Meta Ads, social media dla firm z Łodzi. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/agencja-marketingowa-lodz"
          keywords="agencja marketingowa Łódź, marketing Łódź, agencja SEO Łódź, Google Ads Łódź, social media Łódź, digital marketing, kampanie reklamowe"
        />

        <ServiceSchema
          name="Agencja Marketingowa Łódź"
          description="Kompleksowe usługi marketingu internetowego dla firm z Łodzi — SEO, Google Ads, Meta Ads, social media, strony internetowe."
          provider="Fotz Studio"
          areaServed="Łódź"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Łódź", url: "https://fotz.pl/agencja-marketingowa-lodz" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Łódź i cała Polska — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Łódź</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Łodzi. SEO, Google Ads, Meta Ads, social media, strony internetowe — wszystko w jednej agencji. Fotz Studio to profesjonalna agencja marketingowa dla biznesów w Łodzi i regionie.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Łódź to miasto renesansu — OFF Piotrkowska, EC1, startup'i i creative economy. Firmy, które inwestują w profesjonalne kampanie marketingowe, systematycznie zyskują nowych klientów i budują widoczność w internecie.
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
                { value: "+290%", label: "wzrost ruchu (4 miesiące)" },
                { value: "TOP 3", label: "pozycje w Google" },
                { value: "4.9/5", label: "ocena (15 opinii)" },
                { value: "200+", label: "zrealizowanych projektów" }
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
                  <span className="text-gradient">Łodzi</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Oferujemy kompleksowe usługi marketingu cyfrowego dostosowane do potrzeb firm łódzkich — od startupów po e-commerce.
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
                  Dlaczego Fotz Studio dla firmy z{" "}
                  <span className="text-gradient">Łodzi?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu dla rynku Łodzi i miast drugiego poziomu.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie w startupach i creative economy",
                    desc: "Łódź to epicentrum startup'ów i firm creative. Znamy specyfikę tego rynku — szybkie decyzje, ograniczony budżet, duże ambicje."
                  },
                  {
                    icon: TrendingUp,
                    title: "Data-driven marketing",
                    desc: "Każda decyzja oparta na danych z GA4, Google Ads, Meta. Raportujemy mierzalne wyniki — ruch, leady, ROAS, konwersje."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Nie rotujemy juniorów. Masz stały kontakt z ekspertem znającym Twój biznes, rynek i konkurencję Łodzi."
                  },
                  {
                    icon: Globe,
                    title: "Strategia przed kampaniami",
                    desc: "Zanim uruchomimy kampanię, tworzymy strategię. Poznajemy Twój biznes — wtedy efekty marketingowe rosną szybciej."
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
                Buduj marketing swojej firmy z agencją z doświadczeniem
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy Twoją sytuację i zaproponujemy efektywne działania marketingowe.
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
                  Najczęstsze pytania — agencja marketingowa Łódź
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
                { label: "Agencja marketingowa Kraków", to: "/agencja-marketingowa-krakow" },
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
