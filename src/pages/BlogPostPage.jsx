import { Link, Navigate, useParams } from 'react-router-dom';
import ArticleBlocks from '../components/ArticleBlocks';
import PageShell from '../components/PageShell';
import { blogPosts } from '../data/siteContent';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  useDocumentMeta(
    post
      ? {
          title: post.pageTitle,
          description: post.metaDescription,
          lang: post.lang
        }
      : {
          title: 'Page Not Found - Yizreel Schwartz Sipahutar',
          description: 'The page you requested could not be found.',
          lang: 'en'
        }
  );

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageShell footerLines={post.footer}>
      <section className="section-shell article-hero reveal">
        <Link className="article-back" to="/blog">
          Back to blog
        </Link>
        <p className="eyebrow">{post.heroEyebrow}</p>
        <h1>{post.title}</h1>
        <p className="page-intro">{post.intro}</p>
      </section>

      <section className="section-shell article-body reveal">
        <ArticleBlocks blocks={post.body} />
      </section>
    </PageShell>
  );
}
