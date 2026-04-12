import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, FileText, Heading1, Image, Zap, Code2, CheckCircle, TrendingUp, Target, BarChart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SEOOnPage = () => {
  const features = [
    { icon: FileText, title: "Meta tagi (title, description)", desc: "Optymalizujemy tytuły i opisy stron pod kluczowe frazy. Właściwe meta tagi zwiększają CTR w wynikach wyszukiwania nawet o 30%." },
    { icon: Heading1, title: "Struktura nagłówków H1-H6", desc: "Poprawna hierarchia nagłówków pomaga robotom Google zrozumieć strukturę treści i zwiększa trafność tematyczną strony." },
    { icon: FileText, title: "Optymalizacja treści", desc: "Tworzymy i optymalizujemy treści bogate w słowa kluczowe, odpowiadające na intencje użytkowników. Unikalny, wartościowy content." },
    { icon: Image, title: "Optymalizacja obrazów", desc: "Alt texty, kompresja, lazy loading, nowoczesne formaty (WebP, AVIF). Obrazy muszą być szybkie i opisane dla Google Images." },
    { icon: Zap, title: "Core Web Vitals", desc: "LCP, CLS, INP — kluczowe wskaźniki doświadczenia użytkownika. Optymalizujemy je, bo Google używa ich jako sygnałów rankingowych." },
    { icon: Code2, title: "Schema Markup", desc: "Dane strukturalne JSON-LD: FAQ, LocalBusiness, Product, Article. Rich snippets wyróżniają stronę w SERP i zwiększają CTR." },
  ];

  const results = [
    { value: "+45%", label: "Średni wzrost CTR", desc: "po optymalizacji meta tagów" },
    { value: "Top 3", label: "Pozycje dla fraz", desc: "po pełnej optymalizacji" },
    { value: "-40%", label: "Mniej błędów crawl", desc: "po poprawie struktury" },
    { value: "98/100", label: "PageSpeed Score", desc: "dla zoptymalizowanych stron" },
  ];

  const faqItems = [
    { question: "Co to jest optymalizacja on-page?", answer: "Optymalizacja on-page (SEO na stronie) obejmuje wszystkie działania podejmowane bezpośrednio na stronie internetowej: meta tagi, nagłówki, treści, strukturę URL, szybkość ładowania, dane strukturalne i wewnętrzne linkowanie. To fundament każdej strategii SEO." },
    { question: "Od czego zacząć optymalizację on-page?", answer: "Zaczynamy od audytu SEO, który identyfikuje największe problemy. Następnie priorytetyzujemy: najpierw błędy techniczne (błędy crawl, duplikaty), potem meta tagi, treści, a na końcu zaawansowane elementy jak schema markup." },
    { question: "Jak długo trwa optymalizacja on-page?", answer: "Pierwsze wyniki widoczne są już po 4-8 tygodniach od wdrożenia zmian. Pełne efekty optymalizacji on-page widać po 3-6 miesiącach, gdy Google przeprowadziło recrawl i zaktualizowało rankingi." },
    { question: "Czy optymalizacja on-page wystarczy bez link buildingu?", answer: "Dla konkurencyjnych fraz sam on-page może nie wystarczyć — potrzebny jest też autorytet (linki). Jednak dla fraz lokalnych i niszowych dobrze zoptymalizowany on-page często daje silne wyniki bez agresywnego link buildingu." },
  ];

  return (
    <>
      <SEOHead
        title="Optymalizacja On-Page SEO — Techniczne i Treściowe SEO Strony | Fotz Studio"
        description="Optymalizacja SEO on-page — poprawa struktury strony, meta tagów, nagłówków, treści i szybkości ładowania. Zwiększ widoczność w Google. Fotz Studio."
        canonical="https://fotz.pl/seo/on-page"
        keywords="optymalizacja on-page, seo on-page, meta tagi seo, nagłówki seo, core web vitals, schema markup, tytuły stron seo, optymalizacja treści seo, seo techniczne on-page, content seo"
      />
      <ServiceSchema
        name="Optymalizacja On-Page SEO"
        description="Kompleksowa optymalizacja on-page dla stron internetowych: meta tagi, treści, nagłówki, szybkość ładowania, schema markup."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "SEO", url: "https://fotz.pl/seo" },
        { name: "Optymalizacja On-Page", url: "https://fotz.pl/seo/on-page" },
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
                <Link to="/seo" className="text-primary text-sm hover:underline">SEO</Link>
                <span className="text-muted-foreground text-sm">/</span>
                <span className="text-muted-foreground text-sm">Optymalizacja On-Page</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Optymalizacja On-Page SEO
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Wszystkie elementy bezpośrednio na Twojej stronie, które Google analizuje. Meta tagi, nagłówki, treści, szybkość i dane strukturalne — optymalizujemy każdy z nich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/konsultacja">Bezpłatna konsultacja</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/seo">Wszystkie usługi SEO</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Co optymalizujemy On-Page</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Każdy element strony ma wpływ na pozycje. Działamy kompleksowo.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Efekty optymalizacji on-page</h2>
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
              <Link to="/seo" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">SEO Hub</Link>
              <Link to="/seo/off-page" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">SEO Off-Page</Link>
              <Link to="/seo/techniczne" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">SEO Techniczne</Link>
              <Link to="/seo/audyt" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Audyt SEO</Link>
              <Link to="/seo/pozycjonowanie" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Pozycjonowanie</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Optymalizacja SEO on-page — optymalizacja stron internetowych pod kątem SEO</h2>
            <p className="text-muted-foreground mb-4">Optymalizacja SEO on-page to zbiór działań wykonywanych bezpośrednio na stronie internetowej, by poprawić jej widoczność w wynikach wyszukiwania Google. Optymalizacja stron internetowych pod kątem SEO obejmuje: poprawę meta tagów (tytuł, opis), optymalizację nagłówków H1-H6, treści stron, linkowania wewnętrznego, struktury URL i szybkości ładowania.</p>
            <p className="text-muted-foreground mb-6">Optymalizacja SEO on-page jest fundamentem każdej strategii SEO — bez niej nawet najlepsza kampania link buildingowa nie przyniesie oczekiwanych rezultatów. Analiza SEO strony pozwala zidentyfikować konkretne elementy do poprawy i ustalić priorytety działań optymalizacyjnych.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Optymalizacja pod wyszukiwarki internetowe (SEO) — narzędzia i techniki</h2>
            <p className="text-muted-foreground mb-4">Narzędzia do badania słów kluczowych (Ahrefs, Semrush, Google Keyword Planner) pomagają identyfikować frazy, na które warto optymalizować treści. Google Search Console dostarcza danych o aktualnej widoczności strony i błędach technicznych. Google Analytics umożliwia śledzenie ruchu organicznego i konwersji z SEO.</p>
            <p className="text-muted-foreground mb-6">Optymalizacja treści on-page skupia się na tworzeniu wartościowych, eksperckich artykułów odpowiadających na pytania użytkowników (E-E-A-T). Core Web Vitals — LCP, FID i CLS — to techniczne wskaźniki SEO mierzone przez Google, które bezpośrednio wpływają na ranking strony w wynikach wyszukiwania.</p>

            <h3 className="text-2xl font-heading font-bold mb-4">SEO on-page vs. SEO off-page — kluczowe różnice</h3>
            <p className="text-muted-foreground">SEO on-page obejmuje elementy strony, nad którymi masz bezpośrednią kontrolę. SEO off-page to działania poza stroną — przede wszystkim link building i budowanie autorytetu domeny. Skuteczna strategia SEO łączy oba podejścia: optymalizacja stron internetowych pod kątem SEO (on-page) tworzy solidne fundamenty, a link building wzmacnia pozycję w wynikach wyszukiwania Google.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/seo/audyt" className="text-primary hover:underline font-medium text-sm">→ Audyt SEO</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default SEOOnPage;
