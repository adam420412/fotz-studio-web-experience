import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, CheckCircle2, Zap, Globe } from "lucide-react";
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

export default function BlogOutsourcingCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Outsourcing — co to jest? Rodzaje i zalety" },
  ];

  const outsourcingTypes = [
    { typ: "Outsourcing IT", przyklady: "Programowanie, DevOps, wsparcie techniczne, cyberbezpieczenstwo", popularnosc: "Bardzo wysoka" },
    { typ: "Outsourcing ksiegowy", przyklady: "Ksiegowosc, kadry, platnosc faktur, rozliczenia podatkowe", popularnosc: "Bardzo wysoka" },
    { typ: "Outsourcing marketingu", przyklady: "SEO, Google Ads, social media, content marketing, PR", popularnosc: "Wysoka" },
    { typ: "Outsourcing HR", przyklady: "Rekrutacja, szkolenia, administration kadr", popularnosc: "Srednia" },
    { typ: "Outsourcing logistyczny", przyklady: "Magazynowanie, dystrybucja, fulfillment (3PL)", popularnosc: "Wysoka" },
    { typ: "Outsourcing obslugi klienta", przyklady: "Call center, help desk, chat na stronie, support", popularnosc: "Srednia" },
  ];

  const faqItems = [
    {
      question: "Co to jest outsourcing?",
      answer:
        "Outsourcing to strategia biznesowa polegajaca na zlecaniu okreslonych zadan lub procesow podmiotom zewnetrznym (firmom lub freelancerom) zamiast realizowac je wlasnym personelem. Outsourcing pozwala firmie skupic sie na core businessie (glownej dzialalnosci), jednoczesnie korzystajac ze specjalistycznej wiedzy i zasobow zewnetrznych dostawcow. Przyklad: firma produkujaca oprogramowanie zleca outsourcing ksiegowosci, marketingu i obslugi klienta zewnetrznym specjalistom, a caly wlasny team skupia na tworzeniu produktu. Outsourcing moze byc krajowy (do firmy w Polsce) lub offshore/nearshore (do firmy zagranicznej).",
    },
    {
      question: "Jakie sa zalety outsourcingu?",
      answer:
        "Glowne zalety outsourcingu: Redukcja kosztow — czesto tansze od zatrudnienia pracownika etatowego (brak ZUS, urlopow, szkolen, stanowiska). Dostep do specjalistow — korzystasz z ekspertow bez koniecznosci ich zatrudniania. Elastycznosc — latwiej zwolnic dostawce niz pracownika, latwiej skalowac zakres uslug. Skupienie na core businessie — menadzment nie musi zarzadzac kazdym obszarem. Szybszy start — zewnetrzna firma juz dziala i ma procesy. Brak ryzyka rotacji — problem odejscia pracownika lezay po stronie dostawcy. Miedzynarodowe standardy — globalne agencje przyniosza najlepsze praktyki.",
    },
    {
      question: "Jakie sa wady i ryzyka outsourcingu?",
      answer:
        "Ryzyka outsourcingu: Utrata kontroli — trudniej kontrolowac jakosc i tempo pracy zewnetrznego dostawcy niz wlasnego pracownika. Uzaleznienie od dostawcy (vendor lock-in) — zmiana dostawcy moze byc kosztowna i czasochlonna. Ryzyko wycieku danych — zewnetrzny dostawca ma dostep do poufnych informacji. Bariery komunikacyjne — szczegolnie przy offshore outsourcingu (jezyk, strefa czasowa). Rozumienie kultury firmy — zewnetrzni dostawcy nie zawsze podzielaja wartosci i kulture organizacji. Jakosc vs cena — najtanszy outsourcing czesto nie jest najlepszy. Jak minimalizowac ryzyka: szczegolowe SLA w umowie, regularne raporty, audyty, klauzule NDA i RODO.",
    },
    {
      question: "Czym rozni sie outsourcing od insourcingu?",
      answer:
        "Outsourcing vs Insourcing: Outsourcing — zlecanie zadan podmiotom zewnetrznym. Zalety: niskie koszty stale, dostep do specjalistow, elastycznosc. Wady: mniejsza kontrola, ryzyko wycieku danych. Insourcing (in-house) — realizacja zadan wlasnym zespolem. Zalety: pelna kontrola, lepsze rozumienie kultury firmy, szybsza reakcja. Wady: wyzsze koszty stale, potrzeba rekrutacji i szkolen. Kiedy outsourcing: nie jest to core business, brak kompetencji, chcesz szybko, cena jest kluczowa. Kiedy insourcing: strategicznie wazne obszary, wysoka poufnosc danych, dlugoterminowe projekty, budowanie wlasnej wiedzy.",
    },
    {
      question: "Jak wybrac dobrego dostawce outsourcingu?",
      answer:
        "Kryteria wyboru firmy outsourcingowej: Portfolio i case studies — sprawdz poprzednie projekty w podobnej branzy. Referencje i opinie — zapytaj o kontakty do poprzednich klientow. Certyfikaty i kompetencje — ISO, partnerstwo Google/Microsoft, specjalizacja branzy. SLA (Service Level Agreement) — co doklanie dostarczy, w jakim czasie, jakie KPI. Modele rozliczen — time & material, fixed price, retainer (miesiezna oplata). Forma prawna i RODO — umowa powierzenia danych osobowych. Komunikacja — sposob raportowania, czestotliwosc spotkan, narzedzia (Slack, Jira). Koszt calkowity (TCO) — nie tylko stawka, ale tez koszty wdrozenia, zarzadzania, migracji.",
    },
    {
      question: "Outsourcing marketingu — czy warto?",
      answer:
        "Outsourcing marketingu cyfrowego: Kiedy sie oplaca: brak specjalisty in-house (SEO, Google Ads, social media sa skomplikowane i wymagaja specjalizacji). Brak czasu na marketing — wlasciciel skupiony na operacjach. Ograniczony budzet — agencja tansza niz pelnoetatowy marketingowiec. Dostep do narzedzi — agencja ma Ahrefs, SEMrush, Hotjar, ktore sa drogie in-house. Kiedy nie warto: core business firmy to marketing (agencja marketingowa nie powinna outsourcowac marketingu). Strategicznie wazna wiedza o klientach. Co outsourcowac w marketingu: SEO, Google Ads, social media ads, content writing, web design.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Outsourcing — co to jest? Rodzaje, zalety i ryzyka | fotz.pl"
        description="Outsourcing co to jest — wyjasnamy czym jest outsourcing, rodzaje (IT, ksiegowy, marketing), zalety i ryzyka oraz jak wybrac dobrego dostawce."
        canonical="https://fotz.pl/blog/outsourcing-co-to-jest"

        keywords="Outsourcing co to jest, Outsourcing definicja, czym jest Outsourcing, Outsourcing przykłady, jak działa Outsourcing, Outsourcing znaczenie, Outsourcing przewodnik"
      />
      <ArticleSchema
        title="Outsourcing — co to jest? Rodzaje, zalety i ryzyka"
        description="Czym jest outsourcing, rodzaje outsourcingu (IT, ksiegowy, marketing, HR), zalety i ryzyka, outsourcing vs insourcing i jak wybrac dostawce."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/outsourcing-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> Strategie biznesowe</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Outsourcing — co to jest, rodzaje i czy warto?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Outsourcing to zlecanie procesow zewnetrznym specjalistom zamiast zatrudniania wlasnych pracownikow.
                Rodzaje, zalety, ryzyka i kiedy outsourcing sie oplaca.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Najpopularniejsze rodzaje outsourcingu</h2>
              <div className="space-y-2 mb-6">
                {outsourcingTypes.map((o, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm">{o.typ}</p>
                      <span className="text-xs text-blue-600 font-medium">{o.popularnosc}</span>
                    </div>
                    <p className="text-slate-600 text-xs">{o.przyklady}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Outsourcujesz marketing? Zaczgnij od strony internetowej</p>
                <p className="text-blue-700 text-sm mb-3">
                  Outsourcing tworzenia stron internetowych to jedno z najbardziej oplacalnych decyzji dla firm bez in-house developera.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Outsourcing co to jest</h2>
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
