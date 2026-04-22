import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, User, BookOpen } from "lucide-react";
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

export default function BlogRebrandingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Rebranding — co to jest i kiedy warto?" },
  ];

  const faqItems = [
    {
      question: "Co to jest rebranding?",
      answer:
        "Rebranding to proces zmiany wizerunku marki — może obejmować logo, kolorystykę, nazwę, komunikację, wartości lub pozycjonowanie. Celem jest odświeżenie postrzegania marki przez klientów, dotarcie do nowej grupy docelowej lub odcięcie się od negatywnych skojarzeń.",
    },
    {
      question: "Czym różni się rebranding od odświeżenia identyfikacji?",
      answer:
        "Odświeżenie identyfikacji (refresh) to kosmetyczna zmiana — np. modernizacja logo przy zachowaniu kluczowych elementów. Rebranding to głębsza transformacja, często obejmująca zmiany strategiczne, misję, pozycjonowanie i komunikację. Refresh trwa tygodnie, rebranding — miesiące.",
    },
    {
      question: "Kiedy firma powinna rozważyć rebranding?",
      answer:
        "Sygnały, że czas na rebranding: marka wygląda przestarzale, zmieniła się grupa docelowa, firma się przejęła lub połączyła, dawna reputacja ciągnie w dół, wchodzicie na nowe rynki lub produkty. Rebranding to inwestycja — nie rób go bez powodu.",
    },
    {
      question: "Ile kosztuje rebranding?",
      answer:
        "Koszt rebrandingu zależy od zakresu: sam projekt nowej identyfikacji wizualnej to 3000-20 000 zł. Pełny rebranding z nazwą, strategią, wszystkimi materiałami i wdrożeniem to 20 000-100 000 zł w przypadku małej/średniej firmy. Enterprise rebranding — bez ograniczeń.",
    },
    {
      question: "Jak długo trwa rebranding?",
      answer:
        "Minimalny czas to 3-6 miesięcy dla małej firmy. Firmy średnie planują 6-12 miesięcy. Duże korporacje — 12-24 miesiące. Czas zależy od zakresu zmian, liczby touchpointów (strona, materiały, szyldy, pojazdy, umowy) i złożoności organizacji.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Rebranding | Fotz Studio"
        description="Rebranding co to — kompleksowy przewodnik. Kiedy rebranding jest konieczny, jak go przeprowadzić krok po kroku i ile kosztuje. Przykłady i wskazówki."
        canonical="https://fotz.pl/blog/rebranding-co-to"

        keywords="Rebranding co to jest, Rebranding definicja, czym jest Rebranding, Rebranding w marketingu, Rebranding przykłady, jak działa Rebranding, Rebranding strategia"
      />
      <ArticleSchema
        title="Rebranding — co to jest i kiedy warto go przeprowadzić?"
        description="Kompletny przewodnik po rebrandingu — definicja, kiedy jest potrzebny, jak przebiega proces i ile kosztuje."
        datePublished="2024-10-01"
        dateModified="2025-01-15"
        url="https://fotz.pl/blog/rebranding-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> Zespół fotz.pl</span>
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Branding</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Rebranding — co to jest i kiedy warto go przeprowadzić?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Rebranding to jedno z tych słów, które brzmią poważnie. I słusznie — to poważna decyzja biznesowa,
                która może ożywić markę lub ją zaszkodzić. Wyjaśniamy co to jest, kiedy warto i jak to zrobić dobrze.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-slate prose-lg max-w-none">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Czym jest rebranding? Definicja</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Rebranding to strategiczny proces zmiany wizerunku marki. Może obejmować elementy wizualne (logo, kolory, typografia),
                jak również głębsze zmiany: misję, wartości, pozycjonowanie, komunikację a nawet nazwę firmy.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Celem rebrandingu jest zazwyczaj: odświeżenie postrzegania marki, dotarcie do nowej grupy docelowej,
                odcięcie się od negatywnych skojarzeń lub odzwierciedlenie faktycznych zmian w firmie.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Rodzaje rebrandingu</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6 not-prose">
                {[
                  {
                    title: "Refresh (odświeżenie)",
                    desc: "Kosmetyczne zmiany — modernizacja logo, aktualizacja kolorów. Zachowuje rozpoznawalność marki.",
                    example: "Przykład: stare logo → bardziej płaskie, nowoczesne",
                  },
                  {
                    title: "Partial rebranding",
                    desc: "Zmiana części elementów — np. nowe pozycjonowanie i komunikacja przy zachowaniu logo.",
                    example: "Przykład: nowy slogan, nowe kolory, ta sama nazwa",
                  },
                  {
                    title: "Full rebranding",
                    desc: "Kompleksowa transformacja — nowe logo, nazwa, wartości, komunikacja, materiały.",
                    example: "Przykład: firma po przejęciu z nowym właścicielem",
                  },
                  {
                    title: "Brand merger",
                    desc: "Połączenie dwóch marek w jedną — np. po fuzji lub przejęciu spółki.",
                    example: "Przykład: dwie spółki łączą siły pod nową marką",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{item.desc}</p>
                    <p className="text-slate-500 text-xs italic">{item.example}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kiedy rebranding jest konieczny?</h2>
              <p className="text-slate-700 mb-4">Oto 7 sygnałów, że czas rozważyć rebranding:</p>
              <div className="space-y-3 mb-6 not-prose">
                {[
                  "Marka wygląda przestarzale i klienci ją tak postrzegają",
                  "Zmieniła się Wasza grupa docelowa lub segmenty rynku",
                  "Firma przeszła przejęcie, fuzję lub zmianę właściciela",
                  "Wchodzicie na nowe rynki (zagraniczne lub nowe branże)",
                  "Marka ma negatywne skojarzenia lub kryzys wizerunkowy",
                  "Oferta drastycznie się rozszerzyła lub zmieniła",
                  "Trudno wyróżnić się na tle konkurencji — 'wyglądacie jak wszyscy'",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak przebiega proces rebrandingu?</h2>
              <div className="space-y-4 mb-6 not-prose">
                {[
                  { step: "01", title: "Audyt i analiza", desc: "Ocena aktualnej marki, badanie postrzegania przez klientów, analiza konkurencji. Bez tego nie wiesz co i po co zmieniasz." },
                  { step: "02", title: "Strategia marki", desc: "Misja, wizja, wartości, USP, architektura marki. To fundament — wszystko inne z tego wynika." },
                  { step: "03", title: "Nowa identyfikacja", desc: "Logo, kolorystyka, typografia, system wizualny. Projekt opakowania, szablony dokumentów." },
                  { step: "04", title: "Nowa komunikacja", desc: "Tone of voice, messaging, slogan, treści na stronę. Jak mówisz jest tak samo ważne jak co mówisz." },
                  { step: "05", title: "Wdrożenie", desc: "Zmiana strony, materiałów, social media, szyldów, umów, wizytówek. To zwykle najdłuższy etap." },
                  { step: "06", title: "Launch i komunikacja", desc: "Ogłoszenie rebrandingu klientom i partnerom. Przemyślana komunikacja zmiany — transparentna i pozytywna." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="text-3xl font-bold text-slate-200 flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Ile kosztuje rebranding?</h2>
              <p className="text-slate-700 mb-4">Orientacyjne koszty rebrandingu w Polsce:</p>
              <div className="overflow-x-auto mb-6 not-prose">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 border border-slate-200">Zakres</th>
                      <th className="text-left p-3 border border-slate-200">Orientacyjny koszt</th>
                      <th className="text-left p-3 border border-slate-200">Czas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Logo refresh", "1 500 – 5 000 zł", "2-4 tygodnie"],
                      ["Nowa identyfikacja wizualna", "5 000 – 20 000 zł", "1-3 miesiące"],
                      ["Partial rebranding", "10 000 – 40 000 zł", "2-4 miesiące"],
                      ["Full rebranding (MŚP)", "30 000 – 100 000 zł", "4-8 miesięcy"],
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
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Rebranding a SEO — na co uważać?</h2>
              <p className="text-slate-700 mb-4">
                Zmiana nazwy domeny lub struktury strony podczas rebrandingu to poważne ryzyko SEO.
                Możesz stracić wypracowane pozycje jeśli nie zrobisz tego prawidłowo.
              </p>
              <p className="text-slate-700 mb-6">
                Kluczowe zasady: zawsze rób przekierowania 301 ze starej domeny, powiadom Google Search Console o zmianie adresu,
                zachowaj wartościowe treści, nie zmieniaj URL-i stron które mają backlinki.
                Warto skorzystać z audytu SEO przed i po rebrandingu.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 not-prose">
                <p className="text-blue-800 font-semibold mb-2">Planujecie rebranding?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Pomożemy zaplanować rebranding tak, żeby nie stracić pozycji SEO i wizerunku w oczach klientów.
                </p>
                <Link to="/kontakt" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Skonsultuj rebranding z nami <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">Najczęstsze pytania o rebranding</h2>
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

        {/* Related posts */}
        <FadeInView>
          <section className="py-12 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Powiązane artykuły</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Identyfikacja wizualna firmy — co zawiera?", href: "/uslugi/identyfikacja-wizualna-firmy" },
                  { title: "Audyt strony internetowej — kiedy i po co?", href: "/uslugi/audyt-strony-internetowej" },
                  { title: "Copywriting — co to jest?", href: "/blog/copywriting-co-to" },
                  { title: "Marketing internetowy dla firm", href: "/uslugi/marketing-internetowy" },
                ].map((post, idx) => (
                  <Link key={idx} to={post.href} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group">
                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-slate-700 text-sm font-medium">{post.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection
        />
      </Layout>
    </>
  );
}
