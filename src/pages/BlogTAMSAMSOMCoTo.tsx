import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart2, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogTAMSAMSOMCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "TAM SAM SOM — co to jest? Analiza rynku dla startupów" },
  ];

  const marketLevels = [
    {
      acronym: "TAM",
      full: "Total Addressable Market",
      pl: "Całkowity Rynek Docelowy",
      desc: "Całkowity przychód możliwy do osiągnięcia jeśli zdobędziesz 100% rynku. Teoretyczny maksimum — nie uwzględnia ograniczeń dystrybucji, geografi ani konkurencji.",
      example: "Dla SaaS do HR: cały światowy rynek oprogramowania HR = 35 mld USD/rok.",
      calc: "Top-down: weź dane branżowe (Gartner, IDC) i wyznacz całkowity rynek.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      acronym: "SAM",
      full: "Serviceable Addressable Market",
      pl: "Rynek Obsługiwalny",
      desc: "Część TAM którą możesz realistycznie obsłużyć swoim produktem i modelem dystrybucji. Uwzględnia geografię, segment i kanały sprzedaży.",
      example: "HR SaaS dla MŚP w Polsce i DACH: ~800 mln USD/rok (segment i geografia).",
      calc: "TAM x % segment docelowy x % geografi. Albo bottom-up: liczba firm w ICP x ARPU.",
      color: "bg-green-50 border-green-200",
    },
    {
      acronym: "SOM",
      full: "Serviceable Obtainable Market",
      pl: "Rynek Możliwy do Zdobycia",
      desc: "Realistyczna część SAM którą możesz zdobyć w ciągu 3-5 lat. Uwzględnia konkurencję, zasoby i tempo wzrostu. To prawdziwy cel biznesowy.",
      example: "HR SaaS: 5% SAM w 5 latach = 40 mln USD ARR. Wymaga 400 klientów przy ARPU 100k PLN.",
      calc: "SAM x % win rate realistyczny. Sprawdź czy masz zasoby sprzedażowe do jego osiągnięcia.",
      color: "bg-orange-50 border-orange-200",
    },
  ];

  const calculationMethods = [
    {
      method: "Top-Down",
      desc: "Zacznij od całego rynku (dane branżowe) i zawęź do swojego segmentu.",
      pros: "Szybkie, dobre dla pitch decku. Dane dostępne od Gartner, IDC, Statista.",
      cons: "Może być zbyt optymistyczne. 'Jeśli zdobędziemy 1% rynku wartego 10 mld...' — klasyczny błąd.",
    },
    {
      method: "Bottom-Up",
      desc: "Zacznij od realnych jednostek: liczba klientów x ARPU (Average Revenue Per User).",
      pros: "Bardziej wiarygodne dla inwestorów. Zmuszasz się do myślenia o klientach, nie o rynku.",
      cons: "Wymaga danych o ICP i cenach. Bardziej czasochłonne.",
    },
    {
      method: "Value Theory",
      desc: "Ile wartości dostarczasz klientowi? Jaką część tej wartości możesz przechwycić jako przychód?",
      pros: "Najlepsza do nowych kategorii gdzie danych rynkowych brak. Logika biznesowa.",
      cons: "Trudno zweryfikować empirycznie. Subiektywne.",
    },
  ];

  const faqItems = [
    {
      question: "Co to jest TAM SAM SOM?",
      answer: "TAM SAM SOM to framework analizy wielkości rynku używany przez startupy, inwestorów i firmy planujące ekspansję. TAM (Total Addressable Market) = całkowity rynek jeśli obsługujesz wszystkich możliwych klientów. SAM (Serviceable Addressable Market) = część rynku którą realistycznie możesz obsłużyć swoim produktem i dystrybucją. SOM (Serviceable Obtainable Market) = część SAM którą możesz realnie zdobyć w perspektywie 3-5 lat. Przykład: firma tworząca aplikację do zarządzania restauracjami. TAM: cały globalny rynek restauracji = 300 mld. SAM: restauracje w Polsce używające POS = 2 mld. SOM: 10% SAM w 5 latach = 200 mln PLN ARR. Inwestorzy VC patrzą przede wszystkim na TAM (czy rynek jest wystarczająco duży) i wiarygodność SOM (czy plan jest realistyczny).",
    },
    {
      question: "Jak obliczyć TAM bottom-up?",
      answer: "Kalkulacja TAM bottom-up krok po kroku: 1) Zdefiniuj ICP (Ideal Customer Profile) — kto jest Twoim klientem? Wielkość firmy, branża, stanowisko. 2) Policz liczbę potencjalnych klientów w target market — dane z GUS, LinkedIn, Eurostat, branżowych raportów. 3) Oblicz ARPU (Average Revenue Per User) — ile płaci typowy klient rocznie? 4) TAM = liczba potencjalnych klientów x ARPU. Przykład B2B SaaS: ICP = firmy 50-500 pracowników w branży e-commerce w Polsce. Liczba firm: 12,000 (dane z CEIDG/GUS). ARPU: 24,000 PLN/rok (2,000 PLN/mies. x 12). TAM = 12,000 x 24,000 = 288 mln PLN. Walidacja: sprawdź czy wynik jest spójny z danymi top-down z raportów branżowych.",
    },
    {
      question: "Jaka wielkość TAM jest potrzebna dla VC?",
      answer: "Wymagania VC dotyczące TAM: Fundusze seed/pre-seed (Polska/CEE): TAM minimum 500 mln USD — rynek musi być duży żeby fundusz mógł zarobić na swojej stake. Series A (Europa): TAM powyżej 1 mld USD. Top-tier VC (a16z, Sequoia): TAM powyżej 10 mld USD — szukają 'billion dollar businesses'. Dlaczego VC tak bardzo patrzą na TAM: Startup z 10% udziałem w rynku 100 mln PLN = 10 mln PLN ARR. Startup z 1% udziałem w rynku 10 mld PLN = 100 mln PLN ARR. VC potrzebują potencjału na 10-100x zwrot — mały rynek uniemożliwia to nawet przy doskonałej egzekucji. Uwaga: TAM musi być 'real and defensible' — VC widzą tysiące pitch decków i od razu wychwyci nieprawdziwe liczby. Lepiej podać mniejszy ale wiarygodny TAM niż wyolbrzymiony.",
    },
    {
      question: "Jak TAM SAM SOM używać w pitch decku?",
      answer: "Prezentacja TAM SAM SOM w pitch decku: Standardowy slajd: 3 koncentryczne okręgi lub 3 kolumny — TAM (duże), SAM (środkowe), SOM (małe). Źródła danych: ZAWSZE cytuj źródła (Gartner, IDC, McKinsey, własne badania). Inwestorzy weryfikują. Bottom-up SOM: pokaż jak dochodzisz do SOM — liczba klientów x ARPU x % win rate. Roadmapa: wyjaśnij jak SAM rośnie w czasie — ekspansja geograficzna, nowe segmenty. Częste błędy: zbyt duże TAM bez logiki ('3% of a $1 trillion market'). SAM = TAM bez uzasadnienia. SOM bez jasnego planu jak go osiągnąć. Brak źródeł lub stare dane (sprzed 3+ lat). Dobry przykład struktury: 'Rynek HR tech w Polsce (SAM) wynosi 800 mln PLN. W 5 latach planujemy zdobyć 40 mln PLN ARR (5% SAM) przez focus na segment 100-500 pracowników — 3,200 firm które płacą średnio 12,500 PLN/rok.'",
    },
    {
      question: "Jak odróżnić SAM od SOM?",
      answer: "Różnica SAM vs SOM: SAM (Serviceable Addressable Market) = rynek który możesz obsłużyć swoim PRODUKTEM i dystrybucją, niezależnie od zasobów. Odpowiedź na pytanie: 'Gdybyś miał nieograniczone zasoby sprzedażowe, ilu klientów możesz obsłużyć?' SOM (Serviceable Obtainable Market) = rynek który możesz REALISTYCZNIE zdobyć przy swoich obecnych zasobach, w określonym czasie, z uwzględnieniem konkurencji. Odpowiedź na pytanie: 'Ile realnie zdobędziesz w 3-5 lat?' Czynniki zmniejszające SOM vs SAM: konkurencja (inni grają w tym samym SAM), ograniczenia sprzedażowe (ile AE możesz zatrudnić), czas ramping (nowy AE potrzebuje 3-6 mies.), churn (część klientów odejdzie). Formuła: SOM = SAM x % win rate rynkowy. Benchmark SaaS: win rate 10-30% SAM w pierwszych 5 latach to dobry cel.",
    },
    {
      question: "Kiedy TAM SAM SOM jest niewystarczające?",
      answer: "Ograniczenia TAM SAM SOM: Nowe kategorie rynkowe — jeśli tworzysz nową kategorię (jak Uber przed Uberem), dane rynkowe nie istnieją. TAM oparty na istniejących danych jest mylący. Rozwiązanie: use case value theory — ile wartości tworzysz dla klienta? Dynamiczne rynki — TAM może szybko urosnąć (AI tools w 2022 vs 2024) lub skurczyć się (rynek print). Statyczny snapshot jest niewystarczający. Co dodać do analizy: CAGR (Compound Annual Growth Rate) — jak szybko rynek rośnie. Analogie rynkowe — porównaj do podobnych rynków w innych krajach. Total Value Created — ile wartości dostarczasz vs przychód (capture rate). Alternatywne frameworki: Jobs-to-be-Done market sizing (Clayton Christensen), competitive market share analysis (zamiast 'rynku' patrz na konkurentów), cohort-based growth model (bottom-up z założeniami churnu).",
    },
  ];

  return (
    <>
      <SEOHead
        title="TAM SAM SOM — co to jest? Analiza rynku dla startupów | fotz.pl"
        description="TAM SAM SOM co to jest — wyjaśniamy czym jest Total Addressable Market, Serviceable Market i Obtainable Market. Jak obliczyć, jak prezentować inwestorom i…"
        canonical="https://fotz.pl/blog/tam-sam-som-co-to"

        keywords="TAM SAM SOM co to jest, TAM SAM SOM definicja, czym jest TAM SAM SOM, TAM SAM SOM startup, TAM SAM SOM jak liczyć, TAM SAM SOM wzór, TAM SAM SOM przykłady"
      />
      <ArticleSchema
        title="TAM SAM SOM — co to jest? Analiza rynku dla startupów"
        description="Czym jest TAM SAM SOM, jak obliczać top-down i bottom-up, jakie TAM jest wymagane przez VC i jak prezentować analizę rynku w pitch decku."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/tam-sam-som-co-to"
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
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Startup / Strategia</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                TAM SAM SOM — co to jest i jak analizować rynek?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                TAM SAM SOM to framework analizy wielkości rynku używany przez startupy i inwestorów.
                Total Addressable Market, Serviceable Market i Obtainable Market — jak je policzyć i zaprezentować.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">TAM, SAM i SOM — definicje i różnice</h2>
              <div className="space-y-4 mb-6">
                {marketLevels.map((m, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${m.color}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-black text-slate-900">{m.acronym}</span>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{m.full}</p>
                        <p className="text-slate-500 text-xs">{m.pl}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 text-xs mb-2">{m.desc}</p>
                    <p className="text-slate-600 text-xs mb-1"><span className="font-medium">Przykład:</span> {m.example}</p>
                    <p className="text-blue-700 text-xs"><span className="font-medium">Jak liczyć:</span> {m.calc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Metody kalkulacji rynku</h2>
              <div className="space-y-3 mb-6">
                {calculationMethods.map((c, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1">{c.method}</p>
                    <p className="text-slate-600 text-xs mb-2">{c.desc}</p>
                    <div className="flex gap-4">
                      <p className="text-green-700 text-xs flex-1"><span className="font-medium">Zalety:</span> {c.pros}</p>
                      <p className="text-orange-700 text-xs flex-1"><span className="font-medium">Wady:</span> {c.cons}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Przygotowujesz pitch deck lub strategię wzrostu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony dla startupów i prezentacje strategiczne — budujemy materiały które przekonują inwestorów i klientów.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony dla startupów — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — TAM SAM SOM co to jest</h2>
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
          heading="Zbudujemy strategię wzrostu i materiały inwestorskie"
          subheading="Pitch decks, strony dla startupów i content strategiczny — pomagamy firmom komunikować swoją wartość i wizję rynku."
        />
      </Layout>
    </>
  );
}
