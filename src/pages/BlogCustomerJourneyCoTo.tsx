import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, TrendingUp, Map, CheckCircle2 } from "lucide-react";
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

export default function BlogCustomerJourneyCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Customer Journey — co to jest? Mapa podrozy klienta" },
  ];

  const journeyStages = [
    { etap: "Awareness (Swiadomosc)", opis: "Klient dowiaduje sie o problemie lub potrzebie. Pierwsze zetknięcie z Twoja marka.", touchpoints: "SEO, blog, social media, reklamy display, word of mouth", color: "bg-blue-50 border-blue-200" },
    { etap: "Consideration (Rozwaazanie)", opis: "Klient aktywnie szuka rozwiazania i porownuje opcje. Zbiera informacje.", touchpoints: "Strona produktowa, recenzje, case studies, porownania, webinary", color: "bg-purple-50 border-purple-200" },
    { etap: "Decision (Decyzja)", opis: "Klient jest gotowy do zakupu — wybiera konkretnego dostawce.", touchpoints: "Landing page, wycena, demo, trial, oferta, rozmowa ze sprzedaza", color: "bg-green-50 border-green-200" },
    { etap: "Retention (Utrzymanie)", opis: "Po zakupie — klient korzysta z produktu. Cel: satysfakcja i powrot.", touchpoints: "Onboarding, support, newsletter, check-in od opiekuna", color: "bg-yellow-50 border-yellow-200" },
    { etap: "Advocacy (Rzecznictwo)", opis: "Zadowolony klient poleca firme innym — staje sie ambasadorem marki.", touchpoints: "Program referral, case study, recenzje, NPS, loyalty program", color: "bg-orange-50 border-orange-200" },
  ];

  const faqItems = [
    {
      question: "Co to jest Customer Journey?",
      answer:
        "Customer Journey (podrozz klienta) to pelna sciezka jaką przechodzi klient od pierwszego zetknięcia sie z marka az do zostania lojalnym klientem (a nawet ambasadorem). Customer Journey obejmuje wszystkie punkty styku (touchpoints) klienta z firma: reklama, strona internetowa, rozmowa ze sprzedaza, zakup, onboarding, obsluza klienta, ponowny zakup. Mapowanie Customer Journey (Customer Journey Map) pozwala zrozumiec co myśli, czuje i robi klient na kazdym etapie — i gdzie firma moze poprawic doswiadczenie. Firmy ktore mapuja Customer Journey raportuja 36% wyzszy wskaznik utrzymania klientow.",
    },
    {
      question: "Jak stworzyc mape podrozy klienta (Customer Journey Map)?",
      answer:
        "Kroki tworzenia Customer Journey Map: 1) Zdefiniuj persone — dla kogo tworzysz mape (jezeli masz kilka person, stworz oddzielne mapy). 2) Zidentyfikuj etapy podrozy — Awareness, Consideration, Decision, Retention, Advocacy. 3) Wypisz wszystkie touchpointy — w kazdym etapie: co robi klient, jaki kanal uzywa. 4) Okresl emocje i mysli — co klient czuje i myśli na kazdym etapie. 5) Zidentyfikuj bole — gdzie klient jest sfrustrowany lub zagubiony. 6) Wyznacz szanse — gdzie mozna poprawic doswiadczenie. 7) Zwizualizuj — Miro, Figma, PowerPoint, lub dedykowane narzedzia (Smaply, UXPressia). Wazne: Customer Journey Map to zyywy dokument — aktualizuj regularnie gdy zmieniasz produkt lub poznasz nowych klientow.",
    },
    {
      question: "Czym Customer Journey rozni sie od Sales Funnel?",
      answer:
        "Customer Journey vs Sales Funnel (lejek sprzedazowy): Sales Funnel — perspektywa firmy/sprzedawcy. Pokazuje jak firma prowadzi potencjalnego klienta do zakupu. Skoncentrowany na konwersji. Zazwyczaj konczy sie na zakupie. Customer Journey — perspektywa klienta. Pokazuje co klient robi, czuje i myslii na kazdym etapie. Obejmuje caly cykl zycia klienta (rowniez po zakupie). Dlaczego Customer Journey jest szersza: uwzglednia doswiadczenia sprzed i po zakupie, bierze pod uwage emocje i motywacje klienta, pozwala wyeliminowac 'dziury' w doswiadczeniu ktore nie sa widoczne w lejku sprzedazowym.",
    },
    {
      question: "Co to sa touchpointy klienta?",
      answer:
        "Touchpoint (punkt styku) to kazde miejsce lub moment, w ktorym klient wchodzi w interakcje z Twoja firma. Touchpointy przed zakupem: reklama (Google, Meta), wynik wyszukiwania (SEO), post w social media, polecenie od znajomego, artykul na blogu, profil na Clutch lub Google My Business. Touchpointy w czasie zakupu: strona internetowa, rozmowa z handlowcem, wycena, formularz, landing page, checkout sklepu. Touchpointy po zakupie: email transakcyjny, onboarding, support, newsletter, telefon follow-up, faktura. Optymalizacja touchpointow: kazdy touchpoint wplywa na customer experience. Jeden slaby touchpoint moze zniszczyc caly pozytywny wizerunek marki.",
    },
    {
      question: "Jak Customer Journey wplywa na strategie marketingowa?",
      answer:
        "Customer Journey a strategia marketingowa: Awareness: inwestuj w SEO, content marketing, social media, brand awareness — przyciagnij osoby ktore jeszcze Cie nie znaja. Consideration: tworzasie szczegolowe opisy uslug, case studies, porownania, FAQ — pomoz klientowi podjac decyzje. Decision: landing page z oferta, jasne CTA, testimoniale, gwarancja, demo — usun ostatnie bariery. Retention: onboarding, email marketing, check-iny — dbaj o klientow po zakupie. Advocacy: program referral, NPS, proba o recenzje — zamieniai klientow w ambasadorow. Praktyczny wynik: nie wklaadaj calego budzetu reklamowego w Awareness — mozesz tracie klientow na etapie Consideration lub Retention bez tego nie wiedzac.",
    },
    {
      question: "Jak mierzyc Customer Journey?",
      answer:
        "Metryki Customer Journey: Awareness: zasieg (reach), wyswietlenia, ruch organiczny (sesje), Share of Voice. Consideration: wspolczynnik zaangazowania, czas na stronie, liczba obejrzanych stron. Decision: wspolczynnik konwersji, CPL, liczba zapytan. Retention: churn rate (wspolczynnik odejsc), NPS (Net Promoter Score), CSAT, LTV (Lifetime Value). Advocacy: liczba polecen, liczba recenzji, Net Promoter Score, wskaznik referral. Narzedzia: Google Analytics 4 (sledzi sciezke do konwersji), HubSpot (CRM + cykl zycia klienta), Hotjar (nagrania sesji), SurveyMonkey/Typeform (badania NPS i CSAT).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Customer Journey — co to jest? Mapa podrozy klienta | fotz.pl"
        description="Customer Journey co to jest — wyjasnamy czym jest podrozz klienta, jak stworzyc Customer Journey Map, etapy, touchpointy i metryki."
        canonical="https://fotz.pl/blog/customer-journey-co-to"

        keywords="Customer Journey co to jest, Customer Journey definicja, czym jest Customer Journey, Customer Journey przykłady, jak działa Customer Journey, Customer Journey znaczenie, Customer Journey przewodnik"
      />
      <ArticleSchema
        title="Customer Journey — co to jest? Mapa podrozy klienta"
        description="Czym jest Customer Journey (podrozz klienta), jak stworzyc Customer Journey Map, etapy (Awareness-Advocacy), touchpointy i metryki."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/customer-journey-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Map className="w-4 h-4" /> Strategia marketingowa</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Customer Journey — co to jest i jak mapowac podrozz klienta?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Customer Journey to pelna sciezka klienta od pierwszego kontaktu do polecania firmy.
                Jak mapowac, etapy, touchpointy i jak uzyc w strategii marketingowej.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Etapy Customer Journey</h2>
              <div className="space-y-3 mb-6">
                {journeyStages.map((s, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${s.color}`}>
                    <p className="font-bold text-slate-900 text-sm mb-1">{s.etap}</p>
                    <p className="text-slate-700 text-xs mb-2">{s.opis}</p>
                    <p className="text-slate-500 text-xs"><span className="font-medium">Touchpointy:</span> {s.touchpoints}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Map className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Twoja strona to kluczowy touchpoint w Customer Journey</p>
                <p className="text-blue-700 text-sm mb-3">
                  Optymalizujemy strony pod kazdy etap podrozy klienta — od pierwszej wizyty do decyzji o zakupie.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Customer Journey co to jest</h2>
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
