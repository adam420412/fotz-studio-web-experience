import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ShoppingCart, ArrowRight, CheckCircle, CreditCard, Truck, 
  Bot, Palette, TrendingUp, Users, Package, Plus, Minus, 
  Phone, BarChart3, Zap, Settings, Globe, Target
} from "lucide-react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { RelatedServices } from "@/components/sections/RelatedServices";

// Import portfolio images
import klageImage from "@/assets/portfolio/klagem.png";
import vertheImage from "@/assets/portfolio/verthe.png";
import friendlyGasImage from "@/assets/portfolio/friendly-gas-new.png";
import cuteDumplingImage from "@/assets/portfolio/cute-dumpling-new.png";

const caseStudies = [
  {
    title: "Klagem",
    description: "Sklep internetowy dla marki kosmetyków premium z pełną integracją płatności.",
    image: klageImage,
    results: ["+250% konwersji", "Integracja PayU", "Mobile-first"],
    href: "/realizacje/klagem",
  },
  {
    title: "Verthé",
    description: "E-commerce dla marki modowej z zaawansowaną filtracją produktów.",
    image: vertheImage,
    results: ["+320% sprzedaży", "UX optymalizacja", "ROAS 8.5"],
    href: "/realizacje/verthe",
  },
  {
    title: "Friendly Gas",
    description: "Platforma B2B e-commerce z systemem zamówień hurtowych.",
    image: friendlyGasImage,
    results: ["Automatyzacja B2B", "Integracja ERP", "+400% zamówień"],
    href: "/realizacje/friendly-gas",
  },
  {
    title: "Cute Dumpling",
    description: "Sklep lifestyle z optymalizacją pod urządzenia mobilne.",
    image: cuteDumplingImage,
    results: ["85% ruchu mobile", "Szybki checkout", "+180% sprzedaży"],
    href: "/realizacje/cute-dumpling",
  },
];

const services = [
  {
    icon: Palette,
    title: "Projekt UX/UI sklepu",
    description: "Atrakcyjny wygląd sklepu dopasowany do Twojej branży z intuicyjną nawigacją.",
  },
  {
    icon: CreditCard,
    title: "Integracja płatności",
    description: "PayPal, Przelewy24, BLIK, płatności odroczone - wszystko, czego potrzebują klienci.",
  },
  {
    icon: Truck,
    title: "Integracja z kurierami",
    description: "Automatyczna wysyłka z InPost, DPD, DHL i innymi popularnymi kurierami.",
  },
  {
    icon: Bot,
    title: "AI i automatyzacja",
    description: "Chatboty, rekomendacje produktów i automatyczne opisy dzięki sztucznej inteligencji.",
  },
];

const platforms = [
  { name: "Shopify", desc: "Idealne dla początkujących" },
  { name: "WooCommerce", desc: "Elastyczność WordPress" },
  { name: "PrestaShop", desc: "Rozbudowane funkcje" },
  { name: "Webflow", desc: "Nowoczesny design" },
  { name: "Magento", desc: "Enterprise e-commerce" },
  { name: "Custom", desc: "Rozwiązania dedykowane" },
];

const processSteps = [
  {
    step: "01",
    title: "Wybór platformy e-commerce",
    desc: "Pomagamy wybrać platformę dopasowaną do Twoich potrzeb i budżetu.",
  },
  {
    step: "02",
    title: "Projekt i wygląd sklepu",
    desc: "Tworzymy atrakcyjny wizualnie i funkcjonalny design e-sklepu.",
  },
  {
    step: "03",
    title: "Integracje i płatności",
    desc: "Konfigurujemy systemy płatności, kurierów i narzędzia sprzedażowe.",
  },
  {
    step: "04",
    title: "Dodawanie produktów",
    desc: "Pomagamy z katalogiem produktów, zdjęciami i opisami SEO.",
  },
  {
    step: "05",
    title: "Testy i uruchomienie",
    desc: "Dokładne testy i płynny start Twojego sklepu internetowego.",
  },
];

const benefits = [
  "Sprzedaż online 24/7 bez ograniczeń",
  "Dotarcie do klientów z całej Polski i świata",
  "Niższe koszty niż sklep stacjonarny",
  "Pełna automatyzacja procesów sprzedażowych",
  "Analityka i dane o zachowaniach klientów",
  "Skalowanie biznesu bez limitów",
];

const faqItems = [
  {
    question: "Jak założyć sklep internetowy?",
    answer: "Aby założyć sklep internetowy, potrzebujesz odpowiedniej platformy e-commerce, która pozwoli Ci tworzyć atrakcyjny wizualnie i funkcjonalny e-sklep. Następnie musisz zadbać o integrację z systemami płatności i dostawy, a także o odpowiednie oprogramowanie do zarządzania sprzedażą.",
  },
  {
    question: "Ile kosztuje stworzenie sklepu internetowego?",
    answer: "Koszt sklepu internetowego zależy od złożoności i funkcjonalności. Podstawowy sklep na Shopify lub WooCommerce to koszt od 5000 zł. Rozbudowane sklepy z integracjami ERP i dedykowanymi funkcjami to 15000-50000 zł i więcej.",
  },
  {
    question: "Jaką platformę e-commerce wybrać?",
    answer: "Wybór platformy zależy od Twoich potrzeb. Shopify jest idealne dla początkujących - szybki start i intuicyjna obsługa. WooCommerce daje większą elastyczność. Magento sprawdzi się w dużych sklepach enterprise. Pomożemy wybrać najlepsze rozwiązanie.",
  },
  {
    question: "Jak zwiększyć sprzedaż w sklepie internetowym?",
    answer: "Kluczowe elementy to: optymalizacja UX i ścieżki zakupowej, remarketing do porzuconych koszyków, kampanie Google i Meta Ads, SEO dla produktów, email marketing i programy lojalnościowe. Oferujemy kompleksową obsługę marketingową e-commerce.",
  },
  {
    question: "Czy AI może pomóc w prowadzeniu sklepu?",
    answer: "Tak! AI może automatycznie generować opisy produktów, personalizować rekomendacje, obsługiwać klientów przez chatboty i analizować zachowania użytkowników. To oszczędność czasu i lepsze doświadczenia zakupowe.",
  },
  {
    question: "Jak zintegrować sklep z systemami płatności?",
    answer: "Integrujemy sklepy z popularnymi bramkami: PayU, Przelewy24, PayPal, Stripe, BLIK, płatności odroczone. Konfiguracja obejmuje też faktury automatyczne i rozliczenia. Bezpieczne płatności zwiększają zaufanie klientów.",
  },
  {
    question: "Jak wybrać odpowiedniego kuriera dla e-sklepu?",
    answer: "Wybór kuriera zależy od rodzaju produktów i oczekiwań klientów. Integrujemy sklepy z InPost (Paczkomaty), DPD, DHL, Poczta Polska. Warto oferować kilka opcji dostawy - to zwiększa konwersję.",
  },
  {
    question: "Jakie są najczęstsze błędy przy zakładaniu sklepu?",
    answer: "Najczęstsze błędy to: brak optymalizacji SEO, słaby UX i skomplikowany checkout, brak wersji mobilnej, złe zdjęcia produktów, brak remarketingu. Pomagamy unikać tych pułapek od samego początku.",
  },
];

export default function EcommerceTworzenie() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Sklep Internetowy | Tworzenie E-commerce | Fotz"
        description="Tworzymy sklepy internetowe - wybór platformy, integracje płatności, automatyzacja AI. Zacznij sprzedaż online. Fotz Studio."
        canonical="https://fotz.pl/uslugi/ecommerce"
      />

      <OrganizationSchema />
      <ServiceSchema
        name="Tworzenie sklepów internetowych e-commerce"
        description="Kompleksowe tworzenie sklepów internetowych - wybór platformy, projekt UX/UI, integracje płatności i dostaw, automatyzacja AI."
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "E-commerce", url: "https://fotz.pl/ecommerce-tworzenie-sklepu" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              E-commerce
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Załóż Sklep Internetowy Online:{" "}
              <span className="text-gradient">Platforma, Tworzenie E-sklepu</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Chcesz założyć sklep internetowy i rozpocząć sprzedaż online? Pomożemy Ci przejść 
              przez cały proces tworzenia sklepu internetowego, od wyboru odpowiedniej platformy 
              e-commerce po integrację z systemami płatności i dostawy.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatna wycena sklepu
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+48790814814" className="group">
                  <Phone className="w-5 h-5" />
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is E-commerce */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Co to jest <span className="text-gradient">e-commerce?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>E-commerce to nic innego jak sprzedaż online.</strong> Dzięki e-commerce 
                każdy sprzedawca może rozszerzyć swój zasięg i dotrzeć do nowych klientów. 
                Możesz sprzedawać produkty AGD, RTV i wiele innych.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                E-commerce to także wygodne zakupy online dla użytkowników, którzy mogą dokonywać 
                zakupów z dowolnego miejsca i o dowolnej porze.
              </p>
              
              <ul className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Globe, value: "24/7", label: "Sprzedaż non-stop" },
                { icon: Users, value: "∞", label: "Nieograniczony zasięg" },
                { icon: TrendingUp, value: "+320%", label: "Średni wzrost sprzedaży" },
                { icon: BarChart3, value: "2.5%", label: "Konwersja e-commerce" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 text-center border border-border"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Integracja i <span className="text-gradient">oprogramowanie</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferujemy pełen zakres usług związanych z tworzeniem i integracją sklepów internetowych.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Wybór platformy <span className="text-gradient">e-commerce</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              <strong>Wybór platformy e-commerce jest kluczowy dla sukcesu Twojego sklepu online.</strong>{" "}
              Platforma powinna być intuicyjna w obsłudze i oferować szerokie możliwości personalizacji.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background rounded-xl p-6 text-center border border-border hover:border-primary/50 transition-all duration-300"
              >
                <Settings className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-bold mb-1">{platform.name}</h3>
                <p className="text-xs text-muted-foreground">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Kroki do <span className="text-gradient">uruchomienia e-sklepu</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Przeprowadzamy przez cały proces - od pomysłu po działający sklep internetowy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <span className="text-4xl font-heading font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-lg font-heading font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Wygląd sklepu <span className="text-gradient">online</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Atrakcyjny wygląd sklepu online jest kluczowy dla przyciągnięcia uwagi 
                potencjalnych klientów.</strong> Projektując wygląd sklepu, warto dopasować go 
                do swojej branży i zadbać o estetykę oraz funkcjonalność.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Elementy UX mają ogromny wpływ na to, jak użytkownicy postrzegają sklep internetowy. 
                <strong> Ważne jest, aby tworzyć wygodne i intuicyjne procesy zakupowe</strong>, 
                które ułatwiają klientom znalezienie i zakup produktów.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Responsywny design na wszystkie urządzenia",
                  "Szybkie ładowanie strony",
                  "Intuicyjna nawigacja i filtry",
                  "Prosty proces checkout",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Dlaczego dobry UX?</h3>
              <div className="space-y-6">
                {[
                  { value: "+35%", label: "Wyższa konwersja dzięki optymalizacji UX" },
                  { value: "-60%", label: "Mniej porzuconych koszyków" },
                  { value: "+45%", label: "Wyższa średnia wartość zamówienia" },
                  { value: "2x", label: "Więcej powracających klientów" },
                ].map((stat, index) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <span className="text-2xl font-heading font-bold text-primary min-w-[80px]">{stat.value}</span>
                    <span className="text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-gradient">AI</span> w sklepie internetowym
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Wdrożenie AI może zwiększyć efektywność obsługi klienta, personalizację ofert 
              i rekomendacje produktów, co przyciąga klientów i poprawia rozpoznawalność marki.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Bot, title: "Chatboty AI", desc: "Automatyczna obsługa klienta 24/7" },
              { icon: Zap, title: "Rekomendacje", desc: "Personalizowane sugestie produktów" },
              { icon: Package, title: "Auto-opisy", desc: "Generowanie opisów produktów AI" },
              { icon: BarChart3, title: "Analityka AI", desc: "Predykcja zachowań klientów" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Nasze <span className="text-gradient">realizacje e-commerce</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zobacz sklepy internetowe, które stworzyliśmy dla naszych klientów.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.results.map((result) => (
                      <span
                        key={result}
                        className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" asChild className="group/btn">
                    <Link to={study.href}>
                      Zobacz case study
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Często zadawane <span className="text-gradient">pytania</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Odpowiedzi na najczęstsze pytania o tworzenie sklepów internetowych.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-heading font-bold pr-4">{item.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-muted-foreground">{item.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Powiązane <span className="text-gradient">usługi</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uzupełnij swój sklep internetowy o dodatkowe usługi, które zwiększą sprzedaż.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/strony-internetowe" 
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                Strony Internetowe
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Strony firmowe, landing page i witryny korporacyjne.
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm group-hover:gap-2 transition-all">
                Dowiedz się więcej <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link 
              to="/pozycjonowanie" 
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                Pozycjonowanie SEO
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Zwiększ widoczność sklepu w Google i zdobywaj organiczny ruch.
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm group-hover:gap-2 transition-all">
                Dowiedz się więcej <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link 
              to="/google-ads" 
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                Google Ads
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Kampanie produktowe i remarketing dla e-commerce.
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm group-hover:gap-2 transition-all">
                Dowiedz się więcej <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>


      {/* Related Services */}
      <RelatedServices 
        currentService="ecommerce"
        subtitle="Usługi wspierające sprzedaż w Twoim sklepie internetowym"
      />

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <ShoppingCart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Gotowy na <span className="text-gradient">sprzedaż online?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Skontaktuj się z nami i otrzymaj bezpłatną wycenę sklepu internetowego 
              dopasowanego do Twoich potrzeb.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Zamów bezpłatną wycenę
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+48790814814" className="group">
                  <Phone className="w-5 h-5" />
                  790 814 814
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
