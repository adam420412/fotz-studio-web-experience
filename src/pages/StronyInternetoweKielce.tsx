import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Monitor, Code, Globe, Smartphone, Zap, Users, TrendingUp, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";


const faqs = [
  {
    question: "Ile czasu zajmuje stworzenie strony internetowej w Kielcach?",
    answer: "Czas realizacji strony internetowej zależy od złożoności projektu. Typowa strona wizytówka zajmuje 2-3 tygodnie, a bardziej zaawansowana strona e-commerce wymaga 6-8 tygodni. Oferujemy elastyczne harmonogramy dostosowane do potrzeb Klienta."
  },
  {
    question: "Czy strona będzie responsywna na urządzeniach mobilnych?",
    answer: "Tak, wszystkie strony internetowe tworzone przez naszą agencję są w pełni responsywne. Projektujemy mobile-first, co zapewnia doskonałe doświadczenie zarówno na smartfonach, tabletach jak i komputerach stacjonarnych."
  },
  {
    question: "Jakie systemy CMS instalujecie do zarządzania stroną?",
    answer: "Instalujemy popularne systemy CMS takie jak WordPress, umożliwiające łatwe zarządzanie treścią bez wiedzy technicznej. Możemy także zaproponować rozwiązania custom dostosowane do specificznych potrzeb biznesu."
  },
  {
    question: "Jak wygląda proces realizacji strony internetowej?",
    answer: "Proces obejmuje: konsultację i zbieranie wymagań, projektowanie makiet, programowanie frontend i backend, testowanie, optymalizację SEO, oraz szkolenie. Każdy etap jest uzgadniany z Klientem."
  },
  {
    question: "Czy oferujecie wsparcie po uruchomieniu strony?",
    answer: "Tak, oferujemy pakiety wsparcia obejmujące hosting, bezpieczeństwo, backup, aktualizacje i monitoring. Możemy także prowadzić bieżące modyfikacje i rozwijanie nowych funkcji."
  }
];

export default function StronyInternetoweKielce() {
  return (
    <Layout>
      <SEOHead
        title="Strony Internetowe Kielce | Projektowanie Stron WWW"
        description="Nowoczesne strony internetowe dla firm w Kielcach. Projektowanie, programowanie i optymalizacja stron WWW. Sprawdzone rozwiązania dla biznesu."
        canonical="https://fotz.pl/strony-internetowe/kielce"
        keywords="strony internetowe kielce, tworzenie stron kielce, projektowanie stron kielce, agencja webdesign kielce, budowa strony kielce"
      />

      <ServiceSchema
        name="Projektowanie Stron Internetowych w Kielcach"
        description="Profesjonalne projektowanie i programowanie stron internetowych dla firm w Kielcach. Responsywne, szybkie i optymalizowane pod SEO rozwiązania webowe."
        areaServed="Kielce"
      />

      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony internetowe", url: "https://fotz.pl/strony-internetowe" },
          { name: "Kielce", url: "https://fotz.pl/strony-internetowe/kielce" }
        ]}
      />

      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Strony Internetowe Kielce
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Profesjonalne projektowanie i tworzenie stron internetowych dla firm w Kielcach. Nowoczesne, responsywne i zoptymalizowane pod SEO rozwiązania webowe.
          </p>
          <Button size="lg" className="bg-blue-400 hover:bg-blue-500 text-blue-950">
            Bezpłatna Konsultacja
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Dlaczego Warto Nas Wybrać</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nowoczesny Kod</h3>
              <p className="text-gray-600">Używamy najnowszych technologii i frameworków. Każdy projekt to solidna, skalna baza dla przyszłego rozwoju.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Smartphone className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsywność</h3>
              <p className="text-gray-600">Strony działają perfekcyjnie na wszystkich urządzeniach. Od smartfonów po duże monitory - zawsze optymalne wyświetlanie.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-600">Optymalizujemy każdą stronę pod wyszukiwarki. Wysoka pozycja w Google to bezpośrednie korzyści biznesowe.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wsparcie</h3>
              <p className="text-gray-600">Zapewniamy stałe wsparcie techniczne, aktualizacje bezpieczeństwa i rozwój funkcjonalności.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nasze Usługi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Monitor className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Projektowanie UX/UI</h3>
              <p className="text-gray-600">Piękne, funkcjonalne interfejsy zorientowane na użytkownika.</p>
            </div>
            <div className="text-center">
              <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">E-commerce</h3>
              <p className="text-gray-600">Sklepy internetowe z integracją płatności i systemu logistycznego.</p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Optymalizacja</h3>
              <p className="text-gray-600">Szybkie ładowanie, SEO i konwersja to nasze priorytety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Proces Realizacji</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h3 className="font-semibold mb-2">Konsultacja</h3>
              <p className="text-gray-300 text-sm">Poznajemy Twój biznes i cele projektu.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h3 className="font-semibold mb-2">Projektowanie</h3>
              <p className="text-gray-300 text-sm">Tworzymy makiety i szukamy optymalnego rozwiązania.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h3 className="font-semibold mb-2">Programowanie</h3>
              <p className="text-gray-300 text-sm">Implementujemy wszystkie funkcje i optymalizacje.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h3 className="font-semibold mb-2">Wdrożenie</h3>
              <p className="text-gray-300 text-sm">Uruchamiamy stronę i zapewniamy wsparcie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Kielce */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Strony Internetowe dla Firm w Kielcach</h2>
          <p className="text-gray-700 mb-6">
            Kielce, będące dynamicznie rozwijającym się ośrodkiem gospodarczym, przyciąga przedsiębiorców z różnych branż. W dzisiejszych czasach posiadanie profesjonalnej strony internetowej to konieczność dla każdej firmy, niezależnie od jej wielkości. Nowoczesna strona to wizytówka Twojego biznesu w internecie, pierwszy punkt kontaktu z potencjalnymi klientami.
          </p>
          <p className="text-gray-700 mb-6">
            Projektowanie stron internetowych wymaga nie tylko pięknego wyglądu, ale przede wszystkim funkcjonalności i opanowania zaawansowanych technologii. Strona musi być zoptymalizowana pod kątem wyszukiwarek, aby Twoja firma znalazła się na czołowych pozycjach w wynikach Google. To bezpośrednio przekłada się na nowych klientów i wzrost przychodów.
          </p>
          <p className="text-gray-700 mb-6">
            Nasza agencja specjalizuje się w tworzeniu niestandardowych rozwiązań dostosowanych do specificznych potrzeb firm w Kielcach. Niezależnie od tego, czy prowadzisz małą pracownię, sieć sklepów, czy dużą fabrykę - mamy doświadczenie w każdej branży. Handlowcy, usługodawcy, producenci, edukatorzy - wszyscy mogą liczyć na nasze profesjonalne podejście.
          </p>
          <h3 className="text-2xl font-bold mb-4">Typy Stron Internetowych</h3>
          <p className="text-gray-700 mb-4">
            <strong>Strona wizytówka</strong> - najprostsza i najszybsza do wdrożenia, idealna dla małych firm i specjalistów. Zawiera podstawowe informacje o firmie, usługach, galerii oraz formularz kontaktowy.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Portal informacyjny</strong> - rozbudowana strona z regularnie aktualizowaną zawartością, artykułami, newslorem i zaawansowanymi funkcjami wyszukiwania. Idealna dla mediów, agencji i firm chcących budować autorytet.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Sklep elektroniczny</strong> - zaawansowana platforma e-commerce z katalogiem produktów, koszykiem, systemem płatności, logistyką i zarządzaniem zapasami. Pozwala na sprzedaż online i ekspansję biznesu na rynek globalny.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Aplikacja webowa</strong> - złożone oprogramowanie działające w przeglądarce, umożliwiające zarządzanie procesami biznesowymi, CRM, ERP czy systemy do rezerwacji.
          </p>
          <h3 className="text-2xl font-bold mb-4">Responsywność i Mobile-First</h3>
          <p className="text-gray-700 mb-6">
            Statystyki pokazują, że ponad 70% użytkowników internetu korzysta z urządzeń mobilnych. Dlatego każda nowoczesna strona musi być w pełni responsywna - idealnie dopasowana do telefonów, tabletów i komputerów. Projektujemy metodą mobile-first, co oznacza, że zaczynamy od wersji na telefon, a następnie rozszerzamy do większych ekranów. Gwarantuje to doskonałe doświadczenie niezależnie od urządzenia.
          </p>
          <h3 className="text-2xl font-bold mb-4">Systemy CMS i Zarządzanie Treścią</h3>
          <p className="text-gray-700 mb-6">
            Większość projektów wyposażamy w systemy CMS (Content Management System) takie jak WordPress, które pozwalają na łatwe zarządzanie treścią bez potrzeby wiedzy technicznej. Możesz sam zmieniać teksty, dodawać artykuły, galerie, czy publikować promocje. Systemy te wyposażone są także w zaawansowane funkcje SEO i analityki.
          </p>
          <h3 className="text-2xl font-bold mb-4">Optymalizacja SEO</h3>
          <p className="text-gray-700 mb-6">
            Stworzenie strony to dopiero początek. Aby przyciągnąć użytkowników z wyszukiwarek, konieczna jest optymalizacja SEO. Optymalizujemy strukturę stron, metadane, treści, linkowanie wewnętrzne oraz szybkość ładowania. Prowadzimy także kampanie linkowe i marketingowe, aby zwiększyć widoczność Twojej firmy w sieci.
          </p>
          <h3 className="text-2xl font-bold mb-4">Cennik i Harmonogram</h3>
          <p className="text-gray-700 mb-6">
            Ceny projektów zaczynają się od kilku tysięcy złotych dla prostych stron wizytówek, aż do dziesiątek tysięcy dla zaawansowanych rozwiązań e-commerce czy aplikacji webowych. Harmonogram realizacji wynosi typowo od 2 do 8 tygodni, w zależności od skomplikowania projektu. Oferujemy elastyczne warunki płatności i możliwość pracy w etapach.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pakiety Cenowe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow border-t-4 border-blue-400">
              <h3 className="text-2xl font-bold mb-2">Wizytówka</h3>
              <p className="text-gray-600 mb-6">Idealna dla małych firm i specjalistów</p>
              <div className="text-3xl font-bold text-blue-400 mb-6">3 000 zł</div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li>5-7 stron</li>
                <li>Responsywny design</li>
                <li>Formularz kontaktowy</li>
                <li>Podstawowe SEO</li>
                <li>Hosting na 1 rok</li>
              </ul>
              <Button className="w-full bg-blue-400 hover:bg-blue-500 text-blue-950">Wybrać</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow border-t-4 border-blue-400 transform scale-105">
              <div className="bg-blue-400 text-blue-950 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">Popularny</div>
              <h3 className="text-2xl font-bold mb-2">Biznes</h3>
              <p className="text-gray-600 mb-6">Dla rozwijających się firm</p>
              <div className="text-3xl font-bold text-blue-400 mb-6">7 000 zł</div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li>10-15 stron</li>
                <li>Zaawansowany design</li>
                <li>Blog i artykuły</li>
                <li>SEO optimization</li>
                <li>Analytics setup</li>
                <li>Hosting na 1 rok</li>
              </ul>
              <Button className="w-full bg-blue-400 hover:bg-blue-500 text-blue-950">Wybrać</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow border-t-4 border-blue-400">
              <h3 className="text-2xl font-bold mb-2">E-commerce</h3>
              <p className="text-gray-600 mb-6">Dla sklepów internetowych</p>
              <div className="text-3xl font-bold text-blue-400 mb-6">15 000 zł</div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li>Nieograniczone produkty</li>
                <li>System płatności</li>
                <li>Zarządzanie zapasami</li>
                <li>SEO+Marketing</li>
                <li>Wsparcie tech.</li>
                <li>Hosting na 1 rok</li>
              </ul>
              <Button className="w-full bg-blue-400 hover:bg-blue-500 text-blue-950">Wybrać</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Najczęstsze Pytania</h2>
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </Layout>
  );
}
