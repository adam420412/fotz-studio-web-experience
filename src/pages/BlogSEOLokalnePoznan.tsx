import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, MapPin, Search, Star, Building2, CheckCircle2, Globe, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const BlogSEOLokalnePoznan = () => {
  return (
    <>
      <Helmet>
        <title>SEO lokalne dla firm w Poznaniu - kompletny poradnik 2025 | Fotz Studio</title>
        <meta 
          name="description" 
          content="Jak wypozycjonować firmę lokalnie w Poznaniu? Kompletny poradnik SEO lokalnego: Google Moja Firma, cytaty NAP, recenzje i strategie na 2025 rok." 
        />
        <meta name="keywords" content="SEO lokalne Poznań, pozycjonowanie lokalne, Google Moja Firma, Google Maps, NAP, lokalne wyszukiwanie, SEO dla firm lokalnych" />
        <link rel="canonical" href="https://fotz.pl/blog/seo-lokalne-poznan-poradnik" />
      </Helmet>
      <ArticleSchema
        title="SEO lokalne dla firm w Poznaniu - kompletny poradnik 2025"
        description="Jak wypozycjonować firmę lokalnie w Poznaniu? Kompletny poradnik SEO lokalnego."
        url="https://fotz.pl/blog/seo-lokalne-poznan-poradnik"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SEO lokalne Poznań", url: "https://fotz.pl/blog/seo-lokalne-poznan-poradnik" },
        ]}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Powrót do bloga
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  4 stycznia 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  20 min czytania
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Fotz Studio
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                SEO lokalne dla firm w Poznaniu - kompletny poradnik 2025
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                46% wszystkich wyszukiwań Google ma charakter lokalny. Jeśli prowadzisz firmę w Poznaniu, SEO lokalne może być kluczem do pozyskania nowych klientów.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose">
              <p>
                Wyobraź sobie: klient w Poznaniu szuka "dentysta Jeżyce" lub "mechanik Grunwald". <strong>Czy Twoja firma pojawia się w wynikach?</strong> Jeśli nie, tracisz klientów na rzecz konkurencji, która zadbała o SEO lokalne. Ten poradnik pokaże Ci krok po kroku, jak to zmienić. Sprawdź również nasze usługi <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowania stron</Link> i <Link to="/pozycjonowanie-google-maps" className="text-primary hover:underline">pozycjonowania w Google Maps</Link>.
              </p>

              {/* Key stats */}
              <div className="not-prose my-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "46%", label: "wyszukiwań jest lokalnych" },
                    { value: "78%", label: "prowadzi do zakupu offline" },
                    { value: "88%", label: "dzwoni lub odwiedza w 24h" },
                    { value: "97%", label: "szuka lokalnych firm online" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-card rounded-xl border border-border">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2>Co to jest SEO lokalne?</h2>

              <p>
                SEO lokalne (Local SEO) to strategia pozycjonowania skupiona na zwiększeniu widoczności firmy w wyszukiwaniach związanych z konkretną lokalizacją. Gdy ktoś szuka "restauracja włoska Poznań" lub "fryzjer blisko mnie", Google pokazuje wyniki dopasowane do lokalizacji użytkownika.
              </p>

              <div className="not-prose my-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: MapPin, title: "Google Maps Pack", desc: "Top 3 wyniki na mapie – najbardziej widoczne miejsce w lokalnych wyszukiwaniach" },
                    { icon: Search, title: "Wyniki organiczne", desc: "Klasyczne wyniki wyszukiwania z kontekstem lokalnym" },
                    { icon: Star, title: "Recenzje Google", desc: "Opinie klientów wpływające na pozycję i zaufanie" },
                    { icon: Building2, title: "Google Moja Firma", desc: "Profil firmowy z wszystkimi informacjami o działalności" },
                  ].map((item, index) => (
                    <div key={index} className="p-6 bg-card rounded-xl border border-border">
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2>1. Google Moja Firma (Google Business Profile)</h2>

              <p>
                <strong>To fundament SEO lokalnego.</strong> Profil Google Moja Firma to darmowe narzędzie, które pozwala zarządzać tym, jak Twoja firma wyświetla się w Google Search i Google Maps.
              </p>

              <h3>Jak założyć i zoptymalizować profil</h3>

              <ol>
                <li><strong>Załóż konto</strong> na business.google.com</li>
                <li><strong>Zweryfikuj firmę</strong> – pocztówka, telefon lub email</li>
                <li><strong>Wypełnij WSZYSTKIE informacje:</strong>
                  <ul>
                    <li>Nazwa firmy (dokładnie jak na szyldzie)</li>
                    <li>Adres i obszar obsługi</li>
                    <li>Godziny otwarcia</li>
                    <li>Numer telefonu</li>
                    <li>Strona internetowa</li>
                    <li>Kategorie działalności</li>
                    <li>Opis firmy (750 znaków)</li>
                    <li>Atrybuty (płatności, udogodnienia)</li>
                  </ul>
                </li>
                <li><strong>Dodaj zdjęcia</strong> – minimum 10 profesjonalnych zdjęć</li>
                <li><strong>Regularnie publikuj posty</strong> – nowości, oferty, wydarzenia</li>
              </ol>

              <div className="not-prose my-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Checklist optymalizacji GMB</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>✓ Profil wypełniony w 100%</li>
                      <li>✓ Minimum 10 zdjęć (w tym logo i okładka)</li>
                      <li>✓ Odpowiedzi na wszystkie recenzje</li>
                      <li>✓ Regularne posty (min. 1 tygodniowo)</li>
                      <li>✓ Aktualne godziny otwarcia</li>
                      <li>✓ Spójne dane NAP (Nazwa, Adres, Telefon)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>2. Spójność NAP – Nazwa, Adres, Telefon</h2>

              <p>
                NAP (Name, Address, Phone) to trzy najważniejsze informacje o Twojej firmie. <strong>Muszą być IDENTYCZNE wszędzie w internecie</strong> – na stronie, w social media, katalogach firm, mapach.
              </p>

              <p>
                Niespójność NAP dezorientuje Google i obniża zaufanie do Twojej firmy. Sprawdź i popraw:
              </p>

              <ul>
                <li>Stronę internetową (stopka, kontakt)</li>
                <li>Profil Google Moja Firma</li>
                <li>Facebook, Instagram, LinkedIn</li>
                <li>Katalogi firm (Panorama Firm, PKT, Zumi)</li>
                <li>Branżowe katalogi lokalne</li>
              </ul>

              <h3>Przykład spójnego NAP</h3>

              <div className="not-prose my-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <p className="text-muted-foreground text-sm mb-2">Prawidłowo:</p>
                  <p className="font-medium">Fotz Studio</p>
                  <p className="text-muted-foreground">ul. Przykładowa 12, 60-001 Poznań</p>
                  <p className="text-muted-foreground">+48 790 814 814</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Błędy: "FOTZ Studio" (inna wielkość liter), "ul. Przykładowa 12/3" (inny format adresu), "790-814-814" (inny format telefonu)
              </p>

              <h2>3. Lokalne słowa kluczowe</h2>

              <p>
                SEO lokalne wymaga innego podejścia do słów kluczowych. Oprócz ogólnych fraz, targetuj:
              </p>

              <h3>Typy lokalnych słów kluczowych</h3>

              <ul>
                <li><strong>[usługa] + [miasto]</strong> – "dentysta Poznań", "mechanik Poznań"</li>
                <li><strong>[usługa] + [dzielnica]</strong> – "fryzjer Jeżyce", "restauracja Stare Miasto"</li>
                <li><strong>"blisko mnie" / "w pobliżu"</strong> – Google automatycznie lokalizuje</li>
                <li><strong>[usługa] + "Poznań" + [dodatkowy atrybut]</strong> – "dentysta Poznań NFZ", "mechanik Poznań 24h"</li>
              </ul>

              <h3>Gdzie umieszczać lokalne słowa kluczowe</h3>

              <ul>
                <li>Tytuły stron (title tags)</li>
                <li>Nagłówki H1, H2</li>
                <li>Meta opisy</li>
                <li>Treść strony (naturalnie!)</li>
                <li>Alt teksty obrazów</li>
                <li>URL-e podstron</li>
              </ul>

              <h2>4. Recenzje i zarządzanie opinią</h2>

              <p>
                Recenzje Google to jeden z najważniejszych czynników rankingowych w SEO lokalnym. <strong>Firmy z wyższą oceną i większą liczbą opinii pojawiają się wyżej w wynikach.</strong>
              </p>

              <div className="not-prose my-8">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">4.5+</div>
                    <p className="text-xs text-muted-foreground">Minimalna ocena dla dobrej widoczności</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <p className="text-xs text-muted-foreground">Zalecana liczba opinii</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <Map className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">100%</div>
                    <p className="text-xs text-muted-foreground">Odpowiedzi na opinie</p>
                  </div>
                </div>
              </div>

              <h3>Jak zdobywać więcej recenzji</h3>

              <ul>
                <li><strong>Proś po zakończeniu usługi</strong> – zadowolony klient chętnie zostawi opinię</li>
                <li><strong>Wysyłaj link do recenzji</strong> – ułatw proces, wyślij bezpośredni link</li>
                <li><strong>QR kody w lokalu</strong> – naklejka przy kasie, na wizytówce</li>
                <li><strong>Odpowiadaj na WSZYSTKIE opinie</strong> – pozytywne i negatywne</li>
              </ul>

              <h2>5. Optymalizacja strony pod SEO lokalne</h2>

              <h3>Strona kontaktowa</h3>
              <p>
                Dedykowana strona kontaktowa z pełnymi danymi firmy, mapą Google i formularzem kontaktowym. Dodaj dane strukturalne (Schema.org LocalBusiness).
              </p>

              <h3>Strony dzielnic/obszarów</h3>
              <p>
                Jeśli obsługujesz różne dzielnice Poznania, stwórz dedykowane podstrony:
              </p>
              <ul>
                <li>/mechanik-jezyce</li>
                <li>/mechanik-grunwald</li>
                <li>/mechanik-wilda</li>
              </ul>

              <h3>Blog z lokalnym contentem</h3>
              <p>
                Publikuj treści związane z Poznaniem:
              </p>
              <ul>
                <li>"Najlepsze restauracje na Starym Rynku w Poznaniu"</li>
                <li>"Przewodnik po dzielnicach Poznania dla nowych mieszkańców"</li>
                <li>"Lokalne wydarzenia w Poznaniu – kalendarz 2025"</li>
              </ul>

              <h2>6. Cytaty lokalne (Local Citations)</h2>

              <p>
                Cytaty to wzmianki o Twojej firmie w internecie, nawet bez linku. Im więcej wiarygodnych cytatów, tym lepiej dla SEO lokalnego.
              </p>

              <h3>Gdzie dodać firmę w Poznaniu</h3>

              <ul>
                <li><strong>Ogólnopolskie katalogi:</strong> Panorama Firm, PKT.pl, Zumi, Firmy.net</li>
                <li><strong>Branżowe:</strong> ZnanyLekarz (medycyna), Booking (hotele), TripAdvisor (gastronomia)</li>
                <li><strong>Lokalne:</strong> Poznań.pl, lokalne portale informacyjne</li>
                <li><strong>Social media:</strong> Facebook, Instagram, LinkedIn z pełnymi danymi</li>
              </ul>

              <h2>7. Linkowanie lokalne</h2>

              <p>
                Linki z lokalnych stron są szczególnie wartościowe dla SEO lokalnego:
              </p>

              <ul>
                <li>Lokalne portale informacyjne</li>
                <li>Izby handlowe i stowarzyszenia branżowe</li>
                <li>Lokalne organizacje i fundacje (sponsoring)</li>
                <li>Współpraca z innymi lokalnymi firmami</li>
                <li>Lokalne wydarzenia i patronaty</li>
              </ul>

              <h2>Podsumowanie: Checklist SEO lokalnego dla Poznania</h2>

              <div className="not-prose my-8 p-6 bg-card rounded-xl border border-border">
                <h4 className="font-semibold mb-4">Do zrobienia:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Załóż i zoptymalizuj profil Google Moja Firma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Zapewnij spójność NAP we wszystkich miejscach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Dodaj lokalne słowa kluczowe na stronę</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Zdobywaj recenzje i odpowiadaj na nie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Dodaj firmę do katalogów lokalnych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Twórz lokalny content (blog, wydarzenia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>Zdobywaj linki z lokalnych źródeł</span>
                  </li>
                </ul>
              </div>

              <p>
                SEO lokalne to maraton, nie sprint. Efekty zobaczysz po 3-6 miesiącach systematycznej pracy. Ale gdy już osiągniesz wysoką pozycję, trudno ją stracić – a klienci będą przychodzić do Ciebie, nie do konkurencji.
              </p>

              {/* FAQ Section */}
              <div className="mt-16 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-8">Najczęściej zadawane pytania</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ile kosztuje pozycjonowanie lokalne w Poznaniu?</h3>
                    <p className="text-muted-foreground">Profesjonalne SEO lokalne to koszt od 1500 do 5000 PLN miesięcznie, w zależności od konkurencyjności branży i zakresu działań. Fotz Studio oferuje pakiety dostosowane do potrzeb lokalnych firm.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Jak szybko zobaczę efekty SEO lokalnego?</h3>
                    <p className="text-muted-foreground">Pierwsze efekty (wzrost widoczności w Google Maps) mogą być widoczne już po 2-4 tygodniach. Pełne efekty pozycjonowania organicznego wymagają 3-6 miesięcy.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Czy mogę samodzielnie robić SEO lokalne?</h3>
                    <p className="text-muted-foreground">Podstawy tak – założenie profilu GMB, zbieranie recenzji, spójność NAP. Zaawansowane działania (optymalizacja techniczna, linkowanie, content) wymagają wiedzy i doświadczenia.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Czy jedna strona wystarczy dla kilku lokalizacji?</h3>
                    <p className="text-muted-foreground">Nie zalecamy. Każda lokalizacja powinna mieć osobny profil GMB i dedykowaną podstronę na stronie internetowej, jeśli rzeczywiście tam działasz.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Co jest ważniejsze – recenzje czy optymalizacja strony?</h3>
                    <p className="text-muted-foreground">Oba elementy są kluczowe. Recenzje wpływają na ranking w Google Maps, optymalizacja strony na wyniki organiczne. Najlepsze efekty daje połączenie obu strategii.</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">Potrzebujesz pomocy z SEO lokalnym w Poznaniu?</h3>
                <p className="text-muted-foreground mb-6">
                  Fotz Studio specjalizuje się w pozycjonowaniu lokalnych firm. Bezpłatny audyt pokaże Ci, co poprawić.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Bezpłatny audyt SEO
                  </Link>
                  <Link 
                    to="/pozycjonowanie-stron-poznan" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-full font-medium hover:bg-card transition-colors"
                  >
                    Oferta pozycjonowania Poznań
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <RelatedArticles currentArticleId="seo-lokalne-poznan-poradnik" maxArticles={3} />
      </Layout>
    </>
  );
};

export default BlogSEOLokalnePoznan;
