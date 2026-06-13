import { useEffect } from 'react';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [item, onClose]);

  return (
    <div
      className={`lightbox${item ? ' is-open' : ''}`}
      aria-hidden={item ? 'false' : 'true'}
      role="dialog"
      aria-label="Award and achievement preview"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button className="lightbox-close" type="button" aria-label="Close preview" onClick={onClose}>
        Close
      </button>

      <div className="lightbox-panel">
        {item?.image ? <img className="lightbox-image" src={item.image} alt={item.imageAlt || item.title} /> : null}
        <div className="lightbox-copy">
          <p className="lightbox-title">{item?.title || ''}</p>
          <p className="lightbox-description">{item?.description || ''}</p>
        </div>
      </div>
    </div>
  );
}
