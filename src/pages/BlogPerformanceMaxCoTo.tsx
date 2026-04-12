import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap, TrendingUp, BarChart2, CheckCircle2, AlertCircle } from "lucide-react";
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

export default function BlogPerformanceMaxCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Performance Max — co to jest? Kampanie PMax Google Ads" },
  ];

  const pmaxChannels = [
    {
      channel: "Google Search",
      desc: "Reklamy tekstowe w wynikach wyszukiwania — PMax może wyświetlać się na zapytania związane z Twoimi asset groups i sygnałami odbiorców.",
      note: "PMax ma priorytet nad kampaniami Search przy tych samych słowach kluczowych.",
    },
    {
      channel: "Google Shopping",
      desc: "Reklamy produktowe dla e-commerce — zastąpiło inteligentne kampanie Shopping. Wymaga feed produktowy w Google Merchant Center.",
      note: "Dla e-commerce PMax z feedem produktowym to priorytet nad standardowym Shopping.",
    },
    {
      channel: "YouTube",
      desc: "Reklamy wideo In-Stream i In-Feed — PMax automatycznie dobiera format i targetowanie na podstawie asset groups.",
      note: "Wymaga materiałów wideo lub Google generuje automatycznie z obrazów i tekstu.",
    },
    {
      channel: "Google Display Network",
      desc: "Banner i reklamy displayowe na milionach stron partnerskich Google. Automatyczne targetowanie przez Smart Bidding.",
      note: "PMax zastępuje inteligentne kampanie display (Smart Display Campaigns).",
    },
    {
      channel: "Gmail",
      desc: "Reklamy w zakładce Oferty i Społeczności skrzynki Gmail użytkowników.",
      note: "Targetowanie na podstawie zainteresowań i historii zakupowej.",
    },
    {
      channel: "Google Discover / Maps",
      desc: "Reklamy w feedzie Discover (Android/iOS) i Google Maps — lokalne i mobilne dotarcie.",
      note: "Szczególnie wartościowe dla biznesów lokalnych i mobilnych.",
    },
  ];

  const pmaxAssets = [
    { asset: "Nagłówki", count: "Do 15", desc: "Krótkie nagłówki (maks. 30 znaków) i długie nagłówki (maks. 90 znaków). Google wybiera kombinacje automatycznie." },
    { asset: "Opisy", count: "Do 5", desc: "Opisy reklam (maks. 90 znaków). Różne opisy powinny podkreślać różne zalety — USP, CTA, social proof." },
    { asset: "Obrazy", count: "Do 20", desc: "Poziome (1.91:1), kwadratowe (1:1) i pionowe (4:5). Bez tekstu w obrazie lub maks. 20% tekstu." },
    { asset: "Filmy", count: "Do 5", desc: "YouTube URL lub wgrane bezpośrednio. Min. 10 sekund. Google generuje wideo z obrazów jeśli brak." },
    { asset: "Sygnały odbiorców", count: "Nieograniczone", desc: "Listy remarketingowe, grupy zainteresowań, Custom Intent — wskazówki dla AI (nie twarde ograniczenia)." },
    { asset: "URL końcowy", count: "1 główny", desc: "Strona docelowa kampanii. Można rozszerzyć przez Final URL Expansion — Google automatycznie testuje inne URL." },
  ];

  const pmaxProsCons = {
    pros: [
      "Pełne pokrycie kanałów Google w jednej kampanii — Search, Display, YouTube, Shopping, Gmail, Maps.",
      "Automatyczna optymalizacja budżetu między kanałami przez machine learning.",
      "Idealne dla e-commerce z feedem produktowym (zastępuje inteligentne Shopping).",
      "Wymagane mniej pracy manualnej — Google zarządza stawkami, targetowaniem i formatami.",
      "Dostęp do formatów YouTube i Discover których nie ma w Standard Search.",
    ],
    cons: [
      "Mała transparentność — ograniczone dane o tym gdzie wyświetlają się reklamy.",
      "Ograniczona kontrola nad słowami kluczowymi — brak manualnego wykluczania keywords (tylko listy wykluczające).",
      "Może kanibalizować ruch branded lub specyficzne kampanie Search jeśli źle skonfigurowane.",
      "Wymaga dobrze przygotowanych assets — bez wideo i obrazów jakość jest ograniczona.",
      "Trudniejsze diagnozowanie problemów ze względu na automatyzację.",
    ],
  };

  const faqItems = [
    {
      question: "Co to jest Performance Max (PMax)?",
      answer: "Performance Max (PMax) to typ kampanii Google Ads który automatycznie wyświetla reklamy we wszystkich kanałach Google: Search, Display, YouTube, Gmail, Maps i Discover — w jednej kampanii. PMax używa machine learning i Smart Bidding do optymalizacji wyświetleń w czasie rzeczywistym. Zamiast ręcznego wyboru kanałów, dostarczasz Google 'asset group' — nagłówki, opisy, obrazy, wideo — a algorytm dobiera najlepszą kombinację i kanał dla każdego użytkownika. PMax wymaga celu konwersji i działa najlepiej z historycznymi danymi konwersji. Dla e-commerce zastępuje inteligentne kampanie Shopping i Smart Display.",
    },
    {
      question: "Kiedy używać Performance Max, a kiedy Standard Search?",
      answer: "Performance Max vs Standard Search — kiedy wybrać: PMax wybierz gdy: prowadzisz e-commerce z feedem produktowym (PMax zastępuje Shopping), chcesz maksymalnego zasięgu we wszystkich kanałach Google, masz budżet pozwalający na efektywne działanie na wielu kanałach (min. 5-10x docelowy CPA/dzień), dysponujesz różnorodnymi materialami (zdjęcia, wideo, teksty). Standard Search wybierz gdy: chcesz pełnej kontroli nad słowami kluczowymi i wykluczeniami, targetujesz bardzo specyficzne intencje wyszukiwania (B2B, niszowe produkty), kampania branded wymaga ścisłej kontroli, testujesz nowe tematy lub produkty. Rekomendacja 2025: uruchamiaj PMax równolegle ze Standard Search, nie jako zastępstwo. PMax uzupełnia, nie zastępuje.",
    },
    {
      question: "Jak skonfigurować asset group w Performance Max?",
      answer: "Asset Group w Performance Max — co przygotować: Teksty: 3-5 nagłówków (krótkich do 30 znaków), 1-2 nagłówki długie (do 90 znaków), 2-5 opisów (do 90 znaków). Obrazy: min. 1 poziomy (1200x628px), 1 kwadratowy (1200x1200px), opcjonalnie pionowy (960x1200px). Wideo: min. 1 film YouTube (10+ sekund) — jeśli brak, Google generuje automatycznie (jakość niższa). Sygnały odbiorców: dodaj listy remarketingowe, podobne grupy odbiorców, Custom Intent (słowa kluczowe które wpisują Twoi klienci). URL: jeden główny landing page pasujący do asset group. Najlepsza praktyka: twórz oddzielne asset groups dla różnych produktów/usług lub segmentów klientów — każda powinna mieć spójny temat i dedykowany landing page.",
    },
    {
      question: "Czy Performance Max kanibalizuje kampanie Search?",
      answer: "Kanibalizacja PMax vs Search — co wiemy: Google przyznaje, że PMax ma pierwszeństwo nad kampaniami Search przy tych samych zapytaniach, CHYBA ŻE kampania Search ma dokładne dopasowanie słowa kluczowego (Exact Match) — wtedy Search wygrywa. Problem pojawia się gdy: PMax przechwytuje branded traffic (zapytania z nazwą Twojej marki), PMax wyświetla się na nieistotne zapytania ogólne i przepala budżet. Rozwiązania: dodaj brand keywords jako exact match w kampanii Search, używaj list wykluczających słowa kluczowe dla PMax (poprzez Google Ads Support lub skrypty), segmentuj budżety — Brand Search powinien być oddzielną kampanią. Monitor: Google Search Console i raporty search terms (ograniczone w PMax) pomagają identyfikować nakładanie się.",
    },
    {
      question: "Jakie są wymagania dla Performance Max e-commerce?",
      answer: "Performance Max dla e-commerce — wymagania i setup: Obowiązkowe: konto Google Merchant Center z aktywnym feedem produktowym, cel konwersji (zakup z wartością), min. 30-50 konwersji w ciągu ostatnich 30 dni dla optymalnego działania. Zalecane: feed produktowy z pełnymi danymi (tytuł, opis, kategoria, GTIN, cena, dostępność), remarketingowe listy odbiorców (website visitors, cart abandoners), Conversion Value Rules jeśli różne produkty mają różną marżę. Struktura: rozważ oddzielne asset groups dla: kategorii produktowych (np. 'Buty', 'Odzież'), nowych vs powracających klientów, sezonowych promocji. PMax dla e-commerce zazwyczaj przewyższa inteligentne Shopping i Standard Shopping pod kątem ROAS — Google ma dostęp do więcej sygnałów.",
    },
    {
      question: "Jak mierzyć wyniki Performance Max?",
      answer: "Metryki i raportowanie Performance Max: Dostępne raporty: performance po asset group (konwersje, ROAS, koszt), breakdown po kanale (Search, Display, YouTube — od 2023), Top Signals (które sygnały odbiorców działają), asset performance (które nagłówki/opisy/obrazy mają 'Low/Good/Best' ocenę). Niedostępne lub ograniczone: search terms report (tylko agregat, bez szczegółów), placementy Display i YouTube (częściowo przez Placement Report). Narzędzia zewnętrzne: Google Analytics 4 — śledzenie ścieżki konwersji z PMax vs innych kampanii, Data Studio / Looker Studio do automatycznych raportów. KPI do monitorowania: ROAS lub CPA (główny cel), koszt/konwersja per kanał (od kiedy raport dostępny), New Customer Acquisition (jeśli masz cel nowych klientów), udział w wyświetleniach Search (czy PMax nie przejął branded).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Performance Max — co to jest? Kampanie PMax Google Ads | fotz.pl"
        description="Performance Max co to jest — wyjaśniamy czym są kampanie PMax w Google Ads, kiedy używać, jak skonfigurować asset group i jak PMax wypada vs Standard Search."
        canonical="https://fotz.pl/blog/performance-max-co-to"
      />
      <ArticleSchema
        title="Performance Max — co to jest? Kampanie PMax Google Ads"
        description="Czym jest Performance Max (PMax) w Google Ads, kanały kampanii, asset groups, kiedy wybrać PMax vs Search, konfiguracja dla e-commerce i pomiar wyników."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/performance-max-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Google Ads</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Performance Max — co to jest i jak działa kampania PMax?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Performance Max to jedna kampania Google Ads we wszystkich kanałach: Search, YouTube,
                Display, Gmail i Maps. Jak skonfigurować PMax i kiedy wybrać go zamiast Search?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kanały Performance Max — gdzie wyświetlają się reklamy?</h2>
              <div className="space-y-3 mb-6">
                {pmaxChannels.map((c, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1">{c.channel}</p>
                    <p className="text-slate-600 text-xs mb-1">{c.desc}</p>
                    <p className="text-blue-600 text-xs italic">{c.note}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Asset Group — co przygotować do PMax?</h2>
              <div className="space-y-3 mb-6">
                {pmaxAssets.map((a, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="font-bold text-slate-900 text-sm">{a.asset}</p>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">{a.count}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Performance Max — zalety i wady</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-bold text-green-800 text-sm mb-3">Zalety PMax</p>
                  <div className="space-y-2">
                    {pmaxProsCons.pros.map((p, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-green-700 text-xs">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="font-bold text-red-800 text-sm mb-3">Wady PMax</p>
                  <div className="space-y-2">
                    {pmaxProsCons.cons.map((c, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-3 h-3 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 text-xs">{c}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz uruchomić kampanie Performance Max?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Zarządzamy Google Ads — konfigurujemy PMax z właściwymi asset groups i strategią dla e-commerce i lead gen.
                </p>
                <Link to="/performance-marketing/google-ads" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Google Ads — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Performance Max co to jest</h2>
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
          heading="Wdrożymy Performance Max i zoptymalizujemy Twoje Google Ads"
          subheading="PMax dla e-commerce i lead gen — asset groups, Smart Bidding i monitoring wyników we wszystkich kanałach Google."
        />
      </Layout>
    </>
  );
}
