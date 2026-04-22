import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Globe, Link as LinkIcon, TrendingUp, Megaphone } from "lucide-react";
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

export default function BlogDigitalPRCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Digital PR — co to jest i jak zdobywać backlinki przez PR?" },
  ];

  const digitalPRTactics = [
    { tactic: "Data journalism / badania branżowe", desc: "Tworzysz oryginalne dane (ankieta, raport, analiza) i pitch do dziennikarzy. Unikalne dane są cytowane i linkowane przez media." },
    { tactic: "Expert commentary (ekspert komentarz)", desc: "Oferujesz swój komentarz jako ekspert do aktualnych tematów w branży. Dziennikarze szukają ekspertów przez HARO, ResponseSource, Twitter." },
    { tactic: "Newsjacking", desc: "Tworzysz treść reagującą na bieżące wydarzenia, łącząc je z Twoją ekspertyzą. Timing jest kluczowy — pierwsze 24-48h od wydarzenia." },
    { tactic: "Linkable assets", desc: "Tworzysz zasoby które naturalnie przyciągają linki: kalkulatory, interaktywne narzędzia, obszerne badania, infografiki, mapy danych." },
    { tactic: "Brand mentions → linki", desc: "Monitorujesz wzmianki o marce bez linku (np. przez Ahrefs Alerts, Brand24) i prosisz o dodanie linku — 20-30% konwersja." },
    { tactic: "Broken link building", desc: "Znajdujesz martwe linki (404) na stronach medialnych prowadzące do treści które już nie istnieją i proponujesz swój content jako zastępstwo." },
  ];

  const faqItems = [
    {
      question: "Co to jest Digital PR?",
      answer: "Digital PR to strategia budowania obecności marki w internecie przez zdobywanie publikacji, wzmianek i linków w mediach online, blogach, portalach branżowych i serwisach informacyjnych. W odróżnieniu od tradycyjnego PR, Digital PR koncentruje się na efektach mierzalnych: backlinki (linki przychodzące do Twojej strony), wzrost Domain Rating/Authority, ruch referencyjny z mediów, wzmianki w Google News. Digital PR łączy dyscypliny: PR (relacje z mediami, press releases), Content Marketing (linkable assets, badania) i SEO (link building). Jest to jedna z najskuteczniejszych metod budowania wysokiej jakości linków zewnętrznych.",
    },
    {
      question: "Jaka jest różnica między Digital PR a link buildingiem?",
      answer: "Link building tradycyjny: płatne linki, wymiany linków, katalogi, guest posting na niskiej jakości stronach — techniki coraz bardziej karane przez Google. Digital PR: linki jako naturalny efekt uboczny świetnych treści i relacji z mediami. Google aktywnie nagradza linki edytorskie (editorial links) zdobyte przez wartościowy content. Digital PR działa lepiej bo: linki z prawdziwych mediów mają wysoki Domain Rating (DR 70+), są kontekstualne (w treści artykułu, nie stopce), różnorodne anchor texty, trudne do skopiowania przez konkurencję. Digital PR jest droższy w realizacji ale daje trwałe efekty — w przeciwieństwie do płatnych linków które są usuwane.",
    },
    {
      question: "Jak zdobywać backlinki przez Digital PR?",
      answer: "Proces Digital PR dla linków: 1) Stwórz unikalny zasób (linkable asset) — raport z badań, kalkulator, interaktywna mapa, obszerna analiza danych. 2) Zidentyfikuj dziennikarzy i redaktorów którzy piszą o Twojej tematyce (BuzzSumo, LinkedIn, Twitter). 3) Stwórz spersonalizowany pitch email — krótki (3-5 zdań), z wartością dla czytelników ich mediów, nie dla Ciebie. 4) Oferuj ekskluzywność lub embargo — media chętniej publikują 'jako pierwsze'. 5) Follow up jeden raz po 3-5 dniach. 6) Monitoruj publikacje przez Google Alerts, Ahrefs Alerts. Statystyki: 1 dobra kampania Digital PR może zdobyć 20-100 linków z mediów o DR 40-90.",
    },
    {
      question: "Co to jest HARO i jak go używać do Digital PR?",
      answer: "HARO (Help a Reporter Out) to platforma łącząca dziennikarzy szukających ekspertów do artykułów z ekspertami oferującymi komentarze. Jak działa: 3x dziennie (rano, południe, wieczór) HARO wysyła email z listą zapytań dziennikarzy. Rejestrujesz się jako ekspert, filtrujesz zapytania ze swojej branży i wysyłasz odpowiedź. Jeśli dziennikarz użyje Twojego cytatu, zwykle linkuje do Twojej strony. Wskazówki: odpowiadaj szybko (dziennikarze mają deadline), bądź konkretny i unikalny, podaj realne dane/przykłady, link do swojego profilu/strony. Alternatywy: ResponseSource (UK), Qwoted, Terkel, SourceBottle, Twitter/X #journorequest, LinkedIn dla B2B PR.",
    },
    {
      question: "Jak mierzyć efekty Digital PR?",
      answer: "Metryki Digital PR: SEO metrics: liczba zdobytych backlinków, Domain Rating linków (DR 40+ to cel), wzrost Domain Rating własnej domeny, słowa kluczowe które awansowały po kampanii. Brand metrics: liczba wzmianek w mediach, zasięg (reach) publikacji, share of voice vs konkurencja. Traffic metrics: ruch referencyjny z mediów (Google Analytics → Acquisition → Referral), wzrost branded search. Business metrics: leady i konwersje z mediów, wpływ na pipeline sprzedaży. Narzędzia: Ahrefs (backlinki), Google Search Console (ruch), Brand24 / Mention (monitoring wzmianek), BuzzSumo (reach).",
    },
    {
      question: "Ile kosztuje Digital PR?",
      answer: "Koszty Digital PR zależą od modelu współpracy: In-house: koszt czasu specjalisty (PR Manager: 8000-15000 zł/mies. + 5000-20000 zł budżetu na narzędzia i produkcję treści). Agencja Digital PR: 5000-20000 zł/mies. za kampanię (cena zależy od zakresu, rynku i celów). Per-link pricing (rzadziej): 1000-5000 zł za secured link w medium o DR 40+. Dla porównania: kupno linku na giełdzie (czarna/szara strefa): 200-2000 zł za link, ale ryzyko kary od Google. ROI Digital PR: dobrze wykonana kampania przynosi 20-50 linków o wartości rynkowej 50000-150000 zł, co przekłada się na wzrost organic traffic warty wielokrotność kosztów kampanii.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Digital PR — co to jest i jak zdobywać backlinki przez PR?"
        description="Digital PR co to jest — wyjaśniamy czym jest Digital PR, jak zdobywać backlinki przez media, HARO, linkable assets i jak mierzyć efekty kampanii."
        canonical="https://fotz.pl/blog/digital-pr-co-to"

        keywords="Digital PR co to jest, Digital PR definicja, czym jest Digital PR, Digital PR przykłady, jak działa Digital PR, Digital PR znaczenie, Digital PR przewodnik"
      />
      <ArticleSchema
        title="Digital PR — co to jest i jak zdobywać backlinki przez PR?"
        description="Czym jest Digital PR, różnica vs link building, taktyki (data journalism, HARO, linkable assets), jak zdobywać backlinki z mediów i mierzyć ROI."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/digital-pr-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Megaphone className="w-4 h-4" /> SEO i PR</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Digital PR — co to jest i jak zdobywać backlinki przez relacje z mediami?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Digital PR łączy public relations z SEO — zdobywasz linki z mediów przez wartościowy content
                i relacje z dziennikarzami. Jedna kampania to 20-100 linków DR 60+.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Taktyki Digital PR do zdobywania backlinków</h2>
              <div className="space-y-3 mb-6">
                {digitalPRTactics.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <LinkIcon className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{t.tactic}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Globe className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zdobywać linki z mediów?</p>
                <p className="text-blue-700 text-sm mb-3">
                  SEO i content marketing — budujemy widoczność przez wartościowe treści i link building.
                </p>
                <Link to="/seo/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Pozycjonowanie i link building — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Digital PR co to jest</h2>
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
        />
      </Layout>
    </>
  );
}
