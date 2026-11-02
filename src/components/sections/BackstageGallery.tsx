import * as Dialog from '@radix-ui/react-dialog';
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Play } from "lucide-react";

import backstage1 from "@/assets/backstage/backstage-1.png";
import backstage2 from "@/assets/backstage/backstage-2.png";
import backstage3 from "@/assets/backstage/backstage-3.png";
import backstage4 from "@/assets/backstage/backstage-4.png";
import backstage5 from "@/assets/backstage/backstage-5.png";
import backstage6 from "@/assets/backstage/backstage-6.png";
import sessionFinal1 from "@/assets/backstage/session-final-1.png";
import sessionFinal2 from "@/assets/backstage/session-final-2.png";

const backstageImages = [
  { src: backstage1, title: "Przygotowanie kadru", type: "backstage" },
  { src: sessionFinal1, title: "Efekt końcowy", type: "final" },
  { src: backstage2, title: "Praca na planie", type: "backstage" },
  { src: backstage3, title: "Kierownik planu", type: "backstage" },
  { src: sessionFinal2, title: "Zdjęcie produktowe", type: "final" },
  { src: backstage4, title: "Przygotowanie oświetlenia", type: "backstage" },
  { src: backstage5, title: "Ustawienie sceny", type: "backstage" },
  { src: backstage6, title: "Koordynacja ekipy", type: "backstage" },
];

const backstageVideo = {
  youtubeId: "YXeR6AFlyuQ",
  title: "Backstage z produkcji",
  thumbnail: backstage5
};

interface BackstageGalleryProps {
  title?: string;
  subtitle?: string;
  showOnlyBackstage?: boolean;
  maxImages?: number;
  showVideo?: boolean;
}

export const BackstageGallery = ({ 
  title = "Backstage z realizacji", 
  subtitle = "Zobacz jak wygląda praca nad profesjonalną sesją fotograficzną i produkcją filmową",
  showOnlyBackstage = false,
  maxImages = 8,
  showVideo = true
}: BackstageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideoLightbox, setShowVideoLightbox] = useState(false);
  const videoTrigger = useRef<HTMLButtonElement>(null);

  const imagesToShow = showOnlyBackstage 
    ? backstageImages.filter(img => img.type === "backstage").slice(0, maxImages)
    : backstageImages.slice(0, maxImages);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setShowVideoLightbox(false);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagesToShow.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === imagesToShow.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <>
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="container-wide px-4 sm:px-6 md:px-12">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
              <Camera className="w-4 h-4" />
              Za kulisami
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
              {title.split(" ").map((word, i) => 
                i === title.split(" ").length - 1 
                  ? <span key={i} className="text-gradient">{word}</span> 
                  : <span key={i}>{word} </span>
              )}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              {subtitle}
            </p>
          </div>

          {/* Video + Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Video Thumbnail */}
            {showVideo && (
              <button ref={videoTrigger} type="button" aria-label={`Odtwórz film: ${backstageVideo.title}`}
                className="group relative overflow-hidden rounded-xl col-span-2 row-span-2 cursor-pointer ring-2 ring-primary/30"
                onClick={() => setShowVideoLightbox(true)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={backstageVideo.thumbnail}
                    alt={backstageVideo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Play className="w-3 h-3 text-primary" />
                    <span className="text-[10px] sm:text-xs text-primary font-medium uppercase">
                      Video Backstage
                    </span>
                  </div>
                  <h3 className="text-white text-sm sm:text-base font-semibold">{backstageVideo.title}</h3>
                </div>
              </button>
            )}

            {/* Images */}
            {imagesToShow.slice(0, showVideo ? 6 : maxImages).map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  image.type === "final" 
                    ? "ring-2 ring-primary/30" 
                    : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 mb-1">
                      {image.type === "final" ? (
                        <Sparkles className="w-3 h-3 text-primary" />
                      ) : (
                        <Camera className="w-3 h-3 text-primary" />
                      )}
                      <span className="text-[10px] sm:text-xs text-primary font-medium uppercase">
                        {image.type === "final" ? "Efekt końcowy" : "Backstage"}
                      </span>
                    </div>
                    <h3 className="text-white text-xs sm:text-sm font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Zamknij galerię"
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              aria-label="Poprzednie zdjęcie"
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              aria-label="Następne zdjęcie"
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img loading="lazy"
                src={imagesToShow[currentIndex].src}
                alt={imagesToShow[currentIndex].title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <div className="flex items-center gap-2 mb-1">
                  {imagesToShow[currentIndex].type === "final" ? (
                    <Sparkles className="w-4 h-4 text-primary" />
                  ) : (
                    <Camera className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-xs text-primary font-medium uppercase">
                    {imagesToShow[currentIndex].type === "final" ? "Efekt końcowy" : "Backstage"}
                  </span>
                </div>
                <h3 className="text-white text-lg font-semibold">{imagesToShow[currentIndex].title}</h3>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentIndex + 1} / {imagesToShow.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox */}
      <Dialog.Root open={showVideoLightbox} onOpenChange={setShowVideoLightbox}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[120] bg-black/90" />
          <Dialog.Content onCloseAutoFocus={event => { event.preventDefault(); videoTrigger.current?.focus(); }} aria-describedby={undefined} className="fixed left-1/2 top-1/2 z-[121] w-[calc(100%_-_1.5rem)] max-w-5xl max-h-[94dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-black p-3 sm:p-4 text-white">
            <Dialog.Title className="mb-4 pr-12 font-medium">{backstageVideo.title}</Dialog.Title>
            <Dialog.Close asChild><button type="button" aria-label="Zamknij film" className="absolute top-2 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><X className="h-5 w-5" aria-hidden="true" /></button></Dialog.Close>
            <div className="relative aspect-video max-h-[calc(100dvh-12rem)]">
              <iframe src={`https://www.youtube.com/embed/${backstageVideo.youtubeId}?autoplay=1&playsinline=1`} title={backstageVideo.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full rounded-xl" />
            </div>
            <a href={`https://www.youtube.com/watch?v=${backstageVideo.youtubeId}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center underline underline-offset-4 text-sm">Obejrzyj na YouTube<span className="sr-only"> (nowa karta)</span></a>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
