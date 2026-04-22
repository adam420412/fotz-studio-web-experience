import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest dostępność web (a11y) i co to WCAG?",
    answer: "Dostępność web (Web Accessibility, a11y): projektowanie stron dostępnych dla wszystkich, w tym osób z niepełnosprawnościami (wzrok, słuch, motoryka, kognicja). a11y: skrót od 'accessibility' (11 liter między 'a' i 'y'). WCAG (Web Content Accessibility Guidelines): standard dostępności web (W3C). Wersje: WCAG 2.0 (2008), WCAG 2.1 (2018), WCAG 2.2 (2023), WCAG 3.0 (w opracowaniu). Poziomy WCAG: A (minimum), AA (standard), AAA (najwyższy). Większość wymaga poziomu AA. Zasady POUR: Perceivable (postrzegalny) — treść dostępna dla zmysłów. Operable (operacyjny) — UI możliwe do obsługi. Understandable (zrozumiały) — treść i UI jasne. Robust (solidny) — działa z technologiami asystywnymi. Technologie asystujące: screen readers (NVDA, JAWS, VoiceOver, TalkBack). Switch access. Zoom magnifiers. Braille displays. Keyboard-only navigation. Wymogi prawne: ADA (USA), Section 508 (US federal), WCAG 2.1 AA (EU Web Accessibility Directive, ECODESIGN). Polska: WCAG 2.1 AA dla sektora publicznego. Prywatne firmy — brak twardego obowiązku (ale rosnące wymagania). Biznesowe korzyści: SEO (semantyczny HTML). Większy rynek (1 miliard ludzi z niepełnosprawnościami). Lepsza UX dla wszystkich.",
  },
  {
    question: "Semantyczny HTML i ARIA — podstawy dostępnego kodu?",
    answer: "Semantyczny HTML: właściwe elementy HTML dla właściwej treści. button dla akcji (nie div). a href dla nawigacji. h1-h6 dla nagłówków (nie div z dużym fontem). nav, main, header, footer, aside, article, section — landmarks. form, label, input — formularze. table z th, caption — tabele danych. ul/ol/li — listy. Reguła: używaj natywnych elementów przed ARIA. Natywny button ma wbudowane: role='button', focusable, Enter/Space aktywacja. ARIA (Accessible Rich Internet Applications): atrybuty rozszerzające semantykę gdy HTML niewystarczający. Trzy typy ARIA: Roles: role='dialog', role='tablist', role='combobox'. Properties: aria-label='Zamknij', aria-labelledby='dialog-title', aria-describedby='desc'. States: aria-expanded='true', aria-checked='false', aria-disabled='true', aria-hidden='true'. Kluczowe ARIA patterns: Dialog: role='dialog', aria-modal='true', aria-labelledby. Focus trap wewnątrz. Escape zamyka. Tab (tablist/tab/tabpanel). Accordion (region + aria-expanded). Combobox (input + listbox + option). Alert (aria-live='assertive' lub role='alert'). Złe użycie ARIA: div z role='button' bez tabIndex i keyboard handler. aria-label na elemencie bez tekstu (bardziej problematyczne). Nadużywanie aria-label (redundantne z tekstem). Regula: 'No ARIA is better than bad ARIA'.",
  },
  {
    question: "Keyboard navigation i focus management — co sprawdzić?",
    answer: "Keyboard navigation: wszystko dostępne z klawiatury (WCAG 2.1.1). Tab — focus na kolejny element. Shift+Tab — focus na poprzedni. Enter/Space — aktywacja (button, link). Arrow keys — wewnątrz komponentów (listbox, tabs, menu). Escape — zamknięcie (dialog, dropdown). Focus visible: :focus-visible — widoczny outline. Nie usuwaj outline bez alternatywy. :focus-visible zamiast :focus (outline widoczny tylko przy klawiaturze). tabIndex: tabIndex='0' — element w naturalnej kolejności tab. tabIndex='-1' — focusable przez JavaScript (nie tab). tabIndex='1+' — unikaj (chaos). Focus management: dialog open -> move focus inside. Dialog close -> return focus to trigger. Routing change (SPA) -> move focus to main/h1. Skip links: link do main content (pierwszy element). Widoczny przy focus. 'Przejdź do treści' na początku strony. Focus trap: dialogi, drawery — focus nie wydostaje się. biblioteka: focus-trap, Radix UI robi to automatycznie. Live regions: aria-live='polite' — ogłoś po zakończeniu akcji. aria-live='assertive' — ogłoś natychmiast (pilne). role='status' (polite), role='alert' (assertive). Testowanie keyboard: przejdź przez stronę tylko Tab/Shift-Tab. Sprawdź czy focus visible. Sprawdź czy wszystkie akcje dostępne. Sprawdź focus trap w modalach.",
  },
  {
    question: "Kontrast kolorów, czytelność i dostępność dla osób niedowidzących?",
    answer: "Kontrast kolorów (WCAG 1.4.3): tekst normalny: minimum 4.5:1 (AA). Duży tekst (18pt lub 14pt bold): minimum 3:1 (AA). Grafiki i elementy UI: minimum 3:1. AAA: 7:1 dla normalnego tekstu. Narzędzia: WebAIM Contrast Checker. Chrome DevTools (Accessibility panel). Colour Contrast Analyser (aplikacja). Figma plugins (Contrast, Stark). Accessibility Insights. Czytelność tekstu: line-height: 1.5 (WCAG 1.4.8). Paragraph spacing: 2x font size. Letter spacing: 0.12em. Word spacing: 0.16em. Brak wyjustowania (justified text trudny dla dysleksji). Min font size: 16px dla body (nie wymóg WCAG ale best practice). Resize text: do 200% bez utraty funkcjonalności (WCAG 1.4.4). Zoom: do 400% (WCAG 1.4.10 Reflow). Nie blokuj zoom (viewport meta: user-scalable=no). Kolorowe znaczenie: nie przekazuj informacji tylko kolorem (WCAG 1.4.1). Error: czerwona obwódka + ikona + tekst. Link: podkreślenie (nie tylko kolor). Dark mode: prefers-color-scheme media query. Automatyczny dark mode. Respektuj OS preference. Animacje i ruch: prefers-reduced-motion. @media (prefers-reduced-motion: reduce) {animation: none}. Osoby z vestibular disorders.",
  },
  {
    question: "Testowanie dostępności — narzędzia automatyczne i manualne?",
    answer: "Automatyczne testowanie: axe-core: najpopularniejszy engine (Deque). @axe-core/react — integracja React. axe DevTools — Chrome/Firefox extension. Playwright + axe: await injectAxe(page). const violations = await checkA11y(page). WAVE (WebAIM): wizualizacja błędów dostępności. Ikony na stronie. Darmowe. IBM Equal Access Checker: Chrome extension. Google Lighthouse: accessibility audit. Pa11y: CLI tool. Storybook a11y addon: @storybook/addon-a11y. Per komponent audit. Vitest + axe: import {axe} from 'jest-axe'. const results = await axe(container). expect(results).toHaveNoViolations(). Manualne testowanie: Screen reader: NVDA + Firefox (Windows, bezpłatny). JAWS (Windows, komercyjny). VoiceOver (macOS/iOS, wbudowany). TalkBack (Android, wbudowany). Orca (Linux). Keyboard only: przejdź całą stronę bez myszy. Zoom 400%: Chrome, ustaw Ctrl++ do 400%. High contrast mode: Windows High Contrast / Forced Colors. Color blind simulation: Chrome DevTools Rendering. Dostępność obrazów: alt text dla informacyjnych. alt='' dla dekoracyjnych. role='img' + aria-label dla SVG. Obrazy złożone: aria-describedby + ukryty opis. WCAG 2.2 nowe kryteria: Focus Appearance (2.4.11/2.4.12). Dragging Movements (2.5.7). Target Size Minimum (2.5.8). Consistent Help (3.2.6).",
  },
];

const a11yChecklist = [
  { obszar: "Struktura HTML", kryterium: "Semantyczne elementy (nav, main, button)", wcag: "1.3.1", level: "A", narzedzie: "axe, Lighthouse, manualne" },
  { obszar: "Kontrast kolorów", kryterium: "Tekst: min 4.5:1, UI: min 3:1", wcag: "1.4.3", level: "AA", narzedzie: "Contrast Checker, DevTools" },
  { obszar: "Keyboard navigation", kryterium: "Wszystkie akcje dostępne z klawiatury", wcag: "2.1.1", level: "A", narzedzie: "Manualne (Tab test)" },
  { obszar: "Focus visible", kryterium: "Wyraźny focus indicator dla :focus-visible", wcag: "2.4.7", level: "AA", narzedzie: "Manualne, Lighthouse" },
  { obszar: "Alternatywny tekst", kryterium: "alt dla obrazów, aria-label dla ikon", wcag: "1.1.1", level: "A", narzedzie: "axe, WAVE" },
  { obszar: "Ruch i animacje", kryterium: "prefers-reduced-motion respektowane", wcag: "2.3.3", level: "AAA", narzedzie: "CSS media query check" },
];

export default function BlogAccessibilityA11yCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Dostępność web (a11y), WCAG, ARIA, keyboard navigation"
        description="Web Accessibility (a11y): WCAG 2.2 AA, semantyczny HTML, ARIA, keyboard nav, kontrast kolorów, screen reader testing, axe-core i Lighthouse dostępność."
        canonical="https://fotz.pl/blog/dostepnosc-web-a11y-wcag-aria-keyboard-navigation-testowanie"

        keywords="Dostępność web (a11y), WCAG, ARIA, keyboard navigation co to jest, Dostępność web (a11y), WCAG, ARIA, keyboard navigation definicja, czym jest Dostępność web (a11y), WCAG, ARIA, keyboard navigation, Dostępność web (a11y), WCAG, ARIA, keyboard navigation przykłady, jak działa Dostępność web (a11y), WCAG, ARIA, keyboard navigation, Dostępność web (a11y), WCAG, ARIA, keyboard navigation znaczenie, Dostępność web (a11y), WCAG, ARIA, keyboard navigation przewodnik"

        canonical="https://fotz.pl/blog/dostepnosc-web-a11y-wcag-aria-keyboard-navigation-testowanie"
      />
      <ArticleSchema
        title="Dostępność web (a11y), WCAG, ARIA, keyboard navigation — jak testować?"
        description="6 obszarów dostępności (HTML/kontrast/keyboard/focus/alt/motion) — WCAG 2.2 AA, semantyczny HTML, ARIA patterns, axe-core, screen reader testing."
        url="https://fotz.pl/blog/dostepnosc-web-a11y-wcag-aria-keyboard-navigation-testowanie"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Dostępność web a11y", url: "https://fotz.pl/blog/dostepnosc-web-a11y-wcag-aria-keyboard-navigation-testowanie" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Dostępność web a11y", url: "/blog/dostepnosc-web-a11y-wcag-aria-keyboard-navigation-testowanie" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Frontend / Accessibility
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dostępność web (a11y) 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              WCAG 2.2 AA, semantyczny HTML, ARIA patterns, keyboard navigation,
              kontrast kolorów i testowanie z axe-core oraz screen readerami.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Standard dostępności", value: "WCAG 2.2" },
                { label: "Rozszerzenia HTML", value: "ARIA" },
                { label: "Audyt automatyczny", value: "axe-core" },
                { label: "Test czytnika", value: "VoiceOver" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-amber-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych obszarów dostępności WCAG</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Struktura HTML, kontrast, keyboard, focus, alt i animacje — podstawowy
              checklist dostępności z kryteriami WCAG i narzędziami testowania.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Obszar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kryterium</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">WCAG</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Level</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                </tr>
              </thead>
              <tbody>
                {a11yChecklist.map((a, i) => (
                  <tr key={a.obszar} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{a.obszar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.kryterium}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.kryterium}</td>
                    <td className="p-3 border border-gray-200">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${a.level === 'A' ? 'bg-green-100 text-green-700' : a.level === 'AA' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{a.level}</span>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{a.narzedzie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="dostepnosc-web-a11y-wcag-aria-keyboard-navigation-testowanie" />
      <ContactSection />
    </Layout>
  );
}
