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
    description: "Responsywne strony www i e-commerce dla firm z Olsztyna. Zoptymalizowane pod SEO i konwersję. Dedykowana obsługa dla hoteli, pensjonatów, produkcji (Michelin, Bridgestone)."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Olsztyn — zwiększamy widoczność w Google. Specjalizacja w turystyce Mazur, SEO lokalnym, B2B dla produkcji. TOP 5 pozycje w 2-3 miesiące."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Google Ads dla hoteli, pensjonatów, e-commerce — search, shopping, display. Sezonowe skalowanie (maj-wrzesień +300% budget). Budżety 2 000–50 000+ PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Facebook i Instagram ads — perfect dla turystyki sezonowej Mazur. Kampanie dostrojone pod wzrost rezerwacji (marzec-maj pre-season, maj-wrzesień high season)."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Prowadzenie profili Instagram, Facebook, TikTok dla hoteli, agencji turystycznych. Treści dostrojone pod turystów, sezonowe strategie, visual storytelling Mazur."
  },
  {
    icon: Building2,
    title: "Branding turystyczny",
    description: "Identyfikacja wizualna, fotografia produktów, video marketing dla hoteli. Profesjonalna wizualna tożsamość marki — ważna dla sezonowych rezerwacji i konkurencji."
  }
];

const faqItems = [
  {
    question: "Jak marketing pomaga hoteli i pensjonatom w Olsztynie?",
    answer: "Hotel w Olsztynie szukający rezerwacji przez Google = SEO dla 'hotel Olsztyn', 'noclegi nad jeziorem', 'pensjonat Warmia'. Marketing cyfrowy (SEO + Google Ads + social) zwiększa widoczność. Sezon turystyczny (maj-wrzesień) to +300% traffic — kampanie muszą być dostrojone na tę sezonowość. Wspólnie budujemy przychody: pre-season ramp-up (marzec-kwiecień), high season max (maj-wrzesień), off-season remarketing."
  },
  {
    question: "Jaka jest róża warunków między Mazurami a innymi rynkami turystycznymi?",
    answer: "Mazury to 2000+ jezior, miliony turystów rocznie — ale mało optymalizacji cyfrowej. Konkurencja turystyczna z Krakowa czy Warszawy to duże portale (booking.com, airbnb). Dla małych hoteli: SEO + direct bookings to game changer. Long-tail traffic ('best budget hotel lake Mazur', 'family vacation near Olsztyn') — niskie CPL, wyższa konwersja, mniej mediatorów (Booking, Airbnb), wyższa marża. To nasza nisza."
  },
  {
    question: "Czy turystyka sezonowa wymaga specjalnego marketingu?",
    answer: "Tak. Sezonowy marketing to strategia w 3 fazy: (1) Pre-season (luty-kwiecień) — buduj awareness, kampanie muszą być gotowe, booking opening, (2) High season (maj-wrzesień) — maksymalny budżet, intensywne kampanie, real-time optimization, (3) Off-season (październik-styczeń) — remarketing, email marketing do gości, budget SEO (long-term assets), promocje dla repeat guests. Większość biznesów nie robi Phase 3 — my to robimy."
  },
  {
    question: "Ile wynoszą budżety marketingowe dla hotelu w Olsztynie?",
    answer: "Minimum: 3 000–5 000 PLN/miesiąc (SEO + Google Ads mini + social). Average: 8 000–15 000 PLN/mies (kompleksowa obsługa). Maximum: 25 000–50 000+ PLN/mies (sezonowe skalowanie, multi-channel, video, influencer). Sezon wpływa drastycznie — maj-wrzesień +100-300% budżetu, off-season można obniżyć. ROI dla hotelu: 1 dodatkowy guest = 300–500 PLN przychodu = 1000+ marża. Marketing 5k PLN/mies może wygenerować 50+ dodatkowych gości sezonowo."
  },
  {
    question: "Czy universal edukacyjny turyzm (UWM) to odrębny segment?",
    answer: "Tak. UWM to 30k+ studentów, szkoły letnie, konferencje akademickie — nowy segment poza turystami. Marketing dla tego segmentu: akademiki szkolne, noclegi konferencyjne, logistyka dla grup. Słowa kluczowe: 'accommodation students Warmia', 'conference venue Olsztyn', 'team building lakes'. Off-season (styczeń-kwiecień) to szansa — nie turystyka, ale biznes akademicki. Poszerzamy grę poza letnie spiky."
  },
  {
    question: "Jak budować brand dla hotelu konkurującego z Booking.com?",
    answer: "Booking to mediator — utrzymuje 15-20% marży hotelowej. Strategie: (1) Direct bookings — SEO, email, social media, loyalty program, (2) Branding — profesjonalna fotografia, video, story — coś co Booking nie robi, (3) Long-tail content — artykuły 'what to do in Mazury', 'hidden lakes', Instagram storytelling — buduje brand, nie tylko konwersje, (4) Customer reviews — RateYa, Google Reviews, TripAdvisor — to proof of quality. Wspólnie: zmniejszamy zależność od Booking, zwiększamy marżę."
  },
  {
    question: "Czy warto inwestować w video marketing dla hoteli?",
    answer: "Zdecydowanie. Video to highest engagement — Instagram Reels, YouTube, TikTok. Dla hoteli: room tours, lake views at sunrise, guest testimonials, local experiences. Video SEO (YouTube ranking) to długoterminowy asset — ranking utrzymuje się lata. Budżet: 3 000–5 000 PLN na produkcję (3-5 video), plus paid promotion (Meta Ads video format). ROI: 1 bookingów z YouTube = 5-10 visitors stron."
  }
];

export default function AgencjaMarketingowaOlsztyn() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Olsztyn | fotz.pl – Marketing dla firm"
          description="Agencja marketingowa w Olsztynie. Marketing online dla firm z Warmii i Mazur. Sezonowy marketing turystyczny. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/agencja-marketingowa-olsztyn"
          keywords="agencja marketingowa Olsztyn, marketing Olsztyn, agencja SEO Olsztyn, turystyka Mazury, hotel marketing"
        />

        <ServiceSchema
          name="Agencja Marketingowa Olsztyn"
          description="Kompleksowe usługi marketingu internetowego dla firm z Olsztyna — SEO turystyczne, Google Ads, Meta Ads, social media. Specjalizacja w hotelu, turystyce Mazur, produkcji (Michelin, Bridgestone)."
          provider="fotz.pl"
          areaServed="Olsztyn"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja Marketingowa Olsztyn", url: "https://fotz.pl/agencja-marketingowa-olsztyn" }
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
                Agencja Marketingowa{" "}
                <span className="text-gradient">Olsztyn</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Marketing online dla firm z Warmii i Mazur. Specjalizacja w turystyce sezonowej, hotelach, pensjonatach. SEO, Google Ads, Meta Ads, social media — dostrojone pod Mazury.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Olsztyn to 175k mieszkańców, capital of Warmia-Mazury. Otaczające 2000+ jezior — polska Hawaje — przyciąga miliony turystów rocznie (sezon maj-wrzesień +300% traffic). Marketing musi być dostrojony na sezonowość. Znamy specyfikę Mazur.
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
                { value: "+220%", label: "wzrost ruchu (3 mies.)" },
                { value: "TOP 3", label: "pozycje w Google" },
                { value: "4.8/5", label: "ocena (9 opinii)" },
                { value: "50+", label: "hoteli wspieranych" }
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
                  Usługi marketingowe dla <span className="text-gradient">Olsztyna</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do turystyki sezonowej Mazur — hotele, pensjonaty, produkcja.
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
                  <span className="text-gradient">Olsztyna?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w turystyce sezonowej i marketingu tematycznym dla Mazur.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Specjalizacja w turystyce sezonowej",
                    desc: "Rozumiemy wyzwania: mai-wrzesień +300% traffic, off-season crisis, budżety dostrojone na sezonowość. Kampanie pre-season, high season, off-season."
                  },
                  {
                    icon: TrendingUp,
                    title: "Marketing dla hoteli i pensjonatów",
                    desc: "Doświadczenie z direct bookings, konkurencja z Booking.com, fotografia profesjonalna, video tours, guest reviews. Znamy hotel business."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert Mazur",
                    desc: "Znający sezonowość, miejsca, turystów, konkurencję lokalną. Stały kontakt, nie rotacja juniorów. Strategia dostosowana do Olsztyna."
                  },
                  {
                    icon: Globe,
                    title: "Multi-segment expertise",
                    desc: "Turystyka + B2B produkcja (Michelin, Bridgestone) + sektor edukacyjny (UWM). Nie tylko hotele — pełne spektrum biznesu Olsztyna."
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

        {/* Seasonal Strategy */}
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
                  Marketing turystyczny w 3 fazach
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    phase: "Faza 1",
                    season: "Przed-sezon (II-IV)",
                    focus: "Ramp-up kampanii",
                    desc: "Buduj awareness, otwórz booking system, kampanie Google Ads dla early birds, email marketing dla gości z ubiegłych lat, SEO optimization dla peak queries."
                  },
                  {
                    phase: "Faza 2",
                    season: "High season (V-IX)",
                    focus: "+300% budżetu",
                    desc: "Maksymalny budżet, intensywne Google Ads search, Meta Ads dla turystów, direct bookings push, real-time optimization, OOH campaigns w turystycznych miejscach."
                  },
                  {
                    phase: "Faza 3",
                    season: "Off-season (X-I)",
                    focus: "Long-term assets",
                    desc: "Remarketing do gości, content marketing (artykuły, vlog), email nurture campaigns, SEO long-tail, loyalty program. Budget 30% high season — ale inwestycje w brand."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex gap-6 p-6 rounded-2xl border border-border/40 bg-card/20"
                  >
                    <div className="w-20 h-20 rounded-xl bg-primary/10 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-primary">{item.phase}</span>
                      <span className="text-xs text-muted-foreground font-semibold">{item.season}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold mb-2 text-lg">{item.focus}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
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
                Sezon turystyczny 2024 — przygotuj marketing
              </motion.h2>
              <motion.p variants={fadeIn} className="text-white/80 mb-8">
                Bezpłatna konsultacja — omówimy Twoją sytuację (hotel, pensjonat, agencja turystyczna), sezonowość i zaproponujemy strategię dla Mazur.
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
                  FAQ — agencja marketingowa Olsztyn
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
                { label: "Pozycjonowanie Olsztyn", to: "/uslugi/pozycjonowanie/olsztyn" },
                { label: "Agencja marketingowa Opole", to: "/agencja-marketingowa-opole" },
                { label: "Pozycjonowanie Opole", to: "/uslugi/pozycjonowanie/opole" },
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
