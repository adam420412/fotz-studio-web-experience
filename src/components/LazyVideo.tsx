import { useState, useEffect, useRef, VideoHTMLAttributes } from "react";
import { Play } from "lucide-react";

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  title?: string;
  showControls?: boolean;
}

export function LazyVideo({ 
  src, 
  poster,
  title,
  showControls = true,
  className = "", 
  ...props 
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: "200px",
        threshold: 0.01 
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    if (videoElementRef.current) {
      videoElementRef.current.play();
      setIsPlaying(true);
    }
  };

  // Auto-detect poster based on video name if not provided
  const getPoster = () => {
    if (poster) return poster;
    
    // Try to match video name to a poster
    if (src.includes('enea-stadion')) return '/videos/enea-stadion-poster.jpg';
    if (src.includes('skaland') || src.includes('real-estate')) return '/videos/real-estate-poster.jpg';
    if (src.includes('social') || src.includes('autospa')) return '/videos/social-media-poster.jpg';
    
    return undefined;
  };

  const videoPoster = getPoster();

  return (
    <div ref={videoRef} className={`relative overflow-hidden rounded-xl ${className}`}>
      {/* Poster/Thumbnail when not playing */}
      {videoPoster && !isPlaying && (
        <div className="absolute inset-0 z-10">
          <img 
            src={videoPoster} 
            alt={title || "Video thumbnail"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Play button */}
          <button 
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </button>
          
          {/* Title */}
          {title && (
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium text-sm md:text-base">{title}</p>
            </div>
          )}
        </div>
      )}

      {/* Loading placeholder (only if no poster) */}
      {!isLoaded && !videoPoster && (
        <div className="absolute inset-0 bg-card/80 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      {isInView && (
        <video
          ref={videoElementRef}
          onLoadedData={() => setIsLoaded(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls={showControls && isPlaying}
          poster={videoPoster}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded || videoPoster ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
