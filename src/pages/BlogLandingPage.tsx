import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Target, Zap, CheckCircle2, XCircle, MousePointer, BarChart3, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const BlogLandingPage = () => {
  return (
    <>
      <SEOHead
        title="Jak stworzyć skuteczny landing page - poradnik z przykładami | Fotz Studio"
        description="Kompletny poradnik tworzenia landing page. Struktura, copywriting, CTA i optymalizacja konwersji. Praktyczne przykłady i wskazówki."
        canonical="https://fotz.pl/blog/jak-stworzyc-landing-page"
        keywords="landing page, strona lądowania, konwersja, CTA, UX, copywriting, lead generation, optymalizacja"
      />
      <ArticleSchema
        title="Jak stworzyć skuteczny landing page - poradnik z przykładami"
        description="Kompletny poradnik tworzenia landing page z wysoką konwersją."
        url="https://fotz.pl/blog/jak-stworzyc-landing-page"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Jak stworzyć landing page", url: "https://fotz.pl/blog/jak-stworzyc-landing-page" },
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
                  16 min czytania
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Fotz Studio
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Jak stworzyć skuteczny landing page - poradnik z przykładami
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Średni współczynnik konwersji landing page to 2-5%. Najlepsze strony osiągają 10-15%. Dowiedz się, jak stworzyć stronę, która konwertuje.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose">
              <p>
                Landing page (strona lądowania) to strona internetowa zaprojektowana z jednym konkretnym celem – <strong>skłonienie odwiedzającego do podjęcia określonej akcji</strong>. Może to być zakup, zapis na newsletter, pobranie e-booka czy umówienie się na konsultację. Skuteczny landing page wymaga zarówno dobrego <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">projektu strony internetowej</Link>, jak i <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">optymalizacji SEO</Link>.
              </p>

              {/* Key stats */}
              <div className="not-prose my-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "2-5%", label: "średnia konwersja" },
                    { value: "10-15%", label: "top landing pages" },
                    { value: "8 sek", label: "czas na uwagę" },
                    { value: "55%", label: "bounce rate" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-card rounded-xl border border-border">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2>Anatomia skutecznego landing page</h2>

              <p>
                Każdy skuteczny landing page składa się z kilku kluczowych elementów. Oto struktura, która działa:
              </p>

              <div className="not-prose my-8">
                <div className="space-y-4">
                  {[
                    { num: "1", title: "Nagłówek (Hero)", desc: "Jasna obietnica wartości – co zyskuje użytkownik?", icon: Eye },
                    { num: "2", title: "Podnagłówek", desc: "Rozwinięcie nagłówka – jak to osiągniemy?", icon: Target },
                    { num: "3", title: "Social Proof", desc: "Opinie, logo klientów, liczby – dlaczego warto zaufać?", icon: CheckCircle2 },
                    { num: "4", title: "Korzyści", desc: "Konkretne benefity dla użytkownika", icon: Zap },
                    { num: "5", title: "Call to Action", desc: "Wyraźny przycisk z akcją do wykonania", icon: MousePointer },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">{item.num}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold flex items-center gap-2">
                          {item.title}
                          <item.icon className="w-4 h-4 text-primary" />
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2>1. Nagłówek – masz 8 sekund</h2>

              <p>
                Nagłówek to najważniejszy element landing page. <strong>Użytkownik podejmuje decyzję o zostaniu lub wyjściu w ciągu 8 sekund.</strong>
              </p>

              <h3>Formuły skutecznych nagłówków:</h3>

              <ul>
                <li><strong>Obietnica rezultatu:</strong> "Zwiększ sprzedaż o 50% w 30 dni"</li>
                <li><strong>Pytanie:</strong> "Chcesz podwoić konwersję swojej strony?"</li>
                <li><strong>Rozwiązanie problemu:</strong> "Koniec z marnowaniem budżetu na reklamy"</li>
                <li><strong>Ciekawość:</strong> "Sekret firm, które rosną 10x szybciej"</li>
              </ul>

              <div className="not-prose my-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Checklist dobrego nagłówka</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>✓ Jasna wartość dla użytkownika</li>
                      <li>✓ Konkretny, nie ogólnikowy</li>
                      <li>✓ Dopasowany do źródła ruchu</li>
                      <li>✓ Maks. 10-12 słów</li>
                      <li>✓ Bez żargonu branżowego</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>2. Social Proof – buduj zaufanie</h2>

              <p>
                Ludzie ufają opinii innych. <strong>92% konsumentów czyta opinie przed zakupem.</strong> Oto elementy social proof, które warto wykorzystać w połączeniu z <Link to="/content-marketing/strategia" className="text-primary hover:underline">content marketingiem</Link>:
              </p>

              <ul>
                <li><strong>Testimoniale</strong> – opinie klientów ze zdjęciem i imieniem</li>
                <li><strong>Loga klientów</strong> – "Zaufali nam: [logo] [logo] [logo]"</li>
                <li><strong>Liczby</strong> – "10,000+ zadowolonych klientów"</li>
                <li><strong>Case studies</strong> – konkretne wyniki klientów (jak nasze <Link to="/realizacje" className="text-primary hover:underline">realizacje</Link>)</li>
                <li><strong>Certyfikaty i nagrody</strong> – dowody ekspertyzy</li>
                <li><strong>Media</strong> – "Pisali o nas: Forbes, Business Insider"</li>
              </ul>

              <h2>3. Korzyści, nie cechy</h2>

              <p>
                Największy błąd na landing pages to pisanie o cechach produktu zamiast o korzyściach dla użytkownika.
              </p>

              <div className="not-prose my-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-red-500/10 rounded-xl border border-red-500/20">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Cecha (źle)
                    </h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>"Szyfrowanie 256-bit"</li>
                      <li>"Responsywny design"</li>
                      <li>"24/7 support"</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Korzyść (dobrze)
                    </h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>"Twoje dane są bezpieczne jak w banku"</li>
                      <li>"Strona wygląda świetnie na telefonie"</li>
                      <li>"Pomożemy Ci zawsze, gdy będziesz tego potrzebować"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>4. Call to Action (CTA)</h2>

              <p>
                CTA to przycisk, który prowadzi do konwersji. <strong>Jeden landing page = jeden CTA.</strong>
              </p>

              <h3>Zasady skutecznego CTA:</h3>

              <ul>
                <li><strong>Kontrastowy kolor</strong> – przycisk musi wyróżniać się na tle strony</li>
                <li><strong>Konkretny tekst</strong> – nie "Kliknij tutaj", ale "Pobierz darmowy e-book"</li>
                <li><strong>Czasownik akcji</strong> – "Zacznij", "Pobierz", "Dołącz", "Sprawdź"</li>
                <li><strong>Urgency</strong> – "Ostatnie miejsca", "Tylko dziś"</li>
                <li><strong>Wielokrotne umieszczenie</strong> – CTA powinno pojawiać się kilka razy</li>
              </ul>

              <div className="not-prose my-8">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold mb-4">Przykłady skutecznych CTA</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium">
                      Rozpocznij darmowy trial
                    </button>
                    <button className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium">
                      Pobierz za darmo
                    </button>
                    <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium">
                      Umów bezpłatną konsultację
                    </button>
                  </div>
                </div>
              </div>

              <h2>5. Formularz – mniej znaczy więcej</h2>

              <p>
                Każde dodatkowe pole w formularzu obniża konwersję o około 10%. <strong>Zbieraj tylko niezbędne dane.</strong>
              </p>

              <div className="not-prose my-8">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Wpływ liczby pól na konwersję
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-20 text-sm">1 pole</span>
                      <div className="flex-1 h-4 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <span className="text-sm font-medium">100%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-20 text-sm">3 pola</span>
                      <div className="flex-1 h-4 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-20 text-sm">5 pól</span>
                      <div className="flex-1 h-4 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: "50%" }}></div>
                      </div>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-20 text-sm">7+ pól</span>
                      <div className="flex-1 h-4 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2>6. Eliminuj rozpraszacze</h2>

              <p>
                Landing page powinien mieć <strong>jeden cel i zero rozpraszaczy</strong>:
              </p>

              <ul>
                <li><strong>Usuń menu nawigacyjne</strong> – użytkownik ma zostać na stronie</li>
                <li><strong>Usuń linki wychodzące</strong> – każdy link to potencjalne wyjście</li>
                <li><strong>Usuń sidebar</strong> – skupienie na jednym przekazie</li>
                <li><strong>Usuń footer z linkami</strong> – lub zostaw tylko najważniejsze</li>
              </ul>

              <h2>7. Mobile First</h2>

              <p>
                <strong>60%+ ruchu pochodzi z urządzeń mobilnych.</strong> Twój landing page musi być perfekcyjny na telefonie:
              </p>

              <ul>
                <li>Duże przyciski CTA (min. 44x44px)</li>
                <li>Czytelna czcionka (min. 16px)</li>
                <li>Szybki czas ładowania (do 3 sekund)</li>
                <li>Formularze łatwe do wypełnienia na mobile</li>
                <li>Obrazy zoptymalizowane pod kątem rozmiaru</li>
              </ul>

              <h2>8. Testuj i optymalizuj</h2>

              <p>
                Najlepsze landing pages powstają przez ciągłe testowanie. <strong>Testuj A/B:</strong>
              </p>

              <ul>
                <li>Nagłówki</li>
                <li>Obrazy/wideo w hero</li>
                <li>Kolory i tekst CTA</li>
                <li>Układ sekcji</li>
                <li>Długość strony</li>
                <li>Formularze (liczba pól)</li>
              </ul>

              <h2>Podsumowanie: Checklist landing page</h2>

              <div className="not-prose my-8 p-6 bg-card rounded-xl border border-border">
                <h4 className="font-semibold mb-4">Przed publikacją sprawdź:</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Nagłówek jasno komunikuje wartość",
                    "Jest widoczny social proof",
                    "Korzyści zamiast cech",
                    "CTA jest kontrastowe i widoczne",
                    "Formularz ma minimum pól",
                    "Brak rozpraszaczy (menu, linki)",
                    "Strona działa świetnie na mobile",
                    "Czas ładowania poniżej 3 sekund",
                    "Spójność z reklamą/źródłem ruchu",
                    "Skonfigurowana analityka (konwersje)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="mt-16 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-8">Najczęściej zadawane pytania</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ile kosztuje stworzenie landing page?</h3>
                    <p className="text-muted-foreground">Profesjonalny landing page kosztuje od 2000 do 10000 PLN, w zależności od złożoności, integracji i copywritingu. Proste kreatory (np. Webflow, Carrd) pozwalają stworzyć podstawowy landing za darmo.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Jak długi powinien być landing page?</h3>
                    <p className="text-muted-foreground">Zależy od produktu. Dla prostych ofert (e-book, newsletter) krótki LP działa lepiej. Dla drogich produktów/usług dłuższy LP z większą ilością dowodów społecznych i argumentów.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Jaki jest dobry współczynnik konwersji?</h3>
                    <p className="text-muted-foreground">Średnia to 2-5%. Powyżej 5% to dobry wynik. 10%+ to świetny wynik. Ale zależy od źródła ruchu – ruch z reklam zwykle konwertuje słabiej niż ruch organiczny.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Czy potrzebuję osobnego landing page dla każdej kampanii?</h3>
                    <p className="text-muted-foreground">Idealne byłoby tak – spójność między reklamą a landing page zwiększa konwersję. Minimum to dopasowanie nagłówka LP do treści reklamy.</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-4">Potrzebujesz skutecznego landing page?</h3>
                <p className="text-muted-foreground mb-6">
                  Fotz Studio projektuje landing pages z wysoką konwersją. Od strategii przez design po wdrożenie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Bezpłatna konsultacja
                  </Link>
                  <Link 
                    to="/uslugi/strony-internetowe" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-full font-medium hover:bg-card transition-colors"
                  >
                    Zobacz ofertę stron www
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <RelatedArticles currentArticleId="jak-stworzyc-landing-page" maxArticles={3} />
      </Layout>
    </>
  );
};

export default BlogLandingPage;
