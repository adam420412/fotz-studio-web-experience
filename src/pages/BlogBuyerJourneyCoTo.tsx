import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Map, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogBuyerJourneyCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Buyer Journey — co to jest? Ścieżka zakupowa klienta" },
  ];

  const journeyStages = [
    {
      stage: "Awareness (Świadomość)",
      desc: "Kupujący uświadamia sobie że ma problem lub potrzebę — ale niekoniecznie wie jakie jest rozwiązanie. Szuka informacji ogólnych.",
      buyerThinking: "'Mamy problem z retencją pracowników.' 'Nasze kampanie emailowe mają niski open rate.' 'Strona nie generuje leadów.'",
      contentTypes: "Blogi edukacyjne, poradniki, ebooki (edukacja bez pitch), webinary, podcasty, badania branżowe.",
      yourGoal: "Pomóż zdefiniować problem i zbuduj zaufanie jako ekspert — bez sprzedaży.",
    },
    {
      stage: "Consideration (Rozważanie)",
      desc: "Kupujący zdefiniował problem i aktywnie szuka możliwych rozwiązań. Porównuje opcje, kategorię rozwiązań, dostawców.",
      buyerThinking: "'Czy potrzebujemy nowego CRM? Co robi marketing automation? Jak inne firmy rozwiązują ten problem?'",
      contentTypes: "Case studies, comparison guides, demo videos, ROI calculators, webinary produktowe, free trials.",
      yourGoal: "Pokaż że Twoja kategoria rozwiązań jest właściwa i że Ty jesteś najlepszym wyborem w tej kategorii.",
    },
    {
      stage: "Decision (Decyzja)",
      desc: "Kupujący wybrał kategorię rozwiązania i porównuje konkretnych dostawców. Ocenia propozycje, przeprowadza demos, negocjuje.",
      buyerThinking: "'HubSpot vs Salesforce. Który vendor ma lepsze wsparcie? Jaka jest cena? Jak wygląda implementacja?'",
      contentTypes: "Free trials, product demos, testimonials, security documentation, pricing, implementation guides, references.",
      yourGoal: "Usuń bariery zakupowe. Przyspiesz decyzję przez social proof, klarowną cenę i łatwy onboarding.",
    },
  ];

  const buyerJourneyVsFunnel = [
    { perspective: "Sales Funnel", focus: "Perspektywa firmy — jak prowadzimy klienta przez nasze etapy sprzedaży.", stages: "MQL → SQL → Opportunity → Closed Won.", weakness: "Wewnętrzna perspektywa — co firma robi, nie co klient myśli." },
    { perspective: "Buyer Journey", focus: "Perspektywa klienta — jak klient podejmuje decyzję zakupową.", stages: "Awareness → Consideration → Decision.", weakness: "Nie pokazuje wewnętrznych procesów sprzedażowych firmy." },
    { perspective: "Customer Journey", focus: "Pełna perspektywa klienta — od pierwszego kontaktu przez zakup do lojalności.", stages: "Awareness → Purchase → Onboarding → Loyalty → Advocacy.", weakness: "Szeroka — trudniejsza do operacjonalizacji dla konkretnych kampanii." },
  ];

  const faqItems = [
    {
      question: "Co to jest buyer journey?",
      answer: "Buyer journey (ścieżka zakupowa kupującego) to proces przez który przechodzi potencjalny klient od momentu uświadomienia sobie problemu do podjęcia decyzji zakupowej. HubSpot i Inbound Marketing spopularyzowały model 3-etapowy: Awareness (świadomość) — kupujący odkrywa że ma problem. Consideration (rozważanie) — kupujący szuka rozwiązań. Decision (decyzja) — kupujący wybiera konkretnego dostawcę. Dlaczego buyer journey jest kluczowy dla marketingu: różne etapy wymagają różnych treści. Ktoś w Awareness nie chce od razu 'get a demo'. Ktoś w Decision nie potrzebuje już edukacji — potrzebuje case study i ceny. Dopasowanie content + stage = wyższe konwersje. Badania pokazują: 67% ścieżki zakupowej B2B dzieje się zanim kupujący skontaktuje się ze sprzedawcą (Forrester). Dlatego content marketing jest tak ważny — jesteś tam zanim Twoi handlowcy.",
    },
    {
      question: "Jak zmapować buyer journey?",
      answer: "Mapowanie buyer journey krok po kroku: 1) Zdefiniuj persony — kto kupuje? Jakie mają role, problemy, priorytety? B2B często ma 6-10 osób w komitecie zakupowym (Gartner). 2) Zbierz dane z klientów — wywiady z best customers: 'Jak szukałeś rozwiązania?', 'Co czytałeś podczas research?', 'Jak wyglądał Twój proces decyzyjny?'. 3) Zbierz dane z win/loss analysis — dlaczego wygrywałeś i przegrywałeś? Jakie treści pojawiały się w rozmowach sprzedażowych? 4) Mapuj touchpoints — jakie kanały (Google, LinkedIn, email, referrals) i treści klienci konsumują na każdym etapie? 5) Zidentyfikuj 'content gaps' — gdzie nie masz treści dopasowanych do danego etapu lub persony? 6) Stwórz content map — macierz: etap (Awareness/Consideration/Decision) x persona = potrzebna treść. Narzędzia: Miro/Mural (wizualizacja), HubSpot (content mapping), Gong (insights z call recordings).",
    },
    {
      question: "Jak buyer journey różni się w B2B od B2C?",
      answer: "B2B vs B2C Buyer Journey: B2B Buyer Journey: długi (tygodnie-miesiące-lata). Wielu decision-makers (komitet zakupowy 6-10 osób w enterprise). Racjonalne kryteria decyzji (ROI, integracje, security, SLA). Dużo content consumption przed kontaktem z sales. Typowe kanały: Google, LinkedIn, peer recommendations. B2C Buyer Journey: krótki (minuty-dni). Jeden lub kilku decisionmakers (individual lub rodzina). Emocjonalne i racjonalne kryteria. Impulse purchases możliwe. Kanały: Instagram, TikTok, Google, review sites (Amazon, Google Maps). Przykład B2B: zakup CRM w firmie 200 osób. IT Manager, CFO, Sales Director i kilku end-users — każdy ma inne kryteria. Journey trwa 3-9 miesięcy. Przykład B2C: zakup słuchawek do 500 PLN. Jedna osoba, research 1-7 dni, YouTube unboxing + Amazon reviews + porównanie cen. Implikacje dla content strategy: B2B = edukacyjny long-form content, case studies dla różnych person. B2C = visual content, reviews, SEO na product keywords, social ads.",
    },
    {
      question: "Jak dostosować content marketing do etapów buyer journey?",
      answer: "Content marketing per etap buyer journey: Awareness stage (Świadomość): Cel: edukacja, nie sprzedaż. Format: blog posts (problemy, trendy), ebooki (problem-oriented, nie product-oriented), webinary (edukacyjne), podcasts, research reports, social media. Przykłady tytułów: 'Dlaczego 70% wdrożeń CRM kończy się porażką?', 'Jak mierzyć efektywność content marketingu?'. Consideration stage (Rozważanie): Cel: pokaż że Twoja kategoria rozwiązań jest właściwa. Format: comparison guides, ROI calculators, case studies (problem → solution → result), product overview videos, expert webinars. Przykłady: 'Jak wybrać platformę marketing automation? 7 kryteriów.', 'Case study: jak Firma X zwiększyła MQL o 300% w 6 miesięcy.' Decision stage (Decyzja): Cel: usuń bariery, przyspiesz decyzję. Format: free trial, live demo, pricing page, customer testimonials, implementation guide, security/compliance docs, reference calls. Przykłady: 'Zaczać darmowy trial 14 dni', 'Nasze ceny vs HubSpot — transparentne porównanie.'",
    },
    {
      question: "Co to jest dark funnel i dlaczego utrudnia tracking buyer journey?",
      answer: "Dark funnel (ciemny lejek) to część buyer journey której nie możesz zmierzyć standardowymi narzędziami analitycznymi — bo dzieje się poza trackowanymi touchpointami. Co jest w dark funnel: Slack i Discord rozmowy między pracownikami ('Ktoś używa HubSpot?'). LinkedIn prywatne wiadomości. Email peer recommendations. Rozmowy telefoniczne i spotkania. Word-of-mouth przy lunch. Reddit i społecznościowe fora (anonimowe). Czytanie treści bez cookiess (przeglądarki prywatne, cookie rejection). Problem: według badań, 80-90% buyer journey B2B dzieje się w dark funnel. Kupujący często przychwodzi do rozmowy sprzedażowej już 80% gotowy — bez jednego zmierzonego touchpointu w Twoich systemach. Jak sobie radzić z dark funnel: 'How did you hear about us?' survey przy onboardingu (prostsze niż myślisz). Self-reported attribution podczas demos i calls. Community building (Slack community, LinkedIn Group) — by być obecnym gdzie rozmowy się toczą. Brand awareness metryki (branded search, direct traffic). Linie badawcze: Demand Gen Visuals, Chris Walker, Refine Labs popularyzują tę koncepcję.",
    },
    {
      question: "Jak mierzyć efektywność content marketingu w kontekście buyer journey?",
      answer: "Pomiar content marketingu per buyer journey stage: Awareness metrics: organic search traffic (per topic cluster). Blog subscribers, email opt-ins. Social shares i branded mentions. 'How did you hear about us?' — brand recall. Consideration metrics: content engagement (time on page, scroll depth). Downloads (ebooki, case studies). Webinar registrations i attendance rate. Email nurturing open/click rates. Decision metrics: demo requests i trial starts. Contact form conversions. Pricing page visits → contact conversion rate. Assisted conversions (content consumed before purchase). Revenue attribution: Multi-touch attribution model — przypisuj value do content w ścieżce do konwersji. First-touch (discovery), last-touch (closing), linear (equal split), time-decay (więcej dla ostatnich touchpointów). Content ROI: (Revenue attributed to content - Content production costs) / Content production costs. Narzędzia: HubSpot Content Attribution, Google Analytics 4 Paths to Conversion, Marketo, Bizible.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Buyer Journey — co to jest? Ścieżka zakupowa klienta | fotz.pl"
        description="Buyer journey co to jest — wyjaśniamy czym jest ścieżka zakupowa, etapy (Awareness, Consideration, Decision), mapowanie buyer journey, B2B vs B2C i dark funnel."
        canonical="https://fotz.pl/blog/buyer-journey-co-to"

        keywords="Buyer Journey co to jest, Buyer Journey definicja, czym jest Buyer Journey, Buyer Journey w sprzedaży, Buyer Journey strategia, Buyer Journey przykłady, jak używać Buyer Journey"
      />
      <ArticleSchema
        title="Buyer Journey — co to jest? Ścieżka zakupowa klienta"
        description="Czym jest buyer journey, 3 etapy (Awareness/Consideration/Decision), jak mapować ścieżkę klienta, różnica vs sales funnel, B2B vs B2C i dark funnel."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/buyer-journey-co-to"
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
                <span className="flex items-center gap-1"><Map className="w-4 h-4" /> Marketing / Sprzedaż</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Buyer Journey — co to jest i jak mapować ścieżkę zakupową?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                67% decyzji zakupowych B2B zapada zanim klient skontaktuje się z handlowcem.
                Buyer journey — Awareness, Consideration, Decision — i jak tworzyć treści per etap.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">3 etapy Buyer Journey</h2>
              <div className="space-y-4 mb-6">
                {journeyStages.map((s, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-2">{s.stage}</p>
                    <p className="text-slate-600 text-xs mb-2">{s.desc}</p>
                    <p className="text-slate-500 text-xs mb-1 italic">"{s.buyerThinking}"</p>
                    <p className="text-slate-500 text-xs mb-1"><span className="font-medium">Treści:</span> {s.contentTypes}</p>
                    <p className="text-blue-700 text-xs"><span className="font-medium">Twój cel:</span> {s.yourGoal}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Buyer Journey vs Sales Funnel vs Customer Journey</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700 text-xs">Model</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Perspektywa</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Etapy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyerJourneyVsFunnel.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-900 text-xs">{row.perspective}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.focus}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.stages}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz tworzyć treści dopasowane do każdego etapu buyer journey?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Content marketing i strony docelowe — tworzymy treści które odpowiadają na pytania klientów na każdym etapie.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Content marketing — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Buyer Journey co to jest</h2>
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
          heading="Budujemy content który prowadzi klientów przez całą ścieżkę zakupową"
          subheading="Blogi, landing pages i kampanie — tworzymy treści dopasowane do każdego etapu decyzji klienta."
        />
      </Layout>
    </>
  );
}
