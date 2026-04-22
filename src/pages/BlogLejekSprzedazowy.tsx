import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Filter, Users, Target } from "lucide-react";
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

export default function BlogLejekSprzedazowy() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Lejek sprzedazowy — co to jest i jak go zbudowac?" },
  ];

  const stages = [
    { stage: "Swiadomosc (Awareness)", desc: "Potencjalny klient dowiaduje sie o Twojej marce — przez reklame, SEO, social media lub polecenie.", icon: Users },
    { stage: "Zainteresowanie (Interest)", desc: "Uzytkownik aktywnie szuka informacji — czyta blog, ogladda webinary, pobiera materialy.", icon: Filter },
    { stage: "Rozwazanie (Consideration)", desc: "Porownuje oferty, czyta recenzje, kontaktuje sie z sales. To kluczowy etap dla B2B.", icon: Target },
    { stage: "Decyzja (Decision)", desc: "Klient wybiera dostawce i finalizuje zakup. Tutaj liczy sie oferta, trial, gwarancja.", icon: TrendingUp },
    { stage: "Lojalnosc (Retention)", desc: "Po zakupie: onboarding, upsell, program lojalnosciowy. Utrzymanie klienta jest 5x tansze niz pozyskanie.", icon: ArrowRight },
  ];

  const faqItems = [
    {
      question: "Co to jest lejek sprzedazowy?",
      answer:
        "Lejek sprzedazowy (ang. sales funnel) to model opisujacy droge klienta od pierwszego kontaktu z marka do finalizacji zakupu i dalszej lojalnosci. Nazwa pochodzi od ksztaltu: na gorze szeroka baza potencjalnych klientow, na dole waska grupa, ktora faktycznie kupuje. Klasyczny lejek dzieli sie na etapy: TOFU (Top of Funnel) — swiadomosc, MOFU (Middle of Funnel) — rozwazanie, BOFU (Bottom of Funnel) — decyzja. W marketingu cyfrowym lejek pozwala zrozumiec gdzie klienci odchodza i jak poprawic konwersje na kazdym etapie.",
    },
    {
      question: "Czym rozni sie lejek sprzedazowy od lejka marketingowego?",
      answer:
        "Lejek marketingowy (marketing funnel) skupia sie na pozyskaniu leadow i budowaniu swiadomosci marki — od reklamy przez content az do momentu przekazania leada do sprzedazy. Lejek sprzedazowy (sales funnel) zaczyna sie od momentu gdy lead trafia do dzialu sprzedazy i konczy sie zamknieciem transakcji. W praktyce obie nazwy sa uzywane wymiennie. Pelny lejek laczacy marketing i sprzedaz jest czesto nazywany lejkiem przychodow (revenue funnel) lub flywheel (kolo zamachowe) w metodologii inbound.",
    },
    {
      question: "Jak zbudowac lejek sprzedazowy?",
      answer:
        "Kroki do zbudowania lejka sprzedazowego: 1) Zdefiniuj persona — kto jest Twoim idealnym klientem (ICP). 2) Mapuj etapy — swiadomosc, zainteresowanie, rozwazanie, decyzja. 3) Stwoz tresci dla kazdego etapu: TOFU (blog, social, SEO), MOFU (webinary, case studies, porownania), BOFU (demo, trial, oferta). 4) Ustaw lead scoring — punktuj leady wg zachowania. 5) Automatyzuj nurturing — email sekwencje w HubSpot, ActiveCampaign. 6) Mierz konwersje miedzy etapami i iteruj. Kluczowa metryka: conversion rate na kazdym przejsciu miedzy etapami.",
    },
    {
      question: "Jakie sa etapy lejka sprzedazowego AIDA?",
      answer:
        "Model AIDA to klasyczny lejek: Attention (Uwaga) — przyciagnij wzrok reklama, naglowkiem, contentem. Interest (Zainteresowanie) — wzbudz ciekawosc korzysc produktu. Desire (Pragnienie) — pokaz jak produkt rozwiazuje problem, social proof, case studies. Action (Dzialanie) — CTA, oferta, trial, zakup. AIDA jest szczegolnie uzywana w copywritingu i reklamie. Wspolczesne modele rozszerzaja AIDA o etapy po zakupie: AIDAS (Satisfaction) lub AIDCAS (Conviction, Action, Satisfaction).",
    },
    {
      question: "Jak mierzyc efektywnosc lejka sprzedazowego?",
      answer:
        "Kluczowe metryki lejka sprzedazowego: Conversion Rate (CR) — procent przejsc miedzy etapami (np. lead do SQL). Cost Per Lead (CPL) — koszt pozyskania leada na gorze lejka. CAC (Customer Acquisition Cost) — laczny koszt pozyskania klienta. Sales Cycle Length — sredni czas od pierwszego kontaktu do zamkniecia. Win Rate — procent szans sprzedazowych zamknietych pozytywnie. Pipeline Velocity — szybkosc z jaka leady przechodza przez lejek. Narzedzia: CRM (HubSpot, Salesforce, Pipedrive), Google Analytics (dla lejka webowego).",
    },
    {
      question: "Czym rozni sie lejek B2B od B2C?",
      answer:
        "Lejek B2B jest dluzszy i bardziej skomplikowany: wiecej decydentow (buying committee), dlugi cykl sprzedazy (3-18 miesiecy), wyzsze transakcje, wieksze znaczenie relacji i zaufania. Kluczowe kanaly B2B: LinkedIn, cold email, webinary, wydarzenia bransowe, content marketing. Lejek B2C jest krotszy: impulsowe decyzje, jeden decydent, niskie transakcje, kluczowe kanaly: Meta Ads, Google Ads, email, influencerzy. W B2C kluczowe jest TOFU (swiadomosc i ruch), w B2B — MOFU i BOFU (lead nurturing i relacje).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Lejek sprzedazowy — co to jest i jak go zbudowac? | fotz.pl"
        description="Lejek sprzedazowy co to jest — wyjasnamy etapy lejka (AIDA, TOFU/MOFU/BOFU), jak zbudowac lejek sprzedazowy B2B i B2C oraz jak mierzyc jego efektywnosc."
        canonical="https://fotz.pl/blog/lejek-sprzedazowy-co-to"

        keywords="Lejek sprzedazowy co to jest, Lejek sprzedazowy definicja, czym jest Lejek sprzedazowy, Lejek sprzedazowy w sprzedaży, Lejek sprzedazowy strategia, Lejek sprzedazowy przykłady, jak używać Lejek sprzedazowy"
      />
      <ArticleSchema
        title="Lejek sprzedazowy — co to jest i jak go zbudowac?"
        description="Czym jest lejek sprzedazowy, etapy AIDA i TOFU/MOFU/BOFU, jak budowac lejek B2B vs B2C, metryki i narzedzia do optymalizacji konwersji."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/lejek-sprzedazowy-co-to"
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
                <span className="flex items-center gap-1"><Filter className="w-4 h-4" /> Sprzedaz i marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Lejek sprzedazowy — co to jest i jak go zbudowac?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Lejek sprzedazowy to model drogi klienta od swiadomosci do zakupu.
                Etapy AIDA, TOFU/MOFU/BOFU, metryki i jak zoptymalizowac konwersje.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Etapy lejka sprzedazowego</h2>
              <div className="space-y-3 mb-6">
                {stages.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{s.stage}</p>
                        <p className="text-slate-600 text-xs mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">TOFU / MOFU / BOFU — content dla kazdego etapu</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Etap lejka</th>
                      <th className="text-left p-3 border border-slate-700">Cel</th>
                      <th className="text-left p-3 border border-slate-700">Przykladowe formaty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { etap: "TOFU (Top of Funnel)", cel: "Swiadomosc, ruch", formaty: "Blog, SEO, social media, podcast, YouTube" },
                      { etap: "MOFU (Middle of Funnel)", cel: "Zainteresowanie, lead", formaty: "Webinar, e-book, case study, porownania, newsletter" },
                      { etap: "BOFU (Bottom of Funnel)", cel: "Decyzja, zakup", formaty: "Demo, trial, oferta, referencje, ROI calculator" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-800 text-xs">{row.etap}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.cel}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.formaty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strony ktora konwertuje na kazdym etapie lejka?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy landing page i strony produktowe zaprojektowane pod BOFU — zoptymalizowane pod konwersje i sprzedaz.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — lejek sprzedazowy co to jest</h2>
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
