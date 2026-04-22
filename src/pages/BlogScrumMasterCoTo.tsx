import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Scrum Master?",
    answer:
      "Scrum Master to jedna z trzech ról w Scrum — servant leader i coach Scrum Teamu. Nie jest menedżerem ani liderem projektu — jest odpowiedzialny za efektywność Scrum Teamu poprzez usuwanie przeszkód, facylitację ceremonii, coaching w zakresie Agile i budowanie środowiska w którym team może się rozwijać. Scrum Master służy trzem podmiotom: Scrum Teamowi (facylitacja i coaching), Product Ownerowi (wsparcie backlogu i technik PO) oraz organizacji (wdrażanie Scrum, zmiana kultury).",
  },
  {
    question: "Czym różni się Scrum Master od Project Managera?",
    answer:
      "Project Manager (PM) zarządza projektem: planuje zasoby, śledzi harmonogram, raportuje postęp i odpowiada za deliverables. Scrum Master nie zarządza — służy. Usuwa przeszkody, ale nie przydziela zadań (robi to sam team). Nie odpowiada za terminy — odpowiada za efektywność procesu. PM mówi teamowi co robić, SM pomaga teamowi pracować skuteczniej. W dobrze działającym Scrum nie ma 'szefa' — jest servant leader który usuwa bariery.",
  },
  {
    question: "Jakie są główne odpowiedzialności Scrum Mastera?",
    answer:
      "Wg Scrum Guide: dla Scrum Teamu — coaching Scrum, facylitacja ceremonii (Sprint Planning, Daily, Review, Retro), usuwanie impedimentów, promowanie self-management i cross-functionality; dla Product Ownera — pomaganie w efektywnym Product Backlog management, ułatwianie stakeholder collaboration, pomaganie PO w empirycznym planowaniu produktu; dla organizacji — coaching adopcji Scrum, planowanie i doradzanie wdrożenia Scrum, usuwanie barier między stakeholderami a Scrum Teamem.",
  },
  {
    question: "Jakie są certyfikaty Scrum Mastera?",
    answer:
      "Najpopularniejsze certyfikaty: CSM (Certified Scrum Master) — Scrum Alliance, wymaga 2-dniowego kursu, najbardziej rozpoznawalny na polskim rynku; PSM I/II/III (Professional Scrum Master) — Scrum.org, egzamin online, trudniejszy i bardziej szanowany przez tech firmy; SAFe SM — dla środowisk enterprise Agile (SAFe); LeSS Practitioner — dla Large Scale Scrum. PSM I od Scrum.org jest bardziej wymagający niż CSM — wymaga głębokiego zrozumienia Scrum Guide, bez kursu (tylko egzamin).",
  },
  {
    question: "Czy Scrum Master może być jednocześnie programistą lub PO?",
    answer:
      "Scrum Guide nie zabrania łączenia ról, ale odradza łączenie Scrum Mastera z Product Ownerem — to konflikt interesów (SM ma być neutralnym facylitatorem). Łączenie SM z Development Teamem jest możliwe w małych teamach, ale ogranicza obiektywność SM i jego dostępność. W startup zespołach jedna osoba często pełni wiele ról — to OK na początku, ale przy skalowaniu warto je rozdzielić. Anty-pattern: SM jako 'notatnik Product Ownera' lub 'sekretarz sprintu'.",
  },
];

const smForScrumTeam = [
  { aktywność: "Coaching Scrum", opis: "Edukuje team w zakresie Scrum, Agile values i zasad empiryzmu — nie jako wykładowca, ale jako coach w kontekście codziennej pracy" },
  { aktywność: "Facylitacja ceremonii", opis: "Facylituje Sprint Planning, Daily Scrum, Sprint Review i Retrospective — zapewnia efektywność i timeboxing każdego eventu" },
  { aktywność: "Usuwanie impedimentów", opis: "Identyfikuje i aktywnie usuwa przeszkody blokujące team — zarówno wewnętrzne (procesy) jak i zewnętrzne (stakeholderzy, systemy)" },
  { aktywność: "Budowanie self-management", opis: "Pomaga teamowi stawać się coraz bardziej samozarządzalnym i cross-funkcjonalnym — stopniowo zmniejsza własne zaangażowanie w codzienne decyzje" },
  { aktywność: "Ochrona przed zakłóceniami", opis: "Chroni team przed zewnętrznymi zakłóceniami w trakcie sprintu — nieplanowanymi prośbami, nagłymi zmianami scope, rozproszeniem uwagi" },
];

const smForPO = [
  { aktywność: "Product Backlog grooming support", opis: "Pomaga PO w efektywnym prowadzeniu refinement sesji i komunikowaniu backlogu do teamu" },
  { aktywność: "Empirical planning", opis: "Pomaga PO planować na podstawie velocity i danych — nie na podstawie 'szacunków managerskich'" },
  { aktywność: "Stakeholder facilitation", opis: "Ułatwia efektywną komunikację między PO a stakeholderami — szczególnie w trudnych sytuacjach" },
];

const smAntiPatterns = [
  { anty_pattern: "'Hero SM' — SM wszystko robi sam", problem: "Team się nie uczy i nie staje się samozarządzalny — uzależnienie od SM", lepiej: "Coach team do samodzielnego rozwiązywania problemów, nie rozwiązuj za nich" },
  { anty_pattern: "SM jako notatnik/sekretarz", problem: "SM nie dodaje wartości poza dokumentowaniem — waste of skilled role", lepiej: "SM facylituje, nie dokumentuje. Daily Scrum to nie statusy dla SM" },
  { anty_pattern: "SM jako Project Manager 2.0", problem: "SM przydziela zadania, śledzi harmonogram, mikrozarządza — niszczy self-management", lepiej: "Team sam wybiera zadania z Sprint Backlogu. SM pyta 'jak pomóc?' nie 'co robisz?'" },
  { anty_pattern: "SM tylko na ceremoniach", problem: "SM pojawia się na Daily i Review, znika między nimi — brak ciągłego coachingu", lepiej: "SM jest dostępny cały dzień, aktywnie obserwuje i coachuje na bieżąco" },
  { anty_pattern: "SM bez autorytetu do usuwania impedimentów", problem: "SM identyfikuje blokery ale nie ma wpływu na ich usunięcie — frustracja teamu", lepiej: "SM musi mieć mandat organizacyjny i dostęp do odpowiednich decydentów" },
];

export default function BlogScrumMasterCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Scrum Master — co to jest? Rola SM w Scrum i Agile"
        description="Scrum Master — definicja, obowiązki (dla Teamu, PO i organizacji), różnica vs. Project Manager, 5 anty-wzorców i certyfikaty CSM/PSM. Kompletny przewodnik."
        canonical="https://fotz.pl/blog/scrum-master-co-to"

        keywords="Scrum Master co to jest, Scrum Master definicja, czym jest Scrum Master, Scrum Master przykłady, jak działa Scrum Master, Scrum Master znaczenie, Scrum Master przewodnik"

        canonical="https://fotz.pl/blog/scrum-master-co-to"
      />
      <ArticleSchema
        title="Scrum Master — co to jest i czym zajmuje się SM?"
        description="Kompletny przewodnik po roli Scrum Master: obowiązki dla teamu i PO, różnica vs. Project Manager, anty-wzorce i certyfikaty."
        url="https://fotz.pl/blog/scrum-master-co-to"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Scrum Master", url: "https://fotz.pl/blog/scrum-master-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Scrum Master", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Scrum Master — co to jest i czym zajmuje się SM?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Scrum Master to servant leader, coach i facylitator — nie menedżer.
            Poznaj jego rolę, obowiązki, różnicę vs. Project Manager i 5 anty-wzorców.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Scrum Master?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Scrum Master</strong> to jedna z trzech ról w Scrum — jest servant leaderem
              i coachem Scrum Teamu. Nie zarządza ludźmi ani projektem — pomaga teamowi
              pracować coraz efektywniej, usuwa przeszkody i chroni zespół przed zakłóceniami.
              Odpowiada za efektywność całego Scrum Teamu, nie za terminy czy deliverables.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Paradoks SM: najlepsza robota Scrum Mastera prowadzi do tego, że jest coraz mniej
              potrzebny — ponieważ team staje się coraz bardziej samozarządzalny. Celem jest
              budowanie autonomii, nie zależności.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { komu: "Scrum Team", jak: "Coaching, facylitacja ceremonii, usuwanie impedimentów" },
                { komu: "Product Owner", jak: "Wsparcie backlog management, empirical planning, stakeholder facilitation" },
                { komu: "Organizacja", jak: "Coaching adopcji Scrum, planowanie wdrożenia, zmiana kultury" },
              ].map((s, i) => (
                <div key={i} className="bg-green-50 rounded-xl p-4">
                  <p className="font-bold text-green-800 mb-2">Służy: {s.komu}</p>
                  <p className="text-green-700 text-sm">{s.jak}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Aktywności dla teamu */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Aktywności Scrum Mastera dla Scrum Teamu</h2>
            <div className="space-y-3">
              {smForScrumTeam.map((a, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{a.aktywność}</h3>
                      <p className="text-slate-600 text-sm">{a.opis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 anty-wzorców */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 anty-wzorców Scrum Mastera</h2>
            <div className="space-y-4">
              {smAntiPatterns.map((a, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-red-700 mb-2">{a.anty_pattern}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Problem:</p>
                      <p className="text-red-800">{a.problem}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Lepiej:</p>
                      <p className="text-green-800">{a.lepiej}</p>
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
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Scrum Master</h2>
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

      <RelatedArticles currentArticleId="scrum-master-co-to" />
      <ContactSection />
    </Layout>
  );
}
