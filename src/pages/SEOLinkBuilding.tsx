import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart2, Globe, Link2, TrendingUp, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SEOLinkBuilding = () => {
  const features = [
    { icon: Link2, title: "Linki z mediów i prasy", desc: "Pozyskujemy wzmianki i linki z wartościowych portali branżowych, mediów lokalnych i ogólnopolskich. Każdy link to realny wzrost autorytetu domeny." },
    { icon: Globe, title: "Guest posting i artykuły sponsorowane", desc: "Publikujemy wartościowe artykuły na tematycznych blogach i serwisach. Linki kontekstowe w treści mają znacznie wyższą wartość niż linki w stopkach." },
    { icon: BarChart2, title: "Audyt profilu linkowego", desc: "Analizujemy istniejący profil backlinków, wykrywamy toksyczne linki i disavow je. Czyścimy profil i budujemy zdrową podstawę dla wzrostu." },
    { icon: TrendingUp, title: "Broken link building", desc: "Identyfikujemy złamane linki na stronach branżowych i proponujemy własne treści jako zamiennik. Skuteczna technika white-hat SEO z wysokim ROI." },
  ];

  const faqItems = [
    { question: "Ile linków potrzeba do osiągnięcia wysokich pozycji?", answer: "Nie ma jednej odpowiedzi — zależy od konkurencyjności frazy i autorytetu konkurentów. Kluczowa jest jakość linków (DR domeny, trafność tematyczna), nie ich liczba. 10 linków z autorytatywnych stron może być cenniejszych niż 100 ze słabych katalogów." },
    { question: "Czy link building jest bezpieczny?", answer: "White-hat link building (naturalne linki z wartościowych treści, relacje PR) jest całkowicie bezpieczny. Ryzykowne są zakupy linków w masowych katalogach, które Google penalizuje. Stosujemy wyłącznie metody zgodne z wytycznymi Google." },
    { question: "Jak długo trwa efekt link buildingu?", answer: "Pierwsze efekty widać po 2-3 miesiącach od pozyskania linków. Pełny wpływ na pozycje pojawia się po 4-6 miesiącach. Link building to długoterminowa inwestycja — autorytet domeny rośnie stopniowo." },
  ];

  return (
    <>
      <SEOHead
        title="Link Building i Zdobywanie Linków | Fotz Studio"
        description="Skuteczny link building dla Twojej strony. Budujemy profil backlinków wysokiej jakości — linki z mediów, branżowych serwisów i portali lokalnych."
        canonical="https://fotz.pl/seo/link-building"
        keywords="link building, zdobywanie linków, backlinki, profil linkowy, off-page seo, linki zewnętrzne"
      />
      <ServiceSchema
        name="Link Building: Skuteczne Zdobywanie Linków"
        description="Skuteczny link building dla Twojej strony. Budujemy profil backlinków wysokiej jakości — linki z mediów, branżowych serwisów i portali lokalnych."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "SEO", url: "https://fotz.pl/seo" },
        { name: "Link Building", url: "https://fotz.pl/seo/link-building" }
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
                Link Building
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Link Building: <span className="text-gradient">Skuteczne Zdobywanie Linków</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Linki zewnętrzne to jeden z najsilniejszych sygnałów rankingowych Google. Budujemy autentyczny profil backlinków, który zwiększa autorytet Twojej domeny i przesuwa stronę na szczyt wyników wyszukiwania.
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

        <ContactSection />
      </Layout>
    </>
  );
};

export default SEOLinkBuilding;
