import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Camera, Star, TrendingUp } from "lucide-react";
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

export default function BlogUGCCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "UGC — co to jest? User Generated Content w marketingu" },
  ];

  const ugcTypes = [
    { type: "Recenzje i opinie", platform: "Google, Trustpilot, Ceneo, Allegro", desc: "Najsilniejszy typ UGC — autentyczne opinie klientów o produkcie lub usłudze. 93% konsumentów czyta recenzje przed zakupem.", impact: "Krytyczny" },
    { type: "Zdjęcia i filmy klientów", platform: "Instagram, TikTok, Facebook", desc: "Klienci fotografują i nagrywają produkty w realnym użytkowaniu. Autentyczne, nie-stagowane treści które budują zaufanie.", impact: "Wysoki" },
    { type: "Posty social media z tagiem marki", platform: "Instagram, Twitter/X, LinkedIn", desc: "Organiczne wzmianki o marce przez użytkowników — wskaźnik zaangażowania i satysfakcji klientów.", impact: "Wysoki" },
    { type: "Komentarze i dyskusje", platform: "Reddit, Facebook Groups, fora", desc: "Dyskusje o produkcie w grupach i na forach — autentyczne rozmowy które wpływają na decyzje zakupowe.", impact: "Średni" },
    { type: "Unboxing i haul videos", platform: "YouTube, TikTok", desc: "Filmy z rozpakowywania produktów — wielki format dla e-commerce. Buduje napięcie i oczekiwania przed zakupem.", impact: "Wysoki" },
    { type: "Testimoniale i case studies", platform: "Strona firmy, LinkedIn", desc: "Formalne opinie klientów — od krótkiego cytatu po szczegółowe case study z wynikami.", impact: "Krytyczny (B2B)" },
  ];

  const collectingUGC = [
    { method: "Prośba po zakupie", desc: "Email z prośbą o zdjęcie lub opinię 7-14 dni po zakupie. Najskuteczniejszy kanał — 70% klientów zostawia opinię jeśli zostanie poproszone." },
    { method: "Branded hashtag", desc: "Twórz unikalny hashtag (#MójBrand, #BrandChallenge) i zachęcaj do używania. Monitoruj przez Brand24 lub Mention." },
    { method: "Konkurs z UGC", desc: "Poproś o zdjęcie z produktem w zamian za szansę wygrania nagrody. Generuje duże ilości UGC jednorazowo." },
    { method: "Community platformy", desc: "Forum, grupa Facebook lub Discord dla klientów — naturalnie generuje dyskusje i treści o produkcie." },
    { method: "Product review program", desc: "Wyślij produkt do testowania w zamian za recenzję (oznaczoną jako #ad lub #sponsored)." },
    { method: "Gratyfikacja za UGC", desc: "Zniżka, punkty lojalnościowe lub wyróżnienie na stronie w zamian za zdjęcie lub recenzję." },
  ];

  const faqItems = [
    {
      question: "Co to jest UGC (User Generated Content)?",
      answer: "UGC (User Generated Content, treści generowane przez użytkowników) to wszelkie treści — zdjęcia, filmy, recenzje, posty, komentarze — tworzone przez klientów i fanów marki, nie przez samą firmę. UGC różni się od treści marki autentycznością i zaufaniem — konsumenci ufają opiniom innych użytkowników 12x bardziej niż treściom marketingowym marki (Nielsen). Kategorie UGC: recenzje produktów, zdjęcia klientów, filmy unboxing, posty social media z tagiem marki, komentarze na forach. Dla marek UGC to jeden z najcenniejszych zasobów — darmowe, autentyczne treści które konwertują lepiej niż reklamy.",
    },
    {
      question: "Dlaczego UGC jest skuteczny w marketingu?",
      answer: "Skuteczność UGC wynika z kilku mechanizmów psychologicznych i biznesowych: Social proof — widzimy że inni kupili i są zadowoleni, co redukuje niepewność. Autentyczność — treści niestylizowane, z realnego życia są bardziej wiarygodne niż producke reklamy. Relatability — 'tacy jak ja' — łatwiej identyfikujemy się z innymi użytkownikami niż z perfektcyjnymi modelami. Statystyki: UGC zwiększa konwersję o 29% vs inne media (Bazaarvoice). Strony z recenzjami konwertują 270% lepiej od stron bez (Spiegel Research). Kampanie z UGC mają 50% niższy koszt pozyskania klienta. 64% millenialsów uważa UGC za bardziej godny zaufania niż treści marki.",
    },
    {
      question: "Jak zbierać UGC od klientów?",
      answer: "Strategie pozyskiwania UGC: 1) Email po zakupie — '7 dni po zakupie' flow z prośbą o zdjęcie lub recenzję. Integracje: Klaviyo, Mailchimp z Yotpo, Okendo, Trustpilot. 2) Branded hashtag — stwórz #TwójHashtag i promuj go w materiałach, opakowaniach, paragonach. 3) Konkurs — 'wstaw zdjęcie z produktem i wygraj nagrodę'. 4) Prośba in-app — aplikacje mobilne mogą prosić o recenzję po użyciu. 5) Incentive program — punkty lojalnościowe lub zniżka za recenzję lub zdjęcie. 6) Community — zbuduj grupę/forum gdzie klienci naturalnie dzielą się doświadczeniami. Narzędzia UGC: Yotpo, Stamped.io, Loox (dla Shopify), Bazaarvoice (enterprise), Brand24 (monitoring).",
    },
    {
      question: "Jak legalnie używać UGC w marketingu?",
      answer: "Aspekty prawne UGC: Nie możesz używać treści stworzonych przez użytkowników bez ich zgody — nawet jeśli wspomnieli Twoją markę. Jak uzyskać prawa: 1) Zapytaj bezpośrednio przez komentarz lub DM ('Czy możemy użyć Twojego zdjęcia?'). 2) Stwórz warunki regulaminu konkursowego który przyznaje Ci prawa do UGC. 3) Platformy UGC (Yotpo, Bazaarvoice) automatyzują pozyskiwanie zgód. 4) Dla recenzji tekstowych — możesz cytować z linkiem do źródła bez zgody. Oznaczanie: jeśli zapłaciłeś lub dałeś produkt w zamian za UGC, użytkownik musi oznakować jako #ad lub #sponsored (regulacje UOKiK i Rady Reklamy). Niestosowanie się grozi karami od regulatorów.",
    },
    {
      question: "Jaka jest różnica między UGC a influencer marketing?",
      answer: "UGC (User Generated Content) — treści tworzone organicznie przez zwykłych użytkowników, często bez wynagrodzenia lub za małą zachętę (zniżka, konkurs). Motywacja: chęć podzielenia się doświadczeniem, konkurs, program lojalnościowy. Influencer Marketing — współpraca z osobami o dużej widowni (influencerami) za wynagrodzenie. Profesjonalne treści, duży zasięg, wymaga oznakowania sponsorowanego. Różnice: UGC — autentyczność, niski koszt, mały zasięg jednostkowy ale skalowalny przez agregację. Influencer marketing — duży zasięg, wyższy koszt, większa kontrola nad treścią, mniejsza autentyczność. Trendem jest 'UGC Creators' — osoby tworzone profesjonalne treści w stylu UGC za opłatą, bez wymagania dużego followera.",
    },
    {
      question: "Jak mierzyć ROI z UGC?",
      answer: "Metryki ROI z UGC: Bezpośrednie: wzrost konwersji na stronach produktów z recenzjami (A/B test: z vs bez recenzji), engagement rate postów z UGC vs postów własnych marki, koszt pozyskania UGC vs koszt produkcji własnej treści. Pośrednie: wzrost NPS (Net Promoter Score), wzrost liczby recenzji = wzrost social proof = lepsza konwersja, zasięg organiczny przez UGC (earned media value). Narzędzia pomiarowe: Google Analytics 4 — śledzenie konwersji z różnych typów treści. Yotpo/Bazaarvoice — wbudowane dashboardy UGC ROI. Brand24/Mention — monitoring zasięgu UGC i sentymentu. Benchmark: marki które aktywnie zbierają UGC raportują 20-40% wzrost konwersji na stronach produktów.",
    },
  ];

  return (
    <>
      <SEOHead
        title="UGC — co to jest? User Generated Content w marketingu | fotz.pl"
        description="UGC co to jest — wyjaśniamy czym jest User Generated Content, typy UGC, jak zbierać opinie i zdjęcia od klientów i jak mierzyć ROI z treści użytkowników."
        canonical="https://fotz.pl/blog/ugc-co-to"

        keywords="UGC co to jest, UGC definicja, czym jest UGC, UGC w marketingu, UGC przykłady, jak działa UGC, UGC strategia"
      />
      <ArticleSchema
        title="UGC — co to jest? User Generated Content w marketingu"
        description="Czym jest UGC (User Generated Content), typy treści użytkowników, jak je zbierać, aspekty prawne, różnica vs influencer marketing i jak mierzyć ROI."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/ugc-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Content Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                UGC — co to jest i jak User Generated Content zwiększa sprzedaż?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                UGC to treści tworzone przez klientów — recenzje, zdjęcia, filmy. Konsumenci ufają
                UGC 12x bardziej niż reklamom marki. Jak zbierać i wykorzystywać?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy User Generated Content</h2>
              <div className="space-y-3 mb-6">
                {ugcTypes.map((t, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{t.type}</span>
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${t.impact === "Krytyczny" || t.impact === "Krytyczny (B2B)" ? "bg-red-100 text-red-700" : t.impact === "Wysoki" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{t.impact}</span>
                    </div>
                    <p className="text-blue-600 text-xs font-medium mb-0.5">{t.platform}</p>
                    <p className="text-slate-600 text-xs">{t.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak zbierać UGC od klientów?</h2>
              <div className="space-y-3 mb-6">
                {collectingUGC.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{c.method}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zbudować social proof przez UGC?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona produktu i e-commerce z recenzjami i UGC — projektujemy pod konwersję i zaufanie klientów.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie sklepów internetowych — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — UGC co to jest</h2>
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
