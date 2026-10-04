import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; category?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const ImageLightbox = ({ isOpen, onClose, images, currentIndex, onNavigate }: ImageLightboxProps) => {
  const opener = useRef<HTMLElement | null>(null);
  const currentImage = images[currentIndex];
  const navigate = (direction: number) => onNavigate((currentIndex + direction + images.length) % images.length);
  const controlClass = "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <Dialog.Root open={isOpen && Boolean(currentImage)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/95" />
        <Dialog.Content
          className="fixed inset-x-3 top-1/2 z-[101] mx-auto flex max-h-[calc(100dvh-24px)] max-w-6xl -translate-y-1/2 flex-col gap-3 rounded-xl bg-neutral-950 p-3 sm:p-5 text-white outline-none"
          onOpenAutoFocus={() => { opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null; }}
          onCloseAutoFocus={(event) => { event.preventDefault(); opener.current?.focus({ preventScroll: true }); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              navigate(event.key === "ArrowRight" ? 1 : -1);
            }
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="text-sm font-medium">Galeria FOTZ Studio</Dialog.Title>
            <Dialog.Close className={controlClass} aria-label="Zamknij galerię"><X className="h-5 w-5" aria-hidden="true" /></Dialog.Close>
          </div>
          {currentImage && <img src={currentImage.src} alt={currentImage.alt} className="min-h-0 w-full flex-1 object-contain max-h-[calc(100dvh-230px)]" />}
          <div className="flex items-center justify-between gap-3">
            {images.length > 1 && <button type="button" className={controlClass} aria-label="Poprzednie zdjęcie" onClick={() => navigate(-1)}><ChevronLeft aria-hidden="true" className="h-5 w-5" /></button>}
            <div className="min-w-0 flex-1 text-center" aria-live="polite" aria-atomic="true">
              <p className="text-sm text-white">{currentImage?.alt}</p>
              <Dialog.Description className="mt-1 text-xs text-white/70">{currentImage?.category ? `${currentImage.category} · ` : ""}Zdjęcie {currentIndex + 1} z {images.length}</Dialog.Description>
            </div>
            {images.length > 1 && <button type="button" className={controlClass} aria-label="Następne zdjęcie" onClick={() => navigate(1)}><ChevronRight aria-hidden="true" className="h-5 w-5" /></button>}
          </div>
          <p className="hidden sm:block text-center text-xs text-white/60">Strzałki ← → zmieniają zdjęcie. Esc zamyka galerię.</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
