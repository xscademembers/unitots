import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_MEDIA, type GalleryMediaItem } from '../constants';

/** Placeholder ratio until media loads (1:1) */
const PLACEHOLDER_RATIO = '1 / 1';

interface GalleryItemProps {
  item: GalleryMediaItem;
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, index }) => {
  const [aspectRatio, setAspectRatio] = useState<string>(PLACEHOLDER_RATIO);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const closeFullscreen = useCallback(() => setIsFullscreen(false), []);

  React.useEffect(() => {
    if (!isFullscreen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFullscreen();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isFullscreen, closeFullscreen]);

  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setAspectRatio(`${img.naturalWidth} / ${img.naturalHeight}`);
    }
  }, []);

  const onVideoLoadedMetadata = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.videoWidth && video.videoHeight) {
      setAspectRatio(`${video.videoWidth} / ${video.videoHeight}`);
    }
  }, []);

  const openFullscreen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFullscreen(true);
  };

  const closeFullscreenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    closeFullscreen();
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '24px' }}
        transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
        className="relative w-full overflow-hidden bg-gray-100 break-inside-avoid rounded-xl sm:rounded-2xl"
        style={{ aspectRatio }}
      >
        {item.type === 'image' ? (
          <img
            src={item.url}
            alt={`Gallery image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain"
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={onImageLoad}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/800x600/F0E6FF/8B5CF6?text=Image+${index + 1}`;
            }}
          />
        ) : (
          <video
            src={item.url}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-contain"
            aria-label={`Gallery video ${index + 1}`}
            onLoadedMetadata={onVideoLoadedMetadata}
          >
            Your browser does not support the video tag.
          </video>
        )}
        <button
          type="button"
          onClick={openFullscreen}
          className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
          aria-label="View full screen"
        >
          <Maximize2 size={20} className="sm:w-6 sm:h-6" />
        </button>
      </motion.article>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Full screen view"
          onClick={closeFullscreenClick}
        >
          <button
            type="button"
            onClick={closeFullscreenClick}
            className="absolute top-4 right-4 z-[101] p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Close full screen"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-[95vw] max-h-[95vh] w-full flex items-center justify-center rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={`Gallery image ${index + 1} (full screen)`}
                className="max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={item.url}
                controls
                playsInline
                autoPlay
                className="max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-xl"
                aria-label={`Gallery video ${index + 1} (full screen)`}
                onClick={(e) => e.stopPropagation()}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Gallery: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <header className="bg-pastel-lavender py-8 sm:py-10 md:py-12 lg:py-16 text-center px-4">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
          Our Moments
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2 sm:px-0 max-w-xl mx-auto">
          Glimpses of joy, learning, and fun at UNITOTS.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-20">
        <div
          className="gallery-masonry columns-1 sm:columns-2 lg:columns-3 w-full"
          style={{ columnGap: '20px' }}
        >
          {GALLERY_MEDIA.map((item, idx) => (
            <GalleryItem key={`${item.type}-${idx}-${item.url}`} item={item} index={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
