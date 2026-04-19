import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Search, BarChart2, Globe, TrendingUp } from "lucide-react";
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

export default function BlogGoogleSearchConsole() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Google Search Console — co to jest i jak używać?" },
  ];

  const gscReports = [
    { icon: BarChart2, title: "Skuteczność (Performance)", desc: "Kliknięcia, wyświetlenia, CTR i średnia pozycja dla każdego zapytania i strony. Fundament analizy SEO." },
    { icon: Globe, title: "Indeksowanie (Coverage)", desc: "Które strony Google zaindeksował, a które odrzucił i dlaczego. Pozwala wykryć problemy techniczne." },
    { icon: Search, title: "Mapa witryny (Sitemap)", desc: "Przesyłasz sitemap.xml — Google wie jakie strony ma przejrzeć. Przyspiesza indeksowanie nowych treści." },
    { icon: TrendingUp, title: "Core Web Vitals", desc: "Dane o wydajności strony z prawdziwych sesji użytkowników Chrome — LCP, INP, CLS." },
  ];

  const faqItems = [
    {
      question: "Co to jest Google Search Console?",
      answer:
        "Google Search Console (dawniej Webmaster Tools) to bezpłatne narzędzie Google do monitorowania widoczności witryny w wynikach wyszukiwania. Pozwala sprawdzić które zapytania generują ruch, które strony są zaindeksowane, czy są błędy techniczne i jak wygląda CTR. Jest niezbędne dla każdego właściciela strony dbającego o SEO.",
    },
    {
      question: "Czym różni się Google Search Console od Google Analytics?",
      answer:
        "Google Search Console (GSC) pokazuje jak Google widzi Twoją stronę: zapytania, pozycje, indeksowanie, błędy crawlera. Google Analytics (GA4) pokazuje zachowanie użytkowników NA stronie: sesje, konwersje, czas na stronie, ścieżki. GSC = perspektywa Google/SEO. GA4 = perspektywa użytkownika. Oba narzędzia wzajemnie się uzupełniają — podstawa analityki każdej strony.",
    },
    {
      question: "Jak dodać stronę do Google Search Console?",
      answer:
        "Kroki: 1) Przejdź na search.google.com/search-console. 2) Kliknij 'Dodaj usługę'. 3) Wybierz typ: Domain (cała domena ze wszystkimi subdomnami) lub URL prefix (konkretny URL). 4) Zweryfikuj własność przez: plik HTML, meta tag HTML, Google Analytics, Google Tag Manager lub rekord DNS. 5) Po weryfikacji — poczekaj 2-3 dni na pierwsze dane. Dla WordPress: użyj wtyczki Site Kit by Google.",
    },
    {
      question: "Jak korzystać z raportu Skuteczność w GSC?",
      answer:
        "W raporcie Skuteczność znajdziesz: Zapytania (queries) — frazy które generują wyświetlenia i kliknięcia. Strony (pages) — które URL-e zbierają ruch. Kraje i urządzenia. Kluczowe analizy: 1) Szukaj zapytań z wysoką liczbą wyświetleń ale niskim CTR — oznacza to dobry ranking ale słaby tytuł (meta opis). 2) Porównuj okresy (vs. poprzedni miesiąc/rok). 3) Filtruj po stronie aby zobaczyć dla jakiej frazy dana podstrona rankuje.",
    },
    {
      question: "Co zrobić gdy strona nie jest w Google?",
      answer:
        "Kroki diagnostyczne: 1) W GSC: Inspekcja URL → wklej URL → 'Poproś o indeksowanie'. 2) Sprawdź czy strona ma robots.txt blokujący Googlebot (disallow: /). 3) Sprawdź meta robots (noindex) — strona może być celowo wykluczona. 4) Prześlij Sitemap XML. 5) Zweryfikuj czy strona jest dostępna publicznie (nie za loginem). Nowe strony mogą czekać 1-4 tygodnie na indeksowanie nawet bez błędów.",
    },
    {
      question: "Jak Google Search Console pomaga w SEO?",
      answer:
        "GSC to niezbędne narzędzie SEO: 1) Odkrywasz nowe frazy na które rankujesz (i możesz je optymalizować). 2) Identyfikujesz strony z wysoką pozycją ale niskim CTR — poprawiasz tytuły. 3) Widzisz błędy indeksowania — naprawiasz problemy techniczne. 4) Monitorujesz Core Web Vitals. 5) Sprawdzasz linki zewnętrzne do Twojej strony. 6) Widzisz kary algorytmiczne i ręczne. To bezpłatna kopalnia danych SEO.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Google Search Console — co to jest i jak używać? Poradnik"
        description="Google Search Console co to jest — wyjaśniamy jak działa GSC, jak dodać stronę, korzystać z raportów skuteczności i indeksowania oraz jak poprawić SEO."
        canonical="https://fotz.pl/blog/google-search-console-co-to"

        keywords="Google Search Console co to jest, Google Search Console definicja, czym jest Google Search Console, Google Search Console przykłady, jak działa Google Search Console, Google Search Console znaczenie, Google Search Console przewodnik"
      />
      <ArticleSchema
        title="Google Search Console — co to jest i jak używać?"
        description="Czym jest Google Search Console, jak dodać stronę, korzystać z raportów skuteczności, indeksowania i Core Web Vitals dla poprawy SEO."
        datePublished="2025-04-03"
        dateModified="2025-04-09"
        url="https://fotz.pl/blog/google-search-console-co-to"
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
                <span className="flex items-center gap-1"><Search className="w-4 h-4" /> SEO i analityka</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Google Search Console — co to jest i jak używać?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Google Search Console to bezpłatne narzędzie Google pokazujące jak Twoja strona wygląda
                w oczach wyszukiwarki. Bezpłatne, niezbędne i często ignorowane przez właścicieli stron.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kluczowe raporty w Google Search Console</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {gscReports.map((report, idx) => {
                  const Icon = report.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{report.title}</h3>
                      <p className="text-slate-600 text-sm">{report.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak GSC pomaga w codziennym SEO?</h2>
              <div className="space-y-2 mb-6">
                {[
                  { action: "Sprawdzaj nowe frazy", desc: "Raport Skuteczność → Zapytania → nowe słowa kluczowe na które zaczynasz rankować" },
                  { action: "Szukaj stron z pozycją 4-20", desc: "Strony w Top20 z dobrą intencją — warto je optymalizować żeby wejść do Top3" },
                  { action: "Analizuj CTR vs pozycja", desc: "Niski CTR przy dobrej pozycji = słaby title/description — popraw meta tagi" },
                  { action: "Sprawdzaj błędy 404", desc: "Raport Indeksowanie → Strony → Nie znaleziono (404) — napraw lub przekieruj" },
                  { action: "Monitoruj Core Web Vitals", desc: "Zakładka Wrażenia → Core Web Vitals — znajdź strony z problemami wydajności" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 text-sm">{item.action}: </span>
                        <span className="text-slate-600 text-sm">{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Chcesz lepszego SEO i więcej ruchu organicznego?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Konfigurujemy GSC, analizujemy dane i wdrażamy strategię SEO opartą na twardych danych.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Google Search Console co to jest</h2>
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
          heading="Wyciągaj więcej z Google Search Console"
          subheading="Konfiguracja GSC, analiza danych i wdrożenie strategii SEO — bez zgadywania."
        />
      </Layout>
    </>
  );
}
