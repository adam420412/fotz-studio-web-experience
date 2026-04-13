import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, TrendingUp, Share2, DollarSign } from "lucide-react";
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

export default function BlogReferralMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Referral Marketing — co to jest? Program poleceń" },
  ];

  const referralExamples = [
    { company: "Dropbox", reward: "+500 MB space", mechanic: "Zaproś znajomego → oboje dostają dodatkowe miejsce. Wzrost bazy o 3900% w 15 miesięcy." },
    { company: "Uber", reward: "Darmowy przejazd", mechanic: "Kod polecający dla nowego użytkownika i polecającego. Globalny wzrost napędzany przez sieć użytkowników." },
    { company: "PayPal", reward: "$10 za rejestrację", mechanic: "Pionier programów referral — $20M wydane na nagrody przyniosło 7-10% wzrost dziennie w 2000 roku." },
    { company: "Tesla", reward: "Darmowy Supercharger", mechanic: "Polecenie + zakup Tesli przez poleconego = darmowe ładowanie. Buduje community właścicieli." },
    { company: "Revolut", reward: "Premia pieniężna", mechanic: "Zaproś znajomego, oboje dostajecie pieniądze gdy nowy użytkownik wykona transakcję." },
    { company: "Allegro Smart", reward: "Miesiąc gratis", mechanic: "Polecenie Smart = miesiąc darmowo dla nowego + bonus dla polecającego. Zwiększa retention." },
  ];

  const programSteps = [
    { step: "1. Zdefiniuj nagrodę", desc: "Nagroda musi być wystarczająco atrakcyjna by motywować do polecenia, ale nie tak kosztowna by niszczyć marżę. Opcje: zniżka, gotówka, kredyt, upgrade, darmowy produkt." },
    { step: "2. Zaprojektuj mechanikę", desc: "Jednoosobowa (tylko polecający) vs dwustronna (oboje dostają). Dwustronna generuje 2-3x więcej poleceń — polecanemu łatwiej zaakceptować." },
    { step: "3. Stwórz system śledzenia", desc: "Unikalne kody lub linki referral dla każdego użytkownika. Narzędzia: ReferralHero, Friendbuy, Viral Loops, lub własna implementacja." },
    { step: "4. Zintegruj w product flow", desc: "Program referral musi być widoczny w momencie 'aha moment' użytkownika — gdy jest najbardziej zadowolony i gotowy polecać." },
    { step: "5. Testuj i optymalizuj", desc: "Testuj różne nagrody, copy, czas wyświetlania. Mierz: referral rate, conversion rate poleceń, LTV polecon klientów." },
  ];

  const faqItems = [
    {
      question: "Co to jest Referral Marketing?",
      answer: "Referral Marketing (marketing poleceń) to strategia pozyskiwania klientów przez zachęcanie istniejących klientów do polecania produktu znajomym w zamian za nagrodę. Opiera się na sile word-of-mouth (marketing szeptany) wzmocnionego incentywem finansowym lub wartościowym. Referral marketing odróżnia się od: Word-of-mouth (organiczne polecenia bez nagrody), Affiliate marketing (polecenia przez zewnętrznych partnerów za prowizję), MLM (wielopoziomowe polecenia, często problematyczne). Dane: 92% konsumentów ufa rekomendacjom od znajomych ponad innym formom reklamy (Nielsen). Klienci z poleceń mają o 16% wyższy LTV i 37% wyższy retention niż klienci z innych kanałów.",
    },
    {
      question: "Jak działa program referral?",
      answer: "Mechanika programu referral: 1) Istniejący klient (polecający/referrer) otrzymuje unikalny link lub kod. 2) Polecający udostępnia link znajomemu (polecony/referee). 3) Polecony rejestruje się lub kupuje przez link. 4) System śledzi atrybucję przez cookies, kod lub unikalne ID. 5) Obie strony (lub tylko polecający) otrzymują nagrodę. Typy nagród: jednostronna (tylko polecający), dwustronna (oboje dostają — 2-3x skuteczniejsza), wielopoziomowa (nagroda za kolejne polecenia poleconych). Narzędzia: Rewardful, ReferralHero, Viral Loops, Friendbuy, GrowSurf, lub własna implementacja przez platformę e-commerce.",
    },
    {
      question: "Jaka nagroda działa najlepiej w programie referral?",
      answer: "Najskuteczniejsze nagrody w referral marketing (badania Nielsen): Gotówka/kredyt na konto — najwyższa motywacja, prosta do zrozumienia. Zniżka procentowa — popularna w e-commerce (10-20% zniżki). Darmowy produkt/miesiąc usługi — działa dla SaaS i subskrypcji. Upgrade planu — dla SaaS (premium features za polecenie). Dodatkowa pojemność/dostęp — Dropbox, Google Drive model. Charytatywna donacja — działa dla firm z silnymi wartościami CSR. Zasady dobrej nagrody: musi być pożądana przez klienta, musi być wystarczająco wartościowa (minimum 10-15% wartości zakupu), natychmiastowa (nie po 30 dniach), prosta do zrozumienia. Dwustronna nagroda (oboje dostają) zawsze lepsza od jednostronnej.",
    },
    {
      question: "Jaka jest różnica między Referral a Affiliate Marketing?",
      answer: "Referral Marketing: adresowany do obecnych klientów — polecają znajomym ze swojej sieci. Nagroda zazwyczaj niepieniężna lub mała (zniżka, kredyt). Relacja jest osobista — polecający zna poleconego. Małe skale, wysokie zaufanie. Affiliate Marketing: adresowany do zewnętrznych partnerów (blogerów, influencerów, porównywariach cen) — promują produkt publice. Nagroda: prowizja od sprzedaży (5-50%). Relacja masowa — jeden partner promuje do tysięcy nieznajomych. Większa skala, niższe zaufanie. Kiedy stosować: Referral — gdy produkt jest dobry i masz lojalną bazę klientów. Affiliate — gdy chcesz szybko dotrzeć do nowych rynków i masz wysokie marże. Wiele firm stosuje obie strategie równolegle.",
    },
    {
      question: "Jak mierzyć skuteczność programu referral?",
      answer: "Kluczowe metryki programu referral: Referral Rate — % aktywnych klientów którzy polecili (cel: 5-15%). Conversion Rate of Referrals — % poleceń które doprowadziły do zakupu (benchmark: 15-30%, vs 1-3% cold traffic). Cost per Referred Customer (CpRC) — koszt nagrody / liczba polecon klientów (musi być niższy niż CAC z innych kanałów). LTV Referred Customers — klienci z poleceń mają typowo 16-25% wyższy LTV. Viral Coefficient (K-factor) — ile poleceń generuje każdy nowy klient z referral. Net Promoter Score (NPS) — koreluje z naturalną chęcią polecania. Narzędzia analityczne: Rewardful, Shopify Analytics, ReferralHero Dashboard lub Google Analytics (UTM tracking dla linków referral).",
    },
    {
      question: "Kiedy warto wdrożyć program referral?",
      answer: "Program referral jest skuteczny gdy: 1) Masz zadowolonych klientów — bez NPS > 7 polecenia będą rzadkie. 2) Produkt ma naturalną viralność — klienci opowiadają o nim znajomym już bez programu. 3) LTV klienta jest wystarczający by uzasadnić koszt nagrody (LTV > 5x koszt nagrody). 4) Masz mechanizm śledzenia atrybucji. Kiedy NIE wdrażać: produkt jest nowy i nieudowodniony (najpierw zbuduj produkt), masz problemy z retencją (referral nie pomoże jeśli klienci odchodzą), branże regulowane gdzie polecenia mogą być problematyczne. Pierwsze kroki: zanim wdrożysz platformę, zrób pilot — wyślij email do 100 najlojalniejszych klientów z unikalnym kodem i zmierz wyniki.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Referral Marketing — co to jest? Program poleceń | fotz.pl"
        description="Referral Marketing co to jest — wyjaśniamy czym jest marketing poleceń, jak działa program referral, jakie nagrody działają i jak mierzyć skuteczność."
        canonical="https://fotz.pl/blog/referral-marketing-co-to"

        keywords="Referral Marketing co to jest, Referral Marketing definicja, czym jest Referral Marketing, Referral Marketing w marketingu, Referral Marketing przykłady, jak działa Referral Marketing, Referral Marketing strategia"
      />
      <ArticleSchema
        title="Referral Marketing — co to jest? Program poleceń"
        description="Czym jest Referral Marketing (marketing poleceń), jak działa program referral, najlepsze nagrody, różnica vs affiliate marketing i jak mierzyć ROI."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/referral-marketing-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Share2 className="w-4 h-4" /> Growth Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Referral Marketing — co to jest i jak budować program poleceń?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Referral marketing zachęca klientów do polecania Twojej firmy w zamian za nagrodę.
                Dropbox urósł o 3900% dzięki programowi referral. Jak go wdrożyć?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Przykłady skutecznych programów referral</h2>
              <div className="space-y-3 mb-6">
                {referralExamples.map((ex, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{ex.company}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">{ex.reward}</span>
                    </div>
                    <p className="text-slate-600 text-xs">{ex.mechanic}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak zbudować program referral krok po kroku</h2>
              <div className="space-y-3 mb-6">
                {programSteps.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.step}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zbudować program referral?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Landing page, strona produktu i mechanika growth — pomagamy firmom budować systemy pozyskiwania klientów przez polecenia.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Referral Marketing co to jest</h2>
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
          heading="Zbudujemy system pozyskiwania klientów przez polecenia"
          subheading="Strona, mechanika referral i growth strategy — klienci którzy przyciągają kolejnych klientów."
        />
      </Layout>
    </>
  );
}
