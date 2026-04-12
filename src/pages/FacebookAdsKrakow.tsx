import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function FacebookAdsKrakow() {
  const faqItems = [
    {
      question: "Ile kosztują kampanie Facebook Ads (Meta Ads) w Krakowie?",
      answer: "Facebook Ads w Krakowie zaczyna się od 400 zł/miesiąc za zarządzanie kampanią (pakiet START). Dodatkowy budżet reklamowy na samą Platformę Meta to osobna pozycja — od 500 zł/miesiąc dla małych firm do 20 000+ zł/miesiąc dla e-commerce i dużych sieci. Całkowity koszt zależy od branży, konkurencji i zasobów kreatywnych.",
    },
    {
      question: "Jak szybko zobaczę wyniki kampanii Facebook Ads w Krakowie?",
      answer: "Pierwsze wyniki są widoczne już po 24-48 godzinach od uruchomienia kampanii. Facebook szybko testuje różne audience i creative, więc dane napływają natychmiast. Pełna optymalizacja i znaczące konwersje trwają 2-4 tygodnie, gdy kampania zbierze wystarczająco danych do AI-driven optymalizacji.",
    },
    {
      question: "Jakie formaty reklam są dostępne na Facebook/Instagram dla firm w Krakowie?",
      answer: "Dostępne są: Feed Ads (klasyczne reklamy w feed), Stories Ads (reklamy fullscreen na Stories), Reels Ads (w sekcji Reels na Instagramie), Carousel Ads (karuzela produktów), Video Ads (wideo reklamowe), Lead Ads (zbieranie leadów bezpośrednio z Facebooka), Dynamic Ads (automatyczne reklamy produktów dla osób zainteresowanych). Każdy format ma inne zastosowania w zależności od branży i celu kampanii.",
    },
    {
      question: "Czy potrzebuję Pixel Facebooka (Meta Pixel) do kampanii w Krakowie?",
      answer: "Tak — Meta Pixel jest kluczowy dla efektywnych kampanii. Instalujemy pixel na Twojej stronie, aby śledzić konwersje, budować audience retargeting i wspierać AI Facebooka w znalezeniu nowych klientów. Pixel pozwala także na precise audience targeting: ludzie, którzy odwiedzili Twoją stronę, zainteresowali się produktami, ale nie kupili. To retargeting — i działa bardzo dobrze w Krakowie.",
    },
    {
      question: "Jakie jest CPM i CPC na Facebook/Instagram w Krakowie?",
      answer: "CPM (koszt za 1000 impressionów) na Facebook/Instagram w Krakowie wynosi średnio 4-12 zł (niżej niż w Warszawie), CPC (koszt za kliknięcie) to 0,8-4 zł. Ceny zależą od branży, sezonu i konkurencji. E-commerce i finansowe są droższe (8-16 zł CPM), usługi i handel lokalny są tańsze (2-6 zł CPM). Nasi specjaliści optymalizują bidding, aby unikać drożych impressionów.",
    },
    {
      question: "Jak Facebook/Instagram widzi moich potencjalnych klientów w Krakowie?",
      answer: "Facebook ma dostęp do miliardów danych: wiek, płeć, zainteresowania, zachowanie na platformie, historia zakupów (pixel), lokalizacja. Targetowanie w Krakowie może być bardzo precyzyjne: wiek 25-50, zainteresowani modą/spożywczym/turystyką, mieszkańcy Starego Miasta/Kazimierza, aktywnie poszukujący produktów online. Lookalike audience — ludzie podobni do Twoich obecnych klientów — również działa doskonale w Krakowie.",
    },
    {
      question: "Jaki ROAS mogę oczekiwać z Facebook Ads w Krakowie?",
      answer: "ROAS (Return on Ad Spend) wynosi zazwyczaj 2:1 do 5:1 dla dobrze skonfigurowanych kampanii. E-commerce średnio 3-5:1, usługi/lead generation 1,5-3:1, turystyka i hospitality mogą osiągnąć 4-6:1. Pierwszy miesiąc to testowanie — drugi i trzeci pokazują stały wzrost ROAS. Po 3 miesiącach optymalizacji, nasze kampanie dla firm krakowskich osiągają najwyższy poziom efektywności.",
    },
    {
      question: "Czy Facebook Ads działają dla małych firm i usług lokalnych w Krakowie?",
      answer: "Tak — Facebook Ads są idealnym kanałem dla małych firm i usług lokalnych w Krakowie (restauracje, salony, galerie, usługi turystyczne, handlowcy). Możesz targetować precyzyjnie Kraków (Stare Miasto, Kazimierz, Nowa Huta), budować remarketing dla turystów i klientów, testować kampanię z budżetem 500-1000 zł/miesiąc. Wiele naszych lokalnych klientów krakowskich generuje 5-15 leadów dziennie za mniej niż 1500 zł/miesiąc na Facebook Ads.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Facebook Ads Kraków — reklamy Meta dla firm | Fotz.pl"
          description="Facebook Ads Kraków ✓ Kampanie Meta Ads (Facebook, Instagram) od 400 zł/mies. Certyfikowani specjaliści, wyniki od 48h. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/facebook-ads/krakow"
          keywords="facebook ads kraków, agencja facebook ads kraków, kampanie facebook kraków, reklamy facebook kraków, meta ads kraków, instagram ads kraków, facebook ads małopolska"
        />

        <ServiceSchema
          name="Kampanie Facebook Ads Kraków"
          description="Tworzenie i optymalizacja kampanii Facebook Ads (Meta Ads) dla firm z Krakowa. Agencja Fotz.pl — certyfikowani specjaliści Meta."
          provider="Fotz Studio"
          areaServed="Krakow"
        />

        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
            { name: "Facebook Ads", url: "https://fotz.pl/performance-marketing/facebook-ads" },
            { name: "Facebook Ads Kraków", url: "https://fotz.pl/performance-marketing/facebook-ads/krakow" },
          ]}
        />

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs
          items={[
            { label: "Strona główna", path: "/" },
            { label: "Kampanie reklamowe", path: "/performance-marketing" },
            { label: "Facebook Ads", path: "/performance-marketing/facebook-ads" },
            { label: "Kraków", path: "/performance-marketing/facebook-ads/krakow" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-slate-950 via-purple-950 to-pink-900 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Facebook Ads Kraków — Reklamy Meta dla Twojej Firmy
                </h1>
                <p className="text-xl md:text-2xl text-pink-100 mb-8">
                  Kampanie na Facebooku i Instagramie dla firm w Krakowie. Wyniki od 48h. Certyfikowani specjaliści Meta Ads.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">400 zł</div>
                  <div className="text-sm text-pink-100">Kampanie od</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">48h</div>
                  <div className="text-sm text-pink-100">Wyniki od</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">100%</div>
                  <div className="text-sm text-pink-100">Certyfikowani</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">Raport</div>
                  <div className="text-sm text-pink-100">Co miesiąc</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Facebook Ads in Krakow */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Facebook Ads Kraków — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Kraków to 800 000 mieszkańców, drugie największe miasto w Polsce, z silnym sektorem turystycznym, gastronomii, handlu i e-commerce. Drugi rynek handlowy w kraju — przedsiębiorcy inwestują miliony złotych w reklamy, a Facebook Ads to najskuteczniejszy kanał dla akwizycji klientów.
                  </p>
                  <p>
                    Facebook i Instagram w Krakowie działają dla wszystkich branż: restauracje Starego Miasta, sklepy online, galerie sztuki, biura nieruchomości, salony piękności, usługi turystyczne. CPM i CPC są niższe niż w Warszawie (średnio 4-12 zł CPM), a konkurencja jest mniejsza — co oznacza lepsze wyniki za mniej pieniędzy.
                  </p>
                  <p>
                    Pixel Facebooka umożliwia precyzyjny retargeting — reklamy dla turystów i potencjalnych klientów, którzy widzieli Twoją ofertę. Konwersja z retargeting jest 3-5x wyższa niż z kampanii prospecting, a koszt za konwersję jest znacznie niższy.
                  </p>
                  <p>
                    Algorytm Meta automatycznie znajduje ludzi zainteresowanych Twoimi produktami/usługami w Krakowie — nie musisz sam wybiór ręcznie. AI-driven optimization oznacza, że kampania jest coraz bardziej efektywna każdego dnia, a CPM spada w miarę zbierania danych.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Ad Formats */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Formaty reklam Facebook &amp; Instagram
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Feed Ads</h3>
                  <p className="text-muted-foreground">
                    Klasyczne reklamy w głównym feed'zie Facebooka i Instagrama. Najczęstszy format — obraz i tekst, kliknięcie prowadzi na Twoją stronę lub Landing Page.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Stories Ads</h3>
                  <p className="text-muted-foreground">
                    Fullscreen reklamy na Stories (Facebook i Instagram). Bardzo efektywne dla mobile audience, szybka akcja, idealne dla restauracji i usług lokalnych w Krakowie.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Reels Ads</h3>
                  <p className="text-muted-foreground">
                    Reklamy wideo w sekcji Reels na Instagramie. Nowy format Meta, bardzo wysoki engagement, efektywne dla kreatywnych kampanii i turystyki w Krakowie.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Carousel Ads</h3>
                  <p className="text-muted-foreground">
                    Karuzela produktów (do 10 zdjęć/filmów). Idealnie dla e-commerce i galerii (pokoje hotelowe, mieszkania, produkty). Każdy item ma swój slajd.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Video Ads</h3>
                  <p className="text-muted-foreground">
                    Reklamy wideo (6 sekund do 3 minut). Najwyższy engagement, opowiadanie historii marki, demo produktów. Pracują we wszystkich formatach.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Lead Ads &amp; Dynamic Ads</h3>
                  <p className="text-muted-foreground">
                    Lead Ads — zbieranie emailów i numerów telefonów bezpośrednio z Facebooka. Dynamic Ads — automatyczne pokazywanie produktów osobom zainteresowanym. Oba bez przychodzenia na stronę.
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
                Jak prowadzimy kampanie Facebook Ads w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brief i analiza branży</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, produkty, konkurencję na Facebook/Instagram w Krakowie. Jakie persona są Twoimi klientami? Jaki jest Twój LTV? Ile jesteś gotów wydać na akwizycję?
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Setup Pixel &amp; Audience</h3>
                    <p className="text-muted-foreground">
                      Instalujemy Meta Pixel na Twojej stronie, definiujemy konwersje (zakup, contact, lead). Tworzymy Custom Audience, Lookalike Audience (nowi ludzie podobni do klientów), retargeting segments dla remarketing kampanii w Krakowie.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Kreatywne (Copy &amp; Design)</h3>
                    <p className="text-muted-foreground">
                      Tworzymy copy (teksty reklam) i visual creative (zdjęcia/wideo) dla każdego segmentu. A/B testujemy wiele wariantów — różne headlines, call-to-actions, obrazy. Meta AI pomaga znaleźć najlepsze kombinacje.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Uruchomienie i daily optimization</h3>
                    <p className="text-muted-foreground">
                      Kampania live — zaczyna zbierać dane. Przez pierwsze 48h monitorujemy CPM, CPC, CTR. Pauzujemy low-performing kreatywne, amplifikujemy best performers. Meta Ads Manager optymalizuje automatycznie.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">5</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analiza i skalowanie</h3>
                    <p className="text-muted-foreground">
                      Po 2-4 tygodniach mamy dostatecznie danych. Analizujemy ROAS, CPL, CAC. Skalujemy budżet na best-performing audience i creative. Testujemy nowe audience. Tworzymy long-term growth plan.
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
                Kampanie Facebook Ads Kraków — cennik
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
                      <td className="p-4">Małe firmy, usługi lokalne</td>
                    </tr>
                    <tr className="border-b border-border bg-background">
                      <td className="p-4 font-semibold">GROWTH</td>
                      <td className="p-4">800 zł/mies.</td>
                      <td className="p-4">2000-5000 zł</td>
                      <td className="p-4">Średnie firmy, E-commerce</td>
                    </tr>
                    <tr className="border-b border-border bg-background">
                      <td className="p-4 font-semibold">PRO</td>
                      <td className="p-4">1500+ zł/mies.</td>
                      <td className="p-4">5000+ zł</td>
                      <td className="p-4">E-commerce, sieci, skalowanie</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-4 font-semibold">ENTERPRISE</td>
                      <td className="p-4">% budżetu (15-20%)</td>
                      <td className="p-4">15000+ zł</td>
                      <td className="p-4">Duże sieci, brand awareness</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
                Każdy pakiet obejmuje setup Pixel &amp; audience, creative optimization, daily management, A/B testing, monthly reporting ze szczegółową analizą ROAS i CAC.
              </p>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kampanie Facebook Ads dla jakich branż w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">E-commerce &amp; online sklepy</h3>
                    <p className="text-sm text-muted-foreground">
                      Carousel Ads, Dynamic Ads, retargeting. Skalowanie sprzedaży online dla produktów, odzieży, wyposażenia. Średnia ROAS 3-5:1.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje Starego Miasta</h3>
                    <p className="text-sm text-muted-foreground">
                      Video Ads, Stories Ads dla promocji, menu. Lead Ads do rezerwacji. Geo-targeting — turystów i mieszkańców Krakowa. CPM niski, konwersja wysoka.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Turystyka &amp; hotele</h3>
                    <p className="text-sm text-muted-foreground">
                      Carousel Ads (galeria pokoi), Video Ads (wirtualne spacery), Lead Ads do rezerwacji. Targeting turystów z całej Europy + lokalni goście.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty &amp; SPA</h3>
                    <p className="text-sm text-muted-foreground">
                      Reels Ads (before/after), Stories Ads, Lead Ads dla rezerwacji. Retargeting osób zainteresowanych. CPL niski, wysoki ROAS.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Nieruchomości</h3>
                    <p className="text-sm text-muted-foreground">
                      Carousel Ads (galeria mieszkań), Video Ads (spacery 3D), Lead Ads. Targetowanie wiekowe, zainteresowane kupnem/wynajmem w Krakowie.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Usługi (elektryk, malowanie, montaż)</h3>
                    <p className="text-sm text-muted-foreground">
                      Lead Ads do zbierania zapytań. Geo-targeting Kraków i Wieliczka. Low CPC, szybka konwersja, małe budżety działają doskonale.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Galerie &amp; sztuka</h3>
                    <p className="text-sm text-muted-foreground">
                      Reels Ads (wernisaże, wystawy), Stories Ads, Video Ads. Targeting osób zainteresowanych sztuką i kulturą w Krakowie. Niche audience, wysoki engagement.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Edukacja &amp; szkolenia</h3>
                    <p className="text-sm text-muted-foreground">
                      Video Ads (kursy, szkolenia), Lead Ads. Retargeting zainteresowanych osób (pixel). CPL średni, wysoka jakość leadów dla szkół i instytutów krakowskich.
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
                Dlaczego Fotz Studio jako agencja Facebook Ads w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Certyfikowani Meta Partners</h3>
                  <p className="text-muted-foreground">
                    Nasi specjaliści są certyfikowani przez Meta (Facebook Blueprint). Mamy dostęp do beta features, advanced audience targeting tools i najnowszych algorytmów Meta AI.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Szybkie setup &amp; wyniki (48h)</h3>
                  <p className="text-muted-foreground">
                    Instalujemy Pixel, definiujemy audience, uruchamiamy kampanię w 48 godzin. Wyniki są natychmiast widoczne — CPM, CPC, engagement. Nie czekasz tygodniami.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Kreatywne na każdy format</h3>
                  <p className="text-muted-foreground">
                    Tworzymy kreatywne i copy na każdy format (Feed, Stories, Reels, Carousel, Video, Lead Ads). A/B testujemy wszystko — wiele wariantów, szybka iteracja.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">ROAS &gt; CAC fokus</h3>
                  <p className="text-muted-foreground">
                    Każda decyzja jest oparta na ROAS. Nie wydajemy budżetu beznamietnie — skalujemy to, co działa. Średni ROAS naszych klientów krakowskich: 3-5:1 po 3 miesiącach.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Raportowanie co miesiąc</h3>
                  <p className="text-muted-foreground">
                    Szczegółowy raport co miesiąc: CPM, CPC, ROAS, CAC, konwersje, revenue. Transparentne dane — wiesz dokładnie, jak wydawane są pieniądze na Facebooku i Instagramie.
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
                Najczęstsze pytania o Facebook Ads Kraków
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
                  Uruchom kampanie Facebook Ads w Krakowie
                </h2>
                <p className="text-lg text-slate-300 mb-10">
                  Bezpłatna konsultacja bez zobowiązań. Poznaj naszą strategię dla Twojej branży. Wyniki od 48h.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Bezpłatna konsultacja
                  </Link>
                  <Link
                    to="/performance-marketing/facebook-ads"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition border border-white/20"
                  >
                    Poznaj Facebook Ads
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
                    to="/performance-marketing/facebook-ads"
                    className="text-primary hover:underline font-semibold"
                  >
                    Facebook Ads — kompleksowo
                  </Link>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <Link
                    to="/performance-marketing/google-ads/krakow"
                    className="text-primary hover:underline font-semibold"
                  >
                    Google Ads Kraków
                  </Link>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <Link
                    to="/blog/cennik-facebook-ads"
                    className="text-primary hover:underline font-semibold"
                  >
                    Cennik Facebook Ads
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
