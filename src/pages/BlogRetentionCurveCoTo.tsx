import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest krzywa retencji (retention curve)?",
    answer: "Krzywa retencji to wykres pokazujący jaki % użytkowników z danej kohorty pozostaje aktywnych w kolejnych dniach, tygodniach lub miesiącach po pierwszym użyciu produktu. Oś X to czas od pierwszego użycia (Dzień 0, 1, 7, 14, 30, 90...), oś Y to % retencji (ile % z kohorty wróciło w danym dniu). Każda linia wykresu to osobna kohorta (np. użytkownicy z Stycznia 2024, Lutego 2024). Kluczowa obserwacja: każda krzywa retencji spada — pytanie to czy stabilizuje się na jakimś poziomie czy spada do zera. Produkt z kurwą która 'spłaszcza się' na poziomie np. 20-30% ma retaining users — trwałą bazę. Krzywa spadająca do 0 oznacza że wszyscy użytkownicy w końcu odchodzą.",
  },
  {
    question: "Jakie są typy krzywych retencji?",
    answer: "Typy krzywych retencji: Smile curve — retencja spada, a potem rośnie. Charakterystyczna dla produktów cyklicznych lub sezonowych (tax software, e-commerce przed świętami). Flattened curve — retencja spada szybko na początku, potem stabilizuje się na stałym poziomie. Oznacza 'aha moment' i core value delivery. Cel dla większości produktów. Declining curve — retencja ciągle spada do zera. Produkt nie retains żadnych użytkowników długoterminowo. Krytyczny problem. Power law decay — gwałtowny spadek w pierwszych dniach, potem powolne zanikanie. Typowe dla mediów społecznościowych. L-shaped — bardzo wysoka retencja prawie od razu (typowe B2B SaaS z wysokimi switching costs).",
  },
  {
    question: "Jak poprawić retencję w pierwszych dniach?",
    answer: "Poprawa wczesnej retencji (Dzień 1-7): Zidentyfikuj 'Aha moment' — kluczową akcję która koreluje z długoterminową retencją. Dla Slack to wysłanie pierwszej wiadomości do teamem. Dla Dropbox to upload pierwszego pliku. Onboarding skieruj na Aha moment — zredukuj kroki, usuń friction, poprowadź użytkownika do wartości jak najszybciej. Progresywne ujawnianie wartości — nie overwhelmuj od razu. Push/email notifications — re-angaguj użytkowników którzy nie wrócili w D1-D3. Personalizacja — pokaż wartość relevantną dla konkretnego użytkownika już od pierwszej sesji. Empty state design — pierwsza sesja bez danych wyglądająca pusto to killer retencji. Wypełnij przykładowymi danymi.",
  },
  {
    question: "Jakie są benchmarki retencji dla SaaS?",
    answer: "Benchmarki retencji: Consumer apps (social, entertainment): D1 40%+, D7 20%+, D30 10%+ to dobry wynik. Najlepsze (TikTok, Instagram) mają D30 30%+. Mobile games: D1 25-40%, D7 8-20%, D30 3-8%. B2B SaaS: Month 1 70%+, Month 3 50%+, Month 12 35%+. Najlepsze B2B mają Month 12 60%+. E-commerce: Month 3 20%+, Month 12 10%+ to dobry wynik. Kluczowa zasada: nie porównuj swojej retencji z benchmarkami innych kategorii. Wysoka retencja dla gry mobilnej to katastrofa dla enterprise SaaS i odwrotnie. Porównuj z konkurentami w swojej kategorii i śledź własny trend w czasie.",
  },
  {
    question: "Jak mierzyć retencję w praktyce?",
    answer: "Mierzenie retencji: Zdefiniuj zdarzenie retencji — co oznacza 'aktywność' w Twoim produkcie. Może to być logowanie, kluczowa akcja (wysłanie raportu, wykonanie pomiaru), lub wartość biznesowa (przychód z transakcji). Ustal granularność — D1/D7/D30 dla consumer apps, M1/M3/M6/M12 dla B2B SaaS. Zbuduj kohorty — grupuj użytkowników po dacie pierwszego użycia. Oblicz % aktywnych per kohorta per period. Narzędzia: Amplitude, Mixpanel, Heap dla product analytics, Braze/Customer.io dla cohort-based messaging. Segmentuj retencję — por channel akwizycji, plan, geografię, typ firmy. Różne segmenty mają różne retention curves — to klucz do diagnozy problemu.",
  },
];

const retentionStages = [
  {
    etap: "Early Retention (D1–D7)",
    focus: "Aha Moment i pierwsze wrażenie",
    wskaźniki: "D1 Retention, D7 Retention",
    dźwignie: "Onboarding flow, time-to-value, email/push re-engagement, empty state design",
    benchmark: "Consumer: D1 30%+, D7 15%+. B2B: D7 60%+",
    kolor: "blue",
  },
  {
    etap: "Mid Retention (D7–D30)",
    focus: "Habit formation i użycie cykliczne",
    wskaźniki: "D14 Retention, D30 Retention, DAU/MAU ratio",
    dźwignie: "Feature discovery, personalizacja, notification strategy, weekly digests",
    benchmark: "Consumer: D30 10%+. B2B: M1 70%+",
    kolor: "green",
  },
  {
    etap: "Long-term Retention (D30+)",
    focus: "Głęboka integracja i switching costs",
    wskaźniki: "M3/M6/M12 retention, NRR, expansion revenue",
    dźwignie: "Integrations, data lock-in, team adoption, new features, QBR",
    benchmark: "B2B SaaS: M12 35-60%+. Consumer: M12 5-15%+",
    kolor: "purple",
  },
  {
    etap: "Resurrection (Churned users)",
    focus: "Win-back churned użytkowników",
    wskaźniki: "Resurrection rate, win-back CAC, LTV resurrected vs. new",
    dźwignie: "Re-engagement campaigns, new feature announcements, limited-time offers",
    benchmark: "5-15% resurrected/churned per rok to dobry wynik",
    kolor: "orange",
  },
];

const retentionDrivers = [
  { driver: "Aha Moment Speed", opis: "Jak szybko nowy użytkownik doświadcza wartości. Im szybciej, tym wyższa D1/D7 retencja.", akcja: "Skróć onboarding do minimum, prowadź do kluczowej akcji" },
  { driver: "Habit Loop", opis: "Czy produkt wbudowuje się w dzienny/tygodniowy rytm użytkownika. Trigger - Action - Reward.", akcja: "Znajdź naturalny cykl użycia, buduj wokół niego notyfikacje i nawyki" },
  { driver: "Switching Costs", opis: "Ile traci użytkownik odchodząc. Dane, integracje, konfiguracja, wiedza.", akcja: "Buduj integracje, importuj dane klienta, twórz custom workflows" },
  { driver: "Network Effects", opis: "Czy produkt jest lepszy gdy używa go więcej osób (team, network, dane).", akcja: "Dodaj kolaboracyjne features, zachęcaj do zapraszania kolegów" },
  { driver: "Continuous Value", opis: "Czy produkt dostarcza nową wartość w każdej sesji. Nowe dane, nowe insights.", akcja: "Regularne updates, personalizowane dashboardy, nowe raporty" },
];

export default function BlogRetentionCurveCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Krzywa retencji — co to jest i jak poprawić retencję? | Fotz.pl"
        description="Retention curve — jak analizować krzywe retencji, typy krzywych, benchmarki dla SaaS i consumer apps, dźwignie poprawy retencji. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/retention-curve-krzywa-retencji-co-to-jest"

        keywords="Krzywa retencji co to jest, Krzywa retencji definicja, czym jest Krzywa retencji, Krzywa retencji przykłady, jak działa Krzywa retencji, Krzywa retencji znaczenie, Krzywa retencji przewodnik"

        canonical="https://fotz.pl/blog/retention-curve-krzywa-retencji-co-to-jest"
      />
      <ArticleSchema
        title="Krzywa retencji — co to jest i jak poprawić retencję?"
        description="Retention curve: typy krzywych retencji, benchmarki, etapy retencji i dźwignie poprawy. Jak mierzyć i interpretować retencję w SaaS i consumer apps."
        url="https://fotz.pl/blog/retention-curve-krzywa-retencji-co-to-jest"
        datePublished="2024-02-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Krzywa retencji", url: "https://fotz.pl/blog/retention-curve-krzywa-retencji-co-to-jest" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Krzywa retencji", url: "/blog/retention-curve-krzywa-retencji-co-to-jest" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Product Analytics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Krzywa Retencji
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Acquisition przyciąga użytkowników. Retencja buduje biznes.
              Krzywa retencji to najważniejszy wykres w analizie produktu —
              pokazuje czy Twój produkt naprawdę dostarcza wartość.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Etapy retencji", value: "4" },
                { label: "B2B M12 benchmark", value: "35-60%" },
                { label: "Consumer D1", value: "30%+" },
                { label: "Cel krzywej", value: "Flatten" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etapy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 etapy retencji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Retencja to nie jeden problem — to seria wyzwań w różnych momentach cyklu życia użytkownika.
              Każdy etap wymaga innych dźwigni.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {retentionStages.map((s) => (
              <FadeInView key={s.etap}>
                <div className={`rounded-xl border-2 p-6 ${
                  s.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  s.kolor === "green" ? "border-green-200 bg-green-50" :
                  s.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 ${
                    s.kolor === "blue" ? "text-blue-800" :
                    s.kolor === "green" ? "text-green-800" :
                    s.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>{s.etap}</h3>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Focus</div>
                      <p className="text-gray-700">{s.focus}</p>
                      <div className="text-xs font-bold text-gray-500 uppercase mt-2 mb-1">Wskaźniki</div>
                      <p className="text-gray-700">{s.wskaźniki}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Dźwignie</div>
                      <p className="text-gray-700">{s.dźwignie}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Benchmark</div>
                      <p className="text-gray-700 font-medium">{s.benchmark}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Drivery retencji */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe drivery retencji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Retencja to wynik wielu czynników. Zrozumienie które drivery są słabe
              w Twoim produkcie pozwala celować interwencje.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {retentionDrivers.map((d, i) => (
              <FadeInView key={d.driver}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{d.driver}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <p className="text-gray-700">{d.opis}</p>
                        <div>
                          <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Akcja</div>
                          <p className="text-gray-700">{d.akcja}</p>
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

      <RelatedArticles currentArticleId="retention-curve-krzywa-retencji-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
