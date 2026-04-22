import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, TrendingUp, CheckCircle2, Zap } from "lucide-react";
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

export default function BlogFaktoringCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Faktoring — co to jest? Rodzaje i jak dziala" },
  ];

  const faktoringTypes = [
    { typ: "Faktoring pelny (bez regresu)", desc: "Faktor przejmuje ryzyko niewyplacalnosci dluznika. Kosztowniejszy, ale daje pelne zabezpieczenie. Dobry gdy kontrahent jest nieznany lub malo wiarygodny." },
    { typ: "Faktoring niepelny (z regresem)", desc: "Przy nieplaceniu przez dluznika, faktor moze zadac zwrotu zaliczki od faktoranta (Ciebie). Tanszy, ale nie chroni przed ryzykiem niewyplacalnosci." },
    { typ: "Faktoring jawny (otwarty)", desc: "Dluznik jest informowany o cesji wierzytelnosci na faktora. Najczestszy model — kontrahent placi bezposrednio do faktora." },
    { typ: "Faktoring cichy (tajny)", desc: "Dluznik nie wie o cesji — dalej placi Tobie, a Ty przekazujesz pieniadze do faktora. Drogi i rzadko stosowany." },
    { typ: "Faktoring odwrotny (zakupowy)", desc: "Faktor splaaca faktury od Twoich dostawcow, a Ty splacasz do faktora z dluzszym terminem. Poprawia plynnosc przy zakupach." },
    { typ: "Mikrofaktoring / faktoring online", desc: "Dla MŚP i freelancerow — factoring pojedynczych faktur przez internet, czesto w 24h. Przyklady: eFaktor, NFG, PragmaGO." },
  ];

  const faqItems = [
    {
      question: "Co to jest faktoring?",
      answer:
        "Faktoring to usluga finansowa, w ktorej firma (faktorant) sprzedaje swoje nieprzeterminowane wierzytelnosci handlowe (faktury z odroczonym terminem platnosci) firmie faktoringowej (faktorowi) w zamian za natychmiastowa wyplate wiekszosci wartosci faktury (zazwyczaj 80-90%). Faktor zajmuje sie nastepnie sciagnieciem naleznosci od dluznika (kontrahenta faktoranta). Kiedy stosowac: masz faktury z odroczonym terminem platnosci (30, 60, 90 dni) i potrzebujesz gotowki juz teraz. Faktoring jest alternatywa dla kredytu obrotowego i pomaga utrzymac plynnosc finansowa bez zacigania dlugu.",
    },
    {
      question: "Jak dziala faktoring krok po kroku?",
      answer:
        "Proces faktoringu: 1) Wystawiasz fakture kontrahentowi z terminem platnosci np. 60 dni. 2) Przesylasz fakture do faktora (firmy faktoringowej). 3) Faktor wyplaca Ci zaliczke — zazwyczaj 80-90% wartosci faktury w ciagu 24-48h. 4) Kontrahent placi fakture w terminie — ale juz bezposrednio do faktora (faktoring jawny). 5) Faktor wyplaca Ci pozostale 10-20% po pomniejszeniu o swoja prowizje i odsetki. Koszt faktoringu: prowizja faktora 0,2-2% wartosci faktury + odsetki za finansowanie (~WIBOR + marza). Calkowity koszt w skali roku: 5-15% w zaleznosci od faktora i ryzyka.",
    },
    {
      question: "Czym rozni sie faktoring od kredytu?",
      answer:
        "Faktoring vs kredyt obrotowy: Faktoring — nie jest kredytem, nie pojawia sie jako zadluzenie w BIK. Finansowanie oparte na fakturach (nie na historii kredytowej). Szybsza dostepnosc, mniej formalnosci. Koszt uzalezniony od wartosci faktur. Kredyt obrotowy — zadluzenie w BIK, wymaga dobrej historii kredytowej i zabezpieczen. Dluzsza procedura. Stala linia kredytowa do dyspozycji. Kiedy faktoring wygrywa: brak historii kredytowej, mloda firma, zle BIK, faktury od duzych kontrahentow, szybka potrzeba gotowki. Kiedy kredyt wygrywa: duze jednorazowe potrzeby, nizsze oprocentowanie dla firm z historia, elastycznosc wykorzystania.",
    },
    {
      question: "Ile kosztuje faktoring?",
      answer:
        "Koszty faktoringu: Prowizja faktorowa: 0,2-2% wartosci faktury. Odsetki za finansowanie: zazwyczaj WIBOR 1M + marza (marza 2-6%). Oplata za przystapienie: 0-2 000 zl (czesto brak). Ubezpieczenie (w faktoringu pelnym): dodatkowy koszt. Przyklad obliczenia: Faktura 100 000 zl, termin 60 dni. Prowizja 0,5% = 500 zl. Odsetki (8% rocznie / 6) = ok. 1 333 zl. Razem koszt: ok. 1 833 zl, czyli ok. 1,83% wartosci faktury. Efektywne oprocentowanie roczne: ok. 11%. Porownanie: kredyt obrotowy 9-13%, faktoring 8-15%. Dla malych firm mikrofaktoring moze byc drozszy (2-4% prowizji).",
    },
    {
      question: "Dla kogo faktoring jest najbardziej korzystny?",
      answer:
        "Faktoring sprawdza sie szczegolnie dla: Firm B2B wystawiajacych faktury z odroczonym terminem platnosci. Firm z sezonowoscia przychodow — mozna finansowac szczyty produkcji. Mlodych firm bez historii kredytowej w BIK. Firm z dlugimi lancuchami dostaw — faktoring odwrotny. Eksporterow — faktoring miedzynarodowy pozwala otrzymac pieniadze szybko. Branze popularne: budownictwo (dlugie terminy platnosci od generalnych wykonawcow), transport i logistyka, agencje marketingowe (rozliczenia z duzymi klientami), handel hurtowy. Faktoring mniej oplacalny: firmy B2C (brak faktur z odroczeniem), bardzo male kwoty faktur (prowizje min. moga byc relatywnie duze).",
    },
    {
      question: "Jakie firmy faktoringowe dzialaja w Polsce?",
      answer:
        "Glowne firmy faktoringowe w Polsce (2024): Duzi faktorzy bankowi: PKO Faktoring, BNP Paribas Faktoring, Santander Faktoring, Pekao Faktoring, mBank Faktoring — dobre warunki dla wiekszych firm. Niezalezne firmy faktoringowe: Bibby Financial Services, SMEO, Alektum Capital. Mikrofaktoring online (dla MŚP): eFaktor (efaktor.pl), NFG (Narodowy Fundusz Gwarancyjny), PragmaGO, Finiata — szybkie procesy, mniej formalnosci. Porownywarka faktorow: rankingi dostepne na portalach finansowych — warto porownac koszty dla swojego przypadku. Kryteria wyboru: stawki prowizji i odsetek, szybkosc wyplaty, limit faktoringowy, rodzaj faktoringu (pelny/niepelny).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Faktoring — co to jest? Jak dziala i ile kosztuje | fotz.pl"
        description="Faktoring co to jest — wyjasnamy czym jest faktoring, jak dziala, rodzaje faktoringu, koszty i jak porownac z kredytem obrotowym dla MŚP."
        canonical="https://fotz.pl/blog/faktoring-co-to-jest"

        keywords="Faktoring co to jest, Faktoring definicja, czym jest Faktoring, Faktoring przykłady, jak działa Faktoring, Faktoring znaczenie, Faktoring przewodnik"
      />
      <ArticleSchema
        title="Faktoring — co to jest? Jak dziala i ile kosztuje"
        description="Czym jest faktoring, jak dziala krok po kroku, rodzaje faktoringu, koszty, faktoring vs kredyt i dla kogo jest najbardziej korzystny."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/faktoring-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Finansowanie firm</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Faktoring — co to jest i jak poprawia plynnosc finansowa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Faktoring to sprzedaz faktur z odroczonym terminem platnosci za natychmiastowa gotowke.
                Rodzaje, koszty i jak porownac faktoring z kredytem obrotowym.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje faktoringu</h2>
              <div className="space-y-3 mb-6">
                {faktoringTypes.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <DollarSign className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{f.typ}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak dziala faktoring — przyklad liczbowy</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Faktura 50 000 zl, termin 60 dni</p>
                <div className="space-y-1 text-slate-300">
                  <p>Wartosc faktury:     <span className="text-white">50 000 zl</span></p>
                  <p>Zaliczka (85%):      <span className="text-green-400">42 500 zl</span> (w 24h)</p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p className="text-yellow-400">Po splacie przez dluznika:</p>
                    <p>Pozostale 15%:    <span className="text-white">7 500 zl</span></p>
                    <p>Minus prowizja (0,5%): <span className="text-red-400">- 250 zl</span></p>
                    <p>Minus odsetki (7%/6): <span className="text-red-400">- 583 zl</span></p>
                  </div>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p className="text-green-400">Wyplata koncowa: 6 667 zl</p>
                    <p className="text-slate-400">Calkowity koszt: 833 zl (1,67%)</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Popraw plynnosc finansowa przez wiecej klientow</p>
                <p className="text-blue-700 text-sm mb-3">
                  Dobrze zoptymalizowana strona internetowa przynosi nowych klientow — mniej zaleznos od termynow platnosci.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Faktoring co to jest</h2>
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
