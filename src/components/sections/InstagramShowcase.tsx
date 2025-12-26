import { motion } from "framer-motion";
import { Instagram, Play, ExternalLink } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { useState, useRef } from "react";

interface InstagramPost {
  url: string;
  embedUrl: string;
  thumbnail?: string;
  type: "reel" | "post";
  title: string;
}

// Import thumbnails
import thumb1 from "@/assets/portfolio/fabryka-virali.png";
import thumb2 from "@/assets/portfolio/victory-cars.png";
import thumb3 from "@/assets/portfolio/cute-dumpling-new.png";

const instagramPosts: InstagramPost[] = [
  {
    url: "https://www.instagram.com/p/DNz4N4fVOJq/",
    embedUrl: "https://www.instagram.com/p/DNz4N4fVOJq/embed",
    type: "post",
    title: "Post @fotz_studio",
    thumbnail: thumb1,
  },
  {
    url: "https://www.instagram.com/reel/DSn0ptXiHWt/",
    embedUrl: "https://www.instagram.com/reel/DSn0ptXiHWt/embed",
    type: "reel",
    title: "Reel @fotz_studio",
    thumbnail: thumb2,
  },
  {
    url: "https://www.instagram.com/p/DSpMWiZjY9s/",
    embedUrl: "https://www.instagram.com/p/DSpMWiZjY9s/embed",
    type: "post",
    title: "Post @fotz_studio",
    thumbnail: thumb3,
  },
];

function InstagramCard({ post, index }: { post: InstagramPost; index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative aspect-[9/16] bg-card/50 border border-border/50 rounded-2xl overflow-hidden">
        {!showEmbed ? (
          // Preview state with thumbnail and play button
          <div 
            className="absolute inset-0 cursor-pointer group/card"
            onClick={() => setShowEmbed(true)}
          >
            {/* Thumbnail image */}
            {post.thumbnail && (
              <img 
                src={post.thumbnail} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
              />
            )}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-white/30 transition-all duration-300 shadow-xl">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
              </div>
            </div>
            
            {/* Bottom info */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white font-medium">{post.title}</p>
              <span className="text-xs text-white/70">Kliknij aby odtworzyć</span>
            </div>
          </div>
        ) : (
          // Embedded iframe
          <>
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-card/80">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              </div>
            )}
            <iframe
              src={post.embedUrl}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              allow="encrypted-media"
              onLoad={() => setIsLoaded(true)}
              title={post.title}
            />
          </>
        )}
        
        {/* External link overlay */}
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-4 h-4 text-white" />
        </a>
      </div>
    </motion.div>
  );
}

export function InstagramShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
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
              @fotz_studio
            </motion.span>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
              Portfolio <span className="text-gradient">Social Media</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Przykłady naszych realizacji z profilu @fotz_studio
            </p>
          </div>
        </FadeInView>

        {/* Carousel Navigation */}
        <div className="flex justify-end gap-2 mb-6 max-w-6xl mx-auto">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-card/50 border border-border/50 hover:bg-card hover:border-primary/50 transition-colors"
            aria-label="Przewiń w lewo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-card/50 border border-border/50 hover:bg-card hover:border-primary/50 transition-colors"
            aria-label="Przewiń w prawo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Instagram Posts Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-6xl mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {instagramPosts.map((post, index) => (
            <div key={post.url} className="flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
              <InstagramCard post={post} index={index} />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <FadeInView delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <a 
              href="https://www.instagram.com/fotz_studio/" 
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
