import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export function TikTokAdsLodz() {
  const breadcrumbs = [
    { label: "Strona glowna", path: "/" },
    { label: "Performance Marketing", path: "/performance-marketing" },
    { label: "TikTok Ads", path: "/performance-marketing/tiktok-ads" },
    { label: "Lodz", path: "/performance-marketing/tiktok-ads/lodz" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje TikTok Ads w Łodzi?",
      answer:
        "Kampania TikTok Ads w Łodzi może zaczynać się od kilkudziesięciu złotych dziennie na testach. Dla efektywnych kampanii TikTok rekomendujemy budżet minimum 500-1000 PLN dziennie. Koszt zależy od grupy docelowej, formatu reklamowego i celu kampanii. Nasza agencja dostosowuje strategie marketingową do Twojego budżetu i celów sprzedażowych.",
    },
    {
      question: "Ile TikTok płaci za 1000 wyświetleń?",
      answer:
        "Zarabianie na TikToku przez Creator Fund to osobna sprawa od kampanii TikTok Ads. Twórcy otrzymują 0,20-4 USD za 1000 wyświetleń zależnie od lokalizacji. My specjalizujemy się w reklamach TikTok Ads - zarabianiu poprzez kampanie marketingowe, które konwertują Twoją grupę docelową na klientów.",
    },
    {
      question: "Jaka jest najlepsza agencja TikTok Ads w Łodzi?",
      answer:
        "Agencja Fotz.pl to doświadczeni specjaliści od reklamy na TikToku. Nasze kampanie TikTok Ads przyniosły setkom firm w Łodzi wymierne wyniki - zwiększone zasięgi, konwersje i przychody. Zapraszamy na bezpłatną konsultację, by pokazać, jak reklama TikTok może zmienić Twój biznes.",
    },
    {
      question: "Dla jakiej branży sprawdza się reklama na TikToku w Łodzi?",
      answer:
        "Reklama na TikToku działa doskonale dla e-commerce, mody, beauty, edukacji, fitness i usług. Nasza agencja ma doświadczenie z kampaniami TikTok Ads dla wielu sektorów. Platforma jest uniwersalnym kanałem marketingowym - Social media na TikToku angażuje użytkowników niezależnie od branży.",
    },
    {
      question: "Jakie formaty reklamowe oferuje TikTok Ads?",
      answer:
        "TikTok Ads oferuje wiele formatów: In-Feed Ads (reklamy w feed), Spark Ads, TopView Ads, Hashtag Challenge, Branded Effects. Każdy format reklamowy ma inne zastosowanie - od zwiększania świadomości marki po e-commerce i konwersje. Nasza agencja dobiera formaty najlepsze dla Twojej grupy docelowej.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii TikTok Ads?",
      answer:
        "Typowa kampania TikTok Ads uruchamiana jest w 2-3 tygodnie. Proces obejmuje: analizę grupy docelowej, tworzenie materiałów wideo, konfigurację w TikTok Ads Manager i optymalizację. Nasza agencja pracuje sprawnie, by Twoja reklama na TikToku trafiła do odbiorców jak najszybciej.",
    },
    {
      question: "Czy TikTok Ads działa dla firm B2B?",
      answer:
        "Tak, reklama na TikToku może działać dla B2B, wymaga to jednak dedykowanej strategii. TikTok to przede wszystkim platforma dla Gen Z, ale rosnące grono profesjonalistów aktywnie korzysta z serwisu. Nasza agencja ma doświadczenie z kampaniami TikTok Ads dla firm B2B.",
    },
    {
      question: "Dlaczego kampania TikTok Ads nie przynosi wyników?",
      answer:
        "Nieefektywne kampanie TikTok Ads to zwykle wynik: złego targetowania grupy docelowej, słabych materiałów wideo, niewłaściwych formatów reklamowych. Reklama na TikToku wymaga ciągłej optymalizacji i testowania. Nasza agencja analizuje Twoje kampanie i proponuje ulepszenia oparte na danych.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="TikTok Ads Łódź — agencja kampanii reklamowych TikTok | Fotz.pl"
        description="Reklamy TikTok Ads Łódź — agencja Fotz.pl. Kampanie TikTok dla firm z Łodzi: In-Feed Ads, Spark Ads, kreacje wideo. Targetowanie grupy docelowej…"
        canonical="https://fotz.pl/performance-marketing/tiktok-ads/lodz"
        keywords="tiktok ads lodz, reklamy tiktok lodz, agencja tiktok ads lodz, kampanie tiktok lodz, tiktok advertising lodz, tiktok ads dla firm lodz, tiktok ads cennik lodz"
      />

      <ServiceSchema
        name="TikTok Ads Łódź"
        description="Agencja kampanii reklamowych TikTok Ads w Łodzi. Specjalizujemy się w tworzeniu kampanii, In-Feed Ads, Spark Ads i kreatywnych materiałów wideo."
        areaServed="Lodz"
        provider="Fotz"
      />

      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqItems} />

      <PageBreadcrumbs items={breadcrumbs} />

      <FadeInView>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              TikTok Ads Łódź — Kampanie Reklamowe dla Twojej Marki
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8">
              TikTok Ads Lodz — profesjonalne kampanie reklamowe TikTok dla firm z Lodza i Centralnej Polski. Dotrzemy do młodych odbiorców i zwiększamy sprzedaż. Bezpłatna konsultacja.</p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Uzyskaj bezpłatną konsultację
            </button>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Dlaczego Kampanie TikTok Ads w Łodzi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Wysoki Zasięgi Angażowania</h3>
                <p className="text-gray-700">
                  Reklama na TikToku to dostęp do milionów użytkowników. TikTok Ads Manager pozwala na precyzyjne targetowanie grupy docelowej. Kampanie TikTok osiągają wysoki engagement i konwersje dla firm z Łodzi.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Kreatywne Formaty Reklamowe</h3>
                <p className="text-gray-700">
                  In-Feed Ads, Spark Ads, TopView Ads — każdy format reklamowy otwiera nowe możliwości. Materiały wideo na TikToku przyciągają uwagę i angażują użytkowników tiktoka. Reklama na tej platformie to sztuka i nauka jednocześnie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Mierzalna Konwersja i ROI</h3>
                <p className="text-gray-700">
                  Każda kampania TikTok Ads jest optymalizowana pod wyniki. Nasza agencja monitoruje optymalizację konwersji, zasięgi i efektywność kampanii. Marketing na TikToku to proces oparty na danych i stałej poprawie.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Jakie są formaty reklam na TikToku?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-lg font-bold mb-2">In-Feed Ads</h3>
                <p className="text-gray-700">
                  Reklama pojawiająca się naturalnie w feed użytkowników. Format reklamowy idealny do budowania świadomości marki. In-Feed Ads pozwalają na pełną kreatywność i angażowanie grupy docelowej.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-lg font-bold mb-2">Spark Ads</h3>
                <p className="text-gray-700">
                  Promocja wideo przez twórców na platformie. Spark Ads to nowoczesny format reklamowy wykorzystujący oryginalną zawartość. Reklama przyciąga użytkowników tiktoka poprzez naturalne zaangażowanie.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-lg font-bold mb-2">TopView Ads</h3>
                <p className="text-gray-700">
                  Premiowa pozycja — pierwsza reklama po otwarciu aplikacji. TopView Ads gwarantuje maksymalny zasięgi dla kampanii o wysokim budżecie. Format reklamowy dla marek szukających maksymalnej widoczności.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="text-lg font-bold mb-2">Hashtag Challenge</h3>
                <p className="text-gray-700">
                  Kampanie społeczne aktywizujące użytkowników. Hashtag Challenge to doskonały format reklamowy do budowania community i wzmacniania świadomości marki na platformie social media.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="text-lg font-bold mb-2">Branded Effects</h3>
                <p className="text-gray-700">
                  Filtry AR dedykowane Twojej marce. Materiały wideo z branded effects angażują twórców. Format reklamowy tworzący viral marketing i naturalną promocję wśród użytkowników tiktoka.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="text-lg font-bold mb-2">Collection Ads</h3>
                <p className="text-gray-700">
                  Reklama e-commerce integrująca katalog produktów. Collection Ads to idealny format reklamowy dla kampanii sprzedażowych i optymalizacji konwersji w branży e-commerce.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Jakie cele zrealizujesz z kampaniami TikTok Ads w Łodzi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Świadomość Marki i Zasięgi</h3>
                  <p className="text-gray-700">
                    Reklama na TikToku dociera do milionów użytkowników. Kampanie TikTok Ads zwiększają rozpoznawalność marki wśród grupy docelowej w Łodzi. Social media marketing na tej platformie to bezpośredni dostęp do nowych potencjalnych klientów.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Generowanie Leadów i Kontaktów</h3>
                  <p className="text-gray-700">
                    Reklama TikTok Ads z clickable call-to-action. Nasza agencja optymalizuje kampanię pod pozyskiwanie zainteresowanych klientów i kontaktów. Marketing na TikToku to efektywny kanał do generowania leads dla Twojego biznesu.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Zwiększenie Sprzedaży E-commerce</h3>
                  <p className="text-gray-700">
                    Kampanie TikTok Ads z optymalizacją konwersji. Materiały wideo reklamowe kierują użytkowników do Twoich produktów. Reklama na TikToku dla e-commerce to sprawdzony sposób na wzrost przychodu i sprzedaży online.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Zaangażowanie i Interakcja</h3>
                  <p className="text-gray-700">
                    Reklama na TikToku angażuje jak żaden inny format marketingu. Kampanie TikTok Ads budują interaktywne doświadczenie i wspólnotę wokół marki. Social media na tej platformie to naturalny sposób komunikacji z audience.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold">5</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Wspołpraca Influencerów</h3>
                  <p className="text-gray-700">
                    Współpraca twórców i influencerów na TikToku. Reklama z udziałem influencerów amplifikuje zasięgi kampanii. Marketing przez influencerów buduje autentyczną relację z marką i użytkownikami tiktoka.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold">6</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Retargeting i Ponowne Dotarcie</h3>
                  <p className="text-gray-700">
                    Reklama TikTok Ads kierowana do odwiedzających. Optymalizacja konwersji poprzez ponowne dotarcie do zainteresowanych użytkowników tiktoka. Kampanie retargetingowe zwiększają szanse konwersji poprzednio zainteresowanych odbiorców.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Jak wygląda proces realizacji kampanii TikTok Ads w Łodzi?</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white font-bold text-lg">1</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Analiza i Planowanie Strategii Kampanii</h3>
                  <p className="text-gray-700 mb-2">
                    Rozpoczynamy od głębokich analiz grupy docelowej i rynku w Łodzi. Definiujemy cel kampanii, budżet i KPI. Nasza agencja opracowuje strategię marketingową na TikToku dostosowaną do Twojej branży i potrzeb biznesowych. Reklama na platformie musi być oparta na solidnym planie.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white font-bold text-lg">2</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Tworzenie Materiałów Wideo i Kreatywności</h3>
                  <p className="text-gray-700 mb-2">
                    Nasz zespół kreatywny opracowuje materiały wideo wysokiej jakości dla Twojej kampanii. Reklama na TikToku musi być zwięzła, dynamiczna i zaangażująca. Każdy format reklamowy wymaga dedykowanego podejścia kreatywnego. Tworzymy content, który angażuje użytkowników tiktoka.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white font-bold text-lg">3</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Konfiguracja w TikTok Ads Manager</h3>
                  <p className="text-gray-700 mb-2">
                    Konfigurujemy kampanię w TikTok Ads Manager z precyzją. Ustalamy targetowanie wobec grupy docelowej, budżet dziennego wydatku i formaty reklamowe. Reklama TikTok Ads wymaga eksperckich ustawień dla maksymalnych wyników. Marketing na tej platformie to umiejętność pracy z zaawansowanymi narzędziami.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white font-bold text-lg">4</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Uruchomienie i Ciągłe Monitorowanie Wydajności</h3>
                  <p className="text-gray-700 mb-2">
                    Aktywujemy kampanię i stale monitorujemy wyniki w TikTok Ads Manager. Reklama na TikToku wymaga ciągłej obserwacji zasięgi, angażowania użytkowników i konwersji. Optymalizacja kampanii to kluczowy element pracy agencji. Marketing na platformie wymaga aktywnego zarządzania.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white font-bold text-lg">5</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Raportowanie i Ciągła Optymalizacja Konwersji</h3>
                  <p className="text-gray-700 mb-2">
                    Dostarczamy szczegółowe raporty z wynikami kampanii TikTok Ads. Nieustannie optymalizujemy reklamę wobec danych, poprawiając konwersję i obniżając koszt pozyskania klienta. Marketing na platformie to proces iteracyjny i data-driven. Nasza agencja wspomaga Ci na każdym etapie kampanii.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Dlaczego wybrać agencję Fotz do prowadzenia TikTok Ads w Łodzi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Doświadczenie i Ekspertyza w TikTok Ads</h3>
                <p className="text-gray-700">
                  Nasza agencja ma wieloletnie doświadczenie w prowadzeniu kampanii TikTok Ads dla różnych branż. Znamy platformę, jej algorytmy i najnowsze trendy w reklamie na TikToku. Social media marketing to nasza specjalność.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Strategie Dostosowane do Twojego Biznesu</h3>
                <p className="text-gray-700">
                  Każda kampania TikTok Ads jest unikalna. Reklama na TikToku wymaga dopasowania do specyfiki Twojej branży i grupy docelowej. Stworzymy strategię marketingu idealną dla Twojego biznesu i celów sprzedażowych.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Zespół Kreatywny i Produkcja Wideo</h3>
                <p className="text-gray-700">
                  Nasze materiały wideo są profesjonalne i zaangażujące. Reklama na TikToku to sztuka — tworzymy content, który angażuje użytkowników tiktoka i osiąga cele kampanii. Każdy materiał wideo to efekt współpracy specjalistów.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Transparentne Raporty i Metryk</h3>
                <p className="text-gray-700">
                  Dostarczamy jasne raporty z wynikami kampanii TikTok Ads. Znasz dokładnie, jak nasza reklama na TikToku wpłynęła na Twój biznes — zasięgi, konwersję, angażowanie i ROI. Marketing to inwestycja - pokazujemy zwrot.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Optymalizacja Pod Wyniki i Konwersje</h3>
                <p className="text-gray-700">
                  Reklama na TikToku to ciągły proces optymalizacji. Nasza agencja nieustannie doskonali kampanie, aby maksymalizować konwersję i minimalizować koszty. Marketing na platformie wymaga stałych ulepszeń i A/B testowania.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Support i Konsultacje na Każdym Etapie</h3>
                <p className="text-gray-700">
                  Jesteśmy zawsze dostępni dla naszych klientów. Marketing na TikToku to dynamiczny proces — odpowiadamy na pytania i udzielamy porad w każdym kroku kampanii. Nasza agencja to Twój partner w sukcesie na platformie.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Najczęstsze pytania o TikTok Ads Łódź</h2>
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <details key={idx} className="bg-gray-50 p-6 rounded-lg group">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg">
                    <span>{item.question}</span>
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">TikTok Ads w Innych Miastach Polski</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/performance-marketing/tiktok-ads/warszawa" className="text-blue-600 hover:underline font-semibold">
                TikTok Ads Warszawa
              </Link>
              <Link to="/performance-marketing/tiktok-ads/krakow" className="text-blue-600 hover:underline font-semibold">
                TikTok Ads Kraków
              </Link>
              <Link to="/performance-marketing/tiktok-ads/wroclaw" className="text-blue-600 hover:underline font-semibold">
                TikTok Ads Wrocław
              </Link>
              <Link to="/performance-marketing/tiktok-ads/poznan" className="text-blue-600 hover:underline font-semibold">
                TikTok Ads Poznań
              </Link>
              <Link to="/performance-marketing/tiktok-ads/gdansk" className="text-blue-600 hover:underline font-semibold">
                TikTok Ads Gdańsk
              </Link>
              <Link to="/performance-marketing/tiktok-ads/katowice" className="text-blue-600 hover:underline font-semibold">
                TikTok Ads Katowice
              </Link>
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
