import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Monitor, CheckCircle2, TrendingUp } from "lucide-react";
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

export default function BlogWebinarCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Webinar — co to jest? Jak zorganizowac i zarabiac" },
  ];

  const webinarPlatforms = [
    { platforma: "Zoom Webinars", opis: "Najpopularniejsza platforma — od 149 USD/mies. dla 500 uczestnikow. Prosty dla prowadzacego i uczestnikow.", plusy: "Niezawodnosc, integracje", typ: "Platna" },
    { platforma: "YouTube Live", opis: "Bezplatne transmisje na zywo — brak ograniczen liczby uczestnikow. Nagranie dostepne po zakonczeniu.", plusy: "Bezplatne, duzy zasieg", typ: "Darmowa" },
    { platforma: "ClickMeeting", opis: "Polska platforma do webinarow — od 25 USD/mies. Popularna wsrod polskich edukatorow.", plusy: "Polskie wsparcie, RODO", typ: "Platna" },
    { platforma: "Google Meet", opis: "Bezplatne spotkania do 100 osob, brak dedykowanych funkcji webinarowych (brak Q&A, polls).", plusy: "Bezplatne, proste", typ: "Darmowa" },
    { platforma: "Demio", opis: "Platforma SaaS z automatyzacja — od 34 USD/mies. Wbudowane landing page i email sequence.", plusy: "Automatyzacja, UX", typ: "Platna" },
    { platforma: "StreamYard", opis: "Wieloplatformowe streamowanie (YT + FB jednoczesnie) — od 49 USD/mies.", plusy: "Multi-stream, branding", typ: "Platna" },
  ];

  const faqItems = [
    {
      question: "Co to jest webinar?",
      answer:
        "Webinar (od ang. web + seminar) to seminarium lub szkolenie prowadzone przez internet, na zywo (live) lub nagranym wczesniej (on-demand). Uczestnicy dolaczaja z dowolnego miejsca przez przegladarke lub aplikacje. Webinary sa popularne w: edukacji (kursy online, szkolenia korporacyjne), marketingu B2B (demonstracje produktu, lead generation), sales (prezentacje dla potencjalnych klientow), sektorze publicznym (konferencje, spotkania). Webinar vs podcast: webinar ma komponent wideo i interakcje (Q&A, ankiety), podcast jest audio. Webinar vs szkolenie stacjonarne: brak kosztow lokalu i dojazdu, mozliwosc dotarcia do setek osob jednoczesnie.",
    },
    {
      question: "Jak zorganizowac webinar krok po kroku?",
      answer:
        "Organizacja webinaru: 1) Wybierz temat — konkretny problem Twojej grupy docelowej ('5 bledow w SEO ktore kosztuja Cie klientow'). 2) Wybierz platforme (Zoom, ClickMeeting, YouTube Live). 3) Ustal date i godzine — wtorki/srody 10-12 lub 17-19 maja najlepszą frekwencje. 4) Stworz landing page z formularzem zapisu — zbierz emaile uczestnikow. 5) Promocja: email do bazy, social media, LinkedIn, Google Ads (2-4 tygodnie przed). 6) Przygotuj prezentacje (max 45-60 slajdow na 60 minut). 7) Przeprowadz probe techniczna. 8) Wyslij remind-ery (24h i 1h przed). 9) Prowadz webinar — intro, tresc, Q&A. 10) Po webinarze: wyslij nagranie, sekwencje followup email.",
    },
    {
      question: "Jak zarabiac na webinarach?",
      answer:
        "Modele monetyzacji webinarow: Platny webinar (jednorazowy): 49-499 zl za wstep. Kurs online (seria webinarow): 299-2999 zl. Webinar jako lead magnet (darmowy, konwersja do oferty): na koncu webinaru pitch oferty — np. audyt SEO, konsultacja, kurs. Sponsoring webinaru: firmy placa za logo i mentioan podczas webinaru (5 000-20 000 zl/sponsoring). Abonament / membershipowy dostep: regularne webinary w ramach subskrypcji. Webinary B2B (demo produktu) — konwersja na sprzedaz SaaS lub uslugi. Kluczowe: webinar darmowy z pitchem na koncu (tzw. webinar-sales call) ma srednia konwersje 5-20% na oferte. Przy 200 uczestnikow i ofercie 997 zl = potencjal 10 000-40 000 zl ze sprzedazy.",
    },
    {
      question: "Ile osob zapisuje sie i uczestniczy w webinarze?",
      answer:
        "Benchmarki webinarowe: Wspolczynnik zapisu (landing page → rejestracja): 20-40% dla dobrych LP. Wspolczynnik udzialu live: 30-50% zapisanych przychodzi live. Wspolczynnik ogladania nagrania: dodatkowe 15-25% ogladnie nagranie po. Rejestracji moze byc: 50-200 dla malej bazy, 500-5000 dla duzej bazy i promocji planej. Dobry webinar marketingowy: powyzej 200 uczestnikow live dla niszowej branzy. Elementy poprawiajace frekwencje: przypomnienia email (24h i 1h przed), SMS reminder, wyrazna propozycja wartosci ('nauczysz sie konkretnie X'), interesujacy tytu,l swiadomosc marki/wylkadowcy.",
    },
    {
      question: "Co to jest webinar on-demand?",
      answer:
        "Webinar on-demand (nagrany) to nagranie webinaru dostepne do ogladniecia w dowolnym momencie, na zadanie. Zalety: dostepny 24/7, uczestnik ogladnie kiedy chce. Skalowalnosc — jedno nagranie oglada nieograniczona liczba osob. Automatyzacja — czesto z automatycznym emailem po zapisie i nagraniem dostepnym od razu. Wady: brak interakcji na zywo (Q&A ograniczone), nizsze zaangazowanie niz live. Evergreen webinar: nagrany webinar ktory zawsze bedzie aktualny — np. 'Jak zaczyc z Google Ads' nie starzeeje sie szybko. Platformy on-demand: EverWebinar, Demio, Vimeo + bramka emailowa. Strategia: rób webinary live, nagrywaj i uzynaj jako evergreen do generowania leadow przez lata.",
    },
    {
      question: "Ile kosztuje webinar i jaki budzet przeznaczic?",
      answer:
        "Koszty organizacji webinaru: Platforma webinarowa: 0-500 zl/mies. (YouTube za darmo, Zoom od 60 zl, ClickMeeting od 100 zl). Sprzet: dobra kamera internetowa (200-600 zl), mikrofon USB (100-400 zl), oswietlenie (100-300 zl). Grafika i landing page: 0-500 zl (Canva + WordPress). Promocja (reklamy): 500-3000 zl dla platformy Google/Meta na rejestracje. Email tool (jezeli nie masz): 0-200 zl/mies. Calkowity koszt startu: 500-5000 zl (bez reklam) lub 1000-8000 zl (z reklama). ROI: jezeli webinar wygeneruje 10 klientow na usluge 2000 zl = 20 000 zl przychodu. Koszt 3000 zl. ROI 567%.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Webinar — co to jest? Jak zorganizowac i zarabiac | fotz.pl"
        description="Webinar co to jest — wyjasnamy czym jest webinar, jak zorganizowac krok po kroku, platformy, monetyzacja i ile kosztuje organizacja webinaru."
        canonical="https://fotz.pl/blog/webinar-co-to-jest"
      />
      <ArticleSchema
        title="Webinar — co to jest? Jak zorganizowac i zarabiac"
        description="Czym jest webinar, jak zorganizowac krok po kroku, platformy (Zoom, ClickMeeting, YouTube), monetyzacja, benchmarki i koszty organizacji."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/webinar-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Monitor className="w-4 h-4" /> Marketing i edukacja online</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Webinar — co to jest i jak zorganizowac od zera?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Webinar to szkolenie przez internet docierajace do setek osob bez kosztow lokalu.
                Jak zorganizowac, najlepsze platformy, monetyzacja i benchmarki.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Porownanie platform do webinarow</h2>
              <div className="space-y-2 mb-6">
                {webinarPlatforms.map((p, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm">{p.platforma}</p>
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${p.typ === 'Darmowa' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{p.typ}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-1">{p.opis}</p>
                    <p className="text-slate-500 text-xs">+ {p.plusy}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz landing page dla webinaru?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Dobra strona zapisu na webinar zwieksza konwersje o 50-200%. Tworzymy strony zoptymalizowane pod rejestracje.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Webinar co to jest</h2>
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
          heading="Zbuduj strone do rejestracji na webinar ktora konwertuje"
          subheading="Landing page z formularzem, SEO i integracja z narzedziem webinarowym — wszystko w jednym."
        />
      </Layout>
    </>
  );
}
