import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, BarChart3, Target, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Czym jest strategia cenowa firmy?",
    answer: "Strategia cenowa firmy to kompleksowy plan ustalania cen produktów i usług na podstawie kosztów, wartości, konkurencji i celów biznesowych. Obejmuje wybór modelu cenowego, zarządzanie marżą, pozycjonowanie na rynku i procesy optymalizacji cen."
  },
  {
    question: "Jakie są główne modele strategii cenowej?",
    answer: "Główne modele to: cost-plus (na podstawie kosztów), value-based (na podstawie wartości dla klienta), competitive pricing (na podstawie konkurencji), premium pricing (ceny wysoke dla produktów premium), freemium (darmowa wersja + płatna), dynamic pricing (ceny zmienne zależnie od popytu)."
  },
  {
    question: "Jak obliczyć optymalną cenę produktu?",
    answer: "1. Oblicz całkowite koszty (materiały, produkcja, marketing). 2. Ustal docelową marżę (20-50% w zależności od branży). 3. Przeanalizuj ceny konkurencji. 4. Zbadaj percepcję wartości przez klientów (surveys, focus groups). 5. Testuj ceny na A/B testach. 6. Monitoruj wyniki sprzedaży i rentowność."
  },
  {
    question: "Jak strategia cenowa wpływa na rentowność?",
    answer: "Wzrost ceny o 1% może zwiększyć zysk o 3-7% (przy stałych kosztach). Jednak zbyt wysoka cena zmniejsza wolumen sprzedaży. Optymalna strategia równoważy marżę z wolumenem sprzedaży. To dlatego testy cenowe i monitorowanie KPI są kluczowe."
  },
  {
    question: "Kiedy zmienić strategię cenową?",
    answer: "Zmień strategię gdy: koszty produkcji znacząco wzrosną, konkurenci zmieniają ceny, zmienia się segment docelowy, sprzedaż lub marża spadają, pojawiają się nowe produkty, lub zmienią się warunki rynkowe (inflacja, recesja)."
  },
  {
    question: "Jakie błędy popełniają firmy w ustalaniu cen?",
    answer: "Najczęstsze błędy: bazowanie tylko na kosztach (ignorowanie wartości dla klienta), brak analizy konkurencji, nieuwzględnianie elastyczności popytu, zbyt niskie ceny (uniemożliwiające wzrost), zbyt wysokie ceny (bez uzasadnienia wartością), brak testowania cen, ignorowanie różnych segmentów klientów."
  },
  {
    question: "Jak monitorować efektywność strategii cenowej?",
    answer: "Monitoruj KPI: przychód całkowity, marża zysku, wolumen sprzedaży, customer lifetime value (CLV), wskaźnik konwersji, porzucenia koszyka, elastyczność cenowa popytu. Testuj zmiany cen w grupach kontrolnych. Przeprowadzaj regularne analizy rentowności produktów."
  },
  {
    question: "Jak komunikować zmianę ceny klientom?",
    answer: "Bądź transparentny: wyjaśnij przyczyny (wzrost kosztów, ulepszenia produktu), daj czas na dostosowanie się (ankietuj klientów wcześniej), jeśli to możliwe, oferuj grandfathering dla lojalnych klientów, wykaż dodaną wartość, skoncentruj się na korzyściach dla klienta, a nie na wzroście ceny."
  }
];

export default function BlogStrategiaCenowa() {
  return (
    <Layout>
      <SEOHead
        title="Strategia Cenowa - Jak Ustalić Ceny Produktów i Usług? 2025"
        description="Strategia cenowa firmy - modele cenowe (cost-plus, value-based, competitive), analiza kosztów, marża, wpływ na przychód. Jak zbudować politykę cenową. Fotz Studio."
        ogType="article"
        canonical="https://fotz.pl/blog/strategia-cenowa"
        keywords="strategia cenowa, polityka cenowa firmy, ustalanie cen, modele cenowe, pricing strategy, analiza kosztów"
      />
      <ArticleSchema
        title="Strategia cenowa - jak ustalić ceny produktów i usług"
        description="Kompletny przewodnik po strategii cenowej: modele cenowe, analiza, wpływ na rentowność, najczęstsze błędy."
        url="https://fotz.pl/blog/strategia-cenowa"
        datePublished="2025-01-15"
        dateModified="2026-01-15"
        author="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Strategia cenowa", url: "https://fotz.pl/blog/strategia-cenowa" },
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
              Poradniki biznesowe
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Strategia cenowa - jak ustalić ceny produktów i usług?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Przewodnik po modelach cenowych, analizie kosztów i rentowności. Jak zbudować politykę cenową, która zwiększa przychód i marżę, a jednocześnie pozostaje konkurencyjna na rynku.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Zespół FOTZ
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                15 Sty 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                16 min czytania
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
              alt="Strategia cenowa - analiza cen produktów"
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
                <Target className="w-6 h-6 text-primary" />
                Co to jest strategia cenowa?
              </h2>
              <p>
                <strong>Strategia cenowa</strong> (pricing strategy) to kompleksowy plan ustalania
                cen produktów i usług na podstawie kosztów, wartości dla klienta, konkurencji
                i celów biznesowych. Polityka cenowa firmy determinuje przychód, marżę zysku
                i pozycję rynkową.
              </p>
              <p>
                Wielu przedsiębiorców błędnie uważa, że cena to po prostu koszt + marża.
                W rzeczywistości cena jest instrumentem strategicznym, który wpływa na:
              </p>
              <ul>
                <li><strong>Przychód całkowity</strong> - poprzez wolumen sprzedaży i marżę</li>
                <li><strong>Pozycjonowanie marki</strong> - wyższe ceny sygnalizują premium</li>
                <li><strong>Segment docelowy klientów</strong> - cena przyciąga określony typ kupujących</li>
                <li><strong>Rentowność</strong> - wzrost ceny o 1% może zwiększyć zysk o 3-7%</li>
                <li><strong>Konkurencyjność</strong> - zbyt wysoka cena = strata klientów, zbyt niska = niedochodowość</li>
              </ul>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold mb-3 mt-0">Kluczowe statystyki</h3>
                <ul className="mb-0">
                  <li>72% firm zmienia ceny mniej niż raz w roku - zbyt rzadko</li>
                  <li>Optymalny wzrost ceny: 5-10% rocznie (poniżej inflacji + elastyczności popytu)</li>
                  <li>Firmy tracą średnio 2-3% przychodu z powodu nieefektywnej strategii cenowej</li>
                  <li>Dynamic pricing może zwiększyć przychód o 2-25% w zależności od branży</li>
                </ul>
              </div>

              <h2 className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                6 głównych modeli strategii cenowej
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/30 bg-primary/5">
                      <th className="text-left py-3 px-3 font-bold">Strategia</th>
                      <th className="text-left py-3 px-3 font-bold">Opis</th>
                      <th className="text-left py-3 px-3 font-bold">Kiedy stosować</th>
                      <th className="text-left py-3 px-3 font-bold">Przykład</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-3 font-bold text-primary">Cost-plus</td>
                      <td className="py-3 px-3">Cena = Koszt + Marża procentowa</td>
                      <td className="py-3 px-3">Produkty masowe, B2B, mała konkurencja</td>
                      <td className="py-3 px-3">Koszt 50 zł + 40% = 70 zł</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-3 font-bold text-primary">Value-based</td>
                      <td className="py-3 px-3">Cena = Wartość dla klienta (nie koszt)</td>
                      <td className="py-3 px-3">Premium, B2B, usługi eksperckie</td>
                      <td className="py-3 px-3">Konsultacja: koszt 100 zł, wartość 1000 zł → cena 800 zł</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-3 font-bold text-primary">Competitive</td>
                      <td className="py-3 px-3">Cena = Ceny konkurencji +/- X%</td>
                      <td className="py-3 px-3">Produkty commodityzowane, e-commerce</td>
                      <td className="py-3 px-3">Konkurent 299 zł → my 289 zł (1% taniej)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-3 font-bold text-primary">Premium pricing</td>
                      <td className="py-3 px-3">Ceny wyższe niż konkurencja (marka, jakość)</td>
                      <td className="py-3 px-3">Luksus, produkty premium, mocna marka</td>
                      <td className="py-3 px-3">iPhone vs Android, Louis Vuitton vs H&M</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-3 font-bold text-primary">Freemium</td>
                      <td className="py-3 px-3">Darmowa wersja + płatne funkcje premium</td>
                      <td className="py-3 px-3">SaaS, aplikacje, usługi online</td>
                      <td className="py-3 px-3">Canva (darmowy plan + Pro za 14,99 USD/msc)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-bold text-primary">Dynamic pricing</td>
                      <td className="py-3 px-3">Ceny zmienne zależnie od popytu, sezonu, czasu</td>
                      <td className="py-3 px-3">E-commerce, loty, hotele, media</td>
                      <td className="py-3 px-3">Loty Ryanair (tansze wcześniej), Uber (droższe w godzinach szczytu)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Który model wybrać?</h3>
              <p>
                <strong>Cost-plus</strong> - prosty, ale ignoruje wartość i konkurencję. Dobry dla startów.
              </p>
              <p>
                <strong>Value-based</strong> - najefektywniejszy dla rentowności. Wymaga zrozumienia wartości dla klienta.
              </p>
              <p>
                <strong>Competitive</strong> - bezpieczny, ale łatwo wpaść w wojnę cenową.
              </p>
              <p>
                <strong>Premium</strong> - wymaga silnej marki i uzasadnienia wyższej ceny.
              </p>
              <p>
                <strong>Freemium</strong> - świetny do pozyskiwania nowych użytkowników, ale konwersja musi być wysoka (10%+).
              </p>
              <p>
                <strong>Dynamic</strong> - najlepsza rentowność, ale wymagająca technologii i regulacji.
              </p>

              <h2 className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Jak przeprowadzić analizę cenową?
              </h2>

              <h3>Krok 1: Przeanalizuj koszty</h3>
              <ul>
                <li><strong>Koszty zmienne</strong> - materiały, produkcja, dostawa (na jednostkę)</li>
                <li><strong>Koszty stałe</strong> - czynsz, pensje, marketing (całość/ilość jednostek)</li>
                <li><strong>Próg rentowności</strong> - ile jednostek sprzedać aby pokryć koszty</li>
              </ul>

              <h3>Krok 2: Przeanalizuj konkurencję</h3>
              <ul>
                <li>Zbierz ceny konkurentów (minimum 5-10)</li>
                <li>Porównaj offer value (cena vs cechy produktu)</li>
                <li>Zidentyfikuj gap w cenie i wartości</li>
              </ul>

              <h3>Krok 3: Zbadaj percepcję wartości przez klientów</h3>
              <ul>
                <li>Ankiety (ile byś zapłacił za ten produkt?)</li>
                <li>Focus groups z docelowymi klientami</li>
                <li>Van Westendorp Price Sensitivity Meter</li>
              </ul>

              <h3>Krok 4: Testuj ceny</h3>
              <ul>
                <li>A/B test: 10% segmentu przy cenie wyższej, 10% przy niższej</li>
                <li>Mierz: konwersja, AOV (średnia wartość zamówienia), przychód</li>
                <li>Testuj przez minimum 2-4 tygodnie (aby uchwycić cykl zakupowy)</li>
              </ul>

              <h3>Krok 5: Ustawić docelową marżę</h3>
              <ul>
                <li>Produkty masowe: 15-30% marża brutto</li>
                <li>Produkty premium: 50-70% marża brutto</li>
                <li>Usługi: 60-80% marża brutto (wyższe koszty pozyskania)</li>
                <li>SaaS: 70-90% marża brutto (koszty skalowane)</li>
              </ul>

              <h3>Krok 6: Monitoruj i optymalizuj</h3>
              <ul>
                <li>Śledź KPI: przychód, marża, wolumen, konwersja</li>
                <li>Porównuj z wczesniejszym okresem i z konkurencją</li>
                <li>Testuj zmiany przynajmniej raz na kwartał</li>
              </ul>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Wpływ strategii cenowej na KPI biznesu
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/30 bg-primary/5">
                      <th className="text-left py-3 px-3 font-bold">KPI</th>
                      <th className="text-left py-3 px-3 font-bold">Wpływ wzrostu ceny o 10%</th>
                      <th className="text-left py-3 px-3 font-bold">Jak mierzyć</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-3 font-bold">Przychód</td>
                      <td className="py-3 px-3">+10% (jeśli wolumen spadnie max 5%)</td>
                      <td className="py-3 px-3">Cena × Wolumen sprzedaży</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-3 font-bold">Marża zysku</td>
                      <td className="py-3 px-3">+3-7% (zależy od struktury kosztów)</td>
                      <td className="py-3 px-3">(Przychód - Koszty) / Przychód</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-3 font-bold">Customer LTV</td>
                      <td className="py-3 px-3">+10% (zakładając stały churn)</td>
                      <td className="py-3 px-3">Średnia wartość zamówienia × Liczba zakupów w życiu</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-bold">Churn rate</td>
                      <td className="py-3 px-3">+1-3% (zależy od elastyczności popytu)</td>
                      <td className="py-3 px-3">Klienci którzy odeszli / Wszyscy klienci na początku okresu</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Elastyczność popytu</strong> to kluczowy wskaźnik. Pokazuje jak zmienia się
                sprzedaż gdy zmieni się cena. Jeśli elastyczność = 1, wzrost ceny o 10% = spadek
                sprzedaży o 10% (przychód bez zmian). Jeśli elastyczność = 0,5, wzrost ceny o 10%
                = spadek sprzedaży o 5% (przychód +5%).
              </p>

              <h2 className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-primary" />
                5 najczęstszych błędów w ustalaniu cen
              </h2>

              <h3>1. Bazowanie wyłącznie na kosztach</h3>
              <p>
                Błąd: Cena = Koszt + Marża. Problem: ignoruje wartość dla klienta i konkurencję.
                Rozwiązanie: bazuj na kosztach, ale zawsze porównaj z rynkiem i percepcją wartości.
              </p>

              <h3>2. Nieanaliza elastyczności popytu</h3>
              <p>
                Błąd: Podwyżka ceny o 20%, bez testowania. Problem: możliwe, że tracisz więcej
                na wolumenie niż zyskujesz na marży. Rozwiązanie: zawsze testuj zmiany ceny
                na małej grupie przed wdrożeniem.
              </p>

              <h3>3. Ignorowanie konkurencji</h3>
              <p>
                Błąd: Nie sprawdzasz cen konkurentów. Problem: może być niedoszacowana lub
                przeszacowana. Rozwiązanie: monitoruj ceny konkurencji co najmniej raz w miesiącu.
              </p>

              <h3>4. Zbyt niska cena</h3>
              <p>
                Błąd: Cena niska, żeby przyciągnąć więcej klientów. Problem: marża może być
                niewystarczająca na pokrycie kosztów marketingu i obsługi. Rozwiązanie: oblicz
                Customer Acquisition Cost (CAC) i upewnij się, że LTV jest większe niż 3×CAC.
              </p>

              <h3>5. Brak testowania i optymalizacji</h3>
              <p>
                Błąd: Ustawisz cenę i nie ruszasz jej przez rok. Problem: tracisz potencjalne
                przychody z powodu zmian rynku. Rozwiązanie: testuj ceny przynajmniej raz
                na kwartał, szczególnie jeśli zmieniają się koszty lub konkurencja.
              </p>

              <h2>FAQ - Najczęściej zadawane pytania</h2>

              {faqItems.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}

              <h2>Podsumowanie</h2>
              <p>
                Strategia cenowa jest jednym z najważniejszych decyzji biznesowych,
                która bezpośrednio wpływa na rentowność. Nie jest to decyzja jednorazowa
                - wymaga regulacyjnych testów, monitorowania konkurencji i analizy danych.
              </p>
              <p>
                Kluczowe wnioski:
              </p>
              <ul>
                <li>Wybierz model cenowy odpowiedni dla Twojej branży i konkurencji</li>
                <li>Analizuj koszty, wartość dla klienta i ceny konkurencji</li>
                <li>Testuj ceny na małych segmentach przed wdrożeniem</li>
                <li>Monitoruj KPI i elastyczność popytu</li>
                <li>Optymalizuj ceny regularnie - co kwartał to minimum</li>
              </ul>
              <p>
                Pamiętaj: wzrost ceny o 1% może zwiększyć zysk o 3-7%. Dlatego optymalizacja
                strategii cenowej to najszybszy sposób na zwiększenie rentowności bez zwiększania
                ruchu czy kosztów marketingu.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 my-8 text-center">
                <h3 className="text-xl font-bold mb-4 mt-0">Potrzebujesz pomocy w opracowaniu strategii cenowej?</h3>
                <p className="mb-6">
                  Fotz Studio przeprowadzi analizę Twojej struktury cenowej, konkurencji
                  i opracuje rekomendacje na wzrost rentowności.
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

            {/* SEO Article Section */}
            <div className="mt-12 pt-12 border-t border-border">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Strategia cenowa dla biznesu - jak ustalić ceny, które zwiększają przychód?</h2>
              <p className="text-muted-foreground mb-6">Strategia cenowa (pricing strategy) to jeden z czterech filarów marketingu (junto z produktem, promocją i dystrybucją). Wpływa na pozycję marki, rentowność i decyzje zakupowe klientów. Odpowiednia strategia cenowa może zwiększyć przychód o 10-30% bez zmiany produktu czy zwiększania kosztów marketingu.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Modele cenowe - cost-plus, value-based i competitive pricing</h2>
              <p className="text-muted-foreground mb-6">Każda firma może wybrać spośród sześciu głównych modeli: cost-plus (cena oparta na kosztach), value-based (oparta na wartości dla klienta), competitive (konkurencyjna), premium (wyższa niż konkurencja), freemium (darmowe + płatne) i dynamic (zmienna). Wybór modelu zależy od branży, typu produktu i pozycjonowania marki.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Analiza cenowa i testy cen - jak znaleźć optymalną cenę</h2>
              <p className="text-muted-foreground mb-6">Optymalna cena to wynik analizy: kosztów produkcji, percepcji wartości przez klientów, cen konkurencji i testów A/B. Firmy które testują ceny regularnie mogą zwiększyć przychód o 5-15%. Dynamic pricing (zmienne ceny zależnie od popytu) może zwiększyć przychód o 2-25% w zależności od branży.</p>

              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Polityka cenowa firmy - implementacja i monitorowanie</h2>
              <p className="text-muted-foreground">Polityka cenowa to nie jednorazowa decyzja - wymaga regulacyjnych testów, monitorowania konkurencji i analizy elastyczności popytu. Kluczowe KPI to przychód, marża zysku, wolumen sprzedaży i Customer Lifetime Value. Fotz Studio pomaga firmom w opracowaniu i optymalizacji strategii cenowej, aby maksymalizować rentowność i wzrost.</p>
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
            </div>
            </div>


      {/* Related Articles */}
      <RelatedArticles currentArticleId="strategia-cenowa" />
    </Layout>
  );
}
