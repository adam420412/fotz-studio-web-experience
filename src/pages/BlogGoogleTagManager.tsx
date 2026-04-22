import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Code2, Settings, BarChart2, Shield } from "lucide-react";
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

export default function BlogGoogleTagManager() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Google Tag Manager — co to jest i jak działa?" },
  ];

  const gtmBenefits = [
    { icon: Code2, title: "Zero ingerencji w kod", desc: "Dodajesz i usuwasz skrypty śledzące przez panel GTM — bez angażowania programisty za każdym razem." },
    { icon: Settings, title: "Jeden kontener, wiele tagów", desc: "Jeden fragment kodu GTM na stronie, a przez panel zarządzasz wszystkimi skryptami: GA4, Facebook Pixel, hotjar i inne." },
    { icon: BarChart2, title: "Wyzwalacze i zmienne", desc: "Tagi uruchamiają się w odpowiednim momencie: kliknięcie przycisku, wypełnienie formularza, scroll 50% strony." },
    { icon: Shield, title: "Kontrola wersji", desc: "Każda zmiana tworzy nową wersję — możesz natychmiast cofnąć błędne zmiany. Bezpieczniejsze niż edytowanie kodu." },
  ];

  const commonTags = [
    { name: "Google Analytics 4 (GA4)", use: "Śledzenie ruchu, zachowania użytkowników, konwersji" },
    { name: "Google Ads Conversion Tracking", use: "Mierzenie konwersji z kampanii Google Ads" },
    { name: "Facebook / Meta Pixel", use: "Remarketing i konwersje z reklam na Facebooku" },
    { name: "Hotjar / Microsoft Clarity", use: "Heatmapy, nagrania sesji, analiza UX" },
    { name: "LinkedIn Insight Tag", use: "Remarketing i konwersje z LinkedIn Ads" },
    { name: "Google Search Console", use: "Weryfikacja domeny (przez meta tag)" },
  ];

  const faqItems = [
    {
      question: "Co to jest Google Tag Manager?",
      answer:
        "Google Tag Manager (GTM) to bezpłatny system zarządzania tagami od Google. Pozwala dodawać, edytować i usuwać fragmenty kodu JavaScript (tagi) na stronie bez modyfikacji jej kodu źródłowego. Zamiast prosić programistę o każdą zmianę skryptu analitycznego — robisz to sam przez panel GTM. Jeden fragment kodu GTM na stronie zastępuje dziesiątki indywidualnych skryptów.",
    },
    {
      question: "Jaka jest różnica między GTM a Google Analytics?",
      answer:
        "Google Analytics (GA4) to narzędzie do analizy ruchu i zachowania użytkowników. Google Tag Manager to system do zarządzania skryptami, w tym do wdrożenia GA4. GA4 zbiera dane, GTM decyduje kiedy i jak te dane zbierać. Analogia: GTM to 'pilot' do zarządzania urządzeniami (tagami), GA4 to jedno z tych urządzeń. Możesz mieć GA4 bez GTM (przez bezpośredni kod), ale GTM bardzo ułatwia zarządzanie.",
    },
    {
      question: "Czy Google Tag Manager jest bezpłatny?",
      answer:
        "Tak — Google Tag Manager jest całkowicie bezpłatny dla standardowego użytku. Istnieje też płatna wersja GTM 360 dla bardzo dużych korporacji, ale dla 99% firm standardowy GTM wystarczy w pełni. Nie ma limitów tagów, wyzwalaczy ani stron w bezpłatnej wersji.",
    },
    {
      question: "Jak skonfigurować Google Tag Manager na stronie WordPress?",
      answer:
        "Na WordPress GTM instalujesz najprościej przez wtyczkę (np. Site Kit by Google lub GTM4WP). Alternatywnie: ręcznie wklejasz kod GTM do motywu (header.php i body). Kroki: 1) Utwórz konto GTM na tagmanager.google.com. 2) Utwórz kontener dla swojej domeny. 3) Skopiuj kod GTM (dwa fragmenty: <head> i <body>). 4) Zainstaluj przez wtyczkę lub motyw. 5) Opublikuj kontener. 6) Sprawdź przez Tag Assistant.",
    },
    {
      question: "Co to są tagi, wyzwalacze i zmienne w GTM?",
      answer:
        "Tag (Tag) = fragment kodu który chcesz uruchomić (np. GA4, Facebook Pixel). Wyzwalacz (Trigger) = warunek kiedy tag ma się uruchomić (np. kliknięcie przycisku 'Zamów', wypełnienie formularza, załadowanie strony). Zmienna (Variable) = wartości dynamiczne używane w tagach i wyzwalaczach (np. URL strony, wartość pola formularza). Przykład: Tag GA4 + Wyzwalacz 'Kliknięcie przycisku Kup' + Zmienna 'Wartość zakupu' = śledzenie konwersji e-commerce.",
    },
    {
      question: "Jak GTM wpływa na szybkość strony?",
      answer:
        "GTM sam w sobie ma minimalny wpływ na szybkość (dodaje ok. 30-100ms przy prawidłowej konfiguracji). Problem pojawia się gdy przez GTM ładujesz wiele ciężkich tagów (np. Hotjar, chatboty, wiele pikseli) — one spowalniają stronę. Dobrą praktyką jest ładowanie tagów niekrytycznych asynchronicznie i z opóźnieniem. Regularne audyty GTM pomagają usuwać nieużywane tagi.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Google Tag Manager — co to jest i jak działa? Poradnik | fotz.pl"
        description="Google Tag Manager co to jest — wyjaśniamy jak działa GTM, jak dodawać tagi bez programisty, różnica między GTM a GA4 i jak skonfigurować na WordPress."
        canonical="https://fotz.pl/blog/google-tag-manager-co-to"

        keywords="Google Tag Manager co to jest, Google Tag Manager definicja, czym jest Google Tag Manager, Google Tag Manager przykłady, jak działa Google Tag Manager, Google Tag Manager znaczenie, Google Tag Manager przewodnik"
      />
      <ArticleSchema
        title="Google Tag Manager — co to jest i jak działa?"
        description="Czym jest Google Tag Manager, jak zarządzać tagami bez programisty, konfiguracja GTM na WordPress i różnica między GTM a Google Analytics 4."
        datePublished="2025-03-28"
        dateModified="2025-04-07"
        url="https://fotz.pl/blog/google-tag-manager-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Settings className="w-4 h-4" /> Analityka i tagi</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Google Tag Manager — co to jest i jak działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Google Tag Manager pozwala dodawać skrypty analityczne i śledzące na stronie
                bez angażowania programisty. GA4, Facebook Pixel, Hotjar — wszystko z jednego panelu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Dlaczego warto używać GTM?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {gtmBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Najpopularniejsze tagi w GTM</h2>
              <div className="space-y-2 mb-6">
                {commonTags.map((tag, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{tag.name}</span>
                      <span className="text-slate-500 text-xs"> — {tag.use}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak działa GTM — od instalacji do publikacji</h2>
              <div className="space-y-3 mb-6">
                {[
                  { step: "1", title: "Instalacja kontenera", desc: "Jeden fragment kodu GTM na stronie (w <head> i <body>). Jednorazowe zadanie dla programisty lub przez wtyczkę WordPress." },
                  { step: "2", title: "Tworzenie tagu", desc: "W panelu GTM tworzysz tag (np. GA4 Configuration) i podajesz ID mierzenia (G-XXXXXXXXXX)." },
                  { step: "3", title: "Definiowanie wyzwalacza", desc: "Kiedy tag ma się uruchomić? Domyślnie: 'All Pages' (każda strona). Dla konwersji: 'Kliknięcie przycisku X'." },
                  { step: "4", title: "Testowanie w trybie Preview", desc: "Tryb podglądu GTM pokazuje które tagi uruchomiły się na każdej stronie — sprawdzasz przed publikacją." },
                  { step: "5", title: "Publikacja kontenera", desc: "Kliknięcie 'Submit' → wersja live. Zmiany widoczne natychmiast na stronie bez dotykania kodu." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="w-7 h-7 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.step}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz konfiguracji GTM i GA4?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Skonfigurujemy Google Tag Manager, GA4 i śledzenie konwersji dla Twojej strony.
                </p>
                <Link to="/uslugi/audyt-seo" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Analityka i audyt SEO <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Google Tag Manager co to jest</h2>
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
        />
      </Layout>
    </>
  );
}
