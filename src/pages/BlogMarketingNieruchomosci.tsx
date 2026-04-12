import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Camera, TrendingUp } from "lucide-react";

const faqItems = [
  {
    question: "Ile kosztuje reklama nieruchomości na Google Ads?",
    answer: "Google Ads dla nieruchomości zwykle kosztuje 15-50 zł za klik (CPC), zależnie od lokalizacji i konkurencji. Budżet startowy to 2000-5000 zł/miesiąc. Średni koszt zdobycia liśmy kontaktu to 100-300 zł. Lokalnych rynków mniejszych miast są tańsze (15-25 zł CPC), podczas gdy duże miasta jak Warszawa to 30-50 zł."
  },
  {
    question: "Czy wirtualne wycieczki (virtual tours) faktycznie zwiększają sprzedaż?",
    answer: "Tak — nieruchomości z wirtualnymi wycieczkami mają 2-3x więcej zapytań. Klienci chcą zobaczyć całe mieszkanie przed wizytą. Virtual tour redukuje niepotrzebne wizyty, oszczędzając czas pośrednika. Koszt: 200-500 zł za nieruchomość. ROI zwykle zwraca się w 2-3 sprzedanych ofertach."
  },
  {
    question: "Które media społeczne działają najlepiej dla biur nieruchomości?",
    answer: "Instagram i Facebook dominują w nieruchomościach. Instagram dla mlodszych kupujących (fotografia, reel'e), Facebook dla starszych (oferty, dyskusje). LinkedIn jest niedoceniany dla B2B (sprzedaż biur, nieruchomości komercyjne). TikTok robi się coraz popularny. Średnia konwersja: Facebook/Instagram 0,5-1%, LinkedIn 2-3%."
  },
  {
    question: "Jakie słowa kluczowe mają największy potencjał dla biura nieruchomości?",
    answer: "Słowa lokalne mają najwyżej konwersję: 'mieszkanie na sprzedaż Warszawa', 'dom do wynajęcia Kraków', 'biuro do wynajęcia [miasto]'. Szacunkowe wolumeny to 300-1000 wyszukiwań/miesiąc dla większych miast. Long-tail: 'dwupokojowe mieszkanie na sprzedaż w Piaseczkach blisko metra' ma mniej trafficu ale wyższą konwersję."
  },
  {
    question: "Jak SEO dla biura nieruchomości różni się od innego biznesu?",
    answer: "SEO nieruchomości jest 80% lokalne. Musisz rankować dla 'nieruchomości [miasto]', a następnie dla konkretnych dzielnic/osiedli. Google Moja Firma (GMB) jest kluczowe — musi być w pełni uzupełnione. Backlinki z portali nieruchomości (Otodom, Gratka, Morizon) liczą się więcej. Treści muszą być bardzo lokalne i specyficzne."
  },
  {
    question: "Czy email marketing działa dla biur nieruchomości?",
    answer: "Tak — email marketing ma najwyższą ROI w nieruchomościach. Osoba, która przejrzała 3+ ofert, ma 30-50% szansę na zakup w ciągu 6 miesięcy. Regular newsletter z nowymi ofertami uderzającymi w kryteria (lokalizacja, cena, typ) ma 2-3% konwersję. Koszt: znikomy (Mailchimp free do 500 kontaktów), zarabianie: 5000-50000 zł/deal."
  },
  {
    question: "Czy portal Otodom/Gratka to wystarczająca strategia marketingowa?",
    answer: "Nie. Portale nieruchomości to konieczność, nie strategia. Są tam miliony ofert — łatwo się zgubić. Musisz wyróżniać się fotografią, opisem, virtual tour, atakami na Google Ads i social media. Biura, które polegają TYLKO na portalach, tracą 30-40% potencjalnego biznesu na konkurencję."
  },
  {
    question: "Jak zmierzyć efektywność marketingu nieruchomości?",
    answer: "KPIs: ile zapytań/aplikacji na miesiąc, ile się przelewa na wizyty, ile wizyt przelewa się na oferty. Śledź CPL (koszt liśmy), CPA (koszt per aplikację), conversion rate na każdym etapie. UTM na wszystkich linkach. Powinna być 7-10% konwersja z zapytania do sprzedaży. Jeśli mniej — poprawiaj fotografie, opisy, funnel."
  }
];

const marketingChannels = [
  { channel: "Google Ads (lokalne SEM)", cost: "15-50 zł/klik", reach: "1000-5000 zapytań/mies", conversion: "5-10%" },
  { channel: "Facebook/Instagram Ads", cost: "0,5-2 zł/klik", reach: "10000-50000 wyświetleń", conversion: "0,5-2%" },
  { channel: "Portal Otodom/Gratka", cost: "0-150 zł/oferta", reach: "100000+ potencjalni kupujący", conversion: "2-5%" },
  { channel: "SEO lokalne", cost: "2000-5000 zł/mies", reach: "Organiczny, rosnący", conversion: "8-15%" },
  { channel: "Virtual tours + Video", cost: "200-500 zł/oferta", reach: "2-3x więcej zapytań", conversion: "+2-3x" },
  { channel: "Email do bazy klientów", cost: "0-50 zł/mies", reach: "Zależnie od listy", conversion: "2-5%" }
];

const BlogMarketingNieruchomosci = () => {
  return (
    <>
      <SEOHead
        title="Marketing nieruchomości - jak skutecznie reklamować oferty? 2025"
        description="Kompletny przewodnik marketingu nieruchomości. Strategie dla biur, fotografia, video, SEO, social media, Google Ads. Jak zdobywać kupujących i zwiększać sprzedaż."
        ogType="article"
        canonical="https://fotz.pl/blog/marketing-nieruchomosci"
        keywords="marketing nieruchomości, reklama nieruchomości, promocja oferty, biuro nieruchomości marketing, SEO nieruchomości"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Marketing nieruchomości: kompletny przewodnik 2025",
            "description": "Jak skutecznie reklamować nieruchomości i zdobywać kupujących",
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
            "datePublished": "2025-04-12",
            "dateModified": "2025-04-12"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fotz.pl" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fotz.pl/blog" },
              { "@type": "ListItem", "position": 3, "name": "Marketing nieruchomości" }
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
              <span className="text-white">Marketing nieruchomości</span>
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
                  Marketing i Nieruchomości
                </span>

                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Marketing nieruchomości: kompletny przewodnik 2025
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół FOTZ
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    12 kwietnia 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    18 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2015"
                    alt="Marketing nieruchomości - strategia sprzedaży"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none text-gray-300">
                <p className="text-xl text-gray-400 mb-8">
                  Marketing nieruchomości różni się od innych branż. Klienci szukają domów, mieszkań i biur emocjonalnie, ale decydują się racjonalnie. Muszą znaleźć Cię w Google, zobaczyć zdjęcia, przeczytać opis, zaufać Tobie — a potem zrobić najważniejszą decyzję finansową w życiu. W tym przewodniku poznasz, jak budować strategię marketingu nieruchomości, jakie kanały działają najlepiej, i jak zwiększać sprzedaż w 2025 roku.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Dlaczego marketing nieruchomości jest specjalny?
                </h2>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Nieruchomość nie jest produktem — to emocja.</strong> Ludzie szukają idealnego domu dla rodziny, inwestycji, nowego startu. Musisz pozwolić im wyobrażać sobie życie tam. To jest twoja siła w marketingu.
                </p>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Statystyki tego sektora:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li>• 92% kupujących zaczyna poszukiwanie nieruchomości online (portale, Google)</li>
                  <li>• Przeciętny kupujący przegląda 10-15 ofert zanim zgłosi się do biura</li>
                  <li>• Fotografia i video są decydujące — 78% odrzuca ofertę po złych zdjęciach</li>
                  <li>• Biura z virtual tour'ami mają 3x więcej zapytań</li>
                  <li>• Email marketing w nieruchomościach ma 2-5% konwersję (najwyższą spośród branż)</li>
                  <li>• Lokalny SEO dla biura to 40-60% nowych leadów</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Kanały marketingowe dla biur nieruchomości
                </h2>

                <p className="text-gray-300 mb-8">
                  Nie wszystkie kanały działają równie dobrze dla nieruchomości. Poniżej ranking najbardziej efektywnych:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-700">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="border border-gray-700 px-4 py-3 text-left text-yellow-400 font-bold">Kanał</th>
                        <th className="border border-gray-700 px-4 py-3 text-left text-yellow-400 font-bold">Koszt</th>
                        <th className="border border-gray-700 px-4 py-3 text-left text-yellow-400 font-bold">Zasięg</th>
                        <th className="border border-gray-700 px-4 py-3 text-left text-yellow-400 font-bold">Konwersja</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketingChannels.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-850"}>
                          <td className="border border-gray-700 px-4 py-3 text-gray-300">{row.channel}</td>
                          <td className="border border-gray-700 px-4 py-3 text-gray-300">{row.cost}</td>
                          <td className="border border-gray-700 px-4 py-3 text-gray-300">{row.reach}</td>
                          <td className="border border-gray-700 px-4 py-3 text-yellow-400 font-semibold">{row.conversion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Fotografia i wideo nieruchomości — fundamentem sukcesu
                </h2>

                <p className="text-gray-300 mb-6">
                  Zła fotografia to kamera na smartfonie. Dobra fotografia to zawód. W nieruchomościach fotografia i wideo to 70-80% decyzji kupującego.
                </p>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Dlaczego ważna jest jakość?</strong>
                </p>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li>• Nieruchomości ze zdjęciami profesjonalnymi mają 2-3x więcej zapytań</li>
                  <li>• 45% kupujących nie sprawdzi oferty, jeśli zdjęcia są słabe</li>
                  <li>• Virtual tour zmienia 2-3 wizyty na 0,5-1 wizytę (oszczędzasz czas)</li>
                  <li>• Video listings mają wyższą cenę sprzedaży (ludzie widzą wartość)</li>
                  <li>• Drony i zdjęcia z perspektywy zwiększają konwersję o 40%</li>
                </ul>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Cennik fotografii nieruchomości (2025):</strong>
                </p>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li>• Fotografia standardowa: 300-500 zł (30-50 zdjęć, obróbka)</li>
                  <li>• Fotografia premium (HDR, drony): 500-1000 zł</li>
                  <li>• Virtual tour 360°: 200-400 zł</li>
                  <li>• Wideo walkthrough: 300-600 zł (3-5 min)</li>
                  <li>• Pakiet kompleks (foto + video + tour): 1000-2000 zł</li>
                </ul>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">ROI:</strong> 1 sprzedana nieruchomość = marża 5000-50000 zł. Koszt fotografii się zwraca w 1-2 ofertach. Brak profesjonalnych zdjęć to strata potencjalnego przychodu.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  SEO dla biura nieruchomości — lokalne i długoterminowe
                </h2>

                <p className="text-gray-300 mb-6">
                  SEO nieruchomości to głównie SEO lokalne. Ludzie szukają: kupimy mieszkanie [miasto], biuro do wynajęcia [dzielnica], dom na sprzedaż [region].
                </p>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Najpotężniejsze strategie SEO:</strong>
                </p>

                <ol className="space-y-4 mb-6 text-gray-300 list-decimal list-inside">
                  <li>
                    <strong className="text-white">Google Moja Firma (GMB):</strong> To kluczowe. Uzupełnij 100%: zdjęcia biura, portfolio ofert, recenzje, godziny. 40-50% leadów pochodzi z GMB dla biur nieruchomości.
                  </li>
                  <li>
                    <strong className="text-white">Lokalne słowa kluczowe:</strong> Pisz artykuły o dzielnicach, inwestycjach w konkretnych lokalizacjach. Każdy dzielnica/osiedle = osobna strona (co wymaga struktury).
                  </li>
                  <li>
                    <strong className="text-white">Backlinki z portali nieruchomości:</strong> Link z Otodom, Gratka, Morizon to silny sygnał dla Google. Zawsze linkuj swoją stronę w opisach ofert.
                  </li>
                  <li>
                    <strong className="text-white">Treści o trenach, szkołach, infrastrukturze:</strong> Ludzie kupują nie nieruchomość, ale lokalizację. Artykuł o szkołach w Piaseczkach = potencjalny nabywca.
                  </li>
                  <li>
                    <strong className="text-white">Schema.org markup:</strong> Oznacz oferty schematem RealEstateProperty. Google pokazuje więcej szczegółów w wyniku.
                  </li>
                </ol>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Social media dla pośrednika nieruchomości
                </h2>

                <p className="text-gray-300 mb-6">
                  Social media to playground dla nieruchomości. Wizualne, dynamiczne, angażujące. Ale wymaga systemowego podejścia.
                </p>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Instagram dla nieruchomości:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li>• Reels z quicktourem mieszkania (15-30 sek) — najwyższa reach</li>
                  <li>• Carousel posts z 5-8 najlepszymi zdjęciami oferty</li>
                  <li>• Stories z behind-the-scenes (waszą pracę, procesy), Q&A</li>
                  <li>• Highlights: kategorie (Inwestycje, Mieszkania, Biura, Porady)</li>
                  <li>• Hashtagi lokalne + branżowe (#nieruchomościWarszawa, #kupnęMieszkanko, #real estate)</li>
                  <li>• Konten edukacyjny: porady do kupowania, inwestycji, podatków</li>
                </ul>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">Facebook dla nieruchomości:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-gray-300">
                  <li>• Katalogi ofert (Facebook Product Catalog — ludzie przeglądają tu oferty)</li>
                  <li>• Grupy lokalne — będziesz liderem opinii (Kupuję/sprzedaję mieszkanie [miasto])</li>
                  <li>• Reklamy na podstawie pixela: retargeting osób, które przeglądały Twoją stronę</li>
                  <li>• Live video — wirtualny spacer po mieszkaniu w live (najwyższa konwersja)</li>
                  <li>• Testimoniale od zadowolonych klientów (video, tekst, zdjęcia)</li>
                </ul>

                <p className="text-gray-300 mb-6">
                  <strong className="text-white">LinkedIn dla komercji:</strong> Jeśli sprzedajesz biura, lokale komercyjne — LinkedIn to kopuła złota. B2B inwestorzy, CEO, właściciele biznesu są tutaj.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  FAQ — Najczęściej pytane o marketing nieruchomości
                </h2>

                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg px-6 bg-gray-800">
                      <AccordionTrigger className="text-white hover:text-yellow-400">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pt-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">
                  Podsumowanie: 5 rzeczy, które musisz robić dzisiaj
                </h2>

                <ol className="space-y-4 mb-8 text-gray-300 list-decimal list-inside">
                  <li><strong className="text-white">Profesjonalna fotografia nieruchomości.</strong> To pierwszy krok. Bez niej, szum na portalach to wszystko. Budżet: 300-500 zł/oferta. ROI: 1 dodatkowa sprzedaż</li>
                  <li><strong className="text-white">Virtual tour 360° lub video.</strong> Zmień zachowanie klienta. Mniej wizyt w biurze, więcej gotowych do kupna. Koszt: 200-400 zł. Efekt: +2-3x zapytań</li>
                  <li><strong className="text-white">Uzupełnij 100% Google Moja Firma.</strong> To darmowy, potężny kanał. 40-50% leadów dla biur pochodzi stąd. Czas: 1-2 godziny</li>
                  <li><strong className="text-white">Buduj bazę email ze swoimi leadami.</strong> Email marketing w nieruchomościach ma najwyższą ROI. Regularny newsletter o nowych ofertach = 2-5% konwersja</li>
                  <li><strong className="text-white">Zainwestuj w social media + Google Ads.</strong> Portale nieruchomości to konieczność, ale tam jesteś jeden z milionów. Własne kanały (Instagram, Facebook, Google Ads) to gdzie zdobywasz przewagę konkurencyjną</li>
                </ol>

                <p className="text-gray-300 mb-6">
                  Marketing nieruchomości w 2025 to połączenie tradycji (zaufanie, kontakt osobisty) z nowoczesnością (fotografia, social media, SEO, AI-powered chatboty). Biura, które łączą oba podejścia, dominują rynek.
                </p>

                <p className="text-gray-400 italic">
                  Chcesz skalować marketing Twojego biura nieruchomości? FOTZ ma doświadczenie z biurami od Gdańska do Krakowa. Zaplanujemy strategię, obsługimy kanały, zdobędziemy Ci leadów. Zaplanuj konsultację poniżej.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gray-800 py-16 border-t border-gray-700">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Zwiększ sprzedaż dzisiaj
            </h2>
            <p className="text-gray-300 mb-8">
              Marketing nieruchomości wymaga precyzji. Pozwól nam zaplanować strategię dla Twojego biura — fotografia, SEO, social media, Google Ads.
            </p>
            <Link to="/kontakt" className="inline-block">
              <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-bold">
                Zaplanuj konsultację
              </Button>
            </Link>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
};

export default BlogMarketingNieruchomosci;
