import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Play, ExternalLink, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { useState, useRef, useEffect } from "react";

interface InstagramPost {
  url: string;
  embedUrl: string;
  thumbnail?: string;
  type: "reel" | "post";
  title: string;
  client?: string;
}


const instagramPosts: InstagramPost[] = [
  {
    url: "https://www.instagram.com/eneastadion/reel/DQCNKAajM-q/",
    embedUrl: "https://www.instagram.com/reel/DQCNKAajM-q/embed",
    type: "reel",
    title: "Reel Enea Stadion",
    client: "Enea Stadion",
  },
  {
    url: "https://www.instagram.com/eneastadion/reel/DPWohvwjJZl/",
    embedUrl: "https://www.instagram.com/reel/DPWohvwjJZl/embed",
    type: "reel",
    title: "Reel Enea Stadion",
    client: "Enea Stadion",
  },
  {
    url: "https://www.instagram.com/klubmuzycznyb17/reel/DR4RyXdiOEt/",
    embedUrl: "https://www.instagram.com/reel/DR4RyXdiOEt/embed",
    type: "reel",
    title: "Reel Klub B17",
    client: "Klub B17",
  },
  {
    url: "https://www.instagram.com/eneastadion/reel/DO3BSVKDNcf/",
    embedUrl: "https://www.instagram.com/reel/DO3BSVKDNcf/embed",
    type: "reel",
    title: "Reel Enea Stadion",
    client: "Enea Stadion",
  },
  {
    url: "https://www.instagram.com/eneastadion/reel/DOjM5AKCe6O/",
    embedUrl: "https://www.instagram.com/reel/DOjM5AKCe6O/embed",
    type: "reel",
    title: "Reel Enea Stadion",
    client: "Enea Stadion",
  },
  {
    url: "https://www.instagram.com/klubmuzycznyb17/reel/DPHDQk6CO9p/",
    embedUrl: "https://www.instagram.com/reel/DPHDQk6CO9p/embed",
    type: "reel",
    title: "Reel Klub B17",
    client: "Klub B17",
  },
  {
    url: "https://www.instagram.com/eneastadion/reel/DK4-AjTi_P-/",
    embedUrl: "https://www.instagram.com/reel/DK4-AjTi_P-/embed",
    type: "reel",
    title: "Reel Enea Stadion",
    client: "Enea Stadion",
  },
];

function InstagramCard({ post, index, onOpenLightbox }: { post: InstagramPost; index: number; onOpenLightbox: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      onClick={onOpenLightbox}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-[#833AB4]/30 via-[#FD1D1D]/30 to-[#F77737]/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative aspect-[9/16] bg-card/50 border border-border/50 rounded-2xl overflow-hidden group-hover:border-[#E1306C]/50 transition-all duration-500">
        {/* Thumbnail image */}
        {post.thumbnail && (
          <motion.img 
            src={post.thumbnail} 
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
        )}
        
        {/* Overlay gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Instagram gradient border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(45deg, #833AB4, #FD1D1D, #F77737, #833AB4)",
            backgroundSize: "300% 300%",
            padding: "2px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Play button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl"
            animate={{ 
              scale: isHovered ? 1.15 : 1,
              backgroundColor: isHovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
          </motion.div>
        </div>
        
        {/* Bottom info with animated appearance */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ y: 10, opacity: 0.8 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span className="text-xs text-white/70">{post.type === "reel" ? "Reel" : "Post"}</span>
          </div>
          <p className="text-sm text-white font-medium">{post.client || post.title}</p>
          <motion.span 
            className="text-xs text-white/70"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            Kliknij aby odtworzyć
          </motion.span>
        </motion.div>
        
        {/* Reel badge */}
        {post.type === "reel" && (
          <motion.div
            className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] rounded-full flex items-center gap-1"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Play className="w-3 h-3 text-white fill-white" />
            <span className="text-[10px] text-white font-medium">REEL</span>
          </motion.div>
        )}
        
        {/* External link */}
        <motion.a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full z-10"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <ExternalLink className="w-4 h-4 text-white" />
        </motion.a>
      </div>
    </motion.div>
  );
}

function Lightbox({ post, onClose, onPrev, onNext, hasPrev, hasNext }: { 
  post: InstagramPost; 
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation arrows */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-md aspect-[9/16] max-h-[85vh] bg-card rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-card">
            <div className="w-10 h-10 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
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
      </motion.div>
    </motion.div>
  );
}

export function InstagramShowcase() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goToPrev = () => setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev);
  const goToNext = () => setLightboxIndex(prev => prev !== null && prev < instagramPosts.length - 1 ? prev + 1 : prev);

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
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#E1306C]/40 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
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
              Portfolio Social Media
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.span>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
              Nasze <span className="text-gradient">realizacje</span> w akcji
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Zobacz przykłady naszych produkcji dla klientów - od Enea Stadion po kluby muzyczne
            </p>
          </div>
        </FadeInView>

        {/* Instagram Posts Grid - 4 columns on larger screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <InstagramCard 
              key={post.url} 
              post={post} 
              index={index}
              onOpenLightbox={() => openLightbox(index)}
            />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-full font-medium transition-all group hover:scale-105 hover:shadow-lg hover:shadow-[#E1306C]/25"
            >
              <Instagram className="w-5 h-5" />
              Obserwuj nas na Instagramie
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </FadeInView>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            post={instagramPosts[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < instagramPosts.length - 1}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
