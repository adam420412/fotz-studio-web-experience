import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, Search, BarChart3, Target, AlertTriangle, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

export default function AudytSEO() {
  const breadcrumbs = [
    { name: "Strona główna", url: "https://fotz.pl" },
    { name: "Usługi", url: "https://fotz.pl/uslugi" },
    { name: "Pozycjonowanie", url: "https://fotz.pl/seo/pozycjonowanie" },
    { name: "Audyt SEO", url: "https://fotz.pl/uslugi/audyt-seo" }
  ];

  const auditAreas = [
    { icon: Zap, title: "SEO techniczne", description: "Struktura URL, kody statusu, canonical, robots.txt, sitemap" },
    { icon: FileText, title: "Treści i słowa kluczowe", description: "Analiza onpage, meta tagi, headingi, keyword density" },
    { icon: Link, title: "Link building i autorytet", description: "Backlinki, referring domains, anchor text, profil linkowy" },
    { icon: TrendingUp, title: "UX i Core Web Vitals", description: "Szybkość ładowania, responsywność, interaktywność" },
    { icon: Target, title: "Konkurencja", description: "Analiza 10 konkurentów, ich strategie, słowa kluczowe" },
    { icon: BarChart3, title: "Google Search Console", description: "Błędy crawlowania, coverage, performance, sitemap" },
    { icon: Globe, title: "Google Analytics", description: "Ruch organiczny, bounce rate, sesje, konwersje" },
    { icon: Search, title: "Lokalne SEO", description: "Google My Business, cytacje, opinie, pozycje lokalne" }
  ];

  const deliverables = [
    { icon: FileText, title: "Raport PDF/Google Doc", description: "Szczegółowy, czytelny, z danymi i screenshotami" },
    { icon: AlertTriangle, title: "Priorytetyzowana lista błędów", description: "Od najistotniejszych do najmniej ważnych dla SEO" },
    { icon: Zap, title: "Rekomendacje krok po kroku", description: "Praktyczne porady, które możesz wdrożyć sam" },
    { icon: CheckCircle2, title: "Konsultacja omówieniowa", description: "30 minut rozmowy ze specjalistą SEO online" }
  ];

  const packages = [
    {
      name: "Mini Audyt",
      price: "299",
      pages: "do 20 podstron",
      features: [
        "Analiza SEO na basic level",
        "Raport PDF z 30-50 problemami",
        "Brak konsultacji dodatkowej",
        "Dostawa w 7 dni roboczych"
      ],
      highlight: false
    },
    {
      name: "Standard Audyt",
      price: "799",
      pages: "do 100 podstron",
      features: [
        "Kompletna analiza wszystkich 8 obszarów",
        "Raport PDF/Google Doc z 50-100 problemami",
        "Lista priorytetów - od czego zacząć",
        "Konsultacja omówieniowa 30 min",
        "Dostawa w 48 godzin"
      ],
      highlight: true
    },
    {
      name: "Full Audyt",
      price: "1499",
      pages: "pełna strona + konkurencja",
      features: [
        "Głębokie analizy wszystkich aspektów SEO",
        "Raport rozszerzona analiza konkurencji",
        "Kosztorys wdrożenia zmian",
        "Konsultacja 1h - strategia wdrożenia",
        "Dostawa w 72 godzin",
        "Dostęp do dashboard ze wskaźnikami"
      ],
      highlight: false
    }
  ];

  const commonIssues = [
    { icon: AlertTriangle, title: "Duplicate content", description: "Zduplikowana treść na wielu podstronach, canonical tags" },
    { icon: Zap, title: "Wolne ładowanie", description: "Strona ładuje się powyżej 3 sekund, zła ocena Core Web Vitals" },
    { icon: FileText, title: "Brakujące meta tagi", description: "Brak lub zbyt krótkie title, meta description, heading H1" },
    { icon: Target, title: "Zerwane linki", description: "Wiele martwych linków wewnętrznych i zewnętrznych (404)" },
    { icon: Globe, title: "Słaba responsywność", description: "Strona źle wyświetla się na mobilnych urządzeniach" },
    { icon: BarChart3, title: "Cienka treść", description: "Krótkie artykuły, mało informacji, brak głębi na temat" }
  ];

  const faqItems = [
    {
      question: "Ile czasu trwa audyt SEO?",
      answer: "Audyt Mini trwa 3-5 dni roboczych, Standard 2 dni, a Full Audyt 3 dni. Po tym czasie dostajesz raport i możesz wziąć udział w konsultacji omówieniowej. Cały proces obejmuje zarówno automatyczną analizę, jak i ręczne sprawdzenie elementy SEO."
    },
    {
      question: "Co mam robić po audycie SEO?",
      answer: "Wdrażasz rekomendacje z raportu. Zaczynasz od problemów oznaczonych jako priorytet (najistotniejszych dla pozycji). W pakiecie Standard i Full otrzymujesz konsultację, gdzie omawiamy strategię. Następnie możesz wdrażać zmiany sam lub zlecić nam pozycjonowanie."
    },
    {
      question: "Czy mogę wdrożyć zmiany sam?",
      answer: "Tak, audyt zawiera szczegółowe rekomendacje, które możesz wdrożyć sam (jeśli masz wiedzę technyczną). Jeśli chcesz profesjonalnego wsparcia, oferujemy usługę pozycjonowania SEO, gdzie my wdrażamy wszystkie zmiany i monitorujemy wyniki."
    },
    {
      question: "Jaka jest różnica między audytem a pozycjonowaniem?",
      answer: "Audyt SEO to jednorazowa analiza stanu Twojej strony - identyfikujemy problemy i dajemy wam raport. Pozycjonowanie (SEO) to długoterminowa usługa - my wdrażamy zmiany, monitorujemy wyniki w Google i ciągle optymalizujemy aż do osiągnięcia założonych pozycji."
    },
    {
      question: "Jak często powinienem robić audyt SEO?",
      answer: "Zalecamy audyt 1-2 razy w roku, lub jeśli wprowadzasz duże zmiany na stronie. Jeśli pracujesz z agencją SEO, robią regularny monitoring i raporty. Dla stron w dynamicznym branżach (e-commerce, news) warto robić audyt co 6 miesięcy."
    },
    {
      question: "Co jeśli audyt nie wykaże błędów?",
      answer: "Możliwe! Jeśli masz dobrze zoptymalizowaną stronę, raport to potwierdzi. Jednak zawsze są obszary do poprawy - np. budowanie linków, content marketing, czy optymalizacja do bardziej konkurencyjnych słów kluczowych. Konsultacja okaże kolejne kroki."
    }
  ];

  return (
    <>
      <SEOHead
        title="Audyt SEO | Profesjonalna analiza strony | fotz.pl"
        description="Audyt SEO — szczegółowa analiza Twojej strony internetowej. Identyfikujemy błędy, które blokują Twoje pozycje w Google. Zamów audyt SEO!"
        canonical="https://fotz.pl/seo/audyt"
        keywords="audyt seo, darmowy audyt seo, audyt seo online, audyt strony internetowej, analiza seo strony, audyt techniczny seo, bezpłatny audyt seo, audyt seo cena, sprawdź seo strony, audyt pozycjonowania, co to jest audyt seo, audyt seo co obejmuje"
      />
      <ServiceSchema
        name="Audyt SEO"
        description="Szczegółowa analiza strony internetowej pod kątem SEO. Identyfikujemy błędy techniczne, problemy z treścią i linkami."
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-background overflow-hidden pt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-purple-600/10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                <Search className="inline-block w-4 h-4 mr-2" />
                SEO Audits
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Audyt SEO — znajdź przyczyny{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  słabych wyników w Google
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Audyt SEO — darmowy audyt seo online i analiza seo strony internetowej. Audyt techniczny, on-page i off-page — dowiedz się, co blokuje Twoją stronę przed wysokimi pozycjami w Google. Bezpłatny audyt seo dla firm dostępny online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/kontakt">
                    Zamów audyt SEO
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#cennik">Zobacz cennik</a>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">87</div>
                  <div className="text-sm text-muted-foreground">Średnio błędów SEO na stronę</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">78%</div>
                  <div className="text-sm text-muted-foreground">Stron ma problemy techniczne</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">48h</div>
                  <div className="text-sm text-muted-foreground">Audyt gotowy w</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Transparentny raport</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Check Section */}
        <FadeInView>
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Co sprawdzamy w audycie?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowa analiza 8 kluczowych obszarów SEO na Twojej stronie
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {auditAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                      <area.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Deliverables Section */}
        <FadeInView>
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Co dostaniesz?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Konkretne materiały, które będziesz mógł wdrożyć sam lub razem z nami
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {deliverables.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Pricing Section */}
        <FadeInView>
          <section className="py-20 bg-muted/30" id="cennik">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Pakiety audytu SEO
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Wybierz pakiet dostosowany do rozmiaru Twojej strony i potrzeb
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-2xl p-8 relative ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50"
                        : "bg-card border border-border"
                    }`}
                  >
                    {pkg.highlight && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        REKOMENDOWANY
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.pages}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground"> zł</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={pkg.highlight ? "default" : "outline"}>
                      <Link to="/kontakt">Zarezerwuj audyt</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Common Issues Section */}
        <FadeInView>
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Najczęstsze błędy SEO
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Problemy, które prawie na pewno znaleźliśmy już na setce stron
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commonIssues.map((issue, index) => (
                  <motion.div
                    key={issue.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                      <issue.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{issue.title}</h3>
                    <p className="text-muted-foreground text-sm">{issue.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ Section */}
        <FadeInView>
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Pytania i odpowiedzi
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Wszystko, co chciałbyś wiedzieć o audytach SEO
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible>
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </FadeInView>

        <FAQSchema items={faqItems} />
        <ContactSection heading="Zamów audyt SEO" subheading="Raport gotowy w 48 godzin. Bezpłatna konsultacja omówieniowa w cenie." />
      </Layout>
    </>
  );
}
