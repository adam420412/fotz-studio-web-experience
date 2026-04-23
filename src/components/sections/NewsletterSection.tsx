import { useState } from "react";
import { Download, Mail, Loader2, CheckCircle, FileText } from "lucide-react";
import { z } from "zod";
import { sendLeadToCRM } from "@/hooks/useCRMWebhook";
import { submitWeb3Form } from "@/lib/web3forms";

const emailSchema = z.string().trim().email("Nieprawidłowy adres email");

const checklistItems = [
  "Jak wybrać odpowiedni kanał reklamowy",
  "Definicja grupy docelowej i buyer persony",
  "Optymalizacja budżetu kampanii",
  "Tworzenie skutecznych kreacji i copy",
  "Konfiguracja pixela i konwersji",
  "Strategia testów A/B",
  "Analiza i mierzenie wyników (KPI)",
  "Remarketing i retencja klientów",
  "Atrybucja i raportowanie ROI",
  "Skalowanie zwycięskich kampanii",
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

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
      await submitWeb3Form({
        subject: "Nowy zapis do newslettera - Checklista kampanii",
        from_name: "Fotz Studio - Newsletter",
        email: email,
        message: "Użytkownik zapisał się do newslettera i pobrał checklistę skutecznej kampanii.",
      });

      sendLeadToCRM({
        name: email.split("@")[0],
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
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--dv-bg-raised)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — content */}
          <div>
            <span className="dv-eyebrow mb-6 inline-block">Darmowy materiał</span>
            <h2
              className="font-geist mb-6"
              style={{
                fontSize: "clamp(36px, 4vw, 64px)",
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                fontWeight: 400,
              }}
            >
              Pobierz checklistę
              <br />
              <span className="dv-text-grad italic">skutecznej kampanii</span>
            </h2>
            <p
              className="mb-10"
              style={{
                color: "var(--dv-fg-muted)",
                fontSize: "17px",
                lineHeight: 1.55,
                maxWidth: "50ch",
              }}
            >
              10 kroków, które sprawdzą, czy Twój marketing działa na 100%.
              Sprawdzona lista kontrolna używana przez nasz zespół przy każdym projekcie.
            </p>

            <div className="space-y-3">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(230, 130, 170, 0.15)" }}
                  >
                    <CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--dv-accent-pink)" }} />
                  </div>
                  <span
                    className="text-[15px]"
                    style={{ color: "var(--dv-fg-muted)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="dv-panel p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(230, 130, 170, 0.12)" }}
                >
                  <CheckCircle className="w-10 h-10" style={{ color: "var(--dv-accent-pink)" }} />
                </div>
                <h3 className="dv-h-sm mb-3">Dziękujemy za zapis!</h3>
                <p className="mb-6" style={{ color: "var(--dv-fg-muted)", fontSize: "15px" }}>
                  Sprawdź swoją skrzynkę mailową — wysłaliśmy Ci checklistę w formacie PDF.
                </p>
                <span className="dv-pill">
                  <FileText className="w-4 h-4" style={{ color: "var(--dv-accent-pink)" }} />
                  Checklista_Kampanii_Fotz.pdf
                </span>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(230, 130, 170, 0.12)" }}
                  >
                    <Download className="w-8 h-8" style={{ color: "var(--dv-accent-pink)" }} />
                  </div>
                  <h3 className="dv-h-sm mb-2">Pobierz bezpłatnie</h3>
                  <p style={{ color: "var(--dv-fg-muted)", fontSize: "14px" }}>
                    Wpisz email, a wyślemy Ci checklistę w formacie PDF
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                        style={{ color: "var(--dv-fg-muted)" }}
                      />
                      <input
                        type="email"
                        placeholder="Twój adres email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 pl-12 pr-4 rounded-xl text-[15px] text-foreground placeholder:text-[color:var(--dv-fg-muted)] outline-none focus:ring-2 focus:ring-[color:var(--dv-accent-pink)] transition-shadow"
                        style={{
                          background: "var(--dv-ink)",
                          border: "1px solid var(--dv-hair)",
                        }}
                      />
                    </div>
                    {error && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="dv-btn dv-btn-primary w-full justify-center"
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
                  </button>
                </form>

                <p
                  className="text-center mt-5"
                  style={{ color: "var(--dv-fg-muted)", fontSize: "12px" }}
                >
                  Zapisując się, wyrażasz zgodę na otrzymywanie newslettera.
                  Możesz wypisać się w każdej chwili.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
