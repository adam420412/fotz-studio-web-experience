import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, Map, Users, TrendingUp } from "lucide-react";
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

export default function BlogGTMStrategyCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "GTM Strategy — co to jest strategia Go-to-Market?" },
  ];

  const gtmComponents = [
    { component: "Rynek docelowy (TAM/SAM/SOM)", desc: "TAM (Total Addressable Market) — pelny rynek. SAM — dostepna czesc. SOM — realistyczna do osiagniecia czesc." },
    { component: "ICP (Ideal Customer Profile)", desc: "Opis idealnego klienta — branza, wielkosc firmy, problem, budzet, decydent." },
    { component: "Propozycja wartosci (Value Prop)", desc: "Dlaczego klienci kupuja od Ciebie a nie od konkurencji — unikalny benefit." },
    { component: "Strategia cenowa (Pricing)", desc: "Model cenowy — per seat, usage-based, flat rate, enterprise — i pozycjonowanie cenowe." },
    { component: "Kanaly dystrybucji", desc: "Jak docierasz do klientow: direct sales, partnerzy, self-serve, marketplace." },
    { component: "Strategia sprzedazy i marketingu", desc: "Inbound vs outbound, struktura team, cele i metryki (pipeline, MRR, CAC, LTV)." },
  ];

  const faqItems = [
    {
      question: "Co to jest GTM Strategy (Go-to-Market)?",
      answer:
        "GTM Strategy (Go-to-Market Strategy) to kompleksowy plan okreslajacy jak firma wprowadzi produkt lub usluge na rynek. GTM odpowiada na pytania: dla kogo jest produkt (ICP), jakim jest problem ktory rozwiazuje, jak beda sie o nim dowiadywac klienci (marketing), jak beda kupowac (sales model, pricing), jak beda onboardowani (customer success). GTM nie jest jednorazowym dokumentem — ewoluuje z rozwojem firmy i rynku. GTM strategy jest krytyczna przy: lancowaniu nowego produktu, wejsciu na nowy rynek geograficzny, rebrandingu lub pivotie, przesunieciu sie do nowego segmentu (np. z SMB do Enterprise).",
    },
    {
      question: "Jakie sa elementy GTM Strategy?",
      answer:
        "Kluczowe elementy GTM Strategy: 1) Market Definition — TAM, SAM, SOM, analiza rynku i trendow. 2) ICP i Persona — opis idealnego klienta i decydentow. 3) Value Proposition — dlaczego klienci kupuja Twoj produkt zamiast alternatyw. 4) Pricing Model — jak zarabiasz i jak sie pozycjonujesz cenowo. 5) Distribution Model — direct sales, self-serve, channel partners, marketplace. 6) Marketing Strategy — kanaly pozyskiwania (SEO, paid, events, outbound). 7) Sales Strategy — model sprzedazy (inbound, outbound, PLG), cykl sprzedazy, KPI. 8) Customer Success — onboarding, retencja, expansion.",
    },
    {
      question: "Czym rozni sie GTM od Business Planu?",
      answer:
        "Business Plan jest szerokim dokumentem opisujacym calosc biznesu — wizje, finanse, operacje, team, strategię wzrostu. Czesto pisany dla inwestorow lub bankow. GTM Strategy skupia sie na konkretnym produkcie lub lancowaniu i opisuje jak przeniesc produkt od Twojej firmy do rynku — kto jest klientem, jak trafi na rynek, jak bedzie sprzedawany. GTM jest taktyczniejszy i krótkoterminowy (6-24 miesiace), business plan jest strategiczny (3-5 lat). Dla startupow: GTM to czesto wazniejszy dokument — bo opisuje jak osiagnac PMF i pierwsze przychody.",
    },
    {
      question: "Jak napisac GTM Strategy?",
      answer:
        "Kroki do stworzenia GTM Strategy: 1) Zdefiniuj rynek — kto ma problem ktory rozwiazujesz? Jak duzy jest rynek? 2) Zbuduj ICP — przeanalizuj najlepszych klientow lub zrob badania rynkowe. 3) Sformuluj Value Proposition — dlaczego Twoje rozwiazanie jest lepsze niz alternatywy? 4) Wybierz model cenowy i sprzedazowy — self-serve czy sales-assisted? Jaki pricing model? 5) Wybierz kanaly pozyskiwania — SEO, paid, outbound, events, partnerzy? 6) Zaplanuj metryki sukcesu — jakie KPI pokazuja ze GTM dziala? (CAC, LTV, churn, MRR). 7) Zbuduj roadmape — etapy i milestone przez pierwsze 12-18 miesiecy.",
    },
    {
      question: "Co to jest PLG (Product-Led Growth)?",
      answer:
        "PLG (Product-Led Growth) to model GTM gdzie sam produkt jest glownym motorem pozyskiwania, konwersji i rozszerzania bazy klientow — bez tradycyjnego procesu sprzedazy. W PLG: uzytkownik moze uzywac produktu za darmo lub za free trial bez rozmowy ze sprzedawca, sam produkt pokazuje wartosc i konwertuje na platny plan, obecni uzytkownicy zapraszaja nowych przez viral mechanics (Slack zaproszenia, Figma share). Przyklady PLG: Slack, Figma, Dropbox, Notion, Airtable, Calendly. PLG vs Sales-Led Growth (SLG): PLG skaluje tanio przez produkt, SLG wymaga SDRow i AEow. Najlepiej: PLG jako ruch masowy + sales dla Enterprise (hybrid GTM).",
    },
    {
      question: "Jak mierzyc sukces GTM Strategy?",
      answer:
        "KPI do mierzenia GTM: Akwizycja: Number of leads, MQL, SQL, demo booked rate, CAC (Customer Acquisition Cost). Konwersja: Trial to paid rate, demo to won rate, time to close (dlugosc cyklu sprzedazy). Retencja: Churn rate, NRR (Net Revenue Retention), NPS. Wzrost: MRR/ARR growth, Expansion MRR (upsell, cross-sell). Efektywnosc: LTV/CAC ratio (cel: powyżej 3x), Payback period (czas odrobienia CAC). Rynkowe: Market share, brand awareness (branded search volume), share of voice.",
    },
  ];

  return (
    <>
      <SEOHead
        title="GTM Strategy — co to jest strategia Go-to-Market? | fotz.pl"
        description="GTM Strategy co to jest — wyjasnamy czym jest Go-to-Market Strategy, elementy GTM, jak napisac strategię GTM i czym rozni sie od business planu."
        canonical="https://fotz.pl/blog/gtm-strategy-co-to"
      />
      <ArticleSchema
        title="GTM Strategy — co to jest strategia Go-to-Market?"
        description="Czym jest GTM Strategy (Go-to-Market), elementy strategii GTM, PLG vs SLG, jak napisac GTM i jak mierzyc jego sukces."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/gtm-strategy-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Map className="w-4 h-4" /> Startup i B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                GTM Strategy — co to jest strategia Go-to-Market?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                GTM Strategy to plan jak wprowadzic produkt na rynek — ICP, pricing, kanaly i model sprzedazy.
                Elementy, PLG vs SLG i jak mierzyc sukces.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kluczowe elementy GTM Strategy</h2>
              <div className="space-y-3 mb-6">
                {gtmComponents.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{c.component}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">PLG vs SLG — modele GTM</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">PLG (Product-Led)</th>
                      <th className="text-left p-3 border border-slate-700">SLG (Sales-Led)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspekt: "Motor wzrostu", plg: "Sam produkt (viral, freemium)", slg: "Sprzedawcy (SDR, AE)" },
                      { aspekt: "CAC", plg: "Niski — skaluje sie", slg: "Wysoki — wymaga ludzi" },
                      { aspekt: "ACV (wartosc klienta)", plg: "Nizszy — self-serve", slg: "Wyzszy — enterprise deale" },
                      { aspekt: "Przyklady", plg: "Slack, Figma, Notion, Dropbox", slg: "Salesforce, ServiceNow, SAP" },
                      { aspekt: "Kiedy uzywac", plg: "Produkt ma jasna wartosc, nizki ACV", slg: "Kompleksowy produkt, enterprise" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspekt}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.plg}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.slg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strony jako centrum GTM Strategy?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony i landing page ktore sa sercem Twojej GTM — konwertuja ruch z kazdego kanalu na leady i trialy.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — GTM Strategy co to jest</h2>
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
          heading="Pomozemy Ci zbudowac obecnosc online w ramach GTM"
          subheading="Strona, SEO i landing page — infrastruktura marketingowa kluczowa dla kazdej GTM Strategy."
        />
      </Layout>
    </>
  );
}
