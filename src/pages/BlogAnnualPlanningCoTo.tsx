import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Annual Planning w firmie?",
    answer: "Annual Planning (planowanie roczne) to proces definiowania celów, strategii, budżetów i planów operacyjnych na nadchodzący rok. W startupach i scale-upach Annual Planning zazwyczaj odbywa się w Q4 na rok następny i angażuje całe kierownictwo. Dobry Annual Plan zawiera: Revenue Target i breakdown na kwartały, OKRs (Objectives and Key Results) per department, Headcount Plan, Budget (OpEx, CapEx), Product Roadmap priorities, Go-to-Market strategy. Annual Planning to nie biurokratyczny obowiązek — to moment żeby zatrzymać się, ocenić co działa, zdecydować gdzie inwestować i ustawić firmę na następny rok wzrostu.",
  },
  {
    question: "Jak wygląda proces Annual Planning?",
    answer: "Typowy proces Annual Planning (8-10 tygodni): Tygodnie 1-2: Company Review — analiza wyników bieżącego roku, co zadziałało, co nie. Market Analysis — jak zmienił się rynek, konkurencja, klienci. Tydzień 3-4: Strategic Direction — CEO ustala główne priorytety i cele na rok. Revenue Target Setting — bottom-up (suma planów departamentów) + top-down (cel inwestorów). Tygodnie 5-6: Department Planning — każdy departament tworzy własny plan i OKRs. Headcount Plan — kogo rekrutujemy i kiedy. Tygodnie 7-8: Budget Integration — składanie planów departamentów w jeden spójny budżet. Reconciliation — gdy suma planów nie zgadza się z targetem. Tygodnie 9-10: Board Review i Finalizacja — prezentacja dla Board, feedback, final approval.",
  },
  {
    question: "Jak ustalić Revenue Target na nowy rok?",
    answer: "Metody ustalania Revenue Target: Top-Down — inwestorzy oczekują X% wzrostu ARR, co przekłada się na konkretny target. Zazwyczaj 2-3x poprzedniego roku dla early stage. Bottom-Up — suma planów sprzedażowych: ilu AE x quota attainment x pipeline coverage = target ARR. Market-Based — ile rynku możesz realnie zdobyć biorąc pod uwagę TAM i competitive dynamics. Benchmark: Series A startup zazwyczaj celuje w 2-3x YoY growth. Series B: 100-200% YoY. Series C+: 50-100% YoY. Kluczowe: target musi być ambitious ale achievable — zbyt łatwy nie motywuje, zbyt trudny demoralizuje. Zasada Goldilocks: 60-70% teamu powinno osiągać quota.",
  },
  {
    question: "Co to są OKRs i jak je ustalić w Annual Planning?",
    answer: "OKRs (Objectives and Key Results) to framework celów: Objective = ambicjonalne, jakościowe stwierdzenie celu ('Stać się liderem rynku w segmencie enterprise'). Key Results = mierzalne wyniki które potwierdzają realizację Objective ('ARR z enterprise 2M PLN', 'Win rate w enterprise 35%', '3 Fortune 500 referencje'). Zasady OKR w Annual Planning: Company OKRs najpierw — CEO ustala 3-5 company-level OKRs. Department OKRs — każdy dział definiuje jak przyczynia się do Company OKRs. Kaskadowanie — OKRs są spójne pionowo i poziomo. Ambitność — KRs powinny być stretch goals (60-70% osiągalność to sukces w OKR filozofii). Regularny review — miesięczny check-in na progress, kwartalny retro.",
  },
  {
    question: "Jakie są najczęstsze błędy w Annual Planning?",
    answer: "Najczęstsze błędy: Za późny start — Annual Planning rozpoczęty w grudniu na styczeń to plan na Q2. Zacznij w październiku. Tylko top-down bez bottom-up — management narzuca liczby bez angażowania teamów. Tracisz buy-in. Zbyt optymistyczny Headcount Plan — zakładanie pełnej realizacji rekrutacji od Q1. Realnie buforuj o 1-2 kwartały. Brak priorytetyzacji — zbyt wiele OKRs rozmywa focus. Zasada: max 3-5 Company OKRs. Plan bez własności — każdy cel musi mieć jednego ownera (DRI — Directly Responsible Individual). Brak contingency — co jeśli rynek się pogorszy? Miej plan B. Planowanie na górze bez komunikacji w dół — pracownicy nie wiedzą jak ich praca łączy się z celami firmy. Annual Plan nie jest konstytucją — bądź gotów na kwartalną rewizję gdy rzeczywistość odbiega od planu.",
  },
];

const annualPlanningProcess = [
  {
    tydzien: "Tydzień 1-2",
    faza: "Company Review i Analiza",
    aktywności: ["Retrospekcja wyników bieżącego roku — co zadziałało, co nie", "Win/Loss Analysis — dlaczego wygrywamy i przegrywamy", "Analiza rynku i konkurencji — jak zmienił się landscape", "Customer Feedback synthesis — co klienci mówią o produkcie"],
    kolor: "blue",
  },
  {
    tydzien: "Tydzień 3-4",
    faza: "Strategic Direction",
    aktywności: ["CEO ustala główne priorytety na rok — 3-5 tematów strategicznych", "Revenue Target Setting — bottom-up + top-down reconciliation", "Company OKRs draft — ambicjonalne cele roczne", "Market sizing update — gdzie jest największa szansa wzrostu"],
    kolor: "green",
  },
  {
    tydzien: "Tydzień 5-6",
    faza: "Department Planning",
    aktywności: ["Każdy departament tworzy własny plan i OKRs", "Headcount Plan — jakich ról potrzebujemy i kiedy", "Sales plan — AE capacity, quota, pipeline build plan", "Product Roadmap — priorytety na rok, Q1-Q4 breakdown"],
    kolor: "purple",
  },
  {
    tydzien: "Tydzień 7-8",
    faza: "Budget i Reconciliation",
    aktywności: ["Składanie planów w jeden budżet (OpEx, Headcount, CapEx)", "Reconciliation gdy suma planów przekracza budżet", "Scenariusz Base / Bull / Bear — trzy warianty planu", "Financial model update z nowym planem"],
    kolor: "orange",
  },
  {
    tydzien: "Tydzień 9-10",
    faza: "Board Review i Finalizacja",
    aktywności: ["Prezentacja Annual Plan dla Board of Directors", "Feedback i ewentualne korekty", "Final approval i ogłoszenie w firmie", "Kick-off komunikacja dla wszystkich pracowników"],
    kolor: "red",
  },
];

const planningMistakes = [
  { błąd: "Za późny start", skutek: "Plan gotowy w grudniu = Q1 bez kierunku", rozwiązanie: "Zacznij w październiku — masz 10 tygodni na porządny proces" },
  { błąd: "Tylko top-down", skutek: "Tracisz buy-in teamu który nie miał głosu", rozwiązanie: "Bottom-up od departamentów + reconciliation z top-down targetem" },
  { błąd: "Za dużo OKRs", skutek: "Brak fokus, wszystko jest priorytetem = nic nie jest", rozwiązanie: "Maksimum 3-5 Company OKRs. Per dział 2-3 OKRs" },
  { błąd: "Brak scenariuszy", skutek: "Plan nie przewiduje że rynek może się pogorszyć", rozwiązanie: "Trzy scenariusze: Base (most likely), Bull (optimistic), Bear (downside)" },
  { błąd: "Brak komunikacji w dół", skutek: "Pracownicy nie wiedzą jak ich praca łączy się z celami", rozwiązanie: "All-hands po finalizacji planu z jasnym narratywem i Q&A" },
];

export default function BlogAnnualPlanningCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Annual Planning — jak planować roczne cele firmy? | Fotz.pl"
        description="Annual Planning (planowanie roczne) — proces, Revenue Target, OKRs, Headcount Plan i błędy do uniknięcia. Kompletny przewodnik dla CEO, CFO i VP Operations."
        canonicalUrl="https://fotz.pl/blog/annual-planning-planowanie-roczne-firmy"

        keywords="Annual Planning co to jest, Annual Planning definicja, czym jest Annual Planning, Annual Planning przykłady, jak działa Annual Planning, Annual Planning znaczenie, Annual Planning przewodnik"

        canonical="https://fotz.pl/blog/annual-planning-planowanie-roczne-firmy"
      />
      <ArticleSchema
        title="Annual Planning — jak planować roczne cele firmy?"
        description="Kompletny przewodnik po Annual Planning: proces, Revenue Target Setting, OKRs, budżet i typowe błędy."
        url="https://fotz.pl/blog/annual-planning-planowanie-roczne-firmy"
        datePublished="2024-02-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Annual Planning", url: "https://fotz.pl/blog/annual-planning-planowanie-roczne-firmy" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Annual Planning", href: "/blog/annual-planning-planowanie-roczne-firmy" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Strategy i Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Annual Planning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Annual Planning to jeden z najważniejszych procesów w firmie — i jeden z najgorzej
              prowadzonych. Gdy robisz go dobrze, cały team wie dokąd zmierza i dlaczego.
              Gdy robisz go źle, dostajesz tabelkę w Excelu którą nikt nie czyta od lutego.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Czas trwania procesu", value: "8-10 tygodni" },
                { label: "Kiedy zacząć", value: "Październik" },
                { label: "Max Company OKRs", value: "3-5" },
                { label: "Etapów procesu", value: "5" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5-fazowy proces Annual Planning</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Skuteczny Annual Planning trwa 8-10 tygodni i angażuje cały management team.
              Skróty oszczędzają czas w Q4 — i kosztują go przez cały następny rok.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {annualPlanningProcess.map((p) => (
              <FadeInView key={p.faza}>
                <div className={`rounded-xl border-2 p-6 ${
                  p.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  p.kolor === "green" ? "border-green-200 bg-green-50" :
                  p.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  p.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-red-200 bg-red-50"
                }`}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 text-right w-28">
                      <div className={`text-sm font-bold ${
                        p.kolor === "blue" ? "text-blue-600" :
                        p.kolor === "green" ? "text-green-600" :
                        p.kolor === "purple" ? "text-purple-600" :
                        p.kolor === "orange" ? "text-orange-600" :
                        "text-red-600"
                      }`}>{p.tydzien}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-xl mb-3 ${
                        p.kolor === "blue" ? "text-blue-800" :
                        p.kolor === "green" ? "text-green-800" :
                        p.kolor === "purple" ? "text-purple-800" :
                        p.kolor === "orange" ? "text-orange-800" :
                        "text-red-800"
                      }`}>{p.faza}</h3>
                      <ul className="space-y-1">
                        {p.aktywności.map((a) => (
                          <li key={a} className="flex gap-2 text-sm text-gray-700">
                            <span className={`flex-shrink-0 ${
                              p.kolor === "blue" ? "text-blue-500" :
                              p.kolor === "green" ? "text-green-500" :
                              p.kolor === "purple" ? "text-purple-500" :
                              p.kolor === "orange" ? "text-orange-500" :
                              "text-red-500"
                            }`}>→</span>
                            {a}
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

      {/* Błędy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 najczęstszych błędów Annual Planning</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Większość firm robi Annual Planning podobnie — i podobnie kiepsko.
              Unikaj tych błędów żeby Twój plan faktycznie działał przez cały rok.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {planningMistakes.map((m, i) => (
              <FadeInView key={m.błąd}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-red-500 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{m.błąd}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs font-bold text-red-600 uppercase mb-1">Skutek</div>
                          <p className="text-sm text-gray-700">{m.skutek}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-green-600 uppercase mb-1">Rozwiązanie</div>
                          <p className="text-sm text-gray-700">{m.rozwiązanie}</p>
                        </div>
                      </div>
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
