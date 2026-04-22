import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Growth Accounting?",
    answer: "Growth Accounting to framework analityczny rozkładający wzrost użytkowników (lub revenue) na cztery składowe: New (nowi użytkownicy w danym okresie), Retained (użytkownicy aktywni w poprzednim i obecnym okresie), Resurrected (użytkownicy nieaktywni, którzy wrócili), Churned (użytkownicy z poprzedniego okresu, którzy nie powrócili). Wzór: MAU(t) = MAU(t-1) + New + Resurrected - Churned. Growth Accounting pozwala zrozumieć skąd pochodzi wzrost i jak zrównoważony jest biznes. Produkt rosnący głównie przez New users bez retencji nie jest zdrowy — przypomina 'dziurawe wiadro'.",
  },
  {
    question: "Jak interpretować Growth Accounting?",
    answer: "Interpretacja Growth Accounting: Jeśli New jest duże ale Retained małe — masz problem z retencją. Marketing przynosi użytkowników których produkt nie utrzymuje (leaky bucket). Jeśli Retained dominuje — zdrowy, organiczny wzrost. Masz sticky product i lojalną bazę. Jeśli Resurrected jest wysokie — produkt ma dobry 'win-back' potencjał. Możliwe że sezonowy lub cykliczny. Jeśli Churned rośnie szybciej niż New — biznes kurczy się mimo acquisition. Krytyczny sygnał. Zdrowy produkt: Retained jest największą składową (60-70%+ MAU pochodzi z Retained). New jest systematycznie uzupełniane przez marketing/growth. Churned jest minimalizowany przez retencję.",
  },
  {
    question: "Czym jest Quick Ratio w growth accounting?",
    answer: "Quick Ratio (Hila's Quick Ratio) to metryka zdrowia wzrostu: (New + Resurrected) / Churned. Interpretacja: poniżej 1 = kurczysz się (tracisz więcej niż zyskujesz). Równe 1 = stagnacja (zyski równoważą straty). 2-4 = zdrowy wzrost (zyskujesz 2-4x więcej niż tracisz). Powyżej 4 = bardzo szybki wzrost, charakterystyczny dla najlepszych produktów konsumenckich. Przykład: masz 1000 New + 200 Resurrected = 1200 nowych. Churned = 400. Quick Ratio = 1200/400 = 3.0 — zdrowy wzrost. Quick Ratio jest prostszy do śledzenia niż pełne Growth Accounting i łatwo pokazuje trend.",
  },
  {
    question: "Jak wdrożyć Growth Accounting w praktyce?",
    answer: "Wdrożenie Growth Accounting: Zdefiniuj 'aktywny użytkownik' — co oznacza aktywność w Twoim produkcie (logowanie, akcja kluczowa, transakcja). Wybierz okno czasowe — MAU (30 dni), WAU (7 dni) lub DAU. Taguj użytkowników co okres: New (pierwszy raz aktywny), Retained (aktywny w t-1 i t), Resurrected (aktywny w t, nie był w t-1 ale był wcześniej), Churned (aktywny w t-1, nie aktywny w t). Oblicz składowe. Zbuduj dashboard z trendami i Quick Ratio. Rozbij na segmenty — Growth Accounting per kohorta akwizycji, kanał, plan cenowy. To ujawnia gdzie jest problem.",
  },
  {
    question: "Jaka jest różnica między Growth Accounting a Cohort Analysis?",
    answer: "Growth Accounting i Cohort Analysis to komplementarne narzędzia. Cohort Analysis śledzi grupy użytkowników zdobytych w tym samym czasie — jak zachowuje się kohorta z Grudnia 2023 po 1, 2, 3 miesiącach. Pokazuje retention curve per kohorta. Growth Accounting pokazuje snap-shot cross-kohortalny w danym miesiącu — ile MAU pochodzi z nowych vs. starych użytkowników. Jest bardziej operacyjny, mniej badawczy. Użyj Cohort Analysis by diagnozować czy nowe kohorty są lepsze od starych (czy produkt się poprawia). Użyj Growth Accounting by monitorować bieżący stan zdrowia wzrostu i szybko identyfikować problemy.",
  },
];

const growthComponents = [
  {
    komponent: "New",
    opis: "Użytkownicy aktywni po raz pierwszy w historii produktu",
    źródło: "Marketing, paid acquisition, viral, referrals, organic SEO",
    zdrowy: "Systematyczny wzrost, ale nie dominuje nad Retained",
    alarm: "Duże New + małe Retained = leaky bucket",
    kolor: "green",
  },
  {
    komponent: "Retained",
    opis: "Użytkownicy aktywni zarówno w poprzednim jak i bieżącym okresie",
    źródło: "Product value, habits, switching costs, integrations",
    zdrowy: "Powinna być największa składowa MAU (60-70%+)",
    alarm: "Spadający Retained = produkt traci atrakcyjność mimo retencji cohort",
    kolor: "blue",
  },
  {
    komponent: "Resurrected",
    opis: "Użytkownicy, którzy wrócili po co najmniej jednym nieaktywnym okresie",
    źródło: "Email reactivation, nowe features, seasonality, win-back campaigns",
    zdrowy: "Wskazuje na wartość produktu — użytkownicy wracają",
    alarm: "Jeśli Resurrected zastępuje New — acquisition jest słabe",
    kolor: "purple",
  },
  {
    komponent: "Churned",
    opis: "Użytkownicy aktywni w poprzednim okresie, nieaktywni w obecnym",
    źródło: "Brak wartości, konkurencja, zmiana potrzeb, price, bugs",
    zdrowy: "Jak najniższe. Cel: minimalizować przez product improvement",
    alarm: "Churned rosnący szybciej niż New + Resurrected = kurczenie się",
    kolor: "red",
  },
];

const quickRatioBenchmarks = [
  { ratio: "Poniżej 1", interpretacja: "Kurczenie się", kolor: "red", opis: "Tracisz więcej niż zyskujesz. Natychmiastowa interwencja wymagana." },
  { ratio: "1.0", interpretacja: "Stagnacja", kolor: "orange", opis: "Zyski dokładnie równoważą straty. Brak realnego wzrostu." },
  { ratio: "2–4", interpretacja: "Zdrowy wzrost", kolor: "blue", opis: "Standardowy poziom dla rosnących produktów B2B/SaaS." },
  { ratio: "Powyżej 4", interpretacja: "Bardzo szybki wzrost", kolor: "green", opis: "Charakterystyczny dla virali konsumenckich (TikTok, ChatGPT early days)." },
];

export default function BlogGrowthAccountingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Growth Accounting — co to jest i jak analizować wzrost? | Fotz.pl"
        description="Growth Accounting: framework do analizy wzrostu na 4 składowe (New, Retained, Resurrected, Churned). Quick Ratio, leaky bucket i jak wdrożyć w SaaS."
        canonicalUrl="https://fotz.pl/blog/growth-accounting-analiza-wzrostu-uzytkownikow"

        keywords="Growth Accounting co to jest, Growth Accounting definicja, czym jest Growth Accounting, Growth Accounting przykłady, jak działa Growth Accounting, Growth Accounting znaczenie, Growth Accounting przewodnik"

        canonical="https://fotz.pl/blog/growth-accounting-analiza-wzrostu-uzytkownikow"
      />
      <ArticleSchema
        title="Growth Accounting — co to jest i jak analizować wzrost?"
        description="Growth Accounting: rozkład wzrostu na New, Retained, Resurrected i Churned. Quick Ratio, interpretacja, wdrożenie i różnice vs Cohort Analysis."
        url="https://fotz.pl/blog/growth-accounting-analiza-wzrostu-uzytkownikow"
        datePublished="2024-02-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Growth Accounting", url: "https://fotz.pl/blog/growth-accounting-analiza-wzrostu-uzytkownikow" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Growth Accounting", url: "/blog/growth-accounting-analiza-wzrostu-uzytkownikow" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Product Analytics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Growth Accounting
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Nie wystarczy wiedzieć że rośniesz — musisz wiedzieć dlaczego.
              Growth Accounting rozkłada wzrost MAU na cztery składowe,
              ujawniając czy budujesz zdrowy biznes czy "dziurawe wiadro".
            </p>
            <div className="bg-white/10 rounded-xl p-6 font-mono text-lg">
              <div className="text-emerald-300 font-bold mb-2">MAU(t) = MAU(t-1)</div>
              <div className="text-green-400">+ New</div>
              <div className="text-blue-400">+ Retained</div>
              <div className="text-purple-400">+ Resurrected</div>
              <div className="text-red-400">- Churned</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 składowe */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 składowe wzrostu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy użytkownik w każdym miesiącu trafia do dokładnie jednej z czterech kategorii.
              Razem dają pełny obraz zdrowia produktu.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-5">
            {growthComponents.map((c) => (
              <FadeInView key={c.komponent}>
                <div className={`rounded-xl border-2 p-6 h-full ${
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-red-200 bg-red-50"
                }`}>
                  <h3 className={`font-bold text-2xl mb-2 ${
                    c.kolor === "green" ? "text-green-700" :
                    c.kolor === "blue" ? "text-blue-700" :
                    c.kolor === "purple" ? "text-purple-700" :
                    "text-red-700"
                  }`}>{c.komponent}</h3>
                  <p className="text-gray-700 text-sm mb-3">{c.opis}</p>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-semibold text-gray-700">Źródło: </span><span className="text-gray-600">{c.źródło}</span></div>
                    <div><span className="font-semibold text-green-700">Zdrowe: </span><span className="text-gray-600">{c.zdrowy}</span></div>
                    <div className="bg-red-100 rounded p-2"><span className="font-semibold text-red-700">Alarm: </span><span className="text-gray-700">{c.alarm}</span></div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Ratio */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Ratio — jeden numer do monitorowania wzrostu</h2>
            <p className="text-gray-600 mb-3">Wzór: <strong>(New + Resurrected) / Churned</strong></p>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Quick Ratio to uproszczona wersja Growth Accounting — jeden wskaźnik
              pokazujący czy zdobywasz więcej niż tracisz.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {quickRatioBenchmarks.map((b) => (
              <FadeInView key={b.ratio}>
                <div className={`rounded-xl p-5 flex gap-4 items-center ${
                  b.kolor === "red" ? "bg-red-50 border border-red-200" :
                  b.kolor === "orange" ? "bg-orange-50 border border-orange-200" :
                  b.kolor === "blue" ? "bg-blue-50 border border-blue-200" :
                  "bg-green-50 border border-green-200"
                }`}>
                  <div className={`text-2xl font-bold w-32 flex-shrink-0 ${
                    b.kolor === "red" ? "text-red-600" :
                    b.kolor === "orange" ? "text-orange-600" :
                    b.kolor === "blue" ? "text-blue-600" :
                    "text-green-600"
                  }`}>{b.ratio}</div>
                  <div>
                    <div className="font-bold text-gray-900">{b.interpretacja}</div>
                    <div className="text-sm text-gray-600">{b.opis}</div>
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

      <RelatedArticles currentArticleId="growth-accounting-analiza-wzrostu-uzytkownikow" />
      <ContactSection />
    </Layout>
  );
}
