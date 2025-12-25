import { motion } from "framer-motion";
import { Instagram, Loader2 } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { useState, useEffect } from "react";

interface InstagramPost {
  embedUrl: string;
  accountName: string;
  category: string;
}

const instagramPosts: InstagramPost[] = [
  {
    embedUrl: "https://www.instagram.com/reel/DSn0ptXiHWt/embed",
    accountName: "@karlik_luxury.cars",
    category: "Luxury Cars"
  },
  {
    embedUrl: "https://www.instagram.com/p/DSpMWiZjY9s/embed",
    accountName: "@landrover_karlik",
    category: "Land Rover"
  },
];

export function InstagramShowcase() {
  const [loadedPosts, setLoadedPosts] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.instgrm) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleIframeLoad = (index: number) => {
    setLoadedPosts(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full blur-[200px]"
          style={{ background: "hsla(336, 71%, 27%, 0.08)" }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[150px]"
          style={{ background: "hsla(280, 60%, 40%, 0.08)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 border border-[#E1306C]/30 rounded-full text-[#E1306C] text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              Nasze realizacje Instagram
            </motion.span>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
              Portfolio <span className="text-gradient">Social Media</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Przykłady naszych realizacji dla klientów z branży automotive
            </p>
          </div>
        </FadeInView>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {instagramPosts.map((post, index) => (
            <FadeInView key={index} delay={index * 0.15}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 bg-card"
              >
                {/* Header */}
                <div className="p-4 border-b border-border/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px]">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{post.accountName}</p>
                    <p className="text-xs text-muted-foreground">{post.category}</p>
                  </div>
                </div>

                {/* Loading state */}
                {!loadedPosts[index] && (
                  <div className="absolute inset-0 top-[60px] flex flex-col items-center justify-center bg-card z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    </motion.div>
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground">Ładowanie posta...</p>
                  </div>
                )}

                {/* Instagram Embed */}
                <div className="relative">
                  <iframe
                    src={post.embedUrl}
                    className="w-full min-h-[500px] sm:min-h-[600px]"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    onLoad={() => handleIframeLoad(index)}
                  />
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        {/* Instagram CTA */}
        <FadeInView delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <a 
              href="https://www.instagram.com/fotz.studio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-full font-medium transition-opacity group"
            >
              <Instagram className="w-5 h-5" />
              Obserwuj nas na Instagramie
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}