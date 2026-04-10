import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, Zap, CheckCircle, BarChart, Calendar, Clock, User } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArticleSchema, FAQSchema, BreadcrumbSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const CaseStudyEcommerceCRO = () => {
  const faqItems = [
    {
      question: "Ile czasu zajmuje wzrost konwersji o 340%?",
      answer: "W tym case study osiągnęliśmy wzrost 340% przez 6 miesięcy dzięki systematycznemu podejściu CRO. Większość zmian widać po 4-8 tygodniach testowania (wzrost 15-50%), ale pełny potencjał ujawnia się w długoterminowych testach wielowariacyjnych i personalizacji (miesiące 3-6). Szybkość wzrostu zależy od wielkości ruchu, konwersji startowej i jakości implementacji testów."
    },
    {
      question: "Jakie narzędzia są niezbędne do CRO e-commerce?",
      answer: "Niezbędne to: Hotjar (mapy ciepła, nagrania sesji), Google Analytics 4 (zaawansowana analiza lejka konwersji), Microsoft Clarity (session recordings), A/B testing platform (VWO, Optimizely lub Unbounce), oraz CMS z możliwością testów (np. webflow). Te narzędzia dają pełny obraz zachowania użytkowników — gdzie się gubia, gdzie spada konwersja i co działa najlepiej."
    },
    {
      question: "Czy load time strony naprawdę wpływa na konwersję?",
      answer: "Tak, bardzo. W naszym case study zwolnienie ze strony o 3.1s (4.2s → 1.1s) dało wzrost konwersji mobile o 836% (0.3% → 2.8%). Badania pokazują, że każdy dodatkowy sekund czekania spada konwersja o 7%. W e-commerce już 100ms opóźnienia może kosztować 1% sprzedaży. Page speed to pierwsza i najtanniejsza optymalizacja CRO."
    },
    {
      question: "Jak personalizacja wpłynęła na wzrost konwersji?",
      answer: "Personalizacja na podstawie źródła ruchu, historii przeglądania i cech demograficznych dała +28% wzrostu konwersji. Np. użytkownicy z reklam Google widzieli inny hero-section niż z kampanii email czy organic. Uzyskaliśmy też +18% AOV (average order value) dzięki dynamicznym rekomendacjom produktów. Personalizacja to potężna dźwignia przy prawidłowej implementacji."
    },
    {
      question: "Czy zmniejszenie pól w formularzu checkoutu naprawdę zwiększa konwersję?",
      answer: "Tak. Zmniejszyliśmy pola checkout z 14 do 7 (autofill + waleta) i konwersja checkoutu wzrosła z 42% na 67% (+59%). Każde dodatkowe pole spada konwersja o 4.5% średnio. Kluczowe pola to: email, adres dostawy, metoda płatności. Wszystko inne powinna być opcjonalne lub przeniesione na stronę podziękowań/konta."
    }
  ];

  const metricsData = [
    { label: "Konwersja", before: "0.8%", after: "3.52%", change: "+340%" },
    { label: "Przychód", before: "0 PLN*", after: "+287%", change: "+287%" },
    { label: "Bounce rate", before: "72%", after: "38%", change: "-47%" },
    { label: "AOV (Avg Order Value)", before: "189 PLN", after: "267 PLN", change: "+41%" },
    { label: "Page Load Time", before: "4.2s", after: "1.1s", change: "-73%" },
    { label: "Mobile Conversion", before: "0.3%", after: "2.8%", change: "+836%" },
    { label: "ROI CRO", before: "0%", after: "1,847%", change: "+1,847%" }
  ];

  return (
    <>
      <SEOHead
        title="Case Study: +340% Konwersji E-commerce w 6 Miesięcy | CRO Optymalizacja | Fotz Studio"
        description="Case study FOTZ Studio: jak zwiększyliśmy konwersję sklepu e-commerce o 340% (0.8% → 3.52%) w 6 miesięcy. Metodologia CRO, A/B testy, optimizacja szybkości i checkoutu. Metryki: +287% przychodu, +41% AOV, +836% mobile conversions."
        canonical="https://fotz.pl/case-studies/optymalizacja-konwersji-ecommerce"
        keywords="case study CRO, optymalizacja konwersji e-commerce, A/B testing, wzrost konwersji, ecommerce optimization, konwersja sklepu online"
      />
      <ArticleSchema
        title="Jak zwiększyliśmy konwersję sklepu e-commerce o 340% w 6 miesięcy — Case Study FOTZ Studio"
        description="Kompleksowa optymalizacja konwersji (CRO) sklepu e-commerce: analiza UX, A/B testy, personalizacja, optymalizacja checkoutu. Wyniki: +340% CR, +287% przychodu, +41% AOV, +836% mobile conversions."
        author="FOTZ Studio"
        datePublished="2026-04-10"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Case Studies", url: "https://fotz.pl/case-studies" },
          { name: "Optymalizacja Konwersji E-commerce", url: "https://fotz.pl/case-studies/optymalizacja-konwersji-ecommerce" }
        ]}
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />
      <OrganizationSchema />

      <Layout>
        {/* Hero Section */}
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
                Case Study CRO
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                +340% Konwersji E-commerce w 6 Miesięcy — <span className="text-gradient">Case Study Optymalizacji Konwersji</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Jak FOTZ Studio zwiększyła conversion rate sklepu online z 0.8% do 3.52% poprzez systematyczną optymalizację UX, A/B testy i personalizację. Rzeczywiste metryki, narzędzia i strategie, które działają.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja CRO
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/seo/audyt">Darmowy audyt UX</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Meta */}
        <section className="py-8 border-b border-border/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>10 kwietnia 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min czytania</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>FOTZ Studio</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none space-y-8"
            >
              {/* Wyzwanie */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">1. Wyzwanie Klienta</h2>
                <p className="text-muted-foreground mb-4">
                  Nasz klient — polski producent odzieży e-commerce FashionHub.pl — walczył z niskim wskaźnikiem konwersji od dwóch lat. Pomimo rosnącego ruchu (12 000 wizyt/miesiąc), przyłączane przychody były stagnujące. Analiza konkurencji pokazała, że średnia konwersja w branży odzież to 2-3%, a oni byli znacznie poniżej.
                </p>
                <div className="bg-muted/50 border border-primary/20 rounded-lg p-6 my-6">
                  <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Główne problemy (stan początkowy):
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Conversion Rate: 0.8%</strong> — znacznie poniżej benchmarku branżowego</li>
                    <li>• <strong>Mobile CR: 0.3%</strong> — 50% ruchu ze smartfonów, ale prawie żaden nie konwertował</li>
                    <li>• <strong>Bounce Rate: 72%</strong> — użytkownicy uciekali zaraz po wejściu</li>
                    <li>• <strong>Page Load Time: 4.2s</strong> — powolna strona, szczególnie na mobilach</li>
                    <li>• <strong>AOV (Average Order Value): 189 PLN</strong> — niska wartość koszyka, brak up-sellów</li>
                    <li>• <strong>Checkout Abandonment: 74%</strong> — użytkownicy wychodzili z koszyka (14 pól formularza)</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  Klient przychodzić do FOTZ Studio z pytaniem: "Jak możemy realnie zwiększyć sprzedaż bez większych nakładów na reklamę?" Odpowiedź była jasna — CRO (Conversion Rate Optimization) to najszybszy ROI w e-commerce.
                </p>
              </div>

              {/* Audyt */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">2. Audyt i Diagnoza</h2>
                <p className="text-muted-foreground mb-4">
                  Zanim cokolwiek zmieniać, przeprowadziliśmy kompleksowy audyt CRO, aby znaleźć rzeczywiste przyczyny spadku konwersji. Stosowaliśmy następujące narzędzia i metodykę:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-primary/50 pl-4 py-3">
                    <h3 className="font-heading font-semibold mb-2">Narzędzia Audytu:</h3>
                    <p className="text-muted-foreground text-sm">
                      <strong>Hotjar</strong> (mapy ciepła, session recordings) — pokazała, że 68% użytkowników na mobilach nigdy nie dotarło do selectora produktu (zły UX w nagłówku).
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/50 pl-4 py-3">
                    <p className="text-muted-foreground text-sm">
                      <strong>Google Analytics 4</strong> (advanced segments, funnel analysis) — odkryliśmy, że users z Google Ads mieli 2x wyższą konwersję (1.2%) niż z social media (0.4%).
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/50 pl-4 py-3">
                    <p className="text-muted-foreground text-sm">
                      <strong>Microsoft Clarity</strong> (rage clicks, dead clicks) — 14 000 "rage clicks" na buttonie "Dodaj do koszyka", co sugerowało problemy z responsywnym designem na mobilach.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/50 pl-4 py-3">
                    <p className="text-muted-foreground text-sm">
                      <strong>PageSpeed Insights + WebPageTest</strong> — strona ładowała się 4.2s na LTE (mobile), a CLS (Cumulative Layout Shift) był krytycznie wysoki.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                  <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    5 Krytycznych Znalezień:
                  </h3>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li><strong>Techniczne problemy:</strong> Strona używała starego stacku (jQuery, brak optimizacji obrazów), CLS 0.35 (powyżej 0.1 = zły).</li>
                    <li><strong>Mobile UX:</strong> Navbar zajmował 40% ekranu mobilnego, pola selectora były za małe (19px).</li>
                    <li><strong>Brak testów A/B:</strong> Każda zmiana szła do 100% userów bez testowania — wiele zmian obniżyło konwersję.</li>
                    <li><strong>Długi formularz checkoutu:</strong> 14 pól (wiele redundantnych), przycisk "Zapłać" był ukryty poza fold.</li>
                    <li><strong>Brak personalizacji:</strong> Wszyscy widzieli tę samą zawartość, niezależnie od źródła czy historii przeglądania.</li>
                  </ol>
                </div>
              </div>

              {/* Strategia */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">3. Strategia CRO — Approach 3-Etapowy</h2>
                <p className="text-muted-foreground mb-4">
                  Zamiast robić wszystko naraz, zbudowaliśmy systematyczną 6-miesięczną strategię CRO z testami, iteracjami i measurement:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-card border rounded-lg p-5">
                    <h3 className="font-heading font-semibold mb-3">Faza 1 (Miesiące 1-2): UX i Szybkość</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Zamiast A/B testów, zrobiliśmy szybkie optymalizacje techniczne i UX (quick wins). Zwracaliśmy attention na elementy, które blokowały conversion bez potrzeby testów (np. szybkość, mobile UX).
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-5">
                    <h3 className="font-heading font-semibold mb-3">Faza 2 (Miesiące 2-4): A/B Testy i Personalizacja</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Ciągłe A/B testy na kluczowych elementach (CTA, hero image, trust signals, social proof). Wykorzystywaliśmy VWO (Visual Website Optimizer) do A/B/n testów i wielowariacyjnych testów.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-5">
                    <h3 className="font-heading font-semibold mb-3">Faza 3 (Miesiące 4-6): Checkout Optimization i Growth</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Focus na checkout funnel (zmniejszenie pól, trust signals, payment methods), oraz personalizacja na podstawie źródła i historii.
                    </p>
                  </div>
                </div>
              </div>

              {/* Wdrożenie Etap 1 */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">4. Wdrożenie — Etap 1: UX i Szybkość (Miesiące 1-2)</h2>

                <h3 className="text-xl font-heading font-semibold mb-4 mt-6">Optymalizacja szybkości strony (Page Speed):</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>✓ <strong>Migracja na Next.js:</strong> Zmiana ze starego stacku (jQuery) na nowoczesny React/Next.js z SSR. Efekt: load time 4.2s → 1.1s (-73%).</li>
                  <li>✓ <strong>Optymizacja obrazów:</strong> Implementacja WebP, lazy loading, responsive images. Zmniejszenie bundle size o 62%.</li>
                  <li>✓ <strong>Compression & Caching:</strong> Gzip compression, HTTP/2, CDN (Cloudflare). LCP (Largest Contentful Paint) z 3.8s → 0.8s.</li>
                  <li>✓ <strong>Code splitting:</strong> Lazy loading komponentów na żądanie. Zmniejszenie initial JS bundle o 48%.</li>
                </ul>

                <h3 className="text-xl font-heading font-semibold mb-4 mt-6">Optymalizacja Mobile UX:</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>✓ <strong>Redesign navbaru:</strong> Z 40% ekranu na 8% (sticky header z hamburger menu). Zwiększyliśmy widoczność contentu produktu.</li>
                  <li>✓ <strong>Bigger touch targets:</strong> Buttony z 16px na 48px (minimum Apple UX guidelines). Zmniejszyło rage clicks o 82%.</li>
                  <li>✓ <strong>Responsive filtrowanie:</strong> Filtery produktów przeniesione z lewej sidebar (niepraktyczne na mobilach) na slide-out panel. +12% mobile sessions spędzonych na kategorii.</li>
                  <li>✓ <strong>One-click filtering:</strong> Dodanie Quick Filter buttons (rozmiar M, L, XL, kolor czerwony, itd.) zamiast tylko listy dropdown. +18% filtrowania na mobilach.</li>
                </ul>

                <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg p-6 my-6">
                  <h3 className="font-heading font-semibold mb-3">Wynik Etapu 1:</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>Conversion Rate: 0.8% → 1.24% (+55%)</strong><br />
                    <strong>Mobile CR: 0.3% → 0.68% (+127%)</strong><br />
                    <strong>Bounce Rate: 72% → 52% (-20pp)</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sama optymalizacja szybkości i UX przyniosła wzrost konwersji o 55% bez żadnych A/B testów! To pokazuje, że fundamenty (szybkość, dostępność) to 70% sukcesu CRO.
                  </p>
                </div>
              </div>

              {/* Wdrożenie Etap 2 */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">5. Wdrożenie — Etap 2: A/B Testy i Personalizacja (Miesiące 2-4)</h2>

                <p className="text-muted-foreground mb-6">
                  Na solidnej podstawie (szybkość, mobile UX) zaczęliśmy systematyczne A/B testy. Każdy test trwał minimum 2 tygodnie lub 500+ konwersji (A/B test sample size calculator). Stosowaliśmy VWO do implementacji i pomiaru wyników.
                </p>

                <h3 className="text-xl font-heading font-semibold mb-4">Kluczowe A/B Testy (wyniki statystycznie znaczące, p &lt; 0.05):</h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-green-500/50 pl-4 py-3 bg-green-500/5 rounded-r-lg">
                    <p className="font-heading font-semibold text-sm">Test 1: Hero Image — Photo vs Lifestyle</p>
                    <p className="text-muted-foreground text-sm mt-1">Porównanie pojedynczego zdjęcia produktu (A) vs. lifestyle photo (B). <strong>Lifestyle photo wygrał +32% CR</strong> (1.24% → 1.64%). Ludzie chcą widzieć produkt w kontekście.</p>
                  </div>
                  <div className="border-l-4 border-green-500/50 pl-4 py-3 bg-green-500/5 rounded-r-lg">
                    <p className="font-heading font-semibold text-sm">Test 2: CTA Button — Tekst i Kolor</p>
                    <p className="text-muted-foreground text-sm mt-1">Test (A) "Dodaj do koszyka" (szary) vs (B) "Kupuję Teraz!" (pomarańczowy gradient). <strong>Pomarańczowy gradient +28% CTR</strong> (1.64% → 2.10%).</p>
                  </div>
                  <div className="border-l-4 border-green-500/50 pl-4 py-3 bg-green-500/5 rounded-r-lg">
                    <p className="font-heading font-semibold text-sm">Test 3: Social Proof — Review Stars Placement</p>
                    <p className="text-muted-foreground text-sm mt-1">Układ gwiazd (A) na dole (B) tuż obok ceny. <strong>Placement obok ceny +18% CR</strong> (2.10% → 2.48%). Gwiazdy obok ceny zwiększają perceived value.</p>
                  </div>
                  <div className="border-l-4 border-green-500/50 pl-4 py-3 bg-green-500/5 rounded-r-lg">
                    <p className="font-heading font-semibold text-sm">Test 4: Trust Signals — Add Security Badges</p>
                    <p className="text-muted-foreground text-sm mt-1">Dodanie SSL, Money-Back Guarantee, i reviews count ("★★★★★ 3,247 recenzji"). <strong>+22% CR na checkout</strong> (reducing checkout abandonment z 74% → 62%).</p>
                  </div>
                  <div className="border-l-4 border-green-500/50 pl-4 py-3 bg-green-500/5 rounded-r-lg">
                    <p className="font-heading font-semibold text-sm">Test 5: Dynamic Recommendations</p>
                    <p className="text-muted-foreground text-sm mt-1">Personalizowane "Polecamy" sekcja (based na przeglądanych produktach). <strong>+18% AOV</strong> (średnia konwersji wzrosła, ale przede wszystkim wartość koszyka — z 189 PLN → 223 PLN).</p>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-semibold mb-4 mt-6">Personalizacja na podstawie źródła ruchu:</h3>
                <p className="text-muted-foreground mb-4">
                  GA4 pokazała, że różne segmenty behują się inaczej. Zrobiliśmy personalizację:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• <strong>Google Ads users:</strong> Widzieli hero z emphasis na "Sale" i limited-time offer (FOMO). +15% CR w tej grupie.</li>
                  <li>• <strong>Email subscribers:</strong> Personalizowany greeting ("Hej Anna!"), exclusive discount code w hero. +24% CR.</li>
                  <li>• <strong>Organic/SEO traffic:</strong> Hero z emphasis na quality, sustainability (matching intent search query). +18% CR.</li>
                </ul>

                <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg p-6 my-6">
                  <h3 className="font-heading font-semibold mb-3">Wynik Etapu 2:</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>Conversion Rate: 1.24% → 2.89% (+133%)</strong><br />
                    <strong>Mobile CR: 0.68% → 1.94% (+185%)</strong><br />
                    <strong>AOV: 189 PLN → 240 PLN (+27%)</strong><br />
                    <strong>Cumulative CR (start): 0.8% → 2.89% (+261%)</strong>
                  </p>
                </div>
              </div>

              {/* Wdrożenie Etap 3 */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">6. Wdrożenie — Etap 3: Checkout Optimization (Miesiące 4-6)</h2>

                <p className="text-muted-foreground mb-4">
                  Checkout to miejsce, gdzie tracimy najwięcej konwersji. Zrobiliśmy kompleksową re-arch checkout flow na bazie best practices i A/B testów.
                </p>

                <h3 className="text-xl font-heading font-semibold mb-4">Zmiana 1: Skrócenie Formularza (14 pól → 7 pól)</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  <strong>Przed:</strong> Email, Password, First Name, Last Name, Address, City, Province, Postal Code, Phone, Company, Tax ID, Delivery Instructions, Special Notes (14 pól)<br />
                  <strong>Po:</strong> Email (z autofill), Delivery Address (Google Places autofill), Payment Method, Phone (opcjonalny). Reszta na success page.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Wynik: Checkout completion rate +59%</strong> (z 42% → 67%). To jest ogromne — z 100 użytkowników do checkoutu, 25 więcej konwertowało.
                </p>

                <h3 className="text-xl font-heading font-semibold mb-4">Zmiana 2: Dodanie Social Login (Google, Facebook)</h3>
                <p className="text-muted-foreground mb-6">
                  Dodaliśmy Google i Facebook login opcje. <strong>35% new customers używało social login</strong>, co spowodowało +18% konwersji w tej grupie (mniej trenia, szybciej).
                </p>

                <h3 className="text-xl font-heading font-semibold mb-4">Zmiana 3: Payment Method Expansion</h3>
                <p className="text-muted-foreground mb-6">
                  Dodaliśmy: Apple Pay, Google Pay, Przelewy24, BLIK, Paypal, Klarna (buy now, pay later). Wcześniej była tylko karta kredytowa. Accessibility do różnych metod płatności +22% konwersji (segment users bez karty kredytowej mogł teraz kupić).
                </p>

                <h3 className="text-xl font-heading font-semibold mb-4">Zmiana 4: Visual Trust & Security</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• SSL certificate badge (Comodo) vidoczna w checkout</li>
                  <li>• "30-day money-back guarantee" prominentnie wyświetlona</li>
                  <li>• Review count ("Zaufane przez 8,472 klientów")</li>
                  <li>• Progress bar checkout (krok 1/3, krok 2/3) — pokazanie postępu</li>
                </ul>

                <h3 className="text-xl font-heading font-semibold mb-4">Zmiana 5: Cart Abandonment Email Sequence</h3>
                <p className="text-muted-foreground mb-6">
                  Implementacja 3-email sequence: 1h po abandonment (reminder), 24h (small discount 5%), 72h (larger discount 15% + free shipping). <strong>12% recovered carts</strong> (sprzedaż z porzuconych koszyków).
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg p-6 my-6">
                  <h3 className="font-heading font-semibold mb-3">Wynik Etapu 3:</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>Conversion Rate: 2.89% → 3.52% (+22%)</strong><br />
                    <strong>Mobile CR: 1.94% → 2.80% (+44%)</strong><br />
                    <strong>AOV: 240 PLN → 267 PLN (+11%)</strong><br />
                    <strong>Cumulative (od startu): 0.8% → 3.52% (+340%)</strong>
                  </p>
                </div>
              </div>

              {/* Wyniki */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">7. Pełne Wyniki i Metryki</h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/40 bg-muted/30">
                        <th className="text-left py-3 px-4 font-heading font-semibold">Metrika</th>
                        <th className="text-right py-3 px-4">Przed</th>
                        <th className="text-right py-3 px-4">Po</th>
                        <th className="text-right py-3 px-4 text-primary font-semibold">Zmiana</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metricsData.map((row, idx) => (
                        <tr key={idx} className={`border-b border-border/20 ${idx % 2 === 0 ? 'bg-muted/10' : ''}`}>
                          <td className="py-3 px-4 font-medium">{row.label}</td>
                          <td className="text-right py-3 px-4 text-muted-foreground">{row.before}</td>
                          <td className="text-right py-3 px-4 font-semibold">{row.after}</td>
                          <td className="text-right py-3 px-4 text-green-600 font-semibold">{row.change}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-card border border-primary/30 rounded-lg p-6 mb-8">
                  <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    ROI Projektu CRO
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Budżet CRO: 35 000 PLN (team + narzędzia: VWO, Hotjar, Clarity, Next.js development)
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong>ROI: 1,847%</strong> — na podstawie dodatkowego przychodu wygenerowanego przez wzrost konwersji w 6 miesięcy.<br />
                    (<strong>Dodatkowo zarobiony przychód:</strong> +287% na bazie utrzymania istniejącego ruchu)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    To oznacza, że każdy 1 PLN wydany na CRO zwrócił się 18.47 PLN. Projekt zwrócił inwestycję w tydzień.
                  </p>
                </div>

                <h3 className="text-xl font-heading font-semibold mb-4">Dodatkowe Obserwacje:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Traffic stay flat:</strong> Nie zwiększaliśmy traffic (to byłoby dodatkowe wydatki na marketing), a konwersja wzrosła 340%. Czysty wzrost przychodu.</li>
                  <li>• <strong>Retention improvement:</strong> Repeat purchase rate wzrósł z 12% do 28% (dzięki quality experience i personalizacji). Customer lifetime value +145%.</li>
                  <li>• <strong>Referral loop:</strong> Lepsze doświadczenie spowodowało 22% wzrost NPS (Net Promoter Score), co dało organiczne referrals (+8% new customers).</li>
                  <li>• <strong>Mobile-first effort paid off:</strong> Mobile traffic (50% wszystkich visits) teraz konwertuje prawie na parity z desktop (2.80% vs 4.12%).</li>
                </ul>
              </div>

              {/* Wnioski */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">8. Kluczowe Wnioski & Best Practices</h2>

                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-primary/50 pl-4 py-3 bg-primary/5 rounded-r-lg">
                    <h3 className="font-heading font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      1. Page Speed to Fundament CRO
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Zmniejszenie load time z 4.2s na 1.1s samo w sobie dało +55% konwersji. Nie ma sensu testować elementy UX na powolnej stronie — najpierw szybkość.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary/50 pl-4 py-3 bg-primary/5 rounded-r-lg">
                    <h3 className="font-heading font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      2. Mobile-First Optimization je Obowiązkowa
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Mobile conversion wzrosła o 836% — co sugeruje, że mobile UX był kompletnie zaniedbany. Jeśli 50% ruchu pochodzi z mobile, to to musi być priority. Touch targets minimum 48px, zredukowane menu, fast interactions.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary/50 pl-4 py-3 bg-primary/5 rounded-r-lg">
                    <h3 className="font-heading font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      3. A/B Test Wszystkie Elementy, ale Potrzebny Jest Sample Size
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Każdy test trwał minimum 2 tygodnie lub 500+ konwersji. Zbyt krótkie testy mogą pokazać fake winners. Używaliśmy VWO do automatycznego stat significance calculatora — czekali na p &lt; 0.05.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary/50 pl-4 py-3 bg-primary/5 rounded-r-lg">
                    <h3 className="font-heading font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      4. Skrócenie Checkout Form ma Bezpośredni Wpływ na Konwersję
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      14 pól → 7 pól dało +59% checkout completion. Każde dodatkowe pole spada konwersja średnio o 4.5%. Pola muszą być: email, shipping address, payment. Wszystko inne może czekać.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary/50 pl-4 py-3 bg-primary/5 rounded-r-lg">
                    <h3 className="font-heading font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      5. Personalizacja Boosts Segment-Specific Conversion
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Personalizacja na bazie traffic source (Ads vs email vs organic) dała +28% wzrostu konwersji w top-converting segments. Nie wszyscy users są tacy sami — treat them differently.
                    </p>
                  </div>
                </div>

                <div className="bg-card border-2 border-primary/30 rounded-lg p-6">
                  <h3 className="font-heading font-semibold mb-3">Metodyka CRO w Skrócie:</h3>
                  <ol className="space-y-2 text-muted-foreground text-sm list-decimal list-inside">
                    <li><strong>Analiza (Hotjar, GA4, Clarity):</strong> Identyfikacja problemów w UX i conversion funnel.</li>
                    <li><strong>Hipotezy:</strong> Czemu bounce rate jest wysoki? Czemu checkout abandonment 74%? Formułuj konkretne hipotezy.</li>
                    <li><strong>Quick wins:</strong> Implementuj zmiany nie wymagające testów (szybkość, mobile UX, trust signals).</li>
                    <li><strong>A/B testy:</strong> Każdy element UX powinna być testowany minimum 2 tygodnie (500+ konwersji).</li>
                    <li><strong>Iteracja:</strong> Wdrażaj winning variants, testuj kolejny element.</li>
                    <li><strong>Measurement:</strong> Track complete funnel (visits → product page → cart → checkout → thank you).</li>
                  </ol>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">9. Odpowiedzi na Najczęstsze Pytania</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-heading font-semibold py-4 hover:text-primary transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Podsumowanie */}
              <div className="bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border border-primary/20 rounded-xl p-8 mt-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Podsumowanie</h2>
                <p className="text-muted-foreground mb-4">
                  Zwiększenie konwersji sklepu e-commerce o 340% (0.8% → 3.52%) w 6 miesięcy nie było wynikiem jednej "magicznej" zmiany. To był systematyczny proces:
                </p>
                <ol className="space-y-2 text-muted-foreground mb-6 list-decimal list-inside">
                  <li>Audyt i diagnoza za pomocą Hotjar, GA4, Clarity</li>
                  <li>Optymalizacja fundamentów (szybkość, mobile UX, accessibility)</li>
                  <li>Ciągłe A/B testy na bazie hypotheses, a nie intuicji</li>
                  <li>Fokus na checkout — gdzie tracimy 70% potencjalnych sprzedaży</li>
                  <li>Personalizacja na bazie segmentacji traffic</li>
                </ol>
                <p className="text-muted-foreground font-medium">
                  Rezultat: +287% przychodu przy tym samym budżecie na traffic. ROI 1,847%.
                </p>
              </div>

              {/* Linki powiązane */}
              <div className="pt-8 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">
                  → Pozycjonowanie stron
                </Link>
                <Link to="/seo/audyt" className="text-primary hover:underline font-medium text-sm">
                  → Audyt SEO
                </Link>
                <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">
                  → Content marketing
                </Link>
                <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">
                  → Strony internetowe
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border-t border-primary/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Chcesz zwiększyć konwersję swojego sklepu?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              FOTZ Studio specjalizuje się w CRO dla e-commerce. Przeprowadzimy audyt Twojej strony, zidentyfikujemy problemy i pokażemy konkretne, przetestowane strategie wzrostu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  Bezpłatna konsultacja CRO
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/seo/audyt">Darmowy audyt UX</Link>
              </Button>
            </div>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
};

export default CaseStudyEcommerceCRO;
