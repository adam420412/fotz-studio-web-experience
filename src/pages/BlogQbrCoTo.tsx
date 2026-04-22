import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest QBR (Quarterly Business Review)?",
    answer:
      "QBR (Quarterly Business Review) to kwartalne spotkanie strategiczne między dostawcą a klientem (najczęściej w kontekście B2B SaaS lub usług profesjonalnych), podczas którego omawiane są wyniki z minionego kwartału, postęp w realizacji celów, wyzwania oraz plany na kolejny kwartał. QBR to moment budowania relacji, demonstrowania wartości i identyfikowania możliwości ekspansji — kluczowy element Customer Success.",
  },
  {
    question: "Kto powinien uczestniczyć w QBR?",
    answer:
      "Po stronie dostawcy: Customer Success Manager (CSM), Account Executive (AE) i w miarę możliwości senior leadership (VP CS lub CEO dla strategicznych klientów). Po stronie klienta: Economic Buyer (decyzyjny sponsor, zazwyczaj VP lub C-suite), Champion (codzienny użytkownik/koordynator) i w miarę potrzeby inne stakeholder groups. QBR bez Economic Buyera to nie QBR — to regularny status call.",
  },
  {
    question: "Jak często organizować QBR?",
    answer:
      "QBR odbywa się raz na kwartał — stąd nazwa. Jednak dla mniejszych klientów (lower-tier, niski MRR) może być organizowany rzadziej: co pół roku (Semi-Annual Business Review) lub raz w roku (Annual Business Review). Najważniejsi, strategiczni klienci (top 20% wg MRR) powinni mieć QBR regularnie co kwartał. Dla klientów w fazie ryzyka churnu — QBR lub Executive Sponsor Call powinien być organizowany ad hoc, nie czekając na kwartał.",
  },
  {
    question: "Czym różni się QBR od status calla?",
    answer:
      "Status call to operacyjne spotkanie taktyczne — co jest zrobione, co jest w toku, jakie są blokery. QBR to spotkanie strategiczne — co osiągnęliśmy względem celów biznesowych klienta, jaki jest ROI, co planujemy na następny kwartał i jak produkt wpisuje się w strategię firmy klienta. QBR wymaga C-level uczestnictwa po stronie klienta, przygotowanej agendy z danymi i jest znacznie rzadszy niż statusy.",
  },
  {
    question: "Jak mierzyć skuteczność QBR?",
    answer:
      "Metryki skuteczności QBR: NPS po spotkaniu, czy Economic Buyer uczestniczył (tak/nie), czy zidentyfikowano upsell/cross-sell opportunity, liczba zaplanowanych kolejnych kroków z deadlinami, czas przygotowania (powinien być powtarzalny dzięki szablonowi), Health Score klienta przed i po QBR. Dobry QBR powinien kończyć się zawsze konkretnymi next steps z właścicielami i terminami.",
  },
];

const qbrAgenda = [
  {
    sekcja: "1. Otwarcie i agenda (5 min)",
    zawartość: "Przedstawienie uczestników, cel spotkania, potwierdzenie agendy",
    dlaczego: "Nadanie tonu — spotkanie strategiczne, nie operacyjne",
    kto: "CSM",
  },
  {
    sekcja: "2. Cele biznesowe klienta (10 min)",
    zawartość: "Przypomnienie celów zdefiniowanych na początku współpracy lub poprzedniego kwartału. Co się zmieniło w priorytetach firmy?",
    dlaczego: "Zakotwiczenie rozmowy w kontekście biznesowym klienta — nie w produkcie",
    kto: "Economic Buyer / CSM",
  },
  {
    sekcja: "3. Wyniki z minionego kwartału (20 min)",
    zawartość: "KPIs i metryki sukcesu, adoption data, osiągnięte milestones, ROI i business outcomes",
    dlaczego: "Demonstracja wartości — tu 'show, don't tell' z danymi",
    kto: "CSM (dane), Champion (kontekst)",
  },
  {
    sekcja: "4. Wyzwania i obszary do poprawy (10 min)",
    zawartość: "Co nie działało, jakie bariery adoption, co wymaga uwagi w Q kolejnym",
    dlaczego: "Szczerość buduje zaufanie — ukrywanie problemów szkodzi relacji",
    kto: "CSM + Champion",
  },
  {
    sekcja: "5. Roadmapa i co nowego (10 min)",
    zawartość: "Nadchodzące funkcje i relevanty dla klienta, beta programy, trendy branżowe",
    dlaczego: "Wzbudzenie ekscytacji i pokazanie inwestycji w produkt",
    kto: "CSM / Product liaison",
  },
  {
    sekcja: "6. Cele i plan na kolejny kwartał (15 min)",
    zawartość: "Zdefiniowanie celów Q+1, plan działania, zasoby potrzebne po obu stronach",
    dlaczego: "Align na przyszłość — QBR musi kończyć się planem, nie tylko oceną",
    kto: "CSM + Economic Buyer",
  },
  {
    sekcja: "7. Next Steps i zamknięcie (5 min)",
    zawartość: "Konkretne akcje z właścicielami i deadlinami po obu stronach, data kolejnego QBR",
    dlaczego: "Bez next steps QBR nie generuje wartości — to tylko rozmowa",
    kto: "CSM",
  },
];

const qbrMetrics = [
  { kategoria: "Adoption", metryki: "DAU/MAU ratio, Feature Adoption Rate, Seats Used vs. Licensed, Active Users trend" },
  { kategoria: "Business Outcomes", metryki: "ROI z produktu, czas zaoszczędzony (time saved), wzrost przychodów klienta powiązany z produktem" },
  { kategoria: "Support & Health", metryki: "CSAT/NPS klienta, liczba i trend otwartych ticketów, SLA compliance, onboarding completion" },
  { kategoria: "Relationship", metryki: "Executive Sponsor zaangażowanie, Champion NPS, # stakeholderów adoptujących produkt" },
  { kategoria: "Commercial", metryki: "Contract value, renewal date, expansion opportunities, upsell pipeline identified" },
];

const qbrMistakes = [
  { błąd: "Brak Economic Buyera", konsekwencja: "Rozmowy kończą się bez decyzji. QBR bez C-level to status call", rozwiązanie: "Uzgodnij z Championem kto musi być — bez nich przesuń datę" },
  { błąd: "Skupienie na funkcjach, nie na biznesie", konsekwencja: "Klient nie widzi ROI — tylko feature demo", rozwiązanie: "Zacznij od celów biznesowych klienta, potem mapuj funkcje na outcomes" },
  { błąd: "Brak danych i konkretnych liczb", konsekwencja: "Spotkanie jest subiektywne, trudno obronić wartość", rozwiązanie: "Przygotuj dashboard z metrykami adoption i business outcomes" },
  { błąd: "Brak next steps z deadlinami", konsekwencja: "QBR nie generuje żadnych akcji, nic się nie zmienia", rozwiązanie: "Kończ każdy punkt agendy next stepem z właścicielem i datą" },
  { błąd: "QBR jako prezentacja monologowa", konsekwencja: "Klient jest pasywny, nie czuje się partnerem", rozwiązanie: "Agenda 40/60 — 40% prezentacja CSM, 60% dialog z klientem" },
];

export default function BlogQbrCoTo() {
  return (
    <Layout>
      <SEOHead
        title="QBR — co to jest? Quarterly Business Review w Customer Success"
        description="QBR (Quarterly Business Review) — definicja, agenda 7 sekcji, kluczowe metryki, 5 błędów i różnica vs. status call. Przewodnik po kwartalnym przeglądzie…"
        canonical="https://fotz.pl/blog/qbr-co-to"

        keywords="QBR co to jest, QBR definicja, czym jest QBR, QBR przykłady, jak działa QBR, QBR znaczenie, QBR przewodnik"

        canonical="https://fotz.pl/blog/qbr-co-to"
      />
      <ArticleSchema
        title="QBR — co to jest i jak przeprowadzić Quarterly Business Review?"
        description="Kompletny przewodnik po QBR: agenda 7 sekcji, metryki do pokazania, 5 błędów i jak odróżnić QBR od status calla."
        url="https://fotz.pl/blog/qbr-co-to"
        datePublished="2024-01-17"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "QBR — Quarterly Business Review", url: "https://fotz.pl/blog/qbr-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "QBR — Quarterly Business Review", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            QBR — co to jest i jak przeprowadzić Quarterly Business Review?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Quarterly Business Review to jedno z najważniejszych spotkań w Customer Success.
            Poznaj agendę 7 sekcji, metryki które warto pokazywać i 5 błędów które niszczą QBR.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest QBR?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>QBR (Quarterly Business Review)</strong> to kwartalne spotkanie strategiczne
              pomiędzy dostawcą a klientem B2B, podczas którego CSM i Account Executive prezentują
              wyniki, demonstrują ROI, omawiają wyzwania i planują cele na kolejny kwartał.
              To fundament zdrowej relacji klient-dostawca w modelu SaaS i usług subskrypcyjnych.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              QBR to nie prezentacja produktu ani status call — to rozmowa o biznesie klienta.
              Dobrze przeprowadzony QBR wzmacnia retencję, identyfikuje możliwości ekspansji
              i buduje relacje z C-level, które są kluczowe przy renewalach.
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6">
              <p className="text-lg font-semibold mb-2 text-amber-400">Złota zasada QBR:</p>
              <p className="text-slate-200 text-lg italic">
                "QBR bez Economic Buyera po stronie klienta to nie QBR — to zaawansowany status call."
              </p>
              <p className="text-slate-400 text-sm mt-2">— Fundamentalna zasada Customer Success</p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Agenda */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Agenda QBR — 7 sekcji (75 min)</h2>
            <div className="space-y-3">
              {qbrAgenda.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{s.sekcja}</h3>
                      <p className="text-slate-600 text-sm mb-2">{s.zawartość}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-teal-50 text-teal-700 rounded px-2 py-1">{s.dlaczego}</span>
                        <span className="bg-slate-100 text-slate-600 rounded px-2 py-1">Prowadzi: {s.kto}</span>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe metryki w QBR</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {qbrMetrics.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-teal-700 mb-2">{m.kategoria}</h3>
                  <p className="text-slate-600 text-sm">{m.metryki}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 błędów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 błędów które niszczą QBR</h2>
            <div className="space-y-4">
              {qbrMistakes.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Błąd #{i + 1}:</p>
                      <p className="text-red-800 font-medium">{m.błąd}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Konsekwencja:</p>
                      <p className="text-orange-800">{m.konsekwencja}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Rozwiązanie:</p>
                      <p className="text-green-800">{m.rozwiązanie}</p>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — QBR (Quarterly Business Review)</h2>
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

      <RelatedArticles currentArticleId="qbr-co-to" />
      <ContactSection />
    </Layout>
  );
}
