import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

// Responsive breakpoints for srcset
const RESPONSIVE_WIDTHS = [320, 480, 640, 768, 1024, 1280, 1536];

/**
 * Optimized image component with:
 * - Lazy loading (unless priority=true)
 * - WebP format with fallback
 * - Responsive srcset for different screen sizes
 * - Blur placeholder
 * - Native lazy loading + intersection observer
 */
export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width,
  height,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Lazy loading intersection observer
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: "300px", // Load 300px before entering viewport
        threshold: 0.01 
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Check if this is an imported asset (blob URL or data URL)
  const isImportedAsset = src.startsWith("blob:") || 
                          src.startsWith("data:") || 
                          src.includes("/@fs/") ||
                          src.includes("/node_modules/");

  // Check if external URL
  const isExternalUrl = src.startsWith("http://") || src.startsWith("https://");

  // Generate WebP path
  const getWebPSrc = (originalSrc: string): string => {
    if (isImportedAsset || isExternalUrl) return originalSrc;
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  // Generate srcset for responsive images
  const generateSrcSet = (imageSrc: string): string | undefined => {
    if (isImportedAsset || isExternalUrl) return undefined;
    
    return RESPONSIVE_WIDTHS
      .map(w => `${imageSrc} ${w}w`)
      .join(", ");
  };

  const webpSrc = getWebPSrc(src);
  const srcSet = generateSrcSet(src);

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
      
      {/* Picture element with WebP and responsive srcset */}
      {isInView && (
        <picture>
          {/* WebP source - browser tries this first if supported */}
          {!isImportedAsset && !isExternalUrl && webpSrc !== src && (
            <source 
              srcSet={generateSrcSet(webpSrc) || webpSrc}
              sizes={sizes}
              type="image/webp" 
            />
          )}
          
          {/* Original format with responsive srcset */}
          <img
            src={src}
            srcSet={srcSet}
            sizes={srcSet ? sizes : undefined}
            alt={alt}
            width={width}
            height={height}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
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
