import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest stakeholder management?",
    answer:
      "Stakeholder management (zarządzanie interesariuszami) to systematyczne identyfikowanie, analizowanie i angażowanie osób lub grup, które mają wpływ na projekt lub organizację albo są przez nie dotknięte. Obejmuje: mapowanie stakeholderów, rozumienie ich interesów i wpływu, budowanie relacji, komunikację i zarządzanie oczekiwaniami. Skuteczne zarządzanie interesariuszami jest kluczowe dla sukcesu projektów, transformacji i każdej inicjatywy wymagającej współpracy.",
  },
  {
    question: "Kto jest stakeholderem?",
    answer:
      "Stakeholder (interesariusz) to każda osoba lub grupa, która: (1) ma wpływ na projekt/decyzję/organizację, lub (2) jest przez nią dotknięta. Wewnętrzni stakeholderzy: pracownicy, menedżerowie, zarząd, board. Zewnętrzni: klienci, dostawcy, partnerzy, inwestorzy, regulatorzy, media, społeczności lokalne. W zarządzaniu projektem: sponsor, PM, team, użytkownicy końcowi, IT, legal, finance — każdy ma inne interesy i inny poziom wpływu.",
  },
  {
    question: "Czym jest macierz stakeholderów?",
    answer:
      "Macierz stakeholderów (Power/Interest Matrix) to narzędzie do kategoryzacji interesariuszy według dwóch wymiarów: władzy/wpływu (power) i zainteresowania (interest). Wynik: 4 grupy — High Power/High Interest (zarządzaj z bliska — kluczowi sojusznicy lub kluczowi ryzyka), High Power/Low Interest (utrzymuj zadowolenie — nie angażuj za dużo), Low Power/High Interest (informuj regularnie), Low Power/Low Interest (monitoruj — minimalne zaangażowanie).",
  },
  {
    question: "Jak angażować trudnych stakeholderów?",
    answer:
      "Strategie dla trudnych interesariuszy: sceptyk o wysokim wpływie — zaangażuj wcześnie, zapytaj o wkład, znajdź wspólne cele; bloker — zrozum prawdziwe obawy (zazwyczaj ukryte), znajdź kompromis lub eskaluj do sponsora; pasywny — zidentyfikuj ich WIIFM (What's In It For Me?), personalizuj komunikację; Loudmouth bez wpływu — nie ignoruj, ale nie pozwól dominować procesu; missing stakeholder — zidentyfikuj i zaproś zanim pojawi się niespodziewanie.",
  },
  {
    question: "Jaka jest różnica między stakeholder management a change management?",
    answer:
      "Stakeholder management skupia się na identyfikacji, analizie i angażowaniu wszystkich zainteresowanych stron — to podejście relacyjne: kto, co chce i jak z nimi pracować. Change management skupia się na przeprowadzeniu ludzi przez zmianę — to podejście procesowe: jak pomóc ludziom zaakceptować i adoptować nową rzeczywistość. Stakeholder management to składnik change management — nie można skutecznie zarządzać zmianą bez zarządzania interesariuszami. Obie dyscypliny wzajemnie się uzupełniają.",
  },
];

const powerInterestMatrix = [
  {
    kwadrant: "Zarządzaj z bliska",
    power: "Wysoki",
    interest: "Wysoki",
    strategia: "Aktywne, regularne angażowanie — spotkania 1:1, wczesny wgląd w decyzje, zbieranie feedbacku",
    przykłady: "Project Sponsor, CEO, Key Decision Maker, główny inwestor",
    kolor: "bg-red-50 border-red-200",
    kolor_badge: "bg-red-600",
  },
  {
    kwadrant: "Utrzymuj zadowolenie",
    power: "Wysoki",
    interest: "Niski",
    strategia: "Regularne briefingi, bez angażowania w detale — podsumowania na wysokim poziomie, szybkie eskalacje gdy potrzeba",
    przykłady: "CFO, Legal, Regulatory Body, senior management poza projektem",
    kolor: "bg-orange-50 border-orange-200",
    kolor_badge: "bg-orange-500",
  },
  {
    kwadrant: "Informuj regularnie",
    power: "Niski",
    interest: "Wysoki",
    strategia: "Regularna komunikacja statusu, angażowanie w feedback i testowanie — cenni doradcy i ambasadorzy",
    przykłady: "End Users, Champions wewnętrzni, zainteresowani pracownicy",
    kolor: "bg-blue-50 border-blue-200",
    kolor_badge: "bg-blue-600",
  },
  {
    kwadrant: "Monitoruj",
    power: "Niski",
    interest: "Niski",
    strategia: "Minimalne zaangażowanie — ogólne komunikaty, baczna obserwacja czy status się nie zmienia",
    przykłady: "Dostawcy zewnętrzni, niezwiązani pracownicy, media branżowe",
    kolor: "bg-slate-50 border-slate-200",
    kolor_badge: "bg-slate-400",
  },
];

const communicationPlan = [
  { typ: "Sponsor / Exec", częstotliwość: "Co 2 tygodnie", format: "1:1 lub Executive Summary (1 strona)", treść: "Status vs. plan, kluczowe ryzyka, decyzje wymagające zatwierdzenia" },
  { typ: "Core Team", częstotliwość: "Tygodniowo", format: "Sprint Review lub Weekly Standup", treść: "Postęp zadań, blokery, priorytety tygodnia" },
  { typ: "Extended Stakeholders", częstotliwość: "Miesięcznie", format: "Newsletter lub Town Hall", treść: "Kamienie milowe, sukcesy, zmiany, co dalej" },
  { typ: "End Users", częstotliwość: "Przed wdrożeniem + ad hoc", format: "Warsztaty, FAQ, email", treść: "Co się zmieni dla nich, kiedy, jak się przygotować" },
  { typ: "Board / Inwestorzy", częstotliwość: "Kwartalnie", format: "Board Update (deck)", treść: "KPIs vs. plan, strategiczne decyzje, Q+1 priorytety" },
];

const stakeholderMapSteps = [
  { krok: "Identyfikacja", opis: "Lista wszystkich osób i grup które mają wpływ lub są dotknięte projektem. Nie pomijaj nikogo — lepiej mieć za dużo i usunąć niż odkryć zaskoczonego stakeholdera w trakcie realizacji." },
  { krok: "Analiza", opis: "Dla każdego stakeholdera: jaki ma wpływ? Jakie są jego interesy? Jakie potencjalne obawy? Jaki jest jego aktualny poziom zaangażowania (aware, supportive, neutral, resistant)?" },
  { krok: "Mapowanie", opis: "Umieść stakeholderów na macierzy Power/Interest. Zidentyfikuj klastry i zależności — kto na kogo ma wpływ?" },
  { krok: "Strategia angażowania", opis: "Dla każdego kwadrantu macierzy: jak angażować? Jak często? Jakim kanałem? Co komunikować? Kto jest responsible z Twojej strony?" },
  { krok: "Plan komunikacji", opis: "Sformalizuj strategie w plan komunikacji: kto, co, kiedy, jak, przez kogo. Dokumentuj i udostępnij teamowi." },
  { krok: "Monitorowanie i aktualizacja", opis: "Mapa stakeholderów i plan komunikacji wymagają regularnych aktualizacji — nowi interesariusze, zmieniające się priorytety, rosnące lub mlejące wsparcie." },
];

export default function BlogStakeholderManagementCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Stakeholder Management — co to jest? Zarządzanie interesariuszami"
        description="Stakeholder management — definicja, macierz Power/Interest, 6 kroków mapowania, plan komunikacji i strategie dla trudnych interesariuszy. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/stakeholder-management-co-to"

        keywords="Stakeholder Management co to jest, Stakeholder Management definicja, czym jest Stakeholder Management, Stakeholder Management przykłady, jak działa Stakeholder Management, Stakeholder Management znaczenie, Stakeholder Management przewodnik"

        canonical="https://fotz.pl/blog/stakeholder-management-co-to"
      />
      <ArticleSchema
        title="Stakeholder Management — co to jest i jak zarządzać interesariuszami?"
        description="Kompletny przewodnik po stakeholder management: macierz Power/Interest, 6 kroków mapowania, plan komunikacji i strategie angażowania."
        url="https://fotz.pl/blog/stakeholder-management-co-to"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Stakeholder Management", url: "https://fotz.pl/blog/stakeholder-management-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Stakeholder Management" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Stakeholder Management — co to jest i jak zarządzać interesariuszami?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Zarządzanie interesariuszami to kluczowa kompetencja każdego lidera i project managera.
            Poznaj macierz Power/Interest, 6 kroków mapowania i plan komunikacji.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest stakeholder management?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Stakeholder management</strong> to systematyczne identyfikowanie, analizowanie
              i angażowanie osób lub grup które mają wpływ na projekt lub organizację —
              lub są przez nie dotknięte. To nie tylko "informowanie" — to budowanie relacji,
              zarządzanie oczekiwaniami i zapewnienie, że kluczowi interesariusze wspierają
              (lub przynajmniej nie blokują) realizacji celów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania PMI pokazują, że niewystarczające zaangażowanie stakeholderów jest
              jedną z trzech głównych przyczyn niepowodzenia projektów. Zaskoczony stakeholder
              o wysokim wpływie może w ciągu jednej rozmowy zatrzymać projekt trwający miesiącami.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* Macierz Power/Interest */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Macierz Power/Interest — 4 typy stakeholderów</h2>
            <p className="text-slate-600 mb-8">Kategoryzuj każdego interesariusza według wpływu (power) i zainteresowania (interest) — to determinuje strategię angażowania.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {powerInterestMatrix.map((k, i) => (
                <div key={i} className={`${k.kolor} rounded-xl p-5 border`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`${k.kolor_badge} text-white text-xs font-bold rounded-lg px-3 py-1`}>Power: {k.power}</div>
                    <div className="bg-slate-700 text-white text-xs font-bold rounded-lg px-3 py-1">Interest: {k.interest}</div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{k.kwadrant}</h3>
                  <p className="text-slate-600 text-sm mb-3">{k.strategia}</p>
                  <div className="bg-white rounded p-2 text-xs text-slate-500">
                    <span className="font-semibold">Przykłady: </span>{k.przykłady}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 kroków */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kroków mapowania i zarządzania stakeholderami</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {stakeholderMapSteps.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{s.krok}</h3>
                      <p className="text-slate-600 text-sm">{s.opis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Plan komunikacji */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Plan komunikacji z interesariuszami</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Typ interesariusza</th>
                    <th className="p-3 text-left">Częstotliwość</th>
                    <th className="p-3 text-left">Format</th>
                    <th className="p-3 text-left">Treść</th>
                  </tr>
                </thead>
                <tbody>
                  {communicationPlan.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-violet-700">{r.typ}</td>
                      <td className="p-3 text-slate-600 text-sm">{r.częstotliwość}</td>
                      <td className="p-3 text-slate-600 text-sm">{r.format}</td>
                      <td className="p-3 text-slate-600 text-sm">{r.treść}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — stakeholder management</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
