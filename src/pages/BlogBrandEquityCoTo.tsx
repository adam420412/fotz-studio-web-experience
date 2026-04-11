import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest brand equity?",
    answer:
      "Brand equity (kapitał marki) to dodatkowa wartość, którą marka wnosi do produktu lub usługi ponad wartość funkcjonalną samego produktu. To różnica w cenie, jaką klient jest gotowy zapłacić za markowy produkt vs. produkt generyczny o identycznych parametrach. Brand equity jest wynikiem świadomości marki, skojarzeń, postrzeganej jakości i lojalności klientów.",
  },
  {
    question: "Jak mierzyć brand equity?",
    answer:
      "Metody pomiaru brand equity: podejście finansowe (wartość marki jako aktywa w bilansie — Interbrand, Brand Finance), podejście konsumenckie (badania świadomości, skojarzeń, lojalności — Kevin Keller's CBBE model), oraz podejście rynkowe (premium pricing vs. private label, market share, Brand Strength Index). Wiodące agencje rankingowe: Interbrand 'Best Global Brands', Forbes 'World's Most Valuable Brands'.",
  },
  {
    question: "Jakie czynniki budują brand equity?",
    answer:
      "Kluczowe czynniki budowania brand equity wg modelu Kellera to: Brand Awareness (świadomość — czy klienci znają markę), Brand Associations (skojarzenia — co myślą kiedy słyszą nazwę), Perceived Quality (postrzegana jakość — niezależna od rzeczywistej), Brand Loyalty (lojalność — jak silna więź z marką), oraz Proprietary Brand Assets (własne aktywa — patenty, kanały, dystrybucja).",
  },
  {
    question: "Dlaczego brand equity jest ważne dla biznesu?",
    answer:
      "Silna brand equity umożliwia: premium pricing (wyższe marże bez utraty klientów), łatwiejsze wprowadzanie nowych produktów (brand extensions), niższe koszty pozyskania klientów (klienci sami szukają marki), odporność na kryzysy i ataki konkurencji, lepsze warunki negocjacji z partnerami i dystrybutorami, oraz wyższą wycenę firmy przy fuzjach i przejęciach.",
  },
  {
    question: "Jaka jest różnica między brand equity a brand value?",
    answer:
      "Brand equity to szerokie pojęcie obejmujące zarówno finansowe jak i niematerialne aspekty wartości marki. Brand value to finansowe ujęcie — konkretna kwota, ile marka jest warta jako aktywo (np. Apple brand value: 880 mld USD wg Interbrand 2023). Brand equity jest subiektywna i wielowymiarowa, brand value jest wyrażona w pieniądzu.",
  },
];

const kellerModel = [
  {
    poziom: "Brand Identity — Kim jesteś?",
    wymiar: "Brand Salience",
    opis: "Jak głęboko i szeroko jest zakorzeniona marka w pamięci konsumenta? Czy myśląc o kategorii, marka przychodzi na myśl?",
    przykład: "Coca-Cola w kategorii 'napój' — natychmiastowe skojarzenie, top of mind",
    budowanie: "Konsekwentna komunikacja, szeroka dystrybucja, memorability",
  },
  {
    poziom: "Brand Meaning — Czym jesteś?",
    wymiar: "Performance + Imagery",
    opis: "Co klient myśli o marce? Racjonalne (performance: jakość, cechy) i emocjonalne (imagery: osobowość, styl życia) skojarzenia.",
    przykład: "BMW: performance = jakość inżynierii; imagery = prestiż i przyjemność z jazdy",
    budowanie: "Spójna komunikacja, design, doświadczenia z produktem",
  },
  {
    poziom: "Brand Response — Co myśl/czujesz?",
    wymiar: "Judgements + Feelings",
    opis: "Oceny i uczucia klientów wobec marki: jakość, wiarygodność, rozważanie zakupu, uczucia ciepła, radości, ekscytacji.",
    przykład: "Apple: zachwyt przy unboxingu, ekscytacja przy launch evencie, poczucie przynależności",
    budowanie: "Doskonałe doświadczenia, storytelling, CSR",
  },
  {
    poziom: "Brand Resonance — Jak silna jest relacja?",
    wymiar: "Resonance",
    opis: "Szczyt piramidy: lojalni adwokaci, aktywna społeczność, utożsamianie się z marką. Najrzadszy i najcenniejszy poziom.",
    przykład: "Harley-Davidson: tatuaże z logo, kluby, styl życia; Apple fanboys przy premierach",
    budowanie: "Community building, ekskluzywność, programy lojalnościowe",
  },
];

const brandEquityDrivers = [
  { driver: "Jakość Produktu", wpływ: "Fundamentalna — brand equity nie zastąpi złego produktu w długim terminie" },
  { driver: "Konsekwencja Komunikacji", wpływ: "Spójny visual identity, ton i przekaz przez lata budują znajomość" },
  { driver: "Dystrybucja i Dostępność", wpływ: "Marka szeroko dostępna ma większą szansę na top-of-mind awareness" },
  { driver: "Doświadczenie Klienta", wpływ: "Każda interakcja (zakup, obsługa, zwrot) buduje lub niszczy equity" },
  { driver: "PR i Media Coverage", wpływ: "Pozytywne publikacje budują autorytet i zaufanie niemożliwe przez reklamy" },
  { driver: "Innowacja i Relevanność", wpływ: "Marki, które tracą relevancję tracą equity — Kodak, Nokia, Blockbuster" },
];

export default function BlogBrandEquityCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Brand Equity — co to jest? Kapitał marki — model Kellera i budowanie"
        description="Brand equity (kapitał marki) — definicja, model Kellera (4 poziomy), czynniki budowania i jak mierzyć wartość marki. Kompletny przewodnik po brand equity."
        canonicalUrl="https://fotz.pl/blog/brand-equity-co-to"
      />
      <ArticleSchema
        title="Brand Equity — co to jest i jak budować kapitał marki?"
        description="Kompletny przewodnik po brand equity: piramida Kellera, czynniki budowania i metody pomiaru wartości marki."
        url="https://fotz.pl/blog/brand-equity-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Brand Equity", url: "https://fotz.pl/blog/brand-equity-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Brand Equity" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Brand Equity — co to jest i jak budować kapitał marki?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Brand equity to wartość niematerialna marki — zdolność do premium pricing, lojalności klientów
            i odporności na kryzysy. Poznaj piramidę Kellera, czynniki budowania i jak mierzyć kapitał marki.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest brand equity?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Brand equity</strong> to dodatkowa wartość, którą marka generuje w porównaniu
              do identycznego produktu bez rozpoznawalnej nazwy. To odpowiedź na pytanie: ile więcej
              klient zapłaci za Coca-Colę vs. generyczną colę? Ile więcej za iPhone vs. telefon
              o tych samych specyfikacjach ale bez logo Apple?
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Według Interbrand, Apple ma brand value przekraczającą 500 miliardów dolarów.
              To oznacza, że samo logo Apple — niezależnie od produktu — jest warte tę kwotę
              dzięki zbudowanemu przez dekady trust, lojalności i skojarzeniom jakości.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "3–5×", opis: "wyższe marże możliwe dla marek z wysokim brand equity vs. private label" },
                { stat: "880 mld $", opis: "szacowana brand value Apple (Interbrand 2023) — najcenniejsza marka na świecie" },
                { stat: "5×", opis: "tańsze pozyskanie klienta dla marek z wysokim brand awareness" },
              ].map((s, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-amber-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Piramida Kellera */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Piramida brand equity — model Kellera (CBBE)</h2>
            <p className="text-lg text-slate-600 mb-8">Model Customer-Based Brand Equity (CBBE) opisuje 4 poziomy budowania silnej marki — od podstawowej świadomości do głębokiej lojalności.</p>
            <div className="space-y-4">
              {kellerModel.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm" style={{marginLeft: `${i * 20}px`}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {4 - i}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{p.poziom}</h3>
                      <p className="text-xs text-amber-600 font-semibold">{p.wymiar}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{p.opis}</p>
                  <p className="text-xs text-slate-500">Przykład: {p.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Czynniki */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kluczowych czynników budowania brand equity</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Czynnik</th>
                    <th className="p-3 text-left">Wpływ na brand equity</th>
                  </tr>
                </thead>
                <tbody>
                  {brandEquityDrivers.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-amber-700">{row.driver}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.wpływ}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — brand equity</h2>
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
