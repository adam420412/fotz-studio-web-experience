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
        description="Facebook Ads Bydgoszcz ✓ Kampanie Meta Ads dla firm z Bydgoszczy i Kujaw. Od 400 zł/mies. Bezpłatna konsultacja!"
        canonical="https://fotz.pl/performance-marketing/facebook-ads/bydgoszcz"
      />
      <BreadcrumbSchema
        items={[
          { name: "Fotz.pl", url: "https://fotz.pl" },
          { name: "Performance Marketing", url: "https://fotz.pl/performance-marketing" },
          { name: "Facebook Ads", url: "https://fotz.pl/performance-marketing/facebook-ads" },
          { name: "Bydgoszcz" }
        ]}
      />
      <ServiceSchema
        name="Facebook Ads Bydgoszcz"
        description="Profesjonalne zarządzanie kampaniami reklamowymi Facebook Ads dla firm z Bydgoszczy"
        areaServed="Bydgoszcz"
      />

      <Layout>
        <PageBreadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Performance Marketing", path: "/performance-marketing" },
            { label: "Facebook Ads", path: "/performance-marketing/facebook-ads" },
            { label: "Bydgoszcz" }
          ]}
        />

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
                  Profesjonalne kampanie Meta Ads dla firm z Bydgoszczy i Kujaw.
                  Zwiększamy sprzedaż, widzialność i ROI poprzez precyzyjnie skierowane reklamy.
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-blue-600">400 zł</div>
                    <div className="text-sm text-gray-600">od miesiąca</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-green-600">48h</div>
                    <div className="text-sm text-gray-600">pierwsze wyniki</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-purple-600">✓</div>
                    <div className="text-sm text-gray-600">certyfikowani</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
                    Bezpłatna konsultacja
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition">
                    Dowiedz się więcej
                  </button>
                </div>

                <p className="text-sm text-gray-600 mt-6">
                  ✓ Raporty miesięczne ✓ Dedykowany account manager ✓ Gwarancja zadowolenia
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dynamiczny rynek Kujawy</h3>
                  <p className="text-gray-700">
                    Bydgoszcz i Kujaw to szybko rozwijające się regiony z wieloma małymi i średnimi firm.
                    Facebook Ads pozwala nam dotrzeć do nich z precyzyjnie nacelowanymi wiadomościami.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Konkurencyjne ceny reklam</h3>
                  <p className="text-gray-700">
                    W porównaniu do Warszawy czy Wrocławia, koszty per akcji są znacznie niższe,
                    co przekłada się na lepszy ROI dla Twojej inwestycji marketingowej.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Słabsza konkurencja agencji</h3>
                  <p className="text-gray-700">
                    Mniej specjalistów od Facebook Ads w Bydgoszczy oznacza mniej konkurencji
                    i lepsze warunki dla aukcji reklam.
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
                    Krótkie wideo reklamy. Największy engagement na Instagramie i Facebooku.
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
                    Reklamy video. Największy engagement i konwersje na wszystkich platformach.
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
                        Stopniowo zwiększamy ROI poprzez ciągłą iterację i ulepszenia.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Cennik
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">START</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">400 zł</div>
                  <p className="text-sm text-gray-600 mb-6">na miesiąc</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-8">
                    <li>✓ 1 kampania</li>
                    <li>✓ Budżet do 2000 zł/mies</li>
                    <li>✓ Raport co 2 tygodnie</li>
                    <li>✓ Email support</li>
                  </ul>
                  <button className="w-full border-2 border-blue-600 text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-blue-50 transition">
                    Wybierz
                  </button>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">GROWTH</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">800 zł</div>
                  <p className="text-sm text-gray-600 mb-6">na miesiąc</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-8">
                    <li>✓ 3 kampanie</li>
                    <li>✓ Budżet do 5000 zł/mies</li>
                    <li>✓ Raport tygodniowy</li>
                    <li>✓ Telefon i email</li>
                  </ul>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition">
                    Wybierz
                  </button>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">PRO</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">1500 zł</div>
                  <p className="text-sm text-gray-600 mb-6">na miesiąc</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-8">
                    <li>✓ Nieograniczone kampanie</li>
                    <li>✓ Budżet do 15000 zł/mies</li>
                    <li>✓ Raport co 3 dni</li>
                    <li>✓ Dedykowany manager</li>
                  </ul>
                  <button className="w-full border-2 border-purple-600 text-purple-600 font-bold py-2 px-4 rounded-lg hover:bg-purple-50 transition">
                    Wybierz
                  </button>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-red-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ENTERPRISE</h3>
                  <div className="text-3xl font-bold text-red-600 mb-4">Custom</div>
                  <p className="text-sm text-gray-600 mb-6">na miesiąc</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-8">
                    <li>✓ Nieograniczone wszystko</li>
                    <li>✓ Budżet 15000+ zł/mies</li>
                    <li>✓ Raport codziennie</li>
                    <li>✓ Account manager + analityk</li>
                  </ul>
                  <button className="w-full border-2 border-red-600 text-red-600 font-bold py-2 px-4 rounded-lg hover:bg-red-50 transition">
                    Zapytaj ofertę
                  </button>
                </div>
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
                    <p className="text-gray-700">Zwiększamy sprzedaż online poprzez ukierunkowane reklamy produktów i ofert.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Usługi biznesowe</h3>
                    <p className="text-gray-700">Pozyskujemy wysokojakościowych leadów dla konsultantów i specjalistów.</p>
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
                    <p className="text-gray-700">Znajdujemy kupujących i wynajmujących dla deweloperów i pośredników.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Edukacja</h3>
                    <p className="text-gray-700">Rekrutujemy studentów do szkół, kursów i instytucji edukacyjnych.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💪</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Fitness i wellness</h3>
                    <p className="text-gray-700">Pozyskujemy członków siłowni, klubów fitness i studiów jogi.</p>
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
                      Oferujemy elastyczne pakiety od 400 zł do 1500+ zł miesięcznie.
                      Cena zależy od liczby kampanii, budżetu na reklamy i poziomu wsparcia.
                      Każdy pakiet zawiera optymalizację, raporty i dedykowaną obsługę.
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
                      Większość kampanii wykazuje pierwsze rezultaty w ciągu 48 godzin.
                      Pełne rezultaty i optymalizacja widoczne są po 2-3 tygodniach działalności kampanii.
                      Czas oczekiwania zależy od branży i budżetu.
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
                      Nie ma kar za zmianę decyzji. Wszystkie dane kampanii będą zachowane.
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
                      Nie. Możesz zacząć od niewielkiego budżetu (nawet 500 zł/mies) i skalować w miarę wzrostu.
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
                      Ale gwarantujemy, że będziemy optymalizować kampanię każdego dnia.
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
                      Pracujemy bez długoterminowych umów. Możesz pracować z nami miesiąc po miesiącu.
                      Chcemy, żebyś pracował z nami, ponieważ ceni sobie nasze usługi, nie dlatego, że musi.
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
