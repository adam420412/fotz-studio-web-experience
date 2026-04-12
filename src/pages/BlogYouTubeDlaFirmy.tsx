import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Video, Play, TrendingUp, Eye, Settings, BarChart3, CheckCircle, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogYouTubeDlaFirmy() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "YouTube dla firmy" },
  ];

  const contentTypes = [
    {
      name: "Tutoriale i poradniki",
      description: "Naucz klientów jak rozwiazywac problemy zwiaizane z Twoim produktem lub usluga. Zbuduj autorytet i zaufanie.",
      example: "Softwarowa firma publiczna filmiki: 'Jak zainstalowac X w 5 minut', 'Rozwiazanie bledu Y'"
    },
    {
      name: "Recenzje produktow",
      description: "Porownaj swoje rozwiazanie z konkurencja. Pokaż wiecej wartosci. Zwieksz konwersje z potencjalnych klientow.",
      example: "Portale techniczne: 'Porownanie narzedzi do X', 'Czy warto kupic Y?'"
    },
    {
      name: "Behind-the-scenes",
      description: "Pokaż kulise biznesu. Zespol, biuro, proces tworzenia. Ludzie kupia od ludzi — buduj zwiaizek emocjonalny.",
      example: "Agencje: 'Dzien w naszej agencji', 'Jak pracujemy nad projektami klientow'"
    },
    {
      name: "Case studies",
      description: "Dokumentuj sukces klientow. Przed-po, wyniki, liczby. Najsilniejszy material dla sprzedazy.",
      example: "Konsultanci: 'Jak zwiekszylem przychod klienta o 150% w 6 miesiecy'"
    },
    {
      name: "Webinary i szkolenia",
      description: "Pokaż ekspertyze. Transmituj na zywo lub zapisz. Generuj leady, buduj list mailowy.",
      example: "Szkolenia online, autorzy: 'Webinar: Tajniki marketingu digitalnego 2025'"
    },
    {
      name: "Testimoniale klientow",
      description: "Prawdziwe glosy zadowolonych klientow. Najpotezniejszy dowod socjalny. Zwiekszy konwersje.",
      example: "Wszystkie bransze: 'Recenzja od klienta: Jak Y zmienil nasz biznes'"
    }
  ];

  const optimizationTips = [
    {
      category: "Tytul",
      tips: [
        "Zaczni slowem kluczowym: 'Jak', 'Co', 'Gdzie', 'Dlaczego'",
        "Dodaj liczbe lub slowo 'poradnik': 'Poradnik: 5 sposob...'",
        "Bądz konkretny: 'Jak zarabiać na YouTube' > 'YouTube dla poczatkujacych'",
        "Dlugość: 50-60 znakow. Wiecej sie odcina w wynikach."
      ]
    },
    {
      category: "Opis (Description)",
      tips: [
        "Pierwsze 150 znakow to to, co widac w wynikach — powiedzial wszystko.",
        "Zawrze slowko kluczowe w pierwszym zdaniu.",
        "Dodaj linki do zasobow wspolny: strony, inne filmiki, linki afiliacyjne.",
        "CTA: 'Skubskrybuj, polub, skomentuj'. Zwieksz engagement."
      ]
    },
    {
      category: "Tagi i slowka kluczowe",
      tips: [
        "Najpierw szeroki tag (np. 'YouTube'), potem szczegolowy (np. 'YouTube dla poczatkujacych').",
        "Max 15-20 tagow. YouTube ignora po 15.",
        "Tagi specjalistyczne nie maja mozliwosci — skupiam sie na nich jezeli konkurencja malo.",
        "Unik tagow niezwiaizanych z tema. Zmniejsza trafnosc algorytmu."
      ]
    },
    {
      category: "Thumbnail",
      tips: [
        "Faces and emotions grab attention: zaskoczenie, gniew, radosc.",
        "Kontrastowe kolory: text, tlo. Zrob sie widoczny w miniaturze.",
        "Duży, czytelny tekst (2-4 slowa). Czcionka bez szeryfow.",
        "Konsystencja: ten sam styl, ten sam format dla wszystkich epizodow serii."
      ]
    }
  ];

  const seoOptimizationSteps = [
    {
      step: 1,
      title: "Wyszukaj slowka kluczowe",
      desc: "Uzyteczne YouTube Suggest (wpisz slowo, zobacz propozycje), TubeBuddy, VidIQ. Szukaj slowek z ruch + niska konkurencja."
    },
    {
      step: 2,
      title: "Tytul zawierajacy slowko kluczowe",
      desc: "Slowko kluczowe w pierwszych 3 slowach. Przyklad: 'YouTube dla firmy: Poradnik 2025 [Od zera do boku]'."
    },
    {
      step: 3,
      title: "Opis i slowka kluczowe",
      desc: "Pierwsze 150 znakow: slowko kluczowe, mala wartosc. Powiedz wszystko tu. Tags: szeroki + szczegolowy."
    },
    {
      step: 4,
      title: "Transkrypcja i podtytly",
      desc: "YouTube nie slysazy co mowisz bez transkrypcji. Polskie podtytly + slowka kluczowe. Zwieksza SEO i dostepnosc."
    },
    {
      step: 5,
      title: "Playlista i seriowanie",
      desc: "Grupy filmow w playlisty (tematyczne). Zwieksza watch time i bierze sie filmiki lepiej."
    },
    {
      step: 6,
      title: "Linki wewnetrzne",
      desc: "W opisie linkuj inne swoje filmiki (slowka kluczowe). 'Kliklem na inny film: ...' — zwieksza watch time."
    },
    {
      step: 7,
      title: "Minimalne long-form",
      desc: "YouTube preferuje filmiki 8-15 minut. SEO boost. Ale nie padle — jakosc > dlugosc."
    }
  ];

  const youtubeAdsTypes = [
    {
      type: "Skippable In-stream ads",
      description: "Pre-roll / mid-roll. Oglądających mozliwosc pominięcia po 5 sekundach. Placiasz gdy oglądnie 30 sec lub więcej.",
      cpc: "0.50 - 2 PLN"
    },
    {
      type: "Non-skippable In-stream ads",
      description: "Oglądający nie moga pominac. Max 15-20 sekund. Placiasz za każde wyswietlenie.",
      cpc: "0.30 - 1.50 PLN"
    },
    {
      type: "Bumper ads",
      description: "Max 6 sekund. Brak mozliwosci pominięcia. Branding, pamieć marki.",
      cpc: "0.20 - 1 PLN"
    },
    {
      type: "Discovery ads",
      description: "Pojawiaja sie w rezultatach wyszukiwania YouTube lub obok filmow. User kliknie na twoj film.",
      cpc: "0.30 - 2 PLN"
    }
  ];

  const analyticsMetrics = [
    {
      metric: "Watch time",
      what: "Lacze minuty ogladania",
      why: "Główny ranking factor na YouTube. Wiecej = lepiej rankingach. 4000h rocznie to wymagane dla monetyzacji."
    },
    {
      metric: "Click-through rate (CTR)",
      what: "% klikniecia na twoj film ze wiadomosci o filmie",
      why: "Sygnał ze film interesujacy. YouTube wiec promuje. Dobra CTR = 5-10% dla nowych kanalow."
    },
    {
      metric: "Average view duration",
      what: "Srednia ilosc minut oglądane",
      why: "Kiedy ludzie wychodzą = niedobry obraz. YouTube chce widząć wysoki czas. 50%+ to dobry cel."
    },
    {
      metric: "Impressions",
      what: "Ile razy twoj film sie pojawil (miniatura)",
      why: "Zanim ktos klikor. Niska impressja = problem z SEO lub tytul/thumbnail nie przyciagaja."
    },
    {
      metric: "Subscribers gained",
      what: "Nowe subskrypcje z filmiku",
      why: "Zaangazowanie. Wiecej subskrybentow = algorytm lepiej rozpowszechnia nowe filmiki."
    },
    {
      metric: "Traffic sources",
      what: "Skad ludzie przychodzą (wyszukiwania, sieć YouTube, link zewnetrzny, playlista itd)",
      why: "Widac co dziala. Jezeli SEO niska — lepszy tytul/opis/tag. Jezeli YouTube niska — gorsze zaangazowanie."
    }
  ];

  const polishBrandExamples = [
    {
      brand: "Decathlon Polska",
      strategy: "Tutoriale: 'Jak zamienic opony', 'Jak ustawic rower', 'Jakie ubranie na bieganie'. SEO fokus. 1000+ filmow. Generuja sprzedaz."
    },
    {
      brand: "PRUS (e-learning)",
      strategy: "Darmowe szkolenia, webinary. Buduje autorytet. Konwersja: webinar → wplacona kursu. Organiczna sprzedaz."
    },
    {
      brand: "OLX Motors",
      strategy: "Behind-the-scenes, recenzje samochodów, porady. Video content zamiast tekstu — wiecej zaangazowania."
    },
    {
      brand: "Allegro",
      strategy: "Kampanie, unboxing, jak sprytnie zarabiac. Viral potential. Branding, SEO.",
      marketing: ""
    },
    {
      brand: "Agencja X (anonimowa)",
      strategy: "Case studies klientow. 'Wzrost przychodu o 300%'. Case studies > jakichkolwiek innych metryk sprzedazy. Konwersja: 5-10%."
    }
  ];

  const commonMistakes = [
    {
      title: "Zbyt krótkie filmiki bez wartosci",
      description: "Wiele firm publiczna 30-sekundowe reklamy. YouTube preferuje 8-15 min. Ale zawsze dodaj wartość — muszą sie czegos nauczyc.",
      solution: "Twórz filmiki: tutorial (10min), nie reklama (30sec). Edukuj poprzez sprzedaż, nie sprzedawaj poprzez edukację."
    },
    {
      title: "Ignorowanie SEO YouTube",
      description: "Brak slowek kluczowych w tytule, opisie, tagach. YouTube ma swój algorytm — SEO tam dziala, ale inaczej niż na stronie.",
      solution: "Tytul = slowko kluczowe. Opis = slowko + wartość. Transkrypcja = slowka. TubeBuddy/VidIQ = badania."
    },
    {
      title: "Zla miniatura",
      description: "Nudna miniatura = niska CTR. YouTube bedzie pokazywac twoj film mniej ludzi. Vicious cycle.",
      solution: "Twarz, emocje, kontrastowe kolory. Duży tekst. A/B test miniatur — YouTube to umozliwia."
    },
    {
      title: "Brak konsystencji",
      description: "Publikacja co miesiac, potem nic. Algorytm lubi kanaly z regularnym uploadem. Subskrybenci odchodza bez powiadomien.",
      solution: "Harmonogram: co tydzien, co 2 tygodnie. Konsystencja > jakosc. 10 zmoslych filmow lepiej niz 1 doskonaly rocznie."
    },
    {
      title: "Publikacja bez promocji",
      description: "Wyloadalem film i czekam. YouTube nie bedzie go sami ogladac. Trzeba trafiać ludzi.",
      solution: "Promocja: LinkedIn (B2B), TikTok (B2C), Instagram, newsletter, email. Pierwsze 24-48h krytyczne dla algorytmu."
    }
  ];

  const faqItems = [
    {
      question: "Ile czasu zajmuje zaczac zarabiać na YouTube?",
      answer: "YouTube monetyzacja wymaga: 1000 subskrybentow + 4000 godzin watch time w ostatnich 12 miesiacach. Szacunkowo: 6-12 miesiecy dla poczatkujacych przy regularnym uploadzeniu (co tydzien). Ale zanim monetyzujesz, mozesz juz zarabiać poprzez: affiliate links (Amazon, własne produkty), sprzedaż produktu/uslugę, sponsoring, superchaty. YouTube AdSense to ostatnia wartosc przychodu."
    },
    {
      question: "Czy YouTube dal firm B2B czy raczej B2C?",
      answer: "Obie! B2B: tutoriale, webinary, case studies — generuja leady. B2C: unboxing, porady, entertainment — generuja sprzedaż. Różnica: B2B filmiki sa dlusze, edukacyjne, targetuja konkretne profile (decision makers). B2C filmiki sa krótsze, bardziej emotional, targetuja szeroką publiku. Strategia się róni — ale YouTube dziala dla obu. Przyklad B2B: software review, B2C: fashion haul."
    },
    {
      question: "Ile powinien trwac idealny filmik na YouTube?",
      answer: "Sweet spot: 8-15 minut. YouTube algorytm preferuje dluzsze filmiki (wiecej watch time). Ale: 1) Nie padle — jakosc > dlugosc. Lepiej 10 min wartościowego niz 20 min spamliku. 2) Poczatkujacy zaczy od 5-8 min (nie strasz odbiorcy). 3) Grow filmiki (10-15) gdy kanał robi sie wiekszy. 4) Seria krótkich (2-3 min) na TikTok / YouTube Shorts, ale main filmiki powinny być dluzsze."
    },
    {
      question: "Jakie sq najlepsze czasy do uploadzenia filmiku?",
      answer: "Zaleza od publiku. Typowo: utorki-czwartki, 6-8 rano (ludzie sie budza) lub 5-9 wieczorem (wracaja z pracy). Ale: slowa od YouTube: 'Czasem nie ma znaczenia, liczy sie konsystencja — codziennie o tej samej godzinie.' Wiecej: używaj YouTube Studio Analytics > Audience > When your viewers are on YouTube. Zobaczysz kiedy TI oglądają."
    },
    {
      question: "Czy nalezy pracowac sam czy zatrudnic producenta video?",
      answer: "Zaalezy: 1) Startup / mały budżet: rob sam. iPhone + microfon = wystarczy. Edycja: CapCut (free), DaVinci Resolve (free). 2) Ponoworozwój: outsource edycje (Fiverr, Upwork, polocna agencja). Zatrzymaj napisanie scenariusza — tam jest wartosc. 3) Skalowanie: zatrudnij caly team (producer, editor, graphics). Ale zawsze ty jestes twarz — autentycznosc = wartość. Przyklad: MrBeast ma team, ale on jest twarz."
    },
    {
      question: "Jak wiec zarabiać na YouTube bez duzego kanalau?",
      answer: "1) Affiliate marketing: linkuj produkty (Amazon, Skimlinks). 2) Sponsoring: wiele marek placą za mention. 3) Wlasny produkt: kursy, ebooki, konsultacje. 4) Email list + sprzedaż: filmiki sa funnel — trafiaj ludzi na newsletter, tam sprzedawaj. 5) Case studies jako lead gen: pokaz umiejetnosci, konwertuj spektatora na klienta. YouTube AdSense jest ostatecznym zrodlem przychodu, ale pierwszy 3 miesiace: affiliate + produkt."
    }
  ];

  return (
    <>
      <SEOHead
        title="YouTube dla firmy — Poradnik SEO 2025 | fotz.pl"
        description="YouTube dla biznesu. Jak zalozyta kanal YouTube, tworzyc treści, optymalizować SEO YouTube, zarabiać na YouTube Ads. Poradnik dla firm i nowych kanalow."
        canonical="https://fotz.pl/blog/youtube-dla-firmy"
      />
      <ArticleSchema
        title="YouTube dla firmy — pełny poradnik SEO, zarabianie i strategie 2025"
        description="YouTube marketing dla firm. Zalozenie kanalau YouTube, rodzaje tresci, optymalizacja SEO YouTube (tytuły, tagi, opisy), YouTube Ads, analityka, przykłady polskich marek."
        datePublished="2025-03-01"
        dateModified="2025-06-20"
        url="https://fotz.pl/blog/youtube-dla-firmy"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "YouTube dla firmy", url: "/blog/youtube-dla-firmy" }
      ]} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min czytania</span>
              <span className="flex items-center gap-1"><Video className="w-4 h-4" /> Marketing na YouTube</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              YouTube dla firmy: Pełny poradnik SEO i zarabiania
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Jak zalozytac kanal YouTube dla biznesu, tworzyc treści ktore rankuja, optymalizować dla SEO YouTube, uruchamiać YouTube Ads i zarabiać na wideo marketingu. Poradnik dla firm i przedsiebiorców.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                YouTube to drugi co do wielkosc aparat wyszukiwania na swiecie (po Google). Rocznie 2.5 miliardy zalogowanych uzytkownikow, 1 miliard godzin ogladanego dziennie.
                Dla firm YouTube oznacza: organiczny ruch na strone, lead generation, sprzedaż, autorytet, branding.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                W tym poradniku nauczymy sie: 1) jak zalozytac i optymalizować kanal YouTube dla biznesu, 2) jakie rodzaje tresci dzialaja najlepiej, 3) jak optymalizować dla YouTube SEO,
                4) jak puszczac YouTube Ads i ile to kosztuje, 5) jak analizowac sukces, 6) jak zarabiać na kanale.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Szukaj slow kluczowych dla YouTube — przeciętna 400+ monthly searches dla 'YouTube dla firmy' — to niedostatecznie wykorzystany kanal dla B2B i B2C.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Dlaczego YouTube */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Dlaczego YouTube dla biznesu jest najwazniejszy w 2025?
              </h2>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  icon: Eye,
                  title: "Ogromny traffic",
                  desc: "2.5 mld Users/mies. Jezeli twoj film rankuje, ruch przychodzi organicznie bez reklam."
                },
                {
                  icon: TrendingUp,
                  title: "SEO ranking",
                  desc: "YouTube filmy czesto pojawiaja sie w Google Search. Jeden film = traffic z Google + YouTube."
                },
                {
                  icon: Play,
                  title: "Lead generation",
                  desc: "Link w opisie filmiku trafia potencjalnych klientow na strone. Konwersja: 5-10%."
                },
                {
                  icon: BarChart3,
                  title: "Analityka",
                  desc: "YouTube Studio pokazuje watch time, CTR, audience demografije. Dane na temat co dzialol."
                },
                {
                  icon: CheckCircle,
                  title: "Autorytet",
                  desc: "Video content buduje wiecej zaufania niz tekst. Ludzie chca widziec twarz, slyszeć glos."
                },
                {
                  icon: TrendingUp,
                  title: "Zarabianie",
                  desc: "YouTube AdSense, affiliate, wlasne produkty, sponsoring. Multiple revenue streams."
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <FadeInView key={idx} delay={idx * 0.1}>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400/50 transition">
                      <div className="flex items-start gap-4">
                        <Icon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-slate-300">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </section>

        {/* Zakladanie kanalu */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Jak zalozytac kanal YouTube dla biznesu
              </h2>
              <p className="text-slate-300 mb-8">
                Prosty proces w kilka minut:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {[
                { step: 1, title: "Załóż konto Google", desc: "Lub zaloguj sie na istniejące. YouTube wymaga Google Account." },
                { step: 2, title: "Wejdź na YouTube.com", desc: "W prawym gornym rogu kliknij ikonę profilu, 'Utwórz kanał'." },
                { step: 3, title: "Wpisz nazwę kanału", desc: "Powinna zawierać slowko kluczowe (np. 'Fotz Marketing' zamiast 'Nasz Kanal')." },
                { step: 4, title: "Personalizuj baner i logo", desc: "Logo: 800x800px (4:4). Baner: 2560x1440px (16:9). Obie powinny mieć branding." },
                { step: 5, title: "Napisz opis kanału", desc: "Include: co robie, dla kogo, slowka kluczowe. Max 1000 znakow. Link do strony." },
                { step: 6, title: "Dodaj kanał do Google Business", desc: "Zwiekszy widocznosc. Linki: YouTube Studio > Ustawienia > Baza danych." }
              ].map((item) => (
                <FadeInView key={item.step} delay={item.step * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex gap-4">
                    <div className="bg-yellow-400/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Rodzaje tresci */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Jakie rodzaje tresci dzialaja na YouTube dla firm
              </h2>
              <p className="text-slate-300 mb-8">
                Nie wszystkie filmiki maja taka sama wartosc. Oto co dzialaje dla biznesu:
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6">
              {contentTypes.map((type, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">{type.name}</h3>
                    <p className="text-slate-300 mb-3">{type.description}</p>
                    <div className="bg-gray-900/50 rounded p-3 border-l-2 border-yellow-400">
                      <p className="text-sm text-slate-300">
                        <span className="text-yellow-300 font-semibold">Przyklad:</span> {type.example}
                      </p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* SEO YouTube */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Optymalizacja SEO YouTube: Jak rankuje Twój film
              </h2>
              <p className="text-slate-300 mb-8">
                YouTube ma swój algorytm. Oto jak to dziala:
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {optimizationTips.map((tip, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-4">{tip.category}</h3>
                    <ul className="space-y-3">
                      {tip.tips.map((t, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-300 text-sm">{t}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Praktyczne kroki do wdrożenia</h3>
            </FadeInView>

            <div className="space-y-4">
              {seoOptimizationSteps.map((item) => (
                <FadeInView key={item.step} delay={item.step * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex gap-4">
                    <div className="bg-yellow-400/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Ads */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                YouTube Ads: Jak reklamowac się na YouTube
              </h2>
              <p className="text-slate-300 mb-8">
                Nie czekaj na organicze rozrost. YouTube Ads to szybki sposob na dostęp do milionów ludzi:
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {youtubeAdsTypes.map((ad, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">{ad.type}</h3>
                    <p className="text-slate-300 mb-4">{ad.description}</p>
                    <div className="bg-gray-900/50 rounded p-3 border-l-2 border-emerald-400">
                      <p className="text-sm text-emerald-300">
                        <span className="font-semibold">CPC:</span> {ad.cpc}
                      </p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView>
              <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Jak zaczać YouTube Ads</h3>
                <ol className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-blue-300 font-bold min-w-fit">1.</span>
                    <span>Zalóż Google Ads Account (ads.google.com) i powiąż z YouTube.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-300 font-bold min-w-fit">2.</span>
                    <span>Utwórz kampanię: 'Video' → typ (Skippable, Non-skippable, Bumper itd).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-300 font-bold min-w-fit">3.</span>
                    <span>Definiuj targeting: wiek, interes, slowka kluczowe, kanaly.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-300 font-bold min-w-fit">4.</span>
                    <span>Ustaw budżet dzienny: np. 50 PLN/dzień. YouTube optymalizuje resztę.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-300 font-bold min-w-fit">5.</span>
                    <span>Mierz: ROAS (Return on Ad Spend), CTR, konwersje, Cost Per Lead.</span>
                  </li>
                </ol>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Analityka */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Analityka kanału YouTube: Jakie metryki mierzyć
              </h2>
              <p className="text-slate-300 mb-8">
                YouTube Studio daje ci ogrom danych. Oto co faktycznie mówi o sukcesie:
              </p>
            </FadeInView>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Metryka</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Co to znaczy</th>
                    <th className="text-left py-3 px-4 text-yellow-400 font-semibold">Dlaczego jest ważna</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsMetrics.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="py-3 px-4 text-slate-200 font-medium">{row.metric}</td>
                      <td className="py-3 px-4 text-slate-300">{row.what}</td>
                      <td className="py-3 px-4 text-slate-300">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bledyw */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Typowe błędy przy YouTube dla firm
              </h2>
              <p className="text-slate-300 mb-8">
                Unikaj tych błędów:
              </p>
            </FadeInView>

            <div className="space-y-6">
              {commonMistakes.map((mistake, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-red-900/10 border border-red-700/30 rounded-lg p-6">
                    <div className="flex gap-4">
                      <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-red-400 mb-2">{mistake.title}</h3>
                        <p className="text-slate-300 mb-3">{mistake.description}</p>
                        <div className="bg-gray-900/50 rounded p-3 border-l-2 border-yellow-400">
                          <p className="text-sm text-yellow-300">
                            <span className="font-semibold">Rozwiązanie:</span> {mistake.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Przykłady polskich marek */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Przykłady polskich marek na YouTube
              </h2>
              <p className="text-slate-300 mb-8">
                Jak polskie firmy znaja YouTube marketing:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {polishBrandExamples.map((example, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">{example.brand}</h3>
                    <p className="text-slate-300">{example.strategy}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Najczęstsze pytania o YouTube dla firm</h2>
              <p className="text-slate-300 mb-8">
                Odpowiadamy na najczęstsze pytania dotyczące YouTube marketing dla biznesu.
              </p>
            </FadeInView>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.05}>
                  <AccordionItem value={`faq-${idx}`} className="border border-gray-700 rounded-lg bg-gray-800 px-4">
                    <AccordionTrigger className="text-base font-semibold text-white hover:text-yellow-400 py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pt-0">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeInView>
              ))}
            </Accordion>
          </div>

          <FAQSchema
            items={faqItems.map(item => ({
              question: item.question,
              answer: item.answer
            }))}
          />
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gotowy do YouTube dla twojej firmy?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                YouTube to najszybciej rosnący kanal marketingu. Jesli nie jestes tam, tracisz leads i sprzedaż.
                Pomożemy Ci uruchomić kanał, stworzyć strategie i zarabiać.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
              >
                Konsultacja bezpłatna <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeInView>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
