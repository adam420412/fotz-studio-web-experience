import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight, CheckCircle, TrendingUp, BarChart3, RefreshCcw, Zap, Star, Phone, Target, Plus, Minus, Cuboid, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, lazy, Suspense } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const ModelViewer3D = lazy(() => import("@/components/ModelViewer3D").then(module => ({ default: module.ModelViewer3D })));

// Import case study images
import vertheImage from "@/assets/portfolio/verthe.png";
import klageImage from "@/assets/portfolio/klagem.png";
import cuteDumplingImage from "@/assets/portfolio/cute-dumpling-new.png";
import friendlyGasImage from "@/assets/portfolio/friendly-gas-new.png";

const caseStudies = [
  {
    title: "Verthé",
    description: "Kompleksowa obsługa e-commerce dla marki modowej - sklep, kampanie reklamowe i content marketing.",
    image: vertheImage,
    results: ["+320% wzrost sprzedaży", "ROAS 8.5", "+45% AOV"],
    href: "/realizacje/verthe",
  },
  {
    title: "Klagem",
    description: "Rebranding i nowy sklep internetowy dla marki kosmetycznej z kampaniami performance.",
    image: klageImage,
    results: ["+250% konwersji", "Nowa identyfikacja", "Sukces rebrandingu"],
    href: "/realizacje/klagem",
  },
  {
    title: "Cute Dumpling",
    description: "Branding i sklep online dla marki lifestyle z optymalizacją pod mobile.",
    image: cuteDumplingImage,
    results: ["85% ruchu z mobile", "+180% sprzedaży", "Silny brand"],
    href: "/realizacje/cute-dumpling",
  },
  {
    title: "Friendly Gas",
    description: "Platforma e-commerce B2B z systemem zamówień i integracją z magazynem.",
    image: friendlyGasImage,
    results: ["+400% zamówień online", "Automatyzacja procesów", "Oszczędność czasu"],
    href: "/realizacje/friendly-gas",
  },
];

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Kampanie Google Ads i Meta Ads nastawione na ROAS i skalowanie sprzedaży.",
  },
  {
    icon: BarChart3,
    title: "Optymalizacja konwersji (CRO)",
    description: "Analiza lejka sprzedażowego i optymalizacja każdego kroku customer journey.",
  },
  {
    icon: RefreshCcw,
    title: "Remarketing",
    description: "Odzyskiwanie porzuconych koszyków i cross-selling dla wyższego AOV.",
  },
  {
    icon: Zap,
    title: "Automatyzacja",
    description: "Marketing automation, email marketing i personalizacja komunikacji.",
  },
];

const metrics = [
  { value: "8.5x", label: "Średni ROAS" },
  { value: "+320%", label: "Wzrost sprzedaży" },
  { value: "45%", label: "Wzrost AOV" },
  { value: "2.5%", label: "Konwersja" },
];

const benefits = [
  "Doświadczenie z platformami Shopify, WooCommerce, PrestaShop",
  "Strategie skalowania od małych do dużych budżetów",
  "Pełna analityka i atrybucja konwersji",
  "Integracja z Google Analytics 4 i Meta Pixel",
  "Kampanie produktowe i dynamiczny remarketing",
  "Optymalizacja feed'ów produktowych",
];

const faqItems = [
  {
    question: "Jaki budżet reklamowy potrzebuję na start?",
    answer: "Dla małych sklepów rekomendujemy start od 3000-5000 zł miesięcznie na reklamy (Google + Meta). Pozwala to zebrać dane i zoptymalizować kampanie. Większe sklepy z szerszym asortymentem powinny zaczynać od 10000+ zł miesięcznie.",
  },
  {
    question: "Co to jest ROAS i jaki powinienem mieć?",
    answer: "ROAS (Return on Ad Spend) to zwrot z wydatków reklamowych. Jeśli ROAS wynosi 5x, oznacza to, że każda wydana złotówka na reklamy generuje 5 zł przychodu. Dobry ROAS zależy od marży - przy marży 30% potrzebujesz minimum ROAS 3.3x, aby wyjść na zero.",
  },
  {
    question: "Jak długo trwa optymalizacja kampanii e-commerce?",
    answer: "Pierwsze wyniki widoczne są po 2-4 tygodniach. Pełna optymalizacja kampanii trwa 2-3 miesiące - algorytmy potrzebują danych o konwersjach. Po tym okresie kampanie osiągają stabilną wydajność i można je skalować.",
  },
  {
    question: "Czy pomożecie z remarketingiem?",
    answer: "Tak, remarketing to nasza specjalność. Konfigurujemy dynamiczny remarketing produktowy, kampanie odzyskiwania porzuconych koszyków i cross-selling. Remarketing często ma najwyższy ROAS ze wszystkich kanałów.",
  },
  {
    question: "Jakie platformy e-commerce obsługujecie?",
    answer: "Mamy doświadczenie ze wszystkimi popularnymi platformami: Shopify, WooCommerce, PrestaShop, Magento, Shoper, IdoSell. Integrujemy się z każdą platformą obsługującą feedy produktowe.",
  },
  {
    question: "Czy zajmujecie się również SEO dla sklepów?",
    answer: "Tak, oferujemy pełne SEO e-commerce: optymalizację kategorii i produktów, content marketing, link building i technical SEO. SEO to świetne uzupełnienie płatnych kampanii - buduje długoterminowy, darmowy ruch.",
  },
];

export default function DlaKogoEcommerce() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  return (
    <Layout>
      <SEOHead
        title="Marketing dla E-commerce — SEO, Google Shopping i Reklamy dla Sklepów Internetowych | Fotz Studio"
        description="Marketing e-commerce: SEO sklepów internetowych, Google Shopping, Meta Ads, email marketing i automatyzacja. Fotz Studio pomaga sklepom online rosnąć…"
        canonical="https://fotz.pl/dla-kogo/ecommerce"
        keywords="marketing e-commerce, sklepy internetowe, performance marketing, ROAS, CRO"
      />
      
      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla e-commerce"
        description="Kompleksowe usługi marketingowe dla sklepów internetowych - performance marketing, CRO, remarketing i automatyzacja."
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "E-commerce", url: "https://fotz.pl/dla-kogo/ecommerce" },
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
            <Link 
              to="/dla-kogo" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              ← Wróć do grup docelowych
            </Link>
            
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-primary" />
            </div>
            
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Sklepy internetowe
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Marketing dla{" "}
              <span className="text-gradient">e-commerce</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Skalujemy sprzedaż w sklepach internetowych poprzez performance marketing, 
              optymalizację konwersji i automatyzację. Od małych butików po duże platformy 
              - wiemy, jak zwiększyć Twoje przychody.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatny audyt sklepu
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

      {/* Animated Metrics */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} suffix="%" label="Średni wzrost ROAS" index={0} />
            <AnimatedCounter end={180} suffix="%" label="Wzrost konwersji" index={1} />
            <AnimatedCounter end={50} suffix="+" label="Sklepów e-commerce" index={2} />
            <AnimatedCounter end={10} prefix="" suffix=" mln zł" label="Wygenerowanej sprzedaży" index={3} />
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
              Jak skalujemy <span className="text-gradient">Twój e-commerce?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kompleksowe podejście do marketingu e-commerce - od pozyskiwania ruchu 
              po optymalizację konwersji i retencję klientów.
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

      {/* Why Us */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Dlaczego <span className="text-gradient">Fotz Studio?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Specjalizujemy się w marketingu e-commerce. Rozumiemy metryki, 
                które napędzają wzrost sklepów internetowych i wiemy, jak je optymalizować.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
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
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-heading font-bold">Nasz proces</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Audyt", desc: "Analizujemy Twój sklep, analitykę i konkurencję" },
                    { step: "02", title: "Strategia", desc: "Tworzymy plan działania z jasnymi KPI" },
                    { step: "03", title: "Wdrożenie", desc: "Uruchamiamy kampanie i optymalizacje" },
                    { step: "04", title: "Skalowanie", desc: "Zwiększamy budżety i maksymalizujemy ROAS" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-primary font-bold">{item.step}</span>
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
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
              Zobacz, jak pomagamy sklepom internetowym zwiększać sprzedaż.
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
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
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
              Odpowiedzi na najczęstsze pytania o marketing e-commerce.
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
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-muted-foreground">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dla kogo - inne grupy */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">Sprawdź też rozwiązania dla innych branż:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/dla-kogo/firmy-lokalne" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                Firmy lokalne
              </Link>
              <Link to="/dla-kogo/marki-premium" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                Marki premium
              </Link>
              <Link to="/dla-kogo/instytucje" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary/50 transition-colors">
                Instytucje i eventy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Configurator Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Cuboid className="w-4 h-4" />
              <span className="text-sm font-medium">Konfiguratory 3D dla e-commerce</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Interaktywne konfiguratory produktów
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tworzymy zaawansowane konfiguratory 3D, które pozwalają klientom wizualizować produkty 
              przed zakupem. Zwiększ konwersję i zmniejsz zwroty.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
              <Suspense fallback={<div className="aspect-video bg-muted animate-pulse flex items-center justify-center"><span className="text-muted-foreground">Ładowanie modelu 3D...</span></div>}>
                <ModelViewer3D 
                  modelUrl="/models/regulator-3d.glb" 
                  title="Konfigurator produktu 3D" 
                  description="Przykład interaktywnego konfiguratora - obracaj modelem myszką lub dotykiem" 
                />
              </Suspense>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Zobacz działający konfigurator 3D na stronie klienta:
              </p>
              <Button asChild size="lg" className="group">
                <a href="https://klagem.pl/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Zobacz konfigurator na klagem.pl
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Skaluj swój <span className="text-gradient">e-commerce</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Zamów bezpłatny audyt swojego sklepu. Pokażemy Ci, gdzie tracisz 
              sprzedaż i jak to naprawić.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt" className="group">
                  Bezpłatny audyt sklepu
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/realizacje">Zobacz wszystkie realizacje</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Marketing dla e-commerce — jak skutecznie promować sklep internetowy?
            </h2>
            <p className="text-muted-foreground mb-4">
              Marketing e-commerce różni się od marketingu usług — kluczowe są tu
              Google Shopping, SEO produktowe, retargeting i email marketing.
              Fotz Studio specjalizuje się w marketingu dla sklepów internetowych
              i e-commerce. Pomagamy sklepom zwiększyć widoczność w Google,
              obniżyć koszt pozyskania klienta i zwiększyć średnią wartość koszyka.
            </p>
            <p className="text-muted-foreground mb-6">
              Kompleksowy marketing e-commerce to synergia kanałów: SEO organiczne
              buduje długoterminowy ruch, Google Shopping i Meta Ads generują
              szybką sprzedaż, email marketing i automatyzacja pielęgnują relacje
              z klientami i stymulują powroty do sklepu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Google Shopping, SEO e-commerce i reklamy dla sklepów — jak to robimy
            </h2>
            <p className="text-muted-foreground mb-4">
              Google Shopping to jeden z najefektywniejszych kanałów dla e-commerce —
              reklamy produktowe z ceną i zdjęciem wyświetlają się na samej górze
              wyników wyszukiwania. Zarządzamy feed produktowym, strategiami stawek
              i strukturą kampanii Shopping dla maksymalizacji ROAS.
            </p>
            <p className="text-muted-foreground mb-6">
              SEO dla sklepów e-commerce obejmuje: optymalizację kart produktów,
              kategorii i stron filtrowania (faceted navigation), budowanie linków
              do stron produktowych, SEO techniczne (Core Web Vitals, szybkość,
              dane strukturalne schema.org dla produktów i recenzji).
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Email marketing i automatyzacja dla e-commerce — odzysk porzuconych koszyków i retencja
            </h2>
            <p className="text-muted-foreground mb-4">
              Email marketing dla e-commerce to jeden z kanałów z najwyższym ROI.
              Konfigurujemy automatyzacje: odzysk porzuconych koszyków (średnio 10-15%
              konwersji), sekwencje powitalne, rekomendacje produktowe po zakupie
              i kampanie win-back dla nieaktywnych klientów.
            </p>
            <p className="text-muted-foreground">
              Fotz Studio obsługuje sklepy internetowe na każdym etapie — od startupu
              z pierwszymi produktami po duże sklepy z tysiącami SKU. Skontaktuj się
              z nami po bezpłatny audyt marketingowy swojego sklepu e-commerce.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
