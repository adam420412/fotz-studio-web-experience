import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap, Users, Calendar, TrendingUp } from "lucide-react";
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

export default function BlogScrumCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Scrum — co to jest i jak działa metodologia?" },
  ];

  const scrumRoles = [
    { icon: Users, role: "Product Owner (PO)", desc: "Właściciel produktu — definiuje wymagania, zarządza backlogiem, priorytetyzuje zadania. Reprezentuje interesy biznesu i użytkowników." },
    { icon: Zap, role: "Scrum Master (SM)", desc: "Coach i facilitator zespołu — dba o przestrzeganie Scruma, usuwa przeszkody, chroni zespół od zewnętrznych zakłóceń." },
    { icon: Calendar, role: "Zespół deweloperski", desc: "3-9 osób realizujących zadania (programiści, designerzy, testerzy). Samoorganizujący się, odpowiada za dostarczanie działającego software." },
  ];

  const scrumEvents = [
    { name: "Sprint Planning", freq: "Raz na sprint", desc: "Planowanie co zostanie zrobione w tym sprincie. Zespół wybiera zadania z backlogu." },
    { name: "Daily Scrum (standup)", freq: "Codziennie, 15 min", desc: "Co zrobiłem wczoraj, co zrobię dziś, co mnie blokuje. Szybka synchronizacja zespołu." },
    { name: "Sprint Review", freq: "Na końcu sprintu", desc: "Prezentacja efektów pracy stakeholderom. Demo działającego produktu." },
    { name: "Sprint Retrospective", freq: "Na końcu sprintu", desc: "Co poszło dobrze, co można ulepszyć. Continuous improvement — serce Scruma." },
  ];

  const faqItems = [
    {
      question: "Co to jest Scrum?",
      answer:
        "Scrum to zwinny (agile) framework do zarządzania i realizacji złożonych projektów, szczególnie w IT i tworzeniu oprogramowania. Praca odbywa się w krótkich iteracjach zwanych sprintami (1-4 tygodnie), po każdym z których powstaje działający produkt. Scrum opiera się na trzech filarach: transparentność, inspekcja i adaptacja. Jest częścią szerszego podejścia Agile.",
    },
    {
      question: "Czym różni się Scrum od Agile?",
      answer:
        "Agile to filozofia i zbiór wartości opisanych w Manifeście Agile (2001) — elastyczność, współpraca z klientem, reagowanie na zmiany. Scrum to konkretny framework (metodologia) implementująca wartości Agile. Analogia: Agile to filozofia, Scrum to przepis na jej realizację. Inne frameworki agile to Kanban, SAFe, Extreme Programming (XP). Scrum jest najpopularniejszy — używa go ~60% firm IT.",
    },
    {
      question: "Jak długi jest sprint w Scrum?",
      answer:
        "Sprint trwa typowo 1-4 tygodnie, najczęściej 2 tygodnie. Krótsze sprinty (1 tydzień) = szybsze feedback loopy, ale więcej ceremonii (planowanie, review, retro). Dłuższe sprinty (4 tygodnie) = więcej czasu na realizację, ale wolniejsza adaptacja. Scrum Guide zaleca by sprint nie był dłuższy niż miesiąc. Po każdym sprincie powstaje 'Increment' — działający, potencjalnie wysyłalny produkt.",
    },
    {
      question: "Co to jest backlog produktu w Scrum?",
      answer:
        "Product Backlog to lista wszystkich wymaganych funkcjonalności, ulepszeń i poprawek produktu, priorytetyzowana przez Product Ownera. Zawiera User Stories (historyjki użytkownika) w formacie: 'Jako [użytkownik], chcę [funkcja], żeby [korzyść]'. Backlog jest żywy — zmienia się wraz z nowymi wymaganiami. Sprint Backlog to podzbiór zadań wybranych do realizacji w bieżącym sprincie.",
    },
    {
      question: "Czy Scrum sprawdza się poza IT?",
      answer:
        "Tak — Scrum jest coraz częściej stosowany poza IT: marketing (kampanie w sprintach, content planning), HR (onboarding, rekrutacja), produkcja i hardware development, badania i nauka, a nawet szkolnictwo. Kluczowe warunki: złożone zadania (nie rutynowe), potrzeba adaptacji w trakcie realizacji, możliwość tworzenia małych iteracyjnych wyników. Scrum jest mniej skuteczny przy prostych, powtarzalnych procesach (tu lepiej Kanban).",
    },
    {
      question: "Jak zostać Scrum Masterem?",
      answer:
        "Ścieżka do zostania Scrum Masterem: 1) Naucz się teorii — Scrum Guide (bezpłatny na scrum.org), książki ('Scrum' Jeffa Sutherlanda). 2) Zdobądź certyfikat — PSM I (Professional Scrum Master, scrum.org, ok. 150$) lub CSM (Certified ScrumMaster, Scrum Alliance, droższy). 3) Zdobywaj praktykę — nawet w małych projektach w swojej firmie. 4) Rozwijaj umiejętności miękkie — coaching, facylitacja, rozwiązywanie konfliktów. Certyfikat PSM I to dobry start.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Scrum — co to jest i jak działa metodologia pracy? | fotz.pl"
        description="Scrum co to jest — wyjaśniamy jak działa framework Scrum, role (Product Owner, Scrum Master), ceremonie i jak Scrum różni się od Agile. Poradnik dla firm."
        canonical="https://fotz.pl/blog/scrum-co-to-jest"
      />
      <ArticleSchema
        title="Scrum — co to jest i jak działa metodologia?"
        description="Czym jest Scrum, role w Scrum (Product Owner, Scrum Master, Zespół), ceremonie (sprint, standup, retro) i różnica między Scrum a Agile."
        datePublished="2025-04-09"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/scrum-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Zarządzanie projektami</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Scrum — co to jest i jak działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Scrum to najpopularniejszy framework Agile — praca w krótkich sprintach, codzienne standupy
                i ciągłe doskonalenie. Jak działa Scrum i kiedy go wdrożyć?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Trzy role w Scrum</h2>
              <div className="space-y-4 mb-6">
                {scrumRoles.map((role, idx) => {
                  const Icon = role.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-slate-900 text-sm">{role.role}</h3>
                      </div>
                      <p className="text-slate-600 text-sm">{role.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Ceremonie Scrum (4 spotkania)</h2>
              <div className="space-y-3 mb-6">
                {scrumEvents.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900 text-sm">{event.name}</span>
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{event.freq}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak Scrum działa w projekcie stronę www?</h2>
              <p className="text-slate-700 mb-4 text-sm">
                Przy tworzeniu strony internetowej lub sklepu, Scrum pozwala na iteracyjne dostarczanie
                funkcjonalności i szybkie reagowanie na feedback klienta:
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Sprint 1 (2 tyg.): Strona główna, o nas, kontakt — wersja MVP",
                  "Sprint 2: Podstrony usług, blog, SEO podstawowe",
                  "Sprint 3: Formularze, integracje (GA4, GTM), optymalizacja",
                  "Sprint 4: Sklep/e-commerce, bramki płatności, testy",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-700 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-bold text-blue-600">→</span> {item}
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Szukasz agencji pracującej w Scrum?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Realizujemy projekty web iteracyjnie — masz wgląd w postępy na każdym etapie.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Scrum co to jest</h2>
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
          heading="Zrealizujemy Twój projekt zwinnie i transparentnie"
          subheading="Iteracyjne podejście, regularne demo i pełna widoczność postępów."
        />
      </Layout>
    </>
  );
}
