import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart2, Search, CheckCircle2, TrendingUp } from "lucide-react";
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

export default function BlogMarketResearchCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Market Research — co to jest? Badanie rynku w biznesie" },
  ];

  const researchMethods = [
    {
      method: "Wywiady pogłębione (IDI)",
      type: "Jakościowa",
      desc: "1:1 rozmowy z klientami lub potencjalnymi klientami (30-90 min). Pozwala odkryć głębsze motywacje, pain pointy i language customers use.",
      when: "Przed budowaniem produktu, przy rebrandingu, przy rozumieniu churn.",
    },
    {
      method: "Ankiety i kwestionariusze",
      type: "Ilościowa",
      desc: "Ustrukturyzowane pytania do dużej grupy respondentów. Daje statystyki i trendy. Narzędzia: Typeform, Google Forms, SurveyMonkey.",
      when: "Mierzenie NPS, walidacja hipotez produktowych, segmentacja bazy klientów.",
    },
    {
      method: "Focus Groups",
      type: "Jakościowa",
      desc: "Grupowe dyskusje (6-10 osób) z moderatorem. Dynamika grupowa może ujawniać przekonania które nie pojawiają się w wywiadach 1:1.",
      when: "Testowanie konceptów kreatywnych, nowych produktów, strategii komunikacji.",
    },
    {
      method: "Desk Research (wtórna)",
      type: "Wtórna",
      desc: "Analiza istniejących danych: raporty branżowe, dane GUS, badania Eurostat, analizy konkurencji, publikacje naukowe.",
      when: "Szybki przegląd rynku, analiza wielkości rynku (TAM/SAM/SOM), kontekst dla badań pierwotnych.",
    },
    {
      method: "Obserwacja i etnografia",
      type: "Jakościowa",
      desc: "Obserwacja użytkowników w naturalnym środowisku — jak faktycznie używają produktu lub jak zachowują się w danym kontekście.",
      when: "UX research, retail design, zrozumienie customer journey w środowisku naturalnym.",
    },
    {
      method: "Analiza danych behawioralnych",
      type: "Ilościowa",
      desc: "Google Analytics, heatmapy, session recordings (Hotjar, Microsoft Clarity), dane CRM. Rzeczywiste zachowania zamiast deklaracji.",
      when: "Optymalizacja strony, CRO, zrozumienie lejka konwersji, segmentacja behawioralna.",
    },
  ];

  const faqItems = [
    {
      question: "Co to jest market research?",
      answer: "Market research (badanie rynku) to systematyczny proces zbierania, analizowania i interpretowania danych o rynku, klientach, konkurencji i trendach branżowych. Celem jest redukcja ryzyka biznesowego i podejmowanie decyzji opartych na danych. Market research odpowiada na pytania: Kto jest moim klientem i czego potrzebuje? Jak duży jest rynek (TAM/SAM/SOM)? Kto jest moją konkurencją i jak pozycjonuje się na rynku? Jakie trendy kształtują branżę? Jakie są bariery dla klientów w adopcji produktu? Typy: primary research (badania pierwotne — zbierasz dane sam przez wywiady, ankiety) i secondary research (badania wtórne — analizujesz istniejące dane, raporty, statystyki).",
    },
    {
      question: "Jak przeprowadzić badanie rynku krok po kroku?",
      answer: "Proces market research: 1) Zdefiniuj cel i pytania badawcze — co konkretnie chcesz się dowiedzieć? Jakie decyzje podejmiesz na podstawie wyników? 2) Wybierz metody — jakościowe (wywiady, focus groups) dla 'dlaczego', ilościowe (ankiety, dane) dla 'ile' i 'co'. 3) Zdefiniuj grupę badawczą — kto jest Twoim respondentem? Istniejący klienci, utraceni klienci, potencjalni klienci? 4) Zbierz dane — rekrutuj respondentów przez LinkedIn, własną bazę emailową, panel badawczy, lub narzędzia jak Typeform/SurveyMonkey. 5) Analizuj — koduj wywiady jakościowe, analizuj statystycznie dane ilościowe. 6) Wyciągnij wnioski i rekomendacje — konkrety, nie opis. Co zmienić, co zbudować, jak się pozycjonować. 7) Wdróż i mierz efekty — badania bez wdrożenia to marnowanie budżetu.",
    },
    {
      question: "Ile kosztuje badanie rynku?",
      answer: "Koszty market research zależą od metody i skali: Desk research (wtórna) — od 0 PLN (publiczne dane GUS, Eurostat) do kilku tysięcy PLN za raporty branżowe (Euromonitor, Statista, IBISWorld). Ankiety online — narzędzia: Typeform (darmowe do 10 odpowiedzi, płatne od ~200 PLN/mies.), SurveyMonkey (~300 PLN/mies.). Rekrutacja respondentów przez panel: 20-100 PLN za respondenta. 200 odpowiedzi = 4-20k PLN. Wywiady IDI — agencja: 3-8k PLN za wywiad (z rekrutacją, transkrypcją, analizą). Samodzielnie: koszt czasu + 100-300 PLN incentive dla respondenta. Focus Groups — 8-20k PLN za grupę (rekrutacja, moderacja, wynajem sali, nagranie, raport). Pełne badanie rynku przez agencję — od 20k do 200k+ PLN zależnie od zakresu. Alternatywa dla startupów: 10-20 wywiadów IDI przeprowadzonych samodzielnie = bardzo cenna wiedza za koszt <5k PLN.",
    },
    {
      question: "Jaka jest różnica między badaniami jakościowymi a ilościowymi?",
      answer: "Badania jakościowe — odpowiadają na pytanie 'DLACZEGO': małe próby (10-30 osób), niestrukturyzowane lub półstrukturyzowane. Metody: wywiady IDI, focus groups, obserwacja. Wynik: wgląd, motywacje, language customers use, hipotezy do weryfikacji. Ograniczenia: niereprezentywne statystycznie, subiektywna interpretacja. Badania ilościowe — odpowiadają na pytanie 'ILE' i 'CO': duże próby (100-1000+ osób), strukturyzowane kwestionariusze. Metody: ankiety online, dane behawioralne, testy statystyczne. Wynik: mierzalne trendy, segmentacja, walidacja hipotez. Ograniczenia: nie wyjaśniają 'dlaczego', ograniczone przez jakość pytań. Sekwencja: zacznij od jakościowych (odkrywaj hipotezy) → przejdź do ilościowych (waliduj statystycznie). To klasyczny mixed-methods approach.",
    },
    {
      question: "Jakie narzędzia używać do market research?",
      answer: "Narzędzia market research według kategorii: Desk research: Google Trends (trendy wyszukiwań), SimilarWeb (ruch konkurencji), Statista (dane rynkowe), Euromonitor (raporty branżowe), GUS.pl (polskie statystyki), PARP.gov.pl (raporty MŚP). Ankiety online: Typeform (UX), Google Forms (darmowe), SurveyMonkey, Qualtrics (enterprise). Wywiady i UX research: Calendly (rekrutacja), Zoom/Loom (nagranie), Otter.ai (transkrypcja), Dovetail/Atlas.ti (analiza jakościowa). Competitive intelligence: Ahrefs/Semrush (SEO i content), SimilarWeb (traffic), LinkedIn (firmografia), G2/Trustpilot (recenzje). Social listening: Brand24, Mention (monitoring social media i opinii). Customer feedback: Hotjar (heatmapy + ankiety), Intercom (in-app surveys), Delighted (NPS surveys).",
    },
    {
      question: "Jak market research pomaga w strategii marketingowej?",
      answer: "Zastosowania market research w marketingu: Segmentacja i targeting: dane badań pozwalają zidentyfikować i opisać segmenty klientów, co poprawia efektywność targetowania kampanii. Messaging i pozycjonowanie: wywiady z klientami ujawniają 'language they use' — jak opisują problem i rozwiązanie. Ten język trafia bezpośrednio do kopii reklam i stron. Keyword research SEO: Google Trends i analiza wyszukiwań to forma market research — co i jak szukają Twoi klienci? Content strategy: tematy, formaty i pytania wynikające z badań informują plan contentowy. Competitive positioning: analiza konkurencji wskazuje białe plamy na rynku — czego nie robią inni, gdzie możesz się wyróżnić. Cennik i oferta: price sensitivity badania (Van Westendorp model) wskazują optymalny poziom cen. Efekt: firmy inwestujące w market research mają 2x wyższy success rate nowych produktów vs firmy działające 'na intuicji'.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Market Research — co to jest? Badanie rynku w biznesie | fotz.pl"
        description="Market research co to jest — wyjaśniamy czym jest badanie rynku, metody (IDI, ankiety, desk research), ile kosztuje, narzędzia i zastosowania w strategii marketingowej."
        canonical="https://fotz.pl/blog/market-research-co-to"

        keywords="Market Research co to jest, Market Research definicja, czym jest Market Research, Market Research przykłady, jak działa Market Research, Market Research znaczenie, Market Research przewodnik"
      />
      <ArticleSchema
        title="Market Research — co to jest? Badanie rynku w biznesie"
        description="Czym jest market research, metody (jakościowe vs ilościowe), jak przeprowadzić, ile kosztuje, narzędzia i zastosowania w strategii marketingowej."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/market-research-co-to"
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
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Strategia</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Market Research — co to jest i jak badać rynek?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Market research to systematyczne zbieranie wiedzy o rynku, klientach i konkurencji.
                Firmy które badają rynek mają 2x wyższy success rate nowych produktów.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Metody badania rynku</h2>
              <div className="space-y-4 mb-6">
                {researchMethods.map((m, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{m.method}</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">{m.type}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-1">{m.desc}</p>
                    <div className="flex items-start gap-1">
                      <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-green-700 text-xs"><span className="font-medium">Kiedy:</span> {m.when}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz poznać swoich klientów i rynek?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Audyt SEO i analiza konkurencji — badamy rynek online i identyfikujemy szanse dla Twojego biznesu.
                </p>
                <Link to="/uslugi/audyt-seo" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Analiza konkurencji — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Market Research co to jest</h2>
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
          heading="Przeprowadzimy analizę rynku i konkurencji online"
          subheading="Competitive intelligence, analiza SERP i keyword research — poznaj rynek cyfrowy i znajdź przewagę nad konkurencją."
        />
      </Layout>
    </>
  );
}
