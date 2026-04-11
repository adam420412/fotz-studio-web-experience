import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest dwustronny rynek (two-sided marketplace)?",
    answer: "Two-sided marketplace (dwustronny rynek) to platforma łącząca dwie odrębne grupy użytkowników, którzy tworzą wartość dla siebie nawzajem. Platforma działa jako pośrednik i czerpie wartość z transakcji lub interakcji między stronami. Przykłady: Airbnb łączy gości z gospodarzami. Uber łączy pasażerów z kierowcami. Allegro łączy kupujących ze sprzedającymi. Booking.com łączy podróżnych z hotelami. AppStore łączy użytkowników z deweloperami. Kluczowa cecha: efekty sieciowe — im więcej użytkowników po jednej stronie, tym atrakcyjniejsza platforma dla drugiej strony.",
  },
  {
    question: "Jaki jest problem zimnego startu w marketplace?",
    answer: "Problem zimnego startu (cold start problem) to fundamentalne wyzwanie dla każdego marketplace: bez supply nie przyciągniesz demand, bez demand nie przyciągniesz supply. Jak go rozwiązać: Zacznij od jednej strony — zazwyczaj supply (dostawcy są bardziej motywowani jeśli widzą potencjalny biznes). Zbuduj fake supply — Airbnb ręcznie fotografował pierwsze nieruchomości. Amazon na początku sam kupował i odsprzedawał książki. Targetuj niszę geograficznie — Uber zaczynał tylko w San Francisco. Podmaź jedną stronę — daj supply darmowy dostęp lub gwarantowane przychody. Stwórz single-player value — produkt musi mieć wartość nawet bez drugiej strony (OpenTable rezerwacje + zarządzanie stolikami dla restauracji).",
  },
  {
    question: "Jak zarabiają marketplace'y?",
    answer: "Modele monetyzacji marketplace: Take rate (prowizja od transakcji) — najpopularniejszy model. Platforma pobiera % od każdej transakcji (Airbnb 3% od hosta + 14% od gościa, Allegro 3-8%, AppStore 30%). Subskrypcja — stała opłata za dostęp do platformy (LinkedIn Premium dla rekruterów i kandydatów). Listing fee — opłata za wystawienie oferty. Freemium — podstawowy dostęp darmowy, premium funkcje płatne. Lead generation — sprzedaż leadów do supply side (platformy prawnicze, ubezpieczeniowe). Advertising — supply side płaci za widoczność w wynikach (Allegro Ads, Amazon Sponsored). Kluczowy wskaźnik: take rate musi być wystarczająco wysoki dla marży, ale wystarczająco niski by supply nie 'bypassował' platformy.",
  },
  {
    question: "Jakie są efekty sieciowe w marketplace?",
    answer: "Efekty sieciowe w marketplace: Direct network effects — wartość platformy rośnie wprost proporcjonalnie do liczby użytkowników (im więcej kupujących, tym więcej sprzedających). Cross-side network effects — wzrost po jednej stronie zwiększa wartość dla drugiej strony (więcej kierowców Uber = krótszy czas oczekiwania = więcej pasażerów). Same-side network effects mogą być negatywne — więcej sprzedających = większa konkurencja = niższe ceny dla nich. Lokalne efekty sieciowe — marketplace często mają efekty sieciowe ograniczone geograficznie (Uber potrzebuje kierowców w każdym mieście osobno). Liquidity — kluczowa miara jakości marketplace: prawdopodobieństwo że zapytanie znajdzie match.",
  },
  {
    question: "Jak mierzyć sukces marketplace?",
    answer: "Kluczowe metryki marketplace: GMV (Gross Merchandise Value) — całkowita wartość transakcji przez platformę. Revenue = GMV x take rate. Liquidity — % zapytań które prowadzą do transakcji. Wysoka liquidity = zdrowy marketplace. Take rate — % prowizji. Musi rosnąć w miarę budowania silnej pozycji. Repeat rate — jak często obie strony wracają. Wysoki repeat = silne efekty sieciowe. NPS (dla obu stron osobno) — supply i demand mogą mieć różne NPS. Time to match — jak szybko zapytanie zostaje dopasowane do supply. Supplier concentration — czy top 10% supply generuje ponad 80% transakcji? Concentrated = ryzyko. Match rate — % ofert/requestów które prowadzą do transakcji.",
  },
];

const marketplaceChallenges = [
  {
    wyzwanie: "Cold Start Problem",
    opis: "Chicken-and-egg: bez supply nie ma demand, bez demand nie ma supply",
    strategia: "Zacznij od supply w jednej niszy. Zbuduj single-player value. Subwencjonuj jedną stronę.",
    przykład: "Airbnb fotografował nieruchomości ręcznie. Uber dawał kierowcom gwarantowaną stawkę godzinową.",
    kolor: "red",
  },
  {
    wyzwanie: "Disintermediation (Bypass)",
    opis: "Supply i demand dogadują się bezpośrednio, omijając platformę i prowizję",
    strategia: "Buduj wartość w platformie (płatności, ubezpieczenia, recenzje, onboarding). Trudno replicate offline.",
    przykład: "Airbnb ma ubezpieczenie, Allegro ma program ochrony kupującego, Upwork escrow.",
    kolor: "orange",
  },
  {
    wyzwanie: "Quality Control",
    opis: "Przy skali jakość supply drastycznie spada. Złe doświadczenie niszczy demand.",
    strategia: "System recenzji, weryfikacja, certyfikaty, algorytmy rankingu, offboarding złych dostawców.",
    przykład: "Airbnb Superhost, Allegro Super Sprzedawca, Uber rating system.",
    kolor: "yellow",
  },
  {
    wyzwanie: "Fragmentation",
    opis: "Płaski rynek gdzie każdy sprzedaje wszystko — brak jakości i specjalizacji",
    strategia: "Wertykalny focus na niszy. Lepsza curation. Boutique marketplace vs. masowy.",
    przykład: "Etsy (handmade) vs Amazon, Dribbble (design) vs LinkedIn.",
    kolor: "purple",
  },
  {
    wyzwanie: "Winner-Takes-Most Dynamics",
    opis: "Efekty sieciowe prowadzą do monopolizacji przez jednego gracza w kategorii",
    strategia: "Buduj 'unfair advantage' wcześnie. Multi-homing barriers. Exclusive supply.",
    przykład: "Allegro dominuje w Polsce przez early mover advantage i inwestycje w supply.",
    kolor: "blue",
  },
];

const marketplaceTypes = [
  { typ: "Transaction Marketplace", opis: "Platforma umożliwia i rozlicza transakcje end-to-end", przykłady: "Airbnb, Uber, Allegro, eBay", monetyzacja: "Take rate od GMV", kolor: "blue" },
  { typ: "Lead Gen Marketplace", opis: "Platforma łączy demand z supply, ale transakcja odbywa się poza platformą", przykłady: "Booking (display only), platformy B2B leads, LegalZoom", monetyzacja: "Lead fee, subscription", kolor: "green" },
  { typ: "SaaS + Marketplace", opis: "Platforma oferuje narzędzia (SaaS) dla supply + marketplace dla demand", przykłady: "Shopify, Mindbody, Toast POS", monetyzacja: "SaaS subscription + take rate", kolor: "purple" },
  { typ: "Community Marketplace", opis: "Platforma buduje społeczność, z której wyrastają transakcje", przykłady: "Etsy, Dribbble, Behance, Upwork", monetyzacja: "Membership + transaction fee", kolor: "orange" },
];

export default function BlogTwoSidedMarketplaceCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Two-Sided Marketplace — co to jest i jak budować? | Fotz.pl"
        description="Dwustronny rynek (two-sided marketplace): jak działa, cold start problem, modele monetyzacji, efekty sieciowe i kluczowe metryki. Przewodnik dla założycieli."
        canonicalUrl="https://fotz.pl/blog/two-sided-marketplace-dwustronny-rynek-co-to-jest"
      />
      <ArticleSchema
        title="Two-Sided Marketplace — co to jest i jak budować?"
        description="Dwustronny rynek (two-sided marketplace): cold start problem, efekty sieciowe, modele monetyzacji, typy marketplace i kluczowe metryki dla założycieli."
        url="https://fotz.pl/blog/two-sided-marketplace-dwustronny-rynek-co-to-jest"
        datePublished="2024-02-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Two-Sided Marketplace", url: "https://fotz.pl/blog/two-sided-marketplace-dwustronny-rynek-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Two-Sided Marketplace", href: "/blog/two-sided-marketplace-dwustronny-rynek-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Business Models
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Two-Sided Marketplace
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Airbnb, Uber, Allegro — platformy łączące dwie strony rynku to jedne
              z najbardziej wartościowych biznesów na świecie. Jak działa efekt sieciowy
              i jak pokonać cold start problem?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Strony rynku", value: "2+" },
                { label: "Kluczowy wskaźnik", value: "GMV" },
                { label: "Moat", value: "Efekty sieciowe" },
                { label: "Główne wyzwanie", value: "Cold start" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-violet-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typy marketplace</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie każdy marketplace działa tak samo. Różnią się modelem transakcji,
              rolą platformy w procesie i sposobem monetyzacji.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-5">
            {marketplaceTypes.map((t) => (
              <FadeInView key={t.typ}>
                <div className={`rounded-xl border-2 p-6 h-full ${
                  t.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  t.kolor === "green" ? "border-green-200 bg-green-50" :
                  t.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    t.kolor === "blue" ? "text-blue-800" :
                    t.kolor === "green" ? "text-green-800" :
                    t.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>{t.typ}</h3>
                  <p className="text-gray-700 text-sm mb-3">{t.opis}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-700">Przykłady: </span>
                    <span className="text-gray-600">{t.przykłady}</span>
                  </div>
                  <div className="text-sm mt-1">
                    <span className="font-semibold text-gray-700">Monetyzacja: </span>
                    <span className="text-gray-600">{t.monetyzacja}</span>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Wyzwania */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 największych wyzwań marketplace</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Budowanie marketplace jest trudne. Poza cold start problem czeka Cię
              wiele kolejnych wyzwań operacyjnych i strategicznych.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {marketplaceChallenges.map((c) => (
              <FadeInView key={c.wyzwanie}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{c.wyzwanie}</h3>
                  <p className="text-gray-600 text-sm mb-3">{c.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs font-bold text-blue-600 uppercase mb-1">Strategia</div>
                      <p className="text-sm text-gray-700">{c.strategia}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Przykład</div>
                      <p className="text-sm text-gray-700">{c.przykład}</p>
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
