import { useRef } from 'react';
import CertificateCard from './CertificateCard';

export default function CertificatesMarquee({ items, onPreview }) {
  const viewportRef = useRef(null);

  function scrollByCard(direction) {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const card = viewport.querySelector('.certificate-card');
    const cardWidth = card?.getBoundingClientRect().width || viewport.clientWidth * 0.86;
    const gap = 18;

    viewport.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth'
    });
  }

  return (
    <div className="certificate-scroller reveal">
      <div className="certificate-scroll-controls">
        <button
          aria-label="Scroll certificates to the left"
          className="certificate-scroll-button"
          type="button"
          onClick={() => scrollByCard(-1)}
        >
          Prev
        </button>
        <button
          aria-label="Scroll certificates to the right"
          className="certificate-scroll-button"
          type="button"
          onClick={() => scrollByCard(1)}
        >
          Next
        </button>
      </div>

      <div className="certificate-scroll-viewport" ref={viewportRef}>
        {items.map((item) => (
          <CertificateCard compact item={item} key={item.id} onPreview={onPreview} />
        ))}
      </div>
    </div>
  );
}
