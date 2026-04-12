import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Co to jest Google Ads i jak różni się od SEO?",
    answer: "Google Ads (dawniej AdWords) to płatna reklama w Google — Twoja strona pojawia się na szczycie wyników natychmiast po uruchomieniu kampanii, ale znikają gdy przestajesz płacić. SEO (Search Engine Optimization) to optymalizacja strony pod organiczne wyniki wyszukiwania — efekty przychodzą po 3–12 miesiącach, ale ruch jest bezpłatny i trwały. Google Ads = szybkie wyniki za pieniądze. SEO = długoterminowa inwestycja w widoczność.",
  },
  {
    question: "Google Ads czy SEO — co wybrać dla nowej firmy?",
    answer: "Nowa firma bez widoczności w Google powinna zacząć od Google Ads, by szybko pozyskiwać klientów, jednocześnie budując SEO długoterminowo. Google Ads daje leady od pierwszego dnia. SEO zaczyna działać po 4–12 miesiącach — ale przynosi coraz tańszy ruch bez dodatkowych kosztów za każde kliknięcie. Optymalna strategia na start: 70% budżetu na Google Ads, 30% na SEO i content marketing.",
  },
  {
    question: "Ile kosztuje Google Ads vs SEO miesięcznie?",
    answer: "Google Ads: budżet reklamowy 500–5 000 zł/miesiąc + obsługa agencji 400–1 500 zł/miesiąc. Łącznie od 900 zł do ponad 6 500 zł/miesiąc — płacisz stale. SEO: usługa pozycjonowania 1 000–4 000 zł/miesiąc przez 6–12 miesięcy na start. Po osiągnięciu dobrych pozycji koszt można obniżyć do podtrzymania wyników. Długoterminowo SEO jest tańsze na każdą wizytę — koszt za kliknięcie w organicu wynosi 0 zł.",
  },
  {
    question: "Kiedy Google Ads jest lepsze od SEO?",
    answer: "Google Ads sprawdza się lepiej gdy: (1) potrzebujesz leadów natychmiast — np. nowa firma, sezonowa promocja; (2) sprzedajesz produkty o wysokiej marży (e-commerce); (3) chcesz dotrzeć do klientów gotowych kupić teraz; (4) testujesz nowe produkty lub oferty; (5) prowadzisz kampanię czasową (wyprzedaż, wydarzenie). SEO lepsze gdy: masz 12+ miesięcy na efekty, chcesz budować markę i zaufanie, lub tworzysz content edukacyjny.",
  },
  {
    question: "Czy można łączyć Google Ads i SEO?",
    answer: "Tak — i to jest najlepsza strategia. Google Ads daje natychmiastowe wyniki i dostarcza dane o tym, które słowa kluczowe konwertują najlepiej. Te dane możesz wykorzystać w SEO, tworząc treści pod frazy, które faktycznie przynoszą klientów. Firmy korzystające z obu kanałów mają o 25% wyższy łączny CTR niż tylko z jednego kanału. Połączona strategia: Google Ads na szybkie konwersje + SEO na długoterminowy organiczny ruch.",
  },
  {
    question: "Jak szybko działa Google Ads, a jak szybko SEO?",
    answer: "Google Ads: pierwsze reklamy pojawiają się w Google w ciągu 24–48 godzin od uruchomienia kampanii. Pierwsze kliknięcia i konwersje możliwe od razu. SEO: pierwsze efekty widoczne po 3–6 miesiącach dla mniej konkurencyjnych fraz. Silne pozycje na główne słowa kluczowe — po 6–18 miesiącach regularnej pracy. Dominacja w wynikach Google — 2–3 lata konsekwentnej pracy nad contentem i linkami.",
  },
  {
    question: "Czym jest Quality Score w Google Ads i dlaczego jest ważny?",
    answer: "Quality Score (Wynik Jakości) to ocena 1–10, którą Google przyznaje Twoim reklamom i słowom kluczowym. Ocenia: trafność reklamy, jakość strony docelowej i oczekiwany CTR. Wyższy Quality Score = niższy CPC (płacisz mniej za kliknięcie) i lepsze pozycje reklamy. Score 8–10: możesz płacić 30–50% mniej niż konkurencja. Score 3–5: płacisz więcej za gorsze pozycje.",
  },
  {
    question: "Google Ads czy Facebook Ads — która reklama jest lepsza?",
    answer: "Google Ads celuje w ludzi, którzy aktywnie szukają Twojej usługi lub produktu — wysoka intencja zakupowa, wyższy koszt, lepsze konwersje dla usług lokalnych. Facebook/Meta Ads celuje demograficznie i zainteresowaniami — tańszy zasięg, świetny do budowania świadomości marki, produktów impulsywnych i remarketing. Dla usług B2B i lokalnych (jak agencja marketingowa, fotograf, projektant) Google Ads zazwyczaj przynosi lepszy ROAS niż Facebook Ads.",
  },
];

const comparisonData = [
  { cecha: "Czas do pierwszych wyników", googleAds: "24–48 godzin", seo: "3–12 miesięcy" },
  { cecha: "Koszt na kliknięcie", googleAds: "0,50–30 zł/klik", seo: "0 zł (organiczne)" },
  { cecha: "Trwałość efektów", googleAds: "Kończy się gdy płacisz", seo: "Utrzymuje się po zakończeniu prac" },
  { cecha: "Widoczność", googleAds: "Top 4 wyniki (oznaczone 'Reklama')", seo: "Wyniki organiczne (bardziej wiarygodne)" },
  { cecha: "Kontrola nad wynikami", googleAds: "Pełna — możesz włączyć/wyłączyć", seo: "Ograniczona — algorytm Google decyduje" },
  { cecha: "Dane i analityka", googleAds: "Szczegółowe dane o konwersji od startu", seo: "Dane wolniejsze, Google ukrywa część fraz" },
  { cecha: "CTR (śr. kliknięcia)", googleAds: "2–5% (płatne)", seo: "28% (pozycja #1), 8% (pozycja #3)" },
  { cecha: "Zaufanie użytkowników", googleAds: "Niższe — widoczne oznaczenie 'Ad'", seo: "Wyższe — organiczne wyniki = autorytet" },
  { cecha: "Optymalne dla", googleAds: "Szybkie kampanie, e-commerce, usługi lokalne", seo: "Długoterminowy wzrost, content, marki" },
  { cecha: "Budżet miesięczny", googleAds: "Od 900 zł (reklama + obsługa)", seo: "Od 1 000 zł (usługa pozycjonowania)" },
];

const useCases = [
  {
    title: "Wybierz Google Ads gdy:",
    items: [
      "Potrzebujesz leadów w ciągu 48 godzin",
      "Prowadzisz sezonową sprzedaż lub akcję ograniczoną czasowo",
      "Masz nową stronę bez historii w Google",
      "Sprzedajesz produkty lub usługi o wysokiej wartości",
      "Chcesz testować oferty i sprawdzać, co konwertuje",
      "Konkurencja jest silna i trudno wejść organicznie",
    ],
    color: "blue",
  },
  {
    title: "Wybierz SEO gdy:",
    items: [
      "Masz 6–12 miesięcy na budowanie widoczności",
      "Tworzysz content edukacyjny i budujesz autorytet",
      "Chcesz tańszego ruchu długoterminowo",
      "Budujesz markę i chcesz być kojarzony z tematem",
      "Twoi klienci szukają informacji przed zakupem",
      "Masz stabilny biznes z budżetem na content",
    ],
    color: "green",
  },
];

export default function BlogGoogleAdsVsSeo() {
  return (
    <Layout>
      <SEOHead
        title="Google Ads vs SEO — co wybrać w 2025? Porównanie kosztów i efektów | Fotz.pl"
        description="Google Ads czy SEO? Porównanie kosztów, czasu działania, skuteczności i ROI. Kiedy wybrać płatne reklamy, a kiedy pozycjonowanie? Praktyczny przewodnik dla firm."
        canonicalUrl="https://fotz.pl/blog/google-ads-vs-seo"
      />
      <ArticleSchema
        title="Google Ads vs SEO — co wybrać w 2025? Porównanie kosztów i efektów"
        description="Kompleksowe porównanie Google Ads i SEO: koszty, czas efektów, ROI, kiedy wybrać każdą strategię i jak je łączyć dla najlepszych wyników."
        url="https://fotz.pl/blog/google-ads-vs-seo"
        datePublished="2025-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Google Ads vs SEO", url: "https://fotz.pl/blog/google-ads-vs-seo" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Google Ads vs SEO", href: "/blog/google-ads-vs-seo" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Google Ads / SEO / Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Google Ads vs SEO — co wybrać dla swojej firmy w 2025?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Płatne reklamy czy organiczne pozycjonowanie? Sprawdź koszty, czas efektów i kiedy każda strategia się opłaca — plus jak połączyć oba kanały.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Google Ads — wyniki od", value: "24h" },
                { label: "SEO — wyniki od", value: "3 mies." },
                { label: "Avg. CTR pozycja #1", value: "28%" },
                { label: "Avg. CTR reklamy", value: "2–5%" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-sky-400">{s.value}</div>
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
              Google Ads vs SEO — podstawowe różnice
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Pytanie „Google Ads czy SEO?" zadaje sobie każda firma, która chce pozyskiwać klientów przez Google. Obie strategie mają ten sam cel — pojawić się na szczycie wyników wyszukiwania — ale różnią się fundamentalnie sposobem działania, kosztami i horyzontem czasowym.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Google Ads</strong> (dawniej AdWords) to system reklamy płatnej za kliknięcie (PPC). Twoja strona pojawia się w wynikach Google z etykietą „Reklama" — ale pojawia się natychmiast, od 24–48 godzin po uruchomieniu kampanii. Płacisz tylko gdy ktoś kliknie w reklamę. Gdy tylko zatrzymasz płatności, Twoje reklamy znikają z Google.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>SEO</strong> (Search Engine Optimization) to optymalizacja strony pod organiczne wyniki wyszukiwania. Nie płacisz za każde kliknięcie — ale efekty wymagają czasu. Typowo 3–6 miesięcy do pierwszych widocznych efektów, 6–18 miesięcy do mocnych pozycji. Za to raz wypracowane pozycje generują ruch bezpłatnie.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-blue-900 font-semibold text-lg mb-2">Kluczowa różnica w jednym zdaniu:</p>
              <p className="text-blue-800">
                Google Ads kupuje widoczność natychmiast, ale musisz płacić stale. SEO buduje widoczność długoterminowo — inwestycja na początku, potem tańszy ruch przez lata.
              </p>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Porównanie Google Ads vs SEO — tabela
            </h2>
            <p className="text-gray-600 mb-4">
              Szczegółowe porównanie obu kanałów marketingowych według kluczowych kryteriów:
            </p>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Kryterium</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-300">Google Ads</th>
                    <th className="px-4 py-3 text-left font-semibold text-green-300">SEO / Pozycjonowanie</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.cecha}</td>
                      <td className="px-4 py-3 text-blue-800">{row.googleAds}</td>
                      <td className="px-4 py-3 text-green-800">{row.seo}</td>
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
              Koszty Google Ads vs SEO — co naprawdę płacisz?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Koszty Google Ads</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• <strong>Budżet reklamowy:</strong> od 300 zł/miesiąc (lokalnie), 2 000–20 000 zł/miesiąc (e-commerce)</li>
                  <li>• <strong>Obsługa agencji:</strong> 15–25% budżetu lub 400–2 500 zł stała opłata</li>
                  <li>• <strong>CPC (koszt kliknięcia):</strong> 0,50–30 zł w zależności od branży</li>
                  <li>• <strong>Setup kampanii:</strong> jednorazowo 500–1 500 zł</li>
                  <li>• <strong>Koszty stałe:</strong> musisz płacić cały czas, by mieć ruch</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-green-900 mb-4">Koszty SEO</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>Usługa pozycjonowania:</strong> 1 000–4 000 zł/miesiąc przez 6–18 miesięcy na start</li>
                  <li>• <strong>Audyt SEO:</strong> jednorazowo 800–3 000 zł</li>
                  <li>• <strong>Content marketing:</strong> 500–2 000 zł/miesiąc za artykuły</li>
                  <li>• <strong>Link building:</strong> 500–3 000 zł/miesiąc za pozyskiwanie linków</li>
                  <li>• <strong>Długoterminowo:</strong> tańsze na wizytę — ruch organiczny jest bezpłatny</li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-2">Porównanie ROI długoterminowego</h3>
              <p className="text-amber-800">
                Google Ads przy budżecie 2 000 zł/miesiąc daje zazwyczaj 100–400 odwiedzin. SEO po 12 miesiącach pracy za 1 500 zł/miesiąc może generować 500–5 000 organicznych odwiedzin miesięcznie — bez dodatkowych kosztów za kliknięcie. Po 2–3 latach organiczny ruch z SEO jest wielokrotnie tańszy na każdą wizytę niż Google Ads.
              </p>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Kiedy wybrać Google Ads, a kiedy SEO?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className={`rounded-xl p-6 border ${uc.color === "blue" ? "bg-blue-50 border-blue-100" : "bg-green-50 border-green-100"}`}
                >
                  <h3 className={`text-xl font-bold mb-4 ${uc.color === "blue" ? "text-blue-900" : "text-green-900"}`}>
                    {uc.title}
                  </h3>
                  <ul className="space-y-2">
                    {uc.items.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 ${uc.color === "blue" ? "text-blue-800" : "text-green-800"}`}>
                        <span className="mt-0.5">✓</span>
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
              Połącz Google Ads z SEO — synergia obu kanałów
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Najskuteczniejsze firmy nie wybierają między Google Ads a SEO — używają obu. Ta strategia ma konkretne zalety:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  title: "Pełne pokrycie SERP",
                  desc: "Twoja strona pojawia się zarówno w płatnych reklamach (top), jak i w organicznych wynikach. Użytkownicy widzą Cię dwukrotnie — wzrost CTR o 20–25%.",
                },
                {
                  title: "Dane z Ads poprawiają SEO",
                  desc: "Google Ads dostarcza dokładne dane o tym, które słowa kluczowe konwertują. Tworzysz pod nie landing pages i artykuły SEO — optymalizujesz strategię content marketingu.",
                },
                {
                  title: "Ciągłość ruchu",
                  desc: "SEO zapewnia stały bazowy ruch, a Google Ads można włączyć w szczycie sezonu lub podczas promocji. Nigdy nie masz przestojów — jeden kanał uzupełnia drugi.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Rekomendowana strategia dla nowej firmy</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-blue-100 mb-1">Miesiące 1–3</div>
                  <div>70% budżetu na Google Ads (szybkie leady) + start SEO (audyt, optymalizacja techniczna)</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-100 mb-1">Miesiące 4–9</div>
                  <div>50% Google Ads + 50% SEO/content. Pierwsze organiczne pozycje zaczynają przynosić ruch.</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-100 mb-1">Miesiące 10+</div>
                  <div>Google Ads na wybrane kampanie sezonowe + SEO jako główne źródło taniego, stałego ruchu.</div>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jak fotz.pl pomaga w Google Ads i SEO?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Fotz Studio to agencja marketingowa z Poznania — obsługujemy firmy w całej Polsce w zakresie zarówno kampanii Google Ads, jak i pozycjonowania SEO. Nie musisz wybierać — tworzymy kompleksowe strategie, które łączą oba kanały dla maksymalnego zwrotu z inwestycji.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Kampanie Google Ads</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Kampanie Search, PMax, Shopping, Display</li>
                  <li>✓ Optymalizacja Quality Score i CPC</li>
                  <li>✓ Tracking konwersji (Google Analytics 4)</li>
                  <li>✓ Miesięczne raporty z wynikami</li>
                  <li>✓ Remarketing i listy odbiorców</li>
                </ul>
                <Link
                  to="/performance-marketing/google-ads"
                  className="inline-block mt-4 text-blue-700 font-semibold text-sm hover:underline"
                >
                  Dowiedz się więcej o kampaniach Google Ads →
                </Link>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Pozycjonowanie SEO</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Audyt SEO i analiza konkurencji</li>
                  <li>✓ Optymalizacja on-page (tech + treść)</li>
                  <li>✓ Link building (pozyskiwanie wartościowych linków)</li>
                  <li>✓ Content marketing i blog firmowy</li>
                  <li>✓ Google Search Console + raporty pozycji</li>
                </ul>
                <Link
                  to="/uslugi/pozycjonowanie"
                  className="inline-block mt-4 text-green-700 font-semibold text-sm hover:underline"
                >
                  Dowiedz się więcej o pozycjonowaniu SEO →
                </Link>
              </div>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              FAQ — Google Ads vs SEO
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
              Nie wiesz co wybrać dla swojej firmy?
            </h2>
            <p className="text-gray-300 mb-6">
              Bezpłatna konsultacja — przeanalizujemy Twoją branżę, konkurencję i budżet, i powiemy wprost: Google Ads, SEO czy połączenie obu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:kontakt@fotz.pl"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Napisz do nas
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
              <Link to="/blog/google-ads-cennik" className="text-blue-600 hover:underline">Google Ads cennik 2025</Link>
              {" · "}
              <Link to="/uslugi/pozycjonowanie" className="text-blue-600 hover:underline">Pozycjonowanie stron internetowych</Link>
              {" · "}
              <Link to="/performance-marketing/google-ads" className="text-blue-600 hover:underline">Kampanie Google Ads — oferta</Link>
            </p>
          </div>
        </FadeInView>
      </article>

      <ContactSection />
    </Layout>
  );
}
