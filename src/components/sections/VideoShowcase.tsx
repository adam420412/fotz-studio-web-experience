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
      <section
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ background: "hsl(var(--background))" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-end mb-12 md:mb-16">
            <div>
              <span className="dv-eyebrow mb-6 inline-block">Showreel</span>
              <h2
                className="font-geist"
                style={{
                  fontSize: "clamp(40px, 5vw, 88px)",
                  letterSpacing: "-0.045em",
                  lineHeight: 0.98,
                  fontWeight: 400,
                }}
              >
                Tworzymy treści,
                <br />
                które <span className="dv-text-grad italic">angażują.</span>
              </h2>
            </div>
            <div className="dv-mono uppercase tracking-[0.14em] text-[11px] text-[color:var(--dv-fg-muted)]">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-md ml-auto">
                <div>
                  <div className="opacity-60 mb-1">Realizacja</div>
                  <div className="text-foreground normal-case tracking-normal text-sm">
                    Enea Stadion Poznań
                  </div>
                </div>
                <div>
                  <div className="opacity-60 mb-1">Klient</div>
                  <div className="text-foreground normal-case tracking-normal text-sm">
                    Lech Poznań
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative aspect-video overflow-hidden group"
            style={{
              border: "1px solid var(--dv-hair)",
              borderRadius: 24,
            }}
          >
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

            <div
              className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                style={{
                  background: "var(--dv-brand-grad)",
                  boxShadow: "0 8px 28px rgba(120,20,60,0.45)",
                }}
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" strokeWidth={1.5} />
              </button>
            </div>

            <div
              className={`absolute bottom-0 left-0 right-0 p-4 z-20 transition-opacity duration-300 ${
                isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-white" strokeWidth={1.5} />
                    ) : (
                      <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" strokeWidth={1.5} />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" strokeWidth={1.5} />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
                <button
                  onClick={openFullscreen}
                  aria-label="Fullscreen"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
                >
                  <Maximize2 className="w-4 h-4 text-white" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <button
            aria-label="Close fullscreen"
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={closeFullscreen}
          >
            <X className="w-6 h-6 text-white" strokeWidth={1.5} />
          </button>
          <div className="w-full max-w-6xl mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <video
                ref={fullscreenVideoRef}
                src="/videos/fotz-reel.mp4"
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-full object-contain bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
