import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Target, Search, Facebook, Instagram, Linkedin, Video, BarChart3, ArrowRight, CheckCircle, TrendingUp, DollarSign, Zap, RotateCcw } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    icon: Search,
    title: "Google Ads",
    description: "Kampanie w wyszukiwarce Google, Display, YouTube i Shopping. Precyzyjne targetowanie, optymalizacja stawek i ciągła analiza wyników.",
    href: "/performance-marketing/google-ads",
    features: ["Search & Display", "YouTube Ads", "Google Shopping"],
  },
  {
    icon: Facebook,
    title: "Facebook Ads",
    description: "Kampanie na Facebooku z zaawansowanym targetowaniem. Lookalike audiences, retargeting i optymalizacja pod konwersje.",
    href: "/performance-marketing/facebook-ads",
    features: ["Lookalike audiences", "Retargeting", "Lead generation"],
  },
  {
    icon: Instagram,
    title: "Instagram Ads",
    description: "Reklamy na Instagramie: Stories, Reels, karuzele i kolekcje. Wizualne formaty, które angażują i konwertują.",
    href: "/performance-marketing/instagram-ads",
    features: ["Stories & Reels Ads", "Karuzele", "Shopping Ads"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Ads",
    description: "Kampanie B2B na LinkedInie. Docieraj do decision-makerów po stanowisku, branży i firmie. Idealne dla usług i SaaS.",
    href: "/performance-marketing/linkedin-ads",
    features: ["Targetowanie B2B", "Sponsored Content", "InMail Ads"],
  },
  {
    icon: Video,
    title: "TikTok Ads",
    description: "Reklamy na TikToku z natywnym contentem. Docieraj do młodszej audiencji z formatami, które nie wyglądają jak reklama.",
    href: "/performance-marketing/tiktok-ads",
    features: ["In-Feed Ads", "Spark Ads", "Creative support"],
  },
  {
    icon: Video,
    title: "YouTube Ads",
    description: "Kampanie video na YouTube. Pre-roll, bumper ads i discovery. Buduj świadomość marki i generuj konwersje.",
    href: "/performance-marketing/youtube-ads",
    features: ["Pre-roll & bumper", "Discovery Ads", "Remarketing video"],
  },
  {
    icon: Target,
    title: "Meta Ads (Facebook + Instagram)",
    description: "Zintegrowane kampanie na Facebooku i Instagramie. Wykorzystujemy synergię obu platform dla maksymalnego ROI.",
    href: "/performance-marketing/meta-ads",
    features: ["Cross-platform", "Advantage+", "Catalog Ads"],
  },
  {
    icon: RotateCcw,
    title: "Remarketing",
    description: "Odzyskuj użytkowników, którzy odwiedzili Twoją stronę. Remarketing dynamiczny, sekwencyjny i cross-platform.",
    href: "/performance-marketing/remarketing",
    features: ["Remarketing dynamiczny", "Sekwencje reklamowe", "Cross-platform"],
  },
  {
    icon: Zap,
    title: "Optymalizacja Kampanii",
    description: "Zwiększamy ROAS, obniżamy CPA, testujemy kreacje i targetowanie. Systematyczna optymalizacja oparta na danych.",
    href: "/performance-marketing/optymalizacja",
    features: ["Audyt kampanii", "Testy A/B", "Optymalizacja ROAS/CPA"],
  },
  {
    icon: Target,
    title: "Precyzyjne Targetowanie",
    description: "Grupy docelowe, lookalike audiences, retargeting, custom audiences z CRM. Każda złotówka do właściwej osoby.",
    href: "/performance-marketing/targetowanie",
    features: ["Lookalike audiences", "Retargeting", "Custom audiences"],
  },
];

const stats = [
  { value: "8.5x", label: "Średni ROAS klientów", icon: DollarSign },
  { value: "200+", label: "Zarządzanych kampanii", icon: Target },
  { value: "-42%", label: "Redukcja kosztu leada", icon: TrendingUp },
  { value: "3M+", label: "Budżetu reklamowego/rok", icon: Zap },
];

const faqs = [
  {
    question: "Jaki budżet reklamowy potrzebuję na start?",
    answer: "Rekomendujemy minimum 3 000-5 000 PLN/mies. na jedną platformę. Mniejsze budżety nie dają wystarczających danych do optymalizacji. Dla kampanii wieloplatformowych zalecamy 8 000+ PLN/mies."
  },
  {
    question: "Która platforma reklamowa będzie najlepsza dla mojego biznesu?",
    answer: "To zależy od grupy docelowej. Google Ads działa najlepiej, gdy ludzie aktywnie szukają Twojego produktu. Meta Ads świetnie buduje świadomość i generuje popyt. LinkedIn to must-have dla B2B. Dobieramy platformy na podstawie analizy."
  },
  {
    question: "Jak szybko zobaczę wyniki z kampanii?",
    answer: "Pierwsze wyniki pojawiają się w ciągu 1-2 tygodni. Pełna optymalizacja kampanii wymaga 4-8 tygodni na zebranie danych i dopracowanie targetowania. Google Ads zwykle daje szybsze efekty niż kampanie awareness."
  },
  {
    question: "Czy zarządzacie budżetem reklamowym?",
    answer: "Tak. Zarządzamy pełnym budżetem reklamowym na wszystkich platformach. Optymalizujemy stawki, alokację budżetu między kampaniami i testujemy różne strategie licytowania dla najlepszego ROI."
  },
  {
    question: "Czym różnicie się od freelancera lub samodzielnego zarządzania?",
    answer: "Mamy doświadczenie z 200+ kampaniami i budżetami 3M+ PLN/rok. Znamy pułapki, które kosztują. Używamy zaawansowanych narzędzi analitycznych i strategii, które wymagają ekspertyzy – np. remarketing sekwencyjny czy Attribution Modeling."
  },
];

export default function PerformanceMarketingCluster() {
  return (
    <Layout>
      <SEOHead
        title="Performance Marketing | Kampanie Ads | Fotz Studio"
        description="Google Ads, Facebook Ads, Instagram, LinkedIn, TikTok i YouTube Ads. Kampanie reklamowe z mierzalnym ROI. Agencja performance Poznań."
        canonical="https://fotz.pl/performance-marketing"
        keywords="performance marketing, Google Ads, Facebook Ads, kampanie reklamowe, remarketing, LinkedIn Ads, TikTok Ads, ROAS"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Performance Marketing", url: "https://fotz.pl/performance-marketing" },
        ]}
      />
      <ServiceSchema
        name="Performance Marketing - Fotz Studio"
        description="Kampanie reklamowe Google Ads, Facebook Ads, Instagram, LinkedIn, TikTok i YouTube z optymalizacją pod ROI"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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
              Mierzalne wyniki
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Performance{" "}
              <span className="text-gradient">Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Kampanie reklamowe z mierzalnym zwrotem na inwestycję. Google Ads, Meta Ads, LinkedIn, TikTok i YouTube – zarządzamy budżetami, które pracują na Twój zysk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Bezpłatny audyt kampanii
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/performance-marketing/google-ads">Google Ads</Link>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Platformy reklamowe</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zarządzamy kampaniami na wszystkich kluczowych platformach. Dobieramy kanały do Twojej grupy docelowej i celów biznesowych.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={service.href}
                  className="group block h-full p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-3">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground/70">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why performance marketing */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Każda złotówka <span className="text-gradient">pracuje na wynik</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Performance marketing to precyzja. Nie przepalamy budżetów na przypadkowe wyświetlenia. Każda kampania jest monitorowana, optymalizowana i raportowana w czasie rzeczywistym.
              </p>
              <div className="space-y-4">
                {[
                  "Optymalizacja pod konwersje, nie kliknięcia",
                  "Zaawansowane Attribution Modeling",
                  "A/B testy kreacji i landing pages",
                  "Remarketing sekwencyjny cross-platform",
                  "Comiesięczne raporty z rekomendacjami",
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
              className="bg-card rounded-2xl border border-border/50 p-8"
            >
              <h3 className="font-heading font-bold text-xl mb-6">Jak pracujemy?</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Audyt i analiza", desc: "Sprawdzamy obecne kampanie i konkurencję" },
                  { step: "02", title: "Strategia i setup", desc: "Konfigurujemy tracking, kampanie i kreacje" },
                  { step: "03", title: "Launch i testy", desc: "Uruchamiamy kampanie z A/B testami" },
                  { step: "04", title: "Optymalizacja", desc: "Codziennie monitorujemy i optymalizujemy" },
                  { step: "05", title: "Skalowanie", desc: "Zwiększamy budżet na kampanie, które konwertują" },
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

      {/* Google vs Facebook comparison callout */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/performance-marketing/google-vs-facebook"
            className="group block p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all text-center"
          >
            <BarChart3 className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
              Google Ads vs Facebook Ads – co wybrać?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-4">
              Porównanie obu platform z konkretnymi przykładami i rekomendacjami dla różnych branż i budżetów.
            </p>
            <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
              Czytaj porównanie <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">FAQ – Kampanie reklamowe</h2>
          </motion.div>
          <FAQSchema items={faqs} />
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
              Zacznij kampanie, które zarabiają
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Bezpłatny audyt Twoich obecnych kampanii lub konsultacja strategiczna dla nowych. Pokażemy, jak wycisnąć więcej z budżetu reklamowego.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Bezpłatny audyt kampanii
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
              { label: "Content Marketing", href: "/content-marketing" },
              { label: "Strony internetowe", href: "/uslugi/strony-internetowe" },
              { label: "Kalkulator ROI", href: "/kalkulator-roi" },
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
