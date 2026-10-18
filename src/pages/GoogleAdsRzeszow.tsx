import { SEOHead } from '@/components/seo/SEOHead';

import { Layout } from '@/components/layout/Layout';
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { FadeInView } from '@/components/FadeInView';
import { ContactSection } from '@/components/sections/ContactSection';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { Link } from 'react-router-dom';

export default function GoogleAdsRzeszow() {
  return (
    <Layout>
      <SEOHead
          title="Agencja Google Ads Rzeszów | Fotz Studio"
          description="Google Ads Rzeszów ✓ Kampanie dla firm z Rzeszowa i Podkarpacia prowadzone zdalnie z Poznania. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/performance-marketing/google-ads/rzeszow"
        keywords="google ads rzeszow, kampanie google ads rzeszow, agencja google ads rzeszow, reklamy google rzeszow, google adwords rzeszow, sem rzeszow, google ads dla firm rzeszow, prowadzenie google ads rzeszow, google ads cennik rzeszow, reklama w google rzeszow"
        />

      <ServiceSchema 
        name="Agencja Google Ads Rzeszów"
        description="Profesjonalne kampanie Google Ads dla firm z Rzeszowa i regionu Podkarpacia. Prowadzimy kampanie nastawione na widoczność w wyszukiwarce i pozyskiwanie zapytań dla branży IT, produkcji i usług."
        areaServed="Rzeszow"
      />
      <BreadcrumbSchema items={[
        { name: 'Strona główna', url: 'https://www.fotz-studio.pl' },
        { name: 'Google Ads', url: 'https://www.fotz-studio.pl/performance-marketing/google-ads' },
        { name: 'Rzeszów', url: 'https://www.fotz-studio.pl/performance-marketing/google-ads/rzeszow' }
      ]}/>
      <FAQSchema items={[
        {
          question: "Czy Google Ads sprawdzi się dla firmy technologicznej z Rzeszowa?",
          answer: "Może się sprawdzić — Rzeszów ma silny sektor IT i Aviation Valley. Google Ads nadaje się do kampanii dla SaaS, software house'ów, startupów i firm B2B, a o opłacalności decyduje analiza fraz i stawek w Twojej branży."
        },
        {
          question: "Ile kosztują kampanie Google Ads dla firm z Rzeszowa?",
          answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie — liczbie kampanii, kanałach, branży i potrzebnych materiałach. Budżet reklamowy płacony Google jest zawsze osobny i ustalamy go razem z Tobą."
        },
        {
          question: "Jakie są najlepsze kampanie Google Ads dla Rzeszowa?",
          answer: "Dla Rzeszowa rekomendujemy: Search Ads (pozyskiwanie klientów B2B), YouTube Ads (storytelling dla marki), Performance Max (skala) i Display Ads (brand awareness wśród decydentów)."
        },
        {
          question: "Jak szybko zobaczę rezultaty z Google Ads?",
          answer: "Pierwsze kliknięcia mogą pojawić się wkrótce po zatwierdzeniu reklam. Optymalizacja to proces ciągły, a tempo poprawy wyników zależy od budżetu, branży i strony docelowej — nie obiecujemy sztywnych terminów efektów."
        },
        {
          question: "Czy mogę targetować kampanię tylko na Rzeszów?",
          answer: "Tak! Kampanie możemy ograniczyć do Rzeszowa, całego Podkarpacia, lub rozszerzyć na całą Polskę — w zależności od Twoich celów biznesowych i modelu sprzedaży."
        },
        {
          question: "Czy jako właściciel firmy otrzymam dostęp do konta Google Ads?",
          answer: "Oczywiście! Jesteś pełnym właścicielem konta i masz dostęp do wszystkich raportów, metryk i danych. My zarządzamy, ty masz kontrolę. Miesiączne raporty przesyłamy regularnie."
        },
        {
          question: "Jakie są gwarancje rezultatów z Google Ads?",
          answer: "Nie gwarantujemy konkretnych wyników ani konwersji, bo zależą od rynku, oferty i budżetu. Zapewniamy przejrzyste zarządzanie budżetem, regularną optymalizację i raporty z działań."
        },
        {
          question: "Czy potrzebuję strony internetowej, aby uruchomić Google Ads?",
          answer: "Tak, kampania wymaga landing page lub strony docelowej. Jeśli jej nie masz, możemy ją zaprojektować i wdrożyć. Jeśli ją masz, wyoptymalizujemy ją pod konwersję."
        }
      ]} />

      <PageBreadcrumbs />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute inset-0 backdrop-blur-[100px] bg-gradient-to-br from-emerald-900/50 via-transparent to-emerald-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Google Ads dla <span className="text-emerald-300">Rzeszowa</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Google Ads Rzeszow — profesjonalne kampanie Google Ads i reklamy w Google dla firm z Rzeszowa i Podkarpacia. Planujemy i prowadzimy kampanie SEM nastawione na ruch i konwersje. Pracujemy z Poznania, firmy z Rzeszowa obsługujemy zdalnie. Bezpłatna konsultacja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <FadeInView>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2">Search</div>
                <p className="text-sm text-emerald-100">Display, YouTube i Performance Max</p>
              </div>
            </FadeInView>
            <FadeInView delay={100}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2">Zdalnie</div>
                <p className="text-sm text-emerald-100">Pracujemy z Poznania dla firm z Rzeszowa</p>
              </div>
            </FadeInView>
            <FadeInView delay={200}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2">Twoje konto</div>
                <p className="text-sm text-emerald-100">Dostęp do kampanii, danych i raportów</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Why Google Ads */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dlaczego Google Ads dla firm z Rzeszowa?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Rzeszów to ośrodek z dynamicznym sektorem IT, Aviation Valley i międzynarodowymi inwestycjami. Google Ads pozwala dotrzeć do osób, które aktywnie szukają Twoich usług.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FadeInView delay={100}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-lg">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dynamiczny rynek i wzrost biznesu</h3>
                  <p className="text-gray-600">
                    Firmy z Rzeszowa rozwijają się w wielu branżach, a Google Ads pozwala docierać do klientów niezależnie od zasięgów organicznych.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-lg">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hub Aviation Valley i IT</h3>
                  <p className="text-gray-600">
                    Aviation Valley, Rzeszowskie Centrum Transferu Technologii, oraz potężny sektor IT. Google Ads doskonale targetuje b2b i techniczne audience.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-lg">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stawki sprawdzane przed startem</h3>
                  <p className="text-gray-600">
                    Koszt kliknięcia zależy od branży i konkurencji na danych frazach — przed startem sprawdzamy stawki dla Twoich słów kluczowych w Rzeszowie i regionie.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={250}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-lg">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Międzynarodowe zasięgi</h3>
                  <p className="text-gray-600">
                    Kampanie Google Ads mogą kierować na Rzeszów clientów z całej Polski, Europy, czy świata. Skalowanie poza lokalne granice.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Rodzaje kampanii Google Ads
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dostosowujemy strategię do Twoich celów biznesowych i branży.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInView delay={100}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-emerald-600 mb-3">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Search Ads</h3>
                <p className="text-gray-600">
                  Reklamy Search dla konkretnych słów kluczowych. Idealne do pozyskiwania b2b leadów, klientów usług i e-commerce dla Rzeszowa.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-emerald-600 mb-3">🛒</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shopping Ads</h3>
                <p className="text-gray-600">
                  Kampanie e-commerce z produktami, cenami i opiniami. Perfect dla sklepów internetowych i handlu detalicznego w Rzeszowie.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-emerald-600 mb-3">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Display Ads</h3>
                <p className="text-gray-600">
                  Reklamy graficzne na stronach partnerskich. Buduje świadomość marki i retargeting wśród decydentów z IT i Aviation Valley.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={250}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-emerald-600 mb-3">▶️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube Ads</h3>
                <p className="text-gray-600">
                  Kampanie video na YouTube — skippable i non-skippable. Świetne do storytellingu marki i dotarcia do tech audience w Rzeszowie.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={300}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-emerald-600 mb-3">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">App Campaigns</h3>
                <p className="text-gray-600">
                  Promowanie aplikacji mobilnej na Google Play i App Store. Zwiększ liczbę pobrań i aktywnych użytkowników.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={350}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-emerald-600 mb-3">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Max</h3>
                <p className="text-gray-600">
                  Zaawansowana kampania oparta na AI — automatycznie optymalizuje wyświetlanie reklam na wszystkich kanałach Google pod wybrany cel.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nasz proces Google Ads dla firm z Rzeszowa
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Od konsultacji po continuous optimization — budujemy kampanię, która ma wspierać rozwój Twojego biznesu.
              </p>
            </div>
          </FadeInView>

          <div className="space-y-8 mt-12">
            <FadeInView delay={100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">1</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analiza konkurencji i rynku</h3>
                  <p className="text-gray-600">
                    Badamy Twoją branżę, konkurentów w Rzeszowie i regionie, potencjał rynku. Określamy budżet, słowa kluczowe i geografię kampanii.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">2</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Konfiguracja konta i kampanii</h3>
                  <p className="text-gray-600">
                    Tworzymy strukturę kampanii, grupy reklam, słowa kluczowe, negative keywords, targeting geograficzny dla Rzeszowa i Podkarpacia.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">3</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tworzenie reklam i landing pages</h3>
                  <p className="text-gray-600">
                    Piszemy atrakcyjne kopie reklam, projektujemy wiadomości dla Twojej audience, optymalizujemy landing page na konwersję.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={250}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">4</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Uruchomienie i monitoring</h3>
                  <p className="text-gray-600">
                    Uruchamiamy kampanię, monitorujemy wydajność w real-time, dostosowujemy bidy i budżety na podstawie live danych z pierwszych dni.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={300}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">5</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optymalizacja i skalowanie</h3>
                  <p className="text-gray-600">
                    Cotygodniowa optymalizacja — słowa kluczowe, bidy, creative testing, scaling winners. Systematyczne poprawianie kampanii na podstawie danych.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Zakres współpracy i wycena
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Wycenę przygotowujemy po rozmowie o zakresie — liczbie kampanii, kanałach, branży i potrzebnych materiałach.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FadeInView delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">START</h3>
                  <div className="text-4xl font-bold">Wycena indywidualna</div>
                  <p className="text-sm text-emerald-100">Zakres ustalamy w ofercie</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Setup konta i konfiguracja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Kampania Search Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Doboru słów kluczowych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Cotygodniowa optymalizacja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Raport miesięczny</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-2 border-emerald-600">
                <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white p-6 relative">
                  <span className="absolute top-4 right-4 bg-yellow-400 text-emerald-900 px-3 py-1 rounded-full text-sm font-bold">POPULARNE</span>
                  <h3 className="text-2xl font-bold mb-2">GROWTH</h3>
                  <div className="text-4xl font-bold">Wycena indywidualna</div>
                  <p className="text-sm text-emerald-100">Zakres ustalamy w ofercie</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Wszystko z START +</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Kampania Display Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Remarketing + Audiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">A/B testing kampanii</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Cotygodniowy kontakt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">PRO</h3>
                  <div className="text-4xl font-bold">Wycena indywidualna</div>
                  <p className="text-sm text-emerald-100">Zakres ustalamy w ofercie</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Wszystko z GROWTH +</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Kampania YouTube Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Performance Max</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Zaawansowana analityka</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Wsparcie priorytetowe</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInView>
          </div>

          <FadeInView delay={250}>
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 mt-12">
              <p className="text-center text-gray-700">
                <strong>Dodatkowo:</strong> Budżet na kliknięcia (koszt reklamy) jest zawsze osobny od wynagrodzenia za obsługę i pokrywasz go bezpośrednio na koncie Google Ads.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Branże, dla których planujemy kampanie
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kampanie dla IT, lotnictwa, produkcji i usług planujemy po analizie branży — firmy z Rzeszowa obsługujemy zdalnie z Poznania.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FadeInView delay={100}>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">IT i Software</h3>
                <p className="text-gray-700">
                  Software house'y, SaaS, developery. Google Ads dla rekrutacji talent'u i pozyskiwania klientów B2B.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Aviation Valley</h3>
                <p className="text-gray-700">
                  Firmy z sektora lotniczego, produkcji, inżynierii. Targeting B2B decydentów w branży aerospace.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">E-commerce</h3>
                <p className="text-gray-700">
                  Shopping Ads, remarketing produktów, konwersja sprzedaży dla sklepów internetowych z Rzeszowa.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={250}>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Usługi profesjonalne</h3>
                <p className="text-gray-700">
                  Pozyskiwanie leadów do firm konsultingowych, prawników, księgowych, agencji marketingowych.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={300}>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Turystyka i gościnność</h3>
                <p className="text-gray-700">
                  Hotele, restauracje, atrakcje turystyczne w Rzeszowie — booking i rezerwacje online.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={350}>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border border-emerald-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Nieruchomości</h3>
                <p className="text-gray-700">
                  Real estate, deweloperzy, zarządcy nieruchomości. Targeting kupujących i najemców w Rzeszowie.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Najczęściej zadawane pytania
              </h2>
              <p className="text-lg text-gray-600">
                Odpowiedzi na najczęstsze pytania o Google Ads dla firm z Rzeszowa.
              </p>
            </div>
          </FadeInView>

          <div className="space-y-6">
            <FadeInView delay={100}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition" open>
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Czy Google Ads sprawdzi się dla firmy technologicznej z Rzeszowa?</span>
                  <span className="text-emerald-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Może się sprawdzić — Rzeszów ma silny sektor IT i Aviation Valley. Google Ads nadaje się do kampanii dla SaaS, software house'ów, startupów i firm B2B, a o opłacalności decyduje analiza fraz i stawek w Twojej branży.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={150}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Ile kosztują kampanie Google Ads dla firm z Rzeszowa?</span>
                  <span className="text-emerald-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Wycenę obsługi przygotowujemy po rozmowie o zakresie — liczbie kampanii, kanałach, branży i potrzebnych materiałach. Budżet reklamowy płacony Google jest zawsze osobny i ustalamy go razem z Tobą.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={200}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Jakie są najlepsze kampanie Google Ads dla Rzeszowa?</span>
                  <span className="text-emerald-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Dla Rzeszowa rekomendujemy: Search Ads (pozyskiwanie klientów B2B), YouTube Ads (storytelling dla marki), Performance Max (skala) i Display Ads (brand awareness wśród decydentów).
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={250}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Jak szybko zobaczę rezultaty z Google Ads?</span>
                  <span className="text-emerald-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Pierwsze kliknięcia mogą pojawić się wkrótce po zatwierdzeniu reklam. Optymalizacja to proces ciągły, a tempo poprawy wyników zależy od budżetu, branży i strony docelowej — nie obiecujemy sztywnych terminów efektów.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={300}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Czy mogę targetować kampanię tylko na Rzeszów?</span>
                  <span className="text-emerald-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Tak! Kampanie możemy ograniczyć do Rzeszowa, całego Podkarpacia, lub rozszerzyć na całą Polskę — w zależności od Twoich celów biznesowych i modelu sprzedaży.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={350}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Czy jako właściciel firmy otrzymam dostęp do konta Google Ads?</span>
                  <span className="text-emerald-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Oczywiście! Jesteś pełnym właścicielem konta i masz dostęp do wszystkich raportów, metryk i danych. My zarządzamy, ty masz kontrolę. Miesiączne raporty przesyłamy regularnie.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={400}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Jakie są gwarancje rezultatów z Google Ads?</span>
                  <span className="text-emerald-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Nie gwarantujemy konkretnych wyników ani konwersji, bo zależą od rynku, oferty i budżetu. Zapewniamy przejrzyste zarządzanie budżetem, regularną optymalizację i raporty z działań.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={450}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Czy potrzebuję strony internetowej, aby uruchomić Google Ads?</span>
                  <span className="text-emerald-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Tak, kampania wymaga landing page lub strony docelowej. Jeśli jej nie masz, możemy ją zaprojektować i wdrożyć. Jeśli ją masz, wyoptymalizujemy ją pod konwersję.
                </p>
              </details>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactSection />
    </Layout>
  );
}
