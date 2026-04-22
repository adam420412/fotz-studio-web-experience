import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, TrendingUp, Star, CheckCircle2 } from "lucide-react";
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

export default function BlogSEOLokalneCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "SEO Lokalne — co to jest i jak wypozycjonować firmę lokalnie?" },
  ];

  const localSEOFactors = [
    { factor: "Google Business Profile", desc: "Konto Google Moja Firma — fundament SEO lokalnego. Kompletny profil z godzinami, zdjęciami, opisem i odpowiedziami na recenzje." },
    { factor: "Lokalne słowa kluczowe", desc: "Frazy z geolokalizacją: 'dentysty Warszawa Mokotów', 'instalator klimatyzacji Kraków'. Naturalne wkomponowanie w treść strony." },
    { factor: "NAP consistency", desc: "Name, Address, Phone — spójne dane firmy we wszystkich katalogach (Google, Facebook, Yelp, branżowe katalogi)." },
    { factor: "Recenzje Google", desc: "Liczba i rating recenzji to kluczowy czynnik rankingowy dla pakietu lokalnego (Local Pack). Zachęcaj klientów do wystawiania opinii." },
    { factor: "Lokalne linki", desc: "Linki z lokalnych mediów, stowarzyszeń branżowych, izb handlowych, portali lokalnych — budują autorytet geograficzny." },
    { factor: "Lokalne schema markup", desc: "LocalBusiness schema na stronie — mówi Google dokładnie kim jesteś, gdzie się znajdujesz i czym się zajmujesz." },
  ];

  const faqItems = [
    {
      question: "Co to jest SEO Lokalne?",
      answer:
        "SEO Lokalne (Local SEO) to optymalizacja strony internetowej i obecności online firmy dla wyników wyszukiwania dotyczących konkretnej lokalizacji. Cel: pojawić się w wynikach gdy ktoś szuka 'fryzjer Poznań' lub 'hydraulik w pobliżu'. Google Local Pack: trzy firmy które Google wyświetla na mapie nad wynikami organicznymi. To najatrakcyjniejsza pozycja dla biznesu lokalnego. 46% wszystkich wyszukiwań w Google ma lokalne intencje. 78% lokalnych wyszukiwań mobilnych kończy się wizytą w sklepie. SEO lokalne jest kluczowe dla: restauracji, gabinetów, salonów, sklepów stacjonarnych, rzemieślników i usługodawców lokalnych.",
    },
    {
      question: "Jak zoptymalizować Google Moja Firma?",
      answer:
        "Optymalizacja Google Business Profile (Google Moja Firma): 1) Zweryfikuj firmę — fizyczna weryfikacja przez pocztę lub wideo. 2) Uzupełnij wszystkie pola — nazwa, adres, numer, godziny otwarcia, kategorii (główna i dodatkowe). 3) Dodaj opis firmy — 750 znaków, naturalne słowa kluczowe. 4) Dodaj zdjęcia — minimum 10-20 zdjęć (wnętrze, exterior, produkty, team). Zdjęcia zwiększają kliknięcia o 35%. 5) Zbieraj recenzje — wyślij link do klientów, odpowiadaj na wszystkie opinie. 6) Google Posts — publikuj aktualności, oferty, wydarzenie min. 1x/tydzień. 7) Q&A — odpowiadaj na pytania. 8) Usługi i produkty — dodaj listę usług z cenami.",
    },
    {
      question: "Jak zbierać recenzje Google dla firmy lokalnej?",
      answer:
        "Strategie zbierania recenzji Google: 1) Wyślij link do recenzji — stwórz krótki link przez Google Business Profile i wyślij klientom przez SMS lub email. 2) QR kod — umieść QR kod prowadzący do formularza recenzji w sklepie, na paragonie, wizytówce. 3) Poproś osobiście — 'Jeśli był Pan zadowolony, bardzo by mi pomogła recenzja Google'. 4) Follow-up email — 24-48h po usłudze. 5) Tabliczka w lokalu — 'Oceń nas na Google'. WAŻNE: nigdy nie kupuj recenzji ani nie prosi o recenzję w zamian za rabat (naruszenie zasad Google). Odpowiadaj na KAŻDĄ recenzję — pozytywną i negatywną.",
    },
    {
      question: "Co to jest Local Pack Google?",
      answer:
        "Local Pack (Google Map Pack) to blok trzech wyników na mapie wyświetlany przez Google przy lokalnych wyszukiwaniach — nad organicznymi wynikami. Zawiera: nazwę firmy, ocenę (gwiazdki), adres, godziny otwarcia, zdjęcia. Czynniki rankingowe Local Pack: Relevance (dopasowanie do zapytania — opis GBP, kategorie), Distance (odległość od wyszukującego — kluczowe), Prominence (autorytet — liczba recenzji, linki, SEO na stronie). Local Pack ma CTR 44% dla najwyższej pozycji. Firmy w Local Pack odbierają 4x więcej połączeń niż te poniżej mapy. Optymalizacja Local Pack = optymalizacja Google Business Profile + lokalne SEO strony.",
    },
    {
      question: "Jak optymalizować stronę pod SEO lokalne?",
      answer:
        "On-page SEO lokalne: 1) Lokalne słowa kluczowe w tytule, H1, opisach — 'Stomatolog Warszawa Śródmieście'. 2) Strony dedykowane dla każdej lokalizacji — jeśli masz kilka oddziałów, osobna strona per miasto. 3) LocalBusiness Schema Markup — strukturyzowane dane z adresem, telefonem, godzinami. 4) Embedded Google Maps na stronie kontaktowej. 5) Naturalne wzmianki lokalizacji w treści ('firma założona w Krakowie w 2010 roku', 'obsługujemy klientów z Małopolski'). 6) NAP w stopce — nazwa, adres, telefon w formacie tekstu (nie obrazek!). 7) Szybkość strony na mobile — 60%+ lokalnych wyszukiwań to mobile.",
    },
    {
      question: "Jakie katalogi lokalne warto wypełnić?",
      answer:
        "Najważniejsze katalogi dla SEO lokalnego w Polsce: Google Business Profile (obowiązkowo), Facebook (profil firmy), Yelp (szczególnie dla gastronomii), Pkt.pl, Targeo.pl, Panorama firm, Zumi, Otodom (nieruchomości), Hotline (produkty), Aleo (B2B), Oferia (usługi), katalogi branżowe (np. ZnanyLekarz dla medycyny, Booksy dla beauty). Ważne: upewnij się że NAP (Name, Address, Phone) jest identyczne we wszystkich katalogach. Różne wersje adresu czy telefonu to sygnał dla Google że dane są nieaktualne. Narzędzia do zarządzania cytowaniami: Whitespark, BrightLocal.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO Lokalne — co to jest i jak wypozycjonować firmę lokalnie?"
        description="SEO Lokalne co to jest — wyjaśniamy czym jest Local SEO, jak zoptymalizować Google Moja Firma, zbierać recenzje, Local Pack i on-page SEO lokalnie."
        canonical="https://fotz.pl/blog/seo-lokalne-co-to"

        keywords="SEO Lokalne co to jest, SEO Lokalne definicja, czym jest SEO Lokalne, SEO Lokalne w marketingu, SEO Lokalne przykłady, jak działa SEO Lokalne, SEO Lokalne strategia"
      />
      <ArticleSchema
        title="SEO Lokalne — co to jest i jak wypozycjonować firmę lokalnie?"
        description="Czym jest SEO Lokalne (Local SEO), Google Business Profile optymalizacja, Local Pack, zbieranie recenzji, on-page local SEO i katalogi lokalne w Polsce."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/seo-lokalne-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Pozycjonowanie lokalne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                SEO Lokalne — co to jest i jak pojawiać się w wynikach lokalnych?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                46% wyszukiwań w Google ma lokalne intencje. SEO Lokalne to optymalizacja
                dla klientów szukających usług w Twojej okolicy — Local Pack, GMB i recenzje.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kluczowe czynniki SEO Lokalnego</h2>
              <div className="space-y-3 mb-6">
                {localSEOFactors.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{f.factor}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Local Pack — czynniki rankingowe</h2>
              <div className="space-y-2 mb-6">
                {[
                  { factor: "Relevance", desc: "Dopasowanie profilu do zapytania (kategorie, opis, usługi)" },
                  { factor: "Distance", desc: "Odległość firmy od lokalizacji wyszukującego" },
                  { factor: "Prominence", desc: "Autorytet — recenzje, linki, SEO na stronie" },
                  { factor: "Reviews", desc: "Liczba recenzji i średnia ocena (4.0+ preferowane)" },
                  { factor: "Engagement", desc: "Kliknięcia, połączenia, wskazówki z GBP" },
                ].map((r, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{r.factor}</p>
                      <p className="text-slate-500 text-xs">{r.desc}</p>
                    </div>
                    <Star className={`w-4 h-4 ml-4 ${idx < 3 ? 'text-yellow-500' : 'text-slate-400'}`} />
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz stronę zoptymalizowaną pod SEO lokalne?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony z LocalBusiness schema, lokalnym SEO i integracją Google Maps.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — SEO Lokalne co to jest</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
        />
      </Layout>
    </>
  );
}
