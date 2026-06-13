import { Link, NavLink, useLocation } from 'react-router-dom';
import { useActiveSection } from '../hooks/useActiveSection';

const anchorLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

export default function SiteHeader() {
  const location = useLocation();
  const activeSection = useActiveSection();

  return (
    <header className="site-header reveal">
      <Link className="brand" to="/#top">
        <span className="brand-mark"></span>
        <span className="brand-text">Yizreel Schwartz Sipahutar</span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {anchorLinks.slice(0, 2).map((item) => (
          <Link
            key={item.id}
            className={location.pathname === '/' && activeSection === item.id ? 'active' : undefined}
            to={`/#${item.id}`}
          >
            {item.label}
          </Link>
        ))}

        <NavLink className={({ isActive }) => (isActive ? 'active-static' : undefined)} to="/projects">
          Projects
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-static' : undefined)} to="/certificates">
          Certificate
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-static' : undefined)} to="/blog">
          Blog
        </NavLink>

        {anchorLinks.slice(2).map((item) => (
          <Link
            key={item.id}
            className={location.pathname === '/' && activeSection === item.id ? 'active' : undefined}
            to={`/#${item.id}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
