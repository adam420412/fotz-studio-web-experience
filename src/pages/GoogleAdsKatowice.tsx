import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function GoogleAdsKatowice() {
  const faqItems = [
    {
      question: "Ile kosztuje Google Ads w Katowicach?",
      answer: "Google Ads w Katowicach zaczyna się od 400 zł/miesiąc za zarządzanie kampanią (pakiet START). Dodatkowy budżet reklamowy to osobna pozycja — od 500 zł/miesiąc dla małych firm do 10 000+ zł/miesiąc dla e-commerce i sieci handlowych. Całkowity koszt zależy od branży i konkurencji na słowa kluczowe w Katowicach i Górnym Śląsku.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii Google Ads w Katowicach?",
      answer: "Kampanię można uruchomić w ciągu 24-48 godzin od podpisania umowy. Obejmuje to: audit konkurencji katowickiej, badanie słów kluczowych dla Górnego Śląska, tworzenie struktury kampanii, konfigurację trackingu konwersji i wdrożenie. Pierwsze wyniki są widoczne po kilku dniach, pełna optymalizacja trwa 2-4 tygodnie.",
    },
    {
      question: "Czy w Katowicach konkurencja na Google Ads jest duża?",
      answer: "Katowice to stolica Górnego Śląska z populacją 300 tysięcy mieszkańców i aglomeracją GZM liczącą 2,5 miliona ludzi. Konkurencja jest umiarkowanaana — niższa niż w Warszawie, ale wyższa niż w mniejszych miastach. Średni CPC (koszt za kliknięcie) wynosi 2-6 zł w zależności od branży. To sprawia, że Katowice są idealnym rynkiem do testowania kampanii przed skalowaniem na całą Polskę.",
    },
    {
      question: "Jakie słowa kluczowe są popularne dla firm z Katowic?",
      answer: "Popularne słowa kluczowe to: 'agencja web Katowice', 'SEO Katowice', 'projektant graficzny Katowice', 'restauracja Katowice', 'dentysta Katowice', 'nieruchomości Katowice', 'fryzjer Katowice'. Katowice mają dynamiczną scenę biznesową, więc kampanie dla agencji, usług lokalnych i handlu działają bardzo dobrze.",
    },
    {
      question: "Czy mogę targetować reklamami tylko Katowice czy muszę brać całą Polskę?",
      answer: "Możesz targetować tylko Katowice — to jeden z największych zalet Google Ads. Jeśli prowadzisz biznes lokalny w Katowicach (fryzjer, dentyta, restauracja), możesz precyzyjnie reklamować się dla ludzi szukających takich usług w Katowicach. Możesz też rozszerzyć na sąsiednie miasta (Mikołów, Ruda Śląska, Chorzów) lub całą aglomerację GZM.",
    },
    {
      question: "Czy Google Ads będą efektywne dla mojej e-commerce z Katowic?",
      answer: "Tak — Google Ads (zwłaszcza Performance Max i Google Shopping) działają bardzo dobrze dla e-commerce. Możesz sprzedawać na całą Polskę z siedzbą w Katowicach. Wiele naszych klientów z Katowic to sklepy internetowe, które zarabiają 15-40 tyś zł miesięcznie na Google Ads.",
    },
    {
      question: "Jakie branże najczęściej korzystają z Google Ads w Katowicach?",
      answer: "Najczęściej Google Ads korzystają: usługi lokalne (fryzjerstwo, kosmetyka, dentyści), restauracje i bary, agencje web, handel elektroniczny, nieruchomości, usługi budowlane, szkoły jezykowe. Katowice mają aktywną scenę biznesową, więc wszystkie branże mogą liczyć na dobre wyniki.",
    },
    {
      question: "Czy Google Ads pomogą mi konkurować z firmami z Warszawy?",
      answer: "Tak, ale inną strategią. Firmy z Warszawy mają większy budżet, ale ty znasz lokalny rynek Katowic i Górnego Śląska lepiej. Twoją strategią powinno być: (1) dominate lokalne słowa kluczowe w Katowicach (2) skaluj na sąsiednie miasta i aglomerację (3) jeśli e-commerce — skaluj na całą Polskę. W Google Ads wygrywa ten, kto ma lepszą strategię i optymalizację, nie ten z największym budżetem.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Google Ads Katowice | Fotz Studio"
          description="Google Ads Katowice — agencja certyfikowana Fotz.pl. Kampanie od 400 zł/mies., wyniki od 24-48h, specjaliści z certyfikatem Google. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/google-ads/katowice"
          keywords="google ads katowice, kampanie google ads katowice, agencja google ads katowice, reklamy google katowice, google adwords katowice, sem katowice, google ads dla firm katowice, prowadzenie google ads katowice, google ads cennik katowice, reklama w google katowice"
        />

        <ServiceSchema
          name="Kampanie Google Ads Katowice"
          description="Tworzenie i optymalizacja kampanii Google Ads dla firm z Katowic. Agencja Fotz.pl — certyfikowani specjaliści Google Ads."
          provider="Fotz Studio"
          areaServed="Katowice"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
            { name: "Google Ads", url: "https://fotz.pl/performance-marketing/google-ads" },
            { name: "Google Ads Katowice", url: "https://fotz.pl/performance-marketing/google-ads/katowice" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", path: "/" },
            { name: "Kampanie reklamowe", path: "/performance-marketing" },
            { name: "Google Ads", path: "/performance-marketing/google-ads" },
            { name: "Katowice", path: "/performance-marketing/google-ads/katowice" },
          ]}/>

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Agencja Google Ads Katowice
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 mb-8">
                  Google Ads Katowice — profesjonalne kampanie Google Ads i reklamy w Google dla firm z Katowicea i Śląska. Zwiększamy ruch, konwersje i ROI dzięki skutecznym kampaniom SEM. Bezpłatna konsultacja.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">400 zł</div>
                  <div className="text-sm text-sky-100">Kampanie od</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">24-48h</div>
                  <div className="text-sm text-sky-100">Wyniki od</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">100%</div>
                  <div className="text-sm text-sky-100">Certyfikowani</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Raport</div>
                  <div className="text-sm text-sky-100">Co miesiąc</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Google Ads in Katowice */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Google Ads Katowice — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Katowice to stolica Górnego Śląska i drugiego co do wielkości obszaru metropolitalnego w Polsce. Populacja miasta: 300 tysięcy mieszkańców, ale co najważniejsze — aglomeracja GZM (Górnośląsko-Zagłębiowska Metropolia) liczy 2,5 miliona ludzi. To ogromny rynek z dynamiczną gospodarką i dużym potencjałem dla biznesu.
                  </p>
                  <p>
                    Górny Śląsk przechodzi transformację od tradycyjnego przemysłu do nowoczesnych sektorów — technologia, usługi biznesowe, turystyka, MICE (konferencje i eventy). Przedsiębiorcy w Katowicach i regionie aktywnie inwestują w reklamy internetowe. Konkurencja jest mniejsza niż w Warszawie, ale rynek jest dynamiczny i aktywny.
                  </p>
                  <p>
                    Średni CPC (koszt za kliknięcie) w Katowicach wynosi 2-6 zł — jest to świetny punkt do testowania strategii kampanii. W Katowicach możesz szybko sprawdzić, co działa, a potem skalować na sąsiednie miasta czy całą aglomerację. Google Ads działają szybciej niż SEO — wyniki widoczne w ciągu 24-48 godzin.
                  </p>
                  <p>
                    Katowice to także ważny hub dla MICE — konferencji, seminarów i eventów. Jeśli prowadzisz hotel, restaurację, centrum konferencyjne, lub usługi biznesowe, Google Ads to najprostsza droga do przyciągnięcia konkretnych, zainteresowanych klientów. Płacisz tylko za kliknięcia, nie za wyświetlenia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services for Katowice */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Co robimy dla firm z Katowic?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie Search</h3>
                  <p className="text-muted-foreground">
                    Reklamy tekstowe w wynikach Google dla słów kluczowych wyszukiwanych. Idealnie dla firm szukających klientów aktywnie — w momencie wyszukiwania.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Performance Max</h3>
                  <p className="text-muted-foreground">
                    Automatyczna optymalizacja kampanii we wszystkich kanałach Google. Efektywne dla e-commerce i skalowania sprzedaży.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Google Shopping</h3>
                  <p className="text-muted-foreground">
                    Produkty ze zdjęciami i cenami bezpośrednio w wynikach Google. Obowiązkowe dla e-commerce w Katowicach.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Remarketing</h3>
                  <p className="text-muted-foreground">
                    Reklamy dla osób, które już odwiedzały Twoją stronę. Konwersja 3-5x wyższa niż w kampaniach Search.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie Display</h3>
                  <p className="text-muted-foreground">
                    Banery na milionach stron internetowych. Budowanie świadomości marki i remarketing do szerszej grupy.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie lokalne Google Maps</h3>
                  <p className="text-muted-foreground">
                    Pojawianie się w Google Maps dla firm z fizyczną lokalizacją w Katowicach. Reklamy dla klientów w pobliżu.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Process */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Jak prowadzimy kampanie Google Ads w Katowicach?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brief i analiza</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, branżę, konkurencję w Katowicach i cele. Jakie słowa kluczowe wpisują Twoi potencjalni klienci? Ile jesteś gotów wydać na kampanię?
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Audyt konkurencji</h3>
                    <p className="text-muted-foreground">
                      Badamy, co robią konkurenci w Katowicach w Google Ads. Jakie słowa kluczowe kupują? Ile wydają na budżet? Jak są skonstruowane ich reklamy?
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategia i słowa kluczowe</h3>
                    <p className="text-muted-foreground">
                      Wybieramy słowa kluczowe (high intent, low competition), tworzymy strukturę kampanii, piszemy teksty reklam. Wszystko w zgodzie z Twoim budżetem.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Uruchomienie i tracking</h3>
                    <p className="text-muted-foreground">
                      Wdrażamy kampanie, konfigurujemy Google Analytics, pixel tracking i konwersje. Wszystko automatycznie mierzy się i raportuje.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">5</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optymalizacja i raportowanie</h3>
                    <p className="text-muted-foreground">
                      Co miesiąc analizujemy wyniki, testujemy, optymalizujemy. Teksty, słowa kluczowe, budżety — wszystko dostosowujemy do rzeczywistych wyników.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Pricing */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kampanie Google Ads Katowice — cennik
              </h2>
              <div className="max-w-4xl mx-auto overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left p-4 font-bold">Pakiet</th>
                      <th className="text-left p-4 font-bold">Cena obsługi</th>
                      <th className="text-left p-4 font-bold">Budżet reklamowy</th>
                      <th className="text-left p-4 font-bold">Dla kogo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border bg-background">
                      <td className="p-4 font-semibold">START</td>
                      <td className="p-4">400 zł/mies.</td>
                      <td className="p-4">500-1500 zł</td>
                      <td className="p-4">Małe firmy lokalne</td>
                    </tr>
                    <tr className="border-b border-border bg-background">
                      <td className="p-4 font-semibold">GROWTH</td>
                      <td className="p-4">800 zł/mies.</td>
                      <td className="p-4">2000-5000 zł</td>
                      <td className="p-4">Średnie firmy</td>
                    </tr>
                    <tr className="border-b border-border bg-background">
                      <td className="p-4 font-semibold">PRO</td>
                      <td className="p-4">1500+ zł/mies.</td>
                      <td className="p-4">5000+ zł</td>
                      <td className="p-4">E-commerce, sieci</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-4 font-semibold">ENTERPRISE</td>
                      <td className="p-4">% budżetu (15-20%)</td>
                      <td className="p-4">10000+ zł</td>
                      <td className="p-4">Duże firmy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
                Każdy pakiet obejmuje setup kampanii, daily optimization, raportowanie co miesiąc, A/B testy reklam i ciągłą optymalizację Quality Score.
              </p>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kampanie Google Ads dla jakich branż w Katowicach?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Agencje web i IT</h3>
                    <p className="text-sm text-muted-foreground">
                      Katowice ma rosnącą scenę IT. Google Ads dla "strony internetowe Katowice", "SEO Katowice", "programista PHP". Wysokie CPL, ale klientów z budżetem.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Dentyści i kliniki</h3>
                    <p className="text-sm text-muted-foreground">
                      "Dentysta Katowice", "implanty Katowice", "ortodonta Katowice". Reklamy lokalne klinik z mapkami i czasami otwarcia.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje i kawiarnie</h3>
                    <p className="text-sm text-muted-foreground">
                      "Restauracja Katowice", "kawa Katowice", "pizza dostawa Katowice". Kampanie Google Maps i remarketing.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">E-commerce i sklepy</h3>
                    <p className="text-sm text-muted-foreground">
                      Performance Max, Google Shopping, remarketing. Skalowanie sprzedaży online z magazynem w Katowicach.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Nieruchomości</h3>
                    <p className="text-sm text-muted-foreground">
                      "Mieszkania Katowice", "biuro do wynajęcia Katowice", "domy Górny Śląsk". Kampanie dla agencji i deweloperów.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Usługi budowlane</h3>
                    <p className="text-sm text-muted-foreground">
                      "Elektryk Katowice", "malowanie Katowice", "klimatyzacja montaż". Google Ads dla handlowców i podwykonawców.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty i SPA</h3>
                    <p className="text-sm text-muted-foreground">
                      "Salon fryzjerski Katowice", "manicure Katowice", "masaż relaksacyjny". Reklamy z rezerwacją online.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Hotele i konferencje</h3>
                    <p className="text-sm text-muted-foreground">
                      "Hotel Katowice", "sale konferencyjne Katowice", "event Górny Śląsk". Kampanie dla MICE i turystyki.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why Fotz Studio */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Dlaczego Fotz Studio jako agencja Google Ads w Katowicach?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Certyfikowani specjaliści Google</h3>
                  <p className="text-muted-foreground">
                    Nasi specjaliści posiadają certyfikat Google Ads. Mamy dostęp do beta features, nowych algorytmów i najnowszych best practices bezpośrednio od Google.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Transparentne rozliczenia i raporty</h3>
                  <p className="text-muted-foreground">
                    Pełna przejrzystość — widzisz każdy grosz wydany na kampanię, każde kliknięcie, konwersję. Raporty co miesiąc ze szczegółową analizą.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Wyniki od 24-48h</h3>
                  <p className="text-muted-foreground">
                    Szybko uruchamiamy kampanie i szybko je optymalizujemy. Twoja firma widzi wyniki prawie natychmiast — nie czekasz tygodniami.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Znamy rynek katowicko-śląski</h3>
                  <p className="text-muted-foreground">
                    Specjalizujemy się w branżach Katowic i Górnego Śląska — IT, e-commerce, usługi lokalne, nieruchomości, MICE. Znamy konkurencję, słowa kluczowe i CPCy dla każdej branży.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Skalowanie poza Katowice</h3>
                  <p className="text-muted-foreground">
                    Zaczynasz w Katowicach, potem skalujesz na sąsiednie miasta, Górny Śląsk, całą Polskę. Obsługujemy firmy z Katowic, które chcą ekspandować.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Najczęstsze pytania o Google Ads Katowice
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-secondary/30 rounded-lg border border-border p-6">
                    <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* CTA Section */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-900">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Uruchom kampanie Google Ads w Katowicach
                </h2>
                <p className="text-lg text-slate-300 mb-10">
                  Bezpłatna konsultacja bez zobowiązań. Poznaj naszą strategię dla Twojej branży. Wyniki od 24-48h.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Bezpłatna konsultacja
                  </Link>
                  <Link
                    to="/performance-marketing/google-ads"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition border border-white/20"
                  >
                    Poznaj Google Ads
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Bottom Links */}
        <FadeInView>
          <section className="py-12 bg-background border-t border-border">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground mb-6">Powiązane usługi:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/performance-marketing/google-ads"
                    className="text-primary hover:underline font-semibold"
                  >
                    Google Ads — kompleksowo
                  </Link>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <Link
                    to="/blog/google-ads-cennik"
                    className="text-primary hover:underline font-semibold"
                  >
                    Cennik Google Ads
                  </Link>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <Link
                    to="/blog/google-ads-vs-seo"
                    className="text-primary hover:underline font-semibold"
                  >
                    Google Ads vs SEO
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Contact Section */}
        <ContactSection city="Katowice" />
      </Layout>
    </>
  );
}
