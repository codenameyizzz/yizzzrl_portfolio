import { useState } from 'react';
import { Link } from 'react-router-dom';
import AwardsMarquee from '../components/AwardsMarquee';
import CertificatesMarquee from '../components/CertificatesMarquee';
import Lightbox from '../components/Lightbox';
import PageShell from '../components/PageShell';
import ProjectHighlightsScroller from '../components/ProjectHighlightsScroller';
import SocialIcon from '../components/SocialIcon';
import { featuredCertificates } from '../data/certificates';
import {
  aboutPanels,
  achievements,
  awards,
  blogPosts,
  heroMetrics,
  homeFooter,
  experienceTimeline,
  primaryContactLinks,
  projectHighlights,
  socialLinks,
  techStack
} from '../data/siteContent';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function HomePage() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const blogPreviews = blogPosts.filter((post) => !post.featured).slice(0, 3);

  useDocumentMeta({
    title: 'Yizreel Schwartz Sipahutar - Portfolio',
    description:
      'Portfolio of Yizreel Schwartz Sipahutar, an Informatics student and software engineer focused on full-stack development, backend systems, and modern digital experiences.',
    lang: 'en'
  });

  return (
    <PageShell footerLines={homeFooter}>
      <section className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Software engineer / final-year informatics student / backend and full-stack developer</p>
          <h1>
            Building modern digital systems
            <span>with clarity, structure, and motion.</span>
          </h1>
          <p className="hero-text">
            I am Yizreel Schwartz Sipahutar, a final-year Informatics undergraduate at Del Institute of Technology.
            I build full-stack and backend products with React, Laravel, Node.js, .NET, SQL, and cloud-oriented workflows.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              Explore projects
            </Link>
            <Link className="button button-secondary" to="/#contact">
              Get in touch
            </Link>
            <a
              className="button button-secondary"
              href="https://drive.google.com/file/d/115rcYevSjgu-hWZaTYLL5ZmSsAySi679/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Access CV
            </a>
          </div>

          <dl className="hero-metrics reveal">
            {heroMetrics.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-stage hero-stage-grid reveal">
          <figure className="profile-card" data-speed="0.92" tabIndex="0">
            <img src="/yizzz.png" alt="Portrait of Yizreel Schwartz Sipahutar" />
            <figcaption className="profile-overlay">
              <span className="profile-label">Yizreel Schwartz Sipahutar</span>
              <strong>Software Engineer / Final-Year Informatics Student</strong>
              <span className="profile-location">Toba, Indonesia</span>
            </figcaption>
          </figure>

          <div className="stage-card stage-card-main" data-speed="0.7">
            <p className="stage-label">Current direction</p>
            <h2>Building backend and full-stack products with clean structure and practical impact.</h2>
          </div>

          <div className="stage-card social-card" data-speed="1.05">
            {socialLinks.map((item) => (
              <a key={item.label} className="social-chip" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={item.ariaLabel}>
                <SocialIcon name={item.iconName} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="orb orb-large" data-speed="1.4"></div>
          <div className="orb orb-small" data-speed="0.9"></div>
        </div>
      </section>

      <section className="ticker-block reveal">
        <div className="ticker-track">
          <span>Backend developer</span>
          <span>Full-stack builder</span>
          <span>Research trainee</span>
          <span>Innovation competition winner</span>
          <span>Chairman of DDSC</span>
          <span>Backend developer</span>
          <span>Full-stack builder</span>
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <div className="section-heading reveal">
          <span className="section-index">01</span>
          <div>
            <p className="eyebrow">About me</p>
            <h2>Technical depth, leadership experience, and a calm product mindset.</h2>
          </div>
        </div>

        <div className="about-grid">
          <article className="about-story reveal">
            <p>
              I am a final-year Informatics student at Del Institute of Technology, expected to graduate in September 2026.
              My work combines backend engineering, full-stack development, and modern interface thinking.
            </p>
            <p>
              I have hands-on experience leading software development projects, working with Laravel, React.js, Node.js, and ASP.NET,
              while managing data with PostgreSQL, MySQL, and MariaDB. I also explore cloud-oriented workflows with Google Cloud Platform.
            </p>
          </article>

          <div className="about-panels">
            {aboutPanels.map((panel) => (
              <article className="mini-panel reveal" data-speed={panel.speed} key={panel.label}>
                <span>{panel.label}</span>
                <strong>{panel.content}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell preview-section">
        <div className="section-heading reveal">
          <span className="section-index">02</span>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Projects now live on a dedicated page with deeper detail and better storytelling.</h2>
          </div>
        </div>

        <ProjectHighlightsScroller items={projectHighlights} />

        <div className="section-cta reveal">
          <Link className="button button-primary" to="/projects">
            Open projects page
          </Link>
        </div>
      </section>

      <section className="section-shell preview-section">
        <div className="section-heading reveal">
          <span className="section-index">03</span>
          <div>
            <p className="eyebrow">Writing</p>
            <h2>Blog ideas and technical notes now have a separate page too.</h2>
          </div>
        </div>

        <div className="article-grid">
          {blogPreviews.map((post) => (
            <Link className="article-card article-link reveal" key={post.slug} to={`/${post.slug}`}>
              <span className="article-type">{post.listMeta[0]}</span>
              <h3>{post.title}</h3>
              <p>{post.listExcerpt}</p>
            </Link>
          ))}
        </div>

        <div className="section-cta reveal">
          <Link className="button button-primary" to="/blog">
            Open blog page
          </Link>
        </div>
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="section-heading reveal">
          <span className="section-index">04</span>
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Software engineering, research training, teaching support, and community leadership.</h2>
          </div>
        </div>

        <div className="experience-timeline">
          {experienceTimeline.map((item) => (
            <article className="timeline-item reveal" key={`${item.period}-${item.title}`}>
              <span className="timeline-dot"></span>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-card">
                <p className="timeline-eyebrow">{item.organization}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell stack-section">
        <div className="section-heading reveal">
          <span className="section-index">05</span>
          <div>
            <p className="eyebrow">Stack</p>
            <h2>The tools and technologies I use to build full-stack, backend, and cloud-oriented products.</h2>
          </div>
        </div>

        <div className="stack-logo-grid">
          {techStack.map((item) => (
            <article className="stack-logo-item reveal" data-speed={item.speed} key={item.label}>
              <span className="stack-logo" aria-hidden="true">
                <img className="real-icon" src={item.icon} alt={item.label} />
              </span>
              <span className="stack-logo-label">{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell achievements-section" id="achievements">
        <div className="section-heading reveal">
          <span className="section-index">06</span>
          <div>
            <p className="eyebrow">Achievements</p>
            <h2>Competition results, national recognition, and international representation.</h2>
          </div>
        </div>

        <div className="achievement-cards">
          {achievements.map((item) => (
            <button
              className="achievement-card reveal"
              key={item.title}
              type="button"
              style={{ '--delay': item.delay }}
              onClick={() =>
                setLightboxItem({
                  title: item.modalTitle,
                  description: item.modalDescription
                })
              }
            >
              <span className="achievement-badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span className="achievement-hover-copy">{item.hoverCopy}</span>
            </button>
          ))}
        </div>

        <div className="awards-copy reveal">
          <p className="eyebrow">Award moments</p>
          <p>Selected competition and milestone photos. Click any image to open the larger preview.</p>
        </div>

        <AwardsMarquee items={awards} onOpen={setLightboxItem} />
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      </section>

      <section className="section-shell certificates-section" id="certificates">
        <div className="section-heading reveal">
          <span className="section-index">07</span>
          <div>
            <p className="eyebrow">Certificate</p>
            <h2>Selected certificates you can preview directly.</h2>
          </div>
        </div>

        <div className="certificates-intro reveal">
          <p>A compact preview from the wider certificate archive.</p>
        </div>

        <CertificatesMarquee items={featuredCertificates} onPreview={setLightboxItem} />

        <div className="section-cta reveal">
          <Link className="button button-primary" to="/certificates">
            View all certificates
          </Link>
        </div>
      </section>

      <section className="section-shell contact-section" id="contact">
        <div className="contact-panel reveal">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to meaningful engineering work, collaboration, and new opportunities.</h2>
            <p>
              Reach out for software engineering roles, backend and full-stack collaboration, research-related conversations, or project partnerships.
            </p>
          </div>

          <div className="contact-links">
            {primaryContactLinks.map((item) => (
              <a
                href={item.href}
                key={item.label}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
