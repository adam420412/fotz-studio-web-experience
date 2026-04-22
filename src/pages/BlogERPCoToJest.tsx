import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, BarChart2, Zap, Settings } from "lucide-react";
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

export default function BlogERPCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "ERP — co to jest i jak działa system ERP?" },
  ];

  const erpModules = [
    { module: "Finanse i rachunkowość", desc: "Księgowość, faktury, rozrachunki, raportowanie finansowe, cashflow." },
    { module: "Zarządzanie zapasami", desc: "Stany magazynowe, przyjęcia i wydania, inwentaryzacja, optymalizacja stocku." },
    { module: "Sprzedaż i CRM", desc: "Zamówienia sprzedaży, faktury, lejek sprzedaży, zarządzanie kontrahentami." },
    { module: "Zakupy i zaopatrzenie", desc: "Zamówienia zakupu, dostawcy, procedury przetargowe, ocena dostawców." },
    { module: "Produkcja (MRP)", desc: "Planowanie produkcji, BOM (bill of materials), zlecenia produkcyjne, MRP II." },
    { module: "HR i kadry", desc: "Kadry, płace, ewidencja czasu pracy, urlopy, rekrutacja." },
    { module: "Projekty", desc: "Zarządzanie projektami, budżetowanie, czas pracy, rozliczanie projektów." },
  ];

  const popularERP = [
    { name: "SAP S/4HANA", size: "Korporacje (1000+ pracowników)", price: "Od 150 000 zł/rok" },
    { name: "Microsoft Dynamics 365", size: "Średnie i duże firmy", price: "Od 50 000 zł/rok" },
    { name: "Oracle NetSuite", size: "Średnie firmy, SaaS-native", price: "Od 30 000 zł/rok" },
    { name: "Comarch ERP XL", size: "Polskie firmy produkcyjne", price: "Od 20 000 zł/rok" },
    { name: "Enova365", size: "MŚP w Polsce", price: "Od 5 000 zł/rok" },
    { name: "Odoo", size: "Małe i średnie firmy", price: "Od 2 000 zł/rok (open source)" },
  ];

  const faqItems = [
    {
      question: "Co to jest ERP?",
      answer:
        "ERP (Enterprise Resource Planning, planowanie zasobów przedsiębiorstwa) to zintegrowany system informatyczny zarządzający wszystkimi kluczowymi procesami biznesowymi firmy z jednego miejsca — finansami, magazynem, sprzedażą, produkcją, HR i zakupami. Zamiast oddzielnych programów dla każdego działu, ERP tworzy jedną bazę danych i wspólny przepływ informacji. Celem jest eliminacja silosów danych, automatyzacja procesów i lepsza widoczność na całą organizację.",
    },
    {
      question: "Czym różni się ERP od CRM?",
      answer:
        "CRM (Customer Relationship Management) koncentruje się wyłącznie na relacjach z klientami — leadach, sprzedaży, historii kontaktu, serwisie. ERP obejmuje całość procesów biznesowych, w tym CRM jako jeden z modułów. Analogia: CRM to narzędzie dla działu sprzedaży i marketingu. ERP to system dla całej firmy — od finansów po magazyn i produkcję. Wiele firm używa obu: dedykowanego CRM (np. Salesforce, HubSpot) + ERP (np. SAP, Comarch) zintegrowanych ze sobą.",
    },
    {
      question: "Kiedy firma potrzebuje systemu ERP?",
      answer:
        "Sygnały że potrzebujesz ERP: dane w wielu arkuszach Excel które nie są zsynchronizowane, dużo czasu na ręczne przenoszenie danych między systemami, trudność w uzyskaniu aktualnych raportów, problemy z inwentaryzacją i stanami magazynowymi, błędy w fakturowaniu i rozrachunkach, firma rośnie i dotychczasowe procesy nie skalują się. Zazwyczaj ERP staje się potrzebny przy 20-50+ pracownikach lub gdy przychody przekraczają 5-10 mln zł.",
    },
    {
      question: "Ile kosztuje wdrożenie ERP?",
      answer:
        "Koszty wdrożenia ERP: Licencja: 2000-200 000 zł/rok zależnie od systemu i liczby użytkowników. Wdrożenie (konsultant/integrator): 20 000 - 500 000 zł. Customizacje: 500-1500 zł/h. Szkolenia: 2000-10 000 zł/osobę. Integracje: 10 000 - 100 000 zł. Całkowity koszt wdrożenia dla firmy MŚP (50-200 pracowników): 100 000 - 500 000 zł. Czas wdrożenia: 3-18 miesięcy. Uwaga: większość wdrożeń ERP przekracza budżet i harmonogram — to branżowy standard, a nie wyjątek.",
    },
    {
      question: "ERP w chmurze czy on-premise?",
      answer:
        "ERP On-premise: instalowany na własnych serwerach, pełna kontrola, wyższe koszty utrzymania IT, jednorazowa opłata licencyjna. Dobry dla firm z wymaganiami bezpieczeństwa lub specyficznymi customizacjami. ERP Cloud (SaaS): dostępny przez przeglądarkę, niższy koszt wdrożenia, automatyczne aktualizacje, płatność miesięczna, szybszy start. Trend: rynek wyraźnie przechodzi na cloud — SAP S/4HANA Cloud, Oracle NetSuite, Microsoft Dynamics 365. Dla nowych wdrożeń zalecana jest chmura — chyba że masz bardzo specyficzne wymagania regulacyjne.",
    },
    {
      question: "Jakie są najpopularniejsze systemy ERP w Polsce?",
      answer:
        "Najpopularniejsze systemy ERP w Polsce: Comarch ERP XL — lider wśród polskich producentów, szczególnie firmy produkcyjne i handlowe. Enova365 — popularny wśród MŚP, dobre integracje polskie (JPK, GUS). SAP Business One / S4HANA — korporacje i firmy z zagranicznymi właścicielami. Microsoft Dynamics 365 — szczególnie w firmach używających Office 365. Symfonia ERP — popularna wśród małych firm i biur rachunkowych. Odoo — open source, rosnąca popularność szczególnie w startupach i e-commerce.",
    },
  ];

  return (
    <>
      <SEOHead
        title="ERP — co to jest i jak działa system ERP? | fotz.pl"
        description="ERP co to jest — wyjaśniamy czym jest system ERP, moduły ERP, kiedy wdrożyć, ile kosztuje i jakie systemy ERP są popularne w Polsce."
        canonical="https://fotz.pl/blog/erp-co-to-jest"

        keywords="ERP co to jest, ERP definicja, czym jest ERP, ERP przykłady, jak działa ERP, ERP znaczenie, ERP przewodnik"
      />
      <ArticleSchema
        title="ERP — co to jest i jak działa system ERP?"
        description="Czym jest ERP (Enterprise Resource Planning), moduły systemu ERP, różnica ERP vs CRM, kiedy wdrożyć, koszty i popularne systemy ERP w Polsce."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/erp-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Settings className="w-4 h-4" /> Systemy IT dla firm</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                ERP — co to jest i jak działa system ERP?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                ERP (Enterprise Resource Planning) to zintegrowany system zarządzania całą firmą.
                Moduły, koszty wdrożenia i jak wybrać odpowiedni system ERP.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Moduły systemu ERP</h2>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {erpModules.map((mod, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <h3 className="font-bold text-slate-900 text-sm">{mod.module}</h3>
                    </div>
                    <p className="text-slate-600 text-xs">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Popularne systemy ERP</h2>
              <div className="space-y-2 mb-6">
                {popularERP.map((erp, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-bold">{erp.name}</p>
                      <p className="text-slate-500 text-xs">{erp.size}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-xs ml-4 whitespace-nowrap">{erp.price}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <BarChart2 className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Integrujesz ERP ze stroną lub sklepem?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy integracje sklepów e-commerce z systemami ERP — synchronizacja stanów, zamówień i faktur.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Sklepy e-commerce — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — ERP co to jest</h2>
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
