import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, RefreshCw, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogLeanStartupCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Lean Startup — co to jest? Metodologia budowania startupów" },
  ];

  const buildMeasureLearn = [
    {
      phase: "Build (Buduj)",
      desc: "Stwórz MVP (Minimum Viable Product) — najprostszą wersję produktu która testuje kluczowe założenie. Nie buduj pełnego produktu — buduj tyle ile potrzeba żeby uczyć się.",
      key: "MVP nie musi być oprogramowaniem. Może być landing page, ręczny proces (concierge MVP), prezentacja lub video (Dropbox).",
      time: "Jak najkrócej — tygodnie, nie miesiące.",
    },
    {
      phase: "Measure (Mierz)",
      desc: "Zmierz jak użytkownicy reagują na MVP. Nie zbieraj vanity metrics — zbieraj Actionable Metrics które pokazują czy hipoteza jest prawdziwa czy fałszywa.",
      key: "Actionable metrics: conversion rate, retention, activation. Vanity metrics: page views, registered users (bez aktywności).",
      time: "Minimalny okres żeby zebrać statystycznie znaczące dane.",
    },
    {
      phase: "Learn (Ucz się)",
      desc: "Analizuj dane i decyduj: Pivot (zmień kierunek) czy Persevere (kontynuuj)? Nauka waliduje lub obala założenia biznesowe.",
      key: "Pivot nie jest porażką — to racjonalna reakcja na dane. Instagram, YouTube, Slack — wszystkie były pivotami.",
      time: "Decyzja na podstawie danych + jakościowych insightów z klientami.",
    },
  ];

  const mvpTypes = [
    { type: "Landing Page MVP", desc: "Strona opisująca produkt który jeszcze nie istnieje. Zbiera emaile lub pre-rejestracje. Mierzy interest przed budowaniem. Przykład: Dropbox video (2008)." },
    { type: "Concierge MVP", desc: "Ręczne dostarczanie usługi którą planuje automatyzować. Food on the Table — CEO osobiście kupował zakupy dla pierwszych klientów." },
    { type: "Wizard of Oz MVP", desc: "Produkt wygląda jak działa automatycznie ale jest obsługiwany ręcznie przez ludzi. Klienci myślą że to tech, za kurtyną są ludzie." },
    { type: "Explainer Video MVP", desc: "Video wyjaśniające produkt. Dropbox zebrał 75,000 emaili dzięki 3-minutowemu video przed napisaniem jednej linii kodu." },
    { type: "Prototype MVP", desc: "Klikalna makieta (Figma) bez działającego backendu. Do testów UX i zbierania feedbacku od potencjalnych klientów." },
    { type: "Single Feature MVP", desc: "Pełny produkt ale z jedną kluczową funkcją. Twitter: tylko tweety. Instagram: tylko zdjęcia z filtrami. Dropbox: tylko sync plików." },
  ];

  const faqItems = [
    {
      question: "Co to jest Lean Startup?",
      answer: "Lean Startup to metodologia budowania startupów autorstwa Erica Riesa (książka 2011). Oparta na trzech filarach: Build-Measure-Learn Loop (cykl buduj-mierz-ucz się), Validated Learning (uczenie oparte na danych, nie intuicji), Innovation Accounting (metryki które mierzą faktyczny postęp). Lean Startup reaguje na tradycyjne podejście 'build it and they will come' które prowadziło do budowania przez lata produktów których nikt nie chciał. Kluczowe założenie: startup to eksperyment, nie miniaturowa wersja dużej firmy. Sukces nie polega na wykonaniu planu — polega na jak najszybszym uczeniu się czego rynek naprawdę chce. Lean Startup jest inspirowany: Toyota Production System (eliminacja waste), Agile development, Customer Development (Steve Blank), Design Thinking. Zastosowanie: nie tylko startupy. Lean Startup używany jest w korporacyjnych jednostkach innowacji, R&D i nowych product lines.",
    },
    {
      question: "Co to jest MVP (Minimum Viable Product)?",
      answer: "MVP (Minimum Viable Product) to najprostsza wersja produktu która pozwala zebrać maksimum wiedzy o klientach z minimalnym wysiłkiem. Eric Ries: 'MVP allows a team to collect the maximum amount of validated learning about customers with the least effort.' Kluczowe nieporozumienie: MVP nie jest produktem ze zredukowanymi funkcjami. MVP to narzędzie do nauki — może być landing page, video, ankietą lub ręcznym serwisem. Pytanie nie brzmi 'co minimalnie możemy zbudować?' ale 'co najmiej musimy zbudować żeby przetestować nasze kluczowe założenie?' Przykłady MVP: Dropbox: 3-minutowe screencast video zamiast działającego softu. 75,000 emaili pre-rejestracji. Buffer: landing page z planami cenowymi. Zbieranie emaili od osób gotowych zapłacić. Airbnb: manual website dla jednego mieszkania founderów. Zappos: zdjęcia butów ze sklepów bez ich zakupu — dropshipping ręczny. Błąd: budowanie MVP przez 6 miesięcy. Prawdziwe MVP to tygodnie lub dni.",
    },
    {
      question: "Czym jest pivot w kontekście Lean Startup?",
      answer: "Pivot to strukturalna zmiana kierunku biznesu oparta na validated learning — nie porażka, ale racjonalna decyzja oparta na danych. Eric Ries definiuje pivot jako 'structured course correction designed to test a new fundamental hypothesis about the product, strategy, and engine of growth'. Typy pivotów: Zoom-in pivot: to co było jedną funkcją staje się całym produktem. Zoom-out pivot: to co było całym produktem staje się jedną funkcją. Customer segment pivot: ten sam produkt dla innego segmentu klientów. Customer need pivot: inny problem tego samego klienta. Platform pivot: z aplikacji do platformy lub odwrotnie. Business architecture pivot: high margin niche → high volume commodity (lub odwrotnie). Słynne pivoty: Instagram — był Burbn (mobilna gra check-in), zredukowany do zdjęć i filtrów. YouTube — był dating site z video prank, zbierał tylko video. Slack — był grą Glitch (MMORPG), internal chat team stał się produktem. Twitter — był Odeo (podcast startup). Kiedy pivotować: po nieudanym Build-Measure-Learn cycle. Gdy metryki nie rosną mimo iteracji. Gdy segment klientów się nie aktywuje.",
    },
    {
      question: "Jak Lean Startup różni się od tradycyjnego planowania biznesu?",
      answer: "Tradycyjne podejście vs Lean Startup: Tradycyjne: szczegółowy biznesplan (50+ stron) → szukanie finansowania → budowanie produktu przez 12-18 miesięcy → launch → (zazwyczaj) porażka. Lean Startup: Minimum Viable Product w tygodnie → testowanie z klientami → iteracja → pivot lub persevere → skalowanie dopiero gdy walidowane. Kluczowe różnice: Tradycyjne: zakłada że wiesz czego chcą klienci. Lean: zakłada że nie wiesz — musisz się dowiedzieć. Tradycyjne: sukces = realizacja planu. Lean: sukces = validated learning (dowiedzieć się czego chce rynek). Tradycyjne: failure = nie zrealizowałeś planu. Lean: failure = uczysz się czegoś co zmienia kierunek. Steve Blank (mentor Riesa): 'No business plan survives first contact with customers.' Business Model Canvas (Alexander Osterwalder) + Lean Startup = nowoczesny startup toolkit. Canvas zastępuje biznesplan jako living document zamiast statycznego planu.",
    },
    {
      question: "Jak mierzyć postęp w Lean Startup — Innovation Accounting?",
      answer: "Innovation Accounting to alternatywny system mierzenia postępu dla startupów — zamiast standardowych wskaźników finansowych które nie mają sensu na wczesnym etapie. Problem: jak mierzysz postęp gdy nie masz przychodów lub są minimalne? Tradycyjne metryki (revenue, EBITDA) nie działają w fazie discovery. Lean Startup framework: 3 etapy: Establish Baseline — zmierz gdzie jesteś teraz. Pierwsze metryki (nawet ze słabymi wynikami). Tune the Engine — iteracje żeby poprawić jedną metrykę na raz. Walidacja czy growth engine działa. Pivot or Persevere — decyzja oparta na czy metryki poprawiają się szybko enough. Kluczowe metryki per engine of growth: Sticky Engine: retention, churn rate, LTV. Viral Engine: viral coefficient (k-factor), user-to-user invitation rate. Paid Engine: CAC, LTV/CAC ratio, payback period. Vanity vs Actionable Metrics: Vanity: total registered users, total page views, app downloads. Actionable: DAU/MAU ratio, activation rate, cohort retention, revenue per user. Narzędzie: Cohort Analysis — porównaj grupy użytkowników którzy zaczęli w różnych miesiącach. Poprawa cohort-on-cohort = prawdziwy postęp.",
    },
    {
      question: "Jak stosować Lean Startup w korporacji lub dużej firmie?",
      answer: "Lean Startup w korporacji — corporate innovation: Wyzwania: korporacyjna biurokracja spowalnia Build-Measure-Learn. Kwartalne planowanie i budżetowanie nie pasuje do iteracyjnego podejścia. Risk aversion kulturowa — 'fail fast' sprzeczne z korporacyjną kulturą. Jak adapotować: Innovation labs / incubators: oddzielne jednostki z własnym budżetem i zasadami. Przykłady: Google X, Amazon Lab126, Volkswagen Innovation Hub. Internal startups: małe cross-functional teamy działające jak startup z dedykowanym runway. Governance przez milestones: inwestycja etapami (nie roczny budżet) — analogia VC gate reviews. Jeśli MVP nie waliduje — stop. Metryki adaptowane do korporacji: czas od pomysłu do pierwszego klienta. Koszt validated learning (ile PLN per insight). Czas od hipotezy do decyzji pivot/persevere. Polecane zasoby: 'The Innovator's Dilemma' (Clayton Christensen), 'The Lean Startup' (Eric Ries), 'Corporate Startup' (Tendayi Viki). Case study: GE FastWorks — program Lean Startup dla 300k pracowników GE. Redukcja czasu go-to-market z lat do miesięcy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Lean Startup — co to jest? Metodologia budowania startupów"
        description="Lean Startup co to jest — wyjaśniamy czym jest metodologia Lean Startup, Build-Measure-Learn, MVP, pivot, Innovation Accounting i zastosowanie w korporacjach."
        canonical="https://fotz.pl/blog/lean-startup-co-to"

        keywords="Lean Startup co to jest, Lean Startup definicja, czym jest Lean Startup, Lean Startup startup, Lean Startup jak liczyć, Lean Startup wzór, Lean Startup przykłady"
      />
      <ArticleSchema
        title="Lean Startup — co to jest? Metodologia budowania startupów"
        description="Czym jest Lean Startup, Build-Measure-Learn loop, typy MVP, pivot, Innovation Accounting i jak stosować metodologię w korporacji."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/lean-startup-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><RefreshCw className="w-4 h-4" /> Startup / Metodologia</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Lean Startup — co to jest i jak stosować metodologię?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Lean Startup to metodologia budowania startupów przez szybkie eksperymenty i iteracje.
                Build-Measure-Learn: buduj MVP, mierz, ucz się — zamiast lat budowania bez walidacji.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Build-Measure-Learn — cykl Lean Startup</h2>
              <div className="space-y-4 mb-6">
                {buildMeasureLearn.map((p, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-2">{p.phase}</p>
                    <p className="text-slate-600 text-xs mb-2">{p.desc}</p>
                    <div className="flex items-start gap-2 mb-1">
                      <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-700 text-xs">{p.key}</p>
                    </div>
                    <p className="text-slate-400 text-xs">Czas: {p.time}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Typy MVP — przykłady</h2>
              <div className="space-y-3 mb-6">
                {mvpTypes.map((m, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1">{m.type}</p>
                    <p className="text-slate-600 text-xs">{m.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Testujesz produkt lub potrzebujesz landing page MVP?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Szybkie strony landing i MVP marketing pages — pomagamy zwalidować pomysł zanim zaczniesz budować.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Landing pages MVP — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Lean Startup co to jest</h2>
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
