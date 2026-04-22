import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, TrendingUp, BarChart2, Users } from "lucide-react";
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

export default function BlogRetargetingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Retargeting — co to jest i jak działa?" },
  ];

  const retargetingTypes = [
    { type: "Pixel-based retargeting", desc: "Meta Pixel lub Google Tag na stronie śledzi odwiedzających. Można targetować konkretne podstrony (np. koszyk, strona produktu)." },
    { type: "List-based retargeting", desc: "Wgrywasz listę emaili klientów do Meta Ads lub Google Ads. Platforma dopasowuje emaile do profili użytkowników." },
    { type: "Search retargeting (RLSA)", desc: "Google Ads: modyfikuj stawki lub pokaż inne reklamy dla użytkowników którzy już odwiedzili Twoją stronę." },
    { type: "Dynamic retargeting", desc: "Pokazuje użytkownikowi dokładnie te produkty które oglądał na stronie. Wysoka relevantność = wyższy CTR i ROAS." },
    { type: "Social retargeting", desc: "Meta (Facebook/Instagram) retargeting — jeden z najpopularniejszych. Skuteczny dla B2C i e-commerce." },
  ];

  const faqItems = [
    {
      question: "Co to jest retargeting?",
      answer:
        "Retargeting (remarketing) to strategia reklamowa polegająca na ponownym dotarciu do użytkowników którzy już odwiedzili Twoją stronę lub interakcjonowali z Twoją marką, ale nie dokonali konwersji. Działanie: użytkownik odwiedza sklep → opuszcza bez zakupu → widzi reklamy Twojego produktu na Facebooku, YouTube, Google Display Network. Retargeting jest jednym z najskuteczniejszych narzędzi digital marketingu — average CTR 10x wyższy niż standardowe reklamy display. Statystyki: tylko 2% użytkowników konwertuje przy pierwszej wizycie, retargeting pozwala odzyskać pozostałe 98%.",
    },
    {
      question: "Jak działa Meta Pixel?",
      answer:
        "Meta Pixel to fragment kodu JavaScript umieszczany na stronie internetowej, który śledzi działania odwiedzających i wysyła dane do Meta Ads Manager. Co śledzi Pixel: PageView (każda wizyta strony), ViewContent (oglądanie produktu), AddToCart (dodanie do koszyka), InitiateCheckout, Purchase (zakup). Dzięki Pixelowi możesz: tworzyć custom audiences z odwiedzających, uruchamiać retargeting, mierzyć konwersje z reklam Meta, tworzyć lookalike audiences. Pixel to fundament skutecznych kampanii Meta Ads. Instalacja: przez Meta Business Suite lub przez GTM (Google Tag Manager).",
    },
    {
      question: "Jak działa remarketing Google Ads?",
      answer:
        "Google Remarketing działa przez Google Ads tag lub Google Analytics 4. Typy list remarketingowych: Wszyscy odwiedzający, Użytkownicy konkretnych stron (np. /produkt/X), Kupujący (Conversion remarketing), Użytkownicy aplikacji. Formaty reklam remarketingowych Google: Display (banery na 3 mln stron partnerskich), YouTube (pre-roll dla osób które widziały Twoje filmy), Search RLSA (modyfikacja stawek w wyszukiwarce dla znanych użytkowników), Shopping (Dynamic remarketing dla e-commerce). Google Remarketing jest szczególnie wartościowy dla B2B z długim cyklem decyzyjnym.",
    },
    {
      question: "Jak tworzyć skuteczne kampanie retargetingowe?",
      answer:
        "Najlepsze praktyki retargetingu: 1) Segmentuj listy — różne reklamy dla oglądających produkt vs. porzucających koszyk vs. kupujących (upsell). 2) Ustal frequency cap — max 3-7 wyświetleń na użytkownika na tydzień. Zbyt częste = irytacja i banner blindness. 3) Personalizuj kreacje — dynamic retargeting pokazuje dokładny produkt. 4) Wyklucz kupujących z kampanii nabycia. 5) Okna czasu: 7 dni (aggressive), 7-30 dni (mid), 30-90 dni (late) — różne komunikaty. 6) Testuj oferty — zniżka, free shipping, social proof, ograniczona dostępność.",
    },
    {
      question: "Jaki jest dobry ROAS dla retargetingu?",
      answer:
        "Benchmarki retargetingu: ROAS retargeting vs. cold traffic: retargeting typowo 2-5x wyższy ROAS. Average CTR: retargeting display 0.7% vs. standard display 0.07% (10x wyższy). CPC retargeting: wyższy niż cold traffic (bo lista mniejsza, bardziej wartościowa). Conversion Rate: retargetowana publiczność konwertuje 2-5x lepiej. Benchmark ROAS e-commerce: retargeting powinien osiągać ROAS 400-800%+. Dobry ROAS zależy od marż — jeśli marża to 30%, breakeven ROAS = 3.3x. Cel: retargeting jako najtańszy kanał konwersji w mix mediowym.",
    },
    {
      question: "Czym retargeting różni się od remarketingu?",
      answer:
        "Retargeting vs. Remarketing: W praktyce branżowej oba terminy są używane wymiennie. Technicznie: Remarketing: termin Google — email marketing do istniejących klientów lub Google Ads do osób które interakcjonowały z marką. Retargeting: termin Meta/branżowy — reklamy display/social do użytkowników śledzonych przez pixel. Różnica platformowa: Google używa 'remarketing', Meta używa 'retargeting' i 'custom audiences'. W Polsce oba pojęcia są stosowane zamiennie i oznaczają ponowne dotarcie reklamą do osób które znają już Twoją markę.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Retargeting — co to jest i jak działa? | fotz.pl"
        description="Retargeting co to jest — wyjaśniamy czym jest retargeting, jak działa Meta Pixel i Google remarketing, jak tworzyć kampanie i jaki ROAS osiągnąć."
        canonical="https://fotz.pl/blog/retargeting-co-to"

        keywords="Retargeting co to jest, Retargeting definicja, czym jest Retargeting, Retargeting przykłady, jak działa Retargeting, Retargeting znaczenie, Retargeting przewodnik"
      />
      <ArticleSchema
        title="Retargeting — co to jest i jak działa?"
        description="Czym jest retargeting (remarketing), typy (pixel, list, RLSA, dynamic), Meta Pixel, Google remarketing, jak tworzyć skuteczne kampanie retargetingowe i benchmarki ROAS."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/retargeting-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Performance Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Retargeting — co to jest i jak odzyskać utraconych klientów?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Retargeting pozwala dotrzeć ponownie do 98% użytkowników którzy opuścili Twoją stronę bez zakupu.
                Meta Pixel, Google remarketing, typy kampanii i benchmarki ROAS.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy retargetingu</h2>
              <div className="space-y-3 mb-6">
                {retargetingTypes.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Target className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{t.type}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Segmentacja list retargetingowych</h2>
              <div className="space-y-2 mb-6">
                {[
                  { segment: "Wszyscy odwiedzający (7 dni)", msg: "Brand awareness, generic value prop" },
                  { segment: "Oglądający produkt (7 dni)", msg: "Dynamic retargeting — ten sam produkt" },
                  { segment: "Porzucający koszyk (1-7 dni)", msg: "Pilność + zniżka lub free shipping" },
                  { segment: "Porzucający koszyk (7-30 dni)", msg: "Social proof, opinie, gwarancja" },
                  { segment: "Kupujący (upsell)", msg: "Produkty komplementarne, wyższy plan" },
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-slate-800 text-sm font-medium">{s.segment}</p>
                    <span className="text-blue-600 text-xs font-medium ml-4 text-right">{s.msg}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz strony zoptymalizowane pod retargeting?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony produktowe i landing page z prawidłowo skonfigurowanym Meta Pixel i Google Tag.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Retargeting co to jest</h2>
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
