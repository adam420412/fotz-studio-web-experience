import { useState } from "react";
import { CheckCircle, Clock, Target, Zap, Loader2, Send, Phone, ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/FadeInView";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { Link } from "react-router-dom";
import { sendLeadToCRM } from "@/hooks/useCRMWebhook";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from "@/components/seo/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const consultationSchema = z.object({
  name: z.string().trim().min(2, "Imię musi mieć minimum 2 znaki").max(100, "Imię max 100 znaków"),
  email: z.string().trim().email("Nieprawidłowy adres email").max(255, "Email max 255 znaków"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

const benefits = [
  {
    icon: Target,
    title: "Przegląd strategii",
    description: "Analizujemy Twoją obecną strategię marketingową i identyfikujemy obszary do optymalizacji",
  },
  {
    icon: TrendingUp,
    title: "Analiza konkurencji",
    description: "Benchmarkujemy Twoją pozycję względem konkurentów i identyfikujemy szanse wzrostu",
  },
  {
    icon: Zap,
    title: "Optymalizacja budżetu",
    description: "Pokazujemy, jak lepiej alokować budżet marketingowy dla maksymalnego ROI",
  },
  {
    icon: CheckCircle,
    title: "Plan działań",
    description: "Otrzymujesz konkretny, wykonalny plan działań dostosowany do Twojego biznesu",
  },
];

const steps = [
  {
    number: "01",
    title: "Umów konsultację",
    description: "Wypełnij formularz i wybierz dogodny termin. Konsultacja trwa 30 minut.",
  },
  {
    number: "02",
    title: "Rozmowa z ekspertem",
    description: "Rozmawiamy o Twoim biznesie, celach i wyzwaniach. Pytamy, słuchamy, analizujemy.",
  },
  {
    number: "03",
    title: "Otrzymaj plan",
    description: "Po konsultacji wysyłamy Ci szczegółowy plan działań i rekomendacje.",
  },
];

const faqs = [
  {
    question: "Kto prowadzi konsultację?",
    answer: "Konsultację prowadzi Adam - twórca Fotz Studio z ponad 10-letnim doświadczeniem w marketingu. Będziesz pracować bezpośrednio z ekspertem, nie z asystentem.",
  },
  {
    question: "Czy konsultacja to zobowiązanie do współpracy?",
    answer: "Nie. Konsultacja jest bezpłatna i bez zobowiązań. Celem jest poznanie się i pokazanie, jak możemy Ci pomóc. Decyzja o współpracy jest całkowicie Twoja.",
  },
  {
    question: "Ile czasu zajmuje konsultacja?",
    answer: "Konsultacja trwa 30 minut. To wystarczający czas, aby zrozumieć Twoją sytuację, zadać pytania i zaproponować rekomendacje.",
  },
  {
    question: "Na co mogę liczyć po konsultacji?",
    answer: "Po konsultacji otrzymasz: notatki z rozmowy, analizę Twoich wyzwań, konkretne rekomendacje działań, szacunkowe koszty (jeśli będzie zainteresowanie), i propozycję dalszej współpracy.",
  },
];

const trustSignals = [
  { number: "10+", label: "Lat doświadczenia", icon: Award },
  { number: "150+", label: "Zadowolonych klientów", icon: Users },
  { number: "5/5", label: "Średnia ocena", icon: TrendingUp },
];

export default function Konsultacja() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});

    const result = consultationSchema.safeParse(formData);
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
          subject: `Nowe zapytanie o konsultację - od ${formData.name}`,
          from_name: "Fotz Studio - Konsultacja",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Nie podano",
          company: formData.company || "Nie podano",
          message: formData.message || "Brak dodatkowych informacji",
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error("Błąd podczas wysyłania zapytania");
      }

      sendLeadToCRM({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        source: "fotz.pl/konsultacja",
        notes: `Zapytanie o darmową konsultację.\n\n${formData.message || "Brak dodatkowych informacji"}`,
      });

      setIsSubmitted(true);
      toast({
        title: "Zapytanie wysłane!",
        description: "Skontaktujemy się z Tobą w ciągu 24 godzin, aby umówić konsultację.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Błąd wysyłania",
        description: "Nie udało się wysłać zapytania. Spróbuj ponownie lub zadzwoń do nas.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Darmowa Konsultacja Marketingowa | Fotz Studio Poznań"
        description="Umów bezpłatną 30-minutową konsultację marketingową. Omówimy strategię, cele i budżet Twojej firmy. Bez zobowiązań."
        canonical="https://fotz.pl/konsultacja"
        keywords="konsultacja marketingowa, darmowa konsultacja, marketing Poznań, strategia marketingowa"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Konsultacja", url: "https://fotz.pl/konsultacja" },
        ]}
      />
      <FAQSchema items={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 section-padding bg-background">
        <div className="container-wide">
          <FadeInView className="max-w-3xl">
            <span className="inline-block text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4">
              Darmowa konsultacja
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
              Umów <span className="text-gradient">Darmową Konsultację</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Porozmawiajmy o Twojej strategii marketingowej. Otrzymasz konkretne rekomendacje
              bez zobowiązań. 30 minut rozmowy, które mogą zmienić Twój biznes.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Co zyskujesz?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Konsultacja to nie sprzedaż – to analiza Twojego biznesu i konkretne porady działań.
            </p>
          </FadeInView>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, i) => (
              <StaggerItem key={i} className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Jak to działa?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Prosty proces w 3 krokach – od rezerwacji do otrzymania planu działań.
            </p>
          </FadeInView>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                      <span className="text-lg sm:text-xl font-heading font-bold text-primary">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Consultation Form & Info */}
      <section ref={ref} className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Form */}
            <div
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6">
                Umów konsultację
              </h2>

              {isSubmitted ? (
                <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 text-center">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
                    Dziękujemy!
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Skontaktujemy się z Tobą w ciągu 24 godzin, aby umówić konsultację.
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
                        Nazwa firmy
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Twoja firma"
                        className="bg-secondary border-border h-9 sm:h-10 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Kilka słów o Twoim biznesie
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      placeholder="Co robisz? Jakie są Twoje główne wyzwania marketingowe?"
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
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        Umów konsultację
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Info & Trust Signals */}
            <div
              className={cn(
                "space-y-6 sm:space-y-8 transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {/* Key Info */}
              <div className="space-y-4">
                {[
                  { icon: Clock, title: "30 minut", desc: "Fokusowa rozmowa" },
                  { icon: CheckCircle, title: "Bez zobowiązań", desc: "Bez nacisku na sprzedaż" },
                  { icon: Target, title: "Konkretne porady", desc: "Praktyczne rekomendacje" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="font-heading font-bold text-base sm:text-lg mb-4">Dlaczego nas wybrać?</h3>
                <div className="space-y-3">
                  {trustSignals.map((signal) => (
                    <div key={signal.label} className="flex items-center gap-3">
                      <signal.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="text-sm">
                        <span className="font-bold text-foreground">{signal.number}</span>
                        <span className="text-muted-foreground"> {signal.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-secondary border border-border">
                <h3 className="font-heading font-bold text-base sm:text-lg mb-1.5 sm:mb-2">
                  Wolisz zadzwonić?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Dostępni Pon-Pt 9:00-17:00
                </p>
                <Button variant="hero" asChild className="h-9 sm:h-10 text-sm sm:text-base w-full">
                  <a href="tel:+48790814814">
                    <Phone className="w-4 h-4" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <FadeInView className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Najczęstsze pytania
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Masz wątpliwości? Sprawdź odpowiedzi na najczęściej zadawane pytania.
            </p>
          </FadeInView>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-4 sm:px-6">
                  <AccordionTrigger className="text-left font-medium hover:text-primary text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <FadeInView className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
              Gotowy na zmianę?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Konsultacja to pierwszy krok do lepszej strategii marketingowej.
              Bez zobowiązań, tylko szczera rozmowa o Twoim biznesie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/konsultacja" className="group">
                  Umów konsultację
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+48790814814">Zadzwoń: 790 814 814</a>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
}
