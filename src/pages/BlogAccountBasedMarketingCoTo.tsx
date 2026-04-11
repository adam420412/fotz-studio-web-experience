import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Account-Based Marketing (ABM)?",
    answer:
      "Account-Based Marketing (ABM) to strategia B2B, w której działania marketingowe skupiają się na precyzyjnie wybranych, priorytetowych firmach (accounts) zamiast na szerokich grupach odbiorców. ABM traktuje każdą kluczową firmę jak odrębny rynek, tworząc spersonalizowane kampanie dla konkretnych decydentów w tych organizacjach.",
  },
  {
    question: "Czym różni się ABM od tradycyjnego marketingu B2B?",
    answer:
      "Tradycyjny marketing B2B generuje szeroką liczbę leadów i filtruje je na dole lejka. ABM odwraca lejek — identyfikuje docelowe firmy z góry, a następnie buduje spersonalizowane kampanie skierowane konkretnie do osób decyzyjnych w tych firmach. Mniej leadów, wyższa jakość i wartość kontraktów.",
  },
  {
    question: "Dla jakich firm ABM jest odpowiednie?",
    answer:
      "ABM najlepiej sprawdza się w firmach B2B sprzedających do przedsiębiorstw (Enterprise), z długim cyklem sprzedaży (6–18 miesięcy), wysoką wartością kontraktu (ACV powyżej 50 tys. PLN), gdzie decyzja jest podejmowana przez wiele osób (buying committee 3–10 osób) oraz gdzie indywidualizacja jest kluczem do wyróżnienia.",
  },
  {
    question: "Jakie narzędzia są używane w ABM?",
    answer:
      "Popularne narzędzia ABM to: platformy intent data (Bombora, G2), narzędzia do identyfikacji firm odwiedzających stronę (Clearbit Reveal, Albacross), platformy ABM (Demandbase, Terminus, 6sense), LinkedIn Ads (reklama targetowana na konkretne firmy i stanowiska) oraz CRM (Salesforce, HubSpot) do koordynacji sprzedaży.",
  },
  {
    question: "Jak mierzyć ROI ABM?",
    answer:
      "Kluczowe metryki ABM to: account engagement score (stopień zaangażowania kluczowych firm), pipeline z kont docelowych vs. pipeline z non-ABM, win rate i ACV na kontach ABM vs. pozostałych, czas do zamknięcia transakcji, liczba zaangażowanych stakeholderów w koncie oraz account penetration (zasięg w ramach jednej firmy).",
  },
];

const abmTiers = [
  {
    typ: "1:1 ABM (Strategic ABM)",
    konta: "5–30 kont",
    personalizacja: "Maksymalna — dedykowane kampanie dla każdej firmy",
    budżet: "Bardzo wysoki",
    zasoby: "Dedykowany marketer/sprzedawca na konto",
    przykład: "Dedykowany landing page, executive dinner, custom research report",
  },
  {
    typ: "1:Few ABM (ABM Lite)",
    konta: "30–150 kont",
    personalizacja: "Wysoka — personalizacja dla klastrów firm podobnego segmentu",
    budżet: "Wysoki",
    zasoby: "Marketer na klaster kont",
    przykład: "Spersonalizowane kampanie email dla 'fintech CFO', custom case study",
  },
  {
    typ: "1:Many ABM (Programmatic ABM)",
    konta: "150–1000+ kont",
    personalizacja: "Umiarkowana — personalizacja przez dane i automatyzację",
    budżet: "Średni",
    zasoby: "Marketing automation + intent data",
    przykład: "Dynamiczne reklamy display, personalizacja strony wg firmy odwiedzającego",
  },
];

const abmProcess = [
  {
    etap: "Identyfikacja (ICP i lista kont)",
    opis: "Zdefiniuj Ideal Customer Profile (ICP). Stwórz listę docelowych kont — na podstawie danych z CRM, intent data, firmografii i sygnałów zakupowych. Priorytetyzuj konta wg potencjału.",
  },
  {
    etap: "Research kont",
    opis: "Zbierz informacje o każdym koncie: struktura organizacyjna, problemy biznesowe, inicjatywy strategiczne, technologia, buying committee. Zidentyfikuj championa i executive sponsora.",
  },
  {
    etap: "Tworzenie spersonalizowanego contentu",
    opis: "Stwórz materiały adresujące konkretne wyzwania konta: landing page z nazwą firmy, case study z ich branży, research report dotyczący ich rynku, demo skierowane do ich use case.",
  },
  {
    etap: "Aktywacja wielokanałowa",
    opis: "Uruchom kampanię jednocześnie przez: LinkedIn Ads (firma + stanowisko), email (personalizowany), display ads (retargeting kont), direct mail, sales outreach. Skoordynuj z handlowcem.",
  },
  {
    etap: "Pomiar i optymalizacja",
    opis: "Śledź engagement score konta (ile osób, jak często, jakie treści). Przekaż MQA (Marketing Qualified Account) do sprzedaży w odpowiednim momencie. Analizuj win rate vs. non-ABM.",
  },
];

export default function BlogAccountBasedMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Account-Based Marketing (ABM) — co to jest? Kompletny przewodnik"
        description="Account-Based Marketing (ABM) — definicja, 3 modele ABM (1:1, 1:Few, 1:Many), proces i metryki. Kompletny przewodnik po marketingu opartym na kontach dla B2B."
        canonicalUrl="https://fotz.pl/blog/account-based-marketing-co-to"
      />
      <ArticleSchema
        title="Account-Based Marketing (ABM) — co to jest i jak działa?"
        description="Kompletny przewodnik po account-based marketingu: 3 modele ABM, proces od identyfikacji kont po pomiar ROI."
        url="https://fotz.pl/blog/account-based-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Account-Based Marketing", url: "https://fotz.pl/blog/account-based-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Account-Based Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Account-Based Marketing (ABM) — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            ABM to strategia B2B, która odwraca tradycyjny lejek. Zamiast szerokich kampanii,
            skupia się na precyzyjnie wybranych kluczowych firmach. Poznaj 3 modele ABM i jak wdrożyć tę strategię.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Account-Based Marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Account-Based Marketing (ABM)</strong> to strategia marketingu B2B, w której zamiast
              generować szeroką liczbę leadów, zespół marketingu i sprzedaży wspólnie identyfikuje
              priorytetowe firmy (accounts) i tworzy dla nich spersonalizowane kampanie.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badanie Alterra Group pokazuje, że 97% marketerów B2B osiąga wyższy ROI z ABM
              niż z innych strategii marketingowych. SiriusDecisions stwierdza, że firmy stosujące ABM
              osiągają o 208% wyższy przychód ze sprzedaży.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <p className="font-semibold text-indigo-900 mb-2">ABM odwraca tradycyjny lejek sprzedażowy:</p>
              <div className="grid grid-cols-2 gap-6 mt-3">
                <div>
                  <p className="font-medium text-slate-700 mb-1">Tradycyjny marketing</p>
                  <p className="text-slate-600 text-sm">Szeroki zasięg → kwalifikacja leadów → sprzedaż wybranym</p>
                </div>
                <div>
                  <p className="font-medium text-slate-700 mb-1">ABM</p>
                  <p className="text-slate-600 text-sm">Wybór kont → personalizacja → wielokanałowe zaangażowanie → sprzedaż</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 3 modele ABM */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 modele Account-Based Marketingu</h2>
            <div className="space-y-6">
              {abmTiers.map((tier, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {["1:1", "1:Few", "1:Many"][i]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl">{tier.typ}</h3>
                      <p className="text-slate-500 text-sm">Liczba kont: {tier.konta}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="font-medium text-slate-700 mb-1">Personalizacja:</p>
                      <p className="text-slate-600">{tier.personalizacja}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="font-medium text-slate-700 mb-1">Zasoby:</p>
                      <p className="text-slate-600">{tier.zasoby}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 italic">Przykładowe działania: {tier.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Proces ABM */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak wdrożyć ABM? 5 etapów</h2>
            <div className="space-y-5">
              {abmProcess.map((item, i) => (
                <div key={i} className="flex gap-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.etap}</h3>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — account-based marketing</h2>
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
