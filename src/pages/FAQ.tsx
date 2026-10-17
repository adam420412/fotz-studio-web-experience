import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Phone, Mail, Globe, Palette, TrendingUp, Video, ShoppingCart, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";

// Office images
import officeStairs from "@/assets/office/office-stairs.webp";
import officeSign from "@/assets/office/office-sign.webp";

const faqCategories = [
  {
    id: "general",
    name: "Ogólne",
    icon: HelpCircle,
    questions: [
      {
        question: "Czym zajmuje się Fotz Studio?",
        answer: "Fotz Studio to agencja marketingowa z Poznania specjalizująca się w kompleksowej obsłudze marketingowej firm. Zajmujemy się tworzeniem stron internetowych, prowadzeniem social media, produkcją video, pozycjonowaniem SEO, kampaniami reklamowymi Google Ads i Facebook Ads, identyfikacją wizualną oraz wizualizacjami 3D.",
      },
      {
        question: "Gdzie mieści się biuro Fotz Studio?",
        answer: "Pracujemy z Poznania. Z firmami z Poznania i okolic możemy spotkać się osobiście po wcześniejszym umówieniu terminu, a firmy z innych miast obsługujemy zdalnie — przez wideokonferencje, telefon i e-mail.",
      },
      {
        question: "Dla jakich branż pracujecie?",
        answer: "Współpracujemy z firmami z różnych branż: medyczna, gastronomia, beauty & wellness, nieruchomości, automotive, edukacja, prawo i finanse, e-commerce, IT & SaaS, produkcja, NGO oraz turystyka. Każda branża ma swoją specyfikę i dostosowujemy strategię marketingową do jej potrzeb.",
      },
      {
        question: "Jak wygląda proces współpracy z Fotz Studio?",
        answer: "Proces rozpoczynamy od bezpłatnej konsultacji, podczas której poznajemy Twoje cele biznesowe. Następnie przygotowujemy indywidualną strategię i ofertę. Po akceptacji przechodzimy do realizacji, regularnie raportując postępy. Stawiamy na długoterminową współpracę opartą na zaufaniu i przejrzystej komunikacji.",
      },
    ],
  },
  {
    id: "websites",
    name: "Strony internetowe",
    icon: Globe,
    questions: [
      {
        question: "Ile kosztuje strona internetowa?",
        answer: "Nie mamy sztywnego cennika. Wycena zależy od liczby podstron, projektu graficznego, potrzebnych funkcji i integracji (np. sklep, płatności, panel do edycji treści) oraz zakresu wsparcia po uruchomieniu. Domena i hosting to osobne koszty u dostawców. Wycenę przygotowujemy po rozmowie o zakresie.",
      },
      {
        question: "Jak długo trwa stworzenie strony internetowej?",
        answer: "Czas realizacji zależy od skali projektu, liczby podstron i funkcji, terminu dostarczenia materiałów (teksty, zdjęcia) oraz liczby rund poprawek. Harmonogram ustalamy indywidualnie przed startem prac i zapisujemy go w ofercie.",
      },
      {
        question: "Czy strona będzie responsywna (dostosowana do telefonów)?",
        answer: "Tak, wszystkie nasze strony są w pełni responsywne i dostosowane do urządzeń mobilnych. Wielu użytkowników odwiedza strony z telefonów, więc wersja mobilna jest dla nas priorytetem.",
      },
      {
        question: "Czy pomagacie w pozycjonowaniu strony?",
        answer: "Tak, oferujemy kompleksowe usługi SEO. Każda strona od nas jest zoptymalizowana pod kątem wyszukiwarek już na etapie tworzenia. Dodatkowo oferujemy stałą obsługę pozycjonowania z comiesięcznym raportowaniem. Nie gwarantujemy konkretnych pozycji w Google — opisujemy działania i ich efekty w raportach.",
      },
    ],
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: Users,
    questions: [
      {
        question: "Ile kosztuje prowadzenie social media?",
        answer: "Nie mamy sztywnych pakietów cenowych. Koszt zależy od liczby platform, liczby i rodzaju publikacji (posty, stories, reelsy), tego, czy treści video nagrywamy u Ciebie, oraz od zakresu moderacji i raportowania. Budżet na reklamy płacony platformom jest zawsze osobny. Wycenę przygotowujemy po rozmowie o zakresie.",
      },
      {
        question: "Jakie platformy social media obsługujecie?",
        answer: "Obsługujemy wszystkie główne platformy: Instagram, Facebook, LinkedIn, TikTok, YouTube oraz X (Twitter). Dobieramy platformy na podstawie analizy Twojej grupy docelowej i celów biznesowych.",
      },
      {
        question: "Czy tworzysz również treści video (Reelsy, TikToki)?",
        answer: "Tak, mamy własne studio podcastowe i zespół video. Tworzymy Reelsy, TikToki, YouTube Shorts i dłuższe formaty video. Zajmujemy się całym procesem - od koncepcji przez nagranie po montaż i publikację.",
      },
      {
        question: "Jak mierzycie efekty działań w social media?",
        answer: "Dostarczamy miesięczne raporty z kluczowymi metrykami: zasięgi, zaangażowanie, wzrost followersów, kliknięcia w linki i konwersje. Analizujemy, które treści działają najlepiej i optymalizujemy strategię na bieżąco.",
      },
    ],
  },
  {
    id: "advertising",
    name: "Reklamy płatne",
    icon: TrendingUp,
    questions: [
      {
        question: "Jaki budżet reklamowy potrzebuję na start?",
        answer: "Budżet reklamowy dobieramy do celu kampanii, branży, konkurencji i zasięgu geograficznego. Płacisz go bezpośrednio platformie (Meta, Google) — zawsze osobno od kosztu obsługi kampanii. Ważne, by budżet pozwalał zebrać dane potrzebne do optymalizacji; konkretną propozycję przedstawiamy po rozmowie o celach.",
      },
      {
        question: "Google Ads czy Facebook Ads - co wybrać?",
        answer: "To zależy od Twojego biznesu. Google Ads sprawdza się przy usługach i produktach, których ludzie aktywnie szukają (np. hydraulik, prawnik). Facebook/Instagram Ads są lepsze dla produktów impulsowych, budowania świadomości marki i e-commerce. Często rekomendujemy połączenie obu platform.",
      },
      {
        question: "Jak szybko zobaczę wyniki z reklam?",
        answer: "Kampanie zaczynają zbierać dane od momentu uruchomienia, ale nie obiecujemy konkretnych wyników ani terminów. Optymalizacja wymaga czasu na testowanie kreacji, grup odbiorców i stawek — jego długość zależy od budżetu, branży i liczby konwersji. Postępy pokazujemy w regularnych raportach.",
      },
      {
        question: "Czy prowadzicie kampanie na TikToku i LinkedIn?",
        answer: "Tak, prowadzimy kampanie reklamowe na wszystkich głównych platformach: Meta Ads (Facebook/Instagram), Google Ads, TikTok Ads, LinkedIn Ads oraz YouTube Ads. Dobieramy platformy do Twojej grupy docelowej.",
      },
      {
        question: "Jakie są zalety łączenia Facebook i Instagram Ads?",
        answer: "Łączenie Facebook i Instagram Ads w ramach Meta Ads daje dostęp do wspólnej puli odbiorców i automatycznej optymalizacji cross-platform. Jeden Pixel śledzi konwersje z obu platform, remarketing działa płynnie między nimi, a Advantage+ automatycznie rozdziela budżet między miejsca emisji. Szczegóły znajdziesz na naszej stronie Meta Ads.",
        link: "/performance-marketing/meta-ads"
      },
    ],
  },
  {
    id: "branding",
    name: "Branding i grafika",
    icon: Palette,
    questions: [
      {
        question: "Co zawiera identyfikacja wizualna?",
        answer: "Pełna identyfikacja wizualna obejmuje: logo (różne wersje), paletę kolorów, typografię, wzory i elementy graficzne, szablony materiałów (wizytówki, papier firmowy, prezentacje), social media kit oraz brandbook opisujący zasady stosowania. Zakres dostosowujemy do potrzeb.",
      },
      {
        question: "Ile kosztuje projekt logo?",
        answer: "Nie mamy sztywnego cennika. Wycena zależy od tego, czy potrzebujesz samego logo, czy pełnej identyfikacji (kolory, typografia, materiały, księga znaku), od liczby koncepcji i rund poprawek oraz od tego, czy projekt obejmuje warsztat strategiczny. Rebranding istniejącej marki również wyceniamy indywidualnie, po rozmowie o zakresie.",
      },
      {
        question: "Ile trwa stworzenie identyfikacji wizualnej?",
        answer: "Czas zależy od zakresu (samo logo czy pełna identyfikacja), liczby koncepcji i rund poprawek oraz tempa przekazywania informacji zwrotnej. Harmonogram ustalamy przed startem prac. Realizacje priorytetowe omawiamy indywidualnie.",
      },
    ],
  },
  {
    id: "video",
    name: "Produkcja video",
    icon: Video,
    questions: [
      {
        question: "Ile kosztuje spot reklamowy?",
        answer: "Nie mamy sztywnego cennika. Koszt spotu zależy od scenariusza, liczby dni zdjęciowych, wielkości ekipy, lokacji, obsady (np. aktorzy), sprzętu (np. dron) oraz zakresu postprodukcji i liczby wersji montażowych. Wycenę przygotowujemy po rozmowie o koncepcji i zakresie.",
      },
      {
        question: "Czy macie własne studio nagraniowe?",
        answer: "Tak, posiadamy w pełni wyposażone studio podcastowe w centrum Poznania. Studio pozwala na nagrywanie podcastów, wywiadów, materiałów edukacyjnych i krótkich form video. Oferujemy również wynajem studia.",
      },
      {
        question: "Realizujecie nagrania poza studiem?",
        answer: "Oczywiście! Realizujemy nagrania w plenerze, w siedzibach firm, na eventach i w dowolnych lokacjach. Dysponujemy mobilnym sprzętem, który pozwala na profesjonalne nagrania w każdych warunkach.",
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    questions: [
      {
        question: "Na jakiej platformie tworzycie sklepy internetowe?",
        answer: "Najczęściej pracujemy z WooCommerce (WordPress), Shopify i PrestaShop. Wybór platformy zależy od skali biznesu, budżetu i specyficznych wymagań. Dla dużych sklepów rekomendujemy rozwiązania dedykowane.",
      },
      {
        question: "Czy pomagacie w integracji z hurtowniami i systemami ERP?",
        answer: "Tak, zajmujemy się integracjami z popularnymi hurtowniami, systemami magazynowymi (Subiekt, WMS), płatnościami (Przelewy24, PayU, Stripe) oraz systemami do automatyzacji (BaseLinker, IdoSell).",
      },
      {
        question: "Czy oferujecie stałą obsługę sklepu?",
        answer: "Tak, oferujemy stałą obsługę obejmującą m.in.: aktualizacje techniczne, dodawanie produktów, optymalizację SEO, obsługę kampanii reklamowych oraz analizę konwersji. Zakres i wycenę ustalamy indywidualnie, a budżet reklamowy płacony platformom jest zawsze osobny.",
      },
    ],
  },
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap((cat) =>
  cat.questions.map((q) => ({
    question: q.question,
    answer: q.answer,
  }))
);

export default function FAQ() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="FAQ — Najczęściej Zadawane Pytania o Marketing, SEO i Strony WWW"
        description="FAQ Fotz Studio — odpowiedzi na najczęstsze pytania o SEO, marketing internetowy, tworzenie stron www, Google Ads i social media. Wszystko, co chcesz wiedzieć o naszych usługach, cenach i procesie współpracy."
        canonical="https://www.fotz-studio.pl/faq"
        keywords="faq fotz studio, pytania i odpowiedzi, pomoc, kontakt"
      />

      <FAQSchema items={allFaqs} />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 text-primary border-primary/30">
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Najczęściej zadawane <span className="text-primary">pytania</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Znajdź odpowiedzi na pytania dotyczące naszych usług, 
                cen i procesu współpracy.
              </p>
              <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Pracujemy z Poznania, klientów spoza miasta obsługujemy zdalnie</span>
              </div>
            </motion.div>

            {/* Office Images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img loading="lazy" src={officeStairs} alt="Biuro Fotz Studio" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img loading="lazy" src={officeSign} alt="Tabliczka Fotz Studio HOFA" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    {category.name}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.id}-${index}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="text-foreground font-medium pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                        {faq.link && (
                          <> <Link to={faq.link} className="text-primary hover:underline">Dowiedz się więcej</Link>.</>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nie znalazłeś odpowiedzi?
            </h2>
            <p className="text-muted-foreground mb-8">
              Skontaktuj się z nami - chętnie odpowiemy na wszystkie Twoje pytania
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  <Mail className="w-4 h-4 mr-2" />
                  Napisz do nas
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+48790814814">
                  <Phone className="w-4 h-4 mr-2" />
                  +48 790 814 814
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Najczęściej zadawane pytania o marketing internetowy i SEO
            </h2>
            <p className="text-muted-foreground mb-4">
              W tej sekcji znajdziesz odpowiedzi na najczęstsze pytania, które
              zadają nam klienci przed nawiązaniem współpracy. Pytania dotyczą
              pozycjonowania SEO, tworzenia stron internetowych, kampanii Google Ads
              i Meta Ads, obsługi social media i produkcji wideo. Jeśli nie znajdziesz
              odpowiedzi na swoje pytanie — skontaktuj się z nami bezpośrednio.
            </p>
            <p className="text-muted-foreground mb-6">
              Marketing internetowy to temat obszerny i stale ewoluujący.
              Staramy się wyjaśniać zawiłości językiem zrozumiałym dla każdego —
              bez żargonu, z praktycznymi przykładami. Nasz blog marketingowy
              to dobre źródło wiedzy dla firm chcących lepiej rozumieć marketing online.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak długo trwa pozycjonowanie SEO? Ile kosztuje marketing online?
            </h2>
            <p className="text-muted-foreground mb-4">
              Pozycjonowanie SEO to proces długoterminowy — tempo efektów zależy od
              konkurencji, stanu strony i regularności działań, dlatego nie podajemy
              sztywnych terminów ani nie gwarantujemy konkretnych pozycji. Koszt SEO
              zależy od zakresu prac (audyt, treści, optymalizacja techniczna, linki)
              i wyceniamy go po rozmowie. W przeciwieństwie do reklam płatnych za ruch
              organiczny nie płacisz za każde kliknięcie.
            </p>
            <p className="text-muted-foreground mb-6">
              Kampanie Google Ads zaczynają wyświetlać reklamy wkrótce po uruchomieniu,
              ale wyniki zależą od budżetu, branży i jakości strony docelowej. Koszt
              obsługi kampanii wyceniamy po rozmowie o zakresie, a budżet reklamowy
              płacony Google jest zawsze osobny.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak wybrać agencję marketingową? Na co zwrócić uwagę?
            </h2>
            <p className="text-muted-foreground mb-4">
              Wybierając agencję marketingową, sprawdź: portfolio i case studies,
              opinie klientów na Google, transparentność w komunikacji i raportowaniu,
              znajomość Twojej branży oraz podejście do mierzenia wyników. Uważaj
              na obietnice szybkich, gwarantowanych efektów w wyszukiwarce — nikt poza
              Google nie kontroluje wyników wyszukiwania.
            </p>
            <p className="text-muted-foreground">
              Fotz Studio oferuje bezpłatną konsultację przed nawiązaniem współpracy —
              możesz zadać wszystkie pytania, zanim podejmiesz decyzję. Warunki
              i okres współpracy ustalamy indywidualnie i zapisujemy w umowie.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/konsultacja" className="text-primary hover:underline font-medium text-sm">→ Bezpłatna konsultacja</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
}
