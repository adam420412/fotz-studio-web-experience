import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { FAQSchema, ArticleSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Ile kosztuje sklep internetowy miesięcznie?",
    answer: "Shoper: 99-299 zł/mies. WooCommerce (DIY): 200 zł hosting + wtyczki 500-1500 zł = 200-1700 zł/mies. Shopify: 130-400 zł/mies. PrestaShop (DIY): od 200 zł/mies. Agencja: od 5000-15000 zł jednorazowo + 300-500 zł/mies support."
  },
  {
    question: "Czy potrzebuję działalność gospodarczą aby otwórzyć sklep?",
    answer: "Na początek wystarczy JDG (jednoosobowa działalność gospodarcza). Możesz sprzedawać do ~200 000 zł przychodu rocznie bez VAT. Większe sklepy wymagają rejestracji VAT. Rejestracja JDG to kwestia 1-2 dni w ZUS."
  },
  {
    question: "Jaka platforma e-commerce jest najlepsza w Polsce?",
    answer: "Szpaler opcji: Shoper (najpopularniejsza w PL, prostsza obsługa), WooCommerce (najgorsza elastyczność, ale wymaga wiedzy technicznej), Shopify (na start), IdoSell (dla dużych sklepów). Polecamy Shoper dla biznesu &lt; 10k produktów, WooCommerce dla custom rozwiązań."
  },
  {
    question: "Ile trwa założenie sklepu internetowego?",
    answer: "Szybko: Shoper na własną rękę - 1-2 dni. WooCommerce DIY - 3-5 dni + wymagana wiedza techniczna. Przez agencję: 4-12 tygodni (zależy od zakresu integracji, liczby produktów, funkcji custom)."
  },
  {
    question: "Jak zadbać o bezpieczeństwo płatności w sklepie?",
    answer: "Kluczowe: SSL/TLS certyfikat (https), PCI DSS compliance (dla Przelewy24/PayU), bezpieczne hasła admina, regularne backupy, wtyczki bezpieczeństwa (Wordfence dla WP). Przelewy24 i PayU obsługują całą złożoność płatności za Ciebie — Ty dostajesz tylko powiadomienie o transakcji."
  },
  {
    question: "Czy sklep WooCommerce jest trudny w obsłudze?",
    answer: "WooCommerce jest intuicyjny dla dodawania produktów i zarządzania zamówieniami. Trudniejsze jest: aktualizacja wtyczek, zarządzanie wydajnością, integracje niestandardowe. Polecamy szkolenie od agencji (1-2 dni) lub miesięczny support."
  },
  {
    question: "Jak promować nowy sklep internetowy?",
    answer: "Kanały (raczej w tej kolejności): 1) Google Ads (Shopping/zakupy) - szybki traffic. 2) Allegro na początek (FAST). 3) Instagram/Facebook Ads (niskich kosztów traffic). 4) SEO (6-12 miesięcy, długoterminowo). 5) Email marketing (dla repeat customers). 6) Influencerzy (dla niszowych produktów)."
  },
  {
    question: "Kiedy warto zlecić sklep agencji vs DIY?",
    answer: "DIY (Shoper): jeśli sprzedajesz &lt; 500 produktów, masz czas na naukę, budżet &lt; 2000 zł. Agencja: jeśli chcesz custom design, integracje (ERP/CRM), sprzedaż &gt; 500 produktów, nie masz czasu na naukę. Agencja = profesjonalizm + wsparcie, ale koszt wyższy."
  },
];

export default function BlogJakZalozycSklep() {
  return (
    <>
      <SEOHead
        title="Jak założyć sklep internetowy? Kompletny poradnik 2025 | Fotz.pl"
        description="Jak założyć sklep internetowy krok po kroku? Wybór platformy, koszty, wymagania prawne i marketing. Praktyczny przewodnik dla przedsiębiorców 2025."
        ogType="article"
        canonical="https://fotz.pl/blog/jak-zalozyc-sklep-internetowy"
        keywords="jak założyć sklep internetowy, tworzenie sklepu online, platforma e-commerce, WooCommerce, Shoper, poradnik 2025"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Jak założyć sklep internetowy? Kompletny poradnik 2025",
            "description": "Krok po kroku - jak otworzyć sklep online, wybór platformy, koszty, wymagania prawne, marketing",
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
            "datePublished": "2025-02-01",
            "dateModified": "2025-04-01",
            "image": "https://fotz.pl/og-sklep.jpg"
          }
        ]}
      />

      <FAQSchema items={faqItems} />
      <ArticleSchema
        headline="Jak założyć sklep internetowy? Kompletny poradnik 2025"
        description="Krok po kroku - jak otworzyć sklep online, wybór platformy, koszty, wymagania prawne, marketing"
        datePublished="2025-02-01"
        dateModified="2025-04-01"
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
              <span className="text-foreground">Jak założyć sklep internetowy?</span>
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
                  E-COMMERCE
                </span>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Jak założyć sklep internetowy? Kompletny poradnik 2025
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Przewodnik krok po kroku — od wyboru platformy przez koszty, wymagania prawne, po marketing. Wszystko co musisz wiedzieć aby otworzyć profesjonalny sklep online.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>1 lutego 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>15 min czytania</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>FOTZ Studio</span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Czy warto otwierać sklep internetowy?</h2>
                <p className="text-muted-foreground">
                  E-commerce w Polsce to ponad 120 miliardów złotych obrotów rocznie (2024). 80% Polaków kupuje online. To nie trend — to rzeczywistość. Ale czy warto otwierać SWÓJ sklep czy sprzedawać na Allegro?
                </p>
                <p className="text-muted-foreground">
                  <strong>Zalety własnego sklepu:</strong> pełna kontrola nad brandingiem, marża wyższa (nie płacisz prowizji Allegro 3-15%), dostęp do danych klientów (email, historia zakupów), długoterminowa wartość biznesu.
                </p>
                <p className="text-muted-foreground">
                  <strong>Wady:</strong> trzeba budować ruch (SEO/Ads), odpowiedzialność za podatki/RODO, obsługa techniczna. Czasem lepiej na START sprzedawać na Allegro, a sklep własny budować równolegle.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Jaką platformę e-commerce wybrać?</h2>
                <p className="text-muted-foreground">
                  Porównanie najpopularniejszych platform w Polsce:
                </p>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-8 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-3 font-bold">Platforma</th>
                        <th className="text-left py-2 px-3 font-bold">Koszt</th>
                        <th className="text-left py-2 px-3 font-bold">Dla kogo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-3"><strong>Shoper</strong></td>
                        <td className="py-3 px-3">99-299 zł/mies.</td>
                        <td className="py-3 px-3">Polski startup, łatwa obsługa, szybki start</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-3"><strong>WooCommerce</strong></td>
                        <td className="py-3 px-3">200-1700 zł/mies.</td>
                        <td className="py-3 px-3">Custom rozwiązania, wymaga wiedzy tech.</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-3"><strong>Shopify</strong></td>
                        <td className="py-3 px-3">130-400 zł/mies.</td>
                        <td className="py-3 px-3">Premiumowe rozwiązanie, intuicyjne, globalne</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-3"><strong>PrestaShop</strong></td>
                        <td className="py-3 px-3">200-500 zł/mies.</td>
                        <td className="py-3 px-3">Zaawansowani użytkownicy, open-source</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3"><strong>IdoSell</strong></td>
                        <td className="py-3 px-3">Od 199 zł/mies.</td>
                        <td className="py-3 px-3">Duże sklepy, B2B, integracje ERP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Jak założyć sklep WooCommerce krok po kroku</h2>
                <p className="text-muted-foreground">
                  WooCommerce to najpopularniejsze rozwiązanie w Polsce dla sklepów o średniej wielkości. Oto jak go otworzyć:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">Krok 1: Domena + hosting</h4>
                  <p className="text-muted-foreground mb-3">
                    Domena (.pl): 20-50 zł/rok. Hosting: 150-400 zł/rok. Razem 200-400 zł rocznie. Polecane: nazwa.pl (domena), nazwa.pl/hosting (polski provider), lub OVH (międzynarodowy, taniej).
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">Krok 2: Instalacja WordPressa i WooCommerce</h4>
                  <p className="text-muted-foreground mb-3">
                    Większość hostingów ma 1-klik instalacja WordPressa. WooCommerce instalujesz jako plugin (darmowy). Łatwe, bez kodowania.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">Krok 3: Motyw sklepu</h4>
                  <p className="text-muted-foreground mb-3">
                    Darmowy: Astra, Storefront. Premium: Neve (99-300 zł). Template sklepu zawiera design + funkcje. Nie koduj, nie majaczeń — weź gotowy template i dostosuj kolory/loga.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">Krok 4: Kluczowe wtyczki</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>- <strong>Płatności:</strong> WooCommerce Przelewy24 (darmowa)</li>
                    <li>- <strong>SEO:</strong> Yoast SEO (darmowa, premium 99 zł/rok)</li>
                    <li>- <strong>Bezpieczeństwo:</strong> Wordfence (darmowa)</li>
                    <li>- <strong>Wydajność:</strong> WP Rocket (39-99 zł/rok)</li>
                    <li>- <strong>Kopie zapasowe:</strong> UpdraftPlus (darmowa)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">Krok 5: Konfiguracja dostawy</h4>
                  <p className="text-muted-foreground mb-3">
                    InPost (paczkomaty) - najniższe koszty, najpopularniejsze w PL. DPD, DHL, UPS - dla paczek większych. Integracja z WooCommerce przez BaseLinker (automatyczne etykiety i śledzenie).
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">Krok 6: Strony prawne</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>- Regulamin sklepu (obowiązkowy)</li>
                    <li>- Polityka RODO i cookies</li>
                    <li>- Prawo zwrotu (14 dni dla konsumentów)</li>
                    <li>- Kasa fiskalna online (jeśli wymagana w Twojej branży)</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Ile kosztuje założenie sklepu internetowego?</h2>
                <p className="text-muted-foreground">
                  Łączna wycena dla DIY:
                </p>
                <ul className="text-muted-foreground space-y-2 my-6">
                  <li>- Domena + hosting: 200-400 zł rocznie</li>
                  <li>- Motyw premium: 300 zł (jednorazowo)</li>
                  <li>- Wtyczki (bezpłatne): 0 zł</li>
                  <li>- Wtyczki premium: 500-1500 zł</li>
                  <li>- <strong>Razem DIY: 1000-2500 zł rocznie</strong></li>
                </ul>

                <p className="text-muted-foreground">
                  Jeśli zlecisz agencji: 3000-15000 zł jednorazowo + 300-500 zł/mies. support. Ale dostajesz profesjonalny design, integracje, SEO, szkolenie.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Wymagania prawne dla sklepu internetowego w Polsce</h2>
                <ul className="text-muted-foreground space-y-4">
                  <li><strong>Regulamin sklepu:</strong> obowiązkowy. Zawiera: warunki sprzedaży, zasady zwrotu, opłaty za dostawę.</li>
                  <li><strong>RODO i polityka cookies:</strong> wymagane od 2018. Bez tego = grzywna do 10 mln zł.</li>
                  <li><strong>Prawa konsumenta:</strong> 14 dni na zwrot (obowiązkowe dla e-commerce).</li>
                  <li><strong>Kasa fiskalna online (JPK):</strong> wymagana dla handlu detalicznego. Freelancerzy/usługi = zwolnieni.</li>
                  <li><strong>Rejestracja działalności:</strong> JDG wystarczy na start. Do ~200k zł przychodu rocznie bez VAT.</li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Marketing sklepu internetowego — jak zdobyć pierwszych klientów?</h2>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">1. SEO sklepu</h4>
                  <p className="text-muted-foreground">
                    Optymalizuj karty produktów (meta tytuły, opisy, słowa kluczowe), kategorie, blog. Google pokaże Cię dla "Twoja kategoria + region" naturalnie. Wymaga 6-12 miesięcy, ale zwraca się na lata.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">2. Google Ads (Shopping/Zakupy)</h4>
                  <p className="text-muted-foreground">
                    Najszybszy ruch. Twoje produkty pojawiają się w Google Shopping. Budżet 50-500 zł/dzień na start. ROAS (przychód/wydatek) powinien być &gt; 3x.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">3. Facebook/Instagram Ads</h4>
                  <p className="text-muted-foreground">
                    Niski koszt klikniecia (0.5-2 zł), dobry dla mody/akcesoriów. Budżet 100-300 zł/dzień. Wymaga dobrych fotek produktów.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 my-8">
                  <h4 className="font-bold text-foreground mb-4">4. Allegro na start</h4>
                  <p className="text-muted-foreground">
                    300 mln potencjalnych klientów. Allegro bierze 3-15% prowizji, ale daje ruch od razu. Zalecamy sprzedaż na Allegro + równolegle budowanie własnego sklepu.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Najczęstsze błędy przy zakładaniu sklepu</h2>
                <ol className="text-muted-foreground space-y-4">
                  <li><strong>1. Brak SEO-optymalizacji:</strong> strona piękna, ale nikt jej nie widzi w Google. Wynik: trzeba wydawać na reklamy.</li>
                  <li><strong>2. Zła obsługa klienta:</strong> brak odpowiedzi, brak polityki zwrotów. Wynik: złe recenzje, brak powtórnych zakupów.</li>
                  <li><strong>3. Wolne ładowanie:</strong> każda sekunda opóźnienia = 5% mniej sprzedaży. Testuj na PageSpeed Insights.</li>
                  <li><strong>4. Zbyt mało produktów na start:</strong> 50-100 produktów to minimum. Mniej = mało ruchu.</li>
                  <li><strong>5. Brak integracji logistyki:</strong> ręczne etykiety = marnowanie czasu. Użyj BaseLinker.</li>
                </ol>

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-8 mt-12">
                  <h4 className="font-bold text-foreground mb-3">Podsumowanie</h4>
                  <p className="text-muted-foreground">
                    Założenie sklepu internetowego to realny proces dla każdego. Od ideacji do pierwszej sprzedaży: 1-3 miesiące. Koszt DIY: 1-3k zł. Koszt przez agencję: 5-15k zł + support.
                  </p>
                  <p className="text-muted-foreground mt-3">
                    Kluczowe: wybierz platformę (Shoper/WooCommerce na start), zadbaj o prawo (regulamin, RODO), zaplanuj marketing (SEO + Ads). Reszta to iteracja.
                  </p>
                </div>
              </motion.div>

              {/* FAQ */}
              <FadeInView>
                <section className="py-12 border-t-2">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Pytania i odpowiedzi</h2>

                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border-b">
                        <AccordionTrigger className="text-left py-4 hover:no-underline">
                          <span className="font-semibold text-foreground text-lg">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              </FadeInView>

              {/* Related */}
              <FadeInView>
                <section className="mt-16 pt-12 border-t-2">
                  <RelatedArticles
                    currentId="jak-zalozyc-sklep"
                    category="e-commerce"
                  />
                </section>
              </FadeInView>

              <FadeInView>
                <section className="mt-12">
                  <RelatedServices category="e-commerce" />
                </section>
              </FadeInView>
            </div>
          </div>
        </article>

        {/* CTA */}
        <ContactSection
          heading="Chcesz profesjonalny sklep internetowy?"
          subheading="Nasza agencja tworzy sklepy WooCommerce, Shopify i Shoper z pełną obsługą. Konsultacja bezpłatna."
        />
      </Layout>
    </>
  );
}
