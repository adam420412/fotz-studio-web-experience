import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Smartphone,
  Code,
  Palette,
  BookOpen,
  Search,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { FadeInView } from '@/components/FadeInView';
import { ContactSection } from '@/components/sections/ContactSection';
import { PageBreadcrumbs } from '@/components/PageBreadcrumbs';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

const TworzenieStronGdansk = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Usługi', href: '/uslugi' },
    { label: 'Tworzenie stron internetowych', href: '/uslugi/tworzenie-stron-internetowych' },
    { label: 'Gdańsk' },
  ];

  const regionalCities = [
    'Gdańsk',
    'Gdynia',
    'Sopot',
    'Tczew',
    'Rummelsburg',
    'Wejherowo',
    'Starogard Gdański',
    'Słupsk',
  ];

  const industries = [
    {
      icon: Zap,
      title: 'E-commerce & Turystyka',
      description: 'Strony sprzedażowe i rezerwacyjne dla branży turystycznej Trójmiasta',
      examples: 'hotele, pensjonaty, galerie sztuki, sklepy online',
    },
    {
      icon: Shield,
      title: 'Logistyka & Transport',
      description: 'Systemy dla firm transportowych i spedycyjnych z portu gdańskiego',
      examples: 'firmy logistyczne, agencje celne, obsługa ładunków',
    },
    {
      icon: Code,
      title: 'Tech & Startup',
      description: 'Rozwiązania dla rostącego ekosystemu startupów i tech-firm',
      examples: 'startup infotech, agencje software, DevOps, cloud',
    },
    {
      icon: Users,
      title: 'Usługi Profesjonalne',
      description: 'Witryny dla konsultantów, doradców, kancelarii i firm B2B',
      examples: 'kancelarie prawne, konsulting, doradztwo biznesu',
    },
    {
      icon: Award,
      title: 'Edukacja & Nauczanie',
      description: 'Portale edukacyjne i szkoły prywatne Gdańska',
      examples: 'szkoły biznesu, kursy online, korepetycje, akademie',
    },
    {
      icon: TrendingUp,
      title: 'Handel & Rzemiosło',
      description: 'Strony dla sklepów, salonów i usług rzemieślniczych',
      examples: 'salony fryzjerskie, stolarstwo, ślusarstwo, oprawy',
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '499',
      description: 'Idealna dla małych firm',
      features: [
        'Domena .pl na rok',
        '5 podstron',
        'Formularz kontaktowy',
        'Responsywny design',
        'Hosting przez 12 miesięcy',
        'Email biznesowy (3 konta)',
      ],
    },
    {
      name: 'Pro',
      price: '999',
      description: 'Popularna dla większości firm',
      features: [
        'Wszystko z planu Starter',
        'Nieograniczone podstrony',
        'Blog/aktualności',
        'Integracja z mediami społecznymi',
        'SEO on-page',
        'Email biznesowy (10 kont)',
        'Bezpłatne aktualizacje',
        'Wsparcie 24/7',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '2499',
      description: 'Dla zaawansowanych',
      features: [
        'Wszystko z planu Pro',
        'Sklep online / e-commerce',
        'Integracja CRM',
        'Asystent AI chatbot',
        'Kampania Google Ads (3 mies.)',
        'Audyt SEO',
        'Email biznesowy (20+ kont)',
        'Dedykowany manager',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      emoji: '🎯',
      title: 'Konsultacja',
      description: 'Poznajemy Twoją branżę, cele i konkurencję w Gdańsku',
      time: '1-2 dni',
    },
    {
      step: '02',
      emoji: '✏️',
      title: 'Projekt',
      description: 'Projektujemy układ, kolory i funkcjonalność strony',
      time: '3-5 dni',
    },
    {
      step: '03',
      emoji: '💻',
      title: 'Implementacja',
      description: 'Budujemy stronę z najnowszymi technologiami',
      time: '5-7 dni',
    },
    {
      step: '04',
      emoji: '🚀',
      title: 'Launch',
      description: 'Testujemy, optymalizujemy i uruchamiamy stronę live',
      time: '1-2 dni',
    },
  ];

  const faqItems = [
    {
      id: 'faq-1',
      question: 'Jak długo trwa stworzenie strony internetowej w Gdańsku?',
      answer:
        'Średni czas to 2-3 tygodnie od konsultacji do uruchomienia. Strony Starter są szybsze (1-2 tygodnie), zaś sklepy e-commerce mogą wymagać 3-4 tygodni. Dokładny harmonogram ustalamy indywidualnie.',
    },
    {
      id: 'faq-2',
      question: 'Czy strona będzie zoptymalizowana do wyszukiwarek?',
      answer:
        'Tak, każda strona otrzymuje SEO on-page (mapa strony, meta tagi, strukturalne dane). Pakiet Pro i Enterprise zawierają dodatkową optymalizację SEO i wsparcie rankingowe.',
    },
    {
      id: 'faq-3',
      question: 'Czy mogę sama edytować zawartość strony?',
      answer:
        'W pakietach Pro i Enterprise dostarczamy panel CMS, dzięki któremu możesz zmieniać teksty i zdjęcia bez wiedzy technicznej. W Starterze edycje wykonujemy na Twoją prośbę.',
    },
    {
      id: 'faq-4',
      question: 'Czy strona będzie dostępna na telefonach?',
      answer:
        'Oczywiście! Wszystkie nasze strony są w pełni responsywne i dostosowane do urządzeń mobilnych. Google faworyzuje strony mobile-first.',
    },
    {
      id: 'faq-5',
      question: 'Co jeśli będę chciał zmienić dostawcę hostingu?',
      answer:
        'Strona będzie całkowicie Twoja. W każdej chwili możesz przenieść domenę i pliki strony do innego dostawcy. Zapewniamy wszystkie niezbędne materiały do transferu.',
    },
    {
      id: 'faq-6',
      question: 'Czy oferujecie stronę dla biznesu logistycznego z portu?',
      answer:
        'Tak! Specjalizujemy się w stronach dla firm transportowych, logistycznych i spedycyjnych. Integrujemy systemy do śledzenia przesyłek, zarządzania ładunkami i dokumentacją celną.',
    },
    {
      id: 'faq-7',
      question: 'Czy mogą Państwo zapewnić kampanię Google Ads?',
      answer:
        'W pakiecie Enterprise otrzymujesz 3-miesięczną kampanię Google Ads od naszych specjalistów. Dla mniejszych pakietów oferujemy usługę ad-on za dodatkową opłatę.',
    },
    {
      id: 'faq-8',
      question: 'Gdzie znajduje się Wasza agencja? Czy jesteście lokalnie w Gdańsku?',
      answer:
        'Agencja fotz.pl działała pierwotnie w Warszawie, ale pracujemy z klientami z całej Polski i zagranicą. Obsługujemy każdy region równie profesjonalnie. Możemy się spotkać online lub umówić konsultację telefoniczną.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych Gdańsk | Profesjonalne strony WWW"
        description="Tworzymy profesjonalne strony internetowe w Gdańsku i Trójmieście. Nowoczesne, szybkie strony dla firm. Od 499 zł netto. Bezpłatna wycena i konsultacja!"
        canonical="https://fotz.pl/uslugi/tworzenie-stron-internetowych/gdansk"
        keywords="tworzenie stron internetowych gdańsk, strony internetowe gdańsk, tworzenie stron www gdańsk, projektowanie stron internetowych gdańsk, strony www gdańsk, strony internetowe trójmiasto, tworzenie stron gdańsk, strona internetowa gdańsk, strony internetowe gdynia, agencja webdesign gdańsk, projektowanie stron gdańsk, sklep internetowy gdańsk"
      />
      <ServiceSchema
        name="Tworzenie stron internetowych Gdańsk"
        description="Profesjonalne tworzenie stron internetowych w Gdańsku i Trójmieście dla firm i biznesu"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <Layout>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <PageBreadcrumbs breadcrumbs={breadcrumbs} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Tworzenie stron internetowych Gdańsk i Trójmiasto
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl">
              Tworzenie stron internetowych Gdańsk — profesjonalne strony www i sklepy internetowe dla firm z Gdańska, Gdyni i Sopotu. Projektowanie stron internetowych Gdańsk z nowoczesnym designem, optymalizacją SEO i wsparciem technicznym.
            </p>
            <p className="text-base text-gray-500 mb-8 max-w-2xl">
              Strony internetowe Trójmiasto — szybkie, responsywne strony www dla firm z całego regionu. Tworzenie stron www Gdańsk od 499 zł netto. Bezpłatna wycena i konsultacja.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">750k+</div>
              <div className="text-sm text-gray-600">Mieszkańców Trójmiasta</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">Intel & Amazon</div>
              <div className="text-sm text-gray-600">Centra tech w regionie</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">7M+</div>
              <div className="text-sm text-gray-600">Turystów rocznie</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">Port</div>
              <div className="text-sm text-gray-600">Północny hub logistyki</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/kontakt"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Bezpłatna wycena →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coverage Section */}
      <FadeInView>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Obsługujemy całe Trójmiasto i okolice</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regionalCities.map((city, idx) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <p className="font-semibold text-gray-900">{city}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Why Local Businesses Need Websites */}
      <FadeInView>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Dlaczego firmy w Gdańsku potrzebują dobrej strony?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Turystyka i sezonowość',
                  description: 'Gdańsk przyciąga miliony turystów rocznie. Strona pełni rolę ekspozytury Twojej firmy dla turystów i klientów zdalnych.',
                },
                {
                  icon: Shield,
                  title: 'Logistyka i port',
                  description: 'Porządnie zaprezentowana strona zbuduje wiarygodność wśród firm logistycznych, spedytorów i importerów szukających partnerów.',
                },
                {
                  icon: Code,
                  title: 'Ekosystem tech',
                  description: 'Wraz z Wrocławiem, Gdańsk to hub technologiczny. Dobrze zaprojektowana strona przyciąga talent i inwestorów.',
                },
                {
                  icon: TrendingUp,
                  title: 'Konkurencja online',
                  description: 'W mieście pełnym biznesów, strona to Twoje narzędzie, aby wyróżnić się i zajmować czołowe pozycje w Google.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
                  >
                    <Icon className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Industries Section */}
      <FadeInView>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Branże, które obsługujemy w Gdańsku</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-gray-700 mb-3">{industry.description}</p>
                    <p className="text-sm text-gray-600 italic">Np. {industry.examples}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Packages Section */}
      <FadeInView>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pakiety cenowe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-lg p-8 transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105'
                      : 'bg-white border-2 border-gray-200 hover:border-blue-400'
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mb-4 ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>{pkg.description}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {pkg.price} zł
                    </span>
                    <span className={`ml-2 ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>/netto</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-blue-100' : 'text-green-600'}`} />
                        <span className={pkg.highlighted ? 'text-blue-50' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Process Section */}
      <FadeInView>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Nasze 4-etapowe podejście</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{p.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{p.description}</p>
                  <p className="text-blue-600 font-semibold text-sm">∼ {p.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Green Highlight Section */}
      <FadeInView>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto bg-green-50 rounded-lg p-8 border-l-4 border-green-600">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Gwarantujemy rezultaty</h3>
                <p className="text-green-800">
                  Każda strona otrzymuje bezpłatne wsparcie przez 3 miesiące, optymalizację SEO i gwarancję zadowolenia. Jeśli coś nie zadziała, poprawiamy to za darmo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ Section */}
      <FadeInView>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Pytania i odpowiedzi</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="bg-white rounded-lg border border-gray-200">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <span className="text-left text-gray-900 font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-700">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </FadeInView>

      {/* Contact Section */}
      <ContactSection
        heading="Zamów stronę internetową w Gdańsku"
        subheading="Bezpłatna konsultacja dla firm z Trójmiasta. Wycena bez zobowiązań."
      />
      </Layout>
    </>
  );
};

export default TworzenieStronGdansk;
