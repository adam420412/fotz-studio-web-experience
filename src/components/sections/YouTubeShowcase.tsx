import { motion } from "framer-motion";
import { Play, Youtube, Podcast, Video, Volume2, VolumeX, Pause, Loader2 } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { useState, useRef } from "react";

export function YouTubeShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPodcastLoading, setIsPodcastLoading] = useState(true);
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
          style={{ background: "hsla(336, 71%, 27%, 0.1)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
              Nasze produkcje
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
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
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
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Play/Pause overlay */}
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

              {/* Sound control button */}
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

        {/* Podcast section */}
        <FadeInView delay={0.2}>
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
              {/* Loading state */}
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
    </section>
  );
}
