import { useState, useEffect } from "react";
import { X, Download, Mail, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const emailSchema = z.string().trim().email("Nieprawidłowy adres email");

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("newsletter_popup_shown");
    if (hasSeenPopup) return;

    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter_popup_shown", "true");
  };

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
          subject: "Nowy zapis do newslettera - Lead Magnet",
          from_name: "Fotz Studio - Newsletter",
          email: email,
          message: "Użytkownik zapisał się do newslettera i pobrał checklistę.",
        }),
      });

      const data = await response.json();
      if (!data.success) throw new Error();

      setIsSubmitted(true);
      localStorage.setItem("newsletter_popup_shown", "true");
    } catch {
      setError("Wystąpił błąd. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors z-10"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">
                Dziękujemy za zapis!
              </h3>
              <p className="text-muted-foreground mb-4">
                Sprawdź swoją skrzynkę mailową - wysłaliśmy Ci checklistę.
              </p>
              <Button variant="hero" onClick={handleClose}>
                Zamknij
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">
                  Pobierz bezpłatną checklistę
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  <span className="font-semibold text-foreground">
                    "10 kroków do skutecznej kampanii reklamowej"
                  </span>{" "}
                  - sprawdź, czy Twój marketing działa na 100%.
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
                      className="pl-10 h-12 bg-secondary border-border"
                    />
                  </div>
                  {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
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
  );
}