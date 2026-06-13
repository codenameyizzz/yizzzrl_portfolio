import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { blogCtaLinks, blogFooter, blogPosts } from '../data/siteContent';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const archivePosts = blogPosts.filter((post) => !post.featured);
  const paginationPosts = [featuredPost, ...archivePosts].slice(0, 5);

  useDocumentMeta({
    title: 'Blog - Yizreel Schwartz Sipahutar',
    description:
      'Writing and technical reflections by Yizreel Schwartz Sipahutar on backend systems, engineering practice, research learning, and student leadership.',
    lang: 'en'
  });

  return (
    <PageShell footerLines={blogFooter}>
      <section className="page-hero blog-page-hero section-shell reveal">
        <p className="eyebrow">Blog / Articles</p>
        <h1>Writing on systems, engineering, and practical product work.</h1>
        <p className="page-intro">
          Selected articles, technical notes, and reflections collected in a cleaner editorial layout.
        </p>
      </section>

      <section className="section-shell featured-article reveal">
        <Link className="featured-article-card" to={`/${featuredPost.slug}`}>
          <div className={`featured-article-thumb blog-thumb ${featuredPost.thumbClassName}`}></div>
          <div>
            <p className="eyebrow">Featured article</p>
            <h2>{featuredPost.title}</h2>
            <p className="page-intro">{featuredPost.listExcerpt}</p>
            <span className="blog-entry-arrow">{featuredPost.featuredCta || 'Open article'}</span>
          </div>
        </Link>
      </section>

      <section className="section-shell blog-list">
        {archivePosts.map((post) => (
          <Link className="blog-entry reveal" key={post.slug} to={`/${post.slug}`}>
            <div className={`blog-thumb ${post.thumbClassName}`}></div>
            <div>
              <div className="blog-entry-meta">
                {post.listMeta.map((meta) => (
                  <span key={meta}>{meta}</span>
                ))}
              </div>
              <h2>{post.title}</h2>
              <p>{post.listExcerpt}</p>
            </div>
            <span className="blog-entry-arrow">Open</span>
          </Link>
        ))}
      </section>

      <section className="section-shell blog-pagination reveal">
        {paginationPosts.map((post, index) =>
          index === 0 ? (
            <span className="pagination-item is-current" key={post.slug}>
              01
            </span>
          ) : (
            <Link className="pagination-item" key={post.slug} to={`/${post.slug}`}>
              {String(index + 1).padStart(2, '0')}
            </Link>
          )
        )}
      </section>

      <section className="section-shell contact-section">
        <div className="contact-panel reveal">
          <div>
            <p className="eyebrow">Next</p>
            <h2>Want the implementation side too?</h2>
            <p>
              Visit the projects page for concrete software work, engineering responsibilities, and technology stacks used across your portfolio.
            </p>
          </div>

          <div className="contact-links">
            {blogCtaLinks.map((item) =>
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
