import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest public relations (PR)?",
    answer:
      "Public relations (PR) to zarządzanie komunikacją między organizacją a jej otoczeniem — mediami, opinią publiczną, klientami, inwestorami i pracownikami. Celem PR jest budowanie i ochrona reputacji, kształtowanie wizerunku marki oraz budowanie relacji z kluczowymi grupami interesariuszy poprzez earned media i zarządzanie narracją.",
  },
  {
    question: "Czym PR różni się od reklamy?",
    answer:
      "Reklama to płatne miejsce w mediach — firma kontroluje przekaz. PR to earned media — firma musi 'zasłużyć' na obecność w mediach poprzez wartościowe informacje, interesujące historie czy istotne działania. PR jest bardziej wiarygodny (źródłem jest dziennikarz, nie firma) ale trudniejszy do kontrolowania. Reguła branżowa: 1 PLN w PR jest wart 3–5 PLN w reklamie w kontekście wiarygodności.",
  },
  {
    question: "Jakie są rodzaje PR?",
    answer:
      "Główne obszary PR to: Media Relations (relacje z dziennikarzami), Corporate PR (wizerunek firmy), Crisis PR (zarządzanie kryzysem wizerunkowym), Product PR (PR produktowy), Investor Relations (komunikacja z inwestorami), Employee Relations (komunikacja wewnętrzna), Social Media PR oraz Government/Public Affairs (relacje z administracją).",
  },
  {
    question: "Jak pisać skuteczne komunikaty prasowe?",
    answer:
      "Skuteczny komunikat prasowy zawiera: newsworthy hook w pierwszym akapicie (co, kto, kiedy, gdzie, dlaczego), cytat rzecznika firmy, dane i kontekst rynkowy, sekcję O firmie (boilerplate), dane kontaktowe. Powinien być 300–500 słów, napisany w stylu dziennikarskim (odwrócona piramida) i wysłany przed embargiem w odpowiednim czasie.",
  },
  {
    question: "Jak mierzyć efektywność PR?",
    answer:
      "Tradycyjnie PR mierzono Advertising Value Equivalency (AVE) — przelicznikiem wartości mediów na ekwiwalent reklamowy. Nowoczesne podejście obejmuje: Earned Media Value (EMV), zasięg i jakość mediów (media tiers), sentiment coverage, Share of Voice, wzrost ruchu organicznego z wzmianek, konwersje z mediów earned i Net Promoter Score.",
  },
];

const prTypes = [
  { typ: "Media Relations", opis: "Budowanie relacji z dziennikarzami i redakcjami. Dostarczanie historii, które media chcą publikować.", narzędzia: "Pressletter, Prowly, MuckRack, relacje osobiste" },
  { typ: "Crisis PR", opis: "Zarządzanie sytuacjami kryzysowymi: skandale, wypadki, kontrowersje. Ochrona reputacji pod presją czasową.", narzędzia: "Dark site, real-time monitoring, crisis team, przygotowane Q&A" },
  { typ: "Corporate PR", opis: "Kształtowanie wizerunku organizacji jako całości — liderstwo, wartości, działania CSR, osiągnięcia biznesowe.", narzędzia: "Raport roczny, ESG report, CEO communications" },
  { typ: "Product PR", opis: "Generowanie zainteresowania mediów nowymi produktami. Recenzje, testy, launche produktowe.", narzędzia: "Press kit, product briefings, embargoes, influencer seeding" },
  { typ: "Investor Relations", opis: "Komunikacja z inwestorami, analitykami i rynkami finansowymi. Szczegółowo regulowana przez prawo.", narzędzia: "Earnings calls, raporty kwartalne, roadshow inwestorskie" },
  { typ: "Social Media PR", opis: "Zarządzanie reputacją w mediach społecznościowych, reagowanie na kryzysy online, monitorowanie wzmianek.", narzędzia: "Brand24, Mention, Sprout Social, community management" },
];

const prProcess = [
  {
    etap: "Analiza i strategia",
    opis: "Audyt obecnej reputacji, analiza grup docelowych (media, influencerzy, opinia publiczna), ustalenie celów PR (OKRs) i kluczowych przekazów (key messages).",
  },
  {
    etap: "Mapowanie mediów",
    opis: "Identyfikacja kluczowych mediów, dziennikarzy i influencerów. Segmentacja na tier 1 (mainstream), tier 2 (branżowe) i tier 3 (niszowe/lokalne). Budowanie media listy.",
  },
  {
    etap: "Tworzenie treści PR",
    opis: "Komunikaty prasowe, media kity, backgroundery, fact sheety, Q&A dokumenty, byline articles, wypowiedzi eksperckie — dostosowane do formatów poszczególnych mediów.",
  },
  {
    etap: "Outreach i pitching",
    opis: "Wysyłanie spersonalizowanych pitchy do dziennikarzy. Budowanie relacji przez wartość (nie masowy spam). Follow-up bez nękania. Oferta exclusives i embargoes dla top-tier.",
  },
  {
    etap: "Monitoring i raportowanie",
    opis: "Śledzenie publikacji, zasięgu, sentimentu i Share of Voice. Regularne raporty dla stakeholderów. Porównanie z celami i konkurencją. Optymalizacja strategii.",
  },
];

const prMetrics = [
  { metryka: "Earned Media Value (EMV)", jak: "Ekwiwalent wartości reklamowej artykułów earned media" },
  { metryka: "Share of Voice (SOV)", jak: "% wzmianek branżowych należących do Twojej marki" },
  { metryka: "Media Tier Coverage", jak: "Liczba publikacji w tier 1, tier 2, tier 3 mediach" },
  { metryka: "Sentiment Score", jak: "% pozytywnych, neutralnych i negatywnych wzmianek" },
  { metryka: "Message Pull-Through", jak: "% artykułów zawierających kluczowe przekazy (key messages)" },
  { metryka: "Referral Traffic", jak: "Ruch z mediów earned na stronie (Google Analytics: Referrals)" },
];

export default function BlogPublicRelationsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Public Relations (PR) | Fotz Studio"
        description="Public relations — definicja, 6 rodzajów PR (media relations, crisis PR, corporate PR), 5-etapowy proces i jak mierzyć efektywność. Kompletny przewodnik."
        canonical="https://fotz.pl/blog/public-relations-co-to"

        keywords="Public Relations (PR) co to jest, Public Relations (PR) definicja, czym jest Public Relations (PR), Public Relations (PR) przykłady, jak działa Public Relations (PR), Public Relations (PR) znaczenie, Public Relations (PR) przewodnik"

        canonical="https://fotz.pl/blog/public-relations-co-to"
      />
      <ArticleSchema
        title="Public Relations (PR) — co to jest i jak działa?"
        description="Kompletny przewodnik po public relations: typy PR, media relations, crisis management, 5-etapowy proces i metryki efektywności."
        url="https://fotz.pl/blog/public-relations-co-to"
        datePublished="2024-01-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Public Relations", url: "https://fotz.pl/blog/public-relations-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Public Relations", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Public Relations (PR) — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            PR to sztuka budowania reputacji przez earned media — bardziej wiarygodne i tańsze niż reklama.
            Poznaj 6 rodzajów PR, 5-etapowy proces i jak mierzyć efektywność działań PR.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest public relations?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Public relations (PR)</strong> to zarządzanie przepływem informacji między organizacją
              a jej grupami interesariuszy — mediami, klientami, inwestorami, pracownikami i opinią publiczną.
              W odróżnieniu od reklamy, PR operuje na <em>earned media</em> — treściach, które media
              same decydują się opublikować ze względu na ich wartość informacyjną.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania Nielsena potwierdzają, że konsumenci 3× bardziej ufają mediom earned niż płatnym reklamom.
              Dlatego dobrze prowadzony PR buduje wiarygodność niedostępną dla tradycyjnej reklamy.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="font-semibold text-blue-900 mb-2">PR vs. Reklama — kluczowa różnica:</p>
              <p className="text-blue-800">
                Reklama: <strong>płacisz za miejsce</strong>, kontrolujesz przekaz.<br />
                PR: <strong>zasługujesz na miejsce</strong>, media kontrolują formę. Wyższa wiarygodność, niższy koszt na dotarcie.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 rodzajów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 rodzajów PR</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {prTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{t.typ}</h3>
                  <p className="text-slate-600 text-sm mb-3">{t.opis}</p>
                  <div className="bg-blue-50 rounded p-2">
                    <p className="text-xs font-semibold text-blue-600 mb-1">Narzędzia:</p>
                    <p className="text-blue-800 text-xs">{t.narzędzia}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 etapów */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 etapów procesu PR</h2>
            <div className="space-y-5">
              {prProcess.map((item, i) => (
                <div key={i} className="flex gap-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
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

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak mierzyć efektywność PR?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metryka</th>
                    <th className="p-3 text-left">Co mierzy</th>
                  </tr>
                </thead>
                <tbody>
                  {prMetrics.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.metryka}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.jak}</td>
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
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — public relations</h2>
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

      <RelatedArticles currentArticleId="public-relations-co-to" />
      <ContactSection />
    </Layout>
  );
}
