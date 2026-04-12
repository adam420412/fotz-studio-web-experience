import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsWarszawa() {
  const faqItems = [
    {
      question: "Ile kosztuje TikTok Ads w Warszawie?",
      answer: "TikTok Ads w Warszawie zaczyna się od 500 zł/miesiąc za zarządzanie kampanią (pakiet START). Dodatkowy budżet reklamowy to osobna pozycja — od 1 000 zł/miesiąc dla małych firm do 15 000+ zł/miesiąc dla e-commerce. Całkowity koszt zależy od branży, celu kampanii (awareness, traffic, conversions) i konkurencji na platformie.",
    },
    {
      question: "Dla jakich branż sprawdza się TikTok Ads w Warszawie?",
      answer: "TikTok Ads działają doskonale dla: e-commerce (odzież, dodatki, gadżety), beauty i kosmetyka, fitness i zdrowy styl życia, technologia i gry, moda, edukacja online, produkty dla Gen Z i Millenialsów. TikTok to platforma dla młodych odbiorców (13-35 lat) — idealna dla branż, których docelowy klient to Gen Z lub young Millennials.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii TikTok Ads?",
      answer: "Kampanię TikTok Ads można uruchomić w ciągu 48-72 godzin. Obejmuje to: rejestrację konta TikTok Business, veryfikację konta (1-2 dni), tworzenie strategi kreatywnej, przygotowanie materiałów wideo, budżetowania i konfiguracji targetowania. Pierwsze wyniki są widoczne po 1-2 dniach, pełna optymalizacja trwa 2-3 tygodnie.",
    },
    {
      question: "Czy TikTok Ads działa dla firm B2B?",
      answer: "TikTok Ads to przede wszystkim kanał B2C dla firm skierowanych na młodych konsumentów. Dla firm B2B TikTok może działać w niszach — np. szkoły IT, kursy online, usługi dla freelancerów, aplikacje dla młodych profesjonalistów. Dla większości tradycyjnych firm B2B, Google Ads lub LinkedIn Ads są bardziej efektywne.",
    },
    {
      question: "Jaki budżet minimalny na TikTok Ads?",
      answer: "Minimalny budżet to 500-1 000 zł/miesiąc dla testów. Rekomendujemy jednak minimum 2 000-3 000 zł/miesiąc w Warszawie, aby kampania miała wystarczająco danych do optymalizacji algorytmu TikTok. TikTok wymaga więcej danych niż Google Ads — czym wyższy budżet, tym lepsze wyniki.",
    },
    {
      question: "Jak wygląda targetowanie na TikToku w Warszawie?",
      answer: "TikTok oferuje targetowanie wiek (13-65+), płeć, lokalizacja (Warszawa, wybranie dzielnic), interesy (music, fashion, beauty, gaming, etc.), zachowania (active content creation, shopping engagement), urządzenia. TikTok algorytm automatycznie uczy się preferencji użytkowników — im lepiej zoptymalizowana kampania, tym bardziej precyzyjne pokazanie.",
    },
    {
      question: "Czy agencja tworzy kreacje wideo do TikTok Ads?",
      answer: "Tak — tworzymy profesjonalne kreacje wideo dostosowane do formatu i algorytmu TikToka (9:16, zaangażujące, szybkie sceny). Możemy również pracować z Twoimi istniejącymi materiałami i adaptować je. Każda kampania zawiera A/B testy różnych wersji wideo — testujemy messaging, style, muzykę.",
    },
    {
      question: "Jakie formaty reklamowe oferuje TikTok?",
      answer: "TikTok oferuje: In-Feed Ads (reklamy w feed), Brand Takeover (przejęcie kanału startowego, premium), TopView (najwyżej w feed, premium), Hashtag Challenges (zaangażowanie użytkowników), Creator Marketplace (współpraca z influencerami TikTok). Dla większości firm START działają In-Feed Ads z budżetem 2 000-5 000 zł/miesiąc.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Reklamy TikTok Ads Warszawa — agencja kampanii TikTok | Fotz.pl"
          description="TikTok Ads Warszawa — agencja Fotz.pl. Kampanie TikTok dla firm z Warszawy, targetowanie Gen Z i Millenialsów, kreacje wideo, rozliczenie za wyniki. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/tiktok-ads/warszawa"
          keywords="tiktok ads warszawa, agencja tiktok ads, kampanie tiktok, reklamy na tiktoku"
        />

        <ServiceSchema
          name="Kampanie TikTok Ads Warszawa"
          description="Tworzenie i optymalizacja kampanii TikTok Ads dla firm z Warszawy. Agencja Fotz.pl — specjaliści TikTok Ads i kreatywne wideo."
          provider="Fotz Studio"
          areaServed="Warszawa"
        />

        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
            { name: "TikTok Ads", url: "https://fotz.pl/performance-marketing/tiktok-ads" },
            { name: "TikTok Ads Warszawa", url: "https://fotz.pl/performance-marketing/tiktok-ads/warszawa" },
          ]}
        />

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs
          items={[
            { label: "Strona główna", path: "/" },
            { label: "Kampanie reklamowe", path: "/performance-marketing" },
            { label: "TikTok Ads", path: "/performance-marketing/tiktok-ads" },
            { label: "Warszawa", path: "/performance-marketing/tiktok-ads/warszawa" },
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
                  Reklamy TikTok Ads Warszawa
                </h1>
                <p className="text-xl md:text-2xl text-pink-100 mb-8">
                  Kampanie TikTok dla Gen Z i Millenialsów. Kreacje wideo, targetowanie precyzyjne, wyniki w tygodniu.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">500 zł</div>
                  <div className="text-sm text-pink-100">Kampanie od</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">48-72h</div>
                  <div className="text-sm text-pink-100">Uruchomienie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">Gen Z</div>
                  <div className="text-sm text-pink-100">Docelowa grupa</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">Video</div>
                  <div className="text-sm text-pink-100">Kreatywne</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TikTok Ads in Warsaw */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  TikTok Ads Warszawa — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Warszawa to 2 miliony mieszkańców, największe miasto w Polsce z największą populacją Gen Z i young Millenialsów. TikTok w Polsce ma 8+ milionów użytkowników aktywnych — dla firm skierowanych na młodych ludzi to MUSI być channel.
                  </p>
                  <p>
                    Algorytm TikToka to geniusz — nie obchodzi go liczba obserwujących, Twoja poprzednia zawartość, ani historia konwersji. Algorytm uczy się NATYCHMIAST. Świetna kreacja może zostać pokazana milionom osób niezależnie od tego, czy masz 10 czy 100 000 followersów.
                  </p>
                  <p>
                    Koszt zasięgu na TikToku jest ZNACZNIE niższy niż na Instagramie czy Facebooku. W Warszawie, gdzie konkurencja jest duża ale TikTok jeszcze rosnącym kanałem, CPC wynosi 0,3-1,5 zł — czyli 5-10x taniej niż Google Ads.
                  </p>
                  <p>
                    TikTok to kanał dla e-commerce, Beauty, Mody, Tech, Edukacji online i każdej branży, gdzie Twoim klientem są osoby do 35 lat. Jeśli masz produkt lub usługę dla tego segmentu — TikTok Ads to obowiązkowy kanał w 2026.
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
                  <h3 className="text-xl font-bold mb-3">Strategia i planowanie kampanii</h3>
                  <p className="text-muted-foreground">
                    Analizujemy konkurencję na TikToku, definiujemy docelową grupę, wybieramy typ kampanii (awareness, traffic, conversions). Wszystko dostosowane do Twojego budżetu i celu.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Tworzenie kreatywnych wideo</h3>
                  <p className="text-muted-foreground">
                    Tworzymy profesjonalne kreacje video w formacie TikTok (9:16). Zaangażujące hook, szybkie sceny, call-to-action. Każda kampania zawiera 3-5 wariantów do A/B testów.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Setup i konfiguracja konta</h3>
                  <p className="text-muted-foreground">
                    Zakładamy konto TikTok Business, weryfikujemy, konfigurujemy pixel TikTok do trackingu konwersji. Wszystko do pełnej automatyzacji i raportowania.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Zarządzanie kampanią i optymalizacja</h3>
                  <p className="text-muted-foreground">
                    Co dzień monitorujemy kampanię, optymalizujemy budżet, testujesz nowe kreatywne. Skupiamy się na metrykach: CTR, CPC, conversion rate, ROAS.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Influencer collaboration</h3>
                  <p className="text-muted-foreground">
                    Jeśli chcesz pracować z twórcami TikToka (influencerami, content creatorami), koordynujemy i zarządzamy współpracą. Authentic content, szybkie wyniki.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Raportowanie i analityka</h3>
                  <p className="text-muted-foreground">
                    Raportowanie co tydzień lub co miesiąc. Wyświetlenia, kliki, konwersje, koszty. Analiza dokładnie co działa i co zmienić w następnym tygodniu.
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
                Jak prowadzimy kampanie TikTok Ads w Warszawie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Konsultacja i brief</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, produkt, cel kampanii i docelową grupę. Jakich wyników oczekujesz? Jaki budżet chcesz przeznaczyć? Czy masz już kreacje video?
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategia i research konkurencji</h3>
                    <p className="text-muted-foreground">
                      Badamy konkurencję na TikToku — jakie kampanie działają w Twojej branży? Jakie kreatywne formaty angażują Gen Z? Co działa w Warszawie?
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tworzenie kreatywnych wideo</h3>
                    <p className="text-muted-foreground">
                      Tworzymy 3-5 wariantów kreatywnych dostosowanych do algorytmu TikToka. Każdy wariant testujemy — zaangażowanie, CTR, conversion rate.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Setup i uruchomienie</h3>
                    <p className="text-muted-foreground">
                      Konfigurujemy konto TikTok Business, pixel do trackingu, budżet i targeting. Kampania uruchamia się w ciągu 48-72 godzin.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">5</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Monitorowanie i optymalizacja</h3>
                    <p className="text-muted-foreground">
                      Co dzień sprawdzamy wyniki, optymalizujemy budżet, testujemy nowe kreatywne. Raporty co tydzień z analizą i rekomendacjami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Industries */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kampanie TikTok Ads dla jakich branż w Warszawie?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">E-commerce i sklepy online</h3>
                    <p className="text-sm text-muted-foreground">
                      TikTok Shop, performance campaigns, video product showcases. Idealne dla odzieży, dodatków, gadżetów, kosmetyków.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty i kosmetyka</h3>
                    <p className="text-sm text-muted-foreground">
                      Makijaż, pielęgnacja, zabiegi. TikTok ma największą populację zainteresowaną beauty — algorytm sam je znajdzie.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Fitness i wellness</h3>
                    <p className="text-sm text-muted-foreground">
                      Siłownie, coaching online, suplementy. Gen Z trenuje na TikToku — idealna grupa docelowa.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Edukacja online</h3>
                    <p className="text-sm text-muted-foreground">
                      Kursy, szkoły online, nauka języków. Millenialsowie i Gen Z uczą się online — TikTok to kanał pozyskiwania studentów.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Moda i ubrania</h3>
                    <p className="text-sm text-muted-foreground">
                      Trendy, lookbooki, OOTD. TikTok dyktuje trendy mody — musiałeś być tam, gdzie są Twoi klienci.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Technologia i gry</h3>
                    <p className="text-sm text-muted-foreground">
                      App campaigns, game marketing, tech gadgets. Gen Z to gamery i tech enthusiaści — TikTok to ich główny kanał.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why Fotz Studio */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Dlaczego Fotz Studio jako agencja TikTok Ads w Warszawie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Doświadczenie z Gen Z i algorytmem TikToka</h3>
                  <p className="text-muted-foreground">
                    Rozumiemy kulturę, trendy i memy Gen Z. Wiemy jak tworzyć authentic content, który algorytm polubi i rozpropaguje.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Tworzenie profesjonalnych kreatywnych wideo</h3>
                  <p className="text-muted-foreground">
                    Nasz team tworzy kreatywne video w formacie TikTok — hook, pacing, sound design. Każde video jest testowane na rzeczywistych audytoriach.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Niskie CPCs i wysoki ROAS</h3>
                  <p className="text-muted-foreground">
                    W Warszawie średni CPC TikTok to 0,5-1,5 zł. Dzięki dobrym kreatywnym i targetowaniu, ROAS naszych kampanii wynosi 3:1 do 8:1.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Wsparcie dla startupów i małych firm</h3>
                  <p className="text-muted-foreground">
                    TikTok Ads to kanał do budowania marki z małym budżetem. Pomagamy startupom i małym firmom z Warszawy rosnąć.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Raportowanie i transparentność</h3>
                  <p className="text-muted-foreground">
                    Raporty co tydzień, pełna transparentność wydatków, wyjaśnianie każdej metryki. Wiesz dokładnie, co się dzieje z Twoim budżetem.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Najczęstsze pytania o TikTok Ads Warszawa
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-background rounded-lg border border-border p-6">
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
                  Uruchom kampanie TikTok Ads w Warszawie
                </h2>
                <p className="text-lg text-slate-300 mb-10">
                  Bezpłatna konsultacja bez zobowiązań. Poznaj strategię TikTok dla Twojej branży. Wyniki w tygodniu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Bezpłatna konsultacja
                  </Link>
                  <Link
                    to="/performance-marketing/tiktok-ads"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition border border-white/20"
                  >
                    Poznaj TikTok Ads
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
                    to="/performance-marketing/tiktok-ads"
                    className="text-primary hover:underline font-semibold"
                  >
                    TikTok Ads — kompleksowo
                  </Link>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <Link
                    to="/performance-marketing/google-ads"
                    className="text-primary hover:underline font-semibold"
                  >
                    Google Ads
                  </Link>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <Link
                    to="/performance-marketing/instagram-ads"
                    className="text-primary hover:underline font-semibold"
                  >
                    Instagram Ads
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
