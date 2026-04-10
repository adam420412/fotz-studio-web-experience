import { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, Globe, Megaphone, Camera, 
  PenTool, ShoppingCart, ArrowRight, ArrowLeft, CheckCircle,
  Building2, Sparkles, Rocket, BarChart3
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Jaki jest główny cel Twojego biznesu w najbliższych 6 miesiącach?",
    options: [
      { label: "Zwiększenie sprzedaży online", value: "sprzedaz", icon: <ShoppingCart className="w-6 h-6" /> },
      { label: "Budowanie rozpoznawalności marki", value: "branding", icon: <Sparkles className="w-6 h-6" /> },
      { label: "Pozyskanie nowych klientów lokalnie", value: "lokalne", icon: <Building2 className="w-6 h-6" /> },
      { label: "Wejście na nowe rynki", value: "ekspansja", icon: <Rocket className="w-6 h-6" /> },
    ],
  },
  {
    id: 2,
    question: "Gdzie obecnie szukają Cię Twoi klienci?",
    options: [
      { label: "W wyszukiwarce Google", value: "google", icon: <Globe className="w-6 h-6" /> },
      { label: "W social mediach", value: "social", icon: <Users className="w-6 h-6" /> },
      { label: "Z polecenia / offline", value: "offline", icon: <Building2 className="w-6 h-6" /> },
      { label: "Nie wiem / wszędzie", value: "wszystko", icon: <Target className="w-6 h-6" /> },
    ],
  },
  {
    id: 3,
    question: "Jaki jest Twój miesięczny budżet na marketing?",
    options: [
      { label: "Do 2 000 zł", value: "maly", icon: <BarChart3 className="w-6 h-6" /> },
      { label: "2 000 - 5 000 zł", value: "sredni", icon: <TrendingUp className="w-6 h-6" /> },
      { label: "5 000 - 15 000 zł", value: "duzy", icon: <Rocket className="w-6 h-6" /> },
      { label: "Powyżej 15 000 zł", value: "enterprise", icon: <Sparkles className="w-6 h-6" /> },
    ],
  },
  {
    id: 4,
    question: "Czy masz już stronę internetową?",
    options: [
      { label: "Tak, działa dobrze", value: "strona-ok", icon: <Globe className="w-6 h-6" /> },
      { label: "Tak, ale wymaga poprawy", value: "strona-poprawa", icon: <PenTool className="w-6 h-6" /> },
      { label: "Nie, potrzebuję nowej", value: "brak-strony", icon: <Rocket className="w-6 h-6" /> },
      { label: "Mam sklep internetowy", value: "ecommerce", icon: <ShoppingCart className="w-6 h-6" /> },
    ],
  },
  {
    id: 5,
    question: "Która forma promocji jest dla Ciebie najważniejsza?",
    options: [
      { label: "Reklamy płatne (Google, Facebook)", value: "ads", icon: <Megaphone className="w-6 h-6" /> },
      { label: "Pozycjonowanie w Google (SEO)", value: "seo", icon: <TrendingUp className="w-6 h-6" /> },
      { label: "Social media i content", value: "content", icon: <Camera className="w-6 h-6" /> },
      { label: "Kompleksowa obsługa", value: "kompleksowa", icon: <Target className="w-6 h-6" /> },
    ],
  },
];

interface Recommendation {
  title: string;
  description: string;
  services: { name: string; link: string }[];
  budget: string;
}

const getRecommendation = (answers: Record<number, string>): Recommendation => {
  const goal = answers[1];
  const channel = answers[2];
  const budget = answers[3];
  const website = answers[4];
  const promotion = answers[5];

  // Logic for recommendations
  if (promotion === "kompleksowa" || budget === "enterprise") {
    return {
      title: "Kompleksowa obsługa marketingowa",
      description: "Dla firm o dużych ambicjach rekomendujemy pełną obsługę marketingową, która obejmuje strategię, realizację i optymalizację wszystkich kanałów.",
      services: [
        { name: "Kompleksowa obsługa", link: "/kompleksowa-obsluga-marketingowa" },
        { name: "Kampanie reklamowe", link: "/kampanie-reklamowe" },
        { name: "Pozycjonowanie SEO", link: "/seo/pozycjonowanie" },
      ],
      budget: "od 8 000 zł/mies.",
    };
  }

  if (goal === "sprzedaz" || website === "ecommerce") {
    return {
      title: "Marketing e-commerce",
      description: "Dla sklepów internetowych rekomendujemy kampanie reklamowe Google Shopping, remarketing oraz pozycjonowanie produktów.",
      services: [
        { name: "Google Ads", link: "/performance-marketing/google-ads" },
        { name: "Facebook Ads", link: "/performance-marketing/facebook-ads" },
        { name: "SEO dla e-commerce", link: "/seo/pozycjonowanie" },
      ],
      budget: "od 3 000 zł/mies.",
    };
  }

  if (goal === "lokalne" || channel === "offline") {
    return {
      title: "Marketing lokalny",
      description: "Dla firm działających lokalnie najlepiej sprawdzi się pozycjonowanie w Google Maps, lokalne SEO oraz targetowane kampanie Facebook Ads.",
      services: [
        { name: "Pozycjonowanie Google Maps", link: "/seo/google-maps" },
        { name: "SEO lokalne", link: "/seo/pozycjonowanie-poznan" },
        { name: "Social Media", link: "/social-media/obsluga" },
      ],
      budget: "od 2 000 zł/mies.",
    };
  }

  if (website === "brak-strony" || website === "strona-poprawa") {
    return {
      title: "Strona internetowa + marketing",
      description: "Pierwszym krokiem powinna być profesjonalna strona internetowa, która będzie fundamentem Twoich działań marketingowych.",
      services: [
        { name: "Strony internetowe", link: "/uslugi/strony-internetowe" },
        { name: "Identyfikacja wizualna", link: "/uslugi/branding" },
        { name: "Pozycjonowanie SEO", link: "/seo/pozycjonowanie" },
      ],
      budget: "od 4 000 zł jednorazowo + 1 500 zł/mies.",
    };
  }

  if (promotion === "ads" || channel === "google") {
    return {
      title: "Kampanie reklamowe",
      description: "Płatne reklamy to najszybsza droga do nowych klientów. Rekomendujemy kombinację Google Ads i Meta Ads dla maksymalnego zasięgu.",
      services: [
        { name: "Google Ads", link: "/performance-marketing/google-ads" },
        { name: "Facebook & Instagram Ads", link: "/performance-marketing/meta-ads" },
        { name: "Kampanie reklamowe", link: "/kampanie-reklamowe" },
      ],
      budget: "od 2 500 zł/mies. + budżet reklamowy",
    };
  }

  if (promotion === "content" || channel === "social" || goal === "branding") {
    return {
      title: "Social Media Marketing",
      description: "Budowanie marki poprzez angażujący content w social mediach to długoterminowa strategia, która przynosi lojalnych klientów.",
      services: [
        { name: "Social Media", link: "/social-media/obsluga" },
        { name: "Content Marketing", link: "/content-marketing/strategia" },
        { name: "Produkcja wideo", link: "/uslugi/produkcja-filmow" },
      ],
      budget: "od 2 500 zł/mies.",
    };
  }

  // Default
  return {
    title: "Pozycjonowanie SEO",
    description: "Dla długoterminowego wzrostu organicznego rekomendujemy profesjonalne pozycjonowanie strony w wyszukiwarce Google.",
    services: [
      { name: "Pozycjonowanie SEO", link: "/seo/pozycjonowanie" },
      { name: "Content Marketing", link: "/content-marketing/strategia" },
      { name: "Strony internetowe", link: "/uslugi/strony-internetowe" },
    ],
    budget: "od 2 000 zł/mies.",
  };
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: value }));
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion((prev) => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendation = getRecommendation(answers);

  return (
    <>
      <SEOHead
        title="Quiz Marketingowy — Sprawdź Stan Marketingu Swojej Firmy | Fotz Studio"
        description="Quiz marketingowy Fotz Studio — sprawdź stan marketingu swojej firmy online. Analiza SEO, social media i reklam w 5 minut. Bezpłatne narzędzie diagnostyczne."
        canonical="https://fotz.pl/quiz"
        keywords="quiz marketingowy, usługi marketingowe, test marketingowy"
      />
      <Layout>
        <section className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-3xl">
            {/* SEO intro text - visible to crawlers, helps with thin content */}
            {!showResults && currentQuestion === 0 && (
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Quiz marketingowy — dopasuj usługi do potrzeb
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Nie wiesz, od czego zacząć? Odpowiedz na 5 krótkich pytań, a nasz quiz rekomendacyjny wskaże usługi 
                  marketingowe najlepiej dopasowane do Twojego biznesu, budżetu i celów. Otrzymasz spersonalizowaną 
                  rekomendację w mniej niż 2 minuty — bezpłatnie i bez zobowiązań. Quiz uwzględnia takie obszary jak 
                  SEO, kampanie Google Ads i Meta Ads, social media, content marketing oraz tworzenie stron internetowych.
                </p>
              </div>
            )}
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      Pytanie {currentQuestion + 1} z {questions.length}
                    </span>
                    <Progress value={progress} className="h-2 mb-8" />
                  </div>

                   {/* Question */}
                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
                     {questions[currentQuestion].question}
                   </h2>

                  {/* Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleAnswer(option.value)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left group hover:border-primary hover:bg-primary/5 ${
                          answers[questions[currentQuestion].id] === option.value
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {option.icon}
                          </div>
                          <span className="font-semibold text-lg">{option.label}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Navigation */}
                  {currentQuestion > 0 && (
                    <div className="flex justify-center">
                      <Button variant="ghost" onClick={handleBack} className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Wróć do poprzedniego pytania
                      </Button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Success Icon */}
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-primary font-medium">Twoja rekomendacja jest gotowa!</span>
                  </div>

                  {/* Recommendation */}
                  <div className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      {recommendation.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                      {recommendation.description}
                    </p>

                    {/* Recommended Services */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {recommendation.services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="p-4 bg-muted/50 rounded-xl hover:bg-primary/10 transition-colors group"
                        >
                          <span className="font-semibold group-hover:text-primary transition-colors">
                            {service.name}
                          </span>
                          <ArrowRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>

                    {/* Budget */}
                    <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-8">
                      <span className="text-primary font-semibold">
                        Szacowany budżet: {recommendation.budget}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="gap-2">
                        <Link to="/kontakt">
                          Umów bezpłatną konsultację
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" onClick={handleRestart}>
                        Wypełnij quiz ponownie
                      </Button>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <p className="text-sm text-muted-foreground">
                    Ponad 600 zrealizowanych projektów • 160+ pozytywnych opinii Google
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
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
              Quiz marketingowy — zdiagnozuj stan marketingu swojej firmy online
            </h2>
            <p className="text-muted-foreground mb-4">
              Quiz marketingowy Fotz Studio to szybkie narzędzie do oceny stanu
              marketingu online Twojej firmy. Odpowiedz na kilka pytań dotyczących
              SEO, aktywności w social media, kampanii reklamowych i strony internetowej —
              a na końcu otrzymasz diagnozę z konkretnymi rekomendacjami, co poprawić
              w pierwszej kolejności.
            </p>
            <p className="text-muted-foreground mb-6">
              Quiz zajmuje 3-5 minut i jest całkowicie bezpłatny. Wyniki pokazują,
              w których obszarach marketingu masz mocne strony, a gdzie tracisz
              potencjalne leady i klientów. To dobry punkt wyjścia przed rozmową
              z agencją marketingową o możliwościach współpracy.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Ocena marketingu firmy — SEO, reklamy, social media i strona www
            </h2>
            <p className="text-muted-foreground mb-4">
              Quiz ocenia cztery kluczowe obszary: widoczność w Google (SEO i pozycjonowanie),
              aktywność i skuteczność w mediach społecznościowych, kampanie reklamowe
              (Google Ads, Meta Ads) oraz jakość i konwersję strony internetowej.
              Razem te obszary decydują o sukcesie firmy online.
            </p>
            <p className="text-muted-foreground">
              Po wypełnieniu quizu możesz umówić się na bezpłatną konsultację z ekspertem
              Fotz Studio, by omówić wyniki i konkretne kroki do poprawy marketingu.
              Diagnoza marketingowa to pierwszy krok do skutecznych działań i lepszych wyników biznesowych.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/konsultacja" className="text-primary hover:underline font-medium text-sm">→ Bezpłatna konsultacja</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
            </div>
          </motion.div>
        </div>
      </section>

      </Layout>
    </>
  );
};

export default Quiz;
