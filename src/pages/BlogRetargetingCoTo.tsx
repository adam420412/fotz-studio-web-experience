import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, TrendingUp, Users, Eye } from "lucide-react";
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

export default function BlogRetargetingCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Retargeting — co to jest? Remarketing w reklamie" },
  ];

  const retargetingTypes = [
    { typ: "Retargeting pikselowy", desc: "Na podstawie piksela (np. Meta Pixel, Google Tag) sledzi uzytkownikow na Twojej stronie i pokazuje im reklamy gdzie indziej w sieci.", platform: "Google, Meta" },
    { typ: "Retargeting listowy (CRM)", desc: "Wgrywasz liste emaili klientow do platformy reklamowej — pokazujesz reklamy osobom z listy.", platform: "Meta, Google, LinkedIn" },
    { typ: "Retargeting dynamiczny", desc: "Automatycznie pokazuje reklame z produktem ktory uzytkownik ogladal w Twoim sklepie. Np. buty ktore prawie kupil.", platform: "Meta, Google Shopping" },
    { typ: "Retargeting wideo", desc: "Pokazuj reklamy osobom ktore obejrzaly Twoje filmy na YouTube lub Facebooku.", platform: "YouTube, Meta" },
    { typ: "Email retargeting", desc: "Sekwencja emaili do osob ktore porzucily koszyk lub formularz na stronie.", platform: "Email marketing" },
  ];

  const faqItems = [
    {
      question: "Co to jest retargeting?",
      answer:
        "Retargeting (zwany tez remarketingiem) to forma reklamy internetowej, ktora pozwala wyswietlac reklamy osobom ktore wczesniej odwiedzily Twoja strone internetowa, aplikacje lub wchodziły w interakcje z Twoim contentem, ale nie dokonaly zakupu lub zadanej konwersji. Dziala poprzez tzw. piksel sledzacy (maly fragment kodu JavaScript) instalowany na stronie, ktory zapisuje cookies w przegladarce odwiedzajacych. Dzieki temu platformy reklamowe (Google, Meta) wiedza, ze dana osoba byla na Twojej stronie i moga jej wyswietlac Twoje reklamy w innych miejscach. Skutecznosc: osoby retargetowane konwertuja 70% lepiej niz nowi uzytkownicy.",
    },
    {
      question: "Jaka jest roznica miedzy retargetingiem a remarketingiem?",
      answer:
        "Retargeting vs remarketing: W praktyce obie nazwy sa uzywane zamiennie i oznaczaja to samo. Oficjalnie: Remarketing — termin Google'a. W Google Ads kampanie do poprzednich odwiedzajacych nazywamy remarketingiem. Retargeting — termin szerzej uzywany w branzy marketingowej, szczegolnie dla reklam poza wlasna platforma. Czasem rozrozniane: Retargeting — reklamy displayowe i social media dla osob z Twojej strony. Remarketing — emaile do osob z Twojej bazy (porzucone koszyki, reaktywacja). W Polsce obie nazwy sa uzywane wymiennie — nie ma praktycznej roznicy w komunikacji z klientem.",
    },
    {
      question: "Jak dziala piksel retargetingowy?",
      answer:
        "Jak dziala piksel sledzacy: 1) Instalujesz kod piksela (Meta Pixel lub Google Tag) na swojej stronie (najlepiej przez GTM). 2) Kazdy odwiedzajacy Twoja strone 'dostaje' ciasteczko (cookie) w przegladarce. 3) Platforma reklamowa rozpoznaje te osoby gdy odwiedzaja inne strony, Facebooka, YouTube, etc. 4) Platforma wyswietla im Twoje reklamy (retargetingowe). Segmentacja: mozesz pokazywac rozne reklamy osobom ktore: odwiedzily strone glowna, odwiedzily strone konkretnego produktu, dodaly do koszyka ale nie kupily, byly na stronie ponad 2 minuty. Ograniczenia: blokady cookies, iOS 14+ zmiana Apple (ograniczenie sledzenia), RODO (wymagana zgoda).",
    },
    {
      question: "Ile kosztuje retargeting?",
      answer:
        "Koszty retargetingu: Google Display Network: CPM (koszt za 1000 wyswietlen) 1-10 zl. CPC (koszt za klikniecie) 0,30-2 zl. Meta (Facebook/Instagram): CPM 5-25 zl (zalezy od targetowania). CTR retargetingu 0,5-2% (wyzszy niz standardowe reklamy). Skutecznosc: ROAS retargetingu czesto 5-15x (vs 3-5x dla cold traffic). Budzet minimalny: 300-500 zl/mies. dla retargetingu (za malo ponizel tego progu). Zalecanay budzet dla e-commerce: 1 000-5 000 zl/mies. w zaleznosci od ruchu na stronie. Wazne: retargeting dziala najlepiej gdy masz co najmniej 1 000 odwiedzin/mies. — mniejszy ruch to za mala audiencja.",
    },
    {
      question: "Jak skonfigurowac retargeting w Google Ads?",
      answer:
        "Konfiguracja remarketingu Google krok po kroku: 1) Zainstaluj Google Tag (przez GTM lub bezposrednio w kodzie strony). 2) W Google Ads przejdz do Biblioteka wspolna > Grupy odbiorcow. 3) Stworz segmenty odbiorcow: odwiedzajacy strone, odwiedzajacy konkretna podstrone, osoby ktore wykonaly okreslona akcje (zakup, formularz). 4) W kampanii displayowej lub RLSA (Remarketing Lists for Search Ads) dodaj te segmenty jako cel. 5) Ustaw czas czlonkostwa w liscie (domyslnie 30 dni, max 540 dni). 6) Stworz dedykowane kreacje reklamowe dla retargetingu. 7) Ustaw czestotliwosc wyswietlen (np. max 3-5 razy/dzien). Wazne: Retargeting przez RLSA pozwala podniesc stawki dla uzytkownikow ktore juz znaja Twoja marke.",
    },
    {
      question: "Jakie sa najlepsze praktyki retargetingu?",
      answer:
        "Best practices retargetingu: Segmentuj audiencie — rozne reklamy dla osob ktore porzucily koszyk, odwiedzily strone kontakt, czytaly blog. Ogranicz czestotliwosc — max 3-7 wyswietlen/tydzien na uzytkownika (frequency capping). Ustaw window konwersji — nie sledzij bezsensownie osob po 30+ dniach (chyba ze masz dlugi cykl zakupowy). Personalizuj kreacje — pokaz konkretny produkt ktory ogladali (retargeting dynamiczny). Wykluczaj konwertujacych — wyklucz osoby ktore juz kupily (inaczej irritujesz klientow). Testuj A/B reklamy — tesuj zdjecia, naglowki, CTA. Uzywaj sekwencji — najpierw brand awareness, potem oferta, potem urgency.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Retargeting — co to jest? Remarketing w reklamie online | fotz.pl"
        description="Retargeting co to jest — wyjasnamy czym jest retargeting (remarketing), jak dziala piksel, koszty, konfiguracja w Google Ads i najlepsze praktyki."
        canonical="https://fotz.pl/blog/retargeting-co-to"
      />
      <ArticleSchema
        title="Retargeting — co to jest? Remarketing w reklamie online"
        description="Czym jest retargeting (remarketing), rodzaje, jak dziala piksel sledzacy, koszty, konfiguracja w Google Ads i Meta oraz najlepsze praktyki."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/retargeting-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Reklama internetowa</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Retargeting — co to jest i jak przyciagnac klientow z powrotem?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Retargeting (remarketing) to reklamy dla osob ktore juz byly na Twojej stronie.
                Jak dziala piksel, rodzaje retargetingu i jak skonfigurowac w Google Ads.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje retargetingu</h2>
              <div className="space-y-3 mb-6">
                {retargetingTypes.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Target className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold text-slate-900 text-sm">{r.typ}</p>
                        <span className="text-xs text-slate-500">{r.platform}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Eye className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Retargeting zaczyna sie od dobrej strony</p>
                <p className="text-blue-700 text-sm mb-3">
                  Im lepsza strona, tym wiecej odwiedzin → wieksza audiencja retargetingowa → lepsze wyniki reklam.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Retargeting co to jest</h2>
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
          heading="Wdrozymy retargeting i Google Ads dla Twojej firmy"
          subheading="Strona z pikselami, kampanie retargetingowe i optymalizacja — budujemy pelny funnel konwersji."
        />
      </Layout>
    </>
  );
}
