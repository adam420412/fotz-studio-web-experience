import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, ShoppingCart, Globe, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogJakSprzedawacWInternecie() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Jak sprzedawać w internecie", href: "/blog/jak-sprzedawac-w-internecie" },
  ];

  return (
    <>
      <SEOHead
        title="Jak sprzedawać w internecie 2025 — kompleksowy poradnik dla firm"
        description="Jak sprzedawać w internecie? Poradnik krok po kroku: własny sklep, marketplace, dropshipping, media społecznościowe. Zacznij sprzedaż online!"
        canonical="https://fotz.pl/blog/jak-sprzedawac-w-internecie"

        keywords="Jak sprzedawać w internecie 2025, Jak sprzedawać w internecie 2025 co to jest, Jak sprzedawać w internecie 2025 jak działa, Jak sprzedawać w internecie 2025 definicja, Jak sprzedawać w internecie 2025 przykłady, Jak sprzedawać w internecie 2025 poradnik, Jak sprzedawać w internecie 2025 przewodnik"
      />
      <ArticleSchema
        title="Jak sprzedawać w internecie 2025 — poradnik dla firm i freelancerów"
        description="Kompleksowy poradnik o sprzedaży online: modele biznesu, platformy, marketing, koszty, błędy do uniknięcia."
        author="fotz.pl"
        datePublished="2025-04-11"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl mb-16"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Jak sprzedawać w internecie 2025 — poradnik dla firm i freelancerów
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              E-commerce Polski rośnie 15-20% rocznie. Teraz dobry moment, aby zacząć.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              W tym poradniku poznasz wszystkie ścieżki do sprzedaży online: własny sklep, marketplace'i, social commerce i dropshipping.
            </p>

            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Przejdź do artykułu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto">
          {/* Wstęp */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dlaczego warto sprzedawać online?</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  E-commerce w Polsce to rynek wart miliardów złotych. Pandemia przyspieszyła transformację cyfrową o kilka lat naprzód. Teraz nawet małe firmy mogą sprzedawać na cały kraj (lub świat) bez konieczności wynajmu stacjonarnego lokalu.
                </p>
                <p>
                  Sprzedaż online ma wiele zalet:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Otwarty 24/7 — klienci mogą kupować w nocy, w weekend, o każdej porze</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Bez kosztów wynajmu lokalu — sprzedaż z domu lub małego magazynu</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Zasięg krajowy/międzynarodowy — nie ograniczaj się do lokalnego rynku</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Dane o klientach — wiesz dokładnie co i kiedy kupują</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Automatyzacja — zmniejszysz pracę manualną dzięki narzędziom</span>
                  </li>
                </ul>
              </div>
            </section>
          </FadeInView>

          {/* Modele sprzedaży */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Cztery modele sprzedaży online</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Własny sklep internetowy",
                    desc: "Twoja własna strona e-commerce (WooCommerce, Prestashop, custom). Pełna kontrola, wyższe marże.",
                    pros: "100% kontrola, marża, własne dane",
                    cons: "Wyższe koszty, sama odpowiedzialność za marketing",
                  },
                  {
                    icon: ShoppingCart,
                    title: "Marketplace (Allegro, Ceneo)",
                    desc: "Sprzedaż na istniejących platformach. Mniej pracy, mniej kosztów wstępnych.",
                    pros: "Szybki start, gotowa publika, niskie koszty",
                    cons: "Prowizje (10-15%), mniej kontroli, konkurencja",
                  },
                  {
                    icon: TrendingUp,
                    title: "Dropshipping",
                    desc: "Sprzedaż produktów dostawcy bez magazynowania. Pasywny dochód.",
                    pros: "Brak magazynu, niskie koszty startu",
                    cons: "Niskie marże, konkurencja, problemy z logistyką",
                  },
                  {
                    icon: Zap,
                    title: "Social commerce (Instagram, TikTok)",
                    desc: "Sprzedaż bezpośrednio przez Instagram/Facebook/TikTok Shop. Idealne dla influencerów.",
                    pros: "Bezpośredni kontakt, community building, niskie koszty",
                    cons: "Zależy od algorytmu, trudno skalować",
                  },
                ].map((model, idx) => (
                  <FadeInView key={idx} delay={idx * 0.1}>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg">
                      <model.icon className="w-10 h-10 text-purple-600 mb-4" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h3>
                      <p className="text-gray-700 mb-4">{model.desc}</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-green-700">
                          <strong>Plusy:</strong> {model.pros}
                        </p>
                        <p className="text-red-700">
                          <strong>Minusy:</strong> {model.cons}
                        </p>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* Własny sklep */}
          <FadeInView>
            <section className="mb-16 bg-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Własny sklep internetowy krok po kroku</h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Domena",
                    desc: "Zarejestruj domenę (.pl, .com) na GoDaddy, OVH, DuckDNS. Cena: 20-50 zł/rok",
                  },
                  {
                    step: 2,
                    title: "Hosting",
                    desc: "Wynajmij hosting (Siteground, Bluehost, Hosterion). Cena: 50-150 zł/mies",
                  },
                  {
                    step: 3,
                    title: "Platforma e-commerce",
                    desc: "Wybierz WooCommerce (WordPress), Prestashop, Shopify lub custom. Szablony kosztują 0-500 zł",
                  },
                  {
                    step: 4,
                    title: "Produkty",
                    desc: "Dodaj produkty, zdjęcia, ceny, opisy. Optymalizuj dla SEO.",
                  },
                  {
                    step: 5,
                    title: "Płatności",
                    desc: "Integruj Stripe, Przelewy24, Paypal, Tpay. Klienci powinni płacić bezpiecznie.",
                  },
                  {
                    step: 6,
                    title: "Wysyłka",
                    desc: "Umowy z kurierami (DPD, InPost, Paczkomaty). Integruj shipping API",
                  },
                ].map((item, idx) => (
                  <FadeInView key={idx} delay={idx * 0.1}>
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-sm">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-700 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* Sprzedaż na Allegro */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sprzedaż na Allegro i marketplace'ach</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Allegro, Amazon, eBay to największe marketplace'i w Polsce i Europie. Korzyści:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Już masz publiczność — miliony graczy na Allegro co miesiąc</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Szybki start — nie musisz budować sklepu od zera</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Bezpieczeństwo — Allegro pilnuje płatności (Buyer Protection)</span>
                  </li>
                </ul>

                <p>
                  Wady:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-red-500 font-bold">✕</div>
                    <span>Prowizje Allegro: 2-15% w zależności od kategorii (dodaj to do ceny!)</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-red-500 font-bold">✕</div>
                    <span>Konkurencja — inni sprzedawcy grają tobie na ceny</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-red-500 font-bold">✕</div>
                    <span>Mniej kontroli — Allegro zmienia zasady, algorytm promuje, wycofuje produkty</span>
                  </li>
                </ul>

                <p className="mt-6 font-semibold">
                  Porada: Zacznij na Allegro (szybki test), potem buduj własny sklep (skalowanie).
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Social commerce */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Social commerce — sprzedaż przez Instagram i Facebook</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Instagram Shop, Facebook Shop, TikTok Shop to nowe kanały sprzedaży. Klient widzi produkt w feed'zie, klika, kupuje — bez opuszczania aplikacji.
                </p>
                <p>
                  <strong>Jak zacząć:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-6">
                  <li>Utwórz Instagramowy biznesowy profil (free)</li>
                  <li>Aktywuj Instagram Shop (free)</li>
                  <li>Dodaj produkty (link ze sklepu lub ręcznie)</li>
                  <li>Publikuj zdjęcia/wideo produktów z "Kup" przyciskiem</li>
                  <li>Współpracuj z influencerami (affiliate marketing)</li>
                </ol>

                <p>
                  <strong>Marża:</strong> Instagram/Facebook bierze ~3-5% za płatności (jeśli sprzedajesz przez nich). Jeśli link do Twojego sklepu — brak prowizji.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Promocja */}
          <FadeInView>
            <section className="mb-16 bg-green-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Jak promować sklep online?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "SEO",
                    desc: "Pozycjonowanie w Google. Długoterminowe, najniższy koszt. Artykuły, meta tagi, linki.",
                  },
                  {
                    title: "Google Shopping",
                    desc: "Paid ads w Google. Pokazuj produkty w wynikach. CPC 0.5-5 zł. Budget kontrolujesz Ty.",
                  },
                  {
                    title: "Facebook/Instagram Ads",
                    desc: "Targeting: wiek, zainteresowania, lokalizacja. Retargeting (śledzenie wizytujących).",
                  },
                  {
                    title: "Email marketing",
                    desc: "Kup listę mailową lub zbieraj z witryny. Newsletter = 20-30% ROI.",
                  },
                  {
                    title: "Influencer marketing",
                    desc: "Współpraca z popularnym kto pokażemy produkt swoim fanom. Affiliate commission.",
                  },
                  {
                    title: "Remarketing",
                    desc: "Pokaż reklamy ludziom co widzieli Twój sklep. Konwersja 3x wyższa.",
                  },
                ].map((channel, idx) => (
                  <FadeInView key={idx} delay={idx * 0.1}>
                    <div className="bg-white p-6 rounded-lg border border-green-200">
                      <h3 className="font-bold text-gray-900 mb-2">{channel.title}</h3>
                      <p className="text-gray-700 text-sm">{channel.desc}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* Koszty */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ile kosztuje sprzedaż online?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="p-3 text-gray-900 font-semibold">Element</th>
                      <th className="p-3 text-gray-900 font-semibold">Koszt</th>
                      <th className="p-3 text-gray-900 font-semibold">Obowiązkowy?</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {[
                      { item: "Domena", cost: "20-50 zł/rok", req: "Tak" },
                      { item: "Hosting", cost: "50-150 zł/mies", req: "Tak (własny sklep)" },
                      { item: "Platforma e-commerce", cost: "0-500 zł", req: "Tak" },
                      { item: "Projekt (design + dev)", cost: "499-3999 zł", req: "Zalecane" },
                      { item: "Produkty (zdjęcia, opis)", cost: "0 zł (sam) / 50-500 zł za artykuł", req: "Obowiązkowe" },
                      { item: "SEO (content)", cost: "100-500 zł za artykuł", req: "Zalecane" },
                      { item: "Google Ads", cost: "10+ zł dziennie", req: "Opcjonalne" },
                      { item: "Facebook Ads", cost: "10+ zł dziennie", req: "Opcjonalne" },
                      { item: "Allegro prowizje", cost: "2-15% przychodu", req: "Jeśli sprzedajesz na Allegro" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-200">
                        <td className="p-3 text-gray-900">{row.item}</td>
                        <td className="p-3 text-gray-700">{row.cost}</td>
                        <td className="p-3 text-gray-700">{row.req}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-gray-700">
                <strong>Minimum do startu:</strong> ~1000 zł (domena + hosting + szablon + podstawowy projekt)
              </p>
              <p className="text-gray-700">
                <strong>Realistyczny budżet na rok:</strong> 5000-15000 zł (hosting + design + marketing)
              </p>
            </section>
          </FadeInView>

          {/* Błędy */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęstsze błędy przy sprzedaży online</h2>
              <div className="space-y-4">
                {[
                  "Słaba fotografia produktów — złe zdjęcia = mniej konwersji",
                  "Brak opisu produktu — klient nie wie co dostanie, nie kupuje",
                  "Drogi shipping — ukryte koszty wysyłki. Pokazuj ALL-IN cenę.",
                  "Słaby customer service — długie odpowiedzi, ignorowanie pytań = negatywne recenzje",
                  "Brak SEO — myślisz że Google sam Cię znajdzie? Nie, musisz się pozycjonować.",
                  "Za mały budżet na marketing — bez promocji nikt o Tobie nie wie",
                  "Brak analizy — nie sprawdzasz co się sprzedaje, co nie. Ślepą kopią graj.",
                  "Zły marketplace — sprzedajesz na Allegro ale Twoja publika jest na Facebooku. Przeanalizuj gdzie są Twoi klienci.",
                ].map((error, idx) => (
                  <FadeInView key={idx} delay={idx * 0.05}>
                    <div className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex-shrink-0 text-red-600 font-bold">✗</div>
                      <p className="text-gray-900">{error}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* FAQ */}
          <FadeInView>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pytania o sprzedaży online</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "Od czego zacząć: Allegro czy własny sklep?",
                    a: "Zacznij na Allegro lub Marketplace (2-3 tygodnie). Testuj produkty, zbieraj reviews. Potem buduj własny sklep (1-2 miesiące). To daje Ci czas na optymalizację.",
                  },
                  {
                    q: "Czy mogę sprzedawać bez rejestracji firmy?",
                    a: "Na Allegro - tak (do 50k rocznie bez podatku). Własny sklep - powinnaś zarejestrować (JDG, Sp. z o.o., S.A.). Skonsultuj się z doradcą podatkowym.",
                  },
                  {
                    q: "Ile czasu zajmuje zarabianie na e-commerce?",
                    a: "Pierwsze sprzedaże: 1-2 miesiące. Rentowność: 6-12 miesięcy. E-commerce to maraton nie sprint.",
                  },
                  {
                    q: "Czy powinienem korzystać z dropshippingu?",
                    a: "Dropshipping ma niskie marże (10-20%) i dużą konkurencję. Jeśli nie masz kapitału na magazyn - ok, ale lepiej inwestować w produkcję własną (wyższe marże).",
                  },
                  {
                    q: "Jak obsługiwać zwroty i reklamacje?",
                    a: "Miej jasną politykę zwrotów (14 dni zgodnie z UE). Szybko odpowiadaj na reklamacje. Happy customer = recenzja + powrót.",
                  },
                  {
                    q: "Czy mogę wysyłać za granicę?",
                    a: "Tak! Polska e-commerce wysyła do całej UE i świata. Dodatkowe koszty: vat, cła, ubezpieczenie. DPD, DHL, FedEx obsługują eksport.",
                  },
                  {
                    q: "Ile czasu zajmuje dostarczenie zamówienia?",
                    a: "Polska: 1-3 dni robocze (InPost Paczkomaty). UE: 5-10 dni. To parametr konkurencji - im szybciej tym lepiej.",
                  },
                  {
                    q: "Jak zdobyć pierwsze recenzje?",
                    a: "Poproś klientów o opinię (email/SMS). Oferuj dodatkowy rabat za recenzję (ale powiedz o tym). Pierwsze 10-20 opinii jest najtrudniej.",
                  },
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-semibold text-gray-900">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </FadeInView>

          {/* CTA to services */}
          <FadeInView>
            <section className="bg-blue-50 border-2 border-blue-200 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Potrzebujesz gotowego sklepu?</h2>
              <p className="text-gray-700 mb-6">
                Tworzymy sklepy internetowe gotowe do sprzedaży. Projekt, wdrożenie, integracja płatności, SEO - wszystko w jednym pakiecie.
              </p>
              <Link to="/uslugi/tworzenie-sklepow-internetowych">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Sprawdź nasze sklepy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </section>
          </FadeInView>
        </article>

        {/* Contact Section */}
        <ContactSection
        />
      </Layout>
    </>
  );
}
