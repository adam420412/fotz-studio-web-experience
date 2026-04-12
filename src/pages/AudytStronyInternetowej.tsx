import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Globe,
  Search,
  BarChart3,
  Target,
  AlertTriangle,
  FileText,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

export default function AudytStronyInternetowej() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Audyt strony internetowej" },
  ];

  const auditAreas = [
    {
      icon: Zap,
      title: "Szybkość i Core Web Vitals",
      desc: "LCP, INP, CLS — parametry Google od 2021. Wolna strona = niższe pozycje i wyższy bounce rate.",
    },
    {
      icon: Target,
      title: "UX i nawigacja",
      desc: "Czy użytkownicy łatwo znajdą to czego szukają? Analiza ścieżek konwersji i punktów porzucenia.",
    },
    {
      icon: FileText,
      title: "Treści i copywriting",
      desc: "Czy treść jest przekonująca? Czy CTA są widoczne? Czy odpowiada na pytania klientów?",
    },
    {
      icon: TrendingUp,
      title: "Konwersje i CTA",
      desc: "Analiza formularzy, przycisków, lejka sprzedażowego. Co blokuje użytkowników przed kontaktem?",
    },
    {
      icon: Search,
      title: "SEO on-page",
      desc: "Meta tagi, nagłówki H1-H6, słowa kluczowe, struktura URL, internal linking, dane strukturalne.",
    },
    {
      icon: Globe,
      title: "Bezpieczeństwo SSL",
      desc: "Certyfikat SSL, HTTPS, mixed content, bezpieczeństwo formularzy i danych użytkownika.",
    },
    {
      icon: BarChart3,
      title: "Mobile responsiveness",
      desc: "Testujemy na 10+ urządzeniach. Google rankinguje mobile-first. Większość ruchu = mobile.",
    },
    {
      icon: AlertTriangle,
      title: "Analityka i tracking",
      desc: "Google Analytics 4, Search Console, poprawne śledzenie zdarzeń i konwersji.",
    },
  ];

  const packages = [
    {
      title: "Quick Audit",
      price: "399 zł",
      desc: "Strona główna + 5 kluczowych podstron",
      features: [
        "Core Web Vitals pomiar",
        "SEO on-page check",
        "Mobile test",
        "Bezpieczeństwo SSL",
        "Raport PDF 10-15 stron",
        "Lista TOP 10 błędów",
      ],
      delivery: "2 dni robocze",
    },
    {
      title: "Standard Audit",
      price: "799 zł",
      desc: "Do 30 podstron — kompleksowy",
      features: [
        "Pełny audyt techniczny",
        "UX i nawigacja",
        "Analiza konwersji",
        "Treści i copywriting",
        "Analityka i tracking",
        "Raport PDF 30+ stron",
        "Priorytetyzacja błędów",
        "Konsultacja 45 min",
      ],
      highlight: true,
      delivery: "5 dni roboczych",
    },
    {
      title: "Deep Audit",
      price: "1 499 zł",
      desc: "Cały serwis + analiza zaawansowana",
      features: [
        "Wszystko z Standard",
        "Heatmapy i nagrania sesji",
        "User testing (5 uczestników)",
        "Analiza konkurencji",
        "Kosztorys wdrożenia zmian",
        "Konsultacja 90 min",
        "Plan działań 3-mies.",
      ],
      delivery: "10 dni roboczych",
    },
  ];

  const faqItems = [
    {
      question: "Jaka jest różnica między audytem UX a audytem SEO?",
      answer:
        "Audyt UX koncentruje się na doświadczeniu użytkownika — nawigacji, czytelności, ścieżkach konwersji. Audyt SEO sprawdza optymalizację dla wyszukiwarek — słowa kluczowe, meta tagi, linki, szybkość. Nasz audyt strony łączy oba aspekty, bo dobra strona musi być zarówno przyjazna użytkownikom jak i widoczna w Google.",
    },
    {
      question: "Kto przeprowadza audyt?",
      answer:
        "Nasz zespół składa się ze specjalisty UX, analityka SEO i developera frontend. Każdy sprawdza swoją dziedzinę, a raport jest zintegrowanym dokumentem z priorytetyzowaną listą zmian.",
    },
    {
      question: "Ile trwa realizacja audytu?",
      answer:
        "Quick Audit: 2 dni robocze. Standard Audit: 5 dni roboczych. Deep Audit z heatmapami i user testingiem: 10 dni roboczych. Po zakończeniu umawiamy konsultację omówieniową.",
    },
    {
      question: "Co mogę zrobić po audycie?",
      answer:
        "Możesz wdrożyć zmiany samodzielnie (dajemy instrukcje krok po kroku), zlecić wdrożenie nam (wycena osobno) lub zlecić innemu deweloperowi. Raport jest własnością Twoją — możesz go użyć z dowolnym wykonawcą.",
    },
    {
      question: "Czy audyt jest jednorazowy?",
      answer:
        "Jednorazowy audyt to dobry start, ale strona się zmienia — nowe treści, wtyczki, zmiany algorytmu Google. Rekomendujemy audyt co 6-12 miesięcy lub po większych zmianach na stronie.",
    },
    {
      question: "Czy po audycie wdrożycie zmiany?",
      answer:
        "Tak — oferujemy wdrożenie zmian jako oddzielną usługę. Po audycie przygotowujemy kosztorys wdrożenia. Wielu klientów decyduje się na pakiet: audyt + wdrożenie, który jest korzystniejszy cenowo.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Audyt strony internetowej | Analiza UX i wydajności | fotz.pl"
        description="Audyt strony internetowej — kompleksowa analiza UX, szybkości, bezpieczeństwa i konwersji. Znajdziemy co blokuje Twoich klientów. Zamów audyt!"
        canonical="https://fotz.pl/uslugi/audyt-strony-internetowej"
        keywords="audyt strony internetowej, audyt seo, analiza strony www, audyt techniczny, sprawdź stronę internetową, optymalizacja strony"
      />
      <ServiceSchema
        name="Audyt strony internetowej"
        description="Kompleksowy audyt UX, wydajności, SEO i konwersji strony internetowej"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Audyt strony internetowej — kompleksowa analiza UX, wydajności i konwersji
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Twoja strona to najważniejszy pracownik firmy — działa 24/7. Kiedy ostatnio sprawdziłeś,
                czy robi swoją pracę dobrze? Audyt ujawnia błędy które tracą Ci klientów.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "5,4 sek.", label: "Śr. ładowanie PL strony" },
                  { value: "53%", label: "Porzuceń po 3 sek." },
                  { value: "2,5 sek.", label: "Top 10 Google" },
                  { value: "70%", label: "Konwersji zależy od UX" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Zamów audyt strony <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/uslugi/audyt-seo">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                    Audyt SEO
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What we audit */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co sprawdzamy w audycie?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                8 kluczowych obszarów — każdy wpływa na ruch, konwersje i satysfakcję klientów.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {auditAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.05}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2 text-sm">{area.title}</h3>
                        <p className="text-slate-600 text-xs">{area.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* What you get */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co dostajesz po audycie?</h2>
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {[
                  { icon: FileText, title: "Raport PDF ze screenshotami", desc: "Szczegółowy dokument z zaznaczonymi błędami na screenshotach Twojej strony. Każdy błąd opisany z wyjaśnieniem dlaczego jest problemem." },
                  { icon: AlertTriangle, title: "Priorytetyzowana lista zmian", desc: "Błędy podzielone na: Krytyczne (napraw natychmiast), Ważne (napraw w tym miesiącu), Do rozważenia (optymalizacje). Wiesz co zrobić najpierw." },
                  { icon: CheckCircle2, title: "Rekomendacje krok po kroku", desc: "Każda rekomendacja zawiera: co zmienić, jak zmienić, dlaczego to ważne. Możesz wdrożyć samodzielnie lub zlecić deweloperowi." },
                  { icon: Target, title: "Konsultacja omówieniowa", desc: "30-45 minutowe spotkanie online po audycie. Omawiamy wyniki, odpowiadamy na pytania, ustalamy priorytety." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white p-8 rounded-lg border border-slate-200">
                      <Icon className="w-10 h-10 text-blue-600 mb-4" />
                      <h3 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-700">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pakiety audytu strony</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-2 border-blue-400 transform scale-105"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className={`text-3xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-blue-600"}`}>
                      {pkg.price}
                    </div>
                    <div className={`text-sm mb-4 ${pkg.highlight ? "text-blue-100" : "text-slate-500"}`}>
                      jednorazowo · realizacja {pkg.delivery}
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-600"}`}>{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-blue-600"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Audyt strony</h2>

              <FAQSchema items={faqItems} />

              <Accordion type="single" collapsible className="w-full bg-white rounded-lg">
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

        {/* Internal links */}
        <FadeInView>
          <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">Powiązane usługi</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/uslugi/audyt-seo" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
                  <span className="font-medium text-slate-800">Audyt SEO</span>
                </Link>
                <Link to="/uslugi/optymalizacja-strony-internetowej" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
                  <span className="font-medium text-slate-800">Optymalizacja strony</span>
                </Link>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
                  <span className="font-medium text-slate-800">Tworzenie stron</span>
                </Link>
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Zamów audyt strony internetowej"
          subheading="Raport gotowy w 5 dni roboczych. Bezpłatna konsultacja wstępna."
        />
      </Layout>
    </>
  );
}
