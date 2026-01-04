import { useState } from "react";
import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Loader2, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Globe,
  FileText,
  Heading1,
  Image,
  Link2,
  Share2,
  ArrowRight,
  RotateCcw,
  Mail,
  Download
} from "lucide-react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface SEOResult {
  url: string;
  score: number;
  categories: {
    name: string;
    score: number;
    maxScore: number;
    icon: React.ElementType;
    items: {
      label: string;
      status: "good" | "warning" | "error";
      value: string;
      recommendation?: string;
    }[];
  }[];
  recommendations: string[];
}

const urlSchema = z.string().url("Podaj prawidłowy adres URL (np. https://example.com)");

export default function AudytSEO() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<SEOResult | null>(null);
  const [error, setError] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleAnalyze = async () => {
    setError("");
    
    // Validate URL
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl = "https://" + formattedUrl;
    }

    const validation = urlSchema.safeParse(formattedUrl);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      return;
    }

    setIsAnalyzing(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("analyze-seo", {
        body: { url: formattedUrl },
      });

      if (fnError) throw fnError;
      
      if (data) {
        setResult(data);
      }
    } catch (err) {
      console.error("SEO analysis error:", err);
      setError("Nie udało się przeanalizować strony. Sprawdź czy adres jest poprawny i strona jest dostępna.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setUrl("");
    setResult(null);
    setError("");
    setShowEmailForm(false);
    setEmailSent(false);
  };

  const handleSendReport = async () => {
    if (!email || !result) return;
    
    setIsSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Raport SEO - ${result.url}`,
          from_name: "Fotz Studio - Audyt SEO",
          email: email,
          url: result.url,
          score: result.score,
          message: `Wynik audytu SEO dla ${result.url}: ${result.score}/100. Szczegółowy raport dostępny na fotz.pl/audyt-seo`,
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        setEmailSent(true);
      }
    } catch {
      setError("Błąd wysyłania raportu");
    } finally {
      setIsSending(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getStatusIcon = (status: "good" | "warning" | "error") => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Darmowy Audyt SEO Online | Sprawdź swoją stronę | Fotz Studio</title>
        <meta
          name="description"
          content="Sprawdź optymalizację SEO swojej strony za darmo. Automatyczny audyt analizuje title, meta description, nagłówki, Open Graph i więcej. Otrzymaj raport z rekomendacjami."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fotz.pl/audyt-seo" />
      </Helmet>

      <section className="py-16 md:py-24 min-h-screen">
        <div className="container-wide section-padding">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium mb-2 block">Darmowe narzędzie</span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Audyt SEO Online
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wpisz adres swojej strony, a nasz system automatycznie przeanalizuje kluczowe elementy SEO i wygeneruje raport z rekomendacjami.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-xl mx-auto"
              >
                {/* Input Form */}
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading font-semibold">Adres strony do analizy</h2>
                      <p className="text-sm text-muted-foreground">Podaj URL strony, którą chcesz sprawdzić</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Input
                        type="url"
                        value={url}
                        onChange={(e) => {
                          setUrl(e.target.value);
                          setError("");
                        }}
                        placeholder="https://twoja-strona.pl"
                        className={`h-12 text-base ${error ? "border-red-500" : ""}`}
                        onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                      />
                      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                    </div>

                    <Button
                      onClick={handleAnalyze}
                      variant="hero"
                      className="w-full h-12"
                      disabled={!url.trim() || isAnalyzing}
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Analizuję stronę...
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5 mr-2" />
                          Rozpocznij audyt
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Info */}
                  <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Co sprawdzamy:</strong> Title tag, Meta description, Nagłówki H1-H6, 
                      Open Graph, Canonical URL, Alt teksty obrazów i więcej.
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { icon: FileText, label: "Szczegółowy raport" },
                    { icon: Search, label: "Rekomendacje SEO" },
                    { icon: Mail, label: "Wyślij na email" },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-4">
                      <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto"
              >
                {/* Score Header */}
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Score Circle */}
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="10"
                          className="text-secondary"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          strokeWidth="10"
                          strokeLinecap="round"
                          className={getScoreBg(result.score)}
                          style={{
                            strokeDasharray: `${result.score * 2.83} 283`,
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-3xl font-bold ${getScoreColor(result.score)}`}>
                          {result.score}
                        </span>
                      </div>
                    </div>

                    <div className="text-center md:text-left flex-1">
                      <h2 className="text-2xl font-heading font-bold mb-2">Wynik audytu SEO</h2>
                      <p className="text-muted-foreground mb-2 break-all">{result.url}</p>
                      <p className={`font-medium ${getScoreColor(result.score)}`}>
                        {result.score >= 80 && "Bardzo dobry wynik! "}
                        {result.score >= 50 && result.score < 80 && "Wynik do poprawy. "}
                        {result.score < 50 && "Wynik wymaga uwagi. "}
                        Jest kilka elementów, które możesz poprawić.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" onClick={handleReset}>
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Nowy audyt
                      </Button>
                      <Button variant="ghost" onClick={() => setShowEmailForm(true)}>
                        <Mail className="w-4 h-4 mr-2" />
                        Wyślij raport
                      </Button>
                    </div>
                  </div>

                  {/* Email Form */}
                  <AnimatePresence>
                    {showEmailForm && !emailSent && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-6 pt-6 border-t border-border overflow-hidden"
                      >
                        <div className="flex gap-2">
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Twój adres email"
                            className="flex-1"
                          />
                          <Button onClick={handleSendReport} disabled={isSending || !email}>
                            {isSending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Wyślij"}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                    {emailSent && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 pt-6 border-t border-border"
                      >
                        <div className="flex items-center gap-2 text-green-500">
                          <CheckCircle className="w-5 h-5" />
                          <span>Raport został wysłany na podany adres email</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Categories */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {result.categories.map((category) => (
                    <div key={category.name} className="bg-card rounded-xl border border-border p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <category.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-heading font-semibold">{category.name}</h3>
                        </div>
                        <span className={`font-bold ${getScoreColor((category.score / category.maxScore) * 100)}`}>
                          {category.score}/{category.maxScore}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            {getStatusIcon(item.status)}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{item.label}</p>
                              <p className="text-xs text-muted-foreground truncate">{item.value}</p>
                              {item.recommendation && (
                                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                                  💡 {item.recommendation}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                {result.recommendations.length > 0 && (
                  <div className="bg-card rounded-xl border border-border p-6 mb-8">
                    <h3 className="font-heading font-semibold text-lg mb-4">
                      Główne rekomendacje
                    </h3>
                    <ul className="space-y-3">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-muted-foreground">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-6 md:p-8 text-center">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Chcesz poprawić te wyniki?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Nasi specjaliści SEO mogą pomóc Ci zoptymalizować stronę i poprawić pozycje w Google. Umów bezpłatną konsultację.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/kontakt">
                      <Button variant="hero" size="lg">
                        Umów konsultację
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/pozycjonowanie">
                      <Button variant="outline" size="lg">
                        Zobacz ofertę SEO
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
}
