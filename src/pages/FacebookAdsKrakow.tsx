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
      answer: "Wycenę obsługi przygotowujemy po rozmowie o zakresie: liczbie kampanii, grup odbiorców, potrzebnych kreacjach i raportowaniu. Budżet reklamowy płacony Meta to zawsze osobna pozycja — jego wysokość dobieramy do celów, branży i konkurencji.",
    },
    {
      question: "Jak szybko zobaczę wyniki kampanii Facebook Ads w Krakowie?",
      answer: "Pierwsze dane (wyświetlenia, kliknięcia, koszt) pojawiają się krótko po starcie kampanii. Na optymalizację potrzeba czasu, aż kampania zbierze wystarczająco danych — ile, zależy od budżetu, celu i branży. Nie obiecujemy konkretnej liczby konwersji w określonym terminie.",
    },
    {
      question: "Jakie formaty reklam są dostępne na Facebook/Instagram dla firm w Krakowie?",
      answer: "Dostępne są: Feed Ads (klasyczne reklamy w feed), Stories Ads (reklamy fullscreen na Stories), Reels Ads (w sekcji Reels na Instagramie), Carousel Ads (karuzela produktów), Video Ads (wideo reklamowe), Lead Ads (zbieranie leadów bezpośrednio z Facebooka), Dynamic Ads (automatyczne reklamy produktów dla osób zainteresowanych). Każdy format ma inne zastosowania w zależności od branży i celu kampanii.",
    },
    {
      question: "Czy potrzebuję Pixel Facebooka (Meta Pixel) do kampanii w Krakowie?",
      answer: "Tak — Meta Pixel jest kluczowy dla efektywnych kampanii. Instalujemy pixel na Twojej stronie, aby śledzić konwersje, budować audience retargeting i wspierać AI Facebooka w znalezeniu nowych klientów. Pixel pozwala także na precise audience targeting: ludzie, którzy odwiedzili Twoją stronę, zainteresowali się produktami, ale nie kupili. To retargeting — jeden z podstawowych elementów kampanii.",
    },
    {
      question: "Jakie jest CPM i CPC na Facebook/Instagram w Krakowie?",
      answer: "CPM (koszt za 1000 wyświetleń) i CPC (koszt za kliknięcie) ustala aukcja Meta — zależą od branży, sezonu, grupy odbiorców, jakości kreacji i konkurencji. Realne stawki dla Twojej branży widać dopiero po starcie testowej kampanii. Optymalizujemy ustawienia, aby nie przepłacać za wyświetlenia.",
    },
    {
      question: "Jak Facebook/Instagram widzi moich potencjalnych klientów w Krakowie?",
      answer: "Facebook ma dostęp do miliardów danych: wiek, płeć, zainteresowania, zachowanie na platformie, historia zakupów (pixel), lokalizacja. Targetowanie w Krakowie może być bardzo precyzyjne: wiek 25-50, zainteresowani modą/spożywczym/turystyką, mieszkańcy Starego Miasta/Kazimierza, aktywnie poszukujący produktów online. Można też użyć grup podobnych odbiorców (Lookalike) — osób przypominających Twoich obecnych klientów.",
    },
    {
      question: "Jaki ROAS mogę oczekiwać z Facebook Ads w Krakowie?",
      answer: "Nie podajemy z góry ROAS (zwrotu z wydatków na reklamę) — zależy od marży, ceny produktu, strony, oferty i konkurencji. Pierwsze tygodnie to testy, a cele i realne oczekiwania ustalamy po analizie danych. Nie gwarantujemy konkretnego wyniku sprzedażowego.",
    },
    {
      question: "Czy Facebook Ads działają dla małych firm i usług lokalnych w Krakowie?",
      answer: "Tak — Facebook Ads mogą dobrze sprawdzić się dla małych firm i usług lokalnych w Krakowie (restauracje, salony, galerie, usługi turystyczne, handel). Możesz targetować wybrane rejony Krakowa (Stare Miasto, Kazimierz, Nowa Huta), budować remarketing i zacząć od mniejszego budżetu testowego. Pracujemy z Poznania, a firmy z Krakowa obsługujemy zdalnie.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja Facebook Ads Kraków — reklamy Meta dla firm | Fotz.pl"
          description="Facebook Ads Kraków — kampanie Meta Ads (Facebook, Instagram) dla firm z Krakowa. Pracujemy z Poznania, obsługa zdalna. Wycena po rozmowie. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/performance-marketing/facebook-ads/krakow"
          keywords="facebook ads krakow, meta ads krakow, reklamy facebook krakow, agencja facebook ads krakow, kampanie facebook krakow, instagram ads krakow, facebook ads dla firm krakow, reklama na facebooku krakow, meta ads agencja krakow, facebook ads cennik krakow"
        />

        <ServiceSchema
          name="Kampanie Facebook Ads Kraków"
          description="Tworzenie i optymalizacja kampanii Facebook Ads (Meta Ads) dla firm z Krakowa. Fotz Studio — pracujemy z Poznania, firmy z Krakowa obsługujemy zdalnie."
          provider="Fotz Studio"
          areaServed="Krakow"
        />

        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Kampanie reklamowe", url: "https://www.fotz-studio.pl/performance-marketing" },
            { name: "Facebook Ads", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads" },
            { name: "Facebook Ads Kraków", url: "https://www.fotz-studio.pl/performance-marketing/facebook-ads/krakow" },
          ]}/>

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs items={[
            { name: "Strona główna", path: "/" },
            { name: "Kampanie reklamowe", path: "/performance-marketing" },
            { name: "Facebook Ads", path: "/uslugi/reklama-facebook" },
            { name: "Kraków", path: "/performance-marketing/facebook-ads/krakow" },
          ]}/>

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
                  Facebook Ads Kraków — profesjonalne kampanie Meta Ads i reklamy Facebook dla firm z Kraków i Małopolski. Planujemy, prowadzimy i optymalizujemy kampanie z precyzyjnym targetowaniem. Bezpłatna konsultacja.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">Wycena</div>
                  <div className="text-sm text-pink-100">Po rozmowie o zakresie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">Testy A/B</div>
                  <div className="text-sm text-pink-100">Kreacji i odbiorców</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">Zdalnie</div>
                  <div className="text-sm text-pink-100">Pracujemy z Poznania</div>
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
                    Kraków to drugie największe miasto w Polsce, z silnym sektorem turystycznym, gastronomii, handlu i e-commerce. Dla wielu takich firm Facebook i Instagram są ważnym kanałem pozyskiwania klientów.
                  </p>
                  <p>
                    Facebook i Instagram w Krakowie działają dla wszystkich branż: restauracje Starego Miasta, sklepy online, galerie sztuki, biura nieruchomości, salony piękności, usługi turystyczne. Koszty kliknięć i wyświetleń zależą od branży i konkurencji — sprawdzamy je w kampanii testowej.
                  </p>
                  <p>
                    Pixel Facebooka umożliwia precyzyjny retargeting — reklamy dla turystów i potencjalnych klientów, którzy widzieli Twoją ofertę. Retargeting zwykle uzupełnia kampanie docierające do nowych odbiorców.
                  </p>
                  <p>
                    Algorytm Meta automatycznie znajduje ludzi zainteresowanych Twoimi produktami/usługami w Krakowie — nie musisz sam wybiór ręcznie. Im więcej danych zbierze kampania, tym lepiej algorytm może dobierać odbiorców — dlatego regularnie analizujemy wyniki.
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
                    Fullscreen reklamy na Stories (Facebook i Instagram). Format pod telefon, dobry do szybkiej akcji — często stosowany przez restauracje i usługi lokalne.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Reels Ads</h3>
                  <p className="text-muted-foreground">
                    Reklamy wideo w sekcji Reels na Instagramie. Format krótkiego wideo, dobry do kreatywnych kampanii i turystyki.
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
                    Reklamy wideo (6 sekund do 3 minut). Opowiadanie historii marki, demo produktów. Pracują we wszystkich formatach.
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
                Kampanie Facebook Ads Kraków — od czego zależy wycena
              </h2>
              <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Zakres obsługi</h3>
                  <p className="text-muted-foreground">
                    Liczba kampanii i grup odbiorców, częstotliwość optymalizacji, retargeting, kampanie produktowe i zakres raportowania.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Kreacje</h3>
                  <p className="text-muted-foreground">
                    Czy korzystamy z Twoich materiałów, czy przygotowujemy grafiki, zdjęcia i wideo (np. Reels) od podstaw.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Budżet reklamowy</h3>
                  <p className="text-muted-foreground">
                    Budżet na emisję reklam płacisz bezpośrednio Meta — zawsze osobno od wynagrodzenia za obsługę. Jego wysokość ustalamy razem do celów.
                  </p>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
                Wycenę przygotowujemy po rozmowie o zakresie, celach i materiałach. Obsługa obejmuje konfigurację Pixela i grup odbiorców, testy A/B kreacji, bieżącą optymalizację i miesięczny raport.
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
                      Carousel Ads, Dynamic Ads, retargeting. Kampanie sprzedażowe dla produktów, odzieży, wyposażenia.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje Starego Miasta</h3>
                    <p className="text-sm text-muted-foreground">
                      Video Ads, Stories Ads dla promocji, menu. Lead Ads do rezerwacji. Geo-targeting — turyści i mieszkańcy Krakowa.
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
                      Reels Ads (before/after), Stories Ads, Lead Ads dla rezerwacji. Retargeting osób zainteresowanych.
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
                      Lead Ads do zbierania zapytań. Geo-targeting Kraków i Wieliczka. Można zacząć od mniejszego budżetu testowego.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Galerie &amp; sztuka</h3>
                    <p className="text-sm text-muted-foreground">
                      Reels Ads (wernisaże, wystawy), Stories Ads, Video Ads. Targeting osób zainteresowanych sztuką i kulturą w Krakowie. Wąska, dobrze dobrana grupa odbiorców.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Edukacja &amp; szkolenia</h3>
                    <p className="text-sm text-muted-foreground">
                      Video Ads (kursy, szkolenia), Lead Ads. Retargeting zainteresowanych osób (pixel). Kampanie rekrutacyjne dla szkół i instytutów — prowadziliśmy m.in. kampanię Meta Ads dla Dawid EDU.
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
                  <h3 className="text-xl font-bold mb-2">Produkcja i reklama w jednym miejscu</h3>
                  <p className="text-muted-foreground">
                    Sami produkujemy video, zdjęcia i grafiki, więc kreacje do kampanii powstają w tym samym zespole, który prowadzi reklamy. Pracujemy z Poznania, a firmy z Krakowa obsługujemy zdalnie.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Sprawny start kampanii</h3>
                  <p className="text-muted-foreground">
                    Instalujemy Pixel, definiujemy grupy odbiorców i uruchamiamy kampanię w terminie ustalonym w ofercie. Od startu widzisz pierwsze dane — CPM, CPC, zaangażowanie.
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
                    Każda decyzja jest oparta na ROAS. Nie wydajemy budżetu bezmyślnie — skalujemy to, co działa, a wyłączamy to, co nie przynosi efektów.
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
                    to="/uslugi/reklama-facebook"
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
                    to="/uslugi/reklama-facebook"
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
