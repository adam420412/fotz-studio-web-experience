import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Czy wideo marketing rzeczywiście się opłaca?",
    answer:
      "Tak, bez wątpienia. 93% firm zarabia na video marketingu. Ponad 80% użytkowników kupuje produkt po obejrzeniu wideo demonstracyjnego. Wideo zwiększa czas spędzony na stronie o 2–3 minuty, co bezpośrednio wpływa na konwersje.",
  },
  {
    question: "Jakie ROI mogę spodziewać się z wideo?",
    answer:
      "Średni ROI z wideo marketingu wynosi 20–35%, w zależności od branży i formatu. Spoty reklamowe dają średnio 15–25% ROI, filmy produktowe 18–28%, reelsy 25–35%. Webinary i szkolenia wideo osiągają nawet 30–40% zwrotu.",
  },
  {
    question: "Ile czasu zajmuje zorientowanie się efektów z wideo?",
    answer:
      "Efekty widać po 2–4 tygodniach od publikacji. Początkowe metryki (wyświetlenia, zaangażowanie) pojawiają się od razu, ale konwersje i ROI ustabilizują się dopiero po miesiącu ciągłych zdjęć danych.",
  },
  {
    question: "Na jakich platformach wideo ma największy ROI?",
    answer:
      "YouTube i Facebook mają najwyższy ROI dla sklepów e-commerce. Instagram Reels i TikTok dominują dla młodszych grup wiekowych. LinkedIn video sprawdza się dla B2B. LinkedIn video ma średni ROI 28–35%, najwyższy wśród platform.",
  },
  {
    question: "Czy krótkie wideo (Reels) się opłaca?",
    answer:
      "Zdecydowanie tak. Reelsy na Instagram czy TikTok mają najwyższy engagement i najniższy koszt produkcji. Średni Reel kosztuje 500–2000 zł i może wygenerować 5–15 leadów dziennie.",
  },
  {
    question: "Jaki format wideo ma najlepszy ROI dla e-commerce?",
    answer:
      "Krótkie filmy produktowe (15–30 sekund) to mistrz konwersji. Pokazanie produktu w akcji zwiększa konwersje o 40–80%. Video unboxingu i recenzji generują średni ROI 25–35% i bardzo wysokie zaangażowanie.",
  },
  {
    question: "Czy animacja się opłaca czy tylko live-action?",
    answer:
      "Zarówno animacja jak i live-action się opłacają. Animacja jest lepsza do wyjaśniania skomplikowanych procesów, live-action do pokazywania produktu i budowania zaufania. Połączenie obu stylów często daje najlepszy ROI.",
  },
  {
    question: "Jak zmaksymalizować ROI z wideo?",
    answer:
      "Kluczowe elementy: jasny CTA (wezwanie do działania), krótka długość (pierwsze 3 sekundy decydujące), dopasowanie do platformy, A/B testing różnych wersji, retargeting widać na tych którzy oglądali wideo, publikacja w optimalnych czasach, oraz integracja z innymi kanałami marketingu.",
  },
];

const statisticsROI = [
  {
    stat: "93%",
    description: "firm przyznaje, że video marketing przynosi im zysk",
  },
  {
    stat: "80%",
    description: "użytkowników kupuje po obejrzeniu wideo produktowego",
  },
  {
    stat: "5x",
    description: "wyższa konwersja stron z wideo niż bez wideo",
  },
  {
    stat: "180%",
    description: "wzrost czasu spędzanego na stronie z wideo",
  },
  {
    stat: "85%",
    description: "wyższa email open rate z wideo w tytule",
  },
  {
    stat: "49%",
    description: "spadek bounce rate'u na stronach z wideo",
  },
];

const videoPerformance = [
  {
    format: "Spot reklamowy (15s)",
    roi: "15–25%",
    engagement: "8–15%",
    costPerView: "0.05–0.20 zł",
  },
  {
    format: "Film korporacyjny",
    roi: "20–30%",
    engagement: "12–20%",
    costPerView: "0.10–0.30 zł",
  },
  {
    format: "Video produktowe",
    roi: "18–28%",
    engagement: "15–25%",
    costPerView: "0.08–0.25 zł",
  },
  {
    format: "Reel/TikTok",
    roi: "25–35%",
    engagement: "20–35%",
    costPerView: "0.02–0.10 zł",
  },
  {
    format: "Webinar",
    roi: "30–40%",
    engagement: "25–40%",
    costPerView: "0.15–0.50 zł",
  },
  {
    format: "Szkolenie video",
    roi: "25–35%",
    engagement: "18–30%",
    costPerView: "0.10–0.40 zł",
  },
];

export default function BlogVideoMarketingROI() {
  return (
    <>
      <SEOHead
        title="ROI video marketingu - czy wideo się opłaca? Dane i przykłady 2025 | Fotz.pl"
        description="Czy wideo marketing się opłaca? Tak! Statystyki pokazują 93% firm zarabia na video. Sprawdź ROI dla różnych formatów, platform i branż. Poradnik 2025."
        canonical="https://fotz.pl/blog/video-marketing-roi"
      />
      <BreadcrumbSchema
        items={[
          { label: "Strona główna", url: "https://fotz.pl" },
          { label: "Blog", url: "https://fotz.pl/blog" },
          {
            label: "ROI video marketingu",
            url: "https://fotz.pl/blog/video-marketing-roi",
          },
        ]}
      />
      <ArticleSchema
        headline="ROI video marketingu - czy wideo się opłaca? Dane i przykłady 2025"
        description="Kompleksny poradnik ROI video marketingu w Polsce. Statystyki efektywności, porównanie formatów, przykłady biznesowe i strategie maksymalizowania zwrotu z wideo."
        image="https://fotz.pl/img/blog-roi-video-marketing.jpg"
        datePublished="2025-04-12"
        author="Fotz Studio"
      />

      <Layout>
        <main className="w-full">
          {/* Hero Section */}
          <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 overflow-hidden py-12 md:py-20">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
              <div className="flex flex-col items-center justify-center text-center gap-6">
                <span className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-400/30 rounded-full text-sm font-medium text-yellow-200">
                  Efektywność i ROI
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Czy wideo marketing się opłaca?
                </h1>

                <p className="text-lg md:text-xl text-yellow-100 max-w-2xl">
                  Odpowiedź: TAK. 93% firm zarabia na video marketingu. Sprawdź dane, statystyki i praktyczne przykłady jak zmaksymalizować zwrot z inwestycji.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-full">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-yellow-300 text-sm font-medium">Firmy zarabiające</p>
                    <p className="text-white text-2xl font-bold mt-1">93%</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-yellow-300 text-sm font-medium">Średni ROI</p>
                    <p className="text-white text-2xl font-bold mt-1">20–35%</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-yellow-300 text-sm font-medium">Wzrost konwersji</p>
                    <p className="text-white text-2xl font-bold mt-1">5x wyższe</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Breadcrumbs */}
          <PageBreadcrumbs />

          {/* Main Content */}
          <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
            {/* Section 1 */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Statystyki video marketingu w Polsce
                </h2>

                <div className="prose prose-lg text-gray-700 space-y-4 mb-8">
                  <p>
                    Czy wideo marketing się opłaca? Dane nie kłamią. Poniższe statystyki pochodzą z raportów HubSpot, Wistia, Statista i mediów branżowych z 2024–2025 roku.
                  </p>

                  <p>
                    Video to najefektywniejszy format treści w digital marketingu. Użytkownicy spędzają 5 razy więcej czasu na stronach z wideo. Firmy publikujące wideo na LinkedIn widzi 10 razy więcej zaangażowania niż zawartość tekstowa.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {statisticsROI.map((item, idx) => (
                    <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                      <p className="text-3xl font-bold text-yellow-600">{item.stat}</p>
                      <p className="text-gray-700 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Kluczowy fakt:</h3>
                  <p className="text-yellow-300 text-lg">
                    Strony z wideo otrzymują średnio 5 razy więcej linków powrotnych niż strony bez wideo, co bezpośrednio wpływa na SEO i ranking w Google.
                  </p>
                </div>
              </section>
            </FadeInView>

            {/* Section 2 - ROI by Format */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  ROI wg formatu wideo i platformy
                </h2>

                <p className="text-gray-700 mb-6">
                  Różne formaty mają różne ROI. Poniżej widać średnie wyniki dla kampanii w Polsce z budżetem 3000–10000 złotych:
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-yellow-100 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Format
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Średni ROI
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Engagement
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Koszt per wyświetl.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {videoPerformance.map((item, idx) => (
                        <tr
                          key={idx}
                          className={`border-b border-gray-200 ${
                            idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } hover:bg-yellow-50 transition-colors`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {item.format}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {item.roi}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {item.engagement}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {item.costPerView}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-600 mt-4">
                  *Koszt per wyświetlenie to średnia cena osiągnięcia jednego widza. Niższe koszty oznaczają bardziej efektywne kampanie.
                </p>
              </section>
            </FadeInView>

            {/* Section 3 - How to Measure ROI */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Jak mierzyć ROI z video marketingu?
                </h2>

                <div className="prose prose-lg text-gray-700 space-y-6">
                  <p>
                    Zmierzenie prawdziwego ROI z wideo wymaga precyzyjnego śledzenia każdego kroku. Oto jak to robić:
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                    <h3 className="font-bold text-gray-900 mb-4">Metryki do śledzenia:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Wyświetlenia (Impressions):</strong> Ile osób widziało Twoje wideo</li>
                      <li><strong>Czas oglądania (Watch Time):</strong> Ile czasu średnio spędzono na wideo</li>
                      <li><strong>Click-Through Rate (CTR):</strong> Procent osób, które kliknęły Twój link CTA</li>
                      <li><strong>Konwersje:</strong> Ile osób zamieniło się w leada lub klienta</li>
                      <li><strong>Wartość leada:</strong> Średnia wartość każdego leada wygenerowanego z wideo</li>
                      <li><strong>Customer Acquisition Cost (CAC):</strong> Koszt pozyskania jednego klienta</li>
                    </ul>
                  </div>

                  <p className="mt-6">
                    <strong>Praktyczny przykład:</strong> Wydajesz 3000 zł na spot reklamowy. Po miesiącu:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>20000 wyświetleń</li>
                    <li>150 kliknięć (CTR = 0.75%)</li>
                    <li>30 konwersji (conversion rate = 20%)</li>
                    <li>Przychód ze sprzedaży = 9000 zł</li>
                    <li><strong>ROI = (9000 - 3000) / 3000 × 100% = 200%</strong></li>
                  </ul>

                  <p>
                    To oznacza, że każde 100 zł wydane na produkcję wideo przyniosło 200 zł przychodu. Takie wyniki to norma dla dobrze zaplanowanych kampanii wideo.
                  </p>

                  <div className="bg-gray-900 text-white p-6 rounded">
                    <h4 className="font-bold text-yellow-300 mb-3">Narzędzia do śledzenia:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-200">
                      <li>Google Analytics 4 (GA4) - śledzenie konwersji</li>
                      <li>UTM parametry - linkowanie kampanii wideo</li>
                      <li>Facebook Pixel - retargeting i konwersje na FB</li>
                      <li>LinkedIn Insight Tag - metryki dla B2B</li>
                      <li>YouTube Analytics - dane o zaangażowaniu</li>
                    </ul>
                  </div>
                </div>
              </section>
            </FadeInView>

            {/* Section 4 - Best Practices */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Praktyczne strategie maksymalizowania ROI z wideo
                </h2>

                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">1. Pierwsze 3 sekundy decydują</h3>
                    <p className="text-gray-700">
                      Użytkownicy podejmują decyzję o obejrzeniu wideo w ciągu 3 sekund. Musisz zainteresować go natychmiast: zaskakujące stwierdzenie, pytanie retoryczne lub wizualny szok. Pierwsze 3 sekundy to 50% sukcesu kampanii.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">2. Jasny CTA na końcu</h3>
                    <p className="text-gray-700">
                      Call-To-Action (wezwanie do działania) musi być konkretne: "Kliknij tutaj", "Zarejestruj się", "Zamów teraz". Wideo bez jasnego CTA to 30–40% mniej konwersji. Umieść link lub napis pod koniec, nie na początkach.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">3. Optymalizuj dla każdej platformy</h3>
                    <p className="text-gray-700">
                      YouTube ma inny format niż Instagram Reels czy TikTok. Dostosuj proporcje (16:9 vs 9:16), długość, tempo edycji. Niestandardowe napisy są obowiązkowe na wszystkich platformach - 80% użytkowników ogląda bez dźwięku.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">4. A/B testing różnych wersji</h3>
                    <p className="text-gray-700">
                      Przygotuj 2–3 wersje tego samego wideo ze zmiennymi: innym CTA, innym soundtrack, innym intro. Testuj każdą wersję na grupie testowej, zmierz wyniki i skaluj najlepszą. Zwykle jedna wersja ma 2–3x lepsze wyniki.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">5. Retargeting dla osób, które oglądały</h3>
                    <p className="text-gray-700">
                      Ludzie, którzy obejrzeli Twoje wideo ale nie konwertowali, są najlepszym segmentem na retargeting. Facebook i Google pozwalają kierować reklamy do osób, które obejrzały co najmniej 25% wideo. Ten segment konwertuje 3–5x lepiej.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">6. Publikuj w optymalnych czasach</h3>
                    <p className="text-gray-700">
                      Czas publikacji ma znaczenie. Dla B2B (LinkedIn): wtorek-czwartek 8–10 rano. Dla B2C (Instagram, TikTok): wieczorem 19–21. YouTube: każdy dzień, rano lub wieczór. Sprawdź własne dane w Analytics.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-400 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">7. Łącz wideo z innymi kanałami</h3>
                    <p className="text-gray-700">
                      Wideo na stronie www zwiększa SEO. Wideo w e-mailach podnosi open rate o 85%. Wideo w social mediach pędzi ludzi na stronę. Synergia wszystkich kanałów daje najlepsze wyniki - całościowa strategia to 40–60% lepszy ROI niż samodzielne kanały.
                    </p>
                  </div>
                </div>
              </section>
            </FadeInView>

            {/* FAQ Section */}
            <FadeInView>
              <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Często zadawane pytania
                </h2>

                <div className="space-y-6">
                  {faqItems.map((item, idx) => (
                    <details key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <summary className="font-bold text-gray-900 flex justify-between items-center">
                        {item.question}
                        <span className="text-yellow-500 ml-4">+</span>
                      </summary>
                      <p className="text-gray-700 mt-4">{item.answer}</p>
                    </details>
                  ))}
                </div>

                <FAQSchema items={faqItems} />
              </section>
            </FadeInView>

            {/* CTA Section */}
            <FadeInView>
              <section className="mb-16 md:mb-24 bg-gradient-to-r from-gray-900 to-yellow-900 rounded-2xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Zmaksymalizuj ROI swojego video marketingu
                </h2>

                <p className="text-lg text-gray-200 mb-8 max-w-2xl">
                  Fotz to specjaliści od wideo marketingu. Pomożemy Ci zaplanować kampanię, która naprawdę się opłaci. Średnie ROI naszych kampanii to 25–45%.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/kontakt"
                    className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                  >
                    Rozmawiajmy o Twojej kampanii
                  </Link>
                  <Link
                    to="/agencja-marketingowa/poznan"
                    className="inline-block bg-white/20 text-white px-8 py-3 rounded-lg font-bold border border-white/50 hover:bg-white/30 transition-colors"
                  >
                    Sprawdź nasze wyniki
                  </Link>
                </div>
              </section>
            </FadeInView>
          </article>

          <ContactSection />
        </main>
      </Layout>
    </>
  );
}
