import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest TAM, SAM i SOM?",
    answer:
      "TAM (Total Addressable Market) to całkowita wartość rynku globalnie — suma przychodów wszystkich firm gdyby każdy potencjalny klient kupował dany produkt/usługę. SAM (Serviceable Addressable Market) to część TAM, którą firma może obsłużyć swoim modelem biznesowym, geografią i ofertą. SOM (Serviceable Obtainable Market) to realistyczna część SAM, którą firma może zdobyć w ciągu 3-5 lat biorąc pod uwagę konkurencję, zasoby i tempo wzrostu. SOM jest najważniejszy dla inwestorów.",
  },
  {
    question: "Jak obliczyć TAM, SAM i SOM?",
    answer:
      "Dwie metody: Top-Down — zacznij od danych rynkowych (raporty Gartner, IDC, Grand View Research), weź całkowity rynek i zawęź do swojego segmentu. Bottom-Up — zacznij od potencjalnych klientów: liczba firm w target segmencie × ARPU (average revenue per user) × wskaźnik konwersji. Bottom-Up jest bardziej wiarygodny dla inwestorów i wymaga konkretnych założeń. Dla SOM: estymuj realistyczny win rate i market share na podstawie danych sprzedażowych lub benchmarków rynkowych.",
  },
  {
    question: "Dlaczego inwestorzy pytają o TAM, SAM, SOM?",
    answer:
      "Inwestorzy używają TAM/SAM/SOM do oceny potencjału wzrostu i ambicji firmy. Zbyt mały TAM (poniżej 1 mld USD dla VC) sugeruje ograniczony potencjał zwrotu z inwestycji. Zbyt duży TAM bez przekonującego SAM i SOM wskazuje na brak strategicznego skupienia. Realistyczny, dobrze uargumentowany SOM pokazuje, że founder rozumie rynek i ma plan zdobycia znaczącego udziału. Typowy oczekiwany SOM to 1-5% SAM w ciągu 5 lat.",
  },
  {
    question: "Jakie błędy popełniają firmy przy prezentacji rynku?",
    answer:
      "Najczęstsze błędy: ogromny TAM bez uzasadnienia jak firma dotrze do tej wartości ('jeśli zdobędziemy 1% rynku wartego 1 mld to będziemy mieć 10 mln...'), brak rozróżnienia między TAM, SAM i SOM, używanie tylko jednej metody (top-down bez bottom-up), przestarzałe dane rynkowe (raport sprzed 5 lat), nieuwzględnienie realnej dynamiki konkurencji, mylenie wartości rynku z przychodem firmy.",
  },
  {
    question: "Jak często aktualizować estymacje rynku?",
    answer:
      "Estymacje TAM/SAM/SOM warto aktualizować: rocznie jako standard, przy wchodzeniu do nowego segmentu lub geografii, przy pivot modelu biznesowego, przy przygotowaniu do rundy finansowania, oraz gdy pojawiają się nowe raporty rynkowe lub zmieniają się trendy w branży. Dane rynkowe starsze niż 2-3 lata mogą być znacząco nieaktualne, szczególnie w szybko rosnących branżach technologicznych.",
  },
];

const tamSamSomDefinitions = [
  {
    skrót: "TAM",
    pełna: "Total Addressable Market",
    definicja: "Całkowita wartość globalnego rynku — suma wszystkich potencjalnych przychodów gdyby produkt miał 100% udziału",
    pytanie: "Ile warta byłaby ta kategoria produktu/usługi globalnie?",
    przykład: "Rynek CRM globalnie: ~80 mld USD rocznie (2024)",
    komentarz: "Służy do pokazania skali szansy — nie jest realistycznym celem firmy",
    kolor: "bg-blue-600",
  },
  {
    skrót: "SAM",
    pełna: "Serviceable Addressable Market",
    definicja: "Część TAM którą firma może obsłużyć swoim modelem, geografią, ICP i ofertą produktową",
    pytanie: "Jaki jest rynek który Twoja firma może realnie adresować?",
    przykład: "CRM dla MŚP w Europie Środkowo-Wschodniej: ~2 mld USD",
    komentarz: "Definiuje faktyczny 'plac zabaw' firmy — ważniejszy niż TAM",
    kolor: "bg-indigo-600",
  },
  {
    skrót: "SOM",
    pełna: "Serviceable Obtainable Market",
    definicja: "Realistyczna część SAM którą firma może zdobyć w ciągu 3-5 lat przy obecnych zasobach i tempie wzrostu",
    pytanie: "Jaki udział w rynku jest realny do osiągnięcia?",
    przykład: "CRM dla MŚP w Polsce i Czechach: ~150 mln USD (cel na 5 lat)",
    komentarz: "Najważniejszy dla inwestorów — musi być dobrze uzasadniony danymi",
    kolor: "bg-purple-600",
  },
];

const calculationMethods = [
  {
    metoda: "Top-Down (z góry w dół)",
    opis: "Zacznij od istniejących danych rynkowych i zawęź do swojego segmentu",
    kroki: "1. Znajdź raport branżowy (Gartner, IDC, Statista). 2. Weź wartość całego rynku (TAM). 3. Zastosuj filtry geograficzne, segmentowe, produktowe (TAM → SAM). 4. Estymuj win rate i market share (SAM → SOM).",
    zalety: "Szybka, opiera się na wiarygodnych zewnętrznych danych",
    wady: "Ryzyko wyboru nieodpowiedniego proxy rynku, agregacji na zbyt wysokim poziomie",
  },
  {
    metoda: "Bottom-Up (z dołu w górę)",
    opis: "Zacznij od konkretnych danych o potencjalnych klientach i skaluj",
    kroki: "1. Zdefiniuj dokładny ICP (firmografia, branża, wielkość). 2. Policz liczbę firm w segmencie (LinkedIn, bazy firm). 3. Pomnóż przez ARPU. 4. Zastosuj realny conversion rate dla SOM.",
    zalety: "Bardziej wiarygodna, opiera się na realnych założeniach sprzedażowych",
    wady: "Czasochłonna, wymaga dobrej znajomości rynku i liczby firm",
  },
];

const commonMistakes = [
  { błąd: "Zbyt duży, nieuzasadniony TAM", opis: "'Rynek edukacji to 7 bilionów dolarów' bez zawężenia do konkretnego segmentu" },
  { błąd: "Brak SOM z uzasadnieniem", opis: "'1% rynku to wystarczy' bez wyjaśnienia jak i dlaczego akurat 1%" },
  { błąd: "Mylenie TAM z SAM", opis: "Presenter mówi o SAM ale używa liczb globalnego rynku" },
  { błąd: "Przestarzałe dane", opis: "Raport z 2018 roku jako podstawa estymacji w 2024 — rynek mógł się podwoić lub spaść" },
  { błąd: "Tylko jedna metoda", opis: "Używanie wyłącznie top-down bez walidacji bottom-up — inwestorzy często o to pytają" },
];

export default function BlogTamSamSomCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TAM, SAM, SOM | Fotz Studio"
        description="TAM SAM SOM — definicje, jak obliczyć metodą top-down i bottom-up, typowe błędy i dlaczego inwestorzy pytają o te metryki. Kompletny przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/tam-sam-som-co-to"

        keywords="TAM, SAM, SOM co to jest, TAM, SAM, SOM definicja, czym jest TAM, SAM, SOM, TAM, SAM, SOM startup, TAM, SAM, SOM jak liczyć, TAM, SAM, SOM wzór, TAM, SAM, SOM przykłady"

        canonical="https://fotz.pl/blog/tam-sam-som-co-to"
      />
      <ArticleSchema
        title="TAM, SAM, SOM — co to jest i jak obliczać wielkość rynku?"
        description="Kompletny przewodnik po TAM, SAM i SOM: definicje, metody obliczania, błędy i dlaczego te metryki są kluczowe dla inwestorów."
        url="https://fotz.pl/blog/tam-sam-som-co-to"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TAM SAM SOM", url: "https://fotz.pl/blog/tam-sam-som-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "TAM SAM SOM", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            TAM, SAM, SOM — co to jest i jak obliczać rynek?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            TAM, SAM i SOM to trzy kluczowe metryki analizy rynku — fundamentalne dla pitch decków,
            strategii i rozmów z inwestorami. Poznaj definicje, metody obliczania i typowe błędy.
          </p>
        </div>
      </section>

      {/* 3 definicje */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">TAM, SAM, SOM — definicje i przykłady</h2>
            <div className="space-y-4">
              {tamSamSomDefinitions.map((d, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className={`${d.kolor} text-white rounded-xl px-4 py-3 text-center flex-shrink-0 min-w-20`}>
                      <p className="text-2xl font-bold">{d.skrót}</p>
                      <p className="text-xs opacity-80">{d.pełna.split(" ").slice(0, 2).join(" ")}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-500 mb-1">{d.pełna}</p>
                      <p className="text-slate-700 mb-2">{d.definicja}</p>
                      <div className="grid md:grid-cols-3 gap-2 text-sm">
                        <div className="bg-white rounded p-2 border">
                          <p className="text-xs text-slate-400 mb-1">Pytanie:</p>
                          <p className="text-slate-600 italic">{d.pytanie}</p>
                        </div>
                        <div className="bg-white rounded p-2 border">
                          <p className="text-xs text-slate-400 mb-1">Przykład (CRM):</p>
                          <p className="text-slate-600">{d.przykład}</p>
                        </div>
                        <div className="bg-white rounded p-2 border">
                          <p className="text-xs text-slate-400 mb-1">Uwaga:</p>
                          <p className="text-slate-600">{d.komentarz}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metody obliczania */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak obliczać TAM, SAM i SOM?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {calculationMethods.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{m.metoda}</h3>
                  <p className="text-slate-600 text-sm mb-3">{m.opis}</p>
                  <div className="bg-blue-50 rounded p-3 mb-3 text-sm text-blue-800">
                    <p className="font-semibold mb-1">Kroki:</p>
                    <p>{m.kroki}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 rounded p-2">
                      <p className="font-semibold text-green-600 mb-1">Zalety:</p>
                      <p className="text-green-800">{m.zalety}</p>
                    </div>
                    <div className="bg-red-50 rounded p-2">
                      <p className="font-semibold text-red-600 mb-1">Wady:</p>
                      <p className="text-red-800">{m.wady}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Błędy */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 typowych błędów w analizie rynku</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {commonMistakes.map((m, i) => (
                <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-red-800 mb-1">{m.błąd}</h3>
                      <p className="text-red-700 text-sm italic">{m.opis}</p>
                    </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — TAM, SAM, SOM</h2>
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

      <RelatedArticles currentArticleId="tam-sam-som-co-to" />
      <ContactSection />
    </Layout>
  );
}
