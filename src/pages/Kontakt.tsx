import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Plac Wolności 16",
    subtitle: "61-739 Poznań",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+48 123 456 789",
    subtitle: "Pon-Pt 9:00-17:00",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@fotz.pl",
    subtitle: "Odpowiadamy w 24h",
  },
  {
    icon: Clock,
    title: "Godziny",
    content: "Pon-Pt 9:00-17:00",
    subtitle: "Weekendy zamknięte",
  },
];

export default function Kontakt() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Wiadomość wysłana!",
      description: "Odezwiemy się do Ciebie w ciągu 24 godzin.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4">
              Kontakt
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
              Porozmawiajmy o{" "}
              <span className="text-gradient">Twoim projekcie</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Jesteśmy gotowi na nowe wyzwania. Napisz do nas lub odwiedź 
              nasze biuro w centrum Poznania.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <div
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6">
                Wyślij wiadomość
              </h2>

              {isSubmitted ? (
                <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 text-center">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
                    Dziękujemy za wiadomość!
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Imię i nazwisko *
                      </label>
                      <Input
                        required
                        placeholder="Jan Kowalski"
                        className="bg-secondary border-border h-9 sm:h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="jan@firma.pl"
                        className="bg-secondary border-border h-9 sm:h-10 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Telefon
                      </label>
                      <Input
                        type="tel"
                        placeholder="+48 123 456 789"
                        className="bg-secondary border-border h-9 sm:h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Firma
                      </label>
                      <Input
                        placeholder="Nazwa firmy"
                        className="bg-secondary border-border h-9 sm:h-10 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Czego dotyczy zapytanie? *
                    </label>
                    <select
                      required
                      className="w-full h-9 sm:h-10 px-3 rounded-lg bg-secondary border border-border text-foreground text-sm"
                    >
                      <option value="">Wybierz temat</option>
                      <option value="strony">Strony internetowe</option>
                      <option value="social">Social Media</option>
                      <option value="kampanie">Kampanie reklamowe</option>
                      <option value="marketing">Marketing premium</option>
                      <option value="studio">Studio podcastowe</option>
                      <option value="inne">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Wiadomość *
                    </label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Opisz swój projekt lub pytanie..."
                      className="bg-secondary border-border resize-none text-sm min-h-[100px] sm:min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full h-10 sm:h-12 text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Wysyłanie..."
                    ) : (
                      <>
                        Wyślij wiadomość
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div
              className={cn(
                "space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-secondary border border-border"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 sm:mb-4">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{info.title}</h3>
                    <p className="text-foreground text-xs sm:text-base truncate">{info.content}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {info.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.0!2d16.9194!3d52.4082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI0JzI5LjUiTiAxNsKwNTUnMTAuMCJF!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Fotz Studio"
                />
              </div>

              {/* CTA */}
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20">
                <h3 className="font-heading font-bold text-base sm:text-lg mb-1.5 sm:mb-2">
                  Preferujesz rozmowę?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Zadzwoń do nas lub umów bezpłatną konsultację online.
                </p>
                <Button variant="hero" asChild className="h-9 sm:h-10 text-sm sm:text-base">
                  <a href="tel:+48123456789">
                    <Phone className="w-4 h-4" />
                    Zadzwoń teraz
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
