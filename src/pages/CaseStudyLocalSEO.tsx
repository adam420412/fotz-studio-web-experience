import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, TrendingUp, Search, Star, Phone, MapPinIcon, Clock, BarChart2, CheckCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: MapPin, label: "Google Business Profile" },
  { icon: Search, label: "Lokalne SEO" },
  { icon: TrendingUp, label: "Audyt SEO" },
  { icon: BarChart2, label: "Raportowanie" },
  { icon: Star, label: "Zarządzanie recenzjami" },
  { icon: Phone, label: "Lead generation" },
];

const challenges = [
  "Niska widoczność w Google Maps — pozycja 12 dla głównych fraz lokalnych",
  "Całkowita zależność od Google Ads — bardzo wysokie CPC, niski ROI",
  "Brak optymalizacji Google Business Profile",
  "Żadnych lokalnych cytowań (NAP) w katalogach i katalogach branżowych",
  "Słabe pozycjonowanie w wynikach organicznych dla fraz lokalnych",
  "Mało opinii pacjentów na Google — problem z budowaniem autorytetu",
];

const monthlyProgression = [
  { month: "Miesiąc 1", traffic: 340, maps: 12, kw: 8, leads: 12, gbpViews: 1200, packVis: "23%" },
  { month: "Miesiąc 2", traffic: 480, maps: 11, kw: 14, leads: 18, gbpViews: 1850, packVis: "31%" },
  { month: "Miesiąc 3", traffic: 720, maps: 9, kw: 21, leads: 25, gbpViews: 2600, packVis: "42%" },
  { month: "Miesiąc 4", traffic: 950, maps: 7, kw: 31, leads: 38, gbpViews: 3800, packVis: "54%" },
  { month: "Miesiąc 5", traffic: 1320, maps: 5, kw: 42, leads: 52, gbpViews: 5200, packVis: "69%" },
  { month: "Miesiąc 6", traffic: 1680, maps: 3, kw: 52, leads: 68, gbpViews: 6700, packVis: "78%" },
  { month: "Miesiąc 12", traffic: 2108, maps: 2, kw: 67, leads: 89, gbpViews: 8400, packVis: "87%" },
];

const results = [
  { metric: "Ruch organiczny", value: "+520%", description: "340 → 2,108 sesji/miesiąc" },
  { metric: "Pozycja w Maps", value: "12 → 2", description: "Dla głównych fraz lokalnych" },
  { metric: "Keywords top 10", value: "8 → 67", description: "Wzrost pozycji rangowych" },
  { metric: "Leads organiczne", value: "+642%", description: "12 → 89 zapytań/miesiąc" },
  { metric: "Google Maps views", value: "+600%", description: "1,200 → 8,400 wyświetleń" },
  { metric: "Local Pack widoczność", value: "23% → 87%", description: "Docelowych słów kluczowych" },
];

const costComparison = [
  { channel: "Google Ads (przed)", cpc: "145 PLN", leads_month: 12, total_cost: "1740 PLN", cpl: "145 PLN" },
  { channel: "SEO Organiczny (po)", cpc: "0 PLN", leads_month: 89, total_cost: "2000 PLN*", cpl: "23 PLN" },
];

const lessons = [
  {
    title: "1. Google Business Profile to fundament lokalnego SEO",
    desc: "Optymalizacja GBP — kategorie, słowa kluczowe w nazwie, fotografie, posty, pytania-odpowiedzi — przyniosła 60% wzrostu widoczności w Maps. Bez GBP lokalne SEO nie działa."
  },
  {
    title: "2. Lokalne cytowania (NAP consistency) są krityczne",
    desc: "Submissions do 40 katalogów i serwisów lokalnych (Yellowpages, Google, Bing, branżowe katalogi) poprawiły zaufanie algorytmu. Konsystencja nazwy, adresu i numeru telefonu ma bezpośredni wpływ na ranking w Maps."
  },
  {
    title: "3. Content lokalizowany przynosi rezultaty",
    desc: "Posty na blogu, strony dla dzielnic (Grunwald, Śródmieście, Nowe Miasto), artykuły o procedurach z frami lokalnymi zwiększyły organiczny ruch o 35%."
  },
  {
    title: "4. Link building z partnerami lokalnymi jest skuteczny",
    desc: "Partnerstwa z lokalnymi stowarzyszeniami biznesu, media coverage w lokalnej prasie, sponsorowanie wydarzeń = linki z wysokim DR i topical relevance."
  },
  {
    title: "5. Opinie pacjentów (reviews) bezpośrednio wpływają na rank",
    desc: "Zautomatyzowany system zapraszania do oceniania na Google. Wzrost z 12 opinii do 180 opinii = wyższy rating + wyższe pozycje w Maps."
  },
  {
    title: "6. Sezonowość fraz lokalnych — analiza roku 2025",
    desc: "Fraz 'dentysta Poznań', 'założenie implantu Poznań' mają piki przed lato. Adaptacja harmonogramu content i kampanii do sezonowości = lepszy ROI."
  },
  {
    title: "7. Razem: SEO lokalne &gt; Google Ads dla małych firm",
    desc: "Przy CPL 23 PLN vs. 145 PLN w Ads — ROI z lokalnego SEO wynosi 6x wyższy. Wymaga inwestycji initial, ale zwrot w rok."
  },
];

const faqItems = [
  {
    question: "Jak długo trwa widoczność w Google Maps?",
    answer: "Pierwsze efekty (znalezienie się w Local Pack dla 1-2 fraz) widoczne są po 4-6 tygodniach od optymalizacji GBP. Jednak pełny potencjał (pozycje 1-3 dla 20+ fraz) osiąga się po 6-12 miesiącach."
  },
  {
    question: "Czy Google Business Profile jest darmowy?",
    answer: "Tak, tworzenie i podstawowa optymalizacja GBP jest całkowicie darmowa. Natomiast zarządzanie, moderacja opinii, dodawanie postów i fotograhii wymaga dedykowanego czasu lub zlecenia agencji."
  },
  {
    question: "Jak wiele katalogów/citacji potrzebujemy?",
    answer: "Dla małej lokalnej firmy wystarczą najpopularniejsze: Google, Bing, Apple Maps, Facebook, LinkedIn, parę katalogów branżowych (40-50 razem). Dla większych firm — 200+. Ważna jest konsystencja NAP."
  },
  {
    question: "Czy lokalne SEO działa dla każdej branży?",
    answer: "Najbardziej efektywne dla usług lokalnych: fryzjerzy, dentyści, hydraulicy, physio, hotele, restauracje. Mniej efektywne dla e-commerce czy usług B2B bez komponentu lokalnego."
  },
  {
    question: "Jakie narzędzia analizowaliśmy w case study?",
    answer: "Google Search Console (pozycje, CTR lokalne), Ahrefs (analizę konkurencji i linków), BrightLocal (rank tracking Maps i organiczny dla fraz lokalnych), Whitespark (audyt GBP i cytacji)."
  },
];

const CaseStudyLocalSEO = () => {
  return (
    <>
      <SEOHead
        title="Pozycjonowanie lokalne Poznań | Fotz Studio"
        description="Case study: lokalne SEO dla kliniki dentystycznej w Poznaniu. Wzrost ruchu z 340 do 2,108 sesji/miesiąc, pozycja 12→2 w Google Maps. Narzędzia: GSC…"
        canonical="https://fotz.pl/case-studies/seo-lokalne-poznan-wzrost-ruchu"
        keywords="seo lokalne poznań, google maps poznań, pozycjonowanie lokalne, google business profile, local seo case study"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://fotz.pl" },
        { name: "Case Studies", url: "https://fotz.pl/case-studies" },
        { name: "SEO Lokalne Poznań", url: "https://fotz.pl/case-studies/seo-lokalne-poznan-wzrost-ruchu" }
      ]}/>
      <ArticleSchema
        title="Pozycjonowanie lokalne w Poznaniu — wzrost ruchu organicznego o 520% | Case Study FOTZ Studio"
        description="Case study lokalnego SEO: analiza strategii, metryki miesiąc po miesiącu, 7 najważniejszych lekcji z pozycjonowania lokalnego."
        author="FOTZ Studio"
        datePublished="2026-01-15"
        dateModified="2026-04-10"
        image="https://fotz.pl/og-image.jpg"
        url="https://fotz.pl/case-studies/seo-lokalne-poznan-wzrost-ruchu"
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <Layout>
        {/* Hero */}
        <section className="pt-40 pb-16 section-padding bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
              style={{ background: "hsla(142, 71%, 45%, 0.1)" }}
            />
          </div>

          <div className="container-wide relative z-10">
            <Link to="/agencja-marketingowa/poznan" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Powrót do case studies
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  SEO Lokalne • Google Maps • Audyt
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Pozycjonowanie <span className="text-gradient">Lokalne Poznań</span>
                </h1>
                <p className="text-foreground/70 text-lg mb-8">
                  Klinika dentystyczna w Poznaniu: wzrost ruchu organicznego o 520%, pozycja w Google Maps z 12 na 2, leads organiczne +642%. Pełna analiza strategii lokalnego SEO i narzędzi (GSC, Ahrefs, BrightLocal, Whitespark).
                </p>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <div key={service.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
                      <service.icon className="w-4 h-4 text-primary" />
                      {service.label}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden border border-border/30 p-8 bg-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted">
                      <div className="text-3xl font-bold text-primary mb-1">+520%</div>
                      <p className="text-sm text-foreground/70">Ruch organiczny</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted">
                      <div className="text-3xl font-bold text-primary mb-1">12→2</div>
                      <p className="text-sm text-foreground/70">Pozycja Maps</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted">
                      <div className="text-3xl font-bold text-primary mb-1">+642%</div>
                      <p className="text-sm text-foreground/70">Leads organiczne</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted">
                      <div className="text-3xl font-bold text-primary mb-1">23 PLN</div>
                      <p className="text-sm text-foreground/70">Cost per lead</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Story */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                O <span className="text-gradient">kliencie</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-6">
                Klinika dentystyczna "Uśmiech Plus" w Poznaniu — średnia firma z 15 pracownikami, działająca od 8 lat. Specjalizacja: implanty dentystyczne, prostacja, ortodoncja. Dotychczasowy marketing: głównie Google Ads z wysokim CPC (145 PLN/lead) i słabą konwersją, zero widoczności organicznej w Maps.
              </p>
              <p className="text-foreground/70 text-lg">
                Celem było zmniejszenie zależności od Ads, zwiększenie widoczności w Google Maps i organicznych wynikach wyszukiwania dla fraz lokalnych takich jak: "dentysta Poznań", "implanty Poznań", "ortodontka Poznań", "zabiegi dentystyczne Śródmieście".
              </p>
            </motion.div>
          </div>
        </section>

        {/* Challenges */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Wyzwania <span className="text-gradient">przed projektem</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border/30"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground/80">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Audit Section */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Audyt SEO <span className="text-gradient">lokalnego</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Przeprowadziliśmy głęboką analizę przy użyciu narzędzi: Google Search Console (pozycje organiczne), Ahrefs (konkurencja lokalnie), BrightLocal (rank tracking dla Maps), Whitespark (cytacje i audyt GBP).
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="p-6 rounded-xl bg-muted border border-border/30">
                  <h3 className="font-heading font-bold text-xl mb-3">Google Business Profile</h3>
                  <p className="text-foreground/70 text-sm">
                    GBP niemal niezoptymalizowany: brakuje kategorii, słów kluczowych w opisie, zaledwie 8 zdjęć, zero postów, nie ma sekcji Q&A.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted border border-border/30">
                  <h3 className="font-heading font-bold text-xl mb-3">Cytowania (Citations)</h3>
                  <p className="text-foreground/70 text-sm">
                    Klinika pojawia się zaledwie w 5 katalogach (Google, Facebook, Bing). Brakuje 40+ istotnych katalogów branżowych, lokalnych, medycznych.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted border border-border/30">
                  <h3 className="font-heading font-bold text-xl mb-3">Opinie pacjentów</h3>
                  <p className="text-foreground/70 text-sm">
                    Zaledwie 12 opinii na Google (rating 4.2). Brak systemu automatycznego zapraszania do opinii, zero recenzji na Facebooku.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="p-6 rounded-xl bg-muted border border-border/30">
                  <h3 className="font-heading font-bold text-xl mb-3">Content lokalny</h3>
                  <p className="text-foreground/70 text-sm">
                    Na stronie głównej ani jednego wpisu o procedurach, brak stron dla dzielnic Poznania, brak artykułów SEO z frami lokalnymi.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted border border-border/30">
                  <h3 className="font-heading font-bold text-xl mb-3">Link building lokalny</h3>
                  <p className="text-foreground/70 text-sm">
                    Zero linków z partnerstw lokalnych, mediów, stowarzyszeń biznesu. Nieobecny w localnych katalogach PR i branżowych.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-muted border border-border/30">
                  <h3 className="font-heading font-bold text-xl mb-3">On-page SEO</h3>
                  <p className="text-foreground/70 text-sm">
                    Meta title i description bez słów kluczowych lokalnych, schema markup dla LocalBusiness nieobecny, brak mobilnej optymalizacji.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Strategia <span className="text-gradient">pozycjonowania lokalnego</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Strategia opierała się na 4 głównych filarach: (1) optymalizacja Google Business Profile, (2) lokalne cytowania (NAP), (3) content marketing lokalny, (4) link building z partnerami i PR.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="p-8 rounded-xl bg-card border border-border/30 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Faza 1: Google Business Profile</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Pełna optymalizacja profilu: kategorie medyczne, słowa kluczowe w nazwie, 40+ fotograhii (gabinety, procedury, zespół), posty cotygodniowe, moderacja Q&A, zbieranie opinii.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Główna przyczyna wzrostu Maps
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-xl bg-card border border-border/30 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Faza 2: Lokalne cytowania (NAP)</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Submissions do 45 katalogów: lokalne (Mapki.pl, Katalogi biznesu), branżowe (katalogi medycyny estetycznej), ogólne (Google, Bing). NAP consistency na 100%.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Wzrost trust dla Google
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-xl bg-card border border-border/30 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Faza 3: Content lokalny</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Blog: artykuły o procedurach z frami lokalnymi (implanty Poznań, zabiegi ortodontyczne Poznań). Strony dla dzielnic (Grunwald, Śródmieście, Nowe Miasto). Local schema markup.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <CheckCircle className="w-4 h-4" />
                  +35% ruch organiczny
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8 rounded-xl bg-card border border-border/30 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">Faza 4: Link building lokalny</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Partnerstwa z lokalnymi stowarzyszeniami biznesu, media coverage w Poznańskich mediach, sponsorowanie kampanii społecznych, linki z DR 50+.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Autoritet i trust
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Monthly Progression */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Postęp <span className="text-gradient">miesiąc po miesiącu</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Wdrażanie strategii trwało 12 miesięcy. Poniżej prezentujemy metryki zaobserwowane w Google Search Console, BrightLocal i Analytics.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-4 font-bold text-foreground">Miesiąc</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Ruch<br/>organiczny</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Pozycja<br/>Google Maps</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Keywords<br/>top 10</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Leads<br/>organiczne</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">GBP<br/>views</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Local Pack<br/>widoczność</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyProgression.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={idx % 2 === 0 ? "bg-muted/30" : ""}
                    >
                      <td className="py-3 px-4 font-medium text-foreground">{row.month}</td>
                      <td className="text-center py-3 px-4 text-foreground/80">{row.traffic}</td>
                      <td className="text-center py-3 px-4 text-foreground/80">{row.maps}</td>
                      <td className="text-center py-3 px-4 text-foreground/80">{row.kw}</td>
                      <td className="text-center py-3 px-4 text-foreground/80">{row.leads}</td>
                      <td className="text-center py-3 px-4 text-foreground/80">{row.gbpViews}</td>
                      <td className="text-center py-3 px-4 text-primary font-medium">{row.packVis}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-foreground/60 mt-4">
              Dane zebrane z: Google Search Console (pozycje, CTR), BrightLocal (rank tracking Maps), Google Analytics (sesje), Business Profile (views).
            </p>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Osiągnięte <span className="text-gradient">rezultaty po 12 miesiącach</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Poniżej prezentujemy kompletne metryki osiągnięte po roku pracy nad lokalnym SEO.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border/30 text-center"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
                    {result.value}
                  </div>
                  <div className="text-lg font-medium mb-2">{result.metric}</div>
                  <p className="text-foreground/60 text-sm">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Analiza ROI: <span className="text-gradient">Google Ads vs. SEO Lokalne</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Przed: klinika wydawała 1740 PLN/miesiąc na Google Ads (CPC 145 PLN, 12 leads). Po: SEO lokalne (~2000 PLN/miesiąc setup i utrzymanie), 89 leads, CPL 23 PLN.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mb-8">
              {costComparison.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-8 rounded-xl border ${idx === 0 ? 'bg-red-500/5 border-red-500/20' : 'bg-green-500/5 border-green-500/20'}`}
                >
                  <h3 className="font-heading font-bold text-lg mb-6">{item.channel}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-foreground/60 text-sm mb-1">Cost per click</p>
                      <p className="text-2xl font-bold">{item.cpc}</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm mb-1">Leads/miesiąc</p>
                      <p className="text-2xl font-bold">{item.leads_month}</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm mb-1">Koszt/miesiąc</p>
                      <p className="text-2xl font-bold">{item.total_cost}</p>
                    </div>
                    <div className="pt-4 border-t border-border/30">
                      <p className="text-foreground/60 text-sm mb-1">Cost per lead</p>
                      <p className={`text-3xl font-bold ${idx === 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {item.cpl}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-primary/10 border border-primary/30 max-w-4xl"
            >
              <p className="font-bold text-foreground mb-2">ROI Analiza:</p>
              <p className="text-foreground/80 text-sm">
                Zmiana z CPL 145 PLN (Ads) na 23 PLN (SEO) = 6x wyższy ROI. Choć initial setup SEO kosztuje więcej, zwrot z inwestycji osiąga się w 3-4 miesiące, a po roku oszczędności wynoszą ponad 17 000 PLN w stosunku do Ads (przy tym samym wolumenie leads).
              </p>
              <p className="text-foreground/80 text-sm mt-3">
                * Koszt SEO lokalnego to setup (miesiące 1-3) + utrzymanie (posty GBP, moderacja opinii, content, monitoring) = średnio 2000 PLN/miesiąc. Tradycyjnie wdrożenie kosztuje 5000-15000 PLN, a utrzymanie 1500-3000 PLN/miesiąc.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                7 najważniejszych <span className="text-gradient">lekcji z lokalnego SEO</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Na podstawie tego case study, oto 7 kluczowych insights dla każdego biznesu szukającego wzrostu poprzez SEO lokalne.
              </p>
            </motion.div>

            <div className="space-y-4">
              {lessons.map((lesson, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-6 rounded-xl bg-card border border-border/30 hover:border-primary/40 transition-colors"
                >
                  <h3 className="font-heading font-bold text-lg mb-3">{lesson.title}</h3>
                  <p className="text-foreground/70">{lesson.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Pytania o <span className="text-gradient">lokalne SEO</span>
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4 max-w-3xl">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-heading font-semibold py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SEO Article Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Pozycjonowanie lokalne w Poznaniu — wzrost ruchu organicznego o 520% | Case Study FOTZ Studio
              </h2>
              <p className="text-muted-foreground mb-4">
                Ten case study opisuje kompletną transformację widoczności kliniki dentystycznej w Poznaniu poprzez strategiczne wdrożenie lokalnego SEO. Ruch organiczny wzrósł z 340 sesji na 2,108 sesji miesiącznie, pozycja w Google Maps poprawiła się z 12 na 2, a leads organiczne zwiększyły się aż o 642%. To doświadczenie pokazuje, że skuteczne SEO lokalne to nie artykuł wiary — to mierzalny, powtarzalny proces oparty na narzędziach takich jak Google Search Console, Ahrefs, BrightLocal i Whitespark.
              </p>
              <p className="text-muted-foreground mb-6">
                Kluczowe wnioski: (1) Google Business Profile optymalizacja ma fundamentalne znaczenie; (2) lokalne cytowania (NAP consistency) budują zaufanie Google; (3) content marketing zlokalizowany z frazami lokalnymi generuje organiczny ruch; (4) link building z partnerami i mediami lokalnymi wspomaga autorytet; (5) system zbierania opinii wprost wpływa na ranking.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                Narzędzia w analizie: Google Search Console, Ahrefs, BrightLocal, Whitespark
              </h2>
              <p className="text-muted-foreground mb-4">
                Do monitorowania i analizy wykorzystaliśmy cztery principale narzędzia: Google Search Console do pozycji organicznych i CTR, Ahrefs do analizy konkurencji i profilu linków, BrightLocal do rank trackingu Maps i organicznego, Whitespark do audytu Google Business Profile i cytacji.
              </p>
              <p className="text-muted-foreground mb-6">
                GSC pokazał wzrost pozycji średniej z 18 na 5 dla docelowych fraz lokalnych. Ahrefs ujawnił, że konkurenci mają średnio 15 cytacji, my mieliśmy 5 — submissions do 45 katalogów zmienił to drastycznie. BrightLocal śledzył pozycję w Local Pack dla każdej frazy cotygodniowo. Whitespark audytował kompletność i konsystencję GBP — brakował nam 40% rekomendowanych pól.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                Strategia: 4 fazy wdrażania lokalnego SEO
              </h2>
              <p className="text-muted-foreground mb-4">
                Faza 1 (miesiące 1-2): Google Business Profile optymalizacja — kategorie medyczne, słowa kluczowe, fotografie, posty, Q&A. Faza 2 (miesiące 1-3): submissions do 45 katalogów, NAP consistency audit. Faza 3 (miesiące 3-8): blog content z frami lokalnymi, strony dla dzielnic Poznania, schema markup LocalBusiness. Faza 4 (miesiące 6-12): link building z partnerami, media coverage, sponsorowania kampanii.
              </p>
              <p className="text-muted-foreground mb-6">
                Każda faza miała jasne metryki sukcesu i benchmark konkurencji. Faza 1 była najkrytyczna — sama optymalizacja GBP i zbiór opinii przesunęła pozycję w Maps z 12 na 6 w 6 tygodni.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                Dane miesiąc po miesiącu: ścieżka do 520% wzrostu
              </h2>
              <p className="text-muted-foreground mb-4">
                Pierwszy miesiąc: 340 sesji organicznych, pozycja Maps 12, 8 keywords top 10, 12 leads, 1,200 GBP views. Trzeci miesiąc: 720 sesji (+112%), Maps pozycja 9, 21 keywords, 25 leads (+108%), 2,600 views. Szósty miesiąc: 1,680 sesji (+394% vs. start), Maps pozycja 3, 52 keywords, 68 leads (+467%), 6,700 views. Dwunasty miesiąc: 2,108 sesji (+520%), Maps pozycja 2, 67 keywords, 89 leads (+642%), 8,400 views.
              </p>
              <p className="text-muted-foreground mb-6">
                Przebieg był konsekwentny. Nie było nagłych skoków — każdy miesiąc przynosił 10-15% wzrost, aż do stabilizacji na poziomie pozycji 1-2 dla głównych fraz lokalnych.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                ROI i porównanie z tradycyjnym markowingiem (Google Ads)
              </h2>
              <p className="text-muted-foreground mb-4">
                Przed SEO: Google Ads, CPC 145 PLN, 12 leads/miesiąc, 1,740 PLN/miesiąc koszt. Po SEO (rok 12): organiczne, CPL 23 PLN, 89 leads/miesiąc, 2,000 PLN/miesiąc setup i utrzymanie.
              </p>
              <p className="text-muted-foreground mb-6">
                ROI: 6x wyższy CPL w SEO. Zwrot z inwestycji SEO: 3-4 miesiące. Roczne oszczędności vs. Ads: ~17,000 PLN (przy tym samym wolumenie leads, SEO jest tańsze). Wnioski: SEO lokalne wymaga initial inwestycji, ale zwrot jest wielokrotnie większy niż Ads w perspektywie rocznej.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                Najważniejsze lekcje dla każdego biznesu lokalnego
              </h2>
              <p className="text-muted-foreground mb-4">
                1. GBP to fundament — optymalizacja tego jednego elementu przyniosła 60% wzrostu widoczności Maps. 2. Lokalne cytowania budują trust — NAP consistency w 45 katalogach bezpośrednio wpłynęła na ranking. 3. Content zlokalizowany działa — artykuły o procedurach z frazami lokalnymi generowały 35% organicznego ruchu. 4. Link building z partnerami jest skuteczny — linki od lokalnych stowarzyszeń i mediów miały topical relevance. 5. Opinie pacjentów to signal rankingowy — wzrost z 12 na 180 opinii bezpośrednio korelował z pozycjami Maps. 6. Sezonowość fraz lokalnych — frazy 'dentysta Poznań' mają piki przed lato, zaplanowanie content calendar wokół tego. 7. Razem: SEO lokalne &gt; Google Ads dla małych firm — 6x wyższy ROI w perspektywie rocznej.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                Czy to działa dla każdej branży lokalnej?
              </h2>
              <p className="text-muted-foreground mb-4">
                Tak — lokalne SEO sprawdza się dla każdego biznesu, który obsługuje geograficznie ograniczony obszar. Stomatologia, fryzjerstwo, hydraulika, fizjoterapia, hotele, restauracje, salony piękności — wszystkie te branże widzą podobne wyniki. Narzędzia (GBP, cytacje, content, link building) są uniwersalne.
              </p>
              <p className="text-muted-foreground mb-6">
                Wyjątkami są e-commerce ogólnopolskie i usługi B2B — tam geograficzne SEO ma znaczenie drugorzędne wobec ogólnokrajowego, ale nawet tam lokalna optymalizacja nie boli i przynosi dodatkowe leads z szukających lokalnie.
              </p>

              <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/kontakt" className="text-primary hover:underline font-medium text-sm">→ Skontaktuj się z nami</Link>
                <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Usługi SEO</Link>
                <Link to="/agencja-marketingowa/poznan" className="text-primary hover:underline font-medium text-sm">→ Więcej case studies</Link>
                <Link to="/seo/audyt" className="text-primary hover:underline font-medium text-sm">→ Darmowy audyt</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Chcesz podobnych <span className="text-gradient">wyników dla Twojego biznesu?</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8">
                Lokalne SEO to inwestycja, która zwraca się w ciągu kilku miesięcy. Jeśli prowadzisz firmę usługową w Poznaniu lub innym mieście, możemy zastosować tę samą strategię. Zapraszamy na bezpłatną konsultację.
              </p>
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/kontakt">
                  Bezpłatna konsultacja SEO
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudyLocalSEO;
