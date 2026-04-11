import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "Co to jest pakiet lokalny w Google (Local Pack)?",
    answer: "Local Pack to sekcja na SERP (stronie wyników wyszukiwania) wyświetlająca 3 firmy lokalne na mapie Google. Znalezienie się w Local Pack ma ogromne znaczenie dla firm lokalnych, ponieważ jest widoczne tuż nad organicznymi wynikami wyszukiwania."
  },
  {
    question: "Ile kosztuje pozycjonowanie lokalne?",
    answer: "Pozycjonowanie lokalne zwykle kosztuje od 999 do 2000 zł miesięcznie. Cena zależy od liczby miast, konkurencji w branży i wybranych słów kluczowych. Pakiet Lokalny w naszym cenniku to 999 zł/mies. za 1 miasto."
  },
  {
    question: "Jak szybko można wyprzedzić konkurencję lokalną?",
    answer: "Pierwsze rezultaty widać po 3-4 tygodniach, ale pełne efekty osiągamy po 2-3 miesiącach. Pozycjonowanie lokalne działa szybciej niż ogólnopolskie, ponieważ konkurencja jest mniejsza."
  },
  {
    question: "Czy potrzebuję strony internetowej do SEO lokalnego?",
    answer: "Idealnie, aby mieć stronę internetową, ale możliwe jest osiągnięcie dobrych wyników lokalnych nawet bez witryny, jeśli rzetelnie zadbamy o Wizytówkę Google Moja Firma i recenzje."
  },
  {
    question: "Jak działa Google Maps w wynikach wyszukiwania?",
    answer: "Google Maps jest integralną częścią lokalnych wyników wyszukiwania. Dla zapytań z intent lokalnym (np. 'fryzjer poznań') Google wyświetla mapę z 3 najlepiej pozycjonowanymi firmami z tego obszaru."
  },
  {
    question: "Co to jest cytowanie lokalne (local citation)?",
    answer: "Local citation to zatem, gdy nazwa, adres i numer telefonu Twojej firmy pojawi się na innej stronie (katalogi biznesowe, portale branżowe, media społeczne). Im więcej cytowań, tym lepiej dla SEO lokalnego."
  },
  {
    question: "Jak mierzyć efekty lokalnego SEO?",
    answer: "Efekty mierzymy przez: ranking w Google Maps, pozycje w wynikach organicznych, wzrost ruchu z Google Search Console, wzrost llamań telefonicznych i wiadomości, wzrost recenzji na Google Business Profile."
  }
];

const BlogPozycjonowanieLokalnePoradnik = () => {
  return (
    <>
      <SEOHead
        title="Pozycjonowanie lokalne dla firm: Kompletny poradnik 2025"
        description="Jak działa pozycjonowanie lokalne? Wizytówka Google, lokalne SEO, Google Maps. Praktyczny przewodnik dla firm lokalnych w 2025 roku."
        ogType="article"
        canonical="https://fotz.pl/blog/pozycjonowanie-lokalne-dla-firm"
        keywords="pozycjonowanie lokalne, lokalne SEO, Google Moja Firma, Google Maps SEO, Local Pack"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Pozycjonowanie lokalne dla firm: Kompletny poradnik 2025",
            "description": "Praktyczny poradnik do pozycjonowania lokalnego - wszystko co musisz wiedzieć o Local SEO",
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
            "datePublished": "2025-02-20",
            "dateModified": "2025-04-01"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fotz.pl" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fotz.pl/blog" },
              { "@type": "ListItem", "position": 3, "name": "Pozycjonowanie lokalne dla firm" }
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
              <span className="text-foreground">Pozycjonowanie lokalne dla firm</span>
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
                  Pozycjonowanie SEO
                </span>

                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Pozycjonowanie lokalne dla firm: Kompletny poradnik 2025
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół FOTZ
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    20 lutego 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    18 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1516321318423-f06f70504504?q=80&w=2015"
                    alt="Pozycjonowanie lokalne - Google Maps"
                    className="w-full h-full object-cover"
                  />
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
                  Pozycjonowanie lokalne to jeden z najpotężniejszych narzędzi marketingowych dla firm, które obsługują określony region. W tym poradniku poznasz wszystkie aspekty Local SEO — od założenia Wizytówki Google Moja Firma, przez optymalizację Google Maps, aż po strategię pozyskiwania recenzji i lokalnych linków. Dowiesz się, czym różni się pozycjonowanie lokalne od ogólnopolskiego oraz jak szybko możesz osiągnąć wyniki.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Czym jest pozycjonowanie lokalne?
                </h2>

                <p className="text-muted-foreground mb-6">
                  <strong>Pozycjonowanie lokalne (Local SEO) to strategia optymalizacji Twojej strony i obecności online, aby pojawiać się w wynikach wyszukiwania dla zapytań z intent lokalnym.</strong> Na przykład, gdy ktoś wyszukuje "fryzjer Poznań" lub "dentyst obok mnie", Google pokazuje firmy lokalne na mapie i w wynikach organicznych.
                </p>

                <p className="text-muted-foreground mb-6">
                  Główna różnica między pozycjonowaniem lokalnym a ogólnopolskim:
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Lokalne:</strong> Celuje w konkretne miasto lub region — efekty widać szybciej (3-6 mies.), mniejsza konkurencja</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Ogólnopolskie:</strong> Celuje w całą Polskę — wymaga więcej pracy, wyniki dłużej (6-12 mies.), duża konkurencja</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Wizytówka Google Moja Firma — fundament SEO lokalnego
                </h2>

                <p className="text-muted-foreground mb-6">
                  Google Business Profile (dawniej Google Moja Firma) to bezpłatna narzędzie Google'a, które pozwala Ci zarządzać, jak Twoja firma pojawia się na Google Maps, w wyszukiwarce Google i na Google Search.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Jak założyć Wizytówkę Google?</strong>
                </p>

                <ol className="space-y-3 mb-6 text-muted-foreground list-decimal list-inside">
                  <li>Przejdź do <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">business.google.com</a></li>
                  <li>Kliknij "Zarządzaj na Google" lub "Utwórz wizytówkę"</li>
                  <li>Wprowadź nazwę firmy, adres, numer telefonu</li>
                  <li>Potwierdzą Twojego biznesu poprzez SMS, pocztę lub telefon</li>
                  <li>Dodaj zdjęcia, godziny otwarcia, usługi i kategorie</li>
                </ol>

                <p className="text-muted-foreground mb-6">
                  <strong>Co uzupełnić w Wizytówce, aby działała na SEO?</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>✓ <strong>Zdjęcia:</strong> co najmniej 10 profesjonalnych zdjęć (wnętrze, produkty, zespół, logo)</li>
                  <li>✓ <strong>Opis:</strong> krótki, szczegółowy opis (150-250 znaków) zawierający słowa kluczowe</li>
                  <li>✓ <strong>Kategorie:</strong> główna kategoria + do 9 dodatkowych</li>
                  <li>✓ <strong>Atrybuty:</strong> bezpłatny WiFi, parking, dostęp dla niepełnosprawnych itp.</li>
                  <li>✓ <strong>Posty:</strong> publikuj regularne posty (oferty, zdarzenia, wiadomości)</li>
                  <li>✓ <strong>Pytania i Odpowiedzi:</strong> odpowiadaj na pytania klientów</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Lokalne słowa kluczowe — jak je znaleźć?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Słowa kluczowe dla SEO lokalnego kombinują termin usługi z nazwą miasta: "[usługa] + [miasto]". Na przykład: "fryzjer Poznań", "dentyst obok mnie Kraków", "najlepszy serwis samochodowy Wrocław".
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Strategie doboru lokalnych słów kluczowych:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>• <strong>Short-tail lokalne:</strong> "fryzjer Poznań" (wysokie CPM, duża konkurencja)</li>
                  <li>• <strong>Long-tail lokalne:</strong> "najlepszy fryzjer dla zmęczonych włosów Poznań" (niższe CPM, mniejsza konkurencja)</li>
                  <li>• <strong>"Obok mnie":</strong> "fryzjer obok mnie" — coraz bardziej popularne na mobilnych</li>
                  <li>• <strong>Bez miasta:</strong> "fryzjer" — jeśli jesteś dominantny lokalnie</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  NAP — spójność danych firmy w internecie
                </h2>

                <p className="text-muted-foreground mb-6">
                  <strong>NAP to akronim od: Name (Nazwa), Address (Adres), Phone (Telefon).</strong> Google i inne algorytmy używają spójności NAP do weryfikacji autentyczności firmy. Każdą rozbieżność (np. "Polska" vs "Warszawa", różne numery telefonu) Google traktuje jako inną firmę.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Jak zapewnić spójność NAP?</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>✓ Użyj dokładnie tej samej nazwy firmy na wszystkich platformach</li>
                  <li>✓ Jednocześnie adres fizyczny (nie P.O. Box na witrynach lokalnych)</li>
                  <li>✓ Jeden główny numer telefonu we wszystkich katalogach</li>
                  <li>✓ Sprawdź czy Google Business Profile, Facebook, LinkedIn, Yelp mają identyczne dane</li>
                  <li>✓ Jeśli był błąd, skontaktuj się z katalogami i poproś o zmianę</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Recenzje i opinie — jak je zdobywać?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Recenzje na Google Business Profile to jeden z najważniejszych faktorów rankingowych dla lokalnego SEO. Firmy z 4.5+ gwiazdek pozycjonują się znacznie wyżej niż te bez opinii.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Jak zbierać recenzje od klientów?</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>1. <strong>Bezpośrednie zaproszenie:</strong> Poproś zadowolonych klientów o opinię (email, SMS, telefon)</li>
                  <li>2. <strong>Link z Google:</strong> W Google Business Profile jest gotowy link do poproszenia o recenzję</li>
                  <li>3. <strong>QR kod:</strong> Umieść QR kod w sklepie, który kieruje do strony recenzji</li>
                  <li>4. <strong>Email marketing:</strong> Po zakupie wyślij email z prośbą o opinię</li>
                  <li>5. <strong>SMS:</strong> Najlepsza konwersja — bezpośredni link w SMS'e zaraz po usłudze</li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  <strong>Jak reagować na recenzje?</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>✓ <strong>Na pozytywne:</strong> Podziękuj za opinię, czym ona dla Ciebie wazna</li>
                  <li>✓ <strong>Na negatywne:</strong> Odpowiadaj profesjonalnie, zaproponuj rozwiązanie, przenieś rozmowę offline</li>
                  <li>✓ Odpisuj w ciągu 24-48 godzin na każdą opinię</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Lokalne linki zewnętrzne — skąd je brać?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Linki z lokalnych portali, katalogów branżowych i mediów wzmacniają autorytet lokalny firmy.
                </p>

                <p className="text-muted-foreground mb-6">
                  <strong>Gdzie zdobywać lokalne linki?</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>• <strong>Katalogi branżowe:</strong> Pudelek.pl (gastronomia), Allegro Usługi, Goldenline</li>
                  <li>• <strong>Katalogi lokalne:</strong> Mapy Google, Tripadvisor, Yelp, PagesJaunes (Francja)</li>
                  <li>• <strong>Portale biznesowe:</strong> Biznesradar, ForumBiznesu, B2B.pl</li>
                  <li>• <strong>Media lokalne:</strong> Strony gazet lokalnych, portale społeczności</li>
                  <li>• <strong>Sponsorships:</strong> Linkowanie od lokalnych organizacji, stowarzyszeń</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Wyniki pozycjonowania lokalnego — czego się spodziewać?
                </h2>

                <p className="text-muted-foreground mb-6">
                  <strong>Timeline dla pozycjonowania lokalnego:</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>• <strong>Tygodnie 1-4:</strong> Setup Wizytówki Google, optymalizacja strony</li>
                  <li>• <strong>Tygodnie 4-8:</strong> Pierwsze pozycjonowania dla łatwych haseł (zwykle miejsca 8-10)</li>
                  <li>• <strong>Miesiące 2-3:</strong> Polepszenie pozycji, wejście do Local Pack dla konkurencyjnych haseł</li>
                  <li>• <strong>Miesiące 4-6:</strong> Pełne rezultaty, stabilizacja pozycji #1-3 dla głównych haseł</li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  <strong>Spodziewane wyniki (dla średniego konkurencyjnego rynku):</strong>
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>✓ +200-400% wzrost ruchu z Google Search (3-6 mies.)</li>
                  <li>✓ 10-50 leadów/mies. z wyszukiwarki (w zależności od branży)</li>
                  <li>✓ 30-200 wyświetleń Google Business Profile dziennie</li>
                  <li>✓ Pierwsze miejsca w Local Pack dla haseł z intent lokalnym</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Narzędzia do SEO lokalnego
                </h2>

                <p className="text-muted-foreground mb-6">
                  Aby monitorować i optymalizować pozycjonowanie lokalne, potrzebujesz tych narzędzi:
                </p>

                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li>• <strong>Google Business Profile:</strong> Bezpłatne zarządzanie wizytówką i statystykami</li>
                  <li>• <strong>Google Search Console:</strong> Bezpłatna analiza zapytań, impressionów, pozycji</li>
                  <li>• <strong>Google Analytics 4:</strong> Śledzenie ruchu z Google Search na stronie</li>
                  <li>• <strong>SE Ranking / Semrush:</strong> Pozycjonowanie dla słów kluczowych, kompetytory</li>
                  <li>• <strong>Bright Local:</strong> Monitorowanie Local Pack i recenzji</li>
                  <li>• <strong>Whitespark:</strong> Zarządzanie cytowaniami lokalnymi (citations)</li>
                </ul>

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
                className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 border border-primary/20 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Chcesz zwiększyć widoczność lokalną?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Pozycjonowanie lokalne to inwestycja, która zwraca się wielokrotnie. Skontaktuj się z nami aby znaleźć się w Local Pack dla Twojego miasta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053]">
                    <Link to="/kontakt">Bezpłatna wycena</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/cennik-pozycjonowania">Sprawdź cennik</Link>
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
                  <Link to="/seo/google-maps" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">SEO dla Google Maps</h4>
                    <p className="text-sm text-muted-foreground">Optymalizacja Wizytówki Google</p>
                  </Link>
                  <Link to="/uslugi/pozycjonowanie" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Usługa pozycjonowania</h4>
                    <p className="text-sm text-muted-foreground">Pełne pakiety SEO dla firm</p>
                  </Link>
                  <Link to="/cennik-pozycjonowania" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Cennik pozycjonowania</h4>
                    <p className="text-sm text-muted-foreground">Przejrzyste ceny SEO</p>
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
};

export default BlogPozycjonowanieLokalnePoradnik;
