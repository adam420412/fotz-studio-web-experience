import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest CRO (Conversion Rate Optimization)?",
    answer: "CRO (Conversion Rate Optimization, optymalizacja współczynnika konwersji) to systematyczny proces poprawiania procentu odwiedzających którzy wykonują pożądaną akcję na stronie internetowej lub w aplikacji — zakup, rejestracja, wypełnienie formularza, pobranie materiału. Conversion Rate = (Liczba konwersji / Liczba odwiedzin) x 100%. CRO nie polega na zgadywaniu — to data-driven proces: analiza danych, formułowanie hipotez, testowanie zmian (A/B test), wdrożenie wygrywającego wariantu. CRO jest komplementarne do SEO i SEM: zamiast kupować więcej ruchu, lepiej konwertujesz ruch który już masz.",
  },
  {
    question: "Jakie są kluczowe metryki CRO?",
    answer: "Kluczowe metryki CRO: Conversion Rate (CR) — % odwiedzających wykonujących cel. E-commerce średnia: 2-4%. Bounce Rate — % odwiedzających opuszczających stronę bez interakcji. Wysoki bounce = problem z relevance lub UX. Time on Page — czas spędzony na stronie. Niski czas = treść nie angażuje lub jest nieczytelna. Exit Rate — % wizyt kończących się na danej stronie. Scroll Depth — jak daleko użytkownicy scrollują na stronie. Poniżej 50% = kluczowe treści prawdopodobnie 'below the fold'. Form Abandonment Rate — % użytkowników którzy rozpoczęli formularz ale go nie dokończyli. Cart Abandonment Rate (e-commerce) — % koszyków które nie zostały sfinalizowane. Benchmark globalny: 70% porzuconych koszyków.",
  },
  {
    question: "Jak przeprowadzić audyt CRO?",
    answer: "Audyt CRO — kroki: Analiza quantitative — Google Analytics/GA4: które strony mają najwyższy bounce rate, gdzie jest największy drop-off w funnel, skąd pochodzi ruch który konwertuje. Analiza qualitative — Heatmapy (Hotjar, Microsoft Clarity): gdzie użytkownicy klikają, jak daleko scrollują, co ich frustruje. Session recordings — nagrania sesji: jak realnie zachowują się użytkownicy na stronie. Usability testing — poproś 5-10 osób żeby wykonały zadanie na stronie i obserwuj. Voice of Customer — survey exit intent, review, support tickets — co mówią klienci. Competitive Benchmark — sprawdź jak wyglądają strony konkurencji. Na podstawie audytu tworzysz listę hipotez od największego do najmniejszego potencjalnego impact.",
  },
  {
    question: "Jak przeprowadzić skuteczny test A/B w CRO?",
    answer: "A/B Test w CRO: 1. Sformułuj hipotezę — 'Zmiana CTA z 'Kup teraz' na 'Zacznij darmowy trial' zwiększy konwersję o X% ponieważ zmniejsza perceived risk'. 2. Ustal sample size — oblicz ile odwiedzin potrzebujesz dla statystycznej istotności (narzędzia: Evan Miller calculator). Dla 5% konwersji bazowej i 20% oczekiwanego wzrostu potrzebujesz ok. 10-15K odwiedzin per wariant. 3. Uruchom test — minimum 2-4 tygodnie dla eliminacji sezonowości. 4. Analizuj wyniki — sprawdź p-value (musi być poniżej 0.05 dla 95% confidence). 5. Zaimplementuj winner lub wyciągnij wnioski z przegranego. Błędy: kończenie testu zbyt wcześnie (peek error), testowanie zbyt wielu zmiennych naraz, ignorowanie segmentacji wyników.",
  },
  {
    question: "Jakie elementy strony najczęściej testuje się w CRO?",
    answer: "Elementy z największym wpływem na konwersję: Headline — najważniejszy element. Zmiana nagłówka może zmienić konwersję o 50%. Testuj value proposition clarity. CTA (Call-To-Action) — tekst, kolor, rozmiar, pozycja przycisku. 'Zacznij za darmo' vs. 'Kup teraz' to ogromna różnica. Social Proof — ilość reviews, loga klientów, testimoniale. Formularz — liczba pól (mniej = więcej konwersji), kolejność pól, labeling. Obrazy / Video — hero image lub explainer video mogą dramatycznie wpłynąć na rozumienie oferty. Pricing presentation — jak prezentowane są ceny (anchoring, freemium vs. premium). Trust signals — SSL badge, gwarancja zwrotu, certyfikaty. Page Speed — każda dodatkowa sekunda ładowania obniża konwersję o 7%.",
  },
];

const croProcess = [
  { krok: "Zbierz dane", opis: "Analiza GA4 — bounce rate, funnel drop-off, source/medium performance. Heatmapy Hotjar — gdzie klikają, jak scrollują. Session recordings — jak realnie używają strony.", kolor: "blue" },
  { krok: "Formułuj hipotezy", opis: "Na podstawie danych stwórz listę hipotez. Format: 'Zmiana X spowoduje Y ponieważ Z'. Priorytetyzuj według ICE Score: Impact x Confidence x Ease.", kolor: "green" },
  { krok: "Zaprojektuj wariant", opis: "Stwórz wariant B (lub więcej) który testuje hipotezę. Zmieniaj jeden element naraz (izolacja zmiennej). Design w Figma, implementacja w narzędziu A/B.", kolor: "purple" },
  { krok: "Uruchom test A/B", opis: "Użyj narzędzia testowego (Optimizely, VWO, Google Optimize). Oblicz sample size przed startem. Minimum 2 tygodnie, pełne tygodnie (eliminacja sezonowości tygodniowej).", kolor: "orange" },
  { krok: "Analizuj wyniki", opis: "Sprawdź statystyczną istotność (p-value poniżej 0.05). Sprawdź segmenty — device, source, new vs. returning. Nie kończ testu przed osiągnięciem sample size.", kolor: "red" },
  { krok: "Wdróż i dokumentuj", opis: "Zaimplementuj winner. Dokumentuj hipotezę, wynik i wnioski — buduj knowledge base. Przegraj też może być insightful — dlaczego nie zadziałało?", kolor: "teal" },
];

const croElements = [
  { element: "Headline / H1", wpływ: "Bardzo wysoki", testuj: "Clarity vs. Clever, Value Proposition vs. Feature-focused, WIIFM (What's in it for me)" },
  { element: "CTA Button", wpływ: "Wysoki", testuj: "Tekst ('Zacznij za darmo' vs. 'Wypróbuj'), kolor (contrast), pozycja (above the fold?), rozmiar" },
  { element: "Social Proof", wpływ: "Wysoki", testuj: "Liczba klientów/reviews, loga firm, video testimonials, case studies w hero" },
  { element: "Formularz", wpływ: "Wysoki", testuj: "Liczba pól (mniej = więcej konwersji), kolejność, placeholder tekst, error messages" },
  { element: "Hero Image / Video", wpływ: "Średni", testuj: "Explainer video vs. screenshot, person vs. product, emotional vs. rational" },
  { element: "Pricing Structure", wpływ: "Wysoki (dla e-commerce)", testuj: "Anchoring, freemium vs. paid first, monthly vs. annual display, gwarancja zwrotu" },
];

export default function BlogCroCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="CRO — Conversion Rate Optimization co to jest? | Fotz.pl"
        description="CRO (Conversion Rate Optimization) — co to jest, jak przeprowadzić audyt, testy A/B i które elementy strony optymalizować. Kompletny przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/cro-conversion-rate-optimization-co-to-jest"

        keywords="CRO co to jest, CRO definicja, czym jest CRO, CRO przykłady, jak działa CRO, CRO znaczenie, CRO przewodnik"

        canonical="https://fotz.pl/blog/cro-conversion-rate-optimization-co-to-jest"
      />
      <ArticleSchema
        title="CRO — Conversion Rate Optimization co to jest?"
        description="Kompletny przewodnik po CRO: audyt, A/B testing, kluczowe metryki i elementy strony o najwyższym wpływie na konwersję."
        url="https://fotz.pl/blog/cro-conversion-rate-optimization-co-to-jest"
        datePublished="2024-02-09"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CRO", url: "https://fotz.pl/blog/cro-conversion-rate-optimization-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "CRO", href: "/blog/cro-conversion-rate-optimization-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Conversion Optimization
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CRO — Conversion Rate Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Podwojenie conversion rate jest tańsze niż podwojenie ruchu.
              CRO to systematyczny proces testowania co działa lepiej —
              oparty na danych, hipotezach i statystyce, nie intuicji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "E-commerce CR średnia", value: "2-4%" },
                { label: "Etapów procesu", value: "6" },
                { label: "Cart abandonment avg.", value: "70%" },
                { label: "Czas min. testu A/B", value: "2 tygodnie" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proces CRO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6-krokowy proces CRO</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              CRO to cykl ciągłego doskonalenia — zbierasz dane, formuujesz hipotezy,
              testujesz i uczysz się. Każdy test buduje wiedzę o Twoich użytkownikach.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {croProcess.map((k, i) => (
              <FadeInView key={k.krok}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      k.kolor === "blue" ? "bg-blue-600" :
                      k.kolor === "green" ? "bg-green-600" :
                      k.kolor === "purple" ? "bg-purple-600" :
                      k.kolor === "orange" ? "bg-orange-600" :
                      k.kolor === "red" ? "bg-red-600" :
                      "bg-teal-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{k.krok}</h3>
                      <p className="text-sm text-gray-700">{k.opis}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Elementy do testowania */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Co testować — elementy o największym wpływie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie wszystkie elementy mają równy wpływ na konwersję. Zacznij od elementów
              z najwyższym potencjalnym impaktem — headline i CTA — zanim przejdziesz do detali.
            </p>
          </FadeInView>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-4 text-sm font-bold">Element</div>
              <div className="p-4 text-sm font-bold text-orange-400">Wpływ na CR</div>
              <div className="p-4 text-sm font-bold">Co testować</div>
            </div>
            {croElements.map((e, i) => (
              <div key={e.element} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="p-4 text-sm font-bold text-gray-700">{e.element}</div>
                <div className={`p-4 text-sm font-medium ${
                  e.wpływ === "Bardzo wysoki" ? "text-red-600" :
                  e.wpływ === "Wysoki" ? "text-orange-600" :
                  "text-blue-600"
                }`}>{e.wpływ}</div>
                <div className="p-4 text-sm text-gray-700">{e.testuj}</div>
              </div>
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
