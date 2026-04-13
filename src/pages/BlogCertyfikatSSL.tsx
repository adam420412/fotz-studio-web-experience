import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Shield, Lock, AlertCircle, Search } from "lucide-react";
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

export default function BlogCertyfikatSSL() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Certyfikat SSL — co to jest i dlaczego potrzebujesz HTTPS?" },
  ];

  const sslTypes = [
    { name: "DV (Domain Validation)", price: "Gratis (Let's Encrypt)", time: "Minuty", use: "Blogi, strony firmowe, małe sklepy", desc: "Weryfikuje tylko że kontrolujesz domenę. Wystarczy dla większości stron." },
    { name: "OV (Organization Validation)", price: "200-500 zł/rok", time: "1-3 dni", use: "Firmy, instytucje", desc: "Weryfikuje tożsamość organizacji. Użytkownicy mogą sprawdzić dane firmy w certyfikacie." },
    { name: "EV (Extended Validation)", price: "500-2000 zł/rok", time: "3-14 dni", use: "Banki, fintech, e-commerce", desc: "Najwyższy poziom weryfikacji — zielony pasek z nazwą firmy. Buduje maksymalne zaufanie." },
    { name: "Wildcard SSL", price: "300-1500 zł/rok", time: "Minuty-dni", use: "Wielodomenowe serwisy", desc: "Zabezpiecza domenę główną i wszystkie subdomeny (*.domena.pl). Ekonomiczne przy wielu subdomenach." },
  ];

  const seoImpact = [
    "Google oficjalnie potwierdza, że HTTPS jest czynnikiem rankingowym od 2014 roku",
    "Chrome oznacza strony bez SSL jako 'Niezabezpieczone' — użytkownicy opuszczają takie strony",
    "Dane z HTTP nie są przekazywane w Google Analytics jako referrer (brak danych źródeł ruchu)",
    "Sklepy bez SSL nie mogą akceptować płatności online — bramki to wymagają",
    "Sygnały bezpieczeństwa wpływają na współczynnik odrzuceń i czas na stronie — czynniki UX rankingowe",
  ];

  const faqItems = [
    {
      question: "Co to jest certyfikat SSL?",
      answer:
        "Certyfikat SSL (Secure Sockets Layer) to protokół szyfrowania danych przesyłanych między przeglądarką a serwerem. Dzięki SSL adres strony zmienia się z http:// na https:// (Secure), a w pasku przeglądarki pojawia się kłódka. Szyfrowanie uniemożliwia przechwycenie danych przez osoby trzecie — haseł, danych kart płatniczych, formularzy kontaktowych.",
    },
    {
      question: "Czy SSL jest obowiązkowy?",
      answer:
        "Prawnie nie jest obowiązkowy dla każdej strony, ale praktycznie — tak. Powody: Chrome i Firefox oznaczają strony bez SSL jako 'Niezabezpieczone' (odstraszy użytkowników), Google obniża pozycje stron http:// w wynikach, bramki płatnicze wymagają SSL, RODO wymaga odpowiedniego szyfrowania danych osobowych. Dla sklepów internetowych i stron z formularzami SSL jest absolutnie niezbędny.",
    },
    {
      question: "Jak uzyskać certyfikat SSL za darmo?",
      answer:
        "Bezpłatny certyfikat SSL możesz uzyskać przez Let's Encrypt — projekt wspierany przez Mozilla, Google i inne firmy. Instalacja: przez panel hostingu (cPanel, DirectAdmin — jeden przycisk), przez Certbot (serwery Linux), lub automatycznie przez managed hosting (WordPress hosting zazwyczaj włącza SSL automatycznie). Bezpłatny SSL jest technicznie równoważny z płatnym DV SSL.",
    },
    {
      question: "Jak zainstalować SSL na WordPress?",
      answer:
        "Instalacja SSL na WordPress: 1) Uaktywnij certyfikat SSL w panelu hostingu (cPanel → SSL/TLS → Let's Encrypt). 2) Zaktualizuj URL w WordPressie: Ustawienia → Ogólne → zmień http na https. 3) Zainstaluj wtyczkę Really Simple SSL — automatycznie przekieruje wszystkie adresy. 4) Zaktualizuj Google Search Console i Analytics na nowe adresy https. 5) Sprawdź czy strona ładuje się bez błędów mieszanej treści.",
    },
    {
      question: "Ile kosztuje certyfikat SSL?",
      answer:
        "Certyfikat SSL możesz mieć bezpłatnie (Let's Encrypt — DV SSL, wystarczy dla 90% stron) lub płatnie: DV SSL 50-200 zł/rok, OV SSL 200-500 zł/rok, EV SSL 500-2000 zł/rok, Wildcard SSL 300-1500 zł/rok. Dla zwykłej strony firmowej i sklepu internetowego bezpłatny Let's Encrypt jest w pełni wystarczający.",
    },
    {
      question: "Certyfikat SSL a SEO — czy ma wpływ?",
      answer:
        "Tak — SSL ma wpływ na SEO z kilku powodów: 1) Google używa HTTPS jako sygnał rankingowy (potwierdzono w 2014, ciągle aktywny). 2) Strony bez SSL mają wyższy bounce rate bo Chrome straszy użytkowników — Google uwzględnia zachowanie użytkowników. 3) Dane referrer nie są przekazywane z HTTPS do HTTP — tracisz dane analityczne. 4) SSL jest wymagany dla sklepów — co wpływa na konwersje i pośrednio na SEO.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Certyfikat SSL — co to jest i dlaczego potrzebujesz HTTPS? | fotz.pl"
        description="Certyfikat SSL co to jest — wyjaśniamy czym jest SSL, dlaczego HTTPS jest ważny dla SEO, ile kosztuje i jak zainstalować bezpłatny certyfikat SSL. Poradnik 2025."
        canonical="https://fotz.pl/blog/certyfikat-ssl-co-to"

        keywords="Certyfikat SSL co to jest, Certyfikat SSL definicja, czym jest Certyfikat SSL, Certyfikat SSL przykłady, jak działa Certyfikat SSL, Certyfikat SSL znaczenie, Certyfikat SSL przewodnik"
      />
      <ArticleSchema
        title="Certyfikat SSL — co to jest i dlaczego potrzebujesz HTTPS?"
        description="Czym jest certyfikat SSL, jak wpływa na SEO i bezpieczeństwo, rodzaje certyfikatów i jak uzyskać SSL za darmo."
        datePublished="2025-01-18"
        dateModified="2025-03-28"
        url="https://fotz.pl/blog/certyfikat-ssl-co-to"
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
                <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Bezpieczeństwo i SEO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Certyfikat SSL — co to jest i dlaczego potrzebujesz HTTPS?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Certyfikat SSL zamienia http:// na https:// i szyfruje dane użytkowników. Bez niego Chrome
                straszy odwiedzających, a Google obniża Twoje pozycje. Dowiedz się jak to naprawić.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">HTTP vs HTTPS — jaka jest różnica?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    label: "HTTP (bez SSL)",
                    color: "red",
                    items: ["Dane przesyłane w formie jawnego tekstu", "Możliwe przechwycenie haseł i płatności", "Chrome wyświetla 'Niezabezpieczone'", "Google może obniżać pozycje w SERP", "Bramki płatnicze nie działają"],
                  },
                  {
                    label: "HTTPS (z SSL)",
                    color: "green",
                    items: ["Dane szyfrowane — nikt ich nie przechwyci", "Kłódka w przeglądarce = zaufanie użytkowników", "Wyższe pozycje w Google", "Wymagane przez bramki płatnicze", "Lepsza konwersja i niższy bounce rate"],
                  },
                ].map((col, idx) => (
                  <div key={idx} className={`bg-${col.color}-50 p-5 rounded-lg border border-${col.color}-200`}>
                    <h3 className={`font-bold text-${col.color}-800 mb-3 text-sm`}>{col.label}</h3>
                    {col.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 mb-1">
                        {idx === 0
                          ? <AlertCircle className={`w-3.5 h-3.5 text-${col.color}-600 flex-shrink-0 mt-0.5`} />
                          : <CheckCircle2 className={`w-3.5 h-3.5 text-${col.color}-600 flex-shrink-0 mt-0.5`} />
                        }
                        <span className="text-slate-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Rodzaje certyfikatów SSL</h2>
              <div className="space-y-3 mb-6">
                {sslTypes.map((ssl, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Lock className="w-4 h-4 text-blue-600" />
                      <span className="font-bold text-slate-900 text-sm">{ssl.name}</span>
                      <span className="text-blue-600 font-bold text-sm">{ssl.price}</span>
                      <span className="text-slate-500 text-xs">Czas weryfikacji: {ssl.time}</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-1">{ssl.desc}</p>
                    <p className="text-slate-500 text-xs">Dla kogo: {ssl.use}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">SSL a SEO — co mówi Google?</h2>
              <div className="space-y-2 mb-6">
                {seoImpact.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Search className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
                <CheckCircle2 className="w-5 h-5 text-green-600 mb-2" />
                <h3 className="font-bold text-slate-900 mb-2">Jak zainstalować bezpłatny SSL?</h3>
                <div className="space-y-1">
                  {[
                    "Zaloguj się do panelu hostingu (cPanel, DirectAdmin)",
                    "Znajdź sekcję SSL/TLS lub Let's Encrypt",
                    "Kliknij 'Zainstaluj' lub 'Aktywuj' przy swojej domenie",
                    "Odczekaj kilka minut i sprawdź stronę przez https://",
                    "Zainstaluj Really Simple SSL na WordPress dla automatycznego przekierowania",
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</span>
                      <span className="text-slate-700 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Certyfikat SSL co to jest</h2>
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
          heading="Twoja strona nie ma SSL?"
          subheading="Pomożemy zainstalować SSL i naprawić wszystkie błędy bezpieczeństwa."
        />
      </Layout>
    </>
  );
}
