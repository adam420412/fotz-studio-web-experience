import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Search, TrendingUp, MapPin, Star, Award, CheckCircle } from "lucide-react";

export default function PozycjonowanieTorun() {
  const breadcrumbs = [
    { name: "Strona glowna", url: "/" },
    { name: "Pozycjonowanie", url: "/pozycjonowanie" },
    { name: "Torun", url: "/pozycjonowanie/torun" }
  ];

  const faqs = [
    {
      question: "Ile czasu zajmuje pozycjonowanie strony w Toruniu?",
      answer: "Typowo widoczne efekty pozycjonowania lokalnego pojawiają sie w ciagu 2-3 miesiecy. Jednak pene wyniki mogą zajac 4-6 miesiecy, w zaleznosci od konkurencyjnosci slow kluczowych i stanu poczatkowego Twojej strony. Pracujemy nad dlugookresowym wzrostem rankingu."
    },
    {
      question: "Jakie sa najlepsze slow kluczowe dla firm w Toruniu?",
      answer: "Dla biznesu w Toruniu rekomendujemy slow kluczowe z lokalizacja: 'pozycjonowanie Torun', 'agencja marketingowa Torun', 'uslugi SEO Torun', 'reklama w Toruniu' itd. Dostosowujemy slowa kluczowe do Twojej branzy i docelowych klientow."
    },
    {
      question: "Czy pozycjonowanie lokalne pomaga malym firmom?",
      answer: "Tak, absolutnie. Pozycjonowanie lokalne jest szczegolnie cenne dla malych biznesow. Gdy osoba wyszukuje 'hotel Torun' lub 'fryzjer Torun', chcemy, zeby znalazla Twoja firm. To przyciaga klientow z okolicy, ktorzy sa gotowi do konwersji."
    },
    {
      question: "Czy musial bym stworzyc firmowy profil w Google?",
      answer: "Tak, profil Google My Business (teraz Google Business Profile) jest kluczowy dla pozycjonowania lokalnego. Pomaga on uzytkownikom znalezc Twoja firm na mapie i wygladb informacji o niej. My zajmujemy sie optymalizacja tego profilu."
    },
    {
      question: "Jaka jest roznica miedzy SEO a pozycjonowaniem lokalnym?",
      answer: "SEO skupia sie na rankingu w wyszukiwarce globalnie, a pozycjonowanie lokalne optymalizuje widocznosc Twojej firmy dla klientow w konkretnym miescie lub regionie. Polaczenie obu strategii daje najlepsze rezultaty dla biznesu."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Torun - Agencja SEO dla firm w Toruniu | FOTZ"
        description="Profesjonalne pozycjonowanie i SEO dla firm w Toruniu. Zwieksz widocznosc w Google. Skuteczne strategie dla hoteli, restauracji, szkol i uslug. Bezplatna konsultacja."
        canonical="https://fotz.pl/pozycjonowanie/torun"
        keywords="pozycjonowanie toruń, agencja seo toruń, seo toruń, pozycjonowanie stron toruń, seo dla firm toruń, seo kujawsko-pomorskie, pozycjonowanie lokalne toruń"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <ServiceSchema
        name="Pozycjonowanie Torun - Uslugi SEO i Marketing"
        description="Profesjonalne uslugi pozycjonowania stron internetowych i SEO dla firm w Toruniu. Zwieksz widocznosc w Google i przyciagnij wiecej klientow."
        areaServed="Torun"
        serviceType="SEO and Local Marketing"
        priceRange="PLN 1500 - 5000"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pozycjonowanie Torun - Zwieksz widocznosc Twojej firmy
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Profesjonalne uslugi SEO i pozycjonowania lokalnego dla biznesu w Toruniu.
              Pojaw sie wysoko w wynikach Google i przyciagnij wiecej klientow.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Bezplatna konsultacja
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Poznaj nase pakiety
              </button>
            </div>
          </div>
        </section>

        {/* Why Local SEO Matters */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Dlaczego pozycjonowanie lokalne?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Klienci w okolicy</h3>
                <p className="text-gray-600">
                  Przyciagnij lokalnych klientow, ktorzy wyszukuja Twoje uslugi w Toruniu.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Wieksze konwersje</h3>
                <p className="text-gray-600">
                  Lokalni szukajacy maja wyzsze szanse zamiany na klientow platacych.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                  <Search className="text-purple-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Wysoka pozycja w Google</h3>
                <p className="text-gray-600">
                  Pozycjonowanie lokalne zwiekszy Twoja widocznosc w wynikach wyszukiwania.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                  <Award className="text-orange-600" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">ROI i efektywnosc</h3>
                <p className="text-gray-600">
                  Inwestycja w SEO to inwestycja w dlougotrwaly rozwoj biznesu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Torun */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Pozycjonowanie dla Torunia - miasta z bogatą historia</h2>
            <div className="prose prose-lg max-w-4xl">
              <p className="mb-6 text-gray-700 leading-relaxed">
                Torun to zabytkowe miasto na Kujawach z bogatą historia sredniowieczna. Jako rodzinne miasto Mikolaja Kopernika,
                Torun przyciaga tysiacom turystow rocznie. Jego stare miasto na liscie swiatowego dziedzictwa UNESCO jest sercem turystyki
                i biznesu w regionie. W Toruniu znajduje sie Uniwersytet Mikolaja Kopernika, jeden z najwiekszych uniwersytetow w Polsce,
                co przyciaga studentow i tworzył dynamiczny rynek uslug edukacyjnych i studenckich.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-6">Branże biznesu w Toruniu</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Torun ma roznorodny ekosystem biznesowy. Sektor turystyki jest kluczowy - hotele, pensjonaty, restauracje, i puby
                konkuruja o uwage zwiedzajacych. Uniwersytet Mikolaja Kopernika generuje ogromny popyt na uslugi studenckie - od wynajmu
                mieszkan po korepetycje. Sektor handlu i uslug serwisowych jest silnie rozwiniety, konkurencja jest duza, dlatego
                wiec pozycjonowanie jest niezbedne do znalezienia klientow online.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-6">Nasze uslugi pozycjonowania</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Specjalizujemy sie w pozycjonowaniu lokalnym dla firm w Toruniu. Nasz proces obejmuje:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Audit SEO:</strong> Analizujemy obecny stan Twojej strony, konkurencje, i identyfikujemy mozliwosci wzrostu.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Badania slow kluczowych:</strong> Znajdujemy slow kluczowe z wysokim popytem w Toruniu, dopasowane do Twojego biznesu.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Optymalizacja Google My Business:</strong> Poprawiamy Twoj profil na mapach Google z pelna informacja, zdjeciami, i recenzjami.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>On-page SEO:</strong> Optymalizujemy strukture strony, naglowki, i zawartosc dla slow kluczowych.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Link building:</strong> Budujemy zasluge przesylanymi z wiarygodnych zrodel, aby zwiekszyc autorytet domeny.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">
                    <strong>Monitorowanie i raporty:</strong> Sledztmy progress, raportujemy wyniki, i dokonujemy ulepszen na podstawie danych.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Pakiety cenowe pozycjonowania</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Startowy</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">1.500 zl</div>
                <p className="text-gray-600 mb-6">na miesiac</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Optymalizacja strony internetowej
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Profil Google My Business
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Raport miesieczy
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Wybierz
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition border-2 border-blue-600">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                  Najpopularniejszy
                </div>
                <h3 className="text-2xl font-bold mb-4">Standard</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">3.000 zl</div>
                <p className="text-gray-600 mb-6">na miesiac</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Wszystko z pakietu Startowy
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Badania slow kluczowych
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Link building
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Wsparcie 2x w tygodniu
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Wybierz
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">5.000 zl</div>
                <p className="text-gray-600 mb-6">na miesiac</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Wszystko z pakietu Standard
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Zaawansowana strategia SEO
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Zarządzanie reputacja online
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Wsparcie 5x w tygodniu
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-600" size={18} />
                    Doradztwo strategiczne
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Wybierz
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Jak pracujemy</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Konsultacja</h3>
                <p className="text-gray-600">
                  Poznajemy Twoj biznes, cele, i konkurencje.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Strategia</h3>
                <p className="text-gray-600">
                  Tworzymy spersonalizowany plan pozycjonowania.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Realizacja</h3>
                <p className="text-gray-600">
                  Wdrażamy strategie i monitorujemy wyniki.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Raporty</h3>
                <p className="text-gray-600">
                  Dostarczamy regularne raporty o postepach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Oś czasu efektów pozycjonowania</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 md:left-1/2 md:-ml-0.5"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="md:flex md:gap-8">
                    <div className="md:w-1/2 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold mb-2">Miesiace 1-3</h3>
                      <p className="text-gray-600">
                        Badania, optymalizacja strony, profil Google My Business. Pierwsze widoczne efekty w wynikach wyszukiwania.
                      </p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 md:-ml-4 mt-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      •
                    </div>
                  </div>

                  <div className="md:flex md:gap-8">
                    <div className="md:w-1/2 md:ml-auto md:pl-8">
                      <h3 className="text-xl font-bold mb-2">Miesiace 4-6</h3>
                      <p className="text-gray-600">
                        Link building i zaawansowana optymalizacja. Powazne wzrosty rankingu dla slow kluczowych.
                      </p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 md:-ml-4 mt-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      •
                    </div>
                  </div>

                  <div className="md:flex md:gap-8">
                    <div className="md:w-1/2 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold mb-2">Miesiace 6+</h3>
                      <p className="text-gray-600">
                        Stabilne pozycje w szczycie wyników, reguly inbound leads, pelen ROI z inwestycji SEO.
                      </p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 md:-ml-4 mt-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      •
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Czesto zadawane pytania</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                  <summary className="font-bold text-lg text-gray-900 flex items-center gap-4">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-700 ml-8">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Gotowy na wzrost biznesu?</h2>
            <p className="text-xl mb-8 opacity-90">
              Zacznij pozycjonowanie dzisiaj i zobaczy efekty w ciagu kilku miesiecy.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Zamow bezplatna konsultacje
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
