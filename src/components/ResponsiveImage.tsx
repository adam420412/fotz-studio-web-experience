import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
}

/**
 * Responsive image component with:
 * - Automatic srcset generation for different screen sizes
 * - WebP format with fallback
 * - Lazy loading with intersection observer
 * - Blur placeholder during load
 * - Native aspect ratio support
 */
export function ResponsiveImage({
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  aspectRatio,
  className = "",
  ...props
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
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
        rootMargin: "300px", // Start loading 300px before entering viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Generate srcset for responsive images
  const generateSrcSet = (imageSrc: string): string => {
    // For external URLs, just return the original
    if (imageSrc.startsWith("http")) {
      return imageSrc;
    }

    // For local images, we'll use the original as the base
    // In a real setup, you'd have pre-generated sizes
    const widths = [320, 640, 768, 1024, 1280, 1536];
    
    // Create srcset entries
    return widths
      .map((w) => `${imageSrc} ${w}w`)
      .join(", ");
  };

  // Check if image is from assets (imported) or public folder
  const isImportedAsset = src.includes("/assets/") || src.startsWith("data:");
  
  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspectRatio,
      }}
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
          {/* WebP source - browser will try this first if supported */}
          {!isImportedAsset && (
            <source
              srcSet={src.replace(/\.(jpg|jpeg|png)$/i, ".webp")}
              type="image/webp"
            />
          )}

          {/* Original format fallback */}
          <img loading="lazy"
            src={src}
            srcSet={!isImportedAsset ? generateSrcSet(src) : undefined}
            sizes={!isImportedAsset ? sizes : undefined}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
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
 * Portfolio-specific optimized image component
 * Preconfigured for typical portfolio image sizes
 */
export function PortfolioImage({
  src,
  alt,
  className = "",
  ...props
}: ResponsiveImageProps) {
  return (
    <ResponsiveImage
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
 * Hero/Banner optimized image component
 * For large above-the-fold images
 */
export function HeroImage({
  src,
  alt,
  className = "",
  ...props
}: ResponsiveImageProps) {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      sizes="100vw"
      priority={true}
      className={className}
      {...props}
    />
  );
}
