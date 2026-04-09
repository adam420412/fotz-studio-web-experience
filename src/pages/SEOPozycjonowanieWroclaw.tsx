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
  { icon: Search, title: "Pozycjonowanie lokalne Wrocław", desc: "Optymalizujemy stronę pod frazy lokalne: '[usługa] Wrocław', '[branża] Wrocław' i okolice. Twoja firma pojawia się dokładnie tam, gdzie szukają Twoi klienci." },
  { icon: MapPin, title: "Google Maps i Google My Business", desc: "Optymalizujemy profil Google My Business, zbieramy opinie i dbamy o obecność w mapach. Firmy z optymalizowanym GMB mają 3x więcej kliknięć niż bez optymalizacji." },
  { icon: TrendingUp, title: "Audyt SEO dla Wrocław", desc: "Analizujemy konkurencję w Wrocław, identyfikujemy frazy z największym potencjałem i tworzymy strategię, która pozwoli Ci dominować lokalny rynek." },
  { icon: BarChart2, title: "Raportowanie i monitoring", desc: "Miesięczne raporty z pozycji w Google dla Wrocław i okolic, ruchu organicznego i konwersji. Wiesz dokładnie, jakie efekty osiągamy." },
];

const faqItems = [
  { question: "Ile kosztuje pozycjonowanie w Wrocław?", answer: "Koszt pozycjonowania w Wrocław zależy od branży, liczby docelowych fraz i konkurencyjności rynku. Ceny zaczynają się od 800-1200 zł/mies. dla mniejszych firm lokalnych, a dla bardziej konkurencyjnych fraz wynoszą 2000-5000 zł/mies. Oferujemy bezpłatną wycenę po audycie." },
  { question: "Jak długo trwa pozycjonowanie w Wrocław?", answer: "Pierwsze efekty (wzrost ruchu organicznego) widoczne są po 2-3 miesiącach. Stabilne wysokie pozycje dla głównych fraz osiągamy po 4-8 miesiącach. Pozycjonowanie lokalne w Wrocław jest zazwyczaj szybsze niż ogólnopolskie." },
  { question: "Czy pozycjonujecie tylko firmy z Wrocław?", answer: "Nie — pracujemy zdalnie z firmami z całej Polski. Nasza siedziba jest w Poznaniu, ale z sukcesem pozycjonujemy firmy w Wrocław, Warszawie, Krakowie i innych miastach. Znajomość lokalnego rynku i fraz nie wymaga fizycznej obecności." },
  { question: "Co wyróżnia rynek Wrocławia i Dolnego Śląska w kontekście SEO?", answer: "Wrocław to miasto o dynamicznie rosnącej scenie startupowej i jednym z najaktywniejszych rynków e-commerce w Polsce. Oznacza to specyficzne frazy kluczowe, lokalną konkurencję i inne zwyczaje wyszukiwania — uwzględniamy to przy budowie strategii." },
];

const SEOPozycjonowanieWroclaw = () => {
  return (
    <>
      <SEOHead
        title="Pozycjonowanie Wrocław – SEO dla Firm z Wrocław | Fotz Studio"
        description="Pozycjonowanie stron w Wrocław. Zwiększamy widoczność Twojej firmy w Google dla fraz lokalnych z Wrocław i okolic. Audyt SEO, Google Maps, link building."
        canonical="https://fotz.pl/seo/pozycjonowanie-wroclaw"
        keywords="pozycjonowanie wroclaw, seo wroclaw, agencja seo wroclaw, pozycjonowanie lokalne wroclaw, google maps wroclaw"
      />
      <ServiceSchema
        name="Pozycjonowanie Wrocław"
        description="Usługi SEO i pozycjonowania stron dla firm z Wrocław. Zwiększamy widoczność w Google dla lokalnych fraz."
        provider="Fotz Studio"
        areaServed="Wrocław"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "SEO", url: "https://fotz.pl/seo" },
        { name: "Pozycjonowanie Wrocław", url: "https://fotz.pl/seo/pozycjonowanie-wroclaw" },
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
                <MapPin className="inline h-4 w-4 mr-1" /> Pozycjonowanie Wrocław
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Pozycjonowanie <span className="text-gradient">Wrocław</span>: SEO dla Lokalnych Firm
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Zwiększamy widoczność firm z Wrocławia i Dolnego Śląska w Google. Wrocław to miasto o dynamicznie rosnącej scenie startupowej i jednym z najaktywniejszych rynków e-commerce w Polsce. Skuteczne pozycjonowanie lokalne to dziś konieczność, nie luksus.
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
              SEO dla Firm z Wrocław
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
              Pytania o pozycjonowanie w Wrocław
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

        <ContactSection />
      </Layout>
    </>
  );
};

export default SEOPozycjonowanieWroclaw;
