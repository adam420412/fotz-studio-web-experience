import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link2, Globe, ExternalLink, TrendingUp, Target, Shield, Search, BarChart, Zap, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SEOOffPage = () => {
  const features = [
    { icon: Link2, title: "Pozyskiwanie linków (Link Building)", desc: "Naturalne linki z wartościowych, tematycznych stron. Artykuły gościnne, katalogi branżowe, portale medialne — bez farm linków i PBN." },
    { icon: Globe, title: "Digital PR i wzmianki", desc: "Publikacje w mediach online, wywiady i artykuły eksperckie. Każda wzmianka o Twojej firmie buduje autorytet i widoczność marki." },
    { icon: ExternalLink, title: "Linkowanie wewnętrzne", desc: "Optymalizacja struktury linków wewnętrznych. Przepływ PageRank między podstronami to jeden z najczęściej pomijanych elementów SEO." },
    { icon: Search, title: "Analiza profilu linków konkurencji", desc: "Sprawdzamy skąd linkują liderzy w Twojej branży. Identyfikujemy możliwości pozyskania tych samych lub lepszych linków." },
    { icon: Shield, title: "Audyt toksycznych linków", desc: "Usuwamy lub dezawuujemy spamowe linki, które mogą obniżać rankingi lub przyciągać kary manualne od Google." },
    { icon: BarChart, title: "Monitoring i raportowanie", desc: "Śledzenie nowych i utraconych linków, zmian Domain Rating, widoczności. Miesięczne raporty z postępów." },
  ];

  const results = [
    { value: "+280%", label: "Wzrost Domain Rating", desc: "średnio po 12 miesiącach" },
    { value: "500+", label: "Linków pozyskanych", desc: "dla klientów w 2025 roku" },
    { value: "Top 5", label: "Pozycje dla trudnych fraz", desc: "po 6 miesiącach link buildingu" },
    { value: "0", label: "Kar od Google", desc: "dzięki naturalnym metodom" },
  ];

  const faqItems = [
    { question: "Czym jest SEO off-page?", answer: "SEO off-page obejmuje wszystkie działania poza Twoją stroną, które wpływają na jej pozycje w Google: link building, digital PR, wzmianki w mediach, recenzje. Najważniejszy element to pozyskiwanie wartościowych linków zwrotnych (backlinków)." },
    { question: "Ile linków potrzebuję do wypozycjonowania?", answer: "Nie chodzi o ilość, ale o jakość. Jeden link z autorytety serwisu (DR 70+) jest wart więcej niż setki linków ze spamowych katalogów. Analizujemy profil konkurencji i opracowujemy strategię dopasowaną do Twojej niszy." },
    { question: "Czy link building jest bezpieczny?", answer: "Tak, o ile stosuje się naturalne metody: artykuły gościnne, digital PR, budowanie relacji z webmasterami. Niebezpieczny jest zakup linków w farmach, PBN i sieciach linków. My stosujemy wyłącznie metody white hat." },
    { question: "Jak szybko link building daje efekty?", answer: "Google musi najpierw odkryć i ocenić nowe linki, co zajmuje kilka tygodni. Pierwsze efekty widoczne są po 2-4 miesiącach, a stabilne wzrosty po 6-12 miesiącach systematycznego link buildingu." },
  ];

  return (
    <>
      <SEOHead
        title="SEO Off-Page — Link Building, Digital PR i Budowanie Autorytetu | Fotz Studio"
        description="SEO off-page — budowanie linków zewnętrznych, digital PR, guest posting i wzmacnianie autorytetu domeny. Skuteczne SEO poza stroną. Fotz Studio."
        canonical="https://fotz.pl/seo/off-page"
        keywords="seo off-page, link building, linki zewnętrzne seo, budowanie linków, seo off site, pozycjonowanie off-page, profil linków seo, backlinki, seo poza stroną, link building agencja"
      />
      <ServiceSchema
        name="SEO Off-Page i Link Building"
        description="Profesjonalny link building i budowanie autorytetu domeny dla stron internetowych. Bezpieczne, naturalne pozyskiwanie linków."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "SEO", url: "https://fotz.pl/seo" },
        { name: "SEO Off-Page i Link Building", url: "https://fotz.pl/seo/off-page" },
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
                <span className="text-muted-foreground text-sm">SEO Off-Page i Link Building</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                SEO Off-Page i Link Building
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Autorytet domeny to sygnał, który Google waży najsilniej. Budujemy go przez wartościowe linki, wzmianki i digital PR — naturalnie i bezpiecznie.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Jak budujemy autorytet Twojej domeny</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Każdy link to głos zaufania dla Google. Pozyskujemy te, które naprawdę podnoszą rankingi.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Wyniki link buildingu</h2>
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
              <Link to="/seo/on-page" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">SEO On-Page</Link>
              <Link to="/seo/techniczne" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">SEO Techniczne</Link>
              <Link to="/seo/pozycjonowanie" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Pozycjonowanie</Link>
              <Link to="/seo/audyt" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Audyt SEO</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">SEO off-page — czym jest i jak działa SEO poza stroną?</h2>
            <p className="text-muted-foreground mb-4">SEO off-page obejmuje działania podejmowane poza Twoją stroną internetową, które wpływają na jej autorytet i pozycje w Google. Kluczowe działania off-page to: link building (pozyskiwanie backlinków), budowanie marki online, wzmianki w mediach, recenzje i oceny oraz aktywność w mediach społecznościowych.</p>
            <p className="text-muted-foreground mb-6">Budowanie linków zewnętrznych pozostaje najważniejszym czynnikiem SEO off-page. Im więcej wartościowych serwisów linkuje do Twojej strony, tym Google postrzega ją jako bardziej autorytatywną. Jednak jakość linków ważniejsza jest od ilości — jeden link z portalu o Domain Rating 80+ działa lepiej niż 100 linków z przypadkowych stron.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Digital PR i guest posting — skuteczne techniki budowania linków</h2>
            <p className="text-muted-foreground mb-4">Digital PR to publikowanie wartościowych materiałów (badania, raporty, infografiki) w mediach online, które naturalnie generują wzmianki i linki. Guest posting (artykuły gościnne) na branżowych blogach i portalach to sprawdzona metoda zdobywania tematycznych backlinków wysokiej jakości.</p>
            <p className="text-muted-foreground">Zarządzanie mediami społecznościowymi uzupełnia strategię SEO off-page — sygnały społecznościowe pośrednio wpływają na widoczność strony, a popularny content ma większą szansę na zdobycie organicznych linków. Link building i digital PR działają najlepiej jako długofalowa strategia SEO.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/seo/audyt" className="text-primary hover:underline font-medium text-sm">→ Audyt SEO</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default SEOOffPage;
