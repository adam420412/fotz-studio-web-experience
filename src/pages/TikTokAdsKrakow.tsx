import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsKrakow() {
  const faqItems = [
    {
      question: "Ile kosztuje TikTok Ads w Krakowie?",
      answer: "TikTok Ads w Krakowie zaczyna się od 500 zł/miesiąc za zarządzanie kampanią (pakiet START). Dodatkowy budżet reklamowy to osobna pozycja — od 1 000 zł/miesiąc dla małych firm do 10 000+ zł/miesiąc dla e-commerce. Całkowity koszt zależy od branży, typu kampanii i konkurencji na platformie. Kraków ma mniejszą konkurencję niż Warszawa — CPC jest nawet 20-30% tańszy.",
    },
    {
      question: "Dla jakich branż sprawdza się TikTok Ads w Krakowie?",
      answer: "TikTok Ads działają doskonale dla: e-commerce (odzież, gadżety, domowe), beauty i kosmetyka, szkoły online, fitness i wellness, moda, kawiarnie i restauracje skierowane na Gen Z, turystyka (hostele, atrakcje), edukacja. Kraków ma młodą populację (studenci, młodych profesjonalistów) — idealną dla TikTok Ads.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii TikTok Ads w Krakowie?",
      answer: "Kampanię TikTok Ads można uruchomić w ciągu 48-72 godzin. Obejmuje to: rejestrację i weryfikację konta TikTok Business, tworzenie strategii kreatywnej, przygotowanie materiałów wideo, budżetowania i konfiguracji targetowania. Pierwsze wyniki są widoczne po 1-2 dniach, pełna optymalizacja trwa 2-3 tygodnie.",
    },
    {
      question: "Czy TikTok Ads działa dla firm B2B?",
      answer: "TikTok Ads to przede wszystkim kanał B2C dla firm skierowanych na Gen Z i Millenialsów. Dla firm B2B TikTok może działać w niszach — np. szkoły IT, kursy online, aplikacje dla młodych profesjonalistów. Dla tradycyjnych firm B2B, Google Ads lub LinkedIn są bardziej odpowiednie.",
    },
    {
      question: "Jaki budżet minimalny na TikTok Ads w Krakowie?",
      answer: "Minimalny budżet to 500-1 000 zł/miesiąc dla testów. Rekomendujemy jednak minimum 1 500-2 000 zł/miesiąc w Krakowie, aby kampania miała wystarczająco danych do optymalizacji algorytmu. TikTok wymaga danych — czym wyższy budżet, tym szybciej widać wyniki.",
    },
    {
      question: "Jak wygląda targetowanie na TikToku w Krakowie?",
      answer: "TikTok oferuje: wiek (13-65+), płeć, lokalizacja (Kraków, Nowa Huta, Podgórze, Tarnów), interesy (music, fashion, beauty, fitness, education), zachowania i zaangażowanie. Algorytm TikToka sam uczy się preferencji — im lepsza kreacja i optymalizacja, tym precyzyjniej algorytm pokazuje reklamy.",
    },
    {
      question: "Czy agencja tworzy kreacje wideo do TikTok Ads?",
      answer: "Tak — tworzymy profesjonalne kreatywne video dostosowane do algorytmu TikToka (format 9:16, zaangażujące, szybkie sceny). Możemy również pracować z Twoimi istniejącymi materiałami. Każda kampania zawiera A/B testy 3-5 wariantów video.",
    },
    {
      question: "Jakie formaty reklamowe oferuje TikTok?",
      answer: "TikTok oferuje: In-Feed Ads (reklamy w feed, najlepsze dla budżetu), Brand Takeover (przejęcie kanału startowego, premium), TopView (top of feed, premium), Hashtag Challenges (zaangażowanie społeczności), Creator Marketplace (kolaboracja z influencerami). Dla większości firm IN-FEED ADS z budżetem 1 500-3 000 zł/miesiąc są optymalne.",
    },
  ];

  return (
    <>
      <Layout>
        <SEOHead
          title="Reklamy TikTok Ads Kraków — agencja kampanii TikTok | Fotz.pl"
          description="TikTok Ads Kraków — agencja Fotz.pl. Kampanie TikTok dla firm i e-commerce z Krakowa. Kreacje wideo, targetowanie Gen Z. Bezpłatna konsultacja!"
          canonical="https://fotz.pl/performance-marketing/tiktok-ads/krakow"
          keywords="tiktok ads krakow, agencja tiktok, kampanie tiktok, reklamy na tiktoku krakow"
        />

        <ServiceSchema
          name="Kampanie TikTok Ads Kraków"
          description="Tworzenie i optymalizacja kampanii TikTok Ads dla firm z Krakowa. Agencja Fotz.pl — specjaliści TikTok Ads i kreatywne wideo."
          provider="Fotz Studio"
          areaServed="Krakow"
        />

        <BreadcrumbSchema
          items={[
            { name: "Strona główna", url: "https://fotz.pl" },
            { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
            { name: "TikTok Ads", url: "https://fotz.pl/performance-marketing/tiktok-ads" },
            { name: "TikTok Ads Kraków", url: "https://fotz.pl/performance-marketing/tiktok-ads/krakow" },
          ]}
        />

        <FAQSchema items={faqItems} />

        {/* Breadcrumbs */}
        <PageBreadcrumbs
          items={[
            { label: "Strona główna", path: "/" },
            { label: "Kampanie reklamowe", path: "/performance-marketing" },
            { label: "TikTok Ads", path: "/performance-marketing/tiktok-ads" },
            { label: "Kraków", path: "/performance-marketing/tiktok-ads/krakow" },
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
                  Reklamy TikTok Ads Kraków
                </h1>
                <p className="text-xl md:text-2xl text-pink-100 mb-8">
                  Kampanie TikTok dla firm e-commerce i usług. Reach Gen Z w Krakowie. Kreacje wideo, algorytm, wyniki.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">500 zł</div>
                  <div className="text-sm text-pink-100">Kampanie od</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">0,5-1 zł</div>
                  <div className="text-sm text-pink-100">Średni CPC</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">Gen Z</div>
                  <div className="text-sm text-pink-100">Docelowa grupa</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-300 mb-2">3-8:1</div>
                  <div className="text-sm text-pink-100">ROAS średni</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TikTok Ads in Krakow */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  TikTok Ads Kraków — dlaczego warto?
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Kraków to 800 tysięcy mieszkańców z dużą populacją Gen Z (studenci, osoby 18-25 lat). Algorytm TikToka jest najinteligentniejszy — nie zależy od obserwujących, pokazuje dobre kreacje wszystkim niezależnie od wielkości konta.
                  </p>
                  <p>
                    Konkurencja na TikToku w Krakowie jest MNIEJSZA niż w Warszawie — CPC wynosi 0,5-1,5 zł (vs 2-3 zł na Instagramie czy Facebooku). To oznacza, że za takie same 2 000 zł dostajesz 2-3x więcej zasięgu i zaangażowania.
                  </p>
                  <p>
                    TikTok jest kanałem trendów — jeśli Twój produkt lub usługa jest dla Gen Z lub young Millenialsów, musisz być na TikToku. To nie opcja, to konieczność w 2026.
                  </p>
                  <p>
                    Kraków to hub dla e-commerce, startupów, agencji kreatywnych i usług skierowanych na młodych ludzi. Jeśli prowadzisz biznes w Krakowie i chcesz rosnąć — TikTok Ads to najszybsza droga do pierwszych klientów.
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
                  <h3 className="text-xl font-bold mb-3">Planowanie strategii TikTok</h3>
                  <p className="text-muted-foreground">
                    Analizujemy konkurencję w Krakowie, definiujemy grupę docelową, wybieramy typ kampanii. Wszystko dostosowane do Twojego budżetu i celu biznesowego.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Tworzenie kreatywnych wideo</h3>
                  <p className="text-muted-foreground">
                    Profesjonalne kreacje video w formacie TikTok (9:16, short-form). Hook, pacing, sound design — wszystko zoptymalizowane dla algorytmu. A/B testy 3-5 wariantów.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Setup konta TikTok Business</h3>
                  <p className="text-muted-foreground">
                    Zakładamy konto TikTok Business, weryfikujemy, konfigurujemy pixel TikTok do śledzenia konwersji. Pełna automatyzacja raportowania i trackingu.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Zarządzanie kampanią 24/7</h3>
                  <p className="text-muted-foreground">
                    Monitorujemy kampanię codziennie, optymalizujemy budżet, testujemy nowe kreatywne. Fokus na CTR, CPC, conversion rate, ROAS.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Kolaboracja z twórcami TikToka</h3>
                  <p className="text-muted-foreground">
                    Jeśli chcesz pracować z influencerami lub content creatorami, koordynujemy i zarządzamy wspólpracą. Authentic content, szybkie wyniki.
                  </p>
                </div>
                <div className="bg-background rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-3">Raportowanie co tydzień</h3>
                  <p className="text-muted-foreground">
                    Raportowanie szczegółowe — wyświetlenia, kliki, konwersje, ROAS, budżet. Analiza co działa i jakie zmiany wprowadzić w kolejnym tygodniu.
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
                Jak prowadzimy kampanie TikTok Ads w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Konsultacja bezpłatna</h3>
                    <p className="text-muted-foreground">
                      Poznajemy Twoją firmę, produkt, cel kampanii (awareness, traffic, conversions) i docelową grupę. Jakie są Twoje oczekiwania? Jaki budżet przeznaczyasz?
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Research konkurencji na TikToku</h3>
                    <p className="text-muted-foreground">
                      Badamy konkurencję w Krakowie — jakie kampanie się rozpowszechniają? Jakie kreatywne angażują Gen Z? Jakie są słabe punkty konkurentów?
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
                      Tworzymy 3-5 wariantów kreatywnych dostosowanych do algorytmu TikToka. Hook, pacing, sound design — wszystko do maksymalizacji zaangażowania.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Setup i uruchomienie w 48-72h</h3>
                    <p className="text-muted-foreground">
                      Konfigurujemy konto, pixel, budżet, targeting. Kampania uruchamia się szybko. Pierwsza grupa obserwuje reklamy już po kilku godzinach.
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
                      Codziennie monitorujemy wyniki, optymalizujemy budżet, testujemy nowe kreatywne. Raporty co tydzień z analizą i rekomendacjami.
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
                Kampanie TikTok Ads dla jakich branż w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">E-commerce i sklepy online</h3>
                    <p className="text-sm text-muted-foreground">
                      Odzież, gadżety, elektronika, kosmetyki. TikTok Shop — ideal dla wdrażania produktów i sprzedaży online.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Beauty i pielęgnacja</h3>
                    <p className="text-sm text-muted-foreground">
                      Kosmetyka, zabiegi, salony. Trendy beauty na TikToku — algorytm sam znajduje zainteresowanych.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Fitness i wellness</h3>
                    <p className="text-sm text-muted-foreground">
                      Siłownie, treningi online, coaching. Gen Z trenuje na TikToku — idealna grupa docelowa.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Edukacja online</h3>
                    <p className="text-sm text-muted-foreground">
                      Kursy, szkoły online, nauka. Millenialsowie i Gen Z uczą się online — kanał pozyskiwania studentów.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Moda i ubrania</h3>
                    <p className="text-sm text-muted-foreground">
                      OOTD, trendy, lookbooki. TikTok dyktuje trendy — idealne dla marek modowych.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold mb-2">Restauracje i kawiarnie</h3>
                    <p className="text-sm text-muted-foreground">
                      Food content, reviews, specjały. Gen Z wybiera lokale na podstawie TikTok — perfect visibility.
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
                Dlaczego Fotz Studio jako agencja TikTok Ads w Krakowie?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Rozumienie algorytmu TikToka</h3>
                  <p className="text-muted-foreground">
                    Wiemy jak algorytm TikToka działa — jak tworzyć kreatywne, które rozpowszechniają się organicznie. Authentic content, właściwy pacing, sound design.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Profesjonalne tworzenie wideo</h3>
                  <p className="text-muted-foreground">
                    Nasz team tworzy kreatywne video w formacie TikTok — hook, sceny, muzyka, tekst. Każde video testujemy przed uruchomieniem na żywo.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Niskie CPCs, wysoki ROAS</h3>
                  <p className="text-muted-foreground">
                    W Krakowie CPC TikTok to 0,5-1,5 zł — najniższe na rynku. ROAS naszych kampanii to 3:1 do 8:1 — najwyższe w branży.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Doświadczenie z krakowskim rynkiem</h3>
                  <p className="text-muted-foreground">
                    Znamy krakowski rynek, trendy, young audience w Krakowie. Wiemy co funkcjonuje dla firm z Krakowa — do e-commerce do startupów.
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-2">Transparentne rozliczenia</h3>
                  <p className="text-muted-foreground">
                    Raporty co tydzień, pełna przejrzystość wydatków i wyników. Wiesz dokładnie czego wydajemy każdy złoty i jaki zwracamy ROAS.
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
                Najczęstsze pytania o TikTok Ads Kraków
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
                  Uruchom kampanie TikTok Ads w Krakowie
                </h2>
                <p className="text-lg text-slate-300 mb-10">
                  Bezpłatna konsultacja bez zobowiązań. Poznaj naszą strategię TikTok dla Twojej branży. Wyniki w 1-2 tygodnie.
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
                    to="/performance-marketing/google-ads/krakow"
                    className="text-primary hover:underline font-semibold"
                  >
                    Google Ads Kraków
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
        <ContactSection city="Kraków" />
      </Layout>
    </>
  );
}
