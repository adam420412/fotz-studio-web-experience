import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, CheckCircle2, LucideIcon } from "lucide-react";
import { useState, ReactNode } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { ContactSection } from "@/components/sections/ContactSection";
import { RelatedServices } from "@/components/sections/RelatedServices";

// --- Type definitions ---

interface StatItem {
  value: string;
  label: string;
  desc?: string;
}

interface ProblemItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface PricingTier {
  title: string;
  desc: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface CaseStudyItem {
  title: string;
  category: string;
  result?: string;
  link: string;
  image: string;
  desc?: string;
}

interface CityLink {
  name: string;
  href: string;
}

interface SEOArticleSection {
  heading: string;
  content: string;
}

export interface ServicePageData {
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
  };
  breadcrumbs: { label: string; href?: string }[];
  hero: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
  };
  stats?: StatItem[];
  problems?: { heading: string; description?: string; items: ProblemItem[] };
  features?: { heading: string; eyebrow?: string; description?: string; items: FeatureItem[] };
  process?: { heading: string; eyebrow?: string; steps: ProcessStep[] };
  pricing?: { heading: string; eyebrow?: string; tiers: PricingTier[] };
  caseStudies?: { heading: string; eyebrow?: string; featured: CaseStudyItem[]; more?: CaseStudyItem[] };
  whyUs?: { heading: string; items: FeatureItem[] };
  includedFeatures?: { heading: string; items: FeatureItem[] };
  faq: { items: FAQItem[] };
  seoArticle?: SEOArticleSection[];
  seoContent?: ReactNode;
  cityLinks?: CityLink[];
  relatedServices?: { currentService: string; subtitle?: string };
  serviceSchema?: {
    name: string;
    description: string;
    provider?: string;
    areaServed?: string;
  };
}

// --- Sub-components ---

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b" style={{ borderColor: "var(--dv-hair)" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="dv-h-sm font-medium pr-8">{item.question}</span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-300"
          style={{ color: "var(--dv-accent-pink)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 leading-relaxed" style={{ color: "var(--dv-fg-muted)" }}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// --- Main Template ---

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        canonical={data.seo.canonical}
      />
      {data.serviceSchema && (
        <ServiceSchema
          name={data.serviceSchema.name}
          description={data.serviceSchema.description}
          provider={data.serviceSchema.provider || "Fotz Studio"}
          areaServed={data.serviceSchema.areaServed || "PL"}
        />
      )}
      <BreadcrumbSchema items={data.breadcrumbs.filter(b => b.href).map(b => ({ name: b.label, url: b.href! }))} />
      {data.faq.items.length > 0 && (
        <FAQSchema items={data.faq.items} />
      )}

      <Layout>
        <PageBreadcrumbs items={data.breadcrumbs} />

        {/* ═══ HERO ═══ */}
        <section className="pt-12 pb-20 md:pt-16 md:pb-28" style={{ background: "var(--dv-ink)" }}>
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <FadeInView>
              <p className="dv-eyebrow mb-6">{data.hero.eyebrow}</p>
              <h1 className="dv-h-xl max-w-4xl mb-8">
                {data.hero.title}
                {data.hero.titleAccent && (
                  <span className="dv-text-grad"> {data.hero.titleAccent}</span>
                )}
              </h1>
              <p className="dv-lede mb-10" style={{ color: "var(--dv-fg-muted)" }}>
                {data.hero.description}
              </p>
              {data.hero.ctaHref && (
                <div className="flex flex-wrap gap-4">
                  <Link to={data.hero.ctaHref} className="dv-btn dv-btn-primary">
                    {data.hero.ctaText || "Bezpłatna wycena"} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/realizacje" className="dv-btn dv-btn-secondary">
                    Zobacz realizacje
                  </Link>
                </div>
              )}
            </FadeInView>
          </div>
        </section>

        {/* ═══ STATS BAR ═══ */}
        {data.stats && data.stats.length > 0 && (
          <section className="border-b" style={{ borderColor: "var(--dv-hair)", background: "var(--dv-bg-raised)" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: "var(--dv-hair)" }}>
                {data.stats.map((stat, i) => (
                  <FadeInView key={i} delay={i * 0.1} className="py-8 md:py-10 px-6 text-center">
                    <div className="dv-h-lg dv-text-grad mb-1">{stat.value}</div>
                    <div className="text-sm font-medium mb-0.5">{stat.label}</div>
                    {stat.desc && <div className="text-xs" style={{ color: "var(--dv-fg-muted)" }}>{stat.desc}</div>}
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ PROBLEMS ═══ */}
        {data.problems && (
          <section className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <FadeInView>
                <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 md:gap-20 items-start">
                  <div className="md:sticky md:top-32">
                    <p className="dv-eyebrow mb-4">Problem</p>
                    <h2 className="dv-h-lg mb-4">{data.problems.heading}</h2>
                    {data.problems.description && (
                      <p className="dv-lede" style={{ color: "var(--dv-fg-muted)" }}>{data.problems.description}</p>
                    )}
                  </div>
                  <div className="space-y-0">
                    {data.problems.items.map((item, i) => (
                      <div key={i} className="flex gap-5 py-6 border-t" style={{ borderColor: "var(--dv-hair)" }}>
                        <span className="dv-mono text-sm shrink-0 pt-0.5" style={{ color: "var(--dv-accent-pink)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-medium mb-2">{item.title}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--dv-fg-muted)" }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            </div>
          </section>
        )}

        {/* ═══ FEATURES / WHAT WE DO ═══ */}
        {data.features && (
          <section className="py-20 md:py-28" style={{ background: "var(--dv-ink)" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <FadeInView>
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-16">
                  <div>
                    {data.features.eyebrow && <p className="dv-eyebrow mb-4">{data.features.eyebrow}</p>}
                    <h2 className="dv-h-lg">{data.features.heading}</h2>
                  </div>
                  {data.features.description && (
                    <p className="dv-lede self-end" style={{ color: "var(--dv-fg-muted)" }}>{data.features.description}</p>
                  )}
                </div>
              </FadeInView>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.features.items.map((item, i) => (
                  <FadeInView key={i} delay={i * 0.08}>
                    <div className="dv-panel p-6 md:p-8 h-full">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: "var(--dv-chip)" }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: "var(--dv-accent-pink)" }} />
                      </div>
                      <h3 className="dv-h-sm mb-3">{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--dv-fg-muted)" }}>{item.desc}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ PROCESS ═══ */}
        {data.process && (
          <section className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <FadeInView>
                {data.process.eyebrow && <p className="dv-eyebrow mb-4">{data.process.eyebrow}</p>}
                <h2 className="dv-h-lg mb-16">{data.process.heading}</h2>
              </FadeInView>
              <div className="space-y-0">
                {data.process.steps.map((step, i) => (
                  <FadeInView key={i} delay={i * 0.06}>
                    <div
                      className="grid grid-cols-[auto,1fr,1.5fr] md:grid-cols-[80px,1fr,2fr] gap-4 md:gap-8 py-6 border-t items-start"
                      style={{ borderColor: "var(--dv-hair)" }}
                    >
                      <span className="dv-mono text-sm" style={{ color: "var(--dv-accent-pink)" }}>{step.step}</span>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--dv-fg-muted)" }}>{step.desc}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ CASE STUDIES ═══ */}
        {data.caseStudies && (
          <section className="py-20 md:py-28" style={{ background: "var(--dv-ink)" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <FadeInView>
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                  <div>
                    {data.caseStudies.eyebrow && <p className="dv-eyebrow mb-4">{data.caseStudies.eyebrow}</p>}
                    <h2 className="dv-h-lg">{data.caseStudies.heading}</h2>
                  </div>
                  <div className="self-end flex justify-end">
                    <Link to="/realizacje" className="dv-btn dv-btn-secondary">
                      Wszystkie realizacje <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeInView>

              <div className="grid md:grid-cols-3 gap-4">
                {data.caseStudies.featured.map((cs, i) => (
                  <FadeInView key={i} delay={i * 0.1}>
                    <Link
                      to={cs.link}
                      className="group block dv-panel overflow-hidden h-full"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={cs.image}
                          alt={cs.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <span className="dv-pill text-[11px] mb-3">{cs.category}</span>
                        <h3 className="dv-h-sm mt-3 mb-2 group-hover:text-[var(--dv-accent-pink)] transition-colors">{cs.title}</h3>
                        {cs.desc && <p className="text-sm mb-3" style={{ color: "var(--dv-fg-muted)" }}>{cs.desc}</p>}
                        {cs.result && (
                          <div className="dv-mono text-xs" style={{ color: "var(--dv-accent-pink)" }}>{cs.result}</div>
                        )}
                      </div>
                    </Link>
                  </FadeInView>
                ))}
              </div>

              {data.caseStudies.more && data.caseStudies.more.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                  {data.caseStudies.more.map((cs, i) => (
                    <FadeInView key={i} delay={i * 0.06}>
                      <Link to={cs.link} className="group block dv-panel overflow-hidden">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img
                            src={cs.image}
                            alt={cs.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-xs dv-mono" style={{ color: "var(--dv-fg-muted)" }}>{cs.category}</span>
                          <h4 className="text-sm font-medium mt-1 group-hover:text-[var(--dv-accent-pink)] transition-colors">{cs.title}</h4>
                          {cs.result && (
                            <div className="dv-mono text-xs mt-1" style={{ color: "var(--dv-accent-pink)" }}>{cs.result}</div>
                          )}
                        </div>
                      </Link>
                    </FadeInView>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══ PRICING ═══ */}
        {data.pricing && (
          <section className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <FadeInView>
                {data.pricing.eyebrow && <p className="dv-eyebrow mb-4">{data.pricing.eyebrow}</p>}
                <h2 className="dv-h-lg mb-16">{data.pricing.heading}</h2>
              </FadeInView>
              <div className="grid md:grid-cols-3 gap-4">
                {data.pricing.tiers.map((tier, i) => (
                  <FadeInView key={i} delay={i * 0.1}>
                    <div
                      className="dv-panel p-6 md:p-8 h-full flex flex-col"
                      style={tier.highlighted ? { borderColor: "var(--dv-accent-pink)" } : undefined}
                    >
                      {tier.highlighted && (
                        <span className="dv-pill text-[11px] self-start mb-4" style={{ background: "rgba(230,130,170,0.15)", color: "var(--dv-accent-pink)" }}>
                          Popularne
                        </span>
                      )}
                      <h3 className="dv-h-sm mb-2">{tier.title}</h3>
                      <p className="text-sm mb-4" style={{ color: "var(--dv-fg-muted)" }}>{tier.desc}</p>
                      <div className="dv-h-md dv-text-grad mb-6">{tier.price}</div>
                      <ul className="space-y-3 flex-1">
                        {tier.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--dv-accent-pink)" }} />
                            <span style={{ color: "var(--dv-fg-muted)" }}>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/kontakt"
                        className={`dv-btn ${tier.highlighted ? "dv-btn-primary" : "dv-btn-secondary"} justify-center mt-8`}
                      >
                        Zapytaj o wycenę
                      </Link>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ INCLUDED FEATURES ═══ */}
        {data.includedFeatures && (
          <section className="py-20 md:py-28" style={{ background: "var(--dv-ink)" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <FadeInView>
                <h2 className="dv-h-lg mb-16">{data.includedFeatures.heading}</h2>
              </FadeInView>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {data.includedFeatures.items.map((item, i) => (
                  <FadeInView key={i} delay={i * 0.06}>
                    <div className="py-5 px-4 border-t" style={{ borderColor: "var(--dv-hair)" }}>
                      <item.icon className="w-5 h-5 mb-3" style={{ color: "var(--dv-accent-pink)" }} />
                      <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                      <p className="text-xs" style={{ color: "var(--dv-fg-muted)" }}>{item.desc}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ WHY US ═══ */}
        {data.whyUs && (
          <section className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <FadeInView>
                <p className="dv-eyebrow mb-4">Dlaczego my</p>
                <h2 className="dv-h-lg mb-16">{data.whyUs.heading}</h2>
              </FadeInView>
              <div className="space-y-0">
                {data.whyUs.items.map((item, i) => (
                  <FadeInView key={i} delay={i * 0.06}>
                    <div
                      className="grid grid-cols-[auto,1fr,2fr] md:grid-cols-[80px,1fr,2.5fr] gap-4 md:gap-8 py-6 border-t items-start"
                      style={{ borderColor: "var(--dv-hair)" }}
                    >
                      <span className="dv-mono text-sm" style={{ color: "var(--dv-accent-pink)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 shrink-0" style={{ color: "var(--dv-accent-pink)" }} />
                        <h3 className="font-medium text-sm">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--dv-fg-muted)" }}>{item.desc}</p>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ FAQ ═══ */}
        {data.faq.items.length > 0 && (
          <section className="py-20 md:py-28" style={{ background: "var(--dv-ink)" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-20">
                <FadeInView>
                  <p className="dv-eyebrow mb-4">FAQ</p>
                  <h2 className="dv-h-lg">Najczęściej zadawane pytania</h2>
                </FadeInView>
                <div>
                  {data.faq.items.map((item, i) => (
                    <FAQAccordionItem
                      key={i}
                      item={item}
                      isOpen={openFAQ === i}
                      onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═══ SEO ARTICLE (simple) ═══ */}
        {data.seoArticle && data.seoArticle.length > 0 && (
          <section className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
              {data.seoArticle.map((section, i) => (
                <div key={i} className="mb-10 last:mb-0">
                  <h2 className="dv-h-sm mb-4">{section.heading}</h2>
                  <p className="leading-relaxed" style={{ color: "var(--dv-fg-muted)" }}>{section.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ═══ SEO CONTENT (rich / custom ReactNode) ═══ */}
        {data.seoContent && (
          <section className="py-20 md:py-28" style={{ background: "hsl(var(--background))" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-4xl seo-article">
              {data.seoContent}
            </div>
          </section>
        )}

        {/* ═══ CITY LINKS ═══ */}
        {data.cityLinks && data.cityLinks.length > 0 && (
          <section className="py-12" style={{ background: "var(--dv-ink)" }}>
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              <p className="dv-eyebrow-muted mb-4">Lokalizacje</p>
              <div className="flex flex-wrap gap-2">
                {data.cityLinks.map((city) => (
                  <Link key={city.href} to={city.href} className="dv-pill text-[11px] hover:bg-[var(--dv-chip)] transition-colors">
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ RELATED SERVICES ═══ */}
        {data.relatedServices && (
          <RelatedServices
            currentService={data.relatedServices.currentService}
            subtitle={data.relatedServices.subtitle}
          />
        )}

        {/* ═══ CONTACT ═══ */}
        <ContactSection />
      </Layout>
    </>
  );
}
