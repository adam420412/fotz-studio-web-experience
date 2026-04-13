import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest ramp period w sprzedaży?",
    answer: "Ramp period (czas rozruchu) to czas potrzebny nowemu handlowcowi do osiągnięcia pełnej produktywności — czyli 100% quota. Przez ten okres AE buduje pipeline, uczy się produktu, procesów sprzedaży i rynku. Typowo nowy handlowiec nie wykonuje pełnej quota przez pierwsze 3-9 miesięcy w zależności od złożoności produktu, segmentu i długości cyklu sprzedaży. Ramped quota (zredukowany target w trakcie ramp) jest standardem — pozwala to na realistyczne oczekiwania i zmniejsza presję, która mogłaby prowadzić do złych praktyk sprzedażowych.",
  },
  {
    question: "Ile trwa ramp dla handlowca B2B?",
    answer: "Typowe czasy ramp: SDR/BDR: 2-3 miesiące (krótszy cykl aktywności, szybsza pętla feedbacku). SMB AE: 3-4 miesiące (krótkie cykle sprzedaży, szybko widać wyniki). Mid-Market AE: 5-6 miesięcy (złożony produkt, dłuższe cykle). Enterprise AE: 9-12 miesięcy (długie cykle 3-9 miesięcy, wysokie ACV). Account Manager (expansions): 3-4 miesiące (portfolio klientów do przejęcia). Jeśli Twój ramp trwa dłużej niż benchmarki — sprawdź jakość onboardingu, dostępność zasobów i czy terytorium ma wystarczający potencjał.",
  },
  {
    question: "Jak wygląda ramped quota przez pierwsze miesiące?",
    answer: "Typowa struktura ramped quota: Miesiąc 1: 0% quota (onboarding, szkolenia, shadowing rozmów) lub mała aktywność (liczba demos). Miesiąc 2: 25-50% quota — pierwsze samodzielne działania, budowanie pipeline. Miesiąc 3: 50-75% quota — pierwsze zamknięcia, wzrost pipeline. Miesiąc 4-6: 75-100% quota — dochodzenie do pełnej produktywności. OTE zazwyczaj jest liczone jakby AE osiągał 100% quota — różnica w earningach w ramp period jest przez to niższa. Dobre firmy rekompensują to przez draw (zaliczkę na prowizję) lub wyższy base podczas ramp.",
  },
  {
    question: "Co wpływa na efektywność ramp periode'u?",
    answer: "Czynniki wpływające na efektywność ramp: Jakość onboardingu — czy AE dostaje ustrukturyzowany program czy jest rzucony na głęboką wodę? Dostęp do zasobów — playbooks, call recordings, case studies, shadowing. Jakość terytorium — czy AE dostaje wystarczający ICP potencjał? Manager i coaching — wyjście z ramp jest szybsze gdy manager regularnie coachuje. Buddy system — pairing z top performer przyspiesza naukę. Wewnętrzna kultura — czy firma wspiera nowych AE czy oczekuje immediate results? Kompleksowość produktu — im bardziej techniczny produkt, tym dłuższy ramp.",
  },
  {
    question: "Jak zarządzać AE w trakcie ramp period?",
    answer: "Zarządzanie ramping AE: Ustaw 30/60/90 day milestones — jasne oczekiwania dla każdego etapu. Activity-based metrics w pierwszych miesiącach — liczba demos, pipeline built, nie tylko revenue. Regular 1:1 coachingowe — minimum co tydzień w pierwszych 3 miesiącach. Monitoruj leading indicators — czy AE buduje wystarczający pipeline by osiągnąć quota po ramp? Wczesna interwencja — jeśli po 60 dniach pipeline jest słaby, to sygnał problemów na 6 miesięcy przed. Nie przedłużaj ramp w nieskończoność — po ramp period stosuj normalne quota i accountability.",
  },
];

const rampByRole = [
  {
    rola: "SDR / BDR",
    rampTime: "2–3 miesiące",
    ramped_quota: [
      { miesiac: "M1", procent: "25–50%" },
      { miesiac: "M2", procent: "50–75%" },
      { miesiac: "M3+", procent: "100%" },
    ],
    focus: "Liczba qualified meetings, pipeline generation",
    kolor: "blue",
  },
  {
    rola: "SMB AE",
    rampTime: "3–4 miesiące",
    ramped_quota: [
      { miesiac: "M1", procent: "0–25%" },
      { miesiac: "M2", procent: "50%" },
      { miesiac: "M3", procent: "75%" },
      { miesiac: "M4+", procent: "100%" },
    ],
    focus: "Pierwsze zamknięcia, pipeline 3x quota",
    kolor: "green",
  },
  {
    rola: "Mid-Market AE",
    rampTime: "5–6 miesięcy",
    ramped_quota: [
      { miesiac: "M1", procent: "0%" },
      { miesiac: "M2", procent: "25%" },
      { miesiac: "M3", procent: "50%" },
      { miesiac: "M4", procent: "75%" },
      { miesiac: "M6+", procent: "100%" },
    ],
    focus: "Pipeline quality, Demo-to-Proposal rate",
    kolor: "purple",
  },
  {
    rola: "Enterprise AE",
    rampTime: "9–12 miesięcy",
    ramped_quota: [
      { miesiac: "M1–3", procent: "0%" },
      { miesiac: "M4–6", procent: "25–50%" },
      { miesiac: "M7–9", procent: "50–75%" },
      { miesiac: "M12+", procent: "100%" },
    ],
    focus: "Pipeline building, Exec relationships, first close",
    kolor: "orange",
  },
];

const rampOnboarding = [
  { tydzien: "Tydzień 1–2", cel: "Orientacja", działania: "Produkt, firma, kultura, procesy, narzędzia (CRM, Sales Engagement). Shadowing demo i discovery call top performer." },
  { tydzien: "Tydzień 3–4", cel: "Certyfikacja", działania: "Demo certification, pitch certification, cold email/call scripting. Role-play z managerem i peers." },
  { tydzien: "Miesiąc 2", cel: "Pipeline building", działania: "Pierwsze samodzielne prospecting, discovery, demo. Manager shadow z feedbackiem po każdej rozmowie." },
  { tydzien: "Miesiąc 3", cel: "Pierwsze zamknięcia (SMB/MM)", działania: "Dochodzenie do pierwszych Closed Won. Deep-dive na obiekcje, negocjacje, closing techniques." },
  { tydzien: "Miesiąc 4–6", cel: "Pełna produktywność", działania: "Osiąganie pełnej quota, samodzielność w prowadzeniu procesu. Coaching przechodzi z directed na coaching przez pytania." },
];

export default function BlogRampingSprzedaz() {
  return (
    <Layout>
      <SEOHead
        title="Ramp period w sprzedaży — onboarding handlowca B2B | Fotz.pl"
        description="Ramp period w sprzedaży B2B — ile trwa, ramped quota, onboarding plan i jak zarządzać AE w trakcie ramp. Kompletny przewodnik dla Sales Managerów."
        canonicalUrl="https://fotz.pl/blog/ramp-period-onboarding-handlowca-b2b"

        keywords="Ramp period w sprzedaży, Ramp period w sprzedaży co to jest, Ramp period w sprzedaży jak działa, Ramp period w sprzedaży definicja, Ramp period w sprzedaży przykłady, Ramp period w sprzedaży poradnik, Ramp period w sprzedaży przewodnik"
      />
      <ArticleSchema
        title="Ramp period w sprzedaży — onboarding handlowca B2B"
        description="Kompletny przewodnik po ramp period: czasy ramp dla różnych ról, ramped quota, onboarding plan i zarządzanie."
        url="https://fotz.pl/blog/ramp-period-onboarding-handlowca-b2b"
        datePublished="2024-02-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Ramp period", url: "https://fotz.pl/blog/ramp-period-onboarding-handlowca-b2b" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Ramp period", href: "/blog/ramp-period-onboarding-handlowca-b2b" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ramp period handlowca
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Czas od pierwszego dnia do pełnej produktywności handlowca to jeden z największych
              kosztów organizacji sprzedaży. Skuteczny onboarding i ramped quota skracają ramp
              i budują solidne fundamenty pod długoterminowe wyniki.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Ramp SDR", value: "2–3 mies." },
                { label: "Ramp MM AE", value: "5–6 mies." },
                { label: "Ramp Enterprise AE", value: "9–12 mies." },
                { label: "Etapów onboardingu", value: "5" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ramp by role */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ramp period według roli</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Czas ramp i struktura ramped quota różnią się znacząco w zależności od roli.
              Złożoność produktu i długość cyklu sprzedaży determinują kiedy AE może osiągnąć pełną quota.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {rampByRole.map((r) => (
              <FadeInView key={r.rola}>
                <div className={`rounded-xl p-6 border-2 ${
                  r.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  r.kolor === "green" ? "border-green-200 bg-green-50" :
                  r.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`font-bold text-xl ${
                      r.kolor === "blue" ? "text-blue-800" :
                      r.kolor === "green" ? "text-green-800" :
                      r.kolor === "purple" ? "text-purple-800" :
                      "text-orange-800"
                    }`}>
                      {r.rola}
                    </h3>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      r.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                      r.kolor === "green" ? "bg-green-200 text-green-800" :
                      r.kolor === "purple" ? "bg-purple-200 text-purple-800" :
                      "bg-orange-200 text-orange-800"
                    }`}>
                      {r.rampTime}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {r.ramped_quota.map((q) => (
                      <div key={q.miesiac} className="flex items-center gap-3">
                        <span className="text-xs font-bold text-gray-500 w-16 flex-shrink-0">{q.miesiac}:</span>
                        <div className="flex-1 bg-white rounded-full h-4 overflow-hidden">
                          <div
                            className={`h-4 rounded-full ${
                              r.kolor === "blue" ? "bg-blue-400" :
                              r.kolor === "green" ? "bg-green-400" :
                              r.kolor === "purple" ? "bg-purple-400" :
                              "bg-orange-400"
                            }`}
                            style={{ width: q.procent === "100%" ? "100%" : q.procent === "75%" ? "75%" : q.procent === "50%" ? "50%" : q.procent === "25%" ? "25%" : q.procent === "0%" ? "0%" : q.procent === "25–50%" ? "37%" : q.procent === "50–75%" ? "62%" : q.procent === "0–25%" ? "12%" : "0%" }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 w-12 text-right flex-shrink-0">{q.procent}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 italic">{r.focus}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding plan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plan onboardingu — 5 etapów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ustrukturyzowany plan onboardingu z jasnymi kamieniami milowymi skraca ramp
              i daje nowemu handlowcowi pewność co do oczekiwań na każdym etapie.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {rampOnboarding.map((r, i) => (
              <FadeInView key={r.tydzien}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded font-bold text-center whitespace-nowrap">{r.tydzien}</div>
                      <div className="mt-1 text-center text-xs text-gray-500 font-medium">{r.cel}</div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">{r.działania}</p>
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
