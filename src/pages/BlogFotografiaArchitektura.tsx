import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Building2, Lightbulb, TrendingUp } from "lucide-react";

const faqItems = [
  {
    question: "Jaka jest różnica między fotografią architektury a fotografią wnętrz?",
    answer: "Fotografia architektury skupia się na elewacjach, fasadach, budynkach i ich geometrii — pokazuje projekt, proporcje i piękno konstrukcji. Fotografia wnętrz to zdjęcia pomieszczeń wewnątrz — salonów, biur, hoteli — ze skupieniem na funkcjonalności i aranżacji. Fotografia architektury jest bardziej artystyczna, wnętrza bardziej praktyczne. Obie wymagają profesjonalnego sprzętu i znajomości oświetlenia."
  },
  {
    question: "Ile kosztuje profesjonalna sesja fotografii architektonicznej?",
    answer: "Cena zależy od zakresu projektu. Elewacja budynku: 2000-4000 zł. Fotografia wnętrz komercyjnych (biuro, hotel): 3000-7000 zł. Wirtualny spacer 360°: 5000-15000 zł. Cena obejmuje wyjazd fotografa, pracę na miejscu, retusz zdjęć i dostarczenie w wielu formatach. Większe projekty i pakiety wyceniane są indywidualnie."
  },
  {
    question: "Kiedy robić zdjęcia architektury — w dzień czy w nocy?",
    answer: "Idealne są dwa czasy — złota godzina (świt lub zachód słońca) i zmrok (kiedy światła budynku są włączone). W dzień możesz robić zdjęcia przy słonecznej pogodzie, ale twarde cienie mogą być problematyczne. W nocy światła budynku oraz oświetlenie uliczne tworzą dramatyczne efekty. Najlepsze rezultaty to kombinacja zdjęć z różnych pór dnia."
  },
  {
    question: "Czy potrzebuję drona do fotografii architektonicznej?",
    answer: "Nie zawsze. Dron jest przydatny dla dużych kompleksów, budynków wielokondygnacyjnych i widoków z lotu ptaka. Dla wnętrz drony są niepraktyczne. Większość fotografii architektonicznej robi się z poziomu gruntu lub z niewielkiej wysokości. Drony dodają wartości, ale nie są obowiązkowe — zależy od projektu."
  },
  {
    question: "Jak długo trwa przetworzenie zdjęć architektonicznego?",
    answer: "Sesja fotograficzna na miejscu zwykle trwa 3-8 godzin w zależności od zakresu (jedna elewacja czy cały budynek). Przetworzenie zdjęć zajmuje 7-14 dni roboczych — retusz, korekta perspektywy, korekcja kolorów, montaż panoram. Срочne dostarczenie jest możliwe (2-3 dni), ale wiąże się z dodatkową opłatą."
  },
  {
    question: "Czy mogę używać profesjonalne zdjęcia architektury do marketingu?",
    answer: "Tak. Zdjęcia architektonicznego są doskonałe do: portfolio architektów, katalogów nieruchomości, stron internetowych biur deweloperskich, ogłoszeń sprzedażowych, materiałów marketingowych hoteli i restauracji, broszur turyści. Zawsze upewnij się, że masz prawa użytkowania i że fotograf złożył warunki licencji."
  },
  {
    question: "Jakie ustawienia kamery do fotografii architektonicznej?",
    answer: "Użyj szerokokątnych obiektywów (14-35mm). Przysłonę f/8-f/16 dla dużej głębi ostrości. ISO ustaw tak, by nie pogorszyć jakość (zwykle 100-800). Czułość zależy od oświetlenia. Użyj statywu — fotografia architektoniczna wymaga ostrości i stabilności. RAW format jest obowiązkowy dla profesjonalnego retuszu. Wyłącz korekcję perspektywy w aparacie (robisz to w post-processingu)."
  },
  {
    question: "Czy wirtualny spacer 360° jest wart inwestycji?",
    answer: "Tak, dla nieruchomości premium, hoteli, restauracji czy biur. Potencjalny kupujący lub wynajmujący może przemieszczać się po wnętrzu ze swojego domu — zmniejsza to liczbę jałowych wizyt. Droższy niż tradycyjne zdjęcia, ale ROI jest wysoki (lepsze konwersje, wyższa cena sprzedaży). Dla budynków komercyjnych spacer 360° wyróżnia ofertę na rynku."
  }
];

const architectureTable = [
  {
    typ: "Fotografia elewacji",
    zastosowanie: "Fasada budynku, front kampusu, centrum handlowego",
    czasSesji: "2-3 godziny",
    cenaOrientacyjna: "2000-3500 zł"
  },
  {
    typ: "Wnętrza komercyjne",
    zastosowanie: "Biuro, hotel, restauracja, salon, gabinet",
    czasSesji: "3-5 godzin",
    cenaOrientacyjna: "3000-6000 zł"
  },
  {
    typ: "Wnętrza mieszkalne",
    zastosowanie: "Apartament do sprzedaży, dom luksusowy, projektant wnętrz",
    czasSesji: "2-4 godziny",
    cenaOrientacyjna: "2500-5000 zł"
  },
  {
    typ: "Fotografia hotelowa",
    zastosowanie: "Pokoje, lobby, sale konferencyjne, spa, restauracja hotelu",
    czasSesji: "4-8 godzin",
    cenaOrientacyjna: "4000-8000 zł"
  },
  {
    typ: "Dla biur nieruchomości",
    zastosowanie: "Portfolio nieruchomości, zdjęcia ofert sprzedażowych",
    czasSesji: "3-6 godzin",
    cenaOrientacyjna: "3500-6500 zł"
  },
  {
    typ: "Wirtualny spacer 360°",
    zastosowanie: "Nieruchomość premium, hotel, biuro, muzeum, deweloper",
    czasSesji: "3-6 godzin",
    cenaOrientacyjna: "5000-15000 zł"
  }
];

export default function BlogFotografiaArchitektura() {
  return (
    <>
      <SEOHead
        title="Fotografia architektury i wnętrz - jak wykonać profesjonalne zdjęcia? 2025"
        description="Kompletny poradnik fotografii architektonicznej i wnętrz: typy sesji, ceny, sprzęt, techniki, kiedy wynająć profesjonalistę. Dowiedz się, jak wybór fotografa wpływa na sprzedaż nieruchomości."
        ogType="article"
        canonical="https://fotz.pl/blog/fotografia-architektury-wnetrz"
        keywords="fotografia architektury, fotografia wnętrz, fotografia nieruchomości, wirtualny spacer 360, fotografia hotelowa, cena sesji architektonicznej"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Fotografia architektury i wnętrz - jak wykonać profesjonalne zdjęcia? 2025",
            "description": "Kompletny poradnik fotografii architektonicznej i wnętrz — typy sesji, ceny, sprzęt, techniki oświetlenia, wpływ na sprzedaż nieruchomości",
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
              { "@type": "ListItem", "position": 3, "name": "Fotografia architektury i wnętrz" }
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
        <section className="pt-32 pb-4 bg-gray-900">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-200">Fotografia architektury i wnętrz</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>

                <span className="inline-block text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
                  Fotografia architektoniczna
                </span>

                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Fotografia architektury i wnętrz — jak wykonać profesjonalne zdjęcia? 2025
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
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
                    14 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2015"
                    alt="Profesjonalna fotografia architektury budynku"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-4 gap-4 mb-12 p-8 rounded-2xl bg-gradient-to-br from-gray-800 via-yellow-900 to-orange-900">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">Od 2000 zł</div>
                  <div className="text-sm text-gray-300">Sesja elewacji</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">2-8h</div>
                  <div className="text-sm text-gray-300">Czas sesji</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">Retusz profesjonalny</div>
                  <div className="text-sm text-gray-300">Zawsze w cenie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">360° spacer</div>
                  <div className="text-sm text-gray-300">Dostępny</div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p className="lead text-xl text-gray-300 mb-8">
                  Fotografia architektury i wnętrz to sztuka uchwycenia piękna projektowanej przestrzeni. Wysokiej jakości zdjęcia architektonicznego to inwestycja, która wpływa na sprzedaż nieruchomości, buduje wizerunek architekta, przyciąga gości do hoteli i restauracji. W tym kompletnym poradniku poznasz wszystkie aspekty fotografii architektonicznej: od rodzajów sesji, przez ceny, sprzęt i techniki oświetlenia, aż do tego, kiedy warto wynająć profesjonalistę.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Czym jest fotografia architektoniczna i fotografii wnętrz?
                </h2>

                <p className="text-gray-300 mb-6">
                  <strong>Fotografia architektoniczna to specjalistyczna gałąź fotografii komercyjnej polegająca na fotografowaniu budynków, fasad, wnętrz i projektów architektonicznych w celu dokumentacji, marketingu lub artystycznego wyrazu.</strong> Celem jest pokazanie piękna i funkcjonalności przestrzeni — by zainteresować potencjalnych kupujących, inwestorów, turystów lub obsługę mediów.
                </p>

                <p className="text-gray-300 mb-6">
                  Fotografia architektury jest o wiele bardziej techniczna niż inne rodzaje fotografii. Wymaga znajomości perspektywy, oświetlenia naturalnego i sztucznego, kompozycji oraz umiejętności pracy z szerokokątnymi obiektywami. Zdjęcia architektoniczne muszą być ostre, jasne i pokazywać dokładne proporcje budynku lub wnętrza.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">
                  Główne rodzaje fotografii architektonicznej:
                </h3>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Fotografia elewacji:</strong> Zewnętrzne fasady budynków — pokazanie geometrii, materiałów i piękna architektury. Najczęściej robione w złotej godzinie dla dramatycznego oświetlenia.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Fotografia wnętrz komercyjnych:</strong> Biura, hotele, restauracje, salony — pokazanie funkcjonalności, aranżacji i atmosfery. Wymaga balansu między światłem naturalnym a sztucznym.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Fotografia wnętrz mieszkalnych:</strong> Apartamenty i domy na sprzedaż — pokazanie potencjału inwestycyjnego i komfortu zamieszkania. Kluczowe są stonowane kolory i oświetlenie.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Wirtualny spacer 360°:</strong> Seria panoramicznych zdjęć wnętrza umożliwiająca klientowi przemieszczanie się po pomieszczeniu online — dostępne na stronach nieruchomości.</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Rodzaje fotografii architektonicznej — tabela porównawcza
                </h2>

                <p className="text-gray-300 mb-6">
                  Poniżej porównanie poszczególnych typów sesji fotografii architektonicznej z czasem realizacji i cenami orientacyjnymi na 2026 rok:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                      <tr className="border-b border-gray-700">
                        <th className="px-4 py-3 text-left font-semibold">Typ</th>
                        <th className="px-4 py-3 text-left font-semibold">Zastosowanie</th>
                        <th className="px-4 py-3 text-left font-semibold">Czas sesji</th>
                        <th className="px-4 py-3 text-left font-semibold">Cena orientacyjna</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {architectureTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3 font-semibold text-yellow-400">{row.typ}</td>
                          <td className="px-4 py-3">{row.zastosowanie}</td>
                          <td className="px-4 py-3">{row.czasSesji}</td>
                          <td className="px-4 py-3 font-bold">{row.cenaOrientacyjna}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-300 mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <strong>Uwaga:</strong> Ceny obejmują sesję fotograficzną, retusz zdjęć (korekta perspektywy, korekcja kolorów, kalibracja oświetlenia) i dostarczenie w wielu formatach (JPG, PNG, WebP, RAW). Dodatkowe usługi (droning, moreishing, obróbka HDR) wyceniane są odrębnie.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Sprzęt i techniki — profesjonalne wskazówki
                </h2>

                <p className="text-gray-300 mb-6">
                  Profesjonalna fotografia architektoniczna wymaga odpowiedniego sprzętu i technik. Oto praktyczne wskazówki dla fotografów i klientów:
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">
                  Sprzęt fotograficzny:
                </h3>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Aparat:</strong> Pełnoklatkowy (Canon 5D Mark IV, Sony A7III) lub bezlusterkowy. Rozdzielczość minimum 24MP dla ostrości i możliwości przycięcia.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Obiektywy:</strong> Szerokokątne 14-35mm dla fasad, 24-70mm dla wnętrz. Tilt-shift 24mm dla korekcji perspektywy bezpośrednio w aparacie (drogo, ale oszczędza retusz).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Statyw:</strong> Solidny, stabilny — bez niego niemożliwa jest ostra fotografia. Głowica kulistkowa dla precyzyjnych ustawień.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Filtry:</strong> Polaryzacyjny do redukcji odbić w oknach, neutralny gęsty (ND) do przedłużenia czasu ekspozycji, gradienty do wyrównania nieba.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Reflektor/diffuser:</strong> Do kontroli oświetlenia wnętrz — odbicie światła naturalnego, zmniejszenie kontrastu.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">
                  Techniki oświetlenia:
                </h3>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Świetlenie naturalne:</strong> Najlepsze — złota godzina (świt/zachód) dla fasad. W wnętrzach otwarte żaluzje dla światła dyfuzyjnego bez twardych cieni.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Łączenie światła:</strong> Naturalne + sztuczne — światła wnętrza włączone o zmierzchu dla dramatyzmu. Fotografia HDR — kilka ekspozycji połączonych w post-processingu.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Lampy LED:</strong> Przenośne panele do oświetlania ciemnych narożników wnętrza. Temperatura barwowa regulowana (2700K-5600K).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Ustawienia kamery:</strong> Apertura f/8-f/16 dla głębi ostrości. ISO minimalnie (100-400). RAW format obowiązkowy. Wysoka prędkość otwarcia migawki dla statywu — 2-4 sekundy.</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Kiedy zlecić profesjonalistę? — ROI i korzyści biznesowe
                </h2>

                <p className="text-gray-300 mb-6">
                  Fotografia architektoniczna ma wymierny wpływ na biznes. Oto gdzie się zwraca:
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">
                  Sprzedaż nieruchomości:
                </h3>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>+25-40% wyższa cena sprzedaży:</strong> Nieruchomości z profesjonalnymi zdjęciami sprzedają się za wyższą cenę — kupujący postrzegają wyższą wartość.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>-60% krótszy czas sprzedaży:</strong> Dobre zdjęcia przyciągają więcej potencjalnych kupujących, przyspieszając zamknięcie transakcji.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Wirtualne spacery 360°:</strong> Zmniejszają liczbę jałowych wizyt — kupujący może zobaczyć całe wnętrze online zanim umówi się na obejrzenie.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">
                  Hotele i restauracje:
                </h3>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>+30% wyższa obsadzenie pokoi:</strong> Gość widzi profesjonalne zdjęcia pokoju zanim zarezerwuje — wyższe oczekiwania, wyższa satysfakcja.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Portfolio dla mediów:</strong> Zdjęcia architektonicznego przyciągają redakcje turystyczne, magazyny projektowe — darmowa reklama.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">
                  Architekci i projektanci:
                </h3>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Portfolio do nagradzania:</strong> Zdjęcia architektonicznego mogą wygrać nagrody w konkursach projektowych — prestiż i dodatkowe kontrakty.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong>Marketing nowych projektów:</strong> Zdolność pokazania wizji klienta przed budową — wysokiej jakości wizualizacje przyciągają więcej inwestorów.</span>
                  </li>
                </ul>

                <p className="text-gray-300 mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <strong>Wnioski:</strong> Profesjonalna fotografia architektoniczna zwraca się przez wyższą wartość sprzedaży, przyciągnięcie kupujących/gości i budowanie wizeunku eksperta. Inwestycja 5000 zł w sesję fotograficzną może zwiększyć cenę sprzedaży nieruchomości o 50000+ zł.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Najczęściej zadawane pytania — FAQ
                </h2>

                <div className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border-gray-700">
                        <AccordionTrigger className="text-left font-semibold text-gray-200 hover:text-yellow-400 transition-colors py-4">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

              </div>

            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Gotów do profesjonalnej fotografii architektonicznej?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Zespół FOTZ specjalizuje się w fotografii architektury i wnętrz. Oferujemy sesje fotograficzne, retusz profesjonalny, wirtualne spacery 360° oraz doradztwo w zakresie marketingu nieruchomości.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                  Umów sesję fotograficzną
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-700">
                  Dowiedz się więcej
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
}
