import { useState } from "react";
import { Download, Mail, Loader2, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { sendLeadToCRM } from "@/hooks/useCRMWebhook";

const emailSchema = z.string().trim().email("Nieprawidłowy adres email");

const checklistItems = [
  "Jak wybrać odpowiedni kanał reklamowy",
  "Optymalizacja budżetu kampanii",
  "Tworzenie skutecznych kreacji",
  "Analiza i mierzenie wyników",
  "Remarketing i retencja klientów",
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: "Nowy zapis do newslettera - Checklista kampanii",
          from_name: "Fotz Studio - Newsletter",
          email: email,
          message: "Użytkownik zapisał się do newslettera i pobrał checklistę skutecznej kampanii.",
        }),
      });

      const data = await response.json();
      if (!data.success) throw new Error();

      // Send to CRM webhook (fire and forget)
      sendLeadToCRM({
        name: email.split("@")[0], // Use email prefix as name
        email: email,
        source: "fotz.pl/newsletter",
        notes: "Zapis do newslettera - pobranie checklisty kampanii",
      });

      setIsSubmitted(true);
    } catch {
      setError("Wystąpił błąd. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Darmowy materiał
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Pobierz checklistę{" "}
              <span className="text-gradient">skutecznej kampanii</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              10 kroków, które sprawdzą, czy Twój marketing działa na 100%. 
              Sprawdzona lista kontrolna używana przez nasz zespół przy każdym projekcie.
            </p>

            {/* Checklist preview */}
            <div className="space-y-3 mb-8">
              {checklistItems.map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "flex items-center gap-3 transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    Dziękujemy za zapis!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Sprawdź swoją skrzynkę mailową - wysłaliśmy Ci checklistę w formacie PDF.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-primary text-sm">
                    <FileText className="w-4 h-4" />
                    Checklista_Kampanii_Fotz.pdf
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Download className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">
                      Pobierz bezpłatnie
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Wpisz email, a wyślemy Ci checklistę w formacie PDF
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Twój adres email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 bg-background border-border"
                        />
                      </div>
                      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="w-full h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Wysyłanie...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Pobierz checklistę
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Zapisując się, wyrażasz zgodę na otrzymywanie newslettera. 
                    Możesz wypisać się w każdej chwili.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}