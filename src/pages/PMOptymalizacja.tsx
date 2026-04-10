import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart, Zap, Search, CheckCircle, Sparkles, Shield, LineChart, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const PMOptymalizacja = () => {
  const features = [
    { icon: BarChart, title: "Audyt istniejących kampanii", desc: "Analizujemy strukturę kont, ustawienia, grupy reklam, targetowanie, stawki. Identyfikujemy wycieki budżetu i nieefektywne segmenty." },
    { icon: Target, title: "Optymalizacja targetowania", desc: "Precyzyjne grupy docelowe, wykluczenia, lookalike audiences, retargeting. Każda złotówka powinna trafiać do osoby z potencjałem zakupowym." },
    { icon: Zap, title: "Testy A/B kreacji i copy", desc: "Systematyczne testowanie nagłówków, grafik, CTA, landing pages. Eliminujemy przegrywające warianty i skalujemy zwycięzców." },
    { icon: TrendingUp, title: "Optymalizacja stawek i budżetów", desc: "Smart Bidding, Target ROAS, Target CPA — dobieramy strategie licytacji do celów kampanii. Alokujemy budżet do najlepiej działających kampanii." },
    { icon: Search, title: "Optymalizacja słów kluczowych", desc: "Negatywne słowa kluczowe, match types, struktura grup reklamowych. Eliminujemy niekonwertujący ruch i skupiamy budżet na frazach z intent." },
    { icon: LineChart, title: "Monitoring i raportowanie ROAS", desc: "Śledzenie ROAS, CPA, CTR, Quality Score w czasie rzeczywistym. Miesięczne raporty z rekomendacjami kolejnych kroków optymalizacyjnych." },
  ];

  const results = [
    { value: "+180%", label: "Wzrost ROAS", desc: "po pełnej optymalizacji" },
    { value: "-40%", label: "Niższy CPA", desc: "po optymalizacji targetowania" },
    { value: "3,5×", label: "Wyższy CTR", desc: "po testach A/B kreacji" },
    { value: "0 zł", label: "Marnotrawionego budżetu", desc: "po audycie i czyszczeniu" },
  ];

  const faqItems = [
    { question: "Jak szybko widać efekty optymalizacji kampanii?", answer: "Pierwsze efekty (poprawa CTR, redukcja CPC) widoczne są w ciągu 2-4 tygodni. Pełne efekty optymalizacji ROAS i CPA widać po 1-3 miesiącach systematycznej pracy, gdy algorytmy Google/Meta zbierają wystarczające dane do uczenia maszynowego." },
    { question: "Jaki ROAS powinienem osiągać?", answer: "Dobry ROAS zależy od branży i modelu biznesowego. Dla e-commerce minimum to 4-6×, dla usług może być niższy przy wysokiej wartości klienta (LTV). Najpierw obliczamy break-even ROAS dla Twojego biznesu, potem stawiamy cel." },
    { question: "Jak obniżyć CPA bez zmniejszania liczby konwersji?", answer: "Kluczowe dźwignie to: lepsza jakość landing page (wyższy CR → niższy CPA), precyzyjniejsze targetowanie, wykluczenia niekonwertujących segmentów, optymalizacja lejka konwersji. CPA = koszt kliknięcia / współczynnik konwersji — pracujemy nad oboma." },
    { question: "Czy przejmiecie zarządzanie istniejącymi kampaniami?", answer: "Tak. Zaczynamy od audytu istniejących kont reklamowych, przejmujemy zarządzanie i stopniowo wdrażamy optymalizacje. Zachowujemy historię konta (cenne dane do Smart Bidding) i nie resetujemy kampanii od zera." },
  ];

  return (
    <>
      <SEOHead
        title="Optymalizacja Kampanii Reklamowych — Poprawa ROAS i CPA | Fotz Studio"
        description="Optymalizacja kampanii reklamowych — poprawa ROAS, obniżenie CPA, testy A/B reklam, optymalizacja konwersji. Fotz Studio."
        canonical="https://fotz.pl/performance-marketing/optymalizacja"
        keywords="optymalizacja kampanii reklamowych, optymalizacja google ads, roas, cpa, optymalizacja meta ads, a/b testing reklam"
      />
      <ServiceSchema
        name="Optymalizacja Kampanii Reklamowych"
        description="Profesjonalna optymalizacja kampanii Google Ads, Meta Ads i TikTok Ads: ROAS, CPA, testy A/B, targetowanie."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Performance Marketing", url: "https://fotz.pl/performance-marketing" },
        { name: "Optymalizacja Kampanii", url: "https://fotz.pl/performance-marketing/optymalizacja" },
      ]} />
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
                <Link to="/performance-marketing" className="text-primary text-sm hover:underline">Performance Marketing</Link>
                <span className="text-muted-foreground text-sm">/</span>
                <span className="text-muted-foreground text-sm">Optymalizacja Kampanii</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Optymalizacja Kampanii Reklamowych
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Reklamy chodzą, budżet się wydaje, ale ROAS nie satysfakcjonuje? Optymalizujemy kampanie na poziomie, który przekłada się na realne wyniki biznesowe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/konsultacja">Bezpłatna konsultacja</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/performance-marketing">Wszystkie usługi Performance</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Jak optymalizujemy Twoje kampanie</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Systematyczna optymalizacja to różnica między kampanią, która kosztuje, a kampanią, która zarabia.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Wyniki optymalizacji</h2>
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
              <Link to="/performance-marketing" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Performance Marketing Hub</Link>
              <Link to="/performance-marketing/google-ads" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Google Ads</Link>
              <Link to="/performance-marketing/facebook-ads" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Facebook Ads</Link>
              <Link to="/performance-marketing/remarketing" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Remarketing</Link>
              <Link to="/performance-marketing/targetowanie" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Targetowanie</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Optymalizacja kampanii reklamowych — poprawa ROAS i obniżenie CPA</h2>
            <p className="text-muted-foreground mb-4">Optymalizacja kampanii reklamowych to systematyczny proces poprawy efektywności reklam poprzez analizę danych, testy A/B i dostosowywanie strategii. Kluczowe wskaźniki optymalizacji: ROAS (Return on Ad Spend — zwrot z wydatków na reklamy), CPA (Cost Per Acquisition — koszt pozyskania klienta), CTR (Click-Through Rate), Quality Score (Google Ads) i częstotliwość wyświetleń.</p>
            <p className="text-muted-foreground mb-6">Optymalizacja konwersji (CRO) to nieodłączny element optymalizacji kampanii — nawet najlepiej ustawiona kampania nie przyniesie efektów, jeśli strona docelowa (landing page) nie konwertuje odwiedzających w klientów. Raporty efektywności kampanii pozwalają identyfikować słabe punkty i priorytetyzować działania optymalizacyjne.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Testy A/B i analiza danych w optymalizacji reklam</h2>
            <p className="text-muted-foreground">Testy A/B kreacji reklamowych, landing page'ów i grup docelowych pozwalają systematycznie poprawiać wyniki kampanii. Monitorowanie ruchu na stronie (Google Analytics 4, Microsoft Clarity, heatmapy) dostarcza danych o zachowaniu użytkowników po kliknięciu reklamy. Systematyczna analiza seo strony i kampanii płatnych — to fundament data-driven marketingu. Zlecenie optymalizacji kampanii doświadczonym specjalistom może wielokrotnie poprawić efektywność Twojego budżetu reklamowego.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default PMOptymalizacja;
