import CertificateCard from './CertificateCard';

export default function CertificateGallery({ items, onPreview }) {
  return (
    <div className="certificate-grid">
      {items.map((item) => (
        <CertificateCard item={item} key={item.id} onPreview={onPreview} />
      ))}
    </div>
  );
}
