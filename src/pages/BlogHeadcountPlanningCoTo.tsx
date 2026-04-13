import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest headcount planning?",
    answer: "Headcount planning (planowanie zatrudnienia) to proces określania ilu pracowników, na jakich stanowiskach i kiedy firma planuje zatrudnić, aby osiągnąć cele biznesowe. Jest integralną częścią rocznego planowania i budżetowania. Dobry headcount plan odpowiada na pytania: Ile osób potrzebujemy do osiągnięcia revenue target? Kiedy musimy zatrudnić żeby nowy pracownik był produktywny na czas? Ile nas to kosztuje (salaries, benefits, tools, space)? Jakie role są priorytetowe i dlaczego? W startupach i firmach SaaS headcount to zazwyczaj 60-80% całkowitych kosztów operacyjnych (OpEx), więc precyzja planowania ma bezpośredni wpływ na burn rate i runway.",
  },
  {
    question: "Jak planować headcount w sales?",
    answer: "Headcount planning w sprzedaży: zacznij od revenue target i oblicz wstecz ile AE (Account Executives) potrzebujesz. Formuła: Revenue Target / Quota per AE = liczba produktywnych AE. Uwzględnij ramp time — nowy AE potrzebuje 3-6 miesięcy zanim osiągnie pełną produktywność. Jeśli potrzebujesz 10 produktywnych AE od Q3, musisz zatrudnić w Q1. Oblicz pipeline coverage: każdy AE potrzebuje X leads od SDR — ile SDR potrzebujesz? Uwzględnij attrition — sales turnover to 20-35% rocznie. Planuj z buforem na odejścia. Sales headcount driving czynniki: ACV (wyższe ACV = mniej AE, mniejsze ACV = więcej AE), deal complexity (enterprise wymaga 2x więcej AE-time niż SMB), sales cycle length.",
  },
  {
    question: "Jak planować headcount w engineering?",
    answer: "Engineering headcount planning: zacznij od product roadmap i podziel projekty na estymacje team-months. Engineering ratio — w B2B SaaS przeciętnie 1 PM na 5-7 inżynierów, 1 designer na 4-6 inżynierów. Uwzględnij overhead: meetings, code review, onboarding nowych, tech debt. Efektywny czas na features to 50-60% czasu inżyniera. Specjalizacje: frontend, backend, mobile, data, DevOps/SRE, QA — każda ma inną dostępność na rynku i różne stawki. Lead time rekrutacji: od decyzji do zatrudnienia starszego inżyniera to średnio 2-4 miesiące, a onboarding kolejne 1-3 miesiące. Planuj z 4-6 miesięcznym wyprzedzeniem dla senior ról.",
  },
  {
    question: "Jak wygląda typowy headcount plan?",
    answer: "Struktura headcount planu: Per department — Sales, Marketing, Engineering, Product, CS, G&A (Finance, HR, Legal, Ops). Per role — nie tylko 'Sales' ale 'SDR', 'SMB AE', 'MM AE', 'Enterprise AE', 'Sales Manager'. Per kwartał — kiedy dokładnie planujemy start zatrudnienia (nie koniec roku). Fully-loaded cost — nie tylko salary ale też benefits (ok. 20-30% salary), equity (stock options), tools/software, desk/space. Headcount plan integruje się z P&L i cash flow — każda hire to recurring cost. Board i inwestorzy śledzą HC closely: headcount growth vs. revenue growth ratio, revenue per employee (target: 150-300K USD/pracownika dla B2B SaaS).",
  },
  {
    question: "Jakie błędy popełnia się w headcount planning?",
    answer: "Najczęstsze błędy: Hirowanie zbyt późno — startup czeka z rekrutacją aż 'będzie potrzeba' zamiast planować z 3-6 miesięcznym wyprzedzeniem. Backfill ignorowanie — planuje się tylko nowe role, ignorując fakt że część osób odejdzie i trzeba będzie zastąpić. Over-hiring w euforii — po dużej rundzie firmy zatrudniają agresywnie bez sprawdzenia unit economics. Widać to po późniejszych layoffs (Meta 2022, Stripe 2022). Brak internalizacji kosztów — menedżerowie składają headcount requests bez świadomości pełnych kosztów (salary + benefits + rekrutacja + onboarding + tools). Niezbalansowane teams — zbyt wielu menedżerów, za mało IC (individual contributors). Zdrowy ratio: 1 manager na 5-8 ICs.",
  },
];

const headcountPlanProcess = [
  {
    krok: "1. Zakotwicz w celach biznesowych",
    opis: "Headcount plan musi wynikać z planów revenue, product roadmap i OKRów — nie z 'chcielibyśmy mieć więcej ludzi'.",
    przykład: "Revenue target +50% → Sales HC +30% (leverage z productivity gains), Engineering +20% (nowy produkt).",
    kolor: "blue",
  },
  {
    krok: "2. Oblicz pojemność obecnego zespołu",
    opis: "Ile może dostarczyć obecny team? Gdzie są wąskie gardła? Gdzie capacity jest za mała już dziś?",
    przykład: "Każdy AE generuje 800K PLN ARR. Target 8M PLN ARR = 10 produktywnych AE. Mamy 6 → potrzeba 4 nowych.",
    kolor: "green",
  },
  {
    krok: "3. Uwzględnij ramp time i attrition",
    opis: "Nowy pracownik nie jest natychmiast produktywny. Planuj z wyprzedzeniem i bufforem na odejścia.",
    przykład: "AE ramp 4 miesiące. Potrzebujesz 4 nowych w Q3 → zatrudnij w Q1. Attrition 25%/rok → +2 backfill.",
    kolor: "purple",
  },
  {
    krok: "4. Wycen fully-loaded cost",
    opis: "Każda hire to salary + ZUS/benefits (20-30%) + rekrutacja (10-20% salary) + narzędzia + biuro.",
    przykład: "Senior Engineer 15K PLN/mies → koszt 18-20K PLN/mies w pełnym rozrachunku. 6 nowych = 1.1M PLN/rok.",
    kolor: "orange",
  },
  {
    krok: "5. Priorytetyzuj i zatwierdź",
    opis: "Nie każda potrzeba może być zrealizowana od razu. Priorytetyzuj według wpływu na revenue i cele.",
    przykład: "Priorytet 1: AE (bezpośredni wpływ na revenue). Priorytet 2: Inżynierowie product. Priorytet 3: Marketing.",
    kolor: "teal",
  },
];

const hcMetrics = [
  { metryka: "Revenue per Employee", opis: "Całkowite przychody / liczba pracowników FTE", benchmark: "B2B SaaS: 150-300K USD/FTE. Najlepsze (Datadog, Snowflake): 400K+ USD/FTE" },
  { metryka: "Headcount Growth Rate", opis: "Wzrost liczby pracowników rok do roku", benchmark: "Powinien być proporcjonalny do revenue growth, nie szybszy" },
  { metryka: "Manager:IC Ratio", opis: "Stosunek menedżerów do individual contributors", benchmark: "Zdrowy: 1:5-8. Poniżej 1:4 = management-heavy, drogi overhead" },
  { metryka: "Attrition Rate", opis: "% pracowników odchodzących rocznie (voluntary + involuntary)", benchmark: "Engineering: 10-15%/rok. Sales: 20-30%/rok. Target: poniżej benchmarku branży" },
  { metryka: "Time to Hire", opis: "Czas od otwarcia roli do podpisania umowy", benchmark: "IC roles: 4-8 tygodni. Senior/Manager: 8-16 tygodni. Executive: 12-24 tygodnie" },
  { metryka: "Offer Acceptance Rate", opis: "% kandydatom którzy przyjmują ofertę", benchmark: "Zdrowy: ponad 80%. Poniżej 70% = problem z EVP lub procesem" },
];

export default function BlogHeadcountPlanningCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Headcount Planning | Fotz Studio"
        description="Headcount planning: jak planować zatrudnienie, obliczać koszty, unikać błędów i łączyć plan HC z revenue targets. Przewodnik dla startupów i scaleupów SaaS."
        canonicalUrl="https://fotz.pl/blog/headcount-planning-planowanie-zatrudnienia-startup"

        keywords="Headcount Planning co to jest, Headcount Planning definicja, czym jest Headcount Planning, Headcount Planning startup, Headcount Planning jak liczyć, Headcount Planning wzór, Headcount Planning przykłady"

        canonical="https://fotz.pl/blog/headcount-planning-planowanie-zatrudnienia-startup"
      />
      <ArticleSchema
        title="Headcount Planning — jak planować zatrudnienie w startupie?"
        description="Headcount planning: proces, kluczowe metryki, jak planować Sales i Engineering HC, najczęstsze błędy i jak powiązać plan zatrudnienia z celami biznesowymi."
        url="https://fotz.pl/blog/headcount-planning-planowanie-zatrudnienia-startup"
        datePublished="2024-02-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Headcount Planning", url: "https://fotz.pl/blog/headcount-planning-planowanie-zatrudnienia-startup" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Headcount Planning", href: "/blog/headcount-planning-planowanie-zatrudnienia-startup" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Finance &amp; Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Headcount Planning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Pracownicy to 60-80% kosztów startupu. Headcount planning łączy
              ambicje wzrostowe z realnymi możliwościami finansowymi —
              ilu ludzi, kiedy i za ile.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "% kosztów w SaaS", value: "60-80%" },
                { label: "Target Rev/FTE", value: "150-300K$" },
                { label: "AE ramp time", value: "3-6 mies." },
                { label: "Sales attrition", value: "20-30%/rok" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 kroków headcount planowania</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Skuteczny headcount plan nie zaczyna się od "ile chcemy zatrudnić"
              ale od celów biznesowych i odwrotnego obliczenia potrzeb kadrowych.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {headcountPlanProcess.map((k) => (
              <FadeInView key={k.krok}>
                <div className={`rounded-xl border-2 p-6 ${
                  k.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  k.kolor === "green" ? "border-green-200 bg-green-50" :
                  k.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  k.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    k.kolor === "blue" ? "text-blue-800" :
                    k.kolor === "green" ? "text-green-800" :
                    k.kolor === "purple" ? "text-purple-800" :
                    k.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{k.krok}</h3>
                  <p className="text-gray-700 text-sm mb-3">{k.opis}</p>
                  <div className="bg-white/60 rounded-lg p-3 text-sm">
                    <span className="font-semibold text-gray-700">Przykład: </span>
                    <span className="text-gray-600">{k.przykład}</span>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Metryki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe metryki HC</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jak mierzyć efektywność organizacji i jakość procesu zatrudnienia.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {hcMetrics.map((m, i) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-teal-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{m.metryka}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <p className="text-gray-700">{m.opis}</p>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Benchmark</div>
                          <p className="text-gray-700 font-medium">{m.benchmark}</p>
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

      <RelatedArticles currentArticleId="headcount-planning-planowanie-zatrudnienia-startup" />
      <ContactSection />
    </Layout>
  );
}
