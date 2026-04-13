import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest social commerce?",
    answer:
      "Social commerce to sprzedaż produktów bezpośrednio w platformach społecznościowych — bez opuszczania aplikacji przez użytkownika. Zamiast kierować ruch na zewnętrzny sklep, zakup odbywa się w obrębie Instagrama, TikToka, Facebooka czy Pinterest. Social commerce łączy odkrycie produktu z możliwością natychmiastowego zakupu.",
  },
  {
    question: "Jakie platformy wspierają social commerce w Polsce?",
    answer:
      "W Polsce dostępne są: Instagram Shopping (tagowanie produktów w postach i reels), Facebook Shops, TikTok Shop (rozwijający się), Pinterest Shopping oraz YouTube Shopping. Meta (Facebook/Instagram) ma najdojrzalszą infrastrukturę social commerce dla polskich sprzedawców.",
  },
  {
    question: "Jaka jest różnica między social commerce a e-commerce?",
    answer:
      "E-commerce to zakupy na dedykowanej platformie sklepowej (Allegro, własny sklep). Social commerce dzieje się w środowisku społecznościowym — odkrycie, zaangażowanie i zakup w jednym miejscu. Social commerce wykorzystuje dowód społeczny (opinie znajomych, influencerów) w procesie zakupowym.",
  },
  {
    question: "Czy social commerce jest skuteczny dla małych firm?",
    answer:
      "Tak — social commerce wyrównuje szanse. Małe marki DTC (direct-to-consumer) mogą skutecznie konkurować z dużymi graczami dzięki autentycznemu contentu, mikroinfluencerom i organicznemu zasięgowi. Kluczem jest wysokiej jakości zdjęcia produktów, UGC i spójny visual identity.",
  },
  {
    question: "Jak mierzyć skuteczność social commerce?",
    answer:
      "Kluczowe metryki social commerce to: Revenue from social (przychód z kanałów social), współczynnik konwersji product page (w obrębie platformy), ROAS z shoppable ads, liczba zapisów do wishlist, stosunek product views do zakupów oraz koszt pozyskania klienta z social.",
  },
];

const platforms = [
  {
    platforma: "Instagram Shopping",
    funkcje: "Product tags w postach, reels i stories; Instagram Checkout; Shop tab",
    najlepsze_dla: "Fashion, beauty, lifestyle, DTC marki",
    dojrzałość: "Bardzo dojrzała",
    zasięg_pl: "Bardzo wysoki",
  },
  {
    platforma: "Facebook Shops",
    funkcje: "Sklep na stronie FB; integracja z Instagram; Messenger checkout",
    najlepsze_dla: "Szeroka demografika, B2C masowy",
    dojrzałość: "Dojrzała",
    zasięg_pl: "Bardzo wysoki",
  },
  {
    platforma: "TikTok Shop",
    funkcje: "Shoppable videos, live shopping, affiliate marketing",
    najlepsze_dla: "Gen Z, impulse buying, produkty viralowe",
    dojrzałość: "Rozwijająca się w PL",
    zasięg_pl: "Rosnący",
  },
  {
    platforma: "Pinterest Shopping",
    funkcje: "Product Pins, shoppable boards, visual search",
    najlepsze_dla: "Home decor, DIY, fashion, weddings",
    dojrzałość: "Dojrzała",
    zasięg_pl: "Średni",
  },
  {
    platforma: "YouTube Shopping",
    funkcje: "Product shelves pod filmem, shoppable ads, live shopping",
    najlepsze_dla: "Produkty wymagające demonstracji",
    dojrzałość: "Rozwijająca się",
    zasięg_pl: "Wysoki",
  },
];

const socialCommerceStrategies = [
  {
    strategia: "UGC jako social proof",
    opis: "Zachęcaj klientów do tagowania marki w postach z produktem. Repostuj najlepsze UGC na profilu marki — to najsilniejszy dowód społeczny w social commerce.",
  },
  {
    strategia: "Live Shopping",
    opis: "Sprzedaż na żywo przez Instagram Live, TikTok Live lub Facebook Live z możliwością zakupu produktów w trakcie transmisji. W Chinach odpowiada za 10-20% całego e-commerce.",
  },
  {
    strategia: "Mikroinfluencer collaborations",
    opis: "Partnerstwa z influencerami 5k–100k followersów. Wyższy engagement rate, bardziej niszowa i zaangażowana publiczność, niższy koszt vs. makroinfluencerzy.",
  },
  {
    strategia: "Shoppable content",
    opis: "Każdy post produktowy powinien być tagowany — reele, karuzele, stories. Upewnij się, że katalog produktów jest zawsze aktualny w Meta Commerce Manager.",
  },
  {
    strategia: "Social proof loop",
    opis: "Recenzje, oceny i komentarze w obrębie platformy wzmacniają konwersję. Prośba o review po zakupie i odpowiadanie na komentarze buduje zaufanie do sklepu.",
  },
];

export default function BlogSocialCommerceCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Social Commerce | Fotz Studio"
        description="Social commerce — definicja, platformy (Instagram, TikTok, Facebook Shop), strategie i metryki. Dowiedz się jak sprzedawać bezpośrednio w social mediach."
        canonicalUrl="https://fotz.pl/blog/social-commerce-co-to"

        keywords="Social Commerce co to jest, Social Commerce definicja, czym jest Social Commerce, Social Commerce w marketingu, Social Commerce przykłady, jak działa Social Commerce, Social Commerce strategia"

        canonical="https://fotz.pl/blog/social-commerce-co-to"
      />
      <ArticleSchema
        title="Social Commerce — co to jest i jak działa?"
        description="Kompletny przewodnik po social commerce: platformy, strategie i metryki skutecznej sprzedaży w mediach społecznościowych."
        url="https://fotz.pl/blog/social-commerce-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Social Commerce", url: "https://fotz.pl/blog/social-commerce-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Social Commerce" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Social Commerce — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Social commerce to przyszłość zakupów online — produkty odkrywane i kupowane bez opuszczania
            platformy społecznościowej. Poznaj platformy, strategie i metryki skutecznej sprzedaży w social media.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest social commerce?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Social commerce</strong> to integracja handlu elektronicznego bezpośrednio w platformach
              mediów społecznościowych. Zamiast tradycyjnej ścieżki "reklama na Instagramie — przejście do sklepu",
              cały proces od odkrycia produktu do zakupu odbywa się w jednej aplikacji.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Globalny rynek social commerce osiągnął wartość ok. 1,3 biliona dolarów w 2023 roku
              i prognozuje się, że do 2028 roku przekroczy 6 bilionów dolarów.
              W Chinach social commerce (WeChat, Douyin/TikTok) odpowiada już za kilkanaście procent całego e-commerce.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "1,3 bln $", opis: "wartość rynku social commerce globalnie (2023)" },
                { stat: "76%", opis: "konsumentów kupuje produkty, które wcześniej widziało w social mediach" },
                { stat: "3×", opis: "wyższy wskaźnik zaangażowania shoppable content vs. zwykłych postów" },
              ].map((s, i) => (
                <div key={i} className="bg-pink-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-pink-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Platformy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Platformy social commerce w Polsce</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Platforma</th>
                    <th className="p-3 text-left">Kluczowe funkcje</th>
                    <th className="p-3 text-left">Najlepsze dla</th>
                    <th className="p-3 text-left">Zasięg w PL</th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.platforma}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.funkcje}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.najlepsze_dla}</td>
                      <td className="p-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          row.zasięg_pl === "Bardzo wysoki" ? "bg-green-100 text-green-700" :
                          row.zasięg_pl === "Rosnący" ? "bg-blue-100 text-blue-700" :
                          row.zasięg_pl === "Wysoki" ? "bg-teal-100 text-teal-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>{row.zasięg_pl}</span>
                      </td>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 kluczowych strategii social commerce</h2>
            <div className="space-y-5">
              {socialCommerceStrategies.map((s, i) => (
                <div key={i} className="flex gap-5 bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{s.strategia}</h3>
                    <p className="text-slate-600">{s.opis}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — social commerce</h2>
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
