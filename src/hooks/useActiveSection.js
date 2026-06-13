import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SECTION_IDS = ['about', 'experience', 'achievements', 'contact'];

export function useActiveSection() {
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return activeSection;
}
