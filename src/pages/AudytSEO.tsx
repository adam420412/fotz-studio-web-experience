import { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
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

  const handleDownloadPDF = () => {
    if (!result) return;
    
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Raport SEO - ${result.url}</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #1a1a1a; line-height: 1.6; }
          .header { text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #e5e5e5; }
          .logo { font-size: 24px; font-weight: bold; color: #6366f1; margin-bottom: 8px; }
          .header h1 { font-size: 28px; margin-bottom: 8px; }
          .header p { color: #666; font-size: 14px; }
          .score-section { text-align: center; margin: 40px 0; }
          .score-circle { display: inline-flex; align-items: center; justify-content: center; width: 120px; height: 120px; border-radius: 50%; border: 8px solid ${result.score >= 80 ? '#22c55e' : result.score >= 50 ? '#eab308' : '#ef4444'}; font-size: 36px; font-weight: bold; color: ${result.score >= 80 ? '#22c55e' : result.score >= 50 ? '#eab308' : '#ef4444'}; }
          .score-label { margin-top: 12px; font-size: 18px; color: #666; }
          .category { margin-bottom: 30px; page-break-inside: avoid; }
          .category-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #f5f5f5; border-radius: 8px; margin-bottom: 16px; }
          .category-title { font-size: 16px; font-weight: 600; }
          .category-score { font-weight: bold; color: #6366f1; }
          .item { display: flex; align-items: flex-start; gap: 12px; padding: 8px 0; border-bottom: 1px solid #eee; }
          .item:last-child { border-bottom: none; }
          .status { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 2px; }
          .status.good { background: #22c55e; }
          .status.warning { background: #eab308; }
          .status.error { background: #ef4444; }
          .item-content { flex: 1; }
          .item-label { font-weight: 500; font-size: 14px; }
          .item-value { color: #666; font-size: 12px; margin-top: 2px; word-break: break-all; }
          .item-recommendation { color: #ca8a04; font-size: 12px; margin-top: 4px; }
          .recommendations { margin-top: 40px; padding: 20px; background: #fef3c7; border-radius: 8px; }
          .recommendations h2 { font-size: 18px; margin-bottom: 16px; color: #92400e; }
          .recommendations ol { padding-left: 20px; }
          .recommendations li { margin-bottom: 8px; color: #78350f; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e5e5; text-align: center; color: #666; font-size: 12px; }
          .cta { background: #6366f1; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-top: 30px; }
          .cta h3 { margin-bottom: 8px; }
          .cta p { opacity: 0.9; }
          @media print { body { padding: 20px; } .category { page-break-inside: avoid; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">FOTZ STUDIO</div>
          <h1>Raport Audytu SEO</h1>
          <p>Data: ${new Date().toLocaleDateString('pl-PL')} | URL: ${result.url}</p>
        </div>
        
        <div class="score-section">
          <div class="score-circle">${result.score}</div>
          <div class="score-label">Wynik ogólny / 100</div>
        </div>
        
        ${result.categories.map(cat => `
          <div class="category">
            <div class="category-header">
              <span class="category-title">${cat.name}</span>
              <span class="category-score">${cat.score}/${cat.maxScore}</span>
            </div>
            ${cat.items.map(item => `
              <div class="item">
                <div class="status ${item.status}"></div>
                <div class="item-content">
                  <div class="item-label">${item.label}</div>
                  <div class="item-value">${item.value}</div>
                  ${item.recommendation ? `<div class="item-recommendation">💡 ${item.recommendation}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
        
        ${result.recommendations.length > 0 ? `
          <div class="recommendations">
            <h2>Główne rekomendacje</h2>
            <ol>
              ${result.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ol>
          </div>
        ` : ''}
        
        <div class="cta">
          <h3>Chcesz poprawić te wyniki?</h3>
          <p>Skontaktuj się z nami: fotz.pl/kontakt</p>
        </div>
        
        <div class="footer">
          <p>Raport wygenerowany przez Fotz Studio | fotz.pl | kontakt@fotz.pl</p>
        </div>
      </body>
      </html>
    `;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
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
      <SEOHead
        title="Darmowy Audyt SEO Online — Audyt Strony Internetowej i Analiza SEO | Fotz Studio"
        description="Darmowy audyt SEO online — sprawdź swoją stronę, wykryj błędy i dowiedz się jak poprawić widoczność w Google. Kompleksowy audyt SEO strony internetowej. Fotz Studio."
        canonical="https://fotz.pl/seo/audyt"
        keywords="audyt seo, darmowy audyt seo, analiza seo, optymalizacja seo, sprawdź seo strony"
      />

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
                      <Button variant="hero" onClick={handleDownloadPDF}>
                        <Download className="w-4 h-4 mr-2" />
                        Pobierz PDF
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
                    <Link to="/seo/pozycjonowanie">
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

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Darmowy audyt SEO — audyt SEO strony internetowej online</h2>
            <p className="text-muted-foreground mb-4">Darmowy audyt SEO online to pierwszy krok do poprawy widoczności Twojej strony w Google. Audyt SEO strony internetowej analizuje elementy strony pod kątem technicznym, treściowym i linkowym, wskazując konkretne problemy do naprawy. Dzięki audytowi SEO wiesz, dlaczego Twoja strona nie wyświetla się wysoko w wynikach wyszukiwania i co należy zmienić.</p>
            <p className="text-muted-foreground mb-6">Warto przeprowadzić audyt SEO regularnie — przynajmniej raz na kwartał. Algorytmy Google ciągle się zmieniają, a Twoja konkurencja non-stop optymalizuje swoje strony. Analiza SEO strony pozwala wyprzedzić konkurencję i utrzymać wysokie pozycje w wyszukiwarce Google.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Audyt SEO strony — co zawiera kompleksowy audyt SEO?</h2>
            <p className="text-muted-foreground mb-4">Kompleksowy audyt SEO strony internetowej obejmuje: analizę techniczną (szybkość ładowania strony, indeksowanie, błędy 404, przekierowania), analizę treści (unikalne opisy, optymalizacja słów kluczowych, nagłówki H1-H6), analizę linków (profil backlinków, linki wewnętrzne) oraz analizę Core Web Vitals.</p>
            <p className="text-muted-foreground mb-6">Zlecenie audytu SEO u specjalistów daje pełen obraz stanu witryny. Wykonanie audytu trwa zwykle 3–7 dni roboczych dla typowej strony firmowej. Przeprowadzenia audytu SEO nie warto odkładać — każdy dzień z błędami na stronie to utracony ruch organiczny i potencjalni klienci.</p>

            <h3 className="text-2xl font-heading font-bold mb-4">Audyt strony — jak sprawdzić i przeprowadzić audyt SEO online?</h3>
            <p className="text-muted-foreground mb-4">Jak zrobić audyt SEO samodzielnie? Możesz skorzystać z narzędzi takich jak Google Search Console, Ahrefs, Screaming Frog lub Semrush. Audyt SEO online pozwala na szybką analizę — jednak prawdziwa wartość kryje się w interpretacji wyników i planie naprawczym.</p>
            <p className="text-muted-foreground">Warto przeprowadzić audyt SEO zarówno dla nowych stron (przed publikacją), jak i istniejących, które nie generują oczekiwanego ruchu. Analizę SEO przeprowadzamy dla firm z całej Polski. Dzięki audytowi SEO możliwa jest szybka identyfikacja i naprawa krytycznych błędów, które blokują widoczność w wyszukiwarce. Seo online to inwestycja, która się zwraca.</p>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
