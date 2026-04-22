import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są brand guidelines?",
    answer:
      "Brand guidelines (wytyczne marki, brand book lub identity standards) to dokument definiujący jak marka powinna być prezentowana we wszystkich materiałach i kanałach. Obejmuje: logo i jego warianty, paletę kolorów, typografię, styl fotografii, głos i ton komunikacji, przykłady zastosowań i zakazy. Brand guidelines zapewniają spójność wizualną i komunikacyjną marki niezależnie od tego kto tworzy materiały.",
  },
  {
    question: "Co powinny zawierać brand guidelines?",
    answer:
      "Kompletne brand guidelines zawierają: 1) Logo — wersje (kolorowa, czarna, biała), minimalne rozmiary, strefa ochronna, zakazy użycia; 2) Kolory — paleta podstawowa i uzupełniająca z kodami HEX/RGB/CMYK/Pantone; 3) Typografia — fonty nagłówkowe i body z hierarchią; 4) Zdjęcia — styl, nastrój, zakazy; 5) Głos marki — ton, słownictwo, przykłady; 6) Elementy graficzne — ikony, wzory, ilustracje; 7) Przykłady aplikacji na nośnikach.",
  },
  {
    question: "Czym różni się brand book od brand guidelines?",
    answer:
      "Brand book to szersze pojęcie obejmujące całą tożsamość marki — misję, wizję, wartości, osobowość, historię i zasady wizualne. Jest dokumentem narracyjnym o tym 'Kim jesteśmy i dlaczego istniejemy'. Brand guidelines (identity standards) to bardziej techniczny dokument — praktyczne zasady użycia elementów wizualnych i komunikacyjnych. Brand book = DNA marki. Brand guidelines = instrukcja obsługi.",
  },
  {
    question: "Jak używać kolorów w palecie marki?",
    answer:
      "Zasada 60-30-10: kolor dominujący (60% przestrzeni) — zazwyczaj neutralny lub podstawowy kolor marki; kolor drugorzędny (30%) — komplementarny lub kontrastowy; kolor akcentowy (10%) — wyrazisty kolor CTA i wyróżnień. Zawsze definiuj kody: HEX dla webdevelopmentu (#FF5733), RGB dla projektów cyfrowych (255, 87, 51), CMYK dla druku (0, 66, 80, 0), Pantone dla druku specjalistycznego.",
  },
  {
    question: "Jak wybrać odpowiednie fonty dla marki?",
    answer:
      "Zasady doboru typografii: nie używaj więcej niż 2–3 fontów (font nagłówkowy + body + opcjonalny akcent), upewnij się że fonty są czytelne w małych rozmiarach, sprawdź dostępność fontów (Google Fonts są darmowe, Adobe Fonts wymagają licencji), zachowaj kontrastowy charakter fontów (serif + sans-serif współdziałają dobrze), oraz zdefiniuj hierarchię: H1, H2, H3, body text z dokładnymi rozmiarami i wagami.",
  },
];

const brandGuideSections = [
  {
    sekcja: "Logo",
    zawartość: "Logotyp, sygnet, wordmark w wariantach: pełnokolorowy, czarny, biały, na jasnym, na ciemnym tle",
    kluczowe: "Strefa ochronna (clear space), minimalne wymiary, zakazy użycia (nie deformuj, nie zmieniaj kolorów, nie dodawaj cieni)",
    format: "Pliki: SVG (webDev), PNG (prezentacje), EPS (druk), PDF (brandbook)",
  },
  {
    sekcja: "Paleta Kolorów",
    zawartość: "Kolor primary, secondary, accent, neutralne (szarości, biele), kolory alertów (success, warning, error)",
    kluczowe: "Wszystkie formaty: HEX, RGB, CMYK, Pantone. Zasady kontrastu WCAG (dostępność). Palety dla jasnych i ciemnych interfejsów",
    format: "Wzorniki kolorów z podpisami i wartościami kodów",
  },
  {
    sekcja: "Typografia",
    zawartość: "Font nagłówkowy, body text, ewentualnie font akcentowy. Hierarchia: H1–H4, body, caption, label",
    kluczowe: "Rozmiary (px/rem), grubości (400, 600, 700), interlinię (line-height), spacing liter. Wersje responsywne dla mobile",
    format: "Przykłady tekstu w różnych zastosowaniach z dokładnymi parametrami",
  },
  {
    sekcja: "Ikonografia i Ilustracje",
    zawartość: "Styl ikon (outline, filled, duotone), styl ilustracji, źródła (custom, zewnętrzne — Noun Project, Feather)",
    kluczowe: "Spójność stylu — nie mieszaj outline z filled. Rozmiary i grid dla ikon. Zasady kolorowania",
    format: "Biblioteka ikon z przykładami użycia",
  },
  {
    sekcja: "Fotografia i Wideo",
    zawartość: "Styl zdjęć (dokumentalny, produktowy, ludzie), nastrój, paleta barwna, zakazy",
    kluczowe: "Przykłady właściwych zdjęć vs. nieodpowiednich. Wskazówki do zdjęć stockowych (jakie źródła, jakiego stylu unikać)",
    format: "Moodboard z pozytywnymi i negatywnymi przykładami",
  },
  {
    sekcja: "Głos i Ton",
    zawartość: "Osobowość marki (4 przymiotniki), zasady komunikacji, przykłady tekstów, zakazy komunikacyjne",
    kluczowe: "Ton dla różnych kontekstów: social media vs. oferty vs. obsługa klienta. Słownictwo do używania i unikania. Przykłady: dobrze/źle",
    format: "Tabela porównawcza z przykładami tekstów w różnych wariantach",
  },
];

const commonMistakes = [
  { błąd: "Brak lub nieaktualne brand guidelines", skutek: "Każdy dział tworzy inaczej — marka wygląda jak 10 różnych firm", rozwiązanie: "Utwórz guidelines przed skalowaniem teamu i agencji zewnętrznych" },
  { błąd: "Zbyt restrykcyjne wytyczne bez elastyczności", skutek: "Kreatywny team nie może eksperymentować, kampanie są nudne", rozwiązanie: "Zdefiniuj 'must have' (core) i 'nice to have' (expression) — przestrzeń do kreatywności" },
  { błąd: "Tylko PDF — brak cyfrowego Brand Hub", skutek: "Nikt nie używa bo trudne do znalezienia i aktualizowania", rozwiązanie: "Użyj Notion, Figma, Frontify, Brand.ai — żywy dokument z aktywami do pobrania" },
  { błąd: "Brak wersji dla wszystkich kanałów", skutek: "Guidelines dla print nie działają dla social mediów i odwrotnie", rozwiązanie: "Stwórz szablony dla każdego kanału: IG Stories, LinkedIn, email header, prezentacja" },
  { błąd: "Niepraktyczne — tylko estetyka, zero wdrożenia", skutek: "Piękny dokument którego nikt nie implementuje", rozwiązanie: "Dołącz konkretne szablony Figma, komponenty Canva, biblioteki Sketch/Adobe XD" },
];

export default function BlogBrandGuidelinesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Brand Guidelines — co to jest? Wytyczne marki i brand book"
        description="Brand guidelines — definicja, 6 sekcji (logo, kolory, typografia, ikony, foto, głos), zasada 60-30-10 kolorów i najczęstsze błędy. Jak tworzyć brand book…"
        canonical="https://fotz.pl/blog/brand-guidelines-co-to"

        keywords="Brand Guidelines co to jest, Brand Guidelines definicja, czym jest Brand Guidelines, Brand Guidelines w marketingu, Brand Guidelines przykłady, jak działa Brand Guidelines, Brand Guidelines strategia"

        canonical="https://fotz.pl/blog/brand-guidelines-co-to"
      />
      <ArticleSchema
        title="Brand Guidelines — co to jest i jak tworzyć wytyczne marki?"
        description="Kompletny przewodnik po brand guidelines: 6 kluczowych sekcji, zasada 60-30-10 kolorów, wybór typografii i 5 błędów do unikania."
        url="https://fotz.pl/blog/brand-guidelines-co-to"
        datePublished="2024-01-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Brand Guidelines", url: "https://fotz.pl/blog/brand-guidelines-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Brand Guidelines", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Brand Guidelines — co to jest i jak tworzyć wytyczne marki?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Brand guidelines zapewniają spójność marki we wszystkich kanałach i materiałach.
            Poznaj 6 kluczowych sekcji, zasadę 60-30-10 i jak stworzyć żywy brand book.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym są brand guidelines?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Brand guidelines</strong> to dokument definiujący zasady wizualne i komunikacyjne
              marki — jak logo, kolory, typografia, styl fotografii i głos marki powinny być
              używane we wszystkich materiałach. To "instrukcja obsługi" tożsamości marki
              dla designerów, copywriterów, agencji i partnerów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania Lucidpress: marki które konsekwentnie stosują wytyczne osiągają
              o 20% wyższe przychody. A Siegel+Gale: 8 na 10 konsumentów jest bardziej
              skłonnych do zakupu od marki ze spójną identyfikacją we wszystkich touchpointach.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "20%", opis: "wyższe przychody firm konsekwentnie stosujących wytyczne marki (Lucidpress)" },
                { stat: "80%", opis: "konsumentów preferuje marki ze spójną identyfikacją wizualną (Siegel+Gale)" },
                { stat: "3.5×", opis: "wyższe brand awareness marek z konsekwentną komunikacją vs. niespójnych" },
              ].map((s, i) => (
                <div key={i} className="bg-slate-100 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-slate-800 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kluczowych sekcji brand guidelines</h2>
            <div className="space-y-4">
              {brandGuideSections.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                    <h3 className="font-bold text-slate-900 text-lg">{s.sekcja}</h3>
                  </div>
                  <p className="text-slate-600 mb-3 text-sm">{s.zawartość}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Kluczowe elementy:</p>
                      <p className="text-slate-700">{s.kluczowe}</p>
                    </div>
                    <div className="bg-amber-50 rounded p-3">
                      <p className="text-xs font-semibold text-amber-600 mb-1">Formaty plików:</p>
                      <p className="text-amber-800">{s.format}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 najczęstszych błędów w brand guidelines</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Błąd</th>
                    <th className="p-3 text-left">Skutek</th>
                    <th className="p-3 text-left">Rozwiązanie</th>
                  </tr>
                </thead>
                <tbody>
                  {commonMistakes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-red-700 text-sm">{row.błąd}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.skutek}</td>
                      <td className="p-3 text-green-700 text-sm">{row.rozwiązanie}</td>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — brand guidelines</h2>
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

      <RelatedArticles currentArticleId="brand-guidelines-co-to" />
      <ContactSection />
    </Layout>
  );
}
