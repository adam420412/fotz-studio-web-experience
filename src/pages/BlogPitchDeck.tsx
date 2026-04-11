import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap, Target, BarChart2, Users } from "lucide-react";
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

export default function BlogPitchDeck() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Pitch deck — co to jest i jak go przygotować?" },
  ];

  const deckSlides = [
    { num: "1", title: "Problem", desc: "Jaki ból/problem rozwiązujesz? Im bardziej konkretny i bolesny, tym lepiej. Dane i statystyki." },
    { num: "2", title: "Rozwiązanie", desc: "Twój produkt/usługa jako odpowiedź. Jak działa? Demo lub screenshot." },
    { num: "3", title: "Rynek (TAM/SAM/SOM)", desc: "Całkowity rynek adresowalny. Liczby, nie szerokie twierdzenia." },
    { num: "4", title: "Model biznesowy", desc: "Jak zarabiasz? Ceny, marże, unit economics." },
    { num: "5", title: "Trakcja", desc: "Przychody, klienci, growth rate, NPS. To najważniejszy slide — pokaż momentum." },
    { num: "6", title: "Konkurencja", desc: "Kto jeszcze próbuje rozwiązać ten problem? Co Cię wyróżnia?" },
    { num: "7", title: "Zespół", desc: "Dlaczego właśnie Ty i Twój team? Doświadczenie, wcześniejsze sukcesy." },
    { num: "8", title: "Finansials i prognoza", desc: "3-letnia prognoza P&L. Założenia muszą być realistyczne i uzasadnione." },
    { num: "9", title: "Użycie środków", desc: "Na co pójdą pieniądze? Hiring, marketing, product — konkretny podział." },
    { num: "10", title: "Ask (zapytanie)", desc: "Ile szukasz i za jaką wycenę? Jasno i konkretnie." },
  ];

  const faqItems = [
    {
      question: "Co to jest pitch deck?",
      answer:
        "Pitch deck to prezentacja (zazwyczaj 10-20 slajdów) używana przez startupy i firmy do przedstawienia swojego biznesu potencjalnym inwestorom (VC, aniołowie biznesu), partnerom lub klientom. Zawiera najważniejsze informacje o produkcie, rynku, modelu biznesowym, zespole i potrzebach finansowych. Celem pitch decka jest zainteresowanie inwestora na tyle, by chciał podjąć kolejny krok — umówić spotkanie lub przeprowadzić due diligence.",
    },
    {
      question: "Ile slajdów powinien mieć pitch deck?",
      answer:
        "Optymalny pitch deck to 10-15 slajdów. Klasyczna formuła Sequence Capital / Guy Kawasaki: 10 slajdów, 20 minut prezentacji. Mniej znaczy więcej — inwestorzy przeglądają setki decków. Obowiązkowe slajdy: Problem, Rozwiązanie, Rynek, Model biznesowy, Trakcja (przychody/klienci), Konkurencja, Zespół, Finansials, Use of funds. Dołącz appendix z detalami dla zainteresowanych.",
    },
    {
      question: "Jak napisać dobry pitch deck?",
      answer:
        "Zasady skutecznego pitch decka: 1) Zacznij od problemu — inwestor musi poczuć ból klienta. 2) Pokaż trakcję jak najwcześniej — jeśli masz przychody lub wzrost, pokaż to. 3) Jeden pomysł na slajd — nie przepełniaj. 4) Dane > twierdzenia — każde stwierdzenie poparte danymi. 5) Design ma znaczenie — schludny, czytelny, profesjonalny. 6) Opowiedz historię — najlepsze decks to narracje, nie prezentacje. 7) Testuj na zimnych czytelnikach — czy rozumieją bez Twojego komentarza?",
    },
    {
      question: "Czym różni się pitch deck od business planu?",
      answer:
        "Pitch deck to 10-20 slajdów — szybka, wizualna prezentacja kluczowych elementów biznesu. Służy do zainteresowania inwestora. Business plan to dokument 30-100+ stron z pełną analizą rynku, modelem finansowym, opisem produktu, strategią i prognozami. Służy do głębszej analizy po zainteresowaniu. W praktyce: wyślij deck → jeśli zainteresowany → poprosi o model finansowy i szczegóły. Pełny business plan bywa zbędny — inwestorzy i tak zrobią własne modele.",
    },
    {
      question: "Gdzie można znaleźć przykłady pitch decków?",
      answer:
        "Najlepsze publicznie dostępne pitch decki: Airbnb seed deck (2008) — klasyczny, prosty, 10 slajdów. Uber seed deck (2008) — problem dobrze zdefiniowany. LinkedIn Series B (2004) — ze szczegółowymi metrykami. Buffer seed deck — przejrzysty i uczciwy. Pitch Deck Hunt, Visible VC Blog, DocSend — bazy pitch decków. Polska: Startup Poland, MIT EF Poland. Uwaga: prawdziwe decks, które zebrały duże rundy, rzadko są publiczne — te najlepiej opisują retrospektywnie fundatorzy.",
    },
    {
      question: "Jak wysłać pitch deck do inwestora?",
      answer:
        "Jak wysłać deck: 1) Nigdy nie wysyłaj PDF przez cold email bez kontekstu — deck musi być poprzedzony ciepłym wprowadzeniem lub przynajmniej spersonalizowanym emailem. 2) Użyj Docsend lub Notion — możesz śledzić czas spędzony na każdym slajdzie. 3) Email = krótkie 3-4 zdania (kim jesteś, co robisz, traction, co szukasz) + link do decka. 4) Nie wysyłaj do wszystkich — zbadaj VC i wyślij do tych którzy inwestują w Twoją branżę i etap. 5) Follow-up po tygodniu jeśli brak odpowiedzi.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Pitch deck — co to jest i jak go przygotować? | fotz.pl"
        description="Pitch deck co to jest — wyjaśniamy czym jest prezentacja dla inwestorów, ile powinna mieć slajdów, jak napisać dobry pitch deck i jak wysłać do VC."
        canonical="https://fotz.pl/blog/pitch-deck-co-to"
      />
      <ArticleSchema
        title="Pitch deck — co to jest i jak go przygotować?"
        description="Czym jest pitch deck, ile slajdów powinien mieć, jak napisać dobry deck dla inwestorów VC i jak wysłać prezentację do funduszu."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/pitch-deck-co-to"
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
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Startupy i inwestycje</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pitch deck — co to jest i jak go przygotować?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Pitch deck to kluczowa prezentacja dla inwestorów. Ile slajdów, co zawierać
                i jak przygotować deck który zainteresuje fundusz VC?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">10 obowiązkowych slajdów pitch decka</h2>
              <div className="space-y-2 mb-6">
                {deckSlides.map((slide, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {slide.num}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{slide.title}</span>
                      <p className="text-slate-600 text-xs mt-0.5">{slide.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Najczęstsze błędy w pitch deckach</h2>
              <div className="space-y-2 mb-6">
                {[
                  'Rynek "globalny wart 100 miliardów" — zamiast realnego adresowalnego segmentu',
                  "Brak trakcji / klientów — inwestorzy VC chcą widzieć momentum",
                  "Zbyt skomplikowany produkt — nie wiadomo co robisz po 5 sekundach",
                  '"Nie mamy konkurencji" — każdy ma konkurencję (status quo też jest konkurentem)',
                  "Zbyt mało informacji o teamie — fundatorzy są ważniejsi niż pomysł",
                  "Finansials bez założeń — skąd te liczby? Jak je uzasadniasz?",
                  "Zbyt długi deck — 20+ slajdów to za dużo na pierwsze spotkanie",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                    <span className="text-red-500 font-bold text-sm flex-shrink-0">✗</span>
                    <p className="text-red-800 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz startup i szukasz inwestora?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Dobra strona i analytics to elementy traction, które inwestorzy weryfikują w due diligence.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Pitch deck co to jest</h2>
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
          heading="Przygotuj startup na rozmowy z inwestorami"
          subheading="Strona, analytics i obecność online — fundament każdego pitch decka."
        />
      </Layout>
    </>
  );
}
