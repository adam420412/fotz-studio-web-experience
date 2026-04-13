import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest data room?",
    answer: "Data room (wirtualny data room, VDR) to bezpieczne, kontrolowane repozytorium dokumentów używane w transakcjach finansowych: rundach inwestycyjnych (seed, Series A/B/C), M&A (fuzje i przejęcia), due diligence, IPO. Data room zawiera wszystkie kluczowe dokumenty firmy — finansowe, prawne, techniczne, produktowe — które potencjalny inwestor lub kupujący musi przejrzeć przed podjęciem decyzji. Nowoczesne data roomy to platformy SaaS (Notion, Docsend, Datasite, Intralinks, Carta) z kontrolą dostępu, śledzeniem kto co przegląda (analytics) i watermarkowaniem dokumentów. Starsze data roomy to fizyczne pokoje z dokumentami — dziś prawie nieużywane.",
  },
  {
    question: "Co powinno znaleźć się w data room dla rundy inwestycyjnej?",
    answer: "Zawartość data room dla rundy inwestycyjnej: Dokumenty finansowe — P&L historyczny (2-3 lata lub od założenia), balance sheet, cash flow, monthly MRR/ARR bridge, cohort analysis, unit economics (CAC, LTV, payback period). Dokumenty prawne — certificate of incorporation, cap table (tabela udziałów), umowy z pracownikami, IP assignments, customer contracts (sample), NDAs, istniejące umowy inwestycyjne (term sheets, SAFEs, convertible notes). Produkt i technologia — opis architektury, stack technologiczny, roadmap, security/compliance (SOC2, GDPR). Sprzedaż i klienci — lista top klientów (zanonimizowana lub za NDA), churn analysis, pipeline breakdown. Zespół — org chart, CVs kluczowych osób, vesting schedule.",
  },
  {
    question: "Jak zorganizować data room?",
    answer: "Organizacja data room: Struktura folderów powinna być przewidywalna i logiczna. Typowa: 01_Company Overview, 02_Financials, 03_Legal, 04_Product_Technology, 05_Sales_Marketing, 06_Team, 07_Appendix. Naming convention — jasne nazwy plików z datą: 'MRR_Bridge_2024_Q4_v2.pdf'. Wersjonowanie — nie nadpisuj plików, dodaj nową wersję z numerem. Indeks — stwórz plik INDEX.pdf na początku z opisem zawartości. Kontrola dostępu — różni inwestorzy mogą widzieć różne warstwy (basic teaser vs. full DD). Watermarki — automatycznie dodawane przez VDR platformy. Analytics — monitoruj kto przeglądał co i jak długo.",
  },
  {
    question: "Jakie platformy data room wybrać?",
    answer: "Popularne platformy VDR: DocSend — popularne wśród startupów, proste, dobre analytics (kto oglądał slajdy), integracja z email. Koszt 45-250 USD/mies. Notion — nieformalny data room dla wczesnych etapów, brak zaawansowanego dostępu. Google Drive — darmowy, ale słaba kontrola dostępu i brak analytics. Nie polecane dla poważnych transakcji. Carta — najlepsze dla cap table management + data room w jednym, popularne w USA. Ansarada / Datasite / Intralinks — enterprise-grade VDR dla M&A i IPO, kosztują 1000-5000+ USD/mies ale mają zaawansowane funkcje. Dla Series A rekomendujemy DocSend lub dedykowany folder w Google Drive z ograniczonym dostępem.",
  },
  {
    question: "Kiedy przygotować data room?",
    answer: "Czas przygotowania data room: Nie czekaj aż inwestor poprosi — przygotuj data room zanim zaczniesz fundraising. Zebranie dokumentów, wyczyszczenie cap table, audyt umów zajmuje 2-6 tygodni. Idealny timeline: 6-8 tygodni przed startem fundraisingu zacznij kompletować. 4 tygodnie przed — zleć audyt prawny i finansowy. 2 tygodnie przed — załaduj do VDR i przetestuj dostęp. Na początku fundraisingu — udostępnij teaser layer (pitch deck + executive summary). Po initial interest — pełny dostęp do DD layer. Tip: możliwość szybkiego udostępnienia kompletnego data room wysyła silny sygnał profesjonalizmu i gotowości operacyjnej — inwestorzy to doceniają.",
  },
];

const dataRoomFolders = [
  {
    folder: "01 — Company Overview",
    zawartość: ["Pitch deck (najnowszy)", "Executive summary (2 strony)", "Company overview presentation", "Product demo video lub link"],
    kolor: "blue",
  },
  {
    folder: "02 — Financials",
    zawartość: ["P&L historyczny (miesięczny)", "MRR/ARR bridge i waterfall", "Cash flow statement", "Balance sheet", "Financial model (3-year projection)", "Unit economics (CAC, LTV, Payback)", "Cohort analysis"],
    kolor: "green",
  },
  {
    folder: "03 — Legal",
    zawartość: ["Certificate of Incorporation", "Cap table (Carta lub spreadsheet)", "Shareholder agreements", "Employee agreements i IP assignments", "Existing investment docs (SAFE, convertible)", "Key customer contracts (sample/anonymized)", "IP / Patent list"],
    kolor: "red",
  },
  {
    folder: "04 — Product & Technology",
    zawartość: ["Architecture overview", "Tech stack description", "Security & compliance (SOC2, GDPR status)", "Product roadmap", "Key metrics dashboard"],
    kolor: "purple",
  },
  {
    folder: "05 — Sales & Marketing",
    zawartość: ["Customer list (top 20, zanonimizowana)", "Churn analysis i reasons", "Pipeline breakdown (stage, value, close date)", "Sales process / playbook overview", "Marketing channels i CAC per channel"],
    kolor: "orange",
  },
  {
    folder: "06 — Team",
    zawartość: ["Org chart", "Founder CVs / LinkedIn profiles", "Key employee CVs", "Vesting schedules", "Open roles (hiring plan)"],
    kolor: "teal",
  },
];

const dataRoomMistakes = [
  { błąd: "Niekompletne dokumenty", skutek: "Inwestor musi czekać = traci zainteresowanie. Red flag dla procesu.", fix: "Przygotuj kompletny data room zanim zaczniesz fundraising." },
  { błąd: "Brak kontroli dostępu", skutek: "Wrażliwe informacje trafiają do osób które nie powinny ich widzieć.", fix: "Używaj VDR z permission layers (teaser vs. full DD access)." },
  { błąd: "Nieaktualne dokumenty", skutek: "Inwestor widzi outdated metrics — traci zaufanie.", fix: "Ustaw reminder do aktualizacji data room co miesiąc." },
  { błąd: "Chaotyczna struktura", skutek: "Inwestor traci czas na szukanie dokumentów — negatywne wrażenie.", fix: "Jasna hierarchia folderów, spójny naming convention, plik INDEX." },
  { błąd: "Brak analytics", skutek: "Nie wiesz czy inwestor w ogóle przegląda dokumenty — nie możesz follow-up.", fix: "Używaj VDR z analytics (DocSend, Datasite). Wiedza = przewaga w negocjacjach." },
];

export default function BlogDataRoomCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Data Room — co to jest i jak przygotować? | Fotz.pl"
        description="Data room dla startupu: co powinno znaleźć się w VDR, jak go zorganizować, jakie platformy wybrać i kiedy przygotować przed rundą inwestycyjną."
        canonicalUrl="https://fotz.pl/blog/data-room-co-to-jest-jak-przygotowac-startup"

        keywords="Data Room co to jest, Data Room definicja, czym jest Data Room, Data Room przykłady, jak działa Data Room, Data Room znaczenie, Data Room przewodnik"
      />
      <ArticleSchema
        title="Data Room — co to jest i jak przygotować?"
        description="Data room (VDR) dla rundy inwestycyjnej: struktura folderów, zawartość, platformy (DocSend, Carta, Datasite), błędy i najlepsze praktyki dla startupów."
        url="https://fotz.pl/blog/data-room-co-to-jest-jak-przygotowac-startup"
        datePublished="2024-02-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Data Room", url: "https://fotz.pl/blog/data-room-co-to-jest-jak-przygotowac-startup" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Data Room", href: "/blog/data-room-co-to-jest-jak-przygotowac-startup" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Fundraising
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Room
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Inwestor pyta o data room. Czy masz gotową odpowiedź?
              Kompletny, dobrze zorganizowany VDR to sygnał profesjonalizmu
              i może skrócić due diligence o tygodnie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Folderów w VDR", value: "6-8" },
                { label: "Czas przygotowania", value: "2-6 tyg." },
                { label: "Popularna platforma", value: "DocSend" },
                { label: "Kluczowa funkcja", value: "Analytics" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-rose-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktura data room</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Logiczna i przewidywalna struktura folderów skraca czas due diligence
              i robi dobre pierwsze wrażenie na inwestorach.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-5">
            {dataRoomFolders.map((f) => (
              <FadeInView key={f.folder}>
                <div className={`rounded-xl border-2 p-5 h-full ${
                  f.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  f.kolor === "green" ? "border-green-200 bg-green-50" :
                  f.kolor === "red" ? "border-red-200 bg-red-50" :
                  f.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  f.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-base mb-3 ${
                    f.kolor === "blue" ? "text-blue-800" :
                    f.kolor === "green" ? "text-green-800" :
                    f.kolor === "red" ? "text-red-800" :
                    f.kolor === "purple" ? "text-purple-800" :
                    f.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{f.folder}</h3>
                  <ul className="space-y-1">
                    {f.zawartość.map((item) => (
                      <li key={item} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-gray-400 flex-shrink-0">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Błędy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 błędów w data room których unikaj</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Słabo przygotowany data room może zabić deal nawet gdy traction jest dobry.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {dataRoomMistakes.map((m, i) => (
              <FadeInView key={m.błąd}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-rose-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{m.błąd}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-xs font-bold text-red-600 uppercase mb-1">Skutek</div>
                          <p className="text-gray-700">{m.skutek}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-green-600 uppercase mb-1">Fix</div>
                          <p className="text-gray-700">{m.fix}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
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
