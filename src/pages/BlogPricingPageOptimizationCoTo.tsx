import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co powinna zawierać strona cennikowa?",
    answer:
      "Dobra strona cennikowa zawiera: jasne plany z nazwami (nie tylko cenami), tabelę porównania funkcji, rekomendowany plan (wyróżniony wizualnie), ceny miesięczne i roczne (z dyskontem), FAQ o cenach i płatnościach, social proof (liczba klientów, loga, testimoniale), CTA do free trial lub kontaktu, informację o gwarancji lub free tier, oraz możliwość kontaktu z sales dla enterprise. Transparentność cen buduje zaufanie.",
  },
  {
    question: "Ile planów cenowych powinienem mieć?",
    answer:
      "Optimum to 3-4 plany. Dlaczego 3? Efekt Goldilocks: klienci naturalnie wybierają środkową opcję (anchoring). Plan za drogi = anchor, plan tani = trap, plan środkowy = real target. Czwarty plan (Enterprise/Custom) dla dużych klientów jest często słuszny. Więcej niż 4 plany prowadzi do paraliżu decyzyjnego i niższej konwersji. Badania CXL pokazują że 3 opcje zwiększają konwersję o 23% vs. 5+ opcji.",
  },
  {
    question: "Czy lepiej wyświetlać ceny miesięczne czy roczne?",
    answer:
      "Najlepsza praktyka: dwa przełączniki (toggle) z rocznym jako domyślnym (lub wyróżnionym). Ceny roczne podziel przez 12 by pokazać 'miesięczny ekwiwalent' — psychologicznie niższa bariera. Wyraźnie pokaż oszczędność roczną (np. 'Zaoszczędź 20%'). HubSpot, Slack, Notion — wszyscy domyślnie pokazują ceny roczne. Konwersja do planu rocznego zwiększa retention i zmniejsza churn.",
  },
  {
    question: "Co to jest anchoring w cennikach?",
    answer:
      "Anchoring cenowy to technika gdzie pierwszy plan/cena którą widzi klient służy jako punkt odniesienia (anchor) dla wszystkich kolejnych ocen. Klasyczny przykład: pokaż drogi plan Enterprise pierwszym — wtedy Business plan wydaje się rozsądny. Lub pokaż przekreśloną cenę regularną i cenę promocyjną. Price anchoring jest fundamentem psychologii cen — 'Za ile to jest warte?' zawsze oceniamy w kontekście innych dostępnych opcji.",
  },
  {
    question: "Jak zoptymalizować stronę cennikową dla konwersji?",
    answer:
      "Kluczowe optymalizacje: 1) Wyróżnij rekomendowany plan (Most Popular, Best Value badge), 2) Użyj value metric zamiast arbitrary features (per seat, per transaction vs. per 'API calls'), 3) Usuń friction z free trial (brak karty kredytowej), 4) Dodaj calculator ROI dla B2B, 5) Używaj social proof blisko CTA, 6) Testuj A/B nazwy planów i CTAs, 7) Uprość tabelę porównania — max 10 kluczowych funkcji, 8) Transparentność: 'Anuluj kiedy chcesz'.",
  },
];

const pricingPageElements = [
  {
    element: "Plan names (nazwy planów)",
    opis: "Nazwy planów komunikują wartość i segment — 'Starter/Growth/Scale' lepsze niż 'Basic/Standard/Pro'",
    dobry: "Starter, Growth, Scale, Enterprise — jasna ścieżka wzrostu",
    zły: "Basic, Standard, Professional, Ultimate — generyczne i nijakie",
  },
  {
    element: "Featured plan (wyróżniony plan)",
    opis: "Wizualne wyróżnienie rekomendowanego planu kieruje wyborem i zwiększa konwersję",
    dobry: "Badge 'Most Popular', wyróżnione tło, powiększony plan — jednoznaczna rekomendacja",
    zły: "Wszystkie plany wyglądają identycznie — klient musi sam podjąć całą decyzję",
  },
  {
    element: "Value metric",
    opis: "Na czym bazuje cena — najlepiej na tym co rośnie gdy klient osiąga więcej sukcesów",
    dobry: "Per seat, per transaction, per 1000 contacts — skaluje się z wartością",
    zły: "Arbitralne 'Feature X included' — klient nie wie czy potrzebuje tej funkcji",
  },
  {
    element: "Feature comparison table",
    opis: "Tabela porównania planów — max 10 kluczowych funkcji, checkmarks i X",
    dobry: "Max 10 najważniejszych cech, grouping, tooltips z wyjaśnieniami",
    zły: "40 wierszy funkcji które klient nie rozumie — paraliż informacyjny",
  },
  {
    element: "Social proof",
    opis: "Logos klientów, liczba użytkowników, testimoniale — redukuje ryzyko decyzji",
    dobry: "Logo znanych firm + 'Zaufały nam 10 000+ firm' + 1-2 cytaty klientów",
    zły: "Brak dowodów społecznych — klient pyta 'A kto tego używa?'",
  },
  {
    element: "FAQ sekcja",
    opis: "Odpowiedzi na najczęstsze pytania o płatnościach, anulowaniu i funkcjach",
    dobry: "Pytania o kartę kredytową, anulowanie, upgrade, faktury VAT, wsparcie",
    zły: "Brak FAQ — klient musi dzwonić lub pisać żeby podjąć decyzję",
  },
];

const pricingPsychology = [
  { technika: "Charm pricing", opis: "Ceny kończące się na 9 lub 7 (99 zł zamiast 100 zł) — efekt lewej cyfry. 99 czyta się jako 'coś w okolicy 90', nie 100.", przykład: "29 zł/mies. zamiast 30 zł, 299 zł zamiast 300 zł" },
  { technika: "Decoy effect", opis: "Dodanie strategicznie 'gorszego' planu C obok A i B — sprawia że B wygląda jak oczywisty wybór.", przykład: "Plan S: 10 GB za 10 zł, Plan M: 15 GB za 14 zł, Plan L: 16 GB za 16 zł — M wygląda świetnie przy L" },
  { technika: "Annual vs. monthly framing", opis: "Pokazuj roczną cenę jako 'X zł miesięcznie' — psychologicznie lżejsze niż '12 × X zł rocznie'.", przykład: "120 zł/rok pokazuj jako '10 zł/miesięcznie'" },
  { technika: "Loss framing", opis: "Frame oszczędności jako straty: 'Tracisz 300 zł rocznie płacąc miesięcznie' zamiast 'Zaoszczędź 300 zł'.", przykład: "'Przy planie miesięcznym płacisz o 120 zł więcej rocznie'" },
];

export default function BlogPricingPageOptimizationCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Optymalizacja Strony Cennikowej — co powinna zawierać pricing page"
        description="Strona cennikowa — co powinna zawierać, ile planów, anchoring, psychologia cen i optymalizacja konwersji. Jak zbudować skuteczną pricing page dla SaaS i e-commerce."
        canonicalUrl="https://fotz.pl/blog/optymalizacja-strony-cennikowej"
      />
      <ArticleSchema
        title="Optymalizacja Strony Cennikowej — jak zbudować pricing page która konwertuje?"
        description="Kompletny przewodnik po stronach cennikowych: 6 kluczowych elementów, psychologia cen, anchoring, decoy effect i optymalizacje konwersji."
        url="https://fotz.pl/blog/optymalizacja-strony-cennikowej"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Strona Cennikowa", url: "https://fotz.pl/blog/optymalizacja-strony-cennikowej" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Strona Cennikowa" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Strona Cennikowa — co powinna zawierać i jak optymalizować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Pricing page to jeden z najważniejszych elementów konwersji. Poznaj 6 kluczowych
            elementów, psychologię cen i taktyki które zwiększają konwersję do płatnych planów.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dlaczego pricing page jest kluczowa?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Strona cennikowa</strong> to miejsce gdzie potencjalny klient podejmuje
              najtrudniejszą decyzję — czy zapłacić. To najważniejszy moment w całym funnel'u
              konwersji. Źle zaprojektowany cennik może zniszczyć konwersję nawet przy doskonałym
              produkcie i ruchu.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania pokazują że większość użytkowników spędza na stronie cennikowej tylko
              kilkanaście sekund zanim podejmie wstępną decyzję. Każdy element musi
              szybko budować zaufanie i redukować wątpliwości.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "3 plany", opis: "to optimum — efekt Goldilocks sprawia że klienci wybierają środkową opcję" },
                { stat: "23%", opis: "wyższa konwersja przy 3 opcjach vs. 5+ opcji — mniej wyboru = łatwiejsza decyzja" },
                { stat: "Toggle", opis: "roczny/miesięczny z rocznym jako domyślnym — zwiększa adoption planów rocznych" },
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kluczowych elementów pricing page</h2>
            <div className="space-y-4">
              {pricingPageElements.map((el, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{el.element}</h3>
                  <p className="text-slate-600 mb-3">{el.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Dobre:</p>
                      <p className="text-green-800">{el.dobry}</p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Złe:</p>
                      <p className="text-red-800">{el.zły}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Psychologia cen na pricing page</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pricingPsychology.map((p, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-2">{p.technika}</h3>
                  <p className="text-slate-600 text-sm mb-2">{p.opis}</p>
                  <p className="text-xs text-slate-400 italic">Przykład: {p.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — strona cennikowa</h2>
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
