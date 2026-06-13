import { useState } from 'react';
import CertificateGallery from '../components/CertificateGallery';
import Lightbox from '../components/Lightbox';
import PageShell from '../components/PageShell';
import { certificates, certificatesFooter } from '../data/certificates';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function CertificatesPage() {
  const [previewItem, setPreviewItem] = useState(null);

  useDocumentMeta({
    title: 'Certificates - Yizreel Schwartz Sipahutar',
    description:
      'Previewable certificates, official documents, and training records from competitions, research, internships, and learning programs.',
    lang: 'en'
  });

  return (
    <PageShell footerLines={certificatesFooter}>
      <section className="page-hero section-shell reveal">
        <p className="eyebrow">Certificates</p>
        <h1>Certificates and official records.</h1>
        <p className="page-intro">
          A previewable archive of certificates, training records, and official documents.
        </p>
      </section>

      <section className="section-shell certificates-section">
        <div className="section-heading reveal">
          <span className="section-index">01</span>
          <div>
            <p className="eyebrow">Archive</p>
            <h2>{certificates.length} previewable files curated from the Certificate folder.</h2>
          </div>
        </div>

        <CertificateGallery items={certificates} onPreview={setPreviewItem} />
        <Lightbox item={previewItem} onClose={() => setPreviewItem(null)} />
      </section>
    </PageShell>
  );
}
