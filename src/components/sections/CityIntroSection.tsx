import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface IntroContent {
  title: string;
  paragraphs: React.ReactNode[];
  videoSrc?: string;
  imageSrc?: string;
}

interface CityIntroSectionProps {
  content: IntroContent;
  cityName: string;
}

export const CityIntroSection = ({ content, cityName }: CityIntroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              O nas w {cityName}
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 md:mb-8">
              {content.title}
            </h2>

            <div className="space-y-4 md:space-y-6">
              {content.paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="prose prose-invert max-w-none"
                >
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link to="/realizacje">
                  Zobacz realizacje
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/o-nas">
                  Poznaj nas bliżej
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-3xl opacity-50" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/50">
              {content.videoSrc ? (
                <div className="relative aspect-video">
                  <video
                    src={content.videoSrc}
                    poster={content.imageSrc}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay={isPlaying}
                    onClick={() => setIsPlaying(!isPlaying)}
                  />
                  {!isPlaying && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm
                               group/play transition-all duration-300 hover:bg-background/20"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center
                                    shadow-xl shadow-primary/30 transition-transform duration-300 group-hover/play:scale-110">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </button>
                  )}
                </div>
              ) : content.imageSrc ? (
                <img 
                  src={content.imageSrc}
                  alt={`Strony internetowe ${cityName}`}
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Fotz Studio</span>
                </div>
              )}

              {/* Floating stats */}
              <motion.div
                initial={{ scale: 0, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-6 -left-6 bg-card border border-border/50 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gradient">8+ lat</span>
                    <p className="text-xs text-muted-foreground">doświadczenia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, y: -20 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-3 shadow-xl"
              >
                <div className="text-center">
                  <span className="text-lg font-bold text-secondary-foreground">5.0 ⭐</span>
                  <p className="text-[10px] text-secondary-foreground/80">Google Reviews</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
