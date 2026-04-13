import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, Target, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogColdEmailCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Cold Email — co to jest i jak pisac skuteczne wiadomosci?" },
  ];

  const coldEmailStructure = [
    { part: "Temat (Subject Line)", tip: "Krotki, personalny, wzbudzajacy ciekawosc. Max 50 znakow. Unikaj clickbait i CAPS LOCK.", example: "Przyklad: '{Imie}, mam pytanie o [konkretny obszar w firmie]'" },
    { part: "Otwarcie (Opening)", tip: "1-2 zdania personalizacji — cos konkretnego o tej osobie/firmie (nie skopiuj-wklej).", example: "Przyklad: 'Widzialem ze otwieracie nowy rynek w Niemczech — gratulacie!'" },
    { part: "Propozycja wartosci (Pitch)", tip: "1-2 zdania co robisz i jaka konkretna korzysc daje to odbiorcy. Skupiaj sie na nich, nie sobie.", example: "Przyklad: 'Pomagamy firmom SaaS jak Twoja skrocic sales cycle o 30%.'" },
    { part: "CTA (Call to Action)", tip: "Jedna konkretna propozycja — male zaangazowanie. Nie 'czy moge zadzwonic?' ale 'czy 15 min w tym tygodniu?'", example: "Przyklad: 'Czy masz 15 minut w czwartek lub piatek zeby zobaczyc jak to dziala?'" },
    { part: "Podpis (Signature)", tip: "Imie, stanowisko, firma, telefon, linki do LinkedIn/strony. Nie za dlugim — to cold email, nie makulatura.", example: "Piotr Kowalski | Head of Growth | FirmXYZ | +48 600 000 000" },
  ];

  const faqItems = [
    {
      question: "Co to jest cold email?",
      answer:
        "Cold email (zimny email) to spersonalizowana wiadomosc e-mail wyslana do osoby z ktora nigdy wczesniej nie miales kontaktu, w celu nawiazania relacji biznesowej, pozyskania klienta lub partnera. W odroznieniu od spamu: cold email jest personalizowany (zawiera konkretne informacje o odbiorcy), ma wartosc dla odbiorcy (nie tylko prosi ale tez oferuje), jest wyslany do odpowiedniej osoby decyzyjnej, jest zgodny z przepisami (RODO, CAN-SPAM). Cold email to glowne narzedzie outbound sales w B2B — uzywany przez SDR (Sales Development Representatives) do generowania demo i spotkan.",
    },
    {
      question: "Jaki jest dobry open rate i reply rate cold emaila?",
      answer:
        "Benchmarki cold email w B2B: Open Rate: 40-60% (dobry) — kluczowy jest temat i nazwa nadawcy. Ponizej 30% to slaby wynik. Reply Rate: 5-15% (dobry), powyzej 15% — swietny. Ponizej 3% — musisz poprawic pitch lub targetowanie. Positive Reply Rate (zainteresowanie): 2-8% — tyle spotkan/demo ze 100 emaili. Meeting Booked Rate: 1-5%. Czynniki wplywajace na open rate: pole 'od' (imie > nazwa firmy), temat (personalizacja, ciekawosc, krotkosc), czas wysylki (wtorek-czwartek, 8-10 lub 14-16). Cold email outperformuje LinkedIn outreach pod wzgledem reply rate o 2-3x.",
    },
    {
      question: "Jak napisac skuteczny cold email?",
      answer:
        "Zasady skutecznego cold emaila: 1) Personalizacja — minimum 1-2 konkretne zdania o tej osobie lub firmie (nie template). Sprawdz LinkedIn, strone firmy, ostatnie posty. 2) Krotko — maksymalnie 5-8 zdan. Dlugich emaili nikt nie czyta. 3) Fokus na odbiorcze — mow o ich problemach, nie o sobie. 'Ty' powinno pojawiac sie 3x czesciej niz 'ja'. 4) Jeden CTA — nie pytaj o kilka rzeczy naraz. Propozycja jednego malego kroku. 5) Follow-up — 70% odpowiedzi przychodzi po 2-5 follow-upach. Nie wysylaj jednego emaila i czekaj. 6) A/B testuj — temat, pitch, CTA. Mierz i iteruj.",
    },
    {
      question: "Czy cold emailing jest legalny w Polsce?",
      answer:
        "Cold email a RODO/UODO w Polsce: Do osob biznesowych (B2B): cold email jest generalnie dozwolony jesli masz uzasadniony interes biznesowy (art. 6 ust. 1 lit. f RODO) i jesli email dotyczy ich dzialalnosci zawodowej. Wymagane: mozliwosc rezygnacji z korespondencji (unsubscribe), jasna identyfikacja nadawcy, niedezinformujacy temat. Do osob prywatnych (B2C): wymagana jest wyrazna zgoda na otrzymywanie komunikacji handlowej (art. 10 ustawy o swiadczeniu uslug droga elektroniczna). Praktyczna wskazowka: w B2B cold email jest bezpieczny jesli jesteś transparentny i latwo sie wypisac. Skonsultuj sie z prawnikiem w konkretnych przypadkach.",
    },
    {
      question: "Jakie narzedzia uzywac do cold emaila?",
      answer:
        "Narzedzia do cold email outreach: Platforma do wysylki: Lemlist, Instantly.ai, Woodpecker, Hunter Campaigns, Reply.io, Smartlead.ai — automatyzacja sekwencji emaili z personalizacja. Znajdowanie emaili: Hunter.io, Apollo.io, Lusha, Snov.io — weryfikacja i wyszukiwanie adresow. CRM: HubSpot (darmowy), Pipedrive, Salesforce — do trackowania wynikow i follow-upow. Weryfikacja emaili: NeverBounce, ZeroBounce — redukcja bounce rate (krytyczne dla reputacji domeny). Infrastruktura: osobna domena do cold emaila (nie glowna firmowa), rozgrzewanie domeny (email warming), SPF, DKIM, DMARC skonfigurowane.",
    },
    {
      question: "Jak unikac trafiania cold emaili do spamu?",
      answer:
        "Techniczne aspekty dostarczalnosci cold emaili: 1) Skonfiguruj SPF, DKIM i DMARC dla swojej domeny — bez tego trafisz do spamu. 2) Uzywaj osobnej domeny do cold outreach (np. firma-hq.com zamiast firma.com) — chronisz glowna domene. 3) Rozgrzej domene (email warming) przez 2-4 tygodnie przed masowq wysylka. Narzedzia: Mailwarm, Warmbox, Lemwarm. 4) Utrzymuj bounce rate ponizej 2% — uzywaj weryfikacji emaili. 5) Nie wysylaj z jednej domeny wiecej niz 30-50 emaili dziennie na starcie. 6) Dbaj o reply rate — Google i Outlook analizuja zaangazowanie. 7) Zawsze incluuduj rezygnacje z korespondencji (unsubscribe link).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Cold Email — co to jest i jak pisac skuteczne wiadomosci? | fotz.pl"
        description="Cold email co to jest — wyjasnamy czym jest cold emailing, jak napisac skuteczny cold email B2B, open rate i reply rate benchmarki, narzedzia i legalnosc w Polsce."
        canonical="https://fotz.pl/blog/cold-email-co-to"

        keywords="Cold Email co to jest, Cold Email definicja, czym jest Cold Email, Cold Email przykłady, jak działa Cold Email, Cold Email znaczenie, Cold Email przewodnik"
      />
      <ArticleSchema
        title="Cold Email — co to jest i jak pisac skuteczne wiadomosci?"
        description="Czym jest cold email, jak pisac skuteczne zimne emaile B2B, benchmarki open rate i reply rate, narzedzia, legalnosc w Polsce (RODO) i dostarczalnosc."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/cold-email-co-to"
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
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> Sprzedaz B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Cold Email — co to jest i jak pisac skuteczne wiadomosci?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Cold email to spersonalizowana wiadomosc do nowych kontaktow biznesowych.
                Jak pisac, benchmarki, narzedzia, legalnosc i dostarczalnosc.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Struktura skutecznego cold emaila</h2>
              <div className="space-y-3 mb-6">
                {coldEmailStructure.map((s, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{idx + 1}</span>
                      <span className="font-bold text-slate-900 text-sm">{s.part}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-1">{s.tip}</p>
                    <p className="text-blue-600 text-xs italic">{s.example}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Benchmarki cold email B2B (2025)</h2>
              <div className="space-y-2 mb-6">
                {[
                  { metric: "Open Rate", good: "40-60%", bad: "Ponizej 30%", tip: "Zalezny od tematu i personalizacji" },
                  { metric: "Reply Rate", good: "5-15%", bad: "Ponizej 3%", tip: "Wskaznik jakosci pitchu i targetowania" },
                  { metric: "Positive Reply Rate", good: "2-8%", bad: "Ponizej 1%", tip: "Procent zainteresowanych spotkaniem/demo" },
                  { metric: "Bounce Rate", good: "Ponizej 2%", bad: "Powyzej 5%", tip: "Wysoki = problem z reputacja domeny" },
                ].map((b, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm">{b.metric}</p>
                      <span className="text-green-600 text-xs font-medium">Cel: {b.good}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-slate-500 text-xs">{b.tip}</p>
                      <span className="text-red-500 text-xs">{b.bad}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Twoja strona powinna konwertowac leady z cold emaila</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy landing page i strony produktowe ktore przejmuja ruch z outbound i zamieniaja go w klientow.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Cold Email co to jest</h2>
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
          heading="Zwieksz skutecznosc cold emaila przez lepsza strone"
          subheading="Landing page, strona produktu i UX — zamieniamy odwiedzajacych z outbound w klientow."
        />
      </Layout>
    </>
  );
}
