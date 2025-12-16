import { useState, useEffect, useRef, VideoHTMLAttributes } from "react";

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export function LazyVideo({ 
  src, 
  poster,
  className = "", 
  ...props 
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={videoRef} className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      {isInView && (
        <video
          onLoadedData={() => setIsLoaded(true)}
          className={`transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
