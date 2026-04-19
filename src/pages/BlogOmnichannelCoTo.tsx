import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Layers, Smartphone, Monitor, ShoppingBag } from "lucide-react";
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

export default function BlogOmnichannelCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Omnichannel — co to jest i jak wdrozyc?" },
  ];

  const channels = [
    { channel: "Strona internetowa i sklep online", icon: Monitor, desc: "Glowne centrum informacji i sprzedazy — dostepne 24/7, zoptymalizowane pod SEO i konwersje." },
    { channel: "Aplikacja mobilna", icon: Smartphone, desc: "Dedykowane doswiadczenie na smartfonie — push notyfikacje, personalizacja, szybki checkout." },
    { channel: "Social media (Meta, TikTok, Instagram)", icon: Layers, desc: "Discovery i budowanie spolecznosci — Social Commerce pozwala kupowac bezposrednio z feedu." },
    { channel: "Sklep stacjonarny", icon: ShoppingBag, desc: "Fizyczne doswiadczenie marki — Click & Collect, zwroty online zakupow w sklepie." },
  ];

  const faqItems = [
    {
      question: "Co to jest omnichannel?",
      answer:
        "Omnichannel (z lac. omni = wszystko + ang. channel = kanal) to strategia biznesowa i marketingowa polegajaca na integracji wszystkich kanalow sprzedazy i komunikacji w jeden spojny ekosystem. Klient moze rozpoczac zakup na stronie, kontynuowac w aplikacji i sfinalizowac w sklepie stacjonarnym — z jednakowym doswiadczeniem na kazdym etapie. W omnichannel historia klienta, koszyk, profil i historia zakupow sa wspolne miedzy wszystkimi kanalami. Przyklad: Zalando, Sephora, IKEA — klient widzi te same produkty, ceny i historię zamowien w apce, na stronie i w sklepie.",
    },
    {
      question: "Czym omnichannel rozni sie od multichannel?",
      answer:
        "Multichannel = wiele kanalow dzialajacych niezaleznie. Firma jest obecna na wielu platformach (strona, sklep, social, email), ale nie sa one ze soba zintegrowane. Klient w sklepie stacjonarnym nie widzi historii zakupow online. Omnichannel = wiele kanalow dzialajacych jako jeden system. Pelna integracja danych, jednolite doswiadczenie, koszyk i profil wspolne wszedzie. Analogia: multichannel to orkiestra gdzie kazdy gra inne nuty; omnichannel to orkiestra grajaca ta sama symfonie. Omnichannel wymaga integracji CRM, ERP, POS i platformy e-commerce.",
    },
    {
      question: "Jakie sa przyklady omnichannel w Polsce?",
      answer:
        "Przykladowe wdrozenia omnichannel w Polsce: Zalando — apka, strona, zintegrowane zwroty, program lojalnosciowy. LPP (Reserved, Cropp) — Click & Collect, zwroty online do sklepu, aplikacja z historią zakupow. Biedronka — aplikacja z kuponami, Biedronka GO (sklep bez kas), cyfrowa karta lojalnosciowa. Empik — apka, strona, odbiory w punktach Empik i Paczkomat. Leroy Merlin — rezerwacja produktu online, odbiow w sklepie, porady online i stacjonarnie. Kluczowe dla wszystkich: wspolna baza danych klientow (CDP), zintegrowany koszyk, spojny program lojalnosciowy.",
    },
    {
      question: "Jak wdrozyc strategie omnichannel?",
      answer:
        "Kroki do wdrozenia omnichannel: 1) Zdefiniuj wszystkie punkty styku (touchpoints) klienta z marka. 2) Zintegruj dane — CDP (Customer Data Platform) jako centralny hub danych o kliencie. 3) Zunifikuj CRM — jedna historia klienta niezaleznie od kanalu. 4) Dostosuj stock — zintegrowany magazyn online i offline (BOPIS: Buy Online Pick Up In Store). 5) Spojny branding i UX — te same ceny, promocje i wygladal we wszystkich kanalach. 6) Mierz cross-channel — jak klienci poruszaja sie miedzy kanalami przed zakupem. Narzedzia: Salesforce Commerce, Magento, Shopify Plus (B2B omnichannel).",
    },
    {
      question: "Jakie sa korzysci z omnichannel?",
      answer:
        "Korzysci z omnichannel: Wyzsze przychody — klienci omnichannel wydaja srednio 4-10x wiecej niz single-channel (Harvard Business Review). Wieksza lojalnosc — lojalnosciowe programy omnichannel maja o 30% wyzsza retencje. Lepsze doswiadczenie klienta — klient nie musi powtarzac swoich danych ani szukac informacji od nowa. Dokladniejsze dane — pelny obraz customer journey umozliwia lepszą personalizacje. Nizszy CAC — retargeting cross-channel jest skuteczniejszy. Wyzszy LTV — zadowoleni klienci kupuja czesciej i wiecej.",
    },
    {
      question: "Ile kosztuje wdrozenie omnichannel?",
      answer:
        "Koszty wdrozenia omnichannel zalezy od skali: Maly biznes (sklep + social + email): 5 000 - 30 000 zl — platforma Shopify + Klaviyo + integracje. Sredni e-commerce: 50 000 - 300 000 zl — Magento/Shopify Plus + CDP + CRM + integracja POS. Enterprise (siec sklepow + online): 300 000+ zl — custom integrations, Salesforce Commerce, hybris. Kluczowe komponenty: platforma e-commerce, system CRM/CDP, integracja z POS (kasa sklepowa), platforma lojalnosciowa, marketing automation. Alternatywa dla MŚP: zacznij od integracji sklepu online z programem lojalnosciowym i wspolnym kontem klienta.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Omnichannel — co to jest i jak wdrozyc strategię? | fotz.pl"
        description="Omnichannel co to jest — wyjasnamy czym jest strategia omnichannel, roznica omnichannel vs multichannel, przyklady z Polski, korzysci i jak wdrozyc omnichannel."
        canonical="https://fotz.pl/blog/omnichannel-co-to"

        keywords="Omnichannel co to jest, Omnichannel definicja, czym jest Omnichannel, Omnichannel przykłady, jak działa Omnichannel, Omnichannel znaczenie, Omnichannel przewodnik"
      />
      <ArticleSchema
        title="Omnichannel — co to jest i jak wdrozyc strategię?"
        description="Czym jest omnichannel, roznica vs multichannel, polskie przyklady wdrozen, korzysci i koszty implementacji strategii omnichannel w e-commerce."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/omnichannel-co-to"
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
                <span className="flex items-center gap-1"><Layers className="w-4 h-4" /> E-commerce i marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Omnichannel — co to jest i jak wdrozyc?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Omnichannel to integracja wszystkich kanalow sprzedazy w jeden spojny ekosystem.
                Roznica vs multichannel, polskie przyklady i jak wdrozyc.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kluczowe kanaly w strategii omnichannel</h2>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {channels.map((c, idx) => {
                  const Icon = c.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <h3 className="font-bold text-slate-900 text-xs">{c.channel}</h3>
                      </div>
                      <p className="text-slate-500 text-xs">{c.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Omnichannel vs Multichannel — kluczowe roznice</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">Multichannel</th>
                      <th className="text-left p-3 border border-slate-700">Omnichannel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspekt: "Integracja", multi: "Kanaly niezalezne", omni: "Pelna integracja danych" },
                      { aspekt: "Dane klienta", multi: "Osobne bazy per kanal", omni: "Jedna wspolna baza (CDP)" },
                      { aspekt: "Koszyk", multi: "Osobny per kanal", omni: "Wspolny we wszystkich kanalach" },
                      { aspekt: "Historia", multi: "Nie widoczna cross-channel", omni: "Pelna historia zakupow wszedie" },
                      { aspekt: "Doswiadczenie", multi: "Rozne per kanal", omni: "Spojne i spersonalizowane" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspekt}</td>
                        <td className="p-3 border border-slate-200 text-orange-600 text-xs">{row.multi}</td>
                        <td className="p-3 border border-slate-200 text-green-600 text-xs">{row.omni}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <ShoppingBag className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz sklep internetowy jako czesc strategii omnichannel?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy sklepy i strony zoptymalizowane pod konwersje — gotowe do integracji z CRM, POS i marketing automation.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Omnichannel co to jest</h2>
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
          heading="Zbudujemy stronne ktora dziala w Twojej strategii omnichannel"
          subheading="Sklep, landing page i integracje — fundamenty spojnego doswiadczenia dla Twoich klientow."
        />
      </Layout>
    </>
  );
}
