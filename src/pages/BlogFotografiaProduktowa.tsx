import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Package, Zap, Palette, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "Ile kosztuje sesja fotografii produktowej?",
    answer: "Cena sesji zależy od typu i liczby produktów. Packshot (podstawowy) kosztuje 400-800 zł. Fotografia lifestyle i 360 stopni to 800-3000 zł. Dla e-commerce bulk (powyżej 10 produktów) cena wynosi 200-600 zł za produkt. Wycena obejmuje retusz, eksport w wielu formatach (JPG, PNG, WebP) i poprawki kolorystyczne."
  },
  {
    question: "Jak długo trwa sesja produktowa?",
    answer: "Standardowa sesja trwa 2-4 godziny w zależności od liczby produktów i złożoności. Sesja packshot zwykle 2-3 godziny. Fotografia lifestyle i 360 stopni zajmuje więcej czasu ze względu na setup oświetlenia i pozycjonowania. Po sesji fotograficzne przetworzenie trwa 3-7 dni roboczych."
  },
  {
    question: "Czym różni się packshot od fotografii lifestyle?",
    answer: "Packshot to fotografia produktu na neutralnym, jednolitym tle. Pokazuje produkt jasno, bez kontekstu. Lifestyle to fotografia produktu w rzeczywistym scenariuszu użycia — produktu w ręku, na biurku, podczas używania. Lifestyle wpływa na emocje i sprzedaż, packshot na czystość i profesjonalizm."
  },
  {
    question: "Jakie formaty plików po sesji produktowej?",
    answer: "Po sesji otrzymujesz: JPG (dla stron e-commerce), PNG (transparentny dla katalogów), WebP (szybki dla mobilnych). Wszystkie formaty są przygotowane w rozmiarach dostosowanych do platformy — kwadratowe (1:1) dla Instagrama, 3:4 dla TikToka, 16:9 dla kampanii. Otrzymujesz również raw'i do archiwum."
  },
  {
    question: "Czy potrzebuję przywieźć produkty do studio?",
    answer: "Tak, dowozimy produkty do naszego studia w Poznaniu. Zapewniamy bezpieczny transport i ubezpieczenie. Alternatywnie możemy przyjechać do Ciebie na lokację, ale to wiąże się z dodatkową opłatą za wyjazd. Studio wyposażone jest w profesjonalne oświetlenie LED, cykloramy i obracające się platformy dla 360 stopni."
  },
  {
    question: "Jak fotografia produktowa wpływa na sprzedaż online?",
    answer: "Jakość zdjęć wpływa na konwersję. Produkty z profesjonalnymi zdjęciami sprzedają się o 40-70% lepiej niż z własnymi fotografiami. Kupujący przykracają na zdjęcia — z nich podejmują decyzję o zakupie. Dobra fotografia zmniejsza zwroty (klienci wiedzą, co będą mieć). Produkty z wieloma zdjęciami z różnych kątów mają wyższy średni wartość zamówienia."
  },
  {
    question: "Co to jest fotografia 360 stopni produktu?",
    answer: "Fotografia 360 stopni to seria zdjęć tego samego produktu zrobionego z 72 kątów (co 5 stopni). Zdjęcia są zbierane w interaktywny widok 3D — klient może przewijać, obracać produkt na ekranie. Jest to dostępne na Allegro, Amazon, Shopify. Zwiększa zaangażowanie i zmniejsza wątpliwości kupujących. Koszt wynosi 1500-3000 zł za produkt."
  },
  {
    question: "Jakie produkty wymagają specjalnej sesji fotograficznej?",
    answer: "Produkty drogi i skomplikowane (biżuteria, zegarki, elektronika) wymagają profesjonalnej sesji. Kosmetyki i drogi alkohol wymagają eleganckich setup'ów. Produkty refleksyjne (metale, szkło) wymagają specjalnego oświetlenia ze względu na odbicia. Produkty tekstilne potrzebują starannego stylizacji. Produkty spożywcze wymagają food photographera. Wszystkie produkty e-commerce zawsze się opłacają."
  }
];

const pricingTable = [
  {
    typ: "Packshot",
    cena: "400-800 zł",
    zawiera: "Sesja na białym tle, retusz, 3 formaty (JPG/PNG/WebP)",
    kiedy: "Dla katalogów, e-commerce podstawowy"
  },
  {
    typ: "Lifestyle",
    cena: "800-2000 zł",
    zawiera: "Scenariusz użycia, profesjonalne stylizacja, retusz, wszystkie formaty",
    kiedy: "Social media, kampanie, premium segments"
  },
  {
    typ: "360 stopni",
    cena: "1500-3000 zł",
    zawiera: "72 kąty, interaktywny widok 3D, integracja z platformą",
    kiedy: "Amazon, Allegro, high-ticket items"
  },
  {
    typ: "E-commerce bulk",
    cena: "200-600 zł/szt.",
    zawiera: "Pakiet powyżej 10 produktów, każdy na różnym tle, retusz",
    kiedy: "Całe kolekcje, sklepy, katalogi"
  }
];

export default function BlogFotografiaProduktowa() {
  return (
    <>
      <SEOHead
        title="Fotografia produktowa — kompletny poradnik 2025 | Fotz.pl"
        description="Fotografia produktowa poradnik: ceny, typy sesji, przygotowanie produktów, wpływ na sprzedaż e-commerce. Dowiedz się, jak wybrać fotografa i zwiększyć…"
        ogType="article"
        canonical="https://fotz.pl/blog/fotografia-produktowa-poradnik"
        keywords="fotografia produktowa, fotografia produktów, packshot, lifestyle photography, e-commerce fotografia, cena sesji"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Fotografia produktowa — kompletny poradnik 2025",
            "description": "Kompleksowy przewodnik po fotografii produktowej — typy sesji, ceny, wpływ na sprzedaż, porada jak wybrać fotografa",
            "author": {
              "@type": "Organization",
              "name": "FOTZ"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FOTZ",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fotz.pl/logo-fotz.jpg"
              }
            },
            "datePublished": "2026-04-12",
            "dateModified": "2026-04-12"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fotz.pl" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fotz.pl/blog" },
              { "@type": "ListItem", "position": 3, "name": "Fotografia produktowa — poradnik" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }
        ]}
      />

      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-background">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Fotografia produktowa — poradnik</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>

                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Fotografia produktowa
                </span>

                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Fotografia produktowa — kompletny poradnik 2025
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół FOTZ
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    12 kwietnia 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    12 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2015"
                    alt="Fotografia produktowa profesjonalna"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid md:grid-cols-4 gap-4 mb-12 p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-amber-950 to-orange-900"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">Od 400 zł</div>
                  <div className="text-sm text-muted-foreground">Sesja packshot</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">2-4h</div>
                  <div className="text-sm text-muted-foreground">Czas sesji</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">JPG+PNG+WebP</div>
                  <div className="text-sm text-muted-foreground">Wszystkie formaty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">Retusz</div>
                  <div className="text-sm text-muted-foreground">Zawsze w cenie</div>
                </div>
              </motion.div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg prose-invert max-w-none"
              >
                <p className="lead text-xl text-muted-foreground mb-8">
                  Fotografia produktowa to nie tylko "zrobienie zdjęcia produktu". To sztuka pokazania wartości poprzez obraz — wzmacniania zainteresowania, budowania zaufania do kupującego, zwiększania konwersji e-commerce. W tym kompletnym poradniku poznasz wszystkie aspekty fotografii produktowej: od definiowania rodzajów sesji, przez ceny i przygotowanie produktów, po wybiór profesjonalnego fotografa i wpływ na sprzedaż online.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Czym jest fotografia produktowa?
                </h2>

                <p className="text-muted-foreground mb-6">
                  <strong>Fotografia produktowa to specjalistyczna gałąź fotografii komercyjnej polegająca na fotografowaniu towarów w celu promocji i sprzedaży.</strong> Celem jest pokazanie produktu w najlepszym możliwym świetle — by wyglądał profesjonalnie, atrakcyjnie i wiarygodnie dla potencjalnych kupujących.
                </p>

                <p className="text-muted-foreground mb-6">
                  Fotografia produktowa różni się od fotografii aktorskiej czy pejzażowej, ponieważ musi być przedmiotem głównym, zawsze wyraźna i spójna w całej serii produktów. Każde zdjęcie musi spełniać standardy platformy e-commerce (Amazon wymaga białego tła, Allegro akceptuje tła kolorowe) i być optymalizowane do konwersji.
                </p>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">
                  Typy fotografii produktowej:
                </h3>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Packshot:</strong> Produkt na białym, jednolitym tle — czysty, jasny, uniwersalny dla e-commerce. Najbardziej popularne zdjęcie w katalogach.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Lifestyle:</strong> Produkt w scenariuszu rzeczywistego użycia — w ręku, na biurku, w domu. Buduje emocje, pokazuje praktyczność.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>360 stopni:</strong> Seria zdjęć produktu z 72 kątów tworzących interaktywny widok 3D na stronie. Zwiększa zaangażowanie, zmniejsza wątpliwości.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Detail/Makro:</strong> Zbliżenia na znaczące detale produktu — tekstura, wykończenie, logo. Pokazuje jakość i staranność.</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Fotografia produktowa cennik 2025
                </h2>

                <p className="text-muted-foreground mb-6">
                  Cena fotografii produktowej zależy od typu sesji, liczby produktów, złożoności oświetlenia i stopnia retuszu. Oto przejrzysty cennik na 2026 rok:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted-foreground border border-border/30 rounded-lg overflow-hidden">
                    <thead className="bg-muted/50">
                      <tr className="border-b border-border/30">
                        <th className="px-4 py-3 text-left font-semibold">Typ sesji</th>
                        <th className="px-4 py-3 text-left font-semibold">Cena</th>
                        <th className="px-4 py-3 text-left font-semibold">Co zawiera</th>
                        <th className="px-4 py-3 text-left font-semibold">Kiedy stosować</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                      {pricingTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 font-semibold text-foreground">{row.typ}</td>
                          <td className="px-4 py-3 font-bold text-primary">{row.cena}</td>
                          <td className="px-4 py-3">{row.zawiera}</td>
                          <td className="px-4 py-3">{row.kiedy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground mb-6 p-4 bg-muted/30 rounded-lg border border-border/30">
                  <strong>Uwaga:</strong> Ceny obejmują retusz zdjęć (korekta kolorów, usuwanie imperfekcji, cieniowanie). Dodatkowe usługi (zmiany w postrzeganiu produktu, montaż elementów, specjalne efekty) mogą być wyceniane odrębnie.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Jak przygotować produkty do sesji?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Prawidłowe przygotowanie produktów przed sesją zdjęciową to klucz do najlepszych rezultatów. Oto praktyczne wskazówki:
                </p>

                <ol className="space-y-4 mb-6 text-muted-foreground list-decimal list-inside">
                  <li className="ml-2">
                    <strong>Czyszczenie produktu:</strong> Wszystkie produkty powinny być idealnie czyste — bez pyłu, odcisków palców, powinny być. Dla opakowań papierowych — wyrównaj zniszczenia. Dla elektroniki — wytrzyj ekrany i powierzchnie.
                  </li>
                  <li className="ml-2">
                    <strong>Opakowanie:</strong> Decyduj czy fotografować produkt w opakowaniu czy bez. Najczęściej robim obie wersje. Opakowanie musi być niewzruszone, bez uszkodzeń, nalepki prawidłowo wyrównane.
                  </li>
                  <li className="ml-2">
                    <strong>Zapachy i wilgoć:</strong> Dla produktów kosmetycznych — otwórz opakowania kilka godzin przed sesją aby ubyła wilgoć. Dla kosmetyków kremowych — rozgrzej je by były bardziej plastyczne do ukształtowania.
                  </li>
                  <li className="ml-2">
                    <strong>Druki i etykiety:</strong> Sprawdź czy druki i numery partii są widoczne i prawidłowe. Dla Amazonu i Allegro — upewnij się że kod kreskowy jest widoczny na zdjęciu (wymagane).
                  </li>
                  <li className="ml-2">
                    <strong>Akcesoria i elementy:</strong> Jeśli produkt ma przewodniki, baterie, wkładki — przygotuj je w osobnych pojemnikach. Fotografujemy je razem by pokazać "co dostaniesz w pudełku".
                  </li>
                  <li className="ml-2">
                    <strong>Próbki do testów:</strong> Jeśli to możliwe — przygotuj kilka sztuk tego samego produktu. Czasem w trakcie sesji inna sztuka okazuje się bardziej fotogenna (lepszy kolor, bezwad).
                  </li>
                  <li className="ml-2">
                    <strong>Lista produktów:</strong> Przygotuj listę produktów do sfotografowania z wymiarami, wagą, specjalnymi instrukcjami. To ułatwi zorganizowanie sesji i zapewni że nic się nie zapomni.
                  </li>
                </ol>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Sprzęt vs studio — co wybrać?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Wiele firm zastanawia się: czy robić zdjęcia samemu w domu, czy wynająć profesjonalne studio? Oto porównanie:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-muted-foreground border border-border/30 rounded-lg overflow-hidden">
                    <thead className="bg-muted/50">
                      <tr className="border-b border-border/30">
                        <th className="px-4 py-3 text-left font-semibold">Aspekt</th>
                        <th className="px-4 py-3 text-left font-semibold">DIY (dom)</th>
                        <th className="px-4 py-3 text-left font-semibold">Studio profesjonalne</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-semibold">Koszt sprzętu</td>
                        <td className="px-4 py-3">500-2000 zł (lampy, tło)</td>
                        <td className="px-4 py-3">Już opłacone w cenie sesji</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-semibold">Czas pracy</td>
                        <td className="px-4 py-3">10-20h na 20 zdjęć (początkujący)</td>
                        <td className="px-4 py-3">2-4h dla profesjonalisty</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-semibold">Jakość oświetlenia</td>
                        <td className="px-4 py-3">Średnia, trudne odbicia</td>
                        <td className="px-4 py-3">Profesjonalne, bez cieni</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-semibold">Tła dostępne</td>
                        <td className="px-4 py-3">1-2 (papier A4 tło)</td>
                        <td className="px-4 py-3">20+ (białe, szare, kolorowe)</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-semibold">Retusz</td>
                        <td className="px-4 py-3">Musisz robić sam (Photoshop)</td>
                        <td className="px-4 py-3">Profesjonalny retusz w cenie</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-semibold">Konsystencja</td>
                        <td className="px-4 py-3">Trudne — zmienne warunki</td>
                        <td className="px-4 py-3">Identyczne dla wszystkich produktów</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-semibold">Konwersja na stronie</td>
                        <td className="px-4 py-3">Średnia (2-3% CTR)</td>
                        <td className="px-4 py-3">Wysoka (5-8% CTR)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground mb-6 p-4 bg-muted/30 rounded-lg border border-border/30">
                  <strong>Wnioski:</strong> Dla kilku produktów (1-10 sztuk) DIY może się opłacić. Dla kolekcji (10+ produktów) profesjonalne studio zwraca się poprzez wyższą konwersję. Profesjonalna fotografia wpływa na postrzeganie marki i zaufania kupujących.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Fotografia produktowa dla e-commerce
                </h2>

                <p className="text-muted-foreground mb-6">
                  <strong>Jakość zdjęć produktów bezpośrednio wpływa na sprzedaż online.</strong> W e-commerce klient nie może wziąć produktu do ręki, nie może go wypróbować — może tylko przejrzeć zdjęcia. Dlatego fotografia staje się najważniejszym narzędziem marketingu.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Wpływ fotografii na konwersję:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>+40-70% wzrost sprzedaży:</strong> Produkty z profesjonalnymi zdjęciami sprzedają się zdecydowanie lepiej</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>-30% zwroty:</strong> Lepsze zdjęcia to mniejsza liczba zwrotów (klienci wiedzą co dostanią)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>+15% wyższa średnia wartość zamówienia:</strong> Customers feel more confident in premium products with good photos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Lepszy ranking w wyszukiwarce:</strong> Amazon, Allegro faworyzują produkty z wieloma zdjęciami</span>
                  </li>
                </ul>

                <h3 className="text-xl font-heading font-bold mt-8 mb-4">
                  Wymagania platformy e-commerce:
                </h3>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Amazon:</strong> Białe tło (RGB 255,255,255), główne zdjęcie kwadratowe (1:1), minimum 1000px, minimum 6 zdjęć</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Allegro:</strong> Dowolne tło (rekomendacja: jasne), zdjęcia prostokątne, minimum 400px, minimum 4 zdjęcia (ideał 10+)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Shopify:</strong> Dowolny rozmiar, rekomendacja 1200x1200px, 360° widok wspierany</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Instagram:</strong> Kwadrat 1080x1080px, prostokąt 1080x1350px, seria zdjęć z różnymi kątami</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Jak wybrać fotografa produktowego?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Wybór profesjonalnego fotografa produktowego to inwestycja. Oto 5 kryteriów do oceny:
                </p>

                <ol className="space-y-4 mb-6 text-muted-foreground list-decimal list-inside">
                  <li className="ml-2">
                    <strong>Portfolio zgodne z Twoją branżą:</strong> Sprawdź czy fotograf ma doświadczenie z Twoim typem produktów. Zdjęcia biżuterii wymagają innego podejścia niż kosmetyki czy elektronika. Portfolio powinno pokazywać pełny range prac — różne produkty, tła, stylizacje.
                  </li>
                  <li className="ml-2">
                    <strong>Doświadczenie z e-commerce:</strong> Pytaj czy fotograf zna wymagania Amazonu, Allegro, Shopify. Czy umie przygotować zdjęcia w odpowiednich rozmiarach? Czy wie co to white background compliance?
                  </li>
                  <li className="ml-2">
                    <strong>Narzędzia i sprzęt:</strong> Profesjonalny fotograf powinien mieć aparat mirrorless/DSLR, profesjonalne oświetlenie LED (nie zwykłe żarówki), cykloramy, obracającą się platformę. Pytaj co ma w studio.
                  </li>
                  <li className="ml-2">
                    <strong>Przetarg i przejrzysty cennik:</strong> Dobry fotograf powinien mieć jasny cennik, nie tworzy go "na pytanie". Sprawdź czy cena zawiera retusz, ile czasu trwa sesja, jakie dostaniesz formaty. Unikaj fotografów bez ceny — mogą mieć ukryte opłaty.
                  </li>
                  <li className="ml-2">
                    <strong>Opinie i referencje:</strong> Poproś 2-3 referencje od poprzednich klientów. Pytaj o czas dostarczenia zdjęć, jakość retuszu, czy fotograf reaguje na uwagi. Google Reviews, Trustpilot to dobre źródła opinii.
                  </li>
                </ol>

                {/* FAQ Section */}
                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Najczęściej zadawane pytania
                </h2>

                <div className="space-y-4 mb-12">
                  <Accordion type="single" collapsible>
                    {faqItems.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/30 transition-colors">
                        <AccordionTrigger className="py-4 hover:no-underline">
                          <span className="text-left font-semibold">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-8 md:p-12 rounded-2xl bg-slate-900 border border-primary/20 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Chcesz zwiększyć sprzedaż poprzez lepsze zdjęcia?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Profesjonalna fotografia produktowa to inwestycja, która zwraca się wielokrotnie poprzez wzrost konwersji. Sprawdź nasze usługi fotografii produktowej i skontaktuj się z nami po wycenę.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053]">
                    <Link to="/uslugi/fotografia-produktowa">Sprawdź usługę</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/kontakt">Bezpłatna wycena</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Related Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-8 bg-muted/30 rounded-2xl"
              >
                <h3 className="text-xl font-heading font-bold mb-4">Powiązane artykuły i usługi</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/uslugi/fotografia-produktowa" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Fotografia produktowa</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Profesjonalne zdjęcia dla e-commerce</p>
                  </Link>
                  <Link to="/blog" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Blog FOTZ</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Artykuły o fotografii i e-commerce</p>
                  </Link>
                  <Link to="/kontakt" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Wycena sesji</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Indywidualna wycena dla Ciebie</p>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
}
