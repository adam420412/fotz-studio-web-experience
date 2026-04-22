import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShoppingCart, TrendingUp, Globe, DollarSign } from "lucide-react";
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

export default function BlogEcommerceCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "E-commerce — co to jest? Handel elektroniczny — poradnik" },
  ];

  const ecommerceModels = [
    { model: "B2C (Business to Consumer)", przyklady: "Allegro, Zalando, H&M online, sklep producenta", desc: "Firma sprzedaje bezposrednio konsumentom." },
    { model: "B2B (Business to Business)", przyklady: "Hurt online, platforma zakupowa dla firm", desc: "Transakcje miedzy firmami — hurtownie, przetargi." },
    { model: "C2C (Consumer to Consumer)", przyklady: "OLX, Vinted, Facebook Marketplace", desc: "Konsumenci sprzedaja innym konsumentom." },
    { model: "D2C (Direct to Consumer)", przyklady: "Nike.com, Apple Store, marki DTC", desc: "Producent sprzedaje bezposrednio, omijajac posrednikow." },
    { model: "Marketplace", przyklady: "Allegro, Amazon, Etsy", desc: "Platforma agregujaca wielu sprzedawcow." },
    { model: "Dropshipping", przyklady: "Sklep bez magazynu — dostawca wysy la do klienta", desc: "Sprzedaz bez posiadania wlasnego towaru." },
  ];

  const faqItems = [
    {
      question: "Co to jest e-commerce?",
      answer:
        "E-commerce (handel elektroniczny) to kupowanie i sprzedawanie towarow lub uslug przez internet — w sklepach internetowych, na platformach marketplace lub przez aplikacje mobilne. E-commerce to jedna z najszybciej rosnacych galezi gospodarki: wartosc polskiego rynku e-commerce: ok. 100 mld zl (2024). Glowne platformy w Polsce: Allegro (lider), Amazon, Empik.com, Zalando. Modele e-commerce: B2C (firma do konsumenta), B2B (firma do firmy), C2C (uzytkownik do uzytkownika). E-commerce obok tradycyjnego handlu stacjonarnego to dwa kanaly sprzedazy — dzis wiele firm laczy oba (omnichannel).",
    },
    {
      question: "Jak zalozyc sklep internetowy?",
      answer:
        "Kroki do zalozenia sklepu internetowego: 1) Wybierz niche i produkt — sprawdz popyt (Google Trends, Ahrefs), marze i konkurencje. 2) Wybierz platforme e-commerce: Shopify (najpopularniejszy, abonament od 29 USD/mies.), WooCommerce (darmowy plugin do WordPress, wlasny hosting), PrestaShop (open source, dla wiekszych), IdoSell (polskie rozwiazanie dla B2C i B2B). 3) Zarejestruj firme (JDG w CEIDG lub spolke). 4) Skonfiguruj platnosci: Przelewy24, PayU, Stripe. 5) Wybierz dostawe: InPost (paczkomaty), DHL, Poczta Polska. 6) Zadbaj o SEO i marketing (Google Shopping, Facebook Ads).",
    },
    {
      question: "Ile kosztuje zalozenie sklepu internetowego?",
      answer:
        "Koszty uruchomienia sklepu internetowego: Sklep na Shopify: 29-299 USD/mies. + prowizja od transakcji. Sklep na WooCommerce: hosting ok. 50-200 zl/mies., domena ok. 50 zl/rok, plugin WooCommerce darmowy, ale dodatkowe wtyczki 0-500 zl. Projekt graficzny sklepu: 2 000-20 000 zl (agencja) lub 500-2 000 zl (gotowy motyw). Wdrozenie e-commerce przez agencje: 5 000-50 000 zl (w zaleznosci od skomplikowania). Zdjecia produktow: 500-5 000 zl. Marketing startowy (Google Ads): minimum 1 000-3 000 zl/mies. Calkowity budzet na start: od 5 000 zl (sklep DIY) do 100 000 zl (profesjonalny projekt).",
    },
    {
      question: "Czym rozni sie sklep na Allegro od wlasnego sklepu?",
      answer:
        "Allegro vs wlasny sklep internetowy: Allegro — gotowy ruch klientow, brak kosztow budowania brand, prowizja 5-15% od transakcji, wysokie koszty przy duzych obrotach, klientela lojalnie do Allegro (nie do marki). Wlasny sklep — brak prowizji od sprzedazy, budowanie brandu i lojalnosci klientow, pelna kontrola nad danymi klientow i UX, koniecznosc samodzielnego pozyskiwania ruchu (SEO, Google Ads). Rekomendacja: zacznij od Allegro do walidacji produktu, a kiedy potwierdzisz popyt — zbuduj wlasny sklep i stopniowo dywersyfikuj. Nie rezygnuj z Allegro calkowicie — to cenny kanal.",
    },
    {
      question: "Jak zwiekszyc sprzedaz w sklepie internetowym?",
      answer:
        "Metody zwiekszania sprzedazy e-commerce: SEO — pozycjonowanie produktow i kategorii na frazy zakupowe (np. 'buty do biegania meskie'). Google Shopping i Performance Max — reklamy produktowe. Facebook/Instagram Ads — skuteczne dla B2C i mody. Email marketing — odzyskiwanie porzuconych koszykow (avg. 69% porzucen). Optymalizacja konwersji (CRO): uproszcz checkout, dodaj recenzje, popraw zdjecia. Retargeting — pokazuj reklamy osobom ktore odwiedzily sklep. Program lojalnosciowy — powracajacy klienci sa 5x tansi niz nowi. Kluczowy wskaznik: wspolczynnik konwersji — srednia dla e-commerce to 1-3%, powyaej 3% to dobry wynik.",
    },
    {
      question: "Jakie sa najwazniejsze metryki w e-commerce?",
      answer:
        "Kluczowe KPI dla sklepu internetowego: Wspolczynnik konwersji (CR) = liczba zakupow / liczba sesji x 100%. Srednia wartosc zamowienia (AOV) = przychody / liczba zamowien. Customer Lifetime Value (CLV) — wartosc klienta przez caly czas wspolpracy. CAC (Customer Acquisition Cost) — koszt pozyskania jednego klienta. Return Rate — procent zwrotow (wysoki = problem z jakoscia lub opisami). Cart Abandonment Rate — procent porzuconych koszykow (reduce-uj emailami!). ROAS (Return on Ad Spend) — przychod z reklam / wydatki na reklamy (dobry wynik: >4). Narzedzia analityczne: Google Analytics 4, Facebook Pixel, Hotjar (heatmapy), ClickMeter.",
    },
  ];

  return (
    <>
      <SEOHead
        title="E-commerce — co to jest? Sklep internetowy — poradnik | fotz.pl"
        description="E-commerce co to jest — wyjasnamy czym jest handel elektroniczny, jak zalozyc sklep internetowy, koszty, Allegro vs wlasny sklep i jak zwiekszyc sprzedaz."
        canonical="https://fotz.pl/blog/e-commerce-co-to-jest"

        keywords="E-commerce co to jest, E-commerce definicja, czym jest E-commerce, E-commerce przykłady, jak działa E-commerce, E-commerce znaczenie, E-commerce przewodnik"
      />
      <ArticleSchema
        title="E-commerce — co to jest? Sklep internetowy — poradnik"
        description="Czym jest e-commerce, modele (B2C, B2B, D2C), jak zalozyc sklep internetowy, koszty, Allegro vs wlasny sklep i kluczowe metryki sklepu online."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/e-commerce-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><ShoppingCart className="w-4 h-4" /> Handel online</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                E-commerce — co to jest i jak zalozyc sklep internetowy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                E-commerce to sprzedaz przez internet. Modele, platformy, koszty startu
                i jak zwiekszyc sprzedaz — wszystko co musisz wiedziec.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Modele e-commerce</h2>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {ecommerceModels.map((m, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <ShoppingCart className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <h3 className="font-bold text-slate-900 text-sm">{m.model}</h3>
                    </div>
                    <p className="text-blue-600 text-xs font-medium mb-1">{m.przyklady}</p>
                    <p className="text-slate-500 text-xs">{m.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Zbudujemy Twoj sklep internetowy</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy sklepy WooCommerce i Shopify zaprojektowane pod konwersje — z SEO, szybkoscia i UX w centrum.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie sklepow — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — E-commerce co to jest</h2>
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
