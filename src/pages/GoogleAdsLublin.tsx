import { SEOHead } from '@/components/seo/SEOHead';

import { Layout } from '@/components/layout/Layout';
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { FadeInView } from '@/components/FadeInView';
import { ContactSection } from '@/components/sections/ContactSection';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { Link } from 'react-router-dom';

export default function GoogleAdsLublin() {
  return (
    <Layout>
      <SEOHead
          title="Agencja Google Ads Lublin — kampanie reklamowe dla firm | Fotz.pl"
          description="Google Ads Lublin ✓ Kampanie dla firm z Lublina i Lubelszczyzny. Od 400 zł/mies. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/google-ads/lublin"
        />

      <ServiceSchema 
        name="Agencja Google Ads Lublin"
        description="Profesjonalne kampanie Google Ads dla firm z Lublina i regionu Lubelszczyzny. Zwiększamy widoczność w wyszukiwarce i generujemy jakościowe leady."
        areaServed="Lublin"
        priceRange="400-5000"
      />
      <BreadcrumbSchema items={[
        { name: 'Strona główna', url: 'https://fotz.pl' },
        { name: 'Google Ads', url: 'https://fotz.pl/performance-marketing/google-ads' },
        { name: 'Lublin', url: 'https://fotz.pl/performance-marketing/google-ads/lublin' }
      ]} />
      <FAQSchema faqs={[
        {
          question: "Czy Google Ads sprawdzi się dla mojej firmy z Lublina?",
          answer: "Tak! Google Ads to uniwersalne narzędzie, które działa dla e-commerce, usług profesjonalnych, edukacji i handlu detalicznego. Firma z Lublina dzięki Google Ads osiąga klientów zarówno lokalnie, jak i z całej Polski."
        },
        {
          question: "Ile kosztują kampanie Google Ads dla firm z Lublina?",
          answer: "Minimalna miesięczna inwestycja to 400 zł. Rzeczywisty koszt zależy od branży, konkurencji i Twoich celów. Średnio firmy z Lublina inwestują 1500-3000 zł miesięcznie, aby uzyskać znaczące rezultaty."
        },
        {
          question: "Jakie są najpopularniejsze kampanie Google Ads dla lublinskich firm?",
          answer: "Wśród lublinskich firm popularne są: kampanie Search (zmiana zachowania poszukiwaczy), Shopping (dla e-commerce), Display (zwiększenie świadomości marki) i YouTube Ads (dotarcie do widzów video)."
        },
        {
          question: "Jak szybko zobaczę rezultaty z Google Ads?",
          answer: "Pierwsze kliknięcia pojawiają się często w ciągu kilku godzin, ale pełne optimizowanie kampanii trwa zwykle 2-4 tygodnie. Znaczący wzrost konwersji obserwujesz zwykle po 4-6 tygodniach współpracy."
        },
        {
          question: "Czy mogę uruchomić kampanię Google Ads tylko dla Lublina?",
          answer: "Oczywiście! Możemy ograniczyć geografię kampanii do samego Lublina, Lubelszczyzny, lub całej Polski — zależy od Twoich potrzeb biznesowych i zasięgu odbiorców."
        },
        {
          question: "Czy dostanę dostęp do konta Google Ads?",
          answer: "Tak, jesteś właścicielem konta. My zarządzamy kampaniami, ty masz pełny dostęp do raportów i metryk. Przesyłamy Ci szczegółowe zestawienia na koniec każdego miesiąca."
        },
        {
          question: "Jakie są gwarancje efektywności kampanii?",
          answer: "Gwarantujemy transparentne zarządzanie budżetem, optymalizację w kierunku maksymalnego ROI i miesięczne raporty. Nie gwarantujemy konkretnej liczby konwersji (zależy od rynku), ale gwarantujemy profesjonalne działania na rzecz Twojego sukcesu."
        },
        {
          question: "Czy potrzebuję strony internetowej, aby uruchomić Google Ads?",
          answer: "Tak, Google Ads wymaga strony docelowej (landing page). Jeśli jej nie posiadasz, pomożemy Ci ją stworzyć lub wyoptymalizować istniejącą."
        }
      ]} />

      <PageBreadcrumbs />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute inset-0 backdrop-blur-[100px] bg-gradient-to-br from-blue-900/50 via-transparent to-blue-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Google Ads dla <span className="text-blue-300">Lublina</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Kampanie Google Ads zaprojektowane dla firm z Lublina i Lubelszczyzny. Zdobywaj klientów poprzez wyszukiwarkę Google z ROI do 400%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <FadeInView>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">370K</div>
                <p className="text-sm text-blue-100">Wyszukiwań miesięcznie w Lublinie</p>
              </div>
            </FadeInView>
            <FadeInView delay={100}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">45K</div>
                <p className="text-sm text-blue-100">Internautów na Google.pl codziennie</p>
              </div>
            </FadeInView>
            <FadeInView delay={200}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">91%</div>
                <p className="text-sm text-blue-100">Firm używa Google do znalezienia usług</p>
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
                Dlaczego Google Ads dla firm z Lublina?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Lublin to największe miasto wschodniej Polski, centrum edukacji, handlu i turystyki biznesowej. Google Ads łączy Twoją firmę z ludźmi aktywnie szukającymi Twoich usług.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FadeInView delay={100}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Intencja zakupu jest wysoka</h3>
                  <p className="text-gray-600">
                    Osoby szukające w Google mają konkretne potrzeby. To nie przypadkowi odwiedzający, a potencjalni klienci gotowi do konwersji.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Precyzyjne targetowanie</h3>
                  <p className="text-gray-600">
                    Dotarcie do konkretnych osób w Lublinie szukających Twoich produktów — po słowach kluczowych, lokalizacji, urządzeniu i interesach.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pomiar i optymalizacja</h3>
                  <p className="text-gray-600">
                    Każde kliknięcie, konwersja i transakcja jest mierzona. Widzisz dokładnie, co przynosi ROI, i szybko skalujemy to, co działa.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={250}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pozycja na szczycie Google</h3>
                  <p className="text-gray-600">
                    Annonces Google pojawiają się na szczycie wyników wyszukiwania — przed organicznymi wynikami. Maksymalny widoczność i CTR.
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
                <div className="text-3xl font-bold text-blue-600 mb-3">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Search Ads</h3>
                <p className="text-gray-600">
                  Reklamy na wyszukiwarkach Google dla konkretnych słów kluczowych. Idealne do pozyskiwania leadów i sprzedaży bezpośredniej.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-blue-600 mb-3">🛒</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shopping Ads</h3>
                <p className="text-gray-600">
                  Kampanie dla e-commerce pokazujące produkty z zdjęciami, ceną i opinią. Perfekt dla sklepy internetowe z katalogiem.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-blue-600 mb-3">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Display Ads</h3>
                <p className="text-gray-600">
                  Reklamy graficzne na stronach partnerskich Google. Buduje świadomość marki i retargeting użytkowników.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={250}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-blue-600 mb-3">▶️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube Ads</h3>
                <p className="text-gray-600">
                  Kampanie video na YouTube — pre-roll, mid-roll, skippable. Doskonałe do storytellingu i brand awareness.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={300}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-blue-600 mb-3">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">App Campaigns</h3>
                <p className="text-gray-600">
                  Promowanie aplikacji mobilnej poprzez Google Play i App Store. Zwiększ liczbę pobrań i aktywnych użytkowników.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={350}>
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-3xl font-bold text-blue-600 mb-3">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Max</h3>
                <p className="text-gray-600">
                  Zaawansowana kampania oparta na AI, która automatycznie optymalizuje pozycjonowanie na wszystkich kanałach Google.
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
                Nasz proces Google Ads dla firm z Lublina
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Od diagnozy po optymalizację — krok po kroku budujemy kampanię, która przynosi rezultaty.
              </p>
            </div>
          </FadeInView>

          <div className="space-y-8 mt-12">
            <FadeInView delay={100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">1</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analiza konkurencji i rynku</h3>
                  <p className="text-gray-600">
                    Badamy Twoją branżę, konkurentów w Lublinie, siłę kupującą i potencjał rynku. Określamy budżet, słowa kluczowe i strategię geograficzną.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">2</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Konfiguracja konta i kampanii</h3>
                  <p className="text-gray-600">
                    Tworzymy strukturę kampanii, grupy reklam, słowa kluczowe, negative keywords, ustawienia lokalizacyjne dla Lublina i regionu.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">3</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tworzenie reklam i landing pages</h3>
                  <p className="text-gray-600">
                    Piszemy atrakcyjne kopie reklam, projektujemy wiadomości dla Lublina, optimizujemy landing page na konwersję i testujemy warianty.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={250}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">4</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Uruchomienie i monitoring</h3>
                  <p className="text-gray-600">
                    Uruchamiamy kampanię, monitorujemy wydajność w czasie rzeczywistym, dostosowujemy bidy i budżety na podstawie danych z pierwszych dni.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={300}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-2xl">5</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optymalizacja i skalowanie</h3>
                  <p className="text-gray-600">
                    Co tydzień optymalizujemy kampanię — powtórzenia, słowa kluczowe, bidy, rozszerzenia. Skalujemy to, co przynosi ROI, zatrzymujemy co nie działa.
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
                Cennik kampanii Google Ads
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transparentne ceny za zarządzanie kampaniami Google Ads dla firm z Lublina. Brak ukrytych opłat.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FadeInView delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">START</h3>
                  <div className="text-4xl font-bold">400 zł</div>
                  <p className="text-sm text-blue-100">Miesięcznie</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Setup konta i konfiguracja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Kampania Search Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Doboru słów kluczowych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Cotygodniowa optymalizacja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Raport miesięczny</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-2 border-blue-600">
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 relative">
                  <span className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">POPULARNE</span>
                  <h3 className="text-2xl font-bold mb-2">GROWTH</h3>
                  <div className="text-4xl font-bold">1500 zł</div>
                  <p className="text-sm text-blue-100">Miesięcznie</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Wszystko z START +</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Kampania Display Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Remarketing + Audiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">A/B testing reklam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Cotygodniowy kontakt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">PRO</h3>
                  <div className="text-4xl font-bold">3000 zł</div>
                  <p className="text-sm text-blue-100">Miesięcznie</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Wszystko z GROWTH +</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Kampania YouTube Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Performance Max</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Strategia konwersji zaawansowana</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-600">Wsparcie priorytetowe</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInView>
          </div>

          <FadeInView delay={250}>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-12">
              <p className="text-center text-gray-700">
                <strong>Poza opłatą za zarządzanie:</strong> Budżet na kliknięcia (kosten) pokrywasz osobno bezpośrednio na koncie Google Ads. My optymalizujemy każdy złoty.
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
                Branże, którym pomagamy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Doświadczenie w kampaniach Google Ads dla różnych sektorów biznesu.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FadeInView delay={100}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">E-commerce</h3>
                <p className="text-gray-700">
                  Shopping Ads, remarketing produktów, konwersja sprzedaży. Zwiększamy średnią wartość zamówienia.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={150}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Usługi profesjonalne</h3>
                <p className="text-gray-700">
                  Pozyskiwanie leadów do prawników, księgowych, projektantów, firm consulting z Lublina.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={200}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Medycyna i wellness</h3>
                <p className="text-gray-700">
                  Pozyskiwanie pacjentów do klinik, gabinetów stomatologicznych, siłowni, SPA w Lublinie.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={250}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Edukacja i szkolenia</h3>
                <p className="text-gray-700">
                  Kierowanie studentów do kursów online, szkoleń, uniwersytetów i platform edukacyjnych.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={300}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real estate i nieruchomości</h3>
                <p className="text-gray-700">
                  Pozyskiwanie kupujących i najemców do nieruchomości w Lublinie z targetowaniem geograficznym.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={350}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Produkcja i B2B</h3>
                <p className="text-gray-700">
                  Pozyskiwanie kontaktów B2B, generowanie zapytań od importerów i dystrybutorów.
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
                Odpowiedzi na najczęstsze pytania o Google Ads dla firm z Lublina.
              </p>
            </div>
          </FadeInView>

          <div className="space-y-6">
            <FadeInView delay={100}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition" open>
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Czy Google Ads sprawdzi się dla mojej firmy z Lublina?</span>
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Tak! Google Ads to uniwersalne narzędzie, które działa dla e-commerce, usług profesjonalnych, edukacji i handlu detalicznego. Firma z Lublina dzięki Google Ads osiąga klientów zarówno lokalnie, jak i z całej Polski.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={150}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Ile kosztują kampanie Google Ads dla firm z Lublina?</span>
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Minimalna miesięczna inwestycja to 400 zł. Rzeczywisty koszt zależy od branży, konkurencji i Twoich celów. Średnio firmy z Lublina inwestują 1500-3000 zł miesięcznie, aby uzyskać znaczące rezultaty.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={200}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Jakie są najpopularniejsze kampanie Google Ads dla lublinskich firm?</span>
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Wśród lublinskich firm popularne są: kampanie Search (zmiana zachowania poszukiwaczy), Shopping (dla e-commerce), Display (zwiększenie świadomości marki) i YouTube Ads (dotarcie do widzów video).
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={250}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Jak szybko zobaczę rezultaty z Google Ads?</span>
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Pierwsze kliknięcia pojawiają się często w ciągu kilku godzin, ale pełne optymizowanie kampanii trwa zwykle 2-4 tygodnie. Znaczący wzrost konwersji obserwujesz zwykle po 4-6 tygodniach współpracy.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={300}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Czy mogę uruchomić kampanię Google Ads tylko dla Lublina?</span>
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Oczywiście! Możemy ograniczyć geografię kampanii do samego Lublina, Lubelszczyzny, lub całej Polski — zależy od Twoich potrzeb biznesowych i zasięgu odbiorców.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={350}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Czy dostanę dostęp do konta Google Ads?</span>
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Tak, jesteś właścicielem konta. My zarządzamy kampaniami, ty masz pełny dostęp do raportów i metryk. Przesyłamy Ci szczegółowe zestawienia na koniec każdego miesiąca.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={400}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Jakie są gwarancje efektywności kampanii?</span>
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Gwarantujemy transparentne zarządzanie budżetem, optymalizację w kierunku maksymalnego ROI i miesięczne raporty. Nie gwarantujemy konkretnej liczby konwersji (zależy od rynku), ale gwarantujemy profesjonalne działania na rzecz Twojego sukcesu.
                </p>
              </details>
            </FadeInView>

            <FadeInView delay={450}>
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  <span>Czy potrzebuję strony internetowej, aby uruchomić Google Ads?</span>
                  <span className="text-blue-600">+</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Tak, Google Ads wymaga strony docelowej (landing page). Jeśli jej nie posiadasz, pomożemy Ci ją stworzyć lub wyoptymalizować istniejącą.
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
