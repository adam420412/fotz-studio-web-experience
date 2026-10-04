import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import {
  SM_CLUSTERS_BY_SLUG,
  SM_PILLAR_PATH,
} from "@/data/socialMediaClusters";
import { getSocialMediaGuide } from "@/data/socialMediaGuides";
import { useClusterArticles } from "@/hooks/useClusterArticles";

export default function SocialMediaClusterHub() {
  const { clusterSlug = "" } = useParams<{ clusterSlug: string }>();
  const cluster = SM_CLUSTERS_BY_SLUG[clusterSlug];
  const { data: articles = [], isLoading, isError, refetch } = useClusterArticles(clusterSlug, Boolean(cluster));
  if (!cluster) return <Navigate to={SM_PILLAR_PATH} replace />;
  const guide = getSocialMediaGuide(cluster);
  const canonical = `https://www.fotz-studio.pl${cluster.path}`;

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
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Agencja social media", url: `https://www.fotz-studio.pl${SM_PILLAR_PATH}` },
          { name: cluster.shortLabel, url: canonical },
        ]}
      />
      <Layout>
        <section className="container-wide px-6 md:px-12 pt-40 pb-16">
          <nav aria-label="Ścieżka nawigacji" className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link to={SM_PILLAR_PATH} className="hover:text-foreground">Agencja social media</Link>
            <span className="mx-2">/</span>
            <span aria-current="page" className="text-foreground">{cluster.shortLabel}</span>
          </nav>

          <span className="dv-eyebrow-muted">{cluster.kind === "city" ? "Współpraca lokalna" : "Poradnik social media"}</span>
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
              Oferta i poradniki
            </Link>
          </div>
        </section>

        <section className="container-wide px-6 md:px-12 pb-20">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-10 max-w-3xl">
              {guide.map((section) => (
                <div key={section.title}>
                  <h2 className="font-geist text-2xl md:text-3xl tracking-tight mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
            <aside className="dv-panel p-6 md:p-8">
              <h2 className="font-geist text-2xl mb-5">Zaplanuj kolejny krok</h2>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li><Link className="underline underline-offset-4" to="/social-media/poznan">Prowadzenie Facebooka, Instagrama i LinkedIn</Link></li>
                <li><Link className="underline underline-offset-4" to="/blog/agencja-social-media-poznan">Jak porównać agencje i przygotować brief</Link></li>
                <li><Link className="underline underline-offset-4" to="/realizacje">Zobacz portfolio FOTZ Studio</Link></li>
                <li><Link className="underline underline-offset-4" to="/generator-briefu">Przygotuj brief projektu</Link></li>
              </ul>
              <Link to="/konsultacja" className="dv-btn dv-btn-primary mt-8">Umów rozmowę <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
            </aside>
          </div>
        </section>

        <section className="container-wide px-6 md:px-12 pb-24">
          <h2 className="font-geist text-2xl md:text-3xl tracking-tight mb-8">
            Więcej na ten temat
          </h2>

          {isLoading && (
            <p role="status" className="text-muted-foreground">Ładuję artykuły…</p>
          )}

          {isError && (
            <div role="alert" className="dv-panel p-6 mb-6">
              <p className="text-muted-foreground mb-4">Nie udało się wczytać dodatkowych artykułów.</p>
              <button type="button" onClick={() => void refetch()} className="dv-btn dv-btn-secondary">Spróbuj ponownie</button>
            </div>
          )}
          {!isLoading && !isError && articles.length === 0 && (
            <p className="text-muted-foreground mb-6">
              Przejdź do <Link to="/blog" className="underline underline-offset-4">wszystkich poradników marketingowych</Link> lub sprawdź <Link to={SM_PILLAR_PATH} className="underline underline-offset-4">zakres obsługi social media</Link>.
            </p>
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