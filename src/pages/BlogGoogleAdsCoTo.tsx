import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Target, DollarSign, BarChart2, Zap, Settings } from "lucide-react";
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

export default function BlogGoogleAdsCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Google Ads — co to jest i jak działa?" },
  ];

  const campaignTypes = [
    { icon: Target, title: "Kampanie w sieci wyszukiwania", desc: "Reklamy tekstowe wyświetlane w wynikach Google gdy ktoś wpisuje konkretne słowa kluczowe. Najskuteczniejszy typ dla generowania leadów i sprzedaży." },
    { icon: BarChart2, title: "Kampanie displayowe (GDN)", desc: "Reklamy graficzne i banerowe na milionach stron www partnerskich Google. Świetne do budowania świadomości marki i remarketingu." },
    { icon: Zap, title: "Kampanie wideo (YouTube)", desc: "Reklamy przed, w trakcie lub po filmach na YouTube. Budują zaangażowanie i rozpoznawalność przy stosunkowo niskim koszcie." },
    { icon: Settings, title: "Google Shopping", desc: "Reklamy produktowe z zdjęciem, ceną i nazwą sklepu dla e-commerce. Wysokie współczynniki konwersji — klient widzi produkt zanim kliknie." },
    { icon: DollarSign, title: "Kampanie Performance Max", desc: "Kampanie automatyczne wykorzystujące AI Google do optymalizacji w wszystkich kanałach jednocześnie. Wymaga odpowiednich danych i budżetu." },
    { icon: CheckCircle2, title: "Kampanie lokalne", desc: "Promują fizyczne lokalizacje biznesu w Google Maps i wyszukiwarce. Idealne dla usług lokalnych — restauracji, salonów, gabinetów." },
  ];

  const faqItems = [
    {
      question: "Co to jest Google Ads i jak działa?",
      answer:
        "Google Ads (dawniej Google AdWords) to platforma reklamowa Google działająca w modelu PPC (pay-per-click) — płacisz tylko gdy ktoś kliknie w reklamę. Reklamy wyświetlają się w wynikach wyszukiwania Google, na stronach partnerskich (GDN), YouTube i Google Maps. System działa na zasadzie aukcji — im wyższa stawka i wyższy Quality Score (jakość reklamy), tym wyżej wyświetla się reklama.",
    },
    {
      question: "Ile kosztuje Google Ads?",
      answer:
        "Google Ads nie ma stałego cennika — sam ustalasz budżet dzienny i maksymalną stawkę za kliknięcie (CPC). Minimalny budżet: technicznie nie ma limitu, ale przy mniej niż 500-1000 zł/mies. trudno zebrać dane do optymalizacji. Średni CPC w Polsce: 0,50-5 zł (usługi lokalne), 2-15 zł (finanse, prawo, medycyna). Do tego dochodzi koszt obsługi agencji: 500-3000 zł/mies.",
    },
    {
      question: "Google Ads czy SEO — co wybrać?",
      answer:
        "To się wzajemnie uzupełnia. Google Ads: efekty natychmiastowe, płacisz za każdą wizytę, doskonały do testowania i kampanii promocyjnych. SEO: efekty po 3-6 miesiącach, ruch organiczny bezpłatny, długoterminowa inwestycja. Optymalna strategia: Google Ads na start (szybkie wyniki), jednocześnie budowanie SEO (długoterminowe). Dla większości firm obydwa kanały razem dają najlepsze ROI.",
    },
    {
      question: "Czy Google Ads działa dla małych firm?",
      answer:
        "Tak — Google Ads może być bardzo opłacalny dla małych firm, zwłaszcza lokalnych. Kluczem jest precyzyjne targetowanie: lokalizacja (konkretna gmina/dzielnica), godziny wyświetlania (kiedy firma jest otwarta), dopasowanie słów kluczowych (wyrażenie lub ścisłe zamiast przybliżonego). Mały budżet wymaga mniejszej, ale bardzo dobrze targetowanej kampanii.",
    },
    {
      question: "Jak mierzyć skuteczność Google Ads?",
      answer:
        "Kluczowe metryki: CTR (click-through rate — stosunek kliknięć do wyświetleń, pożądane 3-10%+), CPC (cost per click — koszt kliknięcia), konwersje (zakupy, formularze, telefony — mierz przez Google Analytics + Tag Manager), CPA (cost per acquisition — koszt pozyskania klienta), ROAS (return on ad spend — przychód / wydatek na reklamy).",
    },
    {
      question: "Jak zacząć z Google Ads?",
      answer:
        "Kroki: 1) Utwórz konto na ads.google.com. 2) Zdefiniuj cel kampanii (leady, sprzedaż, ruch). 3) Wybierz słowa kluczowe (Google Keyword Planner pomoże). 4) Napisz reklamy (min. 3 nagłówki, 2 opisy). 5) Ustaw budżet dzienny i lokalizację. 6) Skonfiguruj konwersje przez Google Analytics. 7) Uruchom i monitoruj codziennie przez pierwsze 2 tygodnie. Rekomendujemy zlecenie kampanii agencji — błędy na początku kosztują dużo pieniędzy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Google Ads — co to jest i jak działa? Kompletny poradnik | fotz.pl"
        description="Google Ads co to jest — wyjaśniamy jak działa, ile kosztuje i kiedy się opłaca. Rodzaje kampanii, modele rozliczeń, pierwsze kroki. Poradnik 2025."
        canonical="https://fotz.pl/blog/google-ads-co-to"
      />
      <ArticleSchema
        title="Google Ads — co to jest i jak działa? Kompletny poradnik"
        description="Czym są reklamy Google Ads, jak działają aukcje, ile kosztują kampanie i kiedy warto zlecić obsługę agencji."
        datePublished="2025-02-15"
        dateModified="2025-03-28"
        url="https://fotz.pl/blog/google-ads-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 9 min czytania</span>
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Google Ads</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Google Ads — co to jest i jak działa? Poradnik dla początkujących
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Google Ads to najpotężniejsza platforma reklamowa na świecie — miliony firm codziennie docierają przez nią
                do klientów w momencie, gdy aktywnie szukają produktu lub usługi. Dowiedz się jak to działa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Co to jest Google Ads?</h2>
              <p className="text-slate-700 mb-4">
                Google Ads (dawniej znane jako Google AdWords) to platforma reklamowa Google, która pozwala firmom
                wyświetlać płatne reklamy w wynikach wyszukiwania, na stronach partnerskich, YouTube i Google Maps.
              </p>
              <p className="text-slate-700 mb-4">
                Kluczowa zaleta: reklamy wyświetlają się <strong>w momencie intencji zakupowej</strong> — gdy ktoś
                wpisuje "hydraulik Kraków" lub "tanie loty Warszawa", widzi Twoją reklamę dokładnie wtedy, gdy jest
                gotowy do działania.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { stat: "~92%", desc: "udział Google w rynku wyszukiwarek w Polsce" },
                  { stat: "PPC", desc: "model płatności — płacisz tylko za kliknięcia" },
                  { stat: "500 zł", desc: "minimalny sensowny budżet miesięczny" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.stat}</div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak działają aukcje Google Ads?</h2>
              <p className="text-slate-700 mb-4">
                Każde wyświetlenie reklamy to aukcja przeprowadzana w ułamku sekundy. Google decyduje które reklamy
                wyświetlić i w jakiej kolejności, biorąc pod uwagę dwa czynniki:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: "Max CPC Bid", desc: "Maksymalna kwota jaką chcesz zapłacić za kliknięcie. Wyższa stawka = lepsza pozycja — ale to nie jedyny czynnik." },
                  { title: "Quality Score (1-10)", desc: "Ocena jakości Twojej reklamy: trafność słów kluczowych, jakość strony docelowej, przewidywany CTR. Wysoki QS = niższy CPC!" },
                  { title: "Ad Rank = CPC × QS", desc: "Pozycja reklamy to iloczyn stawki i Quality Score. Możesz wyprzedzić droższą konkurencję lepszą jakością reklamy." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Rodzaje kampanii Google Ads</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {campaignTypes.map((item, idx) => {
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
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Ile kosztuje reklama w Google?</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Branża</th>
                      <th className="text-left p-3 border border-slate-700">Średni CPC</th>
                      <th className="text-left p-3 border border-slate-700">Budżet/mies.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { industry: "Usługi lokalne (np. hydraulik)", cpc: "1–4 zł", budget: "500–2000 zł" },
                      { industry: "E-commerce (moda, elektronika)", cpc: "0,50–3 zł", budget: "2000–10 000 zł" },
                      { industry: "Finanse, ubezpieczenia", cpc: "5–20 zł", budget: "3000–20 000 zł" },
                      { industry: "Prawo, medycyna", cpc: "3–15 zł", budget: "2000–10 000 zł" },
                      { industry: "B2B / software", cpc: "5–30 zł", budget: "3000–30 000 zł" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 text-slate-800">{row.industry}</td>
                        <td className="p-3 border border-slate-200 text-blue-600 font-bold">{row.cpc}</td>
                        <td className="p-3 border border-slate-200 text-slate-600">{row.budget}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Chcesz uruchomić kampanię Google Ads?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Prowadzimy kampanie Google Ads od 499 zł/mies. — konfiguracja, optymalizacja, raporty.
                </p>
                <Link to="/performance-marketing/google-ads" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Google Ads — nasza oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Google Ads co to jest</h2>
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
          heading="Zacznij reklamować się w Google"
          subheading="Konfigurujemy kampanie które przynoszą klientów — nie przepalamy budżetu."
        />
      </Layout>
    </>
  );
}
