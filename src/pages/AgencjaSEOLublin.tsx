import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Search, BarChart3, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function AgencjaSEOLublin() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Agencja SEO Lublin" },
  ];

  const services = [
    { icon: Search, title: "Audyt SEO Lublin", desc: "Kompleksowy audyt techniczny, on-page i off-page. Diagnoza i plan działania." },
    { icon: MapPin, title: "Pozycjonowanie lokalne Lublin", desc: "Widoczność w mapach Google dla klientów z Lublina i regionu." },
    { icon: TrendingUp, title: "Pozycjonowanie ogólnopolskie", desc: "Frazy bez geolokalizacji — dla firm z Lublina działających w całej Polsce." },
    { icon: BarChart3, title: "SEO dla e-commerce Lublin", desc: "Pozycjonowanie sklepów online — karty produktów, kategorie, blogi." },
    { icon: Star, title: "Copywriting SEO", desc: "Tworzenie treści zoptymalizowanych pod wyszukiwarki. Artykuły, opisy, landing pages." },
    { icon: CheckCircle2, title: "Link building", desc: "Pozyskiwanie wartościowych linków zewnętrznych z polskich i zagranicznych portali." },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje SEO w Lublinie?",
      answer:
        "Pozycjonowanie stron w Lublinie kosztuje od 700 zł/mies. (frazy lokalne, mała firma) do 5000+ zł/mies. (e-commerce, frazy ogólnopolskie). Orientacyjnie: lokalna firma usługowa 700-1500 zł/mies., sklep internetowy 2000-5000 zł/mies. Na ceny wpływa: konkurencja w branży, zakres działań i doświadczenie agencji.",
    },
    {
      question: "Ile czasu zajmuje pozycjonowanie w Lublinie?",
      answer:
        "Pierwsze efekty dla fraz lokalnych widać po 2-4 miesiącach. Stabilne pozycje Top 3 w Google dla Lublina: 4-8 miesięcy. Frazy ogólnopolskie: 6-12 miesięcy. SEO to inwestycja długoterminowa — im dłużej prowadzisz działania, tym niższy koszt per kliknięcie i lead.",
    },
    {
      question: "Czy SEO działa dla lokalnych firm z Lublina?",
      answer:
        "Zdecydowanie tak. Firmy lokalne mają mniejszą konkurencję SEO niż w Warszawie czy Krakowie. Pozycjonowanie lokalne (np. 'dentysta Lublin', 'hydraulik Lublin') to jeden z najlepszych kanałów pozyskiwania klientów — trafiacie do osób aktywnie poszukujących Waszych usług.",
    },
    {
      question: "Jak wybrać agencję SEO w Lublinie?",
      answer:
        "Na co zwrócić uwagę: referencje od lokalnych klientów, case studies z wynikami, transparentność działań i raportowanie, brak gwarancji 'pozycji nr 1' (niemożliwe do zagwarantowania), dostęp do Google Search Console. Unikaj agencji które nie pokazują co konkretnie robią.",
    },
    {
      question: "Co zawiera miesięczna obsługa SEO?",
      answer:
        "Typowy pakiet SEO: audyt i strategia (start), optymalizacja techniczna strony, tworzenie treści SEO, linkbuilding (pozyskiwanie linków), monitoring pozycji i raport miesięczny. Zakres zależy od pakietu — im wyższy budżet, tym więcej działań i szybsze efekty.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Agencja SEO Lublin — pozycjonowanie stron | fotz.pl"
        description="Agencja SEO Lublin — pozycjonowanie stron internetowych dla firm z Lublina i Lubelszczyzny. Lokalne i ogólnopolskie SEO, audyt, linkbuilding. Sprawdź ofertę!"
        canonical="https://fotz.pl/agencja-seo-lublin"
      />
      <ServiceSchema
        name="Agencja SEO Lublin"
        description="Pozycjonowanie stron internetowych dla firm z Lublina — lokalne i ogólnopolskie SEO, audyt, optymalizacja, linkbuilding"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm mb-4">
                <MapPin className="w-4 h-4" />
                Lublin i Lubelszczyzna
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Agencja SEO Lublin — pozycjonuj firmę wyżej w Google
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Pozycjonowanie stron internetowych dla firm z Lublina i regionu. Lokalne SEO, frazy ogólnopolskie,
                e-commerce. Pracujemy na wyniki — mierzalne pozycje i ruch organiczny.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "350 tys.", label: "Mieszkańców Lublina" },
                  { value: "Top 3", label: "Cel pozycjonowania" },
                  { value: "6 mies.", label: "Średni czas do efektów" },
                  { value: "100%", label: "Transparentność" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Bezpłatny audyt SEO <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/seo/pozycjonowanie">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Oferta SEO ogólna
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Usługi SEO dla firm z Lublina</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Kompleksowe działania SEO dostosowane do specyfiki lubelskiego rynku.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Local advantage */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dlaczego SEO w Lublinie?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Mniejsza konkurencja niż Warszawa", desc: "Lublin to mniejszy rynek — łatwiej wbić Top 3 dla fraz lokalnych niż w stolicy. Szybsze efekty i niższy koszt." },
                  { title: "Rosnąca gospodarka regionu", desc: "Lublin to jeden z dynamiczniej rozwijających się ośrodków — inwestycje, studenci, nowe firmy. Rynek SEO rośnie." },
                  { title: "Klienci szukają lokalnie", desc: "46% zapytań Google ma charakter lokalny. 'Usługa + Lublin' to frazy z wysoką intencją zakupu." },
                  { title: "UMCS, KUL, UP — uczelnie i firmy", desc: "Silne środowisko akademickie i biznesowe. Rynek B2B i B2C z rosnącym potencjałem cyfrowym." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mb-3" />
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Agencja SEO Lublin</h2>
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
          heading="Pozycjonuj firmę w Lublinie"
          subheading="Bezpłatny audyt SEO i plan działań dla Twojej firmy z Lublina."
        />
      </Layout>
    </>
  );
}
