import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest target audience?",
    answer:
      "Target audience (grupa docelowa) to precyzyjnie zdefiniowany segment odbiorców, do których firma kieruje swoje działania marketingowe. Definiowana przez cechy demograficzne (wiek, płeć, dochód, wykształcenie), geograficzne (kraj, miasto, region), psychograficzne (wartości, styl życia, osobowość) oraz behawioralne (nawyki zakupowe, lojalność, status użytkownika).",
  },
  {
    question: "Czym target audience różni się od buyer persona?",
    answer:
      "Target audience to szeroka definicja grupy docelowej — zbiór cech i atrybutów (np. 'kobiety 25–45 lat, miejskie, zainteresowane zdrowym stylem życia'). Buyer persona to fikcyjna, szczegółowa postać reprezentująca idealnego klienta z imienia, celami, obawami i zachowaniami. Persona humanizuje target audience i ułatwia tworzenie empatic contentu.",
  },
  {
    question: "Jak zdefiniować swoją grupę docelową?",
    answer:
      "Metody definiowania target audience: analiza obecnych klientów (kto kupuje, ile wydaje, jak często), badania ankietowe, wywiady z klientami, Google Analytics (demografia, zainteresowania), Social Insights (Facebook, Instagram), analiza konkurencji (do kogo mówi konkurent), dane branżowe, oraz testowanie hipotez przez kampanie reklamowe.",
  },
  {
    question: "Czym jest psychografia w opisie grupy docelowej?",
    answer:
      "Psychografia to opis wewnętrznych cech odbiorcy: wartości i przekonania, zainteresowania i pasje, styl życia (aktywny, rodzinny, korporacyjny), osobowość, postawy wobec różnych kwestii, oraz motywacje i aspiracje. Psychografia jest często ważniejsza niż demografia — dwie osoby w tym samym wieku i dochodzie mogą mieć całkowicie różne decyzje zakupowe.",
  },
  {
    question: "Jak zawęzić grupę docelową bez straty zasięgu?",
    answer:
      "Paradoks niszowania: im węższa i bardziej precyzyjna grupa docelowa, tym skuteczniejsza komunikacja i wyższy ROI, nawet przy mniejszym zasięgu. Zawężanie wg: etap życia (nowi rodzice vs. rodzice nastolatków), problem/ból (kto NAPRAWDĘ potrzebuje rozwiązania), gotowość zakupowa (problem-aware vs. solution-aware), oraz wartość życiowa klienta (focus na segment z najwyższym CLV).",
  },
];

const audienceSegmentation = [
  {
    typ: "Segmentacja Demograficzna",
    czynniki: ["Wiek i generacja (Gen Z, Milenialsi, Gen X, Baby Boomers)", "Płeć i tożsamość płciowa", "Dochód i siła nabywcza", "Wykształcenie i zawód", "Status rodzinny (single, rodzice małych dzieci)"],
    zastosowanie: "Podstawowy filtr — gdzie szukać grupy i jak konstruować przekaz",
    ograniczenie: "Dwie osoby o tych samych danych demo mogą mieć różne potrzeby",
  },
  {
    typ: "Segmentacja Geograficzna",
    czynniki: ["Kraj i region (różnice kulturowe w komunikacji)", "Miasto vs. wieś (potrzeby i styl życia)", "Klimat (produkty sezonowe)", "Gęstość zaludnienia", "Języki i dialekty"],
    zastosowanie: "Lokalizacja reklam, języki komunikacji, regulatory compliance",
    ograniczenie: "Geografia ogranicza, ale nie tłumaczy zachowań konsumenckich",
  },
  {
    typ: "Segmentacja Psychograficzna",
    czynniki: ["Wartości i przekonania (ekologia, tradycja, innowacja)", "Zainteresowania i pasje", "Styl życia (aktywny, minimalistyczny, rodzinny)", "Osobowość (introvert/extrovert)", "Aspiracje i cele"],
    zastosowanie: "Ton komunikacji, dobór kanałów, storytelling marki",
    ograniczenie: "Trudniejsza do zmierzenia niż demografia",
  },
  {
    typ: "Segmentacja Behawioralna",
    czynniki: ["Status użytkowania (nowy, powracający, lojalny, utracony)", "Okazja zakupu (regularne vs. okolicznościowe)", "Benefit szukany (cena vs. jakość vs. wygoda)", "Lojalność marki", "Etap ścieżki zakupowej"],
    zastosowanie: "Personalizacja komunikatów, marketing automation, retargeting",
    ograniczenie: "Wymaga danych historycznych o zachowaniach",
  },
];

const audienceResearchMethods = [
  { metoda: "Customer Interviews", kiedy: "Definiowanie lub weryfikacja persony", co_zyskujesz: "Głębokie rozumienie motywacji, obaw i języka klienta", nakład: "Wysoki (10–20 wywiadów)" },
  { metoda: "Ankiety Online (Typeform, Google Forms)", kiedy: "Zbieranie danych ilościowych od szerszej grupy", co_zyskujesz: "Wzorce demograficzne, preferencje, rankingi ważności", nakład: "Średni" },
  { metoda: "Google Analytics / GA4", kiedy: "Analiza istniejącego ruchu na stronie", co_zyskujesz: "Wiek, płeć, zainteresowania, zachowania na stronie", nakład: "Niski (dane już istnieją)" },
  { metoda: "Social Media Insights", kiedy: "Analiza fanów i followersów", co_zyskujesz: "Demografika, aktywność, najlepsze treści dla tej grupy", nakład: "Niski" },
  { metoda: "Facebook Audience Insights", kiedy: "Research przed kampanią reklamową", co_zyskujesz: "Zainteresowania, zachowania, strony które lubi target", nakład: "Niski" },
  { metoda: "Customer Data (CRM, Purchase History)", kiedy: "Analiza istniejących klientów", co_zyskujesz: "RFM (Recency, Frequency, Monetary), segmenty klientów wg wartości", nakład: "Średni" },
];

export default function BlogTargetAudienceCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Target Audience — co to jest? Grupa docelowa i segmentacja odbiorców"
        description="Target audience (grupa docelowa) — definicja, 4 typy segmentacji (demo, geo, psycho, behawioralna), metody badań i różnica vs. buyer persona. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/target-audience-co-to"

        keywords="Target Audience co to jest, Target Audience definicja, czym jest Target Audience, Target Audience przykłady, jak działa Target Audience, Target Audience znaczenie, Target Audience przewodnik"
      />
      <ArticleSchema
        title="Target Audience — co to jest i jak definiować grupę docelową?"
        description="Kompletny przewodnik po target audience: 4 segmentacje, 6 metod badań i różnice vs. buyer persona."
        url="https://fotz.pl/blog/target-audience-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Target Audience", url: "https://fotz.pl/blog/target-audience-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Target Audience" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Target Audience — co to jest i jak definiować grupę docelową?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Precyzyjnie zdefiniowana grupa docelowa to fundament każdej strategii marketingowej.
            Poznaj 4 typy segmentacji, 6 metod badań i różnicę między target audience a buyer persona.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest target audience?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Target audience</strong> (grupa docelowa) to precyzyjnie zdefiniowany segment
              ludzi, do których firma chce dotrzeć ze swoim przekazem marketingowym.
              Zamiast mówić "do wszystkich" — co znaczy "do nikogo" — skuteczny marketing
              definiuje, kto dokładnie jest odbiorcą i dostosowuje komunikat do jego potrzeb.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Seth Godin powiedział: "Jeśli mówisz do wszystkich, nie mówisz do nikogo."
              Im węższa i precyzyjniejsza grupa docelowa, tym trafniejszy komunikat,
              wyższe ROI i niższy koszt pozyskania klienta.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="font-semibold text-blue-900 mb-2">Target Audience vs. Buyer Persona:</p>
              <p className="text-blue-800 text-sm">
                <strong>Target Audience:</strong> "Kobiety 25–40 lat, miejskie, zainteresowane ekologią, dochód powyżej średniej"<br />
                <strong>Buyer Persona:</strong> "Marta, 32 lata, manager w korporacji, matka jednego dziecka, aktywna na Instagramie, szuka naturalnych kosmetyków bo ma wrażliwą skórę córki"
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 segmentacje */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 typy segmentacji grupy docelowej</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {audienceSegmentation.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{s.typ}</h3>
                  <ul className="space-y-1 mb-3">
                    {s.czynniki.map((c, j) => (
                      <li key={j} className="text-slate-600 text-sm flex gap-2">
                        <span className="text-blue-500 flex-shrink-0">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 rounded p-2 mb-2">
                    <p className="text-xs font-semibold text-blue-600">Zastosowanie:</p>
                    <p className="text-blue-800 text-xs">{s.zastosowanie}</p>
                  </div>
                  <p className="text-xs text-slate-500 italic">Ograniczenie: {s.ograniczenie}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metody badań */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 metod badania grupy docelowej</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metoda</th>
                    <th className="p-3 text-left">Kiedy stosować</th>
                    <th className="p-3 text-left">Co zyskujesz</th>
                    <th className="p-3 text-left">Nakład</th>
                  </tr>
                </thead>
                <tbody>
                  {audienceResearchMethods.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.metoda}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kiedy}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.co_zyskujesz}</td>
                      <td className="p-3 text-blue-700 font-medium text-sm">{row.nakład}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — target audience i grupa docelowa</h2>
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
