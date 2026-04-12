import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function FacebookAdsWarszawa() {
  const faqItems = [
    {
      question: "Ile kosztują kampanie Facebook Ads (Meta Ads) w Warszawie?",
      answer: "Facebook Ads w Warszawie zaczyna się od 400 zł/miesiąc za zarządzanie kampanią (pakiet START). Dodatkowy budżet reklamowy na samą Platforma Meta to osobna pozycja — od 500 zł/miesiąc dla małych firm do 20 000+ zł/miesiąc dla e-commerce i dużych sieci. Całkowity koszt zależy od branży, konkurencji i zasobów kreatywnych.",
    },
    {
      question: "Jak szybko zobaczę wyniki kampanii Facebook Ads?",
      answer: "Pierwsze wyniki są widoczne już po 24-48 godzinach od uruchomienia kampanii. Facebook szybko testuje różne audience i creative, więc dane napływają natychmiast. Pełna optymalizacja i znaczące konwersje trwają 2-4 tygodnie, gdy kampania zbierze wystarczająco danych do AI-driven optymalizacji.",
    },
    {
      question: "Jakie formaty reklam są dostępne na Facebook/Instagram w Warszawie?",
      answer: "Dostępne są: Feed Ads (klasyczne reklamy w feed), Stories Ads (reklamy fullscreen na Stories), Reels Ads (w sekcji Reels na Instagramie), Carousel Ads (karuzela produktów), Video Ads (wideo reklamowe), Lead Ads (zbieranie leadów bezpośrednio z Facebooka), Dynamic Ads (automatyczne reklamy produktów dla osób zainteresowanych). Każdy format ma inne zastosowania w zależności od branży.",
    },
    {
      question: "Czy potrzebuję Pixel Facebooka (Meta Pixel) do kampanii?",
      answer: "Tak — Meta Pixel (piksel Facebooka) jest kluczowy dla efektywnych kampanii. Instalujemy pixel na Twojej stronie, aby śledzić konwersje, budować grupy niestandardowych odbiorców do retargetingu i wspierać AI Facebooka w znalezeniu nowych klientów. Pixel pozwala na precyzyjne targetowanie: docierasz do osób, które odwiedziły Twoją stronę, zainteresowały się produktami, ale jeszcze nie kupiły. To retargeting — i działa bardzo dobrze. Wszystko zarządzane jest przez Facebook Business Manager (Menedżer Reklam Meta).",
    },
    {
      question: "Jakie jest CPM i CPC na Facebook/Instagram w Warszawie?",
      answer: "CPM (koszt za 1000 impressionów) na Facebook/Instagram w Warszawie wynosi średnio 5-15 zł, CPC (koszt za kliknięcie) to 1-5 zł. Ceny zależą od branży, sezonu i konkurencji. E-commerce i finansowe są droższe (10-20 zł CPM), usługi są tańsze (3-8 zł CPM). Nasi specjaliści optymalizują bidding, aby unikać drożych impressionów i skupiać się na klikami wysokiej jakości.",
    },
    {
      question: "Jak Facebook/Instagram widzi moich potencjalnych klientów w Warszawie?",
      answer: "Facebook ma dostęp do miliardów danych: wiek, płeć, zainteresowania, zachowanie na platformie, historia zakupów (pixel), lokalizacja. Targetowanie w Warszawie może być bardzo precyzyjne: wiek 25-45, zainteresowani modą i sportami, mieszkańcy centrum/Piaseczna, aktywnie poszukujący produktów online. Lookalike audience — ludzie podobni do Twoich obecnych klientów — również działa doskonale.",
    },
    {
      question: "Jaki ROAS mogę oczekiwać z Facebook Ads w mojej branży?",
      answer: "ROAS (Return on Ad Spend) wynosi zazwyczaj 2:1 do 5:1 dla dobrze skonfigurowanych kampanii. E-commerce średnio 3-5:1, usługi/lead generation 1,5-3:1, luxury i niche products mogą osiągnąć 4-8:1. Pierwszy miesiąc to testowanie — drugi i trzeci pokazują stały wzrost ROAS. Po 3 miesiącach optymalizacji, nasze kampanie osiągają najwyższy poziom efektywności.",
    },
    {
      question: "Czy Facebook Ads działają dla małych firm i usług lokalnych w Warszawie?",
      answer: "Tak — Facebook Ads są idealnym kanałem dla małych firm i usług lokalnych w Warszawie (restauracje, salony, usługi, handlowcy). Możesz targetować precyzyjnie Warszawę/Piaseczno/Milanówek, budować remarketing dla klientów, testować kampanię z budżetem 500-1000 zł/miesiąc. Wiele naszych lokalnych klientów z Warszawy generuje 10-20 leadów dziennie za mniej niż 2000 zł/miesiąc na Facebook Ads.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Facebook Ads Warszawa — reklamy Meta dla firm | Fotz.pl"
          description="Facebook Ads Warszawa ✓ Kampanie Meta Ads (Facebook, Instagram) od 400 zł/mies. Certyfikowani specjaliści Meta, skuteczne reklamy na Facebooku. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/facebook-ads/warszawa"
          keywords="facebook ads warszawa, meta ads warszawa, instagram ads warszawa, reklamy facebook, reklamy na facebooku, kampanie meta, agencja facebook ads warszawa"
        />

        <ServiceSchema
          name="Kampanie Facebook Ads Warszawa"
          description="Tworzenie i optymalizacja kampanii Facebook Ads (Meta Ads) dla firm z Warszawy. Agencja Fotz.pl — certyfikowani specjaliści Meta."
          provider="Fotz Studio"
          areaServed="Warszawa"
        />

        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
            { name: "Facebook Ads", url: "https://fotz.pl/performance-marketing/facebook-ads" },
            { name: "Facebook Ads Warszawa", url: "https://fotz.pl/performance-marketing/facebook-ads/warszawa" },
          ]}
        />

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs
          items={[
            { label: "Strona główna", path: "/" },
            { label: "Kampanie reklamowe", path: "/performance-marketing" },
            { label: "Facebook Ads", path: "/performance-marketing/facebook-ads" },
            { label: "Warszawa", path: "/performance-marketing/facebook-ads/warszawa" },
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
                  Facebook Ads Warszawa — Reklamy Meta dla Twojej Firmy
                </h1>
                <p className="text-xl md:text-2xl text-pink-100 mb-8">
                  Kampanie na Facebooku i Instagramie dla firm w Warszawie. Wyniki od 48h. Certyfikowani specjaliści Meta Ads.
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

        {/* Why Facebook Ads in Warsaw */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Facebook Ads Warszawa — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Warszawa to 1,8 miliona mieszkańców, z czego ponad 80% aktywnie korzysta z Facebooka i Instagrama codziennie. To naturalny rynek do testowania kampanii dla całego kraju, a reklamy na Facebooku oferują najlepsze targetowanie dla warszawskiego segmentu.
                  </p>
                  <p>
                    Facebook i Instagram są najskuteczniejsze dla e-commerce, restauracji, usług Beauty/SPA, nieruchomości i handlu lokalnego. W Warszawie, gdzie średnia płaca jest wysoka i ludzie mają pieniądze na zakupy, skuteczna kampania reklamowa na Facebooku generuje sprzedaż szybciej niż SEO lub Google Ads.
                  </p>
                  <p>
                    Pixel Facebooka (Meta Pixel) umożliwia precyzyjny retargeting — reklamy dla osób, które już widziały Twoją stronę lub produkt. Konwersja z retargetingu jest 3-5x wyższa niż z kampanii prospectingowych, a koszt za konwersję jest znacznie niższy. Właściwy cel reklamowy — konwersje, leady czy zasięg — decyduje o efektywności każdej kampanii.
                  </p>
                  <p>
                    Algorytm Meta (Facebook, Instagram, Messenger) automatycznie tworzy grupy niestandardowych odbiorców i znajduje ludzi zainteresowanych Twoimi produktami — nie musisz nic robić ręcznie. AI-driven optimization z Facebook Business Managera oznacza, że kampania jest coraz bardziej efektywna każdego dnia.
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
                    Fullscreen reklamy na Stories (Facebook i Instagram). Bardzo efektywne dla mobile audience, szybka akcja, idealne dla E-commerce i fast-moving products.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Reels Ads</h3>
                  <p className="text-muted-foreground">
                    Reklamy wideo w sekcji Reels na Instagramie. Nowy format Meta, bardzo wysoki engagement, efektywne dla kreatywnych i dynamicznych kampanii.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Carousel Ads</h3>
                  <p className="text-muted-foreground">
                    Karuzela produktów (do 10 zdjęć/filmów). Idealnie dla E-commerce — każdy produkt ma swój slajd, użytkownik przesłania i klika na interesujące.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Video Ads</h3>
                  <p className="text-muted-foreground">
                    Reklamy wideo (6 sekund do 3 minut). Najwyższy engagement, opowiadanie historii marki, demony produktów. Pracują we wszystkich formatach.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Lead Ads &amp; Dynamic Ads</h3>
                  <p className="text-muted-foreground">
                    Lead Ads — zbieranie emailów i numerów telefonów bezpośrednio z Facebooka. Dynamic Ads — automatyczne pokazywanie produktów osobom zainteresowanym. Oba działają bez przychodzenia na Twoją stronę.
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
                Jak prowadzimy kampanie Facebook Ads w Warszawie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brief i analiza branży</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, produkty, konkurencję na Facebook/Instagram. Jakie persona są Twoimi klientami? Jaki jest Twój LTV (lifetime value)? Ile jesteś gotów wydać na akwizycję klienta?
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Setup Pixel, Menedżer Reklam &amp; Audience</h3>
                    <p className="text-muted-foreground">
                      Instalujemy Meta Pixel na Twojej stronie i konfigurujemy Facebook Business Manager. Definiujemy konwersje (zakup, kontakt, lead) oraz cel reklamowy. Tworzymy grupy niestandardowych odbiorców (już istniejący klienci), Lookalike Audience (nowi ludzie podobni do Twoich klientów) i segmenty retargetingowe dla kampanii remarketingowych.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Kreacje reklamowe (Copy &amp; Design)</h3>
                    <p className="text-muted-foreground">
                      Tworzymy copy (teksty reklam) i kreacje reklamowe (zdjęcia/wideo) dla każdego segmentu odbiorców. A/B testujemy wiele wariantów — różne nagłówki, call-to-actions, obrazy. Menedżer reklam Meta AI pomaga nam znaleźć najlepsze kombinacje kreacji dla Twojej branży.
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
                      Kampania live — zaczyna zbierać dane. Przez pierwsze 48h monitorujemy CPM, CPC, CTR. Pauzujemy low-performing kreatywne, amplifikujemy best performers. Meta Ads Manager zaczyna optymalizować automatycznie.
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
                      Po 2-4 tygodniach mamy dostatecznie danych. Analizujemy ROAS, CPL, CAC. Skalujemy budżet na best-performing audience i creative. Testujemy nowe audience — lookalike, interest-based. Tworzymy long-term growth plan.
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
                Kampanie Facebook Ads Warszawa — cennik
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
                Kampanie Facebook Ads dla jakich branż w Warszawie?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">E-commerce &amp; online sklepy</h3>
                    <p className="text-sm text-muted-foreground">
                      Carousel Ads, Dynamic Ads, retargeting. Skalowanie sprzedaży online dla produktów, odzieży, elektroniki. Średnia ROAS 3-5:1.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje &amp; catering</h3>
                    <p className="text-sm text-muted-foreground">
                      Video Ads, Stories Ads dla promocji, menu. Lead Ads do rezerwacji. Geo-targeting — tylko Warszawa centrum i pobliskie dzielnice.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty &amp; SPA</h3>
                    <p className="text-sm text-muted-foreground">
                      Reels Ads (before/after), Stories Ads, Lead Ads dla rezerwacji. Retargeting osób zainteresowanych usługami. CPL niski, konwersja wysoka.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Nieruchomości</h3>
                    <p className="text-sm text-muted-foreground">
                      Carousel Ads (galerię mieszkań), Video Ads (wirtualne spacery), Lead Ads. Targetowanie wiekowe, zainteresowane kupnem/wynajmem w Warszawie.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Usługi (hydraulik, elektryk, malowanie)</h3>
                    <p className="text-sm text-muted-foreground">
                      Lead Ads do zbierania zapytań. Geo-targeting Warszawa i okolice. Low CPC, szybka konwersja, małe budżety sprawdzają się świetnie.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Edukacja &amp; szkolenia</h3>
                    <p className="text-sm text-muted-foreground">
                      Video Ads (kursy, szkolenia online), Lead Ads. Retargeting osób zainteresowanych (remarketing z pixela). CPL średni, wysoka jakość leadów.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Usługi finansowe</h3>
                    <p className="text-sm text-muted-foreground">
                      Lead Ads dla wniosków kredytowych, ubezpieczeń. Wysokie CPM (10-20 zł), ale znaczne wartości transakcji. Retargeting prospect warm audience.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Fitness &amp; sport</h3>
                    <p className="text-sm text-muted-foreground">
                      Reels Ads (treningi), Stories Ads (promocje), Lead Ads do membership. Geo-targeting dla sieci fitness w Warszawie. Conversion tracking per member.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Targeting Section */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Targetowanie reklam na Facebooku w Warszawie
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Skuteczna kampania reklamowa na Facebooku zaczyna się od właściwego targetowania. Menedżer reklam Meta oferuje kilka typów grup odbiorców, które dobieramy dla każdego klienta indywidualnie.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-secondary/30 rounded-lg p-5 border border-border">
                      <h3 className="font-bold mb-2 text-foreground">Grupy niestandardowych odbiorców</h3>
                      <p className="text-base">Targetowanie osób, które już interagowały z Twoją firmą — odwiedziły stronę (piksel Facebooka), kupiły produkt lub są na liście CRM. Najwyższa konwersja z wszystkich typów odbiorców.</p>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-5 border border-border">
                      <h3 className="font-bold mb-2 text-foreground">Lookalike Audience</h3>
                      <p className="text-base">Meta tworzy grupę nowych użytkowników podobnych do Twoich obecnych klientów. Doskonałe narzędzie do skalowania kampanii poza retargeting na zupełnie nowych odbiorców w Warszawie.</p>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-5 border border-border">
                      <h3 className="font-bold mb-2 text-foreground">Targetowanie zainteresowań</h3>
                      <p className="text-base">Docierasz do osób zainteresowanych konkretnymi tematami, markami lub aktywnościami. Świetne do kampanii zasięgowych i budowania świadomości marki w Warszawie.</p>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-5 border border-border">
                      <h3 className="font-bold mb-2 text-foreground">Cel reklamowy a konwersje</h3>
                      <p className="text-base">Dobieramy cel reklamowy (konwersje, ruch, leady, zasięg) do etapu lejka sprzedażowego. Właściwy cel to podstawa — zły cel powoduje, że algorytm Meta optymalizuje się pod złe zdarzenia.</p>
                    </div>
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
                Dlaczego Fotz Studio jako agencja Facebook Ads w Warszawie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Certyfikowani Meta Partners — specjaliści Facebook Ads</h3>
                  <p className="text-muted-foreground">
                    Nasi specjaliści Facebook Ads są certyfikowani przez Meta (Facebook Blueprint). Mamy dostęp do beta features, zaawansowanych narzędzi targetowania, najnowszych algorytmów Meta AI i wsparcia dedykowanego opiekuna Meta w Polsce.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Szybkie setup &amp; wyniki (48h)</h3>
                  <p className="text-muted-foreground">
                    Instalujemy Pixel, definiujemy audience, uruchamiamy kampanię w 48 godzin. Wyniki są natychmiast widoczne — CPM, CPC, engagement. Nie czekasz tygodniami na dane.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Kreatywne &amp; copy na każdy format</h3>
                  <p className="text-muted-foreground">
                    Tworzymy kreatywne i copy na każdy format (Feed, Stories, Reels, Carousel, Video, Lead Ads). A/B testujemy wszystko — wiele wariantów, szybka iteracja na bazie danych.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">ROAS &gt; CAC fokus</h3>
                  <p className="text-muted-foreground">
                    Każda decyzja jest oparta na ROAS (Return on Ad Spend). Nie wydajemy budżetu beznamietnie — skalujemy to, co działa. Średni ROAS naszych klientów: 3-5:1 po 3 miesiącach.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Raportowanie co miesiąc</h3>
                  <p className="text-muted-foreground">
                    Szczegółowy raport co miesiąc: CPM, CPC, ROAS, CAC, liczba konwersji, revenue generated, budżet skonsuowany. Transparentne dane — wiesz dokładnie, jak wydawane są pieniądze.
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
                Najczęstsze pytania o Facebook Ads Warszawa
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
                  Uruchom skuteczne reklamy na Facebooku w Warszawie
                </h2>
                <p className="text-lg text-slate-300 mb-10">
                  Bezpłatna konsultacja bez zobowiązań. Poznaj naszą strategię kampanii Meta Ads dla Twojej branży. Wyniki od 48h — mierzony ROAS i realne konwersje.
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
                    to="/performance-marketing/google-ads/warszawa"
                    className="text-primary hover:underline font-semibold"
                  >
                    Google Ads Warszawa
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
        <ContactSection city="Warszawa" />
      </Layout>
    </>
  );
}
