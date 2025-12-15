import { Link } from "react-router-dom";
import { ArrowRight, Play, TrendingUp, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: "enea-stadion",
    title: "Enea Stadion Poznań",
    category: "Social Media & Events",
    description:
      "Kompleksowa obsługa marketingowa największego kompleksu sportowego w Polsce. Strona www, Instagram, produkcja video.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2005",
    video: true,
    stats: [
      { icon: TrendingUp, label: "Zaangażowanie", value: "+340%" },
      { icon: Users, label: "Followersi", value: "150K+" },
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
      "Nowoczesna strona internetowa dla historycznej fabryki z Poznania.",
    image: "https://fotz.pl/wp-content/uploads/2024/10/Cegielski-Mockup-Strona-Internetowa.png",
    video: false,
    featured: false,
    hasCase: false,
  },
  {
    id: "rppg",
    title: "RPPG Group",
    category: "Branding & Strategia",
    description:
      "Kompleksowy rebranding i nowa identyfikacja wizualna dla grupy kapitałowej.",
    image: "https://fotz.pl/wp-content/uploads/2025/09/243-900x604.png",
    video: false,
    featured: false,
    hasCase: false,
  },
];

export function CaseStudies() {
  const featuredCase = caseStudies.find((c) => c.featured);
  const otherCases = caseStudies.filter((c) => !c.featured);

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Zobacz <span className="text-gradient">efekty naszej pracy</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/realizacje" className="group">
              Wszystkie realizacje
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Featured Case Study */}
        {featuredCase && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to={`/realizacje/${featuredCase.id}`}
              className="group block mb-8"
            >
              <div className="relative rounded-3xl overflow-hidden bg-secondary">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-video lg:aspect-auto lg:min-h-[500px] overflow-hidden">
                    <img
                      src={featuredCase.image}
                      alt={featuredCase.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 hidden lg:block" />
                    
                    {/* Play Button */}
                    {featuredCase.video && (
                      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/30"
                        >
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Główna realizacja
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {featuredCase.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 text-lg">
                      {featuredCase.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {featuredCase.stats?.map((stat) => (
                        <div key={stat.label} className="text-center p-4 rounded-xl bg-background/50">
                          <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-heading font-bold text-gradient">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Zobacz pełne case study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Other Case Studies */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="group relative block rounded-2xl overflow-hidden bg-secondary h-full">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-background">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-medium">
                    {caseStudy.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold mt-2 group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {caseStudy.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
