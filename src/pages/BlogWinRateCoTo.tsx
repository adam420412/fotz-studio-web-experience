import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Win Rate i jak go obliczać?",
    answer: "Win Rate (wskaźnik wygranych) to odsetek okazji sprzedażowych zakończonych wygraną — dealem zamkniętym i podpisanym. Formuły: Win Rate from Opportunities = Zamknięte Wygrane / (Zamknięte Wygrane + Zamknięte Przegrane) × 100%. Win Rate from Pipeline Entry = Zamknięte Wygrane / Wszystkie okazje które weszły do pipeline × 100%. Różnice: pierwsza formuła wyłącza otwarte deale — mierzy efektywność domykania. Druga mierzy całościową skuteczność pipeline'u. Przykład: 20 wygranych, 60 przegranych, 20 otwartych. Win Rate z closed: 20/(20+60) = 25%. Win Rate z entry: 20/100 = 20%. Segmentacja win rate: Zawsze segmentuj win rate per: AE (kto wygrywa więcej?), segment (SMB vs. Enterprise — różne trudności), competitor (jak wygrywasz vs. każdego konkurenta?), source (inbound vs. outbound — który ma wyższy WR?), product (które produkty/pakiety mają wyższy WR?). Benchmark: 20-30% typowy dla SaaS. Poniżej 15% = problem. Powyżej 40% = za łatwe kwalifikowanie.",
  },
  {
    question: "Jak analizować przyczyny przegrywania (Loss Analysis)?",
    answer: "Loss Analysis (analiza przyczyn przegranej) to systematyczny proces identyfikowania dlaczego tracisz deale. Kategorie powodów przegranej: Cena — za drogi vs. konkurencja lub vs. budget klienta. Funkcjonalność — product gap, brakująca feature. Konkurent — klient wybrał X zamiast Ciebie. Status quo (no decision) — klient zdecydował nie robić nic. Timing — klient nie był gotowy kupić teraz. Champion lost — Twoja wewnętrzna osoba kontaktowa odeszła z firmy. Procurement/Legal — nie przeszedłeś przez procurement lub kontrakt. Process failure — Twój proces sprzedaży zawiódł. Jak zbierać dane: Post-loss interview — zadzwoń do kupującego 2-4 tygodnie po decyzji. Pytaj: 'Co zdecydowało?' 'Co mogliśmy zrobić inaczej?' 'Czego nam brakowało?'. Win/Loss analysis software: Clozd, Crayon, Kompyte. Cadence: miesięczna analiza win/loss patterns z VP Sales. Kwartalna deep-dive dla każdego AE. Pułapki: nie przyjmuj pierwszego powodu za twarz — drożeć = często cover dla 'nie rozumiem wartości'.",
  },
  {
    question: "Win Rate vs. konwersja w lejku — różnice?",
    answer: "Win Rate vs. Stage Conversion: Win Rate — stosunek wygranych do zakończonych okazji. Mierzone na końcu procesu. Stage Conversion — konwersja między etapami procesu sprzedaży. Np. Discovery do Demo: 70%, Demo do Proposal: 50%, Proposal do Close: 30%. Lejek konwersji: 100 leads → 60 qualified (60%) → 30 demo (50%) → 15 proposal (50%) → 5 closed won (33%). Ogólna konwersja lead-to-close = 5%. Win Rate (closed only) = 5/(5+10 closed lost) = 33%. Dlaczego oba ważne: Win Rate mówi jak dobrze domykasz. Stage conversion mówi gdzie w procesie tracisz klientów. Bottleneck analysis: jeśli demo-to-proposal = 30% (niska) a proposal-to-close = 80% (wysoka) — problem jest w demo (nie przekonujesz do value podczas demo). Narzędzia: Salesforce Reports, HubSpot Analytics, Gong (conversation analytics), Clari. Trendowanie: wykres stage conversions co kwartał. Spadek w konkretnym stage = coaching target dla całego team.",
  },
  {
    question: "Jak poprawić Win Rate — taktyki i strategie?",
    answer: "Strategie poprawy Win Rate: Lepsza kwalifikacja wejścia: Wdróż MEDDIC lub MEDDPICC. Nie wpuszczaj słabych leadów do pipeline — wyższy WR zaczyna się od lepszej selekcji. Definiuj kryteria dysqualification i egzekwuj je. Multithreading: rozmawiaj z wieloma decydentami, nie tylko z jedną osobą. Gdy single-threaded i champion odejdzie — tracisz deal. Cel: 3+ kontakty w firmie podczas active opportunity. Discovery quality: głęboka diagnoza problemu w fazie discovery zwiększa trafność propozycji i WR. Trenuj AE w pytaniach 'dlaczego' zamiast prezentowania features. Competitive positioning: aktualne battlecards, differentiation messaging, odpowiedzi na objections. Trenuj team na top 3 konkurentów. Proof of concept i trials: ustrukturyzowany POC z jasnym success criteria. Klient zobaczył wartość = wyższy WR. Proposal i pricing: szybkie odpowiedzi (poniżej 24h), personalizowane propozycje, jasny ROI. Unikaj generic proposals. Coaching: Gong.io lub Chorus do analizy rozmów — identyfikacja najlepszych praktyk winners.",
  },
  {
    question: "Jak Win Rate różni się między segmentami?",
    answer: "Win Rate po segmentach: Segment (ACV/company size): SMB — wyższy Win Rate (25-35%), krótszy cycle, łatwiejszy decision process. Enterprise — niższy Win Rate (15-25%), dłuższy cycle, więcej stakeholders. Mid-market — pośredni (20-30%). Source: Inbound (klient sam przyszedł) — znacznie wyższy WR (35-50%). Klient ma intencję kupna. Outbound (cold outreach) — niższy WR (10-20%). Brak wstępnej intencji. Competitor context: Deals gdzie aktywnie kompetycja vs. status quo. Deals z competition = niższy WR. Deals 'greenfield' (no competition) = wyższy WR. Per AE (talent gap): W zdrowej organizacji top performer vs. low performer — max 2x różnica WR. Większa różnica = coaching problem lub bad territory assignment. Seasonal patterns: Q4 często wyższy WR (buyers muszą zamknąć zanim rok się kończy). Q1 niższy (nowe budżety jeszcze nie zatwierdzone). New vs. renewal: renewale mają WR 80-90%. Nowi klienci 20-30%. NRR jest ważniejsze niż new business WR dla firm z dużą bazą.",
  },
];

const winRateLevers = [
  { dźwignia: "Kwalifikacja wejścia", opis: "Wdróż MEDDIC. Tylko kwalifikowane okazje wchodzą do pipeline.", impact: "Wyższy WR, mniejszy pipeline, focus na prawdziwych szansach" },
  { dźwignia: "Multithreading", opis: "Min. 3 kontakty per okazja. Eliminuje single point of failure.", impact: "Mniejszy loss rate gdy champion odejdzie lub zmieni zdanie" },
  { dźwignia: "Discovery quality", opis: "Głęboka diagnoza problemu zamiast feature pitch.", impact: "Propozycje trafiają w prawdziwe potrzeby, wyższe WR" },
  { dźwignia: "Competitive positioning", opis: "Aktualne battlecards i differentiation messaging.", impact: "Wyższy WR vs. top 3 konkurentów" },
  { dźwignia: "POC/Trial", opis: "Ustrukturyzowany proof of concept z jasnym success criteria.", impact: "Klient widzi wartość przed zakupem, commitment wzrasta" },
  { dźwignia: "Sales coaching", opis: "Gong/Chorus analiza rozmów, coaching na konkretnych defiach.", impact: "Niwelowanie gap między top i low performers" },
];

const lossReasons = [
  { powód: "Cena / Budżet", odsetek: "~30%", fix: "Lepsza komunikacja ROI, flexible pricing, champion empowerment" },
  { powód: "Wybrali konkurenta", odsetek: "~25%", fix: "Aktualne battlecards, strong differentiation, referenncje" },
  { powód: "Brak decyzji (status quo)", odsetek: "~25%", fix: "Urgency building, consequence of inaction, executive alignment" },
  { powód: "Brakująca funkcjonalność", odsetek: "~10%", fix: "Roadmap prezentacja, workarounds, lepsza kwalifikacja" },
  { powód: "Inne (timing, champion lost)", odsetek: "~10%", fix: "Multithreading, nurturing leads not ready now" },
];

export default function BlogWinRateCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Win Rate — co to jest i jak poprawić wskaźnik wygranych? | Fotz.pl"
        description="Win Rate: jak obliczać, analiza przyczyn przegranej (loss analysis), segmentacja po AE/source/competitor, strategie poprawy i benchmarki dla zespołów SaaS."
        canonicalUrl="https://fotz.pl/blog/win-rate-wskaznik-wygranych-jak-poprawic"

        keywords="Win Rate co to jest, Win Rate definicja, czym jest Win Rate, Win Rate przykłady, jak działa Win Rate, Win Rate znaczenie, Win Rate przewodnik"
      />
      <ArticleSchema
        title="Win Rate — co to jest i jak poprawić wskaźnik wygranych?"
        description="Win Rate: formuły, loss analysis, segmentacja (SMB vs. Enterprise, inbound vs. outbound), 6 strategii poprawy, najczęstsze powody przegranej i benchmarki SaaS."
        url="https://fotz.pl/blog/win-rate-wskaznik-wygranych-jak-poprawic"
        datePublished="2024-03-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Win Rate", url: "https://fotz.pl/blog/win-rate-wskaznik-wygranych-jak-poprawic" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Win Rate", href: "/blog/win-rate-wskaznik-wygranych-jak-poprawic" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Analytics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Win Rate
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Wygrywasz 1 na 4 okazji i chcesz wiedzieć dlaczego tracisz 3 reszty.
              Win Rate analysis to fundamentalne narzędzie
              poprawy efektywności sprzedaży.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Benchmark SaaS", value: "20-30%" },
                { label: "Inbound WR", value: "35-50%" },
                { label: "Outbound WR", value: "10-20%" },
                { label: "Top cause loss", value: "Cena/Status Quo" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-rose-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dźwignie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 strategii poprawy Win Rate</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Win Rate poprawia się przez zmiany w procesie, kwalifikacji
              i sposobie prowadzenia rozmów sprzedażowych.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {winRateLevers.map((l) => (
              <FadeInView key={l.dźwignia}>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{l.dźwignia}</h3>
                  <p className="text-gray-700 text-sm mb-2">{l.opis}</p>
                  <p className="text-xs text-rose-700 font-medium">{l.impact}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Powody przegranej */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Najczęstsze powody przegranej</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Loss analysis zaczyna się od zrozumienia rozkładu powodów przegranej.
              Każdy powód wymaga innej reakcji.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {lossReasons.map((r) => (
              <FadeInView key={r.powód}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4 items-start">
                    <div className="w-16 flex-shrink-0">
                      <span className="text-2xl font-bold text-rose-600">{r.odsetek}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{r.powód}</h3>
                      <p className="text-gray-600 text-sm">{r.fix}</p>
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

      <ContactSection />
    </Layout>
  );
}
