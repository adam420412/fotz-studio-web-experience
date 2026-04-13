import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Building2, CheckCircle, Search, Camera, Clock, MessageSquare, TrendingUp, Settings, FileText, Globe, BarChart3 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Czym polega pozycjonowanie Google Maps?",
    answer: "Pozycjonowanie Google Maps to zestaw działań mających na celu poprawienie widoczności firmy w wynikach wyszukiwania Google Maps. Proces ten obejmuje optymalizację wizytówek w Google Moja Firma, dodawanie zdjęć, zbieranie opinii oraz inne techniki zwiększające szanse na wyższą pozycję w Google Maps."
  },
  {
    question: "Dlaczego pozycjonowanie w Google Maps jest ważne?",
    answer: "Pozycjonowanie w Google Maps jest ważne, ponieważ coraz więcej osób korzysta z telefonów komórkowych i aplikacji Google Maps do wyszukiwania lokalnych firm i usług. Dobra widoczność w Google Maps zwiększa szanse na przyciągnięcie potencjalnych klientów."
  },
  {
    question: "Jak wpływają opinie w Google na pozycję wizytówki w Google Maps?",
    answer: "Opinie w Google mają duży wpływ na pozycję wizytówki w Google Maps. Pozytywne recenzje zwiększają zaufanie do firmy i mogą poprawić jej pozycję, podczas gdy negatywne mogą ją obniżyć. Regularne zachęcanie klientów do zostawiania opinii to jedna z najlepszych praktyk pozycjonowania lokalnego."
  },
  {
    question: "Jak założyć wizytówkę w Google Moja Firma?",
    answer: "Aby założyć wizytówkę w Google Moja Firma, należy wejść na stronę Google My Business, zalogować się na swoje konto Google, dodać nazwę i adres firmy, zweryfikować profil przez Google (najczęściej za pomocą listu pocztowego), a następnie uzupełnić resztę informacji, takich jak godziny otwarcia, zdjęcia i opis działalności."
  },
  {
    question: "Co wpływa na pozycję wizytówki Google Maps?",
    answer: "Na pozycję wizytówki Google Maps wpływa wiele czynników, w tym kompletność i zgodność danych, liczba i jakość opinii, regularność aktualizacji profilu, użycie odpowiednich słów kluczowych, a także aktywność użytkowników, takich jak kliknięcia i interakcje z wizytówką."
  },
  {
    question: "Jakie są najlepsze praktyki pozycjonowania wizytówki Google?",
    answer: "Najlepsze praktyki pozycjonowania wizytówki Google obejmują: regularne aktualizowanie informacji, dodawanie wysokiej jakości zdjęć, zbieranie pozytywnych opinii, dbanie o zgodność NAP (nazwa, adres, telefon) na wszystkich platformach, korzystanie z Google Posts oraz monitorowanie wyników za pomocą narzędzi takich jak Google Analytics czy Google Search Console."
  },
  {
    question: "Czy korzystanie z Google Ads pomaga w pozycjonowaniu wizytówki w mapach Google?",
    answer: "Google Ads może pośrednio pomóc w pozycjonowaniu wizytówki w mapach Google, zwiększając widoczność firmy w wynikach wyszukiwania i przyciągając większą liczbę odwiedzających do wizytówki. Chociaż reklama bezpośrednio nie wpływa na organiczną pozycję, może pomóc w budowaniu ogólnej rozpoznawalności marki."
  },
  {
    question: "Czym różni się pozycjonowanie wizytówki w Google Maps od pozycjonowania stron internetowych?",
    answer: "Pozycjonowanie wizytówki w Google Maps różni się od pozycjonowania stron internetowych głównie skupieniem na lokalnych wynikach wyszukiwania. W pozycjonowaniu Google Maps ważne są recenzje, lokalizacje NAP, zdjęcia i lokalne słowa kluczowe, podczas gdy pozycjonowanie stron internetowych koncentruje się na ogólnej widoczności w wynikach wyszukiwania (SEO) oraz optymalizacji treści i linków zwrotnych."
  },
  {
    question: "Jakie narzędzia mogą pomóc w pozycjonowaniu Google Maps?",
    answer: "Narzędzia, które mogą pomóc w pozycjonowaniu Google Maps, to Google My Business (do zarządzania wizytówką), Google Analytics (do analizy ruchu i zachowań użytkowników), Google Search Console (do monitorowania widoczności w wyszukiwarce Google), a także różne aplikacje do pozyskiwania i zarządzania recenzjami oraz narzędzia SEO do optymalizacji słów kluczowych."
  },
  {
    question: "Jak mogę monitorować efektywność pozycjonowania mojej wizytówki w Google Maps?",
    answer: "Efektywność pozycjonowania wizytówki w Google Maps można monitorować za pomocą narzędzi takich jak Google My Business Insights, które dostarczają informacji o liczbie wyświetleń, kliknięć oraz interakcji z wizytówką. Dodatkowo Google Analytics i Google Search Console mogą pomóc śledzić ruch z Google Maps na stronie internetowej oraz oceniać, jakie słowa kluczowe przynoszą najwięcej korzyści."
  },
];

const PozycjonowanieGoogleMaps = () => {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Pozycjonowanie Google Maps — Wizytówka Google Moja Firma"
        description="Pozycjonowanie Google Maps i optymalizacja wizytówki Google Moja Firma (GMB). Pojawiaj się wysoko w lokalnych wynikach wyszukiwania. Fotz Studio."
        canonical="https://fotz.pl/seo/google-maps"
        keywords="pozycjonowanie google maps, wizytówka google, google moja firma, google business profile, pozycjonowanie lokalne, pozycjonowanie mapy google, seo lokalne google maps, optymalizacja wizytówki google"
      />
      <ServiceSchema
        name="Pozycjonowanie Google Maps"
        description="Profesjonalne pozycjonowanie wizytówki Google Maps. Zwiększ widoczność firmy w wynikach lokalnych."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/seo/pozycjonowanie" },
          { name: "Google Maps", url: "https://fotz.pl/seo/google-maps" }
        ]}
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-wide px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
              Najlepsze praktyki pozycjonowania wizytówki{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Google Maps
              </span>
              {" "}dla firm
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Pozycjonowanie Google Maps i optymalizacja wizytówki Google Moja Firma — skuteczne SEO lokalne dla firm z każdego regionu Polski. Pozycjonowanie wizytówki Google to klucz do pozyskiwania klientów lokalnych. Google Business Profile zoptymalizowany pod Twój rynek.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 w-full sm:w-auto text-sm sm:text-base">
                <Link to="/kontakt">
                  Bezpłatna konsultacja <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                <Link to="/realizacje">Zobacz efekty</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Co to jest pozycjonowanie wizytówki */}
      <section className="py-20 bg-background">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Co to jest pozycjonowanie wizytówki Google Moja Firma?
            </h2>
            
            <div className="space-y-12">
              <div className="bg-secondary/30 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-4">Na czym polega pozycjonowanie wizytówki Google?</h3>
                    <p className="text-muted-foreground">
                      Pozycjonowanie wizytówki Google oznacza optymalizację informacji zawartych w wizytówkach Google Maps, aby uzyskać najwyższą możliwą pozycję w wynikach wyszukiwania lokalnego na mapach Google. Proces ten obejmuje zadbanie o to, by wizytówka firmy była kompletnie i poprawnie wypełniona, zawierała słowa kluczowe i była regularnie aktualizowana. Główne korzyści płynące z wysokiego pozycjonowania to większa widoczność firmy dla użytkowników oraz większa liczba odwiedzin strony internetowej.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-4">Dlaczego pozycjonowanie firmy w Google Maps jest ważne?</h3>
                    <p className="text-muted-foreground">
                      Pozycjonowanie firmy w Google Maps jest kluczowe z kilku powodów. Przede wszystkim, większość konsumentów szuka lokalnych usług i produktów za pomocą wyszukiwarki Google, a firmy w Google Maps są wyświetlane w wynikach wyszukiwania Google. Ponadto, wizytówki Google pomagają w budowaniu zaufania klienta, gdyż zawierają recenzje, zdjęcia i szczegółowe informacje o firmie. Dobrze pozycjonowana wizytówka Google zwiększa szanse na przyciągnięcie potencjalnych klientów oraz budowanie lojalnej bazy użytkowników.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-4">Jak założyć wizytówkę Google Moja Firma?</h3>
                    <p className="text-muted-foreground">
                      Założenie wizytówki Google Moja Firma jest stosunkowo proste. Wystarczy przejść na stronę Google Moja Firma i podążać za instrukcjami. Należy podać podstawowe informacje, takie jak nazwa firmy, adres firmy, godziny otwarcia, opis firmy oraz dodać kategorię działalności. Kluczowym elementem jest również weryfikacja wizytówki, co zwykle odbywa się przez przesłanie kartki pocztowej z kodem weryfikacyjnym na adres firmy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optymalizacja wizytówki */}
      <section className="py-20 bg-secondary/20">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Jak skutecznie optymalizować wizytówkę firmy w Google Maps?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">Optymalizacja wizytówki</h3>
                <p className="text-muted-foreground text-sm">
                  Ważne jest, aby każda sekcja wizytówki była kompletnie i dokładnie wypełniona. To obejmuje nie tylko podstawowe informacje, ale także dodanie zdjęć, odpowiednich kategorii działalności, oraz aktualizowanie godzin pracy.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">Wykorzystanie słów kluczowych</h3>
                <p className="text-muted-foreground text-sm">
                  Słowa kluczowe odgrywają kluczową rolę w procesie optymalizacji wizytówki. Warto umieścić najważniejsze słowa kluczowe związane z branżą w opisie firmy, co pomoże zwiększyć pozycje wizytówki w Google Maps.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">Dokładny adres firmy</h3>
                <p className="text-muted-foreground text-sm">
                  Dokładny adres firmy to jeden z najważniejszych elementów każdej dobrze zoptymalizowanej wizytówki Google. Właściwie podany adres pomaga potencjalnym klientom łatwo znaleźć lokalizację firmy.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#75143F]/10 to-[#0F3053]/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-heading font-semibold mb-4">Kluczowe elementy optymalizacji</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Kompletne wypełnienie wszystkich sekcji wizytówki</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Dodanie wysokiej jakości zdjęć firmy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Odpowiednie kategorie działalności</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Regularne aktualizowanie godzin pracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Interakcje z recenzjami klientów</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Spójność danych NAP na wszystkich platformach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regularne aktualizacje */}
      <section className="py-20 bg-background">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Dlaczego firmy w Google Maps powinny dbać o regularne aktualizacje?
            </h2>

            <div className="space-y-8">
              <div className="bg-secondary/30 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-4">Jak często aktualizować wizytówkę Google?</h3>
                    <p className="text-muted-foreground">
                      Regularne aktualizowanie wizytówki Google jest kluczem do utrzymania jej wysokiej pozycji w wynikach wyszukiwania. Zaleca się aktualizowanie wizytówki co najmniej raz na miesiąc lub za każdym razem, gdy nastąpią istotne zmiany w działalności firmy. Aktualizacje mogą obejmować zmiany godzin otwarcia, dodanie nowych zdjęć, oraz odpowiedzi na recenzje klientów.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-4">Całość informacji: Nazwa firmy, adres, godziny pracy</h3>
                    <p className="text-muted-foreground">
                      Jednym z kluczowych aspektów optymalizacji wizytówki Google jest upewnienie się, że wszystkie informacje są kompletnie i dokładnie podane. Nazwa firmy powinna być zgodna ze stanem faktycznym, adres firmy dokładnie odzwierciedlać jej lokalizację, a godziny otwarcia powinny być aktualne i zgodne z rzeczywistością. Niezgodność tych danych może wpłynąć negatywnie na pozycjonowanie w mapach Google.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-4">Znaczenie aktualizacji opisów i zdjęć</h3>
                    <p className="text-muted-foreground">
                      Aktualizacja opisów i zdjęć to kolejny istotny element, który wpływa na pozycjonowanie wizytówki Google. Nowe zdjęcia pomagają przyciągnąć uwagę potencjalnych klientów, a zaktualizowany opis firmy zapewnia, że wizytówka Google jest zawsze aktualna i zgodna z rzeczywistym obrazem firmy. Firmy w Google Maps, które regularnie aktualizują swoje informacje, są postrzegane jako bardziej wiarygodne i godne zaufania.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wyróżnij się w wynikach */}
      <section className="py-20 bg-secondary/20">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Co zrobić, aby wyróżnić się w lokalnych wynikach wyszukiwania Google Maps?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">Podstawy lokalnego pozycjonowania</h3>
                <p className="text-muted-foreground text-sm">
                  Ważne jest, aby wizytówka była kompletnie wypełniona i regularnie aktualizowana. Kluczowe jest również zdobywanie pozytywnych recenzji od klientów oraz aktywność na profilu firmy.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">Recenzje klientów</h3>
                <p className="text-muted-foreground text-sm">
                  Recenzje klientów mają ogromny wpływ na pozycjonowanie wizytówki Google. Firmy powinny aktywnie zachęcać swoich klientów do pozostawiania opinii na mapach Google i regularnie na nie odpowiadać.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">Interakcje z klientami</h3>
                <p className="text-muted-foreground text-sm">
                  Profile firmy w Google Moja Firma umożliwiają firmom bezpośrednie interakcje z klientami, co z kolei wpływa na poprawę pozycjonowania wizytówki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Najczęstsze błędy */}
      <section className="py-20 bg-background">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Jakie są najczęstsze błędy przy tworzeniu i pozycjonowaniu wizytówki?
            </h2>

            <div className="space-y-8">
              <div className="bg-secondary/30 rounded-2xl p-8 border-l-4 border-destructive">
                <h3 className="text-xl font-heading font-semibold mb-4 text-destructive">Złe praktyki w nazewnictwie i opisie firmy</h3>
                <p className="text-muted-foreground">
                  Jednym z najczęstszych błędów jest nieprawidłowe nazewnictwo i opis firmy. Warto unikać wprowadzania nadmiernej ilości słów kluczowych w nazwie firmy oraz opisie, co może być postrzegane jako spamowanie i może negatywnie wpływać na pozycjonowanie. Opis firmy powinien być rzeczowy, zwięzły i zawierać informacje, które są istotne z perspektywy potencjalnych klientów.
                </p>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8 border-l-4 border-destructive">
                <h3 className="text-xl font-heading font-semibold mb-4 text-destructive">Niekompletne lub nieaktualne informacje</h3>
                <p className="text-muted-foreground">
                  Niekompletne lub nieaktualne informacje mogą zaszkodzić pozycjonowaniu wizytówki Google oraz wpłynąć na zaufanie klientów. Często spotykanym błędem jest brak pełnego adresu firmy, brak numeru telefonu lub nieaktualne godziny otwarcia. Firmy powinny regularnie przeglądać i aktualizować swoje wizytówki, aby zapewnić, że wszystkie informacje są prawdziwe i zgodne z rzeczywistością.
                </p>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-8 border-l-4 border-destructive">
                <h3 className="text-xl font-heading font-semibold mb-4 text-destructive">Niezgodność danych z danymi na stronie internetowej</h3>
                <p className="text-muted-foreground">
                  Niezgodność danych z danymi na stronie internetowej firmy również może wpłynąć negatywnie na pozycjonowanie wizytówki Google. Kluczowe jest, aby dane w wizytówce Google były spójne z informacjami na stronie internetowej firmy. W przeciwnym razie może to prowadzić do dezorientacji klientów oraz negatywnie wpłynąć na pozycjonowanie strony oraz wizytówki w wynikach wyszukiwania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cennik Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Cennik pozycjonowania Google Maps
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferujemy elastyczne pakiety dopasowane do potrzeb Twojej firmy. Każdy pakiet zawiera kompleksową optymalizację wizytówki Google Moja Firma.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pakiet Start */}
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">Pakiet Start</h3>
                  <p className="text-muted-foreground text-sm mb-4">Dla małych firm lokalnych</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">499</span>
                    <span className="text-muted-foreground">zł/mies.</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Założenie/przejęcie wizytówki</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Optymalizacja podstawowych danych</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dodanie 10 zdjęć miesięcznie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">2 posty Google miesięcznie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Monitoring pozycji</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Raport miesięczny</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </div>

              {/* Pakiet Business - Popular */}
              <div className="bg-gradient-to-b from-[#75143F] to-[#0F3053] rounded-2xl p-8 border-2 border-primary relative transform md:scale-105 shadow-xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Najpopularniejszy
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">Pakiet Business</h3>
                  <p className="text-white/70 text-sm mb-4">Dla rozwijających się firm</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">899</span>
                    <span className="text-white/70">zł/mies.</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">Wszystko z pakietu Start</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">Zaawansowana optymalizacja SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">Dodanie 20 zdjęć miesięcznie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">4 posty Google miesięcznie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">Zarządzanie recenzjami</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">Cytowania NAP (10 katalogów)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">Analiza konkurencji</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-white text-primary hover:bg-white/90">
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </div>

              {/* Pakiet Premium */}
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">Pakiet Premium</h3>
                  <p className="text-muted-foreground text-sm mb-4">Dla sieci lokali i franczyz</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">1499</span>
                    <span className="text-muted-foreground">zł/mies.</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Wszystko z pakietu Business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Do 5 lokalizacji w cenie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Profesjonalna sesja zdjęciowa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">8 postów Google miesięcznie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Cytowania NAP (25 katalogów)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dedykowany opiekun</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Raporty tygodniowe</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Potrzebujesz indywidualnej wyceny? Masz wiele lokalizacji?
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/kontakt">
                  Skontaktuj się po wycenę <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Najczęściej zadawane pytania
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-medium hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#75143F] to-[#0F3053]">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              Potrzebujesz pomocy z pozycjonowaniem Google Maps?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Skontaktuj się z nami i umów się na bezpłatną konsultację. Pomożemy Ci zwiększyć widoczność Twojej firmy w Google Maps i przyciągnąć więcej lokalnych klientów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/kontakt">
                  Bezpłatna konsultacja <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:+48790814814">
                  Zadzwoń: +48 790 814 814
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Pozycjonowanie Google Maps — wizytówka Google i lokalne wyniki wyszukiwania</h2>
            <p className="text-muted-foreground mb-4">Pozycjonowanie Google Maps to optymalizacja profilu Google Moja Firma (Google Business Profile), by Twoja firma pojawiała się wysoko w lokalnych wynikach wyszukiwania — w tzw. Local Pack (3 boxie na mapie). Wizytówka Google to często pierwszy kontakt potencjalnego klienta z Twoją firmą — musi być kompletna, aktualna i zoptymalizowana.</p>
            <p className="text-muted-foreground mb-6">Lokalne SEO i pozycjonowanie Google Maps ważne jest szczególnie dla firm z fizyczną lokalizacją — restauracje, gabinety lekarskie, sklepy, salony fryzjerskie, usługi budowlane i inne biznesy lokalnie. Frazy lokalne (np. "hydraulik Poznań", "fryzjer Kraków blisko mnie") generują ruch o bardzo wysokiej intencji zakupowej.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Optymalizacja wizytówki Google — co wpływa na pozycje w Google Maps?</h2>
            <p className="text-muted-foreground mb-4">Czynniki wpływające na pozycje w Google Maps: kompletność i spójność danych NAP (Nazwa, Adres, Numer telefonu), kategoria firmy, opinie Google (liczba i średnia ocena), regularność publikacji postów w GMB, zdjęcia wysokiej jakości, odpowiedzi na pytania i opinie oraz linki lokalne. Kup opinie Google — nie, to nieeleganckie. Zdobywaj opinie organicznie poprzez doskonałą obsługę.</p>
            <p className="text-muted-foreground mb-6">Wizytówka Google Moja Firma powinna zawierać: dokładny adres, godziny otwarcia (łącznie ze specjalnymi), wszystkie metody kontaktu, link do strony internetowej, opis firmy z kluczowymi słowami lokalnymi oraz regularne zdjęcia i posty.</p>

            <h3 className="text-2xl font-heading font-bold mb-4">Pozycjonowanie lokalne — GMB a pozycjonowanie stron internetowych</h3>
            <p className="text-muted-foreground">Pozycjonowanie Google Maps działa najlepiej w połączeniu z lokalnym SEO strony internetowej — podstron z lokalnymi frazami, budowy lokalnych linków (np. katalogi firm, portale lokalne) i optymalizacji on-page pod lokalne słowa kluczowe. To kompleksowe podejście do widoczności lokalnej sprawia, że Twoja firma dominuje zarówno w wynikach organicznych, jak i na mapach Google.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/agencja-marketingowa-poznan" className="text-primary hover:underline font-medium text-sm">→ Agencja marketingowa Poznań</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
};

export default PozycjonowanieGoogleMaps;
