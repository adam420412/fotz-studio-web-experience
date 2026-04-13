import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Monitor, Target, BarChart2, Zap } from "lucide-react";
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

export default function BlogProgrammaticCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Programmatic Advertising — co to jest i jak dziala?" },
  ];

  const programmaticTypes = [
    { type: "Real-Time Bidding (RTB)", desc: "Aukcja w czasie rzeczywistym — reklamodawca licytuje wyswietlenie reklamy konkretnemu uzytkownikowi w ciagu milisekund (Open Auction).", open: true },
    { type: "Private Marketplace (PMP)", desc: "Prywatna aukcja — wydawca zaprasza wybranych reklamodawcow do aukcji na swoj eksluzywny inventory. Wyzsze CPM, lepszy brand safety.", open: false },
    { type: "Programmatic Direct", desc: "Bezposredni zakup inventory bez aukcji — ustalona cena i gwarancja wyswietlen. Podobne do tradycyjnych zakupow mediowych ale automatyczne.", open: false },
    { type: "Preferred Deals", desc: "Reklamodawca ma pierwszenstwo kupna inventory po ustalonej cenie przed otwarta aukcja — hybryda PMP i RTB.", open: false },
  ];

  const faqItems = [
    {
      question: "Co to jest Programmatic Advertising?",
      answer:
        "Programmatic Advertising (reklama programatyczna) to zautomatyzowany sposob kupowania i sprzedawania powierzchni reklamowej przez platformy technologiczne i algorytmy — w czasie rzeczywistym, bez recznych negocjacji z wydawcami. W tradycyjnym modelu: reklamodawca negocjowal bezposrednio z gazetą lub portalem (np. kupuję 100 000 wyswietlen banera na wp.pl za X zl). W programmatic: algorytm kupuje wyswietlenia konkretnym uzytkownikom w ulamku sekundy przez DSP (Demand Side Platform), niezaleznie od tego jaka strone ogladaja. Programmatic obejmuje: display, video (pre-roll), native, CTV/OTT, audio, DOOH (digital out-of-home).",
    },
    {
      question: "Jak dziala Programmatic Advertising?",
      answer:
        "Proces programmatic w uproszczeniu: 1) Uzytkownik wchodzi na strone. 2) Wydawca strony wysyla zapytanie do SSP (Supply Side Platform) o wyswietlenie reklamy. 3) SSP przekazuje zapytanie do Ad Exchange. 4) Ad Exchange uruchamia aukcje miedzy DSP (platformami reklamodawcow). 5) DSP reklamodawcow licytuja — kazda DSP ewaluuje uzytkownika w oparciu o dane (demografia, zachowanie, kontekst) i decyduje ile zaplacic. 6) Wygrywa najwyzsza oferta (RTB — Real-Time Bidding). 7) Reklama wygranego reklamodawcy wyswietla sie uzytkownikowi. Caly proces trwa okolo 100-150 milisekund — szybszy niz mrugniecie oka.",
    },
    {
      question: "Czym rozni sie Programmatic od Google Ads i Facebook Ads?",
      answer:
        "Google Ads i Facebook Ads to zamkniete ekosystemy — reklamujesz sie tylko w sieciach Google (Search, Display, YouTube) lub Meta (Facebook, Instagram, Audience Network). Programmatic to otwarty ekosystem — dostep do inventory tysiecy wydawcow jednoczesnie: portale informacyjne, blogi, strony niszowe, aplikacje mobilne, CTV. Podstawowe roznice: Zasieg — programmatic ma dostep do 90%+ internautow, FB Ads tylko do uzytkownikow Facebooka. Targetowanie — programmatic korzysta z danych third-party i DMP, FB korzysta z wlasnych danych. Transparentnosc — programmatic bardziej transparentny (wiesz gdzie sie wyswietla), FB bardziej zamkniety.",
    },
    {
      question: "Jakie dane sa uzywane w Programmatic?",
      answer:
        "Dane w programmatic: First-party data — Twoje wlasne dane: CRM, baza klientow, zachowanie na stronie (najcenniejsze). Second-party data — dane partnera ktory zgadza sie je udostepnic (np. sieci lojalnosciowe). Third-party data — dane od firm specjalizujacych sie w ich zbieraniu i sprzedazy (DMP — Data Management Platforms). Cookieless — po wycofaniu third-party cookies przez Google (opoznionym do 2024-2025+): first-party data staje sie krytyczne, Contextual targeting (kontekst strony zamiast profilu), Universal ID solutions (ID5, LiveRamp). Targetowanie: demograficzne, behawioralne, kontekstowe, lookalike, retargeting.",
    },
    {
      question: "Ile kosztuje reklama Programmatic?",
      answer:
        "Koszty programmatic (CPM — koszt za 1000 wyswietlen): Display: 2-15 PLN CPM dla otwartych aukcji. Premium inventory / PMP: 15-80 PLN CPM. Video (pre-roll): 20-60 PLN CPM. CTV (Connected TV): 40-150 PLN CPM. Native: 5-30 PLN CPM. Minimum budzety dla wejscia w programmatic: DSP zazwyczaj wymagaja minimum 3 000 - 15 000 PLN/mies. Alternatywa dla malych budzetow: Google Display Network (jest czescia programmatic, dostepna przez Google Ads), Meta Audience Network. Przy malych budzetach (ponizej 10 000 PLN/mies.) — Google Ads i Meta Ads sa bardziej efektywne niz dedykowana platforma DSP.",
    },
    {
      question: "Jakie platformy DSP sa uzywane w Polsce?",
      answer:
        "Popularne DSP (Demand Side Platforms): Globalne: The Trade Desk, DV360 (Google), Amazon DSP, Xandr (Microsoft), Verizon Media. Dostepne w Polsce: DV360 (przez agencje), The Trade Desk (przez agencje), Adform (skandynawskie DSP silne w CEE). Sieci Display: Google Display Network (GDN) — dostepna przez Google Ads, swietna na start. Amazon DSP — dla e-commerce, unikalne dane zakupowe Amazona. SSP (Supply Side Platforms) dla wydawcow: Google Ad Manager, Xandr, Magnite. Polskie portale (Onet, WP, Gazeta) maja wlasne systemy sprzedazy programmatic lub wspolpracuja z globalnymi SSP.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Programmatic Advertising — co to jest i jak dziala? | fotz.pl"
        description="Programmatic co to jest — wyjasnamy czym jest reklama programatyczna, jak dziala RTB, DSP vs SSP, koszty, dane i roznica vs Google Ads i Facebook Ads."
        canonical="https://fotz.pl/blog/programmatic-advertising-co-to"

        keywords="Programmatic Advertising co to jest, Programmatic Advertising definicja, czym jest Programmatic Advertising, Programmatic Advertising przykłady, jak działa Programmatic Advertising, Programmatic Advertising znaczenie, Programmatic Advertising przewodnik"
      />
      <ArticleSchema
        title="Programmatic Advertising — co to jest i jak dziala?"
        description="Czym jest Programmatic Advertising, jak dziala RTB, rodzaje (RTB, PMP, Programmatic Direct), koszty, dane i roznica vs Google Ads."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/programmatic-advertising-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Monitor className="w-4 h-4" /> Reklama cyfrowa</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Programmatic Advertising — co to jest i jak dziala?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Programmatic to zautomatyzowany zakup reklam w czasie rzeczywistym przez algorytmy.
                Jak dziala RTB, rodzaje, koszty i roznica vs Google Ads.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje zakupow programmatic</h2>
              <div className="space-y-3 mb-6">
                {programmaticTypes.map((t, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${t.open ? 'bg-green-500' : 'bg-blue-500'}`} />
                      <span className="font-bold text-slate-900 text-sm">{t.type}</span>
                      <span className={`text-xs ml-auto font-medium ${t.open ? 'text-green-600' : 'text-blue-600'}`}>{t.open ? 'Open' : 'Private'}</span>
                    </div>
                    <p className="text-slate-600 text-xs pl-4">{t.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Ekosystem Programmatic — kluczowe elementy</h2>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  { name: "DSP (Demand Side Platform)", desc: "Platforma dla reklamodawcow — tu kupujesz reklamy. The Trade Desk, DV360.", side: "Reklamodawca" },
                  { name: "SSP (Supply Side Platform)", desc: "Platforma dla wydawcow — tu sprzedajesz inventory. Google Ad Manager, Magnite.", side: "Wydawca" },
                  { name: "Ad Exchange", desc: "Gielda reklam laczaca DSP i SSP — tu odbywa sie aukcja RTB.", side: "Centrum" },
                  { name: "DMP (Data Management Platform)", desc: "Platforma do zarzadzania danymi — segmentacja audytorium dla lepszego targetowania.", side: "Dane" },
                ].map((e, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-xs">{e.name}</p>
                      <span className="text-blue-600 text-xs">{e.side}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{e.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Kampanie programmatic potrzebuja dobrego landing page</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy landing page zoptymalizowane pod ruch z programmatic — szybkie, mobilne, z jasnym CTA.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Programmatic co to jest</h2>
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
          heading="Zadbamy o landing page ktory konwertuje ruch z programmatic"
          subheading="Szybkie, mobilne strony i landing page — fundament skutecznych kampanii display i programmatic."
        />
      </Layout>
    </>
  );
}
