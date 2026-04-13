import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest dostępność stron internetowych (web accessibility)?",
    answer:
      "Dostępność stron internetowych (web accessibility) to praktyka projektowania i tworzenia stron, z których mogą korzystać wszyscy ludzie — niezależnie od niepełnosprawności wzrokowych, słuchowych, motorycznych, poznawczych lub neurologicznych. Dostępna strona może być obsługiwana przez czytniki ekranu dla niewidomych, klawiatury (bez myszy) dla osób z niepełnosprawnością motoryczną, czy napisy dla głuchych. W Polsce i UE dostępność cyfrowa jest wymogiem prawnym dla podmiotów publicznych.",
  },
  {
    question: "Co to jest WCAG i jakie są poziomy zgodności?",
    answer:
      "WCAG (Web Content Accessibility Guidelines) to standard W3C definiujący wymagania dostępności. Aktualnie WCAG 2.2 (2023). Trzy poziomy: A — minimalny (musi być), AA — standardowy (powinien być, wymagany prawnie w EU), AAA — zaawansowany (opcjonalny). WCAG bazuje na 4 zasadach POUR: Perceivable (postrzegalny), Operable (obsługiwalny), Understandable (zrozumiały), Robust (solidny). Większość wymagań prawnych w UE i USA dotyczy poziomu AA.",
  },
  {
    question: "Jak testować dostępność stron internetowych?",
    answer:
      "Metody testowania dostępności: Automatyczne testy — narzędzia: axe DevTools (rozszerzenie Chrome), WAVE, Google Lighthouse (zakładka Accessibility). Wychwytują ~30-40% problemów. Manualne testy — nawigacja tylko klawiaturą (Tab, Enter, Escape, strzałki), test z wyłączonymi stylami CSS, test w trybie wysokiego kontrastu. Testy z czytnikiem ekranu — NVDA (Windows, free), JAWS (Windows, płatny), VoiceOver (macOS/iOS). Testy z prawdziwymi użytkownikami — osoby z niepełnosprawnościami jako testerzy.",
  },
  {
    question: "Jakie są wymagania prawne dotyczące dostępności cyfrowej w Polsce?",
    answer:
      "W Polsce: Ustawa o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych (2019, implementacja dyrektywy UE 2016/2102). Obowiązkowa dla: organów administracji publicznej, uczelni, szpitali publicznych i innych podmiotów publicznych. Wymagany poziom: WCAG 2.1 AA. Obowiązek publikacji deklaracji dostępności i zapewnienia alternatywnego dostępu. Europejski Akt Dostępności (2025) rozszerza obowiązki na sektor prywatny.",
  },
  {
    question: "Jak dostępność wpływa na SEO?",
    answer:
      "Dostępność i SEO mają wiele wspólnych elementów: alt text na obrazach (SEO i screen readers), semantyczny HTML z nagłówkami H1-H6 (struktura dla crawlerów i czytników), napisy do filmów (UX i crawlability), szybkość strony (Core Web Vitals i viewport dla użytkowników mobilnych), czytelna struktura linków (descriptive anchor text zamiast 'kliknij tutaj'). Google preferuje strony dostępne — dobra dostępność przekłada się na lepsze rankingi.",
  },
];

const wcagPrinciples = [
  {
    zasada: "P — Perceivable (Postrzegalny)",
    opis: "Informacje i UI muszą być prezentowane tak, żeby użytkownicy mogli je postrzegać",
    przykłady: [
      "Alt text dla wszystkich obrazów znaczących treściowo",
      "Napisy (CC) dla treści wideo i audio",
      "Kontrast koloru minimum 4.5:1 dla tekstu normalnego (3:1 dla dużego)",
      "Treść nie ginie przy powiększeniu do 200%",
    ],
  },
  {
    zasada: "O — Operable (Obsługiwalny)",
    opis: "Wszystkie interfejsy i nawigacja muszą być obsługiwalne — nie tylko myszą",
    przykłady: [
      "Pełna nawigacja klawiaturą (Tab, Shift+Tab, Enter, Escape)",
      "Wyraźny focus indicator — widoczny element z focusem",
      "Brak treści migającej powyżej 3 razy/sekundę (napady padaczki)",
      "Skip links — 'Przejdź do treści głównej' na początku strony",
    ],
  },
  {
    zasada: "U — Understandable (Zrozumiały)",
    opis: "Informacje i interfejs muszą być zrozumiałe dla użytkownika",
    przykłady: [
      "Język strony zadeklarowany w HTML (lang='pl')",
      "Jasne komunikaty błędów formularzy z sugestiami naprawy",
      "Spójne i przewidywalne nawigowanie i interakcje",
      "Etykiety (labels) powiązane z polami formularzy",
    ],
  },
  {
    zasada: "R — Robust (Solidny)",
    opis: "Treść musi być wystarczająco solidna dla różnych technologii asystujących",
    przykłady: [
      "Poprawny semantyczny HTML — nagłówki, listy, landmarks",
      "ARIA attributes gdzie HTML semantyczny nie wystarcza",
      "Poprawna walidacja formularzy z opisami błędów",
      "Statusy i aktualizacje komunikowane przez aria-live",
    ],
  },
];

const accessibilityChecklist = [
  { kategoria: "Obrazy", wymaganie: "Każdy obraz ma opisowy alt text lub alt='' jeśli dekoracyjny", narzędzie: "axe, WAVE, manualna inspekcja" },
  { kategoria: "Kolor i kontrast", wymaganie: "Text contrast ratio: min 4.5:1 (normalny), 3:1 (duży tekst lub UI)", narzędzie: "Colour Contrast Analyser, Chrome DevTools" },
  { kategoria: "Formularze", wymaganie: "Każde pole ma powiązany label, błędy są opisane tekstem", narzędzie: "axe DevTools, manualna nawigacja klawiaturą" },
  { kategoria: "Nawigacja klawiaturą", wymaganie: "Tab order logiczny, focus visible, brak pułapek klawiaturowych", narzędzie: "Testowanie ręczne klawiaturą" },
  { kategoria: "Semantyczny HTML", wymaganie: "Nagłówki H1-H6 hierarchicznie, landmarks (main, nav, header)", narzędzie: "WAVE, Landmarks browser extension" },
  { kategoria: "Linki", wymaganie: "Anchor text opisowy ('Pobierz raport' zamiast 'Kliknij tutaj')", narzędzie: "WAVE, manualne review" },
  { kategoria: "Wideo / Audio", wymaganie: "Napisy (CC) dla wideo, transkrypcja dla audio, nie ma autoplay z dźwiękiem", narzędzie: "Manualne review, YT/Vimeo CC checker" },
  { kategoria: "Ruch i animacje", wymaganie: "Respektuje prefers-reduced-motion, nic nie miga powyżej 3 Hz", narzędzie: "CSS media query audit" },
];

export default function BlogAccessibilityWebCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Dostępność Stron Internetowych | Fotz Studio"
        description="Dostępność stron internetowych — definicja, 4 zasady WCAG (POUR), poziomy A/AA/AAA, wymogi prawne w Polsce i checklist audytu dostępności cyfrowej."
        canonicalUrl="https://fotz.pl/blog/dostepnosc-stron-internetowych"

        keywords="Dostępność Stron Internetowych co to jest, Dostępność Stron Internetowych definicja, czym jest Dostępność Stron Internetowych, Dostępność Stron Internetowych przykłady, jak działa Dostępność Stron Internetowych, Dostępność Stron Internetowych znaczenie, Dostępność Stron Internetowych przewodnik"

        canonical="https://fotz.pl/blog/dostepnosc-stron-internetowych"
      />
      <ArticleSchema
        title="Dostępność Stron Internetowych — co to jest i jak wdrożyć WCAG?"
        description="Kompletny przewodnik po web accessibility: 4 zasady WCAG (POUR), checklist audytu, narzędzia testowania i wymogi prawne w Polsce."
        url="https://fotz.pl/blog/dostepnosc-stron-internetowych"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Dostępność Cyfrowa", url: "https://fotz.pl/blog/dostepnosc-stron-internetowych" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Dostępność Cyfrowa" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Dostępność Stron Internetowych — co to jest i jak wdrożyć WCAG?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Web accessibility to dostępność dla wszystkich użytkowników, niezależnie od niepełnosprawności.
            Poznaj 4 zasady WCAG, wymogi prawne w Polsce i checklist audytu dostępności.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest dostępność cyfrowa?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Dostępność stron internetowych</strong> oznacza projektowanie i tworzenie
              stron oraz aplikacji które może używać każda osoba — włącznie z osobami niewidomymi,
              słabowidzącymi, głuchymi, z niepełnosprawnością motoryczną lub poznawczą.
              To zasada równego dostępu do informacji i usług w sieci.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              W Polsce ok. 5.4 miliona osób ma niepełnosprawność (GUS 2021).
              Globalnie to ponad 1 miliard. Niedostępna strona to nie tylko problem etyczny —
              to potencjalnie 15% utraconych użytkowników i ryzyko prawne.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "1 mld+", opis: "osób na świecie żyje z jakąś formą niepełnosprawności — 15% globalnej populacji (WHO)" },
                { stat: "AA", opis: "poziom WCAG wymagany prawnie dla podmiotów publicznych w Polsce i całej UE" },
                { stat: "30-40%", opis: "problemów dostępności jest wykrywanych automatycznie — reszta wymaga manualnego testowania" },
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 zasady WCAG — model POUR</h2>
            <div className="space-y-5">
              {wcagPrinciples.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{p.zasada}</h3>
                  <p className="text-slate-600 mb-3">{p.opis}</p>
                  <ul className="space-y-1">
                    {p.przykłady.map((ex, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Checklist audytu dostępności (WCAG AA)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kategoria</th>
                    <th className="p-3 text-left">Wymaganie</th>
                    <th className="p-3 text-left">Narzędzie do testu</th>
                  </tr>
                </thead>
                <tbody>
                  {accessibilityChecklist.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700">{row.kategoria}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.wymaganie}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.narzędzie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — dostępność stron internetowych</h2>
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

      <RelatedArticles currentArticleId="dostepnosc-stron-internetowych" />
      <ContactSection />
    </Layout>
  );
}
