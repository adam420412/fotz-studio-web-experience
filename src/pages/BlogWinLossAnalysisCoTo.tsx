import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart2, TrendingUp, CheckCircle2, Target } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogWinLossAnalysisCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Win/Loss Analysis — co to jest? Analiza wygranych i przegranych" },
  ];

  const winLossProcess = [
    {
      step: "1. Zbierz dane z CRM",
      desc: "Pobierz closed-won i closed-lost deals z ostatnich 6-12 miesięcy. Sprawdź: branżę klienta, wielkość firmy, wartość dealu, powód zamknięcia, konkurencja.",
    },
    {
      step: "2. Zaprojektuj wywiady",
      desc: "Stwórz listę 8-12 pytań do kupujących. Pytaj o: kryteria decyzji, co Cię wyróżniło vs nie, co poszło nie tak, jak porównujesz się z wybranym dostawcą.",
    },
    {
      step: "3. Przeprowadź wywiady (zewnętrzne)",
      desc: "Krytyczne: wywiady prowadzi neutralna strona trzecia (nie handlowiec). Kupujący mówią szczerzej do osoby niezwiązanej ze sprzedawcą. 15-30 minut per wywiad.",
    },
    {
      step: "4. Koduj i analizuj dane",
      desc: "Identyfikuj wzorce: dlaczego wygrywasz (top 3-5 powody), dlaczego przegrywasz, z jaką konkurencją i w jakich segmentach.",
    },
    {
      step: "5. Wyciągnij wnioski strategiczne",
      desc: "Przekuj dane w działania: zmiany w messaging, pricing, produkcie, procesie sprzedaży, szkoleniu handlowców, battle cards.",
    },
    {
      step: "6. Zamknij pętlę — wdroż i zmierz",
      desc: "Podziel wnioski z sales, marketing, product. Śledź czy win rate poprawia się po zmianach wynikających z analizy.",
    },
  ];

  const winLossQuestions = [
    "Jakie były Twoje główne kryteria wyboru dostawcy?",
    "Co sprawiło, że zdecydowałeś się na [wybranego dostawcę] / na nas?",
    "Co mogliśmy zrobić inaczej by wygrać / co zdecydowało o naszej wygranej?",
    "Jak oceniasz naszą propozycję wartości vs alternatywy?",
    "Jakie były Twoje główne obawy podczas procesu zakupowego?",
    "Co Twoim zdaniem wyróżnia nas pozytywnie / negatywnie vs konkurencja?",
    "Jak oceniasz nasz proces sprzedaży i doświadczenie z handlowcem?",
    "Czy rozważałbyś nas przy przyszłej decyzji zakupowej?",
  ];

  const faqItems = [
    {
      question: "Co to jest win/loss analysis?",
      answer: "Win/loss analysis (analiza wygranych i przegranych) to systematyczne badanie dealów sprzedażowych — zarówno wygranych (closed-won) jak i przegranych (closed-lost) — w celu zrozumienia dlaczego klienci wybierają Twoją firmę lub konkurencję. Główne metody: wywiady z kupującymi (primary source — najbardziej wartościowe), analiza danych z CRM, ankiety po zakończeniu procesu zakupowego, analiza feedback od handlowców. Cel: identyfikacja wzorców i czynników decydujących o wygranej lub przegranej, by poprawić win rate, messaging, produkt i proces sprzedaży. Win/loss analysis to jedna z najważniejszych a zarazem najbardziej zaniedbanych praktyk w B2B sprzedaży — większość firm nie przeprowadza regularnych win/loss interviews.",
    },
    {
      question: "Dlaczego warto przeprowadzać win/loss analysis?",
      answer: "Wartość win/loss analysis: Lepszy win rate — firmy regularnie przeprowadzające W/L analysis mają o 54% wyższy win rate (Primary Intelligence). Realne dane o konkurencji — dowiadujesz się dlaczego klienci wybierają konkretnych konkurentów, czego nie możesz znaleźć w żadnych raportach. Feedback dla produktu — klienci mówią co im brakuje lub co nie spełnia oczekiwań. Lepsza jakość sprzedaży — handlowcy uczą się co działa, a co nie. Alignment marketing-sprzedaż — marketing dostaje realne dane do budowania battle cards i messaging. Kalibracja prognoz — CRM często błędnie klasyfikuje powody przegrania. W/L analysis odkrywa realne powody. Ryzyko braku W/L analysis: podejmujesz decyzje na podstawie przekonań handlowców (które mogą być błędne), a nie głosu klienta.",
    },
    {
      question: "Jak przeprowadzić wywiady win/loss?",
      answer: "Win/loss interviews — best practices: Kto powinien prowadzić: NIGDY handlowiec który prowadził deal — kupujący nie będzie szczery. Idealna osoba: zewnętrzny konsultant, analityk, lub osoba z product/marketing niezwiązana z dealsem. Kiedy: najlepiej 2-4 tygodnie po zamknięciu deala — kupujący pamięta szczegóły, ale emocje opadły. Jak rekrutować: email od CEO lub VP Sales z prośbą o 20 minut rozmowy. Oferuj incentive (karta podarunkowa 50-100 PLN). Wskaźnik odpowiedzi: 20-40% (wygranych łatwiej, przegranych trudniej). Struktura wywiadu: 5 min — kontekst rozmowy i zapewnienie poufności. 15 min — otwarte pytania o kryteria decyzji, powody, ocenę procesu. 5 min — zamykające pytania i podziękowania. Nagrywaj za zgodą i transkrybuj (Otter.ai). Ile: min. 10-20 wywiadów per kwartał dla statystycznie istotnych wyników.",
    },
    {
      question: "Jakie dane z CRM analizować w win/loss analysis?",
      answer: "Dane CRM do win/loss analysis: Podstawowe segmenty: closed-won vs closed-lost rate per: branżę klienta, wielkość firmy (ARR, pracownicy), geografię, typ produktu/pakietu, kanał sprzedaży (inbound vs outbound), handlowca. Analiza czasowa: sales cycle length dla won vs lost — czy przegrane trwają dłużej? Conversion rate per stage — gdzie wypada najwięcej deali? Competitor field: z jaką konkurencją przegrywasz najczęściej? Gdzie wygrywasz? Lost reason kategoryzacja: cena, brak funkcji, konkurencja, no decision, timing, relacje. Ważne: Lost Reason w CRM jest niewiarygodny — handlowcy często wpisują 'cena' gdy prawdziwy powód to inne. W/L interviews weryfikują te dane. Narzędzia: Salesforce reports, HubSpot deals analytics, Gong (conversation intelligence), Clari (revenue intelligence).",
    },
    {
      question: "Co zrobić z wynikami win/loss analysis?",
      answer: "Wdrożenie wyników win/loss analysis: Dla Sales: zaktualizuj battle cards — konkretne odpowiedzi na pytania o konkurencję oparte na głosie klienta. Coaching handlowców — na co zwracać uwagę w discovery, jak adresować typowe obiekcje. Dla Marketing: zaktualizuj messaging i propozycję wartości — używaj języka klientów. Popraw positioning page na stronie — co realnie wyróżnia was od konkurencji. Stwórz case studies adresujące typowe obawy decyzyjne. Dla Product: roadmap — funkcje których brakuje i które powodują przegraną. Packaging/pricing jeśli cena jest powtarzającym się powodem przegranej. Dla Leadership: ICP refinement — jeśli w pewnych segmentach zawsze przegrywacie, rozważ zmianę targetowania. Go-to-market strategy — gdzie i jak konkurować. Kadencja: pełna analiza co kwartał, szybkie update'y monthly. Dziel raporty z całą firmą — W/L insights to cenne dane strategiczne.",
    },
    {
      question: "Ile kosztuje win/loss analysis i czy można to zrobić samodzielnie?",
      answer: "Koszty win/loss analysis: Samodzielnie (DIY): koszt czasu Twoich pracowników + ewentualne incentive dla respondentów (50-100 PLN/wywiad). Problem: kupujący rzadko mówią szczerze swojemu potencjalnemu dostawcy. Wewnętrzny analityk lub researcher: efektywniejszy niż handlowiec, ale wciąż może być postrzegany jako stronniczy. Zewnętrzna agencja/konsultant: 500-3000 PLN per wywiad (zależy od poziomu konsultanta i głębokości analizy), 15-30k PLN za pełne badanie (20-30 wywiadów + raport + warsztaty). Platformy W/L: Clozd, Primary Intelligence, Crayon — od 2000$/mies. dla enterprise. Minimalne viable W/L program: 10 własnych wywiadów/kwartał prowadzonych przez osobę niezaangażowaną sprzedażowo + systematyczna analiza w arkuszu kalkulacyjnym. ROI: poprawa win rate o 1-2% przy dealu 50k PLN = ogromny zwrot z inwestycji.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Win/Loss Analysis — co to jest? Analiza wygranych i przegranych | fotz.pl"
        description="Win/loss analysis co to jest — wyjaśniamy czym jest analiza wygranych i przegranych w B2B, jak przeprowadzić wywiady, analizować dane CRM i wdrażać wnioski."
        canonical="https://fotz.pl/blog/win-loss-analysis-co-to"

        keywords="Win/Loss Analysis co to jest, Win/Loss Analysis definicja, czym jest Win/Loss Analysis, Win/Loss Analysis przykłady, jak działa Win/Loss Analysis, Win/Loss Analysis znaczenie, Win/Loss Analysis przewodnik"
      />
      <ArticleSchema
        title="Win/Loss Analysis — co to jest? Analiza wygranych i przegranych"
        description="Czym jest win/loss analysis, proces przeprowadzania wywiadów, analiza CRM, pytania do kupujących i jak wdrażać wnioski w sprzedaży i marketingu."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/win-loss-analysis-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Sales B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Win/Loss Analysis — co to jest i jak analizować wygranie i porażki?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Win/loss analysis pyta klientów dlaczego wybrali Ciebie lub konkurencję.
                Firmy stosujące tę praktykę mają o 54% wyższy win rate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Proces win/loss analysis</h2>
              <div className="space-y-3 mb-6">
                {winLossProcess.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{idx + 1}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.step}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Pytania do wywiadów win/loss</h2>
              <div className="space-y-2 mb-6">
                {winLossQuestions.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm">{q}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz budować materiały które wygrywają deale?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony B2B, case studies i landing pages — content wspierający sprzedaż oparty na głosie klienta.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony B2B — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Win/Loss Analysis co to jest</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Zbuduj materiały sprzedażowe oparte na głosie klienta"
          subheading="Case studies, battle cards i landing pages — content który odpowiada na realne pytania kupujących."
        />
      </Layout>
    </>
  );
}
