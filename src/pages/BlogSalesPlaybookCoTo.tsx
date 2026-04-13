import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Sales Playbook?",
    answer: "Sales Playbook to dokument (lub system) który standaryzuje i kodyfikuje najlepsze praktyki sprzedażowe w organizacji — od procesu discovery, przez demo, po closing i objection handling. Playbook zawiera: ICP (Ideal Customer Profile) i buyer personas, kryteria kwalifikacji (MEDDIC, BANT), strukturę procesu sprzedaży krok po kroku, skrypty i pytania do każdego etapu, response na typowe obiekcje, materiały sprzedażowe (decks, one-pagery), przykłady email sequences, case studies i success stories. Playbook skraca ramp time nowych AE o 30-50% i zwiększa win rate przez standaryzację najlepszych praktyk.",
  },
  {
    question: "Co powinien zawierać Sales Playbook?",
    answer: "Sekcje Sales Playbook: 1. Nasza firma — value proposition, differentiators, competitive positioning. 2. ICP — kto jest idealnym klientem, kto nie jest. 3. Buyer Personas — buying committee, role, pain points, co motywuje decyzję. 4. Nasz produkt — features, use cases, jak tłumaczyć wartość per persona. 5. Proces sprzedaży — etapy, exit criteria dla każdego stage, timing. 6. Discovery Questions — lista pytań per segment i use case. 7. Demo guide — struktura demo, co pokazywać, kiedy. 8. Objection Handling — 15-20 typowych obiekcji z odpowiedziami. 9. Email Templates — cold outreach, follow-ups, closing emails. 10. Competitive Intel — battlecardy per kompetitor. 11. Case Studies — success stories per vertical lub use case.",
  },
  {
    question: "Jak zbudować Sales Playbook od zera?",
    answer: "Budowanie Sales Playbook: Zacznij od najlepszych — przeprowadź wywiady z top performers. Co robią inaczej? Jakich pytań używają? Jak radzą sobie z objekcjami? Dokumentuj present state — nagraj kilka rozmów sprzedażowych i przeanalizuj co działa. Stwórz draft z top performers — nie pisz playbook'u sam w HR/enablement, pisz go z tymi co sprzedają. Weryfikuj z klientami — sprawdź czy personas i pain points są aktualne. Pilotuj z 2-3 AE — przetestuj draft przed roll-outem. Iteruj — playbook to living document, nie pomnik. Regularny (kwartalny) przegląd i update. Narzędzia: Google Docs, Notion, Highspot, Showpad, Seismic.",
  },
  {
    question: "Jak Sales Playbook wpływa na wyniki sprzedaży?",
    answer: "Wpływ Sales Playbook na wyniki: Krótszy ramp time — nowi AE osiągają pełną produktywność 30-50% szybciej. Wyższy win rate — standaryzacja najlepszych praktyk podnosi win rate całego teamu. Mniejsza zależność od indywidualnych gwiazdorów — wiedza jest zdokumentowana i dostępna dla wszystkich. Lepsza forecastowalność — gdy wszyscy używają tego samego procesu, pipeline jest bardziej przewidywalny. Szybszy hiring i onboarding — nowi AE mają gotowy framework do nauki. Spójna komunikacja wartości — klienci słyszą konsekwentny messaging niezależnie od AE. Firmy z dojrzałym Sales Playbook mają statystycznie o 15-20% wyższy win rate i 25% krótszy sales cycle.",
  },
  {
    question: "Jak utrzymać Sales Playbook aktualnym?",
    answer: "Maintenance Sales Playbook: Kwartalny przegląd — aktualizuj po każdym kwartale na podstawie win/loss analysis. Właściciel dokumentu — wyznacz Sales Enablement managera lub doświadczonego AE jako owner. Feedback loop — regularnie zbieraj input od AE co nie działa lub czego brakuje. Competitive updates — aktualizuj battlecardy gdy competitor wprowadza zmiany. Product updates — sync z Product po każdym launch co zmienia value proposition. Wersjonowanie — oznaczaj wersje i zmiany żeby AE wiedzieli co jest nowe. Nie pozwól żeby Playbook stał się 'shelf document' — jeśli AE go nie używają, nie ma wartości. Najlepsze playbooki są krótkie, praktyczne i żyją w narzędziach których AE używają codziennie.",
  },
];

const playbookSections = [
  {
    sekcja: "ICP i Kwalifikacja",
    priorytet: "Fundament",
    zawartość: ["Ideal Customer Profile — rozmiar firmy, branża, technologia, growth signals", "Negatywne sygnały — kto NIE jest naszym klientem", "Kryteria kwalifikacji (MEDDIC, BANT)", "Lead scoring — jak priorytetyzować inbound leads"],
    kolor: "blue",
  },
  {
    sekcja: "Buyer Personas",
    priorytet: "Fundament",
    zawartość: ["Buying committee — Economic Buyer, Champion, User, Technical", "Pain points per persona", "Co motywuje decyzję zakupową (Jobs To Be Done)", "Jak rozmawiać z każdą personą — język, argumenty"],
    kolor: "green",
  },
  {
    sekcja: "Proces Sprzedaży",
    priorytet: "Kluczowy",
    zawartość: ["Etapy pipeline z definicjami i exit criteria", "Timing i velocity per etap", "Kto powinien być zaangażowany na każdym etapie", "Red flags i kiedy dyskwalifikować deal"],
    kolor: "purple",
  },
  {
    sekcja: "Discovery Questions",
    priorytet: "Kluczowy",
    zawartość: ["Pytania o sytuację (Situation)", "Pytania o problem i impact (Problem/Implication)", "Pytania o decyzję i budżet (Decision)", "Pytania do testowania Champion status"],
    kolor: "orange",
  },
  {
    sekcja: "Objection Handling",
    priorytet: "Kluczowy",
    zawartość: ["Top 15-20 objekcji z ustrukturyzowanymi odpowiedziami", "Price objections — jak bronić wartości", "Competitive objections — jak pozycjonować vs. każdy competitor", "No decision / status quo — jak przełamać inercję"],
    kolor: "red",
  },
  {
    sekcja: "Narzędzia i Materiały",
    priorytet: "Wspierający",
    zawartość: ["Email templates — cold outreach, follow-ups, closing", "Demo guide — struktura i skrypt", "Case studies per vertical/use case", "Battlecardy competitive — per kompetitor"],
    kolor: "teal",
  },
];

const playbookTools = [
  { narzędzie: "Highspot", typ: "Sales Enablement Platform", zastosowanie: "Centralizacja materiałów, analytics kto i jak używa treści, integration z CRM" },
  { narzędzie: "Showpad", typ: "Sales Enablement Platform", zastosowanie: "Content management, buyer engagement tracking, coaching" },
  { narzędzie: "Seismic", typ: "Sales Enablement Platform", zastosowanie: "Enterprise-grade, personalizacja treści, analytics użycia" },
  { narzędzie: "Notion / Confluence", typ: "Knowledge Base", zastosowanie: "Prosty start, łatwa edycja, dobry dla małych teamów" },
  { narzędzie: "Gong / Chorus", typ: "Conversation Intelligence", zastosowanie: "Analiza rozmów sprzedażowych — identyfikacja best practices do playbooka" },
];

export default function BlogSalesPlaybookCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sales Playbook — co to jest i jak zbudować? | Fotz.pl"
        description="Sales Playbook w sprzedaży B2B — co zawiera, jak zbudować, sekcje, narzędzia i wpływ na win rate i ramp time. Kompletny przewodnik dla Sales Leaders."
        canonicalUrl="https://fotz.pl/blog/sales-playbook-co-to-jest-jak-budowac"

        keywords="Sales Playbook co to jest, Sales Playbook definicja, czym jest Sales Playbook, Sales Playbook w sprzedaży, Sales Playbook strategia, Sales Playbook przykłady, jak używać Sales Playbook"

        canonical="https://fotz.pl/blog/sales-playbook-co-to-jest-jak-budowac"
      />
      <ArticleSchema
        title="Sales Playbook — co to jest i jak zbudować?"
        description="Kompletny przewodnik po Sales Playbook: sekcje, budowanie, maintenance i wpływ na wyniki sprzedaży."
        url="https://fotz.pl/blog/sales-playbook-co-to-jest-jak-budowac"
        datePublished="2024-02-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sales Playbook", url: "https://fotz.pl/blog/sales-playbook-co-to-jest-jak-budowac" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Sales Playbook", href: "/blog/sales-playbook-co-to-jest-jak-budowac" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sales Playbook
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Sales Playbook kodyfikuje najlepsze praktyki najlepszych handlowców i udostępnia je
              całemu teamowi. Firmy z dojrzałym Playbook mają 15-20% wyższy win rate i 25%
              krótszy sales cycle.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Sekcji playbook", value: "6+" },
                { label: "Wzrost win rate", value: "+15-20%" },
                { label: "Krótszy ramp", value: "30-50%" },
                { label: "Wzrost objekcji", value: "15-20 typowych" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sekcje Playbooka */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych sekcji Sales Playbook</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Kompletny Sales Playbook nie jest dokumentem — jest systemem wiedzy który żyje
              w narzędziach których AE używają codziennie i jest regularnie aktualizowany.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {playbookSections.map((s, i) => (
              <FadeInView key={s.sekcja}>
                <div className={`rounded-xl border-2 p-6 ${
                  s.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  s.kolor === "green" ? "border-green-200 bg-green-50" :
                  s.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  s.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  s.kolor === "red" ? "border-red-200 bg-red-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      s.kolor === "blue" ? "bg-blue-600" :
                      s.kolor === "green" ? "bg-green-600" :
                      s.kolor === "purple" ? "bg-purple-600" :
                      s.kolor === "orange" ? "bg-orange-600" :
                      s.kolor === "red" ? "bg-red-600" :
                      "bg-teal-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className={`font-bold text-xl ${
                          s.kolor === "blue" ? "text-blue-800" :
                          s.kolor === "green" ? "text-green-800" :
                          s.kolor === "purple" ? "text-purple-800" :
                          s.kolor === "orange" ? "text-orange-800" :
                          s.kolor === "red" ? "text-red-800" :
                          "text-teal-800"
                        }`}>{s.sekcja}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          s.priorytet === "Fundament" ? "bg-gray-200 text-gray-700" :
                          s.priorytet === "Kluczowy" ? "bg-orange-100 text-orange-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>{s.priorytet}</span>
                      </div>
                      <ul className="space-y-1">
                        {s.zawartość.map((z) => (
                          <li key={z} className="flex gap-2 text-sm text-gray-700">
                            <span className={`flex-shrink-0 ${
                              s.kolor === "blue" ? "text-blue-500" :
                              s.kolor === "green" ? "text-green-500" :
                              s.kolor === "purple" ? "text-purple-500" :
                              s.kolor === "orange" ? "text-orange-500" :
                              s.kolor === "red" ? "text-red-500" :
                              "text-teal-500"
                            }`}>→</span>
                            {z}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Narzędzia do Sales Playbook i Enablement</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór narzędzia zależy od rozmiaru teamu i budżetu. Dla małych teamów Notion wystarczy.
              Dla scale-upów i enterprise — dedykowane Sales Enablement Platforms.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {playbookTools.map((t, i) => (
              <FadeInView key={t.narzędzie}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4 items-center">
                    <div className="bg-cyan-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900">{t.narzędzie}</h3>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{t.typ}</span>
                      </div>
                      <p className="text-sm text-gray-700">{t.zastosowanie}</p>
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

      <RelatedArticles currentArticleId="sales-playbook-co-to-jest-jak-budowac" />
      <ContactSection />
    </Layout>
  );
}
