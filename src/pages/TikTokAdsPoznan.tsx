import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsPoznan() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Kampanie reklamowe", path: "/performance-marketing" },
    { label: "TikTok Ads", path: "/performance-marketing/tiktok-ads" },
    { label: "TikTok Ads Poznań", path: "/performance-marketing/tiktok-ads/poznan" },
  ];

  const faqItems = [
    {
      question: "Jakie branże najlepiej sprawdzają się na TikTok Ads w Poznaniu?",
      answer:
        "Najlepsze rezultaty osiągają: moda i odzież, kosmetyka i uroda, elektronika konsumencka, usługi edukacyjne, restauracje i kawiarnie, fitness i wellness, oraz innowacyjne produkty techniczne. Jednak prawie każda branża może osiągnąć sukces z odpowiednią strategią.",
    },
    {
      question: "Ile czasu powinno się czekać na zwrot z inwestycji z TikTok Ads?",
      answer:
        "Typowo, przy dobrze skonfigurowanej kampanii, zwrot z inwestycji (ROI) można zaobserwować w ciągu 2-4 tygodni. Jednak pierwsze konwersje mogą pojawić się już w ciągu kilku dni od uruchomienia kampanii.",
    },
    {
      question: "Czy mogę zmienić budżet kampanii TikTok Ads w trakcie jej trwania?",
      answer:
        "Absolutnie! Budżet kampanii można dostosowywać w dowolnym momencie. Jeśli kampania osiąga dobre rezultaty, możemy zwiększyć budżet. Jeśli rezultaty są słabe, możemy zmniejszyć budżet i przetestować inne ustawienia.",
    },
    {
      question: "Jak TikTok Ads różni się od Facebooka i Instagrama?",
      answer:
        "TikTok ma inny algorytm - bardziej nastawiony na treść niż na powiązania społeczne. Formaty reklam są bardziej naturalne i pasują lepiej do zwykłych postów. Ponadto, koszty są zwykle niższe, a zaangażowanie wyższe na TikToku.",
    },
    {
      question: "Czy potrzebujemy wiele kreatyw do kampanii TikTok Ads?",
      answer:
        "Tak, rekomendujemy przygotować co najmniej 5-10 wariantów kreatyw na początku kampanii. Każdy wariant powinien testować różne haczykami, formaty, dźwięki lub przesłania. To pozwala znaleźć najlepiej działający materiał.",
    },
    {
      question: "Jakie metryki powinniśmy śledzić w kampanii TikTok Ads?",
      answer:
        "Kluczowe metryki to: liczba wyświetleń (impressions), współczynnik kliknięcia (CTR), koszt na tysiąc wyświetleń (CPM), koszt na konwersję (CPC), współczynnik konwersji (conversion rate) i zwrot z inwestycji (ROAS).",
    },
    {
      question: "Czy mogę używać istniejących postów TikToka jako reklam?",
      answer:
        "Tak, możesz promować własne posty TikToka jako reklamy. Jednak specjalnie przygotowane materiały do reklam zwykle osiągają lepsze rezultaty niż konwertowanie istniejących postów. Łączymy oba podejścia dla optymalnych rezultatów.",
    },
    {
      question: "Jak optymalizujemy kampanie TikTok Ads dla sprzedaży bezpośredniej?",
      answer:
        "Optymalizujemy kampanie dla konwersji poprzez: precyzyjne targetowanie, wyraźne wezwania do działania (CTA), kierowanie do zoptymalizowanych stron docelowych, testowanie różnych formatów reklam oraz ciągłe monitorowanie i dostosowywanie wydajności.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Reklamy TikTok Ads Poznań — agencja kampanii TikTok | Fotz.pl"
        description="TikTok Ads Poznań — agencja Fotz.pl. Kampanie TikTok Ads dla firm z Poznania. Kreacje wideo, targetowanie, reklamy In-Feed i TopView. Bezpłatna konsultacja!"
        canonical="https://fotz.pl/performance-marketing/tiktok-ads/poznan"
      />

      <ServiceSchema
        name="Kampanie TikTok Ads Poznań"
        description="Profesjonalne kampanie TikTok Ads dla firm z Poznania. Kreacje wideo, precyzyjne targetowanie, reklamy In-Feed, TopView i Brand Takeover. Kompleksowe wsparcie od planowania do optymalizacji kampanii."
        areaServed="Poznan"
        url="https://fotz.pl/performance-marketing/tiktok-ads/poznan"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <FAQSchema items={faqItems} />

      <div className="min-h-screen bg-white">
        <PageBreadcrumbs items={breadcrumbItems} />

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reklamy TikTok Ads Poznań
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl">
              Zbuduj obecność marki i napędzaj sprzedaż dzięki kampaniom TikTok Ads dla użytkowników z Poznania.
              Agencja Fotz.pl specjalizuje się w tworzeniu kreatywnych materiałów wideo, inteligentnym targetowaniu
              i optymalizacji wydajności dla maksymalnego zwrotu z inwestycji.
            </p>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Potencjał TikTok Ads w Poznaniu</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Ogromna baza użytkowników mobilnych</h3>
                  <p className="text-gray-700">
                    TikTok ma miliarly aktywnych użytkowników, a w Poznaniu platforma jest niezwykle popularna wśród
                    młodych ludzi. To idealne miejsce do dotarcia do Twojej grupy docelowej.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Bardzo zaangażowani użytkownicy</h3>
                  <p className="text-gray-700">
                    Średni czas spędzony na TikToku wynosi ponad 90 minut dziennie. Użytkownicy są bardziej zaangażowani
                    niż na jakiejkolwiek innej platformie społecznościowej.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Naturalny format reklam</h3>
                  <p className="text-gray-700">
                    Reklamy na TikToku są seamless i naturalnie wbudowane w feed. Nie są postrzegane jako intruzywne,
                    dlatego osiągają wyższe współczynniki zaangażowania.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Ekonomiczny model wydatków</h3>
                  <p className="text-gray-700">
                    Koszty reklam na TikToku są zazwyczaj niższe niż na Facebooku czy Instagramie, co pozwala zmaksymalizować
                    zasięg przy mniejszym budżecie.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nasze usługi TikTok Ads w Poznaniu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Produkcja filmów reklamowych</h3>
                <p className="text-gray-700 mb-4">
                  Tworzymy wysokiej jakości materiały wideo dostosowane do algorytmu TikToka. Każde wideo zawiera
                  elementy zapewniające wysokie zaangażowanie: szybkie przejścia, dźwięk, emocje i jasne przesłanie.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Precyzyjne targetowanie geograficzne</h3>
                <p className="text-gray-700 mb-4">
                  Kierujemy kampanie wyłącznie do użytkowników z Poznania i okolic. Możemy dodatkowo zawęzić targeting
                  na podstawie demografii, zainteresowań i zachowań dla maksymalnej trafności.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">In-Feed Ads</h3>
                <p className="text-gray-700 mb-4">
                  Reklamy pojawiające się naturalnie w feed użytkownika. To najczęściej stosowany format, który osiąga
                  świetne rezultaty zarówno w zakresie zasięgu, jak i zaangażowania.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">TopView i Brand Takeover</h3>
                <p className="text-gray-700 mb-4">
                  Premium formaty zapewniające maksymalną widoczność. TopView pojawia się na górze feed przez kilka sekund,
                  a Brand Takeover kontroluje całą stronę startową.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Etapy uruchamiania kampanii</h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">1.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Analiza biznesu i konkurencji</h3>
                  <p className="text-gray-700">
                    Poznajemy Twój biznes, cele, budżet i grupę docelową. Analizujemy konkurentów i istniejące kampanie
                    w Twojej branży na TikToku.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">2.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Opracowanie strategii</h3>
                  <p className="text-gray-700">
                    Tworzymy kompleksową strategię obejmującą format reklam, targeting, budżet, timeline i KPI.
                    Wszystko jest dostosowane do Twojego rynku w Poznaniu.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">3.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Tworzenie kreatyw</h3>
                  <p className="text-gray-700">
                    Produkujemy serie materiałów wideo przygotowanych specjalnie do TikToka. Testujemy każdy wariant
                    kreatywny i wybieramy najlepiej działające.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">4.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Uruchomienie i optymalizacja</h3>
                  <p className="text-gray-700">
                    Rozpoczynamy kampanię i natychmiast monitorujemy wydajność. Dokonujemy zmian w targetowaniu,
                    budżecie i kreatywach w oparciu o dane w czasie rzeczywistym.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">5.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Raporty i skalowanie</h3>
                  <p className="text-gray-700">
                    Dostarczamy szczegółowe raporty wydajności. Jeśli kampania osiąga dobre wyniki, pomagamy
                    skalować ją na większe budżety.
                  </p>
                </div>
              </li>
            </ol>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-blue-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ - Reklamy TikTok Ads Poznań</h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-6 last:border-b-0">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rozpocznij kampanię TikTok Ads w Poznaniu</h2>
            <p className="text-lg text-gray-700 mb-8">
              Chcesz osiągnąć użytkowników z Poznania na TikToku? Skontaktuj się z naszą agencją i omów Twoją kampanię.
              Oferujemy bezpłatną konsultację, w której przeanalizujemy Twoje możliwości.
            </p>
            <Link
              to="/performance-marketing/tiktok-ads"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Powrót do TikTok Ads
            </Link>
          </section>
        </FadeInView>

        <ContactSection />
      </div>
    </Layout>
  );
}
