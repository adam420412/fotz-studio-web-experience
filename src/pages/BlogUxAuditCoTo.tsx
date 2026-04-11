import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest audyt UX?",
    answer:
      "Audyt UX (UX audit) to systematyczna ocena produktu cyfrowego pod kątem użyteczności, dostępności i zgodności z zasadami UX. Ekspert UX analizuje interfejs przez pryzmat ustalonych heurystyk (np. 10 heurystyk Nielsena), najlepszych praktyk branżowych i celów użytkownika. Wynikiem jest raport z priorytetyzowaną listą problemów i rekomendacjami. Audyt UX jest szybszy i tańszy niż pełne badania użytkowników.",
  },
  {
    question: "Jaka jest różnica między audytem UX a testami użyteczności?",
    answer:
      "Audyt UX to ocena ekspercka przeprowadzana przez specjalistę UX bez udziału użytkowników — szybka, tańsza, oparta na heurystykach i wzorcach. Testy użyteczności angażują prawdziwych użytkowników wykonujących zadania — kosztowniejsze, ale dają bezpośrednie insighty z perspektywy klienta. Audyt UX jest świetny do identyfikacji 'oczywistych' problemów i jako wstęp przed testami. Testy użytkowników ujawniają problemy nieoczekiwane.",
  },
  {
    question: "Ile czasu zajmuje audyt UX?",
    answer:
      "Czas zależy od zakresu: Audyt heurystyczny prostego produktu (landing page + kilka ekranów) — 1-3 dni. Audyt całego produktu SaaS (20-50 ekranów) — 1-2 tygodnie. Audyt enterprise z analizą danych analitycznych, nagrań sesji i konkurencji — 3-6 tygodni. Wynik: raport PDF lub prezentacja z priorytetyzowanymi problemami (często 20-80 znalezionych issues) i rekomendacjami napraw.",
  },
  {
    question: "Kiedy warto zrobić audyt UX?",
    answer:
      "Audyt UX jest szczególnie wartościowy gdy: konwersja jest niższa niż benchmark branżowy, wskaźniki zaangażowania spadają (wysoki bounce rate, niski time-on-site), zbliża się duży redesign (audyt wskazuje co naprawić), po pivotach produktowych (sprawdzenie czy UX nadąża za zmianami), lub gdy nie przeprowadzano badań UX przez ponad rok. Audyt UX może wskazać quick wins które natychmiast poprawią metryki.",
  },
  {
    question: "Jakie są heurystyki Nielsena stosowane w audycie UX?",
    answer:
      "10 heurystyk Jakoba Nielsena (1994, nadal aktualne): 1. Widoczność statusu systemu, 2. Zgodność z rzeczywistością, 3. Kontrola i wolność użytkownika, 4. Spójność i standardy, 5. Zapobieganie błędom, 6. Rozpoznawanie zamiast pamiętania, 7. Elastyczność i efektywność, 8. Estetyczny i minimalistyczny design, 9. Pomoc w diagnozowaniu błędów, 10. Pomoc i dokumentacja. Każda heurystyka jest oceniana w skali severity 0-4.",
  },
];

const auditFrameworks = [
  {
    framework: "Heuristic Evaluation (Nielsen)",
    opis: "Ocena interfejsu przez pryzmat 10 heurystyk Nielsena — najczęściej stosowane podejście",
    kiedy: "Szybka identyfikacja problemów użyteczności bez kosztownych badań",
    output: "Lista issues z severity rating 0-4 per heurystyka",
  },
  {
    framework: "Cognitive Walkthrough",
    opis: "Symulacja kroków użytkownika przy wykonywaniu konkretnych zadań — focus na learnability",
    kiedy: "Ocena nowych użytkowników first-time experience, onboardingu",
    output: "Problemy w konkretnych flow z perspektywy nowego użytkownika",
  },
  {
    framework: "WCAG Accessibility Audit",
    opis: "Ocena zgodności z Web Content Accessibility Guidelines (poziomy A, AA, AAA)",
    kiedy: "Przed wdrożeniem, wymogi prawne, inclusive design",
    output: "Raport WCAG compliance z listą naruszeń i priorytetami napraw",
  },
  {
    framework: "Analytics-informed Audit",
    opis: "Połączenie oceny eksperckiej z danymi (GA4, Hotjar, session recordings)",
    kiedy: "Diagnoza konkretnych problemów konwersji wskazanych przez dane",
    output: "Insighty poparte danymi ilościowymi + rekomendacje",
  },
];

const nielsenHeuristics = [
  { nr: "1", heurystyka: "Widoczność statusu systemu", opis: "System zawsze informuje użytkownika co się dzieje — loading states, potwierdzenia, progress bars" },
  { nr: "2", heurystyka: "Zgodność z rzeczywistością", opis: "System używa języka użytkownika, nie żargonu technicznego. Metafory zgodne z rzeczywistością" },
  { nr: "3", heurystyka: "Kontrola i wolność", opis: "Łatwe cofnięcie akcji — Undo, Anuluj, Back. Użytkownik ma poczucie kontroli" },
  { nr: "4", heurystyka: "Spójność i standardy", opis: "Te same słowa i akcje zawsze znaczą to samo. Zgodność z konwencjami platformy" },
  { nr: "5", heurystyka: "Zapobieganie błędom", opis: "Design który eliminuje błędy zanim wystąpią — lepsze niż dobre komunikaty błędów" },
  { nr: "6", heurystyka: "Rozpoznawanie vs. pamiętanie", opis: "Minimalizacja obciążenia pamięci — opcje widoczne, instrukcje dostępne w kontekście" },
  { nr: "7", heurystyka: "Elastyczność i efektywność", opis: "Skróty dla zaawansowanych użytkowników — accelerators niewidoczne dla nowicjuszy" },
  { nr: "8", heurystyka: "Estetyczny minimalizm", opis: "Tylko informacje relevantne. Każda dodatkowa jednostka informacji konkuruje z ważnymi" },
  { nr: "9", heurystyka: "Pomoc przy błędach", opis: "Komunikaty błędów: prosty język, precyzja, konstruktywne rozwiązanie" },
  { nr: "10", heurystyka: "Pomoc i dokumentacja", opis: "Dokumentacja powinna być łatwa do wyszukania, skoncentrowana na zadaniu użytkownika" },
];

const severityScale = [
  { poziom: "0", label: "Nie problem UX", opis: "Autor nie zgadza się że to problem użyteczności" },
  { poziom: "1", label: "Kosmetyczny", opis: "Naprawić tylko gdy czas pozwoli — nie wpływa na task completion" },
  { poziom: "2", label: "Mały problem", opis: "Niski priorytet naprawy — opóźnia użytkownika ale nie blokuje" },
  { poziom: "3", label: "Duży problem", opis: "Wysoki priorytet — frustracja użytkownika, znaczące opóźnienie" },
  { poziom: "4", label: "Katastrofa", opis: "Imperatyw naprawy przed wdrożeniem — blokuje wykonanie zadania" },
];

export default function BlogUxAuditCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Audyt UX — co to jest? UX audit heurystyki i metodologia"
        description="Audyt UX — definicja, 4 frameworki (heurystyki Nielsena, cognitive walkthrough, WCAG, analytics-informed), 10 heurystyk Nielsena i skala severity. Jak przeprowadzić UX audit."
        canonicalUrl="https://fotz.pl/blog/ux-audit-co-to"
      />
      <ArticleSchema
        title="Audyt UX — co to jest i jak go przeprowadzić?"
        description="Kompletny przewodnik po audycie UX: 4 frameworki, 10 heurystyk Nielsena, skala severity i kiedy zlecić UX audit."
        url="https://fotz.pl/blog/ux-audit-co-to"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Audyt UX", url: "https://fotz.pl/blog/ux-audit-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Audyt UX" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Audyt UX — co to jest i jak go przeprowadzić?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            UX audit to ekspercka ocena produktu bez kosztownych badań użytkowników.
            Poznaj 10 heurystyk Nielsena, 4 frameworki i jak priorytetyzować znalezione problemy.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest audyt UX?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Audyt UX</strong> to systematyczna ocena produktu cyfrowego przeprowadzana przez
              eksperta UX. Zamiast rekrutować i testować użytkowników, specjalista używa sprawdzonych
              heurystyk i zasad projektowania by zidentyfikować problemy użyteczności, dostępności
              i doświadczenia użytkownika.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Audyt UX jest świetnym pierwszym krokiem przed droższymi badaniami — identyfikuje
              "oczywiste" problemy, które można naprawić szybko. Jakob Nielsen szacuje,
              że doświadczony ekspert UX może znaleźć 75% wszystkich problemów użyteczności
              w produkcie bez udziału użytkowników.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "75%", opis: "problemów użyteczności identyfikuje ekspert UX bez badań użytkowników (Nielsen, 2000)" },
                { stat: "5 ekspertów", opis: "wystarczy do heurystycznej oceny — każdy kolejny generuje malejące zwroty" },
                { stat: "10×", opis: "ROI audytu UX — naprawienie problemu w designie jest 10× tańsze niż po wdrożeniu" },
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 frameworki audytu UX</h2>
            <div className="space-y-4">
              {auditFrameworks.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{f.framework}</h3>
                  <p className="text-slate-600 mb-3">{f.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Kiedy stosować:</p>
                      <p className="text-blue-800">{f.kiedy}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Output:</p>
                      <p className="text-slate-700">{f.output}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">10 heurystyk Nielsena</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {nielsenHeuristics.map((h, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{h.nr}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{h.heurystyka}</h3>
                      <p className="text-slate-600 text-xs">{h.opis}</p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Skala severity problemów UX</h2>
            <div className="space-y-3">
              {severityScale.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${
                    s.poziom === "0" ? "bg-slate-400" :
                    s.poziom === "1" ? "bg-green-500" :
                    s.poziom === "2" ? "bg-yellow-500" :
                    s.poziom === "3" ? "bg-orange-500" : "bg-red-600"
                  }`}>{s.poziom}</div>
                  <div>
                    <h3 className="font-bold text-slate-900">{s.label}</h3>
                    <p className="text-slate-600 text-sm">{s.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — audyt UX</h2>
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
