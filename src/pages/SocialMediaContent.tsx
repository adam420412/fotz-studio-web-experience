import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image, Video, FileText, Palette, MessageSquare, TrendingUp, Sparkles, Camera, Zap, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const SocialMediaContent = () => {
  const features = [
    { icon: Image, title: "Grafiki i posty statyczne", desc: "Profesjonalne grafiki spójne z brand bookiem: posty informacyjne, promocyjne, cytaty, infografiki. Projektujemy w Canva Pro, Figma i Adobe CC." },
    { icon: Video, title: "Reelsy i krótkie wideo", desc: "Reelsy na Instagramie, rolki na Facebooku, TikToki. Nagrywamy, montujemy, dodajemy napisy i muzykę. Format, który algorytmy premiują." },
    { icon: FileText, title: "Copywriting i opisy postów", desc: "Teksty, które angażują i sprzedają. Hooks, wartość, CTA — każdy post ma cel. Optymalizujemy pod algorytmy i grupę docelową." },
    { icon: Palette, title: "Karuzele i slide decks", desc: "Posty karuzelowe na Instagramie i LinkedIn mają najwyższe zaangażowanie. Tworzymy prezentacje, poradniki i case studies w tym formacie." },
    { icon: Camera, title: "Sesje zdjęciowe produktów i marki", desc: "Profesjonalne zdjęcia produktów, wnętrz i teamu. Spójne z identyfikacją wizualną marki. Stock w najwyższej jakości." },
    { icon: Sparkles, title: "Relacje i Stories", desc: "Ulotne treści budujące autentyczność: kulisy firmy, Q&A, ankiety, countdown. Stories to najlepszy format do budowania relacji z odbiorcami." },
  ];

  const results = [
    { value: "+150%", label: "Zasięg organiczny", desc: "dzięki angażującym formatom" },
    { value: "4,8%", label: "Średni engagement rate", desc: "vs. 1,2% średnia branżowa" },
    { value: "2M+", label: "Wyświetleń miesięcznie", desc: "dla zarządzanych profili" },
    { value: "50+", label: "Postów miesięcznie", desc: "produkowanych dla klientów" },
  ];

  const faqItems = [
    { question: "Ile postów miesięcznie potrzebuję?", answer: "Zależy od platformy i celu. Instagram: minimum 12-15 postów + 15-20 stories. Facebook: 12-15 postów. LinkedIn: 8-12 postów. TikTok: 20-30 filmów. Jakość jest ważniejsza niż ilość — lepiej 3 świetne posty niż 10 przeciętnych." },
    { question: "Czy dostarczacie materiały do nagrania?", answer: "Tak — możemy nagrywać materiały wideo z Twojego biura, sklepu lub lokalizacji (Poznań i okolice). Oferujemy też nagrania zdalne i pełną produkcję graficzną bez konieczności obecności klienta." },
    { question: "Jak wygląda proces tworzenia treści?", answer: "Miesięczny plan → brief → produkcja grafik i wideo → copywriting → akceptacja klienta → harmonogram publikacji → monitoring wyników. Pełna transparentność na każdym etapie." },
    { question: "Czy mogę sam zaakceptować posty przed publikacją?", answer: "Oczywiście. Wszystkie treści przesyłamy do akceptacji z wyprzedzeniem minimum 3-5 dni. Używamy narzędzi do zarządzania treścią (Planable, Metricool), gdzie możesz komentować i zatwierdzać posty." },
  ];

  return (
    <>
      <SEOHead
        title="Content Social Media — Tworzenie Treści na Social Media | Fotz Studio"
        description="Tworzenie contentu na social media — posty, grafiki, rolki, stories. Profesjonalna produkcja treści dla Facebooka, Instagrama i LinkedIn. Fotz Studio."
        canonical="https://fotz.pl/social-media/content"
        keywords="tworzenie treści social media, content creator, grafiki social media, reelsy instagram, copywriting social media, posty facebook"
      />
      <ServiceSchema
        name="Tworzenie Treści na Social Media"
        description="Profesjonalne tworzenie angażujących treści na social media: grafiki, wideo, copywriting dla Instagramu, Facebooka, TikToka, LinkedIn."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Social Media", url: "https://fotz.pl/social-media" },
        { name: "Tworzenie Treści Social Media", url: "https://fotz.pl/social-media/content" },
      ]} />
      <FAQSchema items={faqItems} />

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
                <span className="text-muted-foreground text-sm">Tworzenie Treści Social Media</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Tworzenie Treści Social Media
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Zaangażowanie nie bierze się znikąd. Produkujemy treści, które zatrzymują scrollowanie: profesjonalne grafiki, reelsy, karuzele i copy, które sprzedają.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Formaty treści, które tworzymy</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Każda platforma ma swój język. Mówimy nim biegle.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Wyniki naszych treści</h2>
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
              <Link to="/social-media/analityka" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Analityka Social Media</Link>
              <Link to="/social-media/obsluga" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Obsługa Social Media</Link>
              <Link to="/performance-marketing/instagram-ads" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Reklamy Instagram</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Content social media — tworzenie treści na Facebooka, Instagrama i LinkedIn</h2>
            <p className="text-muted-foreground mb-4">Content social media to rdzeń skutecznej strategii w mediach społecznościowych. Tworzenie treści na social media obejmuje: grafiki i infografiki, posty tekstowe i karuzelowe, rolki (Reels) i wideo na Instagrama i TikToka, stories, relacje na żywo, artykuły na LinkedIn i posty blogowe dystrybuowane w social mediach.</p>
            <p className="text-muted-foreground mb-6">Każda platforma rządzi się innymi prawami. Content na Instagrama musi być wizualnie spójny i estetyczny. Na LinkedIn liczy się merytoryka i profesjonalizm. TikTok i Reels nagradzają autentyczność i kreatywność. Dobry content manager wie, jak dopasować styl komunikacji do kanału.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Tworzenie rolek i wideo na social media — video content marketing</h2>
            <p className="text-muted-foreground">Tworzenie rolek pod social media to jeden z najefektywniejszych sposobów na zwiększenie zasięgu organicznego. Algorytmy Instagrama, TikToka i YouTube premiują krótkie wideo, dając mu wielokrotnie większy zasięg niż statycznym postom. Tworzenie reklam wideo i organicznego video contentu to nasza specjalność — od scenariusza po montaż.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/uslugi/branding" className="text-primary hover:underline font-medium text-sm">→ Branding</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default SocialMediaContent;
