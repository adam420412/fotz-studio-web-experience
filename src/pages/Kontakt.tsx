import { useState } from "react";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, Calendar, Calculator, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { Link } from "react-router-dom";
import { BookingCalendar } from "@/components/BookingCalendar";
import { sendLeadToCRM } from "@/hooks/useCRMWebhook";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/StructuredData";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Imię musi mieć minimum 2 znaki").max(100, "Imię max 100 znaków"),
  email: z.string().trim().email("Nieprawidłowy adres email").max(255, "Email max 255 znaków"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  subject: z.string().min(1, "Wybierz temat zapytania"),
  message: z.string().trim().min(10, "Wiadomość musi mieć minimum 10 znaków").max(2000, "Wiadomość max 2000 znaków"),
});

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
    content: "+48 790 814 814",
    subtitle: "Pon-Pt 9:00-17:00",
  },
  {
    icon: Mail,
    title: "Email",
    content: "adam@fotz.pl",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});

    // Walidacja
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Nowe zapytanie: ${formData.subject} - od ${formData.name}`,
          from_name: "Fotz Studio - Kontakt",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Nie podano",
          company: formData.company || "Nie podano",
          topic: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error("Błąd podczas wysyłania wiadomości");
      }

      // Send to CRM webhook (fire and forget)
      sendLeadToCRM({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        source: "fotz.pl/kontakt",
        notes: `Temat: ${formData.subject}\n\n${formData.message}`,
      });

      setIsSubmitted(true);
      toast({
        title: "Wiadomość wysłana!",
        description: "Odezwiemy się do Ciebie w ciągu 24 godzin.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Błąd wysyłania",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń do nas.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Kontakt - Umów Bezpłatną Konsultację | Fotz Studio Poznań</title>
        <meta name="description" content="Skontaktuj się z nami! Biuro: Plac Wolności 16, Poznań. Tel: +48 790 814 814. Email: adam@fotz.pl. Umów bezpłatną konsultację marketingową online." />
        <meta name="keywords" content="kontakt agencja marketingowa, Fotz Studio kontakt, konsultacja marketingowa, Poznań agencja, Plac Wolności 16" />
        <link rel="canonical" href="https://fotz.pl/kontakt" />
        <meta property="og:title" content="Kontakt | Fotz Studio Poznań" />
        <meta property="og:description" content="Skontaktuj się z nami! Biuro w centrum Poznania. Umów bezpłatną konsultację marketingową." />
        <meta property="og:url" content="https://fotz.pl/kontakt" />
      </Helmet>
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Kontakt", url: "https://fotz.pl/kontakt" }
        ]}
      />
      <LocalBusinessSchema />
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
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Jan Kowalski"
                        className={cn(
                          "bg-secondary border-border h-9 sm:h-10 text-sm",
                          formErrors.name && "border-red-500"
                        )}
                      />
                      {formErrors.name && <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="jan@firma.pl"
                        className={cn(
                          "bg-secondary border-border h-9 sm:h-10 text-sm",
                          formErrors.email && "border-red-500"
                        )}
                      />
                      {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Telefon
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+48 123 456 789"
                        className="bg-secondary border-border h-9 sm:h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Firma
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
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
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className={cn(
                        "w-full h-9 sm:h-10 px-3 rounded-lg bg-secondary border border-border text-foreground text-sm",
                        formErrors.subject && "border-red-500"
                      )}
                    >
                      <option value="">Wybierz temat</option>
                      <option value="Strony internetowe">Strony internetowe</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Kampanie reklamowe">Kampanie reklamowe</option>
                      <option value="Marketing premium">Marketing premium</option>
                      <option value="Studio podcastowe">Studio podcastowe</option>
                      <option value="Produkcja foto/video">Produkcja foto/video</option>
                      <option value="Branding">Branding i identyfikacja</option>
                      <option value="Inne">Inne</option>
                    </select>
                    {formErrors.subject && <p className="text-xs text-red-500 mt-1">{formErrors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Wiadomość *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      placeholder="Opisz swój projekt lub pytanie..."
                      className={cn(
                        "bg-secondary border-border resize-none text-sm min-h-[100px] sm:min-h-[120px]",
                        formErrors.message && "border-red-500"
                      )}
                    />
                    {formErrors.message && <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full h-10 sm:h-12 text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Wysyłanie...
                      </>
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
                  <a href="tel:+48790814814">
                    <Phone className="w-4 h-4" />
                    Zadzwoń teraz
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
                <Calendar className="w-4 h-4" />
                Rezerwacja online
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Umów <span className="text-gradient">bezpłatną konsultację</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Wybierz dogodny termin na 30-minutową rozmowę. Przeanalizujemy 
                Twoje potrzeby marketingowe i zaproponujemy rozwiązania.
              </p>

              <div className="space-y-4">
                {[
                  "30 minut rozmowy z ekspertem",
                  "Analiza Twojej obecnej sytuacji",
                  "Konkretne rekomendacje działań",
                  "Bez zobowiązań",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Calendar */}
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
              <BookingCalendar />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Calculator className="w-4 h-4" />
              Cennik usług
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Sprawdź ceny i <span className="text-gradient">skonfiguruj ofertę</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skorzystaj z naszego interaktywnego konfiguratora cennika. 
              Wybierz usługi i zobacz szacunkowy koszt w czasie rzeczywistym.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/cennik" className="group">
                Przejdź do cennika
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
