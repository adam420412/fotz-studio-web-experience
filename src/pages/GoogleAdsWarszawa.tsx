import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function GoogleAdsWarszawa() {
  const faqItems = [
    {
      question: "Ile kosztuje Google Ads w Warszawie?",
      answer: "Google Ads w Warszawie zaczyna się od 400 zł/miesiąc za zarządzanie kampanią (pakiet START). Dodatkowy budżet reklamowy to osobna pozycja — od 500 zł/miesiąc dla małych firm do 15 000+ zł/miesiąc dla e-commerce i sieci handlowych. Całkowity koszt zależy od branży i konkurencji na słowa kluczowe.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii Google Ads?",
      answer: "Kampanię można uruchomić w ciągu 24-48 godzin od podpisania umowy. Obejmuje to: audit konkursowy, badanie słów kluczowych, tworzenie struktury kampanii, konfigurację trackingu konwersji i wdrożenie. Pierwsze wyniki są widoczne po kilku dniach, pełna optymalizacja trwa 2-4 tygodnie.",
    },
    {
      question: "Czy potrzebuję certyfikatu Google do uruchomienia reklam?",
      answer: "Nie — certyfikat Google nie jest wymagany do uruchomienia kampanii. Wymagane jest jednak konto Google Ads. My, jako agencja certyfikowana, prowadzimy całą konfigurację, optymalizację i zarządzanie kampaniami. Ty masz dostęp do pełnych danych i raportów w panelu Google Ads.",
    },
    {
      question: "Jaka jest minimalna kwota budżetu na Google Ads?",
      answer: "Minimalna kwota budżetu to 500 zł/miesiąc dla małych firm lokalne. Rekomendujemy jednak minimum 1 500 zł/miesiąc, aby kampania miała wystarczająco danych do optymalizacji. W Warszawie, gdzie konkurencja jest wysoka, budżet 2 000-5 000 zł/miesiąc zapewnia znacznie lepsze wyniki.",
    },
    {
      question: "Jak agencja rozlicza się za kampanie Google Ads?",
      answer: "Rozliczamy się na podstawie modelu: opłata za zarządzanie kampanią (400-1 500 zł/miesiąc) + budżet reklamowy, który wydajesz w Google Ads (płacisz bezpośrednio Google). Całkowita transparentność — wszystkie raportowanie co miesiąc.",
    },
    {
      question: "Jakie branże w Warszawie korzystają z Google Ads?",
      answer: "Kampanie Google Ads działają efektywnie dla wszystkich branż w Warszawie: prawnicy, dentyści, restauracje, sklepy internetowe, agencje nieruchomości, usługi budowlane, kancelarie, beauty/spa. Każda branża ma inną strategię — prawnicy targetują wysokie CPL, restauracje wdrażają remarketing, e-commerce skaluje Performance Max.",
    },
    {
      question: "Czy Google Ads da efekty dla małej firmy w Warszawie?",
      answer: "Tak — Google Ads są idealnym kanałem dla małych firm w Warszawie. Płacisz tylko za kliknięcia, możesz precyzyjnie targetować swoją grupę docelową (lokalizacja, słowa kluczowe, demografia), i masz pełne śledzenie zwrotu z inwestycji (ROI). Wiele naszych klientów z Warszawy to małe firmy, które zarabiają na Google Ads od pierwszego miesiąca.",
    },
    {
      question: "Co to jest Quality Score i jak wpływa na cenę reklamy?",
      answer: "Quality Score to ocena jakości reklamy, strony docelowej i słowa kluczowego przyznawana przez Google (1-10). Im wyższy Quality Score, tym niższy koszt za kliknięcie (CPC). Dobry Quality Score (7-10) może obniżyć CPC nawet o 50%. Obsługujemy Quality Score na poziomie 8-9 dla większości kampanii warszawskich klientów.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Google Ads Warszawa | Fotz Studio"
          description="Google Ads Warszawa — agencja certyfikowana Fotz.pl. Kampanie od 500 zł/mies., wyniki od 24-48h, specjaliści z certyfikatem Google. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/google-ads/warszawa"
          keywords="google ads warszawa, agencja google ads warszawa, kampanie google ads warszawa, reklamy google warszawa, google ads dla firm warszawa, sem warszawa, adwords warszawa"
        />

        <ServiceSchema
          name="Kampanie Google Ads Warszawa"
          description="Tworzenie i optymalizacja kampanii Google Ads dla firm z Warszawy. Agencja Fotz.pl — certyfikowani specjaliści Google Ads."
          provider="Fotz Studio"
          areaServed="Warszawa"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
            { name: "Google Ads", url: "https://fotz.pl/performance-marketing/google-ads" },
            { name: "Google Ads Warszawa", url: "https://fotz.pl/performance-marketing/google-ads/warszawa" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", path: "/" },
            { name: "Kampanie reklamowe", path: "/performance-marketing" },
            { name: "Google Ads", path: "/performance-marketing/google-ads" },
            { name: "Warszawa", path: "/performance-marketing/google-ads/warszawa" },
          ]}/>

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Agencja Google Ads Warszawa
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 mb-8">
                  Kampanie dla firm w Warszawie. Wyniki od 24-48h. Certyfikowani specjaliści.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">500 zł</div>
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

        {/* Why Google Ads in Warsaw */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Google Ads Warszawa — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Warszawa to 1,8 miliona mieszkańców, największy rynek handlowy w Polsce. Przedsiębiorcy z Warszawy inwestują rocznie miliardy złotych w reklamy internetowe — to naturalne miejsce do testowania kampanii dla całego kraju.
                  </p>
                  <p>
                    Konkurencja na słowa kluczowe w Warszawie jest wysoka (CPC średnio 5-15 zł), ale też liczba potencjalnych klientów jest ogromna. Kampanie Google Ads działają tutaj efektywnie dla każdej branży: e-commerce, usługi, nieruchomości, prawnicy, restauracje, sklepy.
                  </p>
                  <p>
                    Paid ads (Google Ads) działają szybciej niż SEO — wyniki widoczne w ciągu 24-48 godzin. W Warszawie, gdzie konkurencja jest duża, Google Ads to najprostsza droga do pierwszej strony i do konkretnych klientów.
                  </p>
                  <p>
                    Targetowanie lokalne (Warszawa, Piaseczno, Konstancin, Milanówek) pozwala precyzyjnie trafić w swoją grupę docelową. Jeśli prowadzisz biznes lokalny lub masz siedzbę w Warszawie, możesz kampanię skalować na całą Polskę z czasem.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services for Warsaw */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Co robimy dla firm z Warszawy?
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
                    Produkty ze zdjęciami i cenami bezpośrednio w wynikach Google. Obowiązkowe dla e-commerce w Warszawie.
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
                    Pojawianie się w Google Maps dla firm z fizyczną lokalizacją w Warszawie. Reklamy dla klientów w pobliżu.
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
                Jak prowadzimy kampanie Google Ads w Warszawie?
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
                Kampanie Google Ads Warszawa — cennik
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
                      <td className="p-4">15000+ zł</td>
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
                Kampanie Google Ads dla jakich branż w Warszawie?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Prawnicy i kancelarie</h3>
                    <p className="text-sm text-muted-foreground">
                      Google Ads dla "prawo pracy Warszawa", "rozwód Warszawa", "prawo budowlane". Wysokie CPL, ale jakościowych klientów.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Dentyści i kliniki</h3>
                    <p className="text-sm text-muted-foreground">
                      "Dentysta Warszawa", "implanty Piaseczno", "ortodonta". Reklamy lokalnych klinik z mapkami i czasami otwarcia.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje i catering</h3>
                    <p className="text-sm text-muted-foreground">
                      "Restauracja Warszawa centrum", "catering", "Uber Eats". Kampanie Google Maps i remarketing do poprzednich gości.
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
                      "Mieszkania Warszawa", "garaż Piaseczno", "biuro do wynajęcia". Kampanie dla agencji i deweloperów.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Usługi budowlane</h3>
                    <p className="text-sm text-muted-foreground">
                      "Malowanie Warszawa", "montaż okien", "hydraulik 24h". Google Ads dla handlowców i podwykonawców.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty i SPA</h3>
                    <p className="text-sm text-muted-foreground">
                      "Salon fryzjerski Warszawa", "manicure", "masaż Piaseczno". Reklamy dla salonów z rezerwacją online.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Edukacja i szkolenia</h3>
                    <p className="text-sm text-muted-foreground">
                      "Kursy Excel Warszawa", "angielski dla dzieci", "szkoła programowania". Remarketing do zainteresowanych uczestników.
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
                Dlaczego Fotz Studio jako agencja Google Ads w Warszawie?
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
                  <h3 className="text-xl font-bold mb-2">Specjalizacja w branżach warszawskich</h3>
                  <p className="text-muted-foreground">
                    Znamy warszawski rynek — od e-commerce do nieruchomości do usług. Każda branża ma inne wyzwania, my wiemy jak je rozwiązać.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Skalowanie do całej Polski</h3>
                  <p className="text-muted-foreground">
                    Zaczynasz w Warszawie, potem skalujesz na całą Polskę. Obsługujemy firmy z Warszawy, które chcą ekspandować — pomagamy im rosnąć.
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
                Najczęstsze pytania o Google Ads Warszawa
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
                  Uruchom kampanie Google Ads w Warszawie
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
        <ContactSection city="Warszawa" />
      </Layout>
    </>
  );
}
