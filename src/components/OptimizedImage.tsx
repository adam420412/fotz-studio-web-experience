import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string;
  fallbackSrc?: string;
}

/**
 * Optimized image component with:
 * - WebP format detection and serving
 * - Automatic srcset generation for responsive images
 * - Lazy loading with intersection observer
 * - Blur placeholder during load
 * - Native aspect ratio support
 */
export function OptimizedImage({
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  aspectRatio,
  className = "",
  fallbackSrc,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy loading with intersection observer
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
        rootMargin: "300px",
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Generate WebP path from original
  const getWebPPath = (imagePath: string): string => {
    return imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  };

  // Generate srcset for responsive images
  const generateSrcSet = (imageSrc: string): string => {
    // For bundled assets (with hash), just return original
    if (imageSrc.includes("assets/") && imageSrc.includes("-")) {
      return imageSrc;
    }
    
    // For public folder images
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths.map((w) => `${imageSrc} ${w}w`).join(", ");
  };

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc) {
      setIsLoaded(false);
    }
  };

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;
  const isImportedAsset = src.includes("/assets/") || src.startsWith("data:");
  const webpSrc = getWebPPath(imageSrc);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-card animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Render image when in view */}
      {isInView && (
        <picture>
          {/* WebP source - browser will try this first */}
          {!isImportedAsset && (
            <source
              srcSet={webpSrc}
              type="image/webp"
            />
          )}

          {/* Original format fallback */}
          <img
            src={imageSrc}
            srcSet={!isImportedAsset ? generateSrcSet(imageSrc) : undefined}
            sizes={!isImportedAsset ? sizes : undefined}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            {...props}
          />
        </picture>
      )}
    </div>
  );
}

/**
 * Portfolio image with optimized defaults
 */
export function PortfolioImage({
  src,
  alt,
  className = "",
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
      aspectRatio="16/10"
      className={`rounded-lg ${className}`}
      {...props}
    />
  );
}

/**
 * Hero/Banner image with priority loading
 */
export function HeroImage({
  src,
  alt,
  className = "",
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      sizes="100vw"
      priority={true}
      className={className}
      {...props}
    />
  );
}

/**
 * Client logo with small sizes
 */
export function ClientLogo({
  src,
  alt,
  className = "",
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      sizes="(max-width: 640px) 80px, 120px"
      className={className}
      {...props}
    />
  );
}
