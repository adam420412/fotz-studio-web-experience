import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Target, TrendingUp, BarChart2 } from "lucide-react";
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

export default function BlogB2BMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Marketing B2B — co to jest i jak dziala?" },
  ];

  const b2bChannels = [
    { channel: "Content Marketing i SEO", desc: "Blog, case studies, white papers, webinary — przyciagaja decydentow szukajacych rozwiazan.", effectiveness: "Bardzo wysoka" },
    { channel: "LinkedIn Ads i organiczny", desc: "Jedyna platforma z targetowaniem po stanowiskach i bransach. Drogi CPC ale wysoka jakosc leadow.", effectiveness: "Wysoka" },
    { channel: "Cold Email / Outbound", desc: "SDRowie wysylaja spersonalizowane emaile do ICP. Skalowalne ale wymaga precyzyjnego targetowania.", effectiveness: "Srednia-Wysoka" },
    { channel: "Events i Konferencje", desc: "Networking, prelekcje, sponsoring — buduja zaufanie i relacje. Drozsze ale leadsy B2B wysokiej jakosci.", effectiveness: "Wysoka" },
    { channel: "Partner i Referral", desc: "Polecenia od innych firm, integracje, programy partnerskie. Najnizsza CAC, najwyzsza konwersja.", effectiveness: "Bardzo wysoka" },
    { channel: "Google Ads (Search)", desc: "Reklamy na zapytania o problem lub rozwiazanie. Efektywne dla BOFU przy duzym budget.", effectiveness: "Wysoka (BOFU)" },
  ];

  const faqItems = [
    {
      question: "Co to jest marketing B2B?",
      answer:
        "Marketing B2B (Business-to-Business) to dzialania marketingowe skierowane do firm i organizacji, a nie do konsumentow indywidualnych. Klientem jest firma lub instytucja, decyzja zakupowa jest podejmowana przez zespol (buying committee), a produkty lub uslugi sluza realizacji celow biznesowych. Kluczowe roznice vs B2C: dluzszy cykl sprzedazy (tygodnie do miesiecy vs minuty), wiecej decydentow (CFO, CEO, IT, Legal), logiczne argumenty zamiast emocjonalnych, duze transakcje, wysoka wartosc klienta (LTV). Przykladowe branzy B2B: oprogramowanie SaaS, uslugi profesjonalne, hurtownie, producenci, agencje.",
    },
    {
      question: "Czym rozni sie marketing B2B od B2C?",
      answer:
        "Kluczowe roznice B2B vs B2C: Decyzja zakupowa: B2B — 6-10 osob w buying committee, tygodnie/miesiace procesu. B2C — 1 osoba, sekundy/dni. Motywacja: B2B — logika, ROI, bezpieczenstwo, efektywnosc. B2C — emocje, status, przyjemnosc, rozwiazanie problemu. Tresc: B2B — case studies, white papers, webinary, demo. B2C — reklamy emocjonalne, influencerzy, promocje. Kanalny: B2B — LinkedIn, SEO/content, cold email, events. B2C — Meta, TikTok, Google Shopping, influencerzy. LTV: B2B — czesto dziesiatki lub setki tysiecy zl rocznie. B2C — zazwyczaj setki do kilku tysiecy zl.",
    },
    {
      question: "Jakie sa najskuteczniejsze strategie marketingu B2B?",
      answer:
        "Top strategie B2B: 1) Account-Based Marketing (ABM) — targetowanie konkretnych firm (named accounts) zamiast szerokich grup. Personalizacja na poziomie firmy. 2) Content marketing — blog, case studies, raporty branzy — buduje autorytet i generuje inbound leady. 3) Lead nurturing — email sekwencje, webinary, retargeting — prowadzenie leadu przez dlugi cykl sprzedazy. 4) Sales Enablement — materialy dla sprzedawcow: one-pagery, case studies, ROI kalkulatory. 5) Partner marketing — wspolpraca z firmami ktore maja dostep do Twojego ICP. 6) Demand Generation — budowanie popytu przez edukacje i szerzenie swiadomosci przed generowaniem leadow.",
    },
    {
      question: "Co to jest ICP (Ideal Customer Profile) w B2B?",
      answer:
        "ICP (Ideal Customer Profile) to opis firmy ktora jest idealnym klientem — przynosi najwiecej przychodu, churnnuje najrzadziej i jest najlatwiejsza do obslugi. Parametry ICP dla B2B: branza (np. SaaS, e-commerce, produkcja), wielkosc firmy (liczba pracownikow, przychody), geografia, faza wzrostu, uzywane technologie, model sprzedazy. ICP rozni sie od Persona (ktora to opis konkretnej osoby decyzyjnej wewnatrz firmy ICP). Jak zdefiniowac ICP: przeanalizuj top 20% klientow ktorzy przynoszą 80% przychodow — co maja wspolnego? Tam szukaj ICP.",
    },
    {
      question: "Jak generowac leady B2B?",
      answer:
        "Metody generowania leadow B2B: Inbound (klienci przychodza do Ciebie): SEO na keyphrasy problemowe, content marketing (blog, podcast, YouTube), webinary i events online, lead magnety (e-book, template, kalkulator ROI). Outbound (Ty wychodzisz do klientow): cold email do ICP, LinkedIn outreach, cold calling, targetowane reklamy do named accounts (ABM). Partnerski: referral od obecnych klientow, wspolpraca z komplementarnymi firmami, marketplace i integracje. Konwersja leadow: landing page z jasnym CTA, demo booking, free trial. Mierzenie: MQL (Marketing Qualified Lead), SQL (Sales Qualified Lead), Opportunity, Won/Lost.",
    },
    {
      question: "Jakie narzedzia sa uzywane w marketingu B2B?",
      answer:
        "Kluczowe narzedzia B2B: CRM: HubSpot, Salesforce, Pipedrive — zarzadzanie leadami i pipeline. Marketing Automation: HubSpot, Marketo, ActiveCampaign — email nurturing, lead scoring. Intent Data: G2, Bombora, TechTarget — firmy aktywnie szukajace rozwiazania. Enrichment: Apollo.io, Lusha, Clay — dane o firmach i kontaktach. Account-Based Advertising: LinkedIn Campaign Manager, Demandbase, 6sense. Analytics: Google Analytics, HubSpot Analytics, Mixpanel. SEO: Ahrefs, SEMrush — keyword research i analizę pozycji. Video: Loom — spersonalizowane video wiadomosci w outbound.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Marketing B2B — co to jest i jak dziala? | fotz.pl"
        description="Marketing B2B co to jest — wyjasnamy czym jest marketing B2B, roznica vs B2C, najskuteczniejsze strategie, generowanie leadow i narzedzia dla firm B2B."
        canonical="https://fotz.pl/blog/marketing-b2b-co-to"

        keywords="Marketing B2B co to jest, Marketing B2B definicja, czym jest Marketing B2B, Marketing B2B w marketingu, Marketing B2B przykłady, jak działa Marketing B2B, Marketing B2B strategia"
      />
      <ArticleSchema
        title="Marketing B2B — co to jest i jak dziala?"
        description="Czym jest marketing B2B, roznice vs B2C, najskuteczniejsze kanaly i strategie, ICP, generowanie leadow i narzedzia do marketingu dla firm B2B."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/marketing-b2b-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Sprzedaz i marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Marketing B2B — co to jest i jak dziala?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Marketing B2B to dzialania marketingowe skierowane do firm i organizacji.
                Strategie, kanaly, generowanie leadow i narzedzia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Skuteczne kanaly marketingu B2B</h2>
              <div className="space-y-3 mb-6">
                {b2bChannels.map((c, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <p className="font-bold text-slate-900 text-sm">{c.channel}</p>
                      </div>
                      <p className="text-slate-500 text-xs">{c.desc}</p>
                    </div>
                    <span className="text-blue-600 text-xs font-medium whitespace-nowrap">{c.effectiveness}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">B2B vs B2C — kluczowe roznice</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">B2B</th>
                      <th className="text-left p-3 border border-slate-700">B2C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspekt: "Decydent", b2b: "6-10 osob (buying committee)", b2c: "1 osoba, czesto impulsywna" },
                      { aspekt: "Cykl zakupu", b2b: "Tygodnie do miesiecy", b2c: "Minuty do dni" },
                      { aspekt: "Motywacja", b2b: "ROI, bezpieczenstwo, efektywnosc", b2c: "Emocje, status, przyjemnosc" },
                      { aspekt: "Kanawy", b2b: "LinkedIn, email, SEO, events", b2c: "Meta, TikTok, influencerzy" },
                      { aspekt: "LTV", b2b: "Wysokie — tysiac do setek tysiecy zl", b2c: "Nizsze — setki do kilku tys. zl" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspekt}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.b2b}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.b2c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strony zoptymalizowanej pod generowanie leadow B2B?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy strony i landing page dla firm B2B — zaprojektowane pod konwersje, demo booking i formularz kontaktowy.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Marketing B2B co to jest</h2>
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
