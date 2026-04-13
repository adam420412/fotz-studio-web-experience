import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Star, CheckCircle2, Award } from "lucide-react";
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

export default function BlogEEATCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "E-E-A-T — co to jest? Expertise, Experience, Authority, Trust w SEO" },
  ];

  const eeatComponents = [
    {
      letter: "E",
      name: "Experience (Doświadczenie)",
      color: "bg-blue-100 border-blue-300 text-blue-800",
      desc: "Autor lub twórca treści ma bezpośrednie, osobiste doświadczenie z tematem. Nowe kryterium dodane w 2022 roku.",
      examples: "Recenzja hotelu napisana przez kogoś kto tam był. Poradnik gotowania od szefa kuchni. Opinia medyczna lekarza który leczył pacjenta.",
    },
    {
      letter: "E",
      name: "Expertise (Ekspertyza)",
      color: "bg-green-100 border-green-300 text-green-800",
      desc: "Autor ma formalną wiedzę, wykształcenie lub certyfikaty w danej dziedzinie. Szczególnie ważne dla YMYL (Your Money Your Life).",
      examples: "Artykuł medyczny napisany przez lekarza. Porada prawna od adwokata. Analiza finansowa od certyfikowanego doradcy finansowego.",
    },
    {
      letter: "A",
      name: "Authoritativeness (Autorytet)",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
      desc: "Strona i autor są rozpoznawani jako eksperci przez innych — przez linki, wzmianki, cytowania w mediach i branży.",
      examples: "Cytowania w Wikipedii. Linki z renomowanych mediów. Wzmianki przez inne autorytety w branży.",
    },
    {
      letter: "T",
      name: "Trustworthiness (Zaufanie)",
      color: "bg-purple-100 border-purple-300 text-purple-800",
      desc: "Najważniejszy z czterech. Strona jest uczciwa, przejrzysta i bezpieczna. Wiarygodność informacji jest możliwa do zweryfikowania.",
      examples: "SSL/HTTPS, wyraźna polityka prywatności, rzetelne źródła, brak mylących informacji, jasne 'About Us', recenzje Google.",
    },
  ];

  const improvementTips = [
    "Twórz profile autorów z biogramem, zdjęciem i linkiem do profili (LinkedIn, Google Scholar)",
    "Zdobywaj backlinki z renomowanych, branżowych mediów i instytucji",
    "Cytuj i linkuj do wiarygodnych źródeł zewnętrznych (badania, raporty, instytucje)",
    "Zbieraj i eksponuj recenzje na Google, Trustpilot, dedykowanych platformach",
    "Aktualizuj treści — przestarzałe informacje szkodzą Trust",
    "Dodaj stronę 'O nas' z historią firmy, certyfikatami, nagrodami",
    "Wdrażaj Schema Markup dla autorów (Person schema, Organization schema)",
    "Usuń lub popraw niskiej jakości treści (content audit) — one obniżają E-E-A-T całej domeny",
  ];

  const faqItems = [
    {
      question: "Co to jest E-E-A-T?",
      answer: "E-E-A-T (wymawiane 'Double-E-A-T') to skrót od: Experience (Doświadczenie), Expertise (Ekspertyza), Authoritativeness (Autorytet) i Trustworthiness (Zaufanie). To framework Google używany przez Quality Raters (ludzkich oceniających treści Google) do oceny jakości stron w Google Search Quality Evaluator Guidelines. E-E-A-T nie jest bezpośrednim czynnikiem rankingowym — Google nie odczytuje 'poziomu E-E-A-T'. Zamiast tego algorytm szuka sygnałów skorelowanych z E-E-A-T: backlinki, wzmianki, recenzje, certyfikaty, dane autora. Pierwotnie był to E-A-T (3 czynniki), Google dodał drugie 'E' (Experience) w grudniu 2022.",
    },
    {
      question: "Dlaczego E-E-A-T jest ważny dla SEO?",
      answer: "E-E-A-T jest szczególnie ważny dla stron YMYL (Your Money or Your Life) — kategorii treści które mogą wpłynąć na zdrowie, bezpieczeństwo, finanse lub dobrobyt użytkowników. Kategorie YMYL: medycyna i zdrowie, finanse (inwestycje, bankowość), prawo, wiadomości i aktualności, zakupy. Dla tych kategorii Google wymaga najwyższego poziomu E-E-A-T — treści powinny być tworzone przez potwierdzonych ekspertów. W 2019 Google przeprowadził 'Medic Update' który obniżył rankingi wielu stron medycznych i zdrowotnych o niskim E-A-T. Dla stron niezwiązanych z YMYL E-E-A-T jest ważny ale mniej krytyczny.",
    },
    {
      question: "Jak poprawić E-E-A-T strony?",
      answer: "Strategie poprawy E-E-A-T: Experience: twórz treści oparte na realnym doświadczeniu, case studies, personal stories, testuj produkty przed recenzją. Expertise: rekrutuj ekspertów do tworzenia lub recenzowania treści, podawaj kwalifikacje autora, linkuj do certyfikatów i badań. Authoritativeness: buduj backlinki z renomowanych mediów (Digital PR), zdobywaj wzmianki eksperckie, bądź cytowany przez inne autorytety. Trust: HTTPS, polityka prywatności, dane kontaktowe, brak wprowadzających w błąd informacji, recenzje klientów, aktualizacja przestarzałych treści. Ogólnie: każda strona która chce być wiarygodna powinna mieć wyraźnie opisanych autorów i instytucję stojącą za treścią.",
    },
    {
      question: "Jaka jest różnica między E-A-T a E-E-A-T?",
      answer: "E-A-T (pierwotna wersja, 2014-2022): Expertise (ekspertyza) + Authoritativeness (autorytet) + Trustworthiness (zaufanie). E-E-A-T (od grudnia 2022): dodane Experience (doświadczenie) jako pierwsze 'E'. Różnica: Experience podkreśla wartość osobistego, praktycznego doświadczenia w temacie — nawet jeśli ktoś nie jest formalnym ekspertem. Przykład: recenzja restauracji napisana przez kogoś kto tam jadł jest bardziej wartościowa niż recenzja kogoś kto bazuje na zdjęciach i opisach. Zmiana odzwierciedla trend Google w kierunku oceniania autentyczności treści — content tworzony przez kogoś z realnym doświadczeniem jest cenniejszy niż treści generowane bez kontekstu.",
    },
    {
      question: "Czy AI-generated content szkodzi E-E-A-T?",
      answer: "Google oficjalnie mówi, że nie jest przeciwko AI content — ale ocenia czy treść jest pomocna, oryginalna i godna zaufania. Problem AI content i E-E-A-T: AI nie ma Experience (doświadczenia osobistego). AI może generować błędne lub przestarzałe informacje (szkodzi Trust). AI często tworzy generyczne treści bez głębi eksperta (szkodzi Expertise). Jak używać AI bez szkody dla E-E-A-T: używaj AI jako narzędzie do strukturyzowania i szkiców, treści recenzuje i uzupełnia ekspert, dodaj osobiste doświadczenia i opinie które AI nie może wygenerować, cytuj weryfikowalne źródła, podaj autora z kwalifikacjami. Google penalizuje treści spamowe lub manipulacyjne niezależnie od tego czy je stworzył człowiek czy AI.",
    },
    {
      question: "Jak mierzyć E-E-A-T strony?",
      answer: "E-E-A-T nie ma bezpośredniej metryki — możesz jednak mierzyć sygnały skorelowane: Authority/Authoritativeness: Domain Rating (Ahrefs), Domain Authority (Moz), liczba linking root domains, wzmianki w mediach (Brand24). Trust: liczba i ocena recenzji Google/Trustpilot, HTTPS status, obecność certyfikatów SSL, spójność NAP (dla lokalnych). Expertise: biogramy autorów, cytowania w branżowych mediach, linki do stron instytucjonalnych. Experience: unique content (oryginalność treści), user signals (czas spędzony, niska pogo-sticking rate). Narzędzia: Ahrefs Site Explorer (backlinki), Brand24 (wzmianki), Google Search Console (performance). Główna wskazówka: poprawiaj metryki SEO które korelują z E-E-A-T, nie 'optymalizuj pod E-E-A-T' bezpośrednio.",
    },
  ];

  return (
    <>
      <SEOHead
        title="E-E-A-T — co to jest? Expertise, Experience, Authority, Trust w SEO | fotz.pl"
        description="E-E-A-T co to jest — wyjaśniamy czym jest Experience, Expertise, Authoritativeness i Trust w SEO, jak poprawić E-E-A-T i dlaczego ważny dla YMYL."
        canonical="https://fotz.pl/blog/e-e-a-t-seo"

        keywords="E-E-A-T co to jest, E-E-A-T definicja, czym jest E-E-A-T, E-E-A-T w marketingu, E-E-A-T przykłady, jak działa E-E-A-T, E-E-A-T strategia"
      />
      <ArticleSchema
        title="E-E-A-T — co to jest? Expertise, Experience, Authority, Trust w SEO"
        description="Czym jest E-E-A-T w SEO, cztery składniki (Experience, Expertise, Authoritativeness, Trust), YMYL, jak poprawić E-E-A-T i AI content a E-E-A-T."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/e-e-a-t-seo"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> SEO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                E-E-A-T — co to jest i jak wpływa na SEO?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                E-E-A-T (Experience, Expertise, Authoritativeness, Trust) to framework Google
                do oceny jakości treści. Jak go poprawić i dlaczego jest kluczowy dla YMYL?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Cztery składniki E-E-A-T</h2>
              <div className="space-y-3 mb-6">
                {eeatComponents.map((comp, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${comp.color}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-black">{comp.letter}</span>
                      <span className="font-bold text-sm">{comp.name}</span>
                    </div>
                    <p className="text-sm mb-1">{comp.desc}</p>
                    <p className="text-xs opacity-75 italic">Przykłady: {comp.examples}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak poprawić E-E-A-T — lista działań</h2>
              <div className="space-y-2 mb-6">
                {improvementTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Award className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zbudować autorytet SEO swojej strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  SEO, content marketing i link building — budujemy E-E-A-T który przekłada się na pozycje w Google.
                </p>
                <Link to="/seo/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — E-E-A-T co to jest</h2>
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
          heading="Zbudujemy E-E-A-T i autorytet Twojej strony w Google"
          subheading="Content strategy, link building i optymalizacja techniczna — SEO oparte na zaufaniu i ekspertyzie."
        />
      </Layout>
    </>
  );
}
