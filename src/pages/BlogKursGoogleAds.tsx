import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Target, BookOpen, Award, Zap } from "lucide-react";
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

export default function BlogKursGoogleAds() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Kurs Google Ads — jak nauczyć się reklam Google?" },
  ];

  const learningPath = [
    { phase: "Podstawy", time: "1-2 tyg.", topics: ["Czym jest Google Ads i modele rozliczeń PPC/CPM", "Struktura konta: kampanie, grupy, słowa kluczowe", "Typy dopasowania słów kluczowych (ścisłe, wyrażenie, przybliżone)", "Tworzenie pierwszej kampanii w sieci wyszukiwania"] },
    { phase: "Średniozaawansowany", time: "2-4 tyg.", topics: ["Quality Score i optymalizacja CPC", "Rozszerzenia reklam (linki, objaśnienia, struktury)", "Kampanie displayowe i remarketing", "Google Shopping — kampanie produktowe"] },
    { phase: "Zaawansowany", time: "4-8 tyg.", topics: ["Strategia ustalania stawek (Target CPA, ROAS, tROAS)", "Audience targeting i listy remarketingowe", "Performance Max — konfiguracja i optymalizacja", "Atrybuty konwersji i model Last Click vs Data-Driven"] },
    { phase: "Ekspert", time: "Ongoing", topics: ["A/B testy reklam i stron docelowych", "Automatyzacja i skrypty Google Ads", "Raportowanie i analityka (GA4 + Google Ads)", "Certyfikat Google Ads — przygotowanie i zdanie"] },
  ];

  const freeResources = [
    { name: "Google Skillshop", url: "skillshop.google.com", desc: "Oficjalne kursy Google — bezpłatne, prowadzą do certyfikatów Google Ads. Dostępne w polskim języku." },
    { name: "Google Ads Help Center", url: "support.google.com/google-ads", desc: "Pełna dokumentacja techniczna Google. Najdokładniejsze źródło informacji o funkcjach platformy." },
    { name: "WordStream Blog", url: "wordstream.com/blog", desc: "Jeden z najlepszych anglojęzycznych blogów o PPC. Praktyczne case studies i porady optymalizacyjne." },
    { name: "YouTube Google Ads kanały", url: "youtube.com", desc: "Szukaj: Surfside PPC, Ben Heath Google Ads, Aaron Young. Polskie kanały: Paweł Damiec, SEM House." },
  ];

  const faqItems = [
    {
      question: "Jak nauczyć się Google Ads od zera?",
      answer:
        "Najlepsza ścieżka: 1) Zacznij od Google Skillshop (oficjalne kursy, bezpłatne) — dają solidne podstawy. 2) Załóż konto Google Ads i uruchom testową kampanię z małym budżetem (50-100 zł). 3) Śledź kanały YouTube (Surfside PPC, Aaron Young 360). 4) Dołącz do grup Facebook poświęconych Google Ads. 5) Zdaj certyfikat Google — motywuje do nauki i potwierdza wiedzę.",
    },
    {
      question: "Ile trwa nauka Google Ads?",
      answer:
        "Podstawy Google Ads możesz opanować w 2-4 tygodnie intensywnej nauki. Żeby sprawnie zarządzać kampaniami i rozumieć optymalizację — 2-3 miesiące praktyki na prawdziwych kampaniach. Żeby stać się ekspertem: 6-12 miesięcy regularnej pracy z różnymi branżami i budżetami. Platforma ciągle się zmienia — nawet eksperci uczą się non-stop.",
    },
    {
      question: "Czy warto zrobić certyfikat Google Ads?",
      answer:
        "Certyfikat Google Ads (Google Ads Search Certification itp.) jest wart zdobycia z kilku powodów: potwierdza wiedzę klientom i pracodawcom, Google partner badge dla agencji (wymaga certyfikatów pracowników), motywuje do systematycznej nauki. Egzamin jest bezpłatny na Skillshop — 75 pytań, 1,5 godziny. Wymaga zdania na 80%+. Ważny przez rok.",
    },
    {
      question: "Jaki kurs Google Ads polecić?",
      answer:
        "Polskie kursy Google Ads: Kursy.pl (Paweł Damiec), SEM House Academy, Szkolenia Mike'a Jankowskiego. Anglojęzyczne: Udemy (Aaron Young, Daryl Mander), Coursera (kurs Google), AdSpend.com. Bezpłatnie: Google Skillshop. Rada: zacznij od Skillshop (gratis + certyfikat), uzupełnij praktycznym kursem na Udemy (20-50 USD podczas promocji).",
    },
    {
      question: "Czy można samodzielnie prowadzić kampanie Google Ads?",
      answer:
        "Tak — wielu właścicieli małych firm skutecznie prowadzi własne kampanie Google Ads. Wymaga to jednak czasu na naukę (2-4 godz. tygodniowo na zarządzanie + czas na samą naukę) i gotowości do eksperymentowania. Alternnatywnie: zlecenie agencji. Bariera wejścia: błędy na początku mogą kosztować sporo — warto zacząć od małego budżetu i rozszerzać gdy rozumiesz co działa.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Kurs Google Ads — jak nauczyć się reklam Google? Poradnik | fotz.pl"
        description="Kurs Google Ads — jak nauczyć się Google Ads od zera? Ścieżka nauki, bezpłatne zasoby, certyfikat Google. Praktyczny poradnik dla początkujących i średniozaawansowanych."
        canonical="https://fotz.pl/blog/kurs-google-ads"
      />
      <ArticleSchema
        title="Kurs Google Ads — jak nauczyć się reklam Google?"
        description="Ścieżka nauki Google Ads od podstaw do eksperta — bezpłatne kursy, certyfikaty, czas nauki i praktyczne wskazówki."
        datePublished="2025-02-20"
        dateModified="2025-04-01"
        url="https://fotz.pl/blog/kurs-google-ads"
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
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Nauka i certyfikaty</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Kurs Google Ads — jak nauczyć się reklam Google?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Chcesz samodzielnie prowadzić kampanie Google Ads lub zdobyć certyfikat? Ten poradnik
                pokaże Ci ścieżkę — od absolutnych podstaw do eksperta, z bezpłatnymi zasobami na start.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Ścieżka nauki Google Ads</h2>
              <div className="space-y-4 mb-8">
                {learningPath.map((phase, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{idx + 1}</div>
                      <div>
                        <span className="font-bold text-slate-900">{phase.phase}</span>
                        <span className="text-slate-500 text-sm ml-2">({phase.time})</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-1.5">
                      {phase.topics.map((topic, tidx) => (
                        <div key={tidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-xs">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Bezpłatne zasoby do nauki Google Ads</h2>
              <div className="space-y-3 mb-6">
                {freeResources.map((res, idx) => (
                  <div key={idx} className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="w-4 h-4 text-green-600" />
                      <span className="font-bold text-green-800 text-sm">{res.name}</span>
                      <span className="text-green-600 text-xs">({res.url})</span>
                    </div>
                    <p className="text-slate-700 text-sm">{res.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Certyfikat Google Ads — jak zdać?</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
                <Award className="w-6 h-6 text-amber-600 mb-3" />
                <div className="space-y-2">
                  {[
                    "Wejdź na skillshop.google.com i załóż konto (bezpłatne)",
                    "Ukończ kurs 'Google Ads Search' (ok. 3-4 godziny materiału)",
                    "Zdaj egzamin: 75 pytań, 75 minut, wymagane 80%",
                    "Certyfikat ważny 1 rok — potem musisz odnowić",
                    "Dostępne certyfikaty: Search, Display, Video, Shopping, Measurement",
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Wolisz zlecić kampanie specjalistom?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Jeśli nie masz czasu na naukę — prowadzimy Google Ads od 499 zł/mies.
                </p>
                <Link to="/uslugi/google-ads" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Obsługa Google Ads — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Kurs Google Ads</h2>
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
          heading="Wolisz skupić się na biznesie?"
          subheading="Przejmujemy Google Ads — konfiguracja, optymalizacja, raporty. Ty liczysz zyski."
        />
      </Layout>
    </>
  );
}
