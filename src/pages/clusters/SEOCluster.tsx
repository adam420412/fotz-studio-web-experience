import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, BarChart3, MapPin, ShoppingCart, ArrowRight, CheckCircle, TrendingUp, Eye, Target, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    icon: Search,
    title: "Audyt SEO",
    description: "Kompleksowa analiza techniczna Twojej strony, identyfikacja błędów i rekomendacje. Audytujemy Core Web Vitals, strukturę URL, indeksację i content.",
    href: "/seo/audyt",
    features: ["Analiza techniczna", "Core Web Vitals", "Raport z rekomendacjami"],
  },
  {
    icon: TrendingUp,
    title: "Pozycjonowanie stron",
    description: "Długoterminowa strategia SEO budująca organiczną widoczność. Optymalizacja on-page, link building i monitoring pozycji na kluczowe frazy.",
    href: "/seo/pozycjonowanie",
    features: ["Strategia słów kluczowych", "Link building", "Monitoring pozycji"],
  },
  {
    icon: MapPin,
    title: "SEO Lokalne Poznań",
    description: "Dominuj w lokalnych wynikach wyszukiwania. Optymalizacja Google Business Profile, cytaty NAP i strategie dla firm działających lokalnie.",
    href: "/seo/lokalne-poznan",
    features: ["Google Business Profile", "Cytaty NAP", "Mapy Google"],
  },
  {
    icon: MapPin,
    title: "Pozycjonowanie Google Maps",
    description: "Zwiększ widoczność w Mapach Google. Optymalizacja profilu, zbieranie opinii, lokalne słowa kluczowe i zarządzanie obecnością w mapach.",
    href: "/seo/google-maps",
    features: ["Optymalizacja profilu", "Zarządzanie opiniami", "Local Pack"],
  },
  {
    icon: ShoppingCart,
    title: "SEO dla e-commerce",
    description: "Specjalistyczne pozycjonowanie sklepów internetowych. Optymalizacja kart produktów, kategorii, filtrów i struktury danych produktowych.",
    href: "/seo/ecommerce",
    features: ["Schema produktowe", "Optymalizacja kategorii", "Filtry faceted"],
  },
  {
    icon: BarChart3,
    title: "Pozycjonowanie Poznań",
    description: "Dedykowane usługi SEO dla firm z Poznania i okolic. Lokalna ekspertyza, znajomość rynku i bezpośredni kontakt z zespołem.",
    href: "/seo/pozycjonowanie-poznan",
    features: ["Lokalna ekspertyza", "Bezpośredni kontakt", "Raporty miesięczne"],
  },
];

const stats = [
  { value: "150+", label: "Zoptymalizowanych stron", icon: Eye },
  { value: "Top 3", label: "Pozycje dla klientów", icon: Target },
  { value: "+340%", label: "Średni wzrost ruchu organicznego", icon: TrendingUp },
  { value: "98%", label: "Klientów z widocznym wzrostem", icon: Zap },
];

const faqs = [
  {
    question: "Ile trwa pozycjonowanie strony?",
    answer: "Pierwsze efekty widoczne są po 3-6 miesiącach. Pełne rezultaty SEO budują się w ciągu 6-12 miesięcy. To inwestycja długoterminowa – raz zbudowana widoczność utrzymuje się latami."
  },
  {
    question: "Czy SEO się opłaca dla małej firmy?",
    answer: "Zdecydowanie tak. SEO lokalne pozwala małym firmom konkurować z dużymi graczami w swoim regionie. Koszt pozyskania klienta przez SEO jest wielokrotnie niższy niż przez płatne reklamy."
  },
  {
    question: "Co obejmuje audyt SEO?",
    answer: "Audyt SEO obejmuje analizę techniczną (szybkość, indeksacja, Core Web Vitals), analizę on-page (treści, meta tagi, nagłówki), analizę off-page (profil linków) oraz rekomendacje z priorytetyzacją działań."
  },
  {
    question: "Jaka jest różnica między SEO a Google Ads?",
    answer: "SEO buduje długotrwałą, organiczną widoczność – efekty utrzymują się po zakończeniu działań. Google Ads daje natychmiastowy ruch, ale wymaga stałego budżetu. Najlepsza strategia łączy oba kanały."
  },
  {
    question: "Czy pozycjonujecie strony na WordPressie?",
    answer: "Tak, pozycjonujemy strony na każdej platformie – WordPress, Shopify, custom CMS i inne. Każda platforma wymaga specyficznego podejścia technicznego, które znamy i stosujemy."
  },
];

export default function SEOCluster() {
  return (
    <Layout>
      <SEOHead
        title="SEO i Pozycjonowanie Stron | Fotz Studio Poznań"
        description="Kompleksowe usługi SEO: audyt, pozycjonowanie, SEO lokalne, Google Maps. Zwiększ widoczność w Google i pozyskuj klientów organicznie."
        canonical="https://fotz.pl/seo"
        keywords="SEO, pozycjonowanie stron, audyt SEO, SEO lokalne, pozycjonowanie Poznań, Google Maps, optymalizacja"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "SEO i Pozycjonowanie", url: "https://fotz.pl/seo" },
        ]}
      />
      <ServiceSchema
        name="SEO i Pozycjonowanie - Fotz Studio"
        description="Kompleksowe usługi SEO: audyt techniczny, pozycjonowanie stron, SEO lokalne i optymalizacja e-commerce"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Organiczny wzrost
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              SEO i{" "}
              <span className="text-gradient">Pozycjonowanie</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Zwiększ widoczność Twojej strony w Google i przyciągnij klientów, którzy aktywnie szukają Twoich usług. Budujemy długoterminową strategię SEO opartą na danych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Bezpłatna konsultacja SEO
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/seo/audyt">Zamów audyt SEO</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nasze usługi SEO</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Od audytu technicznego po kompleksowe pozycjonowanie – dobieramy strategię do Twoich celów biznesowych.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={service.href}
                  className="group block h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Dowiedz się więcej <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Dlaczego SEO to <span className="text-gradient">najlepsza inwestycja?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                SEO to jedyny kanał marketingowy, który z czasem staje się tańszy. W przeciwieństwie do reklam płatnych, ruch organiczny nie wymaga stałego budżetu reklamowego – raz zbudowana widoczność generuje ruch przez lata.
              </p>
              <div className="space-y-4">
                {[
                  "Niższy koszt pozyskania klienta (CAC) niż w reklamach",
                  "Ruch organiczny rośnie nawet po zakończeniu współpracy",
                  "Użytkownicy z Google mają wyższy współczynnik konwersji",
                  "SEO buduje zaufanie – 70% użytkowników omija reklamy",
                  "Efekt kuli śnieżnej – każdy miesiąc wzmacnia pozycje",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card rounded-2xl border border-border/50 p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Jak działamy?</h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Audyt i analiza", desc: "Diagnozujemy stan Twojej strony i konkurencji" },
                    { step: "02", title: "Strategia SEO", desc: "Dobieramy słowa kluczowe i plan działań" },
                    { step: "03", title: "Optymalizacja", desc: "Wdrażamy zmiany techniczne i contentowe" },
                    { step: "04", title: "Link building", desc: "Budujemy autorytet domeny naturalnie" },
                    { step: "05", title: "Monitoring i raport", desc: "Śledzimy pozycje i raportujemy postępy" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Najczęstsze pytania o SEO</h2>
          </motion.div>
          <FAQSchema faqs={faqs} />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Gotowy na wzrost widoczności?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Porozmawiajmy o Twoich celach. Bezpłatna konsultacja SEO pomoże nam zaproponować strategię dopasowaną do Twojego budżetu i branży.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Umów bezpłatną konsultację
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+48790814814">Zadzwoń: 790 814 814</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-heading font-bold text-lg mb-6">Powiązane usługi</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Google Ads", href: "/performance-marketing/google-ads" },
              { label: "Content Marketing", href: "/content-marketing" },
              { label: "Strony internetowe", href: "/uslugi/strony-internetowe" },
              { label: "Social Media", href: "/social-media" },
              { label: "E-commerce", href: "/uslugi/strony-internetowe/ecommerce" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
