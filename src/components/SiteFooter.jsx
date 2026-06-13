export default function SiteFooter({ lines }) {
  return (
    <footer className="site-footer reveal">
      <div className="site-footer-copy">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="site-footer-signoff">Yizreel Schwartz Sipahutar 2026</p>
    </footer>
  );
}
