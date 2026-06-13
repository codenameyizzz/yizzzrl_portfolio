import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { homeFooter } from '../data/siteContent';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function NotFoundPage() {
  useDocumentMeta({
    title: 'Page Not Found - Yizreel Schwartz Sipahutar',
    description: 'The page you requested could not be found.',
    lang: 'en'
  });

  return (
    <PageShell footerLines={homeFooter}>
      <section className="page-hero section-shell reveal">
        <p className="eyebrow">404</p>
        <h1>The page you requested does not exist.</h1>
        <p className="page-intro">Use the main navigation or return to the homepage.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/">
            Back home
          </Link>
          <Link className="button button-secondary" to="/blog">
            Open blog
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
