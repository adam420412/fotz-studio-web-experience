import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeInView } from "@/components/FadeInView";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  city?: string;
  variant?: "full" | "compact";
}

export function ContactSection({ city, variant = "full" }: ContactSectionProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Wiadomość wysłana!",
      description: "Odezwiemy się w ciągu 24 godzin.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+48 790 814 814",
      href: "tel:+48790814814",
      desc: "Pon-Pt: 9:00 - 18:00"
    },
    {
      icon: Mail,
      label: "Email",
      value: "adam@fotz.pl",
      href: "mailto:adam@fotz.pl",
      desc: "Odpowiadamy w ciągu 24h"
    },
    {
      icon: MapPin,
      label: "Adres",
      value: "Plac Wolności 16",
      href: "https://maps.google.com/?q=Plac+Wolności+16+Poznań",
      desc: "61-739 Poznań"
    },
  ];

  const benefits = [
    "Bezpłatna wycena w 24h",
    "Bez zobowiązań",
    "Indywidualne podejście",
    "Ekspresowa realizacja"
  ];

  if (variant === "compact") {
    return (
      <section className="py-16 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <FadeInView>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
              >
                <MessageSquare className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Porozmawiajmy o Twoim projekcie
                {city && <span className="text-gradient"> w {city}</span>}
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Skontaktuj się z nami i otrzymaj bezpłatną wycenę. Odpowiadamy w ciągu 24 godzin.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:adam@fotz.pl">
                    <Mail className="mr-2 h-5 w-5" />
                    adam@fotz.pl
                  </a>
                </Button>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <FadeInView>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <MessageSquare className="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Kontakt
            </motion.span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
              Skontaktuj się z nami
              {city && <span className="text-gradient"> — {city}</span>}
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Porozmawiajmy o Twoim projekcie. Bezpłatna wycena w ciągu 24 godzin.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <FadeInView delay={0.1}>
            <motion.div 
              className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Wyślij zapytanie
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                      Imię i nazwisko *
                    </label>
                    <Input
                      id="name"
                      placeholder="Jan Kowalski"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card/50 h-9 sm:h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="phone" className="text-xs sm:text-sm font-medium">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+48 123 456 789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-card/50 h-9 sm:h-10 text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jan@firma.pl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card/50 h-9 sm:h-10 text-sm"
                  />
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                    Wiadomość *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Opisz swój projekt, potrzeby i oczekiwania..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[120px] sm:min-h-[150px] bg-card/50 text-sm"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group h-10 sm:h-11 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Wyślij wiadomość
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
              
              {/* Benefits */}
              <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 border-t border-border/50">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      {benefit}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeInView>

          {/* Contact Info */}
          <FadeInView delay={0.2}>
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg sm:rounded-xl hover:border-primary/30 transition-all group"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">{info.label}</p>
                    <p className="text-sm sm:text-lg font-semibold group-hover:text-primary transition-colors truncate">{info.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                </motion.a>
              ))}

              {/* Hours Card */}
              <motion.div 
                className="p-4 sm:p-6 bg-primary/5 border border-primary/20 rounded-lg sm:rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <h4 className="font-semibold text-sm sm:text-base">Godziny pracy</h4>
                </div>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pon - Pt</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sob - Ndz</span>
                    <span className="font-medium">Zamknięte</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick CTA */}
              <motion.div 
                className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50 rounded-lg sm:rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Wolisz porozmawiać?</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Zadzwoń teraz i porozmawiaj z naszym specjalistą o Twoim projekcie.
                </p>
                <Button asChild variant="outline" className="w-full group h-9 sm:h-10 text-sm">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-4 w-4" />
                    Zadzwoń teraz
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
