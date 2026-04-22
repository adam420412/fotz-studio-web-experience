import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest SDR (Sales Development Representative)?",
    answer:
      "SDR (Sales Development Representative) to specjalista ds. sprzedaży odpowiedzialny za prospecting i kwalifikację leadów — identyfikuje potencjalnych klientów, nawiązuje z nimi pierwszy kontakt (cold outreach: email, telefon, LinkedIn) i kwalifikuje ich przed przekazaniem do Account Executive (AE). SDR nie zamykają transakcji — ich celem jest umówienie spotkania lub demo dla AE. To najczęstszy punkt wejścia do kariery w sprzedaży B2B.",
  },
  {
    question: "Czym różni się SDR od BDR?",
    answer:
      "SDR (Sales Development Representative) zazwyczaj zajmuje się inbound leads — osobami, które już wykazały zainteresowanie (pobrały materiał, zarejestrowały się na webinar, wypełniły formularz). BDR (Business Development Representative) skupia się na outbound prospectingu — aktywnym szukaniu i kontaktowaniu się z firmami, które jeszcze nie wyraziły zainteresowania. Granica między rolami jest płynna i różni się w zależności od firmy.",
  },
  {
    question: "Jakie metryki mierzy SDR?",
    answer:
      "Kluczowe metryki SDR: liczba prób kontaktu dziennie (aktywność), Response Rate (% odpowiedzi na outreach), Meeting Booked Rate (% kontaktów które zamieniły się w spotkanie), SQL Conversion Rate (% MQL zakwalifikowanych jako SQL), Show Rate (% umówionych spotkań które się odbyły), Pipeline Generated (wartość pipeline wygenerowanego przez SDR). Dobry SDR generuje zwykle 8-15 SQL miesięcznie.",
  },
  {
    question: "Jak wygląda ścieżka kariery SDR?",
    answer:
      "Typowa ścieżka kariery: SDR (0-18 miesięcy) → Account Executive lub Senior SDR → Account Manager lub Enterprise AE → Sales Manager lub Revenue Operations. Część SDR przechodzi do Customer Success, Marketing lub Product. SDR to jedna z najlepszych szkół sprzedaży — intensywna, wymagająca i dająca solidne fundamenty pod dalszą karierę w revenue.",
  },
  {
    question: "Ile outreachów powinien wysyłać SDR dziennie?",
    answer:
      "Standardowe benchmarki: 50-100 aktywności dziennie (emaile, połączenia, wiadomości LinkedIn), 3-7 touchpointów na prospect w sekwencji, follow-up do 7-10 dni. Quality over quantity — personalizowany email do 20 dobrze dopasowanych prospectów przewyższa skutecznością 200 generycznych wiadomości. Narzędzia (Outreach, Salesloft, Apollo) pomagają skalować bez utraty personalizacji.",
  },
];

const sdrVsAe = [
  { aspekt: "Cel", sdr: "Generowanie pipeline — kwalifikacja i umawianie spotkań", ae: "Zamykanie transakcji — demo, negocjacje, kontrakt" },
  { aspekt: "Główne aktywności", sdr: "Cold email, cold call, LinkedIn outreach, prospecting w bazach danych", ae: "Discovery call, demo produktu, proposal, negocjacje, closing" },
  { aspekt: "Metryka sukcesu", sdr: "SQL wygenerowane, spotkania umówione, pipeline created ($)", ae: "Quota attainment, ARR closed, win rate, sales cycle length" },
  { aspekt: "Ownership leada", sdr: "Od first touch do zakwalifikowania (MQL → SQL)", ae: "Od SQL do zamkniętej transakcji (Closed Won/Lost)" },
  { aspekt: "Typowe doświadczenie", sdr: "Junior (0-2 lata) — rola wejściowa do kariery w sprzedaży", ae: "Mid-Senior (2-8 lat) — po udowodnieniu się jako SDR lub transferze" },
  { aspekt: "Narzędzia", sdr: "CRM (Salesforce/HubSpot), Outreach/Salesloft, Apollo/ZoomInfo, LinkedIn Sales Nav", ae: "CRM, Gong/Chorus, Proposal tools (PandaDoc), CPQ" },
];

const sdrSequenceSteps = [
  { dzień: "Dzień 1", kanał: "Email", treść: "Spersonalizowany email nawiązujący do konkretnego triggera (nowe funding, nowy CMO, artykuł w prasie). Jasna propozycja wartości, jedno CTA." },
  { dzień: "Dzień 3", kanał: "LinkedIn", treść: "Zaproszenie do sieci z personalizowaną notką nawiązującą do emaila lub wspólnych punktów (mutual connections, branża, treści)." },
  { dzień: "Dzień 5", kanał: "Email", treść: "Follow-up — krótki, bezpośredni. Pytanie otwarte o konkretny ból lub wyzwanie relevantne dla ich roli. Nie prośba o czas — propozycja wartości." },
  { dzień: "Dzień 8", kanał: "Telefon", treść: "Cold call — jeśli brak odpowiedzi. Przygotowany opener i elevator pitch. Cel: 30-sekundowy talk, zakwalifikowanie, propozycja krótkiego call." },
  { dzień: "Dzień 12", kanał: "Email", treść: "Value email — case study lub konkretna liczba (ROI, czas zaoszczędzony) z podobnej firmy w tej samej branży." },
  { dzień: "Dzień 18", kanał: "LinkedIn / Email", treść: "Breakup email — ostatnia próba. Szczery, bezpośredni: 'Jeśli to nie jest priorytet — to OK. Czy mogę zamknąć ten wątek?'" },
];

const sdrTools = [
  { kategoria: "CRM", narzędzia: "Salesforce, HubSpot, Pipedrive", cel: "Zarządzanie kontaktami, pipeline, aktywności" },
  { kategoria: "Sales Engagement", narzędzia: "Outreach, Salesloft, Apollo Sequences", cel: "Automatyzacja i śledzenie sekwencji emailowych" },
  { kategoria: "Prospecting / Data", narzędzia: "Apollo.io, ZoomInfo, LinkedIn Sales Navigator", cel: "Budowanie list leadów, dane kontaktowe, triggery" },
  { kategoria: "Call Intelligence", narzędzia: "Gong, Chorus, Aircall", cel: "Analiza rozmów, coaching, call recording" },
  { kategoria: "Email Deliverability", narzędzia: "Lemlist, Instantly, Warmup Inbox", cel: "Uniknięcie spam foldera, rozgrzewanie domeny" },
];

export default function BlogSdrCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SDR | Fotz Studio"
        description="SDR (Sales Development Representative) — definicja, różnica vs AE i BDR, 6-krokowa sekwencja outreach, metryki i narzędzia. Przewodnik po roli SDR w B2B SaaS."
        canonicalUrl="https://fotz.pl/blog/sdr-co-to-jest"

        keywords="SDR co to jest, SDR definicja, czym jest SDR, SDR w sprzedaży, SDR strategia, SDR przykłady, jak używać SDR"

        canonical="https://fotz.pl/blog/sdr-co-to-jest"
      />
      <ArticleSchema
        title="SDR — co to jest i jak działa Sales Development Representative?"
        description="Kompletny przewodnik po roli SDR: różnica vs AE i BDR, sekwencja outreach, metryki i narzędzia SDR w B2B sprzedaży."
        url="https://fotz.pl/blog/sdr-co-to-jest"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SDR — Sales Development Representative", url: "https://fotz.pl/blog/sdr-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "SDR — Sales Development Representative", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            SDR — co to jest i jak działa Sales Development Representative?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            SDR to frontline sprzedaży B2B — generuje pipeline, kwalifikuje leady i umawia spotkania dla AE.
            Poznaj rolę, sekwencję outreach i metryki sukcesu.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest SDR?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>SDR (Sales Development Representative)</strong> to specjalista odpowiedzialny
              za generowanie i kwalifikację leadów w procesie sprzedaży B2B. SDR to pierwszy kontakt
              potencjalnego klienta z firmą — identyfikuje prospect fits, prowadzi cold outreach
              i przekazuje zakwalifikowane leady (SQL) do Account Executive, który zamyka transakcje.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Rola SDR jest powszechna w firmach SaaS i B2B z modelem sprzedaży opartym na
              podziale ról (Sales Development + Account Executive). Pozwala to AE skupić się
              wyłącznie na zamykaniu transakcji, podczas gdy SDR nieustannie napełniają pipeline.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "8-15", opis: "SQL generowanych miesięcznie przez skutecznego SDR" },
                { stat: "6-7", opis: "touchpointów potrzebnych średnio do uzyskania odpowiedzi od prospekta" },
                { stat: "1-2%", opis: "typowy meeting rate dla zimnego outreachu emailowego bez personalizacji" },
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

      {/* SDR vs AE */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">SDR vs. Account Executive — podział ról</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Aspekt</th>
                    <th className="p-3 text-left">SDR</th>
                    <th className="p-3 text-left">Account Executive (AE)</th>
                  </tr>
                </thead>
                <tbody>
                  {sdrVsAe.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-700">{row.aspekt}</td>
                      <td className="p-3 text-blue-700 text-sm">{row.sdr}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.ae}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Sekwencja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6-krokowa sekwencja outreach SDR</h2>
            <div className="space-y-4">
              {sdrSequenceSteps.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-center">
                      <div className="bg-blue-600 text-white text-xs font-bold rounded-lg px-3 py-2 mb-1">{s.dzień}</div>
                      <div className="bg-blue-100 text-blue-700 text-xs font-semibold rounded px-2 py-1">{s.kanał}</div>
                    </div>
                    <p className="text-slate-700 text-sm">{s.treść}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Narzędzia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Narzędzia SDR — sales tech stack</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sdrTools.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-1">{t.kategoria}</h3>
                  <p className="text-slate-600 text-sm mb-2">{t.narzędzia}</p>
                  <p className="text-xs text-slate-400">Cel: {t.cel}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — SDR w sprzedaży B2B</h2>
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

      <RelatedArticles currentArticleId="sdr-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
