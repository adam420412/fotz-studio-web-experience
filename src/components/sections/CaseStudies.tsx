import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

import eneaStadionImg from "@/assets/portfolio/enea-stadion.png";
import fpsCegielskiImg from "@/assets/portfolio/fps-cegielski.png";
import rppgImg from "@/assets/portfolio/rppg.png";

const caseStudies = [
  {
    id: "enea-stadion",
    title: "Enea Stadion Poznań",
    category: "Social Media & Events",
    description:
      "Kompleksowa obsługa marketingowa największego kompleksu sportowego w Polsce. Strona www, Instagram, produkcja video.",
    image: eneaStadionImg,
    video: true,
    stats: [
      { label: "Zaangażowanie", value: "+340%" },
      { label: "Wyświetlenia/mies.", value: "2M+" },
    ],
    featured: true,
    hasCase: true,
  },
  {
    id: "fps-cegielski",
    title: "FPS Poznań (Cegielski)",
    category: "Strony www",
    description:
      "Nowoczesna strona internetowa dla historycznej fabryki pojazdów szynowych z Poznania.",
    image: fpsCegielskiImg,
    video: false,
    featured: false,
    hasCase: true,
  },
  {
    id: "rppg",
    title: "RPPG Group",
    category: "Branding & Strategia",
    description:
      "Kompleksowy rebranding i nowa identyfikacja wizualna dla Rady Polskich Przedsiębiorców Globalnych.",
    image: rppgImg,
    video: false,
    featured: false,
    hasCase: true,
  },
];

export function CaseStudies() {
  const featuredCase = caseStudies.find((c) => c.featured);
  const otherCases = caseStudies.filter((c) => !c.featured);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--dv-ink)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="dv-eyebrow mb-6 inline-block">Dowody skuteczności</span>
            <h2
              className="font-geist"
              style={{
                fontSize: "clamp(40px, 5vw, 88px)",
                letterSpacing: "-0.045em",
                lineHeight: 0.98,
                fontWeight: 400,
              }}
            >
              Studia przypadków
              <br />
              <span className="dv-text-grad italic">i sukcesy klientów</span>
            </h2>
          </div>
          <Link to="/realizacje" className="dv-btn dv-btn-secondary group">
            Wszystkie realizacje
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured */}
        {featuredCase && (
          <Link
            to={`/realizacje/${featuredCase.id}`}
            className="group block mb-8"
          >
            <div
              className="overflow-hidden"
              style={{ borderRadius: 24, border: "1px solid var(--dv-hair)" }}
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[480px] overflow-hidden">
                  <OptimizedImage
                    src={featuredCase.image}
                    alt={featuredCase.title}
                    className="w-full h-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={true}
                  />
                  <div
                    className="absolute inset-0 hidden lg:block"
                    style={{
                      background:
                        "linear-gradient(to right, transparent 60%, var(--dv-ink) 100%)",
                    }}
                  />
                  {featuredCase.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: "var(--dv-brand-grad)",
                          boxShadow: "0 8px 28px rgba(120,20,60,0.45)",
                        }}
                      >
                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className="p-8 lg:p-12 flex flex-col justify-center"
                  style={{ background: "var(--dv-ink)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="dv-pill" style={{ background: "rgba(230,130,170,0.15)", color: "var(--dv-accent-pink)" }}>
                      Główna realizacja
                    </span>
                    <span className="text-[13px]" style={{ color: "var(--dv-fg-muted)" }}>
                      {featuredCase.category}
                    </span>
                  </div>

                  <h3
                    className="font-geist text-foreground group-hover:text-[color:var(--dv-accent-pink)] transition-colors duration-200 mb-4"
                    style={{
                      fontSize: "clamp(24px, 2.4vw, 40px)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                      fontWeight: 400,
                    }}
                  >
                    {featuredCase.title}
                  </h3>
                  <p
                    className="text-[16px] leading-relaxed mb-8"
                    style={{ color: "var(--dv-fg-muted)" }}
                  >
                    {featuredCase.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-8">
                    {featuredCase.stats?.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex-1 text-center p-4"
                        style={{
                          background: "var(--dv-chip)",
                          borderRadius: 14,
                          border: "1px solid var(--dv-hair)",
                        }}
                      >
                        <div className="dv-text-grad font-geist text-2xl font-semibold">
                          {stat.value}
                        </div>
                        <div
                          className="text-[12px] mt-1"
                          style={{ color: "var(--dv-fg-muted)" }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <span
                    className="inline-flex items-center gap-2 text-[14px] font-medium group-hover:gap-3 transition-all"
                    style={{ color: "var(--dv-accent-pink)" }}
                  >
                    Zobacz pełne case study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other cases */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {otherCases.map((c) => (
            <Link
              key={c.id}
              to={`/realizacje/${c.id}`}
              className="group block overflow-hidden"
              style={{ borderRadius: 20, border: "1px solid var(--dv-hair)" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <OptimizedImage
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--dv-ink) 0%, var(--dv-ink)/70% 40%, transparent 100%)",
                  }}
                />
              </div>
              <div className="p-6" style={{ background: "var(--dv-ink)" }}>
                <span className="dv-pill mb-3 inline-block">{c.category}</span>
                <h3
                  className="font-geist text-foreground group-hover:text-[color:var(--dv-accent-pink)] transition-colors duration-200 mb-2"
                  style={{
                    fontSize: "clamp(20px, 1.4vw, 24px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    fontWeight: 400,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed line-clamp-2"
                  style={{ color: "var(--dv-fg-muted)" }}
                >
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
