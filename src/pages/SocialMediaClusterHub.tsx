import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import {
  SM_CLUSTERS_BY_SLUG,
  SM_PILLAR_PATH,
} from "@/data/socialMediaClusters";
import { useClusterArticles } from "@/hooks/useClusterArticles";

export default function SocialMediaClusterHub() {
  const { clusterSlug = "" } = useParams<{ clusterSlug: string }>();
  const cluster = SM_CLUSTERS_BY_SLUG[clusterSlug];
  if (!cluster) return <Navigate to={SM_PILLAR_PATH} replace />;

  const { data: articles = [], isLoading } = useClusterArticles(clusterSlug);
  const canonical = `https://fotz.pl${cluster.path}`;

  return (
    <>
      <SEOHead
        title={cluster.metaTitle}
        description={cluster.metaDescription}
        canonical={canonical}
        keywords={cluster.title}
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja social media", url: `https://fotz.pl${SM_PILLAR_PATH}` },
          { name: cluster.shortLabel, url: canonical },
        ]}
      />
      <Layout>
        <section className="container-wide px-6 md:px-12 pt-40 pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link to={SM_PILLAR_PATH} className="hover:text-foreground">Agencja social media</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{cluster.shortLabel}</span>
          </nav>

          <span className="dv-eyebrow-muted">Klaster tematyczny</span>
          <h1 className="font-geist text-4xl md:text-6xl tracking-[-0.03em] mt-2 mb-6 max-w-3xl leading-[1.05]">
            {cluster.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            {cluster.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/kontakt" className="dv-btn dv-btn-primary">
              Bezpłatna wycena <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to={SM_PILLAR_PATH} className="dv-btn dv-btn-secondary">
              ← Wszystkie klastry
            </Link>
          </div>
        </section>

        <section className="container-wide px-6 md:px-12 pb-24">
          <h2 className="font-geist text-2xl md:text-3xl tracking-tight mb-8">
            Artykuły w tym klastrze
          </h2>

          {isLoading && (
            <p className="text-muted-foreground">Ładuję artykuły…</p>
          )}

          {!isLoading && articles.length === 0 && (
            <div className="p-8 rounded-2xl border border-[color:var(--dv-hair)] text-muted-foreground">
              Treści dla tego klastra pojawią się wkrótce. W międzyczasie zajrzyj na{" "}
              <Link to={SM_PILLAR_PATH} className="text-foreground underline">
                stronę główną klastra
              </Link>{" "}
              lub{" "}
              <Link to="/kontakt" className="text-foreground underline">
                umów konsultację
              </Link>
              .
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link
                key={a.id}
                to={`/blog/${a.slug}`}
                className="group p-6 rounded-2xl border border-[color:var(--dv-hair)] hover:border-[color:var(--dv-accent-pink)] transition-colors"
              >
                <h3 className="font-geist text-lg tracking-tight mb-3 group-hover:text-[color:var(--dv-accent-pink)] transition-colors">
                  {a.title}
                </h3>
                {a.excerpt && (
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}