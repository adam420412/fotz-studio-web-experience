import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest social proof w marketingu?",
    answer:
      "Social proof (dowód społeczny) to psychologiczny fenomen, w którym ludzie naśladują zachowania innych, zakładając że skoro inni tak robią, to jest to właściwy wybór. W marketingu to wszelkie sygnały pokazujące, że inni klienci zaufali i są zadowoleni z produktu lub usługi. Termin spopularyzował Robert Cialdini w 'Influence: The Psychology of Persuasion' (1984). Social proof redukuje ryzyko i niepewność decyzji zakupowej.",
  },
  {
    question: "Jakie są rodzaje social proof?",
    answer:
      "Główne typy: Expert social proof (endorsement eksperta, certyfikaty, nagrody branżowe), Celebrity social proof (influencerzy, znane osobowości — mniej wiarygodne niż peer), User social proof (opinie klientów, recenzje, case studies), Wisdom of crowds (liczby: 10 000 klientów, 4.8 gwiazdek z 2000 opinii), Wisdom of friends (rekomendacje od znajomych — najsilniejszy typ), oraz Certifications (ISO, nagrody, akredytacje — third-party validation).",
  },
  {
    question: "Jak zbierać opinie klientów do social proof?",
    answer:
      "Strategie zbierania opinii: automatyczny email po zakupie (3–7 dni po dostarczeniu produktu lub pierwszym sukcesie z usługą), prośba NPS z opcją share, incentyw za zostawienie recenzji (zniżka, darmowa próbka), interview case study z najlepszymi klientami, monitoring i odpowiadanie na recenzje Google/Trustpilot/G2, oraz prośba via SDR od churned klientów o exit feedback.",
  },
  {
    question: "Czy liczba gwiazdek czy treść opinii jest ważniejsza?",
    answer:
      "Badania Nielsen: 66% konsumentów ufa opiniom online od nieznajomych prawie tak samo jak od znajomych. Kombinacja jest idealna: wysoka ocena (4.2–4.8 gwiazdki — nie perfekcyjna 5.0 bo wydaje się fałszywa) plus autentyczna treść. Klienci czytają negatywne opinie i reakcję firmy — brak odpowiedzi na negatywne recenzje szkodzi bardziej niż sama opinia. Szczegółowe opinie wideo mają 4× wyższą skuteczność niż tekstowe.",
  },
  {
    question: "Jak używać social proof na landing page?",
    answer:
      "Najlepsze praktyki social proof na landing page: umieść liczbę klientów lub użytkowników w hero section, dodaj 3–5 testimoniali od konkretnych osób (imię, stanowisko, firma, zdjęcie), logo klientów (szczególnie rozpoznawalne marki) w pierwszym scrollu, video testimonial od zadowolonego klienta, case study z konkretnymi wynikami (np. 40% wzrost sprzedaży w 3 miesiące), oraz rating na zewnętrznych platformach (Google, G2, Clutch).",
  },
];

const socialProofTypes = [
  { typ: "Opinie i recenzje klientów", opis: "Tekstowe lub wideo opinie rzeczywistych użytkowników — najczęstsza forma social proof", przykład: "'Fotz zwiększył nasze przychody o 300% w 6 miesięcy' — Jan K., CEO TechStartup", skuteczność: "★★★★☆", gdzie: "Landing page, strona oferty, email, Google My Business, G2/Trustpilot", jak_zbierać: "Email post-purchase, prośba NPS, dedicated review link" },
  { typ: "Logo klientów (Logo Wall)", opis: "Loga znanych firm które korzystają z produktu — natychmiastowa wiarygodność przez asocjację", przykład: "Wiersz logo: KPMG, Santander, Allegro, PKO BP, CD Projekt", skuteczność: "★★★★☆", gdzie: "Hero section, strona O nas, pitch deck", jak_zbierać: "Prośba o zgodę od klienta, partner program" },
  { typ: "Case Studies", opis: "Szczegółowe opisy wyników osiągniętych przez klientów z konkretnymi danymi i kontekstem", przykład: "'Jak Marka X osiągnęła 40% wzrost konwersji przez redesign strony głównej'", skuteczność: "★★★★★", gdzie: "Strona klientów, blog, sales enablement, email sequences", jak_zbierać: "Interview z customer success, structured questionnaire" },
  { typ: "Liczby i statystyki", opis: "Konkretne liczby budujące wiarygodność przez skalę — X firm nam zaufało", przykład: "'10,000+ klientów', '4.9/5 z 2000 opinii', 'Obecni w 15 krajach'", skuteczność: "★★★☆☆", gdzie: "Hero section, footer, media kit", jak_zbierać: "Analytics + CRM + review platform aggregation" },
  { typ: "Nagrody i certyfikaty", opis: "Zewnętrzna walidacja przez nagrody branżowe, certyfikaty, rankingi", przykład: "G2 Leader 2024, ISO 27001, Forbes 30 Under 30, Clutch Top Agency", skuteczność: "★★★☆☆", gdzie: "Footer, O nas, press section, LinkedIn", jak_zbierać: "Aplikowanie do nagród, utrzymanie certyfikatów" },
  { typ: "Video Testimonials", opis: "Nagrania wideo zadowolonych klientów — najtrudniejsze do sfabrykowania, najwyższa wiarygodność", przykład: "2-minutowy wywiad z CEO klienta o wynikach i doświadczeniu pracy", skuteczność: "★★★★★", gdzie: "Landing page hero, strona klientów, reklamy social media", jak_zbierać: "Customer interview po osiągnięciu milestone, Zoom recording" },
];

const spOptimization = [
  { miejsce: "Hero Section (Above the fold)", co_dodac: "Liczba klientów LUB znane logo LUB 1 kluczowy testimonial", przykład: "'Zaufało nam ponad 500 firm z Polski'" },
  { miejsce: "Below Hero", co_dodac: "Logo wall — 5–10 rozpoznawalnych logotypów", przykład: "Loga bez nagłówka lub z 'Zaufali nam'" },
  { miejsce: "Sekcja oferty/produktu", co_dodac: "Testimoniale bezpośrednio przy opisie danej usługi", przykład: "Testimonial o SEO obok opisu usługi SEO" },
  { miejsce: "Strona cennika", co_dodac: "Testimoniale przy każdym planie lub ROI case study", przykład: "'Plan Pro — Marek z firmy X zaoszczędził 2000h rocznie'" },
  { miejsce: "Checkout / Formularz", co_dodac: "Redukcja anxiety — gwarancja, certyfikat, testimonial", przykład: "Zdjęcie i opinia klienta obok przycisku CTA" },
  { miejsce: "Email sequences", co_dodac: "Dedykowany email z case study lub testimonialami", przykład: "Email 3 w welcome sequence — 'Wyniki naszych klientów'" },
];

export default function BlogSocialProofCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Social Proof — co to jest? Dowód społeczny w marketingu i konwersji"
        description="Social proof — definicja, 6 typów (opinie, logo, case studies, liczby, nagrody, wideo), jak zbierać testimoniale i gdzie umieszczać dowód społeczny. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/social-proof-co-to"
      />
      <ArticleSchema
        title="Social Proof — co to jest i jak używać dowodu społecznego?"
        description="Kompletny przewodnik po social proof: 6 typów, skuteczność każdego, jak zbierać i gdzie umieszczać na stronie dla maksymalnej konwersji."
        url="https://fotz.pl/blog/social-proof-co-to"
        datePublished="2024-01-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Social Proof", url: "https://fotz.pl/blog/social-proof-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Social Proof" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Social Proof — co to jest i jak używać dowodu społecznego?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Dowód społeczny redukuje niepewność zakupową i zwiększa konwersję.
            Poznaj 6 typów social proof, jak je zbierać i gdzie umieszczać na stronie.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest social proof?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Social proof</strong> to psychologiczny mechanizm, w którym ludzie
              patrzą na zachowania innych aby podjąć właściwą decyzję w sytuacji niepewności.
              Robert Cialdini opisał go jako jeden z 6 głównych czynników wpływu w książce
              "Influence: The Psychology of Persuasion". W e-commerce i B2B marketingu
              to fundament budowania zaufania online.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Nielsen: 88% konsumentów ufa opiniom online prawie tak samo jak rekomendacjom znajomych.
              Spiegel Research: produkty z recenzjami konwertują o 270% lepiej niż bez nich.
              Case studies i testimoniale to najskuteczniejszy content w procesie decyzji zakupowej B2B.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "270%", opis: "wyższa konwersja produktów z recenzjami vs. bez recenzji (Spiegel Research)" },
                { stat: "88%", opis: "konsumentów ufa opiniom online prawie tak samo jak rekomendacjom znajomych" },
                { stat: "92%", opis: "kupujących B2B czyta case studies przed podjęciem decyzji zakupowej" },
              ].map((s, i) => (
                <div key={i} className="bg-yellow-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-yellow-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 typów social proof</h2>
            <div className="space-y-4">
              {socialProofTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900 text-lg">{t.typ}</h3>
                    <span className="text-yellow-500 text-sm">{t.skuteczność}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-3 gap-2 text-sm">
                    <div className="bg-yellow-50 rounded p-2">
                      <p className="text-xs font-semibold text-yellow-700 mb-1">Przykład:</p>
                      <p className="text-yellow-800 italic">{t.przykład}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Gdzie używać:</p>
                      <p className="text-slate-700">{t.gdzie}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Jak zbierać:</p>
                      <p className="text-blue-800">{t.jak_zbierać}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Gdzie umieszczać social proof na stronie?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Miejsce</th>
                    <th className="p-3 text-left">Co dodać</th>
                    <th className="p-3 text-left">Przykład</th>
                  </tr>
                </thead>
                <tbody>
                  {spOptimization.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-yellow-700">{row.miejsce}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.co_dodac}</td>
                      <td className="p-3 text-slate-600 text-sm italic">{row.przykład}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — social proof</h2>
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
