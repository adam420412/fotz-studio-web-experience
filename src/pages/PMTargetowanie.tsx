import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Users, Eye, Zap, Search, BarChart, TrendingUp, Shield, Sparkles, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const PMTargetowanie = () => {
  const features = [
    { icon: Target, title: "Demograficzne i zainteresowania", desc: "Wiek, płeć, lokalizacja, wykształcenie, dochody, zainteresowania, zachowania zakupowe. Budujemy szczegółowe profile idealnego klienta na każdej platformie." },
    { icon: Users, title: "Lookalike Audiences", desc: "Algorytmy Google i Meta znajdują osoby podobne do Twoich najlepszych klientów. Skalujemy zasięg bez utraty jakości — najtańsza forma ekspansji." },
    { icon: Eye, title: "Retargeting i remarketing", desc: "Odwiedzający stronę, osoby oglądające wideo, porzucający koszyk — każda grupa dostaje dedykowane przekazy reklamowe dopasowane do etapu lejka." },
    { icon: Search, title: "Targetowanie słów kluczowych", desc: "Google Ads: dokładne, przybliżone, wykluczające. Precyzyjne dopasowanie słów kluczowych do intencji zakupowej. Eliminujemy niekonwertujące zapytania." },
    { icon: Sparkles, title: "Custom Audiences i CRM", desc: "Import list klientów, wykluczenie istniejących kupujących, tworzenie segmentów na podstawie LTV. Personalizacja na poziomie 1:1." },
    { icon: BarChart, title: "Testowanie i walidacja grup", desc: "A/B testy grup docelowych: porównujemy wydajność segmentów, eliminujemy nieefektywne i alokujemy budżet do najlepiej konwertujących." },
  ];

  const results = [
    { value: "-50%", label: "Niższy koszt za klik", desc: "dzięki eliminacji słabych segmentów" },
    { value: "+220%", label: "Wyższy ROAS", desc: "po optymalizacji targetowania" },
    { value: "2-4×", label: "Wyższy CTR", desc: "dla właściwie targetowanych reklam" },
    { value: "0 zł", label: "Marnotrawionego budżetu", desc: "na osoby spoza grupy docelowej" },
  ];

  const faqItems = [
    { question: "Jak wygląda proces tworzenia grup docelowych?", answer: "Zaczynamy od analizy istniejących klientów (CRM, Google Analytics), tworzymy persony kupujących, budujemy grupy w platformach reklamowych, testujemy je równolegle i optymalizujemy na podstawie wyników konwersji." },
    { question: "Czym różni się retargeting od remarketingu?", answer: "Retargeting to ogólny termin na dotarcie do osób, które miały kontakt z marką (odwiedziły stronę, obejrzały wideo). Remarketing to konkretna nazwa używana przez Google Ads. W praktyce terminy używane są zamiennie." },
    { question: "Jak duże powinny być grupy docelowe?", answer: "Zależy od budżetu i platformy. Na Facebooku: grupy 100k-2M dają dobry balans między precyzją a zasięgiem. Zbyt małe (<10k) - ryzyko audience fatigue. Zbyt duże (>5M) - tracisz precyzję. Google Ads ma inne mechanizmy - skupiamy się na jakości słów kluczowych." },
    { question: "Czy mogę targetować klientów konkurencji?", answer: "Bezpośrednio nie można targetować na podstawie marki konkurencji na Meta. Na Google Ads można licytować na słowa kluczowe z nazwą konkurencji (z ograniczeniami). Skuteczniejszym podejściem jest targetowanie według zainteresowań i zachowań typowych dla klientów danej branży." },
  ];

  return (
    <>
      <SEOHead
        title="Targetowanie Reklam — Precyzyjne Dotarcie do Grupy Docelowej | Fotz Studio"
        description="Targetowanie reklam — budowanie grup odbiorców, Custom Audiences, Lookalike, retargeting i remarketing. Precyzyjne kampanie dla firm. Fotz Studio."
        canonical="https://fotz.pl/performance-marketing/targetowanie"
        keywords="targetowanie reklam, grupy docelowe reklamy, lookalike audience, retargeting, targetowanie google ads, targetowanie facebook ads"
      />
      <ServiceSchema
        name="Targetowanie Reklam Google Ads i Meta Ads"
        description="Precyzyjne targetowanie reklam online: grupy docelowe, lookalike audiences, retargeting dla Google Ads i Meta Ads."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Performance Marketing", url: "https://fotz.pl/performance-marketing" },
        { name: "Targetowanie Reklam", url: "https://fotz.pl/performance-marketing/targetowanie" },
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
                <span className="text-muted-foreground text-sm">Targetowanie Reklam</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Precyzyjne Targetowanie Reklam
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Reklama wyświetlona właściwej osobie w właściwym momencie to nie szczęście — to targetowanie. Docieramy do Twoich idealnych klientów z chirurgiczną precyzją.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Metody targetowania, które stosujemy</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Im precyzyjniej trafiamy, tym niższy CPA i wyższy ROAS.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Efekty precyzyjnego targetowania</h2>
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
              <Link to="/performance-marketing/optymalizacja" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Optymalizacja Kampanii</Link>
              <Link to="/performance-marketing/remarketing" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Remarketing</Link>
              <Link to="/performance-marketing/facebook-ads" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Facebook Ads</Link>
              <Link to="/performance-marketing/google-ads" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Google Ads</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Targetowanie reklam — jak precyzyjnie dotrzeć do swoich odbiorców?</h2>
            <p className="text-muted-foreground mb-4">Targetowanie reklam to proces definiowania grupy odbiorców, do których kierowane są kampanie reklamowe. Im precyzyjniejsze targetowanie, tym wyższa trafność reklam i niższy koszt pozyskania klienta (CPA). Nowoczesne platformy reklamowe (Google, Meta, TikTok, LinkedIn) oferują zaawansowane możliwości targetowania swoich odbiorców.</p>
            <p className="text-muted-foreground mb-6">Rodzaje targetowania: demograficzne (wiek, płeć, wykształcenie), geograficzne (lokalizacja, promień od adresu), zainteresowania i zachowania, własne listy klientów (Custom Audiences — na podstawie danych CRM, pikseli śledzących), Lookalike Audiences (podobni do istniejących klientów) oraz retargeting/remarketing (osoby, które już odwiedziły stronę).</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Retargeting i remarketing — reklamy dla osób, które już Cię znają</h2>
            <p className="text-muted-foreground">Retargeting (Meta, Google Display) i remarketing (Google Ads) to reklamy kierowane do użytkowników, którzy odwiedzili Twoją stronę lub weszli w interakcję z Twoją marką, ale nie skonwertowali. Reklamy remarketingowe wyróżniają się wyjątkowo wysokim CTR i niskim CPA — bo trafiają do osób już zaznajomionych z Twoją ofertą. Analiza konkurencji w internecie pomaga też identyfikować grupy docelowe, które Twoi konkurenci pozyskują skutecznie.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
              <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline font-medium text-sm">→ Facebook Ads</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
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

export default PMTargetowanie;
