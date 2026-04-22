import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Ile kosztuje prowadzenie social media przez agencję w 2025?",
    answer: "Prowadzenie social media przez agencję kosztuje zazwyczaj 800–4 000 zł netto miesięcznie za jedną platformę. Pakiet podstawowy (4–8 postów/miesiąc, Facebook lub Instagram) to 800–1 200 zł/miesiąc. Pakiet średni (12–16 postów, 2 platformy + relacje) to 1 500–2 500 zł/miesiąc. Pakiet kompleksowy z tworzeniem wideo, reklamami i pełną obsługą to 3 000–6 000+ zł/miesiąc.",
  },
  {
    question: "Co wchodzi w skład obsługi social media przez agencję?",
    answer: "Kompleksowa obsługa social media obejmuje: strategię treści i harmonogram publikacji, tworzenie grafik i zdjęć, pisanie tekstów pod każdy post, planowanie i publikację postów, zarządzanie komentarzami i wiadomościami, tworzenie relacji (Stories/Reels), miesięczne raporty z wynikami, opcjonalnie: prowadzenie kampanii reklamowych (Meta Ads). Zakres zależy od wybranego pakietu i liczby platform.",
  },
  {
    question: "Ile postów miesięcznie powinna publikować firma na Facebooku?",
    answer: "Optymalna częstotliwość publikacji na Facebooku dla firm to 3–5 postów tygodniowo, czyli 12–20 postów miesięcznie. Minimum dla utrzymania aktywności to 2 posty tygodniowo. Ważniejsza niż ilość jest jakość i regularność — algorytm Facebooka premiuje profile, które publikują systematycznie i angażują odbiorców.",
  },
  {
    question: "Czy opłaca się płacić agencji za social media, czy lepiej zrobić to samemu?",
    answer: "Samodzielne prowadzenie social media jest tańsze kosztowo, ale kosztuje czas — minimum 2–4 godziny tygodniowo na strategię, tworzenie grafik i postów, odpowiadanie na komentarze. Agencja daje: profesjonalny wygląd, strategię opartą na danych, regularność, i oszczędza Twój czas. Dla firmy z przychodami powyżej 100 000 zł/rok zatrudnienie agencji social media to zwykle opłacalna inwestycja.",
  },
  {
    question: "Jakie platformy social media warto prowadzić dla firmy?",
    answer: "Wybór platform zależy od branży: Facebook — obowiązkowo dla wszystkich firm lokalnych i B2C. Instagram — kluczowy dla branż wizualnych (fotografia, design, gastronomia, beauty, wnętrza). LinkedIn — dla firm B2B, rekrutacji i budowania ekspercji. TikTok — szybko rosnąca platforma dla firm celujących w klientów poniżej 35 lat. Nie ma sensu być wszędzie — lepiej prowadzić 1–2 platformy dobrze niż 5 słabo.",
  },
  {
    question: "Jak mierzyć skuteczność prowadzenia social media?",
    answer: "Kluczowe KPI dla social media to: zasięg organiczny i płatny (ile osób zobaczyło posty), zaangażowanie (engagement rate — lajki, komentarze, udostępnienia), wzrost liczby obserwujących, ruch na stronę z social media (Google Analytics), konwersje — zapytania, rezerwacje, sprzedaż. Profesjonalna agencja co miesiąc dostarcza raport ze wszystkimi tymi wskaźnikami.",
  },
  {
    question: "Czy agencja social media zajmuje się też reklamami Meta Ads?",
    answer: "To zależy od pakietu. Większość agencji social media oferuje organiczne zarządzanie profilami (bez reklam płatnych) jako osobną usługę od Meta Ads (Facebook/Instagram Ads). Za prowadzenie kampanii reklamowych zazwyczaj trzeba dopłacić: obsługa Meta Ads to dodatkowe 400–1 500 zł/miesiąc + budżet reklamowy (minimum 300–500 zł/miesiąc na same kliknięcia). Sprawdź w ofercie, czy cena zawiera reklamy płatne.",
  },
  {
    question: "Jak długo trwa efekt prowadzenia social media?",
    answer: "Pierwsze efekty prowadzenia social media (wzrost zasięgu, nowi obserwujący) są widoczne po 1–2 miesiącach. Realny wzrost zaangażowania i ruch na stronie — po 3–6 miesiącach systematycznej pracy. Social media to gra długoterminowa — marki, które konsekwentnie działają przez 12–24 miesiące, budują lojalną społeczność, która przekłada się na sprzedaż.",
  },
];

const packages = [
  {
    name: "Pakiet START",
    price: "800–1 200 zł/mies.",
    platforms: "1 platforma (FB lub IG)",
    posts: "8–12 postów/miesiąc",
    features: [
      "Strategia treści na 1 platformę",
      "Tworzenie grafik (Canva/Adobe)",
      "Teksty pod każdy post",
      "Planowanie i publikacja",
      "Odpowiadanie na komentarze",
      "Miesięczny raport",
    ],
    best: "Mikrofirmy, start na SM",
    color: "slate",
  },
  {
    name: "Pakiet GROWTH",
    price: "1 500–2 500 zł/mies.",
    platforms: "2 platformy (np. FB + IG)",
    posts: "16–20 postów/miesiąc + Stories",
    features: [
      "Strategia 2 platform",
      "Grafiki + krótkie reelsy",
      "Copywriting i hashtagi",
      "Relacje (Stories) co tydzień",
      "Community management",
      "Raport + rekomendacje",
    ],
    best: "MŚP, firmy usługowe",
    color: "blue",
    highlighted: true,
  },
  {
    name: "Pakiet PRO",
    price: "3 000–5 000+ zł/mies.",
    platforms: "3+ platformy (FB, IG, LinkedIn)",
    posts: "24–32 posty/miesiąc + wideo",
    features: [
      "Pełna strategia komunikacji",
      "Produkcja wideo Reels/TikTok",
      "Sesja fotograficzna miesięcznie",
      "Meta Ads (w cenie lub osobno)",
      "Influencer marketing",
      "Dedykowany opiekun konta",
    ],
    best: "Duże firmy, e-commerce",
    color: "purple",
  },
];

const priceFactors = [
  { factor: "Liczba platform", impact: "Każda dodatkowa platforma to +400–800 zł/miesiąc" },
  { factor: "Częstotliwość postów", impact: "8 postów vs 24 posty — różnica 600–1 000 zł/miesiąc" },
  { factor: "Tworzenie wideo / Reels", impact: "Produkcja Reelsów +500–1 500 zł/miesiąc" },
  { factor: "Sesje fotograficzne", impact: "Sesja produktowa/lifestyle: 500–2 000 zł jednorazowo" },
  { factor: "Kampanie reklamowe", impact: "Obsługa Meta Ads: +400–1 500 zł + budżet reklamowy" },
  { factor: "Community management", impact: "Odpowiadanie na wiadomości 24/7: +300–600 zł/miesiąc" },
  { factor: "Raportowanie", impact: "Szczegółowe raporty analityczne: +200–500 zł/miesiąc" },
];

export default function BlogProwadzenieSocialMediaCennik() {
  return (
    <Layout>
      <SEOHead
        title="Prowadzenie social media | Fotz Studio"
        description="Prowadzenie social media cennik 2025: ile kosztuje obsługa Facebooka, Instagrama i LinkedIna przez agencję? Pakiety od 800 zł/mies. Sprawdź pełny zakres usługi."
        canonical="https://fotz.pl/blog/prowadzenie-social-media-cennik"

        keywords="Prowadzenie social media, Prowadzenie social media poradnik, Prowadzenie social media strategia, Prowadzenie social media jak zrobić, Prowadzenie social media marketing, Prowadzenie social media przykłady, Prowadzenie social media w Polsce"

        canonical="https://fotz.pl/blog/prowadzenie-social-media-cennik"
      />
      <ArticleSchema
        title="Prowadzenie social media — cennik 2025, pakiety i zakres usługi"
        description="Kompletny przewodnik po cenach obsługi social media przez agencję: pakiety cenowe, co wchodzi w skład usługi, jak wybrać agencję i od czego zależy cena."
        url="https://fotz.pl/blog/prowadzenie-social-media-cennik"
        datePublished="2025-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Prowadzenie social media cennik", url: "https://fotz.pl/blog/prowadzenie-social-media-cennik" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-pink-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Social media — cennik 2025", url: "/blog/prowadzenie-social-media-cennik" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Social Media / Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prowadzenie social media — cennik 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Ile kosztuje obsługa Facebooka, Instagrama czy LinkedIna przez agencję? Pakiety cenowe, zakres usługi i co faktycznie wliczone w cenę.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Pakiet podstawowy od", value: "800 zł" },
                { label: "Pakiet średni od", value: "1 500 zł" },
                { label: "Pakiet PRO od", value: "3 000 zł" },
                { label: "Efekty widoczne od", value: "1–2 mies." },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-pink-300">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16">
        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ile kosztuje prowadzenie social media? — krótka odpowiedź
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Prowadzenie social media przez profesjonalną agencję w Polsce kosztuje zazwyczaj <strong>800–5 000 zł netto miesięcznie</strong>, w zależności od liczby platform, częstotliwości publikacji i zakresu usługi.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Cena za samo „klikanie" (wrzucanie gotowych materiałów) to zupełnie co innego niż pełna obsługa obejmująca strategię, tworzenie grafik, pisanie tekstów, zarządzanie społecznością i raportowanie. Ta druga jest droższa, ale przynosi realne efekty biznesowe.
            </p>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <p className="text-purple-900 font-semibold mb-2">Dla porównania — co za tę cenę robi agencja:</p>
              <p className="text-purple-800">
                Miesięczny koszt 1 500 zł to mniej niż 2 dni pracy grafika/copywritera. Agencja w tym czasie tworzy 16–20 postów z grafikami, tekstami, hashtagami, planuje je na optymalny czas i analizuje wyniki. To nie jest drogo, jeśli porównać z kosztem zatrudnienia specjalisty na etacie (4 000–7 000 zł/miesiąc brutto).
              </p>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Cennik prowadzenia social media — pakiety
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-6 border-2 relative ${
                    pkg.highlighted
                      ? "border-blue-500 bg-blue-50 shadow-xl"
                      : "border-gray-200 bg-white shadow-sm"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NAJPOPULARNIEJSZY
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                  <div className="text-2xl font-extrabold text-blue-700 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-500 mb-1">{pkg.platforms}</div>
                  <div className="text-sm text-gray-500 mb-4">{pkg.posts}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-gray-400 border-t pt-3">
                    <strong>Najlepsze dla:</strong> {pkg.best}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Ceny netto, orientacyjne. Ostateczna wycena zależy od indywidualnego zakresu usługi.
            </p>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Co wchodzi w skład prowadzenia social media?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Profesjonalna obsługa social media to znacznie więcej niż samo publikowanie postów. Oto pełny zakres tego, co powinna robić rzetelna agencja:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "1. Strategia i planowanie",
                  items: ["Analiza grupy docelowej i konkurencji", "Opracowanie ton of voice marki", "Harmonogram treści (content calendar)", "Dobór platform i formatów treści"],
                },
                {
                  title: "2. Tworzenie treści",
                  items: ["Projektowanie grafik i szablonów", "Pisanie tekstów i copywriting", "Produkcja Reels/TikToków/Stories", "Dobór hashtagów i optymalizacja"],
                },
                {
                  title: "3. Publikacja i zarządzanie",
                  items: ["Planowanie postów na optymalne godziny", "Publikacja i aktualizacja profili", "Odpowiadanie na komentarze i wiadomości", "Moderacja negatywnych komentarzy"],
                },
                {
                  title: "4. Analityka i raportowanie",
                  items: ["Miesięczny raport z zasięgów i zaangażowania", "Analiza wyników i rekomendacje", "Śledzenie wzrostu obserwujących", "ROI z social media (ruch na stronę)"],
                },
              ].map((section) => (
                <div key={section.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">{section.title}</h3>
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-purple-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Od czego zależy cena prowadzenia social media?
            </h2>
            <p className="text-gray-600 mb-4">
              Cena obsługi social media różni się znacznie między agencjami. Oto co konkretnie wpływa na ostateczny koszt:
            </p>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Czynnik</th>
                    <th className="px-4 py-3 text-left font-semibold">Wpływ na cenę</th>
                  </tr>
                </thead>
                <tbody>
                  {priceFactors.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.factor}</td>
                      <td className="px-4 py-3 text-gray-600">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Agencja czy samodzielne prowadzenie? — porównanie
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Samodzielne prowadzenie</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Niższy koszt finansowy (tylko narzędzia ~50–200 zł/miesiąc)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Pełna kontrola nad komunikacją i wizerunkiem</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Koszt czasu: 3–8 godzin tygodniowo</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Brak spójnej strategii i profesjonalnych grafik</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Nieregularność publikacji — największy błąd</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Agencja social media</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Profesjonalna jakość grafik, tekstów i strategii</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Regularność — algorytm nagradza konsekwencję</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Oszczędność Twojego czasu na prowadzeniu biznesu</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Dane i analityka — wiesz co działa</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Koszt od 800 zł/miesiąc za profesjonalną obsługę</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Social media w Fotz Studio — co oferujemy
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Fotz Studio to agencja z Poznania — obsługujemy firmy z całej Polski w zakresie pełnej obsługi social media. Łączymy doświadczenie z fotografii i video (własne studio) z wiedzą marketingową — nasze treści wyglądają profesjonalnie, bo sami je tworzymy od A do Z.
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white mb-6">
              <h3 className="text-xl font-bold mb-3">Co wyróżnia naszą obsługę social media:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Własne studio fotograficzne — sesje produktowe w cenie pakietu PRO",
                  "Produkcja Reels i TikTok — robimy wideo, nie tylko statyczne posty",
                  "Strategia oparta na danych z Meta Business Suite i Google Analytics",
                  "Dedykowany opiekun — jedna osoba zna Twój biznes i markę",
                  "Integracja z kampaniami Google Ads i SEO — spójny marketing",
                  "Miesięczny raport z wnioskami, a nie tylko same liczby",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-pink-200">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/social-media/obsluga"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Zobacz ofertę obsługi social media →
            </Link>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              FAQ — prowadzenie social media
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <div className="bg-slate-900 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Wycena obsługi social media dla Twojej firmy
            </h2>
            <p className="text-gray-300 mb-6">
              Bezpłatna konsultacja — opowiedz nam o swojej firmie, a przygotujemy indywidualną ofertę z zakresem usług i ceną dostosowaną do Twojego budżetu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:kontakt@fotz.pl"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Zapytaj o wycenę
              </a>
              <Link
                to="/kontakt"
                className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Formularz kontaktowy
              </Link>
            </div>
          </div>
        </FadeInView>

        <FadeInView>
          <div className="text-sm text-gray-500 border-t border-gray-200 pt-8">
            <p>
              <strong>Powiązane artykuły:</strong>{" "}
              <Link to="/social-media/obsluga" className="text-blue-600 hover:underline">Obsługa Social Media — oferta Fotz</Link>
              {" · "}
              <Link to="/blog/google-ads-cennik" className="text-blue-600 hover:underline">Google Ads cennik 2025</Link>
              {" · "}
              <Link to="/blog/google-ads-vs-seo" className="text-blue-600 hover:underline">Google Ads vs SEO — co wybrać?</Link>
            </p>
          </div>
        </FadeInView>
      </article>

      <ContactSection />
    </Layout>
  );
}
