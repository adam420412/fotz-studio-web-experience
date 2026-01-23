import { useState, useEffect, useCallback } from "react";
import { Layout } from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { SEOHead } from "@/components/seo/SEOHead";
import { 
  BarChart3, 
  Gauge, 
  RefreshCw, 
  ArrowLeft, 
  Loader2, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  Zap,
  Eye,
  MousePointer,
  Move,
  Clock,
  TrendingUp,
  Calendar,
  Users,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Link, Navigate } from "react-router-dom";

interface WebVitalsMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fcp: number | null;
  timestamp: Date;
}

interface PageSpeedResult {
  score: number;
  metrics: {
    fcp: number;
    lcp: number;
    tbt: number;
    cls: number;
    si: number;
    tti: number;
  };
  audits: {
    name: string;
    score: number;
    displayValue?: string;
    description: string;
  }[];
  timestamp: string;
  url: string;
  strategy: 'mobile' | 'desktop';
}

interface MetricThresholds {
  good: number;
  needsImprovement: number;
}

const thresholds: Record<string, MetricThresholds> = {
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 },
  fcp: { good: 1800, needsImprovement: 3000 },
};

const metricInfo = {
  lcp: { name: "LCP", fullName: "Largest Contentful Paint", unit: "ms", icon: Eye, description: "Czas renderowania największego elementu" },
  fid: { name: "FID", fullName: "First Input Delay", unit: "ms", icon: MousePointer, description: "Opóźnienie pierwszej interakcji" },
  cls: { name: "CLS", fullName: "Cumulative Layout Shift", unit: "", icon: Move, description: "Skumulowane przesunięcie układu" },
  ttfb: { name: "TTFB", fullName: "Time to First Byte", unit: "ms", icon: Clock, description: "Czas do pierwszego bajtu" },
  fcp: { name: "FCP", fullName: "First Contentful Paint", unit: "ms", icon: Zap, description: "Czas pierwszego renderowania" },
};

function getMetricStatus(metric: keyof typeof thresholds, value: number | null): 'good' | 'needs-improvement' | 'poor' | 'pending' {
  if (value === null) return 'pending';
  const threshold = thresholds[metric];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

function getStatusColor(status: string) {
  switch (status) {
    case 'good': return 'text-green-500 bg-green-500/10 border-green-500/20';
    case 'needs-improvement': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
    case 'poor': return 'text-red-500 bg-red-500/10 border-red-500/20';
    default: return 'text-muted-foreground bg-muted/10 border-muted/20';
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'good': return CheckCircle2;
    case 'needs-improvement': return AlertTriangle;
    case 'poor': return XCircle;
    default: return Clock;
  }
}

function formatMetricValue(metric: string, value: number | null): string {
  if (value === null) return 'Oczekuje...';
  if (metric === 'cls') return value.toFixed(3);
  return `${Math.round(value)}ms`;
}

function calculateScore(metrics: WebVitalsMetrics): number {
  let score = 0;
  let count = 0;
  
  Object.keys(thresholds).forEach((key) => {
    const value = metrics[key as keyof WebVitalsMetrics];
    if (typeof value === 'number') {
      const status = getMetricStatus(key as keyof typeof thresholds, value);
      if (status === 'good') score += 100;
      else if (status === 'needs-improvement') score += 50;
      count++;
    }
  });
  
  return count > 0 ? Math.round(score / count) : 0;
}

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcp: null,
    timestamp: new Date(),
  });
  const [metricsHistory, setMetricsHistory] = useState<WebVitalsMetrics[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isCollecting, setIsCollecting] = useState(false);
  
  // PageSpeed Insights state
  const [pageSpeedUrl, setPageSpeedUrl] = useState('https://fotz.pl');
  const [pageSpeedStrategy, setPageSpeedStrategy] = useState<'mobile' | 'desktop'>('mobile');
  const [pageSpeedResult, setPageSpeedResult] = useState<PageSpeedResult | null>(null);
  const [isTestingPageSpeed, setIsTestingPageSpeed] = useState(false);
  const [pageSpeedHistory, setPageSpeedHistory] = useState<PageSpeedResult[]>([]);
  
  const { toast } = useToast();

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      setIsAdmin(false);
      setIsLoading(false);
      return;
    }

    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roles) {
      setIsAdmin(false);
      setIsLoading(false);
      return;
    }

    setIsAdmin(true);
    setIsLoading(false);
    collectMetrics();
  };

  const collectMetrics = useCallback(() => {
    setIsCollecting(true);
    
    let clsValue = 0;
    const newMetrics: WebVitalsMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      fcp: null,
      timestamp: new Date(),
    };

    // Get TTFB immediately
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navEntry) {
      newMetrics.ttfb = navEntry.responseStart - navEntry.requestStart;
    }

    try {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
        newMetrics.lcp = lastEntry.startTime;
        updateMetrics();
      });

      // FID Observer
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0] as PerformanceEventTiming;
        if (firstEntry.processingStart) {
          newMetrics.fid = firstEntry.processingStart - firstEntry.startTime;
          updateMetrics();
        }
      });

      // CLS Observer
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as (PerformanceEntry & { hadRecentInput: boolean; value: number })[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            newMetrics.cls = clsValue;
            updateMetrics();
          }
        }
      });

      // FCP Observer
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(e => e.name === 'first-contentful-paint');
        if (fcpEntry) {
          newMetrics.fcp = fcpEntry.startTime;
          updateMetrics();
        }
      });

      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      fidObserver.observe({ type: 'first-input', buffered: true });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      fcpObserver.observe({ type: 'paint', buffered: true });

      // Cleanup after 10 seconds
      setTimeout(() => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        setIsCollecting(false);
      }, 10000);

    } catch (e) {
      console.warn('Performance observer not supported:', e);
      setIsCollecting(false);
    }

    const updateMetrics = () => {
      setMetrics({ ...newMetrics, timestamp: new Date() });
      setMetricsHistory(prev => [...prev.slice(-9), { ...newMetrics, timestamp: new Date() }]);
    };

    // Initial update
    updateMetrics();
  }, []);

  const runPageSpeedTest = async () => {
    if (!pageSpeedUrl) {
      toast({
        title: "Brak URL",
        description: "Wprowadź adres URL do przetestowania",
        variant: "destructive",
      });
      return;
    }

    setIsTestingPageSpeed(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('pagespeed-test', {
        body: { url: pageSpeedUrl, strategy: pageSpeedStrategy }
      });

      if (error) throw error;

      setPageSpeedResult(data);
      setPageSpeedHistory(prev => [...prev.slice(-4), data]);
      
      toast({
        title: "Test zakończony",
        description: `Wynik: ${data.score}/100 (${pageSpeedStrategy})`,
      });
    } catch (error) {
      console.error('PageSpeed test error:', error);
      toast({
        title: "Błąd testu",
        description: "Nie udało się wykonać testu PageSpeed. Sprawdź URL i spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsTestingPageSpeed(false);
    }
  };

  if (isAdmin === false) {
    return <Navigate to="/" replace />;
  }

  const overallScore = calculateScore(metrics);

  return (
    <>
      <SEOHead
        title="Dashboard Wydajności | Panel Admina | Fotz Studio"
        description="Panel administracyjny do monitorowania Core Web Vitals i wydajności strony w czasie rzeczywistym."
        canonical="https://fotz.pl/admin/dashboard"
        noIndex={true}
      />
      <Layout>
        <section className="pt-24 sm:pt-32 pb-12 section-padding bg-background min-h-screen">
        <div className="container-wide">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="w-4 h-4" />
                Powrót do strony
              </Link>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">
                Dashboard <span className="text-gradient">Wydajności</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                Monitoruj Core Web Vitals i wydajność strony w czasie rzeczywistym
              </p>
            </div>
            <Button onClick={collectMetrics} variant="outline" disabled={isCollecting}>
              <RefreshCw className={cn("w-4 h-4 mr-2", isCollecting && "animate-spin")} />
              {isCollecting ? "Zbieranie..." : "Odśwież metryki"}
            </Button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <Tabs defaultValue="pagespeed" className="space-y-6">
              <TabsList className="grid w-full max-w-xl grid-cols-4">
                <TabsTrigger value="pagespeed" className="gap-2">
                  <Globe className="w-4 h-4" />
                  PageSpeed
                </TabsTrigger>
                <TabsTrigger value="vitals" className="gap-2">
                  <Gauge className="w-4 h-4" />
                  Web Vitals
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Shield className="w-4 h-4" />
                  Bezpieczeństwo
                </TabsTrigger>
                <TabsTrigger value="stats" className="gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Statystyki
                </TabsTrigger>
              </TabsList>

              {/* PageSpeed Insights Tab */}
              <TabsContent value="pagespeed" className="space-y-6">
                {/* Test Form */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      Google PageSpeed Insights
                    </CardTitle>
                    <CardDescription>
                      Przetestuj wydajność dowolnej strony za pomocą Google PageSpeed API
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <Input
                          type="url"
                          placeholder="https://fotz.pl"
                          value={pageSpeedUrl}
                          onChange={(e) => setPageSpeedUrl(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant={pageSpeedStrategy === 'mobile' ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => setPageSpeedStrategy('mobile')}
                          title="Test mobilny"
                        >
                          <Smartphone className="w-4 h-4" />
                        </Button>
                        <Button
                          variant={pageSpeedStrategy === 'desktop' ? 'default' : 'outline'}
                          size="icon"
                          onClick={() => setPageSpeedStrategy('desktop')}
                          title="Test desktopowy"
                        >
                          <Monitor className="w-4 h-4" />
                        </Button>
                        <Button onClick={runPageSpeedTest} disabled={isTestingPageSpeed}>
                          {isTestingPageSpeed ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Testowanie...
                            </>
                          ) : (
                            <>
                              <Zap className="w-4 h-4 mr-2" />
                              Uruchom test
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Results */}
                {pageSpeedResult && (
                  <>
                    {/* Score Card */}
                    <Card className="border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold",
                              pageSpeedResult.score >= 90 ? "bg-green-500/20 text-green-500" :
                              pageSpeedResult.score >= 50 ? "bg-yellow-500/20 text-yellow-500" :
                              "bg-red-500/20 text-red-500"
                            )}>
                              {pageSpeedResult.score}
                            </div>
                            <div>
                              <p className="text-xl font-bold">Wynik PageSpeed</p>
                              <p className="text-sm text-muted-foreground flex items-center gap-2">
                                {pageSpeedResult.strategy === 'mobile' ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                                {pageSpeedResult.strategy === 'mobile' ? 'Test mobilny' : 'Test desktopowy'}
                              </p>
                            </div>
                          </div>
                          <a 
                            href={`https://pagespeed.web.dev/report?url=${encodeURIComponent(pageSpeedResult.url)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            Pełny raport <ExternalLink className="w-4 h-4" />
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Progress 
                          value={pageSpeedResult.score} 
                          className={cn(
                            "h-3",
                            pageSpeedResult.score >= 90 ? "[&>div]:bg-green-500" :
                            pageSpeedResult.score >= 50 ? "[&>div]:bg-yellow-500" :
                            "[&>div]:bg-red-500"
                          )}
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Testowano: {new Date(pageSpeedResult.timestamp).toLocaleString('pl-PL')}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Metrics Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {pageSpeedResult.audits.map((audit, index) => {
                        const status = audit.score >= 0.9 ? 'good' : audit.score >= 0.5 ? 'needs-improvement' : 'poor';
                        const StatusIcon = getStatusIcon(status);
                        
                        return (
                          <Card key={index} className="border-border">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">{audit.name}</CardTitle>
                                <Badge className={cn("gap-1", getStatusColor(status))}>
                                  <StatusIcon className="w-3 h-3" />
                                  {Math.round(audit.score * 100)}%
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-2xl font-bold mb-1">{audit.displayValue || 'N/A'}</p>
                              <p className="text-xs text-muted-foreground">{audit.description}</p>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    {/* Raw Metrics */}
                    <Card className="border-border">
                      <CardHeader>
                        <CardTitle>Szczegółowe metryki (ms)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                          {[
                            { label: 'FCP', value: pageSpeedResult.metrics.fcp },
                            { label: 'LCP', value: pageSpeedResult.metrics.lcp },
                            { label: 'TBT', value: pageSpeedResult.metrics.tbt },
                            { label: 'CLS', value: pageSpeedResult.metrics.cls },
                            { label: 'SI', value: pageSpeedResult.metrics.si },
                            { label: 'TTI', value: pageSpeedResult.metrics.tti },
                          ].map((metric) => (
                            <div key={metric.label} className="text-center p-3 rounded-lg bg-muted/30">
                              <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                              <p className="text-lg font-bold">
                                {metric.label === 'CLS' ? metric.value.toFixed(3) : `${Math.round(metric.value)}ms`}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {/* History */}
                {pageSpeedHistory.length > 0 && (
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle>Historia testów</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pageSpeedHistory.slice().reverse().map((result, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
                                result.score >= 90 ? "bg-green-500/20 text-green-500" :
                                result.score >= 50 ? "bg-yellow-500/20 text-yellow-500" :
                                "bg-red-500/20 text-red-500"
                              )}>
                                {result.score}
                              </div>
                              <div>
                                <p className="text-sm font-medium truncate max-w-[200px]">{result.url}</p>
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                  {result.strategy === 'mobile' ? <Smartphone className="w-3 h-3" /> : <Monitor className="w-3 h-3" />}
                                  {new Date(result.timestamp).toLocaleTimeString('pl-PL')}
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline">
                              LCP: {Math.round(result.metrics.lcp)}ms
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {!pageSpeedResult && !isTestingPageSpeed && (
                  <Card className="border-dashed border-2 border-muted">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <Globe className="w-12 h-12 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium mb-2">Brak wyników</p>
                      <p className="text-sm text-muted-foreground text-center max-w-md">
                        Wprowadź adres URL i uruchom test, aby zobaczyć szczegółowe metryki wydajności z Google PageSpeed Insights.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Core Web Vitals Tab */}
              <TabsContent value="vitals" className="space-y-6">
                {/* Overall Score */}
                <Card className="border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        overallScore >= 80 ? "bg-green-500/20 text-green-500" :
                        overallScore >= 50 ? "bg-yellow-500/20 text-yellow-500" :
                        "bg-red-500/20 text-red-500"
                      )}>
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-4xl font-bold">{overallScore}</span>
                        <span className="text-muted-foreground text-lg">/100</span>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Ogólna ocena wydajności strony na podstawie Core Web Vitals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress 
                      value={overallScore} 
                      className={cn(
                        "h-3",
                        overallScore >= 80 ? "[&>div]:bg-green-500" :
                        overallScore >= 50 ? "[&>div]:bg-yellow-500" :
                        "[&>div]:bg-red-500"
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(Object.keys(metricInfo) as Array<keyof typeof metricInfo>).map((key) => {
                    const info = metricInfo[key];
                    const value = metrics[key as keyof WebVitalsMetrics];
                    const numValue = typeof value === 'number' ? value : null;
                    const status = getMetricStatus(key as keyof typeof thresholds, numValue);
                    const StatusIcon = getStatusIcon(status);
                    const MetricIcon = info.icon;
                    const threshold = thresholds[key];

                    return (
                      <Card key={key} className="border-border hover:border-primary/30 transition-colors">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <MetricIcon className="w-5 h-5 text-primary" />
                              <CardTitle className="text-lg">{info.name}</CardTitle>
                            </div>
                            <Badge className={cn("gap-1", getStatusColor(status))}>
                              <StatusIcon className="w-3 h-3" />
                              {status === 'good' ? 'Dobry' : 
                               status === 'needs-improvement' ? 'Do poprawy' : 
                               status === 'poor' ? 'Słaby' : 'Oczekuje'}
                            </Badge>
                          </div>
                          <CardDescription className="text-xs">
                            {info.fullName}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold mb-2">
                            {formatMetricValue(key, numValue)}
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">
                            {info.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Dobry: ≤{threshold.good}{info.unit || ''}</span>
                            <span>Słaby: &gt;{threshold.needsImprovement}{info.unit || ''}</span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Optimization Tips */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Zaimplementowane optymalizacje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Lazy Loading obrazów", desc: "LazyImage z intersection observer", status: "active" },
                        { title: "Statyczne postery wideo", desc: "Preload posterów dla lepszego LCP", status: "active" },
                        { title: "Dynamic imports", desc: "Suspense/lazy dla ModelViewer3D", status: "active" },
                        { title: "Uproszczone animacje", desc: "Zoptymalizowane przejścia CSS", status: "active" },
                        { title: "Preloader jednorazowy", desc: "SessionStorage z 30min timeout", status: "active" },
                        { title: "Natychmiastowa nawigacja", desc: "Wyłączony smooth scroll", status: "active" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Audyt bezpieczeństwa RLS
                    </CardTitle>
                    <CardDescription>
                      Status polityk Row Level Security w bazie danych
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { table: "bookings", policies: 4, status: "secure", note: "Public INSERT z WITH CHECK true - akceptowalne dla formularzy" },
                      { table: "profiles", policies: 3, status: "secure", note: "Użytkownicy widzą/edytują tylko swój profil" },
                      { table: "subscriptions", policies: 2, status: "secure", note: "Admin ALL + user SELECT own" },
                      { table: "academy_materials", policies: 2, status: "secure", note: "Admin ALL + public SELECT published" },
                      { table: "user_roles", policies: 1, status: "secure", note: "Tylko SELECT own - brak INSERT/UPDATE/DELETE" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center",
                            item.status === 'secure' ? "bg-green-500/10" : "bg-yellow-500/10"
                          )}>
                            {item.status === 'secure' ? 
                              <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
                              <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            }
                          </div>
                          <div>
                            <p className="font-medium">{item.table}</p>
                            <p className="text-xs text-muted-foreground">{item.note}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="gap-1">
                          {item.policies} {item.policies === 1 ? 'polityka' : 'polityki'}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-yellow-500/30 bg-yellow-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-500">
                      <AlertTriangle className="w-5 h-5" />
                      Uwaga: Permisywna polityka INSERT
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Tabela <code className="bg-muted px-1 rounded">bookings</code> ma politykę INSERT z <code className="bg-muted px-1 rounded">WITH CHECK (true)</code>.
                      Jest to akceptowalne dla publicznego formularza rezerwacji, ponieważ:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Formularz jest dostępny dla wszystkich odwiedzających</li>
                      <li>Dane są walidowane po stronie frontendu</li>
                      <li>Administratorzy zarządzają rezerwacjami przez panel</li>
                      <li>Brak wrażliwych danych w publicznym INSERT</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Stats Tab */}
              <TabsContent value="stats" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Ostatni pomiar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold">
                          {metrics.timestamp.toLocaleTimeString('pl-PL')}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Pomiarów w sesji</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold">{metricsHistory.length}</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Status zbierania</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        {isCollecting ? (
                          <>
                            <Loader2 className="w-5 h-5 text-primary animate-spin" />
                            <span className="text-lg font-medium">Aktywne</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-lg font-medium">Zakończone</span>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Szybkie linki administratora</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Link to="/admin/rezerwacje" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                        <Users className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-medium">Zarządzanie rezerwacjami</p>
                          <p className="text-xs text-muted-foreground">Przeglądaj i aktualizuj statusy</p>
                        </div>
                      </Link>
                      <Link to="/akademia/admin" className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                        <BarChart3 className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-medium">Panel Akademii</p>
                          <p className="text-xs text-muted-foreground">Zarządzaj materiałami</p>
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>
      </Layout>
    </>
  );
}