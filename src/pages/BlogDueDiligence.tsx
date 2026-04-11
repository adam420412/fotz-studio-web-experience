import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Search, Shield, BarChart2, FileText } from "lucide-react";
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

export default function BlogDueDiligence() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Due diligence — co to jest i jak przebiega?" },
  ];

  const dueDiligenceTypes = [
    { icon: BarChart2, type: "Financial DD (finansowe)", desc: "Analiza wyników finansowych: rachunki zysku i strat, bilans, przepływy gotówkowe, zadłużenie, normalizations EBITDA, jakość zysku. Szuka ukrytych zobowiązań i ryzyk finansowych." },
    { icon: Shield, type: "Legal DD (prawne)", desc: "Przegląd umów, własności intelektualnej, sporów sądowych, struktury własności, zgodności z przepisami. Weryfikacja czy sprzedający rzeczywiście posiada to co sprzedaje." },
    { icon: Search, type: "Commercial DD (rynkowe)", desc: "Analiza rynku, pozycji konkurencyjnej, bazy klientów, koncentracji przychodów, trendów sektorowych. Walidacja założeń biznesowych." },
    { icon: FileText, type: "Technical/IT DD", desc: "Ocena infrastruktury technologicznej, długu technicznego, bezpieczeństwa danych, własności kodu. Kluczowe przy zakupie firm technologicznych i SaaS." },
  ];

  const faqItems = [
    {
      question: "Co to jest due diligence?",
      answer:
        "Due diligence (z łaciny: należyta staranność) to proces szczegółowego badania i weryfikacji informacji o firmie, nieruchomości lub inwestycji przed podjęciem decyzji o zakupie, fuzji lub inwestycji. W praktyce biznesowej oznacza kompleksowy audyt prawny, finansowy, operacyjny i handlowy przeprowadzany przez kupującego (lub inwestora) przed sfinalizowaniem transakcji. Cel: identyfikacja ryzyk i potwierdzenie że kupujesz to co myślisz.",
    },
    {
      question: "Kiedy przeprowadza się due diligence?",
      answer:
        "Due diligence przeprowadza się w transakcjach M&A (fuzje i przejęcia) — przed zakupem firmy. Przy inwestycjach private equity i venture capital — przed rundą finansowania. W transakcjach nieruchomościowych — przed zakupem nieruchomości komercyjnych. Przy IPO (pierwsza oferta publiczna) — przez banki inwestycyjne. Przy partnerstwach strategicznych — ocena partnera. Standardowo DD następuje po podpisaniu listu intencyjnego (LOI) a przed finalizacją umowy sprzedaży.",
    },
    {
      question: "Ile trwa due diligence?",
      answer:
        "Czas trwania due diligence zależy od złożoności transakcji: Mała firma (do 10 mln zł): 2-6 tygodni. Średnia firma (10-100 mln zł): 4-12 tygodni. Duża firma / korporacja: 3-6 miesięcy. Jednorazowa nieruchomość komercyjna: 2-4 tygodnie. Czas skraca się gdy sprzedający dobrze przygotuje data room (dokumentację). Typowe opóźnienia: brakujące umowy, nieuporządkowana księgowość, nierozwiązane spory prawne.",
    },
    {
      question: "Co wchodzi w skład due diligence?",
      answer:
        "Standardowe due diligence obejmuje: Finansowe: 3 lata sprawozdań finansowych, prognozy, normalizations, quality of earnings. Prawne: umowy kluczowe, własność intelektualna, spory sądowe, compliance, struktura własnościowa. Komercyjne: analiza rynku, klientów, konkurencji, potoku sprzedaży. Operacyjne: procesy, dostawcy, pracownicy, ryzyko koncentracji. Podatkowe: zobowiązania podatkowe, ryzyko podatkowe, optymalizacje. IT/techniczne: infrastruktura, bezpieczeństwo, kod, dług techniczny.",
    },
    {
      question: "Ile kosztuje due diligence?",
      answer:
        "Koszty due diligence: Prawne (kancelaria): 15 000 - 200 000 zł zależnie od złożoności. Finansowe (audytor/doradca): 10 000 - 150 000 zł. Komercyjne (konsultant): 20 000 - 100 000 zł. Razem dla transakcji 5-20 mln zł: często 50 000 - 200 000 zł. DD nie jest kosztem — to ubezpieczenie. Odkrycie ukrytego zobowiązania 1 mln zł za 50 000 zł due diligence to doskonała inwestycja. Wiele transakcji upada po DD — i słusznie, to znaczy DD spełniło swoją rolę.",
    },
    {
      question: "Co to jest data room w due diligence?",
      answer:
        "Data room to bezpieczne wirtualne repozytorium dokumentów udostępniane przez sprzedającego potencjalnym nabywcom podczas due diligence. Zawiera: sprawozdania finansowe, umowy kluczowe, dokumenty korporacyjne, własność intelektualną, dane o pracownikach. Popularne platformy: Datasite (dawniej Merrill), Intralinks, iDeals, Ansarada. Dobry data room skraca czas DD o 30-50% i świadczy o profesjonalizmie sprzedającego. Kupujący dostaje dostęp dopiero po podpisaniu NDA.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Due diligence — co to jest i jak przebiega? Poradnik | fotz.pl"
        description="Due diligence co to jest — wyjaśniamy czym jest due diligence w transakcjach M&A, rodzaje (finansowe, prawne, komercyjne), ile trwa i kosztuje."
        canonical="https://fotz.pl/blog/due-diligence-co-to"
      />
      <ArticleSchema
        title="Due diligence — co to jest i jak przebiega?"
        description="Czym jest due diligence, rodzaje (finansowe, prawne, komercyjne, IT), kiedy przeprowadzać, ile trwa i kosztuje oraz co to jest data room."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/due-diligence-co-to"
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
                <span className="flex items-center gap-1"><Search className="w-4 h-4" /> Fuzje i przejęcia</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Due diligence — co to jest i jak przebiega?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Due diligence to szczegółowe badanie firmy przed jej zakupem lub inwestycją.
                Rodzaje DD, czego szukać, ile trwa i co to jest data room.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje due diligence</h2>
              <div className="space-y-4 mb-6">
                {dueDiligenceTypes.map((dd, idx) => {
                  const Icon = dd.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-slate-900 text-sm">{dd.type}</h3>
                      </div>
                      <p className="text-slate-600 text-sm">{dd.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Etapy procesu due diligence</h2>
              <div className="space-y-3 mb-6">
                {[
                  { step: "1. List intencyjny (LOI)", desc: "Strony podpisują niewiążące porozumienie o zamiarze transakcji. Otwiera się DD." },
                  { step: "2. NDA i dostęp do data room", desc: "Kupujący podpisuje umowę o poufności i otrzymuje dostęp do dokumentów." },
                  { step: "3. Analiza dokumentów", desc: "Prawnicy, audytorzy i doradcy przeglądają materiały i zadają pytania (Q&A)." },
                  { step: "4. Management meetings", desc: "Spotkania z zarządem sprzedawanej firmy — weryfikacja twierdzeń i strategii." },
                  { step: "5. Raport DD", desc: "Podsumowanie wyników z wyróżnieniem kluczowych ryzyk i rekomendacjami." },
                  { step: "6. Negocjacje końcowe", desc: "Wyniki DD wpływają na cenę, warunki transakcji lub ochrony kupującego (reps & warranties)." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.step}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <BarChart2 className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Przygotowujesz firmę do sprzedaży lub inwestycji?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Silna obecność online podnosi wycenę — EBITDA z kanałów cyfrowych jest w pełni weryfikowalna.
                </p>
                <Link to="/uslugi/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Pozycjonowanie SEO — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Due diligence co to jest</h2>
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
          heading="Zwiększ wartość firmy przed sprzedażą lub inwestycją"
          subheading="Marketing cyfrowy i SEO to aktywa które kupujący widzi w due diligence."
        />
      </Layout>
    </>
  );
}
