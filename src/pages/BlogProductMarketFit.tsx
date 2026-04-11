import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, TrendingUp, CheckCircle2, Zap } from "lucide-react";
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

export default function BlogProductMarketFit() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Product-Market Fit — co to jest i jak to osiagnac?" },
  ];

  const pmfSignals = [
    { signal: "Retention i nizki churn", desc: "Klienci zostaja i wracaja — co miesiac masz mniej anulowania subskrypcji niz powinno byc przypadkowo.", positive: true },
    { signal: "Organiczny wzrost (word of mouth)", desc: "Klienci polecaja produkt znajomym bez Twojego udzialu — NPS powyzej 40+.", positive: true },
    { signal: "Klienci wracaja po rezygnacji", desc: "Jesli klient anuluje subskrypcje i wraca — to silny sygnal PMF.", positive: true },
    { signal: "Trudne nadazenie za poputem", desc: "Masz trudnosc z obslugiwaniem wszystkich zainteresowan — problemy z capacity.", positive: true },
    { signal: "Wysoki churn i malo polecen", desc: "Klienci odchodza i nie polecaja — brak PMF. Najczestszy problem pre-PMF.", positive: false },
    { signal: "Klienci nie placza jesli stracisz produkt", desc: "Kluczowe pytanie Seana Ellisa: Co jezeli nie moglibyscie uzywac tego produktu? Jesli 40%+ mowia 'byloby mi bardzo trudno' — masz PMF.", positive: false },
  ];

  const faqItems = [
    {
      question: "Co to jest Product-Market Fit?",
      answer:
        "Product-Market Fit (PMF) to stan w ktorym produkt idealnie odpowiada na potrzeby konkretnego rynku. Terminy wprowadzil Marc Andreessen (a16z) w 2007 roku. PMF oznacza ze: klienci aktywnie szukaja i kupuja Twoj produkt bez silnego marketingowego push, maja go za niezbedny w swojej pracy lub zyciu, polecaja go znajomym, pozostaja lojalni. Andy Rachleff (Benchmark): PMF jest wtedy gdy klienci ciagna produkt z rynku, nie wtedy gdy ty go pychasz. PMF jest fundamentem przed skalowaniem — bez PMF dobre marketing i sprzedaz nie pomoga.",
    },
    {
      question: "Jak mierzyc Product-Market Fit?",
      answer:
        "Metody pomiaru PMF: 1) Sean Ellis Test: pytasz klientow 'Jak sie czulbys jezeli nie mogl uzywac tego produktu?' Jesli 40%+ odpowiada 'Byloby mi bardzo trudno' — osiagnales PMF. Ponizej 40% — brak PMF. 2) NPS (Net Promoter Score) — powyzej 50 to silny sygnal PMF. 3) Retention curves — krzywa retencji musi sie splaszczyc (a nie spasc do 0). Jesli po 12 miesiacach zachowujesz 30%+ uzytkownikow — dobry znak. 4) Organic growth rate — jaki procent nowych uzytkownikow pochodzi z polecen? Powyzej 50% word-of-mouth to swietny sygnal. 5) Churn rate — ponizej 2%/mies. dla SaaS to znak PMF.",
    },
    {
      question: "Jak osiagnac Product-Market Fit?",
      answer:
        "Droga do PMF: 1) Znajdz waska nische — zamiast robic produkt dla wszystkich, skupiaj sie na konkretnym segmencie z ostrym problemem. 2) Glebokie wywiady z klientami — minimum 20-30 wywiadow. Pytaj o problemy, nie o feature requests. 3) Zbuduj MVP — mozliwie prosta wersja rozwiazujaca core problem. Nie przesadz z funkcjami. 4) Testuj z early adopters — znajdz pierwszych 10 klientow ktorzy na prawde potrzebuja rozwiazania. 5) Mierz retencje i churn — nie konwersje. Retention mowi prawde. 6) Pivotuj jesli trzeba — zmiana segmentu, problemu lub mechanizmu — az do PMF. Nikt nie mowi ze droga jest prosta.",
    },
    {
      question: "Czym rozni sie PMF od ICP (Ideal Customer Profile)?",
      answer:
        "PMF i ICP sa ze soba scisle powiazane. ICP (Ideal Customer Profile) to opis firmy lub osoby dla ktorej Twoj produkt ma najwyzszy PMF — oni maja najostrzejszy problem, placa najchetniej i churnnuja najrzadziej. PMF jest dany wzgledem konkretnego rynku/segmentu — mozesz miec PMF dla ICP (startupy SaaS z 10-50 pracownikami) i brak PMF dla innych (enterprise banki). Kolejnosc: 1) Znajdz ICP przez analise najlepszych klientow, 2) Zdefiniuj wlasciwy problem dla ICP, 3) Zbuduj produkt ktory rozwiazuje ten problem lepiej niz alternatywy = PMF.",
    },
    {
      question: "Kiedy nalezy skalowac sprzedaz i marketing?",
      answer:
        "Skalowanie przed PMF to jeden z glownych powodow upadkow startupow — spalasz kapital na pozyskiwanie klientow ktorzy i tak odejda. Sygnaly ze jestes gotowy do skalowania: Sean Ellis Test powyzej 40%. Retention curves sie splaszczyly (stale). Organiczny wzrost stanowi 30%+ pozyskania. Unit economics pozytywne (LTV/CAC powyzej 3x). Churn ponizej 3%/mies. Jesli te warunki sa spelnione — dopiero wtedy inwestuj w paid marketing, SDRow i sprzedaz. Przed PMF: iteruj na produkcie, nie skaluj wydatkow.",
    },
    {
      question: "Czy mozna stracic PMF?",
      answer:
        "Tak — PMF nie jest stanem statycznym. Mozna go utracic przez: Zmiany rynkowe — nowa technologia zastepuje stary sposob rozwiazywania problemu (np. Blackberry vs iPhone). Pojawienie sie lepszej konkurencji. Zmiany potrzeb klienta — ewolucja segmentu. Wewnetrzne zmiany — zmiana kierunku produktu lub jakosci. Signals utraty PMF: rosnacy churn, spadajacy NPS, wiecej polecen ze starych klientow a coraz mniej od nowych. Rozwiazanie: powrot do badan klientow, ewolucja produktu lub pivot do nowego ICP.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Product-Market Fit — co to jest i jak osiagnac? | fotz.pl"
        description="Product-Market Fit co to jest — wyjasnamy czym jest PMF, jak mierzyc Product-Market Fit (Sean Ellis Test, NPS, retencja) i kiedy skalowac startup."
        canonical="https://fotz.pl/blog/product-market-fit-co-to"
      />
      <ArticleSchema
        title="Product-Market Fit — co to jest i jak osiagnac?"
        description="Czym jest Product-Market Fit, jak mierzyc PMF (Sean Ellis Test, retention, NPS), jak go osiagnac i kiedy skalowac marketing i sprzedaz."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/product-market-fit-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Startup i SaaS</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Product-Market Fit — co to jest i jak osiagnac?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                PMF to stan gdy produkt idealnie odpowiada potrzebom rynku.
                Jak mierzyc, sygnaly PMF, Sean Ellis Test i kiedy skalowac.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Sygnaly Product-Market Fit — co szukac?</h2>
              <div className="space-y-2 mb-6">
                {pmfSignals.map((s, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border ${s.positive ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${s.positive ? 'bg-green-500' : 'bg-red-500'}`} />
                      <p className={`font-bold text-sm ${s.positive ? 'text-green-800' : 'text-red-800'}`}>{s.signal}</p>
                    </div>
                    <p className={`text-xs pl-5 ${s.positive ? 'text-green-700' : 'text-red-700'}`}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Sean Ellis Test — najpopularniejsza metoda pomiaru PMF</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6">
                <p className="text-slate-400 text-xs mb-3">Pytanie dla klientow:</p>
                <p className="text-white font-bold text-lg mb-4">"Jak sie czulbys gdybys nie mogl/mogla uzywac [nazwa produktu]?"</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-20 bg-green-500 h-4 rounded" />
                    <p className="text-green-400">Byloby mi bardzo trudno — 40%+ = PMF</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 bg-yellow-500 h-4 rounded" />
                    <p className="text-yellow-400">Troche trudno — nie wlicza sie</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 bg-red-500 h-4 rounded" />
                    <p className="text-red-400">Nie bylby problem — brak PMF</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs mt-3">Zbierz min. 40-50 odpowiedzi od aktywnych uzytkownikow dla wiarygodnego wyniku.</p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Po osiagnieciu PMF — czas na strone ktora skaluje pozyskanie</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony marketingowe i landing page dla produktow z PMF — zaprojektowane pod konwersje i wzrost.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Product-Market Fit co to jest</h2>
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
          heading="Masz PMF? Pomozemy Ci skalowac przez marketing i strone"
          subheading="SEO, Google Ads i landing page — budujemy maszynke do pozyskiwania klientow po osiagnieciu PMF."
        />
      </Layout>
    </>
  );
}
