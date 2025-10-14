'use client';

import { useState, useEffect } from 'react';

export function usePerformanceMode() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Mobil algılama
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Reduced motion algılama
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // İlk kontrol
    checkMobile();

    // Resize listener
    window.addEventListener('resize', checkMobile);
    mediaQuery.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', (e) => setPrefersReducedMotion(e.matches));
    };
  }, []);

  // Performans modu: mobil VEYA reduced motion tercihi
  const shouldReduceAnimations = isMobile || prefersReducedMotion;

  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceAnimations,
  };
}
