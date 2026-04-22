import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest dług techniczny (tech debt)?",
    answer:
      "Dług techniczny (technical debt) to koszt dodatkowej pracy wynikający z wyboru szybkiego, tymczasowego rozwiązania zamiast właściwego, długoterminowego podejścia. Pojęcie sformułowane przez Warda Cunninghama — analogia do długu finansowego: pożyczasz teraz (szybki kod), płacisz odsetki (wolniejszy development, więcej bugów) i musisz spłacić kapitał (refaktoryzacja). Nie zawsze jest złe — świadomy dług to decyzja biznesowa, nieświadomy to problem.",
  },
  {
    question: "Jakie są rodzaje długu technicznego?",
    answer:
      "Quadrant Martina Fowlera: 1) Deliberate/Reckless (celowy/nierozważny) — 'Nie mamy czasu na design' — najgorszy rodzaj, 2) Deliberate/Prudent (celowy/roztropny) — 'Shipmujemy teraz, refaktoryzujemy później' — świadoma decyzja, 3) Inadvertent/Reckless (nieumyślny/nierozważny) — 'Co to jest layered architecture?' — brak wiedzy, 4) Inadvertent/Prudent (nieumyślny/roztropny) — 'Teraz wiemy jak powinniśmy to byli zrobić' — wiedza zdobyta przez doświadczenie.",
  },
  {
    question: "Jak zmierzyć dług techniczny?",
    answer:
      "Metody pomiaru: Code quality metrics (cyclomatic complexity, code coverage, duplication — SonarQube, CodeClimate), Velocity tracking (czy team development spowalnia w czasie?), Bug rate (rosnąca liczba bugów na feature?), Onboarding time (jak długo nowy developer rozumie system?), Time to ship (jak długo trwa dodanie prostej funkcji?). SQALE model i Technical Debt Ratio (koszt naprawy / koszt zbudowania). Brak jednej liczby — kombinacja wskaźników.",
  },
  {
    question: "Jak przekonać management do spłaty długu technicznego?",
    answer:
      "Podejście biznesowe: 1) Przelicz na pieniądze — 'nasz tech debt spowalnia development o 30%, co kosztuje X PLN miesięcznie w dodatkowym czasie zespołu', 2) Pokaż trend — velocity spada, bug rate rośnie, 3) Połącz z business risk — 'stara architektura to problem skalowania gdy urosniemy', 4) Zaproponuj konkretny plan — nie 'refaktoryzujmy wszystko' lecz '20% capacity na tech debt w każdym sprincie'. Unikaj żargonu technicznego.",
  },
  {
    question: "Ile czasu poświęcać na spłatę długu technicznego?",
    answer:
      "Popularne podejścia: 20% reguła (Google, Atlassian) — 1 dzień w tygodniu lub 1 sprint na 5 na tech debt i improvements. Boy Scout Rule — zawsze zostaw kod lepszym niż go znalazłeś (małe, ciągłe sprzątanie). Sprint dedykowany — co kwartał lub pół roku sprint całkowicie poświęcony refaktoryzacji. Kombinacja jest najskuteczniejsza: ciągłe małe ulepszenia + okazjonalne większe inicjatywy. Klucz: regularność, nie maratony.",
  },
];

const techDebtTypes = [
  { typ: "Dług architektoniczny", opis: "Błędne decyzje projektowe na poziomie systemu — monolity, tight coupling, brak separacji warstw", wpływ: "Krytyczny — trudno dodać nowe funkcje bez przepisania", przykład: "Wszystka logika biznesowa w kontrolerach MVC" },
  { typ: "Dług kodu (Code debt)", opis: "Niechlujny, nieczytelny, zduplikowany lub zbyt skomplikowany kod", wpływ: "Wysoki — wolniejszy development, więcej bugów", przykład: "Metody po 500 linii, duplikacja kodu w 10 miejscach" },
  { typ: "Dług testów", opis: "Brak lub niewystarczające testy jednostkowe, integracyjne, E2E", wpływ: "Wysoki — zmiany ryzykowne, regresje częste", przykład: "Code coverage 10%, brak testów integracyjnych" },
  { typ: "Dług dokumentacji", opis: "Brak lub nieaktualna dokumentacja techniczna i API", wpływ: "Średni — onboarding nowych developerów trudny", przykład: "Brak README, nieaktualne diagramy architektury" },
  { typ: "Dług zależności", opis: "Przestarzałe biblioteki, frameworki, język — wersje EOL", wpływ: "Średni-wysoki — security risk, brak nowych funkcji", przykład: "Node 12 EOL, Angular 2, jQuery 1.x w produkcji" },
  { typ: "Dług infrastruktury", opis: "Przestarzała infrastruktura, brak automatyzacji, ręczne procesy", wpływ: "Wysoki — wolny deployment, ryzyko ludzkiego błędu", przykład: "Ręczny deployment przez FTP, brak CI/CD" },
];

const managingApproaches = [
  { podejście: "Boy Scout Rule", opis: "Zawsze zostaw kod lepszym niż go znalazłeś — małe ulepszenia przy okazji każdego PR", kiedy: "Codziennie, przy każdej zmianie kodu" },
  { podejście: "20% capacity", opis: "Stała alokacja 20% czasu sprintu na tech debt i improvements — bez negocjacji", kiedy: "Co sprint — regularna, przewidywalna spłata" },
  { podejście: "Tech debt backlog", opis: "Dedykowana lista tech debt items z priorytetami i szacunkami — traktowane jak user stories", kiedy: "Priorytetyzacja podczas sprint planning" },
  { podejście: "Hardening sprint", opis: "Dedykowany sprint lub miesiąc skupiony wyłącznie na jakości, refaktoryzacji i tech debt", kiedy: "Raz na kwartał lub pół roku" },
  { podejście: "Strangler Fig Pattern", opis: "Stopniowe zastępowanie starego systemu nowym — nie big bang rewrite, lecz ewolucja", kiedy: "Legacy system wymagający zastąpienia" },
];

export default function BlogTechDebtCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Dług techniczny (tech debt) — co to jest? Jak zarządzać i spłacać"
        description="Dług techniczny (technical debt) — definicja, 6 rodzajów, quadrant Fowlera, jak mierzyć i 5 strategii zarządzania. Kompletny przewodnik po tech debt dla…"
        canonical="https://fotz.pl/blog/dług-techniczny-co-to"

        keywords="Dług techniczny (tech debt) co to jest, Dług techniczny (tech debt) definicja, czym jest Dług techniczny (tech debt), Dług techniczny (tech debt) przykłady, jak działa Dług techniczny (tech debt), Dług techniczny (tech debt) znaczenie, Dług techniczny (tech debt) przewodnik"

        canonical="https://fotz.pl/blog/dług-techniczny-co-to"
      />
      <ArticleSchema
        title="Dług techniczny (tech debt) — co to jest i jak zarządzać?"
        description="Kompletny przewodnik po długu technicznym: quadrant Fowlera, 6 typów tech debt, jak mierzyć i 5 strategii zarządzania (Boy Scout Rule, 20%, hardening sprint)."
        url="https://fotz.pl/blog/dług-techniczny-co-to"
        datePublished="2024-01-25"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Dług Techniczny", url: "https://fotz.pl/blog/dług-techniczny-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Dług Techniczny", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Dług Techniczny (Tech Debt) — co to jest i jak zarządzać?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tech debt spowalnia każdy rosnący produkt. Poznaj 6 typów długu technicznego,
            jak go mierzyć i 5 strategii spłaty — od Boy Scout Rule po hardening sprint.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest dług techniczny?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Dług techniczny (technical debt)</strong> to metafora sformułowana przez Ward Cunninghama opisująca
              koszt dodatkowej pracy wynikający z wyboru szybkiego, tymczasowego rozwiązania zamiast właściwego.
              Jak dług finansowy: pożyczasz teraz (szybki kod), płacisz odsetki (wolniejszy development)
              i musisz w końcu spłacić kapitał (refaktoryzacja).
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Dług techniczny nie jest zawsze zły — świadomy dług (ship now, refactor later) to racjonalna decyzja biznesowa.
              Nieświadomy dług i dług ignorowany to problem który z czasem paraliżuje całe organizacje.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "Ward Cunningham", opis: "twórca pojęcia technical debt — analogia do długu finansowego w programowaniu" },
                { stat: "42%", opis: "czasu developerów tracone na radzenie sobie z tech debt wg ankiet Stack Overflow" },
                { stat: "85 mld USD", opis: "szacowany roczny koszt tech debt w samych USA wg Stripe Developer Survey" },
              ].map((s, i) => (
                <div key={i} className="bg-red-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-red-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 rodzajów długu technicznego</h2>
            <div className="space-y-4">
              {techDebtTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{t.typ}</h3>
                      <p className="text-slate-600 text-sm mb-2">{t.opis}</p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div className="bg-red-50 rounded p-2">
                          <p className="text-xs font-semibold text-red-500 mb-1">Wpływ:</p>
                          <p className="text-red-700">{t.wpływ}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                          <p className="text-slate-600 italic">{t.przykład}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 strategii zarządzania długiem technicznym</h2>
            <div className="space-y-4">
              {managingApproaches.map((a, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-700 text-white rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 text-center leading-tight">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-bold text-slate-900">{a.podejście}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{a.kiedy}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{a.opis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — dług techniczny</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="dług-techniczny-co-to" />
      <ContactSection />
    </Layout>
  );
}
