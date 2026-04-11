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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Lublina. Szybkie, zoptymalizowane pod SEO i konwersję. Shopify, WooCommerce, Next.js — kompleksowe rozwiązania dla biznesów lubelskich."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Fotz Studio to agencja SEO Lublin, która zwiększa widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla Lublina i województwa lubelskiego."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie. Raportowanie ROAS i CPL. Lublin to niższa konkurencja — szybsze i tańsze efekty niż w dużych miastach."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Niski CPL w Lublinie = efektywne kampanie dla e-commerce, usług i local business. Szybki ROI dzięki mniejszej konkurencji."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Lublin — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, harmonogram, kampanie. Obsługa dla startupów, firm lokalnych i małego biznesu na rynku Lublina."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Marki z mocną wizualną tożsamością mają lepsze wyniki w Lublinie — rynek jest bardziej osobisty i oparty na rekomendacjach."
  }
];

const faqItems = [
  {
    question: "Jakie są przewagi marketingowe Lublina?",
    answer: "Lublin to wschodnia brama UE — miasto pomiędzy Warszawa a Ukrainą. Niższa konkurencja w kampaniach reklamowych niż w Warszawie, Krakowie czy Gdańsku = tańszy CPL i szybsze efekty. IT hub (Software Mind, Sii), akademickie miasto (UMCS, KUL), rynek rosnący. Dla firm lokalne — niskie koszty marketingu oznaczają wyższy zwrot z inwestycji."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Lublina?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Lublina i Lubelskiego. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Lublin jest rynkiem zaawansowanym cyfrowo — format online jest naturalny. Ważne jest zrozumienie specyfiki lubelskiego rynku i potencjału niskiej konkurencji."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Lublinie?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Lublin to tańszy rynek niż Warszawa czy Kraków — zarówno w CPL kampanii jak i w cenach agencji. Każdą wycenę poprzedzamy bezpłatną konsultacją dostosowaną do budżetu."
  },
  {
    question: "Jakie kampanie reklamowe są najtańsze i najskuteczniejsze w Lublinie?",
    answer: "W Lublinie najtańsze i najpierw efektywne: Google Ads (niski CPC), kampanie Meta Ads (niski CPL), Facebook Ads dla lokalnych firm. Dla firm IT/Software (Software Mind, Sii) — LinkedIn campaigns. Dla e-commerce — Google Shopping. Dla restauracji, usług lokalnych — Google Ads (mapy) + Local SEO. Niższa konkurencja = szybsze wyniki w każdym kanale."
  },
  {
    question: "Czym wyróżnia się Lublin na tle innych miast?",
    answer: "Lublin to crossroads East/West — polska brama do Europy Wschodniej. Dynamiczny rynek IT (Software Mind, Sii), akademickie (UMCS, KUL, UM Lublin), startup'i. Niskiej konkurencji + rosnący rynek = idealna kombinacja dla firm, które chcą szybkiego wzrostu. CPL w Lublinie jest 30-50% tańszy niż w Warszawie czy Krakowie — każdy procent efektywności daje większy zwrot."
  },
  {
    question: "Czy oferujecie kompleksową obsługę marketingową dla firm z Lublina?",
    answer: "Tak — pełny zakres usług. Projektujemy strony, prowadzime SEO, konfigurujemy Google Ads i Meta, obsługujemy social media. Jeden partner, pełna odpowiedzialność. Spójność strategii daje lepsze wyniki w rosnącym rynku Lublina. Niższa konkurencja oznacza, że szybciej widać efekty — to idealne środowisko do testowania i skalowania kampanii."
  }
];

export default function AgencjaMarketingowaLublin() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Lublin — Marketing Online | Fotz Studio"
          description="Agencja marketingowa Lublin i Lubelskie. Fotz Studio — strony WWW, SEO, Google Ads, social media. Bezpłatna konsultacja dla firm z Lublina!"
          canonical="https://fotz.pl/agencja-marketingowa-lublin"
          keywords="agencja marketingowa Lublin, marketing Lublin, agencja SEO Lublin, Google Ads Lublin, social media, digital marketing, kampanie reklamowe"
        />

        <ServiceSchema
          name="Agencja Marketingowa Lublin"
          description="Kompleksowe usługi marketingu internetowego dla firm z Lublina — SEO, Google Ads, Meta Ads, social media, strony internetowe. Niskie koszty, szybkie efekty."
          provider="Fotz Studio"
          areaServed="Lublin"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Lublin", url: "https://fotz.pl/agencja-marketingowa-lublin" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Lublin i cała Polska — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Lublin</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Lublina i Lubelskiego. SEO, Google Ads, Meta Ads, social media, strony internetowe — wszystko w jednej agencji. Niskie koszty kampanii, szybkie efekty dzięki niższej konkurencji.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Lublin to wschodnia brama UE — IT hub (Software Mind, Sii), akademickie miasto (UMCS, KUL), rynek rosnący. Niższa konkurencja w marketingu niż w dużych miastach = szybsze i tańsze efekty kampanii reklamowych dla Twojego biznesu.
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
                { value: "+250%", label: "wzrost ruchu (3 miesiące)" },
                { value: "TOP 5", label: "pozycje w Google" },
                { value: "4.8/5", label: "ocena (11 opinii)" },
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
                  <span className="text-gradient">Lublina</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do rynku Lublina — od startupów IT po firmy lokalne i e-commerce.
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
                  <span className="text-gradient">Lublina?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu dla rynków wschodnich.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie na rynku Lublin",
                    desc: "Znamy specyfikę lubelskiego rynku — niższa konkurencja, ale rosnący potencjał. Wiemy, jak budować widoczność i efektywnie wydawać budżet marketingowy."
                  },
                  {
                    icon: TrendingUp,
                    title: "Szybkie wyniki dzięki niskiej konkurencji",
                    desc: "CPL w Lublinie jest 30-50% tańszy niż w Warszawie — szybciej dochodzimy do celu. Jedno złoto kampanii w Lublinie = więcej konwersji i leadów niż w dużych miastach."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert znający rynek",
                    desc: "Stały kontakt z ekspertem projektu, który rozumie potencjał Lublina i wie, jak go wykorzystać. Nie rotujemy juniorów, masz stały mentor."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla Lublina — East/West Hub",
                    desc: "Lublin to brama do Europy Wschodniej — znamy rynek polski i międzynarodowy. Dla firm IT — kampanie anglojęzyczne; dla lokalnych — focus na Lublin."
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
                Skorzystaj z przewagi niskiej konkurencji w Lublinie
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy potencjał marketingowy Twojego biznesu w Lublinie i zaproponujemy efektywne działania.
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
                  Najczęstsze pytania — agencja marketingowa Lublin
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
                { label: "Agencja marketingowa Kraków", to: "/agencja-marketingowa-krakow" },
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
