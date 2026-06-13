export default function SiteFooter({ lines }) {
  return (
    <footer className="site-footer reveal">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </footer>
  );
}
