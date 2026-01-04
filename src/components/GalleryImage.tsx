import { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  onClick?: () => void;
}

export function GalleryImage({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "auto",
  onClick 
}: GalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px", threshold: 0.01 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden rounded-xl ${aspectClasses[aspectRatio]} ${className}`}
      onClick={onClick}
    >
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } ${onClick ? "cursor-pointer hover:scale-105" : ""}`}
        />
      )}
    </div>
  );
}
