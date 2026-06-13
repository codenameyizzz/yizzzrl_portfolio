export default function CertificateGallery({ items, onPreview }) {
  return (
    <div className="certificate-grid">
      {items.map((item) => (
        <article className="certificate-card reveal" key={item.id}>
          <div className={`certificate-preview certificate-preview-${item.kind}`}>
            {item.kind === 'image' ? (
              <img src={item.src} alt={item.title} />
            ) : (
              <div className="certificate-preview-pdf">
                <span className="certificate-preview-badge">{item.format}</span>
                <strong>{item.category}</strong>
                <span>Preview available in modal</span>
              </div>
            )}
          </div>

          <div className="certificate-meta">
            <span className="certificate-chip">{item.category}</span>
            <span className="certificate-chip certificate-chip-secondary">{item.format}</span>
          </div>

          <div className="certificate-copy">
            <h3>{item.title}</h3>
            <p className="certificate-issuer">{item.issuer}</p>
            <p>{item.summary}</p>
          </div>

          <div className="certificate-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={() =>
                onPreview({
                  kind: item.kind,
                  src: item.src,
                  title: item.title,
                  description: `${item.issuer} - ${item.summary}`,
                  actionHref: item.src,
                  actionLabel: item.kind === 'pdf' ? 'Open PDF' : 'Open image'
                })
              }
            >
              Preview
            </button>
            <a className="button button-secondary" href={item.src} target="_blank" rel="noreferrer">
              Open file
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
