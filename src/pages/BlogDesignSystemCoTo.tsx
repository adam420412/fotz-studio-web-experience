import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest design system?",
    answer:
      "Design system to zbiór wzajemnie powiązanych decyzji projektowych, komponentów UI i zasad tworzenia spójnych produktów cyfrowych. Zawiera: token designu (kolory, typografia, spacing), bibliotekę komponentów (przyciski, formularze, modale), wzorce interakcji i dokumentację. Design system to 'źródło prawdy' dla całego zespołu product — designerów, developerów i product managerów.",
  },
  {
    question: "Czym różni się design system od style guide?",
    answer:
      "Style guide to statyczny dokument opisujący zasady wizualne (kolory, fonty, logo usage) — głównie dla designerów i marketerów. Design system to żywy ekosystem: zawiera style guide, ale też gotowe komponenty z kodem (React, Vue), tokeny z automatyczną synchronizacją do Figmy, zasady UX i wzorce interakcji. Design system jest używany przez developerów tak samo jak designerów.",
  },
  {
    question: "Ile kosztuje i ile czasu zajmuje stworzenie design systemu?",
    answer:
      "Zależy od skali. Minimalny MVP design system dla małego produktu: 3-6 tygodni pracy 1-2 designerów + 1 developera. Pełny enterprise design system (jak Material Design, Carbon IBM): lata pracy dziesiątek osób. Realistyczny starting point dla scale-upu: 3-6 miesięcy, dedykowany 2-3 osobowy zespół. ROI jest wysoki — Airbnb szacuje oszczędności rzędu milionów dolarów rocznie po wprowadzeniu design systemu.",
  },
  {
    question: "Co to są design tokens?",
    answer:
      "Design tokens to named entities przechowujące wartości decyzji projektowych — kolory (#0066CC named jako 'brand-primary'), spacing (8px jako 'spacing-sm'), typografia ('font-size-heading-1': 40px). Tokeny są source of truth synchronizowane między Figmą a kodem. Zmiana tokena aktualizuje automatycznie cały produkt. Narzędzia: Style Dictionary, Theo, Figma Tokens plugin.",
  },
  {
    question: "Jakie są najpopularniejsze przykłady design systemów?",
    answer:
      "Open-source design systems: Material Design (Google) — React/Angular/Flutter, Carbon Design System (IBM) — enterprise, Ant Design (Alibaba) — popularne w Azji i e-commerce, Radix UI / shadcn (open-source headless), Atlassian Design System. Płatne/proprietary: Polaris (Shopify), Pajamas (GitLab), Primer (GitHub). Każdy z nich ma dokumentację publiczną — doskonałe źródło inspiracji.",
  },
];

const dsLayers = [
  {
    warstwa: "Foundations (Fundamenty)",
    zawiera: "Design tokens — kolory, typografia, spacing, shadows, border radius, motion",
    opis: "Podstawowe atomy z których budowane są wszystkie elementy. Każda wartość ma named token.",
    przykład: "color-brand-primary: #2563EB, spacing-4: 16px, font-heading-xl: 36px/44px",
  },
  {
    warstwa: "Components (Komponenty)",
    zawiera: "Elementy UI: Button, Input, Card, Modal, Dropdown, Table, Badge, Alert",
    opis: "Gotowe, wielokrotnego użytku komponenty z pełną dokumentacją stanów i dostępności.",
    przykład: "Button: Primary/Secondary/Ghost, sizes S/M/L, states: default/hover/disabled/loading",
  },
  {
    warstwa: "Patterns (Wzorce)",
    zawiera: "Złożone rozwiązania UX: formularze, onboarding, nawigacja, empty states",
    opis: "Złożone kombinacje komponentów rozwiązujące powtarzające się problemy projektowe.",
    przykład: "Form validation pattern, Pagination pattern, Search-and-filter pattern",
  },
  {
    warstwa: "Guidelines (Wytyczne)",
    zawiera: "Zasady pisania (voice & tone), dostępności (WCAG), responsywności, motion",
    opis: "Zasady i decyzje które wyjaśniają 'dlaczego' — nie tylko 'jak' używać komponentów.",
    przykład: "Kiedy używać Modal vs. Drawer, Error message writing guidelines",
  },
];

const dsTools = [
  { narzędzie: "Figma", rola: "Design i prototypowanie komponentów", tier: "Design" },
  { narzędzie: "Storybook", rola: "Dokumentacja i playground dla komponentów w kodzie", tier: "Dev" },
  { narzędzie: "Style Dictionary", rola: "Generowanie tokenów do CSS, iOS, Android", tier: "Tokens" },
  { narzędzie: "Chromatic", rola: "Visual regression testing komponentów", tier: "QA" },
  { narzędzie: "Zeroheight / Supernova", rola: "Dokumentacja design systemu (bridge design-dev)", tier: "Docs" },
  { narzędzie: "GitHub / npm", rola: "Wersjonowanie i dystrybucja biblioteki komponentów", tier: "Distribution" },
];

const dsBenefits = [
  { korzyść: "Spójność produktu", opis: "Każdy ekran używa tych samych komponentów — eliminacja 'snowflakes' i niespójności wizualnych", metryka: "% ekranów używających design systemu" },
  { korzyść: "Szybkość developmentu", opis: "Developerzy składają ekrany z gotowych komponentów zamiast pisać CSS od nowa", metryka: "Time-to-ship nowych feature'ów" },
  { korzyść: "Redukcja długu technicznego", opis: "Jeden komponent do utrzymania zamiast 47 różnych wariantów przycisku w 12 plikach", metryka: "Liczba unikatowych komponentów UI w kodzie" },
  { korzyść: "Dostępność (Accessibility)", opis: "Komponenty z wbudowanym WCAG compliance — aria-labels, keyboard navigation, contrast ratios", metryka: "WCAG conformance level (A/AA/AAA)" },
];

export default function BlogDesignSystemCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Design System — co to jest? Czym jest system projektowania UI"
        description="Design system — definicja, 4 warstwy (foundations, components, patterns, guidelines), narzędzia (Figma, Storybook) i korzyści. Jak zbudować design system…"
        canonicalUrl="https://fotz.pl/blog/design-system-co-to"

        keywords="Design System co to jest, Design System definicja, czym jest Design System, Design System przykłady, jak działa Design System, Design System znaczenie, Design System przewodnik"

        canonical="https://fotz.pl/blog/design-system-co-to"
      />
      <ArticleSchema
        title="Design System — co to jest i jak go zbudować?"
        description="Kompletny przewodnik po design systemach: 4 warstwy, narzędzia (Figma, Storybook, Style Dictionary), korzyści i jak zacząć budowę."
        url="https://fotz.pl/blog/design-system-co-to"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Design System", url: "https://fotz.pl/blog/design-system-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Design System", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Design System — co to jest i jak go zbudować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Design system to źródło prawdy dla całego zespołu product. Poznaj 4 warstwy systemu,
            najlepsze narzędzia i jak zbudować system który faktycznie używają developerzy.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest design system?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Design system</strong> to kompleksowy zbiór komponentów, tokenów, zasad i dokumentacji
              pozwalający zespołom budować spójne produkty cyfrowe szybciej i efektywniej.
              To jedyne źródło prawdy dla decyzji projektowych — eliminujące pytanie
              "czy ten przycisk powinien mieć border-radius 4px czy 8px?" raz na zawsze.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Airbnb, Spotify, IBM, Google — największe firmy technologiczne inwestują miliony
              w design systemy, bo ROI jest oczywisty: mniej czasu na odtwarzanie tych samych
              komponentów, więcej czasu na tworzenie nowej wartości.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "50%", opis: "szybsze tworzenie nowych stron i feature'ów gdy zespół korzysta z design systemu" },
                { stat: "47", opis: "tyle wariantów przycisku ma przeciętny startup bez design systemu — Figma zbadała to w 2019" },
                { stat: "3-6 mies.", opis: "czas potrzebny na stworzenie MVP design systemu dla produktu SaaS" },
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

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 warstwy design systemu</h2>
            <div className="space-y-4">
              {dsLayers.map((l, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{l.warstwa}</h3>
                      <p className="text-slate-600 mb-2">{l.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-blue-50 rounded p-3">
                          <p className="text-xs font-semibold text-blue-600 mb-1">Zawiera:</p>
                          <p className="text-blue-800">{l.zawiera}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-3">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                          <p className="text-slate-700 font-mono text-xs">{l.przykład}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Narzędzia do budowy design systemu</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Narzędzie</th>
                    <th className="p-3 text-left">Rola w design systemie</th>
                    <th className="p-3 text-left">Warstwa</th>
                  </tr>
                </thead>
                <tbody>
                  {dsTools.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700">{t.narzędzie}</td>
                      <td className="p-3 text-slate-600 text-sm">{t.rola}</td>
                      <td className="p-3"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">{t.tier}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Korzyści z design systemu</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dsBenefits.map((b, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-2">{b.korzyść}</h3>
                  <p className="text-slate-600 text-sm mb-2">{b.opis}</p>
                  <p className="text-xs text-slate-400">Metryka: {b.metryka}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — design system</h2>
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

      <RelatedArticles currentArticleId="design-system-co-to" />
      <ContactSection />
    </Layout>
  );
}
