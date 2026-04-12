import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Zap, Target, BarChart2 } from "lucide-react";
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

export default function BlogDemandGenerationCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Demand Generation — co to jest i jak budowac popyt?" },
  ];

  const demandVsLead = [
    { aspekt: "Cel", demand: "Budowanie popytu i swiadomosci kategorii", lead: "Pozyskiwanie danych kontaktowych (leady)" },
    { aspekt: "Podejscie", demand: "Edukacja, storytelling, content bez bram", lead: "Gated content, formularze, lead magnety" },
    { aspekt: "Metryki", demand: "Pipeline, revenue, brand awareness", lead: "Liczba leadow, CPL, MQL" },
    { aspekt: "Horyzon", demand: "Dlugosfalowy — budowanie rynku", lead: "Krotkoterminowy — szybkie wyniki" },
    { aspekt: "Przyklad", demand: "Blog, podcast, LinkedIn organiczny, video", lead: "E-book za email, webinar z rejestracją, demo" },
  ];

  const faqItems = [
    {
      question: "Co to jest Demand Generation?",
      answer:
        "Demand Generation (Demand Gen) to strategia marketingowa skupiona na tworzeniu swiadomosci i popytu na produkt lub usluge wsrod potencjalnych klientow — zanim beda aktywnie szukac rozwiazania. W odroznieniu od Lead Generation (ktore skupia sie na zbieraniu kontaktow), Demand Gen buduje kategorie, edukuje rynek i sprawia ze klienci zaczynaja rozumiec ze maja problem ktory Twoj produkt rozwiazuje. Demand Gen jest szczegolnie wazne gdy: wchodzisz na nowy rynek, tworzysz nowa kategorie produktow, walczysz o 'dark funnel' (klienci ktorzy szukaja ale nie trafiaja do Ciebie).",
    },
    {
      question: "Czym rozni sie Demand Generation od Lead Generation?",
      answer:
        "Lead Generation skupia sie na zbieraniu danych kontaktowych — e-bookami, webinarami, formularzami. Celem jest lista emaili lub baza leadow do obrobienia przez sales. Demand Generation buduje popyt i swiadomosc — przez content bez bram (ungated), podcast, video, linkedin posts, community. Cel: klienci sami szukaja Twojej marki gdy beda gotowi kupic. Trend 2024-2025: firmy odchodzą od agresywnego lead gen (e-booki za email) do demand gen — budowania zaufania przez wartosciowy content bez wymuszania danych kontaktowych. Metryka demand gen: branded search growth, pipeline influenced by content, win rate dla klientow ktory konsumowali content.",
    },
    {
      question: "Jak budowac Demand Generation?",
      answer:
        "Strategie Demand Generation: 1) Content Marketing bez bram (ungated) — blog, podcast, newsletter, LinkedIn posts — wartosc bez wymuszania emaila. 2) Thought Leadership — CEO i eksperci firmy jako twarze marki na LinkedIn, w branzy. 3) Community Building — forum, Slack community, Discord — skupianie ICP wokol tematu. 4) Video i Podcast — YouTube, Spotify — budowanie audytorium long-term. 5) Webinary i Events — bez agresywnego zbierania leadow, skupione na wartosci. 6) Partner Content — goscinne posty, raporty branzy, cytowania w mediach. Kluczowe: bycz wszedzie gdzie jest Twoj ICP zanim zacznie aktywnie szukac rozwiazania.",
    },
    {
      question: "Co to jest Dark Funnel?",
      answer:
        "Dark Funnel (ciemny lejek) to czesc sciezki zakupowej klienta ktora jest niewidoczna w standardowych narzedzia analitycznych. Klient moze: sluchac Twojego podcastu, czytac posty na LinkedIn, rozmawiac o Tobie z kolegami, ogladac Twoje video na YouTube — i zaden z tych touchpointow nie pojawi sie w Google Analytics ani CRM. W dark funnelu: wiekszosc B2B decision-making odbywa sie przed pierwszym kontaktem ze sprzedaza, 70%+ procesu zakupowego to samodzielny research. Jak mierzyc dark funnel: badaj skad wiedzieli o Tobie gdy kontaktowali sie (first-party attribution), pytaj: 'Skad sie o nas dowiedziales?'",
    },
    {
      question: "Jak mierzyc efektywnosc Demand Generation?",
      answer:
        "Metryki Demand Generation: Pipeline Metrics: pipeline generated (wartosc szans ktore powstaly), pipeline velocity (jak szybko leady przechodzą przez lejek). Revenue Metrics: revenue influenced by content, win rate. Brand Metrics: branded search volume (wzrost zapytan o nazwe firmy w Google), direct traffic, social reach. Engagement: czas na stronie, powracajacy uzytkownicy, subskrypcje newsletter. Jakosciowe: w procesie sprzedazy pytaj 'Skad sie o nas dowiedzial/as?' — to pokaze demand gen touchpoints ktore nie sa widoczne w analytics. Trudnosc: demand gen jest trudny do bezposredniej atrybucji — wymaga wiary w dlugofalowa budowanie relacji i marki.",
    },
    {
      question: "Jaki budzet potrzebny na Demand Generation?",
      answer:
        "Budzety Demand Generation w B2B: Content Team (in-house): 15 000 - 50 000 zl/mies. (writers, designer, SEO). Agencja content: 5 000 - 30 000 zl/mies. LinkedIn Ads (sponsored content): 10 000 - 50 000+ zl/mies. YouTube/Podcast produkcja: 3 000 - 20 000 zl/odcinek. Events i webinary: 5 000 - 100 000+ zl/event. Zasada 70/30 w marketingu B2B (Benet Field Theory): 70% budzetu na brand building i demand gen (dlugofalowe), 30% na lead gen i aktywizacje (krótkoterminowe). Firmy ktore skupiaja sie tylko na lead gen i pomiajaja demand gen placa wyzszy CAC i maja trudniejsza sprzedaz.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Demand Generation — co to jest i jak budowac popyt? | fotz.pl"
        description="Demand Generation co to jest — wyjasnamy czym jest demand gen, roznica vs lead generation, dark funnel, strategie budowania popytu i metryki demand gen."
        canonical="https://fotz.pl/blog/demand-generation-co-to"
      />
      <ArticleSchema
        title="Demand Generation — co to jest i jak budowac popyt?"
        description="Czym jest Demand Generation, roznica vs Lead Generation, dark funnel, strategie demand gen w B2B i jak mierzyc efektywnosc."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/demand-generation-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> Marketing B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Demand Generation — co to jest i jak budowac popyt?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Demand Generation to budowanie popytu i swiadomosci kategorii produktu zanim klienci zaczna aktywnie szukac.
                Dark funnel, strategie i metryki.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Demand Generation vs Lead Generation</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">Demand Gen</th>
                      <th className="text-left p-3 border border-slate-700">Lead Gen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demandVsLead.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspekt}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.demand}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.lead}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Dark Funnel — niewidoczna droga klienta</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6">
                <p className="text-slate-400 text-xs mb-3">Touchpointy ktore analytics nie widzi:</p>
                <div className="space-y-2 text-sm">
                  {["Podcast — klient sluchal 20 odcinkow zanim kontaktowal sie", "LinkedIn — czytanie postow bez klikniec (dark social)", "Word of mouth — kolega polecil na spotkaniu", "Community Slack/Discord — widzial odpowiedzi na pytania", "YouTube — ogladal video bez logowania", "Konferencja — widzial prezentacje prowadzacego"].map((t, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-slate-500 flex-shrink-0">?</span>
                      <span className="text-xs">{t}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-3">Pytaj klientow: 'Skad sie o nas dowiedziales?' — to jedyna metoda odkrycia dark funnel.</p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">SEO i content to fundament Demand Gen — zacznij od strony</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy blogi i strony ktore generuja demand — ruch organiczny ktory buduje swiadomosc kategorii i prowadzi do sprzedazy.
                </p>
                <Link to="/seo/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  SEO i pozycjonowanie — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Demand Generation co to jest</h2>
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
          heading="Zbudujemy demand generation przez SEO i content"
          subheading="Blog, pozycjonowanie i content marketing — budujemy popyt na Twoj produkt przez widocznosc organiczna."
        />
      </Layout>
    </>
  );
}
