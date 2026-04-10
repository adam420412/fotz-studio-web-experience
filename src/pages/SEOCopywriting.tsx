import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, FileText, Search, Zap, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SEOCopywriting = () => {
  const features = [
    { icon: FileText, title: "Analiza intencji wyszukiwania", desc: "Przed napisaniem tekstu analizujemy, czego dokładnie szukają użytkownicy. Tworzymy treści odpowiadające na konkretne pytania i potrzeby, co przekłada się na wyższy CTR i niższy współczynnik odrzuceń." },
    { icon: Search, title: "Optymalizacja pod frazy kluczowe", desc: "Naturalne wplecenie słów kluczowych, LSI, nagłówków H1-H4 i meta tagów. Teksty czytają się naturalnie, a jednocześnie są precyzyjnie zoptymalizowane pod algorytmy Google." },
    { icon: Zap, title: "Treści konwertujące", desc: "SEO bez konwersji to strata budżetu. Każdy tekst ma jasne CTA, buduje zaufanie i prowadzi użytkownika przez lejek sprzedażowy. Łączymy SEO z psychologią sprzedaży." },
    { icon: BarChart2, title: "Aktualizacja istniejących treści", desc: "Audytujemy istniejące teksty i aktualizujemy je zgodnie z obecnymi trendami i wymaganiami algorytmów. Odświeżona treść może przeskoczyć w rankingach bez tworzenia czegoś od zera." },
  ];

  const faqItems = [
    { question: "Jak długi powinien być tekst SEO?", answer: "Nie ma sztywnej reguły, ale w 2025 roku Google premiuje treści wyczerpujące temat (zazwyczaj 800-2000+ słów dla landing pages, 1500-3000+ dla artykułów blogowych). Ważniejsza jest jakość i kompletność niż sama liczba słów." },
    { question: "Czy AI może pisać teksty SEO?", answer: "AI może wspierać copywriting, ale wymaga nadzoru eksperta. Google nie penalizuje treści AI, jeśli są wartościowe i dokładne. Używamy AI jako narzędzia do przyspieszenia pracy, ale każdy tekst jest weryfikowany i dostosowywany przez copywritera." },
    { question: "Jak szybko teksty SEO zaczną rankować?", answer: "Nowe treści mogą pojawić się w indeksie Google już po kilku dniach od publikacji. Stabilne pozycje dla docelowych fraz osiągamy zazwyczaj po 2-4 miesiącach, w zależności od konkurencyjności." },
  ];

  return (
    <>
      <SEOHead
        title="SEO Copywriting — Pisanie Tekstów pod SEO i Pozycjonowanie | Fotz Studio"
        description="SEO copywriting — tworzenie treści zoptymalizowanych pod wyszukiwarki: artykuły SEO, opisy produktów, teksty na stronę. Pisanie tekstów dla Google i czytelnika. Fotz Studio."
        canonical="https://fotz.pl/seo/copywriting-seo"
        keywords="copywriting seo, teksty seo, pisanie treści seo, treści pod google, artykuły seo, opisy seo"
      />
      <ServiceSchema
        name="Copywriting SEO: Teksty, Które Rankują"
        description="Profesjonalny copywriting SEO: teksty na strony, opisy produktów, artykuły blogowe. Piszemy treści, które rankują wysoko i konwertują odwiedzających w klientów."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "SEO", url: "https://fotz.pl/seo" },
        { name: "Copywriting SEO", url: "https://fotz.pl/seo/copywriting-seo" }
      ]} />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

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
                Copywriting SEO
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Copywriting SEO: <span className="text-gradient">Teksty, Które Rankują</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Dobra treść to fundament skutecznego SEO. Piszemy teksty, które odpowiadają na intencje użytkowników, zawierają właściwe frazy kluczowe i są na tyle wartościowe, że Google chce je pokazywać na pierwszej stronie wyników.
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
            <h2 className="text-3xl font-heading font-bold mb-6">SEO copywriting — tworzenie treści pod wyszukiwarki internetowe</h2>
            <p className="text-muted-foreground mb-4">SEO copywriting to sztuka tworzenia treści, które są jednocześnie wartościowe dla czytelnika i zoptymalizowane pod wyszukiwarki internetowe. Dobry tekst SEO naturalnie wplata słowa kluczowe w merytoryczną, angażującą treść — bez sztucznego upychania fraz kluczowych (keyword stuffing), które algorytmy Google penalizują.</p>
            <p className="text-muted-foreground mb-6">Analiza słów kluczowych to fundament SEO copywritingu — identyfikacja fraz, których szukają Twoi potencjalni klienci, pozwala tworzyć treści, które odpowiadają na ich rzeczywiste pytania i potrzeby. Narzędzia do badania słów kluczowych (Ahrefs, Semrush) są niezbędne w pracy copywritera SEO.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Artykuły SEO, opisy produktów i teksty na stronę — co wchodzi w SEO copywriting?</h2>
            <p className="text-muted-foreground mb-4">SEO copywriting obejmuje: artykuły blogowe zoptymalizowane pod long-tail keywords, opisy produktów i kategorii w sklepach e-commerce, teksty na strony usługowe i landingowe, meta tytuly i meta opisy, nagłówki H1-H6 z kluczowymi frazami oraz alternatywne opisy obrazów (atrybuty alt).</p>
            <p className="text-muted-foreground">Optymalizacja pod wyszukiwarki (SEO) i pisanie dla ludzi to nie wykluczające się cele — wręcz przeciwnie. Treści, które faktycznie odpowiadają na pytania użytkowników, naturalnie spełniają wymogi Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). SEO copywriting to inwestycja, która pracuje miesiącami i latami po publikacji.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
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

export default SEOCopywriting;
