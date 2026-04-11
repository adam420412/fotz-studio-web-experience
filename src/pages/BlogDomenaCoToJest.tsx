import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Globe, Search, AlertCircle } from "lucide-react";
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

export default function BlogDomenaCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Domena — co to jest i jak wybrać nazwę domeny?" },
  ];

  const domainExtensions = [
    { ext: ".pl", desc: "Polska domena krajowa. Najlepsza dla firm działających w Polsce — sygnał lokalności dla Google i zaufanie użytkowników.", price: "ok. 80-100 zł/rok" },
    { ext: ".com", desc: "Najpopularniejsza domena globalna. Dobra jeśli planujesz działalność międzynarodową lub .pl jest zajęte.", price: "ok. 80-150 zł/rok" },
    { ext: ".eu", desc: "Domena europejska — dla firm z rynkiem unijnym. Mniej popularna w Polsce niż .pl.", price: "ok. 60-100 zł/rok" },
    { ext: ".net / .org", desc: ".net dla technologicznych, .org dla organizacji non-profit. W Polsce rzadziej używane niż .pl/.com.", price: "ok. 80-120 zł/rok" },
  ];

  const goodDomainTips = [
    "Krótka i łatwa do zapamiętania — maksymalnie 2-3 słowa",
    "Łatwa do literowania przez telefon — bez myślników, cyfr i dziwnych znaków",
    "Nawiązuje do branży lub nazwy firmy — nie do aktualnej oferty (może się zmienić)",
    "Bez myślników jeśli możliwe — myślniki obniżają wiarygodność i SEO",
    "Sprawdź znaki towarowe — nie rejestruj domeny z cudzą marką",
    "Rozważ warianty — zarejestruj .pl i .com razem by nikt nie przejął",
  ];

  const faqItems = [
    {
      question: "Co to jest domena?",
      answer:
        "Domena internetowa (nazwa domeny) to unikalny adres strony internetowej — np. mojafirma.pl. Jest odpowiednikiem adresu fizycznego — pozwala użytkownikom znaleźć Twoją stronę. Domena zastępuje cyfrowy adres IP serwera (np. 192.168.1.1) — DNS (Domain Name System) tłumaczy domenę na IP serwera. Rejestruje się ją u rejestratora domen na ogół na rok lub dłużej.",
    },
    {
      question: "Jaka jest różnica między domeną a hostingiem?",
      answer:
        "Domena to adres (np. mojafirma.pl) — jak tabliczka z numerem ulicy. Hosting to serwer gdzie przechowywane są pliki strony — jak sam budynek. Oba są potrzebne żeby strona działała. Domenę i hosting możesz kupić w tym samym miejscu (co ułatwia konfigurację) lub osobno (większa elastyczność). Domenę kieruje się na hosting przez ustawienia DNS (rekordy A lub NS).",
    },
    {
      question: "Ile kosztuje domena .pl?",
      answer:
        "Domena .pl kosztuje ok. 80-120 zł rocznie u polskich rejestratorów (nazwa.pl, home.pl, OVH, Cyber_Folks, LH.pl). Ceny różnią się nieznacznie między rejestratorami. Uwaga na promocje — pierwszy rok często kosztuje 1-20 zł, ale kolejne lata już normalne ceny. Sprawdź cenę odnowienia przed rejestracją.",
    },
    {
      question: "Czy domena wpływa na SEO?",
      answer:
        "Domena wpływa na SEO w kilku aspektach: rozszerzenie (.pl dla polskiego rynku pomaga w geotargetowaniu), wiek domeny (starsza domena zazwyczaj ma wyższy autorytet), historia domeny (wcześniejsze penalizacje Google mogą się przenieść), keyword w domenie (słabe znaczenie w 2025, Google skupia się na treści). Najważniejsze: wybierz domenę którą możesz długo utrzymywać — zmiany domeny to duże wyzwanie SEO.",
    },
    {
      question: "Jak sprawdzić czy domena jest wolna?",
      answer:
        "Sprawdzanie dostępności domeny: na stronie rejestratora (nazwa.pl, OVH, Cyber_Folks) — wpisz wybraną nazwę i sprawdź dostępność. Narzędzia do masowego sprawdzania: whois.domaintools.com, instantdomainsearch.com. Jeśli domena .pl jest zajęta, sprawdź .com lub dodaj słowo (np. firma-agencja.pl). Możesz też kupić zajętą domenę od właściciela — przez serwis Afternic lub bezpośrednio.",
    },
    {
      question: "Co zrobić jeśli ktoś zarejestrował moją domenę?",
      answer:
        "Opcje jeśli ktoś ma Twoją domenę: 1) Skontaktuj się z właścicielem przez whois.pl i zaproponuj zakup. 2) Poczekaj — domeny wygasają i można je przejąć (backorder). 3) Jeśli domena narusza Twój znak towarowy, możesz złożyć reklamację do NASK (rejestratra .pl) lub skorzystać z procedury UDRP. 4) Zarejestruj alternatywny adres z innym rozszerzeniem lub wariantem nazwy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Domena — co to jest i jak wybrać nazwę domeny? | fotz.pl"
        description="Domena co to jest — wyjaśniamy czym jest domena internetowa, jak wybierać nazwę domeny, ile kosztuje .pl i jak domena wpływa na SEO. Poradnik 2025."
        canonical="https://fotz.pl/blog/domena-co-to-jest"
      />
      <ArticleSchema
        title="Domena — co to jest i jak wybrać nazwę domeny?"
        description="Czym jest domena internetowa, jak działają rozszerzenia domen, ile kosztuje i jak wybrać dobrą nazwę dla firmy."
        datePublished="2025-01-08"
        dateModified="2025-03-18"
        url="https://fotz.pl/blog/domena-co-to-jest"
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
                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> Domeny i hosting</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Domena — co to jest i jak wybrać dobrą nazwę?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Domena to adres Twojej strony internetowej — pierwszy kontakt klienta z Twoją marką.
                Dowiedz się jak wybrać nazwę, ile kosztuje i jak domena wpływa na SEO.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Budowa adresu domeny</h2>
              <div className="bg-slate-900 text-white p-5 rounded-lg font-mono text-center mb-6">
                <span className="text-slate-400">https://</span>
                <span className="text-blue-400 font-bold">www</span>
                <span className="text-slate-400">.</span>
                <span className="text-green-400 font-bold">mojafirma</span>
                <span className="text-slate-400">.</span>
                <span className="text-amber-400 font-bold">pl</span>
                <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                  <div className="text-blue-400">subdomena</div>
                  <div className="text-green-400">domena II poziomu</div>
                  <div className="text-amber-400">rozszerzenie (TLD)</div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Najpopularniejsze rozszerzenia domen</h2>
              <div className="space-y-3 mb-6">
                {domainExtensions.map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="text-lg font-bold text-blue-600 w-16 flex-shrink-0">{item.ext}</div>
                    <div className="flex-1">
                      <p className="text-slate-700 text-sm mb-1">{item.desc}</p>
                      <p className="text-slate-500 text-xs font-medium">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak wybrać dobrą domenę? 6 zasad</h2>
              <div className="space-y-2 mb-6">
                {goodDomainTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-800 text-sm mb-1">Uwaga: zmiana domeny to duże wyzwanie SEO!</p>
                  <p className="text-amber-700 text-sm">Jeśli już masz stronę i rozważasz zmianę domeny — skonsultuj się z SEO specjalistą. Migracja domen wymaga starannych przekierowań 301 i może tymczasowo obniżyć pozycje.</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Search className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz pomocy z domeną i stroną?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Doradzamy w wyborze domeny i tworzymy kompletne strony internetowe.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron internetowych <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Domena co to jest</h2>
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
          heading="Zakładasz stronę internetową?"
          subheading="Doradzimy w wyborze domeny i stworzymy stronę od A do Z."
        />
      </Layout>
    </>
  );
}
