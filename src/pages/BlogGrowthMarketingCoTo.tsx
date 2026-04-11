import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Zap, BarChart2, Target } from "lucide-react";
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

export default function BlogGrowthMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Growth Marketing — co to jest i jak działa?" },
  ];

  const aarrMetrics = [
    { stage: "Acquisition", desc: "Jak pozyskujesz nowych użytkowników? SEO, ads, referral, content. Metryki: CAC, CPA, kanały źródłowe." },
    { stage: "Activation", desc: "Czy nowi użytkownicy osiągają 'aha moment'? Pierwsze logowanie, first value. Metryki: activation rate, time-to-value." },
    { stage: "Retention", desc: "Czy użytkownicy wracają? Engaged users, DAU/MAU ratio. Metryki: retention rate, churn, NPS." },
    { stage: "Revenue", desc: "Jak monetyzujesz? Konwersja na płacących, LTV, ARPU. Metryki: MRR/ARR, upsell rate." },
    { stage: "Referral", desc: "Czy użytkownicy polecają produkt? Wirusowość, program lojalnościowy. Metryki: NPS, referral rate, viral coefficient." },
  ];

  const faqItems = [
    {
      question: "Co to jest Growth Marketing?",
      answer:
        "Growth Marketing to podejście do marketingu oparte na ciągłym eksperymentowaniu, analizie danych i optymalizacji w celu przyspieszenia wzrostu biznesu. W odróżnieniu od tradycyjnego marketingu (fokus na świadomość marki), Growth Marketing skupia się na całym lejku AARRR — od pozyskania po retencję i referral. Growth Marketing = marketing + product + data + experimentation. Cechy Growth Marketingu: data-driven decyzje, szybkie eksperymenty (A/B testy, MVT), cross-functional (marketing + product + engineering), focus na metrykach wzrostu (MRR, DAU, LTV).",
    },
    {
      question: "Czym różni się Growth Marketing od Growth Hacking?",
      answer:
        "Growth Hacking vs. Growth Marketing: Growth Hacking: termin stworzony przez Sean'a Ellisa w 2010. Kojarzy się z 'magicznymi trikami' i szybkimi hackami (Hotmail podpis, Dropbox referral, Airbnb Craigslist). Zwykle jednorazowe, niepowtarzalne. Growth Marketing: bardziej dojrzałe, systematyczne podejście. Budowanie powtarzalnych procesów eksperymentowania. Fokus na skalowaniu. Obejmuje cały lejek AARRR. W praktyce: Growth Hacking = szybkie, kreatywne eksperymenty. Growth Marketing = systematyczna kultura eksperymentowania i optymalizacji. Współcześnie 'Growth Hacking' jest uważany za nieco przestarzałe określenie — preferuje się 'Growth Marketing' lub 'Growth'.",
    },
    {
      question: "Jak wyglądają eksperymenty w Growth Marketingu?",
      answer:
        "Cykl eksperymentowania w Growth Marketingu: 1) Hipoteza: 'Jeśli zmienimy CTA z 'Zarejestruj się' na 'Zacznij za darmo', konwersja wzrośnie o 15%'. 2) Priorytetyzacja: ICE Score (Impact, Confidence, Ease) — od 1-10 każda. Wyber eksperymenty z najwyższym ICE. 3) Projektowanie testu: A/B test, multivariate, split URL. 4) Wdrożenie: minimum 2 tygodnie, minimum 100 konwersji per wariant. 5) Analiza: istotność statystyczna (95%+). Win? Wdróż i skaluj. Loss? Ucz się i przeiteruj. 6) Dokumentacja: rejestruj każdy eksperyment — wiele firms ma 'growth playbook' z setkami wyników. Szybkość eksperymentowania to kluczowa przewaga.",
    },
    {
      question: "Jakie kanały Growth Marketingu są najskuteczniejsze?",
      answer:
        "Najskuteczniejsze kanały w Growth Marketingu zależą od modelu biznesowego: Product-Led Growth (PLG): freemium → konwersja, viral loops, in-product referrals. Najskuteczniejszy dla SaaS (Slack, Notion, Figma). Content + SEO: długoterminowy, compound ROI. Najskuteczniejszy dla edukacyjnych SaaS, B2B. Paid Acquisition: Google Ads, Meta Ads, LinkedIn. Skalowalny gdy unit economics są zdrowe (LTV/CAC > 3x). Email/CRM: retencja i monetyzacja istniejących użytkowników. Community: Discord, Slack communities — wysoka retencja i referral. Partnerships: integracje, co-marketing, channel sales. Growth Marketers testują wszystkie kanały i double-down na tym co działa.",
    },
    {
      question: "Jak mierzyć skuteczność Growth Marketingu?",
      answer:
        "Kluczowe metryki Growth Marketingu: North Star Metric: jedna metryka która najlepiej odzwierciedla wartość dostarczaną użytkownikom i koreluje ze wzrostem (np. dla Spotify: czas słuchania; dla Airbnb: noce zarezerwowane). MRR Growth Rate: % wzrostu miesięcznych przychodów. DAU/MAU ratio: codzienni aktywni / miesięczni aktywni — mierzy stickiness produktu. Activation Rate: % nowych użytkowników którzy osiągnęli 'aha moment'. LTV:CAC ratio: docelowo powyżej 3x. NPS: lojalność klientów i potencjał referral. Churn Rate: % utraconych klientów/MRR miesięcznie. Viral coefficient: ile nowych użytkowników przyprowadza jeden istniejący (>1 = viral growth).",
    },
    {
      question: "Jakie narzędzia używają Growth Marketerzy?",
      answer:
        "Stack narzędzi Growth Marketera: Analytics: Mixpanel lub Amplitude (product analytics), Google Analytics 4 (web). A/B Testing: Optimizely, VWO, LaunchDarkly (feature flags). Customer Data Platform: Segment (unifikacja danych), Rudderstack. CRM/Email: HubSpot, Customer.io, Braze. Heatmapy: Hotjar, FullStory. SEO: Ahrefs, Semrush, Search Console. Paid: Meta Ads Manager, Google Ads, LinkedIn Ads. Attribution: Northbeam, Triple Whale, AppsFlyer. Experimentation: Statsig, Eppo. BI/Data: Tableau, Looker, Metabase, dbt. Collaborative: Notion lub Confluence (growth playbook), Linear lub Jira (roadmap eksperymentów).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Growth Marketing — co to jest i jak działa? | fotz.pl"
        description="Growth Marketing co to jest — wyjaśniamy czym jest growth marketing, framework AARRR, jak prowadzić eksperymenty, kanały wzrostu i kluczowe metryki."
        canonical="https://fotz.pl/blog/growth-marketing-co-to"
      />
      <ArticleSchema
        title="Growth Marketing — co to jest i jak działa?"
        description="Czym jest Growth Marketing, różnica growth marketing vs growth hacking, framework AARRR, eksperymenty, kanały wzrostu, metryki i narzędzia growth marketerów."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/growth-marketing-co-to"
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
                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> Wzrost biznesu</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Growth Marketing — co to jest i jak przyspieszyć wzrost firmy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Growth Marketing łączy marketing, produkt i dane aby systematycznie przyspieszać wzrost.
                Framework AARRR, eksperymenty, kanały wzrostu i North Star Metric.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Framework AARRR (Pirate Metrics)</h2>
              <div className="space-y-3 mb-6">
                {aarrMetrics.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-blue-600 font-bold text-sm flex-shrink-0 w-6">{m.stage[0]}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{m.stage}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ICE Score — priorytetyzacja eksperymentów</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// ICE = Impact × Confidence × Ease (skala 1-10)</p>
                <div className="space-y-2 text-slate-300 text-xs">
                  <div className="flex justify-between border-b border-slate-700 pb-1">
                    <span className="text-slate-400">Eksperyment</span>
                    <span className="text-slate-400">I × C × E = Score</span>
                  </div>
                  <div className="flex justify-between"><span>Zmiana CTA na landing</span><span className="text-green-400">8 × 7 × 9 = 504</span></div>
                  <div className="flex justify-between"><span>Nowy onboarding flow</span><span className="text-yellow-400">9 × 6 × 5 = 270</span></div>
                  <div className="flex justify-between"><span>Redesign pricing page</span><span className="text-orange-400">8 × 5 × 4 = 160</span></div>
                  <div className="flex justify-between"><span>Nowy kanał marketingowy</span><span className="text-red-400">6 × 3 × 3 = 54</span></div>
                  <p className="text-slate-500 text-xs mt-2">Zacznij od eksperymentów z najwyższym ICE Score</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz stronę zoptymalizowaną pod growth?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Landing page z A/B testingiem, analityką i SEO — fundament growth marketingu dla Twojej firmy.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Growth Marketing co to jest</h2>
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
          heading="Przyspiesz wzrost swojego biznesu z Growth Marketing"
          subheading="Strona, SEO i analytics jako fundament — budujemy podstawy systematycznego wzrostu."
        />
      </Layout>
    </>
  );
}
