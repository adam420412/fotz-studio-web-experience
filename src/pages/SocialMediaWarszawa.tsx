import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function SocialMediaWarszawa() {
  const breadcrumbItems = [
    { label: "Strona glowna", path: "/" },
    { label: "Social Media", path: "/social-media" },
    { label: "Social Media Warszawa", path: "/social-media/warszawa" }
  ];

  const services = [
    {
      title: "Strategia tresci",
      description: "Opracowanie spersonalizowanej strategii social media dostosowanej do Twojej branzy i grupy docelowej w Warszawie."
    },
    {
      title: "Tworzenie grafik",
      description: "Profesjonalne grafiki dostosowane do kazdej platformy, spójne z Twoim identyfikowaniem wizualnym."
    },
    {
      title: "Pisanie postow",
      description: "Angażujące teksty do postow, które budzą emocje i zachecają do interakcji odbiorcy w Warszawie."
    },
    {
      title: "Harmonogram i publikacja",
      description: "Regularnie publikowane posty w optymalnych godzinach dla maksymalnego zasiegu i zaangażowania."
    },
    {
      title: "Community management",
      description: "Odpowiadamy na komentarze, wiadomosci i budujemy relacje z Twoimi fanami i klientami."
    },
    {
      title: "Miesięczny raport",
      description: "Szczegółowa analiza wyników z metrykami, insights i rekomendacjami do optymalizacji."
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      description: "Dla firm lokalnych i B2C",
      details: "Idealna platforma do budowania zaangażowanej społeczności wśród firm w Warszawie. Doskonała do promocji lokalnych usług, organizacji eventów i komunikacji z klientami.",
      icon: "f"
    },
    {
      name: "Instagram",
      description: "Dla marek wizualnych",
      details: "Perfekt dla beauty, fashion, food i fotografii. Branże wizualne z Warszawy powinny miec silna obecnosc na Instagramie ze Storiami i Reelsami.",
      icon: "i"
    },
    {
      name: "LinkedIn",
      description: "B2B i rekrutacja",
      details: "Niezbędny dla firm IT, agencji, usług profesjonalnych i rekrutacji. Warszawskie IT i startup'i zyskuja na LinkedIn zdywersyfikowaną wiedze i leads biznesowe.",
      icon: "l"
    },
    {
      name: "TikTok",
      description: "Dla mlodych odbiorców",
      details: "Doskonały do budowania wirusowych trendów i dotarcia do osób poniżej 35 lat. Restauracje, marki fashion i entertainment z Warszawy beda popularne na TikToku."
    }
  ];

  const pricing = [
    {
      package: "START",
      platforms: "Facebook LUB Instagram",
      posts: "8 postow/mies.",
      price: "900 zl"
    },
    {
      package: "GROWTH",
      platforms: "Facebook + Instagram",
      posts: "16 postow + Stories",
      price: "1 800 zl"
    },
    {
      package: "PRO",
      platforms: "3 platformy",
      posts: "24 posty + Reels + LinkedIn",
      price: "3 500 zl"
    }
  ];

  const differentiators = [
    {
      title: "Doswiadczenie z warszawskim rynkiem",
      description: "Znamy specyfike konkurencji, grupy docelowe i trendy charakterystyczne dla Warszawy i Mazowsza."
    },
    {
      title: "Dedykowany opiekun konta",
      description: "Otrzymujesz osobisty kontakt do specjalisty, ktorzy pilnuje Twoich kampanii i odpowiada na pytania."
    },
    {
      title: "Raporty co miesiac",
      description: "Dostajesz rzetelne dane o zasiegu, zaangażowaniu, wzroście follow i konwersjach z social media."
    },
    {
      title: "Integracja z Google Ads",
      description: "Łączymy social media z placa reklamami Google Ads dla kompleksowej strategii marketingowej."
    },
    {
      title: "Elastyczne umowy",
      description: "Zaczynamy od pakietu 1 miesiaca bez długoterminowych zobowiązan, mozliwość skalowania pakietu w górę."
    }
  ];

  const niches = [
    "Restauracje i gastronomia",
    "Kancelarie prawne",
    "Gabinety medyczne i dental",
    "Agencje nieruchomosci",
    "Firmy IT i software",
    "Beauty i SPA",
    "Sklepy e-commerce",
    "Firmy budowlane"
  ];

  const faqItems = [
    {
      question: "Ile kosztuje prowadzenie social media w Warszawie?",
      answer: "Cena zalezy od zakresu usług, liczby platform i liczby postow. Nasz pakiet START kosztuje 900 zl/mies., GROWTH 1800 zl/mies., a PRO 3500 zl/mies. Dla dużych firm z Warszawy mozemy przygotowac ofertę indywidualną."
    },
    {
      question: "Jak dlugo trwa efekt prowadzenia social media?",
      answer: "Pierwsze rezultaty sa widoczne juz po 1-2 miesiącach, ale budowanie solidnej bazy obserwatorów i zaangażowania zajmuje 3-6 miesięcy. Długoterminowe efekty rosną eksponencjalnie, jesli strategia jest spójna."
    },
    {
      question: "Czy agencja z innego miasta moze obsługiwac firmy z Warszawy?",
      answer: "Tak, mozliwe jest. Jednakze my mamy zespół w Warszawie i znamy lokalny rynek. Dla firm z Warszawy zalecamy agencje, ktora zna specyfikę konkurencji i trendy warszawskiego rynku."
    },
    {
      question: "Co wchodzi w sklad obsługi social media?",
      answer: "W nasz zakres wchodzi: opracowanie strategii, tworzenie grafik, pisanie postow, harmonogram publikacji, zarządzanie community (odpowiadanie na komentarze), moderacja i raport miesięczny z metrykami."
    },
    {
      question: "Jak czesto publikowac posty na Instagramie?",
      answer: "Rekomendujemy 4-5 postow na Instagramie dziennie, ale wartosc ma nad ilością. Dla firm z Warszawy polecamy 3-4 posty tygodniowo ze Storiami 5-7 razy w tygodniu."
    },
    {
      question: "Czy agencja moze tez robic reklamy platne (Meta Ads)?",
      answer: "Tak. Oferujemy również zarządzanie reklamami na Facebooku i Instagramie. Mozemy integrować organic reach z placa reklama dla maksymalnych rezultatów."
    },
    {
      question: "Jak zmierzyc efektywnosc social media dla mojej firmy?",
      answer: "Analizujemy zasiag, engagement, liczbe kliknięć, konwersje i ROI. Dostarczamy co miesiac raport z metryki. Dla kampanii e-commerce mozemy śledzic sprzedaż bezposrednio ze social media."
    },
    {
      question: "Czy oferujecie sesje fotograficzne do social media?",
      answer: "Sesje fotograficzne mozemy doporucic naszym partnerom fotografów w Warszawie. Sami skupiamy się na prowadzeniu social media, ale mozemy zkoordynowac współprace."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Agencja Social Media Warszawa — prowadzenie Facebooka i Instagrama | Fotz.pl"
        description="Profesjonalne prowadzenie social media dla firm z Warszawy. Agencja Fotz Studio z doswiadczeniem w obsludze Facebooka, Instagrama i LinkedIn. Pakiety od 800 zl/mies., efekty od 1 miesiaca."
        canonical="https://fotz.pl/social-media/warszawa"
        keywords="social media warszawa, agencja social media warszawa, zarządzanie social media warszawa, marketing social media warszawa, obsługa social media warszawa"
      />

      <ServiceSchema
        name="Obsługa Social Media Warszawa"
        description="Profesjonalne prowadzenie social media dla firm z Warszawy. Fotz Studio — agencja social media z doswiadczeniem."
        areaServed="Warszawa"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <PageBreadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Agencja Social Media Warszawa</h1>
          <p className="text-xl text-gray-200 mb-10">
            Profesjonalne prowadzenie mediow spolecznych dla firm z Warszawy. Zwiększ zasiag, zaangażowanie i sprzedaż dzięki strategii dostosowanej do warszawskiego rynku.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FadeInView>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Firmy z Warszawy</h3>
                <p className="text-gray-600">i okolic obsługujemy</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.1}>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">4+ Platformy</h3>
                <p className="text-gray-600">Facebook, Instagram, LinkedIn, TikTok</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Od 800 zl</h3>
                <p className="text-gray-600">Pakiety obsługi social media</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Od 1 miesiaca</h3>
                <p className="text-gray-600">Pierwsze efekty widoczne</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Section 1: Obsługa social media dla firm z Warszawy */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Obsługa social media dla firm z Warszawy
            </h2>
            <div className="prose max-w-none space-y-4">
              <p>
                Warszawa to dynamiczne centrum biznesu, gdzie konkurencja w social media jest intensywna. Firmy z Warszawy konkurują nie tylko z innymi firmami lokalnymi, ale również z markami z całej Polski. W tak konkurencyjnym środowisku obsługa social media wymaga profesjonalnego podejścia, strategii i stałego zaangażowania.
              </p>
              <p>
                Warszawa ma wyjątkowy rynek. Tu spotyka się biznes IT z branżą finansową, usługami profesjonalnymi i tradycyjnym handlem. Każda branża wymaga innego podejścia do komunikacji na mediach społecznych. Restauracja w Warszawie musi osiągnąć inny cel niż kancelaria prawna czy agencja nieruchomości.
              </p>
              <p>
                Profesjonalne prowadzenie social media dla firm z Warszawy to inwestycja, która przynosi konkretne rezultaty. Zwiększony zasiąg, więcej wiadomości od zainteresowanych klientów, lepsze pozycjonowanie w wyszukiwarce i – co najważniejsze – więcej sprzedaży. Jednak sam social media to nie wszystko. Musi być spójna z Twoją całą strategią marketingową.
              </p>
              <p>
                W Fotz Studio obsługujemy firmy z Warszawy od ponad pięciu lat. Znamy warszawski rynek, wiemy, jak się zmienia, jakie trendy się pojawiają i które platformy są najważniejsze dla danej branży. Nasze doświadczenie to Twoja przewaga konkurencyjna.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Section 2: Co robimy dla firm z Warszawy? */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Co robimy dla firm z Warszawy?
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <FadeInView key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Platformy social media */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Platformy social media, które prowadzimy
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, idx) => (
              <FadeInView key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-lg p-6 border-l-4 border-pink-600 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{platform.name}</h3>
                  <p className="text-pink-600 font-semibold mb-3">{platform.description}</p>
                  <p className="text-gray-600">{platform.details}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Cennik */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Cennik prowadzenia social media w Warszawie
            </h2>
          </FadeInView>
          <FadeInView>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Pakiet</th>
                    <th className="px-4 py-3 text-left font-semibold">Platformy</th>
                    <th className="px-4 py-3 text-left font-semibold">Posty na miesiąc</th>
                    <th className="px-4 py-3 text-left font-semibold">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.package}</td>
                      <td className="px-4 py-3 text-gray-600">{row.platforms}</td>
                      <td className="px-4 py-3 text-gray-600">{row.posts}</td>
                      <td className="px-4 py-3 font-bold text-pink-600">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Ceny mogą się różnić w zależności od zakresu usług. Dla dużych kampanii i długoterminowych umów oferujemy rabaty.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Section 5: Dlaczego firmy z Warszawy wybierają Fotz Studio? */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Dlaczego firmy z Warszawy wybierają Fotz Studio?
            </h2>
          </FadeInView>
          <div className="space-y-6">
            {differentiators.map((item, idx) => (
              <FadeInView key={idx} delay={idx * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Jakie firmy z Warszawy obsługujemy? */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Jakie firmy z Warszawy obsługujemy?
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {niches.map((niche, idx) => (
              <FadeInView key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-700">{niche}</p>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <p className="text-gray-600 text-center mt-10">
              Nie widzisz swojej branży? Skontaktuj się z nami. Dobrze pracujemy z każdą branżą i zawsze znajdujemy rozwiązanie dostosowane do konkretnych potrzeb.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Najczęstsze pytania
            </h2>
          </FadeInView>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <FadeInView key={idx} delay={idx * 0.05}>
                <details className="bg-white rounded-lg p-6 shadow-sm group">
                  <summary className="font-semibold text-slate-900 cursor-pointer flex justify-between items-center">
                    {item.question}
                    <span className="ml-4 text-pink-600">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">{item.answer}</p>
                </details>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <FAQSchema items={faqItems} />

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-4xl font-bold mb-6">Zlec prowadzenie social media w Warszawie</h2>
            <p className="text-lg text-gray-300 mb-10">
              Skontaktuj się z nami dzisiaj i odkryj, jak profesjonalne social media mogą zmienić Twój biznes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/social-media/obsluga"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Dowiedz się więcej
              </Link>
              <Link
                to="/kontakt"
                className="inline-block bg-white hover:bg-gray-100 text-slate-900 font-bold py-3 px-8 rounded-lg transition"
              >
                Skontaktuj się
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Bottom Links */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/blog/prowadzenie-social-media-cennik" className="text-pink-600 hover:text-pink-700 font-semibold">
                Blog: Cennik prowadzenia social media
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/social-media/obsluga" className="text-pink-600 hover:text-pink-700 font-semibold">
                Obsługa social media
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/blog/social-media-marketing-poradnik" className="text-pink-600 hover:text-pink-700 font-semibold">
                Blog: Poradnik social media marketing
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection city="Warszawa" />
    </Layout>
  );
}
