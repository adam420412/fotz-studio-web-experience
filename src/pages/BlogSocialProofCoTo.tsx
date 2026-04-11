import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, Users, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogSocialProofCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Social Proof — co to jest i jak zwiększa konwersję?" },
  ];

  const socialProofTypes = [
    { type: "Recenzje i opinie klientów", icon: Star, desc: "Najsilniejszy typ social proof — autentyczne opinie na Google, Trustpilot, Ceneo. 93% konsumentów czyta recenzje przed zakupem (BrightLocal).", example: "5.0 ★ z 214 recenzji na Google" },
    { type: "Case studies i success stories", icon: TrendingUp, desc: "Szczegółowe opisy jak klient osiągnął wyniki dzięki Twojemu produktowi/usłudze. Świetne dla B2B i wysokich cen.", example: "Jak XYZ zwiększyło sprzedaż o 180% w 6 miesięcy" },
    { type: "Liczby i statystyki", icon: Users, desc: "Liczba klientów, lat doświadczenia, zrealizowanych projektów. Tworzy wrażenie skali i zaufania.", example: "Zaufało nam 500+ firm z Polski" },
    { type: "Loga klientów (client logos)", icon: CheckCircle2, desc: "Loga znanych marek wśród klientów — natychmiastowe podniesienie wiarygodności przez asocjację.", example: "Naszymi klientami są: [logo Allegro, Orlen, PKO BP]" },
    { type: "Certyfikaty i nagrody", icon: Star, desc: "Branżowe wyróżnienia, certyfikaty partnerskie (Google Premier Partner, Meta Business Partner), nagrody.", example: "Google Premier Partner 2024, Forbes 30 under 30" },
    { type: "Social media followers", icon: Users, desc: "Liczba obserwujących, subskrybentów, reakcji — szczególnie dla twórców treści i personal brand.", example: "12 000 obserwujących na LinkedIn" },
  ];

  const faqItems = [
    {
      question: "Co to jest social proof (dowód społeczny)?",
      answer: "Social proof (dowód społeczny) to psychologiczne zjawisko polegające na tym, że ludzie kierują się zachowaniem i opiniami innych przy podejmowaniu decyzji — szczególnie w sytuacjach niepewności. Termin ukuty przez Roberta Cialdiniego w 'Influence: The Psychology of Persuasion' (1984). W marketingu: social proof to wszelkie sygnały sugerujące, że inni ludzie ufają Twojej firmie, kupili produkt lub polecają usługę. Typy: recenzje, case studies, loga klientów, liczba użytkowników, certyfikaty, media mentions. Skuteczność: Według badań, strony z recenzjami konwertują o 270% lepiej niż bez recenzji (Spiegel Research Center).",
    },
    {
      question: "Jak social proof wpływa na konwersję?",
      answer: "Dane o wpływie social proof na konwersję: Recenzje produktów — produkty z 5 recenzjami konwertują o 270% lepiej niż bez recenzji (Spiegel). Liczba gwiazdek — przejście z 3.5 do 3.7 gwiazdki zwiększa konwersję o 120% (Qualtrics). Case studies — 70% kupujących B2B czyta case studies przed decyzją zakupową (DemandGen). Loga klientów — strony z logami znanych klientów mają o 32% wyższy trust score. Recenzje 4-4.5 gwiazdki — konwertują lepiej niż perfekcyjne 5.0 (zbyt idealne budzi podejrzenia). Aktualność recenzji — 85% konsumentów nie ufa recenzjom starszym niż 3 miesiące.",
    },
    {
      question: "Jak zbierać social proof dla swojej firmy?",
      answer: "Metody zbierania social proof: 1) Recenzje Google — generuj link i proś klientów po zakończeniu współpracy. Odpowiadaj na każdą recenzję. 2) Testimoniale video — poproś najlojalniejszych klientów o 1-2 minutowy film. Najsilniejszy format. 3) Case studies — zbierz dane przed/po, opisz challenge i rozwiązanie. Zaproś klienta do współtworzenia. 4) Zbieraj dane ilościowe — liczba klientów, zakończonych projektów, lat na rynku. 5) Certyfikaty i partnerstwa — Google Partner, ISO, branżowe stowarzyszenia. 6) Media mentions — umieszczaj loga mediów które o Tobie pisały ('Jak w Forbes/Gazeta.pl'). 7) Automatyzacja — Trustpilot, Opineo.pl automatycznie proszą o opinie po transakcji.",
    },
    {
      question: "Gdzie umieszczać social proof na stronie?",
      answer: "Optymalne miejsca dla social proof: 1) Strona główna — hero section lub tuż pod CTA: liczba klientów, loga, gwiazdki Google. 2) Landing page — między sekcjami benefitów a CTA: testimoniale, case study highlights. 3) Strony produktów/usług — recenzje, specyficzne case studies dla tej usługi. 4) Strona 'O nas' — certyfikaty, nagrody, historia firmy, liczby. 5) Checkout/formularz kontaktowy — tuż obok przycisku: 'Zaufało nam 500+ firm' lub opinia klienta. 6) Email marketing — social proof w emailach sprzedażowych i nurturing. Zasada: im bliżej decyzji zakupowej, tym mocniejszy social proof (nie ogólne liczby, ale konkretne opinie).",
    },
    {
      question: "Czym różni się social proof od FOMO?",
      answer: "Social proof i FOMO (Fear of Missing Out) to dwie powiązane, ale różne taktyki perswazji: Social proof — 'Inni już to kupili/polecają' → naśladuję innych bo im ufam. Przykłady: recenzje, 'X osób kupiło', loga klientów. FOMO — 'Zostało tylko X sztuk/oferta wygasa za Y godzin' → boję się stracić okazję. Przykłady: 'Ostatnie 3 pokoje', 'Oferta kończy się za 2 godziny', 'X osób przegląda teraz ten produkt'. Oba działają na różne mechanizmy psychologiczne: social proof na przynależność i zaufanie, FOMO na strach przed stratą (loss aversion). Najlepsze strony łączą obie techniki — np. 'Zaufało nam 1000 firm, a ta oferta wygasa w piątek'.",
    },
    {
      question: "Jak radzić sobie z negatywnym social proof?",
      answer: "Negatywny social proof to sytuacja gdzie mała liczba recenzji lub niskie oceny szkodzą konwersji. Jak zarządzać: 1) Odpowiadaj profesjonalnie na negatywne recenzje — pokaż empatię i gotowość rozwiązania problemu. Potencjalni klienci oceniają jak firma reaguje, nie tylko ocenę. 2) Nie usuwaj negatywnych recenzji — to niemożliwe na Google i wygląda podejrzanie. 3) Rozcieńcz negatywne recenzje pozytywnymi — aktywnie proś zadowolonych klientów o opinie. 4) Unikaj 'paradoksu social proof': nie pisz 'większość firm NIE korzysta z naszej usługi' — to negatywny social proof. 5) Strony z recenzjami 4.3-4.7 (nie idealne 5.0) konwertują lepiej — trochę 'niedoskonałości' buduje autentyczność.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Social Proof — co to jest i jak zwiększa konwersję? | fotz.pl"
        description="Social proof co to jest — wyjaśniamy czym jest dowód społeczny, typy social proof, jak go zbierać i gdzie umieszczać na stronie dla maksymalnej konwersji."
        canonical="https://fotz.pl/blog/social-proof-co-to"
      />
      <ArticleSchema
        title="Social Proof — co to jest i jak zwiększa konwersję?"
        description="Czym jest social proof (dowód społeczny), typy (recenzje, case studies, loga klientów), jak wpływa na konwersję i gdzie umieszczać na stronie."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/social-proof-co-to"
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
                <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Konwersja i UX</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Social Proof — co to jest i jak dowód społeczny zwiększa konwersję?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Social proof (dowód społeczny) to jeden z najsilniejszych mechanizmów perswazji w marketingu.
                Strony z recenzjami konwertują o 270% lepiej. Jak to wykorzystać?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy social proof w marketingu</h2>
              <div className="space-y-3 mb-6">
                {socialProofTypes.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-bold text-slate-900 text-sm">{t.type}</span>
                      </div>
                      <p className="text-slate-600 text-xs mb-1">{t.desc}</p>
                      <p className="text-blue-600 text-xs italic">Przykład: {t.example}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zwiększyć konwersję przez lepszy social proof?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy strony z optymalnie umieszczonym social proof — recenzje, case studies i liczby które konwertują.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Social Proof co to jest</h2>
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
          heading="Zaprojektujemy stronę z social proof który konwertuje"
          subheading="Recenzje, testimoniale, case studies i loga klientów — w miejscach które budują zaufanie i sprzedają."
        />
      </Layout>
    </>
  );
}
