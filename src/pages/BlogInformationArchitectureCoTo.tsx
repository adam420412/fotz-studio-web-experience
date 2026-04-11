import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest architektura informacji (IA)?",
    answer:
      "Architektura informacji (Information Architecture, IA) to dyscyplina projektowania struktury, organizacji i nawigacji informacji w systemach cyfrowych — stronach www, aplikacjach, intranetach. IA odpowiada na pytanie: jak zorganizować treści, żeby użytkownicy mogli łatwo znaleźć to, czego szukają? Obejmuje taksonomię (klasyfikację treści), nawigację, wyszukiwanie, etykiety i metadane.",
  },
  {
    question: "Jakie są komponenty architektury informacji?",
    answer:
      "Według Petera Morville'a i Lou Rosenfelda (twórców IA) architektura informacji składa się z 4 komponentów: Organization Systems (jak grupujemy treści), Labeling Systems (jak nazywamy kategorie i linki), Navigation Systems (jak użytkownicy przemieszczają się między treściami) i Search Systems (jak wyszukują informacje). Wszystkie 4 elementy muszą działać spójnie.",
  },
  {
    question: "Czym różni się architektura informacji od UX designu?",
    answer:
      "IA to podstruktura UX — jeden z fundamentów projektowania doświadczeń. UX design jest szerszy i obejmuje IA, ale też: visual design, interaction design, content design, usability testing i research. IA skupia się konkretnie na strukturze i organizacji informacji. Można powiedzieć, że IA to 'szkielet' produktu, a UX to całościowe 'ciało i dusza'.",
  },
  {
    question: "Co to jest card sorting i jak go przeprowadzić?",
    answer:
      "Card sorting to metoda badawcza IA, gdzie użytkownicy grupują karteczki z treściami/funkcjami w logiczne kategorie. Open card sorting — użytkownicy sami tworzą kategorie (odkrywa mentalne modele). Closed card sorting — użytkownicy przyporządkowują do gotowych kategorii (testuje istniejącą strukturę). Wyniki pokazują jak użytkownicy myślą o organizacji treści, co jest złotem dla projektantów IA.",
  },
  {
    question: "Co to jest tree testing w architekturze informacji?",
    answer:
      "Tree testing (reverse card sorting) to metoda testowania istniejącej lub proponowanej struktury nawigacji bez wizualnych wskazówek designu. Uczestnicy próbują znaleźć konkretne treści poruszając się po 'drzewie' kategorii tekstowych. Mierzy się success rate, directness i time. Pozwala weryfikować IA przed kosztownym wdrożeniem i identyfikować problematyczne ścieżki nawigacyjne.",
  },
];

const iaComponents = [
  {
    komponent: "Organization Systems",
    opis: "Jak grupujemy i klasyfikujemy treści",
    typy: "Hierarchiczna (drzewko), Sekwencyjna (kroki), Macierzowa (wiele wymiarów), Faceted (filtry)",
    przykład: "Sklep: Kategorie → Podkategorie → Produkty",
  },
  {
    komponent: "Labeling Systems",
    opis: "Jak nazywamy kategorie, linki, przyciski i sekcje",
    typy: "Exactly Representing (dosłowne), Narrowly Representing (wąskie), Broadly Representing (szerokie)",
    przykład: "\"Kontakt\" vs \"Napisz do nas\" vs \"Porozmawiajmy\"",
  },
  {
    komponent: "Navigation Systems",
    opis: "Jak użytkownicy przemieszczają się po produktcie",
    typy: "Global (główne menu), Local (submenu), Contextual (linki w treści), Breadcrumbs (ścieżka)",
    przykład: "Topbar + sidebar + breadcrumbs + related links",
  },
  {
    komponent: "Search Systems",
    opis: "Jak użytkownicy szukają konkretnych informacji",
    typy: "Full-text search, Faceted search, Zone search, Autocomplete, Filters",
    przykład: "Wyszukiwarka z filtrami kategorii, ceny, oceny",
  },
];

const organizationSchemes = [
  { schemat: "Alfabetyczna", kiedy: "Encyklopedie, słowniki, indeksy — gdy użytkownik zna nazwę", przykład: "Lista pracowników, glosariusz" },
  { schemat: "Chronologiczna", kiedy: "Blogi, newsy, historia — gdy ważna jest data", przykład: "Timeline, feed, archiwum artykułów" },
  { schemat: "Geograficzna", kiedy: "Lokalne usługi, mapy, oddziały — gdy ważna jest lokalizacja", przykład: "Sklepy w Polsce, biura regionalne" },
  { schemat: "Tematyczna (Topical)", kiedy: "Większość stron contentowych — grupowanie tematyczne", przykład: "Blog kategorii: Marketing, SEO, UX" },
  { schemat: "Task-based", kiedy: "Aplikacje, platformy — gdy użytkownik chce coś zrobić", przykład: "\"Kup\", \"Zarządzaj kontem\", \"Utwórz raport\"" },
  { schemat: "Audience-based", kiedy: "Strony z różnymi grupami docelowymi", przykład: "Strefa klienta vs. Strefa partnera" },
];

const iaMethods = [
  {
    metoda: "Card Sorting",
    cel: "Odkrycie mentalnych modeli użytkowników",
    kiedy: "Projektowanie nowej struktury, reorganizacja",
    wynik: "Macierz kategoryzacji, dendrogram",
  },
  {
    metoda: "Tree Testing",
    cel: "Weryfikacja istniejącej struktury nawigacji",
    kiedy: "Testowanie przed wdrożeniem, diagnoza problemów",
    wynik: "Success rate, directness score, problematyczne ścieżki",
  },
  {
    metoda: "First Click Testing",
    cel: "Test pierwszego kliknięcia dla kluczowych zadań",
    kiedy: "Testowanie etykiet nawigacyjnych i CTA",
    wynik: "% poprawnych pierwszych kliknięć, heatmapa",
  },
  {
    metoda: "Stakeholder Interviews",
    cel: "Zrozumienie celów biznesowych i ograniczeń",
    kiedy: "Faza discovery, reorganizacja dużych portali",
    wynik: "Business requirements, content inventory",
  },
];

export default function BlogInformationArchitectureCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Architektura Informacji — co to jest? Information Architecture (IA)"
        description="Architektura informacji (IA) — definicja, 4 komponenty (Organization, Labeling, Navigation, Search), metody badawcze (card sorting, tree testing) i schematy organizacji. Przewodnik po IA."
        canonicalUrl="https://fotz.pl/blog/information-architecture-co-to"
      />
      <ArticleSchema
        title="Architektura Informacji — co to jest i jak ją projektować?"
        description="Kompletny przewodnik po Information Architecture: 4 komponenty, 6 schematów organizacji, metody badawcze (card sorting, tree testing) i deliverables."
        url="https://fotz.pl/blog/information-architecture-co-to"
        datePublished="2024-01-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Architektura Informacji", url: "https://fotz.pl/blog/information-architecture-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Architektura Informacji" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Architektura Informacji — co to jest i jak ją projektować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Information Architecture to fundament każdego produktu cyfrowego.
            Poznaj 4 komponenty IA, 6 schematów organizacji i metody badawcze: card sorting i tree testing.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest architektura informacji?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Architektura informacji (IA)</strong> to praktyka organizowania, strukturyzowania
              i etykietowania treści w sposób umożliwiający użytkownikom łatwe znalezienie tego, czego szukają.
              To "szkielet" każdego produktu cyfrowego — niewidoczny dla użytkownika, ale fundamentalny
              dla jego doświadczenia.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Peter Morville i Lou Rosenfeld w klasycznym "Polar Bear Book" zdefiniowali IA jako
              połączenie 3 kontekstów: użytkownika (potrzeby, zachowania), treści (format, struktura, metadane)
              i kontekstu (cele biznesowe, kultura, środowisko). Dobra IA balansuje wszystkie trzy.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "72%", opis: "użytkowników opuszcza stronę gdy nie może znaleźć informacji po kilku kliknięciach" },
                { stat: "50%+", opis: "projektów redesign stron kończy się niepowodzeniem przez złą IA, nie zły design wizualny" },
                { stat: "30%", opis: "wzrost konwersji po przebudowie nawigacji opartej na badaniach card sorting" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 komponenty */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 komponenty architektury informacji</h2>
            <div className="space-y-4">
              {iaComponents.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{c.komponent}</h3>
                      <p className="text-slate-600 mb-3">{c.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-blue-50 rounded p-3">
                          <p className="text-xs font-semibold text-blue-600 mb-1">Typy:</p>
                          <p className="text-blue-800">{c.typy}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-3">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                          <p className="text-slate-700 italic">{c.przykład}</p>
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

      {/* Schematy organizacji */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 schematów organizacji treści</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Schemat</th>
                    <th className="p-3 text-left">Kiedy stosować</th>
                    <th className="p-3 text-left">Przykład zastosowania</th>
                  </tr>
                </thead>
                <tbody>
                  {organizationSchemes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700">{row.schemat}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kiedy}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.przykład}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metody badawcze */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Metody badawcze w IA</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {iaMethods.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 text-lg mb-2">{m.metoda}</h3>
                  <p className="text-slate-600 text-sm mb-3">{m.cel}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold text-slate-400 w-16 flex-shrink-0">Kiedy:</span>
                      <span className="text-slate-600">{m.kiedy}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold text-slate-400 w-16 flex-shrink-0">Wynik:</span>
                      <span className="text-slate-600">{m.wynik}</span>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — architektura informacji</h2>
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
