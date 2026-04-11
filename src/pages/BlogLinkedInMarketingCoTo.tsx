import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, TrendingUp, MessageSquare, Target } from "lucide-react";
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

export default function BlogLinkedInMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "LinkedIn Marketing — co to jest i jak prowadzić?" },
  ];

  const linkedinFormats = [
    { format: "Posty tekstowe", desc: "Do 3000 znaków. Najwyższy zasięg organiczny wśród formatów. Dobre storytelling i ekspertyza." },
    { format: "Karuzele (Dokumenty PDF)", desc: "Slajdy w formacie PDF — świetny zasięg, dużo zapisów (saves). Idealne do instrukcji i list." },
    { format: "Wideo", desc: "Natywne wideo ma 5x większy zasięg niż linki zewnętrzne. Krótkie (30-90 sek.) lub długie formaty edukacyjne." },
    { format: "Artykuły (LinkedIn Newsletter)", desc: "Długie formy treści. Newsletter pozwala budować subskrybentów bezpośrednio na LinkedIn." },
    { format: "LinkedIn Ads", desc: "Sponsored Content, Message Ads, Dynamic Ads. Precyzyjne targetowanie B2B: stanowisko, branża, firma." },
  ];

  const faqItems = [
    {
      question: "Co to jest LinkedIn Marketing?",
      answer:
        "LinkedIn Marketing to działania marketingowe prowadzone na platformie LinkedIn — największej profesjonalnej sieci społecznościowej (900+ mln użytkowników, 2024). LinkedIn Marketing obejmuje: organiczne budowanie marki (posty, artykuły, komentarze), LinkedIn Ads (reklamy B2B), Social Selling (nawiązywanie relacji z potencjalnymi klientami), Employee Advocacy (pracownicy jako ambasadorzy marki), LinkedIn Newsletter. LinkedIn jest szczególnie wartościowy dla B2B — 80% leadów B2B z social mediów pochodzi z LinkedIn (badania LinkedIn).",
    },
    {
      question: "Jak skutecznie prowadzić marketing na LinkedIn?",
      answer:
        "Strategia LinkedIn Marketing: 1) Zoptymalizuj profil/stronę firmową — profesjonalne zdjęcie, banner, kompletny opis z keywords. 2) Publikuj regularnie — minimum 3-4x tygodniowo. Algorytm LinkedIn nagradza regularność. 3) Angażuj się w komentarze — LinkedIn premiuje interakcje. 4) Używaj hashtagów — 3-5 relevantnych hashtagów na post. 5) Buduj sieć celowo — łącz się z potencjalnymi klientami, partnerami, liderami branży. 6) LinkedIn Newsletter — buduj bazę subskrybentów niezależną od algorytmu. 7) Personal branding CEO/założyciela — posty osobiste mają 10x większy zasięg niż firmowe.",
    },
    {
      question: "Ile kosztują reklamy LinkedIn Ads?",
      answer:
        "Koszty LinkedIn Ads: CPC (Cost Per Click): 5-15 USD — 3-5x drożej niż Facebook Ads. CPM (Cost Per 1000 wyświetleń): 6-12 USD. CPL (Cost Per Lead) przez LinkedIn Lead Gen Forms: 30-150 USD (zależy od branży). Minimum dziennego budżetu: 10 USD. Dlaczego tak drogo: targetowanie B2B jest bardzo precyzyjne (stanowisko, seniorność, branża, firma) = wyższy konwersja i LTV. ROI LinkedIn Ads jest wyższy niż FB/IG dla B2B mimo wyższych CPC. Zalecany budżet startowy: min. 1500-3000 USD/mies. dla sensownych testów.",
    },
    {
      question: "Co to jest Social Selling na LinkedIn?",
      answer:
        "Social Selling na LinkedIn to strategia budowania relacji z potencjalnymi klientami przez sieć społecznościową zamiast cold calling. Polega na: obserwowaniu i angażowaniu się w treści potencjalnych klientów, budowaniu ekspertyzy przez własne treści, nawiązywaniu kontaktu z kontekstem (nie zimne wiadomości), nudging — delikatne przypominanie o sobie przez reaktywność na ich posty. Wskaźnik Social Selling Index (SSI) LinkedIn mierzy skuteczność (skala 0-100). Firmy z wysokim SSI generują o 45% więcej szans sprzedażowych.",
    },
    {
      question: "Jak budować zasięg organiczny na LinkedIn?",
      answer:
        "Algorytm LinkedIn — co działa w 2025: Posty tekstowe z personalnymi historiami — najwyższy zasięg. Karuzele PDF — bardzo wysoki save rate = sygnał jakości. Wideo natywne — 5x zasięg vs. linki. Komentarze w pierwszej godzinie po publikacji — kluczowe dla algorytmu. Co NIE działa: linki zewnętrzne w treści posta (LinkedIn demotuje) — wstaw link w komentarzu. Zbyt częste posty firmowe bez zaangażowania — algorytm widzi niski engagement. Hashtagi — 3-5, nie więcej. Godziny publikacji: wtorek-czwartek, 7-9 rano lub 12-14.",
    },
    {
      question: "Jak mierzyć efektywność LinkedIn Marketing?",
      answer:
        "KPI dla LinkedIn Marketing: Organiczny: Zasięg (impressions), Engagement Rate (interakcje/zasięg × 100% — cel powyżej 2%), Follower growth rate, Profile views, Post saves (wskaźnik wartości treści). Płatny: CTR (cel powyżej 0.5% dla Sponsored Content), CPL (koszt leada), Conversion Rate z formularzy, Pipeline value z LinkedIn Ads. Business: Liczba leadów z LinkedIn, Revenue attribution, CAC vs LTV z kanału LinkedIn. Narzędzia: LinkedIn Analytics (darmowy), Hootsuite, Shield Analytics (specjalnie dla LinkedIn).",
    },
  ];

  return (
    <>
      <SEOHead
        title="LinkedIn Marketing — co to jest i jak prowadzić? | fotz.pl"
        description="LinkedIn Marketing co to jest — wyjaśniamy jak prowadzić marketing na LinkedIn, LinkedIn Ads, Social Selling, zasięg organiczny i jak mierzyć efektywność."
        canonical="https://fotz.pl/blog/linkedin-marketing-co-to"
      />
      <ArticleSchema
        title="LinkedIn Marketing — co to jest i jak prowadzić?"
        description="Czym jest LinkedIn Marketing, formaty treści, LinkedIn Ads koszty, Social Selling, budowanie zasięgu organicznego i mierzenie efektywności działań na LinkedIn."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/linkedin-marketing-co-to"
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
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Social Media B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                LinkedIn Marketing — co to jest i jak skutecznie działać?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                LinkedIn to największa platforma B2B — 80% leadów B2B z social mediów pochodzi właśnie stąd.
                Jak prowadzić marketing organiczny i płatny na LinkedIn?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Formaty treści na LinkedIn</h2>
              <div className="space-y-3 mb-6">
                {linkedinFormats.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <MessageSquare className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{f.format}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">LinkedIn vs. inne platformy B2B</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Platforma</th>
                      <th className="text-left p-3 border border-slate-700">CPC</th>
                      <th className="text-left p-3 border border-slate-700">Targetowanie B2B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { platform: "LinkedIn Ads", cpc: "5-15 USD", targeting: "Doskonałe (stanowisko, firma, branża)" },
                      { platform: "Facebook/Meta Ads", cpc: "0.5-3 USD", targeting: "Ograniczone dla B2B" },
                      { platform: "Google Ads Search", cpc: "2-20 USD", targeting: "Intent-based, nie demograficzne" },
                      { platform: "Twitter/X Ads", cpc: "0.5-4 USD", targeting: "Średnie" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.platform}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.cpc}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.targeting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strony dla swojej marki B2B?</p>
                <p className="text-blue-700 text-sm mb-3">
                  LinkedIn Marketing działa najlepiej gdy kieruje na profesjonalną, szybką stronę z wysoką konwersją.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — LinkedIn Marketing co to jest</h2>
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
          heading="Zbuduj silną markę B2B na LinkedIn"
          subheading="Strategia treści, LinkedIn Ads i strona marketingowa — kompleksowe wsparcie B2B."
        />
      </Layout>
    </>
  );
}
