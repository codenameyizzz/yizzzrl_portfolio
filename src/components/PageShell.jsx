import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function PageShell({ children, footerLines, mainId = 'top' }) {
  return (
    <>
      <div className="page-noise"></div>
      <div className="progress-rail">
        <span className="progress-label">Scroll</span>
        <span className="progress-line"></span>
      </div>

      <SiteHeader />

      <main id={mainId}>{children}</main>
      <SiteFooter lines={footerLines} />
    </>
  );
}
