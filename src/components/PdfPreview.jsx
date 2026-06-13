import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

function useElementWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    function updateWidth() {
      setWidth(ref.current?.clientWidth || 0);
    }

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, width];
}

function useVisibleOnce() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '160px 0px'
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [visible]);

  return [ref, visible];
}

export function PdfThumbnail({ src, title }) {
  const [visibilityRef, visible] = useVisibleOnce();
  const [containerRef, width] = useElementWidth();

  return (
    <div className="pdf-thumbnail-shell" ref={visibilityRef}>
      <div className="pdf-thumbnail-frame" ref={containerRef}>
        {visible ? (
          <Document
            file={src}
            loading={<div className="pdf-loading">Loading thumbnail...</div>}
            error={<div className="pdf-error">PDF thumbnail unavailable</div>}
          >
            <Page
              pageNumber={1}
              width={Math.max(180, width || 280)}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        ) : (
          <div className="pdf-loading">Preparing thumbnail...</div>
        )}
      </div>
      <span className="sr-only">{title}</span>
    </div>
  );
}

export function PdfViewer({ src, title }) {
  const [containerRef, width] = useElementWidth();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPageNumber(1);
  }, [src]);

  return (
    <div className="pdf-viewer">
      <div className="pdf-toolbar">
        <button
          className="pdf-toolbar-button"
          disabled={pageNumber <= 1}
          type="button"
          onClick={() => setPageNumber((current) => Math.max(1, current - 1))}
        >
          Previous
        </button>
        <span className="pdf-toolbar-status">
          Page {pageNumber}{numPages ? ` of ${numPages}` : ''}
        </span>
        <button
          className="pdf-toolbar-button"
          disabled={numPages ? pageNumber >= numPages : true}
          type="button"
          onClick={() => setPageNumber((current) => Math.min(numPages, current + 1))}
        >
          Next
        </button>
      </div>

      <div className="pdf-viewer-frame" ref={containerRef}>
        <Document
          file={src}
          loading={<div className="pdf-loading">Loading PDF preview...</div>}
          error={<div className="pdf-error">PDF preview unavailable</div>}
          onLoadSuccess={({ numPages: pages }) => setNumPages(pages)}
        >
          <Page
            pageNumber={pageNumber}
            width={Math.max(260, Math.min(width || 840, 840))}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>

      <p className="pdf-viewer-caption">{title}</p>
    </div>
  );
}
