import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Monitor, Target, Zap, BarChart3, CheckCircle } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest landing page i dlaczego jest inna od pozostałych stron?",
    answer: "Landing page to dedykowana strona o jednym, jasnym celu konwersji. Odwiedzający trafiają z konkretnego źródła (reklama, email, link). Różni się od strony głównej: brak nawigacji, fokus na jedno działanie (CTA), zmniejszona liczba rozpraszaczy. Elementy: nagłówek wabi, propozycja wartości, social proof, formularz, CTA. Przykład: LP do pobrania e-booka, zapisania na webinar, zakupu. Versus strona główna: wiele opcji, szeroka nawigacja, ogólny cel. Dlatego LP konwertują 2–5x lepiej. Optimum: jedno CTA, 5–10 sekundy do zrozumienia oferty, mobilna responsywność.",
  },
  {
    question: "Jakie elementy musi mieć landing page o wysokiej konwersji?",
    answer: "Siedem kluczowych elementów: 1. Nagłówek (H1) — jasny, konkretny, zawiera hasło wyszukiwania. Odpowiada na pytanie: co zyskam? Przykład: zamiast Usługi IT, lepiej: Zwiększ konwersję sklepu o 30% w 90 dni. 2. Propozycja wartości (value proposition) — unikalne korzyści. Dlaczego tu, a nie u konkurencji? 3. Hero image — wysoka jakość, relevanty do oferty. 4. CTA (Call To Action) — wyraźnie widoczny, kolor kontrastowy. Tekst: Stwórz konto za darmo, Pobierz poradnik, Rezerwuj demo. 5. Formularz — minimalna liczba pól. Mniej pól = wyższa konwersja. Testuj 3 vs 5 pól. 6. Social proof — recenzje, liczba klientów, loga firm, kredybilność. 7. Szybkość ładowania — poniżej 3 sekund. Każda sekunda czyni średnia spadku konwersji o 7%. Testuj stale A/B.",
  },
  {
    question: "Jak przeprowadzić testy A/B na landing page?",
    answer: "Testy A/B (split testing) porównują dwie wersje: kontrolną (A) i wariant (B). Kroki: 1. Wybierz element — nagłówek, kolor CTA, tekst, formularz. 2. Utwórz wariant — zmień jedna rzecz. 3. Podziel traffic — 50/50 przez minimum 2–4 tygodnie. 4. Zbieraj dane — konwersje, sessioning time, bounce rate. 5. Analizuj — czy różnica jest statystycznie istotna? Wymagane: minimum 100–200 konwersji w każdej grupie. Narzędzia: Google Optimize (wbudowany w GA4), Optimizely, VWO. Przykłady testów: Nagłówek A: Zwiększ sprzedaż 30% / Nagłówek B: Zwiększ sprzedaż bez wysiłku. Kolor CTA: Niebieski vs Pomarańczowy. Liczba pól w formularzu: 3 vs 5. Rezultat: nawet 1% lift w konwersji to 5–10k wartości dodatkowej rocznie.",
  },
  {
    question: "Jakie błędy najczęściej obniżają konwersję na landing page?",
    answer: "Top 10 błędów: 1. Zbyt wiele navigacji — odwiedź czuje się zagubiony. Usuń menu, trzymaj fokus. 2. Niejasny CTA — przycisk bez tekstu, maskowany. Rozwiąż: Wyraźny tekst, kontrast, powtarzaj CTA 2–3 razy. 3. Wolne ładowanie — ponad 3 sekundy. Optimizuj zdjęcia, CDN, cache. 4. Brak mobile optymalizacji — 50% traffic z mobilnych. Test: responsywnie na iPhone. 5. Za dużo tekstu — ludzie skanują. Rozwiąż: krótkie zdania, bullet points, White space. 6. Słaba propozycja wartości — nie wiadomo co się zyska. Wyjaśni: co, dlaczego, jak, dla kogo. 7. Formularz za długi — drop-off przy 5+ polach. Testuj: 3 pola (email, imię, temat) vs 5. 8. Brak social proof — brak wiary. Dodaj: cytaty, liczby (4.8/5 gwiazdek), loga klientów. 9. Niesklerotyp kolorystyka — CTA niewidoczny. Kontrast: CTA niebieskie na białym tle, pomarańczowe jako dopełnienie. 10. Brak form walidacji — frustracją użytkownika. Real-time feedback: To pole wymagane.",
  },
  {
    question: "Jakie narzędzia wspomagają optymalizację landing page?",
    answer: "Zestaw narzędzi: Heatmaps — Hotjar, Microsoft Clarity. Co klikają użytkownicy? Gdzie spuszczają scroll? Scroll depth: 80% na nagłówek, 20% na CTA — problem z propozycją wartości. Session recordings — Hotjar, Clarity. Wideo jak użytkownik używa LP. Widać frustrację, błędy. Google Analytics 4 — konwersje, ścieżki, cohort analysis. Event tracking: kliknięcie CTA, form submission. Segment: które źródła konwertują lepiej? Optimizely, VWO — testy A/B bez kodowania. Visual editor, rules engine. Google Optimize (wycofywany, przejście na GA4 experiments). Unbounce, Leadpages — builder LP z testami wbudowanymi. Sem rush, Ahrefs — SEO analysis LP. Pozycja w SERPie, keywords. Figma, Adobe XD — design przed kodowaniem. Responsywności, prototyping. Mailchimp, HubSpot — email follow-up po konwersji. Workflow automation. Workflow: Design LP w Figma → kod HTML → push do CMS/Vercel → Google Analytics event tracking → Hotjar heatmaps (2 tygodnie) → analiza → A/B test w Google Optimize/VWO → repeat.",
  },
];

const landingPageElements = [
  { element: "Nagłówek (H1)", opis: "Jasny, konkretny, zawiera korzyść lub hasło", priorytet: "Krytyczny" },
  { element: "Propozycja wartości", opis: "Unikalne korzyści, dlaczego tutaj", priorytet: "Krytyczny" },
  { element: "Hero image", opis: "Wysoka jakość, relevanty do oferty", priorytet: "Wysoki" },
  { element: "CTA (button)", opis: "Wyraźny tekst, kontrast, wielokrotnie widoczny", priorytet: "Krytyczny" },
  { element: "Formularz", opis: "Min 3 pola (email, imię), max 5 pól", priorytet: "Wysoki" },
  { element: "Social proof", opis: "Recenzje, gwiazdki, loga klientów, liczby", priorytet: "Wysoki" },
  { element: "Szybkość ładowania", opis: "Poniżej 3 sekund, optymalizacja obrazów", priorytet: "Krytyczny" },
  { element: "Responsywność mobilna", opis: "Działać płynnie na iPhone, Android", priorytet: "Krytyczny" },
];

const optimizationMetrics = [
  { metyka: "Conversion Rate", target: "2–5%", działanie: "A/B testy, formularz, CTA" },
  { metyka: "Bounce Rate", target: "Poniżej 40%", działanie: "Nagłówek, propozycja wartości, design" },
  { metyka: "Page Load Time", target: "Poniżej 3 sekund", działanie: "Obrazy, cache, CDN" },
  { metyka: "Form Completion Rate", target: "Powyżej 70%", działanie: "Zmień pola, auto-fill" },
  { metyka: "Click-Through Rate (CTA)", target: "Powyżej 5%", działanie: "Tekst CTA, kolor, pozycja" },
  { metyka: "Time on Page", target: "Powyżej 30 sekund", działanie: "Zawartość, engaż, wideo" },
];

export default function BlogOptymalizacjaLandingPage() {
  return (
    <Layout>
      <SEOHead
        title="Optymalizacja landing page — poradnik konwersji 2025 | Fotz.pl"
        description="Kompletny poradnik optymalizacji landing page. Elementy, testy A/B, szybkość, responsywność, błędy, narzędzia (Hotjar, Google Optimize). Zwiększ konwersję…"
        canonicalUrl="https://fotz.pl/blog/optymalizacja-landing-page"

        keywords="Optymalizacja landing page, Optymalizacja landing page co to jest, Optymalizacja landing page jak działa, Optymalizacja landing page definicja, Optymalizacja landing page przykłady, Optymalizacja landing page poradnik, Optymalizacja landing page przewodnik"

        canonical="https://fotz.pl/blog/optymalizacja-landing-page"
      />
      <ArticleSchema
        title="Optymalizacja landing page — kompletny poradnik konwersji"
        description="Poradnik optymalizacji landing page: elementy, testy A/B, narzędzia, błędy, mobile, szybkość. Zwiększ konwersję o 30–50%."
        url="https://fotz.pl/blog/optymalizacja-landing-page"
        datePublished="2025-02-25"
        author="Fotz Studio"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Optymalizacja landing page", url: "/blog/optymalizacja-landing-page" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Optymalizacja landing page", href: "/blog/optymalizacja-landing-page" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Marketing / Konwersja / 2025
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Optymalizacja landing page
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Kompletny poradnik: elementy, testy A/B, szybkość, responsywność, błędy i narzędzia.
              Zwiększ konwersję o 30-50%.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Conversion Rate", value: "2-5%" },
                { label: "Load Time", value: "Poniżej 3s" },
                { label: "A/B Testing", value: "Konieczne" },
                { label: "Mobile", value: "50% traffic" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wprowadzenie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Czym jest landing page i dlaczego konwertuje?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Landing page (strona lądowania) to dedykowana strona webowa z jednym, jasnym celem — konwersją.
                Odwiedzający trafiają z konkretnego źródła (reklama PPC, kampania email, post w mediach społecznych)
                i spotykają się z ofertą dostosowaną do ich potrzeb. Landing page konwertują 2–5x lepiej niż strony główne,
                ponieważ eliminują rozpraszacze i skupiają uwagę na jedno działanie (call-to-action).
              </p>
              <p>
                Różnica między landing page a stroną główną: landing page ma brak nawigacji (lub minimalną),
                jeden jasny cel (pobranie e-booka, zapis na webinar, zakup), minimalne opcje, zmniejszoną liczbę linków.
                Strona główna zaś oferuje wiele opcji, szeroką nawigację, ogólny cel — zapoznanie się z firmą.
              </p>
              <p>
                Przykłady landing pages: LP do pobrania poradnika SEO, LP do zapisania na webinar, LP do zakupu
                szablonu, LP do utworzenia darmowego konta. Każda strona ma jedną propozycję i jedno CTA.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Elementy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8 kluczowych elementów landing page o wysokiej konwersji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Landing page o konwersji 3–5% zawiera te elementy. Każdy pełni rolę w ścieżce konwersji.
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landingPageElements.map((el, i) => (
              <FadeInView key={el.element}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {i === 0 && <Monitor className="w-8 h-8 text-blue-600" />}
                      {i === 1 && <Target className="w-8 h-8 text-blue-600" />}
                      {i === 2 && <Zap className="w-8 h-8 text-blue-600" />}
                      {i === 3 && <BarChart3 className="w-8 h-8 text-blue-600" />}
                      {i === 4 && <CheckCircle className="w-8 h-8 text-blue-600" />}
                      {i === 5 && <Monitor className="w-8 h-8 text-blue-600" />}
                      {i === 6 && <Zap className="w-8 h-8 text-blue-600" />}
                      {i === 7 && <Target className="w-8 h-8 text-blue-600" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{el.element}</h3>
                      <p className="text-gray-600 text-sm mb-3">{el.opis}</p>
                      <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${
                        el.priorytet === "Krytyczny" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {el.priorytet}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Tabela metryk */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe metryki optymalizacji landing page</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jakie liczby powinieneś mierzyć? Benchmarki branżowe i jak je poprawiać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Metyka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Benchmark</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Jak poprawiać</th>
                </tr>
              </thead>
              <tbody>
                {optimizationMetrics.map((m, i) => (
                  <tr key={m.metyka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{m.metyka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 font-semibold">{m.target}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{m.działanie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Optymalizacja */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Optymalizacja pod konwersję — praktyczne kroki</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  1. Szybkość ładowania — Page Speed Insights
                </h3>
                <p className="text-gray-700 mb-3">
                  Każda sekunda powyżej 3 sekund oznacza spadek konwersji o 7%. Optimizuj obrazy (WebP, compress),
                  użyj CDN (Cloudflare, Vercel), włącz cache. Test: Google PageSpeed Insights, GTmetrix.
                  Docelowo: LCP poniżej 2,5s, CLS poniżej 0,1.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  2. Responsywność mobilna — 50% traffic
                </h3>
                <p className="text-gray-700 mb-3">
                  Test na iPhone (Safari), Android (Chrome). Przycisk CTA powinien być duży (48x48 px minimum).
                  Formularz: jedno pole na widok, automatyczne powiększenie inputu. Stack wszystkich elementów
                  pionowo na mobile (nie granice columny). Test: iPhone 12, iPhone SE, Samsung Galaxy A50.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  3. Nagłówek i propozycja wartości — jasne w 5 sekund
                </h3>
                <p className="text-gray-700 mb-3">
                  Nagłówek nie powinien być ogólny. Zamiast: Usługi IT, napisz: Zwiększ sprzedaż sklepu o 30%
                  bez dodatkowych wydatków na marketing. Propozycja wartości: co zyskam? Dla kogo? Dlaczego tutaj?
                  Testuj: A/B testuj dwa nagłówki przez dwa tygodnie.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  4. CTA (Call-To-Action) — jasny, widoczny, motywujący
                </h3>
                <p className="text-gray-700 mb-3">
                  Tekst CTA: konkretny (Pobierz E-book za darmo, a nie Dowiedz się więcej).
                  Kolor: kontrast (niebieski na białym, pomarańczowy jako secondary).
                  Pozycja: Hero (nad scroll), Mid-page (po propozycji wartości), Bottom (przed footer).
                  Powtórz CTA co 2–3 sekcje. Size: min 44x44 px na mobile.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  5. Formularz — mniej pól = wyższa konwersja
                </h3>
                <p className="text-gray-707 mb-3">
                  Badania: 3 pola (email, imię, temat) = 70% completion, 5 pól = 50%, 7 pól = 30%.
                  Używaj placeholder text, auto-fill (browser help), real-time walidacji. Ukryj dodatkowe pola
                  za conditional logic (jeśli wybrano B2B, pokaż VAT). Progressive profiling: zbieraj więcej danych
                  w follow-up email.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  6. Social Proof — buduj zaufanie
                </h3>
                <p className="text-gray-707 mb-3">
                  Dodaj: cytaty klientów (4.8/5 gwiazdek), liczby (1000+ zadowolonych klientów), loga firm,
                  recenzje video, certyfikaty. Case study: przed/po z konkretami (konwersja +30%, zysk +50k PLN).
                  Świeżość: pokaż datę (ostatnia recenzja 2025-02-12).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  7. Design i UX — minimalizm vs informacja
                </h3>
                <p className="text-gray-707 mb-3">
                  White space: oddychać między sekcjami. Typografia: czytalne fonty (min 16px na mobile dla body).
                  Kolory: max 3 kolory główne (brand + 2 dopełniające). Hierarchy: H1 największy, H2, H3, body
                  malejąco. Buttons: hover state, active state, disabled state.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-blue-600" />
                  8. Testy A/B — naukowy approach do optymalizacji
                </h3>
                <p className="text-gray-707 mb-3">
                  Testuj jeden element na raz: nagłówek, kolor CTA, tekst, liczba pól. Min 100–200 konwersji
                  na wariant. Czas: 2–4 tygodnie dla stable result (sezonowość, dni tygodnia). Tools: Google
                  Optimize (GA4), Optimizely, VWO. Rezultat: nawet 1% lift w konwersji = 5–10k wartości rocznie.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Narzędzia do testowania i optymalizacji landing page</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Google Analytics 4 (GA4) + Google Tag Manager (GTM)</h3>
                <p className="text-gray-700">
                  Śledź konwersje, bounce rate, average session duration, scroll depth. Event tracking: kliknięcie CTA,
                  form submission, scroll do 50%. Segmentacja: które źródła konwertują? Direct vs Organic vs Paid.
                  Heat: traffic flow, drop-off page. Cohort analysis: wracający vs nowi użytkownicy.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Hotjar / Microsoft Clarity</h3>
                <p className="text-gray-700">
                  Heatmaps: co klikają użytkownicy, gdzie spuszczają scroll. Session recordings: wideo jak użytkownik
                  używa LP, gdzie się frustuje, co go rozprasza. Formułuj insights: zagłębienie się na 5s na formularzu
                  = pole zbyt skomplikowane.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Google Optimize / Optimizely / VWO (Visual Website Optimizer)</h3>
                <p className="text-gray-700">
                  Testy A/B bez kodowania. Visual editor: zmień nagłówek, tekst CTA, obraz. Rules engine: wyświetl wariant
                  dla konkretnego sourcing (utm_source=google). Statystyka: pokaż czy różnica jest significant. Cost: free
                  (GA4 experiments) do 500/miesiąc (Optimizely).
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Unbounce / Leadpages / Instapage</h3>
                <p className="text-gray-700">
                  Builders do landing pages z testami wbudowanymi. Templates: email, lead gen, product launch. AMP pages
                  (szybki ładunek). Dynamic content: zmień tekst na podstawie source. Integration z CRM (HubSpot, Salesforce).
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">PageSpeed Insights / GTmetrix / WebPageTest</h3>
                <p className="text-gray-700">
                  Mierz szybkość: LCP, CLS, FID/INP. Rekomendacje: optymizuj obrazy, unused CSS, minify JS.
                  Raport: performance, accessibility, best practices, SEO. Baseline: test przed optymalizacją, potem
                  porównaj.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">SEMrush / Ahrefs — SEO Analysis</h3>
                <p className="text-gray-700">
                  Pozycja LP w SERPie, keywords raniking. Competitor analysis: które LP konkurenta konwertują?
                  Link analysis: ile backlinków wskazuje na LP. Content gap: jakie tematy brakuje.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Błędy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10 błędów, które obniżają konwersję na landing page</h2>
            <div className="space-y-4">
              {[
                { nr: "1", błąd: "Zbyt wiele nawigacji", rozwiąz: "Usuń menu, trzymaj fokus na CTA" },
                { nr: "2", błąd: "Niejasny CTA", rozwiąz: "Wyraźny tekst, kontrast, powtarzaj 2-3x" },
                { nr: "3", błąd: "Wolne ładowanie (>3s)", rozwiąz: "Optimizuj obrazy, CDN, cache" },
                { nr: "4", błąd: "Brak mobile optymalizacji", rozwiąz: "Test responsywnie, duże przyciski" },
                { nr: "5", błąd: "Za dużo tekstu", rozwiąz: "Bullet points, krótkie zdania, white space" },
                { nr: "6", błąd: "Słaba propozycja wartości", rozwiąz: "Jasne: co, dlaczego, dla kogo, ile" },
                { nr: "7", błąd: "Formularz za długi (5+ pól)", rozwiąz: "Testuj 3 vs 5, progressive profiling" },
                { nr: "8", błąd: "Brak social proof", rozwiąz: "Cytaty, gwiazdki, loga, liczby" },
                { nr: "9", błąd: "Niekontrastowa kolorystyka", rozwiąz: "CTA widoczny, brand color + dopełnienie" },
                { nr: "10", błąd: "Brak form walidacji", rozwiąz: "Real-time feedback, error messages" },
              ].map((item) => (
                <FadeInView key={item.nr}>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-700">
                        {item.nr}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-gray-900">{item.błąd}</h4>
                        <p className="text-gray-600 text-sm">Rozwiązanie: {item.rozwiąz}</p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Przykłady */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Przykłady dobrze zoptymalizowanych landing pages</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stripe.com/pricing</h3>
                <p className="text-gray-700 mb-3">
                  Jasny nagłówek: przejrzystość cen. Trzy plany (Starter, Growth, Enterprise). CTA: Test drive free,
                  Contact sales. Social proof: 10M+ businesses. Czysty design, white space, szybkie ładowanie.
                  Konwersja: trials signup.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">HubSpot Academy</h3>
                <p className="text-gray-700 mb-3">
                  Hero: Get HubSpot Certified — Free. Propozycja: darmowe kursy, certyfikaty, CV boost.
                  Formularz: email, imię (2 pola). Social proof: 1M+ students. Pillar page + kursy powiązane.
                  Konwersja: email signup do kursu.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Notion.com/templates</h3>
                <p className="text-gray-707 mb-3">
                  Nagłówek: Find the perfect template. Kategorie: CRM, Project Management, Personal. CTA: Browse templates.
                  Obrazy: high quality, relevantne. Mobile: responsive cards. Konwersja: click-through do template.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Podsumowanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podsumowanie — checklist do optymalizacji LP</h2>
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Nagłówek jasny, konkretny, zawiera korzyść lub keyword</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Propozycja wartości: co, dlaczego, dla kogo, ile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">CTA widoczny, kontrastowy, konkretny tekst</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Formularz: max 3-5 pól, real-time walidacja</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Social proof: cytaty, gwiazdki, liczby, loga</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Page Load Time poniżej 3 sekund (LCP poniżej 2,5s)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Responsywność mobilna: duże przyciski, jedno pole na widok</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">A/B test: jeden element, min 2-4 tygodnie, 100-200 konwersji</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Heatmaps (Hotjar): sprawdź co klikają, gdzie scroll depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Śledź metryki: conversion rate, bounce rate, load time, CTA CTR</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mt-8">
              Optymalizacja landing page to ciągły proces. Nawet 1% lift w konwersji to 5–10k wartości dodatkowej rocznie.
              Zacznij od powyższego checklisty, testuj jeden element, analizuj dane, iteruj. Powodzenia!
            </p>
          </FadeInView>
        </div>
      </section>

      <RelatedArticles currentArticleId="optymalizacja-landing-page" />
      <ContactSection />
    </Layout>
  );
}
