import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Target, CheckCircle2, TrendingUp } from "lucide-react";
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

export default function BlogLeadGenerationCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Lead generation — co to jest? Pozyskiwanie klientow" },
  ];

  const leadChannels = [
    { kanal: "SEO i content marketing", opis: "Artykuly, poradniki, landing page — przyciagaja potencjalnych klientow organicznie 24/7.", koszt: "Niski (czas)", typ: "Inbound" },
    { kanal: "Google Ads (PPC)", opis: "Reklamy w wynikach wyszukiwania — natychmiastowy ruch dla fraz zakupowych.", koszt: "Sredni-wysoki", typ: "Outbound" },
    { kanal: "LinkedIn B2B", opis: "Generowanie leadow B2B przez profile, posty i reklamy Lead Gen Forms.", koszt: "Wysoki", typ: "Outbound" },
    { kanal: "Webinary i e-booki", opis: "Uzytkownik zostawia email w zamian za wartosc — lead magnet.", koszt: "Niski", typ: "Inbound" },
    { kanal: "Cold email/outreach", opis: "Bezposredni kontakt z potencjalnymi klientami — wymaga dobrej bazy i personalizacji.", koszt: "Niski-sredni", typ: "Outbound" },
    { kanal: "Formularze na stronie", opis: "Formularz kontaktowy, wycena, demo — kluczowy punkt konwersji na stronie.", koszt: "Niski", typ: "Inbound" },
  ];

  const faqItems = [
    {
      question: "Co to jest lead generation?",
      answer:
        "Lead generation (generowanie leadow) to proces pozyskiwania danych kontaktowych potencjalnych klientow (imie, email, telefon, firma) w celu dalszego nawiazania relacji handlowej. Lead to osoba lub firma, ktora wyrazila zainteresowanie Twoim produktem lub usluga przez pozostawienie swoich danych. Rodzaje leadow: MQL (Marketing Qualified Lead) — lead zakwalifikowany przez marketing (np. pobral e-booka). SQL (Sales Qualified Lead) — lead zakwalifikowany przez sprzedaz (gotowy do rozmowy). Przykladowe metody: formularz kontaktowy na stronie, zapis na newsletter, pobranie e-booka, rejestracja na webinar, demo lub bezplatna wycena.",
    },
    {
      question: "Czym rozni sie inbound od outbound lead generation?",
      answer:
        "Inbound vs Outbound lead generation: Inbound (przychodzacy) — lead SAM do Ciebie trafia, bo go przyciagnales wartoscia. Metody: SEO (pozycjonowanie), content marketing, media spolecznosciowe, webinary. Zalety: wysoka jakosc leadow, niski koszt w dlugim terminie, budowanie autorytetu. Wady: wymaga czasu (SEO to 6-12 miesiecy). Outbound (wychodzacy) — TY inicjujesz kontakt. Metody: cold email, cold calling, LinkedIn outreach, reklamy PPC. Zalety: szybkie wyniki, przewidywalnosc. Wady: wyzszy koszt na leada, nizsza skutecznosc (zimny kontakt). Najlepsza strategia: polaczenie obu — inbound buduje dlugoterminowy pipeline, outbound generuje leady juz teraz.",
    },
    {
      question: "Co to jest lead magnet i jak go stworzyc?",
      answer:
        "Lead magnet to bezplatna wartosc oferowana uzytkownikowi w zamian za jego dane kontaktowe (email). Typy lead magnetow: E-book lub poradnik PDF — np. '10 sposobow na zwiekszenie konwersji'. Webinar lub szkolenie online — np. 'Jak zaczac z SEO od zera'. Bezplatny trial lub demo — SaaS model. Kalkulator lub narzedzie — np. kalkulator ROI kampanii. Checklist lub template — gotowy do uzycia plik. Raport branzy lub case study. Jak stworzyc dobry lead magnet: rozwiaz jeden konkretny problem Twojej grupy docelowej. Tytul musi byc konkretny i obietnicy wartosci. Zaprojektuj ladnie (Canva). Dostarczaj przez sekwencje emailowa (welcome sequence).",
    },
    {
      question: "Ile kosztuje lead z roznych kanalow?",
      answer:
        "Koszt pozyskania leada (CPL) w Polsce — przyblizenie 2024: Google Ads (B2B uslugowy): 50-500 zl/lead. LinkedIn Ads (B2B): 100-1000 zl/lead. Facebook/Instagram Ads (B2C): 20-200 zl/lead. SEO i content marketing: 10-100 zl/lead (koszt amortyzowany). Cold email outreach: 20-100 zl/lead (koszt narzedzi i czasu). Webinar / event online: 5-50 zl/lead. Czynniki wplywajace na CPL: branzy i konkurencja, jakosc strony docelowej (landing page), precyzja targetowania, jakosc creative i oferty. Kluczowe: CPL sam w sobie nie jest miara sukcesu — wazniejszy jest CAC (Customer Acquisition Cost) i LTV/CAC ratio.",
    },
    {
      question: "Jak mierzyc efektywnosc lead generation?",
      answer:
        "Kluczowe metryki lead generation: Liczba leadow — podstawa, ale nie jedyna miara. Wspolczynnik konwersji (CR) — % odwiedzin ktore staly sie leadem (cel: 1-5% dla stron B2B). CPL (Cost Per Lead) — koszt pozyskania jednego leada. Lead-to-Customer Rate — procent leadow ktore staly sie klientami. MQL do SQL ratio — ile MQL zamieniasz na SQL. Czas do zamkniecia sprzedazy — jak dlugo trwa cykl sprzedazowy. ROI z lead generation — zysk / koszt lead gen. Narzedzia: Google Analytics 4 (sledzenie zdarzen formularzy), HubSpot (CRM + pipeline), Hotjar (analize formularzy), Ahrefs (SEO i pozycje).",
    },
    {
      question: "Jak poprawic konwersje formularza kontaktowego?",
      answer:
        "Optymalizacja formularza kontaktowego: Zmniejsz liczbe pol — kazde pole zmniejsza konwersje. Pytaj tylko o niezbedne dane (imie + email to czesto wystarczy). Wyrazny CTA — zamiast 'Wyslij' uzywaj 'Pobierz bezplatny poradnik' lub 'Uzyskaj wycene'. Dodaj social proof — '2000 firm juz nam zaufalo', logo klientow. Micro-copy — krotki tekst pod formularzem: 'Nie spamujemy. Odpowiedamy w 24h'. Przetestuj wieloetapowy formularz (multi-step) — zamiast 5 pol na raz, 2 kroki po 2-3 pola. Testuj pozycje formularza — above the fold vs sticky sidebar. Optymalizuj na mobile — formularz musi byc wygodny na telefonie. Szybkosc strony — kazda sekunda opoznienia = mniej leadow.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Lead generation — co to jest? Pozyskiwanie klientow online"
        description="Lead generation co to jest — wyjasnamy czym jest generowanie leadow, inbound vs outbound, lead magnet, koszty i jak mierzyc efektywnosc."
        canonical="https://fotz.pl/blog/lead-generation-co-to"

        keywords="Lead generation co to jest, Lead generation definicja, czym jest Lead generation, Lead generation w marketingu, Lead generation przykłady, jak działa Lead generation, Lead generation strategia"
      />
      <ArticleSchema
        title="Lead generation — co to jest? Pozyskiwanie klientow online"
        description="Czym jest lead generation, inbound vs outbound, lead magnet, koszty pozyskania leada, metryki i jak poprawic konwersje formularza kontaktowego."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/lead-generation-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Marketing i sprzedaz</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Lead generation — co to jest i jak pozyskiwac klientow?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Lead generation to pozyskiwanie kontaktow do potencjalnych klientow.
                Inbound vs outbound, lead magnet, koszty i jak mierzyc efektywnosc.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kanaly lead generation</h2>
              <div className="space-y-2 mb-6">
                {leadChannels.map((c, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm">{c.kanal}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${c.typ === 'Inbound' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{c.typ}</span>
                        <span className="text-xs text-slate-500">{c.koszt}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs">{c.opis}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Twoja strona to #1 narzedzie lead generation</p>
                <p className="text-blue-700 text-sm mb-3">
                  Dobra strona z formularzem i SEO generuje leady non-stop bez dodatkowych kosztow reklamy.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Lead generation co to jest</h2>
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
          heading="Zbuduj maszyne do generowania leadow"
          subheading="Strona, SEO, formularz i automatyzacja — tworzymy systemy ktore pozyskuja klientow 24/7."
        />
      </Layout>
    </>
  );
}
