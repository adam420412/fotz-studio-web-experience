import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsWroclaw() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Kampanie reklamowe", path: "/performance-marketing" },
    { label: "TikTok Ads", path: "/performance-marketing/tiktok-ads" },
    { label: "TikTok Ads Wrocław", path: "/performance-marketing/tiktok-ads/wroclaw" },
  ];

  const faqItems = [
    {
      question: "Jak długo trwa kampania TikTok Ads na rynku wrocławskim?",
      answer:
        "Kampanie TikTok Ads mogą trwać od kilku dni do kilku miesięcy, w zależności od Twoich celów biznesowych. Zamiast sztywnych ram czasowych, proponujemy elastyczne podejście dostosowane do Twoich potrzeb i budżetu.",
    },
    {
      question: "Jaki jest minimalny budżet na kampanię TikTok Ads w Wrocławiu?",
      answer:
        "Minimalny budżet kampanii to 50 PLN dziennie. Jednak rekomendujemy budżet od 500-1000 PLN dziennie, aby uzyskać optymalną ilość wyświetleń i interakcji od użytkowników z Wrocławia.",
    },
    {
      question: "Czy mogę sprzedawać towary fizyczne za pośrednictwem TikTok Ads?",
      answer:
        "Absolutnie! TikTok Ads doskonale sprawdza się do sprzedaży towarów fizycznych. Możemy tworzyć kampanie, które kierują użytkowników do Twojego sklepu internetowego lub wysyłają zapytania bezpośrednie.",
    },
    {
      question: "Jak się mierzy skuteczność kampanii TikTok Ads?",
      answer:
        "Mierzymy skuteczność za pomocą KPI takich jak: liczba odsłon (impressions), współczynnik kliknięć (CTR), koszt na konwersję (CPC), wartość wygenerowanych potencjalnych klientów (lead value) oraz zwrot z inwestycji (ROI).",
    },
    {
      question: "Czy agencja Fotz.pl zajmuje się tworzeniem kreatyw na TikToka?",
      answer:
        "Tak! Nasz zespół specjalistów tworzy angażujące materiały wideo, które są zoptymalizowane dla platformy TikTok. Pracujemy nad scenariuszami, montażem wideo i dostosowaniem treści do grupy docelowej we Wrocławiu.",
    },
    {
      question: "Ile czasu zajmuje zaobserwowanie rezultatów z kampanii TikTok Ads?",
      answer:
        "Pierwsze wyniki można zaobserwować już po 3-7 dniach od uruchomienia kampanii. Jednak pełne optymalizacje i znaczące zwiększenie wyników następują po 2-3 tygodniach testowania i doskonalenia.",
    },
    {
      question: "Czy mogę kierować reklamy wyłącznie do użytkowników z Wrocławia?",
      answer:
        "Tak, TikTok Ads umożliwia precyzyjne kierowanie kampanii. Możemy ustawić reklamy wyłącznie dla użytkowników z Wrocławia lub całego województwa dolnośląskiego, a także dostosować je do demografii i zainteresowań.",
    },
    {
      question: "Jakie formaty reklam są dostępne w TikTok Ads?",
      answer:
        "Dostępne formaty to: In-Feed Ads (reklamy w głównym feed), TopView (reklama na górze), Brand Takeover (przejęcie marki), Hashtag Challenge (wyzwanie) i Brand Collaboration Ads (reklamy z influencerami).",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Reklamy TikTok Ads Wrocław — agencja kampanii TikTok | Fotz.pl"
        description="TikTok Ads Wrocław — agencja Fotz.pl. Kampanie TikTok Ads dla firm z Wrocławia. Kreacje wideo, targetowanie grupy docelowej, reklamy In-Feed. Bezpłatna konsultacja!"
        canonical="https://fotz.pl/performance-marketing/tiktok-ads/wroclaw"
      />

      <ServiceSchema
        name="Kampanie TikTok Ads Wrocław"
        description="Profesjonalne kampanie TikTok Ads dla firm z Wrocławia. Kreacje wideo, targetowanie grupy docelowej, reklamy In-Feed, TopView i Brand Takeover. Wsparcie od momentu planowania do optymalizacji kampanii."
        areaServed="Wroclaw"
        url="https://fotz.pl/performance-marketing/tiktok-ads/wroclaw"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <FAQSchema items={faqItems} />

      <div className="min-h-screen bg-white">
        <PageBreadcrumbs items={breadcrumbItems} />

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reklamy TikTok Ads Wrocław
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl">
              Zwiększ sprzedaż i buduj markę dzięki kampaniom TikTok Ads kierowanym do użytkowników z Wrocławia.
              Nasza agencja specjalizuje się w kreowaniu efektywnych reklam wideo, precyzyjnym targetowaniu
              i optymalizacji budżetu dla maksymalnego zwrotu z inwestycji.
            </p>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dlaczego TikTok Ads dla firm we Wrocławiu?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Miliony użytkowników aktywnych</h3>
                  <p className="text-gray-700">
                    TikTok ma miliardy aktywnych użytkowników na całym świecie. We Wrocławiu platforma jest szczególnie
                    popularna wśród osób w wieku 13-35 lat, co stanowi idealne odbicie lustrzane dla wielu branż.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Algorytm sprzyjający organicznie rozrastającym się kampaniom</h3>
                  <p className="text-gray-700">
                    Algorytm TikToka promuje treści na podstawie zaangażowania użytkownika, co oznacza, że dobrze wykonane
                    kampanie mogą rozwijać się organicznie i osiągać dużo szerszy zasięg niż zakładany.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Szybka konwersja na sprzedaż</h3>
                  <p className="text-gray-700">
                    TikTok to platforma zakupowa. Użytkownicy są aktywnie zainteresowani odkrywaniem nowych produktów i usług,
                    co sprawia, że kampanie sprzedażowe są niezwykle efektywne.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Niższe koszty reklamy niż na konkurencji</h3>
                  <p className="text-gray-700">
                    Koszt na tysiąc wyświetleń (CPM) na TikToku jest zazwyczaj niższy niż na Facebooku czy Instagramie,
                    co pozwala na większy zasięg za mniejszy budżet.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Usługi TikTok Ads w Wrocławiu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kreacje wideo</h3>
                <p className="text-gray-700 mb-4">
                  Nasz zespół producencki tworzy angażujące materiały wideo dostosowane do algorytmu TikToka. Każde wideo
                  jest zoptymalizowane pod względem długości, tempa, dźwięku i wizualnych haków, które przyciągają uwagę.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Targetowanie precyzyjne</h3>
                <p className="text-gray-700 mb-4">
                  Kierujemy kampanie do dokładnie definiowanej grupy docelowej we Wrocławiu, biorąc pod uwagę wiek, płeć,
                  zainteresowania, zachowania oraz inne kryteria demograficzne dla maksymalnej trafności.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reklamy In-Feed</h3>
                <p className="text-gray-700 mb-4">
                  Reklamy pojawiające się w głównym feed użytkownika TikToka. To naturalny format, który nie zakłóca
                  doświadczenia użytkownika i dlatego osiąga wysokie współczynniki zaangażowania.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">TopView i Brand Takeover</h3>
                <p className="text-gray-700 mb-4">
                  Premium formaty reklam gwarantujące wysoką widoczność. TopView wyświetla się na górze feed przez 3-5 sekund,
                  a Brand Takeover przejmuje całą stronę startową platformy.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Proces wdrożenia kampanii TikTok Ads</h2>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">1.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Konsultacja i analiza</h3>
                  <p className="text-gray-700">
                    Poznajemy Twój biznes, cele kampanii, grupę docelową i budżet. Analizujemy konkurencję oraz
                    istniejące kampanie na TikToku w Twojej branży.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">2.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Strategia i planowanie</h3>
                  <p className="text-gray-700">
                    Opracowujemy strategię kampanii uwzględniającą format reklam, targeting, budżet i harmonogram
                    wdrożenia dostosowany do Twojego rynku we Wrocławiu.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">3.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Produkcja kreatyw</h3>
                  <p className="text-gray-700">
                    Tworzymy serial materiałów wideo w zależności od Twoich potrzeb. Każde wideo jest testowane i
                    optymalizowane pod względem wydajności przed wdrożeniem.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">4.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Wdrożenie i monitoring</h3>
                  <p className="text-gray-700">
                    Uruchamiamy kampanię i stale monitorujemy jej wydajność. Analizujemy metryką i wprowadzamy
                    optymalizacje w czasie rzeczywistym.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-600 text-xl flex-shrink-0">5.</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Raportowanie i iteracja</h3>
                  <p className="text-gray-700">
                    Dostarczamy szczegółowe raporty wydajności i rekomendacje na kolejny etap. Kontinuacyjnie testujemy
                    nowe kreatywne podejścia i strategie targetowania.
                  </p>
                </div>
              </li>
            </ol>
          </section>
        </FadeInView>

        <FadeInView>
          <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-blue-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęstsze pytania o TikTok Ads w Wrocławiu</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gotów na kampanię TikTok Ads w Wrocławiu?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Skontaktuj się z naszą agencją, aby omówić Twoją kampanię. Zapewnimy bezpłatną konsultację,
              podczas której analizujemy Twoje potrzeby i możliwości na platformie TikTok.
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
