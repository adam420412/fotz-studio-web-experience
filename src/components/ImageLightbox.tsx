import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; category?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const ImageLightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: ImageLightboxProps) => {
  const currentImage = images[currentIndex];

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          goNext();
          break;
        case "ArrowLeft":
          goPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goNext, goPrev, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground hover:bg-background/40 transition-all"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Navigation - Previous */}
          {images.length > 1 && (
            <motion.button
              className="absolute left-4 z-50 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground hover:bg-background/40 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}

          {/* Navigation - Next */}
          {images.length > 1 && (
            <motion.button
              className="absolute right-4 z-50 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground hover:bg-background/40 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}

          {/* Image container */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-foreground font-medium">{currentImage.alt}</p>
              {currentImage.category && (
                <p className="text-muted-foreground text-sm mt-1">{currentImage.category}</p>
              )}
              <p className="text-muted-foreground/60 text-xs mt-2">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>

          {/* Keyboard hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 text-foreground/50 text-sm">
            <span>← → nawigacja</span>
            <span>Esc - zamknij</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
