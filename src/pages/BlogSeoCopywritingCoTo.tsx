import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest SEO copywriting?",
    answer:
      "SEO copywriting to pisanie treści zoptymalizowanych jednocześnie dla wyszukiwarek (Google) i dla ludzi. Dobry SEO copywriting nie wygląda jak wpychanie słów kluczowych — to naturalna, wartościowa treść która odpowiada na pytania użytkownika i zawiera odpowiednie frazy w odpowiednich miejscach. SEO copywriting łączy technikę (słowa kluczowe, nagłówki, meta tagi) z umiejętnościami pisarskimi (przekonująca treść, czytelna struktura, silne CTA).",
  },
  {
    question: "Jak dobierać słowa kluczowe do copywritingu SEO?",
    answer:
      "Proces doboru słów kluczowych: 1) Identyfikuj head keywords (krótkie, duże wolumeny, np. 'laptop') i long-tail keywords (frazy kilkusłowowe, mniejszy wolumen ale wyższa intencja, np. 'laptop do pracy zdalnej do 3000 zł'). 2) Sprawdzaj search intent — co chcą znaleźć szukający? Informacja, produkt, porównanie? 3) Analizuj SERP — jakie treści rankują wysoko? Artykuł, listing produktów, wideo? 4) Dobieraj difficulty vs. opportunity — zacznij od mniej konkurencyjnych fraz. Narzędzia: Ahrefs, Semrush, Google Keyword Planner.",
  },
  {
    question: "Ile razy powinienem używać słowa kluczowego w artykule?",
    answer:
      "Nie ma magicznej liczby — keyword stuffing (przesycenie) jest penalizowane przez Google. Zasady: Użyj primary keyword w tytule (H1), meta title, pierwszym akapicie i URL. Stosuj go naturalnie w treści (gęstość 1-3% to przestarzałe pojęcie — Google analizuje semantykę). Używaj semantic keywords i LSI (Latent Semantic Indexing) — pokrewne terminy i synonimy. Pisz dla człowieka, nie dla algorytmu. Google jest coraz lepszy w rozumieniu kontekstu i intencji.",
  },
  {
    question: "Jak pisać meta title i meta description pod SEO?",
    answer:
      "Meta title: max 60 znaków (dłuższy jest obcinany), primary keyword na początku, CTA lub differentiator, unikalny dla każdej strony. Przykład: 'SEO Copywriting — co to jest? Kompletny przewodnik [2024]'. Meta description: max 155-160 znaków, podsumowanie treści, primary keyword, CTA ('Sprawdź', 'Dowiedz się więcej'), unikalny. Uwaga: meta description nie wpływa bezpośrednio na ranking — ale wpływa na CTR w wynikach Google.",
  },
  {
    question: "Czym różni się copywriting od content writingu?",
    answer:
      "Copywriting to pisanie z celem perswazji i konwersji — reklamy, landing pages, emaile, product descriptions, CTA. Cel: skłonienie do akcji (zakup, zapis, klik). Content writing (content marketing) to pisanie wartościowych treści edukacyjnych — artykuły blogowe, poradniki, case studies. Cel: budowanie autorytetu i zaufania. SEO copywriting łączy oba: edukuje (content writing) i prowadzi do konwersji (copywriting), jednocześnie optymalizując pod Google.",
  },
];

const seoStructure = [
  {
    element: "URL",
    zasady: "Krótki, czytelny, zawiera primary keyword, bez polskich znaków, myślniki między słowami",
    przykład: "fotz.pl/blog/seo-copywriting-co-to zamiast fotz.pl/blog/?p=1234",
  },
  {
    element: "Meta Title (Tag Title)",
    zasady: "Max 60 znaków, primary keyword na początku, wyróżnik, unikalny per strona",
    przykład: "SEO Copywriting — co to jest? Kompletny przewodnik",
  },
  {
    element: "Meta Description",
    zasady: "Max 155 znaków, podsumowanie treści + keyword + CTA, nie wpływa na ranking ale na CTR",
    przykład: "SEO copywriting łączy optymalizację pod Google z pisaniem dla ludzi. Poznaj techniki, strukturę i narzędzia. Kompletny przewodnik.",
  },
  {
    element: "H1 (Nagłówek główny)",
    zasady: "Jeden per strona, zawiera primary keyword, opisuje treść, różni się od meta title",
    przykład: "SEO Copywriting — co to jest i jak pisać pod Google?",
  },
  {
    element: "H2/H3 (Podtytuły)",
    zasady: "Dzielą treść na sekcje, zawierają secondary keywords i pytania (dla featured snippets)",
    przykład: "H2: 'Jak dobierać słowa kluczowe?' H3: 'Primary vs. Long-tail keywords'",
  },
  {
    element: "Pierwszy akapit (intro)",
    zasady: "Zawiera primary keyword, hook dla czytelnika, odpowiedź na pytanie (BLUF principle)",
    przykład: "SEO copywriting to... [hook + primary keyword w pierwszych 100 słowach]",
  },
  {
    element: "Alt text obrazów",
    zasady: "Opisowy tekst alternatywny zawierający keyword, max 125 znaków, dla screenreaderów i Google Images",
    przykład: "alt='seo-copywriting-diagram-slowa-kluczowe' zamiast alt='IMG_1234'",
  },
  {
    element: "Internal links",
    zasady: "Linkuj do powiązanych artykułów, anchor text opisowy i zawierający keyword",
    przykład: "tekst: 'jak wybrać słowa kluczowe' linkowany do artykułu o keyword research",
  },
];

const contentFormats = [
  { format: "How-to (Poradnik)", intencja: "Informacyjna", struktura: "Problem → kroki rozwiązania → rezultat → FAQ", słowa: "'jak', 'jak zrobić', 'poradnik', 'tutorial'" },
  { format: "Co to jest (Definicja)", intencja: "Informacyjna", struktura: "Definicja → szczegóły → przykłady → FAQ", słowa: "'co to jest', 'definicja', 'znaczenie', 'wyjaśnienie'" },
  { format: "Porównanie (vs.)", intencja: "Zakupowa/badawcza", struktura: "Tabela + kryteria + rekomendacja + FAQ", słowa: "'vs', 'porównanie', 'różnica między', 'który lepszy'" },
  { format: "Lista (Best of)", intencja: "Zakupowa/badawcza", struktura: "Intro + X pozycji + summary", słowa: "'najlepsze', 'top 10', 'zestawienie', 'ranking'" },
  { format: "Landing Page", intencja: "Transakcyjna", struktura: "Hero → korzyści → social proof → CTA → FAQ", słowa: "'kup', 'zamów', 'cennik', 'oferta', '[produkt] cena'" },
];

const copywritingFormulas = [
  { formuła: "AIDA", rozwinięcie: "Attention → Interest → Desire → Action", zastosowanie: "Reklamy, emaile, landing pages, product descriptions" },
  { formuła: "PAS", rozwinięcie: "Problem → Agitation → Solution", zastosowanie: "Emaile sprzedażowe, content marketing, case studies" },
  { formuła: "FAB", rozwinięcie: "Features → Advantages → Benefits", zastosowanie: "Product pages, prezentacje, opisy produktów" },
  { formuła: "4Ps", rozwinięcie: "Picture → Promise → Proof → Push", zastosowanie: "Long-form content, sales pages, storytelling" },
];

export default function BlogSeoCopywritingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SEO Copywriting — co to jest? Pisanie pod Google i dla ludzi"
        description="SEO copywriting — definicja, struktura (URL, meta title, H1, intro), 5 formatów content, formuły AIDA/PAS i jak dobierać słowa kluczowe. Kompletny przewodnik po copywritingu SEO."
        canonicalUrl="https://fotz.pl/blog/seo-copywriting-co-to"
      />
      <ArticleSchema
        title="SEO Copywriting — co to jest i jak pisać pod Google?"
        description="Kompletny przewodnik po SEO copywritingu: struktura artykułu, dobór słów kluczowych, formuły (AIDA, PAS), formaty contentu i meta tagi."
        url="https://fotz.pl/blog/seo-copywriting-co-to"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SEO Copywriting", url: "https://fotz.pl/blog/seo-copywriting-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "SEO Copywriting" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            SEO Copywriting — co to jest i jak pisać pod Google?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            SEO copywriting łączy optymalizację dla wyszukiwarek z pisaniem dla ludzi.
            Poznaj strukturę artykułu, formaty contentu i formuły które zwiększają ruch organiczny.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest SEO copywriting?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>SEO copywriting</strong> to sztuka tworzenia treści które:
              1) Rankują wysoko w Google na wybrane frazy kluczowe,
              2) Angażują czytelników i skłaniają ich do akcji.
              Dobry SEO copywriting nie wygląda jak "pisanie pod algorytm" — to wartościowa treść
              która naturalnie zawiera właściwe frazy.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) to
              framework oceniający jakość treści. Im wyższa ocena E-E-A-T,
              tym lepsze rankingi — co oznacza, że jako ekspert piszesz naturalnie to
              co algorytm chce zobaczyć.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "E-E-A-T", opis: "Google ocenia Experience, Expertise, Authoritativeness i Trustworthiness treści" },
                { stat: "68%", opis: "doświadczeń online zaczyna się od wyszukiwarki — dlatego SEO content to fundament" },
                { stat: "3-6 mies.", opis: "tyle zwykle zajmuje osiągnięcie top 10 Google dla nowego artykułu SEO" },
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Struktura artykułu SEO — kluczowe elementy</h2>
            <div className="space-y-3">
              {seoStructure.map((el, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{el.element}</h3>
                      <p className="text-slate-600 text-sm mb-2">{el.zasady}</p>
                      <p className="text-xs text-blue-600 italic">Przykład: {el.przykład}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 formatów contentu SEO i ich intencja</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Format</th>
                    <th className="p-3 text-left">Intencja</th>
                    <th className="p-3 text-left">Struktura</th>
                    <th className="p-3 text-left">Triggery słów kluczowych</th>
                  </tr>
                </thead>
                <tbody>
                  {contentFormats.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700">{row.format}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.intencja}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.struktura}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.słowa}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Formuły copywritingowe</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {copywritingFormulas.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 text-lg mb-1">{f.formuła}</h3>
                  <p className="text-slate-700 text-sm font-medium mb-2">{f.rozwinięcie}</p>
                  <p className="text-slate-500 text-xs">{f.zastosowanie}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — SEO copywriting</h2>
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
