import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap, Users, TrendingUp, RefreshCw } from "lucide-react";
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

export default function BlogAgileCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Agile — co to jest i jak działa metodologia?" },
  ];

  const agileValues = [
    "Ludzie i interakcje ponad procesy i narzędzia",
    "Działające oprogramowanie ponad obszerną dokumentację",
    "Współpraca z klientem ponad negocjowanie kontraktów",
    "Reagowanie na zmiany ponad realizację planu",
  ];

  const agileFrameworks = [
    { name: "Scrum", desc: "Najpopularniejszy framework — praca w sprintach, codzienne standupy, Product Owner i Scrum Master. Używany przez ~60% firm IT." },
    { name: "Kanban", desc: "Wizualizacja pracy na tablicy (Todo, In Progress, Done). Bez sprintów, ciągły przepływ. Świetny do operacji i support." },
    { name: "SAFe (Scaled Agile)", desc: "Agile dla dużych organizacji — koordynacja wielu zespołów Scrum. Używany w korporacjach." },
    { name: "Extreme Programming (XP)", desc: "Skupiony na praktykach technicznych (TDD, pair programming, continuous integration). Dla wysokich wymagań jakości kodu." },
  ];

  const faqItems = [
    {
      question: "Co to jest Agile?",
      answer:
        "Agile (zwinne zarządzanie projektami) to filozofia i podejście do tworzenia oprogramowania i zarządzania projektami, oparte na elastyczności, iteracyjnej pracy i bliskiej współpracy z klientem. Zostało opisane w Manifeście Agile z 2001 roku. Agile zakłada że wymagania się zmieniają i zamiast planować wszystko z góry, lepiej pracować w krótkich cyklach (iteracjach) i regularnie adaptować kierunek.",
    },
    {
      question: "Czym różni się Agile od tradycyjnego zarządzania projektami (Waterfall)?",
      answer:
        "Waterfall (kaskadowy): planuje się cały projekt z góry, każda faza (wymagania → design → implementacja → testy → deploy) musi być zakończona przed kolejną. Zmiana wymagań w trakcie = duże koszty. Agile: iteracyjny, elastyczny, zmiany są mile widziane. Kiedy Waterfall: projekty o stałych, dobrze znanych wymaganiach (budowa mostu, prosta strona wizytówka). Kiedy Agile: złożone projekty gdzie wymagania będą ewoluować (nowy produkt cyfrowy, aplikacja).",
    },
    {
      question: "Jakie są frameworki Agile?",
      answer:
        "Najpopularniejsze frameworki Agile: Scrum (najpopularniejszy, sprints 1-4 tygodnie, Scrum Master + Product Owner), Kanban (wizualna tablica pracy, ciągły przepływ, bez sprintów), SAFe (Scaled Agile Framework — dla dużych organizacji), Extreme Programming/XP (praktyki techniczne: TDD, CI/CD). Scrum jest najczęściej stosowany w tworzeniu oprogramowania; Kanban w operacjach i supportu.",
    },
    {
      question: "Jak wdrożyć Agile w firmie?",
      answer:
        "Kroki wdrożenia Agile: 1) Edukacja — szkolenie zespołu z wartości i praktyk Agile. 2) Wybór frameworka — Scrum lub Kanban dla początku. 3) Pilot projekt — zacznij od jednego małego projektu. 4) Retro i adaptacja — po każdej iteracji ucz się co poprawić. 5) Skalowanie — rozszerzaj na inne zespoły gdy metodologia działa. Uwaga: Agile to zmiana kultury organizacyjnej, nie tylko narzędzie — wymaga wsparcia zarządu.",
    },
    {
      question: "Czy Agile sprawdza się poza IT?",
      answer:
        "Tak — zasady Agile są stosowane w: marketingu (agile marketing — kampanie jako sprinty, regularne review wyników), HR (agile HR — iteracyjne procesy rekrutacji i onboardingu), finansach (rolling forecasts zamiast rocznych budżetów), produkcji (agile manufacturing), szkolnictwie. Kluczowe pytanie: czy praca jest złożona i wymagania mogą się zmieniać? Jeśli tak — Agile może pomóc.",
    },
    {
      question: "Ile kosztuje wdrożenie Agile?",
      answer:
        "Koszty wdrożenia Agile: Szkolenia (Scrum Fundamentals, Agile coaching): 2000-15 000 zł/osoba. Certyfikaty (PSM I: ok. 150$, SAFe: 1000$+). Coaching organizacyjny: 5000-20 000 zł/mies. Narzędzia (Jira, Asana, Trello, Linear): 0-50$ na użytkownika/mies. Wdrożenie Scrum w małym zespole (5-10 osób) można rozpocząć prawie bezkosztowo — wystarczy szkolenie, Trello lub bezpłatny Jira i zaangażowanie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Agile — co to jest i jak działa metodologia pracy? | fotz.pl"
        description="Agile co to jest — wyjaśniamy czym jest zwinne zarządzanie projektami, wartości Agile, frameworki (Scrum, Kanban) i jak wdrożyć Agile w firmie."
        canonical="https://fotz.pl/blog/agile-co-to"

        keywords="Agile co to jest, Agile definicja, czym jest Agile, Agile przykłady, jak działa Agile, Agile znaczenie, Agile przewodnik"
      />
      <ArticleSchema
        title="Agile — co to jest i jak działa metodologia?"
        description="Czym jest Agile, wartości Manifestu Agile, frameworki (Scrum, Kanban, SAFe), różnica między Agile a Waterfall i jak wdrożyć Agile w firmie."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/agile-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><RefreshCw className="w-4 h-4" /> Zarządzanie projektami</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Agile — co to jest i jak działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Agile to filozofia zarządzania projektami skupiająca się na elastyczności i iteracyjnej pracy.
                Manifrest Agile, frameworki (Scrum, Kanban) i jak wdrożyć go w firmie.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">4 wartości Manifestu Agile (2001)</h2>
              <div className="space-y-3 mb-6">
                {agileValues.map((value, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-800 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-sm italic">
                Uwaga: nie oznacza to że prawa strona nie ma wartości — tylko że cenisz lewą bardziej.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Popularne frameworki Agile</h2>
              <div className="space-y-3 mb-6">
                {agileFrameworks.map((fw, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{fw.name}</h3>
                    <p className="text-slate-600 text-sm">{fw.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Agile vs Waterfall — porównanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">Agile</th>
                      <th className="text-left p-3 border border-slate-700">Waterfall</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Planowanie", agile: "Iteracyjne, ewolucyjne", waterfall: "Kompletne na początku" },
                      { aspect: "Zmiany wymagań", agile: "Mile widziane", waterfall: "Kosztowne i trudne" },
                      { aspect: "Feedback klienta", agile: "Po każdej iteracji", waterfall: "Na końcu projektu" },
                      { aspect: "Ryzyko", agile: "Niskie (iteracje)", waterfall: "Wysokie (duże wdrożenia)" },
                      { aspect: "Dokumentacja", agile: "Minimalna, wystarczająca", waterfall: "Obszerna" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700">{row.aspect}</td>
                        <td className="p-3 border border-slate-200 text-green-700">{row.agile}</td>
                        <td className="p-3 border border-slate-200 text-slate-500">{row.waterfall}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Tworzenie stron w podejściu Agile</p>
                <p className="text-blue-700 text-sm mb-3">
                  Realizujemy projekty web iteracyjnie — MVP w 2 tygodnie, potem rozwijamy na podstawie feedbacku.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Agile co to jest</h2>
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
