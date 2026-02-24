import { useState, useCallback, useEffect, memo } from 'react';
import { cn } from '@/utils/cn';

interface SmartImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackGradient?: string;
  fallbackContent?: React.ReactNode;
  loading?: 'lazy' | 'eager';
}

// YouTube thumbnail quality chain — maxresdefault often 404s, so we cascade down
const YT_QUALITIES = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', 'default'];

function parseYTThumb(url: string) {
  const m = url.match(/img\.youtube\.com\/vi\/([^/]+)\/([^.]+)\./);
  return m ? { id: m[1], quality: m[2] } : null;
}

/**
 * SmartImage — Production-grade image component
 * 
 * Features:
 * - YouTube thumbnail 404 fallback chain (maxresdefault → sddefault → hqdefault → mqdefault → default)
 * - referrerPolicy="no-referrer" to prevent ERR_BLOCKED_BY_ORB
 * - loading="lazy" + decoding="async" for performance
 * - Gradient fallback with optional content (icon/text)
 * - Smooth fade-in transition
 * - Zero console errors on image failures
 */
export const SmartImage = memo(function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  fallbackGradient = 'from-gray-700 to-gray-800',
  fallbackContent,
  loading = 'lazy',
}: SmartImageProps) {
  const [activeSrc, setActiveSrc] = useState(src || null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(!src);

  // Reset when src prop changes
  useEffect(() => {
    if (src) {
      setActiveSrc(src);
      setLoaded(false);
      setFailed(false);
    } else {
      setActiveSrc(null);
      setLoaded(false);
      setFailed(true);
    }
  }, [src]);

  const handleError = useCallback(() => {
    if (!activeSrc) {
      setFailed(true);
      return;
    }

    // YouTube thumbnail fallback chain
    const yt = parseYTThumb(activeSrc);
    if (yt) {
      const idx = YT_QUALITIES.indexOf(yt.quality);
      if (idx >= 0 && idx < YT_QUALITIES.length - 1) {
        // Try next lower quality — silent, no console error
        const next = YT_QUALITIES[idx + 1];
        setActiveSrc(`https://img.youtube.com/vi/${yt.id}/${next}.jpg`);
        setLoaded(false);
        return;
      }
    }

    // All fallbacks exhausted — show gradient
    setFailed(true);
  }, [activeSrc]);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Gradient fallback — always rendered as background */}
      <div className={cn(
        'absolute inset-0 flex items-center justify-center bg-gradient-to-br',
        fallbackGradient
      )}>
        {/* Fallback content (icon) — visible when image not loaded or failed */}
        {fallbackContent && (
          <div className={cn(
            'transition-opacity duration-300',
            loaded && !failed ? 'opacity-0' : 'opacity-100'
          )}>
            {fallbackContent}
          </div>
        )}
      </div>

      {/* Image — only rendered if we have a valid src */}
      {activeSrc && !failed && (
        <img
          src={activeSrc}
          alt={alt}
          loading={loading}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
            imgClassName
          )}
        />
      )}
    </div>
  );
});
