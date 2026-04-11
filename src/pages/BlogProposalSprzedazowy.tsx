import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest proposal sprzedażowy?",
    answer: "Proposal sprzedażowy (oferta handlowa) to formalny dokument przedstawiający rozwiązanie, jego wartość biznesową i warunki handlowe dla konkretnego potencjalnego klienta. Dobry proposal nie jest generycznym cennikiem — jest spersonalizowanym dokumentem, który podsumowuje rozumienie sytuacji klienta, proponuje konkretne rozwiązanie i uzasadnia jego wartość przez ROI. Proposal jest wysyłany po Discovery, gdy zrozumiano potrzeby klienta — nie na zimno. Przedwczesny proposal (przed Discovery) jest jednym z najczęstszych błędów w sprzedaży B2B.",
  },
  {
    question: "Jak zbudować skuteczny proposal?",
    answer: "Struktura skutecznego proposalu: Executive Summary — krótkie (1 strona) dla Economic Buyera: problem, rozwiązanie, ROI. Sytuacja i ból klienta — pokaż że słuchałeś Discovery (spersonalizowane, nie generyczne). Proponowane rozwiązanie — jak Twój produkt adresuje konkretne problemy klienta. Wyniki i dowody — case studies podobnych firm, ROI kalkulacja, referencje. Zakres i etapy wdrożenia — co, kiedy, jak. Inwestycja (pricing) — jasna i uzasadniona wartością. Następne kroki — konkretna akcja, termin odpowiedzi.",
  },
  {
    question: "Jak zaprezentować proposal, żeby nie trafił do szuflady?",
    answer: "Prezentacja proposalu zamiast wysłania PDF: Nigdy nie wysyłaj proposalu bez spotkania (walk-through) — klient nie przeczyta, nie zrozumie wartości, nie będzie miał szansy na pytania. Zaplanuj walk-through meeting z kluczowymi stakeholderami. Prowadź przez proposal sekcja po sekcji, zatrzymując się na pytania. Podkreśl executive summary dla EB. Zamknij meeting konkretnym następnym krokiem i terminem decyzji. Jeśli klient odmawia spotkania i prosi tylko o PDF — to red flag wskazujący brak zaangażowania.",
  },
  {
    question: "Jak adresować cenę w propozycji?",
    answer: "Pricing w propozycji: Umieść cenę po uzasadnieniu wartości — nigdy na początku. Pokaż ROI przed ceną: 'Przy oszczędności X i wzroście Y, roczna wartość to Z. Inwestycja to...' Opcje tiers (Good/Better/Best) zwiększają konwersję bo dają klientowi wybór, a nie decyzję kupić/nie kupić. Unikaj zbyt dużych arkuszy z wieloma liniami — prosty, czytelny pricing table. Jeśli rabatowanie jest możliwe — nie rób tego w propozycji od razu. Zarezerwuj jako kartę przetargową w negocjacjach.",
  },
  {
    question: "Co zrobić gdy klient nie odpowiada na proposal?",
    answer: "Follow-up po propozycji: Wyślij reminder po 2-3 dniach roboczych z konkretnym pytaniem: 'Czy miałeś szansę przejrzeć propozycję? Jakie masz pytania?' Po tygodniu bez odpowiedzi — zadzwoń. Nie wysyłaj kolejnych emaili bez telefonu. Zaproponuj krótkie 15-min Q&A call. Jeśli nadal brak odpowiedzi po 2 tygodniach — wyślij break-up email: 'Rozumiem że priorytety mogą się zmieniać. Czy temat jest nadal aktualny?' Systematyczny brak odpowiedzi po propozycji sugeruje, że deal nie ma wewnętrznego championa lub był błędnie zakwalifikowany.",
  },
];

const proposalStructure = [
  {
    sekcja: "1. Executive Summary",
    cel: "Dla Economic Buyera — szybki przegląd wartości",
    zawartość: ["Problem klienta w 2-3 zdaniach", "Proponowane rozwiązanie", "Kluczowy ROI / wartość biznesowa", "Następny krok i termin"],
    długość: "1 strona",
    kolor: "purple",
  },
  {
    sekcja: "2. Sytuacja i wyzwania",
    cel: "Pokaż że słuchałeś i rozumiesz",
    zawartość: ["Kontekst biznesowy klienta", "Zidentyfikowane bóle i problemy", "Konsekwencje braku rozwiązania", "Priorytety i cele na nadchodzący rok"],
    długość: "1-2 strony",
    kolor: "blue",
  },
  {
    sekcja: "3. Proponowane rozwiązanie",
    cel: "Jak Twój produkt adresuje konkretne problemy",
    zawartość: ["Opis rozwiązania dostosowany do sytuacji klienta", "Które problemy rozwiązuje i jak", "Kluczowe funkcjonalności istotne dla klienta", "Opcje i warianty (jeśli dostępne)"],
    długość: "2-3 strony",
    kolor: "green",
  },
  {
    sekcja: "4. Wyniki i dowody",
    cel: "Zbuduj zaufanie przez dowody zewnętrzne",
    zawartość: ["Case study podobnej firmy (branża, rozmiar)", "Konkretne wyniki: X% poprawa, Y PLN oszczędności", "ROI kalkulacja dla klienta", "Referencje i testimoniale"],
    długość: "1-2 strony",
    kolor: "orange",
  },
  {
    sekcja: "5. Plan wdrożenia",
    cel: "Zredukuj perceived risk — pokaż jak to wygląda w praktyce",
    zawartość: ["Timeline wdrożenia (fazy, kamienie milowe)", "Zasoby wymagane po stronie klienta", "Wsparcie i onboarding", "SLA i warunki serwisu"],
    długość: "1 strona",
    kolor: "teal",
  },
  {
    sekcja: "6. Inwestycja i następne kroki",
    cel: "Jasne warunki i ścieżka do zamknięcia",
    zawartość: ["Pricing (tiers jeśli dostępne)", "Warunki płatności", "Oferta ważna do dnia...", "Konkretny następny krok i termin odpowiedzi"],
    długość: "1 strona",
    kolor: "gray",
  },
];

const proposalDos = [
  "Personalizuj — każda sekcja powinna nawiązywać do konkretnej sytuacji klienta",
  "Zacznij od Executive Summary — EB czyta tylko stronę 1",
  "Pokaż ROI przed ceną — wartość uzasadnia inwestycję",
  "Użyj tiers (Good/Better/Best) — daj klientowi wybór",
  "Zawsze presentuj przez walk-through meeting, nie sam PDF",
  "Ustal termin ważności oferty — motywuje do decyzji",
];

const proposalDonts = [
  "Nie wysyłaj proposalu przed Discovery — nie rozumiesz potrzeb",
  "Nie kopiuj generycznego szablonu bez personalizacji",
  "Nie chowaj ceny na końcu — ma być jasna, nie ukryta",
  "Nie wysyłaj proposalu jako 'zimny' PDF bez spotkania",
  "Nie prezentuj zbyt wielu opcji — max 3, inaczej paralysis of choice",
  "Nie zapomnij o follow-up — proposal bez followup to waste",
];

export default function BlogProposalSprzedazowy() {
  return (
    <Layout>
      <SEOHead
        title="Proposal sprzedażowy — jak pisać skuteczną ofertę B2B? | Fotz.pl"
        description="Proposal sprzedażowy B2B — struktura oferty handlowej, jak prezentować pricing, ROI i następne kroki. Kompletny przewodnik dla handlowców enterprise."
        canonicalUrl="https://fotz.pl/blog/proposal-sprzedazowy-oferta-handlowa-b2b"
      />
      <ArticleSchema
        title="Proposal sprzedażowy — jak pisać skuteczną ofertę B2B?"
        description="Kompletny przewodnik po propozycji handlowej B2B: struktura, pricing, ROI i jak prezentować ofertę."
        url="https://fotz.pl/blog/proposal-sprzedazowy-oferta-handlowa-b2b"
        datePublished="2024-02-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Proposal sprzedażowy", url: "https://fotz.pl/blog/proposal-sprzedazowy-oferta-handlowa-b2b" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Proposal sprzedażowy", href: "/blog/proposal-sprzedazowy-oferta-handlowa-b2b" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Proces Sprzedaży
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proposal sprzedażowy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Dobrze napisany proposal to nie dokument — to narzędzie sprzedaży.
              Spersonalizowany, skoncentrowany na wartości i wartości ROI proposal
              zwiększa win rate i skraca cykl decyzyjny.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Sekcji proposalu", value: "6" },
                { label: "Dos i Don'ts", value: "12" },
                { label: "Kluczowa zasada", value: "Walk-through" },
                { label: "Ważność oferty", value: "14–30 dni" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Struktura */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktura skutecznego proposalu — 6 sekcji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda sekcja ma konkretny cel i adresuje inną grupę stakeholderów.
              Economic Buyer czyta Executive Summary — User Buyer szczegóły wdrożenia.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {proposalStructure.map((s, i) => (
              <FadeInView key={s.sekcja}>
                <div className={`rounded-xl border-2 p-6 ${
                  s.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  s.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  s.kolor === "green" ? "border-green-200 bg-green-50" :
                  s.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  s.kolor === "teal" ? "border-teal-200 bg-teal-50" :
                  "border-gray-200 bg-gray-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      s.kolor === "purple" ? "bg-purple-600" :
                      s.kolor === "blue" ? "bg-blue-600" :
                      s.kolor === "green" ? "bg-green-600" :
                      s.kolor === "orange" ? "bg-orange-600" :
                      s.kolor === "teal" ? "bg-teal-600" :
                      "bg-gray-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-900">{s.sekcja}</h3>
                        <span className="text-xs bg-white/70 px-2 py-1 rounded text-gray-500">{s.długość}</span>
                      </div>
                      <p className="text-gray-500 text-sm italic mb-3">{s.cel}</p>
                      <ul className="space-y-1">
                        {s.zawartość.map((z) => (
                          <li key={z} className="flex gap-2 text-sm text-gray-700">
                            <span className={`flex-shrink-0 ${
                              s.kolor === "purple" ? "text-purple-500" :
                              s.kolor === "blue" ? "text-blue-500" :
                              s.kolor === "green" ? "text-green-500" :
                              s.kolor === "orange" ? "text-orange-500" :
                              s.kolor === "teal" ? "text-teal-500" :
                              "text-gray-500"
                            }`}>•</span>
                            {z}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Proposal — Dos and Don'ts</h2>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeInView>
              <div className="bg-white rounded-xl border-2 border-green-200 p-6">
                <h3 className="font-bold text-green-800 text-lg mb-4">Rób to</h3>
                <ul className="space-y-3">
                  {proposalDos.map((d, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-green-500 flex-shrink-0 font-bold">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
            <FadeInView>
              <div className="bg-white rounded-xl border-2 border-red-200 p-6">
                <h3 className="font-bold text-red-800 text-lg mb-4">Unikaj tego</h3>
                <ul className="space-y-3">
                  {proposalDonts.map((d, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-red-500 flex-shrink-0 font-bold">✗</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
