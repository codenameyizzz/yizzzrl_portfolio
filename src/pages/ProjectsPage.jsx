import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { projectCtaLinks, projects, projectsFooter } from '../data/siteContent';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ProjectsPage() {
  useDocumentMeta({
    title: 'Projects - Yizreel Schwartz Sipahutar',
    description:
      'Selected projects by Yizreel Schwartz Sipahutar across backend engineering, full-stack platforms, smart agriculture, and software experimentation.',
    lang: 'en'
  });

  return (
    <PageShell footerLines={projectsFooter}>
      <section className="page-hero section-shell reveal">
        <p className="eyebrow">Projects</p>
        <h1>Selected software work across enterprise, campus, research, and product experimentation.</h1>
        <p className="page-intro">
          These projects reflect how I work across backend systems, full-stack delivery, interfaces, databases, and technical problem-solving.
        </p>
      </section>

      <section className="section-shell page-stack">
        {projects.map((project) => (
          <article className="detail-card reveal" data-speed={project.speed} key={project.title}>
            <div className="detail-header">
              <span className="article-type">{project.period}</span>
              <span className="detail-role">{project.role}</span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="section-shell contact-section">
        <div className="contact-panel reveal">
          <div>
            <p className="eyebrow">Next</p>
            <h2>Want to see how I think beyond shipping code?</h2>
            <p>
              Visit the writing page for technical notes, reflections on backend work, and ideas shaped by research, engineering, and leadership experience.
            </p>
          </div>

          <div className="contact-links">
            {projectCtaLinks.map((item) =>
              item.internal ? (
                <Link key={item.label} to={item.href}>
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  key={item.label}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
