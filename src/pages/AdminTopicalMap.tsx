import { useEffect, useMemo, useState, useCallback } from "react";
import { Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  Play,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { SOCIAL_MEDIA_CLUSTERS } from "@/data/socialMediaClusters";

type JobStatus = "pending" | "running" | "done" | "failed";

interface JobRow {
  id: string;
  cluster_slug: string;
  target_keyword: string;
  target_slug: string;
  status: JobStatus;
  attempts: number;
  last_error: string | null;
  generated_article_id: string | null;
  updated_at: string;
}

interface DraftRow {
  id: string;
  title: string;
  slug: string;
  cluster_slug: string | null;
  is_published: boolean;
  created_at: string;
}

const STATUS_COLOR: Record<JobStatus, string> = {
  pending: "bg-muted text-foreground/70",
  running: "bg-blue-500/20 text-blue-300",
  done: "bg-green-500/20 text-green-300",
  failed: "bg-red-500/20 text-red-300",
};

export default function AdminTopicalMap() {
  const { isAdmin, loading: authLoading } = useAdminAuth();
  const { toast } = useToast();

  const [jobs, setJobs] = useState<JobRow[]>([]);
  const [drafts, setDrafts] = useState<DraftRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [batchProgress, setBatchProgress] = useState<{ done: number; total: number } | null>(null);
  const [selectedCluster, setSelectedCluster] = useState<string>("all");

  const fetchData = useCallback(async () => {
    setLoading(true);
    const [{ data: j }, { data: d }] = await Promise.all([
      supabase
        .from("topical_brief_jobs")
        .select("id,cluster_slug,target_keyword,target_slug,status,attempts,last_error,generated_article_id,updated_at")
        .order("updated_at", { ascending: false })
        .limit(2000),
      supabase
        .from("blog_articles")
        .select("id,title,slug,cluster_slug,is_published,created_at")
        .eq("sync_source", "topical-map")
        .order("created_at", { ascending: false })
        .limit(200),
    ]);
    setJobs((j as JobRow[]) ?? []);
    setDrafts((d as DraftRow[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isAdmin) fetchData();
  }, [isAdmin, fetchData]);

  const stats = useMemo(() => {
    const base = { pending: 0, running: 0, done: 0, failed: 0, total: jobs.length };
    for (const j of jobs) base[j.status]++;
    return base;
  }, [jobs]);

  const byCluster = useMemo(() => {
    const map = new Map<string, { pending: number; running: number; done: number; failed: number; total: number }>();
    for (const j of jobs) {
      const key = j.cluster_slug;
      const cur = map.get(key) ?? { pending: 0, running: 0, done: 0, failed: 0, total: 0 };
      cur[j.status]++;
      cur.total++;
      map.set(key, cur);
    }
    return map;
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    const list = selectedCluster === "all" ? jobs : jobs.filter((j) => j.cluster_slug === selectedCluster);
    return list.slice(0, 100);
  }, [jobs, selectedCluster]);

  const generateOne = async (jobId?: string) => {
    const { data, error } = await supabase.functions.invoke("generate-from-brief", {
      body: jobId ? { job_id: jobId } : {},
    });
    if (error) throw new Error(error.message);
    if (data && data.ok === false) throw new Error(data.error || "Unknown error");
    return data;
  };

  const handleGenerateNext = async () => {
    setRunning(true);
    try {
      const res = await generateOne();
      toast({
        title: "Wygenerowano",
        description: res?.slug ? `Slug: ${res.slug}` : "Brak oczekujących zadań",
      });
      await fetchData();
    } catch (err) {
      toast({
        title: "Błąd generowania",
        description: err instanceof Error ? err.message : String(err),
        variant: "destructive",
      });
    } finally {
      setRunning(false);
    }
  };

  const handleBatch = async (size: number, clusterFilter?: string) => {
    const pool = jobs
      .filter((j) => j.status === "pending" && (!clusterFilter || j.cluster_slug === clusterFilter))
      .slice(0, size);
    if (pool.length === 0) {
      toast({ title: "Brak zadań", description: "Nic do wygenerowania" });
      return;
    }
    setRunning(true);
    setBatchProgress({ done: 0, total: pool.length });
    let okCount = 0;
    let failCount = 0;
    for (let i = 0; i < pool.length; i++) {
      try {
        await generateOne(pool[i].id);
        okCount++;
      } catch (err) {
        failCount++;
        console.error("Job failed:", pool[i].id, err);
      }
      setBatchProgress({ done: i + 1, total: pool.length });
    }
    setBatchProgress(null);
    setRunning(false);
    toast({
      title: "Batch zakończony",
      description: `OK: ${okCount}, Błędy: ${failCount}`,
      variant: failCount > 0 ? "destructive" : "default",
    });
    await fetchData();
  };

  const handleRetryFailed = async () => {
    const failed = jobs.filter((j) => j.status === "failed").slice(0, 20);
    if (failed.length === 0) {
      toast({ title: "Brak failed" });
      return;
    }
    await supabase
      .from("topical_brief_jobs")
      .update({ status: "pending", last_error: null })
      .in("id", failed.map((j) => j.id));
    toast({ title: "Zresetowano", description: `${failed.length} zadań → pending` });
    await fetchData();
  };

  const togglePublish = async (id: string, next: boolean) => {
    const { error } = await supabase
      .from("blog_articles")
      .update({ is_published: next, published_at: next ? new Date().toISOString() : null })
      .eq("id", id);
    if (error) {
      toast({ title: "Błąd", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: next ? "Opublikowano" : "Cofnięto publikację" });
    await fetchData();
  };

  if (authLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!isAdmin) return <Navigate to="/akademia/auth" replace />;

  const progressPct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;

  return (
    <Layout>
      <SEOHead
        title="Topical Map — Admin"
        description="Panel generowania artykułów z briefów topical map."
        canonical="/admin/topical-map"
        noIndex
      />

      <div className="min-h-screen bg-background pt-40 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight">Topical Map</h1>
            <p className="text-foreground/60 mt-2">
              Pillar <code>/agencja-social-media</code> · 20 klastrów · {stats.total} briefów
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-foreground/60">Postęp</div>
                <div className="text-3xl font-medium mt-1">{progressPct}%</div>
                <Progress value={progressPct} className="mt-3 h-1.5" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-foreground/60 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Pending
                </div>
                <div className="text-3xl font-medium mt-1">{stats.pending}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-foreground/60 flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5" /> Running
                </div>
                <div className="text-3xl font-medium mt-1">{stats.running}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-foreground/60 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Done
                </div>
                <div className="text-3xl font-medium mt-1">{stats.done}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-foreground/60 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-red-400" /> Failed
                </div>
                <div className="text-3xl font-medium mt-1">{stats.failed}</div>
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-base">Generowanie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button onClick={handleGenerateNext} disabled={running}>
                  {running ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  Generuj 1
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleBatch(5, selectedCluster === "all" ? undefined : selectedCluster)}
                  disabled={running}
                >
                  Batch ×5
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleBatch(10, selectedCluster === "all" ? undefined : selectedCluster)}
                  disabled={running}
                >
                  Batch ×10
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleBatch(20, selectedCluster === "all" ? undefined : selectedCluster)}
                  disabled={running}
                >
                  Batch ×20
                </Button>
                <Button variant="outline" onClick={handleRetryFailed} disabled={running}>
                  Retry failed (×20)
                </Button>
                <Button variant="ghost" onClick={fetchData} disabled={loading}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} /> Odśwież
                </Button>
              </div>
              {batchProgress && (
                <div>
                  <div className="text-xs text-foreground/60 mb-1">
                    Batch: {batchProgress.done} / {batchProgress.total}
                  </div>
                  <Progress value={(batchProgress.done / batchProgress.total) * 100} />
                </div>
              )}
              <p className="text-xs text-foreground/50">
                Batch działa sekwencyjnie po stronie przeglądarki. Nie zamykaj zakładki w trakcie generowania.
              </p>
            </CardContent>
          </Card>

          {/* Clusters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-base">Klastry (20)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedCluster("all")}
                  className={`text-left px-3 py-2 rounded-md border text-sm ${
                    selectedCluster === "all" ? "border-primary bg-primary/10" : "border-border hover:bg-muted"
                  }`}
                >
                  <span className="font-medium">Wszystkie</span>
                  <span className="text-foreground/50 ml-2">{stats.total}</span>
                </button>
                {SOCIAL_MEDIA_CLUSTERS.map((c) => {
                  const s = byCluster.get(c.slug) ?? { pending: 0, running: 0, done: 0, failed: 0, total: 0 };
                  const pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
                  const active = selectedCluster === c.slug;
                  return (
                    <button
                      key={c.slug}
                      onClick={() => setSelectedCluster(c.slug)}
                      className={`text-left px-3 py-2 rounded-md border text-sm ${
                        active ? "border-primary bg-primary/10" : "border-border hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium truncate">{c.shortLabel}</span>
                        <span className="text-xs text-foreground/50 shrink-0">
                          {s.done}/{s.total}
                        </span>
                      </div>
                      <Progress value={pct} className="h-1 mt-2" />
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Jobs */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-base">
                Zadania {selectedCluster !== "all" && <span className="text-foreground/50">· {selectedCluster}</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 max-h-[480px] overflow-y-auto">
                {filteredJobs.length === 0 && (
                  <div className="text-sm text-foreground/50 py-8 text-center">Brak zadań</div>
                )}
                {filteredJobs.map((j) => (
                  <div
                    key={j.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/50 text-sm"
                  >
                    <Badge className={`${STATUS_COLOR[j.status]} text-[10px] uppercase`}>{j.status}</Badge>
                    <span className="text-foreground/50 text-xs shrink-0">{j.cluster_slug}</span>
                    <span className="truncate flex-1">{j.target_keyword}</span>
                    <span className="text-foreground/40 text-xs hidden md:inline truncate max-w-[280px]">
                      /{j.target_slug}
                    </span>
                    {j.status === "pending" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => generateOne(j.id).then(fetchData).catch((e) => toast({ title: "Błąd", description: e.message, variant: "destructive" }))}
                        disabled={running}
                      >
                        <Play className="w-3.5 h-3.5" />
                      </Button>
                    )}
                    {j.last_error && (
                      <span className="text-red-400 text-xs truncate max-w-[200px]" title={j.last_error}>
                        {j.last_error}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Drafts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4" /> Wygenerowane drafty ({drafts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 max-h-[480px] overflow-y-auto">
                {drafts.length === 0 && (
                  <div className="text-sm text-foreground/50 py-8 text-center">Brak draftów</div>
                )}
                {drafts.map((d) => (
                  <div
                    key={d.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted/50 text-sm"
                  >
                    <Badge
                      className={`text-[10px] uppercase ${
                        d.is_published ? "bg-green-500/20 text-green-300" : "bg-muted text-foreground/60"
                      }`}
                    >
                      {d.is_published ? "live" : "draft"}
                    </Badge>
                    <span className="text-foreground/50 text-xs shrink-0">{d.cluster_slug}</span>
                    <span className="truncate flex-1">{d.title}</span>
                    <a
                      href={`/blog/${d.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/60 hover:text-foreground"
                      title="Podgląd"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Button
                      size="sm"
                      variant={d.is_published ? "outline" : "default"}
                      onClick={() => togglePublish(d.id, !d.is_published)}
                    >
                      {d.is_published ? "Cofnij" : "Publikuj"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}