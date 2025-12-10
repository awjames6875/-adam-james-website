'use client';

import { useState, useEffect } from 'react';

export type Viewport = 'mobile' | 'tablet' | 'desktop';

/**
 * Hook to detect current viewport size
 * Returns 'mobile' (<768px), 'tablet' (768-1023px), or 'desktop' (≥1024px)
 * Updates on window resize
 */
export function useResponsiveViewport(): Viewport {
  const [viewport, setViewport] = useState<Viewport>('desktop');

  useEffect(() => {
    // Determine initial viewport
    const determineViewport = (): Viewport => {
      if (typeof window === 'undefined') return 'desktop';

      const width = window.innerWidth;
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      return 'desktop';
    };

    // Set initial viewport
    setViewport(determineViewport());

    // Handle resize
    const handleResize = () => {
      setViewport(determineViewport());
    };

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewport;
}
