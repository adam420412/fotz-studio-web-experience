import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Link2, BarChart2, Target, CheckCircle2 } from "lucide-react";
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

export default function BlogUTMCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "UTM — co to jest i jak tagowac linki?" },
  ];

  const utmParams = [
    { param: "utm_source", desc: "Zrodlo ruchu — skad pochodzi ruch. Wymagany.", example: "google, facebook, newsletter, linkedin" },
    { param: "utm_medium", desc: "Medium — rodzaj kanalu marketingowego. Wymagany.", example: "cpc, email, organic, social, banner" },
    { param: "utm_campaign", desc: "Nazwa kampanii. Wymagany.", example: "czarny-piatek-2025, launch-produktu-x, nurturing-q1" },
    { param: "utm_content", desc: "Rozroznienie wariantow reklamy (A/B). Opcjonalny.", example: "banner-niebieski, cta-kupteraz, reklama-video" },
    { param: "utm_term", desc: "Slowo kluczowe (glownie Google Ads). Opcjonalny.", example: "agencja-seo-warszawa, tworzenie-stron" },
  ];

  const faqItems = [
    {
      question: "Co to sa parametry UTM?",
      answer:
        "UTM (Urchin Tracking Module) to tagi dodawane do adresow URL ktore pozwalaja sledzic zrodla ruchu na stronie w narzedzia analitycznych jak Google Analytics 4. Nazwa pochodzi od firmy Urchin Software ktora wymyslila ten system, a Google kupilo ja w 2005 roku. Parametry UTM sa dodawane po znaku '?' w URLu. Przyklad: https://fotz.pl/strona?utm_source=linkedin&utm_medium=social&utm_campaign=oferta-seo. Bez UTM Google Analytics czesto nie wie skad pochodzi ruch — przypisuje go do 'direct' lub 'referral'. Z UTM masz pelen obraz skutecznosci kazdej kampanii, emaila, linku w social media lub bannera.",
    },
    {
      question: "Jak stworzyc link z UTM?",
      answer:
        "Tworzenie linkow UTM: 1) Uzyj Google Campaign URL Builder (campaignurlbuilder.com) — wpisz URL strony i wypelnij pola, narzedzie generuje kompletny link. 2) Zrob to recznie: https://twoja-strona.pl/strona?utm_source=ZRODLO&utm_medium=MEDIUM&utm_campaign=KAMPANIA. Zasady: uzywaj malych liter (facebook nie Facebook — GA rozroznia wielkosc liter), uzyj myslnikow zamiast spacji (kupteraz zamiast kup-teraz lub kup teraz), budz konsekwentny — ustal konwencje nazewnictwa i trzymaj sie jej w calej firmie. Przykladowe linki: Email: ?utm_source=mailchimp&utm_medium=email&utm_campaign=nurturing-klienta. LinkedIn Ads: ?utm_source=linkedin&utm_medium=cpc&utm_campaign=lead-gen-q1.",
    },
    {
      question: "Jak odczytac dane UTM w Google Analytics?",
      answer:
        "Dane UTM w GA4: Akwizycja > Pozyskiwanie ruchu (Traffic acquisition) — widok zrodel ruchu z UTM. Raporty niestandardowe (Explorations) — mozesz segmentowac po utm_source, utm_medium, utm_campaign. Konwersje powiazane ze zrodlem — jaki procent sprzedazy pochodzi z emaila, social ads, SEO. Co analizowac: utm_source/medium — ktore kanaly przynosza ruch i konwersje. utm_campaign — ktore kampanie sa najbardziej efektywne. utm_content — ktory wariant reklamy klika lepiej (A/B test). Ograniczenia: UTM nie dzialaja dla direct traffic (ktos wpisuje URL bezposrednio), nie dzialaja przez klikniecia offline.",
    },
    {
      question: "Jakie sa najlepsze praktyki UTM?",
      answer:
        "Best practices UTM: Ustandaryzuj nazewnictwo — przed startem ustal konwencje w calym teamie. Spreadsheet z lista wszystkich kampanii i ich UTM-ow. Male litery wszedzie — facebook nie Facebook, google nie Google. Nie uzywaj UTM dla wewnetrznych linkow na stronie — zaburza to atrybucje i sesje. Odlotowe kampanie taguj wszystkie linki — kazdy link w email, kazdy post na social z linkiem, kazdy banner. Nie budz zbyt opisowy — utrzymuj utm_campaign krotke i spójne. Dokumentuj — spreadsheet z wszystkimi UTM i co oznaczaja. UTM shortener — jesli masz dluge URLe z UTM, uzyj bit.ly, rebrandly lub wlasnego shortner do ukrycia dlugich parametrow.",
    },
    {
      question: "Czym UTM rozni sie od GA4 Enhanced Measurement?",
      answer:
        "GA4 Enhanced Measurement automatycznie sladzi niektore interakcje (klikniecia, scrollowanie, file downloads) bez potrzeby tagowania UTM. UTM sa potrzebne do: rozroznienia konkretnych kampanii i zrodel ruchu (Google Ads vs Facebook Ads vs Email). Bez UTM GA4 nie wie czy ruch z Facebooka pochodzi z organicznego posta, platnej reklamy czy Instagram Stories. UTM i GA4 wspolpracuja — GA4 odczytuje parametry UTM z URLa i przypisuje je do sesji. Google Ads automatycznie taguje swoje URL przez gclid (nie potrzebujesz manualnych UTM dla Google Ads jesli masz auto-tagging). Dla Facebook Ads, LinkedIn, email, influencer — zawsze uzyj recznych UTM.",
    },
    {
      question: "Czy UTM wplywa na SEO?",
      answer:
        "Parametry UTM nie wplywaja negatywnie na SEO — Google crawluje strony bez parametrow UTM lub ignoruje je przy indeksacji. Kilka waznych kwestii: Canonical tag — jezeli masz ten sam URL z roznym UTM, upewnij sie ze canonical wskazuje na wersje bez parametrow. Google Search Console ignoruje UTM parametry przy raportowaniu, co jest prawidlowe. Potencjalny problem: duplicate content — jezeli te same URLe z roznym UTM sa dostepne i crawlowane, mozesz miec problem. Rozwiazanie: w Google Search Console mozna ustawic ze parametry UTM nie tworza roznych stron (URL parameter handling). Wspolczesne GA4 i Google nie maja problemow z UTM — to sprawdzona technologia od 2005 roku.",
    },
  ];

  return (
    <>
      <SEOHead
        title="UTM — co to jest i jak tagowac linki? | fotz.pl"
        description="UTM co to jest — wyjasnamy czym sa parametry UTM, jak tworzyc linki z UTM, jak odczytac dane w GA4 i najlepsze praktyki tagowania kampanii marketingowych."
        canonical="https://fotz.pl/blog/utm-co-to-jest"
      />
      <ArticleSchema
        title="UTM — co to jest i jak tagowac linki?"
        description="Czym sa parametry UTM, jak tworzyc linki UTM, odczytywanie w GA4, best practices i wplyw na SEO."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/utm-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Link2 className="w-4 h-4" /> Analytics i tracking</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                UTM — co to jest i jak tagowac linki?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Parametry UTM pozwalaja sledzic skad pochodzi ruch na Twojej stronie.
                Jak tworzyc, 5 parametrow, GA4 i best practices.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">5 parametrow UTM — opis i przyklady</h2>
              <div className="space-y-2 mb-6">
                {utmParams.map((p, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <code className="font-bold text-blue-700 text-sm bg-blue-50 px-2 py-0.5 rounded">{p.param}</code>
                      <span className="text-slate-500 text-xs">{idx < 3 ? 'Wymagany' : 'Opcjonalny'}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-1">{p.desc}</p>
                    <p className="text-slate-400 text-xs">Np.: {p.example}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Przykladowe linki UTM</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-xs overflow-x-auto">
                <p className="text-slate-400 mb-2">// Email newsletter:</p>
                <p className="text-green-400 break-all">fotz.pl/oferta?utm_source=mailchimp&utm_medium=email&utm_campaign=promo-wrzesien</p>
                <p className="text-slate-400 mb-2 mt-4">// LinkedIn Ads:</p>
                <p className="text-blue-400 break-all">fotz.pl/landing?utm_source=linkedin&utm_medium=cpc&utm_campaign=lead-gen-q4&utm_content=banner-v2</p>
                <p className="text-slate-400 mb-2 mt-4">// Instagram Story:</p>
                <p className="text-pink-400 break-all">fotz.pl/blog?utm_source=instagram&utm_medium=social&utm_campaign=content-marzec</p>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <BarChart2 className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Twoja strona zbiera dane UTM — czy je interpretujesz?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Pomagamy konfigurowac GA4 i interpretowac dane — wiesz skad przychodza konwertujacy uzytkownicy.
                </p>
                <Link to="/uslugi/pozycjonowanie-stron" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Pozycjonowanie i SEO — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — UTM co to jest</h2>
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
          heading="Pomozymy Ci poprawnie konfigurowac tracking i analytics"
          subheading="GA4, UTM, Tag Manager — tworzymy strony gotowe do prawidlowego sledzenia konwersji i zrodel ruchu."
        />
      </Layout>
    </>
  );
}
