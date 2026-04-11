import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, TrendingUp, BarChart2, CheckCircle2 } from "lucide-react";
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

export default function BlogSaaSPricingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "SaaS Pricing — modele cenowe i jak wycenić produkt?" },
  ];

  const pricingModels = [
    { model: "Per Seat (per user)", desc: "Opłata za każdego użytkownika. Prosta, przewidywalna. Przykład: Slack, Zoom, Microsoft 365. Ryzyko: klienci ograniczają liczbę kont." },
    { model: "Usage-based (pay-as-you-go)", desc: "Płacisz za zużycie (API calls, GB danych, transakcje). Przykład: AWS, Twilio, Stripe. Bariera wejścia niska, ale trudniejszy forecasting." },
    { model: "Tiered pricing", desc: "Plany Starter/Pro/Enterprise z różnymi funkcjami. Najpopularniejszy model SaaS. Przykład: HubSpot, Notion, Canva." },
    { model: "Flat-rate", desc: "Jedna cena, wszystkie funkcje. Prosta, ale nie skaluje się z wartością dla klienta. Przykład: Basecamp (dawniej)." },
    { model: "Freemium", desc: "Darmowy plan + płatne rozszerzenia. Szybki wzrost bazy użytkowników, ale konwersja na płatny plan zwykle 1-5%." },
    { model: "Value-based pricing", desc: "Cena oparta na wartości którą klient uzyskuje, nie na kosztach. Najwyższe marże, wymaga głębokiego rozumienia klienta." },
  ];

  const faqItems = [
    {
      question: "Jak wycenić produkt SaaS?",
      answer:
        "Metody wyceny produktu SaaS: 1) Cost-plus: oblicz koszty (hosting, development, support, CAC) + marża. Prosta, ale nie optymalna. 2) Competitor-based: sprawdź ceny konkurencji i pozycjonuj (taniej, drożej, lub porównywalnie). 3) Value-based: ile klient zaoszczędzi lub zarobi dzięki Twojemu produktowi? Wycena na 10-20% tej wartości to typowy benchmark. 4) Willingness-to-pay research: ankiety wśród klientów (Van Westendorp Price Sensitivity Meter). Goldowe zasady: nie zaczynaj za tanio — podnoszenie cen jest trudniejsze niż obniżanie. Testuj ceny regularnie — A/B testing landing page z różnymi cenami.",
    },
    {
      question: "Jaki model cenowy wybrać dla SaaS?",
      answer:
        "Dobór modelu cenowego SaaS: Per seat: dobry gdy wartość skaluje się z liczbą użytkowników (narzędzia do współpracy, CRM). Usage-based: dobry gdy wartość skaluje się ze zużyciem (API, infrastruktura, komunikacja). Tiered: dobry dla SaaS z wyraźnymi segmentami klientów (SMB/Mid/Enterprise). Freemium: dobry gdy masz viralność i niskie koszty serwowania darmowych użytkowników (Notion, Slack). Hybryd: wiele firm SaaS łączy modele — np. per seat + usage-based dla API (Twilio, HubSpot). Unikaj flat-rate jeśli wartość dla różnych klientów znacznie się różni.",
    },
    {
      question: "Ile kosztuje typowe oprogramowanie SaaS?",
      answer:
        "Benchmarki cenowe SaaS wg segmentu: SMB SaaS: 20-100 USD/użytkownik/mies. lub 50-500 USD/mies. flat. Mid-market SaaS: 100-500 USD/użytkownik/mies. lub 500-5000 USD/mies. Enterprise SaaS: 50 000-500 000+ USD/rok — negocjowane, custom pricing. Popularne punkty cenowe: 9, 19, 29, 49, 99, 299 USD/mies. (psychologiczne zaokrąglenia). Zasada: ACV (Annual Contract Value) poniżej 5000 USD = samoobsługowy (self-serve), ACV 5000-100 000 USD = inside sales, ACV powyżej 100 000 USD = enterprise sales.",
    },
    {
      question: "Czym jest Annual Contract Value (ACV)?",
      answer:
        "ACV (Annual Contract Value) to roczna wartość kontraktu z jednym klientem — znormalizowana do roku, nawet jeśli kontrakt jest na inne okresy. Wzór: ACV = Wartość kontraktu / Liczba lat kontraktu. Przykład: 3-letni kontrakt na 150 000 USD → ACV = 50 000 USD/rok. ACV vs ARR: ARR to suma ACV wszystkich klientów (całkowity roczny przychód). ACV to metryka per klient (wielkość deala). ACV determinuje model sprzedaży: niski ACV = product-led growth, wysoki ACV = enterprise sales z dłuższym cyklem.",
    },
    {
      question: "Jak przeprowadzić A/B test cen?",
      answer:
        "A/B testing cen w SaaS — jak to robić: 1) Testuj różne warianty na landing page — np. 49 USD vs 59 USD vs 99 USD/mies. 2) Mierz konwersję na trial/zakup (nie tylko CTR). 3) Potrzebujesz statystycznej istotności — minimum kilkaset konwersji per wariant. 4) Testuj też anchoring — pokaż 'Most Popular' przy planie który chcesz sprzedawać. 5) Dekoy pricing — trzy plany gdzie środkowy jest celowo najlepszą opcją (Economist experiment). Narzędzia: Google Optimize, VWO, Optimizely. Uwaga: etyczne testowanie — nie pokazuj różnych cen tym samym zalogowanym użytkownikom.",
    },
    {
      question: "Jak często podnosić ceny SaaS?",
      answer:
        "Strategia podnoszenia cen SaaS: Nowe ceny wyłącznie dla nowych klientów — istniejący klienci zostają na starym planie (grandfather pricing). To minimalizuje churn. Komunikacja z wyprzedzeniem 30-60 dni. Uzasadnienie — nowe funkcje, inflacja, zwiększona wartość. Benchmarki: startupy SaaS podnoszą ceny średnio co 12-18 miesięcy w fazie wzrostu. Typowa podwyżka: 10-30%. Bain & Company: 1% wzrost ceny = 11% wzrost zysku operacyjnego (vs. 1% wzrost wolumenu = 3.3% wzrost zysku). Ceny to Twoja najważniejsza dźwignia wzrostu — nie odkładaj rozmowy o cenach na later.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SaaS Pricing — modele cenowe i jak wycenić produkt? | fotz.pl"
        description="SaaS Pricing co to jest — wyjaśniamy modele cenowe SaaS (per seat, usage-based, tiered), jak wycenić produkt, ACV i jak przeprowadzić A/B test cen."
        canonical="https://fotz.pl/blog/saas-pricing-modele-cenowe"
      />
      <ArticleSchema
        title="SaaS Pricing — modele cenowe i jak wycenić produkt?"
        description="Modele cenowe SaaS (per seat, usage-based, tiered, freemium), jak wycenić produkt SaaS, ACV, A/B testing cen i kiedy podnosić ceny."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/saas-pricing-modele-cenowe"
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
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> SaaS i startupy</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                SaaS Pricing — jak wycenić produkt i wybrać model cenowy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Pricing to najważniejsza dźwignia wzrostu w SaaS. Per seat, usage-based, tiered —
                który model wybrać, jak wycenić produkt i jak testować ceny?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Modele cenowe SaaS</h2>
              <div className="space-y-3 mb-6">
                {pricingModels.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <DollarSign className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{m.model}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Pricing a model sprzedaży</h2>
              <div className="space-y-2 mb-6">
                {[
                  { acv: "ACV poniżej 5 000 USD", model: "Product-Led Growth (PLG)", note: "Self-serve, freemium, trial" },
                  { acv: "ACV 5 000–25 000 USD", model: "Inside Sales", note: "Demos, AEs, krótki cykl" },
                  { acv: "ACV 25 000–100 000 USD", model: "Mid-Market Sales", note: "Dłuższy cykl, procurement" },
                  { acv: "ACV powyżej 100 000 USD", model: "Enterprise Sales", note: "6-18 miesięcy, RFP, legal" },
                ].map((r, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{r.acv}</p>
                      <p className="text-slate-500 text-xs">{r.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">{r.model}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz stronę cennikową dla SaaS?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy strony cennikowe które konwertują — pricing page z testowanym UX i copywritingiem.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — SaaS Pricing</h2>
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
          heading="Zbuduj stronę cennikową która konwertuje"
          subheading="Pricing page, landing page i SEO — pomagamy SaaS firmom przekształcać odwiedzających w płacących klientów."
        />
      </Layout>
    </>
  );
}
