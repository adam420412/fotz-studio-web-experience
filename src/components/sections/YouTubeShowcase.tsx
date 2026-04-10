import { motion, AnimatePresence } from "framer-motion";
import { Play, Youtube, Podcast, Video, Volume2, VolumeX, Pause, Loader2, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { useState, useRef } from "react";

interface YouTubeVideo {
  id: string;
  title: string;
  type: "video" | "short";
}

const youtubeVideos: YouTubeVideo[] = [
  { id: "GqxcFYBYlq4", title: "Produkcja wideo", type: "video" },
  { id: "XsDrb84IljY", title: "Produkcja wideo", type: "video" },
  { id: "XGezvrpv_xk", title: "Produkcja wideo", type: "video" },
  { id: "OC1VEXL1PCk", title: "Produkcja wideo", type: "video" },
  { id: "N92YjnDq1ks", title: "Produkcja wideo", type: "video" },
  { id: "U3imz76W5_g", title: "Produkcja wideo", type: "video" },
];

const youtubeShorts: YouTubeVideo[] = [
  { id: "uBKcGXcZn48", title: "YouTube Short", type: "short" },
  { id: "woR1iwL__Io", title: "YouTube Short", type: "short" },
  { id: "7anqpGZNZzM", title: "YouTube Short", type: "short" },
];

function VideoCard({ video, index, onClick }: { video: YouTubeVideo; index: number; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-[#FF0000]/30 to-[#FF0000]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className={`relative ${video.type === "short" ? "aspect-[9/16]" : "aspect-video"} bg-card/50 border border-border/50 rounded-2xl overflow-hidden group-hover:border-[#FF0000]/50 transition-all duration-500`}>
        <motion.img 
          src={thumbnailUrl} 
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div 
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF0000]/90 flex items-center justify-center shadow-xl"
            animate={{ 
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white ml-1" />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-3"
          initial={{ y: 10, opacity: 0.8 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Youtube className="w-4 h-4 text-[#FF0000]" />
            <span className="text-xs text-white/70">{video.type === "short" ? "Short" : "Video"}</span>
          </div>
          <p className="text-sm text-white font-medium truncate">{video.title}</p>
        </motion.div>

        {video.type === "short" && (
          <motion.div
            className="absolute top-3 left-3 px-2 py-1 bg-[#FF0000] rounded-full flex items-center gap-1"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Play className="w-3 h-3 text-white fill-white" />
            <span className="text-[10px] text-white font-medium">SHORT</span>
          </motion.div>
        )}
        
        <motion.a
          href={video.type === "short" ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`}
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

function VideoLightbox({ video, onClose, onPrev, onNext, hasPrev, hasNext }: { 
  video: YouTubeVideo; 
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Zamknij lightbox"
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Poprzedni film"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Następny film"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className={`relative w-full ${video.type === "short" ? "max-w-md aspect-[9/16]" : "max-w-4xl aspect-video"} max-h-[85vh] bg-card rounded-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
            <div className="w-10 h-10 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          title={video.title}
        />
      </motion.div>
    </motion.div>
  );
}

export function YouTubeShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPodcastLoading, setIsPodcastLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxType, setLightboxType] = useState<"video" | "short">("video");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayWithSound = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const openLightbox = (index: number, type: "video" | "short") => {
    setLightboxIndex(index);
    setLightboxType(type);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const currentVideos = lightboxType === "video" ? youtubeVideos : youtubeShorts;
  const goToPrev = () => setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev);
  const goToNext = () => setLightboxIndex(prev => prev !== null && prev < currentVideos.length - 1 ? prev + 1 : prev);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
          style={{ background: "hsla(0, 100%, 50%, 0.08)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF0000]/10 border border-[#FF0000]/20 rounded-full text-[#FF0000] text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
              Nasze produkcje YouTube
            </motion.span>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
              Zobacz nas <span className="text-gradient">w akcji</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Nasze realizacje wideo, podcast i materiały które tworzymy dla klientów
            </p>
          </div>
        </FadeInView>

        {/* Main video - Lech / Fotz Reel */}
        <FadeInView delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[9/16] md:aspect-video rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10"
            >
              <video
                ref={videoRef}
                src="/videos/fotz-reel.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
              
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={handlePlayWithSound}
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${isPlaying && !isMuted ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  ) : (
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                  )}
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 hover:bg-background transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                ) : (
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                )}
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-4 sm:mt-6"
            >
              <div className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                <Video className="w-4 h-4 text-primary" />
                Realizacja dla Lech Poznań • Enea Stadion
              </div>
            </motion.div>
          </div>
        </FadeInView>

        {/* YouTube Videos Grid */}
        <FadeInView delay={0.15}>
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-center">Nasze produkcje wideo</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
              {youtubeVideos.map((video, index) => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  index={index}
                  onClick={() => openLightbox(index, "video")}
                />
              ))}
            </div>
          </div>
        </FadeInView>

        {/* YouTube Shorts Grid */}
        <FadeInView delay={0.2}>
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-center">YouTube Shorts</h3>
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              {youtubeShorts.map((video, index) => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  index={index}
                  onClick={() => openLightbox(index, "short")}
                />
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Podcast section */}
        <FadeInView delay={0.25}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Podcast className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Podcast Fotz Studio</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Rozmowy o kreatywności i biznesie</p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 bg-card"
            >
              {isPodcastLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                  </motion.div>
                  <p className="mt-4 text-sm text-muted-foreground">Ładowanie podcastu...</p>
                </div>
              )}
              
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/lul8QqyK_6o?rel=0"
                title="Podcast Fotz Studio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                onLoad={() => setIsPodcastLoading(false)}
              />
            </motion.div>
          </div>
        </FadeInView>

        {/* YouTube channel CTA */}
        <FadeInView delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <a 
              href="https://www.youtube.com/@Studio-Fotz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full font-medium transition-colors group"
            >
              <Youtube className="w-5 h-5" />
              Subskrybuj nasz kanał
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </FadeInView>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <VideoLightbox
            video={currentVideos[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < currentVideos.length - 1}
          />
        )}
      </AnimatePresence>
    </section>
  );
}