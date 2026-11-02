import { useState, type VideoHTMLAttributes } from 'react';

type InlineVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src'> & { src: string };

/** Native mobile controls, a recoverable error state and one playing film at a time. */
export function InlineVideo({ src, className = '', onPlay, onError, ...props }: InlineVideoProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  if (failedSource === src) return <div role="alert" className={`${className} flex flex-col items-center justify-center gap-2 bg-black p-4 text-center text-sm text-white`}>
    <p>Nie udało się wczytać filmu.</p>
    <button type="button" className="min-h-11 px-3 underline underline-offset-4" onClick={() => setFailedSource(null)}>Spróbuj ponownie</button>
    <a href={src} target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center px-3 underline underline-offset-4">Otwórz film osobno<span className="sr-only"> (nowa karta)</span></a>
  </div>;
  return <video {...props} src={src} className={className} controls playsInline preload="none"
    onPlay={event => {
      document.querySelectorAll('video').forEach(video => {
        if (video !== event.currentTarget && !video.paused) video.pause();
      });
      onPlay?.(event);
    }}
    onError={event => { setFailedSource(src); onError?.(event); }}
  >Twoja przeglądarka nie obsługuje filmu. <a href={src}>Otwórz plik wideo</a>.</video>;
}
