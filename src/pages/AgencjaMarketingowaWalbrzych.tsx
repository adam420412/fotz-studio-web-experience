import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star, Building2, Globe, Target, MapPin, TrendingUp, Users, Award, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
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
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie dla firm wałbrzyskich. Raportowanie ROAS i CPL. Budżet reklamowy płacisz Google osobno i dobieramy go do celów."
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
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla firm produkcyjnych i usługowych. Spójna wizualna tożsamość ułatwia budowanie rozpoznawalnej marki."
  }
];

const faqItems = [
  {
    question: "Jak prowadzić marketing dla firm produkcyjnych w Wałbrzychu?",
    answer: "Wałbrzych to ważny ośrodek produkcyjny Dolnego Śląska — produkcja, elektromechanika, usługi B2B. Marketing musi być ukierunkowany na decydentów biznesowych: LinkedIn campaigns, content marketing dla branży, SEO dla fraz branżowych. Kampanie Google Ads dostrojone pod wysokie CPL i długie cykle sprzedaży. Pozycjonowanie organiczne (SEO) działa całorocznie — to fundament widoczności w branży."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Wałbrzycha?",
    answer: "Tak — pracujemy z Poznania, firmy z Wałbrzycha i Dolnego Śląska obsługujemy zdalnie. Współpraca przebiega online (Google Meet, Teams). Format online nie wpływa na jakość kampanii — szczególnie dla firm produkcyjnych, gdzie kampanie są długoterminowe i wymagają strategicznego podejścia."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Wałbrzychu?",
    answer: "Nie podajemy stałych cen ani pakietów. Wycenę przygotowujemy po rozmowie o zakresie: liczbie kanałów (SEO, Google Ads, Meta Ads, social media), ilości treści, produkcji wideo i grafik oraz częstotliwości raportów. Budżet reklamowy płacisz platformom (Google, Meta) zawsze osobno od naszego wynagrodzenia. Każdą wycenę poprzedzamy bezpłatną konsultacją."
  },
  {
    question: "Jakie są wyzwania marketingowe dla Wałbrzycha?",
    answer: "Główne wyzwania: przejście z marketingu tradycyjnego na cyfrowy, budowanie marki producenta, B2B outreach do partnerów biznesowych, niski budżet marketingowy vs. konkurencja z dużych miast. Przy mniejszych budżetach liczy się dobór kanałów i dokładne mierzenie wyników. Planujemy kampanie tak, by budżet szedł tam, gdzie dane pokazują realne zainteresowanie."
  },
  {
    question: "Czy oferujecie marketing dla produkcji i sektora B2B w Wałbrzychu?",
    answer: "Tak — obsługujemy firmy B2B z sektora produkcji, elektromechaniki i usług. Wałbrzych to ośrodek produkcyjny Dolnego Śląska z Wałbrzyską Specjalną Strefą Ekonomiczną. Marketing dla tego sektora to specjalistyczne podejście: LinkedIn campaigns, content marketing dla decydentów, SEO dla branżowych fraz, email marketing do partnerów. Strategię dopasowujemy do branży i grupy docelowej Twojej firmy."
  },
  {
    question: "Jak budować widoczność firmy produkcyjnej w Wałbrzychu przez cały rok?",
    answer: "Marketing całoroczny dla produkcji: SEO (organiczny, trwały ruch dla decydentów), Google Ads (dostrojone pod CPL i konwersje B2B), content marketing (artykuły branżowe, case studies), social media (LinkedIn dla firm, Instagram dla employera). LinkedIn campaigns całoroczne, remarketing dla byłych klientów, email marketing do bazy kontaktów. Dla firm z WSSE — wsparcie w promocji do sieci partnerów i inwestorów."
  }
];

export default function AgencjaMarketingowaWalbrzych() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja marketingowa Wałbrzych - fotz studio | Marketing dla firm"
          description="Agencja marketingowa Wałbrzych. Fotz Studio — strony WWW, SEO, Google Ads, social media. Marketing dla produkcji i firm B2B. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/agencja-marketingowa/walbrzych"
          keywords="agencja marketingowa wałbrzych, marketing internetowy wałbrzych, agencja reklamowa wałbrzych, seo wałbrzych"
        />

        <ServiceSchema
          name="Agencja marketingowa Wałbrzych"
          description="Kompleksowe usługi marketingu internetowego dla firm z Wałbrzycha i Dolnego Śląska — SEO, Google Ads, Meta Ads, social media, marketing B2B dla produkcji."
          provider="Fotz Studio"
          areaServed="Wałbrzych"
        />
        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Agencja marketingowa Wałbrzych", url: "https://www.fotz-studio.pl/agencja-marketingowa/walbrzych" }
          ]}/>
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
                Wałbrzych to ośrodek produkcyjny Dolnego Śląska (Wałbrzyska Specjalna Strefa Ekonomiczna) i brama do turystyki (Zamek Książ). Pracujemy z Poznania, firmy z Wałbrzycha obsługujemy zdalnie.
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
                    title: "Kampanie dopasowane do budżetu",
                    desc: "Planujemy kampanie także przy mniejszych budżetach: wybieramy kanały, które mają sens dla Twojej branży, i mierzymy, co faktycznie przynosi zapytania."
                  },
                  {
                    icon: Users,
                    title: "Dedykowany ekspert projektu",
                    desc: "Przed startem analizujemy Twoją branżę i konkurencję lokalną. Stały kontakt z osobą prowadzącą projekt. Twój partner w marketingu, nie sprzedawca usług."
                  },
                  {
                    icon: Globe,
                    title: "LinkedIn i email marketing dla B2B",
                    desc: "Kampanie LinkedIn, email marketing do bazy kontaktów, content marketing dla decydentów branżowych. Budujemy relacje biznesowe, nie klikniecia."
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
                    W WSSE działają firmy z branż takich jak elektromechanika, produkcja, logistyka i usługi B2B. Firmy w WSSE potrzebują nowoczesnego marketingu cyfrowego do komunikacji z partnerami biznesowymi, potencjalnymi inwestorami i klientami.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-yellow-400" />
                    Dziedzictwo górnicze i transformacja
                  </h3>
                  <p className="text-muted-foreground">
                    Wałbrzych to były ośrodek górniczy. Dziś to ośrodek produkcji nowoczesnej i usług. Marketing musi narracyjnie przejść od przeszłości do teraźniejszości — pokazać nowoczesność biznesu wałbrzyskiego. Budowanie marki Wałbrzycha to też kreowanie nowych możliwości biznesowych.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    Turystyka biznesowa — Zamek Książ
                  </h3>
                  <p className="text-muted-foreground">
                    Zamek Książ to jedna z najbardziej znanych atrakcji turystycznych Dolnego Śląska. Dla firm z turystyką biznesową (hotele, eventy, konferencje) to szansa na marketing sezonowy.
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
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Od czego zależy wycena
                </h2>
                <p className="text-muted-foreground">
                  Nie mamy sztywnych pakietów. Wycenę przygotowujemy po rozmowie o zakresie, a budżet reklamowy płacisz platformom zawsze osobno.
                </p>
              </motion.div>

              <motion.ul variants={fadeIn} className="space-y-3 mb-8">
                {[
                  "Liczba kanałów: SEO, Google Ads, Meta Ads, social media, LinkedIn",
                  "Ilość treści i produkcja materiałów (wideo, zdjęcia, grafiki)",
                  "Zakres strony lub sklepu, jeśli potrzebujesz nowej",
                  "Częstotliwość raportów i spotkań",
                  "Konkurencja w Twojej branży i zasięg kampanii",
                ].map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeIn} className="text-center">
                <Button asChild variant="outline">
                  <Link to="/kontakt">Zapytaj o wycenę</Link>
                </Button>
              </motion.div>
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
                Bezpłatna konsultacja online. Omówimy Twoją sytuację, konkurencję lokalną i zaproponujemy strategię dostosowaną do rynku Wałbrzycha i Dolnego Śląska.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gray-900 text-yellow-400 hover:bg-gray-800 font-semibold">
                  <Link to="/kontakt">
                    Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.p variants={fadeIn} className="text-gray-700 text-xs mt-6">
                Bez sprzedaży pod presją
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
                { label: "Agencja marketingowa Warszawa", to: "/agencja-marketingowa/warszawa" },
                { label: "Agencja marketingowa Kraków", to: "/agencja-marketingowa/krakow" },
                { label: "Agencja marketingowa Wrocław", to: "/agencja-marketingowa/wroclaw" },
                { label: "Agencja marketingowa Gdańsk", to: "/agencja-marketingowa/gdansk" },
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
