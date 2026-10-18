import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function FacebookAdsRzeszow() {
  return (
    <>
      <SEOHead
        title="Agencja Facebook Ads Rzeszów — reklamy Meta dla firm | Fotz.pl"
        description="Facebook Ads Rzeszów ✓ Kampanie Meta Ads dla firm z Rzeszowa i Podkarpacia. Wycena po rozmowie o zakresie. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/facebook-ads/rzeszow"
        keywords="facebook ads rzeszow, meta ads rzeszow, reklamy facebook rzeszow, agencja facebook ads rzeszow, kampanie facebook rzeszow, instagram ads rzeszow, facebook ads dla firm rzeszow, reklama na facebooku rzeszow, meta ads agencja rzeszow, facebook ads cennik rzeszow"
      />
      <BreadcrumbSchema items={[
          { name: "Fotz.pl", url: "https://www.fotz-studio.pl" },
          { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
          { name: "Facebook Ads", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads" },
          { name: "Rzeszów", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads/rzeszow" }
        ]}/>
      <ServiceSchema
        name="Facebook Ads Rzeszów"
        description="Profesjonalne zarządzanie kampaniami reklamowymi Facebook Ads dla firm z Rzeszowa"
        areaServed="Rzeszow"
      />

      <Layout>
        <PageBreadcrumbs items={[
            { name: "Home", path: "/" },
            { name: "Performance Marketing", path: "/performance-marketing" },
            { name: "Facebook Ads", path: "/uslugi/reklama-facebook" },
            { name: "Rzeszów", url: "/performance-marketing/facebook-ads/rzeszow" }
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
                  Agencja Facebook Ads w Rzeszowie
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Facebook Ads Rzeszow — profesjonalne kampanie Meta Ads i reklamy Facebook dla firm z Rzeszowa i Podkarpacia. Planujemy kampanie, przygotowujemy kreacje i optymalizujemy targetowanie na podstawie danych. Pracujemy z Poznania, a firmy z Rzeszowa obsługujemy zdalnie. Bezpłatna konsultacja i wycena kampanii.
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
                    <div className="text-sm text-gray-600">pracujemy z Poznania</div>
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
                  ✓ Raporty miesięczne ✓ Dedykowany opiekun ✓ Współpraca zdalna
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* WHY FACEBOOK ADS IN RZESZOW */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Dlaczego Facebook Ads w Rzeszowie?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Rozwijający się rynek</h3>
                  <p className="text-gray-700">
                    Rzeszów to dynamiczne miasto z nowoczesnym biznesem i przedsiębiorcami.
                    To dobre miejsce do promowania produktów i usług na Podkarpaciu.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Budżet dopasowany do celu</h3>
                  <p className="text-gray-700">
                    Koszt dotarcia zależy od branży, grupy odbiorców i konkurencji.
                    Sprawdzamy go w testach i dopiero potem zwiększamy budżet na to, co działa.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Zaangażowani użytkownicy</h3>
                  <p className="text-gray-700">
                    Mieszkańcy Rzeszowa i Podkarpacia korzystają z Facebooka i Instagrama na co dzień.
                    Dobrze dobrana kreacja pozwala dotrzeć do nich tam, gdzie spędzają czas.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Precyzyjne targetowanie lokalne</h3>
                  <p className="text-gray-700">
                    Reklamy można kierować do mieszkańców Rzeszowa, okolicznych gmin lub całego Podkarpacia.
                    Dzięki temu budżet trafia do osób, które realnie mogą zostać Twoimi klientami.
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
                    Reklamy w newsfeed. Najczęstszy format, doskonały dla budowania zaangażowania i sprzedaży.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stories Ads</h3>
                  <p className="text-gray-700">
                    Pełnoekranowe reklamy. Dobre do budowania świadomości marki, szczególnie wśród młodszych użytkowników.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Reels Ads</h3>
                  <p className="text-gray-700">
                    Krótkie reklamy video na Instagramie i Facebooku. Format, w którym łatwo przyciągnąć uwagę.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Carousel Ads</h3>
                  <p className="text-gray-700">
                    Karuzela zdjęć lub produktów. Idealne do e-commerce i katalogów produktów.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Video Ads</h3>
                  <p className="text-gray-700">
                    Profesjonalne reklamy video, które pokazują produkt lub usługę w działaniu.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Ads</h3>
                  <p className="text-gray-700">
                    Formularze bez opuszczania Facebooka. Doskonałe do zbierania leads dla biznesu.
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
                        Głębokie badanie Twojego biznesu, konkurencji i docelowych klientów.
                        Opracowujemy szczegółową strategię kampanii.
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
                        Projektujemy nowoczesne grafiki i filmy, które przyciągają uwagę.
                        Piszemy teksty nastawione na sprzedaż.
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
                        Ustawiamy precyzyjny targeting i budżet kampanii.
                        Uruchamiamy kampanię i obserwujemy początkowe wyniki.
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
                        Eksperymentujemy z różnymi wariantami i segmentami odbiorców.
                        Na podstawie danych poprawiamy wyniki kampanii.
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
                        Dostarczamy szczegółowe raporty miesięczne ze wszystkimi metrykami.
                        Skalujemy kampanie, które generują najlepszy zwrot z inwestycji.
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
                Od czego zależy wycena?
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Liczba kampanii</h3>
                  <p className="text-sm text-gray-700">Ile kampanii, grup odbiorców i celów (sprzedaż, leady, zasięg) prowadzimy równolegle.</p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kreacje</h3>
                  <p className="text-sm text-gray-700">Czy przygotowujemy grafiki i video, czy pracujemy na Twoich materiałach.</p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Raportowanie</h3>
                  <p className="text-sm text-gray-700">Jak często raportujemy i spotykamy się, aby omówić wyniki.</p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-red-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Budżet reklamowy</h3>
                  <p className="text-sm text-gray-700">Płacisz go bezpośrednio Meta — zawsze osobno od opłaty za obsługę. Jego wysokość dobieramy wspólnie.</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <p className="text-gray-700 mb-6">Wycenę przygotowujemy po rozmowie o zakresie i celach kampanii.</p>
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
                Dla jakich branż przygotowujemy kampanie
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏢</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">E-commerce</h3>
                    <p className="text-gray-700">Zwiększamy sprzedaż online dzięki kampaniom skierowanym do potencjalnych klientów.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Usługi biznesowe</h3>
                    <p className="text-gray-700">Pozyskujemy zapytania dla konsultantów, doradców i specjalistów.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Medycyna i zdrowie</h3>
                    <p className="text-gray-700">Promujemy klinki, gabinetm lekarskie i praktyki medyczne w Rzeszowie i okolicach.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🍽️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">HoReCa i restauracje</h3>
                    <p className="text-gray-700">Zapraszamy gości do restauracji, kawiarni i pubów poprzez efektywne kampanie.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏠</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Nieruchomości</h3>
                    <p className="text-gray-700">Pozyskujemy kupujących i wynajmujących dla agentów nieruchomości i deweloperów.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Edukacja</h3>
                    <p className="text-gray-700">Rekrutujemy studentów do szkół, uniwersytetów i specjalistycznych kursów.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💪</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Fitness i wellness</h3>
                    <p className="text-gray-700">Pozyskujemy członków siłowni, klubów fitness i studiów jogi i pilatesu.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">✂️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Usługi osobiste</h3>
                    <p className="text-gray-700">Promujemy salony fryzjerskie, zabiegi kosmetyczne i profesjonalne usługi beauty.</p>
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
                      Cena obsługi zależy od liczby kampanii, przygotowania kreacji i częstotliwości raportów.
                      Budżet reklamowy płacisz bezpośrednio Meta, osobno od opłaty za obsługę.
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
                      Po zatwierdzeniu reklam przez Meta kampania zaczyna zbierać pierwsze dane.
                      Wnioski i optymalizację opieramy na wynikach z kolejnych tygodni.
                      Czas oczekiwania zależy od branży, budżetu i celu kampanii.
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
                      Nie. Możesz zacząć od niewielkiego budżetu reklamowego (płaconego bezpośrednio Meta) i skalować w miarę wzrostu.
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
                      Zobowiązujemy się natomiast regularnie analizować i optymalizować kampanię.
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
