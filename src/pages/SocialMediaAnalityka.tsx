import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, TrendingUp, Target, Eye, Users, Zap, Search, CheckCircle, LineChart, Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SocialMediaAnalityka = () => {
  const features = [
    { icon: BarChart, title: "KPI i metryki zaangażowania", desc: "Zasięg, wyświetlenia, polubienia, komentarze, udostępnienia, saves, CTR. Śledzimy każdy wskaźnik i analizujemy trendy w czasie." },
    { icon: Users, title: "Analiza grupy docelowej", desc: "Demografie obserwujących, szczytowe godziny aktywności, lokalizacje, zainteresowania. Dane, które pozwalają dostosować content do odbiorców." },
    { icon: TrendingUp, title: "Analiza wzrostu i trendów", desc: "Monitoring tempa wzrostu followersów, identyfikacja viralowych postów i formatów, analiza sezonowości w Twojej branży." },
    { icon: LineChart, title: "Raporty miesięczne i kwartalne", desc: "Czytelne raporty PDF z interpretacją danych, rekomendacjami i porównaniem miesiąc do miesiąca. Bez żargonu, z konkretnymi wnioskami." },
    { icon: Target, title: "Tracking konwersji", desc: "Meta Pixel, TikTok Pixel, UTM parametry — łączymy social media z wynikami biznesowymi: leady, sprzedaż, rejestracje." },
    { icon: Eye, title: "Monitoring wzmianek i sentymentu", desc: "Śledzenie co mówią o Twojej marce online. Szybka reakcja na kryzysy, identyfikacja ambasadorów marki, analiza sentymentu." },
  ];

  const results = [
    { value: "100%", label: "Decyzji opartych na danych", desc: "zamiast intuicji" },
    { value: "-20%", label: "Niższy koszt na post", desc: "dzięki optymalizacji" },
    { value: "+35%", label: "Wyższe zaangażowanie", desc: "po optymalizacji contentu" },
    { value: "24/7", label: "Monitoring marki", desc: "i alertów wzmianek" },
  ];

  const faqItems = [
    { question: "Jakie narzędzia analityczne używacie?", answer: "Meta Business Suite, TikTok Analytics, LinkedIn Analytics dla danych platformowych. Metricool i Sprout Social do dashboardów zbiorczych. Google Analytics 4 + Meta Pixel do śledzenia konwersji. Brand24 do monitoringu wzmianek." },
    { question: "Jak często dostarczacie raporty?", answer: "Standard to raport miesięczny z kluczowymi KPI, analizą trendów i rekomendacjami. Na życzenie przygotowujemy raporty tygodniowe lub kwartalne. Klienci mają też dostęp do live dashboardu w czasie rzeczywistym." },
    { question: "Co to jest engagement rate i jaki jest dobry wynik?", answer: "Engagement rate to stosunek interakcji (polubienia+komentarze+udostępnienia) do zasięgu lub followersów. Dobry ER na Instagramie to 2-5%, powyżej 5% to wynik ponadprzeciętny. LinkedIn: 1-3%. TikTok: 5-10%. Benchmarki różnią się między branżami." },
    { question: "Czy mogę mieć dostęp do danych analitycznych na bieżąco?", answer: "Tak — konfigurujemy dashboard z dostępem online, gdzie możesz w każdej chwili sprawdzić kluczowe metryki. Używamy Metricool lub Data Studio (Looker Studio) jako platformy raportowej." },
  ];

  return (
    <>
      <SEOHead
        title="Analityka Social Media — Mierzenie Efektów i KPI Social Media"
        description="Analityka social media — mierzenie efektów kampanii, KPI, raporty zasięgów i zaangażowania. Optymalizacja działań w oparciu o dane. Fotz Studio."
        canonical="https://fotz.pl/social-media/analityka"
        keywords="analityka social media, raporty social media, statystyki social media, mierzenie wyników social media, kpi social media"
      />
      <ServiceSchema
        name="Analityka i Monitoring Social Media"
        description="Profesjonalna analityka social media: monitoring KPI, raportowanie, optymalizacja strategii na podstawie danych."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Social Media", url: "https://fotz.pl/social-media" },
        { name: "Analityka Social Media", url: "https://fotz.pl/social-media/analityka" },
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
                <Link to="/social-media" className="text-primary text-sm hover:underline">Social Media</Link>
                <span className="text-muted-foreground text-sm">/</span>
                <span className="text-muted-foreground text-sm">Analityka Social Media</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Analityka Social Media
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                To, czego nie mierzysz, nie możesz poprawić. Monitorujemy każdy istotny wskaźnik Twojej obecności w social media i przekładamy dane na konkretne decyzje.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Co analizujemy i raportujemy</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Dane bez interpretacji to tylko liczby. My tłumaczymy je na strategię.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Wartość analityki dla biznesu</h2>
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
              <Link to="/social-media/strategia" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Strategia Social Media</Link>
              <Link to="/social-media/content" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Content Social Media</Link>
              <Link to="/performance-marketing/google-ads" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Google Ads</Link>
              <Link to="/performance-marketing/facebook-ads" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Facebook Ads</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Analityka social media — mierzenie efektów w mediach społecznościowych</h2>
            <p className="text-muted-foreground mb-4">Analityka social media to systematyczne mierzenie i interpretacja danych z platform społecznościowych w celu optymalizacji działań marketingowych. Kluczowe KPI social media: zasięg organiczny i płatny, zaangażowanie (engagement rate), wzrost liczby obserwujących, kliknięcia w linki, konwersje z social media, koszt za kliknięcie (CPC) i koszt za tysiąc wyświetleń (CPM).</p>
            <p className="text-muted-foreground mb-6">Narzędzia analityczne social media: Meta Business Suite (Facebook, Instagram), LinkedIn Analytics, TikTok Analytics, Google Analytics 4 (atrybucja konwersji z social media). Raporty efektywności kampanii dostarczamy miesięcznie — z analizą trendów i rekomendacjami optymalizacyjnymi.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Jak mierzyć ROI z social media marketingu?</h2>
            <p className="text-muted-foreground">ROI z social media jest trudniejszy do zmierzenia niż ROI z Google Ads, ale możliwy. Kluczowe jest śledzenie konwersji (zakupy, zapytania ofertowe, zapisy na newsletter) pochodzących z social mediów. Monitorowanie ruchu na stronie z social media przez Google Analytics 4, ustawianie UTM do kampanii i śledzenie przychodów atrybucyjnych pozwala ocenić realny zwrot z inwestycji w social media marketing.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/ai-marketing" className="text-primary hover:underline font-medium text-sm">→ AI Marketing</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default SocialMediaAnalityka;
