import { useEffect, useRef, useState } from 'react';
import CertificateCard from './CertificateCard';

export default function CertificatesMarquee({ items, onPreview }) {
  const marqueeRef = useRef(null);
  const sourceGroupRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    function updateTrack() {
      const sourceWidth = sourceGroupRef.current?.getBoundingClientRect().width || 0;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const pixelsPerSecond = window.innerWidth <= 760 ? 28 : 34;
      const duration = sourceWidth > 0 ? sourceWidth / pixelsPerSecond : 0;

      if (marqueeRef.current) {
        marqueeRef.current.style.setProperty('--certificates-loop-distance', `${sourceWidth}px`);
        marqueeRef.current.style.setProperty('--certificates-duration', `${duration.toFixed(2)}s`);
      }

      setAnimated(!reducedMotion && sourceWidth > 0);
    }

    updateTrack();
    window.addEventListener('resize', updateTrack);

    return () => window.removeEventListener('resize', updateTrack);
  }, [items.length]);

  return (
    <div className="certificate-marquee">
      <div className={`certificates-track${animated ? ' is-animated' : ''}`} ref={marqueeRef}>
        <div className="certificates-group" ref={sourceGroupRef}>
          {items.map((item) => (
            <CertificateCard compact item={item} key={item.id} onPreview={onPreview} />
          ))}
        </div>

        {[0, 1].map((groupIndex) => (
          <div className="certificates-group" aria-hidden="true" key={groupIndex}>
            {items.map((item) => (
              <CertificateCard compact hidden item={item} key={`${groupIndex}-${item.id}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
