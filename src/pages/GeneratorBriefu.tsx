import { useState, useRef } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Globe, 
  ShoppingCart, 
  Megaphone, 
  Share2, 
  Palette, 
  FileText, 
  Camera, 
  Sparkles,
  Building2,
  Target,
  User,
  Download,
  Mail,
  Loader2,
  CheckCircle,
  FileDown
} from "lucide-react";
import { z } from "zod";
import { Link } from "react-router-dom";

// Types
interface FormData {
  // Step 1
  projectType: string;
  // Step 2
  companyName: string;
  industry: string;
  currentWebsite: string;
  companySize: string;
  // Step 3
  goals: string[];
  deadline: string;
  budget: string;
  // Step 4
  description: string;
  inspirations: string;
  style: string;
  competition: string;
  // Step 5
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
}

const initialFormData: FormData = {
  projectType: "",
  companyName: "",
  industry: "",
  currentWebsite: "",
  companySize: "",
  goals: [],
  deadline: "",
  budget: "",
  description: "",
  inspirations: "",
  style: "",
  competition: "",
  fullName: "",
  email: "",
  phone: "",
  preferredContact: "",
};

const projectTypes = [
  { value: "strona", label: "Strona internetowa", icon: Globe },
  { value: "ecommerce", label: "Sklep e-commerce", icon: ShoppingCart },
  { value: "kampanie", label: "Kampanie reklamowe", icon: Megaphone },
  { value: "social", label: "Social Media", icon: Share2 },
  { value: "branding", label: "Branding & Identyfikacja", icon: Palette },
  { value: "content", label: "Content Marketing / SEO", icon: FileText },
  { value: "foto-video", label: "Produkcja foto/video", icon: Camera },
  { value: "kompleksowa", label: "Kompleksowa obsługa", icon: Sparkles },
];

const industries = [
  "Gastronomia & HoReCa",
  "Beauty & Wellness",
  "Nieruchomości",
  "E-commerce & Retail",
  "IT & SaaS",
  "Medycyna & Zdrowie",
  "Edukacja",
  "Prawo & Finanse",
  "Turystyka",
  "Automotive",
  "Produkcja & B2B",
  "NGO & Fundacje",
  "Inna",
];

const companySizes = [
  { value: "micro", label: "Mikrofirma (1-9 osób)" },
  { value: "small", label: "Mała firma (10-49 osób)" },
  { value: "medium", label: "Średnia firma (50-249 osób)" },
  { value: "large", label: "Duża firma (250+ osób)" },
];

const goalOptions = [
  "Zwiększenie sprzedaży",
  "Budowanie rozpoznawalności marki",
  "Generowanie leadów",
  "Wejście na nowy rynek",
  "Rebranding / odświeżenie wizerunku",
  "Automatyzacja marketingu",
  "Poprawa pozycji w Google",
  "Zwiększenie zaangażowania w social media",
];

const deadlines = [
  { value: "asap", label: "Jak najszybciej" },
  { value: "1month", label: "W ciągu 1 miesiąca" },
  { value: "3months", label: "W ciągu 3 miesięcy" },
  { value: "6months", label: "W ciągu 6 miesięcy" },
  { value: "flexible", label: "Elastyczny termin" },
];

const budgets = [
  { value: "5000", label: "Do 5 000 PLN" },
  { value: "10000", label: "5 000 - 10 000 PLN" },
  { value: "25000", label: "10 000 - 25 000 PLN" },
  { value: "50000", label: "25 000 - 50 000 PLN" },
  { value: "100000", label: "50 000 - 100 000 PLN" },
  { value: "more", label: "Powyżej 100 000 PLN" },
];

const styles = [
  { value: "minimalistyczny", label: "Minimalistyczny" },
  { value: "nowoczesny", label: "Nowoczesny" },
  { value: "klasyczny", label: "Klasyczny / Elegancki" },
  { value: "kreatywny", label: "Kreatywny / Artystyczny" },
  { value: "korporacyjny", label: "Korporacyjny" },
];

const contactMethods = [
  { value: "phone", label: "Telefon" },
  { value: "email", label: "Email" },
  { value: "meeting", label: "Spotkanie online" },
];

const emailSchema = z.string().email("Nieprawidłowy adres email");

export default function GeneratorBriefu() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showSummary, setShowSummary] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const printRef = useRef<HTMLDivElement>(null);

  const totalSteps = 5;

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.projectType !== "";
      case 1:
        return formData.companyName !== "" && formData.industry !== "";
      case 2:
        return formData.goals.length > 0 && formData.deadline !== "" && formData.budget !== "";
      case 3:
        return formData.description !== "";
      case 4:
        return formData.fullName !== "" && formData.email !== "" && formData.preferredContact !== "";
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStep === 4) {
      const emailResult = emailSchema.safeParse(formData.email);
      if (!emailResult.success) {
        setEmailError(emailResult.error.errors[0].message);
        return;
      }
      setEmailError("");
      setShowSummary(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (showSummary) {
      setShowSummary(false);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const briefContent = generateBriefHTML();
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Nowy brief projektowy - ${formData.companyName}`,
          from_name: `${formData.fullName} - Generator Briefu`,
          email: formData.email,
          phone: formData.phone || "Nie podano",
          company: formData.companyName,
          project_type: projectTypes.find(p => p.value === formData.projectType)?.label || formData.projectType,
          industry: formData.industry,
          budget: budgets.find(b => b.value === formData.budget)?.label || formData.budget,
          deadline: deadlines.find(d => d.value === formData.deadline)?.label || formData.deadline,
          goals: formData.goals.join(", "),
          description: formData.description,
          message: briefContent,
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Send to CRM webhook (fire and forget)
        const { sendLeadToCRM } = await import("@/hooks/useCRMWebhook");
        sendLeadToCRM({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || undefined,
          company: formData.companyName,
          source: "fotz.pl/generator-briefu",
          notes: `Typ projektu: ${projectTypes.find(p => p.value === formData.projectType)?.label}\nBranża: ${formData.industry}\nBudżet: ${budgets.find(b => b.value === formData.budget)?.label}\nTermin: ${deadlines.find(d => d.value === formData.deadline)?.label}\nCele: ${formData.goals.join(", ")}\n\nOpis: ${formData.description}`,
        });
        
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting brief:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateBriefHTML = () => {
    return `
BRIEF PROJEKTOWY - ${formData.companyName}
==========================================

TYP PROJEKTU: ${projectTypes.find(p => p.value === formData.projectType)?.label}

INFORMACJE O FIRMIE:
- Nazwa: ${formData.companyName}
- Branża: ${formData.industry}
- Strona WWW: ${formData.currentWebsite || "Brak"}
- Wielkość: ${companySizes.find(s => s.value === formData.companySize)?.label || "Nie podano"}

CELE I OCZEKIWANIA:
- Cele: ${formData.goals.join(", ")}
- Termin: ${deadlines.find(d => d.value === formData.deadline)?.label}
- Budżet: ${budgets.find(b => b.value === formData.budget)?.label}

SZCZEGÓŁY PROJEKTU:
- Opis: ${formData.description}
- Inspiracje: ${formData.inspirations || "Nie podano"}
- Styl: ${styles.find(s => s.value === formData.style)?.label || "Nie podano"}
- Konkurencja: ${formData.competition || "Nie podano"}

DANE KONTAKTOWE:
- Imię i nazwisko: ${formData.fullName}
- Email: ${formData.email}
- Telefon: ${formData.phone || "Nie podano"}
- Preferowany kontakt: ${contactMethods.find(c => c.value === formData.preferredContact)?.label}
    `;
  };

  const handlePrint = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Brief Projektowy - ${formData.companyName}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #333; }
          h1 { color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px; }
          h2 { color: #4f46e5; margin-top: 30px; }
          .section { margin-bottom: 25px; }
          .label { font-weight: bold; color: #666; }
          .value { margin-left: 10px; }
          .goals { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
          .goal { background: #f0f0f0; padding: 4px 12px; border-radius: 4px; font-size: 14px; }
          .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <h1>Brief Projektowy</h1>
        <p><strong>Firma:</strong> ${formData.companyName}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleDateString('pl-PL')}</p>
        
        <h2>1. Typ Projektu</h2>
        <div class="section">
          <p>${projectTypes.find(p => p.value === formData.projectType)?.label}</p>
        </div>
        
        <h2>2. Informacje o Firmie</h2>
        <div class="section">
          <p><span class="label">Nazwa:</span><span class="value">${formData.companyName}</span></p>
          <p><span class="label">Branża:</span><span class="value">${formData.industry}</span></p>
          <p><span class="label">Obecna strona:</span><span class="value">${formData.currentWebsite || 'Brak'}</span></p>
          <p><span class="label">Wielkość firmy:</span><span class="value">${companySizes.find(s => s.value === formData.companySize)?.label || 'Nie podano'}</span></p>
        </div>
        
        <h2>3. Cele i Oczekiwania</h2>
        <div class="section">
          <p><span class="label">Cele projektu:</span></p>
          <div class="goals">${formData.goals.map(g => `<span class="goal">${g}</span>`).join('')}</div>
          <p style="margin-top: 15px;"><span class="label">Termin realizacji:</span><span class="value">${deadlines.find(d => d.value === formData.deadline)?.label}</span></p>
          <p><span class="label">Budżet:</span><span class="value">${budgets.find(b => b.value === formData.budget)?.label}</span></p>
        </div>
        
        <h2>4. Szczegóły Projektu</h2>
        <div class="section">
          <p><span class="label">Opis projektu:</span></p>
          <p>${formData.description}</p>
          ${formData.inspirations ? `<p><span class="label">Inspiracje:</span></p><p>${formData.inspirations}</p>` : ''}
          ${formData.style ? `<p><span class="label">Preferowany styl:</span><span class="value">${styles.find(s => s.value === formData.style)?.label}</span></p>` : ''}
          ${formData.competition ? `<p><span class="label">Konkurencja:</span></p><p>${formData.competition}</p>` : ''}
        </div>
        
        <h2>5. Dane Kontaktowe</h2>
        <div class="section">
          <p><span class="label">Imię i nazwisko:</span><span class="value">${formData.fullName}</span></p>
          <p><span class="label">Email:</span><span class="value">${formData.email}</span></p>
          ${formData.phone ? `<p><span class="label">Telefon:</span><span class="value">${formData.phone}</span></p>` : ''}
          <p><span class="label">Preferowana forma kontaktu:</span><span class="value">${contactMethods.find(c => c.value === formData.preferredContact)?.label}</span></p>
        </div>
        
        <div class="footer">
          <p>Brief wygenerowany przez Fotz Studio | fotz.pl</p>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-heading font-bold mb-2">Jakiego projektu szukasz?</h2>
              <p className="text-muted-foreground">Wybierz typ projektu, który Cię interesuje</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => updateFormData("projectType", type.value)}
                  className={`p-4 rounded-xl border-2 transition-all text-left hover:border-primary ${
                    formData.projectType === type.value
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <type.icon className={`w-8 h-8 mb-3 ${formData.projectType === type.value ? "text-primary" : "text-muted-foreground"}`} />
                  <p className="font-medium text-sm">{type.label}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Building2 className="w-12 h-12 mx-auto text-primary mb-4" />
              <h2 className="text-2xl font-heading font-bold mb-2">Informacje o firmie</h2>
              <p className="text-muted-foreground">Opowiedz nam o swojej działalności</p>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              <div>
                <Label htmlFor="companyName">Nazwa firmy *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => updateFormData("companyName", e.target.value)}
                  placeholder="Np. ABC Sp. z o.o."
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="industry">Branża *</Label>
                <select
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => updateFormData("industry", e.target.value)}
                  className="w-full mt-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Wybierz branżę</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="currentWebsite">Obecna strona WWW (opcjonalnie)</Label>
                <Input
                  id="currentWebsite"
                  value={formData.currentWebsite}
                  onChange={(e) => updateFormData("currentWebsite", e.target.value)}
                  placeholder="https://example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Wielkość firmy</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {companySizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => updateFormData("companySize", size.value)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        formData.companySize === size.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 mx-auto text-primary mb-4" />
              <h2 className="text-2xl font-heading font-bold mb-2">Cele i oczekiwania</h2>
              <p className="text-muted-foreground">Co chcesz osiągnąć dzięki projektowi?</p>
            </div>
            <div className="max-w-xl mx-auto space-y-6">
              <div>
                <Label>Cele projektu (wybierz minimum 1) *</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {goalOptions.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      className={`p-3 rounded-lg border text-sm text-left transition-all flex items-center gap-2 ${
                        formData.goals.includes(goal)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        formData.goals.includes(goal) ? "bg-primary border-primary" : "border-muted-foreground"
                      }`}>
                        {formData.goals.includes(goal) && <Check className="w-3 h-3 text-primary-foreground" />}
                      </div>
                      {goal}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label>Termin realizacji *</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {deadlines.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => updateFormData("deadline", d.value)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        formData.deadline === d.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label>Budżet *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {budgets.map((b) => (
                    <button
                      key={b.value}
                      onClick={() => updateFormData("budget", b.value)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        formData.budget === b.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FileText className="w-12 h-12 mx-auto text-primary mb-4" />
              <h2 className="text-2xl font-heading font-bold mb-2">Szczegóły projektu</h2>
              <p className="text-muted-foreground">Opisz swój projekt i oczekiwania</p>
            </div>
            <div className="max-w-lg mx-auto space-y-4">
              <div>
                <Label htmlFor="description">Opis projektu *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => updateFormData("description", e.target.value)}
                  placeholder="Opisz czego oczekujesz od projektu, jakie funkcje są dla Ciebie ważne..."
                  className="mt-1 min-h-[120px]"
                />
              </div>
              <div>
                <Label htmlFor="inspirations">Linki do inspiracji (opcjonalnie)</Label>
                <Textarea
                  id="inspirations"
                  value={formData.inspirations}
                  onChange={(e) => updateFormData("inspirations", e.target.value)}
                  placeholder="Wklej linki do stron/projektów, które Ci się podobają..."
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Preferowany styl</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {styles.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => updateFormData("style", s.value)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        formData.style === s.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="competition">Konkurencja (opcjonalnie)</Label>
                <Textarea
                  id="competition"
                  value={formData.competition}
                  onChange={(e) => updateFormData("competition", e.target.value)}
                  placeholder="Wskaż swoich głównych konkurentów lub firmy, na których chcesz się wzorować..."
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="w-12 h-12 mx-auto text-primary mb-4" />
              <h2 className="text-2xl font-heading font-bold mb-2">Dane kontaktowe</h2>
              <p className="text-muted-foreground">Jak możemy się z Tobą skontaktować?</p>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              <div>
                <Label htmlFor="fullName">Imię i nazwisko *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                  placeholder="Jan Kowalski"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    updateFormData("email", e.target.value);
                    setEmailError("");
                  }}
                  placeholder="jan@example.com"
                  className={`mt-1 ${emailError ? "border-destructive" : ""}`}
                />
                {emailError && <p className="text-sm text-destructive mt-1">{emailError}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="+48 123 456 789"
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Preferowana forma kontaktu *</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {contactMethods.map((method) => (
                    <button
                      key={method.value}
                      onClick={() => updateFormData("preferredContact", method.value)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        formData.preferredContact === method.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderSummary = () => (
    <div className="space-y-8" ref={printRef}>
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-heading font-bold mb-2">Brief został wysłany!</h2>
          <p className="text-muted-foreground mb-8">
            Skontaktujemy się z Tobą w ciągu 24 godzin roboczych.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handlePrint} variant="outline">
              <FileDown className="w-4 h-4 mr-2" />
              Pobierz PDF
            </Button>
            <Link to="/kontakt">
              <Button variant="hero">
                Umów konsultację
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold mb-2">Podsumowanie briefu</h2>
            <p className="text-muted-foreground">Sprawdź poprawność danych przed wysłaniem</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Project Type */}
            <div className="p-4 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Typ projektu
              </h3>
              <p>{projectTypes.find(p => p.value === formData.projectType)?.label}</p>
            </div>

            {/* Company Info */}
            <div className="p-4 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                Informacje o firmie
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-muted-foreground">Nazwa:</span> {formData.companyName}</div>
                <div><span className="text-muted-foreground">Branża:</span> {formData.industry}</div>
                {formData.currentWebsite && (
                  <div className="col-span-2"><span className="text-muted-foreground">Strona:</span> {formData.currentWebsite}</div>
                )}
                {formData.companySize && (
                  <div className="col-span-2"><span className="text-muted-foreground">Wielkość:</span> {companySizes.find(s => s.value === formData.companySize)?.label}</div>
                )}
              </div>
            </div>

            {/* Goals */}
            <div className="p-4 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Cele i oczekiwania
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.goals.map((goal) => (
                  <span key={goal} className="px-2 py-1 bg-primary/10 rounded-full text-sm">{goal}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-muted-foreground">Termin:</span> {deadlines.find(d => d.value === formData.deadline)?.label}</div>
                <div><span className="text-muted-foreground">Budżet:</span> {budgets.find(b => b.value === formData.budget)?.label}</div>
              </div>
            </div>

            {/* Details */}
            <div className="p-4 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Szczegóły projektu
              </h3>
              <p className="text-sm mb-2">{formData.description}</p>
              {formData.style && (
                <p className="text-sm"><span className="text-muted-foreground">Styl:</span> {styles.find(s => s.value === formData.style)?.label}</p>
              )}
            </div>

            {/* Contact */}
            <div className="p-4 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Dane kontaktowe
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-muted-foreground">Imię:</span> {formData.fullName}</div>
                <div><span className="text-muted-foreground">Email:</span> {formData.email}</div>
                {formData.phone && <div><span className="text-muted-foreground">Tel:</span> {formData.phone}</div>}
                <div><span className="text-muted-foreground">Kontakt:</span> {contactMethods.find(c => c.value === formData.preferredContact)?.label}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button onClick={handlePrint} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Pobierz PDF
            </Button>
            <Button onClick={handleSubmit} variant="hero" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Mail className="w-4 h-4 mr-2" />
              )}
              Wyślij brief
            </Button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <Layout>
      <SEOHead
        title="Generator Briefu Projektowego | Fotz Studio"
        description="Stwórz profesjonalny brief projektowy w 5 minut. Wieloetapowy formularz pomoże Ci określić cele, budżet i oczekiwania dla Twojego projektu marketingowego."
        canonical="https://fotz.pl/generator-briefu"
        keywords="generator briefu, brief projektowy, brief marketingowy, brief online"
      />

      <section className="py-16 md:py-24 min-h-screen">
        <div className="container-wide section-padding">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium mb-2 block">Narzędzie online</span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Generator Briefu Projektowego
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Wypełnij formularz, a my przygotujemy dla Ciebie indywidualną ofertę. Brief możesz pobrać jako PDF lub wysłać na email.
            </p>
            <p className="text-sm text-muted-foreground/70 max-w-3xl mx-auto">
              Nasz kreator briefu projektowego prowadzi Cię krok po kroku: określ typ projektu (strona WWW, e-commerce, kampanie reklamowe, 
              social media, branding, foto/video), opisz swoją firmę i cele biznesowe, wskaż budżet i termin — a otrzymasz gotowy dokument 
              briefu do pobrania w formacie PDF. Możesz go też przesłać bezpośrednio do naszego zespołu, abyśmy przygotowali spersonalizowaną wycenę.
            </p>
          </div>

          {/* Progress Bar */}
          {!showSummary && (
            <div className="max-w-xl mx-auto mb-12">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Krok {currentStep + 1} z {totalSteps}</span>
                <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Form Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={showSummary ? "summary" : currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {showSummary ? renderSummary() : renderStep()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {!showSummary && !isSubmitted && (
              <div className="flex justify-between mt-12 max-w-xl mx-auto">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Wstecz
                </Button>
                <Button
                  variant="hero"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  {currentStep === totalSteps - 1 ? "Zobacz podsumowanie" : "Dalej"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {showSummary && !isSubmitted && (
              <div className="flex justify-center mt-8">
                <Button variant="ghost" onClick={handleBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Wróć do edycji
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
