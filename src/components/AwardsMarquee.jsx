import { useEffect, useRef, useState } from 'react';

function AwardCard({ item, onOpen, hidden = false }) {
  const content = (
    <>
      <img src={item.image} alt={hidden ? '' : item.alt} />
      <span className="award-overlay">
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </span>
    </>
  );

  if (hidden) {
    return (
      <div className="award-card" aria-hidden="true">
        {content}
      </div>
    );
  }

  return (
    <button
      className="award-card"
      type="button"
      onClick={() =>
        onOpen({
          image: item.image,
          imageAlt: item.alt,
          title: item.title,
          description: item.description
        })
      }
    >
      {content}
    </button>
  );
}

export default function AwardsMarquee({ items, onOpen }) {
  const marqueeRef = useRef(null);
  const sourceGroupRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    function updateTrack() {
      const sourceWidth = sourceGroupRef.current?.getBoundingClientRect().width || 0;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const pixelsPerSecond = window.innerWidth <= 760 ? 34 : 46;
      const duration = sourceWidth > 0 ? sourceWidth / pixelsPerSecond : 0;

      if (marqueeRef.current) {
        marqueeRef.current.style.setProperty('--awards-loop-distance', `${sourceWidth}px`);
        marqueeRef.current.style.setProperty('--awards-duration', `${duration.toFixed(2)}s`);
      }

      setAnimated(!reducedMotion && sourceWidth > 0);
    }

    updateTrack();
    window.addEventListener('resize', updateTrack);

    return () => window.removeEventListener('resize', updateTrack);
  }, [items.length]);

  return (
    <div className="awards-marquee">
      <div className={`awards-track${animated ? ' is-animated' : ''}`} ref={marqueeRef}>
        <div className="awards-group" ref={sourceGroupRef}>
          {items.map((item) => (
            <AwardCard item={item} key={item.image} onOpen={onOpen} />
          ))}
        </div>

        {[0, 1, 2].map((groupIndex) => (
          <div className="awards-group" aria-hidden="true" key={groupIndex}>
            {items.map((item) => (
              <AwardCard item={item} key={`${groupIndex}-${item.image}`} onOpen={onOpen} hidden />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
