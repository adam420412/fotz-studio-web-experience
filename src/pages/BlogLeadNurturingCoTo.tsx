import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, TrendingUp, CheckCircle2, Users } from "lucide-react";
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

export default function BlogLeadNurturingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Lead Nurturing — co to jest? Pielęgnowanie leadów w B2B" },
  ];

  const nurturingStages = [
    {
      stage: "TOFU (Top of Funnel) — Świadomość",
      content: "Edukacyjne treści bez nacisku sprzedażowego — artykuły, webinary, ebooki, research reports. Lead dopiero odkrywa że ma problem.",
      actions: "Newsletter edukacyjny, follow-up po pobraniu leadu magnetu, zaproszenie na webinar.",
      timing: "Pierwsze 1-2 tygodnie po akwizycji.",
    },
    {
      stage: "MOFU (Middle of Funnel) — Rozważanie",
      content: "Treści porównawcze i oceniające — case studies, comparison guides, product demos, ROI calculators. Lead rozważa opcje.",
      actions: "Case study dopasowane do branży/wielkości firmy, zaproszenie na demo, free trial.",
      timing: "2-6 tygodni od akwizycji. Trigger: aktywność (otwarcie emaila, wizyta na stronie cennika).",
    },
    {
      stage: "BOFU (Bottom of Funnel) — Decyzja",
      content: "Treści które usuwają ostatnie bariery — testimoniale, security dokumentacja, implementacja guides, pricing. Lead gotowy do zakupu.",
      actions: "Rozmowa z handlowcem, bezpłatny trial, oferta specjalna, SLA/gwarancja.",
      timing: "Kiedy lead osiąga lead score X lub wysyła inquiry. Szybka reakcja (<1h) krytyczna.",
    },
  ];

  const nurturingChannels = [
    { channel: "Email nurturing", desc: "Automatyczne sekwencje emaili dostosowane do etapu lejka. Najpopularniejszy kanał B2B — 77% marketingowców używa email jako główny kanał nurturingu.", tools: "HubSpot, ActiveCampaign, Klaviyo, Marketo" },
    { channel: "Retargeting ads", desc: "Reklamy displayowe i social media dla osób które odwiedziły stronę lub pobrały treść. Utrzymują markę w świadomości przez cały cykl decyzyjny.", tools: "LinkedIn Ads, Meta Ads, Google Display" },
    { channel: "Content personalizacja", desc: "Wyświetlanie różnych treści na stronie zależnie od etapu lejka lub segmentu. Lead który był już na demo widzi inne CTA niż nowy odwiedzający.", tools: "HubSpot, Optimizely, Segment" },
    { channel: "LinkedIn outreach", desc: "Bezpośredni kontakt z leadami przez LinkedIn — szczególnie skuteczny w B2B enterprise gdzie email cold outreach ma niski response rate.", tools: "LinkedIn Sales Navigator, Dux-Soup, Phantombuster" },
    { channel: "Webinary i eventy", desc: "Webinary edukacyjne jako element nurturingu — leady które uczestniczą w webinarach konwertują 2-3x lepiej niż te które nie uczestniczą.", tools: "Zoom, Demio, Livestorm, Hopin" },
  ];

  const faqItems = [
    {
      question: "Co to jest lead nurturing?",
      answer: "Lead nurturing (pielęgnowanie leadów) to proces budowania relacji z potencjalnymi klientami przez dostarczanie wartościowych treści i komunikacji na każdym etapie procesu zakupowego — aż do momentu gotowości do zakupu. Kluczowy fakt: 79% leadów marketingowych nigdy nie konwertuje na klientów — głównie dlatego że nie są odpowiednio nurturowane (Marketing Sherpa). 50% leadów jest kwalifikowanych ale nie gotowych do zakupu w danym momencie. Lead nurturing rozwiązuje ten problem przez: kontynuację komunikacji z leadami które nie są 'teraz gotowe', edukację i budowanie zaufania przez czas, sygnalizowanie gotowości zakupowej (lead scoring), przygotowanie leadu do rozmowy handlowej.",
    },
    {
      question: "Jak zbudować sekwencję nurturingową?",
      answer: "Budowanie sekwencji nurturingowej krok po kroku: 1) Zdefiniuj personę i etap lejka — różne persona i etapy wymagają różnego contentu. 2) Zaplanuj trigger — co uruchamia sekwencję? Pobranie ebooka, wypełnienie formularza, wizyta na stronie cennika? 3) Zaprojektuj sekwencję emaili: Email 1 (natychmiast): Dostarcz obiecany content + krótkie wprowadzenie. Email 2 (dzień 3): Edukacja — problem który rozwiązujesz. Email 3 (dzień 7): Case study lub testimonial. Email 4 (dzień 14): Porównanie opcji lub FAQ. Email 5 (dzień 21): Demo/trial CTA lub rozmowa z ekspertem. 4) Dodaj branching logic — jeśli otworzył email 3, wyślij content branżowy. Jeśli nie otworzył, wyślij inny temat. 5) Zdefiniuj exit trigger — kiedy sekwencja się kończy? Po umówieniu demo, zakupie, lub po X emailach bez reakcji. Narzędzia: ActiveCampaign, HubSpot, Marketo.",
    },
    {
      question: "Co to jest lead scoring i jak go wdrożyć?",
      answer: "Lead scoring to system punktowania leadów na podstawie ich profilu i zachowań — im więcej punktów, tym bardziej 'gotowy' lead. Dwie kategorie: Demographic/Firmographic score (kim jest): stanowisko: +20 pkt dla C-suite, +15 dla VP/director, +5 dla specjalisty. Wielkość firmy: +20 dla enterprise (500+), +10 dla mid-market. Branża: +15 dla Twojego ICP, 0 dla poza ICP. Behavioral score (co robi): otwarcie emaila: +1. Kliknięcie w email: +5. Odwiedzenie strony cennika: +20. Pobranie case study: +10. Rejestracja na webinar: +15. Wypełnienie formularza kontaktowego: +50. Definicja progów: MQL (Marketing Qualified Lead): 50+ pkt — przekazany do marketingu. SQL (Sales Qualified Lead): 80+ pkt — przekazany do handlowca. Narzędzia: HubSpot (automatyczny lead scoring), Salesforce Pardot, Marketo.",
    },
    {
      question: "Jaka jest różnica między lead nurturing a lead generation?",
      answer: "Lead generation (generowanie leadów) to proces pozyskiwania kontaktów — przyciąganie nowych osób do lejka przez: content marketing (SEO, blogi, ebooki), płatne reklamy (Google Ads, LinkedIn Ads), social media, referrals, eventy. Efekt: nowy lead w bazie (email, imię, firma). Lead nurturing (pielęgnowanie leadów) to co dzieje się PO pozyskaniu leadu — proces budowania relacji i prowadzenia przez lejek aż do konwersji. Efekt: lead staje się klientem. Analogia: lead generation = zaproszenie kogoś na randkę. Lead nurturing = budowanie relacji która prowadzi do ślubu (konwersji). Wspólnie tworzą kompletny lejek marketingowo-sprzedażowy: Awareness → Lead Gen → Nurturing → SQLifikacja → Sprzedaż.",
    },
    {
      question: "Jak długo trwa lead nurturing w B2B?",
      answer: "Czas trwania lead nurturing zależy od długości cyklu zakupowego: Krótki cykl (SMB, prosty produkt): 2-4 tygodnie, 4-8 emaili. Średni cykl (mid-market, software): 1-3 miesiące, 8-15 emaili. Długi cykl (enterprise, złożony produkt): 3-12+ miesięcy. Może wymagać kilkudziesięciu touchpointów przez emaile, retargeting i bezpośredni kontakt. Benchmarki B2B: leady nurturowane generują 50% więcej SQL przy 33% niższym koszcie (Forrester). Emaile nurturingowe mają 4-10x wyższy CTR vs masowe wysyłki (HubSpot). Cykl zakupowy dla decyzji >100k PLN: często 6-18 miesięcy — nurturing musi towarzyszyć przez cały ten czas. Kiedy zakończyć nurturing: po konwersji (zakup, kontrakt), po wyraźnym sygnale 'nie jestem zainteresowany', po X emailach bez żadnej reakcji (wyczyść bazę).",
    },
    {
      question: "Jakie metryki mierzyć w lead nurturing?",
      answer: "Kluczowe metryki lead nurturing: Metryki emaili: open rate nurturowych emaili (benchmark: 25-35% dla B2B), click-through rate (benchmark: 3-7%), unsubscribe rate (alarm jeśli >0.5%). Metryki konwersji: MQL to SQL conversion rate — % leadów przekazanych do sprzedaży, SQL to Customer conversion rate — % SQL które stały się klientami, time to MQL — ile dni od leadu do kwalifikacji MQL. Biznesowe: cost per MQL, cost per SQL, revenue attributed to nurturing. Engagement: lead score progression (jak szybko rosną punkty?), content engagement rate (kto faktycznie czyta?). Analiza: porównaj konwersję leadów nurturowanych vs nienurturowanych (control group). Narzędzia: HubSpot Analytics, Salesforce reports, GA4 (attributed conversions), Gong (conversation intelligence dla jakości SQLów).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Lead Nurturing — co to jest? Pielęgnowanie leadów w B2B | fotz.pl"
        description="Lead nurturing co to jest — wyjaśniamy czym jest pielęgnowanie leadów w B2B, jak zbudować sekwencję nurturingową, lead scoring, metryki i różnica vs lead generation."
        canonical="https://fotz.pl/blog/lead-nurturing-co-to"
      />
      <ArticleSchema
        title="Lead Nurturing — co to jest? Pielęgnowanie leadów w B2B"
        description="Czym jest lead nurturing, etapy lejka (TOFU/MOFU/BOFU), sekwencje emailowe, lead scoring, metryki i różnica vs lead generation."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/lead-nurturing-co-to"
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
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> B2B Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Lead Nurturing — co to jest i jak pielęgnować leady B2B?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                79% leadów nigdy nie konwertuje bo nie są nurturowane. Lead nurturing to
                systematyczne prowadzenie potencjalnych klientów przez lejek do zakupu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Lead nurturing per etap lejka</h2>
              <div className="space-y-4 mb-6">
                {nurturingStages.map((s, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-2">{s.stage}</p>
                    <p className="text-slate-600 text-xs mb-1"><span className="font-medium">Content:</span> {s.content}</p>
                    <p className="text-slate-600 text-xs mb-1"><span className="font-medium">Działania:</span> {s.actions}</p>
                    <div className="flex items-start gap-1">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-700 text-xs">{s.timing}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kanały lead nurturing</h2>
              <div className="space-y-3 mb-6">
                {nurturingChannels.map((c, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm">{c.channel}</p>
                    </div>
                    <p className="text-slate-600 text-xs mb-1">{c.desc}</p>
                    <p className="text-blue-600 text-xs font-medium">{c.tools}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz wdrożyć lead nurturing dla swojego biznesu?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony B2B i kampanie Google Ads — generujemy leady i doradzamy w strategii ich nurturowania.
                </p>
                <Link to="/uslugi/google-ads" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Lead generation B2B — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Lead Nurturing co to jest</h2>
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
          heading="Zbudujemy lejek lead nurturing dla Twojego biznesu B2B"
          subheading="Landing pages, content marketing i automatyzacje emailowe — prowadzimy leady od zainteresowania do zakupu."
        />
      </Layout>
    </>
  );
}
