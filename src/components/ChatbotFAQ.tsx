import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface FAQ {
  keywords: string[];
  answer: string;
}

const faqData: FAQ[] = [
  {
    keywords: ["cennik", "cena", "koszt", "ile kosztuje", "wycena", "budżet"],
    answer: "Ceny zależą od zakresu projektu. Strony internetowe od 3000 zł, logo od 1500 zł, kampanie reklamowe od 2000 zł/msc. Przygotujemy indywidualną wycenę - wypełnij formularz na stronie /cennik lub umów bezpłatną konsultację."
  },
  {
    keywords: ["kontakt", "telefon", "email", "zadzwonić", "napisać"],
    answer: "Możesz się z nami skontaktować: 📧 kontakt@fotz.pl, 📱 +48 123 456 789. Biuro czynne pon-pt 9:00-17:00. Możesz też umówić bezpłatną konsultację przez kalendarz na stronie /kontakt."
  },
  {
    keywords: ["strona", "www", "witryna", "website", "landing"],
    answer: "Tworzymy responsywne strony internetowe, sklepy e-commerce, landing page i aplikacje webowe. Czas realizacji: 2-6 tygodni. Każda strona jest zoptymalizowana pod SEO i szybkość działania. Więcej: /strony-internetowe"
  },
  {
    keywords: ["logo", "branding", "identyfikacja", "wizualna", "marka"],
    answer: "Projektujemy kompleksową identyfikację wizualną: logo, księgę znaku, materiały firmowe, social media kit. Proces trwa 2-4 tygodnie i obejmuje research, koncepcje i pełną dokumentację. Więcej: /identyfikacja-wizualna"
  },
  {
    keywords: ["social media", "facebook", "instagram", "tiktok", "posty"],
    answer: "Prowadzimy kompleksową obsługę social media: strategia, content, grafiki, reklamy. Pakiety od 2000 zł/msc. Tworzymy angażujące treści dopasowane do Twojej branży. Więcej: /social-media"
  },
  {
    keywords: ["reklama", "kampania", "google ads", "facebook ads", "marketing"],
    answer: "Prowadzimy kampanie w Google Ads, Facebook Ads, Instagram, TikTok i LinkedIn. Optymalizujemy pod ROI i konwersje. Minimalny budżet reklamowy: 1500 zł/msc + prowadzenie. Więcej: /kampanie-reklamowe"
  },
  {
    keywords: ["seo", "pozycjonowanie", "google", "widoczność"],
    answer: "Oferujemy kompleksowe SEO: audyt, optymalizacja on-page, link building, content marketing. Efekty widoczne po 3-6 miesiącach. Raportujemy pozycje i ruch co miesiąc. Więcej: /pozycjonowanie"
  },
  {
    keywords: ["wideo", "film", "spot", "produkcja", "nagranie"],
    answer: "Produkujemy spoty reklamowe, filmy korporacyjne, content wideo na social media. Mamy własne studio i sprzęt. Realizacja od 2 tygodni. Ceny od 3000 zł. Więcej: /produkcja-filmow-poznan"
  },
  {
    keywords: ["czas", "termin", "realizacja", "jak długo", "kiedy"],
    answer: "Orientacyjne terminy: Logo 2-3 tyg., Strona WWW 3-6 tyg., Sklep e-commerce 4-8 tyg., Kampanie - start w 3-5 dni. Dokładny termin ustalamy indywidualnie po poznaniu zakresu projektu."
  },
  {
    keywords: ["konsultacja", "spotkanie", "rozmowa", "bezpłatna"],
    answer: "Oferujemy bezpłatną 30-minutową konsultację! Omówimy Twoje potrzeby i zaproponujemy rozwiązania. Umów się przez kalendarz na stronie /kontakt lub zadzwoń: +48 123 456 789."
  },
  {
    keywords: ["portfolio", "realizacje", "przykłady", "case study"],
    answer: "Zobacz nasze realizacje na stronie /realizacje. Mamy ponad 200 ukończonych projektów dla firm z różnych branż. Każdy case study zawiera opis wyzwań, procesu i osiągniętych rezultatów."
  },
  {
    keywords: ["poznań", "wielkopolska", "lokalizacja", "gdzie"],
    answer: "Siedziba: Poznań, ul. Przykładowa 10. Obsługujemy klientów z całej Polski - pracujemy również zdalnie. Dla klientów z Poznania oferujemy spotkania w naszym biurze lub u Ciebie."
  },
  {
    keywords: ["współpraca", "jak zacząć", "proces", "etapy"],
    answer: "Proces współpracy: 1) Bezpłatna konsultacja, 2) Brief i wycena, 3) Umowa i zaliczka 50%, 4) Realizacja z Twoim feedbackiem, 5) Akceptacja i rozliczenie. Rozpocznij od kontaktu!"
  },
  {
    keywords: ["płatność", "faktura", "zaliczka", "rata"],
    answer: "Akceptujemy przelewy i płatności online. Standardowo: 50% zaliczki, 50% po realizacji. Dla większych projektów możliwe raty. Wystawiamy faktury VAT. Szczegóły ustalamy indywidualnie."
  },
  {
    keywords: ["gwarancja", "poprawki", "zmiany", "reklamacja"],
    answer: "Oferujemy gwarancję na wszystkie usługi. W cenie projektu: 2 rundy poprawek. Po realizacji: 30 dni na zgłaszanie uwag. Strony WWW objęte 12-miesięczną gwarancją techniczną."
  }
];

const defaultResponses = [
  "Przepraszam, nie znalazłem odpowiedzi na to pytanie. Skontaktuj się z nami bezpośrednio: kontakt@fotz.pl lub +48 123 456 789.",
  "Nie jestem pewien jak odpowiedzieć. Umów bezpłatną konsultację na /kontakt - nasz zespół odpowie na wszystkie pytania!",
  "To pytanie wymaga indywidualnej odpowiedzi. Zadzwoń do nas lub napisz - chętnie pomożemy!"
];

const quickQuestions = [
  "Ile kosztuje strona www?",
  "Jak długo trwa realizacja?",
  "Jak umówić konsultację?",
  "Jakie usługi oferujecie?"
];

export function ChatbotFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Cześć! 👋 Jestem asystentem FOTZ. Jak mogę Ci pomóc? Możesz zadać pytanie lub wybrać jedno z poniższych:",
      isBot: true
    }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    for (const faq of faqData) {
      if (faq.keywords.some(keyword => lowerQuestion.includes(keyword))) {
        return faq.answer;
      }
    }
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: findAnswer(messageText),
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
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
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Asystent FOTZ</h3>
                  <p className="text-xs opacity-80">Odpowiadam natychmiast</p>
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
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary" />
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
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Quick Questions (show only at start) */}
                {messages.length === 1 && (
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

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Zadaj pytanie..."
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSend()}
                  size="icon"
                  disabled={!input.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
