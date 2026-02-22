import { Link } from "react-router-dom";
import { ArrowRight, Play, TrendingUp, Eye, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/OptimizedImage";

// Import portfolio images
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
      { icon: TrendingUp, label: "Zaangażowanie", value: "+340%" },
      { icon: Eye, label: "Wyświetlenia/mies.", value: "2M+" },
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
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-[180px] bg-primary/[0.08]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] bg-secondary/[0.06]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Dowody skuteczności
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Studia przypadków{" "}
              <span className="text-gradient-premium">i sukcesy klientów</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/realizacje">
              Wszystkie realizacje
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>

        {/* Featured Case Study */}
        {featuredCase && <FeaturedCaseCard caseStudy={featuredCase} />}

        {/* Other Case Studies */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherCases.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCaseCard({ caseStudy }: { caseStudy: typeof caseStudies[0] }) {
  return (
    <Link to={`/realizacje/${caseStudy.id}`} className="group block relative mb-8">
      <div className="relative rounded-3xl overflow-hidden bg-muted border border-border/50 hover:border-primary/30 transition-all duration-300">
        <div className="grid lg:grid-cols-2 relative">
          {/* Image */}
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[500px] overflow-hidden">
            <OptimizedImage
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/95 hidden lg:block" />
            
            {caseStudy.video && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.4)" }}>
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                Główna realizacja
              </span>
              <span className="text-foreground/60 text-sm">{caseStudy.category}</span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4 group-hover:text-primary transition-colors duration-300">
              {caseStudy.title}
            </h3>
            <p className="text-foreground/60 mb-8 text-lg">{caseStudy.description}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              {caseStudy.stats?.map((stat) => (
                <div key={stat.label} className="flex-1 min-w-[140px] text-center p-4 rounded-xl bg-background/50 border border-border/30">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-foreground/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              <span>Zobacz pełne case study</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CaseCard({ caseStudy }: { caseStudy: typeof caseStudies[0] }) {
  return (
    <Link to={`/realizacje/${caseStudy.id}`} className="group block relative">
      <div className="relative rounded-2xl overflow-hidden bg-muted h-full border border-border/30 hover:border-primary/30 transition-all duration-300">
        <div className="relative aspect-[16/10] overflow-hidden bg-background">
          <OptimizedImage
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />

          <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform">
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2">
            {caseStudy.category}
          </span>
          <h3 className="text-xl font-heading font-bold mt-2 group-hover:text-primary transition-colors duration-300">
            {caseStudy.title}
          </h3>
          <p className="text-foreground/60 text-sm mt-2 line-clamp-2">{caseStudy.description}</p>
          
          <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Zobacz więcej</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
