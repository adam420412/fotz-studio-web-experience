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
        { name: "Pozycjonowanie SEO", link: "/pozycjonowanie" },
      ],
      budget: "od 8 000 zł/mies.",
    };
  }

  if (goal === "sprzedaz" || website === "ecommerce") {
    return {
      title: "Marketing e-commerce",
      description: "Dla sklepów internetowych rekomendujemy kampanie reklamowe Google Shopping, remarketing oraz pozycjonowanie produktów.",
      services: [
        { name: "Google Ads", link: "/google-ads" },
        { name: "Facebook Ads", link: "/facebook-ads" },
        { name: "SEO dla e-commerce", link: "/pozycjonowanie" },
      ],
      budget: "od 3 000 zł/mies.",
    };
  }

  if (goal === "lokalne" || channel === "offline") {
    return {
      title: "Marketing lokalny",
      description: "Dla firm działających lokalnie najlepiej sprawdzi się pozycjonowanie w Google Maps, lokalne SEO oraz targetowane kampanie Facebook Ads.",
      services: [
        { name: "Pozycjonowanie Google Maps", link: "/pozycjonowanie-google-maps" },
        { name: "SEO lokalne", link: "/pozycjonowanie-stron-poznan" },
        { name: "Social Media", link: "/social-media" },
      ],
      budget: "od 2 000 zł/mies.",
    };
  }

  if (website === "brak-strony" || website === "strona-poprawa") {
    return {
      title: "Strona internetowa + marketing",
      description: "Pierwszym krokiem powinna być profesjonalna strona internetowa, która będzie fundamentem Twoich działań marketingowych.",
      services: [
        { name: "Strony internetowe", link: "/strony-internetowe" },
        { name: "Identyfikacja wizualna", link: "/identyfikacja-wizualna" },
        { name: "Pozycjonowanie SEO", link: "/pozycjonowanie" },
      ],
      budget: "od 4 000 zł jednorazowo + 1 500 zł/mies.",
    };
  }

  if (promotion === "ads" || channel === "google") {
    return {
      title: "Kampanie reklamowe",
      description: "Płatne reklamy to najszybsza droga do nowych klientów. Rekomendujemy kombinację Google Ads i Meta Ads dla maksymalnego zasięgu.",
      services: [
        { name: "Google Ads", link: "/google-ads" },
        { name: "Facebook & Instagram Ads", link: "/facebook-instagram-ads" },
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
        { name: "Social Media", link: "/social-media" },
        { name: "Content Marketing", link: "/content-marketing" },
        { name: "Produkcja wideo", link: "/produkcja-filmow-poznan" },
      ],
      budget: "od 2 500 zł/mies.",
    };
  }

  // Default
  return {
    title: "Pozycjonowanie SEO",
    description: "Dla długoterminowego wzrostu organicznego rekomendujemy profesjonalne pozycjonowanie strony w wyszukiwarce Google.",
    services: [
      { name: "Pozycjonowanie SEO", link: "/pozycjonowanie" },
      { name: "Content Marketing", link: "/content-marketing" },
      { name: "Strony internetowe", link: "/strony-internetowe" },
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
        title="Quiz - Która usługa marketingowa jest dla Ciebie? | Fotz Studio"
        description="Odpowiedz na 5 pytań i dowiedz się, które usługi marketingowe najlepiej odpowiadają potrzebom Twojego biznesu. Personalizowana rekomendacja w 2 minuty."
        canonical="https://fotz.pl/quiz"
        keywords="quiz marketingowy, usługi marketingowe, test marketingowy"
      />
      <Layout>
        <section className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-3xl">
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
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
                    {questions[currentQuestion].question}
                  </h1>

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
      </Layout>
    </>
  );
};

export default Quiz;
