import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Search, BarChart2, CheckCircle, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const features = [
  { icon: Search, title: "Pozycjonowanie lokalne Kraków", desc: "Optymalizujemy stronę pod frazy lokalne: '[usługa] Kraków', '[branża] Kraków' i okolice. Twoja firma pojawia się dokładnie tam, gdzie szukają Twoi klienci." },
  { icon: MapPin, title: "Google Maps i Google My Business", desc: "Optymalizujemy profil Google My Business, zbieramy opinie i dbamy o obecność w mapach. Firmy z optymalizowanym GMB mają 3x więcej kliknięć niż bez optymalizacji." },
  { icon: TrendingUp, title: "Audyt SEO dla Kraków", desc: "Analizujemy konkurencję w Kraków, identyfikujemy frazy z największym potencjałem i tworzymy strategię, która pozwoli Ci dominować lokalny rynek." },
  { icon: BarChart2, title: "Raportowanie i monitoring", desc: "Miesięczne raporty z pozycji w Google dla Kraków i okolic, ruchu organicznego i konwersji. Wiesz dokładnie, jakie efekty osiągamy." },
];

const faqItems = [
  { question: "Ile kosztuje pozycjonowanie w Kraków?", answer: "Koszt pozycjonowania w Kraków zależy od branży, liczby docelowych fraz i konkurencyjności rynku. Ceny zaczynają się od 800-1200 zł/mies. dla mniejszych firm lokalnych, a dla bardziej konkurencyjnych fraz wynoszą 2000-5000 zł/mies. Oferujemy bezpłatną wycenę po audycie." },
  { question: "Jak długo trwa pozycjonowanie w Kraków?", answer: "Pierwsze efekty (wzrost ruchu organicznego) widoczne są po 2-3 miesiącach. Stabilne wysokie pozycje dla głównych fraz osiągamy po 4-8 miesiącach. Pozycjonowanie lokalne w Kraków jest zazwyczaj szybsze niż ogólnopolskie." },
  { question: "Czy pozycjonujecie tylko firmy z Kraków?", answer: "Nie — pracujemy zdalnie z firmami z całej Polski. Nasza siedziba jest w Poznaniu, ale z sukcesem pozycjonujemy firmy w Kraków, Warszawie, Krakowie i innych miastach. Znajomość lokalnego rynku i fraz nie wymaga fizycznej obecności." },
  { question: "Co wyróżnia rynek Krakowa i Małopolski w kontekście SEO?", answer: "Kraków z 800 tys. mieszkańców to drugie największe miasto Polski i hub nowych technologii oraz turystyki. Oznacza to specyficzne frazy kluczowe, lokalną konkurencję i inne zwyczaje wyszukiwania — uwzględniamy to przy budowie strategii." },
];

const SEOPozycjonowanieKrakow = () => {
  return (
    <>
      <SEOHead
        title="Pozycjonowanie Kraków — Agencja SEO dla Firm z Krakowa | Fotz Studio"
        description="Pozycjonowanie stron internetowych Kraków — SEO lokalne i ogólnopolskie, audyt SEO, link building dla firm z Krakowa. Fotz Studio."
        canonical="https://fotz.pl/seo/pozycjonowanie-krakow"
        keywords="pozycjonowanie krakow, seo krakow, agencja seo krakow, pozycjonowanie lokalne krakow, google maps krakow"
      />
      <ServiceSchema
        name="Pozycjonowanie Kraków"
        description="Usługi SEO i pozycjonowania stron dla firm z Kraków. Zwiększamy widoczność w Google dla lokalnych fraz."
        provider="Fotz Studio"
        areaServed="Kraków"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "SEO", url: "https://fotz.pl/seo" },
        { name: "Pozycjonowanie Kraków", url: "https://fotz.pl/seo/pozycjonowanie-krakow" },
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
                <MapPin className="inline h-4 w-4 mr-1" /> Pozycjonowanie Kraków
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Pozycjonowanie <span className="text-gradient">Kraków</span>: SEO dla Lokalnych Firm
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Zwiększamy widoczność firm z Krakowa i Małopolski w Google. Kraków z 800 tys. mieszkańców to drugie największe miasto Polski i hub nowych technologii oraz turystyki. Skuteczne pozycjonowanie lokalne to dziś konieczność, nie luksus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatna wycena SEO
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/seo/audyt">Darmowy audyt</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              SEO dla Firm z Kraków
            </h2>
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
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Pytania o pozycjonowanie w Kraków
            </h2>
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
            <h2 className="text-3xl font-heading font-bold mb-6">Pozycjonowanie Kraków — agencja SEO dla firm z Krakowa i Małopolski</h2>
            <p className="text-muted-foreground mb-4">Pozycjonowanie stron internetowych Kraków to usługa dedykowana firmom z Krakowa, Małopolski i okolic. Kraków to jeden z najważniejszych rynków biznesowych w Polsce — silna konkurencja wymaga skutecznej strategii SEO, by wybić się ponad inne firmy w wynikach Google.</p>
            <p className="text-muted-foreground mb-6">Agencja SEO Kraków — Fotz Studio oferuje: audyt SEO, optymalizację techniczną strony, content marketing SEO z lokalnymi frazami, link building z portali krakowskich i ogólnopolskich, pozycjonowanie Google Maps dla firm z Krakowa.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">SEO dla firm z Krakowa — jak wygląda skuteczne pozycjonowanie?</h2>
            <p className="text-muted-foreground">Pozycjonowanie Kraków to długoterminowa inwestycja — pierwsze efekty widać po 3-6 miesiącach, a po roku SEO staje się głównym kanałem pozyskiwania klientów dla wielu firm. Przejrzyste raportowanie, regularne optymalizacje i partnerskie podejście — to nasza agencja SEO w Krakowie. Umów bezpłatną konsultację.</p>
          
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

export default SEOPozycjonowanieKrakow;
