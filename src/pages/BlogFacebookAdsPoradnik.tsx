import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const adFormats = [
  {
    typ: "Image Ads",
    format: "Statyczne grafiki 1200x628 px",
    cel: "Brand awareness, lead generation",
    najlepsiej: "E-commerce, usługi lokalne, nieruchomości",
  },
  {
    typ: "Video Ads",
    format: "Video 15s-3 min (H264, MP4)",
    cel: "Zaangażowanie, traffic, konwersje",
    najlepsiej: "SaaS, edukacja, entertainment, produkty konsumenckie",
  },
  {
    typ: "Carousel Ads",
    format: "2-10 kart ze zdjęciami/video",
    cel: "Showcase wielu produktów, storytelling",
    najlepsiej: "E-commerce, katalogi, portfolio",
  },
  {
    typ: "Collection Ads",
    format: "Obraz główny + katalog produktów",
    cel: "Sprzedaż bezpośrednia z Facebooka",
    najlepsiej: "Handel online, produkty fizyczne",
  },
  {
    typ: "Lead Ads",
    format: "Formularz wbudowany w Facebooku",
    cel: "Zbieranie danych bez opuszczania platformy",
    najlepsiej: "Usługi, B2B, edukacja, ubezpieczenia",
  },
  {
    typ: "Story Ads",
    format: "Full-screen vertical 1080x1920 px",
    cel: "Wysoki CTR, zaangażowanie młodszych odbiorców",
    najlepsiej: "Moda, lifestyle, gry, aplikacje",
  },
  {
    typ: "Reels Ads",
    format: "Short-form video 9:16, do 90 sekund",
    cel: "Maksymalne zaangażowanie, reach",
    najlepsiej: "TikTok-like treści, moda, edukacja, entertainment",
  },
];

const commonMistakes = [
  {
    blad: "Zbyt szerokie targetowanie",
    opis: "Ustawianie zainteresowań zbyt ogólnych (np. Facebook, internet). Powoduje wyświetlanie reklam osobom, które nie są potencjalnymi klientami, co zwiększa koszty i zmniejsza konwersje.",
    rozwiazanie: "Zamiast tego: Celuj mikrosegmentami. Salon fryzjerski zamiast Wszyscy użytkownicy powinien celować kobiety 25-55 w Warszawie zainteresowane pielęgnacją włosów.",
  },
  {
    blad: "Brak pixel trackingu",
    opis: "Jeśli nie zainstalowałeś piksela Facebooka na stronie, nie możesz śledzić konwersji ani retargetować. Algorytm nie wie co się dzieje po kliknięciu w reklamę.",
    rozwiazanie: "Natychmiast zainstaluj piksel Facebook. Bez tego nie będziesz mieć CPA, nie będziesz móc retargetować porzuconych koszyków i traci się~50% wartości kampanii.",
  },
  {
    blad: "Copy bez value proposition",
    opis: "Tekst typu Sprawdź naszą ofertę lub Kliknij tutaj. Użytkownicy nie wiedzą co zyskają, więc nie klikają. Brak emocji i specifiki.",
    rozwiazanie: "Pisze jasną propozycję wartości: Oszczędź 3 miesiące na biżuterii — wróć do pracy bez bólu, za 2 tygodnie. Liczby + benefity + deadline = wyższa konwersja.",
  },
  {
    blad: "Niski budżet przez zbyt długo",
    opis: "Budżet poniżej 300 zł/miesiąc rozprzestrzenia się na zbyt wiele odbiorców, Facebook nie ma czasu się nauczyć kto konwertuje.",
    rozwiazanie: "Zamiast 100 zł/dzień rozproszone: skoncentruj na jednym segmencie 500 zł/dzień przez 2-4 tygodnie. Facebook potrzebuje 50+ konwersji w 7 dni, aby optimalizować.",
  },
  {
    blad: "Testowanie zbyt wielu zmiennych naraz",
    opis: "Zmiana audience, copy, creative i budżetu jednocześnie. Nie wiesz co nie działa i nie możesz iterować.",
    rozwiazanie: "A/B test jeden element na raz. Test 1: dwie audience, ten sam creative. Gdy wygrywam, test 2: dwa copie. Powolnie, ale nauczysz się co działa.",
  },
  {
    blad: "Niedrażliwe creative",
    opis: "Reklamy które się bierze za cud. Brak ruchu, animacji, tekstu, stop-scroll. Newsfeed konkurencji jest zbyt duży.",
    rozwiazanie: "Testuj video (zamiast static), używaj tekstu na obrazach (dla stop-scroll), dodaj elementy które przyciągają wzrok, niech pierwsza sekunda decyduje o kliku.",
  },
];

const faqItems = [
  {
    question: "Ile czasu trwa optymalizacja kampanii Facebook Ads?",
    answer: "Pierwsza faza (learning phase) trwa 7-10 dni, przez która Facebook uczy się kto konwertuje. Druga faza (optymalizacja) to 2-4 tygodnie obserwacji i testów. Rzeczywisty ROI widać po 30 dniach. Zalecenie: nie wyłączaj kampanii przed 2-4 tygodniami, nawet jeśli pierwsze wyniki są słabe — algorytm się jeszcze uczy.",
  },
  {
    question: "Jakie są najskuteczniejsze audiencje docelowe?",
    answer: "Najlepsza audiencja to połączenie: 1) pieniężnie zamoż ludzie (income 100k+), 2) poprzedni klienci (custom audience), 3) podobni do klientów (lookalike audience). Dla nowych kampanii: zainteresowania + lokacja (precyzyjne). Facebook Audiences: Detailed Targeting (zainteresowania), Custom Audiences (lista emaili), Lookalike Audiences (podobni do klientów), Engagement Audiences (byli na stronie).",
  },
  {
    question: "Jak długo powinien trwać A/B test na Facebooku?",
    answer: "Minimum 2-3 dni dla kampanii z wysokim budżetem (1000+ zł), 5-7 dni dla średnich (500-1000 zł), 10-14 dni dla małych (100-300 zł). Słaba reguła palca: czekaj aż masz minimum 100 konwersji na wariant przed oceną. Przy 50-100 klikach na dzień, to 2-3 dni. Przy 5-10 klikach, to 10-20 dni.",
  },
  {
    question: "Ile stron docelowych (landing pages) powinienem testować?",
    answer: "Zamiast budować wiele landing page'i zaraz, najpierw testuj na stronie głównej lub ogólnej. Gdy kampania działa, wtedy twoż dedykowaną landing page'ę do konkretnego audience. Reguła: 1 kampania = 1 audience = 1 landing page. Mniej kombinacji = łatwiej analizować wyniki.",
  },
  {
    question: "Jaka jest idealna długość tekstu reklamy na Facebooku?",
    answer: "Tekst reklamy (body copy): 125-300 znaków dla maximum reach. Najlepiej: 2-3 zdania, jasna propozycja wartości, call-to-action. Unikaj tekstu wprost na obrazkach (Facebook penalizuje, zmniejszy reach). Jeśli tekst na grafice, to maksymalnie 20% powierzchni obrazu (Facebook Policy).",
  },
  {
    question: "Czy powinny uruchamiać kampanie na weekendach?",
    answer: "To zależy od Twojej branży. Weekendy: wyższe CPM (drożej), ale bardziej zaangażowani użytkownicy. Weekdays: niższy koszt, więcej traffic. Sprzedaż online, e-commerce: weekendy LEPSZE. B2B, usługi biurowe: weekdays LEPSZE. Testuj obie i analizuj ROI — nie koszt, ale ROI.",
  },
  {
    question: "Czy retargeting jest droższy niż kampanie do nowych ludzi?",
    answer: "Nie, retargeting (remarketing) jest TANIEJ. CPM retargetingu: 5-15 zł (vs 10-30 zł do nowych). CPC retargetingu: 0,20-0,80 zł (vs 0,50-2 zł do nowych). Konwersje retargetingu: 2-5x wyższe. Dlatego każda kampania powinna zawierać 40% budżetu na retargeting — ludzie którzy byli na Twojej stronie już Cię znają.",
  },
  {
    question: "Czy Facebook Ads działa dla branż B2B (biznes-to-biznes)?",
    answer: "Tak, ale wymaga innego podejścia. Zamiast sprzedaży bezpośredniej, Facebook to generowanie leadów (Lead Form Ads, Messenger Ads) i brand awareness dla decydentów. Dobrze działa dla: oprogramowania, konsultingu, agencji, usług dla firm. Słabiej: produkty bardzo niszowe bez jasnej audiencji. Klucz: celuj na osoby z funkcją (VP, Manager, Director) w LinkedIn, potem retargetuj na Facebooku.",
  },
];

const campaignStructure = [
  {
    level: "Kampania (Campaign)",
    opis: "Najwyższy poziom — definiujesz cel (conversions, traffic, engagement). Facebook używa tego do optymalizacji algorytmu. Jeden cel per kampanię.",
    przykład: "Kampania Sprzedaż produktu X — cel CONVERSIONS",
  },
  {
    level: "Zestaw reklam (Ad Set)",
    opis: "Druga warstwa — tutaj ustawiasz audience (kogo chcesz celować), budżet, harmonogram, placement (gdzie pokazać), bid strategy.",
    przykład: "Ad Set Kobiety 25-35 Warszawa + Kraków, CPM bid, 500 zł/dzień",
  },
  {
    level: "Reklama (Ad)",
    opis: "Trzecia warstwa — sam creative (zdjęcie, video, tekst, link). Jeden Ad Set może mieć wiele reklam (A/B testy).",
    przykład: "Ad Video 30s, Ad2 Carousel, Ad3 Static image — testowanie",
  },
];

export default function BlogFacebookAdsPoradnik() {
  return (
    <Layout>
      <SEOHead
        title="Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025"
        description="Praktyczny poradnik Facebook Ads: struktura kampanii, targetowanie, typy reklam, typowe błędy, FAQ. Dowiedz się jak tworzyć skuteczne kampanie reklamowe."
        canonicalUrl="https://fotz.pl/blog/facebook-ads-poradnik"

        keywords="Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025, Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025 poradnik, Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025 strategia, Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025 jak zrobić, Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025 marketing, Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025 przykłady, Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025 w Polsce"
      />
      <ArticleSchema
        title="Facebook Ads poradnik - jak tworzyć skuteczne reklamy? 2025"
        description="Krok po kroku przewodnik tworzenia kampanii Facebook Ads: od struktury kampanii, przez targetowanie, do unikania typowych błędów. Zawiera FAQ i praktyczne przykłady."
        url="https://fotz.pl/blog/facebook-ads-poradnik"
        datePublished="2025-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Facebook Ads poradnik", url: "https://fotz.pl/blog/facebook-ads-poradnik" },
        ]}
      />

      <section className="bg-gradient-to-br from-gray-900 via-yellow-900 to-amber-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Facebook Ads poradnik", href: "/blog/facebook-ads-poradnik" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-yellow-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Poradnik / Facebook Ads / Reklama online
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Facebook Ads poradnik — jak tworzyć skuteczne reklamy w 2025?
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Praktyczny przewodnik krok po kroku: od struktury kampanii, targetowania, typów reklam, aż do unikania błędów które kosztują Cię pieniądze.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typy reklam", value: "7 formatów" },
                { label: "Błędy do unikania", value: "6 najczęstszych" },
                { label: "Faz optymalizacji", value: "2-4 tygodnie" },
                { label: "FAQ", value: "8 odpowiedzi" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-yellow-300">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dlaczego Facebook Ads wciąż dominuje w 2025?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Facebook i Instagram to wciąż najpotężniejsze platformy reklamowe dla generowania leadów i sprzedaży. Dlaczego? Kilka powodów:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
              <li><strong>Precyzyjne targetowanie:</strong> 30+ warstw audience (wiek, płeć, zainteresowania, zachowania, dochód, status, historia zakupów, status związku).</li>
              <li><strong>Pixel tracking:</strong> Piksel Facebooka śledzi każdy krok na stronie — od widoku produktu do zakupu. Żaden inny medium tego nie robi.</li>
              <li><strong>Niska cena wjazdu:</strong> Możesz zacząć od 100 zł/dzień, podczas gdy Google Ads wymaga minimum 1000 zł/miesiąc.</li>
              <li><strong>Retargeting:</strong> Ludzie którzy widzieli Twoją reklamę, ale nie kliknęli, wciąż Cię widzą — to konwersja 2-5x tańsza.</li>
              <li><strong>Wideo dominuje:</strong> TikTok zabrał młodzież, ale ich rodzice i profesjonaliści wciąż są na Facebooku i oglądają video Reels.</li>
            </ul>
            <p className="text-gray-700 font-semibold">
              Podsumowanie: Facebook Ads to wciąż najefektywniejszy sposób na dotarcie do swoich klientów. Wymaga umiejętności, ale ROI 300-500% jest realistyczny.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Typy reklam — jakiego formatu użyć?</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-left p-3 font-semibold text-white border border-gray-700">Typ</th>
                    <th className="text-left p-3 font-semibold text-white border border-gray-700">Format</th>
                    <th className="text-left p-3 font-semibold text-white border border-gray-700">Cel</th>
                    <th className="text-left p-3 font-semibold text-white border border-gray-700">Najlepiej dla</th>
                  </tr>
                </thead>
                <tbody>
                  {adFormats.map((ad, i) => (
                    <tr key={ad.typ} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-semibold text-gray-900">{ad.typ}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{ad.format}</td>
                      <td className="p-3 border border-gray-200 text-gray-700">{ad.cel}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{ad.najlepsiej}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-6">
              <strong>Moja rekomendacja dla początkujących:</strong> Zacznij od Video Ads (maksymalny engagement) lub Carousel Ads (jeśli masz produkty). Potem testuj inne formaty i analizuj metrics.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jak zbudować strukturę kampanii?</h2>
            <p className="text-gray-700 mb-8">
              Facebook Ads ma trzy warstwy. Zrozumienie tych warstw jest kluczem do efektywnej kampanii i łatwego skalowania budżetu.
            </p>

            <div className="space-y-6 mb-8">
              {campaignStructure.map((item, idx) => (
                <div key={item.level} className="border-l-4 border-yellow-400 pl-6 py-4 bg-white rounded">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold text-yellow-600">#{idx + 1}</span>
                    <h3 className="text-xl font-bold text-gray-900">{item.level}</h3>
                  </div>
                  <p className="text-gray-700 mb-3">{item.opis}</p>
                  <p className="text-gray-600 italic text-sm">Przykład: {item.przykład}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 pl-6 py-4 rounded">
              <p className="text-gray-900 font-semibold mb-2">Dlaczego warto znać tę strukturę?</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>Zmieniasz audience? Zmień Ad Set, nie całą kampanię.</li>
                <li>Chcesz A/B testować creative? Dodaj kilka reklam w tym samym Ad Set.</li>
                <li>Skalujesz budżet? Zwiększ budżet w Ad Set, nie tworz nową kampanię.</li>
                <li>Analizujesz wyniki? Patrz na metryki na poziomie Ad (najniższy — najdokładniejszy).</li>
              </ul>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Targetowanie — najważniejsza umiejętność</h2>
            <p className="text-gray-700 mb-6">
              Targeting to gdzie Twoje pieniądze wydają się lub przepadają. Zły targeting = pieniądze na wiatr. Doby targeting = ROI 300%+.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Detailed Targeting (zainteresowania)</h3>
                <p className="text-gray-700 mb-3">
                  To co widzisz w panelu reklamowym Facebook'a. Zamiast celować wszystkim, celuj konkretnym zainteresowaniom.
                </p>
                <p className="text-sm text-gray-600">Przykład: Zamiast Wszyscy użytkownicy, celuj: Kobiety 25-45, zainteresowane fitness + zdrowe odżywianie + joga, które lubią Travel (ostatni krok do zrefinowania publiczności)</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Custom Audiences (własna lista)</h3>
                <p className="text-gray-700 mb-3">
                  Wgraj listę emaili swoich klientów lub osób z formularza. Facebook znajdzie ich i pokaże im reklamę.
                </p>
                <p className="text-sm text-gray-600">Przykład: 1000 emaili poprzednich klientów — wyśli im promocję wprost na Facebooku, za 0,20 zł na klik (retargeting tańszy).</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Lookalike Audiences (podobni do klientów)</h3>
                <p className="text-gray-700 mb-3">
                  Facebook analizuje Twoich klientów i znajduje podobnych ludzi. Automatyczne rozszerzanie reach'u na wysokiej jakości odbiorców.
                </p>
                <p className="text-sm text-gray-600">Przykład: 100 klientów którzy kupili — Facebook znajduje 100k+ podobnych w Polsce. 1-5% Lookalike to najskuteczniejsza audiencja.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Engagement Audiences (byli na stronie)</h3>
                <p className="text-gray-700 mb-3">
                  Retargeting — pokazuj reklamy osobom które były na Twojej stronie, ale nie kupiły.
                </p>
                <p className="text-sm text-gray-600">Przykład: 5000 osób za ostatnie 30 dni odwiedziło Twoją stronę — pokaż im Carousel z produktami które przeglądali. 50% konwersja retargetingu vs 2% nowych.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 pl-6 py-4 rounded">
              <p className="text-gray-900 font-semibold mb-2">Strategia targetowania (poradnik):</p>
              <ol className="text-gray-700 space-y-2 text-sm list-decimal list-inside">
                <li>Zacznij od Custom Audience (lista klientów) + Lookalike 1-5%.</li>
                <li>Potem testuj Detailed Targeting z mikrosegmentami (nie szerokimi zainteresowaniami).</li>
                <li>Zawsze uruchamiaj retargeting Ad Set — ludzie już Cię znają, konwersja taniej.</li>
                <li>Analizuj Audience Insights — which segment konwertuje najlepiej, podwój budżet dla niego.</li>
              </ol>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Typowe błędy w Facebook Ads — co Cię rujnuje?</h2>
            <p className="text-gray-700 mb-8">
              Nawet dobrzy marketerzy robią te błędy. Jeśli je unikniesz, będziesz już lepszy niż 80% konkurencji.
            </p>

            <div className="space-y-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={mistake.blad} className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-red-500 flex-shrink-0">#{idx + 1}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{mistake.blad}</h3>
                      <p className="text-gray-700 mb-3">
                        <strong>Dlaczego to problem:</strong> {mistake.opis}
                      </p>
                      <p className="text-gray-700 bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <strong>Rozwiązanie:</strong> {mistake.rozwiazanie}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęściej zadawane pytania</h2>

            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Q: {item.question}
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-semibold text-yellow-600">A:</span> {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold mb-6">Checklist przed uruchomieniem kampanii</h2>
            <div className="space-y-3">
              {[
                "Zainstalowałem Facebook pixel na stronie (konwersje + retargeting)",
                "Zdefiniowałem cel kampanii (conversions, traffic, lead generation, awareness)",
                "Wybrałem precyzyjną audience (nie szerokie zainteresowania)",
                "Testowałem A/B (2 wersje creative, audience lub copy)",
                "Budżet wynosi minimum 300 zł/miesiąc (aby Facebook się nauczył)",
                "Landing page ma jasny CTA (rezerwacja, telefon, formularz, zakup)",
                "Creative (zdjęcie/video) przyciąga uwagę w pierwszej sekundzie",
                "Copy ma jasną propozycję wartości (nie ogólne zaproszenia)",
                "Ustawiłem limit budżetu dziennego aby nie wydać zbyt dużo",
                "Planuję czekać 2-4 tygodnie zanim ocenię wyniki (Facebook potrzebuje czasu)",
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-500 cursor-pointer"
                  />
                  <span className="text-gray-200">{item}</span>
                </label>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Chcesz, aby my zarządzali Twoją kampanią Facebook Ads?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Agencja FOTZ specjalizuje się w kampaniach Facebook Ads dla małych i średnich firm. Obsługa od A do Z: setup, targeting, creative, optymalizacja, raporting.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Zarezerwuj bezpłatną konsultację
            </Link>
          </FadeInView>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
