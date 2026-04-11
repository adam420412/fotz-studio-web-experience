import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Globe, TrendingUp, Target, Zap } from "lucide-react";
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

export default function BlogDigitalMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Digital marketing — co to jest i jakie kanały obejmuje?" },
  ];

  const digitalChannels = [
    { icon: TrendingUp, name: "SEO", desc: "Pozycjonowanie w Google — organiczny ruch bez kosztu za kliknięcie. Długoterminowa inwestycja o najwyższym ROI." },
    { icon: Target, name: "SEM / Google Ads", desc: "Płatne reklamy w wyszukiwarce i sieci display. Natychmiastowy ruch — płacisz za kliknięcia lub wyświetlenia." },
    { icon: Globe, name: "Social media marketing", desc: "Obecność i reklamy na Facebook, Instagram, LinkedIn, TikTok. Budowanie społeczności i zasięgu." },
    { icon: Zap, name: "Email marketing", desc: "Wysyłanie newsletterów i automatyzacji do listy subskrybentów. Najwyższy ROI ze wszystkich kanałów (36-42x)." },
    { icon: CheckCircle2, name: "Content marketing", desc: "Tworzenie wartościowych treści (blogi, wideo, podcasty) przyciągających klientów organicznie." },
    { icon: ArrowRight, name: "Affiliate marketing", desc: "Partnerzy promują Twoje produkty w zamian za prowizję od sprzedaży. Skalowalne bez kosztów stałych." },
  ];

  const faqItems = [
    {
      question: "Co to jest digital marketing?",
      answer:
        "Digital marketing (marketing cyfrowy) to wszelkie działania marketingowe prowadzone przez kanały cyfrowe i internet. Obejmuje: SEO, Google Ads, social media (Facebook, Instagram, LinkedIn, TikTok), email marketing, content marketing, affiliate marketing i marketing automation. Digital marketing zastąpił i uzupełnił tradycyjne formy reklamy (TV, prasa, billboardy) oferując precyzyjny targeting i mierzalne wyniki.",
    },
    {
      question: "Czym digital marketing różni się od marketingu tradycyjnego?",
      answer:
        "Kluczowe różnice: Mierzalność — każde działanie cyfrowe jest mierzalne (CTR, konwersje, ROAS). Precyzja targetowania — dotrzesz do osób w Poznaniu, w wieku 25-40 lat, zainteresowanych ogrodnictwem. Interaktywność — dwukierunkowa komunikacja z klientami. Skalowanie — możesz zwiększyć zasięg bez proporcjonalnego wzrostu kosztów. Szybkość — kampania startuje w godziny, nie miesiące. Koszty — możesz zacząć od małych budżetów.",
    },
    {
      question: "Od czego zacząć digital marketing dla firmy?",
      answer:
        "Podstawy digital marketingu dla firmy: 1) Strona internetowa — podstawa wszystkich działań. 2) Google Business Profile — lokalna widoczność. 3) Google Analytics 4 — mierzenie ruchu. 4) SEO — optymalizacja pod wyszukiwarki. 5) Jeden kanał social media — tam gdzie jest Twoja grupa docelowa. 6) Newsletter/email marketing — budowanie listy klientów. Nie staraj się być wszędzie naraz — zrób kilka rzeczy dobrze.",
    },
    {
      question: "Ile kosztuje digital marketing?",
      answer:
        "Koszty digital marketingu są bardzo elastyczne: SEO (agencja): 1000-5000 zł/mies., Google Ads (budżet reklamowy): od 500 zł/mies., social media marketing (agencja): 1500-4000 zł/mies., email marketing (narzędzie): 0-300 zł/mies. Możesz zacząć samodzielnie przy minimalnych kosztach lub zlecić agencji kompleksowe działania. Kluczowe: mierz ROI każdego kanału i inwestuj w te które przynoszą wyniki.",
    },
    {
      question: "Który kanał digital marketingu jest najskuteczniejszy?",
      answer:
        "Nie ma jednej odpowiedzi — zależy od branży, grupy docelowej i celów. Generalnie: SEO = najwyższy długoterminowy ROI, email marketing = najwyższy ROI ogólnie (36-42x), Google Ads = najszybsze efekty, social media = budowanie marki i społeczności, content marketing = autorytet i organiczny ruch. Dla e-commerce: Google Shopping + SEO + remarketing. Dla B2B: SEO + LinkedIn + email marketing. Dla usług lokalnych: Local SEO + Google Ads.",
    },
    {
      question: "Jak mierzyć skuteczność digital marketingu?",
      answer:
        "Kluczowe narzędzia i metryki: Google Analytics 4 (ruch, konwersje, ścieżki użytkownika), Google Search Console (SEO, CTR, pozycje), Google Ads Manager (CPC, ROAS, konwersje), Meta Business Suite (Facebook/Instagram: zasięg, CTR, CPA). KPI do śledzenia: koszt pozyskania klienta (CAC), wartość życiowa klienta (LTV), współczynnik konwersji, ROAS (dla e-commerce), organiczny ruch z Google.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Digital marketing — co to jest i jakie kanały obejmuje? | fotz.pl"
        description="Digital marketing co to jest — wyjaśniamy czym jest marketing cyfrowy, jakie kanały obejmuje (SEO, Google Ads, social media) i od czego zacząć w firmie."
        canonical="https://fotz.pl/blog/digital-marketing-co-to"
      />
      <ArticleSchema
        title="Digital marketing — co to jest i jakie kanały obejmuje?"
        description="Czym jest digital marketing, kanały (SEO, SEM, social media, email), ile kosztuje i jak mierzyć skuteczność działań marketingu cyfrowego."
        datePublished="2025-04-09"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/digital-marketing-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> Marketing online</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Digital marketing — co to jest i jak działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Digital marketing to wszystkie działania marketingowe prowadzone przez internet.
                SEO, Google Ads, social media, email — jak zbudować skuteczną strategię online?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Główne kanały digital marketingu</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {digitalChannels.map((channel, idx) => {
                  const Icon = channel.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{channel.name}</h3>
                      <p className="text-slate-600 text-xs">{channel.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ROI kanałów digital marketingu</h2>
              <div className="space-y-2 mb-6">
                {[
                  { channel: "Email marketing", roi: "36-42x", note: "Najwyższy ROI ze wszystkich kanałów" },
                  { channel: "SEO", roi: "10-30x", note: "Długoterminowe efekty, rośnie z czasem" },
                  { channel: "Google Ads (search)", roi: "3-8x", note: "Zależy od branży i optymalizacji" },
                  { channel: "Content marketing", roi: "5-20x", note: "Rośnie z czasem jak SEO" },
                  { channel: "Social media ads", roi: "2-6x", note: "Zależy od targetowania i kreacji" },
                  { channel: "Display advertising", roi: "1-3x", note: "Głównie dla brand awareness" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{item.channel}</p>
                      <p className="text-slate-500 text-xs">{item.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">ROI: {item.roi}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Szukasz agencji digital marketingu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Realizujemy kompleksowy marketing online — SEO, Google Ads, social media i email.
                </p>
                <Link to="/uslugi/marketing-internetowy" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Marketing internetowy — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Digital marketing co to jest</h2>
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
          heading="Zbudujemy strategię digital marketingu dla Twojej firmy"
          subheading="SEO, Google Ads, social media — kompleksowe działania z mierzalnymi wynikami."
        />
      </Layout>
    </>
  );
}
