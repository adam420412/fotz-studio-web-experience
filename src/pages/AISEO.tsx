import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, FileText, Globe, Search, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const AISEO = () => {
  const features = [
    { icon: Search, title: "Audyt widoczności w AI search", desc: "Sprawdzamy, jak ChatGPT, Perplexity i Gemini odpowiadają na pytania dotyczące Twojej branży i firmy. Identyfikujemy luki i możliwości zwiększenia obecności w AI answers." },
    { icon: FileText, title: "Treści przyjazne modelom AI", desc: "AI preferuje treści strukturalne, faktograficzne, z jasnymi nagłówkami i odpowiedziami na konkretne pytania. Tworzymy i optymalizujemy content w formacie, który AI chętnie cytuje." },
    { icon: Globe, title: "E-E-A-T i budowanie autorytetu", desc: "Modele AI preferują źródła o wysokim autorytecie (linki z mediów, cytowania, wzmianki branżowe). Budujemy profil autorytetu marki, który zwiększa szanse na cytowania w AI." },
    { icon: BarChart2, title: "Monitoring cytowań w AI", desc: "Regularnie monitorujemy, jak często i w jakim kontekście modele AI wspominają Twoją markę. Raportujemy trend i wdrażamy korekty strategii na podstawie danych." },
  ];

  const faqItems = [
    { question: "Co to jest AI SEO?", answer: "AI SEO (inaczej LLM SEO lub GEO - Generative Engine Optimization) to optymalizacja treści i marki pod kątem wyszukiwarek opartych na AI (ChatGPT, Perplexity, Gemini). Chodzi o to, żeby modele AI cytowały Twoją firmę jako wiarygodne źródło przy odpowiedziach na pytania z Twojej branży." },
    { question: "Czy AI SEO zastąpi tradycyjne SEO?", answer: "Nie — są komplementarne. Tradycyjne SEO nadal determinuje widoczność w Google. AI SEO rozszerza widoczność o nowe kanały: ChatGPT, Perplexity, Gemini. W 2025 roku oba podejścia są niezbędne do pełnej widoczności online." },
    { question: "Jak sprawdzić, czy moja firma pojawia się w AI?", answer: "Możesz ręcznie sprawdzić, pytając ChatGPT lub Perplexity: 'najlepsza agencja [branża] w [mieście]', 'kto świadczy usługi [usługa] w Polsce?' itd. Oferujemy też systematyczny monitoring i raportowanie cytowań AI." },
  ];

  return (
    <>
      <SEOHead
        title="AI SEO — Optymalizacja pod ChatGPT, Perplexity i Gemini"
        description="AI SEO — optymalizacja strony pod generatywne AI: ChatGPT, Perplexity, Google Gemini i Bing Copilot. GEO (Generative Engine Optimization). Fotz Studio."
        canonical="https://fotz.pl/ai-seo"
        keywords="ai seo, ai search, chatgpt seo, perplexity seo, optymalizacja ai, widoczność w ai, llm seo"
      />
      <ServiceSchema
        name="AI SEO: Widoczność w ChatGPT, Perplexity i Gemini"
        description="Optymalizacja widoczności w AI search: ChatGPT, Perplexity, Gemini, Claude. Sprawdź, czy Twoja firma jest cytowana przez modele AI i jak zwiększyć obecność w AI search."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "AI SEO", url: "https://fotz.pl/ai-seo" }
      ]}/>
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
                AI SEO
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                AI SEO: <span className="text-gradient">Widoczność w ChatGPT, Perplexity i Gemini</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Wyszukiwarki AI (ChatGPT, Perplexity, Gemini, Claude) stają się głównym źródłem odpowiedzi dla milionów użytkowników. Firmy, które nie są w nich cytowane, tracą widoczność — niezależnie od pozycji w Google. Optymalizujemy Twoją markę pod AI search.
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
            <h2 className="text-3xl font-heading font-bold mb-6">AI SEO — optymalizacja pod wyszukiwarki oparte na sztucznej inteligencji</h2>
            <p className="text-muted-foreground mb-4">AI SEO (Generative Engine Optimization, GEO) to nowa dyscyplina optymalizacji stron pod generatywne modele AI: ChatGPT, Perplexity, Google Gemini, Microsoft Copilot i inne asystenty AI, które coraz częściej odpowiadają na pytania użytkowników zamiast kierować ich na strony. Celem GEO jest pojawienie się Twojej marki i treści w odpowiedziach tych systemów.</p>
            <p className="text-muted-foreground mb-6">Tradycyjne SEO i AI SEO mają wiele wspólnego — obydwa wymagają tworzenia wartościowych, eksperckich treści. Jednak GEO kładzie szczególny nacisk na E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), structured data (dane strukturalne), cytowania przez autorytety branżowe i jasną strukturę treści.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Jak zoptymalizować stronę pod AI Search i Generative AI?</h2>
            <p className="text-muted-foreground mb-4">Kluczowe działania w AI SEO: tworzenie wyczerpujących, eksperckich treści odpowiadających na konkretne pytania (długie formy), implementacja structured data (JSON-LD, schema.org), budowanie autorytetu domeny przez backlinki z zaufanych źródeł, optymalizacja treści pod pytania konwersacyjne i frazy long-tail.</p>
            <p className="text-muted-foreground">Monitorowanie widoczności w AI Search to nowe wyzwanie — tradycyjne narzędzia SEO nie mierzą cytowań przez ChatGPT czy Perplexity. Nowe narzędzia do AI visibility (BrandRadar, Profound, Track AI) pozwalają śledzić, jak często i w jakim kontekście Twoja marka pojawia się w odpowiedziach AI. Połączenie klasycznego SEO z AI SEO to przyszłościowa strategia widoczności online.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/ai-marketing" className="text-primary hover:underline font-medium text-sm">→ AI Marketing</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default AISEO;
