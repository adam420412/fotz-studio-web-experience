import { useState, useRef, useEffect } from "react";
import { Play, Pause, Maximize2, X, Volume2, VolumeX } from "lucide-react";

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.01 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const openFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    if (fullscreenVideoRef.current) fullscreenVideoRef.current.pause();
    setIsFullscreen(false);
  };

  return (
    <>
      <section ref={containerRef} className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px]" style={{ background: "hsla(336, 71%, 27%, 0.15)" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-3 md:mb-4">
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
              Zobacz nas w akcji
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold">
              Tworzymy treści, które <span className="text-gradient">angażują</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 group">
              <img 
                src="/fotz-reel-poster.jpg" 
                alt="Fotz Studio showreel"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              
              {isInView && (
                <video
                  ref={videoRef}
                  src="/videos/fotz-reel.mp4"
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  poster="/fotz-reel-poster.jpg"
                  className="w-full h-full object-cover relative z-10"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              )}
              
              {/* Play button overlay */}
              <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <button 
                  onClick={togglePlay}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/30 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Control bar */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent z-20 transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all">
                      {isPlaying ? <Pause className="w-4 h-4 text-foreground" /> : <Play className="w-4 h-4 text-foreground ml-0.5" fill="currentColor" />}
                    </button>
                    <button onClick={toggleMute} className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all">
                      {isMuted ? <VolumeX className="w-4 h-4 text-foreground" /> : <Volume2 className="w-4 h-4 text-foreground" />}
                    </button>
                  </div>
                  <button onClick={openFullscreen} className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all">
                    <Maximize2 className="w-4 h-4 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
            
            <p className="text-center mt-6 text-muted-foreground">
              Realizacja dla Lech Poznań • Enea Stadion
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center" onClick={closeFullscreen}>
          <button className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" onClick={closeFullscreen}>
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="w-full max-w-6xl mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <video ref={fullscreenVideoRef} src="/videos/fotz-reel.mp4" autoPlay loop playsInline controls className="w-full h-full object-contain bg-black" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
