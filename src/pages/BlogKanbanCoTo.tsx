import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Layout as LayoutIcon, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogKanbanCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Kanban — co to jest? Metoda zarządzania pracą" },
  ];

  const kanbanPrinciples = [
    { principle: "Wizualizuj pracę", desc: "Tablica Kanban wizualizuje cały workflow — każde zadanie jako karta, każdy etap jako kolumna. Transparentność = wspólne rozumienie statusu pracy." },
    { principle: "Ogranicz WIP (Work in Progress)", desc: "Ustaw limity WIP per kolumna — np. max 3 zadania w 'In Progress'. Zapobiega multitaskingowi i ujawnia bottlenecki w procesie." },
    { principle: "Zarządzaj flow", desc: "Monitoruj jak zadania przepływają przez system. Cel: płynny, przewidywalny flow. Identyfikuj i usuwaj blokady." },
    { principle: "Sformalizuj polityki procesu", desc: "Jasne kryteria co znaczy 'Done', kiedy zadanie przechodzi do kolejnego etapu, jak obsługiwać blokady." },
    { principle: "Mierz i poprawiaj", desc: "Lead time (czas od początku do końca), cycle time (czas aktywnej pracy), throughput. Ciągłe doskonalenie przez dane." },
    { principle: "Prowadź feedback loops", desc: "Regularne retrospekcje, daily standups, service delivery review. Kanban to system ciągłego doskonalenia (Kaizen)." },
  ];

  const kanbanVsScrum = [
    { dimension: "Cadence", kanban: "Ciągły flow, bez sztywnych sprintów", scrum: "Sztywne sprinty (1-4 tygodnie)" },
    { dimension: "Role", kanban: "Brak formalnych ról (brak Scrum Master, Product Owner)", scrum: "Scrum Master, Product Owner, Developer Team" },
    { dimension: "WIP limits", kanban: "Explicite WIP limits jako kluczowy mechanizm", scrum: "Brak formalnych WIP limits (sprint backlog jest limitem)" },
    { dimension: "Zmiany", kanban: "Zmiany mogą wchodzić w dowolnym momencie", scrum: "Zmiany chronione przez sprint — nie wchodzą w trakcie" },
    { dimension: "Metryki", kanban: "Lead time, cycle time, throughput, CFD", scrum: "Velocity, sprint burndown, story points" },
    { dimension: "Najlepsze dla", kanban: "Operational teams, support, marketing, continuous work", scrum: "Product development, feature teams, defined iterations" },
  ];

  const faqItems = [
    {
      question: "Co to jest Kanban?",
      answer: "Kanban to metoda zarządzania pracą wywodząca się z Toyota Production System (lata 40., Taiichi Ohno). Dosłownie z japońskiego: 'kan' = wizualna, 'ban' = karta/tablica. W IT i software development Kanban spopularyzował David J. Anderson (~2007). Kanban opiera się na: tablicy Kanban (To Do → In Progress → Done lub bardziej złożony workflow), kartach Kanban (każde zadanie jako karta na tablicy), WIP limits (ograniczenie liczby jednocześnie otwartych zadań), wizualizacji bottlenecków (gdzie praca się zatrzymuje?). Kanban sprawdza się gdy: praca przychodzi nieregularnie (support, operational tasks, marketing). Trudno planować z góry — priorytety ciągle się zmieniają. Team potrzebuje transparentności bez narzutu sprintów. Kanban używają: engineering (szczególnie ops i support), marketing, HR, agencje kreatywne, customer success, procurement.",
    },
    {
      question: "Jak zorganizować tablicę Kanban?",
      answer: "Projektowanie tablicy Kanban: Podstawowa tablica (3 kolumny): Backlog (To Do) → In Progress → Done. Świetna do startu ale zbyt prosta dla złożonych procesów. Zaawansowana tablica (per workflow): np. dla software: Backlog → Analysis → Development → Code Review → Testing → Staging → Done. Każda kolumna odpowiada realnemu etapowi pracy. Dobre praktyki: Kolumny = realne kroki procesu, nie statusy z CRM. Sublimity per kolumna (np. 'In Progress' = max 3 zadania). 'Done criteria' — jasno zdefiniowane co znaczy że zadanie jest ukończone. Swimlanes (poziome rzędy) — do rozdzielenia typów pracy (features, bugs, improvements) lub teamów. Blocked lane — oddzielne oznaczenie zablokowanych kart. Narzędzia: Trello (najprostszy), Jira (enterprise, software), Linear (dev teams), Asana, Monday.com, Notion Database, ClickUp. Fizyczna tablica: dla małych teamów post-ity na ścianie nadal działają świetnie — zwiększają zaangażowanie.",
    },
    {
      question: "Co to jest WIP Limit i dlaczego jest ważny?",
      answer: "WIP (Work In Progress) limit to maksymalna liczba zadań które mogą być jednocześnie w danym etapie (kolumnie) tablicy Kanban. Dlaczego WIP limits są kluczowe: 'Stop starting, start finishing' — bez limitów WIP, ludzie ciągle zaczynają nowe zadania zamiast kończyć obecne. Ujawniają bottlenecki — gdy kolumna jest 'pełna' (osiągnięto limit) a nie można dodawać nowych kart, bottleneck staje się widoczny. Zmuszają do współpracy — jeśli 'Testing' jest full, developerzy pomagają w testowaniu zamiast brać nowe zadanie. Little's Law: Lead Time = WIP / Throughput. Im mniej WIP, tym krótszy lead time (czas dostarczenia). Jak ustalić WIP: zacznij od 2x liczba osób w teamie per kolumna. Obserwuj 2-4 tygodnie. Zmniejszaj jeśli system jest płynny, zwiększaj jeśli bottlenecki pojawiają się gdzie indziej. Typowe benchmark: WIP na osobę = 1-3 zadania jednocześnie. Powyżej 5 = context switching degraduje produktywność o 20-40%.",
    },
    {
      question: "Jak mierzyć efektywność Kanban?",
      answer: "Metryki Kanban: Lead Time: całkowity czas od momentu zadanie weszło do systemu (Backlog) do momentu ukończenia (Done). Mierzy 'obietnicę dla klienta'. Cycle Time: czas aktywnej pracy nad zadaniem (od 'In Progress' do 'Done'). Mierzy rzeczywistą efektywność pracy. Throughput: liczba zadań ukończonych w danym czasie (np. tygodniu). Mierzy wydajność systemu. Work Item Age: ile czasu zadanie spędza w danym etapie — stare zadania = problem. Flow Efficiency: (Cycle Time / Lead Time) x 100%. Np. 2 dni aktywnej pracy z 10 dni lead time = 20% efficiency. 80% czasu zadanie czeka w kolejce. Cumulative Flow Diagram (CFD): wizualizacja napływu i odpływu pracy przez czas. Poszerzone 'brzucho' CFD = bottleneck lub wzrost WIP. Narzędzia: Jira Software (wbudowane raporty Kanban: Lead/Cycle Time, CFD), LinearB, Swarmia (engineering metrics), Nave.io (Kanban analytics). Retro rytm: przegląd metryk tygodniowo lub bi-weekly. Pytanie: co możemy zrobić żeby zmniejszyć lead time?",
    },
    {
      question: "Kiedy Kanban jest lepszy od Scrum?",
      answer: "Kanban lepszy niż Scrum w następujących sytuacjach: Nieregularna praca: support team, helpdesk, ops engineering, legal — praca przychodzi jako ticket, nie jako zaplanowany sprint. Priorytety zmieniają się często: marketing content calendar, HR recruitment pipeline, biznes development. Ciągłe dostarczanie: devops teams, SRE, CI/CD pipeline — release kiedy gotowe, nie koniec sprintu. Mały team (1-3 osoby): narzut Scrum (ceremonials, roles) nie jest uzasadniony. Onboarding nowej praktyki: Kanban jest prostszy do wprowadzenia niż Scrum. Wiele firm zaczyna od Kanban i przechodzi do Scrum gdy dojrzewają. Scrum lepszy niż Kanban gdy: budujesz product z user stories i definiowanymi iteracjami. Team potrzebuje rytmu (sprint reviews, planning) żeby dobrze funkcjonować. Stakeholders oczekują przewidywalnych deliverables per sprint. Hybrid — Scrumban: coraz popularne — elementy obu. Sprint planning + Kanban board z WIP limits. Timeboxed retrospectives + ciągły flow w trakcie sprintu.",
    },
    {
      question: "Jak wdrożyć Kanban w firmie lub teamie?",
      answer: "Wdrożenie Kanban step-by-step: Krok 1: Wizualizuj aktualny workflow (nie idealny) — zmapuj jak praca naprawdę przebiega w Twoim teamie. Jakie są kroki? Gdzie praca czeka? Krok 2: Stwórz tablicę — kolumny odpowiadają realnym krokom. Zacznij prosto (To Do / In Progress / Done) i dodawaj kolumny gdy pojawia się potrzeba. Krok 3: Zacznij bez WIP limits — pierwsze 2 tygodnie obserwuj jak praca przepływa zanim ustalasz limity. Krok 4: Ustal WIP limits — na podstawie obserwacji. Zacznij od konserwatywnych limitów. Krok 5: Daily standup per tablica (15 min): co się poruszyło? Co jest zablokowane? Co możemy skończyć dziś? Krok 6: Mierz lead time i cycle time — od pierwszego dnia. Krok 7: Retrospektywa co 2-4 tygodnie — jakie bottlenecki widzimy? Co możemy poprawić? Zasada: nie reformuj procesu przed wizualizacją. Najpierw zrób tablicę odzwierciedlającą jak działa dziś, potem optymalizuj. Typowy czas wdrożenia: 1-2 tygodnie żeby tablica działała. 1-3 miesiące żeby team naturalnie używał metryk.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Kanban — co to jest? Metoda zarządzania pracą | fotz.pl"
        description="Kanban co to jest — wyjaśniamy czym jest metodologia Kanban, tablica Kanban, WIP limits, metryki (lead time, cycle time), różnica vs Scrum i jak wdrożyć Kanban."
        canonical="https://fotz.pl/blog/kanban-co-to"
      />
      <ArticleSchema
        title="Kanban — co to jest? Metoda zarządzania pracą"
        description="Czym jest Kanban, zasady (WIP limits, wizualizacja), tablica Kanban, metryki (lead time, cycle time), porównanie ze Scrum i wdrożenie."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/kanban-co-to"
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
                <span className="flex items-center gap-1"><LayoutIcon className="w-4 h-4" /> Agile / Zarządzanie</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Kanban — co to jest i jak zarządzać pracą tablicą Kanban?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Kanban to metoda wizualizacji i zarządzania pracą z Toyota Production System.
                Tablica Kanban, WIP limits i flow metryki — prosta ale potężna metodologia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">6 zasad Kanban</h2>
              <div className="space-y-3 mb-6">
                {kanbanPrinciples.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{idx + 1}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{p.principle}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kanban vs Scrum — porównanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700 text-xs">Wymiar</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Kanban</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Scrum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kanbanVsScrum.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-900 text-xs">{row.dimension}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.kanban}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.scrum}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Zarządzasz projektem strony lub kampanią marketingową?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Prowadzimy projekty stron i kampanii z pełną transparentnością — wiesz co dzieje się na każdym etapie.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Projekty stron internetowych — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Kanban co to jest</h2>
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
          heading="Zarządzamy projektami efektywnie i transparentnie"
          subheading="Strony internetowe i kampanie prowadzone z jasnym procesem — wiesz na jakim etapie jest Twój projekt."
        />
      </Layout>
    </>
  );
}
