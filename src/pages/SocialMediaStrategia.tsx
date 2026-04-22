import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Users, Calendar, BarChart, TrendingUp, MessageSquare, Sparkles, Eye, Zap, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SocialMediaStrategia = () => {
  const features = [
    { icon: Users, title: "Analiza grupy docelowej", desc: "Kim są Twoi klienci w social media? Wiek, zainteresowania, godziny aktywności, preferowane formaty treści — budujemy persony na podstawie danych." },
    { icon: Target, title: "Pozycjonowanie marki", desc: "Jak chcesz być postrzegany? Ton komunikacji, wartości, wyróżniki na tle konkurencji. Spójna tożsamość, która buduje zaufanie." },
    { icon: Calendar, title: "Plan i harmonogram treści", desc: "Content calendar: tematyka, formaty (posty, relacje, reels, live), częstotliwość, optymalne godziny publikacji dla każdej platformy." },
    { icon: Sparkles, title: "Strategia contentowa", desc: "Mieszanka treści: edukacyjnych, sprzedażowych, rozrywkowych i angażujących. Zasada 80/20: 80% wartości, 20% promocji." },
    { icon: BarChart, title: "KPI i monitoring", desc: "Wskaźniki sukcesu: zasięg, zaangażowanie, kliknięcia, leady, konwersje. Miesięczne raporty i korekta strategii na podstawie danych." },
    { icon: Eye, title: "Analiza konkurencji", desc: "Co robią rynkowi liderzy? Identyfikujemy content gaps i możliwości wyróżnienia się w przestrzeni social media Twojej branży." },
  ];

  const results = [
    { value: "+200%", label: "Wzrost zaangażowania", desc: "po 3 miesiącach strategii" },
    { value: "3×", label: "Więcej leadów", desc: "ze social media do zapytań" },
    { value: "-35%", label: "Niższy koszt postu", desc: "dzięki planowaniu z wyprzedzeniem" },
    { value: "98%", label: "Spójność marki", desc: "we wszystkich kanałach" },
  ];

  const faqItems = [
    { question: "Dlaczego potrzebuję strategii social media?", answer: "Bez strategii działania w social media są chaotyczne, nieefektywne i trudne do mierzenia. Strategia definiuje cele, grupę docelową, ton komunikacji i metryki sukcesu — dzięki czemu każdy post służy konkretnemu celowi biznesowemu." },
    { question: "Na jakich platformach powinienem być aktywny?", answer: "To zależy od Twojej grupy docelowej. B2C w modzie i gastronomii → Instagram/TikTok. B2B i rekrutacja → LinkedIn. Społeczności lokalne → Facebook. Nie musisz być wszędzie — lepiej działać dobrze na 2-3 platformach niż źle na 6." },
    { question: "Jak często publikować w social media?", answer: "Jakość ważniejsza od ilości. Minimalne zalecenia: Instagram/Facebook — 4-5× tydzień, LinkedIn — 3-4× tydzień, TikTok — 5-7× tydzień. Ważniejsze niż częstotliwość jest zachowanie regularności i spójności." },
    { question: "Jak mierzyć efektywność social media?", answer: "Metryki zależą od celu: świadomość (zasięg, wyświetlenia), zaangażowanie (polubienia, komentarze, udostępnienia), ruch (kliknięcia w link), sprzedaż (konwersje, ROAS). Google Analytics 4 + Meta Ads Manager + UTM parametry dają pełen obraz." },
  ];

  return (
    <>
      <SEOHead
        title="Strategia Social Media — Planowanie i Zarządzanie Social Media"
        description="Strategia social media dla firm — tworzenie strategii, calendar content, zarządzanie profilami i mierzenie efektów. Fotz Studio."
        canonical="https://fotz.pl/social-media/strategia"
        keywords="strategia social media, social media strategia, plan social media, strategia marketingowa social media, jak zbudować strategię social media"
      />
      <ServiceSchema
        name="Strategia Social Media i Plan Contentowy"
        description="Tworzenie kompleksowych strategii social media: analiza grupy docelowej, plan treści, KPI i monitoring dla firm."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Social Media", url: "https://fotz.pl/social-media" },
        { name: "Strategia Social Media", url: "https://fotz.pl/social-media/strategia" },
      ]}/>
      <FAQSchema items={faqItems} />

      <OrganizationSchema />


      <Layout>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Link to="/social-media" className="text-primary text-sm hover:underline">Social Media</Link>
                <span className="text-muted-foreground text-sm">/</span>
                <span className="text-muted-foreground text-sm">Strategia Social Media</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Strategia Social Media
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Przypadkowe posty to strata czasu i pieniędzy. Skuteczna obecność w social media zaczyna się od strategii: kim jest Twój klient, co go angażuje i jak prowadzić go do zakupu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/konsultacja">Bezpłatna konsultacja</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/social-media">Wszystkie usługi Social Media</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Co zawiera strategia social media</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Od analizy po egzekucję — budujemy kompleksowy plan dla Twojej marki.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <f.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Efekty dobrze zaplanowanej strategii</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{r.value}</div>
                  <div className="text-sm text-foreground font-medium mb-1">{r.label}</div>
                  <div className="text-xs text-muted-foreground">{r.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Najczęstsze pytania</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left text-foreground font-medium py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related services */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Powiązane usługi</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/social-media" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Social Media Hub</Link>
              <Link to="/social-media/obsluga" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Obsługa Social Media</Link>
              <Link to="/social-media/content" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Content Social Media</Link>
              <Link to="/social-media/analityka" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Analityka Social Media</Link>
              <Link to="/content-marketing/strategia" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Content Marketing</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Strategia social media — plan działań w mediach społecznościowych</h2>
            <p className="text-muted-foreground mb-4">Strategia social media to dokument definiujący cele, grupę docelową, komunikację marki, wybór kanałów i plan contentowy dla mediów społecznościowych. Bez strategii działania w social mediach są chaotyczne i nieskuteczne. Z dobrą strategią — systematyczne i mierzalne.</p>
            <p className="text-muted-foreground mb-6">Tworzenie strategii content social media zaczyna się od audytu obecnych profili, analizy konkurencji i badania grupy docelowej. Na tej podstawie definiujemy tone of voice, główne tematy komunikacji, formaty postów i harmonogram publikacji (content calendar). Zarządzanie mediami społecznościowymi według strategii pozwala mierzyć efekty i optymalizować działania.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Zarządzanie social media — obsługa profili i social media marketing</h2>
            <p className="text-muted-foreground">Zarządzanie mediami społecznościowymi obejmuje: tworzenie i publikowanie treści, odpowiadanie na komentarze i wiadomości, prowadzenie kampanii reklamowych, analizę wyników i raportowanie. Social media marketing to połączenie organicznych działań contentowych z płatną reklamą — razem dają najlepsze efekty. Sprawdź naszą ofertę zarządzania social mediami dla firm.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/uslugi/branding" className="text-primary hover:underline font-medium text-sm">→ Branding</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default SocialMediaStrategia;
