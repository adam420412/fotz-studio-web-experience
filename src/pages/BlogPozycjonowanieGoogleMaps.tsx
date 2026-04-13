import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { MapPin, Globe, Star, Search, TrendingUp, Map, CheckCircle, AlertCircle, Zap } from "lucide-react";

const faqItems = [
  {
    question: "Jak działa algorytm rankingowy Google Maps?",
    answer: "Google Maps używa trzech głównych czynników rankingowych: (1) Relevance (trafność) — zgodność profilu z zapytaniem użytkownika, słowa kluczowe w nazwie firmy, kategorii i opisie; (2) Distance (dystans) — odległość od użytkownika, jego lokalizacja jest priorytetem; (3) Prominence (prominencja/autorytet) — zaufanie Google do firmy, oparte na opiniach, recenzjach, linków cytatach. Algorytm uwzględnia też: kompletność profilu (zdjęcia, godziny otwarcia), świeżość danych, odpowiedzi na opinię. Local Pack (trzy wyniki na mapie) faworyzuje firmy z wysokim wynikiem tych trzech czynników.",
  },
  {
    question: "Jak zweryfikować firmę w Google Moja Firma?",
    answer: "Wejdź na business.google.com, zaloguj się i wyszukaj swoją firmę. Jeśli jej nie ma, dodaj ją. Google wyśle kod weryfikacyjny pocztą (7-14 dni) lub SMS. Możesz też weryfikować przez: (1) Wideorozmowę z Google — szybciej; (2) Kartę pocztową — tradycyjnie; (3) Telefon — dla wybranych kategorii. Po wpisaniu kodu status zmieni się na zweryfikowany. To otworzy dostęp do wszystkich funkcji edycji profilu, dodawania postów, zarządzania opinią. Bez weryfikacji profil ma ograniczone możliwości.",
  },
  {
    question: "Jakie czynniki lokalnego SEO mają największy wpływ na ranking?",
    answer: "Badania pokazują ranking oparte na: (1) Opinie Google (ilość, średnia ocena, świeżość) — 30-40% wpływu; (2) NAP consistency (zgodność Nazwa-Adres-Telefon na całym internecie) — 20-25% wpływu; (3) Kompletność profilu (foto, godziny, kategorie, atrybuty) — 15-20%; (4) Postępy na Mapach (regularne posty, odpowiedzi) — 10-15%; (5) Lokalne cytowania (wzmianki w katalogach branżowych) — 10%; (6) Backlinki do strony www — 5%; (7) Sygnały desktopowe (CTR, dwell time) — 5%. Priorytet: opinie, konsystencja, kompletność profilu.",
  },
  {
    question: "Jak zbierać opinie i obsługiwać recenzje Google?",
    answer: "Strategie: (1) Link do opinii — umieść link do profilu Google na stronie, w emailu, SMS. QR kod w lokalu; (2) Śledzenie opinii — loguj się do Google Moja Firma codziennie, odpowiadaj w ciągu 24-48h; (3) Odpowiadaj zawsze — dziękuj za 5 gwiazdek, przeproś i rozwiąż problemy w 1-2 gwiazdkach; (4) Nie prosi o opinie w wymian za zniżki — przełamywał politykę Google; (5) Zachęcaj regularnie — papier na ladzie, email post-zakupu, SMS QR kod; (6) Flaguj nieuczciwych recenzji — zgłoś fałszywe opinie; (7) Uzbieraj minimum 20-30 opinii miesięcznie dla małych biznesów. Średnia 4.3+ ocena jest konkurencyjna.",
  },
  {
    question: "Co to jest NAP consistency i jak go zadbać?",
    answer: "NAP = Name (nazwa), Address (adres), Phone (telefon). Konsystencja oznacza, że te dane muszą być identyczne wszędzie: Google Moja Firma, strona www, katalogi (Yelp, Yellow Pages, Kompass), social media, wizytówki. Google skanuje internet, jeśli znajdzie rozbieżności (spacja w nazwie, inny kod pocztowy, numer bez kierunkowego), obniża ranking. Jak zadbać: (1) Audyt — sprawdź gdzie pojawia się Twoja firma online; (2) Ustalone dane — zapisz dokładnie jak powinna wyglądać nazwa, adres, telefon; (3) Aktualizuj wszędzie — wymień dane w katalogach, Mapach, stronie, socialmedia; (4) Monitoruj — co miesiąc sprawdzaj top 20 katalogów; (5) Usługi — NAP tools (Whitespark, BrightLocal) automatyzują audit. Narzędzie Google Moja Firma pokazuje też gdzie Twoja firma się pojawia online.",
  },
];

const optimizationSteps = [
  {
    number: "1",
    title: "Kompletny profil Google Moja Firma",
    description: "Nazwa (z słowami kluczowymi), kategoria główna + dodatkowe, opis 750 znaków, godziny, zdjęcia (10+), atrybuty, link WWW",
  },
  {
    number: "2",
    title: "Zbieranie opinii i recenzji",
    description: "Link do opinii na stronie, emailu, SMS, QR kod w lokalu. Celem minimum 20-30 opinii/miesiąc, odpowiadaj na wszystkie",
  },
  {
    number: "3",
    title: "NAP consistency",
    description: "Nazwa, adres, telefon muszą być identyczne na Google Mapach, stronie, katalogach, social media",
  },
  {
    number: "4",
    title: "Lokalne cytowania",
    description: "Wzmianki firmy (z linkiem) w katalogach branżowych (Yelp, Yellow Pages, Kompass), artykułach, mediach",
  },
  {
    number: "5",
    title: "Postępy na Mapach",
    description: "Dodawaj posty, zdjęcia, odpowiadaj na pytania. Świeżość profilu wpływa na ranking",
  },
  {
    number: "6",
    title: "Budowanie autorytetu",
    description: "Backlinki do strony, wzmianki w mediach lokalnych, partnerstwa z innymi firmami",
  },
];

export default function BlogPozycjonowanieGoogleMaps() {
  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie w Google Maps — SEO Local Pack, opinie, NAP, cytowania | Fotz.pl"
        description="Pozycjonowanie Google Maps: jak działa Local Pack, czynniki rankingowe (opinie, NAP, cytowania), optymalizacja profilu Google Moja Firma, zbieranie recenzji, monitoring wyników."
        canonicalUrl="https://fotz.pl/blog/pozycjonowanie-google-maps"

        keywords="Pozycjonowanie w Google Maps, Pozycjonowanie w Google Maps poradnik, Pozycjonowanie w Google Maps strategia, Pozycjonowanie w Google Maps jak zrobić, Pozycjonowanie w Google Maps marketing, Pozycjonowanie w Google Maps przykłady, Pozycjonowanie w Google Maps w Polsce"
      />
      <ArticleSchema
        title="Pozycjonowanie w Google Maps — kompletny poradnik Local SEO i optymalizacji profilu"
        description="Poradnik pozycjonowania Google Maps: jak działają czynniki rankingowe, optymalizacja Google Moja Firma, zbieranie opinii, NAP consistency, lokalne cytowania i monitoring wyników."
        url="https://fotz.pl/blog/pozycjonowanie-google-maps"
        datePublished="2025-03-28"
        dateModified="2025-07-30"
        author="Fotz Studio"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Pozycjonowanie Google Maps", url: "/blog/pozycjonowanie-google-maps" },
        ]}
      />

      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Pozycjonowanie Google Maps", href: "/blog/pozycjonowanie-google-maps" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Local SEO / Marketing / 2025
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pozycjonowanie w Google Maps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Local Pack, opinie, NAP consistency, cytowania — kompletny poradnik optymalizacji profilu
              Google Moja Firma i budowania autorytetu lokalnego.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Search Vol", value: "~500" },
                { label: "Difficulty", value: "Średnia" },
                { label: "CPC", value: "Niska" },
                { label: "Intent", value: "Informacyjny" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-300">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jak działa Local Pack na Google Maps?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Google Local Pack to grupa trzech wyników mapy (plus ikona mapy obok wyników wyszukiwania) wyświetlana
              gdy użytkownik wyszukuje np. "restauracja blisko mnie" lub "fryzjer Warszawa". Ranking w Local Pack
              zależy od trzech głównych czynników: Relevance (trafność), Distance (dystans) oraz Prominence (prominencja).
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Relevance — Google analizuje zawartość profilu Google Moja Firma: kategorię główną, dodatkowe kategorie,
              opis, słowa kluczowe w nazwie firmy. Im więcej zapytanie użytkownika pasuje do profilu, tym wyżej
              pojawia się firma. Distance — odległość od użytkownika jest krytyczna. Użytkownik wyszukujący w Warszawie
              zawsze będzie widzieć firmy bliżej niego, nawet jeśli dalsze firmy mają lepsze opinie. Prominence — autorytet
              budowany poprzez opinie Google, recenzje, przepłaty, lokalne cytowania. Firmy z 4.7 gwiazdkami i 200 opiniami
              będą wyższe niż nowe firmy bez opinii.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-6 my-10">
            <FadeInView>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Relevance (Trafność)</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Zgodność profilu z zapytaniem: kategoria, słowa kluczowe, opis, atrybuty. Zoptymalizowana
                  nazwa firmy "Pizzeria Luigi Warszawa" lepiej rankuje na "pizzeria Warszawa".
                </p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <div className="flex items-center mb-3">
                  <MapPin className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Distance (Dystans)</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Odległość od użytkownika — decyduje gdzie pojawia się firma na mapie. Lokalne wyszukiwania
                  zawsze priorytetyzują firmy bliżej użytkownika.
                </p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                <div className="flex items-center mb-3">
                  <Star className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Prominence (Autorytet)</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Zaufanie Google: opinie, recenzje, cytowania online. Firmy z wysokim ratingiem i dużą ilością
                  opinii będą wyżej nawet jeśli są dalej.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Optymalizacja profilu Google Moja Firma</h2>
            <p className="text-gray-700 leading-relaxed mb-10">
              Kompletny profil Google Moja Firma to fundament pozycjonowania Local SEO. Każdy element profilu wpływa
              na ranking i konwersje. Oto kluczowe elementy:
            </p>
          </FadeInView>

          <div className="space-y-4 mb-10">
            {[
              {
                icon: Globe,
                title: "Nazwa firmy",
                detail: "Zawrzyj słowo kluczowe jeśli naturalne. Zamiast 'ABC Sp. z o.o.' lepiej 'Pizzeria ABC Warszawa'. Google karze za keyword stuffing, ale kilka słów kluczowych jest OK.",
              },
              {
                icon: MapPin,
                title: "Kategoria główna + dodatkowe",
                detail: "Wybierz najlepiej pasującą kategorię (np. Restauracja). Dodaj do 10 dodatkowych (np. Pub, Bar, Kawiarnia). Kategoria zainspirowuje ranking algorytm.",
              },
              {
                icon: Search,
                title: "Opis (750 znaków)",
                detail: "Opisz biznes naturalnie, zawrzyj słowa kluczowe. Co robisz, dla kogo, co wyróżnia. Google indeksuje opis i bierze go pod uwagę przy rankingu.",
              },
              {
                icon: Star,
                title: "Zdjęcia (minimum 10-15)",
                detail: "Zdjęcia wnętrza, produktu, zespołu, akcji. Co najmniej 720px szerokości. Google Moja Firma z zdjęciami rankuje lepiej i ma wyższą CTR.",
              },
              {
                icon: CheckCircle,
                title: "Atrybuty (Dine-in, Delivery, Wifi)",
                detail: "Wybierz wszystkie pasujące atrybuty. Pomagają użytkownikom filtrować wyniki i mogą zwiększyć ranking.",
              },
              {
                icon: TrendingUp,
                title: "Godziny otwarcia",
                detail: "Podaj dokładne godziny, zaznacz dni wolne. Niepoprawne godziny prowadzą do negatywnych opinii i obniżenia rankingu.",
              },
              {
                icon: Zap,
                title: "Posty na Mapach",
                detail: "Dodawaj regularne posty: promocje, nowe produkty, imprezy, zdjęcia. Świeżość wpływa na ranking, minimum 1 post na 2 tygodnie.",
              },
              {
                icon: AlertCircle,
                title: "Pytania i odpowiedzi",
                detail: "Odpowiadaj na pytania użytkowników szybko i dokładnie. Wzrost liczby Q&A i odpowiedzi wspiera ranking.",
              },
            ].map((item, i) => (
              <FadeInView key={i}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 flex gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.detail}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6 kroków do rankingu w Google Maps</h2>
            <p className="text-gray-700 leading-relaxed mb-10">
              Strategia pozycjonowania Google Maps wymaga konsekwencji. Poniżej znajduje się plan działań
              w kolejności ważności i wpływu na ranking.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-6">
            {optimizationSteps.map((step, i) => (
              <FadeInView key={i}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">NAP Consistency — fundament Local SEO</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              NAP (Name, Address, Phone) consistency oznacza, że nazwa firmy, adres i numer telefonu
              muszą być identyczne wszędzie gdzie pojawia się Twoja firma online. Google skanuje internet,
              indeksuje dane i jeśli znajdzie rozbieżności, obniża zaufanie do profilu.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Przykład problemu: Profil Google Moja Firma: "ABC Sp. z o.o., ul. Marszałkowska 1, 00-001 Warszawa, +48 22 123 45 67"
              ale katalog Yellow Pages: "ABC, Marszałkowska 1, Warszawa, 222123456" (bez kierunkowego, bez kodeks pocztowego).
              Google widzi to jako różne firmy, obniża ranking.
            </p>
          </FadeInView>

          <div className="bg-white rounded-lg p-8 border-l-4 border-red-600 mb-8">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Czeste błędy w NAP
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Różne warianty nazwy: "ABC Sp. z o.o." vs "ABC" vs "ABC sp. z o.o." — Google widzi jako różne firmy</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Numery bez kierunkowych: "+48 22 123 45 67" vs "22 123 45 67" — rozbieżności</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Różne warianty adresu: "ul. Marszałkowska" vs "ulica Marszałkowska" vs "Marszałkowska" — Google nie łączy</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Brakujący kod pocztowy lub województwo — zmniejsza precyzję lokalizacji</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>Duplikaty profilu — ta sama firma na Mapach 2-3 razy (z różnymi danymi) — Google szuka originału</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-600">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Jak zadbać o NAP consistency
            </h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">1.</span>
                <span><strong>Audyt online:</strong> Wyszukaj w Google "Twoja nazwa Twoje miasto" i sprawdź gdzie pojawia się Twoja firma</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">2.</span>
                <span><strong>Standaryzacja:</strong> Napisz dokładnie jak powinna wyglądać nazwa, adres, telefon (jedna wersja)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">3.</span>
                <span><strong>Aktualizacja wszędzie:</strong> Zmień dane w Google Moja Firma, stronie www, socialmedia, katalogach (Yellow Pages, Yelp, Kompass)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">4.</span>
                <span><strong>Monitoring:</strong> Co miesiąc sprawdzaj top 20 katalogów i miejsc gdzie pojawia się Twoja firma</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">5.</span>
                <span><strong>Narzędzia:</strong> Użyj Whitespark, BrightLocal, Moz Local — automtyzują audit i zarządzanie NAP</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Zbieranie opinii i zarządzanie recenzjami</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Opinie Google mają 30-40% wpływu na ranking w Local Pack. Firmy z 4.7+ gwiazdkami
              i regularnym napływem recenzji znacznie lepiej rankingują. Oto jak budować portfolio opinii.
            </p>
          </FadeInView>

          <div className="space-y-6">
            <FadeInView>
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Kanały do zbierania opinii</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Link bezpośredni:</strong> Umieść link do Twojego profilu Google na stronie www (w footerze, na stronie kontaktu)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>QR kod:</strong> Wydrukuj QR kod prowadzący do opinii i umieść na ladzie, w lokalu, na paragonach</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Email post-zakupu:</strong> Wyślij email podziękowanie z linkiem do opinii (24h po zakupie)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>SMS:</strong> Wysyłaj SMS z prośbą o opinię do klientów którzy dali zgodę na marketing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Papier w lokalu:</strong> Karteczka na ladzie: "Zostaw nam opinię na Google" z linkiem lub QR</span>
                  </li>
                </ul>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Reagowanie na opinie</h3>
                <p className="text-gray-700 mb-4">
                  Odpowiadaj na każdą opinię w ciągu 24-48 godzin. To zwiększa engagement, pokazuje Google że zarządzasz
                  profilem i buduje zaufanie klientów.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">5★:</span>
                    <span>Podziękuj, powiedź jak cieszysz się że wróci</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">3-4★:</span>
                    <span>Podziękuj, zapytaj co można poprawić, zaproś na rozmowę</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">1-2★:</span>
                    <span>Przeproś, zaproponuj rozwiązanie, zaproś do rozmowy (poza opinią, poprzez SMS/email)</span>
                  </li>
                </ul>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Cel i harmonogram</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Minimum opinii:</strong> 20-30 opinii/miesiąc dla małych firm, 50+ dla większych</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Cel ratingowy:</strong> 4.3+ gwiazdek (średnia branżowa) lub 4.5+ (premium)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Stałość:</strong> Regularne opinie lepsze niż 100 opinii na raz — pokazuje świeżość</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span><strong>Nie prosi za zniżki:</strong> "Zostaw opinię a dostaniesz 10% zniżkę" — przełamywał politykę Google</span>
                  </li>
                </ul>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lokalne cytowania i budowanie autorytetu</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Lokalne cytowania to wzmianki Twojej firmy w katalogach branżowych, artykułach, mediach
              i innych stronach. Każde cytowanie (szczególnie z linkiem) zwiększa autorytet lokalny i wspomaga ranking.
            </p>
          </FadeInView>

          <div className="bg-white rounded-lg p-8 border border-gray-200 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Gdzie zdobywać cytowania</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Katalogi ogólne</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Google Moja Firma (priorytet)</li>
                  <li>• Yelp</li>
                  <li>• Yellow Pages / Żółte Strony (PL)</li>
                  <li>• Kompass (katalog firm)</li>
                  <li>• Mapa firm</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Katalogi branżowe</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Dla restauracji: TripAdvisor, Justeat</li>
                  <li>• Dla hotelów: Booking, Airbnb, TripAdvisor</li>
                  <li>• Dla dentystów: LekarzeOnline, Docplanner</li>
                  <li>• Dla fryzjerów: Treatwell, StyleSeat</li>
                </ul>
              </div>
            </div>
          </div>

          <FadeInView>
            <div className="bg-green-50 rounded-lg p-8 border border-green-200">
              <h3 className="font-bold text-gray-900 mb-4">Proces zdobywania cytowań</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">1. Audit</span>
                  <span>Sprawdź gdzie Twoja firma już się pojawia (skanowanie Moz Local, BrightLocal)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">2. Braki</span>
                  <span>Zidentyfikuj katalogi gdzie Ty nie jesteś a konkurencja się pojawia</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">3. Dodanie</span>
                  <span>Załóż profil/listę w katalogach (z pełnymi danymi, linkiem do strony www)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">4. Monitorowanie</span>
                  <span>Co miesiąc sprawdzaj czy katalogi zawsze mają poprawne NAP</span>
                </li>
              </ol>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Monitoring i mierzenie wyników</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Monitoring pozycjonowania Google Maps jest niezbędny aby zobaczyć czy strategia działa.
              Google Moja Firma ma wbudowane analytics, ale warto też używać narzędzi SEO.
            </p>
          </FadeInView>

          <div className="space-y-6">
            <FadeInView>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">Metryki do monitorowania</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-2">W Google Moja Firma:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Wglądy (Views) — ile razy widział profil</li>
                      <li>• Kliknięcia (Actions) — kliknięcia call, strona, mapy</li>
                      <li>• Pytania i odpowiedzi — liczba i jakość</li>
                      <li>• Zdjęcia — widoki zdjęć, udostępnienia</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-2">Narzędzia SEO:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• BrightLocal — ranking tracking</li>
                      <li>• Whitespark — NAP audit, cytowania</li>
                      <li>• Moz Local — opinie, cytowania</li>
                      <li>• Google Analytics — traffic z Mapy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="font-bold text-gray-900 mb-4">Jak sprawdzić ranking w Google Maps</h3>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-purple-600 font-bold">1.</span>
                    <span>Otwórz incognito (bez cache) i wyszukaj "Twoja kategoria Twoje miasto"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600 font-bold">2.</span>
                    <span>Sprawdź czy pojawia się w Local Pack (3 wyniki na mapie)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600 font-bold">3.</span>
                    <span>Notuj pozycję (1, 2, 3 lub poniżej) — powtarzaj co tydzień</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600 font-bold">4.</span>
                    <span>Porównuj z konkurentami — analiza pozycji ich profili</span>
                  </li>
                </ol>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

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
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="bg-white rounded-lg p-8 border-l-4 border-blue-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Podsumowanie: pozycjonowanie Google Maps</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pozycjonowanie w Google Maps to proces długoterminowy wymagający konsekwencji. Kluczowe elementy:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Kompletny profil:</strong> Wszystkie dane, zdjęcia, kategorie, atrybuty</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Opinie:</strong> Minimum 20-30 opinii/miesiąc, odpowiadaj na wszystkie</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NAP consistency:</strong> Dane identyczne wszędzie online</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cytowania:</strong> Wzmianki w katalogach i mediach lokalnych</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Monitoring:</strong> Śledzenie rankingu, opinii, wglądu w profil</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">
                Rezultaty: Przy konsekwentnej pracy możesz spodziewać się poprawy w ranking w ciągu 2-3 miesięcy,
                a znaczące wzrosty Wglądu i konwersji w ciągu 6 miesięcy.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
