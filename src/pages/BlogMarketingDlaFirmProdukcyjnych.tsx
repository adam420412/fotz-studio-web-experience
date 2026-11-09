import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Od czego zacząć marketing w firmie produkcyjnej?",
    answer:
      "Zacznij od oferty i dowodów, nie od reklam. Przed kampanią potrzebujesz: czytelnej strony ze specyfikacjami i zastosowaniami produktów, 2-3 case studies z liczbami oraz odpowiedzi na pytania przed zakupem. Potem kanały: SEO pod frazy techniczne i branżowe, Google Ads na konkretne produkty i LinkedIn dla decydentów B2B. Targi i kontakty handlowe wzmacniają, a nie zastępują ten fundament.",
  },
  {
    question: "Czy LinkedIn działa dla producentów?",
    answer:
      "Tak — pod warunkiem, że publikujesz konkret, nie ogólniki. Najlepiej działają: zdjęcia i wideo z hali produkcyjnej, karty techniczne rozwiązujące problemy klienta, case studies z wynikami oraz stanowiska ekspertów (inżynierowie, dyrektorzy produkcji). LinkedIn Ads warto testować dla fraz zawodowych i retargetingu osób, które były na stronie. Dla lokalnych usług konsumenckich LinkedIn zwykle nie jest pierwszym kanałem.",
  },
  {
    question: "Ile kosztuje marketing dla firmy produkcyjnej?",
    answer:
      "Najtańszy punkt startu to SEO i treści techniczne: one pracują latami. Google Ads dla fraz B2B wymaga testowego budżetu od ok. 1500-3000 zł miesięcznie plus obsługa — reklamy na ogólne frazy „marketing produkcyjny” przepalają pieniądze, więc targetuj konkretne produkty i zastosowania. Stała obsługa agencji (strategia + treści + raport) zaczyna się od ok. 3000-5000 zł netto, zależnie od zakresu produkcji materiałów.",
  },
  {
    question: "Czy targi branżowe nadal mają sens?",
    answer:
      "Tak, jeśli obsłużysz je procesem: lista docelowych firm przed targami, nagranie zapytań w formularzu lub CRM zamiast wizytówek w kieszeni i follow-up w 48h po wydarzeniu. Bez procesu targi to kosztowne zdjęcia do social media. Najlepiej łączyć je z treściami online — materiał ze stoiska i z hali pracuje potem na stronie i w LinkedIn przez rok.",
  },
];

const channels = [
  {
    name: "SEO pod frazy techniczne",
    desc: "Opisy parametrów, zastosowań i branżowych zastosowań produktów. Fraza „producent + produkt + parametr” ma mniejszą konkurencję niż ogólne hasła i przychodzi z gotowym popytem. Podstrony dla zastosowań pracują latami.",
  },
  {
    name: "LinkedIn i content ekspercki",
    desc: "Decydenci B2B sprawdzają firmę przed kontaktem. Case studies, karty techniczne, zdjęcia z produkcji i opinie inżynierów budują zaufanie lepiej niż korporacyjne slogany.",
  },
  {
    name: "Google Ads na konkretne produkty",
    desc: "Reklama na frazy produktowe i zastosowania („przenośnik taśmowy dla browaru”, „opakowania dla farmacji”), nie na ogólne „marketing dla producentów”. Małe budżety, wysoka intencja.",
  },
  {
    name: "Katalogi i platformy B2B",
    desc: "Allegro B2B, Europages, katalogi branżowe i profile firmy z kompletnymi danymi. Dla wielu producentów to nadal pierwsze źródło RFQ z zagranicy i od dużych odbiorców.",
  },
];

const contentTypes = [
  { title: "Karty techniczne i specyfikacje", text: "Parametry, tolerancje, normy, materiały, warunki pracy. To pierwsza rzecz, którą sprawdza inżynier i kupiec przed rozmową." },
  { title: "Case studies z liczbami", text: "Problem klienta → zakres realizacji → mierzalny efekt: czas cyklu, wydajność, odpady, koszt. Bez tego oferta brzmi jak każda inna." },
  { title: "Wideo z hali i procesu", text: "Jak powstaje produkt, jak wygląda kontrola jakości, jak pakujesz i wysyłasz. Autentyczny materiał wygrywa z renderem stockowym." },
  { title: "Przewodniki doboru", text: "„Jak wybrać X pod Y”, porównania wariantów i błędy przy zakupie. Najlepsza treść do SEO i do wysyłki przez handlowca po spotkaniu." },
];

export default function BlogMarketingDlaFirmProdukcyjnych() {
  return (
    <>
      <SEOHead
        title="Marketing dla firm produkcyjnych — strategie B2B | FOTZ"
        description="Marketing dla firm produkcyjnych: kanały B2B, treści techniczne i lejek od kontaktu do RFQ. Jak generować zapytania w produkcji — sprawdź."
        canonical="https://www.fotz-studio.pl/blog/marketing-dla-firm-produkcyjnych"
        keywords="marketing dla firm produkcyjnych, marketing B2B produkcja, marketing dla producentów, generowanie leadów B2B"
      />
      <ArticleSchema
        title="Marketing dla firm produkcyjnych — sprawdzone strategie na wzrost"
        description="Jak firmy produkcyjne generują zapytania: kanały B2B, treści techniczne, case studies i lejek od pierwszego kontaktu do RFQ."
        datePublished="2026-11-09"
        dateModified="2026-11-09"
        url="https://www.fotz-studio.pl/blog/marketing-dla-firm-produkcyjnych"
      />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Blog", url: "https://www.fotz-studio.pl/blog" },
        { name: "Marketing dla firm produkcyjnych", url: "https://www.fotz-studio.pl/blog/marketing-dla-firm-produkcyjnych" },
      ]} />
      <FAQSchema items={faqItems} />

      <Layout>
        <PageBreadcrumbs items={[
          { label: "Strona główna", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Marketing dla firm produkcyjnych" },
        ]} />

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
              Marketing dla firm produkcyjnych — sprawdzone strategie na wzrost
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Długi cykl sprzedaży, komitet decyzyjny i RFQ zamiast kliknięcia „kup”.
              Jak budować marketing w produkcji: kanały, treści techniczne i proces,
              który kończy się konkretnym zapytaniem ofertowym.
            </p>
          </div>
        </section>

        {/* Dlaczego inaczej */}
        <FadeInView>
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Dlaczego marketing w produkcji jest inny</h2>
              <p className="text-lg text-slate-700 mb-4">
                Klient producenta nie kupuje impulsywnie. Kupuje bezpieczeństwo dostawy: jakość, terminowość,
                zgodność z normami i to, co się stanie, gdy coś pójdzie nie tak. Decyzję podejmuje komitet —
                inżynier, kupiec, zarząd i czasem produkcja. Cykl od pierwszego kontaktu do zamówienia trwa
                tygodnie lub miesiące, a RFQ (zapytanie ofertowe) jest ważniejszym celem niż sprzedaż online.
              </p>
              <p className="text-lg text-slate-700">
                Dlatego marketing produkcyjny to przede wszystkim <strong>dowody i treści techniczne</strong>,
                a nie głośna reklama. Najpierw strona, która odpowiada na pytania inżyniera i kupca,
                a dopiero potem kampanie, które na nią prowadzą ruch.
              </p>
            </div>
          </section>
        </FadeInView>

        {/* Kanały */}
        <FadeInView>
          <section className="py-16 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Kanały, które działają dla producentów</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {channels.map((channel, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-3">{channel.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{channel.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Treści */}
        <FadeInView>
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Treści, które sprzedają w produkcji</h2>
              <div className="space-y-4">
                {contentTypes.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Proces RFQ */}
        <FadeInView>
          <section className="py-16 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Od pierwszego kontaktu do RFQ — proces krok po kroku</h2>
              <div className="space-y-4">
                {[
                  { step: "1. Ruch z intencją", text: "SEO i reklama na frazy techniczne oraz zastosowania. Mierz wejścia na strony produktów i przewodników doboru, nie na stronę główną." },
                  { step: "2. Dowód na stronie", text: "Specyfikacje, case studies i materiały do pobrania. Decydent musi móc obronić wybór przed zarządem — daj mu gotowy argument." },
                  { step: "3. Kontakt i kwalifikacja", text: "Formularz z pytaniami o zastosowanie, parametry i termin. Im konkretniejsze pytania, tym mniej pustych zapytań i szybsza odpowiedź handlowca." },
                  { step: "4. Oferta i follow-up", text: "Odpowiedź w 24-48h z konkretnym zakresem i ceną. CRM przypomina o kolejnych kontaktach — w B2B wygrywa systematyczność, nie przypadek." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2">{item.step}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-slate-700 mt-6">
                Mierz: koszt leada, czas od kontaktu do RFQ, udział zapytań kończących się ofertą i sprzedażą.
                Bez tych liczb nie wiesz, czy marketing pracuje na produkcję — czy tylko generuje ruch.
              </p>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — marketing dla firm produkcyjnych</h2>
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection />
      </Layout>
    </>
  );
}
