import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart2, Target, CheckCircle2, Zap } from "lucide-react";
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

export default function BlogABTestingCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "A/B testing — co to jest? Testy A/B w marketingu" },
  ];

  const abTestElements = [
    { element: "Naglowek (H1)", opis: "Naglowek jest pierwszym co czyta uzytkownik — zmiana z 'Sprawdz naszq oferte' na 'Zwieksz sprzedaz o 47%' moze podniesc konwersje o 30-90%.", priorytet: "Bardzo wysoki" },
    { element: "CTA (button)", opis: "Tekst, kolor i rozmiar przycisku CTA. 'Wyslij' vs 'Zdobadz bezplatna wycene'. Kolor czerwony vs zielony.", priorytet: "Bardzo wysoki" },
    { element: "Formularz kontaktowy", opis: "Liczba pol, kolejnosc, placeholder tekst. Redukcja pol o 2-3 moze podwoic konwersje.", priorytet: "Wysoki" },
    { element: "Obrazki i wideo", opis: "Foto produktu vs model uzywajacy produktu vs wideo demonstracyjne.", priorytet: "Wysoki" },
    { element: "Cena i pakietowanie", opis: "Miesiecznie vs rocznie, kolejnosc planow, wyroznienie jednego planu.", priorytet: "Sredni" },
    { element: "Social proof", opis: "Opinie klientow, logo firm, liczby (n+ klientow, n lat doswiadczenia).", priorytet: "Sredni" },
  ];

  const faqItems = [
    {
      question: "Co to jest A/B testing?",
      answer:
        "A/B testing (test A/B, split testing) to metoda eksperymentalna polegajaca na porownaniu dwoch wersji strony, emaila, reklamy lub innego elementu (wersja A = kontrolna, wersja B = testowa) w celu ustalenia ktora wersja lepiej realizuje zamierzony cel (konwersja, klikniecia, zapisy). Polowa uzytkownikow widzi wersje A, polowa wersje B — na koniec analizuje sie ktora dala lepsze wyniki. A/B testy sa podstawa optymalizacji konwersji (CRO) i pozwalaja podejmowac decyzje oparte na danych zamiast zgadywania. Przyklad: zmieniasz kolor przycisku CTA z szarego na niebieski i mierzysz czy konwersja wzrosla.",
    },
    {
      question: "Jak przeprowadzic test A/B?",
      answer:
        "Proces A/B testu krok po kroku: 1) Zidentyfikuj element do testowania — wybierz jedno miejsce gdzie jest problem (niska konwersja formularza, niski CTR CTA). 2) Sformuluj hipoteze — 'Zmiana tekstu CTA z Wyslij na Zdobadz wycene zwieksz konwersje o 20%'. 3) Stworz wariant B — zmien tylko JEDEN element (zasada jednej zmiennej). 4) Ustal kryterium sukcesu — np. wspolczynnik konwersji. 5) Oblicz potrzebna probe — minimalnie 100+ konwersji na wariant dla statystycznej istotnosci. 6) Uruchom test na oba warianty jednoczesnie. 7) Poczekaj na wyniki (min. 1-2 tygodnie, min. 100 konwersji na wariant). 8) Przeanalizuj wyniki — czy roznica jest statystycznie istotna (p < 0,05). 9) Wdrozono wygrzana wersje i testuj nastepny element.",
    },
    {
      question: "Jakie narzedzia do A/B testow?",
      answer:
        "Narzedzia do A/B testowania: Dla stron internetowych: Google Optimize (zakonczono w 2023), VWO (Visual Website Optimizer) — od 49 USD/mies., Optimizely — enterprise, od 50 000 USD/rok, AB Tasty — od 1 500 EUR/rok. Dla email marketingu: Mailchimp (wbudowany A/B test), Klaviyo, ActiveCampaign. Dla reklam: Google Ads (eksperymenenty kampanii), Meta Ads (A/B test kreacji). Bezplatne alternatywy: Statsig (freemium), GrowthBook (open source, self-hosted). Dla stron WordPress: Nelio A/B Testing (plugin). Minimum aby testowac: narzedzie analityczne (GA4) + narzedzie do testow (VWO lub Optimize) + wystarczajacy ruch (min. 1000 sesji/mies. aby testy mialy sens).",
    },
    {
      question: "Czym rozni sie test A/B od testu wielowymiarowego (MVT)?",
      answer:
        "A/B test vs Multivariate Testing (MVT): A/B test — testuje jeden element na raz (np. kolor przycisku). Prosta, szybka analiza. Wymaga mniejszego ruchu. Polecany dla wiekszosci firm. MVT (Multivariate Testing) — testuje kombinacje wielu elementow jednoczesnie (np. 3 naglowki x 2 obrazy x 2 CTA = 12 kombinacji). Wymaga znacznie wiekszego ruchu (10x wiecej niz A/B). Pozwala znalezc najlepsza kombinacje, ale jest skomplikowany. Dla kogo MVT: duze serwisy e-commerce (Amazon, Zalando) z milionami sesji. Rekomendacja dla MŚP: zacznij od A/B testow, MVT po przejsciu 100 000+ sesji/mies.",
    },
    {
      question: "Jak dlugo trwa test A/B i ile ruchu potrzeba?",
      answer:
        "Czas trwania i wielkosc proby: Minimalna wielkosc proby: zazwyczaj 100+ konwersji na wariant (A i B razem 200+ konwersji). Kalkulator proby: statisticallysignificant.com lub narzedzia VWO — wpisz bazowy wspolczynnik konwersji i oczekiwany wzrost. Minimalny czas testu: 1-2 tygodnie (aby uwzglednic wahania tygodniowe). Nigdy nie konc testu wcze-snie bo 'B wyglada na lepsze' — to blad poznawczy (peaking). Maksymalny czas testu: 4-8 tygodnie (dluzej = ryzyko efektow sezonowych). Przy malym ruchu (< 500 sesji/mies.): A/B testy moga trwac miesiacami i dawac nieistotne wyniki — skupsie na zmianach jaksociowych (user research, heatmapy) zamiast testow statystycznych.",
    },
    {
      question: "Co testowac jako pierwsze na stronie?",
      answer:
        "Priorytety A/B testow na stronie: Zacznij od elementow o duzym wplywie i duzym ruchu: 1) Naglowek na stronie glownej lub landingu — pierwsza rzecz ktora widzi uzytkownik. 2) CTA (tekst i kolor przycisku) — bezposredni wplyw na konwersje. 3) Formularz kontaktowy — liczba pol i ich kolejnosc. 4) Hero sekcja — zdjecie/wideo, layout. 5) Propozycja wartosci — jak opisujesz co robisz i dla kogo. Nie testuj: drobnych zmian typografii (zbyt maly wplyw), na podstronach z malym ruchem (brak istotnosci statystycznej). Dobry framework: PIE (Potential, Importance, Ease) lub ICE (Impact, Confidence, Ease) do priorytetyzacji co testowac.",
    },
  ];

  return (
    <>
      <SEOHead
        title="A/B testing — co to jest? Testy A/B w marketingu | fotz.pl"
        description="A/B testing co to jest — wyjasnamy czym sa testy A/B, jak je przeprowadzic, narzedzia, czas trwania i co testowac pierwszo na stronie internetowej."
        canonical="https://fotz.pl/blog/ab-testing-co-to"
      />
      <ArticleSchema
        title="A/B testing — co to jest? Testy A/B w marketingu"
        description="Czym jest A/B testing (split testing), jak przeprowadzic test, narzedzia, MVT vs A/B, czas trwania, wielkosc proby i co testowac na stronie."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/ab-testing-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Optymalizacja konwersji</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                A/B testing — co to jest i jak zwiekszyc konwersje?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Test A/B to porownanie dwoch wersji strony lub reklamy, by znalezc co konwertuje lepiej.
                Jak przeprowadzic, co testowac i jakie narzedzia uzywac.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Co testowac na stronie — priorytety</h2>
              <div className="space-y-2 mb-6">
                {abTestElements.map((e, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm">{e.element}</p>
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${e.priorytet === 'Bardzo wysoki' ? 'bg-red-100 text-red-700' : e.priorytet === 'Wysoki' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`}>{e.priorytet}</span>
                    </div>
                    <p className="text-slate-600 text-xs">{e.opis}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Testuj strone zaprojektowana z myslaa o konwersji</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony gotowe pod A/B testy — z czytelna architektura i elementami latwa do testowania i optymalizacji.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — A/B testing co to jest</h2>
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
          heading="Zwiekszamy konwersje Twoich stron przez UX i testy"
          subheading="Projektujemy strony i pomagamy je optymalizowac — od A/B testow po pelnq optymalizacje konwersji."
        />
      </Layout>
    </>
  );
}
