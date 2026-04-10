import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, FileText, Search, Zap, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const AIMarketing = () => {
  const features = [
    { icon: Zap, title: "Automatyzacja kampanii reklamowych", desc: "AI optymalizuje stawki, targetowanie i kreacje reklamowe w czasie rzeczywistym. Meta Advantage+, Google Performance Max i inne systemy AI — zarządzamy nimi strategicznie." },
    { icon: FileText, title: "Generowanie treści z AI", desc: "ChatGPT, Claude, Gemini jako narzędzia do produkcji treści: artykuły, opisy produktów, maile, posty social media. AI przyspiesza produkcję 5-10x przy zachowaniu jakości." },
    { icon: BarChart2, title: "AI Analityka i predykcja", desc: "Modele predykcyjne analizują zachowanie użytkowników i prognozują konwersje. Segmentacja oparta na AI, LTV klienta, churn prediction — decyzje oparte na danych." },
    { icon: Search, title: "Optymalizacja pod AI search", desc: "ChatGPT, Perplexity i Gemini zmieniają sposób wyszukiwania informacji. Optymalizujemy treści tak, aby Twoja firma była cytowana przez modele AI jako wiarygodne źródło." },
  ];

  const faqItems = [
    { question: "Czy AI zastąpi agencje marketingowe?", answer: "AI zmienia sposób pracy agencji, ale ich nie zastąpi. Strategia, kreatywność, rozumienie kontekstu biznesowego i zarządzanie relacjami z klientami wymagają ludzkiego podejścia. AI jest narzędziem, które amplifikuje możliwości agencji — dlatego z nim pracujemy." },
    { question: "Jakie narzędzia AI wdrażacie?", answer: "Pracujemy z ChatGPT, Claude, Gemini, Midjourney, HeyGen (wideo AI), Eleven Labs (voice), n8n i Make (automatyzacje), Zapier, Notion AI i wieloma innymi. Dobieramy narzędzia do konkretnych potrzeb biznesowych." },
    { question: "Ile kosztuje wdrożenie AI w marketingu?", answer: "Zależy od zakresu. Podstawowe automatyzacje (np. AI do generowania postów social media) można wdrożyć za 500-1500 zł/mies. Kompleksowe wdrożenie AI (automatyzacje, analityka, chatbot) to 3000-8000 zł. Zwrot z inwestycji pojawia się zwykle w ciągu 2-4 miesięcy." },
  ];

  return (
    <>
      <SEOHead
        title="AI Marketing — Sztuczna Inteligencja w Marketingu | Fotz Studio"
        description="AI Marketing — wykorzystanie sztucznej inteligencji w strategii marketingowej: automatyzacja, personalizacja treści, AI copywriting i analityka…"
        canonical="https://fotz.pl/ai-marketing"
        keywords="ai marketing, sztuczna inteligencja marketing, marketing automation ai, narzędzia ai marketing, chatgpt marketing"
      />
      <ServiceSchema
        name="AI w Marketingu: Automatyzacja, Treści i Analityka"
        description="Wykorzystaj AI w marketingu: automatyzacja kampanii, generowanie treści, analiza danych, chatboty. Implementujemy narzędzia AI, które oszczędzają czas i zwiększają efektywność."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "AI Marketing", url: "https://fotz.pl/ai-marketing" }
      ]} />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />


      <Layout>
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                AI Marketing
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                AI w Marketingu: <span className="text-gradient">Automatyzacja, Treści i Analityka</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Sztuczna inteligencja rewolucjonizuje marketing. Firmy, które wdrożą AI już teraz, zyskają przewagę, której konkurenci nie nadgonią przez lata. Implementujemy narzędzia AI, które realnie zwiększają sprzedaż i redukują koszty operacyjne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/seo/audyt">Darmowy audyt SEO</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Co obejmuje usługa?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((f) => (
              <div key={f.title} className="bg-card border rounded-xl p-6 hover:border-primary/40 transition-colors">
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Często zadawane pytania</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-heading font-semibold py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">AI marketing — sztuczna inteligencja w marketingu cyfrowym</h2>
            <p className="text-muted-foreground mb-4">AI marketing to wykorzystanie narzędzi opartych na sztucznej inteligencji do automatyzacji, personalizacji i optymalizacji działań marketingowych. Od automatycznego generowania treści (AI copywriting), przez inteligentne targetowanie reklam, po predyktywną analitykę marketingową — AI zmienia sposób, w jaki firmy komunikują się z klientami.</p>
            <p className="text-muted-foreground mb-6">Marketing automation z elementami AI pozwala personalizować komunikację e-mailową, rekomendacje produktowe i reklamy w czasie rzeczywistym, na podstawie zachowania użytkownika. Inbound marketingu strategia wsparta przez AI jest znacznie efektywniejsza — systemy AI analizują dane i optymalizują content pod konkretnych odbiorców.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Narzędzia AI w marketingu — co możesz zautomatyzować?</h2>
            <p className="text-muted-foreground mb-4">AI copywriting (ChatGPT, Claude, Gemini) przyspiesza tworzenie treści — artykułów, opisów produktów, postów social media i emaili marketingowych. AI w reklamach (Google Performance Max, Meta Advantage+) automatyzuje targetowanie i optymalizację stawek w kampaniach PPC. Analityka predyktywna pomaga prognozować zachowania klientów i wartość lifetime (CLV).</p>
            <p className="text-muted-foreground">AI marketing nie zastępuje strategii marketingowej — ją wzmacnia. Potrzebujesz nadal jasnych celów biznesowych, znajomości grupy docelowej i kreatywności. AI to narzędzie, które pozwala działać szybciej, taniej i precyzyjniej. Dowiedz się, jak wdrożyć AI w swoim marketingu — umów bezpłatną konsultację.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/ai-seo" className="text-primary hover:underline font-medium text-sm">→ AI SEO</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default AIMarketing;
