import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap, TrendingUp, Users, DollarSign } from "lucide-react";
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

export default function BlogProductLedGrowthCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Product-Led Growth — co to jest? Strategia PLG" },
  ];

  const plgExamples = [
    { company: "Slack", model: "Freemium", desc: "Darmowy plan z limitem historii wiadomości. Wirusy wewnątrz firm — jeden użytkownik zaprasza cały zespół." },
    { company: "Figma", model: "Freemium", desc: "Darmowy plan dla indywidualnych designerów. Płatny gdy chcesz team/workspace. Wzrost przez edukację i community." },
    { company: "Zoom", model: "Freemium", desc: "Darmowe połączenia do 40 minut. Każde spotkanie promuje produkt wśród uczestników zewnętrznych." },
    { company: "Dropbox", model: "Freemium + referral", desc: "Darmowa przestrzeń + dodatkowy GB za zaproszenie znajomych. Klasyczny viral loop PLG." },
    { company: "Notion", model: "Freemium", desc: "Darmowy plan dla indywidualnych. Viralność przez publiczne strony i szablony udostępniane w internecie." },
    { company: "Calendly", model: "Freemium", desc: "Każdy link Calendly promuje produkt wśród osób umawiających spotkanie — naturalna pętla wirusowa." },
  ];

  const plgVsSalesLed = [
    { aspect: "Akwizycja", plg: "Produkt jako kanał — free trial, freemium, viral loops", sales: "Marketing + zespół sprzedaży, cold outreach" },
    { aspect: "CAC", plg: "Niski — produkt sam się sprzedaje (product virality)", sales: "Wysoki — koszt AE, SDR, marketing pipeline" },
    { aspect: "Czas do wartości", plg: "Natychmiastowy — rejestracja i użytkowanie w minuty", sales: "Tygodnie/miesiące — demo, negocjacje, wdrożenie" },
    { aspect: "Skalowanie", plg: "Wysokie — model skalowalny bez proporcjonalnego wzrostu kosztów sprzedaży", sales: "Ograniczone przez rozmiar zespołu sprzedaży" },
    { aspect: "Segmenty", plg: "SMB, prosumers, dev tools, bottom-up enterprise", sales: "Enterprise, high-ACV B2B, regulowane branże" },
  ];

  const faqItems = [
    {
      question: "Co to jest Product-Led Growth (PLG)?",
      answer: "Product-Led Growth (PLG) to strategia wzrostu, w której sam produkt jest głównym kanałem pozyskiwania, konwersji i retencji klientów — zamiast tradycyjnych działów sprzedaży i marketingu. W PLG użytkownicy mogą wypróbować produkt bez rozmowy ze sprzedawcą (free trial, freemium), a wzrost napędzany jest przez doświadczenia użytkowników, viralność i 'aha momenty' wewnątrz produktu. Termin spopularyzowany przez OpenView Ventures. Przykłady: Slack, Figma, Zoom, Dropbox, Notion, Calendly, Loom.",
    },
    {
      question: "Jaka jest różnica między PLG a Sales-Led Growth?",
      answer: "Sales-Led Growth (SLG) to tradycyjny model B2B SaaS: marketing generuje leady, SDR/BDR kwalifikuje, Account Executive prowadzi demo i zamyka deal — zanim klient dotknie produktu. PLG (Product-Led Growth): klient samodzielnie rejestruje się, korzysta z produktu, widzi wartość, a dopiero potem konwertuje na płatny plan (lub produkt automatycznie konwertuje). PLG ma niższy CAC, szybszy time-to-value, lepszą skalowalność. SLG wygrywa dla enterprise, wysokich kontraktów (ACV > 50k USD) i regulowanych branż. Trendem jest 'Product-Led Sales' (PLS) — połączenie obu podejść.",
    },
    {
      question: "Jak działa model freemium w PLG?",
      answer: "Freemium w PLG: oferujesz darmową wersję produktu z ograniczonymi funkcjami lub pojemnością. Użytkownicy korzystają z darmowego planu i napotykają 'paywall' gdy chcą więcej (więcej użytkowników, więcej storage, zaawansowane funkcje, integracje). Kluczowe wskaźniki freemium PLG: free-to-paid conversion rate (benchmark: 2-5% dla B2C, 5-20% dla B2B), time-to-convert (jak długo od rejestracji do płatności), PQL (Product Qualified Lead) — kto osiągnął 'aha moment' i jest gotowy do konwersji. Freemium nie jest dla każdego — działa gdy koszt obsługi darmowego użytkownika jest niski (SaaS, nie hardware).",
    },
    {
      question: "Co to jest viral loop w PLG?",
      answer: "Viral loop (pętla wirusowa) w PLG to mechanizm, w którym użytkownicy produktu naturalnie promują go wśród innych osób w toku normalnego korzystania. Typy viral loops: collaboration virality (Figma, Notion — zapraszasz innych do współpracy), content virality (Canva — produkt z watermarkiem, Calendly — link do bookingu), network virality (LinkedIn — wartość rośnie im więcej znajomych jest na platformie), word of mouth (produkt tak dobry, że ludzie go polecają). Miarą wirusowości jest współczynnik K: K = i × r, gdzie i = liczba zaproszeń na użytkownika, r = wskaźnik konwersji zaproszonych. K > 1 = wzrost wirusowy.",
    },
    {
      question: "Jakie metryki są kluczowe dla PLG?",
      answer: "Kluczowe metryki Product-Led Growth: Activation Rate — % nowych użytkowników którzy osiągnęli 'aha moment' (cel > 40%). Time-to-Value — czas od rejestracji do pierwszej wartości. PQL (Product Qualified Lead) — użytkownik który osiągnął próg aktywności wskazujący na gotowość zakupu. Free-to-Paid Conversion Rate — cel: 5-15% (B2B SaaS). Expansion Revenue — dodatkowe przychody od istniejących klientów (upsell, dodatkowe miejsca). Product virality / K-factor — ile nowych użytkowników przyciąga każdy aktywny użytkownik. DAU/MAU ratio — wskaźnik zaangażowania (Daily / Monthly Active Users).",
    },
    {
      question: "Czy PLG sprawdza się dla każdego produktu SaaS?",
      answer: "PLG NIE jest odpowiedni dla wszystkich produktów. PLG działa gdy: produkt ma natychmiastową wartość (szybki 'aha moment'), istnieje naturalny viral loop (użytkownicy zapraszają innych), koszt obsługi darmowego użytkownika jest niski, produkt jest prosty do wdrożenia bez pomocy technicznej. PLG słabo działa gdy: produkt wymaga skomplikowanej konfiguracji (ERP, cybersecurity enterprise), decyzja zakupu leży po stronie CTO/CFO a nie end-usera, bardzo wysoki ACV (powyżej 100k USD rocznie) — tam Sales-Led ma wyższy ROI, branże regulowane (bankowość, medycyna) — compliance blokuje free trial. Rozwiązanie: Product-Led Sales (PLS) — hybrid PLG + SLG.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Product-Led Growth — co to jest? Strategia PLG | fotz.pl"
        description="Product-Led Growth co to jest — wyjaśniamy strategię PLG, różnicę PLG vs Sales-Led, freemium, viral loop i kluczowe metryki produktu SaaS."
        canonical="https://fotz.pl/blog/product-led-growth-co-to"
      />
      <ArticleSchema
        title="Product-Led Growth — co to jest? Strategia PLG"
        description="Czym jest Product-Led Growth (PLG), różnica PLG vs Sales-Led Growth, model freemium, viral loop, PQL i kluczowe metryki strategii PLG."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/product-led-growth-co-to"
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
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Strategia SaaS</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Product-Led Growth — co to jest i jak budować wzrost przez produkt?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                PLG to strategia, w której produkt sam jest kanałem sprzedaży — przez freemium, trial i viralność.
                Slack, Figma, Zoom — jak to działa?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Przykłady Product-Led Growth firm</h2>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {plgExamples.map((c, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{c.company}</span>
                      <span className="text-xs text-blue-600 font-medium bg-blue-100 px-2 py-0.5 rounded">{c.model}</span>
                    </div>
                    <p className="text-slate-600 text-xs">{c.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">PLG vs Sales-Led Growth — porównanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700 text-xs">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Product-Led Growth</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Sales-Led Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plgVsSalesLed.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspect}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.plg}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.sales}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-xs">
                <p className="text-green-400 mb-2">// Wzór K-factor (viral coefficient)</p>
                <p className="text-slate-300">K = <span className="text-blue-400">i</span> × <span className="text-yellow-400">r</span></p>
                <div className="border-t border-slate-700 pt-2 mt-2 text-slate-400 space-y-1">
                  <p><span className="text-blue-400">i</span> = średnia liczba zaproszeń na aktywnego użytkownika</p>
                  <p><span className="text-yellow-400">r</span> = wskaźnik konwersji zaproszonych (jako ułamek)</p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p className="text-white">K &gt; 1 → wzrost wirusowy (każdy użytkownik przynosi &gt;1 nowego)</p>
                    <p className="text-white">K = 0.5 → 2 użytkowników przynosi 1 nowego — wolny wzrost organiczny</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz SaaS lub produkt z modelem PLG?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona marketingowa, landing page i SEO — pomagamy budować pipeline który przekłada się na trial i MRR.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Product-Led Growth co to jest</h2>
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
          heading="Zbuduj stronę dla produktu SaaS z modelem PLG"
          subheading="Landing page, strona produktu i onboarding flow — zaprojektowane pod trial i viralność."
        />
      </Layout>
    </>
  );
}
