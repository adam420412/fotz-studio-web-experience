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

export default function BlogQualityScoreCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Quality Score — co to jest? Google Ads Quality Score" },
  ];

  const qsComponents = [
    {
      component: "Expected CTR (Oczekiwany CTR)",
      weight: "~33%",
      desc: "Google szacuje prawdopodobieństwo kliknięcia Twojej reklamy dla danego słowa kluczowego na podstawie historycznych danych. Zależy od: dopasowania reklamy do słowa, kreacji, rozszerzeń reklam.",
      improve: "Testuj różne nagłówki i opisy reklam. Używaj słowa kluczowego w nagłówku reklamy. Testuj różne formaty CTA.",
    },
    {
      component: "Ad Relevance (Trafność reklamy)",
      weight: "~33%",
      desc: "Jak dobrze treść reklamy odpowiada intencji wyszukiwania i słowu kluczowemu. Ocena: Below Average, Average, Above Average.",
      improve: "Umieść słowo kluczowe w nagłówku H1 reklamy. Twórz oddzielne grupy reklam dla podobnych słów kluczowych (SKAG lub tight adgroups). Używaj Dynamic Keyword Insertion.",
    },
    {
      component: "Landing Page Experience",
      weight: "~33%",
      desc: "Jakość strony docelowej po kliknięciu: trafność do słowa kluczowego, szybkość ładowania, UX, informacje które obiecała reklama.",
      improve: "Landing page musi zawierać słowo kluczowe i obietnicę z reklamy. Popraw szybkość strony. Dodaj jasne CTA. Usuń rozpraszające elementy.",
    },
  ];

  const qsImpact = [
    { qs: "10", modifier: "-50%", example: "Płacisz 0.50 zł zamiast 1.00 zł" },
    { qs: "9", modifier: "-44%", example: "Płacisz 0.56 zł zamiast 1.00 zł" },
    { qs: "8", modifier: "-37%", example: "Płacisz 0.63 zł zamiast 1.00 zł" },
    { qs: "7", modifier: "-14%", example: "Płacisz 0.86 zł zamiast 1.00 zł" },
    { qs: "6", modifier: "0% (baseline)", example: "Płacisz tyle ile ustawiłeś" },
    { qs: "5", modifier: "+22%", example: "Płacisz 1.22 zł zamiast 1.00 zł" },
    { qs: "4", modifier: "+50%", example: "Płacisz 1.50 zł zamiast 1.00 zł" },
    { qs: "3", modifier: "+67%", example: "Płacisz 1.67 zł zamiast 1.00 zł" },
  ];

  const faqItems = [
    {
      question: "Co to jest Quality Score w Google Ads?",
      answer: "Quality Score (QS, Wynik Jakości) to metryka Google Ads w skali 1-10 oceniająca jakość i trafność słów kluczowych, reklam i landing pages w Twoich kampaniach. Quality Score wpływa bezpośrednio na Ad Rank (pozycję reklamy) i CPC (koszt kliknięcia) — wyższy QS = niższy koszt i lepsza pozycja. Składa się z trzech komponentów: Expected CTR (oczekiwany CTR), Ad Relevance (trafność reklamy), Landing Page Experience (doświadczenie strony docelowej). QS 7-10 = powyżej średniej, QS 5-6 = przeciętny, QS 1-4 = poniżej średniej — drogie i słabo wyświetlane.",
    },
    {
      question: "Jak Quality Score wpływa na koszt reklamy?",
      answer: "Quality Score bezpośrednio wpływa na Ad Rank i CPC przez mechanizm aukcji Google Ads: Ad Rank = Max CPC × Quality Score × Expected Impact of Extensions. Im wyższy QS, tym mniejszy Max CPC potrzebujesz by osiągnąć daną pozycję. Wpływ na koszt kliknięcia: QS 10 = koszt niższy o 50% vs QS 6 (baseline). QS 8 = koszt niższy o ~37%. QS 4 = koszt wyższy o 50%. QS 1 = koszt wyższy o 400%. Przykład: przy Max CPC 1.00 zł — QS 10 płacisz ~0.50 zł, QS 4 płacisz ~1.50 zł. Poprawa QS z 5 do 7 może obniżyć CPL (koszt leada) o 30-40% bez zmiany budżetu.",
    },
    {
      question: "Jak poprawić Quality Score w Google Ads?",
      answer: "Strategie poprawy Quality Score: 1) Popraw Expected CTR: testuj różne nagłówki (RSA: 15 nagłówków, 4 opisy), używaj słowa kluczowego w nagłówku 1, dodaj rozszerzenia (sitelinks, callouts, structured snippets), testuj stawki emocjonalne i racjonalne. 2) Popraw Ad Relevance: twórz tight ad groups (SKAG lub 3-5 słów kluczowych na grupę), treść reklamy musi odpowiadać intencji słowa kluczowego, używaj Dynamic Keyword Insertion [keyword:Domyślny tekst]. 3) Popraw Landing Page Experience: landing page zawiera słowo kluczowe, obietnica z reklamy jest spełniona na stronie, szybkość ładowania poniżej 3s, wyraźne CTA, mobile-friendly.",
    },
    {
      question: "Jaka jest różnica między Quality Score a Ad Rank?",
      answer: "Quality Score (1-10) — diagnostyczna metryka oceniająca jakość konto/słowa/reklamy/landing page. Widoczna w Google Ads UI. Wskaźnik historyczny — nie zmienia się w czasie rzeczywistym. Ad Rank — dynamiczna wartość obliczana w czasie rzeczywistym w każdej aukcji. Decyduje: czy reklama się wyświetli, na której pozycji. Wzór: Ad Rank = Max CPC Bid × Quality Score × Expected Impact of Extensions + kontekst aukcji. Ad Rank zmienia się dla każdego użytkownika w każdej aukcji (zależy od urządzenia, lokalizacji, godziny, historii wyszukiwań). Quality Score jest jednym z czynników Ad Rank — wyższy QS pozwala wygrywać aukcje z niższą stawką CPC.",
    },
    {
      question: "Jak sprawdzić Quality Score słów kluczowych?",
      answer: "Jak sprawdzić QS w Google Ads: 1) Google Ads → Kampanie → Grupy reklam → Słowa kluczowe. 2) Kliknij ikonę 'kolumny' i dodaj: Quality Score, Expected CTR, Ad Relevance, Landing Page Experience. 3) Sprawdź które słowa mają QS poniżej 7 i które komponenty są 'Below Average'. 4) Segmentuj po urządzeniu — mobile i desktop mogą mieć różne QS. Alternatywnie: użyj skryptów Google Ads do pobierania QS do arkusza kalkulacyjnego (łatwiejsze śledzenie zmian w czasie). Ważne: QS jest dostępny tylko dla aktywnych słów kluczowych z wystarczającą liczbą wyświetleń. Nowe słowa kluczowe mają '--' zamiast liczby.",
    },
    {
      question: "Czy niski Quality Score zawsze jest problemem?",
      answer: "Niski Quality Score (1-4) jest problemem w większości przypadków — droższe kliknięcia i gorsze pozycje. Ale są wyjątki: Branded keywords — QS zazwyczaj 7-10, bo CTR branded jest bardzo wysoki. Non-branded competitor keywords — QS często 3-5 bo Twoja reklama nie jest idealnie dopasowana do ich wyszukań. Słowa kluczowe z małym ruchem — QS może być '--' lub niewystarczająco miarodajny. Strategia: priorytetyzuj poprawę QS dla słów kluczowych z dużym ruchem i wysokim CPC. Słowa kluczowe z QS 1-3 rozważ usunięcie lub przeprojektowanie kampanii wokół nich. Pamiętaj: Google mierzy QS na poziomie słowo kluczowe + reklama + landing page — zmiana jednego z trzech elementów może znacząco poprawić QS.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Quality Score — co to jest? Google Ads Quality Score | fotz.pl"
        description="Quality Score co to jest — wyjaśniamy czym jest Wynik Jakości w Google Ads, jak wpływa na CPC, jak sprawdzić QS i jak go poprawić dla niższych kosztów reklam."
        canonical="https://fotz.pl/blog/quality-score-co-to"

        keywords="Quality Score co to jest, Quality Score definicja, czym jest Quality Score, Quality Score przykłady, jak działa Quality Score, Quality Score znaczenie, Quality Score przewodnik"
      />
      <ArticleSchema
        title="Quality Score — co to jest? Google Ads Quality Score"
        description="Czym jest Quality Score w Google Ads, składniki (CTR, trafność, landing page), wpływ na CPC i Ad Rank, jak sprawdzić i poprawić Wynik Jakości."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/quality-score-co-to"
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
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Google Ads</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Quality Score — co to jest i jak obniża koszty Google Ads?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Quality Score (Wynik Jakości) decyduje ile płacisz za kliknięcie w Google Ads.
                QS 10 = koszt o 50% niższy niż QS 6. Jak poprawić wynik jakości?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Składniki Quality Score i jak je poprawić</h2>
              <div className="space-y-4 mb-6">
                {qsComponents.map((c, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-sm">{c.component}</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">~{c.weight}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-2">{c.desc}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-green-700 text-xs">{c.improve}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Wpływ Quality Score na koszt kliknięcia</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-center p-3 border border-slate-700 text-xs">QS</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Modyfikator CPC</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Przykład (Max CPC 1.00 zł)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qsImpact.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className={`p-3 border border-slate-200 font-bold text-center text-sm ${parseInt(row.qs) >= 8 ? "text-green-600" : parseInt(row.qs) <= 4 ? "text-red-600" : "text-yellow-600"}`}>{row.qs}</td>
                        <td className={`p-3 border border-slate-200 text-xs font-medium ${parseInt(row.qs) >= 8 ? "text-green-700" : parseInt(row.qs) <= 4 ? "text-red-700" : "text-slate-600"}`}>{row.modifier}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Masz wysokie koszty Google Ads?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Optymalizacja Google Ads — poprawiamy Quality Score i obniżamy CPL przy tym samym budżecie.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Quality Score co to jest</h2>
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
          heading="Obniżymy koszt Google Ads przez optymalizację Quality Score"
          subheading="Kampanie Google Ads z wysokim QS — mniej płacisz za klik i osiągasz lepsze pozycje."
        />
      </Layout>
    </>
  );
}
