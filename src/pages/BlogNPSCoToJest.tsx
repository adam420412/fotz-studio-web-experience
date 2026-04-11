import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, Users, Star, BarChart2 } from "lucide-react";
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

export default function BlogNPSCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "NPS — co to jest? Net Promoter Score — poradnik" },
  ];

  const npsCategories = [
    { range: "9–10", label: "Promotorzy", color: "bg-green-100 border-green-300 text-green-800", desc: "Lojalni klienci, aktywnie polecają firmę znajomym." },
    { range: "7–8", label: "Neutralni (Pasywni)", color: "bg-yellow-100 border-yellow-300 text-yellow-800", desc: "Zadowoleni, ale nie entuzjastyczni — mogą odejść do konkurencji." },
    { range: "0–6", label: "Krytycy (Detractorzy)", color: "bg-red-100 border-red-300 text-red-800", desc: "Niezadowoleni klienci, mogą aktywnie szkodzić reputacji firmy." },
  ];

  const npsBenchmarks = [
    { industry: "E-commerce", nps: "45–55", note: "Amazon ~70, wysokie oczekiwania klientów" },
    { industry: "SaaS / oprogramowanie", nps: "30–50", note: "Silna korelacja z churn rate" },
    { industry: "Bankowość", nps: "25–40", note: "Tradycyjnie niższy niż inne branże" },
    { industry: "Ubezpieczenia", nps: "15–30", note: "Mniej lojalności ze względu na charakter produktu" },
    { industry: "Usługi profesjonalne", nps: "35–50", note: "Agencje marketingowe, doradztwo" },
    { industry: "Retail stacjonarny", nps: "30–45", note: "Zależy od sieci i obsługi" },
  ];

  const faqItems = [
    {
      question: "Co to jest NPS (Net Promoter Score)?",
      answer:
        'NPS (Net Promoter Score) to wskaźnik lojalności klientów oparty na jednym pytaniu: "Jak bardzo prawdopodobne jest, że polecisz naszą firmę/produkt znajomemu lub współpracownikowi? (skala 0-10)". Odpowiedzi dzielą klientów na: Promotorów (9-10), Neutralnych (7-8) i Krytyków (0-6). NPS = %Promotorów - %Krytyków. Wynik waha się od -100 do +100. Stworzony przez Freda Reichhelda i Bain & Company, opublikowany w Harvard Business Review w 2003 roku.',
    },
    {
      question: "Jak obliczyć NPS?",
      answer:
        "Wzór NPS: NPS = % Promotorów - % Krytyków. Przykład: zebrałeś 100 odpowiedzi. 60 osób dało 9-10 (Promotorzy = 60%). 25 osób dało 7-8 (Neutralni — nie wliczamy). 15 osób dało 0-6 (Krytycy = 15%). NPS = 60% - 15% = +45. Wynik powyżej 0 jest dobry, powyżej 50 jest doskonały, powyżej 70 jest klasy światowej. Wynik ujemny oznacza że masz więcej krytyków niż promotorów — krytyczna sytuacja.",
    },
    {
      question: "Jak zbierać dane do NPS?",
      answer:
        "Metody zbierania NPS: 1) Email po zakupie lub po upływie określonego czasu od onboardingu. 2) In-app (pop-up w aplikacji lub na stronie). 3) SMS dla e-commerce. 4) Rozmowa telefoniczna (rzadziej, głównie B2B). 5) Ankieta przy zamknięciu chatu. Narzędzia: Delighted, Typeform, SurveyMonkey, Hotjar, Survio. Kiedy pytać: 7-30 dni po zakupie/onboardingu, po każdej ważnej interakcji z obsługą. Pamiętaj: zawsze pytaj też dlaczego, żeby zrozumieć co poprawić.",
    },
    {
      question: "Jaki NPS jest dobry?",
      answer:
        "Interpretacja NPS: Poniżej 0: Bardzo źle — więcej krytyków niż promotorów, priorytet naprawy. 0–30: Dobry — są obszary do poprawy. 30–70: Doskonały — solidna baza promotorów. Powyżej 70: Klasa światowa (Apple ~72, Amazon ~70, Netflix ~68). Benchmarki bardzo różnią się branżowo — zawsze porównuj do konkretnej branży, nie do globalnych liderów. Ważniejszy jest trend NPS w czasie niż absolutna wartość.",
    },
    {
      question: "Jaka jest różnica między NPS a CSAT?",
      answer:
        "NPS (Net Promoter Score) mierzy lojalność długoterminową — czy klient poleci firmę w przyszłości. Zadaje jedno pytanie o rekomendację. CSAT (Customer Satisfaction Score) mierzy zadowolenie z konkretnej interakcji — zakupu, rozmowy z supportem, dostawy. Skala: zazwyczaj 1-5 lub 1-10. CES (Customer Effort Score) mierzy łatwość korzystania z usługi — jak dużo wysiłku włożył klient. Strategia: NPS co kwartał (lojalność), CSAT po każdej transakcji, CES w onboardingu i supportu.",
    },
    {
      question: "Jak poprawić wynik NPS?",
      answer:
        "Metody poprawy NPS: 1) Zamknij pętlę (close the loop) — skontaktuj się z krytykami, zrozum ich problemy i napraw. 2) Identyfikuj wzorce — co łączy krytyków? Konkretny produkt, region, etap cyklu życia? 3) Buduj program promotorów — zapraszaj do case studies, referral programów. 4) Popraw onboarding — złe pierwsze wrażenia są trudne do odwrócenia. 5) Szybkość i jakość obsługi — czas odpowiedzi na ticket to kluczowy czynnik NPS w SaaS.",
    },
  ];

  return (
    <>
      <SEOHead
        title="NPS — co to jest? Net Promoter Score — wzór i interpretacja | fotz.pl"
        description="NPS co to jest — wyjaśniamy czym jest Net Promoter Score, wzór na obliczenie NPS, jak interpretować wyniki i jak poprawić wskaźnik lojalności klientów."
        canonical="https://fotz.pl/blog/nps-co-to-jest"
      />
      <ArticleSchema
        title="NPS — co to jest? Net Promoter Score — wzór i interpretacja"
        description="Czym jest NPS (Net Promoter Score), jak obliczyć NPS, benchmarki branżowe, różnica NPS vs CSAT i jak poprawić wynik Net Promoter Score."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/nps-co-to-jest"
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
                <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Obsługa klienta</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                NPS — co to jest i jak mierzyć lojalność klientów?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                NPS (Net Promoter Score) to najpopularniejszy wskaźnik lojalności klientów.
                Wzór, jak go obliczać, benchmarki branżowe i jak poprawić wynik.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Trzy kategorie NPS</h2>
              <div className="space-y-3 mb-6">
                {npsCategories.map((cat, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${cat.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">{cat.label}</span>
                      <span className="font-bold text-lg">Ocena: {cat.range}</span>
                    </div>
                    <p className="text-sm">{cat.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 rounded-lg p-4 text-center mb-6">
                <p className="text-slate-400 text-sm mb-1">Wzór na NPS</p>
                <p className="text-white font-bold text-xl">NPS = <span className="text-green-400">% Promotorów</span> - <span className="text-red-400">% Krytyków</span></p>
                <p className="text-slate-500 text-xs mt-2">Neutralni (7-8) nie są wliczani do obliczenia</p>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Benchmarki NPS według branży</h2>
              <div className="space-y-2 mb-6">
                {npsBenchmarks.map((b, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{b.industry}</p>
                      <p className="text-slate-500 text-xs">{b.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">NPS: {b.nps}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz poprawić NPS przez lepsze doświadczenie online?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Szybka, intuicyjna strona to podstawa pozytywnych doświadczeń klientów i wyższego NPS.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — NPS co to jest</h2>
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
          heading="Popraw doświadczenia klientów i zwiększ NPS"
          subheading="Strona, UX i marketing — budujemy doświadczenia które klienci polecają."
        />
      </Layout>
    </>
  );
}
