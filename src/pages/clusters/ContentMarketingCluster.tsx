import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Mail, PenTool, Megaphone, BookOpen, ArrowRight, CheckCircle, TrendingUp, Users, BarChart3, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    icon: PenTool,
    title: "Strategia content marketing",
    description: "Budujemy strategię treści opartą na badaniu słów kluczowych, analizie konkurencji i celach biznesowych. Plan na 6-12 miesięcy z kalendarzem publikacji.",
    href: "/content-marketing/strategia",
    features: ["Badanie słów kluczowych", "Kalendarz treści", "Analiza konkurencji"],
  },
  {
    icon: FileText,
    title: "Copywriting & Landing Pages",
    description: "Teksty, które sprzedają. Copywriting na landing pages, strony ofertowe, opisy produktów i kampanie reklamowe. Każde słowo ma znaczenie.",
    href: "/content-marketing/copywriting-landing",
    features: ["Landing pages", "Opisy produktów", "Copy reklamowe"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Kampanie emailowe z wysoką konwersją. Automatyzacja, segmentacja, sekwencje powitalne i newslettery, które budują relacje z klientami.",
    href: "/content-marketing/email-2025",
    features: ["Automatyzacja", "Segmentacja", "Sekwencje emailowe"],
  },
  {
    icon: Megaphone,
    title: "Kampanie contentowe",
    description: "Kompleksowe kampanie łączące treści blogowe, social media, email i PR. Zintegrowane działania budujące autorytet marki i generujące leady.",
    href: "/content-marketing/kampanie",
    features: ["Kampanie wielokanałowe", "Content distribution", "Lead magnets"],
  },
  {
    icon: Search,
    title: "Treści SEO",
    description: "Artykuły i treści zoptymalizowane pod wyszukiwarki. Pillar pages, cluster content i long-tail, które budują widoczność organiczną.",
    href: "/content-marketing/tresci-seo",
    features: ["Pillar pages", "Cluster content", "Optymalizacja on-page"],
  },
];

const stats = [
  { value: "500+", label: "Opublikowanych artykułów", icon: FileText },
  { value: "+180%", label: "Średni wzrost ruchu z contentu", icon: TrendingUp },
  { value: "35%", label: "Konwersja z email marketingu", icon: Mail },
  { value: "60+", label: "Obsłużonych marek", icon: Users },
];

const faqs = [
  {
    question: "Czym jest content marketing i dlaczego jest ważny?",
    answer: "Content marketing to strategia tworzenia i dystrybucji wartościowych treści, które przyciągają i angażują grupę docelową. Jest ważny, bo 70% konsumentów woli poznać firmę przez artykuły niż reklamy, a content generuje 3x więcej leadów niż tradycyjny marketing."
  },
  {
    question: "Jak szybko zobaczę efekty content marketingu?",
    answer: "Pierwsze efekty SEO z treści pojawiają się po 3-6 miesiącach. Email marketing i social media content mogą generować wyniki natychmiast. Content marketing to strategia długoterminowa – najlepsze rezultaty widać po 6-12 miesiącach regularnych publikacji."
  },
  {
    question: "Czy tworzycie treści dla każdej branży?",
    answer: "Tak. Mamy doświadczenie w 30+ branżach – od medycyny po IT, od gastronomii po prawo. Każdy projekt zaczynamy od researchu branżowego. Współpracujemy z ekspertami merytorycznymi, aby treści były nie tylko dobrze napisane, ale też merytorycznie poprawne."
  },
  {
    question: "Ile kosztuje content marketing?",
    answer: "Pakiety zaczynają się od 3 000 PLN/mies. (4 artykuły + optymalizacja SEO). Pełna obsługa z email marketingiem, social media i kampaniami contentowymi to 8 000-20 000 PLN/mies. Wycena zależy od zakresu i częstotliwości publikacji."
  },
  {
    question: "Czy content marketing zastępuje reklamy?",
    answer: "Nie zastępuje, ale doskonale je uzupełnia. Content marketing buduje organiczny ruch i autorytet marki w długim terminie. Reklamy dają natychmiastowe wyniki. Najlepsza strategia łączy oba podejścia – content jako fundament, reklamy jako akcelerator."
  },
];

export default function ContentMarketingCluster() {
  return (
    <Layout>
      <SEOHead
        title="Content Marketing | Strategia Treści | Fotz Studio"
        description="Strategia content marketing, copywriting, email marketing i treści SEO. Tworzenie wartościowych treści, które przyciągają klientów."
        canonical="https://fotz.pl/content-marketing"
        keywords="content marketing, copywriting, email marketing, strategia treści, SEO content, blog firmowy, lead magnets"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Content Marketing", url: "https://fotz.pl/content-marketing" },
        ]}
      />
      <ServiceSchema
        name="Content Marketing - Fotz Studio"
        description="Strategia content marketing, copywriting, email marketing i treści SEO dla firm"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 -right-20 w-[450px] h-[450px] bg-primary/8 rounded-full blur-[130px]"
            animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-secondary/8 rounded-full blur-[100px]"
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              Treści, które konwertują
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Content{" "}
              <span className="text-gradient">Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Wartościowe treści, które przyciągają klientów, budują autorytet marki i generują leady. Od strategii po realizację – tworzymy content, który pracuje na Twój biznes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Zamów strategię contentową
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/content-marketing/strategia">Poznaj naszą ofertę</Link>
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

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nasze usługi contentowe</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Od strategii po realizację – tworzymy treści dopasowane do Twojej branży, grupy docelowej i celów biznesowych.
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

      {/* Why content marketing */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Content marketing <span className="text-gradient">w liczbach</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Content marketing kosztuje 62% mniej niż tradycyjny marketing, a generuje 3x więcej leadów. To nie trend – to fundament nowoczesnej strategii marketingowej.
              </p>
              <div className="space-y-4">
                {[
                  "70% konsumentów woli artykuły od reklam",
                  "Firmy z blogiem generują 67% więcej leadów",
                  "Content SEO obniża koszt pozyskania klienta o 60%",
                  "Email marketing ma średni ROI 42:1",
                  "Pillar pages rankują o 25% wyżej niż zwykłe artykuły",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8"
            >
              <h3 className="font-heading font-bold text-xl mb-6">Nasz proces content marketingu</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Research i strategia", desc: "Analiza słów kluczowych, konkurencji i person" },
                  { step: "02", title: "Kalendarz treści", desc: "Plan publikacji na 3-6 miesięcy" },
                  { step: "03", title: "Tworzenie contentu", desc: "Pisanie, edycja, grafiki i optymalizacja" },
                  { step: "04", title: "Publikacja i dystrybucja", desc: "Blog, social media, email, PR" },
                  { step: "05", title: "Analiza i iteracja", desc: "Mierzymy wyniki i doskonalimy strategię" },
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog highlight */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Z naszego bloga</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Copywriting na landing page – poradnik", href: "/content-marketing/copywriting-landing", icon: PenTool },
              { title: "Email marketing – trendy i strategie 2025", href: "/content-marketing/email-2025", icon: Mail },
              { title: "Kampania reklamowa i marketingowa – przykłady", href: "/content-marketing/kampanie", icon: Megaphone },
            ].map((article) => (
              <Link
                key={article.href}
                to={article.href}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <article.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-heading font-bold group-hover:text-primary transition-colors">{article.title}</h4>
                <span className="text-primary text-sm mt-3 inline-flex items-center gap-1">
                  Czytaj <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">FAQ – Content Marketing</h2>
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
              Zacznij budować markę treściami
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Porozmawiajmy o strategii contentowej dla Twojej marki. Pierwsza konsultacja jest bezpłatna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Zamów strategię contentową
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

      {/* Related */}
      <section className="py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-heading font-bold text-lg mb-6">Powiązane usługi</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "SEO i Pozycjonowanie", href: "/seo" },
              { label: "Social Media", href: "/social-media" },
              { label: "Performance Marketing", href: "/performance-marketing" },
              { label: "Strony internetowe", href: "/uslugi/strony-internetowe" },
              { label: "Blog", href: "/blog" },
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
