import { useRef } from 'react';
import ProjectHighlightCard from './ProjectHighlightCard';

export default function ProjectHighlightsScroller({ items }) {
  const viewportRef = useRef(null);

  function scrollByCard(direction) {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const card = viewport.querySelector('.project-highlight-card');
    const cardWidth = card?.getBoundingClientRect().width || viewport.clientWidth * 0.8;
    const gap = 18;

    viewport.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth'
    });
  }

  return (
    <div className="project-highlight-scroller reveal">
      <div className="project-highlight-controls">
        <button
          aria-label="Scroll projects to the left"
          className="project-highlight-control"
          type="button"
          onClick={() => scrollByCard(-1)}
        >
          Prev
        </button>
        <button
          aria-label="Scroll projects to the right"
          className="project-highlight-control"
          type="button"
          onClick={() => scrollByCard(1)}
        >
          Next
        </button>
      </div>

      <div className="project-highlight-track" ref={viewportRef}>
        {items.map((project) => (
          <ProjectHighlightCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
