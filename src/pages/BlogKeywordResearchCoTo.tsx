import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Search, BarChart2, TrendingUp, Target } from "lucide-react";
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

export default function BlogKeywordResearchCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Keyword Research — co to jest? Badanie słów kluczowych" },
  ];

  const keywordTypes = [
    { type: "Head terms (short-tail)", vol: "Wysoki", diff: "Bardzo wysoka", example: "buty, SEO, CRM", desc: "1-2 słowa, ogromny ruch, bardzo trudne do zrankowania. Odpowiednie dla dużych marek." },
    { type: "Mid-tail keywords", vol: "Średni", diff: "Umiarkowana", example: "buty do biegania, agencja SEO", desc: "2-3 słowa, balans między ruchem a konkurencyjnością. Dobry cel dla większości stron." },
    { type: "Long-tail keywords", vol: "Niski", diff: "Niska", example: "buty do biegania dla kobiet Nike", desc: "4+ słów, mały ruch ale wysoka konwersja, łatwiejsze do pozycjonowania." },
    { type: "Branded keywords", vol: "Zmienny", diff: "Niska", example: "fotz.pl opinie, Nike Air Max cena", desc: "Zawierają markę — konwertują najlepiej, ale wymagają wcześniejszej rozpoznawalności." },
    { type: "LSI keywords (semantic)", vol: "Różny", diff: "Różna", example: "pozycjonowanie, optymalizacja, SERP", desc: "Słowa semantycznie powiązane z głównym słowem — wzmacniają kontekst tematyczny dla Google." },
  ];

  const tools = [
    { name: "Ahrefs Keywords Explorer", free: false, desc: "Najdokładniejsze dane o volume, KD, clicks. Suggestions, SERP overview, keyword ideas." },
    { name: "Semrush Keyword Magic Tool", free: false, desc: "Baza ponad 20 mld słów kluczowych, świetny do competitive gap analysis." },
    { name: "Google Keyword Planner", free: true, desc: "Oficjalne dane Google, wymagane konto Google Ads. Volume w przedziałach (mniej precyzyjny)." },
    { name: "Ubersuggest", free: true, desc: "Darmowy plan ograniczony, dobry starter. Neil Patel's tool — szybkie pomysły na słowa kluczowe." },
    { name: "Answer the Public", free: false, desc: "Świetny do pytań i longtailów — generuje pytania, porównania, przyimkowe frazy." },
    { name: "Google Search Console", free: true, desc: "Realne dane o słowach kluczowych dla Twojej strony — impressions, clicks, pozycja." },
  ];

  const faqItems = [
    {
      question: "Co to jest keyword research (badanie słów kluczowych)?",
      answer: "Keyword research to proces identyfikacji i analizy fraz wyszukiwanych przez użytkowników w Google i innych wyszukiwarkach, które są istotne dla Twojego biznesu. Celem jest znalezienie słów kluczowych o odpowiednim wolumenie wyszukiwań (search volume), możliwej do osiągnięcia trudności (keyword difficulty) i intencji zakupowej. Keyword research to fundament strategii SEO — bez niego tworzysz treści bez gwarancji, że ktokolwiek ich szuka. Dobra analiza słów kluczowych pozwala priorytetyzować tematy, które przełożą się na ruch i konwersje.",
    },
    {
      question: "Jak przeprowadzić keyword research krok po kroku?",
      answer: "Proces keyword research: 1) Zdefiniuj tematy seed — główne kategorie Twojego biznesu (np. dla agencji SEO: pozycjonowanie, tworzenie stron, reklama Google). 2) Rozwiń seed keywords — użyj Ahrefs/Semrush żeby znaleźć powiązane frazy, pytania, long-taile. 3) Sprawdź search intent — informacyjny (co to jest), nawigacyjny (Facebook login), komercyjny (najlepsza agencja SEO), transakcyjny (kup kurs SEO). 4) Oceń trudność (KD) vs volume — szukaj 'sweet spot': niskie KD, realne volume. 5) Priorytetyzuj — które słowa najszybciej przyniosą ruch i konwersje. 6) Mapuj słowa do stron — każda podstrona ma jedno główne słowo kluczowe.",
    },
    {
      question: "Co to jest search intent i dlaczego jest ważny?",
      answer: "Search intent (intencja wyszukiwania) to cel który użytkownik chce osiągnąć wpisując dane zapytanie w Google. Typy intencji: Informacyjna — użytkownik chce się czegoś dowiedzieć ('co to jest SaaS', 'jak zrobić backup'). Twórz artykuły i poradniki. Nawigacyjna — szuka konkretnej strony ('Facebook', 'allegro logowanie'). Komercyjna — porównuje opcje przed zakupem ('najlepsza agencja SEO Kraków', 'HubSpot vs Salesforce'). Transakcyjna — gotowy do zakupu ('kup kurs SEO online', 'zamów stronę internetową'). Dopasowanie treści do search intent to kluczowy czynnik rankingowy — Google nagradza strony które najlepiej odpowiadają intencji użytkownika.",
    },
    {
      question: "Co to jest keyword difficulty (KD)?",
      answer: "Keyword Difficulty (KD) to metryka w narzędziach SEO (Ahrefs, Semrush) oceniająca jak trudno jest zrankować dla danego słowa kluczowego, wyrażona w skali 0-100. Im wyższy KD, tym silniejsza konkurencja (strony z dużą liczbą backlinków) na daną frazę. Interpretacja (Ahrefs): 0-10: bardzo łatwy — nawet nowa strona może zrankować. 11-30: łatwy — potrzebujesz kilku backlinków. 31-50: umiarkowany — solidna strona z historią. 51-70: trudny — duże inwestycje w link building. 71-100: bardzo trudny — Wikipedia, Allegro, wielkie marki. Strategia: zacznij od KD 0-20 budując autorytet domeny, potem atakuj trudniejsze frazy.",
    },
    {
      question: "Jak znaleźć słowa kluczowe konkurencji?",
      answer: "Analiza słów kluczowych konkurencji to jedno z najcenniejszych ćwiczeń w SEO. Metody: 1) Ahrefs → Site Explorer → wpisz domenę konkurenta → Organic Keywords → posortuj po traffic. 2) Semrush → Domain Overview → Organic Research. 3) Keyword Gap (Ahrefs/Semrush) — znajdź słowa dla których konkurent rankuje a Ty nie. 4) Google: wpisz główne słowo kluczowe → sprawdź kto jest w top 10 → przeanalizuj ich strony. 5) Content gap analysis — tematy które konkurent porusza a Ty pomijasz. Cel: nie kopiować strategii, ale znajdować luki i okazje które pominął konkurent.",
    },
    {
      question: "Ile słów kluczowych na jedną stronę?",
      answer: "Zasada keyword cannibalization: jedna strona = jedno główne słowo kluczowe (primary keyword). Możesz optymalizować pod kilka powiązanych fraz (secondary keywords, LSI keywords) na tej samej stronie jeśli mają ten sam search intent. Problem keyword cannibalization: jeśli masz dwie strony optymalizowane pod to samo słowo kluczowe, Google nie wie którą wybrać i obie mogą rankować gorzej. Rozwiązanie: mapowanie słów kluczowych — przypisz każde słowo kluczowe do konkretnej podstrony, sprawdź przez 'site:Twojadomena.pl słowo kluczowe' czy nie masz duplikatu. Narzędzie: Ahrefs → Organic Keywords → filtr 'pages: 2+' dla tego samego słowa kluczowego.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Keyword Research — co to jest? Badanie słów kluczowych | fotz.pl"
        description="Keyword research co to jest — wyjaśniamy jak przeprowadzić badanie słów kluczowych, search intent, keyword difficulty i jak znaleźć słowa kluczowe konkurencji."
        canonical="https://fotz.pl/blog/keyword-research-co-to"
      />
      <ArticleSchema
        title="Keyword Research — co to jest? Badanie słów kluczowych"
        description="Czym jest keyword research, typy słów kluczowych (head, mid, long-tail), search intent, keyword difficulty i narzędzia do badania słów kluczowych SEO."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/keyword-research-co-to"
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
                <span className="flex items-center gap-1"><Search className="w-4 h-4" /> SEO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Keyword Research — co to jest i jak przeprowadzić badanie słów kluczowych?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Keyword research to fundament SEO — identyfikacja fraz wyszukiwanych przez Twoich klientów.
                Jak to robić, narzędzia i jak znaleźć okazje których nie widzi konkurencja.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy słów kluczowych</h2>
              <div className="space-y-3 mb-6">
                {keywordTypes.map((k, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{k.type}</span>
                      <div className="flex gap-2">
                        <span className="text-xs text-blue-600 font-medium">Vol: {k.vol}</span>
                        <span className="text-xs text-orange-600 font-medium">KD: {k.diff}</span>
                      </div>
                    </div>
                    <p className="text-blue-600 text-xs font-medium mb-0.5">Przykłady: {k.example}</p>
                    <p className="text-slate-600 text-xs">{k.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Narzędzia do keyword research</h2>
              <div className="space-y-2 mb-6">
                {tools.map((t, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                        <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${t.free ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"}`}>{t.free ? "Darmowy" : "Płatny"}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz profesjonalnego keyword research?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Analiza słów kluczowych, content gap i mapowanie fraz — budujemy strategię SEO opartą na danych.
                </p>
                <Link to="/uslugi/pozycjonowanie-stron" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Pozycjonowanie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Keyword Research co to jest</h2>
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
          heading="Przeprowadzimy keyword research i zbudujemy strategię SEO"
          subheading="Analiza słów kluczowych, content gap i mapowanie fraz — SEO oparte na danych."
        />
      </Layout>
    </>
  );
}
