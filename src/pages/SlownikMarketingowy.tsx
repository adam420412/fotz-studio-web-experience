import { useState, useMemo } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { FAQSchema } from "@/components/seo/StructuredData";

interface Term {
  term: string;
  definition: string;
  category: string;
  relatedLink?: string;
  relatedLinkText?: string;
}

const glossaryTerms: Term[] = [
  // A
  { term: "A/B Testing", definition: "Metoda porównywania dwóch wersji strony, reklamy lub emaila, aby sprawdzić, która przynosi lepsze wyniki. Pozwala na optymalizację kampanii na podstawie danych.", category: "Analityka" },
  { term: "Algorytm", definition: "Zestaw reguł używanych przez wyszukiwarki i platformy social media do określania, które treści pokazać użytkownikom. Google aktualizuje swój algorytm setki razy rocznie.", category: "SEO" },
  { term: "Analityka webowa", definition: "Zbieranie i analiza danych o ruchu na stronie internetowej. Najpopularniejsze narzędzie to Google Analytics 4.", category: "Analityka" },
  
  // B
  { term: "B2B (Business to Business)", definition: "Model biznesowy, w którym firma sprzedaje produkty lub usługi innym firmom, a nie konsumentom indywidualnym.", category: "Strategia" },
  { term: "B2C (Business to Consumer)", definition: "Model biznesowy, w którym firma sprzedaje bezpośrednio do konsumentów końcowych.", category: "Strategia" },
  { term: "Bounce Rate", definition: "Współczynnik odrzuceń - procent użytkowników, którzy opuścili stronę po obejrzeniu tylko jednej podstrony.", category: "Analityka" },
  { term: "Branding", definition: "Proces budowania marki, obejmujący tworzenie tożsamości wizualnej, wartości i przekazu, który wyróżnia firmę na rynku.", category: "Branding", relatedLink: "/uslugi/branding", relatedLinkText: "Poznaj nasze usługi brandingowe" },
  
  // C
  { term: "Call to Action (CTA)", definition: "Wezwanie do działania - przycisk lub link zachęcający użytkownika do podjęcia konkretnej akcji, np. 'Kup teraz', 'Zapisz się'.", category: "Konwersja" },
  { term: "Click-Through Rate (CTR)", definition: "Współczynnik klikalności - stosunek liczby kliknięć do liczby wyświetleń reklamy lub linku.", category: "Reklama" },
  { term: "Content Marketing", definition: "Strategia marketingowa polegająca na tworzeniu i dystrybucji wartościowych treści w celu przyciągnięcia i zaangażowania grupy docelowej.", category: "Content", relatedLink: "/content-marketing/strategia", relatedLinkText: "Zobacz ofertę content marketingu" },
  { term: "Conversion Rate", definition: "Współczynnik konwersji - procent użytkowników, którzy wykonali pożądaną akcję (zakup, zapis, kontakt) względem wszystkich odwiedzających.", category: "Konwersja" },
  { term: "CPC (Cost Per Click)", definition: "Koszt za kliknięcie - model rozliczenia reklam, w którym płacisz za każde kliknięcie w reklamę.", category: "Reklama" },
  { term: "CPM (Cost Per Mille)", definition: "Koszt za tysiąc wyświetleń - model rozliczenia reklam, w którym płacisz za każde 1000 wyświetleń reklamy.", category: "Reklama" },
  { term: "CRM", definition: "Customer Relationship Management - system do zarządzania relacjami z klientami, śledzenia interakcji i automatyzacji sprzedaży.", category: "Narzędzia" },
  
  // D
  { term: "Domain Authority (DA)", definition: "Wskaźnik autorytetu domeny opracowany przez Moz, przewidujący jak dobrze strona będzie się pozycjonować w wynikach wyszukiwania.", category: "SEO" },
  
  // E
  { term: "E-commerce", definition: "Handel elektroniczny - sprzedaż produktów lub usług przez internet za pomocą sklepu online.", category: "E-commerce", relatedLink: "/uslugi/strony-internetowe/ecommerce", relatedLinkText: "Tworzenie sklepów internetowych" },
  { term: "Email Marketing", definition: "Forma marketingu bezpośredniego wykorzystująca pocztę elektroniczną do komunikacji z potencjalnymi i obecnymi klientami.", category: "Email" },
  { term: "Engagement Rate", definition: "Współczynnik zaangażowania - miara interakcji użytkowników z treściami (polubienia, komentarze, udostępnienia) względem zasięgu.", category: "Social Media" },
  
  // F
  { term: "Facebook Ads", definition: "System reklamowy Meta pozwalający na tworzenie i zarządzanie reklamami na Facebooku i Instagramie.", category: "Reklama", relatedLink: "/performance-marketing/facebook-ads", relatedLinkText: "Kampanie Facebook Ads" },
  { term: "Funnel (Lejek sprzedażowy)", definition: "Model przedstawiający ścieżkę klienta od pierwszego kontaktu z marką do zakupu, podzielony na etapy: świadomość, zainteresowanie, decyzja, akcja.", category: "Strategia" },
  
  // G
  { term: "Google Ads", definition: "Platforma reklamowa Google umożliwiająca wyświetlanie reklam w wynikach wyszukiwania, na YouTube i w sieci partnerskiej.", category: "Reklama", relatedLink: "/performance-marketing/google-ads", relatedLinkText: "Kampanie Google Ads" },
  { term: "Google Analytics", definition: "Bezpłatne narzędzie Google do analizy ruchu na stronie internetowej. Aktualna wersja to GA4.", category: "Analityka" },
  { term: "Google My Business", definition: "Bezpłatne narzędzie Google pozwalające zarządzać widocznością firmy w Google Search i Maps.", category: "Lokalne SEO", relatedLink: "/seo/google-maps", relatedLinkText: "Pozycjonowanie w Google Maps" },
  
  // H
  { term: "Hashtag", definition: "Słowo lub fraza poprzedzona znakiem #, używana w social mediach do kategoryzacji treści i zwiększenia ich zasięgu.", category: "Social Media" },
  
  // I
  { term: "Impressions (Wyświetlenia)", definition: "Liczba razy, kiedy reklama lub treść została wyświetlona użytkownikom, niezależnie od tego, czy nastąpiła interakcja.", category: "Reklama" },
  { term: "Influencer Marketing", definition: "Forma marketingu wykorzystująca osoby o dużym zasięgu w social mediach do promocji produktów lub usług.", category: "Social Media" },
  
  // K
  { term: "KPI (Key Performance Indicators)", definition: "Kluczowe wskaźniki efektywności - mierzalne wartości pokazujące, jak skutecznie firma realizuje swoje cele biznesowe.", category: "Analityka" },
  { term: "Keyword (Słowo kluczowe)", definition: "Słowo lub fraza, którą użytkownicy wpisują w wyszukiwarkę. Podstawa strategii SEO i kampanii reklamowych.", category: "SEO" },
  
  // L
  { term: "Landing Page", definition: "Strona docelowa zaprojektowana z myślą o konkretnym celu konwersji, np. zbieraniu leadów lub sprzedaży produktu.", category: "Konwersja" },
  { term: "Lead", definition: "Potencjalny klient, który wyraził zainteresowanie produktem lub usługą, np. poprzez pozostawienie danych kontaktowych.", category: "Sprzedaż" },
  { term: "Lead Magnet", definition: "Wartościowa treść oferowana za darmo w zamian za dane kontaktowe, np. e-book, checklist, webinar.", category: "Content" },
  { term: "Link Building", definition: "Proces zdobywania linków zwrotnych z innych stron internetowych w celu poprawy pozycji w wynikach wyszukiwania.", category: "SEO" },
  { term: "Long-tail Keywords", definition: "Długie, szczegółowe frazy kluczowe, które mają mniejszy wolumen wyszukiwań, ale wyższą intencję zakupową.", category: "SEO" },
  
  // M
  { term: "Marketing Automation", definition: "Wykorzystanie oprogramowania do automatyzacji powtarzalnych zadań marketingowych, takich jak email marketing czy scoring leadów.", category: "Automatyzacja" },
  { term: "Meta Ads", definition: "Platforma reklamowa Meta (dawniej Facebook Inc.) obejmująca reklamy na Facebooku, Instagramie i Messengerze.", category: "Reklama", relatedLink: "/performance-marketing/meta-ads", relatedLinkText: "Kampanie Meta Ads" },
  { term: "Meta Description", definition: "Krótki opis strony wyświetlany w wynikach wyszukiwania, wpływający na CTR organiczny.", category: "SEO" },
  
  // O
  { term: "Organic Traffic", definition: "Ruch organiczny - użytkownicy, którzy trafili na stronę z bezpłatnych wyników wyszukiwania.", category: "SEO" },
  
  // P
  { term: "PPC (Pay Per Click)", definition: "Model reklamy internetowej, w którym reklamodawca płaci za każde kliknięcie w reklamę.", category: "Reklama" },
  { term: "Persona", definition: "Fikcyjny profil idealnego klienta oparty na danych demograficznych, behawioralnych i psychograficznych.", category: "Strategia" },
  
  // R
  { term: "Remarketing / Retargeting", definition: "Strategia reklamowa polegająca na wyświetlaniu reklam użytkownikom, którzy wcześniej odwiedzili stronę lub wykonali określoną akcję.", category: "Reklama" },
  { term: "Responsive Design", definition: "Projektowanie stron internetowych, które automatycznie dostosowują się do rozmiaru ekranu urządzenia.", category: "Web Design" },
  { term: "ROAS (Return on Ad Spend)", definition: "Zwrot z wydatków na reklamę - stosunek przychodu do wydatków reklamowych. ROAS 400% oznacza 4 zł przychodu na każdą wydaną złotówkę.", category: "Reklama" },
  { term: "ROI (Return on Investment)", definition: "Zwrot z inwestycji - procentowy wskaźnik pokazujący zysk w stosunku do poniesionych kosztów.", category: "Analityka", relatedLink: "/kalkulator-roi", relatedLinkText: "Oblicz swój ROI" },
  
  // S
  { term: "SEO (Search Engine Optimization)", definition: "Optymalizacja dla wyszukiwarek - działania mające na celu poprawę widoczności strony w organicznych wynikach wyszukiwania.", category: "SEO", relatedLink: "/seo/pozycjonowanie", relatedLinkText: "Usługi pozycjonowania SEO" },
  { term: "SERP (Search Engine Results Page)", definition: "Strona wyników wyszukiwania - to, co widzisz po wpisaniu zapytania w Google.", category: "SEO" },
  { term: "Social Media Marketing", definition: "Wykorzystanie platform społecznościowych do promocji marki, budowania relacji i generowania ruchu.", category: "Social Media", relatedLink: "/social-media/obsluga", relatedLinkText: "Obsługa Social Media" },
  { term: "Social Proof", definition: "Dowód społeczny - wykorzystanie opinii, recenzji i rekomendacji do budowania zaufania do marki.", category: "Konwersja" },
  
  // T
  { term: "Target Audience", definition: "Grupa docelowa - konkretna grupa ludzi, do której kierujesz swoje działania marketingowe.", category: "Strategia" },
  { term: "TikTok Ads", definition: "Platforma reklamowa TikTok umożliwiająca docieranie do młodszej grupy odbiorców poprzez krótkie formy wideo.", category: "Reklama", relatedLink: "/performance-marketing/tiktok-ads", relatedLinkText: "Kampanie TikTok Ads" },
  
  // U
  { term: "UGC (User-Generated Content)", definition: "Treści tworzone przez użytkowników - recenzje, zdjęcia, filmy publikowane przez klientów.", category: "Content" },
  { term: "UX (User Experience)", definition: "Doświadczenie użytkownika - ogół wrażeń i emocji towarzyszących korzystaniu ze strony lub aplikacji.", category: "Web Design" },
  
  // V
  { term: "Video Marketing", definition: "Wykorzystanie materiałów wideo do promocji marki, produktów lub usług.", category: "Content", relatedLink: "/uslugi/produkcja-filmow", relatedLinkText: "Produkcja filmów reklamowych" },
  { term: "Viral Marketing", definition: "Strategia polegająca na tworzeniu treści, które użytkownicy chętnie udostępniają, osiągając organicznie duży zasięg.", category: "Social Media" },
  
  // W
  { term: "Webinar", definition: "Seminarium prowadzone online, często wykorzystywane w marketingu B2B do generowania leadów.", category: "Content" },
];

const categories = [...new Set(glossaryTerms.map(t => t.category))].sort();
const alphabet = [...new Set(glossaryTerms.map(t => t.term[0].toUpperCase()))].sort();

const SlownikMarketingowy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || term.category === selectedCategory;
      const matchesLetter = !selectedLetter || term.term[0].toUpperCase() === selectedLetter;
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Group by first letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, Term[]> = {};
    filteredTerms.forEach(term => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  // FAQ Schema data
  const faqItems = glossaryTerms.slice(0, 15).map(term => ({
    question: `Co to jest ${term.term}?`,
    answer: term.definition
  }));

  return (
    <>
      <SEOHead
        title="Słownik Marketingowy — Pojęcia i Definicje z Marketingu Online | Fotz Studio"
        description="Słownik marketingowy Fotz Studio — definicje pojęć z SEO, Google Ads, social media, content marketingu i e-commerce. Poznaj kluczowe terminy marketingu internetowego."
        canonical="https://fotz.pl/slownik-marketingowy"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Słownik marketingowy", url: "https://fotz.pl/slownik-marketingowy" }
        ]}
      />
      <FAQSchema items={faqItems} />
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">{glossaryTerms.length} pojęć</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Słownik
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Marketingowy</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Kompletny przewodnik po terminach marketingu cyfrowego. 
                Od SEO po social media - znajdziesz tu definicje wszystkich kluczowych pojęć.
              </p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Szukaj pojęcia..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 px-4 border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
          <div className="container mx-auto max-w-6xl">
            {/* Alphabet */}
            <div className="flex flex-wrap gap-1 justify-center mb-4">
              <button
                onClick={() => setSelectedLetter(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  !selectedLetter ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                Wszystkie
              </button>
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter === selectedLetter ? null : letter)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                    selectedLetter === letter ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {Object.keys(groupedTerms).length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nie znaleziono pojęć spełniających kryteria wyszukiwania.</p>
              </div>
            ) : (
              Object.keys(groupedTerms).sort().map(letter => (
                <motion.div
                  key={letter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-primary">{letter}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="space-y-4">
                    {groupedTerms[letter].map((term, index) => (
                      <div
                        key={index}
                        className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <h3 className="text-xl font-bold">{term.term}</h3>
                          <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                            {term.category}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">{term.definition}</p>
                        {term.relatedLink && (
                          <Link 
                            to={term.relatedLink}
                            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                          >
                            {term.relatedLinkText}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Potrzebujesz pomocy z marketingiem?</h2>
            <p className="text-muted-foreground mb-8">
              Jeśli te pojęcia brzmią skomplikowanie, nie martw się - zajmiemy się tym za Ciebie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quiz">
                <Button size="lg" className="gap-2">
                  Wypełnij quiz rekomendacyjny
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button variant="outline" size="lg">
                  Bezpłatna konsultacja
                </Button>
              </Link>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Słownik marketingowy — kluczowe pojęcia i definicje marketingu online
            </h2>
            <p className="text-muted-foreground mb-4">
              Słownik marketingowy Fotz Studio to kompendium definicji pojęć
              z marketingu internetowego. Obejmuje terminy z SEO i pozycjonowania,
              kampanii Google Ads i Meta Ads, social media marketingu, content
              marketingu, e-commerce i analityki webowej. Definicje pisane są
              prostym językiem, z przykładami z praktyki — bez zbędnego żargonu.
            </p>
            <p className="text-muted-foreground mb-6">
              Marketing online pełen jest skrótów i anglicyzmów: CTR, CPC, CPA,
              ROAS, SEM, SERP, KPI, UX, CR — nasz słownik wyjaśnia wszystkie
              najważniejsze pojęcia i pokazuje, jak stosować je w praktyce.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Definicje SEO, PPC, CTR, ROAS i innych pojęć marketingowych
            </h2>
            <p className="text-muted-foreground mb-4">
              SEO (Search Engine Optimization) — optymalizacja strony pod wyszukiwarki.
              PPC (Pay Per Click) — model rozliczenia kampanii, płacisz za kliknięcie.
              CTR (Click-Through Rate) — wskaźnik klikalności. CPA (Cost Per Acquisition)
              — koszt pozyskania klienta. ROAS (Return on Ad Spend) — zwrot z wydatków
              reklamowych. KPI (Key Performance Indicator) — kluczowy wskaźnik efektywności.
            </p>
            <p className="text-muted-foreground mb-6">
              Słownik obejmuje też pojęcia z content marketingu: landing page (strona
              lądowania), lead magnet (materiał przyciągający leady), call-to-action (CTA,
              wezwanie do działania), konwersja (pożądana akcja użytkownika na stronie),
              lejek sprzedażowy (customer journey od pierwszego kontaktu do zakupu).
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Podstawy marketingu internetowego — terminologia dla początkujących i zaawansowanych
            </h2>
            <p className="text-muted-foreground">
              Nasz słownik marketingowy przydaje się zarówno osobom zaczynającym przygodę
              z marketingiem online, jak i doświadczonym marketerom potrzebującym
              szybkiego odświeżenia definicji. Regularnie aktualizujemy słownik
              o nowe pojęcia pojawiające się w dynamicznie rozwijającym się świecie
              marketingu cyfrowego.
            </p>
          </motion.div>
        </div>
      </section>

      </Layout>
    </>
  );
};

export default SlownikMarketingowy;
