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
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Wałbrzycha. Szybkie, zoptymalizowane pod SEO i konwersję. Dedykowana obsługa dla biznesów produkcyjnych i usług B2B."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Agencja SEO Wałbrzych — zwiększamy widoczność firm w Google. Audyt techniczny, optymalizacja treści, link building. Specjalizacja w SEO lokalnym dla Wałbrzycha i Dolnego Śląska."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie dla firm wałbrzyskich. Raportowanie ROAS i CPL. Budżety od 2 000 do 100 000 PLN/mies."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Efektywne dla produkcji, turystyki biznesowej i usług B2B. Dual targeting — lokalni klienci + sieci partnerów."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Agencja social media Wałbrzych — prowadzenie profili Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie zasięgowe dla produkcji i usług. Strategia dla biznesu i employer branding."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla firm produkcyjnych i usługowych. Spójna wizualna tożsamość marki przekłada się na wyższe ceny i lepsze konwersje."
  }
];

const faqItems = [
  {
    question: "Jak prowadzić marketing dla firm produkcyjnych w Wałbrzychu?",
    answer: "Wałbrzych to hub produkcyjny Dolnego Śląska — głównie produkcja hutnicza, elektromechanika, usługi B2B. Marketing musi być ukierunkowany na decydentów biznesowych: LinkedIn campaigns, content marketing dla branży, SEO dla fraz branżowych. Kampanie Google Ads dostrojone pod wysokie CPL i długie cykle sprzedaży. Pozycjonowanie organiczne (SEO) działa całorocznie — to fundament widoczności w branży."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Wałbrzycha?",
    answer: "Tak — obsługujemy firmy z całej Polski, w tym z Wałbrzycha i Dolnego Śląska. Współpraca przebiega online (Google Meet, Teams). Ponad 40% naszych klientów pochodzi z różnych miast. Format online nie wpływa na jakość kampanii — szczególnie dla firm produkcyjnych, gdzie kampanie są długoterminowe i wymagają strategicznego podejścia."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Wałbrzychu?",
    answer: "Ceny zależą od zakresu: pojedynczy kanał (SEO, Meta Ads) od 1 500–3 500 PLN/mies. Kompleksowa obsługa — SEO, Google Ads, social media — od 5 000–15 000 PLN/mies. Dla firm produkcyjnych dodatkowy koszt to zaawansowany content marketing i LinkedIn campaigns. Każdą wycenę poprzedzamy bezpłatną konsultacją znającą specyfikę wałbrzyskiego rynku B2B."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Wałbrzycha?",
    answer: "Główne wyzwania: przejście z marketingu tradycyjnego na cyfrowy, budowanie marki producenta, B2B outreach do partnerów biznesowych, niski budżet marketingowy vs. konkurencja z dużych miast. Marketing musi być efektywny — każdy złoty PLN musi przynieść wynik. Fotz Studio zna specyfikę wałbrzyskiego rynku i umie budować kampanie niskobudżetowe z wysokim ROI."
  },
  {
    question: "Czy oferujecie marketing dla produkcji i sektora B2B w Wałbrzychu?",
    answer: "Tak — obsługujemy firmy B2B z sektora produkcji, elektromechaniki i usług. Wałbrzych to ośrodek produkcyjny Dolnego Śląska — Wałbrzyska Specjalna Strefa Ekonomiczna skupia dziesiątki firm. Marketing dla tego sektora to specjalistyczne podejście: LinkedIn campaigns, content marketing dla decydentów, SEO dla branżowych fraz, email marketing do partnerów. Łączymy doświadczenie B2B z wiedzą o wałbrzyskim ekosystemie produkcyjnym."
  },
  {
    question: "Jak budować widoczność firmy produkcyjnej w Wałbrzychu przez cały rok?",
    answer: "Marketing całoroczny dla produkcji: SEO (organiczny, trwały ruch dla decydentów), Google Ads (dostrojone pod CPL i konwersje B2B), content marketing (artykuły branżowe, case studies), social media (LinkedIn dla firm, Instagram dla employera). LinkedIn campaigns całoroczne, remarketing dla byłych klientów, email marketing do bazy kontaktów. Dla firm z WSSE — wsparcie w promocji do sieci partnerów i inwestorów."
  }
];

const pricingPlans = [
  {
    name: "START",
    price: "1500",
    description: "Dla firm zaczynających",
    features: ["1 kanał marketingowy (SEO lub Ads)", "Audyt konkurencji", "Raportowanie miesięczne", "Konsultacje mailowe"]
  },
  {
    name: "ROZWÓJ",
    price: "3500",
    description: "Dla firm rozwijających się",
    features: ["2-3 kanały (SEO + Ads + Social)", "Strategia marketingowa", "Content marketing (4 treści/mies)", "Dedykowany specjalista", "Raportowanie tygodniowe"]
  },
  {
    name: "PREMIUM",
    price: "7000+",
    description: "Dla firm o dużych ambicjach",
    features: ["Kompleksowa strategia multikanałowa", "Produkcja treści (video, grafika)", "LinkedIn campaigns", "Email marketing", "A/B testowanie", "Strategia employer brandingu"]
  }
];

export default function AgencjaMarketingowaWalbrzych() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja marketingowa Wałbrzych - fotz studio | Marketing dla firm"
          description="Agencja marketingowa Wałbrzych. Fotz Studio — strony WWW, SEO, Google Ads, social media. Marketing dla produkcji i firm B2B. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/agencja-marketingowa/walbrzych"
          keywords="agencja marketingowa Wałbrzych, marketing Dolny Śląsk, agencja SEO Wałbrzych, kampanie B2B, produkcja, Google Ads, social media"
        />

        <ServiceSchema
          name="Agencja marketingowa Wałbrzych"
          description="Kompleksowe usługi marketingu internetowego dla firm z Wałbrzycha i Dolnego Śląska — SEO, Google Ads, Meta Ads, social media, marketing B2B dla produkcji."
          provider="Fotz Studio"
          areaServed="Wałbrzych"
        />
        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Agencja marketingowa Wałbrzych", url: "https://fotz.pl/agencja-marketingowa/walbrzych" }
          ]}
        />
        <FAQSchema items={faqItems} />

        {/* Hero */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-gray-700/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeIn} className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-yellow-400" /> Wałbrzych, Dolny Śląsk — współpraca online
                </span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja marketingowa{" "}
                <span className="text-yellow-400">Wałbrzych</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Wałbrzycha i Dolnego Śląska. SEO, Google Ads, Meta Ads, social media, strony internetowe — specjalizacja w produkcji i marketingu B2B.
              </motion.p>

              <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Wałbrzych to ośrodek produkcyjny Dolnego Śląska (60k+ mieszkańców, Wałbrzyska Specjalna Strefa Ekonomiczna) i brama do turystyki (Zamek Książ, 2M+ turystów rocznie). Firmy produkcyjne i usługowe potrzebują nowoczesnego marketingu B2B. Fotz Studio zna specyfikę wałbrzyskiego rynku.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
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

        {/* Benefits */}
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
                  Czemu firmy z Wałbrzycha wybierają{" "}
                  <span className="text-yellow-400">Fotz Studio?</span>
                </h2>
                <p className="text-muted-foreground">
                  Specjaliści w marketingu B2B i produkcji dla Dolnego Śląska.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Doświadczenie w B2B i produkcji",
                    desc: "Rozumiemy specyfikę firm produkcyjnych, logistyki i usług. Kampanie dostrojone pod decydentów biznesowych, a nie konsumentów."
                  },
                  {
                    icon: TrendingUp,
                    title: "Nisko-budżetowe kampanie z wysokim ROI",
                    desc: "Wałbrzych to rynek niskobudżetowy. Umiemy robić kampanie z małymi budżetami, które przynoszą wyniki — maksymalna efektywność każdego złotego."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Znający specyfikę Wałbrzycha, WSSE, konkurencję lokalną. Stały kontakt, nie rotacja juniorów. Twój partner w marketingu, nie sprzedawca usług."
                  },
                  {
                    icon: Globe,
                    title: "LinkedIn i email marketing dla B2B",
                    desc: "Specjalizacja w kampaniach LinkedIn, email marketing do bazy kontaktów, content marketing dla decydentów branżowych. Budujemy relacje biznesowe, nie klikniecia."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-background"
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-yellow-400" />
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
                  Usługi marketingowe dla Wałbrzycha i{" "}
                  <span className="text-yellow-400">Dolnego Śląska</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi dostosowane do specyfiki wałbrzyskiego rynku — produkcja, usługi B2B, turystyka biznesowa.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-yellow-400/30 transition-colors"
                  >
                    <service.icon className="w-10 h-10 text-yellow-400 mb-4" />
                    <h3 className="font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-20 md:py-28 bg-card/30 border-y border-border/30">
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
                  Wałbrzych — kontekst biznesowy
                </h2>
              </motion.div>

              <div className="space-y-6">
                <motion.div variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-yellow-400" />
                    Wałbrzyska Specjalna Strefa Ekonomiczna
                  </h3>
                  <p className="text-muted-foreground">
                    Ponad 60 firm zarejestrowanych w WSSE — elektromechanika, produkcja, logistyka, usługi B2B. Firmy w WSSE potrzebują nowoczesnego marketingu cyfrowego do komunikacji z partnerami biznesowymi, potencjalnymi inwestorami i klientami.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-yellow-400" />
                    Dziedzictwo górnicze i transformacja
                  </h3>
                  <p className="text-muted-foreground">
                    Wałbrzych to były ośrodek górniczy (do 1997r.). Dziś to ośrodek produkcji nowoczesnej i usług. Marketing musi narracyjnie przejść od przeszłości do teraźniejszości — pokazać nowoczesność biznesu wałbrzyskiego. Budowanie marki Wałbrzycha to też kreowanie nowych możliwości biznesowych.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    Turystyka biznesowa — Zamek Książ
                  </h3>
                  <p className="text-muted-foreground">
                    Zamek Książ to jedna z największych atrakcji turystycznych Dolnego Śląska (2M+ turystów rocznie). Dla firm z turystyką biznesową (hotele, eventy, konferencje) to szansa na marketing sezonowy. Fotz Studio zna specyfikę turystyki w Wałbrzychu — połączenie biznesu i wakacji.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
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
                  Pakiety marketingowe
                </h2>
                <p className="text-muted-foreground">
                  Od startupów do rozbudowanych kampanii multikanałowych.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="p-8 rounded-2xl border border-border/40 bg-card/20 hover:border-yellow-400/40 transition-colors"
                  >
                    <h3 className="font-heading font-bold text-xl mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">PLN/mies</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/kontakt">Dowiedz się więcej</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
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
                { value: "+340%", label: "wzrost ruchu (3 miesiące)" },
                { value: "TOP 3", label: "pozycje w Google" },
                { value: "4.9/5", label: "ocena (19 opinii)" },
                { value: "200+", label: "zrealizowanych kampanii" }
              ].map((s, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-yellow-400 mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
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
                  Najczęstsze pytania — agencja marketingowa Wałbrzych
                </h2>
              </motion.div>

              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border/40 rounded-xl px-6 data-[state=open]:bg-yellow-400/5"
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

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-yellow-400/90 to-yellow-500/90">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Zwiększ sprzedaż firmy z Wałbrzycha — zaplanuj marketing
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-800 mb-8">
                Bezpłatna konsultacja — 30 minut. Omówimy Twoją sytuację, konkurencję lokalną i zaproponujemy strategię dostosowaną do rynku Wałbrzycha i Dolnego Śląska.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gray-900 text-yellow-400 hover:bg-gray-800 font-semibold">
                  <Link to="/kontakt">
                    Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.p variants={fadeIn} className="text-gray-700 text-xs mt-6">
                Odpowiadamy w ciągu 24 godzin · Bez sprzedaży pod presją
              </motion.p>
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
                { label: "Agencja marketingowa Wrocław", to: "/agencja-marketingowa-wroclaw" },
                { label: "Agencja marketingowa Gdańsk", to: "/agencja-marketingowa-gdansk" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-yellow-400/40 hover:text-yellow-400 transition-colors"
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
