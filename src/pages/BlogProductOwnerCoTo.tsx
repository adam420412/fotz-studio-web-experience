import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Product Owner?",
    answer:
      "Product Owner (PO) to jedna z trzech ról w Scrum — odpowiada za maksymalizację wartości produktu tworzonego przez Scrum Team. Jest właścicielem Product Backlogu: priorytetyzuje, opisuje i porządkuje elementy backlogu tak, by team budował to co tworzy największą wartość dla biznesu i użytkowników. PO jest jedyną osobą uprawnioną do zmiany kolejności i zawartości Product Backlogu. Musi mieć głębokie zrozumienie potrzeb klientów, strategii biznesowej i możliwości technicznych.",
  },
  {
    question: "Czym różni się Product Owner od Product Managera?",
    answer:
      "Product Owner to rola w metodologii Scrum — skupia się na backlogu, sprintach i współpracy z development teamem. Product Manager (PM) to szersza rola biznesowa — odpowiada za strategię produktu, vision, rynek, pricing, go-to-market i długoterminowy roadmap. W dużych organizacjach PM i PO mogą być różnymi osobami: PM definiuje 'co i dlaczego', PO zarządza 'jak i kiedy' w kontekście Scrum. W małych firmach jedna osoba pełni obie role. Product Owner bez Strategic Product Thinking to 'backlog admin'.",
  },
  {
    question: "Jakie są główne odpowiedzialności Product Ownera?",
    answer:
      "Wg Scrum Guide: rozwijanie i zarządzanie Product Goal (cel produktu), tworzenie i jasne komunikowanie Product Backlog Items, porządkowanie Product Backlogu (priorytetyzacja), zapewnienie że backlog jest transparentny i zrozumiały dla Scrum Teamu, dostępność dla Development Teamu do wyjaśniania wymagań, decyzja o przyjęciu lub odrzuceniu wykonanej pracy na Sprint Review. PO może delegować pewne zadania, ale zawsze pozostaje odpowiedzialny za wynik.",
  },
  {
    question: "Jak PO priorytetyzuje backlog?",
    answer:
      "Popularne frameworki priorytetyzacji: RICE (Reach × Impact × Confidence / Effort) — dobry dla danych, MoSCoW (Must Have, Should Have, Could Have, Won't Have) — prosty i transparentny, ICE (Impact × Confidence × Ease) — lżejsza wersja RICE, Kano Model — klasyfikacja na must-be, performance i delighters, Value vs. Effort matrix — wizualna klasyfikacja quick wins vs. big bets. Kluczowe: priorytetyzacja to nie konkurs popularności — PO musi umieć bronić swoich decyzji danymi.",
  },
  {
    question: "Jakie certyfikaty ma Product Owner?",
    answer:
      "Najpopularniejsze certyfikaty PO: CSPO (Certified Scrum Product Owner) — Scrum Alliance, uznany na rynku, wymaga warsztatu 2-dniowego + egzamin; PSPO I/II/III (Professional Scrum Product Owner) — Scrum.org, egzamin online, bardziej techniczny i trudniejszy; SAFe POPM (Product Owner/Product Manager) — w środowiskach SAFe (enterprise Agile). CSPO jest najszerzej rozpoznawalny na rynku polskim i europejskim. PSPO I od Scrum.org jest bardziej wymagający i honorowany w globalnych korporacjach.",
  },
];

const poResponsibilities = [
  { obszar: "Product Vision & Goal", opis: "Definiuje i komunikuje Product Goal — inspirującą wizję gdzie produkt zmierza i dlaczego", aktywności: "Vision workshop, OKR alignment, quarterly strategy review, sprint goal definition" },
  { obszar: "Product Backlog Management", opis: "Tworzy, opisuje, porządkuje i pielęgnuje Product Backlog — serce pracy PO", aktywności: "Backlog grooming/refinement, User Story writing, acceptance criteria, prioritization" },
  { obszar: "Stakeholder Management", opis: "Balansuje wymagania wszystkich stakeholderów i podejmuje decyzje kompromisowe", aktywności: "Stakeholder interviews, roadmap presentations, expectation management, regular updates" },
  { obszar: "User Research & Discovery", opis: "Rozumie potrzeby użytkowników i rynku — PO bez wglądu w klienta to backlog admin", aktywności: "User interviews, customer visits, JTBD analysis, competitive research, NPS analysis" },
  { obszar: "Sprint Collaboration", opis: "Aktywnie uczestniczy w ceremoniach Scrum i jest dostępny dla Developmentu", aktywności: "Sprint Planning, Daily (opcjonalnie), Sprint Review (główna rola), Retrospective" },
  { obszar: "Value Measurement", opis: "Mierzy wartość dostarczanych featury i uczy się na danych", aktywności: "Feature adoption tracking, A/B testing, OKR tracking, business impact measurement" },
];

const poVsPm = [
  { aspekt: "Horyzont", po: "Sprint (1-4 tygodnie), kwartał", pm: "Kwartały, lata — długoterminowa strategia" },
  { aspekt: "Fokus", po: "Backlog, delivery, Scrum ceremonies", pm: "Strategy, market, pricing, GTM, business model" },
  { aspekt: "Kluczowe artefakty", po: "Product Backlog, User Stories, Sprint Goal", pm: "Roadmap, PRD, Business Case, Positioning" },
  { aspekt: "Główni partnerzy", po: "Development Team, Scrum Master", pm: "Sales, Marketing, Finance, Executive" },
  { aspekt: "Mierzone metrykami", po: "Velocity, Sprint Goal attainment, Backlog health", pm: "Revenue, DAU/MAU, NRR, market share, PLG metrics" },
  { aspekt: "Decyzje", po: "Co jest w backlogu, kolejność, acceptance criteria", pm: "Co budujemy (strategyicznie), dla kogo, po ile" },
];

const backlogPrioritization = [
  { framework: "RICE", wzór: "Reach × Impact × Confidence ÷ Effort", kiedy: "Przy dużej liczbie opcji, gdy masz dobre dane ilościowe", zalety: "Obiektywny, skalowalny, wymusza myślenie o effort" },
  { framework: "MoSCoW", wzór: "Must / Should / Could / Won't Have", kiedy: "Na początku projektu, przy stakeholderach z różnymi oczekiwaniami", zalety: "Prosty, transparentny, dobry do negocjacji scope" },
  { framework: "Kano Model", wzór: "Must-be / Performance / Delighter / Indifferent / Reverse", kiedy: "Przy planowaniu strategicznym i odkrywaniu, co napędza satysfakcję", zalety: "Ujawnia ukryte oczekiwania, pomaga w differentiacji" },
  { framework: "Value vs. Effort", wzór: "2x2 matrix: Value (niski/wysoki) × Effort (mały/duży)", kiedy: "Szybka sesja priorytetyzacji z teamem lub stakeholderami", zalety: "Wizualny, szybki, angażuje cały team w dyskusję" },
];

export default function BlogProductOwnerCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Product Owner — co to jest? Rola PO w Scrum i Agile"
        description="Product Owner — definicja, 6 obszarów odpowiedzialności, różnica vs. Product Manager, 4 frameworki priorytetyzacji backlogu i certyfikaty CSPO/PSPO…"
        canonicalUrl="https://fotz.pl/blog/product-owner-co-to"

        keywords="Product Owner co to jest, Product Owner definicja, czym jest Product Owner, Product Owner przykłady, jak działa Product Owner, Product Owner znaczenie, Product Owner przewodnik"

        canonical="https://fotz.pl/blog/product-owner-co-to"
      />
      <ArticleSchema
        title="Product Owner — co to jest i czym zajmuje się PO w Scrum?"
        description="Kompletny przewodnik po roli Product Owner: 6 obszarów odpowiedzialności, różnica vs. Product Manager, frameworki priorytetyzacji i certyfikaty."
        url="https://fotz.pl/blog/product-owner-co-to"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Product Owner", url: "https://fotz.pl/blog/product-owner-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Product Owner", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Product Owner — co to jest i czym się zajmuje?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Product Owner to kluczowa rola w Scrum — właściciel Product Backlogu i strażnik wartości.
            Poznaj 6 obszarów odpowiedzialności, różnicę vs. PM i frameworki priorytetyzacji.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Product Owner?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Product Owner</strong> to jedna z trzech ról w Scrum (obok Scrum Mastera
              i Development Teamu). Jest odpowiedzialny za maksymalizację wartości produktu
              poprzez zarządzanie Product Backlogiem — priorytetyzację, opisywanie i porządkowanie
              elementów tak, by team budował to co generuje największą wartość.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              PO stoi na przecięciu biznesu, technologii i użytkownika. Musi jednocześnie
              rozumieć cele strategiczne firmy, potrzeby klientów i możliwości techniczne.
              "Backlog admin" który tylko zapisuje wymagania — to nie Product Owner.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* 6 obszarów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 obszarów odpowiedzialności Product Ownera</h2>
            <div className="space-y-4">
              {poResponsibilities.map((r, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{r.obszar}</h3>
                      <p className="text-slate-600 text-sm mb-2">{r.opis}</p>
                      <div className="bg-sky-50 rounded p-2 text-xs text-sky-700">
                        <span className="font-semibold">Aktywności: </span>{r.aktywności}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* PO vs PM */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Product Owner vs. Product Manager — porównanie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Aspekt</th>
                    <th className="p-3 text-left">Product Owner (PO)</th>
                    <th className="p-3 text-left">Product Manager (PM)</th>
                  </tr>
                </thead>
                <tbody>
                  {poVsPm.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-700">{row.aspekt}</td>
                      <td className="p-3 text-sky-700 text-sm">{row.po}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.pm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Frameworki priorytetyzacji */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 frameworki priorytetyzacji backlogu</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {backlogPrioritization.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-sky-700 mb-2">{f.framework}</h3>
                  <div className="bg-sky-50 rounded p-2 mb-2 font-mono text-xs text-sky-800">{f.wzór}</div>
                  <p className="text-slate-600 text-sm mb-2"><span className="font-semibold">Kiedy: </span>{f.kiedy}</p>
                  <p className="text-slate-500 text-xs"><span className="font-semibold">Zalety: </span>{f.zalety}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Product Owner</h2>
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

      <RelatedArticles currentArticleId="product-owner-co-to" />
      <ContactSection />
    </Layout>
  );
}
