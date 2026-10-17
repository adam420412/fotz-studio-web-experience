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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Torunia. Szybkie, zoptymalizowane pod SEO i konwersję — także dla firm turystycznych i restauracji."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Toruń — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. SEO lokalne również dla turystyki i hospitality."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie dla firm z Torunia. Raportowanie ROAS i CPL. Budżet reklamowy płacony Google ustalamy z Tobą i jest on osobno od naszego wynagrodzenia."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Dla turystyki, restauracji i hoteli. Sezonowe kampanie dostosowane do piku turystycznego."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Toruń — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie zasięgowe dla hoteli, restauracji, atrakcji turystycznych. Instagram/TikTok dla młodszych turystów."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla firm turystycznych, restauracji, hoteli. Spójna identyfikacja ułatwia rozpoznawalność marki."
  }
];

const faqItems = [
  {
    question: "Jak prowadzić marketing dla firm turystycznych w Toruniu?",
    answer: "Stare Miasto w Toruniu jest wpisane na listę UNESCO i przyciąga turystów przez cały sezon. Marketing turystyczny wymaga dual approach: sezonowe kampanie (Google Ads, Meta Ads) dla turystów + lokalny biznes (restauracje, hotele, atrakcje). Instagram i TikTok dla młodszych turystów, Google Ads dla starszych. Pozycjonowanie organiczne (SEO) działa całorocznie."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Torunia?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Torunia i regionu kujawsko-pomorskiego. Pracujemy z Poznania, a firmy z Torunia obsługujemy zdalnie (Google Meet, Teams). Kampanie, raporty i spotkania prowadzimy online, więc lokalizacja agencji nie ogranicza zakresu współpracy."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Toruniu?",
    answer: "Nie mamy sztywnego cennika. Wycenę przygotowujemy po rozmowie o zakresie: liczbie kanałów (SEO, Google Ads, Meta Ads, social media), ilości treści do przygotowania i celach. Budżet reklamowy płacony platformom (Google, Meta) jest zawsze osobno — w turystyce często zmienia się sezonowo. Każdą wycenę poprzedzamy bezpłatną konsultacją."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Torunia?",
    answer: "Główne wyzwania: sezonowość turystyki (pik letni), konkurencja z dużych portali turystycznych (TripAdvisor, Booking), ograniczony rynek lokalny, marketing musi być dual — turystyka + lokalni klienci. W mniejszym rynku dobrze dopasowane SEO i kampanie łatwiej wyróżniają się na tle konkurencji."
  },
  {
    question: "Czy oferujecie marketing dla restauracji i hoteli w Toruniu?",
    answer: "Tak — obsługujemy je zdalnie. Marketing dla restauracji/hoteli: Google Ads dla rezerwacji, Meta Ads dla turystów, SEO dla lokalnych fraz (restauracje Toruń, hotele Stare Miasto), Instagram dla visual branding, TripAdvisor reputation management. Sezonowe kampanie dostosowane do piku turystycznego (maj-sierpień)."
  },
  {
    question: "Jak budować widoczność firmy turystycznej w Toruniu przez cały rok?",
    answer: "Marketing całoroczny dla turystyki: SEO (organiczny, trwały ruch), Google Ads (sezonowo skalowane), content marketing (artykuły o Toruniu, travel guides), social media (Instagram, TikTok dla młodszych turystów), email marketing do wcześniejszych gości, reputation management (TripAdvisor, Google Reviews). Off-season: focus na local events, promocje dla lokalnych klientów."
  },
  {
    question: "Jakie są możliwości growth marketing dla startup'ów turystycznych w Toruniu?",
    answer: "Growth marketing dla startup'ów: Google Ads (szybki lead gen dla rezerwacji), SEO (long-tail keywords dla niszy), social media (low-cost traffic via Instagram/TikTok), partnerships z innymi turystycznymi biznesami, email marketing dla repeat customers, content marketing (YouTube travel vlogs). Przy mniejszych budżetach skupiamy się na kanałach, które najszybciej dają mierzalne dane."
  }
];

export default function AgencjaMarketingowaTorun() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Marketingowa Toruń | FOTZ Studio – Marketing dla firm"
          description="Agencja marketingowa w Toruniu. Marketing internetowy, SEO i reklamy dla firm z Torunia. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/agencja-marketingowa-torun"
          keywords="agencja marketingowa Toruń, marketing Toruń, agencja SEO Toruń, turystyka, hotele, restauracje, Google Ads, social media"
        />

        <ServiceSchema
          name="Agencja Marketingowa Toruń"
          description="Kompleksowe usługi marketingu internetowego dla firm z Torunia — SEO, Google Ads, Meta Ads, social media, także dla turystyki i hospitality. Pracujemy z Poznania, firmy z Torunia obsługujemy zdalnie."
          provider="Fotz Studio"
          areaServed="Toruń"
        />
        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Agencja Marketingowa Toruń", url: "https://www.fotz-studio.pl/agencja-marketingowa-torun" }
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
                  <MapPin className="w-4 h-4 text-primary" /> Toruń — pracujemy z Poznania, obsługujemy zdalnie
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-gradient">Toruń</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Torunia. SEO, Google Ads, Meta Ads, social media, strony internetowe — także dla turystyki, hoteli i restauracji.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Pracujemy z Poznania, a firmy z Torunia obsługujemy zdalnie. Toruń to Stare Miasto z listy UNESCO, uniwersytet i silna lokalna gastronomia — strategię dopasowujemy do tego rynku i jego sezonowości.
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
                  Kompleksowe usługi dostosowane do specyfiki rynku toruńskiego — turystyka, hotele, restauracje i lokalne firmy.
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
                  Marketing dopasowany do sezonowości i lokalnego rynku.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Planowanie pod sezon",
                    desc: "Uwzględniamy sezonowość turystyki: kampanie skalujemy w szczycie, a poza sezonem stawiamy na lokalnych klientów i budowanie marki."
                  },
                  {
                    icon: TrendingUp,
                    title: "Specjalizacja w hospitality",
                    desc: "Hotele, restauracje, atrakcje turystyczne — każdy segment wymaga innej strategii. SEO lokalne, Google Ads dla rezerwacji, Meta Ads dla turystów, Instagram/TikTok visual content."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Jedna osoba prowadząca, która poznaje Twój biznes i konkurencję w Toruniu. Stały kontakt zdalny, nie rotacja juniorów."
                  },
                  {
                    icon: Globe,
                    title: "Strategia dla UNESCO hub'a",
                    desc: "Stare Miasto z listy UNESCO to mocny motyw do storytellingu i treści wizualnych dla turystów. Kampanie możemy kierować też do turystów zagranicznych (np. z Niemiec)."
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
                { label: "Agencja marketingowa Gdańsk", to: "/agencja-marketingowa/gdansk" },
                { label: "Agencja marketingowa Rzeszów", to: "/agencja-marketingowa/rzeszow" },
                { label: "Agencja marketingowa Bydgoszcz", to: "/agencja-marketingowa/bydgoszcz" },
                { label: "Agencja marketingowa Szczecin", to: "/agencja-marketingowa/szczecin" },
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
