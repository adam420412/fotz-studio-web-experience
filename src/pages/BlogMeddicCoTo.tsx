import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest MEDDIC?",
    answer:
      "MEDDIC to framework kwalifikacji szans sprzedażowych w B2B, stworzony przez Dicka Dunkel i Jacka Napoli w PTC Corporation w latach 90. Akronim: Metrics (wymierne korzyści), Economic Buyer (decydent finansowy), Decision Criteria (kryteria decyzji), Decision Process (proces decyzyjny), Identify Pain (identyfikacja bólu), Champion (wewnętrzny obrońca). MEDDIC pomaga handlowcom skupić się na dealach z wysokim prawdopodobieństwem wygranej i unikać tracenia czasu na nierealne szanse.",
  },
  {
    question: "Czym różni się MEDDIC od BANT?",
    answer:
      "BANT (Budget, Authority, Need, Timeline) to prostszy, starszy framework kwalifikacji z IBM. BANT jest zbyt uproszczony dla złożonej sprzedaży B2B enterprise: skupia się tylko na tym czy klient MA budżet (a nie czy go STWORZY), ignoruje wewnętrzną dynamikę decyzji, nie bada konkretnych metryk ROI. MEDDIC jest głębszy: bada KTO jest decydentem, JAKI jest proces decyzyjny, jakie są mierzalne korzyści i czy masz wewnętrznego obrońcę (Champion). Dla enterprise sales MEDDIC jest znacznie skuteczniejszy.",
  },
  {
    question: "Kim jest Champion w metodologii MEDDIC?",
    answer:
      "Champion (obrońca/mistrz) to wewnętrzna osoba w organizacji klienta, która aktywnie wspiera Twoje rozwiązanie, ma dostęp do decydenta i jest osobiście zmotywowana do sukcesu projektu. Champion ≠ Contact (osoba z którą rozmawiasz). Cechy prawdziwego Championa: ma dostęp i wpływ na decydenta, rozumie wartość dla siebie i organizacji (personal win), aktywnie promuje Twoje rozwiązanie wewnętrznie, udostępnia informacje o wewnętrznym procesie decyzyjnym. Bez Championa w enterprise deals — ryzyko jest bardzo wysokie.",
  },
  {
    question: "Jak MEDDIC pomaga w prognozowaniu sprzedaży?",
    answer:
      "MEDDIC poprawia jakość prognoz bo wymagana kompletność kryteriów per deal. Deal który przeszedł do kolejnego etapu bez zidentyfikowanego Economic Buyer lub bez jasnych Decision Criteria — jest wyjęty z Commit i trafia do Pipeline/Best Case. Handlowcy oceniają każdy deal wg checklisty MEDDIC (0-6 punktów) — wyższy score = wyższe prawdopodobieństwo. Firmy używające MEDDIC raportują o 20-30% wyższy Win Rate i 15-25% krótszy Sales Cycle przez szybszą eliminację długich, nierealistycznych dealów.",
  },
  {
    question: "Co to jest MEDDICC i MEDDPICC?",
    answer:
      "MEDDICC dodaje do MEDDIC literę C (Competition) — identyfikacja konkurencji z którą walczysz i Twoje pozycjonowanie względem niej. MEDDPICC dodaje P (Paper Process) — formalny proces zakupowy klienta: kto podpisuje kontrakt, jaki jest legal review, procurement, security review, ile to zajmuje. MEDDPICC jest najczęściej stosowany w bardzo złożonej sprzedaży enterprise gdzie procurement i legal mogą zablokować deal nawet po decyzji biznesowej. Im większy deal, tym ważniejszy Paper Process.",
  },
];

const meddicFramework = [
  {
    litera: "M",
    pojęcie: "Metrics",
    pytanie: "Co zmieniamy mierzalnie?",
    opis: "Wymierne, ilościowe korzyści które klient osiągnie dzięki Twojemu rozwiązaniu. Podstawa ROI i business case.",
    przykłady: ["Zmniejszenie kosztów obsługi o 40%", "Skrócenie time-to-market o 3 miesiące", "Wzrost konwersji o 15%", "Oszczędność 200h/miesiąc pracy manualnej"],
    pytaniaKwalif: ["Jaki jest obecny koszt problemu który rozwiązujesz?", "Jak mierzycie sukces wdrożenia?", "Jaki ROI jest minimalny do akceptacji projektu?"],
    kolor: "bg-blue-600",
  },
  {
    litera: "E",
    pojęcie: "Economic Buyer",
    pytanie: "Kto kontroluje budżet?",
    opis: "Osoba z final authority do zatwierdzenia wydatku i podpisania kontraktu. Często nie jest Twoim codziennym kontaktem.",
    przykłady: ["CFO (koszty > 100K)", "VP Engineering (technologia)", "CEO (strategiczne projekty)", "Dyrektor operacyjny (procesy)"],
    pytaniaKwalif: ["Kto zatwierdza wydatki tej wielkości?", "Czy Twój kontakt rozmawiał z EB o projekcie?", "Czy EB jest zaangażowany w projekt?"],
    kolor: "bg-purple-600",
  },
  {
    litera: "D",
    pojęcie: "Decision Criteria",
    pytanie: "Jak będą oceniać rozwiązania?",
    opis: "Formalne i nieformalne kryteria według których klient będzie oceniał i porównywał rozwiązania. Twój produkt powinien wygrywać na kluczowych kryteriach.",
    przykłady: ["Integracja z SAP (wymagana)", "TCO poniżej 50K/rok", "Certyfikat ISO 27001", "Referencje z branży"],
    pytaniaKwalif: ["Jak będziecie oceniać rozwiązania?", "Jakie są obowiązkowe wymagania (must-have)?", "Kto zdefiniował te kryteria?"],
    kolor: "bg-green-600",
  },
  {
    litera: "D",
    pojęcie: "Decision Process",
    pytanie: "Jak wygląda proces decyzyjny?",
    opis: "Kroki i osoby zaangażowane w podjęcie decyzji: kto ocenia, kto rekomenduje, kto podpisuje. Daty kluczowych kamieni milowych.",
    przykłady: ["Demo → Pilot (30 dni) → RFP → Legal → Podpis", "Komitet zakupowy spotyka się co 2 tygodnie", "Budżet musi być zatwierdzony do końca Q3"],
    pytaniaKwalif: ["Jakie kroki pozostały do podjęcia decyzji?", "Kiedy planujecie podjąć decyzję?", "Kto jeszcze musi dać ok?"],
    kolor: "bg-orange-600",
  },
  {
    litera: "I",
    pojęcie: "Identify Pain",
    pytanie: "Jaki ból biznesowy rozwiązujesz?",
    opis: "Konkretny, bolesny problem biznesowy który motywuje klienta do działania. Ból musi być wystarczająco dotkliwy by uzasadnić inwestycję i zmianę.",
    przykłady: ["Tracą 500K PLN/rok na błędy manualne", "Nie mogą skalować bez 5x wzrostu zatrudnienia", "Compliance risk — kary regulatora"],
    pytaniaKwalif: ["Co się stanie jeśli nic nie zmienią?", "Jak długo problem już trwa?", "Kto w organizacji najbardziej odczuwa ten ból?"],
    kolor: "bg-red-600",
  },
  {
    litera: "C",
    pojęcie: "Champion",
    pytanie: "Kto Cię broni wewnątrz?",
    opis: "Wewnętrzna osoba przekonana do Twojego rozwiązania, mająca dostęp do decydenta i motywację do sukcesu projektu. Twoje oczy i uszy w organizacji klienta.",
    przykłady: ["Dyrektor IT który widzi awans po sukcesie wdrożenia", "Menedżer który cierpi na ból który rozwiązujesz", "Ktoś kto korzystał z Twojego rozwiązania w poprzedniej firmie"],
    pytaniaKwalif: ["Czy Twój kontakt jest prawdziwym Championem czy tylko Sponsorem?", "Czy Champion ma dostęp do EB?", "Co Champion osobiście zyska na sukcesie projektu?"],
    kolor: "bg-teal-600",
  },
];

const meddicVsBant = [
  { aspekt: "Decydent", meddic: "Economic Buyer — kto MA authority, nie kto SIĘ spotyka", bant: "Authority — czy Twój kontakt ma authority? (często overestimated)" },
  { aspekt: "Budżet", meddic: "Metrics → ROI uzasadnia STWORZENIE budżetu", bant: "Budget — czy MA budżet (pasywne)" },
  { aspekt: "Proces", meddic: "Decision Process — szczegółowy mapa kroków, dat, osób", bant: "Timeline — kiedy chcą kupić (niewystarczające)" },
  { aspekt: "Ból", meddic: "Identify Pain — konkretny, mierzalny ból biznesowy", bant: "Need — ogólna potrzeba (zbyt płytkie)" },
  { aspekt: "Obrońca", meddic: "Champion — wewnętrzny obrońca z dostępem do decydenta", bant: "Brak wymagania obrońcy" },
  { aspekt: "Głębokość", meddic: "Enterprise, złożona sprzedaż B2B, duże deale (100K+)", bant: "SMB, transakcyjna sprzedaż, krótki cykl" },
];

const dealScoring = [
  { etap: "0-2 elementy MEDDIC", ocena: "Słaby deal", działanie: "Zdyskwalifikuj lub intensywne odkrywanie. Nie progresuj w CRM." },
  { etap: "3-4 elementy MEDDIC", ocena: "Średni deal", działanie: "Kontynuuj ale uzupełnij braki. Wymagaj spotkania z EB." },
  { etap: "5 elementów MEDDIC", ocena: "Dobry deal", działanie: "Progresuj. Upewnij się że Champion ma plan wewnętrzny." },
  { etap: "6/6 elementów MEDDIC", ocena: "Silny deal", działanie: "Priorytet! Zmapuj ryzyka i stwórz mutual close plan." },
];

export default function BlogMeddicCoTo() {
  return (
    <Layout>
      <SEOHead
        title="MEDDIC — co to jest? Framework kwalifikacji sprzedaży B2B"
        description="MEDDIC — definicja, 6 elementów (Metrics, Economic Buyer, Decision Criteria, Decision Process, Pain, Champion), porównanie z BANT i deal scoring…"
        canonicalUrl="https://fotz.pl/blog/meddic-kwalifikacja-sprzedazy-b2b"

        keywords="MEDDIC co to jest, MEDDIC definicja, czym jest MEDDIC, MEDDIC w sprzedaży, MEDDIC strategia, MEDDIC przykłady, jak używać MEDDIC"

        canonical="https://fotz.pl/blog/meddic-kwalifikacja-sprzedazy-b2b"
      />
      <ArticleSchema
        title="MEDDIC — co to jest i jak kwalifikować szanse sprzedażowe B2B?"
        description="Kompletny przewodnik po MEDDIC: 6 elementów, porównanie z BANT, MEDDICC/MEDDPICC i deal scoring."
        url="https://fotz.pl/blog/meddic-kwalifikacja-sprzedazy-b2b"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "MEDDIC", url: "https://fotz.pl/blog/meddic-kwalifikacja-sprzedazy-b2b" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "MEDDIC" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            MEDDIC — co to jest i jak kwalifikować deale B2B?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            MEDDIC to najskuteczniejszy framework kwalifikacji w enterprise sales.
            Poznaj 6 elementów, pytania kwalifikacyjne i jak scoring poprawia Win Rate.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest MEDDIC?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>MEDDIC</strong> to framework kwalifikacji szans sprzedażowych w B2B, stworzony
              przez Dicka Dunkel i Jacka Napoli w PTC Corporation. Każda litera oznacza kluczowy
              obszar który handlowiec musi zbadać, by ocenić realność deala.
            </p>
            <div className="grid grid-cols-6 gap-2 mb-6">
              {["M", "E", "D", "D", "I", "C"].map((l, i) => (
                <div key={i} className={`${meddicFramework[i].kolor} text-white rounded-xl p-4 text-center`}>
                  <p className="text-3xl font-bold">{l}</p>
                  <p className="text-xs mt-1 opacity-90">{meddicFramework[i].pojęcie.split(" ")[0]}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "+25%", opis: "Wyższy Win Rate u firm stosujących MEDDIC vs tradycyjne metody kwalifikacji" },
                { stat: "20%", opis: "Krótszy Sales Cycle przez szybkie eliminowanie nierealistycznych szans sprzedażowych" },
                { stat: "PTC", opis: "Firma gdzie powstało MEDDIC — PTC Corporation. Metodologia skalowała ich przychody do 1B USD" },
              ].map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-slate-700 mb-2">{s.stat}</p>
                  <p className="text-slate-500 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 elementów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 elementów MEDDIC — szczegółowo</h2>
            <div className="space-y-5">
              {meddicFramework.map((el, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${el.kolor} text-white rounded-xl flex flex-col items-center justify-center flex-shrink-0`}>
                      <span className="text-xl font-bold">{el.litera}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-slate-900 text-lg">{el.pojęcie}</h3>
                        <span className="text-sm text-slate-400 italic">{el.pytanie}</span>
                      </div>
                      <p className="text-slate-600 mb-3">{el.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-slate-50 rounded p-3">
                          <p className="text-xs font-semibold text-slate-500 mb-2">Przykłady:</p>
                          <ul className="space-y-1">
                            {el.przykłady.map((ex, j) => (
                              <li key={j} className="text-sm text-slate-600">• {ex}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-orange-50 rounded p-3">
                          <p className="text-xs font-semibold text-orange-600 mb-2">Pytania kwalifikacyjne:</p>
                          <ul className="space-y-1">
                            {el.pytaniaKwalif.map((q, j) => (
                              <li key={j} className="text-sm text-orange-800">• {q}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* MEDDIC vs BANT */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">MEDDIC vs BANT — porównanie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Aspekt</th>
                    <th className="p-3 text-left">MEDDIC</th>
                    <th className="p-3 text-left">BANT</th>
                  </tr>
                </thead>
                <tbody>
                  {meddicVsBant.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-700">{row.aspekt}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.meddic}</td>
                      <td className="p-3 text-slate-500 text-sm">{row.bant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Deal Scoring */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Deal Scoring wg MEDDIC</h2>
            <div className="space-y-3">
              {dealScoring.map((ds, i) => (
                <div key={i} className={`rounded-xl p-5 border ${i === 0 ? "bg-red-50 border-red-200" : i === 1 ? "bg-yellow-50 border-yellow-200" : i === 2 ? "bg-blue-50 border-blue-200" : "bg-green-50 border-green-200"}`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${i === 0 ? "bg-red-100 text-red-700" : i === 1 ? "bg-yellow-100 text-yellow-700" : i === 2 ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>{ds.ocena}</span>
                    <h3 className="font-bold text-slate-800">{ds.etap}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mt-2"><strong>Działanie:</strong> {ds.działanie}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — MEDDIC</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
