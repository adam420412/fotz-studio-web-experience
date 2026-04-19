import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Download, Users, Target, TrendingUp, Sparkles, CheckCircle, BarChart, Zap, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const CMEbooki = () => {
  const features = [
    { icon: FileText, title: "Ebooki i poradniki PDF", desc: "Kompleksowe poradniki (15-50 stron), praktyczne przewodniki i raporty branżowe. Profesjonalny design, merytoryczna treść, CTA do kolejnego kroku." },
    { icon: Download, title: "Whitepapery i raporty", desc: "Pogłębione analizy, raporty rynkowe i case studies dla segmentu B2B. Whitepaper pozycjonuje Twoją firmę jako thought leadera w branży." },
    { icon: CheckCircle, title: "Checklisty i szablony", desc: "Gotowe do użycia narzędzia: checklisty, szablony Excel/Google Sheets, workbooki. Najwyższy conversion rate ze wszystkich formatów lead magnetów." },
    { icon: Sparkles, title: "Mini-kursy i email sequences", desc: "5-7 dniowe kursy email dostarczające wartość i budujące relację. Po sekwencji edukacyjnej konwersja na klienta jest 3× wyższa." },
    { icon: Users, title: "Strony lądowania lead magnetów", desc: "Landing pages z formularzami zapisu zoptymalizowane pod konwersję. Testy A/B nagłówka, opisu, designu formularza i CTA." },
    { icon: BarChart, title: "Dystrybucja i lead nurturing", desc: "Promocja lead magnetu (paid, organic, social), integracja z CRM, sekwencja follow-up. Zbieramy leady i prowadzimy je do sprzedaży." },
  ];

  const results = [
    { value: "35%", label: "Średni conversion rate", desc: "dla dobrze zaprojektowanych LP" },
    { value: "5×", label: "Więcej leadów", desc: "niż formularz kontaktowy" },
    { value: "3×", label: "Wyższy CR na klienta", desc: "po sekwencji nurturingowej" },
    { value: "500+", label: "Leadów miesięcznie", desc: "generowanych przez ebooki" },
  ];

  const faqItems = [
    { question: "Czym jest lead magnet?", answer: "Lead magnet to bezpłatna wartość (ebook, checklist, raport, kurs), którą oferujesz w zamian za adres e-mail. Dobrze zaprojektowany lead magnet powinien rozwiązywać konkretny problem Twojej grupy docelowej i naturalnie prowadzić do Twojej płatnej oferty." },
    { question: "Jak długi powinien być ebook?", answer: "Zależy od celu: mini ebook (5-15 stron) ma najwyższy CR, bo niska bariera wejścia. Kompleksowy poradnik (30-60 stron) buduje większy autorytet. Dla B2B sprawdzają się whitepapery (10-25 stron). Kluczowe: każda strona musi dostarczać wartość." },
    { question: "Jak dystrybuować ebook?", answer: "Kanały dystrybucji: landing page z formularzem, posty organiczne na social media, reklamy paid (Meta Ads, LinkedIn Ads), newsletter, blog CTA, partnerzy branżowi. Paid distribution daje najszybsze wyniki, organiczny – długoterminową bazę." },
    { question: "Jak ebook wspiera sprzedaż?", answer: "Ebook buduje zaufanie i ekspertyzę przed pierwszym kontaktem sprzedażowym. Sekwencja follow-up po pobraniu edukuje leada i prowadzi go do zakupu. Lead, który pobrał ebook i przeszedł sekwencję, jest znacznie bardziej skłonny do rozmowy niż 'zimny' kontakt." },
  ];

  return (
    <>
      <SEOHead
        title="E-booki i Lead Magnety | Fotz Studio"
        description="E-booki, lead magnety i content marketing B2B — tworzenie materiałów edukacyjnych, whitepaper, checklisty do pozyskiwania leadów. Fotz Studio."
        canonical="https://fotz.pl/content-marketing/ebooki"
        keywords="ebook marketing, tworzenie ebooka, ebook lead magnet, ebook dla firmy, content marketing ebook"
      />
      <ServiceSchema
        name="Ebooki i Lead Magnety dla Content Marketingu"
        description="Tworzenie ebooków, whitepaperów i lead magnetów dla firm B2B: budowanie bazy mailingowej i autorytetu eksperckiego."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Content Marketing", url: "https://fotz.pl/content-marketing" },
        { name: "Ebooki i Lead Magnety", url: "https://fotz.pl/content-marketing/ebooki" },
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
                <Link to="/content-marketing" className="text-primary text-sm hover:underline">Content Marketing</Link>
                <span className="text-muted-foreground text-sm">/</span>
                <span className="text-muted-foreground text-sm">Ebooki i Lead Magnety</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ebooki i Lead Magnety
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Wartościowy content przyciąga klientów lepiej niż reklama. Tworzymy ebooki, whitepapery i lead magnety, które budują bazę i pozycjonują Cię jako eksperta.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Co tworzymy w ramach lead generation content</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Dobry lead magnet to wymiana wartości: klient daje e-mail, dostaje wiedzę.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Efekty lead magnetów</h2>
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
              <Link to="/content-marketing/email-2025" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Email Marketing</Link>
              <Link to="/content-marketing/video-content" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Video Content</Link>
              <Link to="/konsultacja" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors">Bezpłatna konsultacja</Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              E-booki i lead magnety — skuteczne narzędzia content marketingu B2B
            </h2>
            <p className="text-muted-foreground mb-4">
              E-booki, whitepapers i lead magnety to jedne z najskuteczniejszych narzędzi
              content marketingu B2B. Dostarczają wartościową wiedzę potencjalnym klientom
              w zamian za dane kontaktowe, budując bazę leadów gotowych do konwersji.
              Fotz Studio tworzy profesjonalne e-booki, checklisty, raporty i inne materiały
              edukacyjne, które generują leady i budują autorytet marki.
            </p>
            <p className="text-muted-foreground mb-6">
              Dobry lead magnet rozwiązuje konkretny problem docelowej grupy odbiorców.
              Tworzymy materiały, które są naprawdę użyteczne — nie tylko ładne PDF-y,
              ale wartościowe zasoby, po które użytkownicy chętnie zostawią swój e-mail.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Tworzenie e-booków — od konceptu po dystrybucję i generowanie leadów
            </h2>
            <p className="text-muted-foreground mb-4">
              Proces tworzenia e-booka w Fotz Studio obejmuje: researach i merytorykę,
              copywriting, projekt graficzny i layout, skład PDF, landing page do pobrania
              oraz integrację z systemem marketing automation. Dbamy o każdy etap — od
              pomysłu na temat po automatyczną wysyłkę i follow-up do leadów.
            </p>
            <p className="text-muted-foreground mb-6">
              E-booki, raporty branżowe i whitepapers budują pozycję eksperta w swojej
              dziedzinie. Content marketing B2B oparty na wartościowych materiałach
              edukacyjnych skraca cykl sprzedaży i zwiększa jakość pozyskiwanych leadów.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Lead magnety, checklisty i kursy online — content marketing dla B2B i B2C
            </h2>
            <p className="text-muted-foreground mb-4">
              Poza e-bookami tworzymy różnorodne lead magnety: checklisty, szablony,
              kalkulatory, mini-kursy, webinary i quizy. Każdy format ma swoje zastosowanie
              — checklisty sprawdzają się w branżach operacyjnych, kalkulatory w financial,
              mini-kursy w edukacji i usługach profesjonalnych.
            </p>
            <p className="text-muted-foreground">
              Content marketing oparty na lead magnetach przynosi trwałe rezultaty —
              zbudowana baza e-mail to aktywo firmy, które pracuje latami. Skontaktuj się
              z Fotz Studio, by omówić strategię content marketingu i lead generation
              dopasowaną do Twojej branży i celów biznesowych.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default CMEbooki;
