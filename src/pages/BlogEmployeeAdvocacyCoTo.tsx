import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest employee advocacy?",
    answer:
      "Employee advocacy (rzecznictwo pracownicze) to strategia, w której firma zachęca i wspiera swoich pracowników do promowania marki pracodawcy w mediach społecznościowych i sieci zawodowych. Pracownicy dzielą się contentem firmy, osiągnięciami, wartościami i własnymi doświadczeniami zawodowymi, stając się autentycznymi ambasadorami marki.",
  },
  {
    question: "Dlaczego employee advocacy jest skuteczny?",
    answer:
      "Treści udostępniane przez pracowników mają 8× większy zasięg organiczny niż posty korporacyjne. Badania Edelmana pokazują, że odbiorcy ufają pracownikom 3× bardziej niż samej firmie. Sieci zawodowe pracowników łącznie stanowią wielokrotnie większy zasięg niż firmowe konto LinkedIn — a każdy pracownik to autentyczny głos marki.",
  },
  {
    question: "Jakie treści powinni udostępniać pracownicy?",
    answer:
      "Najskuteczniejsze treści employee advocacy to: artykuły branżowe z osobistym komentarzem, sukcesy zespołu i projekty, behind-the-scenes z pracy, materiały rekrutacyjne (praca w firmie), osiągnięcia produktowe i firmowe, insighty eksperckie pracownika, a nie suche posty sprzedażowe. Autentyczność jest kluczowa — fałszywy entuzjazm jest natychmiast wyczuwalny.",
  },
  {
    question: "Jak budować program employee advocacy?",
    answer:
      "Budowanie programu wymaga: uzyskania zgody i zaangażowania kierownictwa (leadership buy-in), edukacji pracowników o celach i wytycznych, dostarczenia gotowych treści do udostępnienia (content library), użycia platformy advocacy (Bambu, Hootsuite Amplify, LinkedIn Elevate, Sociabble), regularnego uznawania i nagradzania aktywnych ambasadorów oraz mierzenia wyników.",
  },
  {
    question: "Jak mierzyć ROI employee advocacy?",
    answer:
      "KPI employee advocacy to: zasięg wygenerowany przez pracowników (Reach), zaangażowanie (polubienia, komentarze, udostępnienia), ruch na stronie z postów pracowniczych (UTM), wygenerowane leady i konwersje, wzrost liczby aplikantów i jakość rekrutacji, Employer Brand Index oraz Earned Media Value (EMV) postów pracowniczych.",
  },
];

const advocacyBenefits = [
  {
    kto: "Firma",
    korzyści: [
      "8× większy zasięg organiczny vs. posty korporacyjne",
      "Tańsze pozyskanie leadów i rekrutów",
      "Silniejszy employer brand",
      "Wyższe zaufanie do marki (ludzie ufają ludziom)",
    ],
  },
  {
    kto: "Pracownicy",
    korzyści: [
      "Budowanie personal brand i sieci zawodowej",
      "Pozycjonowanie jako ekspert branżowy",
      "Uznanie i widoczność w organizacji",
      "Realne korzyści kariery (LinkedIn SSI, zapytania od headhunterów)",
    ],
  },
];

const advocacyProgram = [
  {
    etap: "Leadership Buy-in i Strategia",
    opis: "Program musi mieć wsparcie zarządu. Zdefiniuj cele (zasięg, leady, employer brand), ustal wytyczne (co można/nie można udostępniać), stwórz policy dla pracowników i zadbaj o RODO.",
  },
  {
    etap: "Rekrutacja Ambasadorów",
    opis: "Zacznij od dobrowolnych, entuzjastycznych pracowników — nie zmuszaj. Pilot programu z 10–20 osobami to lepsze podejście niż przymusowe wdrożenie 100%. Znajdź natural advocates (pracownicy już aktywni na LinkedIn).",
  },
  {
    etap: "Szkolenie i Content Library",
    opis: "Naucz pracowników jak pisać na LinkedIn, jak personalizować treści firmowe, jak budować personal brand. Dostarczaj gotowe treści do udostępnienia — posty, artykuły, grafiki — z zachętą do dodawania własnego komentarza.",
  },
  {
    etap: "Platforma i Narzędzia",
    opis: "Użyj dedykowanej platformy advocacy lub kanału Slack/Teams do dystrybucji treści. Opcje: LinkedIn Elevate (deprecated), Sociabble, Bambu by Sprout Social, Hootsuite Amplify, DrumUp, lub prosty kanał #advocacy w Slack.",
  },
  {
    etap: "Gamification i Uznanie",
    opis: "Programy z leaderboardem i nagrodami mają 3× wyższe zaangażowanie. Uznaj top ambasadorów publicznie, twórz rankingi zasięgu, oferuj symboliczne nagrody lub przywileje. Kluczowe: nagradzaj regularność, nie tylko wirusowe posty.",
  },
  {
    etap: "Mierzenie i Optymalizacja",
    opis: "Mierz miesięcznie: liczbę aktywnych ambasadorów, łączny zasięg, engagement rate, ruch z postów pracowniczych, leady. Porównaj z kosztem tego samego zasięgu w reklamach płatnych (Earned Media Value).",
  },
];

const advocacyMetrics = [
  { metryka: "Active Advocates", definicja: "Liczba pracowników, którzy udostępnili treść w danym miesiącu" },
  { metryka: "Total Reach", definicja: "Łączna liczba osób, do których dotarły posty pracownicze" },
  { metryka: "Engagement Rate", definicja: "(Polubienia + komentarze + udostępnienia) / zasięg × 100" },
  { metryka: "Earned Media Value (EMV)", definicja: "Wartość wygenerowanego zasięgu przeliczona na ekwiwalent reklamowy" },
  { metryka: "Traffic from Advocacy", definicja: "Ruch na stronie z linków w postach pracowniczych (UTM tracking)" },
  { metryka: "Applicant Quality", definicja: "Jakość i ilość aplikantów z polecenia pracowniczego vs. innych źródeł" },
];

export default function BlogEmployeeAdvocacyCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Employee Advocacy — co to jest? Pracownicy jako ambasadorzy marki"
        description="Employee advocacy — definicja, dlaczego pracownicy są 8× skuteczniejsi niż posty korporacyjne, 6-etapowy program i jak mierzyć ROI. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/employee-advocacy-co-to"

        keywords="Employee Advocacy co to jest, Employee Advocacy definicja, czym jest Employee Advocacy, Employee Advocacy startup, Employee Advocacy jak liczyć, Employee Advocacy wzór, Employee Advocacy przykłady"

        canonical="https://fotz.pl/blog/employee-advocacy-co-to"
      />
      <ArticleSchema
        title="Employee Advocacy — co to jest i jak budować program?"
        description="Kompletny przewodnik po employee advocacy: korzyści, 6-etapowy program, gamification i metryki efektywności."
        url="https://fotz.pl/blog/employee-advocacy-co-to"
        datePublished="2024-01-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Employee Advocacy", url: "https://fotz.pl/blog/employee-advocacy-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Employee Advocacy" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Employee Advocacy — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Pracownicy mają 8× większy zasięg organiczny niż oficjalne konta firmowe i 3× wyższe zaufanie.
            Poznaj jak budować program employee advocacy i zamieniać zespół w autentycznych ambasadorów marki.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest employee advocacy?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Employee advocacy</strong> to strategia, w której pracownicy dobrowolnie promują
              markę pracodawcy w swoich sieciach zawodowych i mediach społecznościowych. To nie PR
              przez korporacyjny głos — to autentyczne rekomendacje od prawdziwych ludzi, którzy
              znają firmę od środka.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badanie LinkedIn pokazuje, że pracownicy B2B łącznie mają sieć 10× większą
              niż firmowe konto na LinkedIn. Jeśli 50 pracowników ma po 500 kontaktów,
              potencjalny zasięg wynosi 25 000 osób — bez złotówki wydanej na reklamy.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {advocacyBenefits.map((b, i) => (
                <div key={i} className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="font-bold text-orange-800 text-lg mb-4">Korzyści dla: {b.kto}</h3>
                  <ul className="space-y-2">
                    {b.korzyści.map((k, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-700 text-sm">
                        <span className="text-orange-500 mt-1 flex-shrink-0">✓</span>
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 etapów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 etapów budowania programu employee advocacy</h2>
            <div className="space-y-5">
              {advocacyProgram.map((item, i) => (
                <div key={i} className="flex gap-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.etap}</h3>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak mierzyć employee advocacy? 6 kluczowych metryk</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metryka</th>
                    <th className="p-3 text-left">Definicja</th>
                  </tr>
                </thead>
                <tbody>
                  {advocacyMetrics.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-orange-700">{row.metryka}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.definicja}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — employee advocacy</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
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
