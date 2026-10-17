import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function FacebookAdsSzczecin() {
  return (
    <>
      <SEOHead
        title="Agencja Facebook Ads Szczecin — reklamy Meta dla firm | Fotz.pl"
        description="Facebook Ads Szczecin ✓ Kampanie Meta Ads dla firm ze Szczecina i Zachodniopomorskiego, prowadzone zdalnie z Poznania. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/facebook-ads/szczecin"
        keywords="facebook ads szczecin, meta ads szczecin, reklamy facebook szczecin, agencja facebook ads szczecin, kampanie facebook szczecin, instagram ads szczecin, facebook ads dla firm szczecin, reklama na facebooku szczecin, meta ads agencja szczecin, facebook ads cennik szczecin"
      />
      <BreadcrumbSchema items={[
          { name: "Fotz.pl", url: "https://www.fotz-studio.pl" },
          { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
          { name: "Facebook Ads", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads" },
          { name: "Szczecin", url: "https://www.fotz-studio.pl" }
        ]}/>
      <ServiceSchema
        name="Facebook Ads Szczecin"
        description="Profesjonalne zarządzanie kampaniami reklamowymi Facebook Ads dla firm z Szczecina"
        areaServed="Szczecin"
      />

      <Layout>
        <PageBreadcrumbs items={[
            { name: "Home", path: "/" },
            { name: "Performance Marketing", path: "/performance-marketing" },
            { name: "Facebook Ads", path: "/uslugi/reklama-facebook" },
            { name: "Szczecin", url: "https://www.fotz-studio.pl" }
          ]}/>

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <FadeInView>
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Agencja Facebook Ads w Szczecinie
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Facebook Ads Szczecin — profesjonalne kampanie Meta Ads i reklamy Facebook dla firm z Szczecina i Zachodniopomorskiego. Pracujemy z Poznania, a firmy ze Szczecina obsługujemy zdalnie: planujemy kampanie, przygotowujemy kreacje i optymalizujemy targetowanie. Bezpłatna konsultacja i wycena kampanii.
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-blue-600">✓</div>
                    <div className="text-sm text-gray-600">wycena po rozmowie</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-green-600">✓</div>
                    <div className="text-sm text-gray-600">kreacje i kampanie</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-purple-600">✓</div>
                    <div className="text-sm text-gray-600">obsługa zdalna</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
                    Bezpłatna konsultacja
                  </a>
                  <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition">
                    Zapytaj o szczegóły
                  </a>
                </div>

                <p className="text-sm text-gray-600 mt-6">
                  ✓ Raporty z kampanii ✓ Stały kontakt ✓ Budżet reklamowy płacony Meta osobno
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* WHY FACEBOOK ADS IN SZCZECIN */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Dlaczego Facebook Ads w Szczecinie?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dosięgnij odbiorców lokalnie</h3>
                  <p className="text-gray-700">
                    Facebook Ads pozwala kierować reklamy w Szczecinie i Zachodniopomorskiem
                    precyzyjnie — według lokalizacji, wieku i zainteresowań — do osób zainteresowanych
                    Twoją branżą w tym obszarze.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Kontrola budżetu</h3>
                  <p className="text-gray-700">
                    Budżet ustalasz sam i możesz go zmieniać w trakcie kampanii.
                    Koszt wyniku zależy od branży, oferty i jakości kreacji — sprawdzamy go w testach.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Relacje z klientami</h3>
                  <p className="text-gray-700">
                    Facebook i Instagram to kanały, w których możesz regularnie pokazywać ofertę
                    i budować relacje z potencjalnymi klientami.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Testy zamiast zgadywania</h3>
                  <p className="text-gray-700">
                    Porównujemy warianty kreacji i grup odbiorców,
                    a budżet przesuwamy na te, które w Twoim przypadku działają lepiej.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FACEBOOK ADS FORMATS */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Formaty reklam Facebook Ads
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Feed Ads</h3>
                  <p className="text-gray-700">
                    Reklamy wyświetlane bezpośrednio w kanale newsfeed. Dobrze sprawdzają się m.in. w e-commerce.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stories Ads</h3>
                  <p className="text-gray-700">
                    Pełnoekranowe reklamy w Stories. Idealne do budowania świadomości marki i interakcji.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Reels Ads</h3>
                  <p className="text-gray-700">
                    Krótkie, pionowe reklamy wideo wyświetlane między rolkami na Instagramie i Facebooku.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Carousel Ads</h3>
                  <p className="text-gray-700">
                    Karuzela produktów lub ofert. Perfekt do katalogów i multi-offer campaigns.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Video Ads</h3>
                  <p className="text-gray-700">
                    Reklamy wideo w różnych długościach i formatach — od krótkich ujęć po dłuższe materiały.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Ads</h3>
                  <p className="text-gray-700">
                    Reklamy zbierające dane kontaktowe bez opuszczania Facebooka. Perfekt do lead gen.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* 5-STEP PROCESS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Nasz 5-etapowy proces
              </h2>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Analiza i strategia</h3>
                      <p className="text-gray-700">
                        Analizujemy Twój biznes, konkurencję i odbiorców.
                        Tworzymy strategię kampanii dostosowaną do Twoich celów.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Tworzenie kreatywów</h3>
                      <p className="text-gray-700">
                        Projektujemy przyciągające wzrok grafiki i filmy.
                        Przygotowujemy teksty reklam dopasowane do odbiorców.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Uruchomienie kampanii</h3>
                      <p className="text-gray-700">
                        Ustawiamy segmentację odbiorców i budżet.
                        Uruchamiamy kampanię i monitorujemy pierwsze wyniki.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Optymalizacja</h3>
                      <p className="text-gray-700">
                        Testujemy różne warianty i odbiorców.
                        Wprowadzamy kolejne poprawki na podstawie danych z kampanii.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                        5
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Raportowanie i skalowanie</h3>
                      <p className="text-gray-700">
                        Przygotowujemy raporty z kluczowymi metrykami.
                        Skalujemy to, co działa najlepiej.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Od czego zależy wycena
              </h2>
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Nie publikujemy stałych pakietów cenowych. Wycenę obsługi kampanii przygotowujemy po rozmowie o zakresie.
                Budżet reklamowy płacisz bezpośrednio Meta — zawsze osobno od wynagrodzenia za obsługę.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Liczba kampanii</h3>
                  <p className="text-sm text-gray-700">Ile kampanii, grup odbiorców i celów (sprzedaż, leady, zasięg) prowadzimy równolegle.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kreacje</h3>
                  <p className="text-sm text-gray-700">Czy korzystamy z Twoich materiałów, czy przygotowujemy grafiki, teksty i wideo od podstaw.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pomiar i konfiguracja</h3>
                  <p className="text-sm text-gray-700">Stan Piksela Meta, zdarzeń konwersji i katalogu produktów — czasem trzeba je najpierw uporządkować.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-red-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Raportowanie</h3>
                  <p className="text-sm text-gray-700">Częstotliwość raportów i spotkań podsumowujących ustalamy razem w ofercie.</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <a href="/kontakt" className="inline-flex min-h-11 items-center justify-center text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
                  Zapytaj o wycenę
                </a>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Branże, z którymi pracujemy
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏢</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">E-commerce</h3>
                    <p className="text-gray-700">Prowadzimy reklamy produktowe i kampanie sprzedażowe dla sklepów online.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Usługi biznesowe</h3>
                    <p className="text-gray-700">Prowadzimy kampanie pozyskujące zapytania dla konsultantów, prawników i doradców.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Medycyna i zdrowie</h3>
                    <p className="text-gray-700">Budujemy świadomość klinik, gabinetów i praktyk medycznych w lokalnym obszarze.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🍽️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">HoReCa i restauracje</h3>
                    <p className="text-gray-700">Promujemy restauracje, kawiarnie i puby w ich okolicy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏠</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Nieruchomości</h3>
                    <p className="text-gray-700">Prowadzimy kampanie dla deweloperów i agentów nieruchomości.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Edukacja</h3>
                    <p className="text-gray-700">Prowadzimy kampanie rekrutacyjne dla szkół i kursów — np. kampanię Meta Ads dla Dawid EDU.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💪</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Fitness i wellness</h3>
                    <p className="text-gray-700">Promujemy siłownie, kluby fitness i studia jogi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">✂️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Usługi osobiste</h3>
                    <p className="text-gray-700">Promujemy salony fryzjerskie, zabiegi kosmetyczne i usługi beauty.</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Najczęściej zadawane pytania
              </h2>

              <div className="max-w-3xl mx-auto space-y-4">
                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-bold text-gray-900 hover:bg-gray-50">
                    <span>Ile kosztuje zarządzanie kampaniami Facebook Ads?</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Wycenę przygotowujemy po rozmowie o zakresie.
                      Koszt obsługi zależy od liczby kampanii, przygotowania kreacji, konfiguracji pomiaru i częstotliwości raportów.
                      Budżet reklamowy płacisz bezpośrednio Meta — zawsze osobno.
                    </p>
                  </div>
                </details>

                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-bold text-gray-900 hover:bg-gray-50">
                    <span>Jak szybko zobaczę wyniki?</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Pierwsze dane (wyświetlenia, kliknięcia) pojawiają się krótko po starcie kampanii,
                      ale na wnioski i optymalizację potrzeba czasu na zebranie danych.
                      Nie obiecujemy sztywnego terminu efektów — zależy on od branży, oferty i budżetu.
                    </p>
                  </div>
                </details>

                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-bold text-gray-900 hover:bg-gray-50">
                    <span>Czy mogę wznowić kampanię, jeśli ją zawieszę?</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Tak. Kampanię można wstrzymać, wznowić lub zmodyfikować.
                      Dane kampanii pozostają na Twoim koncie reklamowym.
                    </p>
                  </div>
                </details>

                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-bold text-gray-900 hover:bg-gray-50">
                    <span>Jakie metryki będę śledzić w raportach?</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Raporty zawierają: liczbę wyświetleń, kliki, konwersje, CPC, CTR, ROAS i ROI.
                      Dostarczamy również analizę demograficzną odbiorców i najlepiej działających kreatywów.
                      Wszystko w czytelnym formacie z rekomendacjami.
                    </p>
                  </div>
                </details>

                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-bold text-gray-900 hover:bg-gray-50">
                    <span>Czy potrzebuję dużego budżetu na start?</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Nie zawsze. Budżet dobieramy do celu, branży i zasięgu kampanii, a potem skalujemy w miarę wyników.
                      Najpierw testujemy na mniejszej skali, aby znaleźć to, co działa.
                      Dopiero wtedy zwiększamy budżet na zwycięskie kampanie.
                    </p>
                  </div>
                </details>

                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-bold text-gray-900 hover:bg-gray-50">
                    <span>Czy zagwarantujecie mi konkretne wyniki?</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Nie gwarantujemy konkretnych wyników, bo zależą one od rynku, oferty i budżetu.
                      Odpowiadamy za uzgodniony zakres prac i regularną optymalizację kampanii.
                      Jeśli kampania nie przynosi rezultatów, wspólnie szukamy przyczyn i dokonujemy zmian.
                    </p>
                  </div>
                </details>

                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-bold text-gray-900 hover:bg-gray-50">
                    <span>Ile czasu trwa umowa?</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Okres współpracy i warunki wypowiedzenia ustalamy indywidualnie i zapisujemy w umowie.
                    </p>
                  </div>
                </details>

                <details className="group border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between bg-white p-6 font-bold text-gray-900 hover:bg-gray-50">
                    <span>Czy mogę zmienić strategię w trakcie kampanii?</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Oczywiście. Facebook Ads to elastyczne narzędzie. Możemy zmienić kreatywę, odbiorców,
                      budżet i cel kampanii w dowolnym momencie. Dobrze jest testować i iterować.
                    </p>
                  </div>
                </details>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <ContactSection />
      </Layout>
    </>
  );
}
