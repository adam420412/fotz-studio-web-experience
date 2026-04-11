import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest viral marketing?",
    answer:
      "Viral marketing to strategia marketingowa, w której treści rozprzestrzeniają się organicznie wśród użytkowników — podobnie jak wirus. Kluczem jest stworzenie materiału (wideo, memu, wyzwania), który ludzie chcą dobrowolnie udostępniać znajomym.",
  },
  {
    question: "Jakie elementy sprawiają, że treść staje się viralna?",
    answer:
      "Treść staje się viralna gdy wywołuje silne emocje (zachwyt, śmiech, zaskoczenie, wzruszenie), jest prosta do zrozumienia i udostępnienia, ma element nowości lub zaskoczenia, nawiązuje do aktualnych trendów oraz pozwala odbiorcy wyrazić swoją tożsamość.",
  },
  {
    question: "Czy viral marketing można zaplanować?",
    answer:
      "Viralowości nie można w 100% zaplanować, ale można zwiększyć jej prawdopodobieństwo. Firmy takie jak Dollar Shave Club czy Old Spice celowo projektują kampanie z viralowym potencjałem, optymalizując emocje, format i mechanizmy dystrybucji.",
  },
  {
    question: "Jakie są ryzyka viral marketingu?",
    answer:
      "Główne ryzyka to: utrata kontroli nad przekazem, negative virality (treść staje się viralna z powodu skandalu), krótkotrwały efekt bez konwersji, trudność w precyzyjnym targetowaniu oraz możliwość naruszenia wartości marki przez nieprzemyślane działania.",
  },
  {
    question: "Jaki jest koszt kampanii viralowej?",
    answer:
      "Koszty są bardzo zróżnicowane. Niektóre kampanie viralne powstają spontanicznie niemal bez budżetu (ice bucket challenge), inne wymagają produkcji wideo wartej setki tysięcy złotych. Kluczem jest jakość pomysłu, nie budżet produkcji.",
  },
];

const viralMechanisms = [
  {
    name: "Emocjonalne wyzwolenie",
    description: "Treść wywołuje silne emocje: radość, zaskoczenie, wzruszenie, oburzenie",
    przykład: "ALS Ice Bucket Challenge — wyzwanie emocjonalne + cel charytatywny",
    skuteczność: "Bardzo wysoka",
  },
  {
    name: "Waluta społeczna",
    description: "Udostępnienie treści sprawia, że osoba wygląda lepiej w oczach innych",
    przykład: "Quizy 'Którą postacią z Harrego Pottera jesteś?'",
    skuteczność: "Wysoka",
  },
  {
    name: "Praktyczna wartość",
    description: "Treść jest naprawdę przydatna i warta polecenia",
    przykład: "Poradniki, tutoriale, life hacki",
    skuteczność: "Wysoka",
  },
  {
    name: "Efekt opowiadania historii",
    description: "Narracja angażuje i motywuje do dzielenia się",
    przykład: "Kampanie brand story, dokumenty marki",
    skuteczność: "Średnia",
  },
  {
    name: "Trigger sytuacyjny",
    description: "Treść naturalnie nasuwa się w konkretnych sytuacjach dnia codziennego",
    przykład: "Piosenki kojarzone z porą roku, memowe formaty",
    skuteczność: "Wysoka",
  },
  {
    name: "Obserwowalność",
    description: "Działanie lub produkt jest widoczny publicznie, co nakręca naśladownictwo",
    przykład: "Lody Papaya King w Warszawie, kolejki przed sklepami",
    skuteczność: "Średnia",
  },
];

const viralFormats = [
  { format: "Wyzwanie (challenge)", platforma: "TikTok, Instagram Reels", bariera: "Niska", przykład: "Ice Bucket, Mannequin Challenge" },
  { format: "Mem / format graficzny", platforma: "Twitter/X, Facebook", bariera: "Bardzo niska", przykład: "Drake meme, distracted boyfriend" },
  { format: "Wideo emocjonalne", platforma: "YouTube, Facebook", bariera: "Średnia", przykład: "Thai Life Insurance reklamy" },
  { format: "Kontrowersyjna kampania", platforma: "Wszystkie", bariera: "Niska (ryzyko wysokie)", przykład: "Gillette 'The Best Men Can Be'" },
  { format: "Quizy / rankingi interaktywne", platforma: "Facebook, strony www", bariera: "Niska", przykład: "BuzzFeed quizy osobowości" },
  { format: "Newsjacking", platforma: "Twitter/X, LinkedIn", bariera: "Bardzo niska", przykład: "Oreo 'Dunk in the Dark' Super Bowl" },
];

export default function BlogViralMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Viral Marketing — co to jest i jak działa? Kompletny przewodnik"
        description="Viral marketing — definicja, mechanizmy viralowości, formaty kampanii i przykłady. Dowiedz się jak tworzyć treści, które użytkownicy chcą udostępniać."
        canonicalUrl="https://fotz.pl/blog/viral-marketing-co-to"
      />
      <ArticleSchema
        title="Viral Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po viral marketingu: mechanizmy viralowości, formaty kampanii i przykłady skutecznych działań."
        url="https://fotz.pl/blog/viral-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Viral Marketing", url: "https://fotz.pl/blog/viral-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Viral Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Viral Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Kompletny przewodnik po viral marketingu. Poznaj mechanizmy viralowości,
            formaty kampanii i dowiedz się jak zwiększyć szansę na organiczne rozprzestrzenienie się treści.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest viral marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Viral marketing</strong> (marketing wirusowy) to strategia marketingowa polegająca na tworzeniu treści,
              które użytkownicy dobrowolnie i masowo udostępniają dalej. Nazwa pochodzi od analogii do wirusa —
              przekaz rozprzestrzenia się wykładniczo, kiedy każda osoba zainfekowana "zarazi" kolejne.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              W odróżnieniu od tradycyjnej reklamy, w viral marketingu to sami odbiorcy stają się kanałem dystrybucji.
              Jeden oryginalny post może dotrzeć do milionów ludzi bez dodatkowych nakładów reklamowych.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-900 font-medium text-lg">
                Kluczowy wskaźnik: <strong>Viral Coefficient (K)</strong>
              </p>
              <p className="text-blue-800 mt-2">
                K = (liczba zaproszeń wysłanych przez użytkownika) × (współczynnik konwersji).
                Jeśli K wynosi powyżej 1, treść rośnie wykładniczo. Jeśli K wynosi poniżej 1 — maleje.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Mechanizmy viralowości */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              6 mechanizmów viralowości (framework STEPPS)
            </h2>
            <p className="text-slate-600 mb-8">
              Jonah Berger w książce "Contagious" zidentyfikował 6 czynników (STEPPS) sprawiających, że treści się rozprzestrzeniają.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {viralMechanisms.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{m.name}</h3>
                      <p className="text-slate-600 text-sm mb-2">{m.description}</p>
                      <p className="text-slate-500 text-sm italic mb-2">Przykład: {m.przykład}</p>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        m.skuteczność === "Bardzo wysoka" ? "bg-green-100 text-green-700" :
                        m.skuteczność === "Wysoka" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        Skuteczność: {m.skuteczność}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Formaty viralowe */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Najpopularniejsze formaty kampanii viralowych</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Format</th>
                    <th className="p-3 text-left">Platforma</th>
                    <th className="p-3 text-left">Bariera wejścia</th>
                    <th className="p-3 text-left">Przykład</th>
                  </tr>
                </thead>
                <tbody>
                  {viralFormats.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.format}</td>
                      <td className="p-3 text-slate-600">{row.platforma}</td>
                      <td className="p-3 text-slate-600">{row.bariera}</td>
                      <td className="p-3 text-slate-500 text-sm">{row.przykład}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Proces tworzenia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak zaplanować kampanię wiralową? 5 kroków</h2>
            <div className="space-y-6">
              {[
                { krok: "1", title: "Zdefiniuj emocję", opis: "Zdecyduj jaką emocję chcesz wywołać. Najsilniejsze to: zachwyt, śmiech, zaskoczenie, wzruszenie, oburzenie. Unikaj emocji neutralnych — nie są udostępniane." },
                { krok: "2", title: "Wybierz mechanizm viralowości", opis: "Zdecyduj czy Twoja kampania będzie bazować na walucie społecznej, wartości praktycznej, emocjach, opowieści, triggerze czy obserwowalności." },
                { krok: "3", title: "Zaprojektuj niską barierę udostępnienia", opis: "Im łatwiej udostępnić, tym lepiej. Jeden klik, prosty hashtag, gotowy tekst do przeklejenia. Każde utrudnienie redukuje viral coefficient." },
                { krok: "4", title: "Zaplanuj siewców (seeds)", opis: "Viral nie startuje z zera. Potrzebujesz pierwszej grupy — influencerów, ambasadorów, aktywnych użytkowników — którzy uruchomią mechanizm dystrybucji." },
                { krok: "5", title: "Monitoruj i wzmacniaj", opis: "Śledź shares, reach, earned media. Wzmacniaj viralowe posty płatnymi boostami gdy widzisz naturalne momentum. Reaguj na komentarze, by podtrzymać zaangażowanie." },
              ].map((item) => (
                <div key={item.krok} className="flex gap-5 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {item.krok}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.opis}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — viral marketing</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
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
