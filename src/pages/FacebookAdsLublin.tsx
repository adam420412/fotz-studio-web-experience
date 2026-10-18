import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function FacebookAdsLublin() {
  return (
    <>
      <SEOHead
        title="Agencja Facebook Ads Lublin — reklamy Meta dla firm | Fotz.pl"
        description="Facebook Ads Lublin ✓ Kampanie Meta Ads dla firm z Lublina i Lubelszczyzny — zdalnie z Poznania. Bezpłatna konsultacja!"
        canonical="https://www.fotz-studio.pl/performance-marketing/facebook-ads/lublin"
        keywords="facebook ads lublin, meta ads lublin, reklamy facebook lublin, agencja facebook ads lublin, kampanie facebook lublin, instagram ads lublin, facebook ads dla firm lublin, reklama na facebooku lublin, meta ads agencja lublin, facebook ads cennik lublin"
      />
      <BreadcrumbSchema items={[
          { name: "Fotz.pl", url: "https://www.fotz-studio.pl" },
          { name: "Performance Marketing", url: "https://www.fotz-studio.pl/performance-marketing" },
          { name: "Facebook Ads", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads" },
          { name: "Lublin", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads/lublin" }
        ]}/>
      <ServiceSchema
        name="Facebook Ads Lublin"
        description="Profesjonalne zarządzanie kampaniami reklamowymi Facebook Ads dla firm z Lublina"
        areaServed="Lublin"
      />

      <Layout>
        <PageBreadcrumbs items={[
            { name: "Home", path: "/" },
            { name: "Performance Marketing", path: "/performance-marketing" },
            { name: "Facebook Ads", path: "/uslugi/reklama-facebook" },
            { name: "Lublin", url: "/performance-marketing/facebook-ads/lublin" }
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
                  Agencja Facebook Ads dla firm z Lublina
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Facebook Ads Lublin — kampanie Meta Ads i reklamy Facebook dla firm z Lublina i Lubelszczyzny. Pracujemy z Poznania, a firmy z Lublina obsługujemy zdalnie. Stawiamy na precyzyjne targetowanie i dopracowane kreacje. Bezpłatna konsultacja i wycena kampanii.
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-blue-600">Meta</div>
                    <div className="text-sm text-gray-600">Facebook i Instagram</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-green-600">Kreacje</div>
                    <div className="text-sm text-gray-600">grafika i wideo</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-purple-600">Zdalnie</div>
                    <div className="text-sm text-gray-600">z Poznania</div>
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
                  ✓ Raporty miesięczne ✓ Stały opiekun kampanii ✓ Budżet reklamowy rozliczany osobno
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* WHY FACEBOOK ADS IN LUBLIN */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Dlaczego Facebook Ads w Lublinie?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dużo młodych użytkowników</h3>
                  <p className="text-gray-700">
                    Lublin jest miastem akademickim ze znaczną populacją studentów i młodych profesjonalistów.
                    To idealna grupa docelowa dla reklam na Facebooku i Instagramie.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Konkurencyjne koszty reklam</h3>
                  <p className="text-gray-700">
                    Koszt dotarcia zależy od konkurencji w aukcji — przy precyzyjnie zawężonym
                    targetowaniu lokalnym można testować więcej wariantów reklam w ramach budżetu.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Szybko rozwijający się rynek</h3>
                  <p className="text-gray-700">
                    Lublin to duży ośrodek akademicki i biznesowy wschodniej Polski,
                    w którym działa wiele firm usługowych, handlowych i technologicznych.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Precyzyjne targetowanie lokalne</h3>
                  <p className="text-gray-700">
                    Reklamy można zawęzić do Lublina, wybranych dzielnic lub całej Lubelszczyzny,
                    tak by budżet trafiał do osób z realnego obszaru Twojej obsługi.
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
                    Reklamy w kanale newsfeed. Doskonałe dla e-commerce, usług i budowania świadomości.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stories Ads</h3>
                  <p className="text-gray-700">
                    Pełnoekranowe reklamy. Dobrze sprawdzają się u młodszych odbiorców i na urządzeniach mobilnych.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Reels Ads</h3>
                  <p className="text-gray-700">
                    Krótkie wideo w pionie. Format, w którym dobrze sprawdzają się dynamiczne kreacje na Instagramie i Facebooku.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Carousel Ads</h3>
                  <p className="text-gray-700">
                    Karuzela produktów. Idealne do katalogów e-commerce i multi-offer kampanii.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Video Ads</h3>
                  <p className="text-gray-700">
                    Reklamy video. Dobre do opowiedzenia o produkcie lub usłudze i budowania grup remarketingowych.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Ads</h3>
                  <p className="text-gray-700">
                    Formularze bez opuszczania Facebooka. Idealne do pozyskiwania leads.
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
                        Analizujemy Twój biznes, konkurentów i docelowych klientów.
                        Opracowujemy spersonalizowaną strategię kampanii.
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
                        Projektujemy grafiki i filmy, które przyciągają uwagę.
                        Piszemy teksty, które mają zamieniać odwiedzających w klientów.
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
                        Konfigurujemy targeting i budżet kampanii.
                        Uruchamiamy kampanię i monitorujemy początkowe wyniki.
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
                        Testujemy różne warianty i segmenty.
                        Na podstawie danych wprowadzamy zmiany, by poprawiać wyniki kampanii.
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
                        Dostarczamy raporty miesięczne z pełnymi metrykami.
                        Skalujemy kampanie, które generują najlepsze wyniki.
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
                Od czego zależy wycena
              </h2>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zakres kampanii</h3>
                  <p className="text-gray-700">Liczba kampanii i grup odbiorców, cel (sprzedaż, leady, zasięg) oraz częstotliwość raportowania.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kreacje</h3>
                  <p className="text-gray-700">Czy przygotowujemy grafiki, wideo i teksty reklam, czy pracujemy na materiałach od Ciebie.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analityka</h3>
                  <p className="text-gray-700">Konfiguracja Pixela, Conversions API i zdarzeń konwersji oraz integracja z CRM lub sklepem.</p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Budżet reklamowy osobno</h3>
                  <p className="text-gray-700">Budżet płacony Meta za wyświetlenia reklam jest zawsze osobną pozycją, rozliczaną bezpośrednio z platformą.</p>
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
                Branże, dla których przygotowujemy kampanie
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏢</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">E-commerce</h3>
                    <p className="text-gray-700">Kampanie produktowe, katalogowe i promujące oferty sklepów online.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Usługi biznesowe</h3>
                    <p className="text-gray-700">Kampanie leadowe dla konsultantów, doradców i agencji.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Medycyna i zdrowie</h3>
                    <p className="text-gray-700">Kampanie dla klinik, gabinetów lekarskich i praktyk medycznych z Lublina — z uwzględnieniem zasad reklamy usług medycznych.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🍽️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">HoReCa i restauracje</h3>
                    <p className="text-gray-700">Kampanie lokalne dla restauracji, kawiarni i pubów.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🏠</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Nieruchomości</h3>
                    <p className="text-gray-700">Kampanie dla pośredników i deweloperów szukających kupujących i najemców.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Edukacja</h3>
                    <p className="text-gray-700">Kampanie rekrutacyjne dla szkół, uczelni i kursów — np. kampania Meta Ads dla Dawid EDU. Lublin to duży ośrodek akademicki.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">💪</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Fitness i wellness</h3>
                    <p className="text-gray-700">Kampanie pozyskujące członków siłowni, klubów fitness i studiów jogi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-2xl">✂️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Usługi osobiste</h3>
                    <p className="text-gray-700">Kampanie dla salonów fryzjerskich, gabinetów kosmetycznych i usług beauty.</p>
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
                      Wycenę przygotowujemy po rozmowie o zakresie. Zależy ona od liczby kampanii,
                      zakresu kreacji, konfiguracji analityki i częstotliwości raportowania.
                      Budżet reklamowy płacony Meta jest zawsze osobną pozycją.
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
                      Kampania zaczyna zbierać dane od dnia uruchomienia, a pierwsze tygodnie to zwykle faza
                      nauki algorytmu i testów. Tempo pozyskiwania zapytań zależy od branży, oferty,
                      budżetu i strony docelowej — dlatego nie podajemy sztywnego terminu efektów.
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
                      Absolutnie. Możesz wznowić, zawiesić lub zmodyfikować kampanię w dowolnym momencie.
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
                      Nie możemy zagwarantować konkretnych wyników, bo zależą od rynku, oferty i budżetu.
                      Regularnie analizujemy dane i optymalizujemy kampanię.
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
                      Okres współpracy i warunki wypowiedzenia ustalamy w umowie przed startem kampanii,
                      tak aby były jasne dla obu stron.
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
