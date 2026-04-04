import { useState, useRef, useEffect, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles, UserCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  isAI?: boolean;
  isEscalation?: boolean;
}

interface FAQ {
  keywords: string[];
  answer: string;
  category?: string;
}

const faqData: FAQ[] = [
  // === OGÓLNE ===
  {
    keywords: ["cennik", "cena", "koszt", "ile kosztuje", "wycena", "budżet", "pakiet"],
    answer: "Ceny zależą od zakresu projektu. Strony internetowe od 3000 zł, logo od 1500 zł, kampanie reklamowe od 2000 zł/msc. Przygotujemy indywidualną wycenę - wypełnij formularz na stronie /cennik lub umów bezpłatną konsultację.",
    category: "ogólne"
  },
  {
    keywords: ["kontakt", "telefon", "email", "zadzwonić", "napisać", "mail"],
    answer: "Możesz się z nami skontaktować: 📧 kontakt@fotz.pl, 📱 +48 123 456 789. Biuro czynne pon-pt 9:00-17:00. Możesz też umówić bezpłatną konsultację przez kalendarz na stronie /kontakt.",
    category: "ogólne"
  },
  {
    keywords: ["konsultacja", "spotkanie", "rozmowa", "bezpłatna", "darmowa"],
    answer: "Oferujemy bezpłatną 30-minutową konsultację! Omówimy Twoje potrzeby i zaproponujemy rozwiązania. Umów się przez kalendarz na stronie /kontakt lub zadzwoń: +48 123 456 789.",
    category: "ogólne"
  },
  {
    keywords: ["portfolio", "realizacje", "przykłady", "case study", "projekty"],
    answer: "Zobacz nasze realizacje na stronie /realizacje. Mamy ponad 200 ukończonych projektów dla firm z różnych branż. Każdy case study zawiera opis wyzwań, procesu i osiągniętych rezultatów.",
    category: "ogólne"
  },
  {
    keywords: ["poznań", "wielkopolska", "lokalizacja", "gdzie", "adres", "biuro"],
    answer: "Siedziba: Poznań, ul. Przykładowa 10. Obsługujemy klientów z całej Polski - pracujemy również zdalnie. Dla klientów z Poznania oferujemy spotkania w naszym biurze lub u Ciebie.",
    category: "ogólne"
  },
  {
    keywords: ["współpraca", "jak zacząć", "proces", "etapy", "rozpocząć"],
    answer: "Proces współpracy: 1) Bezpłatna konsultacja, 2) Brief i wycena, 3) Umowa i zaliczka 50%, 4) Realizacja z Twoim feedbackiem, 5) Akceptacja i rozliczenie. Rozpocznij od kontaktu!",
    category: "ogólne"
  },
  {
    keywords: ["płatność", "faktura", "zaliczka", "rata", "przelew"],
    answer: "Akceptujemy przelewy i płatności online. Standardowo: 50% zaliczki, 50% po realizacji. Dla większych projektów możliwe raty. Wystawiamy faktury VAT. Szczegóły ustalamy indywidualnie.",
    category: "ogólne"
  },
  {
    keywords: ["gwarancja", "poprawki", "zmiany", "reklamacja", "modyfikacje"],
    answer: "Oferujemy gwarancję na wszystkie usługi. W cenie projektu: 2 rundy poprawek. Po realizacji: 30 dni na zgłaszanie uwag. Strony WWW objęte 12-miesięczną gwarancją techniczną.",
    category: "ogólne"
  },
  {
    keywords: ["czas", "termin", "realizacja", "jak długo", "kiedy", "deadline"],
    answer: "Orientacyjne terminy: Logo 2-3 tyg., Strona WWW 3-6 tyg., Sklep e-commerce 4-8 tyg., Kampanie - start w 3-5 dni. Dokładny termin ustalamy indywidualnie po poznaniu zakresu projektu.",
    category: "ogólne"
  },

  // === USŁUGI ===
  {
    keywords: ["strona", "www", "witryna", "website", "landing", "strony internetowe"],
    answer: "Tworzymy responsywne strony internetowe, sklepy e-commerce, landing page i aplikacje webowe. Czas realizacji: 2-6 tygodni. Każda strona jest zoptymalizowana pod SEO i szybkość działania. Więcej: /strony-internetowe",
    category: "usługi"
  },
  {
    keywords: ["logo", "branding", "identyfikacja", "wizualna", "marka", "znak"],
    answer: "Projektujemy kompleksową identyfikację wizualną: logo, księgę znaku, materiały firmowe, social media kit. Proces trwa 2-4 tygodnie i obejmuje research, koncepcje i pełną dokumentację. Więcej: /identyfikacja-wizualna",
    category: "usługi"
  },
  {
    keywords: ["social media", "facebook", "instagram", "tiktok", "posty", "linkedin"],
    answer: "Prowadzimy kompleksową obsługę social media: strategia, content, grafiki, reklamy. Pakiety od 2000 zł/msc. Tworzymy angażujące treści dopasowane do Twojej branży. Więcej: /social-media",
    category: "usługi"
  },
  {
    keywords: ["reklama", "kampania", "google ads", "facebook ads", "marketing", "ads"],
    answer: "Prowadzimy kampanie w Google Ads, Facebook Ads, Instagram, TikTok i LinkedIn. Optymalizujemy pod ROI i konwersje. Minimalny budżet reklamowy: 1500 zł/msc + prowadzenie. Więcej: /kampanie-reklamowe",
    category: "usługi"
  },
  {
    keywords: ["seo", "pozycjonowanie", "google", "widoczność", "wyszukiwarka"],
    answer: "Oferujemy kompleksowe SEO: audyt, optymalizacja on-page, link building, content marketing. Efekty widoczne po 3-6 miesiącach. Raportujemy pozycje i ruch co miesiąc. Więcej: /pozycjonowanie",
    category: "usługi"
  },
  {
    keywords: ["wideo", "film", "spot", "produkcja", "nagranie", "filmów"],
    answer: "Produkujemy spoty reklamowe, filmy korporacyjne, content wideo na social media. Mamy własne studio i sprzęt. Realizacja od 2 tygodni. Ceny od 3000 zł. Więcej: /produkcja-filmow-poznan",
    category: "usługi"
  },
  {
    keywords: ["sklep", "e-commerce", "ecommerce", "sprzedaż online", "woocommerce", "shopify"],
    answer: "Tworzymy sklepy internetowe na WooCommerce, Shopify i dedykowanych platformach. Integracja z płatnościami, kurierami i systemami ERP. Czas realizacji: 4-8 tygodni. Więcej: /e-commerce-tworzenie",
    category: "usługi"
  },
  {
    keywords: ["dron", "drone", "ujęcia", "z góry", "lotnicze", "aerial"],
    answer: "Oferujemy profesjonalne ujęcia z drona: nieruchomości, eventy, produkcja filmowa. Mamy licencjonowanych operatorów i ubezpieczenie. Ceny od 800 zł za sesję. Więcej: /fotografia-z-drona",
    category: "usługi"
  },
  {
    keywords: ["wizualizacja", "3d", "render", "architektoniczna", "produktowa"],
    answer: "Tworzymy fotorealistyczne wizualizacje 3D: architektoniczne, produktowe, wnętrz. Idealne dla deweloperów i producentów. Czas realizacji: 1-3 tygodnie. Więcej: /wizualizacje-3d",
    category: "usługi"
  },
  {
    keywords: ["podcast", "studio", "nagranie audio", "podcastowe"],
    answer: "Mamy profesjonalne studio podcastowe w Poznaniu. Oferujemy nagranie, montaż i dystrybucję. Wynajem studia od 150 zł/h. Więcej: /studio-podcastowe",
    category: "usługi"
  },

  // === BRANŻE ===
  {
    keywords: ["restauracja", "gastronomia", "kawiarnia", "bar", "food", "jedzenie"],
    answer: "Specjalizujemy się w marketingu gastronomicznym: food photography, social media, menu design, Google Maps. Współpracowaliśmy z 50+ restauracjami w Poznaniu. Więcej: /marketing-gastronomia",
    category: "branże"
  },
  {
    keywords: ["nieruchomości", "deweloper", "mieszkania", "osiedle", "inwestycja"],
    answer: "Dla deweloperów oferujemy: wizualizacje 3D, strony inwestycji, kampanie lead generation, wirtualne spacery. Mamy doświadczenie z 20+ inwestycjami. Więcej: /marketing-nieruchomosci",
    category: "branże"
  },
  {
    keywords: ["lekarz", "klinika", "medycyna", "gabinet", "stomatolog", "zdrowie"],
    answer: "Marketing medyczny z zachowaniem etyki: SEO lokalne, Google Ads, strony gabinetów, social media. Znamy regulacje branżowe. Więcej: /marketing-medyczny",
    category: "branże"
  },
  {
    keywords: ["beauty", "salon", "kosmetyczka", "fryzjer", "spa", "uroda"],
    answer: "Dla branży beauty: Instagram marketing, rezerwacje online, content wideo, influencer marketing. Efektowne portfolio i kampanie. Więcej: /marketing-beauty",
    category: "branże"
  },
  {
    keywords: ["it", "software", "startup", "technologia", "saas", "aplikacja"],
    answer: "Marketing dla IT i startupów: landing page, lead generation, content marketing B2B, LinkedIn Ads. Mówimy językiem technologii. Więcej: /marketing-it",
    category: "branże"
  },
  {
    keywords: ["samochód", "auto", "warsztat", "dealer", "motoryzacja", "car"],
    answer: "Dla automotive: fotografia samochodowa, wideo, Google Ads dla dealerów, social media. Rozumiemy pasję motoryzacyjną. Więcej: /marketing-automotive",
    category: "branże"
  },
  {
    keywords: ["hotel", "turystyka", "pensjonat", "agroturystyka", "wakacje"],
    answer: "Marketing turystyczny: strony rezerwacyjne, SEO lokalne, Google Hotel Ads, content wideo. Pomagamy zwiększyć obłożenie. Więcej: /marketing-turystyka",
    category: "branże"
  },
  {
    keywords: ["edukacja", "szkoła", "kurs", "szkolenie", "uczelnia"],
    answer: "Marketing edukacyjny: kampanie rekrutacyjne, social media, content marketing, strony kursów. Zwiększamy liczbę zapisów. Więcej: /marketing-edukacja",
    category: "branże"
  },
  {
    keywords: ["sklep online", "ecommerce", "retail", "sprzedaż", "produkty"],
    answer: "Dla e-commerce: Performance marketing, Google Shopping, remarketing, email marketing. Zwiększamy sprzedaż i ROAS. Więcej: /marketing-ecommerce",
    category: "branże"
  },
  {
    keywords: ["prawnik", "kancelaria", "adwokat", "finanse", "księgowość"],
    answer: "Marketing dla prawa i finansów: SEO, Google Ads, LinkedIn, content ekspercki. Z zachowaniem etyki zawodowej. Więcej: /marketing-prawo-finanse",
    category: "branże"
  },
  {
    keywords: ["produkcja", "przemysł", "fabryka", "b2b", "produkcyjny"],
    answer: "Marketing B2B dla przemysłu: strony produktowe, katalogi, LinkedIn Ads, targi. Rozumiemy specyfikę branży. Więcej: /marketing-produkcja",
    category: "branże"
  },
  {
    keywords: ["ngo", "fundacja", "stowarzyszenie", "organizacja", "charytatywna"],
    answer: "Marketing dla NGO: strony, kampanie fundraisingowe, social media, events. Specjalne warunki cenowe dla organizacji non-profit. Więcej: /marketing-ngo",
    category: "branże"
  },

  // === DODATKOWE ===
  {
    keywords: ["usługi", "oferta", "co robicie", "czym się zajmujecie"],
    answer: "FOTZ Studio oferuje: strony WWW, identyfikację wizualną, social media, kampanie reklamowe, SEO, produkcję wideo, fotografie, wizualizacje 3D. Pełna lista usług: /uslugi",
    category: "ogólne"
  },
  {
    keywords: ["zespół", "pracownicy", "kto", "specjaliści"],
    answer: "Nasz zespół to 12+ specjalistów: stratedzy, graficy, developerzy, copywriterzy, specjaliści ads i SEO. Każdy projekt prowadzi dedykowany opiekun. Poznaj nas: /o-nas",
    category: "ogólne"
  },
  {
    keywords: ["doświadczenie", "od kiedy", "ile lat", "historia"],
    answer: "FOTZ Studio działa od 2015 roku. Zrealizowaliśmy ponad 500 projektów dla 200+ klientów z różnych branż. Zobacz nasze case studies: /realizacje",
    category: "ogólne"
  },
  {
    keywords: ["klient", "dla kogo", "firma", "współpracujecie"],
    answer: "Współpracujemy z firmami każdej wielkości: od startupów po korporacje. Obsługujemy klientów z całej Polski, ze szczególnym focusem na Wielkopolskę. Zobacz: /dla-kogo",
    category: "ogólne"
  },
  {
    keywords: ["akademia", "szkolenie", "nauka", "kurs marketingowy"],
    answer: "FOTZ Akademia to platforma z materiałami edukacyjnymi o marketingu. Webinary, e-booki, checklisty dla przedsiębiorców. Sprawdź: /akademia",
    category: "ogólne"
  },
  {
    keywords: ["blog", "artykuły", "poradnik", "wiedza"],
    answer: "Na naszym blogu znajdziesz poradniki o marketingu, SEO, social media i reklamach. Nowe artykuły co tydzień. Czytaj: /blog",
    category: "ogólne"
  },
  {
    keywords: ["quiz", "test", "która usługa", "rekomendacja"],
    answer: "Nie wiesz, czego potrzebujesz? Wypełnij nasz quiz - dobierzemy usługi do Twoich potrzeb i budżetu! Sprawdź: /quiz",
    category: "ogólne"
  },
  {
    keywords: ["kalkulator", "roi", "zwrot", "inwestycja"],
    answer: "Sprawdź nasz kalkulator ROI - oblicz potencjalny zwrot z inwestycji w marketing dla Twojej branży. Wypróbuj: /kalkulator-roi",
    category: "ogólne"
  }
];

const quickQuestions = [
  "Ile kosztuje strona www?",
  "Jak długo trwa realizacja?",
  "Jak umówić konsultację?",
  "Jakie branże obsługujecie?"
];

export function ChatbotFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Cześć! 👋 Jestem asystentem FOTZ Studio. Jak mogę Ci pomóc? Możesz zadać pytanie lub wybrać jedno z poniższych:",
      isBot: true
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEscalationForm, setShowEscalationForm] = useState(false);
  const [escalationData, setEscalationData] = useState({ name: "", email: "", phone: "" });
  const [isSubmittingEscalation, setIsSubmittingEscalation] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const findFAQAnswer = (question: string): string | null => {
    const lowerQuestion = question.toLowerCase();
    
    for (const faq of faqData) {
      if (faq.keywords.some(keyword => lowerQuestion.includes(keyword))) {
        return faq.answer;
      }
    }
    
    return null;
  };

  const getAIResponse = async (question: string): Promise<string> => {
    try {
      const { data, error } = await supabase.functions.invoke('chatbot-ai', {
        body: { message: question }
      });

      if (error) {
        console.error('AI function error:', error);
        throw error;
      }

      return data?.answer || "Przepraszam, nie mogę teraz odpowiedzieć. Skontaktuj się z nami: kontakt@fotz.pl";
    } catch (error) {
      console.error('AI response error:', error);
      return "Przepraszam, wystąpił problem techniczny. Skontaktuj się z nami bezpośrednio: kontakt@fotz.pl lub +48 123 456 789.";
    }
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // First try FAQ
    const faqAnswer = findFAQAnswer(messageText);
    
    if (faqAnswer) {
      // FAQ match found
      setTimeout(() => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: faqAnswer,
          isBot: true,
          isAI: false
        };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 300);
    } else {
      // No FAQ match - use AI
      const aiAnswer = await getAIResponse(messageText);
      const botResponse: Message = {
        id: Date.now() + 1,
        text: aiAnswer,
        isBot: true,
        isAI: true
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleSend();
    }
  };

  const handleEscalation = () => {
    setShowEscalationForm(true);
  };

  const handleSubmitEscalation = async () => {
    if (!escalationData.name || !escalationData.email) {
      toast({
        title: "Wypełnij wymagane pola",
        description: "Imię i email są wymagane.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmittingEscalation(true);

    // Format conversation history
    const conversationHistory = messages
      .map(m => `${m.isBot ? 'Bot' : 'Użytkownik'}: ${m.text}`)
      .join('\n');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "2c9e6e82-97a0-4fb2-88d9-f6f4b23d5e2c",
          subject: "🔴 Eskalacja z chatbota - prośba o kontakt",
          from_name: escalationData.name,
          email: escalationData.email,
          phone: escalationData.phone || "Nie podano",
          message: `Użytkownik poprosił o kontakt z konsultantem.\n\nHistoria rozmowy:\n${conversationHistory}`,
          source: "Chatbot - Eskalacja"
        })
      });

      if (response.ok) {
        setShowEscalationForm(false);
        setEscalationData({ name: "", email: "", phone: "" });
        
        const escalationMessage: Message = {
          id: Date.now(),
          text: "✅ Dziękujemy! Nasz konsultant skontaktuje się z Tobą w ciągu 24 godzin roboczych. Jeśli sprawa jest pilna, zadzwoń: +48 123 456 789",
          isBot: true,
          isEscalation: true
        };
        setMessages(prev => [...prev, escalationMessage]);

        toast({
          title: "Zgłoszenie wysłane!",
          description: "Skontaktujemy się wkrótce."
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Escalation error:", error);
      toast({
        title: "Błąd wysyłania",
        description: "Spróbuj ponownie lub zadzwoń: +48 123 456 789",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingEscalation(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    Asystent FOTZ
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </h3>
                  <p className="text-xs opacity-80">AI • Odpowiadam natychmiast</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="h-80 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${message.isBot ? '' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isAI ? 'bg-gradient-to-br from-purple-500/20 to-primary/20' : 'bg-primary/10'}`}>
                        {message.isAI ? (
                          <Sparkles className="w-4 h-4 text-primary" />
                        ) : (
                          <Bot className="w-4 h-4 text-primary" />
                        )}
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        message.isBot
                          ? 'bg-muted text-foreground rounded-tl-none'
                          : 'bg-primary text-primary-foreground rounded-tr-none'
                      }`}
                    >
                      {message.text}
                      {message.isAI && (
                        <div className="mt-1 text-[10px] opacity-60 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Odpowiedź AI
                        </div>
                      )}
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                      <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    </div>
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Quick Questions (show only at start) */}
                {messages.length === 1 && !isLoading && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {quickQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="text-xs px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Escalation Form or Input */}
            {showEscalationForm ? (
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                  <button 
                    onClick={() => setShowEscalationForm(false)}
                    className="p-1 hover:bg-muted rounded-full transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <h4 className="font-medium text-sm">Poproś o kontakt</h4>
                </div>
                <div className="space-y-2">
                  <Input
                    value={escalationData.name}
                    onChange={(e) => setEscalationData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Imię i nazwisko *"
                    className="text-sm"
                  />
                  <Input
                    type="email"
                    value={escalationData.email}
                    onChange={(e) => setEscalationData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Email *"
                    className="text-sm"
                  />
                  <Input
                    type="tel"
                    value={escalationData.phone}
                    onChange={(e) => setEscalationData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Telefon (opcjonalnie)"
                    className="text-sm"
                  />
                  <Button 
                    onClick={handleSubmitEscalation} 
                    className="w-full"
                    disabled={isSubmittingEscalation}
                  >
                    {isSubmittingEscalation ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : (
                      <UserCheck className="w-4 h-4 mr-2" />
                    )}
                    Wyślij prośbę o kontakt
                  </Button>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2 text-center">
                  Odpowiemy w ciągu 24h roboczych
                </p>
              </div>
            ) : (
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Zadaj pytanie..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={() => handleSend()}
                    size="icon"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <button
                  onClick={handleEscalation}
                  className="w-full mt-2 text-xs text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1"
                >
                  <UserCheck className="w-3 h-3" />
                  Porozmawiaj z człowiekiem
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
