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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Torunia. Szybkie, zoptymalizowane pod SEO i konwersję. Dedykowana obsługa dla firm turystycznych i restauracyjnych."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Toruń — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla turystyki i hospitality."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie dla firm z Torunia. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Efektywne dla turystyki (300k+ turystów/rok), restauracji, hoteli. Sezonowe kampanie dostosowane do piku turystycznego."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Toruń — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie zasięgowe dla hoteli, restauracji, atrakcji turystycznych. Instagram/TikTok dla młodszych turystów."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla firm turystycznych, restauracji, hoteli. Spójna wizualna tożsamość przekłada się na wyższe ceny i konwersje."
  }
];

const faqItems = [
  {
    question: "Jak prowadzić marketing dla firm turystycznych w Toruniu?",
    answer: "Toruń to UNESCO World Heritage Site, 200k+ mieszkańców, 300k+ turystów rocznie. Marketing turystyczny wymaga dual approach: sezonowe kampanie (Google Ads, Meta Ads) dla turystów + lokalny biznes (restauracje, hotele, atrakcje). Instagram i TikTok dla młodszych turystów, Google Ads dla starszych. Pozycjonowanie organiczne (SEO) działa całorocznie."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Torunia?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Torunia i regionu kujawsko-pomorskiego. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Format online nie wpływa na jakość kampanii — szczególnie dla firm turystycznych, gdzie sezonowość i trendy są kluczowe."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Toruniu?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 000 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Dla firm turystycznych dodatkowy koszt to sezonowe skalowanie kampanii (pik turystyczny). Każdą wycenę poprzedzamy bezpłatną konsultacją znającą specyfikę toruńskiego rynku turystyki."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Torunia?",
    answer: "Główne wyzwania: sezonowość turystyki (pik letni), konkurencja z dużych portali turystycznych (TripAdvisor, Booking), mała populacja lokalna (200k), marketing musi być dual — turystyka + lokalni klienci. Toruń to niche market turystyki — solidny SEO i targeted campaigns mogą mieć dużo większy impact niż w dużych miastach."
  },
  {
    question: "Czy oferujecie marketing dla restauracji i hoteli w Toruniu?",
    answer: "Tak — to nasz core market dla Torunia. Marketing dla restauracji/hoteli: Google Ads dla rezerwacji, Meta Ads dla turystów, SEO dla lokalnych fraz (restauracje Toruń, hotele Stare Miasto), Instagram dla visual branding, TripAdvisor reputation management. Sezonowe kampanie dostosowane do piku turystycznego (maj-sierpień)."
  },
  {
    question: "Jak budować widoczność firmy turystycznej w Toruniu przez cały rok?",
    answer: "Marketing całoroczny dla turystyki: SEO (organiczny, trwały ruch), Google Ads (sezonowo skalowane), content marketing (artykuły o Toruniu, travel guides), social media (Instagram, TikTok dla młodszych turystów), email marketing do wcześniejszych gości, reputation management (TripAdvisor, Google Reviews). Off-season: focus na local events, promocje dla lokalnych klientów."
  },
  {
    question: "Jakie są możliwości growth marketing dla startup'ów turystycznych w Toruniu?",
    answer: "Growth marketing dla startup'ów: Google Ads (szybki lead gen dla rezerwacji), SEO (long-tail keywords dla niszy), social media (low-cost traffic via Instagram/TikTok), partnerships z innymi turystycznymi biznesami, email marketing dla repeat customers, content marketing (YouTube travel vlogs). Budżety zazwyczaj mniejsze (1 000–3 000 PLN/mies), więc skupiamy się na high-ROI kanałach."
  }
];

export default function AgencjaMarketingowaTorun() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Toruń | fotz.pl – Marketing dla firm"
          description="Agencja marketingowa w Toruniu. Marketing internetowy, SEO i reklamy dla firm z Torunia. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/agencja-marketingowa-torun"
          keywords="agencja marketingowa Toruń, marketing Toruń, agencja SEO Toruń, turystyka, hotele, restauracje, Google Ads, social media"
        />

        <ServiceSchema
          name="Agencja Marketingowa Toruń"
          description="Kompleksowe usługi marketingu internetowego dla firm z Torunia — SEO, Google Ads, Meta Ads, social media, specjalizacja w turystyce i hospitality."
          provider="Fotz Studio"
          areaServed="Toruń"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Toruń", url: "https://fotz.pl/agencja-marketingowa-torun" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Toruń, Kujawsko-Pomorskie — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Toruń</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Torunia. SEO, Google Ads, Meta Ads, social media, strony internetowe — specjalizacja w turystyce, hotelach i restauracjach.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Toruń to 200k+ mieszkańców, UNESCO World Heritage Site (Stare Miasto), 300k+ turystów rocznie. NCU university, Polpharma pharma plant, gingerbread industry. Marketing wymaga specjalizacji turystycznej — my ją mamy.
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
                { value: "+240%", label: "wzrost ruchu (3 miesiące)" },
                { value: "TOP 3", label: "pozycje w Google" },
                { value: "4.8/5", label: "ocena (10 opinii)" },
                { value: "140+", label: "zrealizowanych kampanii" }
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
                  Usługi marketingowe dla Torunia i{" "}
                  <span className="text-gradient">turystyki</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do specyfiki rynku toruńskiego — turystyka, hotele, restauracje i gingerbread.
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
                  <span className="text-gradient">Torunia?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu turystycznym i hospitality.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie w turystyce",
                    desc: "Rozumiemy sezonowość turystyki (300k+ turystów rocznie). Wiemy, jak targetować turystów, budować brand awareness, zarządzać sezonowymi spike'ami."
                  },
                  {
                    icon: TrendingUp,
                    title: "Specjalizacja w hospitality",
                    desc: "Hotele, restauracje, atrakcje turystyczne — każdy segment wymaga innej strategii. SEO lokalne, Google Ads dla rezerwacji, Meta Ads dla turystów, Instagram/TikTok visual content."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Znający specyfikę Torunia, UNESCO heritage marketing, konkurencję turystyczną. Stały kontakt, nie rotacja juniorów."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla UNESCO hub'a",
                    desc: "Toruń to UNESCO World Heritage Site — znamy heritage marketing, storytelling, visual branding dla turystów. International targeting (niemcy, inne kraje UE)."
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
                Maksymalizuj turystów i przyciągaj gości przez cały rok
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut. Omówimy Twoją sytuację, sezonowość i zaproponujemy strategię dostosowaną do rynku Torunia i turystyki UNESCO.
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
                  Najczęstsze pytania — agencja marketingowa Toruń
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
