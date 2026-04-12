import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Search, TrendingUp, Globe, FileText, Link2 } from "lucide-react";
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

export default function BlogSEOCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "SEO — co to jest i jak działa pozycjonowanie?" },
  ];

  const seoPillars = [
    { icon: FileText, title: "SEO on-page", desc: "Optymalizacja treści, nagłówków (H1-H6), meta tagów, struktury URL, szybkości strony i danych strukturalnych. To co dzieje się NA Twojej stronie." },
    { icon: Link2, title: "SEO off-page (link building)", desc: "Pozyskiwanie linków zewnętrznych (backlinków) z innych stron. Im więcej wartościowych stron linkuje do Ciebie, tym wyższy autorytet domeny." },
    { icon: Globe, title: "Technical SEO", desc: "Indeksowanie przez Google, mapa sitemap.xml, plik robots.txt, Core Web Vitals, HTTPS, mobile-first. Techniczne fundamenty widoczności." },
    { icon: Search, title: "Badanie słów kluczowych", desc: "Odkrywanie fraz których szukają Twoi klienci — ich wolumeny, trudność, intencja. Baza każdej strategii SEO." },
  ];

  const faqItems = [
    {
      question: "Co to jest SEO?",
      answer:
        "SEO (Search Engine Optimization — optymalizacja dla wyszukiwarek) to zestaw działań mających na celu poprawę widoczności strony internetowej w organicznych (nieplatnych) wynikach wyszukiwania Google i innych wyszukiwarek. Celem jest zajmowanie jak najwyższych pozycji na frazy kluczowe związane z działalnością firmy, co przekłada się na bezpłatny ruch i potencjalnych klientów.",
    },
    {
      question: "Jak działa SEO?",
      answer:
        "Google używa robotów (crawlerów) do skanowania stron internetowych i indeksowania ich treści. Algorytm analizuje setki czynników — treść, linki, szybkość strony, UX — i decyduje które strony są najbardziej wartościowe dla konkretnego zapytania. SEO polega na optymalizacji tych czynników, żeby Twoja strona była oceniana wyżej niż konkurencja.",
    },
    {
      question: "Ile czasu zajmuje SEO?",
      answer:
        "SEO to inwestycja długoterminowa. Pierwsze efekty widać po 1-3 miesiącach (nowe strony indeksowane, poprawa pozycji). Znaczący wzrost ruchu: 4-6 miesięcy. Dominacja w TOP 3: 6-18 miesięcy w zależności od branży i konkurencji. Nowe domeny potrzebują więcej czasu — starsze i bardziej autorytatywne domeny reagują szybciej na optymalizację.",
    },
    {
      question: "Ile kosztuje SEO?",
      answer:
        "Ceny pozycjonowania w Polsce: podstawowe SEO lokalne 500-1500 zł/mies., pozycjonowanie regionalne 1000-3000 zł/mies., SEO ogólnopolskie (konkurencyjne branże) 2000-10 000 zł/mies. Do tego audyt SEO jednorazowo 500-5000 zł i tworzenie treści. Tanie SEO (poniżej 300 zł/mies.) to zazwyczaj nieefektywne działania lub ryzykowne techniki.",
    },
    {
      question: "SEO czy Google Ads — co wybrać?",
      answer:
        "Różnica fundamentalna: Google Ads = płatne kliknięcia, efekt natychmiastowy, kończy się gdy kończysz płacić. SEO = bezpłatny ruch organiczny, efekt długoterminowy, trwa nawet po zakończeniu prac. Dla większości firm optymalna strategia to: Google Ads na start (szybkie wyniki i dane), SEO równolegle (długoterminowa inwestycja). Po 12-18 miesiącach SEO zazwyczaj daje lepszy ROI.",
    },
    {
      question: "Co to jest pozycjonowanie lokalne?",
      answer:
        "Pozycjonowanie lokalne (Local SEO) to optymalizacja widoczności firmy dla zapytań z określoną lokalizacją: 'fryzjer Kraków', 'mechanik Poznań', 'restauracja blisko mnie'. Obejmuje: optymalizację Google Business Profile (wizytówka), zbieranie opinii Google, local citations (spójne NAP w katalogach), SEO on-page z lokalnymi frazami. Kluczowe dla każdej firmy obsługującej klientów lokalnie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO co to jest — jak działa pozycjonowanie stron? Poradnik | fotz.pl"
        description="SEO co to jest — wyjaśniamy czym jest Search Engine Optimization, jak działa pozycjonowanie, ile kosztuje i kiedy przynosi efekty. Poradnik dla początkujących 2025."
        canonical="https://fotz.pl/blog/seo-co-to-jest"
      />
      <ArticleSchema
        title="SEO co to jest — kompletny poradnik o pozycjonowaniu stron"
        description="Czym jest SEO, jak działa pozycjonowanie organiczne, filar on-page, off-page i technical SEO. Ile kosztuje i ile trwa."
        datePublished="2025-01-20"
        dateModified="2025-03-30"
        url="https://fotz.pl/blog/seo-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
                <span className="flex items-center gap-1"><Search className="w-4 h-4" /> Podstawy SEO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                SEO — co to jest i jak działa pozycjonowanie stron?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                SEO (Search Engine Optimization) to zestaw działań sprawiających, że Twoja strona pojawia się wyżej
                w wynikach Google. Dowiedz się jak działa, ile kosztuje i czego oczekiwać.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Dlaczego SEO jest ważne?</h2>
              <p className="text-slate-700 mb-4">
                93% doświadczeń online zaczyna się od wyszukiwarki. TOP 3 wyniki Google zgarniają ponad 60% kliknięć.
                Płatne reklamy (Google Ads) dają natychmiastowe rezultaty, ale gdy przestaniesz płacić — ruch znika.
                SEO to inwestycja która pracuje 24/7 i przynosi coraz lepsze efekty z czasem.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { stat: "68%", desc: "wszystkich kliknięć trafia do organicznych wyników (nie płatnych)" },
                  { stat: "~0 zł", desc: "koszt kliknięcia z organicznych wyników po zbudowaniu pozycji" },
                  { stat: "4-6 mies.", desc: "czas do pierwszych zauważalnych efektów SEO" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{item.stat}</div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4 filary SEO</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {seoPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak Google ocenia strony?</h2>
              <p className="text-slate-700 mb-4">
                Google używa ponad 200 czynników rankingowych. Najważniejsze z nich to:
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) — doświadczenie, ekspertyza, autorytet i wiarygodność autora/strony",
                  "Linki przychodzące (backlinki) — liczba i jakość stron linkujących do Ciebie",
                  "Core Web Vitals — szybkość ładowania, interaktywność, stabilność wizualna strony",
                  "Mobile-first — Google ocenia mobilną wersję strony jako priorytetową",
                  "Trafność treści — jak dobrze strona odpowiada na intencję zapytania użytkownika",
                  "Świeżość treści — regularnie aktualizowane treści są preferowane w wielu branżach",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Etapy procesu SEO</h2>
              <div className="space-y-3 mb-6">
                {[
                  { step: "1", title: "Audyt SEO", desc: "Analiza obecnej sytuacji strony — błędy techniczne, jakość treści, profil linków, pozycje słów kluczowych." },
                  { step: "2", title: "Badanie słów kluczowych", desc: "Identyfikacja fraz z potencjałem — wolumen, trudność, intencja wyszukiwania, konkurencja." },
                  { step: "3", title: "Optymalizacja on-page", desc: "Poprawa treści, nagłówków, meta tagów, struktury URL, prędkości ładowania, linkowania wewnętrznego." },
                  { step: "4", title: "Tworzenie treści", desc: "Nowe strony i artykuły targetujące wybrane słowa kluczowe — tekst, grafiki, FAQ, dane strukturalne." },
                  { step: "5", title: "Link building", desc: "Zdobywanie wartościowych linków z autorytatywnych stron — artykuły gościnne, katalogi, PR cyfrowy." },
                  { step: "6", title: "Monitoring i raportowanie", desc: "Śledzenie pozycji, ruchu, konwersji — i ciągła optymalizacja na podstawie danych." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz pojawić się wyżej w Google?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Prowadzimy pozycjonowanie stron od 499 zł/mies. Audyt bezpłatny.
                </p>
                <Link to="/seo/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Pozycjonowanie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — SEO co to jest</h2>
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
          heading="Zacznij budować widoczność w Google"
          subheading="Bezpłatny audyt SEO i konkretna wycena pozycjonowania Twojej strony."
        />
      </Layout>
    </>
  );
}
