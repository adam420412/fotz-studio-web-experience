import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogDesignThinkingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Design Thinking — co to jest? Metodologia projektowania" },
  ];

  const dtPhases = [
    {
      phase: "1. Empatia (Empathize)",
      desc: "Głębkie zrozumienie użytkownika — jego potrzeb, frustracji, kontekstu. Wywiady, obserwacje, shadowing. Nie zakładaj — badaj.",
      methods: "User interviews, contextual inquiry, shadowing, empathy map, jobs-to-be-done.",
      output: "Insights o użytkownikach, cytaty, wzorce zachowań.",
    },
    {
      phase: "2. Definiowanie (Define)",
      desc: "Sformułowanie właściwego problemu do rozwiązania na podstawie insightów z fazy empatii. POV Statement: 'Użytkownik X potrzebuje Y, ponieważ Z'.",
      methods: "How Might We (HMW) questions, POV statement, affinity diagram, user journey map.",
      output: "Problem Statement: jasno zdefiniowany challenge do rozwiązania.",
    },
    {
      phase: "3. Ideacja (Ideate)",
      desc: "Generowanie jak największej liczby pomysłów rozwiązania problemu. Ilość przed jakością — ocenianie pomysłów pojawia się dopiero potem.",
      methods: "Brainstorming, SCAMPER, Crazy 8s (8 pomysłów w 8 minut), mind mapping, analogies.",
      output: "Lista pomysłów. Wybrane 2-3 do prototypowania.",
    },
    {
      phase: "4. Prototypowanie (Prototype)",
      desc: "Szybkie stworzenie namacalnego artefaktu który można przetestować. Low-fidelity (papierowy) lub high-fidelity (Figma). Cel: tanio przetestować założenia.",
      methods: "Paper prototypes, wireframes, Figma mockups, role-playing, storyboards.",
      output: "Prototyp do testowania. Im tańszy tym lepszy na wczesnym etapie.",
    },
    {
      phase: "5. Testowanie (Test)",
      desc: "Konfrontacja prototypu z prawdziwymi użytkownikami. Obserwacja jak używają, co ich frustuje, co rozumieją. Wróć do wcześniejszych faz jeśli trzeba.",
      methods: "Usability testing, A/B testing, feedback sessions, 5-second test.",
      output: "Insighty które cofają do fazy Empathize lub Ideate — iteracja jest celem.",
    },
  ];

  const dtVsAgile = [
    { dimension: "Cel", dt: "Znaleźć właściwy problem do rozwiązania", agile: "Dostarczyć rozwiązanie efektywnie" },
    { dimension: "Faza", dt: "Przed programowaniem (discovery)", agile: "Podczas programowania (delivery)" },
    { dimension: "Output", dt: "Insighty, prototypy, problem statement", agile: "Działające oprogramowanie w sprintach" },
    { dimension: "Podejście", dt: "Nielinearne, iteracyjne, eksploracyjne", agile: "Zorganizowane sprinty, backlog, velocity" },
    { dimension: "Relacja", dt: "Design Thinking definiuje CO budować", agile: "Agile definiuje JAK to zbudować" },
  ];

  const faqItems = [
    {
      question: "Co to jest Design Thinking?",
      answer: "Design Thinking to metodologia rozwiązywania problemów skupiona na głębokim rozumieniu użytkownika i iteracyjnym eksperymentowaniu. Sformalizowana przez IDEO i d.school Stanford w latach 80-90. Kluczowe założenia: empathy first (najpierw rozumiej użytkownika), fail fast (szybko testuj i odrzucaj złe pomysły), iterate (iteracja jest normalna, nie porażką), collaborative (interdyscyplinarne zespoły). Design Thinking składa się z 5 faz: Empathize (zrozum użytkownika), Define (sformułuj problem), Ideate (generuj pomysły), Prototype (zbuduj prototype), Test (przetestuj z użytkownikami). Ważne: fazy nie są linearne — z Testu często wracasz do Empathize lub Ideate. Zastosowania: projektowanie produktów cyfrowych, usprawnianie procesów biznesowych, innowacje w dużych korporacjach, projektowanie usług (service design).",
    },
    {
      question: "Jak Design Thinking różni się od tradycyjnego projektowania?",
      answer: "Tradycyjne projektowanie vs Design Thinking: Tradycyjne: zaczyna od rozwiązania (mamy pomysł na produkt), przechodzi przez fazy (requirements → design → build → launch), zakłada że wiesz czego użytkownik chce, minimalizuje iteracje (costly). Design Thinking: zaczyna od użytkownika (kto ma problem?), fazy są nielinearne i często się powtarzają, zakłada że nie wiesz czego użytkownik chce — musisz zbadać, iteracja jest tańsza niż budowanie złego produktu. Kluczowa różnica: tradycyjne projektowanie optymalizuje pod kątem specyfikacji. Design Thinking optymalizuje pod kątem potrzeb użytkownika. Podejście IBM Design Thinking: Enterprise adaptation gdzie 'hills' (cele użytkownika), 'playbacks' (prezentacje) i 'sponsor users' (stały dostęp do prawdziwych użytkowników) są wbudowane w proces.",
    },
    {
      question: "Jak przeprowadzić warsztaty Design Thinking?",
      answer: "Przeprowadzenie warsztatów Design Thinking krok po kroku: Przed warsztatem: Wybierz challenge (nie za wąski, nie za szeroki). Dobierz interdyscyplinarny team (designer, developer, biznes, marketing). Zbierz insighty z badań użytkowników przed warsztatem. Przygotuj materiały (post-ity, markery, szablony). Agenda (6-8h): 1h — Empathy sharing: każdy dzieli się insightami z użytkownikami. 1h — Define: HMW questions, głosowanie na najlepsze problemy. 1.5h — Ideation: Crazy 8s, brainstorming, sketching. 1h — Prototyping: szybkie prototypy papierowe lub storyboard. 1h — Testing simulation: role-play lub quick user feedback. Facilitator tips: żadnej oceny podczas ideacji. 'Yes, and...' zamiast 'yes, but...'. Timeboxing jest kluczowy. Fizyczna przestrzeń ma znaczenie — stojąco lepiej niż siedzące. Narzędzia remote: Miro/MURAL (wirtualne post-ity), Zoom breakout rooms.",
    },
    {
      question: "Jakie narzędzia stosuje się w Design Thinking?",
      answer: "Narzędzia Design Thinking per faza: Empathize: Empathy Map — 4 kwadranty (mówi, myśli, robi, czuje). User Journey Map — wizualizacja doświadczenia użytkownika krok po kroku. Jobs-to-be-Done — co użytkownik 'zatrudnia' produkt, żeby zrobić? Wywiady z użytkownikami (IDI). Define: HMW (How Might We) — przekształcenie insightów w otwarte pytania. POV Statement: 'Użytkownik [persona] potrzebuje [potrzeba] ponieważ [insight]'. Affinity Diagram — grupowanie insightów na post-itach. Ideate: Crazy 8s — 8 szkiców w 8 minut. Brainwriting 6-3-5 — 6 osób, 3 pomysły, 5 rund. SCAMPER — Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse. Prototype: Figma / Sketch — cyfrowe wireframes. Paper prototyping — szkice na papierze. Storyboard — komiks pokazujący user journey. Test: Usability testing script. Think-aloud protocol.",
    },
    {
      question: "Czy Design Thinking działa w korporacjach?",
      answer: "Design Thinking w dużych organizacjach — wyzwania i sukcesy: Sukcesy: IBM — IBM Design Thinking wdrożony dla 100k+ pracowników. Twierdzą że skrócił time-to-market o 75%. GE Healthcare — przeprojektowanie MRI dla dzieci przez DT (kolory, przygoda, less scary). SAP — centrum innowacji oparte na DT. Challenges w korporacjach: Biurokracja spowalnia iteracje. 'Fail fast' sprzeczne z kulturą risk-averse. Silosy utrudniają interdyscyplinarne teams. ROI trudny do zmierzenia krótkoterminowo. Jak wdrożyć w korporacji: Zacznij od małego projektu (proof of concept). Executive sponsorship jest kluczowy. Zatrudnij facilitatorów z zewnątrz na początku. Wymierne sukcesy budują cultural change. Design Thinking Center of Excellence — wewnętrzny team certyfikowanych facilitatorów. Alternatywa: Design Sprints (Google Ventures) — 5-dniowy sprint łączący DT z agile. Popularny w korporacjach bo szybszy i łatwiejszy do wdrożenia.",
    },
    {
      question: "Jak zmierzyć wyniki Design Thinking?",
      answer: "Mierzenie ROI Design Thinking: Metryki procesu: Time to first prototype — jak szybko team może przetestować pomysł? Number of insights per research session — głębokość badań użytkownika. Iteration speed — ile iteracji w danym czasie? Prototype fidelity progression — od low do high-fi. Metryki biznesowe (po wdrożeniu): NPS / CSAT — poprawa satysfakcji użytkownika. Conversion rate — poprawa kluczowych wskaźników produktu. Support ticket reduction — mniej problemów po redesignie. Time-to-market — szybsze dostarczenie produktu. Cost saved — koszt naprawienia błędu we wczesnym prototypie vs late-stage development (ratio 1:100). Metodologia pomiaru: Baseline przed projektem DT, pomiar po 3-6 miesiącach. A/B test gdzie możliwy. Jakościowe: czy team lepiej rozumie użytkowników? Ograniczenia: długoterminowe efekty trudno przypisać jednej metodologii.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Design Thinking — co to jest? Metodologia projektowania | fotz.pl"
        description="Design Thinking co to jest — wyjaśniamy czym jest myślenie projektowe, 5 faz (Empathize, Define, Ideate, Prototype, Test), narzędzia i jak wdrożyć w firmie."
        canonical="https://fotz.pl/blog/design-thinking-co-to"

        keywords="Design Thinking co to jest, Design Thinking definicja, czym jest Design Thinking, Design Thinking przykłady, jak działa Design Thinking, Design Thinking znaczenie, Design Thinking przewodnik"
      />
      <ArticleSchema
        title="Design Thinking — co to jest? Metodologia projektowania"
        description="Czym jest Design Thinking, 5 faz procesu, narzędzia, warsztaty, różnica vs Agile i jak mierzyć wyniki."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/design-thinking-co-to"
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
                <span className="flex items-center gap-1"><Lightbulb className="w-4 h-4" /> UX / Innowacje</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Design Thinking — co to jest i jak stosować?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Design Thinking to metodologia rozwiązywania problemów skupiona na głębokim rozumieniu użytkownika.
                5 faz: Empathize, Define, Ideate, Prototype, Test — iteracyjnie, nie liniowo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">5 faz Design Thinking</h2>
              <div className="space-y-4 mb-6">
                {dtPhases.map((p, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-2">{p.phase}</p>
                    <p className="text-slate-600 text-xs mb-2">{p.desc}</p>
                    <p className="text-slate-500 text-xs mb-1"><span className="font-medium">Metody:</span> {p.methods}</p>
                    <p className="text-blue-700 text-xs"><span className="font-medium">Output:</span> {p.output}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Design Thinking vs Agile</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700 text-xs">Wymiar</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Design Thinking</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Agile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dtVsAgile.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-900 text-xs">{row.dimension}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.dt}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.agile}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Projektujesz produkt cyfrowy lub strategię UX?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony internetowe oparte na badaniach użytkowników — budujemy doświadczenia które konwertują.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  UX i strony internetowe — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Design Thinking co to jest</h2>
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
          heading="Projektujemy strony i produkty cyfrowe skoncentrowane na użytkowniku"
          subheading="UX research, projektowanie interfejsów i testy z użytkownikami — budujemy produkty które naprawdę rozwiązują problemy."
        />
      </Layout>
    </>
  );
}
