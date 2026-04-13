import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest strategia komunikacji?",
    answer:
      "Strategia komunikacji to dokument definiujący jak firma komunikuje się ze swoimi interesariuszami — klientami, mediami, inwestorami, pracownikami. Określa: co mówimy (kluczowe komunikaty), do kogo mówimy (grupy docelowe), jak mówimy (ton i styl), przez jakie kanały i z jaką częstotliwością. Dobra strategia komunikacji zapewnia spójność przekazu we wszystkich punktach styku z marką.",
  },
  {
    question: "Czym różni się strategia komunikacji od strategii marketingowej?",
    answer:
      "Strategia marketingowa definiuje jak firma osiąga cele biznesowe przez działania rynkowe (segmentacja, targeting, positioning, mix marketingowy). Strategia komunikacji jest węższa — skupia się na tym jak i co firma komunikuje. Marketing może obejmować cenę, dystrybucję, produkt — komunikacja dotyczy tylko przekazu. Komunikacja jest elementem marketing mix (Promotion), ale obejmuje też komunikację wewnętrzną, PR i investor relations.",
  },
  {
    question: "Co to jest key message w strategii komunikacji?",
    answer:
      "Key message (kluczowy komunikat) to główna myśl, którą firma chce przekazać swojej grupie docelowej — esencja wartości i propozycji w jednym zdaniu. Cechy dobrego key message: jasny i prosty (rozumiany przez 12-latka), różnicujący (czegoś co nie mówi konkurencja), wiarygodny (popierany dowodem), istotny dla odbiorcy (odpowiada na jego potrzeby) i zapamiętywany (emocjonalny lub imagery). Key message to 'obietnica marki' w kilku słowach.",
  },
  {
    question: "Jak zdefiniować ton komunikacji marki?",
    answer:
      "Ton komunikacji (brand voice) definiuje się przez: 4 przymiotniki opisujące jak marka 'brzmi' (np. ekspercka, ciepła, bezpośrednia, odważna), antyprzykłady (czym NIE jest: nie formalna, nie protekcjonalna), przykłady w różnych kontekstach (social media vs. email reklamacyjny vs. oferta), instrukcje dla treści generowanych przez AI lub external copywriterów.",
  },
  {
    question: "Jakie są główne kanały komunikacji w strategii?",
    answer:
      "Kanały komunikacji dzielą się na: Owned (własne) — strona www, blog, newsletter, social media prowadzone przez markę; Earned (zdobyte) — media, recenzje, mentions, word of mouth; Paid (płatne) — reklama Google/Meta/LinkedIn, sponsoring; Shared (współdzielone) — social media platform content. Strategia komunikacji powinna definiować rolę i cel każdego kanału w customer journey.",
  },
];

const commFramework = [
  {
    element: "Cel komunikacji",
    pytania: ["Co chcemy osiągnąć przez komunikację?", "Świadomość / Rozważanie / Zakup / Lojalność?", "Jak mierzymy sukces?"],
    przykład: "Zwiększyć brand awareness wśród MŚP o 30% w ciągu 12 miesięcy",
    błąd: "Cel 'lepsza komunikacja' bez mierzalnych wskaźników",
  },
  {
    element: "Grupy docelowe",
    pytania: ["Do kogo mówimy?", "Primary vs. secondary audience?", "Co każda grupa wie, myśli i czuje o marce?"],
    przykład: "Primary: CFO firmy 50–500 pracowników. Secondary: IT Manager jako implementator",
    błąd: "Jeden komunikat dla wszystkich — nie trafia do nikogo",
  },
  {
    element: "Kluczowe komunikaty",
    pytania: ["Co chcemy żeby każda grupa zapamiętała?", "Dowody na poparcie każdego komunikatu?", "Jak jest inaczej niż u konkurencji?"],
    przykład: "Do CFO: 'Redukujemy koszty obsługi klienta o 40% w 6 miesięcy' + 3 case studies",
    błąd: "Key messages jako lista cech produktu, nie korzyści dla odbiorcy",
  },
  {
    element: "Ton i styl",
    pytania: ["Jak brzmi nasza marka?", "Czym NIE jesteśmy?", "Jak dostosowujemy ton do kontekstu?"],
    przykład: "Ekspercki ale dostępny. Nie akademicki, nie żargonowy. Ciepły w social, precyzyjny w ofertach.",
    błąd: "Brak konsekwencji — inny ton na www, inny na social, inny w emailach",
  },
  {
    element: "Kanały i częstotliwość",
    pytania: ["Gdzie jest nasza grupa docelowa?", "Jaką rolę pełni każdy kanał?", "Jaka częstotliwość w każdym kanale?"],
    przykład: "LinkedIn (3×/tydzień, thought leadership), Blog (2×/tydzień, SEO), Newsletter (1×/tydzień, retention)",
    błąd: "Obecność wszędzie bez strategii — efekt rozmycia i mała jakość",
  },
  {
    element: "Mierzenie i optymalizacja",
    pytania: ["Jakie metryki dla każdego kanału?", "Kiedy robimy review?", "Jak iterujemy na podstawie danych?"],
    przykład: "Kwartalny brand awareness survey, miesięczne metryki kanałów, tygodniowy przegląd zaangażowania",
    błąd: "Strategia jako dokument pisany raz na rok, nigdy nie aktualizowany",
  },
];

const messagingHierarchy = [
  { poziom: "Brand Promise", opis: "Nadrzędna obietnica marki — ponadczasowa i emocjonalna", przykład: "Apple: 'Think different'. Nike: 'Just do it'", zakres: "Wszystkie komunikaty" },
  { poziom: "Value Proposition", opis: "Konkretna propozycja wartości — co oferujemy i dla kogo", przykład: "Slack: 'Where work happens' — komunikacja zespołowa w jednym miejscu", zakres: "Strona główna, oferty" },
  { poziom: "Key Messages (x3)", opis: "3 główne komunikaty wspierające Value Proposition z dowodami", przykład: "1. Szybkość, 2. Integracje, 3. Bezpieczeństwo — każdy z case study/danymi", zakres: "Website, collateral, sprzedaż" },
  { poziom: "Proof Points", opis: "Konkretne dane, case studies, testimoniale potwierdzające każdy key message", przykład: "'40% szybsza komunikacja — case study Airbnb z konkretnymi liczbami'", zakres: "Sales materials, case studies" },
  { poziom: "Elevator Pitch", opis: "30-sekundowa wersja propozycji wartości do zastosowań networking/sales", przykład: "'Pomagamy teamom zamienić chaos emailowy w zorganizowaną komunikację projektową'", zakres: "Sales, events, social bios" },
];

export default function BlogCommunicationStrategyCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Strategia komunikacji — co to jest? Jak budować komunikację marki?"
        description="Strategia komunikacji — definicja, 6-elementowy framework, hierarchia komunikatów (brand promise, key messages, proof points), ton marki i kanały. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/strategia-komunikacji-co-to"

        keywords="Strategia komunikacji co to jest, Strategia komunikacji definicja, czym jest Strategia komunikacji, Strategia komunikacji przykłady, jak działa Strategia komunikacji, Strategia komunikacji znaczenie, Strategia komunikacji przewodnik"
      />
      <ArticleSchema
        title="Strategia komunikacji — co to jest i jak ją budować?"
        description="Kompletny przewodnik po strategii komunikacji: 6-elementowy framework, hierarchia komunikatów, key messages, ton marki i kanały."
        url="https://fotz.pl/blog/strategia-komunikacji-co-to"
        datePublished="2024-01-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Strategia Komunikacji", url: "https://fotz.pl/blog/strategia-komunikacji-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Strategia Komunikacji" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Strategia komunikacji — co to jest i jak ją budować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Strategia komunikacji zapewnia spójność przekazu marki w każdym kanale i punkcie styku.
            Poznaj 6-elementowy framework, hierarchię komunikatów i jak definiować ton marki.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest strategia komunikacji?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Strategia komunikacji</strong> to plan definiujący jak firma przekazuje
              swoje wartości, propozycję i wiadomości do wszystkich grup docelowych przez
              wszystkie kanały. To fundament spójnego budowania marki — bez niej każdy
              dział komunikuje inaczej, a klient nie wie czego się spodziewać.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania Lucidpress: firmy z konsekwentną komunikacją marki osiągają o 20%
              wyższe przychody. A McKinsey: spójne doświadczenie marki we wszystkich
              touchpointach zwiększa satysfakcję klientów o 20% i przychody o 15%.
            </p>
            <div className="bg-slate-100 rounded-xl p-6">
              <p className="font-semibold text-slate-900 mb-3">Strategia komunikacji odpowiada na pytania:</p>
              <div className="grid md:grid-cols-2 gap-2">
                {["Co mówimy? (key messages)", "Do kogo mówimy? (grupy docelowe)", "Jak mówimy? (ton, styl)", "Gdzie mówimy? (kanały)", "Kiedy mówimy? (częstotliwość)", "Po co mówimy? (cel komunikacji)"].map((q, i) => (
                  <div key={i} className="flex gap-2 text-slate-700">
                    <span className="text-slate-400 font-bold">{i + 1}.</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6-elementowy framework */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6-elementowy framework strategii komunikacji</h2>
            <div className="space-y-5">
              {commFramework.map((el, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{el.element}</h3>
                      <div className="bg-emerald-50 rounded p-3 mb-3">
                        <p className="text-xs font-semibold text-emerald-600 mb-1">Kluczowe pytania:</p>
                        <ul className="space-y-1">
                          {el.pytania.map((p, j) => (
                            <li key={j} className="text-emerald-800 text-sm">• {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                          <p className="text-slate-700 italic">{el.przykład}</p>
                        </div>
                        <div className="bg-red-50 rounded p-2">
                          <p className="text-xs font-semibold text-red-600 mb-1">Częsty błąd:</p>
                          <p className="text-red-800">{el.błąd}</p>
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

      {/* Hierarchia komunikatów */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Hierarchia komunikatów marki</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Poziom</th>
                    <th className="p-3 text-left">Opis</th>
                    <th className="p-3 text-left">Przykład</th>
                    <th className="p-3 text-left">Zastosowanie</th>
                  </tr>
                </thead>
                <tbody>
                  {messagingHierarchy.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-emerald-700">{row.poziom}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.opis}</td>
                      <td className="p-3 text-slate-600 text-sm italic">{row.przykład}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.zakres}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — strategia komunikacji</h2>
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

      <ContactSection />
    </Layout>
  );
}
