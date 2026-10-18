import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function GoogleAdsGdansk() {
  const faqItems = [
    {
      question: "Ile kosztuje Google Ads w Gdańsku?",
      answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie kampanii, produktów i usług, konfiguracji śledzenia i częstotliwości raportów. Budżet reklamowy to osobna pozycja, którą płacisz bezpośrednio Google — jego wysokość zależy od branży, konkurencji na słowa kluczowe i Twoich celów.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii Google Ads w Gdańsku?",
      answer: "Termin uruchomienia ustalamy po briefie — zależy od zakresu i od tego, czy masz już konto i śledzenie konwersji. Przygotowanie obejmuje: audyt konkurencji w Gdańsku, badanie słów kluczowych regionalnych (Trójmiasto), strukturę kampanii, konfigurację trackingu konwersji i wdrożenie. Optymalizacja trwa później stale, na podstawie zebranych danych.",
    },
    {
      question: "Czy potrzebuję certyfikatu Google do uruchomienia reklam w Gdańsku?",
      answer: "Nie — certyfikat Google nie jest wymagany. Wymagane jest tylko konto Google Ads. My prowadzimy całą konfigurację, optymalizację i zarządzanie kampaniami. Pracujemy z Poznania, firmy z Gdańska obsługujemy zdalnie. Ty masz dostęp do pełnych danych i raportów w panelu Google Ads.",
    },
    {
      question: "Jaka jest minimalna kwota budżetu na Google Ads w Gdańsku?",
      answer: "Google nie narzuca wysokiego minimum, ale zbyt mały budżet daje mało danych do optymalizacji. Wysokość budżetu ustalamy razem, zależnie od branży, konkurencji na słowa kluczowe i celu kampanii. Budżet reklamowy płacisz bezpośrednio Google.",
    },
    {
      question: "Jak agencja rozlicza się za kampanie Google Ads w Gdańsku?",
      answer: "Rozliczamy się w modelu: opłata za zarządzanie kampanią, ustalana po rozmowie o zakresie, plus budżet reklamowy, który płacisz bezpośrednio Google. Co miesiąc dostajesz raport z analizą wyników.",
    },
    {
      question: "Jakie branże w Gdańsku korzystają z Google Ads?",
      answer: "Kampanie Google Ads działają efektywnie dla wszystkich branż w Gdańsku: turystyka i noclegi, porty i logistyka, restauracje, sklepy internetowe, agencje nieruchomości, usługi budowlane, dentyści, szkoły, port tarchandlowy. Każda branża ma inną strategię — hotele wdrażają remarketing, restauracje targetują turystów, firmy portowe targetują B2B.",
    },
    {
      question: "Czy Google Ads da efekty dla małej firmy w Gdańsku?",
      answer: "Tak — Google Ads są idealnym kanałem dla małych firm w Gdańsku. Płacisz tylko za kliknięcia, możesz precyzyjnie targetować swoją grupę docelową (lokalizacja, słowa kluczowe, demografia), i masz pełne śledzenie zwrotu z inwestycji (ROI). Efekty zależą od oferty, strony i konkurencji, dlatego nie obiecujemy konkretnego wyniku.",
    },
    {
      question: "Co to jest Quality Score i jak wpływa na cenę reklamy w Gdańsku?",
      answer: "Quality Score to ocena jakości reklamy, strony docelowej i słowa kluczowego (1-10). Im wyższy Quality Score, tym niższy koszt za kliknięcie (CPC). Dlatego dbamy o dopasowanie słów kluczowych, tekstów reklam i strony docelowej.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Google Ads Gdańsk — kampanie reklamowe dla firm | Fotz.pl"
          description="Google Ads Gdańsk — Fotz.pl. Kampanie Google Ads dla firm z Gdańska i Trójmiasta, obsługa zdalna z Poznania. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/performance-marketing/google-ads/gdansk"
          keywords="google ads gdansk, kampanie google ads gdansk, agencja google ads gdansk, reklamy google gdansk, google adwords gdansk, sem gdansk, google ads dla firm gdansk, prowadzenie google ads gdansk, google ads cennik gdansk, reklama w google gdansk"
        />

        <ServiceSchema
          name="Kampanie Google Ads Gdańsk"
          description="Tworzenie i optymalizacja kampanii Google Ads dla firm z Gdańska. Agencja Fotz.pl — obsługa zdalna z Poznania."
          provider="Fotz Studio"
          areaServed="Gdansk"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Kampanie reklamowe", url: "https://www.fotz-studio.pl/performance-marketing" },
            { name: "Google Ads", url: "https://www.fotz-studio.pl/performance-marketing/google-ads" },
            { name: "Google Ads Gdańsk", url: "https://www.fotz-studio.pl/performance-marketing/google-ads/gdansk" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", path: "/" },
            { name: "Kampanie reklamowe", path: "/performance-marketing" },
            { name: "Google Ads", path: "/performance-marketing/google-ads" },
            { name: "Gdańsk", path: "/performance-marketing/google-ads/gdansk" },
          ]}/>

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Agencja Google Ads Gdańsk
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 mb-8">
                  Google Ads Gdansk — profesjonalne kampanie Google Ads i reklamy w Google dla firm z Gdanska i Trójmiasta. Pomagamy zwiększać ruch i konwersje dzięki dobrze ustawionym kampaniom SEM. Bezpłatna konsultacja.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Wycena</div>
                  <div className="text-sm text-sky-100">Po rozmowie o zakresie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Budżet</div>
                  <div className="text-sm text-sky-100">Płacisz bezpośrednio Google</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Dostęp</div>
                  <div className="text-sm text-sky-100">Do konta i danych</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Raport</div>
                  <div className="text-sm text-sky-100">Co miesiąc</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Google Ads in Gdansk */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Google Ads Gdańsk — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Gdańsk to stolica Pomorza ze znacznym ruchem turystycznym, sektorem portowym i dynamicznym biznesem.
                  </p>
                  <p>
                    Koszt kliknięcia zależy od branży i konkurencji, a liczba potencjalnych klientów z Trójmiasta (Gdańsk/Gdynia/Sopot) jest duża. Kampanie Google Ads działają efektywnie dla każdej branży: turystyka, e-commerce, usługi, nieruchomości, porty, restauracje.
                  </p>
                  <p>
                    Gdańsk przyciąga turystów z całej Europy. Google Ads pozwala Ci dotrzeć do turystów szukających noclegu, restauracji i atrakcji. Doskonały kanał dla hoteli, pensjonatów, restauracji, wycieczek.
                  </p>
                  <p>
                    Targetowanie lokalne (Gdańsk, Gdynia, Sopot, Trójmiasto) pozwala precyzyjnie trafić w swoją grupę docelową. Port Gdańsk to również znaczący hub logistyki — firmy B2B z sektora portowego to doskonali klienci do Google Ads.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services for Gdansk */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Co robimy dla firm z Gdańska?
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
                    Produkty ze zdjęciami i cenami bezpośrednio w wynikach Google. Obowiązkowe dla e-commerce w Gdańsku.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Remarketing</h3>
                  <p className="text-muted-foreground">
                    Reklamy dla osób, które już odwiedzały Twoją stronę. Pozwalają wrócić do osób, które już znają Twoją ofertę.
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
                    Pojawianie się w Google Maps dla firm z fizyczną lokalizacją w Gdańsku. Reklamy dla klientów w pobliżu.
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
                Jak prowadzimy kampanie Google Ads w Gdańsku?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brief i analiza</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, branżę, konkurencję w Gdańsku i cele. Jakie słowa kluczowe wpisują Twoi potencjalni klienci? Ile jesteś gotów wydać na kampanię?
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
                      Badamy, co robią konkurenci w Gdańsku w Google Ads. Jakie słowa kluczowe kupują? Ile wydają na budżet? Jak są skonstruowane ich reklamy?
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
                Kampanie Google Ads Gdańsk — od czego zależy wycena
              </h2>
              <div className="max-w-3xl mx-auto bg-background rounded-lg border border-border p-6">
                <p className="text-muted-foreground mb-4">
                  Nie mamy sztywnego cennika. Wycenę obsługi przygotowujemy po rozmowie o zakresie. Zależy ona głównie od:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>liczby i typu kampanii (Search, Performance Max, Shopping, remarketing),</li>
                  <li>liczby produktów, usług i lokalizacji, które promujesz,</li>
                  <li>konfiguracji śledzenia konwersji i analityki,</li>
                  <li>częstotliwości optymalizacji i raportowania.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Budżet reklamowy płacisz bezpośrednio Google, zawsze osobno od naszego wynagrodzenia.
                </p>
              </div>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
                Obsługa obejmuje setup kampanii, bieżącą optymalizację, raportowanie co miesiąc, A/B testy reklam i dbanie o Quality Score.
              </p>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kampanie Google Ads dla jakich branż w Gdańsku?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Turystyka i noclegi</h3>
                    <p className="text-sm text-muted-foreground">
                      "Hotel Gdańsk", "noclegi Gdańsk", "turystyka Trójmiasto". Kampanie dla hoteli, pensjonatów i zakwaterowania dla turystów i biznesmen.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Dentyści i kliniki</h3>
                    <p className="text-sm text-muted-foreground">
                      "Dentysta Gdańsk", "implanty Gdańsk", "ortodonta Sopot". Reklamy lokalnych klinik z mapkami i czasami otwarcia.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje i catering</h3>
                    <p className="text-sm text-muted-foreground">
                      "Restauracja Gdańsk Stare Miasto", "catering Gdańsk", "Uber Eats". Kampanie Google Maps i remarketing do poprzednich gości.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">E-commerce i sklepy</h3>
                    <p className="text-sm text-muted-foreground">
                      Performance Max, Google Shopping, remarketing. Skalowanie sprzedaży online dla produktów i usług.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Nieruchomości</h3>
                    <p className="text-sm text-muted-foreground">
                      "Mieszkania Gdańsk", "apartamenty Gdańsk", "biuro do wynajęcia Trójmiasto". Kampanie dla agencji i deweloperów.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Port i logistyka</h3>
                    <p className="text-sm text-muted-foreground">
                      Kampanie B2B dla firm portowych, logistyki, importu/eksportu. Google Ads dla niszy maritymej i portowej.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty i SPA</h3>
                    <p className="text-sm text-muted-foreground">
                      "Salon fryzjerski Gdańsk", "manicure Gdańsk", "masaż Sopot". Reklamy dla salonów z rezerwacją online.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Edukacja i szkolenia</h3>
                    <p className="text-sm text-muted-foreground">
                      "Kursy Excel Gdańsk", "angielski dla dzieci", "szkoła programowania Gdańsk". Remarketing do zainteresowanych uczestników.
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
                Dlaczego Fotz Studio jako agencja Google Ads w Gdańsku?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Praca zdalna z Poznania</h3>
                  <p className="text-muted-foreground">
                    Pracujemy z Poznania, firmy z Gdańska obsługujemy zdalnie — spotkania online, wspólny dostęp do konta Google Ads i regularne raporty.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Transparentne rozliczenia i raporty</h3>
                  <p className="text-muted-foreground">
                    Pełna przejrzystość — widzisz każdy grosz wydany na kampanię, każde kliknięcie, konwersję. Raporty co miesiąc ze szczegółową analizą wyników dla firm gdańskich.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Sprawne wdrożenie</h3>
                  <p className="text-muted-foreground">
                    Termin startu ustalamy po briefie, a po uruchomieniu kampanii optymalizujemy ją na podstawie danych. Tempo efektów zależy od branży, budżetu i oferty.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Strategia pod branżę</h3>
                  <p className="text-muted-foreground">
                    Przed startem analizujemy Twoją branżę i konkurencję w Trójmieście — turystyka, port, e-commerce czy nieruchomości mają inne wyzwania.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Skalowanie do całej Polski</h3>
                  <p className="text-muted-foreground">
                    Zaczynasz w Gdańsku, potem skalujesz na całe Trójmiasto i Polskę. Obsługujemy firmy z Gdańska, które chcą ekspandować — pomagamy im rosnąć.
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
                Najczęstsze pytania o Google Ads Gdańsk
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
                  Uruchom kampanie Google Ads w Gdańsku
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
        <ContactSection city="Gdańsk" />
      </Layout>
    </>
  );
}
