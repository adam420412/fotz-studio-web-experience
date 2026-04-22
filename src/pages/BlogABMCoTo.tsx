import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, Users, Layers, TrendingUp } from "lucide-react";
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

export default function BlogABMCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "ABM — co to jest Account-Based Marketing?" },
  ];

  const abmTiers = [
    { tier: "ABM One-to-One (Strategic ABM)", desc: "Pelna personalizacja dla kazdego konta z osobna. Dedykowany content, strony, kampanie. Dla 5-50 named accounts. Enterprise deals o wartosci 100k+ USD.", accounts: "5-50 kont" },
    { tier: "ABM One-to-Few (ABM Lite)", desc: "Personalizacja dla grup klientow o podobnych cechach (np. branzy). Semi-customizowany content i kampanie. Mid-market.", accounts: "50-500 kont" },
    { tier: "ABM One-to-Many (Programmatic ABM)", desc: "Technologicznie zasilana personalizacja na duzej skali — reklamy targetowane po IP firmy, dynamic content na stronie. SMB i lower mid-market.", accounts: "500+ kont" },
  ];

  const faqItems = [
    {
      question: "Co to jest ABM (Account-Based Marketing)?",
      answer:
        "ABM (Account-Based Marketing) to strategia B2B polegajaca na skupieniu zasobow marketingowych i sprzedazowych na konkretnych firmach (named accounts) zamiast szerokich grup docelowych. W ABM marketing i sprzedaz wspolpracuja aby: identyfikowac docelowe firmy (accounts), tworzyc spersonalizowane kampanie i tresci dla kazdego konta, angaazowac wszystkich decydentow w buying committee. ABM jest odwroceniem tradycyjnego lejka — zamiast generowac duzo leadow i filtrować je, wybierasz z gory konkretne firmy. ABM jest szczegolnie skuteczny w Enterprise B2B z duzymi ACV i dlugim cyklem sprzedazy.",
    },
    {
      question: "Czym ABM rozni sie od tradycyjnego marketingu B2B?",
      answer:
        "Tradycyjny marketing B2B: szeroki zasieg, generowanie duzej liczby leadow, filtrowanie przez marketing i sprzedaz, mniej spersonalizowane tresci. ABM: selektywny zasieg, 50-500 wybranych firm, pelna personalizacja komunikacji, marketing i sprzedaz wspolnie targetuja to samo konto. Metafora: tradycyjny marketing to lowienie rybami siecia — duzym zaciagiem lapiesz wiele ryb i wybierasz te ktore chcesz. ABM to lowienie wiecej z harpunem — celujesz dokladnie w te ryby ktore chcesz zlapac. ABM wymaga wiekszego budzetu per konto, ale przynosi wyzsze win rate i wyzsze ACV.",
    },
    {
      question: "Jak wdrozyc ABM?",
      answer:
        "Kroki do wdrozenia ABM: 1) Zdefiniuj ICP — jakie firmy przyniesly najwyzsze ACV i najnizszy churn? 2) Zbuduj liste target accounts — uzyj danych (branaza, wielkosc, tech stack, aktywnosc) do wyboru 50-500 firm. 3) Zidentyfikuj buying committee — kto w tych firmach podejmuje decyzje? (Economic Buyer, Champion, Technical Buyer, Legal). 4) Stwoz personalizowany content — case studies dla ich branzy, strony dla named accounts, personalizowane emaile. 5) Zaangazuj przez wiele kanalow — LinkedIn, email, reklamy targetowane, direct mail, events. 6) Mierz pipeline per account — nie MQL, ale account engagement, pipeline velocity, win rate.",
    },
    {
      question: "Jakie narzedzia sa uzywane w ABM?",
      answer:
        "Narzedzia do ABM: Intent Data — G2, Bombora, TechTarget — firmy aktywnie szukajace rozwiazania w Twojej kategorii. ABM Platforms — Demandbase, 6sense, Terminus — cala platforma do ABM: targetowanie, personalizacja, analytics. LinkedIn Campaign Manager — targetowanie po nazwie firmy, stanowisku, branscy. Enrichment — Apollo.io, Clay, Lusha — dane o firmach i kontaktach. CRM — Salesforce, HubSpot — trackowanie aktywnosci per account. Account Intelligence — Bombora, G2 Buyer Intent — sygnaly kupna. Marketing Automation — Marketo, HubSpot — sekwencje emailowe dla buying committee.",
    },
    {
      question: "Jakie metryki sa wazne w ABM?",
      answer:
        "Metryki ABM roznize sie od tradycyjnych: Zamiast MQL liczysz: Account Engagement Rate — ile procent target accounts angaazuje sie z Twoim contentem. Pipeline Influenced by ABM — wartosc pipeline ktora zostala otworzona dzieki ABM. Win Rate — procent szans wygranych w ABM vs non-ABM (zazwyczaj 2-3x wyzszy). Average Contract Value (ACV) — wartosc kontraktu dla ABM accounts vs reszty. Time to Close — jak dlugo zajmuje zamkniecie ABM deal (zazwyczaj krotszy dzieki wyzszemu zaangazowaniu). Coverage — ile osob z buying committee (3-6 w Enterprise) zostalo dotknietch przez marketing?",
    },
    {
      question: "Czy ABM jest odpowiedni dla malych firm?",
      answer:
        "ABM jest najbardziej skuteczny dla: Enterprise SaaS z ACV powyzej 20-50k USD rocznie. Firmy z dlugim cyklem sprzedazy (3-12+ miesiecy). Firmy ze zdefiniowanym ICP i malym rynkiem (TAM ponizej 10 000 firm). Firmy z dobrze zintegrowanym teamem marketing-sprzedaz. Dla malych firm i SMB marketingu z nizszym ACV lepiej dziala: inbound marketing, SEO, Google Ads, self-serve PLG. Jednak nawet male agencje B2B moga skorzystac z tzw. micro-ABM: zbuduj liste 50 idealnych klientow, personalizuj outreach i tresci dla kazdego — bez dedykowanej platformy, tylko z HubSpot i LinkedIn.",
    },
  ];

  return (
    <>
      <SEOHead
        title="ABM — co to jest Account-Based Marketing? | fotz.pl"
        description="ABM co to jest — wyjasnamy czym jest Account-Based Marketing, jak wdrozyc ABM, roznica vs tradycyjny marketing B2B, narzedzia i metryki ABM."
        canonical="https://fotz.pl/blog/abm-co-to-jest"

        keywords="ABM co to jest, ABM definicja, czym jest ABM, ABM w marketingu, ABM przykłady, jak działa ABM, ABM strategia"
      />
      <ArticleSchema
        title="ABM — co to jest Account-Based Marketing?"
        description="Czym jest Account-Based Marketing (ABM), tiers ABM, jak wdrozyc, narzedzia, metryki i kiedy ABM jest odpowiedni dla Twojej firmy."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/abm-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Marketing B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                ABM — co to jest Account-Based Marketing?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                ABM to strategia marketingowa gdzie celujemy w konkretne firmy zamiast szerokich grup.
                Jak wdrozyc, narzedzia, metryki i 3 poziomy ABM.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">3 poziomy ABM</h2>
              <div className="space-y-3 mb-6">
                {abmTiers.map((t, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-sm">{t.tier}</span>
                      <span className="text-blue-600 text-xs font-medium">{t.accounts}</span>
                    </div>
                    <p className="text-slate-600 text-xs">{t.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ABM vs tradycyjny marketing B2B</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">Tradycyjny B2B</th>
                      <th className="text-left p-3 border border-slate-700">ABM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspekt: "Podejscie", trad: "Szeroki zasieg, wiele leadow", abm: "Selektywny — named accounts" },
                      { aspekt: "Content", trad: "Generyczny dla persony", abm: "Spersonalizowany per firma" },
                      { aspekt: "Metryki", trad: "MQL, CPL, volume", abm: "Account engagement, pipeline" },
                      { aspekt: "Marketing-Sprzedaz", trad: "Czesto osobne sile", abm: "Scisle zintegrowane (Smarketing)" },
                      { aspekt: "Kiedy dziala", trad: "SMB, nizszy ACV, PLG", abm: "Enterprise, wysoki ACV, dlugi cykl" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspekt}</td>
                        <td className="p-3 border border-slate-200 text-orange-600 text-xs">{row.trad}</td>
                        <td className="p-3 border border-slate-200 text-green-600 text-xs">{row.abm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Layers className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strony zoptymalizowanej pod ABM i leady B2B?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony z dynamicznym contentem i landing page zoptymalizowane pod named accounts i konwersje B2B.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — ABM co to jest</h2>
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
