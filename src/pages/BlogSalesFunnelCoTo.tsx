import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingDown, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogSalesFunnelCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Sales Funnel — co to jest? Lejek sprzedażowy w B2B i B2C" },
  ];

  const funnelStages = [
    {
      stage: "TOFU — Top of Funnel",
      pl: "Świadomość",
      desc: "Potencjalny klient po raz pierwszy dowiaduje się o Twojej firmie lub odkrywa że ma problem który możesz rozwiązać.",
      content: "Blog, SEO, social media, reklamy displayowe, PR, podcasty, webinary edukacyjne.",
      metric: "Ruch na stronie, zasięg, impressions, nowi użytkownicy.",
      goal: "Generowanie świadomości i ruchu — jak najszerszy net.",
    },
    {
      stage: "MOFU — Middle of Funnel",
      pl: "Rozważanie",
      desc: "Klient rozważa opcje i ocenia Twoją ofertę vs konkurencja. Ma świadomość problemu, szuka najlepszego rozwiązania.",
      content: "Case studies, ebooki, webinary produktowe, comparison guides, demo videos, trial.",
      metric: "Czas na stronie, pobrania, zapisy na demo, email opt-in, lead score.",
      goal: "Edukacja i kwalifikacja — zamiana odwiedzających w leady.",
    },
    {
      stage: "BOFU — Bottom of Funnel",
      pl: "Decyzja",
      desc: "Klient jest gotowy do zakupu. Usuwa ostatnie bariery: cena, bezpieczeństwo, warunki, implementacja.",
      content: "Testimoniale, pricing page, trial, oferta specjalna, gwarancja, SLA, rozmowa z handlowcem.",
      metric: "Demo bookings, trial starts, oferty wysłane, win rate, CAC.",
      goal: "Konwersja — zamknięcie dealu.",
    },
    {
      stage: "Post-Purchase — Retencja",
      pl: "Lojalność",
      desc: "Nowy klient. Teraz celem jest onboarding, retencja i ekspansja. Zadowolony klient staje się ambasadorem marki.",
      content: "Onboarding, success plans, QBR, upsell offers, referral program, community.",
      metric: "NRR, churn rate, NPS, LTV, referrals.",
      goal: "Retencja i ekspansja — wzrost bez nowej akwizycji.",
    },
  ];

  const funnelMetrics = [
    { metric: "Lead-to-MQL rate", desc: "% leadów kwalifikowanych jako Marketing Qualified Lead. Miara jakości leadów.", benchmark: "20-30% typowo" },
    { metric: "MQL-to-SQL rate", desc: "% MQL przekazanych do sprzedaży jako Sales Qualified Lead.", benchmark: "10-20% B2B" },
    { metric: "SQL-to-Opportunity rate", desc: "% SQL które stają się aktywną szansą sprzedaży (discovery call completed).", benchmark: "30-50%" },
    { metric: "Win rate (Opportunity-to-Close)", desc: "% szans sprzedaży które kończą się podpisaniem umowy.", benchmark: "20-30% B2B SaaS" },
    { metric: "Average Sales Cycle", desc: "Średni czas od pierwszego kontaktu do zamknięcia dealu.", benchmark: "SMB: 14-30 dni. Enterprise: 3-12 miesięcy" },
    { metric: "CAC (Customer Acquisition Cost)", desc: "Całkowity koszt pozyskania jednego klienta (marketing + sales / liczba nowych klientów).", benchmark: "CAC powinien być 3x niższy niż LTV" },
  ];

  const faqItems = [
    {
      question: "Co to jest sales funnel?",
      answer: "Sales funnel (lejek sprzedażowy) to model opisujący podróż potencjalnego klienta od momentu pierwszego kontaktu z marką do zakupu i dalej do lojalności. Nazwa 'lejek' pochodzi od kształtu — na górze wchodzi duża liczba potencjalnych klientów, na dole zamykają się transakcje z małą ich częścią. Klasyczny podział: TOFU (Top of Funnel) = świadomość. MOFU (Middle of Funnel) = rozważanie. BOFU (Bottom of Funnel) = decyzja. Różnica B2B vs B2C: B2B funnel jest dłuższy (tygodnie-miesiące), angażuje wiele osób, wymaga aktywnego procesu sprzedaży. B2C funnel może być krótki (minuty-godziny), jednoosobowy, często w pełni zautomatyzowany. Cel zarządzania lejkiem: optymalizacja konwersji między etapami. Każda 'dziura' w lejku = utrata potencjalnych przychodów.",
    },
    {
      question: "Jaka jest różnica między sales funnel a marketing funnel?",
      answer: "Marketing funnel vs Sales funnel: Marketing funnel skupia się na fazach TOFU i MOFU — generowaniu świadomości, ruchu i leadów. Narzędzia: SEO, content marketing, social media, reklamy, email nurturing. KPI: ruch, leady, MQL. Sales funnel skupia się na fazach MOFU/BOFU — kwalifikacji leadów i zamykaniu dealów. Narzędzia: CRM, demo calls, propozycje, negocjacje, kontrakty. KPI: SQL, pipeline, win rate, ARR. Związek: marketing funnel zasila sales funnel. Marketing generuje i kwalifikuje leady (MQL), sprzedaż je kwalifikuje dalej (SQL) i zamyka. Często firmy mówią o 'marketing i sales funnel' jako jednym — Revenue Funnel lub Go-to-Market Funnel. Problemem jest tradycyjny podział: marketing odpowiada za TOFU/MOFU, sales za BOFU — co powoduje konflikty o jakość leadów.",
    },
    {
      question: "Jak zoptymalizować lejek sprzedażowy?",
      answer: "Optymalizacja sales funnel krok po kroku: 1) Zmierz każdy etap — jaki % konwertuje między etapami? Gdzie jest największy drop-off? 2) Priorytetyzuj największą 'dziurę' — etap z najniższą konwersją to priorytet. 3) TOFU optimization: poprawa SEO i content dla lepszej jakości ruchu, lepsza ICP targeting w reklamach, A/B testy landing pages. 4) MOFU optimization: lepsza kwalifikacja leadów (lead scoring), personalizacja nurturingu, szybsza reakcja na leady (leady tracą wartość po 5 min!). 5) BOFU optimization: skrócenie czasu ofertowania, usunięcie barier zakupowych (pricing page, FAQ, case studies), lepszy discovery call script. 6) Zmierz ponownie — po 30-60 dniach oceń efekty. Framework: Conversion Rate Optimization (CRO) per funnel stage. Narzędzia: HubSpot (pipeline visibility), Salesforce, Mixpanel (digital funnel).",
    },
    {
      question: "Czym jest pipeline sprzedażowy i jak nim zarządzać?",
      answer: "Pipeline sprzedażowy to zestaw aktywnych szans sprzedaży na różnych etapach procesu — wizualizacja lejka dla aktywnych dealów. Typowe etapy pipeline: Lead (kontakt pozyskany), Qualified (wstępna kwalifikacja), Discovery (zrozumienie potrzeb), Demo/Proposal (prezentacja i oferta), Negotiation (negocjacje), Closed Won/Lost (zamknięty). Zarządzanie pipeline: Weekly pipeline review — przeglądaj każdy deal: co blokuje progres? Jaki jest następny krok? Pipeline coverage — powinieneś mieć 3x swojej kwartalnej quota w pipeline (np. quota 100k PLN = pipeline 300k PLN). Stage duration — ile czasu deal spędza w każdym etapie? Za długo = stagnacja. Win/loss analysis — dlaczego wygrywasz i przegrywasz? CRM hygiene — aktualizuj dane w CRM po każdej interakcji. Narzędzia: Salesforce, HubSpot CRM, Pipedrive, Close. Metryki: pipeline velocity = (liczba dealów x win rate x średni deal size) / długość cyklu sprzedaży.",
    },
    {
      question: "Jak zbudować sales funnel dla e-commerce?",
      answer: "Sales funnel B2C / e-commerce: TOFU: SEO (blog, product pages), Google Shopping, Meta Ads, influencer marketing, TikTok/Reels. Cel: ruch na stronie. MOFU: Category/product pages z dobrym opisem i zdjęciami, reviews i social proof, email pop-up (zapis na newsletter za rabat), remarketing dla odwiedzających. Cel: dodanie do koszyka, zapis do newslettera. BOFU: Checkout optimization (im mniej kroków tym lepiej), abandoned cart email (wysyłany po 1h, 24h, 72h od porzucenia koszyka), exit-intent pop-up, social proof przy checkout, clear shipping info i return policy. Post-purchase: thank you email z cross-sell, loyalty program, review request po 7-14 dniach, email sequence 'kup ponownie'. Metryki e-commerce: Session to add-to-cart rate (benchmark: 5-10%), Cart to purchase rate (benchmark: 60-70%), Abandoned cart recovery rate (benchmark: 5-15%). Narzędzia: Shopify Analytics, Klaviyo (email + SMS), Google Analytics 4.",
    },
    {
      question: "Jakie są najczęstsze błędy w zarządzaniu lejkiem sprzedażowym?",
      answer: "Błędy w sales funnel management: 1) Za wolna reakcja na leady — lead traci 90% wartości po 5 minutach od zgłoszenia. Standardem powinien być kontakt w ciągu 1h (max). 2) Brak lead scoringu — traktowanie wszystkich leadów tak samo. Marketing Quality Leads które nie są gotowe do zakupu blokują pipeline sprzedaży. 3) Zbyt wiele etapów pipeline — 3-5 etapów jest optymalne. Więcej tworzy biurokrację i bałagan w danych. 4) Nieaktualizowany CRM — pipeline który nie odzwierciedla rzeczywistości uniemożliwia forecasting. Wymuszaj CRM hygiene przez kultura firmy i KPI handlowców. 5) Brak alignment marketing-sales — marketing generuje leady, sales mówi że są złe. Rozwiązanie: wspólna definicja MQL i SQL. Shared revenue targets. 6) Ignorowanie lost deals — nie analizujesz dlaczego tracisz? Tracisz szansę na poprawę. Win/loss analysis powinno być procesem, nie wyjątkiem. 7) Optymalizacja tylko TOFU — łatwo wpaść w obsesję na ruch i leady, ignorując konwersję końcową.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Sales Funnel — co to jest? Lejek sprzedażowy B2B i B2C | fotz.pl"
        description="Sales funnel co to jest — wyjaśniamy czym jest lejek sprzedażowy, etapy TOFU MOFU BOFU, metryki pipeline, optymalizacja konwersji i błędy zarządzania lejkiem."
        canonical="https://fotz.pl/blog/sales-funnel-co-to"
      />
      <ArticleSchema
        title="Sales Funnel — co to jest? Lejek sprzedażowy B2B i B2C"
        description="Czym jest sales funnel, etapy TOFU/MOFU/BOFU, metryki pipeline (win rate, CAC, MQL-SQL), optymalizacja i błędy w zarządzaniu lejkiem."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/sales-funnel-co-to"
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
                <span className="flex items-center gap-1"><TrendingDown className="w-4 h-4" /> Sprzedaż / Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Sales Funnel — co to jest i jak optymalizować lejek sprzedażowy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Sales funnel prowadzi klientów od pierwszego kontaktu do zakupu.
                TOFU, MOFU, BOFU — jak zmierzyć i zoptymalizować każdy etap lejka.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Etapy lejka sprzedażowego</h2>
              <div className="space-y-4 mb-6">
                {funnelStages.map((s, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-bold text-slate-900 text-sm">{s.stage}</p>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{s.pl}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-2">{s.desc}</p>
                    <p className="text-slate-500 text-xs mb-1"><span className="font-medium">Content:</span> {s.content}</p>
                    <p className="text-slate-500 text-xs mb-1"><span className="font-medium">Metryki:</span> {s.metric}</p>
                    <p className="text-blue-700 text-xs"><span className="font-medium">Cel:</span> {s.goal}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kluczowe metryki lejka sprzedażowego</h2>
              <div className="space-y-3 mb-6">
                {funnelMetrics.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm">{m.metric}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{m.desc}</p>
                      <p className="text-blue-600 text-xs mt-0.5 font-medium">{m.benchmark}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zoptymalizować lejek sprzedażowy?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Landing pages, kampanie Google Ads i content marketing — budujemy lejki które konwertują.
                </p>
                <Link to="/uslugi/google-ads" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Kampanie Google Ads — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Sales Funnel co to jest</h2>
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
          heading="Zbudujemy lejek sprzedażowy który konwertuje"
          subheading="Strony, reklamy i content marketing — kompleksowa obsługa każdego etapu lejka sprzedażowego B2B i B2C."
        />
      </Layout>
    </>
  );
}
