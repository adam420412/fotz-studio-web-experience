import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function FacebookAdsLodz() {
  const faqItems = [
    {
      question: "Ile kosztuje Facebook Ads w Łodzi?",
      answer: "Facebook Ads (Meta Ads) w Łodzi zaczyna się od 400 zł/miesiąc za zarządzanie kampanią (pakiet START). Dodatkowy budżet reklamowy to osobna pozycja — od 500 zł/miesiąc dla małych firm do 10 000+ zł/miesiąc dla e-commerce i sieci handlowych. Całkowity koszt zależy od branży, docelowej grupy odbiorców i konkurencji na Facebooku w Łodzi.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii Facebook Ads w Łodzi?",
      answer: "Kampanię można uruchomić w ciągu 24-48 godzin od podpisania umowy. Obejmuje to: tworzenie spersonalizowanych audiencji dla Łodzi, design kreatywnych reklam, konfigurację campaign structury, ustawienie pixela tracking i wdrożenie. Pierwsze wyniki są widoczne w ciągu kilku dni, pełna optymalizacja trwa 2-4 tygodnie.",
    },
    {
      question: "Czy Facebook Ads są efektywne dla firm z Łodzi?",
      answer: "Tak — szczególnie dla małych i średnich firm, e-commerce i usług. Łódź to miasto o przyzwoitej liczbie aktywnych użytkowników Facebooka i Instagrama. Możesz targetować ludzi z Łodzi po wieku, zainteresowaniach, zachowaniu. CPC (koszt za kliknięcie) jest niższy niż w Warszawie, a konwersje są efektywne dla usług lokalnych i e-commerce.",
    },
    {
      question: "Czy mogę targetować reklamami tylko Łódź czy całą Polskę?",
      answer: "Możesz targetować bardzo precyzyjnie — sama Łódź, Łódź plus sąsiednie miasta, lub całą Polskę. To największa zaletą Facebook Ads. Jeśli prowadzisz biznes lokalny (salon fryzjerski, restauracja, klinika), reklamujesz się tylko dla ludzi z Łodzi. Jeśli prowadzisz e-commerce, możesz rozszerzyć na całą Polskę lub poza granicami.",
    },
    {
      question: "Jakie branże najczęściej korzystają z Facebook Ads w Łodzi?",
      answer: "Najczęściej Facebook Ads korzystają: sklepy internetowe (e-commerce), salony beauty i fryzjerskie, restauracje, usługi konsultingowe, agencje reklamowe, szkoły jezykowe, fitness kluby, gabinety medyczne. Łódź to dynamiczne miasto — każda branża może znaleźć swoją publiczność na Facebooku.",
    },
    {
      question: "Czy Facebook Ads będą efektywne dla mojego e-commerce z Łodzi?",
      answer: "Tak — Facebook Ads (i Instagram Ads) działają bardzo dobrze dla e-commerce. Możesz sprzedawać na całą Polskę z siedzbą w Łodzi. Łódź to były potentat tekstylny, teraz dynamiczny hub handlu i produkcji. Wiele naszych klientów z Łodzi to sklepy internetowe, które zarabiają 10-30 tyś zł miesięcznie na Facebook Ads.",
    },
    {
      question: "Co to jest Pixel Tracking i czy jest mi potrzebny w Łodzi?",
      answer: "Pixel Tracking to kod, który instalujesz na stronie i automatycznie rejestruje kliknięcia, zamówienia, zapamiętane artykuły. Umożliwia remarketing (reklamy do osób, które widzieli Twoją stronę) i conversion optimization (Facebook sam optymalizuje kampanie po konwersjach). Pixel jest kluczowy dla dokładnego raportowania ROI kampanii Facebook Ads.",
    },
    {
      question: "Czy mogę konkurować z firmami z Warszawy kampaniami Facebook Ads w Łodzi?",
      answer: "Tak, ale inną strategią. Firmy z Warszawy mają większy budżet, ale ty znasz lokalny rynek Łodzi lepiej. Twoją strategią powinna być: (1) dominate lokalne słowa kluczowe dla Łodzi (2) skaluj na sąsiednie miasta (3) jeśli e-commerce — skaluj na całą Polskę. W Facebook Ads wygrywa ten, kto ma lepszą strategię i kreatywne reklamy, nie ten z największym budżetem.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Facebook Ads Łódź — reklamy Meta dla firm | Fotz.pl"
          description="Facebook Ads Łódź — agencja Fotz.pl. Kampanie Meta Ads dla firm z Łodzi. Od 400 zł/mies. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/facebook-ads/lodz"
          keywords="facebook ads łódź, agencja facebook ads łódź, kampanie facebook łódź, reklamy facebook łódź, meta ads łódź, instagram ads łódź"
        />

        <ServiceSchema
          name="Kampanie Facebook Ads Łódź"
          description="Tworzenie i optymalizacja kampanii Facebook Ads i Meta Ads dla firm z Łodzi. Agencja Fotz.pl — certyfikowani specjaliści reklam Meta."
          provider="Fotz Studio"
          areaServed="Lodz"
        />

        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
            { name: "Facebook Ads", url: "https://fotz.pl/performance-marketing/facebook-ads" },
            { name: "Facebook Ads Łódź", url: "https://fotz.pl/performance-marketing/facebook-ads/lodz" },
          ]}
        />

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs
          items={[
            { label: "Strona główna", path: "/" },
            { label: "Kampanie reklamowe", path: "/performance-marketing" },
            { label: "Facebook Ads", path: "/performance-marketing/facebook-ads" },
            { label: "Łódź", path: "/performance-marketing/facebook-ads/lodz" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Agencja Facebook Ads Łódź
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 mb-8">
                  Kampanie Meta Ads dla firm w Łodzi. Wyniki od 24-48h. Certyfikowani specjaliści.
                </p>
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

        {/* Why Facebook Ads in Lodz */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Facebook Ads Łódź — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Łódź to trzecie co do wielkości miasto w Polsce, znane jako była stołica przemysłu tekstylnego. Dzisiaj to dynamiczne centrum e-commerce, produkcji i usług. Populacja 650 tysięcy mieszkańców, ale co najważniejsze — Łódź to hub handlu elektronicznego. Wiele firm z branży e-commerce ma siedziby w Łodzi, gdzie znajdują się magazyny i centra logistyczne.
                  </p>
                  <p>
                    Facebook i Instagram mają ogromne nasycenie użytkowników w Łodzi — szczególnie w wieku 25-55 lat, czyli idealna grupa dla e-commerce i usług. Konkurencja na Facebook Ads jest niższa niż w Warszawie, ale rynek jest aktywny i pozwala na bardzo efektywne kampanie.
                  </p>
                  <p>
                    Łódź przyciąga młodych przedsiębiorców i dynamicznych firm, które szukają tanszej lokalizacji niż Warszawa czy Kraków. Facebook Ads działają szybciej niż SEO — wyniki widoczne w ciągu 24-48 godzin. Możesz szybko przetestować swoją ofertę i skalować kampanię na resztę Polski.
                  </p>
                  <p>
                    Historia tekstylna Łodzi to przychód dla marek odzieżowych, producentów tkanin i usług logistycznych. Manufaktura (dawna manufaktura tekstylna) to teraz hub biznesowy i kulturalny. Firmy, które reklamują się na Facebooku w Łodzi, osiągają niski CPC (koszt za kliknięcie) i wysoką konwersję.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services for Lodz */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Jakie reklamy Facebook Ads robimy dla Łodzi?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie konwersji</h3>
                  <p className="text-muted-foreground">
                    Reklamy skierowane na konkretny cel — sprzedaż, leady, zapamiętane artykuły. Facebook optymalizuje sam dostawy do osób, które mogą dokonać konwersji.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie zasięgu i świadomości</h3>
                  <p className="text-muted-foreground">
                    Pokazanie marki jak największej liczbie osób z Łodzi. Budowanie świadomości, reach, zapamiętanie nazwy firmy.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie leadów</h3>
                  <p className="text-muted-foreground">
                    Zbieranie kontaktów, numery telefonu, emaile. Idealne dla agencji, konsultantów, szkoł jezykowych działających w Łodzi.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Remarketing i ROAS kampanie</h3>
                  <p className="text-muted-foreground">
                    Reklamy dla osób, które już odwiedzały Twoją stronę lub kliknęły link. Konwersja 3-5x wyższa niż w kampaniach cold.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie katalogowe</h3>
                  <p className="text-muted-foreground">
                    Pokazywanie produktów ze zdjęciami i cenami. Obowiązkowe dla e-commerce. Produkty są dynamicznie pokazywane konkretnym osobom.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie niestandardowe</h3>
                  <p className="text-muted-foreground">
                    Kampanie na wideo, story, kolekcie, leads form, messaging ads. Każdy format, każdy cel — dopasowujemy do Twojej branży.
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
                Jak prowadzimy kampanie Facebook Ads w Łodzi?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brief i analiza</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, branżę, konkurencję w Łodzi i cele kampanii. Jaka jest Twoja docelowa grupa odbiorców? Ile jesteś gotów wydać na kampanię?
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Segmentacja i audiencje</h3>
                    <p className="text-muted-foreground">
                      Tworzymy spersonalizowane audiencje dla Łodzi — wiek, zainteresowania, zachowanie, status kupowania. Łódź to ponad 650 tys. mieszkańców — znajdujemy dla Ciebie idealne 5-10% z nich.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Kreatywne i copy</h3>
                    <p className="text-muted-foreground">
                      Projektujemy obrazy, filmy, słowa reklam. Reklama musi zwrócić uwagę w newsfeedzie wśród dziesiątek treści. Testujemy różne warianty — tekst, rozmiar, kolorystyka.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Wdrożenie i pixel tracking</h3>
                    <p className="text-muted-foreground">
                      Uruchamiamy kampanię, konfigurujemy pixel Facebooka na stronie, ustawiamy konwersje i cały mechanizm trackingu. Raportowanie jest automatyczne.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">5</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optymalizacja i scaling</h3>
                    <p className="text-muted-foreground">
                      Co miesiąc analizujemy wyniki, testujemy nowe kreatywne, optymalizujemy budżety. Jeśli działa — skalujemy. Jeśli nie — zatrzymujemy i próbujemy nowego podejścia.
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
                Kampanie Facebook Ads Łódź — cennik
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
                  </tbody>
                </table>
              </div>
              <div className="max-w-3xl mx-auto mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Każdy pakiet zawiera:</strong> bezpłatną wstępną konsultację, strategię indywidualną, raportowanie miesięczne w Facebooku Ads Manager, dostęp do raportów online, dedykowany email ekspertów oraz nieograniczone testy A/B. Wszystkie pakiety mogą być rozszerzone o dodatkowe usługi.
                </p>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries for Lodz */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Branże, które korporacyjnie na Facebook Ads w Łodzi
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">E-commerce i moda</h3>
                  <p className="text-muted-foreground text-sm">
                    Łódź to hub e-commerce — tu się produkuje i wysyła. Sklepy internetowe osiągają najlepsze ROI na Facebook Ads ze wszystkich branż w mieście.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Salony beauty i fryzjerskie</h3>
                  <p className="text-muted-foreground text-sm">
                    Reklamy lokalne, promocje, rezerwacje online. Facebook to idealne miejsce do zbudowania bazy stałych klientów w Łodzi.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Restauracje i kawiarnie</h3>
                  <p className="text-muted-foreground text-sm">
                    Kampanie promocyjne, Instagram Reels, promowanie menu. Ludzie w Łodzi aktywnie szukają miejsc do jedzenia na Facebooku.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Szkoły jezykowe</h3>
                  <p className="text-muted-foreground text-sm">
                    Szkoły jezykowe w Łodzi szukają studentów. Facebook Ads idealnie targetuje osoby w wieku 16-40 lat zainteresowane nauką.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Agencje marketingowe</h3>
                  <p className="text-muted-foreground text-sm">
                    Agencje w Łodzi reklamują się na Facebooku żeby znaleźć nowych klientów — skuteczność 40-60% lepszej niż cold emailing.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Fitness i wellness</h3>
                  <p className="text-muted-foreground text-sm">
                    Siłownie, fitness kluby, joga — Facebook Ads trafiają do osób zainteresowanych zdrowiem i aktywnością w Łodzi.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    Najczęstsze pytania — Facebook Ads Łódź
                  </h2>
                  <p className="text-muted-foreground">
                    Odpowiadamy na pytania klientów o kampanie Meta, Facebook Ads i współpracę z agencją.
                  </p>
                </div>
                <div className="space-y-4">
                  {faqItems.map((item, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-lg border border-border bg-background"
                    >
                      <h3 className="font-bold mb-3">{item.question}</h3>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* CTA Section */}
        <ContactSection
          title="Zaplanuj kampanię Facebook Ads w Łodzi"
          description="Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy Twoją sytuację, konkurencję w Łodzi i zaproponujemy strategię Facebook Ads, która przyniesie wyniki."
        />

        {/* Internal Links */}
        <section className="py-12 border-t border-border/30 bg-card/20">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Facebook Ads Warszawa", to: "/performance-marketing/facebook-ads/warszawa" },
                { label: "Google Ads Łódź", to: "/performance-marketing/google-ads/lodz" },
                { label: "Pozycjonowanie Łódź", to: "/uslugi/seo/lodz" },
                { label: "Strony internetowe", to: "/uslugi/strony-internetowe" },
                { label: "Social media marketing", to: "/social-media" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
