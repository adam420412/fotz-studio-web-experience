import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean; // For above-the-fold images
  quality?: number;
}

/**
 * Optimized image component with:
 * - Lazy loading (unless priority=true)
 * - WebP format detection
 * - Blur placeholder
 * - Progressive loading
 */
export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width,
  height,
  priority = false,
  quality = 80,
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [supportsWebP, setSupportsWebP] = useState(true);
  const imgRef = useRef<HTMLDivElement>(null);

  // Check WebP support
  useEffect(() => {
    const checkWebP = async () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setSupportsWebP(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };
    checkWebP();
  }, []);

  // Lazy loading intersection observer
  useEffect(() => {
    if (priority) return;

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

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP path if applicable
  const getOptimizedSrc = (originalSrc: string): string => {
    // If already WebP or external URL, return as-is
    if (originalSrc.endsWith('.webp') || originalSrc.startsWith('http')) {
      return originalSrc;
    }
    
    // For local images, check if WebP version exists
    // In production, you'd have a build step that generates WebP versions
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
      }}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-muted animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {/* Picture element with WebP fallback */}
      {isInView && (
        <picture>
          {/* WebP source if supported and available */}
          {supportsWebP && !src.startsWith('http') && (
            <source 
              srcSet={optimizedSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')} 
              type="image/webp" 
            />
          )}
          
          {/* Fallback to original format */}
          <img
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            {...props}
          />
        </picture>
      )}
    </div>
  );
}

// Legacy export for backward compatibility
export function LazyImage({ 
  src, 
  alt, 
  className = "", 
  ...props 
}: Omit<OptimizedImageProps, 'priority'>) {
  return <OptimizedImage src={src} alt={alt} className={className} {...props} />;
}
