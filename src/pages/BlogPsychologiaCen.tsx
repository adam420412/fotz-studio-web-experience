import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, DollarSign, Brain, TrendingUp, Tag, Percent, Zap } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Czym jest psychologia cen?",
    answer: "Psychologia cen (pricing psychology) to nauka o tym, jak konsumenci postrzegają i reagują na ceny. Wykorzystuje heurystyki, błędy poznawcze i emocje, aby wpływać na decyzje zakupowe i zwiększać konwersję."
  },
  {
    question: "Czy ceny kończące się na 9 naprawdę działają?",
    answer: "Tak, liczne badania potwierdzają efekt 'left-digit'. Cena 99 zł jest postrzegana jako znacząco niższa niż 100 zł, mimo różnicy 1%. Efekt jest silniejszy dla zakupów impulsywnych i tańszych produktów."
  },
  {
    question: "Co to jest kotwiczenie cen?",
    answer: "Kotwiczenie (anchoring) to technika, gdzie najpierw pokazujesz wysoką cenę (kotwicę), a potem niższą cenę docelową. Klient porównuje do kotwicy i postrzega ofertę jako okazję. Np. 'Było 499 zł, teraz 299 zł'."
  },
  {
    question: "Ile opcji cenowych powinienem oferować?",
    answer: "Optymalna liczba to 3 opcje (reguła Rule of Three). Najtańsza służy jako kotwica, najdroższa podkreśla wartość środkowej, a środkowa jest najczęściej wybierana (efekt kompromisu). Więcej niż 4 opcje powodują paraliż decyzyjny."
  },
  {
    question: "Czy powinienem pokazywać ceny z VAT czy bez?",
    answer: "Dla B2C zawsze z VAT (brutto) - to wymóg prawny. Dla B2B zwyczajowo netto. W e-commerce ceny brutto są standardem. Ukrywanie VAT do koszyka to zła praktyka, która zwiększa porzucenia."
  }
];

export default function BlogPsychologiaCen() {
  return (
    <Layout>
      <Helmet>
        <title>Psychologia cen - jak ustalać ceny, które sprzedają 2025 | FOTZ Studio</title>
        <meta name="description" content="Psychologia cen w praktyce: kotwiczenie, charm pricing, decoy effect. Poznaj techniki cenowe, które zwiększają konwersję i wartość koszyka." />
        <meta name="keywords" content="psychologia cen, pricing psychology, ustalanie cen, kotwiczenie cen, charm pricing, strategia cenowa" />
        <link rel="canonical" href="https://fotz.pl/blog/psychologia-cen" />
      </Helmet>
      <ArticleSchema
        title="Psychologia cen - jak ustalać ceny, które sprzedają"
        description="Psychologia cen w praktyce: kotwiczenie, charm pricing, decoy effect. Techniki cenowe zwiększające konwersję."
        url="https://fotz.pl/blog/psychologia-cen"
        datePublished="2025-01-04"
        dateModified="2026-01-09"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Psychologia cen", url: "https://fotz.pl/blog/psychologia-cen" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-12 section-padding bg-background">
        <div className="container-wide">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Poradniki
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Psychologia cen - jak ustalać ceny, które sprzedają
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dlaczego 99 zł wydaje się dużo tańsze niż 100 zł? Poznaj sprawdzone techniki psychologii cen, które zwiększają konwersję i wartość zamówień.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Zespół FOTZ
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                4 Sty 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                14 min czytania
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071"
              alt="Psychologia cen - strategie cenowe"
              className="w-full rounded-2xl aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2 className="flex items-center gap-3">
                <Brain className="w-6 h-6 text-primary" />
                Czym jest psychologia cen?
              </h2>
              <p>
                <strong>Psychologia cen</strong> (pricing psychology) to nauka o tym, jak ludzie 
                postrzegają i reagują na ceny. Wykorzystuje wiedzę o heurystykach, błędach 
                poznawczych i emocjach, aby wpływać na decyzje zakupowe. Strategia cenowa jest kluczowa dla sukcesu <Link to="/ecommerce-tworzenie-sklepu" className="text-primary hover:underline">sklepów e-commerce</Link>.
              </p>
              <p>
                Cena to nie tylko liczba - to sygnał wartości, jakości i statusu. Odpowiednia 
                strategia cenowa może zwiększyć konwersję nawet o 25% bez zmiany produktu. Dobrze zaprojektowana <Link to="/strony-internetowe" className="text-primary hover:underline">strona internetowa</Link> z przemyślaną prezentacją cen wspiera decyzje zakupowe, a efektywny <Link to="/content-marketing" className="text-primary hover:underline">content marketing</Link> buduje wartość w oczach klientów.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-3 mt-0">💡 Kluczowe statystyki</h3>
                <ul className="mb-0">
                  <li>92% konsumentów porównuje ceny przed zakupem</li>
                  <li>Ceny kończące się na 9 zwiększają sprzedaż o 24%</li>
                  <li>Efekt kotwiczenia wpływa na 60% decyzji zakupowych</li>
                  <li>3 opcje cenowe to optimum - większość wybiera środkową</li>
                </ul>
              </div>

              <h2 className="flex items-center gap-3">
                <Tag className="w-6 h-6 text-primary" />
                Charm Pricing - magia dziewiątki
              </h2>
              <p>
                <strong>Charm pricing</strong> to technika ustalania cen kończących się na 9, 99 lub 95. 
                Działa dzięki efektowi <em>left-digit</em> - mózg najpierw przetwarza lewą cyfrę.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 my-6">
                <h4 className="font-bold mb-3">Przykłady charm pricing:</h4>
                <ul className="text-sm mb-0">
                  <li><strong>99 zł</strong> zamiast 100 zł - postrzegane jako "dziewięćdziesiąt kilka"</li>
                  <li><strong>199 zł</strong> zamiast 200 zł - różnica 1 zł, efekt psychologiczny ogromny</li>
                  <li><strong>9,99 zł</strong> - klasyka, działa od dekad</li>
                </ul>
              </div>

              <p><strong>Kiedy NIE używać charm pricing:</strong></p>
              <ul>
                <li><strong>Produkty premium</strong> - okrągłe ceny (500 zł, 1000 zł) sygnalizują jakość</li>
                <li><strong>B2B</strong> - profesjonalni kupcy są mniej podatni</li>
                <li><strong>Usługi eksperckie</strong> - 99 zł za konsultację wygląda tanio</li>
              </ul>

              <h2 className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-primary" />
                Kotwiczenie cen (Anchoring)
              </h2>
              <p>
                <strong>Kotwiczenie</strong> to najpotężniejsza technika psychologii cen. Polega na 
                pokazaniu najpierw wysokiej ceny (kotwicy), która sprawia, że kolejna cena wydaje się okazją.
              </p>

              <h3>Techniki kotwiczenia:</h3>
              <ol>
                <li>
                  <strong>Przekreślona cena</strong><br />
                  <span className="line-through text-muted-foreground">499 zł</span> → <span className="text-primary font-bold">299 zł</span>
                </li>
                <li>
                  <strong>Porównanie z konkurencją</strong><br />
                  "Agencje konkurencyjne: 5000 zł/msc | My: 2500 zł/msc"
                </li>
                <li>
                  <strong>Opcja premium jako kotwica</strong><br />
                  Plan Enterprise: 999 zł → Plan Pro: 299 zł (wydaje się tani)
                </li>
                <li>
                  <strong>Wartość vs cena</strong><br />
                  "Wartość kursu: 2000 zł | Twoja cena: 497 zł"
                </li>
              </ol>

              <h2 className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Decoy Effect - efekt wabika
              </h2>
              <p>
                <strong>Decoy effect</strong> polega na dodaniu trzeciej opcji (wabika), która sprawia, 
                że jedna z pozostałych wydaje się znacznie lepsza.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <h4 className="font-bold mb-4">Klasyczny przykład - subskrypcja:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="font-bold">Basic</p>
                    <p className="text-2xl font-bold">49 zł</p>
                    <p className="text-sm text-muted-foreground">Online only</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border-2 border-primary">
                    <p className="font-bold text-primary">WABIK</p>
                    <p className="text-2xl font-bold">99 zł</p>
                    <p className="text-sm text-muted-foreground">Print only</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="font-bold">Premium</p>
                    <p className="text-2xl font-bold">99 zł</p>
                    <p className="text-sm text-muted-foreground">Print + Online</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 mb-0">
                  Wabik (środkowa opcja) sprawia, że Premium za tę samą cenę wydaje się oczywistym wyborem.
                </p>
              </div>

              <h2 className="flex items-center gap-3">
                <Percent className="w-6 h-6 text-primary" />
                Więcej technik psychologii cen
              </h2>

              <h3>1. Rule of 100</h3>
              <p>
                Dla produktów poniżej 100 zł - pokazuj rabat procentowo (20% taniej).<br />
                Dla produktów powyżej 100 zł - pokazuj rabat kwotowo (100 zł taniej).
              </p>

              <h3>2. Bundling (pakiety)</h3>
              <p>
                Łącz produkty w pakiety z jedną ceną. Klient nie wie, ile kosztuje każdy element, 
                więc trudniej mu porównać z konkurencją. Bonus: zwiększa średnią wartość zamówienia.
              </p>

              <h3>3. Price Framing (ramowanie)</h3>
              <ul>
                <li>"Tylko 3,30 zł dziennie" zamiast "99 zł miesięcznie"</li>
                <li>"Mniej niż kawa dziennie" - relatywizacja</li>
                <li>"Oszczędzasz 200 zł rocznie" - perspektywa długoterminowa</li>
              </ul>

              <h3>4. Usuwanie symbolu waluty</h3>
              <p>
                W restauracjach premium: "Stek 89" zamiast "Stek 89 zł". Brak symbolu waluty 
                zmniejsza "ból płacenia". Działa w kontekstach luksusowych.
              </p>

              <h3>5. Precise Pricing</h3>
              <p>
                Precyzyjne ceny (np. 487 zł zamiast 500 zł) sugerują, że cena została 
                dokładnie skalkulowana, co buduje zaufanie. Działa w B2B i usługach.
              </p>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Struktura cennika - best practices
              </h2>

              <h3>Trzy opcje to optimum</h3>
              <p>
                <strong>Reguła Rule of Three</strong>: oferuj 3 pakiety. Większość klientów wybierze 
                środkową opcję (efekt kompromisu). Używaj nazw: Basic/Pro/Premium lub Starter/Growth/Scale.
              </p>

              <h3>Wyróżnij rekomendowaną opcję</h3>
              <ul>
                <li>Etykieta "Najpopularniejszy" lub "Polecamy"</li>
                <li>Wizualne wyróżnienie (kolor, obramowanie)</li>
                <li>Umieść w środku lub po prawej stronie</li>
              </ul>

              <h3>Pokazuj oszczędność przy płatności rocznej</h3>
              <p>
                "99 zł/msc lub 79 zł/msc przy płatności rocznej (oszczędzasz 240 zł)". 
                Zawsze pokazuj ile klient oszczędza, nie tylko niższą cenę.
              </p>

              <h2>Błędy w strategii cenowej</h2>
              <ol>
                <li><strong>Zbyt wiele opcji</strong> - paraliż decyzyjny, max 4 pakiety</li>
                <li><strong>Brak kotwicy</strong> - nie pokazujesz kontekstu wartości</li>
                <li><strong>Ukryte koszty</strong> - VAT, dostawa "niespodzianka" = porzucenia</li>
                <li><strong>Brak social proof</strong> - "1000+ klientów wybrało ten plan"</li>
                <li><strong>Nieczytelny cennik</strong> - trudne porównanie pakietów</li>
              </ol>

              <h2>FAQ - Najczęściej zadawane pytania</h2>
              
              {faqItems.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}

              <h2>Podsumowanie</h2>
              <p>
                Psychologia cen to potężne narzędzie, które może znacząco wpłynąć na konwersję 
                bez zmiany produktu. Kluczowe techniki to: charm pricing (ceny na 9), kotwiczenie 
                (pokazywanie wyższej ceny najpierw) i decoy effect (wabik kierujący do preferowanej opcji).
              </p>
              <p>
                Pamiętaj: cena to nie tylko koszt - to sygnał wartości. Testuj różne strategie, 
                analizuj dane i optymalizuj. Małe zmiany w prezentacji cen mogą przynieść duże 
                wzrosty przychodów. Dobrze zaprojektowany <Link to="/strony-internetowe" className="text-primary hover:underline">landing page</Link> z 
                odpowiednim cennikiem, wspierany przez <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie SEO</Link>, 
                może znacząco zwiększyć sprzedaż.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4 mt-0">Potrzebujesz pomocy ze strategią cenową?</h3>
                <p className="mb-6">
                  Zaprojektujemy cennik i landing page, które maksymalizują konwersję.
                </p>
                <Button asChild size="lg">
                  <Link to="/kontakt">Umów bezpłatną konsultację</Link>
                </Button>
              </div>
            </article>

            {/* Share */}
            <div className="flex items-center justify-between py-8 border-t border-border mt-12">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Udostępnij:</span>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles currentArticleId="psychologia-cen" />
    </Layout>
  );
}
