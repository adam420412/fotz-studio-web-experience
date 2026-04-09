import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Video, Camera, TrendingUp, Users, Target, Sparkles, Eye, Zap, BarChart, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const CMVideoContent = () => {
  const features = [
    { icon: Camera, title: "Reelsy i krótkie wideo", desc: "Reelsy na Instagram, Shorts na YouTube, TikToki — krótkie (15-90s) pionowe wideo dla algorytmów. Najwyższy organiczny zasięg ze wszystkich formatów." },
    { icon: Video, title: "Explainer Videos", desc: "2-3 minutowe filmy tłumaczące produkt lub usługę. Animowane lub live action. Świetne na strony lądowania — zwiększają konwersję o 80%." },
    { icon: Users, title: "Testimoniale i case studies", desc: "Wideo z zadowolonymi klientami to najsilniejszy social proof. Produkcja, montaż, napisy, optymalizacja pod platformy." },
    { icon: Eye, title: "Webinary i live stream", desc: "Budowanie autorytetu przez edukację. Powtarzalne nagrania webinarowe jako evergreen content. Generowanie leadów na żywo." },
    { icon: TrendingUp, title: "Brand video i reklamy wideo", desc: "Profesjonalne filmy wizerunkowe, reklamy pre-roll YouTube, wideo na landing pages. Storytelling, który buduje emocjonalne połączenie z marką." },
    { icon: Sparkles, title: "Produkcja i post-produkcja", desc: "Nagranie (studio lub lokacja), montaż, korekcja kolorów, grafiki, napisy, muzyka. Kompletna produkcja wideo w jednym miejscu." },
  ];

  const results = [
    { value: "82%", label: "Ruchu internetowego", desc: "generuje wideo (Cisco)" },
    { value: "+80%", label: "Wyższy CR na LP", desc: "z wideo vs. bez" },
    { value: "6×", label: "Więcej udostępnień", desc: "niż tekst i grafika" },
    { value: "3min", label: "Dłuższy czas na stronie", desc: "gdy jest wideo" },
  ];

  const faqItems = [
    { question: "Ile kosztuje produkcja wideo marketingowego?", answer: "Ceny zależą od formatu i złożoności. Prosty reel: 500-1500 zł. Explainer video (animowany, 2 min): 3000-8000 zł. Profesjonalne wideo wizerunkowe (live action, 3-5 min): 5000-15000 zł. Wycenę przygotowujemy bezpłatnie po briefie." },
    { question: "Jak długo trwa produkcja wideo?", answer: "Reelsy i krótkie formaty: 3-7 dni. Explainer video animowany: 3-6 tygodni (scenariusz, animacja, lektor). Profesjonalne wideo live action: 2-4 tygodnie (pre-produkcja, nagranie, montaż). Harmonogram ustalamy na etapie briefu." },
    { question: "Czy przyjedziecie na nagranie do Poznania i okolic?", answer: "Tak, obsługujemy nagrania na terenie Poznania, Wielkopolski i całej Polski. Dysponujemy sprzętem do nagrań mobilnych. Możemy też zorganizować nagranie w naszym studiu w centrum Poznania." },
    { question: "Na jakie platformy optymalizujecie wideo?", answer: "Tworzymy wideo w formatach zoptymalizowanych pod każdą platformę: Instagram/TikTok (9:16, do 90s dla reelsów), YouTube (16:9, różne długości), LinkedIn (1:1 lub 16:9), Facebook (1:1 lub 16:9). Jeden projekt → wiele formatów." },
  ];

  return (
    <>
      <SEOHead
        title="Video Content Marketing | Produkcja Wideo dla Firm | Fotz Studio"
        description="Video content marketing: reelsy, webinary, explainer videos, testimoniale. Tworzymy wideo, które buduje markę, angażuje i sprzedaje. Produkcja wideo Poznań."
        canonical="https://fotz.pl/content-marketing/video-content"
        keywords="video content marketing, produkcja wideo dla firm, reelsy marketing, explainer video, marketing wideo, video marketing"
      />
      <ServiceSchema
        name="Video Content Marketing i Produkcja Wideo"
        description="Profesjonalne video content marketing: reelsy, explainer videos, webinary, testimoniale i produkcja wideo dla firm."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Content Marketing", url: "https://fotz.pl/content-marketing" },
        { name: "Video Content Marketing", url: "https://fotz.pl/content-marketing/video-content" },
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
                <Link to="/content-marketing" className="text-primary text-sm hover:underline">Content Marketing</Link>
                <span className="text-muted-foreground text-sm">/</span>
                <span className="text-muted-foreground text-sm">Video Content Marketing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Video Content Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Wideo to najszybciej rosnący format contentowy — 82% ruchu internetowego to wideo. Tworzymy materiały, które budują markę, budują relacje i sprzedają.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/konsultacja">Bezpłatna konsultacja</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/content-marketing">Wszystkie usługi Content</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Formaty wideo, które tworzymy</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Każdy format służy innemu celowi w lejku sprzedażowym.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Siła video marketingu</h2>
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
              <Link to="/content-marketing" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Content Marketing Hub</Link>
              <Link to="/content-marketing/strategia" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Strategia Content</Link>
              <Link to="/content-marketing/ebooki" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Ebooki i Lead Magnety</Link>
              <Link to="/social-media/obsluga" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Obsługa Social Media</Link>
              <Link to="/social-media/reels-vs-tiktok" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Reelsy vs TikTok</Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
};

export default CMVideoContent;
