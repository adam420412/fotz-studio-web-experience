import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest OTE (On-Target Earnings)?",
    answer: "OTE (On-Target Earnings) to całkowite wynagrodzenie, jakie handlowiec zarobi jeśli zrealizuje 100% swojej kwoty sprzedaży (quota). OTE = Base Salary + Target Variable (komisja przy 100% quota). Przykład: handlowiec z OTE 200K PLN i splitem 50/50 ma 100K PLN base salary i 100K PLN potencjalnej prowizji przy realizacji pełnej kwoty. OTE jest kluczowym wskaźnikiem przy rekrutacji handlowców — porównaj OTE do rynku i upewnij się, że jest osiągalne przez 60-70% teamu.",
  },
  {
    question: "Jaki jest typowy split OTE na base vs. komisja?",
    answer: "Split OTE zależy od roli i modelu sprzedaży: SDR/BDR — zazwyczaj 60/40 lub 70/30 (wyższy base, mniejsza komisja — bo nie closują). Account Executive (SMB) — 50/50 split (równy podział, agresywny model). Account Executive (Enterprise) — 60/40 lub 65/35 (wyższy base przez dłuższy cykl sprzedaży). Customer Success Manager — 70/30 lub 80/20 (głównie base, mniejszy variable związany z retention/expansion). VP Sales — 50/50 lub nawet 40/60 (wyższy variable, bo odpowiada za wyniki całego teamu). Im dłuższy i bardziej złożony cykl sprzedaży, tym zazwyczaj wyższy base w proporcji do OTE.",
  },
  {
    question: "Jak obliczyć kwotę (quota) dla handlowca?",
    answer: "Reguła: quota powinna wynosić 4-6x OTE handlowca — firma generuje 4-6x więcej ARR niż kosztuje handlowiec. Przykład: AE z OTE 200K PLN powinien mieć quotę 800K-1.2M PLN ARR. Inne metody ustalania kwoty: Top-down — CEO ustala target revenue, dzieli przez liczbę AE. Bottom-up — analiza historycznych danych: ile AE przeciętnie zamykał? Capacity planning — ile deali może zamknąć AE w kwartale x ACV = quota. Ramp quota dla nowych AE: miesiąc 1-3 to zazwyczaj 25-50% pełnej kwoty, 4-6 to 50-75%, od 7 pełna quota.",
  },
  {
    question: "Co to jest accelerator w planie prowizyjnym?",
    answer: "Accelerator to wyższy % prowizji za wyniki powyżej 100% quota. Cel: zachęcić najlepszych handlowców do przekraczania celów i zarabiania więcej niż OTE. Przykład: 0-50% quota = 5% prowizji. 50-100% quota = 8% prowizji. 100-125% quota = 12% prowizji (accelerator 1.5x). Powyżej 125% quota = 16% prowizji (accelerator 2x). Uncapped komisja z agresywnym acceleratorem przyciąga najlepszych handlowców i pozwala zarabiać wielokrotność OTE. Najlepsi AE mogą zarabiać 150-250% OTE w dobrym roku.",
  },
  {
    question: "Jak OTE porównać między firmami przy szukaniu pracy?",
    answer: "Przy porównywaniu ofert OTE: Sprawdź realne zarobki — zapytaj ile % teamu osiąga quota i jaka jest mediana earnings. OTE to target, nie gwarancja. Porównaj base salary — przy zmianie pracy, base jest pewna; komisja zależy od produktu, terytorium i firmy. Sprawdź strukturę komisji — czy jest cap? Czy acceleratory? Jaki jest ramp period? Porównaj ACV i ICP — łatwiej zamknąć 50 deali po 20K PLN niż 5 deali po 200K PLN. Sprawdź produkt-market fit — przy złym PMF nawet najlepszy AE nie zamknie quota. Patrz też na equity — w startupach opcje mogą być warte więcej niż różnica w OTE.",
  },
];

const oteByRole = [
  {
    rola: "SDR / BDR",
    oterPl: "60–100K PLN",
    split: "65/35",
    quota: "Pipeline value (8-15 qualified opps/mies.)",
    kolor: "blue",
  },
  {
    rola: "SMB Account Executive",
    oterPl: "120–180K PLN",
    split: "50/50",
    quota: "600K–1M PLN ARR/rok",
    kolor: "green",
  },
  {
    rola: "Mid-Market Account Executive",
    oterPl: "180–280K PLN",
    split: "55/45",
    quota: "1–2M PLN ARR/rok",
    kolor: "purple",
  },
  {
    rola: "Enterprise Account Executive",
    oterPl: "280–500K PLN",
    split: "60/40",
    quota: "2–5M PLN ARR/rok",
    kolor: "orange",
  },
  {
    rola: "Customer Success Manager",
    oterPl: "100–160K PLN",
    split: "75/25",
    quota: "NRR 110%+ na portfelu",
    kolor: "teal",
  },
  {
    rola: "VP Sales",
    oterPl: "350–700K PLN",
    split: "50/50",
    quota: "Team quota attainment",
    kolor: "red",
  },
];

const commissionPlan = [
  { prog: "0–50% quota", stawka: "5% komisji", mnoznik: "0.6x", ocena: "Poniżej oczekiwań", kolor: "red" },
  { prog: "50–75% quota", stawka: "7% komisji", mnoznik: "0.85x", ocena: "Wymaga poprawy", kolor: "orange" },
  { prog: "75–100% quota", stawka: "9% komisji", mnoznik: "1.0x (base rate)", ocena: "Na poziomie", kolor: "blue" },
  { prog: "100–125% quota", stawka: "13% komisji", mnoznik: "1.4x accelerator", ocena: "Powyżej oczekiwań", kolor: "green" },
  { prog: "Powyżej 125% quota", stawka: "17% komisji", mnoznik: "1.9x accelerator", ocena: "Wyjątkowy", kolor: "purple" },
];

export default function BlogOteCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="OTE (On-Target Earnings) — co to jest w sprzedaży? | Fotz.pl"
        description="OTE (On-Target Earnings) w sprzedaży B2B — definicja, split base vs. komisja, acceleratory i benchmarki OTE dla SDR, AE i VP Sales. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/ote-on-target-earnings-sprzedaz-b2b"

        keywords="OTE (On-Target Earnings) co to jest, OTE (On-Target Earnings) definicja, czym jest OTE (On-Target Earnings), OTE (On-Target Earnings) w sprzedaży, OTE (On-Target Earnings) strategia, OTE (On-Target Earnings) przykłady, jak używać OTE (On-Target Earnings)"

        canonical="https://fotz.pl/blog/ote-on-target-earnings-sprzedaz-b2b"
      />
      <ArticleSchema
        title="OTE (On-Target Earnings) — co to jest w sprzedaży?"
        description="Kompletny przewodnik po OTE: split base/komisja, acceleratory, benchmarki i jak porównywać oferty."
        url="https://fotz.pl/blog/ote-on-target-earnings-sprzedaz-b2b"
        datePublished="2024-02-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "OTE", url: "https://fotz.pl/blog/ote-on-target-earnings-sprzedaz-b2b" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "OTE", url: "/blog/ote-on-target-earnings-sprzedaz-b2b" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Compensation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OTE — On-Target Earnings
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              OTE to suma, którą handlowiec zarobi realizując 100% kwoty sprzedaży.
              Dobry plan prowizyjny przyciąga najlepszych AE, motywuje do przekraczania celów
              i jest kluczowym narzędziem zarządzania wynikami sprzedaży.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Formuła OTE", value: "Base + Komisja" },
                { label: "Reguła quota", value: "4-6x OTE" },
                { label: "Typowy split (AE)", value: "50/50" },
                { label: "Accelerator (125%+)", value: "1.5-2x" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTE by Role */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OTE benchmarki według roli (Polska)</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Benchmarki OTE dla polskiego rynku SaaS B2B (2024). Zachodnie rynki (US, UK)
              mają 2-4x wyższe OTE w porównaniu do Poland-based ról.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {oteByRole.map((r) => (
              <FadeInView key={r.rola}>
                <div className={`rounded-xl border-2 p-5 ${
                  r.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  r.kolor === "green" ? "border-green-200 bg-green-50" :
                  r.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  r.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  r.kolor === "teal" ? "border-teal-200 bg-teal-50" :
                  "border-red-200 bg-red-50"
                }`}>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex-1 min-w-48">
                      <h3 className={`font-bold text-lg ${
                        r.kolor === "blue" ? "text-blue-800" :
                        r.kolor === "green" ? "text-green-800" :
                        r.kolor === "purple" ? "text-purple-800" :
                        r.kolor === "orange" ? "text-orange-800" :
                        r.kolor === "teal" ? "text-teal-800" :
                        "text-red-800"
                      }`}>{r.rola}</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4 flex-1">
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">OTE (Polska)</div>
                        <div className="font-bold text-gray-900">{r.oterPl}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Split Base/Var</div>
                        <div className="font-medium text-gray-800">{r.split}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Typowa Quota</div>
                        <div className="text-sm text-gray-700">{r.quota}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Plan Example */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Przykładowy plan prowizyjny z acceleratorem</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dobry plan prowizyjny nagradza handlowców coraz hojniej za każde kolejne przekroczenie progu.
              To sprawia, że najlepsi AE chcą sprzedawać jak najwięcej — bez sufit.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {commissionPlan.map((c) => (
              <FadeInView key={c.prog}>
                <div className={`rounded-xl border p-5 ${
                  c.kolor === "red" ? "border-red-200 bg-red-50" :
                  c.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex-shrink-0 w-40">
                      <div className={`font-bold ${
                        c.kolor === "red" ? "text-red-700" :
                        c.kolor === "orange" ? "text-orange-700" :
                        c.kolor === "blue" ? "text-blue-700" :
                        c.kolor === "green" ? "text-green-700" :
                        "text-purple-700"
                      }`}>{c.prog}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 flex-1">
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Stawka</div>
                        <div className="font-medium text-gray-800">{c.stawka}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Mnożnik</div>
                        <div className="font-medium text-gray-800">{c.mnoznik}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Ocena</div>
                        <div className="text-sm text-gray-700">{c.ocena}</div>
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

      <RelatedArticles currentArticleId="ote-on-target-earnings-sprzedaz-b2b" />
      <ContactSection />
    </Layout>
  );
}
