import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function FacebookAdsKatowice() {
  const faqItems = [
    {
      question: "Ile kosztuje Facebook Ads w Katowicach?",
      answer: "Facebook Ads (Meta Ads) w Katowicach zaczyna się od 400 zł/miesiąc za zarządzanie kampanią (pakiet START). Dodatkowy budżet reklamowy to osobna pozycja — od 500 zł/miesiąc dla małych firm do 10 000+ zł/miesiąc dla e-commerce i sieci handlowych. Całkowity koszt zależy od branży, docelowej grupy odbiorców i konkurencji na Facebooku w Katowicach i Śląsku.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii Facebook Ads w Katowicach?",
      answer: "Kampanię można uruchomić w ciągu 24-48 godzin od podpisania umowy. Obejmuje to: tworzenie spersonalizowanych audiencji dla Katowic i regionu GZM, design kreatywnych reklam, konfigurację campaign structury, ustawienie pixela tracking i wdrożenie. Pierwsze wyniki są widoczne w ciągu kilku dni, pełna optymalizacja trwa 2-4 tygodnie.",
    },
    {
      question: "Czy Facebook Ads są efektywne dla firm z Katowic?",
      answer: "Tak — szczególnie dla średnich i dużych firm, e-commerce i usług konferencyjnych. Katowice to stolica Górnego Śląska z populacją 300 tys., ale w całym GZM (Górnośląsko-Zagłębiowska Metropolia) mieszka 2,5 mln ludzi. Możesz targetować ludzi z Katowic po wieku, zainteresowaniach, zachowaniu. CPC jest efektywny, a konwersje pracują bardzo dobrze dla usług biznesowych.",
    },
    {
      question: "Czy mogę targetować reklamami tylko Katowice czy muszę brać cały Śląsk?",
      answer: "Możesz targetować bardzo precyzyjnie — same Katowice, Katowice plus sąsiednie miasta, całą GZM, lub cały Śląsk. To największa zaleta Facebook Ads. Jeśli prowadzisz biznes lokalny w Katowicach (salon, restauracja, klinika), reklamujesz się tylko dla ludzi z Katowic. Jeśli pracujesz na rynku B2B, możesz rozszerzyć na cały Śląsk lub całą Polskę.",
    },
    {
      question: "Jakie branże najczęściej korzystają z Facebook Ads w Katowicach?",
      answer: "Najczęściej Facebook Ads korzystają: hotele i konferencje (MICE), restauracje i kluby, salony beauty i fryzjerskie, usługi konsultingowe, agencje marketingowe, szkoły jezykowe, fitness kluby, gabinety medyczne, nieruchomości, sklepy internetowe. Katowice to dynamiczne miasto — MICE industry sam generuje miliony zł w reklamach.",
    },
    {
      question: "Czy Facebook Ads będą efektywne dla mojego e-commerce z Katowic?",
      answer: "Tak — Facebook Ads (i Instagram Ads) działają bardzo dobrze dla e-commerce. Możesz sprzedawać na całą Polskę z siedzbą w Katowicach. Wiele naszych klientów z Katowic to sklepy internetowe o branżach takich jak elektronika, ubrania, kosmetyki, które zarabiają 15-40 tyś zł miesięcznie na Facebook Ads.",
    },
    {
      question: "Czy Katowice są dobrym rynkiem do testowania kampanii Facebook Ads?",
      answer: "Tak — Katowice i Górny Śląsk to doskonały rynek testowania. GZM to 2,5 mln ludzi — wystarczająco duży, żeby mieć reprezentatywne wyniki, ale wystarczająco mały, żeby testować taniej niż na całej Polsce. Wiele firm testuje kampanie w Katowicach, a potem skaluje na całą Polskę.",
    },
    {
      question: "Czy mogę konkurować z firmami z Warszawy kampaniami Facebook Ads w Katowicach?",
      answer: "Tak, ale inną strategią. Firmy z Warszawy mają większy budżet, ale ty znasz lokalny rynek Katowic i Śląska lepiej. Twoją strategią powinna być: (1) dominate lokalne reklamy dla Katowic (2) skaluj na GZM i Śląsk (3) jeśli e-commerce — skaluj na całą Polskę. W Facebook Ads wygrywa ten, kto ma lepszą strategię i kreatywne reklamy.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Facebook Ads Katowice — reklamy Meta dla firm | Fotz.pl"
          description="Facebook Ads Katowice — agencja Fotz.pl. Kampanie Meta Ads dla firm z Katowic i Śląska. Od 400 zł/mies. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/facebook-ads/katowice"
          keywords="facebook ads katowice, meta ads katowice, reklamy facebook katowice, agencja facebook ads katowice, kampanie facebook katowice, instagram ads katowice, facebook ads dla firm katowice, reklama na facebooku katowice, meta ads agencja katowice, facebook ads cennik katowice"
        />

        <ServiceSchema
          name="Kampanie Facebook Ads Katowice"
          description="Tworzenie i optymalizacja kampanii Facebook Ads i Meta Ads dla firm z Katowic i Śląska. Agencja Fotz.pl — certyfikowani specjaliści reklam Meta."
          provider="Fotz Studio"
          areaServed="Katowice"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
            { name: "Facebook Ads", url: "https://fotz.pl/performance-marketing/facebook-ads" },
            { name: "Facebook Ads Katowice", url: "https://fotz.pl/performance-marketing/facebook-ads/katowice" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", path: "/" },
            { name: "Kampanie reklamowe", path: "/performance-marketing" },
            { name: "Facebook Ads", path: "/performance-marketing/facebook-ads" },
            { name: "Katowice", path: "/performance-marketing/facebook-ads/katowice" },
          ]}/>

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Agencja Facebook Ads Katowice
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 mb-8">
                  Facebook Ads Katowice — profesjonalne kampanie Meta Ads i reklamy Facebook dla firm z Katowice i Śląska. Zwiększamy sprzedaż, zasięg i ROI dzięki precyzyjnemu targetowaniu. Bezpłatna konsultacja.</p>
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
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">2,5 mln</div>
                  <div className="text-sm text-sky-100">Ludzi w GZM</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-300 mb-2">Raport</div>
                  <div className="text-sm text-sky-100">Co miesiąc</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Facebook Ads in Katowice */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Facebook Ads Katowice — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Katowice to stolica województwa śląskiego i gospodarczego serca Górnego Śląska. Samo miasto ma 300 tysięcy mieszkańców, ale w całej Górnośląsko-Zagłębiowskiej Metropolii (GZM) mieszka 2,5 miliona ludzi — to trzeci co do wielkości rynek metropolitalny w Polsce. To jest ogromna populacja dla kampanii Facebook Ads.
                  </p>
                  <p>
                    Katowice to dynamiczne centrum konferencji, biznesu i targów (MICE industry). Hotele takie jak Marriott, Hilton, a także dziesiątki mniejszych obiektów, biur i sal konferencyjnych generują miliardy złotych w obrotach. Firmy z MICE intensywnie reklamują się na Facebooku i Instagramie, co sprawia, że rynek jest aktywny i przetestowany.
                  </p>
                  <p>
                    Facebook i Instagram mają ogromne nasycenie użytkowników w Katowicach i Śląsku — szczególnie w wieku 25-55 lat, czyli idealna grupa dla e-commerce, usług i konferencji. Konkurencja jest umiarkowanaana — niższa niż w Warszawie, ale wyższa niż w małych miastach. To sprawia, że CPC (koszt za kliknięcie) jest konkurencyjny.
                  </p>
                  <p>
                    Katowice to też hub IT i technologiczny — wiele firm tech ma tu siedziby i centra R&D. Międzynarodowe korporacje (KGHM, PKN Orlen) mają tu zasoby i biura, co sprawia, że rynek jest zaawansowany i profesjonalny. Kampanie Facebook Ads działają szybciej i drożej niż SEO — wyniki widoczne w ciągu 24-48 godzin.
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
                Jakie reklamy Facebook Ads robimy dla Katowic?
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
                    Pokazanie marki jak największej liczbie osób w Katowicach i GZM. Budowanie świadomości, reach, zapamiętanie nazwy firmy.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kampanie leadów</h3>
                  <p className="text-muted-foreground">
                    Zbieranie kontaktów, numery telefonu, emaile. Idealne dla hoteli, agencji eventowych, konsultantów działających w Katowicach.
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
                Jak prowadzimy kampanie Facebook Ads w Katowicach?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brief i analiza</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, branżę, konkurencję w Katowicach i cele kampanii. Jaka jest Twoja docelowa grupa odbiorców? Ile jesteś gotów wydać na kampanię?
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
                      Tworzymy spersonalizowane audiencje dla Katowic, GZM lub całego Śląska — wiek, zainteresowania, zachowanie, status kupowania. Katowice i Śląsk to 2,5 mln ludzi — znajdujemy dla Ciebie idealne 5-10% z nich.
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
                Kampanie Facebook Ads Katowice — cennik
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

        {/* Industries for Katowice */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Branże, które efektywnie korzystają z Facebook Ads w Katowicach
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Hotele i MICE events</h3>
                  <p className="text-muted-foreground text-sm">
                    Katowice to miasto konferencji. Hotele, centra konferencyjne i agencje eventowe reklamują się na Facebooku. MIME industry to miliardy zł w obrotach.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">E-commerce i moda</h3>
                  <p className="text-muted-foreground text-sm">
                    Sklepy internetowe osiągają najlepsze ROI na Facebook Ads. Katowice to rynek dostatecznie duży, żeby testować tanio, a potem skalować na całą Polskę.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Restauracje i gastronomia</h3>
                  <p className="text-muted-foreground text-sm">
                    Reklamy lokalne, promocje, rezerwacje online. Katowice ma dynamiczną scenę restauracyjną — Facebook to idealne miejsce do promocji.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Szkoły jezykowe i edukacja</h3>
                  <p className="text-muted-foreground text-sm">
                    Szkoły jezykowe szukają studentów na Facebooku. Katowice ma dużą populację zainteresowaną nauką i rozwojem zawodowym.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Fitness, wellness, beauty</h3>
                  <p className="text-muted-foreground text-sm">
                    Siłownie, spa, salony fryzjerskie i beauty. Facebook Ads trafiają do osób zainteresowanych zdrowiem i pielęgnacją w Katowicach.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-lg font-bold mb-3">Usługi B2B i konsulting</h3>
                  <p className="text-muted-foreground text-sm">
                    Agencje, doradcy, konsultanci — Facebook i LinkedIn są kanałami to zdobywania leadów dla rynku biznesowego w Katowicach.
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
                    Najczęstsze pytania — Facebook Ads Katowice
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
          title="Zaplanuj kampanię Facebook Ads w Katowicach"
          description="Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy Twoją sytuację, konkurencję w Katowicach i Śląsku, oraz zaproponujemy strategię Facebook Ads, która przyniesie wyniki."
        />

        {/* Internal Links */}
        <section className="py-12 border-t border-border/30 bg-card/20">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Facebook Ads Łódź", to: "/performance-marketing/facebook-ads/lodz" },
                { label: "Google Ads Katowice", to: "/performance-marketing/google-ads/katowice" },
                { label: "Pozycjonowanie Katowice", to: "/uslugi/seo/katowice" },
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
