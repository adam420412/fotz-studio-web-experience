import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShoppingCart, DollarSign, Globe, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const breadcrumbs = [
  { label: "Strona główna", url: "/" },
  { label: "Blog", url: "/blog" },
  { label: "Dropshipping w Polsce", url: "/blog/dropshipping-polska" }
];

const faqItems = [
  {
    question: "Czy dropshipping jest legalny w Polsce?",
    answer: "Tak, dropshipping jest legalny w Polsce. Jednak musisz być zarejestrowany jako przedsiębiorca — JDG, S.C., Sp. z o.o. lub inna forma. Musisz zbierać VAT (23% w Polsce), rozliczać się z US, i respektować RODO (GDPR). Dostawcy muszą też być zarejestrowani. Wiele platform (Shopify, WooCommerce) ułatwia formalne rozliczenia."
  },
  {
    question: "Ile można zarobić na dropshippingu?",
    answer: "To zależy od marge i wolumenu sprzedaży. Średnie marże: 30–50% na produktach. Jeśli sprzedajesz 100 produktów/mies za 100 PLN każdy (10k PLN przychodu), przy marży 40% — 4k PLN zysku brutto. Jednak pierwszy rok to raczej inwestycja (marketing, testy produktów). Realny zarobek: 2–5k PLN/mies w pierwszym roku, 10–30k PLN/mies w roku drugim+ (zależy od marki)."
  },
  {
    question: "Jaka platformy dropshipping polecacie?",
    answer: "Shopify (najpopularniejsza, najłatwiejsza, 29–299 USD/mies), WooCommerce (open-source, pełna kontrola, hosting osobno), PrestaShop (dobre dla średnich sklepów), Shoper (polska platforma, dobra integracja z dostawcami PL). Dla początkujących: Shopify. Dla zaawansowanych: WooCommerce. Dla firm średnich: Shoper lub PrestaShop."
  },
  {
    question: "Które są najlepsze hurtownie dropshipping w Polsce?",
    answer: "Korepetycje.net, Alibabafactory.pl, CJ Dropshipping (globalne, ale dostawa do Polski), Aliexpress (najbudżetowsze, najwolniejsze). Dla produktów elektronicznych: hurtownie z eTail Poland, TechHub. Dla odzieży: Fashion.pl, Onyx Company. Dla wydruków: Printful, Printables. Sprawdź recenzje dostawcy — ważne są: szybkość dostawy, jakość produktów, obsługa klienta."
  },
  {
    question: "Ile kosztuje uruchomienie sklepu dropshipping?",
    answer: "Hosting + domena: 50–200 PLN/mies. Platforma (Shopify): 29–299 USD/mies (~120–1200 PLN). Apps i dodatki: 50–500 PLN/mies. Marketing (Google Ads, Facebook): 1000–5000 PLN/mies minimum. Razem: 2000–8000 PLN/mies. Jednak bez marketingu — nie będziesz miał sprzedaży. Budżet marketing = co najmniej 2x budżet na platform."
  },
  {
    question: "Czy mam szanse konkurować na dropshippingu w Polsce?",
    answer: "Tak, ale musisz się wyróżnić. Dropshipping nie działa już sam w sobie (wszyscy robią to samo). Musisz: (1) znaleźć niszę (produkty dla konkretnej grupy), (2) zbudować markę (logo, wizualne), (3) robić marketing (SEO, Ads, social), (4) mieć doskonałą obsługę. Większość sklepów zamyka się w ciągu 6 miesięcy bo nie inwestują w marketing i markę. Inwestuj co najmniej 20% przychodu w marketing."
  }
];

export default function BlogDropshippingPolska() {
  const publicationDate = "2025-04-11";
  const modifiedDate = "2025-04-11";

  return (
    <>
      <SEOHead
        title="Dropshipping w Polsce 2025 | Fotz Studio"
        description="Dropshipping w Polsce 2025. Poradnik: jak zacząć, platformy, dostawcy, koszty, marże, VAT, RODO. Sprawdź czy dropshipping jest dla Ciebie."
        canonical="https://fotz.pl/blog/dropshipping-polska"
        keywords="dropshipping Polska, jak zacząć dropshipping, platformy dropshipping, dostawcy, koszty, marża"
      />

      <ArticleSchema
        headline="Dropshipping w Polsce 2025 — kompletny poradnik dla początkujących"
        description="Komprehensywny poradnik o dropshippingu w Polsce. Wszystko co musisz wiedzieć: co to jest, jak działa, platformy, dostawcy, koszty, marże, VAT, konkurencja."
        author="Fotz"
        datePublished={publicationDate}
        dateModified={modifiedDate}
        image="https://fotz.pl/images/dropshipping.jpg"
      />

      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        {/* Hero Section */}
        <section className="min-h-[500px] bg-gradient-to-br from-green-600 to-green-800 text-white flex items-center py-20">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Dropshipping w Polsce 2025 — kompletny poradnik dla początkujących
              </h1>
              <p className="text-xl sm:text-2xl mb-4 text-green-100">
                150 osób miesięcznie szuka <strong>"dropshipping polska"</strong>. Czy chcesz wiedzieć czy dropshipping jest dla Ciebie?
              </p>
              <p className="text-lg text-green-200 mb-8">
                Przewodnik: od zera do sprzedaży. Co to jest dropshipping, jak działa w Polsce, jakie są platformy, dostawcy, koszty, marże, VAT, RODO, konkurencja. Czy można zarobić? Realnie — tak, ale wymaga pracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-100"
                  asChild
                >
                  <Link to="#contact">
                    Potrzebujesz strony e-commerce?
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-green-700"
                >
                  Czytaj dalej
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Co to jest dropshipping? */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Co to jest dropshipping?</h2>
                <div className="bg-gray-50 p-8 rounded-lg mb-8 border-l-4 border-green-600">
                  <p className="text-gray-800 font-semibold">
                    Dropshipping to model sprzedaży, gdzie Ty sprzedajesz produkty (na Twojej stronie), ale nie posiadasz magazynu. Zamiast tego: klient kupuje na Twojej stronie → Ty zamawiasz towar u dostawcy → dostawca wysyła bezpośrednio do klienta. Ty zarabiasz różnicę między ceną sprzedaży a ceną dostawcy.
                  </p>
                </div>

                <p>
                  Przykład: Kupujesz kosz za 20 PLN u dostawcy, sprzedajesz na swojej stronie za 60 PLN. Marża: 40 PLN (przed kosztami marketingu i platformy).
                </p>

                <p>
                  Zalety dropshippingu:
                </p>
                <ul className="space-y-2">
                  <li>Niska inwestycja początkowa (brak magazynu, brak towaru na stanie)</li>
                  <li>Można testować produkty szybko (nie ryzykujesz dużymi zapasami)</li>
                  <li>Skalowalne — bez limitów liczby produktów (platforma pobiera opłatę %)</li>
                  <li>Pracujesz z domu — nie potrzebujesz biura, magazynu, pracowników (na początek)</li>
                </ul>

                <p>
                  Wady dropshippingu:
                </p>
                <ul className="space-y-2">
                  <li>Marża zwykle 30–50% (mniejsza niż sprzedaż tradycyjna)</li>
                  <li>Konkurencja — każdy może zrobić to samo (brak barier wejścia)</li>
                  <li>Obsługa klienta — musisz radzić sobie z reklamacjami, zwrotami, problemami dostawcy</li>
                  <li>Zyski zaczynają się po 3–6 miesiącach (jeśli inwestujesz w marketing)</li>
                </ul>
              </article>

              {/* Jak działa dropshipping w Polsce? */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Jak działa dropshipping w Polsce?</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Aspekty prawne</h3>
                <p>
                  Dropshipping w Polsce podlega następującym regulacjom:
                </p>
                <ul className="space-y-2">
                  <li><strong>Rejestracja działalności:</strong> Musisz być zarejestrowany jako przedsiębiorca (JDG, S.C., Sp. z o.o.). Nie możesz pracować "na czarno".</li>
                  <li><strong>VAT:</strong> W Polsce VAT to 23%. Jeśli przychód roczny powyżej 200k PLN, musisz się zarejestrować do VAT. Poniżej — możesz działać na małych stawkach (2%, 3% od przychodu).</li>
                  <li><strong>PIT/CIT:</strong> Musisz rozliczać się z Urzędem Skarbowym. Dochód = przychód − koszty operacyjne (platforma, hosting, marketing, dostawcy).</li>
                  <li><strong>RODO/GDPR:</strong> Gromadzisz dane klientów (email, adres, imię). Musisz mieć politykę prywatności, zgodę na przetwarzanie danych, zabezpieczenia.</li>
                  <li><strong>Regulacja e-commerce:</strong> Musisz mieć politykę zwrotów (14 dni na zmianę zdania), reklamacje, obsługę skargi.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Płatności</h3>
                <p>
                  Klienci płacą Tobie (przelewy, karty, BLIK, PayPal). Ty płacisz dostawcy (z opóźnieniem lub na zamówienie).
                  Przepływ gotówki: możesz mieć brak gotówki w pierwszych miesiącach (inwestujesz w marketing zanim zarabiasz).
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Logistyka</h3>
                <p>
                  Dostawca wysyła bezpośrednio do klienta. Masz problem? Klient pisze do Ciebie, nie do dostawcy.
                  Musisz koordynować: zgłoszenia opóźnień, reklamacji, zwrotów. Wymaga obsługi klienta 24/7 (email, chat, telefon).
                </p>
              </article>

              {/* Najlepsze platformy */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Najlepsze platformy dropshipping w Polsce</h2>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  className="space-y-6"
                >
                  {[
                    {
                      name: "Shopify",
                      price: "29–299 USD/mies",
                      pros: ["Najprostsze do uruchomienia", "Wbudowana integracja dropshipping", "Dobra obsługa", "Szablony dla e-commerce"],
                      cons: ["Droga dla początkujących", "Nie polskie pochodzenie (visa, karta kredytowa)"],
                      best: "Dla początkujących, chcących szybko startować"
                    },
                    {
                      name: "WooCommerce (WordPress)",
                      price: "50–300 PLN/mies (hosting + plugins)",
                      pros: ["Open-source, pełna kontrola", "Polska obsługa dostępna", "Taniej niż Shopify", "Elastyczne"],
                      cons: ["Wymaga więcej wiedzy technicznej", "Sama zarządzanie bezpieczeństwem"],
                      best: "Dla zaawansowanych, chcących pełnej kontroli"
                    },
                    {
                      name: "Shoper",
                      price: "200–1000 PLN/mies",
                      pros: ["Polska platforma", "Dobra integracja z polskimi dostawcami", "Obsługa PL (VAT, RODO built-in)", "Wsparcie polskie"],
                      cons: ["Mniej szablonów niż Shopify", "Mniejsza społeczność"],
                      best: "Dla firm polskich, chcących wsparcia w PL"
                    },
                    {
                      name: "PrestaShop",
                      price: "0 (open-source) + hosting",
                      pros: ["Darmowy core", "Duża społeczność", "Wiele modulów dropshipping", "Międzynarodowy"],
                      cons: ["Wymaga hostingu i konfiguracji", "Stepa uczenia"],
                      best: "Dla sklepów średnich, chcących oszczędności"
                    }
                  ].map((platform, idx) => (
                    <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h4>
                      <p className="text-green-700 font-semibold mb-4">{platform.price}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="font-semibold text-gray-800 mb-2">✓ Zalety:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            {platform.pros.map((pro, pidx) => (
                              <li key={pidx}>— {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-2">✗ Wady:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            {platform.cons.map((con, pidx) => (
                              <li key={pidx}>— {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="text-gray-700 border-t pt-3"><strong>Najlepsze do:</strong> {platform.best}</p>
                    </div>
                  ))}
                </motion.div>
              </article>

              {/* Jak znaleźć dostawców */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Jak znaleźć dostawców dropshipping?</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Hurtownie polskie:</h3>
                <ul className="space-y-2">
                  <li><strong>CJ Dropshipping:</strong> Globalne, ale dostawa do Polski. 2–5 dni wysyłki.</li>
                  <li><strong>Aliexpress:</strong> Najtańsze, ale najwolniejsze (14–30 dni). Risky dla UX.</li>
                  <li><strong>Korepetycje.net, Alibabafactory.pl:</strong> Polskie hurtownie, szybka dostawa, wsparcie PL.</li>
                  <li><strong>Shoper Marketplace:</strong> Zintegrowana lista dostawców w Shoper.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Kryteria wyboru dostawcy:</h3>
                <ul className="space-y-2">
                  <li>Szybkość dostawy (ideał: 2–5 dni)</li>
                  <li>Jakość produktu (sprawdzaj recenzje, zamów sample)</li>
                  <li>Cena (marża musi być ≥30%, idealnie 40–50%)</li>
                  <li>Obsługa (czy odpowiadają na wiadomości?)</li>
                  <li>Minimalna ilość zamówienia (ideał: brak MBO, lub 1 szt)</li>
                  <li>Zwroty i reklamacje (czy obsługują?)</li>
                </ul>
              </article>

              {/* Ile można zarobić */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Ile można zarobić na dropshippingu?</h2>

                <p>
                  To pytanie numer 1. Odpowiedź: <strong>zależy od marki, marketingu, marż, i konsystencji.</strong>
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Realny scenariusz pierwszy rok:</h3>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mb-6">
                  <p className="font-semibold text-gray-900 mb-2">Miesiąc 1–2: Wyniki (0 PLN)</p>
                  <p className="text-gray-700">Uruchamiasz stronę, pierwszy klient pojawia się po 2–4 tygodniach testowania. Bez marketingu = brak zainteresowania.</p>

                  <p className="font-semibold text-gray-900 mb-2 mt-4">Miesiąc 3–4: Pierwsze sprzedaże (500–2k PLN/mies)</p>
                  <p className="text-gray-700">Inwestujesz w Google Ads (500–1000 PLN/mies). 10–30 zamówień/mies. Dochód (marża): 500–2000 PLN, po kosztach platform i marketingu: 0–500 PLN.</p>

                  <p className="font-semibold text-gray-900 mb-2 mt-4">Miesiąc 5–12: Skalowanie (2k–10k PLN/mies)</p>
                  <p className="text-gray-700">Testować produkty, ulepszać kampanie Ads, budować organic traffic (SEO, social). Zarobek rośnie, ale wymaga inwestycji w marketing.</p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Marża i zysk:</h3>
                <ul className="space-y-2">
                  <li><strong>Marża brutto:</strong> 30–50% (różnica między ceną dostawcy a ceną sprzedaży)</li>
                  <li><strong>Koszty operacyjne:</strong> Platform (100–500 PLN), hosting (50–200 PLN), obsługa klienta (0–500 PLN), zwroty (~5–10% sprzedaży)</li>
                  <li><strong>Koszty marketingu:</strong> 1000–5000 PLN/mies (Google Ads, Facebook, email)</li>
                  <li><strong>Zysk netto:</strong> Marża brutto − koszty operacyjne − koszty marketing − podatki (PIT/VAT)</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Przykład konkretny:</h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-4">Sprzedaż 100 produktów/mies za 100 PLN każdy = 10k PLN przychodu</p>
                  <ul className="space-y-2 text-gray-800">
                    <li>Marża: 40% = 4000 PLN</li>
                    <li>Koszt platform: -300 PLN</li>
                    <li>Marketing (Google Ads): -2000 PLN</li>
                    <li>Zwroty/reklamacje: -200 PLN</li>
                    <li>Zysk brutto: 1500 PLN</li>
                    <li>Podatki PIT (~32%): -480 PLN</li>
                    <li><strong>Zysk netto: ~1000 PLN</strong></li>
                  </ul>
                  <p className="text-gray-700 mt-4 text-sm">Nota: To jest dla 100 zamówień. Większość sklepów ma 0–10 zamówień w pierwszym miesiącu. Wymaga 3–6 miesięcy aby osiągnąć 100 zamówień/mies.</p>
                </div>
              </article>

              {/* Koszty */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Koszty rozpoczęcia dropshippingu</h2>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Koszty początkowe (jednorazowe):</h4>
                  <ul className="space-y-2 text-gray-800">
                    <li>Domena: 30–50 PLN/rok</li>
                    <li>Logo/branding: 500–2000 PLN (lub gratis na Fiverr)</li>
                    <li>Zdjęcia produktów: 0 (używasz od dostawcy) − 1000 PLN (custom photography)</li>
                    <li>Konsultacja prawna (VAT, rejestracja): 0–1000 PLN</li>
                    <li><strong>Razem: 500–4000 PLN</strong></li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-gray-900 mb-4">Koszty miesięczne:</h4>
                  <ul className="space-y-2 text-gray-800">
                    <li>Hosting + domena: 50–200 PLN</li>
                    <li>Platforma (Shopify/Shoper/itd): 200–1200 PLN</li>
                    <li>Apps (email, upsells, SEO): 100–500 PLN</li>
                    <li>Marketing minimum (bez niego = 0 sprzedaży): 1000–5000 PLN</li>
                    <li><strong>Razem: 1500–7000 PLN</strong></li>
                  </ul>
                  <p className="text-gray-700 mt-4 text-sm">Bez marketingu − żaden zarobek. Musisz inwestować co najmniej 1500 PLN/mies.</p>
                </div>
              </article>

              {/* SEO dla dropshipping */}
              <article className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Dlaczego dobra strona i SEO to key dla dropshippingu?</h2>

                <p>
                  Większość dropshipping sklepów czekają na Google Ads. To błąd. Dlaczego?
                </p>

                <ul className="space-y-2">
                  <li><strong>Organic traffic (SEO) jest "free"</strong> — raz pozycjonujesz keyword, traffic przychodzi bezpłatnie przez lata</li>
                  <li><strong>Google Ads kosztuje:</strong> 500–5000 PLN/mies tylko aby testować. Sustainable? Tylko jeśli margin jest duża (40%+)</li>
                  <li><strong>SEO + Ads razem = best</strong> — Ads dla szybkich wyników (miesiąc 1–3), SEO dla long-term (3–12 mies+)</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Jak robić SEO dla sklepu dropshipping?</h3>

                <ul className="space-y-2">
                  <li><strong>Keyword research:</strong> Nie konkuruj za "koszyk" (10k wyników). Preferuj long-tail: "koszyk hamaków dla psa" (50 wyników). Marża na long-tail keywords jest lepsza.</li>
                  <li><strong>Content marketing:</strong> Blogi, porady, przewodniki. Np. "Jak wybrać koszyk dla psa" — drive traffic, potem sprzedaż.</li>
                  <li><strong>On-page SEO:</strong> Meta tags, heading structure, internal links, schema markup (producta, price, reviews).</li>
                  <li><strong>Backlinks:</strong> Guest posts na blogach o zwierzakach, recenzje produktów, influencer partnerships.</li>
                </ul>

                <p className="bg-green-50 p-4 rounded border-l-4 border-green-600 mt-6">
                  <strong>Pro tip:</strong> Dropshipping sklepy z dobrym SEO mają 40–60% organic traffic. To zmienia game — nie depends tylko od Ads.
                </p>
              </article>

              {/* FAQ */}
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęstsze pytania o dropshipping</h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-200 rounded-lg px-6 data-[state=open]:bg-green-50">
                      <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-green-600 py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <FAQSchema
                  items={faqItems.map(item => ({
                    question: item.question,
                    answer: item.answer
                  }))}
                />
              </article>
            </div>
          </section>
        </FadeInView>

        {/* CTA Strony e-commerce */}
        <FadeInView>
          <section className="py-16 bg-blue-50 border-t border-b border-blue-200">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Czy potrzebujesz profesjonalnej strony e-commerce?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Dropshipping wymaga dobrej strony. Projektujemy sklepy zoptymalizowane pod SEO i konwersję. Shopify, WooCommerce, Shoper — wybieramy razem z Tobą.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  asChild
                >
                  <Link to="/uslugi/tworzenie-stron-internetowych">
                    Dowiedz się więcej o naszych stronach e-commerce
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </FadeInView>

        {/* Contact Section */}
        <ContactSection
        />
      </Layout>
    </>
  );
}
