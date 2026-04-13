import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest SAFE note?",
    answer: "SAFE (Simple Agreement for Future Equity) to instrument finansowy stworzony przez Y Combinator w 2013 roku, pozwalający inwestorom na wczesnym etapie (pre-seed, seed) inwestować w startup bez ustalania wyceny w momencie inwestycji. SAFE nie jest długiem (brak odsetek, brak terminu spłaty) — to umowa że w przyszłości, przy kolejnej priced round (np. Series A), inwestor otrzyma udziały po preferencyjnej cenie. SAFE szybko stał się standardem dla rund pre-seed w USA i coraz popularniejszy w Europie. Zalety: prosta dokumentacja (jeden 5-stronicowy dokument), brak negocjacji wyceny na wczesnym etapie, szybkie zamknięcie rundy (tygodnie zamiast miesięcy).",
  },
  {
    question: "Jak działa konwersja SAFE na udziały?",
    answer: "Konwersja SAFE: SAFE konwertuje automatycznie na udziały uprzywilejowane (Preferred Stock) w momencie następnej 'qualified financing round' — zazwyczaj Series A. Cena konwersji jest korzystna dla inwestora SAFE dzięki: Discount (rabat) — inwestor SAFE konwertuje z np. 20% rabatem do ceny w nowej rundzie. Jeśli Series A jest po 10 USD/share, inwestor SAFE płaci efektywnie 8 USD/share. Valuation Cap — SAFE ma ustalony maksymalny cap (np. 5M USD). Nawet jeśli Series A jest po wycenie 20M, inwestor konwertuje jakby wycena była 5M — otrzymując więcej udziałów. Inwestor dostaje lepszą z dwóch opcji: wynikającą z discountem lub z cap. Konwersja bez discountu i bez capu (MFN SAFE) istnieje ale jest mniej korzystna dla inwestorów.",
  },
  {
    question: "Czym SAFE różni się od convertible note?",
    answer: "SAFE vs. Convertible Note: Convertible Note to dług (pożyczka) który konwertuje na udziały. SAFE nie jest długiem. Kluczowe różnice: Odsetki — Convertible Note nalicza odsetki (zwykle 4-8% rocznie), SAFE nie. Termin spłaty — Convertible Note ma maturity date (zazwyczaj 12-24 miesiące), po którym musi być spłacony lub skonwertowany. SAFE nie ma terminu — trwa do kolejnej rundy lub exit. Dokumentacja — SAFE jest prostszy (1 dokument YC). Convertible Note wymaga bardziej rozbudowanej umowy. Skutki w przypadku likwidacji — Convertible Note jako dług ma wyższy priorytet spłaty. SAFE zachowuje się jak equity. Dziś SAFE jest dominującym instrumentem dla US startupów. W Europie wciąż popularniejsze są convertible notes ze względu na różnice prawne.",
  },
  {
    question: "Jakie są pułapki SAFE dla założycieli?",
    answer: "Pułapki SAFE: Stack dilution — każdy SAFE dilutuje cap table przy konwersji. Wiele SAFEów po różnych capach może znacząco rozcieńczyć founders przy Series A. Oblicz przed emisją każdego SAFE jaka będzie dilucja przy konwersji. Cap stack complexity — jeśli masz SAFE z cap 2M, SAFE z cap 4M i SAFE z cap 6M, obliczenie finalnego cap table przy Series A jest skomplikowane. Używaj narzędzi (Carta, Pulley). Post-money vs. pre-money SAFE — YC wprowadził Post-Money SAFE w 2018. W Post-Money SAFE % udziałów inwestora jest kalkulowany na wycenę po konwersji SAFE, co jest bardziej transparentne dla founders. Zawsze sprawdź czy masz Pre- czy Post-Money SAFE. Aggressive cap — zbyt niski cap = zbyt duża dilucja przy konwersji jeśli firma bardzo urośnie.",
  },
  {
    question: "Jak negocjować warunki SAFE?",
    answer: "Negocjacje SAFE: Valuation cap — najważniejszy parametr. Wyższy cap = lepsza dla founders. Negocjuj cap jak najbliżej tego co uważasz za fair wycenę firmy. Discount rate — standard to 20%, ale można negocjować do 0% (bez rabatu) jeśli masz silną pozycję. MFN (Most Favored Nation) — klauzula dająca inwestorowi prawo do warunków nie gorszych niż przyszli inwestorzy na SAFE. Popularny dla earliest angels. Pro-rata rights — prawo do uczestnictwa w kolejnych rundach proporcjonalnie do udziałów. Ważne dla dużych inwestorów. Information rights — prawo do regularnych raportów finansowych. Acceptowalne dla dużych tickets. Side letter — dodatkowe warunki negocjowane poza standardowym SAFE. Bądź ostrożny — komplikują cap table.",
  },
];

const safeTypes = [
  {
    typ: "Post-Money SAFE (YC Standard od 2018)",
    opis: "% ownership inwestora kalkulowany na post-money wycenę. Transparentny, łatwy do obliczenia dilucji.",
    dla: "Większość startupów robiących rundle pre-seed w USA",
    przykład: "500K SAFE @ 5M cap = 10% ownership (500K/5M). Proste.",
    kolor: "green",
  },
  {
    typ: "Pre-Money SAFE (YC oryginalny)",
    opis: "% ownership kalkulowany na pre-money wycenę plus wszystkie inne SAFEy. Trudniejszy do obliczenia.",
    dla: "Starsze transakcje, niektóre rynki europejskie",
    przykład: "Dilucja zależy od ile innych SAFEów jest w stacku — skomplikowane.",
    kolor: "orange",
  },
  {
    typ: "SAFE z dyskontem (bez cap)",
    opis: "Konwersja wyłącznie przez rabat (np. 20%) do ceny Series A. Brak capu oznacza brak ochrony przy dużym wzroście wyceny.",
    dla: "Późniejsze pre-seed gdy wycena jest bardziej przewidywalna",
    przykład: "Series A @ 10 USD/share. SAFE konwertuje @ 8 USD/share (20% discount).",
    kolor: "blue",
  },
  {
    typ: "SAFE z cap I dyskontem",
    opis: "Inwestor dostaje lepsze z dwóch: cap lub discount. Najbardziej korzystny dla inwestorów.",
    dla: "Standardowy pre-seed SAFE gdy obie strony chcą max ochrony",
    przykład: "Cap 4M USD + 20% discount. Inwestor bierze lepszą opcję przy konwersji.",
    kolor: "purple",
  },
];

const safeTimeline = [
  { etap: "Podpisanie SAFE", czas: "Dzień 1", opis: "Inwestor przekazuje pieniądze, firma emituje SAFE. Dokumentacja standardowa YC — kilka godzin pracy prawnika." },
  { etap: "Działanie SAFE", czas: "12-24 miesiące", opis: "Firma używa kapitału do wzrostu. SAFE widnieje na cap table jako 'outstanding SAFE'. Brak odsetek, brak rat." },
  { etap: "Qualified Financing", czas: "Przy Series A", opis: "Firma zamknęła priced round. Automatyczna konwersja SAFE na Preferred Stock po cenie z cap lub discountem." },
  { etap: "Po konwersji", czas: "Post Series A", opis: "Inwestor SAFE staje się udziałowcem. Widnieje w cap table jako Preferred stockholder z prawami określonymi w term sheet Series A." },
];

export default function BlogSafeNoteCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SAFE Note — co to jest i jak działa w startupie? | Fotz.pl"
        description="SAFE (Simple Agreement for Future Equity): jak działa konwersja, różnice vs convertible note, pułapki dla założycieli, typy SAFE i jak negocjować warunki."
        canonicalUrl="https://fotz.pl/blog/safe-note-co-to-jest-jak-dziala-startup"

        keywords="SAFE Note co to jest, SAFE Note definicja, czym jest SAFE Note, SAFE Note startup, SAFE Note jak liczyć, SAFE Note wzór, SAFE Note przykłady"
      />
      <ArticleSchema
        title="SAFE Note — co to jest i jak działa w startupie?"
        description="SAFE Note: instrument inwestycyjny YC, typy SAFE (post-money, pre-money), konwersja na udziały, pułapki i jak negocjować warunki dla założycieli startupów."
        url="https://fotz.pl/blog/safe-note-co-to-jest-jak-dziala-startup"
        datePublished="2024-02-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SAFE Note", url: "https://fotz.pl/blog/safe-note-co-to-jest-jak-dziala-startup" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "SAFE Note", href: "/blog/safe-note-co-to-jest-jak-dziala-startup" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Fundraising
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SAFE Note
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Simple Agreement for Future Equity — standard YC dla rund pre-seed.
              Brak wyceny, prosta dokumentacja, szybkie zamknięcie.
              Ale źle zrozumiany może drogo kosztować przy Series A.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Stworzony przez", value: "Y Combinator" },
                { label: "Rok powstania", value: "2013" },
                { label: "Standardowy discount", value: "20%" },
                { label: "Odsetki", value: "Brak" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-amber-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak działa SAFE w czasie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              SAFE to nie pożyczka i nie udziały — to prawo do udziałów w przyszłości.
              Oto jak przebiega cały cykl.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {safeTimeline.map((t, i) => (
              <FadeInView key={t.etap}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-amber-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">{i + 1}</div>
                    {i < safeTimeline.length - 1 && <div className="w-0.5 bg-amber-200 flex-1 mt-2" />}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex-1 mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-amber-800">{t.etap}</h3>
                      <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">{t.czas}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{t.opis}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Typy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typy SAFE</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie wszystkie SAFEy są takie same. Różnią się sposobem obliczania dilucji
              i ochroną dla inwestora.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {safeTypes.map((t) => (
              <FadeInView key={t.typ}>
                <div className={`rounded-xl border-2 p-5 ${
                  t.kolor === "green" ? "border-green-200 bg-green-50" :
                  t.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  t.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <h3 className={`font-bold text-base mb-2 ${
                    t.kolor === "green" ? "text-green-800" :
                    t.kolor === "orange" ? "text-orange-800" :
                    t.kolor === "blue" ? "text-blue-800" :
                    "text-purple-800"
                  }`}>{t.typ}</h3>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <p className="text-gray-700">{t.opis}</p>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Dla kogo</div>
                      <p className="text-gray-700">{t.dla}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Przykład</div>
                      <p className="text-gray-700">{t.przykład}</p>
                    </div>
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
