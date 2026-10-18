import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function GoogleAdsKrakow() {
  const faqItems = [
    {
      question: "Ile kosztuje Google Ads w Krakowie?",
      answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie i typie kampanii, liczbie produktów lub usług, potrzebnym trackingu i częstotliwości raportów. Budżet reklamowy płacony Google jest zawsze osobną pozycją, a jego wysokość zależy od branży, celu i konkurencji na słowa kluczowe.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii Google Ads w Krakowie?",
      answer: "Termin startu ustalamy w ofercie — zależy od zakresu i od tego, czy masz już konto i tracking. Przygotowanie obejmuje: audyt konkurencji, badanie słów kluczowych, tworzenie struktury kampanii, konfigurację trackingu konwersji i wdrożenie. Po uruchomieniu kampania zbiera dane, a optymalizacja trwa przez cały czas współpracy.",
    },
    {
      question: "Czy potrzebuję certyfikatu Google do uruchomienia reklam w Krakowie?",
      answer: "Nie — certyfikat Google nie jest wymagany do uruchomienia kampanii. Wymagane jest jednak konto Google Ads. My prowadzimy całą konfigurację, optymalizację i zarządzanie kampaniami. Ty masz dostęp do pełnych danych i raportów w panelu Google Ads.",
    },
    {
      question: "Jaka jest minimalna kwota budżetu na Google Ads w Krakowie?",
      answer: "Google nie narzuca wysokiego minimum, ale budżet powinien pozwolić kampanii zebrać wystarczająco danych do optymalizacji. Wysokość budżetu dobieramy wspólnie po analizie słów kluczowych, kosztów kliknięć w Twojej branży i celu kampanii. Budżet płacisz bezpośrednio Google, osobno od opłaty za obsługę.",
    },
    {
      question: "Jak agencja rozlicza się za kampanie Google Ads?",
      answer: "Rozliczamy się w modelu: opłata za zarządzanie kampanią (wycena po rozmowie o zakresie) + budżet reklamowy, który wydajesz w Google Ads (płacisz bezpośrednio Google). Raport z wydatków i wyników przekazujemy co miesiąc.",
    },
    {
      question: "Jakie branże w Krakowie korzystają z Google Ads?",
      answer: "Kampanie Google Ads sprawdzają się w wielu branżach w Krakowie: restauracje, turyści i hotele, szkołenia branżowe, sklepy internetowe, agencje nieruchomości, studia fotograficzne, usługi edukacyjne, szkoły nauki jazdy, beauty/spa. Każda branża ma inną strategię — hotele targetują turystów z Google Maps, restauracje robią remarketing, e-commerce skaluje Performance Max.",
    },
    {
      question: "Czy Google Ads da efekty dla małej firmy w Krakowie?",
      answer: "Tak — Google Ads są idealnym kanałem dla małych firm w Krakowie. Płacisz tylko za kliknięcia, możesz precyzyjnie targetować swoją grupę docelową (lokalizacja, słowa kluczowe, demografia), i masz pełne śledzenie zwrotu z inwestycji (ROI). Nie gwarantujemy zysku od pierwszego miesiąca — efekty zależą od oferty, strony i konkurencji, dlatego zaczynamy od budżetu, który pozwala bezpiecznie przetestować kampanię.",
    },
    {
      question: "Co to jest Quality Score i jak wpływa na cenę reklamy w Krakowie?",
      answer: "Quality Score to ocena jakości reklamy, strony docelowej i słowa kluczowego przyznawana przez Google (1-10). Im wyższy Quality Score, tym niższy koszt za kliknięcie (CPC). Dlatego pracujemy nad dopasowaniem słów kluczowych, tekstów reklam i strony docelowej, co pomaga obniżać koszt kliknięcia.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Google Ads Kraków — kampanie reklamowe dla firm | Fotz.pl"
          description="Google Ads Kraków — Fotz Studio planuje, prowadzi i optymalizuje kampanie Google Ads dla firm z Krakowa. Współpraca zdalna, raport co miesiąc. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/performance-marketing/google-ads/krakow"
          keywords="google ads krakow, kampanie google ads krakow, agencja google ads krakow, reklamy google krakow, google adwords krakow, sem krakow, google ads dla firm krakow, prowadzenie google ads krakow, google ads cennik krakow, reklama w google krakow"
        />

        <ServiceSchema
          name="Kampanie Google Ads Kraków"
          description="Tworzenie i optymalizacja kampanii Google Ads dla firm z Krakowa. Agencja Fotz Studio — współpraca zdalna z Poznania."
          provider="Fotz Studio"
          areaServed="Krakow"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Kampanie reklamowe", url: "https://www.fotz-studio.pl/performance-marketing" },
            { name: "Google Ads", url: "https://www.fotz-studio.pl/performance-marketing/google-ads" },
            { name: "Google Ads Kraków", url: "https://www.fotz-studio.pl/performance-marketing/google-ads/krakow" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", path: "/" },
            { name: "Kampanie reklamowe", path: "/performance-marketing" },
            { name: "Google Ads", path: "/performance-marketing/google-ads" },
            { name: "Kraków", path: "/performance-marketing/google-ads/krakow" },
          ]}/>

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Agencja Google Ads Kraków
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 mb-8">
                  Google Ads Krakow — profesjonalne kampanie Google Ads i reklamy w Google dla firm z Krakowa i Małopolski. Planujemy, prowadzimy i optymalizujemy kampanie SEM. Pracujemy z Poznania, a firmy z Krakowa obsługujemy zdalnie. Bezpłatna konsultacja.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Wycena</div>
                  <div className="text-sm text-sky-100">Po rozmowie o zakresie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Budżet</div>
                  <div className="text-sm text-sky-100">Płacisz Google osobno</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Zdalnie</div>
                  <div className="text-sm text-sky-100">Pracujemy z Poznania</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Raport</div>
                  <div className="text-sm text-sky-100">Co miesiąc</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Google Ads in Krakow */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Google Ads Kraków — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Kraków to drugie największe miasto w Polsce i centrum biznesowe całej Małopolski — naturalne miejsce do testowania kampanii dla całego regionu.
                  </p>
                  <p>
                    Koszt kliknięcia zależy od branży i konkurencji na konkretne słowa kluczowe — sprawdzamy go przed startem kampanii. Kraków przyciąga turystów, studentów i osoby biznesowe. Kampanie Google Ads mogą tu wspierać wiele branż: e-commerce, usługi, nieruchomości, edukacja, gastronomia, hotele.
                  </p>
                  <p>
                    Reklamy Google Ads mogą wyświetlać się w wynikach wkrótce po uruchomieniu i zatwierdzeniu przez Google — zwykle szybciej niż efekty SEO. W Krakowie, gdzie rynek jest rozwinięty i konkurencyjny, to dobry sposób na dotarcie do osób, które właśnie szukają Twojej usługi.
                  </p>
                  <p>
                    Targetowanie lokalne (Kraków, Nowa Huta, Podgórze, Tarnów, Wieliczka) pozwala precyzyjnie trafić w swoją grupę docelową. Jeśli prowadzisz biznes lokalny w Krakowie, możesz kampanię skalować na całą Małopolskę i Polskę z czasem.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services for Krakow */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Co robimy dla firm z Krakowa?
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
                    Produkty ze zdjęciami i cenami bezpośrednio w wynikach Google. Obowiązkowe dla e-commerce w Krakowie.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Remarketing</h3>
                  <p className="text-muted-foreground">
                    Reklamy dla osób, które już odwiedzały Twoją stronę i znają Twoją ofertę.
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
                    Pojawianie się w Google Maps dla firm z fizyczną lokalizacją w Krakowie. Reklamy dla klientów w pobliżu.
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
                Jak prowadzimy kampanie Google Ads w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brief i analiza</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, branżę, konkurencję i cele. Jakie słowa kluczowe wpisują Twoi potencjalni klienci? Ile jesteś gotów wydać na kampanię?
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
                      Badamy, co robią konkurenci w Google Ads. Jakie słowa kluczowe kupują? Ile wydają na budżet? Jak są skonstruowane ich reklamy?
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
                Kampanie Google Ads Kraków — od czego zależy wycena?
              </h2>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">Zakres kampanii</strong> — liczba i typ kampanii (Search, Performance Max, Shopping, remarketing).</li>
                  <li><strong className="text-foreground">Wielkość oferty</strong> — liczba usług, produktów i grup reklam do przygotowania.</li>
                  <li><strong className="text-foreground">Tracking i analityka</strong> — konfiguracja konwersji, Google Analytics i integracji.</li>
                  <li><strong className="text-foreground">Raportowanie</strong> — częstotliwość raportów i spotkań podsumowujących.</li>
                </ul>
                <p className="text-muted-foreground mt-6">
                  Wycenę przygotowujemy po rozmowie o zakresie. Budżet reklamowy płacisz bezpośrednio Google — zawsze osobno od opłaty za obsługę.
                </p>
              </div>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
                Każda współpraca obejmuje setup kampanii, bieżącą optymalizację, raportowanie co miesiąc, A/B testy reklam i pracę nad Quality Score.
              </p>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kampanie Google Ads dla jakich branż w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje i hotele</h3>
                    <p className="text-sm text-muted-foreground">
                      Google Ads dla "restauracja Kraków", "hotel Kraków", "catering Nowa Huta". Kampanie Google Maps i remarketing do gości.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Turystyka i atrakcje</h3>
                    <p className="text-sm text-muted-foreground">
                      "Zwiedzanie Krakowa", "wycieczka ze Spichlerza", "przewodnik turystyczny". Reklamy dla branży turystycznej Krakowa.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Szkoły i kursy</h3>
                    <p className="text-sm text-muted-foreground">
                      "Szkoła języków Kraków", "kursy Excel", "nauka jazdy Kraków". Reklamy dla instytucji edukacyjnych.
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
                      "Mieszkania Kraków", "biuro Kazimierz", "garaż Podgórze". Kampanie dla agencji i deweloperów.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty i SPA</h3>
                    <p className="text-sm text-muted-foreground">
                      "Salon fryzjerski Kraków", "masaż", "zabiegi kosmetyczne". Reklamy dla salonów z rezerwacją online.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Usługi budowlane</h3>
                    <p className="text-sm text-muted-foreground">
                      "Malowanie Kraków", "hydraulik", "elektrykn". Google Ads dla handlowców i podwykonawców.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Studia fotograficzne</h3>
                    <p className="text-sm text-muted-foreground">
                      "Fotograf ślubny Kraków", "sesja zdjęciowa", "fotografia produktów". Reklamy dla fotografów i studiów.
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
                Dlaczego Fotz Studio jako agencja Google Ads w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Kampanie na Twoim koncie Google Ads</h3>
                  <p className="text-muted-foreground">
                    Kampanie prowadzimy na koncie Google Ads należącym do Twojej firmy — masz pełny dostęp do danych, a budżet reklamowy płacisz bezpośrednio Google.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Transparentne rozliczenia i raporty</h3>
                  <p className="text-muted-foreground">
                    Pełna przejrzystość — widzisz każdy grosz wydany na kampanię, każde kliknięcie, konwersję. Raporty co miesiąc ze szczegółową analizą.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Sprawne uruchomienie</h3>
                  <p className="text-muted-foreground">
                    Termin startu ustalamy w ofercie. Po uruchomieniu kampania zaczyna zbierać dane, a optymalizację opieramy na wynikach z kolejnych tygodni.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Strategia pod Twoją branżę</h3>
                  <p className="text-muted-foreground">
                    Pracujemy z Poznania, a firmy z Krakowa obsługujemy zdalnie. Przed startem analizujemy Twoją branżę i konkurencję w Krakowie — od turystyki, przez e-commerce i edukację, po nieruchomości.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Skalowanie do całej Małopolski i Polski</h3>
                  <p className="text-muted-foreground">
                    Zaczynasz w Krakowie, potem skalujesz na całą Małopolskę i Polskę. Pomagamy firmom, które chcą rozszerzać kampanie na nowe rynki.
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
                Najczęstsze pytania o Google Ads Kraków
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
                  Uruchom kampanie Google Ads w Krakowie
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
        <ContactSection city="Kraków" />
      </Layout>
    </>
  );
}
