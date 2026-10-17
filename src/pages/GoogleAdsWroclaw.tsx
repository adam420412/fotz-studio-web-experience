import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function GoogleAdsWroclaw() {
  const faqItems = [
    {
      question: "Ile kosztuje Google Ads we Wrocławiu?",
      answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie i typach kampanii, liczbie promowanych produktów lub usług oraz sposobie raportowania. Budżet reklamowy płacony Google jest zawsze osobną pozycją, a jego wysokość zależy od branży, konkurencji na słowa kluczowe i Twoich celów.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii Google Ads we Wrocławiu?",
      answer: "Przygotowanie kampanii obejmuje: audyt konkurencji, badanie słów kluczowych, tworzenie struktury kampanii, konfigurację śledzenia konwersji i wdrożenie. Czas startu zależy od stanu konta, materiałów i akceptacji reklam przez Google, a optymalizacja wymaga zebrania danych — nie obiecujemy sztywnych terminów efektów.",
    },
    {
      question: "Czy we Wrocławiu konkurencja na Google Ads jest duża?",
      answer: "Wrocław to jedno z największych miast w Polsce z silnym sektorem IT i handlu, więc w wielu branżach konkurencja w aukcjach jest wyraźna. Koszt kliknięcia ustala się w aukcji i mocno zależy od branży i słów kluczowych — realne stawki sprawdzamy w Planerze słów kluczowych i w pierwszych testach kampanii.",
    },
    {
      question: "Jakie słowa kluczowe są popularne dla firm z Wrocławia?",
      answer: "Popularne słowa kluczowe to: 'agencja web Wrocław', 'SEO Wrocław', 'projektant graficzny Wrocław', 'restauracja Wrocław', 'dentysta Wrocław', 'nieruchomości Wrocław', 'freelancer IT Wrocław'. Wrocław ma aktywną scenę IT, więc wiele z tych fraz ma dużą konkurencję w aukcjach.",
    },
    {
      question: "Czy mogę targetować reklamami tylko Wrocław czy muszę brać całą Polskę?",
      answer: "Możesz targetować tylko Wrocław — to jeden z największych zalet Google Ads. Jeśli prowadzisz biznes lokalny w Wrocławiu (fryzjer, dentyta, restauracja), możesz precyzyjnie reklamować się dla ludzi szukających takich usług we Wrocławiu. Możesz też rozszerzyć na sąsiednie miasta (Piaskowice, Oława, Sobótka) lub województwo dolnośląskie.",
    },
    {
      question: "Czy Google Ads będą efektywne dla mojej e-commerce z Wrocławia?",
      answer: "Tak — Google Ads (zwłaszcza Performance Max i Google Shopping) działają bardzo dobrze dla e-commerce. Możesz sprzedawać na całą Polskę z siedzibą we Wrocławiu. Skuteczność zależy od asortymentu, marż, jakości feedu produktowego i strony sklepu — sprawdzamy to przed startem.",
    },
    {
      question: "Jakie branże najczęściej korzystają z Google Ads we Wrocławiu?",
      answer: "Najczęściej Google Ads korzystają: agencje web, programiści, dentyści, restauracje, nieruchomości, sklepy internetowe, szkoły jezykowe, fryzjerzy, salony beauty, usługi budowlane. Wrocław ma silną scenę IT, więc w branżach technologicznych konkurencja o kliknięcia jest szczególnie duża.",
    },
    {
      question: "Czy Google Ads pomogą mi konkurować z firmami z Warszawy?",
      answer: "Tak, ale inną strategią. Firmy z Warszawy mają większy budżet, ale ty znasz lokalny rynek Wrocławia lepiej. Twoją strategią powinno być: (1) postaw na lokalne słowa kluczowe we Wrocławiu (2) skaluj na sąsiednie miasta (3) jeśli e-commerce — skaluj na całą Polskę. Dobra strategia i optymalizacja pozwalają lepiej wykorzystać mniejszy budżet.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Google Ads Wrocław | Fotz Studio"
          description="Google Ads Wrocław — Fotz Studio prowadzi kampanie Google Ads dla firm z Wrocławia zdalnie z Poznania. Search, Performance Max, Shopping i remarketing. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/performance-marketing/google-ads/wroclaw"
          keywords="google ads wroclaw, kampanie google ads wroclaw, agencja google ads wroclaw, reklamy google wroclaw, google adwords wroclaw, sem wroclaw, google ads dla firm wroclaw, prowadzenie google ads wroclaw, google ads cennik wroclaw, reklama w google wroclaw"
        />

        <ServiceSchema
          name="Kampanie Google Ads Wrocław"
          description="Tworzenie i optymalizacja kampanii Google Ads dla firm z Wrocławia. Fotz Studio pracuje z Poznania i obsługuje firmy z Wrocławia zdalnie."
          provider="Fotz Studio"
          areaServed="Wroclaw"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Kampanie reklamowe", url: "https://www.fotz-studio.pl/performance-marketing" },
            { name: "Google Ads", url: "https://www.fotz-studio.pl/performance-marketing/google-ads" },
            { name: "Google Ads Wrocław", url: "https://www.fotz-studio.pl/performance-marketing/google-ads/wroclaw" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", path: "/" },
            { name: "Kampanie reklamowe", path: "/performance-marketing" },
            { name: "Google Ads", path: "/performance-marketing/google-ads" },
            { name: "Wrocław", path: "/performance-marketing/google-ads/wroclaw" },
          ]}/>

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Agencja Google Ads Wrocław
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 mb-8">
                  Google Ads Wroclaw — profesjonalne kampanie Google Ads i reklamy w Google dla firm z Wroclawa i Dolnego Śląska. Pracujemy z Poznania, a firmy z Wrocławia obsługujemy zdalnie. Bezpłatna konsultacja.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Google Ads in Wroclaw */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Google Ads Wrocław — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Wrocław to jedno z największych miast w Polsce, znane jako Miasto 100 Mostów, a przede wszystkim — dynamiczny hub technologiczny i biznesowy w województwie dolnośląskim. Przedsiębiorcy we Wrocławiu aktywnie inwestują w reklamy internetowe, szczególnie w sektora IT, e-commerce i usług.
                  </p>
                  <p>
                    Rynek reklamowy we Wrocławiu jest dojrzały i aktywny. Koszt kliknięcia ustala się w aukcji i zależy od branży, dlatego zaczynamy od testów — sprawdzamy, co działa, a potem można skalować kampanie na resztę Polski.
                  </p>
                  <p>
                    Google Ads zwykle daje ruch szybciej niż SEO, bo reklamy mogą się wyświetlać zaraz po uruchomieniu i akceptacji. We Wrocławiu, gdzie jest wiele małych i średnich firm, to dobry sposób na dotarcie do osób, które aktywnie szukają Twoich usług. W kampaniach Search płacisz za kliknięcia, nie za wyświetlenia.
                  </p>
                  <p>
                    Bliskość Niemiec to dodatkowy atut — Wrocław graniczy z rynkiem niemieckim. Firmy we Wrocławiu mogą reklamować się zarówno lokalnie (Wrocław, Dolny Śląsk), jak i ekspandować na rynki niemieckie. Google Ads obsługuje targeting geograficzny na poziomie miasta, powiatu, czy nawet promienia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services for Wroclaw */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Co robimy dla firm z Wrocławia?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie Search</h3>
                  <p className="text-muted-foreground">
                    Reklamy tekstowe w wynikach Google dla słów kluczowych zwiększonych. Idealnie dla firm szukających klientów aktywnie — w momencie wyszukiwania.
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
                    Produkty ze zdjęciami i cenami bezpośrednio w wynikach Google. Obowiązkowe dla e-commerce we Wrocławiu.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Remarketing</h3>
                  <p className="text-muted-foreground">
                    Reklamy dla osób, które już odwiedzały Twoją stronę — przypominają o ofercie tym, którzy ją znają.
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
                    Pojawianie się w Google Maps dla firm z fizyczną lokalizacją we Wrocławiu. Reklamy dla klientów w pobliżu.
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
                Jak prowadzimy kampanie Google Ads we Wrocławiu?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brief i analiza</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, branżę, konkurencję we Wrocławiu i cele. Jakie słowa kluczowe wpisują Twoi potencjalni klienci? Ile jesteś gotów wydać na kampanię?
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
                      Badamy, co robią konkurenci we Wrocławiu w Google Ads. Jakie słowa kluczowe kupują? Ile wydają na budżet? Jak są skonstruowane ich reklamy?
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
                Kampanie Google Ads Wrocław — od czego zależy wycena
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
                <p>
                  Nie mamy sztywnego cennika ani gotowych pakietów. Wycenę obsługi przygotowujemy po rozmowie o zakresie — zależy ona od:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>liczby i typów kampanii (Search, Performance Max, Shopping, Display, YouTube, remarketing),</li>
                  <li>liczby produktów, usług i lokalizacji, które chcesz promować,</li>
                  <li>stanu konta i konfiguracji pomiaru konwersji,</li>
                  <li>zakresu raportowania i częstotliwości optymalizacji.</li>
                </ul>
                <p>
                  Budżet reklamowy płacony Google jest zawsze osobną pozycją — ustalasz go Ty, a my doradzamy, jak go rozłożyć.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kampanie Google Ads dla jakich branż we Wrocławiu?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Agencje web i IT</h3>
                    <p className="text-sm text-muted-foreground">
                      Wrocław ma potężną scenę IT. Google Ads dla "strony internetowe Wrocław", "SEO Wrocław", "programista PHP". Wysokie CPL, ale klientów z budżetem.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Dentyści i kliniki</h3>
                    <p className="text-sm text-muted-foreground">
                      "Dentysta Wrocław", "implanty Wrocław", "ortodonta Wrocław". Reklamy lokalne klinik z mapkami i czasami otwarcia.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje i kawiarnie</h3>
                    <p className="text-sm text-muted-foreground">
                      "Restauracja Wrocław stare miasto", "kawa Wrocław", "pizza dostarczamy". Kampanie Google Maps i remarketing.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">E-commerce i sklepy</h3>
                    <p className="text-sm text-muted-foreground">
                      Performance Max, Google Shopping, remarketing. Skalowanie sprzedaży online z magazynem we Wrocławiu.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Nieruchomości</h3>
                    <p className="text-sm text-muted-foreground">
                      "Mieszkania Wrocław", "biuro do wynajęcia Wrocław", "domy Piaskowice". Kampanie dla agencji i deweloperów.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Usługi budowlane</h3>
                    <p className="text-sm text-muted-foreground">
                      "Elektryk Wrocław", "malowanie Wrocław", "klimatyzacja montaż". Google Ads dla handlowców i podwykonawców.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty i SPA</h3>
                    <p className="text-sm text-muted-foreground">
                      "Salon fryzjerski Wrocław", "manicure Wrocław", "masaż relaksacyjny". Reklamy z rezerwacją online.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Szkoły i kursy</h3>
                    <p className="text-sm text-muted-foreground">
                      "Angielski dla dzieci Wrocław", "kursy programowania", "szkoła gry na gitarze". Remarketing do zainteresowanych.
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
                Dlaczego Fotz Studio jako agencja Google Ads we Wrocławiu?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Kampanie i produkcja w jednym miejscu</h3>
                  <p className="text-muted-foreground">
                    Oprócz prowadzenia kampanii przygotowujemy landing page, grafiki i wideo do reklam, więc nie musisz koordynować kilku wykonawców.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Transparentne rozliczenia i raporty</h3>
                  <p className="text-muted-foreground">
                    Pełna przejrzystość — widzisz każdy grosz wydany na kampanię, każde kliknięcie, konwersję. Raporty co miesiąc ze szczegółową analizą.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Szybki start i stała optymalizacja</h3>
                  <p className="text-muted-foreground">
                    Sprawnie uruchamiamy kampanie i optymalizujemy je na podstawie danych. Nie obiecujemy sztywnych terminów efektów — tempo zależy od budżetu, branży i liczby konwersji.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Współpraca zdalna z Poznania</h3>
                  <p className="text-muted-foreground">
                    Pracujemy z Poznania, a firmy z Wrocławia obsługujemy zdalnie. Przed startem analizujemy Twoją branżę, konkurencję i słowa kluczowe na rynku wrocławskim.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Skalowanie poza Wrocław</h3>
                  <p className="text-muted-foreground">
                    Zaczynasz we Wrocławiu, potem skalujesz na sąsiednie miasta, województwo, całą Polskę. Obsługujemy firmy z Wrocławia, które chcą ekspandować.
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
                Najczęstsze pytania o Google Ads Wrocław
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
                  Uruchom kampanie Google Ads we Wrocławiu
                </h2>
                <p className="text-lg text-slate-300 mb-10">
                  Bezpłatna konsultacja bez zobowiązań. Poznaj naszą strategię dla Twojej branży.
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
        <ContactSection city="Wrocław" />
      </Layout>
    </>
  );
}
