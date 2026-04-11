import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, User, BookOpen, FileText, Target, DollarSign } from "lucide-react";
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

export default function BlogCopywritingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Copywriting — co to jest?" },
  ];

  const faqItems = [
    {
      question: "Co to jest copywriting?",
      answer:
        "Copywriting to pisanie tekstów perswazyjnych i marketingowych w celach biznesowych. Copywriter tworzy teksty na strony internetowe, reklamy, emaile, posty social media, opisy produktów i inne materiały, których zadaniem jest skłonienie czytelnika do podjęcia określonego działania (zakup, kontakt, zapis).",
    },
    {
      question: "Czym różni się copywriting od content writingu?",
      answer:
        "Copywriting skupia się na perswazji i konwersji — teksty sprzedające, landing pages, reklamy. Content writing to tworzenie wartościowych treści informacyjnych — blogi, artykuły, poradniki. Oba są ważne, ale służą różnym celom. W praktyce dobry marketer łączy oba podejścia.",
    },
    {
      question: "Ile zarabia copywriter w Polsce?",
      answer:
        "Junior copywriter: 3000-5000 zł brutto. Mid copywriter: 5000-8000 zł. Senior/specjalizowany: 8000-15 000 zł. Freelancerzy rozliczają się per tekst: artykuł blogowy 200-2000 zł, landing page 500-5000 zł, e-mail 100-500 zł. Stawki zależą od specjalizacji i doświadczenia.",
    },
    {
      question: "Jak zostać copywriterem?",
      answer:
        "Nie ma jednej drogi. Najszybsza ścieżka: naucz się podstaw marketingu i perswazji (lektura: Ogilvy on Advertising, Influence Cialdiniego), pisz praktycznie (własny blog, wolontariat), buduj portfolio, zacznij od małych zleceń. Kurs copywritingu lub marketing online przyspiesza naukę.",
    },
    {
      question: "Czym jest SEO copywriting?",
      answer:
        "SEO copywriting to łączenie technik copywriterskich z optymalizacją pod wyszukiwarki. Tekst musi być atrakcyjny dla czytelnika I zawierać frazy kluczowe w odpowiednich miejscach. Dobry SEO copywriting nie brzmi jak 'pchanie słów kluczowych' — jest naturalny i przydatny.",
    },
    {
      question: "Ile kosztuje zlecenie copywritingu?",
      answer:
        "Stawki za copywriting: artykuł blogowy (1000 słów) — 150-800 zł, strona główna — 500-3000 zł, landing page — 800-5000 zł, email newsletter — 200-1000 zł, opis produktu — 50-200 zł. Agencje wyceniają kompleksowo. Cena zależy od specjalizacji, researchu i doświadczenia copywritera.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Copywriting — co to jest, rodzaje i ile zarabia copywriter | fotz.pl"
        description="Copywriting co to — kompleksowy przewodnik. Definicja, rodzaje copywritingu, ile zarabia copywriter i jak napisać dobry tekst marketingowy. Przeczytaj!"
        canonical="https://fotz.pl/blog/copywriting-co-to"
      />
      <ArticleSchema
        title="Copywriting — co to jest i jak działa?"
        description="Kompletny przewodnik po copywritingu — definicja, rodzaje, jak zostać copywriterem i ile zarabiają."
        datePublished="2024-11-01"
        dateModified="2025-02-01"
        url="https://fotz.pl/blog/copywriting-co-to"
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
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> Zespół fotz.pl</span>
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Copywriting — co to jest i jak działa w marketingu?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Copywriting to jedna z najcenniejszych umiejętności w marketingu. Dobrze napisany tekst może
                zwiększyć konwersję o 100-300%. Ale czym dokładnie jest copywriting i dlaczego jest tak ważny?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Definicja copywritingu</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Copywriting to sztuka pisania tekstów marketingowych i reklamowych, których celem jest skłonienie
                czytelnika do podjęcia określonej akcji. Może to być zakup produktu, kontakt z firmą, zapis na newsletter
                lub kliknięcie reklamy.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Słowo "copy" w języku angielskim oznacza tekst reklamowy. "Copywriter" to osoba, która taki tekst pisze.
                W Polsce termin copywriter często używany jest szerzej — jako określenie każdego, kto pisze na zlecenie.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Rodzaje copywritingu</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Target, title: "Direct response copywriting", desc: "Teksty nastawione na natychmiastowe działanie — landing pages, emaile, reklamy. Mierzone konwersją." },
                  { icon: FileText, title: "SEO copywriting", desc: "Tworzenie treści zoptymalizowanych pod wyszukiwarki. Łączy perswazję z frazami kluczowymi." },
                  { icon: BookOpen, title: "Content copywriting", desc: "Wartościowe artykuły, poradniki, case studies. Buduje autorytet i zaufanie marki." },
                  { icon: DollarSign, title: "UX copywriting", desc: "Mikroteksty w interfejsach — przyciski, komunikaty błędów, onboarding. Poprawia user experience." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-6 h-6 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Gdzie jest używany copywriting?</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Strony internetowe i landing pages",
                  "Reklamy Google Ads i Meta Ads",
                  "Email marketing i newslettery",
                  "Posty i reklamy social media",
                  "Opisy produktów w sklepach internetowych",
                  "Artykuły blogowe i content marketing",
                  "Broszury i materiały drukowane",
                  "Skrypty wideo i podcastów",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Dobre techniki copywriterskie</h2>
              <p className="text-slate-700 mb-4">
                Najskuteczniejsze techniki to: AIDA (Attention, Interest, Desire, Action), PAS (Problem, Agitation, Solution),
                FAB (Features, Advantages, Benefits), storytelling i social proof. Dobry copywriter wie kiedy użyć której techniki.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="font-bold text-blue-900 mb-2">Przykład: AIDA w praktyce</p>
                <div className="space-y-1 text-sm text-blue-800">
                  <p><strong>A</strong>ttention: "Twoja strona traci 70% klientów na pierwszym ekranie"</p>
                  <p><strong>I</strong>nterest: "Większość stron ma nagłówek który nie mówi co sprzedają"</p>
                  <p><strong>D</strong>esire: "Zmień jeden nagłówek i zwiększ konwersję o 40%"</p>
                  <p><strong>A</strong>ction: "Zamów bezpłatny audyt copy"</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Copywriting vs content writing — różnica</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 border border-slate-200">Cecha</th>
                      <th className="text-left p-3 border border-slate-200">Copywriting</th>
                      <th className="text-left p-3 border border-slate-200">Content writing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Cel", "Konwersja, sprzedaż", "Edukacja, budowanie autorytetu"],
                      ["Ton", "Perswazyjny, bezpośredni", "Informacyjny, wartościowy"],
                      ["Przykłady", "Landing pages, reklamy", "Blogi, artykuły, e-booki"],
                      ["Miernik", "CTR, konwersja", "Ruch, czas na stronie"],
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
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz tekstów dla swojej firmy?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy copy które sprzedaje — strony, landing pages, reklamy, emaile. Sprawdź nasz cennik copywritingu.
                </p>
                <Link to="/blog/copywriting-cennik" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Cennik copywritingu <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Copywriting</h2>
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
          heading="Zamów copywriting dla swojej firmy"
          subheading="Piszemy teksty które sprzedają — strony, reklamy, emaile, social media."
        />
      </Layout>
    </>
  );
}
