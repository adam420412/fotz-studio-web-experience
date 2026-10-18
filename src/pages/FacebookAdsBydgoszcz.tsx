import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function FacebookAdsBydgoszcz() {
  return (
    <>
      <SEOHead
        title="Agencja Facebook Ads Bydgoszcz — reklamy Meta dla firm | Fotz.pl"
        description="Facebook Ads Bydgoszcz ✓ Kampanie Meta Ads dla firm z Bydgoszczy i Kujaw, obsługa zdalna z Poznania. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/facebook-ads/bydgoszcz"
        keywords="facebook ads bydgoszcz, meta ads bydgoszcz, reklamy facebook bydgoszcz, agencja facebook ads bydgoszcz, kampanie facebook bydgoszcz, instagram ads bydgoszcz, facebook ads dla firm bydgoszcz, reklama na facebooku bydgoszcz, meta ads agencja bydgoszcz, facebook ads cennik bydgoszcz"
      />
      <BreadcrumbSchema items={[
          { name: "Fotz.pl", url: "https://www.fotz-studio.pl" },
          { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
          { name: "Facebook Ads", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads" },
          { name: "Bydgoszcz", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads/bydgoszcz" }
        ]}/>
      <ServiceSchema
        name="Facebook Ads Bydgoszcz"
        description="Profesjonalne zarządzanie kampaniami reklamowymi Facebook Ads dla firm z Bydgoszczy"
        areaServed="Bydgoszcz"
      />

      <Layout>
        <PageBreadcrumbs items={[
            { name: "Home", path: "/" },
            { name: "Performance Marketing", path: "/performance-marketing" },
            { name: "Facebook Ads", path: "/uslugi/reklama-facebook" },
            { name: "Bydgoszcz", url: "/performance-marketing/facebook-ads/bydgoszcz" }
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
                  Agencja Facebook Ads w Bydgoszczy
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Facebook Ads Bydgoszcz — kampanie Meta Ads i reklamy Facebook dla firm z Bydgoszczy i Kujaw. Pracujemy z Poznania, a firmy z Bydgoszczy obsługujemy zdalnie. Planujemy targetowanie, przygotowujemy kreacje i optymalizujemy kampanie pod Twoje cele. Bezpłatna konsultacja i wycena kampanii.
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-blue-600">Wycena</div>
                    <div className="text-sm text-gray-600">po rozmowie o zakresie</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-green-600">Budżet</div>
                    <div className="text-sm text-gray-600">płacisz Meta osobno</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-purple-600">Zdalnie</div>
                    <div className="text-sm text-gray-600">obsługa z Poznania</div>
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
                  ✓ Raporty miesięczne ✓ Stała osoba kontaktowa ✓ Jasne zasady współpracy
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* WHY FACEBOOK ADS IN BYDGOSZCZ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Dlaczego Facebook Ads w Bydgoszczy?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Rynek lokalny i regionalny</h3>
                  <p className="text-gray-700">
                    Bydgoszcz i Kujawy to wiele małych i średnich firm oraz ich klientów.
                    Facebook Ads pozwala dotrzeć do nich z przekazem dopasowanym do lokalizacji i zainteresowań.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Kontrola budżetu</h3>
                  <p className="text-gray-700">
                    Budżet reklamowy ustalasz sam i płacisz go bezpośrednio Meta.
                    Koszt wyniku zależy od branży, grupy docelowej i konkurencji w aukcji — sprawdzamy go w testach.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Aktywni użytkownicy</h3>
                  <p className="text-gray-700">
                    Mieszkańcy Bydgoszczy i okolic aktywnie korzystają z mediów społecznościowych.
                    To idealne miejsce do budowania świadomości marki i zbierania leadów.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Precyzyjne targetowanie</h3>
                  <p className="text-gray-700">
                    Reklamy można kierować na Bydgoszcz, wybrane okolice lub cały region,
                    a także według wieku, zainteresowań i zachowań odbiorców.
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
                    Reklamy wyświetlane w kanale newsfeed. Najlepsze dla e-commerce i rosnącego zaangażowania.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stories Ads</h3>
                  <p className="text-gray-700">
                    Pełnoekranowe reklamy w Stories. Idealne do budowania świadomości i inter akcji.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Reels Ads</h3>
                  <p className="text-gray-700">
                    Krótkie reklamy wideo w formacie pionowym na Instagramie i Facebooku.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Carousel Ads</h3>
                  <p className="text-gray-700">
                    Karuzela produktów. Perfekt do katalogów i wieloproduktowych kampanii.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Video Ads</h3>
                  <p className="text-gray-700">
                    Reklamy wideo do budowania zasięgu, zaangażowania i konwersji.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Ads</h3>
                  <p className="text-gray-700">
                    Zbieranie danych kontaktowych bezpośrednio w Facebooku. Idealne do lead gen.
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
                        Analizujemy Twój biznes, konkurencję i potencjalnych klientów.
                        Tworzymy strategię kampanii dostosowaną do Twoich konkretnych celów biznesowych.
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
                        Piszemy copywriting, który przekonuje i konwertuje na klientów.
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
                        Konfigurujemy docelowe grupy odbiorców i budżet kampanii.
                        Uruchamiamy kampanię i monitorujemy wyniki od począku.
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
                        Testujemy różne warianty kreatywów i segmentów odbiorców.
                        Wyniki poprawiamy poprzez ciągłą iterację i ulepszenia.
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
                        Dostarczamy szczegółowe raporty miesięczne ze wszystkimi kluczowymi metrykami.
                        Skalujemy kampanie, które przynoszą najlepsze wyniki.
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
              <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-center">
                Nie mamy sztywnych pakietów. Wycenę przygotowujemy po rozmowie o zakresie kampanii.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Liczba kampanii</h3>
                  <p className="text-sm text-gray-700">Ile kampanii, celów i grup odbiorców prowadzimy równolegle.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Kreacje</h3>
                  <p className="text-sm text-gray-700">Ile grafik, filmów i tekstów reklamowych trzeba przygotować i jak często je odświeżamy.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Raportowanie</h3>
                  <p className="text-sm text-gray-700">Jak często raportujemy wyniki i w jakim zakresie konsultujemy strategię.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Budżet reklamowy</h3>
                  <p className="text-sm text-gray-700">Płacisz go bezpośrednio Meta, zawsze osobno od naszego wynagrodzenia.</p>
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
                    <p className="text-gray-700">Kampanie sprzedażowe i katalogowe dla produktów i ofert.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Usługi biznesowe</h3>
                    <p className="text-gray-700">Kampanie leadowe dla konsultantów i specjalistów.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Medycyna i zdrowie</h3>
                    <p className="text-gray-700">Budujemy świadomość dla klinik, gabinetów lekarskich i praktyk medycznych.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🍽️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">HoReCa i restauracje</h3>
                    <p className="text-gray-700">Zapraszamy klientów do restauracji, kawiarni i pubów poprzez atrakcyjne reklamy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏠</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Nieruchomości</h3>
                    <p className="text-gray-700">Kampanie dla deweloperów i pośredników kierowane do kupujących i wynajmujących.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Edukacja</h3>
                    <p className="text-gray-700">Kampanie rekrutacyjne dla szkół, kursów i instytucji edukacyjnych — prowadziliśmy m.in. kampanię Meta Ads dla Dawid EDU.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💪</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Fitness i wellness</h3>
                    <p className="text-gray-700">Kampanie dla siłowni, klubów fitness i studiów jogi.</p>
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
                      Wycenę przygotowujemy po rozmowie o zakresie. Zależy od liczby kampanii i grup odbiorców,
                      liczby kreacji do przygotowania oraz częstotliwości raportowania.
                      Budżet reklamowy płacony Meta jest zawsze osobno.
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
                      Pierwsze dane o wyświetleniach i kliknięciach pojawiają się zwykle krótko po starcie kampanii.
                      Wnioski o skuteczności wymagają czasu na naukę algorytmu i testy kreacji.
                      Nie obiecujemy efektów w sztywnym terminie — zależą od branży, oferty i budżetu.
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
                      Absolutnie. Możesz wznowić, zawieszić lub zmodyfikować kampanię w dowolnym momencie.
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
                      Wszystko w czytelnym formacie z rekomendacjami optymalizacyjnymi.
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
                      Nie. Możesz zacząć od niewielkiego budżetu reklamowego (płaconego Meta osobno) i skalować w miarę wyników.
                      Testujemy wszystko na małej skali najpierw, aby znaleźć to, co działa.
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
                      Nie możemy zagwarantować konkretnych wyników, bo rynek się zmienia.
                      Kampanie regularnie monitorujemy i optymalizujemy.
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
                      Okres współpracy i wypowiedzenia ustalamy w umowie.
                      Kampanie reklamowe potrzebują czasu na testy, dlatego zwykle rekomendujemy kilka miesięcy współpracy.
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
