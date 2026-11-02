import { useRef } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { InlineVideo } from '@/components/InlineVideo';

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

export function VideoLightbox({ isOpen, onClose, videoSrc, title = 'Film FOTZ Studio' }: VideoLightboxProps) {
  const returnFocus = useRef<HTMLElement | null>(null);
  return <Dialog.Root open={isOpen} onOpenChange={open => { if (!open) onClose(); }}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm" />
      <Dialog.Content onOpenAutoFocus={() => { returnFocus.current = document.activeElement as HTMLElement; }} onCloseAutoFocus={event => { event.preventDefault(); returnFocus.current?.focus(); }} aria-describedby={undefined} className="fixed left-1/2 top-1/2 z-[121] w-[calc(100%_-_1.5rem)] max-w-5xl max-h-[94dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-white/15 bg-[#101010] p-3 sm:p-4 text-white shadow-2xl focus:outline-none">
        <Dialog.Title className="mb-4 pr-12 text-lg font-medium">{title}</Dialog.Title>
        <Dialog.Close asChild><button type="button" aria-label="Zamknij film" className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><X aria-hidden="true" className="h-5 w-5" /></button></Dialog.Close>
        <InlineVideo key={videoSrc} src={videoSrc} autoPlay aria-label={title} className="max-h-[calc(100dvh-12rem)] w-full rounded-lg bg-black object-contain" />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
