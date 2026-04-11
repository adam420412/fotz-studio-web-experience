import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Users, TrendingUp, Briefcase, Target } from "lucide-react";
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

export default function BlogB2BCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "B2B — co to jest? Biznes między firmami" },
  ];

  const b2bVsB2C = [
    { aspect: "Klient", b2b: "Firma / organizacja", b2c: "Osoba fizyczna (konsument)" },
    { aspect: "Decyzja zakupowa", b2b: "Wielu decydentów, długi proces (tygodnie/miesiące)", b2c: "Jedna osoba, szybka decyzja" },
    { aspect: "Wartość transakcji", b2b: "Wysoka (tysiące–miliony zł)", b2c: "Niska–średnia" },
    { aspect: "Relacja", b2b: "Długoterminowa, oparta na zaufaniu", b2c: "Często jednorazowa" },
    { aspect: "Marketing", b2b: "LinkedIn, konferencje, webinary, content marketing", b2c: "Social media, TV, influencerzy" },
    { aspect: "Cena", b2b: "Negocjowana, rabaty ilościowe", b2c: "Stała, publiczna" },
  ];

  const b2bChannels = [
    { icon: Users, name: "LinkedIn Marketing", desc: "Najskuteczniejszy kanał B2B — targetowanie po stanowisku, branży, wielkości firmy. Ideal dla lead generation." },
    { icon: TrendingUp, name: "SEO + Content Marketing", desc: "Artykuły eksperckie, case studies, whitepapers — przyciągają decydentów szukających rozwiązań." },
    { icon: Target, name: "Email marketing B2B", desc: "Nurturing leadów sekwencjami emaili — edukacja i budowanie relacji przez cykl sprzedaży." },
    { icon: Briefcase, name: "Cold outreach", desc: "Zimne emaile i cold calling do kwalifikowanych prospektów. Wymaga personalizacji i wartości." },
  ];

  const faqItems = [
    {
      question: "Co to jest B2B?",
      answer:
        "B2B (Business to Business, pol. biznes między firmami) to model sprzedaży, w którym firma sprzedaje produkty lub usługi innym firmom, a nie konsumentom. Przykłady B2B: agencja reklamowa obsługująca firmy, producent komponentów sprzedający do fabryk, dostawca oprogramowania SaaS dla firm, hurtownia sprzedająca do sklepów detalicznych. Przeciwieństwo B2B to B2C (Business to Consumer) — sprzedaż bezpośrednio do konsumentów.",
    },
    {
      question: "Czym różni się sprzedaż B2B od B2C?",
      answer:
        "Kluczowe różnice: Decyzja zakupowa: B2B = komitet zakupowy (kilka osób), długi cykl sprzedaży (tygodnie-miesiące). B2C = jedna osoba, szybka decyzja. Wartość: B2B transakcje są zazwyczaj znacznie wyższe. Relacja: B2B stawia na długoterminowe partnerstwo, B2C na jednorazowe transakcje. Racjonalność: B2B decyzje są głównie racjonalne (ROI, efektywność), B2C często emocjonalne. Marketing: B2B = LinkedIn, webinary, treści eksperckie; B2C = social media, reklamy masowe.",
    },
    {
      question: "Jak pozyskiwać klientów B2B?",
      answer:
        "Najskuteczniejsze metody pozyskiwania klientów B2B: 1) LinkedIn — budowanie sieci, LinkedIn Ads, outreach. 2) Content marketing — artykuły eksperckie, case studies, webinary przyciągające decydentów. 3) SEO B2B — pozycjonowanie na frazy branżowe szukane przez kupujących. 4) Cold email / cold calling — zimny kontakt do kwalifikowanych prospektów. 5) Referencje i polecenia — najskuteczniejszy kanał (word of mouth). 6) Konferencje branżowe — networking i budowanie relacji. 7) Partnerstwa — współpraca z firmami docierającymi do tej samej grupy docelowej.",
    },
    {
      question: "Co to jest lead B2B?",
      answer:
        "Lead B2B to firma lub osoba z firmy, która wyraziła zainteresowanie Twoim produktem lub usługą. Typy leadów: MQL (Marketing Qualified Lead) — osoba która pobrała materiały, zarejestrowała się na webinar. SQL (Sales Qualified Lead) — zweryfikowany przez dział sprzedaży, gotowy do rozmowy. PQL (Product Qualified Lead) — korzysta z wersji trial i wykazuje aktywność. Cykl: generowanie leadów (marketing) → kwalifikacja → nurturing → close (sprzedaż) → onboarding → retention.",
    },
    {
      question: "Czym jest marketing B2B?",
      answer:
        "Marketing B2B to zestaw działań nakierowanych na dotarcie do firm jako klientów. Specyfika: dłuższy cykl sprzedaży wymaga edukowania i budowania zaufania. Treści eksperckie (whitepapers, case studies, webinary) są ważniejsze niż reklamy produktowe. LinkedIn jest kluczowym kanałem. ROI musi być mierzalny i komunikowany. Najlepsze kanały B2B według badań Gartner: SEO/content marketing (najwyższy ROI), email marketing, LinkedIn, webinary i eventy, cold outreach (email + phone).",
    },
    {
      question: "Co to jest cykl sprzedaży B2B?",
      answer:
        "Cykl sprzedaży B2B to ścieżka od pierwszego kontaktu do zamknięcia umowy. Etapy: 1) Prospecting — identyfikacja potencjalnych klientów. 2) Kwalifikacja — czy lead ma budżet, potrzebę, decyzyjność? 3) Discovery — zrozumienie problemu klienta. 4) Prezentacja/demo — pokazanie rozwiązania. 5) Oferta/propozycja — document z ceną i zakresem. 6) Negocjacje — warunki kontraktu. 7) Zamknięcie — podpisanie umowy. Typowe czasy: mały kontrakt (do 50k zł): 1-4 tygodnie; duży enterprise: 3-18 miesięcy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="B2B — co to jest? Biznes między firmami — poradnik | fotz.pl"
        description="B2B co to jest — wyjaśniamy czym jest model B2B, jak różni się od B2C, jak pozyskiwać klientów B2B i co to jest lead B2B. Kompletny poradnik."
        canonical="https://fotz.pl/blog/b2b-co-to-jest"
      />
      <ArticleSchema
        title="B2B — co to jest? Biznes między firmami"
        description="Czym jest B2B (Business to Business), różnica B2B vs B2C, jak pozyskiwać klientów B2B, lead B2B i cykl sprzedaży w modelu biznesowym B2B."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/b2b-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Sprzedaż i marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                B2B — co to jest i jak działa sprzedaż między firmami?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                B2B (Business to Business) to model sprzedaży między firmami. Czym różni się od B2C,
                jak pozyskiwać klientów B2B i jakie kanały marketingowe działają najlepiej?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">B2B vs B2C — porównanie</h2>
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
                    {b2bVsB2C.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspect}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.b2b}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.b2c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Najskuteczniejsze kanały marketingu B2B</h2>
              <div className="space-y-4 mb-6">
                {b2bChannels.map((ch, idx) => {
                  const Icon = ch.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-slate-900 text-sm">{ch.name}</h3>
                      </div>
                      <p className="text-slate-600 text-sm">{ch.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Lejek sprzedaży B2B</h2>
              <div className="space-y-2 mb-6">
                {[
                  { stage: "Awareness (Świadomość)", desc: "Potencjalny klient dowiaduje się o Twojej firmie — przez SEO, LinkedIn, polecenie, reklamę." },
                  { stage: "Interest (Zainteresowanie)", desc: "Czyta Twoje treści, odwiedza stronę, pobiera materiały, rejestruje się na webinar." },
                  { stage: "Consideration (Rozważanie)", desc: "Porównuje dostawców, prosi o demo lub wycenę, analizuje case studies." },
                  { stage: "Intent (Zamiar)", desc: "Wysyła zapytanie ofertowe (RFQ/RFP), chce umówić spotkanie z handlowcem." },
                  { stage: "Purchase (Zakup)", desc: "Negocjacje warunków, podpisanie umowy, finalizacja transakcji." },
                  { stage: "Retention (Utrzymanie)", desc: "Onboarding, obsługa klienta, upsell — klient B2B to relacja na lata." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.stage}</p>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Szukasz agencji marketingowej dla firm B2B?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Realizujemy kampanie B2B — SEO, LinkedIn Ads, Google Ads i content marketing z mierzalnym ROI.
                </p>
                <Link to="/uslugi/marketing-b2b" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Marketing B2B — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — B2B co to jest</h2>
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
          heading="Pozyskaj klientów B2B — skuteczny marketing dla firm"
          subheading="SEO, LinkedIn, Google Ads — docieramy do decydentów w Twojej branży."
        />
      </Layout>
    </>
  );
}
