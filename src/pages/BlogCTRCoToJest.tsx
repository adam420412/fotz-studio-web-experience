import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MousePointer, TrendingUp, BarChart2 } from "lucide-react";
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

export default function BlogCTRCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "CTR — co to jest i jak go poprawić?" },
  ];

  const ctrBenchmarks = [
    { channel: "Wyniki organiczne Google (pozycja 1)", ctr: "~28%", note: "Najwyższy CTR — dlatego pozycja #1 jest tak cenna" },
    { channel: "Wyniki organiczne Google (pozycja 3)", ctr: "~11%", note: "Gwałtowny spadek po pierwszej pozycji" },
    { channel: "Wyniki organiczne Google (pozycja 10)", ctr: "~2.5%", note: "Koniec pierwszej strony Google" },
    { channel: "Google Ads (search)", ctr: "3–5%", note: "Przeciętna; powyżej 5% to dobry wynik" },
    { channel: "Google Ads (display)", ctr: "0.1–0.3%", note: "Niższy CTR, wyższy zasięg" },
    { channel: "Email marketing (newsletter)", ctr: "2–5%", note: "CTR kliknięć w linki w emailu" },
    { channel: "Reklamy Facebook / Meta", ctr: "0.9–1.5%", note: "Zależy od grupy docelowej i kreacji" },
  ];

  const ctrTips = [
    { title: "Tytuł meta (Title Tag)", desc: "Najważniejszy czynnik CTR w Google. Zawieraj główne słowo kluczowe, liczby (np. '7 sposobów'), emocjonalne słowa ('bezpłatny', 'prosty', 'kompletny')." },
    { title: "Meta description", desc: "Opis pod tytułem w Google — nie wpływa na ranking, ale bardzo na CTR. Pisz jak reklamę: korzyści, CTA, odpowiedź na pytanie użytkownika." },
    { title: "Rich Snippets / Schema", desc: "Oceny gwiazdkowe, FAQ, breadcrumbs w wynikach Google zwiększają CTR o 20-30% — wyróżniasz się wizualnie." },
    { title: "URL strony", desc: "Krótki, czytelny URL zawierający słowo kluczowe. fotz.pl/blog/ctr-co-to > fotz.pl/blog/?p=1234." },
    { title: "Testowanie tytułów", desc: "W Google Search Console sprawdzaj CTR dla każdej strony. Niski CTR przy wysokiej pozycji = zły tytuł — testuj alternatywy." },
  ];

  const faqItems = [
    {
      question: "Co to jest CTR?",
      answer:
        "CTR (Click-Through Rate) to współczynnik klikalności — procent osób które kliknęły w link po tym jak go zobaczyły. Wzór: CTR = (liczba kliknięć / liczba wyświetleń) × 100%. Przykład: reklama wyświetlona 1000 razy, kliknięta 30 razy = CTR 3%. CTR mierzy się w Google Ads, wynikach organicznych (Search Console), email marketingu i reklamach social media.",
    },
    {
      question: "Jaki CTR jest dobry w Google?",
      answer:
        "Dobry CTR w wynikach organicznych Google zależy od pozycji: pozycja #1 — ok. 28%, pozycja #3 — ok. 11%, pozycja #10 — ok. 2.5%. Poniżej oczekiwanego benchmarku = zły tytuł lub meta opis. W Google Ads: CTR powyżej 5% w kampaniach search to dobry wynik. CTR zależy też od branży — dla branded keywords bywa 50%+.",
    },
    {
      question: "Jak CTR wpływa na SEO?",
      answer:
        "CTR jest czynnikiem rankingowym Google — strony z wyższym CTR dla danego zapytania mogą zyskiwać wyższe pozycje (Google interpretuje to jako lepsze dopasowanie do intencji użytkownika). Zależność działa w dwie strony: wyższa pozycja = wyższy CTR, ale też wyższy CTR może wspierać pozycję. Dlatego optymalizacja meta tagów (title + description) to element SEO.",
    },
    {
      question: "Jak zwiększyć CTR w wynikach Google?",
      answer:
        "Metody na wyższy CTR organiczny: 1) Optymalizuj Title Tag — zawieraj słowo kluczowe, liczby, przymiotniki ('kompletny', 'bezpłatny'). 2) Napisz atrakcyjny meta description z CTA. 3) Dodaj znaczniki Schema — oceny, FAQ w wynikach. 4) Sprawdź Google Search Console — znajdź strony z wysoką pozycją ale niskim CTR (priorytet optymalizacji). 5) Dostosuj URL — krótki i opisowy.",
    },
    {
      question: "Czym różni się CTR od współczynnika konwersji?",
      answer:
        "CTR mierzy ile osób kliknęło w link (przeszło na stronę). Współczynnik konwersji mierzy ile z tych osób wykonało pożądane działanie (zakup, formularz). Przykład: reklama ma CTR 5% (50 z 1000 wyświetleń kliknęło) i współczynnik konwersji 3% (1.5 z 50 osób kupiło). Oba wskaźniki są ważne — możesz mieć wysoki CTR i niski CR (strona nie spełnia oczekiwań) lub niski CTR i wysoki CR (mały ruch ale skuteczna strona).",
    },
    {
      question: "Jak sprawdzić CTR swojej strony?",
      answer:
        "Google Search Console (gratis): zakładka 'Skuteczność' → widok CTR dla każdej strony i zapytania. Google Ads: w panelu kampanii CTR dla każdej reklamy. Meta Ads Manager: CTR dla reklam Facebook/Instagram. Email marketing (Mailchimp, GetResponse): CTR kliknięć w linki w newsletterze. Sprawdzaj CTR regularnie — spadek CTR przy stabilnej pozycji może sygnalizować problem z tytułem lub pojawienie się konkurencji z rich snippets.",
    },
  ];

  return (
    <>
      <SEOHead
        title="CTR — co to jest i jak zwiększyć współczynnik klikalności? | fotz.pl"
        description="CTR co to jest — wyjaśniamy czym jest Click-Through Rate, ile powinien wynosić CTR w Google, Google Ads i email marketingu oraz jak go poprawić."
        canonical="https://fotz.pl/blog/ctr-co-to-jest"
      />
      <ArticleSchema
        title="CTR — co to jest i jak zwiększyć współczynnik klikalności?"
        description="Czym jest CTR (Click-Through Rate), benchmarki CTR dla Google, Google Ads i emaila oraz metody zwiększania klikalności w wynikach wyszukiwania."
        datePublished="2025-03-25"
        dateModified="2025-04-07"
        url="https://fotz.pl/blog/ctr-co-to-jest"
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
                <span className="flex items-center gap-1"><MousePointer className="w-4 h-4" /> SEO i reklamy</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                CTR — co to jest i jak zwiększyć klikalność?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                CTR (Click-Through Rate) mierzy ile osób klika w Twój wynik w Google lub reklamę.
                Niski CTR = tracisz ruch mimo dobrej pozycji. Jak to zmienić?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Benchmarki CTR — ile powinno wynosić?</h2>
              <div className="space-y-2 mb-6">
                {ctrBenchmarks.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{item.channel}</p>
                      <p className="text-slate-500 text-xs">{item.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">{item.ctr}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak zwiększyć CTR w wynikach Google?</h2>
              <div className="space-y-3 mb-6">
                {ctrTips.map((tip, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">{tip.title}</p>
                        <p className="text-slate-600 text-xs">{tip.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">CTR a SEO — jak wpływają na siebie?</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-amber-600 mb-2" />
                <p className="text-amber-800 font-semibold mb-2">CTR jako sygnał rankingowy</p>
                <p className="text-amber-700 text-sm">
                  Google używa CTR jako jednego z sygnałów oceny jakości wyników. Jeśli użytkownicy pomijają
                  Twoją stronę na pozycji #3 i klikają w wyniki #4-5, Google może to interpretować jako
                  gorsze dopasowanie i obniżyć Twoją pozycję. Dlatego optymalizacja CTR (title + description)
                  jest równie ważna co pozycja w Google.
                </p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <BarChart2 className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz poprawić CTR i pozycje w Google?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Optymalizujemy meta tagi, struktury danych i treści — więcej kliknięć bez większego budżetu.
                </p>
                <Link to="/uslugi/pozycjonowanie" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — CTR co to jest</h2>
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
          heading="Więcej kliknięć bez większego budżetu"
          subheading="Optymalizujemy tytuły, opisy i struktury danych — Twój CTR rośnie, ruch rośnie."
        />
      </Layout>
    </>
  );
}
