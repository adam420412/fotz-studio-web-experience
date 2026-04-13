import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest wireframe?",
    answer:
      "Wireframe to szkielet strony lub ekranu aplikacji — uproszczona, czarno-biała reprezentacja layoutu, struktury treści i elementów interfejsu bez grafiki, kolorów i finalnego designu. Wireframe pokazuje: co znajdzie się na stronie, gdzie i w jakiej hierarchii — bez skupiania się na wyglądzie. To narzędzie komunikacji i walidacji struktury UX zanim zainwestujemy czas w finalny design.",
  },
  {
    question: "Jaka jest różnica między wireframe a mockupem a prototypem?",
    answer:
      "Wireframe — szkielet layoutu, low-fidelity, brak kolorów/grafiki, szybkie tworzenie. Mockup (makieta) — wysokiej wierności wizualizacja finalnego designu z kolorami, typografią i grafiką — ale statyczna. Prototype (prototyp) — interaktywna symulacja produktu z klikalną nawigacją, animacjami i stanom (może być lo-fi lub hi-fi). Wireframe to wczesna faza, mockup to wizualizacja, prototyp to symulacja interakcji.",
  },
  {
    question: "Jakie narzędzia używać do wireframingu?",
    answer:
      "Narzędzia do wireframingu: Figma (najpopularniejsze — gratisowe do 3 projektów, idealne dla zespołów), Balsamiq (specjalizowane w lo-fi wireframes, szybkie szkicowanie), Sketch (macOS, popularne wśród designerów), Adobe XD (integracja z Adobe Creative Cloud), Miro/FigJam (tablice do szybkich szkiców z zespołem), Axure RP (zaawansowane prototypy interaktywne), Whimsical (szybkie diagramy i wireframes). Dla szybkich szkiców — papier i długopis nadal działa świetnie.",
  },
  {
    question: "Kiedy tworzyć wireframe lo-fi a kiedy hi-fi?",
    answer:
      "Lo-fi wireframe (niskiej wierności) — idealne na etapie discovery i ideacji: szybkie, tanie, łatwe do modyfikacji. Skupiają uwagę na strukturze, nie estetyce — unikamy przedwczesnych dyskusji o kolorach. Hi-fi wireframe (wysokiej wierności) — bliższy finalnego produktu, z dokładniejszymi proporcjami i treścią. Stosuj gdy: koncepcja jest zatwierdzona, testujesz z użytkownikami, komunikujesz z developerami. Reguła: lo-fi na początku, hi-fi przed wdrożeniem.",
  },
  {
    question: "Jak długo trwa tworzenie wireframu?",
    answer:
      "Czas tworzenia wireframów: Pojedynczy ekran lo-fi (papier lub Figma) — 15-30 minut. Kompletny flow aplikacji mobilnej (10-20 ekranów) lo-fi — 1-3 dni. Hi-fi wireframe jednego ekranu z adnotacjami — 2-4 godziny. Wireframy całej strony internetowej (20-30 ekranów) hi-fi z dokumentacją — 1-2 tygodnie. Wireframy enterprise produktu (50+ ekranów) — kilka tygodni do miesięcy.",
  },
];

const wireframeTypes = [
  {
    typ: "Lo-Fi (Low Fidelity)",
    opis: "Szybkie szkice — prostokąty, linie, placeholder tekst. Szybkie w tworzeniu i modyfikacji.",
    kiedy: "Discovery, burza mózgów, wstępna walidacja konceptu z interesariuszami",
    narzędzia: "Papier, Balsamiq, Whimsical, FigJam",
    czas: "Minuty - godziny",
    detal: "Minimalny",
  },
  {
    typ: "Mid-Fi (Medium Fidelity)",
    opis: "Zbalansowane wireframy — dokładniejsze proporcje, realna treść, ale nadal brak kolorów.",
    kiedy: "Iteracje projektowe, prezentacje dla klientów, testowanie struktury nawigacji",
    narzędzia: "Figma, Sketch, Adobe XD",
    czas: "Godziny - dni",
    detal: "Średni",
  },
  {
    typ: "Hi-Fi (High Fidelity)",
    opis: "Szczegółowe wireframy lub mockupy — realna treść, finalne proporcje, interaktywność.",
    kiedy: "Testowanie z użytkownikami, handoff do developerów, finalna walidacja",
    narzędzia: "Figma (prototypy), Axure RP, InVision",
    czas: "Dni - tygodnie",
    detal: "Wysoki",
  },
];

const wireframeElements = [
  { element: "Header / Navigation", opis: "Logo, menu główne, CTA, search — pierwsza decyzja hierarchiczna", kluczowe: "Priorytetyzacja itemów menu, umiejscowienie CTA" },
  { element: "Hero / Above the fold", opis: "Treść widoczna bez scrollowania — decyduje o bounce rate", kluczowe: "Value proposition, primary CTA, social proof" },
  { element: "Content blocks", opis: "Sekcje tematyczne strony — ich kolejność określa narrację", kluczowe: "Hierarchia informacji, F-pattern i Z-pattern reading" },
  { element: "Forms / CTAs", opis: "Punkty konwersji — formularze, buttony, popup'y", kluczowe: "Liczba pól, etykiety, microcopy, secondary CTA" },
  { element: "Footer", opis: "Nawigacja pomocnicza, legal, kontakt, social media", kluczowe: "SEO value, secondary navigation, trust signals" },
];

const wireframeAnnotations = [
  { typ: "Interakcje", przykład: "Kliknięcie w X otwiera dropdown menu z opcjami Y" },
  { typ: "Warunki wyświetlenia", przykład: "Ten banner pojawia się tylko dla niezalogowanych użytkowników" },
  { typ: "Stany komponentów", przykład: "Input w stanie: default / focus / error / disabled / success" },
  { typ: "Treść dynamiczna", przykład: "Lista produktów — sortowanie default: by popularity" },
  { typ: "Responsive breakpoints", przykład: "Mobile: menu schowane za hamburgerem, max 2 kolumny" },
  { typ: "Decyzje projektowe", przykład: "CTA 'Kup teraz' zamiast 'Dodaj do koszyka' — A/B test to zweryfikuje" },
];

export default function BlogWireframeCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Wireframe — co to jest? Wireframing w projektowaniu UX"
        description="Wireframe — definicja, różnica między wireframe a mockupem a prototypem, typy (lo-fi, mid-fi, hi-fi), narzędzia (Figma, Balsamiq) i jak tworzyć szkielety…"
        canonicalUrl="https://fotz.pl/blog/wireframe-co-to"

        keywords="Wireframe co to jest, Wireframe definicja, czym jest Wireframe, Wireframe przykłady, jak działa Wireframe, Wireframe znaczenie, Wireframe przewodnik"

        canonical="https://fotz.pl/blog/wireframe-co-to"
      />
      <ArticleSchema
        title="Wireframe — co to jest i jak tworzyć szkielety UX?"
        description="Kompletny przewodnik po wireframingu: 3 typy (lo-fi, mid-fi, hi-fi), elementy, adnotacje, narzędzia i kiedy używać wireframów w procesie UX."
        url="https://fotz.pl/blog/wireframe-co-to"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Wireframe", url: "https://fotz.pl/blog/wireframe-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Wireframe" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Wireframe — co to jest i jak tworzyć szkielety UX?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Wireframe to szkielet każdego projektu UX. Poznaj 3 typy, narzędzia,
            kluczowe elementy i jak tworzyć wireframy które skutecznie komunikują strukturę.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest wireframe?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Wireframe</strong> to uproszczona reprezentacja layoutu strony lub ekranu —
              bez kolorów, zdjęć i finalnego designu. Pokazuje gdzie co się znajduje,
              w jakiej hierarchii i jak elementy są ze sobą powiązane.
              To "szkielet" przed "ciałem" projektu.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Wireframe pozwala walidować strukturę i flow zanim zainwestujemy czas
              w estetykę. Zmiana wireframu trwa minuty — zmiana finalnego designu
              po feedbacku klienta może kosztować dni pracy.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
              <p className="font-semibold text-blue-900 mb-2">Wireframe vs. Mockup vs. Prototype:</p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                {[
                  { label: "Wireframe", opis: "Struktura i layout — brak kolorów, grafiki" },
                  { label: "Mockup", opis: "Wizualny design — kolory, typografia, grafika (statyczny)" },
                  { label: "Prototype", opis: "Interaktywna symulacja z nawigacją i animacjami" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded p-3 border border-blue-200">
                    <p className="font-bold text-blue-700 mb-1">{item.label}</p>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 typy wireframów — Lo-Fi, Mid-Fi, Hi-Fi</h2>
            <div className="space-y-4">
              {wireframeTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-lg">{t.typ}</h3>
                    <div className="flex gap-3 text-xs">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">Czas: {t.czas}</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Detal: {t.detal}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Kiedy stosować:</p>
                      <p className="text-blue-800">{t.kiedy}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Narzędzia:</p>
                      <p className="text-slate-700">{t.narzędzia}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe elementy wireframe strony</h2>
            <div className="space-y-3">
              {wireframeElements.map((e, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-blue-600 text-white rounded flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900">{e.element}</h3>
                      <p className="text-slate-600 text-sm">{e.opis}</p>
                      <p className="text-xs text-blue-600 mt-1">Kluczowe decyzje: {e.kluczowe}</p>
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Adnotacje w wireframach — co dokumentować</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {wireframeAnnotations.map((a, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-1">{a.typ}</h3>
                  <p className="text-slate-600 text-sm italic">"{a.przykład}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — wireframe</h2>
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
