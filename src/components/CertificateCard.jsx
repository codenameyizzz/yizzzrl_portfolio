import { lazy, Suspense } from 'react';

const PdfThumbnail = lazy(() =>
  import('./PdfPreview').then((module) => ({
    default: module.PdfThumbnail
  }))
);

function buildPreviewItem(item) {
  return {
    kind: item.kind,
    src: item.src,
    title: item.title,
    description: `${item.issuer} - ${item.summary}`,
    actionHref: item.src,
    actionLabel: item.kind === 'pdf' ? 'Open PDF' : 'Open image'
  };
}

function CertificatePreview({ item, hidden }) {
  return (
    <div className={`certificate-preview certificate-preview-${item.kind}`}>
      {item.kind === 'image' ? (
        <img src={item.src} alt={hidden ? '' : item.title} />
      ) : (
        <Suspense fallback={<div className="pdf-loading">Preparing thumbnail...</div>}>
          <PdfThumbnail src={item.src} title={item.title} />
        </Suspense>
      )}
    </div>
  );
}

function CertificateMeta({ item }) {
  const summary = item.summary.trim().replace(/\.$/, '');

  return (
    <>
      <div className="certificate-meta">
        <span className="certificate-chip">{item.category}</span>
        <span className="certificate-chip certificate-chip-secondary">{item.format}</span>
      </div>

      <div className="certificate-copy">
        <h3>{item.title}</h3>
        <p className="certificate-issuer">{item.issuer}</p>
        <p>{summary}</p>
      </div>
    </>
  );
}

export default function CertificateCard({
  item,
  onPreview,
  hidden = false,
  compact = false
}) {
  const className = [
    'certificate-card',
    hidden ? '' : 'reveal',
    compact ? 'certificate-card-compact' : '',
    hidden ? 'certificate-card-hidden' : ''
  ]
    .filter(Boolean)
    .join(' ');

  if (hidden) {
    return (
      <div className={className} aria-hidden="true">
        <CertificatePreview hidden={hidden} item={item} />
        <CertificateMeta item={item} />
      </div>
    );
  }

  if (compact) {
    return (
      <button className={`${className} certificate-card-button`} type="button" onClick={() => onPreview(buildPreviewItem(item))}>
        <CertificatePreview item={item} />
        <CertificateMeta item={item} />
      </button>
    );
  }

  return (
    <article className={className}>
      <CertificatePreview item={item} />
      <CertificateMeta item={item} />

      <div className="certificate-actions">
        <button
          className="button button-primary"
          type="button"
          onClick={() => onPreview(buildPreviewItem(item))}
        >
          Preview
        </button>
        <a className="button button-secondary" href={item.src} target="_blank" rel="noreferrer">
          Open file
        </a>
      </div>
    </article>
  );
}
