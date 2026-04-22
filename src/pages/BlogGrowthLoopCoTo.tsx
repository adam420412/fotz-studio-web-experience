import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest growth loop?",
    answer:
      "Growth loop (pętla wzrostu) to zamknięty, samonapędzający się cykl w którym wzrost produktu generuje nowych użytkowników lub przychody, które z kolei napędzają kolejny cykl wzrostu. W odróżnieniu od tradycyjnego lejka (linearny: reklama → pozyskanie → konwersja), growth loop jest cykliczny — output jednego cyklu staje się inputem następnego. Koncepcja spopularyzowana przez Reforge (Brian Balfour) jako alternatywa dla AARRR framework.",
  },
  {
    question: "Czym growth loop różni się od lejka (funnel)?",
    answer:
      "Tradycyjny lejek jest linearny i jednorazowy — użytkownik przechodzi przez kroki i na końcu konwertuje lub odpada. Nie ma mechanizmu samonapędzającego. Growth loop jest cykliczny — koniec jednego cyklu generuje input do następnego. Przykład: Dropbox referral loop: użytkownik zaprasza znajomego → znajomy rejestruje się → używa produktu → zaprasza kolejnego. Każdy cykl wzmacnia sam siebie. Growth loops budują compound growth, funnel — liniowy wzrost.",
  },
  {
    question: "Jakie są typy growth loops?",
    answer:
      "Główne typy: 1) Viral/Sharing loops — użytkownicy zapraszają innych (Dropbox, Slack, WhatsApp), 2) Content/SEO loops — treści generują ruch → więcej użytkowników tworzy treści → więcej ruchu (Wikipedia, Reddit, YouTube), 3) Paid loops — przychód generuje budżet reklamowy → reklamy przyciągają użytkowników → przychód rośnie (e-commerce), 4) Product loops — użycie produktu tworzy wartość dla nowych użytkowników (LinkedIn: każdy profil przyciąga nowych), 5) Community loops — community przyciąga użytkowników → użytkownicy budują community.",
  },
  {
    question: "Jak zaprojektować growth loop?",
    answer:
      "Framework: 1) Zidentyfikuj core user action — co użytkownik robi w produkcie, 2) Znajdź naturalny output tej akcji — co produkuje? (udostępnienie, zaproszenie, treść, dane), 3) Zdefiniuj jak output przyciąga nowych użytkowników — mechanizm distribucji, 4) Określ jak nowi użytkownicy stają się aktywnymi — ścieżka od discovery do aktywacji, 5) Zamknij pętlę — nowi aktywni użytkownicy wykonują core action i cykl się powtarza, 6) Zmierz loop velocity i conversion rates dla każdego kroku.",
  },
  {
    question: "Co to jest loop velocity i dlaczego jest ważna?",
    answer:
      "Loop velocity to szybkość jednego cyklu pętli — ile czasu zajmuje przejście od core action do pozyskania nowego użytkownika. Szybsza pętla = szybszy wzrost. Przykład: jeśli Twoja referral loop trwa 30 dni (od zaproszenia do aktywacji), vs. 7 dni u konkurencji — przy tych samych współczynnikach konwersji konkurent rośnie 4× szybciej. Optymalizacja velocity (skrócenie friction w każdym kroku pętli) to jedna z najważniejszych dźwigni wzrostu.",
  },
];

const loopTypes = [
  {
    typ: "Viral / Referral Loop",
    mechanizm: "Użytkownik zaprasza → nowy użytkownik aktywuje się → zaprasza kolejnych",
    przykłady: "Dropbox (+15% space za invite), PayPal ($10 za rejestrację), Uber (kod polecającego)",
    kluczowy_wskaźnik: "Viral coefficient K = invites/user × conversion rate. K powyżej 1 = eksponencjalny wzrost",
    jak_budować: "Incentivize sharing, ułatw zaproszenie, szybki onboarding zaproszonych",
  },
  {
    typ: "Content / SEO Loop",
    mechanizm: "Treści generują ruch organiczny → użytkownicy tworzą więcej treści → więcej ruchu",
    przykłady: "Wikipedia, Reddit, Quora, YouTube, TripAdvisor, Stack Overflow",
    kluczowy_wskaźnik: "UGC rate (% aktywnych twórców treści), organic traffic growth, indexed pages",
    jak_budować: "Niski próg tworzenia treści, dystrybucja w wyszukiwarkach, reputacja/gamification",
  },
  {
    typ: "Paid Acquisition Loop",
    mechanizm: "Przychód → budżet marketingowy → nowi klienci → więcej przychodu",
    przykłady: "E-commerce reinwestujące CAC payback w reklamę, SaaS z szybkim payback period",
    kluczowy_wskaźnik: "CAC Payback Period (im krótszy, tym szybciej reinwestujesz), LTV:CAC ratio",
    jak_budować: "Skróć payback period, optymalizuj CAC, reinwestuj w kanały o najwyższym ROAS",
  },
  {
    typ: "Product / Network Loop",
    mechanizm: "Wartość produktu rośnie z każdym nowym użytkownikiem — network effects",
    przykłady: "LinkedIn (profil + network + treści), Slack (team → invite colleagues), Figma",
    kluczowy_wskaźnik: "Network density, feature adoption rate, collaboration metrics",
    jak_budować: "Zbuduj wartość zależną od innych użytkowników, ułatw discovery i współpracę",
  },
  {
    typ: "Community Loop",
    mechanizm: "Community przyciąga użytkowników → użytkownicy wzbogacają community → więcej przyciąga",
    przykłady: "Notion Community, Figma Community, HubSpot Academy, Product Hunt",
    kluczowy_wskaźnik: "Community DAU/MAU, contribution rate, event attendance, NPS",
    jak_budować: "Wartościowe treści, moderacja, wyróżnianie twórców, regularne eventy",
  },
];

const loopDesignSteps = [
  { krok: "1", tytul: "Zidentyfikuj Core Action", opis: "Co jest kluczową akcją Twojego produktu? To co użytkownik robi regularnie i co tworzy wartość." },
  { krok: "2", tytul: "Znajdź Output", opis: "Co produkuje core action? Zaproszenie, treść, dane, udostępnienie, recenzja — to wyjście pętli." },
  { krok: "3", tytul: "Zdefiniuj Dystrybucję", opis: "Jak output dociera do nowych potencjalnych użytkowników? Wyszukiwarki, social media, email, word of mouth." },
  { krok: "4", tytul: "Zaprojektuj Aktywację", opis: "Jak nowy użytkownik przechodzi od discovery do wykonania core action? Minimalizuj friction." },
  { krok: "5", tytul: "Zamknij Pętlę", opis: "Upewnij się że aktywowany nowy użytkownik wykonuje core action — i cykl się powtarza." },
  { krok: "6", tytul: "Zmierz i Optymalizuj", opis: "Mierz conversion rate i velocity dla każdego kroku. Optymalizuj największy drop-off." },
];

export default function BlogGrowthLoopCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Growth Loop — co to jest? Pętla wzrostu zamiast lejka konwersji"
        description="Growth loop (pętla wzrostu) — definicja, 5 typów (viral, content, paid, product, community), jak projektować i różnica vs lejek. Kompletny przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/growth-loop-co-to"

        keywords="Growth Loop co to jest, Growth Loop definicja, czym jest Growth Loop, Growth Loop przykłady, jak działa Growth Loop, Growth Loop znaczenie, Growth Loop przewodnik"

        canonical="https://fotz.pl/blog/growth-loop-co-to"
      />
      <ArticleSchema
        title="Growth Loop — co to jest i jak projektować pętle wzrostu?"
        description="Kompletny przewodnik po growth loops: 5 typów pętli (viral, content SEO, paid, product, community), 6-krokowy framework projektowania i kluczowe metryki."
        url="https://fotz.pl/blog/growth-loop-co-to"
        datePublished="2024-02-03"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Growth Loop", url: "https://fotz.pl/blog/growth-loop-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Growth Loop", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Growth Loop — co to jest i jak projektować pętle wzrostu?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Growth loop zastępuje linearny lejek cyklicznym mechanizmem wzrostu.
            Poznaj 5 typów pętli (viral, content, paid, product, community) i jak je zaprojektować.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest growth loop?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Growth loop</strong> to zamknięty, samonapędzający się cykl gdzie output wzrostu
              staje się inputem kolejnego cyklu. W odróżnieniu od lejka konwersji (linearny, jednorazowy),
              pętla wzrostu działa jak koło zamachowe — każdy obrót napędza kolejny.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Dropbox zbudował growth loop który dodał 4 miliony użytkowników w 15 miesięcy —
              nie przez reklamę, ale przez referral program dający dodatkowe miejsce za zaproszenia.
              Każdy nowy użytkownik stał się kanałem pozyskania kolejnych.
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6 text-center mb-6">
              <p className="text-lg font-mono">Core Action → Output → Dystrybucja → Nowy użytkownik → Core Action...</p>
              <p className="text-slate-400 text-sm mt-2">Zamknięta pętla zamiast otwartego lejka</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "Compound Growth", opis: "growth loop buduje wzrost wykładniczy — każdy cykl wzmacnia poprzedni" },
                { stat: "Viral coefficient K", opis: "K = invites/user × conversion rate. K powyżej 1 = organiczny wzrost bez reklam" },
                { stat: "Loop Velocity", opis: "szybkość jednego cyklu pętli — skróć friction żeby rosnąć szybciej" },
              ].map((s, i) => (
                <div key={i} className="bg-emerald-50 rounded-xl p-5 text-center">
                  <p className="text-lg font-bold text-emerald-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 typów growth loops</h2>
            <div className="space-y-5">
              {loopTypes.map((loop, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{loop.typ}</h3>
                  <p className="text-slate-600 mb-3">{loop.mechanizm}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="text-xs font-semibold text-emerald-600 mb-1">Przykłady:</p>
                      <p className="text-emerald-800">{loop.przykłady}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Kluczowy wskaźnik:</p>
                      <p className="text-blue-800">{loop.kluczowy_wskaźnik}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Jak budować:</p>
                      <p className="text-orange-800">{loop.jak_budować}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak zaprojektować growth loop — 6 kroków</h2>
            <div className="space-y-4">
              {loopDesignSteps.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex gap-4">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {s.krok}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{s.tytul}</h3>
                    <p className="text-slate-600 text-sm">{s.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — growth loop</h2>
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

      <RelatedArticles currentArticleId="growth-loop-co-to" />
      <ContactSection />
    </Layout>
  );
}
