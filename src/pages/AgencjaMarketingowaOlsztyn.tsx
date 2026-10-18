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
    description: "Responsywne strony www i e-commerce dla firm z Olsztyna. Zoptymalizowane pod SEO i konwersję. Rozwiązania dla hoteli, pensjonatów i firm produkcyjnych."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "SEO dla firm z Olsztyna — pracujemy nad widocznością w Google: SEO lokalne, turystyka, B2B dla produkcji. Nie gwarantujemy konkretnych pozycji ani terminów — plan działań ustalamy po audycie."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Google Ads dla hoteli, pensjonatów, e-commerce — search, shopping, display. Budżet dopasowany do sezonu: większy latem, mniejszy poza sezonem. Budżet reklamowy płacony Google jest osobny od obsługi."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Reklamy na Facebooku i Instagramie dla turystyki sezonowej Mazur. Kampanie dostrojone pod wzrost rezerwacji (marzec-maj pre-season, maj-wrzesień high season)."
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
    question: "Jak marketing pomaga hotelom i pensjonatom w Olsztynie?",
    answer: "Hotel w Olsztynie szukający rezerwacji przez Google potrzebuje widoczności na frazy typu 'hotel Olsztyn', 'noclegi nad jeziorem' czy 'pensjonat Warmia'. Marketing cyfrowy (SEO + Google Ads + social media) zwiększa tę widoczność. Ruch w turystyce na Mazurach jest wyraźnie sezonowy, dlatego kampanie planujemy w fazach: przygotowanie przed sezonem, intensywne działania w sezonie i remarketing poza nim."
  },
  {
    question: "Czym różnią się Mazury od innych rynków turystycznych?",
    answer: "Mazury to region jezior, do którego turyści przyjeżdżają głównie w sezonie letnim. Małe hotele i pensjonaty konkurują o uwagę z dużymi portalami rezerwacyjnymi (Booking.com, Airbnb). Dla nich szansą są rezerwacje bezpośrednie: SEO na frazy long-tail, Google Ads i social media prowadzące gości prosto na stronę obiektu."
  },
  {
    question: "Czy turystyka sezonowa wymaga specjalnego marketingu?",
    answer: "Tak. Sezonowy marketing planujemy w 3 fazach: (1) przed sezonem (luty-kwiecień) — budowanie rozpoznawalności, przygotowanie kampanii i systemu rezerwacji, (2) sezon (maj-wrzesień) — największy budżet reklamowy, intensywne kampanie i bieżąca optymalizacja, (3) poza sezonem (październik-styczeń) — remarketing, e-mail marketing do gości, SEO i treści długoterminowe, oferty dla powracających gości."
  },
  {
    question: "Ile wynoszą budżety marketingowe dla hotelu w Olsztynie?",
    answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie: które kanały prowadzimy (SEO, Google Ads, Meta Ads, social media, produkcja video), ile obiektów lub ofert promujemy i jak intensywny jest sezon. Budżet reklamowy płacony Google i Meta jest zawsze osobny od wynagrodzenia agencji i zwykle zwiększa się go w sezonie, a obniża poza nim. Nie obiecujemy konkretnej liczby dodatkowych gości."
  },
  {
    question: "Czy segment akademicki (UWM) to odrębna grupa odbiorców?",
    answer: "Tak. Uniwersytet Warmińsko-Mazurski przyciąga studentów, uczestników szkół letnich i konferencji — to grupa poza typowymi turystami. Dla obiektów noclegowych i konferencyjnych można przygotować osobne kampanie i treści, np. pod frazy 'sala konferencyjna Olsztyn' czy 'noclegi dla grup Warmia'. Taki segment może pomóc wypełnić okres poza sezonem."
  },
  {
    question: "Jak budować markę hotelu konkurującego z Booking.com?",
    answer: "Portale rezerwacyjne pobierają prowizję od każdej rezerwacji, dlatego warto rozwijać kanał bezpośredni. Strategie: (1) rezerwacje bezpośrednie — SEO, e-mail, social media, program lojalnościowy, (2) branding — profesjonalna fotografia, video i storytelling, (3) treści long-tail — artykuły o tym, co robić na Mazurach, Instagram, (4) opinie gości — Google, TripAdvisor. Celem jest mniejsza zależność od pośredników."
  },
  {
    question: "Czy warto inwestować w video marketing dla hoteli?",
    answer: "Video dobrze sprawdza się w social media i na YouTube — Reels, krótkie formy, room toury, widoki na jezioro, lokalne atrakcje. Produkcja video to nasza specjalność. Koszt zależy od liczby filmów, dni zdjęciowych i postprodukcji, a promocję płatną (Meta Ads, YouTube) budżetujemy osobno. Wycenę przygotowujemy po rozmowie o zakresie."
  }
];

export default function AgencjaMarketingowaOlsztyn() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Olsztyn | FOTZ Studio – Marketing dla firm"
          description="Agencja marketingowa dla firm z Olsztyna, Warmii i Mazur — obsługa zdalna z Poznania. Sezonowy marketing turystyczny. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/agencja-marketingowa-olsztyn"
          keywords="agencja marketingowa Olsztyn, marketing Olsztyn, agencja SEO Olsztyn, turystyka Mazury, hotel marketing"
        />

        <ServiceSchema
          name="Agencja Marketingowa Olsztyn"
          description="Kompleksowe usługi marketingu internetowego dla firm z Olsztyna — SEO turystyczne, Google Ads, Meta Ads, social media. Obsługa zdalna z Poznania dla hoteli, turystyki i firm produkcyjnych."
          provider="fotz.pl"
          areaServed="Olsztyn"
        />
        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Agencja Marketingowa Olsztyn", url: "https://www.fotz-studio.pl/agencja-marketingowa-olsztyn" }
          ]}/>
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
                Marketing online dla firm z Warmii i Mazur — pracujemy z Poznania, firmy z Olsztyna obsługujemy zdalnie. Turystyka sezonowa, hotele, pensjonaty. SEO, Google Ads, Meta Ads, social media — dostrojone pod Mazury.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Olsztyn to stolica Warmii i Mazur — regionu jezior, do którego turyści przyjeżdżają przede wszystkim latem. Dlatego marketing musi być dostrojony do sezonowości.
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
                  Jak podchodzimy do marketingu dla firm z Warmii i Mazur.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Planowanie pod sezonowość",
                    desc: "Uwzględniamy różnice między sezonem a okresem poza nim: kampanie przed sezonem, w sezonie i po nim, z budżetem dopasowanym do popytu."
                  },
                  {
                    icon: TrendingUp,
                    title: "Marketing dla hoteli i pensjonatów",
                    desc: "Rezerwacje bezpośrednie, konkurencja z Booking.com, profesjonalna fotografia, video toury i opinie gości — łączymy te elementy w jedną strategię."
                  },
                  {
                    icon: Users,
                    title: "Stały kontakt, praca zdalna",
                    desc: "Pracujemy z Poznania, a firmy z Olsztyna obsługujemy zdalnie. Masz stałą osobę kontaktową i strategię dostosowaną do Twojego biznesu."
                  },
                  {
                    icon: Globe,
                    title: "Różne segmenty rynku",
                    desc: "Turystyka, firmy produkcyjne B2B i sektor edukacyjny. Nie tylko hotele — strategię dopasowujemy do branży."
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
                    focus: "Największa intensywność",
                    desc: "Maksymalny budżet, intensywne Google Ads search, Meta Ads dla turystów, direct bookings push, bieżąca optymalizacja kampanii."
                  },
                  {
                    phase: "Faza 3",
                    season: "Off-season (X-I)",
                    focus: "Long-term assets",
                    desc: "Remarketing do gości, content marketing (artykuły, vlog), email nurture campaigns, SEO long-tail, loyalty program. Niższy budżet reklamowy, ale inwestycje w markę."
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
                Przygotuj marketing na sezon turystyczny
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
                Bez sprzedaży pod presją
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
                { label: "Agencja marketingowa Warszawa", to: "/agencja-marketingowa/warszawa" },
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
