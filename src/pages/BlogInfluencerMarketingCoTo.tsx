import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, Users, TrendingUp, BarChart2 } from "lucide-react";
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

export default function BlogInfluencerMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Influencer Marketing — co to jest i jak działa?" },
  ];

  const influencerTypes = [
    { type: "Nano-influencer", followers: "1K–10K", er: "5–10%", best: "Lokalne marki, niszowe produkty, wysokie zaufanie" },
    { type: "Micro-influencer", followers: "10K–100K", er: "3–6%", best: "Najlepszy ROI — zaangażowana niszowa publiczność" },
    { type: "Macro-influencer", followers: "100K–1M", er: "1–3%", best: "Brand awareness, większy zasięg" },
    { type: "Mega-influencer / Celebrity", followers: "1M+", er: "0.5–1.5%", best: "Masowy zasięg, drogi, niskie zaangażowanie" },
  ];

  const faqItems = [
    {
      question: "Co to jest Influencer Marketing?",
      answer:
        "Influencer Marketing to strategia marketingowa polegająca na współpracy z osobami posiadającymi wpływ na określoną grupę odbiorców (influencerami) w celu promocji produktu, usługi lub marki. Influencerzy budują zaufanie swojej społeczności — ich rekomendacje są postrzegane jako bardziej autentyczne niż tradycyjne reklamy. Rynek influencer marketingu: 21 miliardów USD globalnie (2023), prognoza 33 mld USD w 2025. Polskie badania: 63% Polaków kupuje produkty polecane przez influencerów.",
    },
    {
      question: "Jak wybrać influencera do kampanii?",
      answer:
        "Kryteria wyboru influencera: 1) Engagement Rate (ER): ważniejszy niż liczba followersów. ER = (likes + comments) / followers × 100%. Micro: 3-6%, Mega: 0.5-1.5%. 2) Dopasowanie niszy: czy influencer tworzy content pasujący do Twojego produktu? 3) Autentyczność: czy ma historię współprac? Czy obserwatorzy reagują na posponorowane posty? 4) Dane demograficzne: czy obserwatorzy to Twoja grupa docelowa (wiek, płeć, geolokalizacja)? 5) Jakość content: czy treści są profesjonalne i pasują do Twojej marki? 6) Poprzednie współprace: sprawdź historię i opinie innych marek. Narzędzia: Social Blade, HypeAuditor, Modash.",
    },
    {
      question: "Ile kosztuje współpraca z influencerem?",
      answer:
        "Ceny influencer marketingu w Polsce (2025): Nano (1K-10K): 200-2000 PLN/post. Micro (10K-100K): 1000-15 000 PLN/post. Macro (100K-1M): 10 000-100 000 PLN/post. Mega (1M+): 50 000-500 000+ PLN/post. Instagram Story: 30-50% ceny posta. Reel: 50-150% ceny posta. YouTube film: 2-10x cena Instagram posta (dłuższa żywotność). TikTok: podobnie do Instagram. Formy współpracy: gifting (darmowy produkt), paid partnership (pewna ekspozycja), długoterminowe ambasadorstwo.",
    },
    {
      question: "Jak mierzyć efektywność influencer marketingu?",
      answer:
        "KPI dla influencer marketingu: Zasięg: ile unikalnych osób zobaczyło content? Impressions: ile wyświetleń łącznie? Engagement Rate: likes + comments / wyświetlenia × 100%. Kliknięcia w link: UTM tracking. Konwersje: kod rabatowy, dedykowany landing page. Earned Media Value (EMV): ile kosztowałyby te impressions w płatnych reklamach? Brand mentions: monitoring wzmianek po kampanii. Narzędzie: dedykowany kod rabatowy + Google Analytics UTM = najprostsze dokładne mierzenie konwersji.",
    },
    {
      question: "Co to jest micro-influencer i dlaczego jest skuteczny?",
      answer:
        "Micro-influencer to twórca z 10 000-100 000 obserwujących. Dlaczego micro-influencerzy mają często wyższy ROI: Wyższy Engagement Rate: micro 3-6% vs mega 0.5-1.5%. Większe zaufanie: ich obserwatorzy czują osobistą relację, polecenia są wiarygodniejsze. Niższy koszt: 10-100x tańsi niż mega. Lepsza niszowość: bardziej homogeniczna i zaangażowana publiczność. Badania Markerly: influencerzy z 10K-100K followersów generują 20x więcej konwersji niż ci z 1M+. Strategia: 10-20 micro-influencerów może przewyższyć 1 mega-influencera przy tym samym budżecie.",
    },
    {
      question: "Jak podpisać umowę z influencerem?",
      answer:
        "Kluczowe elementy umowy z influencerem: Zakres współpracy: ile postów, jakie formaty, na jakich platformach, w jakim terminie. Briefing i approval: czy marka akceptuje content przed publikacją? Wyłączność: czy influencer nie może przez X miesięcy współpracować z konkurencją? Oznaczanie: jak musi być oznaczona współpraca (#reklama, #ad zgodnie z prawem polskim). Prawa do contentu: czy marka może używać contentu w innych kanałach? Wynagrodzenie: kwota, forma płatności, termin (zazwyczaj 14-30 dni po publikacji).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Influencer Marketing — co to jest i jak działa? | fotz.pl"
        description="Influencer Marketing co to jest — wyjaśniamy czym jest marketing influencerski, typy influencerów, koszty współpracy, jak wybrać influencera i mierzyć ROI."
        canonical="https://fotz.pl/blog/influencer-marketing-co-to"

        keywords="Influencer Marketing co to jest, Influencer Marketing definicja, czym jest Influencer Marketing, Influencer Marketing w marketingu, Influencer Marketing przykłady, jak działa Influencer Marketing, Influencer Marketing strategia"
      />
      <ArticleSchema
        title="Influencer Marketing — co to jest i jak działa?"
        description="Czym jest Influencer Marketing, typy influencerów (nano/micro/macro/mega), koszty współpracy w Polsce, jak wybrać influencera i mierzyć efektywność kampanii."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/influencer-marketing-co-to"
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
                <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Social Media Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Influencer Marketing — co to jest i jak skutecznie współpracować?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Influencer Marketing to 21-miliardowy globalny rynek. Typy influencerów,
                koszty w Polsce, jak wybrać partnera i mierzyć ROI kampanii.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy influencerów i Engagement Rate</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Typ</th>
                      <th className="text-left p-3 border border-slate-700">Followersi</th>
                      <th className="text-left p-3 border border-slate-700">Avg ER</th>
                      <th className="text-left p-3 border border-slate-700">Najlepszy dla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {influencerTypes.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.type}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.followers}</td>
                        <td className="p-3 border border-slate-200 text-green-700 text-xs font-medium">{row.er}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz strony landingowe do kampanii influencer?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Dedykowane landing page z kodem rabatowym i UTM trackingiem dla każdego influencera — mierz konwersje precyzyjnie.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Influencer Marketing co to jest</h2>
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
