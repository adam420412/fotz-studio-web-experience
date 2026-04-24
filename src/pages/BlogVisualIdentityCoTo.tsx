import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest identyfikacja wizualna?",
    answer:
      "Identyfikacja wizualna (visual identity lub CI — Corporate Identity) to zestaw wszystkich wizualnych elementów marki — logo, paleta kolorów, typografia, ikony, fotografia, ilustracje i wzorce graficzne — zorganizowanych w spójny system. To nie tylko estetyka: skuteczna identyfikacja wizualna wyraża osobowość marki, buduje rozpoznawalność i tworzy zaufanie przez konsekwencję.",
  },
  {
    question: "Czym różni się identyfikacja wizualna od brandingu?",
    answer:
      "Branding to szersze pojęcie obejmujące wszystkie aspekty marki: wartości, misję, głos marki, doświadczenie klienta i tożsamość wizualną. Identyfikacja wizualna to wyłącznie wizualna warstwa brandingu — graficzne wyrażenie tożsamości marki. Branding decyduje CO marka komunikuje, identyfikacja wizualna decyduje jak to wygląda.",
  },
  {
    question: "Jakie są elementy identyfikacji wizualnej?",
    answer:
      "Podstawowe elementy: logo (symbol + logotyp), paleta kolorów (primary + secondary), typografia (fonty nagłówkowe i tekstowe), ikonografia i ilustracje, system fotograficzny, layout i grid system. Rozszerzone: animacje marki (motion graphics), fizyczne materiały (papier firmowy, wizytówki, packaging), space branding (wystrój biura) i merchandise.",
  },
  {
    question: "Co to jest brand book (brand guidelines)?",
    answer:
      "Brand book (brand guidelines) to dokument definiujący zasady stosowania elementów identyfikacji wizualnej: jak używać logo (wersje, rozmiary minimalne, obszary wolne, zakazy), palety kolorów (kody HEX, RGB, CMYK, Pantone), typografię (fonty, hierarchia, rozmiary), oraz przykłady prawidłowych i nieprawidłowych zastosowań. To 'biblia' marki zapewniająca spójność.",
  },
  {
    question: "Jak często należy odświeżać identyfikację wizualną?",
    answer:
      "Większość firm przeprowadza rebrand co 7–15 lat, kiedy marka traci aktualność lub pozycjonowanie się zmienia. Częstsze przesłanki do rebrandu to: fuzje i przejęcia, wejście na nowe rynki, zmiana grupy docelowej, negatywne skojarzenia z obecną marką, lub po prostu przestarzały design. Duże firmy (Google, Apple, Microsoft) przeprowadzają ewolucje tożsamości co kilka lat.",
  },
];

const viElements = [
  {
    element: "Logo",
    opis: "Centralny element identyfikacji. Może być: wordmark (sama nazwa), lettermark (inicjały), pictorial mark (symbol), combination mark (symbol + nazwa) lub emblem.",
    zasady: ["Czytelne w każdym rozmiarze (od favicon do billboardu)", "Działa w wersji monochromatycznej", "Zachowuje proporcje i obszary wolne", "Wersje na jasne i ciemne tła"],
    przykład: "Apple: pictorial mark, Nike: swoosh (pictorial), Google: wordmark",
  },
  {
    element: "Paleta Kolorów",
    opis: "Kolory definiują osobowość i emocje marki. System: 1–2 kolory primary, 2–3 secondary, neutralne (białe, szare, czarne).",
    zasady: ["Określ kody HEX, RGB i CMYK dla każdego koloru", "Sprawdź kontrast dla accessibility (WCAG AA)", "Ogranicz do 5–7 kolorów w systemie", "Definiuj proporcje użycia (60/30/10 rule)"],
    przykład: "McDonald's: żółty (radość, energia) + czerwony (apetyt, pilność)",
  },
  {
    element: "Typografia",
    opis: "Fonty komunikują osobowość: serif = tradycja/prestiż, sans-serif = nowoczesność/klarowność, display = unikalność/kreatywność.",
    zasady: ["Maksymalnie 2–3 fonty w systemie", "Zdefiniuj hierarchię: H1, H2, body, caption", "Sprawdź licencje komercyjne", "Zadbaj o fallback fonty webowe"],
    przykład: "Airbnb: Circular (niestandardowy krój), Apple: San Francisco",
  },
  {
    element: "Fotografía / Styl Wizualny",
    opis: "Wytyczne dotyczące styly fotografii, ilustracji, ikon: kolorystyka, kadrowanie, nastrój, tematyka, styl ludzi.",
    zasady: ["Zdefiniuj mood board z przykładami", "Określ czy preferujesz lifestyle vs. studio", "Spójny kolor skin tones i filtry", "Unikaj stock photos bez modyfikacji"],
    przykład: "Dove: naturalne, nieretuszowane zdjęcia kobiet w różnym wieku i typie urody",
  },
];

const rebrandingCases = [
  { firma: "Instagram", rok: "2016", zmiana: "Z retro aparatu do nowoczesnego gradientowego ikon", powód: "Modernizacja, dostosowanie do mobile-first" },
  { firma: "Airbnb", rok: "2014", zmiana: "Wprowadzenie 'Bélo' — symbol przynależności", powód: "Zmiana pozycjonowania z 'tani nocleg' na 'community belonging'" },
  { firma: "PKN Orlen", rok: "2020", zmiana: "Uproszczenie logo, nowy design system", powód: "Ekspansja na nowe rynki, modernizacja" },
  { firma: "Facebook → Meta", rok: "2021", zmiana: "Nowy logotyp Meta, ∞ symbol", powód: "Strategiczny pivot na metaverse, dystans od kontrowersji FB" },
  { firma: "Pepsi", rok: "2023", zmiana: "Powrót do retro estetyki z nowoczesnym twistem", powód: "70-lecie, nostalgic marketing, wyróżnienie wobec Coca-Coli" },
];

export default function BlogVisualIdentityCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Identyfikacja wizualna | Fotz Studio"
        description="Identyfikacja wizualna — definicja, 4 kluczowe elementy (logo, kolory, typografia, fotografia), brand book i kiedy robić rebrand. Kompletny przewodnik po…"
        canonical="https://fotz.pl/blog/identyfikacja-wizualna-co-to"

        keywords="Identyfikacja wizualna co to jest, Identyfikacja wizualna definicja, czym jest Identyfikacja wizualna, Identyfikacja wizualna w marketingu, Identyfikacja wizualna przykłady, jak działa Identyfikacja wizualna, Identyfikacja wizualna strategia"
      />
      <ArticleSchema
        title="Identyfikacja wizualna — co to jest i jak ją budować?"
        description="Kompletny przewodnik po identyfikacji wizualnej: 4 elementy visual identity, zasady brand guidelines i przykłady rebrandingów."
        url="https://fotz.pl/blog/identyfikacja-wizualna-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Identyfikacja Wizualna", url: "https://fotz.pl/blog/identyfikacja-wizualna-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Identyfikacja Wizualna", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Identyfikacja wizualna — co to jest i jak ją budować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Identyfikacja wizualna to graficzny język marki. Poznaj 4 kluczowe elementy (logo, kolory, typografia, fotografia),
            zasady tworzenia brand book i kiedy warto przeprowadzić rebrand.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest identyfikacja wizualna?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Identyfikacja wizualna</strong> (visual identity, CI — Corporate Identity)
              to zestaw elementów graficznych, które tworzą rozpoznawalny i spójny wygląd marki
              we wszystkich punktach styku z klientem — od strony internetowej, przez opakowania,
              po wizytówki i uniformy pracowników.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania pokazują, że konsekwentna identyfikacja wizualna zwiększa rozpoznawalność marki
              o 80% i może zwiększyć przychody nawet o 23% (Forbes). Spójność wizualna buduje zaufanie —
              mózg ludzki interpretuje chaos wizualny jako sygnał nieprofesjonalizmu.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* 4 elementy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 kluczowe elementy identyfikacji wizualnej</h2>
            <div className="space-y-6">
              {viElements.map((e, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-xl mb-3">{e.element}</h3>
                  <p className="text-slate-600 mb-4">{e.opis}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-2">Zasady stosowania:</p>
                      <ul className="space-y-1">
                        {e.zasady.map((z, j) => (
                          <li key={j} className="text-slate-700 text-sm flex gap-2">
                            <span className="text-indigo-500 flex-shrink-0">→</span>
                            {z}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-indigo-600 mb-2">Przykład:</p>
                      <p className="text-indigo-800 text-sm">{e.przykład}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Rebranding */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Znane przykłady rebrandingów</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Firma</th>
                    <th className="p-3 text-left">Rok</th>
                    <th className="p-3 text-left">Zmiana</th>
                    <th className="p-3 text-left">Powód</th>
                  </tr>
                </thead>
                <tbody>
                  {rebrandingCases.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.firma}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.rok}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.zmiana}</td>
                      <td className="p-3 text-indigo-700 text-sm">{row.powód}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — identyfikacja wizualna</h2>
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

      <RelatedArticles currentArticleId="identyfikacja-wizualna-co-to" />
      <ContactSection />
    </Layout>
  );
}
