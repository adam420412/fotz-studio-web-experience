import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, Users, Lightbulb, CheckCircle2 } from "lucide-react";
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

export default function BlogJTBDCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Jobs to be Done — co to jest? Framework JTBD" },
  ];

  const jtbdExamples = [
    {
      product: "Milkshake McDonald's",
      traditional: "Klient chce milkshake'a",
      jtbd: "Klient chce 'zlecić robotę': mieć coś do roboty w 45-minutowej nudnej podróży do pracy i poczuć się lekko najedzonym.",
      insight: "McDonald's dodał więcej gumy i kawałków owoców aby milkshake trwał dłużej — sprzedaż wzrosła."
    },
    {
      product: "Ikea",
      traditional: "Klient kupuje szafę",
      jtbd: "Klient chce 'zlecić robotę': mieć poczucie kontroli nad swoim mieszkaniem i tożsamość 'kogoś kto dba o swoje miejsce'.",
      insight: "IKEA sprzedaje nie szafy, ale transformację i poczucie sprawczości. Montaż samodzielny to część doświadczenia."
    },
    {
      product: "Audible / audiobooki",
      traditional: "Klient chce słuchać książek",
      jtbd: "Klient chce 'zlecić robotę': produktywnie wykorzystać czas w korku lub na siłowni — czuć się rozwijającym się człowiekiem.",
      insight: "Audible nie konkuruje z Kindle, konkuruje z podcastami i muzyką — innymi 'zatrudnieniami' podczas bezczynnego czasu."
    },
  ];

  const faqItems = [
    {
      question: "Co to jest Jobs to be Done (JTBD)?",
      answer: "Jobs to be Done (JTBD) to teoria i framework projektowania produktów, które mówi, że klienci nie 'kupują produktu' — 'zatrudniają' go do wykonania konkretnej pracy (job) w ich życiu. Termin stworzony przez Clay'a Christensena (Harvard Business School) i popularyzowany przez Tony'ego Ulwicka. Kluczowe założenie: ludzie mają zadania do wykonania (jobs) w swoim życiu — funkcjonalne, emocjonalne i społeczne. Produkt jest 'zatrudniony' jeśli najlepiej pomaga im wykonać tę pracę. Przykład: ktoś nie kupuje wiertarki — 'zatrudnia' ją żeby mieć dziurę w ścianie. A tak naprawdę chce zawiesić obraz żeby dom wyglądał schludnie (job emocjonalny i społeczny).",
    },
    {
      question: "Jak działa framework JTBD?",
      answer: "Framework JTBD w praktyce: 1) Zidentyfikuj 'jobs' swoich klientów — przez wywiady jakościowe pytaj: 'Kiedy ostatnio użyłeś naszego produktu, co chciałeś osiągnąć?', 'Co robiłeś zanim znalazłeś nasze rozwiązanie?', 'Co sprawiło, że szukałeś rozwiązania właśnie wtedy?'. 2) Rozróżnij typy jobs: Functional (co klient chce zrobić — 'dojechać do pracy'), Emotional (jak chce się czuć — 'bezpiecznie'), Social (jak chce być postrzegany — 'jako professional'). 3) Mapuj 'hiring criteria' — dlaczego Twój produkt jest zatrudniany zamiast alternatyw. 4) Projektuj produkt i komunikację wokół jobs, nie features.",
    },
    {
      question: "Jaka jest różnica między JTBD a persono marketingową?",
      answer: "Persona marketingowa: opis fikcyjnego klienta — wiek, płeć, zainteresowania, zawód, hobby. Np. 'Marek, 35 lat, menedżer, lubi golfa, jeździ BMW'. Persona skupia się na atrybutach demograficznych i psychograficznych — kim jest klient. JTBD: skupia się na sytuacji i celu — dlaczego klient 'zatrudnia' produkt właśnie w tym momencie. Np. 'Marek potrzebuje szybkiego raportu przed prezentacją dla zarządu — chce wyglądać przygotowany i profesjonalnie'. Problem z personami: dwie osoby o identycznym profilu demograficznym mogą 'zatrudniać' ten sam produkt z zupełnie innych powodów. JTBD koncentruje się na kontekście i motywacji, nie na profilu. Najlepsze firmy używają obu: persona = kto, JTBD = dlaczego.",
    },
    {
      question: "Jak przeprowadzić wywiady JTBD?",
      answer: "Metodologia wywiadów JTBD (Bob Moesta): 1) Rekrutuj ludzi którzy niedawno kupili Twój produkt lub produkt konkurencji. 2) Pytaj o 'timeline' decyzji zakupu: 'Kiedy po raz pierwszy pomyślałeś o kupnie?', 'Co się wydarzyło że zacząłeś szukać?', 'Kiedy zdecydowałeś że kupisz?'. 3) Szukaj 'momentu przełączenia' — co wywołało potrzebę zmiany. Często to konkretne wydarzenie (nowa praca, przeprowadzka, kryzys). 4) Pytaj o 'struggling moment' — co było frustrujące w poprzednim rozwiązaniu. 5) Zrozum 'forces of progress': Pull (nowe rozwiązanie przyciąga), Push (stara sytuacja odpycha), Anxiety (strach przed zmianą), Habit (inercja obecnego rozwiązania). Cel: zrozumieć okoliczności zakupu, nie cechy klienta.",
    },
    {
      question: "Jak JTBD pomaga w marketingu i copywritingu?",
      answer: "JTBD rewolucjonizuje copywriting: zamiast opisywać features produktu, opisujesz job który wykonuje. Zamiast: 'Slack to komunikator z 2000+ integracjami' — JTBD: 'Masz dość emails i szukasz pliku który przesłał Ci ktoś z zespołu 3 miesiące temu? Slack sprawia że Twój zespół jest na tej samej stronie.' Zastosowania w marketingu: Landing pages — hero section opisuje job i moment zatrudnienia. Testimoniale — zbierasz opinie wokół jobs (jaką pracę odwalił produkt, jak zmieniło to życie). Onboarding — pytasz o job na początku, personalizujesz doświadczenie. Segmentacja — nie wg demografii, ale wg jobów. Pricing — różne plany dla różnych jobów (personal, team, enterprise).",
    },
    {
      question: "Dla kogo jest framework JTBD?",
      answer: "JTBD jest szczególnie wartościowy dla: Product Managerów — przy priorytetyzacji roadmapy (które features rozwiązują najważniejsze jobs?), przy odkrywaniu nowych produktów. Marketerów — w tworzeniu message-market fit, content strategy i copywritingu. Startupów — do walidacji product-market fit: 'Czy nasz produkt jest zatrudniany do zadania, które naprawdę istnieje?'. UX Designerów — do projektowania flows wokół jobów użytkownika. Customer Success — do rozumienia dlaczego klienci churują (inny job, zmiana okoliczności). Firmy jak Apple, Netflix, Basecamp, Intercom oficjalnie używają JTBD. Autorzy: Clay Christensen 'Competing Against Luck', Bob Moesta 'Demand-Side Sales'.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Jobs to be Done — co to jest? Framework JTBD | fotz.pl"
        description="Jobs to be Done co to jest — wyjaśniamy framework JTBD, jak przeprowadzać wywiady, różnicę JTBD vs persona i jak stosować w marketingu i product management."
        canonical="https://fotz.pl/blog/jobs-to-be-done-jtbd"
      />
      <ArticleSchema
        title="Jobs to be Done — co to jest? Framework JTBD"
        description="Czym jest Jobs to be Done (JTBD), jak działa framework, wywiady JTBD, różnica vs persona marketingowa i zastosowania w marketingu i product management."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/jobs-to-be-done-jtbd"
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
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Product Management</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Jobs to be Done — co to jest i jak framework JTBD zmienia podejście do produktu?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                JTBD to teoria Clay'a Christensena — klienci nie kupują produktów, 'zatrudniają' je do pracy.
                Jak to zmienia marketing, design i strategię produktu?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">JTBD w praktyce — przykłady</h2>
              <div className="space-y-4 mb-6">
                {jtbdExamples.map((ex, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-3">{ex.product}</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded font-medium whitespace-nowrap">Tradycyjne</span>
                        <p className="text-slate-600 text-xs">{ex.traditional}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium whitespace-nowrap">JTBD</span>
                        <p className="text-slate-700 text-xs font-medium">{ex.jtbd}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-3 h-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-500 text-xs italic">{ex.insight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz lepiej rozumieć swoich klientów?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona marketingowa oparta na JTBD — komunikacja skupiona na zadaniach klientów, nie na funkcjach produktu.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Jobs to be Done co to jest</h2>
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
          heading="Zbuduj produkt i marketing wokół prawdziwych potrzeb klientów"
          subheading="Strona, messaging i UX skupione na JTBD — sprzedawaj zadania, nie funkcje."
        />
      </Layout>
    </>
  );
}
