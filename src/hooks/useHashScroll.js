import { useEffect } from 'react';

export function useHashScroll(location) {
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);

        if (target) {
          target.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
          });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.key, location.pathname]);
}
