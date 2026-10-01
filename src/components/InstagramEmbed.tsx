import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export function InstagramEmbed({ url, className = "" }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    } else {
      // If script already loaded, process embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, [url]);

  return (
    <div ref={containerRef} className={`instagram-embed-container ${className}`}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          borderRadius: "12px",
          margin: "0 auto",
          maxWidth: "540px",
          minWidth: "0",
          width: "100%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-h-40 text-center text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Zobacz materiał na Instagramie ↗
          </a>
        </div>
      </blockquote>
    </div>
  );
}
