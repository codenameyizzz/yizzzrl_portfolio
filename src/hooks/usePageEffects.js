import { useEffect } from 'react';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function usePageEffects(pathname) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = Array.from(document.querySelectorAll('.reveal'));
    const movingItems = Array.from(document.querySelectorAll('[data-speed]'));
    const motionState = new Map();
    let lastScrollY = window.scrollY;
    let ticking = false;
    let motionFrame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    if (reducedMotion) {
      document.documentElement.style.setProperty('--progress', '0');

      return () => observer.disconnect();
    }

    movingItems.forEach((item) => {
      motionState.set(item, {
        currentY: 0,
        currentRotate: 0,
        targetY: 0,
        targetRotate: 0
      });
    });

    function animateMotion() {
      let shouldContinue = false;

      motionState.forEach((state, item) => {
        state.currentY += (state.targetY - state.currentY) * 0.085;
        state.currentRotate += (state.targetRotate - state.currentRotate) * 0.085;

        if (
          Math.abs(state.targetY - state.currentY) > 0.08 ||
          Math.abs(state.targetRotate - state.currentRotate) > 0.02
        ) {
          shouldContinue = true;
        }

        item.style.setProperty('--parallax-y', `${state.currentY.toFixed(2)}px`);
        item.style.setProperty('--parallax-rotate', `${state.currentRotate.toFixed(2)}deg`);
      });

      motionFrame = shouldContinue ? window.requestAnimationFrame(animateMotion) : 0;
    }

    function updateScrollEffects() {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

      document.documentElement.style.setProperty('--progress', progress.toFixed(4));
      document.body.dataset.direction = scrollY >= lastScrollY ? 'down' : 'up';

      movingItems.forEach((item) => {
        const speed = Number(item.dataset.speed || 0);
        const rect = item.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
        const state = motionState.get(item);

        if (!state) {
          return;
        }

        state.targetY = clamp(centerOffset * speed * -0.12, -90, 90);
        state.targetRotate = item.classList.contains('project-card')
          ? clamp(centerOffset * speed * -0.008, -5, 5)
          : 0;
      });

      if (!motionFrame) {
        motionFrame = window.requestAnimationFrame(animateMotion);
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
    updateScrollEffects();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', requestTick);

      if (motionFrame) {
        window.cancelAnimationFrame(motionFrame);
      }
    };
  }, [pathname]);
}
