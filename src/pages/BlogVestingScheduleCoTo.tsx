import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest vesting schedule?",
    answer: "Vesting schedule (harmonogram nabywania uprawnień) to mechanizm stopniowego nabywania przez pracownika lub założyciela prawa do swoich udziałów lub opcji w czasie. Zamiast otrzymać 100% udziałów od razu, nabywasz je stopniowo przez określony czas (zazwyczaj 4 lata). Vesting chroni firmę przed scenariuszem gdy założyciel lub kluczowy pracownik odchodzi po 6 miesiącach i zatrzymuje pełen pakiet equity. Typowy standard (4 lata, 1 rok cliff): pierwsze 25% nabywa się po 12 miesiącach (cliff), następnie stopniowo co miesiąc przez kolejne 36 miesięcy. Vesting dotyczy zarówno założycieli (founder vesting) jak i pracowników (employee vesting przez ESOP).",
  },
  {
    question: "Co to jest cliff w vesting schedule?",
    answer: "Cliff (próg) to minimalny czas jaki musisz przepracować zanim zaczniesz nabywać jakiekolwiek equity. Standardowy cliff to 12 miesięcy (1 rok). Jeśli odejdziesz przed cliffem — otrzymujesz 0 equity. Po cliffie — natychmiast otrzymujesz skumulowane equity za cały okres (np. 25% po 12 miesiącach). Dlaczego cliff istnieje: chroni firmę przed kosztownym eksperymentem — jeśli pracownik nie pasuje do kultury, firma nie traci equity za krótki okres. Ale chroni też pracownika — po cliffie ma zdecydowaną porcję udziałów i może podjąć bardziej świadomą decyzję o pozostaniu lub odejściu. Dla założycieli cliff zazwyczaj jest krótszy lub nie istnieje — VCs wymagają founder vestingu ale uznają że założyciel już zainwestował czas przed fundingiem.",
  },
  {
    question: "Jak działa founder vesting?",
    answer: "Founder vesting: inwestorzy prawie zawsze wymagają founder vestingu jako warunku inwestycji. Chroni ich przed scenariuszem gdy co-founder odchodzi wczasach zanim firma wygenerowała wartość i zatrzymuje duży % udziałów. Typowy founder vesting: 4 lata, 1 rok cliff (lub bez cliffu dla pierwszego roku). Retroaktywny credit: VCs zazwyczaj akceptują że założyciel pracuje nad firmą od X miesięcy i dają credit — np. jeśli zakładasz firmę i fundraisujesz po 12 miesiącach, możesz negocjować że 12 miesięcy vesting jest już 'fulfilled'. Acceleration provisions: w umowach founder vesting często jest klauzula single lub double trigger acceleration — w razie exit lub fired without cause cały vesting przyspiesza.",
  },
  {
    question: "Czym jest acceleration w vesting?",
    answer: "Acceleration (przyspieszenie vestingu) to klauzula pozwalająca na natychmiastowe nabycie equity przed normalnym harmonogramem. Single trigger acceleration — uruchamia się przy jednym zdarzeniu: najczęściej sprzedaży firmy (M&A). Pracownik/founder dostaje 100% (lub X%) unvested equity od razu. Popularne dla kluczowych pracowników. Double trigger acceleration — wymaga dwóch zdarzeń: (1) zmiana kontroli (sprzedaż firmy) ORAZ (2) zwolnienie bez przyczyny lub zmiana roli. Chronuje pracownika przed sytuacją gdy nowy właściciel go zwalnia i przejmuje unvested equity. Bardziej przyjazne dla inwestorów bo nie automatic po każdym exit. Partial acceleration — np. 50% unvested przyspiesza przy trigger. Kompromis między founder/employee a investor interests.",
  },
  {
    question: "Jak vesting wygląda dla opcji ESOP?",
    answer: "Vesting opcji pracowniczych (ESOP): pracownik otrzymuje grant X opcji z vesting schedule. Opcje nabywają się stopniowo (standardowo 4 lata, 1 rok cliff). Po nabyciu opcji pracownik ma prawo do ich wykonania (exercise) — zakupu udziałów po strike price (cenie ustalonej w momencie grantu = Fair Market Value). Opcje nie są udziałami do momentu exercise. Exercise window (okno wykonania): pracownik ma określony czas na wykonanie opcji po odejściu z firmy. Standard to 90 dni po odejściu — jeśli nie wykona w tym czasie, traci opcje. Niektóre firmy (Stripe, Pinterest) rozszerzyły do 5-10 lat. ISO vs. NSO: Incentive Stock Options (ISO) mają preferencyjne opodatkowanie w USA. Non-qualified Stock Options (NSO) dla doradców, kontraktowców.",
  },
];

const vestingExamples = [
  {
    scenariusz: "Standard 4Y/1Y Cliff",
    opis: "Pracownik dostaje 4800 opcji. Cliff 12 miesięcy = 1200 opcji. Następnie 100 opcji/miesiąc przez 36 miesięcy.",
    miesiac6: "0 (przed cliffem)",
    miesiac12: "1200 (25% — cliff)",
    miesiac24: "2400 (50%)",
    miesiac48: "4800 (100% — fully vested)",
    kolor: "blue",
  },
  {
    scenariusz: "Monthly Vesting (bez cliff)",
    opis: "Doradcy często dostają monthly vesting bez cliffu — od pierwszego miesiąca nabywają proporcjonalne opcje.",
    miesiac6: "600 (12.5%)",
    miesiac12: "1200 (25%)",
    miesiac24: "2400 (50%)",
    miesiac48: "4800 (100%)",
    kolor: "green",
  },
  {
    scenariusz: "Back-loaded Vesting",
    opis: "Rzadkie, ale możliwe. Więcej equity nabywa się w późniejszych latach aby zachęcić do długoterminowego zaangażowania.",
    miesiac12: "10%",
    miesiac24: "20%",
    miesiac36: "30%",
    miesiac48: "40% (suma 100%)",
    kolor: "purple",
  },
];

const accelerationTypes = [
  { typ: "Single Trigger", trigger: "Sprzedaż firmy (M&A / change of control)", rezultat: "100% (lub X%) unvested equity przyspiesza natychmiastowo", kiedy: "Dla kluczowych pracowników i założycieli — kompensata za effort przy exit", kolor: "orange" },
  { typ: "Double Trigger", trigger: "Zmiana kontroli PLUS zwolnienie bez przyczyny lub materially adverse role change w 12 mies.", rezultat: "50-100% unvested equity przyspiesza", kiedy: "Najczęstszy standard dla pracowników — VC-friendly, chroni pracownika", kolor: "blue" },
  { typ: "Partial Acceleration", trigger: "Dowolny uzgodniony trigger (często single trigger)", rezultat: "Np. 50% lub 25% unvested przyspiesza", kiedy: "Kompromis między interesami pracownika a inwestorów przy exit", kolor: "green" },
];

export default function BlogVestingScheduleCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Vesting Schedule — co to jest i jak działa equity vesting? | Fotz.pl"
        description="Vesting schedule: cliff, founder vesting, opcje ESOP, acceleration (single/double trigger). Jak działa harmonogram nabywania uprawnień do equity w startupie."
        canonicalUrl="https://fotz.pl/blog/vesting-schedule-co-to-jest-equity-startup"
      />
      <ArticleSchema
        title="Vesting Schedule — co to jest i jak działa equity vesting?"
        description="Vesting schedule: standardy (4Y/1Y cliff), founder vesting, ESOP opcje, acceleration (single vs double trigger) i jak negocjować warunki vestingu."
        url="https://fotz.pl/blog/vesting-schedule-co-to-jest-equity-startup"
        datePublished="2024-02-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Vesting Schedule", url: "https://fotz.pl/blog/vesting-schedule-co-to-jest-equity-startup" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Vesting Schedule", href: "/blog/vesting-schedule-co-to-jest-equity-startup" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Equity &amp; HR
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vesting Schedule
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Equity nie dostaje się od razu — zarabia się na nie przez czas.
              Vesting schedule to mechanizm który aligns long-term interesy
              założycieli, pracowników i inwestorów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Standard vesting", value: "4 lata" },
                { label: "Standardowy cliff", value: "12 mies." },
                { label: "% po cliffie", value: "25%" },
                { label: "Po cliffie", value: "Co miesiąc" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Przykłady */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Przykłady harmonogramów vestingu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Różne scenariusze vestingu dla tego samego grantu 4800 opcji.
              Zobaczysz jak cliff i struktura wpływają na ilość nabytych opcji w czasie.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {vestingExamples.map((v) => (
              <FadeInView key={v.scenariusz}>
                <div className={`rounded-xl border-2 p-6 ${
                  v.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  v.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    v.kolor === "blue" ? "text-blue-800" :
                    v.kolor === "green" ? "text-green-800" :
                    "text-purple-800"
                  }`}>{v.scenariusz}</h3>
                  <p className="text-gray-600 text-sm mb-4">{v.opis}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Miesiąc 6", val: v.miesiac6 || "—" },
                      { label: "Miesiąc 12", val: v.miesiac12 || "—" },
                      { label: "Miesiąc 24", val: v.miesiac24 || "—" },
                      { label: "Miesiąc 48", val: v.miesiac48 || "—" },
                    ].map((m) => (
                      <div key={m.label} className="bg-white rounded-lg p-3 text-center border border-gray-200">
                        <div className="text-xs text-gray-500 mb-1">{m.label}</div>
                        <div className="font-bold text-gray-900 text-sm">{m.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Acceleration */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceleration — przyspieszenie vestingu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Co się dzieje z unvested equity w razie sprzedaży firmy lub zwolnienia?
              Acceleration provisions decydują o tym kto ile dostaje przy exit.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {accelerationTypes.map((a) => (
              <FadeInView key={a.typ}>
                <div className={`rounded-xl border-2 p-5 ${
                  a.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  a.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  "border-green-200 bg-green-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-3 ${
                    a.kolor === "orange" ? "text-orange-800" :
                    a.kolor === "blue" ? "text-blue-800" :
                    "text-green-800"
                  }`}>{a.typ}</h3>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Trigger</div><p className="text-gray-700">{a.trigger}</p></div>
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Rezultat</div><p className="text-gray-700 font-medium">{a.rezultat}</p></div>
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Kiedy stosować</div><p className="text-gray-700">{a.kiedy}</p></div>
                  </div>
                </div>
              </FadeInView>
            ))}
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

      <ContactSection />
    </Layout>
  );
}
