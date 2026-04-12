import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, DollarSign, TrendingUp, AlertCircle } from "lucide-react";
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

export default function BlogPozycjonowanieStronCena() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Pozycjonowanie stron cena — ile kosztuje SEO?" },
  ];

  const pricingModels = [
    {
      title: "Abonament miesięczny",
      range: "500 – 5 000+ zł/mies.",
      best: "Dla większości firm",
      desc: "Stała miesięczna opłata za pakiet usług SEO. Przewidywalny budżet. Najczęstszy model rozliczeń.",
    },
    {
      title: "Stawka godzinowa",
      range: "150 – 500 zł/h",
      best: "Jednorazowe konsultacje",
      desc: "Freelancerzy i niezależni konsultanci. Dobre dla audytu lub jednorazowej optymalizacji.",
    },
    {
      title: "Performance SEO",
      range: "% od przychodów lub koszt per lead",
      best: "E-commerce i generacja leadów",
      desc: "Rozliczenie za wyniki — agencja zarabia gdy Ty zarabiasz. Motywujący ale ryzykowny dla obu stron.",
    },
    {
      title: "Projekt (jednorazowy)",
      range: "2 000 – 30 000 zł",
      best: "Audyt lub migracja strony",
      desc: "Jednorazowe zlecenie: audyt SEO, optymalizacja techniczna, linkbuilding campaign.",
    },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje pozycjonowanie strony internetowej?",
      answer:
        "Koszt SEO w Polsce: małe firmy lokalne 500-1500 zł/mies., firmy usługowe 1500-3000 zł/mies., e-commerce 2000-8000 zł/mies., duże portale 5000-20 000+ zł/mies. Na cenę wpływa: konkurencyjność branży, liczba fraz, zakres działań (techniczne, content, linkbuilding), doświadczenie agencji.",
    },
    {
      question: "Ile czasu potrzeba na efekty pozycjonowania?",
      answer:
        "Pierwsze wyniki: 3-6 miesięcy. Stabilne pozycje na frazy główne: 6-12 miesięcy. Dominacja w branży: 12-24 miesiące. SEO to inwestycja długoterminowa. Strony które zaczynały 2 lata temu teraz generują organiczny ruch za ułamek kosztów reklamy płatnej.",
    },
    {
      question: "Co wchodzi w koszt miesięcznego SEO?",
      answer:
        "Typowy pakiet SEO zawiera: audyt i strategia (jednorazowo), optymalizacja techniczna strony, tworzenie treści SEO (artykuły, opisy), linkbuilding (pozyskiwanie linków zewnętrznych), monitoring pozycji i raportowanie. Cena zależy od ilości i jakości każdego z tych elementów.",
    },
    {
      question: "Czy tanie pozycjonowanie się opłaca?",
      answer:
        "Tanie SEO (poniżej 500 zł/mies.) rzadko przynosi efekty i może zaszkodzić — agencje stosują black hat techniki które grożą karą Google. Minimum sensownego budżetu to 1000-1500 zł/mies. dla małej firmy. Poniżej tej kwoty lepiej zainwestować w Google Ads i regularnie tworzyć treści samodzielnie.",
    },
    {
      question: "SEO czy Google Ads — co wybrać?",
      answer:
        "Dla szybkich wyników: Google Ads (wyniki od 1 dnia, kosztuje dopóki płacisz). Dla długoterminowej strategii: SEO (efekty po 6+ mies., ruch za darmo gdy skończy budżet). Optymalne: Google Ads na start + SEO równolegle — reklamy finansują pierwsze miesiące SEO który z czasem redukuje potrzebę budżetu reklamowego.",
    },
    {
      question: "Jak sprawdzić czy agencja SEO jest wiarygodna?",
      answer:
        "Red flagi: gwarancja pozycji nr 1 (niemożliwa do zagwarantowania), brak transparentności co robią, bardzo niska cena. Zielone flagi: referencje od klientów, case studies z wynikami, dostęp do narzędzi SEO (Ahrefs, GSC), regularne raporty, wyjaśniają strategię. Poproś o audyt wstępny i plan działań.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Pozycjonowanie stron cena 2025 — ile kosztuje SEO? | fotz.pl"
        description="Pozycjonowanie stron cena — ile kosztuje SEO w Polsce w 2025 roku. Modele rozliczeń, co wpływa na cenę, ile zapłacisz za efekty. Realne stawki agencji SEO."
        canonical="https://fotz.pl/blog/pozycjonowanie-stron-cena"
        keywords="pozycjonowanie stron cena, ile kosztuje pozycjonowanie, cena pozycjonowania stron, pozycjonowanie cennik 2025, seo cena miesięcznie, pozycjonowanie stron cennik agencja, koszt pozycjonowania"
      />
      <ArticleSchema
        title="Pozycjonowanie stron cena 2025 — ile kosztuje SEO?"
        description="Realne ceny pozycjonowania w Polsce — abonament, stawki godzinowe, performance SEO. Co wchodzi w koszt i od czego zależy cena."
        datePublished="2025-01-10"
        dateModified="2025-03-15"
        url="https://fotz.pl/blog/pozycjonowanie-stron-cena"
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
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Cennik SEO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pozycjonowanie stron cena 2025 — ile kosztuje SEO w Polsce?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Pozycjonowanie stron — cena i cennik 2025. Ile kosztuje pozycjonowanie strony internetowej? Porównanie cen agencji SEO, specjalistów i narzędzi do samodzielnego pozycjonowania.</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Modele rozliczeń w SEO</h2>
              <div className="space-y-4 mb-8">
                {pricingModels.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{item.best}</span>
                    </div>
                    <div className="text-blue-600 font-bold text-sm mb-2">{item.range}</div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Orientacyjne stawki agencji SEO w Polsce</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Rodzaj firmy</th>
                      <th className="text-left p-3 border border-slate-700">Budżet SEO/mies.</th>
                      <th className="text-left p-3 border border-slate-700">Czego oczekiwać</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Mała firma lokalna", "500 – 1 500 zł", "3-10 fraz lokalnych, podstawowa optymalizacja"],
                      ["Firma usługowa (ogólna)", "1 500 – 3 000 zł", "20-50 fraz, content marketing, linkbuilding"],
                      ["Sklep e-commerce (mały)", "2 000 – 5 000 zł", "Karty produktów, kategorie, blogi, linki"],
                      ["Portal / duży e-com", "5 000 – 20 000+ zł", "Techniczne SEO, setki fraz, agresywny linkbuilding"],
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="p-3 border border-slate-200 text-slate-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Co wpływa na cenę pozycjonowania?</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Konkurencyjność branży i fraz kluczowych",
                  "Stan techniczny strony (nowa vs stara z problemami)",
                  "Liczba i jakość aktualnych backlinków",
                  "Zakres działań (techniczne + content + linki vs. samo techniczne)",
                  "Doświadczenie i renoma agencji lub freelancera",
                  "Lokalne vs. ogólnopolskie vs. globalne pozycjonowanie",
                  "Liczba fraz do pozycjonowania",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-800 font-semibold text-sm mb-1">Uważaj na podejrzanie tanie oferty</p>
                  <p className="text-amber-700 text-sm">
                    Pozycjonowanie za 200-400 zł/mies. to najczęściej kupowanie linków z farm lub automatyczne katalogi.
                    Ryzykujesz karą Google i utratą obecnych pozycji.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900 mb-2">Sprawdź ile kosztuje pozycjonowanie Twojej strony</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Robimy bezpłatny audyt i wycenę SEO. Powiedz nam o celach i dostaniesz konkretną ofertę.
                </p>
                <Link to="/kontakt">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    Bezpłatna wycena SEO <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Cena pozycjonowania</h2>
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
          heading="Ile kosztuje SEO dla Twojej firmy?"
          subheading="Bezpłatny audyt i wycena pozycjonowania. Odpowiadamy w 24 godziny."
        />
      </Layout>
    </>
  );
}
