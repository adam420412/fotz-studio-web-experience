import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX, Play, Pause, Maximize2, Minimize2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

export const VideoLightbox = ({ isOpen, onClose, videoSrc, title }: VideoLightboxProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "m":
          toggleMute();
          break;
        case "f":
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isPlaying, isMuted]);

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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onClick={(e) => {
            if (e.target === e.currentTarget) togglePlay();
          }}
        >
          {/* Close button */}
          <motion.button
            className={cn(
              "absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground hover:bg-background/40 transition-all",
              showControls ? "opacity-100" : "opacity-0"
            )}
            onClick={handleClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Title */}
          {title && (
            <motion.div
              className={cn(
                "absolute top-4 left-4 z-50 px-4 py-2 rounded-lg bg-background/20 backdrop-blur-sm border border-border/30 transition-opacity",
                showControls ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="text-foreground font-medium">{title}</span>
            </motion.div>
          )}

          {/* Video container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          >
            <video
              ref={videoRef}
              src={videoSrc}
              className="max-w-full max-h-full object-contain rounded-lg"
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* Center play/pause indicator */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/50">
                    <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bottom controls */}
          <motion.div
            className={cn(
              "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity",
              showControls ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Progress bar */}
            <div
              className="w-full h-1 bg-foreground/20 rounded-full cursor-pointer mb-4 group"
              onClick={handleProgressClick}
            >
              <motion.div
                className="h-full bg-primary rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-primary/50" />
              </motion.div>
            </div>

            {/* Control buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <motion.button
                  className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                  onClick={togglePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-foreground" />
                  ) : (
                    <Play className="w-5 h-5 text-foreground ml-0.5" />
                  )}
                </motion.button>

                {/* Mute/Unmute */}
                <motion.button
                  className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                  onClick={toggleMute}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </motion.button>
              </div>

              {/* Keyboard shortcuts hint */}
              <div className="hidden md:flex items-center gap-4 text-foreground/50 text-sm">
                <span>Spacja - play/pause</span>
                <span>M - mute</span>
                <span>F - fullscreen</span>
                <span>Esc - zamknij</span>
              </div>

              {/* Fullscreen */}
              <motion.button
                className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                onClick={toggleFullscreen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5 text-foreground" />
                ) : (
                  <Maximize2 className="w-5 h-5 text-foreground" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
