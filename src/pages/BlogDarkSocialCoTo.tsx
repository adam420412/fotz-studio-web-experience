import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest dark social?",
    answer:
      "Dark social to ruch na stronie internetowej, który pochodzi z prywatnych kanałów udostępniania — takich jak wiadomości prywatne (Messenger, WhatsApp, SMS), email bezpośredni, aplikacje do czatowania czy kopiowanie i wklejanie linków. Nazywany jest 'dark' (ciemny), bo narzędzia analityczne jak Google Analytics nie potrafią zidentyfikować jego źródła i klasyfikują go jako direct traffic.",
  },
  {
    question: "Jak duży jest udział dark social w ruchu?",
    answer:
      "Badanie RadiumOne pokazuje, że 84% udostępnień treści online odbywa się przez dark social — tylko 16% przez publiczne sieci społecznościowe. Oznacza to, że większość rekomendacji produktów, linków do artykułów i treści marketingowych jest wymieniana przez prywatne kanały, które są niewidoczne w standardowych raportach analitycznych.",
  },
  {
    question: "Jak mierzyć dark social?",
    answer:
      "Metody pomiaru dark social to: UTM parametry do oznaczania wszystkich linków, custom short linki (bit.ly, rebrandly) do śledzenia kliknięć, ankiety 'Jak nas znalazłeś?' (self-reported attribution), analiza patternu direct traffic (duży udział może wskazywać na dark social), dedykowane narzędzia do content intelligence oraz pixel tracking w aplikacjach mobilnych.",
  },
  {
    question: "Jak optymalizować content pod dark social?",
    answer:
      "Optymalizacja pod dark social obejmuje: tworzenie contentu, który naturalnie inspiruje do prywatnego udostępniania (silne opinie, ekskluzywne dane, osobiste rezerwansy), łatwe do skopiowania i wklejenia linki, przyciski 'Share' do WhatsApp i Messenger, zamknięte grupy i społeczności (Discord, Slack, grupy FB), oraz content tak wartościowy, że chce się nim podzielić z najbliższymi.",
  },
  {
    question: "Dlaczego dark social jest ważny dla marketingu?",
    answer:
      "Dark social reprezentuje najbardziej wartościową formę marketingu — rekomendacje peer-to-peer w prywatnych rozmowach. Te polecenia mają najwyższy wskaźnik konwersji, bo pochodzą od zaufanych osób. Ignorowanie dark social to ślepota na 84% udostępnień — firmy, które go mierzą i optymalizują, mają przewagę w rozumieniu rzeczywistych ścieżek klientów.",
  },
];

const darkSocialChannels = [
  { kanał: "Komunikatory (WhatsApp, Messenger)", udział: "wysoki", dlaczego: "Domyślne źródło prywatnego polecenia produktów i artykułów" },
  { kanał: "Email bezpośredni", udział: "wysoki", dlaczego: "Linki wysyłane osobiście między znajomymi i współpracownikami" },
  { kanał: "SMS / iMessage", udział: "średni", dlaczego: "Mobilne polecenia, szczególnie dla Gen Z" },
  { kanał: "Kopiuj-wklej URL", udział: "średni", dlaczego: "Link bez parametrów UTM = direct traffic w analityce" },
  { kanał: "Grupy na Facebooku/WhatsApp", udział: "wysoki", dlaczego: "Prywatne grupy niewidoczne dla zewnętrznych narzędzi" },
  { kanał: "Slack/Discord kanały", udział: "rosnący", dlaczego: "B2B i tech community coraz częściej wymienia linki w workspace" },
  { kanał: "Reddit (prywatne subreddity)", udział: "niszowy", dlaczego: "Zamknięte społeczności z wysokim zaangażowaniem" },
];

const darkSocialStrategies = [
  {
    strategia: "UTM Tagging All Links",
    opis: "Oznacz każdy link wychodzący z social media, emaili i kampanii parametrami UTM. Linkowanie bez UTM = dark social. Użyj narzędzi do masowego tworzenia UTM linków.",
    trudność: "Łatwa",
    wpływ: "Wysoki — odróżnia dark social od prawdziwego direct traffic",
  },
  {
    strategia: "Custom Short Links",
    opis: "Twórz markowe skrócone linki (np. fotz.pl/raport2024) zamiast surowych URLi. Śledzisz każde kliknięcie niezależnie od tego, gdzie link został wklejony.",
    trudność: "Łatwa",
    wpływ: "Wysoki — identyfikuje viral sharing w prywatnych kanałach",
  },
  {
    strategia: "'Jak nas znalazłeś?' Survey",
    opis: "Dodaj pytanie do formularza kontaktowego lub po zakupie: 'Jak trafiłeś na nas?'. Odpowiedzi 'od znajomego' lub 'WhatsApp' wskazują dark social. Self-reported attribution jest nieco niedokładna ale cenna.",
    trudność: "Łatwa",
    wpływ: "Średni — wartościowe dane jakościowe",
  },
  {
    strategia: "Przyciski Share to Private",
    opis: "Dodaj do treści przyciski udostępniania specyficzne dla prywatnych kanałów: 'Wyślij przez WhatsApp', 'Udostępnij przez Messenger'. Śledzisz kliknięcia tych przycisków jako wskaźnik dark social intent.",
    trudność: "Średnia",
    wpływ: "Średni — zwiększa dark social i daje sygnał o treściach wartych polecenia",
  },
  {
    strategia: "Zamknięte Społeczności",
    opis: "Buduj własne prywatne kanały (Discord server, Slack community, grupy FB) gdzie Twoja marka jest obecna w dark social. Przejmujesz kontrolę nad tym, co dzieje się 'w ciemności'.",
    trudność: "Wysoka",
    wpływ: "Bardzo wysoki — własna platforma dark social, lojalność i community",
  },
];

export default function BlogDarkSocialCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Dark Social | Fotz Studio"
        description="Dark social — definicja, dlaczego 84% udostępnień jest niewidoczne, jak mierzyć dark social (UTM, short links, survey) i jak optymalizować marketing…"
        canonicalUrl="https://fotz.pl/blog/dark-social-co-to"

        keywords="Dark Social co to jest, Dark Social definicja, czym jest Dark Social, Dark Social w marketingu, Dark Social przykłady, jak działa Dark Social, Dark Social strategia"

        canonical="https://fotz.pl/blog/dark-social-co-to"
      />
      <ArticleSchema
        title="Dark Social — co to jest i jak go mierzyć?"
        description="Kompletny przewodnik po dark social: kanały, metody pomiaru i strategie optymalizacji niewidocznego ruchu z prywatnych udostępnień."
        url="https://fotz.pl/blog/dark-social-co-to"
        datePublished="2024-01-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Dark Social", url: "https://fotz.pl/blog/dark-social-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Dark Social" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Dark Social — co to jest i jak go mierzyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            84% udostępnień treści odbywa się przez prywatne kanały niewidoczne dla analityki.
            Poznaj czym jest dark social, dlaczego to najcenniejszy ruch i jak go mierzyć i optymalizować.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest dark social?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Dark social</strong> to ruch na stronie, który pochodzi z prywatnych kanałów
              komunikacji — wiadomości prywatnych, emaila, SMS — i który narzędzia analityczne
              klasyfikują błędnie jako "direct traffic", bo nie mają informacji o źródle.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Termin stworzył Alexis Madrigal z The Atlantic w 2012 roku. Dziś dark social obejmuje
              WhatsApp, Messenger, Slack, Discord, prywatne emaile i każdy link skopiowany
              bez parametrów śledzących. To nie jest problem techniczny — to fundamentalna zmiana
              w tym, jak ludzie rekomendują produkty i treści.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "84%", opis: "wszystkich udostępnień treści online odbywa się przez dark social (RadiumOne)" },
                { stat: "16%", opis: "udostępnień odbywa się przez publiczne sieci społecznościowe" },
                { stat: "~60%", opis: "'direct traffic' w Google Analytics to faktycznie dark social" },
              ].map((s, i) => (
                <div key={i} className="bg-slate-900 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-amber-400 mb-2">{s.stat}</p>
                  <p className="text-slate-300 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kanały */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kanały dark social</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kanał</th>
                    <th className="p-3 text-left">Udział</th>
                    <th className="p-3 text-left">Dlaczego jest dark social?</th>
                  </tr>
                </thead>
                <tbody>
                  {darkSocialChannels.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kanał}</td>
                      <td className="p-3 text-amber-700 font-medium text-sm">{row.udział}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.dlaczego}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Strategie */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 strategii mierzenia i optymalizacji dark social</h2>
            <div className="space-y-5">
              {darkSocialStrategies.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-lg">{s.strategia}</h3>
                    <div className="flex gap-2 flex-shrink-0 ml-4">
                      <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded">Trudność: {s.trudność}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-2">{s.opis}</p>
                  <p className="text-amber-700 text-sm font-medium">Wpływ: {s.wpływ}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — dark social</h2>
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

      <RelatedArticles currentArticleId="dark-social-co-to" />
      <ContactSection />
    </Layout>
  );
}
